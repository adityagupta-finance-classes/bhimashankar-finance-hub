import { motion } from "framer-motion";

const DisclaimerPage = () => (
  <div>
    <section className="bg-hero py-16">
      <div className="container mx-auto px-4 text-center lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="mb-4 font-display text-3xl font-bold text-primary-foreground md:text-4xl">
            Disclaimer & <span className="text-gradient-gold">Risk Warning</span>
          </h1>
        </motion.div>
      </div>
    </section>
    <section className="py-12 lg:py-16">
      <div className="container mx-auto max-w-3xl px-4 lg:px-8">
        <div className="prose prose-sm max-w-none space-y-6 text-muted-foreground">
          <div className="rounded-2xl border border-warning/30 bg-warning/5 p-6">
            <h2 className="font-display text-lg font-bold text-foreground">⚠️ SEBI Disclaimer</h2>
            <p>Bhimashankar Finance Classes ek educational platform hai. Yahan diye gaye sab content, analysis, aur information sirf educational aur informational purpose ke liye hain. Yeh platform SEBI registered investment advisor nahi hai.</p>
          </div>
          <h2 className="font-display text-lg font-bold text-foreground">Investment Risk Warning</h2>
          <p>Stock market, mutual funds, derivatives, aur koi bhi financial instrument mein invest karna market risk ke adheen hai. Past performance future returns ki guarantee nahi hai. Investors apni risk capacity aur financial situation ke hisaab se investment decisions lein.</p>
          <h2 className="font-display text-lg font-bold text-foreground">No Investment Advice</h2>
          <p>Is website pe diya gaya koi bhi content — jaise stock analysis, mutual fund data, buy/sell signals — investment advice nahi hai. Yeh sirf educational purpose ke liye hai. Actual investment karne se pehle SEBI registered financial advisor se zaroor consult karein.</p>
          <h2 className="font-display text-lg font-bold text-foreground">Data Accuracy</h2>
          <p>Humne data accuracy ensure karne ki poori koshish ki hai, lekin hum data ki 100% accuracy ki guarantee nahi dete. Financial decisions lene se pehle multiple sources se verify karein.</p>
          <h2 className="font-display text-lg font-bold text-foreground">Third-Party Content</h2>
          <p>Is website pe kuch links ya references third-party websites ke hain. Hum unke content ya accuracy ke zimmedar nahi hain.</p>
          <p className="text-xs">Last updated: March 2026</p>
        </div>
      </div>
    </section>
  </div>
);

export default DisclaimerPage;
