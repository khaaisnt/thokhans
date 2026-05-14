import { Play } from "lucide-react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
}

export default function ProjectCard({
  id,
  title,
  description,
  image,
}: ProjectCardProps) {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onClick={() => navigate(`/projects/${id}`)}
      className="group relative bg-surface p-4 rounded-xl hover:bg-surface-hover transition-all duration-300 cursor-pointer"
    >
      <div className="relative aspect-square mb-4 overflow-hidden rounded-lg shadow-2xl">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute bottom-4 right-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-xl translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <Play size={24} fill="currentColor" className="text-background" />
        </div>
      </div>
      <h3 className="font-bold text-lg mb-1 truncate">{title}</h3>
      <p className="text-text-secondary text-sm line-clamp-2 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
