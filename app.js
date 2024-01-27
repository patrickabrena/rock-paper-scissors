document.addEventListener("DOMContentLoaded", function () {
  const changeColourTheme = () => {
    //1. Look at headlinks.js from javascript fundamentals and look at the mobile
    //pop out nav
    //2. assign all my themes there
    const themeToggle = () => {
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
    };
    themeToggle();
    //end of togglebuttonfunction//
    /** **/
    /** **/
    /** **/
    /** **/
    /** **/
    /*attempt at optimized version of this */
    // const colourThemeFunc = () => {
    //   const testFunction = (colour, cssValues, targetClass, targetStyle) => {
    //     const colourThemes = {
    //       red: "255, 0, 0",
    //       orange: "255, 172, 0",
    //       yellow: "255, 241, 0",
    //       green: "11, 255, 0",
    //       blue: "0, 246, 255",
    //     };

    //     const { red, orange, yellow, green, blue } = colourThemes;
    //     //orange, yellow, green, blue
    //     const rgbaColour = (colour) => {
    //       const rgbaValues = {
    //         backgroundRgba: `rgba(${colour}, 0.1)`,
    //         plainRgba: `rgba(${colour}, 1)`,
    //         boldLineRgba: `solid rgba(${colour}, 0.6) 3px`,
    //         thinLineRgba: `solid rgba(${colour}, 0.4) 2px`,
    //         dottedlineRgba: `dotted rgba(${colour}, 0.2) 1px`,
    //       };
    //     };

    //     const classNames = [
    //       ".coloured-background",
    //       ".text-rows",
    //       ".three-row-container",
    //       ".three-rows:nth-child(1)",
    //       ".three-rows:nth-child(3)",
    //     ];

    //     //isolated function to handle all the node list stuff
    //     // const testFunction = (colour) => {

    //     const myNodeList = document.querySelectorAll(targetClass);
    //     for (let i = 0; i < myNodeList.length; i++) {
    //       `myNodeList[i].style.${targetStyle} = ${cssValues}`;
    //     }
    //   };

    //   //   //
    //   //   //
    //   //   //
    //   const RedBtn = document.getElementById("red");
    //   // const OrangeBtn = document.getElementById("orange");
    //   // const YellowBtn = document.getElementById("yellow");
    //   // const GreenBtn = document.getElementById("green");
    //   // const BlueBtn = document.getElementById("blue");

    //   RedBtn.onclick = () => {
    //     testFunction(red, plainRgba, classNames[0], "backgroundColor");
    //   };
    //   colourThemeFunc();
    /*attempt at optimized version of this */
    /** **/
    /** **/
    /** **/
    /** **/
    /** **/

    /*Unoptimized method of colour change */
    /* */
    /* */
    /* */
    /* */
    //start of colour theme change
    //.coloured-background and .text-rows
    const backgroundTargetColourRed = "rgba(255, 0, 0, 1)";
    const backgroundTargetColourOrange = "rgba(255, 172, 0, 1)";
    const backgroundTargetColourYellow = "rgba(255, 241, 0, 1)";
    const backgroundTargetColourGreen = "rgba(11, 255, 0, 1)";
    const backgroundTargetColourBlue = "rgba(0, 246, 255, 1)";

    //.three-row-container
    const fullBorderColourRed = "solid rgba(255, 0, 0, 0.6) 3px";
    const fullBorderColourOrange = "solid rgba(255, 172, 0, 0.6) 3px";
    const fullBorderColourYellow = "solid rgba(255, 241, 0, 0.6) 3px";
    const fullBorderColourGreen = "solid rgba(11, 255, 0, 0.6) 3px";
    const fullBorderColourBlue = "solid rgba(0, 246, 255, 0.6) 3px";

    //.three-rows:nth-child(1) border-bottom
    const bottomBorderColourRed = "solid rgba(255, 0, 0, 0.4) 2px";
    const bottomBorderColourOrange = "solid rgba(255, 172, 0, 0.4) 2px";
    const bottomBorderColourYellow = "solid rgba(255, 241, 0, 0.4) 2px";
    const bottomBorderColourGreen = "solid rgba(11, 255, 0, 0.4) 2px";
    const bottomBorderColourBlue = "solid rgba(0, 246, 255, 0.4) 2px";

    //.pop-out-selection
    const leftBorderColourRed = "solid rgba(255, 0, 0, 0.4) 2px";
    const leftBorderColourOrange = "solid rgba(255, 172, 0, 0.4) 2px";
    const leftBorderColourYellow = "solid rgba(255, 241, 0, 0.4) 2px";
    const leftBorderColourGreen = "solid rgba(11, 255, 0, 0.4) 2px";
    const leftBorderColourBlue = "solid rgba(0, 246, 255, 0.4) 2px";

    //.theme-toggle
    const themeToggleBorderColourRed = "solid rgba(255, 0, 0, 0.4) 2px";
    const themeToggleBorderColourOrange = "solid rgba(255, 172, 0, 0.4) 2px";
    const themeToggleBorderColourYellow = "solid rgba(255, 241, 0, 0.4) 2px";
    const themeToggleBorderColourGreen = "solid rgba(11, 255, 0, 0.4) 2px";
    const themeToggleBorderColourBlue = "solid rgba(0, 246, 255, 0.4) 2px";

    //.theme-toggle[data-visible="false"] .caret
    const caretClosedColourRed = "6px solid rgba(255, 0, 0, 1)";
    const caretClosedColourOrange = "6px solid rgba(255, 172, 0, 1)";
    const caretClosedColourYellow = "6px solid rgba(255, 241, 0, 1)";
    const caretClosedColourGreen = "6px solid rgba(11, 255, 0, 1)";
    const caretClosedColourBlue = "6px solid rgba(0, 246, 255, 1)";

    //.mid-main-seg and border-right .two-coloumns
    const thinLineColourRed = "solid rgba(255, 0, 0, 0.2) 1px";
    const thinLineColourOrange = "solid rgba(255, 172, 0, 0.2) 1px";
    const thinLineColourYellow = "solid rgba(255, 241, 0, 0.2) 1px";
    const thinLineColourGreen = "solid rgba(11, 255, 0, 0.2) 1px";
    const thinLineColourBlue = "solid rgba(0, 246, 255, 0.2) 1px";

    //.changeable-background
    const backdropColourRed = "rgba(255, 0, 0, 0.1)";
    const backdropColourOrange = "rgba(255, 172, 0, 0.1)";
    const backdropColourYellow = "rgba(255, 241, 0, 0.1)";
    const backdropColourGreen = "rgba(11, 255, 0, 0.1)";
    const backdropColourBlue = "rgba(0, 246, 255, 0.1)";

    //Array of class names to target with functions below
    const classNames = [
      ".coloured-background",
      ".text-rows",
      ".three-row-container",
      ".three-rows:nth-child(1)",
      ".three-rows:nth-child(3)",
      ".pop-out-selection",
      ".theme-toggle",
      ".caret",
      ".mid-main-seg",
      ".two-coloumns:nth-child(1)",
      ".changeable-background",
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
    const bottomBorderColour = (targetColour) => {
      const myNodeList = document.querySelectorAll(classNames[3]);
      for (let i = 0; i < myNodeList.length; i++) {
        myNodeList[i].style.borderBottom = targetColour;
      }
    };
    const topBorderColour = (targetColour) => {
      const myNodeList = document.querySelectorAll(classNames[4]);
      for (let i = 0; i < myNodeList.length; i++) {
        myNodeList[i].style.borderTop = targetColour;
      }
    };
    const leftBorderColour = (targetColour) => {
      const myNodeList = document.querySelectorAll(classNames[5]);
      for (let i = 0; i < myNodeList.length; i++) {
        myNodeList[i].style.borderLeft = targetColour;
      }
    };
    const themeToggleBorderColour = (targetColour) => {
      const myNodeList = document.querySelectorAll(classNames[6]);
      for (let i = 0; i < myNodeList.length; i++) {
        myNodeList[i].style.borderLeft = targetColour;
        myNodeList[i].style.borderBottom = targetColour;
      }
    };
    const caretClosedColour = (targetColour) => {
      const myNodeList = document.querySelectorAll(classNames[7]);
      for (let i = 0; i < myNodeList.length; i++) {
        myNodeList[i].style.borderRight = targetColour;
      }
    };
    const midMainSegthinLineColour = (targetColour) => {
      const myNodeList = document.querySelectorAll(classNames[8]);
      for (let i = 0; i < myNodeList.length; i++) {
        myNodeList[i].style.border = targetColour;
      }
    };
    const twoColoumnThinLineColour = (targetColour) => {
      const myNodeList = document.querySelectorAll(classNames[9]);
      for (let i = 0; i < myNodeList.length; i++) {
        myNodeList[i].style.borderRight = targetColour;
      }
    };
    const backdropColour = (targetColour) => {
      const myNodeList = document.querySelectorAll(classNames[10]);
      for (let i = 0; i < myNodeList.length; i++) {
        myNodeList[i].style.backgroundColor = targetColour;
      }
    };

    //button on click sections
    const RedBtn = document.getElementById("red");
    RedBtn.onclick = () => {
      switchBackgroundColour(backgroundTargetColourRed);
      switchTextColour(backgroundTargetColourRed);
      fullBorderColour(fullBorderColourRed);
      bottomBorderColour(bottomBorderColourRed);
      topBorderColour(bottomBorderColourRed);
      leftBorderColour(leftBorderColourRed);
      themeToggleBorderColour(themeToggleBorderColourRed);
      caretClosedColour(caretClosedColourRed);
      midMainSegthinLineColour(thinLineColourRed);
      twoColoumnThinLineColour(thinLineColourRed);
      backdropColour(backdropColourRed);
    };

    const OrangeBtn = document.getElementById("orange");
    OrangeBtn.onclick = () => {
      switchBackgroundColour(backgroundTargetColourOrange);
      switchTextColour(backgroundTargetColourOrange);
      fullBorderColour(fullBorderColourOrange);
      bottomBorderColour(bottomBorderColourOrange);
      topBorderColour(bottomBorderColourOrange);
      leftBorderColour(leftBorderColourOrange);
      themeToggleBorderColour(themeToggleBorderColourOrange);
      caretClosedColour(caretClosedColourOrange);
      midMainSegthinLineColour(thinLineColourOrange);
      twoColoumnThinLineColour(thinLineColourOrange);
      backdropColour(backdropColourOrange);
    };

    const YellowBtn = document.getElementById("yellow");
    YellowBtn.onclick = () => {
      switchBackgroundColour(backgroundTargetColourYellow);
      switchTextColour(backgroundTargetColourYellow);
      fullBorderColour(fullBorderColourYellow);
      bottomBorderColour(bottomBorderColourYellow);
      topBorderColour(bottomBorderColourYellow);
      leftBorderColour(leftBorderColourYellow);
      themeToggleBorderColour(themeToggleBorderColourYellow);
      caretClosedColour(caretClosedColourYellow);
      midMainSegthinLineColour(thinLineColourYellow);
      twoColoumnThinLineColour(thinLineColourYellow);
      backdropColour(backdropColourYellow);
    };

    const GreenBtn = document.getElementById("green");
    GreenBtn.onclick = () => {
      switchBackgroundColour(backgroundTargetColourGreen);
      switchTextColour(backgroundTargetColourGreen);
      fullBorderColour(fullBorderColourGreen);
      bottomBorderColour(bottomBorderColourGreen);
      topBorderColour(bottomBorderColourGreen);
      leftBorderColour(leftBorderColourGreen);
      themeToggleBorderColour(themeToggleBorderColourGreen);
      caretClosedColour(caretClosedColourGreen);
      midMainSegthinLineColour(thinLineColourGreen);
      twoColoumnThinLineColour(thinLineColourGreen);
      backdropColour(backdropColourGreen);
    };

    const BlueBtn = document.getElementById("blue");
    BlueBtn.onclick = () => {
      switchBackgroundColour(backgroundTargetColourBlue);
      switchTextColour(backgroundTargetColourBlue);
      fullBorderColour(fullBorderColourBlue);
      bottomBorderColour(bottomBorderColourBlue);
      topBorderColour(bottomBorderColourBlue);
      leftBorderColour(leftBorderColourBlue);
      themeToggleBorderColour(themeToggleBorderColourBlue);
      caretClosedColour(caretClosedColourBlue);
      midMainSegthinLineColour(thinLineColourBlue);
      twoColoumnThinLineColour(thinLineColourBlue);
      backdropColour(backdropColourBlue);
    };
    //end of colour extract and change
    /* */
    /* */
    /* */
    /* */
    /*colour-change-test-code */
  };
  changeColourTheme();
  // };
});
