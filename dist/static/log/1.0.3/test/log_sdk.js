(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/json/stringify.js":
/*!************************************************************************************!*\
  !*** ./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/json/stringify.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/json/stringify */ "./node_modules/_core-js@2.5.7@core-js/library/fn/json/stringify.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/object/assign.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/object/assign.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/assign */ "./node_modules/_core-js@2.5.7@core-js/library/fn/object/assign.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/object/define-property.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/object/define-property.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/define-property */ "./node_modules/_core-js@2.5.7@core-js/library/fn/object/define-property.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/object/keys.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/object/keys.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/keys */ "./node_modules/_core-js@2.5.7@core-js/library/fn/object/keys.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/classCallCheck.js":
/*!************************************************************************************!*\
  !*** ./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/classCallCheck.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),

/***/ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/createClass.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/createClass.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),

/***/ "./node_modules/_core-js@2.5.7@core-js/library/fn/json/stringify.js":
/*!**************************************************************************!*\
  !*** ./node_modules/_core-js@2.5.7@core-js/library/fn/json/stringify.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ../../modules/_core */ "./node_modules/_core-js@2.5.7@core-js/library/modules/_core.js");
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),

/***/ "./node_modules/_core-js@2.5.7@core-js/library/fn/object/assign.js":
/*!*************************************************************************!*\
  !*** ./node_modules/_core-js@2.5.7@core-js/library/fn/object/assign.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.assign */ "./node_modules/_core-js@2.5.7@core-js/library/modules/es6.object.assign.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/_core-js@2.5.7@core-js/library/modules/_core.js").Object.assign;


/***/ }),

/***/ "./node_modules/_core-js@2.5.7@core-js/library/fn/object/define-property.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/_core-js@2.5.7@core-js/library/fn/object/define-property.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.define-property */ "./node_modules/_core-js@2.5.7@core-js/library/modules/es6.object.define-property.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/_core-js@2.5.7@core-js/library/modules/_core.js").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "./node_modules/_core-js@2.5.7@core-js/library/fn/object/keys.js":
/*!***********************************************************************!*\
  !*** ./node_modules/_core-js@2.5.7@core-js/library/fn/object/keys.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.keys */ "./node_modules/_core-js@2.5.7@core-js/library/modules/es6.object.keys.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/_core-js@2.5.7@core-js/library/modules/_core.js").Object.keys;


/***/ }),

