var num1 = "", num2 = "", result;
var operator = null;
var isNum1Active = true;

window.onload = function() {
// Grab display area 
	var display = document.getElementById("display");

// Define onclick actions for each button
//Number buttons first
  document.getElementById("1").onclick = function() {
  	if(isNum1Active) {
	  	num1 += "1";
	  	display.innerHTML = num1;
    }
    else {
    	num2 += "1";
    	display.innerHTML = num2;
    }
  };
    document.getElementById("2").onclick = function() {
  	if(isNum1Active) {
	  	num1 += "2";
	  	display.innerHTML = num1;
    }
    else {
    	num2 += "2";
    	display.innerHTML = num2;
    }
  };
    document.getElementById("3").onclick = function() {
  	if(isNum1Active) {
	  	num1 += "3";
	  	display.innerHTML = num1;
    }
    else {
    	num2 += "3";
    	display.innerHTML = num2;
    }
  };
    document.getElementById("4").onclick = function() {
  	if(isNum1Active) {
	  	num1 += "4";
	  	display.innerHTML = num1;
    }
    else {
    	num2 += "4";
    	display.innerHTML = num2;
    }
  };
    document.getElementById("5").onclick = function() {
  	if(isNum1Active) {
	  	num1 += "5";
	  	display.innerHTML = num1;
    }
    else {
    	num2 += "5";
    	display.innerHTML = num2;
    }
  };
    document.getElementById("6").onclick = function() {
  	if(isNum1Active) {
	  	num1 += "6";
	  	display.innerHTML = num1;
    }
    else {
    	num2 += "6";
    	display.innerHTML = num2;
    }
  };
    document.getElementById("7").onclick = function() {
  	if(isNum1Active) {
	  	num1 += "7";
	  	display.innerHTML = num1;
    }
    else {
    	num2 += "7";
    	display.innerHTML = num2;
    }
  };
    document.getElementById("8").onclick = function() {
  	if(isNum1Active) {
	  	num1 += "8";
	  	display.innerHTML = num1;
    }
    else {
    	num2 += "8";
    	display.innerHTML = num2;
    }
  };
    document.getElementById("9").onclick = function() {
  	if(isNum1Active) {
	  	num1 += "9";
	  	display.innerHTML = num1;
    }
    else {
    	num2 += "9";
    	display.innerHTML = num2;
    }
  };
    document.getElementById("0").onclick = function() {
  	if(isNum1Active) {
	  	num1 += "0";
	  	display.innerHTML = num1;
    }
    else {
    	num2 += "0";
    	display.innerHTML = num2;
    }
  };
  // Onclick definitions for operator buttons
  document.getElementById("plus").onclick = function() {
  	isNum1Active = false;
  	operator = "plus";
  };
  document.getElementById("minus").onclick = function() {
  	isNum1Active = false;
  	operator = "minus";
  };
  document.getElementById("multiply").onclick = function() {
  	isNum1Active = false;
  	operator = "multiply";
  };
  document.getElementById("divide").onclick = function() {
  	isNum1Active = false;
  	operator = "divide";
  };
  //Onclick for equals button
  document.getElementById("equals").onclick = function() {
  	isNum1Active = true;
  	switch (operator) {
  		case 'plus':
  			result = +num1 + +num2;
  			break;
  		case 'minus':
  			result = +num1 - +num2;
  			break;
  		case 'multiply':
  		  result = +num1 * +num2;
  		  break;
  		case 'divide':
  		  result = +num1 / +num2;
  		  break;
  	};
  	display.innerHTML = result;
  	operator = null;
  	result = null;
 		num1 = "";
 		num2 = "";
  };

  //onclick for clear button
  document.getElementById("clear").onclick = function() {
    isNum1Active = true;
    display.innerHTML = "";
    operator = null;
    result = null;
    num1 = "";
    num2 = "";
  }

}
