document.addEventListener("DOMContentLoaded", function () {

    var btn = document.getElementById("btn-back-to-topD");
    var scrollEl = document.scrollingElement || document.documentElement;

    window.addEventListener("scroll", function () {
        if (scrollEl.scrollTop > 20) {
            btn.style.display = "block";
        } else {
            btn.style.display = "none";
        }
    });

    btn.addEventListener("click", function () {
        scrollEl.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

});
