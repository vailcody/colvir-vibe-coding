import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide28Homework({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">27</span>
      <h2 className="reveal">Домашнее задание</h2>
      <div className="steps">
        <div className="step">
          <span className="step-number">01</span>
          <span className="step-text"><strong>Развернуть прототип в Cursor</strong></span>
          <p>Склонировать репо, установить зависимости, запустить локально</p>
        </div>
        <div className="step">
          <span className="step-number">02</span>
          <span className="step-text"><strong>Настроить .cursor/rules + .cursorignore</strong></span>
          <p>Rules: стек и конвенции. Ignore: исключить node_modules, dist, .next</p>
        </div>
        <div className="step">
          <span className="step-number">03</span>
          <span className="step-text"><strong>Оживить прототип через Plan → Agent</strong></span>
          <p>Верхнеуровневое описание → Plan декомпозирует → Agent выполняет</p>
        </div>
        <div className="step">
          <span className="step-number">04</span>
          <span className="step-text"><strong>Создать skill или hook</strong></span>
          <p>/create-skill для unit-тестов или hooks.json для автолинта</p>
        </div>
      </div>
    </>
  )
}
