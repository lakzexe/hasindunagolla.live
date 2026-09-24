export default function About() {
    const tools = [
        { name: 'git', icon: './assets/git.png', },
        { name: 'github', icon: './assets/github.png', },
        { name: 'postman', icon: './assets/postman.png', },
        { name: 'linux', icon: './assets/linux.png', },
        { name: 'tensorflow', icon: './assets/tensorflow.png', },
        { name: 'figma', icon: './assets/figma.png', },
        { name: 'mongodb', icon: './assets/mongodb.png', },
    ];

    const stats = [
        {
            name: 'Languages',
            icon: './assets/code-icon.png',
            description: 'HTML, CSS, JavaScript, Java, Python',
        },
        {
            name: 'Education',
            icon: './assets/edu-icon.png',
            description: 'Bachelor of Software Engineering (Hons)',
        },
        {
            name: 'Experience',
            icon: './assets/project-icon.png',
            description: 'Built more than 5+ complete projects',
        },
    ];

    return (
        <section id="about" className="w-full py-24 md:py-32 px-6 bg-white dark:bg-[#0F172A]">
            <div className="max-w-6xl mx-auto">
                
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
                    
                    {/* Visual section on the left */}
                    <div className="w-full lg:w-5/12 animate-on-scroll is-visible">
                        <div className="relative aspect-[4/5] max-w-sm mx-auto lg:max-w-none rounded-[2rem] overflow-hidden shadow-md group">
                            <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                            <img src='./assets/user-image.png' alt="About me" className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                        </div>
                    </div>

                    {/* Content section on the right */}
                    <div className="w-full lg:w-7/12">
                        <div className="animate-on-scroll is-visible" style={{ animationDelay: '0.1s' }}>
                            <p className="text-sm font-semibold text-brand-dark dark:text-white uppercase tracking-widest mb-3">About me</p>
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-brand-dark dark:text-white mb-6">Introduction</h2>
                            <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed mb-10 text-justify">
                                Dedicated Software Engineering undergraduate at The Open University of Sri Lanka with interests in Artificial Intelligence, Machine Learning, Python, and full-stack development using the MERN stack. Skilled in developing scalable web applications, AI-powered solutions, and backend systems while continuously enhancing technical and problem-solving skills.
                            </p>
                        </div>

                        {/* Display stats in a grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12 animate-on-scroll is-visible" style={{ animationDelay: '0.2s' }}>
                            {stats.map((stat) => (
                                <div key={stat.name} className="p-6 bg-white dark:bg-[#0F172A] rounded-2xl border border-gray-100 dark:border-white/10 hover:border-gray-200 dark:hover:border-white/20 hover:shadow-sm transition-all">
                                    <img src={stat.icon} alt="" className="w-6 h-6 mb-4 opacity-70 dark:invert" />
                                    <h3 className="font-semibold text-brand-dark dark:text-white mb-2">{stat.name}</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{stat.description}</p>
                                </div>
                            ))}
                        </div>

                        {/* Display the toolkit items */}
                        <div className="animate-on-scroll is-visible" style={{ animationDelay: '0.3s' }}>
                            <h4 className="text-sm font-semibold text-brand-dark dark:text-white uppercase tracking-widest mb-4">Toolkit</h4>
                            <div className="flex flex-wrap gap-3">
                                {tools.map((tool) => (
                                    <div key={tool.name} className="w-12 h-12 rounded-xl bg-white dark:bg-[#0F172A] border border-gray-100 dark:border-white/10 flex items-center justify-center hover:border-gray-200 dark:hover:border-white/20 hover:shadow-sm transition-all">
                                        <img src={tool.icon} alt={tool.name} className={`w-6 h-6 object-contain ${tool.name === 'github' ? 'dark:invert' : ''}`} />
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}