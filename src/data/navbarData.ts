import {
  Activity,
  AppWindow,
  AtSign,
  Bird,
  BookOpen,
  Bot,
  Box,
  Briefcase,
  Bug,
  Building,
  Building2,
  CheckCircle,
  ClipboardCheck,
  Clock,
  Cloud,
  CloudCheck,
  CloudSun,
  Code,
  Cpu,
  Database,
  DatabaseBackup,
  Eye,
  FileCheck,
  FileKey,
  Fingerprint,
  FolderKanban,
  Globe,
  Globe2,
  GlobeLock,
  GraduationCap,
  HardDrive,
  HardHat,
  Headphones,
  HeartPulse,
  HelpCircle,
  Home,
  Info,
  KeyRound,
  Landmark,
  Laptop,
  LayoutGrid,
  ListOrdered,
  Lock,
  Mail,
  MessageSquare,
  MessagesSquare,
  Mic,
  Monitor,
  Music,
  Network,
  PenTool,
  Phone,
  PhoneCall,
  PlusCircle,
  Radio,
  RadioTower,
  Server,
  Share2,
  Shield,
  ShieldAlert,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sprout,
  Stethoscope,
  Truck,
  User,
  Users,
  Video,
  Volume2,
  Wifi,
  WifiPen,
  Wrench,
  Zap,
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

export interface NavItemSubLink {
  label: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }> | "";
  image?: string;
}

export interface MegaMenuCategory {
  title: string;
  icon?: React.ComponentType<{ className?: string }> | "";
  description: string;
  links: NavItemSubLink[];
}

export interface MegaMenuData {
  categories: Array<{
    title: string;
    icon?: React.ComponentType<{ className?: string }> | "";
    description?: string;
    links: Array<{
      label: string;
      href: string;
      icon?: React.ComponentType<{ className?: string }> | "";
      image?: string;
    }>;
  }>;
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

export const NAV_ITEMS: NavItem[] = [
  { label: "IT", href: "/it", icon: Network, hasMegaMenu: true },
  { label: "VOICE", href: "/voice", icon: Phone, hasMegaMenu: true },
  { label: "INTERNET", href: "/internet", icon: AtSign, hasMegaMenu: true },
  { label: "CLOUD", href: "/cloud", icon: Cloud, hasMegaMenu: true },
  { label: "WEB", href: "/web", icon: Code, hasMegaMenu: true },
  {
    label: "INDUSTRIES",
    href: "/industries",
    icon: Landmark,
    hasMegaMenu: true,
  },
  { label: "CONTACT", href: "/contact", icon: Mail },
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
          image: "/images/navbar/it/network.svg",
        },
        {
          label: "EndPoint Security",
          href: "/cyber-security/endpoint",
          icon: Monitor,
          image: "/images/navbar/it/computer.svg",
        },
        {
          label: "Essential Eight",
          href: "/cyber-security/essential-eight",
          icon: Shield,
          image: "/images/navbar/it/internet-security.svg",
        },
        {
          label: "Incident Response",
          href: "/cyber-security/incident-response",
          icon: FileCheck,
          image: "/images/navbar/it/test.svg",
        },
        {
          label: "Security Awareness Training",
          href: "/cyber-security/training",
          icon: Users,
          image: "/images/navbar/it/leadership.svg",
        },
        {
          label: "Zero Trust Framework",
          href: "/cyber-security/zero-trust",
          icon: CheckCircle,
          image: "/images/navbar/it/requirement.svg",
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
          image: "/images/navbar/it/networking.svg",
        },
        {
          label: "Network Installation",
          href: "/networking/installation",
          icon: Globe,
          image: "/images/navbar/it/net.svg",
        },
        {
          label: "Wi-Fi Networking",
          href: "/networking/wifi",
          icon: Wifi,
          image: "/images/navbar/it/router.svg",
        },
        {
          label: "Network Security",
          href: "/networking/security",
          icon: ShieldAlert,
          image: "/images/navbar/it/credibility.svg",
        },
        {
          label: "VPN Solutions",
          href: "/networking/vpn",
          icon: KeyRound,
          image: "/images/navbar/it/vpn.svg",
        },
        {
          label: "Windows Server",
          href: "/networking/windows-server",
          icon: Server,
          image: "/images/navbar/it/server.svg",
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
          image: "/images/navbar/it/corporate.svg",
        },
        {
          label: "Procurement",
          href: "/managed-it/procurement",
          icon: ShoppingBag,
          image: "/images/navbar/it/supply-chain.svg",
        },
        {
          label: "Help Desk Support",
          href: "/managed-it/help-desk",
          icon: HelpCircle,
          image: "/images/navbar/it/leadership.svg",
        },
        {
          label: "Data Management",
          href: "/managed-it/data-management",
          icon: HardDrive,
          image: "/images/navbar/it/development.svg",
        },
        {
          label: "IT Consulting",
          href: "/managed-it/consulting",
          icon: Laptop,
          image: "/images/navbar/it/online-meeting.svg",
        },
        {
          label: "IT Outsourcing",
          href: "/managed-it/outsourcing",
          icon: Briefcase,
          image: "/images/navbar/it/teamwork.svg",
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
          image: "/images/navbar/it/computer.svg",
        },
        {
          label: "Data Recovery",
          href: "/device-repair/data-recovery",
          icon: Activity,
          image: "/images/navbar/it/recovery.svg",
        },
        {
          label: "Upgrades",
          href: "/device-repair/upgrades",
          icon: Wrench,
          image: "/images/navbar/it/supply-chain.svg",
        },
        {
          label: "PC & Laptop Repairs",
          href: "/device-repair/pc-repairs",
          icon: Monitor,
          image: "/images/navbar/it/cloud-computing.svg",
        },
      ],
    },
  ],
};

