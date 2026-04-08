import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide18Plan({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">17</span>
      <h2 className="reveal">Режим: Plan</h2>
      <p className="subtitle reveal">Агент декомпозирует задачу. Ты ревьюишь и правишь план.</p>
      <div className="code-block reveal">
        <p>// Промпт для Plan mode — верхнеуровневый</p>
        <p>Оживи прототип. Сейчас данные замоканы. Нужно:</p>
        <p>- Бэкенд с реальной базой данных</p>
        <p>- Интеграция с Dify API для генерации тест-кейсов</p>
        <p>- Фронтенд работает с реальными данными вместо моков</p>
      </div>
      <p className="reveal" style={{ marginTop: '1.5rem' }}>Три строки. Остальное Plan сам разложит. Потом → <strong>Build Plan</strong></p>
    </>
  )
}
