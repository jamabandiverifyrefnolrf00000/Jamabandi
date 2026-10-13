function applyFocusStyles() {
    document.addEventListener("focusin", function (event) {
        var element = event.target;

        if (element.tagName === "A") {
            element.classList.add("highlight-link"); // Special style for links
        } else if (element.tagName === "INPUT" || element.tagName === "SELECT" || element.tagName === "TEXTAREA" || element.tagName === "BUTTON") {
            element.classList.add("highlight-focus"); // Highlight other controls
        }

        // Fix for ASP.NET LinkButton losing focus
        if (element.tagName === "A") {
            setTimeout(() => element.classList.add("highlight-link"), 50);
        }
    });

    document.addEventListener("focusout", function (event) {
        var element = event.target;
        element.classList.remove("highlight-focus", "highlight-link");
    });
}

// Run on page load
document.addEventListener("DOMContentLoaded", function () {
    applyFocusStyles();
});

//// Handle UpdatePanel partial postback
//var prm = Sys.WebForms.PageRequestManager.getInstance();
//prm.add_endRequest(function () {
//    applyFocusStyles(); // Rebind focus styles after UpdatePanel update
//});