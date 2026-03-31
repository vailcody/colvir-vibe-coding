import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide28Thanks({}: SlideProps) {
  return (
    <>
      <div className="geo-square" style={{ width: 100, height: 100, top: '10%', left: '5%', opacity: 0.15 }} />
      <div className="geo-line" style={{ width: 180, height: 3, bottom: '20%', left: '10%' }} />
      <div className="geo-outline" style={{ width: 70, height: 70, bottom: '15%', right: '8%' }} />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
        <h2 className="reveal" style={{ fontSize: '3rem' }}>Спасибо!</h2>
        <p className="subtitle reveal">Вопросы?</p>
      </div>
    </>
  )
}
