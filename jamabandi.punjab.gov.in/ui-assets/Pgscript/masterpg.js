    function getPreviousDay(date = new Date())
    {
            const previous = new Date(date.getTime());
    previous.setDate(date.getDate() - 1);
    var date = previous.getDate();
    var year = previous.getFullYear();
    var month = previous.getMonth()+1;

    if (date < 10)
    {
        date = '0' + date
    }
    if (month < 10)
    {
        month = '0' + month
    }
    return date + "/" + month + "/" + year;
}

    if (document.getElementById('date') != null) { document.getElementById('date').innerHTML = getPreviousDay(); }


    function khewatselectall(ele) {
        if ($(ele).prop("checked") == true) {
        $('span.cbkhewat input[type=checkbox]').prop("checked", true);
			} else {
        $('span.cbkhewat input[type=checkbox]').prop("checked", false);
			}
		}




    var _inc_count = 0;
    var _dec_count = 0;

    $(document).ready(function () {

	var logo_span_OrgSize = ($('#logo span').css('font-size'));
    var navigation_a_span_OrgSize = ($('#navigation a span').css('font-size'));
    var linavctrl_table_tr_span_OrgSize = ($('.linavcontrols table tr span').css('font-size'));
    var linavctrl_table_tr_a_OrgSize = ($('.linavcontrols table tr a').css('font-size'));
    var linavcontrols_niceselect_span_OrgSize = ($('.linavcontrols .nice-select span.current').css('font-size'));
    var linavcontrols_niceselect_li_OrgSize = ($('.linavcontrols .nice-select li').css('font-size'));
    var niceselect_span_OrgSize = ($('.nice-select span.current').css('font-size'));
    var niceselect_li_OrgSize = ($('.nice-select li').css('font-size'));
    var legend_lg_OrgSize = ($('legend.lg').css('font-size'));
    var lbl_OrgSize = ($('span.label').css('font-size'));
    var label_xl_OrgSize = ($('span.label-xl-font-size').css('font-size'));
    var label_lg_OrgSize = ($('span.label-lg-font-size').css('font-size'));
    var label_md_OrgSize = ($('span.label-md-font-size').css('font-size'));
    var label_sm_OrgSize = ($('span.label-sm-font-size').css('font-size'));
    var btn_OrgSize = ($('.btn').css('font-size'));
    var table_thead_OrgSize = ($('.data-table thead tr th').css('font-size'));
    var table_tbody_OrgSize = ($('.data-table tbody tr td').css('font-size'));
        var radiobtn_OrgSize = ($('.radiobtn').css('font-size'));
        var linkbtn_OrgSize = ($('.font-control-link').css('font-size'));
        var btn_icon_OrgSize = ($('.btn i').css('font-size'));
        var heading_OrgSize = ($('.font-resize-heading').css('font-size'));
        var selfLegend_OrgSize = $('.font-resize-scope legend').css('font-size');
        var selfText_OrgSize = $('.font-resize-scope p').css('font-size');
        var selfChk_OrgSize = $('.font-resize-scope input[type=checkbox]').parent().css('font-size');
        var selfSpan_OrgSize = $('.font-resize-scope span').parent().css('font-size');
        var footerText_OrgSize = $('.footer-font').css('font-size');
        var dangerLabel_OrgSize = $('.font-resize-label').css('font-size');
        var inputGroupBtn_OrgSize = $('.input-group .btn').css('font-size');
        var marginbottom2_OrgSize = $('.margin-bottom-2').css('font-size');
        var badgepillLegend = $('.badge-pillLegend').css('font-size');

    //var footer_OrgSize = ($('.radiobtn').css('font-size'));


    // Reset Font Size
    $("#btnresetfonts").click(function () {
        _inc_count = 0;
    _dec_count = 0;

    $('#logo span').css('font-size', logo_span_OrgSize);
    $('#navigation a span').css('font-size', navigation_a_span_OrgSize);
    $('.linavcontrols table tr span').css('font-size', linavctrl_table_tr_span_OrgSize);
    $('.linavcontrols table tr a').css('font-size', linavctrl_table_tr_a_OrgSize);
    $('.linavcontrols .nice-select span.current').css('font-size', linavcontrols_niceselect_span_OrgSize);
    $('.linavcontrols .nice-select li.option').css('font-size', linavcontrols_niceselect_li_OrgSize);
    $('.nice-select span.current').css('font-size', niceselect_span_OrgSize);
    $('.nice-select li.option').css('font-size', niceselect_li_OrgSize);
    $('legend.lg').css('font-size', legend_lg_OrgSize);
    $('span.label').css('font-size', lbl_OrgSize);
    $('span.label-xl-font-size').css('font-size', label_xl_OrgSize);
    $('span.label-lg-font-size').css('font-size', label_lg_OrgSize);
    $('span.label-md-font-size').css('font-size', label_md_OrgSize);
    $('span.label-sm-font-size').css('font-size', label_sm_OrgSize);
    $('.btn').css('font-size', btn_OrgSize);
    $('.data-table thead tr th').css('font-size', table_thead_OrgSize);
    $('.data-table tbody tr td').css('font-size', table_tbody_OrgSize);
    $('.radiobtn').css('font-size', radiobtn_OrgSize);
    $('.font-control-link').css('font-size', linkbtn_OrgSize);
    $('.font-resize-heading').css('font-size', heading_OrgSize);
    $('.btn i').css('font-size', btn_icon_OrgSize);
    $('.font-resize-scope legend').css('font-size', selfLegend_OrgSize);
    $('.font-resize-scope p').css('font-size', selfText_OrgSize);
    $('.font-resize-scope input[type=checkbox]').parent().css('font-size', selfChk_OrgSize);
        $('.font-resize-scope span').css('font-size', selfSpan_OrgSize);

        $('.footer-font').css('font-size', footerText_OrgSize);
        $('.font-resize-label').css('font-size', dangerLabel_OrgSize);
        $('.input-group .btn').css('font-size', inputGroupBtn_OrgSize);
        $('.margin-bottom-2').css('font-size', marginbottom2_OrgSize);
        $('.badge-pillLegend').css('font-size', badgepillLegend);
    return false;
			});

    // Increase Font Size
    $("#btnincreasefonts").click(function () {
        _inc_count++; if (_inc_count > 5) return;
    var sign = '+=';
        //var inc = 0.52;
        var inc = 1.5;  // px

    changefontsize($('#logo span'), sign, inc);
    changefontsize($('#navigation a span'), sign, inc);
    changefontsize($('.linavcontrols table tr span'), sign, inc);
    changefontsize($('.linavcontrols table tr a'), sign, inc);
    changefontsize($('.linavcontrols .nice-select span.current'), sign, inc);
    changefontsize($('.linavcontrols .nice-select li.option'), sign, inc);
    changefontsize($('.nice-select span.current'), sign, inc);
    changefontsize($('.nice-select li.option'), sign, inc);
    changefontsize($('legend.lg'), sign, inc);
    changefontsize($('span.label'), sign, inc);
    changefontsize($('span.label-xl-font-size'), sign, inc);
    changefontsize($('span.label-lg-font-size'), sign, inc);
    changefontsize($('span.label-md-font-size'), sign, inc);
    changefontsize($('span.label-sm-font-size'), sign, inc);
    changefontsize($('.btn'), sign, inc);
    changefontsize($('.data-table thead tr th'), sign, inc);
    changefontsize($('.data-table tbody tr td'), sign, inc);
    changefontsize($('.radiobtn'), sign, inc);
    changefontsize($('.font-control-link'), sign, inc);
    changefontsize($('.font-resize-heading'), sign, inc);
    changefontsize($('.btn i'), sign, inc); 
    changefontsize($('.font-resize-scope legend'), sign, inc);
    changefontsize($('.font-resize-scope p'), sign, inc);
    changefontsize($('.font-resize-scope input[type=checkbox]').parent(), sign, inc);
    changefontsize($('.font-resize-scope span'), sign, inc);
    changefontsize($('.footer-font'), sign, inc);
        changefontsize($('.font-resize-label'), sign, inc);
        changefontsize($('.input-group .btn'), sign, inc);
        changefontsize($('.margin-bottom-2'), sign, inc);
        changefontsize($('.badge-pillLegend'), sign, inc);
        
        

    return false;
			});

    // Decrease Font Size
    $("#btndecreasefonts").click(function () {
        _dec_count++; if (_dec_count > 5) return;
    var sign = '-=';
        //var dec = 0.42;
        var dec = 1.2;  // px

    changefontsize($('#logo span'), sign, dec);
    changefontsize($('#navigation a span'), sign, dec);
    changefontsize($('.linavcontrols table tr span'), sign, dec);
    changefontsize($('.linavcontrols table tr a'), sign, dec);
    changefontsize($('.linavcontrols .nice-select span.current'), sign, dec);
    changefontsize($('.linavcontrols .nice-select li.option'), sign, dec);
    changefontsize($('.nice-select span.current'), sign, dec);
    changefontsize($('.nice-select li.option'), sign, dec);
    changefontsize($('legend.lg'), sign, dec);
    changefontsize($('span.label'), sign, dec);
    changefontsize($('span.label-xl-font-size'), sign, dec);
    changefontsize($('span.label-lg-font-size'), sign, dec);
    changefontsize($('span.label-md-font-size'), sign, dec);
    changefontsize($('span.label-sm-font-size'), sign, dec);
    changefontsize($('.btn'), sign, dec);
    changefontsize($('.data-table thead tr th'), sign, dec);
    changefontsize($('.data-table tbody tr td'), sign, dec);
    changefontsize($('.radiobtn'), sign, dec);
    changefontsize($('.font-control-link'), sign, dec);
    changefontsize($('.font-resize-heading'), sign, dec);
    changefontsize($('.btn i'), sign, dec);
    changefontsize($('.font-resize-scope legend'), sign, dec);
    changefontsize($('.font-resize-scope p'), sign, dec);
        changefontsize($('.font-resize-scope input[type=checkbox]').parent(), sign, dec);
        changefontsize($('.font-resize-scope span'), sign, dec);
        changefontsize($('.footer-font'), sign, dec);
        changefontsize($('.font-resize-label'), sign, dec);
        changefontsize($('.input-group .btn'), sign, dec);
        changefontsize($('.margin-bottom-2'), sign, dec);
        changefontsize($('.badge-pillLegend'), sign, dec);
    return false;
			});

		});

  //  function changefontsize(ele, sign, by) {
  //      $(ele).animate({ 'font-size': sign + by + "pt" });
		//}
function changefontsize(ele, sign, by) {
    $(ele).each(function () {
        var current = parseFloat($(this).css('font-size'));
        if (sign === '+=') {
            $(this).css('font-size', (current + by) + 'px');
        } else {
            $(this).css('font-size', (current - by) + 'px');
        }
    });
}
