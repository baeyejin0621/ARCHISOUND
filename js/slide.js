"use strict";

var swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  pagination: {
    el: ".custom-pagination",
    type: "custom",
    renderCustom: function (swiper, current, total) {
      return `<div class="custom-pagination-current">${current}</div><div class="bar"></div><div class="custom-pagination-total">${total}</div>`;
    },
  },
});
