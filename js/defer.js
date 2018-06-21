if (window.addEventListener) {
    window.addEventListener("load", initialize, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", initialize);
} else {
    window.onload = initialize;
}
