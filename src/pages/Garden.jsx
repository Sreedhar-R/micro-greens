import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Droplet, Sun, Wind, Sparkles, ShieldCheck, Check, 
  ArrowRight, Sprout, Home as HomeIcon, Scissors, Truck 
} from 'lucide-react';
import { growingProcess, products } from '../data/products';
import './Garden.css';

const gardenSpecs = [
  {
    icon: <Droplet size={24} className="spec-icon" />,
    title: 'Purified Water',
    desc: 'Reverse-osmosis filtered water with zero chlorine, chemical softeners or synthetic nitrates.',
  },
  {
    icon: <Sun size={24} className="spec-icon" />,
    title: 'Full-Spectrum Light',
    desc: 'Optimized photosynthetic photons mimicking gentle morning sunlight to spark maximum phytochemical synthesis.',
  },
  {
    icon: <Wind size={24} className="spec-icon" />,
    title: 'HEPA Clean Air',
    desc: 'Continuously filtered indoor atmosphere ensuring zero city smog, dust, insect contact or pathogens.',
  },
  {
    icon: <Sprout size={24} className="spec-icon" />,
    title: 'Organic Growing Medium',
    desc: '100% biodegradable virgin coconut coir fiber that allows roots to breathe without artificial fertilizers.',
  },
];

const sustainabilityStats = [
  { number: '90%', label: 'Water Saved', desc: 'vs. conventional open-field farming' },
  { number: '0g', label: 'Synthetic Pesticides', desc: 'Never sprayed or added to water' },
  { number: '100%', label: 'Compostable', desc: 'Plant-based packaging & root medium' },
  { number: '< 15km', label: 'Avg Delivery Radius', desc: 'True hyper-local urban agriculture' },
];

