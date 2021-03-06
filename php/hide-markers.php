<?php
//Shortcode: [hidemarkers]
// For use with more than one map on a webpage
function hidemarkers_function(){
	global $post;
	if ( ! is_page() ) return;
	$text = '
	<script>
		window.WPLeafletMapPlugin = window.WPLeafletMapPlugin || [];
		window.WPLeafletMapPlugin.push(function () {
			var map = window.WPLeafletMapPlugin.getCurrentMap();
			map.eachLayer(function(layer) {
				if (layer.options.type == "gpx" ) {
					//console.log("gpx");
					layer.options.pointToLayer = function (feature, latlng) {
						//console.log(feature);
						return L.circleMarker(latlng,{"radius": 0 });
					}; // layer.options
				}; // if
			}); //map.eachLayer
			window.addEventListener("load", main);
		});
	</script>
	';
	return $text;
}
add_shortcode('hidemarkers', 'hidemarkers_function' );
?>