/***/ "./node_modules/_core-js@2.5.7@core-js/library/modules/_a-function.js":
/*!****************************************************************************!*\
  !*** ./node_modules/_core-js@2.5.7@core-js/library/modules/_a-function.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/_core-js@2.5.7@core-js/library/modules/_an-object.js":
/*!***************************************************************************!*\
  !*** ./node_modules/_core-js@2.5.7@core-js/library/modules/_an-object.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/_core-js@2.5.7@core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/_core-js@2.5.7@core-js/library/modules/_array-includes.js":
/*!********************************************************************************!*\
  !*** ./node_modules/_core-js@2.5.7@core-js/library/modules/_array-includes.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/_core-js@2.5.7@core-js/library/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/_core-js@2.5.7@core-js/library/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/_core-js@2.5.7@core-js/library/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/_core-js@2.5.7@core-js/library/modules/_cof.js":
/*!*********************************************************************!*\
  !*** ./node_modules/_core-js@2.5.7@core-js/library/modules/_cof.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/_core-js@2.5.7@core-js/library/modules/_core.js":
/*!**********************************************************************!*\
  !*** ./node_modules/_core-js@2.5.7@core-js/library/modules/_core.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/_core-js@2.5.7@core-js/library/modules/_ctx.js":
/*!*********************************************************************!*\
  !*** ./node_modules/_core-js@2.5.7@core-js/library/modules/_ctx.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/_core-js@2.5.7@core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/_core-js@2.5.7@core-js/library/modules/_defined.js":
/*!*************************************************************************!*\
  !*** ./node_modules/_core-js@2.5.7@core-js/library/modules/_defined.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/_core-js@2.5.7@core-js/library/modules/_descriptors.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/_core-js@2.5.7@core-js/library/modules/_descriptors.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/_core-js@2.5.7@core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/_core-js@2.5.7@core-js/library/modules/_dom-create.js":
/*!****************************************************************************!*\
  !*** ./node_modules/_core-js@2.5.7@core-js/library/modules/_dom-create.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/_core-js@2.5.7@core-js/library/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/_core-js@2.5.7@core-js/library/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/_core-js@2.5.7@core-js/library/modules/_enum-bug-keys.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/_core-js@2.5.7@core-js/library/modules/_enum-bug-keys.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/_core-js@2.5.7@core-js/library/modules/_export.js":
/*!************************************************************************!*\
  !*** ./node_modules/_core-js@2.5.7@core-js/library/modules/_export.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/_core-js@2.5.7@core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/_core-js@2.5.7@core-js/library/modules/_core.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/_core-js@2.5.7@core-js/library/modules/_ctx.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/_core-js@2.5.7@core-js/library/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/_core-js@2.5.7@core-js/library/modules/_has.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/_core-js@2.5.7@core-js/library/modules/_fails.js":
/*!***********************************************************************!*\
  !*** ./node_modules/_core-js@2.5.7@core-js/library/modules/_fails.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/_core-js@2.5.7@core-js/library/modules/_global.js":
/*!************************************************************************!*\
  !*** ./node_modules/_core-js@2.5.7@core-js/library/modules/_global.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/_core-js@2.5.7@core-js/library/modules/_has.js":
/*!*********************************************************************!*\
  !*** ./node_modules/_core-js@2.5.7@core-js/library/modules/_has.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/_core-js@2.5.7@core-js/library/modules/_hide.js":
/*!**********************************************************************!*\
  !*** ./node_modules/_core-js@2.5.7@core-js/library/modules/_hide.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/_core-js@2.5.7@core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/_core-js@2.5.7@core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/_core-js@2.5.7@core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/_core-js@2.5.7@core-js/library/modules/_ie8-dom-define.js":
/*!********************************************************************************!*\
  !*** ./node_modules/_core-js@2.5.7@core-js/library/modules/_ie8-dom-define.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/_core-js@2.5.7@core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/_core-js@2.5.7@core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/_core-js@2.5.7@core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/_core-js@2.5.7@core-js/library/modules/_iobject.js":
/*!*************************************************************************!*\
  !*** ./node_modules/_core-js@2.5.7@core-js/library/modules/_iobject.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/_core-js@2.5.7@core-js/library/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/_core-js@2.5.7@core-js/library/modules/_is-object.js":
/*!***************************************************************************!*\
  !*** ./node_modules/_core-js@2.5.7@core-js/library/modules/_is-object.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/_core-js@2.5.7@core-js/library/modules/_library.js":
/*!*************************************************************************!*\
  !*** ./node_modules/_core-js@2.5.7@core-js/library/modules/_library.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "./node_modules/_core-js@2.5.7@core-js/library/modules/_object-assign.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/_core-js@2.5.7@core-js/library/modules/_object-assign.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/_core-js@2.5.7@core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/_core-js@2.5.7@core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/_core-js@2.5.7@core-js/library/modules/_object-pie.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/_core-js@2.5.7@core-js/library/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/_core-js@2.5.7@core-js/library/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ "./node_modules/_core-js@2.5.7@core-js/library/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "./node_modules/_core-js@2.5.7@core-js/library/modules/_object-dp.js":
/*!***************************************************************************!*\
  !*** ./node_modules/_core-js@2.5.7@core-js/library/modules/_object-dp.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/_core-js@2.5.7@core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/_core-js@2.5.7@core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/_core-js@2.5.7@core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/_core-js@2.5.7@core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/_core-js@2.5.7@core-js/library/modules/_object-gops.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/_core-js@2.5.7@core-js/library/modules/_object-gops.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/_core-js@2.5.7@core-js/library/modules/_object-keys-internal.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/_core-js@2.5.7@core-js/library/modules/_object-keys-internal.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/_core-js@2.5.7@core-js/library/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/_core-js@2.5.7@core-js/library/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/_core-js@2.5.7@core-js/library/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/_core-js@2.5.7@core-js/library/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/_core-js@2.5.7@core-js/library/modules/_object-keys.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/_core-js@2.5.7@core-js/library/modules/_object-keys.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/_core-js@2.5.7@core-js/library/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/_core-js@2.5.7@core-js/library/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/_core-js@2.5.7@core-js/library/modules/_object-pie.js":
/*!****************************************************************************!*\
  !*** ./node_modules/_core-js@2.5.7@core-js/library/modules/_object-pie.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/_core-js@2.5.7@core-js/library/modules/_object-sap.js":
/*!****************************************************************************!*\
  !*** ./node_modules/_core-js@2.5.7@core-js/library/modules/_object-sap.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(/*! ./_export */ "./node_modules/_core-js@2.5.7@core-js/library/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/_core-js@2.5.7@core-js/library/modules/_core.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/_core-js@2.5.7@core-js/library/modules/_fails.js");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "./node_modules/_core-js@2.5.7@core-js/library/modules/_property-desc.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/_core-js@2.5.7@core-js/library/modules/_property-desc.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/_core-js@2.5.7@core-js/library/modules/_shared-key.js":
