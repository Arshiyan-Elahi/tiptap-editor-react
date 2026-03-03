
# Tiptap Rich Text Editor (React + Vite)

A modern rich text editor built using Tiptap, React, and Vite.

This project demonstrates how to integrate Tiptap with React and build a fully functional formatting toolbar including headings, lists, code blocks, and undo/redo functionality.

---

## Tech Stack

* React
* Vite
* Tiptap
* ProseMirror (under the hood)
* SCSS

---

## Features

* Bold
* Italic
* Strike
* Inline Code
* Paragraph
* Headings (H1, H2, H3)
* Bullet List
* Ordered List
* Blockquote
* Code Block
* Horizontal Rule
* Hard Break
* Undo / Redo
* Active button states
* Clean modern UI

---

## Project Structure

```
src/
│
├── App.jsx
├── styles.scss
│
├── components/
│   ├── MenuBar.jsx
│   └── menuBarState.js
│
└── main.jsx
```

---

## How It Works

The editor is created using `useEditor()` from Tiptap.

StarterKit provides most formatting features including:

* Headings
* Lists
* Code
* Blockquotes
* History (Undo/Redo)

The toolbar uses `useEditorState()` to track active formatting states and enable/disable buttons dynamically.

---

## Installation

Clone the repository:

```
git clone https://github.com/yourusername/tiptap-editor.git
```

Go into the project folder:

```
cd tiptap-editor
```

Install dependencies:

```
npm install
```

Run development server:

```
npm run dev
```

---

## Future Improvements

* Save editor content as JSON
* Load saved content
* Add image upload
* Add link support
* Add slash commands (Notion style)
* Add collaborative editing

---

## Author

Built as a learning and experimentation project to understand Tiptap and ProseMirror architecture.

