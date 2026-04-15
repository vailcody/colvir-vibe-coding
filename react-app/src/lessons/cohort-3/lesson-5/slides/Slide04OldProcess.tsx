import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide04OldProcess({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">04</span>
      <h2 className="reveal">Как было раньше</h2>

      <div className="card-row reveal" style={{ marginTop: '2rem' }}>
        <div className="card highlighted" style={{ textAlign: 'center' }}>
          <div className="step-number">01</div>
          <h3>Дизайн</h3>
          <p>Макет в Photoshop. Каждое изменение, новый файл.</p>
        </div>
        <div className="card" style={{ textAlign: 'center' }}>
          <div className="step-number">02</div>
          <h3>Верстка</h3>
          <p>HTML/CSS вручную. Одна ветка, без Git.</p>
        </div>
        <div className="card" style={{ textAlign: 'center' }}>
          <div className="step-number">03</div>
          <h3>FTP</h3>
          <p>Файлы на сервер вручную, без версионности и отката.</p>
        </div>
      </div>
    </>
  )
}