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
/* harmony import */ var _Helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);





//Parse work content
const work = []
_content__WEBPACK_IMPORTED_MODULE_3__["Work"].forEach(e => {
    let x = `
    <h1>${e.title}</h1>
    <p>${e.body}</p>
    `
    work.push(x)
})

//Parse projects content
const projects = []
_content__WEBPACK_IMPORTED_MODULE_3__["Projects"].forEach(e => {
    let x = `
    <h1>${e.title}</h1>
    <p>${e.body}</p>
    `
    projects.push(x)
})

//Parse projects content
const writing = []
_content__WEBPACK_IMPORTED_MODULE_3__["Writing"].forEach(e => {
    let x = `
    <h1>${e.title}</h1>
    <p>${e.body}</p>
    `
    writing.push(x)
})

//Parse projects content
const aboutme = []
_content__WEBPACK_IMPORTED_MODULE_3__["Aboutme"].forEach(e => {
    let x = `
    <h1>${e.title}</h1>
    <p>${e.body}</p>
    `
    aboutme.push(x)
})

document.onreadystatechange = () => {
    switch (document.readyState) {
        case 'loading':
            //
            break;
        case 'interactive':
            Object(_Helpers__WEBPACK_IMPORTED_MODULE_2__["Mount"])(Object(_App_js__WEBPACK_IMPORTED_MODULE_0__["default"])(), 'app')
            window.addEventListener('popstate', (e) => {
                e.preventDefault()
                switch (window.location.hash) {
                    case '#work':
                        Object(_Helpers__WEBPACK_IMPORTED_MODULE_2__["Update"])('mainContent', work.join(' '))
                        Object(_Helpers__WEBPACK_IMPORTED_MODULE_2__["toggleClass"])('tab', 'is-active', 'work_')
                        Object(_Helpers__WEBPACK_IMPORTED_MODULE_2__["setMinHeight"])('mainContent', "800px")
                        Object(_Helpers__WEBPACK_IMPORTED_MODULE_2__["smoothScroll"])(document.getElementById('tabs'))
                        break;
                    case '#projects':
                        Object(_Helpers__WEBPACK_IMPORTED_MODULE_2__["Update"])('mainContent', projects.join(' '))
                        Object(_Helpers__WEBPACK_IMPORTED_MODULE_2__["toggleClass"])('tab', 'is-active', 'projects_')
                        Object(_Helpers__WEBPACK_IMPORTED_MODULE_2__["setMinHeight"])('mainContent', "800px")
                        Object(_Helpers__WEBPACK_IMPORTED_MODULE_2__["smoothScroll"])(document.getElementById('tabs'))
                        break;
                    case '#writing':
                        Object(_Helpers__WEBPACK_IMPORTED_MODULE_2__["Update"])('mainContent', writing.join(' '))
                        Object(_Helpers__WEBPACK_IMPORTED_MODULE_2__["toggleClass"])('tab', 'is-active', 'writing_')
                        Object(_Helpers__WEBPACK_IMPORTED_MODULE_2__["setMinHeight"])('mainContent', "800px")
                        Object(_Helpers__WEBPACK_IMPORTED_MODULE_2__["smoothScroll"])(document.getElementById('tabs'))
                        break;
                    case '#aboutme':
                        Object(_Helpers__WEBPACK_IMPORTED_MODULE_2__["Update"])('mainContent', aboutme.join(' '))
                        Object(_Helpers__WEBPACK_IMPORTED_MODULE_2__["toggleClass"])('tab', 'is-active', 'aboutme_')
                        Object(_Helpers__WEBPACK_IMPORTED_MODULE_2__["setMinHeight"])('mainContent', "800px")
                        Object(_Helpers__WEBPACK_IMPORTED_MODULE_2__["smoothScroll"])(document.getElementById('tabs'))
                        break;
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
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);



const App = (props) => {
    return `
   <div class="mainContainer">
        <div class="topBar">
            <h2>MICHAEL BOUWER</h2>
        </div>
        <hr>
        <div class="hero">
           <div class="heroImage">
                <img class="profileImg" src="${_assets_ProfilePic_jpg__WEBPACK_IMPORTED_MODULE_0___default.a}" />
            </div>
            <div class="heroCallout">
                <div class="callout">
                    <h2>${_content__WEBPACK_IMPORTED_MODULE_1__["Title"]}</h2>
                    <p>${_content__WEBPACK_IMPORTED_MODULE_1__["Hero"]}</p>
                    <span class="links"><p class="links"><a href="">Medium</a> | <a href="">LinkedIn</a> | <a href="">Email</a> </p></span>
                </div>
            </div>
        </div>
        <div class="tabs" id="tabs">
            <ul>
                <li><a href="#work" id="work_" class="tab">Work</a></li>
                <li><a href="#projects" id="projects_" class="tab">Projects</a></li>
                <li><a href="#writing" id="writing_" class="tab">Writing</a></li>
                <li><a href="#aboutme" id="aboutme_" class="tab">About Me</a></li>
            </ul>
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Aboutme", function() { return Aboutme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hero", function() { return Hero; });
const Work = [
    {
        title: 'Wrapp',
        body: 'Do pariatur deserunt nulla consequat minim do sint in deserunt exercitation. Laboris amet mollit laborum reprehenderit laborum. Ad sint nostrud excepteur sit aliqua exercitation consectetur irure anim ullamco proident sunt.'
    },
    {
        title: 'Mobenzi',
        body: 'Esse cillum occaecat non dolore exercitation elit ullamco ipsum exercitation eu duis nulla do. Amet labore fugiat cupidatat ut amet fugiat sit non adipisicing ut. Mollit aliquip sit esse fugiat amet. Exercitation amet nulla voluptate consequat cupidatat nostrud sint tempor exercitation. Magna aliqua tempor proident amet aliqua amet sunt consectetur.Esse cillum occaecat non dolore exercitation elit ullamco ipsum exercitation eu duis nulla do. Amet labore fugiat cupidatat ut amet fugiat sit non adipisicing ut. Mollit aliquip sit esse fugiat amet. Exercitation amet nulla voluptate consequat cupidatat nostrud sint tempor exercitation. Magna aliqua tempor proident amet aliqua amet sunt consectetur.Esse cillum occaecat non dolore exercitation elit ullamco ipsum exercitation eu duis nulla do. Amet labore fugiat cupidatat ut amet fugiat sit non adipisicing ut. Mollit aliquip sit esse fugiat amet. Exercitation amet nulla voluptate consequat cupidatat nostrud sint tempor exercitation. Magna aliqua tempor proident amet aliqua amet sunt consectetur.Esse cillum occaecat non dolore exercitation elit ullamco ipsum exercitation eu duis nulla do. Amet labore fugiat cupidatat ut amet fugiat sit non adipisicing ut. Mollit aliquip sit esse fugiat amet. Exercitation amet nulla voluptate consequat cupidatat nostrud sint tempor exercitation. Magna aliqua tempor proident amet aliqua amet sunt consectetur.Esse cillum occaecat non dolore exercitation elit ullamco ipsum exercitation eu duis nulla do. Amet labore fugiat cupidatat ut amet fugiat sit non adipisicing ut. Mollit aliquip sit esse fugiat amet. Exercitation amet nulla voluptate consequat cupidatat nostrud sint tempor exercitation. Magna aliqua tempor proident amet aliqua amet sunt consectetur.Esse cillum occaecat non dolore exercitation elit ullamco ipsum exercitation eu duis nulla do. Amet labore fugiat cupidatat ut amet fugiat sit non adipisicing ut. Mollit aliquip sit esse fugiat amet. Exercitation amet nulla voluptate consequat cupidatat nostrud sint tempor exercitation. Magna aliqua tempor proident amet aliqua amet sunt consectetur.Esse cillum occaecat non dolore exercitation elit ullamco ipsum exercitation eu duis nulla do. Amet labore fugiat cupidatat ut amet fugiat sit non adipisicing ut. Mollit aliquip sit esse fugiat amet. Exercitation amet nulla voluptate consequat cupidatat nostrud sint tempor exercitation. Magna aliqua tempor proident amet aliqua amet sunt consectetur.Esse cillum occaecat non dolore exercitation elit ullamco ipsum exercitation eu duis nulla do. Amet labo. '
    }
]

const Projects = [
    {
        title: 'WarpShift',
        body: 'Do pariatur deserunt nulla consequat minim do sint in deserunt exercitation. Laboris amet mollit laborum reprehenderit laborum. Ad sint nostrud excepteur sit aliqua exercitation consectetur irure anim ullamco proident sunt.'
    },
    {
        title: 'ProductX',
        body: 'Esse cillum occaecat non dolore exercitation elit ullamco ipsum exercitation eu duis nulla do. Amet labore fugiat cupidatat ut amet fugiat sit non adipisicing ut. Mollit aliquip sit esse fugiat amet. Exercitation amet nulla voluptate consequat cupidatat nostrud sint tempor exercitation. Magna aliqua tempor proident amet aliqua amet sunt consectetur.'
    }
]

const Writing = [
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
        title: 'About Me',
        body: 'Do pariatur deserunt nulla consequat minim do sint in deserunt exercitation. Laboris amet mollit laborum reprehenderit laborum. Ad sint nostrud excepteur sit aliqua exercitation consectetur irure anim ullamco proident sunt.'
    }
]

const Title = `Product. Strategy. Storytelling.`

const Hero = `I am a product thinker, business strategist, and writer with experience working in fast moving product environments on three continents. I enjoy taking data and turning it into executable narrative, breaking down complex problems into simple stories, and implementing systems and strategies that move an organisation forward.`




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
exports.push([module.i, "/* Font set up*/\n\nbody, html {\n    font-family: 'Open Sans', sans-serif;\n    color: black;\n    background-color: #ffff;\n}\n\n/* Structure */\n.mainContainer {\n    max-width: 1200px;\n    margin: 0 auto;\n}\n@media screen and (max-width: 600px) {\n    .mainContainer {\n        margin: auto;\n    }\n    body {\n        background-color: blueviolet\n    }\n}\n\n.topBar {\n    display: flex;\n    justify-content: center;\n    font-family: 'Roboto Mono', monospace;\n    line-height: 5px;\n} \n\nhr {\n    border: 0;\n    height: 1px;\n    background: #ccc;\n    background-image: linear-gradient(to right, #ccc, #333, #ccc);\n}\n\n.hero {\n    display: flex;\n    border-radius: 5px;    \n}\n\n.heroImage {\n    display: flex;\n    border-radius: 5px;\n}\n.profileImg {\n    border-radius: 200px;\n    padding: 5%\n}\n\n.heroCallout {\n    display: flex;  \n}\n\n.callout {\n    text-align: left; \n    padding: 10%;\n}\n\n\n.links a {\n    text-decoration: none;\n    color:#FF6978;\n    padding: 5px;\n}\n\n .links a:hover {\n    text-decoration: underline\n} \n\n.tabs {\n    display: flex;\n    justify-content: center;\n    padding: 10px;\n}\n\n.tabs ul {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n}\n\n.tabs li {\n    font-size: 30px;\n    display: inline;\n    margin: 0 5px 0 0;  \n}\n\n.tabs li a {\n    padding: 10px;\n    text-decoration: none;\n    color:black;\n    \n}\n\n.tabs a:hover {\n    color: #FF6978;\n} \n\n.tabs a.is-active {\n    color: #FF6978;\n    text-decoration: underline;\n}\n\n", ""]);

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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mount", function() { return Mount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Update", function() { return Update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleClass", function() { return toggleClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "smoothScroll", function() { return smoothScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMinHeight", function() { return setMinHeight; });
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



/***/ })
/******/ ]);