/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _css_Styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _css_Styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_Styles_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_favicon_256_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var _assets_favicon_256_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_favicon_256_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);






//Parse work content
const work = []
_Content__WEBPACK_IMPORTED_MODULE_4__["Work"].forEach(e => {
    let x = `
    <h1>${e.title}</h1>
    <h5><b>${e.subtitle}</b></h5>
    <p>${e.body}</p>
    `
    work.push(x)
})

//Parse projects content
const projects = []
_Content__WEBPACK_IMPORTED_MODULE_4__["Projects"].forEach(e => {
    let x = `
    <h1><a href="${e.href}">${e.title}</a></h1>
    <p>${e.body}</p>
    `
    projects.push(x)
})

//Parse writing content
const writing = []
_Content__WEBPACK_IMPORTED_MODULE_4__["Writing"].forEach(e => {
    let x = `
    <h1><a href="${e.href}">${e.title}</a></h1>
    <p>${e.description}</p>
    `
    writing.push(x)
})

//Parse skills content
const skills = []
_Content__WEBPACK_IMPORTED_MODULE_4__["Skills"].forEach(e => {
    let x = `
    <h1>${e.title}</h1>
    <p>${e.body}</p>
    `
    skills.push(x)
})

//Parse aboutme content
const aboutme = []
_Content__WEBPACK_IMPORTED_MODULE_4__["Aboutme"].forEach(e => {
    let x = `
    <h1>${e.title}</h1>
    <div>${e.body}</div>
    `
    aboutme.push(x)
})

window.togglePicker = () => {
    if(parseInt(document.getElementById('mobilePicker').style.width) > 0){
        Object(_Helpers__WEBPACK_IMPORTED_MODULE_3__["hidePicker"])()
    } else {
        Object(_Helpers__WEBPACK_IMPORTED_MODULE_3__["showPicker"])()
    }
}


