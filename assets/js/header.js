// Copyright (c) 2021 Sri Lakshmi Kanthan P
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/**
 * change bg of nav on scroll
 */
function navBg(evt) {
  var nav = $("nav");
  var pos = $(window).scrollTop();

  if (pos > 0) {
    nav.addClass("scroll");
  } else {
    nav.removeClass("scroll");
  }
}

/**
 * SideBar menu button click
 */
function menuButtonClick(evt) {
  var btnicon = $("button.nav-toggle > i");

  if (btnicon.hasClass("fa-bars")) {
    btnicon.removeClass("fa-bars").addClass("fa-arrow-right");
    $(".nav-container").addClass("open");
  } else {
    btnicon.removeClass("fa-arrow-right").addClass("fa-bars");
    $(".nav-container").removeClass("open");
  }
}

/**
 * main function
 */
$(function(){
  // event listeners
  $("button.nav-toggle").on("click", menuButtonClick);
  $(window).on("scroll", navBg);
});
