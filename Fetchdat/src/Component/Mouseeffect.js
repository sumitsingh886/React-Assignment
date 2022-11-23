import React, { useState, useEffect } from "react";

export default function Mouseeffect() {

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    console.log("Mouse Event");
    setX(e.clientX);
    setY(e.clientY);
  };
  useEffect(() => {
    console.log("useEffect Call");
    window.addEventListener("mousemove", logMousePosition);

    return () => {
      console.log("component unmounting code");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);
  return (
    <div>
      Hooks X - {x} Y-{y}
    </div>
  );
}
