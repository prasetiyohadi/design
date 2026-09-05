import React from 'react';

/** Nav — minimal top navigation. Stays out of the way of the reading column. */
export function Nav({ active = 'writing' }) {
  const items = [
    { key: 'writing', label: 'Writing', href: '/' },
    { key: 'about', label: 'About', href: '/about' },
    { key: 'consulting', label: 'Consulting', href: '/consulting' },
  ];
  return (
    <nav style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: 'var(--space-5) 0', borderBottom: '1px solid var(--border-hairline)',
    }}>
      <a href="/" style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, fontSize: 'var(--text-sm)', color: 'var(--text-primary)', textDecoration: 'none' }}>
        <span style={{ color: 'var(--accent)' }}>~/</span>pras-labs
      </a>
      <div style={{ display: 'flex', gap: 28 }}>
        {items.map((it) => (
          <a key={it.key} href={it.href} style={{
            fontFamily: 'var(--font-heading)', fontSize: 'var(--text-sm)', fontWeight: 500,
            color: active === it.key ? 'var(--text-primary)' : 'var(--text-secondary)',
            textDecoration: 'none', borderBottom: active === it.key ? '2px solid var(--accent)' : '2px solid transparent',
            paddingBottom: 4,
          }}>{it.label}</a>
        ))}
      </div>
    </nav>
  );
}
