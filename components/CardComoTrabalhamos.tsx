type Props = {
    title: string;
    text: string;
    index: number;
}

export default function CardComoTrabalhamos({ title, text, index }: Props) {
    return (
        <div className="card bg-neutral image-full shadow-md">
            <figure>
                <img src={`/images/ComoTrabalhamos${index}.jpg`} alt="Imagem de Escritório" />
            </figure>
            <div className="card-body flex flex-col">
                <h1 className="card-title">{title}</h1>
                    <p className="card-actions">{text}</p>
            </div>
        </div>
    )
}