$(document).ready(function () {
    registerPBackScript();
    Sys.WebForms.PageRequestManager.getInstance().add_endRequest(EndRequestHandler);
    function EndRequestHandler(sender, args) {
        if (args.get_error() == undefined) {
            registerPBackScript();
            // attachFocusEvents();
        }
    }
    //.niceSelect('search')
    //.select2();
    function registerPBackScript() {

        //$("#RanglaPunjabModal").modal("show");
        //$('#ddlLang').nice.select2();

        $('#ContentPlaceHolder1_ddlDistrict').select2();
        $('#ContentPlaceHolder1_ddlTehsil').select2();
        $('#ContentPlaceHolder1_ddlVillage').select2();
        $('#ContentPlaceHolder1_ddlPatwar').select2();
        $('#ContentPlaceHolder1_ddlYear').select2();


        $('#ContentPlaceHolder1_ddlDistrictA').select2();
        $('#ContentPlaceHolder1_ddlTehsilA').select2();
        $('#ContentPlaceHolder1_ddlVillageA').select2();

        $('#SelectRegion_ddlDistrict').select2();
        $('#SelectRegion_ddlTehsil').select2();
        $('#SelectRegion_ddlVillage').select2();
        $('#SelectRegion_ddlYear').select2();

        $('#SelectRegionF_ddlDistrict').select2();
        $('#SelectRegionF_ddlTehsil').select2();
        $('#SelectRegionF_ddlVillage').select2();
        $('#SelectRegionF_ddlYear').select2();


        $('#ContentPlaceHolder1_SelectRegionF_ddlDistrict').select2();
        $('#ContentPlaceHolder1_SelectRegionF_ddlTehsil').select2();
        $('#ContentPlaceHolder1_SelectRegionF_ddlVillage').select2();
        $('#ContentPlaceHolder1_SelectRegionF_ddlYear').select2();

        //Jamabandi
        $('#ContentPlaceHolder1_ddlKhewatNumber').select2();
        $('#ContentPlaceHolder1_ddlKhasraNumber').select2();
        $('#ContentPlaceHolder1_ddlKhatouniNumber').select2();

        //PrintKeyboard("dvVKtbl", 'ContentPlaceHolder1_txtOwnerName', 'ContentPlaceHolder1_btnViewRportOwnerNameProceed');
        //initKeyboard("dvVKtbl", 'ContentPlaceHolder1_txtOwnerName', 'ContentPlaceHolder1_btnViewRportOwnerNameProceed');

        if (typeof PrintKeyboard === "function") {
            PrintKeyboard("dvVKtbl", 'ContentPlaceHolder1_txtOwnerName', 'ContentPlaceHolder1_btnViewRportOwnerNameProceed');
        }
        if (typeof initKeyboard === "function") {
            initKeyboard("dvVKtbl", 'ContentPlaceHolder1_txtOwnerName', 'ContentPlaceHolder1_btnViewRportOwnerNameProceed');
        }

        //Mutation DDLs
        $('#ContentPlaceHolder1_ddlMutationNumber').select2();

        //Roznamcha DDLs
        $('#ContentPlaceHolder1_ddlRapatNumberYear').select2();
        $('#ContentPlaceHolder1_ddlRoznamchaRapatNumber').select2();
        $('#ContentPlaceHolder1_ddlWaqiatiNumberYear').select2();
        $('#ContentPlaceHolder1_ddlWaqiatiNumberTypeofRapat').select2();
        $('#ContentPlaceHolder1_ddlRoznamchaWaqiatiRapatNumber').select2();

        //Mutation After Registry DDLs
        $('#ContentPlaceHolder1_ddlVaseekaTransactionNumber').select2();
        $('#ContentPlaceHolder1_ddlRegistrationDate').select2();


        $('#ContentPlaceHolder1_ddlDistrictO').select2();
        $('#ddlDistrictO').select2();

        //$('#ddlDistrictSO').select12();
        //$('#ContentPlaceHolder1_ddlDistrictSO').select12();

        $('#ContentPlaceHolder1_ddlTehsilO').select2();
        $('#ContentPlaceHolder1_ddlVillageO').select2();
        $('#ContentPlaceHolder1_ddlSubRegistrarOffice').select2();


        $('#ContentPlaceHolder1_ddlProjectDistrict').select2();
        $('#ContentPlaceHolder1_ddlProjectTehsil').select2();
        $('#ContentPlaceHolder1_ddlProjectVillage').select2();

        $('#ddlProjectDistrict').select2();
        $('#ddlProjectTehsil').select2();
        $('#ddlProjectVillage').select2();

        $('#ddlProjectDistrictA').select2();
        $('#ddlProjectTehsilA').select2();
        $('#ddlProjectVillageA').select2();

        $('#ContentPlaceHolder1_ddlCDistrict').select2();
        $('#ContentPlaceHolder1_ddlCState').select2();

        $('#ddlCDistrict').select2();
        $('#ddlCState').select2();
        
        $('#ContentPlaceHolder1_ddlPState').select2();
        $('#ContentPlaceHolder1_ddlPDistrict').select2();

        $('#ddlPState').select2();
        $('#ddlPDistrict').select2();



        $('#ContentPlaceHolder1_ddlULBCity').select2();
        $('#ddlULBCity').select2();

        //sweetAlertInitialize();

        $(".set-parent-active").parent().parent().addClass("active");

        //Tooltip
        $('[data-tip="tooltip"]').tooltip();

        //Close modal on confirm
        $(".confirm").click(function () {
            $('.modal').modal('hide');
        });


        /********************************
        * ACCORDION WITH TOGGLE ICONS
        *******************************/
        //function toggleIcon(e) {
        //	$(e.target)
        //		.prev('.panel-heading')
        //		.find(".more-less")
        //		.toggleClass('glyphicon-plus glyphicon-minus');
        //}
        //$('.panel-group').on('hidden.bs.collapse', toggleIcon);
        //$('.panel-group').on('shown.bs.collapse', toggleIcon);
        SetDataTable0();
        SetDataTable1();
        SetDataTable2();
        SetDataTable3();
        SetDataTableDash();
        SetDataTableDistrict();
        SetDataTableDistrictTehsil();
        SetDataTableOwner();
        SetDataTableKhewatMutation();
        SetDataTableExport();
        SetDataTableMSG();
        SetDataTableScr();
       // SetdataTableGrid();
    }
    //setTimeout(function () {
    //  if ($("#RanglaPunjabModal").length) {
    //    $("#RanglaPunjabModal").modal("show");
    // }
    //}, 200);

});
function notifyUser(messageType, title, text) {

    Swal.fire({
        title: title,
        text: text,
        icon: messageType,
        confirmButtonText: 'OK'
    },
        function () {
            $("body").removeClass("modal-open");
            $("body").css("padding-right", "0px");
        });
}


