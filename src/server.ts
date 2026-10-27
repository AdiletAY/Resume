import { paraglideMiddleware } from './paraglide/server'
import handler from '@tanstack/react-start/server-entry'

// Resolves the locale per request so getLocale() is correct during SSR
export default {
  fetch(req: Request): Promise<Response> {
    return paraglideMiddleware(req, () => handler.fetch(req))
  },
}
