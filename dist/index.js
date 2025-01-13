/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("react-presentation-container", [], factory);
	else if(typeof exports === 'object')
		exports["react-presentation-container"] = factory();
	else
		root["react-presentation-container"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/PresentationContainer.jsx":
/*!***************************************!*\
  !*** ./src/PresentationContainer.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isFunction */ \"./node_modules/lodash/isFunction.js\");\n/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isFunction__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/get */ \"./node_modules/lodash/get.js\");\n/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_2__);\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }\nfunction ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }\nfunction _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n\n\n\nvar pipe = function pipe(fncs, initValue) {\n  return fncs.reduce(function (prevValue, fn) {\n    return fn(prevValue);\n  }, initValue);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {\n  var Component = _ref.component,\n    filterProps = _ref.filterProps,\n    _ref$bindMembers = _ref.bindMembers,\n    bindMembers = _ref$bindMembers === void 0 ? [] : _ref$bindMembers,\n    Controller = _ref.controller,\n    _ref$middleware = _ref.middleware,\n    middleware = _ref$middleware === void 0 ? [] : _ref$middleware;\n  var getContainer = function getContainer() {\n    if (lodash_isFunction__WEBPACK_IMPORTED_MODULE_1___default()(Controller) && !!Controller.prototype.isReactComponent) {\n      /* eslint-disable react/no-this-in-sfc */\n      /* eslint-disable no-param-reassign */\n      Controller.prototype.render = function controllerRender() {\n        var _this = this;\n        var boundMembers = bindMembers.reduce(function (prevMembers, key) {\n          return _objectSpread(_objectSpread({}, prevMembers), {}, _defineProperty({}, key, _this[key]));\n        }, {});\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Component, _extends({}, filterProps ? filterProps(this.props) : this.props, {\n          controller: _objectSpread(_objectSpread({}, boundMembers), {}, {\n            state: this.state\n          })\n        }));\n      };\n      /* eslint-enable */\n\n      return Controller;\n    }\n    if (lodash_isFunction__WEBPACK_IMPORTED_MODULE_1___default()(Controller)) {\n      if (lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(bindMembers, \"length\", 0) > 0) {\n        // eslint-disable-next-line no-console\n        console.warn(\"PresentationContainer warning: using bindMembers with a functional controller is not supported (\".concat(Controller.prototype.constructor.name, \")\"));\n      }\n      return function FunctionalContainer(props) {\n        for (var _len = arguments.length, restOfArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n          restOfArgs[_key - 1] = arguments[_key];\n        }\n        var state = Controller.apply(void 0, [props].concat(restOfArgs));\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Component, _extends({}, filterProps ? filterProps(props) : props, {\n          controller: state\n        }));\n      };\n    }\n    return null;\n  };\n  var ContainerComponent = getContainer();\n  return ContainerComponent ? pipe(middleware, ContainerComponent) : null;\n});\n\n//# sourceURL=webpack://react-presentation-container/./src/PresentationContainer.jsx?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _PresentationContainer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _PresentationContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PresentationContainer */ \"./src/PresentationContainer.jsx\");\n\n\n//# sourceURL=webpack://react-presentation-container/./src/index.js?");

/***/ }),

/***/ "./node_modules/lodash/_Hash.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_Hash.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var hashClear = __webpack_require__(/*! ./_hashClear */ \"./node_modules/lodash/_hashClear.js\"),\n    hashDelete = __webpack_require__(/*! ./_hashDelete */ \"./node_modules/lodash/_hashDelete.js\"),\n    hashGet = __webpack_require__(/*! ./_hashGet */ \"./node_modules/lodash/_hashGet.js\"),\n    hashHas = __webpack_require__(/*! ./_hashHas */ \"./node_modules/lodash/_hashHas.js\"),\n    hashSet = __webpack_require__(/*! ./_hashSet */ \"./node_modules/lodash/_hashSet.js\");\n\n/**\n * Creates a hash object.\n *\n * @private\n * @constructor\n * @param {Array} [entries] The key-value pairs to cache.\n */\nfunction Hash(entries) {\n  var index = -1,\n      length = entries == null ? 0 : entries.length;\n\n  this.clear();\n  while (++index < length) {\n    var entry = entries[index];\n    this.set(entry[0], entry[1]);\n  }\n}\n\n// Add methods to `Hash`.\nHash.prototype.clear = hashClear;\nHash.prototype['delete'] = hashDelete;\nHash.prototype.get = hashGet;\nHash.prototype.has = hashHas;\nHash.prototype.set = hashSet;\n\nmodule.exports = Hash;\n\n\n//# sourceURL=webpack://react-presentation-container/./node_modules/lodash/_Hash.js?");

/***/ }),

/***/ "./node_modules/lodash/_ListCache.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_ListCache.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ \"./node_modules/lodash/_listCacheClear.js\"),\n    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ \"./node_modules/lodash/_listCacheDelete.js\"),\n    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ \"./node_modules/lodash/_listCacheGet.js\"),\n    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ \"./node_modules/lodash/_listCacheHas.js\"),\n    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ \"./node_modules/lodash/_listCacheSet.js\");\n\n/**\n * Creates an list cache object.\n *\n * @private\n * @constructor\n * @param {Array} [entries] The key-value pairs to cache.\n */\nfunction ListCache(entries) {\n  var index = -1,\n      length = entries == null ? 0 : entries.length;\n\n  this.clear();\n  while (++index < length) {\n    var entry = entries[index];\n    this.set(entry[0], entry[1]);\n  }\n}\n\n// Add methods to `ListCache`.\nListCache.prototype.clear = listCacheClear;\nListCache.prototype['delete'] = listCacheDelete;\nListCache.prototype.get = listCacheGet;\nListCache.prototype.has = listCacheHas;\nListCache.prototype.set = listCacheSet;\n\nmodule.exports = ListCache;\n\n\n//# sourceURL=webpack://react-presentation-container/./node_modules/lodash/_ListCache.js?");

/***/ }),

/***/ "./node_modules/lodash/_Map.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Map.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var getNative = __webpack_require__(/*! ./_getNative */ \"./node_modules/lodash/_getNative.js\"),\n    root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/* Built-in method references that are verified to be native. */\nvar Map = getNative(root, 'Map');\n\nmodule.exports = Map;\n\n\n//# sourceURL=webpack://react-presentation-container/./node_modules/lodash/_Map.js?");

/***/ }),

/***/ "./node_modules/lodash/_MapCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_MapCache.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ \"./node_modules/lodash/_mapCacheClear.js\"),\n    mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ \"./node_modules/lodash/_mapCacheDelete.js\"),\n    mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ \"./node_modules/lodash/_mapCacheGet.js\"),\n    mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ \"./node_modules/lodash/_mapCacheHas.js\"),\n    mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ \"./node_modules/lodash/_mapCacheSet.js\");\n\n/**\n * Creates a map cache object to store key-value pairs.\n *\n * @private\n * @constructor\n * @param {Array} [entries] The key-value pairs to cache.\n */\nfunction MapCache(entries) {\n  var index = -1,\n      length = entries == null ? 0 : entries.length;\n\n  this.clear();\n  while (++index < length) {\n    var entry = entries[index];\n    this.set(entry[0], entry[1]);\n  }\n}\n\n// Add methods to `MapCache`.\nMapCache.prototype.clear = mapCacheClear;\nMapCache.prototype['delete'] = mapCacheDelete;\nMapCache.prototype.get = mapCacheGet;\nMapCache.prototype.has = mapCacheHas;\nMapCache.prototype.set = mapCacheSet;\n\nmodule.exports = MapCache;\n\n\n//# sourceURL=webpack://react-presentation-container/./node_modules/lodash/_MapCache.js?");

/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/** Built-in value references. */\nvar Symbol = root.Symbol;\n\nmodule.exports = Symbol;\n\n\n//# sourceURL=webpack://react-presentation-container/./node_modules/lodash/_Symbol.js?");

/***/ }),

/***/ "./node_modules/lodash/_arrayMap.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_arrayMap.js ***!
  \******************************************/
/***/ ((module) => {

eval("/**\n * A specialized version of `_.map` for arrays without support for iteratee\n * shorthands.\n *\n * @private\n * @param {Array} [array] The array to iterate over.\n * @param {Function} iteratee The function invoked per iteration.\n * @returns {Array} Returns the new mapped array.\n */\nfunction arrayMap(array, iteratee) {\n  var index = -1,\n      length = array == null ? 0 : array.length,\n      result = Array(length);\n\n  while (++index < length) {\n    result[index] = iteratee(array[index], index, array);\n  }\n  return result;\n}\n\nmodule.exports = arrayMap;\n\n\n//# sourceURL=webpack://react-presentation-container/./node_modules/lodash/_arrayMap.js?");

/***/ }),

/***/ "./node_modules/lodash/_assocIndexOf.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_assocIndexOf.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var eq = __webpack_require__(/*! ./eq */ \"./node_modules/lodash/eq.js\");\n\n/**\n * Gets the index at which the `key` is found in `array` of key-value pairs.\n *\n * @private\n * @param {Array} array The array to inspect.\n * @param {*} key The key to search for.\n * @returns {number} Returns the index of the matched value, else `-1`.\n */\nfunction assocIndexOf(array, key) {\n  var length = array.length;\n  while (length--) {\n    if (eq(array[length][0], key)) {\n      return length;\n    }\n  }\n  return -1;\n}\n\nmodule.exports = assocIndexOf;\n\n\n//# sourceURL=webpack://react-presentation-container/./node_modules/lodash/_assocIndexOf.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseGet.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var castPath = __webpack_require__(/*! ./_castPath */ \"./node_modules/lodash/_castPath.js\"),\n    toKey = __webpack_require__(/*! ./_toKey */ \"./node_modules/lodash/_toKey.js\");\n\n/**\n * The base implementation of `_.get` without support for default values.\n *\n * @private\n * @param {Object} object The object to query.\n * @param {Array|string} path The path of the property to get.\n * @returns {*} Returns the resolved value.\n */\nfunction baseGet(object, path) {\n  path = castPath(path, object);\n\n  var index = 0,\n      length = path.length;\n\n  while (object != null && index < length) {\n    object = object[toKey(path[index++])];\n  }\n  return (index && index == length) ? object : undefined;\n}\n\nmodule.exports = baseGet;\n\n\n//# sourceURL=webpack://react-presentation-container/./node_modules/lodash/_baseGet.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var Symbol = __webpack_require__(/*! ./_Symbol */ \"./node_modules/lodash/_Symbol.js\"),\n    getRawTag = __webpack_require__(/*! ./_getRawTag */ \"./node_modules/lodash/_getRawTag.js\"),\n    objectToString = __webpack_require__(/*! ./_objectToString */ \"./node_modules/lodash/_objectToString.js\");\n\n/** `Object#toString` result references. */\nvar nullTag = '[object Null]',\n    undefinedTag = '[object Undefined]';\n\n/** Built-in value references. */\nvar symToStringTag = Symbol ? Symbol.toStringTag : undefined;\n\n/**\n * The base implementation of `getTag` without fallbacks for buggy environments.\n *\n * @private\n * @param {*} value The value to query.\n * @returns {string} Returns the `toStringTag`.\n */\nfunction baseGetTag(value) {\n  if (value == null) {\n    return value === undefined ? undefinedTag : nullTag;\n  }\n  return (symToStringTag && symToStringTag in Object(value))\n    ? getRawTag(value)\n    : objectToString(value);\n}\n\nmodule.exports = baseGetTag;\n\n\n//# sourceURL=webpack://react-presentation-container/./node_modules/lodash/_baseGetTag.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseIsNative.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIsNative.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isFunction = __webpack_require__(/*! ./isFunction */ \"./node_modules/lodash/isFunction.js\"),\n    isMasked = __webpack_require__(/*! ./_isMasked */ \"./node_modules/lodash/_isMasked.js\"),\n    isObject = __webpack_require__(/*! ./isObject */ \"./node_modules/lodash/isObject.js\"),\n    toSource = __webpack_require__(/*! ./_toSource */ \"./node_modules/lodash/_toSource.js\");\n\n/**\n * Used to match `RegExp`\n * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).\n */\nvar reRegExpChar = /[\\\\^$.*+?()[\\]{}|]/g;\n\n/** Used to detect host constructors (Safari). */\nvar reIsHostCtor = /^\\[object .+?Constructor\\]$/;\n\n/** Used for built-in method references. */\nvar funcProto = Function.prototype,\n    objectProto = Object.prototype;\n\n/** Used to resolve the decompiled source of functions. */\nvar funcToString = funcProto.toString;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/** Used to detect if a method is native. */\nvar reIsNative = RegExp('^' +\n  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\\\$&')\n  .replace(/hasOwnProperty|(function).*?(?=\\\\\\()| for .+?(?=\\\\\\])/g, '$1.*?') + '$'\n);\n\n/**\n * The base implementation of `_.isNative` without bad shim checks.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a native function,\n *  else `false`.\n */\nfunction baseIsNative(value) {\n  if (!isObject(value) || isMasked(value)) {\n    return false;\n  }\n  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;\n  return pattern.test(toSource(value));\n}\n\nmodule.exports = baseIsNative;\n\n\n//# sourceURL=webpack://react-presentation-container/./node_modules/lodash/_baseIsNative.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseToString.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseToString.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var Symbol = __webpack_require__(/*! ./_Symbol */ \"./node_modules/lodash/_Symbol.js\"),\n    arrayMap = __webpack_require__(/*! ./_arrayMap */ \"./node_modules/lodash/_arrayMap.js\"),\n    isArray = __webpack_require__(/*! ./isArray */ \"./node_modules/lodash/isArray.js\"),\n    isSymbol = __webpack_require__(/*! ./isSymbol */ \"./node_modules/lodash/isSymbol.js\");\n\n/** Used as references for various `Number` constants. */\nvar INFINITY = 1 / 0;\n\n/** Used to convert symbols to primitives and strings. */\nvar symbolProto = Symbol ? Symbol.prototype : undefined,\n    symbolToString = symbolProto ? symbolProto.toString : undefined;\n\n/**\n * The base implementation of `_.toString` which doesn't convert nullish\n * values to empty strings.\n *\n * @private\n * @param {*} value The value to process.\n * @returns {string} Returns the string.\n */\nfunction baseToString(value) {\n  // Exit early for strings to avoid a performance hit in some environments.\n  if (typeof value == 'string') {\n    return value;\n  }\n  if (isArray(value)) {\n    // Recursively convert values (susceptible to call stack limits).\n    return arrayMap(value, baseToString) + '';\n  }\n  if (isSymbol(value)) {\n    return symbolToString ? symbolToString.call(value) : '';\n  }\n  var result = (value + '');\n  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;\n}\n\nmodule.exports = baseToString;\n\n\n//# sourceURL=webpack://react-presentation-container/./node_modules/lodash/_baseToString.js?");

