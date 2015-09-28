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
          <ul class="sg-navlist" style="display:block;">
            <li><a href="./home.php">Home</a></li>
            <li><a style="color: #222;" href="./overview.php">Overview</a></li>
            <li><a href="./article.php">Article</a></li>
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


          <section class="b-head">

            <header class="b-1-0-0-header g-container">
              <div class="g-block">
                <div class="g-row">
                  <div class="g-col">
                    <div class="b-navigation">
                      <h1 class="b-logo">
                        <a class="b-logo__link" href="http://prototype.mon.ia.net" title="Home">Monotype</a><!--end b-logo__link-->
                      </h1><!--end b-logo-->
                      <nav class="b-navigation__nav">
                        <a aria-hidden="true" class="nav-toggle" href="#">Menu</a>
                        <ul style="position: relative;" aria-hidden="false" class="b-navigation__list nav-collapse nav-collapse-0 closed">

                          <!--Search-->
                          <li class="b-navigation__item b-navigation__item--search">
                            <form action="/search-result?" class="b-mobile-search">
                              <div class="b-mobile-search__input-wrapper">
                                <input class="b-mobile-search__input" placeholder="Search" type="text">
                              </div>
                              <div class="b-mobile-search__submit-wrapper">
                                <input class="b-mobile-search__submit" title="" value="Search" type="submit">
                              </div>
                            </form><!--end b-mobile-search-form-->
                          </li>

                          <li class="b-navigation__item">
                            <a class="b-navigation__link" href="http://prototype.mon.ia.net/typefaces" title="Fonts">Fonts</a>
                          </li>
                          <li class="b-navigation__item b-navigation__item--selected">
                            <a class="b-navigation__link" href="http://prototype.mon.ia.net/technology" title="Technology">Technology</a>
                          </li>
                          <li class="b-navigation__item">
                            <a class="b-navigation__link" href="http://prototype.mon.ia.net/expertise" title="Expertise">Expertise</a>
                          </li>
                          <li class="b-navigation__item">
                            <a class="b-navigation__link" href="http://prototype.mon.ia.net/company" title="Company">Company</a>
                          </li>


                        </ul><!--end b-navigation__list-->
                        <ul class="b-navigation__breadcrumb">


                          <li class="b-navigation__breadcrumb__item b-navigation__breadcrumb__item--selected">
                            <h2><a class="b-navigation__breadcrumb__item__link" href="http://prototype.mon.ia.net/technology" title="Technology">Technology</a></h2>
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
        <section class="b-3-2-0-intro-search b-3-2-0-intro-search--interaction g-container b-3-2-0-intro-search--interaction-fullwidth">
          <div class="b-lead g-block">
            <div class="g-row">
              <div class="b-lead__text g-col">
                <p>Search Monotype:</p>
              </div><!--b-lead__text-->
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

        </section><!--end b-3-2-0-intro-search-->
        <section class="b-3-4-1-intro-full-width-background g-container" style="background-image:url('http://prototype.mon.ia.net/content/containers/intro-tech/monotype-technology_v2.png')">

          <div class="b-lead g-block">
            <div class="g-row">
              <div class="b-lead__text g-col">
                <p>Powered by our technologies and engineers, type looks as sharp in pixels as it does on paper</p>    </div><!--b-lead__text-->
              </div><!--end g-row-->
            </div><!--end b-lead-->

          </section><!--end b-3-4-1-intro-full-width-background-->
        </section><!--end b-head-->
        <section class="b-main">

          <section class="b-4-0-0-paragraph g-container">


            <div class="b-paragraph g-block">
              <div class="g-row">
                <div class="b-paragraph__text g-col">
                  <p>You probably don’t need us to tell you, but the average adult in developed societies spends upward of six hours a day looking at screens – TVs, computers, smartphones and tablets. As the choice of what to watch widens, we become increasingly picky. We demand more perfect experiences from our devices, all the time. Text plays an undeniable role in these experiences. </p>
                  <p>Monotype has developed advanced software to render, scale, optimize and display type as vividly as ink on paper, on any device. Effortlessly, too: we design our software and tools with speed and memory efficiency top of mind. Slow type is no type. Our core technologies offer engineers total control over type, so they can deliver great-looking text effortlessly, internationally, on any device.</p>
                </div><!--end g-col-->
              </div><!--end g-row-->
            </div><!--end b-paragraph-->
          </section><!--end b-4-0-0-paragraph-->
          <section class="b-5-1-0-teaser-group g-container">

            <div class="b-title g-block">
              <div class="g-row">
                <h2 class="b-title__text g-col">With our software, you push the buttons</h2><!--end b-title__text-->
              </div><!--end g-row-->
            </div><!--end b-title-->

            <div class="b-hover-list b-hover-list--teaser g-block">
              <div class="g-row">
                <ul class="b-hover-list__list b-hover-list__list--teaser b-hover-list__list--tabs g-col" role="tablist">


                  <li class="b-hover-list__item b-hover-list__item--selected" role="tab" aria-selected="true">
                    <a class="b-hover-list__link" title="">Legibility</a>
                  </li>
                  <li class="b-hover-list__item" role="tab">
                    <a class="b-hover-list__link" title="">Memory and efficiency</a>
                  </li>
                  <li class="b-hover-list__item" role="tab">
                    <a class="b-hover-list__link" title="">Language control</a>
                  </li>

                </ul><!--end b-hover-list__list-->
              </div><!--end g-row-->
            </div><!--end b-hover-list-->
            <div class="b-tab-content b-tab-content--teaser">

              <div class="b-tab-content__item b-tab-content__item--selected" role="tabpanel" aria-selected="true">
                <div class="b-media g-block">
                  <figure class="b-media__image">
                    <div class="g-row">
                      <div class="g-col">
                        <img src="http://prototype.mon.ia.net/content/containers/teaser-technology/1-font-rendering/mt_technology_legibility_teaser.png" alt="">
                      </div><!--end g-col-->
                    </div><!--end g-row-->
                  </figure><!--end b-media__image-->
                </div><!--end b-media-->
                <div class="b-paragraph g-block">
                  <div class="g-row">
                    <div class="b-paragraph__text g-col">
                      <p>The better your rasterizer, the more legible your text. And they don’t come better than our iType® font engine. By instantaneously placing the outline descriptions of characters on a pixel grid and intelligently painting the underlying pixels in black and grey values, we deliver pin-sharp text to smartphones, eReaders, TVs, cameras – every kind of digital display. Engineers have more say over how text looks, too, with iType tuning and hinting controls, and OpenType features that aren’t available with other rasterizers. Learn more about <a href="http://prototype.mon.ia.net/technology/font-rendering">legibility controls</a>.</p>    </div><!--end g-col-->
                    </div><!--end g-row-->
                  </div><!--end b-paragraph-->



                </div><!--end b-tab-content__item-->
                <div class="b-tab-content__item" role="tabpanel">
                  <div class="b-media g-block">
                    <figure class="b-media__image">
                      <div class="g-row">
                        <div class="g-col">
                          <img src="http://prototype.mon.ia.net/content/containers/teaser-technology/2-memory-efficien/monotype_technology_memory-efficiency_teaser.png" alt="">
                        </div><!--end g-col-->
                      </div><!--end g-row-->
                    </figure><!--end b-media__image-->
                  </div><!--end b-media-->
                  <div class="b-paragraph g-block">
                    <div class="g-row">
                      <div class="b-paragraph__text g-col">
                        <p>It takes time to read text. But that doesn’t stop us wanting it on our screens instantly. The Monotype  iType® font engine lets you deliver great-looking text without any delay or knock-on effect on speed or features. Taking up minimal space, iType is ideal for even the smallest devices.  Engineers can utilize memory controls not offered by free rasterizers, including full-quality scalable fonts with a run-time RAM footprint as small as an itty-bitty 20kb. Learn more about <a href="http://prototype.mon.ia.net/technology/memory-efficiency">memory and efficiency controls</a>.</p>
                      </div><!--end g-col-->
                    </div><!--end g-row-->
                  </div><!--end b-paragraph-->



                </div><!--end b-tab-content__item-->
                <div class="b-tab-content__item" role="tabpanel">
                  <div class="b-media g-block">
                    <figure class="b-media__image">
                      <div class="g-row">
                        <div class="g-col">
                          <img src="http://prototype.mon.ia.net/content/containers/teaser-technology/3-language-control/technology_language-control-teaser.png" alt="">
                        </div><!--end g-col-->
                      </div><!--end g-row-->
                    </figure><!--end b-media__image-->
                  </div><!--end b-media-->
                  <div class="b-paragraph g-block">
                    <div class="g-row">
                      <div class="b-paragraph__text g-col">
                        <p>When you take your products into new markets and cultures, they need to fit right in with customers. That includes the text they see on screen. Monotype has some smart solutions for delivering non-Latin text to the screen seamlessly, such as tools for shaping and rendering Indic characters more efficiently. And on devices that require multiple languages, we can help you combine and manage the vast character sets of Chinese, Japanese and Korean in just one file. Learn more about <a href="http://prototype.mon.ia.net/technology/language-control">language controls</a>.</p>    </div><!--end g-col-->
                      </div><!--end g-row-->
                    </div><!--end b-paragraph-->



                  </div><!--end b-tab-content__item-->

                </div><!--end b-tab-content-->

              </section><!--end b-5-1-0-teaser-group-->

            </section><!--end b-main-->
            <section class="b-related">

              <section class="b-6-0-0-list-links g-container">

                <div class="b-title g-block">
                  <div class="g-row">
                    <h2 class="b-title__text g-col">Other Technologies</h2><!--end b-title__text-->
                  </div><!--end g-row-->
                </div><!--end b-title-->

                <div class="b-subtitle g-block">
                  <div class="g-row">
                    <div class="b-subtitle__text g-col">
                      <p>Specific needs – Specific solutions</p>
                    </div><!--end b-subtitle__text-->
                  </div><!--end g-row-->
                </div><!--end b-subtitle-->

                <div class="b-item-list  b-item-list--links g-block">
                  <div class="g-row">
                    <ul class="b-item-list__list g-col">

                      <li class="b-item-list__item">
                        <header class="b-item-list__item-header">
                          <a class="b-item-list__item-title" href="http://www.monotype.com/services/font-design/web-fonts/web-font-platform/" title="Web Font Platform: Easy API to integrate web fonts into your HTML design tool">Web Font Platform: Easy API to integrate web fonts into your HTML design tool</a>
                        </header><!-- b-item-list__item-header -->


                        <nav class="b-item-list__item-meta b-item-list__item-meta--breadcrumb">
                          <ul>
                            <li>Monotype</li>
                            <li>Technology</li>
                            <li>Web Font Platform</li>
                          </ul>
                        </nav><!--b-item-list__item-meta-->

                      </li><!--end b-item-list__item-->
                      <li class="b-item-list__item">
                        <header class="b-item-list__item-header">
                          <a class="b-item-list__item-title" href="http://prototype.mon.ia.net/fonts-for-android" title="Fonts for Android">Fonts for Android</a>
                        </header><!-- b-item-list__item-header -->


                        <nav class="b-item-list__item-meta b-item-list__item-meta--breadcrumb">
                          <ul>
                            <li>Monotype</li>
                            <li>Technology</li>
                            <li>Fonts for Android</li>
                          </ul>
                        </nav><!--b-item-list__item-meta-->

                      </li><!--end b-item-list__item-->
                      <li class="b-item-list__item">
                        <header class="b-item-list__item-header">
                          <a class="b-item-list__item-title" href="http://prototype.mon.ia.net/microsoft-fonts" title="Microsoft Fonts">Microsoft Fonts</a>
                        </header><!-- b-item-list__item-header -->


                        <nav class="b-item-list__item-meta b-item-list__item-meta--breadcrumb">
                          <ul>
                            <li>Monotype</li>
                            <li>Technology</li>
                            <li>Microsoft Fonts</li>
                          </ul>
                        </nav><!--b-item-list__item-meta-->

                      </li><!--end b-item-list__item-->

                    </ul><!--end b-item-list-->
                  </div><!--end g-row-->
                </div><!--b-item-list-->

              </section><!--end b-6-0-0-list-links-->

              <section class="b-5-0-0-teaser g-container">

                <div class="b-title g-block">
                  <div class="g-row">
                    <h2 class="b-title__text g-col">Find your way around</h2><!--end b-title__text-->
                  </div><!--end g-row-->
                </div><!--end b-title-->

                <div class="b-subtitle g-block">
                  <div class="g-row">
                    <div class="b-subtitle__text g-col">
                      <p>Mapping Enhancement SDK</p>
                    </div><!--end b-subtitle__text-->
                  </div><!--end g-row-->
                </div><!--end b-subtitle-->

                <div class="b-media g-block">
                  <figure class="b-media__image">
                    <div class="g-row">
                      <div class="g-col">
                        <img src="http://prototype.mon.ia.net/content/containers/teaser-mapping-enhancement/container-images_mapping.png" alt="">
                      </div><!--end g-col-->
                    </div><!--end g-row-->
                  </figure><!--end b-media__image-->
                </div><!--end b-media-->
                <div class="b-paragraph g-block">
                  <div class="g-row">
                    <div class="b-paragraph__text g-col">
                      <p>The SDK provides access to a new range of capabilities for GPU-enabled platforms. The kit provides a range of advanced text functions for mapping systems. <a href="http://prototype.mon.ia.net/technology/mapping-enhancement-sdk">Learn more about Monotype’s Mapping Enhancement SDK</a></p>
                    </div><!--end g-col-->
                  </div><!--end g-row-->
                </div><!--end b-paragraph-->




              </section><!--end b-5-0-0-teaser-->
              <section class="b-12-0-0-contact-form b-12-0-0-contact-form--sent g-container">

                <div class="b-title g-block">
                  <div class="g-row">
                    <h2 class="b-title__text g-col">Get in touch</h2><!--end b-title__text-->
                  </div><!--end g-row-->
                </div><!--end b-title-->


                <div class="b-subtitle g-block">
                  <div class="g-row">
                    <div class="b-subtitle__text g-col">
                      <p>We’ll get back at you in ~1 day</p>
                    </div><!--end b-subtitle__text-->
                  </div><!--end g-row-->
                </div><!--end b-subtitle-->


                <div class="b-form b-form--contact">
                  <form action="#" method="GET" class="b-form__form">
                    <div class="g-block">
                      <div class="g-row-wide">
                        <div class="b-form__canvas g-col initial">
                          <div class="b-form__table b-form__table--contact">
                            <div class="b-form__table-row">
                              <div class="b-form__table-cell">
                                <textarea placeholder="Enter your message here…" class="b-form__input b-form__input--textarea"></textarea>
                              </div><!--end b-form__table-cell-->
                              <div class="b-form__table-cell">
                                <div class="jvFloat">
                                  <label class="placeHolder" for="ua8c">First Name</label>
                                  <input id="ua8c" placeholder="First Name" class="b-form__input g-floatlabel" type="text">
                                </div>
                                <div class="jvFloat">
                                  <label class="placeHolder" for="wkx5">Last Name</label>
                                  <input id="wkx5" placeholder="Last Name" class="b-form__input g-floatlabel" type="text">
                                </div>
                                <div class="jvFloat">
                                  <label class="placeHolder" for="w26e">Email</label>
                                  <input id="w26e" placeholder="Email" class="b-form__input g-floatlabel" type="email">
                                </div>
                                <div class="jvFloat">
                                  <label class="placeHolder" for="jzjz">Organisation</label>
                                  <input id="jzjz" placeholder="Organisation" class="b-form__input g-floatlabel" type="text">
                                </div>
                                <div class="jvFloat">
                                  <label class="placeHolder" for="cb1s">Country</label>

                                  <select id="cb1s" class="b-form__select g-floatlabel" placeholder="Country">
                                    <option value="" class="b-form__select-item--disabled" disabled="" selected="">Country</option>
                                    <option value="1">Austria</option>
                                    <option value="2">France</option>
                                    <option value="3">Germany</option>
                                    <option value="4">Switzerland</option>
                                  </select>
                                </div><!--end b-form__select-->
                                <div class="jvFloat">
                                  <label class="placeHolder" for="muw5">Area of Business</label>

                                  <select id="muw5" class="b-form__select g-floatlabel" placeholder="Area of Business">
                                    <option value="" class="b-form__select-item--disabled" disabled="" selected="">Area of Business</option>
                                    <option value="1">Architecture</option>
                                    <option value="2">Design</option>
                                    <option value="3">IT</option>
                                    <option value="3">Marketing</option>
                                  </select>
                                </div>
                              </div><!--b-form__table-cell-->
                            </div><!--end b-form__table-row-->
                          </div><!--end b-form__table-->
                          <div class="b-form-sent-image"><!--Output After Server Side Processing, hidden by default-->
                            <img class="b-form-sent-image__image" src="/images/message-sent.png" alt="" title="">
                          </div><!--end b-form-sent-image-->
                        </div><!--end b-form__canvas-->
                      </div><!--end g-row-wide-->
                    </div><!--end g-block-->
                    <div class="b-error-message b-error-message--contact g-block"><!--This is a server side error message and is hidden by default-->
                      <div class="g-row-wide">
                        <div class="g-col">
                          <div class="b-error-message__output">
                            Message couldn’t be sent. Please try again. [Server Side Message]
                          </div>
                        </div><!--end g-col-->
                      </div><!--end g-row-->
                    </div><!--end b-error-message-->
                    <div class="b-button g-block">
                      <div class="g-row">
                        <div class="g-col">
                          <input class="b-button__item b-button__item--container" value="Send Message" disabled="" type="submit">
                        </div><!--end g-col-->
                      </div><!--end g-row-->
                    </div><!--end b-button-->
                  </form><!--b-download-form__form-->
                </div><!--end b-form-->




              </section><!--end b-12-0-0-contact-form-->

            </section><!--end b-related-->
            <section class="b-foot">

              <footer class="b-2-0-0-footer">

                <div class="g-container b-footer-list">
                  <div class="g-block">
                    <ul class="b-footer-list__list g-row-wide">

                      <li class="b-footer-list__item g-col-2-3">
                        <a class="b-footer-list__link" href="http://prototype.mon.ia.net" title="Home">Monotype Inc.</a>
                        <ul class="b-footer-list__secondlevel">
                          <li class="b-footer-list__secondlevel-item"><p>Copyright 2015</p></li>
                        </ul><!--end b-footer-list__secondlevel-->
                      </li><!--end b-footer-list__item-->

                      <li class="b-footer-list__item g-col-2-3">
                        <a class="b-footer-list__link" href="http://prototype.mon.ia.net/typefaces" title="Fonts">Fonts</a>
                        <ul class="b-footer-list__secondlevel">

                          <li class="b-footer-list__secondlevel-item">
                            <a class="b-footer-list__secondlevel-link" href="http://prototype.mon.ia.net/typefaces/fonts-for-print" title="Fonts for Print">Fonts for Print</a>
                          </li>
                          <li class="b-footer-list__secondlevel-item">
                            <a class="b-footer-list__secondlevel-link" href="http://prototype.mon.ia.net/typefaces/web-fonts" title="Web Fonts">Web Fonts</a>
                          </li>
                          <li class="b-footer-list__secondlevel-item">
                            <a class="b-footer-list__secondlevel-link" href="http://prototype.mon.ia.net/typefaces/fonts-for-games" title="Fonts for Games">Fonts for Games</a>
                          </li>
                          <li class="b-footer-list__secondlevel-item">
                            <a class="b-footer-list__secondlevel-link" href="http://prototype.mon.ia.net/typefaces/fonts-for-apps" title="Fonts for Apps">Fonts for Apps</a>
                          </li>
                          <li class="b-footer-list__secondlevel-item">
                            <a class="b-footer-list__secondlevel-link" href="http://prototype.mon.ia.net/typefaces/fonts-for-cars" title="Fonts for Cars">Fonts for Cars</a>
                          </li>
                          <li class="b-footer-list__secondlevel-item">
                            <a class="b-footer-list__secondlevel-link" href="http://prototype.mon.ia.net/typefaces/custom-fonts" title="Custom Fonts">Custom Fonts</a>
                          </li>

                        </ul><!--end b-footer-list__secondlevel-->
                      </li><!--end b-footer-list__item-->
                      <li class="b-footer-list__item g-col-2-3">
                        <a class="b-footer-list__link" href="http://prototype.mon.ia.net/technology" title="Technology">Technology</a>
                        <ul class="b-footer-list__secondlevel">

                          <li class="b-footer-list__secondlevel-item">
                            <a class="b-footer-list__secondlevel-link" href="http://prototype.mon.ia.net/technology/font-rendering" title="Legibility">Legibility</a>
                          </li>
                          <li class="b-footer-list__secondlevel-item">
                            <a class="b-footer-list__secondlevel-link" href="http://prototype.mon.ia.net/technology/memory-efficiency" title="Memory Efficiency">Memory Efficiency</a>
                          </li>
                          <li class="b-footer-list__secondlevel-item">
                            <a class="b-footer-list__secondlevel-link" href="http://prototype.mon.ia.net/technology/language-control" title="Language Control">Language Control</a>
                          </li>

                        </ul><!--end b-footer-list__secondlevel-->
                      </li><!--end b-footer-list__item-->
                      <li class="b-footer-list__item g-col-2-3">
                        <a class="b-footer-list__link" href="http://prototype.mon.ia.net/expertise" title="Expertise">Expertise</a>
                        <ul class="b-footer-list__secondlevel">


                        </ul><!--end b-footer-list__secondlevel-->
                      </li><!--end b-footer-list__item-->
                      <li class="b-footer-list__item g-col-2-3">
                        <a class="b-footer-list__link" href="http://prototype.mon.ia.net/company" title="Company">Company</a>
                        <ul class="b-footer-list__secondlevel">

                          <li class="b-footer-list__secondlevel-item">
                            <a class="b-footer-list__secondlevel-link" href="http://prototype.mon.ia.net/company/business" title="Business">Business</a>
                          </li>
                          <li class="b-footer-list__secondlevel-item">
                            <a class="b-footer-list__secondlevel-link" href="http://prototype.mon.ia.net/company/news-and-events" title="News and Events">News and Events</a>
                          </li>
                          <li class="b-footer-list__secondlevel-item">
                            <a class="b-footer-list__secondlevel-link" href="http://prototype.mon.ia.net/company/careers" title="Careers">Careers</a>
                          </li>
                          <li class="b-footer-list__secondlevel-item">
                            <a class="b-footer-list__secondlevel-link" href="http://prototype.mon.ia.net/company/contac" title="Contact">Contact</a>
                          </li>

                        </ul><!--end b-footer-list__secondlevel-->
                      </li><!--end b-footer-list__item-->

                      <li class="b-footer-list__item b-footer-list__item--legal g-col-2-3">
                        <a class="b-footer-list__link" href="" title="">Legal</a>
                        <ul class="b-footer-list__secondlevel">
                          <li class="b-footer-list__secondlevel-item">
                            <a class="b-footer-list__secondlevel-link" href="#" title="">Trademark</a>
                          </li>
                          <li class="b-footer-list__secondlevel-item">
                            <a class="b-footer-list__secondlevel-link" href="#" title="">T&amp;C</a>
                          </li>
                          <li class="b-footer-list__secondlevel-item">
                            <a class="b-footer-list__secondlevel-link" href="#" title="">Privacy Policy</a>
                          </li>
                          <li class="b-footer-list__secondlevel-item">
                            <a class="b-footer-list__secondlevel-link" href="#" title="">MTX</a>
                          </li>
                          <li class="b-footer-list__secondlevel-item">
                            <a class="b-footer-list__secondlevel-link" href="#" title="">EULA</a>
                          </li>
                        </ul><!--end b-footer-list__secondlevel-->
                      </li><!--end b-footer-list__item-->

                      <li class="b-footer-list__item b-footer-list__item--language g-col-2-3">
                        <a class="b-footer-list__link" href="" title="">Language</a>
                        <ul class="b-footer-list__secondlevel">
                          <li class="b-footer-list__secondlevel-item b-footer-list__secondlevel-item--selected">
                            <a class="b-footer-list__secondlevel-link" href="" title="">English</a>
                          </li>
                          <li class="b-footer-list__secondlevel-item">
                            <a class="b-footer-list__secondlevel-link" href="" title="">German</a>
                          </li>
                        </ul><!--end b-footer-list__secondlevel-->
                      </li><!--end b-footer-list__item-->

                    </ul><!--end b-footer-list-->
                  </div><!--end g-block-->
                </div><!--end g-container-->

                <div class="g-container b-footer-legal">
                  <div class="g-block">
                    <div class="g-row-wide">
                      <ul class="b-footer-legal__list g-col">
                        <li class="b-footer-legal__item">
                          <a class="b-footer-legal__link" href="#" title="">Trademarks</a>
                        </li>
                        <li class="b-footer-legal__item">
                          <a class="b-footer-legal__link" href="#" title="">T&amp;C</a>
                        </li>
                        <li class="b-footer-legal__item">
                          <a class="b-footer-legal__link" href="#" title="">Privacy Policy</a>
                        </li>
                        <li class="b-footer-legal__item">
                          <a class="b-footer-legal__link" href="#" title="">MTX</a>
                        </li>
                        <li class="b-footer-legal__item">
                          <a class="b-footer-legal__link" href="#" title="">EULA</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </footer><!--end b-2-0-0-footer-->

            </section><!--end b-foot-->

          </div><!--/.sg-container-->
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
