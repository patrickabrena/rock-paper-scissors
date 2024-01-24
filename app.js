document.addEventListener("DOMContentLoaded", function () {
  const changeColourTheme = () => {
    //1. Look at headlinks.js from javascript fundamentals and look at the mobile
    //pop out nav
    //2. assign all my themes there
    const toggleButton = document.querySelector(".theme-toggle");
    const popOut = document.querySelector(".pop-out-selection");

    toggleButton.addEventListener("click", () => {
      const visibility = popOut.getAttribute("data-visible");

      if (visibility === "false") {
        popOut.setAttribute("data-visible", true);
        toggleButton.setAttribute("data-visible", true);
      } else if (visibility === "true") {
        popOut.setAttribute("data-visible", false);
        toggleButton.setAttribute("data-visible", false);
      }
    });
    //end of togglebuttonfunction//

    //start of colour extract and change

    //for backgroundColour and textColour
    const backgroundTargetColourRed = "rgba(255, 0, 0, 1)";
    const backgroundTargetColourOrange = "rgba(255, 172, 0, 1)";
    const backgroundTargetColourYellow = "rgba(255, 241, 0, 1)";
    const backgroundTargetColourGreen = "rgba(11, 255, 0, 1)";
    const backgroundTargetColourBlue = "rgba(0, 246, 255, 1)";

    //for .three-row-container
    const fullBorderColourRed = "solid rgba(255, 0, 0, 0.6) 3px";
    const fullBorderColourOrange = "solid rgba(255, 172, 0, 0.6) 3px";
    const fullBorderColourYellow = "solid rgba(255, 241, 0, 0.6) 3px";
    const fullBorderColourGreen = "solid rgba(11, 255, 0, 0.6) 3px";
    const fullBorderColourBlue = "solid rgba(0, 246, 255, 0.6) 3px";

    //Array of class names to target. Test it out first with one

    const classNames = [
      ".coloured-background",
      ".text-rows",
      ".three-row-container",
      ".three-rows:nth-child(1)",
    ];
    const switchBackgroundColour = (backgroundTargetColour) => {
      const myNodeList = document.querySelectorAll(classNames[0]);
      for (let i = 0; i < myNodeList.length; i++) {
        myNodeList[i].style.backgroundColor = backgroundTargetColour;
      }
    };
    const switchTextColour = (targetColour) => {
      const myNodeList = document.querySelectorAll(classNames[1]);
      for (let i = 0; i < myNodeList.length; i++) {
        myNodeList[i].style.color = targetColour;
      }
    };
    const fullBorderColour = (targetColour) => {
      const myNodeList = document.querySelectorAll(classNames[2]);
      for (let i = 0; i < myNodeList.length; i++) {
        myNodeList[i].style.border = targetColour;
      }
    };

    const RedBtn = document.getElementById("red");
    RedBtn.onclick = () => {
      switchBackgroundColour(backgroundTargetColourRed);
      switchTextColour(backgroundTargetColourRed);
      fullBorderColour(fullBorderColourRed);
    };

    const OrangeBtn = document.getElementById("orange");
    OrangeBtn.onclick = () => {
      switchBackgroundColour(backgroundTargetColourOrange);
      switchTextColour(backgroundTargetColourOrange);
      fullBorderColour(fullBorderColourOrange);
    };

    const YellowBtn = document.getElementById("yellow");
    YellowBtn.onclick = () => {
      switchBackgroundColour(backgroundTargetColourYellow);
      switchTextColour(backgroundTargetColourYellow);
      fullBorderColour(fullBorderColourYellow);
    };

    const GreenBtn = document.getElementById("green");
    GreenBtn.onclick = () => {
      switchBackgroundColour(backgroundTargetColourGreen);
      switchTextColour(backgroundTargetColourGreen);
      fullBorderColour(fullBorderColourGreen);
    };

    const BlueBtn = document.getElementById("blue");
    BlueBtn.onclick = () => {
      switchBackgroundColour(backgroundTargetColourBlue);
      switchTextColour(backgroundTargetColourBlue);
      fullBorderColour(fullBorderColourBlue);
    };
    //end of colour extract and change
  };
  changeColourTheme();
});
