import "./style.css";
import { animate, stagger, inView, scroll, timeline } from "motion";

inView(".inview", () => {
  animate(".inview", { x: [-2000, 350] }, { duration: 2 });
});

inView(".inviewmobil", () => {
  animate(".inviewmobil", { x: [-2000, 50] }, { duration: 1 });
});

inView(".inview2", () => {
  animate(".inview2", { x: [+10000, 700] }, { duration: 2.5 });
});

inView(".inviewmobil2", () => {
  animate(".inviewmobil2", { x: [+5000, 100] }, { duration: 1 });
});

inView(".staggerinview", ({ target }) => {
  animate(
    target.querySelectorAll("p"),
    { x: [-2000, 0] },
    { duration: 1, delay: stagger(1, { start: 0.25 }) }
  );
});
