import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide13bErrorCost({}: SlideProps) {
  return (
    <>
      <div className="geo-line" style={{ width: 250, height: 3, bottom: '15%', left: '5%' }} />
      <span className="slide-number reveal">13b</span>
      <h2 className="reveal">Цена ошибки</h2>
      <div className="card-row">
        <div className="cost-card">
          <div className="cost-level">Дёшево</div>
          <div className="cost-label">ТЗ / Спецификация</div>
          <span className="cost-weight"></span>
        </div>
        <div className="cost-card">
          <div className="cost-level">Умеренно</div>
          <div className="cost-label">Дизайн / Прототип</div>
          <span className="cost-weight"></span>
        </div>
        <div className="cost-card">
          <div className="cost-level">Дорого</div>
          <div className="cost-label">Фронт + Бэк</div>
          <span className="cost-weight"></span>
        </div>
      </div>
      <p className="cost-message reveal">«Чем раньше ловим ошибку — тем дешевле»</p>
    </>
  )
}
