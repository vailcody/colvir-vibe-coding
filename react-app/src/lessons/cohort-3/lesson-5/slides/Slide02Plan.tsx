import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide02Plan({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">02</span>
      <h2 className="reveal">План занятия</h2>

      <div className="card-row reveal" style={{ marginTop: '2rem' }}>
        <div className="card highlighted">
          <h3>01 Масштабируемая разработка</h3>
          <p>Как было раньше, почему это не масштабируется, современный подход.</p>
        </div>

        <div className="card">
          <h3>02 Docker</h3>
          <p>Что это такое, как работает, образ, контейнер, том, локальная работа.</p>
        </div>

        <div className="card">
          <h3>03 Сервер и безопасность</h3>
          <p>Покупка сервера, первое подключение, безопасность, SSH-ключи, Dokploy.</p>
        </div>
      </div>
    </>
  )
}