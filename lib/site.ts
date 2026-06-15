// ─────────────────────────────────────────────────────────────
// Single source of truth — all facts below are drawn from the
// live/archived Formal Grand Resources site (formalgrandresources.co.za).
// Nothing here is invented.
// ─────────────────────────────────────────────────────────────

export const COMPANY = {
  name: "Formal Grand Resources",
  short: "FGR",
  tagline: "Telco-integrated digital content & engagement, built for Africa.",
  positioning:
    "A premium service provider in the Technology, Media & Telecom space, delivering innovative digital solutions to African businesses and consumers.",
  phone: "+27 12 816 5204",
  phoneHref: "+27128165204",
  email: "info@fgronline.co.za",
  address: "47 Meadow Avenue, Equestria, Pretoria, 0184",
  hours: "Monday to Friday · 8:00 AM – 5:00 PM",
  website: "www.formalgrandresources.co.za",
  established: 2020,
};

export const STATS = [
  { value: 87, suffix: "", label: "Projects delivered" },
  { value: 12, suffix: "+", label: "Years of experience" },
  { value: 130, suffix: "", label: "Expert advisors" },
  { value: 3, suffix: "", label: "Countries served" },
];

export type NavChild = { label: string; href: string };
export type NavItem = { label: string; href: string; children?: NavChild[] };

export const NAV: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Digital Content Services", href: "/services#content" },
      { label: "Digital Media (DSP · SSP · DMP)", href: "/services#media" },
      { label: "Cloud Computing", href: "/services#cloud" },
      { label: "Interactive Voice Response", href: "/services#ivr" },
      { label: "Project Management", href: "/services#project" },
      { label: "CSI Initiatives", href: "/services#csi" },
    ],
  },
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "Game-O-Mania", href: "/products#game-o-mania" },
      { label: "HappyTube Games", href: "/products#happytube-games" },
      { label: "HappyTube TV", href: "/products#happytube-tv" },
      { label: "KidsZone Pro", href: "/products#kidszone-pro" },
      { label: "Games 360", href: "/products#games-360" },
      { label: "Cash Rider & Cash Battle", href: "/products#competitions" },
    ],
  },
  { label: "Partners", href: "/partners" },
  { label: "Contact", href: "/contact" },
];

// ─── Capabilities / Services ───────────────────────────────────
export type Service = {
  id: string;
  name: string;
  short: string;
  icon: string; // lucide icon name
  body: string;
  points?: string[];
};

export const SERVICES: Service[] = [
  {
    id: "content",
    name: "Digital Content Services",
    short: "Mobile games, video & competitions delivered through carrier portals.",
    icon: "Gamepad2",
    body:
      "We build and operate mobile content services — games, short-format video and skill-based competitions — delivered through an MNO-integratable portal. Every service works across smart and feature phones, ships with comprehensive reporting and analytics, and can be fully reskinned to any operator brand or corporate identity.",
    points: [
      "Mobile Games — HTML5, Android-downloadable & 3D titles",
      "Mobile Videos — multi-channel short-format streaming",
      "Mobile Competitions — skill-based games with daily & monthly prizes",
    ],
  },
  {
    id: "media",
    name: "Digital Media",
    short: "A full-stack programmatic advertising ecosystem — DSP, SSP & DMP.",
    icon: "BarChart3",
    body:
      "A full-stack digital media ecosystem spanning demand, supply and data. Our licensed platforms let advertisers, publishers and marketers buy, sell and target inventory programmatically in real time, optimised against the KPIs that matter.",
    points: [
      "Demand-Side Platform (DSP) — manage real-time bidding across ad & data exchanges from one interface, optimised on eCPC and eCPA",
      "Supply-Side Platform (SSP) — help publishers manage inventory, fill it with ads and maximise yield",
      "Data Management Platform (DMP) — big-data and AI-driven audience segmentation for sharper targeting",
    ],
  },
  {
    id: "cloud",
    name: "Cloud Computing",
    short: "Flexible, scalable PaaS, IaaS & SaaS — AWS & Microsoft Azure reseller.",
    icon: "Cloud",
    body:
      "Evolve into a new-age business with a full suite of flexible, scalable, high-quality cloud solutions. We deliver IT as a service — applications, development platforms, servers, storage and virtual desktops — on demand, billed to actual usage, for improved performance, reliability and cost savings.",
    points: [
      "Platform, Infrastructure & Software as a Service (PaaS · IaaS · SaaS)",
      "AWS and Microsoft Azure premium reseller",
      "Costs aligned to real usage — greater agility, efficient spend",
    ],
  },
  {
    id: "ivr",
    name: "Interactive Voice Response",
    short: "Automated telephony that gathers input and routes calls intelligently.",
    icon: "PhoneCall",
    body:
      "An Interactive Voice Response (IVR) system that interacts with callers, gathers the required information and routes calls to the right recipient. Modern voice-recognition gathers spoken input, while pre-recorded or generated audio assists, directs and routes calls automatically — via touch-tone keypad or voice — without a live operator.",
    points: [
      "Voice-recognition & touch-tone input capture",
      "Pre-recorded or generated audio prompts",
      "Automatic, operator-free call routing",
    ],
  },
  {
    id: "project",
    name: "Project Management",
    short: "PMP-certified delivery from concept through planning to operation.",
    icon: "ClipboardCheck",
    body:
      "Professional project management to run projects from the conceptual phase through planning, design and implementation to operation. All our project managers are PMP-certified professionals who help clients define priorities, understand risks, and put the management and control procedures in place to deliver.",
    points: [
      "Project execution, planning & process",
      "Programme management & stakeholder engagement",
      "Resource planning and management",
    ],
  },
  {
    id: "csi",
    name: "CSI Initiatives",
    short: "Corporate social investment for inclusive digital development.",
    icon: "HeartHandshake",
    body:
      "Our Corporate Social Investment initiatives sustain positive social development in the communities we operate in. FGR's CSI expenditure is funded by an annual allocation of not less than two percent of the previous year's after-tax income from its South African operations, directed toward inclusive, people-centred digital development.",
    points: [
      "Community-centred, development-oriented programmes",
      "Funded by ≥2% of prior-year after-tax SA income",
      "Delivered through the MaHlambelo Foundation",
    ],
  },
];

