import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide18PlanMode({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">17</span>
      <h2 className="reveal">Режим: Plan</h2>
      <p className="subtitle reveal" style={{ marginBottom: '1rem' }}>Агент декомпозирует задачу. Ты ревьюишь и правишь план.</p>
      <div className="code-block reveal">
        <span className="comment">{'// Промпт для Plan mode — верхнеуровневый'}</span><br /><br />
        {'Оживи прототип. Сейчас данные замоканы. Нужно:'}<br />
        {'- Бэкенд с реальной базой данных'}<br />
        {'- Интеграция с Dify API для генерации тест-кейсов'}<br />
        {'- Фронтенд работает с реальными данными вместо моков'}
      </div>
      <p className="subtitle reveal" style={{ marginTop: '1rem' }}>Три строки. Остальное Plan сам разложит. Потом → <strong>Build Plan</strong></p>
    </>
  )
}
