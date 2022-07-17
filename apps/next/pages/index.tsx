import { Button, IconSpinner } from '@monorepo-boilerplate/ui'
import { useFetchWithCache } from '@monorepo-boilerplate/utils'
import { Client, GET_PATHS } from '@monorepo-boilerplate/api'
import { useDisclosure } from '@dwarvesf/react-hooks'

export default function Default() {
  const client = new Client()
  const { isOpen: willFetchUser, onOpen: triggerFetchUser } = useDisclosure()

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
      <h1 className="text-4xl text-red-500 font-bold">NextJS App</h1>
      <Button appearance="primary" onClick={() => triggerFetchUser()}>
        Boop to fetch users
      </Button>
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
