import type { SlideProps } from '../../../../components/PresentationShell'

const BASE = '/cohort-3/lesson-3/'

export default function Slide10RulesSkills({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">09</span>
      <h2 className="reveal">Настройки: Rules, Skills, Subagents</h2>
      <img src={`${BASE}img/settings-rules-skills.jpg`} alt="Cursor Settings Rules Skills" className="slide-image reveal" />
      <ul className="content-list stagger-list">
        <li><strong>Rules</strong> — все правила проекта. Видно текст каждого rule. Кнопка «+ New» для создания</li>
        <li><strong>AGENTS</strong> — AGENTS.md файл как альтернатива .cursor/rules</li>
        <li><strong>Skills</strong> — «Agent Decides» — агент сам решает когда применить. Видны description'ы.</li>
        <li><strong>Subagents</strong> — кастомные субагенты. Наш security-auditor виден здесь</li>
        <li><strong>Commands</strong> — переиспользуемые команды через / в чате</li>
        <li><strong>Include third-party Plugins</strong> — автоимпорт конфигов из других инструментов (Claude, Codex)</li>
      </ul>
    </>
  )
}
