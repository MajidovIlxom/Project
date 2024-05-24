const { Keyboard } = require("grammy");

const menu = new Keyboard()
  .text("Sherik kerak")
  .text("Ish joyi kerak")
  .row()
  .text("Hodim kerak")
  .text("Ustoz kerak")
  .row()
  .text("Shogird kerak");

  const havayoq = new Keyboard().text("Ha").text("Yoq").resized()

// Bu qatordan keyin keyingi qatorni boshqarish uchun obyektni chaqiramiz
const btn1 = menu.keyboard[0][0];
const btn2 = menu.keyboard[0][1];
const btn3 = menu.keyboard[1][0];
const btn4 = menu.keyboard[2][0];
const btn5 = menu.keyboard[2][1];

module.exports = { btn1, btn2, btn3, btn4, btn5, menu, havayoq };
