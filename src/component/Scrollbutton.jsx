import React, { useState, useEffect } from "react";

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;

      // Calculate scroll progress
      const progressValue = (scrollTop / docHeight) * 100;

      // Update visibility and progress
      setIsVisible(scrollTop > 50);
      setProgress(progressValue);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {isVisible && (
        <div
          onClick={scrollToTop}
          className="fixed right-4 bottom-4 w-16 h-16 rounded-full flex items-center justify-center cursor-pointer bg-white shadow-lg"
          style={{ zIndex: 1000 }}
        >
          <svg
            className="progress-circle"
            width="100%"
            height="100%"
            viewBox="-1 -1 102 102"
          >
            <path
              d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
              style={{
                fill: "none",
                stroke: "#4f46e5", // Circle color
                strokeWidth: 6,
                strokeDasharray: "307.919", // Full circle length
                strokeDashoffset: `${307.919 - (progress / 100) * 307.919}`, // Dynamic offset
                transition: "stroke-dashoffset 100ms linear",
              }}
            />
          </svg>
          <div
            className="absolute w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center"
          >
            {/* Add an upward arrow or custom icon */}
            <span className="text-white text-4xl font-bold">↑</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScrollButton;
