import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide10CaseDenis({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">10</span>
      <h2 className="reveal">Кейс: Денис</h2>
      <p className="subtitle reveal">Почему его SaaS хотели купить за 600к?</p>
      <p className="reveal" style={{ marginBottom: '1rem' }}>
        <a href="https://t.me/vibe_coding/382" target="_blank" rel="noopener noreferrer">📎 t.me/vibe_coding/382</a>
      </p>
      <ul className="content-list stagger-list">
        <li>Делал для себя</li>
        <li>Повторил функционал популярного сервиса</li>
        <li>Добавил в него AI-фичи</li>
        <li>Пошёл общаться с теми, кто тоже в его теме</li>
        <li>За подобные сервисы платят 10к в месяц, и он знает как дотянуться до своей аудитории</li>
      </ul>
    </>
  )
}
