<template>
  <router-view></router-view>
</template>

<script setup lang="ts">
import type Openmagicline from "openmagicline"
import type { OMGL } from "openmagicline"
import type { FrontendSocket } from "$/socket"

import { io } from "socket.io-client"
import { onBeforeUnmount, provide, ref } from "vue"
import { ls } from "@/util"

const development = process.env.NODE_ENV === "development"
const socketConnected = ref(false)
const _socket = development ? io(`http://${location.hostname}:9865`) : io("", { path: "" })
const socket = _socket as FrontendSocket

// @ts-ignore purely for manual testing
window.socket = socket

const gym = ls("gym")
if (!gym) throw Error("no gym found")

const testToken = (token: Openmagicline["cookies"]) => {
  return new Promise<boolean>(res => socket.emit("authenticate", gym, token, res))
}
const getToken = (config: Required<OMGL.Config>) => {
  return new Promise<Openmagicline["cookies"]>(res => {
    socket.emit("getToken", config, cookies => {
      if (!cookies) throw Error("no cookies returned from server")
      ls("token", cookies)
      res(cookies)
    })
  })
}

const login = async () => {
  const username = ls("username")
  const password = ls("password")
  if (!username || !password) throw Error("username and password need to be provided")

  const storedToken = ls("token")
  if (storedToken && (await testToken(storedToken))) return

  await getToken({ gym, username, password })
}

socket.on("disconnect", () => (socketConnected.value = false))
socket.on("connect", () => {
  socketConnected.value = true

  try {
    login()
  } catch (e) {
    console.error(e)
    alert(e)
  }
})

provide("socket", socket)
provide("socketConnected", socketConnected)

provide("authenticated", new Promise(res => {}))

onBeforeUnmount(() => socket.close())
</script>

<style lang="scss">
html,
body,
#app {
  height: 100%;
  width: 100%;
  overflow: hidden;
}

* {
  user-select: none;
}

input,
button {
  outline: none;

  &:focus {
    border: 1px solid black;
  }
}
</style>
