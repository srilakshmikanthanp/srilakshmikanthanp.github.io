// Copyright (c) 2022 Sri Lakshmi Kanthan P
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import Icon from "./Icon";
import Footer from "./Footer";
import { SOCIAL_LINKS } from "../constants";
import me from "../assets/images/me.jpg";

export default function Profile() {
  return (
    <header className="lg:flex-1">
      <div className="mb-8 ml-1.5 size-20 overflow-hidden rounded-full ring-2 ring-accent ring-offset-4 ring-offset-navy lg:size-28">
        <img src={me} alt="Sri Lakshmi Kanthan" className="size-full origin-[47%_6%] scale-[2.26] object-cover" />
      </div>
      <h1 className="text-4xl font-bold text-slate-white lg:text-5xl">
        Sri Lakshmi Kanthan
      </h1>
      <p className="mt-3 text-lg text-slate-lightest">Software Engineer</p>
      <p className="mt-4 text-slate">Curious about how things work and why they work.</p>
      <ul className="mt-8 flex gap-5" aria-label="Social links">
        {SOCIAL_LINKS.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              aria-label={link.name}
              title={link.name}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="inline-flex text-slate transition hover:scale-125 hover:text-accent"
            >
              <Icon name={link.icon} size={22} />
            </a>
          </li>
        ))}
      </ul>
      <Footer className="mt-10 hidden lg:block" />
    </header>
  );
}
