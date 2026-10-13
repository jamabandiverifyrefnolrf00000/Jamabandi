$(document).ready(function () {

	registerPBackScript();
	Sys.WebForms.PageRequestManager.getInstance().add_endRequest(EndRequestHandler);
	function EndRequestHandler(sender, args) {
		if (args.get_error() == undefined) {
            registerPBackScript();
           // attachFocusEvents();
		}
	}
	function registerPBackScript() {

        //$('#ddlLang').niceSelect();
        $('#ContentPlaceHolder1_ddlBank').select2();
        $('#ContentPlaceHolder1_ddlBranch').select2();

        $('#ContentPlaceHolder1_ddlDistrictO').select2();
        $('#ContentPlaceHolder1_ddlTehsilO').select2();
        $('#ContentPlaceHolder1_ddlVillageO').select2();
        $('#ContentPlaceHolder1_ddlDistrictA').select2();
        $('#ContentPlaceHolder1_ddTehsilA').select2();
        $('#ContentPlaceHolder1_ddVillageA').select2();


        $('#ddlDistrictO').select2();
        $('#ddlTehsilO').select2();
        $('#ddlVillageO').select2();
        $('#ddlDistrictA').select2();
        $('#ddTehsilA').select2();
        $('#ddVillageA').select2();

       $('#ContentPlaceHolder1_ddlDistrict').select2();
        $('#ContentPlaceHolder1_ddlTehsil').select2();
        $('#ContentPlaceHolder1_ddlPatwar').select2();
        $('#ContentPlaceHolder1_ddlVillage').select2();


		//sweetAlertInitialize();
		$(".set-parent-active").parent().parent().addClass("active");

		

        SetDataTable();
        SetDataTable1();
        SetDataTableExport();


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

	}

});
function SetDataTable()
{
    //Data Tables
    try {
        var datatablecntrl = $('.data-table');
        var pl = 10;

        if (datatablecntrl != undefined && datatablecntrl != null) {
            var table = $('.data-table').dataTable({
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
                    //$('.html5buttons').remove();
                    //if ($('.data-table tbody tr').length <= pl) {
                    //	$('.pagination').remove();
                    //}
                }
            });

            //alert('Rows ' + table.rows('.selected').count() + ' are selected');
            //console.log(table.data().count());
            var a = table.data().count();


            if (!table.data().count() <= pl) {

                //$('.pagination').remove();
                //console.log('Empty datatable');
            }

            //$('#dvscrollbar').scroll(function () {
            //	console.log("In");
            //	$('.data-table thead').removeClass().addClass('data-table-thead bg-success');
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
                    { extend: 'excel', enabled: true }
                ],
                "fnDrawCallback": function (oSettings) {
                    //$('.html5buttons').remove();
                    //if ($('.data-table tbody tr').length <= pl) {
                    //	$('.pagination').remove();
                    //}
                }
            });

            //alert('Rows ' + table.rows('.selected').count() + ' are selected');
            //console.log(table.data().count());
            var a = table.data().count();


            if (!table.data().count() <= pl) {

                //$('.pagination').remove();
                //console.log('Empty datatable');
            }

            //$('#dvscrollbar').scroll(function () {
            //	console.log("In");
            //	$('.data-table thead').removeClass().addClass('data-table-thead bg-success');
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