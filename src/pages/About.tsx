import { Award, Rocket, Brain } from "lucide-react";
import { motion } from "motion/react";

const skills = [
  "HTML/CSS/Web Development",
  "CSS, Bootstrap, Tailwind CSS",
  "ReactJS/NextJS",
  "Git and GitHub",
  "Project Management",
  "Problem Solving",
  "SEO",
];

export default function About() {
  return (
    <div className="max-w-5xl mx-auto space-y-20 py-10">
      <section className="flex flex-col md:flex-row items-center md:items-start gap-12">
        <div className="flex-1 space-y-8">
          <h2 className="text-4xl font-bold">About</h2>
          <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
            <p>
              Hi! I'm a 19 years old Frontend Engineer with several experiences
              and knowledge about technology, events, projects, and work. I’be
              learned from that, I always continue to develop and improve my
              skills. I am glad to continue learning new things and working with
              new and good people. Critical thinking, discipline, and passion is
              my key to success.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Technical Arsenal
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-1.5 rounded-full bg-surface border border-white/10 text-text-secondary text-xs font-semibold"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="relative w-64 h-64 md:w-80 md:h-80 shrink-0 group">
          <div className="absolute inset-0 bg-primary/20 blur-3xl opacity-50 group-hover:opacity-75 transition-opacity" />
          <div className="relative w-full h-full rounded-full border-4 border-surface shadow-2xl overflow-hidden ring-1 ring-white/10">
            <img
              src="src/assets/profile-pict.png"
              alt="Rakha Adrian"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          whileHover={{ y: -5 }}
          className="bg-surface p-8 rounded-2xl border border-white/5 space-y-4"
        >
          <Award className="text-primary" size={32} />
          <h4 className="text-xl font-bold">Technical Excellence</h4>
          <p className="text-text-secondary text-sm leading-relaxed">
            Building clean, maintainable, and efficient code using modern
            technologies like React, Next.js, and Tailwind CSS with best
            practices.
          </p>
        </motion.div>
        <motion.div
          whileHover={{ y: -5 }}
          className="bg-surface p-8 rounded-2xl border border-white/5 space-y-4"
        >
          <Rocket className="text-primary" size={32} />
          <h4 className="text-xl font-bold">Rapid Development</h4>
          <p className="text-text-secondary text-sm leading-relaxed">
            Delivering projects on schedule by leveraging modern development
            tools and frameworks to accelerate time-to-market without
            compromising quality.
          </p>
        </motion.div>
        <motion.div
          whileHover={{ y: -5 }}
          className="bg-surface p-8 rounded-2xl border border-white/5 space-y-4"
        >
          <Brain className="text-primary" size={32} />
          <h4 className="text-xl font-bold">Responsive & Accessible</h4>
          <p className="text-text-secondary text-sm leading-relaxed">
            Creating seamless digital experiences across all devices with
            optimized performance, accessibility, and user-focused design
            principles.
          </p>
        </motion.div>
      </div>

      <div className="p-12 rounded-3xl bg-linear-to-br from-surface to-background border border-white/10 text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-black">
          Interested in working together?
        </h2>
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <a
            href="mailto:rakhaadrian23@gmail.com"
            className="bg-primary text-background px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-lg shadow-primary/20"
          >
            Connect Now
          </a>
          <a
            href="https://drive.google.com/file/d/1YV90Jnf49i-IIuwerRag0b08lyzNCFRU/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent text-text-primary border border-white/20 px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-white/5 transition-colors"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
}
