import React from "react";
import oneImage from "./resources/close.jpg"; // Import the image
import twoImage from "./resources/one.jpg"; // Import another image
import threeImage from "./resources/kawaiii.jpg"; // Import another image

const BirthdaySurprise = ({ onBack }) => {
  return (
    <div style={styles.birthdayBox}>
      <button onClick={onBack} style={styles.backButton}>⬅</button>
      <h1 style={styles.birthdayText}>🎉 HAPPY BIRTHDAYYYYY MY LOVEE!!!! 💕💕🎂💕💕</h1>
      <p style={styles.message}>
        MYYYY BABYY IS 19 NOW MUHEHEHEHHEHEHEHEHE
      </p>
      <div style={styles.imageGrid}>
        <img src={oneImage} alt="My Love 💖" style={styles.image} />
        <img src={twoImage} alt="Celebration" style={styles.image} />
        <img src={threeImage} alt="Memories" style={styles.image} />
      </div>
    </div>
  );
};

// Inline CSS styles
const styles = {
  birthdayBox: {
    position: "relative",
    background: "white",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    maxWidth: "400px",
    textAlign: "center",
  },
  birthdayText: {
    fontSize: "26px",
    color: "#ff4081",
    fontWeight: "bold",
  },
  message: {
    fontSize: "16px",
    color: "#444",
    marginBottom: "15px",
  },
  imageGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))", // Responsive grid
    gap: "10px", // Space between images
    marginTop: "10px",
  },
  image: {
    width: "100%",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
  },
  backButton: {
    position: "absolute",
    top: "0px",
    left: "10px",
    fontSize: "28px",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    color: "#ff6f91",
    padding: "10px",
  },
};

export default BirthdaySurprise;
