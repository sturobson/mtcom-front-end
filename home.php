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
              <a href="index.php#sg-about">Getting Started</a>
            </li>
            <li>
              <a href="index.php#sg-colors">Colors</a>
            </li>
          </ul>
        </div>
        <div class="sg-nav-group sg-nav-group--pages">
          <h2 class="sg-nav-h2 sg-subnav-title">Pages</h2>
          <ul class="sg-navlist">
            <li><a style="color: #222;" href="home.php">Home</a></li>
            <!-- <li><a href="overview.php">Overview</a></li> -->
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
          <section class="b-home">

            <header class="b-1-0-0-header g-container">
  <div class="g-block">
    <div class="g-row">
      <div class="g-col">

        <div class="b-navigation">
  <h1 class="b-logo">
    <a class="b-logo__link" href="http://library.mon.ia.net" title="Monotype UI Library">Monotype UI Library</a><!--end b-logo__link-->
  </h1><!--end b-logo-->
  <nav class="b-navigation__nav">
    <a aria-hidden="true" class="nav-toggle" href="#">Menu</a><ul style="position: relative;" aria-hidden="false" class="b-navigation__list nav-collapse nav-collapse-0 closed">

      <!--Search-->
      <li class="b-navigation__item b-navigation__item--search">
        <form action="/search-result?" class="b-mobile-search">
  <div class="b-mobile-search__input-wrapper">
    <input class="b-mobile-search__input" placeholder="Search" type="text">
  </div>
  <div class="b-mobile-search__submit-wrapper">
    <input class="b-mobile-search__submit" title="" value="Search" type="submit">
  </div>
</form><!--end b-mobile-search-form-->      </li>

            <li class="b-navigation__item">
        <a class="b-navigation__link" href="http://library.mon.ia.net/intro" title="Intro">Intro</a>
      </li>
            <li class="b-navigation__item">
        <a class="b-navigation__link" href="http://library.mon.ia.net/globals" title="Globals">Globals</a>
      </li>
            <li class="b-navigation__item">
        <a class="b-navigation__link" href="http://library.mon.ia.net/pages" title="Pages">Pages</a>
      </li>
            <li class="b-navigation__item">
        <a class="b-navigation__link" href="http://library.mon.ia.net/containers-pages" title="Containers">Containers</a>
      </li>
            <li class="b-navigation__item">
        <a class="b-navigation__link" href="http://library.mon.ia.net/blocks" title="Blocks">Blocks</a>
      </li>


    </ul><!--end b-navigation__list-->
    <ul class="b-navigation__breadcrumb">


      <li class="b-navigation__breadcrumb__item b-navigation__breadcrumb__item--selected">
        <h2><a class="b-navigation__breadcrumb__item__link" href="http://library.mon.ia.net" title="Monotype UI Library">Monotype UI Library</a></h2>
      </li>
    </ul>
  </nav><!--end b-navigation__navigation-->
</div>

        <aside class="b-meta b-meta--interaction">
  <ul class="b-meta__list">
    <!--
    <li class="b-meta__item">
      <a class="b-login b-meta__link" href="" title="">Login</a>
    </li>
    -->
    <li class="b-meta__item ">
                <a class="b-meta__search initial b-meta__link" href="search-result?" title="">
        <span class="b-meta__search-text b-meta__search-text--inactive">Search</span>
        <span class="b-meta__search-text b-meta__search-text--active">Close Search</span><!--This allows setting a text in CMS-->
        </a>
    </li><!--end b-meta__item-->
  </ul><!--end b-meta__list-->
</aside><!--end b-meta-->

      </div><!--end g-col-->
    </div><!--end g-row-->
  </div><!--end g-block-->
</header><!--end b-1-0-0-header-->

<section class="b-3-2-0-intro-search b-3-2-0-intro-search--interaction g-container">

  <div class="b-lead g-block">
  <div class="g-row">
    <div class="b-lead__text g-col">
      <p>Search Lead:</p>    </div><!--b-lead__text-->
  </div><!--end g-row-->
</div><!--end b-lead-->

  <form action="/search-result" class="b-search-form" novalidate="">

    <div class="g-block">
      <div class="g-row">
        <div class="g-col">
          <input class="b-search-form__input" placeholder="Typefaces, essays, technologies..." type="search">
        </div><!--end g-col-->
      </div><!--end g-row-->
    </div><!--end b-search-->

    <div class="b-error-message g-block"><!--This is a server side error message and is hidden by default-->
      <div class="g-row">
        <div class="g-col">
          <div class="b-error-message__output">
            No results were found for XY. Please try another search term or get in touch with our experts. [Server Side Message]
          </div><!--end b-error-message__output-->
        </div><!--end g-col-->
      </div><!--end g-row-->
    </div><!--end b-error-message-->

    <div class="b-button b-button--search g-block">
      <div class="g-row">
        <div class="g-col">
          <input class="b-button__item" title="" value="Search" disabled="disabled" type="submit">
        </div><!--end g-col-->
      </div><!--end g-row-->
    </div><!--end b-button-->

  </form><!--end b-search-->

