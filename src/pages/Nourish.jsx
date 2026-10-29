import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Utensils, Clock, Sparkles, ChefHat, Heart, ArrowRight, Flame, Check } from 'lucide-react';
import { recipes, products } from '../data/products';
import './Nourish.css';

const chefRules = [
  {
    num: '01',
    title: 'The Golden Raw Rule',
    desc: 'Never boil or sauté microgreens over high heat. High temperature destroys fragile Vitamin C and heat-sensitive sulforaphane enzymes. Add them fresh at the final plating.',
  },
  {
    num: '02',
    title: 'Wash Only When Plating',
    desc: 'Keep your greens dry in the refrigerator. Moisture accelerates decay. When you are ready to eat, simply rinse gently under cold water and pat dry.',
  },
  {
    num: '03',
    title: 'Pair With Healthy Fats',
    desc: 'Vitamins A and K are fat-soluble. Pair microgreens with extra virgin olive oil, avocado, tahini or nuts to amplify nutritional bioavailability by up to 300%.',
  },
  {
    num: '04',
    title: 'Texture & Flavour Contrast',
    desc: 'Use peppery broccoli with creamy eggs, sweet earthy beetroot with tangy feta, and aromatic fenugreek atop warm spiced dal.',
  },
];

const recipeDetails = {
  1: {
    ingredients: [
      '1 cup fresh Broccoli Microgreens',
      '1 cup organic cherry tomatoes, halved',
      '1 Persian cucumber, sliced',
      '2 tbsp cold-pressed extra virgin olive oil',
      '1 tbsp fresh lemon juice',
      '1 tbsp toasted white sesame seeds',
      'Flaky sea salt & freshly cracked black pepper',
    ],
    steps: [
      'Whisk lemon juice, olive oil, salt and pepper in a small ceramic bowl.',
      'In a wide serving bowl, arrange tomatoes and crisp cucumbers.',
      'Gently top with fresh Broccoli Microgreens without crushing the stems.',
      'Drizzle the lemon dressing immediately before serving and dust with toasted sesame.',
    ],
  },
  2: {
    ingredients: [
      '1 handful fresh Beetroot Microgreens',
      '1 ripe frozen banana',
      'Juice of 1 fresh sweet orange',
      '½ inch fresh ginger, peeled',
      '200ml tender coconut water',
      '1 tsp chia seeds (optional)',
    ],
    steps: [
      'Add banana, orange juice, fresh ginger and coconut water to a high-speed blender.',
      'Toss in the vibrant Beetroot Microgreens.',
      'Blend on high for 45 seconds until silky smooth and brilliantly magenta.',
      'Pour into a chilled glass and enjoy immediately for maximum antioxidant activation.',
    ],
  },
  3: {
    ingredients: [
      '1 large whole wheat tortilla or sourdough flatbread',
      '1 cup Fenugreek Microgreens',
      '3 tbsp creamy garlic hummus',
      '½ roasted red pepper, sliced',
      '30g crumbled goat cheese or feta',
      'A pinch of zaatar or smoked paprika',
    ],
    steps: [
      'Warm the flatbread lightly on a dry pan.',
      'Spread the garlic hummus evenly across the center.',
      'Layer with roasted pepper slices and crumbled cheese.',
      'Mound fresh Fenugreek Microgreens generously over the top.',
      'Roll tightly, slice diagonally and serve fresh.',
    ],
  },
  4: {
    ingredients: [
      '1 cup warm cooked quinoa or brown basmati',
      '1 generous handful Flaxseeds Microgreens',
      '½ ripe avocado, sliced',
      '½ cup steamed shelled edamame',
      '1 sheet toasted nori seaweed, shredded',
      '1 tbsp toasted sesame-ginger tamari dressing',
    ],
    steps: [
      'Place warm grain base into a wide earthenware bowl.',
      'Arrange sliced avocado, steamed edamame, and shredded nori in quadrants.',
      'Crown the bowl with fresh Flaxseeds Microgreens.',
      'Drizzle with toasted sesame-ginger dressing right before taking your first bite.',
    ],
  },
  5: {
    ingredients: [
      '400ml homemade vegetable or bone broth',
      '1 cup mixed Broccoli & Fenugreek Microgreens',
      '1 clove garlic, finely grated',
      '1 cup sautéed wild mushrooms',
      '1 tsp cold-pressed sesame oil',
    ],
    steps: [
      'Heat the broth with grated garlic until piping hot, then remove completely from flame.',
      'Ladle the hot broth over the wild mushrooms in soup bowls.',
      'Allow to sit for 60 seconds so broth temp drops slightly below boiling.',
      'Stir in the mixed microgreens and finish with a drop of sesame oil.',
    ],
  },
  6: {
    ingredients: [
      '2 thick slices country sourdough bread, toasted',
      '1 ripe Haas avocado, mashed with lime juice',
      '1 cup vibrant Radish Purple Microgreens',
      'Flaky Maldon sea salt',
      'Red pepper flakes & olive oil drizzle',
    ],
    steps: [
      'Toast sourdough until golden and crusty.',
      'Spread mashed lime avocado generously to the edges.',
      'Pile with vivid, peppery Radish Purple Microgreens for a striking contrast.',
      'Finish with flaky sea salt, red chili flakes, and extra virgin olive oil.',
    ],
  },
  7: {
    ingredients: [
      '3 large free-range farm eggs',
      '1 cup fresh Radish White Microgreens',
      '1 tbsp grass-fed butter or cold-pressed olive oil',
      '20g soft goat cheese or fresh ricotta',
      'Sea salt & cracked black pepper',
    ],
    steps: [
      'Whisk eggs gently with a pinch of sea salt and freshly cracked pepper.',
      'Melt butter in a skillet over low-medium heat and pour in the eggs.',
      'Cook gently until just set on the bottom while still soft and creamy on top.',
      'Turn off heat. Fold in soft goat cheese and a generous handful of Radish White microgreens.',
      'Fold the omelet in half and serve immediately while greens remain crisp.',
    ],
  },
  8: {
    ingredients: [
      '1 cup spiced roasted chickpeas',
      '1 cup cooked warm brown rice or pearl barley',
      '1 roasted sweet potato, cubed',
      '1 generous cup fresh Mustard Microgreens',
      '2 tbsp creamy tahini-lemon garlic dressing',
    ],
    steps: [
      'Assemble warm grain, roasted sweet potato cubes, and chickpeas in a ceramic bowl.',
      'Crown with fresh Mustard Microgreens to provide a bold, spicy, wasabi-like crunch.',
      'Drizzle with the rich tahini garlic dressing right before eating.',
    ],
  },
  9: {
    ingredients: [
      '1 cup fresh Red Amaranth Microgreens',
      '1 cup freshly pressed ruby pomegranate juice',
      '1 cup frozen organic strawberries',
      'Juice of ½ fresh lime',
      '1 tsp raw wildflower honey (optional)',
    ],
    steps: [
      'Combine pomegranate juice, lime, and frozen strawberries in a blender.',
      'Add the vibrant, nutrient-dense Red Amaranth Microgreens.',
      'Blend on high for 40 seconds into a brilliant crimson antioxidant elixir.',
      'Pour into chilled glassware and enjoy raw cellular revitalization.',
    ],
  },
  10: {
    ingredients: [
      '1 cup cooked wild rice or quinoa',
      '½ cup steamed green lentils',
      '1.5 cups fresh Spinach Microgreens',
      '2 tbsp toasted pumpkin seeds (pepitas)',
      '1 tbsp cold-pressed olive oil & lemon vinaigrette',
    ],
    steps: [
      'Layer warm wild rice and lentils in the base of a wide shallow bowl.',
      'Mound fresh tender Spinach Microgreens across the top for an iron & lutein powerhouse.',
      'Scatter crunchy pumpkin seeds and drizzle with cold-pressed lemon vinaigrette.',
    ],
  },
};

