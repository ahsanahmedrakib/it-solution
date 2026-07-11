// Make sure to install lucide-react if you haven't: npm install lucide-react

import Image from "next/image";

interface PartnerLogo {
  name: string;
  logo: string;
}

const partnersData: PartnerLogo[] = [
  {
    name: "MikroTik",
    logo: "/images/home/how-we-do/mikrotik.png",
  },
  {
    name: "N-Able",
    logo: "/images/home/how-we-do/nable.png",
  },
  {
    name: "Grandstream",
    logo: "/images/home/how-we-do/grandstream.png",
  },
  {
    name: "WordPress",
    logo: "/images/home/how-we-do/wordpress.png",
  },
  {
    name: "Microsoft 365",
    logo: "/images/home/how-we-do/microsoft365.png",
  },
  {
    name: "Ingram",
    logo: "/images/home/how-we-do/ingram.png",
  },
  {
    name: "Cellfi",
    logo: "/images/home/how-we-do/cellfi.png",
  },
  {
    name: "Ipecs",
    logo: "/images/home/how-we-do/ipecs.png",
  },
  {
    name: "HPE",
    logo: "/images/home/how-we-do/hpe.png",
  },
  {
    name: "Avaya",
    logo: "/images/home/how-we-do/avaya.png",
  },
  {
    name: "Cove",
    logo: "/images/home/how-we-do/cove.png",
  },
  {
    name: "Veeam",
    logo: "/images/home/how-we-do/veeam.png",
  },
  {
    name: "Datto",
    logo: "/images/home/how-we-do/datto.png",
  },
  {
    name: "Recaptcha",
    logo: "/images/home/how-we-do/recaptcha.png",
  },
  {
    name: "Woo",
    logo: "/images/home/how-we-do/woo.png",
  },
];

export default function HowWeDo() {
  return (
    <section className="bg-linear-to-b from-gray-50 via-white to-gray-50 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      {/* Background Decorative Ambient Blurs */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-125 h-125 bg-blue-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
        <div className="">
          <div className="text-center md:text-left mb-12">
            <span className="text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-50 px-3 py-1.5 rounded-md ring-1 ring-blue-600/10">
              Ecosystem
            </span>
            <h2 className="text-3xl font-black text-gray-900 tracking-tight mt-3">
              How we do it.
            </h2>
          </div>

          {/* Partner Grid with sleek border hover states */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {partnersData.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center bg-white rounded-xl border border-gray-400 shadow-xs transition-all duration-300 grayscale opacity-100 hover:grayscale-0 hover:opacity-100  hover:border-brand-hover hover:shadow-md hover:scale-[1.02] cursor-pointer aspect-square"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={130}
                  height={130}
                  className="object-contain max-w-full max-h-full p-2 sm:p-0.5"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
