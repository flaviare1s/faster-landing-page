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
