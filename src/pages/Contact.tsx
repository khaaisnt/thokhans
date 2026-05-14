import {
  AtSign,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Instagram,
  Grid,
} from "lucide-react";
import { motion } from "motion/react";

export default function Contact() {
  return (
    <div className="max-w-5xl mx-auto space-y-16 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Contact Form */}
        <div className="lg:col-span-7 bg-surface p-8 rounded-2xl border border-white/5 shadow-2xl space-y-8">
          <h2 className="text-2xl font-bold">Get in Touch</h2>
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-text-secondary">
                Full Name
              </label>
              <input
                type="text"
                placeholder="What's your name?"
                className="w-full bg-[#1e1e1e] border-none rounded-lg p-4 text-text-primary placeholder:text-white/20 focus:ring-1 focus:ring-white/20 transition-all outline-none"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-text-secondary">
                Email Address
              </label>
              <input
                type="email"
                placeholder="email@example.com"
                className="w-full bg-[#1e1e1e] border-none rounded-lg p-4 text-text-primary placeholder:text-white/20 focus:ring-1 focus:ring-white/20 transition-all outline-none"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-text-secondary">
                Message
              </label>
              <textarea
                placeholder="Tell me about your project..."
                rows={5}
                className="w-full bg-[#1e1e1e] border-none rounded-lg p-4 text-text-primary placeholder:text-white/20 focus:ring-1 focus:ring-white/20 transition-all outline-none resize-none"
              />
            </div>
            <button className="w-full md:w-auto px-12 py-4 bg-primary text-background font-bold rounded-full uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/10">
              Send Message
            </button>
          </form>
        </div>

        {/* Info & Map */}
        <div className="lg:col-span-5 space-y-8">
          <div className="bg-surface p-8 rounded-2xl border border-white/5 space-y-6">
            <h3 className="text-xl font-bold">Direct Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary">
                  <AtSign size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-text-secondary">
                    Email
                  </p>
                  <p className="font-semibold">rakhaadrian23@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-text-secondary">
                    Phone
                  </p>
                  <p className="font-semibold">+6288236677770</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-64 rounded-2xl overflow-hidden group shadow-2xl">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHyA4ae71RR4prIBDWXsXkfgSE8bWOpZ6MJLu9H5LRDQ3TwPmwsgKCyQHPPuMHYBOnwniBCtJJdxFaQ6JWQg28pin0mK6vzKbHRhwgpIP_8FnR1o3B80a_xiDMtW4Js1vgEguH6mg5oPmf_hWcqUXeLa5NAUyG9WAjcHzJ_V_lUIO2KkRNY7Rzy1g-EnAJsoGzCMhDme1WYPG1I7VjzZR7TekU1EeJgmTieKFMRRdo5pdhmxgNroDSR3KyQrPAscj_aL5WhH9gBqc"
              alt="Malang Map"
              className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-60 transition-opacity duration-700"
            />
            <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 flex items-center gap-2">
              <MapPin
                size={24}
                className="text-primary"
                fill="currentColor"
                fillOpacity={0.2}
              />
              <span className="font-bold text-lg">Malang, Indonesia</span>
            </div>
          </div>
        </div>
      </div>

      {/* Socials */}
      <div className="pt-16 border-t border-white/5 text-center space-y-10">
        <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-text-secondary">
          Follow My Journey
        </h3>
        <div className="flex flex-wrap justify-center gap-10 md:gap-16">
          <SocialLink
            icon={<Linkedin size={24} />}
            label="Linkedin"
            href="https://www.linkedin.com/in/rakha-adrian-nur-tanaya/"
          />
          <SocialLink
            icon={<Github size={24} />}
            label="Github"
            href="https://github.com/khaaisnt"
          />
          <SocialLink
            icon={<Instagram size={24} />}
            label="Instagram"
            href="https://www.instagram.com/thokhans/"
          />
        </div>
      </div>
    </div>
  );
}

function SocialLink({
  icon,
  label,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col items-center gap-3"
    >
      <div className="w-14 h-14 rounded-full bg-surface border border-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-background transition-all duration-300">
        {icon}
      </div>
      <span className="text-[10px] font-bold uppercase tracking-widest text-text-secondary group-hover:text-text-primary transition-colors">
        {label}
      </span>
    </a>
  );
}
