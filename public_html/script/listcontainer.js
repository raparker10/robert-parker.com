function loadData(listElement, dataFileName, filterFunc, sortFunc, objToTextFunc) {
    listElement.innerHTML = "Unable to load list data.";
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function() {
        // get the list data
        const myObjTemp = JSON.parse(this.responseText);
  
        // filter the list
        const myObj = myObjTemp.filter(filterFunc);
  
        // sort the list
        myObj.sort(sortFunc);
  
        // generate the HTML
        let text = "";
        for (let i in myObj) {
          text += objToTextFunc(myObj[i]);
        }
  
        // insert html into control
        const ypos = window.pageYOffset;

        listElement.innerHTML = text;
  
        // reset the vertical scroll location
        window.scrollTo(0, ypos);
    };
    xmlhttp.open("GET", dataFileName);
    xmlhttp.send();
  }
  