document.onreadystatechange = () => {
    switch (document.readyState) {
        case 'loading':
            //
            break;
        case 'interactive':
            Object(_Helpers__WEBPACK_IMPORTED_MODULE_3__["Mount"])(Object(_App_js__WEBPACK_IMPORTED_MODULE_0__["default"])(), 'app')
            Object(_Helpers__WEBPACK_IMPORTED_MODULE_3__["setFavicon"])(_assets_favicon_256_png__WEBPACK_IMPORTED_MODULE_2___default.a)
            Object(_Helpers__WEBPACK_IMPORTED_MODULE_3__["Update"])('mainContent', work.join(' '))
            window.addEventListener('popstate', (e) => {
                e.preventDefault()
                switch (window.location.hash) {
                    case '#work':
                        Object(_Helpers__WEBPACK_IMPORTED_MODULE_3__["hidePicker"])()
                        Object(_Helpers__WEBPACK_IMPORTED_MODULE_3__["updateTitle"])('Work')
                        Object(_Helpers__WEBPACK_IMPORTED_MODULE_3__["Update"])('mainContent', work.join(' '))
                        Object(_Helpers__WEBPACK_IMPORTED_MODULE_3__["toggleClass"])('tab', 'is-active', 'work_')
                        Object(_Helpers__WEBPACK_IMPORTED_MODULE_3__["setMinHeight"])('mainContent', "800px")
                        Object(_Helpers__WEBPACK_IMPORTED_MODULE_3__["smoothScroll"])(document.getElementById('tabs'))
                        break;
                    case '#projects':
                        Object(_Helpers__WEBPACK_IMPORTED_MODULE_3__["hidePicker"])()
                        Object(_Helpers__WEBPACK_IMPORTED_MODULE_3__["updateTitle"])('Projects')
                        Object(_Helpers__WEBPACK_IMPORTED_MODULE_3__["Update"])('mainContent', projects.join(' '))
                        Object(_Helpers__WEBPACK_IMPORTED_MODULE_3__["toggleClass"])('tab', 'is-active', 'projects_')
                        Object(_Helpers__WEBPACK_IMPORTED_MODULE_3__["setMinHeight"])('mainContent', "800px")
                        Object(_Helpers__WEBPACK_IMPORTED_MODULE_3__["smoothScroll"])(document.getElementById('tabs'))
                        break;
                    case '#writing':
                        Object(_Helpers__WEBPACK_IMPORTED_MODULE_3__["hidePicker"])()
                        Object(_Helpers__WEBPACK_IMPORTED_MODULE_3__["updateTitle"])('Writing')
                        Object(_Helpers__WEBPACK_IMPORTED_MODULE_3__["Update"])('mainContent', writing.join(' '))
                        Object(_Helpers__WEBPACK_IMPORTED_MODULE_3__["toggleClass"])('tab', 'is-active', 'writing_')
                        Object(_Helpers__WEBPACK_IMPORTED_MODULE_3__["setMinHeight"])('mainContent', "800px")
                        Object(_Helpers__WEBPACK_IMPORTED_MODULE_3__["smoothScroll"])(document.getElementById('tabs'))
                        break;
                    case '#skills':
                        Object(_Helpers__WEBPACK_IMPORTED_MODULE_3__["hidePicker"])()
                        Object(_Helpers__WEBPACK_IMPORTED_MODULE_3__["updateTitle"])('Skills')
                        Object(_Helpers__WEBPACK_IMPORTED_MODULE_3__["Update"])('mainContent', skills.join(' '))
                        Object(_Helpers__WEBPACK_IMPORTED_MODULE_3__["toggleClass"])('tab', 'is-active', 'skills_')
                        Object(_Helpers__WEBPACK_IMPORTED_MODULE_3__["setMinHeight"])('mainContent', "800px")
                        Object(_Helpers__WEBPACK_IMPORTED_MODULE_3__["smoothScroll"])(document.getElementById('tabs'))
                        break;
                    case '#aboutme':
                        Object(_Helpers__WEBPACK_IMPORTED_MODULE_3__["hidePicker"])()
                        Object(_Helpers__WEBPACK_IMPORTED_MODULE_3__["updateTitle"])('About Me')
                        Object(_Helpers__WEBPACK_IMPORTED_MODULE_3__["Update"])('mainContent', aboutme.join(' '))
                        Object(_Helpers__WEBPACK_IMPORTED_MODULE_3__["toggleClass"])('tab', 'is-active', 'aboutme_')
                        Object(_Helpers__WEBPACK_IMPORTED_MODULE_3__["setMinHeight"])('mainContent', "800px")
                        Object(_Helpers__WEBPACK_IMPORTED_MODULE_3__["smoothScroll"])(document.getElementById('tabs'))
                        break;
                    case '#navigate':
                        
                        break;
                    case '':
                        //
                    default:
                        //
                        break;
                }
            })
            break
        case 'completed':
            //
            break
        default:
            //
            break;
    }
}

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_ProfilePic_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _assets_ProfilePic_jpg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_ProfilePic_jpg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);



