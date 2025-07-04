
export default function AssessoriaFinanceira() {
    return (
        <div className="text-center flex flex-col items-center">
            <h1 className="text-3xl py-4">Assessoria Financeira</h1>
            <div className="grid grid-cols-1 md:grid-rows-2 md:grid-cols-2 gap-0.5 md:gap-1 w-full p-2 md:p-0 mt-10 text-start rounded-2xl">
                {/* Grid 1 */}
                <div className="indicator w-full flex flex-col rounded-xl rounded-b-none md:rounded-r-none bg-secondary text-primary-content">
                    <div className="text-2xl p-4 pt-6 pb-0 flex flex-row items-center gap-2">
                        <p className="font-semibold text-neutral-content">Gestão Financeira (BPO)</p>
                    </div>
                    <div className="p-4 pb-6 flex flex-col gap-2">
                        <p className="">Controle completo das finanças da empresa para apoiar decisões seguras e estratégicas. Acompanhamos o fluxo de caixa, realizamos a conciliação bancária e garantimos informações confiáveis que contribuem para a saúde financeira e o crescimento do negócio.</p>
                    </div>
                </div>
                {/* Grid 2 */}
                <div className="indicator w-full flex flex-col md:rounded-tr-xl bg-secondary text-primary-content">
                    <div className="text-2xl p-4 pt-6 pb-0 flex flex-row items-center gap-2">
                        <p className="font-semibold text-neutral-content">Gestão de Indicadores de Desempenho (KPIs)</p>
                    </div>
                    <div className="p-4 pb-6 flex flex-col gap-2">
                        <p>Acompanhamento dos principais indicadores financeiros e operacionais do negócio. Analisamos a performance da empresa, identificamos tendências, pontos de melhoria e oportunidades de crescimento.</p>
                    </div>
                </div>
                {/* Grid 3 */}
                <div className="indicator w-full flex flex-col md:rounded-bl-xl bg-secondary text-primary-content">
                    <div className="text-2xl p-4 pt-6 pb-0 flex flex-row items-center gap-2">
                        <p className="font-semibold text-neutral-content">Análise de Viabilidade Econômica</p>
                    </div>
                    <div className="p-4 pb-6 flex flex-col gap-2">
                        <p>Estudo detalhado sobre a viabilidade financeira de projetos ou investimentos, considerando custos, riscos e o retorno esperado, para garantir segurança nas decisões estratégicas.</p>
                    </div>
                </div>
                {/* Grid 4 */}
                <div className="indicator w-full flex flex-col rounded-xl rounded-t-none md:rounded-bl-none md:rounded-br-xl bg-secondary text-primary-content">
                    <div className="text-2xl p-4 pt-6 pb-0 flex flex-row items-center gap-2">
                        <p className="font-semibold text-neutral-content">Business Valuation</p>
                    </div>
                    <div className="p-4 pb-6 flex flex-col gap-2">
                        <p>Avaliação econômico-financeira da empresa ou de projetos, com estimativa de valor baseada em modelos técnicos e na percepção de mercado.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}