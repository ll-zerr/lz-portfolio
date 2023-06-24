const projectButtons = document.querySelectorAll(".project-links button");

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

