import {
  Blocks, Bot, BriefcaseBusiness, CloudCog, Code2, Database, Gauge, LayoutTemplate,
  Megaphone, MonitorSmartphone, Search, ShieldCheck, ShoppingCart, Smartphone,
} from "lucide-react";

export const PHONE_DISPLAY = "+254 722 493 288";
export const PHONE_LINK = "+254722493288";
export const EMAIL = "info@primetekdigitalsolutions.com";
export const WHATSAPP_MESSAGE = "Hey, I'm here to request a quote about a service,";
export const WHATSAPP_URL = `https://wa.me/254722493288?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const navItems = [
  { label: "Home", to: "/" as const },
  { label: "Services", to: "/services" as const },
  { label: "Testimonials", to: "/testimonials" as const },
  { label: "About Us", to: "/about" as const },
  { label: "Contact", to: "/contact" as const },
];

export const services = [
  { title: "Website Design", description: "Fast, accessible websites built to turn attention into measurable business growth.", icon: LayoutTemplate },
  { title: "Custom Software", description: "Purpose-built platforms that simplify operations and fit the way your team works.", icon: Code2 },
  { title: "Mobile App Development", description: "Polished Android and iOS experiences for customers, teams and communities.", icon: Smartphone },
  { title: "E-commerce Solutions", description: "Secure online stores with smooth product, payment and fulfilment journeys.", icon: ShoppingCart },
  { title: "Cloud Solutions", description: "Scalable cloud systems, integrations and migrations designed for resilience.", icon: CloudCog },
  { title: "Database Design", description: "Reliable data architecture, optimisation, maintenance and secure access controls.", icon: Database },
  { title: "Cybersecurity", description: "Practical protection, reviews and hardening for your digital operations.", icon: ShieldCheck },
  { title: "SEO", description: "Technical and content improvements that help the right customers discover you.", icon: Search },
  { title: "Digital Marketing", description: "Focused campaigns, content and analytics that turn reach into qualified demand.", icon: Megaphone },
  { title: "UI/UX Design", description: "Clear product experiences shaped through research, prototyping and testing.", icon: MonitorSmartphone },
  { title: "Business Automation", description: "Connected workflows that reduce repetitive work and costly manual errors.", icon: Bot },
  { title: "IT Consulting", description: "Practical technology planning, procurement guidance and delivery leadership.", icon: BriefcaseBusiness },
  { title: "Systems Integration", description: "Bring disconnected platforms and business information into one reliable flow.", icon: Blocks },
  { title: "Support & Maintenance", description: "Proactive monitoring, updates and technical support after launch.", icon: Gauge },
];

export const testimonials = [
  { quote: "PrimeTek transformed our scattered process into one clear platform. The team listened, moved quickly and delivered beyond the brief.", name: "Amina N.", role: "Operations Director", rating: 5 },
  { quote: "Our new website finally reflects the quality of our business. Enquiries improved within the first month.", name: "David K.", role: "Managing Partner", rating: 5 },
  { quote: "They made a complex mobile product feel straightforward. Communication was consistent from discovery through launch.", name: "Mercy W.", role: "Product Lead", rating: 5 },
  { quote: "A dependable technology partner with excellent attention to detail and a genuinely practical approach.", name: "Brian O.", role: "Founder", rating: 5 },
  { quote: "The automation work saved our team hours each week and gave management much better visibility.", name: "Faith M.", role: "Finance Manager", rating: 5 },
  { quote: "PrimeTek understood both our customers and our technical needs. We would gladly work with them again.", name: "Kevin T.", role: "Commercial Director", rating: 5 },
];
