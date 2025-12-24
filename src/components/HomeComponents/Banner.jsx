"use client";

import { motion } from "framer-motion";

export default function FoodNestBanner() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center bg-gradient-to-br from-orange-100 via-white to-orange-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      {/* 🔮 Background Blobs */}
      <div className="absolute top-[-120px] left-[-120px] w-[300px] h-[300px] bg-orange-400 opacity-30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-[300px] h-[300px] bg-yellow-400 opacity-20 blur-3xl rounded-full"></div>

      <div className="relative container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* 🧠 Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <span className="inline-block mb-4 px-5 py-1 rounded-full bg-orange-100 text-orange-600 text-sm font-semibold dark:bg-orange-500/10 dark:text-orange-400">
            🍕 Premium Food Delivery
          </span>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900 dark:text-white">
            Discover the
            <span className="block text-orange-500 mt-2">
              Taste of FoodNest
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-lg">
            Experience chef-crafted meals, lightning-fast delivery and flavors
            that make every bite unforgettable.
          </p>

          <div className="mt-10 flex gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-xl"
            >
              Order Now
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-8 py-4 rounded-full border border-orange-500 text-orange-500 dark:text-orange-400 hover:bg-orange-500 hover:text-white transition"
            >
              View Menu
            </motion.button>
          </div>
        </motion.div>

        {/* 🍔 Right Image Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="relative flex justify-center"
        >
          {/* Glass Card */}
          <div className="backdrop-blur-xl bg-white/40 dark:bg-white/10 rounded-3xl p-6 shadow-2xl">
            <motion.img
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
              alt="Food"
              className="w-[420px] rounded-2xl"
            />
          </div>

          {/* Floating Badge */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="absolute -bottom-6 left-10 bg-white dark:bg-gray-800 px-5 py-3 rounded-xl shadow-lg"
          >
            ⭐ 4.9 Rating
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