export default function Garden() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="garden-page page-enter">
      {/* ─── HERO ─── */}
      <section className="garden-hero">
        <div className="container">
          <div className="garden-hero__inner">
            <div className="eyebrow">
              <span className="label">The Sanctuary</span>
            </div>
            <h1 className="display-lg text-white">
              Inside Our Sanctuary Garden
            </h1>
            <p className="body-lg text-white garden-hero__desc">
              Where nature's ancient vitality meets modern indoor clean-growing precision.
              Zero chemicals, pure moisture, and tender daily stewardship.
            </p>
            <div className="garden-hero__stats">
              {sustainabilityStats.map((s, i) => (
                <div key={i} className="garden-stat">
                  <span className="garden-stat__number">{s.number}</span>
                  <span className="garden-stat__label">{s.label}</span>
                  <span className="garden-stat__desc">{s.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5-STEP JOURNEY ─── */}
      <section className="section-pad garden-steps">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--sp-12)' }}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>
              <span className="label">Seed to Table</span>
            </div>
            <h2 className="display-md">The 7–10 Day Miracle</h2>
            <div className="divider" />
            <p className="body-lg" style={{ maxWidth: 640, margin: '0 auto' }}>
              A seedling's first two true leaves contain the highest biological energy it will ever produce.
              Here is how we nurture that spark from dormant seed to your plate.
            </p>
          </div>

          <div className="process-timeline">
            {growingProcess.map((step, idx) => (
              <div key={idx} className="process-step">
                <div className="process-step__header">
                  <span className="process-step__number">{step.step}</span>
                  <span className="process-step__icon">{step.icon}</span>
                </div>
                <div className="process-step__content">
                  <h3 className="process-step__title">{step.title}</h3>
                  <p className="process-step__desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LIVING CROP TRAY SHOWCASE ─── */}
      <section className="section-pad garden-tray-showcase">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--sp-10)' }}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>
              <span className="label">Living Sanctuary Trays</span>
            </div>
            <h2 className="display-md">Grown Fresh Indoors with Care</h2>
            <div className="divider" />
            <p className="body-lg" style={{ maxWidth: 600, margin: '0 auto' }}>
              Every tray is nurtured with reverse-osmosis purified water and pristine air in Jayanagar 9th Block.
            </p>
          </div>

          <div className="garden-trays-grid">
            {products.slice(0, 6).map((p) => (
              <Link to={`/harvest/${p.slug}`} key={p.id} className="garden-tray-card">
                <div className="garden-tray-card__img-wrap">
                  <img src={p.image} alt={p.name} className="garden-tray-card__img" loading="lazy" />
                  <span className="garden-tray-card__badge">{p.glance.days}</span>
                </div>
                <div className="garden-tray-card__body">
                  <h3 className="garden-tray-card__name">{p.name}</h3>
                  <p className="garden-tray-card__botanical">{p.glance.botanical}</p>
                  <span className="garden-tray-card__link">
                    View Profile <ArrowRight size={13} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CLIMATE CONTROL MATRIX ─── */}
      <section className="section-pad garden-environment" style={{ background: 'var(--clr-cream)' }}>
        <div className="container">
          <div className="grid-2 garden-env-grid">
            <div>
              <div className="eyebrow">
                <span className="label">Clean Room Cultivation</span>
              </div>
              <h2 className="display-sm" style={{ marginBottom: 'var(--sp-4)' }}>
                Protected from City Pollution & Harsh Weather
              </h2>
              <p className="body-lg" style={{ marginBottom: 'var(--sp-6)' }}>
                Unlike outdoor farms vulnerable to acid rain, vehicle emissions, bird droppings and insect pests,
                our indoor sanctuary offers an untouched microclimate where greens thrive stress-free.
              </p>

              <div className="specs-list">
                {gardenSpecs.map((spec, i) => (
                  <div key={i} className="spec-item">
                    <div className="spec-item__icon-wrap">{spec.icon}</div>
                    <div>
                      <h4 className="spec-item__title">{spec.title}</h4>
                      <p className="spec-item__desc">{spec.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Sanctuary Card */}
            <div className="garden-visual-card">
              <div className="garden-visual-card__header">
                <span className="badge badge-green">LIVE CLIMATE TELEMETRY</span>
                <span className="live-pulse" />
              </div>
              <div className="telemetry-grid">
                <div className="telemetry-item">
                  <span className="telemetry-label">Sanctuary Temp</span>
                  <span className="telemetry-val">21.5°C</span>
                  <span className="telemetry-sub">Optimal Photosynthesis</span>
                </div>
                <div className="telemetry-item">
                  <span className="telemetry-label">Relative Humidity</span>
                  <span className="telemetry-val">58%</span>
                  <span className="telemetry-sub">Crisp Stem Growth</span>
                </div>
                <div className="telemetry-item">
                  <span className="telemetry-label">Water Purity</span>
                  <span className="telemetry-val">12 TDS</span>
                  <span className="telemetry-sub">Zero Chlorination</span>
                </div>
                <div className="telemetry-item">
                  <span className="telemetry-label">Air Particulates</span>
                  <span className="telemetry-val">PM 2.5: 0</span>
                  <span className="telemetry-sub">HEPA-13 Scrubbed</span>
                </div>
              </div>
              <div className="garden-visual-card__footer">
                <p>
                  "We believe food grown in pure, stress-free conditions transfers that same serene vitality to your cells."
                </p>
                <span className="quote-author">— The Manna Growers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="section-pad garden-cta">
        <div className="container text-center">
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            <span className="label">Taste The Difference</span>
          </div>
          <h2 className="display-md" style={{ marginBottom: 'var(--sp-4)' }}>
            Experience Sanctuary Freshness
          </h2>
          <p className="body-lg" style={{ maxWidth: 580, margin: '0 auto var(--sp-8)' }}>
            Fresh trays are grown and harvested specifically for you. Order today and receive living greens delivered to your kitchen.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--sp-4)', flexWrap: 'wrap' }}>
            <Link to="/harvest" className="btn btn-primary btn-lg">
              Explore Our Harvest
              <ArrowRight size={18} />
            </Link>
            <Link to="/connect" className="btn btn-outline btn-lg">
              Schedule a Sanctuary Visit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
