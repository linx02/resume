import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import App from "../App";

const LoadingScreen = () => {
  const terminalRef = useRef(null);
  const buttonRef = useRef(null);
  const [loadingScreenVisible, setLoadingScreenVisible] = useState(true);

  const prompt = "present portfolio";

  const text = [
    "Loading beautiful imagery...",
    "Tidying up DOM...",
    "Dusting off navbar...",
    "Polishing pixels...",
    "Fine-tuning animations...",
    "Admiring the spotlessness...",
    "We're on the brink of unveiling...",
    "Voilà! Welcome to my digital showcase!",
  ];

  useEffect(() => {
    const terminal = terminalRef.current;

    const animateText = () => {
      // Create a new line for the prompt
      const promptLine = document.createElement("div");
      terminal.appendChild(promptLine);

      const prefixSpan = document.createElement("span");
      prefixSpan.style.color = "rgb(143, 202, 49)";
      prefixSpan.innerHTML =
        "linuselvius@portfolio-v2.0<span style='color: white;'>:</span><span style='color: rgb(94, 119, 176);'>~</span><span style='color: white;'>$ </span>";
      promptLine.appendChild(prefixSpan);

      // Animate each character of the prompt text with random delays
      for (let i = 0; i < prompt.length; i++) {
        const char = prompt[i];
        const charSpan = document.createElement("span");
        charSpan.textContent = char;
        charSpan.style.opacity = 0;
        promptLine.appendChild(charSpan);

        // Add random delay between characters
        const randomDelay = Math.random() * 0.1 + 0.1; // Random delay between 0.1 and 0.2 seconds
        gsap.to(charSpan, {
          opacity: 1,
          duration: 0.5, // Adjust the duration for each character
          delay: i * 0.05 + randomDelay, // Add delay for each character
          onComplete: () => {
            if (i === prompt.length - 1) {
              animateNextText(0); // Once the prompt is fully animated, start animating the next text
            }
          },
        });
      }
    };

    const animateNextText = (index) => {
      if (index < text.length) {
        const line = document.createElement("div");
        terminal.appendChild(line);

        const prefixSpan = document.createElement("span");
        line.appendChild(prefixSpan);

        const span = document.createElement("span");
        span.textContent = text[index];
        line.appendChild(span);

        // Calculate a random delay between 0 and 500 milliseconds
        const delay = Math.random() * 500;

        // Proceed to the next line of text with the random delay
        setTimeout(() => animateNextText(index + 1), delay);
      } else {
        // Add cursor as a new line at the bottom
        const cursorLine = document.createElement("div");
        terminal.appendChild(cursorLine);
        const cursorSpan = document.createElement("span");
        cursorSpan.className = "cursor";
        cursorSpan.textContent = "_"; // You can change the cursor character if needed
        cursorLine.appendChild(cursorSpan);
        gsap.to(cursorSpan, {
          opacity: 0,
          repeat: -1,
          yoyo: true,
          duration: 0.5,
        });
        // Fade in the button
        gsap.to(buttonRef.current, { opacity: 1, duration: 0.5 });
      }
    };

    animateText();
  }, []);

  const handleButtonClick = () => {
    setLoadingScreenVisible(false); // Hide the loading screen
  };

  return loadingScreenVisible ? (
    <div className="loading-screen" ref={terminalRef}>
      <button
        ref={buttonRef}
        style={{ opacity: 0 }}
        id="access-btn"
        onClick={handleButtonClick}
      >
        Continue
      </button>
    </div>
  ) : (
    <App />
  );
};

export default LoadingScreen;
