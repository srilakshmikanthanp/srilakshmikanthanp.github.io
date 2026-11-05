import Link from '../../components/Link';
import LinkCard from '../../components/LinkCard';
import SocialLinks from '../../components/SocialLinks';
import { ABOUT_PATH } from '../../constants';
import { PLATFORMS } from './platforms';

export default function Donate() {
  return (
    <div className="mx-auto flex min-h-screen max-w-xl flex-col px-6 py-12">
      <title>Donate | Sri Lakshmi Kanthan</title>
      <meta name="description" content="Support the open source work of Sri Lakshmi Kanthan P." />
      <header className="flex items-center gap-3">
        <Link href={ABOUT_PATH} aria-label="Home">
          <img src="/logo.png" alt="Sri Lakshmi Kanthan P" className="size-9 rounded-xl" />
        </Link>
        <span className="font-semibold text-fg">Sri Lakshmi Kanthan P</span>
      </header>

      <main className="flex flex-1 flex-col justify-center py-12">
        <h1 className="text-4xl font-bold tracking-tight text-fg sm:text-5xl">
          Thanks for <span className="text-primary">supporting</span> my work.
        </h1>
        <p className="mt-4 text-lg">
          Whether big or small, your contribution is a key part of making my open source projects happen. I really
          appreciate it!
        </p>
        <ul className="mt-10 flex flex-col gap-3" aria-label="Ways to donate">
          {PLATFORMS.map(platform => (
            <li key={platform.name}>
              <LinkCard {...platform} />
            </li>
          ))}
        </ul>
      </main>

      <footer>
        <SocialLinks />
      </footer>
    </div>
  );
}
