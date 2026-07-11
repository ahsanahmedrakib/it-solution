import { CheckCheck } from "lucide-react";

interface CardItem {
  stepNumber: string;
  title: string;
  subtitle: string;
  description?: string;
  listHeading: string;
  points: string[];
}

const approachData: CardItem[] = [
  {
    stepNumber: "1. Stabilise",
    title: "Bringing your IT up to standard",
    subtitle:
      "We start by gaining a deep understanding of your business and your existing IT environment. From there, we address gaps, risks, and inefficiencies to create a stable, secure foundation you can rely on.",
    listHeading: "How we stabilise:",
    points: [
      "Comprehensive IT audit and health check",
      "Review of your current systems and workflows",
      "Identification of risks and problem areas",
      "Clear, prioritised recommendations",
      "Development of a practical IT roadmap",
    ],
  },
  {
    stepNumber: "2. Optimise",
    title: "Fine-tuning your operations",
    subtitle:
      "Once your IT is stable, we focus on proactive management and continuous improvement. Our team monitors, maintains, and supports your systems to minimise downtime and resolve issues before they impact your business.",
    listHeading: "How we optimise:",
    points: [
      "24/7 system monitoring",
      "Proactive maintenance and patching",
      "Continuous efficiency improvements",
    ],
  },
  {
    stepNumber: "3. Enhance",
    title: "Accelerating your growth",
    subtitle:
      "With a solid and optimised IT environment in place, we work with you to align technology with your business goals. This stage is about leveraging IT to improve efficiency, support growth, and maximise return on investment.",
    listHeading: "How we enhance:",
    points: [
      "Alignment of IT with business strategy",
      "Technology planning and future-proofing",
      "Scalable infrastructure upgrades",
    ],
  },
];

export default function OurApproach() {
  return (
    <section className="bg-[#0b0f19] text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Aesthetic Background glow accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="text-xl font-bold tracking-wider text-blue-500 uppercase mb-3">
            Our Approach
          </h2>
          <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight bg-linear-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent mb-6">
            Complete 360° Care of Your IT.
          </p>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light">
            At Total Solutions IT, we take a proactive, end-to-end approach to
            managing your technology. Our proven three-stage framework
            transforms IT from a constant frustration into a reliable, secure,
            and scalable business asset — supporting what you need today while
            preparing you for tomorrow.
          </p>
        </div>

        {/* Responsive Grid System (Equal Height Cards via h-full) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {approachData.map((item, index) => (
            <div
              key={index}
              className="group relative flex flex-col h-full rounded-2xl bg-linear-to-b from-[#161f30] to-[#0f1522] border border-gray-800 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-[0_10px_30px_-10px_rgba(59,130,246,0.2)]"
            >
              {/* Animated Glowing Header Line Decorator */}
              <div className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-gray-700 to-transparent group-hover:via-blue-500 transition-all duration-500 rounded-t-2xl" />

              <div className="flex justify-center mb-8">
                <CheckCheck
                  size={30}
                  className="text-brand-blue"
                  strokeWidth={3}
                />
              </div>

              {/* Step & Titles Block */}
              <div className="text-center mb-6">
                <span className="text-xs font-bold tracking-widest text-blue-400 uppercase bg-blue-500/10 px-3 py-1 rounded-full">
                  Stage 0{index + 1}
                </span>
                <h3 className="text-2xl font-bold text-white mt-4 mb-2 tracking-tight">
                  {item.stepNumber}
                </h3>
                <h4 className="text-lg font-semibold text-gray-300 px-2 min-h-14 flex items-center justify-center">
                  {item.title}
                </h4>
              </div>

              {/* Subtitle / Description Section */}
              <p className="text-gray-400 text-sm leading-relaxed text-center font-light mb-8">
                {item.subtitle}
              </p>

              {/* Bottom List Element - Pushed cleanly to bottom using margin-top-auto */}
              <div className="mt-auto pt-6 border-t border-gray-800/60">
                <h5 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
                  {item.listHeading}
                </h5>
                <ul className="space-y-3 text-sm text-gray-300">
                  {item.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start space-x-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                      <span className="leading-tight font-light">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
