import { FaCamera, FaCheckDouble, FaNewspaper } from "react-icons/fa6";

export default function AssessoriaFinanceira() {
    return (
        <div className="text-center mt-4 flex flex-col items-center">
            <h1 className="text-3xl py-4">Assessoria Financeira</h1>
            <p className="p-2 md:max-w-[60%]">
                Que tal dedicar mais tempo para seus clientes?
            </p>
            <p className="p-2 md:max-w-[60%]">
                Então libere sua equipe para fazer o que realmente importa.
                Nossa metodologia de trabalho automatiza tarefas e reduz a rotina financeira de sua empresa.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 w-full p-2 gap-8 md:gap-2 mt-16">
                {/* Grid 1 */}
                <div className="indicator w-full flex flex-col justify-around rounded-2xl bg-neutral text-primary-content">
                    <FaCamera className="indicator-item indicator-center bg-neutral w-10 h-8 p-1.5 rounded-2xl"/>
                    <p className="text-xl p-4 pt-6 pb-0 text-neutral-content">Envie fotos das suas contas</p>
                    <div className="p-4 flex flex-col gap-2">
                        <p>Nós cuidamos de todo o resto.</p>
                        <p>Identificamos, Categorizamos e Agendamos suas Contas a Pagar e a Receber</p>
                    </div>
                </div>
                {/* Grid 2 */}
                <div className="indicator w-full flex flex-col justify-around rounded-2xl bg-neutral text-primary-content">
                    <FaCheckDouble className="indicator-item indicator-center bg-neutral text-white w-10 h-8 p-1.5 rounded-2xl"/>
                    <p className="text-xl p-4 pt-6 pb-0 text-neutral-content">Aprove os Pagamentos</p>
                    <div className="p-4 flex flex-col gap-2">
                        <p>Aprove o pagamento de suas contas no seu Internet Banking.</p>
                        <p>Nossa equipe faz a Reconciliação Bancária para manter suas informações financeiras sempre atualizadas</p>
                    </div>
                </div>
                {/* Grid 3 */}
                <div className="indicator w-full flex flex-col justify-around rounded-2xl bg-neutral text-primary-content">
                    <FaNewspaper className="indicator-item indicator-center bg-neutral text-white w-10 h-8 p-1.5 rounded-2xl"/>
                    <p className="text-xl p-4 pt-6 pb-0 text-neutral-content">Relatórios em tempo real</p>
                    <div className="p-4 flex flex-col gap-2">
                        <p>Tenha um robusto dashboard com toda a situação financeira de sua empresa.</p>
                        <p>Saiba exatamente de onde veio e para onde foi o dinheiro. Tenha em mãos o Fluxo de Caixa atualizado com suas Contas a Pagar e a Receber</p>
                    </div>
                </div>
            </div>
        </div>
    )
}