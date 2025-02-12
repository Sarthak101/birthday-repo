import React, { useState } from "react";
import { motion } from "framer-motion";
import marriageImage from "./resources/dulhan.jpg"; // Import your desired image

const Final = () => {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [message, setMessage] = useState(""); // Store a single message
  const [showMessage, setShowMessage] = useState(false);
  const [showLoveMessage, setShowLoveMessage] = useState(false); // State to show love message and image

  const handleYesClick = () => {
    setShowLoveMessage(true); // Show the love message and image
  };

  const handleNoClick = () => {
    // Get the viewport dimensions
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Randomly position the "No" button
    const randomX = Math.floor(Math.random() * (viewportWidth - 100)) - (viewportWidth / 2 - 50); // Random x position
    const randomY = Math.floor(Math.random() * (viewportHeight - 100)) - (viewportHeight / 2 - 50); // Random y position

    // Ensure the button stays within the visible screen
    const newX = Math.max(-150, Math.min(randomX, viewportWidth - 100)); // Limit x position
    const newY = Math.max(-150, Math.min(randomY, viewportHeight - 100)); // Limit y position

    // Animate the button away
    setNoButtonPosition({ x: newX, y: newY });

    // Add a playful message
    const newMessages = [
      "Hehehehe!",
      "Can't escapee!",
      "Ju mine!",
    ];
    const randomMessage = newMessages[Math.floor(Math.random() * newMessages.length)];
    setMessage(randomMessage);
    setShowMessage(true);

    // Hide message after a short duration
    setTimeout(() => {
      setShowMessage(false);
    }, 1500); // Message disappears after 1.5 seconds
  };

  return (
    <div style={styles.container}>
      {showLoveMessage ? ( // Conditional rendering based on the state
        <div style={styles.loveContainer}>
          <img src={require('./resources/cuteme.jpg')} alt="Cute" style={styles.loveImage} />
          <h1 style={styles.loveText}> I love you</h1>
          <p >this pic kinda funny💀</p>
        </div>
      ) : (
        <>
          <h1 style={styles.title}>Wan marry? 💍</h1>
          <img src={marriageImage} alt="Cute" style={styles.loveImage} />

          <div style={styles.buttonContainer}>
            <button onClick={handleYesClick} style={styles.yesButton}>Yes</button>
            <motion.button
              onClick={handleNoClick}
              style={{ ...styles.noButton, position: "relative" }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }} // Slightly shrink on tap
              animate={{ x: noButtonPosition.x, y: noButtonPosition.y }} // Smooth glide effect
              transition={{ type: "spring", stiffness: 300 }} // Smooth transition
            >
              No
            </motion.button>
          </div>
          {showMessage && (
            <div style={styles.toastContainer}>
              <div style={styles.toast}>{message}</div>
            </div>
          )}
        </>
      )}
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
    background: "#f9f9f9",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    maxWidth: "600px",
    margin: "0 auto",
    position: "relative", // Ensure the container is positioned relative for absolute positioning of buttons
  },
  title: {
    fontSize: "28px",
    color: "#ff4081",
    marginBottom: "20px",
  },
  buttonContainer: {
    display: "flex", // Use flexbox to position buttons side by side
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  yesButton: {
    padding: "10px 20px",
    fontSize: "18px",
    color: "#fff",
    backgroundColor: "#4CAF50",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginRight: "20px",
  },
  noButton: {
    padding: "10px 20px",
    fontSize: "18px",
    color: "#fff",
    backgroundColor: "#f44336",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  toastContainer: {
    position: "absolute",
    top: "20px", // Position at the top of the screen
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 1000, // Ensure it appears above other elements
  },
  toast: {
    background: "#ffeb3b", // Soft yellow background
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "10px",
    margin: "5px 0",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    fontSize: "18px",
    color: "#333",
    animation: "fadeIn 0.5s ease-in-out, fadeOut 0.5s ease-in-out 1s", // Fade in and out
    fontFamily: "'Quicksand', sans-serif", // Cute font for the toast
  },
  loveContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  loveImage: {
    width: "300px", // Adjust the size as needed
    borderRadius: "10px",
    marginBottom: "20px",
  },
  loveText: {
    fontSize: "36px",
    color: "#ff4081",
    fontWeight: "bold",
  },
};

export default Final;
