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
        initializeDatePickers();
        initializeMarla();
    }
});
    function initializeDatePickers() {
    $(".datepicker").each(function ()
    {
        var datePicker = $("#txtVasikaDate").datepicker({
                dateFormat: "dd/mm/yy",
                changeMonth: true,
                changeYear: true,
                showButtonPanel: true,
                yearRange: "1900:" + new Date().getFullYear(),
                maxDate: 0 // Restrict future dates
        });

        $("#calendarIcon").off("click").on("click", function () {
            datePicker.datepicker("show");
        });
    });
}
function initializeMarla() {
    var ddl = document.getElementById("ddlMarlaBigaBiswa");
    if (ddl) {
        ddl.removeEventListener("change", updateLabelsBasedUnit); // Avoid multiple bindings
        ddl.addEventListener("change", updateLabelsBasedUnit);
        updateLabelsBasedUnit(); // Set initial labels
    }
}

function updateLabelsBasedUnit() {

    var ddlMarla = document.getElementById("ddlMarlaBigaBiswa");

    var lblAcres = document.getElementById("lblAcres");
    var lblKarnal = document.getElementById("lblKarnal");
    var lblMarla = document.getElementById("lblMarla");


    if (ddlMarla != null)
    {
        if (ddlMarla.selectedIndex == 1)
        {
            lblAcres.innerHTML = "ਏਕੜ/Acres";
            lblKarnal.innerHTML = "ਕਨਾਲ/Kanal";
            lblMarla.innerHTML = "ਮਰਲਾ/Marla";
        }
        else if (ddlMarla.selectedIndex == 2)
        {
            lblAcres.innerHTML = "ਬਿਗਾ/Bigha";
            lblKarnal.innerHTML = "ਬਿਸਵਾ/Biswa";
            lblMarla.innerHTML = "ਬਿਸਵਾਸੀ/Biswansi";
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
    if (event.target.classList.contains('custom-file-input_wa')) {
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