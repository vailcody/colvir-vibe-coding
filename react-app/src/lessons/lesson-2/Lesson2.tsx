import PresentationShell from '../../components/PresentationShell'
import type { SlideProps } from '../../components/PresentationShell'
import type { ComponentType } from 'react'

import Slide01Title from './slides/Slide01Title'
import Slide02PlanRecap from './slides/Slide02PlanRecap'
import Slide03Recap from './slides/Slide03Recap'
import Slide04TodayPlan from './slides/Slide04TodayPlan'
import Slide05DifyWorkflow from './slides/Slide05DifyWorkflow'
import Slide06SettingsGeneral from './slides/Slide06SettingsGeneral'
import Slide07SettingsAgents from './slides/Slide07SettingsAgents'
import Slide08SettingsReview from './slides/Slide08SettingsReview'
import Slide09SettingsTerminal from './slides/Slide09SettingsTerminal'
import Slide10SettingsRules from './slides/Slide10SettingsRules'
import Slide11SettingsTools from './slides/Slide11SettingsTools'
import Slide12SettingsHooks from './slides/Slide12SettingsHooks'
import Slide13SettingsIndexing from './slides/Slide13SettingsIndexing'
import Slide14GoldenWorkflow from './slides/Slide14GoldenWorkflow'
import Slide15RulesFirst from './slides/Slide15RulesFirst'
import Slide16RulesPrompt from './slides/Slide16RulesPrompt'
import Slide17AskMode from './slides/Slide17AskMode'
import Slide18PlanMode from './slides/Slide18PlanMode'
import Slide19AgentDebug from './slides/Slide19AgentDebug'
import Slide20Context from './slides/Slide20Context'
import Slide21ContextKing from './slides/Slide21ContextKing'
import Slide22MCP from './slides/Slide22MCP'
import Slide23Skills from './slides/Slide23Skills'
import Slide24Subagents from './slides/Slide24Subagents'
import Slide25Hooks from './slides/Slide25Hooks'
import Slide26TokenSaving from './slides/Slide26TokenSaving'
import Slide27ErrorStrategies from './slides/Slide27ErrorStrategies'
import Slide28BestPractices from './slides/Slide28BestPractices'
import Slide29Homework from './slides/Slide29Homework'
import Slide30Lesson3Preview from './slides/Slide30Lesson3Preview'
import Slide31Summary from './slides/Slide31Summary'

const slides: ComponentType<SlideProps>[] = [
  Slide01Title,
  Slide02PlanRecap,
  Slide03Recap,
  Slide04TodayPlan,
  Slide05DifyWorkflow,
  Slide06SettingsGeneral,
  Slide07SettingsAgents,
  Slide08SettingsReview,
  Slide09SettingsTerminal,
  Slide10SettingsRules,
  Slide11SettingsTools,
  Slide12SettingsHooks,
  Slide13SettingsIndexing,
  Slide14GoldenWorkflow,
  Slide15RulesFirst,
  Slide16RulesPrompt,
  Slide17AskMode,
  Slide18PlanMode,
  Slide19AgentDebug,
  Slide20Context,
  Slide21ContextKing,
  Slide22MCP,
  Slide23Skills,
  Slide24Subagents,
  Slide25Hooks,
  Slide26TokenSaving,
  Slide27ErrorStrategies,
  Slide28BestPractices,
  Slide29Homework,
  Slide30Lesson3Preview,
  Slide31Summary,
]

export default function Lesson2Page() {
  return <PresentationShell slides={slides} />
}