function SetdataTableGrid() {
    //Data Tables
    try {
        var datatablecntrl = $('.dataTableGrid');
        var pl = 10;
        if (datatablecntrl != undefined && datatablecntrl != null) {
            var table = $('.dataTableGrid').dataTable({
                "bLengthChange": false,
                "bInfo": false,
                pageLength: pl,
                responsive: true,
                fixedHeader: true,
                //"ordering": false,
                "aaSorting": [],

                'columnDefs': [
                    { "orderable": false, "targets": 0 } // 🚀 Disable sorting on first column only
                ],

                dom: '<"html5buttons"B>lTfgitp',
                'aoColumnDefs': [{
                    'bSortable': false,
                    //'aTargets': ['nosort']
                    'aTargets': [0]
                }],
                buttons: [
                    'copy',
                    { extend: 'excel', enabled: true }
                ],
                "fnDrawCallback": function (oSettings) {
                    var tableWrapper = $('.dataTableGrid').closest('.dataTables_wrapper'); // Get the specific table's wrapper
                    var pagination = tableWrapper.find('.dataTables_paginate'); // Find pagination inside the wrapper
                    var buttonsContainer = tableWrapper.find('.html5buttons'); // Find buttons inside the wrapper

                    if ($('.dataTableGrid tbody tr').length <= pl) {
                        //pagination.remove(); // Remove only this table's pagination
                        buttonsContainer.remove(); // Remove only this table's export buttons
                    }
                }
            });

        }




    }
    catch (ex) {
        //console.log(ex);
    }
}

