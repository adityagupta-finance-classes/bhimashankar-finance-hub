import { motion } from "framer-motion";
import { Users, Target, Award, Heart, BookOpen, TrendingUp } from "lucide-react";

const AboutPage = () => (
  <div>
    <section className="bg-hero py-20">
      <div className="container mx-auto px-4 text-center lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="mb-4 font-display text-4xl font-bold text-primary-foreground md:text-5xl">
            About <span className="text-gradient-gold">Bhimashankar Finance</span>
          </h1>
          <p className="mx-auto max-w-2xl text-primary-foreground/70">
            Finance education ko accessible banana — har student ke liye, unki apni bhasha mein.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Founder */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-gold">
            <span className="font-display text-3xl font-bold text-navy-dark">AG</span>
          </div>
          <h2 className="mb-2 font-display text-2xl font-bold text-foreground">Aditya Gupta</h2>
          <p className="mb-4 text-sm text-accent">Founder, Bhimashankar Finance Classes</p>
          <p className="leading-relaxed text-muted-foreground">
            Finance education India mein bahut logo ke liye mushkil hai — English language barrier, expensive courses, aur confusing content ki wajah se. Bhimashankar Finance Classes ki shuruaat isi problem ko solve karne ke liye hui. Humara mission hai ki CFA, NISM, Stock Market — sab kuch simple Hindi Roman mein samjhaayein, taaki har student confidently finance seekh sake.
          </p>
        </div>

        {/* Values */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: BookOpen, title: "Quality Education", desc: "Har topic ko deep detail mein, real examples ke saath samjhaate hain." },
            { icon: Heart, title: "Hindi Mein Seekho", desc: "Complex finance concepts ko simple Hindi Roman mein explain karte hain." },
            { icon: Target, title: "Exam Focused", desc: "CFA aur NISM exams ki targeted preparation — mock tests aur practice questions." },
            { icon: TrendingUp, title: "Market Ready", desc: "Theory ke saath practical stock analysis aur market understanding." },
            { icon: Users, title: "Student First", desc: "Har decision student ki zaroorat ko dhyan mein rakh ke lete hain." },
            { icon: Award, title: "Always Updated", desc: "Content ko regularly update karte hain latest syllabus aur market trends ke hisaab se." },
          ].map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <div className="mb-3 inline-flex rounded-xl bg-accent/10 p-3">
                <v.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mb-2 font-display text-lg font-semibold text-card-foreground">{v.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default AboutPage;
