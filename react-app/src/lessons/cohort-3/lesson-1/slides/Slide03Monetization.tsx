import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide03Monetization({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">03</span>
      <h2 className="reveal">Способы заработка вайб-кодера</h2>
      <p className="reveal" style={{ marginBottom: '1rem' }}>
        <a href="https://t.me/vibe_coding/429" target="_blank" rel="noopener noreferrer">📎 t.me/vibe_coding/429</a>
      </p>
      <ul className="content-list stagger-list">
        <li>💼 <strong>Фриланс / Заказная разработка:</strong> легко начать</li>
        <li>🏢 <strong>Найм:</strong> переход в штат на роль AI-разработчика</li>
        <li>🛍️ <strong>Шаблоны:</strong> продажа шаблонов на маркетплейсах</li>
        <li>🚀 <strong>Свой SaaS:</strong> создание актива, приносящего пассивный доход</li>
        <li>🎓 <strong>Обучение:</strong> индивидуально или в группе. B2B, B2C</li>
      </ul>
    </>
  )
}
