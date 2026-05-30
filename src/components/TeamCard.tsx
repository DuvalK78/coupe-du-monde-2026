"use client";
import Link from "next/link";
import Image from "next/image";
import { Team } from "@/lib/types";

export default function TeamCard({ team }: { team: Team }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="flex items-center p-4">
        <Image
          src={team.flag}
          alt={`Drapeau ${team.name}`}
          width={60}
          height={40}
          className="mr-4"
        />
        <div className="flex-1">
          <h2 className="text-xl font-bold text-primary">{team.name}</h2>
          <p className="text-gray-600">{team.nickname}</p>
        </div>
        <Image
          src={team.crest}
          alt={`Écusson ${team.name}`}
          width={50}
          height={50}
        />
      </div>
      <div className="p-4 border-t">
        <p><strong>Groupe:</strong> {team.group}</p>
        <p><strong>Capitale:</strong> {team.capital}</p>
        <p><strong>Titres:</strong> {team.worldCups.length}</p>
        <Link
          href={`/teams/${team.id}`}
          className="mt-2 inline-block bg-primary text-white px-4 py-2 rounded hover:bg-secondary transition-colors"
        >
          Voir la fiche
        </Link>
      </div>
    </div>
  );
}
