import { motion } from "framer-motion";
import { BarChart3, TrendingUp, TrendingDown, Search, AlertTriangle } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";

const sampleStocks = [
  { name: "Reliance Industries", symbol: "RELIANCE", price: "₹2,890", change: "+2.1%", signal: "Buy", pe: "28.5", marketCap: "₹19.5L Cr", sector: "Conglomerate", score: 85 },
  { name: "TCS", symbol: "TCS", price: "₹3,750", change: "+0.8%", signal: "Hold", pe: "32.1", marketCap: "₹13.7L Cr", sector: "IT", score: 72 },
  { name: "HDFC Bank", symbol: "HDFCBANK", price: "₹1,620", change: "-0.5%", signal: "Buy", pe: "19.8", marketCap: "₹12.3L Cr", sector: "Banking", score: 88 },
  { name: "Infosys", symbol: "INFY", price: "₹1,580", change: "+1.3%", signal: "Hold", pe: "27.4", marketCap: "₹6.6L Cr", sector: "IT", score: 70 },
  { name: "ITC Ltd", symbol: "ITC", price: "₹465", change: "+0.4%", signal: "Buy", pe: "25.2", marketCap: "₹5.8L Cr", sector: "FMCG", score: 78 },
  { name: "Adani Enterprises", symbol: "ADANIENT", price: "₹2,750", change: "-1.8%", signal: "Sell", pe: "85.3", marketCap: "₹3.1L Cr", sector: "Conglomerate", score: 42 },
];

const StocksPage = () => {
  const [search, setSearch] = useState("");
  const filtered = sampleStocks.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <section className="bg-hero py-16">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-sm text-gold-light">
              <BarChart3 className="h-4 w-4" /> Research System
            </div>
            <h1 className="mb-4 font-display text-4xl font-bold text-primary-foreground md:text-5xl">
              Stock <span className="text-gradient-gold">Research & Analysis</span>
            </h1>
            <p className="mx-auto max-w-xl text-primary-foreground/70">
              Buy / Hold / Sell signals, fundamental & technical analysis, aur stock scoring system.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-8 lg:py-12">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Search */}
          <div className="mx-auto mb-8 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Stock name ya symbol search karo..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Stock Cards */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((stock, i) => (
              <motion.div
                key={stock.symbol}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="rounded-2xl border border-border bg-card p-5"
              >
                <div className="mb-3 flex items-start justify-between">
                  <div>
                    <h3 className="font-display font-bold text-card-foreground">{stock.name}</h3>
                    <span className="text-xs text-muted-foreground">{stock.symbol} • {stock.sector}</span>
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-bold ${
                      stock.signal === "Buy"
                        ? "bg-success/10 text-success"
                        : stock.signal === "Sell"
                        ? "bg-destructive/10 text-destructive"
                        : "bg-warning/10 text-warning"
                    }`}
                  >
                    {stock.signal}
                  </span>
                </div>

                <div className="mb-4 flex items-end gap-3">
                  <span className="font-display text-2xl font-bold text-card-foreground">{stock.price}</span>
                  <span
                    className={`flex items-center gap-1 text-sm font-medium ${
                      stock.change.startsWith("+") ? "text-success" : "text-destructive"
                    }`}
                  >
                    {stock.change.startsWith("+") ? (
                      <TrendingUp className="h-3.5 w-3.5" />
                    ) : (
                      <TrendingDown className="h-3.5 w-3.5" />
                    )}
                    {stock.change}
                  </span>
                </div>

                {/* Score Bar */}
                <div className="mb-3">
                  <div className="mb-1 flex justify-between text-xs">
                    <span className="text-muted-foreground">Stock Score</span>
                    <span className="font-semibold text-card-foreground">{stock.score}/100</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted">
                    <div
                      className={`h-2 rounded-full transition-all ${
                        stock.score >= 75 ? "bg-success" : stock.score >= 50 ? "bg-warning" : "bg-destructive"
                      }`}
                      style={{ width: `${stock.score}%` }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="rounded-lg bg-muted p-2">
                    <span className="text-muted-foreground">P/E Ratio</span>
                    <div className="font-semibold text-card-foreground">{stock.pe}</div>
                  </div>
                  <div className="rounded-lg bg-muted p-2">
                    <span className="text-muted-foreground">Market Cap</span>
                    <div className="font-semibold text-card-foreground">{stock.marketCap}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 flex items-start gap-3 rounded-2xl border border-warning/30 bg-warning/5 p-5">
            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-warning" />
            <p className="text-sm text-muted-foreground">
              <strong className="text-card-foreground">Disclaimer:</strong> Yeh data sirf educational purpose ke liye hai. Stock market mein invest karne se pehle apna research zaroor karein aur certified financial advisor se consult karein.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StocksPage;
