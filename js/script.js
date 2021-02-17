// Sidebar jQuery 

$(document).ready(function () {

    $(".clickme").click(function () {
        $(".sidebar-list").fadeIn(100);
        $(".close").show();
        $(".clickme").hide();
    });

    $(".close").click(function () {
        $(".sidebar-list").fadeOut(100);
        $(".close").hide();
        $(".clickme").show();
    });

})