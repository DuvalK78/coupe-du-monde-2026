import TeamCard from "@/components/TeamCard";
import { Team } from "@/lib/types";
import teamsData from "@/data/teams.json";

export default function TeamsPage() {
  const teams: Team[] = teamsData.teams;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Toutes les équipes (48)</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teams.map((team) => (
          <TeamCard key={team.id} team={team} />
        ))}
      </div>
    </div>
  );
}
