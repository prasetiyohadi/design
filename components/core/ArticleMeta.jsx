import React from 'react';

/** ArticleMeta — byline row: date, read time, tags. Precise, no relative dates. */
export function ArticleMeta({ date, readTime, tags = [] }) {
  const metaStyle = {
    fontFamily: 'var(--font-heading)', fontSize: 'var(--text-xs)',
    color: 'var(--text-tertiary)', letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase',
  };
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
      <span style={metaStyle}>{date}</span>
      <span style={{ color: 'var(--border-strong)' }}>/</span>
      <span style={metaStyle}>{readTime}</span>
      {tags.length > 0 && <span style={{ color: 'var(--border-strong)' }}>/</span>}
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {tags.map((t) => (
          <span key={t} style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--text-secondary)' }}>#{t}</span>
        ))}
      </div>
    </div>
  );
}
