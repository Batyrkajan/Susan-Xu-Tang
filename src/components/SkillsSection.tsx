"use client";

import { motion } from "framer-motion";
import { FaCode, FaChartBar, FaDatabase } from "react-icons/fa";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Technical Skills
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-sm"
          >
            <div className="flex items-center justify-center mb-6">
              <FaCode className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-center text-gray-900 mb-4">
              Programming Languages
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center">
                <span className="w-24 font-medium">Java:</span>
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </li>
              <li className="flex items-center">
                <span className="w-24 font-medium">Python:</span>
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </li>
              <li className="flex items-center">
                <span className="w-24 font-medium">JavaScript:</span>
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </li>
              <li className="flex items-center">
                <span className="w-24 font-medium">Go:</span>
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-sm"
          >
            <div className="flex items-center justify-center mb-6">
              <FaChartBar className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-center text-gray-900 mb-4">
              Data Analysis
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center">
                <span className="w-24 font-medium">Causal Inference:</span>
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: "95%" }}
                  ></div>
                </div>
              </li>
              <li className="flex items-center">
                <span className="w-24 font-medium">Supervised Learning:</span>
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </li>
              <li className="flex items-center">
                <span className="w-24 font-medium">Unsupervised Learning:</span>
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </li>
              <li className="flex items-center">
                <span className="w-24 font-medium">LLM:</span>
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </li>
              <li className="flex items-center">
                <span className="w-24 font-medium">A/B Testing:</span>
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-sm"
          >
            <div className="flex items-center justify-center mb-6">
              <FaDatabase className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-center text-gray-900 mb-4">
              Databases and Cloud
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center">
                <span className="w-24 font-medium">MySQL:</span>
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </li>
              <li className="flex items-center">
                <span className="w-24 font-medium">Apache Spark:</span>
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </li>
              <li className="flex items-center">
                <span className="w-24 font-medium">AWS EC2:</span>
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </li>
              <li className="flex items-center">
                <span className="w-24 font-medium">GCP:</span>
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </li>
              <li className="flex items-center">
                <span className="w-24 font-medium">Elasticsearch:</span>
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
