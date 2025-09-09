'use client';

import { ReactNode } from 'react';

interface MDRendererProps {
  content: string;
}

export default function MDRenderer({ content }: MDRendererProps) {
  // Simple markdown renderer for MVP
  const renderMarkdown = (text: string): ReactNode => {
    const lines = text.split('\n');
    const elements: ReactNode[] = [];
    let currentIndex = 0;

    while (currentIndex < lines.length) {
      const line = lines[currentIndex];
      
      // Headers
      if (line.startsWith('# ')) {
        elements.push(
          <h1 key={currentIndex} className="text-3xl font-bold text-white mb-6 mt-8">
            {line.substring(2)}
          </h1>
        );
      } else if (line.startsWith('## ')) {
        elements.push(
          <h2 key={currentIndex} className="text-2xl font-bold text-white mb-4 mt-6">
            {line.substring(3)}
          </h2>
        );
      } else if (line.startsWith('### ')) {
        elements.push(
          <h3 key={currentIndex} className="text-xl font-semibold text-white mb-3 mt-5">
            {line.substring(4)}
          </h3>
        );
      }
      // Lists
      else if (line.startsWith('- ')) {
        const listItems: string[] = [];
        let listIndex = currentIndex;
        
        while (listIndex < lines.length && lines[listIndex].startsWith('- ')) {
          listItems.push(lines[listIndex].substring(2));
          listIndex++;
        }
        
        elements.push(
          <ul key={currentIndex} className="list-disc list-inside text-white/80 mb-4 space-y-2">
            {listItems.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        );
        
        currentIndex = listIndex - 1;
      }
      // Paragraphs
      else if (line.trim() && !line.startsWith('#')) {
        elements.push(
          <p key={currentIndex} className="text-white/80 mb-4 leading-relaxed">
            {line}
          </p>
        );
      }
      // Empty lines
      else if (line.trim() === '') {
        elements.push(<div key={currentIndex} className="mb-2" />);
      }
      
      currentIndex++;
    }

    return elements;
  };

  return (
    <div className="prose prose-invert max-w-none">
      {renderMarkdown(content)}
    </div>
  );
}