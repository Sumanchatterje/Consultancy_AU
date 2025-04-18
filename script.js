const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});




  const statsSection = document.querySelector('#stats');
  const counters = document.querySelectorAll('.number');
  let hasAnimated = false;

  const startCount = () => {
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      let count = 0;
      const speed = 110;
      const increment = Math.ceil(target / speed);

      const updateCounter = () => {
        if (count < target) {
          count += increment;
          if (count > target) count = target;
          counter.innerText = count + '+';
          setTimeout(updateCounter, 35);
        } else {
          counter.innerText = target + '+';
        }
      };

      updateCounter();
    });
  };

  const observer = new IntersectionObserver(
    entries => {
      const entry = entries[0];
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        startCount();
        observer.unobserve(statsSection); // Optional: only trigger once
      }
    },
    {
      threshold: 0.5 // When 50% of the section is visible
    }
  );

  observer.observe(statsSection);









const carousel = document.getElementById("testimonialCarousel");
const cards = document.querySelectorAll(".testimonial-card");
let index = 0;
const cardsPerView = 3;

function updateSlider() {
  cards.forEach(card => card.classList.remove("active"));
  for (let i = 0; i < cards.length; i++) {
    if (i >= index && i < index + cardsPerView) {
      cards[i].classList.add("active");
    }
  }
  carousel.style.transform = `translateX(-${(100 / cardsPerView) * index}%)`;
}

function nextSlide() {
  index = (index + 1) % cards.length;
  if (index > cards.length - cardsPerView) index = 0;
  updateSlider();
}

function prevSlide() {
  index = (index - 1 + cards.length) % cards.length;
  if (index > cards.length - cardsPerView) index = 0;
  updateSlider();
}

document.querySelector(".right-arrow").addEventListener("click", nextSlide);
document.querySelector(".left-arrow").addEventListener("click", prevSlide);

// Auto slide every 4.5 seconds
setInterval(nextSlide, 4500);

// Initial display
updateSlider();
