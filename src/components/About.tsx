// Copyright (c) 2022 Sri Lakshmi Kanthan P
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import type { ReactNode } from "react";
import GithubCard from "./GithubCard";

const Highlight = ({ children }: { children: ReactNode }) => (
  <span className="text-slate-lightest">{children}</span>
);

export default function About() {
  return (
    <section className="flex flex-col gap-4" aria-label="About">
      <p>
        I'm Sri Lakshmi Kanthan, a software engineer from{" "}
        <Highlight>Kumbakonam, Tamil Nadu, India</Highlight>. I studied at{" "}
        <Highlight>Little Flower Higher Secondary School, Kumbakonam</Highlight>,
        and later earned a degree in Information Technology from the{" "}
        <Highlight>University College of Engineering, Anna University, Trichy</Highlight>.
      </p>
      <p>
        I wrote my first program in <Highlight>C</Highlight> in 11<sup>th</sup>{" "}
        grade, and what started as a hobby eventually became my career.
        Outside of software, I enjoy learning <Highlight>math</Highlight> and{" "}
        <Highlight>physics</Highlight>.
      </p>
      <p>
        I don't limit myself to any particular area of software development.
        I enjoy exploring different fields and working on projects that
        interest me. Most of my work lives on GitHub, and much of it starts
        with a problem I ran into myself.
      </p>
      <GithubCard />
    </section>
  );
}