function SetDataTableScr() {

    try {

        if ($('.DataTableScr').length == 0)
            return;

        var table = $('.DataTableScr').DataTable({

            destroy: true,

            bLengthChange: true,
            bInfo: true,
            pageLength: 10,

            responsive: false,
            scrollX: true,
            autoWidth: false,
            fixedHeader: true,

            aaSorting: []
        });

        setTimeout(function () {

            var wrapper = $('.DataTableScr').closest('.dataTables_wrapper');

            if (wrapper.find('.dtLeft').length == 0) {

                wrapper.css('position', 'relative');

                wrapper.append('<div class="dtArrow dtLeft">&#10094;</div>');
                wrapper.append('<div class="dtArrow dtRight">&#10095;</div>');
            }

            var body = wrapper.find('.dataTables_scrollBody');

            function updateArrow() {

                if (body.length == 0)
                    return;

                var obj = body[0];

                if (obj.scrollWidth <= obj.clientWidth) {

                    wrapper.find('.dtArrow').hide();
                    return;
                }

                wrapper.find('.dtLeft').toggle(obj.scrollLeft > 0);

                wrapper.find('.dtRight').toggle(
                    obj.scrollLeft < obj.scrollWidth - obj.clientWidth - 2
                );
            }

            body.off('scroll.dtArrow').on('scroll.dtArrow', updateArrow);

            wrapper.find('.dtLeft').off('click').on('click', function () {

                body.animate({
                    scrollLeft: '-=300'
                }, 250);

            });

            wrapper.find('.dtRight').off('click').on('click', function () {

                body.animate({
                    scrollLeft: '+=300'
                }, 250);

            });

            $(window).off('resize.dtArrow').on('resize.dtArrow', function () {

                setTimeout(updateArrow, 100);

            });

            updateArrow();

        }, 200);

    }
    catch (ex) {

        console.log(ex);

    }

}
function SetDataTable0() {
    //Data Tables
    try {
        var datatablecntrl = $('.data-table0');
        var pl = 10;

        if (datatablecntrl != undefined && datatablecntrl != null) {
            var table = $('.data-table0').dataTable({
                "bLengthChange": true,
                "bInfo": false,
                pageLength: pl,
                responsive: true,
                fixedHeader: true,
                //"ordering": false,
                "aaSorting": [],
                dom: '<"html5buttons"B>lTfgitp',
                'aoColumnDefs': [{
                    'bSortable': false,
                    'aTargets': ['nosort']
                }],
                buttons: [
                    //'copy',
                    //{ extend: 'excel', enabled: true }
                ],
                "fnDrawCallback": function (oSettings) {
                    //$('.html5buttons').remove();
                    //if ($('.data-table tbody tr').length <= pl) {
                    //	$('.pagination').remove();
                    //}
                }
            });
            var a = table.data().count();
            if (!table.data().count() <= pl) {


            }

        }

    }
    catch (ex) {

    }
}

function SetDataTable1() {
    //Data Tables
    try {
        var datatablecntrl = $('.data-table1');
        var pl = 10;
        if (datatablecntrl != undefined && datatablecntrl != null) {
            var table = $('.data-table1').dataTable({
                "bLengthChange": false,
                "bInfo": false,
                pageLength: pl,
                responsive: true,
                fixedHeader: true,
                "aaSorting": [],
                dom: '<"html5buttons"B>lTfgitp',
                'aoColumnDefs': [{
                    'bSortable': false,
                    'aTargets': ['nosort']
                }],
                buttons: [
                    'copy',
                    { extend: 'excel', enabled: false }
                ],
                "fnDrawCallback": function (oSettings) {
                    var tableWrapper = $('.data-table1').closest('.dataTables_wrapper'); // Get the specific table's wrapper
                    var pagination = tableWrapper.find('.dataTables_paginate'); // Find pagination inside the wrapper
                    var buttonsContainer = tableWrapper.find('.html5buttons'); // Find buttons inside the wrapper

                    if ($('.data-table1 tbody tr').length <= pl) {
                        pagination.remove(); // Remove only this table's pagination
                        buttonsContainer.remove(); // Remove only this table's export buttons
                    }
                }
            });
        }




    }
    catch (ex) {
        //console.log(ex);
    }
}

