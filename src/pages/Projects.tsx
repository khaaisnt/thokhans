import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { allProjects } from "../data/projectsData";

const categories = ["All", "Frontend Development"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory);

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold">Your Projects</h2>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                activeCategory === category
                  ? "bg-text-primary text-background"
                  : "bg-surface text-text-secondary hover:bg-surface-hover hover:text-text-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard 
            key={project.id} 
            id={project.id}
            title={project.title}
            description={project.shortDescription}
            image={project.image}
          />
        ))}
      </div>
    </div>
  );
}
