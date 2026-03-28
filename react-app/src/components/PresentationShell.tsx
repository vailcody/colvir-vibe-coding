import { useEffect, useRef, useState, useCallback, type ComponentType } from 'react'

interface PresentationShellProps {
  slides: ComponentType<SlideProps>[]
}

export interface SlideProps {
  slideIndex: number
  isEven: boolean
}

export default function PresentationShell({ slides }: PresentationShellProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [hintVisible, setHintVisible] = useState(true)
  const slideRefs = useRef<(HTMLElement | null)[]>([])
  const totalSlides = slides.length

  // Set up scroll snap on html
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
    document.documentElement.style.scrollSnapType = 'y mandatory'
    document.documentElement.style.overflowX = 'hidden'
    return () => {
      document.documentElement.style.scrollBehavior = ''
      document.documentElement.style.scrollSnapType = ''
      document.documentElement.style.overflowX = ''
    }
  }, [])

  const goToSlide = useCallback((index: number) => {
    if (index < 0 || index >= totalSlides) return
    slideRefs.current[index]?.scrollIntoView({ behavior: 'smooth' })
  }, [totalSlides])

  // IntersectionObserver for .visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            const index = slideRefs.current.indexOf(entry.target as HTMLElement)
            if (index !== -1) setCurrentSlide(index)
          }
        })
      },
      { threshold: 0.4 }
    )
    slideRefs.current.forEach((el) => {
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [slides])

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowDown':
        case 'ArrowRight':
        case ' ':
          e.preventDefault()
          goToSlide(currentSlide + 1)
          break
        case 'ArrowUp':
        case 'ArrowLeft':
          e.preventDefault()
          goToSlide(currentSlide - 1)
          break
        case 'Home':
          e.preventDefault()
          goToSlide(0)
          break
        case 'End':
          e.preventDefault()
          goToSlide(totalSlides - 1)
          break
      }
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [currentSlide, goToSlide, totalSlides])

  // Touch support
  useEffect(() => {
    let startY = 0
    let startX = 0
    const onStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY
      startX = e.touches[0].clientX
    }
    const onEnd = (e: TouchEvent) => {
      const deltaY = startY - e.changedTouches[0].clientY
      const deltaX = startX - e.changedTouches[0].clientX
      if (Math.abs(deltaY) > Math.abs(deltaX) && Math.abs(deltaY) > 50) {
        goToSlide(deltaY > 0 ? currentSlide + 1 : currentSlide - 1)
      }
    }
    document.addEventListener('touchstart', onStart, { passive: true })
    document.addEventListener('touchend', onEnd, { passive: true })
    return () => {
      document.removeEventListener('touchstart', onStart)
      document.removeEventListener('touchend', onEnd)
    }
  }, [currentSlide, goToSlide])

  // Mouse wheel (debounced)
  useEffect(() => {
    let lastWheel = 0
    const handler = (e: WheelEvent) => {
      const now = Date.now()
      if (now - lastWheel < 800) return
      lastWheel = now
      if (e.deltaY > 20) goToSlide(currentSlide + 1)
      else if (e.deltaY < -20) goToSlide(currentSlide - 1)
    }
    document.addEventListener('wheel', handler, { passive: true })
    return () => document.removeEventListener('wheel', handler)
  }, [currentSlide, goToSlide])

  // Hide hint after first nav
  useEffect(() => {
    const hide = () => setHintVisible(false)
    document.addEventListener('keydown', hide, { once: true })
    document.addEventListener('touchstart', hide, { once: true })
    document.addEventListener('wheel', hide, { once: true })
    return () => {
      document.removeEventListener('keydown', hide)
      document.removeEventListener('touchstart', hide)
      document.removeEventListener('wheel', hide)
    }
  }, [])

  const progress = ((currentSlide + 1) / totalSlides) * 100

  return (
    <div className="presentation-shell">
      {/* Progress Bar */}
      <div className="progress-bar" style={{ width: `${progress}%` }} />

      {/* Nav Dots */}
      <nav className="nav-dots" aria-label="Навигация по слайдам">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`nav-dot${i === currentSlide ? ' active' : ''}`}
            aria-label={`Слайд ${i + 1}`}
            onClick={() => goToSlide(i)}
          />
        ))}
      </nav>

      {/* Keyboard Hint */}
      <div className={`keyboard-hint${hintVisible ? '' : ' hidden'}`}>
        Стрелки / пробел для навигации
      </div>

      {/* Slides */}
      {slides.map((SlideComponent, i) => (
        <section
          key={i}
          className={`slide${i % 2 === 1 ? ' slide-even' : ''}`}
          ref={(el) => { slideRefs.current[i] = el }}
        >
          {<SlideComponent slideIndex={i} isEven={i % 2 === 1} />}
        </section>
      ))}
    </div>
  )
}
