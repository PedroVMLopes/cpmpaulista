"use client";

import { useEffect, useRef } from "react";
import { animate, stagger } from "motion";

const text = "Com 20 anos de experiência e tecnologia de ponta, a CPM Paulista oferece soluções contábeis, tributárias e trabalhistas com atendimento personalizado e excelência profissional.";

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
                delay: stagger(0.07),
                }
            );
        });
    });

    return (
        <div className="container" ref={containerRef}>
            <h1 className="h1 mt-6">
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
