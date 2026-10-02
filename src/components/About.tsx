// Copyright (c) 2022 Sri Lakshmi Kanthan P
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import GithubCard from "./GithubCard";

const Highlight = ({ children }: { children: React.ReactNode }) => (
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
      </p>
      <p>
        Outside of software, I enjoy learning <Highlight>math</Highlight> and{" "}
        <Highlight>physics</Highlight>. I enjoy understanding how things work
        from first principles.
      </p>
      <p>
        I don't tie myself to any particular tool. When a problem comes up, I
        look for the best way to solve it, and if the right tool doesn't
        exist, I build it. Most of my work lives on GitHub, and much of it
        begins with a problem I ran into myself.
      </p>
      <GithubCard />
    </section>
  );
}
