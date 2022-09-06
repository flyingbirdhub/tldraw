import { observer } from 'mobx-react-lite'
import * as React from 'react'

type MyProps = {
  camera: { point: number[]; zoom: number }
  children: React.ReactNode
}

export const Overlay = observer<MyProps>(function Overlay({ camera: { zoom, point }, children }) {
  const l = 2.5 / zoom
  return (
    <svg className="tl-overlay">
      <defs>
        <g id="tl-snap-point">
          <path
            className="tl-snap-point"
            d={`M ${-l},${-l} L ${l},${l} M ${-l},${l} L ${l},${-l}`}
          />
        </g>
      </defs>
      {/* 通过children渲染辅助线的地方 */}
      <g transform={`scale(${zoom}) translate(${point})`}>{children}</g>
    </svg>
  )
})
