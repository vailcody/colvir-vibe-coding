import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide01Title({}: SlideProps) {
  return (
    <>
      <div className="geo-square" style={{ width: 120, height: 120, bottom: '10%', right: '15%', opacity: 0.15 }} />
      <div className="geo-line" style={{ width: 200, height: 3, top: '20%', right: '8%' }} />
      <h1 className="reveal">Занятие 2</h1>
      <p className="subtitle reveal">Оживляем прототип в Cursor</p>
      <p className="meta reveal">Константин Чуйков · 24 марта 2026</p>
    </>
  )
}
