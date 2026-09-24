import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            // Only run scroll spy on the home page
            if (location.pathname === '/') {
                const sections = ['about', 'skills', 'work'];
                let current = 'home';
                
                for (const section of sections) {
                    const element = document.getElementById(section);
                    if (element) {
                        const rect = element.getBoundingClientRect();
                        if (rect.top <= 150) {
                            current = section;
                        }
                    }
                }
                
                // If we're at the very top, force 'home'
                if (window.scrollY < 100) {
                    current = 'home';
                }
                
                setActiveSection(current);
            }
        };

        window.addEventListener('scroll', handleScroll);
        
        // Initial setup based on route
        if (location.pathname !== '/') {
            // Strip the leading slash to get 'about', 'projects', etc.
            setActiveSection(location.pathname.replace('/', ''));
        } else {
            handleScroll();
        }

        return () => window.removeEventListener('scroll', handleScroll);
    }, [location.pathname]);

    const getLinkClass = (section) => {
        const isActive = activeSection === section;
        return `text-sm font-medium pb-1 transition-all ${
            isActive 
            ? 'text-white border-b-2 border-white' 
            : 'text-gray-300 hover:text-white hover:border-b-2 hover:border-gray-500'
        }`;
    };

    return (
        <>
            <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-brand-dark shadow-sm ${isScrolled ? 'py-4' : 'py-5'}`}>
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

                    {/* Render the logo */}
                    <a href="/#top" className="flex items-center gap-2 z-50 transition-transform hover:scale-105">
                        <img src="/assets/logo-dark.png?v=2" alt="Hasindu Nagolla" className="h-9 w-auto transform scale-[2] origin-left" />
                    </a>

                    {/* Render the desktop menu links */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
                        <ul className="flex items-center gap-8">
                            <li><a className={getLinkClass('home')} href="/">Home</a></li>
                            <li><a className={getLinkClass('about')} href="/#about">About</a></li>
                            <li><a className={getLinkClass('work')} href="/#work">Projects</a></li>
                            <li><a className={getLinkClass('skills')} href="/#skills">Skills</a></li>
                        </ul>
                    </div>

                    {/* Render theme toggle and mobile menu button */}
                    <div className="flex items-center gap-6 z-50">

                        <a href="/#contact" className="hidden md:inline-flex items-center gap-2 px-5 py-2 bg-white text-brand-dark text-sm font-semibold rounded-full hover:bg-gray-100 transition-all shadow-sm">
                            Contact Me
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </a>

                        <button
                            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                            <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                        </button>
                    </div>
                </div>

                {/* Render the mobile menu overlay */}
                <div className={`fixed inset-0 bg-brand-dark/95 backdrop-blur-xl z-40 transition-transform duration-500 ease-in-out md:hidden flex flex-col justify-center items-center gap-8 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <ul className="flex flex-col items-center gap-8 text-xl font-semibold text-white">
                        <li><a href="/" onClick={() => setIsMenuOpen(false)} className={getLinkClass('home').replace('text-sm pb-1', '')}>Home</a></li>
                        <li><a href="/#about" onClick={() => setIsMenuOpen(false)} className={getLinkClass('about').replace('text-sm pb-1', '')}>About</a></li>
                        <li><a href="/#work" onClick={() => setIsMenuOpen(false)} className={getLinkClass('work').replace('text-sm pb-1', '')}>Projects</a></li>
                        <li><a href="/#skills" onClick={() => setIsMenuOpen(false)} className={getLinkClass('skills').replace('text-sm pb-1', '')}>Skills</a></li>

                        <li><a href="/#contact" onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-brand-primary transition-colors font-medium">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}