$(document).ready(function () {
    registerPBackScript();
    Sys.WebForms.PageRequestManager.getInstance().add_endRequest(EndRequestHandler);
    function EndRequestHandler(sender, args) {
        if (args.get_error() == undefined) {
            registerPBackScript();
        }
    }
    function registerPBackScript() {
        var ddlReason = document.getElementById("ddlReason");
        if (ddlReason) {
            ddlReason.removeEventListener("change", setddlReason); // Avoid multiple bindings
            ddlReason.addEventListener("change", setddlReason);
            setddlReason(); // Set textbox
        }
    }
});
document.addEventListener('change', function (event) {
    if (event.target.classList.contains('custom-file-input_ap')) {
        let fileName = event.target.files[0]?.name || "Choose file";
        event.target.nextElementSibling.textContent = fileName;
    }
});

function setddlReason() {
    var lbl = document.getElementById("lblDescription");
    var ddlReason = document.getElementById("ddlReason");

    var $txtRemarksw = $('#txtRemarks');
    var $lblDescriptionw = $('#lblDescription');



    //  var txtReleationWithDeceased = document.getElementById("txtReleationWithDeceased");
    if (ddlReason != null) {
        if (ddlReason.value === "1")
        {

            $lblDescriptionw.show();
            $txtRemarksw.show().focus();

        }
        else {
            $lblDescriptionw.hide();
            $txtRemarksw.hide().val('');
        }
    }
}


