import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide03Recap({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">02</span>
      <h2 className="reveal">Где мы остановились</h2>
      <div className="steps">
        <div className="step">
          <span className="step-number">✓</span>
          <div>
            <span className="step-text">Прототип в браузерном агенте</span>
            <p className="step-desc">Кликабельный, но ничего не работает</p>
          </div>
        </div>
        <div className="step">
          <span className="step-number">✓</span>
          <div>
            <span className="step-text">Скачали код и запустили локально</span>
            <p className="step-desc">npm install → npm run dev</p>
          </div>
        </div>
        <div className="step">
          <span className="step-number" style={{ color: 'var(--accent)' }}>→</span>
          <div>
            <span className="step-text">Оживляем!</span>
            <p className="step-desc">Подключаем AI-бэкенд, базу данных, реальную логику</p>
          </div>
        </div>
      </div>
    </>
  )
}
