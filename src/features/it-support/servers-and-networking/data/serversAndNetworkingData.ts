export interface PartnerLogo {
  name: string;
  logo: string;
}

export const partnersData: PartnerLogo[] = [
  { name: "MikroTik", logo: "/images/home/how-we-do/mikrotik.png" },
  { name: "Ubiquiti", logo: "/images/it-support/servers-and-networking/ubiquiti.png" },
  { name: "Grandstream", logo: "/images/home/how-we-do/grandstream.png" },
  { name: "HPE", logo: "/images/home/how-we-do/hpe.png" },
  { name: "Microsoft 365", logo: "/images/home/how-we-do/microsoft365.png" },
];

export const heroData = {
  title1: "Servers &",
  title2: "Networking",
  description1:
    "Our server and networking solutions are designed to empower businesses with seamless connectivity and robust infrastructure. With a focus on reliability, scalability, and security, our tailored solutions ensure optimized performance for your organization's digital ecosystem.",
  description2:
    "From deploying efficient server configurations to implementing high-speed networking protocols, we provide comprehensive support to enhance productivity and streamline operations. Our expertise lies in crafting customized solutions that align with your unique requirements, enabling you to stay agile in a rapidly evolving technological landscape while maximizing the potential of your IT infrastructure.",
  bgImage: "/images/it-support/servers-and-networking/hero.png",
  actionButtons: [
    { label: "NETWORKING SOLUTIONS", href: "#networking-solutions" },
    { label: "SERVER SOLUTIONS", href: "#server-solutions" },
  ],
};

export const testimonials = [
  {
    name: "Aaron Smith | Stadelmann Enterprises",
    text: "TSIT have great professional response. Very impressed with their availability to respond to issues. Helped to migrate 30 staff from an onsite server to Microsoft 365, Email services, User account management and SharePoint. Everything went very smoothly and communication was excellent.",
  },
  {
    name: "Chris | Construction Company",
    text: "Joel and his team make it all so easy. Assisted with implementation of Defence Industry Security Program (DISP) accreditation for over 50 staff. Made it easy to understand each step of the process and ensured minimal interruption to staff during deployment.",
  },
];

export const networkingSolutions = [
  "Network Design and Implementation",
  "Network Security",
  "Wireless Networking",
  "Network Optimization and Performance Management",
  "Cloud Networking Integration",
  "Managed Networking Services",
  "Wireless Network",
  "WAN & Advanced Networking Solutions",
];

export const topFeatureCards = [
  {
    title: "The Road to Transformation",
    description:
      "Transforming your organization requires a strategy that aligns IT with business goals. Our team guides you through every step of this journey, ensuring your network infrastructure supports digital initiatives, improves efficiency, and fosters innovation.",
  },
  {
    title: "The Power of Cloud",
    description:
      "Cloud computing offers unprecedented scalability, flexibility, and efficiency. We help you leverage cloud-based networking solutions, such as SD-WAN and cloud-managed Wi-Fi, to streamline management, enhance performance, and support remote work environments.",
  },
  {
    title: "Connecting Securely",
    description:
      "Security is paramount in today&apos;s connected world. Our networking solutions integrate advanced security measures, including firewalls, encryption, and access controls, to protect your data and network from cyber threats, ensuring safe and reliable connectivity.",
  },
];

export const networkingSolutionsDetails = [
  {
    title: "Network Design and Implementation",
    description:
      "We design and implement custom network architectures tailored to your business requirements. Whether you&apos;re setting up a new network or upgrading an existing one, our experts ensure seamless integration, optimal performance, and scalability to accommodate future growth.",
  },
  {
    title: "Network Security",
    description:
      "Protecting your network from unauthorized access and cyber threats is critical. We provide robust security solutions, including firewalls, intrusion detection and prevention systems (IDPS), and secure access controls, to safeguard your critical data and maintain compliance.",
  },
  {
    title: "Wireless Networking",
    description:
      "In today&apos;s mobile-first world, reliable Wi-Fi is essential. We offer high-density, secure wireless solutions that provide seamless coverage, high speed, and secure access for employees and guests alike, supporting productivity across your facilities.",
  },
  {
    title: "Network Optimization and Performance Management",
    description:
      "Slow networks can hinder business operations. We continuously monitor, analyze, and optimize your network performance to ensure fast data transmission, minimize downtime, and resolve issues before they impact your business.",
  },
  {
    title: "Cloud Networking Integration",
    description:
      "Integrating your local network with cloud services requires careful planning. We provide cloud networking solutions that seamlessly connect your on-premises infrastructure with public, private, or hybrid clouds, ensuring secure and high-speed data transfer.",
  },
  {
    title: "Managed Networking Services",
    description:
      "Outsource your network management to Cyber. Our team delivers 24/7 proactive monitoring, regular maintenance, patch management, and rapid troubleshooting, allowing your internal team to focus on strategic business initiatives while maintaining top network efficiency.",
  },
];

