import type { IconType } from 'react-icons';
import { LuFacebook, LuGithub, LuInstagram, LuLinkedin, LuMail, LuTwitter } from 'react-icons/lu';
import { GITHUB_URL } from '../constants';
import Link from './Link';

interface SocialLink {
  name: string;
  url: string;
  icon: IconType;
}

const SOCIAL_LINKS: SocialLink[] = [
  { name: 'GitHub', url: GITHUB_URL, icon: LuGithub },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/srilakshmikanthanp', icon: LuLinkedin },
  { name: 'Email', url: 'mailto:srilakshmikanthanp@gmail.com', icon: LuMail },
  { name: 'Twitter', url: 'https://twitter.com/itsmekanth', icon: LuTwitter },
  { name: 'Instagram', url: 'https://www.instagram.com/srilakshmikanthanp/', icon: LuInstagram },
  { name: 'Facebook', url: 'https://www.facebook.com/srilakshmikanthanp', icon: LuFacebook }
];

export default function SocialLinks({ className = '' }: { className?: string }) {
  return (
    <ul className={`flex gap-5 ${className}`} aria-label="Social links">
      {SOCIAL_LINKS.map(({ name, url, icon: Icon }) => (
        <li key={name}>
          <Link
            href={url}
            aria-label={name}
            title={name}
            className="inline-flex text-xl text-muted transition hover:scale-125 hover:text-primary"
          >
            <Icon />
          </Link>
        </li>
      ))}
    </ul>
  );
}
