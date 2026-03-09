const projectButtons = document.querySelectorAll(".project-links");

projectButtons.forEach ((btn) => {
    const textElement = btn.querySelector(".project-links a");
    const iconElement = btn.querySelector(".project-links i");

    const originalTextColor = textElement.style.color;
    const originalIconColor = iconElement.style.color;

    btn.addEventListener('mouseover', (handleMouseOver) => {
        btn.style.backgroundColor = "#cac4d1";
        textElement.style.color = "#453e4f";
        iconElement.style.color = "#453e4f";
    });

    btn.addEventListener('mouseout', (handleMouseOut) => {
        btn.style.backgroundColor = "#453e4f";
        textElement.style.color = originalTextColor;
        iconElement.style.color = originalIconColor;
    });
});

const scrollButton = document.getElementById("scroll-btn")

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

document.addEventListener("DOMContentLoaded", function () {
  const roles = [
    "a creative front-end developer", 
    "an active software tester",
    "a precise technical communicator"
  ];
  
  const el = document.getElementById("role-rotator");
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let timer;

  const typeSpeed = 100;    // ms per character (forward)
  const deleteSpeed = 80;   // ms per character (backward, faster)
  const pauseTime = 2000;   // ms full role is visible

  function typeRole() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
      // Delete backward
      el.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      
      if (charIndex > 0) {
        timer = setTimeout(typeRole, deleteSpeed);
      } else {
        // Finished deleting, move to next role
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        timer = setTimeout(typeRole, 500); // brief pause
      }
    } else {
      // Type forward
      el.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      
      if (charIndex <= currentRole.length) {
        timer = setTimeout(typeRole, typeSpeed);
      } else {
        // Finished typing, pause then delete
        setTimeout(() => {
          isDeleting = true;
          timer = setTimeout(typeRole, pauseTime / 10); 
        }, pauseTime);
      }
    }
  }

  typeRole();
});
