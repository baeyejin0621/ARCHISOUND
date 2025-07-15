"use strict";

var swiper = new Swiper(".swiper", {
  pagination: {
    el: ".custom-pagination",
    type: "custom",
    renderCustom: function (swiper, current, total) {
      return `<div class="custom-pagination-current">${current}</div><div class="bar"></div><div class="custom-pagination-total">${total}</div>`;
    },
  },
  breakpoints: {
    360: {
      slidesPerView: 1.05,
      spaceBetween: 20,
    },

    1024: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
  },
});
