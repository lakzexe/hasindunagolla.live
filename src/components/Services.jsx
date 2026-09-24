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
            icon: './assets/mobile-icon.png',
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
        <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">What i offer</h4>
            <h2 className="text-center text-5xl font-Ovo">My services</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">I create practical, modern web experiences for my own projects, with a focus on React, clean UI, and useful interactions.</p>

            <div className="grid grid-cols-auto gap-6 my-10">
                {services.map((service) => (
                    <div key={service.name} className="border border-gray-300 dark:border-white/30 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white">
                        <img src={service.icon} alt="" className="w-10" />
                        <h3 className="text-lg my-4 text-gray-700 dark:text-white">{service.name}</h3>
                        <p className="text-sm text-gray-600 leading-5 dark:text-white/80">{service.description}</p>
                        <a href={service.link} className="flex items-center gap-2 text-sm mt-5">Read more <img src="./assets/right-arrow.png" alt="" className="w-4" /></a>
                    </div>
                ))}
            </div>
        </div>
    )
}