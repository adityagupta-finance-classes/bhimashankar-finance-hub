import { Link } from "react-router-dom";
import { TrendingUp, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  Learning: [
    { label: "CFA Level 1", path: "/cfa" },
    { label: "CFA Level 2", path: "/cfa" },
    { label: "CFA Level 3", path: "/cfa" },
    { label: "NISM Certifications", path: "/nism" },
    { label: "Resources & PDFs", path: "/resources" },
  ],
  Markets: [
    { label: "Stock Market News", path: "/news" },
    { label: "Stock Research", path: "/stocks" },
    { label: "Mutual Fund Analysis", path: "/mutual-funds" },
    { label: "AI Finance Assistant", path: "/ai-assistant" },
  ],
  Company: [
    { label: "About Us", path: "/about" },
    { label: "Privacy Policy", path: "/privacy" },
    { label: "Terms of Service", path: "/terms" },
    { label: "Disclaimer", path: "/disclaimer" },
  ],
};

const Footer = () => (
  <footer className="border-t border-border bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 py-16 lg:px-8">
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
        {/* Brand */}
        <div className="lg:col-span-2">
          <Link to="/" className="mb-4 flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-gold">
              <TrendingUp className="h-5 w-5 text-navy-dark" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-sm font-bold leading-tight">Bhimashankar</span>
              <span className="text-[10px] font-medium uppercase tracking-wider opacity-70">
                Finance Classes
              </span>
            </div>
          </Link>
          <p className="mb-6 max-w-sm text-sm leading-relaxed opacity-70">
            India ka sabse comprehensive finance education platform. CFA, NISM, Stock Market — sab kuch ek jagah pe seekho.
          </p>
          <div className="space-y-2 text-sm opacity-70">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" /> contact@bhimashankarfinance.com
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" /> +91-XXXXX-XXXXX
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" /> India
            </div>
          </div>
        </div>

        {/* Link Columns */}
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h4 className="mb-4 font-display text-sm font-semibold">{title}</h4>
            <ul className="space-y-2.5">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm opacity-60 transition-opacity hover:opacity-100"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/10 pt-8 md:flex-row">
        <p className="text-xs opacity-50">
          © {new Date().getFullYear()} Bhimashankar Finance Classes. Founded by Aditya Gupta. All rights reserved.
        </p>
        <p className="max-w-lg text-center text-[10px] opacity-40">
          SEBI Disclaimer: Yeh platform sirf educational purpose ke liye hai. Stock market investments mein risk hota hai. Past performance future results ki guarantee nahi hai. Invest karne se pehle certified financial advisor se consult karein.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
