// Copyright (c) 2021 Sri Lakshmi Kanthan P
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/**
 * @brief auto text effect for id who
 */
async function whoTextTypingEffect() {
  var data = ["a Student !", "a Programmer !"];
  var who = $("#who .content");
  var len = data.length;
  var wait = (ms) =>
    new Promise((resolve) => {
      setTimeout(resolve, ms);
    });

  for (let i = 0; i < len; i = i + 1 == len ? 0 : i + 1) {
    for (let j = 0; j < data[i].length; ++j) {
      who.text(data[i].substring(0, j + 1));
      await wait(200);
    }

    await wait(1000);

    for (let j = data[i].length - 1; j > 0; --j) {
      who.text(data[i].substring(0, j - 1));
      await wait(200);
    }
  }
}

/**
 * @brief Handeler for Form Submit
 */
function formSubmit(evt) {
  var subj = $("#contactsubject").val();
  var message = $("#contactmessage").val();

  if (subj.length == 0) {
    alert("Subject is required");
    return false;
  }

  if (message.length == 0) {
    alert("Message is required");
    return false;
  }

  $(location).attr(
    "href",
    `mailto:srilakshmikanthanp@gmail.com?subject=${encodeURIComponent(
      subj
    )}&body=${encodeURIComponent(message)}`
  );

  return false;
}

/**
 * @brief Space For tab key in text area
 */
function keyTab(evt) {
  if (evt.key == "Tab") {
    evt.preventDefault();
    var start = this.selectionStart;
    var end = this.selectionEnd;
    var value = this.value;
    this.value = value.substring(0, start) + "\t" + value.substring(end);
    this.selectionStart = this.selectionEnd = start + 1;
  }
}

/**
 * @brief Main function
 */
function main() {
  whoTextTypingEffect();
  $("#contactsubmit").on("submit", formSubmit);
  $("#contactmessage").on("keydown", keyTab);
}

/**
 * Initilize the Page
 */
$(function () {
  main();
  feather.replace();
});
