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
        <div class="sg-nav-group sg-nav-group--blocks">
          <h2 class="sg-nav-h2 sg-subnav-title">Pages</h2>
          <ul class="sg-navlist" style="display:block;">
            <li><a href="home.php">Home</a></li>
            <li><a style="color: #222;" href="overview.php">Overview</a></li>
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
        </div><!--/.sg-container-->
        <header class="b-1-0-0-header g-container">
          <div class="g-block">
            <div class="g-row">
              <div class="g-col">
                <div class="b-navigation">
                  <h1 class="b-logo">
                    <a class="b-logo__link" href="http://prototype.mon.ia.net" title="Home">Monotype</a>
                    <!--end b-logo__link-->
                  </h1>
                  <!--end b-logo-->
                  <nav class="b-navigation__nav">
                    <ul class="b-navigation__list">
                      <!--Search-->
                      <li class="b-navigation__item b-navigation__item--search">
                        <form action="/search-result?" class="b-mobile-search">
                          <div class="b-mobile-search__input-wrapper">
                            <input class="b-mobile-search__input" type="text" placeholder="Search"/>
                          </div>
                          <div class="b-mobile-search__submit-wrapper">
                            <input type="submit" class="b-mobile-search__submit" title="" value="Search" />
                          </div>
                        </form>
                        <!--end b-mobile-search-form-->
                      </li>
                      <li class="b-navigation__item"> <a class="b-navigation__link" href="http://prototype.mon.ia.net/typefaces" title="Fonts">Fonts</a> </li>
                      <li class="b-navigation__item"> <a class="b-navigation__link" href="http://prototype.mon.ia.net/technology" title="Technology">Technology</a> </li>
                      <li class="b-navigation__item"> <a class="b-navigation__link" href="http://prototype.mon.ia.net/expertise" title="Expertise">Expertise</a> </li>
                      <li class="b-navigation__item"> <a class="b-navigation__link" href="http://prototype.mon.ia.net/company" title="Company">Company</a> </li>
                    </ul>
                    <!--end b-navigation__list-->
                    <ul class="b-navigation__breadcrumb">
                      <li class="b-navigation__breadcrumb__item b-navigation__breadcrumb__item--selected">
                        <h2>
                          <a class="b-navigation__breadcrumb__item__link" href="http://prototype.mon.ia.net" title="Home">Home</a>
                        </h2>
                      </li>
                    </ul>
                  </nav>
                  <!--end b-navigation__navigation-->
                </div>
                <aside class="b-meta b-meta--interaction">
                  <ul class="b-meta__list">
                    <!-- <li class="b-meta__item">
                    <a class="b-login b-meta__link" href="" title="">Login</a>
                  </li>
                  -->
                  <li class="b-meta__item ">
                    <a class="b-meta__search initial b-meta__link" href="search-result?" title="">
                      <span class="b-meta__search-text b-meta__search-text--inactive">Search</span> <span class="b-meta__search-text b-meta__search-text--active">Close Search</span>
                      <!--This allows setting a text in CMS-->
                    </a>
                  </li>
                  <!--end b-meta__item-->
                </ul>
                <!--end b-meta__list-->
              </aside>
              <!--end b-meta-->
            </div>
            <!--end g-col-->
          </div>
          <!--end g-row-->
        </div>
        <!--end g-block-->
        </header>
        <!--end b-1-0-0-header-->


        <footer class="b-2-0-0-footer">
          <div class="g-container b-footer-list">
            <div class="g-block">
              <ul class="b-footer-list__list g-row-wide">
                <li class="b-footer-list__item g-col-2-3">
                  <a class="b-footer-list__link" href="http://prototype.mon.ia.net" title="Home">Monotype Inc.</a>
                  <ul class="b-footer-list__secondlevel">
                    <li class="b-footer-list__secondlevel-item">
                      <p>Copyright 2015</p>
                    </li>
                  </ul>
                  <!--end b-footer-list__secondlevel-->
                </li>
                <!--end b-footer-list__item-->
                <li class="b-footer-list__item g-col-2-3">
                  <a class="b-footer-list__link" href="http://prototype.mon.ia.net/typefaces" title="Fonts">Fonts</a>
                  <ul class="b-footer-list__secondlevel">
                    <li class="b-footer-list__secondlevel-item"> <a class="b-footer-list__secondlevel-link" href="http://prototype.mon.ia.net/typefaces/fonts-for-print" title="Fonts for Print">Fonts for Print</a> </li>
                    <li class="b-footer-list__secondlevel-item"> <a class="b-footer-list__secondlevel-link" href="http://prototype.mon.ia.net/typefaces/web-fonts" title="Web Fonts">Web Fonts</a> </li>
                    <li class="b-footer-list__secondlevel-item"> <a class="b-footer-list__secondlevel-link" href="http://prototype.mon.ia.net/typefaces/fonts-for-games" title="Fonts for Games">Fonts for Games</a> </li>
                    <li class="b-footer-list__secondlevel-item"> <a class="b-footer-list__secondlevel-link" href="http://prototype.mon.ia.net/typefaces/fonts-for-apps" title="Fonts for Apps">Fonts for Apps</a> </li>
                    <li class="b-footer-list__secondlevel-item"> <a class="b-footer-list__secondlevel-link" href="http://prototype.mon.ia.net/typefaces/fonts-for-cars" title="Fonts for Cars">Fonts for Cars</a> </li>
                    <li class="b-footer-list__secondlevel-item"> <a class="b-footer-list__secondlevel-link" href="http://prototype.mon.ia.net/typefaces/custom-fonts" title="Custom Fonts">Custom Fonts</a> </li>
                  </ul>
                  <!--end b-footer-list__secondlevel-->
                </li>
                <!--end b-footer-list__item-->
                <li class="b-footer-list__item g-col-2-3">
                  <a class="b-footer-list__link" href="http://prototype.mon.ia.net/technology" title="Technology">Technology</a>
                  <ul class="b-footer-list__secondlevel">
                    <li class="b-footer-list__secondlevel-item"> <a class="b-footer-list__secondlevel-link" href="http://prototype.mon.ia.net/technology/font-rendering" title="Legibility">Legibility</a> </li>
                    <li class="b-footer-list__secondlevel-item"> <a class="b-footer-list__secondlevel-link" href="http://prototype.mon.ia.net/technology/memory-efficiency" title="Memory Efficiency">Memory Efficiency</a> </li>
                    <li class="b-footer-list__secondlevel-item"> <a class="b-footer-list__secondlevel-link" href="http://prototype.mon.ia.net/technology/language-control" title="Language Control">Language Control</a> </li>
                  </ul>
                  <!--end b-footer-list__secondlevel-->
                </li>
                <!--end b-footer-list__item-->
                <li class="b-footer-list__item g-col-2-3">
                  <a class="b-footer-list__link" href="http://prototype.mon.ia.net/expertise" title="Expertise">Expertise</a>
                  <ul class="b-footer-list__secondlevel"></ul>
                  <!--end b-footer-list__secondlevel-->
                </li>
                <!--end b-footer-list__item-->
                <li class="b-footer-list__item g-col-2-3">
                  <a class="b-footer-list__link" href="http://prototype.mon.ia.net/company" title="Company">Company</a>
                  <ul class="b-footer-list__secondlevel">
                    <li class="b-footer-list__secondlevel-item"> <a class="b-footer-list__secondlevel-link" href="http://prototype.mon.ia.net/company/business" title="Business">Business</a> </li>
                    <li class="b-footer-list__secondlevel-item"> <a class="b-footer-list__secondlevel-link" href="http://prototype.mon.ia.net/company/news-and-events" title="News and Events">News and Events</a> </li>
                    <li class="b-footer-list__secondlevel-item"> <a class="b-footer-list__secondlevel-link" href="http://prototype.mon.ia.net/company/careers" title="Careers">Careers</a> </li>
                    <li class="b-footer-list__secondlevel-item"> <a class="b-footer-list__secondlevel-link" href="http://prototype.mon.ia.net/company/contac" title="Contact">Contact</a> </li>
                  </ul>
                  <!--end b-footer-list__secondlevel-->
                </li>
                <!--end b-footer-list__item-->
                <li class="b-footer-list__item b-footer-list__item--legal g-col-2-3">
                  <a class="b-footer-list__link" href="" title="">Legal</a>
                  <ul class="b-footer-list__secondlevel">
                    <li class="b-footer-list__secondlevel-item"> <a class="b-footer-list__secondlevel-link" href="#" title="">Trademark</a> </li>
                    <li class="b-footer-list__secondlevel-item"> <a class="b-footer-list__secondlevel-link" href="#" title="">T&C</a> </li>
                    <li class="b-footer-list__secondlevel-item"> <a class="b-footer-list__secondlevel-link" href="#" title="">Privacy Policy</a> </li>
                    <li class="b-footer-list__secondlevel-item"> <a class="b-footer-list__secondlevel-link" href="#" title="">MTX</a> </li>
                    <li class="b-footer-list__secondlevel-item"> <a class="b-footer-list__secondlevel-link" href="#" title="">EULA</a> </li>
                  </ul>
                  <!--end b-footer-list__secondlevel-->
                </li>
                <!--end b-footer-list__item-->
                <li class="b-footer-list__item b-footer-list__item--language g-col-2-3">
                  <a class="b-footer-list__link" href="" title="">Language</a>
                  <ul class="b-footer-list__secondlevel">
                    <li class="b-footer-list__secondlevel-item b-footer-list__secondlevel-item--selected"> <a class="b-footer-list__secondlevel-link" href="" title="">English</a> </li>
                    <li class="b-footer-list__secondlevel-item"> <a class="b-footer-list__secondlevel-link" href="" title="">German</a> </li>
                  </ul>
                  <!--end b-footer-list__secondlevel-->
                </li>
                <!--end b-footer-list__item-->
              </ul>
              <!--end b-footer-list-->
            </div>
            <!--end g-block-->
          </div>
          <!--end g-container-->
          <div class="g-container b-footer-legal">
            <div class="g-block">
              <div class="g-row-wide">
                <ul class="b-footer-legal__list g-col">
                  <li class="b-footer-legal__item"> <a class="b-footer-legal__link" href="#" title="">Trademarks</a> </li>
                  <li class="b-footer-legal__item"> <a class="b-footer-legal__link" href="#" title="">T&C</a> </li>
                  <li class="b-footer-legal__item"> <a class="b-footer-legal__link" href="#" title="">Privacy Policy</a> </li>
                  <li class="b-footer-legal__item"> <a class="b-footer-legal__link" href="#" title="">MTX</a> </li>
                  <li class="b-footer-legal__item"> <a class="b-footer-legal__link" href="#" title="">EULA</a> </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
        <!--end b-2-0-0-footer-->



      </div><!--/.sg-main-->
    </div><!--/.sg-wrapper-->

    <!--[if gt IE 8]><!--><script src="sg-assets/vendor/prism/prism.js"></script><!--<![endif]-->
    <script src="/sg-assets/scripts/sg-scripts.js"></script>

    <script src="/javascript/vendor/jquery.js"></script>
    <script src="/javascript/vendor/jvfloat.min.js"></script>

    <script src="/javascript/monotype.js"></script>


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
