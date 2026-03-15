import { motion } from "framer-motion";
import { PieChart, Search, TrendingUp, AlertTriangle } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const sampleFunds = [
  {
    name: "SBI Bluechip Fund",
    category: "Large Cap",
    returns1y: "+18.5%",
    returns3y: "+14.2%",
    returns5y: "+12.8%",
    risk: "Moderate",
    expenseRatio: "1.62%",
    aum: "₹42,300 Cr",
    topHoldings: ["HDFC Bank", "Reliance", "Infosys", "TCS", "ICICI Bank"],
    sectorAllocation: [
      { sector: "Banking", pct: 32 },
      { sector: "IT", pct: 22 },
      { sector: "FMCG", pct: 15 },
      { sector: "Auto", pct: 12 },
      { sector: "Others", pct: 19 },
    ],
  },
  {
    name: "Axis Small Cap Fund",
    category: "Small Cap",
    returns1y: "+28.3%",
    returns3y: "+22.1%",
    returns5y: "+18.5%",
    risk: "High",
    expenseRatio: "1.85%",
    aum: "₹18,500 Cr",
    topHoldings: ["Cholamandalam", "Persistent Systems", "Max Healthcare", "Tube Investments", "CG Power"],
    sectorAllocation: [
      { sector: "Industrials", pct: 28 },
      { sector: "Healthcare", pct: 20 },
      { sector: "IT", pct: 18 },
      { sector: "Consumer", pct: 16 },
      { sector: "Others", pct: 18 },
    ],
  },
];

const MutualFundsPage = () => {
  const [search, setSearch] = useState("");
  const [selectedFund, setSelectedFund] = useState(sampleFunds[0]);

  return (
    <div>
      <section className="bg-hero py-16">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-sm text-gold-light">
              <PieChart className="h-4 w-4" /> Analysis Tool
            </div>
            <h1 className="mb-4 font-display text-4xl font-bold text-primary-foreground md:text-5xl">
              Mutual Fund <span className="text-gradient-gold">Analysis</span>
            </h1>
            <p className="mx-auto max-w-xl text-primary-foreground/70">
              Fund name daalo aur dekho — holdings, returns, risk, expense ratio, aur complete analysis.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-8 lg:py-12">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Search */}
          <div className="mx-auto mb-8 max-w-lg">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Mutual fund name search karo..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button className="bg-gradient-gold text-navy-dark shadow-gold hover:opacity-90">Analyze</Button>
            </div>
          </div>

          {/* Fund Selector */}
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {sampleFunds.map((fund) => (
              <button
                key={fund.name}
                onClick={() => setSelectedFund(fund)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  selectedFund.name === fund.name
                    ? "bg-accent text-accent-foreground shadow-gold"
                    : "border border-border text-muted-foreground hover:bg-muted"
                }`}
              >
                {fund.name}
              </button>
            ))}
          </div>

          {/* Fund Detail */}
          <motion.div
            key={selectedFund.name}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl border border-border bg-card"
          >
            <div className="border-b border-border p-6">
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="font-display text-2xl font-bold text-card-foreground">{selectedFund.name}</h2>
                <span className="rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
                  {selectedFund.category}
                </span>
                <span
                  className={`rounded-full px-3 py-1 text-sm font-medium ${
                    selectedFund.risk === "High" ? "bg-destructive/10 text-destructive" : "bg-warning/10 text-warning"
                  }`}
                >
                  {selectedFund.risk} Risk
                </span>
              </div>
            </div>

            <div className="grid gap-6 p-6 md:grid-cols-2">
              {/* Returns */}
              <div>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Returns</h3>
                <div className="space-y-3">
                  {[
                    { label: "1 Year", value: selectedFund.returns1y },
                    { label: "3 Year", value: selectedFund.returns3y },
                    { label: "5 Year", value: selectedFund.returns5y },
                  ].map((r) => (
                    <div key={r.label} className="flex items-center justify-between rounded-xl bg-muted p-3">
                      <span className="text-sm text-muted-foreground">{r.label}</span>
                      <span className="flex items-center gap-1 font-semibold text-success">
                        <TrendingUp className="h-3.5 w-3.5" /> {r.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Fund Info */}
              <div>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Fund Details</h3>
                <div className="space-y-3">
                  <div className="flex justify-between rounded-xl bg-muted p-3 text-sm">
                    <span className="text-muted-foreground">AUM</span>
                    <span className="font-semibold text-card-foreground">{selectedFund.aum}</span>
                  </div>
                  <div className="flex justify-between rounded-xl bg-muted p-3 text-sm">
                    <span className="text-muted-foreground">Expense Ratio</span>
                    <span className="font-semibold text-card-foreground">{selectedFund.expenseRatio}</span>
                  </div>
                </div>

                <h3 className="mb-3 mt-6 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  Top Holdings
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedFund.topHoldings.map((h) => (
                    <span key={h} className="rounded-full border border-border px-3 py-1 text-xs font-medium text-card-foreground">
                      {h}
                    </span>
                  ))}
                </div>
              </div>

              {/* Sector Allocation */}
              <div className="md:col-span-2">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  Sector Allocation
                </h3>
                <div className="space-y-3">
                  {selectedFund.sectorAllocation.map((s) => (
                    <div key={s.sector}>
                      <div className="mb-1 flex justify-between text-sm">
                        <span className="text-card-foreground">{s.sector}</span>
                        <span className="font-medium text-muted-foreground">{s.pct}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-muted">
                        <div className="h-2 rounded-full bg-accent" style={{ width: `${s.pct}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <div className="mt-8 flex items-start gap-3 rounded-2xl border border-warning/30 bg-warning/5 p-5">
            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-warning" />
            <p className="text-sm text-muted-foreground">
              <strong className="text-card-foreground">Disclaimer:</strong> Mutual fund investments market risk ke adheen hain. Past performance future returns ki guarantee nahi hai. Invest karne se pehle scheme documents zaroor padhein.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MutualFundsPage;
