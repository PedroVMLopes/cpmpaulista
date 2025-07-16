export default function Consultoria() {
    return (
        <div className="text-center flex flex-col items-center mt-24">
            <h1 className="text-3xl md:text-4xl mb-10">Consultoria Empresarial</h1>
            <div className="flex flex-col w-full text-start rounded-2xl gap-1">
                <div className="collapse collapse-arrow bg-neutral text-base-300 rounded-b p-2">
                    <input type="radio" name="accordion-ServicosParaEmpresas" defaultChecked />
                    <div className="collapse-title font-semibold text-xl text-base-100">Estruturação Societária</div>
                    <div className="collapse-content">Acompanhamento completo no processo de abertura e legalização da empresa, com suporte em todas as etapas junto à Junta Comercial, Receita Federal e demais órgãos competentes.</div>
                </div>
                <div className="collapse collapse-arrow bg-neutral text-base-300 rounded p-2">
                    <input type="radio" name="accordion-ServicosParaEmpresas" />
                    <div className="collapse-title font-semibold text-xl text-base-100">Planejamento Tributário</div>
                    <div className="collapse-content">Orientação estratégica para escolher o regime tributário mais vantajoso e garantir o cumprimento das obrigações legais. Aproveitamos os benefícios fiscais disponíveis e acompanhamos as mudanças da legislação, incluindo a Reforma Tributária.</div>
                </div>
                <div className="collapse collapse-arrow bg-neutral text-base-300 rounded-t p-2">
                    <input type="radio" name="accordion-ServicosParaEmpresas" />
                    <div className="collapse-title font-semibold text-xl text-base-100">Credenciamentos e Registros</div>
                    <div className="collapse-content">Auxiliamos no credenciamento, cadastros e registros necessários junto a instituições públicas e privadas, garantindo que sua empresa esteja apta a atender exigências legais ou participar de licitações, processos seletivos e projetos.</div>
                </div>
            </div>
        </div>
    )
}