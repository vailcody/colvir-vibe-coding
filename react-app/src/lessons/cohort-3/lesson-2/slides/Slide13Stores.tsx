import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide13Stores({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">13</span>
      <h2 className="reveal">Публикация в сторы — следующее занятие</h2>
      <div className="card-grid stagger-list">
        <div className="card">
          <h3>🍎 App Store</h3>
          <p>$100/год · проверка 1–7 дней · строгие требования · аудитория платит охотнее</p>
        </div>
        <div className="card">
          <h3>🤖 Google Play</h3>
          <p>$25 единоразово · проверка быстрее · больше аудитория</p>
        </div>
      </div>
      <h3 className="reveal" style={{ marginTop: '1.5rem', marginBottom: '0.75rem' }}>Готовьте заранее:</h3>
      <ul className="content-list stagger-list">
        <li>Политика конфиденциальности — страница на сайте (обязательно)</li>
        <li>Функция удаления аккаунта — требование GDPR и сторов</li>
        <li>Тестовый пользователь — логин/пароль для модераторов Apple</li>
        <li>Регистрация аккаунта разработчика — занимает дни, не часы</li>
      </ul>
    </>
  )
}
