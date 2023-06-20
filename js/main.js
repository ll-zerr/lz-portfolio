const projectButtons = document.querySelectorAll(".project-links button");

projectButtons.forEach ((btn) => {
    btn.addEventListener('mouseover', (handleMouseOver) => {
        btn.style.backgroundColor = "#cac4d1";
    });
});

projectButtons.forEach ((btn) => {
    btn.addEventListener('mouseout', (handleMouseOut) => {
        btn.style.backgroundColor = "#453e4f";
    });
});