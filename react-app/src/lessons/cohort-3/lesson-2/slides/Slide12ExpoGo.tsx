import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide12ExpoGo({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">12</span>
      <h2 className="reveal">Запускаем на телефоне</h2>
      <div className="steps stagger-list">
        <div className="step"><span className="step-number">1</span><span className="step-text">Скачать <strong>Expo Go</strong> из App Store или Google Play</span></div>
        <div className="step"><span className="step-number">2</span><span className="step-text">Запустить проект: <code style={{ fontFamily: 'monospace', background: 'rgba(0,0,0,0.08)', padding: '0 0.4rem', borderRadius: '3px' }}>npx expo start</code></span></div>
        <div className="step"><span className="step-number">3</span><span className="step-text">Отсканировать QR-код камерой телефона</span></div>
        <div className="step"><span className="step-number">4</span><span className="step-text">Приложение открывается мгновенно!</span></div>
      </div>
      <div className="card-grid reveal" style={{ marginTop: '1.5rem' }}>
        <div className="card">
          <h3>🍎 iOS сборка</h3>
          <p>Требует Mac или облачную сборку через Expo EAS. Expo Go работает на всех устройствах без сборки.</p>
        </div>
        <div className="card">
          <h3>🤖 Windows-пользователи</h3>
          <p>Тестируйте на Android или используйте облачную сборку EAS Build. iOS-симулятора не будет.</p>
        </div>
      </div>
    </>
  )
}
