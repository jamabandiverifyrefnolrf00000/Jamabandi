$(document).ready(function () {
    registerPBackScript();
    Sys.WebForms.PageRequestManager.getInstance().add_endRequest(EndRequestHandler);
    function EndRequestHandler(sender, args) {
        if (args.get_error() == undefined) {
            registerPBackScript();
        }
    }
    function registerPBackScript() {
        initializeDatePickers();
        var ddl = document.getElementById("ddlGender");
        if (ddl) {
            ddl.removeEventListener("change", updateLabelsBasedOnGender); // Avoid multiple bindings
            ddl.addEventListener("change", updateLabelsBasedOnGender);
            updateLabelsBasedOnGender(); // Set initial labels
        }
        var ddlReleationWithDeceased = document.getElementById("ddlReleationWithDeceased");
        if (ddlReleationWithDeceased) {
            ddlReleationWithDeceased.removeEventListener("change", setddlReleationWithDeceased); // Avoid multiple bindings
            ddlReleationWithDeceased.addEventListener("change", setddlReleationWithDeceased);
            setddlReleationWithDeceased(); // Set textbox
        }
        var ddlLegalHeirReleationWith = document.getElementById("ddlLegalHeirReleationWith");
        if (ddlLegalHeirReleationWith) {
            ddlLegalHeirReleationWith.removeEventListener("change", setddlLegalHeirReleationWith); // Avoid multiple bindings
            ddlLegalHeirReleationWith.addEventListener("change", setddlLegalHeirReleationWith);
            setddlLegalHeirReleationWith(); // Set textbox
        }
    }
});

function initializeDatePickers() {
    $(".datepicker").each(function ()
    {
        var datePickerDODDeceased = $("#txtDODDeceased").datepicker({
            dateFormat: "dd/mm/yy",
            changeMonth: true,
            changeYear: true,
            showButtonPanel: true,
            yearRange: "1900:" + new Date().getFullYear(),
            maxDate: 0 // Restrict future dates
        });
        $("#calendarIconDOD").off("click").on("click", function () {
            datePickerDODDeceased.datepicker("show");
        });
        var datePickerVasikaDate = $("#txtVasikaDate").datepicker({
            dateFormat: "dd/mm/yy",
            changeMonth: true,
            changeYear: true,
            showButtonPanel: true,
            yearRange: "1900:" + new Date().getFullYear(),
            maxDate: 0 // Restrict future dates
        });
        $("#calendarIconVDt").off("click").on("click", function () {
            datePickerVasikaDate.datepicker("show");
        });
        
        var datePickerWillDate = $("#txtWillDate").datepicker({
            dateFormat: "dd/mm/yy",
            changeMonth: true,
            changeYear: true,
            showButtonPanel: true,
            yearRange: "1900:" + new Date().getFullYear(),
            maxDate: 0 // Restrict future dates
        });
        $("#calendarIconWDt").off("click").on("click", function () {
            datePickerWillDate.datepicker("show");
        });
    });
}

function updateLabelsBasedOnGender() {

    var gender = document.getElementById("ddlGender");
    var lblFather = document.getElementById("lblDeceasedFatherName");
    var lblGrandFather = document.getElementById("lblDeceasedGrandFatherName");

    var rfvFather = document.getElementById("RFVFatherHusbandName");
    var rfvGrandFather = document.getElementById("RFVGrandFatherName");
    if (gender != null) {
        if (gender.value === "1") {
            lblFather.innerHTML = 'ਮ੍ਰਿਤਕ ਦੇ ਪਿਤਾ ਜੀ/ਪਤੀ ਦਾ ਨਾਮ/Name of Father/Husband of Deceased<span class="text-danger">*</span>';
            if (rfvFather != null) { rfvFather.innerHTML = "Name of Father/Husband of Deceased"; }

            lblGrandFather.innerHTML = 'ਮ੍ਰਿਤਕ ਦੇ ਦਾਦਾ/ਸਹੁਰਾ ਜੀ ਦਾ ਨਾਮ/Name of Grandfather/Father-in-law of Deceased<span class="text-danger">*</span>';
            if (rfvGrandFather != null) { rfvGrandFather.innerHTML = "Name of Grandfather/Father-in-law of Deceased"; }
        }
        else {
            lblFather.innerHTML = 'ਮ੍ਰਿਤਕ ਦੇ ਪਿਤਾ ਜੀ ਦਾ ਨਾਮ/Name of Father of Deceased<span class="text-danger">*</span>';
            if (rfvFather != null) { rfvFather.innerHTML = "Name of Father of Deceased"; }

            lblGrandFather.innerHTML = 'ਮ੍ਰਿਤਕ ਦੇ ਦਾਦਾ ਜੀ ਦਾ ਨਾਮ/Name of Grandfather of Deceased<span class="text-danger">*</span>';
            if (rfvGrandFather != null) { rfvGrandFather.innerHTML = "Name of Grandfather of Deceased"; }
        }
    }
}
function setddlReleationWithDeceased() {

    var ddlReleationWithDeceased = document.getElementById("ddlReleationWithDeceased");
    var $txtOther = $('#txtReleationWithDeceased');
    if (ddlReleationWithDeceased != null) {
        if (ddlReleationWithDeceased.value === "0")
        {
            $txtOther.show().focus();
        }
        else
        {
            $txtOther.hide().val('');
        }
    }
}

function setddlLegalHeirReleationWith() {

    var ddlLegalHeirReleationWith = document.getElementById("ddlLegalHeirReleationWith");
    var $txtHeirReleationWith = $('#txtLegalHeirReleationWith');
    //  var txtReleationWithDeceased = document.getElementById("txtReleationWithDeceased");
    if (ddlLegalHeirReleationWith != null) {
        if (ddlLegalHeirReleationWith.value === "0") {
            $txtHeirReleationWith.show().focus();
        }
        else {
            $txtHeirReleationWith.hide().val('');
        }
    }
}
document.addEventListener('change', function (event) {
        if (event.target.classList.contains('custom-file-input_dc')) {
            let fileName = event.target.files[0]?.name || "Choose file";
            event.target.nextElementSibling.textContent = fileName;
        }
    });
         document.addEventListener('change', function (event) {
        if (event.target.classList.contains('custom-file-input_wi')) {
            let fileName = event.target.files[0]?.name || "Choose file";
            event.target.nextElementSibling.textContent = fileName;
        }
         });

document.addEventListener('change', function (event) {
        if (event.target.classList.contains('custom-file-input_ap')) {
            let fileName = event.target.files[0]?.name || "Choose file";
            event.target.nextElementSibling.textContent = fileName;
        }
          });

  

  