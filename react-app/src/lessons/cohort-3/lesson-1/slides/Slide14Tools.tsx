import type { SlideProps } from '../../../../components/PresentationShell'

const BASE = import.meta.env.BASE_URL

export default function Slide14Tools({}: SlideProps) {
  return (
    <div className="slide-map" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
      <span className="slide-number reveal">14</span>
      <h2 className="reveal">Карта инструментов</h2>
      <div className="map-container reveal">
        <img src={`${BASE}cohort-3/lesson-1/vibe-coding-map.jpg`} alt="Vibe Coding Map — инструменты вайб-кодера" className="map-img" />
      </div>
    </div>
  )
}
