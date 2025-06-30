import CardComoTrabalhamos from "./CardComoTrabalhamos";
import { FaHandshake } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";

export default function ComoTrabalhamos() {
    return (
        <div className="mt-46 mx-2 md:mx-0 sm:w-[90%]">
            <h1 className='text-3xl sm:text-4xl text-center w-full font-cabinet font-semibold'>Como Trabalhamos</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-6 gap-6">
                <CardComoTrabalhamos 
                    title={"Atendimento e Relacionamento"} 
                    text={"Atendimento documentado e orientado por profissionais qualificados. Sua empresa conta ainda com um gerente exclusivo de relacionamento para acompanhar o dia a dia."} 
                    icon={<FaHandshake />}
                    index={0} 
                />

                <CardComoTrabalhamos 
                    title={"Comunicação e Segurança"} 
                    text={"Mantemos você sempre informado sobre legislações e tendências, através dos canais de sua preferência, com total segurança e confidencialidade de dados."}
                    icon={<FaLock />} 
                    index={1} 
                />

                <CardComoTrabalhamos 
                    title={"Tecnologia e Experiência"} 
                    text={"Disponibilizamos nossos serviços em plataforma online, com tecnologia moderna e acompanhamento próximo para garantir que obrigações, impostos e declarações estejam sempre corretos."}
                    icon={<FaComputer />}
                    index={2} 
                />
            </div>
        </div>
    )
}