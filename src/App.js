import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BirthdaySurprise from "./BirthdaySurprise";
import WrappedIntro from "./WrappedIntro";
import WrappedHighlights from "./WrappedHighlights";
import WrappedFavorites from "./WrappedFavorites";
import WrappedPhotos from "./WrappedPhotos";
import WrappedLoveLetter from "./WrappedLoveLetter";
import Panda2 from "./Panda2";
import Panda3 from "./Panda3";
import Final from "./final";
import HBD from "./HBD";
import CupNoodles from "./CupNoodles";
import AdorableSmile from "./AdorableSmile";
import Eating from "./Eating";
import LoveSleeping from "./LoveSleeping";
import Love from "./Love";
import LoveMe from "./LoveMe";
import LoveLetter from "./LoveLetter";
const pages = [
  BirthdaySurprise,
  WrappedIntro,
  WrappedHighlights,
  WrappedFavorites,
  WrappedPhotos,
  WrappedLoveLetter,
  Panda2,
  Panda3,
  HBD,
  CupNoodles,
  AdorableSmile,
  Eating,
  LoveSleeping,
  Love,
  LoveMe,
  LoveLetter,
  Final,
];

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const audioRef = useRef(new Audio(require("./resources/music.mp4")));

  const handleLogin = () => {
    if (username === "DakuChowmein" && password === "InuIsFood") {
      setIsLoggedIn(true);
    } else {
      alert("❌ Invalid Credentials!");
    }
  };

  const handleBack = () => {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
    setCurrentPage(0);
  };

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePlayMusic = () => {
    audioRef.current.play();
  };

  const CurrentComponent = pages[currentPage];

  return (
    <div style={styles.container}>
      {!isLoggedIn ? (
        <motion.div
          style={styles.loginBox}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 style={styles.heading}>🎂 Login for a Surprise! HEHE🎁</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
          <button onClick={handleLogin} style={styles.button}>Login</button>
        </motion.div>
      ) : (
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <CurrentComponent onBack={handleBack} onPlayMusic={handlePlayMusic} />
            <div style={styles.navButtons}>
              {currentPage > 0 && <button onClick={prevPage} style={styles.button}>⬅ Back</button>}
              {currentPage < pages.length - 1 && <button onClick={nextPage} style={styles.button}>Next ➡</button>}
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "linear-gradient(135deg, #ffafbd, #ffc3a0)",
    textAlign: "center",
    padding: "20px",
  },
  loginBox: {
    width: "90%",
    maxWidth: "350px",
    background: "white",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    boxSizing: "border-box",
  },
  heading: {
    marginBottom: "15px",
    fontSize: "18px",
    color: "#ff6f91",
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    border: "1px solid #ff6f91",
    borderRadius: "8px",
    fontSize: "16px",
    boxSizing: "border-box",  // Fixes overflow
  },
  button: {
    width: "100%", // Full width for better mobile experience
    padding: "12px",
    background: "#ff6f91",
    border: "none",
    color: "white",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "10px",
    boxSizing: "border-box",
    
  },
  navButtons: {
    marginTop: "15px",
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    
  },
};

export default App;
