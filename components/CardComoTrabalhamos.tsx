import * as motion from "motion/react-client"
import { ReactNode } from "react";

type Props = {
    title: string;
    text: string;
    icon: ReactNode;
    index: number;
}

export default function CardComoTrabalhamos({ title, text, icon, index }: Props) {
    return (
        <motion.div 
            className="card bg-neutral image-full shadow-md"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
        >
            <figure>
                <img src={`/images/ComoTrabalhamos${index}.jpg`} alt="Imagem de Escritório" />
            </figure>
            <div className="card-body flex flex-col">
                <div className="flex flex-row gap-2 items-center">
                    <div className="text-2xl"> { icon } </div>
                    <h1 className="card-title text-xl">{title}</h1>
                </div>
                <p className="card-actions text-base">{text}</p>
            </div>
        </motion.div>
    )
}