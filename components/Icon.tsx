import {
  Gamepad2,
  Gamepad,
  Joystick,
  Video,
  BarChart3,
  Cloud,
  PhoneCall,
  ClipboardCheck,
  HeartHandshake,
  Network,
  Paintbrush,
  Trophy,
  Baby,
  type LucideIcon,
} from "lucide-react";

const MAP: Record<string, LucideIcon> = {
  Gamepad2,
  Gamepad,
  Joystick,
  Video,
  BarChart3,
  Cloud,
  PhoneCall,
  ClipboardCheck,
  HeartHandshake,
  Network,
  Paintbrush,
  Trophy,
  Baby,
};

export default function Icon({
  name,
  size = 22,
  className,
  strokeWidth = 1.7,
}: {
  name: string;
  size?: number;
  className?: string;
  strokeWidth?: number;
}) {
  const Cmp = MAP[name] ?? Gamepad2;
  return <Cmp size={size} className={className} strokeWidth={strokeWidth} aria-hidden="true" />;
}
