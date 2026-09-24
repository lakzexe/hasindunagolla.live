import { useState, useEffect } from 'react';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [theme, setTheme] = useState(
        localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    );

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <>
            <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-4 bg-white/80 dark:bg-[#0F172A]/80 backdrop-blur-md shadow-sm dark:shadow-white/5' : 'py-6 bg-transparent'}`}>
                <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
                    
                    {/* Render the logo */}
                    <a href="#top" className="flex items-center gap-2 z-50 transition-transform hover:scale-105 -ml-4">
                        <img src="./assets/logo.png" alt="Hasindu Nagolla" className="h-16 sm:h-20 object-contain block dark:hidden" />
                        <img src="./assets/logo-dark.png" alt="Hasindu Nagolla" className="h-16 sm:h-20 object-contain hidden dark:block" />
                    </a>

                    {/* Render the desktop menu links */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
                        <ul className="flex items-center gap-8 px-8 py-3 rounded-full border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-[#0F172A]/50 backdrop-blur-md">
                            <li><a className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-brand-dark dark:hover:text-white transition-colors" href="#top">Home</a></li>
                            <li><a className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-brand-dark dark:hover:text-white transition-colors" href="#about">About me</a></li>
                            <li><a className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-brand-dark dark:hover:text-white transition-colors" href="#work">My Work</a></li>
                            <li><a className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-brand-dark dark:hover:text-white transition-colors" href="#contact">Contact me</a></li>
                        </ul>
                    </div>

                    {/* Render theme toggle and mobile menu button */}
                    <div className="flex items-center gap-6 z-50">
                        
                        <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors" aria-label="Toggle theme">
                            {theme === 'dark' ? (
                                <img src="./assets/sun_icon.png" alt="Light mode" className="w-4 h-4 opacity-70" />
                            ) : (
                                <img src="./assets/moon_icon.png" alt="Dark mode" className="w-4 h-4 opacity-70" />
                            )}
                        </button>

                        <a href="#contact" className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 bg-brand-dark dark:bg-transparent dark:border dark:border-white/20 text-white text-sm font-medium rounded-full hover:bg-black dark:hover:bg-white/10 transition-all shadow-sm">
                            Contact
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M17 7H7M17 7V17" />
                            </svg>
                        </a>
                        
                        <button 
                            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <span className={`block w-6 h-0.5 bg-brand-dark dark:bg-white transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                            <span className={`block w-6 h-0.5 bg-brand-dark dark:bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`block w-6 h-0.5 bg-brand-dark dark:bg-white transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                        </button>
                    </div>
                </div>

                {/* Render the mobile menu overlay */}
                <div className={`fixed inset-0 bg-white/95 dark:bg-[#0F172A]/95 backdrop-blur-xl z-40 transition-transform duration-500 ease-in-out md:hidden flex flex-col justify-center items-center gap-8 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <ul className="flex flex-col items-center gap-8 text-2xl font-semibold text-brand-dark dark:text-white">
                        <li><a href="#top" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Home</a></li>
                        <li><a href="#services" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Services</a></li>
                        <li><a href="#about" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">About</a></li>
                        <li><a href="#work" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Projects</a></li>
                        <li><a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-brand-dark dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}