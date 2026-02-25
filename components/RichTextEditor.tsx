"use client";

import { Link } from "@tiptap/extension-link";
import Underline from "@tiptap/extension-underline";
import { TextStyle } from "@tiptap/extension-text-style";
import { Color } from "@tiptap/extension-color";
import StarterKit from "@tiptap/starter-kit";
import { EditorContent, useEditor } from "@tiptap/react";
import { useEffect } from "react";

type Props = {
  value: string;
  onChange: (html: string) => void;
};

export default function RichTextEditor({ value, onChange }: Props) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [1, 2, 3, 4] },
      }),
      Underline,
      TextStyle,
      Color,
      Link.configure({
        autolink: true,
        linkOnPaste: true,
        openOnClick: true,
      }),
    ],
    content: value,
    editorProps: {
      attributes: {
        class:
          "prose dark:prose-invert max-w-none min-h-[220px] rounded-xl border border-neutral-200 bg-white p-4 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900",
      },
    },
    onUpdate: ({ editor: currentEditor }) => {
      onChange(currentEditor.getHTML());
    },
    immediatelyRender: false,
  });

  useEffect(() => {
    if (!editor) return;
    if (editor.getHTML() !== value) {
      editor.commands.setContent(value || "<p></p>", { emitUpdate: false });
    }
  }, [value, editor]);

  if (!editor) return null;

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-2 rounded-xl border border-neutral-200 bg-neutral-50 p-2 dark:border-neutral-700 dark:bg-neutral-800">
        <ToolbarButton onClick={() => editor.chain().focus().toggleBold().run()} label="Bold" />
        <ToolbarButton onClick={() => editor.chain().focus().toggleItalic().run()} label="Italic" />
        <ToolbarButton onClick={() => editor.chain().focus().toggleUnderline().run()} label="Underline" />
        <ToolbarButton onClick={() => editor.chain().focus().toggleBulletList().run()} label="Bullets" />
        <ToolbarButton onClick={() => editor.chain().focus().toggleOrderedList().run()} label="Numbers" />
        <ToolbarButton onClick={() => editor.chain().focus().toggleBlockquote().run()} label="Quote" />
        <ToolbarButton onClick={() => editor.chain().focus().toggleCodeBlock().run()} label="Code" />
        <ToolbarButton onClick={() => editor.chain().focus().setColor("#854d0e").run()} label="Highlight" />
        <ToolbarButton onClick={() => editor.chain().focus().setColor("#1d4ed8").run()} label="Blue" />
        {[1, 2, 3, 4].map((level) => (
          <ToolbarButton
            key={level}
            onClick={() =>
              editor
                .chain()
                .focus()
                .toggleHeading({ level: level as 1 | 2 | 3 | 4 })
                .run()
            }
            label={`H${level}`}
          />
        ))}
        <ToolbarButton
          onClick={() => {
            const url = window.prompt("Enter URL");
            if (!url) return;
            editor.chain().focus().setLink({ href: url }).run();
          }}
          label="Link"
        />
      </div>
      <EditorContent editor={editor} />
    </div>
  );
}

function ToolbarButton({
  onClick,
  label,
}: {
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-lg border border-neutral-300 bg-white px-2.5 py-1 text-xs font-semibold text-neutral-700 transition hover:bg-neutral-100 dark:border-neutral-600 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:bg-neutral-700"
    >
      {label}
    </button>
  );
}
