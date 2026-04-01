import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide15Homework({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">15</span>
      <h2 className="reveal">Домашнее задание</h2>
      <div className="steps reveal">
        <div className="step"><span>1</span><p><strong>Research:</strong> Провести глубокий анализ конкурентов с помощью Perplexity, Google Deep Research</p></div>
        <div className="step"><span>2</span><p><strong>Miro:</strong> Создать доску, накидать скриншоты User Flow конкурентов</p></div>
        <div className="step"><span>3</span><p><strong>Prototype:</strong> сгенерировать основной функционал прототипа с моковыми данными</p></div>
      </div>
      <div className="reveal" style={{ marginTop: '1.5rem', background: 'rgba(255,215,0,0.08)', border: '1px solid rgba(255,215,0,0.3)', borderRadius: '10px', padding: '1rem 1.25rem' }}>
        <h3 style={{ marginBottom: '0.5rem' }}>Задание со звёздочкой ⭐</h3>
        <div className="steps">
          <div className="step"><span>4</span><p>Опубликовать в Threads результат своей работы</p></div>
        </div>
      </div>
    </>
  )
}
