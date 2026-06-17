import HomeExact from "@/components/home-exact/home-exact";

export function generateMetadata() {
  return {
    title: "VersionDude — web standards, parsers & developer tooling",
    description: "Web standards, HTML parsing and developer tooling — plus practical guides to open-source, self-hosted and privacy tools.",
    robots: { index: true, follow: true },
    alternates: { canonical: "https://versiondude.net/" },
  };
}

export default function Page() {
  return <HomeExact />;
}
