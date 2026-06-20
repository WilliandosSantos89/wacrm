import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message
  if (typeof error === 'string') return error
  if (error && typeof error === 'object') {
    const err = error as Record<string, unknown>
    const message = typeof err.message === 'string' ? err.message : undefined
    const details = typeof err.details === 'string' ? err.details : undefined
    const hint = typeof err.hint === 'string' ? err.hint : undefined
    const code = err.code ? String(err.code) : undefined

    if (message) {
      const parts = [message]
      if (details) parts.push(details)
      if (hint) parts.push(hint)
      if (code) parts.push(`code=${code}`)
      return parts.join(' • ')
    }

    try {
      return JSON.stringify(error, Object.getOwnPropertyNames(error), 2)
    } catch {
      return String(error)
    }
  }

  return String(error)
}
