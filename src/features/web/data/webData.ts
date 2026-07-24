import {
  Captions,
  ChevronsLeftRightEllipsis,
  Feather,
  RefreshCcw,
  ShoppingBag,
  TrendingUp,
} from "lucide-react";

export const heroData = {
  title1: "All your website",
  title2: "development needs",
  description1: "",
  bgImage: "/images/web/hero.png",
  actionButtons: [
    { label: "Web Development", href: "/" },
    { label: "SEO", href: "/" },
    { label: "Domain & Hosting", href: "/" },
    { label: "Ecommerce", href: "/" },
    { label: "Portfolio", href: "/" },
  ],
};

export const webFeatures = [
  {
    title: "Web Design",
    desc: "Our approach is user-friendly, visually stunning, and tailored to elevate your online presence. By ensuring each element works together, we engage your audience and effectively communicate your brand's message.",
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
];

export const serviceListData = [
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
];

export const webPartnerLogos = [
  { logo: "/images/web/wp.png" },
  { logo: "/images/web/cpanel.png" },
  { logo: "/images/web/yoast.png" },
  { logo: "/images/web/synergy.png" },
  { logo: "/images/web/cloudfare.png" },
];
