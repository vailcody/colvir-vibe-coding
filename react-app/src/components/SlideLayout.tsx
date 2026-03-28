import type { ReactNode } from 'react'

interface SlideLayoutProps {
  slideNumber?: string
  children: ReactNode
}

export default function SlideLayout({ slideNumber, children }: SlideLayoutProps) {
  return (
    <>
      {slideNumber && <span className="slide-number reveal">{slideNumber}</span>}
      {children}
    </>
  )
}
