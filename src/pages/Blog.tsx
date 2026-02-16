import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { HeroImage } from "@/components/ui/hero-image";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";
import { ArrowRight, Calendar } from "lucide-react";

import fleetLineupWide from "@/assets/photos/fleet-lineup-wide.jpg";

const Blog = () => {
  const { data: posts, isLoading } = useQuery({
    queryKey: ["blog-posts"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("published", true)
        .order("published_at", { ascending: false });

      if (error) throw error;
      return data;
    },
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <HeroImage src={fleetLineupWide} alt="Mining equipment fleet" />
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-primary font-medium tracking-widest uppercase mb-4">News & Insights</p>
            <h1 className="font-display text-5xl md:text-6xl text-foreground mb-6">
              Mining & Civil Blog
            </h1>
            <p className="text-muted-foreground text-lg">
              Tips, industry news, and success stories from the mining and civil construction world.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-card rounded-2xl overflow-hidden border border-border animate-pulse">
                  <div className="h-48 bg-muted" />
                  <div className="p-6 space-y-4">
                    <div className="h-4 bg-muted rounded w-1/4" />
                    <div className="h-6 bg-muted rounded w-3/4" />
                    <div className="h-4 bg-muted rounded w-full" />
                    <div className="h-4 bg-muted rounded w-2/3" />
                  </div>
                </div>
              ))}
            </div>
          ) : posts && posts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300"
                >
                  {post.featured_image && (
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.featured_image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>
                  )}
                  <div className="p-6">
                    {post.published_at && (
                      <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                        <Calendar className="w-4 h-4" />
                        <span>{format(new Date(post.published_at), "d MMMM yyyy")}</span>
                      </div>
                    )}
                    <h2 className="font-display text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-2 text-primary font-medium text-sm">
                      Read More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg mb-4">No blog posts yet.</p>
              <p className="text-muted-foreground">Check back soon for industry tips and news!</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
