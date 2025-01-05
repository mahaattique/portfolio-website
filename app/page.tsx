'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-accent">
      <Header basePath={''} />
      <Hero basePath={''} />
      <About basePath={''} />
      <Projects basePath={''} />
      <Skills basePath={''} />
      <Contact basePath={''} />
    </main>
  );
}
