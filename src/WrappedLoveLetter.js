// WrappedLoveLetter.js
import React from "react";
import { motion } from "framer-motion";
import pandaImage from "./resources/hi.jpg"; // Import the panda image

const WrappedLoveLetter = ({ onBack }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={styles.container}
    >
     
      <img src={pandaImage} alt="Panda" style={styles.image} />
      <p style={styles.comicText}>Hehehe, I'm taking over his website!</p>
    </motion.div>
  );
};

// Inline CSS styles
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    textAlign: "center",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    maxWidth: "600px",
    margin: "0 auto",
  },
  title: {
    fontSize: "28px",
    color: "#ff4081",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  message: {
    fontSize: "20px",
    color: "#444",
    marginBottom: "20px",
  },
  image: {
    width: "100%", // Adjust as needed
    maxWidth: "300px", // Limit the size of the image
    borderRadius: "12px",
    marginBottom: "20px",
  },
  comicText: {
    fontSize: "24px",
    color: "#ff4081",
    fontWeight: "bold",
    fontStyle: "italic",
    textAlign: "center",
    backgroundColor: "#fff3cd", // Light background for comic effect
    padding: "10px",
    borderRadius: "8px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
  },
};

export default WrappedLoveLetter;
