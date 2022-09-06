import { TLShapeUtil } from '@tldraw/core'
import * as React from 'react'
import type { StackShape } from './StackShape'

export const StackIndicator = TLShapeUtil.Indicator<StackShape>(({ shape }) => {
  return (
    <rect
      pointerEvents="none"
      width={shape.size[0]}
      height={shape.size[1]}
      fill="none"
      stroke="tl-selectedStroke"
      strokeWidth={1}
      rx={4}
    />
  )
})
