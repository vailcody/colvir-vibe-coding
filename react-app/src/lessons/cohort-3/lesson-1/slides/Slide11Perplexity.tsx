import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide11Perplexity({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">11</span>
      <h2 className="reveal">Deep Research в Perplexity</h2>
      <p className="reveal" style={{ marginBottom: '1rem' }}>
        <a href="https://www.perplexity.ai/search/naidi-top-10-saas-servisov-kot-npQQtbBBTsKbyPIANdvyNQ" target="_blank" rel="noopener noreferrer">📎 Пример запроса в Perplexity</a>
      </p>
      <h3 className="reveal" style={{ marginBottom: '0.75rem' }}>Используем AI для анализа рынка:</h3>
      <ul className="content-list stagger-list">
        <li>Поиск топ-10 SaaS в выбранной нише</li>
        <li>Сравнительный анализ фишек и тарифных планов</li>
        <li>Поиск «дыр» в функционале конкурентов</li>
        <li>Генерация идей для дифференциации (как стать уникальным)</li>
      </ul>
    </>
  )
}
