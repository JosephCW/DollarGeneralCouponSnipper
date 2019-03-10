// ==UserScript==
// @name     Dollar General Coupon Snippper
// @version  1
// @grant    none
// @include https://dg.coupons.com/coupons/*
// ==/UserScript==

var refreshDelayInSeconds = 7;

// Function to click on an element.
function click(elm) {
     var evt = document.createEvent('MouseEvents');
     evt.initMouseEvent('click', true, true, window, 0, 1, 1, 1, 1, false, false, false, false, 0, null);
     elm.dispatchEvent(evt);
}

// Try to click on the + buttons found on the page.
try {
  var coupons = document.getElementsByClassName("media-body");
  for (i = 0; i < coupons.length; i++) {
    var current_coupon = coupons[i];
    var add_button = current_coupon.getElementsByClassName("add-text")[0];
    click(add_button);
  }
  
  // Clicked all the add buttons on the page.
  // Time for a refresh :)
  setTimeout(
    function() {
      locationlreadyAdded = document.getElementsByClassName("itemCount")[0].textContent;
      var itemsAvailable = document.getElementsByClassName("itemSelector")[0].children[1].textContent.split(" ")[0];
      if (itemsAlreadyAdded !== itemsAvailable) {
        location.reload();
      } else {
        alert("Dollar General Coupon Snipper\nAll coupons have been clicked already!");
      }.reload();
    }, refreshDelayInSeconds * 1000);
  
} catch (e) {
  console.log("Encountered an exception while parsing DG page!");
}
