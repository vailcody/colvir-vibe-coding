import type { SlideProps } from '../../../../components/PresentationShell'

const BASE = import.meta.env.BASE_URL

export default function Slide08FrameworksMap({}: SlideProps) {
  return (
    <div className="slide-map" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
      <span className="slide-number reveal">08</span>
      <h2 className="reveal">Карта фреймворков</h2>
      <div className="map-container reveal">
        <img
          src={`${BASE}cohort-3/lesson-2/frameworks-map.jpg`}
          alt="Карта фреймворков вайб-кодера"
          className="map-img"
        />
      </div>
      <p className="reveal" style={{ marginTop: '1rem', color: 'var(--text-secondary)', fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)' }}>
        FastAPI → наш выбор для AI/транскрибации · React Native → мобилка
      </p>
    </div>
  )
}
