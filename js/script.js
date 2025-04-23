function animateNumbers() {
  const counters = document.querySelectorAll(".quote-number");
  const duration = 2000;

  counters.forEach((counter) => {
    const updateCount = () => {
      const target = +counter.innerText;
      const increment = target / (duration / 16);
      let count = 0;

      const animate = () => {
        count += increment;
        if (count < target) {
          counter.innerText = Math.ceil(count);
          requestAnimationFrame(animate);
        } else {
          counter.innerText = target;
        }
      };

      animate();
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          updateCount();
          observer.unobserve(counter);
        }
      });
    });

    observer.observe(counter);
  });
}

window.addEventListener("DOMContentLoaded", animateNumbers);

const menuIcon = document.getElementById('menu')
const menuMobile = document.getElementById('menu-mobile')

menuIcon.addEventListener('click', (e) => {
  e.stopPropagation()
  menuMobile.classList.toggle('active')
})

document.addEventListener('click', () => {
  menuMobile.classList.remove('active')
})

if (document.querySelector(".burger-menu")) {
  const burger = document.getElementById("menu");
  const nav = document.getElementById("menu-mobile");
  burger.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  document.querySelectorAll(".dropdown-toggle-burger").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      btn.parentElement.classList.toggle("open");
    });
  });

  document.addEventListener("click", (e) => {
    if (!nav.contains(e.target) && !burger.contains(e.target)) {
      nav.classList.remove("open");
      nav
        .querySelectorAll(".dropdown.open")
        .forEach((d) => d.classList.remove("open"));
    }
  });
}
