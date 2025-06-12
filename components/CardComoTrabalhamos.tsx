type Props = {
    title: string;
    text: string;
}

export default function CardComoTrabalhamos({ title, text }: Props) {
    return (
        <div className="card bg-neutral image-full shadow-md">
            <figure>
                <img src="" alt="" />
            </figure>
            <h1>{title}</h1>
            <h2>{text}</h2>
        </div>
    )
}