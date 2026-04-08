import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide14GoldenWorkflow({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">13</span>
      <h2 className="reveal">Золотой workflow</h2>
      <p className="subtitle reveal">Как правильно работать с Cursor</p>
      <div className="steps">
        <div className="step">
          <span className="step-number">01</span>
          <span className="step-text"><strong>Rules</strong> — настрой правила проекта</span>
          <p>.cursor/rules — стек, конвенции, структура. Один раз — работает на все сессии</p>
        </div>
        <div className="step">
          <span className="step-number">02</span>
          <span className="step-text"><strong>Ask</strong> — собери контекст</span>
          <p>Спроси агента о кодовой базе: что замокано, где типы, какая структура</p>
        </div>
        <div className="step">
          <span className="step-number">03</span>
          <span className="step-text"><strong>Plan</strong> — декомпозиция задачи</span>
          <p>Верхнеуровневое описание → агент разбивает на шаги. Ревью → Build Plan</p>
        </div>
        <div className="step">
          <span className="step-number">04</span>
          <span className="step-text"><strong>Agent</strong> — выполнение</span>
          <p>Агент выполняет план. Ревью каждого diff. Checkpoint → откат если что</p>
        </div>
        <div className="step">
          <span className="step-number">05</span>
          <span className="step-text"><strong>Ask</strong> — итерация</span>
          <p>Проверь результат. Задай уточняющие вопросы. Новый цикл если нужно</p>
        </div>
      </div>
    </>
  )
}