/*!****************************************************************************!*\
  !*** ./node_modules/_core-js@2.5.7@core-js/library/modules/_shared-key.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/_core-js@2.5.7@core-js/library/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/_core-js@2.5.7@core-js/library/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/_core-js@2.5.7@core-js/library/modules/_shared.js":
/*!************************************************************************!*\
  !*** ./node_modules/_core-js@2.5.7@core-js/library/modules/_shared.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/_core-js@2.5.7@core-js/library/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/_core-js@2.5.7@core-js/library/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/_core-js@2.5.7@core-js/library/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/_core-js@2.5.7@core-js/library/modules/_to-absolute-index.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/_core-js@2.5.7@core-js/library/modules/_to-absolute-index.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/_core-js@2.5.7@core-js/library/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/_core-js@2.5.7@core-js/library/modules/_to-integer.js":
/*!****************************************************************************!*\
  !*** ./node_modules/_core-js@2.5.7@core-js/library/modules/_to-integer.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/_core-js@2.5.7@core-js/library/modules/_to-iobject.js":
/*!****************************************************************************!*\
  !*** ./node_modules/_core-js@2.5.7@core-js/library/modules/_to-iobject.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/_core-js@2.5.7@core-js/library/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/_core-js@2.5.7@core-js/library/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/_core-js@2.5.7@core-js/library/modules/_to-length.js":
/*!***************************************************************************!*\
  !*** ./node_modules/_core-js@2.5.7@core-js/library/modules/_to-length.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/_core-js@2.5.7@core-js/library/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/_core-js@2.5.7@core-js/library/modules/_to-object.js":
/*!***************************************************************************!*\
  !*** ./node_modules/_core-js@2.5.7@core-js/library/modules/_to-object.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/_core-js@2.5.7@core-js/library/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/_core-js@2.5.7@core-js/library/modules/_to-primitive.js":
/*!******************************************************************************!*\
  !*** ./node_modules/_core-js@2.5.7@core-js/library/modules/_to-primitive.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/_core-js@2.5.7@core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/_core-js@2.5.7@core-js/library/modules/_uid.js":
/*!*********************************************************************!*\
  !*** ./node_modules/_core-js@2.5.7@core-js/library/modules/_uid.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/_core-js@2.5.7@core-js/library/modules/es6.object.assign.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/_core-js@2.5.7@core-js/library/modules/es6.object.assign.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/_core-js@2.5.7@core-js/library/modules/_export.js");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ "./node_modules/_core-js@2.5.7@core-js/library/modules/_object-assign.js") });


/***/ }),

/***/ "./node_modules/_core-js@2.5.7@core-js/library/modules/es6.object.define-property.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/_core-js@2.5.7@core-js/library/modules/es6.object.define-property.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/_core-js@2.5.7@core-js/library/modules/_export.js");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/_core-js@2.5.7@core-js/library/modules/_descriptors.js"), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ "./node_modules/_core-js@2.5.7@core-js/library/modules/_object-dp.js").f });


/***/ }),

/***/ "./node_modules/_core-js@2.5.7@core-js/library/modules/es6.object.keys.js":
/*!********************************************************************************!*\
  !*** ./node_modules/_core-js@2.5.7@core-js/library/modules/es6.object.keys.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/_core-js@2.5.7@core-js/library/modules/_to-object.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/_core-js@2.5.7@core-js/library/modules/_object-keys.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/_core-js@2.5.7@core-js/library/modules/_object-sap.js")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _log = __webpack_require__(/*! ./lib/log */ "./src/lib/log.js");

