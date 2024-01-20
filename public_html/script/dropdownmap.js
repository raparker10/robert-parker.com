const pathControls = ["hillcountryvillage", "airport_uptown", "medicalcenter_utsa", "midtown", "northeast_alamoheights", "downtown_southtown","dignowity", "eastside","highlandpark", "southside", "jbsakelly", "westwood", "innerwestside", "sixflags", "braunsfarm", "seaworld", "lacklandmedina", "southwestlegacy", "lacoste", "helotes", "texasamsa", "missionespada", "calaveraslake", "huntleigh", "northeast", "farnorthcentral", "gardenridge", "schertz", "sthedwig", "kicaster"];

function getAreaState() {
    // build the area filter collection
    let selectedPaths = [];
    for (let i in pathControls) {
      const querystate = document.querySelector("#" + pathControls[i]);
      if (querystate.dataset.selected === "1") {
        selectedPaths.push(pathControls[i]);
      }
    }
    return selectedPaths;
  }

for (let i in pathControls)
    document.getElementById(pathControls[i]).addEventListener('click', pathClickFunction);


function dropdownMapButtonClickFunction(event) {
    // toggle the button class to dropdown
    let map  =  document.getElementById("dropdownmap");

    with (this.classList) {
        toggle("pressed-gray", false == map.classList.contains("dropdown-content-display"));
        toggle("unpressed", true == map.classList.contains("dropdown-content-display"));
    }
    this.innerText = map.classList.contains("dropdown-content-display") ? "Show Map..." : "Hide Map";
    map.classList.toggle("dropdown-content-display"); // hide the map
}
    