"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import {
  FaAward,
  FaNewspaper,
  FaGraduationCap,
  FaBriefcase,
} from "react-icons/fa";

export default function MorePage() {
  const awards = [
    {
      id: 1,
      title: "Excellence in Teaching Award",
      organization: "Arizona State University",
      year: "2022",
      description:
        "Awarded for outstanding teaching performance and student mentorship.",
    },
    {
      id: 2,
      title: "Best Paper Award",
      organization: "Environmental Economics Conference",
      year: "2021",
      description:
        'Awarded for the paper "The Impact of Gasoline Taxes on Consumer Behavior".',
    },
    {
      id: 3,
      title: "Research Grant",
      organization: "National Science Foundation",
      year: "2020",
      description:
        "Received a $150,000 grant for research on environmental policy interaction.",
    },
  ];

  const publications = [
    {
      id: 1,
      title: "Environmental Policy Interaction: A Spatial Analysis",
      journal: "Journal of Environmental Economics",
      year: "2022",
      authors: "Tang, S.X., Johnson, M., Smith, A.",
    },
    {
      id: 2,
      title: "Tax Competition and Public Service Provision",
      journal: "Public Finance Review",
      year: "2021",
      authors: "Tang, S.X., Williams, R.",
    },
    {
      id: 3,
      title:
        "Gasoline Taxes and Consumer Behavior: Evidence from State-Level Policy Changes",
      journal: "American Economic Journal: Economic Policy",
      year: "2020",
      authors: "Tang, S.X., Garcia, J., Brown, T.",
    },
  ];

  const education = [
    {
      id: 1,
      degree: "Ph.D. in Economics",
      institution: "Georgia State University",
      year: "2019",
      description:
        'Dissertation: "Essays on Environmental Policy and Tax Competition"',
    },
    {
      id: 2,
      degree: "M.A. in Economics",
      institution: "University of California, Los Angeles",
      year: "2014",
      description: "Focus on Public Economics and Econometrics",
    },
    {
      id: 3,
      degree: "B.A. in Economics",
      institution: "Peking University",
      year: "2012",
      description: "Minor in Mathematics",
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
              More About Me
            </h1>
            <div className="h-1 w-20 bg-blue-600 mx-auto"></div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-16"
          >
            <div className="flex items-center mb-8">
              <FaGraduationCap className="h-8 w-8 text-blue-600 mr-4" />
              <h2 className="text-2xl font-bold text-gray-900">Education</h2>
            </div>

            <div className="space-y-8">
              {education.map((item, index) => (
                <div
                  key={item.id}
                  className="relative pl-8 border-l-2 border-blue-200"
                >
                  <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-blue-600"></div>
                  <div className="mb-1 text-sm font-medium text-blue-600">
                    {item.year}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.degree}
                  </h3>
                  <p className="text-gray-700">{item.institution}</p>
                  <p className="text-gray-600 mt-2">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Publications Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-16"
          >
            <div className="flex items-center mb-8">
              <FaNewspaper className="h-8 w-8 text-blue-600 mr-4" />
              <h2 className="text-2xl font-bold text-gray-900">Publications</h2>
            </div>

            <div className="space-y-6">
              {publications.map((pub) => (
                <div
                  key={pub.id}
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {pub.title}
                  </h3>
                  <p className="text-gray-700 mb-1">
                    <span className="font-medium">Authors:</span> {pub.authors}
                  </p>
                  <p className="text-gray-700 mb-1">
                    <span className="font-medium">Journal:</span> {pub.journal}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-medium">Year:</span> {pub.year}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Awards Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-center mb-8">
              <FaAward className="h-8 w-8 text-blue-600 mr-4" />
              <h2 className="text-2xl font-bold text-gray-900">
                Awards & Honors
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {awards.map((award) => (
                <div key={award.id} className="bg-blue-50 p-6 rounded-lg">
                  <div className="text-sm font-medium text-blue-600 mb-2">
                    {award.year}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {award.title}
                  </h3>
                  <p className="text-gray-700 mb-3">{award.organization}</p>
                  <p className="text-gray-600 text-sm">{award.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
