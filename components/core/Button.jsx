import React from 'react';

/**
 * Button — primary CTA, secondary outline, and ghost text variants.
 * Terminal-adjacent: no gradients, no shadows on hover, just color + border shifts.
 */
export function Button({ variant = 'primary', size = 'md', href, onClick, children, icon }) {
  const sizes = {
    sm: { padding: '6px 12px', fontSize: 'var(--text-xs)' },
    md: { padding: '10px 18px', fontSize: 'var(--text-sm)' },
  };
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    fontFamily: 'var(--font-heading)',
    fontWeight: 600,
    borderRadius: 'var(--radius-sm)',
    border: '1px solid transparent',
    cursor: 'pointer',
    transition: 'background var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard), color var(--duration-fast) var(--ease-standard)',
    textDecoration: 'none',
    ...sizes[size],
  };
  const variants = {
    primary: { background: 'var(--accent)', color: 'var(--text-on-accent)' },
    secondary: { background: 'transparent', color: 'var(--text-primary)', borderColor: 'var(--border-strong)' },
    ghost: { background: 'transparent', color: 'var(--accent)' },
  };
  const Tag = href ? 'a' : 'button';
  return (
    <Tag href={href} onClick={onClick} style={{ ...base, ...variants[variant] }}>
      {icon}{children}
    </Tag>
  );
}
