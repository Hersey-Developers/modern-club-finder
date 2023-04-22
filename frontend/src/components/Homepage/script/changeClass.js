export function changeClass(passed, className) {
    const button = document.getElementById(passed);
  
    if (button.className === `my-button-unclicked transition-all duration-500 ease-in-out hover:scale-105`) {
      button.className = `${className} my-button-clicked transition-all duration-500 ease-in-out hover:scale-105`;
    } else {
      button.className = `my-button-unclicked transition-all duration-500 ease-in-out hover:scale-105`;
    }
  }
