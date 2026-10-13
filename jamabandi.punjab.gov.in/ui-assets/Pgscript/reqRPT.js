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
    }
});

function initializeDatePickers() {
    $(".datepicker").each(function () {
        var datePicker = $("#txtRapatDate").datepicker({
            dateFormat: "dd/mm/yy",
            changeMonth: true,
            changeYear: true,
            showButtonPanel: true,
            yearRange: "1900:" + new Date().getFullYear(),
            maxDate: 0 // Restrict future dates
        });
        $("#calendarIconrpt").off("click").on("click", function () {
            datePicker.datepicker("show");
        });
    });
    $(".datepicker").each(function () {
        var datePicker = $("#txtDateOfOrder").datepicker({
            dateFormat: "dd/mm/yy",
            changeMonth: true,
            changeYear: true,
            showButtonPanel: true,
            yearRange: "1900:" + new Date().getFullYear(),
            maxDate: 0 // Restrict future dates
        });

        $("#calendarIconcrt").off("click").on("click", function () {
            datePicker.datepicker("show");
        });
    });
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
