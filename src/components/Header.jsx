export default function Header() {
  const socials = [
    {
      name: "LinkedIn",
      icon: "./assets/linkedin.png",
      link: "https://www.linkedin.com/in/hasindu-nagolla/",
    },
    {
      name: "GitHub",
      icon: "./assets/github.png",
      link: "https://github.com/hasindu-nagolla",
    },
    {
      name: "Medium",
      icon: "./assets/medium.png",
      link: "https://medium.com/@hasindu-nagolla",
    },
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center w-full z-10 flex flex-col items-center">
        {/* Show profile picture */}
        <div className="mb-6 animate-on-scroll is-visible">
          <img
            src="./assets/profile-img.png"
            alt="Hasindu Nagolla"
            className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover shadow-lg"
          />
        </div>

        {/* Show greeting message */}
        <h3
          className="text-xl sm:text-2xl font-semibold tracking-tight text-brand-dark dark:text-white mb-6 animate-on-scroll is-visible"
          style={{ animationDelay: "0.1s" }}
        >
          Hi! I'm Hasindu Nagolla 👋
        </h3>

        {/* Show main heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-brand-dark dark:text-white leading-[1.15] mb-8">
          Software Engineering <br />
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl block mt-1">
            Undergraduate
          </span>
        </h1>

        {/* Show personal description */}
        <p
          className="max-w-3xl mx-auto text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-12 animate-on-scroll is-visible"
          style={{ animationDelay: "0.3s" }}
        >
          Experienced in developing projects that integrate AI with modern web
          technologies, especially using the MERN stack and Python. Currently
          working on MindBou, an innovative article-sharing platform with a
          strong emphasis on intelligent content handling and AI integration.
        </p>

        {/* Show social media links */}
        <div
          className="flex items-center justify-center gap-4 animate-on-scroll is-visible"
          style={{ animationDelay: "0.4s" }}
        >
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.link}
              target="_blank"
              rel="noreferrer"
              aria-label={s.name}
              className="w-12 h-12 rounded-full border border-gray-100 dark:border-white/10 flex items-center justify-center bg-white dark:bg-white/5 hover:bg-brand-surface dark:hover:bg-white/10 hover:border-gray-200 hover:-translate-y-1 transition-all duration-300 shadow-sm"
            >
              <img src={s.icon} alt={s.name} className="w-5 h-5 opacity-70" />
            </a>
          ))}
        </div>

        {/* Show action buttons */}
        <div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 animate-on-scroll is-visible" 
          style={{ animationDelay: "0.5s" }}
        >
          <a
            href="#contact"
            className="px-8 py-3 rounded-full bg-brand-dark dark:bg-white text-white dark:text-brand-dark font-medium flex items-center gap-2 hover:opacity-90 transition-opacity shadow-md"
          >
            contact me
            <span className="text-xl leading-none">&rarr;</span>
          </a>
          
          <a
            href="./assets/resume.pdf"
            target="_blank"
            className="px-8 py-3 rounded-full border border-gray-300 dark:border-white/30 text-brand-dark dark:text-white font-medium flex items-center gap-2 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
          >
            my resume
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
