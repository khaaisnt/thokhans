import React from "react";
import { NavLink } from "react-router-dom";
import {
  Home,
  Search,
  Briefcase,
  User,
  Mail,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface SidebarItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
}

const SidebarItem = ({ to, icon, label }: SidebarItemProps) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center gap-4 px-4 py-2 transition-colors duration-200 rounded-lg group ${
        isActive
          ? "text-primary"
          : "text-text-secondary hover:text-text-primary"
      }`
    }
  >
    {icon}
    <span className="font-semibold">{label}</span>
  </NavLink>
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-background">
      {/* Desktop Sidebar */}
      <aside className="fixed top-0 left-0 hidden h-full w-72 flex-col bg-black p-6 md:flex">
        <div className="mb-10">
          <h1 className="text-2xl font-bold tracking-tighter">Thokhans</h1>
          <p className="text-sm text-text-secondary">Portfolio</p>
        </div>

        <nav className="flex flex-col gap-2">
          <SidebarItem to="/" icon={<Home size={24} />} label="Home" />
          <SidebarItem
            to="/search"
            icon={<Search size={24} />}
            label="Search"
          />
          <SidebarItem
            to="/projects"
            icon={<Briefcase size={24} />}
            label="Projects"
          />
          <SidebarItem to="/about" icon={<User size={24} />} label="About" />
          <SidebarItem
            to="/contact"
            icon={<Mail size={24} />}
            label="Contact"
          />
        </nav>

        <div className="mt-auto flex items-center gap-3 p-4 bg-surface rounded-xl">
          <img
            src="src/assets/profile-pict.png"
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="overflow-hidden">
            <p className="text-sm font-bold truncate">
              Rakha Adrian Nur Tanaya
            </p>
            <p className="text-[10px] uppercase tracking-widest text-text-secondary">
              Available for hire
            </p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-72 pb-24 md:pb-0">
        {/* Header */}
        <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-md px-6 py-4 flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <div className="hidden md:flex gap-2">
              <button className="w-8 h-8 rounded-full bg-black/40 flex items-center justify-center text-text-primary hover:bg-black/60 transition-colors">
                <ChevronLeft size={20} />
              </button>
              <button className="w-8 h-8 rounded-full bg-black/40 flex items-center justify-center text-text-primary hover:bg-black/60 transition-colors">
                <ChevronRight size={20} />
              </button>
            </div>
            <h2 className="md:hidden text-lg font-bold">Thokhans</h2>
          </div>
          <a
            href="mailto:rakhaadrian23@gmail.com"
            className="inline-block bg-text-primary text-background px-6 py-2 rounded-full font-bold text-sm hover:scale-105 transition-transform"
          >
            Connect
          </a>
        </header>

        <div className="px-6 pb-10">{children}</div>
      </main>

      {/* Mobile Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 h-20 bg-surface border-t border-white/10 flex justify-around items-center px-4 md:hidden z-50">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 ${isActive ? "text-primary" : "text-text-secondary"}`
          }
        >
          <Home size={24} />
          <span className="text-[10px] uppercase font-bold">Home</span>
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 ${isActive ? "text-primary" : "text-text-secondary"}`
          }
        >
          <Briefcase size={24} />
          <span className="text-[10px] uppercase font-bold">Projects</span>
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 ${isActive ? "text-primary" : "text-text-secondary"}`
          }
        >
          <User size={24} />
          <span className="text-[10px] uppercase font-bold">About</span>
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 ${isActive ? "text-primary" : "text-text-secondary"}`
          }
        >
          <Mail size={24} />
          <span className="text-[10px] uppercase font-bold">Contact</span>
        </NavLink>
      </nav>
    </div>
  );
}
