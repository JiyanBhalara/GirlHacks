import React from "react";
import { gsap } from "gsap";

function Loader() {
  React.useEffect(() => {
    const tl = gsap.timeline();

    tl.from("#loader h3", {
      x: 60,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
    })
    .to("#loader h3", {
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      x: -20,
    })
    .to("#loader", {
      opacity: 0,
      duration: 1,
    })
    .to("#loader", {
      display: "none",
    });

  }, []); // Use useEffect to run the animation once on component mount

  return <></>;
}

export default Loader;
