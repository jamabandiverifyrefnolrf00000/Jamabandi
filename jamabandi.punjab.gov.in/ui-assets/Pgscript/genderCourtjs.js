$(document).ready(function () {
    registerPBackScriptCourt();

    // Re-bind after partial postback (important for UpdatePanel)
    Sys.WebForms.PageRequestManager.getInstance().add_endRequest(function (sender, args) {
        if (!args.get_error()) {
            registerPBackScriptCourt();
        }
    });

    function registerPBackScriptCourt() {
        var ddlCourt = document.getElementById("ddlGenderCourt");

        if (ddlCourt) {
            ddlCourt.removeEventListener("change", updateLabelsBasedOnGenderCourt); // Avoid multiple bindings
            ddlCourt.addEventListener("change", updateLabelsBasedOnGenderCourt);
            updateLabelsBasedOnGenderCourt(); // Set initial labels
        }
    }
});

// Moved outside to keep it globally accessible
function updateLabelsBasedOnGenderCourt() {
    var genderCourt = document.getElementById("ddlGenderCourt");
    var lblFatherCourt = document.getElementById("lblFatherNameCourt");
    var lblGrandFatherCourt = document.getElementById("lblGrandFatherNameCourt");

    var rfvFatherCourt = document.getElementById("RFVFatherHusbandNameCourt");
    var rfvGrandFatherCourt = document.getElementById("RFVGrandFatherNameCourt");
    if (genderCourt != null)
    {
        if (genderCourt.value === "1") {
            lblFatherCourt.innerHTML = 'Name of Father/Husband/<br>ਪਿਤਾ ਜੀ/ਪਤੀ ਦਾ ਨਾਮ<span class="text-danger">*</span>';
            if (rfvFatherCourt != null) { rfvFatherCourt.innerHTML  = "Enter Name of Father/Husband"; }

            lblGrandFatherCourt.innerHTML = 'Name of Grandfather/Father-in-law/<br>ਦਾਦਾ ਜੀ/ਸਹੁਰਾ ਜੀ ਦਾ ਨਾਮ<span class="text-danger">*</span>';
            if (rfvGrandFatherCourt != null) { rfvGrandFatherCourt.innerHTML  = "Enter Name of Grandfather/Father-in-law"; }
        }
        else {
            lblFatherCourt.innerHTML = 'Name of Father/<br>ਪਿਤਾ ਜੀ ਦਾ ਨਾਮ<span class="text-danger">*</span>';
            if (rfvFatherCourt != null) { rfvFatherCourt.innerHTML  = "Enter Name of Father"; }

            lblGrandFatherCourt.innerHTML = 'Name of Grandfather/<br>ਦਾਦਾ ਜੀ ਦਾ ਨਾਮ<span class="text-danger">*</span>';
            if (rfvGrandFatherCourt != null) { rfvGrandFatherCourt.innerHTML  = "Enter Name of Grandfather"; }
        }
    }
}
