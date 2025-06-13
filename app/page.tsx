import ComoTrabalhamos from "@/components/ComoTrabalhamos";
import HeroImage from "@/components/HeroImage";
import Servicos from "@/components/Servicos";
import Navbar from "@/components/Navbar";

export default function Home() {
  

  return (
    <div className="flex flex-col items-center font-outfit">
      <Navbar />
      <HeroImage />
      <ComoTrabalhamos />
      <Servicos />
      <div className="h-[100vh]"></div>
    </div>
  );
}
