function $c(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const i = Object.getOwnPropertyDescriptor(r, l);
          i &&
            Object.defineProperty(
              e,
              l,
              i.get ? i : { enumerable: !0, get: () => r[l] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const i of l)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const i = {};
    return (
      l.integrity && (i.integrity = l.integrity),
      l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : l.crossOrigin === "anonymous"
          ? (i.credentials = "omit")
          : (i.credentials = "same-origin"),
      i
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const i = n(l);
    fetch(l.href, i);
  }
})();
function Qc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Hc = { exports: {} },
  Qi = {},
  Yc = { exports: {} },
  G = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var gl = Symbol.for("react.element"),
  ep = Symbol.for("react.portal"),
  tp = Symbol.for("react.fragment"),
  np = Symbol.for("react.strict_mode"),
  rp = Symbol.for("react.profiler"),
  lp = Symbol.for("react.provider"),
  ip = Symbol.for("react.context"),
  op = Symbol.for("react.forward_ref"),
  ap = Symbol.for("react.suspense"),
  sp = Symbol.for("react.memo"),
  up = Symbol.for("react.lazy"),
  ou = Symbol.iterator;
function cp(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ou && e[ou]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Xc = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Gc = Object.assign,
  Kc = {};
function wr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Kc),
    (this.updater = n || Xc);
}
wr.prototype.isReactComponent = {};
wr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
wr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Zc() {}
Zc.prototype = wr.prototype;
function Qa(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Kc),
    (this.updater = n || Xc);
}
var Ha = (Qa.prototype = new Zc());
Ha.constructor = Qa;
Gc(Ha, wr.prototype);
Ha.isPureReactComponent = !0;
var au = Array.isArray,
  Jc = Object.prototype.hasOwnProperty,
  Ya = { current: null },
  bc = { key: !0, ref: !0, __self: !0, __source: !0 };