export const wirelessCards = [
  {
    title: "Wireless Network Design and Planning",
    description:
      "We perform comprehensive site surveys and heat mapping to design optimal Wi-Fi layouts. This ensures maximum coverage, eliminates dead zones, and provides seamless connectivity for high-density user environments, guaranteeing reliable network access across your entire facility.",
  },
  {
    title: "Access Point Deployment and Configuration",
    description:
      "Our team handles the professional installation and configuration of enterprise-grade Access Points (APs). We optimize channel allocation and transmission power to prevent interference and maximize network throughput, delivering consistent performance everywhere.",
  },
  {
    title: "Guest Wi-Fi Solutions",
    description:
      "Provide secure Internet access for visitors without compromising your primary corporate network. We create isolated guest networks with customizable splash pages, terms-of-use acceptance, and bandwidth controls to protect your internal resources while maintaining a welcoming experience.",
  },
  {
    title: "Wireless Security and Compliance",
    description:
      "Protecting wireless networks requires advanced security protocols. We implement WPA3 encryption, 802.1X authentication, network segmentation, and wireless intrusion detection systems (WIDS) to safeguard data against eavesdropping, unauthorized access, and cyber threats.",
  },
  {
    title: "Wireless Performance Optimization",
    description:
      "Slow speeds or dropped connections can disrupt productivity. We continuously monitor wireless performance, analyze traffic patterns, and optimize RF configurations to deliver high-speed access, low latency, and seamless roaming across all connected devices.",
  },
  {
    title: "Integration with Modern Technologies",
    description:
      "Modern wireless networks support more than laptops and smartphones. We integrate Wi-Fi solutions with IoT devices, smart building technologies, location services, and VoIP applications to empower smart workplace capabilities and improve operational agility.",
  },
];

export const wanTopCards = [
  {
    title: "Internet Service",
    description:
      "A reliable internet connection is fundamental to any business operation. We help you source, implement, and manage high-speed, enterprise-grade Internet Service Provider (ISP) connections, including dedicated fiber, broadband, and wireless links, tailored to meet your bandwidth demands and performance SLAs.",
  },
  {
    title: "Redundant Internet Systems",
    description:
      "Downtime can disrupt productivity and lead to lost revenue. We implement redundant Internet solutions featuring automatic failover mechanisms, combining multiple ISP connections or cellular backup (LTE/5G). This ensures continuous uptime so your business remains online even if a primary provider experiences an outage.",
  },
];

export const advancedNetworkingCard = {
  title: "Advanced Networking Solutions",
  description:
    "Explore our WAN and advanced networking solutions below, engineered to deliver reliable, secure, and high-performance connectivity tailored to your enterprise needs.",
};

export const wanAdvancedCards = [
  {
    title: "SD-WAN (Software-Defined Wide Area Network)",
    description:
      "Simplify WAN management with Software-Defined WAN technology. SD-WAN dynamically routes traffic across the best available paths (MPLS, broadband, LTE), optimizing application performance, reducing connection costs, and providing centralized control over your distributed network.",
  },
  {
    title: "Virtual Private Networks (VPNs)",
    description:
      "Secure remote access and site-to-site connectivity with robust VPN solutions. We deploy IPsec and SSL VPNs that encrypt data in transit, ensuring remote employees and branch offices can securely connect to company resources.",
  },
  {
    title: "Load Balancing and Traffic Management",
    description:
      "Optimize bandwidth utilization and guarantee application availability with intelligent load balancing. Our traffic management solutions distribute data evenly across multiple paths to avoid bottlenecks and improve user experience.",
  },
  {
    title: "Network Virtualization and Segmentation",
    description:
      "Enhance security and manageability by segmenting your network into isolated virtual subnetworks (VLANs). Network virtualization limits threat propagation and enforces granular access control across departments.",
  },
  {
    title: "Unified Threat Management (UTM)",
    description:
      "Consolidate your security functions into a single platform. UTM combines firewalls, VPN, antivirus, content filtering, and intrusion prevention to deliver end-to-end protection against complex cyber threats across your WAN.",
  },
];
