baseArray = [2,8,10,16];

base1 = Math.floor(Math.random() * 4);
base2 = Math.floor(Math.random() * 4);

while (base2 == base1)
{
	base2 = Math.floor(Math.random() * 4);
}

initial = Math.floor((Math.random() * 15000) + 5000);
applied = initial.toString(baseArray[base1]);

function printValue()
{
	document.getElementById("enc").innerHTML = applied;
	document.getElementById("base1").innerHTML = baseArray[base1];
	document.getElementById("base2").innerHTML = baseArray[base2];
}

function checkValue()
{
	userInput = response.answer.value;
	userInput = userInput.replace(/\s/g, '');
	userInput = userInput.toLowerCase();
	compare = initial.toString(baseArray[base2]);

	if (userInput == compare)
	{
		alert("Correct!");
		window.location = "conversion.html";
	}
	else
	{
		alert("W R O N G");
	}
}