"use client";

import { useTouchHover } from "@/shared/hooks/useTouchHover";
import { ChevronRight, HeartHandshake, Users, Wrench } from "lucide-react";
import Image from "next/image";
import Hero from "@/shared/components/ui/Hero";

const heroData = {
  title1: "Keeping you",
  title2: "connected",
  description:
    "Business Internet and Voice solutions designed to keep your operations running smoothly, ensuring you stay connected with clients, colleagues, and partners.",
  bgImage: "/images/internet/hero.png",
  actionButtons: [
    {
      label: "NBN internet",
      href: "#partners",
    },
    {
      label: "4G/5G LTE",
      href: "#capabilities",
    },
    { label: "Starlink", href: "#security" },
    {
      label: "Cel-Fi Boosters",
      href: "#networking",
    },
  ],
};

function InternetCard({
  card,
}: {
  card: { title: string; desc: string; img: string };
}) {
  const { touched, onTouchStart, onTouchEnd } = useTouchHover();

  return (
    <div
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      className={`bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] border-2 flex flex-col group transition-all duration-300 ${
        touched
          ? "border-blue-400 shadow-xl -translate-y-1"
          : "border-blue-100 hover:border-blue-400 hover:shadow-xl hover:-translate-y-1"
      }`}
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={card.img}
          alt={card.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className={`object-cover transition-transform duration-700 ${
            touched ? "scale-105" : "group-hover:scale-105"
          }`}
        />
      </div>
      <div className="p-6 flex flex-col grow">
        <h3 className="text-xl font-bold text-slate-800 mb-3">{card.title}</h3>
        <p className="text-slate-600 text-sm leading-relaxed grow">
          {card.desc}
        </p>
      </div>
    </div>
  );
}

export default function InternetPage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800 overflow-x-hidden">
      {/* ================= HERO SECTION ================= */}
      <Hero data={heroData} />

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
              <InternetCard key={idx} card={card} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= INTRO TEXT SECTION ================= */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 bg-white p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-2 border-blue-100 hover:border-blue-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all relative">
            <div className="absolute top-0 left-8 w-16 h-1 bg-blue-600 rounded-b-md"></div>
            <h2 className="text-3xl font-bold text-blue-900 mb-6 mt-2">
              Business Internet and Voice
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              {
                "In today's digital landscape, a fast and reliable internet connection is crucial for the success of any business. Total Solutions IT provides comprehensive Business Internet and Voice solutions designed  to keep your operations running smoothly, ensuring you stay connected with clients, colleagues, and partners. Our services offer the speed, reliability, and flexibility your business needs to excel in a  competitive environment."
              }
            </p>
          </div>

          {/* Right Illustration */}
          <div className="order-1 lg:order-2 relative h-100 lg:h-125 w-full flex justify-center items-center rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
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
          <div>
            <Image
              src="/images/internet/section.png"
              alt="Working seamlessly online"
              height={400}
              width={400}
              className="object-cover"
            />
          </div>
          {/* Right Content */}
          <div className="bg-white p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-2 border-blue-100 hover:border-blue-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all relative">
            <div className="absolute top-0 left-8 w-16 h-1 bg-blue-600 rounded-b-md"></div>
            <h2 className="text-3xl font-bold text-blue-900 mb-6 mt-2">
              Keeping you online, <br className="hidden lg:block" /> without the
              hassle.
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Opting for our NBN services provides you with additional peace of
              mind and convenience compared to dealing with mainstream,
              large-scale internet connectivity. We understand the importance of
              supporting our communities and our commitment extends to providing
              tailored internet solutions that cater to the unique needs of the
              area.
            </p>
            <p className="text-slate-600 mb-6 leading-relaxed">
              With a focus on customer satisfaction, our local support team is
              readily available to assist you, offering a personalized touch to
              your internet experience. By choosing us for NBN and local
              internet solutions, you&apos;re not just accessing cutting-edge
              technology, but also supporting a local business that invests in
              the well-being and connectivity of your local community.
            </p>
            <a
              href="#"
              className="text-blue-600 font-medium flex items-center hover:text-blue-800"
            >
              <ChevronRight className="w-4 h-4 mr-2" />
              Is it connected, now what?
            </a>
          </div>
        </div>
      </section>

      {/* ================= SPLIT SECTION 2 ================= */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1 bg-white p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-2 border-blue-100 hover:border-blue-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all relative">
            <div className="absolute top-0 left-8 w-16 h-1 bg-blue-600 rounded-b-md"></div>
            <h2 className="text-3xl font-bold text-blue-900 mb-6 mt-2">
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
          <div className="order-1 lg:order-2 relative h-100 lg:h-125 w-full flex justify-center items-center rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
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
