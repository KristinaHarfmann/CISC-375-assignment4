var app = new Vue({
  el: '#app',
  data: {
	latlng: "44.9537, -93.0900",
	type: "lat/lng",
	url: "http://cisc-dean.stthomas.edu:8019/",
	fullData: [],
	bounds: [], 
	neighborhoods: [
	"Conway/Battlecreek/Highwood": { lat: 44.936383, lng: -93.024532 },
	"Greater East Side": { lat: 44.977610, lng: -93.024602 },
	"West Side": { lat: 44.928944, lng: -93.078443 },
	"Dayton's Bluff": { lat: 44.956316, lng: -93.062232 },
	"Payne/Phalen": { lat: 44.977068, lng: -93.065946 },
	"North End": { lat: 44.977127, lng: -93.109990 },
	"Thomas/Dale(Frogtown)": { lat: 44.959894, lng: -93.122334 },
	"Summit/University": { lat: 44.951839, lng: -93.124963 },
	"West Seventh": { lat: 44.928629, lng: -93.126618 },
	"Como": { lat: 44.980425, lng: -93.155332 },
	"Hamlin/Midway": { lat: 44.962336, lng: -93.164337 },
	"St. Anthony": { lat: 44.967889, lng: -93.196339 },
	"Union Park": { lat: 44.948075, lng: -93.174914 },
	"Macalester-Groveland": { lat: 44.933344, lng: -93.166897 },
	"Highland": { lat: 44.911918 lng: -93.176684 },
	"Summit Hill": { lat: 44.936938, lng:  -93.137956},
	"Capitol River": { lat: 44.957122, lng: -93.102902 },
	],
	neighCord: [], //manually set up lat and lng
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
	  mapSearch();
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
		  myMap.on('moveend', function (e) {
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
				app.fullData = data;
				//console.log(app.incData);
			  }
		  });
		},
		fixLocation: function (event) {

			app.bounds = myMap.getBounds();
			
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

function mapSearch() {
	  $.ajax("http://cisc-dean.stthomas.edu:8019/" + 'incidents?start_date=2019-10-01&end_date=2019-10-31',
	  {
		  dataType: "json",
		  success: function(data){
			app.fullData = data;
			//console.log(app.incData);
		  }
	  });
		//var marker = L.marker([lat, long])
		//.addTo(myMap)
		//.bindPopup(
		//`<h2> Initial Location </h2> lat:<b>${lat}</b>, long:<b>${long}</b>`
		//);
}
function Prompt() {
	$("#dialog-form").dialog({
		autoOpen: true,
		modal: true,
		width: "360px",
		buttons: {
			"Ok": function() {
				var prompt_input = $("#prompt_input");
				Init(prompt_input.val());
				$(this).dialog("close");
			},
			"Cancel": function() {
				$(this).dialog("close");
			}
		}
	});
}

function Init(crime_api_url) {
	console.log(crime_api_url);
}
