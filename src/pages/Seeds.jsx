import { useState } from 'react';
import { 
  ShoppingBag, Check, ShieldCheck, Heart, Sparkles, 
  MessageCircle, Truck, Calendar, Phone, ArrowRight, CheckCircle2,
  XCircle, Gift, MapPin, Users, Dumbbell, Flame, Sprout, Eye, X
} from 'lucide-react';
import { products, subscriptionPlans, trialBoxOffer, offerings, contact } from '../data/products';
import './Seeds.css';

export default function Seeds() {
  const [selectedPlan, setSelectedPlan] = useState('family');
  const [selectedGreens, setSelectedGreens] = useState([
    'sunflower',
    'wheatgrass',
    'broccoli',
    'radish-purple',
  ]);
  const [customerName, setCustomerName] = useState('');
  const [customerArea, setCustomerArea] = useState('Jayanagar');
  const [familyMembers, setFamilyMembers] = useState('3–4 members');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [activeFlyerModal, setActiveFlyerModal] = useState(null);

  const toggleGreen = (slug) => {
    if (selectedGreens.includes(slug)) {
      if (selectedGreens.length > 1) {
        setSelectedGreens(selectedGreens.filter((s) => s !== slug));
      }
    } else {
      setSelectedGreens([...selectedGreens, slug]);
    }
  };

  const currentPlanObj = subscriptionPlans.find((p) => p.id === selectedPlan) || subscriptionPlans[1];

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappOrderUrl = `https://wa.me/917975190188?text=${encodeURIComponent(
    `Hello Manna Microgreens!\nI would like to start a subscription for:\n` +
    `*Plan*: ${currentPlanObj.name} (${currentPlanObj.price}${currentPlanObj.period})\n` +
    `*Boxes*: ${currentPlanObj.boxes}\n` +
    `*Selected Greens*: ${selectedGreens.join(', ')}\n\n` +
    `*Customer Details*:\n` +
    `1. Name: ${customerName || 'Friend'}\n` +
    `2. Area/Location: ${customerArea}\n` +
    `3. Family Members: ${familyMembers}\n` +
    `4. Phone: ${customerPhone || 'Not provided'}\n` +
    `5. Address: ${customerAddress || 'Please confirm delivery slot'}`
  )}`;

  const whatsappTrialUrl = `https://wa.me/917975190188?text=${encodeURIComponent(
    `Hello Manna Microgreens! I am a new customer and would like to order the *Trial Box for ₹199*. Please let me know how soon you can deliver to my area.`
  )}`;

  return (
    <div className="seeds-page page-enter">
      {/* ─── HERO ─── */}
      <section className="seeds-hero">
        <div className="container">
          <div className="seeds-hero__content">
            <div className="eyebrow">
              <span className="label">Pure · Fresh · Nutritious · Every Time</span>
            </div>
            <h1 className="display-lg text-white">
              Our Subscription Plans
            </h1>
            <p className="body-lg text-white seeds-hero__desc">
              We deliver freshly harvested, pesticide-free microgreens grown in a sterile environment
              thus providing you the purest form of nutrition right to your doorstep.
            </p>
            <div className="seeds-hero__badges">
              <span className="hero-pill"><Truck size={15} /> Delivery Included</span>
              <span className="hero-pill"><CheckCircle2 size={15} /> Cancel Anytime</span>
              <span className="hero-pill"><MapPin size={15} /> Jayanagar, Bengaluru</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TRIAL BOX BANNER ─── */}
      <section className="trial-offer-banner">
        <div className="container">
          <div className="trial-offer-card">
            <div className="trial-offer-left">
              <span className="trial-tag">NEW CUSTOMERS SPECIAL</span>
              <h3 className="trial-title">Try our Trial Box for just <em>₹199</em></h3>
              <p className="trial-desc">
                An easy, zero-risk way to experience the living freshness, vibrant crunch, and nutrient density of Manna Microgreens.
              </p>
            </div>
            <div className="trial-offer-right">
              <a
                href={whatsappTrialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-white btn-lg trial-cta"
              >
                <Gift size={18} />
                Order Trial Box (₹199)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4 OFFICIAL SUBSCRIPTION PLANS ─── */}
      <section className="section-pad seeds-plans" id="plans-section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--sp-12)' }}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>
              <span className="label">Freshly Harvested & Delivered Weekly</span>
            </div>
            <h2 className="display-md">Choose Your Living Routine</h2>
            <div className="divider" />
            <p className="body-lg" style={{ maxWidth: 640, margin: '0 auto' }}>
              Select the plan tailored to your household size and wellness goals.
              All plans include free express delivery from our Jayanagar sanctuary.
            </p>
            <div style={{ marginTop: 'var(--sp-4)' }}>
              <button
                type="button"
                className="btn btn-outline btn-sm"
                onClick={() => setActiveFlyerModal({ title: 'Manna Microgreens · Official Subscription Plans Flyer', src: `${import.meta.env.BASE_URL}images/flyers/subscription-plans-flyer.jpg` })}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
              >
                <Eye size={14} />
                <span>View Official Subscription Flyer</span>
              </button>
            </div>
          </div>

          <div className="plans-grid-4">
            {subscriptionPlans.map((plan) => {
              const isSelected = selectedPlan === plan.id;
              return (
                <div
                  key={plan.id}
                  className={`plan-card ${plan.popular ? 'plan-card--popular' : ''} ${isSelected ? 'plan-card--selected' : ''}`}
                  onClick={() => setSelectedPlan(plan.id)}
                >
                  {plan.popular && <div className="plan-badge-popular">★ MOST POPULAR</div>}
                  <div className="plan-card__top">
                    <span className="plan-card__icon">{plan.icon}</span>
                    <h3 className="plan-card__name">{plan.name}</h3>
                    <div className="plan-card__price-row">
                      <span className="plan-card__price">{plan.price}</span>
                      <span className="plan-card__period">{plan.period}</span>
                    </div>
                    <div className="plan-card__boxes-badge">{plan.boxes}</div>
                    <div className="plan-card__ideal">{plan.idealFor}</div>
                  </div>

                  <div className="plan-card__features">
                    {plan.features.map((f, i) => (
                      <div key={i} className="plan-feature-row">
                        <Check size={15} className="feature-check" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    type="button"
                    className={`btn ${isSelected ? 'btn-primary' : 'btn-outline'} btn-md plan-select-btn`}
                  >
                    {isSelected ? 'Selected Protocol' : 'Select Plan'}
                  </button>
                </div>
              );
            })}
          </div>

          <div className="plans-perks-row">
            <div className="plan-perk">
              <Truck size={20} className="perk-icon" />
              <div>
                <strong>Delivery Included</strong>
                <span>Direct to your doorstep</span>
              </div>
            </div>
            <div className="plan-perk-divider" />
            <div className="plan-perk">
              <CheckCircle2 size={20} className="perk-icon" />
              <div>
                <strong>Cancel Anytime</strong>
                <span>No contracts or lock-ins</span>
              </div>
            </div>
            <div className="plan-perk-divider" />
            <div className="plan-perk">
              <ShieldCheck size={20} className="perk-icon" />
              <div>
                <strong>Sterile Growing</strong>
                <span>100% pesticide-free guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHAT WE OFFER SECTION (FLYER SHOWCASE) ─── */}
      <section className="section-pad seeds-offerings" style={{ background: 'var(--clr-cream)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--sp-12)' }}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>
              <span className="label">Complete Range</span>
            </div>
            <h2 className="display-md">What We Offer</h2>
            <div className="divider" />
            <p className="body-lg" style={{ maxWidth: 620, margin: '0 auto' }}>
              From live trays to ready-to-eat sprout salads and DIY home kits.
            </p>
            <div style={{ marginTop: 'var(--sp-4)' }}>
              <button
                type="button"
                className="btn btn-outline btn-sm"
                onClick={() => setActiveFlyerModal({ title: 'Manna Microgreens · Our Microgreens & Offerings Flyer', src: `${import.meta.env.BASE_URL}images/flyers/offerings-flyer.jpg` })}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
              >
                <Eye size={14} />
                <span>View Official Offerings Flyer</span>
              </button>
            </div>
          </div>

          <div className="grid-3 offerings-grid">
            {offerings.map((item) => {
              let actionLink = '#checkout-form';
              let actionText = 'Select Varieties';
              let isExternal = false;

              if (item.id === 'trial-box') {
                actionLink = whatsappTrialUrl;
                actionText = 'Order Trial Box (₹199)';
                isExternal = true;
              } else if (item.id === 'sprouts-salad') {
                actionLink = `https://wa.me/917975190188?text=${encodeURIComponent('Hello Manna! I would like to order the Microgreens Sprouts Salad.')}`;
                actionText = 'Order Sprouts Salad';
                isExternal = true;
              } else if (item.id === 'custom-growing') {
                actionLink = `https://wa.me/917975190188?text=${encodeURIComponent('Hello Manna! I would like to inquire about Custom Growing for our restaurant/household requirements.')}`;
                actionText = 'Custom Growing Inquiry';
                isExternal = true;
              } else if (item.id === 'growing-kit') {
                actionLink = `https://wa.me/917975190188?text=${encodeURIComponent('Hello Manna! I would like to order the Microgreens Home Growing Kit (Coco peat + vermicompost + seeds).')}`;
                actionText = 'Order Growing Kit';
                isExternal = true;
              } else if (item.id === 'subscription-plans') {
                actionLink = '#plans-section';
                actionText = 'View 4 Plans (from ₹999)';
              }

              return (
                <div key={item.id} className="offering-card">
                  <span className="offering-card__icon">{item.icon}</span>
                  <h3 className="offering-card__title">{item.title}</h3>
                  <p className="offering-card__desc">{item.desc}</p>
                  <div style={{ marginTop: 'auto', paddingTop: 'var(--sp-4)' }}>
                    {isExternal ? (
                      <a
                        href={actionLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline btn-sm w-full"
                        style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
                      >
                        <MessageCircle size={14} />
                        {actionText}
                      </a>
                    ) : (
                      <a
                        href={actionLink}
                        className="btn btn-outline btn-sm w-full"
                        style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
                      >
                        {actionText} <ArrowRight size={14} />
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ─── CUSTOMIZE & CHECKOUT INTAKE FORM ─── */}
      <section className="section-pad seeds-checkout" id="checkout-form">
        <div className="container">
          <div className="checkout-card">
            <div className="checkout-card__header">
              <div className="eyebrow">
                <span className="label">To Get Started, Please Share:</span>
              </div>
              <h2 className="display-sm" style={{ color: 'var(--clr-green-deep)' }}>
                Customize Your Delivery Profile
              </h2>
              <p className="body-base text-muted">
                Selected Plan: <strong>{currentPlanObj.name}</strong> ({currentPlanObj.price}{currentPlanObj.period} · {currentPlanObj.boxes})
              </p>
            </div>

            <form onSubmit={handleOrderSubmit} className="checkout-form">
              {/* Variety selector */}
              <div className="form-section">
                <label className="form-label">
                  1. Choose your preferred varieties (tap to add or remove):
                </label>
                <div className="greens-select-grid">
                  {products.map((p) => {
                    const isSelected = selectedGreens.includes(p.slug);
                    return (
                      <div
                        key={p.slug}
                        className={`green-select-box ${isSelected ? 'selected' : ''}`}
                        onClick={() => toggleGreen(p.slug)}
                      >
                        {p.image ? (
                          <img src={p.image} alt={p.name} className="green-select-img" loading="lazy" />
                        ) : (
                          <span className="green-select-emoji">{p.emoji}</span>
                        )}
                        <div className="green-select-text">
                          <span className="green-select-name">{p.name}</span>
                          <span className="green-select-botanical">{p.glance.botanical}</span>
                        </div>
                        <div className="green-select-indicator">
                          {isSelected && <Check size={14} />}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* 3 Steps from Flyer */}
              <div className="form-grid-3">
                <div className="form-group">
                  <label className="form-label">1. Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ananya Rao"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">2. Area / Location in Bengaluru</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Jayanagar 9th Block, JP Nagar, etc."
                    value={customerArea}
                    onChange={(e) => setCustomerArea(e.target.value)}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">3. Number of Family Members</label>
                  <select
                    value={familyMembers}
                    onChange={(e) => setFamilyMembers(e.target.value)}
                    className="form-input form-select"
                  >
                    <option value="1–2 members (Starter Plan recommended)">1–2 members</option>
                    <option value="3–4 members (Family Plan recommended)">3–4 members</option>
                    <option value="5+ members (Wellness Pro / Fitness recommended)">5+ members</option>
                  </select>
                </div>
              </div>

              <div className="form-grid-2">
                <div className="form-group">
                  <label className="form-label">WhatsApp Contact Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98765 43210"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Door No. & Complete Street Address</label>
                  <input
                    type="text"
                    required
                    placeholder="Apartment, building, cross road..."
                    value={customerAddress}
                    onChange={(e) => setCustomerAddress(e.target.value)}
                    className="form-input"
                  />
                </div>
              </div>

              {/* Action buttons */}
              <div className="checkout-actions">
                <a
                  href={whatsappOrderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-lg checkout-whatsapp-btn"
                >
                  <MessageCircle size={20} />
                  Confirm on WhatsApp (+91 79751 90188)
                </a>
                <button type="submit" className="btn btn-outline btn-lg">
                  Submit Online Request
                </button>
              </div>

              <div className="checkout-guarantee">
                <ShieldCheck size={20} className="guarantee-icon" />
                <span>
                  <strong>Pure. Fresh. Nutritious. Every Time.</strong> We deliver freshly harvested, pesticide-free microgreens grown in a sterile environment right to your doorstep in Jayanagar and across Bengaluru.
                </span>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ─── SUCCESS MODAL ─── */}
      {submitted && (
        <div className="modal-backdrop" onClick={() => setSubmitted(false)}>
          <div className="success-modal" onClick={(e) => e.stopPropagation()}>
            <CheckCircle2 size={54} className="success-icon" />
            <h3 className="display-sm" style={{ color: 'var(--clr-green-deep)', margin: 'var(--sp-3) 0 var(--sp-2)' }}>
              Harvest Request Logged!
            </h3>
            <p className="body-base text-muted" style={{ marginBottom: 'var(--sp-6)' }}>
              Thank you, {customerName || 'friend'}! We have recommended the {currentPlanObj.name} for your family in {customerArea}.
              We will confirm your first delivery day on WhatsApp (+91 79751 90188).
            </p>
            <div style={{ display: 'flex', gap: 'var(--sp-3)', justifyContent: 'center' }}>
              <a
                href={whatsappOrderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm"
              >
                Chat with Grower Now
              </a>
              <button className="btn btn-outline btn-sm" onClick={() => setSubmitted(false)}>
                Done
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ─── FLYER LIGHTBOX MODAL ─── */}
      {activeFlyerModal && (
        <div className="modal-backdrop" onClick={() => setActiveFlyerModal(null)}>
          <div className="flyer-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="flyer-modal-header">
              <h3 className="flyer-modal-title">{activeFlyerModal.title}</h3>
              <button 
                className="flyer-modal-close"
                onClick={() => setActiveFlyerModal(null)}
                aria-label="Close poster"
              >
                <X size={20} />
              </button>
            </div>
            <div className="flyer-modal-body">
              <img 
                src={activeFlyerModal.src} 
                alt={activeFlyerModal.title} 
                className="flyer-modal-img"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