export const VOICE_MEGA_MENU = {
  id: "voice",
  label: "VOICE",
  categories: [
    {
      id: "phone-systems",
      title: "PHONE SYSTEMS",
      icon: PhoneCall,
      links: [
        {
          label: "Small Business",
          href: "/voice/phone-systems/small-business",
          icon: Users,
          description: "Flexible VoIP setup for small teams",
        },
        {
          label: "Medium Business",
          href: "/voice/phone-systems/medium-business",
          icon: Building,
          description: "Scalable communication solutions",
        },
        {
          label: "Enterprise Business",
          href: "/voice/phone-systems/enterprise-business",
          icon: Building2,
          description: "Robust enterprise phone infrastructure",
        },
      ],
    },
    {
      id: "brands",
      title: "BRANDS",
      // Custom text-only header as shown in the image (or uses default icon)
      icon: Phone,
      links: [
        {
          label: "Vodia (Cloud System)",
          href: "/voice/brands/vodia",
          icon: Phone,
          description: "Cloud-based PBX system",
        },
        {
          label: "Grandstream",
          href: "/voice/brands/grandstream",
          icon: Phone,
          description: "IP phones and gateways",
        },
        {
          label: "Avaya IP Office",
          href: "/voice/brands/avaya",
          icon: Phone,
          description: "Hybrid & IP communication platforms",
        },
        {
          label: "LG iPECS",
          href: "/voice/brands/lg-ipecs",
          icon: Phone,
          description: "Unified communication phone systems",
        },
      ],
    },
    {
      id: "hardware",
      title: "HARDWARE",
      icon: Mic,
      links: [
        {
          label: "Headsets",
          href: "/voice/hardware/headsets",
          icon: Headphones,
          description: "Noise-canceling office headsets",
        },
        {
          label: "Cordless Phones",
          href: "/voice/hardware/cordless-phones",
          icon: Smartphone,
          description: "Wireless DECT handsets",
        },
        {
          label: "Cel-Fi 4G Repeater",
          href: "/voice/hardware/celfi-4g-repeater",
          icon: Radio,
          description: "Mobile coverage booster",
        },
      ],
    },
    {
      id: "features",
      title: "FEATURES",
      icon: Volume2,
      links: [
        {
          label: "Unified Comms",
          href: "/voice/features/unified-comms",
          icon: Share2,
          description: "Integrated voice, video, and chat",
        },
        {
          label: "Conferencing Solutions",
          href: "/voice/features/conferencing-solutions",
          icon: Video,
          description: "HD video & audio conference rooms",
        },
        {
          label: "Hold Music",
          href: "/voice/features/hold-music",
          icon: Music,
          description: "Custom message & music on hold",
        },
        {
          label: "Microsoft Teams",
          href: "/voice/features/microsoft-teams",
          icon: MessagesSquare,
          description: "Teams Direct Routing integration",
        },
        {
          label: "More Features",
          href: "/voice/features",
          icon: PlusCircle,
          description: "Explore all voice capabilities",
        },
      ],
    },
  ],
};

