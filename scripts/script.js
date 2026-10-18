"use strict";

//select all nevagation buttons that have a data-section attribute
const navButtons = document.querySelectorAll("nav button[data-section]");

//select all content sections inside the main element.
const sections = document.querySelectorAll("main section[id]");

//display the selected section and hide all other sections.
function showSection(sectionId) {
  sections.forEach((section) => {
    //show only the section whose ID matches the selected button.
    section.hidden = section.id !== sectionId;
  });

  navButtons.forEach((button) => {
    //check whether this button represents the selected section.
    const isActive = button.dataset.section === sectionId;

    //update the button's visual state.
    button.classList.toggle("active", isActive);

    //indicate the selected state to assistive technologies.
    button.setAttribute("aria-pressed", String(isActive));
  });
}

//register a click event listener for each navigation button.
navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    //read the target section ID from the button's data-section.
    const targetSection = button.dataset.section;

    //switch to the selected section.
    showSection(targetSection);
  });
});

//display Data Sources when the page first loads.
showSection("data-sources");
