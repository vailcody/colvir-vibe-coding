import type { SlideProps } from '../../../../components/PresentationShell'

const BASE = import.meta.env.BASE_URL

export default function Slide12Hooks({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">11</span>
      <h2 className="reveal">Настройки: Hooks</h2>
      <img src={`${BASE}cohort-3/lesson-3/img/settings-hooks.jpg`} alt="Cursor Settings Hooks" className="settings-img" />
      <ul className="content-list stagger-list">
        <li><strong>Configured Hooks (2)</strong> — sessionStart и afterFileEdit подключены</li>
        <li><strong>sessionStart</strong> → auto-commit.sh — коммитит изменения при старте нового чата</li>
        <li><strong>afterFileEdit</strong> → lint.sh — запускает линтер после каждой правки агента</li>
        <li><strong>Execution Log</strong> — полная история срабатываний хуков с таймингами</li>
        <li>afterFileEdit: 579-719ms — линтер успевает за полсекунды</li>
        <li>sessionStart: 85-279ms — коммит почти мгновенный</li>
        <li><strong>Open project config</strong> — прямой доступ к hooks.json для редактирования</li>
      </ul>
    </>
  )
}
