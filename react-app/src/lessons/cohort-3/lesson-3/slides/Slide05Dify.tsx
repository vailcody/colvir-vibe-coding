import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide05Dify({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">04</span>
      <h2 className="reveal">Наш воркфлоу в Dify</h2>
      <p className="subtitle reveal">User Input → Doc Extractor → LLM → Structured Output</p>
    </>
  )
}
