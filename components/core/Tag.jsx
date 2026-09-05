import React from 'react';

/** Tag — topic/category chip. Used on posts, in filters, and in the tag index. */
export function Tag({ children, active = false, href }) {
  const style = {
    display: 'inline-flex',
    alignItems: 'center',
    fontFamily: 'var(--font-mono)',
    fontSize: 'var(--text-xs)',
    letterSpacing: 'var(--tracking-normal)',
    padding: '3px 10px',
    borderRadius: 'var(--radius-full)',
    border: `1px solid ${active ? 'var(--accent-border)' : 'var(--border-strong)'}`,
    background: active ? 'var(--accent-dim)' : 'transparent',
    color: active ? 'var(--accent)' : 'var(--text-secondary)',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
  };
  const Tg = href ? 'a' : 'span';
  return <Tg href={href} style={style}>{children}</Tg>;
}
