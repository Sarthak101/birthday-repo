// WrappedPhotos.js
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const WrappedPhotos = () => {
  const [cupNoodles, setCupNoodles] = useState(0);
  const [friends, setFriends] = useState(0);
  const [lectures, setLectures] = useState(0);
  const [relationship, setRelationship] = useState(0);
  const [kisses, setKisses] = useState(0);
  const [hugs, setHugs] = useState(0);

  useEffect(() => {
    const counters = [
      { setter: setCupNoodles, target: 78 },
      { setter: setFriends, target: 4 },
      { setter: setLectures, target: 99999999 },
      { setter: setRelationship, target: 1 },
      { setter: setKisses, target: 1000 },
      { setter: setHugs, target: 10000 },
    ];

    counters.forEach(({ setter, target }) => {
      let count = 0;
      const increment = Math.ceil(target / 100); // Increment value for smoother counting
      const interval = setInterval(() => {
        if (count < target) {
          count += increment; // Increment by a calculated value
          if (count > target) count = target; // Ensure it doesn't exceed the target
          setter(count);
        } else {
          clearInterval(interval);
        }
      }, 10); // Adjust speed of counting here
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={styles.container}
    >
      <h1 style={styles.title}>Since your last birthday...</h1>
      <div style={styles.content}>
        <p style={styles.text}>You've had <span style={styles.number}>{cupNoodles}</span> cup noodles 🍜</p>
        <p style={styles.text}>You've made <span style={styles.number}>{friends}</span> really good friends 👯‍♂️</p>
        <p style={styles.text}>You've missed <span style={styles.number}>{lectures.toLocaleString()}</span> morning lectures 📚</p>
        <p style={styles.text}>You've had <span style={styles.number}>{relationship}</span> relationship 💖</p>
        <p style={styles.text}>Kissed <span style={styles.number}>{kisses}</span>+ times UwU 😘</p>
        <p style={styles.text}>Hugged <span style={styles.number}>{hugs}</span>+ times UWU 🤗</p>
      </div>
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
    background: "linear-gradient(135deg, #ffafbd, #ffc3a0)", // Soft background
    padding: "20px",
    textAlign: "center",
    color: "#444",
    margin: "0 auto", // Center the container
    maxWidth: "600px", // Optional: Set a max width for better readability
  },
  content: {
    width: "100%", // Ensure it takes full width
  },
  title: {
    fontSize: "28px",
    color: "#ff4081",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  text: {
    fontSize: "20px",
    color: "#444",
    lineHeight: "1.5",
    margin: "10px 0",
  },
  number: {
    fontWeight: "bold",
    color: "#ff4081", // Highlight the numbers
    fontSize: "24px",
  },
};

export default WrappedPhotos;
