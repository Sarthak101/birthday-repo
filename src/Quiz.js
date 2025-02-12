import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Quiz = () => {
  const [score, setScore] = useState(10); // Start with a default score of 10
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSliderChange = (event) => {
    const value = Number(event.target.value);
    setScore(value);
    if (value < 10) {
      setIsAnimating(true); // Trigger animation when value goes below 10
    }
  };

  useEffect(() => {
    if (score < 10) {
      const timer = setTimeout(() => {
        setScore(10); // Automatically animate back to 10
        setIsAnimating(false); // Reset animation state
      }, 500); // Delay before resetting to 10

      return () => clearTimeout(timer); // Cleanup the timer
    }
  }, [score]);

  const handleSubmit = () => {
    setQuizCompleted(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={styles.container}
    >
      {!quizCompleted ? (
        <>
          <h1 style={styles.title}>How was your birthday boyfriend experience? 🎉</h1>
          <div style={styles.sliderContainer}>
            <motion.div
              style={{
                ...styles.slider,
                left: `${(score - 1) * 10}%`, // Position based on score
                transition: isAnimating ? "left 0.5s ease" : "none", // Smooth transition
              }}
            />
            <input
              type="range"
              min="1"
              max="10"
              value={score}
              onChange={handleSliderChange}
              style={styles.rangeInput}
            />
          </div>
          <p style={styles.scoreDisplay}>Selected Score: {score}</p>
          <button style={styles.submitButton} onClick={handleSubmit}>
            Submit
          </button>
        </>
      ) : (
        <h2 style={styles.result}>
          You rated your experience as {score} out of 10!
        </h2>
      )}
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
  sliderContainer: {
    position: "relative",
    width: "100%",
    height: "30px", // Height of the slider container
    marginBottom: "20px",
  },
  slider: {
    position: "absolute",
    top: "0",
    height: "100%",
    width: "10%", // Width of the slider indicator
    backgroundColor: "#ff4081", // Color of the slider indicator
    borderRadius: "5px",
  },
  rangeInput: {
    width: "100%",
    position: "absolute",
    top: "0",
    opacity: 0, // Hide the default range input
    cursor: "pointer",
  },
  scoreDisplay: {
    fontSize: "24px",
    color: "#444",
    marginBottom: "20px",
  },
  submitButton: {
    padding: "10px 20px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#ff4081",
    color: "#fff",
    fontSize: "18px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  result: {
    fontSize: "24px",
    color: "#444",
    fontWeight: "bold",
  },
};

export default Quiz;
