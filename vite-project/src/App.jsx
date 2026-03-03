import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import { MenuBar } from "./components/MenuBar"
import "./styles.scss"

export default function App() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: `
      <h2>Hello Tiptap 👋</h2>
      <p>This is a full functional editor.</p>
    `,
  })

  return (
    <div className="editor-wrapper">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} className="tiptap" />
    </div>
  )
}