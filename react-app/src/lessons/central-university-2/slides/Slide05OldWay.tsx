import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide05OldWay({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">05</span>
      <h2 className="reveal">Как было раньше</h2>
      <div className="flow-diagram reveal">
        <div className="flow-node">Фотошоп</div>
        <div className="flow-arrow">→</div>
        <div className="flow-node">Вёрстка</div>
        <div className="flow-arrow">→</div>
        <div className="flow-node">FTP</div>
        <div className="flow-arrow">→</div>
        <div className="flow-node">Сервер</div>
      </div>
      <ul className="content-list stagger-list" style={{ marginTop: '1.5rem' }}>
        <li>Даунтайм при загрузке файлов</li>
        <li>Нет версионирования — потеря кода</li>
        <li>Ручные правки в базе данных</li>
        <li>Одно окружение — сразу в продакшн</li>
      </ul>
    </>
  )
}
