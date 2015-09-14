<?php include_once('functions.php'); ?>
<!DOCTYPE html>
<html lang="en" class="no-js">
<head>
<meta charset="utf-8">
  <title>Monotype Digital Design Language Pattern Library</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="theme-color" content="#000000">

  <!-- Replace below stylesheet with your own stylesheet -->

  <link rel="stylesheet" href="css/style.css">

  <!-- Style Guide Boilerplate Styles -->
  <link rel="stylesheet" href="sg-assets/css/sg-style.css">
  <!--[if lt IE 9]><link rel="stylesheet" href="css/sg-style-old-ie.css"><![endif]-->

  <!-- Prisim Syntax Highlighting Styles -->
  <link rel="stylesheet" href="sg-assets/vendor/prism/prism.css">

  <!--js-->
  <script type="text/javascript" src="http://fast.fonts.net/jsapi/09128ffc-80cc-4be1-8c03-b24992264c8c.js"></script>
  <!--end js-->

  <!--[if lt IE 9]>
	<script src="javascript/vendor/respond.js"></script>
	<script src="javascript/vendor/html5shiv-printshiv.js"></script>
	<script src="javascript/vendor/rem.min.js"></script>
	<script src="javascript/vendor/<img src="./image/placeholder.png" alt="a placeholder image" />s.min.js"></script>
  <![endif]-->


</head>
<body class="p-overview">
  <a href="#main" class="sg-visually-hidden sg-visually-hidden-focusable">Skip to main content</a>

  <div id="top" class="sg-header" role="banner">
    <div class="sg-container">
      <h1 class="sg-logo">

        <span class="sg-logo-initials"><a href="/">&larr; Home</a>&nbsp; &nbsp; Monotype Design Language</span>
        <span class="sg-logo-full"><a href="/">&larr; Back to home</a>&nbsp; &nbsp; Monotype Digital Design Language Pattern Library
      </h1>
      <button type="button" class="sg-nav-toggle">Menu</button>
    </div>
  </div><!--/.sg-header-->

  <div class="sg-wrapper sg-clearfix">
    <div id="nav" class="sg-sidebar" role="navigation">
      <div class="sg-nav-group sg-nav-group--about">
         <h2 class="sg-nav-h2 sg-subnav-title"><a href="index.php">About</a></h2>
      </div>

      <div class="sg-nav-group">
        <h2 class="sg-nav-h2 sg-subnav-title">Blocks <span class="sg-toggle">more</span></h2>
        <ul class="sg-navlist">
          <?php listMarkupAsListItems('blocks'); ?>
        </ul>
      </div>
      <div class="sg-nav-group">
<h2 class="sg-nav-h2 sg-subnav-title"><a href="containers.php">Containers</a></h2>
      </div>
    </div><!--/.sg-sidebar-->

    <div id="main" class="sg-main" role="main">
      <div class="sg-container">
        <div class="sg-base-styles">
          <h1 class="sg-h1">Blocks<small> - UI elements (without grid system)</small></h1>
          <?php showMarkup('blocks'); ?>
        </div>
      </div><!--/.sg-container-->
    </div><!--/.sg-main-->
  </div><!--/.sg-wrapper-->

  <script src="javascript/vendor/jquery-1.11.2.min.js"></script>
  <script src="javascript/vendor/jvfloat.min.js"></script>
  <script src="javascript/monotype.js"></script>
  <!--[if gt IE 8]><!--><script src="sg-assets/vendor/prism/prism.js"></script><!--<![endif]-->
  <script src="scripts/patterns.js"></script>
  <script src="sg-assets/scripts/sg-scripts.js"></script>
  <script>

  $.getJSON('data.json', function(data) {
    var output="";
    for (var i in data.colors) {
      output+="<div class=\"sg-color\">"
        + "<div class=\"sg-color-swatch\" style=\"background-color:" + data.colors[i].colorHex + ";\"></div>"
        + "<div class=\"sg-color-name\">" + data.colors[i].colorName + "</div>"
        + "<div class=\"sg-color-value\">" + data.colors[i].colorHex + "</div>"
        + "</div>";
    }

    output+="</div>";
    document.getElementById("color-grid").innerHTML=output;
  });
  </script>
  <script>
  $('.sg-toggle').click(function() {
  $('.sg-navlist').toggleClass("show"); //you can list several class names
  });
  </script>
</body>
</html>
