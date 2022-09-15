import "./style.css";
import { animate, stagger, inView, scroll, timeline } from "motion";



document.querySelectorAll("section").forEach((section) => {
    const header = section.querySelector("p");
    scroll(animate(header, { y: [-100, 250] }), {
      target: header
    });
  });





scroll( animate(".progress-bar", { scaleX: [0, 1] }));
  
  

inView(".quote", () =>{
animate(".quote", 
  { opacity: [ 0.4, 1], scale: [0.95, 1] }, 
  { delay: 0, duration: 4})}
);
