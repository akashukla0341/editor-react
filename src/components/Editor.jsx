import React from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'

const extensions = [
  StarterKit,
  Underline
]

const Editor = ({ getValue }) => {
  const editor = useEditor({
    extensions,
    content: '',
  })

  if (!editor) {
    return null
  }

  const handleSubmit = () => {
    const result = editor.getHTML()
    getValue(result)
  }

  const resetBtn = () => {
    editor.commands.setContent('')
  }

  return (
    <div>
      <h3 className='h3Class text-center mt-4 mb-3 p-3'>TEXT EDITOR</h3>
      <div>
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          type='button'
          className={editor.isActive('bold') ? 'is-active btn btn-light' : 'btn btn-light'}
        >
          <strong>B</strong>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          type='button'
          className={editor.isActive('italic') ? 'is-active btn btn-light' : 'btn btn-light'}
        >
          <i>I</i>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          type='button'
          className={editor.isActive('strike') ? 'is-active btn btn-light' : 'btn btn-light'}
        >
          <strike>strike</strike>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCode().run()}
          type='button'
          className={editor.isActive('code') ? 'is-active btn btn-light' : 'btn btn-light'}
        >
          <code>code</code>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          type='button'
          className={editor.isActive('underline') ? 'is-active btn btn-light' : 'btn btn-light'}
        >
          <u>U</u>
        </button>
        <button
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={editor.isActive('paragraph') ? 'is-active btn btn-light' : 'btn btn-light'}
          type='button'
        >
          p
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={editor.isActive('heading', { level: 1 }) ? 'is-active btn btn-light' : 'btn btn-light'}
          type='button'
        >
          h1
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={editor.isActive('heading', { level: 2 }) ? 'is-active btn btn-light' : 'btn btn-light'}
          type='button'
        >
          h2
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={editor.isActive('heading', { level: 3 }) ? 'is-active btn btn-light' : 'btn btn-light'}
          type='button'
        >
          h3
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
          className={editor.isActive('heading', { level: 4 }) ? 'is-active btn btn-light' : 'btn btn-light'}
          type='button'
        >
          h4
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
          className={editor.isActive('heading', { level: 5 }) ? 'is-active btn btn-light' : 'btn btn-light'}
          type='button'
        >
          h5
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
          className={editor.isActive('heading', { level: 6 }) ? 'is-active btn btn-light' : 'btn btn-light'}
          type='button'
        >
          h6
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive('bulletList') ? 'is-active btn btn-light' : 'btn btn-light'}
          type='button'
        >
          ul
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive('orderedList') ? 'is-active btn btn-light' : 'btn btn-light'}
          type='button'
        >
          ol
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={editor.isActive('codeBlock') ? 'is-active btn btn-light' : 'btn btn-light'}
          type='button'
        >
          code block
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={editor.isActive('blockquote') ? 'is-active btn btn-light' : 'btn btn-light'}
          type='button'
        >
          bq
        </button>
        <button onClick={() => editor.chain().focus().setHorizontalRule().run()} type='button' className='btn btn-light'>
          hr
        </button>
        <button onClick={() => editor.chain().focus().setHardBreak().run()} type='button' className='btn btn-light'>
          hard break
        </button>
        <button
          onClick={() => editor.chain().focus().undo().run()}
          type='button'
          className='btn btn-light'
          disabled={!editor.can().undo()}
        >
          undo
        </button>
        <button
          onClick={() => editor.chain().focus().redo().run()}
          type='button'
          className='btn btn-light'
          disabled={!editor.can().redo()}
        >
          redo
        </button>
      </div>
      <div>
        <EditorContent editor={editor} />
      </div>
      <div className='d-grid gap-2 d-md-flex justify-content-md-end m-2'>
          <button className='btn btn-success ' type='button' onClick={handleSubmit} disabled={!editor.getHTML().trim()}>
            Submit
          </button>
          <button type="button" className="btn btn-outline-secondary " onClick={resetBtn}>Reset</button>
        </div>
    </div>
  )
}

export default Editor
