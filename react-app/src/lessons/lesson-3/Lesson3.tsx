import PresentationShell from '../../components/PresentationShell'
import type { SlideProps } from '../../components/PresentationShell'
import type { ComponentType } from 'react'

import Slide01Title from './slides/Slide01Title'
import Slide02PlanRecap from './slides/Slide02PlanRecap'
import Slide03Recap from './slides/Slide03Recap'
import Slide04TodayPlan from './slides/Slide04TodayPlan'
import Slide05Rules from './slides/Slide05Rules'
import Slide06SDD from './slides/Slide06SDD'
import Slide07SDDEvolution from './slides/Slide07SDDEvolution'
import Slide08SDDTools from './slides/Slide08SDDTools'
import Slide09OpenSpec from './slides/Slide09OpenSpec'
import Slide10SDDProposal from './slides/Slide10SDDProposal'
import Slide11SDDDesign from './slides/Slide11SDDDesign'
import Slide12SDDTasks from './slides/Slide12SDDTasks'
import Slide13LiveDemo from './slides/Slide13LiveDemo'
import Slide14MCPWhat from './slides/Slide14MCPWhat'
import Slide15MCPArchitecture from './slides/Slide15MCPArchitecture'
import Slide16MCPTools from './slides/Slide16MCPTools'
import Slide17MCPResources from './slides/Slide17MCPResources'
import Slide18MCPPrompts from './slides/Slide18MCPPrompts'
import Slide19MCPTransport from './slides/Slide19MCPTransport'
import Slide20MCPSecurity from './slides/Slide20MCPSecurity'
import Slide21ToolPoisoning from './slides/Slide21ToolPoisoning'
import Slide22RugPull from './slides/Slide22RugPull'
import Slide23CommandInjection from './slides/Slide23CommandInjection'
import Slide24MCPCode from './slides/Slide24MCPCode'
import Slide25CursorConnect from './slides/Slide25CursorConnect'
import Slide26Homework from './slides/Slide26Homework'
import Slide27Summary from './slides/Slide27Summary'

const slides: ComponentType<SlideProps>[] = [
  Slide01Title,
  Slide02PlanRecap,
  Slide03Recap,
  Slide04TodayPlan,
  Slide05Rules,
  Slide06SDD,
  Slide07SDDEvolution,
  Slide08SDDTools,
  Slide09OpenSpec,
  Slide10SDDProposal,
  Slide11SDDDesign,
  Slide12SDDTasks,
  Slide13LiveDemo,
  Slide14MCPWhat,
  Slide15MCPArchitecture,
  Slide16MCPTools,
  Slide17MCPResources,
  Slide18MCPPrompts,
  Slide19MCPTransport,
  Slide20MCPSecurity,
  Slide21ToolPoisoning,
  Slide22RugPull,
  Slide23CommandInjection,
  Slide24MCPCode,
  Slide25CursorConnect,
  Slide26Homework,
  Slide27Summary,
]

export default function Lesson3Page() {
  return <PresentationShell slides={slides} />
}
