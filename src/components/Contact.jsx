import { useState } from 'react';

export default function Contact() {
    const [result, setResult] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setResult("Sending...");
        const formData = new FormData(event.target);

        const ACCESS_KEY = ""; // set your Web3Forms UUID here if available

        if (!ACCESS_KEY) {
            const name = formData.get('name') || '';
            const email = formData.get('email') || '';
            const message = formData.get('message') || '';
            const subject = `New contact from ${name || email}`;
            const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
            const mailto = `mailto:example@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            setResult('Opening mail client...');
            window.location.href = mailto;
            setIsSubmitting(false);
            return;
        }

        formData.append("access_key", ACCESS_KEY);

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            }).then((res) => res.json());

            if (res.success) {
                setResult(res.message);
                event.target.reset();
            } else {
                setResult(res.message);
            }
        } catch (error) {
            setResult("An error occurred. Please try again.");
        }
        setIsSubmitting(false);
    };

    return (
        <section id="contact" className="w-full py-24 md:py-32 px-6 bg-brand-surface dark:bg-[#0F172A] border-t border-gray-100 dark:border-white/10">
            <div className="max-w-3xl mx-auto">
                
                <div className="text-center mb-16 animate-on-scroll is-visible">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-brand-dark dark:text-white mb-6">Get in touch</h2>
                    <p className="text-lg text-gray-500 dark:text-gray-400">
                        Let's have a quick chat or contact me directly via the form below.
                    </p>
                </div>

                <form onSubmit={onSubmit} className="bg-white dark:bg-white/5 p-8 md:p-12 rounded-[2rem] border border-gray-100 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none animate-on-scroll is-visible" style={{ animationDelay: '0.1s' }}>
                    <input type="hidden" name="subject" value="New Portfolio Contact Submission" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        {/* Name Input Field */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                            <input 
                                type="text" 
                                id="name"
                                name="name"
                                required
                                placeholder="Your Name" 
                                className="w-full px-5 py-4 bg-brand-surface dark:bg-[#0F172A] border border-transparent focus:border-brand-primary focus:bg-white dark:focus:bg-white/5 rounded-xl outline-none transition-all text-brand-dark dark:text-white placeholder-gray-400"
                            />
                        </div>
                        {/* Email Input Field */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                            <input 
                                type="email" 
                                id="email"
                                name="email"
                                required
                                placeholder="your.email@example.com" 
                                className="w-full px-5 py-4 bg-brand-surface dark:bg-[#0F172A] border border-transparent focus:border-brand-primary focus:bg-white dark:focus:bg-white/5 rounded-xl outline-none transition-all text-brand-dark dark:text-white placeholder-gray-400"
                            />
                        </div>
                    </div>

                    {/* Message Text Area */}
                    <div className="mb-8">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                        <textarea 
                            id="message"
                            name="message"
                            required
                            rows="5" 
                            placeholder="Tell me about your project..." 
                            className="w-full px-5 py-4 bg-brand-surface dark:bg-[#0F172A] border border-transparent focus:border-brand-primary focus:bg-white dark:focus:bg-white/5 rounded-xl outline-none transition-all text-brand-dark dark:text-white placeholder-gray-400 resize-none"
                        ></textarea>
                    </div>

                    <div className="flex flex-col items-center">
                        <button 
                            type="submit" 
                            disabled={isSubmitting}
                            className="w-full sm:w-auto px-10 py-4 bg-brand-dark dark:bg-white text-white dark:text-brand-dark font-medium rounded-full hover:opacity-90 transition-opacity disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {isSubmitting ? 'Sending...' : 'Get in touch'}
                            {!isSubmitting && (
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            )}
                        </button>
                        {result && <p className="mt-4 text-sm font-medium text-brand-primary">{result}</p>}
                    </div>
                </form>

            </div>
        </section>
    );
}