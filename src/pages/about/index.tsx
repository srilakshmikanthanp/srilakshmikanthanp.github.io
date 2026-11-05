import AboutSection from './About';
import Profile from './Profile';

export default function About() {
  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-12 px-6 py-16 lg:flex-row lg:items-center lg:gap-24">
      <title>Sri Lakshmi Kanthan | Software Engineer</title>
      <meta
        name="description"
        content="Sri Lakshmi Kanthan is a software engineer from Kumbakonam, Tamil Nadu, India."
      />
      <Profile />
      <div className="lg:flex-1">
        <AboutSection />
      </div>
    </main>
  );
}
