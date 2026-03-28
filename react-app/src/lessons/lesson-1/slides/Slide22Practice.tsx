import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide22Practice({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">11</span>
      <h2 className="reveal">Практика: генератор тест-кейсов</h2>
      <div className="wireframe-container">
        <div className="wireframe">
          <div className="wireframe-title">Экран 1: Загрузка спецификации</div>
          <div className="wireframe-bar short"></div>
          <div className="wireframe-bar"></div>
          <div className="wireframe-bar medium"></div>
          <div className="wireframe-bar"></div>
          <div style={{ marginTop: '1.5rem', border: '2px dashed var(--grid)', padding: '1.5rem', textAlign: 'center' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.7rem', textTransform: 'uppercase' as const, letterSpacing: '0.1em', color: 'var(--text-secondary)' }}>Перетащите файл сюда</span>
          </div>
          <div className="wireframe-btn">Загрузить</div>
        </div>
        <div className="wireframe">
          <div className="wireframe-title">Экран 2: Список тест-кейсов</div>
          <div className="wireframe-row">
            <div className="wireframe-check done"></div>
            <div className="wireframe-bar" style={{ margin: 0, flex: 1 }}></div>
          </div>
          <div className="wireframe-row">
            <div className="wireframe-check done"></div>
            <div className="wireframe-bar medium" style={{ margin: 0, flex: 1 }}></div>
          </div>
          <div className="wireframe-row">
            <div className="wireframe-check"></div>
            <div className="wireframe-bar short" style={{ margin: 0, flex: 1 }}></div>
          </div>
          <div className="wireframe-row">
            <div className="wireframe-check"></div>
            <div className="wireframe-bar" style={{ margin: 0, flex: 1 }}></div>
          </div>
          <div className="wireframe-row">
            <div className="wireframe-check"></div>
            <div className="wireframe-bar medium" style={{ margin: 0, flex: 1 }}></div>
          </div>
        </div>
      </div>
      <p className="reveal" style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginTop: '1rem' }}>Прототип с имитацией функционала</p>
    </>
  )
}
