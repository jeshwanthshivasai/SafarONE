import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { IPhone } from './Transition';

gsap.registerPlugin(ScrollTrigger);

const A = {
  dark:    '#07080A',
  saffron: 'oklch(72% .13 52)',
  green:   'oklch(64% .16 145)',
  indigo:  'oklch(40% .18 272)',
  white:   '#F8F5F0',
  muted:   'rgba(248,245,240,.42)',
};

/* ── SOLUTION SCREEN 1: PASSENGER ── */
function Screen1() {
  const row = (mode, cls, stop, sub, live) => (
    <div style={{ background: 'rgba(248,245,240,.03)', border: '1px solid rgba(248,245,240,.07)', padding: '8px 10px', marginBottom: 7, display: 'flex', alignItems: 'center', gap: 8 }}>
      <div style={{
        fontSize: 8,
        fontWeight: 700,
        padding: '3px 7px',
        letterSpacing: '.5px',
        background: cls === 'walk' ? 'rgba(248,245,240,.1)' : cls === 'metro' ? A.indigo : A.saffron,
        color: cls === 'walk' ? 'rgba(248,245,240,.6)' : cls === 'metro' ? A.white : '#07080A',
        flexShrink: 0
      }}>{mode}</div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 11, fontWeight: 600, color: A.white }}>{stop}</div>
        <div style={{ fontSize: 9, color: 'rgba(248,245,240,.3)', marginTop: 1, fontFamily: 'DM Mono, monospace' }}>{sub}</div>
      </div>
      {live && <div style={{ fontSize: 8, fontWeight: 700, background: A.green, color: '#040809', padding: '2px 6px' }}>LIVE</div>}
    </div>
  );
  return (
    <div style={{ padding: '72px 14px 14px', background: A.dark, height: '100%' }}>
      <div style={{ fontFamily: 'DM Mono, monospace', fontSize: 10, letterSpacing: '1.5px', textTransform: 'uppercase', color: A.saffron, marginBottom: 12 }}>Passenger App</div>
      {row('WALK', 'walk', 'Kondapur → Metro Stn', '4 min walk', false)}
      {row('METRO', 'metro', 'L1 Red Line · 3 stops', 'Arriving in 2 min', true)}
      {row('BUS', 'bus', '216C TSRTC · 4 stops', 'Transfer at Ameerpet', true)}
      <div style={{ marginTop: 10, background: 'rgba(248,245,240,.02)', border: '1px solid rgba(248,245,240,.06)', padding: '10px 11px' }}>
        <div style={{ fontSize: 9, fontFamily: 'DM Mono, monospace', color: 'rgba(248,245,240,.3)', letterSpacing: '1px', marginBottom: 6 }}>SAFETY</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ flex: 1, fontSize: 11, fontWeight: 600, color: A.white }}>Share Live Trip</div>
          <div style={{ background: A.green, padding: '5px 10px', fontSize: 9, fontWeight: 700, color: '#040809' }}>Share</div>
        </div>
      </div>
      <div style={{ background: A.saffron, padding: '9px 11px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
        <span style={{ fontSize: 10, fontWeight: 700, color: '#07080A' }}>3 QR Tickets · ₹24</span>
        <span style={{ fontSize: 14, color: '#07080A' }}>▦</span>
      </div>
    </div>
  );
}