const App = (props) => {
    return `
   <div class="mainContainer">
        <div class="topBar">
            <h2>MICHAEL BOUWER</h2>
            <span class="mobileMenu" onClick="togglePicker()">
            <i id="navIcon" class="fa fa-bars"></i>
</span>
        </div>
        <hr>
        <div class="hero">
           <div class="heroImage">
                <img class="profileImg" src="${_assets_ProfilePic_jpg__WEBPACK_IMPORTED_MODULE_0___default.a}" />
            </div>
            <div class="heroCallout">
                <div class="callout">
                    <h2>${_Content__WEBPACK_IMPORTED_MODULE_1__["Title"]}</h2>
                    <p>${_Content__WEBPACK_IMPORTED_MODULE_1__["Hero"]}</p>
                    <span class="links"><p class="links"><a href="https://medium.com/@michaelbouwer">Medium</a> | <a href="https://www.linkedin.com/in/michael-bouwer-922b0163/">LinkedIn</a> | <a href="#aboutme">Get In Touch</a> </p></span>
                    <ul id="mobileLinks" class="mobileLinks">
                        <li><a href="https://medium.com/@michaelbouwer">Medium</a></li>
                        <li><a href="https://www.linkedin.com/in/michael-bouwer-922b0163/">LinkedIn</a></li>
                        <li><a href="#aboutme">Get In Touch</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="tabs" id="tabs">
            <ul>
                <li><a href="#work" id="work_" class="tab is-active">Work</a></li>
                <li><a href="#projects" id="projects_" class="tab">Projects</a></li>
                <li><a href="#writing" id="writing_" class="tab">Writing</a></li>
                <li><a href="#skills" id="skills_" class="tab">Skills</a></li>
                <li><a href="#aboutme" id="aboutme_" class="tab">About Me</a></li>
            </ul>
        </div>
        <div class="mobilePicker" id="mobilePicker">
            <ul>
                <li><a href="#work" id="work_" class="tab is-active">Work</a></li>
                <li><a href="#projects" id="projects_" class="tab">Projects</a></li>
                <li><a href="#writing" id="writing_" class="tab">Writing</a></li>
                <li><a href="#skills" id="skills_" class="tab">Skills</a></li>
                <li><a href="#aboutme" id="aboutme_" class="tab">About Me</a></li>
            </ul>
        </div>
        <div class="mainTitle">
        <h1 id="mainTitle">Work</h1>
        </div>
        <div class="mainContentSection">
            <div class="content" id="mainContent">  
            </div>
        </div>
   </div>
`
}


