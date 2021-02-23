/*
 * bbo
 * bbo is a utility library of zero dependencies for javascript.
 * (c) 2011 - 2020
 * https://github.com/tnfe/bbo.git
 * version 1.1.24
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.bbo = factory());
}(this, (function () { 'use strict';

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _toArray(arr) {
    return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest();
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function getTag(src) {
    return Object.prototype.toString.call(src);
  }

  function isString(str) {
    return getTag(str) === '[object String]';
  }

  function isFunction(func) {
    return getTag(func) === '[object Function]';
  }

  var version = '1.1.24';

  var globalObject = null;

  function getGlobalObject() {
    if (globalObject !== null) {
      return globalObject;
    }
    /* istanbul ignore next */
    // It's hard to mock the global variables. This code surely works fine. I hope :)


    if (typeof global === 'object' && global.Object === Object) {
      // NodeJS global object
      globalObject = global;
    } else if (typeof self === 'object' && self.Object === Object) {
      // self property from Window object
      globalObject = self;
    } else {
      // Other cases. Function constructor always has the context as global object
      // eslint-disable-next-line no-new-func
      globalObject = new Function('return this')();
    }

    return globalObject;
  }

  /* eslint-disable no-invalid-this */
  var globalObject$1 = getGlobalObject();
  var previous = globalObject$1.bbo;
  function noConflict() {
    if (this === globalObject$1.bbo) {
      globalObject$1.bbo = previous;
    }

    return this;
  }

  function ua(lower) {
    return lower ? window.navigator.userAgent.toLowerCase() : window.navigator.userAgent;
  }

  /**
   * detect IOS
   * From https://stackoverflow.com/questions/9038625/detect-if-device-is-ios
   * more see:
   * https://github.com/madrobby/zepto/blob/master/src/detect.js#files
   */

  function isIOS() {
    return /iPad|iPhone|iPod/.test(ua());
  }

  function iPhone() {
    return /iPhone/.test(ua());
  }

  function isIPad() {
    return /iPad/.test(ua());
  }

  /**
   * detect Android
   * From https://stackoverflow.com/questions/6031412/detect-android-phone-via-javascript-jquery
   */

  function isAndroid() {
    return ua('l').indexOf('android') > -1;
  }

  /**
   * detect PC / Mobile
   * From https://stackoverflow.com/questions/3514784/what-is-the-best-way-to-detect-a-mobile-device-in-jquery
   */

  function isMobile() {
    return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(ua('l'));
  }

  /**
   * detect PC / Mobile
   * From https://stackoverflow.com/questions/3514784/what-is-the-best-way-to-detect-a-mobile-device-in-jquery
   */

  function isPC() {
    return !isMobile();
  }

  function isWeixin() {
    return /MicroMessenger/i.test(ua('l')); // 微信
  }

  function isNewsApp() {
    return /qqnews/.test(ua()); // 腾讯新闻app
  }

  function isQQ() {
    return /qq\//.test(ua('l')); // 手机QQ
  }

  function isQQbrowser() {
    return /mqqbrowser\//.test(ua('l')); // QQ浏览器
  }

  function isTenvideo() {
    return /qqlivebrowser/.test(ua('l')); // 腾讯视频
  }

  function isWeiShi() {
    return /weishi/.test(ua('l')); // 腾讯微视
  }

  function isIphoneXmodel() {
    // X XS, XS Max, XR
    var xSeriesConfig = [{
      devicePixelRatio: 3,
      width: 375,
      height: 812
    }, {
      devicePixelRatio: 3,
      width: 414,
      height: 896
    }, {
      devicePixelRatio: 2,
      width: 414,
      height: 896
    }];

    if (typeof window !== 'undefined' && window) {
      var _window = window,
          devicePixelRatio = _window.devicePixelRatio,
          screen = _window.screen;
      var width = screen.width,
          height = screen.height;
      return xSeriesConfig.some(item => item.devicePixelRatio === devicePixelRatio && item.width === width && item.height === height);
    }

    return false;
  }

  /**
   * ie version
   * From https://codepen.io/gapcode/pen/vEJNZN
   * IE 10 ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';
   * IE 11 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';
   * Edge 12 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';
   * Edge 13 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';
   */

  function ieVersion() {
    var uakit = ua();
    var msie = uakit.indexOf('MSIE ');

    if (msie > 0) {
      return parseInt(uakit.substring(msie + 5, uakit.indexOf('.', msie)), 10);
    }

    var trident = uakit.indexOf('Trident/');

    if (trident > 0) {
      var rv = uakit.indexOf('rv:');
      return parseInt(uakit.substring(rv + 3, uakit.indexOf('.', rv)), 10);
    }

    var edge = uakit.indexOf('Edge/');

    if (edge > 0) {
      return parseInt(ua.substring(edge + 5, uakit.indexOf('.', edge)), 10);
    }

    return '';
  }

  function isIE() {
    return ieVersion() > 0;
  }

  function attr(el, ruleName, val) {
    el.setAttribute(ruleName, val);
  }

  function c(t, cn, i, id) {
    var el = document.createElement(t);

    if (cn) {
      attr(el, 'class', cn);
    }

    if (i) {
      el.innerHTML = i;
    }

    if (id) {
      attr(el, 'id', id);
    }

    return el;
  }

  function g(i) {
    return document.getElementById(i);
  }

  /************************************************************************
   * LOGS
   *************************************************************************/
  function log(msg, styles) {
    var ele = g('_bbo_log');

    if (ele === null) {
      ele = c('div');
      attr(ele, 'id', '_bbo_log');
      attr(ele, 'style', 'position:fixed;left:0;top:0;z-index:9999;padding:4px;');
      document.body.appendChild(ele);
    }

    if (styles) {
      for (var style in styles) {
        if (Object.prototype.hasOwnProperty.call(styles, style)) {
          ele.style[style] = styles[style];
        }
      }
    }

    ele.innerHTML = msg;
  }

  /**
   * arguments to array
   */

  /**
   * Converts the arguments object to an array object and slice it.
   * first defalult is 0.
   * @export
   * @param {*} $arguments
   * @param {*} first
   * @returns
   */
  function args($arguments, first) {
    return Array.prototype.slice.call($arguments, first || 0);
  }

  /************************************************************************
   *   Private Method
   *************************************************************************/

  var _cache = {
    urls: {},
    logs: {}
  };
  /**
   * bbo.logs('only id&10', 1, 2);
   */

  function logs() {
    if (window.console && window.console.log) {
      var onlyId = String(arguments[0]);
      var times = parseInt(onlyId.split('&')[1], 10) || 10;
      var logsCache = _cache.logs;
      if (!logsCache[onlyId]) logsCache[onlyId] = {};
      if (!logsCache[onlyId].once) logsCache[onlyId].once = 1;

      if (logsCache[onlyId].once <= times) {
        console.log.apply(console, args(arguments, 1));
        logsCache[onlyId].once++;
      }
    }
  }

  /**
   * a trash object
   */
  var trash = {
    clear: () => {
      for (var key in trash) {
        if (key !== 'log' && key !== 'clear') delete trash[key];
      }
    },
    log: () => {
      for (var key in trash) {
        if (key !== 'log' && key !== 'clear') console.log('bbo.trash:: ', key, trash[key]);
      }
    }
  };

  var noop = () => {};

  function removeConsole(clear) {
    try {
      if (!window.console) window.console = {};
      window.console.log = window.console.info = window.console.dir = window.console.warn = window.console.trace = noop;
      if (clear === 'clear' && window.console.clear) window.console.clear();
    } catch (e) {}
  }

  var merge = function () {
    for (var _len = arguments.length, objs = new Array(_len), _key = 0; _key < _len; _key++) {
      objs[_key] = arguments[_key];
    }

    return [].concat(objs).reduce((acc, obj) => Object.keys(obj).reduce((a, k) => {
      acc[k] = acc.hasOwnProperty(k) ? [].concat(acc[k]).concat(obj[k]) : obj[k];
      return acc;
    }, {}), {});
  };

  var over = function () {
    for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
      fns[_key] = arguments[_key];
    }

    return function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return fns.map(fn => fn.apply(null, args));
    };
  };

  var call = function (key) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return context => context[key].apply(context, args);
  };

  function hasOwnProperty(obj, keyName) {
    return Object.prototype.hasOwnProperty.call(obj, keyName);
  }

  function setStyle(el, ruleName, val) {
    el.style[ruleName] = val;
  }

  /**
   * trigger event
   * https://stackoverflow.com/questions/2490825/how-to-trigger-event-in-javascript
   */
  var trigger = (element, event, eventType) => {
    // delete document.createEventObject of ie
    var e = document.createEvent(eventType || 'HTMLEvents');
    e.initEvent(event, true, true);
    element.dispatchEvent(e);
  };

  /**
   * open new url dont not blocked by browser
   */

  var open = href => {
    var id = '_bbo_open_proxy';
    var a = g(id) || c('a', id, '', id);
    setStyle(a, 'display', 'none');
    attr(a, 'href', href);
    attr(a, 'target', '_blank');
    if (!a.parentNode) document.body.appendChild(a);
    trigger(a, 'click', 'MouseEvents');
  };

  var stopPropagation = event => {
    var e = event || window.event;
    var stop = e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true;
    return stop;
  };

  function gc(cn) {
    return document.getElementsByClassName(cn);
  }

  function query(i) {
    return document.querySelector(i);
  }

  var show = function () {
    for (var _len = arguments.length, el = new Array(_len), _key = 0; _key < _len; _key++) {
      el[_key] = arguments[_key];
    }

    return [].concat(el).forEach(e => {
      e.style.display = '';
    });
  };

  var hide = function () {
    for (var _len = arguments.length, el = new Array(_len), _key = 0; _key < _len; _key++) {
      el[_key] = arguments[_key];
    }

    return [].concat(el).forEach(e => {
      e.style.display = 'none';
    });
  };

  var elementContains = (parent, child) => parent !== child && parent.contains(child);

  var getStyle = (el, ruleName) => getComputedStyle(el)[ruleName];

  /**
   * generate uuid
   * From https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
   */
  function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0;
      var v = c === 'x' ? r : r & 0x3 | 0x8;
      return v.toString(16);
    });
  }

  function isArray(arr) {
    return getTag(arr) === '[object Array]';
  }

  function isMap(map) {
    return getTag(map) === '[object Map]';
  }

  function isSet(set) {
    return getTag(set) === '[object Set]';
  }

  /**
   * Gets the size of `collection` by returning its length for array-like
   * values or the number of own enumerable string keyed properties for objects.
   *
   * @category Collection
   * @param {Array|Object|string} collection The collection to inspect.
   * @returns {number} Returns the collection size.
   */

  function size(collection) {
    if (collection === null || collection === undefined) {
      return 0;
    }

    if (isArray(collection) || isString(collection)) {
      return collection.length;
    }

    if (isMap(collection) || isSet(collection)) {
      return collection.size;
    }

    return Object.keys(collection).length;
  }

  /**
   * string hash map
   * From https://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript-jquery
   */
  function hash(str) {
    var _str = String(str);

    var hash = 0;
    var i;
    var chr;
    if (size(_str) === 0) return hash;

    for (i = 0; i < _str.length; i++) {
      chr = _str.charCodeAt(i);
      hash = (hash << 5) - hash + chr;
      hash |= 0; // Convert to 32bit integer
    }

    return hash;
  }

  /**
   * is typeof type
   */
  var isTypeof = (val, type) => {
    return Object.prototype.toString.call(val).slice(8, -1).toLowerCase() === type;
  };

  /**
   * map condition judge
   *  bbo.judge = bbo.judgment
   */

  function judge(v, vals, strict) {
    if (!isTypeof(vals, 'array')) return false;

    for (var key in vals) {
      if (strict) {
        if (v === vals[key]) return true;
      } else {
        // eslint-disable-next-line eqeqeq
        if (v == vals[key]) return true;
      }
    }

    return false;
  }

  var getType = v => v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name.toLowerCase();

  function construct() {
    var classs = arguments[0];
    return new (Function.prototype.bind.apply(classs, arguments))();
  }

  /**
   * Gets all the formal parameter names of a function
   * https://www.zhihu.com/question/28912825
   */
  function paramsName(fn) {
    return /\(\s*([\s\S]*?)\s*\)/.exec(fn.toString())[1].split(/\s*,\s*/);
  }

  function isObject(value) {
    var type = typeof value;
    return value !== null && (type === 'object' || type === 'function');
  }

  function forEach(src, func) {
    var i = 0;

    if (isArray(src)) {
      while (i < src.length) {
        var rst = func(src[i], i, src);

        if (rst === false) {
          break;
        }

        i += 1;
      }
    } else if (isObject(src)) {
      var keys = Object.keys(src);

      while (i < keys.length) {
        var key = keys[i];

        var _rst = func(src[key], key, src);

        if (_rst === false) {
          break;
        }

        i += 1;
      }
    }
  }

  /* eslint-disable no-self-compare */
  function is(x, y) {
    // inlined Object.is polyfill to avoid requiring consumers ship their own
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      // Added the nonzero y check to make Flow happy, but it is redundant
      return x !== 0 || y !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }

  var isDate = d => d instanceof Date;

  /* eslint-disable guard-for-in */
  function isShallowEqual() {
    for (var _len = arguments.length, objs = new Array(_len), _key = 0; _key < _len; _key++) {
      objs[_key] = arguments[_key];
    }

    if (objs.length < 2) return false;

    for (var i in objs) {
      i = Number(i);

      if (objs[i + 1] !== undefined) {
        if (isArray(objs[i])) {
          if (!compareArrays(objs[i], objs[i + 1])) {
            return false;
          }
        } else if (isObject(objs[i])) {
          if (!compareObjects(objs[i], objs[i + 1])) {
            return false;
          }
        } else if (isDate(objs[i])) {
          if (!compareDates(objs[i], objs[i + 1])) {
            return false;
          }
        } else {
          if (objs[i] !== objs[i + 1]) {
            return false;
          }
        }
      }
    }

    return true;
  }

  function compare(obj, obj1) {
    for (var i in obj) {
      if (obj1[i] === undefined) {
        return false;
      }

      if (isArray(obj[i])) {
        if (!compareArrays(obj[i], obj1[i])) {
          return false;
        }
      } else if (isObject(obj[i])) {
        if (!compareObjects(obj[i], obj1[i])) {
          return false;
        }
      } else if (isDate(obj[i])) {
        if (!compareDates(obj[i], obj1[i])) {
          return false;
        }
      } else {
        if (obj[i] !== obj1[i]) {
          return false;
        }
      }
    }

    return true;
  }

  function compareArrays(obj, obj1) {
    if (!isArray(obj1)) return false;
    if (obj.length !== obj1.length) return false;
    var equal = compare(obj, obj1);
    return equal;
  }

  function compareObjects(obj, obj1) {
    if (!isObject(obj1)) return false;

    for (var key in obj1) {
      if (obj[key] === undefined) {
        return false;
      }
    }

    var equal = compare(obj, obj1);
    return equal;
  }

  function compareDates(obj, obj1) {
    if (!isDate(obj1) || obj.getTime() !== obj1.getTime()) {
      return false;
    }

    return true;
  }

  function findIndex(src, func) {
    var rst = -1;
    forEach(src, (item, index, obj) => {
      if (isFunction(func)) {
        if (func(item, index, obj) === true) {
          rst = index;
          return false;
        }
      } else if (is(item, func)) {
        rst = index;
        return false;
      } else if (isObject(item) && isObject(func)) {
        var subEqual = true;
        forEach(func, (v, k) => {
          subEqual = isShallowEqual(item[k], v);
          return subEqual;
        });

        if (subEqual) {
          rst = index;
          return false;
        }
      }
    });
    return rst;
  }

  /**
   * function handle1(a, b, c) {
   *   console.log('one', a, b, c);
   * }
   *
   * function handle2(a, b, c) {
   *   console.log('two', a, b, c);
   * }
   *
   * function handle3(a, b, c) {
   *   console.log('three', a, b, c);
   * }
   *
   * emitter
   *   .on('demo', handle1)
   *   .once('demo', handle2)
   *   .on('demo', handle3);
   *
   * emitter.emit('demo', [1, 2, 3]);
   */

  function EventEmitter() {
    this.__events = {};
  }

  function isListener(listener) {
    if (isFunction(listener)) {
      return true;
    } else if (listener && isObject(listener)) {
      return isListener(listener.listener);
    } else {
      return false;
    }
  }

  var prototype = EventEmitter.prototype;
  /**
   * on
   * @param  {String} eventName
   * @param  {Function} listener
   * @return {Object}
   */

  prototype.on = function (eventName, listener) {
    if (!eventName || !listener) return;

    if (!isListener(listener)) {
      throw new TypeError('listener is a function');
    }

    var events = this.__events;
    var listeners = events[eventName] = events[eventName] || [];
    var listenerIsWrapped = isObject(listener); // not repeat

    if (findIndex(listeners, listener) === -1) {
      var listenerOnce = {
        listener: listener,
        once: false
      };
      listeners.push(listenerIsWrapped ? listener : listenerOnce);
      console.log(listeners);
    }

    return this;
  };
  /**
   * once
   * @param  {String} eventName
   * @param  {Function} listener
   * @return {Object} can chained call
   */


  prototype.once = function (eventName, listener) {
    return this.on(eventName, {
      listener: listener,
      once: true
    });
  };
  /**
   * off
   * @param  {String} eventName
   * @param  {Function} listener
   * @return {Object}  can chained call
   */


  prototype.off = function (eventName, listener) {
    var listeners = this.__events[eventName];
    if (!listeners) return;
    var index;

    for (var i = 0, len = listeners.length; i < len; i++) {
      if (listeners[i] && listeners[i].listener === listener) {
        index = i;
        break;
      }
    }

    if (typeof index !== 'undefined') {
      listeners.splice(index, 1, null);
    }

    return this;
  };
  /**
   * emit
   * @param  {String} eventName
   * @param  {Array} args
   * @return {Object} can chained call
   */


  prototype.emit = function (eventName, args) {
    var listeners = this.__events[eventName];
    if (!listeners) return;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];

      if (listener) {
        listener.listener.apply(this, args || []);

        if (listener.once) {
          this.off(eventName, listener.listener);
        }
      }
    }

    return this;
  };
  /**
   * allOff && allOne
   * @param  {String[]}
   */


  prototype.allOff = function (eventName) {
    if (eventName && this.__events[eventName]) {
      this.__events[eventName] = [];
    } else {
      this.__events = {};
    }
  };

  var properObject = o => isObject(o) && !o.hasOwnProperty ? { ...o
  } : o;

  function isEmpty(obj) {
    if (obj === null) {
      return true;
    }

    if (isArray(obj)) {
      return !obj.length;
    }

    if (isString(obj)) {
      return !obj.length;
    }

    if (isObject(obj)) {
      return !Object.keys(obj).length;
    }

    if (isMap(obj) || isSet(obj)) {
      return !obj.size;
    } // other primitive || unidentifed object type


    return Object(obj) !== obj || !Object.keys(obj).length;
  }

  var objectDiff = (lhs, rhs) => {
    if (lhs === rhs) return {}; // equal return no diff

    if (!isObject(lhs) || !isObject(rhs)) return rhs; // return updated rhs

    var l = properObject(lhs);
    var r = properObject(rhs);
    var deletedValues = Object.keys(l).reduce((acc, key) => {
      return r.hasOwnProperty(key) ? acc : { ...acc,
        [key]: undefined
      };
    }, {});

    if (isDate(l) || isDate(r)) {
      // eslint-disable-next-line eqeqeq
      if (l.valueOf() == r.valueOf()) return {};
      return r;
    }

    return Object.keys(r).reduce((acc, key) => {
      if (!l.hasOwnProperty(key)) return { ...acc,
        [key]: r[key]
      }; // return added r key

      var difference = objectDiff(l[key], r[key]);
      if (isObject(difference) && isEmpty(difference) && !isDate(difference)) return acc; // return no diff

      return { ...acc,
        [key]: difference
      }; // return updated key
    }, deletedValues);
  };

  var addedDiff = (lhs, rhs) => {
    if (lhs === rhs || !isObject(lhs) || !isObject(rhs)) return {};
    var l = properObject(lhs);
    var r = properObject(rhs);
    return Object.keys(r).reduce((acc, key) => {
      if (l.hasOwnProperty(key)) {
        var difference = addedDiff(l[key], r[key]);
        if (isObject(difference) && isEmpty(difference)) return acc;
        return { ...acc,
          [key]: difference
        };
      }

      return { ...acc,
        [key]: r[key]
      };
    }, {});
  };

  var deletedDiff = (lhs, rhs) => {
    if (lhs === rhs || !isObject(lhs) || !isObject(rhs)) return {};
    var l = properObject(lhs);
    var r = properObject(rhs);
    return Object.keys(l).reduce((acc, key) => {
      if (r.hasOwnProperty(key)) {
        var difference = deletedDiff(l[key], r[key]);
        if (isObject(difference) && isEmpty(difference)) return acc;
        return { ...acc,
          [key]: difference
        };
      }

      return { ...acc,
        [key]: undefined
      };
    }, {});
  };

  var updatedDiff = (lhs, rhs) => {
    if (lhs === rhs) return {};
    if (!isObject(lhs) || !isObject(rhs)) return rhs;
    var l = properObject(lhs);
    var r = properObject(rhs);

    if (isDate(l) || isDate(r)) {
      // eslint-disable-next-line eqeqeq
      if (l.valueOf() == r.valueOf()) return {};
      return r;
    }

    return Object.keys(r).reduce((acc, key) => {
      if (l.hasOwnProperty(key)) {
        var difference = updatedDiff(l[key], r[key]);
        if (isObject(difference) && isEmpty(difference) && !isDate(difference)) return acc;
        return { ...acc,
          [key]: difference
        };
      }

      return acc;
    }, {});
  };

  var detailedDiff = (lhs, rhs) => ({
    added: addedDiff(lhs, rhs),
    deleted: deletedDiff(lhs, rhs),
    updated: updatedDiff(lhs, rhs)
  });

  function loadImages(options) {
    var len = 0;
    var index = 0;
    var curIndex = 0;
    var stepTimer = null;
    var stepTimeValue = 5;
    var percentageValue = 0;
    var targetPercent = 0;
    var data = options.data || [];

    var step = options.step || function () {};

    var complete = options.complete || function () {};

    var needOneStep = options.needOneStep || false;
    var path = options.path || false;

    if (!isObject(data) || size(data) === 0) {
      step(100);
      return false;
    }

    len = size(data);

    if (path) {
      for (var i = len - 1; i > -1; i--) {
        data[i] = path + data[i]; // console.info(data[i]);
      }
    }

    var processStep = function () {
      percentageValue++; // console.info("processStep = ",percentageValue)

      step(percentageValue);

      if (percentageValue < targetPercent) {
        stepTimer = setTimeout(function () {
          processStep();
        }, stepTimeValue);
      } else if (targetPercent === 100 && percentageValue === targetPercent) {
        if (complete && isFunction(complete)) {
          complete();
        }
      }
    };

    function onload() {
      curIndex++;
      targetPercent = Math.floor(curIndex / len * 100);

      if (needOneStep) {
        if (stepTimer) {
          clearTimeout(stepTimer);
        }

        processStep();
      } else {
        step(targetPercent);

        if (targetPercent === 100) {
          complete();
        }
      }
    }

    for (index; index < len; index++) {
      var strUrl = data[index];
      new LoadImageItem(strUrl, onload).start();
    }
  }
  /**
   * @name loadImageItem
   * @param  {string} url - images full url
   * @callback cb - called when load image completed
   */

  function LoadImageItem(url, cb) {
    var self = this;
    self.img = new Image(); // readyState:'complete' or 'loaded' => image has been loaded。
    // for IE6-IE10。

    var onReadyStateChange = function () {
      removeEventHandlers();
      console.info('onReadyStateChange');
      cb(self, 'onReadyStateChange');
    };

    var onError = function () {
      console.info('onError');
      removeEventHandlers();
      cb(self, 'onError');
    };

    var onLoad = function () {
      removeEventHandlers();
      cb(self, 'onload');
    };

    var removeEventHandlers = function () {
      self.unbind('load', onLoad);
      self.unbind('readystatechange', onReadyStateChange);
      self.unbind('error', onError);
    };

    this.start = function () {
      this.bind('load', onLoad);
      this.bind('readystatechange', onReadyStateChange);
      this.bind('error', onError);
      this.img.src = url;

      if (self.img.complete) {
        removeEventHandlers();
        cb(this, 'onload');
      }
    };
  }
  /**
   * @name bind
   * @description cross-browser event binding
   * @param  {string} eventName
   * @param  {function} eventHandler
   */


  LoadImageItem.prototype.bind = function (eventName, eventHandler) {
    if (this.img.addEventListener) {
      this.img.addEventListener(eventName, eventHandler, false);
    } else if (this.img.attachEvent) {
      this.img.attachEvent('on' + eventName, eventHandler);
    }
  };
  /**
   * @name unbind
   * @description cross-browser event un-binding
   * @param  {string} eventName
   * @param  {function} eventHandler
   */


  LoadImageItem.prototype.unbind = function (eventName, eventHandler) {
    if (this.img.removeEventListener) {
      this.img.removeEventListener(eventName, eventHandler, false);
    } else if (this.img.detachEvent) {
      this.img.detachEvent('on' + eventName, eventHandler);
    }
  };

  /* eslint-disable no-invalid-this */
  /**
   * load js
   * 1. bbo.loadjs("//your_url/a.js",func);
   * 2. bbo.loadjs("//your_url/a.js","only_id",func);
   */

  var _cache$1 = {
    urls: {},
    logs: {}
  };

  var _insertScripts = function (arr, callback) {
    for (var i = 0; i < arr.length; i++) {
      _insertScript(arr[i], loaded);
    }

    var _index = 0;

    function loaded() {
      _index++;

      if (_index >= arr.length) {
        callback && callback();
      }
    }
  };

  var _insertScript = function (src, callback) {
    var script = c('script');
    attr(script, 'type', 'text/javascript');
    attr(script, 'src', src);
    attr(script, 'charset', 'utf-8');
    document.getElementsByTagName('head')[0].appendChild(script);

    if (/msie/.test(ua('l'))) {
      script.onreadystatechange = function () {
        if (this.readyState === 'loaded' || this.readyState === 'complete') {
          callback();
        }
      };
    } else if (/gecko/.test(ua('l'))) {
      script.onload = function () {
        callback();
      };
    } else {
      setTimeout(function () {
        callback();
      }, 50);
    }
  };

  function loadjs(url, b, c) {
    var onlyId;
    var callback;

    if (isFunction(b)) {
      onlyId = String(hash(String(url)));
      callback = b;
    } else if (typeof b === 'undefined') {
      onlyId = String(hash(String(url)));
      callback = null;
    } else {
      onlyId = String(b);
      callback = c;
    }

    if (_cache$1.urls[onlyId]) {
      callback && callback();
    } else {
      var func = isString(url) ? _insertScript : _insertScripts;
      func.call(this, url, function () {
        _cache$1.urls[onlyId] = true;
        callback && callback();
      });
    }
  }

  var randomKey = function () {
    var len = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 32;

    /** Removed confusing characters 'oOLl,9gq,Vv,Uu,I1' **/
    var possible = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
    var key = '';

    for (var i = 0; i < len; i++) {
      key += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return key;
  };

  /* eslint-disable no-invalid-this */
  function loadcss(url, callback) {
    var promise;
    var resolutions = [];
    var rejections = [];
    var resolved = false;
    var rejected = false;
    var id;
    id = 'load-css-' + randomKey(5);
    promise = {
      done: function (callback) {
        resolutions.push(callback);
        if (resolved) callback();
        return promise;
      },
      fail: function (callback) {
        rejections.push(callback);
        if (rejected) callback();
        return promise;
      }
    };

    function resolve() {
      resolved = true;

      for (var i = 0, len = resolutions.length; i < len; i++) {
        resolutions[i]();
      }
    }

    function reject() {
      rejected = true;

      for (var i = 0, len = rejections.length; i < len; i++) {
        rejections[i]();
      }
    }

    var link = c('link');
    attr(link, 'id', id);
    attr(link, 'rel', 'stylesheet');
    attr(link, 'type', 'text/css');

    if (typeof link.addEventListener !== 'undefined') {
      link.addEventListener('load', resolve, false);
      link.addEventListener('error', reject, false);
    } else if (typeof link.attachEvent !== 'undefined') {
      link.attachEvent('onload', function () {
        // IE 8 gives us onload for both success and failure
        // and also readyState is always "completed", even
        // for failure.  The only way to see if a stylesheet
        // load failed from an external domain is to try and
        // access its cssText, and then catch the error
        // ... sweet :/
        var cur;
        var i = document.styleSheets.length;

        try {
          while (i--) {
            cur = document.styleSheets[i];

            if (cur.id === id) {
              resolve();
              return;
            }
          }
        } catch (e) {}

        if (!resolved) {
          reject();
        }
      });
    }

    document.getElementsByTagName('head')[0].appendChild(link);
    attr(link, 'href', url);
    return promise;
  }

  /**
   * to json
   */
  // eval hack
  var evil = fn => {
    // A variable points to Function, preventing reporting errors
    var Fn = Function;
    return new Fn('return ' + fn)();
  }; // bbo.toJSON = bbo.tojson = bbo.toJson


  var toJson = res => {
    if (!res) return null;

    if (typeof res === 'string') {
      try {
        return JSON.parse(res);
      } catch (e) {
        return evil('(' + res + ')');
      }
    } else {
      return res;
    }
  };

  /* eslint-disable */
  /**
   * Options:
   *  - param {String} qs parameter (`callback`)
   *  - prefix {String} qs parameter (`bbo`)
   *  - name {String} qs parameter (`prefix` + incr)
   *  - timeout {Number} how long after a timeout error is emitted (`60000`)
   * @param {String} url
   * @param {Object|Function} optional options / callback
   * @param {Function} optional callback
   */

  function jsonp(url, opts, fn) {
    if (isFunction(opts)) {
      fn = opts;
      opts = {};
    }

    if (!opts) opts = {};
    var prefix = opts.prefix || 'bbo';
    var id = opts.name || prefix + randomKey(10);
    var param = opts.param || 'callback';
    var timeout = null != opts.timeout ? opts.timeout : 60000;
    var enc = encodeURIComponent;
    var target = document.getElementsByTagName('script')[0] || document.head;
    var script;
    var timer;

    if (timeout) {
      timer = setTimeout(function () {
        cleanup();
        if (fn) fn(new Error('Timeout'));
      }, timeout);
    }

    function cleanup() {
      if (script.parentNode) script.parentNode.removeChild(script);
      window[id] = noop();
      if (timer) clearTimeout(timer);
    }

    function cancel() {
      if (window[id]) {
        cleanup();
      }
    }

    window[id] = function (data) {
      cleanup();
      if (fn) fn(data, null);
    };

    console.log(url);
    url += (~url.indexOf('?') ? '&' : '?') + param + '=' + enc(id);
    url = url.replace('?&', '?');
    script = document.createElement('script');
    script.src = url;
    target.parentNode.insertBefore(script, target);
    return cancel;
  }

  function isNumber(number) {
    return getTag(number) === '[object Number]';
  }

  /* eslint-disable guard-for-in */

  var cookie = () => {
    function cookieAttrExtend() {
      var i = 0;
      var result = {};

      for (; i < arguments.length; i++) {
        var attributes = arguments[i];

        for (var key in attributes) {
          if (hasOwnProperty(attributes, key)) {
            result[key] = attributes[key];
          }
        }
      }

      return result;
    }

    function init(converter) {
      function api(key, value, attributes) {
        var result;

        if (size(arguments) > 1) {
          attributes = cookieAttrExtend({
            path: '/'
          }, api.defaults, attributes);

          if (isNumber(attributes.expires)) {
            var expires = new Date();
            expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e5);
            attributes.expires = expires;
          }

          try {
            result = JSON.stringify(value);

            if (/^[\{\[]/.test(result)) {
              value = result;
            }
          } catch (e) {}

          if (!converter.write) {
            value = encodeURIComponent(String(value)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
          } else {
            value = converter.write(value, key);
          }

          key = encodeURIComponent(String(key));
          key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
          key = key.replace(/[\(\)]/g, escape); // eslint-disable-next-line no-return-assign

          return document.cookie = [key, '=', value, attributes.expires ? '; expires=' + attributes.expires.toUTCString() : '', attributes.path ? '; path=' + attributes.path : '', attributes.domain ? '; domain=' + attributes.domain : '', attributes.secure ? '; secure' : ''].join('');
        }

        if (!key) {
          result = {};
        }

        var cookies = document.cookie ? document.cookie.split('; ') : [];
        var rdecode = /(%[0-9A-Z]{2})+/g;
        var i = 0;

        for (; i < cookies.length; i++) {
          var parts = cookies[i].split('=');

          var _cookie = parts.slice(1).join('=');

          if (_cookie.charAt(0) === '"') {
            _cookie = _cookie.slice(1, -1);
          }

          try {
            var name = parts[0].replace(rdecode, decodeURIComponent);
            _cookie = converter.read ? converter.read(_cookie, name) : converter(_cookie, name) || _cookie.replace(rdecode, decodeURIComponent); // eslint-disable-next-line no-invalid-this

            if (this.json) {
              try {
                _cookie = JSON.parse(_cookie);
              } catch (e) {}
            }

            if (key === name) {
              result = _cookie;
              break;
            }

            if (!key) {
              result[name] = _cookie;
            }
          } catch (e) {}
        }

        return result;
      }

      api.set = api;

      api.get = function (key) {
        return api.call(api, key);
      };

      api.getJson = api.getJSON = function () {
        return api.apply({
          json: true
        }, [].slice.call(arguments));
      };

      api.defaults = {};

      api.remove = function (key, attributes) {
        api(key, '', cookieAttrExtend(attributes, {
          expires: -1
        }));
      };

      api.withConverter = init;
      return api;
    }

    return init(function () {});
  };

  /**
   * setCookie / getCookie / deleteCookie
   * From https://stackoverflow.com/questions/1458724/how-do-i-set-unset-cookie-with-jquery/1458728#1458728
   */
  var setCookie = (name, value, option) => {
    var longTime = 10; // let path = '; path=/';

    var val = option && option.raw ? value : encodeURIComponent(value);
    var cookie = encodeURIComponent(name) + '=' + val;

    if (option) {
      if (option.days) {
        var date = new Date();
        var ms = option.days * 24 * 3600 * 1000;
        date.setTime(date.getTime() + ms);
        cookie += '; expires=' + date.toGMTString();
      } else if (option.hour) {
        var _date = new Date();

        var _ms = option.hour * 3600 * 1000;

        _date.setTime(_date.getTime() + _ms);

        cookie += '; expires=' + _date.toGMTString();
      } else {
        var _date2 = new Date();

        var _ms2 = longTime * 365 * 24 * 3600 * 1000;

        _date2.setTime(_date2.getTime() + _ms2);

        cookie += '; expires=' + _date2.toGMTString();
      }

      if (option.path) cookie += '; path=' + option.path;
      if (option.domain) cookie += '; domain=' + option.domain;
      if (option.secure) cookie += '; true';
    }

    document.cookie = cookie;
  };

  var getCookie = name => {
    var nameEQ = encodeURIComponent(name) + '=';
    var ca = document.cookie.split(';');

    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];

      while (c.charAt(0) === ' ') {
        c = c.substring(1, c.length);
      }

      if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
    }

    return null;
  };

  var deleteCookie = name => {
    setCookie(name, '', {
      hour: -1
    });
  };

  var parseCookie = str => str.split(';').map(v => v.split('=')).reduce((acc, v) => {
    acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
    return acc;
  }, {});

  /**
   * Whether a string contains another string
   */
  function containsWith(target, item) {
    // discuss at: https://locutus.io/golang/strings/Contains
    // original by: Kevin van Zonneveld (https://kvz.io)
    // example 1: bbo.contains('Kevin', 'K')
    // returns 1: true
    return String(target).indexOf(item) !== -1;
  }

  /************************************************************************
   * localStorage && sessionStorage
   * Method for safely supporting localStorage sessionStorage 'setItem' 'getItem' 'removeItem' 'removeAll',
   * Some extension method 'has' 'get' adn Store prefix
   *************************************************************************/
  var storage;

  try {
    var ulocalStorage = window.localStorage;
    var ussesionStorage = window.sessionStorage;

    class Storage {
      constructor(options) {
        var _options$type = options.type,
            type = _options$type === void 0 ? 'local' : _options$type,
            _options$prefix = options.prefix,
            prefix = _options$prefix === void 0 ? 'bbo.storage' : _options$prefix,
            _options$message = options.message,
            message = _options$message === void 0 ? {
          setItem: 'write in',
          getItem: 'read',
          removeAll: 'remove all',
          removeItem: 'remove item'
        } : _options$message;
        this.prefix = prefix;
        this.type = type;
        this.message = message;

        if (type === 'local') {
          this._storage = ulocalStorage;
        } else if (type === 'session') {
          this._storage = ussesionStorage;
        }
      }

      doItem(func, action) {
        try {
          if (isFunction(func)) {
            return func();
          }
        } catch (err) {
          this._warn(action);

          return null;
        }

        return true;
      }

      setItem(key, value) {
        if (isObject(key)) {
          Object.keys(key).forEach((k, index) => {
            this.doItem(() => this._storage.setItem(`${this.prefix}.${k}`, JSON.stringify(key[k])), 'setItem');
          });
        } else {
          this.doItem(() => this._storage.setItem(`${this.prefix}.${key}`, JSON.stringify(value)), 'setItem');
        }
      }

      has() {
        for (var _len = arguments.length, keys = new Array(_len), _key = 0; _key < _len; _key++) {
          keys[_key] = arguments[_key];
        }

        return keys.every((key, index) => this._storage.getItem(`${this.prefix}.${key}`));
      }

      get() {
        var result = {};

        for (var _len2 = arguments.length, keys = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          keys[_key2] = arguments[_key2];
        }

        keys.forEach((key, index) => {
          if (`${this._storage.getItem(`${this.prefix}.${key}`)}` !== 'null') {
            try {
              result[key] = JSON.parse(this._storage.getItem(`${this.prefix}.${key}`));
            } catch (err) {
              console.warn(this._warn('getItem'));
            }
          }
        });
        return result;
      }

      getItem(key) {
        return this.doItem(() => JSON.parse(this._storage.getItem(`${this.prefix}.${key}`)), 'getItem');
      }

      removeAll() {
        Object.keys(this._storage).forEach(k => {
          if (containsWith(k, this.prefix)) {
            this._remove(`${k}`);
          }
        });
      }

      removeItem() {
        for (var _len3 = arguments.length, keys = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          keys[_key3] = arguments[_key3];
        }

        console.log(keys);
        keys.forEach((key, index) => this.doItem(() => this._storage.removeItem(`${this.prefix}.${key}`), 'removeItem'));
      }

      _warn(action) {
        var message = this.message;
        console.warn(`Unable to ${message[action] || ''} ${this.type} Storage`);
      }

      _remove(keys) {
        this.doItem(() => this._storage.removeItem(`${keys}`), 'removeItem');
      }

    }

    storage = (_ref) => {
      var type = _ref.type,
          prefix = _ref.prefix;
      return new Storage({
        type: type,
        prefix: prefix
      });
    };
  } catch (e) {
    storage = noop;
    console.error(e);
  }

  var storage$1 = storage;

  /**
   * getUrlParam / deleteUrlParam
   * From https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
   */
  var getUrlParam = function (name) {
    var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window.location.href;
    name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
    var results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  };

  /**
   * setUrlParam
   * From https://stackoverflow.com/questions/5999118/add-or-update-query-string-parameter
   */
  var setUrlParam = function (key, value) {
    var uri = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : window.location.href;
    var re = new RegExp('([?&])' + key + '=.*?(&|$)', 'i');
    var separator = uri.indexOf('?') !== -1 ? '&' : '?';

    if (uri.match(re)) {
      return uri.replace(re, '$1' + key + '=' + value + '$2');
    } else {
      return uri + separator + key + '=' + value;
    }
  };

  /**
   * getUrlParam / deleteUrlParam
   * From https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
   */
  var deleteUrlParam = function (param) {
    var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window.location.href;
    // prefer to use l.search if you have a location/link object
    var urlparts = url.split('?');

    if (urlparts.length >= 2) {
      var prefix = encodeURIComponent(param) + '=';
      var pars = urlparts[1].split(/[&;]/g); // reverse iteration as may be destructive

      for (var i = pars.length; i-- > 0;) {
        // idiom for string.startsWith
        if (pars[i].lastIndexOf(prefix, 0) !== -1) {
          pars.splice(i, 1);
        }
      }

      return urlparts[0] + (pars.length > 0 ? '?' + pars.join('&') : '');
    } else {
      return url;
    }
  };

  var objectParam = arr => {
    var str = '';

    if (isArray(arr)) {
      str = arr.map(item => {
        return item.name + '=' + item.value;
      }).join('&');
    } else {
      str = objectParam(objectBigParam(arr));
    }

    return str;
  };

  var objectBigParam = obj => {
    var arr = [];
    Object.keys(obj).forEach(k => {
      if (isArray(obj[k])) {
        arr = arr.concat(obj[k].map(v => {
          return {
            name: k,
            value: v
          };
        }));
      } else {
        arr.push({
          name: k,
          value: obj[k]
        });
      }
    });
    return arr;
  };

  var httpGet = function (url, callback) {
    var err = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : console.error;
    var request = new XMLHttpRequest();
    request.open('GET', url, true);

    request.onload = () => callback(request.responseText);

    request.onerror = () => err(request);

    request.send();
  };

  // eslint-disable-next-line max-params
  var httpPost = function (url, data, callback) {
    var err = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : console.error;
    var request = new XMLHttpRequest();
    request.open('POST', url, true);
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

    request.onload = () => callback(request.responseText);

    request.onerror = () => err(request);

    request.send(data);
  };

  /**
   * Returns true if the given string is an absolute URL, false otherwise.
   */
  var isAbsoluteURL = str => /^[a-z][a-z0-9+.-]*:/.test(str);

  function clearTimesout(id) {
    return clearInterval(id);
  }

  /**
   * setInterval func fix times
   * https://stackoverflow.com/questions/2956966/javascript-telling-setinterval-to-only-fire-x-amount-of-times
   */

  function setTimesout() {
    var func = arguments[0];
    var delay = arguments[1] === undefined ? 0 : parseFloat(arguments[1]);
    var times = arguments[2] === undefined ? 1 : parseInt(arguments[2], 10);

    var _args = arguments.length > 3 ? args(arguments, 3) : null;

    var target = {
      index: 0,
      times: times,
      over: false
    };
    var id = setInterval(function () {
      target.index++;

      if (target.index > times) {
        clearTimesout(id);
      } else {
        if (target.index === times) target.over = true;
        func.apply(target, _args);
      }
    }, delay);
    return id;
  }

  function fill0(num) {
    var _num = parseFloat(num);

    return _num < 10 ? '0' + _num : String(_num);
  }

  /**
   * getDate
   * https://stackoverflow.com/questions/1531093/how-do-i-get-the-current-date-in-javascript
   */

  var getDate = (d1, d2) => {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    var hh = today.getHours();
    var ms = today.getMinutes();
    var ss = today.getSeconds();
    dd = fill0(dd);
    mm = fill0(mm);
    hh = fill0(hh);
    ms = fill0(ms);
    ss = fill0(ss);

    var _d1 = d1 || '/';

    var _d2 = d2 || ':';

    return yyyy + _d1 + mm + _d1 + dd + ' ' + hh + _d2 + ms + _d2 + ss;
  };

  /**
   * @param  {Date} startTime timestamp
   * @return {String}
   */
  var formatPassTime = startTime => {
    var seconds = Math.floor((new Date() - startTime) / 1000);
    var interval = seconds / 31536000;

    if (interval > 1) {
      return Math.floor(interval) + ' years';
    }

    interval = seconds / 2592000;

    if (interval > 1) {
      return Math.floor(interval) + ' months';
    }

    interval = seconds / 86400;

    if (interval > 1) {
      return Math.floor(interval) + ' days';
    }

    interval = seconds / 3600;

    if (interval > 1) {
      return Math.floor(interval) + ' hours';
    }

    interval = seconds / 60;

    if (interval > 1) {
      return Math.floor(interval) + ' minutes';
    }

    return Math.floor(seconds) + ' seconds';
  };

  /**
   * @desc   format the remaining time from ${endTime}
   * @param  {Date} endTime
   * @return {String}
   */
  var formatRemainTime = endTime => {
    var startDate = new Date(); // startDate

    var endDate = new Date(endTime); // endDate

    var t = endDate.getTime() - startDate.getTime();
    var d = 0;
    var h = 0;
    var m = 0;
    var s = 0;

    if (t >= 0) {
      d = Math.floor(t / 1000 / 3600 / 24);
      h = Math.floor(t / 1000 / 60 / 60 % 24);
      m = Math.floor(t / 1000 / 60 % 60);
      s = Math.floor(t / 1000 % 60);
    }

    return d + 'day ' + h + 'hour ' + m + 'minute ' + s + 'second';
  };

  var formatDuration = ms => {
    // eslint-disable-next-line no-param-reassign
    if (ms < 0) ms = -ms;
    var time = {
      day: Math.floor(ms / 86400000),
      hour: Math.floor(ms / 3600000) % 24,
      minute: Math.floor(ms / 60000) % 60,
      second: Math.floor(ms / 1000) % 60,
      millisecond: Math.floor(ms) % 1000
    };
    return Object.entries(time).filter(val => val[1] !== 0).map((_ref) => {
      var _ref2 = _slicedToArray(_ref, 2),
          key = _ref2[0],
          val = _ref2[1];

      return `${val} ${key}${val !== 1 ? 's' : ''}`;
    }).join(', ');
  };

  var cachedSetTimeout = setTimeout;

  function createSleepPromise(timeout, _ref) {
    var useCachedSetTimeout = _ref.useCachedSetTimeout;
    var timeoutFunction = useCachedSetTimeout ? cachedSetTimeout : setTimeout;
    return new Promise(resolve => {
      timeoutFunction(resolve, timeout);
    });
  }

  function sleep(timeout) {
    var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        useCachedSetTimeout = _ref2.useCachedSetTimeout;

    var sleepPromise = createSleepPromise(timeout, {
      useCachedSetTimeout: useCachedSetTimeout
    });

    function promiseFunction(value) {
      return sleepPromise.then(() => value);
    }

    promiseFunction.then = function () {
      return sleepPromise.then.apply(sleepPromise, arguments);
    };

    promiseFunction.catch = Promise.resolve().catch;
    return promiseFunction;
  }

  /* eslint-disable prefer-promise-reject-errors */

  /**
   * @param {any} attempt
   * @param {any} options
   *  interval: 200,  //ms
   *  retries: 2
   *  timeout: 8000 //ms
   */
  function retry (attempt, options) {
    var option = options || {};
    var interval = option.interval || 400;
    var retries = option.retries || 2;
    var timeout = option.timeout || 8000;

    function rejectDelay(reason) {
      return new Promise(function (resolve, reject) {
        setTimeout(reject.bind(null, reason), interval);
      });
    }

    var p = Promise.reject();

    for (var i = 0; i < retries; i++) {
      p = p.catch(timeoutReject(attempt, timeout)).catch(rejectDelay);
    }

    return p;
  }

  function timeoutReject(task, timeout) {
    var timer;
    return function () {
      return Promise.race([Promise.reject().catch(task), new Promise(function (rs, rj) {
        timer = setTimeout(function () {
          rj('timeout.');
        }, timeout || 8000);
      })]).then(function (r) {
        clearTimeout(timer);
        return r;
      }, function (err) {
        return Promise.reject(err);
      });
    };
  }

  var floor = function (n) {
    var m = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return Math.floor(n * Math.pow(10, m)) / Math.pow(10, m);
  };

  var chainAsync = fns => {
    var curr = 0;
    var last = fns[fns.length - 1];

    var next = () => {
      var fn = fns[curr++];
      fn === last ? fn() : fn(next);
    };

    next();
  };

  /**
   * https://locutus.io/php/
   */
  // eslint-disable-next-line max-params
  var numberFormat = (number, decimals, decPoint, thousandsSep) => {
    var _number = String(number).replace(/[^0-9+\-Ee.]/g, '');

    var _decimals = decimals;
    var n = !isFinite(Number(_number)) ? 0 : Number(_number);
    var prec = !isFinite(Number(_decimals)) ? 0 : Math.abs(_decimals);
    var sep = typeof thousandsSep === 'undefined' ? ',' : thousandsSep;
    var dec = typeof decPoint === 'undefined' ? '.' : decPoint;
    var s = '';

    var toFixedFix = function (n, prec) {
      if (String(n).indexOf('e') === -1) {
        return Number(Math.round(n + 'e+' + prec) + 'e-' + prec);
      } else {
        var arr = String(n).split('e');
        var sig = '';

        if (Number(arr[1]) + prec > 0) {
          sig = '+';
        }

        return Number(Math.round(Number(arr[0]) + 'e' + sig + (Number(arr[1]) + prec)) + 'e-' + prec).toFixed(prec);
      }
    }; // @todo: for IE parseFloat(0.55).toFixed(0) = 0;


    s = (prec ? toFixedFix(n, prec).toString() : String(Math.round(n))).split('.');

    if (s[0].length > 3) {
      s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }

    if ((s[1] || '').length < prec) {
      s[1] = s[1] || '';
      s[1] += new Array(prec - s[1].length + 1).join('0');
    }

    return s.join(dec);
  };

  /**
   * modulo of a number and a divisor
   */
  function modulo(n, d) {
    // bbo.modulo(7, 5); // 2
    // bbo.modulo(17, 23); // 17
    // bbo.modulo(16.2, 3.8); // 1
    // bbo.modulo(5.8, 3.4); //2.4
    // bbo.modulo(4, 0); // 4
    // bbo.modulo(-7, 5); // 3
    // bbo.modulo(-2, 15); // 13
    // bbo.modulo(-5.8, 3.4); // 1
    // bbo.modulo(12, -1); // NaN
    // bbo.modulo(-3, -8); // NaN
    // bbo.modulo(12, 'apple'); // NaN
    // bbo.modulo('bee', 9); // NaN
    // bbo.modulo(null, undefined); // NaN
    if (d === 0) {
      return n;
    }

    if (d < 0) {
      return NaN;
    }

    return (n % d + d) % d;
  }

  function randomColor() {
    return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).slice(-6);
  }

  // bbo.randomFromA2B = bbo.randomA2B
  var randomA2B = (a, b, int) => {
    var result = Math.random() * (b - a) + a;
    return int ? Math.floor(result) : result;
  };

  /**
   * lock touch in mobile phone
   */
  var lockTouch = () => {
    document.addEventListener('touchmove', function (e) {
      e.preventDefault();
    }, !1);
    document.addEventListener('touchstart', preventDefault, !1);
    document.addEventListener('touchend', preventDefault, !1);

    function not(e, tag) {
      return e.target.tagName !== tag.toUpperCase() && e.target.tagName !== tag.toLowerCase();
    }

    function preventDefault(e) {
      if (not(e, 'input') && not(e, 'textarea') && not(e, 'select') && not(e, 'menus')) e.preventDefault();
    }
  };

  function copyToClipboard(str) {
    var el = document.createElement('textarea');
    el.value = str;
    attr(el, 'readonly', '');
    setStyle(el, 'position', 'absolute');
    setStyle(el, 'left', '-9999px');
    document.body.appendChild(el);
    var selected = document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

    if (selected) {
      document.getSelection().removeAllRanges();
      document.getSelection().addRange(selected);
    }
  }

  /* eslint-disable eqeqeq */
  function clone(obj) {
    // var arr = [1, 2, 3];
    // var subObj = { aa: 1 };
    // var obj = { a: 3, b: 5, c: arr, d: subObj };
    // var objClone = bbo.clone(obj);
    // arr.push(4);
    // subObj.bb = 2;
    // obj; // {a: 3, b: 5, c: [1, 2, 3, 4], d: {aa: 1}}
    // objClone; // {a: 3, b: 5, c: [1, 2, 3], d: {aa: 1, bb: 2}}
    if (isFunction(obj)) {
      return obj;
    }

    var result = isArray(obj) ? [] : {};

    for (var key in obj) {
      // include prototype properties
      var value = obj[key];
      var type = {}.toString.call(value).slice(8, -1);

      if (type == 'Array' || type == 'Object') {
        result[key] = clone(value);
      } else if (type == 'Date') {
        result[key] = new Date(value.getTime());
      } else if (type == 'RegExp') {
        result[key] = RegExp(value.source, getRegExpFlags(value));
      } else {
        result[key] = value;
      }
    }

    return result;
  }

  function getRegExpFlags(regExp) {
    if (typeof regExp.source.flags == 'string') {
      return regExp.source.flags;
    } else {
      var flags = [];
      regExp.global && flags.push('g');
      regExp.ignoreCase && flags.push('i');
      regExp.multiline && flags.push('m');
      regExp.sticky && flags.push('y');
      regExp.unicode && flags.push('u');
      return flags.join('');
    }
  }

  function values(obj) {
    var result = [];

    if (isArray(obj)) {
      return obj.slice(0);
    }

    if (isObject(obj) || isFunction(obj)) {
      var keys = Object.keys(obj);
      var len = keys.length;

      for (var i = 0; i < len; i++) {
        result.push(obj[keys[i]]);
      }

      return result;
    }

    throw new Error('argument to `values` must be an object');
  }

  function entries(obj) {
    if (!isObject(obj) && !isFunction(obj) || obj === null) {
      throw new Error('argument to `entries` must be an object');
    }

    var result = [];

    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        result.push([key, obj[key]]);
      }
    }

    return result;
  }

  function isBoolean(bool) {
    return getTag(bool) === '[object Boolean]';
  }

  function extend()
  /* [deep], obj1, obj2, [objn] */
  {
    var args = [].slice.call(arguments);
    var deep = false;

    if (isBoolean(args[0])) {
      deep = args.shift();
    }

    var result = args[0];

    if (isUnextendable(result)) {
      throw new Error('extendee must be an object');
    }

    var extenders = args.slice(1);
    var len = extenders.length;

    for (var i = 0; i < len; i++) {
      var extender = extenders[i];

      for (var key in extender) {
        if (extender.hasOwnProperty(key)) {
          var value = extender[key];

          if (deep && isCloneable(value)) {
            var base = isArray(value) ? [] : {};
            result[key] = extend(true, result.hasOwnProperty(key) && !isUnextendable(result[key]) ? result[key] : base, value);
          } else {
            result[key] = value;
          }
        }
      }
    }

    return result;
  }

  function isCloneable(obj) {
    return isArray(obj) || isObject(obj);
  }

  function isUnextendable(val) {
    return !val || !isObject(val) && !isFunction(val);
  }

  /* eslint-disable eqeqeq */
  function flush(collection) {
    var result;
    var len;
    var i;

    if (!collection) {
      return undefined;
    }

    if (isArray(collection)) {
      result = [];
      len = collection.length;

      for (i = 0; i < len; i++) {
        var elem = collection[i];

        if (elem != null) {
          result.push(elem);
        }
      }

      return result;
    }

    if (isObject(collection)) {
      result = {};
      var keys = Object.keys(collection);
      len = keys.length;

      for (i = 0; i < len; i++) {
        var key = keys[i];
        var value = collection[key];

        if (value != null) {
          result[key] = value;
        }
      }

      return result;
    }

    return undefined;
  }

  function search(needle, haystack, argStrict) {
    var strict = !!argStrict;
    var key = '';

    for (key in haystack) {
      if (hasOwnProperty(haystack, key)) {
        // eslint-disable-next-line eqeqeq
        if (strict && haystack[key] === needle || !strict && haystack[key] == needle) {
          return key;
        }
      }
    }

    return false;
  }

  function isSymbol(symbol) {
    return getTag(symbol) === '[object Symbol]';
  }

  /* eslint-disable no-eq-null */

  /* eslint-disable eqeqeq */
  function isNil(value) {
    return value == undefined || value == null;
  }

  /* eslint-disable eqeqeq */
  function has(object, key) {
    return object != null && hasOwnProperty(object, key);
  }

  function map(src, func) {
    var rst = [];
    var i = 0;

    if (isArray(src)) {
      while (i < src.length) {
        rst.push(func(src[i], i, src));
        i += 1;
      }
    } else if (isObject(src)) {
      var keys = Object.keys(src);

      while (i < keys.length) {
        var key = keys[i];
        rst.push(func(src[key], key, src));
        i += 1;
      }
    }

    return rst;
  }

  /* eslint-disable max-params */
  var charCodeOfDot = '.'.charCodeAt(0);
  var reEscapeChar = /\\(\\)?/g;
  var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]/g;
  function stringToPath(string) {
    var result = [];

    if (string.charCodeAt(0) === charCodeOfDot) {
      result.push('');
    }

    string.replace(rePropName, (match, expression, quote, subString) => {
      var key = match;

      if (quote) {
        key = subString.replace(reEscapeChar, '$1');
      } else if (expression) {
        key = expression.trim();
      }

      result.push(key);
    });
    return result;
  }

  /* eslint-disable eqeqeq */

  var INFINITY = 1 / 0;

  function toKey(value) {
    if (isString(value) || isSymbol(value)) {
      return value;
    }

    var result = `${value}`;
    return result == '0' && 1 / value == -INFINITY ? '-0' : result;
  }

  function toPath(value) {
    if (isArray(value)) {
      return map(value, toKey);
    }

    return isSymbol(value) ? [value] : clone(stringToPath(String(value)));
  }

  /* eslint-disable no-param-reassign */

  /* eslint-disable max-params */
  function reduce(obj, predicate
  /* , initialValue */
  ) {
    var args = [callback];
    var hasInitialValue = (2 in arguments);
    hasInitialValue && args.push(arguments[2]);

    function callback(previousValue, currentKey, currentIndex, array) {
      if (!hasInitialValue) {
        previousValue = obj[array[0]];
        hasInitialValue = true;
      }

      return predicate(previousValue, currentKey, obj[currentKey], currentIndex, array);
    }

    return Array.prototype.reduce.apply(Object.keys(obj), args);
  }

  /*
    returns a new object with the predicate applied to each value
    like map-object, but (value, key, object) are passed to the predicate
  */
  function mapValues(obj, predicate) {
    var result = {};
    var keys = Object.keys(obj);
    var len = keys.length;

    for (var i = 0; i < len; i++) {
      var key = keys[i];
      result[key] = predicate(obj[key], key, obj);
    }

    return result;
  }

  function find(src, func) {
    // eslint-disable-next-line no-undef-init
    var rst = undefined;
    forEach(src, (item, key, obj) => {
      if (isFunction(func)) {
        if (func(item, key, obj) === true) {
          rst = item;
          return false;
        }
      } else if (is(item, func)) {
        rst = item;
        return false;
      } else if (isObject(item) && isObject(func)) {
        var subEqual = true;
        forEach(func, (v, k) => {
          subEqual = isShallowEqual(item[k], v);
          return subEqual;
        });

        if (subEqual) {
          rst = item;
          return false;
        }
      }
    });
    return rst;
  }

  function get(obj, propsArg, defaultValue) {
    if (!obj) {
      return defaultValue;
    }

    var props;
    var prop;

    if (Array.isArray(propsArg)) {
      props = propsArg.slice(0);
    }

    if (isString(propsArg)) {
      props = propsArg.split('.');
    }

    if (isSymbol(propsArg)) {
      props = [propsArg];
    }

    if (!isArray(props)) {
      throw new Error('props arg must be an array, a string or a symbol');
    }

    while (props.length) {
      prop = props.shift();

      if (!obj) {
        return defaultValue;
      } // eslint-disable-next-line no-param-reassign


      obj = obj[prop];

      if (obj === undefined) {
        return defaultValue;
      }
    }

    return obj;
  }

  /* eslint-disable eqeqeq */
  function set(obj, props, value) {
    if (isString(props)) {
      props = props.split('.');
    }

    if (isSymbol(props)) {
      props = [props];
    }

    var lastProp = props.pop();

    if (!lastProp) {
      return false;
    }

    var thisProp;

    while (thisProp = props.shift()) {
      if (typeof obj[thisProp] == 'undefined') {
        obj[thisProp] = {};
      }

      obj = obj[thisProp];

      if (!obj || !isObject(obj)) {
        return false;
      }
    }

    obj[lastProp] = value;
    return true;
  }

  /* eslint-disable no-invalid-this */
  function debounce(fn, wait, callFirst) {
    var timeout;
    return function () {
      if (!wait) {
        return fn.apply(this, arguments);
      }

      var context = this;
      var args = arguments;
      var callNow = callFirst && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        timeout = null;

        if (!callNow) {
          return fn.apply(context, args);
        }
      }, wait);

      if (callNow) {
        return fn.apply(this, arguments);
      }
    };
  }

  /* eslint-disable no-invalid-this */
  function throttle(fn, interval, callFirst) {
    var wait = false;
    var callNow = false;
    return function () {
      callNow = callFirst && !wait;
      var context = this;
      var args = arguments;

      if (!wait) {
        wait = true;
        setTimeout(function () {
          wait = false;

          if (!callFirst) {
            return fn.apply(context, args);
          }
        }, interval);
      }

      if (callNow) {
        callNow = false;
        return fn.apply(this, arguments);
      }
    };
  }

  /* eslint-disable no-param-reassign */
  function pick(obj, select) {
    var result = {};

    if (isString(select)) {
      select = [].slice.call(arguments, 1);
    }

    var len = select.length;

    for (var i = 0; i < len; i++) {
      var key = select[i];

      if (key in obj) {
        result[key] = obj[key];
      }
    }

    return result;
  }

  /* eslint-disable no-param-reassign */
  function omit(obj, remove) {
    var result = {};

    if (isString(remove)) {
      remove = [].slice.call(arguments, 1);
    }

    for (var prop in obj) {
      if (!obj.hasOwnProperty || obj.hasOwnProperty(prop)) {
        if (remove.indexOf(prop) === -1) {
          result[prop] = obj[prop];
        }
      }
    }

    return result;
  }

  /**
   * Remove spaces after removing previous string
   */
  function trim(str) {
    if (isEmpty(str)) {
      return str;
    }

    return str.replace(/(^\s*)|(\s*$)/g, '');
  }

  /**
   * Increase by 0 based on string length before string
   */
  function fillZero(target, n) {
    var z = new Array(n).join('0');
    var str = z + target;
    var result = str.slice(-n);
    return result;
  }

  /**
   * Long string unique
   */
  function longUnique(target) {
    var json = {};

    for (var index = 0; index < target.length; index++) {
      if (!json[target[index]]) {
        json[target[index]] = -1;
      }
    }

    var longString = '';

    for (var _index = 0; _index < target.length; _index++) {
      if (json[target[_index]]) {
        json[target[_index]] = 0;
        longString = longString + target[_index];
      }
    }

    return longString;
  }

  /**
   * Remove the html tags inside the script
   */
  function stripTags(target) {
    return target.replace(/<script[^>]*>(\S\s*?)<\/script>/gim, '').replace(/<[^>]+>/g, '');
  }

  /**
   * Capitalizes the first letter of a string.
   */
  function capitalize(target) {
    return String(target).charAt(0).toUpperCase() + String(target).slice(1).toLowerCase();
  }

  /**
   * DeCapitalizes the first letter of a string.
   */

  function coerceToString(value) {
    var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    if (isNil(value)) {
      return defaultValue;
    }

    if (isString(value)) {
      return value;
    }

    return String(value);
  }

  function deCapitalize(subject) {
    var subjectString = coerceToString(subject);

    if (subjectString === '') {
      return '';
    }

    return subjectString.substr(0, 1).toLowerCase() + subjectString.substr(1);
  }

  /**
   * Creates a new string with the results of calling a provided function
   * on every character in the calling string.
   */
  var mapString = (str, fn) => str.split('').map((c, i) => fn(c, i, str)).join('');

  /**
   * Replaces all but the last num of characters with the specified mask character.
   */
  var mask = function (cc) {
    var num = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;
    var mask = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '*';
    return `${cc}`.slice(-num).padStart(`${cc}`.length, mask);
  };

  /**
   * splitLines('This\nis a\nmultiline\nstring.\n') =>
   * ['This', 'is a', 'multiline', 'string.' , '']
   */
  function splitLines(str) {
    return str.split(/\r?\n/);
  }

  /**
   * _ or - to CamelCase
   */
  function camelize(target) {
    if (target.indexOf('-') < 0 && target.indexOf('_') < 0) {
      return target;
    }

    return target.replace(/[-_][^-_]/g, function (match) {
      return match.charAt(1).toUpperCase();
    });
  }

  /**
   * Turn CamelCase to '_'
   */
  function underscored(target) {
    return target.replace(/([a-z0-9])([A-Z])/g, '$1_$2').toLowerCase();
  }

  /**
   * Turn '_' in a string into '-'
   */

  function dasherize(target) {
    return underscored(String(target)).replace(/_/g, '-');
  }

  /**
   * Truncates a string up to a specified length.
   * The default length is 3, and the truncated symbol defaults '...'
   */

  var truncate = function (str) {
    var num = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
    var len = size(str);
    return len > num ? str.slice(0, num > 3 ? num - 3 : num) + '...' : str;
  };

  /**
   * Returns the length of a string in bytes.
   */
  function byteSize(str) {
    return new Blob([str]).size;
  }

  /* eslint-disable */

  /**
   * Returns the length of a string in bytes by Unicode (utf-8 utf8 utf-16 utf16)
   */
  function byteLen(str, charset) {
    var total = 0;
    var charCode;

    if (charset === 'utf-8' || charset === 'utf8') {
      for (var i = 0, len = str.length; i < len; i++) {
        charCode = str.codePointAt(i);

        if (charCode <= 0x007f) {
          total += 1;
        } else if (charCode <= 0x07ff) {
          total += 2;
        } else if (charCode <= 0xffff) {
          total += 3;
        } else {
          total += 4;
          i++;
        }
      }
    } else if (charset === 'utf-16' || charset === 'utf16') {
      for (var _i = 0, _len = str.length; _i < _len; _i++) {
        charCode = str.codePointAt(_i);

        if (charCode <= 0xffff) {
          total += 2;
        } else {
          total += 4;
          _i++;
        }
      }
    } else {
      total = str.replace(/[^\x00-\xff]/g, 'aa').length;
    }

    return total;
  }

  /**
   * Repeat item, times times
   */
  function repeat(item, times) {
    var s = String(item);
    var target = '';

    while (times > 0) {
      if (times % 2 === 1) {
        target += s;
      }

      if (times === 1) {
        break;
      }

      s += s; // eslint-disable-next-line no-param-reassign

      times = times >> 1;
    }

    return target;
  }

  /**
   * Item is the end of the target
   */
  function endsWith(target, item, ignore) {
    var str = target.slice(-item.length);
    return ignore ? str.toLowerCase() === item.toLowerCase() : str === item;
  }

  /**
   *  Item is the beginning of the target
   */
  function startsWith(target, item, ignore) {
    var str = String(target).slice(0, item.length);
    return ignore ? str.toLowerCase() === item.toLowerCase() : str === item;
  }

  /**
   * XSS string filtering
   */
  function xssFilter(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;');
  }

  function sindex(s, sep) {
    //  discuss at: https://locutus.io/golang/strings/Index
    // original by: Kevin van Zonneveld (https://kvz.io)
    //   example 1: Index('Kevin', 'K')
    //   returns 1: 0
    //   example 2: Index('Kevin', 'Z')
    //   returns 2: -1
    return String(s).indexOf(sep);
  }

  function capwords(str) {
    //   example 1: capwords('kevin van  zonneveld')
    //   returns 1: 'Kevin Van  Zonneveld'
    //   example 2: capwords('HELLO WORLD')
    //   returns 2: 'HELLO WORLD'
    var pattern = /^([a-z\u00E0-\u00FC])|\s+([a-z\u00E0-\u00FC])/g;
    return String(str).replace(pattern, function ($1) {
      return $1.toUpperCase();
    });
  }

  /**
   * Returns all unique values of an array.
   */
  var unique = arr => _toConsumableArray(new Set(arr));

  /**
   * Returns all unique values of an array, based on a provided comparator function.
   */
  var uniqueBy = (arr, fn) => arr.reduce((acc, v) => {
    if (!acc.some(x => fn(v, x))) acc.push(v);
    return acc;
  }, []);

  /**
   * Remove duplicates from an array of objects
   * https://stackoverflow.com/questions/2218999/remove-duplicates-from-an-array-of-objects-in-javascript
   */
  function uniqueFrom(arr, target) {
    return Object.values(arr.reduce((acc, cur) => _extends(acc, {
      [cur[target]]: cur
    }), {}));
  }

  /**
   * Returns a random element from an array.
   */
  var random = arr => arr[Math.floor(Math.random() * arr.length)];

  /**
   * Gets n random elements at unique keys from array up to the size of array.
   */
  function randomSize(_ref) {
    var _ref2 = _toArray(_ref),
        arr = _ref2.slice(0);

    var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var m = arr.length;

    while (m) {
      var i = Math.floor(Math.random() * m--);
      var _ref3 = [arr[i], arr[m]];
      arr[m] = _ref3[0];
      arr[i] = _ref3[1];
    }

    return arr.slice(0, n);
  }

  /**
   * Randomizes the order of the values of an array, returning a new array.
   */
  function shuffle(_ref) {
    var _ref2 = _toArray(_ref),
        arr = _ref2.slice(0);

    var m = arr.length;

    while (m) {
      var i = Math.floor(Math.random() * m--);
      var _ref3 = [arr[i], arr[m]];
      arr[m] = _ref3[0];
      arr[i] = _ref3[1];
    }

    return arr;
  }

  /**
   * Returns true if the element has the specified Array, false otherwise.
   */
  function contains(target, item) {
    return target.indexOf(item) > -1;
  }

  /**
   * Copies the values of `source` to `array`.
   *
   * @private
   * @param {Array} source The array to copy values from.
   * @param {Array} [array=[]] The array to copy values to.
   * @returns {Array} Returns `array`.
   */
  function copyArray(source, array) {
    var index = -1;
    var length = source.length; // eslint-disable-next-line no-param-reassign

    array || (array = new Array(length));

    while (++index < length) {
      array[index] = source[index];
    }

    return array;
  }

  /**
   * Returns true if all the elements values are included in arr, false otherwise.
   */
  var includesAll = (arr, values) => values.every(v => arr.includes(v));

  /**
   * Returns true if at least one element of values is included in arr , false otherwise.
   */
  var includesAny = (arr, values) => values.some(v => arr.includes(v));

  /**
   * Remove the element specified by parameter 2 in parameter 1 and return Boolean
   */
  function removeAt(target, index) {
    return !!target.splice(index, 1).length;
  }

  function remove(arr1, arr2) {
    if (!isArray(arr1) || !isArray(arr2)) {
      throw new Error('expected both arguments to be arrays');
    }

    var result = [];
    var len = arr1.length;

    for (var i = 0; i < len; i++) {
      var elem = arr1[i];

      if (arr2.indexOf(elem) === -1) {
        result.push(elem);
      }
    }

    return result;
  }

  /**
   * returns a copy of an array with falsey values removed
   */
  function compact(arr) {
    if (!isArray(arr)) {
      throw new Error('expected an array');
    }

    var result = [];
    var len = arr.length;

    for (var i = 0; i < len; i++) {
      var elem = arr[i];

      if (elem) {
        result.push(elem);
      }
    }

    return result;
  }

  /**
   * Get the attribute values in an array object and combine them into a new array
   */
  function pluck(target, name) {
    var result = [];
    var temp;
    target.forEach(function (item) {
      if (item[name]) {
        temp = item[name];
        result.push(temp);
      }
    });
    return result;
  }

  /**
   * Returns every element that exists in any of the two arrays once
   * Create a Set with all values of a and b and convert to an array.
   */
  var union = (a, b) => Array.from(new Set([].concat(_toConsumableArray(a), _toConsumableArray(b))));

  /**
   * Returns every element that exists in any of the two arrays once,
   * after applying the provided function to each array element of both.
   */
  var unionBy = (a, b, fn) => {
    var s = new Set(a.map(fn));
    return Array.from(new Set([].concat(_toConsumableArray(a), _toConsumableArray(b.filter(x => !s.has(fn(x)))))));
  };

  /**
   * Returns every element that exists in any of the two arrays once,
   * using a provided comparator function.
   */
  var unionWith = (a, b, comp) => {
    return Array.from(new Set([].concat(_toConsumableArray(a), _toConsumableArray(b.filter(x => a.findIndex(y => comp(x, y)) === -1)))));
  };

  /**
   * Returns a list of elements that exist in both arrays.
   */
  function intersect(a, b) {
    var s = new Set(b);
    return a.filter(x => s.has(x));
  }

  /**
   * Returns a list of elements that exist in both arrays,
   * after applying the provided function to each array element of both.
   */
  function intersectBy(a, b, fn) {
    var s = new Set(b.map(fn));
    return a.filter(x => s.has(fn(x)));
  }

  /**
   * Returns the difference between two arrays.
   * Create a Set from b, then use Array.prototype.
   * Filter() on a to only keep values not contained in b.
   */
  function difference(a, b) {
    var s = new Set(b);
    return a.filter(x => !s.has(x));
  }

  /**
   * Returns the difference between two arrays,
   * after applying the provided function to each array element of both.
   */
  function differenceBy(a, b, fn) {
    var s = new Set(b.map(fn));
    return a.map(fn).filter(el => !s.has(el));
  }

  /**
   * Returns the largest element in an array
   */
  function max(target) {
    return Math.max.apply(0, target);
  }

  /**
   * Returns the smallest element in an array
   */
  function min(target) {
    return Math.min.apply(0, target);
  }

  /**
   * Check two arrays are equal
   */
  function equal(arr1, arr2) {
    var length = size(arr1);
    if (length !== size(arr2)) return false;

    for (var i = 0; i < length; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }

    return true;
  }

  /**
   * Check if all elements in an array are equal.
   */
  var allEqual = arr => arr.every(val => val === arr[0]);

  /**
   * Returns true if the provided predicate function returns true for all elements in a collection, false otherwise.
   */
  var all = function (arr) {
    var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Boolean;
    return arr.every(fn);
  };

  /**
   * Returns true if the provided predicate function returns true for at least one element in a collection,false otherwise.
   */
  var any = function (arr) {
    var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Boolean;
    return arr.some(fn);
  };

  /**
   * Chunks an array into smaller arrays of a specified size.
   */
  var chunk = (arr, size) => {
    return Array.from({
      length: Math.ceil(arr.length / size)
    }, (v, i) => arr.slice(i * size, i * size + size));
  };

  /**
   * Groups the elements of an array based on the given function and returns the count of elements in each group.
   */

  var countBy = (arr, fn) => {
    return arr.map(isFunction(fn) ? fn : val => val[fn]).reduce((acc, val) => {
      acc[val] = (acc[val] || 0) + 1;
      return acc;
    }, {});
  };

  /**
   * Counts the occurrences of a value in an array.
   */
  var countOccurrences = (arr, val) => {
    return arr.reduce((a, v) => v === val ? a + 1 : a, 0);
  };

  /**
   * Returns a new array with n elements removed from the left.
   */
  var drop = function (arr) {
    var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return arr.slice(n);
  };

  /**
   * Returns a new array with n elements removed from the right.
   */
  var dropRight = function (arr) {
    var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return arr.slice(0, -n);
  };

  /**
   * Removes elements in an array until the passed function returns true.
   * Returns the remaining elements in the array.
   */
  function dropWhile(arr, func) {
    var _arr = arr;

    while (_arr.length > 0 && !func(_arr[0])) {
      _arr = _arr.slice(1);
    }

    return _arr;
  }

  /**
   * Removes elements from the end of an array until the passed function returns true,
   * Returns the remaining elements in the array.
   */
  function dropRightWhile(arr, func) {
    var rightIndex = size(arr);

    while (rightIndex-- && !func(arr[rightIndex])) {
    }

    return arr.slice(0, rightIndex + 1);
  }

  function column(input, ColumnKey) {
    var IndexKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    if (input !== null && (isObject(input) || isArray(input))) {
      var newarray = [];

      if (isObject(input)) {
        var temparray = [];

        for (var key of Object.keys(input)) {
          temparray.push(input[key]);
        } // eslint-disable-next-line no-param-reassign


        input = temparray;
      }

      if (isArray(input)) {
        for (var _key of input.keys()) {
          if (IndexKey && input[_key][IndexKey]) {
            if (ColumnKey) {
              newarray[input[_key][IndexKey]] = input[_key][ColumnKey];
            } else {
              newarray[input[_key][IndexKey]] = input[_key];
            }
          } else {
            if (ColumnKey) {
              newarray.push(input[_key][ColumnKey]);
            } else {
              newarray.push(input[_key]);
            }
          }
        }
      } // eslint-disable-next-line prefer-object-spread


      return _extends({}, newarray);
    } else {
      throw new Error('throw an error');
    }
  }

  function split(arr, n) {
    if (!isArray(arr)) {
      throw new Error('expected an array for the first argument');
    }

    if (n !== null && !isNumber(n)) {
      throw new Error('expected a number or null for the second argument');
    } // eslint-disable-next-line no-param-reassign


    n = n !== null ? n : arr.length;
    var len = arr.length;
    var groups = [];

    for (var i = 0; i < len; i += n) {
      groups.push(arr.slice(i, i + n));
    }

    return groups;
  }

  var unary = fn => val => fn(val);

  /**
   * return an object from an array, keyed by the value at the given id
   */
  function indexBy(arr, key) {
    if (!isArray(arr)) {
      throw new Error('expected an array for first argument');
    }

    if (!isString(key)) {
      throw new Error('expected a string for second argument');
    }

    var result = {};
    var len = arr.length;

    for (var i = 0; i < len; i++) {
      var index = arr[i] && arr[i][key];

      if (index) {
        result[index] = arr[i];
      }
    }

    return result;
  }

  var functions = {
    // version
    version: version,
    noConflict: noConflict,
    // device
    ua: ua,
    isIos: isIOS,
    isIOS: isIOS,
    isiPhone: iPhone,
    isIPad: isIPad,
    isAndroid: isAndroid,
    isMobile: isMobile,
    isPC: isPC,
    isWeixin: isWeixin,
    isNewsApp: isNewsApp,
    isQQ: isQQ,
    isQQbrowser: isQQbrowser,
    isTenvideo: isTenvideo,
    isWeiShi: isWeiShi,
    isIphoneXmodel: isIphoneXmodel,
    ieVersion: ieVersion,
    isIE: isIE,
    // log
    log: log,
    logs: logs,
    removeConsole: removeConsole,
    // arg(arguments)
    args: args,
    trash: trash,
    noop: noop,
    merge: merge,
    over: over,
    call: call,
    hasOwnProperty: hasOwnProperty,
    // bom
    trigger: trigger,
    stopPropagation: stopPropagation,
    g: g,
    gc: gc,
    c: c,
    query: query,
    show: show,
    hide: hide,
    elementContains: elementContains,
    getStyle: getStyle,
    setStyle: setStyle,
    attr: attr,
    // other
    uuid: uuid,
    hash: hash,
    judge: judge,
    judgment: judge,
    getType: getType,
    isTypeof: isTypeof,
    construct: construct,
    paramsName: paramsName,
    eventEmitter: EventEmitter,
    // object
    properObject: properObject,
    objectDiff: objectDiff,
    addedDiff: addedDiff,
    deletedDiff: deletedDiff,
    updatedDiff: updatedDiff,
    detailedDiff: detailedDiff,
    // load
    loadImages: loadImages,
    loadjs: loadjs,
    loadcss: loadcss,
    // json
    toJson: toJson,
    toJSON: toJson,
    tojson: toJson,
    jsonp: jsonp,
    // cookie
    cookie: cookie,
    setCookie: setCookie,
    getCookie: getCookie,
    deleteCookie: deleteCookie,
    delCookie: deleteCookie,
    parseCookie: parseCookie,
    // storage
    storage: storage$1,
    // http
    open: open,
    getUrlParam: getUrlParam,
    setUrlParam: setUrlParam,
    deleteUrlParam: deleteUrlParam,
    delUrlParam: deleteUrlParam,
    objectParam: objectParam,
    httpGet: httpGet,
    httpPost: httpPost,
    // times
    setTimesout: setTimesout,
    clearTimesout: clearTimesout,
    getDate: getDate,
    formatPassTime: formatPassTime,
    formatRemainTime: formatRemainTime,
    formatDuration: formatDuration,
    sleep: sleep,
    retry: retry,
    // fill
    fill0: fill0,
    floor: floor,
    chainAsync: chainAsync,
    numberFormat: numberFormat,
    modulo: modulo,
    // random
    randomColor: randomColor,
    randomA2B: randomA2B,
    randomFromA2B: randomA2B,
    randomKey: randomKey,
    // behavior
    lockTouch: lockTouch,
    copyToClipboard: copyToClipboard,
    // collection
    clone: clone,
    deepClone: clone,
    values: values,
    entries: entries,
    extend: extend,
    flush: flush,
    search: search,
    size: size,
    // lodash
    getTag: getTag,
    is: is,
    isObject: isObject,
    isDate: isDate,
    isArray: isArray,
    isString: isString,
    isBoolean: isBoolean,
    isNumber: isNumber,
    isMap: isMap,
    isSet: isSet,
    isSymbol: isSymbol,
    isFunction: isFunction,
    isEmpty: isEmpty,
    isNil: isNil,
    isShallowEqual: isShallowEqual,
    isEqual: isShallowEqual,
    has: has,
    reduce: reduce,
    forEach: forEach,
    each: forEach,
    map: map,
    mapValues: mapValues,
    findIndex: findIndex,
    find: find,
    toPath: toPath,
    get: get,
    set: set,
    debounce: debounce,
    throttle: throttle,
    pick: pick,
    omit: omit,
    // string
    trim: trim,
    fillZero: fillZero,
    longUnique: longUnique,
    stripTags: stripTags,
    capitalize: capitalize,
    deCapitalize: deCapitalize,
    isAbsoluteURL: isAbsoluteURL,
    mapString: mapString,
    mask: mask,
    splitLines: splitLines,
    camelize: camelize,
    underscored: underscored,
    dasherize: dasherize,
    truncate: truncate,
    byteSize: byteSize,
    byteLen: byteLen,
    repeat: repeat,
    endsWith: endsWith,
    startsWith: startsWith,
    containsWith: containsWith,
    xssFilter: xssFilter,
    effortIndex: sindex,
    capwords: capwords,
    // array
    unique: unique,
    uniqueBy: uniqueBy,
    uniqueFrom: uniqueFrom,
    random: random,
    randomSize: randomSize,
    shuffle: shuffle,
    contains: contains,
    copyArray: copyArray,
    includesAll: includesAll,
    includesAny: includesAny,
    removeAt: removeAt,
    remove: remove,
    compact: compact,
    pluck: pluck,
    union: union,
    unionBy: unionBy,
    unionWith: unionWith,
    intersect: intersect,
    intersectBy: intersectBy,
    difference: difference,
    differenceBy: differenceBy,
    max: max,
    min: min,
    equal: equal,
    allEqual: allEqual,
    all: all,
    any: any,
    chunk: chunk,
    countBy: countBy,
    countOccurrences: countOccurrences,
    drop: drop,
    dropRight: dropRight,
    dropWhile: dropWhile,
    dropRightWhile: dropRightWhile,
    column: column,
    split: split,
    unary: unary,
    indexBy: indexBy
  };

  /* eslint-disable no-invalid-this */

  function ChainWrapper(subject, explicitChain) {
    this._wrappedValue = subject;
    this._explicitChain = explicitChain;
  }

  ChainWrapper.prototype.value = function () {
    return this._wrappedValue;
  };

  ChainWrapper.prototype.valueOf = function () {
    return this.value();
  };

  ChainWrapper.prototype.toJSON = function () {
    return this.value();
  };

  ChainWrapper.prototype.toString = function () {
    return String(this.value());
  };

  ChainWrapper.prototype.chain = function () {
    return new ChainWrapper(this._wrappedValue, true);
  };

  ChainWrapper.prototype.thru = function (changer) {
    if (isFunction(changer)) {
      return new ChainWrapper(changer(this._wrappedValue), this._explicitChain);
    }

    return this;
  };

  ChainWrapper.prototype._explicitChain = true;

  function makeFunctionChainable(functionInstance) {
    return function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var result = functionInstance.apply(void 0, [this._wrappedValue].concat(args));

      if (this._explicitChain || isString(result)) {
        return new ChainWrapper(result, this._explicitChain);
      } else {
        return result;
      }
    };
  }

  Object.keys(functions).forEach(function (name) {
    ChainWrapper.prototype[name] = makeFunctionChainable(functions[name]);
  });

  function chain(subject) {
    return new ChainWrapper(subject, true);
  }

  function bbo(subject) {
    return new ChainWrapper(subject, false);
  }

  _extends(bbo, functions, {
    chain: chain
  });

  return bbo;

})));
