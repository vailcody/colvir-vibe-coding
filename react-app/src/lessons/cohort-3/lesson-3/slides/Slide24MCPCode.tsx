import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide24MCPCode({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">23</span>
      <h2 className="reveal">MCP-сервер: минимальный код</h2>
      <div className="code-block reveal" style={{ fontSize: '0.7rem' }}>
        <span className="comment">// src/index.ts — Hello World MCP</span><br /><br />
        import {'{'} McpServer {'}'} from "@modelcontextprotocol/sdk/server/mcp.js";<br />
        import {'{'} StdioServerTransport {'}'} from "@modelcontextprotocol/sdk/server/stdio.js";<br />
        import {'{'} z {'}'} from "zod";<br /><br />
        const server = new McpServer({'{'} name: "test-cases", version: "1.0.0" {'}'});<br /><br />
        server.<strong>registerTool</strong>(<br />
        &nbsp;&nbsp;"add_test_case",<br />
        &nbsp;&nbsp;{'{'}<br />
        &nbsp;&nbsp;&nbsp;&nbsp;description: "Add a new test case to the database",<br />
        &nbsp;&nbsp;&nbsp;&nbsp;inputSchema: z.object({'{'}<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;title: z.string().describe("Test case title"),<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;steps: z.string().describe("Steps to reproduce"),<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;expected: z.string().describe("Expected result")<br />
        &nbsp;&nbsp;&nbsp;&nbsp;{'}'})<br />
        &nbsp;&nbsp;{'}'},<br />
        &nbsp;&nbsp;async ({'{'} title, steps, expected {'}'}) =&gt; {'{'}<br />
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="comment">// INSERT INTO test_cases ...</span><br />
        &nbsp;&nbsp;&nbsp;&nbsp;return {'{'} content: [{'{'} type: "text", text: `Created: {'${title}'}` {'}'}] {'}'};<br />
        &nbsp;&nbsp;{'}'}<br />
        );<br /><br />
        const transport = new StdioServerTransport();<br />
        await server.connect(transport);
      </div>
    </>
  )
}
