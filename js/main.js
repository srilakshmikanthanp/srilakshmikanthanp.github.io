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
  var btnicon = $(".menu-btn > i");

  if(btnicon.hasClass("fa-bars")) {
    btnicon.removeClass("fa-bars").addClass("fa-arrow-right");
    $(".sidebar").css({
      "width": "250px",
      "box-shadow" : "0px 0px 0px 100vw rgba(0,0,0,.3)"
    });
  } else {
    btnicon.removeClass("fa-arrow-right").addClass("fa-bars");
    $(".sidebar").css({
      "width": "0px",
      "box-shadow" : "0px 0px 0px 0vw rgba(0,0,0,0)"
    });
  }
}

/**
 * @brief auto text effect for id who
 */
async function textTypingEffect() {
  var data = ["I'm a Student !", " I'm a Programmer !"];
  var who = $("section#home p:last-child");
  var len = data.length;
  
  var wait = (ms) => new Promise((resolve) => {
      setTimeout(resolve, ms);
  });

  for (let i = 0; i < len; i = i + 1 == len ? 0 : i + 1) {
    for (let j = 0; j < data[i].length; ++j) {
      who.text(data[i].substring(0, j + 1));
      await wait(300);
    }

    await wait(1000);

    for (let j = data[i].length - 1; j > 0; --j) {
      who.text(data[i].substring(0, j - 1));
      await wait(200);
    }
  }
}

/**
 * @brief smooth scroll for links
 */
function smoothScroll(evt) {
  var target = $(evt.currentTarget).attr("href");
  var toppos = $(target).offset().top;

  $("html, body").animate({
    scrollTop: toppos
  }, 500);

  evt.preventDefault();
}

/**
 * init the particles
 */
function particles() {
  $("#particles").particles().ajax("/assets/particles.json");
}

/**
 * @brief Main function
 */
function main() {
  // init page
  particles();
  textTypingEffect();

  // event listeners
  $("a[href^='#']").on("click", smoothScroll);
  $(".menu-btn").on("click", menuButtonClick);
  $(window).on("scroll", navBg);
}
