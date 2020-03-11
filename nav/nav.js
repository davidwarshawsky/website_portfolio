/* nav.js */
var pages = [
  "bmi.html",
  "colorsam.html",
  "fortune.html",
  "gear.html",
  "keysam.html",
  "logo.html",
  "resistors.html",
  "tictactoe.html",
  "initials.html",
  "apple.html",
  "popup_project/popup.html",
  "album_cover.html", 
  "college_and_career_plans/plans.html",
  "political_discussions/poltical_discussions.html",
];

function findpage(page) {
    for (var i=0; i<pages.length; i++) {
        if (page.indexOf(pages[i]) > -1) {
            return i;
        }
    }
}

function addNavLinks () {
      // 1. find the current page in the list above
    var url = document.location.href;
    var current = findpage(url);

      // 1b. are we in a folder?
      var folder = "";
      if (pages[current].indexOf('/') > -1) {
        folder = "../";
      }

      // 2. find the previous page
      var previous = current - 1;
      if (previous < 0) {
        previous = pages.length - 1;
      }

      // 3. find the next page
      var next = (current+1) % pages.length;

      // 4. fix the links on the arrows
      var nav = document.getElementById('navigation');
      var links = nav.getElementsByTagName('a');
      links[0].href = folder + pages[previous];
      links[1].href = folder + "index.html";
      links[2].href = folder + pages[next]; 
}

window.onload = addNavLinks;