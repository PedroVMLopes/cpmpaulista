import { FaMapPin, FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

export default function FooterBottomCards() {
    return (
        <div className="mt-20 w-full flex flex-col items-center justify-center pt-10 pb-4 mx-2 md:mx-0 bg-base-300 rounded-t-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full md:w-[70%]">
                <p className="w-full text-center text-3xl font-semibold">Texto Grande </p>

                {/* Card on the right side */}
                <div className="bg-white flex flex-col justify-center items-center p-4 pl-6 rounded-xl w-full text-lg gap-2 shadow-xl">
                    <img src="/images/cpmpaulista_logo.png" alt="Logo da CPM Paulista" className="w-[70%] mb-2"/>
                    <p className="flex flex-row gap-4 items-center w-full"><FaMapPin /> Guarulhos, São Paulo</p>
                    <p className="flex flex-row gap-4 items-center w-full"><IoIosMail /> contato@cpmpaulista.com.br</p>
                    <p className="flex flex-row gap-4 items-center w-full"><FaPhone /> +55 (11) 91719-7731</p>
                    <p className="flex flex-row gap-4 items-center w-full"><FaPhone /> +55 (11) 5039-4705</p>
                </div>
            </div>

            {/* Copyright Text */}
            <p className="text-sm opacity-50 mt-10">© 2025 CPMPaulista - Todos os direitos reservados | Design e Desenvolvimento por <a href="https://pvlopes.vercel.app" target="_blank" className="underline">PedroVMLopes</a></p>
        </div>
    )
}