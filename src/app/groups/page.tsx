import GroupTable from "@/components/GroupTable";
import groupsData from "@/data/groups.json";

export default function GroupsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Groupes de la Coupe du Monde 2026</h1>
      <GroupTable groups={groupsData.groups} />
    </div>
  );
}