export const INTERNET_MEGA_MENU = {
  id: "internet",
  label: "INTERNET",
  categories: [
    {
      id: "nbn",
      title: "NBN",
      icon: Wifi,
      description:
        "Access Australia’s National Broadband Network (NBN) to delivery quality internet to your premises.",
      links: [
        {
          label: "Free Fibre Upgrade",
          href: "/internet/nbn/free-fibre-upgrade",
          icon: Zap,
        },
        {
          label: "Home and Small Business",
          href: "/internet/nbn/home-small-business",
          icon: Home,
        },
        {
          label: "Business",
          href: "/internet/nbn/business",
          icon: Building,
        },
        {
          label: "Enterprise Fibre",
          href: "/internet/nbn/enterprise-fibre",
          icon: Building2,
        },
        {
          label: "Fixed Wireless (FW)",
          href: "/internet/nbn/fixed-wireless",
          icon: WifiPen,
        },
        {
          label: "Sky Muster",
          href: "/internet/nbn/sky-muster",
          icon: Cloud,
        },
        {
          label: "Order Now",
          href: "/internet/nbn/order",
          icon: ListOrdered,
        },
      ],
    },
    {
      id: "cel-fi",
      title: "Cel-Fi (4G/5G Boosters)",
      icon: RadioTower,
      description:
        "Cel-Fi products are the first carrier-class cellular coverage solution for industry leading signal gain.",
      links: [],
    },
    {
      id: "starlink",
      title: "StarLink",
      icon: Globe2,
      description:
        "Starlink offers global broadband coverage to underserved and remote areas via satellite.",
      links: [],
    },
    {
      id: "4g-5g-internet",
      title: "4G/5G Internet",
      icon: Clock,
      description:
        "Ensure a seamless transition in the event of any disruptions by using a 4G/5G backup.",
      links: [],
    },
  ],
};

export const CLOUD_MEGA_MENU = {
  id: "cloud",
  label: "CLOUD",
  categories: [
    {
      id: "microsoft-solutions",
      title: "Microsoft Solutions",
      icon: AppWindow,
      links: [
        {
          label: "Microsoft 365",
          href: "/cloud/microsoft-solutions/microsoft-365",
          icon: AppWindow,
          description: "Complete productivity suite and office apps",
        },
        {
          label: "OneDrive",
          href: "/cloud/microsoft-solutions/onedrive",
          icon: Cloud,
          description: "Secure cloud file storage and sync",
        },
        {
          label: "SharePoint",
          href: "/cloud/microsoft-solutions/sharepoint",
          icon: FolderKanban,
          description: "Team collaboration and document management",
        },
        {
          label: "Microsoft Defender",
          href: "/cloud/microsoft-solutions/defender",
          icon: ShieldCheck,
          description: "Integrated threat protection across devices",
        },
        {
          label: "Exchange Online",
          href: "/cloud/microsoft-solutions/exchange-online",
          icon: Mail,
          description: "Business-class email and calendar hosting",
        },
        {
          label: "Windows 365",
          href: "/cloud/microsoft-solutions/windows-365",
          icon: Monitor,
          description: "Cloud PC streaming to any device",
        },
      ],
    },
    {
      id: "nullable",
      title: "",
      // icon: ,
      links: [
        {
          label: "Conditional Access",
          href: "/cloud/microsoft-solutions/conditional-access",
          icon: KeyRound,
          description: "Zero-trust identity & access control policies",
        },
        {
          label: "Copilot",
          href: "/cloud/microsoft-solutions/copilot",
          icon: Bot,
          description: "AI-powered enterprise assistant",
        },
        {
          label: "Teams",
          href: "/cloud/microsoft-solutions/teams",
          icon: MessageSquare,
          description: "Unified chat, meeting, and call hub",
        },
        {
          label: "Microsoft Intune",
          href: "/cloud/microsoft-solutions/intune",
          icon: Smartphone,
          description: "Cloud-based endpoint and device management",
        },
        {
          label: "Entra ID",
          href: "/cloud/microsoft-solutions/entra-id",
          icon: Fingerprint,
          description: "Identity and access management platform",
        },
        {
          label: "Microsoft Azure",
          href: "/cloud/microsoft-solutions/azure",
          icon: CloudCheck,
          description: "Enterprise cloud computing & infrastructure",
        },
      ],
    },
    {
      id: "cyber-security",
      title: "Cyber Security",
      icon: Lock,
      links: [
        {
          label: "ACSC Essential Eight",
          href: "/cloud/cyber-security/essential-eight",
          icon: ClipboardCheck,
          description: "Australian Cyber Security Centre mitigation strategies",
        },
        {
          label: "DISP – Defence Industry Security Program",
          href: "/cloud/cyber-security/disp",
          icon: GlobeLock,
          description: "Security compliance for defence supply chains",
        },
        {
          label: "Microsoft Secure Score",
          href: "/cloud/cyber-security/secure-score",
          icon: ShieldAlert,
          description: "Security posture measurement and recommendations",
        },
        {
          label: "Backup & Recovery",
          href: "/cloud/cyber-security/backup-recovery",
          icon: DatabaseBackup,
          description: "Cloud data protection and disaster recovery",
        },
        {
          label: "Microsoft 365 Cyber Security",
          href: "/cloud/cyber-security/m365-security",
          icon: FileKey,
          description: "Hardened security configuration for M365 environments",
        },
      ],
    },
    {
      id: "services",
      title: "Services",
      icon: User,
      links: [
        {
          label: "Microsoft 365 Modern Workplace",
          href: "/cloud/services/modern-workplace",
          icon: CloudSun,
          description: "Modernized hybrid workspace setup",
        },
        {
          label: "Email Signature Management",
          href: "/cloud/services/email-signature-management",
          icon: PenTool,
          description: "Centralized branding for corporate email signatures",
        },
      ],
    },
  ],
};