export default function Nourish() {
  const [selectedGreen, setSelectedGreen] = useState('All');
  const [activeRecipeId, setActiveRecipeId] = useState(null);

  const filteredRecipes = useMemo(() => {
    if (selectedGreen === 'All') return recipes;
    const filterKey = selectedGreen.toLowerCase();
    return recipes.filter((r) => r.greens.some((g) => g.includes(filterKey) || filterKey.includes(g)));
  }, [selectedGreen]);

  const activeRecipe = recipes.find((r) => r.id === activeRecipeId);
  const activeDetail = activeRecipe ? recipeDetails[activeRecipe.id] : null;

  return (
    <div className="nourish-page page-enter">
      {/* ─── HERO ─── */}
      <section className="nourish-hero">
        <div className="container">
          <div className="nourish-hero__content">
            <div className="eyebrow">
              <span className="label">Living Cuisine</span>
            </div>
            <h1 className="display-lg text-white">
              Nourish Your Body
            </h1>
            <p className="body-lg text-white nourish-hero__desc">
              Culinary inspiration, chef techniques, and nutrient-preserving recipes to transform
              ordinary daily meals into living superfood feasts.
            </p>
          </div>
        </div>
      </section>

      {/* ─── CHEF RULES ─── */}
      <section className="section-pad nourish-rules">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--sp-12)' }}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>
              <span className="label">Culinary Mastery</span>
            </div>
            <h2 className="display-md">The 4 Rules of Microgreen Cuisine</h2>
            <div className="divider" />
            <p className="body-lg" style={{ maxWidth: 620, margin: '0 auto' }}>
              Treat microgreens like delicate living herbs rather than cooked vegetables.
              Maximize flavour, crunch, and bioactive phytonutrient density with these fundamental principles.
            </p>
          </div>

          <div className="grid-4 rules-grid">
            {chefRules.map((r, i) => (
              <div key={i} className="rule-card">
                <span className="rule-card__num">{r.num}</span>
                <h3 className="rule-card__title">{r.title}</h3>
                <p className="rule-card__desc">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── RECIPES COLLECTION ─── */}
      <section className="section-pad nourish-recipes" style={{ background: 'var(--clr-cream)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--sp-8)' }}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>
              <span className="label">Kitchen Creations</span>
            </div>
            <h2 className="display-md">Vibrant Microgreen Recipes</h2>
            <div className="divider" />
          </div>

          {/* Filter Pills */}
          <div className="recipe-filter-bar">
            {['All', 'Broccoli', 'Beetroot', 'Radish', 'Mustard', 'Amaranth', 'Spinach', 'Fenugreek', 'Flaxseeds'].map((filter) => (
              <button
                key={filter}
                className={`recipe-filter-btn ${selectedGreen === filter ? 'active' : ''}`}
                onClick={() => setSelectedGreen(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Recipe Grid */}
          <div className="grid-3 recipe-grid">
            {filteredRecipes.map((r) => (
              <div key={r.id} className="recipe-card">
                <div className="recipe-card__top">
                  <span className="recipe-card__emoji">{r.emoji}</span>
                  <div className="recipe-card__meta">
                    <span className="recipe-meta-pill"><Clock size={12} /> {r.time}</span>
                    <span className="recipe-meta-pill"><ChefHat size={12} /> {r.difficulty}</span>
                  </div>
                </div>
                <h3 className="recipe-card__title">{r.title}</h3>
                <p className="recipe-card__desc">{r.desc}</p>
                <div className="recipe-card__greens">
                  {r.greens.map((g, i) => {
                    const matched = products.find(p => p.name.toLowerCase().includes(g.toLowerCase()) || g.toLowerCase().includes(p.name.toLowerCase()));
                    return (
                      <span key={i} className="badge badge-green recipe-green-badge">
                        {matched?.image ? (
                          <img src={matched.image} alt={g} className="recipe-green-thumb" loading="lazy" />
                        ) : (
                          <span>🌱</span>
                        )}
                        <span>{g}</span>
                      </span>
                    );
                  })}
                </div>
                <button
                  className="btn btn-outline btn-sm recipe-card__btn"
                  onClick={() => setActiveRecipeId(r.id)}
                >
                  View Ingredients & Steps
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── RECIPE MODAL ─── */}
      {activeRecipe && activeDetail && (
        <div className="recipe-modal-backdrop" onClick={() => setActiveRecipeId(null)}>
          <div className="recipe-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="recipe-modal__close"
              onClick={() => setActiveRecipeId(null)}
              aria-label="Close recipe"
            >
              ×
            </button>
            <div className="recipe-modal__header">
              <span className="recipe-modal__emoji">{activeRecipe.emoji}</span>
              <div>
                <h3 className="display-sm">{activeRecipe.title}</h3>
                <div className="recipe-modal__meta">
                  <span>⏱ {activeRecipe.time}</span>
                  <span>👨‍🍳 {activeRecipe.difficulty}</span>
                </div>
              </div>
            </div>

            <div className="recipe-modal__body">
              <div className="recipe-modal__section">
                <h4>Ingredients</h4>
                <ul className="ingredients-list">
                  {activeDetail.ingredients.map((ing, i) => (
                    <li key={i}><Check size={16} className="check-icon" /> {ing}</li>
                  ))}
                </ul>
              </div>

              <div className="recipe-modal__section">
                <h4>Preparation</h4>
                <ol className="steps-list">
                  {activeDetail.steps.map((st, i) => (
                    <li key={i}>
                      <span className="step-num">{i + 1}</span>
                      <span>{st}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="recipe-modal__footer">
              <Link to="/harvest" className="btn btn-primary btn-sm">
                Order These Greens
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* ─── CTA ─── */}
      <section className="section-pad nourish-cta">
        <div className="container text-center">
          <h2 className="display-sm" style={{ marginBottom: 'var(--sp-4)' }}>
            Elevate Your Everyday Cooking
          </h2>
          <p className="body-lg" style={{ maxWidth: 560, margin: '0 auto var(--sp-6)' }}>
            Get freshly harvested microgreens delivered every week for your morning bowls, wraps, and dinners.
          </p>
          <Link to="/seeds" className="btn btn-primary btn-lg">
            Start a Weekly Box
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
