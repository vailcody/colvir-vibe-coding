import type { SlideProps } from '../../../../components/PresentationShell'

export default function SlideGitWorkflow({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">13</span>
      <h2 className="reveal">Git Workflow</h2>
      <p className="subtitle reveal" style={{ marginBottom: '1rem' }}>Профессиональный рабочий процесс с Git</p>
      <div className="card-grid">
        <div className="card highlighted">
          <h3>Инициализация</h3>
          <p>Source Control → Initialize Repository. Фиксируем начальную версию проекта.</p>
          <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Обязательно: создать .gitignore, исключить .env (ключи, пароли)</p>
        </div>
        <div className="card">
          <h3>Ветки</h3>
          <p><strong>main</strong> = продакшн (стабильная версия)</p>
          <p><strong>dev</strong> = разработка (эксперименты)</p>
        </div>
        <div className="card">
          <h3>Рабочий процесс</h3>
          <p>Всегда работаем в ветке dev</p>
          <p style={{ marginTop: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>dev → commit → push → Pull Request → Code Review → Merge → main</p>
        </div>
        <div className="card">
          <h3>Правила</h3>
          <ul style={{ fontSize: '0.95rem' }}>
            <li>Все изменения делаем в dev</li>
            <li>Коммитим после каждой рабочей фичи</li>
            <li>Через PR переносим в main</li>
            <li>Пользователи видят только проверенный код</li>
          </ul>
        </div>
      </div>
      <p className="subtitle reveal" style={{ marginTop: '1rem' }}>Cursor + Git = контроль версий + безопасность</p>
    </>
  )
}
