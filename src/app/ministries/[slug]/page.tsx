import { UnderConstructionPlaceholder } from "@/components/layout/UnderConstructionPlaceholder";

export default function MinistryDetailPage({ params }: { params: { slug: string } }) {
  return <UnderConstructionPlaceholder pageTitle={`Ministry: ${params.slug}`} routePath={`/ministries/${params.slug}`} />;
}
