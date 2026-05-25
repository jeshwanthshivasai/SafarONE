import React, { useEffect, useMemo } from 'react';
import gsap from 'gsap';

// SVG Components for vehicles
function Car({ opacity = 1 }) {
  const c = `rgba(255, 255, 255, ${opacity * 0.22})`;
  const c2 = `rgba(255, 255, 255, ${opacity * 0.40})`;
  return (
    <svg width="44" height="20" viewBox="0 0 44 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
      <path d="M5 13C5 11 7 8 10 7L13 6L31 6L34 7C37 8 39 11 39 13L39 15L5 15Z" fill={c}/>
      <path d="M13 6L16 2L28 2L31 6" fill={c2}/>
      <circle cx="12" cy="16" r="3.5" fill={c2}/>
      <circle cx="32" cy="16" r="3.5" fill={c2}/>
    </svg>
  );
}

function Bus({ opacity = 1 }) {
  const c = `rgba(209, 122, 53, ${opacity * 0.28})`;
  const cw = `rgba(209, 122, 53, ${opacity * 0.45})`;
  const wh = `rgba(255, 255, 255, ${opacity * 0.38})`;
  return (
    <svg width="60" height="22" viewBox="0 0 60 22" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
      <rect x="2" y="2" width="56" height="16" rx="2" fill={c}/>
      <rect x="5" y="4" width="10" height="7" rx="1" fill={cw}/>
      <rect x="18" y="4" width="10" height="7" rx="1" fill={cw}/>
      <rect x="32" y="4" width="10" height="7" rx="1" fill={cw}/>
      <rect x="46" y="4" width="9" height="7" rx="1" fill={cw}/>
      <circle cx="12" cy="19" r="3" fill={wh}/>
      <circle cx="48" cy="19" r="3" fill={wh}/>
    </svg>
  );
}

function Moto({ opacity = 1 }) {
  const c = `rgba(255, 255, 255, ${opacity * 0.3})`;
  return (
    <svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
      <circle cx="7" cy="14" r="5" stroke={c} strokeWidth="1.5" fill="none"/>
      <circle cx="21" cy="14" r="5" stroke={c} strokeWidth="1.5" fill="none"/>
      <path d="M7 14L12 8L16 8L21 14" stroke={c} strokeWidth="1.4" fill="none"/>
      <path d="M14 8L14 5L17 5" stroke={c} strokeWidth="1.4" strokeLinecap="round" fill="none"/>
    </svg>
  );
}

export default function Problem() {
  // Generate random rows for traffic
  const trafficRowsData = useMemo(() => {
    const types = ['car', 'bus', 'moto', 'car', 'car', 'moto', 'bus', 'car', 'moto', 'car'];
    return Array.from({ length: 18 }, () => {
      const n = 4 + Math.floor(Math.random() * 7);
      return Array.from({ length: n }, () => {
        const type = types[Math.floor(Math.random() * types.length)];
        const opacity = 0.5 + Math.random() * 0.5;
        return { type, opacity };
      });
    });
  }, []);

  const roadLanes = Array.from({ length: 14 });

  useEffect(() => {
    // Traffic parallax
    const rows = gsap.utils.toArray('.t-row');
    rows.forEach((row, i) => {
      gsap.to(row, {
        x: i % 2 === 0 ? -80 : 80,
        ease: 'none',
        scrollTrigger: {
          trigger: '#problem',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.6,
        }
      });
    });

    // Question bubbles
    gsap.to('.q-bubble', {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: 'power2.out',
      stagger: 0.28,
      scrollTrigger: {
        trigger: '#problem',
        start: 'top 55%',
        once: true,
      }
    });

    // Reveals
    gsap.utils.toArray('#problem .r0').forEach((el, i) => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.85,
        ease: 'power3.out',
        delay: (i % 3) * 0.1,
        scrollTrigger: {
          trigger: el,
          start: 'top 87%',
          once: true,
        }
      });
    });
  }, []);

  return (
    <>
      {/* Section break */}
      <div className="sec-break" style={{ background: 'var(--dark)' }}>
        <div className="sec-break-lbl" style={{ background: 'var(--dark)' }}>The Problem</div>
        <div className="sec-break-num" style={{ background: 'var(--dark)' }}>02 / 06</div>
      </div>

      <section id="problem" data-screen-label="02 Problem">
        <div className="prob-inner">
          <div className="prob-bg-stat">67%</div>
          <div className="prob-visual">
            {/* Road Lanes */}
            <div className="road" id="roadLines">
              {roadLanes.map((_, i) => (
                <div key={i} className="road-lane" />
              ))}
            </div>
            {/* Traffic Rows */}
            <div className="t-rows" id="trafficRows">
              {trafficRowsData.map((row, rIdx) => (
                <div key={rIdx} className="t-row">
                  {row.map((vehicle, vIdx) => {
                    if (vehicle.type === 'car') return <Car key={vIdx} opacity={vehicle.opacity} />;
                    if (vehicle.type === 'bus') return <Bus key={vIdx} opacity={vehicle.opacity} />;
                    return <Moto key={vIdx} opacity={vehicle.opacity} />;
                  })}
                </div>
              ))}
            </div>
            <div className="smog"></div>
            {/* Question Bubbles */}
            <div className="bubbles">
              <div className="q-bubble" style={{ top: '8%', left: '10%' }}>
                <div className="q-tag">?</div>Will my bus even come?
              </div>
              <div className="q-bubble" style={{ top: '27%', right: '2%' }}>
                <div className="q-tag">?</div>How long should I wait?
              </div>
              <div className="q-bubble" style={{ top: '49%', left: '5%' }}>
                <div className="q-tag">?</div>Is there a faster route?
              </div>
              <div className="q-bubble" style={{ top: '68%', right: '6%' }}>
                <div className="q-tag">?</div>Can I afford to be late again?
              </div>
            </div>
          </div>
          <div>
            <div className="s-lbl r0">
              <div className="s-lbl-bar"></div>The Problem
            </div>
            <h2 className="prob-h2 r0">India's roads weren't designed for this.</h2>
            <p className="prob-body r0">
              Public transport isn't bad—it has become a guessing game. When commuters don't know when their ride will arrive, they shift to personal vehicles. And our cities choke.
            </p>
            <div className="prob-stats r0">
              <div>
                <div className="stat-val">67%</div>
                <div className="stat-key">of urban Indians prefer personal vehicles due to unpredictable transit</div>
              </div>
              <div>
                <div className="stat-val">3.2B</div>
                <div className="stat-key">daily trips with zero unified platform across modes</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
