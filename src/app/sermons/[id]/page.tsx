import { UnderConstructionPlaceholder } from "@/components/layout/UnderConstructionPlaceholder";

export default async function SermonDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <UnderConstructionPlaceholder pageTitle={`Sermon Media: ${id}`} routePath={`/sermons/${id}`} />;
}
