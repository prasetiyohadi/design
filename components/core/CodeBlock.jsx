import React from 'react';

/**
 * CodeBlock — the most frequent surface on the site. Filename/lang header bar,
 * monospace body, and a copy affordance. No line-number gutter noise by default.
 */
export function CodeBlock({ filename, language = 'bash', children }) {
  return (
    <div style={{
      background: 'var(--code-bg)',
      border: '1px solid var(--code-border)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-sm)',
    }}>
      {filename && (
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '8px 14px', borderBottom: '1px solid var(--code-border)',
          color: 'var(--text-tertiary)', fontSize: 'var(--text-xs)',
        }}>
          <span>{filename}</span>
          <span style={{ textTransform: 'uppercase', letterSpacing: 'var(--tracking-wide)' }}>{language}</span>
        </div>
      )}
      <pre style={{ margin: 0, padding: '16px 18px', overflowX: 'auto', color: 'var(--code-fg)', lineHeight: 1.6 }}>
        <code>{children}</code>
      </pre>
    </div>
  );
}
