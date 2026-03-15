import { motion } from "framer-motion";
import { BookOpen, ChevronRight, Target, Award, Clock, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const cfaLevels = [
  {
    level: "Level 1",
    subtitle: "Foundation of Finance",
    topics: [
      "Ethical & Professional Standards",
      "Quantitative Methods",
      "Economics",
      "Financial Statement Analysis",
      "Corporate Issuers",
      "Equity Investments",
      "Fixed Income",
      "Derivatives",
      "Alternative Investments",
      "Portfolio Management",
    ],
    description: "CFA Level 1 mein aapko finance ki poori basic foundation milegi. Yahan se samjhoge ki markets kaise kaam karte hain, financial statements kaise padhte hain, aur investments ke basics kya hain.",
    chapters: 50,
    questions: 400,
  },
  {
    level: "Level 2",
    subtitle: "Advanced Valuation",
    topics: [
      "Ethics & Professional Standards",
      "Quantitative Methods (Advanced)",
      "Financial Reporting & Analysis",
      "Corporate Finance",
      "Equity Valuation",
      "Fixed Income Analysis",
      "Derivatives Pricing",
      "Alternative Investments",
      "Portfolio Management & Wealth Planning",
    ],
    description: "Level 2 mein deep valuation techniques seekhoge — DCF models, relative valuation, aur complex financial instruments ka analysis. Yeh level analytical skills ko sharpen karta hai.",
    chapters: 45,
    questions: 350,
  },
  {
    level: "Level 3",
    subtitle: "Portfolio Management",
    topics: [
      "Ethical & Professional Standards",
      "Behavioral Finance",
      "Capital Market Expectations",
      "Asset Allocation",
      "Fixed Income Portfolio Management",
      "Equity Portfolio Management",
      "Alternative Investments for Portfolio",
      "Risk Management",
      "Trading, Performance Evaluation & GIPS",
    ],
    description: "Level 3 portfolio management pe focused hai — kaise ek complete investment portfolio banate hain, risk manage karte hain, aur client ko wealth planning provide karte hain.",
    chapters: 35,
    questions: 300,
  },
];

const CFAPage = () => (
  <div>
    {/* Hero */}
    <section className="bg-hero py-20">
      <div className="container mx-auto px-4 text-center lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-sm text-gold-light">
            <Award className="h-4 w-4" /> Complete CFA Program
          </div>
          <h1 className="mb-4 font-display text-4xl font-bold text-primary-foreground md:text-5xl">
            CFA <span className="text-gradient-gold">Complete Course</span>
          </h1>
          <p className="mx-auto max-w-2xl text-primary-foreground/70">
            Level 1 se Level 3 tak — har ek topic detail mein, Hindi Roman mein.
            Formulas, charts, examples, aur practice questions ke saath.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Stats */}
    <section className="border-b border-border bg-card py-8">
      <div className="container mx-auto flex flex-wrap items-center justify-center gap-8 px-4 lg:gap-16">
        {[
          { icon: BookOpen, label: "130+ Chapters", detail: "Complete Syllabus" },
          { icon: Target, label: "1050+ Questions", detail: "Practice & Mock Tests" },
          { icon: Clock, label: "Hindi Roman", detail: "Easy Language" },
          { icon: CheckCircle2, label: "PDF Notes", detail: "Download Available" },
        ].map((s) => (
          <div key={s.label} className="flex items-center gap-3 text-sm">
            <div className="rounded-lg bg-accent/10 p-2">
              <s.icon className="h-5 w-5 text-accent" />
            </div>
            <div>
              <div className="font-semibold text-card-foreground">{s.label}</div>
              <div className="text-xs text-muted-foreground">{s.detail}</div>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Levels */}
    <section className="py-16 lg:py-24">
      <div className="container mx-auto space-y-12 px-4 lg:px-8">
        {cfaLevels.map((level, i) => (
          <motion.div
            key={level.level}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="overflow-hidden rounded-2xl border border-border bg-card"
          >
            <div className="bg-hero p-6 lg:p-8">
              <div className="flex flex-wrap items-center gap-4">
                <h2 className="font-display text-2xl font-bold text-primary-foreground md:text-3xl">
                  {level.level}
                </h2>
                <span className="rounded-full bg-gold/20 px-3 py-1 text-sm font-medium text-gold-light">
                  {level.subtitle}
                </span>
              </div>
              <p className="mt-3 max-w-3xl text-sm text-primary-foreground/70">{level.description}</p>
              <div className="mt-4 flex gap-6 text-sm text-primary-foreground/60">
                <span>{level.chapters} Chapters</span>
                <span>{level.questions}+ Questions</span>
              </div>
            </div>
            <div className="p-6 lg:p-8">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Topics Covered
              </h3>
              <div className="grid gap-2 sm:grid-cols-2">
                {level.topics.map((topic) => (
                  <div
                    key={topic}
                    className="group flex items-center gap-3 rounded-xl border border-border p-3 transition-colors hover:border-accent/30 hover:bg-muted/50"
                  >
                    <ChevronRight className="h-4 w-4 text-accent" />
                    <span className="text-sm font-medium text-card-foreground">{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  </div>
);

export default CFAPage;
