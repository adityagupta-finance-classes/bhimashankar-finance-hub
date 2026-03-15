import { motion } from "framer-motion";
import { FileText, Download, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const resources = [
  { title: "CFA Level 1 — Complete Formula Sheet", category: "CFA", pages: 25 },
  { title: "CFA Level 2 — Equity Valuation Notes", category: "CFA", pages: 40 },
  { title: "CFA Level 3 — Portfolio Management Summary", category: "CFA", pages: 30 },
  { title: "NISM Series V-A — Quick Revision Notes", category: "NISM", pages: 18 },
  { title: "NISM Series VIII — Derivatives Formulas", category: "NISM", pages: 15 },
  { title: "Financial Ratios — Complete Guide", category: "General", pages: 22 },
  { title: "Stock Market Basics — Hindi Notes", category: "General", pages: 35 },
  { title: "Mutual Fund Selection Checklist", category: "General", pages: 10 },
];

const ResourcesPage = () => (
  <div>
    <section className="bg-hero py-16">
      <div className="container mx-auto px-4 text-center lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-sm text-gold-light">
            <BookOpen className="h-4 w-4" /> Free Resources
          </div>
          <h1 className="mb-4 font-display text-4xl font-bold text-primary-foreground md:text-5xl">
            Resources & <span className="text-gradient-gold">PDF Library</span>
          </h1>
          <p className="mx-auto max-w-xl text-primary-foreground/70">
            CFA, NISM, aur finance ke notes — PDF mein download karo aur offline padho.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2">
          {resources.map((res, i) => (
            <motion.div
              key={res.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center justify-between rounded-2xl border border-border bg-card p-5"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-destructive/10 p-3">
                  <FileText className="h-5 w-5 text-destructive" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-card-foreground">{res.title}</h3>
                  <div className="mt-1 flex gap-3 text-xs text-muted-foreground">
                    <span>{res.category}</span>
                    <span>{res.pages} pages</span>
                  </div>
                </div>
              </div>
              <Button size="sm" variant="outline" className="shrink-0 gap-1.5">
                <Download className="h-3.5 w-3.5" /> PDF
              </Button>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-muted/50 p-8 text-center">
          <p className="text-sm text-muted-foreground">
            📚 Aur resources jald aayenge. Backend integration ke baad PDF download feature fully active hoga.
          </p>
        </div>
      </div>
    </section>
  </div>
);

export default ResourcesPage;
