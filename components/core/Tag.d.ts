export interface TagProps {
  children: React.ReactNode;
  /** @default false */
  active?: boolean;
  href?: string;
}

/**
 * @startingPoint section="Tags" subtitle="Topic chips: kubernetes, gitops, networking…" viewport="700x100"
 */
export declare function Tag(props: TagProps): JSX.Element;
