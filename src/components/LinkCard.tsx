import type { IconType } from 'react-icons';
import { LuArrowUpRight } from 'react-icons/lu';
import Link from './Link';

interface LinkBase {
  name: string;
  description: string;
  url: string;
}

export type LinkItem = LinkBase & ({ icon: IconType; logo?: never } | { logo: string; icon?: never });

export default function LinkCard({ name, description, url, icon: Icon, logo }: LinkItem) {
  return (
    <Link
      href={url}
      className="group flex items-center gap-4 rounded-2xl border border-line bg-surface p-4 transition hover:-translate-y-0.5 hover:border-primary hover:shadow-lg"
    >
      {logo && (
        <img src={logo} alt="" className="size-12 shrink-0 rounded-xl object-cover" />
      )}

      {Icon && (
        <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-2xl text-primary">
          <Icon />
        </span>
      )}
      <span className="min-w-0 flex-1">
        <span className="block font-semibold text-fg">{name}</span>
        <span className="block text-sm text-muted">{description}</span>
      </span>
      <LuArrowUpRight className="shrink-0 text-xl text-muted transition group-hover:text-primary" />
    </Link>
  );
}
