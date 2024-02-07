      
{
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
        setTimeout(showSlides, 2000);
    }
}
{
  function openPage(pageName, elmnt, color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
    if (window.pageYOffset > sticky) {
      document.body.scrollTop = 400;
      document.documentElement.scrollTop = 400;
    } else if (window.pageYOffset == sticky) {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  }
  document.getElementById("defaultOpen").click();
  window.onscroll = function () {
    myFunction();
  };

  var tablink = document.getElementById("tablink");
  var sticky = tablink.offsetTop;

  function myFunction() {
    if (window.pageYOffset >= sticky) {
      tablink.classList.add("sticky");
    } else {
      tablink.classList.remove("sticky");
    }
    }
}
{
  var hslideIndex = 1;
hshowSlides(hslideIndex);

function hplusSlides(n) {
  hshowSlides(hslideIndex += n);
}

function hcurrentSlide(n) {
  hshowSlides(hslideIndex = n);
}

function hshowSlides(n) {
  var i;
  var hslides = document.getElementsByClassName("hmySlides");
  if (n > hslides.length) {hslideIndex = 1}    
  if (n < 1) {hslideIndex = hslides.length}
  for (i = 0; i < hslides.length; i++) {
      hslides[i].style.display = "none";  
  }
  hslides[hslideIndex-1].style.display = "block";  
}
}
{
  function mycontact() {
    alert("The Message was sent");
  }
}
{
  function fopenForm() {
    document.getElementById("fmyForm").style.display = "block";
  }
  
  function fcloseForm() {
    document.getElementById("fmyForm").style.display = "none";
  }
}
{
  $(':radio').change(function() {
    console.log('New star rating: ' + this.value);
  });
}