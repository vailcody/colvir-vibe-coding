import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide18Plan({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">17</span>
      <h2 className="reveal">Режим: Plan</h2>
      <p className="subtitle reveal" style={{ marginBottom: '1rem' }}>Агент декомпозирует задачу. Ты ревьюишь и правишь план.</p>
      <div className="code-block reveal">
        <span className="comment">{'// Промпт для Plan mode — верхнеуровневый'}</span><br /><br />
        {'Сделай авторизацию. Сейчас все данные публичные. Нужно:'}<br />
        {'- Бэкенд с реальной базой данных'}<br />
        {'- JWT-токены для аутентификации'}<br />
        {'- Фронтенд работает с реальными данными'}
      </div>
      <p className="subtitle reveal" style={{ marginTop: '1rem' }}>Три строки. Остальное Plan сам разложит. Потом → <strong>Build Plan</strong></p>
    </>
  )
}
