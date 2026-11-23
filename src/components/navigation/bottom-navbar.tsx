import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '#/components/ui/navigation-menu'
import { Link, useMatchRoute } from '@tanstack/react-router'
import { bottomNavItems, type BottomNavItem } from './items'
import { cn } from '#/lib/utils'
import { Ellipsis, Languages } from 'lucide-react'
import { m } from '#/paraglide/messages.js'
import { getLocale, setLocale, locales } from '#/paraglide/runtime'
import { Button } from '#/components/ui/button'

const PHONE_VISIBLE_COUNT = 3

export function BottomNavbar() {
  const matchRoute = useMatchRoute()

  const isActive = (item: BottomNavItem) =>
    Boolean(matchRoute({ to: item.to, fuzzy: item.to !== '/' }))

  const overflowbottomNavItems = bottomNavItems.slice(PHONE_VISIBLE_COUNT)
  const overflowActive = overflowbottomNavItems.some(isActive)

  const currentLocale = getLocale()
  const localeItems = locales.map((locale) => ({
    value: locale,
    label: locale.toUpperCase(),
  }))

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 px-6 pb-[max(1rem,env(safe-area-inset-bottom))] flex justify-center">
      <NavigationMenu
        align="center"
        side="top"
        aria-label="Main Nav Bar"
        className="pointer-events-auto w-full flex-none border border-border rounded-3xl py-2 px-4 bg-surface-2/90 shadow-lg shadow-black/30 backdrop-blur-md"
      >
        <NavigationMenuList className="w-full justify-center gap-1">
          {bottomNavItems.map((item, index) => (
            <NavigationMenuItem
              key={item.label}
              className={cn(index >= PHONE_VISIBLE_COUNT && 'max-sm:hidden')}
            >
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

          {overflowbottomNavItems.length > 0 && (
            <NavigationMenuItem className="sm:hidden">
              <NavigationMenuTrigger
                aria-label="More"
                title="More"
                data-active={overflowActive || undefined}
                className={cn(
                  "size-12 justify-center rounded-2xl border border-transparent p-0 text-muted-foreground hover:bg-transparent hover:text-foreground focus:bg-transparent data-active:border-teal/50 data-active:bg-teal/15 data-active:text-teal data-active:shadow-[0_0_16px_-4px_var(--color-teal)] data-active:hover:bg-teal/15 data-active:focus:bg-teal/15 [&_svg:not([class*='size-'])]:size-6",
                  'data-popup-open:border-teal/50 data-popup-open:bg-teal/15 data-popup-open:text-teal data-popup-open:shadow-[0_0_16px_-4px_var(--color-teal)] data-popup-open:hover:bg-teal/15 data-popup-open:focus:bg-teal/15 [&>svg:last-child]:hidden',
                )}
              >
                <Ellipsis strokeWidth={1.75} />
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-48 gap-0.5">
                  {overflowbottomNavItems.map((item) => (
                    <li key={item.label}>
                      <NavigationMenuLink
                        active={isActive(item)}
                        className="data-active:text-teal"
                        render={<Link to={item.to} />}
                      >
                        <item.icon strokeWidth={1.75} />
                        {item.label}
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          )}

          <NavigationMenuItem>
            <NavigationMenuTrigger
              aria-label={m.language_label()}
              title={m.language_label()}
              className={cn(
                "size-12 justify-center rounded-2xl border border-transparent p-0 text-muted-foreground hover:bg-transparent hover:text-foreground focus:bg-transparent data-active:border-teal/50 data-active:bg-teal/15 data-active:text-teal data-active:shadow-[0_0_16px_-4px_var(--color-teal)] data-active:hover:bg-teal/15 data-active:focus:bg-teal/15 [&_svg:not([class*='size-'])]:size-6",
                'data-popup-open:border-teal/50 data-popup-open:bg-teal/15 data-popup-open:text-teal data-popup-open:shadow-[0_0_16px_-4px_var(--color-teal)] data-popup-open:hover:bg-teal/15 data-popup-open:focus:bg-teal/15 [&>svg:last-child]:hidden',
              )}
            >
              <Languages strokeWidth={1.75} />
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-48 gap-0.5">
                {localeItems.map((item) => (
                  <li key={item.value}>
                    <Button
                      variant="ghost"
                      aria-pressed={item.value === currentLocale}
                      className="w-full justify-start aria-pressed:text-teal"
                      onClick={() => setLocale(item.value)}
                    >
                      {item.label}
                    </Button>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}
