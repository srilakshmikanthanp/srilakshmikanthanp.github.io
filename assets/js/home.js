// Copyright (c) 2021 Sri Lakshmi Kanthan P
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

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
 * initilize the home page
 */
$(function() {
  // text typing effect
  textTypingEffect();

  // event listeners
  $("a[href^='#']").on("click", smoothScroll);
});
