"use strict";

let selectedHide = true;
let categoryHide = true;

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