function SetDataTable2() {
    //Data Tables
    try {
        var datatablecntrl = $('.data-table2');
        var pl = 10;
        if (datatablecntrl != undefined && datatablecntrl != null) {
            var table = $('.data-table2').dataTable({
                "bLengthChange": true,
                "bInfo": true,
                pageLength: pl,
                responsive: true,
                fixedHeader: true,
                "aaSorting": [],
                "aaSorting": [],
                dom: '<"html5buttons"B>lTfgitp',
                'aoColumnDefs': [{
                    'bSortable': false,
                    'aTargets': ['nosort']
                }],
                buttons: [
                    'copy',
                    { extend: 'excel', enabled: true }
                ],
                "fnDrawCallback": function (oSettings) {
                    var tableWrapper = $('.data-table2').closest('.dataTables_wrapper'); // Get the specific table's wrapper
                    var pagination = tableWrapper.find('.dataTables_paginate'); // Find pagination inside the wrapper
                    var buttonsContainer = tableWrapper.find('.html5buttons'); // Find buttons inside the wrapper

                    if ($('.data-table2 tbody tr').length <= pl) {
                        //pagination.remove(); // Remove only this table's pagination
                        buttonsContainer.remove(); // Remove only this table's export buttons
                    }
                }
            });

        }




    }
    catch (ex) {
        //console.log(ex);
    }
}

function SetDataTable3() {
    //Data Tables
    try {
        var datatablecntrl = $('.data-table3');
        var pl = 10;
        if (datatablecntrl != undefined && datatablecntrl != null) {
            var table = $('.data-table3').dataTable({
                "bLengthChange": false,
                "bInfo": false,
                pageLength: pl,
                responsive: true,
                fixedHeader: true,
                //"ordering": false,
                "aaSorting": [],

                'columnDefs': [
                    { "orderable": false, "targets": 0 } // 🚀 Disable sorting on first column only
                ],

                dom: '<"html5buttons"B>lTfgitp',
                'aoColumnDefs': [{
                    'bSortable': false,
                    //'aTargets': ['nosort']
                    'aTargets': [0]
                }],
                buttons: [
                    'copy',
                    { extend: 'excel', enabled: true }
                ],
                "fnDrawCallback": function (oSettings) {
                    var tableWrapper = $('.data-table3').closest('.dataTables_wrapper'); // Get the specific table's wrapper
                    var pagination = tableWrapper.find('.dataTables_paginate'); // Find pagination inside the wrapper
                    var buttonsContainer = tableWrapper.find('.html5buttons'); // Find buttons inside the wrapper

                    if ($('.data-table3 tbody tr').length <= pl) {
                        //pagination.remove(); // Remove only this table's pagination
                        buttonsContainer.remove(); // Remove only this table's export buttons
                    }
                }
            });

        }




    }
    catch (ex) {
        //console.log(ex);
    }
}