var _log2 = _interopRequireDefault(_log);

var _type_maps = __webpack_require__(/*! ./model/type_maps */ "./src/model/type_maps.js");

var _leave = __webpack_require__(/*! ./plugins/leave */ "./src/plugins/leave.js");

var _leave2 = _interopRequireDefault(_leave);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_log2.default.use(_leave2.default);

exports.default = {
  Vhall_User_Log: _log2.default,
  Vhall_User_Actions: _type_maps.actions
};

/***/ }),

/***/ "./src/lib/log.js":
/*!************************!*\
  !*** ./src/lib/log.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(/*! babel-runtime/core-js/object/keys */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/object/keys.js");

var _keys2 = _interopRequireDefault(_keys);

var _stringify = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/json/stringify.js");

var _stringify2 = _interopRequireDefault(_stringify);

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _env = __webpack_require__(/*! ../model/env */ "./src/model/env.js");

var _env2 = _interopRequireDefault(_env);

var _log_data = __webpack_require__(/*! ../model/log_data */ "./src/model/log_data.js");

var _log_data2 = _interopRequireDefault(_log_data);

var _type_maps = __webpack_require__(/*! ../model/type_maps */ "./src/model/type_maps.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 日志类
 */
var Log = function () {
  (0, _createClass3.default)(Log, null, [{
    key: 'use',
    value: function use(plugin) {
      Log.plugins.push(plugin);
    }
  }]);

  /**
   * 构造方法
   * @param {obj} config
   * new Log({
   *  pf: 7,
   *  bu:5
   * })
   */
  function Log(config) {
    (0, _classCallCheck3.default)(this, Log);
    this.s = 0;
    this.start = 0;

    this.loadPlugins();
    this.updateSid();
    this.xmlHttp = new XMLHttpRequest();
    this.reportUrl = "https://t-dc.e.vhall.com/login";
    this.baseParams = _env2.default;
    this.reportParams = (0, _assign2.default)({}, _log_data2.default, config);
  }
  /**
   * 初始化插件
   */


  (0, _createClass3.default)(Log, [{
    key: 'loadPlugins',
    value: function loadPlugins() {
      var _this = this;

      Log.plugins.forEach(function (plugin) {
        plugin.call(_this, Log);
      });
    }
    /**
     *
     * @param {string} key 环境参数key
     * @param {string} value 环境参数值
     */

  }, {
    key: 'setEnv',
    value: function setEnv(key, value) {
      this.baseParams[key] = value;
    }
    /**
     *
     * @param {string} key 上报参数key
     * @param {string} value 上报参数值
     */

  }, {
    key: 'set',
    value: function set(key, value) {
      this.reportParams[key] = value;
    }
  }, {
    key: 'updateSid',
    value: function updateSid() {
      this.s = '' + Date.now() + Math.floor(Math.random() * 10000);
      this.start = Date.now();
    }
  }, {
    key: 'recoverReportParams',
    value: function recoverReportParams() {
      delete this.reportParams['consumer_uid'];
      delete this.reportParams['service_names'];
    }
    /**
     * 上报方法
     * @param {string} action 上报动作
     * @param {string} event 上报事件内容
     */

  }, {
    key: 'track',
    value: function track(action, data) {
      try {
        var ret = this.analysisKeys(action);
        if (ret) {
          var k = ret.k;
          var exParams = data || {};
          exParams.behavior = ret.behavior;
          if (k === _type_maps.urlKeys['/site/'][1].k) {
            var during = Math.floor(Date.now() - this.start);
            exParams.event = during;
          }
          var params = (0, _assign2.default)({}, this.baseParams, this.reportParams, exParams);
          // let args = ''
          // for (let key in params) {
          //   args += `${args ? '&' : ''}${key}=${params[key]}`
          // }
          // let token = window.btoa(args)
          if (params.business_uid != '0') {
            var id = '' + Date.now() + Math.floor(Math.random() * 10000);
            var token = window.btoa((0, _stringify2.default)(params));
            var src = this.reportUrl + '?k=' + k + '&id=' + id + '&s=' + this.s + '&token=' + token;
            this.xmlHttp.open('GET', src);
            this.xmlHttp.send();
          }
        }
      } catch (error) {
        console.log(error);
      }
    }

    /**
     * 解析上报动作获取k值
     * @param {string} action 上报动作
     */

  }, {
    key: 'analysisKeys',
    value: function analysisKeys(action) {
      var ret = 0;
      switch (action.type) {
        case 'url':
          var path = window.location.pathname;
          var _key = (0, _keys2.default)(_type_maps.urlKeys).find(function (item) {
            return path.indexOf(item) != -1;
          });
          if (_key) {
            ret = _type_maps.urlKeys[_key][action.value];
          }
          break;
        case 'action':
          ret = _type_maps.actionKeys[action.value];
          break;
        default:
          break;
      }
      return ret;
    }
  }]);
  return Log;
}();

Log.plugins = [];
exports.default = Log;

/***/ }),

