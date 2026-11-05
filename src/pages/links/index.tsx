import { LuHeart } from 'react-icons/lu';
import Link from '../../components/Link';
import LinkCard from '../../components/LinkCard';
import SocialLinks from '../../components/SocialLinks';
import { ABOUT_PATH, DONATE_PATH } from '../../constants';
import { PROJECTS } from './projects';

export default function Links() {
  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col items-center px-6 py-16">
      <title>Links | Sri Lakshmi Kanthan</title>
      <meta name="description" content="Links to the projects and profiles of Sri Lakshmi Kanthan P." />
      <Link
        href={ABOUT_PATH}
        aria-label="Home"
        className="size-24 overflow-hidden rounded-full ring-2 ring-primary ring-offset-4 ring-offset-bg"
      >
        <img src="/me.jpg" alt="Sri Lakshmi Kanthan" className="size-full origin-[47%_6%] scale-[2.26] object-cover" />
      </Link>
      <h1 className="mt-6 text-3xl font-bold tracking-tight text-fg">Sri Lakshmi Kanthan</h1>
      <p className="mt-1 font-mono text-sm text-muted">@srilakshmikanthanp</p>
      <p className="mt-3 text-fg">Software Engineer</p>

      <SocialLinks className="mt-6" />

      <section className="mt-10 w-full" aria-labelledby="projects">
        <h2 id="projects" className="mb-3 text-sm font-semibold tracking-wider text-muted uppercase">
          Projects
        </h2>
        <ul className="flex flex-col gap-3">
          {PROJECTS.map(project => (
            <li key={project.name}>
              <LinkCard {...project} />
            </li>
          ))}
        </ul>
      </section>

      <p className="mt-10 text-sm text-muted">
        Find these useful?{' '}
        <Link
          href={DONATE_PATH}
          className="group inline-flex items-center gap-1.5 font-semibold text-fg hover:text-primary"
        >
          <LuHeart className="text-primary transition group-hover:scale-125" /> Support my work
        </Link>
      </p>
    </main>
  );
}
