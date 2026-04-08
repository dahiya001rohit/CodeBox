import Editor from '@monaco-editor/react';
import { LANGUAGES } from '../../utils/constants';

export default function CodeEditor({ language, code, onChange }) {
  const monacoLang = LANGUAGES[language]?.monacoLanguage || 'javascript';

  return (
    <div style={{
      flex: 1,
      overflow: 'hidden',
      backgroundColor: '#0C0C0C',
      borderRight: '1px solid #1E1E1E',
    }}>
      <Editor
        height="100%"
        language={monacoLang}
        value={code}
        onChange={onChange}
        theme="vs-dark"
        options={{
          fontSize: 14,
          fontFamily: "'JetBrains Mono', monospace",
          lineHeight: 1.7,
          minimap: { enabled: false },
          scrollBeyondLastLine: false,
          padding: { top: 16, bottom: 16 },
          renderLineHighlight: 'gutter',
          cursorBlinking: 'smooth',
          smoothScrolling: true,
          tabSize: 2,
          wordWrap: 'on',
          scrollbar: {
            verticalScrollbarSize: 6,
            horizontalScrollbarSize: 6,
          },
        }}
      />
    </div>
  );
}
