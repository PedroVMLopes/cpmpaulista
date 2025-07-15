import { FaGraduationCap, FaFlagCheckered } from "react-icons/fa6";
import { BsBuildingFillAdd } from "react-icons/bs";

export default function Footer() {
    return (
        <div className="mt-36 w-full flex flex-col items-center pb-10">
            <div className="stats stats-vertical md:stats-horizontal">
                <div className="stat">
                    {/* <div className="stat-figure text-secondary text-3xl">
                        <FaGraduationCap />
                    </div> */}
                    <div className="stat-title">Mais de</div>
                    <div className="stat-value">20 ANOS</div>
                    <div className="stat-desc">de Experiência</div>
                </div>

                <div className="stat">
                    {/* <div className="stat-figure text-secondary text-3xl">
                        <BsBuildingFillAdd />
                    </div> */}
                    <div className="stat-title">Mais de </div>
                    <div className="stat-value">120</div>
                    <div className="stat-desc">Empresas Atendidas</div>
                </div>

                <div className="stat">
                    {/* <div className="stat-figure text-secondary text-3xl">
                        <FaFlagCheckered />
                    </div> */}
                    <div className="stat-title">Mais de</div>
                    <div className="stat-value">2000</div>
                    <div className="stat-desc">Declarações de IRPF entregues</div>
                </div>
            </div>
        </div>
    )
}