import React from 'react'
import * as Icons from '../icons'

export const Icon = ({
  name,
  ...props
}: { name: keyof typeof Icons } & React.SVGProps<any>) => {
  const Component = Icons[name]

  return <Component {...props} />
}
