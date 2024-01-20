var slideIndex = 1;
var timeout = null

// showSlides(slideIndex, 4000);

// Next/previous controls
function plusSlides(n, duration) {
  showSlides(slideIndex += n, duration);
}

function showSlides(n, duration) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
  if (timeout)
  {
      clearTimeout(timeout);
  }
  timeout = setTimeout(plusSlides, duration, 1, duration);
}

function loadBannerSlides(fileName, purpose) {
  const xmlhttpBanner = new XMLHttpRequest();
  xmlhttpBanner.onload = function() {
      const myObjBanner = JSON.parse(this.responseText);
      text = "";
      bannerindex = 0;
      for (let i in myObjBanner) {
        if (myObjBanner[i].purpose.includes(purpose))
        {
          text += "<div class=\"mySlides fade\" style=\"" + (bannerindex == 0 ? "display:block;" : "display:none;") + "\">";
          text += "<div style=\"text-align:center;\"><img src=\"./images/" + myObjBanner[i].image + "\" style=\"width:100%;\" title=\""  + myObjBanner[i].name + "\" alt=\""  + myObjBanner[i].name + "\"></div>";
          text += "</div>";
          bannerindex++;
        }
      }
       document.getElementById("banner").innerHTML = text;

       if (bannerindex > 1)
        showSlides(slideIndex, 4000);

    };
  xmlhttpBanner.open("GET", fileName);
  xmlhttpBanner.send();
}