import Hero from "@/shared/components/ui/Hero";
import HoverableContentCard from "@/shared/components/ui/HoverableContentCard";

const SecurityAwarenessTraining = () => {
  const heroData = {
    title1: "Security Awareness",
    title2: "Training",
    description:
      "Endpoint security protects devices like computers, smartphones, and servers from cyber threats. It includes antivirus, anti-malware, firewalls, and real-time threat detection to prevent unauthorized access, malware, and data breaches. This protection is vital for securing individual devices and the broader network they connect to.",
    bgImage: "/images/it-support/cyber-security/cloud-and-network/hero.png",
    actionButtons: [],
  };

  return (
    <main className="flex min-h-screen flex-col font-sans text-slate-800 bg-slate-50">
      {/* HERO SECTION  */}
      <Hero data={heroData} />
      {/* ==================== SECTION 1: Introduction (Human Error) ==================== */}
      <section className="pt-12 sm:pt-16 pb-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full text-justify">
        <HoverableContentCard>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800 mb-4 uppercase tracking-tight">
            Human Error: The Biggest Threat in Cybersecurity
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed mb-6">
            Around 90% of cybersecurity breaches stem from human error within
            organizations, making security awareness training as crucial as
            firewalls and anti-malware programs. While many focus on technology,
            the most effective attacks often exploit human vulnerabilities
            rather than bypassing technical defenses. Addressing this gap is key
            to protecting highly secure networks.
          </p>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed">
            At Total Solutions IT, our security awareness training empowers
            employees by educating them on common IT security threats and their
            role in mitigating these risks. From recognizing malicious links to
            identifying phishing attempts, our training is designed to reduce
            cyber risks associated with human error, forming a cornerstone of a
            robust cybersecurity strategy.
          </p>
        </HoverableContentCard>
      </section>

      {/* ==================== SECTION 2: HOW IT WORKS ==================== */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full text-justify">
        <HoverableContentCard>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800 mb-4 uppercase tracking-tight">
            HOW IT WORKS
          </h2>

          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-6">
            <strong>Comprehensive Training:</strong> Go beyond basic instruction
            with our engaging simulations and activities. By building confidence
            and practical skills in spotting and avoiding cyber threats, every
            employee becomes an integral part of your security team.
          </p>

          <ul className="space-y-4 text-xs sm:text-sm text-slate-500">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2 font-bold">•</span>
              <span>
                <strong className="text-brand-blue font-bold uppercase">
                  Engaging Content:
                </strong>{" "}
                Our platform offers intuitive phishing simulation kits, short
                animated videos, and interactive quizzes, ensuring that security
                lessons are both informative and memorable.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2 font-bold">•</span>
              <span>
                <strong className="text-brand-blue font-bold uppercase">
                  Customised Material:
                </strong>{" "}
                We create personalized phishing emails that mimic
                industry-specific scams and threats, enhancing the effectiveness
                of the training.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2 font-bold">•</span>
              <span>
                <strong className="text-brand-blue font-bold uppercase">
                  User-Friendly:
                </strong>{" "}
                Our tailored, easy-to-use portals make security training
                accessible and convenient for all employees, regardless of their
                tech proficiency.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2 font-bold">•</span>
              <span>
                <strong className="text-brand-blue font-bold uppercase">
                  Always Current:
                </strong>{" "}
                Stay updated with new phishing kits and videos released monthly,
                reflecting the latest threat trends and keeping your employees
                informed about current cybersecurity risks.
              </span>
            </li>
          </ul>

          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mt-6 border-t border-blue-100 pt-4">
            Automated training campaigns and reporting simplify security and
            compliance, offering results that can be customized to fit any
            organization and budget.
          </p>
        </HoverableContentCard>
      </section>

      {/* ==================== SECTION 3: HOW IS IT USED? ==================== */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full text-justify">
        <HoverableContentCard>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800 mb-4 uppercase tracking-tight">
            HOW IS IT USED?
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed mb-6">
            Cybercriminals exploit human vulnerabilities more easily than they
            breach cybersecurity systems. Phishing emails, often disguised as
            legitimate messages or using emotional manipulation (like urgent
            password update warnings), are a primary vector for malware. By
            training employees to recognize phishing attempts, you reduce the
            risk of malicious link clicks or dangerous attachments,
            strengthening your cybersecurity defenses and significantly lowering
            the chance of a security breach.
          </p>
        </HoverableContentCard>
      </section>

      {/* ==================== SECTION 4: BENEFITS OF SECURITY AWARENESS TRAINING ==================== */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full text-justify">
        <HoverableContentCard>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-4">
            BENEFITS OF SECURITY AWARENESS TRAINING
          </h2>
          <div className="space-y-4 text-xs sm:text-sm text-slate-500 leading-relaxed">
            <p>
              Cybersecurity incidents can be costly and disrupt business
              operations. When employees understand cybersecurity principles and
              their role in mitigating risks, the likelihood of successful
              cyberattacks is greatly reduced, ensuring that critical systems
              remain operational.
            </p>
            <p>
              Such incidents can also severely damage your organization&apos;s
              reputation, especially if they involve sensitive customer or
              business information. With increasing consumer awareness and
              concern about cybersecurity, maintaining trust is essential. A
              data breach can result in lost business and diminished confidence
              in your organization.
            </p>
          </div>
        </HoverableContentCard>
      </section>

      {/* ==================== SECTION 5: WHY CHOOSE Total Solutions IT? ==================== */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full text-justify">
        <HoverableContentCard>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800 mb-4">
            WHY CHOOSE Total Solutions IT?
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            Total Solutions IT brings extensive experience in delivering
            customized cybersecurity services across Australia. From employee
            training and dark web monitoring to incident response and
            penetration testing, we help your organization stay vigilant and
            secure against breaches and attacks. Our training reduces the fear
            and uncertainty surrounding common cybersecurity threats, equipping
            your workforce with confidence and expertise.
          </p>
        </HoverableContentCard>
      </section>

      {/* ==================== SECTION 6: SCHEDULE A DEMO (Contact) ==================== */}
      <section className="pt-6 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full text-justify">
        <HoverableContentCard>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-4">
            SCHEDULE A DEMO
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed border-t border-blue-100 pt-4">
            Prepare your employees to identify and manage cybersecurity risks
            effectively with our training programs. To learn more or to schedule
            a demo, contact Total Solutions IT online or call us at{" "}
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

export default SecurityAwarenessTraining;
