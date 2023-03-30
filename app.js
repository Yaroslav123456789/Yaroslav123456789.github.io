let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let btn = document.getElementById("btn");

btn.addEventListener("click", function()  {
	    tg.sendData([{
		"Id": document.getElementById("Id").value,
		"Title": document.getElementById("Title").value,
		"Description": document.getElementById("Description").value,
		"Price": document.getElementById("Price").value
	}]);
});
