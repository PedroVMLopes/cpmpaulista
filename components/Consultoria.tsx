export default function Consultoria() {
    return (
        <div className="text-center flex flex-col items-center mt-24">
            <h1 className="text-3xl mb-8">Consultoria Empresarial</h1>
            <div className="flex flex-col w-full text-start join join-vertical">
                <div className="collapse collapse-arrow border bg-base-100 join-item">
                    <input type="radio" name="accordion-ServicosParaEmpresas" defaultChecked />
                    <div className="collapse-title font-semibold text-xl">Estruturação Societária</div>
                    <div className="collapse-content">Acompanhamento completo no processo de abertura e legalização da empresa, com suporte em todas as etapas junto à Junta Comercial, Receita Federal e demais órgãos competentes.</div>
                </div>
                <div className="collapse collapse-arrow border bg-base-100 join-item">
                    <input type="radio" name="accordion-ServicosParaEmpresas" />
                    <div className="collapse-title font-semibold text-xl">Planejamento Tributário</div>
                    <div className="collapse-content">Orientação estratégica para escolher o regime tributário mais vantajoso e garantir o cumprimento das obrigações legais. Aproveitamos os benefícios fiscais disponíveis e acompanhamos as mudanças da legislação, incluindo a Reforma Tributária.</div>
                </div>
                <div className="collapse collapse-arrow border bg-base-100 join-item">
                    <input type="radio" name="accordion-ServicosParaEmpresas" />
                    <div className="collapse-title font-semibold text-xl">Credenciamentos e Registros</div>
                    <div className="collapse-content">Auxiliamos no credenciamento, cadastros e registros necessários junto a instituições públicas e privadas, garantindo que sua empresa esteja apta a atender exigências legais ou participar de licitações, processos seletivos e projetos.</div>
                </div>
            </div>
        </div>
    )
}