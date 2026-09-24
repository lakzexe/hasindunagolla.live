import { useState } from "react";

export default function Contact() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");
    const formData = new FormData(event.target);

    if (!ACCESS_KEY) {
      const name = formData.get("name") || "";
      const email = formData.get("email") || "";
      const message = formData.get("message") || "";
      const subject = `New contact from ${name || email}`;
      const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
      const mailto = `mailto:hasindu.connect@proton.me?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setResult("Opening mail client...");
      window.location.href = mailto;
      setIsSubmitting(false);
      return;
    }

    formData.append("access_key", ACCESS_KEY);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
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
    <section id="contact" className="py-24 md:py-32 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Contact details */}
          <div className="animate-on-scroll is-visible">
            <p className="text-brand-primary font-bold text-sm tracking-wider uppercase mb-2">
              Get in touch
            </p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-brand-dark mb-6">
              Have a project in mind?
            </h2>

            <p className="text-lg text-gray-500 mb-10 leading-relaxed">
              Have a project in mind or want to collaborate?
              <br className="hidden sm:block" />
              Send me a message and tell me a little about what you are working
              on.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-brand-primary">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-dark mb-0.5">
                    Email
                  </h4>
                  <p className="text-sm text-gray-500">
                    hasindu.connect@proton.me
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-brand-primary">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-dark mb-0.5">
                    Location
                  </h4>
                  <p className="text-sm text-gray-500">Matale, Sri Lanka</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-brand-primary">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-dark mb-0.5">
                    Response Time
                  </h4>
                  <p className="text-sm text-gray-500">Within 24 hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div
            className="animate-on-scroll is-visible"
            style={{ animationDelay: "0.2s" }}
          >
            <form
              onSubmit={onSubmit}
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-5"
            >
              <input
                type="hidden"
                name="subject"
                value="New Portfolio Contact Submission"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Name"
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-100 focus:border-brand-primary rounded-xl outline-none transition-all text-brand-dark placeholder-gray-400 text-sm"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Your Email"
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-100 focus:border-brand-primary rounded-xl outline-none transition-all text-brand-dark placeholder-gray-400 text-sm"
                  />
                </div>
              </div>

              <div>
                <textarea
                  name="message"
                  required
                  rows="5"
                  placeholder="Your Message"
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-100 focus:border-brand-primary rounded-xl outline-none transition-all text-brand-dark placeholder-gray-400 text-sm resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-brand-dark text-white font-semibold rounded-xl hover:opacity-90 transition-opacity disabled:opacity-70 flex items-center justify-center gap-2 shadow-md"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                {!isSubmitting && (
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                )}
              </button>
              {result && (
                <p className="text-center text-sm font-medium text-brand-primary mt-2">
                  {result}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
