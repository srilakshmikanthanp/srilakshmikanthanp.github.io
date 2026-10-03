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
      className="group flex items-center gap-4 rounded-lg border border-navy-lightest bg-navy p-5 hover:bg-navy-light"
    >
      <span className="text-accent">
        <Icon name="github" size={28} />
      </span>
      <span>
        <span className="flex items-center gap-1.5 font-semibold text-slate-white group-hover:text-accent">
          See my projects on GitHub
          <Icon name="arrow-up-right" size={16} />
        </span>
        <span className="font-mono text-sm text-slate">
          {GITHUB_URL.replace("https://", "")}
        </span>
      </span>
    </a>
  );
}