/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "53db9e4762e8d0167902cc87710f9a12.jpg";

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Work", function() { return Work; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Projects", function() { return Projects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Writing", function() { return Writing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Skills", function() { return Skills; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Aboutme", function() { return Aboutme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hero", function() { return Hero; });
const Work = [
    {
        title: 'Wrapp',
        subtitle: 'May 2017 - Present | Head Of Merchant Product',
        body: ''
    },
    {
        title: 'Mobenzi',
        subtitle: 'January 2017 - May 2017 | Software Project Manager',
        body: ''
    },
    {
        title: 'Groupon South Africa',
        subtitle: 'November 2016 - December 2017 | Head Of Strategy & Planning',
        body: ''
    },
    {
        title: 'Yumbi',
        subtitle: 'October 2015 - November 2017 | Marketing Manager',
        body: ''
    },
    {
        title: 'Groupon Australia',
        subtitle: 'January 2013 - October 2015 | Planning Analyst',
        body: ''
    }
]

const Projects = [
    {
        title: 'simple-transaction-processor',
        href: 'https://github.com/bouwermike/simple-transaction-processor',
        body: `A first attempt at using Node's native event emmitter. 
            The idea was to mock a small part of Wrapp's transactional processing flow, by firing events at each step, with appropriate handlers listening downstream.
            Clone the repo and follow along in a terminal :) <br><br>
            
            <b>Stack Used</b>
            <ul>
                <li> Just plain ol' NodeJS </li>
            </ul>
            `
    },
    {
        title: 'Product-X',
        href: 'https://github.com/go-product-x',
        body: `Product-X is a more mature attempt at mocking a 'transactional-processor' based on a simple event driven architecture.
                I've broken this into a few different services, one to generate dummy transactions, one to handle queueing, and one to handle actual business logic.<br><br>
                The goal of this project was to learn about RabbitMQ, and use PostgresDB's native pub/sub to pass some events about. I also wanted to focus on proper error handling and code commenting.
                Feel free to check out the repos and give me some feedback! I'd welcome comments on my code. (Be gentle, I'm learning!)  <br><br>
                
                <b>Stack Used</b>
                <ul>
                    <li> NodeJS</li>
                    <li> Express</li>
                    <li> RabbitMQ (with AMQPlib for Node)</li>
                    <li> PostgresDB with node-postgres</li>
                </ul>
                `
    },
    {
        title: 'bouwermichael.com',
        href: 'https://github.com/bouwermike/bouwermichael',
        body: `The website you're busy looking at was built with my bare hands, using nothing but plain old vanillaJS - and I mean really vanillaJS, the whole site is created on the fly using JS and HTML template literal strings.
                I'm not super proud of how this site has been built - to be honest, its hacky AF. <br><br>
                But, I wanted to teach myself a few things - specifically how to setup Webpack from scratch, how to use DocumentFragments to store pieces of HTML, and how to handle simple hash routing by listening to "popstate" events.
                <br><br>
                Feel free to check out the repo and judge me ruthlessly. (Full disclosure: I know this is not a good way to build websites.)
                <br><br>
                <b>Stack Used</b>
                <ul>
                    <li> vanillaJS, via transpiled ES7.</li>
                    <li> Webpack</li>
                    <li> NPM scripts for build tasks etc.</li>
                </ul>
                `
    },
    {
        title: 'warpShift',
        href: 'https://github.com/bouwermike/warp-shift',
        body: `This is a little physics game built using SVG and plain old JS. I wanted to learn about mutation observers, and also get my head around some really simple physics.
                I want to come back to this and clean up the code (said every developer ever). The code is kind of all over the place, but the <a href="https://bouwermike.github.io/warp-shift/">game</a> is pretty fun. You can fly around and bounce off of
                a randomly generated landscape of little blocks. You can also teleport!
                <br><br>
                <b>Stack Used</b>
                <ul>
                    <li> vanillaJS, literally. The repo doesn't even have a package.json.</li>
                </ul>
                `
    }
]

const Writing = [
    {
        title: 'There is no low hanging fruit until you’ve found product-market fit',
        href: 'https://medium.com/@michaelbouwer/there-is-no-low-hanging-fruit-until-youve-found-product-market-fit-62483345de9e',
        description: 'An article in which I argue for a distinction between <i>Inception</i> and <i>Optimisation</i>. ' 
    },
    {
        title: 'Where do you actually add value?',
        href: 'https://medium.com/@michaelbouwer/where-do-you-actually-add-value-b2983677e766',
        description: 'An article in which I explore what it is that I am <i>actually</i> good at.' 
    },
    {
        title: 'Groupon South Africa: Lessons From the End of An Era',
        href: 'https://medium.com/@michaelbouwer/groupon-south-africa-lessons-from-the-end-of-an-era-5de4f35f7b79',
        description: 'An article in which I recount the experience of watching a multi-national corporation close up shop around me.' 
    },

]

const Skills = [
    {
        title: 'Medium1',
        body: 'Do pariatur deserunt nulla consequat minim do sint in deserunt exercitation. Laboris amet mollit laborum reprehenderit laborum. Ad sint nostrud excepteur sit aliqua exercitation consectetur irure anim ullamco proident sunt.'
    },
    {
        title: 'Medium2',
        body: 'Esse cillum occaecat non dolore exercitation elit ullamco ipsum exercitation eu duis nulla do. Amet labore fugiat cupidatat ut amet fugiat sit non adipisicing ut. Mollit aliquip sit esse fugiat amet. Exercitation amet nulla voluptate consequat cupidatat nostrud sint tempor exercitation. Magna aliqua tempor proident amet aliqua amet sunt consectetur.'
    }
]


const Aboutme = [
    {
        title: '',
        body: `
        <p>
    Orignally, from Durban, South Africa, I have spent the last few years travelling and working for tech companies, in this order:<br>
    <ul>
        <li>Sydney, Australia</li>
        <li>Back to Durban</li>
        <li>Cape Town, South Africa</li>
        <li>Stockholm, Sweden</li>
        <li>Next?</li>
    </ul>
    <br>On my off days, you'll find me surfing, writing, building hacky apps in NodeJS, and hanging out with my daughter.
    <br><br>I'm currently based in Stockholm, Sweden, heading up the merchant facing product of  <a href="https://www.wrapp.com/">Wrapp</a>.</p>
<br>
<h4>Get in touch</h4>
<p>(+46) 0728419904 </p>
<p><a href="mailto:bouwermichael@gmail.com">bouwermichael@gmail.com</a></p>
<p><a href="https://www.linkedin.com/in/michael-bouwer-922b0163/">LinkedIn</a></p>
`
    }
]

const Title = `Product. Strategy. Storytelling.`

const Hero = `
I am a product & business strategist with experience working for large and small tech companies on three continents.<br><br>
I care about two things: finding product-market fit, and then achieving scale.<br><br>
I've tried to position myself at the interesction of tech, business, and design - equal parts tech nerd, sales jock and UX hipster.
Most of all, I enjoy turning data into executable narrative - breaking down complex problems into simple stories that drive a company towards product-market fit, and ultimately commercial success.`




/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(5);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(7)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans:300|Roboto+Mono:100);", ""]);

