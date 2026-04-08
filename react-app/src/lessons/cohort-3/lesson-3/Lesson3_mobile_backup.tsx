import PresentationShell from '../../../components/PresentationShell'
import type { SlideProps } from '../../../components/PresentationShell'
import type { ComponentType } from 'react'

import Slide01Title from './slides/Slide01Title'
import Slide02Plan from './slides/Slide02Plan'
import Slide03Approaches from './slides/Slide03Approaches'
import Slide04WhyExpo from './slides/Slide04WhyExpo'
import Slide08FrameworksMap from './slides/Slide08FrameworksMap'
import Slide06Project from './slides/Slide06Project'
import Slide07Prompt from './slides/Slide07Prompt'
import Slide10BackendVsMobile from './slides/Slide10BackendVsMobile'
import Slide11Mistral from './slides/Slide11Mistral'
import Slide12ExpoGo from './slides/Slide12ExpoGo'

const slides: ComponentType<SlideProps>[] = [
  Slide01Title,       // 1. Заголовок: Занятие 2
  Slide02Plan,        // 2. План занятия
  Slide03Approaches,  // 3. Подходы к мобилке
  Slide04WhyExpo,     // 4. Почему Expo + правило бэкенда
  Slide08FrameworksMap, // 5. Карта фреймворков (вместо инструментов)
  Slide06Project,     // 6. Проект: голосовые заметки
  Slide07Prompt,      // 7. Промт для Rork
  Slide10BackendVsMobile, // 8. Что куда класть
  Slide11Mistral,     // 9. Mistral: схема + почему
  Slide12ExpoGo,      // 10. Expo Go: запуск на телефоне
]

export default function Cohort3Lesson2Page() {
  return <PresentationShell slides={slides} />
}
