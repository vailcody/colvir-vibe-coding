import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide30Lesson3Preview({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">29</span>
      <h2 className="reveal">На занятии 3</h2>
      <div className="card-grid">
        <div className="card highlighted">
          <h3>Spec-Driven Development</h3>
          <p>Приложения через спецификации. Сначала описываем — потом генерируем. Масштабируемый подход.</p>
        </div>
        <div className="card">
          <h3>Свой MCP-сервер</h3>
          <p>Создаём собственные инструменты для AI-агента. Подключаем внутренние API компании.</p>
        </div>
        <div className="card">
          <h3>Feedback Loop</h3>
          <p>AI Code Review, статический анализ, автотесты. Агент пишет код → проверяет себя → исправляет.</p>
        </div>
        <div className="card">
          <h3>Голосовой ввод</h3>
          <p>Вайб-кодинг голосом. Диктуешь задачу — получаешь код. Hands-free разработка.</p>
        </div>
      </div>
    </>
  )
}
