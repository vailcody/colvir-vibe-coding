import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide15Homework({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">15</span>
      <h2 className="reveal">Домашнее задание</h2>
      <div className="steps reveal" style={{ fontSize: '1.25rem' }}>
        <div className="step"><span className="step-number">1</span><span className="step-text"><strong>Research:</strong> Провести глубокий анализ конкурентов с помощью Perplexity, Google Deep Research</span></div>
        <div className="step"><span className="step-number">2</span><span className="step-text"><strong>Miro:</strong> Создать доску, накидать скриншоты User Flow конкурентов</span></div>
        <div className="step"><span className="step-number">3</span><span className="step-text"><strong>Prototype:</strong> сгенерировать основной функционал прототипа с моковыми данными</span></div>
      </div>
      <div className="reveal" style={{ marginTop: '1.5rem', background: 'rgba(255,215,0,0.08)', border: '1px solid rgba(255,215,0,0.3)', borderRadius: '10px', padding: '1rem 1.25rem' }}>
        <h3 style={{ marginBottom: '0.5rem' }}>Задание со звёздочкой ⭐</h3>
        <div className="steps" style={{ fontSize: '1.25rem' }}>
          <div className="step"><span className="step-number">4</span><span className="step-text">Опубликовать в Threads результат своей работы</span></div>
        </div>
      </div>
    </>
  )
}
