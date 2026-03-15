import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", path: "/" },
  {
    label: "Learning",
    children: [
      { label: "CFA Portal", path: "/cfa" },
      { label: "NISM Portal", path: "/nism" },
      { label: "Resources & PDFs", path: "/resources" },
    ],
  },
  {
    label: "Markets",
    children: [
      { label: "Stock Market News", path: "/news" },
      { label: "Stock Research", path: "/stocks" },
      { label: "Mutual Fund Analysis", path: "/mutual-funds" },
    ],
  },
  { label: "AI Assistant", path: "/ai-assistant" },
  { label: "About", path: "/about" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-gold">
            <TrendingUp className="h-5 w-5 text-navy-dark" />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-sm font-bold leading-tight text-foreground">
              Bhimashankar
            </span>
            <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
              Finance Classes
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </button>
                <AnimatePresence>
                  {openDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-0 top-full mt-1 min-w-[200px] rounded-xl border border-border bg-card p-2 shadow-lg"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className={`block rounded-lg px-3 py-2 text-sm transition-colors ${
                            isActive(child.path)
                              ? "bg-accent/20 font-semibold text-accent-foreground"
                              : "text-muted-foreground hover:bg-muted hover:text-foreground"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={item.path}
                to={item.path!}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(item.path!)
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link to="/dashboard" className="hidden lg:block">
            <Button size="sm" className="bg-gradient-gold font-semibold text-navy-dark shadow-gold hover:opacity-90">
              Student Dashboard
            </Button>
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 text-foreground lg:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-border bg-card lg:hidden"
          >
            <nav className="container mx-auto space-y-1 px-4 py-4">
              {navItems.map((item) =>
                item.children ? (
                  <div key={item.label} className="space-y-1">
                    <span className="block px-3 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {item.label}
                    </span>
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        onClick={() => setMobileOpen(false)}
                        className="block rounded-lg px-6 py-2 text-sm text-foreground hover:bg-muted"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={item.path}
                    to={item.path!}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-lg px-3 py-2 text-sm font-medium text-foreground hover:bg-muted"
                  >
                    {item.label}
                  </Link>
                )
              )}
              <Link to="/dashboard" onClick={() => setMobileOpen(false)}>
                <Button className="mt-4 w-full bg-gradient-gold font-semibold text-navy-dark">
                  Student Dashboard
                </Button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
