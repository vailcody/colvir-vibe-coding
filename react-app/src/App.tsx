import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import VenuePage from './pages/VenuePage'
import Lesson1Page from './lessons/lesson-1/Lesson1'
import Lesson2Page from './lessons/lesson-2/Lesson2'
import Lesson3Page from './lessons/lesson-3/Lesson3'
import CentralUniversityPage from './lessons/central-university/CentralUniversity'
import CentralUniversity2Page from './lessons/central-university-2/CentralUniversity2'
import Cohort3Lesson1Page from './lessons/cohort-3/lesson-1/Cohort3Lesson1'

const courseLessons = [
  { to: '/lesson-1', title: 'Занятие 1', description: 'Создаём прототип', meta: '1 час · 19 марта' },
  { to: '/lesson-2', title: 'Занятие 2', description: 'Оживляем прототип в Cursor', meta: '2 часа · 24 марта' },
  { to: '/lesson-3', title: 'Занятие 3', description: 'SDD + Свой MCP-сервер', meta: '2 часа · 26 марта' },
]

const centralUniversityLessons = [
  { to: '/central-university/lecture', title: 'Лекция', description: 'Вайб-кодинг: от идеи до продукта', meta: '1.5 часа · 30 марта' },
  { to: '/central-university/lecture-2', title: 'Лекция 2', description: 'От прототипа к продукту', meta: '2 часа · 31 марта' },
]

const cohort3Lessons = [
  { to: '/cohort-3/lesson-1', title: 'Занятие 1', description: 'Создаём прототип', meta: '3-й поток' },
]

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/course" element={<VenuePage title="Курс" lessons={courseLessons} />} />
      <Route path="/central-university" element={<VenuePage title="Центральный университет" lessons={centralUniversityLessons} />} />
      <Route path="/cohort-3" element={<VenuePage title="3-й поток" lessons={cohort3Lessons} />} />
      <Route path="/lesson-1" element={<Lesson1Page />} />
      <Route path="/lesson-2" element={<Lesson2Page />} />
      <Route path="/lesson-3" element={<Lesson3Page />} />
      <Route path="/central-university/lecture" element={<CentralUniversityPage />} />
      <Route path="/central-university/lecture-2" element={<CentralUniversity2Page />} />
      <Route path="/cohort-3/lesson-1" element={<Cohort3Lesson1Page />} />
    </Routes>
  )
}