// module
exports.push([module.i, "/* Font set up*/\n\nbody, html {\n    font-family: 'Open Sans', sans-serif;\n    color: black;\n    background-color: #ffff;\n}\n\n/* Structure */\n.mainContainer {\n    max-width: 1200px;\n    margin: 0 auto;\n}\n@media screen and (max-width: 680px) {\n    .profileImg {\n       display: none;\n    }\n    .links {\n        display: none;\n    }\n    .tabs ul {\n        display: none;\n    }\n}\n\n@media screen and (min-width: 680px){\n    .mobileLinks {\n        display: none;\n    }\n    .mobileMenu {\n        display: none;\n    }\n    .mainTitle h1 {\n        display: none\n    }\n}\n\n.mobileLinks {\n    list-style: none;\n    padding: 5px;\n}\n\n.mobilePicker {\n    height: 100%; /* 100% Full-height */\n    width: 0; /* 0 width - change this with JavaScript */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Stay on top */\n    top: 0; /* Stay at the top */\n    left: 0;\n    background-color: #111; /* Black*/\n    overflow-x: hidden; /* Disable horizontal scroll */\n    padding-top: 60px; /* Place content 60px from the top */\n    transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */\n}\n\n#navIcon {\n    color: #FF6978\n}\n\n.mobilePicker ul li {\n    list-style: none;\n}\n\n.mobilePicker a {\n    padding: 4px 4px 4px 16px;\n    text-decoration: none;\n    font-size: 20px;\n    color: #818181;\n    display: inline;\n}\n\n/* When you mouse over the navigation links, change their color */\n.mobilePicker a:hover {\n    color: #f1f1f1;\n}\n\n.mobileMenu {\n    padding: 10px;\n    margin: 10px;\n    position: fixed;\n    top: 0;\n    right: 0;\n}\n\n@media screen and (max-height: 450px) {\n    .mobilePicker {padding-top: 15px;}\n    .mobilePicker a {font-size: 18px;}\n}\n\n.no-display {\n    display: none;\n}\n\n.mainTitle {\n    display:flex;\n    justify-content: center;\n}\n.mainTitle h1{\n    text-decoration: underline;\n    padding: 10px;\n    font-size: 30px;\n    margin: 0 5px 0 0; \n    color:#FF6978; \n}\n\n.topBar {\n    display: flex;\n    justify-content: center;\n    font-family: 'Roboto Mono', monospace;\n    line-height: 5px;\n} \n\nhr {\n    border: 0;\n    height: 1px;\n    background: #ccc;\n    background-image: linear-gradient(to right, #ccc, #333, #ccc);\n}\n\n.hero {\n    display: flex;\n    border-radius: 5px;    \n}\n\n.heroImage {\n    display: flex;\n    border-radius: 5px;\n    align-self: center;\n}\n\n.profileImg {\n    border-radius: 200px;\n    padding: 5%\n}\n\n.heroCallout {\n    display: flex;  \n}\n\n.callout {\n    text-align: left; \n    padding: 10%;\n}\n\na {\n    text-decoration: none;\n    color:#FF6978;\n}\na:hover {\n    text-decoration: underline\n} \n\n.links a {\n    text-decoration: none;\n    color:#FF6978;\n    padding: 5px;\n}\n\n .links a:hover {\n    text-decoration: underline\n} \n\n.tabs {\n    display: flex;\n    justify-content: center;\n    padding: 10px;\n}\n\n.tabs ul {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n}\n\n.tabs li {\n    font-size: 30px;\n    display: inline;\n    margin: 0 5px 0 0;  \n}\n\n.tabs li a {\n    padding: 10px;\n    text-decoration: none;\n    color:black;\n    \n}\n\n.tabs a:hover {\n    color: #FF6978;\n} \n\n.tabs a.is-active {\n    color: #FF6978;\n    text-decoration: underline;\n}\n\n.mainContentSection {\n    margin-left: 30px;\n    margin-right: 30px;\n}\n\n#work_:hover {\n    display: none\n}\n#work_:hover::after{\n    content: \"Places I've Worked\";\n}", ""]);

