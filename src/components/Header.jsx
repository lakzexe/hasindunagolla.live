export default function Header() {
    const socials = [
        { name: 'linkedin', icon: './assets/linkedin.png', link: '' },
        { name: 'github', icon: './assets/github.png', link: '' },
        { name: 'facebook', icon: './assets/facebook.png', link: '' },
        { name: 'medium', icon: './assets/medium.png', link: '' },
    ];
    return (
        <div className="w-11/12 max-w-3xl text-center mx-auto min-h-screen pt-28 sm:pt-32 flex flex-col items-center justify-center gap-4">
            <img src="./assets/profile-img.png" alt="" className="rounded-full w-32" />
            <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
                Hi! I'm Hasindu Nagolla
                <img src="./assets/hand-icon.png" alt="" className="w-6 mb-1" />
            </h3>
            <h1 className="text-3xl sm:text-6xl lg:text-[55px] font-Ovo">Software Engineering Undergraduate</h1>
            <p className="max-w-2xl mx-auto font-Ovo">Experienced in developing projects that integrate AI with
                modern web technologies, especially using the MERN stack and Python. Currently working on MindBou, an innovative article-sharing platform with a strong emphasis on intelligent content handling and AI integration.</p>

            <div className="flex flex-col items-center gap-4 mt-6">
                <div className="flex items-center gap-4">
                    {socials.map((s) => (
                        <a key={s.name} href={s.link || '#'} aria-label={s.name} className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center bg-white/5 hover:opacity-80">
                            <img src={s.icon} alt={s.name} className="w-6 h-6" />
                        </a>
                    ))}
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                    <a href="#contact"
                        className="px-10 py-2.5 border rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white flex items-center gap-2 dark:border-transparent">
                        contact me <img src="./assets/right-arrow-white.png" alt="" className="w-4" />
                    </a>

                    <a href="./assets/hasindu-nagolla.pdf" download
                        className="px-10 py-2.5 rounded-full border border-gray-300 dark:border-white/25 hover:bg-slate-100/70 dark:hover:bg-darkHover flex items-center gap-2 bg-white dark:bg-transparent dark:text-white">
                        my resume <img src="./assets/download-icon.png" alt="" className="w-4 dark:invert" />
                    </a>
                </div>
            </div>
        </div>
    )
}