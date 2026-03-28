import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide10Reasons({}: SlideProps) {
  return (
    <div className="slide-reasons" style={{ alignItems: 'flex-start', width: '100%' }}>
      <span className="slide-number reveal">—</span>
      <h2 className="reveal">Предпосылки к развитию</h2>

      <h3 className="reveal reasons-subtitle">Внутренние факторы</h3>
      <div className="reasons-grid reveal">
        <div className="reason-card">
          <h4>Устали от рутины</h4>
          <p>За 15 лет кодинга устаёшь от рутины, хочется больше творчества, больше влияния на продукт. Пока несколько месяцев пилишь стартап, энергии на выход на рынок не остаётся.</p>
        </div>
        <div className="reason-card">
          <h4>Выгорели из-за нагрузки</h4>
          <p>Выгорал пару раз за карьеру. В такие моменты хочется, чтобы кто-то писал код за тебя. Ты даже готов помогать ему если надо, но у самого ресурса нет, а бизнесу уже нужен результат.</p>
        </div>
        <div className="reason-card">
          <h4>Хочет быть лучше</h4>
          <p>Многие айтишники мучаются синдромом самозванца. Всегда будут те, кто лучше тебя. Вайб-кодинг даёт ощущение сокращения разрыва с такими ребятами.</p>
        </div>
      </div>

      <h3 className="reveal reasons-subtitle">Внешние факторы</h3>
      <div className="reasons-grid reveal">
        <div className="reason-card reason-external">
          <h4>Мозг стремится к экономии энергии</h4>
          <p>Люди готовы платить за эту экономию, предпочитают здесь и сейчас. Вайб-кодинг предлагает эту экономию. Люди от неё не откажутся.</p>
        </div>
        <div className="reason-card reason-external">
          <h4>Бизнес платит за результат</h4>
          <p>Бизнес платит не за красивый код, а за работающий продукт, который окупает затраты. Даже в крупном бигтехе уже около 30% кода в среднем пишется ИИ-агентами.</p>
        </div>
        <div className="reason-card reason-external">
          <h4>Не можешь победить — возглавь</h4>
          <p>Развитие ИИ уже не откатить, оно будет проникать во все сферы. Стоять на месте — опасно, хейтить — бессмысленно. Нужно адаптироваться.</p>
        </div>
      </div>
    </div>
  )
}
