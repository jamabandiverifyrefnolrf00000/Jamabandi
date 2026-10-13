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

document.addEventListener('change', function (event)
{
    if (event.target.classList.contains('custom-file-input_ap')) {
        let fileName = event.target.files[0]?.name || "Choose file";
        event.target.nextElementSibling.textContent = fileName;
    }
});
function initializeDatePickers() {
    $(".datepicker").each(function () {
        var datePickerStartDate = $("#txtIssuedOn").datepicker({
            dateFormat: "dd/mm/yy",
            changeMonth: true,
            changeYear: true,
            showButtonPanel: true,
            yearRange: "1900:" + new Date().getFullYear(),
            maxDate: 0 // Restrict future dates
        });
        $("#calendarIconID").off("click").on("click", function () {
            datePickerStartDate.datepicker("show");
        });
    });
    $(".datepicker").each(function () {
        var datePickerStartDate = $("#txtIssueDate").datepicker({
            dateFormat: "dd/mm/yy",
            changeMonth: true,
            changeYear: true,
            showButtonPanel: true,
            yearRange: "1900:" + new Date().getFullYear(),
            maxDate: 0 // Restrict future dates
        });
        $("#calendarIconID").off("click").on("click", function () {
            datePickerStartDate.datepicker("show");
        });
    });

    $(".datepicker").each(function () {
        var datePickerSpeedPostDate = $("#txtspeedPostDoneOn").datepicker({
            dateFormat: "dd/mm/yy",
            changeMonth: true,
            changeYear: true,
            showButtonPanel: true,
            yearRange: "2026:" + new Date().getFullYear(),
            maxDate: 0 // Restrict future dates
        });
        $("#calendarIconSD").off("click").on("click", function () {
            datePickerSpeedPostDate.datepicker("show");
        });
    });
}
    function ToggleInstructions() {

        var div = document.getElementById("divInstructions");
        var arrow = document.getElementById("spnArrow");



        if (div.style.display == "none" || div.style.display == "")
        {

            div.style.display = "block";
            arrow.innerHTML = "▲";
        }
        else
        {
            div.style.display = "none";
            arrow.innerHTML = "▼";
        }
}
function toggleTextbox(chk, txtId) {

    //var txt = document.getElementById(txtId);
    
    //if (!txt)
    //    return;

    //if (chk.checked)
    //{
    //    txt.removeAttribute("readonly");
    //}
    //else {
    //    txt.setAttribute("readonly", "readonly");
    //    txt.value = '';
    //}
}
