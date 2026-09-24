import React, { useEffect } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LenisScroll from '../components/LenisScroll';

export default function MainLayout() {
 const location = useLocation();

 // Re-run the observer whenever the route changes
 useEffect(() => {
 const observer = new IntersectionObserver((entries) => {
 entries.forEach((entry) => {
 if (entry.isIntersecting) {
 entry.target.classList.add('is-visible');
 observer.unobserve(entry.target);
 }
 });
 }, { threshold: 0.1 });

 // Add a slight delay to ensure DOM elements are rendered after route change
 const timeout = setTimeout(() => {
 document.querySelectorAll('.animate-on-scroll').forEach((el) => {
 observer.observe(el);
 });
 }, 100);

 return () => {
 clearTimeout(timeout);
 observer.disconnect();
 };
 }, [location.pathname]);

 return (
 <div id="top" className="font-inter text-brand-dark bg-white overflow-x-hidden selection:bg-brand-primary/20 selection:text-brand-primary min-h-screen transition-colors duration-300 flex flex-col">
 <LenisScroll />
 <Navbar />
 
 {/* The current page's content gets rendered here */}
 <main className="flex-grow">
 <Outlet />
 </main>
 
 <Footer />
 </div>
 );
}
