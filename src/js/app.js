(function($) {

    // When DOM is ready
    $(function() {
        $(".nav-opener").click(function() {
            $("body").toggleClass("nav-open");
        });
    });
    $(function() {
        smoothScroll.init({
            selector: '.smooth-scroll',
            speed: 2500,
            easing: 'easeInOutCubic',
            offset: 0
        });
    });
}(jQuery));

$(document).ready(function() {
    $(".fancybox").fancybox({
        openEffect: 'none',
        closeEffect: 'none'
    });
});

$(document).ready(function() {
    $(".various").fancybox({
        maxWidth: 1000,
        maxHeight: 800,
        fitToView: false,
        width: '70%',
        height: '70%',
        autoSize: false,
        closeClick: true,
        openEffect: 'none',
        closeEffect: 'none'
    });
});

$.fn.moveIt = function(){
  var $window = $(window);
  var instances = [];
  
  $(this).each(function(){
    instances.push(new moveItItem($(this)));
  });
  
  window.onscroll = function(){
    var scrollTop = $window.scrollTop();
    instances.forEach(function(inst){
      inst.update(scrollTop);
    });
  }
}

var moveItItem = function(el){
  this.el = $(el);
  this.speed = parseInt(this.el.attr('data-scroll-speed'));
};

moveItItem.prototype.update = function(scrollTop){
  var pos = scrollTop / this.speed/4;
  this.el.css('transform', 'translateY(' + -pos + 'px)');
};

// Initialization
$(function(){
  $('[data-scroll-speed]').moveIt();
});

jQuery(function() {
    initCustomMap();
});



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

function setMapEvents() {
    jQuery('#map').css("pointer-events", "none");
    jQuery('.map-holder').on("click", function() {
        jQuery('#map').css("pointer-events", "auto");
    });


    jQuery('#map').on("mouseout", function() {
        jQuery(this).css("pointer-events", "none");
    });
}


