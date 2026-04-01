import type { SlideProps } from '../../../../components/PresentationShell'

const BASE = import.meta.env.BASE_URL

export default function Slide16Map({}: SlideProps) {
  return (
    <div className="slide-map" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
      <span className="slide-number reveal">06</span>
      <h2 className="reveal">Карта инструментов</h2>
      <div className="map-container reveal">
        <img src={`${BASE}lesson-1/vibe-coding-map.jpg`} alt="Vibe Coding Map — инструменты, MCP, модели, языки" className="map-img" />
      </div>
    </div>
  )
}
