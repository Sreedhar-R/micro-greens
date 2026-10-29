import { useState } from 'react';
import { 
  Phone, Mail, Instagram, MapPin, MessageCircle, 
  Send, ChevronDown, CheckCircle2, Clock, Sparkles 
} from 'lucide-react';
import { contact } from '../data/products';
import './Connect.css';

const faqs = [
  {
    q: 'How are microgreens different from sprouts?',
    a: 'Sprouts are germinated in dark, wet conditions for 2–4 days and consumed whole with root and seed husk (often prone to bacterial risk). Microgreens are grown in clean light for 7–10 days in coconut coir, developing true leaves and photosynthetic chlorophyll. Only the clean stem and leaves are harvested, offering vastly superior flavour, crunch, and bioactive safety.',
  },
  {
    q: 'How long do Manna Microgreens stay fresh?',
    a: 'When stored unwashed in your refrigerator (2–5°C) inside our breathable sealed container, they maintain peak crispness and nutrient integrity for 7 to 10 days. Simply wash gently under cold water immediately before serving.',
  },
  {
    q: 'Are any chemicals or fertilizers used during growing?',
    a: 'None whatsoever. We use 100% pesticide-free, non-GMO heirloom seeds, reverse-osmosis purified water, and sterile organic coconut coir mats inside our HEPA-filtered clean environment.',
  },
  {
    q: 'Can children consume microgreens safely?',
    a: 'Absolutely! Microgreens provide concentrated natural vitamins without artificial pills. For kids aged 4–17, we recommend 10–15g daily (about one small handful). Mild broccoli or flaxseeds blended into berry smoothies or folded into wraps are household favorites.',
  },
  {
    q: 'Do you supply live trays to restaurants and cafes?',
    a: 'Yes! We deliver living microgreen trays on coconut coir pads directly to chef kitchens so culinary teams can harvest living sprigs tableside or on the pass.',
  },
];

export default function Connect() {
  const [openFaq, setOpenFaq] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    inquiryType: 'Household Subscription',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappInquiryUrl = `https://wa.me/917975190188?text=${encodeURIComponent(
    `Hello Manna Team! My name is ${formData.name || 'Friend'}. I am inquiring about *${formData.inquiryType}*. Message: ${formData.message || 'I would like more information on your fresh harvests.'}`
  )}`;

  return (
    <div className="connect-page page-enter">
      {/* ─── HERO ─── */}
      <section className="connect-hero">
        <div className="container">
          <div className="connect-hero__content">
            <div className="eyebrow">
              <span className="label">Get In Touch</span>
            </div>
            <h1 className="display-lg text-white">
              Connect With The Growers
            </h1>
            <p className="body-lg text-white connect-hero__desc">
              Have questions about microgreen nutrition, delivery routes, chef partnerships,
              or household subscriptions? We are always here to talk greens.
            </p>
          </div>
        </div>
      </section>

      {/* ─── CONTACT CHANNELS & FORM ─── */}
      <section className="section-pad connect-main">
        <div className="container">
          <div className="grid-2 connect-grid">
            {/* Direct Channels */}
            <div className="connect-info">
              <div className="eyebrow">
                <span className="label">Direct Channels</span>
              </div>
              <h2 className="display-sm" style={{ marginBottom: 'var(--sp-6)' }}>
                We Welcome Your Conversation
              </h2>
              <p className="body-lg" style={{ marginBottom: 'var(--sp-8)' }}>
                Reach out directly via phone or WhatsApp for prompt harvest scheduling and same-day delivery coordination.
              </p>

              <div className="contact-cards">
                <a href="tel:+917975190188" className="contact-card">
                  <div className="contact-card__icon-wrap">
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="contact-card__label">Primary Grower Line</span>
                    <span className="contact-card__val">+91 79751 90188</span>
                  </div>
                </a>

                <a href="tel:+918105011430" className="contact-card">
                  <div className="contact-card__icon-wrap">
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="contact-card__label">Secondary Support Line</span>
                    <span className="contact-card__val">+91 81050 11430</span>
                  </div>
                </a>

                <a
                  href="https://wa.me/917975190188"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card contact-card--whatsapp"
                >
                  <div className="contact-card__icon-wrap">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <span className="contact-card__label">WhatsApp Direct Chat</span>
                    <span className="contact-card__val">Instant Chat & Orders</span>
                  </div>
                </a>

                <a href="mailto:mannamicrogreens2025@gmail.com" className="contact-card">
                  <div className="contact-card__icon-wrap">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="contact-card__label">Official Email</span>
                    <span className="contact-card__val">mannamicrogreens2025@gmail.com</span>
                  </div>
                </a>

                <a
                  href="https://instagram.com/growwithmanna"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card"
                >
                  <div className="contact-card__icon-wrap">
                    <Instagram size={20} />
                  </div>
                  <div>
                    <span className="contact-card__label">Follow Our Journey</span>
                    <span className="contact-card__val">@growwithmanna</span>
                  </div>
                </a>

                <div className="contact-card">
                  <div className="contact-card__icon-wrap">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className="contact-card__label">Urban Farm & Sanctuary</span>
                    <span className="contact-card__val">Jayanagar 9th Block, Bengaluru</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Message Form */}
            <div className="connect-form-panel">
              <h3 className="display-sm" style={{ marginBottom: 'var(--sp-2)', color: 'var(--clr-green-deep)' }}>
                Send A Message
              </h3>
              <p className="body-base text-muted" style={{ marginBottom: 'var(--sp-6)' }}>
                Fill in your query and our team will get in touch within a few hours.
              </p>

              {submitted ? (
                <div className="form-success-box">
                  <CheckCircle2 size={42} className="success-icon" />
                  <h4>Message Sent Successfully!</h4>
                  <p>Thank you for connecting. A Manna grower will get back to you shortly.</p>
                  <button className="btn btn-primary btn-sm" onClick={() => setSubmitted(false)}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="message-form">
                  <div className="form-group">
                    <label className="form-label">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Nair"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-grid-2">
                    <div className="form-group">
                      <label className="form-label">Phone Number</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91..."
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email Address</label>
                      <input
                        type="email"
                        placeholder="name@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Inquiry Nature</label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="form-input form-select"
                    >
                      <option value="Household Subscription">Household Subscription</option>
                      <option value="Chef & Restaurant Supply">Chef & Restaurant Supply (Live Trays)</option>
                      <option value="Corporate Wellness">Corporate Wellness & Workshops</option>
                      <option value="Sanctuary Garden Tour">Sanctuary Garden Tour</option>
                      <option value="General Question">General Question</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Message / Details</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tell us what you're looking for or your address for delivery coverage..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-submit-row">
                    <button type="submit" className="btn btn-primary btn-lg">
                      <Send size={18} />
                      Send Message
                    </button>
                    <a
                      href={whatsappInquiryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline btn-lg"
                    >
                      <MessageCircle size={18} />
                      Send on WhatsApp
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ACCORDION ─── */}
      <section className="section-pad connect-faq" style={{ background: 'var(--clr-cream)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--sp-10)' }}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>
              <span className="label">Frequently Asked</span>
            </div>
            <h2 className="display-md">Common Questions</h2>
            <div className="divider" />
          </div>

          <div className="faq-list">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} className={`faq-item ${isOpen ? 'open' : ''}`}>
                  <button
                    className="faq-question-btn"
                    onClick={() => setOpenFaq(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown size={20} className="faq-chevron" />
                  </button>
                  {isOpen && (
                    <div className="faq-answer">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
