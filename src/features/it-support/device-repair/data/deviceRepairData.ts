export const deviceRepairHeroData = {
  title1: "Computer Repair",
  title2: "",
  description1:
    "Bismillah IT provides professional computer repair services, helping businesses and home users resolve hardware failures, software issues, virus and malware infections, and system performance problems. Our technicians repair desktops, laptops, and business devices, offering services such as data recovery, hardware upgrades, system optimisation, and network troubleshooting. With reliable support, fast diagnostics, and flexible remote or onsite IT assistance, Total Solutions IT ensures your technology remains secure, efficient, and running smoothly.",
  description2: "",
  bgImage: "/images/it-support/device-repair/hero.png",
  actionButtons: [],
};

export const faqs = [
  {
    question: "How long does a PC or laptop repair usually take?",
    answer:
      "Most common repairs can be completed within 24–48 hours. Simple fixes like software issues, virus removal, or hardware upgrades (SSD/RAM) are often done the same day. More complex repairs or parts orders may take a little longer—we'll always keep you informed.",
  },
  {
    question: "Do I need to book an appointment?",
    answer:
      "Bookings are recommended so we can assist you faster, but walk-ins are welcome. For onsite or urgent repairs, please contact us first to confirm availability.",
  },
  {
    question: "How much does a computer repair cost?",
    answer:
      "Costs depend on the issue and required parts. We provide clear, upfront pricing and will always confirm costs before starting any work—no surprises.",
  },
  {
    question: "Will my data be safe during the repair?",
    answer:
      "Yes. We take data security seriously. Wherever possible, we back up your data before repairs and never access personal files unless required to fix the issue.",
  },
  {
    question: "Can you fix a slow computer?",
    answer:
      "Absolutely. Slow performance is one of the most common issues we see. This may be caused by outdated hardware, software problems, malware, or a full hard drive. We'll diagnose the cause and recommend the best fix.",
  },
  {
    question: "Do you repair both laptops and desktop PCs?",
    answer:
      "Yes. We repair Windows PCs and laptops, including desktops, notebooks, and all-in-one systems.",
  },
  {
    question: "Do you offer virus and malware removal?",
    answer:
      "Yes. We safely remove viruses, malware, and unwanted software, then help secure your system to prevent future infections.",
  },
  {
    question: "Can you recover lost or deleted files?",
    answer:
      "In many cases, yes. We offer data recovery services for hard drives, SSDs, and USB devices. The success rate depends on the type of damage and how quickly the device is checked.",
  },
  {
    question: "Do you offer onsite computer repairs?",
    answer:
      "Yes. We provide onsite support for homes and businesses where required, as well as in-store repairs.",
  },
  {
    question: "What if my computer can’t be repaired?",
    answer:
      "If a repair isn’t cost-effective, we’ll be honest and help you choose the best replacement option, including setting up your new computer and transferring your data.",
  },
];

export interface RepairPartnerLogo {
  name: string;
  logo: string;
}

export const deviceRepairPartnersData: RepairPartnerLogo[] = [
  { name: "MikroTik", logo: "/images/it-support/device-repair/hpe.png" },
  { name: "MikroTik", logo: "/images/it-support/device-repair/lenovo.png" },
  { name: "MikroTik", logo: "/images/it-support/device-repair/asus.png" },
  { name: "MikroTik", logo: "/images/it-support/device-repair/dell.png" },
  { name: "MikroTik", logo: "/images/it-support/device-repair/acer.png" },
];
