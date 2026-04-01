import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide05Hire({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">05</span>
      <h2 className="reveal">Лайфхаки в найме</h2>
      <ul className="content-list stagger-list" style={{ marginBottom: '1.5rem' }}>
        <li>Сделайте несколько заказов на фрилансе — есть что показать в резюме</li>
        <li>Ищите проектную работу, которая со временем станет постоянной</li>
      </ul>
      <div className="reveal" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '12px', padding: '1.25rem 1.5rem' }}>
        <h3 style={{ marginBottom: '0.75rem' }}>Кейс: Влад из @vibe_coding_community</h3>
        <ul className="content-list" style={{ margin: 0 }}>
          <li>Был джуном-самоучкой на Python</li>
          <li>Написал в сообществе, что ищет работу</li>
          <li>Получил оффер на 160к</li>
          <li>Через полгода повысили до 260к, поставили лидом команды</li>
        </ul>
      </div>
    </>
  )
}