/***/ }),

/***/ "./node_modules/lodash/_castPath.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_castPath.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isArray = __webpack_require__(/*! ./isArray */ \"./node_modules/lodash/isArray.js\"),\n    isKey = __webpack_require__(/*! ./_isKey */ \"./node_modules/lodash/_isKey.js\"),\n    stringToPath = __webpack_require__(/*! ./_stringToPath */ \"./node_modules/lodash/_stringToPath.js\"),\n    toString = __webpack_require__(/*! ./toString */ \"./node_modules/lodash/toString.js\");\n\n/**\n * Casts `value` to a path array if it's not one.\n *\n * @private\n * @param {*} value The value to inspect.\n * @param {Object} [object] The object to query keys on.\n * @returns {Array} Returns the cast property path array.\n */\nfunction castPath(value, object) {\n  if (isArray(value)) {\n    return value;\n  }\n  return isKey(value, object) ? [value] : stringToPath(toString(value));\n}\n\nmodule.exports = castPath;\n\n\n//# sourceURL=webpack://react-presentation-container/./node_modules/lodash/_castPath.js?");

/***/ }),

/***/ "./node_modules/lodash/_coreJsData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_coreJsData.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/** Used to detect overreaching core-js shims. */\nvar coreJsData = root['__core-js_shared__'];\n\nmodule.exports = coreJsData;\n\n\n//# sourceURL=webpack://react-presentation-container/./node_modules/lodash/_coreJsData.js?");

/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/** Detect free variable `global` from Node.js. */\nvar freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;\n\nmodule.exports = freeGlobal;\n\n\n//# sourceURL=webpack://react-presentation-container/./node_modules/lodash/_freeGlobal.js?");

/***/ }),

/***/ "./node_modules/lodash/_getMapData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getMapData.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isKeyable = __webpack_require__(/*! ./_isKeyable */ \"./node_modules/lodash/_isKeyable.js\");\n\n/**\n * Gets the data for `map`.\n *\n * @private\n * @param {Object} map The map to query.\n * @param {string} key The reference key.\n * @returns {*} Returns the map data.\n */\nfunction getMapData(map, key) {\n  var data = map.__data__;\n  return isKeyable(key)\n    ? data[typeof key == 'string' ? 'string' : 'hash']\n    : data.map;\n}\n\nmodule.exports = getMapData;\n\n\n//# sourceURL=webpack://react-presentation-container/./node_modules/lodash/_getMapData.js?");

/***/ }),

/***/ "./node_modules/lodash/_getNative.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getNative.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ \"./node_modules/lodash/_baseIsNative.js\"),\n    getValue = __webpack_require__(/*! ./_getValue */ \"./node_modules/lodash/_getValue.js\");\n\n/**\n * Gets the native function at `key` of `object`.\n *\n * @private\n * @param {Object} object The object to query.\n * @param {string} key The key of the method to get.\n * @returns {*} Returns the function if it's native, else `undefined`.\n */\nfunction getNative(object, key) {\n  var value = getValue(object, key);\n  return baseIsNative(value) ? value : undefined;\n}\n\nmodule.exports = getNative;\n\n\n//# sourceURL=webpack://react-presentation-container/./node_modules/lodash/_getNative.js?");

/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var Symbol = __webpack_require__(/*! ./_Symbol */ \"./node_modules/lodash/_Symbol.js\");\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * Used to resolve the\n * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)\n * of values.\n */\nvar nativeObjectToString = objectProto.toString;\n\n/** Built-in value references. */\nvar symToStringTag = Symbol ? Symbol.toStringTag : undefined;\n\n/**\n * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.\n *\n * @private\n * @param {*} value The value to query.\n * @returns {string} Returns the raw `toStringTag`.\n */\nfunction getRawTag(value) {\n  var isOwn = hasOwnProperty.call(value, symToStringTag),\n      tag = value[symToStringTag];\n\n  try {\n    value[symToStringTag] = undefined;\n    var unmasked = true;\n  } catch (e) {}\n\n  var result = nativeObjectToString.call(value);\n  if (unmasked) {\n    if (isOwn) {\n      value[symToStringTag] = tag;\n    } else {\n      delete value[symToStringTag];\n    }\n  }\n  return result;\n}\n\nmodule.exports = getRawTag;\n\n\n//# sourceURL=webpack://react-presentation-container/./node_modules/lodash/_getRawTag.js?");

/***/ }),

/***/ "./node_modules/lodash/_getValue.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_getValue.js ***!
  \******************************************/
/***/ ((module) => {

eval("/**\n * Gets the value at `key` of `object`.\n *\n * @private\n * @param {Object} [object] The object to query.\n * @param {string} key The key of the property to get.\n * @returns {*} Returns the property value.\n */\nfunction getValue(object, key) {\n  return object == null ? undefined : object[key];\n}\n\nmodule.exports = getValue;\n\n\n//# sourceURL=webpack://react-presentation-container/./node_modules/lodash/_getValue.js?");

/***/ }),

/***/ "./node_modules/lodash/_hashClear.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_hashClear.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ \"./node_modules/lodash/_nativeCreate.js\");\n\n/**\n * Removes all key-value entries from the hash.\n *\n * @private\n * @name clear\n * @memberOf Hash\n */\nfunction hashClear() {\n  this.__data__ = nativeCreate ? nativeCreate(null) : {};\n  this.size = 0;\n}\n\nmodule.exports = hashClear;\n\n\n//# sourceURL=webpack://react-presentation-container/./node_modules/lodash/_hashClear.js?");

/***/ }),

/***/ "./node_modules/lodash/_hashDelete.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_hashDelete.js ***!
  \********************************************/
/***/ ((module) => {

eval("/**\n * Removes `key` and its value from the hash.\n *\n * @private\n * @name delete\n * @memberOf Hash\n * @param {Object} hash The hash to modify.\n * @param {string} key The key of the value to remove.\n * @returns {boolean} Returns `true` if the entry was removed, else `false`.\n */\nfunction hashDelete(key) {\n  var result = this.has(key) && delete this.__data__[key];\n  this.size -= result ? 1 : 0;\n  return result;\n}\n\nmodule.exports = hashDelete;\n\n\n//# sourceURL=webpack://react-presentation-container/./node_modules/lodash/_hashDelete.js?");

/***/ }),

/***/ "./node_modules/lodash/_hashGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashGet.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ \"./node_modules/lodash/_nativeCreate.js\");\n\n/** Used to stand-in for `undefined` hash values. */\nvar HASH_UNDEFINED = '__lodash_hash_undefined__';\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * Gets the hash value for `key`.\n *\n * @private\n * @name get\n * @memberOf Hash\n * @param {string} key The key of the value to get.\n * @returns {*} Returns the entry value.\n */\nfunction hashGet(key) {\n  var data = this.__data__;\n  if (nativeCreate) {\n    var result = data[key];\n    return result === HASH_UNDEFINED ? undefined : result;\n  }\n  return hasOwnProperty.call(data, key) ? data[key] : undefined;\n}\n\nmodule.exports = hashGet;\n\n\n//# sourceURL=webpack://react-presentation-container/./node_modules/lodash/_hashGet.js?");

/***/ }),

/***/ "./node_modules/lodash/_hashHas.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashHas.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ \"./node_modules/lodash/_nativeCreate.js\");\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * Checks if a hash value for `key` exists.\n *\n * @private\n * @name has\n * @memberOf Hash\n * @param {string} key The key of the entry to check.\n * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.\n */\nfunction hashHas(key) {\n  var data = this.__data__;\n  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);\n}\n\nmodule.exports = hashHas;\n\n\n//# sourceURL=webpack://react-presentation-container/./node_modules/lodash/_hashHas.js?");

/***/ }),

/***/ "./node_modules/lodash/_hashSet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashSet.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ \"./node_modules/lodash/_nativeCreate.js\");\n\n/** Used to stand-in for `undefined` hash values. */\nvar HASH_UNDEFINED = '__lodash_hash_undefined__';\n\n/**\n * Sets the hash `key` to `value`.\n *\n * @private\n * @name set\n * @memberOf Hash\n * @param {string} key The key of the value to set.\n * @param {*} value The value to set.\n * @returns {Object} Returns the hash instance.\n */\nfunction hashSet(key, value) {\n  var data = this.__data__;\n  this.size += this.has(key) ? 0 : 1;\n  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;\n  return this;\n}\n\nmodule.exports = hashSet;\n\n\n//# sourceURL=webpack://react-presentation-container/./node_modules/lodash/_hashSet.js?");

/***/ }),

/***/ "./node_modules/lodash/_isKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_isKey.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isArray = __webpack_require__(/*! ./isArray */ \"./node_modules/lodash/isArray.js\"),\n    isSymbol = __webpack_require__(/*! ./isSymbol */ \"./node_modules/lodash/isSymbol.js\");\n\n/** Used to match property names within property paths. */\nvar reIsDeepProp = /\\.|\\[(?:[^[\\]]*|([\"'])(?:(?!\\1)[^\\\\]|\\\\.)*?\\1)\\]/,\n    reIsPlainProp = /^\\w*$/;\n\n/**\n * Checks if `value` is a property name and not a property path.\n *\n * @private\n * @param {*} value The value to check.\n * @param {Object} [object] The object to query keys on.\n * @returns {boolean} Returns `true` if `value` is a property name, else `false`.\n */\nfunction isKey(value, object) {\n  if (isArray(value)) {\n    return false;\n  }\n  var type = typeof value;\n  if (type == 'number' || type == 'symbol' || type == 'boolean' ||\n      value == null || isSymbol(value)) {\n    return true;\n  }\n  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||\n    (object != null && value in Object(object));\n}\n\nmodule.exports = isKey;\n\n\n//# sourceURL=webpack://react-presentation-container/./node_modules/lodash/_isKey.js?");

/***/ }),

/***/ "./node_modules/lodash/_isKeyable.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_isKeyable.js ***!
  \*******************************************/
/***/ ((module) => {

eval("/**\n * Checks if `value` is suitable for use as unique object key.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is suitable, else `false`.\n */\nfunction isKeyable(value) {\n  var type = typeof value;\n  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')\n    ? (value !== '__proto__')\n    : (value === null);\n}\n\nmodule.exports = isKeyable;\n\n\n//# sourceURL=webpack://react-presentation-container/./node_modules/lodash/_isKeyable.js?");

/***/ }),

