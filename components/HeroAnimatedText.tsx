import { useEffect, useRef } from "react";
import { animate, stagger } from "motion";
import { splitText } from "motion-plus";

export default function SplitText() {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!containerRef.current) return

        const { words } = splitText(
            containerRef.current.querySelector("h1")!
        )

        animate(
            words,
            { opacity: [0, 1], y: [10, 0] },
            {
                type: "spring",
                duration: 2,
                bounce: 0,
                delay: stagger(0.07),
            }
        )
    })

    return (
        <div className="container" ref={containerRef}>
            <h1 className="h1">
                Com 20 anos de experiência e tecnologia de ponta, a CPM Paulista oferece soluções contábeis, tributárias e trabalhistas com atendimento personalizado e excelência profissional
            </h1>
        </div>
    )
}