$(document).ready(function () {
    registerPBackScript();

    // Re-bind after partial postback (important for UpdatePanel)
    Sys.WebForms.PageRequestManager.getInstance().add_endRequest(function (sender, args) {
        if (!args.get_error()) {
            registerPBackScript();
        }
    });

    function registerPBackScript() {
        var ddl = document.getElementById("ddlGender");

        if (ddl) {
            ddl.removeEventListener("change", updateLabelsBasedOnGender); // Avoid multiple bindings
            ddl.addEventListener("change", updateLabelsBasedOnGender);
            updateLabelsBasedOnGender(); // Set initial labels
        }
    }
});

// Moved outside to keep it globally accessible
function updateLabelsBasedOnGender() {

    var gender = document.getElementById("ddlGender");
    var lblFather = document.getElementById("lblFatherName");
    var lblGrandFather = document.getElementById("lblGrandFatherName");

    var rfvFather = document.getElementById("RFVFatherHusbandName");
    var rfvGrandFather = document.getElementById("RFVGrandFatherName");
    if (gender != null)
    {
        if (gender.value === "1") {
            lblFather.innerHTML = 'Name of Father/Husband/<br>ਪਿਤਾ ਜੀ/ਪਤੀ ਦਾ ਨਾਮ<span class="text-danger">*</span>';
            if (rfvFather != null) { rfvFather.innerHTML  = "Enter Name of Father/Husband"; }

            lblGrandFather.innerHTML = 'Name of Grandfather/Father-in-law/<br>ਦਾਦਾ ਜੀ/ਸਹੁਰਾ ਜੀ ਦਾ ਨਾਮ<span class="text-danger">*</span>';
            if (rfvGrandFather != null) { rfvGrandFather.innerHTML  = "Enter Name of Grandfather/Father-in-law"; }
        }
        else {
            lblFather.innerHTML = 'Name of Father/<br>ਪਿਤਾ ਜੀ ਦਾ ਨਾਮ<span class="text-danger">*</span>';
            if (rfvFather != null) { rfvFather.innerHTML  = "Enter Name of Father"; }

            lblGrandFather.innerHTML = 'Name of Grandfather/<br>ਦਾਦਾ ਜੀ ਦਾ ਨਾਮ<span class="text-danger">*</span>';
            if (rfvGrandFather != null) { rfvGrandFather.innerHTML  = "Enter Name of Grandfather"; }
        }
    }
}
