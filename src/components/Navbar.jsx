import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-4' : 'bg-transparent py-6'}`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a href="#home" className="text-xl font-bold tracking-tighter text-white">
                    mohammad<span className="text-accent">.</span>
                </a>

                <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
                    <a href="#about" className="hover:text-white transition-colors">About</a>
                    <a href="#experience" className="hover:text-white transition-colors">Experience</a>
                    <a href="#projects" className="hover:text-white transition-colors">Work</a>
                    <a href="#contact" className="hover:text-white transition-colors">Contact</a>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
