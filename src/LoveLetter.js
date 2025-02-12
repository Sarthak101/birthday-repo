import React from "react";

const LoveLetter = () => {
  return (
    <div style={styles.container}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&display=swap');
          body {
            font-family: 'Quicksand', sans-serif;
          }
        `}
      </style>
      <h1 style={styles.title}>My lovely DakuChowmein,</h1>
      <p style={styles.paragraph}>
       This is a day where we celebrate who you are. Prachi, as a person. I love her so much, From a Black Cat to a husky, Crysanthemums to Tokyo and even Osaka, I can see you in many things.
      </p>
      <p style={styles.paragraph}>
        From the crossroads, to a drop year, to meeting for the first time, to getting to bits, we've been together and it's been wonderful with you. I want not just this day but the rest of your life to have the love, peace and happiness.From CC to crochet, lets enjoy everything coming to the fullest :)))
        
      </p>
      <p style={styles.paragraph}>
        Happy Birthday, my love! May this year bring you as much happiness as you have given me.
        I love you more than words can express.
      </p>
      <p style={styles.signature}>With all my love,</p>
      <p style={styles.signature}>Sarthak (Shori no Otto)</p>
    </div>
  );
};

// Inline CSS styles
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "20px",
    textAlign: "left",
    background: "#f9f9f9", // Light background to resemble paper
    border: "1px solid #ccc", // Light border
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    maxWidth: "600px",
    margin: "0 auto",
    fontFamily: "'Quicksand', sans-serif", // Quicksand font for a friendly appearance
  },
  title: {
    fontSize: "28px", // Font size for the title
    color: "#ff4081",
    fontWeight: "700", // Bold weight for the title
    marginBottom: "10px",
  },
  paragraph: {
    fontSize: "20px", // Font size for paragraphs
    color: "#333",
    marginBottom: "10px",
  },
  signature: {
    fontSize: "20px", // Font size for the signature
    color: "#333",
    marginTop: "20px",
    fontStyle: "italic", // Italic for signature
  },
};

export default LoveLetter; 