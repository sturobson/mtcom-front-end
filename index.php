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
  <script type="text/javascript" src="http://fast.fonts.net/jsapi/09128ffc-80cc-4be1-8c03-b24992264c8c.js"></script>
  <!--end js-->

  <!--[if lt IE 9]>
  <script src="javascript/vendor/respond.js"></script>
  <script src="javascript/vendor/html5shiv-printshiv.js"></script>
  <script src="javascript/vendor/rem.min.js"></script>
  <script src="javascript/vendor/<img src="./images/placeholder.png" alt="a placeholder image" />s.min.js"></script>
  <![endif]-->


</head>
<body id="top" class="p-overview">
  <a href="#main" class="sg-visually-hidden sg-visually-hidden-focusable">Skip to main content</a>
  <span class="anchor" id="top"></span>
  <div class="sg-header" role="banner">
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
          </ul>
        </div>
        <div class="sg-nav-group sg-nav-group--pages">
          <h2 class="sg-nav-h2 sg-subnav-title">Pages</h2>
          <ul class="sg-navlist">
            <li><a href="home.php">Home</a></li>
            <li><a href="./overview.php">Overview</a></li>
            <li><a href="article.php">Article</a></li>
          </ul>
        </div>
        <div class="sg-nav-group sg-nav-group--blocks">
          <h2 class="sg-nav-h2 sg-subnav-title">Blocks</h2>
          <ul class="sg-navlist">
            <?php listMarkupAsListItems('blocks'); ?>
          </ul>
        </div>
        <div class="sg-nav-group sg-nav-group--containers">
          <h2 class="sg-nav-h2 sg-subnav-title">Containers</h2>
          <ul class="sg-navlist">
            <?php listMarkupAsListItems('containers'); ?>
          </ul>
        </div>
      </div><!--/.sg-sidebar-->

      <div id="main" class="sg-main" role="main">
        <div class="sg-container">
          <div class="sg-info">
            <span class="anchor" id="sg-about"></span>
            <div class="sg-section">
              <h1 id="sg-about"class="sg-h1">Getting Started</h1>
              <p>Welcome to the Monotype UI Library. Pages are made up of Containers which are built by Blocks.</p>
            </div><!--/.sg-about-->
            <span class="anchor" id="sg-methodology"></span>
            <div class="sg-section">
              <h1 class="sg-h1">Approach</h1>
              <p>The <a href="http://next.theguardian.com/blog/container-model-blended-content/">Container Model</a> is designed to structure a  site’s code and content to make it clear and less redundant. In the same way that traditional shipping containers are used to sort and organize goods, the Container Model believes that content can be compartmentalized and stacked in a manner that is reusable and understandable.</p>
              <p>The following document gives a quick overview of the architectural principles and terms used to build the new Monotype site. </p>
              <p>For better readability, we are using a <a href="http://www.sitepoint.com/working-bem-scale-advice-top-developers/">simplified BEM Syntax</a> as a CSS class naming convention. </p>
              <h2 class="sg-h2">Terms</h2>
              <h3 class="sg-h3">Page Templates</h3>
              <p>In contrast to the usual page metaphor, a page is only a collection of Container Stack areas. This is done to in the sake of code reuse, allowing the same content to be cleanly recycled across many pages. For example the most common page type (Overview) defines four very generic container stack areas: Head, Main, Related and Foot. </p>
              <h3 class="sg-h3">Container Stack</h3>
              <p>A Container Stack is a collection of Container Instances stacked on top of each other and bound to Container Stack area of a Page Instance.</p>
              <h3 class="sg-h3">Container Instance</h3>
              <p>A Container Instance defines the concrete content of a Container along its template. Note, that most data entities (Fields/Blocks) of a container are optional; if a specific piece of  data is missing, there will be no corresponding visual output. Moreover certain Container Templates offer options to alter their visual output: The Paragraph Container, for example, has an option to either place its image above or below the Paragraph text body. </p>
              <h3 class="sg-h3">Container Template</h3>
              <p>A Container Template is like a scaffold for Container contents.<br />
                Container Templates are data structures with clearly defined semantics and visual representations.
              </p>
              <h3 class="sg-h3">Page Instances</h3>
              <p>Pages Instances define concrete lists of Container Instances that make up a the content of a page. Page instances only reference Container Instances. This is important because <em>the very same Container Instance can show up on different actual pages</em>. If the content of a Container instance is changed, the change automatically propagates to all pages containing the corresponding Container (Instance). So, rather than redefining a site footer on every page of a site, one can instead create a single Container Instance for a footer, that will ensure consistency on across the site.  </p>
              <h3 class="sg-h3">Blocks</h3>
              <p>To accomplish a highly consistent design language <em>across</em> different containers, we further divides containers into Blocks; A Block is an independent entity that maintains consistent visual representation and functionality <em>across the whole site</em>. </p>
              <p>For example, most Containers feature a Subtitle Block which outputs the same HTML and CSS structures, making sure all subtitles at Monotype look exactly the same.</p>
              <h3 class="sg-h3">Container as Blocks</h3>
              <p>Blocks can contain other Blocks. Therefore we have defined Containers as Blocks containing Blocks in code.</p>
              <h3 class="sg-h3">Elements</h3>
              <p>Blocks are further divided into Elements. An Element are unique to their sepcific context, i.e. only used at a specific block. They are not designed for reuse in another context.</p>
              <h3 class="sg-h3">Modifiers</h3>
              <p>We are using Modifiers on Blocks and Elements to signify state changes of Blocks and Elements; most of them are either used or appended by JavaScript.</p>
            </div><!--end g-container-->

            <!-- Manually add your UI colors here. -->
            <div class="sg-colors sg-section">
              <h1 id="sg-colors" class="sg-h1">Colors</h1>
              <div class="sg-color-grid" id="color-grid">


              </div><!--/.sg-color-grid-->
            </div><!--/.sg-colors-->
          </div><!--/.sg-info-->



        </div><!--/.sg-container-->
      </div><!--/.sg-main-->
    </div><!--/.sg-wrapper-->

    <!--[if gt IE 8]><!--><script src="sg-assets/vendor/prism/prism.js"></script><!--<![endif]-->
    <script src="sg-assets/scripts/sg-scripts.js"></script>

    <script src="javascript/vendor/jquery.js"></script>
    <script src="javascript/vendor/jvfloat.min.js"></script>

    <script src="javascript/monotype.js"></script>


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
    $(".sg-nav-group--blocks .sg-nav-h2").click(function() {
      $(this).parent().toggleClass("active");
    });
    $(".sg-nav-group--pages .sg-nav-h2").click(function() {
      $(this).parent().toggleClass("active");
    });
    $(".sg-nav-group--containers .sg-nav-h2").click(function() {
      $(this).parent().toggleClass("active");
    });
    $('.sg-nav-group--blocks .sg-navlist li a').attr('href',function(i,v) {
      return "blocks.php" + v;
    });
    $('.sg-nav-group--containers .sg-navlist li a').attr('href',function(i,v) {
      return "containers.php" + v;
    });
    </script>
  </body>
  </html>
