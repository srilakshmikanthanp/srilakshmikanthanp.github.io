// Copyright (c) 2022 Sri Lakshmi Kanthan P
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { LuArrowUpRight, LuGithub } from 'react-icons/lu';
import { GITHUB_URL } from '../constants';
import ExternalLink from './ExternalLink';

export default function GithubCard() {
  return (
    <ExternalLink
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
    </ExternalLink>
  );
}
