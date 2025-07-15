export interface NavItem {
  title: string;
  path?: string;
  children?: NavItem[];
  color?: string; // New color property
}

export const NAV_ITEMS: NavItem[] = [
  {
    title: "Economy",
    color: "text-emerald-400",
    children: [
      { title: "Agriculture", path: "/economy/agriculture", color: "text-emerald-300" },
      { title: "Tech", path: "/economy/tech", color: "text-emerald-300" },
      { title: "Infrastructure", path: "/economy/infrastructure", color: "text-emerald-300" },
      { title: "Manufacturing", path: "/economy/infrastructure", color: "text-emerald-300" },
      { title: "Invest in Kenya", path: "/economy/infrastructure", color: "text-emerald-300" },


    ],
  },
  {
    title: "Tourism",
    color: "text-amber-400",
    children: [
      { title: "Top Destinations", path: "/tourism/safari-parks", color: "text-amber-300" },
      { title: "Safari and Wildlife", path: "/tourism/beaches", color: "text-amber-300" },
      { title: "Urban Experiences", path: "/tourism/wildlife", color: "text-amber-300" },
      { title: "Beach and Coastline", path: "/tourism/wildlife", color: "text-amber-300" },

    ],
  },
  {
    title: "Fashion & Trends",
    color: "text-fuchsia-400",
    children: [
      { title: "Traditional Wear", path: "/fashion/traditional", color: "text-fuchsia-300" },
      { title: "Designers and Brands", path: "/fashion/brands", color: "text-fuchsia-300" },
      { title: "Modern Fashion", path: "/fashion/modern", color: "text-fuchsia-300" },
      { title: "Fashion Gallery", path: "/fashion/modern", color: "text-fuchsia-300" },


    ],
  },
  {
    title: "Education",
    color: "text-blue-400",
    children: [
      { title: "Universities", path: "/education/universities", color: "text-blue-300" },
      { title: "Scholarships", path: "/education/scholarships", color: "text-blue-300" },
      { title: "Tech Schools", path: "/education/tech-schools", color: "text-blue-300" },
    ],
  },
  {
    title: "Our Culture",
    color: "text-purple-400",
    children: [
      { title: "Kenyan Cuisines", path: "/culture/foods", color: "text-purple-300" },
      { title: "Ethnic Groups", path: "/explore/cultural", color: "text-purple-300" },
      { title: "Arts and Craft", path: "/explore/cultural", color: "text-purple-300" },
      { title: "Oral Traditions", path: "/explore/cultural", color: "text-purple-300" },


    ],
  },
  {
    title: "Latest News",
    color: "text-red-400",
    children: [
      { title: "Sports", path: "/news/politics", color: "text-red-300" },
      { title: "Business", path: "/news/business", color: "text-red-300" },
      { title: "Youth Innovation", path: "/news/youth-innovation", color: "text-red-300" },
      { title: "Education", path: "/news/youth-innovation", color: "text-red-300" },
    ],
  },
];