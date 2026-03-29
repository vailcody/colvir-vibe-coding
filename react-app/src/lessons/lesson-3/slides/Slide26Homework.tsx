import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide26Homework({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">25</span>
      <h2 className="reveal">Домашнее задание</h2>
      <div className="steps stagger-list">
        <div className="step">
          <span className="step-number">01</span>
          <div>
            <span className="step-text">Расширить MCP-сервер</span>
            <p className="step-desc">Добавить tools: list_test_cases, search_test_cases, get_statistics. Использовать OpenSpec для спеки.</p>
          </div>
        </div>
        <div className="step">
          <span className="step-number">02</span>
          <div>
            <span className="step-text">Подключить к Cursor</span>
            <p className="step-desc">Проверить что агент может работать с вашими tools. Скриншот в чат.</p>
          </div>
        </div>
        <div className="step">
          <span className="step-number">03</span>
          <div>
            <span className="step-text">Написать спеку для своей фичи</span>
            <p className="step-desc">requirements.md + design.md для любой фичи вашего проекта. Формат Kiro или OpenSpec.</p>
          </div>
        </div>
      </div>
    </>
  )
}