export const WEB_MEGA_MENU = {
  id: "web",
  label: "WEB",
  categories: [
    {
      id: "development",
      title: "Development",
      icon: Globe,
      description: "Designed and developed for your business.",
      href: "/web/development",
      links: [],
    },
    {
      id: "hosting",
      title: "Hosting",
      icon: Server,
      description: "Domain and web hosting services.",
      href: "/web/hosting",
      links: [],
    },
    {
      id: "seo",
      title: "SEO",
      icon: Eye,
      description: "Reach your target audience.",
      href: "/web/seo",
      links: [],
    },
    {
      id: "ecommerce",
      title: "eCommerce",
      icon: ShoppingBag,
      description: "Get started on your online business.",
      href: "/web/ecommerce",
      links: [],
    },
    {
      id: "portfolio",
      title: "Portfolio",
      icon: LayoutGrid,
      description: "View our range of websites.",
      href: "/web/portfolio",
      links: [],
    },
  ],
};

export const INDUSTRIES_MEGA_MENU = {
  id: "industries",
  label: "INDUSTRIES",
  categories: [
    {
      id: "healthcare-community",
      title: "Healthcare & Care Services",
      icon: HeartPulse,
      links: [
        {
          label: "Community/aged care",
          href: "/industries/community-aged-care",
          icon: Home,
          description:
            "Secure systems for healthcare workers and care facilities",
        },
        {
          label: "Medical and fertility",
          href: "/industries/medical-and-fertility",
          icon: Stethoscope,
          description:
            "Compliant infrastructure for clinics & medical practices",
        },
        {
          label: "IT Support for Veterinary",
          href: "/industries/veterinary",
          icon: Bird,
          description:
            "Specialized software and network support for vet clinics",
        },
      ],
    },
    {
      id: "corporate-finance",
      title: "Corporate & Financial Services",
      icon: Landmark,
      links: [
        {
          label: "Professional Services",
          href: "/industries/professional-services",
          icon: Briefcase,
          description:
            "IT support and security for legal, consulting, and corporate firms",
        },
        {
          label: "Accounting and financial",
          href: "/industries/accounting-and-financial",
          icon: Landmark,
          description:
            "Encrypted networks and compliance tools for financial practices",
        },
        {
          label: "Government and non-profit",
          href: "/industries/government-and-non-profit",
          icon: GraduationCap,
          description:
            "Budget-friendly, highly secure systems for public sectors and NPOs",
        },
      ],
    },
    {
      id: "property-logistics",
      title: "Property, Trade & Logistics",
      icon: Building2,
      links: [
        {
          label: "Freight and logistics",
          href: "/industries/freight-and-logistics",
          icon: Truck,
          description:
            "Supply chain connectivity and fleet management technology",
        },
        {
          label: "Real estate and storage",
          href: "/industries/real-estate-and-storage",
          icon: Building,
          description: "Property management software & cloud hosting solutions",
        },
        {
          label: "Construction and projects",
          href: "/industries/construction-and-projects",
          icon: HardHat,
          description:
            "Mobile workforce connectivity and site setup technology",
        },
      ],
    },
    {
      id: "science-agriculture",
      title: "Science, Engineering & Primary Industries",
      icon: Cpu,
      links: [
        {
          label: "Agriculture and microbials",
          href: "/industries/agriculture-and-microbials",
          icon: Sprout,
          description:
            "Tailored IT solutions for agricultural and bio-tech operations",
        },
        {
          label: "Engineering & Science",
          href: "/industries/engineering-and-science",
          icon: Wrench,
          description:
            "High-performance computing and secure data infrastructure",
        },
      ],
    },
  ],
};

