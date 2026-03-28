import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide28BestPractices({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">27</span>
      <h2 className="reveal">Best Practices</h2>
      <ul className="content-list stagger-list">
        <li><strong>Rules → Plan → Agent.</strong> Сначала настрой правила, потом планируй, потом выполняй</li>
        <li><strong>Git-checkpoint перед агентом.</strong> Hook sessionStart → auto-commit. Всегда можно откатиться</li>
        <li><strong>afterFileEdit → lint.</strong> Агент видит ошибки линтера и исправляет сам</li>
        <li><strong>Ревью каждого diff.</strong> AI генерирует уязвимости и ненужный код. Вы — архитектор</li>
        <li><strong>Субагент-верификатор.</strong> /verifier после задачи — независимая проверка что реально работает</li>
        <li><strong>Не доверяйте слепо.</strong> AI уверенно врёт. Проверяйте API, библиотеки, типы</li>
      </ul>
    </>
  )
}
