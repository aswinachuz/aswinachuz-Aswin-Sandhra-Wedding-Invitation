import { useEffect } from "react";

export default function CustomCursor() {
  useEffect(() => {
    const cursor = document.querySelector(".custom-cursor");
    if (!cursor) return;

    const moveCursor = (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };

    window.addEventListener("mousemove", moveCursor);

    // Hover effects for interactive elements
    const interactiveElements = document.querySelectorAll("a, button, input, [class*='cursor-pointer']");
    interactiveElements.forEach(el => {
      el.addEventListener("mouseenter", () => cursor.classList.add("hovered"));
      el.addEventListener("mouseleave", () => cursor.classList.remove("hovered"));
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return <div className="custom-cursor"></div>;
}
