const sections = [...document.querySelectorAll("main section")];
const dockLinks = [...document.querySelectorAll(".dock-link")];
const revealElements = document.querySelectorAll(".reveal");
const tiltCards = document.querySelectorAll(".tilt-card");
const dock = document.querySelector(".dock");
const gradientOrbs = document.querySelectorAll(".gradient-orb");
const currentYear = document.querySelector("#current-year");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.13,
    rootMargin: "0px 0px -7% 0px",
  }
);

revealElements.forEach((element) => revealObserver.observe(element));

const sectionObserver = new IntersectionObserver(
  (entries) => {
    const visibleSection = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visibleSection) return;

    dockLinks.forEach((link) => {
      const isActive =
        link.getAttribute("href") === `#${visibleSection.target.id}`;

      link.classList.toggle("active", isActive);

      if (isActive) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  },
  {
    threshold: [0.25, 0.45, 0.65],
    rootMargin: "-18% 0px -45% 0px",
  }
);

sections.forEach((section) => sectionObserver.observe(section));

let lastScrollPosition = window.scrollY;
let scrollTicking = false;

function updateDockOnScroll() {
  const currentScrollPosition = window.scrollY;
  const scrollingDown = currentScrollPosition > lastScrollPosition;
  const distance = Math.abs(currentScrollPosition - lastScrollPosition);

  if (distance > 7 && currentScrollPosition > 170) {
    dock.classList.toggle("hidden", scrollingDown);
  } else if (currentScrollPosition <= 170) {
    dock.classList.remove("hidden");
  }

  lastScrollPosition = currentScrollPosition;
  scrollTicking = false;
}

window.addEventListener(
  "scroll",
  () => {
    if (scrollTicking) return;

    requestAnimationFrame(updateDockOnScroll);
    scrollTicking = true;
  },
  { passive: true }
);

window.addEventListener("mousemove", (event) => {
  const x = event.clientX / window.innerWidth - 0.5;
  const y = event.clientY / window.innerHeight - 0.5;

  gradientOrbs.forEach((orb, index) => {
    const strength = (index + 1) * 7;
    orb.style.marginLeft = `${x * strength}px`;
    orb.style.marginTop = `${y * strength}px`;
  });

  if (window.innerHeight - event.clientY < 135) {
    dock.classList.remove("hidden");
  }
});

dock.addEventListener("pointerenter", () => {
  dock.classList.remove("hidden");
});

dock.addEventListener("focusin", () => {
  dock.classList.remove("hidden");
});

tiltCards.forEach((card) => {
  card.addEventListener("pointermove", (event) => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateY = ((x / rect.width) - 0.5) * 5;
    const rotateX = ((y / rect.height) - 0.5) * -5;

    card.style.transform =
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  });

  card.addEventListener("pointerleave", () => {
    card.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)";
  });
});
