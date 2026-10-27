import { Link } from '@tanstack/react-router'
import { LocaleSwitcher } from '#/components/locale-switcher'
import { m } from '#/paraglide/messages'

export function Header() {
  return (
    <header className="flex h-14 shrink-0 items-center justify-between border-b px-4">
      <Link to="/resume" className="text-lg font-semibold">
        {m.app_name()}
      </Link>
      <LocaleSwitcher />
    </header>
  )
}
