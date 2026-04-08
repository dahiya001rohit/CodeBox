import { useEffect, useState } from 'react';
import { useExecution } from '../hooks/useExecution';
import { LANGUAGES } from '../utils/constants';
import EditorHeader from '../components/editor/EditorHeader';
import CodeEditor from '../components/editor/CodeEditor';
import OutputPanel from '../components/editor/OutputPanel';
import StatusBar from '../components/editor/StatusBar';

export default function EditorPage() {
  const [language, setLanguage] = useState('node');
  const [code, setCode] = useState(LANGUAGES['node'].defaultCode);
  const { isConnected, status, output, duration, queuePosition, runCode, killCode, clearOutput } = useExecution();

  function handleLanguageChange(lang) {
    setLanguage(lang);
    setCode(LANGUAGES[lang].defaultCode);
  }

  function handleRun() {
    runCode(language, code);
  }

  // Ctrl+Enter to run
  useEffect(() => {
    function onKeyDown(e) {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        handleRun();
      }
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  });

  return (
    <div style={{
      height: '100%',
      backgroundColor: '#0C0C0C',
      color: '#F2F0EC',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
    }}>
      <EditorHeader
        language={language}
        onLanguageChange={handleLanguageChange}
        status={status}
        onRun={handleRun}
        onKill={killCode}
        onClear={clearOutput}
      />

      <main style={{
        display: 'flex',
        flex: 1,
        marginTop: '52px',
        marginBottom: '26px',
        overflow: 'hidden',
      }}>
        <CodeEditor
          language={language}
          code={code}
          onChange={setCode}
        />
        <OutputPanel
          output={output}
          status={status}
          queuePosition={queuePosition}
        />
      </main>

      <StatusBar
        isConnected={isConnected}
        status={status}
        duration={duration}
        language={language}
      />
    </div>
  );
}
