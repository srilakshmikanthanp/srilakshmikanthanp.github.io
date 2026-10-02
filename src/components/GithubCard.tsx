// Copyright (c) 2022 Sri Lakshmi Kanthan P
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import Icon from "./Icon";
import { GITHUB_URL } from "../constants";

export default function GithubCard() {
  return (
    <a
      href={GITHUB_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="group mt-2 flex items-center gap-4 rounded-lg border border-navy-lightest p-5 transition hover:border-transparent hover:bg-navy-light/60 hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:-mx-5"
    >
      <span className="text-accent">
        <Icon name="github" size={28} />
      </span>
      <span className="flex min-w-0 flex-col">
        <span className="inline-flex items-center gap-1.5 font-semibold text-slate-white transition group-hover:text-accent">
          See my projects on GitHub
          <span className="inline-flex transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
            <Icon name="arrow-up-right" size={16} />
          </span>
        </span>
        <span className="break-all font-mono text-sm text-slate">
          {GITHUB_URL.replace("https://", "")}
        </span>
      </span>
    </a>
  );
}
