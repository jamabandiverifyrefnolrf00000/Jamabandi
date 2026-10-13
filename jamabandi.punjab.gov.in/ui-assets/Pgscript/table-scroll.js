function addScrollArrows() {

    var wrapper = $(".dataTables_scroll");

    if (wrapper.length == 0)
        return;

    if (wrapper.find(".dt-scroll-arrow").length > 0)
        return;

    wrapper.addClass("dt-scroll-wrapper");

    wrapper.append(
        '<div class="dt-scroll-arrow dt-scroll-left">&#10094;</div>' +
        '<div class="dt-scroll-arrow dt-scroll-right">&#10095;</div>'
    );

    wrapper.on("click", ".dt-scroll-left", function () {

        $(".dataTables_scrollBody")
            .stop()
            .animate({
                scrollLeft: "-=300"
            }, 250);

    });

    wrapper.on("click", ".dt-scroll-right", function () {

        $(".dataTables_scrollBody")
            .stop()
            .animate({
                scrollLeft: "+=300"
            }, 250);

    });

    $(".dataTables_scrollBody").on("scroll", updateScrollArrows);

    $(window).on("resize", function () {

        setTimeout(updateScrollArrows, 200);

    });

    updateScrollArrows();
}

function updateScrollArrows() {

    var body = $(".dataTables_scrollBody");

    if (body.length == 0)
        return;

    var obj = body[0];

    if (obj.scrollWidth <= obj.clientWidth) {

        $(".dt-scroll-arrow").hide();
        return;
    }

    if (obj.scrollLeft <= 5)
        $(".dt-scroll-left").hide();
    else
        $(".dt-scroll-left").show();

    if (obj.scrollLeft >= obj.scrollWidth - obj.clientWidth - 5)
        $(".dt-scroll-right").hide();
    else
        $(".dt-scroll-right").show();
}