import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide04OldProcess({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">04</span>
      <h2 className="reveal">Как было раньше</h2>

      <div className="steps reveal" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
        <div className="step" style={{ flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div className="step-number">01</div>
          <div className="step-text">Дизайн</div>
          <div className="step-desc">Макет в Photoshop. Каждое изменение — новый файл</div>
        </div>
        <div className="step" style={{ flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div className="step-number">02</div>
          <div className="step-text">Верстка</div>
          <div className="step-desc">HTML/CSS вручную в Dreamweaver. Без Git</div>
        </div>
        <div className="step" style={{ flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div className="step-number">03</div>
          <div className="step-text">FTP</div>
          <div className="step-desc">Файлы на сервер вручную. Без версионности</div>
        </div>
      </div>
    </>
  )
}