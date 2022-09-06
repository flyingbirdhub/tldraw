import type { CustomShapeUtil } from './CustomShapeUtil'
import { ArrowShape, ArrowUtil } from './arrow'
import { BoxShape, BoxUtil } from './box'
import { DivBoxUtil } from './div-box'
import { PencilShape, PencilUtil } from './pencil'
import { StackUtil } from './stack'

export * from './arrow'
export * from './pencil'
export * from './box'

export type Shape = BoxShape | ArrowShape | PencilShape

export const shapeUtils = {
  box: new BoxUtil(),
  arrow: new ArrowUtil(),
  pencil: new PencilUtil(),
  divBox: new DivBoxUtil(),
  stack: new StackUtil(),
}

export const getShapeUtils = <T extends Shape>(shape: T | T['type']) => {
  if (typeof shape === 'string') return shapeUtils[shape] as unknown as CustomShapeUtil<T>
  return shapeUtils[shape.type] as unknown as CustomShapeUtil<T>
}
