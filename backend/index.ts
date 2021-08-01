console.log("starting mg-line backend")
import { createServer } from "http"
import { Server } from "socket.io"

import debug from "debug"
import adapter from "./adapter"
export const _log = debug("mg-line")
const log = _log.extend("index")
log("debug enabled")

const port = Number(process.env.BACKEND_PORT || 9865)

const httpServer = createServer()
const io = new Server(httpServer, {
  cors: { origin: "*" },
})

io.on("connection", client => {
  log("client connected", client.id)
  client.on("disconnect", () => log("client disconnected", client.id))
})

adapter(io, _log)

httpServer
  .listen(port)
  .on("listening", () => console.log("mg-line server running"))
  .on("error", console.error)
