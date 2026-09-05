export interface ConsultCTAProps {
  /** @default 'Working on something similar?' */
  heading?: string;
  body?: string;
  /** @default 'Get in touch' */
  buttonLabel?: string;
  /** @default '/contact' */
  href?: string;
}

/**
 * @startingPoint section="Consult CTA" subtitle="Understated consulting prompt" viewport="700x140"
 */
export declare function ConsultCTA(props: ConsultCTAProps): JSX.Element;
