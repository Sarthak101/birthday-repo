import React from "react";
import sleepygirlImage from "./resources/sleepygirl.jpg"; // Import the sleepygirl image
import sleepyImage from "./resources/sleepy.jpg"; // Import the sleepy image

const LoveSleeping = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>To the one who loves sleeping!</h1>
      <div style={styles.imageContainer}>
        <img src={sleepygirlImage} alt="Sleepy Girl" style={styles.image} />
        <img src={sleepyImage} alt="Sleepy" style={styles.image} />
      </div>
    </div>
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
  imageContainer: {
    display: "flex", // Use flexbox to align images side by side
    justifyContent: "center", // Center the images
    gap: "10px", // Add space between images
  },
  image: {
    width: "50%", // Make the image responsive
    maxWidth: "300px", // Limit the size of the image for phone displays
    height: "auto", // Maintain aspect ratio
    borderRadius: "12px",
  },
};

export default LoveSleeping; 