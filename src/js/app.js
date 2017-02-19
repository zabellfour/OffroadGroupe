jQuery(document).ready(function($) {
 
        setTimeout(function() {
            $('.preloader').fadeOut('slow', function() {});
        }, 1000);

   
    $(".fancybox").fancybox({
        openEffect: 'none',
        closeEffect: 'none'
    });
    $(function() {
        smoothScroll.init({
            selector: '.smooth-scroll',
            speed: 1000,
            easing: 'easeInOutCubic',
            offset: 0
        });
    });
    $(function() {
        $(".nav-opener").click(function() {
            $("body").toggleClass("nav-open");
        });
    });
    $.fancybox({
        maxWidth: 1000,
        maxHeight: 800,
        fitToView: false,
        width: '100%',
        height: '100%',
        autoSize: false,
        closeClick: true,
        openEffect: 'none',
        closeEffect: 'none'
    });
    $.stellar({
        positionProperty: 'transform',
        hideDistantElements: false,
        horizontalScrolling: false

    });
    if ($("#map").length) {
        jQuery(function() {
            initCustomMap();
        });
    }

function setMapEvents() {
    jQuery('#map').css("pointer-events", "none");
    jQuery('.map-holder').on("click", function() {
        jQuery('#map').css("pointer-events", "auto");
    });


    jQuery('#map').on("mouseout", function() {
        jQuery(this).css("pointer-events", "none");
    });
}

function initCustomMap() {
    var myLatLng = { lat: 49.947804, lng: 36.397481 };

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: myLatLng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var image = {
        url: 'build/images/logo-map-marker.png'
    };

    var marker = new google.maps.Marker({
        position: { lat: 49.948401, lng: 36.396368 },
        map: map,
        icon: image
    });

    setMapEvents()

}

});
