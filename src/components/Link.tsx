import type { AnchorHTMLAttributes } from 'react';
import { Link as RouterLink } from 'react-router';

// Pages on this site go through the router, everything else opens in a new tab
export default function Link({ href = '', ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  if (href.startsWith('/')) return <RouterLink to={href} {...props} />;
  return <a href={href} target="_blank" rel="noopener noreferrer" {...props} />;
}
