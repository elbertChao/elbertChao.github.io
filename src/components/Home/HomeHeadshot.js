import React, { useRef, useState, useEffect } from "react";

const MAX_ROTATE = 12;
const MAX_TRANSLATE = 10;

function HomeHeadshot({ src, alt }) {
  const stageRef = useRef(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, translateX: 0, translateY: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [canTilt, setCanTilt] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateCanTilt = () => {
      setCanTilt(mediaQuery.matches && !reducedMotion.matches);
    };

    updateCanTilt();
    mediaQuery.addEventListener("change", updateCanTilt);
    reducedMotion.addEventListener("change", updateCanTilt);

    return () => {
      mediaQuery.removeEventListener("change", updateCanTilt);
      reducedMotion.removeEventListener("change", updateCanTilt);
    };
  }, []);

  const resetTilt = () => {
    setIsHovering(false);
    setTilt({ rotateX: 0, rotateY: 0, translateX: 0, translateY: 0 });
  };

  const handleMouseMove = (event) => {
    if (!canTilt || !stageRef.current) {
      return;
    }

    const rect = stageRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const percentX = (x - centerX) / centerX;
    const percentY = (y - centerY) / centerY;

    setIsHovering(true);
    setTilt({
      rotateX: -percentY * MAX_ROTATE,
      rotateY: percentX * MAX_ROTATE,
      translateX: percentX * MAX_TRANSLATE,
      translateY: percentY * MAX_TRANSLATE,
    });
  };

  const transform = `perspective(1100px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) translate3d(${tilt.translateX}px, ${tilt.translateY}px, 16px) scale(${isHovering ? 1.03 : 1})`;

  return (
    <div
      ref={stageRef}
      className="home-headshot-stage"
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
    >
      <div
        className={`home-headshot-tilt ${isHovering ? "is-hovering" : ""}`}
        style={{ transform: canTilt ? transform : undefined }}
      >
        <img src={src} alt={alt} className="img-fluid home-headshot" />
      </div>
    </div>
  );
}

export default HomeHeadshot;
