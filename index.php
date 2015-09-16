<?php include_once('functions.php'); ?>
<!DOCTYPE html>
<html lang="en" class="no-js">
<head>
<meta charset="utf-8">
  <title>Monotype Digital Design Language Pattern Library</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- Replace below stylesheet with your own stylesheet -->

  <link rel="stylesheet" href="css/style.css">

  <!-- Style Guide Boilerplate Styles -->
  <link rel="stylesheet" href="sg-assets/css/sg-style.css">
  <!--[if lt IE 9]><link rel="stylesheet" href="css/sg-style-old-ie.css"><![endif]-->

  <!-- Prisim Syntax Highlighting Styles -->
  <link rel="stylesheet" href="sg-assets/vendor/prism/prism.css">

  <!--js-->

  <script src="javascript/vendor/jquery.js"></script>
  <script src="javascript/vendor/jvfloat.min.js"></script>
  <script src="javascript/monotype.js"></script>
  <!--[if gt IE 8]><!--><script src="sg-assets/vendor/prism/prism.js"></script><!--<![endif]-->
  <script src="sg-assets/scripts/sg-scripts.js"></script>


  <script type="text/javascript" src="http://fast.fonts.net/jsapi/09128ffc-80cc-4be1-8c03-b24992264c8c.js"></script>
  <!--end js-->

  <!--[if lt IE 9]>
	<script src="javascript/vendor/respond.js"></script>
	<script src="javascript/vendor/html5shiv-printshiv.js"></script>
	<script src="javascript/vendor/rem.min.js"></script>
	<script src="javascript/vendor/<img src="./images/placeholder.png" alt="a placeholder image" />s.min.js"></script>
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
        <ul class="sg-navlist">
          <li>
            <a href="#sg-about">Getting Started</a>
          </li>
          <li>
            <a href="#sg-colors">Colors</a>
          </li>
          <li>
            <a href="#sg-fontStacks">Fonts</a>
          </li>
        </ul>
      </div>

      <div class="sg-nav-group">
      <h2 class="sg-h2 sg-subnav-title">Blocks</h2>
      <ul class="sg-navlist">
        <?php listMarkupAsListItems('blocks'); ?>
      </ul>
    </div>
    <div class="sg-nav-group">
      <h2 class="sg-h2 sg-subnav-title">Containers</h2>
      <ul class="sg-navlist">
        <?php listMarkupAsListItems('containers'); ?>
      </ul>
    </div>
    </div><!--/.sg-sidebar-->

    <div id="main" class="sg-main" role="main">
      <div class="sg-container">
        <div class="sg-info">
          <div class="sg-about sg-section">
            <h2 id="sg-about" class="sg-h2">Getting Started</h2>
            <p>A living style guide is a great tool to promote visual consistency, unify UX designers and front-end developers, as well as speed up development times. Add some documentation here on how to get started with your new style guide and start customizing this boilerplate to your liking.</p>
            <p>If you are looking for resources on style guides, check out <a href="http://styleguides.io">styleguides.io</a>. There are a ton of great articles, books, podcasts, talks, and other style guide tools!</p>
          </div><!--/.sg-about-->

          <!-- Manually add your UI colors here. -->
          <div class="sg-colors sg-section" id="color-grid">
            <h2 id="sg-colors" class="sg-h2">Colors</h2>
            <div class="sg-color-grid">

            </div><!--/.sg-color-grid-->
          </div><!--/.sg-colors-->

          <!-- Manually add your fonts here. -->
          <div class="sg-font-stacks sg-section">
            <h2 id="sg-fontStacks" class="sg-h2">Font Stacks</h2>
            <dl class="sg-font-list">
              <dt>Primary Font:</dt>
              <dd style='font-family: "HelveticaNeue", Helvetica, Arial, sans-serif;'>"HelveticaNeue", Helvetica, Arial, sans-serif;</dd>

              <dt>Primary Font Italic:</dt>
              <dd style='font-family: "HelveticaNeue", Helvetica, Arial, sans-serif; font-style: italic;'>"HelveticaNeue", Helvetica, Arial, sans-serif;</dd>

              <dt>Primary Font Bold:</dt>
              <dd style='font-family: "HelveticaNeue", Helvetica, Arial, sans-serif; font-weight: 800;'>"HelveticaNeue", Helvetica, Arial, sans-serif;</dd>

              <dt>Secondary Font:</dt>
              <dd style='font-family: Georgia, Times, "Times New Roman", serif;'>Georgia, Times, "Times New Roman", serif;</dd>

              <dt>Secondary Font Italic:</dt>
              <dd style='font-family: Georgia, Times, "Times New Roman", serif; font-style: italic;'>Georgia, Times, "Times New Roman", serif;</dd>

              <dt>Secondary Font Bold:</dt>
              <dd style='font-family: Georgia, Times, "Times New Roman", serif; font-weight: 800;'>Georgia, Times, "Times New Roman", serif;</dd>
            </dl>
            <div class="sg-markup-controls"><a class="sg-btn--top" href="#top">Back to Top</a></div>
          </div><!--/.sg-font-stacks-->
        </div><!--/.sg-info-->

        <div class="sg-base-styles">
         <h1 class="sg-h1">Blocks</h1>
         <?php showMarkup('blocks'); ?>
       </div><!--/.sg-base-styles-->

       <div class="sg-pattern-styles">
         <h1 class="sg-h1">Containers<small> - Design and markup patterns unique to your site.</small></h1>
         <?php showMarkup('containers'); ?>
       </div><!--/.sg-pattern-styles-->

      </div><!--/.sg-container-->
    </div><!--/.sg-main-->
  </div><!--/.sg-wrapper-->


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
