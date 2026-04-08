import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide29Next({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">28</span>
      <h2 className="reveal">На занятии 3</h2>
      <ul className="content-list stagger-list">
        <li><strong>Spec-Driven Development</strong> — приложения через спецификации. Сначала описываем — потом генерируем. Масштабируемый подход.</li>
        <li><strong>Свой MCP-сервер</strong> — создаём собственные инструменты для AI-агента. Подключаем внутренние API компании.</li>
        <li><strong>Feedback Loop</strong> — AI Code Review, статический анализ, автотесты. Агент пишет код → проверяет себя → исправляет.</li>
        <li><strong>Голосовой ввод</strong> — вайб-кодинг голосом. Диктуешь задачу — получаешь код. Hands-free разработка.</li>
      </ul>
    </>
  )
}
