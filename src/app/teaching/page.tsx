"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import {
  FaBook,
  FaChalkboardTeacher,
  FaUsers,
  FaFileAlt,
} from "react-icons/fa";

export default function TeachingPage() {
  const courses = [
    {
      id: 1,
      code: "ECON 301",
      title: "Intermediate Microeconomics",
      description:
        "This course covers consumer and producer theory, market structures, and welfare economics.",
      semester: "Fall 2022, Spring 2023",
      materials: ["Syllabus", "Lecture Notes", "Problem Sets"],
    },
    {
      id: 2,
      code: "ECON 425",
      title: "Environmental Economics",
      description:
        "This course examines the economic aspects of environmental issues and policies.",
      semester: "Spring 2022, Fall 2023",
      materials: ["Syllabus", "Case Studies", "Project Guidelines"],
    },
    {
      id: 3,
      code: "ECON 211",
      title: "Principles of Macroeconomics",
      description: "An introduction to macroeconomic principles and analysis.",
      semester: "Fall 2021, Spring 2022",
      materials: ["Syllabus", "Lecture Notes", "Exam Reviews"],
    },
  ];

  const teachingPhilosophy = `
    My teaching philosophy centers on fostering critical thinking and analytical skills through active learning. 
    I believe in creating an inclusive classroom environment where students feel comfortable engaging with complex 
    economic concepts and applying them to real-world scenarios. My goal is not only to help students master 
    economic theory but also to develop their ability to think like economists when analyzing policy issues 
    and making decisions in their professional and personal lives.
  `;

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
              Teaching
            </h1>
            <div className="h-1 w-20 bg-blue-600 mx-auto"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-16"
          >
            <div className="bg-blue-50 rounded-lg p-8">
              <div className="flex items-center mb-4">
                <FaChalkboardTeacher className="h-8 w-8 text-blue-600 mr-4" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Teaching Philosophy
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {teachingPhilosophy}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Courses</h2>

            <div className="space-y-8">
              {courses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
                >
                  <div className="p-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                        <FaBook className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="ml-5">
                        <div className="flex items-center mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">
                            {course.code}: {course.title}
                          </h3>
                          <span className="ml-4 px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            {course.semester}
                          </span>
                        </div>
                        <p className="text-gray-700 mb-4">
                          {course.description}
                        </p>

                        <div className="mt-4">
                          <h4 className="text-sm font-medium text-gray-900 mb-2 flex items-center">
                            <FaFileAlt className="h-4 w-4 text-gray-500 mr-2" />
                            Course Materials
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {course.materials.map((material) => (
                              <button
                                key={material}
                                className="inline-flex items-center px-3 py-1 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                              >
                                {material}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-12 bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 p-6"
            >
              <div className="flex items-center mb-4">
                <FaUsers className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">
                  Student Advising
                </h3>
              </div>
              <p className="text-gray-700">
                I am available for academic advising and mentoring for students
                interested in economics research, graduate school applications,
                or career paths in economics. Please email me to schedule an
                appointment.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
