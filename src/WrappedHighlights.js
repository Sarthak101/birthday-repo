import React from "react";
import { motion } from "framer-motion";

const animes = [
  {
    title: "Kimi ni Todoke",
    poster: "https://m.media-amazon.com/images/I/61b23fIEsSL.jpg",
  },
  {
    title: "Kamisama Kiss",
    poster: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781421552668/kamisama-kiss-vol-13-9781421552668_hr.jpg",
  },
  {
    title: "Steins;Gate",
    poster: "https://m.media-amazon.com/images/M/MV5BZjI1YjZiMDUtZTI3MC00YTA5LWIzMmMtZmQ0NTZiYWM4NTYwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  },
  {
    title: "Bungou Stray Dogs",
    poster: "https://m.media-amazon.com/images/M/MV5BYzA5Y2MzNDAtZjBjZi00OTUzLWI5NDAtMTg1ODRhMmU2MGY3XkEyXkFqcGc@._V1_.jpg",
  },
  {
    title: "Yakuza's Fiancée",
    poster: "https://m.media-amazon.com/images/M/MV5BNGQzZWU5ZTUtNTEzYy00NjA4LTgxOWQtOTNmNjIzMzFlZGE3XkEyXkFqcGc@._V1_.jpg",
  },
  {
    title: "Sakamoto Days",
    poster: "https://upload.wikimedia.org/wikipedia/en/c/c8/Sakamoto_Days_manga_volume_1.jpg",
  },
];

const WrappedHighlights = ({ onNext }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={styles.container}
    >
      <h1 style={styles.heading}>📺 Animes Watched This Year 🎉</h1>
      <div style={styles.grid}>
        {animes.map((anime, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={styles.card}
          >
            <img src={anime.poster} alt={anime.title} style={styles.image} />
            <p style={styles.title}>{anime.title}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    color: "#fff",
    maxWidth: "100%",
    overflowX: "hidden",
  },
  heading: {
    fontSize: "22px",
    marginBottom: "15px",
    padding: "0 10px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", // Adjusts better for mobile
    gap: "12px",
    justifyContent: "center",
    padding: "0 10px",
  },
  card: {
    background: "rgba(255, 255, 255, 0.15)",
    borderRadius: "12px",
    padding: "8px",
    backdropFilter: "blur(8px)",
    transition: "all 0.3s ease",
    textAlign: "center",
  },
  image: {
    width: "100%",
    borderRadius: "8px",
    objectFit: "cover",
  },
  title: {
    marginTop: "8px",
    fontSize: "14px",
    fontWeight: "bold",
    whiteSpace: "nowrap", // Prevents breaking but ensures good spacing
    overflow: "hidden",
    textOverflow: "ellipsis", // Adds "..." if text overflows
  },
};

export default WrappedHighlights;
