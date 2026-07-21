import { UnderConstructionPlaceholder } from "@/components/layout/UnderConstructionPlaceholder";

export default function SermonDetailPage({ params }: { params: { id: string } }) {
  return <UnderConstructionPlaceholder pageTitle={`Sermon Media: ${params.id}`} routePath={`/sermons/${params.id}`} />;
}
