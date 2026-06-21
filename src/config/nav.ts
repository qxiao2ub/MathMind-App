import {
  LayoutDashboard,
  BookOpen,
  Dumbbell,
  Users,
  User,
  Sparkles,
  ClipboardList,
  History,
  Trophy,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface NavItem {
  icon: LucideIcon;
  label: string;
  path: string;
  variant?: "default" | "ai";
}

export interface NavGroup {
  label: string;
  items: NavItem[];
}

/** Primary bottom nav tabs — 5 slots */
export const primaryNavItems: NavItem[] = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
  { icon: BookOpen, label: "Learn", path: "/learn" },
  { icon: Sparkles, label: "AI Tutor", path: "/chat", variant: "ai" },
  { icon: Trophy, label: "Ranks", path: "/leaderboard" },
  { icon: User, label: "Profile", path: "/profile" },
];

export const secondaryNavItems: NavItem[] = [
  { icon: ClipboardList, label: "Quiz", path: "/quiz" },
  { icon: Dumbbell, label: "Practice", path: "/practice" },
  { icon: History, label: "History", path: "/history" },
];

/** Grouped desktop sidebar */
export const sidebarGroups: NavGroup[] = [
  {
    label: "Main",
    items: [
      { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
      { icon: BookOpen, label: "Learn", path: "/learn" },
      { icon: ClipboardList, label: "Quiz", path: "/quiz" },
      { icon: Dumbbell, label: "Practice", path: "/practice" },
    ],
  },
  {
    label: "Progress",
    items: [
      { icon: Trophy, label: "Leaderboard", path: "/leaderboard" },
      { icon: Users, label: "Community", path: "/community" },
      { icon: History, label: "History", path: "/history" },
    ],
  },
  {
    label: "Tools",
    items: [
      { icon: Sparkles, label: "AI Tutor", path: "/chat", variant: "ai" },
    ],
  },
  {
    label: "Account",
    items: [
      { icon: User, label: "Profile", path: "/profile" },
    ],
  },
];

/** Flat list, kept for backwards compatibility */
export const allNavItems: NavItem[] = sidebarGroups.flatMap((g) => g.items);
export const desktopNavItems = allNavItems;
export const mobileNavItems = primaryNavItems;
