import { Cloud, Globe, PhoneCall, Wrench } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export interface SlideData {
  badge: string;
  title: string;
  subtitle: string;
  buttonText: string;
  image: string;
  indicatorTitle: string;
  indicatorSubtitle: string;
}

export const slides: SlideData[] = [
  {
    badge: "Quick Support >",
    title: "Microsoft 365 &\nCloud Services",
    subtitle:
      "Secure email, collaboration and cloud services — set up the right way.",
    buttonText: "FIND OUT MORE >",
    image: "/images/home/hero/cloud-hero.png",
    indicatorTitle: "Cloud Services & Microsoft 365",
    indicatorSubtitle: "Modern cloud tools",
  },
  {
    badge: "IT Services >",
    title: "IT Services for Business\nand Home",
    subtitle:
      "Professional, reliable tech support and system engineering when you need it.",
    buttonText: "FIND OUT MORE >",
    image: "/images/home/hero/administrator-hero.png",
    indicatorTitle: "IT Services for Business and Home",
    indicatorSubtitle: "Fully Managed & AdHoc",
  },
  {
    badge: "Cyber Security >",
    title: "Cyber Security &\nData Protection",
    subtitle:
      "Proactive real-time monitoring and defenses to keep your data safe.",
    buttonText: "FIND OUT MORE >",
    image: "/images/home/hero/cybersecurity-hero.png",
    indicatorTitle: "Cyber Security & Data Protection",
    indicatorSubtitle: "Proactive Security",
  },
  {
    badge: "Telecoms >",
    title: "Telecommunications &\nPhone Systems",
    subtitle:
      "Modern voice solutions configured seamlessly for modern remote workflows.",
    buttonText: "FIND OUT MORE >",
    image: "/images/home/hero/telecom-hero.png",
    indicatorTitle: "Telecommunications & Phone Systems",
    indicatorSubtitle: "Modern voice solutions",
  },
  {
    badge: "Internet >",
    title: "NBN & Business\nInternet",
    subtitle:
      "High-speed, redundant pipelines keeping your office fast and reliable.",
    buttonText: "FIND OUT MORE >",
    image: "/images/home/hero/internet-hero.png",
    indicatorTitle: "NBN & Business Internet",
    indicatorSubtitle: "Internet, Home & Business",
  },
];

// From WhatWeDo.tsx
export interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const servicesData: ServiceItem[] = [
  {
    icon: <Wrench className="w-6 h-6 text-brand-light-bg" />,
    title: "IT Support",
    description:
      "Plan, design, implement and manage IT infrastructure for small business, medium-sized business and residential.",
  },
  {
    icon: <PhoneCall className="w-6 h-6 text-brand-light-bg" />,
    title: "Phone Systems",
    description:
      "Providing on-demand service for supply, installation and maintenance of telephone systems.",
  },
  {
    icon: <Globe className="w-6 h-6 text-brand-light-bg" />,
    title: "Internet",
    description:
      "See what we provide in terms of internet services, including NBN, Cel-Fi, Starlink and LTE solutions.",
  },
  {
    icon: <Cloud className="w-6 h-6 text-brand-light-bg" />,
    title: "Cloud Services",
    description:
      "Managed cloud & data solutions, securely managed across hybrid, private or public cloud platforms.",
  },
];

// From Testimonials.tsx
export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: 1,
    quote:
      "Their IT solutions greatly improved our workflow and enhanced productivity across teams. Reliable technology services we can always trust. The team delivered innovative strategies.",
    name: "Bisirat Futsum",
    role: "Digital Manager",
    avatar: "/images/home/avatar-01.jpg",
  },
  {
    id: 2,
    quote:
      "Working with this team transformed our digital operations. Their proactive support and seamless implementation exceeded all our initial expectations.",
    name: "Marcus Vance",
    role: "CTO, TechCorp",
    avatar: "/images/home/avatar-02.jpg",
  },
  {
    id: 3,
    quote:
      "Exceptional quality of work and incredible communication. They guided us every step of the way to complete our cloud migration smoothly.",
    name: "Sarah Jenkins",
    role: "Operations Lead",
    avatar: "/images/home/avatar-03.jpg",
  },
];

// From OurTeam.tsx
export const socialIconMap: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  Facebook: FaFacebookF,
  X: FaXTwitter,
  Instagram: FaInstagram,
  LinkedIn: FaLinkedinIn,
};

