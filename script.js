// filtering section

const accordionTriggers = document.querySelectorAll(".accordion-trigger");

accordionTriggers.forEach((button) =>
  button.addEventListener("click", function () {
    const buttonControls = button.getAttribute("aria-controls");

    const clickedPanel = document.getElementById(buttonControls);

    const visibility = button.getAttribute("aria-expanded");

    if (visibility === "false") {
      button.setAttribute("aria-expanded", true);
      clickedPanel.setAttribute("aria-expanded", true);
      clickedPanel.setAttribute("aria-hidden", false);
    } else if (visibility === "true") {
      button.setAttribute("aria-expanded", false);
      clickedPanel.setAttribute("aria-expanded", false);
      clickedPanel.setAttribute("aria-hidden", true);
    }
  })
);
