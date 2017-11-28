var available_ship_list = []

//////////////////////////////

var CONCORDIA_TEST = {
	"name":"Concordia_Test", 
	"ship_type":"core",
	"hitpoints":1000,
	"mass":1000,
	"top_speed":30,
	"torpedoes":6,
	"armor": {
		"f":1,
		"l":1,
		"r":1,
		"a":1, 
	},
	
	"coax_guns":[
		
	], 
	"turrets": [
		//		coax guns
		{
			"armor":100,
			"cal":30,
			"type":"normal",
			"gun_number":1,
			"arc":"cx", // cx : co-axial
			"category":"cx"
		},
		
		//		main turrets
		
	]	
}


available_ship_list.push (CONCORDIA_TEST)
///////////////////////////////////

//////////////////////////////

var CONCORDIA = {
	"name":"Concordia", 
	"ship_type":"core",
	"hitpoints":1000,
	"mass":1000,
	"top_speed":30,
	"torpedoes":6,
	"armor": {
		"f":40,
		"l":20,
		"r":20,
		"a":20, 
	},
	
	"coax_guns":[
		
	], 
	"turrets": [
		//		coax guns
		{
			"armor":100,
			"cal":30,
			"type":"normal",
			"gun_number":1,
			"arc":"cx", // cx : co-axial
			"category":"cx"
		},
		
		//		main turrets
		{
			"armor":30,
			"cal":15,
			"type":"normal",
			"gun_number":2,
			"arc":"f",
			"category":"m"
		},
		{
			"armor":30,
			"cal":15,
			"type":"normal",
			"gun_number":2,
			"arc":"f",
			"category":"m"
		},
		{
			"armor":30,
			"cal":15,
			"type":"normal",
			"gun_number":2,
			"arc":"a",
			"category":"m"
		},
		{
			"armor":30,
			"cal":15,
			"type":"normal",
			"gun_number":2,
			"arc":"a",
			"category":"m"
		},
		//		secondary turrets
				//		left
		{
			"armor":10,
			"cal":6,
			"type":"normal",
			"gun_number":2,
			"arc":"l",
			"category":"s"
		},
		{
			"armor":10,
			"cal":6,
			"type":"normal",
			"gun_number":2,
			"arc":"l",
			"category":"s"
		},
		{
			"armor":10,
			"cal":6,
			"type":"normal",
			"gun_number":2,
			"arc":"l",
			"category":"s"
		},
		{
			"armor":10,
			"cal":6,
			"type":"normal",
			"gun_number":2,
			"arc":"l",
			"category":"s"
		},
		{
			"armor":10,
			"cal":6,
			"type":"normal",
			"gun_number":2,
			"arc":"l",
			"category":"s"
		},
				// 		right
		{
			"armor":10,
			"cal":6,
			"type":"normal",
			"gun_number":2,
			"arc":"r",
			"category":"s"
		},
		{
			"armor":10,
			"cal":6,
			"type":"normal",
			"gun_number":2,
			"arc":"r",
			"category":"s"
		},
		{
			"armor":10,
			"cal":6,
			"type":"normal",
			"gun_number":2,
			"arc":"r",
			"category":"s"
		},
		{
			"armor":10,
			"cal":6,
			"type":"normal",
			"gun_number":2,
			"arc":"r",
			"category":"s"
		},
		{
			"armor":10,
			"cal":6,
			"type":"normal",
			"gun_number":2,
			"arc":"r",
			"category":"s"
		},
	]	
}


available_ship_list.push (CONCORDIA)
///////////////////////////////////

//////////////////////////////

var FRALTHI = {
	"name":"Fralthi", 
	"ship_type":"core",
	"hitpoints":500,
	"mass":500,
	"top_speed":25,
	"torpedoes":4,
	"armor": {
		"f":30,
		"l":15,
		"r":15,
		"a":10, 
	},
	
	"coax_guns":[
		
	], 
	"turrets": [
		//		coax guns
		
		//		main turrets
		{
			"armor":30,
			"cal":10,
			"type":"normal",
			"gun_number":2,
			"arc":"f",
			"category":"m"
		},
		{
			"armor":30,
			"cal":10,
			"type":"normal",
			"gun_number":2,
			"arc":"f",
			"category":"m"
		},
		{
			"armor":30,
			"cal":10,
			"type":"normal",
			"gun_number":2,
			"arc":"a",
			"category":"m"
		},
		{
			"armor":30,
			"cal":10,
			"type":"normal",
			"gun_number":2,
			"arc":"a",
			"category":"m"
		},
		//		secondary turrets
				//		left
		{
			"armor":10,
			"cal":6,
			"type":"normal",
			"gun_number":2,
			"arc":"l",
			"category":"s"
		},
		{
			"armor":10,
			"cal":6,
			"type":"normal",
			"gun_number":2,
			"arc":"l",
			"category":"s"
		},
		{
			"armor":10,
			"cal":6,
			"type":"normal",
			"gun_number":2,
			"arc":"l",
			"category":"s"
		},
		{
			"armor":10,
			"cal":6,
			"type":"normal",
			"gun_number":2,
			"arc":"l",
			"category":"s"
		},
		{
			"armor":10,
			"cal":6,
			"type":"normal",
			"gun_number":2,
			"arc":"l",
			"category":"s"
		},
				// 		right
		{
			"armor":10,
			"cal":6,
			"type":"normal",
			"gun_number":2,
			"arc":"r",
			"category":"s"
		},
		{
			"armor":10,
			"cal":6,
			"type":"normal",
			"gun_number":2,
			"arc":"r",
			"category":"s"
		},
		{
			"armor":10,
			"cal":6,
			"type":"normal",
			"gun_number":2,
			"arc":"r",
			"category":"s"
		},
		{
			"armor":10,
			"cal":6,
			"type":"normal",
			"gun_number":2,
			"arc":"r",
			"category":"s"
		},
		{
			"armor":10,
			"cal":6,
			"type":"normal",
			"gun_number":2,
			"arc":"r",
			"category":"s"
		},
	]	
}

available_ship_list.push (FRALTHI)

//////////////////////////////////////////

var HORNET = {
	"name":"Hornet", 
	"ship_type":"escort",
	"hitpoints":10,
	"mass":10,
	"top_speed":50,
	"torpedoes":1,
	"armor": {
		"f":1,
		"l":1,
		"r":1,
		"a":1, 
	},
	
	
	"turrets": [
		//		coax guns
		
		
		//		main turrets
		
		//		secondary turrets
		
		// 		escort turrets 
		{
			"armor":1,
			"cal":4,
			"type":"normal",
			"gun_number":2,
			"arc":"360",
			"category":"e"
		},
	]	
}