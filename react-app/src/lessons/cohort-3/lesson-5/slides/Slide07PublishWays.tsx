import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide07PublishWays({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">07</span>
      <h2 className="reveal">3 способа опубликовать приложение</h2>

      <div className="steps reveal">
        <div className="step">
          <div className="step-number">01</div>
          <div>
            <div className="step-text">PaaS</div>
            <div className="step-desc">Vercel, Render, Netlify, Fly.io — загрузил код, платформа сама собирает и деплоит. Быстро, но ограничения и зависимость от сервиса</div>
          </div>
        </div>
        <div className="step">
          <div className="step-number">02</div>
          <div>
            <div className="step-text">Self-hosted PaaS</div>
            <div className="step-desc">Dokploy, Coolify — своя платформа деплоя на своём сервере. Полный контроль, без лимитов, бесплатно</div>
          </div>
        </div>
        <div className="step">
          <div className="step-number">03</div>
          <div>
            <div className="step-text">Кастомные CI/CD</div>
            <div className="step-desc">GitHub Actions, GitLab CI — пайплайны, которые собирают и доставляют код на сервер. Максимальная гибкость, но сложнее настроить</div>
          </div>
        </div>
      </div>

      <div className="highlight-box reveal" style={{ marginTop: '1.5rem' }}>
        <p>Сегодня разберём второй способ — поставим Dokploy на свой сервер</p>
      </div>
    </>
  )
}
