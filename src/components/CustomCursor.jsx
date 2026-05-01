import React, { useEffect, useRef } from "react";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const moveCursor = (event) => {
      const { clientX, clientY } = event;
      dot.style.left = `${clientX}px`;
      dot.style.top = `${clientY}px`;
      ring.animate(
        { left: `${clientX}px`, top: `${clientY}px` },
        { duration: 170, fill: "forwards" }
      );
    };

    const activate = () => ring.classList.add("active");
    const deactivate = () => ring.classList.remove("active");

    document.addEventListener("mousemove", moveCursor);
    document.querySelectorAll("a, button, [role='button']").forEach((el) => {
      el.addEventListener("mouseenter", activate);
      el.addEventListener("mouseleave", deactivate);
    });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.querySelectorAll("a, button, [role='button']").forEach((el) => {
        el.removeEventListener("mouseenter", activate);
        el.removeEventListener("mouseleave", deactivate);
      });
    };
  }, []);

  return (
    <>
      <span ref={dotRef} className="cursor-dot" />
      <span ref={ringRef} className="cursor-ring" />
    </>
  );
};

export default CustomCursor;
