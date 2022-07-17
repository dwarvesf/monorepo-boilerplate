import type { NextApiRequest, NextApiResponse } from 'next'
import { User } from '@monorepo-boilerplate/api'
import Cors from 'cors'

// Initializing the cors middleware
const cors = Cors({
  methods: ['GET', 'HEAD'],
})

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req: NextApiRequest, res: NextApiResponse, fn: any) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}

export default async function getUsers(
  req: NextApiRequest,
  res: NextApiResponse<User[]>,
) {
  // Run the middleware
  await runMiddleware(req, res, cors)

  setTimeout(() => {
    res.status(200).json([
      {
        id: 1,
        name: 'Jane Cooper',
        avatar:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
        email: 'jane.cooper@example.com',
        title: 'Regional Paradigm Technician',
        department: 'Optimization',
        status: 'active',
        role: 'Admin',
      },
      {
        id: 2,
        name: 'Cody Fisher',
        avatar:
          'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
        email: 'cody.fisher@example.com',
        title: 'Product Directive Officer',
        department: 'Intranet',
        status: 'active',
        role: 'Owner',
      },
      {
        id: 3,
        name: 'Esther Howard',
        avatar:
          'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
        email: 'esther.howard@example.com',
        title: 'Forward Response Developer',
        department: 'Directives',
        status: 'active',
        role: 'Member',
      },
      {
        id: 4,
        name: 'Jenny Wilson',
        avatar:
          'https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
        email: 'jenny.wilson@example.com',
        title: 'Central Security Manager',
        department: 'Program',
        status: 'active',
        role: 'Member',
      },
      {
        id: 5,
        name: 'Kristin Watson',
        avatar:
          'https://images.unsplash.com/photo-1532417344469-368f9ae6d187?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
        email: 'kristin.watson@example.com',
        title: 'Lead Implementation Liaison',
        department: 'Mobility',
        status: 'active',
        role: 'Admin',
      },
      {
        id: 6,
        name: 'Cameron Williamson',
        avatar:
          'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
        email: 'cameron.williamson@example.com',
        title: 'Internal Application Engineer',
        department: 'Security',
        status: 'active',
        role: 'Member',
      },
    ])
  }, 2000)
}
