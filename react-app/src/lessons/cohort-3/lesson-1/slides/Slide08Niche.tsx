import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide08Niche({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">08</span>
      <h2 className="reveal">Как выбрать нишу?</h2>
      <h3 className="reveal" style={{ marginBottom: '1.5rem' }}>3 способа найти идею</h3>
      <div className="steps reveal">
        <div className="step"><span className="step-number">1</span><span className="step-text"><strong>Собственная боль:</strong> что вы делаете вручную и ненавидите это?</span></div>
        <div className="step"><span className="step-number">2</span><span className="step-text"><strong>Боли коллег/бизнеса:</strong> какую рутину можно автоматизировать прямо сейчас?</span></div>
        <div className="step"><span className="step-number">3</span><span className="step-text">Изучение трендов, болей в сообществах, соцсетях</span></div>
      </div>
    </>
  )
}
