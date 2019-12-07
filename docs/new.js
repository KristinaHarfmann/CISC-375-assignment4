var app = new Vue({
  el: '#app',
  data: {
	map: null,
	tileLayer: null,
	layers: [],
	latlng: "44.9537, -93.0900",
	type: "lat/lng",
  },
  mounted() {
	  this.initMap();
	  this.getCord();
  },
  methods: {
	  initMap() {
		  
		myMap = L.map('mapid').setView([44.9537, -93.0900], 13);
		
		L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia2hhcmYiLCJhIjoiY2szdGl6a2R0MDMzZTNlcGc2YXZrMXRjNSJ9.E74mvzdI6e4Gq32QoHu8dQ', {
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		maxZoom: 18,
		minZoom: 11,
		id: 'mapbox/streets-v11',
		accessToken: 'pk.eyJ1Ijoia2hhcmYiLCJhIjoiY2szdGl6a2R0MDMzZTNlcGc2YXZrMXRjNSJ9.E74mvzdI6e4Gq32QoHu8dQ'
		}).addTo(myMap);
		
		
		var northWest = L.latLng(44.988269, -93.207270);
		var southEast = L.latLng(44.891888, -93.004966);
		var myBounds = L.latLngBounds(northWest, southEast);
		myMap.setMaxBounds(myBounds);
		
	  },
	  getCord()
	  {
		  myMap.on('dragend', function (e) {
			  app.type = document.getElementById("type").value;
			  let center = myMap.getCenter();
			if(app.type == "lat/lng")
			  {
					app.latlng = center.lat + ", " + center.lng;
			  }
			  else
			  {
				  $.ajax('http://nominatim.openstreetmap.org/search?addressdetails=1&q='+ center.lat + ", " + center.lng + '&viewbox=-93.207270,44.988269,-93.004966,44.891888&bounded=1&format=json&limit=1',
				  {
					  dataType: "json",
					  success: function(data){
						  app.latlng = data[0].display_name;
					  }
				  });	
			  }//else
			});	//dragend		
	  },
	  submit: function (event) {
		  app.type = document.getElementById("type").value;
		  if(app.type == "lat/lng")
		  {
				var notes = app.latlng.split(",");
				myMap.panTo([notes[0], notes[1]]);
		  }
		  else
		  {
			  $.ajax('http://nominatim.openstreetmap.org/search?addressdetails=1&q='+ app.latlng + '&viewbox=-93.207270,44.988269,-93.004966,44.891888&bounded=1&format=json&limit=1',
			  {
				  dataType: "json",
				  success: function(data){
					app.latlng = data[0].lat + "," + data[0].lon;
					myMap.panTo([data[0].lat, data[0].lon]);
				  }
			  });	
		  }//else
	  },
	},//methods
});