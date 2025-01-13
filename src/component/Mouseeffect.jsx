import React, { useState, useEffect } from "react";

const MouseEffect = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isBorder, setIsBorder] = useState(false);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;

    // Update the cursor position
    setPosition({ x: clientX, y: clientY });

    // Check if the cursor is near the border
    const threshold = 50; // Adjust sensitivity here
    const { innerWidth, innerHeight } = window;

    if (
      clientX < threshold ||
      clientX > innerWidth - threshold ||
      clientY < threshold ||
      clientY > innerHeight - threshold
    ) {
      setIsBorder(true);
    } else {
      setIsBorder(false);
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      <div
        className={`fixed z-50 top-0 left-0 w-12 h-12 border-2 border-blue-500 pointer-events-none rounded-full transition-all duration-200 ease-in-out ${
          isBorder ? "w-12 h-12 border-2 border-blue-500" : ""
        }`}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      ></div>
    </div>
  );
};

export default MouseEffect;
