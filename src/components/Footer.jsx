import { Link } from 'react-router-dom';
import { Phone, Mail, Instagram, MapPin, Heart } from 'lucide-react';
import './Footer.css';

const quickLinks = [
  { path: '/harvest', label: 'Our Harvest' },
  { path: '/garden', label: 'Our Garden' },
  { path: '/nourish', label: 'Nourish' },
  { path: '/wellness', label: 'Wellness' },
  { path: '/roots', label: 'Our Roots' },
  { path: '/connect', label: 'Connect' },
  { path: '/seeds', label: 'Order Fresh' },
];

import { products } from '../data/products';

const greens = products.map((p) => ({
  path: `/harvest/${p.slug}`,
  label: `${p.name} Microgreens`,
}));

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container">
          <div className="footer__grid">
            {/* Brand */}
            <div className="footer__brand">
              <div className="footer__logo">
                <img
                  src={`${import.meta.env.BASE_URL}images/manna-logo.jpg`}
                  alt="Manna Microgreens Logo"
                  className="footer__logo-img"
                />
                <div>
                  <div className="footer__logo-name">Manna</div>
                  <div className="footer__logo-sub">MICROGREENS</div>
                </div>
              </div>
              <p className="footer__tagline">
                <em>Fresh. Nutritious. Grown with Care.</em>
              </p>
              <p className="footer__desc">
                Small greens with big nutritional power. Grown locally indoors with no pesticides,
                harvested fresh and delivered straight to your door.
              </p>
              <div className="footer__badges">
                <span className="badge badge-green">🌱 Pesticide Free</span>
                <span className="badge badge-green">♻️ Sustainably Grown</span>
                <span className="badge badge-green">🏡 Locally Grown</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer__col">
              <h3 className="footer__heading">Explore</h3>
              <ul className="footer__links">
                {quickLinks.map(({ path, label }) => (
                  <li key={path}>
                    <Link to={path} className="footer__link">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Greens */}
            <div className="footer__col">
              <h3 className="footer__heading">Our Greens</h3>
              <ul className="footer__links">
                {greens.map(({ path, label }) => (
                  <li key={path}>
                    <Link to={path} className="footer__link">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="footer__col">
              <h3 className="footer__heading">Get in Touch</h3>
              <ul className="footer__contacts">
                <li>
                  <a href="tel:+917975190188" className="footer__contact">
                    <Phone size={15} />
                    79751 90188
                  </a>
                </li>
                <li>
                  <a href="tel:+918105011430" className="footer__contact">
                    <Phone size={15} />
                    81050 11430
                  </a>
                </li>
                <li>
                  <a href="mailto:mannamicrogreens2025@gmail.com" className="footer__contact">
                    <Mail size={15} />
                    mannamicrogreens2025@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/growwithmanna"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__contact"
                  >
                    <Instagram size={15} />
                    @growwithmanna
                  </a>
                </li>
                <li>
                  <span className="footer__contact" style={{ opacity: 0.9 }}>
                    <MapPin size={15} />
                    Jayanagar 9th Block, Bengaluru
                  </span>
                </li>
              </ul>

              {/* Newsletter */}
              <div className="footer__newsletter">
                <p className="footer__newsletter-label">Get growing tips & harvest updates</p>
                <form
                  className="footer__newsletter-form"
                  onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing! 🌿'); }}
                >
                  <input
                    type="email"
                    placeholder="Your email address"
                    aria-label="Email for newsletter"
                    required
                  />
                  <button type="submit" className="btn btn-primary btn-sm">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p className="footer__copy">
            © {new Date().getFullYear()} Manna Microgreens. All rights reserved.
            &nbsp;·&nbsp; Grown locally, delivered fresh.
          </p>
          <p className="footer__made">
            Made with <Heart size={13} fill="currentColor" /> for your health
          </p>
        </div>
      </div>
    </footer>
  );
}
