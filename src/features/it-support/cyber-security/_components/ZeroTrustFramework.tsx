import Hero from "@/shared/components/ui/Hero";
import HoverableContentCard from "@/shared/components/ui/HoverableContentCard";
import { Lock } from "lucide-react";
import Image from "next/image";

import { zeroTrustHeroData } from "@/features/it-support/cyber-security/data/cyberSecurityData";

const ZeroTrustFramework = () => {
  return (
    <main className="flex min-h-screen flex-col font-sans text-slate-800 bg-slate-50">
      {/* HERO SECTION  */}
      <Hero data={zeroTrustHeroData} />
      {/* ==================== SECTION 1: Header / Overview ==================== */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full text-justify">
        <HoverableContentCard>
          <div className="flex items-start gap-4 mb-4">
            {/* Lock Icon */}
            <div className="p-3 bg-blue-50 text-blue-600 rounded-lg shrink-0">
              <Lock />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800 uppercase tracking-tight">
                Zero Trust Framework
              </h2>
            </div>
          </div>

          <div className="space-y-4 text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed">
            <p>
              By employing solutions rooted in a Zero Trust Framework, Microsoft
              consistently adopts a “never trust, always verify” stance towards
              security.
            </p>
            <p>
              Rather than presuming the safety of everything within a corporate
              firewall, the Zero Trust model operates on the assumption of
              breaches, verifies explicitly, and employs the principle of least
              privileged access.
            </p>
          </div>
        </HoverableContentCard>
      </section>

      {/* ==================== SECTION 2: Architecture Diagram ==================== */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex justify-center items-center overflow-hidden rounded-lg">
          <Image
            src="/images/it-support/cyber-security/zero-trust-framework/zero-trust.png"
            alt="Description of the image"
            width={1300}
            height={600}
          />
        </div>
      </section>

      {/* ==================== SECTION 3: Core Principles ==================== */}
      <section className="pt-6 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-justify">
          {/* Principle 1 */}
          <HoverableContentCard>
            <div className="space-y-3">
              <div className="flex items-center gap-2 border-b border-blue-100 pb-2">
                <h3 className="text-sm sm:text-base font-bold text-slate-800">
                  1. Assumes breach
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Reduces the impact area of potential incidents and segments
                access. Confirms end-to-end encryption and leverages analytics
                for enhanced visibility, proactive threat detection, and
                fortified defenses.
              </p>
            </div>
          </HoverableContentCard>

          <HoverableContentCard>
            {/* Principle 2 */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 border-b border-blue-100 pb-2">
                <h3 className="text-sm sm:text-base font-bold text-slate-800">
                  2. Verifies explicitly
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Authenticates and grants authorization based on a comprehensive
                range of data points, encompassing user identity, location,
                device condition, service or workload, data classification, and
                any anomalies detected.
              </p>
            </div>
          </HoverableContentCard>
          <HoverableContentCard>
            {/* Principle 3 */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 border-b border-blue-100 pb-2">
                <h3 className="text-sm sm:text-base font-bold text-slate-800">
                  3. Least privileged access
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Restricts user access through just-in-time and
                just-enough-access (JIT/JEA), adaptive policies based on risk
                assessment, and data protection measures to safeguard both data
                integrity and productivity.
              </p>
            </div>
          </HoverableContentCard>
        </div>
      </section>
    </main>
  );
};

export default ZeroTrustFramework;
