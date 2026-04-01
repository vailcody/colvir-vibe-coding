import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide08Niche({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">08</span>
      <h2 className="reveal">Как выбрать нишу?</h2>
      <ul className="content-list stagger-list">
        <li>Плохой рынок убивает даже отличный продукт. Хороший рынок «вытаскивает» продукт. <em style={{ opacity: 0.6 }}>— Marc Andreessen</em></li>
        <li>Маленькая группа, которая <strong>ОЧЕНЬ</strong> хочет — лучше большой, которая «неплохо бы». <em style={{ opacity: 0.6 }}>(Facebook начинал только с Гарварда. Microsoft — только с владельцев Altair)</em></li>
        <li>Ваш «секрет» — это глубокое понимание своей профессиональной ниши. <em style={{ opacity: 0.6 }}>— Peter Thiel</em></li>
        <li>Начинай там, где ты можешь быть <strong>первым</strong>. Не с «рынка CRM» — а с «CRM для фитнес-тренеров с онлайн-расписанием».</li>
        <li>✅ Я могу найти и поговорить с 10 такими людьми <strong>на этой неделе</strong></li>
        <li>✅ Я понимаю, кто ещё решает эту проблему</li>
      </ul>
      <p className="reveal" style={{ marginTop: '1.5rem', opacity: 0.6, fontSize: '0.9rem' }}>
        <a href="https://t.me/vibe_coding/491" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
          t.me/vibe_coding/491
        </a>
      </p>
    </>
  )
}