/***/ "./node_modules/lodash/_isMasked.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_isMasked.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var coreJsData = __webpack_require__(/*! ./_coreJsData */ \"./node_modules/lodash/_coreJsData.js\");\n\n/** Used to detect methods masquerading as native. */\nvar maskSrcKey = (function() {\n  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');\n  return uid ? ('Symbol(src)_1.' + uid) : '';\n}());\n\n/**\n * Checks if `func` has its source masked.\n *\n * @private\n * @param {Function} func The function to check.\n * @returns {boolean} Returns `true` if `func` is masked, else `false`.\n */\nfunction isMasked(func) {\n  return !!maskSrcKey && (maskSrcKey in func);\n}\n\nmodule.exports = isMasked;\n\n\n//# sourceURL=webpack://react-presentation-container/./node_modules/lodash/_isMasked.js?");

/***/ }),

/***/ "./node_modules/lodash/_listCacheClear.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_listCacheClear.js ***!
  \************************************************/
/***/ ((module) => {

eval("/**\n * Removes all key-value entries from the list cache.\n *\n * @private\n * @name clear\n * @memberOf ListCache\n */\nfunction listCacheClear() {\n  this.__data__ = [];\n  this.size = 0;\n}\n\nmodule.exports = listCacheClear;\n\n\n//# sourceURL=webpack://react-presentation-container/./node_modules/lodash/_listCacheClear.js?");

/***/ }),

/***/ "./node_modules/lodash/_listCacheDelete.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_listCacheDelete.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ \"./node_modules/lodash/_assocIndexOf.js\");\n\n/** Used for built-in method references. */\nvar arrayProto = Array.prototype;\n\n/** Built-in value references. */\nvar splice = arrayProto.splice;\n\n/**\n * Removes `key` and its value from the list cache.\n *\n * @private\n * @name delete\n * @memberOf ListCache\n * @param {string} key The key of the value to remove.\n * @returns {boolean} Returns `true` if the entry was removed, else `false`.\n */\nfunction listCacheDelete(key) {\n  var data = this.__data__,\n      index = assocIndexOf(data, key);\n\n  if (index < 0) {\n    return false;\n  }\n  var lastIndex = data.length - 1;\n  if (index == lastIndex) {\n    data.pop();\n  } else {\n    splice.call(data, index, 1);\n  }\n  --this.size;\n  return true;\n}\n\nmodule.exports = listCacheDelete;\n\n\n//# sourceURL=webpack://react-presentation-container/./node_modules/lodash/_listCacheDelete.js?");

/***/ }),

/***/ "./node_modules/lodash/_listCacheGet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheGet.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ \"./node_modules/lodash/_assocIndexOf.js\");\n\n/**\n * Gets the list cache value for `key`.\n *\n * @private\n * @name get\n * @memberOf ListCache\n * @param {string} key The key of the value to get.\n * @returns {*} Returns the entry value.\n */\nfunction listCacheGet(key) {\n  var data = this.__data__,\n      index = assocIndexOf(data, key);\n\n  return index < 0 ? undefined : data[index][1];\n}\n\nmodule.exports = listCacheGet;\n\n\n//# sourceURL=webpack://react-presentation-container/./node_modules/lodash/_listCacheGet.js?");

/***/ }),

/***/ "./node_modules/lodash/_listCacheHas.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheHas.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ \"./node_modules/lodash/_assocIndexOf.js\");\n\n/**\n * Checks if a list cache value for `key` exists.\n *\n * @private\n * @name has\n * @memberOf ListCache\n * @param {string} key The key of the entry to check.\n * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.\n */\nfunction listCacheHas(key) {\n  return assocIndexOf(this.__data__, key) > -1;\n}\n\nmodule.exports = listCacheHas;\n\n\n//# sourceURL=webpack://react-presentation-container/./node_modules/lodash/_listCacheHas.js?");

/***/ }),

/***/ "./node_modules/lodash/_listCacheSet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheSet.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ \"./node_modules/lodash/_assocIndexOf.js\");\n\n/**\n * Sets the list cache `key` to `value`.\n *\n * @private\n * @name set\n * @memberOf ListCache\n * @param {string} key The key of the value to set.\n * @param {*} value The value to set.\n * @returns {Object} Returns the list cache instance.\n */\nfunction listCacheSet(key, value) {\n  var data = this.__data__,\n      index = assocIndexOf(data, key);\n\n  if (index < 0) {\n    ++this.size;\n    data.push([key, value]);\n  } else {\n    data[index][1] = value;\n  }\n  return this;\n}\n\nmodule.exports = listCacheSet;\n\n\n//# sourceURL=webpack://react-presentation-container/./node_modules/lodash/_listCacheSet.js?");

/***/ }),

/***/ "./node_modules/lodash/_mapCacheClear.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_mapCacheClear.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var Hash = __webpack_require__(/*! ./_Hash */ \"./node_modules/lodash/_Hash.js\"),\n    ListCache = __webpack_require__(/*! ./_ListCache */ \"./node_modules/lodash/_ListCache.js\"),\n    Map = __webpack_require__(/*! ./_Map */ \"./node_modules/lodash/_Map.js\");\n\n/**\n * Removes all key-value entries from the map.\n *\n * @private\n * @name clear\n * @memberOf MapCache\n */\nfunction mapCacheClear() {\n  this.size = 0;\n  this.__data__ = {\n    'hash': new Hash,\n    'map': new (Map || ListCache),\n    'string': new Hash\n  };\n}\n\nmodule.exports = mapCacheClear;\n\n\n//# sourceURL=webpack://react-presentation-container/./node_modules/lodash/_mapCacheClear.js?");

/***/ }),

/***/ "./node_modules/lodash/_mapCacheDelete.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_mapCacheDelete.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var getMapData = __webpack_require__(/*! ./_getMapData */ \"./node_modules/lodash/_getMapData.js\");\n\n/**\n * Removes `key` and its value from the map.\n *\n * @private\n * @name delete\n * @memberOf MapCache\n * @param {string} key The key of the value to remove.\n * @returns {boolean} Returns `true` if the entry was removed, else `false`.\n */\nfunction mapCacheDelete(key) {\n  var result = getMapData(this, key)['delete'](key);\n  this.size -= result ? 1 : 0;\n  return result;\n}\n\nmodule.exports = mapCacheDelete;\n\n\n//# sourceURL=webpack://react-presentation-container/./node_modules/lodash/_mapCacheDelete.js?");

/***/ }),

/***/ "./node_modules/lodash/_mapCacheGet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheGet.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var getMapData = __webpack_require__(/*! ./_getMapData */ \"./node_modules/lodash/_getMapData.js\");\n\n/**\n * Gets the map value for `key`.\n *\n * @private\n * @name get\n * @memberOf MapCache\n * @param {string} key The key of the value to get.\n * @returns {*} Returns the entry value.\n */\nfunction mapCacheGet(key) {\n  return getMapData(this, key).get(key);\n}\n\nmodule.exports = mapCacheGet;\n\n\n//# sourceURL=webpack://react-presentation-container/./node_modules/lodash/_mapCacheGet.js?");

/***/ }),

/***/ "./node_modules/lodash/_mapCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheHas.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var getMapData = __webpack_require__(/*! ./_getMapData */ \"./node_modules/lodash/_getMapData.js\");\n\n/**\n * Checks if a map value for `key` exists.\n *\n * @private\n * @name has\n * @memberOf MapCache\n * @param {string} key The key of the entry to check.\n * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.\n */\nfunction mapCacheHas(key) {\n  return getMapData(this, key).has(key);\n}\n\nmodule.exports = mapCacheHas;\n\n\n//# sourceURL=webpack://react-presentation-container/./node_modules/lodash/_mapCacheHas.js?");

/***/ }),

/***/ "./node_modules/lodash/_mapCacheSet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheSet.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var getMapData = __webpack_require__(/*! ./_getMapData */ \"./node_modules/lodash/_getMapData.js\");\n\n/**\n * Sets the map `key` to `value`.\n *\n * @private\n * @name set\n * @memberOf MapCache\n * @param {string} key The key of the value to set.\n * @param {*} value The value to set.\n * @returns {Object} Returns the map cache instance.\n */\nfunction mapCacheSet(key, value) {\n  var data = getMapData(this, key),\n      size = data.size;\n\n  data.set(key, value);\n  this.size += data.size == size ? 0 : 1;\n  return this;\n}\n\nmodule.exports = mapCacheSet;\n\n\n//# sourceURL=webpack://react-presentation-container/./node_modules/lodash/_mapCacheSet.js?");

/***/ }),

/***/ "./node_modules/lodash/_memoizeCapped.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_memoizeCapped.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var memoize = __webpack_require__(/*! ./memoize */ \"./node_modules/lodash/memoize.js\");\n\n/** Used as the maximum memoize cache size. */\nvar MAX_MEMOIZE_SIZE = 500;\n\n/**\n * A specialized version of `_.memoize` which clears the memoized function's\n * cache when it exceeds `MAX_MEMOIZE_SIZE`.\n *\n * @private\n * @param {Function} func The function to have its output memoized.\n * @returns {Function} Returns the new memoized function.\n */\nfunction memoizeCapped(func) {\n  var result = memoize(func, function(key) {\n    if (cache.size === MAX_MEMOIZE_SIZE) {\n      cache.clear();\n    }\n    return key;\n  });\n\n  var cache = result.cache;\n  return result;\n}\n\nmodule.exports = memoizeCapped;\n\n\n//# sourceURL=webpack://react-presentation-container/./node_modules/lodash/_memoizeCapped.js?");

/***/ }),

/***/ "./node_modules/lodash/_nativeCreate.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeCreate.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var getNative = __webpack_require__(/*! ./_getNative */ \"./node_modules/lodash/_getNative.js\");\n\n/* Built-in method references that are verified to be native. */\nvar nativeCreate = getNative(Object, 'create');\n\nmodule.exports = nativeCreate;\n\n\n//# sourceURL=webpack://react-presentation-container/./node_modules/lodash/_nativeCreate.js?");

/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/***/ ((module) => {

eval("/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/**\n * Used to resolve the\n * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)\n * of values.\n */\nvar nativeObjectToString = objectProto.toString;\n\n/**\n * Converts `value` to a string using `Object.prototype.toString`.\n *\n * @private\n * @param {*} value The value to convert.\n * @returns {string} Returns the converted string.\n */\nfunction objectToString(value) {\n  return nativeObjectToString.call(value);\n}\n\nmodule.exports = objectToString;\n\n\n//# sourceURL=webpack://react-presentation-container/./node_modules/lodash/_objectToString.js?");

/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ \"./node_modules/lodash/_freeGlobal.js\");\n\n/** Detect free variable `self`. */\nvar freeSelf = typeof self == 'object' && self && self.Object === Object && self;\n\n/** Used as a reference to the global object. */\nvar root = freeGlobal || freeSelf || Function('return this')();\n\nmodule.exports = root;\n\n\n//# sourceURL=webpack://react-presentation-container/./node_modules/lodash/_root.js?");

/***/ }),

/***/ "./node_modules/lodash/_stringToPath.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_stringToPath.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var memoizeCapped = __webpack_require__(/*! ./_memoizeCapped */ \"./node_modules/lodash/_memoizeCapped.js\");\n\n/** Used to match property names within property paths. */\nvar rePropName = /[^.[\\]]+|\\[(?:(-?\\d+(?:\\.\\d+)?)|([\"'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2)\\]|(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|$))/g;\n\n/** Used to match backslashes in property paths. */\nvar reEscapeChar = /\\\\(\\\\)?/g;\n\n/**\n * Converts `string` to a property path array.\n *\n * @private\n * @param {string} string The string to convert.\n * @returns {Array} Returns the property path array.\n */\nvar stringToPath = memoizeCapped(function(string) {\n  var result = [];\n  if (string.charCodeAt(0) === 46 /* . */) {\n    result.push('');\n  }\n  string.replace(rePropName, function(match, number, quote, subString) {\n    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));\n  });\n  return result;\n});\n\nmodule.exports = stringToPath;\n\n\n//# sourceURL=webpack://react-presentation-container/./node_modules/lodash/_stringToPath.js?");

/***/ }),

/***/ "./node_modules/lodash/_toKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_toKey.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isSymbol = __webpack_require__(/*! ./isSymbol */ \"./node_modules/lodash/isSymbol.js\");\n\n/** Used as references for various `Number` constants. */\nvar INFINITY = 1 / 0;\n\n/**\n * Converts `value` to a string key if it's not a string or symbol.\n *\n * @private\n * @param {*} value The value to inspect.\n * @returns {string|symbol} Returns the key.\n */\nfunction toKey(value) {\n  if (typeof value == 'string' || isSymbol(value)) {\n    return value;\n  }\n  var result = (value + '');\n  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;\n}\n\nmodule.exports = toKey;\n\n\n//# sourceURL=webpack://react-presentation-container/./node_modules/lodash/_toKey.js?");

