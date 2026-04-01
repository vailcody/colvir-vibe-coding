import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide08Niche({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">08</span>
      <h2 className="reveal">Как выбрать нишу?</h2>
      <div className="reveal" style={{ marginBottom: '1.25rem' }}>
        <h3 style={{ marginBottom: '0.75rem' }}>3 способа найти идею</h3>
        <div className="steps">
          <div className="step"><span>1</span><p><strong>Собственная боль:</strong> что вы делаете вручную и ненавидите это?</p></div>
          <div className="step"><span>2</span><p><strong>Боли коллег/бизнеса:</strong> какую рутину можно автоматизировать прямо сейчас?</p></div>
          <div className="step"><span>3</span><p>Изучение трендов, болей в сообществах, соцсетях</p></div>
        </div>
      </div>
      <div className="reveal" style={{ marginBottom: '1rem' }}>
        <h3 style={{ marginBottom: '0.75rem' }}>Критерии успешной ниши</h3>
        <div className="steps">
          <div className="step"><span>1</span><p><strong>Наличие конкурентов:</strong> подтверждение того, что в нише есть деньги</p></div>
          <div className="step"><span>2</span><p><strong>Поисковый трафик:</strong> оценка спроса через Wordstat и Google Trends</p></div>
        </div>
      </div>
      <p className="reveal" style={{ opacity: 0.75, fontStyle: 'italic' }}>
        У нас нет больших маркетинговых бюджетов, чтобы создавать спрос. Поэтому идём в ниши, где спрос уже есть.
      </p>
    </>
  )
}
