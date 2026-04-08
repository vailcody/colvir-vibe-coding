import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide26Breakage({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">25</span>
      <h2 className="reveal">Когда агент ломает</h2>
      <p className="subtitle reveal">Стратегии выхода из тупика</p>
      <div className="steps">
        <div className="step">
          <span className="step-number">🔄</span>
          <span className="step-text"><strong>Зацикливание</strong></span>
          <p>Агент исправляет ошибку и создаёт новую. Решение: остановить, описать проблему заново, дать контекст ошибки явно.</p>
        </div>
        <div className="step">
          <span className="step-number">⏪</span>
          <span className="step-text"><strong>Checkpoint / Restore</strong></span>
          <p>Cursor сохраняет состояние после каждого шага. Откатитесь к рабочему состоянию и попробуйте другой подход.</p>
        </div>
        <div className="step">
          <span className="step-number">🧹</span>
          <span className="step-text"><strong>Чистый контекст</strong></span>
          <p>Если чат слишком длинный — начните новый. Скопируйте только суть проблемы. Свежий взгляд = свежий результат.</p>
        </div>
        <div className="step">
          <span className="step-number">🧠</span>
          <span className="step-text"><strong>Человек в цепи</strong></span>
          <p>Не давайте агенту бесконтрольно менять код. Ревью каждого diff, approve по частям. Вы — архитектор, AI — исполнитель.</p>
        </div>
      </div>
    </>
  )
}