export const teamMembers = [
  {
    id: 1,
    name: "Tamzid Hasan",
    role: "IT Consultant",
    bgLabel: "Consultant",
    image: "/images/home/team/1.png",
    social: [
      { label: "Facebook", href: "#" },
      { label: "X", href: "#" },
      { label: "Instagram", href: "#" },
      { label: "LinkedIn", href: "#" },
    ],
  },
  {
    id: 2,
    name: "Tanzim Hasan Anik",
    role: "Director",
    bgLabel: "Director",
    image: "/images/home/team/2.jpg",
    social: [
      { label: "Facebook", href: "#" },
      { label: "LinkedIn", href: "#" },
    ],
  },
  {
    id: 3,
    name: "Habibullah Mezbah",
    role: "Web Developer",
    bgLabel: "Developer",
    image: "/images/home/team/3.png",
    social: [
      { label: "Facebook", href: "#" },
      { label: "X", href: "#" },
      { label: "Instagram", href: "#" },
      { label: "LinkedIn", href: "#" },
    ],
  },
  {
    id: 4,
    name: "Ahsan Ahmed Rakib",
    role: "Software Engineer",
    bgLabel: "Engineer",
    image: "/images/home/team/4.jpg",
    social: [
      { label: "Facebook", href: "#" },
      { label: "X", href: "#" },
      { label: "Instagram", href: "#" },
      { label: "LinkedIn", href: "#" },
    ],
  },
];

// From OurApproach.tsx
export interface ApproachCardItem {
  stepNumber: string;
  title: string;
  subtitle: string;
  description?: string;
  listHeading: string;
  points: string[];
}

export const approachData: ApproachCardItem[] = [
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

// From HowWeDo.tsx
export interface PartnerLogo {
  name: string;
  logo: string;
}

export const homePartnersData: PartnerLogo[] = [
  { name: "MikroTik", logo: "/images/home/how-we-do/mikrotik.png" },
  { name: "N-Able", logo: "/images/home/how-we-do/nable.png" },
  { name: "Grandstream", logo: "/images/home/how-we-do/grandstream.png" },
  { name: "WordPress", logo: "/images/home/how-we-do/wordpress.png" },
  { name: "Microsoft 365", logo: "/images/home/how-we-do/microsoft365.png" },
  { name: "Ingram", logo: "/images/home/how-we-do/ingram.png" },
  { name: "Cellfi", logo: "/images/home/how-we-do/cellfi.png" },
  { name: "Ipecs", logo: "/images/home/how-we-do/ipecs.png" },
  { name: "HPE", logo: "/images/home/how-we-do/hpe.png" },
  { name: "Avaya", logo: "/images/home/how-we-do/avaya.png" },
  { name: "Cove", logo: "/images/home/how-we-do/cove.png" },
  { name: "Veeam", logo: "/images/home/how-we-do/veeam.png" },
  { name: "Datto", logo: "/images/home/how-we-do/datto.png" },
  { name: "Recaptcha", logo: "/images/home/how-we-do/recaptcha.png" },
  { name: "Woo", logo: "/images/home/how-we-do/woo.png" },
];

// From BlogSection.tsx
export interface BlogCardProps {
  image: string;
  category: string;
  title: string;
  day: string;
  month: string;
  author: string;
  commentsCount: number;
}

export const blogData: BlogCardProps[] = [
  {
    image: "/images/home/blog/blog-01.jpg",
    category: "CLOUD",
    title: "Cloud solutions for scalable IT infrastructure.",
    day: "09",
    month: "APR",
    author: "Admin",
    commentsCount: 0,
  },
  {
    image: "/images/home/blog/blog-02.jpg",
    category: "SOFTWARE",
    title: "Innovative software solutions for businesses.",
    day: "09",
    month: "APR",
    author: "Admin",
    commentsCount: 0,
  },
  {
    image: "/images/home/blog/blog-03.jpg",
    category: "CYBERSAFE",
    title: "Practical tips for secure it systems checklist.",
    day: "09",
    month: "APR",
    author: "Admin",
    commentsCount: 0,
  },
];

// From AboutSection.tsx
export const navButtons = [
  { label: "OUR SERVICES", href: "#services" },
  { label: "QUICK SUPPORT", href: "#support" },
  { label: "NBN STATUS", href: "#nbn-status" },
];

