import { ChevronRight, HeartHandshake, Users, Wrench } from "lucide-react";
import Image from "next/image";

export default function InternetPage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800 overflow-x-hidden">
      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-linear-to-t from-[#c2dde6] to-white pt-24 pb-32 lg:pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
          {/* Hero Content */}
          <div className="space-y-8 max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1a5b8f] leading-tight">
              Keeping you <br className="hidden md:block" /> connected
            </h1>
            <p className="text-lg md:text-xl text-slate-700 font-medium leading-relaxed">
              Business Internet and Voice solutions designed to keep your
              operations running smoothly, ensuring you stay connected with
              clients, colleagues, and partners.
            </p>

            {/* Action Buttons Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {["NBN internet", "4G/5G LTE", "Starlink", "Cel-Fi Boosters"].map(
                (btn) => (
                  <button
                    key={btn}
                    className="group flex items-center justify-between px-6 py-4 bg-[#1a365d] hover:bg-[#2a4a7f] text-white text-sm font-semibold rounded-xl shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    {btn}
                    <ChevronRight className="w-4 h-4 text-sky-300 group-hover:translate-x-1 transition-transform" />
                  </button>
                ),
              )}
            </div>

            {/* Support Link */}
            <div className="pt-6 border-t border-slate-200/60 flex flex-col items-start gap-3">
              <p className="text-sky-700 font-semibold text-sm">
                Need help with your internet service?
              </p>
              <button className="px-6 py-2.5 bg-white border border-sky-200 text-sky-700 text-xs font-bold tracking-wider uppercase rounded-full shadow-sm hover:bg-[#2a4a7f] hover:text-white cursor-pointer transition-colors">
                Contact Us
              </button>
            </div>
          </div>

          {/* Hero Illustration */}
          <div className="flex justify-center">
            <Image
              src="/images/internet/hero.png"
              alt="Internet connectivity devices"
              width={300}
              height={300}
              className="object-cover"
            />
          </div>
        </div>

        {/* Curved bottom shape */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            className="relative block w-full h-16"
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

      {/* ================= SERVICES GRID SECTION ================= */}
      <section className="relative bg-slate-50 py-12 lg:py-16 z-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                title: "NBN",
                desc: "Total Solutions IT delivers the National Broadband Network (NBN) to industry quality commercial and premises.",
                img: "/images/internet/nbn.jpg",
              },
              {
                title: "4G/5G backup",
                desc: "Ensure you stay connected in the event of an infrastructure issue to give you peace of mind with 4G/5G backup.",
                img: "/images/internet/backup.png",
              },
              {
                title: "Cel-Fi (4G/5G Boosters)",
                desc: "A smart antenna on the roof communicates with the mobile tower to amplify the signal to a building.",
                img: "/images/internet/celfi.png",
              },
              {
                title: "Starlink",
                desc: "Starlink is a satellite internet from Low Earth Orbit satellite globally by SpaceX, delivering global broadband coverage.",
                img: "/images/internet/starlink.png",
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] border-2 border-blue-100 hover:border-blue-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={card.img}
                    alt={card.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 flex flex-col grow">
                  <h3 className="text-xl font-bold text-slate-800 mb-3">
                    {card.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed grow">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= INTRO TEXT SECTION ================= */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-6">
              Business Internet and Voice
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              {
                "In today's digital landscape, a fast and reliable internet connection is crucial for the success of any business. Total Solutions IT provides comprehensive Business Internet and Voice solutions designed  to keep your operations running smoothly, ensuring you stay connected with clients, colleagues, and partners. Our services offer the speed, reliability, and flexibility your business needs to excel in a  competitive environment."
              }
            </p>
          </div>

          {/* Right Illustration */}
          <div className="relative h-100 lg:h-125 w-full flex justify-center items-center bg-white rounded-2xl p-6 lg:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-2 border-blue-100 hover:border-blue-300 transition-all">
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <Image
                src="/images/internet/voip.jfif"
                alt="Connectivity and communication"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= SPLIT SECTION 1 ================= */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Illustration */}
          <Image
            src="/images/internet/section.png"
            alt="Working seamlessly online"
            height={400}
            width={400}
            className="object-cover"
          />

          {/* Right Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight">
              Keeping you online, <br className="hidden lg:block" /> without the
              hassle.
            </h2>
            <div className="space-y-4 text-slate-600 text-[17px] leading-relaxed">
              <p>
                Opting for our NBN services provides you with additional peace
                of mind and convenience compared to dealing with mainstream,
                large-scale internet connectivity. We understand the importance
                of supporting our communities and our commitment extends to
                providing tailored internet solutions that cater to the unique
                needs of the area.
              </p>
              <p>
                With a focus on customer satisfaction, our local support team is
                readily available to assist you, offering a personalized touch
                to your internet experience. By choosing us for NBN and local
                internet solutions, you&apos;re not just accessing cutting-edge
                technology, but also supporting a local business that invests in
                the well-being and connectivity of your local community.
              </p>
            </div>
            <a
              href="#"
              className="inline-flex items-center text-[#1a5b8f] font-bold text-sm tracking-wide uppercase mt-4 hover:text-[#2a7bbd] transition-colors group"
            >
              <ChevronRight className="w-5 h-5 mr-1 group-hover:translate-x-1 transition-transform" />
              Is it connected, now what?
            </a>
          </div>
        </div>
      </section>

      {/* ================= SPLIT SECTION 2 ================= */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-10">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight">
              Let us keep you <br className="hidden lg:block" /> connected.
            </h2>

            <div className="space-y-8">
              {/* List Item 1 */}
              <div className="flex gap-4">
                <div className="mt-1 shrink-0 w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-[#1a5b8f]">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    Personalised local support.
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Our commitment to providing exceptional NBN services is
                    complemented by our dedicated local support team.
                  </p>
                </div>
              </div>

              {/* List Item 2 */}
              <div className="flex gap-4">
                <div className="mt-1 shrink-0 w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-[#1a5b8f]">
                  <Wrench className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    Tailored NBN services.
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Accessing cutting-edge technology to deliver fast and steady
                    broadband connectivity, ensuring that you can experience
                    stream, download, and engage in online activities without
                    disruptions.
                  </p>
                </div>
              </div>

              {/* List Item 3 */}
              <div className="flex gap-4">
                <div className="mt-1 shrink-0 w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-[#1a5b8f]">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    Community engagement.
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    We ensure that our services contribute positively to the
                    well-being and connectivity of the community we serve.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative h-100 lg:h-125 w-full flex justify-center items-center bg-white rounded-2xl p-6 lg:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-2 border-blue-100 hover:border-blue-300 transition-all">
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <Image
                src="/images/internet/connected.png"
                alt="Connectivity and communication"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
