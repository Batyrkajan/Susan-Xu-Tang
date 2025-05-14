"use client";

import { motion } from "framer-motion";

export default function ResearchSection() {
  return (
    <section id="research" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Research Interests
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="prose prose-lg max-w-none text-gray-700"
        >
          <p className="mb-6">
            My primary research interest is public policy, including factors
            that shape public policy, and the effect of policy and institutional
            design on behaviors. Motivated by this interest, my current research
            lies at the intersection of Public Economics, Environmental
            Economics, and Behavioral Economics.
          </p>

          <p className="mb-6">
            My research topics include environmental policy interaction, tax
            competition, the impact of gasoline taxes, and incentive scheme
            design. I explore these topics using diversified methods, including
            spatial econometrics, experimental designs, and theoretical
            modeling.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Public Economics
              </h3>
              <p className="text-gray-700">
                Studying the role of government policies, taxation, and public
                expenditure on economic outcomes.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Environmental Economics
              </h3>
              <p className="text-gray-700">
                Analyzing economic aspects of environmental issues and the
                impact of environmental policies.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Behavioral Economics
              </h3>
              <p className="text-gray-700">
                Examining how psychological, social, and cognitive factors
                influence economic decisions.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
