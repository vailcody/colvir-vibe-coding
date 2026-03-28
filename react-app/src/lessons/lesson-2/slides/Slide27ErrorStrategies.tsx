import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide27ErrorStrategies({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">26</span>
      <h2 className="reveal">Когда агент ломает</h2>
      <p className="subtitle reveal" style={{ marginBottom: '1rem' }}>Стратегии выхода из тупика</p>
      <div className="strategy-grid">
        <div className="strategy-card">
          <span className="strategy-icon">🔄</span>
          <h3>Зацикливание</h3>
          <p>Агент исправляет ошибку и создаёт новую. Решение: остановить, описать проблему заново, дать контекст ошибки явно.</p>
        </div>
        <div className="strategy-card">
          <span className="strategy-icon">⏪</span>
          <h3>Checkpoint / Restore</h3>
          <p>Cursor сохраняет состояние после каждого шага. Откатитесь к рабочему состоянию и попробуйте другой подход.</p>
        </div>
        <div className="strategy-card">
          <span className="strategy-icon">🧹</span>
          <h3>Чистый контекст</h3>
          <p>Если чат слишком длинный — начните новый. Скопируйте только суть проблемы. Свежий взгляд = свежий результат.</p>
        </div>
        <div className="strategy-card">
          <span className="strategy-icon">🧠</span>
          <h3>Человек в цепи</h3>
          <p>Не давайте агенту бесконтрольно менять код. Ревью каждого diff, approve по частям. Вы — архитектор, AI — исполнитель.</p>
        </div>
      </div>
    </>
  )
}
