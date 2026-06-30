// Server component: renders FAQPage structured data into the initial HTML
// (reliable for Googlebot - unlike a "use client" component's script).
import { createElement } from "react";
import { t } from "@/data/site-i18n";
import { serializeJsonLd } from "@/lib/json-ld-serialize";

export default function FaqJsonLd({ locale = "en" }) {
  const faq = (t(locale).faq || []);
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
  return createElement("script", {
    type: "application/ld+json",
    children: serializeJsonLd(data),
  });
}
