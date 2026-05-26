import React, { useEffect } from 'react';
import gsap from 'gsap';

export default function Hero() {
  useEffect(() => {
    // Staggered entrance for floating cards
    const cardIds = ['hc1', 'hc2', 'hc3', 'hc4', 'hc5'];
    cardIds.forEach((id, i) => {
      gsap.fromTo(
        `#${id}`,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.5 + i * 0.2 }
      );
    });

    // Content entrance
    gsap.timeline({ delay: 0.2 })
      .to('.hero-h1',   { opacity: 1, y: 0, duration: 1,  ease: 'power3.out' })
      .to('.hero-sub',  { opacity: 1, y: 0, duration: 0.8,  ease: 'power3.out' }, '-=0.5')
      .to('.hero-actions',{ opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.4');
  }, []);

  return (
    <section id="hero" data-screen-label="01 Hero">
      {/* Floating product UI cards */}
      <div className="hcard hf1" style={{ top: '17%', right: '7%', maxWidth: '220px', opacity: 0 }} id="hc1">
        <div className="hcard-label"><span className="hdot"></span>Live Tracking</div>
        <div className="hcard-val">Bus 216C · TSRTC</div>
        <div className="hcard-row">
          <span className="hbadge hbadge-green">Arriving in 4 min</span>
        </div>
        <div className="hcard-sub" style={{ marginTop: '8px' }}>Platform 3 · Kondapur Bus Stop</div>
      </div>

      <div className="hcard hf2" style={{ top: '40%', right: '4%', maxWidth: '200px', opacity: 0 }} id="hc2">
        <div className="hcard-label">Your Journey</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', marginTop: '2px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', fontWeight: 600 }}>
            <span className="hbadge hbadge-indigo" style={{ fontSize: '8px' }}>METRO</span>L1 · 3 stops
          </div>
          <div style={{ width: '1px', height: '14px', background: 'rgba(248,245,240,.15)', marginLeft: '18px' }}></div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', fontWeight: 600 }}>
            <span className="hbadge hbadge-orange" style={{ fontSize: '8px' }}>BUS</span>216C · 4 stops
          </div>
        </div>
        <div className="hcard-row" style={{ marginTop: '10px', paddingTop: '10px', borderTop: '1px solid rgba(248,245,240,.08)' }}>
          <div style={{ fontFamily: 'var(--fm)', fontSize: '22px', fontWeight: 800, color: 'var(--white)', letterSpacing: '-1px' }}>
            34<span style={{ fontSize: '11px', color: 'rgba(248,245,240,.4)', marginLeft: '2px' }}>min</span>
          </div>
          <div style={{ fontSize: '10px', color: 'rgba(248,245,240,.38)', marginLeft: '4px' }}>door-to-door</div>
        </div>
      </div>

      <div className="hcard hf3" style={{ bottom: '26%', right: '9%', maxWidth: '210px', opacity: 0 }} id="hc3">
        <div className="hcard-label">Eco Impact · This Month</div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
          <div className="hcard-val" style={{ color: 'var(--green)' }}>48.2</div>
          <div style={{ fontSize: '11px', color: 'rgba(248,245,240,.4)', fontFamily: 'var(--fm)' }}>kg CO₂ saved</div>
        </div>
        <div style={{ marginTop: '8px', height: '3px', background: 'rgba(248,245,240,.08)' }}>
          <div style={{ height: '100%', width: '68%', background: 'var(--green)' }}></div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '4px', fontFamily: 'var(--fm)', fontSize: '9px', color: 'rgba(248,245,240,.3)' }}>
          <span>68% to Carbon Warrior</span><span>🌱</span>
        </div>
      </div>

      <div className="hcard hf4" style={{ top: '24%', right: '28%', maxWidth: '180px', opacity: 0 }} id="hc4">
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span className="hdot"></span>
          <span style={{ fontFamily: 'var(--fm)', fontSize: '10px', letterSpacing: '1px', color: 'rgba(248,245,240,.5)' }}>METRO L1</span>
          <span className="hbadge hbadge-green" style={{ marginLeft: 'auto' }}>ON TIME</span>
        </div>
        <div style={{ fontSize: '12px', fontWeight: 600, marginTop: '8px', color: 'var(--white)' }}>Next: 2 min · Ameerpet</div>
      </div>

      <div className="hcard hf5" style={{ bottom: '32%', right: '26%', maxWidth: '190px', opacity: 0 }} id="hc5">
        <div className="hcard-label">Driver Score · Today</div>
        <div style={{ display: 'flex', gap: '16px', marginTop: '4px' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '20px', fontWeight: 800, color: 'var(--saffron)', letterSpacing: '-1px' }}>96%</div>
            <div style={{ fontFamily: 'var(--fm)', fontSize: '8px', color: 'rgba(248,245,240,.3)', marginTop: '2px' }}>ON-TIME</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '20px', fontWeight: 800, color: 'var(--white)', letterSpacing: '-1px' }}>847</div>
            <div style={{ fontFamily: 'var(--fm)', fontSize: '8px', color: 'rgba(248,245,240,.3)', marginTop: '2px' }}>RIDERS</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '20px', fontWeight: 800, color: 'var(--green)', letterSpacing: '-1px' }}>4.8</div>
            <div style={{ fontFamily: 'var(--fm)', fontSize: '8px', color: 'rgba(248,245,240,.3)', marginTop: '2px' }}>RATING</div>
          </div>
        </div>
      </div>

      <div className="hero-content">
        <h1 className="hero-h1"><em>SafarONE.</em><br />Digitizing,<br />Humanizing<br />India's Transit.</h1>
        <p className="hero-sub">The first truly integrated multi-modal, real-time public transport platform—unifying buses, metros, trains and last-mile connectivity for 1.4 billion people.</p>
        <div className="hero-actions">
          <button className="btn-p">Partner With Us</button>
          <button className="btn-s">Join the Waitlist</button>
        </div>
      </div>

      {/* City ticker */}
      <div className="hero-ticker">
        <div className="ticker-track">
          <span>MUMBAI</span><span className="ticker-sep"> — </span>
          <span>DELHI</span><span className="ticker-sep"> — </span>
          <span>HYDERABAD</span><span className="ticker-sep"> — </span>
          <span>BENGALURU</span><span className="ticker-sep"> — </span>
          <span>CHENNAI</span><span className="ticker-sep"> — </span>
          <span>KOLKATA</span><span className="ticker-sep"> — </span>
          <span>AHMEDABAD</span><span className="ticker-sep"> — </span>
          <span>JAIPUR</span><span className="ticker-sep"> — </span>
          <span>LUCKNOW</span><span className="ticker-sep"> — </span>
          <span>PUNE</span><span className="ticker-sep"> — </span>
          <span>NAGPUR</span><span className="ticker-sep"> — </span>
          <span>KOCHI</span><span className="ticker-sep"> — </span>
          <span>VISAKHAPATNAM</span><span className="ticker-sep"> — </span>
          <span>CHANDIGARH</span><span className="ticker-sep"> — </span>
          
          <span>MUMBAI</span><span className="ticker-sep"> — </span>
          <span>DELHI</span><span className="ticker-sep"> — </span>
          <span>HYDERABAD</span><span className="ticker-sep"> — </span>
          <span>BENGALURU</span><span className="ticker-sep"> — </span>
          <span>CHENNAI</span><span className="ticker-sep"> — </span>
          <span>KOLKATA</span><span className="ticker-sep"> — </span>
          <span>AHMEDABAD</span><span className="ticker-sep"> — </span>
          <span>JAIPUR</span><span className="ticker-sep"> — </span>
          <span>LUCKNOW</span><span className="ticker-sep"> — </span>
          <span>PUNE</span><span className="ticker-sep"> — </span>
          <span>NAGPUR</span><span className="ticker-sep"> — </span>
          <span>KOCHI</span><span className="ticker-sep"> — </span>
          <span>VISAKHAPATNAM</span><span className="ticker-sep"> — </span>
          <span>CHANDIGARH</span><span className="ticker-sep"> — </span>
        </div>
      </div>


    </section>
  );
}
