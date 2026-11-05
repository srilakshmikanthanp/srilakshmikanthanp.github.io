import { SiBuymeacoffee, SiGithubsponsors, SiPaypal } from 'react-icons/si';
import type { LinkItem } from '../../components/LinkCard';

export const PLATFORMS: LinkItem[] = [
  {
    name: 'GitHub Sponsors',
    description: 'Support my work monthly or once',
    url: 'https://github.com/sponsors/srilakshmikanthanp?o=esb',
    icon: SiGithubsponsors
  },
  {
    name: 'PayPal',
    description: 'Send a contribution of any amount',
    url: 'https://www.paypal.me/srilakshmikanthanp',
    icon: SiPaypal
  },
  {
    name: 'Buy Me a Coffee',
    description: 'Buy me a coffee as a thank you',
    url: 'https://www.buymeacoffee.com/srilakshmikanthanp',
    icon: SiBuymeacoffee
  }
];
