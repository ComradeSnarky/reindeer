var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];
var deerList = [];

  var hohoho = document.getElementById("coloredReindeer");

  for (var i = 0; i <= reindeer.length; i++) {
    hohoho.innerHTML += "<div>" + colors[i] + " " + reindeer[i] + "<div>"
  };