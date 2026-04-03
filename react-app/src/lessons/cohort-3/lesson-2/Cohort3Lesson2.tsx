import PresentationShell from '../../../components/PresentationShell'
import type { SlideProps } from '../../../components/PresentationShell'
import type { ComponentType } from 'react'

import Slide01Title from './slides/Slide01Title'
import Slide02Plan from './slides/Slide02Plan'
import Slide03Approaches from './slides/Slide03Approaches'
import Slide04WhyExpo from './slides/Slide04WhyExpo'
import Slide05Tools from './slides/Slide05Tools'
import Slide06Project from './slides/Slide06Project'
import Slide07Prompt from './slides/Slide07Prompt'
import Slide08FrameworksMap from './slides/Slide08FrameworksMap'
import Slide09WhenWhat from './slides/Slide09WhenWhat'
import Slide10BackendVsMobile from './slides/Slide10BackendVsMobile'
import Slide11Mistral from './slides/Slide11Mistral'
import Slide12ExpoGo from './slides/Slide12ExpoGo'
import Slide13Stores from './slides/Slide13Stores'
import Slide14Homework from './slides/Slide14Homework'

const slides: ComponentType<SlideProps>[] = [
  Slide01Title,
  Slide02Plan,
  Slide03Approaches,
  Slide04WhyExpo,
  Slide05Tools,
  Slide06Project,
  Slide07Prompt,
  Slide08FrameworksMap,
  Slide09WhenWhat,
  Slide10BackendVsMobile,
  Slide11Mistral,
  Slide12ExpoGo,
  Slide13Stores,
  Slide14Homework,
]

export default function Cohort3Lesson2Page() {
  return <PresentationShell slides={slides} />
}
