<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Ocean World</title>
    <script src="https://kit.fontawesome.com/bd1924c9a2.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="css/style-index.css">
    <link rel="stylesheet" href="css/hover.css">
    <link rel="shortcut icon" type="image/png" href="images/favicon.png" />
</head>

<body>


    <!--===================== HTML Body =====================-->
    <!-- Side-bar insert -->
    <span id="java-sidebar-slot"></span>

    <!-- Wrapper -->
    <div id="wrapper">

        <!-- Logo -->
        <a href="index.html" id="logo"><img src="images/logo.png" alt="Ocean World" class="hvr-float"></a>

        <!-- Header/Hamburger Button Insert-->
        <span id="Header-to-Hamburger-slot"></span>

        <!-- Slideshow -->
        <section id="slider">
            <div class="slide current">
                <div class="content">
                    <h1>Climate Change</h1>
                    <p>Here, you can learn about climate change&mdash;the global issue that that
                        many people don't
                        know
                        a
                        lot about.</p>
                    <br />
                    <a href="html/description.html">Learn more</a>
                </div>
            </div>
            <div class="slide">
                <div class="content">
                    <h1>See the Results</h1>
                    <p>Here, you can find data about the results climate change has had on our globe and it's water
                        level.</p>
                    <br />
                    <a href="html/visualization.html">Learn more</a>
                </div>
            </div>
            <div class="slide">
                <div class="content">
                    <h1>About Us</h1>
                    <p>We're a small work group from the IUPUI School of Informatics. Here, you can learn a little more
                        about us.</p>
                    <br />
                    <a href="html/about.html">Learn more</a>
                </div>
            </div>
        </section>
        <button id="prev" class="btn-slider"><i class="fas fa-arrow-left"></i></button>
        <button id="next" class="btn-slider"><i class="fas fa-arrow-right"></i></button>


        <!-- Footer Insert -->
        <span id="java-footer-slot"></span>

    </div>
    <!-- Wrapper ends-->


    <!--===================== Inserts =====================-->

    <span id="filler"></span>

    <!-- Footer -->
    <script type="text/html" id="java-footer">
        <section id="footer">
            <table>
                <ul>
                    <li id="disclaimer">Contact us through email.  Created for IUPUI 2019 &copy;</li>
                    <li>
                        <a href="mailto:bushcom@iu.edu">
                            <span id="colin" class="foot-item">
                                <span class="tooltip">Colin</span>
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:cah1@iu.edu">
                            <span id="clark" class="foot-item">
                                <span class="tooltip">Clark</span>
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:gmbeckha@iu.edu">
                            <span id="griffin" class="foot-item">
                                <span class="tooltip">Griffin</span>
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:nsurvanc@iu.edu">
                            <span id="nathan" class="foot-item">
                                <span class="tooltip">Nathan</span>
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:">
                            <span id="james" class="foot-item">
                                <span class="tooltip">James</span>
                            </span>
                        </a>
                    </li>
                </ul>
            </table>
        </section>
    </script>

    <!-- Hamburger Button -->
    <script type="text/html" id="java-hamburger">
        <button type="button" id="toggle-collapse" onClick="toggleSidebar()" class="hvr-grow">
            <ul id="toggle-icon">
                <li><span class="toggle-bar"></span></li>
                <li><span class="toggle-bar"></span></li>
                <li><span class="toggle-bar"></span></li>
            </ul>
        </button>
    </script>

    <!-- Header -->
    <script type="text/html" id="java-header">
        <section id="header">
            <ul>
                <li class="item hvr-float" id="description"><a href="html/description.html">Description</a></li>
                <li class="item hvr-float" id="visualization"><a href="html/visualization.html">Visualization</a></li>
                <li class="item hvr-float" id="About"><a href="html/about.html">About Us</a></li>
            </ul>
        </section>
    </script>

    <!-- Side Bar -->
    <script type="text/html" id="java-sidebar">
        <div ID="sidebar">
            <!-- Side Menu -->
            <ul ID="side-menu">
                <li class="item"><a href="html/description.html">Description</a></li>
                <li class="item"><a href="html/visualization.html">Visualization</a></li>
                <li class="item"><a href="html/about.html">About Us</a></li>
            </ul>

            <!-- Side Footer -->
            <ul ID="side-footer">
                <li>
                    <a href="mailto:bushcom@iu.edu">
                        <span id="colin-s" class="foot-item">
                            <span class="tooltip">Colin</span>
                        </span>
                    </a>
                </li>
                <li>
                    <a href="mailto:cah1@iu.edu">
                        <span id="clark-s" class="foot-item">
                            <span class="tooltip">Clark</span>
                        </span>
                    </a>
                </li>
                <li>
                    <a href="mailto:gmbeckha@iu.edu">
                        <span id="griffin-s" class="foot-item">
                            <span class="tooltip">Griffin</span>
                        </span>
                    </a>
                </li>
                <li><span id="filler"></span></li>
                <li>
                    <a href="mailto:nsurvanc@iu.edu">
                        <span id="nathan-s" class="foot-item">
                            <span class="tooltip">Nathan</span>
                        </span>
                    </a>
                </li>
                <li>
                    <a href="mailto:">
                        <span id="james-s" class="foot-item">
                            <span class="tooltip">James</span>
                        </span>
                    </a>
                </li>
                <li id="disclaimer-s">Contact us through email.  Created for IUPUI 2019 &copy;</li>
            </ul>
        </div>
    </script>


    <!--===================== JavaScript =====================-->
    <script src="javascript/slidershow.js"></script>
    <script src="javascript/sidebar-index.js"></script>

</body>

</html>