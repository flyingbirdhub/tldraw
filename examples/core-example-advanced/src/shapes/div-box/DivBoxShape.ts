import type { TLShape } from '@tldraw/core'

/**
 * 传给Indicator的参数类型
 */
export interface DivBoxShape extends TLShape {
  type: 'divBox'
  size: number[]
}
