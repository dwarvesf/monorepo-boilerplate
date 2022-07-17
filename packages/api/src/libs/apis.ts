import { User } from '../types/schema'
import fetcher from './fetcher'

// keys for swr
export const GET_PATHS = {
  getUsers: '/users',
}

class Client {
  private baseUrl: string

  constructor(baseUrl = 'http://localhost:3000/api') {
    this.baseUrl = baseUrl
  }

  headers: HeadersInit = {
    'Content-Type': 'application/json',
  }

  getUsers() {
    return fetcher<User[]>(`${this.baseUrl}/users`, {
      headers: this.headers,
    })
  }
}

export { Client }
