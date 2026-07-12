import {
  Captions,
  ChevronRight,
  ChevronsLeftRightEllipsis,
  Feather,
  RefreshCcw,
  ShoppingBag,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";

export default function WebPage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800 overflow-x-hidden">
      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-linear-to-t from-[#c2dde6] to-white pt-24 pb-32 lg:pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
          {/* Hero Content */}
          <div className="space-y-8 max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1a5b8f] leading-tight">
              All your website
              <br className="hidden md:block" /> development needs{" "}
            </h1>

            {/* Action Buttons Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
              {[
                { label: "Web Development", href: "" },
                { label: "SEO", href: "" },
                { label: "Domain & Hosting", href: "" },
                { label: "Ecommerce", href: "" },
                { label: "Portfolio", href: "" },
              ].map((btn) => (
                <a
                  href={btn.href}
                  key={btn.label}
                  className="group flex cursor-pointer items-center justify-between px-6 py-4 bg-[#1a365d] hover:bg-[#2a4a7f] text-white text-sm font-semibold rounded-xl shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg"
                >
                  {btn.label}
                  <ChevronRight className="w-4 h-4 text-sky-300 group-hover:translate-x-1 transition-transform" />
                </a>
              ))}
            </div>

            {/* Support Link */}
            <div className="pt-6 border-t border-slate-200/60 flex flex-col items-start gap-3">
              <p className="text-sky-700 font-semibold text-sm">
                Cloud Services Questions?
              </p>
              <button className="px-6 py-2.5 bg-white border border-sky-200 text-sky-700 text-xs font-bold tracking-wider uppercase rounded-full shadow-sm hover:bg-[#2a4a7f] hover:text-white cursor-pointer transition-colors">
                Contact Us
              </button>
            </div>
          </div>

          {/* Hero Illustration */}
          <div className="flex justify-center">
            <Image
              src="/images/web/hero.png"
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

      {/* ================= GRID SECTION ================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl text-center font-bold text-blue-900 mb-12">
          Services that make your Website Perform
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-8">
          {[
            {
              title: "Web Design",
              desc: "Our approach is user-friendly, visually stunning, and tailored to elevate your online presence. By ensuring each element works together, we engage your audience and effectively communicate your brand’s message.",
              icon: ChevronsLeftRightEllipsis,
            },
            {
              title: "Ecommerce",
              desc: "If you need a shopping cart, our feature-rich system simplifies the process while boosting your sales, helping your products fly off the shelves. With intuitive design, we ensure an experience that encourages purchases.",
              icon: ShoppingBag,
            },
            {
              title: "Accessible",
              desc: "Ensure accessibility to all users, including people living with disabilities. By prioritizing inclusivity, you not only enhance the user experience but also broaden your audience reach.",
              icon: Captions,
            },
            {
              title: "CMS",
              desc: "You can update quickly and easily, 24/7, using WordPress CMS. In addition, this user-friendly platform empowers you to make changes at your convenience, ensuring your content remains fresh and relevant.",
              icon: RefreshCcw,
            },
            {
              title: "SEO",
              desc: "We build with a structure designed to rank well in Google, Bing, and Yahoo. By focusing on best practices for search engine optimization, we enhance your visibility and ensure that your website can effectively attract more visitors.",
              icon: TrendingUp,
            },
            {
              title: "Logo Design",
              desc: "Get a professionally designed logo starting from just $395. By investing in a quality logo, you not only enhance your brand identity but also create a memorable, lasting impression on your audience.",
              icon: Feather,
            },
          ].map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={i}
                className="border-2 border-blue-100 hover:border-blue-300 rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white transition-all"
              >
                <div className="flex justify-center pb-6 text-brand-active">
                  <Icon size={80} />
                </div>
                <h3 className="text-xl font-bold text-brand-blue text-center mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4 text-justify">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= SPLIT SECTION 1 ================= */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 order-2 lg:order-1">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight">
              Your website represents your company.{" "}
            </h2>
            <div className="space-y-4 text-slate-600 text-[17px] leading-relaxed text-justify">
              <p>
                In the digital age of today, a well-crafted website serves not
                only as a virtual storefront but also as a powerful tool for
                small businesses to establish a strong online presence. In fact,
                it reflects your business by showcasing your products, services,
                and brand identity to a global audience 24/7.
              </p>
              <p>
                Moreover, it provides a centralized platform for customers to
                learn about your offerings, engage with your content, and make
                convenient purchases. Additionally, a professional website
                instills credibility, thereby building trust among potential
                customers. As a result, it sets you apart from competitors, both
                now and in the future. Consequently, investing in a quality
                website is essential for long-term success.
              </p>
            </div>
            <a
              href="#"
              className="inline-flex items-center text-[#1a5b8f] font-bold text-sm tracking-wide uppercase mt-4 hover:text-[#2a7bbd] transition-colors group"
            >
              <ChevronRight className="w-5 h-5 mr-1 group-hover:translate-x-1 transition-transform" />
              More
            </a>
          </div>

          {/* Right Illustration */}
          <div className="flex justify-center order-1 lg:order-2">
            <Image
              src="/images/web/web.png"
              alt="Working seamlessly online"
              height={400}
              width={400}
              className="object-cover"
            />{" "}
          </div>
        </div>
      </section>

      {/* ================= SPLIT SECTION 2 ================= */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Illustration */}
          <div className="flex justify-center">
            <Image
              src="/images/web/seo.png"
              alt="Working seamlessly online"
              height={400}
              width={400}
              className="object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight">
              Keeping you online, without the hassle.
            </h2>
            <div className="space-y-4 text-slate-600 text-[17px] leading-relaxed text-justify">
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
                internet solutions, you are not just accessing cutting-edge
                technology, but also supporting a local business that invests in
                the well-being and connectivity of your local community.
              </p>
            </div>
            <a
              href="#"
              className="inline-flex items-center text-[#1a5b8f] font-bold text-sm tracking-wide uppercase mt-4 hover:text-[#2a7bbd] transition-colors group"
            >
              <ChevronRight className="w-5 h-5 mr-1 group-hover:translate-x-1 transition-transform" />
              More
            </a>
          </div>
        </div>
      </section>

      {/* ================= GRID SECTION ================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {[
            {
              title: "Website Development",
              services: [
                "Regular backups and disaster recovery",
                "SSL certificates and encryption",
                "User-friendly design and navigation",
                "Security, optimization and performance",
              ],
            },
            {
              title: "Hosting + Domains",
              services: [
                "Improved website speed and performance",
                "Bangladeshi hosting",
                "User-friendly design and navigation",
                "Data sovereignty and compliance",
              ],
            },
            {
              title: "SEO + Analytics",
              services: [
                "Keyword performance and organic traffic",
                "Backlink quality and quantity",
                "Search engine optimisation",
                "Accurate data tracking",
              ],
            },
            {
              title: "eCommerce + Portfolio",
              services: [
                "Professional and engaging website design",
                "Mobile responsiveness",
                "Secure and streamlined ecommerce sites",
                "Showcase diversity and expertise",
              ],
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="border-2 border-blue-100 hover:border-blue-300 rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white transition-all"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {feature.title}
              </h3>
              {feature.services.map((service, j) => (
                <div key={j} className="flex items-start mb-3">
                  <ChevronRight className="w-5 h-5 mr-2 mt-0.5 text-blue-500 shrink-0" />
                  <span className="text-slate-600 text-sm">{service}</span>
                </div>
              ))}
              <a
                href="#"
                className="text-blue-600 font-semibold text-sm hover:underline pt-2"
              >
                Read More &rarr;
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* LOGO SECTION  */}

        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 items-center justify-center gap-8"> */}
        <div className="flex flex-wrap justify-center gap-12">
          {[
            { logo: "/images/web/wp.png" },
            { logo: "/images/web/cpanel.png" },
            { logo: "/images/web/yoast.png" },
            { logo: "/images/web/synergy.png" },
            { logo: "/images/web/cloudfare.png" },
          ].map((a) => (
            <Image
              key={a.logo}
              src={a.logo}
              alt={a.logo}
              width={180}
              height={50}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
