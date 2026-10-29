import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowLeft, ArrowRight, ShieldCheck, Heart, Leaf, Clock, 
  Thermometer, CheckCircle2, AlertCircle, ShoppingBag, MessageCircle, Share2,
  Eye, X, ExternalLink, Image as ImageIcon
} from 'lucide-react';
import { products, contact } from '../data/products';
import ProductCard from '../components/ProductCard';
import './HarvestDetail.css';

export default function HarvestDetail() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  const [portionGrams, setPortionGrams] = useState(25);
  const [copied, setCopied] = useState(false);
  const [showFlyerModal, setShowFlyerModal] = useState(false);

  if (!product) {
    return <Navigate to="/harvest" replace />;
  }

  const otherProducts = products.filter((p) => p.slug !== slug);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${product.name} Microgreens - Manna`,
        text: product.description,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Manna Microgreens!\nI would like to order freshly harvested *${product.name} Microgreens* (${product.glance.botanical}).\n` +
    `Please let me know the harvest schedule, tray options, and delivery slot for my area in Bengaluru.`
  );
  const whatsappUrl = `https://wa.me/917975190188?text=${whatsappMessage}`;

  return (
    <div className="harvest-detail page-enter">
      {/* ─── BREADCRUMB & TOP NAV ─── */}
      <div className="detail-breadcrumb">
        <div className="container">
          <div className="detail-breadcrumb__inner">
            <Link to="/harvest" className="detail-breadcrumb__back">
              <ArrowLeft size={16} />
              <span>Back to Harvest</span>
            </Link>
            <div className="detail-breadcrumb__trail">
              <Link to="/harvest">Our Harvest</Link>
              <span>/</span>
              <span className="current">{product.name}</span>
            </div>
            <button className="detail-share-btn" onClick={handleShare} aria-label="Share this microgreen">
              <Share2 size={15} />
              <span>{copied ? 'Copied Link!' : 'Share'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* ─── HERO DETAIL ─── */}
      <section className="detail-hero" style={{ background: `linear-gradient(180deg, ${product.bgColor} 0%, var(--clr-white) 100%)` }}>
        <div className="container">
          <div className="detail-hero__grid">
            {/* Visual / Real Image side */}
            <div className="detail-hero__visual">
              <div className="detail-hero__art" style={{ borderColor: product.color }}>
                {product.image ? (
                  <img 
                    src={product.image} 
                    alt={`${product.name} living microgreens harvest`} 
                    className="detail-hero__real-img"
                  />
                ) : (
                  <span className="detail-hero__emoji">{product.emoji}</span>
                )}
                <div className="detail-hero__watermark">{product.glance.botanical}</div>
              </div>

              {product.flyerImage && (
                <button 
                  className="btn btn-outline btn-md w-full detail-view-flyer-btn"
                  onClick={() => setShowFlyerModal(true)}
                  style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
                >
                  <Eye size={16} />
                  <span>View Official Farm Poster</span>
                </button>
              )}

              <div className="detail-hero__badges">
                {product.badges.map((b, i) => (
                  <span key={i} className="badge badge-green">
                    <ShieldCheck size={12} />
                    {b}
                  </span>
                ))}
              </div>
            </div>

            {/* Content side */}
            <div className="detail-hero__info">
              <div className="eyebrow" style={{ color: product.color }}>
                <span className="label">{product.glance.botanical} · {product.glance.family}</span>
              </div>
              <h1 className="display-lg detail-hero__title">
                {product.name} Microgreens
              </h1>
              <p className="detail-hero__tagline">{product.tagline}</p>
              <p className="body-lg detail-hero__desc">{product.description}</p>

              {/* Flavour highlight box */}
              <div className="detail-flavour-box">
                <span className="detail-flavour-box__label">Flavour Profile:</span>
                <p className="detail-flavour-box__text">"{product.flavour}"</p>
              </div>

              {/* Quick specs */}
              <div className="detail-specs-grid">
                <div className="detail-spec">
                  <span className="detail-spec__title">Harvest Age</span>
                  <span className="detail-spec__val">{product.glance.harvestTime}</span>
                </div>
                <div className="detail-spec">
                  <span className="detail-spec__title">Shelf Life</span>
                  <span className="detail-spec__val">{product.glance.shelfLife}</span>
                </div>
                <div className="detail-spec">
                  <span className="detail-spec__title">Taste</span>
                  <span className="detail-spec__val">{product.glance.taste}</span>
                </div>
                <div className="detail-spec">
                  <span className="detail-spec__title">Texture</span>
                  <span className="detail-spec__val">{product.glance.texture}</span>
                </div>
              </div>

              {/* Order actions */}
              <div className="detail-hero__cta">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-lg"
                >
                  <MessageCircle size={18} />
                  Order on WhatsApp
                </a>
                <Link to="/seeds" className="btn btn-outline btn-lg">
                  <ShoppingBag size={18} />
                  Subscription Plans
                </Link>
              </div>

              <div className="detail-guarantee-note">
                <ShieldCheck size={16} className="text-forest" />
                <span>Grown fresh indoors with care · Jayanagar 9th Block, Bengaluru</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FULL OFFICIAL INFOGRAPHIC POSTER MODAL ─── */}
      {showFlyerModal && product.flyerImage && (
        <div className="modal-backdrop" onClick={() => setShowFlyerModal(false)}>
          <div className="flyer-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="flyer-modal-header">
              <div>
                <h3 className="heading-md" style={{ color: 'var(--clr-forest-dark)' }}>
                  {product.name} Microgreens — Official Farm Infographic
                </h3>
                <p className="body-xs text-muted">Original verified flyer from Manna Microgreens farm</p>
              </div>
              <button 
                className="flyer-modal-close-btn" 
                onClick={() => setShowFlyerModal(false)}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>
            <div className="flyer-modal-body">
              <img 
                src={product.flyerImage} 
                alt={`${product.name} Official Infographic`} 
                className="flyer-modal-img"
              />
            </div>
            <div className="flyer-modal-footer">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm"
              >
                <MessageCircle size={14} />
                Order {product.name} on WhatsApp
              </a>
              <button className="btn btn-outline btn-sm" onClick={() => setShowFlyerModal(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ─── NUTRIENT PROFILE TABLE ─── */}
      <section className="section-pad detail-nutrients">
        <div className="container">
          <div className="detail-section-header">
            <div className="eyebrow">
              <span className="label">Lab Verified Bio-Active Nutrition</span>
            </div>
            <h2 className="display-sm">Nutrient Profile (Per 100g)</h2>
            <div className="divider" />
            <p className="body-base text-muted">
              Microgreens are harvested at the cotyledon stage, containing significantly higher concentrations of active vitamins and minerals than mature plants.
            </p>
          </div>

          <div className="nutrients-table-wrap">
            <table className="nutrients-table">
              <thead>
                <tr>
                  <th>Nutrient</th>
                  <th>Amount (Per 100g)</th>
                  <th>Key Health Benefit</th>
                </tr>
              </thead>
              <tbody>
                {product.nutrients.map((n, i) => (
                  <tr key={i}>
                    <td className="nutrient-name">
                      <strong>{n.name}</strong>
                    </td>
                    <td className="nutrient-amount">
                      <span className="nutrient-pill">{n.amount}</span>
                    </td>
                    <td className="nutrient-benefit">{n.benefit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── DOSAGE & STORAGE RECOMMENDATIONS ─── */}
      <section className="section-pad detail-guidelines" style={{ background: 'var(--clr-cream)' }}>
        <div className="container">
          <div className="grid-2 guidelines-grid">
            {/* Recommended Dosage */}
            <div className="guideline-card">
              <div className="guideline-card__top">
                <Heart size={24} className="guideline-icon text-forest" />
                <h3 className="heading-md">3. Recommended Dosage</h3>
              </div>
              <div className="guideline-item">
                <strong>Adults:</strong>
                <p>{product.dosage.adults}</p>
              </div>
              <div className="guideline-item">
                <strong>Children (5+ Years):</strong>
                <p>{product.dosage.children}</p>
              </div>
              <div className="guideline-item">
                <strong>Best Time to Consume:</strong>
                <p>{product.dosage.bestTime}</p>
              </div>
            </div>

            {/* Storage Recommendation */}
            <div className="guideline-card">
              <div className="guideline-card__top">
                <Thermometer size={24} className="guideline-icon text-forest" />
                <h3 className="heading-md">4. Storage Recommendation</h3>
              </div>
              <ul className="guideline-storage-list">
                {product.storage.map((rule, i) => (
                  <li key={i}>
                    <CheckCircle2 size={16} className="text-forest" />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── HEALTH BENEFITS ─── */}
      <section className="section-pad detail-benefits">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--sp-10)' }}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>
              <span className="label">Living Health</span>
            </div>
            <h2 className="display-sm">5. Health Benefits</h2>
            <div className="divider" />
          </div>

          <div className="grid-3 benefits-grid">
            {product.healthBenefits.map((b, i) => (
              <div key={i} className="benefit-card">
                <div className="benefit-card__num">0{i + 1}</div>
                <h3 className="heading-sm benefit-card__title">{b.title}</h3>
                <p className="body-sm text-muted">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SIMPLE FOOD RECOMMENDATIONS ─── */}
      <section className="section-pad detail-food-uses" style={{ background: 'var(--clr-green-bg)' }}>
        <div className="container">
          <div className="food-uses-card">
            <h3 className="heading-md" style={{ marginBottom: 'var(--sp-2)' }}>
              6. Simple Food Recommendations
            </h3>
            <p className="body-base text-muted" style={{ marginBottom: 'var(--sp-6)' }}>
              Versatile culinary pairings to maximize nutrient absorption and taste.
            </p>
            <div className="food-uses-chips">
              {product.foodUses.map((use, i) => (
                <span key={i} className="food-use-chip">
                  🍴 {use}
                </span>
              ))}
            </div>
            <div style={{ marginTop: 'var(--sp-6)' }}>
              <Link to="/nourish" className="btn btn-outline">
                Explore Delicious Recipes
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── EXPLORE OTHER GREENS ─── */}
      <section className="section-pad detail-related">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--sp-10)' }}>
            <h3 className="display-sm">Explore More Varieties</h3>
            <p className="body-base text-muted">Rotate your greens weekly for diverse phytonutrient intake.</p>
          </div>
          <div className="grid-3">
            {otherProducts.slice(0, 6).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
