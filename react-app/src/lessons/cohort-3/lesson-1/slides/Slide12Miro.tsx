import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide12Miro({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">12</span>
      <h2 className="reveal">Miro: Исследование и проектирование</h2>
      <p className="reveal" style={{ marginBottom: '1rem' }}>
        <a href="https://t.me/vibe_coding/387" target="_blank" rel="noopener noreferrer">📎 t.me/vibe_coding/387</a>
      </p>
      <p className="reveal" style={{ marginBottom: '0.75rem' }}>Miro — ваше пространство для визуального анализа:</p>
      <ul className="content-list stagger-list" style={{ marginBottom: '1.25rem' }}>
        <li>Скриншоты путей конкурентов: фиксируем каждый шаг пользователя</li>
        <li>Разбор «хорошо/плохо»: где конкуренты перегружают пользователя?</li>
        <li>Сборка референсов: интерфейсные решения, которые вдохновляют</li>
      </ul>
      <div className="reveal" style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '8px', padding: '0.75rem 1rem' }}>
        <strong>Источники для вдохновения:</strong> Dribbble, Behance, Mobbin, Pinterest
      </div>
    </>
  )
}
