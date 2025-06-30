"use client";

import { useEffect, useRef } from "react";
import { animate, stagger } from "motion";

const text = "A CPM PAULISTA se dedica a oferecer soluções inovadoras em gestão contábil e financeira. Nosso compromisso é aprimorar continuamente a atuação empresarial, proporcionando um atendimento personalizado para garantir as melhores soluções às necessidades do seu negócio.";

export default function SplitText() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        document.fonts.ready.then(() => {
            if (!containerRef.current) return;

            containerRef.current.style.visibility = "visible";

            const words = containerRef.current.querySelectorAll(".split-word");

            animate(
                words,
                { opacity: [0, 1], y: [10, 0] },
                {
                type: "spring",
                duration: 2,
                bounce: 0,
                delay: stagger(0.09),
                }
            );
        });
    });

    return (
        <div className="container" ref={containerRef}>
            <h1 className="h1 mt-6 md:mt-0 text-center md:text-start">
                {text.split(" ").map((word, index) => (
                <span key={index} className="split-word">
                    {word}&nbsp;
                </span>
                ))}
            </h1>
            <Stylesheet />
        </div>
    );
}

function Stylesheet() {
    return (
        <style>{`
            .container {
                visibility: hidden;
            }

            .split-word {
                will-change: transform, opacity;
                display: inline-block;
            }
        `}</style>
    );
}
