import { useParams, useNavigate } from "react-router-dom";
import { allProjects } from "../data/projectsData";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import { motion } from "motion/react";

export default function ProjectDetail() {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const project = allProjects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="max-w-5xl mx-auto py-20 text-center space-y-8">
        <h1 className="text-4xl font-bold">Project Not Found</h1>
        <button
          onClick={() => navigate("/projects")}
          className="inline-flex items-center gap-2 bg-primary text-background px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform"
        >
          <ArrowLeft size={20} />
          Back to Projects
        </button>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="max-w-5xl mx-auto space-y-12 py-10"
    >
      {/* Header */}
      <div className="space-y-6">
        <button
          onClick={() => navigate("/projects")}
          className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors"
        >
          <ArrowLeft size={20} />
          <span className="text-sm font-semibold uppercase tracking-widest">
            Back to Projects
          </span>
        </button>

        <div className="space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">
            {project.date}
          </p>
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter">
            {project.title}
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl">
            {project.shortDescription}
          </p>
        </div>
      </div>

      {/* Main Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.3 }}
        className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </motion.div>

      {/* Project Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Full Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.3 }}
          className="md:col-span-2 bg-surface p-8 rounded-2xl border border-white/5 space-y-6"
        >
          <div>
            <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              {project.fullDescription}
            </p>
          </div>
        </motion.div>

        {/* Sidebar Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.3 }}
          className="space-y-6"
        >
          {/* Project Links */}
          <div className="bg-surface p-6 rounded-2xl border border-white/5 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary">
              Project Links
            </h3>

            {project.webPreview && (
              <a
                href={project.webPreview}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group"
              >
                <ExternalLink
                  size={20}
                  className="text-primary group-hover:scale-110 transition-transform"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold uppercase tracking-widest text-text-secondary">
                    Web Preview
                  </p>
                  <p className="text-sm font-semibold truncate">
                    {project.webPreview.replace("https://", "")}
                  </p>
                </div>
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group"
              >
                <Github
                  size={20}
                  className="text-primary group-hover:scale-110 transition-transform"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold uppercase tracking-widest text-text-secondary">
                    GitHub Repository
                  </p>
                  <p className="text-sm font-semibold truncate">
                    {project.github.split("/").pop()}
                  </p>
                </div>
              </a>
            )}

            {!project.webPreview && !project.github && (
              <p className="text-sm text-text-secondary italic">
                No external links available for this project.
              </p>
            )}
          </div>

          {/* Competencies */}
          <div className="bg-surface p-6 rounded-2xl border border-white/5 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary">
              Competencies
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.competencies.map((comp) => (
                <span
                  key={comp}
                  className="px-3 py-1.5 rounded-full bg-white/5 text-text-secondary text-xs font-semibold hover:bg-white/10 transition-colors"
                >
                  {comp}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.3 }}
        className="p-12 rounded-3xl bg-linear-to-br from-surface to-background border border-white/10 text-center space-y-8"
      >
        <h2 className="text-3xl md:text-4xl font-black">
          Interested in similar projects?
        </h2>
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <a
            href="mailto:rakhaadrian23@gmail.com"
            className="bg-primary text-background px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-lg shadow-primary/20"
          >
            Let's Talk
          </a>
          <button
            onClick={() => navigate("/projects")}
            className="bg-transparent text-text-primary border border-white/20 px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-white/5 transition-colors"
          >
            View More Projects
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
