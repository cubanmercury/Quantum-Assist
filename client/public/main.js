$(document).ready(function() {
    siteFooter();

    $(window).resize(function() {
        siteFooter();
    });

    function siteFooter() {
        let siteContent = $('#app');
        let siteFooter = $('#footer');
        let siteFooterHeight = siteFooter.height();
        siteContent.css({
            "margin-bottom" : siteFooterHeight
        });
    };
});