"use client";
import Link from "next/link";
import { Group } from "@/lib/types";

export default function GroupTable({ groups }: { groups: Group[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {groups.map((group) => (
        <div key={group.name} className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 text-primary">{group.name}</h2>
          <ul className="space-y-2">
            {group.teams.map((teamId) => (
              <li key={teamId} className="p-2 bg-gray-50 rounded hover:bg-gray-100">
                <Link href={`/teams/${teamId}`} className="flex justify-between items-center">
                  <span>{teamId.toUpperCase()}</span>
                  <span>→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
