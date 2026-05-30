"use client";
import { Match } from "@/lib/types";

export default function MatchList({ matches }: { matches: Match[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border">
        <thead>
          <tr className="bg-primary text-white">
            <th className="p-2">Date</th>
            <th className="p-2">Heure</th>
            <th className="p-2">Équipe 1</th>
            <th className="p-2">Équipe 2</th>
            <th className="p-2">Stade</th>
            <th className="p-2">Phase</th>
          </tr>
        </thead>
        <tbody>
          {matches.map((match, index) => (
            <tr key={index} className="border-t">
              <td className="p-2">{match.date}</td>
              <td className="p-2">{match.time}</td>
              <td className="p-2">{match.team1}</td>
              <td className="p-2">{match.team2}</td>
              <td className="p-2">{match.stadium}</td>
              <td className="p-2">{match.phase}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
