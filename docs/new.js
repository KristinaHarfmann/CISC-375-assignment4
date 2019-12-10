var app = new Vue({
  el: '#app',
  data: {
	latlng: "44.9537, -93.0900",
	type: "lat/lng",
	url: "http://cisc-dean.stthomas.edu:8019/",
	incData: [],
	bounds: [],
	neighborhoods: [],
	codes: [],
	selecNeigh: [],
	selecInc: [],
	startDate: "2019-10-01",
	endDate: "2019-10-31",
	startTime: "",
	endTime: "",
  },
  mounted() {
	  this.initMap();
	  this.getCord();
	  this.mapSearch();
	  this.neighSearch();
	  this.codeSearch();
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
		  myMap.on('move', function (e) {
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
			app.fixLocation();
			});	//move		
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
		check: function (event) {

			var fixCodes = [];
			var fixNeigh = [];
			for(i=0; i < app.selecInc.length; i++)
			{
				fixCodes[i] = app.selecInc[i].substr(1);
			}

			for(i=0; i < app.selecNeigh.length; i++)
			{
				fixNeigh[i] = app.selecNeigh[i].substr(1);
			}
			
			var endUrl = '';
			if(app.selecInc.length != 0)
			{
				endUrl = "&code="+fixCodes;
			}
			if(app.selecNeigh.length != 0)
			{
				endUrl = endUrl + "&id="+fixNeigh;
			}
			
			endUrl = endUrl + "&start_date=" + app.startDate;
			endUrl = endUrl + "&end_date=" + app.endDate;
			
			$.ajax("http://cisc-dean.stthomas.edu:8019/" + 'incidents?'+ endUrl,
		  {
			  dataType: "json",
			  success: function(data){
				app.incData = data;
				//console.log(app.incData);
			  }
		  });
		},
		fixTime: function (event) {
			app.check();//need to make sure table data is most up to date
			var newData = [];
			var j = 0;
			for(i=0; i < Object.keys(app.incData).length; i++)
			{
				//time needs to be in 24 hrs
				var checkTime = app.incData[Object.keys(app.incData)[i]].time;
				if(checkTime >> app.startTime && checkTime << app.endTime)
				{
					newData[j] = app.incData[Object.keys(app.incData)[i]];
					j = j + 1;
				}
			}
			app.incData = newData;
		},
		fixLocation: function (event) {
			app.check();//need to make sure table data is most up to date
			app.bounds = myMap.getBounds();
			
			for(i=0; i < Object.keys(app.incData).length; i++)
			{
				var block = app.incData[Object.keys(app.incData)[i]].block;
				var viexbox = app.bounds._northEast.lat + ',' + app.bounds._northEast.lng + ',' + app.bounds._southWest.lat + ',' + app.bounds._southWest.lng;
				//$.ajax('http://nominatim.openstreetmap.org/search?addressdetails=1&q='+ block + '&viewbox='+ viewbox +'&bounded=1&format=json&limit=1',
				//{
					//dataType: "json",
					//success: function(data){
						//app.incData = data;
					//}
				//});	
			}
		},
		mapSearch() {
			  $.ajax("http://cisc-dean.stthomas.edu:8019/" + 'incidents?start_date=2019-10-01&end_date=2019-10-31',
			  {
				  dataType: "json",
				  success: function(data){
					app.incData = data;
					//console.log(app.incData);
				  }
			  });
		},
		neighSearch() {
			$.ajax("http://cisc-dean.stthomas.edu:8019/" + 'neighborhoods',
			  {
				  dataType: "json",
				  success: function(data){
					app.neighborhoods = data;
					//console.log(data);
				  }
			  });
		},
		codeSearch() {
			$.ajax("http://cisc-dean.stthomas.edu:8019/" + 'codes',
			  {
				  dataType: "json",
				  success: function(data){
					app.codes = data;
					//console.log(data);
				  }
			  });
		},
	},//methods
});

