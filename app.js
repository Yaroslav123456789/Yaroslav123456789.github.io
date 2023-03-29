let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let btn = document.getElementById("btn");

btn.addEventListener("click", function()  {
	    tg.sendData([{
		"name": document.getElementById("name").value,
		"emai": document.getElementById("email").value,
		"tel": document.getElementById("tel").value,
		"password": document.getElementById("password").value
	}]);
});
