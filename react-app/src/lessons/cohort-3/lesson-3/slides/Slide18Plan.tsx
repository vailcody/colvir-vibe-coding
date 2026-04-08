import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide18Plan({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">17</span>
      <h2 className="reveal">Режим: Plan</h2>
      <p className="subtitle reveal">Агент декомпозирует задачу. Ты ревьюишь и правишь план.</p>
      <div className="code-block reveal">
        <p>// Промпт для Plan mode — верхнеуровневый</p>
        <p>Сделай авторизацию. Сейчас все данные публичные. Нужно:</p>
        <p>- Бэкенд с реальной базой данных</p>
        <p>- JWT-токены для аутентификации</p>
        <p>- Фронтенд работает с реальными данными</p>
      </div>
      <p className="reveal" style={{ marginTop: '1.5rem' }}>Три строки. Остальное Plan сам разложит. Потом → <strong>Build Plan</strong></p>
    </>
  )
}
