export function changeClass(passed) {
    if (document.getElementById(passed).className == "my-button-unclicked") {
        document.getElementById(passed).className = "my-button-clicked";
    } else {
        document.getElementById(passed).className = "my-button-unclicked";
    }
}