export default function Services() {
    const services = [
        {
            name: 'Web Application Development',
            icon: './assets/web-icon.png',
            description: 'Building responsive web apps with React, modern UI patterns, and clean frontend structure.',
            link: '#',
        },
        {
            name: 'Backend Integration',
            icon: './assets/mobile-icon.png', // I keep the same icon here.
            description: 'Connecting frontend features with APIs, forms, and data handling workflows.',
            link: '#',
        },
        {
            name: 'UI / UX Implementation',
            icon: './assets/ui-icon.png',
            description: 'Turning Figma-style layouts into polished, responsive interface sections.',
            link: '#',
        },
        {
            name: 'Creative Frontend Work',
            icon: './assets/graphics-icon.png',
            description: 'Designing portfolio and landing page visuals that match your personal brand.',
            link: '#',
        }
    ];

    return (
        <section id="services" className="w-full py-24 md:py-32 px-6 bg-white dark:bg-[#0F172A] overflow-hidden">
            <div className="max-w-4xl mx-auto">
                
                <div className="text-center mb-20 animate-on-scroll is-visible">
                    <p className="text-sm font-semibold text-brand-dark dark:text-white uppercase tracking-widest mb-3">What I Offer</p>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-brand-dark dark:text-white mb-6">Strategic engineering</h2>
                    <p className="max-w-2xl mx-auto text-lg text-gray-500 dark:text-gray-400">
                        I create practical, modern web experiences for my own projects, with a focus on React, clean UI, and useful interactions.
                    </p>
                </div>

                <div className="relative">
                    {/* This renders the central vertical line for the timeline. */}
                    <div className="absolute left-[39px] md:left-1/2 md:-translate-x-1/2 top-4 bottom-4 w-[1px] bg-gray-200 dark:bg-white/10 hidden sm:block z-0"></div>

                    <div className="space-y-16 md:space-y-24 relative z-10">
                        {services.map((service, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <div key={service.name} className={`flex flex-col sm:flex-row items-start gap-8 sm:gap-12 animate-on-scroll is-visible`} style={{ animationDelay: `${index * 0.1}s` }}>
                                    
                                    {/* This displays the content on the left or right depending on the index. */}
                                    <div className={`flex-1 sm:w-1/2 ${isEven ? 'sm:text-right sm:pr-8' : 'sm:order-3 sm:pl-8'}`}>
                                        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-surface dark:bg-white/5 border border-gray-100 dark:border-white/10 mb-6 ${isEven ? 'sm:ml-auto' : ''}`}>
                                            <img src={service.icon} alt="" className="w-6 h-6 opacity-70 dark:invert" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-brand-dark dark:text-white mb-4">{service.name}</h3>
                                        <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-6">{service.description}</p>
                                    </div>

                                    {/* This shows the step number. */}
                                    <div className={`shrink-0 w-20 h-20 rounded-full bg-white dark:bg-[#0F172A] border border-gray-200 dark:border-white/20 shadow-sm flex items-center justify-center sm:order-2 z-10 self-start sm:self-auto`}>
                                        <span className="text-xl font-bold text-brand-dark dark:text-white">
                                            0{index + 1}
                                        </span>
                                    </div>

                                    {/* This provides empty space for the alternating layout. */}
                                    <div className="hidden sm:block flex-1 sm:w-1/2 sm:order-1"></div>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
}