/***/ }),

/***/ "./node_modules/lodash/_toSource.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_toSource.js ***!
  \******************************************/
/***/ ((module) => {

eval("/** Used for built-in method references. */\nvar funcProto = Function.prototype;\n\n/** Used to resolve the decompiled source of functions. */\nvar funcToString = funcProto.toString;\n\n/**\n * Converts `func` to its source code.\n *\n * @private\n * @param {Function} func The function to convert.\n * @returns {string} Returns the source code.\n */\nfunction toSource(func) {\n  if (func != null) {\n    try {\n      return funcToString.call(func);\n    } catch (e) {}\n    try {\n      return (func + '');\n    } catch (e) {}\n  }\n  return '';\n}\n\nmodule.exports = toSource;\n\n\n//# sourceURL=webpack://react-presentation-container/./node_modules/lodash/_toSource.js?");

/***/ }),

/***/ "./node_modules/lodash/eq.js":
/*!***********************************!*\
  !*** ./node_modules/lodash/eq.js ***!
  \***********************************/
/***/ ((module) => {

eval("/**\n * Performs a\n * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)\n * comparison between two values to determine if they are equivalent.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to compare.\n * @param {*} other The other value to compare.\n * @returns {boolean} Returns `true` if the values are equivalent, else `false`.\n * @example\n *\n * var object = { 'a': 1 };\n * var other = { 'a': 1 };\n *\n * _.eq(object, object);\n * // => true\n *\n * _.eq(object, other);\n * // => false\n *\n * _.eq('a', 'a');\n * // => true\n *\n * _.eq('a', Object('a'));\n * // => false\n *\n * _.eq(NaN, NaN);\n * // => true\n */\nfunction eq(value, other) {\n  return value === other || (value !== value && other !== other);\n}\n\nmodule.exports = eq;\n\n\n//# sourceURL=webpack://react-presentation-container/./node_modules/lodash/eq.js?");

/***/ }),

/***/ "./node_modules/lodash/get.js":
/*!************************************!*\
  !*** ./node_modules/lodash/get.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var baseGet = __webpack_require__(/*! ./_baseGet */ \"./node_modules/lodash/_baseGet.js\");\n\n/**\n * Gets the value at `path` of `object`. If the resolved value is\n * `undefined`, the `defaultValue` is returned in its place.\n *\n * @static\n * @memberOf _\n * @since 3.7.0\n * @category Object\n * @param {Object} object The object to query.\n * @param {Array|string} path The path of the property to get.\n * @param {*} [defaultValue] The value returned for `undefined` resolved values.\n * @returns {*} Returns the resolved value.\n * @example\n *\n * var object = { 'a': [{ 'b': { 'c': 3 } }] };\n *\n * _.get(object, 'a[0].b.c');\n * // => 3\n *\n * _.get(object, ['a', '0', 'b', 'c']);\n * // => 3\n *\n * _.get(object, 'a.b.c', 'default');\n * // => 'default'\n */\nfunction get(object, path, defaultValue) {\n  var result = object == null ? undefined : baseGet(object, path);\n  return result === undefined ? defaultValue : result;\n}\n\nmodule.exports = get;\n\n\n//# sourceURL=webpack://react-presentation-container/./node_modules/lodash/get.js?");

/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/***/ ((module) => {

eval("/**\n * Checks if `value` is classified as an `Array` object.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an array, else `false`.\n * @example\n *\n * _.isArray([1, 2, 3]);\n * // => true\n *\n * _.isArray(document.body.children);\n * // => false\n *\n * _.isArray('abc');\n * // => false\n *\n * _.isArray(_.noop);\n * // => false\n */\nvar isArray = Array.isArray;\n\nmodule.exports = isArray;\n\n\n//# sourceURL=webpack://react-presentation-container/./node_modules/lodash/isArray.js?");

/***/ }),

/***/ "./node_modules/lodash/isFunction.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/isFunction.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ \"./node_modules/lodash/_baseGetTag.js\"),\n    isObject = __webpack_require__(/*! ./isObject */ \"./node_modules/lodash/isObject.js\");\n\n/** `Object#toString` result references. */\nvar asyncTag = '[object AsyncFunction]',\n    funcTag = '[object Function]',\n    genTag = '[object GeneratorFunction]',\n    proxyTag = '[object Proxy]';\n\n/**\n * Checks if `value` is classified as a `Function` object.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a function, else `false`.\n * @example\n *\n * _.isFunction(_);\n * // => true\n *\n * _.isFunction(/abc/);\n * // => false\n */\nfunction isFunction(value) {\n  if (!isObject(value)) {\n    return false;\n  }\n  // The use of `Object#toString` avoids issues with the `typeof` operator\n  // in Safari 9 which returns 'object' for typed arrays and other constructors.\n  var tag = baseGetTag(value);\n  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;\n}\n\nmodule.exports = isFunction;\n\n\n//# sourceURL=webpack://react-presentation-container/./node_modules/lodash/isFunction.js?");

/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/***/ ((module) => {

eval("/**\n * Checks if `value` is the\n * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)\n * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an object, else `false`.\n * @example\n *\n * _.isObject({});\n * // => true\n *\n * _.isObject([1, 2, 3]);\n * // => true\n *\n * _.isObject(_.noop);\n * // => true\n *\n * _.isObject(null);\n * // => false\n */\nfunction isObject(value) {\n  var type = typeof value;\n  return value != null && (type == 'object' || type == 'function');\n}\n\nmodule.exports = isObject;\n\n\n//# sourceURL=webpack://react-presentation-container/./node_modules/lodash/isObject.js?");

/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/***/ ((module) => {

eval("/**\n * Checks if `value` is object-like. A value is object-like if it's not `null`\n * and has a `typeof` result of \"object\".\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is object-like, else `false`.\n * @example\n *\n * _.isObjectLike({});\n * // => true\n *\n * _.isObjectLike([1, 2, 3]);\n * // => true\n *\n * _.isObjectLike(_.noop);\n * // => false\n *\n * _.isObjectLike(null);\n * // => false\n */\nfunction isObjectLike(value) {\n  return value != null && typeof value == 'object';\n}\n\nmodule.exports = isObjectLike;\n\n\n//# sourceURL=webpack://react-presentation-container/./node_modules/lodash/isObjectLike.js?");

/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ \"./node_modules/lodash/_baseGetTag.js\"),\n    isObjectLike = __webpack_require__(/*! ./isObjectLike */ \"./node_modules/lodash/isObjectLike.js\");\n\n/** `Object#toString` result references. */\nvar symbolTag = '[object Symbol]';\n\n/**\n * Checks if `value` is classified as a `Symbol` primitive or object.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.\n * @example\n *\n * _.isSymbol(Symbol.iterator);\n * // => true\n *\n * _.isSymbol('abc');\n * // => false\n */\nfunction isSymbol(value) {\n  return typeof value == 'symbol' ||\n    (isObjectLike(value) && baseGetTag(value) == symbolTag);\n}\n\nmodule.exports = isSymbol;\n\n\n//# sourceURL=webpack://react-presentation-container/./node_modules/lodash/isSymbol.js?");

/***/ }),

/***/ "./node_modules/lodash/memoize.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/memoize.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var MapCache = __webpack_require__(/*! ./_MapCache */ \"./node_modules/lodash/_MapCache.js\");\n\n/** Error message constants. */\nvar FUNC_ERROR_TEXT = 'Expected a function';\n\n/**\n * Creates a function that memoizes the result of `func`. If `resolver` is\n * provided, it determines the cache key for storing the result based on the\n * arguments provided to the memoized function. By default, the first argument\n * provided to the memoized function is used as the map cache key. The `func`\n * is invoked with the `this` binding of the memoized function.\n *\n * **Note:** The cache is exposed as the `cache` property on the memoized\n * function. Its creation may be customized by replacing the `_.memoize.Cache`\n * constructor with one whose instances implement the\n * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)\n * method interface of `clear`, `delete`, `get`, `has`, and `set`.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Function\n * @param {Function} func The function to have its output memoized.\n * @param {Function} [resolver] The function to resolve the cache key.\n * @returns {Function} Returns the new memoized function.\n * @example\n *\n * var object = { 'a': 1, 'b': 2 };\n * var other = { 'c': 3, 'd': 4 };\n *\n * var values = _.memoize(_.values);\n * values(object);\n * // => [1, 2]\n *\n * values(other);\n * // => [3, 4]\n *\n * object.a = 2;\n * values(object);\n * // => [1, 2]\n *\n * // Modify the result cache.\n * values.cache.set(object, ['a', 'b']);\n * values(object);\n * // => ['a', 'b']\n *\n * // Replace `_.memoize.Cache`.\n * _.memoize.Cache = WeakMap;\n */\nfunction memoize(func, resolver) {\n  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {\n    throw new TypeError(FUNC_ERROR_TEXT);\n  }\n  var memoized = function() {\n    var args = arguments,\n        key = resolver ? resolver.apply(this, args) : args[0],\n        cache = memoized.cache;\n\n    if (cache.has(key)) {\n      return cache.get(key);\n    }\n    var result = func.apply(this, args);\n    memoized.cache = cache.set(key, result) || cache;\n    return result;\n  };\n  memoized.cache = new (memoize.Cache || MapCache);\n  return memoized;\n}\n\n// Expose `MapCache`.\nmemoize.Cache = MapCache;\n\nmodule.exports = memoize;\n\n\n//# sourceURL=webpack://react-presentation-container/./node_modules/lodash/memoize.js?");

/***/ }),

/***/ "./node_modules/lodash/toString.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toString.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var baseToString = __webpack_require__(/*! ./_baseToString */ \"./node_modules/lodash/_baseToString.js\");\n\n/**\n * Converts `value` to a string. An empty string is returned for `null`\n * and `undefined` values. The sign of `-0` is preserved.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to convert.\n * @returns {string} Returns the converted string.\n * @example\n *\n * _.toString(null);\n * // => ''\n *\n * _.toString(-0);\n * // => '-0'\n *\n * _.toString([1, 2, 3]);\n * // => '1,2,3'\n */\nfunction toString(value) {\n  return value == null ? '' : baseToString(value);\n}\n\nmodule.exports = toString;\n\n\n//# sourceURL=webpack://react-presentation-container/./node_modules/lodash/toString.js?");

/***/ }),

