import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide06Project({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">06</span>
      <h2 className="reveal">Проект: голосовые заметки с транскрибацией</h2>
      <div className="card-grid stagger-list">
        <div>
          <h3 style={{ marginBottom: '1rem' }}>3 экрана</h3>
          <div className="steps">
            <div className="step"><span className="step-number">1</span><span className="step-text"><strong>Главный экран</strong> — большая кнопка записи, таймер, статус</span></div>
            <div className="step"><span className="step-number">2</span><span className="step-text"><strong>Список заметок</strong> — карточки с текстом, датой, плеером</span></div>
            <div className="step"><span className="step-number">3</span><span className="step-text"><strong>Детальный просмотр</strong> — полный текст, аудиоплеер, удаление</span></div>
          </div>
        </div>
        <div className="card">
          <h3>Стек</h3>
          <ul className="card-list" style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ padding: '0.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.1)' }}><strong>Frontend:</strong> React Native + Expo (Мария)</li>
            <li style={{ padding: '0.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.1)' }}><strong>Backend:</strong> Python FastAPI (Костя)</li>
            <li style={{ padding: '0.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.1)' }}><strong>AI:</strong> Mistral — транскрибация</li>
            <li style={{ padding: '0.5rem 0' }}><strong>Тест:</strong> Expo Go по QR</li>
          </ul>
        </div>
      </div>
    </>
  )
}
