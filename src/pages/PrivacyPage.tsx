import { motion } from "framer-motion";

const PrivacyPage = () => (
  <div>
    <section className="bg-hero py-16">
      <div className="container mx-auto px-4 text-center lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="mb-4 font-display text-3xl font-bold text-primary-foreground md:text-4xl">
            Privacy <span className="text-gradient-gold">Policy</span>
          </h1>
        </motion.div>
      </div>
    </section>
    <section className="py-12 lg:py-16">
      <div className="container mx-auto max-w-3xl space-y-6 px-4 text-sm leading-relaxed text-muted-foreground lg:px-8">
        <h2 className="font-display text-lg font-bold text-foreground">Information We Collect</h2>
        <p>Jab aap humari website use karte ho, hum kuch basic information collect kar sakte hain — jaise name, email address (agar aap register karte ho), aur website usage data (cookies ke through).</p>
        <h2 className="font-display text-lg font-bold text-foreground">How We Use Your Data</h2>
        <p>Aapka data sirf in cheezon ke liye use hota hai: (1) Aapko better learning experience dena, (2) Progress track karna, (3) Important updates bhejne ke liye.</p>
        <h2 className="font-display text-lg font-bold text-foreground">Data Security</h2>
        <p>Hum aapke data ki security ke liye industry-standard encryption aur security practices follow karte hain. Aapka personal data kisi third party ke saath share nahi kiya jaata bina aapki permission ke.</p>
        <h2 className="font-display text-lg font-bold text-foreground">Cookies</h2>
        <p>Humari website cookies use karti hai taaki aapko better experience mil sake. Aap apne browser settings se cookies disable kar sakte ho.</p>
        <h2 className="font-display text-lg font-bold text-foreground">Contact</h2>
        <p>Privacy se related koi bhi sawaal ke liye contact@bhimashankarfinance.com pe email karein.</p>
        <p className="text-xs">Last updated: March 2026</p>
      </div>
    </section>
  </div>
);

export default PrivacyPage;
