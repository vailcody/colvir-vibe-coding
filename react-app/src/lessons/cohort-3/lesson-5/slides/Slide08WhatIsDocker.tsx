import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide08WhatIsDocker({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">09</span>
      <h2 className="reveal">Что такое Docker</h2>

      <div className="highlight-box reveal">
        <p>Docker упаковывает приложение в образ. Этот образ запускается на любой машине, где установлен Docker, и работает одинаково.</p>
      </div>

      <div className="card-grid reveal" style={{ marginTop: '1.5rem' }}>
        <div className="card">
          <h3>Проблема</h3>
          <p>Версии библиотек на компьютере отличаются от версий на сервере. У разработчика работает, на сервере падает.</p>
        </div>
        <div className="card highlighted">
          <h3>Решение</h3>
          <p>Docker создаёт изолированную среду, контейнер. Внутри те же библиотеки, тот же код и предсказуемый запуск. Работает везде одинаково.</p>
        </div>
      </div>
    </>
  )
}