var phonecatControllers = angular.module('phonecatControllers', []);

function close_menu(){
	var container = document.getElementById( 'st-container' );
	classie.remove( container, 'st-menu-open' );
}

function onclickFunction(v) {
	//v = value of data-onclick attribute (see below)			
	$.colorbox({href:"logo/"+v+".png", opacity:0.5, scalePhotos:true, maxWidth:'90%', maxHeight:'90%', initialWidth:'50%'});		
}


function swipe(){

  var container = $("#swipe-container");

      container.dragend({
        minTouchDistance  : "60",
        keyboardNavigation: true,
        pageClass         : "page"
      });


      $("button.nextbtn").on("click", function() {
        container.dragend("left");
      });

      $("button.previousbtn").on("click", function() {
        container.dragend("right");
      });
		
	  container.css("opacity", 1)	
      

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



phonecatControllers.controller('ClientCtrl', ['$scope',
function($scope) {
	close_menu();
	
	//dinamically add 50 images
	var txt='';
	for(var i=1;i<=21;i++){
		var n=i;
		txt+='<img data-onclick="'+n+'" src="logo/'+n+'.png" width="200">';
	}
	$('#mycloud').append(txt);



	//START cloud			
	$('#mycloud').cloud({

		//all settings are optional, you can delete them or provide your values
	
		hwratio				: 1,		//height/width ratio
		enable				: false,	//enable effect on mouse move
		draggable			: true,		//enable mouse drag               <------ ENABLE DRAG
		gravitydriven		: true,	//enable effect on mobile device movement
		template			: 1,		//number of template (0-10) or function
		scale				: 0.9,		//scale template
		maxspeed			: 2,		//maximum rotation speed
		attenuation			: 0.01,		//attenuation
		perspective			: 1.0,		//perspective koefficient
		sensitivityx		: 0.05,		//if sensitivity=0 no effect will be applied
		sensitivityy		: 0.05,		//negative values invert mouse			
		fadein				: 800,		//fadein on start (in ms)
		fog					: 0.8,		//fog index
		zsort				: true,		//sort by z
		fps					: 60,		//default fps limit
		fpsmobile			: 30,		//default fps limit on mobile devices
		imgscale			: 0,		//scale images (works only if they are direct children of cloud)
		onclick             : onclickFunction	//function to execute on tag click
		
	}); 
		
}]);


phonecatControllers.controller('ProcessCtrl', ['$scope',
function($scope) {
	close_menu();
	
	 swipe();
	
}]);


phonecatControllers.controller('CertificationCtrl', ['$scope',
function($scope) {
	close_menu()
}]);


phonecatControllers.controller('ContactCtrl', ['$scope',
function($scope) {
	close_menu();
	
		var $mapSwitch = $( "#map-switch" ),
		    $listSwitch = $( "#list-switch" ),
			$map = $( "#map-canvas" ),
	        $list = $( "#list-canvas" );
			$map.gmap();

	    $mapSwitch.on( "click", function( e ){
	       	$map.show();
	       	$map.gmap();
	       	$list.hide();
	    });

	    $listSwitch.on( "click", function( e ){
	       	$list.show();
			$map.hide();
	    });
	
}]);




