// const menuToggle = document.getElementById('menuToggle');
// const navMenu = document.getElementById('navMenu');

// menuToggle.addEventListener('click', () => {
//   navMenu.classList.toggle('active');
// });
let lastScrollY = window.scrollY;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY < lastScrollY - 2) {
    navbar.classList.remove('hidden'); // Show navbar
  } else if (currentScrollY > lastScrollY + 2) {
    navbar.classList.add('hidden'); // Hide navbar
  }

  lastScrollY = currentScrollY;
});


  const menuToggle = document.getElementById("menuToggle");
  const navSidebar = document.getElementById("navSidebar");
  const closeSidebar = document.getElementById("closeSidebar");

  menuToggle.addEventListener("click", () => {
    navSidebar.classList.add("active");
  });

  closeSidebar.addEventListener("click", () => {
    navSidebar.classList.remove("active");
  });

  // Optional: close sidebar on link click
  document.querySelectorAll('.nav-sidebar .nav-buttons').forEach(link => {
    link.addEventListener("click", () => {
      navSidebar.classList.remove("active");
    });
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
          setTimeout(updateCounter, 23);
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



  const carousel = document.getElementById("carousel");
  const cards = Array.from(carousel.children);
  let currentIndex = 0;
  let cardWidth;

  function updateCardWidth() {
    if (window.innerWidth <= 480) {
      cardWidth = carousel.querySelector(".testimonial-card").offsetWidth + 32; // margin
    } else if (window.innerWidth <= 768) {
      cardWidth = carousel.querySelector(".testimonial-card").offsetWidth + 32;
    } else {
      cardWidth = carousel.querySelector(".testimonial-card").offsetWidth + 32;
    }
  }

  function startInfiniteLoop() {
    setInterval(() => {
      carousel.style.transition = "transform 0.5s ease-in-out";
      carousel.style.transform = `translateX(-${cardWidth}px)`;

      setTimeout(() => {
        // Move first card to end
        carousel.appendChild(carousel.firstElementChild);
        carousel.style.transition = "none";
        carousel.style.transform = `translateX(0)`;
      }, 500);
    }, 3000);
  }

  window.addEventListener("resize", updateCardWidth);
  window.addEventListener("DOMContentLoaded", () => {
    updateCardWidth();
    startInfiniteLoop();
  });





 