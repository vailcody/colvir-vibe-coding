import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <div className="landing-page">
      <h1>Вайб-кодинг</h1>
      <p className="landing-subtitle">Константин Чуйков · 2026</p>
      <div className="lessons-grid">
        <Link to="/lesson-1" className="lesson-card">
          <h2>Занятие 1</h2>
          <p>Создаём прототип</p>
          <div className="hours">1 час · 19 марта</div>
        </Link>
        <Link to="/lesson-2" className="lesson-card">
          <h2>Занятие 2</h2>
          <p>Оживляем прототип в Cursor</p>
          <div className="hours">2 часа · 24 марта</div>
        </Link>
        <Link to="/lesson-3" className="lesson-card">
          <h2>Занятие 3</h2>
          <p>SDD + Свой MCP-сервер</p>
          <div className="hours">2 часа · 26 марта</div>
        </Link>
      </div>
    </div>
  )
}
