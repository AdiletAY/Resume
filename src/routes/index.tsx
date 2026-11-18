import { createFileRoute } from '@tanstack/react-router'
import LocaleSwitch from '#/components/locale-switch'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="p-8">
      <LocaleSwitch />
    </div>
  )
}
