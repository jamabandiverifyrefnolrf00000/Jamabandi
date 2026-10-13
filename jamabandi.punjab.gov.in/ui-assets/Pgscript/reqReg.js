$(document).ready(function () {
    initializeDatePickers();
    Sys.WebForms.PageRequestManager.getInstance().add_endRequest(EndRequestHandler);
    function EndRequestHandler(sender, args) {
        if (args.get_error() == undefined) {
            initializeDatePickers();
        }
    }
});

function initializeDatePickers() {
    $(".datepicker").each(function ()
    {
        var datePickerDOR = $("#txtRegDate").datepicker({
            dateFormat: "dd/mm/yy",
            changeMonth: true,
            changeYear: true,
            showButtonPanel: true,
            yearRange: "1900:" + new Date().getFullYear(),
            maxDate: 0 // Restrict future dates
        });
        $("#calendarIconRegDate").off("click").on("click", function () {
          
            datePickerDOR.datepicker("show");
        });
    });
}
function SetUniqueRadioButton(nameregex, current) {
    re = new RegExp(nameregex);
    for (i = 0; i < document.forms[0].elements.length; i++) {
        elm = document.forms[0].elements[i]
        if (elm.type == 'radio') {
            if (re.test(elm.name)) {
                elm.checked = false;
            }
        }
    }
    current.checked = true;
}