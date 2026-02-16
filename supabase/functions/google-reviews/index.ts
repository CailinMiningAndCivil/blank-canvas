import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const apiKey = Deno.env.get('GOOGLE_PLACES_API_KEY');
    if (!apiKey) {
      throw new Error('Google Places API key not configured');
    }

    const placeId = 'ChIJD9C64wfFYWMRgmwBCh2m9Z8';

    // Use Places API (New) to get place details with reviews
    const url = `https://places.googleapis.com/v1/places/${placeId}?fields=displayName,rating,userRatingCount,reviews&key=${apiKey}`;

    const response = await fetch(url, {
      headers: {
        'X-Goog-FieldMask': 'displayName,rating,userRatingCount,reviews',
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Google Places API error:', errorText);
      throw new Error(`Google API returned ${response.status}`);
    }

    const data = await response.json();

    // Transform to a clean format
    const reviews = (data.reviews || []).map((review: any) => ({
      author: review.authorAttribution?.displayName || 'Anonymous',
      photoUrl: review.authorAttribution?.photoUri || null,
      rating: review.rating || 5,
      text: review.text?.text || '',
      time: review.relativePublishTimeDescription || '',
      profileUrl: review.authorAttribution?.uri || null,
    }));

    const result = {
      name: data.displayName?.text || 'Cailin Mining & Civil',
      rating: data.rating || 0,
      totalReviews: data.userRatingCount || 0,
      reviews,
    };

    return new Response(JSON.stringify(result), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
