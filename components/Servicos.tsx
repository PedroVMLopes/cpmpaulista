import AssessoriaFinanceira from "./AssessoriaFinanceira";
import Tabela from "./TabelaAssessoriaContabil";
import Timeline from "./TimelineAssContab";


export default function Servicos() {
    return (
        <div className="mt-46 mx-2 md:mx-0 sm:w-[90%]">
            <p className="text-4xl text-center w-full font-cabinet font-semibold divider mb-14">Serviços</p>

            {/* Assessoria Financeira */}
            <AssessoriaFinanceira />

            {/* Assessoria Contábil */}
            <div className="text-center mt-24 flex flex-col items-center">
                <h1 className="text-3xl py-4">Assessoria Contábil</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-14">
                    <Timeline />
                    <Tabela />
                </div>
            </div>
        </div>
    )
}