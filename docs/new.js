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
	//console.log(crime_api_url);
	
	var app = new Vue({
	  el: '#app',
	  data: {
		latlng: "44.9537, -93.0900",
		type: "lat/lng",
		url: crime_api_url,
		fullData: [],
		bounds: [], 
		neighborhoods: [],
		neighCord: [
			["Conway/Battlecreek/Highwood", 44.936383, -93.024532, 0],
			["Greater East Side",44.977610,-93.024602 , 0],
			["West Side", 44.928944, -93.078443 , 0],
			["Dayton's Bluff", 44.956316, -93.062232, 0 ],
			["Payne/Phalen", 44.977068, -93.065946, 0 ],
			["North End", 44.977127, -93.109990, 0 ],
			["Thomas/Dale(Frogtown)",44.959894, -93.122334, 0 ],
			["Summit/University", 44.951839, -93.124963, 0 ],
			["West Seventh", 44.928629, -93.126618, 0 ],
			["Como", 44.980425, -93.155332, 0 ],
			["Hamlin/Midway", 44.962336,  -93.164337, 0 ],
			["St. Anthony", 44.967889, -93.196339, 0 ],
			["Union Park", 44.948075, -93.174914, 0 ],
			["Macalester-Groveland", 44.933344, -93.166897, 0 ],
			["Highland", 44.911918, -93.176684, 0 ],
			["Summit Hill", 44.936938, -93.137956, 0 ],
			["Capitol River", 44.957122, -93.102902, 0 ]
		], //manually set up lat and lng
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
			
			for (var i = 0; i < this.neighCord.length; i++) {
				marker = new L.marker([this.neighCord[i][1],this.neighCord[i][2]])
				.bindPopup(this.neighCord[i][0] +": " +  this.neighCord[i][3])
				.addTo(myMap);
			}
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
				
				$.ajax(this.url + '/incidents?'+ endUrl,
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
			mapSearch() {
				console.log(this.url);
			  $.ajax(this.url + '/incidents?start_date=2019-10-01&end_date=2019-10-31',
			  {
				  dataType: "json",
				  success: function(data){
					app.fullData = data;
					//console.log(app.incData);
				  }
			  });
			},
			neighSearch() {
				$.ajax(this.url + '/neighborhoods',
				  {
					  dataType: "json",
					  success: function(data){
						app.neighborhoods = data;
						//console.log(data);
					  }
				  });
			},
			codeSearch() {
				$.ajax(this.url + '/codes',
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
}


//function Init(crime_api_url) {
	//console.log(crime_api_url);
//}
