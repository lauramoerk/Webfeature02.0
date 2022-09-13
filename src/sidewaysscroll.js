import "./style.css";
import { animate, stagger, inView, scroll, timeline } from "motion";

const items = document.querySelectorAll("#listscroll li");
scroll(
  animate("#listscroll", {
    transform: ["none", `translateX(-${items.length - 1}00vw)`],
  }),
  { target: document.querySelector("#horisontscrolling") }
);

inView(".stockfotoheader", () => {
  /* husk at ligge duration, delay direction etc. i samme kasse) */
  animate(
    ".stockfotoheader",
    { opacity: [0, 1] },
    { delay: 0.5, duration: 0.5 }
  );
});
