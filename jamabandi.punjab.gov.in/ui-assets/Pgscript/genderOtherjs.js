$(document).ready(function () {
    registerPBackScriptOther();

    // Re-bind after partial postback (important for UpdatePanel)
    Sys.WebForms.PageRequestManager.getInstance().add_endRequest(function (sender, args) {
        if (!args.get_error()) {
            registerPBackScriptOther();
        }
    });

    function registerPBackScriptOther() {
        var ddlOther = document.getElementById("ddlGenderOther");

        if (ddlOther) {
            ddlOther.removeEventListener("change", updateLabelsBasedOnGenderOther); // Avoid multiple bindings
            ddlOther.addEventListener("change", updateLabelsBasedOnGenderOther);
            updateLabelsBasedOnGenderOther(); // Set initial labels
        }
    }
});

// Moved outside to keep it globally accessible
function updateLabelsBasedOnGenderOther() {
    var genderOther = document.getElementById("ddlGenderOther");
    var lblFatherOther = document.getElementById("lblFatherNameOther");
    var lblGrandFatherOther = document.getElementById("lblGrandFatherNameOther");

    var rfvFatherOther = document.getElementById("RFVFatherHusbandNameOther");
    var rfvGrandFatherOther = document.getElementById("RFVGrandFatherNameOther");
    if (genderOther != null) {
        if (genderOther.value === "1") {
            lblFatherOther.innerHTML = 'Name of Father/Husband/<br>ਪਿਤਾ ਜੀ/ਪਤੀ ਦਾ ਨਾਮ<span class="text-danger">*</span>';
            if (rfvFatherOther != null) { rfvFatherOther.innerHTML  = "Enter Name of Father/Husband"; }

            lblGrandFatherOther.innerHTML = 'Name of Grandfather/Father-in-law/<br>ਦਾਦਾ ਜੀ/ਸਹੁਰਾ ਜੀ ਦਾ ਨਾਮ<span class="text-danger">*</span>';
            if (rfvGrandFatherOther != null) { rfvGrandFatherOther.innerHTML  = "Enter Name of Grandfather/Father-in-law"; }
        }
        else {
            lblFatherOther.innerHTML = 'Name of Father/<br>ਪਿਤਾ ਜੀ ਦਾ ਨਾਮ<span class="text-danger">*</span>';
            if (rfvFatherOther != null) { rfvFatherOther.innerHTML  = "Enter Name of Father"; }

            lblGrandFatherOther.innerHTML = 'Name of Grandfather/<br>ਦਾਦਾ ਜੀ ਦਾ ਨਾਮ<span class="text-danger">*</span>';
            if (rfvGrandFatherOther != null) { rfvGrandFatherOther.innerHTML  = "Enter Name of Grandfather"; }
        }
    }
}
