"use client";

import React, { useEffect, useRef, useState } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";

const Editor = () => {
  const editorRef = useRef(null);
  const [editor, setEditor] = useState(null);

  useEffect(() => {
    const newEditor = new EditorJS({
      holder: editorRef.current,
      // Add your Editor.js configuration here
      // For example, you can add tools, initial data, etc.
      tools: {
        header: {
          class: Header,
          inlineToolbar: true,
          levels: [1, 2],
        },
      },
    });
    setEditor(newEditor);

    return () => {
      newEditor.destroy();
    };
  }, []);

  const handleSave = async () => {
    try {
      const output = await editor.save();
      console.log(output);
    } catch (error) {
      console.error("Saving failed:", error);
    }
  };

  return (
    <div className=" p-4 rounded-lg">
      <div
        ref={editorRef}
        className="bg-white rounded-lg shadow-md p-4 mb-4"
      ></div>
      <button
        onClick={handleSave}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        Save
      </button>
    </div>
  );
};

export default Editor;
