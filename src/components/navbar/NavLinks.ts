import { 
  BookOpen, Users, Heart, ShieldCheck, 
  Baby, Sparkles, UserCheck, Flame, 
  Music, Globe, Video, Radio, Podcast, 
  Image as ImageIcon, Calendar, MapPin, Phone, MessageSquare
} from "lucide-react";

export interface MegaMenuItem {
  title: string;
  description: string;
  href: string;
  icon: any;
  badge?: string;
}

export interface NavLinkItem {
  label: string;
  href: string;
  dropdownType?: "about" | "ministries" | "media";
  megaItems?: MegaMenuItem[];
}

export const desktopNavLinks: NavLinkItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
    dropdownType: "about",
    megaItems: [
      {
        title: "Our Story",
        description: "Discover our journey of faith, growth, and community since April 9, 2019.",
        href: "/about",
        icon: BookOpen,
      },
      {
        title: "Pastor & Leadership",
        description: "Meet Senior Pastor Collins Ababio and our dedicated ministry leaders.",
        href: "/leadership",
        icon: Users,
      },
      {
        title: "Mission & Vision",
        description: "Our sacred calling to know Christ and make Him known in Offinso.",
        href: "/about#mission",
        icon: Heart,
      },
      {
        title: "Statement of Faith",
        description: "Exploring our 16 fundamental gospel truths as Assemblies of God.",
        href: "/about#beliefs",
        icon: ShieldCheck,
      },
    ],
  },
  {
    label: "Ministries",
    href: "/ministries",
    dropdownType: "ministries",
    megaItems: [
      {
        title: "Children Ministry",
        description: "Safe, fun, and age-appropriate Bible learning for Nursery to 12 yrs.",
        href: "/ministries#children",
        icon: Baby,
        badge: "Nursery - 12 Yrs",
      },
      {
        title: "Youth Ministry",
        description: "Empowering teenagers and students with Pentecostal fire and purpose.",
        href: "/ministries#youth",
        icon: Flame,
      },
      {
        title: "Young Adults",
        description: "Connecting young professionals and tertiary students in fellowship.",
        href: "/ministries#young-adults",
        icon: Sparkles,
      },
      {
        title: "Women's Ministry",
        description: "Building virtuous women of prayer, wisdom, and mentorship.",
        href: "/ministries#women",
        icon: UserCheck,
      },
      {
        title: "Men's Ministry",
        description: "Equipping brothers to lead their homes and communities with integrity.",
        href: "/ministries#men",
        icon: Users,
      },
      {
        title: "Worship & Arts",
        description: "Leading praise through Spirit-filled music, choir, and creative arts.",
        href: "/ministries#worship",
        icon: Music,
      },
      {
        title: "Outreach & Missions",
        description: "Demonstrating Christ's love through community aid and medical fairs.",
        href: "/ministries#outreach",
        icon: Globe,
      },
    ],
  },
  {
    label: "Media",
    href: "/media/sermons",
    dropdownType: "media",
    megaItems: [
      {
        title: "Sermons Archive",
        description: "Watch and listen to powerful messages from Pastor Collins Ababio.",
        href: "/media/sermons",
        icon: Video,
      },
      {
        title: "Live Stream",
        description: "Join our Sunday live broadcast at 9:00 AM & 11:00 AM GMT.",
        href: "/media/live",
        icon: Radio,
        badge: "Sunday Live",
      },
      {
        title: "Church Podcast",
        description: "Listen to audio teachings on Spotify, Apple, and Google Podcasts.",
        href: "/media/podcast",
        icon: Podcast,
      },
      {
        title: "Photo & Video Gallery",
        description: "Highlights of church celebrations, revivals, and community events.",
        href: "/media/gallery",
        icon: ImageIcon,
      },
    ],
  },
  {
    label: "Events",
    href: "/events",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export const mobileNavLinks: NavLinkItem[] = [
  ...desktopNavLinks.slice(0, 4),
  {
    label: "Events",
    href: "/events",
  },
  {
    label: "Give",
    href: "/give",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export const navLinks = desktopNavLinks;
