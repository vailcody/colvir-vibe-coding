import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide05Tools({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">05</span>
      <h2 className="reveal">Инструменты на этом занятии</h2>
      <div className="card-grid stagger-list">
        <div className="card" style={{ borderColor: 'var(--accent)' }}>
          <h3>Rork — основной</h3>
          <p>Специализирован под React Native + Expo. Понимает мобильные паттерны, генерирует нативные компоненты. Работает на всех платформах.</p>
        </div>
        <div className="card">
          <h3>SuperApp — macOS only</h3>
          <p>Ещё один мобильный агент. Доступен только под macOS. Запустим параллельно с Rork и сравним результат.</p>
        </div>
      </div>
      <ul className="content-list stagger-list" style={{ marginTop: '1.5rem' }}>
        <li>Lovable — для веба, не для мобилки</li>
        <li>Формат: разрабатываем в обоих агентах одновременно → сравниваем</li>
      </ul>
    </>
  )
}
