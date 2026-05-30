import MatchList from "@/components/MatchList";
import scheduleData from "@/data/schedule.json";

export default function SchedulePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Calendrier complet</h1>
      <MatchList matches={scheduleData.matches} />
    </div>
  );
}
