import { Link } from 'react-router-dom'

const venues = [
  {
    to: '/course',
    title: 'Курс',
    description: 'Полный курс по вайб-кодингу: от прототипа до деплоя',
    meta: '3 занятия',
  },
  {
    to: '/cohort-3',
    title: '3-й поток',
    description: 'Вайб-кодинг: 3-й поток курса',
    meta: '2026',
  },
  {
    to: '/central-university',
    title: 'Центральный университет',
    description: 'Вайб-кодинг: от идеи до продукта',
    meta: '30 марта 2026',
  },
]

export default function Landing() {
  return (
    <div className="landing-page">
      <h1>Вайб-кодинг</h1>
      <p className="landing-subtitle">Константин Чуйков · 2026</p>

      <div className="lessons-grid">
        {venues.map(v => (
          <Link key={v.to} to={v.to} className="lesson-card">
            <h2>{v.title}</h2>
            <p>{v.description}</p>
            <div className="hours">{v.meta}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}
