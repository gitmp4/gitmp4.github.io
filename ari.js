baseArray = [2,8,16];
operatorArray = ["+","-"]

operator = Math.floor(Math.random() * 2)
base = Math.floor(Math.random() * 3);
var1 = Math.floor((Math.random() * 15000) + 5000);
var2 = Math.floor(var1-(Math.random() * 2000));

if (operator == 0)
{
	result = var1+var2;
}
else
{
	result = var1-var2;
}

function printValue()
{
	document.getElementById("base").innerHTML = baseArray[base];
	document.getElementById("equation").innerHTML = var1.toString(baseArray[base]) + " " + operatorArray[operator] + " " + var2.toString(baseArray[base]);
}

function checkValue()
{
	userInput = response.answer.value;
	userInput = userInput.replace(/\s/g, '');
	userInput = userInput.toLowerCase();
	userInput = parseInt(userInput,baseArray[base]);
	
	if (userInput == result)
	{
		alert("Correct!");
		window.location = "ari.html";
	}
	else
	{
		alert("W R O N G");
	}
}