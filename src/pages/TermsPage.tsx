import { motion } from "framer-motion";

const TermsPage = () => (
  <div>
    <section className="bg-hero py-16">
      <div className="container mx-auto px-4 text-center lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="mb-4 font-display text-3xl font-bold text-primary-foreground md:text-4xl">
            Terms of <span className="text-gradient-gold">Service</span>
          </h1>
        </motion.div>
      </div>
    </section>
    <section className="py-12 lg:py-16">
      <div className="container mx-auto max-w-3xl space-y-6 px-4 text-sm leading-relaxed text-muted-foreground lg:px-8">
        <h2 className="font-display text-lg font-bold text-foreground">Acceptance of Terms</h2>
        <p>Bhimashankar Finance Classes ki website use karke aap in Terms of Service se agree karte ho. Agar aap in terms se agree nahi karte, toh please website use mat karein.</p>
        <h2 className="font-display text-lg font-bold text-foreground">Educational Purpose Only</h2>
        <p>Is website ka sara content sirf educational purpose ke liye hai. Yeh kisi bhi tarah ki investment advice, financial planning, ya professional consulting service nahi hai.</p>
        <h2 className="font-display text-lg font-bold text-foreground">User Responsibilities</h2>
        <p>Users ko apne account ki security maintain karni hogi. Content ko bina permission ke reproduce ya distribute karna allowed nahi hai.</p>
        <h2 className="font-display text-lg font-bold text-foreground">Intellectual Property</h2>
        <p>Website pe sab content — text, images, videos, PDFs — Bhimashankar Finance Classes ki intellectual property hai. Bina written permission ke copy ya redistribute karna prohibited hai.</p>
        <h2 className="font-display text-lg font-bold text-foreground">Limitation of Liability</h2>
        <p>Bhimashankar Finance Classes website pe diye gaye content ke basis pe liye gaye kisi bhi financial decision ke liye responsible nahi hai.</p>
        <p className="text-xs">Last updated: March 2026</p>
      </div>
    </section>
  </div>
);

export default TermsPage;
