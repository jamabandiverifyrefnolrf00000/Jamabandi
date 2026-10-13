//<script type="text/javascript">
    var scrollPosition = 0;

    // Capture the scroll position before the postback
    function saveScrollPosition() {
        scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
            //alert("scrollPosition"+scrollPosition);
        }

    // Restore the scroll position after the postback
    function restoreScrollPosition() {
        //alert("restore  scrollPosition" + scrollPosition);


        setTimeout(function () {
            window.scrollTo(0, scrollPosition);
        }, 100); // Adjust delay if necessary

    window.scrollTo(0, scrollPosition);
        }

    // Ensure the script runs after the page loads
    window.onload = function () {
            
            var prm = Sys.WebForms.PageRequestManager.getInstance();

    if (prm) {

        // Add the save scroll function to the beginRequest event
        prm.add_beginRequest(function (sender, args) {
            saveScrollPosition();
        });

    // Add the restore scroll function to the endRequest event
    prm.add_endRequest(function (sender, args) {
        restoreScrollPosition();
                });
            }
        };
//</script>