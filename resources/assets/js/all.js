$(document).ready(function () {
  $(".header_menu ul li").click(function () {
    $(this).toggleClass("active");
  });

  $(".header_wrap .btn_open").click(function () {
    $(".header_menu").slideDown();
  });

  $(".header_wrap .btn_close").click(function () {
    $(".header_menu").hide();
  });
});

AOS.init();

function openProduct(evt, openProduct) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(openProduct).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();