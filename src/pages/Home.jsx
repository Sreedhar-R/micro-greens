import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Leaf, Star, ChevronDown, Check, ShieldCheck, Heart, 
  Calendar, Truck, Gift, MessageCircle, Phone, Sparkles, MapPin, 
  CheckCircle2, Users, Flame, Dumbbell, Award, Eye, X
} from 'lucide-react';
import { 
  products, 
  testimonials, 
  whyManna, 
  offerings, 
  subscriptionPlans, 
  whyMicrogreensPills,
  whatAreMicrogreens,
  contact 
} from '../data/products';
import ProductCard from '../components/ProductCard';
import './Home.css';

export default function Home() {
  const [quickName, setQuickName] = useState('');
  const [quickArea, setQuickArea] = useState('Jayanagar 9th Block');
  const [quickMembers, setQuickMembers] = useState('3–4 members (Family Plan)');
  const [flyerModal, setFlyerModal] = useState(null);

  const quickWhatsappUrl = `https://wa.me/917975190188?text=${encodeURIComponent(
    `Hello Manna Microgreens!\nI would like to get started with fresh microgreens delivery.\n\n` +
    `*My Details*:\n` +
    `1. Name: ${quickName || 'Interested Customer'}\n` +
    `2. Area/Location: ${quickArea}\n` +
    `3. Number of Family Members: ${quickMembers}\n\n` +
    `Please recommend the best plan for my household and let me know about the next fresh delivery slot.`
  )}`;

  const trialBoxWhatsappUrl = `https://wa.me/917975190188?text=${encodeURIComponent(
    `Hello Manna Microgreens! I am a new customer and would like to try your *Trial Box for just ₹199*. Please let me know how soon you can deliver to my area.`
  )}`;

  return (
    <div className="home page-enter">
      {/* ─── HERO ─── */}
      <section className="hero">
        <div className="hero__bg">
          <div className="hero__overlay" />
          <div className="hero__leaves">
            {['🌿','🌱','🍃','🌿','🌱'].map((l, i) => (
              <span key={i} className={`hero__leaf hero__leaf--${i+1}`}>{l}</span>
            ))}
          </div>
        </div>
        <div className="hero__content container">
          <div className="hero__badge animate-fade-up">
            <Leaf size={14} />
            <span>Pure. Fresh. Nutritious. Every Time. · Jayanagar 9th Block, Bengaluru</span>
          </div>
          <h1 className="display-xl text-white hero__title animate-fade-up delay-100">
            Small Greens,<br />
            <em>Big Nutrition.</em>
          </h1>
          <p className="body-lg text-white hero__subtitle animate-fade-up delay-200">
            We deliver freshly harvested, pesticide-free microgreens grown in a sterile environment
            thus providing you the purest form of nutrition right to your doorstep.
          </p>
          <div className="hero__actions animate-fade-up delay-300">
            <Link to="/harvest" className="btn btn-white btn-lg">
              Explore 14 Varieties
              <ArrowRight size={18} />
            </Link>
            <Link to="/seeds" className="btn btn-outline btn-lg text-white">
              Subscription Plans (from ₹999)
            </Link>
            <a 
              href={trialBoxWhatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-ghost btn-lg hero-trial-cta"
            >
              <Gift size={18} />
              Try ₹199 Trial Box
            </a>
          </div>
          <div className="hero__stats animate-fade-up delay-400">
            <div className="hero__stat">
              <span className="hero__stat-number">40×</span>
              <span className="hero__stat-label">More Nutrients</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-number">7–10</span>
              <span className="hero__stat-label">Days to Harvest</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-number">100%</span>
              <span className="hero__stat-label">Pesticide Free</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-number">₹199</span>
              <span className="hero__stat-label">Trial Box Offer</span>
            </div>
          </div>
        </div>
        <a href="#why-microgreens" className="hero__scroll" aria-label="Scroll down">
          <ChevronDown size={20} />
        </a>
      </section>

      {/* ─── WHY MICROGREENS? (DIRECT FROM FLYER 1) ─── */}
      <section id="why-microgreens" className="section-pad why-microgreens-section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--sp-12)' }}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>
              <span className="label">Living Superfoods</span>
            </div>
            <h2 className="display-md">Why Microgreens?</h2>
            <div className="divider" />
            <p className="body-lg" style={{ maxWidth: 640, margin: '0 auto' }}>
              Microgreens are young vegetable greens that are harvested just after the cotyledon leaves have developed.
              They contain concentrated active enzymes and up to 40× higher micronutrient density than mature plants.
            </p>
          </div>

          <div className="why-pills-grid">
            {whyMicrogreensPills.map((p) => (
              <div key={p.id} className="why-pill-card">
                <div className="why-pill-card__top">
                  <span className="why-pill-card__badge">{p.badge}</span>
                </div>
                <h3 className="heading-md why-pill-card__title">{p.title}</h3>
                <p className="body-sm text-muted">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="guarantee-strip">
            <div className="guarantee-item">
              <Truck size={22} className="text-forest" />
              <span><strong>Delivery Included</strong> Across Bengaluru</span>
            </div>
            <div className="guarantee-divider" />
            <div className="guarantee-item">
              <CheckCircle2 size={22} className="text-forest" />
              <span><strong>Cancel Anytime</strong> With Zero Lock-ins</span>
            </div>
            <div className="guarantee-divider" />
            <div className="guarantee-item">
              <ShieldCheck size={22} className="text-forest" />
              <span><strong>Sterile Environment</strong> Grown Indoors with Care</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHAT ARE MICROGREENS & WHAT WE OFFER (FLYER 4 SHOWCASE) ─── */}
      <section className="section-pad offerings-showcase-section" style={{ background: 'var(--clr-cream)' }}>
        <div className="container">
          <div className="offerings-header-split">
            <div className="offerings-header-left">
              <div className="eyebrow">
                <span className="label">{whatAreMicrogreens.subtitle}</span>
              </div>
              <h2 className="display-md">{whatAreMicrogreens.title}</h2>
              <div className="divider" style={{ margin: 'var(--sp-4) 0' }} />
              <p className="body-lg" style={{ color: 'var(--clr-text)' }}>
                {whatAreMicrogreens.description}
              </p>
              <div style={{ marginTop: 'var(--sp-4)' }}>
                <button
                  type="button"
                  className="btn btn-outline btn-sm"
                  onClick={() => setFlyerModal({ title: 'Manna Microgreens · Our Microgreens & Offerings Flyer', src: `${import.meta.env.BASE_URL}images/flyers/offerings-flyer.jpg` })}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                >
                  <Eye size={14} />
                  <span>View Official Offerings Flyer</span>
                </button>
              </div>
            </div>
            <div className="offerings-header-right">
              <div className="offerings-quick-facts">
                <div className="fact-row">
                  <Leaf size={18} className="text-forest" />
                  <span>Individual & mixed varieties available live or freshly harvested</span>
                </div>
                <div className="fact-row">
                  <ShieldCheck size={18} className="text-forest" />
                  <span>100% pesticide-free, grown with reverse-osmosis purified water</span>
                </div>
                <div className="fact-row">
                  <MapPin size={18} className="text-forest" />
                  <span>Harvested fresh in Jayanagar 9th Block, Bengaluru</span>
                </div>
              </div>
            </div>
          </div>

          <div className="offerings-cards-grid">
            {offerings.map((offering) => (
              <div key={offering.id} className="offering-tile">
                <span className="offering-tile__icon">{offering.icon}</span>
                <h3 className="heading-md offering-tile__title">{offering.title}</h3>
                <p className="body-sm text-muted">{offering.desc}</p>
                <div className="offering-tile__link">
                  <Link to="/seeds" className="text-link">
                    Explore & Order <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURED HARVEST (14 VARIETIES) ─── */}
      <section id="harvest" className="section-pad">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--sp-12)' }}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>
              <span className="label">Living Produce · 14 Harvest Varieties</span>
            </div>
            <h2 className="display-md">Our Fresh Microgreens Varieties</h2>
            <div className="divider" />
            <p className="body-lg" style={{ maxWidth: 640, margin: '0 auto' }}>
              14 premium living varieties — featuring our 12 signature farm flyer varieties including 
              crunchy Sunflower, energizing Wheatgrass, detoxifying Broccoli, and vibrant Radishes.
            </p>
          </div>
          <div className="grid-3">
            {products.slice(0, 6).map((p, i) => (
              <ProductCard key={p.id} product={p} delay={i * 80} />
            ))}
          </div>
          <div className="text-center" style={{ marginTop: 'var(--sp-10)' }}>
            <Link to="/harvest" className="btn btn-outline btn-lg">
              Explore All 14 Harvest Varieties & Matrix Table
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── OUR SUBSCRIPTION PLANS (DIRECT FROM FLYER 1) ─── */}
      <section className="section-pad plans-home-section" style={{ background: 'var(--clr-green-bg)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--sp-12)' }}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>
              <span className="label">Weekly Doorstep Deliveries</span>
            </div>
            <h2 className="display-md">Our Subscription Plans</h2>
            <div className="divider" />
            <p className="body-lg" style={{ maxWidth: 620, margin: '0 auto' }}>
              Choose the weekly box routine tailored to your household size.
              Delivery included across Bengaluru. Cancel anytime.
            </p>
            <div style={{ marginTop: 'var(--sp-4)' }}>
              <button
                type="button"
                className="btn btn-outline btn-sm"
                onClick={() => setFlyerModal({ title: 'Manna Microgreens · Official Subscription Plans Flyer', src: `${import.meta.env.BASE_URL}images/flyers/subscription-plans-flyer.jpg` })}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
              >
                <Eye size={14} />
                <span>View Official Subscription Flyer</span>
              </button>
            </div>
          </div>

          <div className="home-plans-grid">
            {subscriptionPlans.map((plan) => (
              <div 
                key={plan.id} 
                className={`home-plan-card ${plan.popular ? 'home-plan-card--popular' : ''}`}
              >
                {plan.popular && <div className="home-plan-badge">★ MOST POPULAR</div>}
                <div className="home-plan-icon">{plan.icon}</div>
                <h3 className="heading-md home-plan-name">{plan.name}</h3>
                <div className="home-plan-price-row">
                  <span className="home-plan-price">{plan.price}</span>
                  <span className="home-plan-period">{plan.period}</span>
                </div>
                <div className="home-plan-boxes-pill">{plan.boxes}</div>
                <p className="body-sm text-muted home-plan-ideal">{plan.idealFor}</p>
                
                <ul className="home-plan-features">
                  {plan.features.slice(0, 4).map((f, i) => (
                    <li key={i}>
                      <Check size={14} className="text-forest" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link to="/seeds" className={`btn ${plan.popular ? 'btn-primary' : 'btn-outline'} btn-md w-full`}>
                  Subscribe to {plan.name}
                </Link>
              </div>
            ))}
          </div>

          {/* New Customer Trial Box Callout */}
          <div className="home-trial-box-card">
            <div className="home-trial-box-left">
              <span className="badge-pill-green">NEW CUSTOMERS</span>
              <h3 className="display-xs" style={{ margin: 'var(--sp-2) 0' }}>
                Try our Trial Box for just <em>₹199</em>
              </h3>
              <p className="body-sm text-muted">
                Experience freshly harvested, pesticide-free microgreens grown in a sterile environment with zero commitment.
              </p>
            </div>
            <div className="home-trial-box-right">
              <a 
                href={trialBoxWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-md"
              >
                <Gift size={16} />
                Order Trial Box (₹199)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TO GET STARTED INTAKE CARD (FLYER 1) ─── */}
      <section className="section-pad quick-intake-section">
        <div className="container">
          <div className="quick-intake-card">
            <div className="quick-intake-left">
              <div className="eyebrow">
                <span className="label">Simple 3-Step Onboarding</span>
              </div>
              <h2 className="display-sm" style={{ color: 'var(--clr-green-deep)' }}>
                To Get Started, Please Share:
              </h2>
              <div className="divider" style={{ margin: 'var(--sp-4) 0' }} />
              <p className="body-base text-muted" style={{ marginBottom: 'var(--sp-6)' }}>
                Tell us your location and family size. We'll recommend the best plan for you
                and arrange your first fresh delivery from our Jayanagar indoor farm.
              </p>

              <div className="intake-steps-list">
                <div className="intake-step-item">
                  <span className="intake-step-num">1</span>
                  <div>
                    <strong>Your Name</strong>
                    <p className="body-xs text-muted">Who should we address the living delivery to?</p>
                  </div>
                </div>
                <div className="intake-step-item">
                  <span className="intake-step-num">2</span>
                  <div>
                    <strong>Area / Location in Bengaluru</strong>
                    <p className="body-xs text-muted">Jayanagar 9th Block, JP Nagar, Koramangala, etc.</p>
                  </div>
                </div>
                <div className="intake-step-item">
                  <span className="intake-step-num">3</span>
                  <div>
                    <strong>Number of Family Members</strong>
                    <p className="body-xs text-muted">1–2 (Starter), 3–4 (Family), or 5+ (Wellness Pro / Fitness Elite)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="quick-intake-form-box">
              <h3 className="heading-md" style={{ marginBottom: 'var(--sp-4)' }}>
                Quick WhatsApp Consultation
              </h3>
              
              <div className="intake-field">
                <label className="intake-label">1. Your Name</label>
                <input 
                  type="text" 
                  placeholder="e.g. Ramesh Sreedhar" 
                  value={quickName} 
                  onChange={(e) => setQuickName(e.target.value)} 
                  className="form-input"
                />
              </div>

              <div className="intake-field">
                <label className="intake-label">2. Area / Location in Bengaluru</label>
                <input 
                  type="text" 
                  placeholder="e.g. Jayanagar 9th Block, Bengaluru" 
                  value={quickArea} 
                  onChange={(e) => setQuickArea(e.target.value)} 
                  className="form-input"
                />
              </div>

              <div className="intake-field">
                <label className="intake-label">3. Number of Family Members</label>
                <select 
                  value={quickMembers} 
                  onChange={(e) => setQuickMembers(e.target.value)}
                  className="form-input form-select"
                >
                  <option value="1–2 members (Starter Plan recommended)">1–2 people (Starter Plan)</option>
                  <option value="3–4 members (Family Plan recommended)">3–4 people (Family Plan - Most Popular)</option>
                  <option value="5+ members (Wellness Pro / Fitness Elite)">5+ people (Wellness Pro / Fitness)</option>
                </select>
              </div>

              <a 
                href={quickWhatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary btn-lg w-full"
                style={{ marginTop: 'var(--sp-4)' }}
              >
                <MessageCircle size={18} />
                Send via WhatsApp (+91 79751 90188)
              </a>

              <p className="body-xs text-center text-muted" style={{ marginTop: 'var(--sp-3)' }}>
                We will recommend the best plan for you and arrange your first delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 40× NUTRIENT BANNER ─── */}
      <section className="nutrient-banner">
        <div className="container">
          <div className="nutrient-banner__inner">
            <div className="nutrient-banner__text">
              <h2 className="display-md text-white">
                Up to <span className="nutrient-banner__highlight">40× More</span> Nutrients than Mature Vegetables
              </h2>
              <p className="body-lg text-white" style={{ opacity: 0.85, marginTop: 'var(--sp-4)' }}>
                Harvested just 7–10 days after germination at the cotyledon stage — when natural 
                vitamins, plant proteins, sulforaphane, betalains, and living chlorophyll reach peak concentration.
              </p>
              <div style={{ display: 'flex', gap: 'var(--sp-4)', marginTop: 'var(--sp-8)', flexWrap: 'wrap' }}>
                <Link to="/wellness" className="btn btn-white btn-lg">
                  Explore Wellness Science
                  <ArrowRight size={18} />
                </Link>
                <Link to="/nourish" className="btn btn-ghost btn-lg text-white">
                  Culinary Recipes & Uses
                </Link>
              </div>
            </div>
            <div className="nutrient-banner__visual">
              <div className="nutrient-rings">
                <div className="nutrient-ring nutrient-ring--outer">
                  <div className="nutrient-ring nutrient-ring--mid">
                    <div className="nutrient-ring nutrient-ring--inner">
                      <span>🌱</span>
                    </div>
                  </div>
                </div>
                <div className="nutrient-label nutrient-label--1">Vitamin E ↑35.2mg</div>
                <div className="nutrient-label nutrient-label--2">Sulforaphane 40–100×</div>
                <div className="nutrient-label nutrient-label--3">Chlorophyll Ultra High</div>
                <div className="nutrient-label nutrient-label--4">Betalains & Anthocyanins</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE MANNA ─── */}
      <section className="section-pad why-section">
        <div className="container">
          <div className="why-section__inner">
            <div className="why-section__left">
              <div className="eyebrow">
                <span className="label">Hyper-Local Indoor Cultivation</span>
              </div>
              <h2 className="display-md">The Manna Difference</h2>
              <div className="divider" style={{ margin: 'var(--sp-5) 0' }} />
              <p className="body-lg">
                We believe pure nutrition shouldn't come at the cost of chemical pesticides or long transport miles. 
                Every tray is grown indoors in sterile conditions in Jayanagar 9th Block with purified water and delivered fresh weekly.
              </p>
              <Link to="/roots" className="btn btn-primary btn-lg" style={{ marginTop: 'var(--sp-8)' }}>
                Read Our Story & Philosophy
                <ArrowRight size={18} />
              </Link>
            </div>
            <div className="why-section__grid">
              {whyManna.map((item, i) => (
                <div key={i} className="why-card">
                  <div className="why-card__icon">{item.icon}</div>
                  <h3 className="heading-md">{item.title}</h3>
                  <p className="body-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="section-pad">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--sp-12)' }}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>
              <span className="label">Community Reviews</span>
            </div>
            <h2 className="display-md">Loved by Health-Conscious Households</h2>
            <div className="divider" />
          </div>
          <div className="grid-4" style={{ gap: 'var(--sp-5)' }}>
            {testimonials.map((t) => (
              <div key={t.id} className="testimonial-card">
                <div className="testimonial-card__stars">
                  {[...Array(t.rating)].map((_, s) => (
                    <Star key={s} size={14} fill="#d4a017" color="#d4a017" />
                  ))}
                </div>
                <p className="testimonial-card__text">"{t.text}"</p>
                <div className="testimonial-card__author">
                  <div className="testimonial-card__avatar">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="testimonial-card__name">{t.name}</p>
                    <p className="testimonial-card__meta">{t.location} · {t.product}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── READY TO GROW HEALTHIER CTA ─── */}
      <section className="section-pad cta-section">
        <div className="container">
          <div className="cta-box">
            <div className="cta-box__leaves">🌿</div>
            <h2 className="display-md text-white">Pure. Fresh. Nutritious. Every Time.</h2>
            <p className="body-lg text-white" style={{ opacity: 0.9, maxWidth: 600, margin: '0 auto var(--sp-8)' }}>
              Join hundreds of Bengaluru families nourishing their bodies with living enzymes and 
              bio-available vitamins. Delivered fresh weekly from Jayanagar 9th Block.
            </p>
            <div style={{ display: 'flex', gap: 'var(--sp-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/seeds" className="btn btn-white btn-lg">
                <span>Choose a Subscription</span>
                <ArrowRight size={18} />
              </Link>
              <a href="tel:+917975190188" className="btn btn-ghost btn-lg text-white">
                <Phone size={18} />
                Call +91 79751 90188
              </a>
            </div>
            <div style={{ marginTop: 'var(--sp-6)', color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem' }}>
              WhatsApp: +91 79751 90188 / +91 81050 11430 · Instagram: @growwithmanna
            </div>
          </div>
        </div>
      </section>

      {/* ─── FLYER LIGHTBOX MODAL ─── */}
      {flyerModal && (
        <div className="modal-backdrop" onClick={() => setFlyerModal(null)}>
          <div className="flyer-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="flyer-modal-header">
              <h3 className="flyer-modal-title">{flyerModal.title}</h3>
              <button 
                className="flyer-modal-close"
                onClick={() => setFlyerModal(null)}
                aria-label="Close poster"
              >
                <X size={20} />
              </button>
            </div>
            <div className="flyer-modal-body">
              <img 
                src={flyerModal.src} 
                alt={flyerModal.title} 
                className="flyer-modal-img"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
