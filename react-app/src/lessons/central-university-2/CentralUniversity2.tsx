import PresentationShell from '../../components/PresentationShell'
import type { SlideProps } from '../../components/PresentationShell'
import type { ComponentType } from 'react'

import Slide01Title from './slides/Slide01Title'
import Slide02Plan from './slides/Slide02Plan'
import Slide04PhraseScale from './slides/Slide04PhraseScale'
import Slide05OldWay from './slides/Slide05OldWay'
import Slide06NewWay from './slides/Slide06NewWay'
import Slide07CICD from './slides/Slide07CICD'
import Slide08Migrations from './slides/Slide08Migrations'
import Slide10PrototypeToCursor from './slides/Slide10PrototypeToCursor'
import Slide11GitBasics from './slides/Slide11GitBasics'
import Slide12BranchWorkflow from './slides/Slide12BranchWorkflow'
import Slide13PhraseModes from './slides/Slide13PhraseModes'
import Slide14Modes from './slides/Slide14Modes'
import Slide15GoldenWorkflow from './slides/Slide15GoldenWorkflow'
import Slide16PhraseMCP from './slides/Slide16PhraseMCP'
import Slide17MCPWhat from './slides/Slide17MCPWhat'
import Slide19MCPTools from './slides/Slide19MCPTools'
import Slide20MCPvsSkillsvsSubagents from './slides/Slide20MCPvsSkillsvsSubagents'
import Slide21MCPSecurity from './slides/Slide21MCPSecurity'
import Slide22PhraseContext from './slides/Slide22PhraseContext'
import Slide23ContextWeapon from './slides/Slide23ContextWeapon'
import Slide24ContextPollution from './slides/Slide24ContextPollution'
import Slide25PhraseSDD from './slides/Slide25PhraseSDD'
import Slide26SDDWhat from './slides/Slide26SDDWhat'
import Slide27SDDEvolution from './slides/Slide27SDDEvolution'
import Slide28Thanks from './slides/Slide28Thanks'

const slides: ComponentType<SlideProps>[] = [
  Slide01Title,
  Slide02Plan,
  Slide04PhraseScale,
  Slide05OldWay,
  Slide06NewWay,
  Slide07CICD,
  Slide08Migrations,
  Slide10PrototypeToCursor,
  Slide11GitBasics,
  Slide12BranchWorkflow,
  Slide13PhraseModes,
  Slide14Modes,
  Slide15GoldenWorkflow,
  Slide16PhraseMCP,
  Slide17MCPWhat,
  Slide19MCPTools,
  Slide20MCPvsSkillsvsSubagents,
  Slide21MCPSecurity,
  Slide22PhraseContext,
  Slide23ContextWeapon,
  Slide24ContextPollution,
  Slide25PhraseSDD,
  Slide26SDDWhat,
  Slide27SDDEvolution,
  Slide28Thanks,
]

export default function CentralUniversity2Page() {
  return <PresentationShell slides={slides} />
}
