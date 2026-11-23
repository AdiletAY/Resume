import type { LinkProps } from '@tanstack/react-router'
import {
  Folder,
  House,
  Info,
  Sparkles,
  Trophy,
  type LucideIcon,
} from 'lucide-react'

export type BottomNavItem = {
  label: string
  icon: LucideIcon
  to: LinkProps['to']
}

export const bottomNavItems: BottomNavItem[] = [
  { label: 'Home', icon: House, to: '/' },
  { label: 'Skills', icon: Sparkles, to: '/' },
  { label: 'Projects', icon: Folder, to: '/' },
  { label: 'Achievements', icon: Trophy, to: '/' },
  { label: 'About', icon: Info, to: '/about' },
]