// exports


/***/ }),
/* 6 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(8);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 8 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7124f3c25d1ed2810b2631db921fd63d.png";

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mount", function() { return Mount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Update", function() { return Update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleClass", function() { return toggleClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "smoothScroll", function() { return smoothScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMinHeight", function() { return setMinHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFavicon", function() { return setFavicon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showPicker", function() { return showPicker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hidePicker", function() { return hidePicker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateTitle", function() { return updateTitle; });
//Used to initally mount the document fragment onto the document body
const Mount = (template, element) => {
    let frag = document.createRange().createContextualFragment(template)
    let root = document.getElementById(element)
    root.appendChild(frag)
}

//Used to update a given target node
const Update = (targetNodeID, content) => {
    let node = document.getElementById(targetNodeID)
    node.innerHTML = ''
    let frag = document.createRange().createContextualFragment(content)
    node.appendChild(frag)
}

//Used to easily toggle classes of grouped elements
const toggleClass = (elementClassSelector, elementClassToggle, targetElementID) => {
    let elements = document.getElementsByClassName(elementClassSelector)
    for (const key in elements) {
        if (elements.hasOwnProperty(key)) {
            const element = elements[key];
            if (element.id == targetElementID) {
                element.classList.add(elementClassToggle)
            } else {
                element.classList.remove(elementClassToggle)
            }
        }
    }
}

//Used for smooth scrolling
const smoothScroll = (element) => {
    element.scrollIntoView({
        behavior: 'smooth',
        block: "start",
        inline: "nearest"
    })
}

//Set consistent height to stop jumping back and forth on scroll
const setMinHeight = (id, height) => {
    let el = document.getElementById(id)
    el.style.minHeight = height
}

//Used to dynamically set thee favicon, because reasons
const setFavicon = (source) => {
    let link = document.querySelector("link[rel*='icon']")
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon'; 
    link.href = source;
    document.getElementsByTagName('head')[0].appendChild(link);
}

//Used to control the visibility of the mobile picker
const showPicker = () => {
    let picker = document.getElementById('mobilePicker')
    let navButton = document.getElementById('navIcon')
    picker.style.width = "250px"
    navButton.classList.toggle('fa-bars')
    navButton.classList.toggle('fa-times')
}

const hidePicker = () => {
    let picker = document.getElementById('mobilePicker')
    picker.style.width = "0px"
    let navButton = document.getElementById('navIcon')
    navButton.classList.toggle('fa-bars')
    navButton.classList.toggle('fa-times')
}

//Update title on mobile
const updateTitle = (t) => {
    let title = document.getElementById('mainTitle')
    title.textContent = t
}



/***/ })
/******/ ]);