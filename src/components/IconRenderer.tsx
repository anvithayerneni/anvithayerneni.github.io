import React from "react";
import {
  BrainCircuit,
  Cpu,
  Layers,
  BarChart3,
  CheckCircle2,
  Globe,
  Terminal,
  HeartPulse,
  BadgeDollarSign,
  Truck,
  ShoppingCart,
  Code2,
  Server,
  Database,
  ArrowRight,
  ExternalLink,
  FileText,
  Sparkles,
  ShieldCheck,
  Zap,
  Activity,
  Box,
  Compass,
  Workflow,
  Search,
  Filter,
  Check,
  ChevronRight,
  ChevronDown,
  Clock,
  MapPin,
  Mail,
  LucideIcon
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

interface IconRendererProps {
  name: string;
  className?: string;
}

const ICON_MAP: Record<string, LucideIcon> = {
  BrainCircuit,
  Cpu,
  Layers,
  BarChart3,
  CheckCircle2,
  Globe,
  Terminal,
  HeartPulse,
  BadgeDollarSign,
  Truck,
  ShoppingCart,
  Code2,
  Server,
  Database,
  ArrowRight,
  ExternalLink,
  FileText,
  Sparkles,
  ShieldCheck,
  Zap,
  Activity,
  Box,
  Compass,
  Workflow,
  Search,
  Filter,
  Check,
  ChevronRight,
  ChevronDown,
  Clock,
  MapPin,
  Mail,
};

export function IconRenderer({ name, className = "w-5 h-5" }: IconRendererProps) {
  if (name === "Github" || name === "github") {
    return <GithubIcon className={className} />;
  }
  if (name === "Linkedin" || name === "linkedin") {
    return <LinkedinIcon className={className} />;
  }
  const IconComponent = ICON_MAP[name] || Code2;
  return <IconComponent className={className} />;
}
