import React from "react";
import oneImage from "./resources/one.jpg"; // Import the image


const BirthdaySurprise = ({ onBack }) => {
  return (
    <div style={styles.birthdayBox}>
      <button onClick={onBack} style={styles.backButton}>⬅</button>
      <h1 style={styles.birthdayText}>🎉 HAPPY BIRTHDAYYYYY MY LOVEE!!!! 💕💕🎂💕💕</h1>
      <p style={styles.message}>
        MYYYY BABYY IS 19 NOW MUHEHEHEHHEHEHEHEHE
      </p>
      <img 
        src={oneImage} 
        alt="My Love 💖" 
        style={styles.image}
      />
    </div>
  );
};

// Inline CSS styles
const styles = {
  birthdayBox: {
    position: "relative", // Needed to position the back button inside
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
  image: {
    width: "100%",
    maxWidth: "250px",
    borderRadius: "12px",
    marginTop: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
  },
  backButton: {
    position: "absolute",
    top: "0px",
    left: "10px",
    fontSize: "28px", // Increased font size for a bigger button
    background: "transparent",
    border: "none",
    cursor: "pointer",
    color: "#ff6f91",
    padding: "10px", // Added padding to increase clickable area

  },
};

export default BirthdaySurprise;
