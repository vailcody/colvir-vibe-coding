import type { SlideProps } from '../../../../components/PresentationShell'

const BASE = import.meta.env.BASE_URL

export default function Slide20Harvi({}: SlideProps) {
  return (
    <>
      <div className="geo-outline" style={{ position: 'absolute', width: 70, height: 70, bottom: '15%', right: '12%', border: '2px solid var(--text-primary)', zIndex: -1 }} />
      <span className="slide-number reveal">10</span>
      <h2 className="reveal">harvi.pro</h2>
      <div className="harvi-layout reveal">
        <div className="harvi-screenshot">
          <img src={`${BASE}lesson-1/harvi-screenshot.jpg`} alt="harvi.pro — браузерный AI-агент" />
        </div>
        <div className="harvi-info">
          <ul className="content-list stagger-list">
            <li>Российская разработка</li>
            <li>Без VPN, оплата российской картой</li>
            <li>Быстрое прототипирование</li>
            <li>Корпоративные тарифы</li>
          </ul>
          <div className="promo-code reveal">
            <span className="promo-label">Промокод</span>
            <span className="promo-value">chuikoff_harvi_2026</span>
          </div>
        </div>
      </div>
    </>
  )
}
