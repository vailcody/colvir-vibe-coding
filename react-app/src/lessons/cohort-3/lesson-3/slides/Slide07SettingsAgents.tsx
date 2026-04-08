import type { SlideProps } from '../../../../components/PresentationShell'

const BASE = import.meta.env.BASE_URL

export default function Slide07SettingsAgents({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">06</span>
      <h2 className="reveal" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>Настройки: Agents</h2>
      <div className="settings-layout reveal">
        <img src={`${BASE}cohort-3/lesson-3/img/settings-agents-autorun.jpg`} alt="Cursor Settings Agents" className="settings-img" />
        <ul className="settings-notes">
          <li><strong>Auto-Run Mode</strong> — как агент выполняет команды. «Run Everything» = YOLO-режим.</li>
          <li><strong>Browser Protection</strong> — запретить агенту автозапуск браузерных инструментов</li>
          <li><strong>MCP Tools Protection</strong> — запретить автозапуск MCP-инструментов</li>
          <li><strong>Auto-Clear Chat</strong> — автоматически новый чат после периода неактивности</li>
          <li><strong>Queue Messages</strong> — очередь промптов пока агент работает</li>
        </ul>
      </div>
    </>
  )
}
