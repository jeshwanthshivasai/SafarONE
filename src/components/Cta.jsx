import React, { useEffect } from 'react';
import gsap from 'gsap';

export default function Cta() {
  useEffect(() => {
    // CTA entrance staggered animation
    const ctaSelectors = ['.cta-eyebrow', '.cta-h1', '.cta-body', '.cta-btns'];
    ctaSelectors.forEach((selector, i) => {
      gsap.to(selector, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power3.out',
        delay: i * 0.14,
        scrollTrigger: {
          trigger: '#cta',
          start: 'top 70%',
          once: true
        }
      });
    });
  }, []);

  return (
    <section id="cta" data-screen-label="06 CTA">
      <div className="cta-glow"></div>
      <div className="cta-eyebrow">The Future of Urban Mobility</div>
      <h2 className="cta-h1">One Nation.<br /><em>One Transit</em><br />System.</h2>
      <p className="cta-body">Make public transport the smartest, fastest and most reliable mobility choice for 1.4 billion people.</p>
      <div className="cta-btns">
        <button className="btn-p" style={{ padding: '18px 48px', fontSize: '14px' }}>Partner With Us</button>
        <button className="btn-s" style={{ padding: '18px 48px', fontSize: '14px' }}>Join the Waitlist</button>
      </div>
      <div className="foot-bar">
        <div className="f-logo">SafarONE</div>
        <div className="f-links">
          <a href="#">About</a>
          <a href="#">Careers</a>
          <a href="#">Press</a>
          <a href="#">Contact</a>
        </div>
        <div className="f-copy">© 2025 SafarONE Technologies Pvt. Ltd.</div>
      </div>
    </section>
  );
}
