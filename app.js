document.addEventListener("DOMContentLoaded", function () {
  const changeColourTheme = () => {
    //1. Look at headlinks.js from javascript fundamentals and look at the mobile
    //pop out nav
    //2. assign all my themes there
    const toggleButton = document.querySelector(".theme-toggle");
    const popOut = document.querySelector(".pop-out-selection");
    // const caret = document.querySelector(".caret");

    toggleButton.addEventListener("click", () => {
      const visibility = popOut.getAttribute("data-visible");
      // const caretSelect = caret.getAttribute("data-visible");

      if (visibility === "false") {
        popOut.setAttribute("data-visible", true);
        toggleButton.setAttribute("data-visible", true);
      } else if (visibility === "true") {
        popOut.setAttribute("data-visible", false);
        toggleButton.setAttribute("data-visible", false);
      }
    });
  };
  changeColourTheme();
});