function SetDataTableDash() {
    //Data Tables
    try {
        var datatablecntrl = $('.data-tableDash');
        var pl = 5;
        if (datatablecntrl != undefined && datatablecntrl != null) {
            var table = $('.data-tableDash').dataTable({
                "bLengthChange": false,
                "bInfo": false,
                pageLength: pl,
                responsive: true,
                fixedHeader: true,
                "aaSorting": [],
                dom: '<"html5buttons"B>lTfgitp',
                'aoColumnDefs': [{
                    'bSortable': false,
                    'aTargets': ['nosort']
                }],
                buttons: [
                    'copy',
                    { extend: 'excel', enabled: false }
                ],
                "fnDrawCallback": function (oSettings) {
                    var tableWrapper = $('.data-tableDash').closest('.dataTables_wrapper'); // Get the specific table's wrapper
                    var pagination = tableWrapper.find('.dataTables_paginate'); // Find pagination inside the wrapper
                    var buttonsContainer = tableWrapper.find('.html5buttons'); // Find buttons inside the wrapper
                    buttonsContainer.remove(); // Remove only this table's export buttons
                    if ($('.data-tableDash tbody tr').length <= pl) {
                        pagination.remove(); // Remove only this table's pagination
                    }
                }
            });

            //alert('Rows ' + table.rows('.selected').count() + ' are selected');
            //console.log(table.data().count());

            if (!table.data().count() <= pl) {
                //$('.pagination').remove();
                //console.log('Empty datatable');
            }

            //$('#dvscrollbar').scroll(function () {
            //	console.log("In");
            //	$('.data-table thead').removeClass().addClass('data-table-thead bg-dark');
            //	var offset = $('.data-table thead').offset() != undefined ? $('.data-table thead').offset().top : 0;
            //	if ($('#dvscrollbar').scrollTop() >= 10) {
            //		console.log("Fixed");
            //		$('.data-table thead').removeClass().addClass('data-table-thead-sticky bg-dark ');
            //	}
            //});
        }




    }
    catch (ex) {
        //console.log(ex);
    }
}

function SetDataTableDistrict() {
    //Data Tables
    try {
        var datatablecntrl = $('.data-tableDist');
        var pl = 23;
        if (datatablecntrl != undefined && datatablecntrl != null) {
            var table = $('.data-tableDist').dataTable({
                "bLengthChange": false,
                "bInfo": false,
                pageLength: pl,
                responsive: true,
                fixedHeader: true,
                "aaSorting": [],
                dom: '<"html5buttons"B>lTfgitp',
                'aoColumnDefs': [{
                    'bSortable': false,
                    'aTargets': ['nosort']
                }],
                buttons: [
                    'copy',
                    { extend: 'excel', enabled: true }
                ],
                "fnDrawCallback": function (oSettings) {
                    var tableWrapper = $('.data-tableDist').closest('.dataTables_wrapper'); // Get the specific table's wrapper
                    var pagination = tableWrapper.find('.dataTables_paginate'); // Find pagination inside the wrapper
                    var buttonsContainer = tableWrapper.find('.html5buttons'); // Find buttons inside the wrapper
                    // buttonsContainer.remove(); // Remove only this table's export buttons

                    if ($('.data-tableDist tbody tr').length <= pl) {
                        pagination.remove(); // Remove only this table's pagination
                    }
                }
            });

            //alert('Rows ' + table.rows('.selected').count() + ' are selected');
            //console.log(table.data().count());

            if (!table.data().count() <= pl) {
                //$('.pagination').remove();
                //console.log('Empty datatable');
            }

            //$('#dvscrollbar').scroll(function () {
            //	console.log("In");
            //	$('.data-table thead').removeClass().addClass('data-table-thead bg-dark');
            //	var offset = $('.data-table thead').offset() != undefined ? $('.data-table thead').offset().top : 0;
            //	if ($('#dvscrollbar').scrollTop() >= 10) {
            //		console.log("Fixed");
            //		$('.data-table thead').removeClass().addClass('data-table-thead-sticky bg-dark ');
            //	}
            //});
        }




    }
    catch (ex) {
        //console.log(ex);
    }
}
function SetDataTableDistrictTehsil() {
    try {
        var datatablecntrl = $('.data-tableDistTeh');
        var pl = 10;

        if (datatablecntrl.length > 0) {
            var table = $('.data-tableDistTeh').DataTable({
                "bLengthChange": true,
                "bInfo": true,
                pageLength: pl,
                responsive: true,
                fixedHeader: true,
                "aaSorting": [],
                dom: '<"html5buttons"B>lTfgitp',
                buttons: [
                    'copy',
                    {
                        extend: 'excelHtml5',
                        text: 'Export to Excel',
                        customize: function (xlsx) {
                            var sheet = xlsx.xl.worksheets['sheet1.xml'];
                            var $sheet = $(sheet);
                            var rows = $sheet.find('row');

                            // Ensure the first header row is duplicated
                            var firstHeader = rows.eq(0).clone();
                            rows.eq(0).before(firstHeader);
                            // alert(firstHeader);
                            // Define new column names for export
                            var headerMap = {
                                "Apply": "Apply",
                                "Initiated": "Initiation-Initiated",
                                "Pending": "Initiation-Pending",
                                "Verified": "Verification-Verified",
                                "Pending": "Verification-Pending",
                                "Rejected": "Sanction-Rejected",
                                "Sanctioned": "Sanction-Sanctioned",
                                "Pending": "Sanction-Pending",
                                "Total": "Pending-Total",
                                "Beyond 30 Days": "Pending-Beyond 30 Days"
                            };

                            // Modify the second header row
                            var secondHeaderCells = rows.eq(1).find('c');
                            secondHeaderCells.each(function (index) {
                                var cellText = $(this).text().trim();
                                if (headerMap[cellText]) {
                                    $(this).find('t').text(headerMap[cellText]);
                                }
                            });
                        }
                    }
                ],
                "fnDrawCallback": function (oSettings) {
                    var tableWrapper = $('.data-tableDistTeh').closest('.dataTables_wrapper');
                    var pagination = tableWrapper.find('.dataTables_paginate');

                    if ($('.data-tableDistTeh tbody tr').length <= pl) {
                        pagination.remove();
                    }
                }
            });

            //table.buttons().container().appendTo('.html5buttons');
        }
    } catch (ex) {
        console.error("Error initializing DataTable: ", ex);
    }
}

