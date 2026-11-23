import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '#/components/ui/navigation-menu'
import { Link, useMatchRoute } from '@tanstack/react-router'
import { bottomNavItems, type BottomNavItem } from './items'
import { Separator } from '../ui/separator'
import LocaleSwitch from '../locale-switch'

export function BottomNavbar() {
  const matchRoute = useMatchRoute()

  const isActive = (item: BottomNavItem) =>
    Boolean(matchRoute({ to: item.to, fuzzy: item.to !== '/' }))

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 px-6 pb-[max(1rem,env(safe-area-inset-bottom))] flex justify-center">
      <NavigationMenu
        aria-label="Main Nav Bar"
        className="pointer-events-auto w-full flex-none border border-border rounded-3xl py-2 px-4 bg-surface-2/90 shadow-lg shadow-black/30 backdrop-blur-md"
      >
        <NavigationMenuList className="w-full justify-center gap-1">
          {bottomNavItems.map((item) => (
            <NavigationMenuItem key={item.label}>
              <NavigationMenuLink
                active={isActive(item)}
                aria-label={item.label}
                title={item.label}
                className="size-12 justify-center rounded-2xl border border-transparent p-0 text-muted-foreground hover:bg-transparent hover:text-foreground focus:bg-transparent data-active:border-teal/50 data-active:bg-teal/15 data-active:text-teal data-active:shadow-[0_0_16px_-4px_var(--color-teal)] data-active:hover:bg-teal/15 data-active:focus:bg-teal/15 [&_svg:not([class*='size-'])]:size-6"
                render={<Link to={item.to} />}
              >
                <item.icon strokeWidth={1.75} />
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
          <NavigationMenuItem className="px-2">
            <Separator orientation="vertical" className="size-10" />
          </NavigationMenuItem>
          <NavigationMenuItem>
            <LocaleSwitch />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}
