import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Transition from './components/Transition';
import Solution from './components/Solution';
import Impact from './components/Impact';
import Cta from './components/Cta';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    // Nav stickiness trigger
    const navTrigger = ScrollTrigger.create({
      start: 'top -1',
      onUpdate: () => {
        const nav = document.getElementById('mainNav');
        if (nav) {
          nav.classList.toggle('stuck', window.scrollY > 60);
        }
      }
    });

    return () => {
      navTrigger.kill();
    };
  }, []);

  return (
    <>
      {/* Noise background texture overlay */}
      <div className="noise"></div>

      {/* Navigation */}
      <nav className="nav" id="mainNav">
        <div className="nav-logo">Safar<b>ONE</b></div>
        <ul className="nav-links">
          <li><a href="#problem">Problem</a></li>
          <li><a href="#solution">Solution</a></li>
          <li><a href="#impact">Impact</a></li>
          <li><a href="#cta">Partner</a></li>
        </ul>
        <button className="nav-btn">Get Early Access</button>
      </nav>

      {/* Pages */}
      <Hero />
      <Problem />
      <Transition />
      <Solution />
      <Impact />
      <Cta />
    </>
  );
}
