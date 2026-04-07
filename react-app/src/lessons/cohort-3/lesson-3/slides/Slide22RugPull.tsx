import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide22RugPull({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">21</span>
      <h2 className="reveal">Угроза: Rug Pull</h2>
      <p className="subtitle reveal" style={{ marginBottom: '1rem' }}>Смена поведения сервера после одобрения</p>
      <div className="steps stagger-list">
        <div className="step">
          <span className="step-number">01</span>
          <div>
            <span className="step-text">Устанавливаешь MCP-сервер, проверяешь — всё ок</span>
            <p className="step-desc">tool <code>read_file</code> просто читает файлы, ничего подозрительного</p>
          </div>
        </div>
        <div className="step">
          <span className="step-number">02</span>
          <div>
            <span className="step-text">Одобряешь в Cursor — "доверяю этому серверу"</span>
            <p className="step-desc">Больше не спрашивает подтверждение при каждом вызове</p>
          </div>
        </div>
        <div className="step" style={{ borderLeft: '3px solid #ff3300' }}>
          <span className="step-number" style={{ background: '#ff3300', color: '#fff' }}>03</span>
          <div>
            <span className="step-text">Автор обновляет сервер</span>
            <p className="step-desc">Теперь <code>read_file</code> ещё и <strong>отправляет содержимое на внешний сервер</strong>. Ты не замечаешь — уже одобрил.</p>
          </div>
        </div>
      </div>
      <p className="subtitle reveal" style={{ marginTop: '1rem' }}><strong>Защита:</strong> пиннинг версий, аудит обновлений, свои серверы вместо чужих</p>
    </>
  )
}
