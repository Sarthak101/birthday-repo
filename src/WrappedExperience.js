import React, { useState } from "react";
import { motion } from "framer-motion";
import Highlights from "./Highlights";
import Favorites from "./Favorites";
import Photos from "./Photos";
import LoveLetter from "./LoveLetter";

const WrappedExperience = () => {
  const [page, setPage] = useState(0);

  const pages = ["Highlights", "Favorites", "Photos", "LoveLetter"];
  const components = [Highlights, Favorites, Photos, LoveLetter];
  const CurrentPage = components[page];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-400 to-orange-300"
    >
      <h1 className="text-4xl font-bold text-white mb-6">Her Year in a Nutshell</h1>
      <CurrentPage />
      <div className="mt-6 flex space-x-4">
        {page > 0 && (
          <button
            onClick={() => setPage(page - 1)}
            className="px-4 py-2 bg-white text-pink-500 rounded-full shadow-lg"
          >
            ⬅ Back
          </button>
        )}
        {page < pages.length - 1 && (
          <button
            onClick={() => setPage(page + 1)}
            className="px-4 py-2 bg-white text-pink-500 rounded-full shadow-lg"
          >
            Next ➡
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default WrappedExperience;