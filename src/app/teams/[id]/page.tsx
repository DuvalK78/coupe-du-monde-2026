import Image from "next/image";
import MiniMap from "@/components/MiniMap";
import { Team } from "@/lib/types";
import teamsData from "@/data/teams.json";

export default function TeamPage({ params }: { params: { id: string } }) {
  const team: Team | undefined = teamsData.teams.find((t) => t.id === params.id);
  if (!team) return <div>Équipe non trouvée</div>;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-4">
            <Image
              src={team.flag}
              alt={`Drapeau ${team.name}`}
              width={100}
              height={60}
            />
            <div>
              <h1 className="text-3xl font-bold">{team.name}</h1>
              <p className="text-gray-600">{team.nickname}</p>
            </div>
            <Image
              src={team.crest}
              alt={`Écusson ${team.name}`}
              width={80}
              height={80}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p><strong>Capitale:</strong> {team.capital}</p>
              <p><strong>Groupe:</strong> {team.group}</p>
              <p>
                <strong>Titres:</strong> {team.worldCups.length}
                {team.worldCups.length > 0 && (
                  <span>: {team.worldCups.map((wc) => wc.year).join(", ")}</span>
                )}
              </p>
            </div>
            <div>
              <p><strong>Maillots:</strong></p>
              <div className="flex gap-2 mt-2">
                <Image
                  src={team.kit.home}
                  alt="Maillot domicile"
                  width={60}
                  height={80}
                />
                <Image
                  src={team.kit.away}
                  alt="Maillot extérieur"
                  width={60}
                  height={80}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">Localisation</h2>
        <MiniMap coordinates={team.coordinates} country={team.capital} />
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">Effectif 2026</h2>
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 text-left">N°</th>
              <th className="p-2 text-left">Nom</th>
              <th className="p-2 text-left">Poste</th>
              <th className="p-2 text-left">Club</th>
              <th className="p-2 text-left">Âge</th>
            </tr>
          </thead>
          <tbody>
            {team.squad.map((player, index) => (
              <tr key={index} className="border-t">
                <td className="p-2">{player.number}</td>
                <td className="p-2">{player.name}</td>
                <td className="p-2">{player.position}</td>
                <td className="p-2">{player.club}</td>
                <td className="p-2">{player.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Calendrier</h2>
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 text-left">Date</th>
              <th className="p-2 text-left">Adversaire</th>
              <th className="p-2 text-left">Heure</th>
              <th className="p-2 text-left">Stade</th>
              <th className="p-2 text-left">Phase</th>
            </tr>
          </thead>
          <tbody>
            {team.fixtures.map((fixture, index) => (
              <tr key={index} className="border-t">
                <td className="p-2">{fixture.date}</td>
                <td className="p-2">{fixture.opponent}</td>
                <td className="p-2">{fixture.time}</td>
                <td className="p-2">{fixture.stadium}</td>
                <td className="p-2">{fixture.phase}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
