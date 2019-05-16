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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class DOMNodeCollection {\n    constructor(HTMLelements) {\n        this.elements = HTMLelements;\n    }\n\n    html(string){\n        if (string === undefined) {\n            return this.elements[0].innerHTML;\n        } else {\n            this.elements.forEach( ele => {\n                ele.innerHTML = string;\n            });\n        }\n    }\n\n    empty() {\n        this.html('');\n    }\n\n    append(arg) {\n        const that = this;\n        if (arg instanceof DOMNodeCollection) {\n            arg.forEach( el => {\n                that.html(that.html() + el.outerHTML);\n            });\n        } else if (arg instanceof HTMLElement) {\n            that.html(that.html() + arg.outerHTML);\n        } else {\n            that.html(that.html() + arg);\n        }\n    }\n\n    attr(attribute, value) {\n        if(value){\n            this.elements.forEach( ele => {\n                ele.setAttribute(attribute, value);\n            });\n        } else {\n            return this.elements[0].getAttribute(attribute);\n        }\n        \n    }\n\n    addClass(newClass) {\n        // const that = this;\n        this.elements.forEach( el => {\n            el.setAttribute(\"class\", newClass);\n        });\n    }\n\n    removeClass(className) {\n        this.elements.forEach( el => {\n            if(el.getAttribute(\"class\") === className ){\n               el.removeAttribute(\"class\");\n            }\n        });\n    }\n\n    children() {\n        let arr = [];\n        this.elements.forEach(ele => {\n           arr = arr.concat(Array.from(ele.children));\n        });\n        return new DOMNodeCollection(arr);\n    }\n\n    parent() {\n        let arr = [];\n        this.elements.forEach(ele => {\n            if (!arr.includes(ele.parentNode)) arr.push(ele.parentNode);\n        });\n        return new DOMNodeCollection(arr);\n    }\n\n    find(selector) {\n        let found = this.elements[0].querySelectorAll(selector);\n\n        return new DOMNodeCollection(found);\n    }\n\n    remove() {\n        this.elements.forEach( el => {\n            el.parentNode.removeChild(el);\n        });\n    }\n\n    on(eventType, listener) {\n        this.elements.forEach( el =>  {\n            el.addEventListener(eventType, listener);\n        });\n    }\n\n    off(eventType, listener) {\n        this.elements.forEach( el => {\n            el.removeEventListener(eventType, listener);\n        });\n    }\n}\n\n\nmodule.exports =  DOMNodeCollection;\n\n\n\n\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const DOMNodeCollection = __webpack_require__(/*! ./dom_node_collection */ \"./src/dom_node_collection.js\");\n\nfunction $l(arg) {\n    let queue = [];\n\n    if(typeof arg === 'function'){\n        debugger\n        queue.push(func);\n    }\n\n    if (typeof arg === \"string\") {\n        let nodeList = document.querySelectorAll(arg);\n        let array = Array.from(nodeList);\n        return new DOMNodeCollection(array);\n    }\n    debugger;\n    window.addEventListener('DOMContentLoaded', (event) => {\n        queue.forEach(fnc => {\n            fnc();\n        });\n    });\n}\n\n$ajax({\n\n});\n\n\nwindow.$l = $l;\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });