import Image from "next/image";

export default function TelecomPage() {
  return (
    <main className="flex min-h-screen flex-col font-sans text-slate-800 bg-white">
      {/* HERO SECTION */}
      <section className="relative bg-[#fdfaf2] pt-20 pb-32 overflow-hidden">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div className="space-y-8 z-10 col-span-2">
            <h1 className="text-4xl lg:text-6xl font-bold text-blue-700 leading-tight">
              Telecom Systems to help simplify your business
            </h1>
            <p className="text-slate-600 text-lg max-w-md">
              Connecting with our dedicated team of professionals to ensure your
              business communication runs smoothly.
            </p>
            <button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-md font-semibold transition-colors">
              Get Started
            </button>

            <div className="pt-8">
              <h3 className="text-blue-700 font-semibold mb-4 text-lg">
                What Telecom System Do You Need?
              </h3>
              <div className="flex flex-wrap gap-4">
                <button className="bg-[#1e3a5f] text-white px-6 py-2 rounded-md hover:bg-blue-900 transition-colors">
                  Office
                </button>
                <button className="bg-[#1e3a5f] text-white px-6 py-2 rounded-md hover:bg-blue-900 transition-colors">
                  Small Biz
                </button>
                <button className="bg-[#1e3a5f] text-white px-6 py-2 rounded-md hover:bg-blue-900 transition-colors">
                  Large
                </button>
              </div>
            </div>
          </div>
          <div className="relative h-64 lg:h-100 w-full flex justify-center lg:justify-end z-10 col-span-1">
            <Image
              src="/images/telecom/hero.png"
              alt="Telecom Illustration"
              width={400}
              height={300}
              className="object-contain"
              priority
            />
          </div>
        </div>
        {/* Curved bottom shape */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            className="relative block w-full h-25"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C73.23,28.79,158.46,59.39,235.9,67.65,264.44,70.67,293.12,61.7,321.39,56.44Z"
              fill="#ffffff"
            ></path>
          </svg>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">
          What people are talking about us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              name: "Sarah J., Marketing Director",
              text: "We have been extremely satisfied with the new telecom system. The seamless integration and crystal clear audio have drastically improved our remote meetings. Highly recommended for any growing team.",
            },
            {
              name: "Michael T., Operations Manager",
              text: "Upgrading to this cloud-based system was the best decision for our business. Not only did we save on our monthly bill, but the customer support team has been phenomenal every step of the way.",
            },
            {
              name: "Elena R., Small Business Owner",
              text: "The setup process was incredibly fast and hassle-free. The flexible features allow us to manage calls perfectly whether we are in the office or working on the go.",
            },
            {
              name: "David L., IT Consultant",
              text: "Reliable, secure, and packed with advanced features. The administrative dashboard is intuitive, making it extremely easy to manage extensions and track call analytics.",
            },
          ].map((testimonial, i) => (
            <div
              key={i}
              className="bg-[#2a2a2a] text-gray-200 p-8 rounded-2xl shadow-lg relative"
            >
              <span className="text-5xl text-blue-500 absolute top-6 left-6 font-serif">
                &quot;
              </span>
              <p className="mt-8 mb-6 text-sm leading-relaxed">
                {testimonial.text}
              </p>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* UPGRADE & FORM SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="pt-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 leading-snug">
              Upgrade to the latest smart business phone system technology and
              save up to 40% on your current bill.
            </h2>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  How Many Locations / Users?
                </label>
                <select className="w-full border border-gray-300 rounded-md p-3 bg-gray-50 text-slate-700 focus:ring-2 focus:ring-blue-500 outline-none">
                  <option>1-10 Users</option>
                  <option>11-50 Users</option>
                  <option>50+ Users</option>
                </select>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md p-3 bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md p-3 bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full border border-gray-300 rounded-md p-3 bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full border border-gray-300 rounded-md p-3 bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="(555) 000-0000"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md p-3 bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="Company Name"
                />
              </div>
              <button
                type="button"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md transition-colors w-full md:w-auto"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* INFO SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-112.5 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/telecom/info.webp"
              alt="Customer Support Agent"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6 text-slate-600 leading-relaxed">
            <p>
              <strong>Seamless communication is essential</strong> to modern
              operations. With a dedicated support system, you are ensuring a
              smooth flow of business internally and externally. We provide
              enterprise-grade quality voice networks tailored specifically to
              your company needs.
            </p>
            <p>
              Through advanced features like flexible call routing, dedicated
              virtual receptionists, and seamless team collaboration apps, we
              enable your workforce to stay connected. Boost productivity,
              reduce operating costs, and secure your business communications.
            </p>
            <p>
              <strong>Built on a reliable foundation,</strong> our
              telecommunications solutions guarantee maximum uptime,
              crystal-clear voice clarity, and robust security protocols. Focus
              on your core business strategies while we manage the complex
              backend infrastructure. Experience true mobility, giving you and
              your team access from anywhere.
            </p>
          </div>
        </div>
      </section>

      {/* PRODUCTS / SERVICES GRID */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
          <h2 className="text-3xl font-bold text-blue-700 mb-12">
            Phone Systems Support
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Cloud Phone System Setup",
                img: "/images/telecom/cloud.webp",
                desc: "Experience seamless mobility and zero hardware maintenance with our secure cloud architecture.",
              },
              {
                title: "On-Premise",
                img: "/images/telecom/premise.webp",
                desc: "Maintain full internal control with robust on-site communication hardware deployments.",
              },
              {
                title: "VoIP",
                img: "/images/telecom/voip.webp",
                desc: "Cut costs without compromising quality using industry-leading Voice over IP protocols.",
              },
              {
                title: "Data",
                img: "/images/telecom/data.webp",
                desc: "Ensure your voice and data packets travel securely and swiftly across optimized networks.",
              },
              {
                title: "Security",
                img: "/images/telecom/security.webp",
                desc: "End-to-end encryption providing peace of mind for sensitive internal communications.",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-100 flex flex-col"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-bold text-lg text-slate-800 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-500">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DARK BANNER */}
      <section className="bg-[#333333] py-16 ">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden shrink-0 border-4 border-gray-600">
            <Image
              src="/images/telecom/dark.jpg"
              alt="Optimum Sound"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-white leading-relaxed">
              As well as taking incoming calls on fixed line phones, IP
              terminals provide optimum sound.
            </h2>
          </div>
        </div>
      </section>

      {/* FEATURES ACCORDION & IMAGE */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            {[
              {
                title: "Cost-Effective Solutions",
                desc: "Significantly lower your monthly communication bills while enjoying premium enterprise features.",
              },
              {
                title: "Future Proof Phone System",
                desc: "Our scalable infrastructure grows with your business, ensuring you never outgrow your communications platform.",
              },
              {
                title: "Customer-Centric Hosted Solutions",
                desc: "Tailored directly to improve customer experience with features like auto-attendant and seamless routing.",
              },
              {
                title: "Cost-Effective Hardware Solutions",
                desc: "Access top-tier physical desk phones and conference terminals at competitive, affordable rates.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-xl p-6 shadow-sm bg-white"
              >
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  • {feature.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4">{feature.desc}</p>
                <a
                  href="#"
                  className="text-blue-600 font-semibold text-sm hover:underline"
                >
                  Read More &rarr;
                </a>
              </div>
            ))}
          </div>
          <div className="relative h-150 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/telecom/feature.jpg"
              alt="Team Collaboration"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-800 mb-6">
              Provide the Best Communications For your Business.
              <br />
              Choose the Best Provider.
            </h2>
            <ul className="space-y-6 mt-8">
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-1">
                  <span className="text-blue-600 font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">
                    State-of-the-art technology
                  </h4>
                  <p className="text-sm text-slate-600 mt-1">
                    Leveraging the latest advancements to keep you ahead of the
                    curve.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-1">
                  <span className="text-blue-600 font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">
                    Dedicated customer support
                  </h4>
                  <p className="text-sm text-slate-600 mt-1">
                    Our support team is available 24/7 to resolve any issues
                    immediately.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="relative h-75 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/telecom/choose.webp"
              alt="Modern Office Room"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* HARDWARE CTA */}
      <section className="bg-[#2a2a2a] py-16 text-white">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto grid grid-cols-1 sm:grid-cols-2 gap-12 items-center">
          <div className="relative h-64 md:h-80 w-full">
            <Image
              src="/images/telecom/telephone.png"
              alt="VoIP Desk Phone"
              fill
              className="object-contain"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">
              Boost Productivity with Affordable Phone Systems
            </h2>
            <p className="text-gray-300">
              Transform the way your office communicates. High-definition audio
              and programmable interfaces ensure you never miss a beat.
            </p>
            <h3 className="text-xl font-semibold">Discover Phone System</h3>
            <p className="text-sm text-gray-400">
              Find the perfect hardware to match your cloud infrastructure.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md transition-colors mt-4">
              Read More
            </button>
          </div>
        </div>
      </section>

      {/* BENEFITS GRID */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-16">
            Increase Time To Money and Boost Productivity with Phone Systems.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
            {[
              {
                title: "Unified Communications",
                desc: "Integrate voice, video, and messaging.",
              },
              {
                title: "Reliable Hosting",
                desc: "Guaranteed 99.99% uptime SLA.",
              },
              {
                title: "Budget Planning",
                desc: "Predictable flat-rate monthly billing.",
              },
              {
                title: "High Definition",
                desc: "Crystal clear wideband audio.",
              },
              {
                title: "Seamless Routing",
                desc: "Advanced logic for inbound calls.",
              },
              {
                title: "Better Tracking",
                desc: "Comprehensive call analytics & logging.",
              },
            ].map((benefit, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center space-y-4"
              >
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xl font-bold">
                  ✓
                </div>
                <h3 className="font-bold text-slate-800">{benefit.title}</h3>
                <p className="text-sm text-slate-500">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERSHIP */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Partnership With Us
            </h2>
            <p className="text-slate-600">
              We understand that every business is unique and has different
              communication needs. Let us tailor a solution that perfectly
              aligns with your operational goals.
            </p>
          </div>
          <div className="relative h-64 w-full rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/telecom/partnership.jpg"
              alt="Partnership Meeting"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* FAQS */}
      <section className="py-20  bg-white">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
            FAQs
          </h2>
          <div className="space-y-4">
            {[
              "What is a VoIP phone system?",
              "How much does a phone system cost?",
              "Can I keep my current phone numbers?",
              "Is it hard to set up a phone system?",
              "What features come with the phone system?",
            ].map((question, i) => (
              <div
                key={i}
                className="border-b border-gray-200 py-4 flex justify-between items-center cursor-pointer hover:text-blue-600 transition-colors"
              >
                <span className="font-medium text-slate-700">{question}</span>
                <span className="text-2xl text-slate-400">+</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
