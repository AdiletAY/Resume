import { getLocale, setLocale, locales } from '#/paraglide/runtime'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '#/components/ui/select'
import { m } from '#/paraglide/messages.js'

import { Languages } from 'lucide-react'

const items = locales.map((locale) => ({
  value: locale,
  label: locale.toUpperCase(),
}))

export default function LocaleSwitch() {
  return (
    <Select
      items={items}
      value={getLocale()}
      onValueChange={(locale) => locale && setLocale(locale)}
    >
      <SelectTrigger aria-label={m.language_label()}>
        <Languages />
        <SelectValue />
      </SelectTrigger>
      <SelectContent side="top" alignItemWithTrigger={false}>
        {items.map((item) => (
          <SelectItem key={item.value} value={item.value}>
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
