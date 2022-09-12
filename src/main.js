import "./style.css";
import { animate, stagger, inView, scroll, timeline } from "motion";

document.querySelectorAll(".parallaxcontainerall").forEach(( parallaxcontainer ) => {
    const parallaxel1 = parallaxcontainer.querySelector("p");
    scroll(animate(parallaxel1, { y: [ 0, 800] }), { target: parallaxel1 });
  });
  