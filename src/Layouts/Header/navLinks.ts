/* eslint-disable @typescript-eslint/no-explicit-any */
import WebIcon from "../../../public/SVG/header/web-development.svg"
import UIUX from "../../../public/SVG/header/uiux-desgin.svg"
import DigitalMarketing from "../../../public/SVG/header/digital-market.svg"
import RealEstate from "../../../public/SVG/header/real-estate.svg"
import ECommeace from "../../../public/SVG/header/e-commerce.svg"
import Finamce from "../../../public/SVG/header/finance.svg"
import HealthCare from "../../../public/SVG/header/healthcare.svg"
import Eduction from "../../../public/SVG/header/education.svg"
import Retail from "../../../public/SVG/header/retail.svg"
import { StaticImageData } from "next/image"

export interface NavChild {
  name: string;
  path: string;
}

export interface NavItem {
  name: string;
  icon?: StaticImageData;
  path: string;
  children?: NavChild[];
}

export interface MainNavItem {
  name: string;
  path: string;
  url?: string;
  dropdown?: any;
  hasDropdown?: boolean;
  data?: NavItem[];
}


export const servicesData: NavItem[] = [
  {
    name: "Web & App Development",
    icon: WebIcon,
    path: "/services/web-and-app-development",
    children: [
      { name: "React.js Development", path: "/services/development/react" },
      { name: "Node.js Development", path: "/services/development/node" },
      { name: "Next.js Development", path: "/services/development/next" },
      {
        name: "React Native Development",
        path: "/services/development/react-native",
      },
    ],
  },
  {
    name: "UI/UX Design",
    icon: UIUX,
    path: "/services/ui-ux-design",
    children: [
      { name: "Website Design", path: "/services/ui-ux-design/website-design" },
      { name: "Mobile App Design", path: "/services/ui-ux-design/mobile-app-design" },
      {
        name: "Product Design",
        path: "/services/ui-ux-design/product-design",
      },
 
    ],
  },
  {
    name: "Digital Marketing",
    icon: DigitalMarketing,
    path: "/services/digital-marketing",
    children: [
      { name: "SEO", path: "/services/digital-marketing/search-engine-optimization-services" },
      { name: "PPC Advertisement", path: "/services/digital-marketing/ppc-advertising-services" },
      {
        name: "Social Media Marketing",
        path: "/services/digital-marketing/social-media-marketing-services",
      },
      {
        name:"Content Marking",
        path: "/services/digital-marketing/content-marketing-services",
      },
      { name: "Email Marketing", path: "/services/digital-marketing/email-marketing-services" },
      {
        name: "Analytics & Reporting",
        path: "/services/digital-marketing/analytics-reporting",
      },
      {
        name: "Influencer Marketing",
        path: "/services/digital-marketing/influencer-marketing-services",
      }
    ],
  },
];

export const industriesData: NavItem[] = [
  { name: "Real Estate", icon: RealEstate , path: "/industries/real-estate" },
  { name: "E-commerce", icon: ECommeace, path: "/industries/ecommerce" },
  { name: "Finance & Fintech", icon: Finamce, path: "/industries/finance" },
  { name: "Healthcare / Pharma", icon: HealthCare, path: "/industries/healthcare" },
  { name: "Education", icon: Eduction, path: "/industries/education" },
  { name: "Retail", icon: Retail, path: "/industries/retail" },
];

export const navItems: MainNavItem[] = [
  // { name: "Home", path: "/" },
  {
    name: "Services",
    path: "/services",
    hasDropdown: true,
    data: servicesData,
  },
  {
    name: "Industries",
    path: "/industries",
    hasDropdown: true,
    data: industriesData,
  },
  { name: "Projects", path: "/projects" },
  { name: "About us", path: "/about-us" },
  { name: "Blog", path: "/blog" },
  { name: "Career", path: "/career" },
];

export const socialLinks = {
  linkedin: "https://www.linkedin.com/company/harich-tech",
  facebook: "https://www.facebook.com/harichtech",
  instagram: "https://www.instagram.com/harichtech",
};
