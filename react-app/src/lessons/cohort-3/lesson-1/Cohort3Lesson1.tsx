import PresentationShell from '../../../components/PresentationShell'
import type { SlideProps } from '../../../components/PresentationShell'
import type { ComponentType } from 'react'

import Slide01Title from './slides/Slide01Title'
import Slide02Plan from './slides/Slide02Plan'
import Slide03Monetization from './slides/Slide03Monetization'
import Slide04Freelance from './slides/Slide04Freelance'
import Slide05Hire from './slides/Slide05Hire'
import Slide06Templates from './slides/Slide06Templates'
import Slide07SaaS from './slides/Slide07SaaS'
import Slide08Niche from './slides/Slide08Niche'
import Slide09CaseVPN from './slides/Slide09CaseVPN'
import Slide10CaseDenis from './slides/Slide10CaseDenis'
import Slide11Perplexity from './slides/Slide11Perplexity'
import Slide12Miro from './slides/Slide12Miro'
import Slide13MicroSaaS from './slides/Slide13MicroSaaS'
import Slide13bErrorCost from './slides/Slide13bErrorCost'
import Slide13cBrowserAgents from './slides/Slide13cBrowserAgents'
import Slide14Tools from './slides/Slide14Tools'
import Slide15Homework from './slides/Slide15Homework'

const slides: ComponentType<SlideProps>[] = [
  Slide01Title,
  Slide02Plan,
  Slide03Monetization,
  Slide04Freelance,
  Slide05Hire,
  Slide06Templates,
  Slide07SaaS,
  Slide08Niche,
  Slide09CaseVPN,
  Slide10CaseDenis,
  Slide11Perplexity,
  Slide12Miro,
  Slide13MicroSaaS,
  Slide14Tools,
  Slide13cBrowserAgents,
  Slide13bErrorCost,
  Slide15Homework,
]

export default function Cohort3Lesson1Page() {
  return <PresentationShell slides={slides} />
}
