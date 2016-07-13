var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];

  for (var i = 0; i <= colors.length; i++) {
    for (var j = 0; j <= reindeer.length; j++) {
      console.log(colors[i++] + ' ' + reindeer[j++]);
    }
  }

hohoho = document.getElementById("coloredReindeer");