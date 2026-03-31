import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide12BranchWorkflow({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">12</span>
      <h2 className="reveal">Рабочий процесс</h2>
      <p className="subtitle reveal">Всегда работаем в ветке dev</p>
      <div className="flow-diagram reveal">
        <div className="flow-node highlighted">dev</div>
        <div className="flow-arrow">→</div>
        <div className="flow-node">commit</div>
        <div className="flow-arrow">→</div>
        <div className="flow-node">push</div>
        <div className="flow-arrow">→</div>
        <div className="flow-node">Pull Request</div>
        <div className="flow-arrow">→</div>
        <div className="flow-node">Code Review</div>
        <div className="flow-arrow">→</div>
        <div className="flow-node">Merge</div>
        <div className="flow-arrow">→</div>
        <div className="flow-node highlighted">main</div>
      </div>
      <ul className="content-list stagger-list" style={{ marginTop: '1.5rem' }}>
        <li>Все изменения делаем в dev</li>
        <li>Коммитим после каждой рабочей фичи</li>
        <li>Через Pull Request переносим в main</li>
        <li>Пользователи видят только проверенный код</li>
      </ul>
    </>
  )
}
