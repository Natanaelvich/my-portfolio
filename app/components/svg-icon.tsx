import type { LucideIcon } from "lucide-react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  Award,
  BookOpen,
  Bot,
  Brain,
  Building2,
  Calculator,
  CalendarCheck,
  Check,
  ChevronLeft,
  ChevronRight,
  Circle,
  Clock,
  Code2,
  Cog,
  Database,
  Download,
  Droplet,
  ExternalLink,
  FileText,
  Handshake,
  Home,
  Infinity,
  Loader2,
  Mail,
  MapPin,
  MessageCircle,
  Network,
  Printer,
  Search,
  Send,
  Server,
  Settings,
  Smartphone,
  Sparkles,
  TrendingUp,
  User,
  X,
} from "lucide-react";
import type { IconType } from "react-icons";
import {
  FaGithub,
  FaGoogle,
  FaHtml5,
  FaJs,
  FaLinkedin,
  FaMicrosoft,
  FaNodeJs,
  FaReact,
} from "react-icons/fa6";
import type { SVGProps } from "react";

type IconComponent = LucideIcon | IconType;

export type IconProps = SVGProps<SVGSVGElement> & {
  name: string;
  spin?: boolean;
};

const icons: Record<string, IconComponent> = {
  "fab fa-react": FaReact,
  "fab fa-node-js": FaNodeJs,
  "fab fa-js": FaJs,
  "fab fa-html5": FaHtml5,
  "fab fa-google": FaGoogle,
  "fab fa-microsoft": FaMicrosoft,
  "fab fa-github": FaGithub,
  "fab fa-linkedin": FaLinkedin,
  "fas fa-mobile-alt": Smartphone,
  "fas fa-robot": Bot,
  "fas fa-server": Server,
  "fas fa-database": Database,
  "fas fa-code": Code2,
  "fas fa-infinity": Infinity,
  "fas fa-brain": Brain,
  "fas fa-cogs": Settings,
  "fas fa-magic": Sparkles,
  "fas fa-search": Search,
  "fas fa-comments": MessageCircle,
  "fas fa-envelope": Mail,
  "fas fa-download": Download,
  "fas fa-circle": Circle,
  "fas fa-handshake": Handshake,
  "fas fa-chevron-right": ChevronRight,
  "fas fa-chevron-left": ChevronLeft,
  "fas fa-building": Building2,
  "fas fa-spinner": Loader2,
  "fas fa-paper-plane": Send,
  "fas fa-times": X,
  "fas fa-check": Check,
  "fas fa-arrow-up": ArrowUp,
  "fas fa-print": Printer,
  "fas fa-home": Home,
  "fas fa-file-alt": FileText,
  "fas fa-clock": Clock,
  "fas fa-user": User,
  "fas fa-arrow-right": ArrowRight,
  "fas fa-external-link-alt": ExternalLink,
  "fas fa-cog": Cog,
  "fas fa-arrow-left": ArrowLeft,
  "fas fa-map-marker-alt": MapPin,
  "fas fa-tint": Droplet,
  "fas fa-chart-line": TrendingUp,
  "fas fa-calculator": Calculator,
  "fas fa-sitemap": Network,
  "fas fa-calendar-check": CalendarCheck,
  "fas fa-book": BookOpen,
  "fas fa-certificate": Award,
};

function mergeClassName(...parts: Array<string | false | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export function Icon({ name, spin, className, ...props }: IconProps) {
  const Component = icons[name] ?? Circle;
  const isBrand = name.startsWith("fab ");
  const isStatusDot = name === "fas fa-circle";

  return (
    <Component
      aria-hidden
      focusable={false}
      className={mergeClassName(
        "portfolio-icon",
        isBrand && "portfolio-icon--brand",
        isStatusDot && "portfolio-icon--dot",
        spin && "icon-spin",
        className,
      )}
      {...(isStatusDot ? { fill: "currentColor" } : {})}
      {...props}
    />
  );
}
