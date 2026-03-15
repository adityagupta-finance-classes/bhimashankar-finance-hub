import { motion } from "framer-motion";
import { Shield, ChevronRight, FileText, HelpCircle, CheckCircle } from "lucide-react";

const nismSeries = [
  {
    code: "Series V-A",
    title: "Mutual Fund Distributors",
    description: "Mutual fund distribution ke liye NISM certification. Fund types, NAV calculation, SIP, investor rights — sab kuch seekho.",
    chapters: 12,
    mockTests: 5,
  },
  {
    code: "Series VIII",
    title: "Equity Derivatives",
    description: "Futures & Options ke complete concepts. Option Greeks, hedging strategies, margin requirements — sab detail mein.",
    chapters: 15,
    mockTests: 6,
  },
  {
    code: "Series XV",
    title: "Research Analyst",
    description: "Research analyst banne ke liye zaroori — valuation techniques, report writing, SEBI regulations, aur ethics.",
    chapters: 10,
    mockTests: 4,
  },
  {
    code: "Series X-A",
    title: "Investment Adviser (Level 1)",
    description: "Investment advisory services ke liye foundation. Financial planning, risk profiling, aur regulatory framework.",
    chapters: 14,
    mockTests: 5,
  },
  {
    code: "Series X-B",
    title: "Investment Adviser (Level 2)",
    description: "Advanced investment advisory — portfolio construction, asset allocation, tax planning, aur estate planning.",
    chapters: 12,
    mockTests: 4,
  },
  {
    code: "Series XII",
    title: "Securities Markets Foundation",
    description: "Securities markets ki complete foundation. Primary & secondary markets, trading mechanisms, aur settlement.",
    chapters: 8,
    mockTests: 3,
  },
];

const NISMPage = () => (
  <div>
    {/* Hero */}
    <section className="bg-hero py-20">
      <div className="container mx-auto px-4 text-center lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-sm text-gold-light">
            <Shield className="h-4 w-4" /> SEBI Certified
          </div>
          <h1 className="mb-4 font-display text-4xl font-bold text-primary-foreground md:text-5xl">
            NISM <span className="text-gradient-gold">Certification Prep</span>
          </h1>
          <p className="mx-auto max-w-2xl text-primary-foreground/70">
            Har NISM series ki complete taiyari — syllabus, concepts, mock tests, aur exam tips. Sab Hindi Roman mein.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Series Grid */}
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {nismSeries.map((series, i) => (
            <motion.div
              key={series.code}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-accent/30 hover:shadow-lg"
            >
              <div className="mb-4 inline-flex rounded-lg bg-accent/10 px-3 py-1 text-sm font-semibold text-accent">
                {series.code}
              </div>
              <h3 className="mb-2 font-display text-lg font-bold text-card-foreground">{series.title}</h3>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{series.description}</p>
              <div className="flex gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <FileText className="h-3.5 w-3.5" /> {series.chapters} Chapters
                </span>
                <span className="flex items-center gap-1">
                  <HelpCircle className="h-3.5 w-3.5" /> {series.mockTests} Mock Tests
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* What's Included */}
        <div className="mt-16 rounded-2xl border border-border bg-card p-8">
          <h2 className="mb-6 text-center font-display text-2xl font-bold text-card-foreground">
            Har Series Mein <span className="text-gradient-gold">Kya Milega</span>
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Complete syllabus coverage",
              "Hindi Roman mein explanation",
              "Chapter-wise lessons",
              "Mock tests with timer",
              "Exam-style questions",
              "Important FAQs",
              "PDF downloadable notes",
              "Progress tracking",
              "Difficulty level marking",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-card-foreground">
                <CheckCircle className="h-4 w-4 shrink-0 text-success" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default NISMPage;
