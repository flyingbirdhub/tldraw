import type { TLShape } from '@tldraw/core'

/**
 * 传给Indicator的参数类型
 */
export interface StackShape extends TLShape {
  type: 'stack'
  size: number[]
}
