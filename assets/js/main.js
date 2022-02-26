(function($) {

    let browserWindow = $(window);

    $("#burger").click(function() {
        $("#header").toggleClass("mobile").animate();
        $(".nav").toggleClass("active").animate();
    });

    if ($.fn.scrollUp) {
        browserWindow.scrollUp({
            scrollSpeed: 1500,
            scrollText: '<i class="ri ri-arrow-up-line"></i>',
        });
    }
    $('a[href="#"]').on("click", function(e) {
        e.preventDefault();
    });
})(jQuery);