import React, { useEffect } from 'react';
import gsap from 'gsap';
import { IOSDevice } from './IOSDevice';

const A = {
  dark:    '#07080A',
  saffron: 'oklch(72% .13 52)',
  green:   'oklch(64% .16 145)',
  indigo:  'oklch(40% .18 272)',
  white:   '#F8F5F0',
  muted:   'rgba(248,245,240,.42)',
};

function JRow({ icon, stop, sub, eta, line = true }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, paddingBottom: 8, position: 'relative', marginBottom: line ? 8 : 0 }}>
      <div style={{ width: 22, height: 22, background: 'rgba(248,245,240,.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, flexShrink: 0, marginTop: 1 }}>{icon}</div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 11, fontWeight: 600, color: A.white }}>{stop}</div>
        <div style={{ fontSize: 9, color: 'rgba(248,245,240,.32)', marginTop: 1, fontFamily: 'DM Mono, monospace' }}>{sub}</div>
      </div>
      {eta && <div style={{ fontSize: 9, fontWeight: 700, background: A.green, color: '#040809', padding: '3px 7px', flexShrink: 0, alignSelf: 'center', fontFamily: 'DM Mono, monospace' }}>{eta}</div>}
      {line && <div style={{ position: 'absolute', left: 10, top: 24, bottom: -8, width: 2, background: 'oklch(64% .16 145 / 18%)' }} />}
    </div>
  );
}

function TransScreen() {
  return (
    <div style={{ height: '100%', background: A.dark, paddingTop: 72 }}>
      <div style={{ padding: '0 14px' }}>
        <div style={{ background: 'rgba(248,245,240,.04)', border: '1px solid rgba(248,245,240,.08)', padding: '11px 13px', marginBottom: 12 }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: A.white, letterSpacing: '-.3px' }}>SafarONE</div>
          <div style={{ fontSize: 9, color: A.saffron, marginTop: 2, fontFamily: 'DM Mono, monospace', letterSpacing: '1px' }}>LIVE MULTI-MODAL ROUTE</div>
        </div>
        <div style={{ background: 'rgba(248,245,240,.025)', border: '1px solid rgba(248,245,240,.07)', padding: '12px 12px', marginBottom: 10 }}>
          <JRow icon="🏠" stop="Home, Kondapur" sub="Starting point" />
          <JRow icon="🚶" stop="Walk · 4 min" sub="to Metro Station" />
          <JRow icon="🚇" stop="METRO L1 · 3 stops" sub="Arriving in 2 min" eta="2 MIN" />
          <JRow icon="🚌" stop="Bus 216C · 4 stops" sub="TSRTC · Boarding 8 min" eta="8 MIN" />
          <JRow icon="🏢" stop="Office, Hitech City" sub="Total: 34 min door-to-door" line={false} />
        </div>
        {/* Map */}
        <div style={{ height: 100, background: 'rgba(248,245,240,.02)', border: '1px solid rgba(248,245,240,.06)', position: 'relative', overflow: 'hidden', marginBottom: 10 }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(248,245,240,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(248,245,240,.03) 1px,transparent 1px)', backgroundSize: '18px 18px' }} />
          <div style={{ position: 'absolute', top: '50%', left: '8%', width: '84%', height: 1, background: `linear-gradient(90deg,${A.saffron},${A.green})`, transform: 'translateY(-50%)' }} />
          <div style={{ position: 'absolute', width: 7, height: 7, background: A.green, borderRadius: '50%', top: 'calc(50% - 3.5px)', left: '54%', boxShadow: '0 0 0 4px oklch(64% .16 145 / 20%)' }} />
          <div style={{ position: 'absolute', width: 5, height: 5, background: A.saffron, borderRadius: '50%', top: 'calc(50% - 2.5px)', right: '9%' }} />
        </div>
        {/* QR */}
        <div style={{ background: A.green, padding: '9px 13px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: 10, fontWeight: 700, color: '#040809' }}>3 Tickets Ready · ₹24 total</span>
          <span style={{ fontSize: 14, color: '#040809' }}>▦</span>
        </div>
      </div>
    </div>
  );
}

export function IPhone({ width = 278, height = 604, children }) {
  return (
    <div className="iphone-wrap">
      <div className="iphone-body" style={{ width: width + 26, height: height + 26 }}>
        <div className="iphone-pwr" />
        <div className="iphone-sil" />
        <div className="iphone-vup" />
        <div className="iphone-vdn" />
        <IOSDevice width={width} height={height} dark={true}>
          {children}
        </IOSDevice>
      </div>
    </div>
  );
}

export default function Transition() {
  useEffect(() => {
    gsap.utils.toArray('#transition .r0').forEach((el, i) => {
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
      <div className="sec-break">
        <div className="sec-break-lbl" style={{ background: 'var(--white)', color: 'rgba(13,15,20,.3)' }}>The Shift</div>
        <div className="sec-break-num" style={{ background: 'var(--white)', color: 'rgba(13,15,20,.18)' }}>03 / 06</div>
      </div>

      <section id="transition" data-screen-label="03 Transition">
        <div className="trans-inner">
          <div>
            <h2 className="trans-h2 r0">We're fixing <em>predictability.</em> We're rebuilding <em>trust.</em></h2>
            <p className="trans-body r0">One app. Every mode. Hyper-accurate ETAs, live tracking, digital ticketing, and a safety layer—unified in a single, elegant experience.</p>
            <div className="trans-feats r0">
              <div className="t-feat"><div className="t-pip"></div>Live Multi-Modal Tracking</div>
              <div className="t-feat"><div className="t-pip"></div>Hyper-Accurate ETAs</div>
              <div className="t-feat"><div className="t-pip"></div>Paperless QR Ticketing</div>
              <div className="t-feat"><div className="t-pip s"></div>One-Tap Trip Share for Safety</div>
            </div>
          </div>
          <div className="phone-mount" id="transPhoneMount">
            <IPhone>
              <TransScreen />
            </IPhone>
          </div>
        </div>
      </section>
    </>
  );
}