function SetDataTableDistrictTehsil_old() {
    //Data Tables
    try {
        var datatablecntrl = $('.data-tableDistTeh');
        var pl = 10;
        if (datatablecntrl != undefined && datatablecntrl != null) {
            var table = $('.data-tableDistTeh').dataTable({
                "bLengthChange": true,
                "bInfo": true,
                pageLength: pl,
                responsive: true,
                fixedHeader: true,
                "aaSorting": [],
                dom: '<"html5buttons"B>lTfgitp',
                //'aoColumnDefs': [{
                //    'bSortable': false,
                //    'aTargets': ['nosort']
                //}],
                buttons: [
                    'copy',
                    {
                        //extend: 'excel', enabled: true
                        extend: 'excelHtml5',
                        text: 'Export to Excel123',
                        customize: function (xlsx) {
                            var sheet = xlsx.xl.worksheets['sheet1.xml'];
                            var $rows = $(sheet).find('row');

                            // Duplicate the second header row manually
                            var secondHeaderRow = $rows.eq(1).clone();
                            $rows.eq(0).after(secondHeaderRow);
                        }
                    }
                ],
                "fnDrawCallback": function (oSettings) {
                    var tableWrapper = $('.data-tableDistTeh').closest('.dataTables_wrapper'); // Get the specific table's wrapper
                    var pagination = tableWrapper.find('.dataTables_paginate'); // Find pagination inside the wrapper
                    var buttonsContainer = tableWrapper.find('.html5buttons'); // Find buttons inside the wrapper
                    //buttonsContainer.remove(); // Remove only this table's export buttons
                    if ($('.data-tableDistTeh tbody tr').length <= pl) {
                        pagination.remove(); // Remove only this table's pagination
                    }
                }
            });

            //alert('Rows ' + table.rows('.selected').count() + ' are selected');
            //console.log(table.data().count());

            if (!table.data().count() <= pl) {
                //$('.pagination').remove();
                //console.log('Empty datatable');
            }

            //$('#dvscrollbar').scroll(function () {
            //	console.log("In");
            //	$('.data-table thead').removeClass().addClass('data-table-thead bg-dark');
            //	var offset = $('.data-table thead').offset() != undefined ? $('.data-table thead').offset().top : 0;
            //	if ($('#dvscrollbar').scrollTop() >= 10) {
            //		console.log("Fixed");
            //		$('.data-table thead').removeClass().addClass('data-table-thead-sticky bg-dark ');
            //	}
            //});
        }




    }
    catch (ex) {
        //console.log(ex);
    }
}
function SetDataTableOwner() {
    //Data Tables
    try {
        var datatablecntrl = $('.data-tableOwner');
        var pl = 10;

        if (datatablecntrl != undefined && datatablecntrl != null) {
            var table = $('.data-tableOwner').dataTable({
                "bLengthChange": true,
                "bInfo": true,
                pageLength: pl,
                responsive: true,
                fixedHeader: true,
                //"ordering": false,
                "aaSorting": [],
                dom: '<"html5buttons"B>lTfgitp',
                'aoColumnDefs': [{
                    'bSortable': false,
                    'aTargets': ['nosort']
                }],
                buttons: [
                    //'copy',
                    //{ extend: 'excel', enabled: true }
                ],
                "fnDrawCallback": function (oSettings) {
                    //$('.html5buttons').remove();
                    //if ($('.data-table tbody tr').length <= pl) {
                    //	$('.pagination').remove();
                    //}
                }
            });


            var a = table.data().count();


            if (!table.data().count() <= pl) {


            }

        }

    }
    catch (ex) {

    }
}
function SetDataTableKhewatMutation() {
    //Data Tables
    try {
        var datatablecntrl = $('.data-tableKhewatMutation');
        var pl = 10;
        if (datatablecntrl != undefined && datatablecntrl != null) {
            var table = $('.data-tableKhewatMutation').dataTable({
                "bLengthChange": false,
                "bInfo": true,
                pageLength: pl,
                responsive: true,
                fixedHeader: true,
                //"ordering": false,
                "aaSorting": [],

                'columnDefs': [
                    { "orderable": false, "targets": 0 } // 🚀 Disable sorting on first column only
                ],

                dom: '<"html5buttons"B>lTfgitp',
                'aoColumnDefs': [{
                    'bSortable': false,
                    //'aTargets': ['nosort']
                    'aTargets': [0]
                }],
                buttons: [
                    'copy',
                    { extend: 'excel', enabled: true }
                ],
                "fnDrawCallback": function (oSettings) {
                    var tableWrapper = $('.data-tableKhewatMutation').closest('.dataTables_wrapper'); // Get the specific table's wrapper
                    var pagination = tableWrapper.find('.dataTables_paginate'); // Find pagination inside the wrapper
                    var buttonsContainer = tableWrapper.find('.html5buttons'); // Find buttons inside the wrapper

                    if ($('.data-tableKhewatMutation tbody tr').length <= pl) {
                        //pagination.remove(); // Remove only this table's pagination
                        buttonsContainer.remove(); // Remove only this table's export buttons
                    }
                }
            });

        }




    }
    catch (ex) {
        //console.log(ex);
    }
}

