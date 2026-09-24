export default function Work() {
    // I define the list of projects for the portfolio.
    const work = [
        {
            name: 'MindBou',
            icon: './assets/mindbou.png',
            description: 'Web Application',
            link: 'https://github.com/hasindu-nagolla/MindBou',
        },
        {
            name: 'MediMate',
            icon: './assets/medimate.png',
            description: 'Web Application',
            link: 'https://github.com/MediMateBooking/MediMateProject',
        },
        {
            name: 'HasiiMusic',
            icon: './assets/hasii-music.png',
            description: 'Telegram Bot',
            link: 'https://github.com/hasindu-nagolla/HasiiMusicBot',
        },
        {
            name: 'Scam Detector',
            icon: './assets/scam-detection.png',
            description: 'AI/ML',
            link: '',
        },
        {
            name: 'U/I Redesign ',
            icon: './assets/boc.png',
            description: 'UI/UX',
            link: 'https://www.figma.com/design/LyTYW8jfoL38Oxo5XIhLMH/Untitled?node-id=0-1&m=dev&t=YM1W1QGOwIWuKl2O-1',
        },
        {
            name: 'StampsDiary',
            icon: './assets/stamp-diary.png',
            description: 'Web Design',
            link: 'https://github.com/hasindu-nagolla/simple-web-site',
        },
        {
            name: 'Python Library Management System',
            icon: './assets/liabrary-management.png',
            description: 'CLI Application',
            link: 'https://github.com/hasindu-nagolla/Python-Library-Management-System',
        },
        {
            name: 'Python Repository',
            icon: './assets/python-image.png',
            description: 'GitHub Repository',
            link: 'https://github.com/hasindu-nagolla/Python',
        }
    ];

    return (
        // I render the portfolio section.
        <section id="work" className="w-full py-24 md:py-32 px-6 bg-white dark:bg-[#0F172A]">
            <div className="max-w-6xl mx-auto">
                
                {/* I display the section header. */}
                <div className="text-center mb-16 animate-on-scroll is-visible">
                    <p className="text-sm font-semibold text-brand-dark dark:text-white uppercase tracking-widest mb-3">Portfolio</p>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-brand-dark dark:text-white mb-6">Projects</h2>
                    <p className="max-w-2xl mx-auto text-lg text-gray-500 dark:text-gray-400">
                        Explore a collection of projects showcasing my skills in front-end and back-end development, from web apps to AI solutions.
                    </p>
                </div>

                {/* I iterate through each project and render a card. */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {work.map((project, index) => (
                        <a
                            key={project.name}
                            href={project.link || '#'}
                            target={project.link ? '_blank' : undefined}
                            rel={project.link ? 'noreferrer' : undefined}
                            onClick={(event) => {
                                if (!project.link) {
                                    event.preventDefault();
                                }
                            }}
                            className="group flex flex-col bg-white dark:bg-[#0F172A] border border-gray-100 dark:border-white/10 rounded-2xl overflow-hidden hover:shadow-lg hover:border-gray-200 dark:hover:border-white/30 hover:-translate-y-1 transition-all duration-300 animate-on-scroll is-visible"
                            style={{ animationDelay: `${(index % 4) * 0.1}s` }}
                        >
                            <div className="w-full aspect-[4/3] bg-brand-surface dark:bg-[#0F172A] overflow-hidden relative">
                                <div className="absolute inset-0 bg-gray-200/50 mix-blend-multiply group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                                <img src={project.icon} alt={project.name} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" />
                            </div>
                            
                            <div className="p-6 flex flex-col flex-1 justify-between gap-4">
                                <div>
                                    <p className="text-gray-500 dark:text-gray-400 font-semibold text-xs uppercase tracking-wider mb-1">{project.description}</p>
                                    <h3 className="text-brand-dark dark:text-white text-lg font-bold leading-tight">{project.name}</h3>
                                </div>
                                
                                {project.link && (
                                    <div className="flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400 group-hover:text-brand-primary transition-colors">
                                        View Project
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                        </a>
                    ))}
                </div>

                {/* I provide a link to view more projects on GitHub. */}
                <div className="flex justify-center animate-on-scroll is-visible" style={{ animationDelay: '0.4s' }}>
                    <a href="https://github.com/hasindu-nagolla" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-brand-surface dark:bg-white/5 border border-gray-200 dark:border-white/10 text-brand-dark dark:text-white font-medium rounded-full hover:bg-gray-50 dark:hover:bg-white/10 transition-colors">
                        View more on GitHub
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                </div>

            </div>
        </section>
    );
}