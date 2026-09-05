export interface ButtonProps {
  /** @default 'primary' */
  variant?: 'primary' | 'secondary' | 'ghost';
  /** @default 'md' */
  size?: 'sm' | 'md';
  /** Renders as <a> when set, else <button>. */
  href?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

/**
 * @startingPoint section="Buttons" subtitle="Primary, secondary, ghost CTAs" viewport="700x140"
 */
export declare function Button(props: ButtonProps): JSX.Element;
