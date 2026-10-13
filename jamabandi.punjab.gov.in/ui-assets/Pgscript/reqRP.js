$(document).ready(function () {

    registerPBackScript();
    Sys.WebForms.PageRequestManager.getInstance().add_endRequest(EndRequestHandler);
    function EndRequestHandler(sender, args) {
        if (args.get_error() == undefined) {
            registerPBackScript();
        }
    }
    function registerPBackScript()
    {
    //    initializeDatePickers();
    //    initializeMarla();
        var ddl = document.getElementById("ddlGenderA");
        if (ddl)
        {
            ddl.removeEventListener("change", updateLabelsBasedOnGenderA); // Avoid multiple bindings
            ddl.addEventListener("change", updateLabelsBasedOnGenderA);
            updateLabelsBasedOnGenderA(); // Set initial labels
        }
        var ddl = document.getElementById("ddlGenderO");
        if (ddl)
        {
            ddl.removeEventListener("change", updateLabelsBasedOnGenderO); // Avoid multiple bindings
            ddl.addEventListener("change", updateLabelsBasedOnGenderO);
            updateLabelsBasedOnGenderO(); // Set initial labels
        }
    }
});

function updateLabelsBasedOnGenderA() {

    var gender = document.getElementById("ddlGenderA");
    var lblFather = document.getElementById("lblFatherNameH");
    var lblGrandFather = document.getElementById("lblGrandFatherName");

    var rfvFather = document.getElementById("RFVFatherName");
    var rfvGrandFather = document.getElementById("RFVGrandFatherName");
 
    if (gender != null) {
        if (gender.value === "1") {
            lblFather.innerHTML = 'ਬਿਨੈਕਾਰ ਦੇ ਪਿਤਾ ਜੀ/ਪਤੀ ਦਾ ਨਾਮ/Name of Father/Husband of Applicant<span class="text-danger">*</span>';
            if (rfvFather != null) { rfvFather.innerHTML = "Name of Father/Husband of Applicant"; }

            lblGrandFather.innerHTML = 'ਬਿਨੈਕਾਰ ਦੇ ਦਾਦਾ/ਸਹੁਰਾ ਜੀ ਦਾ ਨਾਮ/Name of Grandfather/Father-in-law of Applicant<span class="text-danger">*</span>';
            if (rfvGrandFather != null) { rfvGrandFather.innerHTML = "Name of Grandfather/Father-in-law of Applicant"; }
        }
        else {
            lblFather.innerHTML = 'ਬਿਨੈਕਾਰ ਦੇ ਪਿਤਾ ਜੀ ਦਾ ਨਾਮ/Name of Father of Applicant<span class="text-danger">*</span>';
            if (rfvFather != null) { rfvFather.innerHTML = "Name of Father of Applicant"; }

            lblGrandFather.innerHTML = 'ਬਿਨੈਕਾਰ ਦੇ ਦਾਦਾ ਜੀ ਦਾ ਨਾਮ/Name of Grandfather of Applicant<span class="text-danger">*</span>';
            if (rfvGrandFather != null) { rfvGrandFather.innerHTML = "Name of Grandfather of Applicant"; }
        }
    }
}
function updateLabelsBasedOnGenderO() {

    var gender = document.getElementById("ddlGenderO");
    var lblFather = document.getElementById("lblOtherFatherName");
    var lblGrandFather = document.getElementById("lblOtherGrandFatherName");

    var rfvFather = document.getElementById("RFVOtherFatherName");
    var rfvGrandFather = document.getElementById("RFVOtherGrandFatherName");

    if (gender != null) {
        if (gender.value === "1") {
            lblFather.innerHTML = 'ਪਿਤਾ ਜੀ/ਪਤੀ ਦਾ ਨਾਮ/Name of Father/Husband<span class="text-danger">*</span>';
            if (rfvFather != null) { rfvFather.innerHTML = "Name of Father/Husband"; }

            lblGrandFather.innerHTML = 'ਦਾਦਾ/ਸਹੁਰਾ ਜੀ ਦਾ ਨਾਮ/Name of Grandfather/Father-in-law<span class="text-danger">*</span>';
            if (rfvGrandFather != null) { rfvGrandFather.innerHTML = "Name of Grandfather/Father-in-law"; }
        }
        else {
            lblFather.innerHTML = 'ਪਿਤਾ ਜੀ ਦਾ ਨਾਮ/Name of Father<span class="text-danger">*</span>';
            if (rfvFather != null) { rfvFather.innerHTML = "Name of Father"; }

            lblGrandFather.innerHTML = 'ਦਾਦਾ ਜੀ ਦਾ ਨਾਮ/Name of Grandfather <span class="text-danger">*</span>';
            if (rfvGrandFather != null) { rfvGrandFather.innerHTML = "Name of Grandfather"; }
        }
    }
}

//    function initializeDatePickers() {
//    $(".datepicker").each(function ()
//    {
//        var datePicker = $("#txtVasikaDate").datepicker({
//                dateFormat: "dd/mm/yy",
//                changeMonth: true,
//                changeYear: true,
//                showButtonPanel: true,
//                yearRange: "1900:" + new Date().getFullYear(),
//                maxDate: 0 // Restrict future dates
//        });

//        $("#calendarIcon").off("click").on("click", function () {
//            datePicker.datepicker("show");
//        });
//    });
//}
//function initializeMarla() {
//    var ddl = document.getElementById("ddlMarlaBigaBiswa");
//    if (ddl) {
//        ddl.removeEventListener("change", updateLabelsBasedUnit); // Avoid multiple bindings
//        ddl.addEventListener("change", updateLabelsBasedUnit);
//        updateLabelsBasedUnit(); // Set initial labels
//    }
//}

//function updateLabelsBasedUnit() {

//    var ddlMarla = document.getElementById("ddlMarlaBigaBiswa");

//    var lblAcres = document.getElementById("lblAcres");
//    var lblKarnal = document.getElementById("lblKarnal");
//    var lblMarla = document.getElementById("lblMarla");


//    if (ddlMarla != null)
//    {
//        if (ddlMarla.selectedIndex == 1)
//        {
//            lblAcres.innerHTML = "ਏਕੜ/Acres";
//            lblKarnal.innerHTML = "ਕਨਾਲ/Kanal";
//            lblMarla.innerHTML = "ਮਰਲਾ/Marla";
//        }
//        else if (ddlMarla.selectedIndex == 2)
//        {
//            lblAcres.innerHTML = "ਬਿਗਾ/Bigha";
//            lblKarnal.innerHTML = "ਬਿਸਵਾ/Biswa";
//            lblMarla.innerHTML = "ਬਿਸਵਾਸੀ/Biswansi";
//        }
//    }
//}
document.addEventListener('change', function (event) {
    if (event.target.classList.contains('custom-file-input_fd')) {
        let fileName = event.target.files[0]?.name || "Choose file";
        event.target.nextElementSibling.textContent = fileName;
    }
});
document.addEventListener('change', function (event) {
    if (event.target.classList.contains('custom-file-input_mp')) {
        let fileName = event.target.files[0]?.name || "Choose file";
        event.target.nextElementSibling.textContent = fileName;
    }
});

document.addEventListener('change', function (event) {
    if (event.target.classList.contains('custom-file-input_wd')) {
        let fileName = event.target.files[0]?.name || "Choose file";
        event.target.nextElementSibling.textContent = fileName;
    }
});
document.addEventListener('change', function (event) {
    if (event.target.classList.contains('custom-file-input_od')) {
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