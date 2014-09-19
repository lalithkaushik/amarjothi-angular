var phonecatControllers = angular.module('phonecatControllers', []);

function close_menu(){
	var container = document.getElementById( 'st-container' );
	classie.remove( container, 'st-menu-open' );
}

Storage.prototype.setArray = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getArray = function(key) {
    return JSON.parse(this.getItem(key))
}

phonecatControllers.controller('IndexCtrl', ['$scope',
function($scope) {
	
	close_menu();

}]);
		
phonecatControllers.controller('AboutCtrl', ['$scope',
function($scope) {
	close_menu();
	
			var image_array = new Array();
			image_array = [
				{image: 'images/chairman-thumb.jpg', link_url: 'images/chairman-thumb.jpg', link_rel: 'prettyPhoto'},
					// image for the first layer, goes with the text from id="sw0"
				{image: 'images/jmd-thumb.jpg', link_url: 'images/jmd-thumb.jpg', link_rel: 'prettyPhoto'},
					// image for the second layer, goes with the text from id="sw1"
				{image: 'images/md-thumb.jpg', link_url: 'images/md-thumb.jpg', link_rel: 'prettyPhoto'}
			];
			$('#slider1').content_slider({		// bind plugin to div id="slider1"
				map : image_array,				// pointer to the image map
				max_shown_items: 3,				// number of visible circles
				hv_switch: 0,					// 0 = horizontal slider, 1 = vertical
				active_item: 0,					// layer that will be shown at start, 0=first, 1=second...
				wrapper_text_max_height: 450,	// height of widget, displayed in pixels
				middle_click: 1,				// when main circle is clicked: 1 = slider will go to the previous layer/circle, 2 = to the next
				under_600_max_height: 1200,		// if resolution is below 600 px, set max height of content
				border_radius:	-1,				// -1 = circle, 0 and other = radius
				automatic_height_resize: 1,
				border_on_off: 0,
				allow_shadow: 0
			});
	
}]);




phonecatControllers.controller('ContactCtrl', ['$scope',
function($scope) {
	close_menu()
}]);




