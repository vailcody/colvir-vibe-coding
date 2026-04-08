import type { SlideProps } from '../../../../components/PresentationShell'

const BASE = '/cohort-3/lesson-3/'

export default function Slide06SettingsGeneral({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">05</span>
      <h2 className="reveal">Настройки: General</h2>
      <img src={`${BASE}img/settings-general.jpg`} alt="Cursor Settings General" className="slide-image reveal" />
      <ul className="content-list stagger-list">
        <li><strong>Privacy / Data Sharing</strong> — «Share Data» означает ваш код может использоваться для обучения. Для корпоративных проектов — выключить!</li>
        <li><strong>Completion Sound</strong> — звук когда агент закончил. Удобно при фоновой работе</li>
        <li><strong>System Notifications</strong> — уведомления когда агент завершил или требует внимания</li>
        <li><strong>Auto-hide editor when empty</strong> — максимизирует чат если нет открытых файлов</li>
        <li><strong>Import Settings from VS Code</strong> — одна кнопка для миграции всех настроек, расширений и кибиндингов</li>
      </ul>
    </>
  )
}
