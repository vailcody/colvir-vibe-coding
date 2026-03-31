import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide15GoldenWorkflow({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">15</span>
      <h2 className="reveal">Золотой workflow</h2>
      <div className="steps">
        <div className="step reveal">
          <span className="step-number">01</span>
          <span className="step-text">Ask: «Как устроена авторизация в моём проекте?»</span>
          <span className="step-desc">Собираем контекст, понимаем текущую реализацию</span>
        </div>
        <div className="step reveal">
          <span className="step-number">02</span>
          <span className="step-text">Plan: «Переделай на NextAuth»</span>
          <span className="step-desc">Дорогая модель строит план, мы проверяем</span>
        </div>
        <div className="step reveal">
          <span className="step-number">03</span>
          <span className="step-text">Agent: Выполнение плана</span>
          <span className="step-desc">Дешёвая модель идёт по плану, не выдумывает</span>
        </div>
        <div className="step reveal">
          <span className="step-number">04</span>
          <span className="step-text">Проверка + коммит</span>
          <span className="step-desc">Тестируем результат, фиксируем в git</span>
        </div>
      </div>
    </>
  )
}
