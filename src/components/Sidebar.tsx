// Copyright (c) 2022 Sri Lakshmi Kanthan P
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import Icon from "./Icon";
import { SOCIAL_LINKS } from "../constants";
import me from "../assets/images/me.jpg";

export default function Sidebar() {
  return (
    <header className="pt-16 pb-12 lg:w-[46%] lg:py-24">
      <div className="mb-6 h-[72px] w-[72px] rounded-full border-2 border-accent p-[3px]">
        <div className="relative h-full w-full overflow-hidden rounded-full">
          <img
            src={me}
            alt="Sri Lakshmi Kanthan"
            className="absolute left-[-59.5%] top-[-7.3%] w-[226%] max-w-none"
          />
        </div>
      </div>
      <h1 className="text-4xl font-bold tracking-tight text-slate-white sm:text-5xl">
        Sri Lakshmi Kanthan
      </h1>
      <p className="mt-3 text-lg font-medium text-slate-lightest">Software Engineer</p>
      <p className="mt-4 max-w-xs text-slate">Curious about how things work and why they work.</p>
      <ul className="mt-8 flex gap-5" aria-label="Social links">
        {SOCIAL_LINKS.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              aria-label={link.name}
              title={link.name}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="inline-flex text-slate transition hover:-translate-y-0.5 hover:text-accent"
            >
              <Icon name={link.icon} size={22} />
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}
