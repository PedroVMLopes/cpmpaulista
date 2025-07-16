import { FaGraduationCap, FaFlagCheckered } from "react-icons/fa6";
import { BsBuildingFillAdd } from "react-icons/bs";
import FooterBottomCard from "./FooterBottomCards";

export default function BottomStats() {
    return (
        <div className="mt-20 md:mt-30 w-full flex flex-col items-center pb-10 mx-2 md:mx-0 sm:w-[90%]">
            <div className="stats stats-vertical md:stats-horizontal gap-10">
                <div className="stat">
                    <div className="md:stat-figure text-secondary text-3xl">
                        <FaGraduationCap />
                    </div>
                    {/* <div className="stat-title">Mais de</div> */}
                    <div className="stat-value">+ 20 ANOS</div>
                    <div className="stat-desc">de Experiência</div>
                </div>

                <div className="stat">
                    <div className="md:stat-figure text-secondary text-3xl">
                        <BsBuildingFillAdd />
                    </div>
                    {/* <div className="stat-title">Mais de</div> */}
                    <div className="stat-value">+ 120</div>
                    <div className="stat-desc">Empresas Atendidas</div>
                </div>

                <div className="stat">
                    <div className="md:stat-figure text-secondary text-3xl">
                        <FaFlagCheckered />
                    </div>
                    {/* <div className="stat-title">Mais de</div> */}
                    <div className="stat-value">+ 2000</div>
                    <div className="stat-desc">Declarações de IRPF entregues</div>
                </div>
            </div>
        </div>
    )
}