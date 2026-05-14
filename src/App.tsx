/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/projects"
            element={
              <RouteTransition>
                <Projects />
              </RouteTransition>
            }
          />
          <Route
            path="/projects/:projectId"
            element={
              <RouteTransition>
                <ProjectDetail />
              </RouteTransition>
            }
          />
          <Route
            path="/about"
            element={
              <RouteTransition>
                <About />
              </RouteTransition>
            }
          />
          <Route
            path="/contact"
            element={
              <RouteTransition>
                <Contact />
              </RouteTransition>
            }
          />
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

import { motion } from "motion/react";
import { ReactNode } from "react";

function RouteTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
