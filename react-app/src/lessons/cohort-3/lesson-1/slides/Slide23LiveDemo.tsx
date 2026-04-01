import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide23LiveDemo({}: SlideProps) {
  return (
    <div className="center-slide" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', width: '100%' }}>
      <div className="geo-square" style={{ position: 'absolute', width: 200, height: 200, bottom: '5%', left: '5%', opacity: 0.08, background: 'var(--accent)', zIndex: -1 }} />
      <div className="geo-line" style={{ position: 'absolute', width: 3, height: 200, top: '10%', right: '10%', background: 'var(--text-primary)', zIndex: -1 }} />
      <span className="slide-number reveal" style={{ position: 'absolute', top: 'var(--slide-padding)', left: 'var(--slide-padding)' }}>12</span>
      <p className="subtitle reveal" style={{ marginBottom: '0.5rem' }}>Live Demo</p>
      <div className="dramatic reveal">Поехали!</div>
    </div>
  )
}
