import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Impact() {
  useEffect(() => {
    // CO2 counter scroll trigger and ticking
    const trigger = ScrollTrigger.create({
      trigger: '#co2Ctr',
      start: 'top 80%',
      once: true,
      onEnter: () => {
        const el = document.getElementById('co2Ctr');
        if (!el) return;
        const target = 284726;
        const duration = 2800;
        const startTime = performance.now();

        function tick(now) {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Cubic ease-out
          const easeProgress = 1 - Math.pow(1 - progress, 3);
          
          el.textContent = Math.floor(target * easeProgress).toLocaleString('en-IN');
          
          if (progress < 1) {
            requestAnimationFrame(tick);
          }
        }
        
        requestAnimationFrame(tick);
      }
    });

    // Badges fade-in animation
    gsap.to('.badge', {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: 'power2.out',
      stagger: 0.15,
      scrollTrigger: {
        trigger: '#impact',
        start: 'top 65%',
        once: true
      }
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <section id="impact" data-screen-label="05 Impact">
      <div className="imp-glow"></div>
      <div className="imp-inner">
        <div className="imp-top">
          <div>
            <div className="s-lbl g" style={{ marginBottom: '18px' }}>
              <div className="s-lbl-bar"></div>Sustainability
            </div>
            <div className="ctr-num" id="co2Ctr">0</div>
            <span className="ctr-unit">kg of CO₂ saved &amp; counting</span>
          </div>
          <div>
            <h2 className="imp-h2">Every ride is a step toward a greener India.</h2>
            <p className="imp-body">Track your trips, earn badges, and see the exact amount of CO₂ you've saved by choosing public transport.</p>
          </div>
        </div>
        <div className="badges">
          <div className="badge">
            <div className="badge-ico">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="7.5" stroke="oklch(64% .16 145)" strokeWidth="1.4"/>
                <path d="M10 5.5V10L13 13" stroke="oklch(64% .16 145)" strokeWidth="1.4" stroke-linecap="round"/>
              </svg>
            </div>
            <div className="badge-name">100 Rides</div>
            <div className="badge-sub">Century Commuter</div>
          </div>
          <div className="badge">
            <div className="badge-ico">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 2.5l1.9 4 4.4.65-3.15 3.1.74 4.4L10 12.5l-3.9 2.15.74-4.4L3.69 7.15l4.41-.65L10 2.5z" stroke="oklch(64% .16 145)" strokeWidth="1.3" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="badge-name">Green Commuter</div>
            <div className="badge-sub">50 kg CO₂ saved</div>
          </div>
          <div className="badge">
            <div className="badge-ico">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 3c-3.9 0-7 3.1-7 7 0 2.3 1.2 4.3 3 5.5L8 18h4l1.5-2.5c1.8-1.2 3-3.2 3-5.5 0-3.9-2.9-7-7-7z" stroke="oklch(64% .16 145)" strokeWidth="1.3"/>
              </svg>
            </div>
            <div className="badge-name">Carbon Warrior</div>
            <div className="badge-sub">200 kg CO₂ saved</div>
          </div>
          <div className="badge">
            <div className="badge-ico">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M3.5 16L7 8.5l3.5 5.5 2-3.5L17 16" stroke="oklch(64% .16 145)" strokeWidth="1.4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div className="badge-name">Transit Legend</div>
            <div className="badge-sub">365 days on SafarONE</div>
          </div>
        </div>
      </div>
    </section>
  );
}
