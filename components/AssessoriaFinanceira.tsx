import { FaCamera, FaCheckDouble, FaNewspaper } from "react-icons/fa6";

export default function AssessoriaFinanceira() {
    return (
        <div className="text-center flex flex-col items-center">
            <h1 className="text-3xl py-4">Assessoria Financeira</h1>
            <div className="grid grid-cols-1 md:grid-rows-2 md:grid-cols-2 w-full p-2 gap-1 mt-10">
                {/* Grid 1 */}
                <div className="indicator w-full flex flex-col justify-around rounded-2xl rounded-b-none bg-primary text-primary-content">
                    {/* <FaCamera className="indicator-item indicator-center bg-neutral w-10 h-8 p-1.5 rounded-2xl"/> */}
                    <p className="text-2xl p-4 pt-6 pb-0 text-neutral-content">Gestão Financeira (BPO)</p>
                    <div className="p-4 pb-6 flex flex-col gap-2">
                        <p>Controle completo das finanças da empresa para apoiar decisões seguras e estratégicas. Acompanhamos o fluxo de caixa, realizamos a conciliação bancária e garantimos informações confiáveis que contribuem para a saúde financeira e o crescimento do negócio.</p>
                    </div>
                </div>
                {/* Grid 2 */}
                <div className="indicator w-full flex flex-col justify-around bg-primary text-primary-content">
                    {/* <FaCheckDouble className="indicator-item indicator-center bg-neutral text-white w-10 h-8 p-1.5 rounded-2xl"/> */}
                    <p className="text-2xl p-4 pt-6 pb-0 text-neutral-content">Gestão de Indicadores de Desempenho (KPIs)</p>
                    <div className="p-4 pb-6 flex flex-col gap-2">
                        <p>Acompanhamento dos principais indicadores financeiros e operacionais do negócio. Analisamos a performance da empresa, identificamos tendências, pontos de melhoria e oportunidades de crescimento.</p>
                    </div>
                </div>
                {/* Grid 3 */}
                <div className="indicator w-full flex flex-col justify-around bg-primary text-primary-content">
                    {/* <FaNewspaper className="indicator-item indicator-center bg-neutral text-white w-10 h-8 p-1.5 rounded-2xl"/> */}
                    <p className="text-2xl p-4 pt-6 pb-0 text-neutral-content">Análise de Viabilidade Econômica</p>
                    <div className="p-4 pb-6 flex flex-col gap-2">
                        <p>Estudo detalhado sobre a viabilidade financeira de projetos ou investimentos, considerando custos, riscos e o retorno esperado, para garantir segurança nas decisões estratégicas.</p>
                    </div>
                </div>
                {/* Grid 4 */}
                <div className="indicator w-full flex flex-col justify-around rounded-2xl rounded-t-none bg-primary text-primary-content">
                    {/* <FaNewspaper className="indicator-item indicator-center bg-neutral text-white w-10 h-8 p-1.5 rounded-2xl"/> */}
                    <p className="text-2xl p-4 pt-6 pb-0 text-neutral-content">Business Valuation</p>
                    <div className="p-4 pb-6 flex flex-col gap-2">
                        <p>Avaliação econômico-financeira da empresa ou de projetos, com estimativa de valor baseada em modelos técnicos e na percepção de mercado.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}