// ─── Products ──────────────────────────────────────────────────
export type Channel = { provider: string; country: string; ussd: string };
export type Product = {
  id: string;
  name: string;
  category: string;
  icon: string;
  flagship?: boolean;
  blurb: string;
  features?: string[];
  channels?: Channel[];
};

export const PRODUCTS: Product[] = [
  {
    id: "game-o-mania",
    name: "Game-O-Mania",
    category: "Mobile Games · Flagship",
    icon: "Gamepad2",
    flagship: true,
    blurb:
      "Our flagship mobile gaming service — the best of three worlds in one. Game-O-Mania combines 3D Games, Android downloadable games and online HTML5 games in a single portal, giving every subscriber a unique gaming experience built on best-practice UX and UI.",
    features: [
      "3D games, Android-downloadable games & online HTML5 games in one portal",
      "Best-practice UX & UI across the experience",
      "Works on both smart and feature phones",
      "Easily integrated into any MNO with full reporting & analytics",
    ],
    channels: [
      { provider: "Game-O-Mania", country: "South Africa", ussd: "*686*6308#" },
      { provider: "Game-O-Mania", country: "South Africa", ussd: "*179*XX#" },
    ],
  },
  {
    id: "happytube-games",
    name: "HappyTube Games",
    category: "Mobile Games",
    icon: "Joystick",
    blurb:
      "Hundreds of online HTML5 and downloadable Android games that subscribed users can play an unlimited number of times. Accessed through our portal built on best-practice UX and UI, integrated easily into any MNO with comprehensive reporting and analytics. Works on smart and feature phones and reskins to any brand or CI.",
    features: [
      "Hundreds of HTML5 & downloadable Android games",
      "Unlimited play for subscribers",
      "MNO-integratable with full analytics",
      "Reskinnable front-end for any brand or CI",
    ],
    channels: [
      { provider: "HappyTube Games", country: "South Africa", ussd: "*686*6139#" },
      { provider: "HappyTube Games", country: "South Africa", ussd: "*179*20#" },
      { provider: "HappyTube Games", country: "Kenya", ussd: "*370#" },
    ],
  },
  {
    id: "happytube-tv",
    name: "HappyTube TV",
    category: "Mobile Video",
    icon: "Video",
    blurb:
      "A versatile video platform for short-format channels across Entertainment, Comedy, Lifestyle, Devotion, Celebrities, Sport and more. Subscribers get unlimited access and viewing. We work with local content providers in each market, and the platform reskins and integrates quickly into any MNO.",
    features: [
      "Multi-channel short-format video",
      "Unlimited subscriber viewing",
      "Localised content per market",
      "Smart & feature-phone support, MNO-ready",
    ],
    channels: [
      { provider: "HappyTube TV", country: "South Africa", ussd: "*686*6138#" },
      { provider: "HappyTube TV", country: "South Africa", ussd: "*179*15#" },
      { provider: "HappyTube TV", country: "Kenya", ussd: "*370#" },
    ],
  },
  {
    id: "kidszone-pro",
    name: "KidsZone Pro",
    category: "Mobile Video · Kids",
    icon: "Baby",
    blurb:
      "A kid-safe video platform with content covering nursery poems, English and Hindi comics. Subscribers enjoy unlimited access and daily viewing — a wholesome, curated channel for younger audiences.",
    features: [
      "Nursery poems & comics (English & Hindi)",
      "Unlimited daily viewing for subscribers",
      "Curated, kid-safe catalogue",
    ],
    channels: [
      { provider: "KidsZone Pro", country: "South Africa", ussd: "*686*6307#" },
      { provider: "KidsZone Pro", country: "South Africa", ussd: "*179*50#" },
    ],
  },
  {
    id: "games-360",
    name: "Games 360",
    category: "Mobile Competitions",
    icon: "Trophy",
    blurb:
      "A multi-game, multi-player, multi-tournament competition gaming platform — a complete social gaming layer with leaderboards, tournaments, real-time and turn-based multiplayer, live streaming and a global gaming currency.",
    features: [
      "Leaderboards, achievements & tournaments",
      "Real-time & turn-based multiplayer",
      "Live conversations, social connect & user-generated feed",
      "Unique gamer ID, global gaming currency, live video & streaming",
    ],
    channels: [{ provider: "Games 360", country: "South Africa", ussd: "*179*52#" }],
  },
  {
    id: "competitions",
    name: "Cash Rider & Cash Battle",
    category: "Mobile Competitions",
    icon: "Gamepad",
    blurb:
      "Skill-based HTML5 competition games. In Cash Rider, players dodge obstacles in a motorsport dash; in Cash Battle, players use speed and aim to outduel opponents. Subscribers play unlimited times a day and win monthly cash prizes and daily airtime based on their leaderboard position.",
    features: [
      "Cash Rider — skill-based motorsport dodge game",
      "Cash Battle — fast-paced skilled combat game",
      "Daily airtime & monthly cash prizes by leaderboard rank",
      "Unlimited daily play for subscribers",
    ],
    channels: [
      { provider: "Cash Rider", country: "South Africa", ussd: "*686*6141#" },
      { provider: "Cash Rider", country: "South Africa", ussd: "*179*24#" },
      { provider: "Cash Battle", country: "South Africa", ussd: "*179*51#" },
    ],
  },
];

