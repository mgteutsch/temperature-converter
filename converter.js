//Notes to self:
// May need to convert string to numbers for whatever the user inputs in the field
//document.write(whatever)


var input = document.getElementById('input');
var output = document.getElementById('output');

function clear() {
	document.getElementById('input').value = "";
}


function conversion() {
	if (document.getElementById('celsius').checked) { //converts F to C
		output.value = ((input.value-32)*0.55555); 
		output.innerHTML += output.value;
		outputCelciusColor();
	}
	else if (document.getElementById('fahrenheit').checked) { //converts C to F
		output.value = ((1.8*input.value)+32); 
		output.innerHTML += output.value;
		outputFahrenheitColor();
	}
}

//If the temperature is greater than 90F/32C the color of the converted temperature should be red.
//If the temperature is less than 32F/0C the color of the converted temperature should be blue.
//For any other temperature, the color should be green.

function outputCelciusColor() {
	output.classList.remove("textcolor");
	output.classList.remove("coldcolor");
	output.classList.remove("hotcolor");
	output.classList.remove("mediumcolor");
	var temp = output.value *1;	
	if (output.value > 32 || output.value === 32) {
		output.classList.add("hotcolor");
	}
	else if (output.value < 0 || output.value === 0) {
		output.classList.add("coldcolor");
	}
	else if (output.value > 0 && output.value < 100) {
		output.classList.add("mediumcolor");
	}
}

function outputFahrenheitColor() {
	output.classList.remove("textcolor");
	output.classList.remove("coldcolor");
	output.classList.remove("hotcolor");
	output.classList.remove("mediumcolor");
	var temp = output.value *1;
	if (temp > 90 || temp === 90) {
		output.classList.add("hotcolor");
	}
	else if (temp < 32 || temp === 32) {
		output.classList.add("coldcolor");
	}
	else if (temp > 32 && temp < 90) {
		output.classList.add("mediumcolor");
	}
}




