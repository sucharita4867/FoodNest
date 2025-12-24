"use client";

import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section className="bg-gradient-to-r from-orange-50 to-orange-100 dark:from-gray-900 dark:to-gray-800 min-h-[80vh] flex items-center">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        
        {/* -------- Text Content -------- */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white leading-tight">
            Welcome to{" "}
            <span className="text-orange-500">FoodNest</span>
          </h1>

          <p className="mt-6 text-gray-600 dark:text-gray-300 text-lg">
            Fresh, delicious & hygienic food made with love and delivered
            straight to your doorstep.
          </p>

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-medium shadow-lg"
          >
            Order Now
          </motion.button>
        </motion.div>

        {/* -------- Image Section -------- */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
            alt="Food Banner"
            className="w-[420px] rounded-3xl shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
