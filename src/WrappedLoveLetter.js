
// WrappedLoveLetter.js
import React from "react";
import { motion } from "framer-motion";

const WrappedLoveLetter = ({ onBack }) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <h1>My Love Letter to You ❤️</h1>
      <p>Words can’t describe how much I love and appreciate you.</p>
    </motion.div>
  );
};

export default WrappedLoveLetter;
