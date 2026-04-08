import type { SlideProps } from '../../../../components/PresentationShell'

const BASE = import.meta.env.BASE_URL

export default function Slide06SettingsGeneral({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">05</span>
      <h2 className="reveal" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>Настройки: General</h2>
      <div className="settings-layout reveal">
        <img src={`${BASE}cohort-3/lesson-3/img/settings-general.jpg`} alt="Cursor Settings General" className="settings-img" />
        <ul className="settings-notes">
          <li><strong>Privacy / Data Sharing</strong> — «Share Data» означает ваш код может использоваться для обучения. Для корпоративных проектов — выключить!</li>
          <li><strong>Completion Sound</strong> — звук когда агент закончил. Удобно при фоновой работе</li>
          <li><strong>System Notifications</strong> — уведомления когда агент завершил или требует внимания</li>
          <li><strong>Auto-hide editor when empty</strong> — максимизирует чат если нет открытых файлов</li>
          <li><strong>Import Settings from VS Code</strong> — одна кнопка для миграции всех настроек, расширений и кибиндингов</li>
        </ul>
      </div>
    </>
  )
}
