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

        const handleScroll = () => {
            if (!scrolled && window.scrollY > 100) {
                setScrolled(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);

    }, []);

    const handleButtonClick = () => {
        setScrolled(true);
    };

    return (
        <motion.section
            initial={false}
            animate={hasMounted && scrolled ? 'scrolled' : 'initial'}
            variants={{
                initial: {
                    paddingTop: '0px',
                    width: '100%',
                },
                scrolled: {
                    paddingTop: '20%',
                    width: '90%',
                },
            }}
            transition={{ duration: 0.8 }}
            className="w-full flex flex-col md:flex-row justify-center overflow-hidden"
        >
            {/* Hero Image container */}
            <motion.div
                initial={false}
                animate={hasMounted && scrolled ? 'scrolled' : 'initial'}
                variants={{
                    initial: { height: '100vh', width: '100vw', borderRadius: '0px' },
                    scrolled: { height: '300px', width: '400px', borderRadius: '1.5rem' },
                }}
                transition={{ duration: 0.6 }}
                className="relative overflow-hidden"
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
                    className="absolute inset-0 flex items-center justify-center flex-col text-white bg-black/50 rounded-2xl"
                    >
                        <h1 className="text-5xl md:text-6xl p-6 pb-2 mx-4 text-center font-cabinet font-bold"> CPM Paulista </h1>
                        <h1 className="text-5xl md:text-6xl p-6 pt-0 mx-4 text-center font-cabinet font-bold opacity-60">
                            Gestão e Negócios
                        </h1>
                        <button onClick={handleButtonClick} className='cursor-pointer'> <FaChevronDown  className='text-3xl mt-6 animate-bounce opacity-60'/> </button>
                </motion.div>
            </motion.div>

            {/* Texto ao lado (ou abaixo em mobile) */}
            <motion.div
                initial={{ opacity: 0, y: 30, width: '0%' }}
                animate={scrolled ? { opacity: 1, y: 0, width: '100%' } : { opacity: 0, y: 30, width: '0%' }}
                transition={{ duration: 0.5, delay: 0 }}
                className="flex flex-col items-center"
                id="nextSection"
            >
                <div className="flex flex-col items-center text-xl md:text-3xl md:p-6">
                    <SplitText />
                </div>
            </motion.div>
        </motion.section>
    );
}
