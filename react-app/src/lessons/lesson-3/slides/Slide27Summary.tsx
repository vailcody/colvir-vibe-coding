import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide27Summary({}: SlideProps) {
  return (
    <>
      <div className="geo-line" style={{ width: 300, height: 3, top: '20%', right: '10%' }} />
      <div className="geo-line" style={{ width: 200, height: 3, bottom: '25%', left: '8%' }} />
      <span className="slide-number reveal">26</span>
      <h2 className="reveal" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', textAlign: 'center' }}>Спасибо!</h2>
      <p className="subtitle reveal" style={{ marginTop: '1rem', textAlign: 'center' }}>Вопросы?</p>
    </>
  )
}
