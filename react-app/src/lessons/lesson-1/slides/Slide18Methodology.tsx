import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide18Methodology({}: SlideProps) {
  return (
    <>
      <div className="geo-square" style={{ position: 'absolute', width: 50, height: 50, top: '10%', right: '10%', opacity: 0.15, background: 'var(--accent)', zIndex: -1 }} />
      <span className="slide-number reveal">08</span>
      <h2 className="reveal">Методология: сверху вниз</h2>
      <div className="steps">
        <div className="step">
          <span className="step-number">01</span>
          <span className="step-text">Подготовка спецификации</span>
        </div>
        <div className="step">
          <span className="step-number">02</span>
          <span className="step-text">Прототип в браузерном агенте</span>
        </div>
        <div className="step">
          <span className="step-number">03</span>
          <span className="step-text">Скачиваем код → оживляем локально</span>
        </div>
      </div>
    </>
  )
}
