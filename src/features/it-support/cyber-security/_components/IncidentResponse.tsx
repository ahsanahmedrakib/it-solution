"use client";

import Hero from "@/shared/components/ui/Hero";
import HoverableContentCard from "@/shared/components/ui/HoverableContentCard";

import { incidentResponseHeroData } from "@/features/it-support/cyber-security/data/cyberSecurityData";

const IncidentResponse = () => {
  return (
    <main className="flex min-h-screen flex-col font-sans text-slate-800 bg-slate-50">
      {/* HERO SECTION  */}
      <Hero data={incidentResponseHeroData} />

      {/* ==================== SECTION 1: Introduction ==================== */}
      <section className="pt-12 sm:pt-16 pb-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full text-justify">
        <HoverableContentCard>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed">
            Our experienced incident response team supports Australian
            organizations and businesses across various industries in managing
            complex and sensitive cybersecurity challenges. With deep industry
            expertise and an in-depth understanding of the local threat
            landscape, you can trust us to handle every stage of the breach
            response cycle efficiently.
          </p>
        </HoverableContentCard>
      </section>

      {/* ==================== SECTION 2: How Does It Work? ==================== */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full text-justify">
        <HoverableContentCard>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800 mb-4 uppercase tracking-tight">
            HOW DOES IT WORK?
          </h2>

          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-6 text-justify">
            Our team offers rapid responses to any suspected IT breach affecting
            your organization, including malware, unauthorized access,
            unauthorized payments, data loss or theft, and more.
          </p>

          <ul className="space-y-4 text-xs sm:text-sm text-slate-500">
            <li className="flex items-start">
              <span className="text-brand-blue mr-2 font-bold">•</span>
              <span>
                <strong className="text-brand-blue font-bold uppercase">
                  CONTAINMENT:
                </strong>{" "}
                Our incident response team swiftly isolates the affected segment
                of devices to limit damage and prevent further harm, halting the
                spread and progression of the attack.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-brand-blue mr-2 font-bold">•</span>
              <span>
                <strong className="text-brand-blue font-bold uppercase">
                  MONITORING:
                </strong>{" "}
                We collaborate with our partners to help your business regain
                control and visibility of your network. While restoring affected
                systems, our team thoroughly validates them to ensure they are
                free from any compromise.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-brand-blue mr-2 font-bold">•</span>
              <span>
                <strong className="text-brand-blue font-bold uppercase">
                  ATTACK INVESTIGATION:
                </strong>{" "}
                Post-attack, we gather crucial information—such as logs, errors,
                and resources from intrusion detection systems—to inform our
                forensic analysis. Our team examines the causes, impacts, and
                potential mitigation strategies.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-brand-blue mr-2 font-bold">•</span>
              <span>
                <strong className="text-brand-blue font-bold uppercase">
                  REPORTING:
                </strong>{" "}
                We provide detailed analysis and documentation of the incident
                for both management and technical teams. Our report includes a
                comprehensive review of the incident, highlighting lessons
                learned and outlining a step-by-step account of the event.
              </span>
            </li>
          </ul>
        </HoverableContentCard>
      </section>

      {/* ==================== SECTION 3: Customised Remediation Action Plans ==================== */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full  text-justify">
        <HoverableContentCard>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-4">
            Customised Remediation Action Plans
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            Following every incident, we create tailored remediation action
            plans to enhance your overall security posture and help prevent
            future breaches.
          </p>
        </HoverableContentCard>
      </section>

      {/* ==================== SECTION 4: Benefits of Cyber Incident Response Services ==================== */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full  text-justify">
        <HoverableContentCard>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-4">
            Benefits of Cyber Incident Response Services
          </h2>
          <div className="space-y-4 text-xs sm:text-sm text-slate-500 leading-relaxed">
            <p>
              {
                "  In today's digital landscape, vigilance in IT security is crucial or organizations and businesses across Australia. Our highly experienced team is equipped to defend against both known and emerging threats, ensuring rapid response to any cyber attacks orsecurity incidents."
              }
            </p>
            <p>
              By acting as an extension of your IT and security teams, we
              provide peace of mind through swift incident resolution. Our
              services minimize disruption to your business and offer the
              support you need when it matters most.
            </p>
          </div>
        </HoverableContentCard>
      </section>

      {/* ==================== SECTION 5: Why Choose Total Solutions IT ==================== */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full  text-justify">
        <HoverableContentCard>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800 mb-4">
            Why Choose Total Solutions IT for Cyber Incident Response Services?
          </h2>

          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-6">
            Total Solutions IT, in collaboration with our industry partners,
            develops and implements a 24/7 cyber incident response plan tailored
            to your unique operational needs. Our services protect against:
          </p>

          <ul className="space-y-3 text-xs sm:text-sm text-slate-500 mb-6">
            <li className="flex items-start">
              <span className="text-brand-blue mr-2 font-bold">•</span>
              <span>
                <strong className="text-brand-blue font-bold uppercase">
                  DESTRUCTIVE ATTACKS:
                </strong>{" "}
                Safeguarding against malware, phishing, denial of service
                attacks, and insider threats.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-brand-blue mr-2 font-bold">•</span>
              <span>
                <strong className="text-brand-blue font-bold uppercase">
                  DATA BREACHES:
                </strong>{" "}
                Preventing the exposure of customer data, personally
                identifiable information, and other sensitive information.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-brand-blue mr-2 font-bold">•</span>
              <span>
                <strong className="text-brand-blue font-bold uppercase">
                  FINANCIAL ATTACKS:
                </strong>{" "}
                Defending against extortion, ransomware, payment card theft, and
                more.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-brand-blue mr-2 font-bold">•</span>
              <span>
                <strong className="text-brand-blue font-bold uppercase">
                  IP THEFT:
                </strong>{" "}
                Protecting against the sophisticated theft of intellectual
                property, including trade secrets and other sensitive data.
              </span>
            </li>
          </ul>

          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed border-t border-blue-100 pt-4">
            Our incident response services efficiently triage and contain
            threats, while also offering consultation and forensic
            investigations of compromised IT infrastructure, services, and
            networks.
          </p>
        </HoverableContentCard>
      </section>

      {/* ==================== SECTION 6: Contact Us ==================== */}
      <section className="pt-6 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full text-justify">
        <HoverableContentCard>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-4">
            Contact Us
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            {
              "To learn more about our incident response services, get in touch with us today. We're here to answer your questions and guide you through the process of getting started. Reach out online or call us at"
            }{" "}
            <a
              href="tel:+8801972721388"
              className="text-brand-blue font-semibold hover:underline"
            >
              +880 1972-721388
            </a>
            .
          </p>
        </HoverableContentCard>
      </section>
    </main>
  );
};

export default IncidentResponse;

