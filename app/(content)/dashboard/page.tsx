import RopaCard from "@/features/dashboard/RopaCard";
import AccesorioCard from "@/features/dashboard/AccesorioCard";
export default function DashboardPage() {
  return (
    <div className="flex justify-center gap-6 mt-10 flex-wrap">
      <RopaCard/>
      <AccesorioCard/>
    </div>
  );
}
