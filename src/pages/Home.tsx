import { motion } from "motion/react";
import ProjectCard from "../components/ProjectCard";
import { allProjects } from "../data/projectsData";

// Get first 5 projects as featured
const featuredProjects = allProjects.slice(0, 5);

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative h-75 md:h-100 rounded-2xl overflow-hidden bg-linear-to-br from-primary/20 to-black p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 border border-white/5">
        <div className="relative z-10 w-full md:w-1/3 aspect-square shadow-2xl rounded-xl overflow-hidden border border-white/10">
          <img
            src="/profile-pict.png"
            alt="Rakha Adrian"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center md:text-left flex-1 space-y-4">
          <p className="text-sm font-bold uppercase tracking-widest text-text-primary">
            Profile
          </p>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">
            Rakha Adrian Nur Tanaya
          </h1>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm mt-5 text-text-secondary font-semibold">
            <span>Frontend Engineer</span>
            <span>•</span>
            <span>9 Projects Completed</span>
            <span>•</span>
            <span>Available for Hire</span>
          </div>
        </div>
        {/* Background Decorative elements */}
        <div className="absolute top-0 right-0 w-full h-full bg-linear-to-t from-background via-transparent to-transparent z-0" />
      </section>

      {/* Featured Works */}
      <section className="space-y-6">
        <div className="flex justify-between items-end px-2">
          <h2 className="text-2xl font-bold">Featured Works</h2>
          <a href="/projects">
            <button className="text-xs font-bold uppercase tracking-widest cursor-pointer text-text-secondary hover:text-text-primary transition-colors">
              Show All
            </button>
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.shortDescription}
              image={project.image}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
