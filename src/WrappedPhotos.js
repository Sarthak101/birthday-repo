// WrappedPhotos.js
import React from "react";
import { motion } from "framer-motion";

const WrappedPhotos = ({ onNext }) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <h1>Captured Memories 📸</h1>
      <p>Here are some of the best moments we captured together.</p>
    </motion.div>
  );
};

export default WrappedPhotos;
