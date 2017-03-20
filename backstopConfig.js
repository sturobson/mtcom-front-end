var glob = require("glob")

var viewports = [
  {
    "name": "tiny",
    "width": 320,
    "height": 600
  },

  {
    "name": "medium",
    "width": 768,
    "height": 1024
  },

  {
    "name": "huge",
    "width": 1024,
    "height": 800
  },
  {
    "name": "hugeplus",
    "width": 1366,
    "height": 768
  }
];

// Hide BrowserSync notice, KIS widget and videos
var hideSelectors = [];
// Take out markup samples
var removeSelectors = [];
// Just get #Main-Content
var selectors = [];
var scenariosArray = [];
var htmlFiles = glob.sync("live/components/preview/**/*.html");

// console.info(htmlFiles.length+' files found!');

// Loop through all *.html pages in /dev and push to scenariosArray
htmlFiles.forEach(function(file, i) {
  var filename = file.substr(0);
  scenariosArray.push({
    "label": filename,
    "url": "http://localhost:8888/"+filename,
    "hideSelectors": hideSelectors,
    "removeSelectors": removeSelectors,
    "selectors": selectors
  });
});

module.exports = {
  "id": "SCL Test",
  "viewports": viewports,
  "scenarios": scenariosArray,
  "paths": {
    "bitmaps_reference": "backstop_data/bitmaps_reference",
    "bitmaps_test": "backstop_data/bitmaps_test",
    "casper_scripts": "backstop_data/casper_scripts",
    "html_report": "backstop_data/html_report",
    "ci_report": "backstop_data/ci_report"
  },
  "casperFlags": [],
  "engine": "phantomjs",
  "report": ["browser"],
  "debug": false
}
