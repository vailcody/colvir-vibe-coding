import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide06ScalableApproach({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">06</span>
      <h2 className="reveal">Масштабируемый подход</h2>

      <div className="steps reveal">
        <div className="step">
          <div className="step-number">01</div>
          <div>
            <div className="step-text">Ветка Dev</div>
            <div className="step-desc">Эксперименты и разработка. Код проверяется, но может быть нестабилен</div>
          </div>
        </div>
        <div className="step">
          <div className="step-number">02</div>
          <div>
            <div className="step-text">Ветка Main</div>
            <div className="step-desc">Стабильный код, готовый к продакшену. Только проверенные изменения</div>
          </div>
        </div>
        <div className="step">
          <div className="step-number">03</div>
          <div>
            <div className="step-text">Автодеплой</div>
            <div className="step-desc">Система автоматически забирает изменения из ветки и публикует их</div>
          </div>
        </div>
        <div className="step">
          <div className="step-number">04</div>
          <div>
            <div className="step-text">Два экземпляра</div>
            <div className="step-desc">Dev-копия для тестов и Production для пользователей на одном или разных серверах</div>
          </div>
        </div>
      </div>
    </>
  )
}