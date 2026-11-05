import { LuMapPin } from 'react-icons/lu';
import SocialLinks from '../../components/SocialLinks';

export default function Profile() {
  return (
    <header className="lg:flex-1">
      <div className="mb-8 ml-1.5 size-20 overflow-hidden rounded-full ring-2 ring-primary ring-offset-4 ring-offset-bg lg:size-28">
        <img src="/me.jpg" alt="Sri Lakshmi Kanthan" className="size-full origin-[47%_6%] scale-[2.26] object-cover" />
      </div>
      <span className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 text-sm text-muted">
        <LuMapPin className="text-primary" /> Kumbakonam, India
      </span>
      <h1 className="mt-5 text-4xl font-bold tracking-tight text-fg lg:text-5xl">Sri Lakshmi Kanthan</h1>
      <p className="mt-3 text-lg text-fg">Software Engineer</p>
      <p className="mt-4">Curious about how things work and why they work.</p>
      <SocialLinks className="mt-8" />
    </header>
  );
}
