export interface CodeBlockProps {
  filename?: string;
  /** @default 'bash' */
  language?: string;
  children: React.ReactNode;
}

/**
 * @startingPoint section="Code" subtitle="Filename header + monospace body" viewport="700x220"
 */
export declare function CodeBlock(props: CodeBlockProps): JSX.Element;