</section><!--end b-3-2-0-intro-search-->                <section class="b-typetester b-typetester--home malabar">
  <div class="g-container b-typetester__canvas-wrapper">
    <div class="g-block b-typetester__uptown">
      <div class="g-row">
        <div class="g-col">
          <div class="b-typetester__canvas">
            <div data-id="800" class="b-typetester__write initial weight-800" placeholder="Welcome to the Monotype UI Library. <a href=&quot;/pages&quot;>Pages</a> are made up of <a href=&quot;/containers-pages&quot;>Containers</a> which are built by <a href=&quot;/blocks&quot;>Blocks</a>." contenteditable="true">
              Welcome to the Monotype UI Library. <a href="pages.php">Pages</a> are made up of <a href="containers.php">Containers</a> which are built by <a href="blocks.php">Blocks</a>.<span class="b-typetester__cursor">|</span>
            </div>
          </div><!--end b-typetester-canvas-->
        </div><!--end g-col-->
      </div><!--end g-row-wide-->
    </div><!--end g-block-->
  </div><!--end g-container-->
  <div class="b-typetester__meta-wrapper">
    <div class="g-container">
      <div class="g-block b-typetester__downtown">
        <div class="g-row">
          <div class="b-typetester__meta g-col">
            <select class="b-typetester__meta-select b-typetester__meta-fontlist">
              <option value="malabar">Malabar</option>
              <option value="helvetica">Helvetica</option>
              <option value="kootenay">Kootenay</option>
            </select><!--end b-form__select-->
            <div class="b-typetester__meta-list-home"><select class="b-typetester__meta-select-mobile">
  <option data-id="400" class="weight-400">
    Regular
  </option>
  <option data-id="400" class="weight-400 italic">
    Regular Italic
  </option>
  <option data-id="700" class="weight-700">
    Bold
  </option>
  <option data-id="700" class="weight-700 italic">
    Bold Italic
  </option>
  <option data-id="800" class="weight-800" selected="selected">
    Heavy
  </option>
  <option data-id="800" class="weight-800 italic">
    Heavy Italic
  </option>
</select>

<div class="b-typetester__meta-select-desktop">
  <ul class="b-typetester__meta-list b-typetester__meta-list--weight">
    <li class="b-typetester__list-item b-typetester__list-item--weight-toggle">
      <a class="b-typetester__list-trigger  italic" title="Regular" data-id="400">Regular</a>
    </li>
    <li class="b-typetester__list-item b-typetester__list-item--weight-toggle">
      <a class="b-typetester__list-trigger  italic" title="Bold" data-id="700">Bold</a>
    </li>
    <li class="b-typetester__list-item b-typetester__list-item--weight-toggle b-typetester__list-item--selected">
      <a class="b-typetester__list-trigger  italic" title="Heavy" data-id="800">Heavy</a>
    </li>
  </ul>
  <!--end b-typetester__meta-->
  <ul class="b-typetester__meta-list b-typetester__meta-list--style">
    <li class="b-typetester__list-item b-typetester__list-item--toggle italic">
      <a class="b-typetester__list-trigger" title="">Italic</a>
    </li>
  </ul>
  <!--end b-typetester__style-->
</div>
</div>
          </div><!--end b-typetester__meta-->
        </div><!--end g-row-->
      </div><!--end g-block-->
    </div><!--end g-container-->

    <div class="g-container b-footer-legal">
      <div class="g-block">
        <div class="g-row">
          <ul class="b-footer-legal__list g-col">
            <li class="b-footer-legal__item">
              <a class="b-footer-legal__link" href="" title="">Trademarks</a>
            </li>
            <li class="b-footer-legal__item">
              <a class="b-footer-legal__link" href="" title="">T&amp;C</a>
            </li>
            <li class="b-footer-legal__item">
              <a class="b-footer-legal__link" href="" title="">Privacy Policy</a>
            </li>
            <li class="b-footer-legal__item">
              <a class="b-footer-legal__link" href="" title="">MTX</a>
            </li>
            <li class="b-footer-legal__item">
              <a class="b-footer-legal__link" href="" title="">EULA</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

  </div><!--end b-typetester__meta-wrapper-->
</section><!--end b-typetester-->

</section>
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
    $(".sg-nav-group--pages .sg-nav-h2").parent().addClass("active");
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
