import { PropsWithChildren } from 'react'
import classNames from 'classnames'
import { forwardRefWithAs } from '@monorepo-boilerplate/utils'
import { IconSpinner } from '../icons/components/IconSpinner'
import { BaseButton, BaseButtonProps } from '../BaseButton'
import { ButtonAppearance } from '../BaseButton/types'
import { getAppearanceButtonStyles } from '../BaseButton/utils'
import * as Icons from '../icons'
import { Icon } from '../Icon'

export interface ButtonProps extends PropsWithChildren<BaseButtonProps> {
  appearance?: ButtonAppearance
  fullWidth?: boolean
  iconPosition?: 'left' | 'right'
  loading?: boolean
  disabled?: boolean
  icon?: keyof typeof Icons
  asLabel?: boolean
}

function getButtonStyles({
  size = 'md',
  fullWidth = false,
  loading,
  appearance,
}: Omit<ButtonProps, 'children'>) {
  const classNames = ['relative']

  if (fullWidth) {
    classNames.push('w-full flex')
  }

  if (loading) {
    classNames.push('cursor-default')
  }

  if (size === 'lg') {
    classNames.push('text-base')
  } else if (size === 'md') {
    classNames.push('text-sm')
  } else {
    classNames.push('text-xs')
  }

  if (appearance !== 'link') {
    if (size === 'lg') {
      classNames.push('py-4 px-6 px-8')
    } else if (size === 'md') {
      classNames.push('px-5 py-3 ')
    } else {
      classNames.push('py-2 px-4 px-5')
    }
  }

  return classNames
}

function getIconStyles({ size = 'md' }: Pick<ButtonProps, 'size'>) {
  const classNames = []

  if (size === 'lg') {
    classNames.push('w-6 h-6')
  } else if (size === 'md') {
    classNames.push('w-5 h-5')
  } else {
    classNames.push('w-4 h-4')
  }

  return classNames
}

export const Button = forwardRefWithAs<'button', ButtonProps>(
  (
    {
      size = 'md',
      appearance = 'default',
      icon,
      iconPosition = 'left',
      children: originChildren,
      loading = false,
      asLabel = false,
      className,
      fullWidth = false,
      ...props
    },
    ref,
  ) => {
    let children = originChildren

    if (loading) {
      children = (
        <>
          <span className="absolute inset-0 flex items-center justify-center">
            <IconSpinner />
          </span>
          <span className="text-transparent">{children}</span>
        </>
      )
    } else if (icon) {
      const iconClassNames = classNames('mr-1.5', getIconStyles({ size }))

      children = (
        <>
          {iconPosition === 'left' && (
            <Icon name={icon} className={iconClassNames} />
          )}
          <span>{children}</span>
          {iconPosition === 'right' && (
            <Icon name={icon} className={iconClassNames} />
          )}
        </>
      )
    }

    const passedInProps = { ...props, fullWidth, size, appearance, asLabel }

    return (
      <BaseButton
        ref={ref}
        {...props}
        className={classNames(
          className,
          getButtonStyles(passedInProps),
          getAppearanceButtonStyles(passedInProps),
        )}
      >
        {children}
      </BaseButton>
    )
  },
)
