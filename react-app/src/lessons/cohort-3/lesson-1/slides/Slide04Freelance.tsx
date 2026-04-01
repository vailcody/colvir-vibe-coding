import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide04Freelance({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">04</span>
      <h2 className="reveal">Лайфхаки фриланса и заказной разработки</h2>
      <div className="reveal" style={{ marginBottom: '1.5rem' }}>
        <h3 style={{ marginBottom: '0.75rem' }}>Лайфхаки</h3>
        <ul className="content-list stagger-list">
          <li>Вести TG/Threads, показывать процесс работы (кейс Инги)</li>
          <li>Ходить на конфы и говорить, что занимаешься AI разработкой (кейс Виктора)</li>
          <li>Сделать 3–5 проектов в портфолио для друзей, собрать отзывы</li>
          <li>Искать заказы в платных и бесплатных сообществах</li>
          <li>Сегментироваться по типу продукта или нише</li>
        </ul>
      </div>

    </>
  )
}
