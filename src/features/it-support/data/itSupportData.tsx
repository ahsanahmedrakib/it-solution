import {
  Activity,
  AlertTriangle,
  Briefcase,
  Bug,
  Cloud,
  Cpu,
  Eye,
  GraduationCap,
  HardDrive,
  HeadphonesIcon,
  Laptop,
  Link,
  Lock,
  MessageSquare,
  Monitor,
  MonitorCloud,
  Package,
  Server,
  Shield,
  Smartphone,
  Target,
  Users,
  Wifi,
} from "lucide-react";

export interface PartnerLogo {
  name: string;
  logo: string;
}

export const partnersData: PartnerLogo[] = [
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

export const heroData = {
  title1: "IT Support Services",
  title2: "for Professionals",
  description1:
    "We provide enterprise-grade IT support and secure digital workspaces for small to medium businesses. Focus on your growth while we handle the technology.",
  bgImage: "/images/it-support/hero.png",
  actionButtons: [
    { label: "Our Partners", href: "#partners" },
    { label: "Our Capabilities", href: "#capabilities" },
    { label: "Cyber Security", href: "#security" },
    { label: "Servers & Networking", href: "#networking" },
    { label: "IT Services", href: "#it" },
    { label: "Device Repair", href: "#repair" },
  ],
};

export const capabilitiesList = [
  { icon: HeadphonesIcon, label: "24/7 IT Support" },
  { icon: Briefcase, label: "Strategic Planning" },
  { icon: Cloud, label: "Cloud Integrations" },
];

export const capabilityCards = [
  {
    title: "Hardware Experience",
    icon: <HardDrive className="w-8 h-8 text-blue-600 mb-4" />,
    text: "Proactive monitoring and rapid response times for all your daily IT concerns.",
    services: [
      "Servers/desktops/laptops",
      "Modems/routers/access points",
      "Printers and scanners",
      "Phone systems and handsets",
      "Replacement parts",
      "Site deployment/migration",
    ],
  },
  {
    title: "Network Experience",
    icon: <Wifi className="w-8 h-8 text-blue-600 mb-4" />,
    text: "Enterprise-grade protection against malware, phishing, and external threats.",
    services: [
      "  Wireless troubleshooting",
      "Network segregation",
      "Hotel/Motel infrastructure",
      "VLAN tagging",
      "Firewall/security setup",
      "Routing/switching",
    ],
  },
  {
    title: "Infrastructure Experience",
    icon: <MonitorCloud className="w-8 h-8 text-blue-600 mb-4" />,
    text: "Seamless migrations to scalable cloud infrastructure for modern teams.",
    services: [
      "File sharing and security",
      "Domain controllers and AD",
      "Windows operating systems",
      "Virtual machines",
      "Microsoft Office applications",
    ],
  },
];

export const cyberSecurityFeatures = [
  { icon: <Lock />, label: "ESSENTIAL 8 SECURITY" },
  { icon: <Cloud />, label: "CLOUD RISK ASSESSMENT" },
  { icon: <Bug />, label: "VULNERABILITY ASSESSMENT" },
  { icon: <Shield />, label: "WEB APPLICATION FIREWALL" },
  { icon: <GraduationCap />, label: "SECURITY AWARENESS TRAINING" },
  { icon: <Eye />, label: "DARK WEB MONITORING" },
  { icon: <AlertTriangle />, label: "INCIDENT RESPONSE" },
  { icon: <Target />, label: "PENETRATION TESTING" },
];

export const networkingFeatures = [
  { icon: <Briefcase />, label: "PROJECT SUPPORT" },
  { icon: <Monitor />, label: "DEVICE SUPPORT" },
  { icon: <Cpu />, label: "SERVER SUPPORT" },
  { icon: <HardDrive />, label: "DESKTOP SUPPORT" },
  { icon: <Activity />, label: "24/4 MONITORING & SUPPORT" },
];

export const managedITFeatures = [
  { icon: <HeadphonesIcon />, label: "IT SUPPORT" },
  { icon: <Wifi />, label: "NETWORK SERVICES" },
  { icon: <Package />, label: "IT PROCUREMENT" },
  { icon: <Link />, label: "IT CONNECTIVITY" },
  { icon: <MessageSquare />, label: "IT COMMUNICATION" },
  { icon: <Users />, label: "IT OUTSOURCING" },
];

export const deviceRepairFeatures = [
  { icon: <Smartphone />, label: "MOBILE PHONE" },
  { icon: <Laptop />, label: "LAPTOP'S" },
  { icon: <Monitor />, label: "DESKTOP'S" },
  { icon: <Smartphone />, label: "TABLETS" },
  { icon: <Server />, label: "SERVER'S" },
];
