// WrappedFavorites.js
import React from "react";
import { motion } from "framer-motion";
import yourImage from "./resources/start.jpg";

const WrappedFavorites = ({ onNext }) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <h1>It all started with a fateful day</h1>
      <img src={yourImage} alt="Wrapped memories" style={{ width: '30vh', height: 'auto', borderRadius: '10px' }} />
      <p style={{ 
        fontSize: '1.5em', 
        color: '#FF69B4', // Light pink color for a cute look
        lineHeight: '1.6', 
        margin: '15px 0', 
        padding: '10px', // Added padding for a softer feel
        backgroundColor: '#FFF0F5', // Light lavender background
        borderRadius: '8px' // Rounded corners for a cuter appearance
      }}>
        An exam went wrong, we cried together, thought so much our brens fell off, gave another exam and reached a lovely place
      </p>
    </motion.div>
    
  );
};

export default WrappedFavorites;