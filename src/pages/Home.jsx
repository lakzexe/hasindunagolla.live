import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Skills from '../components/Skills';
import Work from '../components/Work';
import Contact from '../components/Contact';

export default function Home() {
    return (
        <>
            <Header />
            <About />
            <Skills />
            <Work />
            <Contact />
        </>
    );
}
