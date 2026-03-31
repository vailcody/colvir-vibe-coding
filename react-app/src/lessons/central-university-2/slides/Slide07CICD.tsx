import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide07CICD({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">07</span>
      <h2 className="reveal">CI/CD</h2>
      <p className="subtitle reveal">Автоматизация проверки и доставки кода</p>
      <div className="card-grid">
        <div className="card highlighted">
          <h3>CI — Continuous Integration</h3>
          <p>Автоматическая проверка кода при каждом push. Линтеры, тесты, сборка.</p>
        </div>
        <div className="card">
          <h3>CD — Continuous Delivery</h3>
          <p>Автоматическая выгрузка на сервер. Без ручного FTP — GitHub Actions делает всё сам.</p>
        </div>
        <div className="card">
          <h3>Результат</h3>
          <p>Старая версия работает пока новая не проверена. Нет даунтайма, нет человеческих ошибок.</p>
        </div>
        <div className="card">
          <h3>Для нас</h3>
          <p>На курсе покажу связку проще GitHub Actions — более надёжную и без конфигов.</p>
        </div>
      </div>
    </>
  )
}
