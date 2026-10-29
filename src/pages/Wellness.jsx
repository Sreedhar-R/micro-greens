import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Heart, Zap, Award, BookOpen, Activity, ArrowRight, Check } from 'lucide-react';
import './Wellness.css';

const phytochemicals = [
  {
    name: 'Sulforaphane',
    foundIn: 'Broccoli & Mustard Microgreens',
    emoji: '🥦',
    image: '/images/products/broccoli.jpg',
    concentration: '40–100× higher than mature broccoli',
    mechanism: 'The King of Cellular Detoxification',
    description:
      'Sulforaphane triggers the Nrf2 genetic pathway — our body’s master switch for cellular defense. It prompts your cells to produce their own internal antioxidants (glutathione) that neutralize harmful oxidants for up to 72 hours.',
    benefits: ['Phase-II liver detox support', 'Potent anti-inflammatory action', 'Cellular longevity & DNA protection'],
  },
  {
    name: 'Anthocyanins',
    foundIn: 'Radish Purple Microgreens',
    emoji: '🟣',
    image: '/images/products/radish-purple.jpg',
    concentration: 'Concentrated in deep purple cotyledon stems',
    mechanism: 'Cardiovascular & Neuroprotective Pigments',
    description:
      'Anthocyanins provide the deep violet hue in Radish Purple. These water-soluble flavonoids neutralize reactive oxygen species, support arterial flexibility, and protect neural synapses against cognitive fatigue.',
    benefits: ['Vascular endothelium protection', 'Anti-inflammatory free radical defense', 'Cognitive clarity and retinal microcirculation'],
  },
  {
    name: 'Lutein & Zeaxanthin',
    foundIn: 'Spinach Microgreens',
    emoji: '🥬',
    image: '/images/products/spinach.jpg',
    concentration: 'Highly bioavailable in tender 7-day shoots',
    mechanism: 'Macular & Retinal Photoprotectants',
    description:
      'These critical carotenoids deposit directly into the human macula, acting as internal sunglasses that filter harmful blue light from screens and counteract ocular oxidative strain.',
    benefits: ['Protects against screen blue-light fatigue', 'Preserves sharp central vision', 'Powerful cellular antioxidant matrix'],
  },
  {
    name: 'Betalains & Nitrates',
    foundIn: 'Red Amaranth & Beetroot Microgreens',
    emoji: '🌺',
    image: '/images/products/red-amaranth.jpg',
    concentration: 'Significantly elevated in young red seedlings',
    mechanism: 'Oxygenation & Liver Detox Support',
    description:
      'Betalains are rare nitrogenous pigments with exceptional antioxidant power. Working synergistically with bio-available plant nitrates, they enhance blood oxygen delivery and support hepatic filtration.',
    benefits: ['Supports healthy arterial elasticity', 'Enhances physical stamina & oxygen delivery', 'Protects against oxidative lipid stress'],
  },
  {
    name: 'Plant-Based ALA Omega-3',
    foundIn: 'Flaxseeds Microgreens',
    emoji: '🌾',
    image: '/images/products/flaxseeds.jpg',
    concentration: '1,600 – 2,000 mg per 100g',
    mechanism: 'Anti-Inflammatory Membrane Architect',
    description:
      'Essential Alpha-Linolenic Acid (ALA) is vital for brain cell membrane fluidity and cardiovascular wellness. Living flaxseed microgreens offer intact, enzymatic omega-3 oils that avoid rancidity.',
    benefits: ['Brain health & cognitive clarity', 'Joint lubrication & inflammation control', 'Cellular membrane elasticity'],
  },
  {
    name: 'Saponins & Glucosinolates',
    foundIn: 'Mustard, Radish White & Fenugreek',
    emoji: '🌱',
    image: '/images/products/fenugreek.jpg',
    concentration: 'Spicy, zesty natural bioactive defense compounds',
    mechanism: 'Metabolic & Digestive Harmonizers',
    description:
      'Glucosinolates give mustard and radishes their invigorating peppery bite, activating liver detox enzymes, while fenugreek saponins aid balanced glucose response and gut microbial diversity.',
    benefits: ['Stimulates healthy digestive secretions', 'Phase-II enzyme activation', 'Supports balanced blood sugar'],
  },
  {
    name: 'Natural Vitamin E & Omega-6 Fats',
    foundIn: 'Sunflower Microgreens',
    emoji: '🌻',
    image: '/images/products/sunflower.jpg',
    concentration: '35.2 mg Vitamin E & 9.2g healthy fats per 100g',
    mechanism: 'Cell Membrane Protection & Bone Vitality',
    description:
      'Sunflower microgreens deliver exceptional natural alpha-tocopherol (Vitamin E) alongside heart-healthy unsaturated lipids, 189mg magnesium, and 484mcg Vitamin K for sustained metabolic energy and radiant skin.',
    benefits: ['Protects cells and supports healthy skin', 'Cardiovascular support with natural omega-6 fats', 'Bone mineral density from Vitamin K, magnesium, and calcium'],
  },
  {
    name: 'Living Chlorophyll & Detox Enzymes',
    foundIn: 'Wheatgrass Microgreens',
    emoji: '🌾',
    image: '/images/products/wheatgrass.jpg',
    concentration: 'Extremely high natural chlorophyll & 2900 IU Vitamin A',
    mechanism: 'Blood Cleansing & Oxygenation Powerhouse',
    description:
      'Wheatgrass is harvested just after the first leaves unfurl to capture living chlorophyll, plant enzymes, 52mg Vitamin C, and 118mg calcium. Its molecular structure assists in cellular purification and deep tissue oxygenation.',
    benefits: ['Natural liver detoxification & blood cleansing', 'Sustained energy and reduced daily fatigue', 'Immune defense through bio-available Vitamins A, C, E & K'],
  },
];

