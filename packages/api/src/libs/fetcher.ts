import fetch from 'isomorphic-unfetch'
import { emitter, EVENTS } from './emitter'

export type FetcherError = Error & { response: Response }

export default async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit,
): Promise<JSON> {
  const res = await fetch(input, init)
  if (res.ok) {
    const contentType = res.headers.get('content-type')

    if (contentType && contentType.includes('application/json')) {
      return res.json()
    }

    // FIXME: There are cases where we need a text response (e.g. CSV export)
    // However trying to include the string return type might demand refactoring the whole
    // api flow, so let's ignore this first
    // @ts-ignore
    return res.text()
  }
  const error = new Error(res.statusText) as FetcherError
  const response = await res.json()
  error.response = response
  error.message = response.message

  emitter.emit(EVENTS.API_ERROR, {
    input,
    status: res.status,
    statusText: res.statusText,
    response: res,
  })

  return Promise.reject(error)
}
