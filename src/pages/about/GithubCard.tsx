import { LuArrowUpRight, LuGithub } from 'react-icons/lu';
import Link from '../../components/Link';
import { GITHUB_URL } from '../../constants';

export default function GithubCard() {
  return (
    <Link
      href={GITHUB_URL}
      className="group flex items-center gap-4 rounded-2xl border border-line bg-surface p-5 shadow-lg transition hover:-translate-y-px"
    >
      <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-primary-soft text-2xl text-primary">
        <LuGithub />
      </span>
      <span>
        <span className="flex items-center gap-1.5 font-semibold text-fg group-hover:text-primary">
          See my projects on GitHub <LuArrowUpRight />
        </span>
        <span className="font-mono text-sm text-muted">{GITHUB_URL.replace('https://', '')}</span>
      </span>
    </Link>
  );
}
