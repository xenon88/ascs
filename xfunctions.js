
////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////		"equals ()" 	compare arrays function   //////////////
///////////////////////////		Credits :  Tomáš Zato - Stackoverflow  	  //////////////
////////////////////////////////////////////////////////////////////////////////////////


// Warn if overriding existing method
if(Array.prototype.equals)
    console.warn("Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code.");
// attach the .equals method to Array's prototype to call it on any array
Array.prototype.equals = function (array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time 
    if (this.length != array.length)
        return false;

    for (var i = 0, l=this.length; i < l; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].equals(array[i]))
                return false;       
        }           
        else if (this[i] != array[i]) { 
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;   
        }           
    }       
    return true;
}
// Hide method from for-in loops
Object.defineProperty(Array.prototype, "equals", {enumerable: false});


//////////////////////////////////////////////
//////////////////////////////////////////////		END: 		EQUALS 		
////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////		"push_x" 		pushes if not already in array   ///////
///////////////////////////		 	  									////////////////
////////////////////////////////////////////////////////////////////////////////////////

// Warn if overriding existing method
if(Array.prototype.push_x)
    console.warn("Overriding existing Array.prototype.push_x. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code.");

// Define Method 
Array.prototype.push_x = function (x) {
	if (! this.includes (x)) {
		this.push (x)
	}
}




// Hide method from for-in loops
Object.defineProperty(Array.prototype, "push_x", {enumerable: false});






//////////////////////////////////////////////
//////////////////////////////////////////////		END: 		PUSH_X 		
////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////		"remove" 		 removes from array   ///////
///////////////////////////		 	  									////////////////
////////////////////////////////////////////////////////////////////////////////////////

// Warn if overriding existing method
if(Array.prototype.remove)
    console.warn("Overriding existing Array.prototype.remove. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code.");

// Define Method 
Array.prototype.remove = function (x) {
	
	
	var copy = this.slice () 
	this.length = 0;
	for (let item of copy) {
		if (item !== x) {
			this.push (item)
			
		}
		
	}
	
}




// Hide method from for-in loops
Object.defineProperty(Array.prototype, "remove", {enumerable: false});


//////////////////////////////////////////////
//////////////////////////////////////////////		END: 		remove 		
////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////		"randInt" 		returns a random integer  between 0 and a  (inclusive)  ///////
///////////////////////////		 	  									////////////////
////////////////////////////////////////////////////////////////////////////////////////

function randInt (a) {

	r = Math.random () 
	
	for (var i = 0; a +1 ; i++) {
		if (r < (i / (a + 1))) {
			return i - 1 
			
		}
	}
	
}

function test_randInt () {
	a = 9; 
	mydict = {}
	for (var i = 0; i < a + 1  ; i++) {
		mydict [i+""] = 0; 
	}
	
	
	for (var i = 0; i < 100000; i++) {
		var x = randInt (a) 
		mydict [x +""] += 1; 
	}
	
	console.log (mydict)
	
}






//////////////////////////////////////////////
//////////////////////////////////////////////		END: 		ranInt 		
////////////////////////////////////////////////////////////////////////////////////////////////