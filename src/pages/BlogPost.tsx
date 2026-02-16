import { Link, useParams, useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";
import { ArrowLeft, Calendar, Tag } from "lucide-react";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const { data: post, isLoading, error } = useQuery({
    queryKey: ["blog-post", slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("slug", slug)
        .eq("published", true)
        .maybeSingle();

      if (error) throw error;
      return data;
    },
    enabled: !!slug,
  });

  const { data: relatedPosts } = useQuery({
    queryKey: ["related-posts", post?.category, post?.id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("id, title, slug, featured_image, published_at")
        .eq("published", true)
        .eq("category", post!.category)
        .neq("id", post!.id)
        .order("published_at", { ascending: false })
        .limit(3);

      if (error) throw error;
      return data;
    },
    enabled: !!post?.category && !!post?.id,
  });

  if (isLoading) {
    return (
      <Layout>
        <div className="min-h-screen pt-32 pb-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="animate-pulse space-y-8">
              <div className="h-4 bg-muted rounded w-32" />
              <div className="h-12 bg-muted rounded w-3/4" />
              <div className="h-64 bg-muted rounded-2xl" />
              <div className="space-y-4">
                <div className="h-4 bg-muted rounded w-full" />
                <div className="h-4 bg-muted rounded w-full" />
                <div className="h-4 bg-muted rounded w-2/3" />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (error || !post) {
    return (
      <Layout>
        <div className="min-h-screen pt-32 pb-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-4xl text-foreground mb-4">Post Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The blog post you're looking for doesn't exist or has been removed.
            </p>
            <Button asChild variant="hero">
              <Link to="/blog">Back to Blog</Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  // Simple markdown-like rendering for content
  const renderContent = (content: string) => {
    return content.split("\n\n").map((paragraph, index) => {
      // Check for headers
      if (paragraph.startsWith("## ")) {
        return (
          <h2 key={index} className="font-display text-2xl text-foreground mt-8 mb-4">
            {paragraph.replace("## ", "")}
          </h2>
        );
      }
      if (paragraph.startsWith("### ")) {
        return (
          <h3 key={index} className="font-display text-xl text-foreground mt-6 mb-3">
            {paragraph.replace("### ", "")}
          </h3>
        );
      }
      // Check for bullet lists
      if (paragraph.startsWith("- ")) {
        const items = paragraph.split("\n").filter((line) => line.startsWith("- "));
        return (
          <ul key={index} className="list-disc list-inside space-y-2 my-4 text-muted-foreground">
            {items.map((item, i) => (
              <li key={i}>{item.replace("- ", "")}</li>
            ))}
          </ul>
        );
      }
      // Regular paragraph
      return (
        <p key={index} className="text-muted-foreground leading-relaxed mb-4">
          {paragraph}
        </p>
      );
    });
  };

  return (
    <Layout>
      <article className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back Button */}
          <button
            onClick={() => navigate("/blog")}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </button>

          {/* Header */}
          <header className="mb-8">
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <span className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full">
                <Tag className="w-3 h-3" />
                {post.category}
              </span>
              {post.published_at && (
                <span className="inline-flex items-center gap-2 text-muted-foreground text-sm">
                  <Calendar className="w-4 h-4" />
                  {format(new Date(post.published_at), "d MMMM yyyy")}
                </span>
              )}
            </div>
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              {post.title}
            </h1>
            <p className="text-xl text-muted-foreground">
              {post.excerpt}
            </p>
          </header>

          {/* Featured Image */}
          {post.featured_image && (
            <div className="mb-12">
              <img
                src={post.featured_image}
                alt={post.title}
                className="w-full h-80 md:h-96 object-cover rounded-2xl"
              />
            </div>
          )}

          {/* Content */}
          <div className="prose prose-invert max-w-none">
            {renderContent(post.content)}
          </div>

          {/* Related Posts */}
          {relatedPosts && relatedPosts.length > 0 && (
            <section className="mt-16 pt-12 border-t border-border">
              <h2 className="font-display text-2xl text-foreground mb-8">Related Posts</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.id}
                    to={`/blog/${related.slug}`}
                    className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all"
                  >
                    {related.featured_image && (
                      <img
                        src={related.featured_image}
                        alt={related.title}
                        className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    )}
                    <div className="p-4">
                      <h3 className="font-display text-base text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {related.title}
                      </h3>
                      {related.published_at && (
                        <p className="text-muted-foreground text-xs mt-2">
                          {format(new Date(related.published_at), "d MMM yyyy")}
                        </p>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
