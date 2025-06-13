import CardComoTrabalhamos from "./CardComoTrabalhamos";

export default function ComoTrabalhamos() {
    return (
        <div className="mt-46 mx-2 md:mx-0 sm:w-[90%]">
            <h1 className='text-3xl sm:text-4xl text-center w-full font-cabinet font-semibold'>Como Trabalhamos</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-6 gap-6">
                <CardComoTrabalhamos title={"Atendimento"} text={"Totalmente documentado e orientado por profissionais qualificados"} index={0} />
                <CardComoTrabalhamos title={"Relacionamento"} text={"Sua empresa contará com um gerente exclusivo de relacionamento que acompanhará sua empresa no dia a dia"} index={1} />
                <CardComoTrabalhamos title={"Comunicação"} text={"Nossos clientes estão sempre informados sobre legislações e tendências através dos meios eletrônicos de sua preferência"} index={2} />
                <CardComoTrabalhamos title={"Segurança"} text={"Vanguarda no que há de mais moderno em segurança da informação para garantir a confidencialidade de dados"} index={3} />
                <CardComoTrabalhamos title={"On-Line"} text={"Estrutura de tecnologia WEB onde nossos serviços são disponibilizados e podem ser acessados facilmente"} index={4} />
                <CardComoTrabalhamos title={"Experiência"} text={"Acompanhamos sua contabilidade de perto, garantindo que impostos, declarações e todas as obrigações estarão sempre corretas"} index={5} />
            </div>
        </div>
    )
}