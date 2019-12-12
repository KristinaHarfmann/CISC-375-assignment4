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
			["Conway/Battlecreek/Highwood", 44.936383, -93.024532],
			["Greater East Side",44.977610,-93.024602 ],
			["West Side", 44.928944, -93.078443 ],
			["Dayton's Bluff", 44.956316, -93.062232],
			["Payne/Phalen", 44.977068, -93.065946],
			["North End", 44.977127, -93.109990],
			["Thomas/Dale(Frogtown)",44.959894, -93.122334],
			["Summit/University", 44.951839, -93.124963],
			["West Seventh", 44.928629, -93.126618],
			["Como", 44.980425, -93.155332],
			["Hamlin/Midway", 44.962336,  -93.164337],
			["St. Anthony", 44.967889, -93.196339],
			["Union Park", 44.948075, -93.174914 ],
			["Macalester-Groveland", 44.933344, -93.166897],
			["Highland", 44.911918, -93.176684],
			["Summit Hill", 44.936938, -93.137956],
			["Capitol River", 44.957122, -93.102902 ]
		], //manually set up lat and lng
		neighCounts: {
			"N1" : 0,
			"N2" : 0,
			"N3" : 0,
			"N4" : 0,
			"N5" : 0,
			"N6" : 0,
			"N7" : 0,
			"N8" : 0,
			"N9" : 0,
			"N10" : 0,
			"N11" : 0,
			"N12" : 0,
			"N13" : 0,
			"N14" : 0,
			"N15" : 0,
			"N16" : 0,
			"N17" : 0,
		},
		codes: [],
		selecNeigh: [],
		selecInc: [],
		startDate: "2019-10-01",
		endDate: "2019-10-31",
		startTime: "",
		endTime: "",
		markers: [],
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
				//console.log(this.neighCounts[i]);
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
			mark: function (event) {
				//console.log(event);
				//console.log(event.path[1].children[0].innerText);
				
				var block = event.path[1].children[7].innerText;
				var date = event.path[1].children[1].innerText;
				var time = event.path[1].children[2].innerText;
				var incident = event.path[1].children[4].innerText;
				var number = event.path[1].children[0].innerText;
				$.ajax('http://nominatim.openstreetmap.org/search?addressdetails=1&q='+ block + '&viewbox=-93.207270,44.988269,-93.004966,44.891888&bounded=1&format=json&limit=1',
				  {
					  dataType: "json",
					  success: function(data){
						  if(data.length != 0)
						  {
							  var popupEl = document.createElement("div");
							  var poptitle = document.createElement("p");
							  var popButton =  document.createElement("button");
							  poptitle.textContent = incident + ": " + date + " " + time;
							  popButton.type = "button";
							  popButton.textContent = 'Delete this marker';
							  popButton.className = 'marker-delete-button';
							  popupEl.appendChild(poptitle);
							  popupEl.appendChild(popButton);
							  
							marker = new L.marker([data[0].lat, data[0].lon])
							.bindPopup(popupEl)
							.addTo(myMap);
							app.markers.push(marker);
							
							popButton.onclick = function () {
								myMap.removeLayer(marker);
							};
						  }
						  else {
							console.log("Can't find address");
						  }
						

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



