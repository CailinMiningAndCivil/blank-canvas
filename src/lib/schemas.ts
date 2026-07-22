// JSON-LD schema helpers for Cailin Mining & Civil
const SITE = "https://www.cailinminingcivil.com";
const PROVIDER = {
  "@type": "Organization",
  name: "Cailin Mining & Civil",
  url: SITE,
  telephone: "+61 483 951 501",
  areaServed: "Perth, Western Australia",
};

export const serviceSchema = (opts: {
  name: string;
  description: string;
  path: string;
  price?: string;
  category?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: opts.name,
  description: opts.description,
  serviceType: opts.category ?? "Machine Operator Training",
  url: `${SITE}${opts.path}`,
  provider: PROVIDER,
  areaServed: { "@type": "Place", name: "Perth, Western Australia" },
  ...(opts.price && {
    offers: {
      "@type": "Offer",
      price: opts.price,
      priceCurrency: "AUD",
      url: `${SITE}${opts.path}`,
    },
  }),
});

export const faqSchema = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
});

export const servicesItemList = (
  services: { name: string; path: string; description: string }[],
) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Machine Operator Courses",
  itemListElement: services.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Service",
      name: s.name,
      description: s.description,
      url: `${SITE}${s.path}`,
      provider: PROVIDER,
    },
  })),
});
