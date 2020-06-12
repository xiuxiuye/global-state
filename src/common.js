import { store as iceStore } from '@ice/stark-data'

const COMMON_GLOBAL_STATE = 'GLOBAL_MESSAGE'

function init (mark, data) {
  mark = mark || COMMON_GLOBAL_STATE
  iceStore.set(mark, data)
}

function send (mark, data) {
  mark = mark || COMMON_GLOBAL_STATE
  iceStore.set(mark, data)
}

function receive (mark, callback) {
  if (typeof callback !== 'function') {
    console.error(`Error from common receive method. The callback must be a function!`)
    return
  }
  mark = mark || COMMON_GLOBAL_STATE
  iceStore.on(mark, callback, true)
}

function close (mark, callback) {
  mark = mark || COMMON_GLOBAL_STATE
  iceStore.off(mark, callback)
}

export { init, send, receive, close }