/* ── SOLUTION SCREEN 2: DRIVER ── */
function Screen2() {
  const gCard = (val, key, col) => (
    <div style={{ background: 'rgba(248,245,240,.03)', border: '1px solid rgba(248,245,240,.07)', padding: '11px', textAlign: 'center' }}>
      <div style={{ fontSize: 20, fontWeight: 800, letterSpacing: '-1px', color: col }}>{val}</div>
      <div style={{ fontSize: 8, textTransform: 'uppercase', letterSpacing: '.5px', color: 'rgba(248,245,240,.28)', marginTop: 3, fontFamily: 'DM Mono, monospace' }}>{key}</div>
    </div>
  );
  return (
    <div style={{ padding: '72px 14px 14px', background: A.dark, height: '100%' }}>
      <div style={{ fontFamily: 'DM Mono, monospace', fontSize: 10, letterSpacing: '1.5px', textTransform: 'uppercase', color: A.saffron, marginBottom: 12 }}>Driver Duty App</div>
      <div style={{ background: A.saffron, padding: '11px 12px', marginBottom: 11 }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: '#07080A' }}>Route 216C → Hitech City</div>
        <div style={{ fontSize: 9, color: 'rgba(7,8,10,.55)', marginTop: 2, fontFamily: 'DM Mono, monospace' }}>Shift 06:00–14:00 · Bus TG-09-1234</div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 7, marginBottom: 10 }}>
        {gCard('96%', 'On-Time', A.saffron)}
        {gCard('847', 'Riders Today', A.green)}
        {gCard('4.8★', 'Rating', A.white)}
        {gCard('+12%', 'Fuel Eff.', 'oklch(64% .16 145)')}
      </div>
      <div style={{ background: 'oklch(64% .16 145 / 8%)', border: '1px solid oklch(64% .16 145 / 18%)', padding: '9px 11px', display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
        <div style={{ fontSize: 18 }}>🏆</div>
        <div>
          <div style={{ fontSize: 10, fontWeight: 700, color: A.green }}>Punctuality Pro</div>
          <div style={{ fontSize: 9, color: 'rgba(248,245,240,.3)', marginTop: 1 }}>On-time for 30 consecutive days</div>
        </div>
      </div>
      <div style={{ background: 'rgba(248,245,240,.02)', border: '1px solid rgba(248,245,240,.06)', padding: '8px 11px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 9, color: 'rgba(248,245,240,.3)', marginBottom: 5, fontFamily: 'DM Mono, monospace' }}>
          <span>Weekly Rank</span><span>#3 of 240 drivers</span>
        </div>
        <div style={{ height: 3, background: 'rgba(248,245,240,.08)' }}>
          <div style={{ height: '100%', width: '88%', background: A.saffron }} />
        </div>
      </div>
    </div>
  );
}

/* ── SOLUTION SCREEN 3: RTC COMMAND ── */
function Screen3() {
  return (
    <div style={{ padding: '72px 14px 14px', background: A.dark, height: '100%' }}>
      <div style={{ fontFamily: 'DM Mono, monospace', fontSize: 10, letterSpacing: '1.5px', textTransform: 'uppercase', color: A.saffron, marginBottom: 12 }}>Command Center</div>
      <div style={{ background: 'rgba(248,245,240,.03)', border: '1px solid rgba(248,245,240,.07)', padding: '8px 11px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: A.white }}>TSRTC Live Fleet</div>
        <div style={{ fontSize: 9, color: A.green, display: 'flex', alignItems: 'center', gap: 4, fontFamily: 'DM Mono, monospace' }}>
          <div style={{ width: 5, height: 5, background: A.green, borderRadius: '50%', animation: 'pdot 1.5s infinite' }} />245 Active
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6, marginBottom: 8 }}>
        {[['245', 'Live Buses'], ['87%', 'On-Time'], ['1.2M', 'Rides/Day']].map(([v, k]) => (
          <div key={k} style={{ background: 'rgba(248,245,240,.02)', border: '1px solid rgba(248,245,240,.06)', padding: '9px 6px', textAlign: 'center' }}>
            <div style={{ fontSize: 17, fontWeight: 800, letterSpacing: '-1px', color: A.white }}>{v}</div>
            <div style={{ fontSize: 8, textTransform: 'uppercase', letterSpacing: '.5px', color: 'rgba(248,245,240,.28)', marginTop: 2, fontFamily: 'DM Mono, monospace' }}>{k}</div>
          </div>
        ))}
      </div>
      {/* Heatmap */}
      <div style={{ height: 72, background: 'rgba(248,245,240,.02)', border: '1px solid rgba(248,245,240,.06)', position: 'relative', overflow: 'hidden', marginBottom: 8 }}>
        {[['80px', 'rgba(209,122,53,.5)', '-10px', '12px'], ['65px', 'rgba(72,181,117,.5)', '8px', 'auto', '16px'], ['52px', 'rgba(209,122,53,.4)', '-6px', '45%']].map(([s, bg, t, l, r], i) => (
          <div key={i} style={{ position: 'absolute', width: s, height: s, background: bg, borderRadius: '50%', filter: 'blur(12px)', top: t, left: l, right: r, opacity: 0.4 }} />
        ))}
        <div style={{ position: 'absolute', bottom: 5, left: 8, fontSize: 8, fontFamily: 'DM Mono, monospace', color: 'rgba(248,245,240,.28)', letterSpacing: '.5px' }}>PEAK HR DEMAND HEATMAP</div>
      </div>
      {[['On-Time Performance', '87%'], ['Fleet Utilization', '92%']].map(([label, val]) => (
        <div key={label} style={{ marginBottom: 7 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 9, color: 'rgba(248,245,240,.3)', marginBottom: 3, fontFamily: 'DM Mono, monospace' }}>
            <span>{label}</span><span>{val}</span>
          </div>
          <div style={{ height: 2, background: 'rgba(248,245,240,.07)' }}>
            <div style={{ height: '100%', width: val, background: A.green }} />
          </div>
        </div>
      ))}
      <div style={{ background: 'oklch(64% .16 145 / 7%)', border: '1px solid oklch(64% .16 145 / 18%)', padding: '7px 10px', marginTop: 6 }}>
        <div style={{ fontSize: 8, fontWeight: 700, color: A.green, fontFamily: 'DM Mono, monospace', letterSpacing: '1px' }}>AI INSIGHT</div>
        <div style={{ fontSize: 9, color: 'rgba(248,245,240,.55)', marginTop: 3 }}>Route 42B needs +2 buses during 8–10 AM peak</div>
      </div>
      <style>{`@keyframes pdot{0%,100%{opacity:1}50%{opacity:.3}}`}</style>
    </div>
  );
}

export default function Solution() {
  const [stateIdx, setStateIdx] = useState(0);

  useEffect(() => {
    // Pinned scroll section using GSAP
    const trigger = ScrollTrigger.create({
      trigger: '#solSticky',
      pin: true,
      pinSpacing: true,
      start: 'top top',
      end: '+=220%',
      onUpdate: (self) => {
        const idx = Math.min(2, Math.floor(self.progress * 3));
        setStateIdx(idx);
      }
    });

    return () => {
      trigger.kill();
    };
  }, []);

  const screens = [<Screen1 />, <Screen2 />, <Screen3 />];

  return (
    <section id="solution" data-screen-label="04 Solution">
      <div className="sol-sec-label">
        <div style={{ width: 22, height: 1, background: 'currentColor' }}></div>Platform
      </div>
      <div className="sol-sticky" id="solSticky">
        <div className="sol-counter" id="solCounter">
          {`0${stateIdx + 1} / 03`}
        </div>
        <div className="sol-grid">
          {/* Left panels */}
          <div id="solLeft">
            <div className={`sol-state ${stateIdx === 0 ? 'active' : ''}`} data-state="0">
              <div className="sol-num">01 — Passengers</div>
              <div className="sol-title">Real-time clarity, every commute.</div>
              <div className="sol-body">One tap to see every bus, metro and train—live. No more guessing. No more waiting in the wrong place.</div>
              <div className="chips">
                <div className="chip">Live Multi-Modal</div>
                <div className="chip">Hyper-accurate ETAs</div>
                <div className="chip">QR Ticketing</div>
                <div className="chip">Women's Safety</div>
              </div>
            </div>
            <div className={`sol-state ${stateIdx === 1 ? 'active' : ''}`} data-state="1">
              <div className="sol-num">02 — Drivers &amp; Conductors</div>
              <div className="sol-title">A system that motivates, not monitors.</div>
              <div className="sol-body">Gamified duty dashboards that reward punctuality, efficiency and service excellence. Drive with pride.</div>
              <div className="chips">
                <div className="chip">Duty Dashboard</div>
                <div className="chip">Punctuality Badges</div>
                <div className="chip">Fuel Score</div>
                <div className="chip">Passenger Rating</div>
              </div>
            </div>
            <div className={`sol-state ${stateIdx === 2 ? 'active' : ''}`} data-state="2">
              <div className="sol-num">03 — RTCs &amp; Government</div>
              <div className="sol-title">The B2G suite for smarter cities.</div>
              <div className="sol-body">Full fleet visibility, demand heatmaps and route optimization—helping transport authorities make data-backed decisions in real time.</div>
              <div className="chips">
                <div className="chip">Live Fleet Command</div>
                <div className="chip">Demand Heatmaps</div>
                <div className="chip">Route Optimization AI</div>
              </div>
            </div>
          </div>

          {/* Center phone mount */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div id="solPhoneMount">
              <IPhone>
                <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                  {screens.map((scr, i) => (
                    <div
                      key={i}
                      style={{
                        position: 'absolute',
                        inset: 0,
                        opacity: stateIdx === i ? 1 : 0,
                        transform: stateIdx === i ? 'translateY(0)' : 'translateY(12px)',
                        transition: 'opacity .45s ease, transform .45s ease',
                        pointerEvents: stateIdx === i ? 'auto' : 'none',
                      }}
                    >
                      {scr}
                    </div>
                  ))}
                </div>
              </IPhone>
            </div>
            <div className="sol-dots" id="solDots">
              <div className={`sol-dot ${stateIdx === 0 ? 'active' : ''}`}></div>
              <div className={`sol-dot ${stateIdx === 1 ? 'active' : ''}`}></div>
              <div className={`sol-dot ${stateIdx === 2 ? 'active' : ''}`}></div>
            </div>
          </div>

          {/* Right panels */}
          <div id="solRight">
            <div className={`sol-state ${stateIdx === 0 ? 'active' : ''}`} data-state="0">
              <div className="sol-metric">
                <div className="sol-metric-val">34 min</div>
                <div className="sol-metric-key">door-to-door multi-modal ETA</div>
              </div>
            </div>
            <div className={`sol-state ${stateIdx === 1 ? 'active' : ''}`} data-state="1">
              <div className="sol-metric">
                <div className="sol-metric-val">847 riders</div>
                <div className="sol-metric-key">served by a single driver today</div>
              </div>
            </div>
            <div className={`sol-state ${stateIdx === 2 ? 'active' : ''}`} data-state="2">
              <div className="sol-metric">
                <div className="sol-metric-val">↓ 18%</div>
                <div className="sol-metric-key">idle fleet time with AI routing</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
