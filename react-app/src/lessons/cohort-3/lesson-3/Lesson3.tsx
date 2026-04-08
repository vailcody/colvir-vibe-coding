import PresentationShell from '../../../components/PresentationShell'
import type { SlideProps } from '../../../components/PresentationShell'
import type { ComponentType } from 'react'

import Slide01Title from './slides/Slide01Title'
import Slide04Workflow from './slides/Slide04Workflow'
import Slide06SettingsGeneral from './slides/Slide06SettingsGeneral'
import Slide07SettingsAgents from './slides/Slide07SettingsAgents'
import Slide08SettingsReview from './slides/Slide08SettingsReview'
import Slide09SettingsTerminal from './slides/Slide09SettingsTerminal'
import Slide10RulesSkills from './slides/Slide10RulesSkills'
import Slide11MCPTools from './slides/Slide11MCPTools'
import Slide12Hooks from './slides/Slide12Hooks'
import Slide13Indexing from './slides/Slide13Indexing'
import Slide14GoldenWorkflow from './slides/Slide14GoldenWorkflow'
import Slide15Rules from './slides/Slide15Rules'
import Slide16RulesPrompt from './slides/Slide16RulesPrompt'
import Slide17Ask from './slides/Slide17Ask'
import Slide18Plan from './slides/Slide18Plan'
import Slide19AgentDebug from './slides/Slide19AgentDebug'
import Slide20ContextKing from './slides/Slide20ContextKing'
import Slide21MCP from './slides/Slide21MCP'
import Slide22Skills from './slides/Slide22Skills'
import Slide23Subagents from './slides/Slide23Subagents'
import Slide26Breakage from './slides/Slide26Breakage'
import Slide28Homework from './slides/Slide28Homework'

const slides: ComponentType<SlideProps>[] = [
  Slide01Title,
  Slide04Workflow,
  Slide06SettingsGeneral,
  Slide07SettingsAgents,
  Slide08SettingsReview,
  Slide09SettingsTerminal,
  Slide10RulesSkills,
  Slide11MCPTools,
  Slide12Hooks,
  Slide13Indexing,
  Slide14GoldenWorkflow,
  Slide15Rules,
  Slide16RulesPrompt,
  Slide17Ask,
  Slide18Plan,
  Slide19AgentDebug,
  Slide20ContextKing,
  Slide21MCP,
  Slide22Skills,
  Slide23Subagents,
  Slide26Breakage,
  Slide28Homework,
]

export default function Lesson3Page() {
  return <PresentationShell slides={slides} />
}
