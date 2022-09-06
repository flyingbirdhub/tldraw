import { observer } from 'mobx-react-lite'
import type { HTMLProps } from 'react'
import * as React from 'react'
import { usePosition } from '~hooks'
import type { TLBounds } from '~types'

interface ContainerProps extends HTMLProps<HTMLDivElement> {
  id?: string
  bounds: TLBounds
  rotation?: number
  isGhost?: boolean
  isSelected?: boolean
  children: React.ReactNode
}

export const Container = observer<ContainerProps>(function Container({
  id,
  bounds,
  rotation = 0,
  isGhost = false,
  isSelected = false,
  children,
  ...props
}) {
  const rPositioned = usePosition(bounds, rotation)

  /**
   * TODO：这些样式计算对于容器组件嵌套子组件场景并不合适
   * 容器中嵌套子组件的场景需要开发新的container
   */
  return (
    <div
      id={id}
      ref={rPositioned}
      className={`tl-positioned${isGhost ? ' tl-ghost' : ''}${
        isSelected ? ` tl-positioned-selected` : ''
      }`}
      aria-label="container"
      data-testid="container"
      {...props}
    >
      {children}
    </div>
  )
})
