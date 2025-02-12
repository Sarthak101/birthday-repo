import React from "react";
import { motion } from "framer-motion";
import pandacloseImage from "./resources/pandaclose.jpg"; // Import the panda close image

const Panda3 = ({ onPlayMusic }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={styles.container}
    >
      <h1 style={styles.title}>Close your eyes then hehehehe! 🤫</h1>
      <img src={pandacloseImage} alt="Panda Close" style={styles.image} />
      <button style={styles.button} onClick={onPlayMusic}>
        ITS CLOSEDDD
      </button>
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
    marginBottom: "20px",
  },
  button: {
    padding: "10px 20px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#ff4081",
    color: "#fff",
    fontSize: "18px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
};

export default Panda3; 