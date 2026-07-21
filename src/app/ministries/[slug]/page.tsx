import { UnderConstructionPlaceholder } from "@/components/layout/UnderConstructionPlaceholder";

export default async function MinistryDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <UnderConstructionPlaceholder pageTitle={`Ministry: ${slug}`} routePath={`/ministries/${slug}`} />;
}
