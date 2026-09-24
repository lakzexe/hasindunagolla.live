import React from 'react';

export default function Header() {
 const socials = [
 {
 name: "LinkedIn",
 icon: (
 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
 ),
 link: "https://www.linkedin.com/in/hasindu-nagolla/",
 },
 {
 name: "GitHub",
 icon: (
 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
 ),
 link: "https://github.com/hasindu-nagolla",
 },
 {
 name: "Medium",
 icon: (
 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M2.846 6.887c.03-.295-.083-.586-.303-.784l-2.24-2.7v-.403h6.958l5.378 11.795 4.728-11.795h6.633v.403l-1.916 1.837c-.165.126-.247.333-.213.538v13.498c-.034.204.048.411.213.537l1.871 1.837v.403h-9.412v-.403l1.939-1.882c.19-.19.19-.246.19-.537v-10.91l-5.389 13.688h-.728l-6.275-13.688v9.174c-.052.385.076.774.347 1.052l2.521 3.058v.404h-7.14v-.404l2.521-3.058c.27-.279.39-.67.325-1.052v-10.608z" /></svg>
 ),
 link: "https://medium.com/@hasindu-nagolla",
 },
 {
 name: "X",
 icon: (
 <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
 ),
 link: "https://x.com/hasindunagolla",
 },
 {
 name: "Bluesky",
 icon: (
 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.81 9.497 7.823 4.308 4.557-5.073 1.082-6.498-2.83-7.078a10.51 10.51 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.789.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8z"/></svg>
 ),
 link: "https://bsky.app/profile/hasindunagolla.bsky.social",
 },
 {
 name: "Telegram",
 icon: (
 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.665 3.717l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"/></svg>
 ),
 link: "https://t.me/Hasindu_Lakshan",
 },
 ];

 return (
 <section className="relative pt-32 pb-24 px-6 overflow-hidden bg-white">
 {/* Background grid pattern */}
 <div className="absolute inset-0 z-0" 
 style={{ 
 backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px)', 
 backgroundSize: '40px 40px',
 backgroundPosition: 'center top'
 }}>
 </div>
 
 {/* Abstract Background Blob */}
 <div className="absolute w-[800px] h-[800px] bg-brand-primary/5 rounded-full -z-10 top-1/2 -translate-y-1/2 -right-[200px]"></div>

 <div className="max-w-7xl mx-auto z-10 relative">
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-end mb-0">
 
 {/* Left Column */}
 <div className="lg:col-span-7 flex flex-col items-start animate-on-scroll is-visible pb-24 lg:pb-32 pt-10">
 
 <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F0F5FF] mb-8">
 <div className="w-2 h-2 rounded-full bg-brand-primary"></div>
 <span className="text-xs font-bold text-brand-primary tracking-wide">Software Engineering Undergraduate</span>
 </div>

 <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-brand-dark mb-4 flex items-center gap-2">
 Hi! I'm Hasindu. <span className="text-3xl">👋</span>
 </h3>

 <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-extrabold tracking-tight text-brand-dark leading-[1.15] mb-6">
 Building Intelligent <br className="hidden sm:block" />
 Solutions with <span className="text-brand-primary">Code.</span>
 </h1>

 <p className="max-w-lg text-lg text-gray-500 leading-relaxed mb-10 font-medium">
 I build modern web applications and AI-powered solutions that solve real-world problems. Passionate about clean code, scalable systems, and continuous learning.
 </p>

 <div className="flex flex-wrap items-center gap-4 mb-12">
 <a
 href="#work"
 className="px-7 py-3.5 rounded-xl bg-brand-dark text-white font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity shadow-lg"
 >
 View My Work
 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
 </svg>
 </a>
 
 <a
 href="#contact"
 className="px-7 py-3.5 rounded-xl border border-gray-200 text-brand-dark font-semibold flex items-center gap-2 hover:bg-gray-50 transition-colors shadow-sm bg-white"
 >
 Contact Me
 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
 </svg>
 </a>
 </div>

 <div className="flex items-center gap-5">
 <span className="text-sm font-semibold text-gray-600">Connect with me</span>
 <div className="flex items-center gap-3">
 {socials.map((s) => (
 <a
 key={s.name}
 href={s.link}
 target="_blank"
 rel="noreferrer"
 aria-label={s.name}
 className="w-10 h-10 rounded-full border border-gray-100 shadow-sm flex items-center justify-center text-gray-600 hover:bg-gray-50 hover:text-brand-primary transition-all bg-white"
 >
 {s.icon}
 </a>
 ))}
 </div>
 </div>
 
 </div>

 {/* Right Column - Image */}
 <div className="lg:col-span-5 relative flex justify-center items-end lg:justify-end animate-on-scroll is-visible h-full lg:h-[650px] z-0" style={{ animationDelay: "0.2s" }}>
 
 <div className="relative z-10 h-full flex items-end">
 <img
 src="/assets/profile-img.png?v=2"
 alt="Hasindu Nagolla"
 className="w-auto h-[450px] sm:h-[550px] lg:h-full object-cover object-bottom"
 />
 
 {/* Floating Card */}
 <div className="absolute bottom-24 -right-4 sm:-right-8 lg:-right-12 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-gray-100/50 flex items-center gap-4 animate-bounce z-30" style={{ animationDuration: '4s' }}>
 <div className="w-12 h-12 rounded-xl bg-[#F0F5FF] flex items-center justify-center text-brand-primary">
 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
 </svg>
 </div>
 <div>
 <p className="text-[11px] font-bold text-brand-dark uppercase tracking-wider mb-0.5">Undergraduate</p>
 <p className="text-xs text-gray-500 font-medium">The Open University<br/>of Sri Lanka</p>
 </div>
 </div>
 </div>
 </div>
 </div>

 {/* Stats Bar */}
 <div className="bg-brand-dark rounded-[2rem] p-8 sm:p-10 shadow-2xl relative z-20 -mt-12 lg:-mt-20 mx-4 lg:mx-0 animate-on-scroll is-visible" style={{ animationDelay: "0.4s" }}>
 <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-700/50">
 
 <div className="flex items-center gap-4 md:px-8 justify-start md:justify-center pt-4 md:pt-0">
 <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-[#4B83F3]">
 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
 </div>
 <div>
 <h4 className="text-2xl sm:text-3xl font-bold text-white mb-1">10+</h4>
 <p className="text-xs text-gray-400 font-medium">Projects Completed</p>
 </div>
 </div>

 <div className="flex items-center gap-4 md:px-8 justify-start md:justify-center pt-4 md:pt-0">
 <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-[#4B83F3]">
 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
 </div>
 <div>
 <h4 className="text-2xl sm:text-3xl font-bold text-white mb-1">2+</h4>
 <p className="text-xs text-gray-400 font-medium">Years of Learning</p>
 </div>
 </div>

 <div className="flex items-center gap-4 md:px-8 justify-start md:justify-center pt-4 md:pt-0">
 <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-[#4B83F3]">
 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
 </div>
 <div>
 <h4 className="text-2xl sm:text-3xl font-bold text-white mb-1">5+</h4>
 <p className="text-xs text-gray-400 font-medium">Technologies</p>
 </div>
 </div>

 <div className="flex items-center gap-4 md:px-8 justify-start md:justify-center pt-4 md:pt-0">
 <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-[#4B83F3]">
 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
 </div>
 <div>
 <h4 className="text-2xl sm:text-3xl font-bold text-white mb-1">100%</h4>
 <p className="text-xs text-gray-400 font-medium">Dedication</p>
 </div>
 </div>

 </div>
 </div>

 </div>
 </section>
 );
}
