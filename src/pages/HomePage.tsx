import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, BookOpen, Brain, BarChart3, Shield, Newspaper } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { value: "50+", label: "Chapters" },
  { value: "1000+", label: "Practice Questions" },
  { value: "3", label: "CFA Levels" },
  { value: "24/7", label: "AI Assistant" },
];

const features = [
  {
    icon: BookOpen,
    title: "CFA Complete Course",
    description: "Level 1 se Level 3 tak — har concept Hindi Roman mein samjho. Formulas, examples, aur real case studies ke saath.",
    path: "/cfa",
    color: "bg-info/10 text-info",
  },
  {
    icon: Shield,
    title: "NISM Certification Prep",
    description: "NISM Series V-A, VIII, XV aur baaki sab. Mock tests, exam-style questions, aur chapter-wise preparation.",
    path: "/nism",
    color: "bg-success/10 text-success",
  },
  {
    icon: Brain,
    title: "AI Finance Assistant",
    description: "Koi bhi finance ka sawaal pucho — stocks, mutual funds, CFA topics — instant Hindi mein jawab pao.",
    path: "/ai-assistant",
    color: "bg-accent/10 text-gold-dark",
  },
  {
    icon: Newspaper,
    title: "24/7 Market News",
    description: "Indian & Global markets ki latest news, AI se summarized, Hindi Roman mein. Hamesha updated raho.",
    path: "/news",
    color: "bg-destructive/10 text-destructive",
  },
  {
    icon: BarChart3,
    title: "Stock Research System",
    description: "Buy/Hold/Sell signals, fundamental & technical analysis, financial ratios — sab ek dashboard pe.",
    path: "/stocks",
    color: "bg-navy/10 text-navy",
  },
  {
    icon: TrendingUp,
    title: "Mutual Fund Analysis",
    description: "Fund name daalo aur dekho — holdings, returns, risk, expense ratio, manager strategy sab kuch.",
    path: "/mutual-funds",
    color: "bg-warning/10 text-warning",
  },
];

const HeroSection = () => (
  <section className="relative overflow-hidden bg-hero">
    {/* Background Image Overlay */}
    <div className="absolute inset-0 opacity-20">
      <img src={heroBg} alt="" className="h-full w-full object-cover" />
    </div>
    <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/80 via-navy/60 to-navy-dark/90" />

    <div className="container relative mx-auto px-4 py-24 lg:px-8 lg:py-36">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-3xl text-center"
      >
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-sm font-medium text-gold-light">
          <TrendingUp className="h-4 w-4" />
          Founded by Aditya Gupta
        </div>
        <h1 className="mb-6 font-display text-4xl font-bold leading-tight tracking-tight text-primary-foreground md:text-6xl">
          Finance Seekho,{" "}
          <span className="text-gradient-gold">Apni Bhasha Mein</span>
        </h1>
        <p className="mb-8 text-lg leading-relaxed text-primary-foreground/70 md:text-xl">
          CFA, NISM, Stock Market, Mutual Funds — sab kuch Hindi Roman mein.
          India ka most comprehensive finance education platform.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link to="/cfa">
            <Button size="lg" className="bg-gradient-gold font-semibold text-navy-dark shadow-gold hover:opacity-90">
              Start Learning <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link to="/ai-assistant">
            <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
              Try AI Assistant
            </Button>
          </Link>
        </div>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="mx-auto mt-16 grid max-w-2xl grid-cols-2 gap-6 md:grid-cols-4"
      >
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="font-display text-3xl font-bold text-gradient-gold">{stat.value}</div>
            <div className="mt-1 text-sm text-primary-foreground/60">{stat.label}</div>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

const FeaturesSection = () => (
  <section className="py-20 lg:py-28">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
          Ek Platform, <span className="text-gradient-gold">Poori Finance Education</span>
        </h2>
        <p className="text-muted-foreground">
          Chahe CFA ki padhai ho ya stock market analysis — sab kuch yahan milega, Hindi Roman mein.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Link
              to={feature.path}
              className="group block rounded-2xl border border-border bg-card p-6 transition-all hover:border-accent/30 hover:shadow-lg"
            >
              <div className={`mb-4 inline-flex rounded-xl p-3 ${feature.color}`}>
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-display text-lg font-semibold text-card-foreground">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
              <div className="mt-4 flex items-center text-sm font-medium text-accent">
                Explore <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const MarketTicker = () => {
  const tickers = [
    { name: "NIFTY 50", value: "22,450", change: "+1.2%" },
    { name: "SENSEX", value: "73,890", change: "+0.8%" },
    { name: "BANK NIFTY", value: "48,320", change: "-0.3%" },
    { name: "GOLD", value: "₹71,250", change: "+0.5%" },
    { name: "USD/INR", value: "83.42", change: "-0.1%" },
    { name: "CRUDE OIL", value: "$78.50", change: "+1.8%" },
  ];

  return (
    <div className="overflow-hidden border-y border-border bg-muted/50 py-3">
      <div className="animate-ticker flex gap-8 whitespace-nowrap">
        {[...tickers, ...tickers].map((t, i) => (
          <span key={i} className="flex items-center gap-2 text-sm">
            <span className="font-semibold text-foreground">{t.name}</span>
            <span className="text-muted-foreground">{t.value}</span>
            <span className={t.change.startsWith("+") ? "text-success" : "text-destructive"}>
              {t.change}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
};

const CTASection = () => (
  <section className="bg-hero py-20">
    <div className="container mx-auto px-4 text-center lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="mb-4 font-display text-3xl font-bold text-primary-foreground md:text-4xl">
          Aaj Se Hi <span className="text-gradient-gold">Seekhna Shuru Karo</span>
        </h2>
        <p className="mx-auto mb-8 max-w-lg text-primary-foreground/70">
          CFA, NISM, Stock Market — sab kuch free mein explore karo. AI assistant se koi bhi doubt pucho, 24/7.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link to="/cfa">
            <Button size="lg" className="bg-gradient-gold font-semibold text-navy-dark shadow-gold hover:opacity-90">
              CFA Portal <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link to="/nism">
            <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
              NISM Portal
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
);

const HomePage = () => (
  <>
    <HeroSection />
    <MarketTicker />
    <FeaturesSection />
    <CTASection />
  </>
);

export default HomePage;
