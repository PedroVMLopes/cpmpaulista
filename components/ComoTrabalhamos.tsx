import CardComoTrabalhamos from "./CardComoTrabalhamos";

export default function ComoTrabalhamos() {
    return (
        <div className="mt-46 mx-2 md:mx-0 sm:w-[90%]">
            <h1 className='text-3xl sm:text-4xl text-center w-full font-cabinet font-semibold'>Como Trabalhamos</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-6 gap-6">
                <CardComoTrabalhamos 
                    title={"Atendimento e Relacionamento"} 
                    text={"Atendimento documentado e orientado por profissionais qualificados. Sua empresa conta ainda com um gerente exclusivo de relacionamento para acompanhar o dia a dia."} 
                    index={0} 
                />

                <CardComoTrabalhamos 
                    title={"Comunicação e Segurança"} 
                    text={"Mantemos você sempre informado sobre legislações e tendências, através dos canais de sua preferência, com total segurança e confidencialidade de dados."} 
                    index={1} 
                />

                <CardComoTrabalhamos 
                    title={"Tecnologia e Experiência"} 
                    text={"Disponibilizamos nossos serviços em plataforma online, com tecnologia moderna e acompanhamento próximo para garantir que obrigações, impostos e declarações estejam sempre corretos."} 
                    index={2} 
                />
            </div>
        </div>
    )
}