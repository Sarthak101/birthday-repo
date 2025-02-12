import React from "react";
import { motion } from "framer-motion";
import secretImage from "./resources/panda1.jpg"; // Import your desired image

const Panda2 = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={styles.container}
    >
      <h1 style={styles.title}>Wanna know a secret? 🤫</h1>
      <img src={secretImage} alt="Secret" style={styles.image} />
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
    background: "white",
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
  image: {
    width: "100%", // Adjust as needed
    maxWidth: "300px", // Limit the size of the image
    borderRadius: "12px",
  },
};

export default Panda2; 