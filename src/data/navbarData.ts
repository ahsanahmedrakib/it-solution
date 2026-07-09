import {
  Activity,
  AtSign,
  BookOpen,
  Box,
  Briefcase,
  Bug,
  CheckCircle,
  Cloud,
  Code,
  Cpu,
  Database,
  FileCheck,
  Globe,
  HardDrive,
  Headphones,
  HelpCircle,
  Info,
  KeyRound,
  Landmark,
  Laptop,
  Lock,
  Mail,
  Monitor,
  Network,
  Phone,
  Server,
  Shield,
  ShieldAlert,
  ShieldCheck,
  ShoppingBag,
  User,
  Users,
  Wifi,
  Wrench,
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export interface SocialIcon {
  href: string;
  icon: React.ComponentType<{
    className?: string;
    color?: string;
    size?: number;
  }>;
  color: string;
}

export interface UtilityLink {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface SubLink {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  image: string;
}

export interface MegaMenuCategory {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  links: SubLink[];
}

export interface NavItem {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  hasMegaMenu?: boolean;
}

export const SOCIAL_ICONS: SocialIcon[] = [
  { href: "https://www.facebook.com", icon: FaFacebookF, color: "#1877F2" },
  { href: "https://www.twitter.com", icon: FaXTwitter, color: "#000000" },
  { href: "https://www.linkedin.com", icon: FaLinkedinIn, color: "#0A66C2" },
  { href: "https://www.instagram.com", icon: FaInstagram, color: "#E4405F" },
];

export const UTILITY_LINKS: UtilityLink[] = [
  { label: "CUSTOMER PORTAL", href: "/portal", icon: User },
  { label: "SUCCESS CENTRE", href: "/success-centre", icon: BookOpen },
  { label: "STATUS", href: "/status", icon: Info },
];

export const IT_MEGA_MENU = {
  categories: [
    {
      title: "Cyber Security",
      icon: Lock,
      description:
        "Advanced Endpoint security, email security, Australian Cyber Security Centre (ASCS) standards and recommendations.",
      links: [
        {
          label: "Cloud & Network Security",
          href: "/cyber-security/cloud",
          icon: ShieldCheck,
          image: "/images/navbar/network.svg",
        },
        {
          label: "EndPoint Security",
          href: "/cyber-security/endpoint",
          icon: Monitor,
          image: "/images/navbar/computer.svg",
        },
        {
          label: "Essential Eight",
          href: "/cyber-security/essential-eight",
          icon: Shield,
          image: "/images/navbar/internet-security.svg",
        },
        {
          label: "Incident Response",
          href: "/cyber-security/incident-response",
          icon: FileCheck,
          image: "/images/navbar/test.svg",
        },
        {
          label: "Security Awareness Training",
          href: "/cyber-security/training",
          icon: Users,
          image: "/images/navbar/leadership.svg",
        },
        {
          label: "Zero Trust Framework",
          href: "/cyber-security/zero-trust",
          icon: CheckCircle,
          image: "/images/navbar/requirement.svg",
        },
      ],
    },
    {
      title: "Servers + Networking",
      icon: Database,
      description:
        "Network and server infrastructure deployment, configuration and management.",
      links: [
        {
          label: "Network Consulting and Design",
          href: "/networking/consulting",
          icon: Cpu,
          image: "/images/navbar/networking.svg",
        },
        {
          label: "Network Installation",
          href: "/networking/installation",
          icon: Globe,
          image: "/images/navbar/net.svg",
        },
        {
          label: "Wi-Fi Networking",
          href: "/networking/wifi",
          icon: Wifi,
          image: "/images/navbar/router.svg",
        },
        {
          label: "Network Security",
          href: "/networking/security",
          icon: ShieldAlert,
          image: "/images/navbar/credibility.svg",
        },
        {
          label: "VPN Solutions",
          href: "/networking/vpn",
          icon: KeyRound,
          image: "/images/navbar/vpn.svg",
        },
        {
          label: "Windows Server",
          href: "/networking/windows-server",
          icon: Server,
          image: "/images/navbar/server.svg",
        },
      ],
    },
    {
      title: "Managed IT",
      icon: Box,
      description:
        "Maintaining and enhancing an organisation's IT Infrastructure.",
      links: [
        {
          label: "Managed IT Services",
          href: "/managed-it/services",
          icon: Headphones,
          image: "/images/navbar/corporate.svg",
        },
        {
          label: "Procurement",
          href: "/managed-it/procurement",
          icon: ShoppingBag,
          image: "/images/navbar/supply-chain.svg",
        },
        {
          label: "Help Desk Support",
          href: "/managed-it/help-desk",
          icon: HelpCircle,
          image: "/images/navbar/leadership.svg",
        },
        {
          label: "Data Management",
          href: "/managed-it/data-management",
          icon: HardDrive,
          image: "/images/navbar/development.svg",
        },
        {
          label: "IT Consulting",
          href: "/managed-it/consulting",
          icon: Laptop,
          image: "/images/navbar/online-meeting.svg",
        },
        {
          label: "IT Outsourcing",
          href: "/managed-it/outsourcing",
          icon: Briefcase,
          image: "/images/navbar/teamwork.svg",
        },
      ],
    },
    {
      title: "Device Repair",
      icon: Monitor,
      description:
        "Repairs for Laptop's, Desktop, Tablets, Mobile Phones and more.",
      links: [
        {
          label: "Virus/Malware Removal",
          href: "/device-repair/virus-removal",
          icon: Bug,
          image: "/images/navbar/computer.svg",
        },
        {
          label: "Data Recovery",
          href: "/device-repair/data-recovery",
          icon: Activity,
          image: "/images/navbar/recovery.svg",
        },
        {
          label: "Upgrades",
          href: "/device-repair/upgrades",
          icon: Wrench,
          image: "/images/navbar/supply-chain.svg",
        },
        {
          label: "PC & Laptop Repairs",
          href: "/device-repair/pc-repairs",
          icon: Monitor,
          image: "/images/navbar/cloud-computing.svg",
        },
      ],
    },
  ],
};

export const NAV_ITEMS: NavItem[] = [
  { label: "IT", href: "/it", icon: Network, hasMegaMenu: true },
  { label: "VOICE", href: "/voice", icon: Phone },
  { label: "INTERNET", href: "/internet", icon: AtSign },
  { label: "CLOUD", href: "/cloud", icon: Cloud },
  { label: "WEB", href: "/web", icon: Code },
  { label: "INDUSTRIES", href: "/industries", icon: Landmark },
  { label: "CONTACT", href: "/contact", icon: Mail },
];

