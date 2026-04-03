import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide07Prompt({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">07</span>
      <h2 className="reveal">Промт для Rork</h2>
      <pre className="code-block reveal" style={{
        background: '#1a1a1a',
        color: '#f8f8f2',
        padding: '1.5rem',
        borderRadius: '4px',
        fontSize: 'clamp(0.8rem, 1.3vw, 1rem)',
        lineHeight: 1.6,
        overflowX: 'auto',
        whiteSpace: 'pre-wrap',
        fontFamily: 'monospace',
        marginTop: '1rem'
      }}>
{`Создай мобильное приложение на React Native + Expo
для записи и хранения голосовых заметок
с автоматической транскрибацией.

Экраны:
1. Главный: кнопка записи, таймер, статус
2. Список: карточки с текстом, датой, плеером
3. Детальный просмотр: текст, плеер, удаление

Функционал:
- Запись аудио через микрофон
- Имитация транскрибации (моковые данные)
- Локальное хранение + удаление заметок

UX: тёмная тема, крупные элементы управления`}
      </pre>
      <p className="reveal" style={{ marginTop: '1rem', color: 'var(--text-secondary)', fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)' }}>
        Имитация транскрибации — сначала проходим весь UX, потом подключаем реальный бэкенд
      </p>
    </>
  )
}