/***/ "./node_modules/react/cjs/react.development.js":
/*!*****************************************************!*\
  !*** ./node_modules/react/cjs/react.development.js ***!
  \*****************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";
eval("/* module decorator */ module = __webpack_require__.nmd(module);\n/**\n * @license React\n * react.development.js\n *\n * Copyright (c) Meta Platforms, Inc. and affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n\n true &&\n  (function () {\n    function defineDeprecationWarning(methodName, info) {\n      Object.defineProperty(Component.prototype, methodName, {\n        get: function () {\n          console.warn(\n            \"%s(...) is deprecated in plain JavaScript React classes. %s\",\n            info[0],\n            info[1]\n          );\n        }\n      });\n    }\n    function getIteratorFn(maybeIterable) {\n      if (null === maybeIterable || \"object\" !== typeof maybeIterable)\n        return null;\n      maybeIterable =\n        (MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL]) ||\n        maybeIterable[\"@@iterator\"];\n      return \"function\" === typeof maybeIterable ? maybeIterable : null;\n    }\n    function warnNoop(publicInstance, callerName) {\n      publicInstance =\n        ((publicInstance = publicInstance.constructor) &&\n          (publicInstance.displayName || publicInstance.name)) ||\n        \"ReactClass\";\n      var warningKey = publicInstance + \".\" + callerName;\n      didWarnStateUpdateForUnmountedComponent[warningKey] ||\n        (console.error(\n          \"Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.\",\n          callerName,\n          publicInstance\n        ),\n        (didWarnStateUpdateForUnmountedComponent[warningKey] = !0));\n    }\n    function Component(props, context, updater) {\n      this.props = props;\n      this.context = context;\n      this.refs = emptyObject;\n      this.updater = updater || ReactNoopUpdateQueue;\n    }\n    function ComponentDummy() {}\n    function PureComponent(props, context, updater) {\n      this.props = props;\n      this.context = context;\n      this.refs = emptyObject;\n      this.updater = updater || ReactNoopUpdateQueue;\n    }\n    function testStringCoercion(value) {\n      return \"\" + value;\n    }\n    function checkKeyStringCoercion(value) {\n      try {\n        testStringCoercion(value);\n        var JSCompiler_inline_result = !1;\n      } catch (e) {\n        JSCompiler_inline_result = !0;\n      }\n      if (JSCompiler_inline_result) {\n        JSCompiler_inline_result = console;\n        var JSCompiler_temp_const = JSCompiler_inline_result.error;\n        var JSCompiler_inline_result$jscomp$0 =\n          (\"function\" === typeof Symbol &&\n            Symbol.toStringTag &&\n            value[Symbol.toStringTag]) ||\n          value.constructor.name ||\n          \"Object\";\n        JSCompiler_temp_const.call(\n          JSCompiler_inline_result,\n          \"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.\",\n          JSCompiler_inline_result$jscomp$0\n        );\n        return testStringCoercion(value);\n      }\n    }\n    function getComponentNameFromType(type) {\n      if (null == type) return null;\n      if (\"function\" === typeof type)\n        return type.$$typeof === REACT_CLIENT_REFERENCE$2\n          ? null\n          : type.displayName || type.name || null;\n      if (\"string\" === typeof type) return type;\n      switch (type) {\n        case REACT_FRAGMENT_TYPE:\n          return \"Fragment\";\n        case REACT_PORTAL_TYPE:\n          return \"Portal\";\n        case REACT_PROFILER_TYPE:\n          return \"Profiler\";\n        case REACT_STRICT_MODE_TYPE:\n          return \"StrictMode\";\n        case REACT_SUSPENSE_TYPE:\n          return \"Suspense\";\n        case REACT_SUSPENSE_LIST_TYPE:\n          return \"SuspenseList\";\n      }\n      if (\"object\" === typeof type)\n        switch (\n          (\"number\" === typeof type.tag &&\n            console.error(\n              \"Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.\"\n            ),\n          type.$$typeof)\n        ) {\n          case REACT_CONTEXT_TYPE:\n            return (type.displayName || \"Context\") + \".Provider\";\n          case REACT_CONSUMER_TYPE:\n            return (type._context.displayName || \"Context\") + \".Consumer\";\n          case REACT_FORWARD_REF_TYPE:\n            var innerType = type.render;\n            type = type.displayName;\n            type ||\n              ((type = innerType.displayName || innerType.name || \"\"),\n              (type = \"\" !== type ? \"ForwardRef(\" + type + \")\" : \"ForwardRef\"));\n            return type;\n          case REACT_MEMO_TYPE:\n            return (\n              (innerType = type.displayName || null),\n              null !== innerType\n                ? innerType\n                : getComponentNameFromType(type.type) || \"Memo\"\n            );\n          case REACT_LAZY_TYPE:\n            innerType = type._payload;\n            type = type._init;\n            try {\n              return getComponentNameFromType(type(innerType));\n            } catch (x) {}\n        }\n      return null;\n    }\n    function isValidElementType(type) {\n      return \"string\" === typeof type ||\n        \"function\" === typeof type ||\n        type === REACT_FRAGMENT_TYPE ||\n        type === REACT_PROFILER_TYPE ||\n        type === REACT_STRICT_MODE_TYPE ||\n        type === REACT_SUSPENSE_TYPE ||\n        type === REACT_SUSPENSE_LIST_TYPE ||\n        type === REACT_OFFSCREEN_TYPE ||\n        (\"object\" === typeof type &&\n          null !== type &&\n          (type.$$typeof === REACT_LAZY_TYPE ||\n            type.$$typeof === REACT_MEMO_TYPE ||\n            type.$$typeof === REACT_CONTEXT_TYPE ||\n            type.$$typeof === REACT_CONSUMER_TYPE ||\n            type.$$typeof === REACT_FORWARD_REF_TYPE ||\n            type.$$typeof === REACT_CLIENT_REFERENCE$1 ||\n            void 0 !== type.getModuleId))\n        ? !0\n        : !1;\n    }\n    function disabledLog() {}\n    function disableLogs() {\n      if (0 === disabledDepth) {\n        prevLog = console.log;\n        prevInfo = console.info;\n        prevWarn = console.warn;\n        prevError = console.error;\n        prevGroup = console.group;\n        prevGroupCollapsed = console.groupCollapsed;\n        prevGroupEnd = console.groupEnd;\n        var props = {\n          configurable: !0,\n          enumerable: !0,\n          value: disabledLog,\n          writable: !0\n        };\n        Object.defineProperties(console, {\n          info: props,\n          log: props,\n          warn: props,\n          error: props,\n          group: props,\n          groupCollapsed: props,\n          groupEnd: props\n        });\n      }\n      disabledDepth++;\n    }\n    function reenableLogs() {\n      disabledDepth--;\n      if (0 === disabledDepth) {\n        var props = { configurable: !0, enumerable: !0, writable: !0 };\n        Object.defineProperties(console, {\n          log: assign({}, props, { value: prevLog }),\n          info: assign({}, props, { value: prevInfo }),\n          warn: assign({}, props, { value: prevWarn }),\n          error: assign({}, props, { value: prevError }),\n          group: assign({}, props, { value: prevGroup }),\n          groupCollapsed: assign({}, props, { value: prevGroupCollapsed }),\n          groupEnd: assign({}, props, { value: prevGroupEnd })\n        });\n      }\n      0 > disabledDepth &&\n        console.error(\n          \"disabledDepth fell below zero. This is a bug in React. Please file an issue.\"\n        );\n    }\n    function describeBuiltInComponentFrame(name) {\n      if (void 0 === prefix)\n        try {\n          throw Error();\n        } catch (x) {\n          var match = x.stack.trim().match(/\\n( *(at )?)/);\n          prefix = (match && match[1]) || \"\";\n          suffix =\n            -1 < x.stack.indexOf(\"\\n    at\")\n              ? \" (<anonymous>)\"\n              : -1 < x.stack.indexOf(\"@\")\n                ? \"@unknown:0:0\"\n                : \"\";\n        }\n      return \"\\n\" + prefix + name + suffix;\n    }\n    function describeNativeComponentFrame(fn, construct) {\n      if (!fn || reentry) return \"\";\n      var frame = componentFrameCache.get(fn);\n      if (void 0 !== frame) return frame;\n      reentry = !0;\n      frame = Error.prepareStackTrace;\n      Error.prepareStackTrace = void 0;\n      var previousDispatcher = null;\n      previousDispatcher = ReactSharedInternals.H;\n      ReactSharedInternals.H = null;\n      disableLogs();\n      try {\n        var RunInRootFrame = {\n          DetermineComponentFrameRoot: function () {\n            try {\n              if (construct) {\n                var Fake = function () {\n                  throw Error();\n                };\n                Object.defineProperty(Fake.prototype, \"props\", {\n                  set: function () {\n                    throw Error();\n                  }\n                });\n                if (\"object\" === typeof Reflect && Reflect.construct) {\n                  try {\n                    Reflect.construct(Fake, []);\n                  } catch (x) {\n                    var control = x;\n                  }\n                  Reflect.construct(fn, [], Fake);\n                } else {\n                  try {\n                    Fake.call();\n                  } catch (x$0) {\n                    control = x$0;\n                  }\n                  fn.call(Fake.prototype);\n                }\n              } else {\n                try {\n                  throw Error();\n                } catch (x$1) {\n                  control = x$1;\n                }\n                (Fake = fn()) &&\n                  \"function\" === typeof Fake.catch &&\n                  Fake.catch(function () {});\n              }\n            } catch (sample) {\n              if (sample && control && \"string\" === typeof sample.stack)\n                return [sample.stack, control.stack];\n            }\n            return [null, null];\n          }\n        };\n        RunInRootFrame.DetermineComponentFrameRoot.displayName =\n          \"DetermineComponentFrameRoot\";\n        var namePropDescriptor = Object.getOwnPropertyDescriptor(\n          RunInRootFrame.DetermineComponentFrameRoot,\n          \"name\"\n        );\n        namePropDescriptor &&\n          namePropDescriptor.configurable &&\n          Object.defineProperty(\n            RunInRootFrame.DetermineComponentFrameRoot,\n            \"name\",\n            { value: \"DetermineComponentFrameRoot\" }\n          );\n        var _RunInRootFrame$Deter =\n            RunInRootFrame.DetermineComponentFrameRoot(),\n          sampleStack = _RunInRootFrame$Deter[0],\n          controlStack = _RunInRootFrame$Deter[1];\n        if (sampleStack && controlStack) {\n          var sampleLines = sampleStack.split(\"\\n\"),\n            controlLines = controlStack.split(\"\\n\");\n          for (\n            _RunInRootFrame$Deter = namePropDescriptor = 0;\n            namePropDescriptor < sampleLines.length &&\n            !sampleLines[namePropDescriptor].includes(\n              \"DetermineComponentFrameRoot\"\n            );\n\n          )\n            namePropDescriptor++;\n          for (\n            ;\n            _RunInRootFrame$Deter < controlLines.length &&\n            !controlLines[_RunInRootFrame$Deter].includes(\n              \"DetermineComponentFrameRoot\"\n            );\n\n          )\n            _RunInRootFrame$Deter++;\n          if (\n            namePropDescriptor === sampleLines.length ||\n            _RunInRootFrame$Deter === controlLines.length\n          )\n            for (\n              namePropDescriptor = sampleLines.length - 1,\n                _RunInRootFrame$Deter = controlLines.length - 1;\n              1 <= namePropDescriptor &&\n              0 <= _RunInRootFrame$Deter &&\n              sampleLines[namePropDescriptor] !==\n                controlLines[_RunInRootFrame$Deter];\n\n            )\n              _RunInRootFrame$Deter--;\n          for (\n            ;\n            1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter;\n            namePropDescriptor--, _RunInRootFrame$Deter--\n          )\n            if (\n              sampleLines[namePropDescriptor] !==\n              controlLines[_RunInRootFrame$Deter]\n            ) {\n              if (1 !== namePropDescriptor || 1 !== _RunInRootFrame$Deter) {\n                do\n                  if (\n                    (namePropDescriptor--,\n                    _RunInRootFrame$Deter--,\n                    0 > _RunInRootFrame$Deter ||\n                      sampleLines[namePropDescriptor] !==\n                        controlLines[_RunInRootFrame$Deter])\n                  ) {\n                    var _frame =\n                      \"\\n\" +\n                      sampleLines[namePropDescriptor].replace(\n                        \" at new \",\n                        \" at \"\n                      );\n                    fn.displayName &&\n                      _frame.includes(\"<anonymous>\") &&\n                      (_frame = _frame.replace(\"<anonymous>\", fn.displayName));\n                    \"function\" === typeof fn &&\n                      componentFrameCache.set(fn, _frame);\n                    return _frame;\n                  }\n                while (1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter);\n              }\n              break;\n            }\n        }\n      } finally {\n        (reentry = !1),\n          (ReactSharedInternals.H = previousDispatcher),\n          reenableLogs(),\n          (Error.prepareStackTrace = frame);\n      }\n      sampleLines = (sampleLines = fn ? fn.displayName || fn.name : \"\")\n        ? describeBuiltInComponentFrame(sampleLines)\n        : \"\";\n      \"function\" === typeof fn && componentFrameCache.set(fn, sampleLines);\n      return sampleLines;\n    }\n    function describeUnknownElementTypeFrameInDEV(type) {\n      if (null == type) return \"\";\n      if (\"function\" === typeof type) {\n        var prototype = type.prototype;\n        return describeNativeComponentFrame(\n          type,\n          !(!prototype || !prototype.isReactComponent)\n        );\n      }\n      if (\"string\" === typeof type) return describeBuiltInComponentFrame(type);\n      switch (type) {\n        case REACT_SUSPENSE_TYPE:\n          return describeBuiltInComponentFrame(\"Suspense\");\n        case REACT_SUSPENSE_LIST_TYPE:\n          return describeBuiltInComponentFrame(\"SuspenseList\");\n      }\n      if (\"object\" === typeof type)\n        switch (type.$$typeof) {\n          case REACT_FORWARD_REF_TYPE:\n            return (type = describeNativeComponentFrame(type.render, !1)), type;\n          case REACT_MEMO_TYPE:\n            return describeUnknownElementTypeFrameInDEV(type.type);\n          case REACT_LAZY_TYPE:\n            prototype = type._payload;\n            type = type._init;\n            try {\n              return describeUnknownElementTypeFrameInDEV(type(prototype));\n            } catch (x) {}\n        }\n      return \"\";\n    }\n    function getOwner() {\n      var dispatcher = ReactSharedInternals.A;\n      return null === dispatcher ? null : dispatcher.getOwner();\n    }\n    function hasValidKey(config) {\n      if (hasOwnProperty.call(config, \"key\")) {\n        var getter = Object.getOwnPropertyDescriptor(config, \"key\").get;\n        if (getter && getter.isReactWarning) return !1;\n      }\n      return void 0 !== config.key;\n    }\n    function defineKeyPropWarningGetter(props, displayName) {\n      function warnAboutAccessingKey() {\n        specialPropKeyWarningShown ||\n          ((specialPropKeyWarningShown = !0),\n          console.error(\n            \"%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)\",\n            displayName\n          ));\n      }\n      warnAboutAccessingKey.isReactWarning = !0;\n      Object.defineProperty(props, \"key\", {\n        get: warnAboutAccessingKey,\n        configurable: !0\n      });\n    }\n    function elementRefGetterWithDeprecationWarning() {\n      var componentName = getComponentNameFromType(this.type);\n      didWarnAboutElementRef[componentName] ||\n        ((didWarnAboutElementRef[componentName] = !0),\n        console.error(\n          \"Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.\"\n        ));\n      componentName = this.props.ref;\n      return void 0 !== componentName ? componentName : null;\n    }\n    function ReactElement(type, key, self, source, owner, props) {\n      self = props.ref;\n      type = {\n        $$typeof: REACT_ELEMENT_TYPE,\n        type: type,\n        key: key,\n        props: props,\n        _owner: owner\n      };\n      null !== (void 0 !== self ? self : null)\n        ? Object.defineProperty(type, \"ref\", {\n            enumerable: !1,\n            get: elementRefGetterWithDeprecationWarning\n          })\n        : Object.defineProperty(type, \"ref\", { enumerable: !1, value: null });\n      type._store = {};\n      Object.defineProperty(type._store, \"validated\", {\n        configurable: !1,\n        enumerable: !1,\n        writable: !0,\n        value: 0\n      });\n      Object.defineProperty(type, \"_debugInfo\", {\n        configurable: !1,\n        enumerable: !1,\n        writable: !0,\n        value: null\n      });\n      Object.freeze && (Object.freeze(type.props), Object.freeze(type));\n      return type;\n    }\n    function cloneAndReplaceKey(oldElement, newKey) {\n      newKey = ReactElement(\n        oldElement.type,\n        newKey,\n        void 0,\n        void 0,\n        oldElement._owner,\n        oldElement.props\n      );\n      newKey._store.validated = oldElement._store.validated;\n      return newKey;\n    }\n    function validateChildKeys(node, parentType) {\n      if (\n        \"object\" === typeof node &&\n        node &&\n        node.$$typeof !== REACT_CLIENT_REFERENCE\n      )\n        if (isArrayImpl(node))\n          for (var i = 0; i < node.length; i++) {\n            var child = node[i];\n            isValidElement(child) && validateExplicitKey(child, parentType);\n          }\n        else if (isValidElement(node))\n          node._store && (node._store.validated = 1);\n        else if (\n          ((i = getIteratorFn(node)),\n          \"function\" === typeof i &&\n            i !== node.entries &&\n            ((i = i.call(node)), i !== node))\n        )\n          for (; !(node = i.next()).done; )\n            isValidElement(node.value) &&\n              validateExplicitKey(node.value, parentType);\n    }\n    function isValidElement(object) {\n      return (\n        \"object\" === typeof object &&\n        null !== object &&\n        object.$$typeof === REACT_ELEMENT_TYPE\n      );\n    }\n    function validateExplicitKey(element, parentType) {\n      if (\n        element._store &&\n        !element._store.validated &&\n        null == element.key &&\n        ((element._store.validated = 1),\n        (parentType = getCurrentComponentErrorInfo(parentType)),\n        !ownerHasKeyUseWarning[parentType])\n      ) {\n        ownerHasKeyUseWarning[parentType] = !0;\n        var childOwner = \"\";\n        element &&\n          null != element._owner &&\n          element._owner !== getOwner() &&\n          ((childOwner = null),\n          \"number\" === typeof element._owner.tag\n            ? (childOwner = getComponentNameFromType(element._owner.type))\n            : \"string\" === typeof element._owner.name &&\n              (childOwner = element._owner.name),\n          (childOwner = \" It was passed a child from \" + childOwner + \".\"));\n        var prevGetCurrentStack = ReactSharedInternals.getCurrentStack;\n        ReactSharedInternals.getCurrentStack = function () {\n          var stack = describeUnknownElementTypeFrameInDEV(element.type);\n          prevGetCurrentStack && (stack += prevGetCurrentStack() || \"\");\n          return stack;\n        };\n        console.error(\n          'Each child in a list should have a unique \"key\" prop.%s%s See https://react.dev/link/warning-keys for more information.',\n          parentType,\n          childOwner\n        );\n        ReactSharedInternals.getCurrentStack = prevGetCurrentStack;\n      }\n    }\n    function getCurrentComponentErrorInfo(parentType) {\n      var info = \"\",\n        owner = getOwner();\n      owner &&\n        (owner = getComponentNameFromType(owner.type)) &&\n        (info = \"\\n\\nCheck the render method of `\" + owner + \"`.\");\n      info ||\n        ((parentType = getComponentNameFromType(parentType)) &&\n          (info =\n            \"\\n\\nCheck the top-level render call using <\" + parentType + \">.\"));\n      return info;\n    }\n    function escape(key) {\n      var escaperLookup = { \"=\": \"=0\", \":\": \"=2\" };\n      return (\n        \"$\" +\n        key.replace(/[=:]/g, function (match) {\n          return escaperLookup[match];\n        })\n      );\n    }\n    function getElementKey(element, index) {\n      return \"object\" === typeof element &&\n        null !== element &&\n        null != element.key\n        ? (checkKeyStringCoercion(element.key), escape(\"\" + element.key))\n        : index.toString(36);\n    }\n    function noop$1() {}\n    function resolveThenable(thenable) {\n      switch (thenable.status) {\n        case \"fulfilled\":\n          return thenable.value;\n        case \"rejected\":\n          throw thenable.reason;\n        default:\n          switch (\n            (\"string\" === typeof thenable.status\n              ? thenable.then(noop$1, noop$1)\n              : ((thenable.status = \"pending\"),\n                thenable.then(\n                  function (fulfilledValue) {\n                    \"pending\" === thenable.status &&\n                      ((thenable.status = \"fulfilled\"),\n                      (thenable.value = fulfilledValue));\n                  },\n                  function (error) {\n                    \"pending\" === thenable.status &&\n                      ((thenable.status = \"rejected\"),\n                      (thenable.reason = error));\n                  }\n                )),\n            thenable.status)\n          ) {\n            case \"fulfilled\":\n              return thenable.value;\n            case \"rejected\":\n              throw thenable.reason;\n          }\n      }\n      throw thenable;\n    }\n    function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {\n      var type = typeof children;\n      if (\"undefined\" === type || \"boolean\" === type) children = null;\n      var invokeCallback = !1;\n      if (null === children) invokeCallback = !0;\n      else\n        switch (type) {\n          case \"bigint\":\n          case \"string\":\n          case \"number\":\n            invokeCallback = !0;\n            break;\n          case \"object\":\n            switch (children.$$typeof) {\n              case REACT_ELEMENT_TYPE:\n              case REACT_PORTAL_TYPE:\n                invokeCallback = !0;\n                break;\n              case REACT_LAZY_TYPE:\n                return (\n                  (invokeCallback = children._init),\n                  mapIntoArray(\n                    invokeCallback(children._payload),\n                    array,\n                    escapedPrefix,\n                    nameSoFar,\n                    callback\n                  )\n                );\n            }\n        }\n      if (invokeCallback) {\n        invokeCallback = children;\n        callback = callback(invokeCallback);\n        var childKey =\n          \"\" === nameSoFar ? \".\" + getElementKey(invokeCallback, 0) : nameSoFar;\n        isArrayImpl(callback)\n          ? ((escapedPrefix = \"\"),\n            null != childKey &&\n              (escapedPrefix =\n                childKey.replace(userProvidedKeyEscapeRegex, \"$&/\") + \"/\"),\n            mapIntoArray(callback, array, escapedPrefix, \"\", function (c) {\n              return c;\n            }))\n          : null != callback &&\n            (isValidElement(callback) &&\n              (null != callback.key &&\n                ((invokeCallback && invokeCallback.key === callback.key) ||\n                  checkKeyStringCoercion(callback.key)),\n              (escapedPrefix = cloneAndReplaceKey(\n                callback,\n                escapedPrefix +\n                  (null == callback.key ||\n                  (invokeCallback && invokeCallback.key === callback.key)\n                    ? \"\"\n                    : (\"\" + callback.key).replace(\n                        userProvidedKeyEscapeRegex,\n                        \"$&/\"\n                      ) + \"/\") +\n                  childKey\n              )),\n              \"\" !== nameSoFar &&\n                null != invokeCallback &&\n                isValidElement(invokeCallback) &&\n                null == invokeCallback.key &&\n                invokeCallback._store &&\n                !invokeCallback._store.validated &&\n                (escapedPrefix._store.validated = 2),\n              (callback = escapedPrefix)),\n            array.push(callback));\n        return 1;\n      }\n      invokeCallback = 0;\n      childKey = \"\" === nameSoFar ? \".\" : nameSoFar + \":\";\n      if (isArrayImpl(children))\n        for (var i = 0; i < children.length; i++)\n          (nameSoFar = children[i]),\n            (type = childKey + getElementKey(nameSoFar, i)),\n            (invokeCallback += mapIntoArray(\n              nameSoFar,\n              array,\n              escapedPrefix,\n              type,\n              callback\n            ));\n      else if (((i = getIteratorFn(children)), \"function\" === typeof i))\n        for (\n          i === children.entries &&\n            (didWarnAboutMaps ||\n              console.warn(\n                \"Using Maps as children is not supported. Use an array of keyed ReactElements instead.\"\n              ),\n            (didWarnAboutMaps = !0)),\n            children = i.call(children),\n            i = 0;\n          !(nameSoFar = children.next()).done;\n\n        )\n          (nameSoFar = nameSoFar.value),\n            (type = childKey + getElementKey(nameSoFar, i++)),\n            (invokeCallback += mapIntoArray(\n              nameSoFar,\n              array,\n              escapedPrefix,\n              type,\n              callback\n            ));\n      else if (\"object\" === type) {\n        if (\"function\" === typeof children.then)\n          return mapIntoArray(\n            resolveThenable(children),\n            array,\n            escapedPrefix,\n            nameSoFar,\n            callback\n          );\n        array = String(children);\n        throw Error(\n          \"Objects are not valid as a React child (found: \" +\n            (\"[object Object]\" === array\n              ? \"object with keys {\" + Object.keys(children).join(\", \") + \"}\"\n              : array) +\n            \"). If you meant to render a collection of children, use an array instead.\"\n        );\n      }\n      return invokeCallback;\n    }\n    function mapChildren(children, func, context) {\n      if (null == children) return children;\n      var result = [],\n        count = 0;\n      mapIntoArray(children, result, \"\", \"\", function (child) {\n        return func.call(context, child, count++);\n      });\n      return result;\n    }\n    function lazyInitializer(payload) {\n      if (-1 === payload._status) {\n        var ctor = payload._result;\n        ctor = ctor();\n        ctor.then(\n          function (moduleObject) {\n            if (0 === payload._status || -1 === payload._status)\n              (payload._status = 1), (payload._result = moduleObject);\n          },\n          function (error) {\n            if (0 === payload._status || -1 === payload._status)\n              (payload._status = 2), (payload._result = error);\n          }\n        );\n        -1 === payload._status &&\n          ((payload._status = 0), (payload._result = ctor));\n      }\n      if (1 === payload._status)\n        return (\n          (ctor = payload._result),\n          void 0 === ctor &&\n            console.error(\n              \"lazy: Expected the result of a dynamic import() call. Instead received: %s\\n\\nYour code should look like: \\n  const MyComponent = lazy(() => import('./MyComponent'))\\n\\nDid you accidentally put curly braces around the import?\",\n              ctor\n            ),\n          \"default\" in ctor ||\n            console.error(\n              \"lazy: Expected the result of a dynamic import() call. Instead received: %s\\n\\nYour code should look like: \\n  const MyComponent = lazy(() => import('./MyComponent'))\",\n              ctor\n            ),\n          ctor.default\n        );\n      throw payload._result;\n    }\n    function resolveDispatcher() {\n      var dispatcher = ReactSharedInternals.H;\n      null === dispatcher &&\n        console.error(\n          \"Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\\n1. You might have mismatching versions of React and the renderer (such as React DOM)\\n2. You might be breaking the Rules of Hooks\\n3. You might have more than one copy of React in the same app\\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.\"\n        );\n      return dispatcher;\n    }\n    function noop() {}\n    function enqueueTask(task) {\n      if (null === enqueueTaskImpl)\n        try {\n          var requireString = (\"require\" + Math.random()).slice(0, 7);\n          enqueueTaskImpl = (module && module[requireString]).call(\n            module,\n            \"timers\"\n          ).setImmediate;\n        } catch (_err) {\n          enqueueTaskImpl = function (callback) {\n            !1 === didWarnAboutMessageChannel &&\n              ((didWarnAboutMessageChannel = !0),\n              \"undefined\" === typeof MessageChannel &&\n                console.error(\n                  \"This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning.\"\n                ));\n            var channel = new MessageChannel();\n            channel.port1.onmessage = callback;\n            channel.port2.postMessage(void 0);\n          };\n        }\n      return enqueueTaskImpl(task);\n    }\n    function aggregateErrors(errors) {\n      return 1 < errors.length && \"function\" === typeof AggregateError\n        ? new AggregateError(errors)\n        : errors[0];\n    }\n    function popActScope(prevActQueue, prevActScopeDepth) {\n      prevActScopeDepth !== actScopeDepth - 1 &&\n        console.error(\n          \"You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. \"\n        );\n      actScopeDepth = prevActScopeDepth;\n    }\n    function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {\n      var queue = ReactSharedInternals.actQueue;\n      if (null !== queue)\n        if (0 !== queue.length)\n          try {\n            flushActQueue(queue);\n            enqueueTask(function () {\n              return recursivelyFlushAsyncActWork(returnValue, resolve, reject);\n            });\n            return;\n          } catch (error) {\n            ReactSharedInternals.thrownErrors.push(error);\n          }\n        else ReactSharedInternals.actQueue = null;\n      0 < ReactSharedInternals.thrownErrors.length\n        ? ((queue = aggregateErrors(ReactSharedInternals.thrownErrors)),\n          (ReactSharedInternals.thrownErrors.length = 0),\n          reject(queue))\n        : resolve(returnValue);\n    }\n    function flushActQueue(queue) {\n      if (!isFlushing) {\n        isFlushing = !0;\n        var i = 0;\n        try {\n          for (; i < queue.length; i++) {\n            var callback = queue[i];\n            do {\n              ReactSharedInternals.didUsePromise = !1;\n              var continuation = callback(!1);\n              if (null !== continuation) {\n                if (ReactSharedInternals.didUsePromise) {\n                  queue[i] = callback;\n                  queue.splice(0, i);\n                  return;\n                }\n                callback = continuation;\n              } else break;\n            } while (1);\n          }\n          queue.length = 0;\n        } catch (error) {\n          queue.splice(0, i + 1), ReactSharedInternals.thrownErrors.push(error);\n        } finally {\n          isFlushing = !1;\n        }\n      }\n    }\n    \"undefined\" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&\n      \"function\" ===\n        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart &&\n      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());\n    var REACT_ELEMENT_TYPE = Symbol.for(\"react.transitional.element\"),\n      REACT_PORTAL_TYPE = Symbol.for(\"react.portal\"),\n      REACT_FRAGMENT_TYPE = Symbol.for(\"react.fragment\"),\n      REACT_STRICT_MODE_TYPE = Symbol.for(\"react.strict_mode\"),\n      REACT_PROFILER_TYPE = Symbol.for(\"react.profiler\");\n    Symbol.for(\"react.provider\");\n    var REACT_CONSUMER_TYPE = Symbol.for(\"react.consumer\"),\n      REACT_CONTEXT_TYPE = Symbol.for(\"react.context\"),\n      REACT_FORWARD_REF_TYPE = Symbol.for(\"react.forward_ref\"),\n      REACT_SUSPENSE_TYPE = Symbol.for(\"react.suspense\"),\n      REACT_SUSPENSE_LIST_TYPE = Symbol.for(\"react.suspense_list\"),\n      REACT_MEMO_TYPE = Symbol.for(\"react.memo\"),\n      REACT_LAZY_TYPE = Symbol.for(\"react.lazy\"),\n      REACT_OFFSCREEN_TYPE = Symbol.for(\"react.offscreen\"),\n      MAYBE_ITERATOR_SYMBOL = Symbol.iterator,\n      didWarnStateUpdateForUnmountedComponent = {},\n      ReactNoopUpdateQueue = {\n        isMounted: function () {\n          return !1;\n        },\n        enqueueForceUpdate: function (publicInstance) {\n          warnNoop(publicInstance, \"forceUpdate\");\n        },\n        enqueueReplaceState: function (publicInstance) {\n          warnNoop(publicInstance, \"replaceState\");\n        },\n        enqueueSetState: function (publicInstance) {\n          warnNoop(publicInstance, \"setState\");\n        }\n      },\n      assign = Object.assign,\n      emptyObject = {};\n    Object.freeze(emptyObject);\n    Component.prototype.isReactComponent = {};\n    Component.prototype.setState = function (partialState, callback) {\n      if (\n        \"object\" !== typeof partialState &&\n        \"function\" !== typeof partialState &&\n        null != partialState\n      )\n        throw Error(\n          \"takes an object of state variables to update or a function which returns an object of state variables.\"\n        );\n      this.updater.enqueueSetState(this, partialState, callback, \"setState\");\n    };\n    Component.prototype.forceUpdate = function (callback) {\n      this.updater.enqueueForceUpdate(this, callback, \"forceUpdate\");\n    };\n    var deprecatedAPIs = {\n        isMounted: [\n          \"isMounted\",\n          \"Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks.\"\n        ],\n        replaceState: [\n          \"replaceState\",\n          \"Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236).\"\n        ]\n      },\n      fnName;\n    for (fnName in deprecatedAPIs)\n      deprecatedAPIs.hasOwnProperty(fnName) &&\n        defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);\n    ComponentDummy.prototype = Component.prototype;\n    deprecatedAPIs = PureComponent.prototype = new ComponentDummy();\n    deprecatedAPIs.constructor = PureComponent;\n    assign(deprecatedAPIs, Component.prototype);\n    deprecatedAPIs.isPureReactComponent = !0;\n    var isArrayImpl = Array.isArray,\n      REACT_CLIENT_REFERENCE$2 = Symbol.for(\"react.client.reference\"),\n      ReactSharedInternals = {\n        H: null,\n        A: null,\n        T: null,\n        S: null,\n        actQueue: null,\n        isBatchingLegacy: !1,\n        didScheduleLegacyUpdate: !1,\n        didUsePromise: !1,\n        thrownErrors: [],\n        getCurrentStack: null\n      },\n      hasOwnProperty = Object.prototype.hasOwnProperty,\n      REACT_CLIENT_REFERENCE$1 = Symbol.for(\"react.client.reference\"),\n      disabledDepth = 0,\n      prevLog,\n      prevInfo,\n      prevWarn,\n      prevError,\n      prevGroup,\n      prevGroupCollapsed,\n      prevGroupEnd;\n    disabledLog.__reactDisabledLog = !0;\n    var prefix,\n      suffix,\n      reentry = !1;\n    var componentFrameCache = new (\n      \"function\" === typeof WeakMap ? WeakMap : Map\n    )();\n    var REACT_CLIENT_REFERENCE = Symbol.for(\"react.client.reference\"),\n      specialPropKeyWarningShown,\n      didWarnAboutOldJSXRuntime;\n    var didWarnAboutElementRef = {};\n    var ownerHasKeyUseWarning = {},\n      didWarnAboutMaps = !1,\n      userProvidedKeyEscapeRegex = /\\/+/g,\n      reportGlobalError =\n        \"function\" === typeof reportError\n          ? reportError\n          : function (error) {\n              if (\n                \"object\" === typeof window &&\n                \"function\" === typeof window.ErrorEvent\n              ) {\n                var event = new window.ErrorEvent(\"error\", {\n                  bubbles: !0,\n                  cancelable: !0,\n                  message:\n                    \"object\" === typeof error &&\n                    null !== error &&\n                    \"string\" === typeof error.message\n                      ? String(error.message)\n                      : String(error),\n                  error: error\n                });\n                if (!window.dispatchEvent(event)) return;\n              } else if (\n                \"object\" === typeof process &&\n                \"function\" === typeof process.emit\n              ) {\n                process.emit(\"uncaughtException\", error);\n                return;\n              }\n              console.error(error);\n            },\n      didWarnAboutMessageChannel = !1,\n      enqueueTaskImpl = null,\n      actScopeDepth = 0,\n      didWarnNoAwaitAct = !1,\n      isFlushing = !1,\n      queueSeveralMicrotasks =\n        \"function\" === typeof queueMicrotask\n          ? function (callback) {\n              queueMicrotask(function () {\n                return queueMicrotask(callback);\n              });\n            }\n          : enqueueTask;\n    exports.Children = {\n      map: mapChildren,\n      forEach: function (children, forEachFunc, forEachContext) {\n        mapChildren(\n          children,\n          function () {\n            forEachFunc.apply(this, arguments);\n          },\n          forEachContext\n        );\n      },\n      count: function (children) {\n        var n = 0;\n        mapChildren(children, function () {\n          n++;\n        });\n        return n;\n      },\n      toArray: function (children) {\n        return (\n          mapChildren(children, function (child) {\n            return child;\n          }) || []\n        );\n      },\n      only: function (children) {\n        if (!isValidElement(children))\n          throw Error(\n            \"React.Children.only expected to receive a single React element child.\"\n          );\n        return children;\n      }\n    };\n    exports.Component = Component;\n    exports.Fragment = REACT_FRAGMENT_TYPE;\n    exports.Profiler = REACT_PROFILER_TYPE;\n    exports.PureComponent = PureComponent;\n    exports.StrictMode = REACT_STRICT_MODE_TYPE;\n    exports.Suspense = REACT_SUSPENSE_TYPE;\n    exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE =\n      ReactSharedInternals;\n    exports.act = function (callback) {\n      var prevActQueue = ReactSharedInternals.actQueue,\n        prevActScopeDepth = actScopeDepth;\n      actScopeDepth++;\n      var queue = (ReactSharedInternals.actQueue =\n          null !== prevActQueue ? prevActQueue : []),\n        didAwaitActCall = !1;\n      try {\n        var result = callback();\n      } catch (error) {\n        ReactSharedInternals.thrownErrors.push(error);\n      }\n      if (0 < ReactSharedInternals.thrownErrors.length)\n        throw (\n          (popActScope(prevActQueue, prevActScopeDepth),\n          (callback = aggregateErrors(ReactSharedInternals.thrownErrors)),\n          (ReactSharedInternals.thrownErrors.length = 0),\n          callback)\n        );\n      if (\n        null !== result &&\n        \"object\" === typeof result &&\n        \"function\" === typeof result.then\n      ) {\n        var thenable = result;\n        queueSeveralMicrotasks(function () {\n          didAwaitActCall ||\n            didWarnNoAwaitAct ||\n            ((didWarnNoAwaitAct = !0),\n            console.error(\n              \"You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);\"\n            ));\n        });\n        return {\n          then: function (resolve, reject) {\n            didAwaitActCall = !0;\n            thenable.then(\n              function (returnValue) {\n                popActScope(prevActQueue, prevActScopeDepth);\n                if (0 === prevActScopeDepth) {\n                  try {\n                    flushActQueue(queue),\n                      enqueueTask(function () {\n                        return recursivelyFlushAsyncActWork(\n                          returnValue,\n                          resolve,\n                          reject\n                        );\n                      });\n                  } catch (error$2) {\n                    ReactSharedInternals.thrownErrors.push(error$2);\n                  }\n                  if (0 < ReactSharedInternals.thrownErrors.length) {\n                    var _thrownError = aggregateErrors(\n                      ReactSharedInternals.thrownErrors\n                    );\n                    ReactSharedInternals.thrownErrors.length = 0;\n                    reject(_thrownError);\n                  }\n                } else resolve(returnValue);\n              },\n              function (error) {\n                popActScope(prevActQueue, prevActScopeDepth);\n                0 < ReactSharedInternals.thrownErrors.length\n                  ? ((error = aggregateErrors(\n                      ReactSharedInternals.thrownErrors\n                    )),\n                    (ReactSharedInternals.thrownErrors.length = 0),\n                    reject(error))\n                  : reject(error);\n              }\n            );\n          }\n        };\n      }\n      var returnValue$jscomp$0 = result;\n      popActScope(prevActQueue, prevActScopeDepth);\n      0 === prevActScopeDepth &&\n        (flushActQueue(queue),\n        0 !== queue.length &&\n          queueSeveralMicrotasks(function () {\n            didAwaitActCall ||\n              didWarnNoAwaitAct ||\n              ((didWarnNoAwaitAct = !0),\n              console.error(\n                \"A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\\n\\nawait act(() => ...)\"\n              ));\n          }),\n        (ReactSharedInternals.actQueue = null));\n      if (0 < ReactSharedInternals.thrownErrors.length)\n        throw (\n          ((callback = aggregateErrors(ReactSharedInternals.thrownErrors)),\n          (ReactSharedInternals.thrownErrors.length = 0),\n          callback)\n        );\n      return {\n        then: function (resolve, reject) {\n          didAwaitActCall = !0;\n          0 === prevActScopeDepth\n            ? ((ReactSharedInternals.actQueue = queue),\n              enqueueTask(function () {\n                return recursivelyFlushAsyncActWork(\n                  returnValue$jscomp$0,\n                  resolve,\n                  reject\n                );\n              }))\n            : resolve(returnValue$jscomp$0);\n        }\n      };\n    };\n    exports.cache = function (fn) {\n      return function () {\n        return fn.apply(null, arguments);\n      };\n    };\n    exports.cloneElement = function (element, config, children) {\n      if (null === element || void 0 === element)\n        throw Error(\n          \"The argument must be a React element, but you passed \" +\n            element +\n            \".\"\n        );\n      var props = assign({}, element.props),\n        key = element.key,\n        owner = element._owner;\n      if (null != config) {\n        var JSCompiler_inline_result;\n        a: {\n          if (\n            hasOwnProperty.call(config, \"ref\") &&\n            (JSCompiler_inline_result = Object.getOwnPropertyDescriptor(\n              config,\n              \"ref\"\n            ).get) &&\n            JSCompiler_inline_result.isReactWarning\n          ) {\n            JSCompiler_inline_result = !1;\n            break a;\n          }\n          JSCompiler_inline_result = void 0 !== config.ref;\n        }\n        JSCompiler_inline_result && (owner = getOwner());\n        hasValidKey(config) &&\n          (checkKeyStringCoercion(config.key), (key = \"\" + config.key));\n        for (propName in config)\n          !hasOwnProperty.call(config, propName) ||\n            \"key\" === propName ||\n            \"__self\" === propName ||\n            \"__source\" === propName ||\n            (\"ref\" === propName && void 0 === config.ref) ||\n            (props[propName] = config[propName]);\n      }\n      var propName = arguments.length - 2;\n      if (1 === propName) props.children = children;\n      else if (1 < propName) {\n        JSCompiler_inline_result = Array(propName);\n        for (var i = 0; i < propName; i++)\n          JSCompiler_inline_result[i] = arguments[i + 2];\n        props.children = JSCompiler_inline_result;\n      }\n      props = ReactElement(element.type, key, void 0, void 0, owner, props);\n      for (key = 2; key < arguments.length; key++)\n        validateChildKeys(arguments[key], props.type);\n      return props;\n    };\n    exports.createContext = function (defaultValue) {\n      defaultValue = {\n        $$typeof: REACT_CONTEXT_TYPE,\n        _currentValue: defaultValue,\n        _currentValue2: defaultValue,\n        _threadCount: 0,\n        Provider: null,\n        Consumer: null\n      };\n      defaultValue.Provider = defaultValue;\n      defaultValue.Consumer = {\n        $$typeof: REACT_CONSUMER_TYPE,\n        _context: defaultValue\n      };\n      defaultValue._currentRenderer = null;\n      defaultValue._currentRenderer2 = null;\n      return defaultValue;\n    };\n    exports.createElement = function (type, config, children) {\n      if (isValidElementType(type))\n        for (var i = 2; i < arguments.length; i++)\n          validateChildKeys(arguments[i], type);\n      else {\n        i = \"\";\n        if (\n          void 0 === type ||\n          (\"object\" === typeof type &&\n            null !== type &&\n            0 === Object.keys(type).length)\n        )\n          i +=\n            \" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.\";\n        if (null === type) var typeString = \"null\";\n        else\n          isArrayImpl(type)\n            ? (typeString = \"array\")\n            : void 0 !== type && type.$$typeof === REACT_ELEMENT_TYPE\n              ? ((typeString =\n                  \"<\" +\n                  (getComponentNameFromType(type.type) || \"Unknown\") +\n                  \" />\"),\n                (i =\n                  \" Did you accidentally export a JSX literal instead of a component?\"))\n              : (typeString = typeof type);\n        console.error(\n          \"React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s\",\n          typeString,\n          i\n        );\n      }\n      var propName;\n      i = {};\n      typeString = null;\n      if (null != config)\n        for (propName in (didWarnAboutOldJSXRuntime ||\n          !(\"__self\" in config) ||\n          \"key\" in config ||\n          ((didWarnAboutOldJSXRuntime = !0),\n          console.warn(\n            \"Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform\"\n          )),\n        hasValidKey(config) &&\n          (checkKeyStringCoercion(config.key), (typeString = \"\" + config.key)),\n        config))\n          hasOwnProperty.call(config, propName) &&\n            \"key\" !== propName &&\n            \"__self\" !== propName &&\n            \"__source\" !== propName &&\n            (i[propName] = config[propName]);\n      var childrenLength = arguments.length - 2;\n      if (1 === childrenLength) i.children = children;\n      else if (1 < childrenLength) {\n        for (\n          var childArray = Array(childrenLength), _i = 0;\n          _i < childrenLength;\n          _i++\n        )\n          childArray[_i] = arguments[_i + 2];\n        Object.freeze && Object.freeze(childArray);\n        i.children = childArray;\n      }\n      if (type && type.defaultProps)\n        for (propName in ((childrenLength = type.defaultProps), childrenLength))\n          void 0 === i[propName] && (i[propName] = childrenLength[propName]);\n      typeString &&\n        defineKeyPropWarningGetter(\n          i,\n          \"function\" === typeof type\n            ? type.displayName || type.name || \"Unknown\"\n            : type\n        );\n      return ReactElement(type, typeString, void 0, void 0, getOwner(), i);\n    };\n    exports.createRef = function () {\n      var refObject = { current: null };\n      Object.seal(refObject);\n      return refObject;\n    };\n    exports.forwardRef = function (render) {\n      null != render && render.$$typeof === REACT_MEMO_TYPE\n        ? console.error(\n            \"forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).\"\n          )\n        : \"function\" !== typeof render\n          ? console.error(\n              \"forwardRef requires a render function but was given %s.\",\n              null === render ? \"null\" : typeof render\n            )\n          : 0 !== render.length &&\n            2 !== render.length &&\n            console.error(\n              \"forwardRef render functions accept exactly two parameters: props and ref. %s\",\n              1 === render.length\n                ? \"Did you forget to use the ref parameter?\"\n                : \"Any additional parameter will be undefined.\"\n            );\n      null != render &&\n        null != render.defaultProps &&\n        console.error(\n          \"forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?\"\n        );\n      var elementType = { $$typeof: REACT_FORWARD_REF_TYPE, render: render },\n        ownName;\n      Object.defineProperty(elementType, \"displayName\", {\n        enumerable: !1,\n        configurable: !0,\n        get: function () {\n          return ownName;\n        },\n        set: function (name) {\n          ownName = name;\n          render.name ||\n            render.displayName ||\n            (Object.defineProperty(render, \"name\", { value: name }),\n            (render.displayName = name));\n        }\n      });\n      return elementType;\n    };\n    exports.isValidElement = isValidElement;\n    exports.lazy = function (ctor) {\n      return {\n        $$typeof: REACT_LAZY_TYPE,\n        _payload: { _status: -1, _result: ctor },\n        _init: lazyInitializer\n      };\n    };\n    exports.memo = function (type, compare) {\n      isValidElementType(type) ||\n        console.error(\n          \"memo: The first argument must be a component. Instead received: %s\",\n          null === type ? \"null\" : typeof type\n        );\n      compare = {\n        $$typeof: REACT_MEMO_TYPE,\n        type: type,\n        compare: void 0 === compare ? null : compare\n      };\n      var ownName;\n      Object.defineProperty(compare, \"displayName\", {\n        enumerable: !1,\n        configurable: !0,\n        get: function () {\n          return ownName;\n        },\n        set: function (name) {\n          ownName = name;\n          type.name ||\n            type.displayName ||\n            (Object.defineProperty(type, \"name\", { value: name }),\n            (type.displayName = name));\n        }\n      });\n      return compare;\n    };\n    exports.startTransition = function (scope) {\n      var prevTransition = ReactSharedInternals.T,\n        currentTransition = {};\n      ReactSharedInternals.T = currentTransition;\n      currentTransition._updatedFibers = new Set();\n      try {\n        var returnValue = scope(),\n          onStartTransitionFinish = ReactSharedInternals.S;\n        null !== onStartTransitionFinish &&\n          onStartTransitionFinish(currentTransition, returnValue);\n        \"object\" === typeof returnValue &&\n          null !== returnValue &&\n          \"function\" === typeof returnValue.then &&\n          returnValue.then(noop, reportGlobalError);\n      } catch (error) {\n        reportGlobalError(error);\n      } finally {\n        null === prevTransition &&\n          currentTransition._updatedFibers &&\n          ((scope = currentTransition._updatedFibers.size),\n          currentTransition._updatedFibers.clear(),\n          10 < scope &&\n            console.warn(\n              \"Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.\"\n            )),\n          (ReactSharedInternals.T = prevTransition);\n      }\n    };\n    exports.unstable_useCacheRefresh = function () {\n      return resolveDispatcher().useCacheRefresh();\n    };\n    exports.use = function (usable) {\n      return resolveDispatcher().use(usable);\n    };\n    exports.useActionState = function (action, initialState, permalink) {\n      return resolveDispatcher().useActionState(\n        action,\n        initialState,\n        permalink\n      );\n    };\n    exports.useCallback = function (callback, deps) {\n      return resolveDispatcher().useCallback(callback, deps);\n    };\n    exports.useContext = function (Context) {\n      var dispatcher = resolveDispatcher();\n      Context.$$typeof === REACT_CONSUMER_TYPE &&\n        console.error(\n          \"Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?\"\n        );\n      return dispatcher.useContext(Context);\n    };\n    exports.useDebugValue = function (value, formatterFn) {\n      return resolveDispatcher().useDebugValue(value, formatterFn);\n    };\n    exports.useDeferredValue = function (value, initialValue) {\n      return resolveDispatcher().useDeferredValue(value, initialValue);\n    };\n    exports.useEffect = function (create, deps) {\n      return resolveDispatcher().useEffect(create, deps);\n    };\n    exports.useId = function () {\n      return resolveDispatcher().useId();\n    };\n    exports.useImperativeHandle = function (ref, create, deps) {\n      return resolveDispatcher().useImperativeHandle(ref, create, deps);\n    };\n    exports.useInsertionEffect = function (create, deps) {\n      return resolveDispatcher().useInsertionEffect(create, deps);\n    };\n    exports.useLayoutEffect = function (create, deps) {\n      return resolveDispatcher().useLayoutEffect(create, deps);\n    };\n    exports.useMemo = function (create, deps) {\n      return resolveDispatcher().useMemo(create, deps);\n    };\n    exports.useOptimistic = function (passthrough, reducer) {\n      return resolveDispatcher().useOptimistic(passthrough, reducer);\n    };\n    exports.useReducer = function (reducer, initialArg, init) {\n      return resolveDispatcher().useReducer(reducer, initialArg, init);\n    };\n    exports.useRef = function (initialValue) {\n      return resolveDispatcher().useRef(initialValue);\n    };\n    exports.useState = function (initialState) {\n      return resolveDispatcher().useState(initialState);\n    };\n    exports.useSyncExternalStore = function (\n      subscribe,\n      getSnapshot,\n      getServerSnapshot\n    ) {\n      return resolveDispatcher().useSyncExternalStore(\n        subscribe,\n        getSnapshot,\n        getServerSnapshot\n      );\n    };\n    exports.useTransition = function () {\n      return resolveDispatcher().useTransition();\n    };\n    exports.version = \"19.0.0\";\n    \"undefined\" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&\n      \"function\" ===\n        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop &&\n      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());\n  })();\n\n\n//# sourceURL=webpack://react-presentation-container/./node_modules/react/cjs/react.development.js?");

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nif (false) {} else {\n  module.exports = __webpack_require__(/*! ./cjs/react.development.js */ \"./node_modules/react/cjs/react.development.js\");\n}\n\n\n//# sourceURL=webpack://react-presentation-container/./node_modules/react/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});