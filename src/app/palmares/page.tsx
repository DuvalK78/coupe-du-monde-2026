import palmaresData from "@/data/palmares.json";

export default function PalmaresPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Palmarès de la Coupe du Monde</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border">
          <thead>
            <tr className="bg-primary text-white">
              <th className="p-2 text-left">Pays</th>
              <th className="p-2 text-left">Nombre de titres</th>
              <th className="p-2 text-left">Années</th>
            </tr>
          </thead>
          <tbody>
            {palmaresData.winners.map((winner, index) => (
              <tr key={index} className="border-t">
                <td className="p-2">{winner.country}</td>
                <td className="p-2">{winner.titles}</td>
                <td className="p-2">{winner.years.join(", ")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
