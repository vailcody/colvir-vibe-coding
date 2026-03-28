import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide21Compare({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">—</span>
      <h2 className="reveal">Под капотом: как работают браузерные агенты</h2>
      <p className="reveal" style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(1rem, 1.6vw, 1.25rem)', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
        <strong style={{ color: 'var(--text-primary)' }}>Фреймворк</strong> — набор готовых компонентов и инструментов, которые не нужно писать с нуля
      </p>
      <div className="compare-table reveal">
        <div className="compare-header">
          <div className="compare-cell compare-label"></div>
          <div className="compare-cell compare-head">harvi.pro / v0 / Bolt</div>
          <div className="compare-cell compare-head">Replit</div>
        </div>
        <div className="compare-row">
          <div className="compare-cell compare-label">Фреймворк</div>
          <div className="compare-cell">Next.js — популярный, большое сообщество, легко найти решения</div>
          <div className="compare-cell">Собственный fullstack — фронт и бэк отдельно, менее переносимо</div>
        </div>
        <div className="compare-row">
          <div className="compare-cell compare-label">Среда</div>
          <div className="compare-cell">Веб-контейнеры — приложение работает прямо в браузере</div>
          <div className="compare-cell">Виртуальная машина — проект на сервере Replit</div>
        </div>
        <div className="compare-row">
          <div className="compare-cell compare-label">Деплой</div>
          <div className="compare-cell">Нужен внешний сервис (Vercel, Netlify и др.)</div>
          <div className="compare-cell">Встроенный деплой (Autoscale, Reserved VM)</div>
        </div>
      </div>
    </>
  )
}
