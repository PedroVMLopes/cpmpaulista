'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import SplitText from './HeroAnimatedText';

export default function HeroImage() {
    const [scrolled, setScrolled] = useState(false);
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
        setScrolled(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.section
            animate={hasMounted && scrolled ? 'scrolled' : 'initial'}
            variants={{
                initial: {
                paddingTop: '0px',
                },
                scrolled: {
                paddingTop: '30%',
                alignItems: 'center',
                width: '90%',
                },
            }}
            transition={{ duration: 0.8 }}
            className="top-0 w-full flex flex-col md:flex-row justify-center overflow-hidden"
        >
            {/* Hero Image container */}
            <motion.div
                animate={hasMounted && scrolled ? 'scrolled' : 'initial'}
                variants={{
                initial: { height: '800px', width: '100vw', borderRadius: '0px' },
                scrolled: { height: '500px', width: '800px', borderRadius: '1.5rem' },
                }}
                transition={{ duration: 0.6 }}
                className="relative h-[800px] md:h-auto overflow-hidden"
            >
                <picture>
                <source media="(min-width: 768px)" srcSet="/images/hero-desktop.jpg" />
                <Image
                    src="/images/hero-mobile.jpg"
                    alt="Imagem do topo"
                    layout="fill"
                    objectFit="cover"
                    priority
                />
                </picture>

                {/* Texto sobreposto */}
                <motion.div
                    variants={{
                        initial: { opacity: 1, scale: 1 },
                        scrolled: { opacity: 0, scale: 0.8 },
                    }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0 flex items-center justify-center flex-col text-white"
                    >
                    <h1 className="text-2xl md:text-6xl font-bold px-4 py-2 rounded text-center">
                        SIMPLIFICANDO A GESTÃO FINANCEIRA
                    </h1>
                    <FaChevronDown  className='text-3xl mt-6'/>
                </motion.div>
            </motion.div>

            {/* Texto ao lado (ou abaixo em mobile) */}
            <motion.div
                initial={{ opacity: 0, y: 30, width: '0%' }}
                animate={scrolled ? { opacity: 1, y: 0, width: '100%' } : { opacity: 0, y: 30, width: '0%' }}
                transition={{ duration: 0.5, delay: 0 }}
                className="flex flex-col items-center"
            >
                <div className="flex flex-col items-center text-xl md:text-3xl md:p-6">
                    <SplitText />
                </div>
            </motion.div>
        </motion.section>
    );
}
