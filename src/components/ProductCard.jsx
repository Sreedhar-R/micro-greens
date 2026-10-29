import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Star } from 'lucide-react';
import { flyerCoreSlugs } from '../data/products';
import './ProductCard.css';

export default function ProductCard({ product, delay = 0 }) {
  const { slug, name, tagline, description, emoji, image, color, bgColor, badges } = product;
  const isSignature = flyerCoreSlugs.includes(slug);

  return (
    <Link
      to={`/harvest/${slug}`}
      className="product-card"
      style={{ animationDelay: `${delay}ms`, '--card-color': color, '--card-bg': bgColor }}
    >
      <div className="product-card__header">
        {image ? (
          <div className="product-card__img-wrap">
            <img 
              src={image} 
              alt={`${name} Microgreens`} 
              className="product-card__img" 
              loading="lazy" 
            />
          </div>
        ) : (
          <div className="product-card__emoji-wrap">
            <span className="product-card__emoji">{emoji}</span>
          </div>
        )}
        <div className="product-card__badges-corner">
          {isSignature && (
            <span className="product-card__signature-badge">
              <Star size={10} fill="currentColor" />
              Flyer Core
            </span>
          )}
          <span className="product-card__badge">
            <Leaf size={10} />
            Fresh
          </span>
        </div>
      </div>
      <div className="product-card__body">
        <h3 className="product-card__name">{name}</h3>
        <p className="product-card__tagline">{tagline}</p>
        <p className="product-card__desc">{description}</p>
        <div className="product-card__badges">
          {badges.slice(0, 3).map(b => (
            <span key={b} className="product-card__chip">{b}</span>
          ))}
        </div>
      </div>
      <div className="product-card__footer">
        <span className="product-card__cta">
          View Profile & Nutrition
          <ArrowRight size={14} />
        </span>
      </div>
    </Link>
  );
}
