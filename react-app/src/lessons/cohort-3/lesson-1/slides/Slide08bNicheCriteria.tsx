import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide08bNicheCriteria({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">09</span>
      <h2 className="reveal">Критерии успешной ниши</h2>
      <div className="steps reveal" style={{ marginBottom: '2rem' }}>
        <div className="step"><span className="step-number">1</span><span className="step-text"><strong>Наличие конкурентов:</strong> подтверждение того, что в нише есть деньги</span></div>
        <div className="step"><span className="step-number">2</span><span className="step-text"><strong>Поисковый трафик:</strong> оценка спроса через Wordstat и Google Trends</span></div>
      </div>
      <p className="reveal" style={{ opacity: 0.75, fontStyle: 'italic', fontSize: '1.25rem' }}>
        У нас нет больших маркетинговых бюджетов, чтобы создавать спрос. Поэтому идём в ниши, где спрос уже есть.
      </p>
    </>
  )
}
