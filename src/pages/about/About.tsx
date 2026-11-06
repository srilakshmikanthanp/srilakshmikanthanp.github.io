import type { ReactNode } from 'react';
import { LuGithub, LuLayoutGrid } from 'react-icons/lu';
import LinkCard from '../../components/LinkCard';
import { GITHUB_URL, LINKS_PATH } from '../../constants';

const Highlight = ({ children }: { children: ReactNode }) => <span className="text-fg">{children}</span>;

export default function About() {
  return (
    <section className="space-y-4" aria-label="About">
      <p>
        I'm Sri Lakshmi Kanthan, a software engineer from <Highlight>Kumbakonam, Tamil Nadu, India</Highlight>.
      </p>
      <p>
        I've been interested in programming since my school days. I wrote my first program in <Highlight>C</Highlight>{' '}
        in 11<sup>th</sup> grade, on pen and paper, when our computer teacher taught us how to generate the Fibonacci
        series. What started as a hobby eventually turned into my career.
      </p>
      <p>
        I went on to study Information Technology at the{' '}
        <Highlight>University College of Engineering, Anna University, Trichy</Highlight>, after completing school at{' '}
        <Highlight>Little Flower Higher Secondary School, Kumbakonam</Highlight>.
      </p>
      <p>
        I enjoy exploring different fields and working on projects that interest me rather than limiting myself to a
        single area. Many of my projects start with problems I've encountered myself, and most of my work can be found
        on GitHub.
      </p>
      <p>
        When I'm away from software, I enjoy learning <Highlight>mathematics</Highlight> and{' '}
        <Highlight>physics</Highlight>.
      </p>
      <LinkCard
        name="See my projects on GitHub"
        description={GITHUB_URL.replace('https://', '')}
        url={GITHUB_URL}
        icon={LuGithub}
      />
      <LinkCard
        name="More of my work"
        description="Projects, apps and ways to support me"
        url={LINKS_PATH}
        icon={LuLayoutGrid}
      />
    </section>
  );
}
