import PresentationShell from '../../../components/PresentationShell'
import type { SlideProps } from '../../../components/PresentationShell'
import type { ComponentType } from 'react'

import Slide01Title from './slides/Slide01Title'
import Slide02Plan from './slides/Slide02Plan'
import Slide03Block1Title from './slides/Slide03Block1Title'
import Slide04OldProcess from './slides/Slide04OldProcess'
import Slide05OldProblems from './slides/Slide05OldProblems'
import Slide06ScalableApproach from './slides/Slide06ScalableApproach'
import Slide07PublishWays from './slides/Slide07PublishWays'
import Slide07Block2Title from './slides/Slide07Block2Title'
import Slide08WhatIsDocker from './slides/Slide08WhatIsDocker'
import Slide09DockerConcepts from './slides/Slide09DockerConcepts'
import Slide10DockerLocal from './slides/Slide10DockerLocal'
import Slide11DockerAI from './slides/Slide11DockerAI'
import Slide12Block3Title from './slides/Slide12Block3Title'
import Slide13ServerSetup from './slides/Slide13ServerSetup'
import Slide14ServerSecurity from './slides/Slide14ServerSecurity'
import Slide15SSHKeys from './slides/Slide15SSHKeys'
import Slide16Dokploy from './slides/Slide16Dokploy'
import Slide17Summary from './slides/Slide17Summary'
import Slide18Homework from './slides/Slide18Homework'
import Slide19Closing from './slides/Slide19Closing'

const slides: ComponentType<SlideProps>[] = [
  Slide01Title,
  Slide02Plan,
  Slide03Block1Title,
  Slide04OldProcess,
  Slide05OldProblems,
  Slide06ScalableApproach,
  Slide07PublishWays,
  Slide07Block2Title,
  Slide08WhatIsDocker,
  Slide09DockerConcepts,
  Slide10DockerLocal,
  Slide11DockerAI,
  Slide12Block3Title,
  Slide13ServerSetup,
  Slide14ServerSecurity,
  Slide15SSHKeys,
  Slide16Dokploy,
  Slide17Summary,
  Slide18Homework,
  Slide19Closing,
]

export default function Cohort3Lesson5Page() {
  return <PresentationShell slides={slides} />
}