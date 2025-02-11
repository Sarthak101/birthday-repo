// WrappedFavorites.js
import React from "react";
import { motion } from "framer-motion";

const WrappedFavorites = ({ onNext }) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <h1>Your Favorites 🎶📚</h1>
      <p>From music to books, here’s what you loved this year!</p>
    </motion.div>
  );
};

export default WrappedFavorites;