import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide11GitBasics({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">11</span>
      <h2 className="reveal">Git: Основы</h2>
      <div className="card-grid">
        <div className="card highlighted">
          <h3>Инициализация</h3>
          <p>Source Control → Initialize Repository. Фиксируем начальную версию проекта.</p>
        </div>
        <div className="card">
          <h3>.gitignore</h3>
          <p>ОБЯЗАТЕЛЬНО исключить .env (ключи, пароли). Агент может помочь — но проверяйте!</p>
        </div>
        <div className="card">
          <h3>Первый коммит</h3>
          <p>Фиксируем рабочую версию. Generate Commit Message → Commit.</p>
        </div>
        <div className="card">
          <h3>Ветки</h3>
          <p>main = продакшн (стабильная). dev = разработка (эксперименты).</p>
        </div>
      </div>
    </>
  )
}
