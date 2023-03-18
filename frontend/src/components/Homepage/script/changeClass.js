export function changeClass(passed) {
    if (document.getElementById(passed).className == "my-button-unclicked transition-all duration-500 ease-in-out hover:scale-105") {
        document.getElementById(passed).className = "my-button-clicked transition-all duration-500 ease-in-out hover:scale-105";
    } else {
        document.getElementById(passed).className = "my-button-unclicked transition-all duration-500 ease-in-out hover:scale-105";
    }
}