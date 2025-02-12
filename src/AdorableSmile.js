import React from "react";
import closeImage from "./resources/close.jpg"; // Import the close image

const AdorableSmile = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>To the one with the most adorable smile!</h1>
      <img src={closeImage} alt="Adorable Smile" style={styles.image} />
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
  image: {
    width: "100%", // Adjust as needed
    maxWidth: "400px", // Limit the size of the image
    borderRadius: "12px",
  },
};

export default AdorableSmile; 