function qc(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Jc.call(t, r) && !bc.hasOwnProperty(r) && (l[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) l.children = n;
  else if (1 < a) {
    for (var s = Array(a), u = 0; u < a; u++) s[u] = arguments[u + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) l[r] === void 0 && (l[r] = a[r]);
  return {
    $$typeof: gl,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: Ya.current,
  };
}
function dp(e, t) {
  return {
    $$typeof: gl,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Xa(e) {
  return typeof e == "object" && e !== null && e.$$typeof === gl;
}
function fp(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var su = /\/+/g;
function po(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? fp("" + e.key)
    : t.toString(36);
}
function ei(e, t, n, r, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case gl:
          case ep:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (l = l(o)),
      (e = r === "" ? "." + po(o, 0) : r),
      au(l)
        ? ((n = ""),
          e != null && (n = e.replace(su, "$&/") + "/"),
          ei(l, t, n, "", function (u) {
            return u;
          }))
        : l != null &&
          (Xa(l) &&
            (l = dp(
              l,
              n +
                (!l.key || (o && o.key === l.key)
                  ? ""
                  : ("" + l.key).replace(su, "$&/") + "/") +
                e,
            )),
          t.push(l)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), au(e)))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var s = r + po(i, a);
      o += ei(i, t, n, s, l);
    }
  else if (((s = cp(e)), typeof s == "function"))
    for (e = s.call(e), a = 0; !(i = e.next()).done; )
      (i = i.value), (s = r + po(i, a++)), (o += ei(i, t, n, s, l));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      ))
    );
  return o;
}
function Ol(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    ei(e, r, "", "", function (i) {
      return t.call(n, i, l++);
    }),
    r
  );
}
function hp(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ve = { current: null },
  ti = { transition: null },
  pp = {
    ReactCurrentDispatcher: Ve,
    ReactCurrentBatchConfig: ti,
    ReactCurrentOwner: Ya,
  };
function ed() {
  throw Error("act(...) is not supported in production builds of React.");
}
G.Children = {
  map: Ol,
  forEach: function (e, t, n) {
    Ol(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Ol(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Ol(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Xa(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
G.Component = wr;
G.Fragment = tp;
G.Profiler = rp;
G.PureComponent = Qa;
G.StrictMode = np;
G.Suspense = ap;
G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = pp;
G.act = ed;
G.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = Gc({}, e.props),
    l = e.key,
    i = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (o = Ya.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (s in t)
      Jc.call(t, s) &&
        !bc.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && a !== void 0 ? a[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    a = Array(s);
    for (var u = 0; u < s; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: gl, type: e.type, key: l, ref: i, props: r, _owner: o };
};
G.createContext = function (e) {
  return (
    (e = {
      $$typeof: ip,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: lp, _context: e }),
    (e.Consumer = e)
  );
};
G.createElement = qc;
G.createFactory = function (e) {
  var t = qc.bind(null, e);
  return (t.type = e), t;
};
G.createRef = function () {
  return { current: null };
};
G.forwardRef = function (e) {
  return { $$typeof: op, render: e };
};
G.isValidElement = Xa;
G.lazy = function (e) {
  return { $$typeof: up, _payload: { _status: -1, _result: e }, _init: hp };
};
G.memo = function (e, t) {
  return { $$typeof: sp, type: e, compare: t === void 0 ? null : t };
};
G.startTransition = function (e) {
  var t = ti.transition;
  ti.transition = {};
  try {
    e();
  } finally {
    ti.transition = t;
  }
};
G.unstable_act = ed;
G.useCallback = function (e, t) {
  return Ve.current.useCallback(e, t);
};
G.useContext = function (e) {
  return Ve.current.useContext(e);
};
G.useDebugValue = function () {};
G.useDeferredValue = function (e) {
  return Ve.current.useDeferredValue(e);
};
G.useEffect = function (e, t) {
  return Ve.current.useEffect(e, t);
};
G.useId = function () {
  return Ve.current.useId();
};
G.useImperativeHandle = function (e, t, n) {
  return Ve.current.useImperativeHandle(e, t, n);
};
G.useInsertionEffect = function (e, t) {
  return Ve.current.useInsertionEffect(e, t);
};
G.useLayoutEffect = function (e, t) {
  return Ve.current.useLayoutEffect(e, t);
};
G.useMemo = function (e, t) {
  return Ve.current.useMemo(e, t);
};
G.useReducer = function (e, t, n) {
  return Ve.current.useReducer(e, t, n);
};
G.useRef = function (e) {
  return Ve.current.useRef(e);
};
G.useState = function (e) {
  return Ve.current.useState(e);
};
G.useSyncExternalStore = function (e, t, n) {
  return Ve.current.useSyncExternalStore(e, t, n);
};
G.useTransition = function () {
  return Ve.current.useTransition();
};
G.version = "18.3.1";
Yc.exports = G;
var C = Yc.exports;
const rn = Qc(C),
  mp = $c({ __proto__: null, default: rn }, [C]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var gp = C,
  vp = Symbol.for("react.element"),
  yp = Symbol.for("react.fragment"),
  wp = Object.prototype.hasOwnProperty,
  xp = gp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Sp = { key: !0, ref: !0, __self: !0, __source: !0 };
function td(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) wp.call(t, r) && !Sp.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: vp,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: xp.current,
  };
}
Qi.Fragment = yp;
Qi.jsx = td;
Qi.jsxs = td;
Hc.exports = Qi;
var E = Hc.exports,
  nd = { exports: {} },
  lt = {},
  rd = { exports: {} },
  ld = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(D, A) {
    var Y = D.length;
    D.push(A);
    e: for (; 0 < Y; ) {
      var le = (Y - 1) >>> 1,
        oe = D[le];
      if (0 < l(oe, A)) (D[le] = A), (D[Y] = oe), (Y = le);
      else break e;
    }
  }
  function n(D) {
    return D.length === 0 ? null : D[0];
  }
  function r(D) {
    if (D.length === 0) return null;
    var A = D[0],
      Y = D.pop();
    if (Y !== A) {
      D[0] = Y;
      e: for (var le = 0, oe = D.length, Qe = oe >>> 1; le < Qe; ) {
        var He = 2 * (le + 1) - 1,
          jt = D[He],
          je = He + 1,
          ot = D[je];
        if (0 > l(jt, Y))
          je < oe && 0 > l(ot, jt)
            ? ((D[le] = ot), (D[je] = Y), (le = je))
            : ((D[le] = jt), (D[He] = Y), (le = He));
        else if (je < oe && 0 > l(ot, Y)) (D[le] = ot), (D[je] = Y), (le = je);
        else break e;
      }
    }
    return A;
  }
  function l(D, A) {
    var Y = D.sortIndex - A.sortIndex;
    return Y !== 0 ? Y : D.id - A.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      a = o.now();
    e.unstable_now = function () {
      return o.now() - a;
    };
  }
  var s = [],
    u = [],
    d = 1,
    c = null,
    h = 3,
    w = !1,
    x = !1,
    S = !1,
    j = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(D) {
    for (var A = n(u); A !== null; ) {
      if (A.callback === null) r(u);
      else if (A.startTime <= D)
        r(u), (A.sortIndex = A.expirationTime), t(s, A);
      else break;
      A = n(u);
    }
  }
  function _(D) {
    if (((S = !1), v(D), !x))
      if (n(s) !== null) (x = !0), $e(T);
      else {
        var A = n(u);
        A !== null && Qt(_, A.startTime - D);
      }
  }
  function T(D, A) {
    (x = !1), S && ((S = !1), m(g), (g = -1)), (w = !0);
    var Y = h;
    try {
      for (
        v(A), c = n(s);
        c !== null && (!(c.expirationTime > A) || (D && !$()));

      ) {
        var le = c.callback;
        if (typeof le == "function") {
          (c.callback = null), (h = c.priorityLevel);
          var oe = le(c.expirationTime <= A);
          (A = e.unstable_now()),
            typeof oe == "function" ? (c.callback = oe) : c === n(s) && r(s),
            v(A);
        } else r(s);
        c = n(s);
      }
      if (c !== null) var Qe = !0;
      else {
        var He = n(u);
        He !== null && Qt(_, He.startTime - A), (Qe = !1);
      }
      return Qe;
    } finally {
      (c = null), (h = Y), (w = !1);
    }
  }
  var P = !1,
    R = null,
    g = -1,
    I = 5,
    z = -1;
  function $() {
    return !(e.unstable_now() - z < I);
  }
  function Z() {
    if (R !== null) {
      var D = e.unstable_now();
      z = D;
      var A = !0;
      try {
        A = R(!0, D);
      } finally {
        A ? ye() : ((P = !1), (R = null));
      }
    } else P = !1;
  }
  var ye;
  if (typeof f == "function")
    ye = function () {
      f(Z);
    };
  else if (typeof MessageChannel < "u") {
    var J = new MessageChannel(),
      Fe = J.port2;
    (J.port1.onmessage = Z),
      (ye = function () {
        Fe.postMessage(null);
      });
  } else
    ye = function () {
      j(Z, 0);
    };
  function $e(D) {
    (R = D), P || ((P = !0), ye());
  }
  function Qt(D, A) {
    g = j(function () {
      D(e.unstable_now());
    }, A);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (D) {
      D.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      x || w || ((x = !0), $e(T));
    }),
    (e.unstable_forceFrameRate = function (D) {
      0 > D || 125 < D
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (I = 0 < D ? Math.floor(1e3 / D) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (D) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var A = 3;
          break;
        default:
          A = h;
      }
      var Y = h;
      h = A;
      try {
        return D();
      } finally {
        h = Y;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (D, A) {
      switch (D) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          D = 3;
      }
      var Y = h;
      h = D;
      try {
        return A();
      } finally {
        h = Y;
      }
    }),
    (e.unstable_scheduleCallback = function (D, A, Y) {
      var le = e.unstable_now();
      switch (
        (typeof Y == "object" && Y !== null
          ? ((Y = Y.delay), (Y = typeof Y == "number" && 0 < Y ? le + Y : le))
          : (Y = le),
        D)
      ) {
        case 1:
          var oe = -1;
          break;
        case 2:
          oe = 250;
          break;
        case 5:
          oe = 1073741823;
          break;
        case 4:
          oe = 1e4;
          break;
        default:
          oe = 5e3;
      }
      return (
        (oe = Y + oe),
        (D = {
          id: d++,
          callback: A,
          priorityLevel: D,
          startTime: Y,
          expirationTime: oe,
          sortIndex: -1,
        }),
        Y > le
          ? ((D.sortIndex = Y),
            t(u, D),
            n(s) === null &&
              D === n(u) &&
              (S ? (m(g), (g = -1)) : (S = !0), Qt(_, Y - le)))
          : ((D.sortIndex = oe), t(s, D), x || w || ((x = !0), $e(T))),
        D
      );
    }),
    (e.unstable_shouldYield = $),
    (e.unstable_wrapCallback = function (D) {
      var A = h;
      return function () {
        var Y = h;
        h = A;
        try {
          return D.apply(this, arguments);
        } finally {
          h = Y;
        }
      };
    });
})(ld);
rd.exports = ld;
var kp = rd.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ep = C,
  rt = kp;
function N(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var id = new Set(),
  Jr = {};
function Un(e, t) {
  dr(e, t), dr(e + "Capture", t);
}
function dr(e, t) {
  for (Jr[e] = t, e = 0; e < t.length; e++) id.add(t[e]);
}
var At = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Qo = Object.prototype.hasOwnProperty,
  _p =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  uu = {},
  cu = {};
function Mp(e) {
  return Qo.call(cu, e)
    ? !0
    : Qo.call(uu, e)
      ? !1
      : _p.test(e)
        ? (cu[e] = !0)
        : ((uu[e] = !0), !1);
}
function Np(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Cp(e, t, n, r) {
  if (t === null || typeof t > "u" || Np(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function We(e, t, n, r, l, i, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o);
}
var Le = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Le[e] = new We(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Le[t] = new We(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Le[e] = new We(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Le[e] = new We(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Le[e] = new We(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Le[e] = new We(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Le[e] = new We(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Le[e] = new We(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Le[e] = new We(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ga = /[\-:]([a-z])/g;
function Ka(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ga, Ka);
    Le[t] = new We(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ga, Ka);
    Le[t] = new We(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Ga, Ka);
  Le[t] = new We(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Le[e] = new We(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Le.xlinkHref = new We(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Le[e] = new We(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Za(e, t, n, r) {
  var l = Le.hasOwnProperty(t) ? Le[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Cp(t, n, l, r) && (n = null),
    r || l === null
      ? Mp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
        ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
        : ((t = l.attributeName),
          (r = l.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((l = l.type),
              (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var $t = Ep.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Fl = Symbol.for("react.element"),
  Yn = Symbol.for("react.portal"),
  Xn = Symbol.for("react.fragment"),
  Ja = Symbol.for("react.strict_mode"),
  Ho = Symbol.for("react.profiler"),
  od = Symbol.for("react.provider"),
  ad = Symbol.for("react.context"),
  ba = Symbol.for("react.forward_ref"),
  Yo = Symbol.for("react.suspense"),
  Xo = Symbol.for("react.suspense_list"),
  qa = Symbol.for("react.memo"),
  Zt = Symbol.for("react.lazy"),
  sd = Symbol.for("react.offscreen"),
  du = Symbol.iterator;
function Nr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (du && e[du]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var pe = Object.assign,
  mo;
function Ir(e) {
  if (mo === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      mo = (t && t[1]) || "";
    }
  return (
    `
` +
    mo +
    e
  );
}
var go = !1;
function vo(e, t) {
  if (!e || go) return "";
  go = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var l = u.stack.split(`
`),
          i = r.stack.split(`
`),
          o = l.length - 1,
          a = i.length - 1;
        1 <= o && 0 <= a && l[o] !== i[a];

      )
        a--;
      for (; 1 <= o && 0 <= a; o--, a--)
        if (l[o] !== i[a]) {
          if (o !== 1 || a !== 1)
            do
              if ((o--, a--, 0 > a || l[o] !== i[a])) {
                var s =
                  `
` + l[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= o && 0 <= a);
          break;
        }
    }
  } finally {
    (go = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Ir(e) : "";
}
function jp(e) {
  switch (e.tag) {
    case 5:
      return Ir(e.type);
    case 16:
      return Ir("Lazy");
    case 13:
      return Ir("Suspense");
    case 19:
      return Ir("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = vo(e.type, !1)), e;
    case 11:
      return (e = vo(e.type.render, !1)), e;
    case 1:
      return (e = vo(e.type, !0)), e;
    default:
      return "";
  }
}
function Go(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Xn:
      return "Fragment";
    case Yn:
      return "Portal";
    case Ho:
      return "Profiler";
    case Ja:
      return "StrictMode";
    case Yo:
      return "Suspense";
    case Xo:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case ad:
        return (e.displayName || "Context") + ".Consumer";
      case od:
        return (e._context.displayName || "Context") + ".Provider";
      case ba:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case qa:
        return (
          (t = e.displayName || null), t !== null ? t : Go(e.type) || "Memo"
        );
      case Zt:
        (t = e._payload), (e = e._init);
        try {
          return Go(e(t));
        } catch {}
    }
  return null;
}
function Tp(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Go(t);
    case 8:
      return t === Ja ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function pn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function ud(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Rp(e) {
  var t = ud(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (o) {
          (r = "" + o), i.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Il(e) {
  e._valueTracker || (e._valueTracker = Rp(e));
}
function cd(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = ud(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function hi(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ko(e, t) {
  var n = t.checked;
  return pe({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function fu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = pn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function dd(e, t) {
  (t = t.checked), t != null && Za(e, "checked", t, !1);
}
function Zo(e, t) {
  dd(e, t);
  var n = pn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Jo(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Jo(e, t.type, pn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function hu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Jo(e, t, n) {
  (t !== "number" || hi(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Ar = Array.isArray;
function ir(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + pn(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function bo(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(N(91));
  return pe({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function pu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(N(92));
      if (Ar(n)) {
        if (1 < n.length) throw Error(N(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: pn(n) };
}
function fd(e, t) {
  var n = pn(t.value),
    r = pn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function mu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function hd(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function qo(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? hd(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var Al,
  pd = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Al = Al || document.createElement("div"),
          Al.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Al.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function br(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Wr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Lp = ["Webkit", "ms", "Moz", "O"];
Object.keys(Wr).forEach(function (e) {
  Lp.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Wr[t] = Wr[e]);
  });
});
function md(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Wr.hasOwnProperty(e) && Wr[e])
      ? ("" + t).trim()
      : t + "px";
}
function gd(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = md(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Pp = pe(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function ea(e, t) {
  if (t) {
    if (Pp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(N(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(N(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(N(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(N(62));
  }
}
function ta(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var na = null;
function es(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var ra = null,
  or = null,
  ar = null;
function gu(e) {
  if ((e = wl(e))) {
    if (typeof ra != "function") throw Error(N(280));
    var t = e.stateNode;
    t && ((t = Ki(t)), ra(e.stateNode, e.type, t));
  }
}
function vd(e) {
  or ? (ar ? ar.push(e) : (ar = [e])) : (or = e);
}
function yd() {
  if (or) {
    var e = or,
      t = ar;
    if (((ar = or = null), gu(e), t)) for (e = 0; e < t.length; e++) gu(t[e]);
  }
}
function wd(e, t) {
  return e(t);
}
function xd() {}
var yo = !1;
function Sd(e, t, n) {
  if (yo) return e(t, n);
  yo = !0;
  try {
    return wd(e, t, n);
  } finally {
    (yo = !1), (or !== null || ar !== null) && (xd(), yd());
  }
}
function qr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ki(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(N(231, t, typeof n));
  return n;
}
var la = !1;
if (At)
  try {
    var Cr = {};
    Object.defineProperty(Cr, "passive", {
      get: function () {
        la = !0;
      },
    }),
      window.addEventListener("test", Cr, Cr),
      window.removeEventListener("test", Cr, Cr);
  } catch {
    la = !1;
  }
function Dp(e, t, n, r, l, i, o, a, s) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (d) {
    this.onError(d);
  }
}
var $r = !1,
  pi = null,
  mi = !1,
  ia = null,
  zp = {
    onError: function (e) {
      ($r = !0), (pi = e);
    },
  };
function Op(e, t, n, r, l, i, o, a, s) {
  ($r = !1), (pi = null), Dp.apply(zp, arguments);
}
function Fp(e, t, n, r, l, i, o, a, s) {
  if ((Op.apply(this, arguments), $r)) {
    if ($r) {
      var u = pi;
      ($r = !1), (pi = null);
    } else throw Error(N(198));
    mi || ((mi = !0), (ia = u));
  }
}
function Bn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function kd(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function vu(e) {
  if (Bn(e) !== e) throw Error(N(188));
}
function Ip(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Bn(e)), t === null)) throw Error(N(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === n) return vu(l), e;
        if (i === r) return vu(l), t;
        i = i.sibling;
      }
      throw Error(N(188));
    }
    if (n.return !== r.return) (n = l), (r = i);
    else {
      for (var o = !1, a = l.child; a; ) {
        if (a === n) {
          (o = !0), (n = l), (r = i);
          break;
        }
        if (a === r) {
          (o = !0), (r = l), (n = i);
          break;
        }
        a = a.sibling;
      }
      if (!o) {
        for (a = i.child; a; ) {
          if (a === n) {
            (o = !0), (n = i), (r = l);
            break;
          }
          if (a === r) {
            (o = !0), (r = i), (n = l);
            break;
          }
          a = a.sibling;
        }
        if (!o) throw Error(N(189));
      }
    }
    if (n.alternate !== r) throw Error(N(190));
  }
  if (n.tag !== 3) throw Error(N(188));
  return n.stateNode.current === n ? e : t;
}
function Ed(e) {
  return (e = Ip(e)), e !== null ? _d(e) : null;
}
function _d(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = _d(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Md = rt.unstable_scheduleCallback,
  yu = rt.unstable_cancelCallback,
  Ap = rt.unstable_shouldYield,
  Up = rt.unstable_requestPaint,
  we = rt.unstable_now,
  Bp = rt.unstable_getCurrentPriorityLevel,
  ts = rt.unstable_ImmediatePriority,
  Nd = rt.unstable_UserBlockingPriority,
  gi = rt.unstable_NormalPriority,
  Vp = rt.unstable_LowPriority,
  Cd = rt.unstable_IdlePriority,
  Hi = null,
  Nt = null;
function Wp(e) {
  if (Nt && typeof Nt.onCommitFiberRoot == "function")
    try {
      Nt.onCommitFiberRoot(Hi, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var yt = Math.clz32 ? Math.clz32 : Hp,
  $p = Math.log,
  Qp = Math.LN2;
function Hp(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - (($p(e) / Qp) | 0)) | 0;
}
var Ul = 64,
  Bl = 4194304;
function Ur(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function vi(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var a = o & ~l;
    a !== 0 ? (r = Ur(a)) : ((i &= o), i !== 0 && (r = Ur(i)));
  } else (o = n & ~l), o !== 0 ? (r = Ur(o)) : i !== 0 && (r = Ur(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - yt(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Yp(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Xp(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var o = 31 - yt(i),
      a = 1 << o,
      s = l[o];
    s === -1
      ? (!(a & n) || a & r) && (l[o] = Yp(a, t))
      : s <= t && (e.expiredLanes |= a),
      (i &= ~a);
  }
}
function oa(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function jd() {
  var e = Ul;
  return (Ul <<= 1), !(Ul & 4194240) && (Ul = 64), e;
}
function wo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function vl(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - yt(t)),
    (e[t] = n);
}
function Gp(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - yt(n),
      i = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
  }
}
function ns(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - yt(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var ne = 0;
function Td(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Rd,
  rs,
  Ld,
  Pd,
  Dd,
  aa = !1,
  Vl = [],
  ln = null,
  on = null,
  an = null,
  el = new Map(),
  tl = new Map(),
  bt = [],
  Kp =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function wu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      ln = null;
      break;
    case "dragenter":
    case "dragleave":
      on = null;
      break;
    case "mouseover":
    case "mouseout":
      an = null;
      break;
    case "pointerover":
    case "pointerout":
      el.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      tl.delete(t.pointerId);
  }
}
function jr(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      t !== null && ((t = wl(t)), t !== null && rs(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Zp(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (ln = jr(ln, e, t, n, r, l)), !0;
    case "dragenter":
      return (on = jr(on, e, t, n, r, l)), !0;
    case "mouseover":
      return (an = jr(an, e, t, n, r, l)), !0;
    case "pointerover":
      var i = l.pointerId;
      return el.set(i, jr(el.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (i = l.pointerId), tl.set(i, jr(tl.get(i) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function zd(e) {
  var t = jn(e.target);
  if (t !== null) {
    var n = Bn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = kd(n)), t !== null)) {
          (e.blockedOn = t),
            Dd(e.priority, function () {
              Ld(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function ni(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = sa(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (na = r), n.target.dispatchEvent(r), (na = null);
    } else return (t = wl(n)), t !== null && rs(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function xu(e, t, n) {
  ni(e) && n.delete(t);
}
function Jp() {
  (aa = !1),
    ln !== null && ni(ln) && (ln = null),
    on !== null && ni(on) && (on = null),
    an !== null && ni(an) && (an = null),
    el.forEach(xu),
    tl.forEach(xu);
}
function Tr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    aa ||
      ((aa = !0),
      rt.unstable_scheduleCallback(rt.unstable_NormalPriority, Jp)));
}
function nl(e) {
  function t(l) {
    return Tr(l, e);
  }
  if (0 < Vl.length) {
    Tr(Vl[0], e);
    for (var n = 1; n < Vl.length; n++) {
      var r = Vl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    ln !== null && Tr(ln, e),
      on !== null && Tr(on, e),
      an !== null && Tr(an, e),
      el.forEach(t),
      tl.forEach(t),
      n = 0;
    n < bt.length;
    n++
  )
    (r = bt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < bt.length && ((n = bt[0]), n.blockedOn === null); )
    zd(n), n.blockedOn === null && bt.shift();
}
var sr = $t.ReactCurrentBatchConfig,
  yi = !0;
function bp(e, t, n, r) {
  var l = ne,
    i = sr.transition;
  sr.transition = null;
  try {
    (ne = 1), ls(e, t, n, r);
  } finally {
    (ne = l), (sr.transition = i);
  }
}
function qp(e, t, n, r) {
  var l = ne,
    i = sr.transition;
  sr.transition = null;
  try {
    (ne = 4), ls(e, t, n, r);
  } finally {
    (ne = l), (sr.transition = i);
  }
}
function ls(e, t, n, r) {
  if (yi) {
    var l = sa(e, t, n, r);
    if (l === null) To(e, t, r, wi, n), wu(e, r);
    else if (Zp(l, e, t, n, r)) r.stopPropagation();
    else if ((wu(e, r), t & 4 && -1 < Kp.indexOf(e))) {
      for (; l !== null; ) {
        var i = wl(l);
        if (
          (i !== null && Rd(i),
          (i = sa(e, t, n, r)),
          i === null && To(e, t, r, wi, n),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else To(e, t, r, null, n);
  }
}
var wi = null;
function sa(e, t, n, r) {
  if (((wi = null), (e = es(r)), (e = jn(e)), e !== null))
    if (((t = Bn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = kd(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (wi = e), null;
}
function Od(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Bp()) {
        case ts:
          return 1;
        case Nd:
          return 4;
        case gi:
        case Vp:
          return 16;
        case Cd:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var en = null,
  is = null,
  ri = null;
function Fd() {
  if (ri) return ri;
  var e,
    t = is,
    n = t.length,
    r,
    l = "value" in en ? en.value : en.textContent,
    i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
  return (ri = l.slice(e, 1 < r ? 1 - r : void 0));
}
function li(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Wl() {
  return !0;
}
function Su() {
  return !1;
}
function it(e) {
  function t(n, r, l, i, o) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Wl
        : Su),
      (this.isPropagationStopped = Su),
      this
    );
  }
  return (
    pe(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Wl));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Wl));
      },
      persist: function () {},
      isPersistent: Wl,
    }),
    t
  );
}
var xr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  os = it(xr),
  yl = pe({}, xr, { view: 0, detail: 0 }),
  em = it(yl),
  xo,
  So,
  Rr,
  Yi = pe({}, yl, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: as,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Rr &&
            (Rr && e.type === "mousemove"
              ? ((xo = e.screenX - Rr.screenX), (So = e.screenY - Rr.screenY))
              : (So = xo = 0),
            (Rr = e)),
          xo);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : So;
    },
  }),
  ku = it(Yi),
  tm = pe({}, Yi, { dataTransfer: 0 }),
  nm = it(tm),
  rm = pe({}, yl, { relatedTarget: 0 }),
  ko = it(rm),
  lm = pe({}, xr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  im = it(lm),
  om = pe({}, xr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  am = it(om),
  sm = pe({}, xr, { data: 0 }),
  Eu = it(sm),
  um = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  cm = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  dm = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function fm(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = dm[e]) ? !!t[e] : !1;
}
function as() {
  return fm;
}
var hm = pe({}, yl, {
    key: function (e) {
      if (e.key) {
        var t = um[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = li(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? cm[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: as,
    charCode: function (e) {
      return e.type === "keypress" ? li(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? li(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  pm = it(hm),
  mm = pe({}, Yi, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  _u = it(mm),
  gm = pe({}, yl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: as,
  }),
  vm = it(gm),
  ym = pe({}, xr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  wm = it(ym),
  xm = pe({}, Yi, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Sm = it(xm),
  km = [9, 13, 27, 32],
  ss = At && "CompositionEvent" in window,
  Qr = null;
At && "documentMode" in document && (Qr = document.documentMode);
var Em = At && "TextEvent" in window && !Qr,
  Id = At && (!ss || (Qr && 8 < Qr && 11 >= Qr)),
  Mu = " ",
  Nu = !1;
function Ad(e, t) {
  switch (e) {
    case "keyup":
      return km.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Ud(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Gn = !1;
function _m(e, t) {
  switch (e) {
    case "compositionend":
      return Ud(t);
    case "keypress":
      return t.which !== 32 ? null : ((Nu = !0), Mu);
    case "textInput":
      return (e = t.data), e === Mu && Nu ? null : e;
    default:
      return null;
  }
}
function Mm(e, t) {
  if (Gn)
    return e === "compositionend" || (!ss && Ad(e, t))
      ? ((e = Fd()), (ri = is = en = null), (Gn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Id && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Nm = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Cu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Nm[e.type] : t === "textarea";
}
function Bd(e, t, n, r) {
  vd(r),
    (t = xi(t, "onChange")),
    0 < t.length &&
      ((n = new os("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Hr = null,
  rl = null;
function Cm(e) {
  Jd(e, 0);
}
function Xi(e) {
  var t = Jn(e);
  if (cd(t)) return e;
}
function jm(e, t) {
  if (e === "change") return t;
}
var Vd = !1;
if (At) {
  var Eo;
  if (At) {
    var _o = "oninput" in document;
    if (!_o) {
      var ju = document.createElement("div");
      ju.setAttribute("oninput", "return;"),
        (_o = typeof ju.oninput == "function");
    }
    Eo = _o;
  } else Eo = !1;
  Vd = Eo && (!document.documentMode || 9 < document.documentMode);
}
function Tu() {
  Hr && (Hr.detachEvent("onpropertychange", Wd), (rl = Hr = null));
}
function Wd(e) {
  if (e.propertyName === "value" && Xi(rl)) {
    var t = [];
    Bd(t, rl, e, es(e)), Sd(Cm, t);
  }
}
function Tm(e, t, n) {
  e === "focusin"
    ? (Tu(), (Hr = t), (rl = n), Hr.attachEvent("onpropertychange", Wd))
    : e === "focusout" && Tu();
}
function Rm(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Xi(rl);
}
function Lm(e, t) {
  if (e === "click") return Xi(t);
}
function Pm(e, t) {
  if (e === "input" || e === "change") return Xi(t);
}
function Dm(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var St = typeof Object.is == "function" ? Object.is : Dm;
function ll(e, t) {
  if (St(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Qo.call(t, l) || !St(e[l], t[l])) return !1;
  }
  return !0;
}
function Ru(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Lu(e, t) {
  var n = Ru(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Ru(n);
  }
}
function $d(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? $d(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function Qd() {
  for (var e = window, t = hi(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = hi(e.document);
  }
  return t;
}
function us(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function zm(e) {
  var t = Qd(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    $d(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && us(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          i = Math.min(r.start, l);
        (r = r.end === void 0 ? i : Math.min(r.end, l)),
          !e.extend && i > r && ((l = r), (r = i), (i = l)),
          (l = Lu(n, i));
        var o = Lu(n, r);
        l &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Om = At && "documentMode" in document && 11 >= document.documentMode,
  Kn = null,
  ua = null,
  Yr = null,
  ca = !1;
function Pu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ca ||
    Kn == null ||
    Kn !== hi(r) ||
    ((r = Kn),
    "selectionStart" in r && us(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Yr && ll(Yr, r)) ||
      ((Yr = r),
      (r = xi(ua, "onSelect")),
      0 < r.length &&
        ((t = new os("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Kn))));
}
function $l(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Zn = {
    animationend: $l("Animation", "AnimationEnd"),
    animationiteration: $l("Animation", "AnimationIteration"),
    animationstart: $l("Animation", "AnimationStart"),
    transitionend: $l("Transition", "TransitionEnd"),
  },
  Mo = {},
  Hd = {};
At &&
  ((Hd = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Zn.animationend.animation,
    delete Zn.animationiteration.animation,
    delete Zn.animationstart.animation),
  "TransitionEvent" in window || delete Zn.transitionend.transition);
function Gi(e) {
  if (Mo[e]) return Mo[e];
  if (!Zn[e]) return e;
  var t = Zn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Hd) return (Mo[e] = t[n]);
  return e;
}
var Yd = Gi("animationend"),
  Xd = Gi("animationiteration"),
  Gd = Gi("animationstart"),
  Kd = Gi("transitionend"),
  Zd = new Map(),
  Du =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function gn(e, t) {
  Zd.set(e, t), Un(t, [e]);
}
for (var No = 0; No < Du.length; No++) {
  var Co = Du[No],
    Fm = Co.toLowerCase(),
    Im = Co[0].toUpperCase() + Co.slice(1);
  gn(Fm, "on" + Im);
}
gn(Yd, "onAnimationEnd");
gn(Xd, "onAnimationIteration");
gn(Gd, "onAnimationStart");
gn("dblclick", "onDoubleClick");
gn("focusin", "onFocus");
gn("focusout", "onBlur");
gn(Kd, "onTransitionEnd");
dr("onMouseEnter", ["mouseout", "mouseover"]);
dr("onMouseLeave", ["mouseout", "mouseover"]);
dr("onPointerEnter", ["pointerout", "pointerover"]);
dr("onPointerLeave", ["pointerout", "pointerover"]);
Un(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
Un(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
Un("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Un(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
Un(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
Un(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var Br =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  Am = new Set("cancel close invalid load scroll toggle".split(" ").concat(Br));
function zu(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Fp(r, t, void 0, e), (e.currentTarget = null);
}
function Jd(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var a = r[o],
            s = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), s !== i && l.isPropagationStopped())) break e;
          zu(l, a, u), (i = s);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((a = r[o]),
            (s = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            s !== i && l.isPropagationStopped())
          )
            break e;
          zu(l, a, u), (i = s);
        }
    }
  }
  if (mi) throw ((e = ia), (mi = !1), (ia = null), e);
}
function se(e, t) {
  var n = t[ma];
  n === void 0 && (n = t[ma] = new Set());
  var r = e + "__bubble";
  n.has(r) || (bd(t, e, 2, !1), n.add(r));
}
function jo(e, t, n) {
  var r = 0;
  t && (r |= 4), bd(n, e, r, t);
}
var Ql = "_reactListening" + Math.random().toString(36).slice(2);
function il(e) {
  if (!e[Ql]) {
    (e[Ql] = !0),
      id.forEach(function (n) {
        n !== "selectionchange" && (Am.has(n) || jo(n, !1, e), jo(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ql] || ((t[Ql] = !0), jo("selectionchange", !1, t));
  }
}
function bd(e, t, n, r) {
  switch (Od(t)) {
    case 1:
      var l = bp;
      break;
    case 4:
      l = qp;
      break;
    default:
      l = ls;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !la ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
        ? e.addEventListener(t, n, { passive: l })
        : e.addEventListener(t, n, !1);
}
function To(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var a = r.stateNode.containerInfo;
        if (a === l || (a.nodeType === 8 && a.parentNode === l)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var s = o.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = o.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            o = o.return;
          }
        for (; a !== null; ) {
          if (((o = jn(a)), o === null)) return;
          if (((s = o.tag), s === 5 || s === 6)) {
            r = i = o;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  Sd(function () {
    var u = i,
      d = es(n),
      c = [];
    e: {
      var h = Zd.get(e);
      if (h !== void 0) {
        var w = os,
          x = e;
        switch (e) {
          case "keypress":
            if (li(n) === 0) break e;
          case "keydown":
          case "keyup":
            w = pm;
            break;
          case "focusin":
            (x = "focus"), (w = ko);
            break;
          case "focusout":
            (x = "blur"), (w = ko);
            break;
          case "beforeblur":
          case "afterblur":
            w = ko;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            w = ku;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = nm;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = vm;
            break;
          case Yd:
          case Xd:
          case Gd:
            w = im;
            break;
          case Kd:
            w = wm;
            break;
          case "scroll":
            w = em;
            break;
          case "wheel":
            w = Sm;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = am;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = _u;
        }
        var S = (t & 4) !== 0,
          j = !S && e === "scroll",
          m = S ? (h !== null ? h + "Capture" : null) : h;
        S = [];
        for (var f = u, v; f !== null; ) {
          v = f;
          var _ = v.stateNode;
          if (
            (v.tag === 5 &&
              _ !== null &&
              ((v = _),
              m !== null && ((_ = qr(f, m)), _ != null && S.push(ol(f, _, v)))),
            j)
          )
            break;
          f = f.return;
        }
        0 < S.length &&
          ((h = new w(h, x, null, n, d)), c.push({ event: h, listeners: S }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (w = e === "mouseout" || e === "pointerout"),
          h &&
            n !== na &&
            (x = n.relatedTarget || n.fromElement) &&
            (jn(x) || x[Ut]))
        )
          break e;
        if (
          (w || h) &&
          ((h =
            d.window === d
              ? d
              : (h = d.ownerDocument)
                ? h.defaultView || h.parentWindow
                : window),
          w
            ? ((x = n.relatedTarget || n.toElement),
              (w = u),
              (x = x ? jn(x) : null),
              x !== null &&
                ((j = Bn(x)), x !== j || (x.tag !== 5 && x.tag !== 6)) &&
                (x = null))
            : ((w = null), (x = u)),
          w !== x)
        ) {
          if (
            ((S = ku),
            (_ = "onMouseLeave"),
            (m = "onMouseEnter"),
            (f = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((S = _u),
              (_ = "onPointerLeave"),
              (m = "onPointerEnter"),
              (f = "pointer")),
            (j = w == null ? h : Jn(w)),
            (v = x == null ? h : Jn(x)),
            (h = new S(_, f + "leave", w, n, d)),
            (h.target = j),
            (h.relatedTarget = v),
            (_ = null),
            jn(d) === u &&
              ((S = new S(m, f + "enter", x, n, d)),
              (S.target = v),
              (S.relatedTarget = j),
              (_ = S)),
            (j = _),
            w && x)
          )
            t: {
              for (S = w, m = x, f = 0, v = S; v; v = Qn(v)) f++;
              for (v = 0, _ = m; _; _ = Qn(_)) v++;
              for (; 0 < f - v; ) (S = Qn(S)), f--;
              for (; 0 < v - f; ) (m = Qn(m)), v--;
              for (; f--; ) {
                if (S === m || (m !== null && S === m.alternate)) break t;
                (S = Qn(S)), (m = Qn(m));
              }
              S = null;
            }
          else S = null;
          w !== null && Ou(c, h, w, S, !1),
            x !== null && j !== null && Ou(c, j, x, S, !0);
        }
      }
      e: {
        if (
          ((h = u ? Jn(u) : window),
          (w = h.nodeName && h.nodeName.toLowerCase()),
          w === "select" || (w === "input" && h.type === "file"))
        )
          var T = jm;
        else if (Cu(h))
          if (Vd) T = Pm;
          else {
            T = Rm;
            var P = Tm;
          }
        else
          (w = h.nodeName) &&
            w.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (T = Lm);
        if (T && (T = T(e, u))) {
          Bd(c, T, n, d);
          break e;
        }
        P && P(e, h, u),
          e === "focusout" &&
            (P = h._wrapperState) &&
            P.controlled &&
            h.type === "number" &&
            Jo(h, "number", h.value);
      }
      switch (((P = u ? Jn(u) : window), e)) {
        case "focusin":
          (Cu(P) || P.contentEditable === "true") &&
            ((Kn = P), (ua = u), (Yr = null));
          break;
        case "focusout":
          Yr = ua = Kn = null;
          break;
        case "mousedown":
          ca = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (ca = !1), Pu(c, n, d);
          break;
        case "selectionchange":
          if (Om) break;
        case "keydown":
        case "keyup":
          Pu(c, n, d);
      }
      var R;
      if (ss)
        e: {
          switch (e) {
            case "compositionstart":
              var g = "onCompositionStart";
              break e;
            case "compositionend":
              g = "onCompositionEnd";
              break e;
            case "compositionupdate":
              g = "onCompositionUpdate";
              break e;
          }
          g = void 0;
        }
      else
        Gn
          ? Ad(e, n) && (g = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (g = "onCompositionStart");
      g &&
        (Id &&
          n.locale !== "ko" &&
          (Gn || g !== "onCompositionStart"
            ? g === "onCompositionEnd" && Gn && (R = Fd())
            : ((en = d),
              (is = "value" in en ? en.value : en.textContent),
              (Gn = !0))),
        (P = xi(u, g)),
        0 < P.length &&
          ((g = new Eu(g, e, null, n, d)),
          c.push({ event: g, listeners: P }),
          R ? (g.data = R) : ((R = Ud(n)), R !== null && (g.data = R)))),
        (R = Em ? _m(e, n) : Mm(e, n)) &&
          ((u = xi(u, "onBeforeInput")),
          0 < u.length &&
            ((d = new Eu("onBeforeInput", "beforeinput", null, n, d)),
            c.push({ event: d, listeners: u }),
            (d.data = R)));
    }
    Jd(c, t);
  });
}
function ol(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function xi(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = qr(e, n)),
      i != null && r.unshift(ol(e, i, l)),
      (i = qr(e, t)),
      i != null && r.push(ol(e, i, l))),
      (e = e.return);
  }
  return r;
}
function Qn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ou(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var a = n,
      s = a.alternate,
      u = a.stateNode;
    if (s !== null && s === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      l
        ? ((s = qr(n, i)), s != null && o.unshift(ol(n, s, a)))
        : l || ((s = qr(n, i)), s != null && o.push(ol(n, s, a)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Um = /\r\n?/g,
  Bm = /\u0000|\uFFFD/g;
function Fu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Um,
      `
`,
    )
    .replace(Bm, "");
}
function Hl(e, t, n) {
  if (((t = Fu(t)), Fu(e) !== t && n)) throw Error(N(425));
}
function Si() {}
var da = null,
  fa = null;
function ha(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var pa = typeof setTimeout == "function" ? setTimeout : void 0,
  Vm = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Iu = typeof Promise == "function" ? Promise : void 0,
  Wm =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Iu < "u"
        ? function (e) {
            return Iu.resolve(null).then(e).catch($m);
          }
        : pa;
function $m(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ro(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), nl(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  nl(t);
}
function sn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Au(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Sr = Math.random().toString(36).slice(2),
  _t = "__reactFiber$" + Sr,
  al = "__reactProps$" + Sr,
  Ut = "__reactContainer$" + Sr,
  ma = "__reactEvents$" + Sr,
  Qm = "__reactListeners$" + Sr,
  Hm = "__reactHandles$" + Sr;
function jn(e) {
  var t = e[_t];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ut] || n[_t])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Au(e); e !== null; ) {
          if ((n = e[_t])) return n;
          e = Au(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function wl(e) {
  return (
    (e = e[_t] || e[Ut]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Jn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(N(33));
}
function Ki(e) {
  return e[al] || null;
}
var ga = [],
  bn = -1;
function vn(e) {
  return { current: e };
}
function ue(e) {
  0 > bn || ((e.current = ga[bn]), (ga[bn] = null), bn--);
}
function ie(e, t) {
  bn++, (ga[bn] = e.current), (e.current = t);
}
var mn = {},
  Oe = vn(mn),
  Ge = vn(!1),
  zn = mn;
function fr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return mn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    i;
  for (i in n) l[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function Ke(e) {
  return (e = e.childContextTypes), e != null;
}
function ki() {
  ue(Ge), ue(Oe);
}
function Uu(e, t, n) {
  if (Oe.current !== mn) throw Error(N(168));
  ie(Oe, t), ie(Ge, n);
}
function qd(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(N(108, Tp(e) || "Unknown", l));
  return pe({}, n, r);
}
function Ei(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || mn),
    (zn = Oe.current),
    ie(Oe, e),
    ie(Ge, Ge.current),
    !0
  );
}
function Bu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(N(169));
  n
    ? ((e = qd(e, t, zn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ue(Ge),
      ue(Oe),
      ie(Oe, e))
    : ue(Ge),
    ie(Ge, n);
}
var zt = null,
  Zi = !1,
  Lo = !1;
function ef(e) {
  zt === null ? (zt = [e]) : zt.push(e);
}
function Ym(e) {
  (Zi = !0), ef(e);
}
function yn() {
  if (!Lo && zt !== null) {
    Lo = !0;
    var e = 0,
      t = ne;
    try {
      var n = zt;
      for (ne = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (zt = null), (Zi = !1);
    } catch (l) {
      throw (zt !== null && (zt = zt.slice(e + 1)), Md(ts, yn), l);
    } finally {
      (ne = t), (Lo = !1);
    }
  }
  return null;
}
var qn = [],
  er = 0,
  _i = null,
  Mi = 0,
  at = [],
  st = 0,
  On = null,
  Ot = 1,
  Ft = "";
function _n(e, t) {
  (qn[er++] = Mi), (qn[er++] = _i), (_i = e), (Mi = t);
}
function tf(e, t, n) {
  (at[st++] = Ot), (at[st++] = Ft), (at[st++] = On), (On = e);
  var r = Ot;
  e = Ft;
  var l = 32 - yt(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var i = 32 - yt(t) + l;
  if (30 < i) {
    var o = l - (l % 5);
    (i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (l -= o),
      (Ot = (1 << (32 - yt(t) + l)) | (n << l) | r),
      (Ft = i + e);
  } else (Ot = (1 << i) | (n << l) | r), (Ft = e);
}
function cs(e) {
  e.return !== null && (_n(e, 1), tf(e, 1, 0));
}
function ds(e) {
  for (; e === _i; )
    (_i = qn[--er]), (qn[er] = null), (Mi = qn[--er]), (qn[er] = null);
  for (; e === On; )
    (On = at[--st]),
      (at[st] = null),
      (Ft = at[--st]),
      (at[st] = null),
      (Ot = at[--st]),
      (at[st] = null);
}
var nt = null,
  tt = null,
  ce = !1,
  vt = null;
function nf(e, t) {
  var n = ut(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Vu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (nt = e), (tt = sn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (nt = e), (tt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = On !== null ? { id: Ot, overflow: Ft } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = ut(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (nt = e),
            (tt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function va(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ya(e) {
  if (ce) {
    var t = tt;
    if (t) {
      var n = t;
      if (!Vu(e, t)) {
        if (va(e)) throw Error(N(418));
        t = sn(n.nextSibling);
        var r = nt;
        t && Vu(e, t)
          ? nf(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ce = !1), (nt = e));
      }
    } else {
      if (va(e)) throw Error(N(418));
      (e.flags = (e.flags & -4097) | 2), (ce = !1), (nt = e);
    }
  }
}
function Wu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  nt = e;
}
function Yl(e) {
  if (e !== nt) return !1;
  if (!ce) return Wu(e), (ce = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !ha(e.type, e.memoizedProps))),
    t && (t = tt))
  ) {
    if (va(e)) throw (rf(), Error(N(418)));
    for (; t; ) nf(e, t), (t = sn(t.nextSibling));
  }
  if ((Wu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(N(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              tt = sn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      tt = null;
    }
  } else tt = nt ? sn(e.stateNode.nextSibling) : null;
  return !0;
}
function rf() {
  for (var e = tt; e; ) e = sn(e.nextSibling);
}
function hr() {
  (tt = nt = null), (ce = !1);
}
function fs(e) {
  vt === null ? (vt = [e]) : vt.push(e);
}
var Xm = $t.ReactCurrentBatchConfig;
function Lr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(N(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(N(147, e));
      var l = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var a = l.refs;
            o === null ? delete a[i] : (a[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(N(284));
    if (!n._owner) throw Error(N(290, e));
  }
  return e;
}
function Xl(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      N(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    ))
  );
}
function $u(e) {
  var t = e._init;
  return t(e._payload);
}
function lf(e) {
  function t(m, f) {
    if (e) {
      var v = m.deletions;
      v === null ? ((m.deletions = [f]), (m.flags |= 16)) : v.push(f);
    }
  }
  function n(m, f) {
    if (!e) return null;
    for (; f !== null; ) t(m, f), (f = f.sibling);
    return null;
  }
  function r(m, f) {
    for (m = new Map(); f !== null; )
      f.key !== null ? m.set(f.key, f) : m.set(f.index, f), (f = f.sibling);
    return m;
  }
  function l(m, f) {
    return (m = fn(m, f)), (m.index = 0), (m.sibling = null), m;
  }
  function i(m, f, v) {
    return (
      (m.index = v),
      e
        ? ((v = m.alternate),
          v !== null
            ? ((v = v.index), v < f ? ((m.flags |= 2), f) : v)
            : ((m.flags |= 2), f))
        : ((m.flags |= 1048576), f)
    );
  }
  function o(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function a(m, f, v, _) {
    return f === null || f.tag !== 6
      ? ((f = Ao(v, m.mode, _)), (f.return = m), f)
      : ((f = l(f, v)), (f.return = m), f);
  }
  function s(m, f, v, _) {
    var T = v.type;
    return T === Xn
      ? d(m, f, v.props.children, _, v.key)
      : f !== null &&
          (f.elementType === T ||
            (typeof T == "object" &&
              T !== null &&
              T.$$typeof === Zt &&
              $u(T) === f.type))
        ? ((_ = l(f, v.props)), (_.ref = Lr(m, f, v)), (_.return = m), _)
        : ((_ = di(v.type, v.key, v.props, null, m.mode, _)),
          (_.ref = Lr(m, f, v)),
          (_.return = m),
          _);
  }
  function u(m, f, v, _) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== v.containerInfo ||
      f.stateNode.implementation !== v.implementation
      ? ((f = Uo(v, m.mode, _)), (f.return = m), f)
      : ((f = l(f, v.children || [])), (f.return = m), f);
  }
  function d(m, f, v, _, T) {
    return f === null || f.tag !== 7
      ? ((f = Dn(v, m.mode, _, T)), (f.return = m), f)
      : ((f = l(f, v)), (f.return = m), f);
  }
  function c(m, f, v) {
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return (f = Ao("" + f, m.mode, v)), (f.return = m), f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Fl:
          return (
            (v = di(f.type, f.key, f.props, null, m.mode, v)),
            (v.ref = Lr(m, null, f)),
            (v.return = m),
            v
          );
        case Yn:
          return (f = Uo(f, m.mode, v)), (f.return = m), f;
        case Zt:
          var _ = f._init;
          return c(m, _(f._payload), v);
      }
      if (Ar(f) || Nr(f))
        return (f = Dn(f, m.mode, v, null)), (f.return = m), f;
      Xl(m, f);
    }
    return null;
  }
  function h(m, f, v, _) {
    var T = f !== null ? f.key : null;
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return T !== null ? null : a(m, f, "" + v, _);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Fl:
          return v.key === T ? s(m, f, v, _) : null;
        case Yn:
          return v.key === T ? u(m, f, v, _) : null;
        case Zt:
          return (T = v._init), h(m, f, T(v._payload), _);
      }
      if (Ar(v) || Nr(v)) return T !== null ? null : d(m, f, v, _, null);
      Xl(m, v);
    }
    return null;
  }
  function w(m, f, v, _, T) {
    if ((typeof _ == "string" && _ !== "") || typeof _ == "number")
      return (m = m.get(v) || null), a(f, m, "" + _, T);
    if (typeof _ == "object" && _ !== null) {
      switch (_.$$typeof) {
        case Fl:
          return (m = m.get(_.key === null ? v : _.key) || null), s(f, m, _, T);
        case Yn:
          return (m = m.get(_.key === null ? v : _.key) || null), u(f, m, _, T);
        case Zt:
          var P = _._init;
          return w(m, f, v, P(_._payload), T);
      }
      if (Ar(_) || Nr(_)) return (m = m.get(v) || null), d(f, m, _, T, null);
      Xl(f, _);
    }
    return null;
  }
  function x(m, f, v, _) {
    for (
      var T = null, P = null, R = f, g = (f = 0), I = null;
      R !== null && g < v.length;
      g++
    ) {
      R.index > g ? ((I = R), (R = null)) : (I = R.sibling);
      var z = h(m, R, v[g], _);
      if (z === null) {
        R === null && (R = I);
        break;
      }
      e && R && z.alternate === null && t(m, R),
        (f = i(z, f, g)),
        P === null ? (T = z) : (P.sibling = z),
        (P = z),
        (R = I);
    }
    if (g === v.length) return n(m, R), ce && _n(m, g), T;
    if (R === null) {
      for (; g < v.length; g++)
        (R = c(m, v[g], _)),
          R !== null &&
            ((f = i(R, f, g)), P === null ? (T = R) : (P.sibling = R), (P = R));
      return ce && _n(m, g), T;
    }
    for (R = r(m, R); g < v.length; g++)
      (I = w(R, m, g, v[g], _)),
        I !== null &&
          (e && I.alternate !== null && R.delete(I.key === null ? g : I.key),
          (f = i(I, f, g)),
          P === null ? (T = I) : (P.sibling = I),
          (P = I));
    return (
      e &&
        R.forEach(function ($) {
          return t(m, $);
        }),
      ce && _n(m, g),
      T
    );
  }
  function S(m, f, v, _) {
    var T = Nr(v);
    if (typeof T != "function") throw Error(N(150));
    if (((v = T.call(v)), v == null)) throw Error(N(151));
    for (
      var P = (T = null), R = f, g = (f = 0), I = null, z = v.next();
      R !== null && !z.done;
      g++, z = v.next()
    ) {
      R.index > g ? ((I = R), (R = null)) : (I = R.sibling);
      var $ = h(m, R, z.value, _);
      if ($ === null) {
        R === null && (R = I);
        break;
      }
      e && R && $.alternate === null && t(m, R),
        (f = i($, f, g)),
        P === null ? (T = $) : (P.sibling = $),
        (P = $),
        (R = I);
    }
    if (z.done) return n(m, R), ce && _n(m, g), T;
    if (R === null) {
      for (; !z.done; g++, z = v.next())
        (z = c(m, z.value, _)),
          z !== null &&
            ((f = i(z, f, g)), P === null ? (T = z) : (P.sibling = z), (P = z));
      return ce && _n(m, g), T;
    }
    for (R = r(m, R); !z.done; g++, z = v.next())
      (z = w(R, m, g, z.value, _)),
        z !== null &&
          (e && z.alternate !== null && R.delete(z.key === null ? g : z.key),
          (f = i(z, f, g)),
          P === null ? (T = z) : (P.sibling = z),
          (P = z));
    return (
      e &&
        R.forEach(function (Z) {
          return t(m, Z);
        }),
      ce && _n(m, g),
      T
    );
  }
  function j(m, f, v, _) {
    if (
      (typeof v == "object" &&
        v !== null &&
        v.type === Xn &&
        v.key === null &&
        (v = v.props.children),
      typeof v == "object" && v !== null)
    ) {
      switch (v.$$typeof) {
        case Fl:
          e: {
            for (var T = v.key, P = f; P !== null; ) {
              if (P.key === T) {
                if (((T = v.type), T === Xn)) {
                  if (P.tag === 7) {
                    n(m, P.sibling),
                      (f = l(P, v.props.children)),
                      (f.return = m),
                      (m = f);
                    break e;
                  }
                } else if (
                  P.elementType === T ||
                  (typeof T == "object" &&
                    T !== null &&
                    T.$$typeof === Zt &&
                    $u(T) === P.type)
                ) {
                  n(m, P.sibling),
                    (f = l(P, v.props)),
                    (f.ref = Lr(m, P, v)),
                    (f.return = m),
                    (m = f);
                  break e;
                }
                n(m, P);
                break;
              } else t(m, P);
              P = P.sibling;
            }
            v.type === Xn
              ? ((f = Dn(v.props.children, m.mode, _, v.key)),
                (f.return = m),
                (m = f))
              : ((_ = di(v.type, v.key, v.props, null, m.mode, _)),
                (_.ref = Lr(m, f, v)),
                (_.return = m),
                (m = _));
          }
          return o(m);
        case Yn:
          e: {
            for (P = v.key; f !== null; ) {
              if (f.key === P)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === v.containerInfo &&
                  f.stateNode.implementation === v.implementation
                ) {
                  n(m, f.sibling),
                    (f = l(f, v.children || [])),
                    (f.return = m),
                    (m = f);
                  break e;
                } else {
                  n(m, f);
                  break;
                }
              else t(m, f);
              f = f.sibling;
            }
            (f = Uo(v, m.mode, _)), (f.return = m), (m = f);
          }
          return o(m);
        case Zt:
          return (P = v._init), j(m, f, P(v._payload), _);
      }
      if (Ar(v)) return x(m, f, v, _);
      if (Nr(v)) return S(m, f, v, _);
      Xl(m, v);
    }
    return (typeof v == "string" && v !== "") || typeof v == "number"
      ? ((v = "" + v),
        f !== null && f.tag === 6
          ? (n(m, f.sibling), (f = l(f, v)), (f.return = m), (m = f))
          : (n(m, f), (f = Ao(v, m.mode, _)), (f.return = m), (m = f)),
        o(m))
      : n(m, f);
  }
  return j;
}
var pr = lf(!0),
  of = lf(!1),
  Ni = vn(null),
  Ci = null,
  tr = null,
  hs = null;
function ps() {
  hs = tr = Ci = null;
}
function ms(e) {
  var t = Ni.current;
  ue(Ni), (e._currentValue = t);
}
function wa(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function ur(e, t) {
  (Ci = e),
    (hs = tr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Xe = !0), (e.firstContext = null));
}
function dt(e) {
  var t = e._currentValue;
  if (hs !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), tr === null)) {
      if (Ci === null) throw Error(N(308));
      (tr = e), (Ci.dependencies = { lanes: 0, firstContext: e });
    } else tr = tr.next = e;
  return t;
}
var Tn = null;
function gs(e) {
  Tn === null ? (Tn = [e]) : Tn.push(e);
}
function af(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), gs(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Bt(e, r)
  );
}
function Bt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Jt = !1;
function vs(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function sf(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function It(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function un(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), q & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Bt(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), gs(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Bt(e, n)
  );
}
function ii(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ns(e, n);
  }
}
function Qu(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (l = i = o) : (i = i.next = o), (n = n.next);
      } while (n !== null);
      i === null ? (l = i = t) : (i = i.next = t);
    } else l = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function ji(e, t, n, r) {
  var l = e.updateQueue;
  Jt = !1;
  var i = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    a = l.shared.pending;
  if (a !== null) {
    l.shared.pending = null;
    var s = a,
      u = s.next;
    (s.next = null), o === null ? (i = u) : (o.next = u), (o = s);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (a = d.lastBaseUpdate),
      a !== o &&
        (a === null ? (d.firstBaseUpdate = u) : (a.next = u),
        (d.lastBaseUpdate = s)));
  }
  if (i !== null) {
    var c = l.baseState;
    (o = 0), (d = u = s = null), (a = i);
    do {
      var h = a.lane,
        w = a.eventTime;
      if ((r & h) === h) {
        d !== null &&
          (d = d.next =
            {
              eventTime: w,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var x = e,
            S = a;
          switch (((h = t), (w = n), S.tag)) {
            case 1:
              if (((x = S.payload), typeof x == "function")) {
                c = x.call(w, c, h);
                break e;
              }
              c = x;
              break e;
            case 3:
              x.flags = (x.flags & -65537) | 128;
            case 0:
              if (
                ((x = S.payload),
                (h = typeof x == "function" ? x.call(w, c, h) : x),
                h == null)
              )
                break e;
              c = pe({}, c, h);
              break e;
            case 2:
              Jt = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (h = l.effects),
          h === null ? (l.effects = [a]) : h.push(a));
      } else
        (w = {
          eventTime: w,
          lane: h,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          d === null ? ((u = d = w), (s = c)) : (d = d.next = w),
          (o |= h);
      if (((a = a.next), a === null)) {
        if (((a = l.shared.pending), a === null)) break;
        (h = a),
          (a = h.next),
          (h.next = null),
          (l.lastBaseUpdate = h),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (d === null && (s = c),
      (l.baseState = s),
      (l.firstBaseUpdate = u),
      (l.lastBaseUpdate = d),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (o |= l.lane), (l = l.next);
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    (In |= o), (e.lanes = o), (e.memoizedState = c);
  }
}
function Hu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(N(191, l));
        l.call(r);
      }
    }
}
var xl = {},
  Ct = vn(xl),
  sl = vn(xl),
  ul = vn(xl);
function Rn(e) {
  if (e === xl) throw Error(N(174));
  return e;
}
function ys(e, t) {
  switch ((ie(ul, t), ie(sl, e), ie(Ct, xl), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : qo(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = qo(t, e));
  }
  ue(Ct), ie(Ct, t);
}
function mr() {
  ue(Ct), ue(sl), ue(ul);
}
function uf(e) {
  Rn(ul.current);
  var t = Rn(Ct.current),
    n = qo(t, e.type);
  t !== n && (ie(sl, e), ie(Ct, n));
}
function ws(e) {
  sl.current === e && (ue(Ct), ue(sl));
}
var fe = vn(0);
function Ti(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Po = [];
function xs() {
  for (var e = 0; e < Po.length; e++)
    Po[e]._workInProgressVersionPrimary = null;
  Po.length = 0;
}
var oi = $t.ReactCurrentDispatcher,
  Do = $t.ReactCurrentBatchConfig,
  Fn = 0,
  he = null,
  Ee = null,
  Ne = null,
  Ri = !1,
  Xr = !1,
  cl = 0,
  Gm = 0;
function Pe() {
  throw Error(N(321));
}
function Ss(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!St(e[n], t[n])) return !1;
  return !0;
}
function ks(e, t, n, r, l, i) {
  if (
    ((Fn = i),
    (he = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (oi.current = e === null || e.memoizedState === null ? bm : qm),
    (e = n(r, l)),
    Xr)
  ) {
    i = 0;
    do {
      if (((Xr = !1), (cl = 0), 25 <= i)) throw Error(N(301));
      (i += 1),
        (Ne = Ee = null),
        (t.updateQueue = null),
        (oi.current = eg),
        (e = n(r, l));
    } while (Xr);
  }
  if (
    ((oi.current = Li),
    (t = Ee !== null && Ee.next !== null),
    (Fn = 0),
    (Ne = Ee = he = null),
    (Ri = !1),
    t)
  )
    throw Error(N(300));
  return e;
}
function Es() {
  var e = cl !== 0;
  return (cl = 0), e;
}
function Et() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Ne === null ? (he.memoizedState = Ne = e) : (Ne = Ne.next = e), Ne;
}
function ft() {
  if (Ee === null) {
    var e = he.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Ee.next;
  var t = Ne === null ? he.memoizedState : Ne.next;
  if (t !== null) (Ne = t), (Ee = e);
  else {
    if (e === null) throw Error(N(310));
    (Ee = e),
      (e = {
        memoizedState: Ee.memoizedState,
        baseState: Ee.baseState,
        baseQueue: Ee.baseQueue,
        queue: Ee.queue,
        next: null,
      }),
      Ne === null ? (he.memoizedState = Ne = e) : (Ne = Ne.next = e);
  }
  return Ne;
}
function dl(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function zo(e) {
  var t = ft(),
    n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = Ee,
    l = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      (l.next = i.next), (i.next = o);
    }
    (r.baseQueue = l = i), (n.pending = null);
  }
  if (l !== null) {
    (i = l.next), (r = r.baseState);
    var a = (o = null),
      s = null,
      u = i;
    do {
      var d = u.lane;
      if ((Fn & d) === d)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var c = {
          lane: d,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        s === null ? ((a = s = c), (o = r)) : (s = s.next = c),
          (he.lanes |= d),
          (In |= d);
      }
      u = u.next;
    } while (u !== null && u !== i);
    s === null ? (o = r) : (s.next = a),
      St(r, t.memoizedState) || (Xe = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (i = l.lane), (he.lanes |= i), (In |= i), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Oo(e) {
  var t = ft(),
    n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = (l = l.next);
    do (i = e(i, o.action)), (o = o.next);
    while (o !== l);
    St(i, t.memoizedState) || (Xe = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function cf() {}
function df(e, t) {
  var n = he,
    r = ft(),
    l = t(),
    i = !St(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (Xe = !0)),
    (r = r.queue),
    _s(pf.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (Ne !== null && Ne.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      fl(9, hf.bind(null, n, r, l, t), void 0, null),
      Ce === null)
    )
      throw Error(N(349));
    Fn & 30 || ff(n, t, l);
  }
  return l;
}
function ff(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = he.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (he.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function hf(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), mf(t) && gf(e);
}
function pf(e, t, n) {
  return n(function () {
    mf(t) && gf(e);
  });
}
function mf(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !St(e, n);
  } catch {
    return !0;
  }
}
function gf(e) {
  var t = Bt(e, 1);
  t !== null && wt(t, e, 1, -1);
}
function Yu(e) {
  var t = Et();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: dl,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Jm.bind(null, he, e)),
    [t.memoizedState, e]
  );
}
function fl(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = he.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (he.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function vf() {
  return ft().memoizedState;
}
function ai(e, t, n, r) {
  var l = Et();
  (he.flags |= e),
    (l.memoizedState = fl(1 | t, n, void 0, r === void 0 ? null : r));
}
function Ji(e, t, n, r) {
  var l = ft();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Ee !== null) {
    var o = Ee.memoizedState;
    if (((i = o.destroy), r !== null && Ss(r, o.deps))) {
      l.memoizedState = fl(t, n, i, r);
      return;
    }
  }
  (he.flags |= e), (l.memoizedState = fl(1 | t, n, i, r));
}
function Xu(e, t) {
  return ai(8390656, 8, e, t);
}
function _s(e, t) {
  return Ji(2048, 8, e, t);
}
function yf(e, t) {
  return Ji(4, 2, e, t);
}
function wf(e, t) {
  return Ji(4, 4, e, t);
}
function xf(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Sf(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Ji(4, 4, xf.bind(null, t, e), n)
  );
}
function Ms() {}
function kf(e, t) {
  var n = ft();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ss(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Ef(e, t) {
  var n = ft();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ss(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function _f(e, t, n) {
  return Fn & 21
    ? (St(n, t) || ((n = jd()), (he.lanes |= n), (In |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Xe = !0)), (e.memoizedState = n));
}
function Km(e, t) {
  var n = ne;
  (ne = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Do.transition;
  Do.transition = {};
  try {
    e(!1), t();
  } finally {
    (ne = n), (Do.transition = r);
  }
}
function Mf() {
  return ft().memoizedState;
}
function Zm(e, t, n) {
  var r = dn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Nf(e))
  )
    Cf(t, n);
  else if (((n = af(e, t, n, r)), n !== null)) {
    var l = Be();
    wt(n, e, r, l), jf(n, t, r);
  }
}
function Jm(e, t, n) {
  var r = dn(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Nf(e)) Cf(t, l);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var o = t.lastRenderedState,
          a = i(o, n);
        if (((l.hasEagerState = !0), (l.eagerState = a), St(a, o))) {
          var s = t.interleaved;
          s === null
            ? ((l.next = l), gs(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = af(e, t, l, r)),
      n !== null && ((l = Be()), wt(n, e, r, l), jf(n, t, r));
  }
}
function Nf(e) {
  var t = e.alternate;
  return e === he || (t !== null && t === he);
}
function Cf(e, t) {
  Xr = Ri = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function jf(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ns(e, n);
  }
}
var Li = {
    readContext: dt,
    useCallback: Pe,
    useContext: Pe,
    useEffect: Pe,
    useImperativeHandle: Pe,
    useInsertionEffect: Pe,
    useLayoutEffect: Pe,
    useMemo: Pe,
    useReducer: Pe,
    useRef: Pe,
    useState: Pe,
    useDebugValue: Pe,
    useDeferredValue: Pe,
    useTransition: Pe,
    useMutableSource: Pe,
    useSyncExternalStore: Pe,
    useId: Pe,
    unstable_isNewReconciler: !1,
  },
  bm = {
    readContext: dt,
    useCallback: function (e, t) {
      return (Et().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: dt,
    useEffect: Xu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        ai(4194308, 4, xf.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return ai(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return ai(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Et();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Et();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Zm.bind(null, he, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Et();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Yu,
    useDebugValue: Ms,
    useDeferredValue: function (e) {
      return (Et().memoizedState = e);
    },
    useTransition: function () {
      var e = Yu(!1),
        t = e[0];
      return (e = Km.bind(null, e[1])), (Et().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = he,
        l = Et();
      if (ce) {
        if (n === void 0) throw Error(N(407));
        n = n();
      } else {
        if (((n = t()), Ce === null)) throw Error(N(349));
        Fn & 30 || ff(r, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (l.queue = i),
        Xu(pf.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        fl(9, hf.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Et(),
        t = Ce.identifierPrefix;
      if (ce) {
        var n = Ft,
          r = Ot;
        (n = (r & ~(1 << (32 - yt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = cl++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Gm++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  qm = {
    readContext: dt,
    useCallback: kf,
    useContext: dt,
    useEffect: _s,
    useImperativeHandle: Sf,
    useInsertionEffect: yf,
    useLayoutEffect: wf,
    useMemo: Ef,
    useReducer: zo,
    useRef: vf,
    useState: function () {
      return zo(dl);
    },
    useDebugValue: Ms,
    useDeferredValue: function (e) {
      var t = ft();
      return _f(t, Ee.memoizedState, e);
    },
    useTransition: function () {
      var e = zo(dl)[0],
        t = ft().memoizedState;
      return [e, t];
    },
    useMutableSource: cf,
    useSyncExternalStore: df,
    useId: Mf,
    unstable_isNewReconciler: !1,
  },
  eg = {
    readContext: dt,
    useCallback: kf,
    useContext: dt,
    useEffect: _s,
    useImperativeHandle: Sf,
    useInsertionEffect: yf,
    useLayoutEffect: wf,
    useMemo: Ef,
    useReducer: Oo,
    useRef: vf,
    useState: function () {
      return Oo(dl);
    },
    useDebugValue: Ms,
    useDeferredValue: function (e) {
      var t = ft();
      return Ee === null ? (t.memoizedState = e) : _f(t, Ee.memoizedState, e);
    },
    useTransition: function () {
      var e = Oo(dl)[0],
        t = ft().memoizedState;
      return [e, t];
    },
    useMutableSource: cf,
    useSyncExternalStore: df,
    useId: Mf,
    unstable_isNewReconciler: !1,
  };
function pt(e, t) {
  if (e && e.defaultProps) {
    (t = pe({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function xa(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : pe({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var bi = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Bn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Be(),
      l = dn(e),
      i = It(r, l);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = un(e, i, l)),
      t !== null && (wt(t, e, l, r), ii(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Be(),
      l = dn(e),
      i = It(r, l);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = un(e, i, l)),
      t !== null && (wt(t, e, l, r), ii(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Be(),
      r = dn(e),
      l = It(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = un(e, l, r)),
      t !== null && (wt(t, e, r, n), ii(t, e, r));
  },
};
function Gu(e, t, n, r, l, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, o)
      : t.prototype && t.prototype.isPureReactComponent
        ? !ll(n, r) || !ll(l, i)
        : !0
  );
}
function Tf(e, t, n) {
  var r = !1,
    l = mn,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = dt(i))
      : ((l = Ke(t) ? zn : Oe.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? fr(e, l) : mn)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = bi),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Ku(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && bi.enqueueReplaceState(t, t.state, null);
}
function Sa(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = {}), vs(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (l.context = dt(i))
    : ((i = Ke(t) ? zn : Oe.current), (l.context = fr(e, i))),
    (l.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (xa(e, t, i, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && bi.enqueueReplaceState(l, l.state, null),
      ji(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function gr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += jp(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (i) {
    l =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Fo(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ka(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var tg = typeof WeakMap == "function" ? WeakMap : Map;
function Rf(e, t, n) {
  (n = It(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Di || ((Di = !0), (Pa = r)), ka(e, t);
    }),
    n
  );
}
function Lf(e, t, n) {
  (n = It(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        ka(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        ka(e, t),
          typeof r != "function" &&
            (cn === null ? (cn = new Set([this])) : cn.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function Zu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new tg();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = mg.bind(null, e, t, n)), t.then(e, e));
}
function Ju(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function bu(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = It(-1, 1)), (t.tag = 2), un(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var ng = $t.ReactCurrentOwner,
  Xe = !1;
function Ue(e, t, n, r) {
  t.child = e === null ? of(t, null, n, r) : pr(t, e.child, n, r);
}
function qu(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return (
    ur(t, l),
    (r = ks(e, t, n, r, i, l)),
    (n = Es()),
    e !== null && !Xe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Vt(e, t, l))
      : (ce && n && cs(t), (t.flags |= 1), Ue(e, t, r, l), t.child)
  );
}
function ec(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !Ds(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Pf(e, t, i, r, l))
      : ((e = di(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var o = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : ll), n(o, r) && e.ref === t.ref)
    )
      return Vt(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = fn(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Pf(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (ll(i, r) && e.ref === t.ref)
      if (((Xe = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
        e.flags & 131072 && (Xe = !0);
      else return (t.lanes = e.lanes), Vt(e, t, l);
  }
  return Ea(e, t, n, r, l);
}
function Df(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ie(rr, be),
        (be |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ie(rr, be),
          (be |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        ie(rr, be),
        (be |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ie(rr, be),
      (be |= r);
  return Ue(e, t, l, n), t.child;
}
function zf(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Ea(e, t, n, r, l) {
  var i = Ke(n) ? zn : Oe.current;
  return (
    (i = fr(t, i)),
    ur(t, l),
    (n = ks(e, t, n, r, i, l)),
    (r = Es()),
    e !== null && !Xe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Vt(e, t, l))
      : (ce && r && cs(t), (t.flags |= 1), Ue(e, t, n, l), t.child)
  );
}
function tc(e, t, n, r, l) {
  if (Ke(n)) {
    var i = !0;
    Ei(t);
  } else i = !1;
  if ((ur(t, l), t.stateNode === null))
    si(e, t), Tf(t, n, r), Sa(t, n, r, l), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      a = t.memoizedProps;
    o.props = a;
    var s = o.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = dt(u))
      : ((u = Ke(n) ? zn : Oe.current), (u = fr(t, u)));
    var d = n.getDerivedStateFromProps,
      c =
        typeof d == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    c ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== r || s !== u) && Ku(t, o, r, u)),
      (Jt = !1);
    var h = t.memoizedState;
    (o.state = h),
      ji(t, r, o, l),
      (s = t.memoizedState),
      a !== r || h !== s || Ge.current || Jt
        ? (typeof d == "function" && (xa(t, n, d, r), (s = t.memoizedState)),
          (a = Jt || Gu(t, n, a, r, h, s, u))
            ? (c ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (o.props = r),
          (o.state = s),
          (o.context = u),
          (r = a))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      sf(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : pt(t.type, a)),
      (o.props = u),
      (c = t.pendingProps),
      (h = o.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = dt(s))
        : ((s = Ke(n) ? zn : Oe.current), (s = fr(t, s)));
    var w = n.getDerivedStateFromProps;
    (d =
      typeof w == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== c || h !== s) && Ku(t, o, r, s)),
      (Jt = !1),
      (h = t.memoizedState),
      (o.state = h),
      ji(t, r, o, l);
    var x = t.memoizedState;
    a !== c || h !== x || Ge.current || Jt
      ? (typeof w == "function" && (xa(t, n, w, r), (x = t.memoizedState)),
        (u = Jt || Gu(t, n, u, r, h, x, s) || !1)
          ? (d ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, x, s),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, x, s)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = x)),
        (o.props = r),
        (o.state = x),
        (o.context = s),
        (r = u))
      : (typeof o.componentDidUpdate != "function" ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return _a(e, t, n, r, i, l);
}
function _a(e, t, n, r, l, i) {
  zf(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && Bu(t, n, !1), Vt(e, t, i);
  (r = t.stateNode), (ng.current = t);
  var a =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = pr(t, e.child, null, i)), (t.child = pr(t, null, a, i)))
      : Ue(e, t, a, i),
    (t.memoizedState = r.state),
    l && Bu(t, n, !0),
    t.child
  );
}
function Of(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Uu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Uu(e, t.context, !1),
    ys(e, t.containerInfo);
}
function nc(e, t, n, r, l) {
  return hr(), fs(l), (t.flags |= 256), Ue(e, t, n, r), t.child;
}
var Ma = { dehydrated: null, treeContext: null, retryLane: 0 };
function Na(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ff(e, t, n) {
  var r = t.pendingProps,
    l = fe.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    a;
  if (
    ((a = o) ||
      (a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    a
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    ie(fe, l & 1),
    e === null)
  )
    return (
      ya(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = to(o, r, 0, null)),
              (e = Dn(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Na(n)),
              (t.memoizedState = Ma),
              e)
            : Ns(t, o))
    );
  if (((l = e.memoizedState), l !== null && ((a = l.dehydrated), a !== null)))
    return rg(e, t, o, r, a, l, n);
  if (i) {
    (i = r.fallback), (o = t.mode), (l = e.child), (a = l.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = fn(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      a !== null ? (i = fn(a, i)) : ((i = Dn(i, o, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Na(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Ma),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = fn(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Ns(e, t) {
  return (
    (t = to({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Gl(e, t, n, r) {
  return (
    r !== null && fs(r),
    pr(t, e.child, null, n),
    (e = Ns(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function rg(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Fo(Error(N(422)))), Gl(e, t, o, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (l = t.mode),
          (r = to({ mode: "visible", children: r.children }, l, 0, null)),
          (i = Dn(i, l, o, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && pr(t, e.child, null, o),
          (t.child.memoizedState = Na(o)),
          (t.memoizedState = Ma),
          i);
  if (!(t.mode & 1)) return Gl(e, t, o, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (i = Error(N(419))), (r = Fo(i, r, void 0)), Gl(e, t, o, r);
  }
  if (((a = (o & e.childLanes) !== 0), Xe || a)) {
    if (((r = Ce), r !== null)) {
      switch (o & -o) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | o) ? 0 : l),
        l !== 0 &&
          l !== i.retryLane &&
          ((i.retryLane = l), Bt(e, l), wt(r, e, l, -1));
    }
    return Ps(), (r = Fo(Error(N(421)))), Gl(e, t, o, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = gg.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (tt = sn(l.nextSibling)),
      (nt = t),
      (ce = !0),
      (vt = null),
      e !== null &&
        ((at[st++] = Ot),
        (at[st++] = Ft),
        (at[st++] = On),
        (Ot = e.id),
        (Ft = e.overflow),
        (On = t)),
      (t = Ns(t, r.children)),
      (t.flags |= 4096),
      t);
}
function rc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), wa(e.return, t, n);
}
function Io(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = l));
}
function If(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((Ue(e, t, r.children, n), (r = fe.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && rc(e, n, t);
        else if (e.tag === 19) rc(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((ie(fe, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && Ti(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          Io(t, !1, l, n, i);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Ti(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        Io(t, !0, n, null, i);
        break;
      case "together":
        Io(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function si(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Vt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (In |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(N(153));
  if (t.child !== null) {
    for (
      e = t.child, n = fn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = fn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function lg(e, t, n) {
  switch (t.tag) {
    case 3:
      Of(t), hr();
      break;
    case 5:
      uf(t);
      break;
    case 1:
      Ke(t.type) && Ei(t);
      break;
    case 4:
      ys(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      ie(Ni, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ie(fe, fe.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? Ff(e, t, n)
            : (ie(fe, fe.current & 1),
              (e = Vt(e, t, n)),
              e !== null ? e.sibling : null);
      ie(fe, fe.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return If(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        ie(fe, fe.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Df(e, t, n);
  }
  return Vt(e, t, n);
}
var Af, Ca, Uf, Bf;
Af = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Ca = function () {};
Uf = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), Rn(Ct.current);
    var i = null;
    switch (n) {
      case "input":
        (l = Ko(e, l)), (r = Ko(e, r)), (i = []);
        break;
      case "select":
        (l = pe({}, l, { value: void 0 })),
          (r = pe({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (l = bo(e, l)), (r = bo(e, r)), (i = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Si);
    }
    ea(n, r);
    var o;
    n = null;
    for (u in l)
      if (!r.hasOwnProperty(u) && l.hasOwnProperty(u) && l[u] != null)
        if (u === "style") {
          var a = l[u];
          for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Jr.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var s = r[u];
      if (
        ((a = l != null ? l[u] : void 0),
        r.hasOwnProperty(u) && s !== a && (s != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (o in a)
              !a.hasOwnProperty(o) ||
                (s && s.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in s)
              s.hasOwnProperty(o) &&
                a[o] !== s[o] &&
                (n || (n = {}), (n[o] = s[o]));
          } else n || (i || (i = []), i.push(u, n)), (n = s);
        else
          u === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (a = a ? a.__html : void 0),
              s != null && a !== s && (i = i || []).push(u, s))
            : u === "children"
              ? (typeof s != "string" && typeof s != "number") ||
                (i = i || []).push(u, "" + s)
              : u !== "suppressContentEditableWarning" &&
                u !== "suppressHydrationWarning" &&
                (Jr.hasOwnProperty(u)
                  ? (s != null && u === "onScroll" && se("scroll", e),
                    i || a === s || (i = []))
                  : (i = i || []).push(u, s));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Bf = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Pr(e, t) {
  if (!ce)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function De(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function ig(e, t, n) {
  var r = t.pendingProps;
  switch ((ds(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return De(t), null;
    case 1:
      return Ke(t.type) && ki(), De(t), null;
    case 3:
      return (
        (r = t.stateNode),
        mr(),
        ue(Ge),
        ue(Oe),
        xs(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Yl(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), vt !== null && (Oa(vt), (vt = null)))),
        Ca(e, t),
        De(t),
        null
      );
    case 5:
      ws(t);
      var l = Rn(ul.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Uf(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(N(166));
          return De(t), null;
        }
        if (((e = Rn(Ct.current)), Yl(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[_t] = t), (r[al] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              se("cancel", r), se("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              se("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Br.length; l++) se(Br[l], r);
              break;
            case "source":
              se("error", r);
              break;
            case "img":
            case "image":
            case "link":
              se("error", r), se("load", r);
              break;
            case "details":
              se("toggle", r);
              break;
            case "input":
              fu(r, i), se("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                se("invalid", r);
              break;
            case "textarea":
              pu(r, i), se("invalid", r);
          }
          ea(n, i), (l = null);
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var a = i[o];
              o === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (i.suppressHydrationWarning !== !0 &&
                      Hl(r.textContent, a, e),
                    (l = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (i.suppressHydrationWarning !== !0 &&
                      Hl(r.textContent, a, e),
                    (l = ["children", "" + a]))
                : Jr.hasOwnProperty(o) &&
                  a != null &&
                  o === "onScroll" &&
                  se("scroll", r);
            }
          switch (n) {
            case "input":
              Il(r), hu(r, i, !0);
              break;
            case "textarea":
              Il(r), mu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Si);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = hd(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = o.createElement(n, { is: r.is }))
                  : ((e = o.createElement(n)),
                    n === "select" &&
                      ((o = e),
                      r.multiple
                        ? (o.multiple = !0)
                        : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[_t] = t),
            (e[al] = r),
            Af(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = ta(n, r)), n)) {
              case "dialog":
                se("cancel", e), se("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                se("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Br.length; l++) se(Br[l], e);
                l = r;
                break;
              case "source":
                se("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                se("error", e), se("load", e), (l = r);
                break;
              case "details":
                se("toggle", e), (l = r);
                break;
              case "input":
                fu(e, r), (l = Ko(e, r)), se("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = pe({}, r, { value: void 0 })),
                  se("invalid", e);
                break;
              case "textarea":
                pu(e, r), (l = bo(e, r)), se("invalid", e);
                break;
              default:
                l = r;
            }
            ea(n, l), (a = l);
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var s = a[i];
                i === "style"
                  ? gd(e, s)
                  : i === "dangerouslySetInnerHTML"
                    ? ((s = s ? s.__html : void 0), s != null && pd(e, s))
                    : i === "children"
                      ? typeof s == "string"
                        ? (n !== "textarea" || s !== "") && br(e, s)
                        : typeof s == "number" && br(e, "" + s)
                      : i !== "suppressContentEditableWarning" &&
                        i !== "suppressHydrationWarning" &&
                        i !== "autoFocus" &&
                        (Jr.hasOwnProperty(i)
                          ? s != null && i === "onScroll" && se("scroll", e)
                          : s != null && Za(e, i, s, o));
              }
            switch (n) {
              case "input":
                Il(e), hu(e, r, !1);
                break;
              case "textarea":
                Il(e), mu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + pn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? ir(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      ir(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Si);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return De(t), null;
    case 6:
      if (e && t.stateNode != null) Bf(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(N(166));
        if (((n = Rn(ul.current)), Rn(Ct.current), Yl(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[_t] = t),
            (i = r.nodeValue !== n) && ((e = nt), e !== null))
          )
            switch (e.tag) {
              case 3:
                Hl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Hl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[_t] = t),
            (t.stateNode = r);
      }
      return De(t), null;
    case 13:
      if (
        (ue(fe),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ce && tt !== null && t.mode & 1 && !(t.flags & 128))
          rf(), hr(), (t.flags |= 98560), (i = !1);
        else if (((i = Yl(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(N(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(N(317));
            i[_t] = t;
          } else
            hr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          De(t), (i = !1);
        } else vt !== null && (Oa(vt), (vt = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || fe.current & 1 ? _e === 0 && (_e = 3) : Ps())),
          t.updateQueue !== null && (t.flags |= 4),
          De(t),
          null);
    case 4:
      return (
        mr(), Ca(e, t), e === null && il(t.stateNode.containerInfo), De(t), null
      );
    case 10:
      return ms(t.type._context), De(t), null;
    case 17:
      return Ke(t.type) && ki(), De(t), null;
    case 19:
      if ((ue(fe), (i = t.memoizedState), i === null)) return De(t), null;
      if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) Pr(i, !1);
        else {
          if (_e !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = Ti(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    Pr(i, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return ie(fe, (fe.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            we() > vr &&
            ((t.flags |= 128), (r = !0), Pr(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Ti(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Pr(i, !0),
              i.tail === null && i.tailMode === "hidden" && !o.alternate && !ce)
            )
              return De(t), null;
          } else
            2 * we() - i.renderingStartTime > vr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Pr(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = i.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = we()),
          (t.sibling = null),
          (n = fe.current),
          ie(fe, r ? (n & 1) | 2 : n & 1),
          t)
        : (De(t), null);
    case 22:
    case 23:
      return (
        Ls(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? be & 1073741824 && (De(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : De(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(N(156, t.tag));
}
function og(e, t) {
  switch ((ds(t), t.tag)) {
    case 1:
      return (
        Ke(t.type) && ki(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        mr(),
        ue(Ge),
        ue(Oe),
        xs(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return ws(t), null;
    case 13:
      if (
        (ue(fe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(N(340));
        hr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ue(fe), null;
    case 4:
      return mr(), null;
    case 10:
      return ms(t.type._context), null;
    case 22:
    case 23:
      return Ls(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Kl = !1,
  ze = !1,
  ag = typeof WeakSet == "function" ? WeakSet : Set,
  F = null;
function nr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ve(e, t, r);
      }
    else n.current = null;
}
function ja(e, t, n) {
  try {
    n();
  } catch (r) {
    ve(e, t, r);
  }
}
var lc = !1;
function sg(e, t) {
  if (((da = yi), (e = Qd()), us(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            a = -1,
            s = -1,
            u = 0,
            d = 0,
            c = e,
            h = null;
          t: for (;;) {
            for (
              var w;
              c !== n || (l !== 0 && c.nodeType !== 3) || (a = o + l),
                c !== i || (r !== 0 && c.nodeType !== 3) || (s = o + r),
                c.nodeType === 3 && (o += c.nodeValue.length),
                (w = c.firstChild) !== null;

            )
              (h = c), (c = w);
            for (;;) {
              if (c === e) break t;
              if (
                (h === n && ++u === l && (a = o),
                h === i && ++d === r && (s = o),
                (w = c.nextSibling) !== null)
              )
                break;
              (c = h), (h = c.parentNode);
            }
            c = w;
          }
          n = a === -1 || s === -1 ? null : { start: a, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (fa = { focusedElem: e, selectionRange: n }, yi = !1, F = t; F !== null; )
    if (((t = F), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (F = e);
    else
      for (; F !== null; ) {
        t = F;
        try {
          var x = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (x !== null) {
                  var S = x.memoizedProps,
                    j = x.memoizedState,
                    m = t.stateNode,
                    f = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? S : pt(t.type, S),
                      j,
                    );
                  m.__reactInternalSnapshotBeforeUpdate = f;
                }
                break;
              case 3:
                var v = t.stateNode.containerInfo;
                v.nodeType === 1
                  ? (v.textContent = "")
                  : v.nodeType === 9 &&
                    v.documentElement &&
                    v.removeChild(v.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(N(163));
            }
        } catch (_) {
          ve(t, t.return, _);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (F = e);
          break;
        }
        F = t.return;
      }
  return (x = lc), (lc = !1), x;
}
function Gr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        (l.destroy = void 0), i !== void 0 && ja(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function qi(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Ta(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Vf(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Vf(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[_t], delete t[al], delete t[ma], delete t[Qm], delete t[Hm])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Wf(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ic(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Wf(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ra(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Si));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ra(e, t, n), e = e.sibling; e !== null; ) Ra(e, t, n), (e = e.sibling);
}
function La(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (La(e, t, n), e = e.sibling; e !== null; ) La(e, t, n), (e = e.sibling);
}
var Te = null,
  mt = !1;
function Gt(e, t, n) {
  for (n = n.child; n !== null; ) $f(e, t, n), (n = n.sibling);
}
function $f(e, t, n) {
  if (Nt && typeof Nt.onCommitFiberUnmount == "function")
    try {
      Nt.onCommitFiberUnmount(Hi, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ze || nr(n, t);
    case 6:
      var r = Te,
        l = mt;
      (Te = null),
        Gt(e, t, n),
        (Te = r),
        (mt = l),
        Te !== null &&
          (mt
            ? ((e = Te),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Te.removeChild(n.stateNode));
      break;
    case 18:
      Te !== null &&
        (mt
          ? ((e = Te),
            (n = n.stateNode),
            e.nodeType === 8
              ? Ro(e.parentNode, n)
              : e.nodeType === 1 && Ro(e, n),
            nl(e))
          : Ro(Te, n.stateNode));
      break;
    case 4:
      (r = Te),
        (l = mt),
        (Te = n.stateNode.containerInfo),
        (mt = !0),
        Gt(e, t, n),
        (Te = r),
        (mt = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ze &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var i = l,
            o = i.destroy;
          (i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && ja(n, t, o),
            (l = l.next);
        } while (l !== r);
      }
      Gt(e, t, n);
      break;
    case 1:
      if (
        !ze &&
        (nr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          ve(n, t, a);
        }
      Gt(e, t, n);
      break;
    case 21:
      Gt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ze = (r = ze) || n.memoizedState !== null), Gt(e, t, n), (ze = r))
        : Gt(e, t, n);
      break;
    default:
      Gt(e, t, n);
  }
}
function oc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new ag()),
      t.forEach(function (r) {
        var l = vg.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function ht(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e,
          o = t,
          a = o;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (Te = a.stateNode), (mt = !1);
              break e;
            case 3:
              (Te = a.stateNode.containerInfo), (mt = !0);
              break e;
            case 4:
              (Te = a.stateNode.containerInfo), (mt = !0);
              break e;
          }
          a = a.return;
        }
        if (Te === null) throw Error(N(160));
        $f(i, o, l), (Te = null), (mt = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (u) {
        ve(l, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Qf(t, e), (t = t.sibling);
}
function Qf(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ht(t, e), kt(e), r & 4)) {
        try {
          Gr(3, e, e.return), qi(3, e);
        } catch (S) {
          ve(e, e.return, S);
        }
        try {
          Gr(5, e, e.return);
        } catch (S) {
          ve(e, e.return, S);
        }
      }
      break;
    case 1:
      ht(t, e), kt(e), r & 512 && n !== null && nr(n, n.return);
      break;
    case 5:
      if (
        (ht(t, e),
        kt(e),
        r & 512 && n !== null && nr(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          br(l, "");
        } catch (S) {
          ve(e, e.return, S);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          a = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            a === "input" && i.type === "radio" && i.name != null && dd(l, i),
              ta(a, o);
            var u = ta(a, i);
            for (o = 0; o < s.length; o += 2) {
              var d = s[o],
                c = s[o + 1];
              d === "style"
                ? gd(l, c)
                : d === "dangerouslySetInnerHTML"
                  ? pd(l, c)
                  : d === "children"
                    ? br(l, c)
                    : Za(l, d, c, u);
            }
            switch (a) {
              case "input":
                Zo(l, i);
                break;
              case "textarea":
                fd(l, i);
                break;
              case "select":
                var h = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var w = i.value;
                w != null
                  ? ir(l, !!i.multiple, w, !1)
                  : h !== !!i.multiple &&
                    (i.defaultValue != null
                      ? ir(l, !!i.multiple, i.defaultValue, !0)
                      : ir(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[al] = i;
          } catch (S) {
            ve(e, e.return, S);
          }
      }
      break;
    case 6:
      if ((ht(t, e), kt(e), r & 4)) {
        if (e.stateNode === null) throw Error(N(162));
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          l.nodeValue = i;
        } catch (S) {
          ve(e, e.return, S);
        }
      }
      break;
    case 3:
      if (
        (ht(t, e), kt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          nl(t.containerInfo);
        } catch (S) {
          ve(e, e.return, S);
        }
      break;
    case 4:
      ht(t, e), kt(e);
      break;
    case 13:
      ht(t, e),
        kt(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Ts = we())),
        r & 4 && oc(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ze = (u = ze) || d), ht(t, e), (ze = u)) : ht(t, e),
        kt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !d && e.mode & 1)
        )
          for (F = e, d = e.child; d !== null; ) {
            for (c = F = d; F !== null; ) {
              switch (((h = F), (w = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Gr(4, h, h.return);
                  break;
                case 1:
                  nr(h, h.return);
                  var x = h.stateNode;
                  if (typeof x.componentWillUnmount == "function") {
                    (r = h), (n = h.return);
                    try {
                      (t = r),
                        (x.props = t.memoizedProps),
                        (x.state = t.memoizedState),
                        x.componentWillUnmount();
                    } catch (S) {
                      ve(r, n, S);
                    }
                  }
                  break;
                case 5:
                  nr(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    sc(c);
                    continue;
                  }
              }
              w !== null ? ((w.return = h), (F = w)) : sc(c);
            }
            d = d.sibling;
          }
        e: for (d = null, c = e; ; ) {
          if (c.tag === 5) {
            if (d === null) {
              d = c;
              try {
                (l = c.stateNode),
                  u
                    ? ((i = l.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((a = c.stateNode),
                      (s = c.memoizedProps.style),
                      (o =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (a.style.display = md("display", o)));
              } catch (S) {
                ve(e, e.return, S);
              }
            }
          } else if (c.tag === 6) {
            if (d === null)
              try {
                c.stateNode.nodeValue = u ? "" : c.memoizedProps;
              } catch (S) {
                ve(e, e.return, S);
              }
          } else if (
            ((c.tag !== 22 && c.tag !== 23) ||
              c.memoizedState === null ||
              c === e) &&
            c.child !== null
          ) {
            (c.child.return = c), (c = c.child);
            continue;
          }
          if (c === e) break e;
          for (; c.sibling === null; ) {
            if (c.return === null || c.return === e) break e;
            d === c && (d = null), (c = c.return);
          }
          d === c && (d = null), (c.sibling.return = c.return), (c = c.sibling);
        }
      }
      break;
    case 19:
      ht(t, e), kt(e), r & 4 && oc(e);
      break;
    case 21:
      break;
    default:
      ht(t, e), kt(e);
  }
}
function kt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Wf(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(N(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (br(l, ""), (r.flags &= -33));
          var i = ic(e);
          La(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            a = ic(e);
          Ra(e, a, o);
          break;
        default:
          throw Error(N(161));
      }
    } catch (s) {
      ve(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function ug(e, t, n) {
  (F = e), Hf(e);
}
function Hf(e, t, n) {
  for (var r = (e.mode & 1) !== 0; F !== null; ) {
    var l = F,
      i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || Kl;
      if (!o) {
        var a = l.alternate,
          s = (a !== null && a.memoizedState !== null) || ze;
        a = Kl;
        var u = ze;
        if (((Kl = o), (ze = s) && !u))
          for (F = l; F !== null; )
            (o = F),
              (s = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? uc(l)
                : s !== null
                  ? ((s.return = o), (F = s))
                  : uc(l);
        for (; i !== null; ) (F = i), Hf(i), (i = i.sibling);
        (F = l), (Kl = a), (ze = u);
      }
      ac(e);
    } else
      l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (F = i)) : ac(e);
  }
}
function ac(e) {
  for (; F !== null; ) {
    var t = F;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ze || qi(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ze)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : pt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var i = t.updateQueue;
              i !== null && Hu(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Hu(t, o, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var d = u.memoizedState;
                  if (d !== null) {
                    var c = d.dehydrated;
                    c !== null && nl(c);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(N(163));
          }
        ze || (t.flags & 512 && Ta(t));
      } catch (h) {
        ve(t, t.return, h);
      }
    }
    if (t === e) {
      F = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (F = n);
      break;
    }
    F = t.return;
  }
}
function sc(e) {
  for (; F !== null; ) {
    var t = F;
    if (t === e) {
      F = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (F = n);
      break;
    }
    F = t.return;
  }
}
function uc(e) {
  for (; F !== null; ) {
    var t = F;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            qi(4, t);
          } catch (s) {
            ve(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              ve(t, l, s);
            }
          }
          var i = t.return;
          try {
            Ta(t);
          } catch (s) {
            ve(t, i, s);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Ta(t);
          } catch (s) {
            ve(t, o, s);
          }
      }
    } catch (s) {
      ve(t, t.return, s);
    }
    if (t === e) {
      F = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (F = a);
      break;
    }
    F = t.return;
  }
}
var cg = Math.ceil,
  Pi = $t.ReactCurrentDispatcher,
  Cs = $t.ReactCurrentOwner,
  ct = $t.ReactCurrentBatchConfig,
  q = 0,
  Ce = null,
  ke = null,
  Re = 0,
  be = 0,
  rr = vn(0),
  _e = 0,
  hl = null,
  In = 0,
  eo = 0,
  js = 0,
  Kr = null,
  Ye = null,
  Ts = 0,
  vr = 1 / 0,
  Dt = null,
  Di = !1,
  Pa = null,
  cn = null,
  Zl = !1,
  tn = null,
  zi = 0,
  Zr = 0,
  Da = null,
  ui = -1,
  ci = 0;
function Be() {
  return q & 6 ? we() : ui !== -1 ? ui : (ui = we());
}
function dn(e) {
  return e.mode & 1
    ? q & 2 && Re !== 0
      ? Re & -Re
      : Xm.transition !== null
        ? (ci === 0 && (ci = jd()), ci)
        : ((e = ne),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Od(e.type))),
          e)
    : 1;
}
function wt(e, t, n, r) {
  if (50 < Zr) throw ((Zr = 0), (Da = null), Error(N(185)));
  vl(e, n, r),
    (!(q & 2) || e !== Ce) &&
      (e === Ce && (!(q & 2) && (eo |= n), _e === 4 && qt(e, Re)),
      Ze(e, r),
      n === 1 && q === 0 && !(t.mode & 1) && ((vr = we() + 500), Zi && yn()));
}
function Ze(e, t) {
  var n = e.callbackNode;
  Xp(e, t);
  var r = vi(e, e === Ce ? Re : 0);
  if (r === 0)
    n !== null && yu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && yu(n), t === 1))
      e.tag === 0 ? Ym(cc.bind(null, e)) : ef(cc.bind(null, e)),
        Wm(function () {
          !(q & 6) && yn();
        }),
        (n = null);
    else {
      switch (Td(r)) {
        case 1:
          n = ts;
          break;
        case 4:
          n = Nd;
          break;
        case 16:
          n = gi;
          break;
        case 536870912:
          n = Cd;
          break;
        default:
          n = gi;
      }
      n = qf(n, Yf.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Yf(e, t) {
  if (((ui = -1), (ci = 0), q & 6)) throw Error(N(327));
  var n = e.callbackNode;
  if (cr() && e.callbackNode !== n) return null;
  var r = vi(e, e === Ce ? Re : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Oi(e, r);
  else {
    t = r;
    var l = q;
    q |= 2;
    var i = Gf();
    (Ce !== e || Re !== t) && ((Dt = null), (vr = we() + 500), Pn(e, t));
    do
      try {
        hg();
        break;
      } catch (a) {
        Xf(e, a);
      }
    while (!0);
    ps(),
      (Pi.current = i),
      (q = l),
      ke !== null ? (t = 0) : ((Ce = null), (Re = 0), (t = _e));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = oa(e)), l !== 0 && ((r = l), (t = za(e, l)))), t === 1)
    )
      throw ((n = hl), Pn(e, 0), qt(e, r), Ze(e, we()), n);
    if (t === 6) qt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !dg(l) &&
          ((t = Oi(e, r)),
          t === 2 && ((i = oa(e)), i !== 0 && ((r = i), (t = za(e, i)))),
          t === 1))
      )
        throw ((n = hl), Pn(e, 0), qt(e, r), Ze(e, we()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(N(345));
        case 2:
          Mn(e, Ye, Dt);
          break;
        case 3:
          if (
            (qt(e, r), (r & 130023424) === r && ((t = Ts + 500 - we()), 10 < t))
          ) {
            if (vi(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              Be(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = pa(Mn.bind(null, e, Ye, Dt), t);
            break;
          }
          Mn(e, Ye, Dt);
          break;
        case 4:
          if ((qt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - yt(r);
            (i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i);
          }
          if (
            ((r = l),
            (r = we() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * cg(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = pa(Mn.bind(null, e, Ye, Dt), r);
            break;
          }
          Mn(e, Ye, Dt);
          break;
        case 5:
          Mn(e, Ye, Dt);
          break;
        default:
          throw Error(N(329));
      }
    }
  }
  return Ze(e, we()), e.callbackNode === n ? Yf.bind(null, e) : null;
}
function za(e, t) {
  var n = Kr;
  return (
    e.current.memoizedState.isDehydrated && (Pn(e, t).flags |= 256),
    (e = Oi(e, t)),
    e !== 2 && ((t = Ye), (Ye = n), t !== null && Oa(t)),
    e
  );
}
function Oa(e) {
  Ye === null ? (Ye = e) : Ye.push.apply(Ye, e);
}
function dg(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!St(i(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function qt(e, t) {
  for (
    t &= ~js,
      t &= ~eo,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - yt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function cc(e) {
  if (q & 6) throw Error(N(327));
  cr();
  var t = vi(e, 0);
  if (!(t & 1)) return Ze(e, we()), null;
  var n = Oi(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = oa(e);
    r !== 0 && ((t = r), (n = za(e, r)));
  }
  if (n === 1) throw ((n = hl), Pn(e, 0), qt(e, t), Ze(e, we()), n);
  if (n === 6) throw Error(N(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Mn(e, Ye, Dt),
    Ze(e, we()),
    null
  );
}
function Rs(e, t) {
  var n = q;
  q |= 1;
  try {
    return e(t);
  } finally {
    (q = n), q === 0 && ((vr = we() + 500), Zi && yn());
  }
}
function An(e) {
  tn !== null && tn.tag === 0 && !(q & 6) && cr();
  var t = q;
  q |= 1;
  var n = ct.transition,
    r = ne;
  try {
    if (((ct.transition = null), (ne = 1), e)) return e();
  } finally {
    (ne = r), (ct.transition = n), (q = t), !(q & 6) && yn();
  }
}
function Ls() {
  (be = rr.current), ue(rr);
}
function Pn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Vm(n)), ke !== null))
    for (n = ke.return; n !== null; ) {
      var r = n;
      switch ((ds(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && ki();
          break;
        case 3:
          mr(), ue(Ge), ue(Oe), xs();
          break;
        case 5:
          ws(r);
          break;
        case 4:
          mr();
          break;
        case 13:
          ue(fe);
          break;
        case 19:
          ue(fe);
          break;
        case 10:
          ms(r.type._context);
          break;
        case 22:
        case 23:
          Ls();
      }
      n = n.return;
    }
  if (
    ((Ce = e),
    (ke = e = fn(e.current, null)),
    (Re = be = t),
    (_e = 0),
    (hl = null),
    (js = eo = In = 0),
    (Ye = Kr = null),
    Tn !== null)
  ) {
    for (t = 0; t < Tn.length; t++)
      if (((n = Tn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          i = n.pending;
        if (i !== null) {
          var o = i.next;
          (i.next = l), (r.next = o);
        }
        n.pending = r;
      }
    Tn = null;
  }
  return e;
}
function Xf(e, t) {
  do {
    var n = ke;
    try {
      if ((ps(), (oi.current = Li), Ri)) {
        for (var r = he.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        Ri = !1;
      }
      if (
        ((Fn = 0),
        (Ne = Ee = he = null),
        (Xr = !1),
        (cl = 0),
        (Cs.current = null),
        n === null || n.return === null)
      ) {
        (_e = 1), (hl = t), (ke = null);
        break;
      }
      e: {
        var i = e,
          o = n.return,
          a = n,
          s = t;
        if (
          ((t = Re),
          (a.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var u = s,
            d = a,
            c = d.tag;
          if (!(d.mode & 1) && (c === 0 || c === 11 || c === 15)) {
            var h = d.alternate;
            h
              ? ((d.updateQueue = h.updateQueue),
                (d.memoizedState = h.memoizedState),
                (d.lanes = h.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var w = Ju(o);
          if (w !== null) {
            (w.flags &= -257),
              bu(w, o, a, i, t),
              w.mode & 1 && Zu(i, u, t),
              (t = w),
              (s = u);
            var x = t.updateQueue;
            if (x === null) {
              var S = new Set();
              S.add(s), (t.updateQueue = S);
            } else x.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Zu(i, u, t), Ps();
              break e;
            }
            s = Error(N(426));
          }
        } else if (ce && a.mode & 1) {
          var j = Ju(o);
          if (j !== null) {
            !(j.flags & 65536) && (j.flags |= 256),
              bu(j, o, a, i, t),
              fs(gr(s, a));
            break e;
          }
        }
        (i = s = gr(s, a)),
          _e !== 4 && (_e = 2),
          Kr === null ? (Kr = [i]) : Kr.push(i),
          (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var m = Rf(i, s, t);
              Qu(i, m);
              break e;
            case 1:
              a = s;
              var f = i.type,
                v = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof f.getDerivedStateFromError == "function" ||
                  (v !== null &&
                    typeof v.componentDidCatch == "function" &&
                    (cn === null || !cn.has(v))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var _ = Lf(i, a, t);
                Qu(i, _);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Zf(n);
    } catch (T) {
      (t = T), ke === n && n !== null && (ke = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Gf() {
  var e = Pi.current;
  return (Pi.current = Li), e === null ? Li : e;
}
function Ps() {
  (_e === 0 || _e === 3 || _e === 2) && (_e = 4),
    Ce === null || (!(In & 268435455) && !(eo & 268435455)) || qt(Ce, Re);
}
function Oi(e, t) {
  var n = q;
  q |= 2;
  var r = Gf();
  (Ce !== e || Re !== t) && ((Dt = null), Pn(e, t));
  do
    try {
      fg();
      break;
    } catch (l) {
      Xf(e, l);
    }
  while (!0);
  if ((ps(), (q = n), (Pi.current = r), ke !== null)) throw Error(N(261));
  return (Ce = null), (Re = 0), _e;
}
function fg() {
  for (; ke !== null; ) Kf(ke);
}
function hg() {
  for (; ke !== null && !Ap(); ) Kf(ke);
}
function Kf(e) {
  var t = bf(e.alternate, e, be);
  (e.memoizedProps = e.pendingProps),
    t === null ? Zf(e) : (ke = t),
    (Cs.current = null);
}
function Zf(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = og(n, t)), n !== null)) {
        (n.flags &= 32767), (ke = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (_e = 6), (ke = null);
        return;
      }
    } else if (((n = ig(n, t, be)), n !== null)) {
      ke = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ke = t;
      return;
    }
    ke = t = e;
  } while (t !== null);
  _e === 0 && (_e = 5);
}
function Mn(e, t, n) {
  var r = ne,
    l = ct.transition;
  try {
    (ct.transition = null), (ne = 1), pg(e, t, n, r);
  } finally {
    (ct.transition = l), (ne = r);
  }
  return null;
}
function pg(e, t, n, r) {
  do cr();
  while (tn !== null);
  if (q & 6) throw Error(N(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(N(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (Gp(e, i),
    e === Ce && ((ke = Ce = null), (Re = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Zl ||
      ((Zl = !0),
      qf(gi, function () {
        return cr(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = ct.transition), (ct.transition = null);
    var o = ne;
    ne = 1;
    var a = q;
    (q |= 4),
      (Cs.current = null),
      sg(e, n),
      Qf(n, e),
      zm(fa),
      (yi = !!da),
      (fa = da = null),
      (e.current = n),
      ug(n),
      Up(),
      (q = a),
      (ne = o),
      (ct.transition = i);
  } else e.current = n;
  if (
    (Zl && ((Zl = !1), (tn = e), (zi = l)),
    (i = e.pendingLanes),
    i === 0 && (cn = null),
    Wp(n.stateNode),
    Ze(e, we()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Di) throw ((Di = !1), (e = Pa), (Pa = null), e);
  return (
    zi & 1 && e.tag !== 0 && cr(),
    (i = e.pendingLanes),
    i & 1 ? (e === Da ? Zr++ : ((Zr = 0), (Da = e))) : (Zr = 0),
    yn(),
    null
  );
}
function cr() {
  if (tn !== null) {
    var e = Td(zi),
      t = ct.transition,
      n = ne;
    try {
      if (((ct.transition = null), (ne = 16 > e ? 16 : e), tn === null))
        var r = !1;
      else {
        if (((e = tn), (tn = null), (zi = 0), q & 6)) throw Error(N(331));
        var l = q;
        for (q |= 4, F = e.current; F !== null; ) {
          var i = F,
            o = i.child;
          if (F.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var s = 0; s < a.length; s++) {
                var u = a[s];
                for (F = u; F !== null; ) {
                  var d = F;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Gr(8, d, i);
                  }
                  var c = d.child;
                  if (c !== null) (c.return = d), (F = c);
                  else
                    for (; F !== null; ) {
                      d = F;
                      var h = d.sibling,
                        w = d.return;
                      if ((Vf(d), d === u)) {
                        F = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = w), (F = h);
                        break;
                      }
                      F = w;
                    }
                }
              }
              var x = i.alternate;
              if (x !== null) {
                var S = x.child;
                if (S !== null) {
                  x.child = null;
                  do {
                    var j = S.sibling;
                    (S.sibling = null), (S = j);
                  } while (S !== null);
                }
              }
              F = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (F = o);
          else
            e: for (; F !== null; ) {
              if (((i = F), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Gr(9, i, i.return);
                }
              var m = i.sibling;
              if (m !== null) {
                (m.return = i.return), (F = m);
                break e;
              }
              F = i.return;
            }
        }
        var f = e.current;
        for (F = f; F !== null; ) {
          o = F;
          var v = o.child;
          if (o.subtreeFlags & 2064 && v !== null) (v.return = o), (F = v);
          else
            e: for (o = f; F !== null; ) {
              if (((a = F), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      qi(9, a);
                  }
                } catch (T) {
                  ve(a, a.return, T);
                }
              if (a === o) {
                F = null;
                break e;
              }
              var _ = a.sibling;
              if (_ !== null) {
                (_.return = a.return), (F = _);
                break e;
              }
              F = a.return;
            }
        }
        if (
          ((q = l), yn(), Nt && typeof Nt.onPostCommitFiberRoot == "function")
        )
          try {
            Nt.onPostCommitFiberRoot(Hi, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (ne = n), (ct.transition = t);
    }
  }
  return !1;
}
function dc(e, t, n) {
  (t = gr(n, t)),
    (t = Rf(e, t, 1)),
    (e = un(e, t, 1)),
    (t = Be()),
    e !== null && (vl(e, 1, t), Ze(e, t));
}
function ve(e, t, n) {
  if (e.tag === 3) dc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        dc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (cn === null || !cn.has(r)))
        ) {
          (e = gr(n, e)),
            (e = Lf(t, e, 1)),
            (t = un(t, e, 1)),
            (e = Be()),
            t !== null && (vl(t, 1, e), Ze(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function mg(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Be()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Ce === e &&
      (Re & n) === n &&
      (_e === 4 || (_e === 3 && (Re & 130023424) === Re && 500 > we() - Ts)
        ? Pn(e, 0)
        : (js |= n)),
    Ze(e, t);
}
function Jf(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Bl), (Bl <<= 1), !(Bl & 130023424) && (Bl = 4194304))
      : (t = 1));
  var n = Be();
  (e = Bt(e, t)), e !== null && (vl(e, t, n), Ze(e, n));
}
function gg(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Jf(e, n);
}
function vg(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(N(314));
  }
  r !== null && r.delete(t), Jf(e, n);
}
var bf;
bf = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ge.current) Xe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Xe = !1), lg(e, t, n);
      Xe = !!(e.flags & 131072);
    }
  else (Xe = !1), ce && t.flags & 1048576 && tf(t, Mi, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      si(e, t), (e = t.pendingProps);
      var l = fr(t, Oe.current);
      ur(t, n), (l = ks(null, t, r, e, l, n));
      var i = Es();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ke(r) ? ((i = !0), Ei(t)) : (i = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            vs(t),
            (l.updater = bi),
            (t.stateNode = l),
            (l._reactInternals = t),
            Sa(t, r, e, n),
            (t = _a(null, t, r, !0, i, n)))
          : ((t.tag = 0), ce && i && cs(t), Ue(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (si(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = wg(r)),
          (e = pt(r, e)),
          l)
        ) {
          case 0:
            t = Ea(null, t, r, e, n);
            break e;
          case 1:
            t = tc(null, t, r, e, n);
            break e;
          case 11:
            t = qu(null, t, r, e, n);
            break e;
          case 14:
            t = ec(null, t, r, pt(r.type, e), n);
            break e;
        }
        throw Error(N(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : pt(r, l)),
        Ea(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : pt(r, l)),
        tc(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Of(t), e === null)) throw Error(N(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (l = i.element),
          sf(e, t),
          ji(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (l = gr(Error(N(423)), t)), (t = nc(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = gr(Error(N(424)), t)), (t = nc(e, t, r, n, l));
            break e;
          } else
            for (
              tt = sn(t.stateNode.containerInfo.firstChild),
                nt = t,
                ce = !0,
                vt = null,
                n = of(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((hr(), r === l)) {
            t = Vt(e, t, n);
            break e;
          }
          Ue(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        uf(t),
        e === null && ya(t),
        (r = t.type),
        (l = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = l.children),
        ha(r, l) ? (o = null) : i !== null && ha(r, i) && (t.flags |= 32),
        zf(e, t),
        Ue(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && ya(t), null;
    case 13:
      return Ff(e, t, n);
    case 4:
      return (
        ys(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = pr(t, null, r, n)) : Ue(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : pt(r, l)),
        qu(e, t, r, l, n)
      );
    case 7:
      return Ue(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ue(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ue(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (i = t.memoizedProps),
          (o = l.value),
          ie(Ni, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (St(i.value, o)) {
            if (i.children === l.children && !Ge.current) {
              t = Vt(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var a = i.dependencies;
              if (a !== null) {
                o = i.child;
                for (var s = a.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (i.tag === 1) {
                      (s = It(-1, n & -n)), (s.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var d = u.pending;
                        d === null
                          ? (s.next = s)
                          : ((s.next = d.next), (d.next = s)),
                          (u.pending = s);
                      }
                    }
                    (i.lanes |= n),
                      (s = i.alternate),
                      s !== null && (s.lanes |= n),
                      wa(i.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(N(341));
                (o.lanes |= n),
                  (a = o.alternate),
                  a !== null && (a.lanes |= n),
                  wa(o, n, t),
                  (o = i.sibling);
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    (i.return = o.return), (o = i);
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        Ue(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        ur(t, n),
        (l = dt(l)),
        (r = r(l)),
        (t.flags |= 1),
        Ue(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = pt(r, t.pendingProps)),
        (l = pt(r.type, l)),
        ec(e, t, r, l, n)
      );
    case 15:
      return Pf(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : pt(r, l)),
        si(e, t),
        (t.tag = 1),
        Ke(r) ? ((e = !0), Ei(t)) : (e = !1),
        ur(t, n),
        Tf(t, r, l),
        Sa(t, r, l, n),
        _a(null, t, r, !0, e, n)
      );
    case 19:
      return If(e, t, n);
    case 22:
      return Df(e, t, n);
  }
  throw Error(N(156, t.tag));
};
function qf(e, t) {
  return Md(e, t);
}
function yg(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function ut(e, t, n, r) {
  return new yg(e, t, n, r);
}
function Ds(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function wg(e) {
  if (typeof e == "function") return Ds(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === ba)) return 11;
    if (e === qa) return 14;
  }
  return 2;
}
function fn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = ut(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function di(e, t, n, r, l, i) {
  var o = 2;
  if (((r = e), typeof e == "function")) Ds(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case Xn:
        return Dn(n.children, l, i, t);
      case Ja:
        (o = 8), (l |= 8);
        break;
      case Ho:
        return (
          (e = ut(12, n, t, l | 2)), (e.elementType = Ho), (e.lanes = i), e
        );
      case Yo:
        return (e = ut(13, n, t, l)), (e.elementType = Yo), (e.lanes = i), e;
      case Xo:
        return (e = ut(19, n, t, l)), (e.elementType = Xo), (e.lanes = i), e;
      case sd:
        return to(n, l, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case od:
              o = 10;
              break e;
            case ad:
              o = 9;
              break e;
            case ba:
              o = 11;
              break e;
            case qa:
              o = 14;
              break e;
            case Zt:
              (o = 16), (r = null);
              break e;
          }
        throw Error(N(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = ut(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Dn(e, t, n, r) {
  return (e = ut(7, e, r, t)), (e.lanes = n), e;
}
function to(e, t, n, r) {
  return (
    (e = ut(22, e, r, t)),
    (e.elementType = sd),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Ao(e, t, n) {
  return (e = ut(6, e, null, t)), (e.lanes = n), e;
}
function Uo(e, t, n) {
  return (
    (t = ut(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function xg(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = wo(0)),
    (this.expirationTimes = wo(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = wo(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function zs(e, t, n, r, l, i, o, a, s) {
  return (
    (e = new xg(e, t, n, a, s)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = ut(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    vs(i),
    e
  );
}
function Sg(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Yn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function eh(e) {
  if (!e) return mn;
  e = e._reactInternals;
  e: {
    if (Bn(e) !== e || e.tag !== 1) throw Error(N(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ke(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(N(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ke(n)) return qd(e, n, t);
  }
  return t;
}
function th(e, t, n, r, l, i, o, a, s) {
  return (
    (e = zs(n, r, !0, e, l, i, o, a, s)),
    (e.context = eh(null)),
    (n = e.current),
    (r = Be()),
    (l = dn(n)),
    (i = It(r, l)),
    (i.callback = t ?? null),
    un(n, i, l),
    (e.current.lanes = l),
    vl(e, l, r),
    Ze(e, r),
    e
  );
}
function no(e, t, n, r) {
  var l = t.current,
    i = Be(),
    o = dn(l);
  return (
    (n = eh(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = It(i, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = un(l, t, o)),
    e !== null && (wt(e, l, o, i), ii(e, l, o)),
    o
  );
}
function Fi(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function fc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Os(e, t) {
  fc(e, t), (e = e.alternate) && fc(e, t);
}
function kg() {
  return null;
}
var nh =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Fs(e) {
  this._internalRoot = e;
}
ro.prototype.render = Fs.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(N(409));
  no(e, t, null, null);
};
ro.prototype.unmount = Fs.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    An(function () {
      no(null, e, null, null);
    }),
      (t[Ut] = null);
  }
};
function ro(e) {
  this._internalRoot = e;
}
ro.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Pd();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < bt.length && t !== 0 && t < bt[n].priority; n++);
    bt.splice(n, 0, e), n === 0 && zd(e);
  }
};
function Is(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function lo(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function hc() {}
function Eg(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = Fi(o);
        i.call(u);
      };
    }
    var o = th(t, r, e, 0, null, !1, !1, "", hc);
    return (
      (e._reactRootContainer = o),
      (e[Ut] = o.current),
      il(e.nodeType === 8 ? e.parentNode : e),
      An(),
      o
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = Fi(s);
      a.call(u);
    };
  }
  var s = zs(e, 0, !1, null, null, !1, !1, "", hc);
  return (
    (e._reactRootContainer = s),
    (e[Ut] = s.current),
    il(e.nodeType === 8 ? e.parentNode : e),
    An(function () {
      no(t, s, n, r);
    }),
    s
  );
}
function io(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var a = l;
      l = function () {
        var s = Fi(o);
        a.call(s);
      };
    }
    no(t, o, e, l);
  } else o = Eg(n, t, e, l, r);
  return Fi(o);
}
Rd = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Ur(t.pendingLanes);
        n !== 0 &&
          (ns(t, n | 1), Ze(t, we()), !(q & 6) && ((vr = we() + 500), yn()));
      }
      break;
    case 13:
      An(function () {
        var r = Bt(e, 1);
        if (r !== null) {
          var l = Be();
          wt(r, e, 1, l);
        }
      }),
        Os(e, 1);
  }
};
rs = function (e) {
  if (e.tag === 13) {
    var t = Bt(e, 134217728);
    if (t !== null) {
      var n = Be();
      wt(t, e, 134217728, n);
    }
    Os(e, 134217728);
  }
};
Ld = function (e) {
  if (e.tag === 13) {
    var t = dn(e),
      n = Bt(e, t);
    if (n !== null) {
      var r = Be();
      wt(n, e, t, r);
    }
    Os(e, t);
  }
};
Pd = function () {
  return ne;
};
Dd = function (e, t) {
  var n = ne;
  try {
    return (ne = e), t();
  } finally {
    ne = n;
  }
};
ra = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Zo(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Ki(r);
            if (!l) throw Error(N(90));
            cd(r), Zo(r, l);
          }
        }
      }
      break;
    case "textarea":
      fd(e, n);
      break;
    case "select":
      (t = n.value), t != null && ir(e, !!n.multiple, t, !1);
  }
};
wd = Rs;
xd = An;
var _g = { usingClientEntryPoint: !1, Events: [wl, Jn, Ki, vd, yd, Rs] },
  Dr = {
    findFiberByHostInstance: jn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Mg = {
    bundleType: Dr.bundleType,
    version: Dr.version,
    rendererPackageName: Dr.rendererPackageName,
    rendererConfig: Dr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: $t.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Ed(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Dr.findFiberByHostInstance || kg,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Jl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Jl.isDisabled && Jl.supportsFiber)
    try {
      (Hi = Jl.inject(Mg)), (Nt = Jl);
    } catch {}
}
lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _g;
lt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Is(t)) throw Error(N(200));
  return Sg(e, t, null, n);
};
lt.createRoot = function (e, t) {
  if (!Is(e)) throw Error(N(299));
  var n = !1,
    r = "",
    l = nh;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = zs(e, 1, !1, null, null, n, !1, r, l)),
    (e[Ut] = t.current),
    il(e.nodeType === 8 ? e.parentNode : e),
    new Fs(t)
  );
};
lt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(N(188))
      : ((e = Object.keys(e).join(",")), Error(N(268, e)));
  return (e = Ed(t)), (e = e === null ? null : e.stateNode), e;
};
lt.flushSync = function (e) {
  return An(e);
};
lt.hydrate = function (e, t, n) {
  if (!lo(t)) throw Error(N(200));
  return io(null, e, t, !0, n);
};
lt.hydrateRoot = function (e, t, n) {
  if (!Is(e)) throw Error(N(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    i = "",
    o = nh;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = th(t, null, e, 1, n ?? null, l, !1, i, o)),
    (e[Ut] = t.current),
    il(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new ro(t);
};
lt.render = function (e, t, n) {
  if (!lo(t)) throw Error(N(200));
  return io(null, e, t, !1, n);
};
lt.unmountComponentAtNode = function (e) {
  if (!lo(e)) throw Error(N(40));
  return e._reactRootContainer
    ? (An(function () {
        io(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ut] = null);
        });
      }),
      !0)
    : !1;
};
lt.unstable_batchedUpdates = Rs;
lt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!lo(n)) throw Error(N(200));
  if (e == null || e._reactInternals === void 0) throw Error(N(38));
  return io(e, t, n, !1, r);
};
lt.version = "18.3.1-next-f1338f8080-20240426";
function rh() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rh);
    } catch (e) {
      console.error(e);
    }
}
rh(), (nd.exports = lt);
var As = nd.exports;
const Ng = Qc(As),
  Cg = $c({ __proto__: null, default: Ng }, [As]);
var lh,
  pc = As;
(lh = pc.createRoot), pc.hydrateRoot;
/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function de() {
  return (
    (de = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    de.apply(this, arguments)
  );
}
var Se;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Se || (Se = {}));
const mc = "popstate";
function jg(e) {
  e === void 0 && (e = {});
  function t(r, l) {
    let { pathname: i, search: o, hash: a } = r.location;
    return pl(
      "",
      { pathname: i, search: o, hash: a },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || "default",
    );
  }
  function n(r, l) {
    return typeof l == "string" ? l : Sl(l);
  }
  return Rg(t, n, null, e);
}
function K(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function yr(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Tg() {
  return Math.random().toString(36).substr(2, 8);
}
function gc(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function pl(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    de(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? wn(t) : t,
      { state: n, key: (t && t.key) || r || Tg() },
    )
  );
}
function Sl(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function wn(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function Rg(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: l = document.defaultView, v5Compat: i = !1 } = r,
    o = l.history,
    a = Se.Pop,
    s = null,
    u = d();
  u == null && ((u = 0), o.replaceState(de({}, o.state, { idx: u }), ""));
  function d() {
    return (o.state || { idx: null }).idx;
  }
  function c() {
    a = Se.Pop;
    let j = d(),
      m = j == null ? null : j - u;
    (u = j), s && s({ action: a, location: S.location, delta: m });
  }
  function h(j, m) {
    a = Se.Push;
    let f = pl(S.location, j, m);
    u = d() + 1;
    let v = gc(f, u),
      _ = S.createHref(f);
    try {
      o.pushState(v, "", _);
    } catch (T) {
      if (T instanceof DOMException && T.name === "DataCloneError") throw T;
      l.location.assign(_);
    }
    i && s && s({ action: a, location: S.location, delta: 1 });
  }
  function w(j, m) {
    a = Se.Replace;
    let f = pl(S.location, j, m);
    u = d();
    let v = gc(f, u),
      _ = S.createHref(f);
    o.replaceState(v, "", _),
      i && s && s({ action: a, location: S.location, delta: 0 });
  }
  function x(j) {
    let m = l.location.origin !== "null" ? l.location.origin : l.location.href,
      f = typeof j == "string" ? j : Sl(j);
    return (
      (f = f.replace(/ $/, "%20")),
      K(
        m,
        "No window.location.(origin|href) available to create URL for href: " +
          f,
      ),
      new URL(f, m)
    );
  }
  let S = {
    get action() {
      return a;
    },
    get location() {
      return e(l, o);
    },
    listen(j) {
      if (s) throw new Error("A history only accepts one active listener");
      return (
        l.addEventListener(mc, c),
        (s = j),
        () => {
          l.removeEventListener(mc, c), (s = null);
        }
      );
    },
    createHref(j) {
      return t(l, j);
    },
    createURL: x,
    encodeLocation(j) {
      let m = x(j);
      return { pathname: m.pathname, search: m.search, hash: m.hash };
    },
    push: h,
    replace: w,
    go(j) {
      return o.go(j);
    },
  };
  return S;
}
var re;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(re || (re = {}));
const Lg = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children",
]);
function Pg(e) {
  return e.index === !0;
}
function ml(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((l, i) => {
      let o = [...n, String(i)],
        a = typeof l.id == "string" ? l.id : o.join("-");
      if (
        (K(
          l.index !== !0 || !l.children,
          "Cannot specify children on an index route",
        ),
        K(
          !r[a],
          'Found a route id collision on id "' +
            a +
            `".  Route id's must be globally unique within Data Router usages`,
        ),
        Pg(l))
      ) {
        let s = de({}, l, t(l), { id: a });
        return (r[a] = s), s;
      } else {
        let s = de({}, l, t(l), { id: a, children: void 0 });
        return (
          (r[a] = s), l.children && (s.children = ml(l.children, t, o, r)), s
        );
      }
    })
  );
}
function Nn(e, t, n) {
  return n === void 0 && (n = "/"), fi(e, t, n, !1);
}
function fi(e, t, n, r) {
  let l = typeof t == "string" ? wn(t) : t,
    i = kl(l.pathname || "/", n);
  if (i == null) return null;
  let o = ih(e);
  zg(o);
  let a = null;
  for (let s = 0; a == null && s < o.length; ++s) {
    let u = Hg(i);
    a = $g(o[s], u, r);
  }
  return a;
}
function Dg(e, t) {
  let { route: n, pathname: r, params: l } = e;
  return { id: n.id, pathname: r, params: l, data: t[n.id], handle: n.handle };
}
function ih(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let l = (i, o, a) => {
    let s = {
      relativePath: a === void 0 ? i.path || "" : a,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: o,
      route: i,
    };
    s.relativePath.startsWith("/") &&
      (K(
        s.relativePath.startsWith(r),
        'Absolute route path "' +
          s.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes.",
      ),
      (s.relativePath = s.relativePath.slice(r.length)));
    let u = hn([r, s.relativePath]),
      d = n.concat(s);
    i.children &&
      i.children.length > 0 &&
      (K(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".'),
      ),
      ih(i.children, t, d, u)),
      !(i.path == null && !i.index) &&
        t.push({ path: u, score: Vg(u, i.index), routesMeta: d });
  };
  return (
    e.forEach((i, o) => {
      var a;
      if (i.path === "" || !((a = i.path) != null && a.includes("?"))) l(i, o);
      else for (let s of oh(i.path)) l(i, o, s);
    }),
    t
  );
}
function oh(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return l ? [i, ""] : [i];
  let o = oh(r.join("/")),
    a = [];
  return (
    a.push(...o.map((s) => (s === "" ? i : [i, s].join("/")))),
    l && a.push(...o),
    a.map((s) => (e.startsWith("/") && s === "" ? "/" : s))
  );
}
function zg(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Wg(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex),
        ),
  );
}
const Og = /^:[\w-]+$/,
  Fg = 3,
  Ig = 2,
  Ag = 1,
  Ug = 10,
  Bg = -2,
  vc = (e) => e === "*";
function Vg(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(vc) && (r += Bg),
    t && (r += Ig),
    n
      .filter((l) => !vc(l))
      .reduce((l, i) => l + (Og.test(i) ? Fg : i === "" ? Ag : Ug), r)
  );
}
function Wg(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function $g(e, t, n) {
  n === void 0 && (n = !1);
  let { routesMeta: r } = e,
    l = {},
    i = "/",
    o = [];
  for (let a = 0; a < r.length; ++a) {
    let s = r[a],
      u = a === r.length - 1,
      d = i === "/" ? t : t.slice(i.length) || "/",
      c = yc(
        { path: s.relativePath, caseSensitive: s.caseSensitive, end: u },
        d,
      ),
      h = s.route;
    if (
      (!c &&
        u &&
        n &&
        !r[r.length - 1].route.index &&
        (c = yc(
          { path: s.relativePath, caseSensitive: s.caseSensitive, end: !1 },
          d,
        )),
      !c)
    )
      return null;
    Object.assign(l, c.params),
      o.push({
        params: l,
        pathname: hn([i, c.pathname]),
        pathnameBase: Gg(hn([i, c.pathnameBase])),
        route: h,
      }),
      c.pathnameBase !== "/" && (i = hn([i, c.pathnameBase]));
  }
  return o;
}
function yc(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Qg(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let i = l[0],
    o = i.replace(/(.)\/+$/, "$1"),
    a = l.slice(1);
  return {
    params: r.reduce((u, d, c) => {
      let { paramName: h, isOptional: w } = d;
      if (h === "*") {
        let S = a[c] || "";
        o = i.slice(0, i.length - S.length).replace(/(.)\/+$/, "$1");
      }
      const x = a[c];
      return (
        w && !x ? (u[h] = void 0) : (u[h] = (x || "").replace(/%2F/g, "/")), u
      );
    }, {}),
    pathname: i,
    pathnameBase: o,
    pattern: e,
  };
}
function Qg(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    yr(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'),
    );
  let r = [],
    l =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (o, a, s) => (
            r.push({ paramName: a, isOptional: s != null }),
            s ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
        ? (l += "\\/*$")
        : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"),
    [new RegExp(l, t ? void 0 : "i"), r]
  );
}
function Hg(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      yr(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ")."),
      ),
      e
    );
  }
}
function kl(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function Yg(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: l = "",
  } = typeof e == "string" ? wn(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : Xg(n, t)) : t,
    search: Kg(r),
    hash: Zg(l),
  };
}
function Xg(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((l) => {
      l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Bo(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function ah(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0),
  );
}
function sh(e, t) {
  let n = ah(e);
  return t
    ? n.map((r, l) => (l === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function uh(e, t, n, r) {
  r === void 0 && (r = !1);
  let l;
  typeof e == "string"
    ? (l = wn(e))
    : ((l = de({}, e)),
      K(
        !l.pathname || !l.pathname.includes("?"),
        Bo("?", "pathname", "search", l),
      ),
      K(
        !l.pathname || !l.pathname.includes("#"),
        Bo("#", "pathname", "hash", l),
      ),
      K(!l.search || !l.search.includes("#"), Bo("#", "search", "hash", l)));
  let i = e === "" || l.pathname === "",
    o = i ? "/" : l.pathname,
    a;
  if (o == null) a = n;
  else {
    let c = t.length - 1;
    if (!r && o.startsWith("..")) {
      let h = o.split("/");
      for (; h[0] === ".."; ) h.shift(), (c -= 1);
      l.pathname = h.join("/");
    }
    a = c >= 0 ? t[c] : "/";
  }
  let s = Yg(l, a),
    u = o && o !== "/" && o.endsWith("/"),
    d = (i || o === ".") && n.endsWith("/");
  return !s.pathname.endsWith("/") && (u || d) && (s.pathname += "/"), s;
}
const hn = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Gg = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Kg = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  Zg = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class Ii {
  constructor(t, n, r, l) {
    l === void 0 && (l = !1),
      (this.status = t),
      (this.statusText = n || ""),
      (this.internal = l),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r);
  }
}
function oo(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const ch = ["post", "put", "patch", "delete"],
  Jg = new Set(ch),
  bg = ["get", ...ch],
  qg = new Set(bg),
  e0 = new Set([301, 302, 303, 307, 308]),
  t0 = new Set([307, 308]),
  Vo = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  n0 = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  zr = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  Us = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  r0 = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  dh = "remix-router-transitions";
function l0(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0,
    n =
      typeof t < "u" &&
      typeof t.document < "u" &&
      typeof t.document.createElement < "u",
    r = !n;
  K(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter",
  );
  let l;
  if (e.mapRouteProperties) l = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let p = e.detectErrorBoundary;
    l = (y) => ({ hasErrorBoundary: p(y) });
  } else l = r0;
  let i = {},
    o = ml(e.routes, l, void 0, i),
    a,
    s = e.basename || "/",
    u = e.unstable_dataStrategy || c0,
    d = e.unstable_patchRoutesOnNavigation,
    c = de(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_partialHydration: !1,
        v7_prependBasename: !1,
        v7_relativeSplatPath: !1,
        v7_skipActionErrorRevalidation: !1,
      },
      e.future,
    ),
    h = null,
    w = new Set(),
    x = 1e3,
    S = new Set(),
    j = null,
    m = null,
    f = null,
    v = e.hydrationData != null,
    _ = Nn(o, e.history.location, s),
    T = null;
  if (_ == null && !d) {
    let p = Ae(404, { pathname: e.history.location.pathname }),
      { matches: y, route: k } = Cc(o);
    (_ = y), (T = { [k.id]: p });
  }
  _ &&
    !e.hydrationData &&
    Tl(_, o, e.history.location.pathname).active &&
    (_ = null);
  let P;
  if (_)
    if (_.some((p) => p.route.lazy)) P = !1;
    else if (!_.some((p) => p.route.loader)) P = !0;
    else if (c.v7_partialHydration) {
      let p = e.hydrationData ? e.hydrationData.loaderData : null,
        y = e.hydrationData ? e.hydrationData.errors : null,
        k = (M) =>
          M.route.loader
            ? typeof M.route.loader == "function" &&
              M.route.loader.hydrate === !0
              ? !1
              : (p && p[M.route.id] !== void 0) ||
                (y && y[M.route.id] !== void 0)
            : !0;
      if (y) {
        let M = _.findIndex((O) => y[O.route.id] !== void 0);
        P = _.slice(0, M + 1).every(k);
      } else P = _.every(k);
    } else P = e.hydrationData != null;
  else if (((P = !1), (_ = []), c.v7_partialHydration)) {
    let p = Tl(null, o, e.history.location.pathname);
    p.active && p.matches && (_ = p.matches);
  }
  let R,
    g = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: _,
      initialized: P,
      navigation: Vo,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || T,
      fetchers: new Map(),
      blockers: new Map(),
    },
    I = Se.Pop,
    z = !1,
    $,
    Z = !1,
    ye = new Map(),
    J = null,
    Fe = !1,
    $e = !1,
    Qt = [],
    D = new Set(),
    A = new Map(),
    Y = 0,
    le = -1,
    oe = new Map(),
    Qe = new Set(),
    He = new Map(),
    jt = new Map(),
    je = new Set(),
    ot = new Map(),
    Sn = new Map(),
    Fh = new Map(),
    Ml;
  function Ih() {
    if (
      ((h = e.history.listen((p) => {
        let { action: y, location: k, delta: M } = p;
        if (Ml) {
          Ml(), (Ml = void 0);
          return;
        }
        yr(
          Sn.size === 0 || M != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.",
        );
        let O = tu({
          currentLocation: g.location,
          nextLocation: k,
          historyAction: y,
        });
        if (O && M != null) {
          let V = new Promise((Q) => {
            Ml = Q;
          });
          e.history.go(M * -1),
            Cl(O, {
              state: "blocked",
              location: k,
              proceed() {
                Cl(O, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: k,
                }),
                  V.then(() => e.history.go(M));
              },
              reset() {
                let Q = new Map(g.blockers);
                Q.set(O, zr), Ie({ blockers: Q });
              },
            });
          return;
        }
        return kn(y, k);
      })),
      n)
    ) {
      M0(t, ye);
      let p = () => N0(t, ye);
      t.addEventListener("pagehide", p),
        (J = () => t.removeEventListener("pagehide", p));
    }
    return g.initialized || kn(Se.Pop, g.location, { initialHydration: !0 }), R;
  }
  function Ah() {
    h && h(),
      J && J(),
      w.clear(),
      $ && $.abort(),
      g.fetchers.forEach((p, y) => Nl(y)),
      g.blockers.forEach((p, y) => eu(y));
  }
  function Uh(p) {
    return w.add(p), () => w.delete(p);
  }
  function Ie(p, y) {
    y === void 0 && (y = {}), (g = de({}, g, p));
    let k = [],
      M = [];
    c.v7_fetcherPersist &&
      g.fetchers.forEach((O, V) => {
        O.state === "idle" && (je.has(V) ? M.push(V) : k.push(V));
      }),
      [...w].forEach((O) =>
        O(g, {
          deletedFetchers: M,
          unstable_viewTransitionOpts: y.viewTransitionOpts,
          unstable_flushSync: y.flushSync === !0,
        }),
      ),
      c.v7_fetcherPersist &&
        (k.forEach((O) => g.fetchers.delete(O)), M.forEach((O) => Nl(O)));
  }
  function Wn(p, y, k) {
    var M, O;
    let { flushSync: V } = k === void 0 ? {} : k,
      Q =
        g.actionData != null &&
        g.navigation.formMethod != null &&
        gt(g.navigation.formMethod) &&
        g.navigation.state === "loading" &&
        ((M = p.state) == null ? void 0 : M._isRedirect) !== !0,
      L;
    y.actionData
      ? Object.keys(y.actionData).length > 0
        ? (L = y.actionData)
        : (L = null)
      : Q
        ? (L = g.actionData)
        : (L = null);
    let W = y.loaderData
        ? Mc(g.loaderData, y.loaderData, y.matches || [], y.errors)
        : g.loaderData,
      U = g.blockers;
    U.size > 0 && ((U = new Map(U)), U.forEach((te, ae) => U.set(ae, zr)));
    let B =
      z === !0 ||
      (g.navigation.formMethod != null &&
        gt(g.navigation.formMethod) &&
        ((O = p.state) == null ? void 0 : O._isRedirect) !== !0);
    a && ((o = a), (a = void 0)),
      Fe ||
        I === Se.Pop ||
        (I === Se.Push
          ? e.history.push(p, p.state)
          : I === Se.Replace && e.history.replace(p, p.state));
    let ee;
    if (I === Se.Pop) {
      let te = ye.get(g.location.pathname);
      te && te.has(p.pathname)
        ? (ee = { currentLocation: g.location, nextLocation: p })
        : ye.has(p.pathname) &&
          (ee = { currentLocation: p, nextLocation: g.location });
    } else if (Z) {
      let te = ye.get(g.location.pathname);
      te
        ? te.add(p.pathname)
        : ((te = new Set([p.pathname])), ye.set(g.location.pathname, te)),
        (ee = { currentLocation: g.location, nextLocation: p });
    }
    Ie(
      de({}, y, {
        actionData: L,
        loaderData: W,
        historyAction: I,
        location: p,
        initialized: !0,
        navigation: Vo,
        revalidation: "idle",
        restoreScrollPosition: ru(p, y.matches || g.matches),
        preventScrollReset: B,
        blockers: U,
      }),
      { viewTransitionOpts: ee, flushSync: V === !0 },
    ),
      (I = Se.Pop),
      (z = !1),
      (Z = !1),
      (Fe = !1),
      ($e = !1),
      (Qt = []);
  }
  async function Xs(p, y) {
    if (typeof p == "number") {
      e.history.go(p);
      return;
    }
    let k = Fa(
        g.location,
        g.matches,
        s,
        c.v7_prependBasename,
        p,
        c.v7_relativeSplatPath,
        y == null ? void 0 : y.fromRouteId,
        y == null ? void 0 : y.relative,
      ),
      {
        path: M,
        submission: O,
        error: V,
      } = wc(c.v7_normalizeFormMethod, !1, k, y),
      Q = g.location,
      L = pl(g.location, M, y && y.state);
    L = de({}, L, e.history.encodeLocation(L));
    let W = y && y.replace != null ? y.replace : void 0,
      U = Se.Push;
    W === !0
      ? (U = Se.Replace)
      : W === !1 ||
        (O != null &&
          gt(O.formMethod) &&
          O.formAction === g.location.pathname + g.location.search &&
          (U = Se.Replace));
    let B =
        y && "preventScrollReset" in y ? y.preventScrollReset === !0 : void 0,
      ee = (y && y.unstable_flushSync) === !0,
      te = tu({ currentLocation: Q, nextLocation: L, historyAction: U });
    if (te) {
      Cl(te, {
        state: "blocked",
        location: L,
        proceed() {
          Cl(te, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: L,
          }),
            Xs(p, y);
        },
        reset() {
          let ae = new Map(g.blockers);
          ae.set(te, zr), Ie({ blockers: ae });
        },
      });
      return;
    }
    return await kn(U, L, {
      submission: O,
      pendingError: V,
      preventScrollReset: B,
      replace: y && y.replace,
      enableViewTransition: y && y.unstable_viewTransition,
      flushSync: ee,
    });
  }
  function Bh() {
    if (
      (co(),
      Ie({ revalidation: "loading" }),
      g.navigation.state !== "submitting")
    ) {
      if (g.navigation.state === "idle") {
        kn(g.historyAction, g.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      kn(I || g.historyAction, g.navigation.location, {
        overrideNavigation: g.navigation,
        enableViewTransition: Z === !0,
      });
    }
  }
  async function kn(p, y, k) {
    $ && $.abort(),
      ($ = null),
      (I = p),
      (Fe = (k && k.startUninterruptedRevalidation) === !0),
      Zh(g.location, g.matches),
      (z = (k && k.preventScrollReset) === !0),
      (Z = (k && k.enableViewTransition) === !0);
    let M = a || o,
      O = k && k.overrideNavigation,
      V = Nn(M, y, s),
      Q = (k && k.flushSync) === !0,
      L = Tl(V, M, y.pathname);
    if ((L.active && L.matches && (V = L.matches), !V)) {
      let { error: b, notFoundMatches: Me, route: xe } = fo(y.pathname);
      Wn(
        y,
        { matches: Me, loaderData: {}, errors: { [xe.id]: b } },
        { flushSync: Q },
      );
      return;
    }
    if (
      g.initialized &&
      !$e &&
      g0(g.location, y) &&
      !(k && k.submission && gt(k.submission.formMethod))
    ) {
      Wn(y, { matches: V }, { flushSync: Q });
      return;
    }
    $ = new AbortController();
    let W = Hn(e.history, y, $.signal, k && k.submission),
      U;
    if (k && k.pendingError)
      U = [lr(V).route.id, { type: re.error, error: k.pendingError }];
    else if (k && k.submission && gt(k.submission.formMethod)) {
      let b = await Vh(W, y, k.submission, V, L.active, {
        replace: k.replace,
        flushSync: Q,
      });
      if (b.shortCircuited) return;
      if (b.pendingActionResult) {
        let [Me, xe] = b.pendingActionResult;
        if (qe(xe) && oo(xe.error) && xe.error.status === 404) {
          ($ = null),
            Wn(y, {
              matches: b.matches,
              loaderData: {},
              errors: { [Me]: xe.error },
            });
          return;
        }
      }
      (V = b.matches || V),
        (U = b.pendingActionResult),
        (O = Wo(y, k.submission)),
        (Q = !1),
        (L.active = !1),
        (W = Hn(e.history, W.url, W.signal));
    }
    let {
      shortCircuited: B,
      matches: ee,
      loaderData: te,
      errors: ae,
    } = await Wh(
      W,
      y,
      V,
      L.active,
      O,
      k && k.submission,
      k && k.fetcherSubmission,
      k && k.replace,
      k && k.initialHydration === !0,
      Q,
      U,
    );
    B ||
      (($ = null),
      Wn(y, de({ matches: ee || V }, Nc(U), { loaderData: te, errors: ae })));
  }
  async function Vh(p, y, k, M, O, V) {
    V === void 0 && (V = {}), co();
    let Q = E0(y, k);
    if ((Ie({ navigation: Q }, { flushSync: V.flushSync === !0 }), O)) {
      let U = await Rl(M, y.pathname, p.signal);
      if (U.type === "aborted") return { shortCircuited: !0 };
      if (U.type === "error") {
        let { boundaryId: B, error: ee } = jl(y.pathname, U);
        return {
          matches: U.partialMatches,
          pendingActionResult: [B, { type: re.error, error: ee }],
        };
      } else if (U.matches) M = U.matches;
      else {
        let { notFoundMatches: B, error: ee, route: te } = fo(y.pathname);
        return {
          matches: B,
          pendingActionResult: [te.id, { type: re.error, error: ee }],
        };
      }
    }
    let L,
      W = Vr(M, y);
    if (!W.route.action && !W.route.lazy)
      L = {
        type: re.error,
        error: Ae(405, {
          method: p.method,
          pathname: y.pathname,
          routeId: W.route.id,
        }),
      };
    else if (
      ((L = (await _r("action", g, p, [W], M, null))[W.route.id]),
      p.signal.aborted)
    )
      return { shortCircuited: !0 };
    if (Ln(L)) {
      let U;
      return (
        V && V.replace != null
          ? (U = V.replace)
          : (U =
              kc(L.response.headers.get("Location"), new URL(p.url), s) ===
              g.location.pathname + g.location.search),
        await En(p, L, !0, { submission: k, replace: U }),
        { shortCircuited: !0 }
      );
    }
    if (nn(L)) throw Ae(400, { type: "defer-action" });
    if (qe(L)) {
      let U = lr(M, W.route.id);
      return (
        (V && V.replace) !== !0 && (I = Se.Push),
        { matches: M, pendingActionResult: [U.route.id, L] }
      );
    }
    return { matches: M, pendingActionResult: [W.route.id, L] };
  }
  async function Wh(p, y, k, M, O, V, Q, L, W, U, B) {
    let ee = O || Wo(y, V),
      te = V || Q || Tc(ee),
      ae = !Fe && (!c.v7_partialHydration || !W);
    if (M) {
      if (ae) {
        let me = Gs(B);
        Ie(de({ navigation: ee }, me !== void 0 ? { actionData: me } : {}), {
          flushSync: U,
        });
      }
      let X = await Rl(k, y.pathname, p.signal);
      if (X.type === "aborted") return { shortCircuited: !0 };
      if (X.type === "error") {
        let { boundaryId: me, error: Je } = jl(y.pathname, X);
        return {
          matches: X.partialMatches,
          loaderData: {},
          errors: { [me]: Je },
        };
      } else if (X.matches) k = X.matches;
      else {
        let { error: me, notFoundMatches: Je, route: ge } = fo(y.pathname);
        return { matches: Je, loaderData: {}, errors: { [ge.id]: me } };
      }
    }
    let b = a || o,
      [Me, xe] = xc(
        e.history,
        g,
        k,
        te,
        y,
        c.v7_partialHydration && W === !0,
        c.v7_skipActionErrorRevalidation,
        $e,
        Qt,
        D,
        je,
        He,
        Qe,
        b,
        s,
        B,
      );
    if (
      (ho(
        (X) =>
          !(k && k.some((me) => me.route.id === X)) ||
          (Me && Me.some((me) => me.route.id === X)),
      ),
      (le = ++Y),
      Me.length === 0 && xe.length === 0)
    ) {
      let X = bs();
      return (
        Wn(
          y,
          de(
            {
              matches: k,
              loaderData: {},
              errors: B && qe(B[1]) ? { [B[0]]: B[1].error } : null,
            },
            Nc(B),
            X ? { fetchers: new Map(g.fetchers) } : {},
          ),
          { flushSync: U },
        ),
        { shortCircuited: !0 }
      );
    }
    if (ae) {
      let X = {};
      if (!M) {
        X.navigation = ee;
        let me = Gs(B);
        me !== void 0 && (X.actionData = me);
      }
      xe.length > 0 && (X.fetchers = $h(xe)), Ie(X, { flushSync: U });
    }
    xe.forEach((X) => {
      A.has(X.key) && Yt(X.key), X.controller && A.set(X.key, X.controller);
    });
    let Mr = () => xe.forEach((X) => Yt(X.key));
    $ && $.signal.addEventListener("abort", Mr);
    let { loaderResults: Rt, fetcherResults: $n } = await Ks(g, k, Me, xe, p);
    if (p.signal.aborted) return { shortCircuited: !0 };
    $ && $.signal.removeEventListener("abort", Mr),
      xe.forEach((X) => A.delete(X.key));
    let Xt = bl(Rt);
    if (Xt)
      return await En(p, Xt.result, !0, { replace: L }), { shortCircuited: !0 };
    if (((Xt = bl($n)), Xt))
      return (
        Qe.add(Xt.key),
        await En(p, Xt.result, !0, { replace: L }),
        { shortCircuited: !0 }
      );
    let { loaderData: Ll, errors: Lt } = _c(g, k, Me, Rt, B, xe, $n, ot);
    ot.forEach((X, me) => {
      X.subscribe((Je) => {
        (Je || X.done) && ot.delete(me);
      });
    }),
      c.v7_partialHydration &&
        W &&
        g.errors &&
        Object.entries(g.errors)
          .filter((X) => {
            let [me] = X;
            return !Me.some((Je) => Je.route.id === me);
          })
          .forEach((X) => {
            let [me, Je] = X;
            Lt = Object.assign(Lt || {}, { [me]: Je });
          });
    let Pl = bs(),
      Dl = qs(le),
      zl = Pl || Dl || xe.length > 0;
    return de(
      { matches: k, loaderData: Ll, errors: Lt },
      zl ? { fetchers: new Map(g.fetchers) } : {},
    );
  }
  function Gs(p) {
    if (p && !qe(p[1])) return { [p[0]]: p[1].data };
    if (g.actionData)
      return Object.keys(g.actionData).length === 0 ? null : g.actionData;
  }
  function $h(p) {
    return (
      p.forEach((y) => {
        let k = g.fetchers.get(y.key),
          M = Or(void 0, k ? k.data : void 0);
        g.fetchers.set(y.key, M);
      }),
      new Map(g.fetchers)
    );
  }
  function Qh(p, y, k, M) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.",
      );
    A.has(p) && Yt(p);
    let O = (M && M.unstable_flushSync) === !0,
      V = a || o,
      Q = Fa(
        g.location,
        g.matches,
        s,
        c.v7_prependBasename,
        k,
        c.v7_relativeSplatPath,
        y,
        M == null ? void 0 : M.relative,
      ),
      L = Nn(V, Q, s),
      W = Tl(L, V, Q);
    if ((W.active && W.matches && (L = W.matches), !L)) {
      Tt(p, y, Ae(404, { pathname: Q }), { flushSync: O });
      return;
    }
    let {
      path: U,
      submission: B,
      error: ee,
    } = wc(c.v7_normalizeFormMethod, !0, Q, M);
    if (ee) {
      Tt(p, y, ee, { flushSync: O });
      return;
    }
    let te = Vr(L, U);
    if (((z = (M && M.preventScrollReset) === !0), B && gt(B.formMethod))) {
      Hh(p, y, U, te, L, W.active, O, B);
      return;
    }
    He.set(p, { routeId: y, path: U }), Yh(p, y, U, te, L, W.active, O, B);
  }
  async function Hh(p, y, k, M, O, V, Q, L) {
    co(), He.delete(p);
    function W(ge) {
      if (!ge.route.action && !ge.route.lazy) {
        let Pt = Ae(405, { method: L.formMethod, pathname: k, routeId: y });
        return Tt(p, y, Pt, { flushSync: Q }), !0;
      }
      return !1;
    }
    if (!V && W(M)) return;
    let U = g.fetchers.get(p);
    Ht(p, _0(L, U), { flushSync: Q });
    let B = new AbortController(),
      ee = Hn(e.history, k, B.signal, L);
    if (V) {
      let ge = await Rl(O, k, ee.signal);
      if (ge.type === "aborted") return;
      if (ge.type === "error") {
        let { error: Pt } = jl(k, ge);
        Tt(p, y, Pt, { flushSync: Q });
        return;
      } else if (ge.matches) {
        if (((O = ge.matches), (M = Vr(O, k)), W(M))) return;
      } else {
        Tt(p, y, Ae(404, { pathname: k }), { flushSync: Q });
        return;
      }
    }
    A.set(p, B);
    let te = Y,
      b = (await _r("action", g, ee, [M], O, p))[M.route.id];
    if (ee.signal.aborted) {
      A.get(p) === B && A.delete(p);
      return;
    }
    if (c.v7_fetcherPersist && je.has(p)) {
      if (Ln(b) || qe(b)) {
        Ht(p, Kt(void 0));
        return;
      }
    } else {
      if (Ln(b))
        if ((A.delete(p), le > te)) {
          Ht(p, Kt(void 0));
          return;
        } else
          return (
            Qe.add(p), Ht(p, Or(L)), En(ee, b, !1, { fetcherSubmission: L })
          );
      if (qe(b)) {
        Tt(p, y, b.error);
        return;
      }
    }
    if (nn(b)) throw Ae(400, { type: "defer-action" });
    let Me = g.navigation.location || g.location,
      xe = Hn(e.history, Me, B.signal),
      Mr = a || o,
      Rt =
        g.navigation.state !== "idle"
          ? Nn(Mr, g.navigation.location, s)
          : g.matches;
    K(Rt, "Didn't find any matches after fetcher action");
    let $n = ++Y;
    oe.set(p, $n);
    let Xt = Or(L, b.data);
    g.fetchers.set(p, Xt);
    let [Ll, Lt] = xc(
      e.history,
      g,
      Rt,
      L,
      Me,
      !1,
      c.v7_skipActionErrorRevalidation,
      $e,
      Qt,
      D,
      je,
      He,
      Qe,
      Mr,
      s,
      [M.route.id, b],
    );
    Lt.filter((ge) => ge.key !== p).forEach((ge) => {
      let Pt = ge.key,
        iu = g.fetchers.get(Pt),
        qh = Or(void 0, iu ? iu.data : void 0);
      g.fetchers.set(Pt, qh),
        A.has(Pt) && Yt(Pt),
        ge.controller && A.set(Pt, ge.controller);
    }),
      Ie({ fetchers: new Map(g.fetchers) });
    let Pl = () => Lt.forEach((ge) => Yt(ge.key));
    B.signal.addEventListener("abort", Pl);
    let { loaderResults: Dl, fetcherResults: zl } = await Ks(g, Rt, Ll, Lt, xe);
    if (B.signal.aborted) return;
    B.signal.removeEventListener("abort", Pl),
      oe.delete(p),
      A.delete(p),
      Lt.forEach((ge) => A.delete(ge.key));
    let X = bl(Dl);
    if (X) return En(xe, X.result, !1);
    if (((X = bl(zl)), X)) return Qe.add(X.key), En(xe, X.result, !1);
    let { loaderData: me, errors: Je } = _c(g, Rt, Ll, Dl, void 0, Lt, zl, ot);
    if (g.fetchers.has(p)) {
      let ge = Kt(b.data);
      g.fetchers.set(p, ge);
    }
    qs($n),
      g.navigation.state === "loading" && $n > le
        ? (K(I, "Expected pending action"),
          $ && $.abort(),
          Wn(g.navigation.location, {
            matches: Rt,
            loaderData: me,
            errors: Je,
            fetchers: new Map(g.fetchers),
          }))
        : (Ie({
            errors: Je,
            loaderData: Mc(g.loaderData, me, Rt, Je),
            fetchers: new Map(g.fetchers),
          }),
          ($e = !1));
  }
  async function Yh(p, y, k, M, O, V, Q, L) {
    let W = g.fetchers.get(p);
    Ht(p, Or(L, W ? W.data : void 0), { flushSync: Q });
    let U = new AbortController(),
      B = Hn(e.history, k, U.signal);
    if (V) {
      let b = await Rl(O, k, B.signal);
      if (b.type === "aborted") return;
      if (b.type === "error") {
        let { error: Me } = jl(k, b);
        Tt(p, y, Me, { flushSync: Q });
        return;
      } else if (b.matches) (O = b.matches), (M = Vr(O, k));
      else {
        Tt(p, y, Ae(404, { pathname: k }), { flushSync: Q });
        return;
      }
    }
    A.set(p, U);
    let ee = Y,
      ae = (await _r("loader", g, B, [M], O, p))[M.route.id];
    if (
      (nn(ae) && (ae = (await Bs(ae, B.signal, !0)) || ae),
      A.get(p) === U && A.delete(p),
      !B.signal.aborted)
    ) {
      if (je.has(p)) {
        Ht(p, Kt(void 0));
        return;
      }
      if (Ln(ae))
        if (le > ee) {
          Ht(p, Kt(void 0));
          return;
        } else {
          Qe.add(p), await En(B, ae, !1);
          return;
        }
      if (qe(ae)) {
        Tt(p, y, ae.error);
        return;
      }
      K(!nn(ae), "Unhandled fetcher deferred data"), Ht(p, Kt(ae.data));
    }
  }
  async function En(p, y, k, M) {
    let {
      submission: O,
      fetcherSubmission: V,
      replace: Q,
    } = M === void 0 ? {} : M;
    y.response.headers.has("X-Remix-Revalidate") && ($e = !0);
    let L = y.response.headers.get("Location");
    K(L, "Expected a Location header on the redirect Response"),
      (L = kc(L, new URL(p.url), s));
    let W = pl(g.location, L, { _isRedirect: !0 });
    if (n) {
      let b = !1;
      if (y.response.headers.has("X-Remix-Reload-Document")) b = !0;
      else if (Us.test(L)) {
        const Me = e.history.createURL(L);
        b = Me.origin !== t.location.origin || kl(Me.pathname, s) == null;
      }
      if (b) {
        Q ? t.location.replace(L) : t.location.assign(L);
        return;
      }
    }
    $ = null;
    let U =
        Q === !0 || y.response.headers.has("X-Remix-Replace")
          ? Se.Replace
          : Se.Push,
      { formMethod: B, formAction: ee, formEncType: te } = g.navigation;
    !O && !V && B && ee && te && (O = Tc(g.navigation));
    let ae = O || V;
    if (t0.has(y.response.status) && ae && gt(ae.formMethod))
      await kn(U, W, {
        submission: de({}, ae, { formAction: L }),
        preventScrollReset: z,
        enableViewTransition: k ? Z : void 0,
      });
    else {
      let b = Wo(W, O);
      await kn(U, W, {
        overrideNavigation: b,
        fetcherSubmission: V,
        preventScrollReset: z,
        enableViewTransition: k ? Z : void 0,
      });
    }
  }
  async function _r(p, y, k, M, O, V) {
    let Q,
      L = {};
    try {
      Q = await d0(u, p, y, k, M, O, V, i, l);
    } catch (W) {
      return (
        M.forEach((U) => {
          L[U.route.id] = { type: re.error, error: W };
        }),
        L
      );
    }
    for (let [W, U] of Object.entries(Q))
      if (y0(U)) {
        let B = U.result;
        L[W] = {
          type: re.redirect,
          response: p0(B, k, W, O, s, c.v7_relativeSplatPath),
        };
      } else L[W] = await h0(U);
    return L;
  }
  async function Ks(p, y, k, M, O) {
    let V = p.matches,
      Q = _r("loader", p, O, k, y, null),
      L = Promise.all(
        M.map(async (B) => {
          if (B.matches && B.match && B.controller) {
            let te = (
              await _r(
                "loader",
                p,
                Hn(e.history, B.path, B.controller.signal),
                [B.match],
                B.matches,
                B.key,
              )
            )[B.match.route.id];
            return { [B.key]: te };
          } else
            return Promise.resolve({
              [B.key]: { type: re.error, error: Ae(404, { pathname: B.path }) },
            });
        }),
      ),
      W = await Q,
      U = (await L).reduce((B, ee) => Object.assign(B, ee), {});
    return (
      await Promise.all([S0(y, W, O.signal, V, p.loaderData), k0(y, U, M)]),
      { loaderResults: W, fetcherResults: U }
    );
  }
  function co() {
    ($e = !0),
      Qt.push(...ho()),
      He.forEach((p, y) => {
        A.has(y) && (D.add(y), Yt(y));
      });
  }
  function Ht(p, y, k) {
    k === void 0 && (k = {}),
      g.fetchers.set(p, y),
      Ie(
        { fetchers: new Map(g.fetchers) },
        { flushSync: (k && k.flushSync) === !0 },
      );
  }
  function Tt(p, y, k, M) {
    M === void 0 && (M = {});
    let O = lr(g.matches, y);
    Nl(p),
      Ie(
        { errors: { [O.route.id]: k }, fetchers: new Map(g.fetchers) },
        { flushSync: (M && M.flushSync) === !0 },
      );
  }
  function Zs(p) {
    return (
      c.v7_fetcherPersist &&
        (jt.set(p, (jt.get(p) || 0) + 1), je.has(p) && je.delete(p)),
      g.fetchers.get(p) || n0
    );
  }
  function Nl(p) {
    let y = g.fetchers.get(p);
    A.has(p) && !(y && y.state === "loading" && oe.has(p)) && Yt(p),
      He.delete(p),
      oe.delete(p),
      Qe.delete(p),
      je.delete(p),
      D.delete(p),
      g.fetchers.delete(p);
  }
  function Xh(p) {
    if (c.v7_fetcherPersist) {
      let y = (jt.get(p) || 0) - 1;
      y <= 0 ? (jt.delete(p), je.add(p)) : jt.set(p, y);
    } else Nl(p);
    Ie({ fetchers: new Map(g.fetchers) });
  }
  function Yt(p) {
    let y = A.get(p);
    K(y, "Expected fetch controller: " + p), y.abort(), A.delete(p);
  }
  function Js(p) {
    for (let y of p) {
      let k = Zs(y),
        M = Kt(k.data);
      g.fetchers.set(y, M);
    }
  }
  function bs() {
    let p = [],
      y = !1;
    for (let k of Qe) {
      let M = g.fetchers.get(k);
      K(M, "Expected fetcher: " + k),
        M.state === "loading" && (Qe.delete(k), p.push(k), (y = !0));
    }
    return Js(p), y;
  }
  function qs(p) {
    let y = [];
    for (let [k, M] of oe)
      if (M < p) {
        let O = g.fetchers.get(k);
        K(O, "Expected fetcher: " + k),
          O.state === "loading" && (Yt(k), oe.delete(k), y.push(k));
      }
    return Js(y), y.length > 0;
  }
  function Gh(p, y) {
    let k = g.blockers.get(p) || zr;
    return Sn.get(p) !== y && Sn.set(p, y), k;
  }
  function eu(p) {
    g.blockers.delete(p), Sn.delete(p);
  }
  function Cl(p, y) {
    let k = g.blockers.get(p) || zr;
    K(
      (k.state === "unblocked" && y.state === "blocked") ||
        (k.state === "blocked" && y.state === "blocked") ||
        (k.state === "blocked" && y.state === "proceeding") ||
        (k.state === "blocked" && y.state === "unblocked") ||
        (k.state === "proceeding" && y.state === "unblocked"),
      "Invalid blocker state transition: " + k.state + " -> " + y.state,
    );
    let M = new Map(g.blockers);
    M.set(p, y), Ie({ blockers: M });
  }
  function tu(p) {
    let { currentLocation: y, nextLocation: k, historyAction: M } = p;
    if (Sn.size === 0) return;
    Sn.size > 1 && yr(!1, "A router only supports one blocker at a time");
    let O = Array.from(Sn.entries()),
      [V, Q] = O[O.length - 1],
      L = g.blockers.get(V);
    if (
      !(L && L.state === "proceeding") &&
      Q({ currentLocation: y, nextLocation: k, historyAction: M })
    )
      return V;
  }
  function fo(p) {
    let y = Ae(404, { pathname: p }),
      k = a || o,
      { matches: M, route: O } = Cc(k);
    return ho(), { notFoundMatches: M, route: O, error: y };
  }
  function jl(p, y) {
    return {
      boundaryId: lr(y.partialMatches).route.id,
      error: Ae(400, {
        type: "route-discovery",
        pathname: p,
        message:
          y.error != null && "message" in y.error ? y.error : String(y.error),
      }),
    };
  }
  function ho(p) {
    let y = [];
    return (
      ot.forEach((k, M) => {
        (!p || p(M)) && (k.cancel(), y.push(M), ot.delete(M));
      }),
      y
    );
  }
  function Kh(p, y, k) {
    if (((j = p), (f = y), (m = k || null), !v && g.navigation === Vo)) {
      v = !0;
      let M = ru(g.location, g.matches);
      M != null && Ie({ restoreScrollPosition: M });
    }
    return () => {
      (j = null), (f = null), (m = null);
    };
  }
  function nu(p, y) {
    return (
      (m &&
        m(
          p,
          y.map((M) => Dg(M, g.loaderData)),
        )) ||
      p.key
    );
  }
  function Zh(p, y) {
    if (j && f) {
      let k = nu(p, y);
      j[k] = f();
    }
  }
  function ru(p, y) {
    if (j) {
      let k = nu(p, y),
        M = j[k];
      if (typeof M == "number") return M;
    }
    return null;
  }
  function Tl(p, y, k) {
    if (d) {
      if (S.has(k)) return { active: !1, matches: p };
      if (p) {
        if (Object.keys(p[0].params).length > 0)
          return { active: !0, matches: fi(y, k, s, !0) };
      } else return { active: !0, matches: fi(y, k, s, !0) || [] };
    }
    return { active: !1, matches: null };
  }
  async function Rl(p, y, k) {
    let M = p;
    for (;;) {
      let O = a == null,
        V = a || o;
      try {
        await s0(d, y, M, V, i, l, Fh, k);
      } catch (W) {
        return { type: "error", error: W, partialMatches: M };
      } finally {
        O && (o = [...o]);
      }
      if (k.aborted) return { type: "aborted" };
      let Q = Nn(V, y, s);
      if (Q) return lu(y, S), { type: "success", matches: Q };
      let L = fi(V, y, s, !0);
      if (
        !L ||
        (M.length === L.length &&
          M.every((W, U) => W.route.id === L[U].route.id))
      )
        return lu(y, S), { type: "success", matches: null };
      M = L;
    }
  }
  function lu(p, y) {
    if (y.size >= x) {
      let k = y.values().next().value;
      y.delete(k);
    }
    y.add(p);
  }
  function Jh(p) {
    (i = {}), (a = ml(p, l, void 0, i));
  }
  function bh(p, y) {
    let k = a == null;
    hh(p, y, a || o, i, l), k && ((o = [...o]), Ie({}));
  }
  return (
    (R = {
      get basename() {
        return s;
      },
      get future() {
        return c;
      },
      get state() {
        return g;
      },
      get routes() {
        return o;
      },
      get window() {
        return t;
      },
      initialize: Ih,
      subscribe: Uh,
      enableScrollRestoration: Kh,
      navigate: Xs,
      fetch: Qh,
      revalidate: Bh,
      createHref: (p) => e.history.createHref(p),
      encodeLocation: (p) => e.history.encodeLocation(p),
      getFetcher: Zs,
      deleteFetcher: Xh,
      dispose: Ah,
      getBlocker: Gh,
      deleteBlocker: eu,
      patchRoutes: bh,
      _internalFetchControllers: A,
      _internalActiveDeferreds: ot,
      _internalSetRoutes: Jh,
    }),
    R
  );
}
function i0(e) {
  return (
    e != null &&
    (("formData" in e && e.formData != null) ||
      ("body" in e && e.body !== void 0))
  );
}
function Fa(e, t, n, r, l, i, o, a) {
  let s, u;
  if (o) {
    s = [];
    for (let c of t)
      if ((s.push(c), c.route.id === o)) {
        u = c;
        break;
      }
  } else (s = t), (u = t[t.length - 1]);
  let d = uh(l || ".", sh(s, i), kl(e.pathname, n) || e.pathname, a === "path");
  return (
    l == null && ((d.search = e.search), (d.hash = e.hash)),
    (l == null || l === "" || l === ".") &&
      u &&
      u.route.index &&
      !Vs(d.search) &&
      (d.search = d.search ? d.search.replace(/^\?/, "?index&") : "?index"),
    r &&
      n !== "/" &&
      (d.pathname = d.pathname === "/" ? n : hn([n, d.pathname])),
    Sl(d)
  );
}
function wc(e, t, n, r) {
  if (!r || !i0(r)) return { path: n };
  if (r.formMethod && !x0(r.formMethod))
    return { path: n, error: Ae(405, { method: r.formMethod }) };
  let l = () => ({ path: n, error: Ae(400, { type: "invalid-body" }) }),
    i = r.formMethod || "get",
    o = e ? i.toUpperCase() : i.toLowerCase(),
    a = ph(n);
  if (r.body !== void 0) {
    if (r.formEncType === "text/plain") {
      if (!gt(o)) return l();
      let h =
        typeof r.body == "string"
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
            ? Array.from(r.body.entries()).reduce((w, x) => {
                let [S, j] = x;
                return (
                  "" +
                  w +
                  S +
                  "=" +
                  j +
                  `
`
                );
              }, "")
            : String(r.body);
      return {
        path: n,
        submission: {
          formMethod: o,
          formAction: a,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: h,
        },
      };
    } else if (r.formEncType === "application/json") {
      if (!gt(o)) return l();
      try {
        let h = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
        return {
          path: n,
          submission: {
            formMethod: o,
            formAction: a,
            formEncType: r.formEncType,
            formData: void 0,
            json: h,
            text: void 0,
          },
        };
      } catch {
        return l();
      }
    }
  }
  K(
    typeof FormData == "function",
    "FormData is not available in this environment",
  );
  let s, u;
  if (r.formData) (s = Ia(r.formData)), (u = r.formData);
  else if (r.body instanceof FormData) (s = Ia(r.body)), (u = r.body);
  else if (r.body instanceof URLSearchParams) (s = r.body), (u = Ec(s));
  else if (r.body == null) (s = new URLSearchParams()), (u = new FormData());
  else
    try {
      (s = new URLSearchParams(r.body)), (u = Ec(s));
    } catch {
      return l();
    }
  let d = {
    formMethod: o,
    formAction: a,
    formEncType: (r && r.formEncType) || "application/x-www-form-urlencoded",
    formData: u,
    json: void 0,
    text: void 0,
  };
  if (gt(d.formMethod)) return { path: n, submission: d };
  let c = wn(n);
  return (
    t && c.search && Vs(c.search) && s.append("index", ""),
    (c.search = "?" + s),
    { path: Sl(c), submission: d }
  );
}
function o0(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((l) => l.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function xc(e, t, n, r, l, i, o, a, s, u, d, c, h, w, x, S) {
  let j = S ? (qe(S[1]) ? S[1].error : S[1].data) : void 0,
    m = e.createURL(t.location),
    f = e.createURL(l),
    v = S && qe(S[1]) ? S[0] : void 0,
    _ = v ? o0(n, v) : n,
    T = S ? S[1].statusCode : void 0,
    P = o && T && T >= 400,
    R = _.filter((I, z) => {
      let { route: $ } = I;
      if ($.lazy) return !0;
      if ($.loader == null) return !1;
      if (i)
        return typeof $.loader != "function" || $.loader.hydrate
          ? !0
          : t.loaderData[$.id] === void 0 &&
              (!t.errors || t.errors[$.id] === void 0);
      if (a0(t.loaderData, t.matches[z], I) || s.some((J) => J === I.route.id))
        return !0;
      let Z = t.matches[z],
        ye = I;
      return Sc(
        I,
        de(
          {
            currentUrl: m,
            currentParams: Z.params,
            nextUrl: f,
            nextParams: ye.params,
          },
          r,
          {
            actionResult: j,
            actionStatus: T,
            defaultShouldRevalidate: P
              ? !1
              : a ||
                m.pathname + m.search === f.pathname + f.search ||
                m.search !== f.search ||
                fh(Z, ye),
          },
        ),
      );
    }),
    g = [];
  return (
    c.forEach((I, z) => {
      if (i || !n.some((Fe) => Fe.route.id === I.routeId) || d.has(z)) return;
      let $ = Nn(w, I.path, x);
      if (!$) {
        g.push({
          key: z,
          routeId: I.routeId,
          path: I.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let Z = t.fetchers.get(z),
        ye = Vr($, I.path),
        J = !1;
      h.has(z)
        ? (J = !1)
        : u.has(z)
          ? (u.delete(z), (J = !0))
          : Z && Z.state !== "idle" && Z.data === void 0
            ? (J = a)
            : (J = Sc(
                ye,
                de(
                  {
                    currentUrl: m,
                    currentParams: t.matches[t.matches.length - 1].params,
                    nextUrl: f,
                    nextParams: n[n.length - 1].params,
                  },
                  r,
                  {
                    actionResult: j,
                    actionStatus: T,
                    defaultShouldRevalidate: P ? !1 : a,
                  },
                ),
              )),
        J &&
          g.push({
            key: z,
            routeId: I.routeId,
            path: I.path,
            matches: $,
            match: ye,
            controller: new AbortController(),
          });
    }),
    [R, g]
  );
}
function a0(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    l = e[n.route.id] === void 0;
  return r || l;
}
function fh(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n != null && n.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function Sc(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == "boolean") return n;
  }
  return t.defaultShouldRevalidate;
}
async function s0(e, t, n, r, l, i, o, a) {
  let s = [t, ...n.map((u) => u.route.id)].join("-");
  try {
    let u = o.get(s);
    u ||
      ((u = e({
        path: t,
        matches: n,
        patch: (d, c) => {
          a.aborted || hh(d, c, r, l, i);
        },
      })),
      o.set(s, u)),
      u && v0(u) && (await u);
  } finally {
    o.delete(s);
  }
}
function hh(e, t, n, r, l) {
  if (e) {
    var i;
    let o = r[e];
    K(o, "No route found to patch children into: routeId = " + e);
    let a = ml(
      t,
      l,
      [
        e,
        "patch",
        String(((i = o.children) == null ? void 0 : i.length) || "0"),
      ],
      r,
    );
    o.children ? o.children.push(...a) : (o.children = a);
  } else {
    let o = ml(t, l, ["patch", String(n.length || "0")], r);
    n.push(...o);
  }
}
async function u0(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let l = n[e.id];
  K(l, "No route found in manifest");
  let i = {};
  for (let o in r) {
    let s = l[o] !== void 0 && o !== "hasErrorBoundary";
    yr(
      !s,
      'Route "' +
        l.id +
        '" has a static property "' +
        o +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + o + '" will be ignored.'),
    ),
      !s && !Lg.has(o) && (i[o] = r[o]);
  }
  Object.assign(l, i), Object.assign(l, de({}, t(l), { lazy: void 0 }));
}
async function c0(e) {
  let { matches: t } = e,
    n = t.filter((l) => l.shouldLoad);
  return (await Promise.all(n.map((l) => l.resolve()))).reduce(
    (l, i, o) => Object.assign(l, { [n[o].route.id]: i }),
    {},
  );
}
async function d0(e, t, n, r, l, i, o, a, s, u) {
  let d = i.map((w) => (w.route.lazy ? u0(w.route, s, a) : void 0)),
    c = i.map((w, x) => {
      let S = d[x],
        j = l.some((f) => f.route.id === w.route.id);
      return de({}, w, {
        shouldLoad: j,
        resolve: async (f) => (
          f &&
            r.method === "GET" &&
            (w.route.lazy || w.route.loader) &&
            (j = !0),
          j
            ? f0(t, r, w, S, f, u)
            : Promise.resolve({ type: re.data, result: void 0 })
        ),
      });
    }),
    h = await e({
      matches: c,
      request: r,
      params: i[0].params,
      fetcherKey: o,
      context: u,
    });
  try {
    await Promise.all(d);
  } catch {}
  return h;
}
async function f0(e, t, n, r, l, i) {
  let o,
    a,
    s = (u) => {
      let d,
        c = new Promise((x, S) => (d = S));
      (a = () => d()), t.signal.addEventListener("abort", a);
      let h = (x) =>
          typeof u != "function"
            ? Promise.reject(
                new Error(
                  "You cannot call the handler for a route which defines a boolean " +
                    ('"' + e + '" [routeId: ' + n.route.id + "]"),
                ),
              )
            : u(
                { request: t, params: n.params, context: i },
                ...(x !== void 0 ? [x] : []),
              ),
        w = (async () => {
          try {
            return { type: "data", result: await (l ? l((S) => h(S)) : h()) };
          } catch (x) {
            return { type: "error", result: x };
          }
        })();
      return Promise.race([w, c]);
    };
  try {
    let u = n.route[e];
    if (r)
      if (u) {
        let d,
          [c] = await Promise.all([
            s(u).catch((h) => {
              d = h;
            }),
            r,
          ]);
        if (d !== void 0) throw d;
        o = c;
      } else if ((await r, (u = n.route[e]), u)) o = await s(u);
      else if (e === "action") {
        let d = new URL(t.url),
          c = d.pathname + d.search;
        throw Ae(405, { method: t.method, pathname: c, routeId: n.route.id });
      } else return { type: re.data, result: void 0 };
    else if (u) o = await s(u);
    else {
      let d = new URL(t.url),
        c = d.pathname + d.search;
      throw Ae(404, { pathname: c });
    }
    K(
      o.result !== void 0,
      "You defined " +
        (e === "action" ? "an action" : "a loader") +
        " for route " +
        ('"' +
          n.route.id +
          "\" but didn't return anything from your `" +
          e +
          "` ") +
        "function. Please return a value or `null`.",
    );
  } catch (u) {
    return { type: re.error, result: u };
  } finally {
    a && t.signal.removeEventListener("abort", a);
  }
  return o;
}
async function h0(e) {
  let { result: t, type: n } = e;
  if (mh(t)) {
    let u;
    try {
      let d = t.headers.get("Content-Type");
      d && /\bapplication\/json\b/.test(d)
        ? t.body == null
          ? (u = null)
          : (u = await t.json())
        : (u = await t.text());
    } catch (d) {
      return { type: re.error, error: d };
    }
    return n === re.error
      ? {
          type: re.error,
          error: new Ii(t.status, t.statusText, u),
          statusCode: t.status,
          headers: t.headers,
        }
      : { type: re.data, data: u, statusCode: t.status, headers: t.headers };
  }
  if (n === re.error) {
    if (jc(t)) {
      var r;
      if (t.data instanceof Error) {
        var l;
        return {
          type: re.error,
          error: t.data,
          statusCode: (l = t.init) == null ? void 0 : l.status,
        };
      }
      t = new Ii(
        ((r = t.init) == null ? void 0 : r.status) || 500,
        void 0,
        t.data,
      );
    }
    return { type: re.error, error: t, statusCode: oo(t) ? t.status : void 0 };
  }
  if (w0(t)) {
    var i, o;
    return {
      type: re.deferred,
      deferredData: t,
      statusCode: (i = t.init) == null ? void 0 : i.status,
      headers:
        ((o = t.init) == null ? void 0 : o.headers) &&
        new Headers(t.init.headers),
    };
  }
  if (jc(t)) {
    var a, s;
    return {
      type: re.data,
      data: t.data,
      statusCode: (a = t.init) == null ? void 0 : a.status,
      headers:
        (s = t.init) != null && s.headers
          ? new Headers(t.init.headers)
          : void 0,
    };
  }
  return { type: re.data, data: t };
}
function p0(e, t, n, r, l, i) {
  let o = e.headers.get("Location");
  if (
    (K(
      o,
      "Redirects returned/thrown from loaders/actions must have a Location header",
    ),
    !Us.test(o))
  ) {
    let a = r.slice(0, r.findIndex((s) => s.route.id === n) + 1);
    (o = Fa(new URL(t.url), a, l, !0, o, i)), e.headers.set("Location", o);
  }
  return e;
}
function kc(e, t, n) {
  if (Us.test(e)) {
    let r = e,
      l = r.startsWith("//") ? new URL(t.protocol + r) : new URL(r),
      i = kl(l.pathname, n) != null;
    if (l.origin === t.origin && i) return l.pathname + l.search + l.hash;
  }
  return e;
}
function Hn(e, t, n, r) {
  let l = e.createURL(ph(t)).toString(),
    i = { signal: n };
  if (r && gt(r.formMethod)) {
    let { formMethod: o, formEncType: a } = r;
    (i.method = o.toUpperCase()),
      a === "application/json"
        ? ((i.headers = new Headers({ "Content-Type": a })),
          (i.body = JSON.stringify(r.json)))
        : a === "text/plain"
          ? (i.body = r.text)
          : a === "application/x-www-form-urlencoded" && r.formData
            ? (i.body = Ia(r.formData))
            : (i.body = r.formData);
  }
  return new Request(l, i);
}
function Ia(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    t.append(n, typeof r == "string" ? r : r.name);
  return t;
}
function Ec(e) {
  let t = new FormData();
  for (let [n, r] of e.entries()) t.append(n, r);
  return t;
}
function m0(e, t, n, r, l) {
  let i = {},
    o = null,
    a,
    s = !1,
    u = {},
    d = n && qe(n[1]) ? n[1].error : void 0;
  return (
    e.forEach((c) => {
      if (!(c.route.id in t)) return;
      let h = c.route.id,
        w = t[h];
      if (
        (K(!Ln(w), "Cannot handle redirect results in processLoaderData"),
        qe(w))
      ) {
        let x = w.error;
        d !== void 0 && ((x = d), (d = void 0)), (o = o || {});
        {
          let S = lr(e, h);
          o[S.route.id] == null && (o[S.route.id] = x);
        }
        (i[h] = void 0),
          s || ((s = !0), (a = oo(w.error) ? w.error.status : 500)),
          w.headers && (u[h] = w.headers);
      } else
        nn(w)
          ? (r.set(h, w.deferredData),
            (i[h] = w.deferredData.data),
            w.statusCode != null &&
              w.statusCode !== 200 &&
              !s &&
              (a = w.statusCode),
            w.headers && (u[h] = w.headers))
          : ((i[h] = w.data),
            w.statusCode && w.statusCode !== 200 && !s && (a = w.statusCode),
            w.headers && (u[h] = w.headers));
    }),
    d !== void 0 && n && ((o = { [n[0]]: d }), (i[n[0]] = void 0)),
    { loaderData: i, errors: o, statusCode: a || 200, loaderHeaders: u }
  );
}
function _c(e, t, n, r, l, i, o, a) {
  let { loaderData: s, errors: u } = m0(t, r, l, a);
  return (
    i.forEach((d) => {
      let { key: c, match: h, controller: w } = d,
        x = o[c];
      if (
        (K(x, "Did not find corresponding fetcher result"),
        !(w && w.signal.aborted))
      )
        if (qe(x)) {
          let S = lr(e.matches, h == null ? void 0 : h.route.id);
          (u && u[S.route.id]) || (u = de({}, u, { [S.route.id]: x.error })),
            e.fetchers.delete(c);
        } else if (Ln(x)) K(!1, "Unhandled fetcher revalidation redirect");
        else if (nn(x)) K(!1, "Unhandled fetcher deferred data");
        else {
          let S = Kt(x.data);
          e.fetchers.set(c, S);
        }
    }),
    { loaderData: s, errors: u }
  );
}
function Mc(e, t, n, r) {
  let l = de({}, t);
  for (let i of n) {
    let o = i.route.id;
    if (
      (t.hasOwnProperty(o)
        ? t[o] !== void 0 && (l[o] = t[o])
        : e[o] !== void 0 && i.route.loader && (l[o] = e[o]),
      r && r.hasOwnProperty(o))
    )
      break;
  }
  return l;
}
function Nc(e) {
  return e
    ? qe(e[1])
      ? { actionData: {} }
      : { actionData: { [e[0]]: e[1].data } }
    : {};
}
function lr(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function Cc(e) {
  let t =
    e.length === 1
      ? e[0]
      : e.find((n) => n.index || !n.path || n.path === "/") || {
          id: "__shim-error-route__",
        };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
    route: t,
  };
}
function Ae(e, t) {
  let {
      pathname: n,
      routeId: r,
      method: l,
      type: i,
      message: o,
    } = t === void 0 ? {} : t,
    a = "Unknown Server Error",
    s = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((a = "Bad Request"),
        i === "route-discovery"
          ? (s =
              'Unable to match URL "' +
              n +
              '" - the `unstable_patchRoutesOnNavigation()` ' +
              (`function threw the following error:
` +
                o))
          : l && n && r
            ? (s =
                "You made a " +
                l +
                ' request to "' +
                n +
                '" but ' +
                ('did not provide a `loader` for route "' + r + '", ') +
                "so there is no way to handle the request.")
            : i === "defer-action"
              ? (s = "defer() is not supported in actions")
              : i === "invalid-body" &&
                (s = "Unable to encode submission body"))
      : e === 403
        ? ((a = "Forbidden"),
          (s = 'Route "' + r + '" does not match URL "' + n + '"'))
        : e === 404
          ? ((a = "Not Found"), (s = 'No route matches URL "' + n + '"'))
          : e === 405 &&
            ((a = "Method Not Allowed"),
            l && n && r
              ? (s =
                  "You made a " +
                  l.toUpperCase() +
                  ' request to "' +
                  n +
                  '" but ' +
                  ('did not provide an `action` for route "' + r + '", ') +
                  "so there is no way to handle the request.")
              : l && (s = 'Invalid request method "' + l.toUpperCase() + '"')),
    new Ii(e || 500, a, new Error(s), !0)
  );
}
function bl(e) {
  let t = Object.entries(e);
  for (let n = t.length - 1; n >= 0; n--) {
    let [r, l] = t[n];
    if (Ln(l)) return { key: r, result: l };
  }
}
function ph(e) {
  let t = typeof e == "string" ? wn(e) : e;
  return Sl(de({}, t, { hash: "" }));
}
function g0(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ""
      ? t.hash !== ""
      : e.hash === t.hash
        ? !0
        : t.hash !== "";
}
function v0(e) {
  return typeof e == "object" && e != null && "then" in e;
}
function y0(e) {
  return mh(e.result) && e0.has(e.result.status);
}
function nn(e) {
  return e.type === re.deferred;
}
function qe(e) {
  return e.type === re.error;
}
function Ln(e) {
  return (e && e.type) === re.redirect;
}
function jc(e) {
  return (
    typeof e == "object" &&
    e != null &&
    "type" in e &&
    "data" in e &&
    "init" in e &&
    e.type === "DataWithResponseInit"
  );
}
function w0(e) {
  let t = e;
  return (
    t &&
    typeof t == "object" &&
    typeof t.data == "object" &&
    typeof t.subscribe == "function" &&
    typeof t.cancel == "function" &&
    typeof t.resolveData == "function"
  );
}
function mh(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
function x0(e) {
  return qg.has(e.toLowerCase());
}
function gt(e) {
  return Jg.has(e.toLowerCase());
}
async function S0(e, t, n, r, l) {
  let i = Object.entries(t);
  for (let o = 0; o < i.length; o++) {
    let [a, s] = i[o],
      u = e.find((h) => (h == null ? void 0 : h.route.id) === a);
    if (!u) continue;
    let d = r.find((h) => h.route.id === u.route.id),
      c = d != null && !fh(d, u) && (l && l[u.route.id]) !== void 0;
    nn(s) &&
      c &&
      (await Bs(s, n, !1).then((h) => {
        h && (t[a] = h);
      }));
  }
}
async function k0(e, t, n) {
  for (let r = 0; r < n.length; r++) {
    let { key: l, routeId: i, controller: o } = n[r],
      a = t[l];
    e.find((u) => (u == null ? void 0 : u.route.id) === i) &&
      nn(a) &&
      (K(
        o,
        "Expected an AbortController for revalidating fetcher deferred result",
      ),
      await Bs(a, o.signal, !0).then((u) => {
        u && (t[l] = u);
      }));
  }
}
async function Bs(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: re.data, data: e.deferredData.unwrappedData };
      } catch (l) {
        return { type: re.error, error: l };
      }
    return { type: re.data, data: e.deferredData.data };
  }
}
function Vs(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function Vr(e, t) {
  let n = typeof t == "string" ? wn(t).search : t.search;
  if (e[e.length - 1].route.index && Vs(n || "")) return e[e.length - 1];
  let r = ah(e);
  return r[r.length - 1];
}
function Tc(e) {
  let {
    formMethod: t,
    formAction: n,
    formEncType: r,
    text: l,
    formData: i,
    json: o,
  } = e;
  if (!(!t || !n || !r)) {
    if (l != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: l,
      };
    if (i != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: i,
        json: void 0,
        text: void 0,
      };
    if (o !== void 0)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: o,
        text: void 0,
      };
  }
}
function Wo(e, t) {
  return t
    ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function E0(e, t) {
  return {
    state: "submitting",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function Or(e, t) {
  return e
    ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function _0(e, t) {
  return {
    state: "submitting",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  };
}
function Kt(e) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
function M0(e, t) {
  try {
    let n = e.sessionStorage.getItem(dh);
    if (n) {
      let r = JSON.parse(n);
      for (let [l, i] of Object.entries(r || {}))
        i && Array.isArray(i) && t.set(l, new Set(i || []));
    }
  } catch {}
}
function N0(e, t) {
  if (t.size > 0) {
    let n = {};
    for (let [r, l] of t) n[r] = [...l];
    try {
      e.sessionStorage.setItem(dh, JSON.stringify(n));
    } catch (r) {
      yr(
        !1,
        "Failed to save applied view transitions in sessionStorage (" +
          r +
          ").",
      );
    }
  }
}
/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ai() {
  return (
    (Ai = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ai.apply(this, arguments)
  );
}
const ao = C.createContext(null),
  gh = C.createContext(null),
  so = C.createContext(null),
  Ws = C.createContext(null),
  Vn = C.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  vh = C.createContext(null);
function uo() {
  return C.useContext(Ws) != null;
}
function yh() {
  return uo() || K(!1), C.useContext(Ws).location;
}
function wh(e) {
  C.useContext(so).static || C.useLayoutEffect(e);
}
function kr() {
  let { isDataRoute: e } = C.useContext(Vn);
  return e ? A0() : C0();
}
function C0() {
  uo() || K(!1);
  let e = C.useContext(ao),
    { basename: t, future: n, navigator: r } = C.useContext(so),
    { matches: l } = C.useContext(Vn),
    { pathname: i } = yh(),
    o = JSON.stringify(sh(l, n.v7_relativeSplatPath)),
    a = C.useRef(!1);
  return (
    wh(() => {
      a.current = !0;
    }),
    C.useCallback(
      function (u, d) {
        if ((d === void 0 && (d = {}), !a.current)) return;
        if (typeof u == "number") {
          r.go(u);
          return;
        }
        let c = uh(u, JSON.parse(o), i, d.relative === "path");
        e == null &&
          t !== "/" &&
          (c.pathname = c.pathname === "/" ? t : hn([t, c.pathname])),
          (d.replace ? r.replace : r.push)(c, d.state, d);
      },
      [t, r, o, i, e],
    )
  );
}
function xh() {
  let { matches: e } = C.useContext(Vn),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function j0(e, t, n, r) {
  uo() || K(!1);
  let { navigator: l } = C.useContext(so),
    { matches: i } = C.useContext(Vn),
    o = i[i.length - 1],
    a = o ? o.params : {};
  o && o.pathname;
  let s = o ? o.pathnameBase : "/";
  o && o.route;
  let u = yh(),
    d;
  d = u;
  let c = d.pathname || "/",
    h = c;
  if (s !== "/") {
    let S = s.replace(/^\//, "").split("/");
    h = "/" + c.replace(/^\//, "").split("/").slice(S.length).join("/");
  }
  let w = Nn(e, { pathname: h });
  return D0(
    w &&
      w.map((S) =>
        Object.assign({}, S, {
          params: Object.assign({}, a, S.params),
          pathname: hn([
            s,
            l.encodeLocation
              ? l.encodeLocation(S.pathname).pathname
              : S.pathname,
          ]),
          pathnameBase:
            S.pathnameBase === "/"
              ? s
              : hn([
                  s,
                  l.encodeLocation
                    ? l.encodeLocation(S.pathnameBase).pathname
                    : S.pathnameBase,
                ]),
        }),
      ),
    i,
    n,
    r,
  );
}
function T0() {
  let e = I0(),
    t = oo(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    l = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return C.createElement(
    C.Fragment,
    null,
    C.createElement("h2", null, "Unexpected Application Error!"),
    C.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? C.createElement("pre", { style: l }, n) : null,
    null,
  );
}
const R0 = C.createElement(T0, null);
class L0 extends C.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n,
    );
  }
  render() {
    return this.state.error !== void 0
      ? C.createElement(
          Vn.Provider,
          { value: this.props.routeContext },
          C.createElement(vh.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function P0(e) {
  let { routeContext: t, match: n, children: r } = e,
    l = C.useContext(ao);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    C.createElement(Vn.Provider, { value: t }, r)
  );
}
function D0(e, t, n, r) {
  var l;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var i;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (i = r) != null &&
      i.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let o = e,
    a = (l = n) == null ? void 0 : l.errors;
  if (a != null) {
    let d = o.findIndex(
      (c) => c.route.id && (a == null ? void 0 : a[c.route.id]) !== void 0,
    );
    d >= 0 || K(!1), (o = o.slice(0, Math.min(o.length, d + 1)));
  }
  let s = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let d = 0; d < o.length; d++) {
      let c = o[d];
      if (
        ((c.route.HydrateFallback || c.route.hydrateFallbackElement) && (u = d),
        c.route.id)
      ) {
        let { loaderData: h, errors: w } = n,
          x =
            c.route.loader &&
            h[c.route.id] === void 0 &&
            (!w || w[c.route.id] === void 0);
        if (c.route.lazy || x) {
          (s = !0), u >= 0 ? (o = o.slice(0, u + 1)) : (o = [o[0]]);
          break;
        }
      }
    }
  return o.reduceRight((d, c, h) => {
    let w,
      x = !1,
      S = null,
      j = null;
    n &&
      ((w = a && c.route.id ? a[c.route.id] : void 0),
      (S = c.route.errorElement || R0),
      s &&
        (u < 0 && h === 0
          ? (U0("route-fallback"), (x = !0), (j = null))
          : u === h &&
            ((x = !0), (j = c.route.hydrateFallbackElement || null))));
    let m = t.concat(o.slice(0, h + 1)),
      f = () => {
        let v;
        return (
          w
            ? (v = S)
            : x
              ? (v = j)
              : c.route.Component
                ? (v = C.createElement(c.route.Component, null))
                : c.route.element
                  ? (v = c.route.element)
                  : (v = d),
          C.createElement(P0, {
            match: c,
            routeContext: { outlet: d, matches: m, isDataRoute: n != null },
            children: v,
          })
        );
      };
    return n && (c.route.ErrorBoundary || c.route.errorElement || h === 0)
      ? C.createElement(L0, {
          location: n.location,
          revalidation: n.revalidation,
          component: S,
          error: w,
          children: f(),
          routeContext: { outlet: null, matches: m, isDataRoute: !0 },
        })
      : f();
  }, null);
}
var Sh = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(Sh || {}),
  Ui = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(Ui || {});
function z0(e) {
  let t = C.useContext(ao);
  return t || K(!1), t;
}
function O0(e) {
  let t = C.useContext(gh);
  return t || K(!1), t;
}
function F0(e) {
  let t = C.useContext(Vn);
  return t || K(!1), t;
}
function kh(e) {
  let t = F0(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || K(!1), n.route.id;
}
function I0() {
  var e;
  let t = C.useContext(vh),
    n = O0(Ui.UseRouteError),
    r = kh(Ui.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function A0() {
  let { router: e } = z0(Sh.UseNavigateStable),
    t = kh(Ui.UseNavigateStable),
    n = C.useRef(!1);
  return (
    wh(() => {
      n.current = !0;
    }),
    C.useCallback(
      function (l, i) {
        i === void 0 && (i = {}),
          n.current &&
            (typeof l == "number"
              ? e.navigate(l)
              : e.navigate(l, Ai({ fromRouteId: t }, i)));
      },
      [e, t],
    )
  );
}
const Rc = {};
function U0(e, t, n) {
  Rc[e] || (Rc[e] = !0);
}
function B0(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: l = Se.Pop,
    navigator: i,
    static: o = !1,
    future: a,
  } = e;
  uo() && K(!1);
  let s = t.replace(/^\/*/, "/"),
    u = C.useMemo(
      () => ({
        basename: s,
        navigator: i,
        static: o,
        future: Ai({ v7_relativeSplatPath: !1 }, a),
      }),
      [s, a, i, o],
    );
  typeof r == "string" && (r = wn(r));
  let {
      pathname: d = "/",
      search: c = "",
      hash: h = "",
      state: w = null,
      key: x = "default",
    } = r,
    S = C.useMemo(() => {
      let j = kl(d, s);
      return j == null
        ? null
        : {
            location: { pathname: j, search: c, hash: h, state: w, key: x },
            navigationType: l,
          };
    }, [s, d, c, h, w, x, l]);
  return S == null
    ? null
    : C.createElement(
        so.Provider,
        { value: u },
        C.createElement(Ws.Provider, { children: n, value: S }),
      );
}
new Promise(() => {});
function V0(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      Object.assign(t, {
        element: C.createElement(e.Component),
        Component: void 0,
      }),
    e.HydrateFallback &&
      Object.assign(t, {
        hydrateFallbackElement: C.createElement(e.HydrateFallback),
        HydrateFallback: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: C.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    t
  );
}
/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Bi() {
  return (
    (Bi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Bi.apply(this, arguments)
  );
}
const W0 = "6";
try {
  window.__reactRouterVersion = W0;
} catch {}
function $0(e, t) {
  return l0({
    basename: void 0,
    future: Bi({}, void 0, { v7_prependBasename: !0 }),
    history: jg({ window: void 0 }),
    hydrationData: Q0(),
    routes: e,
    mapRouteProperties: V0,
    unstable_dataStrategy: void 0,
    unstable_patchRoutesOnNavigation: void 0,
    window: void 0,
  }).initialize();
}
function Q0() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = Bi({}, t, { errors: H0(t.errors) })), t;
}
function H0(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, l] of t)
    if (l && l.__type === "RouteErrorResponse")
      n[r] = new Ii(l.status, l.statusText, l.data, l.internal === !0);
    else if (l && l.__type === "Error") {
      if (l.__subType) {
        let i = window[l.__subType];
        if (typeof i == "function")
          try {
            let o = new i(l.message);
            (o.stack = ""), (n[r] = o);
          } catch {}
      }
      if (n[r] == null) {
        let i = new Error(l.message);
        (i.stack = ""), (n[r] = i);
      }
    } else n[r] = l;
  return n;
}
const Y0 = C.createContext({ isTransitioning: !1 }),
  X0 = C.createContext(new Map()),
  G0 = "startTransition",
  Lc = mp[G0],
  K0 = "flushSync",
  Pc = Cg[K0];
function Z0(e) {
  Lc ? Lc(e) : e();
}
function Fr(e) {
  Pc ? Pc(e) : e();
}
class J0 {
  constructor() {
    (this.status = "pending"),
      (this.promise = new Promise((t, n) => {
        (this.resolve = (r) => {
          this.status === "pending" && ((this.status = "resolved"), t(r));
        }),
          (this.reject = (r) => {
            this.status === "pending" && ((this.status = "rejected"), n(r));
          });
      }));
  }
}
function b0(e) {
  let { fallbackElement: t, router: n, future: r } = e,
    [l, i] = C.useState(n.state),
    [o, a] = C.useState(),
    [s, u] = C.useState({ isTransitioning: !1 }),
    [d, c] = C.useState(),
    [h, w] = C.useState(),
    [x, S] = C.useState(),
    j = C.useRef(new Map()),
    { v7_startTransition: m } = r || {},
    f = C.useCallback(
      (g) => {
        m ? Z0(g) : g();
      },
      [m],
    ),
    v = C.useCallback(
      (g, I) => {
        let {
          deletedFetchers: z,
          unstable_flushSync: $,
          unstable_viewTransitionOpts: Z,
        } = I;
        z.forEach((J) => j.current.delete(J)),
          g.fetchers.forEach((J, Fe) => {
            J.data !== void 0 && j.current.set(Fe, J.data);
          });
        let ye =
          n.window == null ||
          n.window.document == null ||
          typeof n.window.document.startViewTransition != "function";
        if (!Z || ye) {
          $ ? Fr(() => i(g)) : f(() => i(g));
          return;
        }
        if ($) {
          Fr(() => {
            h && (d && d.resolve(), h.skipTransition()),
              u({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: Z.currentLocation,
                nextLocation: Z.nextLocation,
              });
          });
          let J = n.window.document.startViewTransition(() => {
            Fr(() => i(g));
          });
          J.finished.finally(() => {
            Fr(() => {
              c(void 0), w(void 0), a(void 0), u({ isTransitioning: !1 });
            });
          }),
            Fr(() => w(J));
          return;
        }
        h
          ? (d && d.resolve(),
            h.skipTransition(),
            S({
              state: g,
              currentLocation: Z.currentLocation,
              nextLocation: Z.nextLocation,
            }))
          : (a(g),
            u({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: Z.currentLocation,
              nextLocation: Z.nextLocation,
            }));
      },
      [n.window, h, d, j, f],
    );
  C.useLayoutEffect(() => n.subscribe(v), [n, v]),
    C.useEffect(() => {
      s.isTransitioning && !s.flushSync && c(new J0());
    }, [s]),
    C.useEffect(() => {
      if (d && o && n.window) {
        let g = o,
          I = d.promise,
          z = n.window.document.startViewTransition(async () => {
            f(() => i(g)), await I;
          });
        z.finished.finally(() => {
          c(void 0), w(void 0), a(void 0), u({ isTransitioning: !1 });
        }),
          w(z);
      }
    }, [f, o, d, n.window]),
    C.useEffect(() => {
      d && o && l.location.key === o.location.key && d.resolve();
    }, [d, h, l.location, o]),
    C.useEffect(() => {
      !s.isTransitioning &&
        x &&
        (a(x.state),
        u({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: x.currentLocation,
          nextLocation: x.nextLocation,
        }),
        S(void 0));
    }, [s.isTransitioning, x]),
    C.useEffect(() => {}, []);
  let _ = C.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (g) => n.navigate(g),
        push: (g, I, z) =>
          n.navigate(g, {
            state: I,
            preventScrollReset: z == null ? void 0 : z.preventScrollReset,
          }),
        replace: (g, I, z) =>
          n.navigate(g, {
            replace: !0,
            state: I,
            preventScrollReset: z == null ? void 0 : z.preventScrollReset,
          }),
      }),
      [n],
    ),
    T = n.basename || "/",
    P = C.useMemo(
      () => ({ router: n, navigator: _, static: !1, basename: T }),
      [n, _, T],
    ),
    R = C.useMemo(
      () => ({ v7_relativeSplatPath: n.future.v7_relativeSplatPath }),
      [n.future.v7_relativeSplatPath],
    );
  return C.createElement(
    C.Fragment,
    null,
    C.createElement(
      ao.Provider,
      { value: P },
      C.createElement(
        gh.Provider,
        { value: l },
        C.createElement(
          X0.Provider,
          { value: j.current },
          C.createElement(
            Y0.Provider,
            { value: s },
            C.createElement(
              B0,
              {
                basename: T,
                location: l.location,
                navigationType: l.historyAction,
                navigator: _,
                future: R,
              },
              l.initialized || n.future.v7_partialHydration
                ? C.createElement(q0, {
                    routes: n.routes,
                    future: n.future,
                    state: l,
                  })
                : t,
            ),
          ),
        ),
      ),
    ),
    null,
  );
}
const q0 = C.memo(ev);
function ev(e) {
  let { routes: t, future: n, state: r } = e;
  return j0(t, void 0, r, n);
}
var Dc;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(Dc || (Dc = {}));
var zc;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(zc || (zc = {}));
const tv = "/Netflix-wanna-be/assets/menu-icon-white-2-CMiWu-9r.jpg",
  nv = "/Netflix-wanna-be/assets/notflix-KjiAJzHN.webp",
  xt = [
    {
      title: "The Shawshank Redemption",
      year: 1994,
      rating: "R",
      actors: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
      genre: "Drama",
      synopsis:
        "Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.",
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    },
    {
      title: "The Godfather",
      year: 1972,
      rating: "R",
      actors: ["Marlon Brando", "Al Pacino", "James Caan"],
      genre: "Crime, Drama",
      synopsis:
        "Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.",
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY562_CR8,0,380,562_.jpg",
    },
    {
      title: "The Godfather: Part II",
      year: 1974,
      rating: "R",
      actors: ["Al Pacino", "Robert De Niro", "Robert Duvall"],
      genre: "Crime, Drama",
      synopsis:
        "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY562_CR7,0,380,562_.jpg",
      isTrending: !0,
    },
    {
      title: "The Dark Knight",
      year: 2008,
      rating: "PG-13",
      actors: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
      genre: "Action, Crime, Drama",
      synopsis:
        "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
    },
    {
      title: "12 Angry Men",
      year: 1957,
      rating: "-",
      actors: ["Henry Fonda", "Lee J. Cobb", "Martin Balsam"],
      genre: "Crime, Drama",
      synopsis:
        "The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.",
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
    },
    {
      title: "Schindler's List",
      year: 1993,
      rating: "R",
      actors: ["Liam Neeson", "Ralph Fiennes", "Ben Kingsley"],
      genre: "Biography, Drama, History",
      synopsis:
        "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
    },
    {
      title: "The Lord of the Rings: The Return of the King",
      year: 2003,
      rating: "PG-13",
      actors: ["Elijah Wood", "Viggo Mortensen", "Ian McKellen"],
      genre: "Action, Adventure, Drama",
      synopsis:
        "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
      isTrending: !0,
    },
    {
      title: "Pulp Fiction",
      year: 1994,
      rating: "R",
      actors: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
      genre: "Crime, Drama",
      synopsis:
        "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
    },
    {
      title: "The Good, the Bad and the Ugly",
      year: 1966,
      rating: "-",
      actors: ["Clint Eastwood", "Lee Van Cleef", "Eli Wallach"],
      genre: "Western",
      synopsis:
        "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BOTQ5NDI3MTI4MF5BMl5BanBnXkFtZTgwNDQ4ODE5MDE@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
    },
    {
      title: "Fight Club",
      year: 1999,
      rating: "R",
      actors: ["Brad Pitt", "Edward Norton", "Helena Bonham Carter"],
      genre: "Drama",
      synopsis:
        "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BOTgyOGQ1NDItNGU3Ny00MjU3LTg2YWEtNmEyYjBiMjI1Y2M5XkEyXkFqcGc@._V1_.jpg",
      isTrending: !0,
    },
    {
      title: "Forrest Gump",
      year: 1994,
      rating: "PG-13",
      actors: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
      genre: "Drama, Romance",
      synopsis:
        "The history of the United States from the 1950s to the '70s unfolds from the perspective of an Alabama man with an IQ of 75, who yearns to be reunited with his childhood sweetheart.",
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
    },
    {
      title: "Inception",
      year: 2010,
      rating: "PG-13",
      actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
      genre: "Action, Adventure, Sci-Fi",
      synopsis:
        "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
    },
    {
      title: "The Lord of the Rings: The Fellowship of the Ring",
      year: 2001,
      rating: "PG-13",
      actors: ["Elijah Wood", "Ian McKellen", "Orlando Bloom"],
      genre: "Action, Adventure, Drama",
      synopsis:
        "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
    },
    {
      title: "Star Wars: Episode V - The Empire Strikes Back",
      year: 1980,
      rating: "PG",
      actors: ["Mark Hamill", "Harrison Ford", "Carrie Fisher"],
      genre: "Action, Adventure, Fantasy",
      synopsis:
        "After the Rebels are overpowered by the Empire, Luke Skywalker begins his Jedi training with Yoda, while his friends are pursued across the galaxy by Darth Vader and bounty hunter Boba Fett.",
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
      isTrending: !0,
    },
    {
      title: "The Matrix",
      year: 1999,
      rating: "R",
      actors: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
      genre: "Action, Sci-Fi",
      synopsis:
        "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
    },
    {
      title: "Goodfellas",
      year: 1990,
      rating: "R",
      actors: ["Robert De Niro", "Ray Liotta", "Joe Pesci"],
      genre: "Biography, Crime, Drama",
      synopsis:
        "The story of Henry Hill and his life in the mafia, covering his relationship with his wife Karen and his mob partners Jimmy Conway and Tommy DeVito.",
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
    },
    {
      title: "One Flew Over the Cuckoo's Nest",
      year: 1975,
      rating: "R",
      actors: ["Jack Nicholson", "Louise Fletcher", "Michael Berryman"],
      genre: "Drama",
      synopsis:
        "In the Fall of 1963, a Korean War veteran and criminal pleads insanity and is admitted to a mental institution, where he rallies up the scared patients against the tyrannical nurse.",
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
    },
    {
      title: "Seven Samurai",
      year: 1954,
      rating: "-",
      actors: ["Toshiro Mifune", "Takashi Shimura", "Keiko Tsushima"],
      genre: "Action, Adventure, Drama",
      synopsis:
        "Farmers from a village exploited by bandits hire a veteran samurai for protection, who gathers six other samurai to join him.",
      thumbnail:
        "https://www.originalfilmart.com/cdn/shop/products/seven_samurai_R1982_original_film_art_5000x.jpg?v=1620677764",
    },
    {
      title: "The Silence of the Lambs",
      year: 1991,
      rating: "R",
      actors: ["Jodie Foster", "Anthony Hopkins", "Lawrence A. Bonney"],
      genre: "Crime, Drama, Thriller",
      synopsis:
        "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
    },
    {
      title: "Casablanca",
      year: 1942,
      rating: "PG",
      actors: ["Humphrey Bogart", "Ingrid Bergman", "Paul Henreid"],
      genre: "Drama, Romance, War",
      synopsis:
        "A cynical expatriate American cafe owner struggles to decide whether or not to help his former lover and her fugitive husband escape the Nazis in French Morocco.",
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BY2IzZGY2YmEtYzljNS00NTM5LTgwMzUtMzM1NjQ4NGI0OTk0XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_QL75_UX380_CR0,5,380,562_.jpg",
      isTrending: !0,
    },
    {
      title: "The Lord of the Rings: The Two Towers",
      year: 2002,
      rating: "PG-13",
      actors: ["Elijah Wood", "Ian McKellen", "Viggo Mortensen"],
      genre: "Action, Adventure, Drama",
      synopsis:
        "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.",
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,14,380,562_.jpg",
    },
    {
      title: "Indiana Jones and the Raiders of the Lost Ark",
      year: 1981,
      rating: "PG",
      actors: ["Harrison Ford", "Karen Allen", "Paul Freeman"],
      genre: "Action, Adventure",
      synopsis:
        "In 1936, archaeologist and adventurer Indiana Jones is hired by the U.S. government to find the Ark of the Covenant before the Nazis can obtain its awesome powers.",
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BNTU2ODkyY2MtMjU1NC00NjE1LWEzYjgtMWQ3MzRhMTE0NDc0XkEyXkFqcGdeQXVyMjM4MzQ4OTQ@._V1_QL75_UY562_CR1,0,380,562_.jpg",
    },
    {
      title: "City of God",
      year: 2002,
      rating: "R",
      actors: [
        "Alexandre Rodrigues",
        "Leandro Firmino",
        "Matheus Nachtergaele",
      ],
      genre: "Crime, Drama",
      synopsis:
        "In the slums of Rio, two kids' paths diverge as one struggles to become a photographer and the other a kingpin.",
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BMGU5OWEwZDItNmNkMC00NzZmLTk1YTctNzVhZTJjM2NlZTVmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
    },
    {
      title: "Once Upon a Time in the West",
      year: 1968,
      rating: "PG-13",
      actors: ["Henry Fonda", "Charles Bronson", "Claudia Cardinale"],
      genre: "Western",
      synopsis:
        "A mysterious stranger with a harmonica joins forces with a notorious desperado to protect a beautiful widow from a ruthless assassin working for the railroad.",
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BODQ3NDExOGYtMzI3Mi00NWRlLTkwNjAtNjc4MDgzZGJiZTA1XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_QL75_UX380_CR0,3,380,562_.jpg",
    },
    {
      title: "The Departed",
      year: 2006,
      rating: "R",
      actors: ["Leonardo DiCaprio", "Matt Damon", "Jack Nicholson"],
      genre: "Crime, Drama, Thriller",
      synopsis:
        "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.",
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_QL75_UY562_CR0,0,380,562_.jpg",
    },
    {
      title: "Rear Window",
      year: 1954,
      rating: "PG",
      actors: ["James Stewart", "Grace Kelly", "Wendell Corey"],
      genre: "Mystery, Thriller",
      synopsis:
        "A photographer in a wheelchair spies on his neighbors from his Greenwich Village courtyard apartment window, and becomes convinced one of them has committed murder, despite the skepticism of his fashion-model girlfriend.",
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BNGUxYWM3M2MtMGM3Mi00ZmRiLWE0NGQtZjE5ODI2OTJhNTU0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL75_UY562_CR2,0,380,562_.jpg",
    },
    {
      title: "Gladiator",
      year: 2e3,
      rating: "R",
      actors: ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen"],
      genre: "Action, Adventure, Drama",
      synopsis:
        "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    },
    {
      title: "Terminator 2: Judgment Day",
      year: 1991,
      rating: "R",
      actors: ["Arnold Schwarzenegger", "Linda Hamilton", "Edward Furlong"],
      genre: "Action, Sci-Fi",
      synopsis:
        "A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her ten year old son John from an even more advanced and powerful cyborg.",
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,1,380,562_.jpg",
      isTrending: !0,
    },
    {
      title: "Whiplash",
      year: 2014,
      rating: "R",
      actors: ["Miles Teller", "J.K. Simmons", "Melissa Benoist"],
      genre: "Drama, Music",
      synopsis:
        "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential.",
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BOTA5NDZlZGUtMjAxOS00YTRkLTkwYmMtYWQ0NWEwZDZiNjEzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    },
    {
      title: "Psycho",
      year: 1960,
      rating: "R",
      actors: ["Anthony Perkins", "Janet Leigh", "Vera Miles"],
      genre: "Horror, Mystery, Thriller",
      synopsis:
        "A Phoenix secretary embezzles $40,000 from her employer's client, goes on the run and checks into a remote motel run by a young man under the domination of his mother.",
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BNTQwNDM1YzItNDAxZC00NWY2LTk0M2UtNDIwNWI5OGUyNWUxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,1,380,562_.jpg",
      isTrending: !0,
    },
  ],
  rv = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: xt },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  );
function Wt(e) {
  return Array.isArray ? Array.isArray(e) : Mh(e) === "[object Array]";
}
const lv = 1 / 0;
function iv(e) {
  if (typeof e == "string") return e;
  let t = e + "";
  return t == "0" && 1 / e == -lv ? "-0" : t;
}
function ov(e) {
  return e == null ? "" : iv(e);
}
function Mt(e) {
  return typeof e == "string";
}
function Eh(e) {
  return typeof e == "number";
}
function av(e) {
  return e === !0 || e === !1 || (sv(e) && Mh(e) == "[object Boolean]");
}
function _h(e) {
  return typeof e == "object";
}
function sv(e) {
  return _h(e) && e !== null;
}
function et(e) {
  return e != null;
}
function $o(e) {
  return !e.trim().length;
}
function Mh(e) {
  return e == null
    ? e === void 0
      ? "[object Undefined]"
      : "[object Null]"
    : Object.prototype.toString.call(e);
}
const uv = "Incorrect 'index' type",
  cv = (e) => `Invalid value for key ${e}`,
  dv = (e) => `Pattern length exceeds max of ${e}.`,
  fv = (e) => `Missing ${e} property in key`,
  hv = (e) => `Property 'weight' in key '${e}' must be a positive integer`,
  Oc = Object.prototype.hasOwnProperty;
class pv {
  constructor(t) {
    (this._keys = []), (this._keyMap = {});
    let n = 0;
    t.forEach((r) => {
      let l = Nh(r);
      this._keys.push(l), (this._keyMap[l.id] = l), (n += l.weight);
    }),
      this._keys.forEach((r) => {
        r.weight /= n;
      });
  }
  get(t) {
    return this._keyMap[t];
  }
  keys() {
    return this._keys;
  }
  toJSON() {
    return JSON.stringify(this._keys);
  }
}
function Nh(e) {
  let t = null,
    n = null,
    r = null,
    l = 1,
    i = null;
  if (Mt(e) || Wt(e)) (r = e), (t = Fc(e)), (n = Aa(e));
  else {
    if (!Oc.call(e, "name")) throw new Error(fv("name"));
    const o = e.name;
    if (((r = o), Oc.call(e, "weight") && ((l = e.weight), l <= 0)))
      throw new Error(hv(o));
    (t = Fc(o)), (n = Aa(o)), (i = e.getFn);
  }
  return { path: t, id: n, weight: l, src: r, getFn: i };
}
function Fc(e) {
  return Wt(e) ? e : e.split(".");
}
function Aa(e) {
  return Wt(e) ? e.join(".") : e;
}
function mv(e, t) {
  let n = [],
    r = !1;
  const l = (i, o, a) => {
    if (et(i))
      if (!o[a]) n.push(i);
      else {
        let s = o[a];
        const u = i[s];
        if (!et(u)) return;
        if (a === o.length - 1 && (Mt(u) || Eh(u) || av(u))) n.push(ov(u));
        else if (Wt(u)) {
          r = !0;
          for (let d = 0, c = u.length; d < c; d += 1) l(u[d], o, a + 1);
        } else o.length && l(u, o, a + 1);
      }
  };
  return l(e, Mt(t) ? t.split(".") : t, 0), r ? n : n[0];
}
const gv = { includeMatches: !1, findAllMatches: !1, minMatchCharLength: 1 },
  vv = {
    isCaseSensitive: !1,
    includeScore: !1,
    keys: [],
    shouldSort: !0,
    sortFn: (e, t) =>
      e.score === t.score
        ? e.idx < t.idx
          ? -1
          : 1
        : e.score < t.score
          ? -1
          : 1,
  },
  yv = { location: 0, threshold: 0.6, distance: 100 },
  wv = {
    useExtendedSearch: !1,
    getFn: mv,
    ignoreLocation: !1,
    ignoreFieldNorm: !1,
    fieldNormWeight: 1,
  };
var H = { ...vv, ...gv, ...yv, ...wv };
const xv = /[^ ]+/g;
function Sv(e = 1, t = 3) {
  const n = new Map(),
    r = Math.pow(10, t);
  return {
    get(l) {
      const i = l.match(xv).length;
      if (n.has(i)) return n.get(i);
      const o = 1 / Math.pow(i, 0.5 * e),
        a = parseFloat(Math.round(o * r) / r);
      return n.set(i, a), a;
    },
    clear() {
      n.clear();
    },
  };
}
class $s {
  constructor({
    getFn: t = H.getFn,
    fieldNormWeight: n = H.fieldNormWeight,
  } = {}) {
    (this.norm = Sv(n, 3)),
      (this.getFn = t),
      (this.isCreated = !1),
      this.setIndexRecords();
  }
  setSources(t = []) {
    this.docs = t;
  }
  setIndexRecords(t = []) {
    this.records = t;
  }
  setKeys(t = []) {
    (this.keys = t),
      (this._keysMap = {}),
      t.forEach((n, r) => {
        this._keysMap[n.id] = r;
      });
  }
  create() {
    this.isCreated ||
      !this.docs.length ||
      ((this.isCreated = !0),
      Mt(this.docs[0])
        ? this.docs.forEach((t, n) => {
            this._addString(t, n);
          })
        : this.docs.forEach((t, n) => {
            this._addObject(t, n);
          }),
      this.norm.clear());
  }
  add(t) {
    const n = this.size();
    Mt(t) ? this._addString(t, n) : this._addObject(t, n);
  }
  removeAt(t) {
    this.records.splice(t, 1);
    for (let n = t, r = this.size(); n < r; n += 1) this.records[n].i -= 1;
  }
  getValueForItemAtKeyId(t, n) {
    return t[this._keysMap[n]];
  }
  size() {
    return this.records.length;
  }
  _addString(t, n) {
    if (!et(t) || $o(t)) return;
    let r = { v: t, i: n, n: this.norm.get(t) };
    this.records.push(r);
  }
  _addObject(t, n) {
    let r = { i: n, $: {} };
    this.keys.forEach((l, i) => {
      let o = l.getFn ? l.getFn(t) : this.getFn(t, l.path);
      if (et(o)) {
        if (Wt(o)) {
          let a = [];
          const s = [{ nestedArrIndex: -1, value: o }];
          for (; s.length; ) {
            const { nestedArrIndex: u, value: d } = s.pop();
            if (et(d))
              if (Mt(d) && !$o(d)) {
                let c = { v: d, i: u, n: this.norm.get(d) };
                a.push(c);
              } else
                Wt(d) &&
                  d.forEach((c, h) => {
                    s.push({ nestedArrIndex: h, value: c });
                  });
          }
          r.$[i] = a;
        } else if (Mt(o) && !$o(o)) {
          let a = { v: o, n: this.norm.get(o) };
          r.$[i] = a;
        }
      }
    }),
      this.records.push(r);
  }
  toJSON() {
    return { keys: this.keys, records: this.records };
  }
}
function Ch(
  e,
  t,
  { getFn: n = H.getFn, fieldNormWeight: r = H.fieldNormWeight } = {},
) {
  const l = new $s({ getFn: n, fieldNormWeight: r });
  return l.setKeys(e.map(Nh)), l.setSources(t), l.create(), l;
}
function kv(
  e,
  { getFn: t = H.getFn, fieldNormWeight: n = H.fieldNormWeight } = {},
) {
  const { keys: r, records: l } = e,
    i = new $s({ getFn: t, fieldNormWeight: n });
  return i.setKeys(r), i.setIndexRecords(l), i;
}
function ql(
  e,
  {
    errors: t = 0,
    currentLocation: n = 0,
    expectedLocation: r = 0,
    distance: l = H.distance,
    ignoreLocation: i = H.ignoreLocation,
  } = {},
) {
  const o = t / e.length;
  if (i) return o;
  const a = Math.abs(r - n);
  return l ? o + a / l : a ? 1 : o;
}
function Ev(e = [], t = H.minMatchCharLength) {
  let n = [],
    r = -1,
    l = -1,
    i = 0;
  for (let o = e.length; i < o; i += 1) {
    let a = e[i];
    a && r === -1
      ? (r = i)
      : !a &&
        r !== -1 &&
        ((l = i - 1), l - r + 1 >= t && n.push([r, l]), (r = -1));
  }
  return e[i - 1] && i - r >= t && n.push([r, i - 1]), n;
}
const Cn = 32;
function _v(
  e,
  t,
  n,
  {
    location: r = H.location,
    distance: l = H.distance,
    threshold: i = H.threshold,
    findAllMatches: o = H.findAllMatches,
    minMatchCharLength: a = H.minMatchCharLength,
    includeMatches: s = H.includeMatches,
    ignoreLocation: u = H.ignoreLocation,
  } = {},
) {
  if (t.length > Cn) throw new Error(dv(Cn));
  const d = t.length,
    c = e.length,
    h = Math.max(0, Math.min(r, c));
  let w = i,
    x = h;
  const S = a > 1 || s,
    j = S ? Array(c) : [];
  let m;
  for (; (m = e.indexOf(t, x)) > -1; ) {
    let R = ql(t, {
      currentLocation: m,
      expectedLocation: h,
      distance: l,
      ignoreLocation: u,
    });
    if (((w = Math.min(R, w)), (x = m + d), S)) {
      let g = 0;
      for (; g < d; ) (j[m + g] = 1), (g += 1);
    }
  }
  x = -1;
  let f = [],
    v = 1,
    _ = d + c;
  const T = 1 << (d - 1);
  for (let R = 0; R < d; R += 1) {
    let g = 0,
      I = _;
    for (; g < I; )
      ql(t, {
        errors: R,
        currentLocation: h + I,
        expectedLocation: h,
        distance: l,
        ignoreLocation: u,
      }) <= w
        ? (g = I)
        : (_ = I),
        (I = Math.floor((_ - g) / 2 + g));
    _ = I;
    let z = Math.max(1, h - I + 1),
      $ = o ? c : Math.min(h + I, c) + d,
      Z = Array($ + 2);
    Z[$ + 1] = (1 << R) - 1;
    for (let J = $; J >= z; J -= 1) {
      let Fe = J - 1,
        $e = n[e.charAt(Fe)];
      if (
        (S && (j[Fe] = +!!$e),
        (Z[J] = ((Z[J + 1] << 1) | 1) & $e),
        R && (Z[J] |= ((f[J + 1] | f[J]) << 1) | 1 | f[J + 1]),
        Z[J] & T &&
          ((v = ql(t, {
            errors: R,
            currentLocation: Fe,
            expectedLocation: h,
            distance: l,
            ignoreLocation: u,
          })),
          v <= w))
      ) {
        if (((w = v), (x = Fe), x <= h)) break;
        z = Math.max(1, 2 * h - x);
      }
    }
    if (
      ql(t, {
        errors: R + 1,
        currentLocation: h,
        expectedLocation: h,
        distance: l,
        ignoreLocation: u,
      }) > w
    )
      break;
    f = Z;
  }
  const P = { isMatch: x >= 0, score: Math.max(0.001, v) };
  if (S) {
    const R = Ev(j, a);
    R.length ? s && (P.indices = R) : (P.isMatch = !1);
  }
  return P;
}
function Mv(e) {
  let t = {};
  for (let n = 0, r = e.length; n < r; n += 1) {
    const l = e.charAt(n);
    t[l] = (t[l] || 0) | (1 << (r - n - 1));
  }
  return t;
}
class jh {
  constructor(
    t,
    {
      location: n = H.location,
      threshold: r = H.threshold,
      distance: l = H.distance,
      includeMatches: i = H.includeMatches,
      findAllMatches: o = H.findAllMatches,
      minMatchCharLength: a = H.minMatchCharLength,
      isCaseSensitive: s = H.isCaseSensitive,
      ignoreLocation: u = H.ignoreLocation,
    } = {},
  ) {
    if (
      ((this.options = {
        location: n,
        threshold: r,
        distance: l,
        includeMatches: i,
        findAllMatches: o,
        minMatchCharLength: a,
        isCaseSensitive: s,
        ignoreLocation: u,
      }),
      (this.pattern = s ? t : t.toLowerCase()),
      (this.chunks = []),
      !this.pattern.length)
    )
      return;
    const d = (h, w) => {
        this.chunks.push({ pattern: h, alphabet: Mv(h), startIndex: w });
      },
      c = this.pattern.length;
    if (c > Cn) {
      let h = 0;
      const w = c % Cn,
        x = c - w;
      for (; h < x; ) d(this.pattern.substr(h, Cn), h), (h += Cn);
      if (w) {
        const S = c - Cn;
        d(this.pattern.substr(S), S);
      }
    } else d(this.pattern, 0);
  }
  searchIn(t) {
    const { isCaseSensitive: n, includeMatches: r } = this.options;
    if ((n || (t = t.toLowerCase()), this.pattern === t)) {
      let x = { isMatch: !0, score: 0 };
      return r && (x.indices = [[0, t.length - 1]]), x;
    }
    const {
      location: l,
      distance: i,
      threshold: o,
      findAllMatches: a,
      minMatchCharLength: s,
      ignoreLocation: u,
    } = this.options;
    let d = [],
      c = 0,
      h = !1;
    this.chunks.forEach(({ pattern: x, alphabet: S, startIndex: j }) => {
      const {
        isMatch: m,
        score: f,
        indices: v,
      } = _v(t, x, S, {
        location: l + j,
        distance: i,
        threshold: o,
        findAllMatches: a,
        minMatchCharLength: s,
        includeMatches: r,
        ignoreLocation: u,
      });
      m && (h = !0), (c += f), m && v && (d = [...d, ...v]);
    });
    let w = { isMatch: h, score: h ? c / this.chunks.length : 1 };
    return h && r && (w.indices = d), w;
  }
}
class xn {
  constructor(t) {
    this.pattern = t;
  }
  static isMultiMatch(t) {
    return Ic(t, this.multiRegex);
  }
  static isSingleMatch(t) {
    return Ic(t, this.singleRegex);
  }
  search() {}
}
function Ic(e, t) {
  const n = e.match(t);
  return n ? n[1] : null;
}
class Nv extends xn {
  constructor(t) {
    super(t);
  }
  static get type() {
    return "exact";
  }
  static get multiRegex() {
    return /^="(.*)"$/;
  }
  static get singleRegex() {
    return /^=(.*)$/;
  }
  search(t) {
    const n = t === this.pattern;
    return {
      isMatch: n,
      score: n ? 0 : 1,
      indices: [0, this.pattern.length - 1],
    };
  }
}
class Cv extends xn {
  constructor(t) {
    super(t);
  }
  static get type() {
    return "inverse-exact";
  }
  static get multiRegex() {
    return /^!"(.*)"$/;
  }
  static get singleRegex() {
    return /^!(.*)$/;
  }
  search(t) {
    const r = t.indexOf(this.pattern) === -1;
    return { isMatch: r, score: r ? 0 : 1, indices: [0, t.length - 1] };
  }
}
class jv extends xn {
  constructor(t) {
    super(t);
  }
  static get type() {
    return "prefix-exact";
  }
  static get multiRegex() {
    return /^\^"(.*)"$/;
  }
  static get singleRegex() {
    return /^\^(.*)$/;
  }
  search(t) {
    const n = t.startsWith(this.pattern);
    return {
      isMatch: n,
      score: n ? 0 : 1,
      indices: [0, this.pattern.length - 1],
    };
  }
}
class Tv extends xn {
  constructor(t) {
    super(t);
  }
  static get type() {
    return "inverse-prefix-exact";
  }
  static get multiRegex() {
    return /^!\^"(.*)"$/;
  }
  static get singleRegex() {
    return /^!\^(.*)$/;
  }
  search(t) {
    const n = !t.startsWith(this.pattern);
    return { isMatch: n, score: n ? 0 : 1, indices: [0, t.length - 1] };
  }
}
class Rv extends xn {
  constructor(t) {
    super(t);
  }
  static get type() {
    return "suffix-exact";
  }
  static get multiRegex() {
    return /^"(.*)"\$$/;
  }
  static get singleRegex() {
    return /^(.*)\$$/;
  }
  search(t) {
    const n = t.endsWith(this.pattern);
    return {
      isMatch: n,
      score: n ? 0 : 1,
      indices: [t.length - this.pattern.length, t.length - 1],
    };
  }
}
class Lv extends xn {
  constructor(t) {
    super(t);
  }
  static get type() {
    return "inverse-suffix-exact";
  }
  static get multiRegex() {
    return /^!"(.*)"\$$/;
  }
  static get singleRegex() {
    return /^!(.*)\$$/;
  }
  search(t) {
    const n = !t.endsWith(this.pattern);
    return { isMatch: n, score: n ? 0 : 1, indices: [0, t.length - 1] };
  }
}
class Th extends xn {
  constructor(
    t,
    {
      location: n = H.location,
      threshold: r = H.threshold,
      distance: l = H.distance,
      includeMatches: i = H.includeMatches,
      findAllMatches: o = H.findAllMatches,
      minMatchCharLength: a = H.minMatchCharLength,
      isCaseSensitive: s = H.isCaseSensitive,
      ignoreLocation: u = H.ignoreLocation,
    } = {},
  ) {
    super(t),
      (this._bitapSearch = new jh(t, {
        location: n,
        threshold: r,
        distance: l,
        includeMatches: i,
        findAllMatches: o,
        minMatchCharLength: a,
        isCaseSensitive: s,
        ignoreLocation: u,
      }));
  }
  static get type() {
    return "fuzzy";
  }
  static get multiRegex() {
    return /^"(.*)"$/;
  }
  static get singleRegex() {
    return /^(.*)$/;
  }
  search(t) {
    return this._bitapSearch.searchIn(t);
  }
}
class Rh extends xn {
  constructor(t) {
    super(t);
  }
  static get type() {
    return "include";
  }
  static get multiRegex() {
    return /^'"(.*)"$/;
  }
  static get singleRegex() {
    return /^'(.*)$/;
  }
  search(t) {
    let n = 0,
      r;
    const l = [],
      i = this.pattern.length;
    for (; (r = t.indexOf(this.pattern, n)) > -1; )
      (n = r + i), l.push([r, n - 1]);
    const o = !!l.length;
    return { isMatch: o, score: o ? 0 : 1, indices: l };
  }
}
const Ua = [Nv, Rh, jv, Tv, Lv, Rv, Cv, Th],
  Ac = Ua.length,
  Pv = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,
  Dv = "|";
function zv(e, t = {}) {
  return e.split(Dv).map((n) => {
    let r = n
        .trim()
        .split(Pv)
        .filter((i) => i && !!i.trim()),
      l = [];
    for (let i = 0, o = r.length; i < o; i += 1) {
      const a = r[i];
      let s = !1,
        u = -1;
      for (; !s && ++u < Ac; ) {
        const d = Ua[u];
        let c = d.isMultiMatch(a);
        c && (l.push(new d(c, t)), (s = !0));
      }
      if (!s)
        for (u = -1; ++u < Ac; ) {
          const d = Ua[u];
          let c = d.isSingleMatch(a);
          if (c) {
            l.push(new d(c, t));
            break;
          }
        }
    }
    return l;
  });
}
const Ov = new Set([Th.type, Rh.type]);
class Fv {
  constructor(
    t,
    {
      isCaseSensitive: n = H.isCaseSensitive,
      includeMatches: r = H.includeMatches,
      minMatchCharLength: l = H.minMatchCharLength,
      ignoreLocation: i = H.ignoreLocation,
      findAllMatches: o = H.findAllMatches,
      location: a = H.location,
      threshold: s = H.threshold,
      distance: u = H.distance,
    } = {},
  ) {
    (this.query = null),
      (this.options = {
        isCaseSensitive: n,
        includeMatches: r,
        minMatchCharLength: l,
        findAllMatches: o,
        ignoreLocation: i,
        location: a,
        threshold: s,
        distance: u,
      }),
      (this.pattern = n ? t : t.toLowerCase()),
      (this.query = zv(this.pattern, this.options));
  }
  static condition(t, n) {
    return n.useExtendedSearch;
  }
  searchIn(t) {
    const n = this.query;
    if (!n) return { isMatch: !1, score: 1 };
    const { includeMatches: r, isCaseSensitive: l } = this.options;
    t = l ? t : t.toLowerCase();
    let i = 0,
      o = [],
      a = 0;
    for (let s = 0, u = n.length; s < u; s += 1) {
      const d = n[s];
      (o.length = 0), (i = 0);
      for (let c = 0, h = d.length; c < h; c += 1) {
        const w = d[c],
          { isMatch: x, indices: S, score: j } = w.search(t);
        if (x) {
          if (((i += 1), (a += j), r)) {
            const m = w.constructor.type;
            Ov.has(m) ? (o = [...o, ...S]) : o.push(S);
          }
        } else {
          (a = 0), (i = 0), (o.length = 0);
          break;
        }
      }
      if (i) {
        let c = { isMatch: !0, score: a / i };
        return r && (c.indices = o), c;
      }
    }
    return { isMatch: !1, score: 1 };
  }
}
const Ba = [];
function Iv(...e) {
  Ba.push(...e);
}
function Va(e, t) {
  for (let n = 0, r = Ba.length; n < r; n += 1) {
    let l = Ba[n];
    if (l.condition(e, t)) return new l(e, t);
  }
  return new jh(e, t);
}
const Vi = { AND: "$and", OR: "$or" },
  Wa = { PATH: "$path", PATTERN: "$val" },
  $a = (e) => !!(e[Vi.AND] || e[Vi.OR]),
  Av = (e) => !!e[Wa.PATH],
  Uv = (e) => !Wt(e) && _h(e) && !$a(e),
  Uc = (e) => ({ [Vi.AND]: Object.keys(e).map((t) => ({ [t]: e[t] })) });
function Lh(e, t, { auto: n = !0 } = {}) {
  const r = (l) => {
    let i = Object.keys(l);
    const o = Av(l);
    if (!o && i.length > 1 && !$a(l)) return r(Uc(l));
    if (Uv(l)) {
      const s = o ? l[Wa.PATH] : i[0],
        u = o ? l[Wa.PATTERN] : l[s];
      if (!Mt(u)) throw new Error(cv(s));
      const d = { keyId: Aa(s), pattern: u };
      return n && (d.searcher = Va(u, t)), d;
    }
    let a = { children: [], operator: i[0] };
    return (
      i.forEach((s) => {
        const u = l[s];
        Wt(u) &&
          u.forEach((d) => {
            a.children.push(r(d));
          });
      }),
      a
    );
  };
  return $a(e) || (e = Uc(e)), r(e);
}
function Bv(e, { ignoreFieldNorm: t = H.ignoreFieldNorm }) {
  e.forEach((n) => {
    let r = 1;
    n.matches.forEach(({ key: l, norm: i, score: o }) => {
      const a = l ? l.weight : null;
      r *= Math.pow(o === 0 && a ? Number.EPSILON : o, (a || 1) * (t ? 1 : i));
    }),
      (n.score = r);
  });
}
function Vv(e, t) {
  const n = e.matches;
  (t.matches = []),
    et(n) &&
      n.forEach((r) => {
        if (!et(r.indices) || !r.indices.length) return;
        const { indices: l, value: i } = r;
        let o = { indices: l, value: i };
        r.key && (o.key = r.key.src),
          r.idx > -1 && (o.refIndex = r.idx),
          t.matches.push(o);
      });
}
function Wv(e, t) {
  t.score = e.score;
}
function $v(
  e,
  t,
  {
    includeMatches: n = H.includeMatches,
    includeScore: r = H.includeScore,
  } = {},
) {
  const l = [];
  return (
    n && l.push(Vv),
    r && l.push(Wv),
    e.map((i) => {
      const { idx: o } = i,
        a = { item: t[o], refIndex: o };
      return (
        l.length &&
          l.forEach((s) => {
            s(i, a);
          }),
        a
      );
    })
  );
}
class Er {
  constructor(t, n = {}, r) {
    (this.options = { ...H, ...n }),
      this.options.useExtendedSearch,
      (this._keyStore = new pv(this.options.keys)),
      this.setCollection(t, r);
  }
  setCollection(t, n) {
    if (((this._docs = t), n && !(n instanceof $s))) throw new Error(uv);
    this._myIndex =
      n ||
      Ch(this.options.keys, this._docs, {
        getFn: this.options.getFn,
        fieldNormWeight: this.options.fieldNormWeight,
      });
  }
  add(t) {
    et(t) && (this._docs.push(t), this._myIndex.add(t));
  }
  remove(t = () => !1) {
    const n = [];
    for (let r = 0, l = this._docs.length; r < l; r += 1) {
      const i = this._docs[r];
      t(i, r) && (this.removeAt(r), (r -= 1), (l -= 1), n.push(i));
    }
    return n;
  }
  removeAt(t) {
    this._docs.splice(t, 1), this._myIndex.removeAt(t);
  }
  getIndex() {
    return this._myIndex;
  }
  search(t, { limit: n = -1 } = {}) {
    const {
      includeMatches: r,
      includeScore: l,
      shouldSort: i,
      sortFn: o,
      ignoreFieldNorm: a,
    } = this.options;
    let s = Mt(t)
      ? Mt(this._docs[0])
        ? this._searchStringList(t)
        : this._searchObjectList(t)
      : this._searchLogical(t);
    return (
      Bv(s, { ignoreFieldNorm: a }),
      i && s.sort(o),
      Eh(n) && n > -1 && (s = s.slice(0, n)),
      $v(s, this._docs, { includeMatches: r, includeScore: l })
    );
  }
  _searchStringList(t) {
    const n = Va(t, this.options),
      { records: r } = this._myIndex,
      l = [];
    return (
      r.forEach(({ v: i, i: o, n: a }) => {
        if (!et(i)) return;
        const { isMatch: s, score: u, indices: d } = n.searchIn(i);
        s &&
          l.push({
            item: i,
            idx: o,
            matches: [{ score: u, value: i, norm: a, indices: d }],
          });
      }),
      l
    );
  }
  _searchLogical(t) {
    const n = Lh(t, this.options),
      r = (a, s, u) => {
        if (!a.children) {
          const { keyId: c, searcher: h } = a,
            w = this._findMatches({
              key: this._keyStore.get(c),
              value: this._myIndex.getValueForItemAtKeyId(s, c),
              searcher: h,
            });
          return w && w.length ? [{ idx: u, item: s, matches: w }] : [];
        }
        const d = [];
        for (let c = 0, h = a.children.length; c < h; c += 1) {
          const w = a.children[c],
            x = r(w, s, u);
          if (x.length) d.push(...x);
          else if (a.operator === Vi.AND) return [];
        }
        return d;
      },
      l = this._myIndex.records,
      i = {},
      o = [];
    return (
      l.forEach(({ $: a, i: s }) => {
        if (et(a)) {
          let u = r(n, a, s);
          u.length &&
            (i[s] || ((i[s] = { idx: s, item: a, matches: [] }), o.push(i[s])),
            u.forEach(({ matches: d }) => {
              i[s].matches.push(...d);
            }));
        }
      }),
      o
    );
  }
  _searchObjectList(t) {
    const n = Va(t, this.options),
      { keys: r, records: l } = this._myIndex,
      i = [];
    return (
      l.forEach(({ $: o, i: a }) => {
        if (!et(o)) return;
        let s = [];
        r.forEach((u, d) => {
          s.push(...this._findMatches({ key: u, value: o[d], searcher: n }));
        }),
          s.length && i.push({ idx: a, item: o, matches: s });
      }),
      i
    );
  }
  _findMatches({ key: t, value: n, searcher: r }) {
    if (!et(n)) return [];
    let l = [];
    if (Wt(n))
      n.forEach(({ v: i, i: o, n: a }) => {
        if (!et(i)) return;
        const { isMatch: s, score: u, indices: d } = r.searchIn(i);
        s &&
          l.push({ score: u, key: t, value: i, idx: o, norm: a, indices: d });
      });
    else {
      const { v: i, n: o } = n,
        { isMatch: a, score: s, indices: u } = r.searchIn(i);
      a && l.push({ score: s, key: t, value: i, norm: o, indices: u });
    }
    return l;
  }
}
Er.version = "7.0.0";
Er.createIndex = Ch;
Er.parseIndex = kv;
Er.config = H;
Er.parseQuery = Lh;
Iv(Fv);
function El() {
  const [e, t] = C.useState(!1),
    [n, r] = C.useState(""),
    [l, i] = C.useState(xt),
    o = kr(),
    a = (x) => {
      x.preventDefault(), o("/categories");
    },
    s = (x) => {
      x.preventDefault(), o("/favs");
    },
    u = (x) => {
      x.preventDefault(), o("/");
    },
    d = () => {
      t(!e);
    },
    c = new Er(xt, { keys: ["title", "actors", "genre"], threshold: 0.3 }),
    h = (x) => {
      if ((r(x), x.trim() === "")) i(xt);
      else {
        const S = c.search(x);
        i(S.map((j) => j.item));
      }
    },
    w = (x) => {
      o(`/info/${x}`);
    };
  return E.jsxs("section", {
    className:
      "flex flex-col md:flex-row items-center justify-between w-full p-4 bg-black",
    children: [
      E.jsxs("div", {
        className: "relative md:order-1 flex md:flex-none items-center m-2",
        children: [
          E.jsx("img", {
            "aria-label": "icon",
            src: tv,
            onClick: d,
            className: "w-[2rem] h-[2.5rem] cursor-pointer",
            alt: "Dropdown Icon",
          }),
          E.jsx("div", {
            "aria-label": "dropdown",
            className: `z-[1] w-[10rem] absolute left-10 top-0.5 bg-red-700 border border-black rounded-lg shadow-lg transition-all duration-100 ease-in-out origin-top transform ${e ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"}`,
            style: { transformOrigin: "top" },
            children: E.jsxs("ul", {
              className: "flex flex-col",
              children: [
                E.jsx("li", {
                  className:
                    "text-white font-raleway border border-black cursor-pointer hover:text-blue-300 hover:bg-gray-600 hover:shadow-md p-2 rounded",
                  onClick: a,
                  children: "Categories",
                }),
                E.jsx("li", {
                  className:
                    "text-white font-raleway border border-black cursor-pointer hover:text-blue-300 hover:bg-gray-600 hover:shadow-md p-2 rounded",
                  onClick: s,
                  children: "Bookmarks",
                }),
                E.jsx("li", {
                  className:
                    "text-white font-raleway border border-black cursor-pointer hover:text-blue-300 hover:bg-gray-600 hover:shadow-md p-2 rounded",
                  children: "Profile",
                }),
                E.jsx("li", {
                  className:
                    "text-white font-raleway border border-black cursor-pointer hover:text-blue-300 hover:bg-gray-600 hover:shadow-md p-2 rounded",
                  children: "Settings",
                }),
              ],
            }),
          }),
        ],
      }),
      E.jsx("div", {
        className:
          "flex justify-center md:justify-start md:order-3 w-full md:w-auto",
        children: E.jsx("img", {
          src: nv,
          alt: "Notflix Logo",
          className: "w-[18rem] h-auto md:w-[20rem]",
        }),
      }),
      E.jsxs("section", {
        className: "w-full md:w-auto mt-4 md:mt-0 md:order-2",
        children: [
          E.jsx("input", {
            role: "searchbox",
            className:
              "w-full md:w-[15rem] bg-white text-black border rounded-3xl p-2",
            placeholder: "Search",
            value: n,
            onChange: (x) => h(x.target.value),
          }),
          E.jsxs("ul", {
            children: [
              n &&
                l.length > 0 &&
                E.jsx("ul", {
                  className:
                    "z-[1] absolute bg-black border-white border rounded-lg justify-center mt-2 p-2 w-full sm:w-[30rem] md:w-[40rem] lg:w-[50rem] xl:w-[60rem] flex flex-wrap",
                  children: l.map((x) =>
                    E.jsxs(
                      "div",
                      {
                        className:
                          "border rounded border-white bg-red-800 p-2 flex flex-col place-items-center m-2 w-full md:w-[16rem]",
                        children: [
                          E.jsx("img", {
                            className:
                              "w-[6rem] h-[9rem] md:w-[10rem] md:h-[16rem]",
                            src: x.thumbnail,
                            alt: x.title,
                          }),
                          E.jsxs("p", {
                            className: "text-xl",
                            children: [x.year, " / ", x.rating],
                          }),
                          E.jsxs("article", {
                            children: [
                              E.jsx("p", {
                                className: "text-white-600",
                                children: x.title,
                              }),
                              E.jsx("p", {
                                className: "text-green-200",
                                children: x.genre,
                              }),
                            ],
                          }),
                          E.jsx("section", {
                            className: "flex place-items-center",
                            children: E.jsx("button", {
                              "aria-label": "learn-more-button",
                              onClick: () => w(x.title),
                              className:
                                "bg-gray-800 hover:bg-gray-500 text-white font-semibold py-2 px-4 m-1 border border-gray-400 rounded shadow",
                              children: "Learn more",
                            }),
                          }),
                        ],
                      },
                      x.title,
                    ),
                  ),
                }),
              n &&
                l.length === 0 &&
                E.jsx("ul", {
                  className:
                    "absolute bg-black border-red-600 rounded-lg mt-2 p-2",
                  children: E.jsx("li", { children: "No movies found" }),
                }),
            ],
          }),
        ],
      }),
      E.jsxs("section", {
        className: "flex space-x-4 mt-4 md:mt-0 md:order-4",
        children: [
          E.jsx("h2", {
            onClick: u,
            className: "text-gray-400 cursor-pointer hover:text-blue-300",
            children: "Home",
          }),
          E.jsx("h2", {
            "aria-label": "Categories Header",
            onClick: a,
            className: "text-gray-400 cursor-pointer hover:text-blue-300",
            children: "Categories",
          }),
          E.jsx("h2", {
            onClick: s,
            className: "text-gray-400 cursor-pointer hover:text-blue-300",
            children: "Bookmarks",
          }),
        ],
      }),
    ],
  });
}
function _l() {
  return E.jsxs("footer", {
    className:
      "w-full bg-black p-4 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center",
    children: [
      E.jsxs("section", {
        className:
          "flex flex-col items-center md:items-start text-center md:text-left mb-4 md:mb-0",
        children: [
          E.jsx("p", {
            className: "text-xl mb-2 text-white",
            children: "Questions?",
          }),
          E.jsxs("ul", {
            className: "flex flex-col space-y-2",
            children: [
              E.jsx("li", {
                className: "text-gray-400 cursor-pointer hover:text-blue-300",
                children: "FAQ",
              }),
              E.jsx("li", {
                className: "text-gray-400 cursor-pointer hover:text-blue-300",
                children: "Media Center",
              }),
              E.jsx("li", {
                className: "text-gray-400 cursor-pointer hover:text-blue-300",
                children: "Buy Gift Cards",
              }),
              E.jsx("li", {
                className: "text-gray-400 cursor-pointer hover:text-blue-300",
                children: "Cookie Preferences",
              }),
            ],
          }),
        ],
      }),
      E.jsx("section", {
        className:
          "flex flex-coljusti items-center text-center md:text-left mb-4 md:mb-0",
        children: E.jsx("p", {
          className: "text-2xl text-white mb-2",
          children: "© 2024 Notflix",
        }),
      }),
      E.jsxs("section", {
        className:
          "flex flex-col items-center md:items-start text-center md:text-left mb-4 md:mb-0",
        children: [
          E.jsx("p", {
            className: "text-xl mb-2 text-white",
            children: "Contact",
          }),
          E.jsxs("ul", {
            className: "flex flex-col space-y-2",
            children: [
              E.jsx("li", {
                className: "text-gray-400 cursor-pointer hover:text-blue-300",
                children: "info.Notflix@gmail.com",
              }),
              E.jsx("li", {
                className: "text-gray-400 cursor-pointer hover:text-blue-300",
                children: "Chat With Us",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
var Ph = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  Bc = rn.createContext && rn.createContext(Ph),
  Qv = ["attr", "size", "title"];
function Hv(e, t) {
  if (e == null) return {};
  var n = Yv(e, t),
    r,
    l;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (l = 0; l < i.length; l++)
      (r = i[l]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function Yv(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function Wi() {
  return (
    (Wi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Wi.apply(this, arguments)
  );
}
function Vc(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (l) {
        return Object.getOwnPropertyDescriptor(e, l).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function $i(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Vc(Object(n), !0).forEach(function (r) {
          Xv(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Vc(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return e;
}
function Xv(e, t, n) {
  return (
    (t = Gv(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Gv(e) {
  var t = Kv(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Kv(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Dh(e) {
  return (
    e &&
    e.map((t, n) =>
      rn.createElement(t.tag, $i({ key: n }, t.attr), Dh(t.child)),
    )
  );
}
function zh(e) {
  return (t) =>
    rn.createElement(Zv, Wi({ attr: $i({}, e.attr) }, t), Dh(e.child));
}
function Zv(e) {
  var t = (n) => {
    var { attr: r, size: l, title: i } = e,
      o = Hv(e, Qv),
      a = l || n.size || "1em",
      s;
    return (
      n.className && (s = n.className),
      e.className && (s = (s ? s + " " : "") + e.className),
      rn.createElement(
        "svg",
        Wi(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          r,
          o,
          {
            className: s,
            style: $i($i({ color: e.color || n.color }, n.style), e.style),
            height: a,
            width: a,
            xmlns: "http://www.w3.org/2000/svg",
          },
        ),
        i && rn.createElement("title", null, i),
        e.children,
      )
    );
  };
  return Bc !== void 0
    ? rn.createElement(Bc.Consumer, null, (n) => t(n))
    : t(Ph);
}
function Jv(e) {
  return zh({
    tag: "svg",
    attr: { fill: "currentColor", viewBox: "0 0 16 16" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z",
        },
        child: [],
      },
    ],
  })(e);
}
function bv(e) {
  return zh({
    tag: "svg",
    attr: { fill: "currentColor", viewBox: "0 0 16 16" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z",
        },
        child: [],
      },
    ],
  })(e);
}
const Oh = C.createContext(null);
function qv({ children: e }) {
  const [t, n] = C.useState([]);
  return (
    C.useEffect(() => {
      console.log("fetching favorites");
      const r = localStorage.getItem("faves");
      if (r)
        try {
          const l = JSON.parse(r);
          n(l);
        } catch (l) {
          console.error("Failed to parse faves from localStorage:", l);
        }
    }, []),
    E.jsx(E.Fragment, {
      children: E.jsx(Oh.Provider, {
        value: { faves: t, setFaves: n },
        children: e,
      }),
    })
  );
}
const Qs = () => C.useContext(Oh);
function Hs({ movie: e }) {
  const { faves: t, setFaves: n } = Qs(),
    r = t.includes(e);
  C.useEffect(() => {
    try {
      localStorage.setItem("faves", JSON.stringify(t));
    } catch (i) {
      console.log(i);
    }
  }, [t]);
  function l() {
    if (t.some((o) => o.title === e.title)) {
      const o = t.filter((a) => a.title !== e.title);
      n(o);
    } else n((o) => [...o, e]);
  }
  return E.jsx("div", {
    className: "absolute bottom--1 right-2",
    children: E.jsx("button", {
      onClick: l,
      className: `text-xl bg-transparent ${r ? "text-yellow-500" : "text-gray-300"} transition-all`,
      "aria-label": r ? "Remove Bookmark" : "Add Bookmark",
      children: E.jsx("i", {
        className: r ? "fas fa-bookmark" : "far fa-bookmark",
      }),
    }),
  });
}
function Ys({ data: e, labelledBy: t }) {
  const [n, r] = C.useState(0),
    l = kr(),
    i = () => {
      const u = n === e.length - 1 ? 0 : n + 1;
      r(u);
    },
    o = () => {
      const u = n === 0 ? e.length - 1 : n - 1;
      r(u);
    },
    a = (s) => {
      l(`/info/${s}`);
    };
  return E.jsx("div", {
    className: "relative",
    children: E.jsxs("section", {
      className:
        "z-[-1] flex justify-center items-center w-full overflow-hidden",
      "aria-label": t,
      children: [
        E.jsx(Jv, {
          className:
            "absolute left-4 w-8 h-8 text-white rounded-full shadow-lg hover:cursor-pointer z-10",
          onClick: o,
        }),
        E.jsx("div", {
          className: "flex transition-transform duration-500",
          style: { transform: `translateX(-${n * 5}%)` },
          children: e.map((s, u) =>
            E.jsxs(
              "div",
              {
                className:
                  "flex-col flex-shrink-0 w-[225px] h-[330px] p-[7px] relative",
                children: [
                  E.jsx("img", {
                    src: s.thumbnail,
                    alt: s.title,
                    className:
                      "w-full h-[90%] object-contain rounded-lg shadow-md",
                    onClick: () => a(s.title),
                  }),
                  E.jsxs("section", {
                    className:
                      "h-[35px] w-[95%] flex justify-between items-center ml-2",
                    children: [
                      E.jsx("p", {
                        className:
                          "ml-2 text-red-600 text-xl font-medium justify-self-start",
                        children: s.rating,
                      }),
                      E.jsx("h2", {
                        className: " text-xl font-semibold w-[50px] mr-[35%]",
                        children: s.year,
                      }),
                      E.jsx(Hs, { movie: s }),
                    ],
                  }),
                ],
              },
              u,
            ),
          ),
        }),
        E.jsx(bv, {
          className:
            "absolute right-4 w-8 h-8 text-white rounded-full shadow-lg hover:cursor-pointer z-10",
          onClick: i,
        }),
      ],
    }),
  });
}
function ey() {
  const e = xt.filter((t) => t.isTrending);
  return !xt || !Array.isArray(xt)
    ? E.jsx("h1", { children: "Loading..." })
    : E.jsx("div", {
        children: E.jsx(Ys, { data: e, labelledBy: "Trending" }),
      });
}
function ty() {
  const e = (n, r) =>
    n
      .filter((o) => !o.isTrending)
      .sort(() => Math.random() - 0.5)
      .slice(0, r);
  if (!xt || !Array.isArray(xt)) return E.jsx("h1", { children: "Loading..." });
  const t = e(xt, 10);
  return E.jsx("div", {
    children: E.jsx(Ys, { data: t, labelledBy: "Recommended" }),
  });
}
function ny() {
  const { faves: e } = Qs();
  return !e || !Array.isArray(e)
    ? E.jsx("h1", { children: "Loading..." })
    : E.jsx("div", {
        children: E.jsx(Ys, { data: e, labelledBy: "bookmarked-carousel" }),
      });
}
function ry() {
  const e = kr(),
    t = () => {
      e("/favs");
    };
  return E.jsx(E.Fragment, {
    children: E.jsxs("main", {
      children: [
        E.jsx(El, {}),
        E.jsxs("section", {
          className: "h-full w-full px-4 sm:px-8 md:px-16 lg:px-24 py-6",
          children: [
            E.jsxs("section", {
              className: "mb-8",
              children: [
                E.jsx("h1", {
                  className: "text-2xl sm:text-3xl md:text-4xl font-bold mb-4",
                  children: "Trending",
                }),
                E.jsx(ey, {}),
              ],
            }),
            E.jsxs("section", {
              className: "mb-8",
              children: [
                E.jsx("h1", {
                  className: "text-2xl sm:text-3xl md:text-4xl font-bold mb-4",
                  children: "Recommended",
                }),
                E.jsx(ty, {}),
              ],
            }),
            E.jsxs("section", {
              className: "mb-8",
              children: [
                E.jsx("h1", {
                  onClick: t,
                  className:
                    "text-2xl sm:text-3xl md:text-4xl font-bold mb-4 hover:underline",
                  children: "Bookmarks",
                }),
                E.jsx(ny, {}),
              ],
            }),
          ],
        }),
        E.jsx(_l, {}),
      ],
    }),
  });
}
function ly() {
  const { faves: e } = Qs(),
    t = kr(),
    n = (r) => {
      t(`/info/${r}`);
    };
  return E.jsxs("div", {
    className: "",
    children: [
      E.jsx(El, {}),
      E.jsx("div", {
        className: "py-2",
        children: E.jsx("h1", {
          className: "text-2xl sm:text-3xl md:text-4xl font-bold mb-4",
          children: "Bookmarks",
        }),
      }),
      E.jsx("div", {
        className: "flex justify-center min-h-[27rem]",
        children: E.jsx("div", {
          className:
            "grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 px-2 py-4",
          children: e.map((r, l) =>
            E.jsxs(
              "div",
              {
                className:
                  "flex-col flex-shrink-0 w-[190px] h-[330px] p-[7px] relative",
                children: [
                  E.jsx("img", {
                    src: r.thumbnail,
                    alt: r.title,
                    className:
                      "w-full h-[80%] object-contain rounded-lg shadow-md",
                    onClick: () => n(r.title),
                  }),
                  E.jsxs("section", {
                    className:
                      "h-[35px] w-[95%] flex justify-between items-center ml-2",
                    children: [
                      E.jsx("p", {
                        className:
                          "ml-2 text-red-600 text-xl font-medium justify-self-start",
                        children: r.rating,
                      }),
                      E.jsx("h2", {
                        className: " text-xl font-semibold w-[50px] mr-[35%]",
                        children: r.year,
                      }),
                      E.jsx(Hs, { movie: r }),
                    ],
                  }),
                ],
              },
              l,
            ),
          ),
        }),
      }),
      E.jsx(_l, {}),
    ],
  });
}
function iy() {
  const e = kr(),
    t = [
      {
        name: "Action",
        image:
          "https://miro.medium.com/v2/resize:fit:633/1*hZ02u2U2k8K4nc8l2zA2pQ.jpeg",
      },
      {
        name: "Drama",
        image:
          "https://media.glamour.com/photos/5ec2e91dccfbc8c1a8fe8cbf/master/w_320%2Cc_limit/MSDTITA_FE057.jpg",
      },
      {
        name: "Comedy",
        image:
          "https://media.gq-magazine.co.uk/photos/65e99a7c6c03b53bb6ca3042/4:3/w_900,h_675,c_limit/Best-comedy-films.jpg",
      },
      {
        name: "Adventure",
        image:
          "https://nofilmschool.com/media-library/adventure-genre.png?id=34067601&width=1245&height=700&quality=90&coordinates=64%2C0%2C65%2C0",
      },
      {
        name: "Western",
        image:
          "https://pyxis.nymag.com/v1/imgs/554/69b/97ae591b1ea1675646e7f1f45a670a5e02-greatest-westerns-updated-dec-2020-lede-.rhorizontal.w1100.jpg",
      },
      {
        name: "Crime",
        image:
          "https://nofilmschool.com/media-library/defining-the-true-crime-genre-in-movies-and-tv-shows.jpg?id=34049197&width=800&quality=90",
      },
      {
        name: "Romance",
        image: "https://i.ytimg.com/vi/HVr6qMh1USY/maxresdefault.jpg",
      },
      {
        name: "War",
        image:
          "https://parade.com/.image/t_share/MTkwNTgwODc1MzUyMDI0MTg5/1917.jpg",
      },
      {
        name: "Thriller",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Hitchcock_Hedren_Marnie_Publicity_Photo.jpg/300px-Hitchcock_Hedren_Marnie_Publicity_Photo.jpg",
      },
      {
        name: "Sci-Fi",
        image:
          "https://parade.com/.image/t_share/MTkwNTgwODczNzM5ODM5MzU2/life.jpg",
      },
      {
        name: "History",
        image:
          "https://miro.medium.com/v2/resize:fit:1400/0*xBkxfSKhRe8U5EDP.jpg",
      },
    ],
    n = (r) => {
      e(`/genre/${r}`);
    };
  return E.jsxs("div", {
    children: [
      E.jsx(El, {}),
      E.jsx("div", {
        className:
          "grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 px-4 py-8",
        children: t.map((r) =>
          E.jsx(
            "section",
            {
              className: `h-56 sm:h-80 w-full bg-cover bg-center rounded-lg shadow-lg text-white flex items-center justify-center 
             font-bold text-xl sm:text-2xl md:text-3xl hover:cursor-pointer hover:brightness-75 hover:scale-105 transition duration-300 ease-in-out`,
              style: { backgroundImage: `url(${r.image})` },
              onClick: () => n(r.name),
              children: E.jsx("h2", { children: r.name }),
            },
            r.name,
          ),
        ),
      }),
      E.jsx(_l, {}),
    ],
  });
}
const oy = "modulepreload",
  ay = function (e) {
    return "/Netflix-wanna-be/" + e;
  },
  Wc = {},
  sy = function (t, n, r) {
    let l = Promise.resolve();
    if (n && n.length > 0) {
      document.getElementsByTagName("link");
      const o = document.querySelector("meta[property=csp-nonce]"),
        a =
          (o == null ? void 0 : o.nonce) ||
          (o == null ? void 0 : o.getAttribute("nonce"));
      l = Promise.allSettled(
        n.map((s) => {
          if (((s = ay(s)), s in Wc)) return;
          Wc[s] = !0;
          const u = s.endsWith(".css"),
            d = u ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${s}"]${d}`)) return;
          const c = document.createElement("link");
          if (
            ((c.rel = u ? "stylesheet" : oy),
            u || (c.as = "script"),
            (c.crossOrigin = ""),
            (c.href = s),
            a && c.setAttribute("nonce", a),
            document.head.appendChild(c),
            u)
          )
            return new Promise((h, w) => {
              c.addEventListener("load", h),
                c.addEventListener("error", () =>
                  w(new Error(`Unable to preload CSS for ${s}`)),
                );
            });
        }),
      );
    }
    function i(o) {
      const a = new Event("vite:preloadError", { cancelable: !0 });
      if (((a.payload = o), window.dispatchEvent(a), !a.defaultPrevented))
        throw o;
    }
    return l.then((o) => {
      for (const a of o || []) a.status === "rejected" && i(a.reason);
      return t().catch(i);
    });
  };
function uy() {
  const { title: e } = xh();
  console.log("Title from useParams:", e);
  const [t, n] = C.useState(null),
    [r, l] = C.useState(!0);
  return (
    C.useEffect(() => {
      (async () => {
        try {
          const s = (
            await sy(() => Promise.resolve().then(() => rv), void 0)
          ).default.find(
            (u) =>
              u.title.toLowerCase() === (e == null ? void 0 : e.toLowerCase()),
          );
          console.log("thats the title:", e),
            console.log("Found movie:", s),
            s && n(s);
        } catch (o) {
          console.error("Error loading movies:", o);
        } finally {
          l(!1);
        }
      })();
    }, [e]),
    r
      ? E.jsx("div", { children: "Loading..." })
      : t
        ? E.jsxs("section", {
            className: "min-h-screen bg-black rounded-md p-2 m-2 text-white",
            children: [
              E.jsx(El, {}),
              E.jsxs("div", {
                className:
                  "flex flex-col items-center justify-center w-full max-w-lg mx-auto p-4",
                children: [
                  E.jsx("img", {
                    src: t.thumbnail,
                    alt: t.title,
                    className:
                      "w-full h-auto object-contain rounded-lg shadow-lg shadow-gray-300 mb-4",
                  }),
                  E.jsxs("div", {
                    className: "text-center font-poppins",
                    children: [
                      E.jsx("h1", {
                        className: "text-2xl sm:text-3xl  font-bold mb-2",
                        children: t.title,
                      }),
                      E.jsxs("p", {
                        className: "text-lg sm:text-xl text-gray-400 italic",
                        children: [t.year, " | ", t.rating],
                      }),
                    ],
                  }),
                  E.jsx("div", {
                    className:
                      "bg-gray-800 p-4 rounded-lg w-full mt-4 font-karma relative",
                    children: E.jsxs("div", {
                      className: "flex flex-col mb-3",
                      children: [
                        E.jsxs("p", {
                          className: "text-gray-200",
                          children: [
                            E.jsx("span", {
                              className: "font-bold text-xl",
                              children: "Actors:",
                            }),
                            " ",
                            t.actors.join(", "),
                          ],
                        }),
                        E.jsxs("p", {
                          className: "text-gray-200",
                          children: [
                            E.jsx("span", {
                              className: "font-bold text-xl",
                              children: "Genre:",
                            }),
                            " ",
                            t.genre,
                          ],
                        }),
                        E.jsxs("p", {
                          className: "text-gray-200 mb-6",
                          children: [
                            E.jsx("span", {
                              className: "font-bold text-xl",
                              children: "Synopsis:",
                            }),
                            " ",
                            t.synopsis,
                          ],
                        }),
                        E.jsx("div", {
                          className: "absolute bottom-12 right-2",
                          children: E.jsx(Hs, { movie: t }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              E.jsx(_l, {}),
            ],
          })
        : E.jsx("div", { children: "Movie not found." })
  );
}
const cy = () => {
    const { selectedGenre: e } = xh(),
      t = xt.filter((l) => l.genre.split(", ").includes(e || "")),
      n = kr(),
      r = (l) => {
        n(`/info/${l}`);
      };
    return E.jsxs("div", {
      children: [
        E.jsx(El, {}),
        E.jsxs("h1", {
          className:
            "text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10",
          children: [e, " Movies"],
        }),
        E.jsx("div", {
          className:
            "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4",
          children: t.map((l) =>
            E.jsxs(
              "div",
              {
                className:
                  "relative bg-cover bg-center rounded-lg shadow-lg hover:cursor-pointer hover:brightness-75 transition duration-300 ease-in-out",
                onClick: () => r(l.title),
                children: [
                  E.jsx("img", {
                    src: l.thumbnail,
                    alt: l.title,
                    className: "md:h-[46rem] w-full object-cover rounded-t-lg",
                  }),
                  E.jsx("h2", {
                    className: "text-center text-lg sm:text-xl font-bold mt-2",
                    children: l.title,
                  }),
                  E.jsx("hr", { className: "border-gray-500" }),
                ],
              },
              l.title,
            ),
          ),
        }),
        E.jsx(_l, {}),
      ],
    });
  },
  dy = $0([
    { path: "/", element: E.jsx(ry, {}) },
    { path: "/favs", element: E.jsx(ly, {}) },
    { path: "/categories", element: E.jsx(iy, {}) },
    { path: "/info/:title", element: E.jsx(uy, {}) },
    { path: "/genre/:selectedGenre", element: E.jsx(cy, {}) },
  ]);
lh(document.getElementById("root")).render(
  E.jsx(C.StrictMode, {
    children: E.jsx(qv, { children: E.jsx(b0, { router: dy }) }),
  }),
);
