import * as motion from "motion/react-client"

type Props = {
    title: string;
    text: string;
    index: number;
}

export default function CardComoTrabalhamos({ title, text, index }: Props) {
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
                <h1 className="card-title text-xl">{title}</h1>
                    <p className="card-actions text-base">{text}</p>
            </div>
        </motion.div>
    )
}