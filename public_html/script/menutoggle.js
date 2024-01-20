/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function menutoggle() {
    var x = document.getElementById("myTopnav");
    var i = document.getElementById("menuIcon");
    // change the menu
    if (x.className === "topnav") {
      x.className += " responsive";
      i.className = "menuiconclose";
    } else {
      x.className = "topnav";
      i.className = "menuicon";
    }
  }
  