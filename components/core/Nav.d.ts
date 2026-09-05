export interface NavProps {
  /** @default 'writing' */
  active?: 'writing' | 'about' | 'consulting';
}

/**
 * @startingPoint section="Navigation" subtitle="Minimal top nav" viewport="700x70"
 */
export declare function Nav(props: NavProps): JSX.Element;
