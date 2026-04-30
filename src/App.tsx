/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Strengths from './components/Strengths';
import Projects from './components/Projects';
import Experience from './components/Experience';
import { Stack, Contact, Footer } from './components/FooterSections';

export default function App() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary-container selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Strengths />
        <Projects />
        <Experience />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
