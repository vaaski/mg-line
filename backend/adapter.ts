import type { BackendSocket, ContextClient } from "$/socket"
import { Debugger } from "debug"

import Openmagicline, { OMGL } from "openmagicline"

export default (io: BackendSocket, _log: Debugger): void => {
  const log = _log.extend("adapter")

  io.on("connect", (client: ContextClient) => {
    //! this can probably be simplified since every client has its own closure
    const getInstance = (socket: typeof client, config?: OMGL.Config) => {
      if (socket.openmagicline) return socket.openmagicline
      if (!config) throw Error("no config provided")
      socket.openmagicline = new Openmagicline(config)
      return socket.openmagicline
    }
    let magicSocket: ReturnType<Openmagicline["socket"]>
    const getSocket = async () => {
      if (!magicSocket) {
        // todo
        const defaultUnit = await getInstance(client).util.getDefaultUnitID()
        magicSocket = getInstance(client).socket(defaultUnit)
      }
      return magicSocket
    }

    client.on("getToken", async (config, reply) => {
      log("getToken")

      try {
        const { cookies } = await getInstance(client, config).login()
        reply(cookies)
      } catch {
        reply(null)
      }
    })

    client.on("authenticate", async (gym, cookies, reply) => {
      log("authenticate")

      try {
        await getInstance(client, { gym }).login(cookies)
        reply(true)
      } catch (error) {
        reply(false)
      }
    })

    client.on("checkin.list", async (options, reply) => {
      log("checkin.list", options)
      reply(await getInstance(client).checkin.list(options))
    })

    client.on("onCheckin", async () => {
      log("registering checkin handler")

      const socket = await getSocket()
      socket.onCheckin(() => {
        log("checkin event")
        client.emit("checkin")
      })
    })
  })
}
