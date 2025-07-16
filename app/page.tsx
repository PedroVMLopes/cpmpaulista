import ComoTrabalhamos from "@/components/ComoTrabalhamos";
import HeroImage from "@/components/HeroImage";
import Servicos from "@/components/Servicos";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import BottomStats from "@/components/BottomStats";

export default function Home() {
  
  return (
    <div className="flex flex-col items-center font-outfit">
      <Navbar />
      <WhatsAppButton phoneNumber="5511917197731"/>
      <HeroImage />
      <ComoTrabalhamos />
      <Servicos />
      <BottomStats />
    </div>
  );
}
