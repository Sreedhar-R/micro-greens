import { Link } from 'react-router-dom';
import { Leaf, Heart, ShieldCheck, Sparkles, Sprout, ArrowRight } from 'lucide-react';
import { whyManna } from '../data/products';
import './Roots.css';

const corePillars = [
  {
    icon: '🌱',
    title: 'The Manna Philosophy',
    desc: 'In ancient lore, Manna was divine, life-sustaining nourishment provided fresh every morning. We bring this sacred reverence back to modern tables through living greens grown with unconditional purity.',
  },
  {
    icon: '🏡',
    title: 'Hyper-Local Urban Farming',
    desc: 'Our sanctuary is located right inside the city. By removing cross-country freight, cold storage warehouses, and multi-week distribution chains, we deliver greens still vibrating with vital energy.',
  },
  {
    icon: '💧',
    title: 'Zero Chemical Tolerance',
    desc: 'Not a single synthetic pesticide, herbicide, or growth stimulant ever enters our growing space. We use only reverse-osmosis purified water and organic coconut coir.',
  },
  {
    icon: '♻️',
    title: 'Circular Ecology',
    desc: 'Indoor vertical farming uses 90% less water than open field agriculture. Every used growing pad is composted back into fertile soil, generating zero organic landfill waste.',
  },
];

export default function Roots() {
  return (
    <div className="roots-page page-enter">
      {/* ─── HERO ─── */}
      <section className="roots-hero">
        <div className="container">
          <div className="roots-hero__content">
            <div className="eyebrow">
              <span className="label">Our Heritage & Mission</span>
            </div>
            <h1 className="display-lg text-white">
              Cultivating Living Vitality
            </h1>
            <p className="body-lg text-white roots-hero__desc">
              Manna Microgreens was born from a simple realization: modern supermarket produce has lost its soul,
              traveling thousands of miles before reaching your plate. We returned to the source.
            </p>
          </div>
        </div>
      </section>

      {/* ─── STORY ESSAY ─── */}
      <section className="section-pad roots-narrative">
        <div className="container">
          <div className="roots-narrative__layout">
            <div className="roots-narrative__box">
              <div className="eyebrow">
                <span className="label">The Story</span>
              </div>
              <h2 className="display-md" style={{ marginBottom: 'var(--sp-6)' }}>
                From a Curiosity to a Daily Calling
              </h2>
              <div className="narrative-text">
                <p>
                  In 2025, after examining research on nutrient degradation in conventional supply chains,
                  we discovered a stark truth: within 5 days of harvest, standard leafy greens lose over 50%
                  of their active vitamin C and antioxidant capacity.
                </p>
                <p>
                  Microgreens offered an extraordinary revelation. Harvested at the magical 7 to 10-day window
                  when the cotyledon leaves first unfurl, they possess up to 40 times the concentrated phytonutrient
                  potency of mature crops. They don't just nourish; they revitalize the human cellular ecosystem.
                </p>
                <p>
                  We established Manna as a sanctuary of clean vertical farming. No soil-borne pathogens.
                  No pesticide sprays. No chemical preservatives. Just honest, vibrant, living plants grown
                  with love and delivered fresh to conscious homes.
                </p>
              </div>
            </div>

            <div className="roots-visual-emblem">
              <div className="roots-emblem-card">
                <img 
                  src="/images/manna-logo.jpg" 
                  alt="Manna Microgreens Official Brand Emblem" 
                  className="roots-emblem-img"
                />
                <div className="roots-emblem-caption">
                  <h4>Manna Microgreens</h4>
                  <p>Small Greens, Big Nutrition.</p>
                  <span>Grown Fresh Indoors with Care · Jayanagar 9th Block</span>
                </div>
              </div>
              <div className="roots-crop-preview">
                <img 
                  src="/images/products/sunflower.jpg" 
                  alt="Sunflower Microgreens Harvest" 
                  className="roots-crop-img"
                />
                <div className="roots-crop-caption">
                  <span>Living Harvest Tray · 7 Days</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4 PILLARS ─── */}
      <section className="section-pad roots-pillars" style={{ background: 'var(--clr-cream)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--sp-12)' }}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>
              <span className="label">Our Foundation</span>
            </div>
            <h2 className="display-md">The Four Manna Pillars</h2>
            <div className="divider" />
          </div>

          <div className="grid-2 pillars-grid">
            {corePillars.map((p, i) => (
              <div key={i} className="pillar-card">
                <span className="pillar-card__icon">{p.icon}</span>
                <h3 className="pillar-card__title">{p.title}</h3>
                <p className="pillar-card__desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY MANNA ACCREDITATIONS ─── */}
      <section className="section-pad roots-why">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--sp-12)' }}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>
              <span className="label">The Manna Standard</span>
            </div>
            <h2 className="display-md">Why Discerning Families Choose Us</h2>
            <div className="divider" />
          </div>

          <div className="grid-3 why-grid">
            {whyManna.map((item, idx) => (
              <div key={idx} className="why-card">
                <span className="why-card__icon">{item.icon}</span>
                <h3 className="why-card__title">{item.title}</h3>
                <p className="why-card__desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="section-pad roots-cta">
        <div className="container text-center">
          <h2 className="display-sm" style={{ marginBottom: 'var(--sp-4)' }}>
            Taste the Purity Yourself
          </h2>
          <p className="body-lg" style={{ maxWidth: 560, margin: '0 auto var(--sp-6)' }}>
            Join our community of wellness seekers and chefs embracing fresh living greens.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--sp-4)', flexWrap: 'wrap' }}>
            <Link to="/harvest" className="btn btn-primary btn-lg">
              Explore Our Harvest
              <ArrowRight size={18} />
            </Link>
            <Link to="/seeds" className="btn btn-outline btn-lg">
              Order Fresh
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
