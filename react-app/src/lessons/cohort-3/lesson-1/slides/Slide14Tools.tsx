import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide14Tools({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">14</span>
      <h2 className="reveal">Инструменты для прототипирования</h2>
      <p className="reveal" style={{ marginBottom: '1rem', opacity: 0.8 }}>Где собираем первую версию:</p>
      <div className="card-row reveal" style={{ marginBottom: '1.25rem' }}>
        <div className="cost-card">
          <div className="cost-level">V0.dev</div>
          <div className="cost-label">Next.js-friendly, хостит на Vercel, пушит на Github, $5 в месяц подарок</div>
        </div>
        <div className="cost-card">
          <div className="cost-level">Replit Agent</div>
          <div className="cost-label">Мощная агентская система (Full-stack), кастомный фронт и бэк</div>
        </div>
        <div className="cost-card">
          <div className="cost-level">Harvi.pro</div>
          <div className="cost-label">Для работы из РФ, оплата рублями, супер выгодные тарифы на топовые модели</div>
        </div>
      </div>
      <div className="reveal" style={{ marginBottom: '1rem' }}>
        <h3 style={{ marginBottom: '0.5rem' }}>Для мобилок:</h3>
        <ul className="content-list">
          <li><strong>Rork.com</strong> — собирает React Native под iOS и Android</li>
          <li><strong>Superappp.com</strong> — кросс-платформенные и нативные приложения</li>
        </ul>
      </div>
      <p className="reveal" style={{ opacity: 0.7, fontStyle: 'italic' }}>
        Используем подход Design-first: только имитируем функциональность.
      </p>
    </>
  )
}
