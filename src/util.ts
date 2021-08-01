import Openmagicline from "openmagicline"

interface LocalStored {
  gym: string
  username: string
  password: string
  token: Openmagicline["cookies"]
}

export function ls<L extends keyof LocalStored>(key: L): LocalStored[L] | null
export function ls<L extends keyof LocalStored>(key: L, value: LocalStored[L]): void
export function ls<L extends keyof LocalStored>(
  key: L,
  value?: LocalStored[L]
): LocalStored[L] | null {
  return value !== undefined
    ? localStorage.setItem(`mg-${key}`, JSON.stringify(value))
    : JSON.parse(localStorage.getItem(`mg-${key}`) as string)
}
