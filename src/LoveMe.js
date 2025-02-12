import React from "react";
import cuteVideo from "./resources/cutevid.mp4"; // Import the cute video

const LoveMe = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>To the one who loves me!</h1>
      <video controls style={styles.video}>
        <source src={cuteVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
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
  video: {
    width: "100%", // Adjust as needed
    maxWidth: "400px", // Limit the size of the video
    borderRadius: "12px",
  },
};

export default LoveMe; 