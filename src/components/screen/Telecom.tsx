"use client";

import Image from "next/image";
import { useState } from "react";
import Hero from "../ui/Hero";

const faqs = [
  {
    question: "What is a VoIP phone system?",
    answer:
      "VoIP (Voice over Internet Protocol) is a technology that allows you to make voice calls using a broadband internet connection instead of a traditional analog phone line. It converts your voice into digital signals that travel over the internet, offering greater flexibility, lower costs, and advanced features compared to conventional phone systems.",
  },
  {
    question: "How much does a phone system cost?",
    answer:
      "Pricing depends on the number of users, features required, and whether you choose a cloud-hosted or on-premise solution. Cloud systems typically start from a low monthly per-user fee with no upfront hardware costs, while on-premise systems involve an initial investment but may be more cost-effective long-term for larger teams. Contact us for a tailored quote.",
  },
  {
    question: "Can I keep my current phone numbers?",
    answer:
      "Yes. We handle full number porting from your existing provider so there is zero disruption to your business. The porting process is managed end-to-end by our team, and your numbers will seamlessly transfer to the new system with no downtime.",
  },
  {
    question: "Is it hard to set up a phone system?",
    answer:
      "Not at all. Our team manages the entire setup process from start to finish. For cloud-based systems, we configure everything remotely so your team can be up and running within hours. For on-premise installations, we handle all hardware deployment, cabling, and configuration with minimal disruption to your operations.",
  },
  {
    question: "What features come with the phone system?",
    answer:
      "Our phone systems include call routing, auto-attendant, voicemail-to-email, call recording, call analytics, conference bridging, mobile app integration, and more. Advanced features like CRM integration, AI call transcription, and real-time dashboards are also available depending on the plan you choose.",
  },
];

export default function TelecomPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const heroData = {
    title1: "Telecom Systems to help",
    title2: "simplify your business",
    description:
      "Connecting with our dedicated team of professionals to ensure your business communication runs smoothly.",
    bgImage: "/images/telecom/hero.png",

    actionButtons: [
      {
        label: "VODIA",
        href: "#partners",
      },
      {
        label: "GRAND STREAM",
        href: "#capabilities",
      },
      { label: "AVAYA", href: "#security" },
      {
        label: "IPECS",
        href: "#networking",
      },
    ],
  };

  return (
    <main className="flex min-h-screen flex-col font-sans text-slate-800 bg-slate-50">
      {/* HERO SECTION */}
      <Hero data={heroData} />

      {/* TESTIMONIALS SECTION */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
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
              className="bg-[#2a2a2a] text-gray-200 p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-2 border-blue-100 relative"
            >
              <span className="text-5xl text-blue-600 absolute top-6 left-6 font-serif">
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="pt-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-snug">
              Upgrade to the latest smart business phone system technology and
              save up to 40% on your current bill.
            </h2>
          </div>
          <div className="bg-white p-8 relative rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-2 border-blue-100 hover:border-blue-300 transition-all">
            <div className="absolute top-0 left-8 w-16 h-1 bg-blue-600 rounded-b-md"></div>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  How Many Locations / Users?
                </label>
                <select className="w-full border border-blue-100 rounded-md p-3 bg-gray-50 text-slate-700 focus:ring-2 focus:ring-blue-500 outline-none">
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
                    className="w-full border border-blue-100 rounded-md p-3 bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full border border-blue-100 rounded-md p-3 bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
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
                    className="w-full border border-blue-100 rounded-md p-3 bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full border border-blue-100 rounded-md p-3 bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
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
                  className="w-full border border-blue-100 rounded-md p-3 bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
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
          <div className="relative h-112.5 rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-2 border-blue-100">
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
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-12">
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
                className="bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-2 border-blue-100 hover:border-blue-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-bold text-lg text-slate-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DARK BANNER */}
      <section className="bg-[#2a2a2a] py-16">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden shrink-0 border-2 border-blue-100">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start relative">
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
                className="border-2 border-blue-100 hover:border-blue-300 rounded-2xl relative p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white transition-all"
              >
                <div className="absolute top-0 left-8 w-16 h-1 bg-blue-600 rounded-b-md"></div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
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
          <div className="relative h-150 rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-2 border-blue-100">
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
      <section className="py-16 bg-white">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
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
                  <h4 className="font-bold text-slate-900">
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
                  <h4 className="font-bold text-slate-900">
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
          <div className="relative h-75 rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-2 border-blue-100">
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
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-16">
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
                <h3 className="font-bold text-slate-900">{benefit.title}</h3>
                <p className="text-sm text-slate-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERSHIP */}
      <section className="py-16 bg-slate-50 border-t border-blue-100">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Partnership With Us
            </h2>
            <p className="text-slate-600">
              We understand that every business is unique and has different
              communication needs. Let us tailor a solution that perfectly
              aligns with your operational goals.
            </p>
          </div>
          <div className="relative h-64 w-full rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-2 border-blue-100 hover:border-blue-300 transition-all">
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
            FAQs
          </h2>
          <div className="space-y-4 mx-auto">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className="border-2 border-blue-100 rounded-xl overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggle(i)}
                    className="w-full flex justify-between items-center px-6 py-5 text-left cursor-pointer hover:bg-slate-50 transition-colors"
                  >
                    <span className="font-medium text-slate-900 pr-4">
                      {faq.question}
                    </span>
                    <span
                      className={`text-2xl text-blue-600 font-semibold shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-sm text-slate-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

