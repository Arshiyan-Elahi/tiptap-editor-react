import { useEditorState } from "@tiptap/react"
import { menuBarStateSelector } from "./menuBarState"

export const MenuBar = ({ editor }) => {
    const editorState = useEditorState({
        editor,
        selector: menuBarStateSelector,
    })

    if (!editor) return null

    return (
        <div className="control-group">
            <div className="button-group">

                {/* TEXT FORMATTING */}
                <button
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    disabled={!editorState.canBold}
                    className={editorState.isBold ? "is-active" : ""}
                >
                    Bold
                </button>

                <button
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    disabled={!editorState.canItalic}
                    className={editorState.isItalic ? "is-active" : ""}
                >
                    Italic
                </button>

                <button
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    disabled={!editorState.canStrike}
                    className={editorState.isStrike ? "is-active" : ""}
                >
                    Strike
                </button>

                <button
                    onClick={() => editor.chain().focus().toggleCode().run()}
                    disabled={!editorState.canCode}
                    className={editorState.isCode ? "is-active" : ""}
                >
                    Code
                </button>

                <button onClick={() => editor.chain().focus().unsetAllMarks().run()}>
                    Clear Marks
                </button>

                <button onClick={() => editor.chain().focus().clearNodes().run()}>
                    Clear Nodes
                </button>

                {/* HEADINGS */}
                <button
                    onClick={() => editor.chain().focus().setParagraph().run()}
                    className={editorState.isParagraph ? "is-active" : ""}
                >
                    Paragraph
                </button>

                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                    className={editorState.isHeading1 ? "is-active" : ""}
                >
                    H1
                </button>

                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                    className={editorState.isHeading2 ? "is-active" : ""}
                >
                    H2
                </button>

                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                    className={editorState.isHeading3 ? "is-active" : ""}
                >
                    H3
                </button>

                {/* LISTS */}
                <button
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    className={editorState.isBulletList ? "is-active" : ""}
                >
                    Bullet List
                </button>

                <button
                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
                    className={editorState.isOrderedList ? "is-active" : ""}
                >
                    Ordered List
                </button>

                {/* BLOCKS */}
                <button
                    onClick={() => editor.chain().focus().toggleBlockquote().run()}
                    className={editorState.isBlockquote ? "is-active" : ""}
                >
                    Blockquote
                </button>

                <button
                    onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                    className={editorState.isCodeBlock ? "is-active" : ""}
                >
                    Code Block
                </button>

                <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
                    Horizontal Rule
                </button>

                <button onClick={() => editor.chain().focus().setHardBreak().run()}>
                    Hard Break
                </button>

                {/* HISTORY */}
                <button
                    onClick={() => editor.chain().focus().undo().run()}
                    disabled={!editorState.canUndo}
                >
                    Undo
                </button>

                <button
                    onClick={() => editor.chain().focus().redo().run()}
                    disabled={!editorState.canRedo}
                >
                    Redo
                </button>

            </div>
        </div>
    )
}