import type { LinkProps } from '@tanstack/react-router'
import {
  CodeXml,
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
  { label: 'About', icon: Info, to: '/about' },
  { label: 'Projects', icon: Folder, to: '/projects' },
  { label: 'Skills', icon: Sparkles, to: '/skills' },
  { label: 'Achievements', icon: Trophy, to: '/achievements' },
  { label: 'Code', icon: CodeXml, to: '/code' },
]
