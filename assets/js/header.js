// Copyright (c) 2021 Sri Lakshmi Kanthan P
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

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
 * change bg of nav on scroll
 */
function navBg(evt) {
  let pos = $(window).scrollTop();
  let nav = $("nav");

  if (pos > 0) {
    nav.addClass("scroll");
  } else {
    nav.removeClass("scroll");
  }
}

/**
 * main function
 */
$(function () {
  // event listeners
  $("button.nav-toggle").on("click", menuButtonClick);
  $(window).on("scroll", navBg);
});
