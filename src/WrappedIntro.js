import React from "react";
import { motion } from "framer-motion";
import yourImage from "./resources/mistaghost.jpg";
const WrappedIntro = ({ onNext }) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <h1>THIS IS YOUR WRAPPED THIS YEAR </h1>
      <p>This year was full of memories, failures, fun and lovee. I'm gonna embarass you now HEHEHEHE</p>
      <img src={yourImage} alt="Wrapped memories" style={{ width: '30vh', height: 'auto', borderRadius: '10px' }} />

    </motion.div>
  );
};

export default WrappedIntro;