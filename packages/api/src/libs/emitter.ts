import mitt from 'mitt'

export const EVENTS = {
  API_ERROR: 'API_ERROR',
}

export const emitter = mitt()
