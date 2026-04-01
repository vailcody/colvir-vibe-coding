import PresentationShell from '../../../components/PresentationShell'
import type { SlideProps } from '../../../components/PresentationShell'
import type { ComponentType } from 'react'

import Slide01Title from './slides/Slide01Title'
import Slide02Author from './slides/Slide02Author'
import Slide03Plan from './slides/Slide03Plan'
import Slide04Tweet from './slides/Slide04Tweet'
import Slide05PhraseVizhu from './slides/Slide05PhraseVizhu'
import Slide06PhraseGovoryu from './slides/Slide06PhraseGovoryu'
import Slide07PhraseZapuskayu from './slides/Slide07PhraseZapuskayu'
import Slide08PhraseWorks from './slides/Slide08PhraseWorks'
import Slide09Meme from './slides/Slide09Meme'
import Slide10Reasons from './slides/Slide10Reasons'
import Slide11SimplEnd from './slides/Slide11SimplEnd'
import Slide12Evolution from './slides/Slide12Evolution'
import Slide13Available from './slides/Slide13Available'
import Slide14Possibilities from './slides/Slide14Possibilities'
import Slide15Limitations from './slides/Slide15Limitations'
import Slide16Map from './slides/Slide16Map'
import Slide17ErrorCost from './slides/Slide17ErrorCost'
import Slide18Methodology from './slides/Slide18Methodology'
import Slide19BrowserAgents from './slides/Slide19BrowserAgents'
import Slide20Harvi from './slides/Slide20Harvi'
import Slide21Compare from './slides/Slide21Compare'
import Slide22Practice from './slides/Slide22Practice'
import Slide23LiveDemo from './slides/Slide23LiveDemo'
import Slide24WhatNext from './slides/Slide24WhatNext'
import Slide25Summary from './slides/Slide25Summary'

const slides: ComponentType<SlideProps>[] = [
  Slide01Title,
  Slide02Author,
  Slide03Plan,
  Slide04Tweet,
  Slide05PhraseVizhu,
  Slide06PhraseGovoryu,
  Slide07PhraseZapuskayu,
  Slide08PhraseWorks,
  Slide09Meme,
  Slide10Reasons,
  Slide11SimplEnd,
  Slide12Evolution,
  Slide13Available,
  Slide14Possibilities,
  Slide15Limitations,
  Slide16Map,
  Slide17ErrorCost,
  Slide18Methodology,
  Slide19BrowserAgents,
  Slide20Harvi,
  Slide21Compare,
  Slide22Practice,
  Slide23LiveDemo,
  Slide24WhatNext,
  Slide25Summary,
]

export default function Cohort3Lesson1Page() {
  return <PresentationShell slides={slides} />
}
