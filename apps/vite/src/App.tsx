import { Button, IconSpinner } from '@monorepo-boilerplate/ui'
import { useFetchWithCache } from '@monorepo-boilerplate/utils'
import { Client, GET_PATHS } from '@monorepo-boilerplate/api'
import { useState } from 'react'

export default function Default() {
  const client = new Client()
  const [willFetchUser, setWillFetchUser] = useState(false)

  const { data, loading } = useFetchWithCache(
    [GET_PATHS.getUsers, willFetchUser],
    () => {
      if (!willFetchUser) {
        return undefined
      }

      return client.getUsers()
    },
  )

  return (
    <div className="flex flex-col justify-center items-center space-y-6 py-12">
      <h1 className="text-4xl text-red-500 font-bold">ViteJS App</h1>
      <Button appearance="primary" onClick={() => setWillFetchUser(true)}>
        Boop to fetch users
      </Button>
      <div className="text-center">
        Make sure NextJS App is also running because it's hosting the API.
      </div>
      <pre className="p-4 rounded bg-gray-300 w-[36rem] h-[30rem] overflow-auto">
        {!willFetchUser ? (
          'No data.'
        ) : loading ? (
          <IconSpinner />
        ) : (
          JSON.stringify(data, undefined, 2)
        )}
      </pre>
    </div>
  )
}
