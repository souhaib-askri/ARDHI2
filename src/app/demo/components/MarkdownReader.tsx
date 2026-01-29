import React from "react";

interface MarkdownMessageProps {
  content: string;
}

function MarkdownMessage({ content }: MarkdownMessageProps) {
  return (
    <div className="markdown-body prose prose-slate max-w-none">
      <div className="whitespace-pre-line">{content}</div>
    </div>
  );
}

export default MarkdownMessage;

