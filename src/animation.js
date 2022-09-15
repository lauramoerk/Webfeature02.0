// Remove the transition class
const square = document.querySelector(".type1");
square.classList.remove("css-typing");

// Create the observer, same as before:
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      square.classList.add("css-typing");
      return;
    }

    square.classList.remove("css-typing");
  });
});

observer.observe(document.querySelector(".typewrapper"));

// Remove the transition class
const type2 = document.querySelector(".type2");
type2.classList.remove("css-typing2");

// Create the observer, same as before:
const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      type2.classList.add("css-typing2");
      return;
    }

    type2.classList.remove("css-typing2");
  });
});

observer2.observe(document.querySelector(".typewrapper2"));

// Remove the transition class
const type3 = document.querySelector(".type3");
type3.classList.remove("css-typing3");

// Create the observer, same as before:
const observer3 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      type3.classList.add("css-typing3");
      return;
    }

    type3.classList.remove("css-typing3");
  });
});

observer3.observe(document.querySelector(".typewrapper3"));
