import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Sparkles, SlidersHorizontal, ArrowRight, ShieldCheck, Heart, Leaf } from 'lucide-react';
import { products, flyerCoreSlugs } from '../data/products';
import ProductCard from '../components/ProductCard';
import './Harvest.css';

const allCategories = [
  'All',
  '★ Farm Flyer 12',
  'Protein & Energy',
  'Chlorophyll & Detox',
  'Peppery & Zesty',
  'Antioxidant & Ruby',
  'Heart & Omega',
  'Aromatic & Gourmet',
];

export default function Harvest() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'compare'

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesSearch =
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.flavour.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.glance.botanical.toLowerCase().includes(searchQuery.toLowerCase());

      if (!matchesSearch) return false;

      if (activeCategory === 'All') return true;
      if (activeCategory === '★ Farm Flyer 12') {
        return flyerCoreSlugs.includes(p.slug);
      }
      if (activeCategory === 'Protein & Energy') {
        return (
          p.slug === 'sunflower' ||
          p.slug === 'wheatgrass' ||
          p.slug === 'pea-shoots' ||
          p.slug === 'spinach'
        );
      }
      if (activeCategory === 'Chlorophyll & Detox') {
        return (
          p.slug === 'wheatgrass' ||
          p.slug === 'broccoli' ||
          p.slug === 'radish-white' ||
          p.slug === 'spinach' ||
          p.slug === 'beetroot'
        );
      }
      if (activeCategory === 'Peppery & Zesty') {
        return (
          p.slug === 'radish-white' ||
          p.slug === 'mustard' ||
          p.slug === 'radish-purple' ||
          p.slug === 'pink-radish' ||
          p.slug === 'broccoli'
        );
      }
      if (activeCategory === 'Antioxidant & Ruby') {
        return (
          p.slug === 'beetroot' ||
          p.slug === 'radish-purple' ||
          p.slug === 'red-amaranth' ||
          p.slug === 'pink-radish' ||
          p.slug === 'sunflower'
        );
      }
      if (activeCategory === 'Heart & Omega') {
        return (
          p.slug === 'flaxseeds' ||
          p.slug === 'sunflower' ||
          p.slug === 'beetroot' ||
          p.slug === 'spinach' ||
          p.slug === 'mustard'
        );
      }
      if (activeCategory === 'Aromatic & Gourmet') {
        return (
          p.slug === 'basil' ||
          p.slug === 'fenugreek' ||
          p.slug === 'pea-shoots'
        );
      }
      return true;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="harvest-page page-enter">
      {/* ─── HERO HEADER ─── */}
      <section className="harvest-hero">
        <div className="container">
          <div className="harvest-hero__content">
            <div className="eyebrow">
              <span className="label">Living Produce · 14 Living Varieties · Jayanagar, Bengaluru</span>
            </div>
            <h1 className="display-lg">
              The Harvest Collection
            </h1>
            <p className="body-lg harvest-hero__desc">
              Fourteen exceptionally nutrient-dense microgreen varieties, harvested at the precise 7–10 day peak
              in a sterile cleanroom environment when living bioactive enzymes, chlorophyll, and vitamins are at maximum density.
            </p>
            <div className="harvest-hero__meta">
              <span className="harvest-hero__pill"><ShieldCheck size={16} /> 100% Pesticide Free</span>
              <span className="harvest-hero__pill"><Leaf size={16} /> Non-GMO Heirloom Seeds</span>
              <span className="harvest-hero__pill"><Heart size={16} /> Harvested Fresh to Order</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONTROLS & FILTERS ─── */}
      <section className="harvest-controls">
        <div className="container">
          <div className="harvest-controls__inner">
            {/* Search */}
            <div className="harvest-search">
              <Search size={18} className="harvest-search__icon" />
              <input
                type="text"
                placeholder="Search greens, nutrients, or botanical..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="harvest-search__input"
              />
              {searchQuery && (
                <button
                  className="harvest-search__clear"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                >
                  ×
                </button>
              )}
            </div>

            {/* Category pills */}
            <div className="harvest-categories" role="tablist">
              {allCategories.map((cat) => (
                <button
                  key={cat}
                  className={`harvest-category-btn ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                  role="tab"
                  aria-selected={activeCategory === cat}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* View switcher */}
            <div className="harvest-view-toggle">
              <button
                className={`harvest-toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
                onClick={() => setViewMode('grid')}
                title="Grid View"
              >
                Cards ({filteredProducts.length})
              </button>
              <button
                className={`harvest-toggle-btn ${viewMode === 'compare' ? 'active' : ''}`}
                onClick={() => setViewMode('compare')}
                title="Compare Nutrients"
              >
                Compare Matrix
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MAIN CONTENT ─── */}
      <section className="harvest-body section-pad">
        <div className="container">
          {filteredProducts.length === 0 ? (
            <div className="harvest-empty">
              <div className="harvest-empty__icon">🌱</div>
              <h3>No greens found matching your criteria</h3>
              <p>Try searching for different flavours or reset your category filters.</p>
              <button
                className="btn btn-primary btn-sm"
                onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
              >
                Reset Filters
              </button>
            </div>
          ) : viewMode === 'grid' ? (
            <div className="grid-3 harvest-grid">
              {filteredProducts.map((p, idx) => (
                <ProductCard key={p.id} product={p} delay={idx * 60} />
              ))}
            </div>
          ) : (
            /* COMPARISON TABLE VIEW */
            <div className="harvest-compare">
              <div className="table-responsive">
                <table className="compare-table">
                  <thead>
                    <tr>
                      <th className="compare-table__feature">Microgreen</th>
                      {products.map((p) => (
                        <th key={p.id} className="compare-table__col-header">
                          <Link to={`/harvest/${p.slug}`} className="compare-table__link">
                            {p.image ? (
                              <img src={p.image} alt={p.name} className="compare-table__img" loading="lazy" />
                            ) : (
                              <span className="compare-table__emoji">{p.emoji}</span>
                            )}
                            <span className="compare-table__name">{p.name}</span>
                            <span className="compare-table__tagline">{p.glance.botanical}</span>
                          </Link>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="compare-table__feature">Signature Power</td>
                      {products.map((p) => (
                        <td key={p.id} style={{ fontWeight: 600, color: p.color }}>
                          {p.tagline.split('·')[0].trim()}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="compare-table__feature">Taste & Aroma</td>
                      {products.map((p) => (
                        <td key={p.id} style={{ fontSize: '0.82rem' }}>
                          {p.glance.taste}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="compare-table__feature">Daily Adult Dose</td>
                      {products.map((p) => (
                        <td key={p.id}>
                          {p.dosage.adults.split('(')[0].trim()}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="compare-table__feature">Harvest Age</td>
                      {products.map((p) => (
                        <td key={p.id}>{p.glance.harvestTime}</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="compare-table__feature">Vitamin C</td>
                      {products.map((p) => {
                        const vitC = p.nutrients.find((n) => n.name.toLowerCase().includes('vitamin c'));
                        return <td key={p.id}>{vitC ? vitC.amount : 'Rich'}</td>;
                      })}
                    </tr>
                    <tr>
                      <td className="compare-table__feature">Bone & Iron Micronutrients</td>
                      {products.map((p) => {
                        const fe = p.nutrients.find((n) => n.name.toLowerCase() === 'iron');
                        const ca = p.nutrients.find((n) => n.name.toLowerCase() === 'calcium');
                        return (
                          <td key={p.id} style={{ fontSize: '0.82rem' }}>
                            {fe ? `Fe: ${fe.amount}` : ''} {ca ? `· Ca: ${ca.amount}` : ''}
                          </td>
                        );
                      })}
                    </tr>
                    <tr>
                      <td className="compare-table__feature">Action</td>
                      {products.map((p) => (
                        <td key={p.id}>
                          <Link to={`/harvest/${p.slug}`} className="btn btn-outline btn-sm">
                            View Profile
                          </Link>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ─── FRESHNESS BANNER ─── */}
      <section className="harvest-cta">
        <div className="container">
          <div className="harvest-cta__card">
            <div className="harvest-cta__content">
              <span className="badge badge-gold">Farm-to-Door Transparency</span>
              <h2 className="display-sm text-white">Never Warehoused. Always Fresh.</h2>
              <p className="text-white harvest-cta__desc">
                Unlike supermarket leafy greens that sit on refrigerated shelves for weeks losing nutrients,
                Manna Microgreens are harvested directly for your order and dispatched the same morning.
              </p>
              <div className="harvest-cta__actions">
                <Link to="/seeds" className="btn btn-white btn-lg">
                  Order Your Harvest
                  <ArrowRight size={18} />
                </Link>
                <Link to="/garden" className="btn btn-ghost btn-lg">
                  Tour Our Garden
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
