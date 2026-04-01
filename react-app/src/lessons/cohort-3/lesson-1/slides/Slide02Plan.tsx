import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide02Plan({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">02</span>
      <h2 className="reveal">О чём сегодня поговорим?</h2>
      <ul className="content-list stagger-list">
        <li>Как монетизировать идеи: фриланс, найм, свой продукт</li>
        <li>Как найти нишу, где уже есть платёжеспособный спрос</li>
        <li>Как проверить гипотезу, не написав ни строчки кода</li>
        <li>Браузерные агенты: самый быстрый путь к первому результату</li>
        <li>Как правильно собрать прототип и показать его аудитории</li>
      </ul>
    </>
  )
}
