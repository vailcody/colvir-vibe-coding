import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide13LiveDemo({}: SlideProps) {
  return (
    <>
      <div className="geo-line" style={{ width: 250, height: 3, bottom: '15%', left: '5%' }} />
      <span className="slide-number reveal">12</span>
      <p className="subtitle reveal" style={{ marginBottom: '0.5rem', textAlign: 'center' }}>Практика</p>
      <div className="dramatic reveal" style={{ fontSize: 'clamp(2rem, 8vw, 6rem)', textAlign: 'center' }}>Live Demo</div>
      <p className="subtitle reveal" style={{ marginTop: '1rem', textAlign: 'center' }}>MCP-сервер для тест-кейсов через OpenSpec + Cursor</p>
    </>
  )
}
