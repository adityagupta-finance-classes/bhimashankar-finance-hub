import { motion } from "framer-motion";
import { Newspaper, Clock, TrendingUp, TrendingDown, Globe, Building2, Coins, Bitcoin } from "lucide-react";
import { useState } from "react";

const categories = [
  { id: "all", label: "All", icon: Newspaper },
  { id: "indian", label: "Indian Market", icon: TrendingUp },
  { id: "global", label: "Global Market", icon: Globe },
  { id: "economy", label: "Economy", icon: Building2 },
  { id: "ipo", label: "IPO", icon: TrendingDown },
  { id: "commodities", label: "Commodities", icon: Coins },
  { id: "crypto", label: "Crypto", icon: Bitcoin },
];

const sampleNews = [
  {
    id: 1,
    category: "indian",
    title: "Nifty 50 Ne Banaya Naya All-Time High",
    summary: "Nifty 50 index ne aaj 22,500 ka naya all-time high banaya. IT aur Banking stocks ne market ko upar le jaane mein major role play kiya. FII buying bhi strong rahi is week.",
    source: "Market Analysis",
    time: "2 ghante pehle",
    impact: "positive",
  },
  {
    id: 2,
    category: "global",
    title: "US Federal Reserve Ne Interest Rates Steady Rakhe",
    summary: "Fed ne interest rates ko 5.25-5.50% pe unchanged rakha hai. Powell ne kaha ki inflation ab bhi target se upar hai, lekin 2024 mein rate cuts possible hain agar data improve hota hai.",
    source: "Global Markets",
    time: "4 ghante pehle",
    impact: "neutral",
  },
  {
    id: 3,
    category: "economy",
    title: "India GDP Growth 7.6% — World Ki Fastest Growing Economy",
    summary: "India ki GDP growth Q2 FY24 mein 7.6% rahi, jo expectations se zyada hai. Manufacturing aur services sector ne strong performance dikhayi. IMF ne bhi India ka growth outlook upgrade kiya.",
    source: "Economic Times",
    time: "6 ghante pehle",
    impact: "positive",
  },
  {
    id: 4,
    category: "ipo",
    title: "Upcoming IPO: Tata Technologies Listing Ke Baad 140% Premium",
    summary: "Tata Technologies ka IPO listing ke baad share price mein 140% ka premium dekha gaya. Grey market mein pehle se hi strong demand thi. Retail investors ko allocation kam mili.",
    source: "IPO Watch",
    time: "8 ghante pehle",
    impact: "positive",
  },
  {
    id: 5,
    category: "commodities",
    title: "Gold Prices Mein Tezi — ₹71,000 Ke Paar",
    summary: "Global uncertainty aur dollar weakness ki wajah se gold prices mein tezi aayi hai. MCX pe gold ₹71,250 pe trade ho raha hai. Experts ka kehna hai ki safe-haven demand strong rahegi.",
    source: "Commodity Market",
    time: "10 ghante pehle",
    impact: "positive",
  },
  {
    id: 6,
    category: "indian",
    title: "Banking Sector: RBI Ne NPA Norms Strict Kiye",
    summary: "RBI ne banking sector ke liye NPA recognition rules ko aur strict kar diya hai. Chote banks pe iska zyada asar padega. Large cap banks jaise HDFC aur ICICI ke liye yeh manageable hai.",
    source: "Banking News",
    time: "12 ghante pehle",
    impact: "neutral",
  },
];

const NewsPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredNews =
    activeCategory === "all"
      ? sampleNews
      : sampleNews.filter((n) => n.category === activeCategory);

  return (
    <div>
      {/* Hero */}
      <section className="bg-hero py-16">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-sm text-gold-light">
              <Newspaper className="h-4 w-4" /> 24/7 Auto-Updated
            </div>
            <h1 className="mb-4 font-display text-4xl font-bold text-primary-foreground md:text-5xl">
              Financial <span className="text-gradient-gold">News Engine</span>
            </h1>
            <p className="mx-auto max-w-xl text-primary-foreground/70">
              Indian & global markets ki latest news, AI se summarized, Hindi Roman mein. Hamesha updated raho.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <div className="sticky top-16 z-40 border-b border-border bg-card/95 backdrop-blur">
        <div className="container mx-auto flex gap-2 overflow-x-auto px-4 py-3 lg:px-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex shrink-0 items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? "bg-accent text-accent-foreground shadow-gold"
                  : "text-muted-foreground hover:bg-muted"
              }`}
            >
              <cat.icon className="h-3.5 w-3.5" />
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* News Grid */}
      <section className="py-8 lg:py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredNews.map((news, i) => (
              <motion.article
                key={news.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="group rounded-2xl border border-border bg-card p-5 transition-all hover:border-accent/30 hover:shadow-md"
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground capitalize">
                    {news.category}
                  </span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                      news.impact === "positive"
                        ? "bg-success/10 text-success"
                        : news.impact === "negative"
                        ? "bg-destructive/10 text-destructive"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {news.impact === "positive" ? "📈 Positive" : news.impact === "negative" ? "📉 Negative" : "➡️ Neutral"}
                  </span>
                </div>
                <h3 className="mb-2 font-display text-base font-bold text-card-foreground leading-snug">
                  {news.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{news.summary}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{news.source}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {news.time}
                  </span>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-border bg-muted/50 p-8 text-center">
            <p className="text-sm text-muted-foreground">
              🔄 AI-powered news engine coming soon — auto-collected, summarized, aur categorized news 24/7.
              Backend integration ke baad live data aayega.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;