const nutrientMultipliers = [
  { nutrient: 'Vitamin E', multiplier: '35.2 mg / 100g', mature: 'Almonds & Seeds', micro: 'Sunflower Microgreens' },
  { nutrient: 'Chlorophyll', multiplier: 'Ultra High', mature: 'Mature Grass', micro: 'Wheatgrass Microgreens' },
  { nutrient: 'Vitamin C', multiplier: 'up to 6×', mature: 'Mature Spinach', micro: 'Broccoli, Mustard & Wheatgrass' },
  { nutrient: 'Vitamin K', multiplier: 'up to 40×', mature: 'Mature Cabbage', micro: 'Red Amaranth, Sunflower & Brassica' },
  { nutrient: 'Beta-Carotene (Vit A)', multiplier: 'up to 39×', mature: 'Mature Carrots', micro: 'Wheatgrass, Red Amaranth & Beet' },
  { nutrient: 'Magnesium & Iron', multiplier: 'up to 12×', mature: 'Mature Greens', micro: 'Sunflower, Spinach & Fenugreek' },
];


export default function Wellness() {
  const [personType, setPersonType] = useState('adult'); // 'adult' | 'child'
  const [goal, setGoal] = useState('immunity'); // 'immunity' | 'energy' | 'digestion' | 'heart'

  const dosageRecommendations = {
    adult: {
      grams: '20 – 30 grams',
      portion: 'Approx. 1 to 2 handfuls',
      timing: 'With lunch or evening meals to maximize fat-soluble uptake.',
      recommended:
        goal === 'immunity'
          ? 'Mustard, Radish White & Broccoli'
          : goal === 'heart'
          ? 'Radish Purple, Flaxseeds & Beetroot'
          : goal === 'energy'
          ? 'Red Amaranth, Spinach & Beetroot'
          : 'Fenugreek, Radish White & Spinach',
    },
    child: {
      grams: '10 – 15 grams',
      portion: 'Approx. 1 small handful (5+ Years)',
      timing: 'Blended gently into smoothies, tucked into roll-ups or tossed on mild pasta.',
      recommended:
        goal === 'immunity'
          ? 'Broccoli & Mild Spinach Microgreens'
          : goal === 'heart'
          ? 'Flaxseeds & Spinach Microgreens'
          : goal === 'energy'
          ? 'Red Amaranth & Beetroot in Berry Smoothie'
          : 'Mild Spinach & Flaxseeds',
    },
  };

  const currentRec = dosageRecommendations[personType];

  return (
    <div className="wellness-page page-enter">
      {/* ─── HERO ─── */}
      <section className="wellness-hero">
        <div className="container">
          <div className="wellness-hero__content">
            <div className="eyebrow">
              <span className="label">Evidence & Biology</span>
            </div>
            <h1 className="display-lg text-white">
              The Science of Living Nutrition
            </h1>
            <p className="body-lg text-white wellness-hero__desc">
              Why do microgreens pack up to 40 times the nutrient density of their mature parents?
              Discover the biological brilliance of early-stage plant life.
            </p>
          </div>
        </div>
      </section>

      {/* ─── 40X COMPARISON ─── */}
      <section className="section-pad wellness-science">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--sp-12)' }}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>
              <span className="label">USDA Validated</span>
            </div>
            <h2 className="display-md">The 40× Density Phenomenon</h2>
            <div className="divider" />
            <p className="body-lg" style={{ maxWidth: 660, margin: '0 auto' }}>
              When a seed sprouts, all the biological energy required to build a 6-foot mature plant is concentrated
              into the first pair of embryonic leaves (cotyledons). At 7–10 days, nutrient concentration reaches its absolute zenith.
            </p>
          </div>

          <div className="multipliers-grid">
            {nutrientMultipliers.map((m, i) => (
              <div key={i} className="multiplier-card">
                <span className="multiplier-badge">{m.multiplier}</span>
                <h3 className="multiplier-name">{m.nutrient}</h3>
                <div className="multiplier-comparison">
                  <span className="comparison-from">{m.mature}</span>
                  <span className="comparison-arrow">→</span>
                  <span className="comparison-to">{m.micro}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PHYTOCHEMICAL SPOTLIGHT ─── */}
      <section className="section-pad wellness-phyto" style={{ background: 'var(--clr-cream)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--sp-12)' }}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>
              <span className="label">Active Compounds</span>
            </div>
            <h2 className="display-md">Signature Phytonutrient Profiles</h2>
            <div className="divider" />
          </div>

          <div className="grid-2 phyto-grid">
            {phytochemicals.map((p, i) => (
              <div key={i} className="phyto-card">
                <div className="phyto-card__header">
                  {p.image ? (
                    <img src={p.image} alt={p.name} className="phyto-card__img" loading="lazy" />
                  ) : (
                    <span className="phyto-emoji">{p.emoji}</span>
                  )}
                  <div>
                    <h3 className="phyto-name">{p.name}</h3>
                    <span className="phyto-source">{p.foundIn}</span>
                  </div>
                </div>
                <div className="phyto-concentration">
                  <strong>Concentration:</strong> {p.concentration}
                </div>
                <p className="phyto-desc">{p.description}</p>
                <div className="phyto-benefits">
                  {p.benefits.map((b, bi) => (
                    <div key={bi} className="phyto-benefit-item">
                      <Check size={16} className="phyto-check" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DAILY INTAKE PLANNER ─── */}
      <section className="section-pad wellness-calculator">
        <div className="container">
          <div className="planner-card">
            <div className="planner-card__header">
              <div className="eyebrow">
                <span className="label">Intake Protocol</span>
              </div>
              <h2 className="display-sm" style={{ color: 'var(--clr-green-deep)' }}>
                Personalize Your Daily Dose
              </h2>
              <p className="body-base text-muted">
                Calculate the optimal microgreen portion based on your household's health goals.
              </p>
            </div>

            <div className="planner-controls">
              <div className="planner-group">
                <label className="planner-label">Who is this for?</label>
                <div className="toggle-group">
                  <button
                    className={`toggle-btn ${personType === 'adult' ? 'active' : ''}`}
                    onClick={() => setPersonType('adult')}
                  >
                    Adult (18+)
                  </button>
                  <button
                    className={`toggle-btn ${personType === 'child' ? 'active' : ''}`}
                    onClick={() => setPersonType('child')}
                  >
                    Child (4–17)
                  </button>
                </div>
              </div>

              <div className="planner-group">
                <label className="planner-label">Primary Health Focus</label>
                <div className="toggle-group">
                  {[
                    { id: 'immunity', label: 'Immunity & Detox' },
                    { id: 'heart', label: 'Cardio & Omega' },
                    { id: 'energy', label: 'Vitality & Blood' },
                    { id: 'digestion', label: 'Gut & Metabolism' },
                  ].map((g) => (
                    <button
                      key={g.id}
                      className={`toggle-btn ${goal === g.id ? 'active' : ''}`}
                      onClick={() => setGoal(g.id)}
                    >
                      {g.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Result Box */}
            <div className="planner-result">
              <div className="planner-result__metric">
                <span className="result-metric__num">{currentRec.grams}</span>
                <span className="result-metric__label">Recommended Daily Portion</span>
                <span className="result-metric__sub">{currentRec.portion}</span>
              </div>
              <div className="planner-result__details">
                <div className="result-detail-row">
                  <span className="detail-tag">Recommended Greens:</span>
                  <span className="detail-val">{currentRec.recommended}</span>
                </div>
                <div className="result-detail-row">
                  <span className="detail-tag">Ideal Timing:</span>
                  <span className="detail-val">{currentRec.timing}</span>
                </div>
              </div>
            </div>

            <div className="planner-card__footer">
              <Link to="/seeds" className="btn btn-primary btn-md">
                Order Your Custom Protocol
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SCIENTIFIC REFERENCE NOTE ─── */}
      <section className="section-pad wellness-citations" style={{ background: 'var(--clr-white)', borderTop: '1px solid var(--clr-gray-200)' }}>
        <div className="container">
          <div className="citations-box">
            <h4 className="citations-title">
              <BookOpen size={18} /> Grounded in Peer-Reviewed Science
            </h4>
            <p className="citations-text">
              Data referenced aligns with studies from the <em>Journal of Agricultural and Food Chemistry</em> (Xiao et al., Assessment of Vitamin and Carotenoid Concentrations of Emerging Food Products: Edible Microgreens),
              the USDA Agricultural Research Service (ARS), and clinical trials on sulforaphane induction of cytoprotective Phase-II genes via KEAP1/Nrf2.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