function SetDataTableRec() {
    //Data Tables
    try {
        var datatablecntrl = $('.data-tableRec');
        var pl = 10;
        if (datatablecntrl != undefined && datatablecntrl != null) {
            var table = $('.data-tableRec').dataTable({
                "bLengthChange": false,
                "bInfo": false,
                pageLength: pl,
                responsive: true,
                fixedHeader: true,
                "aaSorting": [],
                dom: '<"html5buttons"B>lTfgitp',
                'aoColumnDefs': [{
                    'bSortable': false,
                    'aTargets': ['nosort']
                }],
                buttons: [
                    //'copy',
                    { extend: 'pdf', enabled: true }
                ],
                "fnDrawCallback": function (oSettings) {
                    var tableWrapper = $('.data-tableReq').closest('.dataTables_wrapper'); // Get the specific table's wrapper
                    var pagination = tableWrapper.find('.dataTables_paginate'); // Find pagination inside the wrapper
                    var buttonsContainer = tableWrapper.find('.html5buttons'); // Find buttons inside the wrapper

                    if ($('.data-tableReq tbody tr').length <= pl) {
                        pagination.remove(); // Remove only this table's pagination
                        buttonsContainer.remove(); // Remove only this table's export buttons
                    }
                }
            });
        }




    }
    catch (ex) {
        //console.log(ex);
    }
}

