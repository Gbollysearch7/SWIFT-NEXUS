import {
  forwardRef,
  isValidElement,
  cloneElement,
  type ButtonHTMLAttributes,
  type ReactElement
} from 'react'
import { cn } from '@/lib/utils'

type ButtonVariant = 'default' | 'outline' | 'ghost' | 'secondary'
type ButtonSize = 'default' | 'sm' | 'lg'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  asChild?: boolean
}

const variantClasses: Record<ButtonVariant, string> = {
  default: 'bg-accent text-dark hover:bg-accent-dark hover:text-white',
  outline: 'border border-accent/60 text-accent hover:bg-accent/15 hover:text-neutral-lighter',
  ghost: 'text-neutral-light hover:bg-white/10',
  secondary: 'bg-navy text-neutral-lighter hover:bg-navy-700'
}

const sizeClasses: Record<ButtonSize, string> = {
  default: 'px-6 py-3 text-base',
  sm: 'px-4 py-2 text-sm',
  lg: 'px-8 py-4 text-lg'
}

const baseClass =
  'inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent focus-visible:ring-offset-black'

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'default',
      size = 'default',
      asChild = false,
      type,
      children,
      ...rest
    },
    ref
  ) => {
    const composedClass = cn(baseClass, variantClasses[variant], sizeClasses[size], className)

    if (asChild && isValidElement(children)) {
      const child = children as ReactElement<Record<string, unknown> & { className?: unknown }>
      const childClassName =
        typeof child.props.className === 'string' ? child.props.className : undefined

      return cloneElement(child, {
        ...rest,
        className: cn(composedClass, childClassName)
      })
    }

    return (
      <button
        ref={ref}
        type={type ?? 'button'}
        className={composedClass}
        {...rest}
      >
        {children}
      </button>
    )
  }
)
Button.displayName = 'Button'

export { Button }
