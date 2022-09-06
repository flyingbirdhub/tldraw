import { TLBoundsCorner, TLPointerInfo } from '@tldraw/core'
import { shapeUtils } from 'shapes'
import type { Action } from 'state/constants'
import { mutables } from 'state/mutables'

export const createStackShape: Action = (data, payload: TLPointerInfo) => {
  const shape = shapeUtils.stack.getShape({
    parentId: 'page1',
    point: mutables.currentPoint,
    size: [100, 100],
    // 在page中的序列号
    childIndex: Object.values(data.page.shapes).length,
  })

  data.page.shapes[shape.id] = shape
  data.pageState.selectedIds = [shape.id]

  mutables.pointedBoundsHandleId = TLBoundsCorner.BottomRight
}
