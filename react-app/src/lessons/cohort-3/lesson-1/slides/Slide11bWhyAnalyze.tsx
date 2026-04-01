import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide20WhyAnalyze({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">A1</span>
      <h2 className="reveal">Зачем анализировать конкурентов?</h2>
      <ul className="content-list stagger-list">
        <li><strong>Нет конкурентов — нет рынка.</strong> Идём туда, где уже есть спрос. Конкуренция — это доказательство, что люди готовы платить.</li>
        <li><strong>Узнаём, что уже работает</strong> — не изобретаем велосипед, берём лучшее и улучшаем.</li>
        <li><strong>Находим слабые места</strong> — чем недовольны пользователи конкурентов? Это и есть наша точка входа.</li>
        <li><strong>Понимаем ценообразование</strong> — сколько люди готовы платить, какие тарифы работают.</li>
        <li><strong>Экономим время</strong> — не тестируем гипотезы с нуля, опираемся на чужой опыт.</li>
      </ul>
    </>
  )
}
