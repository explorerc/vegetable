!(function (t, e) { if (typeof exports === 'object' && typeof module === 'object')module.exports = e(); else if (typeof define === 'function' && define.amd)define([], e); else { var n = e(); for (var r in n)(typeof exports === 'object' ? exports : t)[r] = n[r] } }(window, function () { return (function (t) { var e = {}; function n (r) { if (e[r]) return e[r].exports; var o = e[r] = { i: r, l: !1, exports: {} }; return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports } return n.m = t, n.c = e, n.d = function (t, e, r) { n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r }) }, n.r = function (t) { typeof Symbol !== 'undefined' && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(t, '__esModule', { value: !0 }) }, n.t = function (t, e) { if (1 & e && (t = n(t)), 8 & e) return t; if (4 & e && typeof t === 'object' && t && t.__esModule) return t; var r = Object.create(null); if (n.r(r), Object.defineProperty(r, 'default', { enumerable: !0, value: t }), 2 & e && typeof t !== 'string') for (var o in t)n.d(r, o, function (e) { return t[e] }.bind(null, o)); return r }, n.n = function (t) { var e = t && t.__esModule ? function () { return t.default } : function () { return t }; return n.d(e, 'a', e), e }, n.o = function (t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, n.p = '/', n(n.s = 15) }([function (t, e) { var n = t.exports = { version: '2.5.7' }; typeof __e === 'number' && (__e = n) }, function (t, e, n) { t.exports = !n(2)(function () { return Object.defineProperty({}, 'a', { get: function () { return 7 } }).a != 7 }) }, function (t, e) { t.exports = function (t) { try { return !!t() } catch (t) { return !0 } } }, function (t, e) { var n = t.exports = typeof window !== 'undefined' && window.Math == Math ? window : typeof self !== 'undefined' && self.Math == Math ? self : Function('return this')(); typeof __g === 'number' && (__g = n) }, function (t, e, n) { var r = n(3); var o = n(0); var u = n(31); var i = n(33); var a = n(10); var c = function (t, e, n) { var f; var s; var l; var p = t & c.F; var d = t & c.G; var v = t & c.S; var h = t & c.P; var y = t & c.B; var b = t & c.W; var _ = d ? o : o[e] || (o[e] = {}); var g = _.prototype; var w = d ? r : v ? r[e] : (r[e] || {}).prototype; for (f in d && (n = e), n)(s = !p && w && void 0 !== w[f]) && a(_, f) || (l = s ? w[f] : n[f], _[f] = d && typeof w[f] !== 'function' ? n[f] : y && s ? u(l, r) : b && w[f] == l ? (function (t) { var e = function (e, n, r) { if (this instanceof t) { switch (arguments.length) { case 0:return new t(); case 1:return new t(e); case 2:return new t(e, n) } return new t(e, n, r) } return t.apply(this, arguments) }; return e.prototype = t.prototype, e }(l)) : h && typeof l === 'function' ? u(Function.call, l) : l, h && ((_.virtual || (_.virtual = {}))[f] = l, t & c.R && g && !g[f] && i(g, f, l))) }; c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, c.U = 64, c.R = 128, t.exports = c }, function (t, e) { t.exports = function (t) { return typeof t === 'object' ? t !== null : typeof t === 'function' } }, function (t, e, n) { 'use strict'; Object.defineProperty(e, '__esModule', { value: !0 }); e.actions = { ENTER: { type: 'url', value: 0 }, LEAVE: { type: 'url', value: 1 }, CHAT: { type: 'action', value: 2 }, SHARE: { type: 'action', value: 3 } }, e.urlKeys = { '/watch/': { 0: { k: 602007, behavior: 6 }, 1: { k: 602009, behavior: 8 } }, '/subscribe/': { 0: { k: 602003, behavior: 2 }, 1: { k: 602004, behavior: 3 } }, '/site/': { 0: { k: 602001, behavior: 0 }, 1: { k: 602002, behavior: 1 } } }, e.actionKeys = { 2: { k: 602008, behavior: 7 }, 3: { k: 602010, behavior: 9 } } }, function (t, e, n) { var r = n(8); t.exports = function (t) { return Object(r(t)) } }, function (t, e) { t.exports = function (t) { if (void 0 == t) throw TypeError("Can't call method on  " + t); return t } }, function (t, e, n) { var r = n(20); var o = n(29); t.exports = Object.keys || function (t) { return r(t, o) } }, function (t, e) { var n = {}.hasOwnProperty; t.exports = function (t, e) { return n.call(t, e) } }, function (t, e, n) { var r = n(12); var o = n(8); t.exports = function (t) { return r(o(t)) } }, function (t, e, n) { var r = n(21); t.exports = Object('z').propertyIsEnumerable(0) ? Object : function (t) { return r(t) == 'String' ? t.split('') : Object(t) } }, function (t, e) { var n = Math.ceil; var r = Math.floor; t.exports = function (t) { return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t) } }, function (t, e, n) { var r = n(34); var o = n(35); var u = n(37); var i = Object.defineProperty; e.f = n(1) ? Object.defineProperty : function (t, e, n) { if (r(t), e = u(e, !0), r(n), o) try { return i(t, e, n) } catch (t) {} if ('get' in n || 'set' in n) throw TypeError('Accessors not supported!'); return 'value' in n && (t[e] = n.value), t } }, function (t, e, n) { 'use strict'; Object.defineProperty(e, '__esModule', { value: !0 }); var r = i(n(16)); var o = n(6); var u = i(n(52)); function i (t) { return t && t.__esModule ? t : { default: t } }r.default.use(u.default), e.default = { Vhall_User_Log: r.default, Vhall_User_Actions: o.actions } }, function (t, e, n) { 'use strict'; Object.defineProperty(e, '__esModule', { value: !0 }); var r = s(n(17)); var o = s(n(39)); var u = s(n(45)); var i = s(n(46)); var a = s(n(50)); var c = s(n(51)); var f = n(6); function s (t) { return t && t.__esModule ? t : { default: t } } var l = (function () { function t (e) { (0, u.default)(this, t), this.s = 0, this.start = 0, this.loadPlugins(), this.updateSid(), this.reportUrl = 'https://dc.e.vhall.com/login', this.baseParams = a.default, this.reportParams = (0, o.default)({}, c.default, e) } return (0, i.default)(t, null, [{ key: 'use', value: function (e) { t.plugins.push(e) } }]), (0, i.default)(t, [{ key: 'loadPlugins', value: function () { var e = this; t.plugins.forEach(function (n) { n.call(e, t) }) } }, { key: 'set', value: function (t, e) { this.updateParams[t] = e } }, { key: 'updateSid', value: function () { this.s = '' + Date.now() + Math.floor(1e4 * Math.random()), this.start = Date.now() } }, { key: 'track', value: function (t, e) { var n = this.analysisKeys(t); if (n) { var r = n.k; var u = { behavior: n.behavior }; e && (u.event = e); var i = (0, o.default)({}, this.baseParams, this.reportParams, u); var a = ''; for (var c in i)a += (a ? '&' : '') + c + '=' + i[c]; var f = new Image(); var s = '' + Date.now() + Math.floor(1e4 * Math.random()); var l = window.btoa(a); var p = this.reportUrl + '?k=' + r + '&id=' + s + '&s=' + this.s + '&token=' + l; f.src = p } } }, { key: 'analysisKeys', value: function (t) { var e = 0; switch (t.type) { case 'url':var n = window.location.pathname; var o = (0, r.default)(f.urlKeys).find(function (t) { return n.indexOf(t) != -1 }); o && (e = f.urlKeys[o][t.value]); break; case 'action':e = f.actionKeys[t.value] } return e } }]), t }()); l.plugins = [], e.default = l }, function (t, e, n) { t.exports = { default: n(18), __esModule: !0 } }, function (t, e, n) { n(19), t.exports = n(0).Object.keys }, function (t, e, n) { var r = n(7); var o = n(9); n(30)('keys', function () { return function (t) { return o(r(t)) } }) }, function (t, e, n) { var r = n(10); var o = n(11); var u = n(22)(!1); var i = n(25)('IE_PROTO'); t.exports = function (t, e) { var n; var a = o(t); var c = 0; var f = []; for (n in a)n != i && r(a, n) && f.push(n); for (;e.length > c;)r(a, n = e[c++]) && (~u(f, n) || f.push(n)); return f } }, function (t, e) { var n = {}.toString; t.exports = function (t) { return n.call(t).slice(8, -1) } }, function (t, e, n) { var r = n(11); var o = n(23); var u = n(24); t.exports = function (t) { return function (e, n, i) { var a; var c = r(e); var f = o(c.length); var s = u(i, f); if (t && n != n) { for (;f > s;) if ((a = c[s++]) != a) return !0 } else for (;f > s; s++) if ((t || s in c) && c[s] === n) return t || s || 0; return !t && -1 } } }, function (t, e, n) { var r = n(13); var o = Math.min; t.exports = function (t) { return t > 0 ? o(r(t), 9007199254740991) : 0 } }, function (t, e, n) { var r = n(13); var o = Math.max; var u = Math.min; t.exports = function (t, e) { return (t = r(t)) < 0 ? o(t + e, 0) : u(t, e) } }, function (t, e, n) { var r = n(26)('keys'); var o = n(28); t.exports = function (t) { return r[t] || (r[t] = o(t)) } }, function (t, e, n) { var r = n(0); var o = n(3); var u = o['__core-js_shared__'] || (o['__core-js_shared__'] = {}); (t.exports = function (t, e) { return u[t] || (u[t] = void 0 !== e ? e : {}) })('versions', []).push({ version: r.version, mode: n(27) ? 'pure' : 'global', copyright: '© 2018 Denis Pushkarev (zloirock.ru)' }) }, function (t, e) { t.exports = !0 }, function (t, e) { var n = 0; var r = Math.random(); t.exports = function (t) { return 'Symbol('.concat(void 0 === t ? '' : t, ')_', (++n + r).toString(36)) } }, function (t, e) { t.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',') }, function (t, e, n) { var r = n(4); var o = n(0); var u = n(2); t.exports = function (t, e) { var n = (o.Object || {})[t] || Object[t]; var i = {}; i[t] = e(n), r(r.S + r.F * u(function () { n(1) }), 'Object', i) } }, function (t, e, n) { var r = n(32); t.exports = function (t, e, n) { if (r(t), void 0 === e) return t; switch (n) { case 1:return function (n) { return t.call(e, n) }; case 2:return function (n, r) { return t.call(e, n, r) }; case 3:return function (n, r, o) { return t.call(e, n, r, o) } } return function () { return t.apply(e, arguments) } } }, function (t, e) { t.exports = function (t) { if (typeof t !== 'function') throw TypeError(t + ' is not a function!'); return t } }, function (t, e, n) { var r = n(14); var o = n(38); t.exports = n(1) ? function (t, e, n) { return r.f(t, e, o(1, n)) } : function (t, e, n) { return t[e] = n, t } }, function (t, e, n) { var r = n(5); t.exports = function (t) { if (!r(t)) throw TypeError(t + ' is not an object!'); return t } }, function (t, e, n) { t.exports = !n(1) && !n(2)(function () { return Object.defineProperty(n(36)('div'), 'a', { get: function () { return 7 } }).a != 7 }) }, function (t, e, n) { var r = n(5); var o = n(3).document; var u = r(o) && r(o.createElement); t.exports = function (t) { return u ? o.createElement(t) : {} } }, function (t, e, n) { var r = n(5); t.exports = function (t, e) { if (!r(t)) return t; var n, o; if (e && typeof (n = t.toString) === 'function' && !r(o = n.call(t))) return o; if (typeof (n = t.valueOf) === 'function' && !r(o = n.call(t))) return o; if (!e && typeof (n = t.toString) === 'function' && !r(o = n.call(t))) return o; throw TypeError("Can't convert object to primitive value") } }, function (t, e) { t.exports = function (t, e) { return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e } } }, function (t, e, n) { t.exports = { default: n(40), __esModule: !0 } }, function (t, e, n) { n(41), t.exports = n(0).Object.assign }, function (t, e, n) { var r = n(4); r(r.S + r.F, 'Object', { assign: n(42) }) }, function (t, e, n) { 'use strict'; var r = n(9); var o = n(43); var u = n(44); var i = n(7); var a = n(12); var c = Object.assign; t.exports = !c || n(2)(function () { var t = {}; var e = {}; var n = Symbol(); var r = 'abcdefghijklmnopqrst'; return t[n] = 7, r.split('').forEach(function (t) { e[t] = t }), c({}, t)[n] != 7 || Object.keys(c({}, e)).join('') != r }) ? function (t, e) { for (var n = i(t), c = arguments.length, f = 1, s = o.f, l = u.f; c > f;) for (var p, d = a(arguments[f++]), v = s ? r(d).concat(s(d)) : r(d), h = v.length, y = 0; h > y;)l.call(d, p = v[y++]) && (n[p] = d[p]); return n } : c }, function (t, e) { e.f = Object.getOwnPropertySymbols }, function (t, e) { e.f = {}.propertyIsEnumerable }, function (t, e, n) { 'use strict'; e.__esModule = !0, e.default = function (t, e) { if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function') } }, function (t, e, n) { 'use strict'; e.__esModule = !0; var r = (function (t) { return t && t.__esModule ? t : { default: t } }(n(47))); e.default = (function () { function t (t, e) { for (var n = 0; n < e.length; n++) { var o = e[n]; o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), (0, r.default)(t, o.key, o) } } return function (e, n, r) { return n && t(e.prototype, n), r && t(e, r), e } }()) }, function (t, e, n) { t.exports = { default: n(48), __esModule: !0 } }, function (t, e, n) { n(49); var r = n(0).Object; t.exports = function (t, e, n) { return r.defineProperty(t, e, n) } }, function (t, e, n) { var r = n(4); r(r.S + r.F * !n(1), 'Object', { defineProperty: n(14).f }) }, function (t, e, n) { 'use strict'; Object.defineProperty(e, '__esModule', { value: !0 }); var r = { url: document.URL, title: document.title, referrer: document.referrer, width: window.screen.width, height: window.screen.height, language: navigator.language, platform: navigator.platform }; e.default = r }, function (t, e, n) { 'use strict'; Object.defineProperty(e, '__esModule', { value: !0 }); e.default = { business_uid: 0, consumer_uid: 0, activity_id: 0, visitor_id: 0, behavior: 0, event: '', pf: -1, service_names: '', bu: '' } }, function (t, e, n) { 'use strict'; Object.defineProperty(e, '__esModule', { value: !0 }), e.default = function () { var t = this; if (!history.onstatechange) { var e = location.href; history.onstatechange = function (e) { var n = Math.floor(Date.now() - t.start); t.track(r.actions.LEAVE, n), t.updateSid() }, window.addEventListener('popstate', function (t) { history.onstatechange({ state: t.state, url: e }), e = location.href }), window.addEventListener('beforeunload', function (t) { history.onstatechange({ state: t.state, url: e }) }), (function (t) { var e = t.pushState; var n = t.replaceState; t.pushState = function (n) { return typeof t.onstatechange === 'function' && t.onstatechange({ state: n, url: location.href }), e.apply(t, arguments) }, t.replaceState = function (e) { return typeof t.onstatechange === 'function' && t.onstatechange({ state: e, url: location.href }), n.apply(t, arguments) } }(window.history)) } }; var r = n(6) }])).default }))
