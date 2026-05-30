import Link from "next/link";
import TeamCard from "@/components/TeamCard";
import { Team } from "@/lib/types";
import teamsData from "@/data/teams.json";

export default function Home() {
  const teams: Team[] = teamsData.teams.slice(0, 4); // Affiche 4 équipes en exemple

  return (
    <div>
      <section className="bg-secondary text-white p-8 mb-8 rounded-lg">
        <h1 className="text-4xl font-bold mb-4">Bienvenue sur le Guide Ultime de la Coupe du Monde 2026 !</h1>
        <p className="text-xl">48 équipes, 12 groupes, 104 matchs. Suivez toute la compétition ici.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Équipes à l'affiche</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {teams.map((team) => (
            <TeamCard key={team.id} team={team} />
          ))}
        </div>
        <div className="mt-4">
          <Link
            href="/teams"
            className="bg-primary text-white px-4 py-2 rounded hover:bg-secondary transition-colors"
          >
            Voir toutes les équipes →
          </Link>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Prochains matchs</h2>
        <p>Intègre ici un composant MatchList avec les prochains matchs (à filtrer par date).</p>
      </section>
    </div>
  );
}
