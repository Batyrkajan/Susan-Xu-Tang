"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Environmental Policy Interaction",
      description:
        "Research on how different environmental policies interact with each other and their cumulative effects on economic behavior.",
      image: "/images/project1.jpg",
      tags: ["Environmental Economics", "Policy Analysis", "Econometrics"],
      year: "2022",
    },
    {
      id: 2,
      title: "Tax Competition Analysis",
      description:
        "Analyzing how tax competition between jurisdictions affects economic outcomes and public service provision.",
      image: "/images/project2.jpg",
      tags: ["Public Economics", "Tax Policy", "Game Theory"],
      year: "2021",
    },
    {
      id: 3,
      title: "Gasoline Tax Impact Study",
      description:
        "Empirical study on the impact of gasoline taxes on consumer behavior, environmental outcomes, and revenue generation.",
      image: "/images/project3.jpg",
      tags: [
        "Environmental Economics",
        "Public Finance",
        "Behavioral Economics",
      ],
      year: "2020",
    },
  ];

  return (
    <main className="min-h-screen">
      <Header />
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              Research Projects
            </h1>
            <div className="h-1 w-20 bg-blue-600 mx-auto"></div>
            <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
              Here are some of my current and past research projects. My work
              focuses on the intersection of public policy, environmental
              economics, and behavioral economics.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
              >
                <div className="h-48 bg-blue-100 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-16 w-16 text-blue-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-blue-600">
                      {project.year}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
