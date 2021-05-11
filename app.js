"use strict";

let selectedHide = true;
let categoryHide = true;
let scrollChange = false;

function showSelectList() {
  let selectedDownMenu = document.querySelector(
    ".count-selected-menu-downlist"
  );
  let selectedUpMenu = document.querySelector(".count-selected-menu");

  if (selectedHide == true) {
    selectedDownMenu.style.visibility = "visible";
    selectedUpMenu.style.border = "1px solid #346aff";
    selectedHide = false;
  } else {
    selectedDownMenu.style.visibility = "hidden";
    selectedUpMenu.style.border = "1px solid #dddddd";
    selectedHide = true;
  }
}

function showAllCaterory() {
  let downCategory = document.querySelector(".all-category-list");

  if (categoryHide == true) {
    downCategory.style.visibility = "visible";
    categoryHide = false;
    document
      .getElementById("all-down")
      .setAttribute("class", "fas fa-caret-up");
  } else {
    downCategory.style.visibility = "hidden";
    categoryHide = true;
    document
      .getElementById("all-down")
      .setAttribute("class", "fas fa-caret-down");
  }
}

let num = Number(document.getElementById("buy-count").value);

function addCount() {
  num += 1;
  document.getElementById("buy-count").value = String(num);
  document.querySelector(".time-reward").textContent = String(102 * num);
  document.querySelector(".before-price").textContent = String(10760 * num);
  let realPrice = String(10160 * num);
  document.querySelector(".major-price-time").textContent =
    realPrice.slice(0, realPrice.length - 3) +
    "," +
    realPrice.slice(realPrice.length - 3, realPrice.length);

  console.log(String(num));
  console.log(String(102 * num));
}

function subCount() {
  num -= 1;
  document.getElementById("buy-count").value = String(num);
  document.querySelector(".time-reward").textContent = String(102 * num);
  document.querySelector(".before-price").textContent = String(10760 * num);
  let realPrice = String(10160 * num);
  document.querySelector(".major-price-time").textContent =
    realPrice.slice(0, realPrice.length - 3) +
    "," +
    realPrice.slice(realPrice.length - 3, realPrice.length);
  console.log(String(num));
  console.log(String(102 * num));

  if (num < 1) {
    alert("0이하는 안돼요");
    document.getElementById("buy-count").value = 1;
    document.querySelector(".major-price-time").textContent = "10,160";
    document.querySelector(".before-price").textContent = "10,760";
  }
}

// 오른쪽 화살

function showArrow() {
  document.querySelector(".right-arrow").style.visibility = "visible";
  // if (scrollChange == true) {
  //   document.querySelector(".left-arrow").style.visibility = "visible";
  // }
}

function hideArrow() {
  document.querySelector(".right-arrow").style.visibility = "hidden";
}

function showRightBlue() {
  document.querySelector(".after-arrow").style.visibility = "visible";
  document.querySelector(".before-arrow").style.visibility = "hidden";
}

function hideRightBlue() {
  document.querySelector(".before-arrow").style.visibility = "visible";
  document.querySelector(".after-arrow").style.visibility = "hidden";
}

//

function horizonScroll() {
  let target = document.querySelector(".horizon-scroll");
  let horizonScroll = target.animate(
    [{ transform: "translateX(0)" }, { transform: "translateX(-700px)" }],
    500
  );

  horizonScroll.addEventListener("finish", function () {
    target.style.transform = "translateX(-700px)";
  });

  console.log(target.getBoundingClientRect().right);
  scrollChange = true;
}
