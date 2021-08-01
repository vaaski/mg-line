import type { Server, Socket } from "socket.io"
import type { Socket as SocketClient } from "socket.io-client"
import type Openmagicline, { OMGL, Magicline } from "openmagicline"

type Callback<A = void> = (x: A) => void

export interface FrontendEmits {
  getToken: (credentials: OMGL.Config, cb: Callback<Openmagicline["cookies"] | null>) => void
  authenticate: (gym: string, cookies: Openmagicline["cookies"], cb: Callback<boolean>) => void

  "checkin.list": (
    options: OMGL.Checkin.ListOptions,
    cb: Callback<Magicline.Checkin.CheckinList>
  ) => void
}

export interface BackendEmits {
  checkin: () => void
}

export interface ContextClient extends Socket<FrontendEmits, BackendEmits> {
  openmagicline?: Openmagicline
}

export type BackendClient = Socket<BackendEmits, FrontendEmits>
export type BackendSocket = Server<FrontendEmits, BackendEmits>

export type FrontendSocket = SocketClient<BackendSocket, FrontendEmits>
