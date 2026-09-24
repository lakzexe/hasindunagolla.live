export default function Work() {
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
        <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">My portfolio</h4>
            <h2 className="text-center text-5xl font-Ovo">My Projects</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">Welcome to my development portfolio! Explore a collection of projects showcasing my skills in front-end and back-end development.</p>

            <div className="grid grid-cols-auto my-10 gap-5 dark:text-black">
                {work.map((work) => (
                    <div key={work.name} className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group" style={{ backgroundImage: `url(${work.icon})` }}>
                        <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                            <div>
                                <h2 className="font-semibold">{work.name}</h2>
                                <p className="text-sm text-gray-700">{work.description}</p>
                            </div>
                            <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                                <img src="./assets/send-icon.png" alt="" className="w-5" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <a href="#" className="w-max flex items-center justify-center gap-2 text-gray-700 border border-gray-300 dark:border-white/25 hover:bg-slate-100/70 dark:hover:bg-darkHover rounded-full py-2 px-8 mx-auto my-20 duration-300 dark:text-white">
                Show more
                <img src="./assets/right-arrow-bold.png" alt="" className="w-4 dark:hidden" />
                <img src="./assets/right-arrow-bold-dark.png" alt="" className="w-4 hidden dark:block" />
            </a>

        </div>
    )
}