import { styled } from '@stitches/react'
import { HTMLContainer, TLShapeUtil } from '@tldraw/core'
import * as React from 'react'
import type { StackShape } from './StackShape'

const Wrapper = styled('div', {
  pointerEvents: 'all',
  position: 'relative',
  fontFamily: 'sans-serif',
  fontSize: '2em',
  height: '100%',
  width: '100%',
  borderRadius: '3px',
  perspective: '800px',
  overflow: 'hidden',
  p: {
    userSelect: 'none',
  },
  img: {
    userSelect: 'none',
  },
  variants: {
    isGhost: {
      false: { opacity: 1 },
      true: { transition: 'opacity .2s', opacity: 0.3 },
    },
    isFilled: {
      true: {},
      false: {},
    },
    isDarkMode: {
      true: {},
      false: {},
    },
  },
  compoundVariants: [
    {
      isFilled: true,
      isDarkMode: true,
      css: {
        boxShadow:
          '2px 3px 12px -2px rgba(0,0,0,.3), 1px 1px 4px rgba(0,0,0,.3), 1px 1px 2px rgba(0,0,0,.3)',
      },
    },
    {
      isFilled: true,
      isDarkMode: false,
      css: {
        boxShadow:
          '2px 3px 12px -2px rgba(0,0,0,.2), 1px 1px 4px rgba(0,0,0,.16),  1px 1px 2px rgba(0,0,0,.16)',
      },
    },
  ],
})

export const StackComponent = TLShapeUtil.Component<StackShape, HTMLDivElement>(
  ({ shape, events, children }, ref) => {
    const { size } = shape

    const rWrapper = React.useRef<HTMLDivElement>(null)
    React.useLayoutEffect(() => {
      const wrapper = rWrapper.current
      if (!wrapper) return
      const [width, height] = size
      wrapper.style.width = `${width}px`
      wrapper.style.height = `${height}px`
    }, [size])

    return (
      <HTMLContainer ref={ref} {...events}>
        <Wrapper ref={rWrapper}>
          <div
            style={{
              display: 'flex',
            }}
          >
            {children ? children : '没有子节点'}
          </div>
        </Wrapper>
      </HTMLContainer>
    )
  }
)
