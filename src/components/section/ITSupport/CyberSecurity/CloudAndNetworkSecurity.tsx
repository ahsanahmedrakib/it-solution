import Hero from "@/components/ui/Hero";
import HoverableContentCard from "@/components/ui/HoverableContentCard";
import Image from "next/image";

const heroData = {
  title1: "Cloud and Network Security",
  title2: "Protecting Your Digital Assets",
  description:
    "In an era where digital transformation is at the core of business operations, ensuring the security of cloud environments and networks is more critical than ever. With cyber threats evolving rapidly, organizations must adopt robust security measures to protect sensitive data, applications, and infrastructure. This blog post explores key aspects of cloud and network security, best practices, and emerging trends to help businesses stay ahead of potential threats.",
  bgImage: "/images/it-support/cyber-security/cloud-and-network/hero.png",
  actionButtons: [],
};

const CloudAndNetworkSecurity = () => {
  return (
    <main className="flex min-h-screen flex-col font-sans text-slate-800 bg-slate-50">
      {/* HERO SECTION  */}
      <Hero data={heroData} />

      {/* ==================== SECTION 1: Cloud Security Services ==================== */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Column: Content Card */}
          <div className="order-2 lg:order-1">
            <HoverableContentCard>
              {/* Header Badge & Title */}
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 15a4 4 0 004 4h9a5 5 0 001-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Cloud Security Services
                  </h3>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
                    Our Cloud Security Services
                  </h2>
                </div>
              </div>

              {/* Intro Text */}
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                We provide{" "}
                <span className="text-blue-600 font-medium">
                  comprehensive cloud security solutions
                </span>{" "}
                tailored to protect your business assets, ensuring{" "}
                <span className="text-blue-600 font-medium">
                  cloud environments
                </span>{" "}
                remain secure and resilient against modern threats.
              </p>

              {/* Key Features List */}
              <h4 className="font-bold text-slate-800 text-sm mb-3">
                Key Cloud Security Features:
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">•</span>
                  <span>
                    <strong className="text-blue-600 font-semibold">
                      Data Encryption:
                    </strong>{" "}
                    Secure sensitive information using advanced encryption
                    techniques.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">•</span>
                  <span>
                    <strong className="text-blue-600 font-semibold">
                      Identity and Access Management (IAM):
                    </strong>{" "}
                    Implement strong authentication mechanisms to restrict
                    unauthorized access.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">•</span>
                  <span>
                    <strong className="text-blue-600 font-semibold">
                      Threat Detection & Response:
                    </strong>{" "}
                    Utilize AI-powered security tools to identify and mitigate
                    threats in real time.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">•</span>
                  <span>
                    <strong className="text-blue-600 font-semibold">
                      Regulatory Compliance:
                    </strong>{" "}
                    Ensure compliance with industry standards such as{" "}
                    <strong className="text-blue-600 font-semibold">
                      GDPR, HIPAA,
                    </strong>{" "}
                    and{" "}
                    <strong className="text-blue-600 font-semibold">
                      ISO 27001
                    </strong>
                    .
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">•</span>
                  <span>
                    <strong className="text-blue-600 font-semibold">
                      Multi-Factor Authentication (MFA):
                    </strong>{" "}
                    Add an extra layer of security to protect critical systems
                    and data.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">•</span>
                  <span>
                    <strong className="text-blue-600 font-semibold">
                      Microsoft 365 Security:
                    </strong>{" "}
                    Implement advanced threat protection, spam filtering, and
                    data loss prevention (DLP) across Microsoft 365 applications
                    like Exchange and Teams.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">•</span>
                  <span>
                    <strong className="text-blue-600 font-semibold">
                      Microsoft Azure Security:
                    </strong>{" "}
                    Utilize Advanced Threat Protection, identity management,
                    compliance control, and secure cloud workloads, virtual
                    machines, and cloud storage in Microsoft Azure.
                  </span>
                </li>
              </ul>
            </HoverableContentCard>
          </div>

          {/* Right Column: Illustration Image */}
          <div className="order-1 lg:order-2 flex justify-center items-center">
            <div className="flex justify-center">
              <Image
                src="/images/it-support/cyber-security/cloud-and-network/cloud-security.webp"
                alt="Cloud Security Services Shield Graphic"
                height={400}
                width={600}
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 2: Key Elements of Cloud Security ==================== */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <HoverableContentCard>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6">
            Key Elements of Cloud Security:
          </h2>
          <ol className="space-y-4 text-xs sm:text-sm text-slate-600 list-decimal list-inside">
            <li className="pl-1">
              <strong className="text-blue-600 font-semibold">
                Data Encryption:
              </strong>{" "}
              Encrypting data at rest and in transit to preserve confidentiality
              and prevent unauthorized access.
            </li>
            <li className="pl-1">
              <strong className="text-blue-600 font-semibold">
                Identity and Access Management (IAM):
              </strong>{" "}
              Implementing strict identity verification to limit resource access
              to authorized personnel.
            </li>
            <li className="pl-1">
              <strong className="text-blue-600 font-semibold">
                Compliance and Governance:
              </strong>{" "}
              Adhering to regulatory frameworks such as GDPR and ISO 27001 to
              maintain security standards and legal integrity.
            </li>
            <li className="pl-1">
              <strong className="text-blue-600 font-semibold">
                Threat Detection and Response:
              </strong>{" "}
              Deploying proactive monitoring tools to identify and mitigate
              security incidents in real-time.
            </li>
            <li className="pl-1">
              <strong className="text-blue-600 font-semibold">
                Multi-Factor Authentication (MFA):
              </strong>{" "}
              Enforcing MFA across all cloud accounts to prevent unauthorized
              access from compromised credentials.
            </li>
          </ol>
        </HoverableContentCard>
      </section>

      {/* ==================== SECTION 3: Understanding Network Security ==================== */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Column: Image */}
          <div className="flex justify-center items-center">
            <div className="flex justify-center">
              <Image
                src="/images/it-support/cyber-security/cloud-and-network/network-security.webp"
                alt="Understanding Network Security Shield Graphic"
                height={400}
                width={600}
                className="object-cover rounded-xl"
              />
            </div>
          </div>

          {/* Right Column: Content Card */}
          <div>
            <HoverableContentCard>
              {/* Header Badge & Title */}
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
                  Understanding Network Security
                </h2>
              </div>

              {/* Intro Text */}
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                A{" "}
                <span className="text-blue-600 font-medium">
                  comprehensive network security framework
                </span>{" "}
                prevents unauthorized access, stops cyber threats, and{" "}
                <span className="text-blue-600 font-medium">
                  protects internal network infrastructure from downtime, data
                  breach, and severe financial and operational damage.
                </span>
              </p>

              {/* Key Features List */}
              <h4 className="font-bold text-slate-800 text-sm mb-3">
                Key Network Security Features:
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">•</span>
                  <span>
                    <strong className="text-blue-600 font-semibold">
                      Next-Gen Firewalls & Penetration Testing (NGFW):
                    </strong>{" "}
                    Inspect traffic, block intrusions, and filter malicious web
                    content.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">•</span>
                  <span>
                    <strong className="text-blue-600 font-semibold">
                      Zero Trust Security Model:
                    </strong>{" "}
                    Enforce continuous authentication and strictly control
                    access.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">•</span>
                  <span>
                    <strong className="text-blue-600 font-semibold">
                      SD-WAN Secure Remote Access:
                    </strong>{" "}
                    Ensure safe connectivity for remote workers and branch
                    offices.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">•</span>
                  <span>
                    <strong className="text-blue-600 font-semibold">
                      Endpoint Protection:
                    </strong>{" "}
                    Protect workstations and mobile devices from cyber attacks.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">•</span>
                  <span>
                    <strong className="text-blue-600 font-semibold">
                      DDoS Protection:
                    </strong>{" "}
                    Prevent overwhelming traffic attacks to keep critical
                    services online.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">•</span>
                  <span>
                    <strong className="text-blue-600 font-semibold">
                      Virtual Private Networks (VPNs):
                    </strong>{" "}
                    Encrypt network connections to provide{" "}
                    <strong className="text-blue-600 font-semibold">
                      secure access to corporate networks, ensuring privacy and
                      protection
                    </strong>{" "}
                    for remote workers and connecting multiple locations.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">•</span>
                  <span>
                    <strong className="text-blue-600 font-semibold">
                      Wi-Fi Security:
                    </strong>{" "}
                    Protect wireless networks from unauthorized access,
                    eavesdropping, and cyber threats by implementing{" "}
                    <strong className="text-blue-600 font-semibold">
                      strong enterprise WPA3/WPA2 encryption
                    </strong>
                    , proper guest network isolation, and regular security
                    audits.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">•</span>
                  <span>
                    <strong className="text-blue-600 font-semibold">
                      Dedicated Internet Access:
                    </strong>{" "}
                    Provide high-speed, reliable internet connections with SLA
                    guarantees for operations, ensuring seamless communication
                    and uninterrupted access to cloud services.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">•</span>
                  <span>
                    <strong className="text-blue-600 font-semibold">
                      Business Broadband & Fibre Connectivity (FTTP/FTTC):
                    </strong>{" "}
                    Fast and reliable connectivity options, including{" "}
                    <strong className="text-blue-600 font-semibold">
                      Gigabit networks
                    </strong>{" "}
                    to connect office locations, combining high-speed primary
                    connections with redundant backup links for maximum
                    resilience.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">•</span>
                  <span>
                    <strong className="text-blue-600 font-semibold">
                      Mobile Device Security:
                    </strong>{" "}
                    Safeguard laptops and corporate mobile devices from cyber
                    threats with{" "}
                    <strong className="text-blue-600 font-semibold">
                      Mobile Device Management (MDM)
                    </strong>{" "}
                    solutions, secure app management, and device encryption.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">•</span>
                  <span>
                    <strong className="text-blue-600 font-semibold">
                      Remote Offsite Backup Capability:
                    </strong>{" "}
                    Implement automatic daily backups to secure{" "}
                    <strong className="text-blue-600 font-semibold">
                      remote offsite locations
                    </strong>{" "}
                    for critical server systems, ensuring rapid data recovery
                    and business-critical information.
                  </span>
                </li>
              </ul>
            </HoverableContentCard>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 4: Network Consulting, Design, and Installation ==================== */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <HoverableContentCard>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
            Network Consulting, Design, and Installation
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
            Our{" "}
            <span className="text-blue-600 font-medium">
              network consulting, design, and installation
            </span>{" "}
            services build{" "}
            <span className="text-blue-600 font-medium">
              reliable, scalable, and secure network infrastructure
            </span>{" "}
            aligned with your business goals. From initial planning to full
            execution, we ensure seamless connectivity.
          </p>
          <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2 font-bold">•</span>
              <span>
                <strong className="text-blue-600 font-semibold">
                  Network Architecture Planning:
                </strong>{" "}
                Designing a customized network infrastructure that aligns with
                your business objectives.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2 font-bold">•</span>
              <span>
                <strong className="text-blue-600 font-semibold">
                  Security-First Approach:
                </strong>{" "}
                Implementing advanced security measures to protect against cyber
                threats.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2 font-bold">•</span>
              <span>
                <strong className="text-blue-600 font-semibold">
                  Performance Optimization:
                </strong>{" "}
                Enhancing network speed, reliability, and capability for optimal
                performance.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2 font-bold">•</span>
              <span>
                <strong className="text-blue-600 font-semibold">
                  Cloud Integration:
                </strong>{" "}
                Seamlessly integrating on-premise networks with cloud services
                for{" "}
                <strong className="text-blue-600 font-semibold">
                  hybrid and multi-cloud environments
                </strong>
                .
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2 font-bold">•</span>
              <span>
                <strong className="text-blue-600 font-semibold">
                  Compliance & Risk Management:
                </strong>{" "}
                Ensuring the network complies with regulatory requirements and
                industry standards.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2 font-bold">•</span>
              <span>
                <strong className="text-blue-600 font-semibold">
                  Network Installation Services:
                </strong>{" "}
                Full setup and configuration of network hardware and software
                for seamless integration and deployment.
              </span>
            </li>
          </ul>
        </HoverableContentCard>
      </section>

      {/* ==================== SECTION 5: Best Practices for Strengthening Security ==================== */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <HoverableContentCard>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6">
            Best Practices for Strengthening Cloud and Network Security
          </h2>
          <ol className="space-y-4 text-xs sm:text-sm text-slate-600 list-decimal list-inside">
            <li className="pl-1">
              <strong className="text-blue-600 font-semibold">
                Regular Security Audits:
              </strong>{" "}
              Conduct periodic assessments to identify vulnerabilities and
              ensure compliance with security standards.
            </li>
            <li className="pl-1">
              <strong className="text-blue-600 font-semibold">
                Employee Training:
              </strong>{" "}
              Educate employees on security best practices, such as recognizing
              phishing attacks and using strong passwords.
            </li>
            <li className="pl-1">
              <strong className="text-blue-600 font-semibold">
                Automated Security Patching:
              </strong>{" "}
              Keep software and operating systems updated with the latest
              security patches.
            </li>
            <li className="pl-1">
              <strong className="text-blue-600 font-semibold">
                Least Privilege Access Control:
              </strong>{" "}
              Limit user access to only what is necessary for their job roles to
              minimize security risks.
            </li>
            <li className="pl-1">
              <strong className="text-blue-600 font-semibold">
                Incident Response Plan:
              </strong>{" "}
              Develop and test a response strategy to quickly mitigate the
              impact of any potential cyber incident.
            </li>
          </ol>
        </HoverableContentCard>
      </section>

      {/* ==================== SECTION 6: Emerging Trends ==================== */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <HoverableContentCard>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6">
            Emerging Trends in Cloud and Network Security
          </h2>
          <ol className="space-y-4 text-xs sm:text-sm text-slate-600 list-decimal list-inside">
            <li className="pl-1">
              <strong className="text-blue-600 font-semibold">
                AI and Machine Learning in Security:
              </strong>{" "}
              AI-driven security solutions automate threat detection and
              response to identify complex attacks in real time.
            </li>
            <li className="pl-1">
              <strong className="text-blue-600 font-semibold">
                SASE (Secure Access Service Edge):
              </strong>{" "}
              A cloud-based framework that integrates network security functions
              with WAN capabilities for safe remote access.
            </li>
            <li className="pl-1">
              <strong className="text-blue-600 font-semibold">
                Zero Trust Architecture:
              </strong>{" "}
              A security model that assumes every access request is untrusted,
              ensuring strict identity verification for all users.
            </li>
            <li className="pl-1">
              <strong className="text-blue-600 font-semibold">
                IoT Security:
              </strong>{" "}
              Protecting connected devices and sensors from exploits to prevent
              entry points into enterprise networks.
            </li>
            <li className="pl-1">
              <strong className="text-blue-600 font-semibold">
                Quantum-Safe Cryptography:
              </strong>{" "}
              Preparing for future threats posed by quantum computing by
              developing advanced encryption algorithms to protect sensitive
              data.
            </li>
          </ol>
        </HoverableContentCard>
      </section>

      {/* ==================== SECTION 7: Why Choose Us ==================== */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <HoverableContentCard>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
            Why Choose Us For Cloud and Network Security?
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
            We are dedicated to delivering{" "}
            <span className="text-blue-600 font-medium">
              tailored security solutions
            </span>{" "}
            that align with your{" "}
            <span className="text-blue-600 font-medium">business goals</span>.
            Our{" "}
            <span className="text-blue-600 font-medium">team of experts</span>{" "}
            is committed to providing:
          </p>
          <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2 font-bold">•</span>
              <span>
                <strong className="text-blue-600 font-semibold">
                  Customized security strategies
                </strong>{" "}
                tailored to your unique needs.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2 font-bold">•</span>
              <span>
                <strong className="text-blue-600 font-semibold">
                  24/7 monitoring
                </strong>{" "}
                and proactive threat detection.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2 font-bold">•</span>
              <span>
                <strong className="text-blue-600 font-semibold">
                  Compliance with industry standards
                </strong>{" "}
                and regulations.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2 font-bold">•</span>
              <span>
                <strong className="text-blue-600 font-semibold">
                  Scalable solutions
                </strong>{" "}
                that grow with your business.
              </span>
            </li>
          </ul>
        </HoverableContentCard>
      </section>

      {/* ==================== SECTION 8: Call To Action / Get Started ==================== */}
      <section className="py-10 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <HoverableContentCard>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
            Get Started Today with the Best Cloud and Network Security Solutions
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-8">
            Don&apos;t leave your{" "}
            <span className="text-blue-600 font-medium">
              digital assets vulnerable to cyber threats
            </span>
            .{" "}
            <strong className="text-blue-600 font-semibold">
              Contact us today
            </strong>{" "}
            to learn how our{" "}
            <span className="text-blue-600 font-medium">
              cloud and network security solutions
            </span>{" "}
            can help safeguard your organization.
          </p>

          <p className="text-blue-600 font-semibold text-xs sm:text-sm tracking-wide">
            Secure your business. Protect your data. Stay ahead of cyber
            threats.
          </p>
        </HoverableContentCard>
      </section>
    </main>
  );
};

export default CloudAndNetworkSecurity;
