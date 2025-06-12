import CardComoTrabalhamos from "./CardComoTrabalhamos";

export default function ComoTrabalhamos() {
    return (
        <div className="mt-46">
            <h1 className='text-3xl text-center w-full md:pl-6 font-cabinet font-semibold'>Como Trabalhamos</h1>
            <div className="grid">
                <CardComoTrabalhamos title={"Atendimento"} text={"totalmente documentado e orientado por profissional qualificado"} />
            </div>
        </div>
    )
}