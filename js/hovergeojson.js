// For use with only one map on a webpage
window.WPLeafletMapPlugin = window.WPLeafletMapPlugin || [];
window.WPLeafletMapPlugin.push(function () {
	var map = window.WPLeafletMapPlugin.getCurrentMap();
	if ( WPLeafletMapPlugin.geojsons.length > 0 ) {
		var geojsons = window.WPLeafletMapPlugin.geojsons;
		var geocount = geojsons.length;
		for (var j = 0, len = geocount; j < len; j++) {
			var geojson = geojsons[j];
			//console.log(geojson);
			geojson.layer.on('mouseover', function () {
				//console.log("over");
				this.setStyle({
					fillOpacity: 0.4
				});
				this.setStyle({
					'weight': 5
				});
				this.bringToFront();
			});
			geojson.layer.on('mouseout', function () {
				//console.log("out");
				this.setStyle({
					fillOpacity: 0.2
				});
				this.setStyle({
					'weight': 3
				});
			});
		}
	}
});
