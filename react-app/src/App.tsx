import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Lesson1Page from './lessons/lesson-1/Lesson1'
import Lesson2Page from './lessons/lesson-2/Lesson2'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/lesson-1" element={<Lesson1Page />} />
      <Route path="/lesson-2" element={<Lesson2Page />} />
    </Routes>
  )
}