/***/ "./src/model/env.js":
/*!**************************!*\
  !*** ./src/model/env.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * 上报数据环境对象
 */

var env = {
  url: document.URL,
  // title: document.title,
  ua: navigator.userAgent,
  refer: document.referrer || localStorage.getItem('prev'),
  width: window.screen.width,
  height: window.screen.height,
  language: navigator.language
  // platform: navigator.platform
  // cookie: document.cookieA
};

exports.default = env;

/***/ }),

/***/ "./src/model/log_data.js":
/*!*******************************!*\
  !*** ./src/model/log_data.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * 上报数据对象
 */

var data = {
  business_uid: 0,
  // consumer_uid: 0,
  activity_id: 0,
  visitor_id: 0,
  behavior: 0,
  // event: '',
  // service_names: '',
  pf: -1,
  bu: ''
};

exports.default = data;

/***/ }),

/***/ "./src/model/type_maps.js":
/*!********************************!*\
  !*** ./src/model/type_maps.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var actions = {
  ENTER: {
    type: 'url',
    value: 0
  },
  LEAVE: {
    type: 'url',
    value: 1
  },
  CHAT: {
    type: 'action',
    value: 2
  },
  SHARE: {
    type: 'action',
    value: 3
  }
};

var urlKeys = {
  '/watch/': {
    0: {
      k: 602007,
      behavior: 6
    },
    1: {
      k: 602009,
      behavior: 8
    }
  },
  '/subscribe/': {
    0: {
      k: 602003,
      behavior: 2
    },
    1: {
      k: 602004,
      behavior: 3
    }
  },
  '/site/': {
    0: {
      k: 602001,
      behavior: 0
    },
    1: {
      k: 602002,
      behavior: 1
    }
  }
};

var actionKeys = {
  2: {
    k: 602008,
    behavior: 7
  },
  3: {
    k: 602010,
    behavior: 9
  }
};

exports.actions = actions;
exports.urlKeys = urlKeys;
exports.actionKeys = actionKeys;

/***/ }),

/***/ "./src/plugins/leave.js":
/*!******************************!*\
  !*** ./src/plugins/leave.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var _this = this;

  if (!history.onstatechange) {
    var url = location.href;
    history.onstatechange = function (e) {
      localStorage.setItem('prev', location.href);
      _this.track(_type_maps.actions.LEAVE);
      _this.setEnv('refer', location.href);
      _this.updateSid();
      _this.recoverReportParams();
    };
    window.addEventListener('popstate', function (e) {
      history.onstatechange({ state: e.state, url: url });
      url = location.href;
    });
    window.addEventListener('beforeunload', function (e) {
      history.onstatechange({ state: e.state, url: url });
    });(function (history) {
      var pushState = history.pushState;
      var replaceState = history.replaceState;
      history.pushState = function (state) {
        if (typeof history.onstatechange == 'function') {
          history.onstatechange({ state: state, url: location.href });
        }
        return pushState.apply(history, arguments);
      };
      history.replaceState = function (state) {
        if (typeof history.onstatechange == 'function') {
          history.onstatechange({ state: state, url: location.href });
        }
        return replaceState.apply(history, arguments);
      };
    })(window.history);
  }
};

var _type_maps = __webpack_require__(/*! ../model/type_maps */ "./src/model/type_maps.js");

/***/ })

/******/ })["default"];
});
//# sourceMappingURL=log_sdk.js.map