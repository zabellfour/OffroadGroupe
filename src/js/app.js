import HP from './modules/helpers';

(function($) {

    // When DOM is ready
    $(function() {
        $(".nav-opener").click(function() {
            $("body").toggleClass("nav-open");
        });
    });

}(jQuery));
