import { motion } from "framer-motion";
import { BookOpen, BarChart3, Clock, Award, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const DashboardPage = () => (
  <div>
    <section className="border-b border-border bg-card py-8">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-display text-2xl font-bold text-card-foreground">Student Dashboard</h1>
          <p className="text-sm text-muted-foreground">Apni learning progress track karo aur continue karo</p>
        </motion.div>
      </div>
    </section>

    <section className="py-8 lg:py-12">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Stats */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: BookOpen, label: "Courses Started", value: "3", color: "bg-info/10 text-info" },
            { icon: Clock, label: "Study Hours", value: "24h", color: "bg-accent/10 text-accent" },
            { icon: BarChart3, label: "Questions Solved", value: "156", color: "bg-success/10 text-success" },
            { icon: Award, label: "Mock Tests", value: "5", color: "bg-warning/10 text-warning" },
          ].map((s) => (
            <div key={s.label} className="rounded-2xl border border-border bg-card p-5">
              <div className={`mb-3 inline-flex rounded-xl p-2.5 ${s.color}`}>
                <s.icon className="h-5 w-5" />
              </div>
              <div className="font-display text-2xl font-bold text-card-foreground">{s.value}</div>
              <div className="text-xs text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Continue Learning */}
        <h2 className="mb-4 font-display text-lg font-bold text-foreground">Continue Learning</h2>
        <div className="space-y-3">
          {[
            { title: "CFA Level 1 — Financial Statement Analysis", progress: 65, path: "/cfa" },
            { title: "NISM Series V-A — Chapter 4: SIP & Systematic Plans", progress: 40, path: "/nism" },
            { title: "Stock Market Basics — Technical Analysis", progress: 20, path: "/stocks" },
          ].map((item) => (
            <Link
              key={item.title}
              to={item.path}
              className="group flex items-center justify-between rounded-2xl border border-border bg-card p-5 transition-all hover:border-accent/30"
            >
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-card-foreground">{item.title}</h3>
                <div className="mt-2 h-2 w-full max-w-xs rounded-full bg-muted">
                  <div className="h-2 rounded-full bg-accent" style={{ width: `${item.progress}%` }} />
                </div>
                <span className="mt-1 text-xs text-muted-foreground">{item.progress}% complete</span>
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1" />
            </Link>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-muted/50 p-8 text-center">
          <p className="mb-4 text-sm text-muted-foreground">
            🔐 Full dashboard features — login, progress tracking, bookmarks — backend integration ke baad live honge.
          </p>
          <Button variant="outline" size="sm">Coming Soon</Button>
        </div>
      </div>
    </section>
  </div>
);

export default DashboardPage;
