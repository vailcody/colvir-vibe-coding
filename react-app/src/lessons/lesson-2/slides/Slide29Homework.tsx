import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide29Homework({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">28</span>
      <h2 className="reveal">Домашнее задание</h2>
      <div className="steps">
        <div className="step">
          <span className="step-number">01</span>
          <div>
            <span className="step-text">Развернуть прототип в Cursor</span>
            <p className="step-desc">Склонировать репо, установить зависимости, запустить локально</p>
          </div>
        </div>
        <div className="step">
          <span className="step-number">02</span>
          <div>
            <span className="step-text">Настроить .cursor/rules + .cursorignore</span>
            <p className="step-desc">Rules: стек и конвенции. Ignore: исключить node_modules, dist, .next</p>
          </div>
        </div>
        <div className="step">
          <span className="step-number">03</span>
          <div>
            <span className="step-text">Оживить прототип через Plan → Agent</span>
            <p className="step-desc">Верхнеуровневое описание → Plan декомпозирует → Agent выполняет</p>
          </div>
        </div>
        <div className="step">
          <span className="step-number">04</span>
          <div>
            <span className="step-text">Создать skill или hook</span>
            <p className="step-desc">/create-skill для unit-тестов или hooks.json для автолинта</p>
          </div>
        </div>
      </div>
    </>
  )
}
