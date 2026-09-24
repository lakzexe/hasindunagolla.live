import { useEffect } from 'react'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Work from './components/Work'
import Services from './components/Services'
import About from './components/About'
import Header from './components/Header'
import Navbar from './components/Navbar'
import LenisScroll from './components/LenisScroll'

export default function App() {
  // I manage the smooth scroll behavior and observe elements to trigger animations when they scroll into view.
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    // I set up the main layout and structure for the website.
    <div id="top" className="font-inter text-brand-dark dark:text-white bg-white dark:bg-[#0F172A] overflow-x-hidden selection:bg-brand-primary/20 selection:text-brand-primary min-h-screen transition-colors duration-300">
      <LenisScroll />
      <Navbar />
      <Header />
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>
  )
}