// ─── Capability snapshot (home) ────────────────────────────────
export const CAPABILITIES = [
  { icon: "Gamepad2", title: "Mobile Games", text: "HTML5, Android & 3D titles across smart and feature phones." },
  { icon: "Video", title: "Mobile Video", text: "Multi-channel short-format streaming with localised catalogues." },
  { icon: "Network", title: "MNO Integration", text: "Carrier-ready portals that drop into any mobile network operator." },
  { icon: "BarChart3", title: "Reporting & Analytics", text: "Comprehensive, real-time reporting baked into every service." },
  { icon: "Paintbrush", title: "Reskinnable Portal", text: "Front-ends that reskin to any operator brand or corporate identity." },
  { icon: "Trophy", title: "Competitions & Rewards", text: "Skill-based games with daily airtime and monthly cash prizes." },
];

// ─── FAQ (from About page) ─────────────────────────────────────
export const FAQ = [
  {
    q: "What can I win in the competition games?",
    a: "You can win airtime daily and cash at the end of the month.",
  },
  {
    q: "How do I know I have won a competition game?",
    a: "Airtime is sent to your subscribed number between 11am and 1pm the following day. Cash winnings are sent to your subscribed number via e-wallet.",
  },
  {
    q: "Can I download the games?",
    a: "Yes — we offer hundreds of online and downloadable games that subscribed users can play an unlimited number of times.",
  },
  {
    q: "What devices can I use to access the services?",
    a: "The services work on both smart and feature phones.",
  },
];

export const PARTNER_NOTE =
  "We collaborate with the industry's most trusted strategic-alliance partners to give you access to the latest technologies.";
