import React from 'react';

/** AuthorBio — warm, brief human block. Appears at end of posts and on the about page. */
export function AuthorBio({ name, role, blurb, avatarSrc, compact = false }) {
  return (
    <div style={{
      display: 'flex', gap: 16, alignItems: 'flex-start',
      padding: compact ? 0 : 'var(--space-5)',
      background: compact ? 'transparent' : 'var(--surface)',
      border: compact ? 'none' : '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-md)',
    }}>
      <img src={avatarSrc} alt={name} style={{
      width: 44, height: 44, borderRadius: 'var(--radius-full)', flexShrink: 0,
      border: '1px solid var(--accent-warm-border)', objectFit: 'cover',
    }} />
      <div>
        <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 'var(--text-base)', color: 'var(--text-primary)' }}>{name}</div>
        <div style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-xs)', color: 'var(--accent-warm)', letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', margin: '2px 0 8px' }}>{role}</div>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)', margin: 0, maxWidth: '56ch' }}>{blurb}</p>
      </div>
    </div>
  );
}
