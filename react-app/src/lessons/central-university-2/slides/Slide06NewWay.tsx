import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide06NewWay({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">06</span>
      <h2 className="reveal">Как должно быть</h2>
      <div className="flow-diagram reveal">
        <div className="flow-node highlighted">Локально</div>
        <div className="flow-arrow">→</div>
        <div className="flow-node">Git</div>
        <div className="flow-arrow">→</div>
        <div className="flow-node">GitHub</div>
        <div className="flow-arrow">→</div>
        <div className="flow-node">CI/CD</div>
        <div className="flow-arrow">→</div>
        <div className="flow-node highlighted">Сервер</div>
      </div>
      <div className="card-grid" style={{ marginTop: '1.5rem' }}>
        <div className="card highlighted">
          <h3>Dev окружение</h3>
          <p>Тестирование, эксперименты, проверка фич. Доступно по dev.site.com</p>
        </div>
        <div className="card">
          <h3>Prod окружение</h3>
          <p>Реальные пользователи, стабильность. Основной домен site.com</p>
        </div>
      </div>
    </>
  )
}