function SetDataTableExport() {
    //Data Tables
    try {
        var datatablecntrl = $('.data-tableExp');
        var pl = 10;
        if (datatablecntrl != undefined && datatablecntrl != null) {
            var table = $('.data-tableExp').dataTable({
                "bLengthChange": true,
                "bInfo": true,
                pageLength: pl,
                responsive: true,
                fixedHeader: true,
                "aaSorting": [],
                "aaSorting": [],
                //dom: '<"html5buttons"B>lTfgitp',
                //dom: '<"top d-flex justify-content-between align-items-center"Bfl>rt<"bottom d-flex justify-content-between"ip>',
                dom: '<"top d-flex justify-content-between align-items-center"Bfl>rt<"bottom d-flex justify-content-start"ip>',

                'aoColumnDefs': [{
                    'bSortable': false,
                    'aTargets': ['nosort']
                }],
                buttons: [
                    'copy',
                    { extend: 'excel', enabled: true }
                ],
                "fnDrawCallback": function (oSettings) {
                    var tableWrapper = $('.data-tableExp').closest('.dataTables_wrapper'); // Get the specific table's wrapper
                    var pagination = tableWrapper.find('.dataTables_paginate'); // Find pagination inside the wrapper
                    var buttonsContainer = tableWrapper.find('.html5buttons'); // Find buttons inside the wrapper

                    if ($('.data-tableExp tbody tr').length <= pl) {
                        //pagination.remove(); // Remove only this table's pagination
                        //buttonsContainer.remove(); // Remove only this table's export buttons
                    }
                }
            });

        }




    }
    catch (ex) {
        //console.log(ex);
    }
}

function SetDataTableMSG() {
    //Data Tables
    try {
        var datatablecntrl = $('.data-tableMSG');
        if (datatablecntrl != undefined && datatablecntrl != null) {
            var table = $('.data-tableMSG').dataTable({
                "bLengthChange": false,
                "bInfo": false,
                responsive: true,
                fixedHeader: true,
                "aaSorting": [],
                dom: '<"html5buttons"B>lTgitp',
                'aoColumnDefs': [{
                    'bSortable': false,
                    'aTargets': ['nosort']
                }],
                buttons: [
                    'copy',
                    { extend: 'excel', enabled: false }
                ],
                "fnDrawCallback": function (oSettings) {
                    var tableWrapper = $('.data-tableMSG').closest('.dataTables_wrapper'); // Get the specific table's wrapper
                    var pagination = tableWrapper.find('.dataTables_paginate'); // Find pagination inside the wrapper
                    var buttonsContainer = tableWrapper.find('.html5buttons'); // Find buttons inside the wrapper
                    buttonsContainer.remove(); // Remove only this table's export buttons
                    if ($('.data-tableDash tbody tr').length <= pl) {
                        pagination.remove(); // Remove only this table's pagination
                    }
                }
            });
        }




    }
    catch (ex) {
        //console.log(ex);
    }
}    

function notifyUser_old(messageType, title, text) {
    swal({
        title: title,
        text: text,
        type: messageType,
        button: 'OK'
    },
        function () {
            $("body").removeClass("modal-open");
            $("body").css("padding-right", "0px");
        });
}


function PrintElem(elem) {

}




//Navigation Menu
$(document).on('click', '.nav-primary a', function (e) {
    var $this = $(e.target), $active;
    $this.is('a') || ($this = $this.closest('a'));
    if ($('.nav-vertical').length) {
        return;
    }

    $active = $this.parent().siblings(".active");
    $active && $active.find('> a').toggleClass('active'); //&& $active.toggleClass('active').find('> ul:visible').slideUp(200);

    ($this.hasClass('active') && $this.next().slideUp(200)) || $this.next().slideDown(200);
    $this.toggleClass('active').parent().toggleClass('active');

    $this.next().is('ul') && e.preventDefault();
});

function setCookie(key, value, exMins) {
    var expires = new Date();
    expires.setTime(date.getTime() + (exMins * 60 * 1000));
    document.cookie = key + "=" + value + ";expires=" + expires.toUTCString();
}

function getCookie(key) {
    var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
    return keyValue ? keyValue[2] : null;
}

function deleteCookie(key) {
    var expires = new Date();
    expires.setTime(expires.getTime() - (1000 * 60 * 60 * 24)); //Set the time to the past. 1000 milliseonds = 1 second
    document.cookie = key + "=" + value + ";expires=" + expires.toUTCString();

}