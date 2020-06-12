import { store as iceStore } from '@ice/stark-data'

const GLOBAL_MESSAGE = 'GLOBAL_MESSAGE'

function init (data, mark) {
  mark = mark || GLOBAL_MESSAGE
  iceStore.set(mark, data)
}

function send (data, mark) {
  mark = mark || GLOBAL_MESSAGE
  iceStore.set(mark, data)
}

function receive (callback, mark) {
  if (typeof callback !== 'function') {
    console.error(`Error from common receive method. The callback must be a function!`)
    return
  }
  mark = mark || GLOBAL_MESSAGE
  iceStore.on(mark, callback, true)
}

function close (callback, mark) {
  mark = mark || GLOBAL_MESSAGE
  iceStore.off(mark, callback)
}

export { init, send, receive, close }
