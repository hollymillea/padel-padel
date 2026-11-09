"use client";

import { useEffect, useRef, useState } from "react";

/*
 * Adds "in" once the element's top is 80% of the way up the screen, and stays shown.
 * Use with .rv (a heading that rises out of a mask; wrap its text in a <span>)
 * or .stg (cards or list items that rise in one after another).
 */
export default function Reveal({ as: Tag = "div", className = "", children, ...rest }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || shown) return;
    let frame = 0;
    const check = () => {
      frame = 0;
      if (el.getBoundingClientRect().top < window.innerHeight * 0.8) setShown(true);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(check);
    };
    check();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [shown]);

  return (
    <Tag ref={ref} className={`${className}${shown ? " in" : ""}`} {...rest}>
      {children}
    </Tag>
  );
}
