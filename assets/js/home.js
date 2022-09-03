// Copyright (c) 2021 Sri Lakshmi Kanthan P
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/**
 * @brief auto text effect for id who
 */
async function textTypingEffect() {
  let data = ["I'm a Student !", " I'm a Programmer !"];
  let who = $("section#intro p:last-child");
  let len = data.length;

  let wait = (ms) => new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

  for (let i = 0; i < len; i = i + 1 == len ? 0 : i + 1) {
    for (let j = 6; j < data[i].length; ++j) {
      who.text(data[i].substring(0, j + 1));
      await wait(300);
    }

    await wait(1000);

    for (let j = data[i].length - 1; j > 6; --j) {
      who.text(data[i].substring(0, j - 1));
      await wait(200);
    }
  }
}

/**
 * @brief projects link click
 */
function projectsTrClick(evt) {
  let link = $(evt.currentTarget).data('link');
  console.log(evt.currentTarget);
  window.open(link);
}

/**
 * @brief smooth scroll for links
 */
function smoothScroll(evt) {
  let target = $(evt.currentTarget).attr("href");
  let toppos = $(target).offset().top;

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
  $("section#projects table tr").on('click', projectsTrClick);
});
