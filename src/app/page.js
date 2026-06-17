import HomeExact from "@/components/home-exact/home-exact";
import { t } from "@/data/site-i18n";

export function generateMetadata() {
  const m = t("en").meta;
  return {
    title: m.homeTitle,
    description: m.homeDesc,
    robots: { index: true, follow: true },
    alternates: { canonical: "https://versiondude.net/" },
  };
}

export default function Page() {
  return <HomeExact />;
}
