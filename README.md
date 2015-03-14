# Marchesi Simple Parallax
Welcome to the Marchesi-Simple-Parallax wiki by Luis A. Caro Marchesi!

I found myself trying to find an easy to use parallax plug-in that actually worked and it was impossible, I tried around seven plug-ins and I was absolutely disappointed, they all eventually gave errors or didn't even start, so I decided to put and end to this and build one of my own :)


**# Features**

- Responsive ready.
- The animation doesn't execute if the parallax object is out of sight to prevent overhead.
- The animation, if no 'data' parameter is specified, will begin from background position: 100% to 0% starting at the moment it appears on the screen to the moment it has scrolled away completely. The animation is calculated automatically based on the size of the background image and the height of your screen.
- You can animate elements inside of the parallaxObject simply by adding a class to them.
- You can create a perspective effect simply by adding another class that will change the size of the children elements.
- It's open source and you can edit it to your will if you want to tweak it around.

**# Dependencies**

This plug-in needs jQuery to work.

**# Instalation**

Simply include jQuery if you haven't done it yet and the Marchesi parallax plug-in as follows:

`<script src="http://code.jquery.com/jquery-latest.min.js" type="text/javascript"></script>`<br/>
`<script src="js/marchesi.parallax.js" type="text/javascript"></script>`

**# Set up**

With Marchesi parallax there's nothing to initialize and literally no JS code to write... Not even a single line.
Everything works with classes, to convert a div into a parallax object simply give it a 'background-image' property and add a class 'parallaxObject' to it as follows:

`<div id="banner1" class="parallaxObject">`<br/>
     `<h1>Static title of the banner</h1>`<br/>
     `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu neque sollicitudin</p>`<br/>
`</div>`

The code above will make the div "banner1" be a parallax object and will move the background based on the image's height, but if you want to restrict the speed at which it moves just add a data attribute as follows:

`<div id="banner1" class="parallaxObject" data="0.2">`

The data value can be any numeric value including negatives and decimals.

**Animating objects within the parallaxObject**

Simply add the class 'parallaxChild' to any item within the parallaxObject that you want to be animated. You can have animated and non-animated children elements. To correct positioning of the children simply add some 'margin-top' to them. as follows:

`<div id="banner2" class="parallaxObject" data="0.1">`<br/>
`    <div class="content">`<br/>
`    <h1>Static title of the banner</h1>`<br/>
`    <h2 class="parallaxChild" style="margin-top:14%;">Non-static header</h2>`<br/>
`    <p class="parallaxChild">some other text</p>`

The optional attribute 'depth' can be added so that the plug in knows which children elements are "closer" and which are "farther" so they can move at different speeds, just like it would happen in real life. Also, just like the 'data' attribute in the parent parallaxObject, 'depth' can be decimals and negative values:

`<p class="parallaxChild" depth="1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`

**Adding perspective effect**

A perspective option has been created so that children elements will be re-sized (width and height proportionally) based on their specified depth. Simply add the class 'perspective' such as class="parallaxChild perspective". You will need to specify 'depth' to make this option work properly. If the 'perspective' has been added, the property "background-size:cover" will be automatically added to make the perspective effect work:

`<div id="banner3" class="parallaxObject" data="0.5">`<br/>
            `<div class="content">`<br/>
                `<h1>Static title of the banner</h1>`<br/>
                `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu neque sollicitudin, finibus ligula vitae, scelerisque ex. Nullam pulvinar sapien ac ex molestie volutpat.</p>`<br/>
            `</div>`<br/>
            `<div id="img1" class="parallaxChild perspective" depth="3"></div>`<br/>
                `<div id="img2" class="parallaxChild perspective" depth="1"></div>`<br/>
                `<div id="img3" class="parallaxChild perspective" depth="2"></div>`<br/>
`</div>`

Download the plug-in and check the sample page (index.html) inside for preview.

Thanks for sharing.

Luis Caro
