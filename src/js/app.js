	import HP from './modules/helpers';

	(function($) {

	    // When DOM is ready
	    $(function() {
	        $(".nav-opener").click(function() {
	            $("body").toggleClass("nav-open");
	        });
	    });
	    $(function() {

	        smoothScroll.init({
	            selector: '.smooth-scroll', // Selector for links (must be a class, ID, data attribute, or element tag)
	            selectorHeader: null, // Selector for fixed headers (must be a valid CSS selector) [optional]
	            speed: 1500, // Integer. How fast to complete the scroll in milliseconds
	            easing: 'easeInOutCubic', // Easing pattern to use
	            offset: 0, // Integer. How far to offset the scrolling anchor location in pixels
	            callback: function(anchor, toggle) {} // Function to run after scrolling
	        });

	    });





	}(jQuery));


	jQuery(function() {
	    initCustomMap();
	});

	// custom map init
	function initCustomMap() {
	    var myLatLng = { lat: 49.947804, lng: 36.397481 };

	    var map = new google.maps.Map(document.getElementById('map'), {
	        zoom: 17,
	        center: myLatLng,
	        mapTypeId: google.maps.MapTypeId.ROADMAP
	    });

	    var image = {
	        url: 'build/images/general/logo-map-marker.png'
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
