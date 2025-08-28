'use client'

import { ReactLenis } from 'lenis/react'
import type { ReactNode } from 'react'

function LenisProvider({ children }: { children: ReactNode }) {
  const options = {
    lerp: 0.1,
    duration: 1.5,
    smoothTouch: true,
  }

  return (
    <ReactLenis root options={options}>
      {children}
    </ReactLenis>
  )
}

export default LenisProvider
