function Bp(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const s = Object.getOwnPropertyDescriptor(r, i);
          s &&
            Object.defineProperty(
              e,
              i,
              s.get ? s : { enumerable: !0, get: () => r[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const s of i)
      if (s.type === "childList")
        for (const l of s.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && r(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const s = {};
    return (
      i.integrity && (s.integrity = i.integrity),
      i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const s = n(i);
    fetch(i.href, s);
  }
})();
function wc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Sc = { exports: {} },
  ds = {},
  xc = { exports: {} },
  B = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Wr = Symbol.for("react.element"),
  $p = Symbol.for("react.portal"),
  Up = Symbol.for("react.fragment"),
  Vp = Symbol.for("react.strict_mode"),
  bp = Symbol.for("react.profiler"),
  Hp = Symbol.for("react.provider"),
  Wp = Symbol.for("react.context"),
  Gp = Symbol.for("react.forward_ref"),
  Xp = Symbol.for("react.suspense"),
  Yp = Symbol.for("react.memo"),
  Kp = Symbol.for("react.lazy"),
  Ia = Symbol.iterator;
function Qp(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ia && e[Ia]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Ec = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Tc = Object.assign,
  Cc = {};
function Gn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Cc),
    (this.updater = n || Ec);
}
Gn.prototype.isReactComponent = {};
Gn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Gn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Pc() {}
Pc.prototype = Gn.prototype;
function Co(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Cc),
    (this.updater = n || Ec);
}
var Po = (Co.prototype = new Pc());
Po.constructor = Co;
Tc(Po, Gn.prototype);
Po.isPureReactComponent = !0;
var za = Array.isArray,
  kc = Object.prototype.hasOwnProperty,
  ko = { current: null },
  Nc = { key: !0, ref: !0, __self: !0, __source: !0 };
function _c(e, t, n) {
  var r,
    i = {},
    s = null,
    l = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (l = t.ref),
    t.key !== void 0 && (s = "" + t.key),
    t))
      kc.call(t, r) && !Nc.hasOwnProperty(r) && (i[r] = t[r]);
  var o = arguments.length - 2;
  if (o === 1) i.children = n;
  else if (1 < o) {
    for (var a = Array(o), u = 0; u < o; u++) a[u] = arguments[u + 2];
    i.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((o = e.defaultProps), o)) i[r] === void 0 && (i[r] = o[r]);
  return {
    $$typeof: Wr,
    type: e,
    key: s,
    ref: l,
    props: i,
    _owner: ko.current,
  };
}
function qp(e, t) {
  return {
    $$typeof: Wr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function No(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Wr;
}
function Jp(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Aa = /\/+/g;
function zs(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Jp("" + e.key)
    : t.toString(36);
}
function Si(e, t, n, r, i) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else
    switch (s) {
      case "string":
      case "number":
        l = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Wr:
          case $p:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (i = i(l)),
      (e = r === "" ? "." + zs(l, 0) : r),
      za(i)
        ? ((n = ""),
          e != null && (n = e.replace(Aa, "$&/") + "/"),
          Si(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (No(i) &&
            (i = qp(
              i,
              n +
                (!i.key || (l && l.key === i.key)
                  ? ""
                  : ("" + i.key).replace(Aa, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((l = 0), (r = r === "" ? "." : r + ":"), za(e)))
    for (var o = 0; o < e.length; o++) {
      s = e[o];
      var a = r + zs(s, o);
      l += Si(s, t, n, a, i);
    }
  else if (((a = Qp(e)), typeof a == "function"))
    for (e = a.call(e), o = 0; !(s = e.next()).done; )
      (s = s.value), (a = r + zs(s, o++)), (l += Si(s, t, n, a, i));
  else if (s === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return l;
}
function ti(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Si(e, r, "", "", function (s) {
      return t.call(n, s, i++);
    }),
    r
  );
}
function Zp(e) {
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
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Te = { current: null },
  xi = { transition: null },
  em = {
    ReactCurrentDispatcher: Te,
    ReactCurrentBatchConfig: xi,
    ReactCurrentOwner: ko,
  };
B.Children = {
  map: ti,
  forEach: function (e, t, n) {
    ti(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      ti(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      ti(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!No(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
B.Component = Gn;
B.Fragment = Up;
B.Profiler = bp;
B.PureComponent = Co;
B.StrictMode = Vp;
B.Suspense = Xp;
B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = em;
B.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Tc({}, e.props),
    i = e.key,
    s = e.ref,
    l = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (l = ko.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var o = e.type.defaultProps;
    for (a in t)
      kc.call(t, a) &&
        !Nc.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && o !== void 0 ? o[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    o = Array(a);
    for (var u = 0; u < a; u++) o[u] = arguments[u + 2];
    r.children = o;
  }
  return { $$typeof: Wr, type: e.type, key: i, ref: s, props: r, _owner: l };
};
B.createContext = function (e) {
  return (
    (e = {
      $$typeof: Wp,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Hp, _context: e }),
    (e.Consumer = e)
  );
};
B.createElement = _c;
B.createFactory = function (e) {
  var t = _c.bind(null, e);
  return (t.type = e), t;
};
B.createRef = function () {
  return { current: null };
};
B.forwardRef = function (e) {
  return { $$typeof: Gp, render: e };
};
B.isValidElement = No;
B.lazy = function (e) {
  return { $$typeof: Kp, _payload: { _status: -1, _result: e }, _init: Zp };
};
B.memo = function (e, t) {
  return { $$typeof: Yp, type: e, compare: t === void 0 ? null : t };
};
B.startTransition = function (e) {
  var t = xi.transition;
  xi.transition = {};
  try {
    e();
  } finally {
    xi.transition = t;
  }
};
B.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
B.useCallback = function (e, t) {
  return Te.current.useCallback(e, t);
};
B.useContext = function (e) {
  return Te.current.useContext(e);
};
B.useDebugValue = function () {};
B.useDeferredValue = function (e) {
  return Te.current.useDeferredValue(e);
};
B.useEffect = function (e, t) {
  return Te.current.useEffect(e, t);
};
B.useId = function () {
  return Te.current.useId();
};
B.useImperativeHandle = function (e, t, n) {
  return Te.current.useImperativeHandle(e, t, n);
};
B.useInsertionEffect = function (e, t) {
  return Te.current.useInsertionEffect(e, t);
};
B.useLayoutEffect = function (e, t) {
  return Te.current.useLayoutEffect(e, t);
};
B.useMemo = function (e, t) {
  return Te.current.useMemo(e, t);
};
B.useReducer = function (e, t, n) {
  return Te.current.useReducer(e, t, n);
};
B.useRef = function (e) {
  return Te.current.useRef(e);
};
B.useState = function (e) {
  return Te.current.useState(e);
};
B.useSyncExternalStore = function (e, t, n) {
  return Te.current.useSyncExternalStore(e, t, n);
};
B.useTransition = function () {
  return Te.current.useTransition();
};
B.version = "18.2.0";
xc.exports = B;
var k = xc.exports;
const ee = wc(k),
  tm = Bp({ __proto__: null, default: ee }, [k]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var nm = k,
  rm = Symbol.for("react.element"),
  im = Symbol.for("react.fragment"),
  sm = Object.prototype.hasOwnProperty,
  lm = nm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  om = { key: !0, ref: !0, __self: !0, __source: !0 };
function Oc(e, t, n) {
  var r,
    i = {},
    s = null,
    l = null;
  n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (l = t.ref);
  for (r in t) sm.call(t, r) && !om.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: rm,
    type: e,
    key: s,
    ref: l,
    props: i,
    _owner: lm.current,
  };
}
ds.Fragment = im;
ds.jsx = Oc;
ds.jsxs = Oc;
Sc.exports = ds;
var w = Sc.exports,
  yl = {},
  Lc = { exports: {} },
  Ae = {},
  Mc = { exports: {} },
  Rc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(M, R) {
    var F = M.length;
    M.push(R);
    e: for (; 0 < F; ) {
      var b = (F - 1) >>> 1,
        ne = M[b];
      if (0 < i(ne, R)) (M[b] = R), (M[F] = ne), (F = b);
      else break e;
    }
  }
  function n(M) {
    return M.length === 0 ? null : M[0];
  }
  function r(M) {
    if (M.length === 0) return null;
    var R = M[0],
      F = M.pop();
    if (F !== R) {
      M[0] = F;
      e: for (var b = 0, ne = M.length, vn = ne >>> 1; b < vn; ) {
        var Jt = 2 * (b + 1) - 1,
          Is = M[Jt],
          Zt = Jt + 1,
          ei = M[Zt];
        if (0 > i(Is, F))
          Zt < ne && 0 > i(ei, Is)
            ? ((M[b] = ei), (M[Zt] = F), (b = Zt))
            : ((M[b] = Is), (M[Jt] = F), (b = Jt));
        else if (Zt < ne && 0 > i(ei, F)) (M[b] = ei), (M[Zt] = F), (b = Zt);
        else break e;
      }
    }
    return R;
  }
  function i(M, R) {
    var F = M.sortIndex - R.sortIndex;
    return F !== 0 ? F : M.id - R.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function () {
      return s.now();
    };
  } else {
    var l = Date,
      o = l.now();
    e.unstable_now = function () {
      return l.now() - o;
    };
  }
  var a = [],
    u = [],
    c = 1,
    d = null,
    h = 3,
    g = !1,
    v = !1,
    y = !1,
    x = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(M) {
    for (var R = n(u); R !== null; ) {
      if (R.callback === null) r(u);
      else if (R.startTime <= M)
        r(u), (R.sortIndex = R.expirationTime), t(a, R);
      else break;
      R = n(u);
    }
  }
  function S(M) {
    if (((y = !1), m(M), !v))
      if (n(a) !== null) (v = !0), De(E);
      else {
        var R = n(u);
        R !== null && D(S, R.startTime - M);
      }
  }
  function E(M, R) {
    (v = !1), y && ((y = !1), f(N), (N = -1)), (g = !0);
    var F = h;
    try {
      for (
        m(R), d = n(a);
        d !== null && (!(d.expirationTime > R) || (M && !L()));

      ) {
        var b = d.callback;
        if (typeof b == "function") {
          (d.callback = null), (h = d.priorityLevel);
          var ne = b(d.expirationTime <= R);
          (R = e.unstable_now()),
            typeof ne == "function" ? (d.callback = ne) : d === n(a) && r(a),
            m(R);
        } else r(a);
        d = n(a);
      }
      if (d !== null) var vn = !0;
      else {
        var Jt = n(u);
        Jt !== null && D(S, Jt.startTime - R), (vn = !1);
      }
      return vn;
    } finally {
      (d = null), (h = F), (g = !1);
    }
  }
  var _ = !1,
    T = null,
    N = -1,
    C = 5,
    A = -1;
  function L() {
    return !(e.unstable_now() - A < C);
  }
  function I() {
    if (T !== null) {
      var M = e.unstable_now();
      A = M;
      var R = !0;
      try {
        R = T(!0, M);
      } finally {
        R ? z() : ((_ = !1), (T = null));
      }
    } else _ = !1;
  }
  var z;
  if (typeof p == "function")
    z = function () {
      p(I);
    };
  else if (typeof MessageChannel < "u") {
    var H = new MessageChannel(),
      ce = H.port2;
    (H.port1.onmessage = I),
      (z = function () {
        ce.postMessage(null);
      });
  } else
    z = function () {
      x(I, 0);
    };
  function De(M) {
    (T = M), _ || ((_ = !0), z());
  }
  function D(M, R) {
    N = x(function () {
      M(e.unstable_now());
    }, R);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (M) {
      M.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || g || ((v = !0), De(E));
    }),
    (e.unstable_forceFrameRate = function (M) {
      0 > M || 125 < M
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (C = 0 < M ? Math.floor(1e3 / M) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (M) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var R = 3;
          break;
        default:
          R = h;
      }
      var F = h;
      h = R;
      try {
        return M();
      } finally {
        h = F;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (M, R) {
      switch (M) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          M = 3;
      }
      var F = h;
      h = M;
      try {
        return R();
      } finally {
        h = F;
      }
    }),
    (e.unstable_scheduleCallback = function (M, R, F) {
      var b = e.unstable_now();
      switch (
        (typeof F == "object" && F !== null
          ? ((F = F.delay), (F = typeof F == "number" && 0 < F ? b + F : b))
          : (F = b),
        M)
      ) {
        case 1:
          var ne = -1;
          break;
        case 2:
          ne = 250;
          break;
        case 5:
          ne = 1073741823;
          break;
        case 4:
          ne = 1e4;
          break;
        default:
          ne = 5e3;
      }
      return (
        (ne = F + ne),
        (M = {
          id: c++,
          callback: R,
          priorityLevel: M,
          startTime: F,
          expirationTime: ne,
          sortIndex: -1,
        }),
        F > b
          ? ((M.sortIndex = F),
            t(u, M),
            n(a) === null &&
              M === n(u) &&
              (y ? (f(N), (N = -1)) : (y = !0), D(S, F - b)))
          : ((M.sortIndex = ne), t(a, M), v || g || ((v = !0), De(E))),
        M
      );
    }),
    (e.unstable_shouldYield = L),
    (e.unstable_wrapCallback = function (M) {
      var R = h;
      return function () {
        var F = h;
        h = R;
        try {
          return M.apply(this, arguments);
        } finally {
          h = F;
        }
      };
    });
})(Rc);
Mc.exports = Rc;
var am = Mc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var jc = k,
  ze = am;
function O(e) {
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
var Ic = new Set(),
  Cr = {};
function hn(e, t) {
  Fn(e, t), Fn(e + "Capture", t);
}
function Fn(e, t) {
  for (Cr[e] = t, e = 0; e < t.length; e++) Ic.add(t[e]);
}
var St = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  wl = Object.prototype.hasOwnProperty,
  um =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Fa = {},
  Da = {};
function cm(e) {
  return wl.call(Da, e)
    ? !0
    : wl.call(Fa, e)
    ? !1
    : um.test(e)
    ? (Da[e] = !0)
    : ((Fa[e] = !0), !1);
}
function dm(e, t, n, r) {
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
function fm(e, t, n, r) {
  if (t === null || typeof t > "u" || dm(e, t, n, r)) return !0;
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
function Ce(e, t, n, r, i, s, l) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = l);
}
var ge = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ge[e] = new Ce(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ge[t] = new Ce(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ge[e] = new Ce(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ge[e] = new Ce(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ge[e] = new Ce(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ge[e] = new Ce(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ge[e] = new Ce(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ge[e] = new Ce(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ge[e] = new Ce(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var _o = /[\-:]([a-z])/g;
function Oo(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(_o, Oo);
    ge[t] = new Ce(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(_o, Oo);
    ge[t] = new Ce(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(_o, Oo);
  ge[t] = new Ce(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ge[e] = new Ce(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ge.xlinkHref = new Ce(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ge[e] = new Ce(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Lo(e, t, n, r) {
  var i = ge.hasOwnProperty(t) ? ge[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (fm(t, n, i, r) && (n = null),
    r || i === null
      ? cm(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ct = jc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ni = Symbol.for("react.element"),
  wn = Symbol.for("react.portal"),
  Sn = Symbol.for("react.fragment"),
  Mo = Symbol.for("react.strict_mode"),
  Sl = Symbol.for("react.profiler"),
  zc = Symbol.for("react.provider"),
  Ac = Symbol.for("react.context"),
  Ro = Symbol.for("react.forward_ref"),
  xl = Symbol.for("react.suspense"),
  El = Symbol.for("react.suspense_list"),
  jo = Symbol.for("react.memo"),
  Nt = Symbol.for("react.lazy"),
  Fc = Symbol.for("react.offscreen"),
  Ba = Symbol.iterator;
function Zn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ba && e[Ba]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var q = Object.assign,
  As;
function ar(e) {
  if (As === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      As = (t && t[1]) || "";
    }
  return (
    `
` +
    As +
    e
  );
}
var Fs = !1;
function Ds(e, t) {
  if (!e || Fs) return "";
  Fs = !0;
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
        var i = u.stack.split(`
`),
          s = r.stack.split(`
`),
          l = i.length - 1,
          o = s.length - 1;
        1 <= l && 0 <= o && i[l] !== s[o];

      )
        o--;
      for (; 1 <= l && 0 <= o; l--, o--)
        if (i[l] !== s[o]) {
          if (l !== 1 || o !== 1)
            do
              if ((l--, o--, 0 > o || i[l] !== s[o])) {
                var a =
                  `
` + i[l].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= l && 0 <= o);
          break;
        }
    }
  } finally {
    (Fs = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? ar(e) : "";
}
function pm(e) {
  switch (e.tag) {
    case 5:
      return ar(e.type);
    case 16:
      return ar("Lazy");
    case 13:
      return ar("Suspense");
    case 19:
      return ar("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Ds(e.type, !1)), e;
    case 11:
      return (e = Ds(e.type.render, !1)), e;
    case 1:
      return (e = Ds(e.type, !0)), e;
    default:
      return "";
  }
}
function Tl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Sn:
      return "Fragment";
    case wn:
      return "Portal";
    case Sl:
      return "Profiler";
    case Mo:
      return "StrictMode";
    case xl:
      return "Suspense";
    case El:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Ac:
        return (e.displayName || "Context") + ".Consumer";
      case zc:
        return (e._context.displayName || "Context") + ".Provider";
      case Ro:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case jo:
        return (
          (t = e.displayName || null), t !== null ? t : Tl(e.type) || "Memo"
        );
      case Nt:
        (t = e._payload), (e = e._init);
        try {
          return Tl(e(t));
        } catch {}
    }
  return null;
}
function mm(e) {
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
      return Tl(t);
    case 8:
      return t === Mo ? "StrictMode" : "Mode";
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
function Wt(e) {
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
function Dc(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function hm(e) {
  var t = Dc(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      s = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (l) {
          (r = "" + l), s.call(this, l);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (l) {
          r = "" + l;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function ri(e) {
  e._valueTracker || (e._valueTracker = hm(e));
}
function Bc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Dc(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Ai(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Cl(e, t) {
  var n = t.checked;
  return q({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function $a(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Wt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function $c(e, t) {
  (t = t.checked), t != null && Lo(e, "checked", t, !1);
}
function Pl(e, t) {
  $c(e, t);
  var n = Wt(t.value),
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
    ? kl(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && kl(e, t.type, Wt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Ua(e, t, n) {
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
function kl(e, t, n) {
  (t !== "number" || Ai(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var ur = Array.isArray;
function Mn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Wt(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Nl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(O(91));
  return q({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Va(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(O(92));
      if (ur(n)) {
        if (1 < n.length) throw Error(O(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Wt(n) };
}
function Uc(e, t) {
  var n = Wt(t.value),
    r = Wt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function ba(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Vc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function _l(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Vc(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var ii,
  bc = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        ii = ii || document.createElement("div"),
          ii.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = ii.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Pr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var pr = {
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
  gm = ["Webkit", "ms", "Moz", "O"];
Object.keys(pr).forEach(function (e) {
  gm.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (pr[t] = pr[e]);
  });
});
function Hc(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (pr.hasOwnProperty(e) && pr[e])
    ? ("" + t).trim()
    : t + "px";
}
function Wc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = Hc(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var vm = q(
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
  }
);
function Ol(e, t) {
  if (t) {
    if (vm[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(O(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(O(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(O(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(O(62));
  }
}
function Ll(e, t) {
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
var Ml = null;
function Io(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Rl = null,
  Rn = null,
  jn = null;
function Ha(e) {
  if ((e = Yr(e))) {
    if (typeof Rl != "function") throw Error(O(280));
    var t = e.stateNode;
    t && ((t = gs(t)), Rl(e.stateNode, e.type, t));
  }
}
function Gc(e) {
  Rn ? (jn ? jn.push(e) : (jn = [e])) : (Rn = e);
}
function Xc() {
  if (Rn) {
    var e = Rn,
      t = jn;
    if (((jn = Rn = null), Ha(e), t)) for (e = 0; e < t.length; e++) Ha(t[e]);
  }
}
function Yc(e, t) {
  return e(t);
}
function Kc() {}
var Bs = !1;
function Qc(e, t, n) {
  if (Bs) return e(t, n);
  Bs = !0;
  try {
    return Yc(e, t, n);
  } finally {
    (Bs = !1), (Rn !== null || jn !== null) && (Kc(), Xc());
  }
}
function kr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = gs(n);
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
  if (n && typeof n != "function") throw Error(O(231, t, typeof n));
  return n;
}
var jl = !1;
if (St)
  try {
    var er = {};
    Object.defineProperty(er, "passive", {
      get: function () {
        jl = !0;
      },
    }),
      window.addEventListener("test", er, er),
      window.removeEventListener("test", er, er);
  } catch {
    jl = !1;
  }
function ym(e, t, n, r, i, s, l, o, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var mr = !1,
  Fi = null,
  Di = !1,
  Il = null,
  wm = {
    onError: function (e) {
      (mr = !0), (Fi = e);
    },
  };
function Sm(e, t, n, r, i, s, l, o, a) {
  (mr = !1), (Fi = null), ym.apply(wm, arguments);
}
function xm(e, t, n, r, i, s, l, o, a) {
  if ((Sm.apply(this, arguments), mr)) {
    if (mr) {
      var u = Fi;
      (mr = !1), (Fi = null);
    } else throw Error(O(198));
    Di || ((Di = !0), (Il = u));
  }
}
function gn(e) {
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
function qc(e) {
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
function Wa(e) {
  if (gn(e) !== e) throw Error(O(188));
}
function Em(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = gn(e)), t === null)) throw Error(O(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var s = i.alternate;
    if (s === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === s.child) {
      for (s = i.child; s; ) {
        if (s === n) return Wa(i), e;
        if (s === r) return Wa(i), t;
        s = s.sibling;
      }
      throw Error(O(188));
    }
    if (n.return !== r.return) (n = i), (r = s);
    else {
      for (var l = !1, o = i.child; o; ) {
        if (o === n) {
          (l = !0), (n = i), (r = s);
          break;
        }
        if (o === r) {
          (l = !0), (r = i), (n = s);
          break;
        }
        o = o.sibling;
      }
      if (!l) {
        for (o = s.child; o; ) {
          if (o === n) {
            (l = !0), (n = s), (r = i);
            break;
          }
          if (o === r) {
            (l = !0), (r = s), (n = i);
            break;
          }
          o = o.sibling;
        }
        if (!l) throw Error(O(189));
      }
    }
    if (n.alternate !== r) throw Error(O(190));
  }
  if (n.tag !== 3) throw Error(O(188));
  return n.stateNode.current === n ? e : t;
}
function Jc(e) {
  return (e = Em(e)), e !== null ? Zc(e) : null;
}
function Zc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Zc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var ed = ze.unstable_scheduleCallback,
  Ga = ze.unstable_cancelCallback,
  Tm = ze.unstable_shouldYield,
  Cm = ze.unstable_requestPaint,
  te = ze.unstable_now,
  Pm = ze.unstable_getCurrentPriorityLevel,
  zo = ze.unstable_ImmediatePriority,
  td = ze.unstable_UserBlockingPriority,
  Bi = ze.unstable_NormalPriority,
  km = ze.unstable_LowPriority,
  nd = ze.unstable_IdlePriority,
  fs = null,
  st = null;
function Nm(e) {
  if (st && typeof st.onCommitFiberRoot == "function")
    try {
      st.onCommitFiberRoot(fs, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var qe = Math.clz32 ? Math.clz32 : Lm,
  _m = Math.log,
  Om = Math.LN2;
function Lm(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((_m(e) / Om) | 0)) | 0;
}
var si = 64,
  li = 4194304;
function cr(e) {
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
function $i(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    s = e.pingedLanes,
    l = n & 268435455;
  if (l !== 0) {
    var o = l & ~i;
    o !== 0 ? (r = cr(o)) : ((s &= l), s !== 0 && (r = cr(s)));
  } else (l = n & ~i), l !== 0 ? (r = cr(l)) : s !== 0 && (r = cr(s));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (s = t & -t), i >= s || (i === 16 && (s & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - qe(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function Mm(e, t) {
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
function Rm(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      s = e.pendingLanes;
    0 < s;

  ) {
    var l = 31 - qe(s),
      o = 1 << l,
      a = i[l];
    a === -1
      ? (!(o & n) || o & r) && (i[l] = Mm(o, t))
      : a <= t && (e.expiredLanes |= o),
      (s &= ~o);
  }
}
function zl(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function rd() {
  var e = si;
  return (si <<= 1), !(si & 4194240) && (si = 64), e;
}
function $s(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Gr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - qe(t)),
    (e[t] = n);
}
function jm(e, t) {
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
    var i = 31 - qe(n),
      s = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~s);
  }
}
function Ao(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - qe(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var V = 0;
function id(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var sd,
  Fo,
  ld,
  od,
  ad,
  Al = !1,
  oi = [],
  zt = null,
  At = null,
  Ft = null,
  Nr = new Map(),
  _r = new Map(),
  Ot = [],
  Im =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Xa(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      zt = null;
      break;
    case "dragenter":
    case "dragleave":
      At = null;
      break;
    case "mouseover":
    case "mouseout":
      Ft = null;
      break;
    case "pointerover":
    case "pointerout":
      Nr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      _r.delete(t.pointerId);
  }
}
function tr(e, t, n, r, i, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i],
      }),
      t !== null && ((t = Yr(t)), t !== null && Fo(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function zm(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (zt = tr(zt, e, t, n, r, i)), !0;
    case "dragenter":
      return (At = tr(At, e, t, n, r, i)), !0;
    case "mouseover":
      return (Ft = tr(Ft, e, t, n, r, i)), !0;
    case "pointerover":
      var s = i.pointerId;
      return Nr.set(s, tr(Nr.get(s) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (s = i.pointerId), _r.set(s, tr(_r.get(s) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function ud(e) {
  var t = nn(e.target);
  if (t !== null) {
    var n = gn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = qc(n)), t !== null)) {
          (e.blockedOn = t),
            ad(e.priority, function () {
              ld(n);
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
function Ei(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Fl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Ml = r), n.target.dispatchEvent(r), (Ml = null);
    } else return (t = Yr(n)), t !== null && Fo(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Ya(e, t, n) {
  Ei(e) && n.delete(t);
}
function Am() {
  (Al = !1),
    zt !== null && Ei(zt) && (zt = null),
    At !== null && Ei(At) && (At = null),
    Ft !== null && Ei(Ft) && (Ft = null),
    Nr.forEach(Ya),
    _r.forEach(Ya);
}
function nr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Al ||
      ((Al = !0),
      ze.unstable_scheduleCallback(ze.unstable_NormalPriority, Am)));
}
function Or(e) {
  function t(i) {
    return nr(i, e);
  }
  if (0 < oi.length) {
    nr(oi[0], e);
    for (var n = 1; n < oi.length; n++) {
      var r = oi[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    zt !== null && nr(zt, e),
      At !== null && nr(At, e),
      Ft !== null && nr(Ft, e),
      Nr.forEach(t),
      _r.forEach(t),
      n = 0;
    n < Ot.length;
    n++
  )
    (r = Ot[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Ot.length && ((n = Ot[0]), n.blockedOn === null); )
    ud(n), n.blockedOn === null && Ot.shift();
}
var In = Ct.ReactCurrentBatchConfig,
  Ui = !0;
function Fm(e, t, n, r) {
  var i = V,
    s = In.transition;
  In.transition = null;
  try {
    (V = 1), Do(e, t, n, r);
  } finally {
    (V = i), (In.transition = s);
  }
}
function Dm(e, t, n, r) {
  var i = V,
    s = In.transition;
  In.transition = null;
  try {
    (V = 4), Do(e, t, n, r);
  } finally {
    (V = i), (In.transition = s);
  }
}
function Do(e, t, n, r) {
  if (Ui) {
    var i = Fl(e, t, n, r);
    if (i === null) Qs(e, t, r, Vi, n), Xa(e, r);
    else if (zm(i, e, t, n, r)) r.stopPropagation();
    else if ((Xa(e, r), t & 4 && -1 < Im.indexOf(e))) {
      for (; i !== null; ) {
        var s = Yr(i);
        if (
          (s !== null && sd(s),
          (s = Fl(e, t, n, r)),
          s === null && Qs(e, t, r, Vi, n),
          s === i)
        )
          break;
        i = s;
      }
      i !== null && r.stopPropagation();
    } else Qs(e, t, r, null, n);
  }
}
var Vi = null;
function Fl(e, t, n, r) {
  if (((Vi = null), (e = Io(r)), (e = nn(e)), e !== null))
    if (((t = gn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = qc(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Vi = e), null;
}
function cd(e) {
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
      switch (Pm()) {
        case zo:
          return 1;
        case td:
          return 4;
        case Bi:
        case km:
          return 16;
        case nd:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Mt = null,
  Bo = null,
  Ti = null;
function dd() {
  if (Ti) return Ti;
  var e,
    t = Bo,
    n = t.length,
    r,
    i = "value" in Mt ? Mt.value : Mt.textContent,
    s = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === i[s - r]; r++);
  return (Ti = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Ci(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function ai() {
  return !0;
}
function Ka() {
  return !1;
}
function Fe(e) {
  function t(n, r, i, s, l) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = l),
      (this.currentTarget = null);
    for (var o in e)
      e.hasOwnProperty(o) && ((n = e[o]), (this[o] = n ? n(s) : s[o]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? ai
        : Ka),
      (this.isPropagationStopped = Ka),
      this
    );
  }
  return (
    q(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = ai));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = ai));
      },
      persist: function () {},
      isPersistent: ai,
    }),
    t
  );
}
var Xn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  $o = Fe(Xn),
  Xr = q({}, Xn, { view: 0, detail: 0 }),
  Bm = Fe(Xr),
  Us,
  Vs,
  rr,
  ps = q({}, Xr, {
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
    getModifierState: Uo,
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
        : (e !== rr &&
            (rr && e.type === "mousemove"
              ? ((Us = e.screenX - rr.screenX), (Vs = e.screenY - rr.screenY))
              : (Vs = Us = 0),
            (rr = e)),
          Us);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Vs;
    },
  }),
  Qa = Fe(ps),
  $m = q({}, ps, { dataTransfer: 0 }),
  Um = Fe($m),
  Vm = q({}, Xr, { relatedTarget: 0 }),
  bs = Fe(Vm),
  bm = q({}, Xn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Hm = Fe(bm),
  Wm = q({}, Xn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Gm = Fe(Wm),
  Xm = q({}, Xn, { data: 0 }),
  qa = Fe(Xm),
  Ym = {
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
  Km = {
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
  Qm = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function qm(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Qm[e]) ? !!t[e] : !1;
}
function Uo() {
  return qm;
}
var Jm = q({}, Xr, {
    key: function (e) {
      if (e.key) {
        var t = Ym[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Ci(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Km[e.keyCode] || "Unidentified"
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
    getModifierState: Uo,
    charCode: function (e) {
      return e.type === "keypress" ? Ci(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Ci(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Zm = Fe(Jm),
  eh = q({}, ps, {
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
  Ja = Fe(eh),
  th = q({}, Xr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Uo,
  }),
  nh = Fe(th),
  rh = q({}, Xn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  ih = Fe(rh),
  sh = q({}, ps, {
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
  lh = Fe(sh),
  oh = [9, 13, 27, 32],
  Vo = St && "CompositionEvent" in window,
  hr = null;
St && "documentMode" in document && (hr = document.documentMode);
var ah = St && "TextEvent" in window && !hr,
  fd = St && (!Vo || (hr && 8 < hr && 11 >= hr)),
  Za = String.fromCharCode(32),
  eu = !1;
function pd(e, t) {
  switch (e) {
    case "keyup":
      return oh.indexOf(t.keyCode) !== -1;
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
function md(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var xn = !1;
function uh(e, t) {
  switch (e) {
    case "compositionend":
      return md(t);
    case "keypress":
      return t.which !== 32 ? null : ((eu = !0), Za);
    case "textInput":
      return (e = t.data), e === Za && eu ? null : e;
    default:
      return null;
  }
}
function ch(e, t) {
  if (xn)
    return e === "compositionend" || (!Vo && pd(e, t))
      ? ((e = dd()), (Ti = Bo = Mt = null), (xn = !1), e)
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
      return fd && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var dh = {
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
function tu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!dh[e.type] : t === "textarea";
}
function hd(e, t, n, r) {
  Gc(r),
    (t = bi(t, "onChange")),
    0 < t.length &&
      ((n = new $o("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var gr = null,
  Lr = null;
function fh(e) {
  kd(e, 0);
}
function ms(e) {
  var t = Cn(e);
  if (Bc(t)) return e;
}
function ph(e, t) {
  if (e === "change") return t;
}
var gd = !1;
if (St) {
  var Hs;
  if (St) {
    var Ws = "oninput" in document;
    if (!Ws) {
      var nu = document.createElement("div");
      nu.setAttribute("oninput", "return;"),
        (Ws = typeof nu.oninput == "function");
    }
    Hs = Ws;
  } else Hs = !1;
  gd = Hs && (!document.documentMode || 9 < document.documentMode);
}
function ru() {
  gr && (gr.detachEvent("onpropertychange", vd), (Lr = gr = null));
}
function vd(e) {
  if (e.propertyName === "value" && ms(Lr)) {
    var t = [];
    hd(t, Lr, e, Io(e)), Qc(fh, t);
  }
}
function mh(e, t, n) {
  e === "focusin"
    ? (ru(), (gr = t), (Lr = n), gr.attachEvent("onpropertychange", vd))
    : e === "focusout" && ru();
}
function hh(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ms(Lr);
}
function gh(e, t) {
  if (e === "click") return ms(t);
}
function vh(e, t) {
  if (e === "input" || e === "change") return ms(t);
}
function yh(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ze = typeof Object.is == "function" ? Object.is : yh;
function Mr(e, t) {
  if (Ze(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!wl.call(t, i) || !Ze(e[i], t[i])) return !1;
  }
  return !0;
}
function iu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function su(e, t) {
  var n = iu(e);
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
    n = iu(n);
  }
}
function yd(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? yd(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function wd() {
  for (var e = window, t = Ai(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ai(e.document);
  }
  return t;
}
function bo(e) {
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
function wh(e) {
  var t = wd(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    yd(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && bo(n)) {
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
        var i = n.textContent.length,
          s = Math.min(r.start, i);
        (r = r.end === void 0 ? s : Math.min(r.end, i)),
          !e.extend && s > r && ((i = r), (r = s), (s = i)),
          (i = su(n, s));
        var l = su(n, r);
        i &&
          l &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== l.node ||
            e.focusOffset !== l.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          s > r
            ? (e.addRange(t), e.extend(l.node, l.offset))
            : (t.setEnd(l.node, l.offset), e.addRange(t)));
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
var Sh = St && "documentMode" in document && 11 >= document.documentMode,
  En = null,
  Dl = null,
  vr = null,
  Bl = !1;
function lu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Bl ||
    En == null ||
    En !== Ai(r) ||
    ((r = En),
    "selectionStart" in r && bo(r)
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
    (vr && Mr(vr, r)) ||
      ((vr = r),
      (r = bi(Dl, "onSelect")),
      0 < r.length &&
        ((t = new $o("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = En))));
}
function ui(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Tn = {
    animationend: ui("Animation", "AnimationEnd"),
    animationiteration: ui("Animation", "AnimationIteration"),
    animationstart: ui("Animation", "AnimationStart"),
    transitionend: ui("Transition", "TransitionEnd"),
  },
  Gs = {},
  Sd = {};
St &&
  ((Sd = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Tn.animationend.animation,
    delete Tn.animationiteration.animation,
    delete Tn.animationstart.animation),
  "TransitionEvent" in window || delete Tn.transitionend.transition);
function hs(e) {
  if (Gs[e]) return Gs[e];
  if (!Tn[e]) return e;
  var t = Tn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Sd) return (Gs[e] = t[n]);
  return e;
}
var xd = hs("animationend"),
  Ed = hs("animationiteration"),
  Td = hs("animationstart"),
  Cd = hs("transitionend"),
  Pd = new Map(),
  ou =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Yt(e, t) {
  Pd.set(e, t), hn(t, [e]);
}
for (var Xs = 0; Xs < ou.length; Xs++) {
  var Ys = ou[Xs],
    xh = Ys.toLowerCase(),
    Eh = Ys[0].toUpperCase() + Ys.slice(1);
  Yt(xh, "on" + Eh);
}
Yt(xd, "onAnimationEnd");
Yt(Ed, "onAnimationIteration");
Yt(Td, "onAnimationStart");
Yt("dblclick", "onDoubleClick");
Yt("focusin", "onFocus");
Yt("focusout", "onBlur");
Yt(Cd, "onTransitionEnd");
Fn("onMouseEnter", ["mouseout", "mouseover"]);
Fn("onMouseLeave", ["mouseout", "mouseover"]);
Fn("onPointerEnter", ["pointerout", "pointerover"]);
Fn("onPointerLeave", ["pointerout", "pointerover"]);
hn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
hn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
hn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
hn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
hn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
hn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var dr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Th = new Set("cancel close invalid load scroll toggle".split(" ").concat(dr));
function au(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), xm(r, t, void 0, e), (e.currentTarget = null);
}
function kd(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t)
        for (var l = r.length - 1; 0 <= l; l--) {
          var o = r[l],
            a = o.instance,
            u = o.currentTarget;
          if (((o = o.listener), a !== s && i.isPropagationStopped())) break e;
          au(i, o, u), (s = a);
        }
      else
        for (l = 0; l < r.length; l++) {
          if (
            ((o = r[l]),
            (a = o.instance),
            (u = o.currentTarget),
            (o = o.listener),
            a !== s && i.isPropagationStopped())
          )
            break e;
          au(i, o, u), (s = a);
        }
    }
  }
  if (Di) throw ((e = Il), (Di = !1), (Il = null), e);
}
function G(e, t) {
  var n = t[Hl];
  n === void 0 && (n = t[Hl] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Nd(t, e, 2, !1), n.add(r));
}
function Ks(e, t, n) {
  var r = 0;
  t && (r |= 4), Nd(n, e, r, t);
}
var ci = "_reactListening" + Math.random().toString(36).slice(2);
function Rr(e) {
  if (!e[ci]) {
    (e[ci] = !0),
      Ic.forEach(function (n) {
        n !== "selectionchange" && (Th.has(n) || Ks(n, !1, e), Ks(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ci] || ((t[ci] = !0), Ks("selectionchange", !1, t));
  }
}
function Nd(e, t, n, r) {
  switch (cd(t)) {
    case 1:
      var i = Fm;
      break;
    case 4:
      i = Dm;
      break;
    default:
      i = Do;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !jl ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function Qs(e, t, n, r, i) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var l = r.tag;
      if (l === 3 || l === 4) {
        var o = r.stateNode.containerInfo;
        if (o === i || (o.nodeType === 8 && o.parentNode === i)) break;
        if (l === 4)
          for (l = r.return; l !== null; ) {
            var a = l.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = l.stateNode.containerInfo),
              a === i || (a.nodeType === 8 && a.parentNode === i))
            )
              return;
            l = l.return;
          }
        for (; o !== null; ) {
          if (((l = nn(o)), l === null)) return;
          if (((a = l.tag), a === 5 || a === 6)) {
            r = s = l;
            continue e;
          }
          o = o.parentNode;
        }
      }
      r = r.return;
    }
  Qc(function () {
    var u = s,
      c = Io(n),
      d = [];
    e: {
      var h = Pd.get(e);
      if (h !== void 0) {
        var g = $o,
          v = e;
        switch (e) {
          case "keypress":
            if (Ci(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = Zm;
            break;
          case "focusin":
            (v = "focus"), (g = bs);
            break;
          case "focusout":
            (v = "blur"), (g = bs);
            break;
          case "beforeblur":
          case "afterblur":
            g = bs;
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
            g = Qa;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = Um;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = nh;
            break;
          case xd:
          case Ed:
          case Td:
            g = Hm;
            break;
          case Cd:
            g = ih;
            break;
          case "scroll":
            g = Bm;
            break;
          case "wheel":
            g = lh;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = Gm;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = Ja;
        }
        var y = (t & 4) !== 0,
          x = !y && e === "scroll",
          f = y ? (h !== null ? h + "Capture" : null) : h;
        y = [];
        for (var p = u, m; p !== null; ) {
          m = p;
          var S = m.stateNode;
          if (
            (m.tag === 5 &&
              S !== null &&
              ((m = S),
              f !== null && ((S = kr(p, f)), S != null && y.push(jr(p, S, m)))),
            x)
          )
            break;
          p = p.return;
        }
        0 < y.length &&
          ((h = new g(h, v, null, n, c)), d.push({ event: h, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          h &&
            n !== Ml &&
            (v = n.relatedTarget || n.fromElement) &&
            (nn(v) || v[xt]))
        )
          break e;
        if (
          (g || h) &&
          ((h =
            c.window === c
              ? c
              : (h = c.ownerDocument)
              ? h.defaultView || h.parentWindow
              : window),
          g
            ? ((v = n.relatedTarget || n.toElement),
              (g = u),
              (v = v ? nn(v) : null),
              v !== null &&
                ((x = gn(v)), v !== x || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((g = null), (v = u)),
          g !== v)
        ) {
          if (
            ((y = Qa),
            (S = "onMouseLeave"),
            (f = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((y = Ja),
              (S = "onPointerLeave"),
              (f = "onPointerEnter"),
              (p = "pointer")),
            (x = g == null ? h : Cn(g)),
            (m = v == null ? h : Cn(v)),
            (h = new y(S, p + "leave", g, n, c)),
            (h.target = x),
            (h.relatedTarget = m),
            (S = null),
            nn(c) === u &&
              ((y = new y(f, p + "enter", v, n, c)),
              (y.target = m),
              (y.relatedTarget = x),
              (S = y)),
            (x = S),
            g && v)
          )
            t: {
              for (y = g, f = v, p = 0, m = y; m; m = yn(m)) p++;
              for (m = 0, S = f; S; S = yn(S)) m++;
              for (; 0 < p - m; ) (y = yn(y)), p--;
              for (; 0 < m - p; ) (f = yn(f)), m--;
              for (; p--; ) {
                if (y === f || (f !== null && y === f.alternate)) break t;
                (y = yn(y)), (f = yn(f));
              }
              y = null;
            }
          else y = null;
          g !== null && uu(d, h, g, y, !1),
            v !== null && x !== null && uu(d, x, v, y, !0);
        }
      }
      e: {
        if (
          ((h = u ? Cn(u) : window),
          (g = h.nodeName && h.nodeName.toLowerCase()),
          g === "select" || (g === "input" && h.type === "file"))
        )
          var E = ph;
        else if (tu(h))
          if (gd) E = vh;
          else {
            E = hh;
            var _ = mh;
          }
        else
          (g = h.nodeName) &&
            g.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (E = gh);
        if (E && (E = E(e, u))) {
          hd(d, E, n, c);
          break e;
        }
        _ && _(e, h, u),
          e === "focusout" &&
            (_ = h._wrapperState) &&
            _.controlled &&
            h.type === "number" &&
            kl(h, "number", h.value);
      }
      switch (((_ = u ? Cn(u) : window), e)) {
        case "focusin":
          (tu(_) || _.contentEditable === "true") &&
            ((En = _), (Dl = u), (vr = null));
          break;
        case "focusout":
          vr = Dl = En = null;
          break;
        case "mousedown":
          Bl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Bl = !1), lu(d, n, c);
          break;
        case "selectionchange":
          if (Sh) break;
        case "keydown":
        case "keyup":
          lu(d, n, c);
      }
      var T;
      if (Vo)
        e: {
          switch (e) {
            case "compositionstart":
              var N = "onCompositionStart";
              break e;
            case "compositionend":
              N = "onCompositionEnd";
              break e;
            case "compositionupdate":
              N = "onCompositionUpdate";
              break e;
          }
          N = void 0;
        }
      else
        xn
          ? pd(e, n) && (N = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");
      N &&
        (fd &&
          n.locale !== "ko" &&
          (xn || N !== "onCompositionStart"
            ? N === "onCompositionEnd" && xn && (T = dd())
            : ((Mt = c),
              (Bo = "value" in Mt ? Mt.value : Mt.textContent),
              (xn = !0))),
        (_ = bi(u, N)),
        0 < _.length &&
          ((N = new qa(N, e, null, n, c)),
          d.push({ event: N, listeners: _ }),
          T ? (N.data = T) : ((T = md(n)), T !== null && (N.data = T)))),
        (T = ah ? uh(e, n) : ch(e, n)) &&
          ((u = bi(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new qa("onBeforeInput", "beforeinput", null, n, c)),
            d.push({ event: c, listeners: u }),
            (c.data = T)));
    }
    kd(d, t);
  });
}
function jr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function bi(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      s = i.stateNode;
    i.tag === 5 &&
      s !== null &&
      ((i = s),
      (s = kr(e, n)),
      s != null && r.unshift(jr(e, s, i)),
      (s = kr(e, t)),
      s != null && r.push(jr(e, s, i))),
      (e = e.return);
  }
  return r;
}
function yn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function uu(e, t, n, r, i) {
  for (var s = t._reactName, l = []; n !== null && n !== r; ) {
    var o = n,
      a = o.alternate,
      u = o.stateNode;
    if (a !== null && a === r) break;
    o.tag === 5 &&
      u !== null &&
      ((o = u),
      i
        ? ((a = kr(n, s)), a != null && l.unshift(jr(n, a, o)))
        : i || ((a = kr(n, s)), a != null && l.push(jr(n, a, o)))),
      (n = n.return);
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var Ch = /\r\n?/g,
  Ph = /\u0000|\uFFFD/g;
function cu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Ch,
      `
`
    )
    .replace(Ph, "");
}
function di(e, t, n) {
  if (((t = cu(t)), cu(e) !== t && n)) throw Error(O(425));
}
function Hi() {}
var $l = null,
  Ul = null;
function Vl(e, t) {
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
var bl = typeof setTimeout == "function" ? setTimeout : void 0,
  kh = typeof clearTimeout == "function" ? clearTimeout : void 0,
  du = typeof Promise == "function" ? Promise : void 0,
  Nh =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof du < "u"
      ? function (e) {
          return du.resolve(null).then(e).catch(_h);
        }
      : bl;
function _h(e) {
  setTimeout(function () {
    throw e;
  });
}
function qs(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), Or(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  Or(t);
}
function Dt(e) {
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
function fu(e) {
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
var Yn = Math.random().toString(36).slice(2),
  rt = "__reactFiber$" + Yn,
  Ir = "__reactProps$" + Yn,
  xt = "__reactContainer$" + Yn,
  Hl = "__reactEvents$" + Yn,
  Oh = "__reactListeners$" + Yn,
  Lh = "__reactHandles$" + Yn;
function nn(e) {
  var t = e[rt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[xt] || n[rt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = fu(e); e !== null; ) {
          if ((n = e[rt])) return n;
          e = fu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Yr(e) {
  return (
    (e = e[rt] || e[xt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Cn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(O(33));
}
function gs(e) {
  return e[Ir] || null;
}
var Wl = [],
  Pn = -1;
function Kt(e) {
  return { current: e };
}
function X(e) {
  0 > Pn || ((e.current = Wl[Pn]), (Wl[Pn] = null), Pn--);
}
function W(e, t) {
  Pn++, (Wl[Pn] = e.current), (e.current = t);
}
var Gt = {},
  Se = Kt(Gt),
  Ne = Kt(!1),
  un = Gt;
function Dn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Gt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    s;
  for (s in n) i[s] = t[s];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function _e(e) {
  return (e = e.childContextTypes), e != null;
}
function Wi() {
  X(Ne), X(Se);
}
function pu(e, t, n) {
  if (Se.current !== Gt) throw Error(O(168));
  W(Se, t), W(Ne, n);
}
function _d(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(O(108, mm(e) || "Unknown", i));
  return q({}, n, r);
}
function Gi(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Gt),
    (un = Se.current),
    W(Se, e),
    W(Ne, Ne.current),
    !0
  );
}
function mu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(O(169));
  n
    ? ((e = _d(e, t, un)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      X(Ne),
      X(Se),
      W(Se, e))
    : X(Ne),
    W(Ne, n);
}
var ft = null,
  vs = !1,
  Js = !1;
function Od(e) {
  ft === null ? (ft = [e]) : ft.push(e);
}
function Mh(e) {
  (vs = !0), Od(e);
}
function Qt() {
  if (!Js && ft !== null) {
    Js = !0;
    var e = 0,
      t = V;
    try {
      var n = ft;
      for (V = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (ft = null), (vs = !1);
    } catch (i) {
      throw (ft !== null && (ft = ft.slice(e + 1)), ed(zo, Qt), i);
    } finally {
      (V = t), (Js = !1);
    }
  }
  return null;
}
var kn = [],
  Nn = 0,
  Xi = null,
  Yi = 0,
  $e = [],
  Ue = 0,
  cn = null,
  ht = 1,
  gt = "";
function en(e, t) {
  (kn[Nn++] = Yi), (kn[Nn++] = Xi), (Xi = e), (Yi = t);
}
function Ld(e, t, n) {
  ($e[Ue++] = ht), ($e[Ue++] = gt), ($e[Ue++] = cn), (cn = e);
  var r = ht;
  e = gt;
  var i = 32 - qe(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var s = 32 - qe(t) + i;
  if (30 < s) {
    var l = i - (i % 5);
    (s = (r & ((1 << l) - 1)).toString(32)),
      (r >>= l),
      (i -= l),
      (ht = (1 << (32 - qe(t) + i)) | (n << i) | r),
      (gt = s + e);
  } else (ht = (1 << s) | (n << i) | r), (gt = e);
}
function Ho(e) {
  e.return !== null && (en(e, 1), Ld(e, 1, 0));
}
function Wo(e) {
  for (; e === Xi; )
    (Xi = kn[--Nn]), (kn[Nn] = null), (Yi = kn[--Nn]), (kn[Nn] = null);
  for (; e === cn; )
    (cn = $e[--Ue]),
      ($e[Ue] = null),
      (gt = $e[--Ue]),
      ($e[Ue] = null),
      (ht = $e[--Ue]),
      ($e[Ue] = null);
}
var Ie = null,
  je = null,
  Y = !1,
  Qe = null;
function Md(e, t) {
  var n = Ve(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function hu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ie = e), (je = Dt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ie = e), (je = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = cn !== null ? { id: ht, overflow: gt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ve(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ie = e),
            (je = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Gl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Xl(e) {
  if (Y) {
    var t = je;
    if (t) {
      var n = t;
      if (!hu(e, t)) {
        if (Gl(e)) throw Error(O(418));
        t = Dt(n.nextSibling);
        var r = Ie;
        t && hu(e, t)
          ? Md(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (Y = !1), (Ie = e));
      }
    } else {
      if (Gl(e)) throw Error(O(418));
      (e.flags = (e.flags & -4097) | 2), (Y = !1), (Ie = e);
    }
  }
}
function gu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ie = e;
}
function fi(e) {
  if (e !== Ie) return !1;
  if (!Y) return gu(e), (Y = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Vl(e.type, e.memoizedProps))),
    t && (t = je))
  ) {
    if (Gl(e)) throw (Rd(), Error(O(418)));
    for (; t; ) Md(e, t), (t = Dt(t.nextSibling));
  }
  if ((gu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(O(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              je = Dt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      je = null;
    }
  } else je = Ie ? Dt(e.stateNode.nextSibling) : null;
  return !0;
}
function Rd() {
  for (var e = je; e; ) e = Dt(e.nextSibling);
}
function Bn() {
  (je = Ie = null), (Y = !1);
}
function Go(e) {
  Qe === null ? (Qe = [e]) : Qe.push(e);
}
var Rh = Ct.ReactCurrentBatchConfig;
function Ye(e, t) {
  if (e && e.defaultProps) {
    (t = q({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Ki = Kt(null),
  Qi = null,
  _n = null,
  Xo = null;
function Yo() {
  Xo = _n = Qi = null;
}
function Ko(e) {
  var t = Ki.current;
  X(Ki), (e._currentValue = t);
}
function Yl(e, t, n) {
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
function zn(e, t) {
  (Qi = e),
    (Xo = _n = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ke = !0), (e.firstContext = null));
}
function We(e) {
  var t = e._currentValue;
  if (Xo !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), _n === null)) {
      if (Qi === null) throw Error(O(308));
      (_n = e), (Qi.dependencies = { lanes: 0, firstContext: e });
    } else _n = _n.next = e;
  return t;
}
var rn = null;
function Qo(e) {
  rn === null ? (rn = [e]) : rn.push(e);
}
function jd(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Qo(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    Et(e, r)
  );
}
function Et(e, t) {
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
var _t = !1;
function qo(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Id(e, t) {
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
function yt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Bt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), U & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      Et(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Qo(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    Et(e, n)
  );
}
function Pi(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ao(e, n);
  }
}
function vu(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var l = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        s === null ? (i = s = l) : (s = s.next = l), (n = n.next);
      } while (n !== null);
      s === null ? (i = s = t) : (s = s.next = t);
    } else i = s = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: s,
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
function qi(e, t, n, r) {
  var i = e.updateQueue;
  _t = !1;
  var s = i.firstBaseUpdate,
    l = i.lastBaseUpdate,
    o = i.shared.pending;
  if (o !== null) {
    i.shared.pending = null;
    var a = o,
      u = a.next;
    (a.next = null), l === null ? (s = u) : (l.next = u), (l = a);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (o = c.lastBaseUpdate),
      o !== l &&
        (o === null ? (c.firstBaseUpdate = u) : (o.next = u),
        (c.lastBaseUpdate = a)));
  }
  if (s !== null) {
    var d = i.baseState;
    (l = 0), (c = u = a = null), (o = s);
    do {
      var h = o.lane,
        g = o.eventTime;
      if ((r & h) === h) {
        c !== null &&
          (c = c.next =
            {
              eventTime: g,
              lane: 0,
              tag: o.tag,
              payload: o.payload,
              callback: o.callback,
              next: null,
            });
        e: {
          var v = e,
            y = o;
          switch (((h = t), (g = n), y.tag)) {
            case 1:
              if (((v = y.payload), typeof v == "function")) {
                d = v.call(g, d, h);
                break e;
              }
              d = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = y.payload),
                (h = typeof v == "function" ? v.call(g, d, h) : v),
                h == null)
              )
                break e;
              d = q({}, d, h);
              break e;
            case 2:
              _t = !0;
          }
        }
        o.callback !== null &&
          o.lane !== 0 &&
          ((e.flags |= 64),
          (h = i.effects),
          h === null ? (i.effects = [o]) : h.push(o));
      } else
        (g = {
          eventTime: g,
          lane: h,
          tag: o.tag,
          payload: o.payload,
          callback: o.callback,
          next: null,
        }),
          c === null ? ((u = c = g), (a = d)) : (c = c.next = g),
          (l |= h);
      if (((o = o.next), o === null)) {
        if (((o = i.shared.pending), o === null)) break;
        (h = o),
          (o = h.next),
          (h.next = null),
          (i.lastBaseUpdate = h),
          (i.shared.pending = null);
      }
    } while (1);
    if (
      (c === null && (a = d),
      (i.baseState = a),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (l |= i.lane), (i = i.next);
      while (i !== t);
    } else s === null && (i.shared.lanes = 0);
    (fn |= l), (e.lanes = l), (e.memoizedState = d);
  }
}
function yu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(O(191, i));
        i.call(r);
      }
    }
}
var zd = new jc.Component().refs;
function Kl(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : q({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ys = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? gn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ee(),
      i = Ut(e),
      s = yt(r, i);
    (s.payload = t),
      n != null && (s.callback = n),
      (t = Bt(e, s, i)),
      t !== null && (Je(t, e, i, r), Pi(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ee(),
      i = Ut(e),
      s = yt(r, i);
    (s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = Bt(e, s, i)),
      t !== null && (Je(t, e, i, r), Pi(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ee(),
      r = Ut(e),
      i = yt(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = Bt(e, i, r)),
      t !== null && (Je(t, e, r, n), Pi(t, e, r));
  },
};
function wu(e, t, n, r, i, s, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, s, l)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Mr(n, r) || !Mr(i, s)
      : !0
  );
}
function Ad(e, t, n) {
  var r = !1,
    i = Gt,
    s = t.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = We(s))
      : ((i = _e(t) ? un : Se.current),
        (r = t.contextTypes),
        (s = (r = r != null) ? Dn(e, i) : Gt)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = ys),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function Su(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && ys.enqueueReplaceState(t, t.state, null);
}
function Ql(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = zd), qo(e);
  var s = t.contextType;
  typeof s == "object" && s !== null
    ? (i.context = We(s))
    : ((s = _e(t) ? un : Se.current), (i.context = Dn(e, s))),
    (i.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == "function" && (Kl(e, t, s, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && ys.enqueueReplaceState(i, i.state, null),
      qi(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function ir(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(O(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(O(147, e));
      var i = r,
        s = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === s
        ? t.ref
        : ((t = function (l) {
            var o = i.refs;
            o === zd && (o = i.refs = {}),
              l === null ? delete o[s] : (o[s] = l);
          }),
          (t._stringRef = s),
          t);
    }
    if (typeof e != "string") throw Error(O(284));
    if (!n._owner) throw Error(O(290, e));
  }
  return e;
}
function pi(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      O(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function xu(e) {
  var t = e._init;
  return t(e._payload);
}
function Fd(e) {
  function t(f, p) {
    if (e) {
      var m = f.deletions;
      m === null ? ((f.deletions = [p]), (f.flags |= 16)) : m.push(p);
    }
  }
  function n(f, p) {
    if (!e) return null;
    for (; p !== null; ) t(f, p), (p = p.sibling);
    return null;
  }
  function r(f, p) {
    for (f = new Map(); p !== null; )
      p.key !== null ? f.set(p.key, p) : f.set(p.index, p), (p = p.sibling);
    return f;
  }
  function i(f, p) {
    return (f = Vt(f, p)), (f.index = 0), (f.sibling = null), f;
  }
  function s(f, p, m) {
    return (
      (f.index = m),
      e
        ? ((m = f.alternate),
          m !== null
            ? ((m = m.index), m < p ? ((f.flags |= 2), p) : m)
            : ((f.flags |= 2), p))
        : ((f.flags |= 1048576), p)
    );
  }
  function l(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function o(f, p, m, S) {
    return p === null || p.tag !== 6
      ? ((p = sl(m, f.mode, S)), (p.return = f), p)
      : ((p = i(p, m)), (p.return = f), p);
  }
  function a(f, p, m, S) {
    var E = m.type;
    return E === Sn
      ? c(f, p, m.props.children, S, m.key)
      : p !== null &&
        (p.elementType === E ||
          (typeof E == "object" &&
            E !== null &&
            E.$$typeof === Nt &&
            xu(E) === p.type))
      ? ((S = i(p, m.props)), (S.ref = ir(f, p, m)), (S.return = f), S)
      : ((S = Mi(m.type, m.key, m.props, null, f.mode, S)),
        (S.ref = ir(f, p, m)),
        (S.return = f),
        S);
  }
  function u(f, p, m, S) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== m.containerInfo ||
      p.stateNode.implementation !== m.implementation
      ? ((p = ll(m, f.mode, S)), (p.return = f), p)
      : ((p = i(p, m.children || [])), (p.return = f), p);
  }
  function c(f, p, m, S, E) {
    return p === null || p.tag !== 7
      ? ((p = on(m, f.mode, S, E)), (p.return = f), p)
      : ((p = i(p, m)), (p.return = f), p);
  }
  function d(f, p, m) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (p = sl("" + p, f.mode, m)), (p.return = f), p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case ni:
          return (
            (m = Mi(p.type, p.key, p.props, null, f.mode, m)),
            (m.ref = ir(f, null, p)),
            (m.return = f),
            m
          );
        case wn:
          return (p = ll(p, f.mode, m)), (p.return = f), p;
        case Nt:
          var S = p._init;
          return d(f, S(p._payload), m);
      }
      if (ur(p) || Zn(p))
        return (p = on(p, f.mode, m, null)), (p.return = f), p;
      pi(f, p);
    }
    return null;
  }
  function h(f, p, m, S) {
    var E = p !== null ? p.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return E !== null ? null : o(f, p, "" + m, S);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case ni:
          return m.key === E ? a(f, p, m, S) : null;
        case wn:
          return m.key === E ? u(f, p, m, S) : null;
        case Nt:
          return (E = m._init), h(f, p, E(m._payload), S);
      }
      if (ur(m) || Zn(m)) return E !== null ? null : c(f, p, m, S, null);
      pi(f, m);
    }
    return null;
  }
  function g(f, p, m, S, E) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return (f = f.get(m) || null), o(p, f, "" + S, E);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case ni:
          return (f = f.get(S.key === null ? m : S.key) || null), a(p, f, S, E);
        case wn:
          return (f = f.get(S.key === null ? m : S.key) || null), u(p, f, S, E);
        case Nt:
          var _ = S._init;
          return g(f, p, m, _(S._payload), E);
      }
      if (ur(S) || Zn(S)) return (f = f.get(m) || null), c(p, f, S, E, null);
      pi(p, S);
    }
    return null;
  }
  function v(f, p, m, S) {
    for (
      var E = null, _ = null, T = p, N = (p = 0), C = null;
      T !== null && N < m.length;
      N++
    ) {
      T.index > N ? ((C = T), (T = null)) : (C = T.sibling);
      var A = h(f, T, m[N], S);
      if (A === null) {
        T === null && (T = C);
        break;
      }
      e && T && A.alternate === null && t(f, T),
        (p = s(A, p, N)),
        _ === null ? (E = A) : (_.sibling = A),
        (_ = A),
        (T = C);
    }
    if (N === m.length) return n(f, T), Y && en(f, N), E;
    if (T === null) {
      for (; N < m.length; N++)
        (T = d(f, m[N], S)),
          T !== null &&
            ((p = s(T, p, N)), _ === null ? (E = T) : (_.sibling = T), (_ = T));
      return Y && en(f, N), E;
    }
    for (T = r(f, T); N < m.length; N++)
      (C = g(T, f, N, m[N], S)),
        C !== null &&
          (e && C.alternate !== null && T.delete(C.key === null ? N : C.key),
          (p = s(C, p, N)),
          _ === null ? (E = C) : (_.sibling = C),
          (_ = C));
    return (
      e &&
        T.forEach(function (L) {
          return t(f, L);
        }),
      Y && en(f, N),
      E
    );
  }
  function y(f, p, m, S) {
    var E = Zn(m);
    if (typeof E != "function") throw Error(O(150));
    if (((m = E.call(m)), m == null)) throw Error(O(151));
    for (
      var _ = (E = null), T = p, N = (p = 0), C = null, A = m.next();
      T !== null && !A.done;
      N++, A = m.next()
    ) {
      T.index > N ? ((C = T), (T = null)) : (C = T.sibling);
      var L = h(f, T, A.value, S);
      if (L === null) {
        T === null && (T = C);
        break;
      }
      e && T && L.alternate === null && t(f, T),
        (p = s(L, p, N)),
        _ === null ? (E = L) : (_.sibling = L),
        (_ = L),
        (T = C);
    }
    if (A.done) return n(f, T), Y && en(f, N), E;
    if (T === null) {
      for (; !A.done; N++, A = m.next())
        (A = d(f, A.value, S)),
          A !== null &&
            ((p = s(A, p, N)), _ === null ? (E = A) : (_.sibling = A), (_ = A));
      return Y && en(f, N), E;
    }
    for (T = r(f, T); !A.done; N++, A = m.next())
      (A = g(T, f, N, A.value, S)),
        A !== null &&
          (e && A.alternate !== null && T.delete(A.key === null ? N : A.key),
          (p = s(A, p, N)),
          _ === null ? (E = A) : (_.sibling = A),
          (_ = A));
    return (
      e &&
        T.forEach(function (I) {
          return t(f, I);
        }),
      Y && en(f, N),
      E
    );
  }
  function x(f, p, m, S) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === Sn &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case ni:
          e: {
            for (var E = m.key, _ = p; _ !== null; ) {
              if (_.key === E) {
                if (((E = m.type), E === Sn)) {
                  if (_.tag === 7) {
                    n(f, _.sibling),
                      (p = i(_, m.props.children)),
                      (p.return = f),
                      (f = p);
                    break e;
                  }
                } else if (
                  _.elementType === E ||
                  (typeof E == "object" &&
                    E !== null &&
                    E.$$typeof === Nt &&
                    xu(E) === _.type)
                ) {
                  n(f, _.sibling),
                    (p = i(_, m.props)),
                    (p.ref = ir(f, _, m)),
                    (p.return = f),
                    (f = p);
                  break e;
                }
                n(f, _);
                break;
              } else t(f, _);
              _ = _.sibling;
            }
            m.type === Sn
              ? ((p = on(m.props.children, f.mode, S, m.key)),
                (p.return = f),
                (f = p))
              : ((S = Mi(m.type, m.key, m.props, null, f.mode, S)),
                (S.ref = ir(f, p, m)),
                (S.return = f),
                (f = S));
          }
          return l(f);
        case wn:
          e: {
            for (_ = m.key; p !== null; ) {
              if (p.key === _)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === m.containerInfo &&
                  p.stateNode.implementation === m.implementation
                ) {
                  n(f, p.sibling),
                    (p = i(p, m.children || [])),
                    (p.return = f),
                    (f = p);
                  break e;
                } else {
                  n(f, p);
                  break;
                }
              else t(f, p);
              p = p.sibling;
            }
            (p = ll(m, f.mode, S)), (p.return = f), (f = p);
          }
          return l(f);
        case Nt:
          return (_ = m._init), x(f, p, _(m._payload), S);
      }
      if (ur(m)) return v(f, p, m, S);
      if (Zn(m)) return y(f, p, m, S);
      pi(f, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        p !== null && p.tag === 6
          ? (n(f, p.sibling), (p = i(p, m)), (p.return = f), (f = p))
          : (n(f, p), (p = sl(m, f.mode, S)), (p.return = f), (f = p)),
        l(f))
      : n(f, p);
  }
  return x;
}
var $n = Fd(!0),
  Dd = Fd(!1),
  Kr = {},
  lt = Kt(Kr),
  zr = Kt(Kr),
  Ar = Kt(Kr);
function sn(e) {
  if (e === Kr) throw Error(O(174));
  return e;
}
function Jo(e, t) {
  switch ((W(Ar, t), W(zr, e), W(lt, Kr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : _l(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = _l(t, e));
  }
  X(lt), W(lt, t);
}
function Un() {
  X(lt), X(zr), X(Ar);
}
function Bd(e) {
  sn(Ar.current);
  var t = sn(lt.current),
    n = _l(t, e.type);
  t !== n && (W(zr, e), W(lt, n));
}
function Zo(e) {
  zr.current === e && (X(lt), X(zr));
}
var K = Kt(0);
function Ji(e) {
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
var Zs = [];
function ea() {
  for (var e = 0; e < Zs.length; e++)
    Zs[e]._workInProgressVersionPrimary = null;
  Zs.length = 0;
}
var ki = Ct.ReactCurrentDispatcher,
  el = Ct.ReactCurrentBatchConfig,
  dn = 0,
  Q = null,
  ae = null,
  de = null,
  Zi = !1,
  yr = !1,
  Fr = 0,
  jh = 0;
function ve() {
  throw Error(O(321));
}
function ta(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ze(e[n], t[n])) return !1;
  return !0;
}
function na(e, t, n, r, i, s) {
  if (
    ((dn = s),
    (Q = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ki.current = e === null || e.memoizedState === null ? Fh : Dh),
    (e = n(r, i)),
    yr)
  ) {
    s = 0;
    do {
      if (((yr = !1), (Fr = 0), 25 <= s)) throw Error(O(301));
      (s += 1),
        (de = ae = null),
        (t.updateQueue = null),
        (ki.current = Bh),
        (e = n(r, i));
    } while (yr);
  }
  if (
    ((ki.current = es),
    (t = ae !== null && ae.next !== null),
    (dn = 0),
    (de = ae = Q = null),
    (Zi = !1),
    t)
  )
    throw Error(O(300));
  return e;
}
function ra() {
  var e = Fr !== 0;
  return (Fr = 0), e;
}
function tt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return de === null ? (Q.memoizedState = de = e) : (de = de.next = e), de;
}
function Ge() {
  if (ae === null) {
    var e = Q.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ae.next;
  var t = de === null ? Q.memoizedState : de.next;
  if (t !== null) (de = t), (ae = e);
  else {
    if (e === null) throw Error(O(310));
    (ae = e),
      (e = {
        memoizedState: ae.memoizedState,
        baseState: ae.baseState,
        baseQueue: ae.baseQueue,
        queue: ae.queue,
        next: null,
      }),
      de === null ? (Q.memoizedState = de = e) : (de = de.next = e);
  }
  return de;
}
function Dr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function tl(e) {
  var t = Ge(),
    n = t.queue;
  if (n === null) throw Error(O(311));
  n.lastRenderedReducer = e;
  var r = ae,
    i = r.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (i !== null) {
      var l = i.next;
      (i.next = s.next), (s.next = l);
    }
    (r.baseQueue = i = s), (n.pending = null);
  }
  if (i !== null) {
    (s = i.next), (r = r.baseState);
    var o = (l = null),
      a = null,
      u = s;
    do {
      var c = u.lane;
      if ((dn & c) === c)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        a === null ? ((o = a = d), (l = r)) : (a = a.next = d),
          (Q.lanes |= c),
          (fn |= c);
      }
      u = u.next;
    } while (u !== null && u !== s);
    a === null ? (l = r) : (a.next = o),
      Ze(r, t.memoizedState) || (ke = !0),
      (t.memoizedState = r),
      (t.baseState = l),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (s = i.lane), (Q.lanes |= s), (fn |= s), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function nl(e) {
  var t = Ge(),
    n = t.queue;
  if (n === null) throw Error(O(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    s = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var l = (i = i.next);
    do (s = e(s, l.action)), (l = l.next);
    while (l !== i);
    Ze(s, t.memoizedState) || (ke = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s);
  }
  return [s, r];
}
function $d() {}
function Ud(e, t) {
  var n = Q,
    r = Ge(),
    i = t(),
    s = !Ze(r.memoizedState, i);
  if (
    (s && ((r.memoizedState = i), (ke = !0)),
    (r = r.queue),
    ia(Hd.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || (de !== null && de.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Br(9, bd.bind(null, n, r, i, t), void 0, null),
      pe === null)
    )
      throw Error(O(349));
    dn & 30 || Vd(n, t, i);
  }
  return i;
}
function Vd(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Q.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Q.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function bd(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Wd(t) && Gd(e);
}
function Hd(e, t, n) {
  return n(function () {
    Wd(t) && Gd(e);
  });
}
function Wd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ze(e, n);
  } catch {
    return !0;
  }
}
function Gd(e) {
  var t = Et(e, 1);
  t !== null && Je(t, e, 1, -1);
}
function Eu(e) {
  var t = tt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Dr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Ah.bind(null, Q, e)),
    [t.memoizedState, e]
  );
}
function Br(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Q.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Q.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Xd() {
  return Ge().memoizedState;
}
function Ni(e, t, n, r) {
  var i = tt();
  (Q.flags |= e),
    (i.memoizedState = Br(1 | t, n, void 0, r === void 0 ? null : r));
}
function ws(e, t, n, r) {
  var i = Ge();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (ae !== null) {
    var l = ae.memoizedState;
    if (((s = l.destroy), r !== null && ta(r, l.deps))) {
      i.memoizedState = Br(t, n, s, r);
      return;
    }
  }
  (Q.flags |= e), (i.memoizedState = Br(1 | t, n, s, r));
}
function Tu(e, t) {
  return Ni(8390656, 8, e, t);
}
function ia(e, t) {
  return ws(2048, 8, e, t);
}
function Yd(e, t) {
  return ws(4, 2, e, t);
}
function Kd(e, t) {
  return ws(4, 4, e, t);
}
function Qd(e, t) {
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
function qd(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), ws(4, 4, Qd.bind(null, t, e), n)
  );
}
function sa() {}
function Jd(e, t) {
  var n = Ge();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ta(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Zd(e, t) {
  var n = Ge();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ta(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function ef(e, t, n) {
  return dn & 21
    ? (Ze(n, t) || ((n = rd()), (Q.lanes |= n), (fn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ke = !0)), (e.memoizedState = n));
}
function Ih(e, t) {
  var n = V;
  (V = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = el.transition;
  el.transition = {};
  try {
    e(!1), t();
  } finally {
    (V = n), (el.transition = r);
  }
}
function tf() {
  return Ge().memoizedState;
}
function zh(e, t, n) {
  var r = Ut(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    nf(e))
  )
    rf(t, n);
  else if (((n = jd(e, t, n, r)), n !== null)) {
    var i = Ee();
    Je(n, e, r, i), sf(n, t, r);
  }
}
function Ah(e, t, n) {
  var r = Ut(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (nf(e)) rf(t, i);
  else {
    var s = e.alternate;
    if (
      e.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = t.lastRenderedReducer), s !== null)
    )
      try {
        var l = t.lastRenderedState,
          o = s(l, n);
        if (((i.hasEagerState = !0), (i.eagerState = o), Ze(o, l))) {
          var a = t.interleaved;
          a === null
            ? ((i.next = i), Qo(t))
            : ((i.next = a.next), (a.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = jd(e, t, i, r)),
      n !== null && ((i = Ee()), Je(n, e, r, i), sf(n, t, r));
  }
}
function nf(e) {
  var t = e.alternate;
  return e === Q || (t !== null && t === Q);
}
function rf(e, t) {
  yr = Zi = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function sf(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ao(e, n);
  }
}
var es = {
    readContext: We,
    useCallback: ve,
    useContext: ve,
    useEffect: ve,
    useImperativeHandle: ve,
    useInsertionEffect: ve,
    useLayoutEffect: ve,
    useMemo: ve,
    useReducer: ve,
    useRef: ve,
    useState: ve,
    useDebugValue: ve,
    useDeferredValue: ve,
    useTransition: ve,
    useMutableSource: ve,
    useSyncExternalStore: ve,
    useId: ve,
    unstable_isNewReconciler: !1,
  },
  Fh = {
    readContext: We,
    useCallback: function (e, t) {
      return (tt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: We,
    useEffect: Tu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ni(4194308, 4, Qd.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ni(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ni(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = tt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = tt();
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
        (e = e.dispatch = zh.bind(null, Q, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = tt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Eu,
    useDebugValue: sa,
    useDeferredValue: function (e) {
      return (tt().memoizedState = e);
    },
    useTransition: function () {
      var e = Eu(!1),
        t = e[0];
      return (e = Ih.bind(null, e[1])), (tt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Q,
        i = tt();
      if (Y) {
        if (n === void 0) throw Error(O(407));
        n = n();
      } else {
        if (((n = t()), pe === null)) throw Error(O(349));
        dn & 30 || Vd(r, t, n);
      }
      i.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return (
        (i.queue = s),
        Tu(Hd.bind(null, r, s, e), [e]),
        (r.flags |= 2048),
        Br(9, bd.bind(null, r, s, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = tt(),
        t = pe.identifierPrefix;
      if (Y) {
        var n = gt,
          r = ht;
        (n = (r & ~(1 << (32 - qe(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Fr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = jh++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Dh = {
    readContext: We,
    useCallback: Jd,
    useContext: We,
    useEffect: ia,
    useImperativeHandle: qd,
    useInsertionEffect: Yd,
    useLayoutEffect: Kd,
    useMemo: Zd,
    useReducer: tl,
    useRef: Xd,
    useState: function () {
      return tl(Dr);
    },
    useDebugValue: sa,
    useDeferredValue: function (e) {
      var t = Ge();
      return ef(t, ae.memoizedState, e);
    },
    useTransition: function () {
      var e = tl(Dr)[0],
        t = Ge().memoizedState;
      return [e, t];
    },
    useMutableSource: $d,
    useSyncExternalStore: Ud,
    useId: tf,
    unstable_isNewReconciler: !1,
  },
  Bh = {
    readContext: We,
    useCallback: Jd,
    useContext: We,
    useEffect: ia,
    useImperativeHandle: qd,
    useInsertionEffect: Yd,
    useLayoutEffect: Kd,
    useMemo: Zd,
    useReducer: nl,
    useRef: Xd,
    useState: function () {
      return nl(Dr);
    },
    useDebugValue: sa,
    useDeferredValue: function (e) {
      var t = Ge();
      return ae === null ? (t.memoizedState = e) : ef(t, ae.memoizedState, e);
    },
    useTransition: function () {
      var e = nl(Dr)[0],
        t = Ge().memoizedState;
      return [e, t];
    },
    useMutableSource: $d,
    useSyncExternalStore: Ud,
    useId: tf,
    unstable_isNewReconciler: !1,
  };
function Vn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += pm(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (s) {
    i =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function rl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ql(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var $h = typeof WeakMap == "function" ? WeakMap : Map;
function lf(e, t, n) {
  (n = yt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      ns || ((ns = !0), (oo = r)), ql(e, t);
    }),
    n
  );
}
function of(e, t, n) {
  (n = yt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        ql(e, t);
      });
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        ql(e, t),
          typeof r != "function" &&
            ($t === null ? ($t = new Set([this])) : $t.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: l !== null ? l : "",
        });
      }),
    n
  );
}
function Cu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new $h();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = eg.bind(null, e, t, n)), t.then(e, e));
}
function Pu(e) {
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
function ku(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = yt(-1, 1)), (t.tag = 2), Bt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Uh = Ct.ReactCurrentOwner,
  ke = !1;
function xe(e, t, n, r) {
  t.child = e === null ? Dd(t, null, n, r) : $n(t, e.child, n, r);
}
function Nu(e, t, n, r, i) {
  n = n.render;
  var s = t.ref;
  return (
    zn(t, i),
    (r = na(e, t, n, r, s, i)),
    (n = ra()),
    e !== null && !ke
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Tt(e, t, i))
      : (Y && n && Ho(t), (t.flags |= 1), xe(e, t, r, i), t.child)
  );
}
function _u(e, t, n, r, i) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" &&
      !pa(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), af(e, t, s, r, i))
      : ((e = Mi(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((s = e.child), !(e.lanes & i))) {
    var l = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Mr), n(l, r) && e.ref === t.ref)
    )
      return Tt(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = Vt(s, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function af(e, t, n, r, i) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (Mr(s, r) && e.ref === t.ref)
      if (((ke = !1), (t.pendingProps = r = s), (e.lanes & i) !== 0))
        e.flags & 131072 && (ke = !0);
      else return (t.lanes = e.lanes), Tt(e, t, i);
  }
  return Jl(e, t, n, r, i);
}
function uf(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        W(Ln, Me),
        (Me |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = s !== null ? s.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          W(Ln, Me),
          (Me |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        W(Ln, Me),
        (Me |= r);
    }
  else
    s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
      W(Ln, Me),
      (Me |= r);
  return xe(e, t, i, n), t.child;
}
function cf(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Jl(e, t, n, r, i) {
  var s = _e(n) ? un : Se.current;
  return (
    (s = Dn(t, s)),
    zn(t, i),
    (n = na(e, t, n, r, s, i)),
    (r = ra()),
    e !== null && !ke
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Tt(e, t, i))
      : (Y && r && Ho(t), (t.flags |= 1), xe(e, t, n, i), t.child)
  );
}
function Ou(e, t, n, r, i) {
  if (_e(n)) {
    var s = !0;
    Gi(t);
  } else s = !1;
  if ((zn(t, i), t.stateNode === null))
    _i(e, t), Ad(t, n, r), Ql(t, n, r, i), (r = !0);
  else if (e === null) {
    var l = t.stateNode,
      o = t.memoizedProps;
    l.props = o;
    var a = l.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = We(u))
      : ((u = _e(n) ? un : Se.current), (u = Dn(t, u)));
    var c = n.getDerivedStateFromProps,
      d =
        typeof c == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((o !== r || a !== u) && Su(t, l, r, u)),
      (_t = !1);
    var h = t.memoizedState;
    (l.state = h),
      qi(t, r, l, i),
      (a = t.memoizedState),
      o !== r || h !== a || Ne.current || _t
        ? (typeof c == "function" && (Kl(t, n, c, r), (a = t.memoizedState)),
          (o = _t || wu(t, n, o, r, h, a, u))
            ? (d ||
                (typeof l.UNSAFE_componentWillMount != "function" &&
                  typeof l.componentWillMount != "function") ||
                (typeof l.componentWillMount == "function" &&
                  l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == "function" &&
                  l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (l.props = r),
          (l.state = a),
          (l.context = u),
          (r = o))
        : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (l = t.stateNode),
      Id(e, t),
      (o = t.memoizedProps),
      (u = t.type === t.elementType ? o : Ye(t.type, o)),
      (l.props = u),
      (d = t.pendingProps),
      (h = l.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = We(a))
        : ((a = _e(n) ? un : Se.current), (a = Dn(t, a)));
    var g = n.getDerivedStateFromProps;
    (c =
      typeof g == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function") ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((o !== d || h !== a) && Su(t, l, r, a)),
      (_t = !1),
      (h = t.memoizedState),
      (l.state = h),
      qi(t, r, l, i);
    var v = t.memoizedState;
    o !== d || h !== v || Ne.current || _t
      ? (typeof g == "function" && (Kl(t, n, g, r), (v = t.memoizedState)),
        (u = _t || wu(t, n, u, r, h, v, a) || !1)
          ? (c ||
              (typeof l.UNSAFE_componentWillUpdate != "function" &&
                typeof l.componentWillUpdate != "function") ||
              (typeof l.componentWillUpdate == "function" &&
                l.componentWillUpdate(r, v, a),
              typeof l.UNSAFE_componentWillUpdate == "function" &&
                l.UNSAFE_componentWillUpdate(r, v, a)),
            typeof l.componentDidUpdate == "function" && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != "function" ||
              (o === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != "function" ||
              (o === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (l.props = r),
        (l.state = v),
        (l.context = a),
        (r = u))
      : (typeof l.componentDidUpdate != "function" ||
          (o === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" ||
          (o === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Zl(e, t, n, r, s, i);
}
function Zl(e, t, n, r, i, s) {
  cf(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return i && mu(t, n, !1), Tt(e, t, s);
  (r = t.stateNode), (Uh.current = t);
  var o =
    l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && l
      ? ((t.child = $n(t, e.child, null, s)), (t.child = $n(t, null, o, s)))
      : xe(e, t, o, s),
    (t.memoizedState = r.state),
    i && mu(t, n, !0),
    t.child
  );
}
function df(e) {
  var t = e.stateNode;
  t.pendingContext
    ? pu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && pu(e, t.context, !1),
    Jo(e, t.containerInfo);
}
function Lu(e, t, n, r, i) {
  return Bn(), Go(i), (t.flags |= 256), xe(e, t, n, r), t.child;
}
var eo = { dehydrated: null, treeContext: null, retryLane: 0 };
function to(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function ff(e, t, n) {
  var r = t.pendingProps,
    i = K.current,
    s = !1,
    l = (t.flags & 128) !== 0,
    o;
  if (
    ((o = l) ||
      (o = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    o
      ? ((s = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    W(K, i & 1),
    e === null)
  )
    return (
      Xl(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((l = r.children),
          (e = r.fallback),
          s
            ? ((r = t.mode),
              (s = t.child),
              (l = { mode: "hidden", children: l }),
              !(r & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = l))
                : (s = Es(l, r, 0, null)),
              (e = on(e, r, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = to(n)),
              (t.memoizedState = eo),
              e)
            : la(t, l))
    );
  if (((i = e.memoizedState), i !== null && ((o = i.dehydrated), o !== null)))
    return Vh(e, t, l, r, o, i, n);
  if (s) {
    (s = r.fallback), (l = t.mode), (i = e.child), (o = i.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(l & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = Vt(i, a)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      o !== null ? (s = Vt(o, s)) : ((s = on(s, l, n, null)), (s.flags |= 2)),
      (s.return = t),
      (r.return = t),
      (r.sibling = s),
      (t.child = r),
      (r = s),
      (s = t.child),
      (l = e.child.memoizedState),
      (l =
        l === null
          ? to(n)
          : {
              baseLanes: l.baseLanes | n,
              cachePool: null,
              transitions: l.transitions,
            }),
      (s.memoizedState = l),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = eo),
      r
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (r = Vt(s, { mode: "visible", children: r.children })),
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
function la(e, t) {
  return (
    (t = Es({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function mi(e, t, n, r) {
  return (
    r !== null && Go(r),
    $n(t, e.child, null, n),
    (e = la(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Vh(e, t, n, r, i, s, l) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = rl(Error(O(422)))), mi(e, t, l, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((s = r.fallback),
        (i = t.mode),
        (r = Es({ mode: "visible", children: r.children }, i, 0, null)),
        (s = on(s, i, l, null)),
        (s.flags |= 2),
        (r.return = t),
        (s.return = t),
        (r.sibling = s),
        (t.child = r),
        t.mode & 1 && $n(t, e.child, null, l),
        (t.child.memoizedState = to(l)),
        (t.memoizedState = eo),
        s);
  if (!(t.mode & 1)) return mi(e, t, l, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var o = r.dgst;
    return (r = o), (s = Error(O(419))), (r = rl(s, r, void 0)), mi(e, t, l, r);
  }
  if (((o = (l & e.childLanes) !== 0), ke || o)) {
    if (((r = pe), r !== null)) {
      switch (l & -l) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
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
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | l) ? 0 : i),
        i !== 0 &&
          i !== s.retryLane &&
          ((s.retryLane = i), Et(e, i), Je(r, e, i, -1));
    }
    return fa(), (r = rl(Error(O(421)))), mi(e, t, l, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = tg.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = s.treeContext),
      (je = Dt(i.nextSibling)),
      (Ie = t),
      (Y = !0),
      (Qe = null),
      e !== null &&
        (($e[Ue++] = ht),
        ($e[Ue++] = gt),
        ($e[Ue++] = cn),
        (ht = e.id),
        (gt = e.overflow),
        (cn = t)),
      (t = la(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Mu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Yl(e.return, t, n);
}
function il(e, t, n, r, i) {
  var s = e.memoizedState;
  s === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((s.isBackwards = t),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = r),
      (s.tail = n),
      (s.tailMode = i));
}
function pf(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    s = r.tail;
  if ((xe(e, t, r.children, n), (r = K.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Mu(e, n, t);
        else if (e.tag === 19) Mu(e, n, t);
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
  if ((W(K, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && Ji(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          il(t, !1, i, n, s);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Ji(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        il(t, !0, n, null, s);
        break;
      case "together":
        il(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function _i(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Tt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (fn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(O(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Vt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Vt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function bh(e, t, n) {
  switch (t.tag) {
    case 3:
      df(t), Bn();
      break;
    case 5:
      Bd(t);
      break;
    case 1:
      _e(t.type) && Gi(t);
      break;
    case 4:
      Jo(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      W(Ki, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (W(K, K.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? ff(e, t, n)
          : (W(K, K.current & 1),
            (e = Tt(e, t, n)),
            e !== null ? e.sibling : null);
      W(K, K.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return pf(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        W(K, K.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), uf(e, t, n);
  }
  return Tt(e, t, n);
}
var mf, no, hf, gf;
mf = function (e, t) {
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
no = function () {};
hf = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), sn(lt.current);
    var s = null;
    switch (n) {
      case "input":
        (i = Cl(e, i)), (r = Cl(e, r)), (s = []);
        break;
      case "select":
        (i = q({}, i, { value: void 0 })),
          (r = q({}, r, { value: void 0 })),
          (s = []);
        break;
      case "textarea":
        (i = Nl(e, i)), (r = Nl(e, r)), (s = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Hi);
    }
    Ol(n, r);
    var l;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var o = i[u];
          for (l in o) o.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Cr.hasOwnProperty(u)
              ? s || (s = [])
              : (s = s || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((o = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && a !== o && (a != null || o != null))
      )
        if (u === "style")
          if (o) {
            for (l in o)
              !o.hasOwnProperty(l) ||
                (a && a.hasOwnProperty(l)) ||
                (n || (n = {}), (n[l] = ""));
            for (l in a)
              a.hasOwnProperty(l) &&
                o[l] !== a[l] &&
                (n || (n = {}), (n[l] = a[l]));
          } else n || (s || (s = []), s.push(u, n)), (n = a);
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (o = o ? o.__html : void 0),
              a != null && o !== a && (s = s || []).push(u, a))
            : u === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (s = s || []).push(u, "" + a)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Cr.hasOwnProperty(u)
                ? (a != null && u === "onScroll" && G("scroll", e),
                  s || o === a || (s = []))
                : (s = s || []).push(u, a));
    }
    n && (s = s || []).push("style", n);
    var u = s;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
gf = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function sr(e, t) {
  if (!Y)
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
function ye(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Hh(e, t, n) {
  var r = t.pendingProps;
  switch ((Wo(t), t.tag)) {
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
      return ye(t), null;
    case 1:
      return _e(t.type) && Wi(), ye(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Un(),
        X(Ne),
        X(Se),
        ea(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (fi(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Qe !== null && (co(Qe), (Qe = null)))),
        no(e, t),
        ye(t),
        null
      );
    case 5:
      Zo(t);
      var i = sn(Ar.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        hf(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(O(166));
          return ye(t), null;
        }
        if (((e = sn(lt.current)), fi(t))) {
          (r = t.stateNode), (n = t.type);
          var s = t.memoizedProps;
          switch (((r[rt] = t), (r[Ir] = s), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              G("cancel", r), G("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              G("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < dr.length; i++) G(dr[i], r);
              break;
            case "source":
              G("error", r);
              break;
            case "img":
            case "image":
            case "link":
              G("error", r), G("load", r);
              break;
            case "details":
              G("toggle", r);
              break;
            case "input":
              $a(r, s), G("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!s.multiple }),
                G("invalid", r);
              break;
            case "textarea":
              Va(r, s), G("invalid", r);
          }
          Ol(n, s), (i = null);
          for (var l in s)
            if (s.hasOwnProperty(l)) {
              var o = s[l];
              l === "children"
                ? typeof o == "string"
                  ? r.textContent !== o &&
                    (s.suppressHydrationWarning !== !0 &&
                      di(r.textContent, o, e),
                    (i = ["children", o]))
                  : typeof o == "number" &&
                    r.textContent !== "" + o &&
                    (s.suppressHydrationWarning !== !0 &&
                      di(r.textContent, o, e),
                    (i = ["children", "" + o]))
                : Cr.hasOwnProperty(l) &&
                  o != null &&
                  l === "onScroll" &&
                  G("scroll", r);
            }
          switch (n) {
            case "input":
              ri(r), Ua(r, s, !0);
              break;
            case "textarea":
              ri(r), ba(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = Hi);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (l = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Vc(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = l.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = l.createElement(n, { is: r.is }))
                : ((e = l.createElement(n)),
                  n === "select" &&
                    ((l = e),
                    r.multiple
                      ? (l.multiple = !0)
                      : r.size && (l.size = r.size)))
              : (e = l.createElementNS(e, n)),
            (e[rt] = t),
            (e[Ir] = r),
            mf(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((l = Ll(n, r)), n)) {
              case "dialog":
                G("cancel", e), G("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                G("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < dr.length; i++) G(dr[i], e);
                i = r;
                break;
              case "source":
                G("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                G("error", e), G("load", e), (i = r);
                break;
              case "details":
                G("toggle", e), (i = r);
                break;
              case "input":
                $a(e, r), (i = Cl(e, r)), G("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = q({}, r, { value: void 0 })),
                  G("invalid", e);
                break;
              case "textarea":
                Va(e, r), (i = Nl(e, r)), G("invalid", e);
                break;
              default:
                i = r;
            }
            Ol(n, i), (o = i);
            for (s in o)
              if (o.hasOwnProperty(s)) {
                var a = o[s];
                s === "style"
                  ? Wc(e, a)
                  : s === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && bc(e, a))
                  : s === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && Pr(e, a)
                    : typeof a == "number" && Pr(e, "" + a)
                  : s !== "suppressContentEditableWarning" &&
                    s !== "suppressHydrationWarning" &&
                    s !== "autoFocus" &&
                    (Cr.hasOwnProperty(s)
                      ? a != null && s === "onScroll" && G("scroll", e)
                      : a != null && Lo(e, s, a, l));
              }
            switch (n) {
              case "input":
                ri(e), Ua(e, r, !1);
                break;
              case "textarea":
                ri(e), ba(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Wt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? Mn(e, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      Mn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Hi);
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
      return ye(t), null;
    case 6:
      if (e && t.stateNode != null) gf(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(O(166));
        if (((n = sn(Ar.current)), sn(lt.current), fi(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[rt] = t),
            (s = r.nodeValue !== n) && ((e = Ie), e !== null))
          )
            switch (e.tag) {
              case 3:
                di(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  di(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          s && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[rt] = t),
            (t.stateNode = r);
      }
      return ye(t), null;
    case 13:
      if (
        (X(K),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Y && je !== null && t.mode & 1 && !(t.flags & 128))
          Rd(), Bn(), (t.flags |= 98560), (s = !1);
        else if (((s = fi(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(O(318));
            if (
              ((s = t.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(O(317));
            s[rt] = t;
          } else
            Bn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ye(t), (s = !1);
        } else Qe !== null && (co(Qe), (Qe = null)), (s = !0);
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || K.current & 1 ? ue === 0 && (ue = 3) : fa())),
          t.updateQueue !== null && (t.flags |= 4),
          ye(t),
          null);
    case 4:
      return (
        Un(), no(e, t), e === null && Rr(t.stateNode.containerInfo), ye(t), null
      );
    case 10:
      return Ko(t.type._context), ye(t), null;
    case 17:
      return _e(t.type) && Wi(), ye(t), null;
    case 19:
      if ((X(K), (s = t.memoizedState), s === null)) return ye(t), null;
      if (((r = (t.flags & 128) !== 0), (l = s.rendering), l === null))
        if (r) sr(s, !1);
        else {
          if (ue !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = Ji(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    sr(s, !1),
                    r = l.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (s = n),
                    (e = r),
                    (s.flags &= 14680066),
                    (l = s.alternate),
                    l === null
                      ? ((s.childLanes = 0),
                        (s.lanes = e),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = l.childLanes),
                        (s.lanes = l.lanes),
                        (s.child = l.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = l.memoizedProps),
                        (s.memoizedState = l.memoizedState),
                        (s.updateQueue = l.updateQueue),
                        (s.type = l.type),
                        (e = l.dependencies),
                        (s.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return W(K, (K.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          s.tail !== null &&
            te() > bn &&
            ((t.flags |= 128), (r = !0), sr(s, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Ji(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              sr(s, !0),
              s.tail === null && s.tailMode === "hidden" && !l.alternate && !Y)
            )
              return ye(t), null;
          } else
            2 * te() - s.renderingStartTime > bn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), sr(s, !1), (t.lanes = 4194304));
        s.isBackwards
          ? ((l.sibling = t.child), (t.child = l))
          : ((n = s.last),
            n !== null ? (n.sibling = l) : (t.child = l),
            (s.last = l));
      }
      return s.tail !== null
        ? ((t = s.tail),
          (s.rendering = t),
          (s.tail = t.sibling),
          (s.renderingStartTime = te()),
          (t.sibling = null),
          (n = K.current),
          W(K, r ? (n & 1) | 2 : n & 1),
          t)
        : (ye(t), null);
    case 22:
    case 23:
      return (
        da(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Me & 1073741824 && (ye(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ye(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(O(156, t.tag));
}
function Wh(e, t) {
  switch ((Wo(t), t.tag)) {
    case 1:
      return (
        _e(t.type) && Wi(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Un(),
        X(Ne),
        X(Se),
        ea(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Zo(t), null;
    case 13:
      if ((X(K), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(O(340));
        Bn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return X(K), null;
    case 4:
      return Un(), null;
    case 10:
      return Ko(t.type._context), null;
    case 22:
    case 23:
      return da(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var hi = !1,
  we = !1,
  Gh = typeof WeakSet == "function" ? WeakSet : Set,
  j = null;
function On(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        J(e, t, r);
      }
    else n.current = null;
}
function ro(e, t, n) {
  try {
    n();
  } catch (r) {
    J(e, t, r);
  }
}
var Ru = !1;
function Xh(e, t) {
  if ((($l = Ui), (e = wd()), bo(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            s = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, s.nodeType;
          } catch {
            n = null;
            break e;
          }
          var l = 0,
            o = -1,
            a = -1,
            u = 0,
            c = 0,
            d = e,
            h = null;
          t: for (;;) {
            for (
              var g;
              d !== n || (i !== 0 && d.nodeType !== 3) || (o = l + i),
                d !== s || (r !== 0 && d.nodeType !== 3) || (a = l + r),
                d.nodeType === 3 && (l += d.nodeValue.length),
                (g = d.firstChild) !== null;

            )
              (h = d), (d = g);
            for (;;) {
              if (d === e) break t;
              if (
                (h === n && ++u === i && (o = l),
                h === s && ++c === r && (a = l),
                (g = d.nextSibling) !== null)
              )
                break;
              (d = h), (h = d.parentNode);
            }
            d = g;
          }
          n = o === -1 || a === -1 ? null : { start: o, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ul = { focusedElem: e, selectionRange: n }, Ui = !1, j = t; j !== null; )
    if (((t = j), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (j = e);
    else
      for (; j !== null; ) {
        t = j;
        try {
          var v = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var y = v.memoizedProps,
                    x = v.memoizedState,
                    f = t.stateNode,
                    p = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : Ye(t.type, y),
                      x
                    );
                  f.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = "")
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(O(163));
            }
        } catch (S) {
          J(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (j = e);
          break;
        }
        j = t.return;
      }
  return (v = Ru), (Ru = !1), v;
}
function wr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var s = i.destroy;
        (i.destroy = void 0), s !== void 0 && ro(t, n, s);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Ss(e, t) {
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
function io(e) {
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
function vf(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), vf(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[rt], delete t[Ir], delete t[Hl], delete t[Oh], delete t[Lh])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function yf(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ju(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || yf(e.return)) return null;
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
function so(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = Hi));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (so(e, t, n), e = e.sibling; e !== null; ) so(e, t, n), (e = e.sibling);
}
function lo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (lo(e, t, n), e = e.sibling; e !== null; ) lo(e, t, n), (e = e.sibling);
}
var me = null,
  Ke = !1;
function Pt(e, t, n) {
  for (n = n.child; n !== null; ) wf(e, t, n), (n = n.sibling);
}
function wf(e, t, n) {
  if (st && typeof st.onCommitFiberUnmount == "function")
    try {
      st.onCommitFiberUnmount(fs, n);
    } catch {}
  switch (n.tag) {
    case 5:
      we || On(n, t);
    case 6:
      var r = me,
        i = Ke;
      (me = null),
        Pt(e, t, n),
        (me = r),
        (Ke = i),
        me !== null &&
          (Ke
            ? ((e = me),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : me.removeChild(n.stateNode));
      break;
    case 18:
      me !== null &&
        (Ke
          ? ((e = me),
            (n = n.stateNode),
            e.nodeType === 8
              ? qs(e.parentNode, n)
              : e.nodeType === 1 && qs(e, n),
            Or(e))
          : qs(me, n.stateNode));
      break;
    case 4:
      (r = me),
        (i = Ke),
        (me = n.stateNode.containerInfo),
        (Ke = !0),
        Pt(e, t, n),
        (me = r),
        (Ke = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !we &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var s = i,
            l = s.destroy;
          (s = s.tag),
            l !== void 0 && (s & 2 || s & 4) && ro(n, t, l),
            (i = i.next);
        } while (i !== r);
      }
      Pt(e, t, n);
      break;
    case 1:
      if (
        !we &&
        (On(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (o) {
          J(n, t, o);
        }
      Pt(e, t, n);
      break;
    case 21:
      Pt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((we = (r = we) || n.memoizedState !== null), Pt(e, t, n), (we = r))
        : Pt(e, t, n);
      break;
    default:
      Pt(e, t, n);
  }
}
function Iu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Gh()),
      t.forEach(function (r) {
        var i = ng.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function Xe(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var s = e,
          l = t,
          o = l;
        e: for (; o !== null; ) {
          switch (o.tag) {
            case 5:
              (me = o.stateNode), (Ke = !1);
              break e;
            case 3:
              (me = o.stateNode.containerInfo), (Ke = !0);
              break e;
            case 4:
              (me = o.stateNode.containerInfo), (Ke = !0);
              break e;
          }
          o = o.return;
        }
        if (me === null) throw Error(O(160));
        wf(s, l, i), (me = null), (Ke = !1);
        var a = i.alternate;
        a !== null && (a.return = null), (i.return = null);
      } catch (u) {
        J(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Sf(t, e), (t = t.sibling);
}
function Sf(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Xe(t, e), et(e), r & 4)) {
        try {
          wr(3, e, e.return), Ss(3, e);
        } catch (y) {
          J(e, e.return, y);
        }
        try {
          wr(5, e, e.return);
        } catch (y) {
          J(e, e.return, y);
        }
      }
      break;
    case 1:
      Xe(t, e), et(e), r & 512 && n !== null && On(n, n.return);
      break;
    case 5:
      if (
        (Xe(t, e),
        et(e),
        r & 512 && n !== null && On(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Pr(i, "");
        } catch (y) {
          J(e, e.return, y);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var s = e.memoizedProps,
          l = n !== null ? n.memoizedProps : s,
          o = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            o === "input" && s.type === "radio" && s.name != null && $c(i, s),
              Ll(o, l);
            var u = Ll(o, s);
            for (l = 0; l < a.length; l += 2) {
              var c = a[l],
                d = a[l + 1];
              c === "style"
                ? Wc(i, d)
                : c === "dangerouslySetInnerHTML"
                ? bc(i, d)
                : c === "children"
                ? Pr(i, d)
                : Lo(i, c, d, u);
            }
            switch (o) {
              case "input":
                Pl(i, s);
                break;
              case "textarea":
                Uc(i, s);
                break;
              case "select":
                var h = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!s.multiple;
                var g = s.value;
                g != null
                  ? Mn(i, !!s.multiple, g, !1)
                  : h !== !!s.multiple &&
                    (s.defaultValue != null
                      ? Mn(i, !!s.multiple, s.defaultValue, !0)
                      : Mn(i, !!s.multiple, s.multiple ? [] : "", !1));
            }
            i[Ir] = s;
          } catch (y) {
            J(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((Xe(t, e), et(e), r & 4)) {
        if (e.stateNode === null) throw Error(O(162));
        (i = e.stateNode), (s = e.memoizedProps);
        try {
          i.nodeValue = s;
        } catch (y) {
          J(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        (Xe(t, e), et(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Or(t.containerInfo);
        } catch (y) {
          J(e, e.return, y);
        }
      break;
    case 4:
      Xe(t, e), et(e);
      break;
    case 13:
      Xe(t, e),
        et(e),
        (i = e.child),
        i.flags & 8192 &&
          ((s = i.memoizedState !== null),
          (i.stateNode.isHidden = s),
          !s ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (ua = te())),
        r & 4 && Iu(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((we = (u = we) || c), Xe(t, e), (we = u)) : Xe(t, e),
        et(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (j = e, c = e.child; c !== null; ) {
            for (d = j = c; j !== null; ) {
              switch (((h = j), (g = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  wr(4, h, h.return);
                  break;
                case 1:
                  On(h, h.return);
                  var v = h.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    (r = h), (n = h.return);
                    try {
                      (t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount();
                    } catch (y) {
                      J(r, n, y);
                    }
                  }
                  break;
                case 5:
                  On(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    Au(d);
                    continue;
                  }
              }
              g !== null ? ((g.return = h), (j = g)) : Au(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                (i = d.stateNode),
                  u
                    ? ((s = i.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((o = d.stateNode),
                      (a = d.memoizedProps.style),
                      (l =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (o.style.display = Hc("display", l)));
              } catch (y) {
                J(e, e.return, y);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (y) {
                J(e, e.return, y);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), (d = d.return);
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      Xe(t, e), et(e), r & 4 && Iu(e);
      break;
    case 21:
      break;
    default:
      Xe(t, e), et(e);
  }
}
function et(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (yf(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(O(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Pr(i, ""), (r.flags &= -33));
          var s = ju(e);
          lo(e, s, i);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            o = ju(e);
          so(e, o, l);
          break;
        default:
          throw Error(O(161));
      }
    } catch (a) {
      J(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Yh(e, t, n) {
  (j = e), xf(e);
}
function xf(e, t, n) {
  for (var r = (e.mode & 1) !== 0; j !== null; ) {
    var i = j,
      s = i.child;
    if (i.tag === 22 && r) {
      var l = i.memoizedState !== null || hi;
      if (!l) {
        var o = i.alternate,
          a = (o !== null && o.memoizedState !== null) || we;
        o = hi;
        var u = we;
        if (((hi = l), (we = a) && !u))
          for (j = i; j !== null; )
            (l = j),
              (a = l.child),
              l.tag === 22 && l.memoizedState !== null
                ? Fu(i)
                : a !== null
                ? ((a.return = l), (j = a))
                : Fu(i);
        for (; s !== null; ) (j = s), xf(s), (s = s.sibling);
        (j = i), (hi = o), (we = u);
      }
      zu(e);
    } else
      i.subtreeFlags & 8772 && s !== null ? ((s.return = i), (j = s)) : zu(e);
  }
}
function zu(e) {
  for (; j !== null; ) {
    var t = j;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              we || Ss(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !we)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ye(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var s = t.updateQueue;
              s !== null && yu(t, s, r);
              break;
            case 3:
              var l = t.updateQueue;
              if (l !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                yu(t, l, n);
              }
              break;
            case 5:
              var o = t.stateNode;
              if (n === null && t.flags & 4) {
                n = o;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
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
                  var c = u.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && Or(d);
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
              throw Error(O(163));
          }
        we || (t.flags & 512 && io(t));
      } catch (h) {
        J(t, t.return, h);
      }
    }
    if (t === e) {
      j = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (j = n);
      break;
    }
    j = t.return;
  }
}
function Au(e) {
  for (; j !== null; ) {
    var t = j;
    if (t === e) {
      j = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (j = n);
      break;
    }
    j = t.return;
  }
}
function Fu(e) {
  for (; j !== null; ) {
    var t = j;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ss(4, t);
          } catch (a) {
            J(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              J(t, i, a);
            }
          }
          var s = t.return;
          try {
            io(t);
          } catch (a) {
            J(t, s, a);
          }
          break;
        case 5:
          var l = t.return;
          try {
            io(t);
          } catch (a) {
            J(t, l, a);
          }
      }
    } catch (a) {
      J(t, t.return, a);
    }
    if (t === e) {
      j = null;
      break;
    }
    var o = t.sibling;
    if (o !== null) {
      (o.return = t.return), (j = o);
      break;
    }
    j = t.return;
  }
}
var Kh = Math.ceil,
  ts = Ct.ReactCurrentDispatcher,
  oa = Ct.ReactCurrentOwner,
  be = Ct.ReactCurrentBatchConfig,
  U = 0,
  pe = null,
  se = null,
  he = 0,
  Me = 0,
  Ln = Kt(0),
  ue = 0,
  $r = null,
  fn = 0,
  xs = 0,
  aa = 0,
  Sr = null,
  Pe = null,
  ua = 0,
  bn = 1 / 0,
  ct = null,
  ns = !1,
  oo = null,
  $t = null,
  gi = !1,
  Rt = null,
  rs = 0,
  xr = 0,
  ao = null,
  Oi = -1,
  Li = 0;
function Ee() {
  return U & 6 ? te() : Oi !== -1 ? Oi : (Oi = te());
}
function Ut(e) {
  return e.mode & 1
    ? U & 2 && he !== 0
      ? he & -he
      : Rh.transition !== null
      ? (Li === 0 && (Li = rd()), Li)
      : ((e = V),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : cd(e.type))),
        e)
    : 1;
}
function Je(e, t, n, r) {
  if (50 < xr) throw ((xr = 0), (ao = null), Error(O(185)));
  Gr(e, n, r),
    (!(U & 2) || e !== pe) &&
      (e === pe && (!(U & 2) && (xs |= n), ue === 4 && Lt(e, he)),
      Oe(e, r),
      n === 1 && U === 0 && !(t.mode & 1) && ((bn = te() + 500), vs && Qt()));
}
function Oe(e, t) {
  var n = e.callbackNode;
  Rm(e, t);
  var r = $i(e, e === pe ? he : 0);
  if (r === 0)
    n !== null && Ga(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Ga(n), t === 1))
      e.tag === 0 ? Mh(Du.bind(null, e)) : Od(Du.bind(null, e)),
        Nh(function () {
          !(U & 6) && Qt();
        }),
        (n = null);
    else {
      switch (id(r)) {
        case 1:
          n = zo;
          break;
        case 4:
          n = td;
          break;
        case 16:
          n = Bi;
          break;
        case 536870912:
          n = nd;
          break;
        default:
          n = Bi;
      }
      n = Of(n, Ef.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Ef(e, t) {
  if (((Oi = -1), (Li = 0), U & 6)) throw Error(O(327));
  var n = e.callbackNode;
  if (An() && e.callbackNode !== n) return null;
  var r = $i(e, e === pe ? he : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = is(e, r);
  else {
    t = r;
    var i = U;
    U |= 2;
    var s = Cf();
    (pe !== e || he !== t) && ((ct = null), (bn = te() + 500), ln(e, t));
    do
      try {
        Jh();
        break;
      } catch (o) {
        Tf(e, o);
      }
    while (1);
    Yo(),
      (ts.current = s),
      (U = i),
      se !== null ? (t = 0) : ((pe = null), (he = 0), (t = ue));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = zl(e)), i !== 0 && ((r = i), (t = uo(e, i)))), t === 1)
    )
      throw ((n = $r), ln(e, 0), Lt(e, r), Oe(e, te()), n);
    if (t === 6) Lt(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !Qh(i) &&
          ((t = is(e, r)),
          t === 2 && ((s = zl(e)), s !== 0 && ((r = s), (t = uo(e, s)))),
          t === 1))
      )
        throw ((n = $r), ln(e, 0), Lt(e, r), Oe(e, te()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(O(345));
        case 2:
          tn(e, Pe, ct);
          break;
        case 3:
          if (
            (Lt(e, r), (r & 130023424) === r && ((t = ua + 500 - te()), 10 < t))
          ) {
            if ($i(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              Ee(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = bl(tn.bind(null, e, Pe, ct), t);
            break;
          }
          tn(e, Pe, ct);
          break;
        case 4:
          if ((Lt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var l = 31 - qe(r);
            (s = 1 << l), (l = t[l]), l > i && (i = l), (r &= ~s);
          }
          if (
            ((r = i),
            (r = te() - r),
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
                : 1960 * Kh(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = bl(tn.bind(null, e, Pe, ct), r);
            break;
          }
          tn(e, Pe, ct);
          break;
        case 5:
          tn(e, Pe, ct);
          break;
        default:
          throw Error(O(329));
      }
    }
  }
  return Oe(e, te()), e.callbackNode === n ? Ef.bind(null, e) : null;
}
function uo(e, t) {
  var n = Sr;
  return (
    e.current.memoizedState.isDehydrated && (ln(e, t).flags |= 256),
    (e = is(e, t)),
    e !== 2 && ((t = Pe), (Pe = n), t !== null && co(t)),
    e
  );
}
function co(e) {
  Pe === null ? (Pe = e) : Pe.push.apply(Pe, e);
}
function Qh(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            s = i.getSnapshot;
          i = i.value;
          try {
            if (!Ze(s(), i)) return !1;
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
function Lt(e, t) {
  for (
    t &= ~aa,
      t &= ~xs,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - qe(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Du(e) {
  if (U & 6) throw Error(O(327));
  An();
  var t = $i(e, 0);
  if (!(t & 1)) return Oe(e, te()), null;
  var n = is(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = zl(e);
    r !== 0 && ((t = r), (n = uo(e, r)));
  }
  if (n === 1) throw ((n = $r), ln(e, 0), Lt(e, t), Oe(e, te()), n);
  if (n === 6) throw Error(O(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    tn(e, Pe, ct),
    Oe(e, te()),
    null
  );
}
function ca(e, t) {
  var n = U;
  U |= 1;
  try {
    return e(t);
  } finally {
    (U = n), U === 0 && ((bn = te() + 500), vs && Qt());
  }
}
function pn(e) {
  Rt !== null && Rt.tag === 0 && !(U & 6) && An();
  var t = U;
  U |= 1;
  var n = be.transition,
    r = V;
  try {
    if (((be.transition = null), (V = 1), e)) return e();
  } finally {
    (V = r), (be.transition = n), (U = t), !(U & 6) && Qt();
  }
}
function da() {
  (Me = Ln.current), X(Ln);
}
function ln(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), kh(n)), se !== null))
    for (n = se.return; n !== null; ) {
      var r = n;
      switch ((Wo(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Wi();
          break;
        case 3:
          Un(), X(Ne), X(Se), ea();
          break;
        case 5:
          Zo(r);
          break;
        case 4:
          Un();
          break;
        case 13:
          X(K);
          break;
        case 19:
          X(K);
          break;
        case 10:
          Ko(r.type._context);
          break;
        case 22:
        case 23:
          da();
      }
      n = n.return;
    }
  if (
    ((pe = e),
    (se = e = Vt(e.current, null)),
    (he = Me = t),
    (ue = 0),
    ($r = null),
    (aa = xs = fn = 0),
    (Pe = Sr = null),
    rn !== null)
  ) {
    for (t = 0; t < rn.length; t++)
      if (((n = rn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          s = n.pending;
        if (s !== null) {
          var l = s.next;
          (s.next = i), (r.next = l);
        }
        n.pending = r;
      }
    rn = null;
  }
  return e;
}
function Tf(e, t) {
  do {
    var n = se;
    try {
      if ((Yo(), (ki.current = es), Zi)) {
        for (var r = Q.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        Zi = !1;
      }
      if (
        ((dn = 0),
        (de = ae = Q = null),
        (yr = !1),
        (Fr = 0),
        (oa.current = null),
        n === null || n.return === null)
      ) {
        (ue = 1), ($r = t), (se = null);
        break;
      }
      e: {
        var s = e,
          l = n.return,
          o = n,
          a = t;
        if (
          ((t = he),
          (o.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            c = o,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var h = c.alternate;
            h
              ? ((c.updateQueue = h.updateQueue),
                (c.memoizedState = h.memoizedState),
                (c.lanes = h.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var g = Pu(l);
          if (g !== null) {
            (g.flags &= -257),
              ku(g, l, o, s, t),
              g.mode & 1 && Cu(s, u, t),
              (t = g),
              (a = u);
            var v = t.updateQueue;
            if (v === null) {
              var y = new Set();
              y.add(a), (t.updateQueue = y);
            } else v.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Cu(s, u, t), fa();
              break e;
            }
            a = Error(O(426));
          }
        } else if (Y && o.mode & 1) {
          var x = Pu(l);
          if (x !== null) {
            !(x.flags & 65536) && (x.flags |= 256),
              ku(x, l, o, s, t),
              Go(Vn(a, o));
            break e;
          }
        }
        (s = a = Vn(a, o)),
          ue !== 4 && (ue = 2),
          Sr === null ? (Sr = [s]) : Sr.push(s),
          (s = l);
        do {
          switch (s.tag) {
            case 3:
              (s.flags |= 65536), (t &= -t), (s.lanes |= t);
              var f = lf(s, a, t);
              vu(s, f);
              break e;
            case 1:
              o = a;
              var p = s.type,
                m = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    ($t === null || !$t.has(m))))
              ) {
                (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                var S = of(s, o, t);
                vu(s, S);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      kf(n);
    } catch (E) {
      (t = E), se === n && n !== null && (se = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Cf() {
  var e = ts.current;
  return (ts.current = es), e === null ? es : e;
}
function fa() {
  (ue === 0 || ue === 3 || ue === 2) && (ue = 4),
    pe === null || (!(fn & 268435455) && !(xs & 268435455)) || Lt(pe, he);
}
function is(e, t) {
  var n = U;
  U |= 2;
  var r = Cf();
  (pe !== e || he !== t) && ((ct = null), ln(e, t));
  do
    try {
      qh();
      break;
    } catch (i) {
      Tf(e, i);
    }
  while (1);
  if ((Yo(), (U = n), (ts.current = r), se !== null)) throw Error(O(261));
  return (pe = null), (he = 0), ue;
}
function qh() {
  for (; se !== null; ) Pf(se);
}
function Jh() {
  for (; se !== null && !Tm(); ) Pf(se);
}
function Pf(e) {
  var t = _f(e.alternate, e, Me);
  (e.memoizedProps = e.pendingProps),
    t === null ? kf(e) : (se = t),
    (oa.current = null);
}
function kf(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Wh(n, t)), n !== null)) {
        (n.flags &= 32767), (se = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ue = 6), (se = null);
        return;
      }
    } else if (((n = Hh(n, t, Me)), n !== null)) {
      se = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      se = t;
      return;
    }
    se = t = e;
  } while (t !== null);
  ue === 0 && (ue = 5);
}
function tn(e, t, n) {
  var r = V,
    i = be.transition;
  try {
    (be.transition = null), (V = 1), Zh(e, t, n, r);
  } finally {
    (be.transition = i), (V = r);
  }
  return null;
}
function Zh(e, t, n, r) {
  do An();
  while (Rt !== null);
  if (U & 6) throw Error(O(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(O(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var s = n.lanes | n.childLanes;
  if (
    (jm(e, s),
    e === pe && ((se = pe = null), (he = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      gi ||
      ((gi = !0),
      Of(Bi, function () {
        return An(), null;
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    (s = be.transition), (be.transition = null);
    var l = V;
    V = 1;
    var o = U;
    (U |= 4),
      (oa.current = null),
      Xh(e, n),
      Sf(n, e),
      wh(Ul),
      (Ui = !!$l),
      (Ul = $l = null),
      (e.current = n),
      Yh(n),
      Cm(),
      (U = o),
      (V = l),
      (be.transition = s);
  } else e.current = n;
  if (
    (gi && ((gi = !1), (Rt = e), (rs = i)),
    (s = e.pendingLanes),
    s === 0 && ($t = null),
    Nm(n.stateNode),
    Oe(e, te()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (ns) throw ((ns = !1), (e = oo), (oo = null), e);
  return (
    rs & 1 && e.tag !== 0 && An(),
    (s = e.pendingLanes),
    s & 1 ? (e === ao ? xr++ : ((xr = 0), (ao = e))) : (xr = 0),
    Qt(),
    null
  );
}
function An() {
  if (Rt !== null) {
    var e = id(rs),
      t = be.transition,
      n = V;
    try {
      if (((be.transition = null), (V = 16 > e ? 16 : e), Rt === null))
        var r = !1;
      else {
        if (((e = Rt), (Rt = null), (rs = 0), U & 6)) throw Error(O(331));
        var i = U;
        for (U |= 4, j = e.current; j !== null; ) {
          var s = j,
            l = s.child;
          if (j.flags & 16) {
            var o = s.deletions;
            if (o !== null) {
              for (var a = 0; a < o.length; a++) {
                var u = o[a];
                for (j = u; j !== null; ) {
                  var c = j;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      wr(8, c, s);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (j = d);
                  else
                    for (; j !== null; ) {
                      c = j;
                      var h = c.sibling,
                        g = c.return;
                      if ((vf(c), c === u)) {
                        j = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = g), (j = h);
                        break;
                      }
                      j = g;
                    }
                }
              }
              var v = s.alternate;
              if (v !== null) {
                var y = v.child;
                if (y !== null) {
                  v.child = null;
                  do {
                    var x = y.sibling;
                    (y.sibling = null), (y = x);
                  } while (y !== null);
                }
              }
              j = s;
            }
          }
          if (s.subtreeFlags & 2064 && l !== null) (l.return = s), (j = l);
          else
            e: for (; j !== null; ) {
              if (((s = j), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    wr(9, s, s.return);
                }
              var f = s.sibling;
              if (f !== null) {
                (f.return = s.return), (j = f);
                break e;
              }
              j = s.return;
            }
        }
        var p = e.current;
        for (j = p; j !== null; ) {
          l = j;
          var m = l.child;
          if (l.subtreeFlags & 2064 && m !== null) (m.return = l), (j = m);
          else
            e: for (l = p; j !== null; ) {
              if (((o = j), o.flags & 2048))
                try {
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ss(9, o);
                  }
                } catch (E) {
                  J(o, o.return, E);
                }
              if (o === l) {
                j = null;
                break e;
              }
              var S = o.sibling;
              if (S !== null) {
                (S.return = o.return), (j = S);
                break e;
              }
              j = o.return;
            }
        }
        if (
          ((U = i), Qt(), st && typeof st.onPostCommitFiberRoot == "function")
        )
          try {
            st.onPostCommitFiberRoot(fs, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (V = n), (be.transition = t);
    }
  }
  return !1;
}
function Bu(e, t, n) {
  (t = Vn(n, t)),
    (t = lf(e, t, 1)),
    (e = Bt(e, t, 1)),
    (t = Ee()),
    e !== null && (Gr(e, 1, t), Oe(e, t));
}
function J(e, t, n) {
  if (e.tag === 3) Bu(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Bu(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            ($t === null || !$t.has(r)))
        ) {
          (e = Vn(n, e)),
            (e = of(t, e, 1)),
            (t = Bt(t, e, 1)),
            (e = Ee()),
            t !== null && (Gr(t, 1, e), Oe(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function eg(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Ee()),
    (e.pingedLanes |= e.suspendedLanes & n),
    pe === e &&
      (he & n) === n &&
      (ue === 4 || (ue === 3 && (he & 130023424) === he && 500 > te() - ua)
        ? ln(e, 0)
        : (aa |= n)),
    Oe(e, t);
}
function Nf(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = li), (li <<= 1), !(li & 130023424) && (li = 4194304))
      : (t = 1));
  var n = Ee();
  (e = Et(e, t)), e !== null && (Gr(e, t, n), Oe(e, n));
}
function tg(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Nf(e, n);
}
function ng(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(O(314));
  }
  r !== null && r.delete(t), Nf(e, n);
}
var _f;
_f = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ne.current) ke = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (ke = !1), bh(e, t, n);
      ke = !!(e.flags & 131072);
    }
  else (ke = !1), Y && t.flags & 1048576 && Ld(t, Yi, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      _i(e, t), (e = t.pendingProps);
      var i = Dn(t, Se.current);
      zn(t, n), (i = na(null, t, r, e, i, n));
      var s = ra();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            _e(r) ? ((s = !0), Gi(t)) : (s = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            qo(t),
            (i.updater = ys),
            (t.stateNode = i),
            (i._reactInternals = t),
            Ql(t, r, e, n),
            (t = Zl(null, t, r, !0, s, n)))
          : ((t.tag = 0), Y && s && Ho(t), xe(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (_i(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = ig(r)),
          (e = Ye(r, e)),
          i)
        ) {
          case 0:
            t = Jl(null, t, r, e, n);
            break e;
          case 1:
            t = Ou(null, t, r, e, n);
            break e;
          case 11:
            t = Nu(null, t, r, e, n);
            break e;
          case 14:
            t = _u(null, t, r, Ye(r.type, e), n);
            break e;
        }
        throw Error(O(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ye(r, i)),
        Jl(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ye(r, i)),
        Ou(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((df(t), e === null)) throw Error(O(387));
        (r = t.pendingProps),
          (s = t.memoizedState),
          (i = s.element),
          Id(e, t),
          qi(t, r, null, n);
        var l = t.memoizedState;
        if (((r = l.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: l.cache,
              pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
              transitions: l.transitions,
            }),
            (t.updateQueue.baseState = s),
            (t.memoizedState = s),
            t.flags & 256)
          ) {
            (i = Vn(Error(O(423)), t)), (t = Lu(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Vn(Error(O(424)), t)), (t = Lu(e, t, r, n, i));
            break e;
          } else
            for (
              je = Dt(t.stateNode.containerInfo.firstChild),
                Ie = t,
                Y = !0,
                Qe = null,
                n = Dd(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Bn(), r === i)) {
            t = Tt(e, t, n);
            break e;
          }
          xe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Bd(t),
        e === null && Xl(t),
        (r = t.type),
        (i = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (l = i.children),
        Vl(r, i) ? (l = null) : s !== null && Vl(r, s) && (t.flags |= 32),
        cf(e, t),
        xe(e, t, l, n),
        t.child
      );
    case 6:
      return e === null && Xl(t), null;
    case 13:
      return ff(e, t, n);
    case 4:
      return (
        Jo(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = $n(t, null, r, n)) : xe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ye(r, i)),
        Nu(e, t, r, i, n)
      );
    case 7:
      return xe(e, t, t.pendingProps, n), t.child;
    case 8:
      return xe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return xe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (s = t.memoizedProps),
          (l = i.value),
          W(Ki, r._currentValue),
          (r._currentValue = l),
          s !== null)
        )
          if (Ze(s.value, l)) {
            if (s.children === i.children && !Ne.current) {
              t = Tt(e, t, n);
              break e;
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null; ) {
              var o = s.dependencies;
              if (o !== null) {
                l = s.child;
                for (var a = o.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (s.tag === 1) {
                      (a = yt(-1, n & -n)), (a.tag = 2);
                      var u = s.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (a.next = a)
                          : ((a.next = c.next), (c.next = a)),
                          (u.pending = a);
                      }
                    }
                    (s.lanes |= n),
                      (a = s.alternate),
                      a !== null && (a.lanes |= n),
                      Yl(s.return, n, t),
                      (o.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (s.tag === 10) l = s.type === t.type ? null : s.child;
              else if (s.tag === 18) {
                if (((l = s.return), l === null)) throw Error(O(341));
                (l.lanes |= n),
                  (o = l.alternate),
                  o !== null && (o.lanes |= n),
                  Yl(l, n, t),
                  (l = s.sibling);
              } else l = s.child;
              if (l !== null) l.return = s;
              else
                for (l = s; l !== null; ) {
                  if (l === t) {
                    l = null;
                    break;
                  }
                  if (((s = l.sibling), s !== null)) {
                    (s.return = l.return), (l = s);
                    break;
                  }
                  l = l.return;
                }
              s = l;
            }
        xe(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        zn(t, n),
        (i = We(i)),
        (r = r(i)),
        (t.flags |= 1),
        xe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = Ye(r, t.pendingProps)),
        (i = Ye(r.type, i)),
        _u(e, t, r, i, n)
      );
    case 15:
      return af(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ye(r, i)),
        _i(e, t),
        (t.tag = 1),
        _e(r) ? ((e = !0), Gi(t)) : (e = !1),
        zn(t, n),
        Ad(t, r, i),
        Ql(t, r, i, n),
        Zl(null, t, r, !0, e, n)
      );
    case 19:
      return pf(e, t, n);
    case 22:
      return uf(e, t, n);
  }
  throw Error(O(156, t.tag));
};
function Of(e, t) {
  return ed(e, t);
}
function rg(e, t, n, r) {
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
function Ve(e, t, n, r) {
  return new rg(e, t, n, r);
}
function pa(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function ig(e) {
  if (typeof e == "function") return pa(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Ro)) return 11;
    if (e === jo) return 14;
  }
  return 2;
}
function Vt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ve(e.tag, t, e.key, e.mode)),
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
function Mi(e, t, n, r, i, s) {
  var l = 2;
  if (((r = e), typeof e == "function")) pa(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else
    e: switch (e) {
      case Sn:
        return on(n.children, i, s, t);
      case Mo:
        (l = 8), (i |= 8);
        break;
      case Sl:
        return (
          (e = Ve(12, n, t, i | 2)), (e.elementType = Sl), (e.lanes = s), e
        );
      case xl:
        return (e = Ve(13, n, t, i)), (e.elementType = xl), (e.lanes = s), e;
      case El:
        return (e = Ve(19, n, t, i)), (e.elementType = El), (e.lanes = s), e;
      case Fc:
        return Es(n, i, s, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case zc:
              l = 10;
              break e;
            case Ac:
              l = 9;
              break e;
            case Ro:
              l = 11;
              break e;
            case jo:
              l = 14;
              break e;
            case Nt:
              (l = 16), (r = null);
              break e;
          }
        throw Error(O(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ve(l, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = s), t
  );
}
function on(e, t, n, r) {
  return (e = Ve(7, e, r, t)), (e.lanes = n), e;
}
function Es(e, t, n, r) {
  return (
    (e = Ve(22, e, r, t)),
    (e.elementType = Fc),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function sl(e, t, n) {
  return (e = Ve(6, e, null, t)), (e.lanes = n), e;
}
function ll(e, t, n) {
  return (
    (t = Ve(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function sg(e, t, n, r, i) {
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
    (this.eventTimes = $s(0)),
    (this.expirationTimes = $s(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = $s(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function ma(e, t, n, r, i, s, l, o, a) {
  return (
    (e = new sg(e, t, n, o, a)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = Ve(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    qo(s),
    e
  );
}
function lg(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: wn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Lf(e) {
  if (!e) return Gt;
  e = e._reactInternals;
  e: {
    if (gn(e) !== e || e.tag !== 1) throw Error(O(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (_e(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(O(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (_e(n)) return _d(e, n, t);
  }
  return t;
}
function Mf(e, t, n, r, i, s, l, o, a) {
  return (
    (e = ma(n, r, !0, e, i, s, l, o, a)),
    (e.context = Lf(null)),
    (n = e.current),
    (r = Ee()),
    (i = Ut(n)),
    (s = yt(r, i)),
    (s.callback = t ?? null),
    Bt(n, s, i),
    (e.current.lanes = i),
    Gr(e, i, r),
    Oe(e, r),
    e
  );
}
function Ts(e, t, n, r) {
  var i = t.current,
    s = Ee(),
    l = Ut(i);
  return (
    (n = Lf(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = yt(s, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Bt(i, t, l)),
    e !== null && (Je(e, i, l, s), Pi(e, i, l)),
    l
  );
}
function ss(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function $u(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ha(e, t) {
  $u(e, t), (e = e.alternate) && $u(e, t);
}
function og() {
  return null;
}
var Rf =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function ga(e) {
  this._internalRoot = e;
}
Cs.prototype.render = ga.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(O(409));
  Ts(e, t, null, null);
};
Cs.prototype.unmount = ga.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    pn(function () {
      Ts(null, e, null, null);
    }),
      (t[xt] = null);
  }
};
function Cs(e) {
  this._internalRoot = e;
}
Cs.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = od();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Ot.length && t !== 0 && t < Ot[n].priority; n++);
    Ot.splice(n, 0, e), n === 0 && ud(e);
  }
};
function va(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ps(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Uu() {}
function ag(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var u = ss(l);
        s.call(u);
      };
    }
    var l = Mf(t, r, e, 0, null, !1, !1, "", Uu);
    return (
      (e._reactRootContainer = l),
      (e[xt] = l.current),
      Rr(e.nodeType === 8 ? e.parentNode : e),
      pn(),
      l
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var o = r;
    r = function () {
      var u = ss(a);
      o.call(u);
    };
  }
  var a = ma(e, 0, !1, null, null, !1, !1, "", Uu);
  return (
    (e._reactRootContainer = a),
    (e[xt] = a.current),
    Rr(e.nodeType === 8 ? e.parentNode : e),
    pn(function () {
      Ts(t, a, n, r);
    }),
    a
  );
}
function ks(e, t, n, r, i) {
  var s = n._reactRootContainer;
  if (s) {
    var l = s;
    if (typeof i == "function") {
      var o = i;
      i = function () {
        var a = ss(l);
        o.call(a);
      };
    }
    Ts(t, l, e, i);
  } else l = ag(n, t, e, i, r);
  return ss(l);
}
sd = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = cr(t.pendingLanes);
        n !== 0 &&
          (Ao(t, n | 1), Oe(t, te()), !(U & 6) && ((bn = te() + 500), Qt()));
      }
      break;
    case 13:
      pn(function () {
        var r = Et(e, 1);
        if (r !== null) {
          var i = Ee();
          Je(r, e, 1, i);
        }
      }),
        ha(e, 1);
  }
};
Fo = function (e) {
  if (e.tag === 13) {
    var t = Et(e, 134217728);
    if (t !== null) {
      var n = Ee();
      Je(t, e, 134217728, n);
    }
    ha(e, 134217728);
  }
};
ld = function (e) {
  if (e.tag === 13) {
    var t = Ut(e),
      n = Et(e, t);
    if (n !== null) {
      var r = Ee();
      Je(n, e, t, r);
    }
    ha(e, t);
  }
};
od = function () {
  return V;
};
ad = function (e, t) {
  var n = V;
  try {
    return (V = e), t();
  } finally {
    V = n;
  }
};
Rl = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Pl(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = gs(r);
            if (!i) throw Error(O(90));
            Bc(r), Pl(r, i);
          }
        }
      }
      break;
    case "textarea":
      Uc(e, n);
      break;
    case "select":
      (t = n.value), t != null && Mn(e, !!n.multiple, t, !1);
  }
};
Yc = ca;
Kc = pn;
var ug = { usingClientEntryPoint: !1, Events: [Yr, Cn, gs, Gc, Xc, ca] },
  lr = {
    findFiberByHostInstance: nn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  cg = {
    bundleType: lr.bundleType,
    version: lr.version,
    rendererPackageName: lr.rendererPackageName,
    rendererConfig: lr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ct.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Jc(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: lr.findFiberByHostInstance || og,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var vi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!vi.isDisabled && vi.supportsFiber)
    try {
      (fs = vi.inject(cg)), (st = vi);
    } catch {}
}
Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ug;
Ae.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!va(t)) throw Error(O(200));
  return lg(e, t, null, n);
};
Ae.createRoot = function (e, t) {
  if (!va(e)) throw Error(O(299));
  var n = !1,
    r = "",
    i = Rf;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = ma(e, 1, !1, null, null, n, !1, r, i)),
    (e[xt] = t.current),
    Rr(e.nodeType === 8 ? e.parentNode : e),
    new ga(t)
  );
};
Ae.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(O(188))
      : ((e = Object.keys(e).join(",")), Error(O(268, e)));
  return (e = Jc(t)), (e = e === null ? null : e.stateNode), e;
};
Ae.flushSync = function (e) {
  return pn(e);
};
Ae.hydrate = function (e, t, n) {
  if (!Ps(t)) throw Error(O(200));
  return ks(null, e, t, !0, n);
};
Ae.hydrateRoot = function (e, t, n) {
  if (!va(e)) throw Error(O(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    s = "",
    l = Rf;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (t = Mf(t, null, e, 1, n ?? null, i, !1, s, l)),
    (e[xt] = t.current),
    Rr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new Cs(t);
};
Ae.render = function (e, t, n) {
  if (!Ps(t)) throw Error(O(200));
  return ks(null, e, t, !1, n);
};
Ae.unmountComponentAtNode = function (e) {
  if (!Ps(e)) throw Error(O(40));
  return e._reactRootContainer
    ? (pn(function () {
        ks(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[xt] = null);
        });
      }),
      !0)
    : !1;
};
Ae.unstable_batchedUpdates = ca;
Ae.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Ps(n)) throw Error(O(200));
  if (e == null || e._reactInternals === void 0) throw Error(O(38));
  return ks(e, t, n, !1, r);
};
Ae.version = "18.2.0-next-9e3b772b8-20220608";
function jf() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jf);
    } catch (e) {
      console.error(e);
    }
}
jf(), (Lc.exports = Ae);
var dg = Lc.exports,
  Vu = dg;
(yl.createRoot = Vu.createRoot), (yl.hydrateRoot = Vu.hydrateRoot);
/**
 * @remix-run/router v1.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ur() {
  return (
    (Ur = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ur.apply(this, arguments)
  );
}
var jt;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(jt || (jt = {}));
const bu = "popstate";
function fg(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let { pathname: s, search: l, hash: o } = r.location;
    return fo(
      "",
      { pathname: s, search: l, hash: o },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default"
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : ls(i);
  }
  return mg(t, n, null, e);
}
function le(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function ya(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function pg() {
  return Math.random().toString(36).substr(2, 8);
}
function Hu(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function fo(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Ur(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Kn(t) : t,
      { state: n, key: (t && t.key) || r || pg() }
    )
  );
}
function ls(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Kn(e) {
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
function mg(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: s = !1 } = r,
    l = i.history,
    o = jt.Pop,
    a = null,
    u = c();
  u == null && ((u = 0), l.replaceState(Ur({}, l.state, { idx: u }), ""));
  function c() {
    return (l.state || { idx: null }).idx;
  }
  function d() {
    o = jt.Pop;
    let x = c(),
      f = x == null ? null : x - u;
    (u = x), a && a({ action: o, location: y.location, delta: f });
  }
  function h(x, f) {
    o = jt.Push;
    let p = fo(y.location, x, f);
    n && n(p, x), (u = c() + 1);
    let m = Hu(p, u),
      S = y.createHref(p);
    try {
      l.pushState(m, "", S);
    } catch (E) {
      if (E instanceof DOMException && E.name === "DataCloneError") throw E;
      i.location.assign(S);
    }
    s && a && a({ action: o, location: y.location, delta: 1 });
  }
  function g(x, f) {
    o = jt.Replace;
    let p = fo(y.location, x, f);
    n && n(p, x), (u = c());
    let m = Hu(p, u),
      S = y.createHref(p);
    l.replaceState(m, "", S),
      s && a && a({ action: o, location: y.location, delta: 0 });
  }
  function v(x) {
    let f = i.location.origin !== "null" ? i.location.origin : i.location.href,
      p = typeof x == "string" ? x : ls(x);
    return (
      le(
        f,
        "No window.location.(origin|href) available to create URL for href: " +
          p
      ),
      new URL(p, f)
    );
  }
  let y = {
    get action() {
      return o;
    },
    get location() {
      return e(i, l);
    },
    listen(x) {
      if (a) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(bu, d),
        (a = x),
        () => {
          i.removeEventListener(bu, d), (a = null);
        }
      );
    },
    createHref(x) {
      return t(i, x);
    },
    createURL: v,
    encodeLocation(x) {
      let f = v(x);
      return { pathname: f.pathname, search: f.search, hash: f.hash };
    },
    push: h,
    replace: g,
    go(x) {
      return l.go(x);
    },
  };
  return y;
}
var Wu;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Wu || (Wu = {}));
function hg(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? Kn(t) : t,
    i = wa(r.pathname || "/", n);
  if (i == null) return null;
  let s = If(e);
  gg(s);
  let l = null;
  for (let o = 0; l == null && o < s.length; ++o) l = Pg(s[o], _g(i));
  return l;
}
function If(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (s, l, o) => {
    let a = {
      relativePath: o === void 0 ? s.path || "" : o,
      caseSensitive: s.caseSensitive === !0,
      childrenIndex: l,
      route: s,
    };
    a.relativePath.startsWith("/") &&
      (le(
        a.relativePath.startsWith(r),
        'Absolute route path "' +
          a.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (a.relativePath = a.relativePath.slice(r.length)));
    let u = bt([r, a.relativePath]),
      c = n.concat(a);
    s.children &&
      s.children.length > 0 &&
      (le(
        s.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      If(s.children, t, c, u)),
      !(s.path == null && !s.index) &&
        t.push({ path: u, score: Tg(u, s.index), routesMeta: c });
  };
  return (
    e.forEach((s, l) => {
      var o;
      if (s.path === "" || !((o = s.path) != null && o.includes("?"))) i(s, l);
      else for (let a of zf(s.path)) i(s, l, a);
    }),
    t
  );
}
function zf(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith("?"),
    s = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [s, ""] : [s];
  let l = zf(r.join("/")),
    o = [];
  return (
    o.push(...l.map((a) => (a === "" ? s : [s, a].join("/")))),
    i && o.push(...l),
    o.map((a) => (e.startsWith("/") && a === "" ? "/" : a))
  );
}
function gg(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Cg(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const vg = /^:\w+$/,
  yg = 3,
  wg = 2,
  Sg = 1,
  xg = 10,
  Eg = -2,
  Gu = (e) => e === "*";
function Tg(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Gu) && (r += Eg),
    t && (r += wg),
    n
      .filter((i) => !Gu(i))
      .reduce((i, s) => i + (vg.test(s) ? yg : s === "" ? Sg : xg), r)
  );
}
function Cg(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Pg(e, t) {
  let { routesMeta: n } = e,
    r = {},
    i = "/",
    s = [];
  for (let l = 0; l < n.length; ++l) {
    let o = n[l],
      a = l === n.length - 1,
      u = i === "/" ? t : t.slice(i.length) || "/",
      c = kg(
        { path: o.relativePath, caseSensitive: o.caseSensitive, end: a },
        u
      );
    if (!c) return null;
    Object.assign(r, c.params);
    let d = o.route;
    s.push({
      params: r,
      pathname: bt([i, c.pathname]),
      pathnameBase: Rg(bt([i, c.pathnameBase])),
      route: d,
    }),
      c.pathnameBase !== "/" && (i = bt([i, c.pathnameBase]));
  }
  return s;
}
function kg(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Ng(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let s = i[0],
    l = s.replace(/(.)\/+$/, "$1"),
    o = i.slice(1);
  return {
    params: r.reduce((u, c, d) => {
      if (c === "*") {
        let h = o[d] || "";
        l = s.slice(0, s.length - h.length).replace(/(.)\/+$/, "$1");
      }
      return (u[c] = Og(o[d] || "", c)), u;
    }, {}),
    pathname: s,
    pathnameBase: l,
    pattern: e,
  };
}
function Ng(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    ya(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
        .replace(/\/:(\w+)/g, (l, o) => (r.push(o), "/([^\\/]+)"));
  return (
    e.endsWith("*")
      ? (r.push("*"),
        (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (i += "\\/*$")
      : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), r]
  );
}
function _g(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      ya(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function Og(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      ya(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + n + ").")
      ),
      e
    );
  }
}
function wa(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function Lg(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: i = "",
  } = typeof e == "string" ? Kn(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : Mg(n, t)) : t,
    search: jg(r),
    hash: Ig(i),
  };
}
function Mg(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function ol(e, t, n, r) {
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
function Af(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Ff(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == "string"
    ? (i = Kn(e))
    : ((i = Ur({}, e)),
      le(
        !i.pathname || !i.pathname.includes("?"),
        ol("?", "pathname", "search", i)
      ),
      le(
        !i.pathname || !i.pathname.includes("#"),
        ol("#", "pathname", "hash", i)
      ),
      le(!i.search || !i.search.includes("#"), ol("#", "search", "hash", i)));
  let s = e === "" || i.pathname === "",
    l = s ? "/" : i.pathname,
    o;
  if (r || l == null) o = n;
  else {
    let d = t.length - 1;
    if (l.startsWith("..")) {
      let h = l.split("/");
      for (; h[0] === ".."; ) h.shift(), (d -= 1);
      i.pathname = h.join("/");
    }
    o = d >= 0 ? t[d] : "/";
  }
  let a = Lg(i, o),
    u = l && l !== "/" && l.endsWith("/"),
    c = (s || l === ".") && n.endsWith("/");
  return !a.pathname.endsWith("/") && (u || c) && (a.pathname += "/"), a;
}
const bt = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Rg = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  jg = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  Ig = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function zg(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Df = ["post", "put", "patch", "delete"];
new Set(Df);
const Ag = ["get", ...Df];
new Set(Ag);
/**
 * React Router v6.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function os() {
  return (
    (os = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    os.apply(this, arguments)
  );
}
const Sa = k.createContext(null),
  Fg = k.createContext(null),
  Qn = k.createContext(null),
  Ns = k.createContext(null),
  qt = k.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Bf = k.createContext(null);
function Dg(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Qr() || le(!1);
  let { basename: r, navigator: i } = k.useContext(Qn),
    { hash: s, pathname: l, search: o } = Uf(e, { relative: n }),
    a = l;
  return (
    r !== "/" && (a = l === "/" ? r : bt([r, l])),
    i.createHref({ pathname: a, search: o, hash: s })
  );
}
function Qr() {
  return k.useContext(Ns) != null;
}
function qn() {
  return Qr() || le(!1), k.useContext(Ns).location;
}
function $f(e) {
  k.useContext(Qn).static || k.useLayoutEffect(e);
}
function xa() {
  let { isDataRoute: e } = k.useContext(qt);
  return e ? qg() : Bg();
}
function Bg() {
  Qr() || le(!1);
  let e = k.useContext(Sa),
    { basename: t, navigator: n } = k.useContext(Qn),
    { matches: r } = k.useContext(qt),
    { pathname: i } = qn(),
    s = JSON.stringify(Af(r).map((a) => a.pathnameBase)),
    l = k.useRef(!1);
  return (
    $f(() => {
      l.current = !0;
    }),
    k.useCallback(
      function (a, u) {
        if ((u === void 0 && (u = {}), !l.current)) return;
        if (typeof a == "number") {
          n.go(a);
          return;
        }
        let c = Ff(a, JSON.parse(s), i, u.relative === "path");
        e == null &&
          t !== "/" &&
          (c.pathname = c.pathname === "/" ? t : bt([t, c.pathname])),
          (u.replace ? n.replace : n.push)(c, u.state, u);
      },
      [t, n, s, i, e]
    )
  );
}
function qr() {
  let { matches: e } = k.useContext(qt),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function Uf(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { matches: r } = k.useContext(qt),
    { pathname: i } = qn(),
    s = JSON.stringify(Af(r).map((l) => l.pathnameBase));
  return k.useMemo(() => Ff(e, JSON.parse(s), i, n === "path"), [e, s, i, n]);
}
function $g(e, t) {
  return Ug(e, t);
}
function Ug(e, t, n) {
  Qr() || le(!1);
  let { navigator: r } = k.useContext(Qn),
    { matches: i } = k.useContext(qt),
    s = i[i.length - 1],
    l = s ? s.params : {};
  s && s.pathname;
  let o = s ? s.pathnameBase : "/";
  s && s.route;
  let a = qn(),
    u;
  if (t) {
    var c;
    let y = typeof t == "string" ? Kn(t) : t;
    o === "/" || ((c = y.pathname) != null && c.startsWith(o)) || le(!1),
      (u = y);
  } else u = a;
  let d = u.pathname || "/",
    h = o === "/" ? d : d.slice(o.length) || "/",
    g = hg(e, { pathname: h }),
    v = Gg(
      g &&
        g.map((y) =>
          Object.assign({}, y, {
            params: Object.assign({}, l, y.params),
            pathname: bt([
              o,
              r.encodeLocation
                ? r.encodeLocation(y.pathname).pathname
                : y.pathname,
            ]),
            pathnameBase:
              y.pathnameBase === "/"
                ? o
                : bt([
                    o,
                    r.encodeLocation
                      ? r.encodeLocation(y.pathnameBase).pathname
                      : y.pathnameBase,
                  ]),
          })
        ),
      i,
      n
    );
  return t && v
    ? k.createElement(
        Ns.Provider,
        {
          value: {
            location: os(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              u
            ),
            navigationType: jt.Pop,
          },
        },
        v
      )
    : v;
}
function Vg() {
  let e = Qg(),
    t = zg(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    s = null;
  return k.createElement(
    k.Fragment,
    null,
    k.createElement("h2", null, "Unexpected Application Error!"),
    k.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? k.createElement("pre", { style: i }, n) : null,
    s
  );
}
const bg = k.createElement(Vg, null);
class Hg extends k.Component {
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
          error: t.error || n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error
      ? k.createElement(
          qt.Provider,
          { value: this.props.routeContext },
          k.createElement(Bf.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function Wg(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = k.useContext(Sa);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    k.createElement(qt.Provider, { value: t }, r)
  );
}
function Gg(e, t, n) {
  var r;
  if ((t === void 0 && (t = []), n === void 0 && (n = null), e == null)) {
    var i;
    if ((i = n) != null && i.errors) e = n.matches;
    else return null;
  }
  let s = e,
    l = (r = n) == null ? void 0 : r.errors;
  if (l != null) {
    let o = s.findIndex(
      (a) => a.route.id && (l == null ? void 0 : l[a.route.id])
    );
    o >= 0 || le(!1), (s = s.slice(0, Math.min(s.length, o + 1)));
  }
  return s.reduceRight((o, a, u) => {
    let c = a.route.id ? (l == null ? void 0 : l[a.route.id]) : null,
      d = null;
    n && (d = a.route.errorElement || bg);
    let h = t.concat(s.slice(0, u + 1)),
      g = () => {
        let v;
        return (
          c
            ? (v = d)
            : a.route.Component
            ? (v = k.createElement(a.route.Component, null))
            : a.route.element
            ? (v = a.route.element)
            : (v = o),
          k.createElement(Wg, {
            match: a,
            routeContext: { outlet: o, matches: h, isDataRoute: n != null },
            children: v,
          })
        );
      };
    return n && (a.route.ErrorBoundary || a.route.errorElement || u === 0)
      ? k.createElement(Hg, {
          location: n.location,
          revalidation: n.revalidation,
          component: d,
          error: c,
          children: g(),
          routeContext: { outlet: null, matches: h, isDataRoute: !0 },
        })
      : g();
  }, null);
}
var Vf = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(Vf || {}),
  as = (function (e) {
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
  })(as || {});
function Xg(e) {
  let t = k.useContext(Sa);
  return t || le(!1), t;
}
function Yg(e) {
  let t = k.useContext(Fg);
  return t || le(!1), t;
}
function Kg(e) {
  let t = k.useContext(qt);
  return t || le(!1), t;
}
function bf(e) {
  let t = Kg(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || le(!1), n.route.id;
}
function Qg() {
  var e;
  let t = k.useContext(Bf),
    n = Yg(as.UseRouteError),
    r = bf(as.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function qg() {
  let { router: e } = Xg(Vf.UseNavigateStable),
    t = bf(as.UseNavigateStable),
    n = k.useRef(!1);
  return (
    $f(() => {
      n.current = !0;
    }),
    k.useCallback(
      function (i, s) {
        s === void 0 && (s = {}),
          n.current &&
            (typeof i == "number"
              ? e.navigate(i)
              : e.navigate(i, os({ fromRouteId: t }, s)));
      },
      [e, t]
    )
  );
}
function fr(e) {
  le(!1);
}
function Jg(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = jt.Pop,
    navigator: s,
    static: l = !1,
  } = e;
  Qr() && le(!1);
  let o = t.replace(/^\/*/, "/"),
    a = k.useMemo(() => ({ basename: o, navigator: s, static: l }), [o, s, l]);
  typeof r == "string" && (r = Kn(r));
  let {
      pathname: u = "/",
      search: c = "",
      hash: d = "",
      state: h = null,
      key: g = "default",
    } = r,
    v = k.useMemo(() => {
      let y = wa(u, o);
      return y == null
        ? null
        : {
            location: { pathname: y, search: c, hash: d, state: h, key: g },
            navigationType: i,
          };
    }, [o, u, c, d, h, g, i]);
  return v == null
    ? null
    : k.createElement(
        Qn.Provider,
        { value: a },
        k.createElement(Ns.Provider, { children: n, value: v })
      );
}
function Zg(e) {
  let { children: t, location: n } = e;
  return $g(po(t), n);
}
new Promise(() => {});
function po(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    k.Children.forEach(e, (r, i) => {
      if (!k.isValidElement(r)) return;
      let s = [...t, i];
      if (r.type === k.Fragment) {
        n.push.apply(n, po(r.props.children, s));
        return;
      }
      r.type !== fr && le(!1), !r.props.index || !r.props.children || le(!1);
      let l = {
        id: r.props.id || s.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (l.children = po(r.props.children, s)), n.push(l);
    }),
    n
  );
}
/**
 * React Router DOM v6.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function mo() {
  return (
    (mo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    mo.apply(this, arguments)
  );
}
function ev(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    s;
  for (s = 0; s < r.length; s++)
    (i = r[s]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function tv(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function nv(e, t) {
  return e.button === 0 && (!t || t === "_self") && !tv(e);
}
const rv = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  iv = "startTransition",
  Xu = tm[iv];
function sv(e) {
  let { basename: t, children: n, future: r, window: i } = e,
    s = k.useRef();
  s.current == null && (s.current = fg({ window: i, v5Compat: !0 }));
  let l = s.current,
    [o, a] = k.useState({ action: l.action, location: l.location }),
    { v7_startTransition: u } = r || {},
    c = k.useCallback(
      (d) => {
        u && Xu ? Xu(() => a(d)) : a(d);
      },
      [a, u]
    );
  return (
    k.useLayoutEffect(() => l.listen(c), [l, c]),
    k.createElement(Jg, {
      basename: t,
      children: n,
      location: o.location,
      navigationType: o.action,
      navigator: l,
    })
  );
}
const lv =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  ov = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  ie = k.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: i,
        reloadDocument: s,
        replace: l,
        state: o,
        target: a,
        to: u,
        preventScrollReset: c,
        unstable_viewTransition: d,
      } = t,
      h = ev(t, rv),
      { basename: g } = k.useContext(Qn),
      v,
      y = !1;
    if (typeof u == "string" && ov.test(u) && ((v = u), lv))
      try {
        let m = new URL(window.location.href),
          S = u.startsWith("//") ? new URL(m.protocol + u) : new URL(u),
          E = wa(S.pathname, g);
        S.origin === m.origin && E != null
          ? (u = E + S.search + S.hash)
          : (y = !0);
      } catch {}
    let x = Dg(u, { relative: i }),
      f = av(u, {
        replace: l,
        state: o,
        target: a,
        preventScrollReset: c,
        relative: i,
        unstable_viewTransition: d,
      });
    function p(m) {
      r && r(m), m.defaultPrevented || f(m);
    }
    return k.createElement(
      "a",
      mo({}, h, { href: v || x, onClick: y || s ? r : p, ref: n, target: a })
    );
  });
var Yu;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(Yu || (Yu = {}));
var Ku;
(function (e) {
  (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Ku || (Ku = {}));
function av(e, t) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: s,
      relative: l,
      unstable_viewTransition: o,
    } = t === void 0 ? {} : t,
    a = xa(),
    u = qn(),
    c = Uf(e, { relative: l });
  return k.useCallback(
    (d) => {
      if (nv(d, n)) {
        d.preventDefault();
        let h = r !== void 0 ? r : ls(u) === ls(c);
        a(e, {
          replace: h,
          state: i,
          preventScrollReset: s,
          relative: l,
          unstable_viewTransition: o,
        });
      }
    },
    [u, a, c, r, i, n, e, s, l, o]
  );
}
var Hf = { exports: {} },
  uv = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  cv = uv,
  dv = cv;
function Wf() {}
function Gf() {}
Gf.resetWarningCache = Wf;
var fv = function () {
  function e(r, i, s, l, o, a) {
    if (a !== dv) {
      var u = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((u.name = "Invariant Violation"), u);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: Gf,
    resetWarningCache: Wf,
  };
  return (n.PropTypes = n), n;
};
Hf.exports = fv();
var pv = Hf.exports;
const Ht = wc(pv);
const _s = (e) =>
    w.jsx("button", {
      className: `button ${e.className}`,
      onClick: e.onClick ? () => e.onClick() : null,
      children: e.children,
    }),
  dt = (e) =>
    w.jsx("button", {
      className: `button-outline ${e.className}`,
      onClick: e.onClick ? () => e.onClick() : null,
      children: e.children,
    });
_s.propTypes = { onClick: Ht.func };
function Qu(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    "constructor" in e &&
    e.constructor === Object
  );
}
function Ea(e, t) {
  e === void 0 && (e = {}),
    t === void 0 && (t = {}),
    Object.keys(t).forEach((n) => {
      typeof e[n] > "u"
        ? (e[n] = t[n])
        : Qu(t[n]) &&
          Qu(e[n]) &&
          Object.keys(t[n]).length > 0 &&
          Ea(e[n], t[n]);
    });
}
const Xf = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: { blur() {}, nodeName: "" },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return { initEvent() {} };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return [];
      },
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
};
function ot() {
  const e = typeof document < "u" ? document : {};
  return Ea(e, Xf), e;
}
const mv = {
  document: Xf,
  navigator: { userAgent: "" },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
  history: { replaceState() {}, pushState() {}, go() {}, back() {} },
  CustomEvent: function () {
    return this;
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      },
    };
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {};
  },
  requestAnimationFrame(e) {
    return typeof setTimeout > "u" ? (e(), null) : setTimeout(e, 0);
  },
  cancelAnimationFrame(e) {
    typeof setTimeout > "u" || clearTimeout(e);
  },
};
function Le() {
  const e = typeof window < "u" ? window : {};
  return Ea(e, mv), e;
}
function hv(e) {
  const t = e;
  Object.keys(t).forEach((n) => {
    try {
      t[n] = null;
    } catch {}
    try {
      delete t[n];
    } catch {}
  });
}
function Vr(e, t) {
  return t === void 0 && (t = 0), setTimeout(e, t);
}
function mt() {
  return Date.now();
}
function gv(e) {
  const t = Le();
  let n;
  return (
    t.getComputedStyle && (n = t.getComputedStyle(e, null)),
    !n && e.currentStyle && (n = e.currentStyle),
    n || (n = e.style),
    n
  );
}
function vv(e, t) {
  t === void 0 && (t = "x");
  const n = Le();
  let r, i, s;
  const l = gv(e);
  return (
    n.WebKitCSSMatrix
      ? ((i = l.transform || l.webkitTransform),
        i.split(",").length > 6 &&
          (i = i
            .split(", ")
            .map((o) => o.replace(",", "."))
            .join(", ")),
        (s = new n.WebKitCSSMatrix(i === "none" ? "" : i)))
      : ((s =
          l.MozTransform ||
          l.OTransform ||
          l.MsTransform ||
          l.msTransform ||
          l.transform ||
          l
            .getPropertyValue("transform")
            .replace("translate(", "matrix(1, 0, 0, 1,")),
        (r = s.toString().split(","))),
    t === "x" &&
      (n.WebKitCSSMatrix
        ? (i = s.m41)
        : r.length === 16
        ? (i = parseFloat(r[12]))
        : (i = parseFloat(r[4]))),
    t === "y" &&
      (n.WebKitCSSMatrix
        ? (i = s.m42)
        : r.length === 16
        ? (i = parseFloat(r[13]))
        : (i = parseFloat(r[5]))),
    i || 0
  );
}
function yi(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === "Object"
  );
}
function yv(e) {
  return typeof window < "u" && typeof window.HTMLElement < "u"
    ? e instanceof HTMLElement
    : e && (e.nodeType === 1 || e.nodeType === 11);
}
function Re() {
  const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
    t = ["__proto__", "constructor", "prototype"];
  for (let n = 1; n < arguments.length; n += 1) {
    const r = n < 0 || arguments.length <= n ? void 0 : arguments[n];
    if (r != null && !yv(r)) {
      const i = Object.keys(Object(r)).filter((s) => t.indexOf(s) < 0);
      for (let s = 0, l = i.length; s < l; s += 1) {
        const o = i[s],
          a = Object.getOwnPropertyDescriptor(r, o);
        a !== void 0 &&
          a.enumerable &&
          (yi(e[o]) && yi(r[o])
            ? r[o].__swiper__
              ? (e[o] = r[o])
              : Re(e[o], r[o])
            : !yi(e[o]) && yi(r[o])
            ? ((e[o] = {}), r[o].__swiper__ ? (e[o] = r[o]) : Re(e[o], r[o]))
            : (e[o] = r[o]));
      }
    }
  }
  return e;
}
function wi(e, t, n) {
  e.style.setProperty(t, n);
}
function Yf(e) {
  let { swiper: t, targetPosition: n, side: r } = e;
  const i = Le(),
    s = -t.translate;
  let l = null,
    o;
  const a = t.params.speed;
  (t.wrapperEl.style.scrollSnapType = "none"),
    i.cancelAnimationFrame(t.cssModeFrameID);
  const u = n > s ? "next" : "prev",
    c = (h, g) => (u === "next" && h >= g) || (u === "prev" && h <= g),
    d = () => {
      (o = new Date().getTime()), l === null && (l = o);
      const h = Math.max(Math.min((o - l) / a, 1), 0),
        g = 0.5 - Math.cos(h * Math.PI) / 2;
      let v = s + g * (n - s);
      if ((c(v, n) && (v = n), t.wrapperEl.scrollTo({ [r]: v }), c(v, n))) {
        (t.wrapperEl.style.overflow = "hidden"),
          (t.wrapperEl.style.scrollSnapType = ""),
          setTimeout(() => {
            (t.wrapperEl.style.overflow = ""), t.wrapperEl.scrollTo({ [r]: v });
          }),
          i.cancelAnimationFrame(t.cssModeFrameID);
        return;
      }
      t.cssModeFrameID = i.requestAnimationFrame(d);
    };
  d();
}
function vt(e, t) {
  return t === void 0 && (t = ""), [...e.children].filter((n) => n.matches(t));
}
function wv(e, t) {
  t === void 0 && (t = []);
  const n = document.createElement(e);
  return n.classList.add(...(Array.isArray(t) ? t : [t])), n;
}
function Sv(e, t) {
  const n = [];
  for (; e.previousElementSibling; ) {
    const r = e.previousElementSibling;
    t ? r.matches(t) && n.push(r) : n.push(r), (e = r);
  }
  return n;
}
function xv(e, t) {
  const n = [];
  for (; e.nextElementSibling; ) {
    const r = e.nextElementSibling;
    t ? r.matches(t) && n.push(r) : n.push(r), (e = r);
  }
  return n;
}
function It(e, t) {
  return Le().getComputedStyle(e, null).getPropertyValue(t);
}
function qu(e) {
  let t = e,
    n;
  if (t) {
    for (n = 0; (t = t.previousSibling) !== null; )
      t.nodeType === 1 && (n += 1);
    return n;
  }
}
function Ev(e, t) {
  const n = [];
  let r = e.parentElement;
  for (; r; ) t ? r.matches(t) && n.push(r) : n.push(r), (r = r.parentElement);
  return n;
}
function Ju(e, t, n) {
  const r = Le();
  return n
    ? e[t === "width" ? "offsetWidth" : "offsetHeight"] +
        parseFloat(
          r
            .getComputedStyle(e, null)
            .getPropertyValue(t === "width" ? "margin-right" : "margin-top")
        ) +
        parseFloat(
          r
            .getComputedStyle(e, null)
            .getPropertyValue(t === "width" ? "margin-left" : "margin-bottom")
        )
    : e.offsetWidth;
}
function Tv(e) {
  let { swiper: t, extendParams: n, on: r, emit: i } = e;
  const s = Le();
  n({
    mousewheel: {
      enabled: !1,
      releaseOnEdges: !1,
      invert: !1,
      forceToAxis: !1,
      sensitivity: 1,
      eventsTarget: "container",
      thresholdDelta: null,
      thresholdTime: null,
      noMousewheelClass: "swiper-no-mousewheel",
    },
  }),
    (t.mousewheel = { enabled: !1 });
  let l,
    o = mt(),
    a;
  const u = [];
  function c(m) {
    let T = 0,
      N = 0,
      C = 0,
      A = 0;
    return (
      "detail" in m && (N = m.detail),
      "wheelDelta" in m && (N = -m.wheelDelta / 120),
      "wheelDeltaY" in m && (N = -m.wheelDeltaY / 120),
      "wheelDeltaX" in m && (T = -m.wheelDeltaX / 120),
      "axis" in m && m.axis === m.HORIZONTAL_AXIS && ((T = N), (N = 0)),
      (C = T * 10),
      (A = N * 10),
      "deltaY" in m && (A = m.deltaY),
      "deltaX" in m && (C = m.deltaX),
      m.shiftKey && !C && ((C = A), (A = 0)),
      (C || A) &&
        m.deltaMode &&
        (m.deltaMode === 1 ? ((C *= 40), (A *= 40)) : ((C *= 800), (A *= 800))),
      C && !T && (T = C < 1 ? -1 : 1),
      A && !N && (N = A < 1 ? -1 : 1),
      { spinX: T, spinY: N, pixelX: C, pixelY: A }
    );
  }
  function d() {
    t.enabled && (t.mouseEntered = !0);
  }
  function h() {
    t.enabled && (t.mouseEntered = !1);
  }
  function g(m) {
    return (t.params.mousewheel.thresholdDelta &&
      m.delta < t.params.mousewheel.thresholdDelta) ||
      (t.params.mousewheel.thresholdTime &&
        mt() - o < t.params.mousewheel.thresholdTime)
      ? !1
      : m.delta >= 6 && mt() - o < 60
      ? !0
      : (m.direction < 0
          ? (!t.isEnd || t.params.loop) &&
            !t.animating &&
            (t.slideNext(), i("scroll", m.raw))
          : (!t.isBeginning || t.params.loop) &&
            !t.animating &&
            (t.slidePrev(), i("scroll", m.raw)),
        (o = new s.Date().getTime()),
        !1);
  }
  function v(m) {
    const S = t.params.mousewheel;
    if (m.direction < 0) {
      if (t.isEnd && !t.params.loop && S.releaseOnEdges) return !0;
    } else if (t.isBeginning && !t.params.loop && S.releaseOnEdges) return !0;
    return !1;
  }
  function y(m) {
    let S = m,
      E = !0;
    if (
      !t.enabled ||
      m.target.closest(`.${t.params.mousewheel.noMousewheelClass}`)
    )
      return;
    const _ = t.params.mousewheel;
    t.params.cssMode && S.preventDefault();
    let T = t.el;
    t.params.mousewheel.eventsTarget !== "container" &&
      (T = document.querySelector(t.params.mousewheel.eventsTarget));
    const N = T && T.contains(S.target);
    if (!t.mouseEntered && !N && !_.releaseOnEdges) return !0;
    S.originalEvent && (S = S.originalEvent);
    let C = 0;
    const A = t.rtlTranslate ? -1 : 1,
      L = c(S);
    if (_.forceToAxis)
      if (t.isHorizontal())
        if (Math.abs(L.pixelX) > Math.abs(L.pixelY)) C = -L.pixelX * A;
        else return !0;
      else if (Math.abs(L.pixelY) > Math.abs(L.pixelX)) C = -L.pixelY;
      else return !0;
    else
      C = Math.abs(L.pixelX) > Math.abs(L.pixelY) ? -L.pixelX * A : -L.pixelY;
    if (C === 0) return !0;
    _.invert && (C = -C);
    let I = t.getTranslate() + C * _.sensitivity;
    if (
      (I >= t.minTranslate() && (I = t.minTranslate()),
      I <= t.maxTranslate() && (I = t.maxTranslate()),
      (E = t.params.loop
        ? !0
        : !(I === t.minTranslate() || I === t.maxTranslate())),
      E && t.params.nested && S.stopPropagation(),
      !t.params.freeMode || !t.params.freeMode.enabled)
    ) {
      const z = {
        time: mt(),
        delta: Math.abs(C),
        direction: Math.sign(C),
        raw: m,
      };
      u.length >= 2 && u.shift();
      const H = u.length ? u[u.length - 1] : void 0;
      if (
        (u.push(z),
        H
          ? (z.direction !== H.direction ||
              z.delta > H.delta ||
              z.time > H.time + 150) &&
            g(z)
          : g(z),
        v(z))
      )
        return !0;
    } else {
      const z = { time: mt(), delta: Math.abs(C), direction: Math.sign(C) },
        H =
          a &&
          z.time < a.time + 500 &&
          z.delta <= a.delta &&
          z.direction === a.direction;
      if (!H) {
        a = void 0;
        let ce = t.getTranslate() + C * _.sensitivity;
        const De = t.isBeginning,
          D = t.isEnd;
        if (
          (ce >= t.minTranslate() && (ce = t.minTranslate()),
          ce <= t.maxTranslate() && (ce = t.maxTranslate()),
          t.setTransition(0),
          t.setTranslate(ce),
          t.updateProgress(),
          t.updateActiveIndex(),
          t.updateSlidesClasses(),
          ((!De && t.isBeginning) || (!D && t.isEnd)) &&
            t.updateSlidesClasses(),
          t.params.loop &&
            t.loopFix({
              direction: z.direction < 0 ? "next" : "prev",
              byMousewheel: !0,
            }),
          t.params.freeMode.sticky)
        ) {
          clearTimeout(l), (l = void 0), u.length >= 15 && u.shift();
          const M = u.length ? u[u.length - 1] : void 0,
            R = u[0];
          if (
            (u.push(z), M && (z.delta > M.delta || z.direction !== M.direction))
          )
            u.splice(0);
          else if (
            u.length >= 15 &&
            z.time - R.time < 500 &&
            R.delta - z.delta >= 1 &&
            z.delta <= 6
          ) {
            const F = C > 0 ? 0.8 : 0.2;
            (a = z),
              u.splice(0),
              (l = Vr(() => {
                t.slideToClosest(t.params.speed, !0, void 0, F);
              }, 0));
          }
          l ||
            (l = Vr(() => {
              (a = z),
                u.splice(0),
                t.slideToClosest(t.params.speed, !0, void 0, 0.5);
            }, 500));
        }
        if (
          (H || i("scroll", S),
          t.params.autoplay &&
            t.params.autoplayDisableOnInteraction &&
            t.autoplay.stop(),
          _.releaseOnEdges &&
            (ce === t.minTranslate() || ce === t.maxTranslate()))
        )
          return !0;
      }
    }
    return S.preventDefault ? S.preventDefault() : (S.returnValue = !1), !1;
  }
  function x(m) {
    let S = t.el;
    t.params.mousewheel.eventsTarget !== "container" &&
      (S = document.querySelector(t.params.mousewheel.eventsTarget)),
      S[m]("mouseenter", d),
      S[m]("mouseleave", h),
      S[m]("wheel", y);
  }
  function f() {
    return t.params.cssMode
      ? (t.wrapperEl.removeEventListener("wheel", y), !0)
      : t.mousewheel.enabled
      ? !1
      : (x("addEventListener"), (t.mousewheel.enabled = !0), !0);
  }
  function p() {
    return t.params.cssMode
      ? (t.wrapperEl.addEventListener(event, y), !0)
      : t.mousewheel.enabled
      ? (x("removeEventListener"), (t.mousewheel.enabled = !1), !0)
      : !1;
  }
  r("init", () => {
    !t.params.mousewheel.enabled && t.params.cssMode && p(),
      t.params.mousewheel.enabled && f();
  }),
    r("destroy", () => {
      t.params.cssMode && f(), t.mousewheel.enabled && p();
    }),
    Object.assign(t.mousewheel, { enable: f, disable: p });
}
function Cv(e) {
  let { swiper: t, extendParams: n, on: r, emit: i, params: s } = e;
  (t.autoplay = { running: !1, paused: !1, timeLeft: 0 }),
    n({
      autoplay: {
        enabled: !1,
        delay: 3e3,
        waitForTransition: !0,
        disableOnInteraction: !0,
        stopOnLastSlide: !1,
        reverseDirection: !1,
        pauseOnMouseEnter: !1,
      },
    });
  let l,
    o,
    a = s && s.autoplay ? s.autoplay.delay : 3e3,
    u = s && s.autoplay ? s.autoplay.delay : 3e3,
    c,
    d = new Date().getTime,
    h,
    g,
    v,
    y,
    x,
    f;
  function p(D) {
    !t ||
      t.destroyed ||
      !t.wrapperEl ||
      (D.target === t.wrapperEl &&
        (t.wrapperEl.removeEventListener("transitionend", p), C()));
  }
  const m = () => {
      if (t.destroyed || !t.autoplay.running) return;
      t.autoplay.paused ? (h = !0) : h && ((u = c), (h = !1));
      const D = t.autoplay.paused ? c : d + u - new Date().getTime();
      (t.autoplay.timeLeft = D),
        i("autoplayTimeLeft", D, D / a),
        (o = requestAnimationFrame(() => {
          m();
        }));
    },
    S = () => {
      let D;
      return (
        t.virtual && t.params.virtual.enabled
          ? (D = t.slides.filter((R) =>
              R.classList.contains("swiper-slide-active")
            )[0])
          : (D = t.slides[t.activeIndex]),
        D ? parseInt(D.getAttribute("data-swiper-autoplay"), 10) : void 0
      );
    },
    E = (D) => {
      if (t.destroyed || !t.autoplay.running) return;
      cancelAnimationFrame(o), m();
      let M = typeof D > "u" ? t.params.autoplay.delay : D;
      (a = t.params.autoplay.delay), (u = t.params.autoplay.delay);
      const R = S();
      !Number.isNaN(R) &&
        R > 0 &&
        typeof D > "u" &&
        ((M = R), (a = R), (u = R)),
        (c = M);
      const F = t.params.speed,
        b = () => {
          !t ||
            t.destroyed ||
            (t.params.autoplay.reverseDirection
              ? !t.isBeginning || t.params.loop || t.params.rewind
                ? (t.slidePrev(F, !0, !0), i("autoplay"))
                : t.params.autoplay.stopOnLastSlide ||
                  (t.slideTo(t.slides.length - 1, F, !0, !0), i("autoplay"))
              : !t.isEnd || t.params.loop || t.params.rewind
              ? (t.slideNext(F, !0, !0), i("autoplay"))
              : t.params.autoplay.stopOnLastSlide ||
                (t.slideTo(0, F, !0, !0), i("autoplay")),
            t.params.cssMode &&
              ((d = new Date().getTime()),
              requestAnimationFrame(() => {
                E();
              })));
        };
      return (
        M > 0
          ? (clearTimeout(l),
            (l = setTimeout(() => {
              b();
            }, M)))
          : requestAnimationFrame(() => {
              b();
            }),
        M
      );
    },
    _ = () => {
      (t.autoplay.running = !0), E(), i("autoplayStart");
    },
    T = () => {
      (t.autoplay.running = !1),
        clearTimeout(l),
        cancelAnimationFrame(o),
        i("autoplayStop");
    },
    N = (D, M) => {
      if (t.destroyed || !t.autoplay.running) return;
      clearTimeout(l), D || (f = !0);
      const R = () => {
        i("autoplayPause"),
          t.params.autoplay.waitForTransition
            ? t.wrapperEl.addEventListener("transitionend", p)
            : C();
      };
      if (((t.autoplay.paused = !0), M)) {
        x && (c = t.params.autoplay.delay), (x = !1), R();
        return;
      }
      (c = (c || t.params.autoplay.delay) - (new Date().getTime() - d)),
        !(t.isEnd && c < 0 && !t.params.loop) && (c < 0 && (c = 0), R());
    },
    C = () => {
      (t.isEnd && c < 0 && !t.params.loop) ||
        t.destroyed ||
        !t.autoplay.running ||
        ((d = new Date().getTime()),
        f ? ((f = !1), E(c)) : E(),
        (t.autoplay.paused = !1),
        i("autoplayResume"));
    },
    A = () => {
      if (t.destroyed || !t.autoplay.running) return;
      const D = ot();
      D.visibilityState === "hidden" && ((f = !0), N(!0)),
        D.visibilityState === "visible" && C();
    },
    L = (D) => {
      D.pointerType === "mouse" &&
        ((f = !0), !(t.animating || t.autoplay.paused) && N(!0));
    },
    I = (D) => {
      D.pointerType === "mouse" && t.autoplay.paused && C();
    },
    z = () => {
      t.params.autoplay.pauseOnMouseEnter &&
        (t.el.addEventListener("pointerenter", L),
        t.el.addEventListener("pointerleave", I));
    },
    H = () => {
      t.el.removeEventListener("pointerenter", L),
        t.el.removeEventListener("pointerleave", I);
    },
    ce = () => {
      ot().addEventListener("visibilitychange", A);
    },
    De = () => {
      ot().removeEventListener("visibilitychange", A);
    };
  r("init", () => {
    t.params.autoplay.enabled && (z(), ce(), (d = new Date().getTime()), _());
  }),
    r("destroy", () => {
      H(), De(), t.autoplay.running && T();
    }),
    r("beforeTransitionStart", (D, M, R) => {
      t.destroyed ||
        !t.autoplay.running ||
        (R || !t.params.autoplay.disableOnInteraction ? N(!0, !0) : T());
    }),
    r("sliderFirstMove", () => {
      if (!(t.destroyed || !t.autoplay.running)) {
        if (t.params.autoplay.disableOnInteraction) {
          T();
          return;
        }
        (g = !0),
          (v = !1),
          (f = !1),
          (y = setTimeout(() => {
            (f = !0), (v = !0), N(!0);
          }, 200));
      }
    }),
    r("touchEnd", () => {
      if (!(t.destroyed || !t.autoplay.running || !g)) {
        if (
          (clearTimeout(y),
          clearTimeout(l),
          t.params.autoplay.disableOnInteraction)
        ) {
          (v = !1), (g = !1);
          return;
        }
        v && t.params.cssMode && C(), (v = !1), (g = !1);
      }
    }),
    r("slideChange", () => {
      t.destroyed || !t.autoplay.running || (x = !0);
    }),
    Object.assign(t.autoplay, { start: _, stop: T, pause: N, resume: C });
}
let al;
function Pv() {
  const e = Le(),
    t = ot();
  return {
    smoothScroll:
      t.documentElement &&
      t.documentElement.style &&
      "scrollBehavior" in t.documentElement.style,
    touch: !!(
      "ontouchstart" in e ||
      (e.DocumentTouch && t instanceof e.DocumentTouch)
    ),
  };
}
function Kf() {
  return al || (al = Pv()), al;
}
let ul;
function kv(e) {
  let { userAgent: t } = e === void 0 ? {} : e;
  const n = Kf(),
    r = Le(),
    i = r.navigator.platform,
    s = t || r.navigator.userAgent,
    l = { ios: !1, android: !1 },
    o = r.screen.width,
    a = r.screen.height,
    u = s.match(/(Android);?[\s\/]+([\d.]+)?/);
  let c = s.match(/(iPad).*OS\s([\d_]+)/);
  const d = s.match(/(iPod)(.*OS\s([\d_]+))?/),
    h = !c && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    g = i === "Win32";
  let v = i === "MacIntel";
  const y = [
    "1024x1366",
    "1366x1024",
    "834x1194",
    "1194x834",
    "834x1112",
    "1112x834",
    "768x1024",
    "1024x768",
    "820x1180",
    "1180x820",
    "810x1080",
    "1080x810",
  ];
  return (
    !c &&
      v &&
      n.touch &&
      y.indexOf(`${o}x${a}`) >= 0 &&
      ((c = s.match(/(Version)\/([\d.]+)/)),
      c || (c = [0, 1, "13_0_0"]),
      (v = !1)),
    u && !g && ((l.os = "android"), (l.android = !0)),
    (c || h || d) && ((l.os = "ios"), (l.ios = !0)),
    l
  );
}
function Nv(e) {
  return e === void 0 && (e = {}), ul || (ul = kv(e)), ul;
}
let cl;
function _v() {
  const e = Le();
  let t = !1;
  function n() {
    const r = e.navigator.userAgent.toLowerCase();
    return (
      r.indexOf("safari") >= 0 &&
      r.indexOf("chrome") < 0 &&
      r.indexOf("android") < 0
    );
  }
  if (n()) {
    const r = String(e.navigator.userAgent);
    if (r.includes("Version/")) {
      const [i, s] = r
        .split("Version/")[1]
        .split(" ")[0]
        .split(".")
        .map((l) => Number(l));
      t = i < 16 || (i === 16 && s < 2);
    }
  }
  return {
    isSafari: t || n(),
    needPerspectiveFix: t,
    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
      e.navigator.userAgent
    ),
  };
}
function Ov() {
  return cl || (cl = _v()), cl;
}
function Lv(e) {
  let { swiper: t, on: n, emit: r } = e;
  const i = Le();
  let s = null,
    l = null;
  const o = () => {
      !t || t.destroyed || !t.initialized || (r("beforeResize"), r("resize"));
    },
    a = () => {
      !t ||
        t.destroyed ||
        !t.initialized ||
        ((s = new ResizeObserver((d) => {
          l = i.requestAnimationFrame(() => {
            const { width: h, height: g } = t;
            let v = h,
              y = g;
            d.forEach((x) => {
              let { contentBoxSize: f, contentRect: p, target: m } = x;
              (m && m !== t.el) ||
                ((v = p ? p.width : (f[0] || f).inlineSize),
                (y = p ? p.height : (f[0] || f).blockSize));
            }),
              (v !== h || y !== g) && o();
          });
        })),
        s.observe(t.el));
    },
    u = () => {
      l && i.cancelAnimationFrame(l),
        s && s.unobserve && t.el && (s.unobserve(t.el), (s = null));
    },
    c = () => {
      !t || t.destroyed || !t.initialized || r("orientationchange");
    };
  n("init", () => {
    if (t.params.resizeObserver && typeof i.ResizeObserver < "u") {
      a();
      return;
    }
    i.addEventListener("resize", o), i.addEventListener("orientationchange", c);
  }),
    n("destroy", () => {
      u(),
        i.removeEventListener("resize", o),
        i.removeEventListener("orientationchange", c);
    });
}
function Mv(e) {
  let { swiper: t, extendParams: n, on: r, emit: i } = e;
  const s = [],
    l = Le(),
    o = function (c, d) {
      d === void 0 && (d = {});
      const h = l.MutationObserver || l.WebkitMutationObserver,
        g = new h((v) => {
          if (t.__preventObserver__) return;
          if (v.length === 1) {
            i("observerUpdate", v[0]);
            return;
          }
          const y = function () {
            i("observerUpdate", v[0]);
          };
          l.requestAnimationFrame
            ? l.requestAnimationFrame(y)
            : l.setTimeout(y, 0);
        });
      g.observe(c, {
        attributes: typeof d.attributes > "u" ? !0 : d.attributes,
        childList: typeof d.childList > "u" ? !0 : d.childList,
        characterData: typeof d.characterData > "u" ? !0 : d.characterData,
      }),
        s.push(g);
    },
    a = () => {
      if (t.params.observer) {
        if (t.params.observeParents) {
          const c = Ev(t.hostEl);
          for (let d = 0; d < c.length; d += 1) o(c[d]);
        }
        o(t.hostEl, { childList: t.params.observeSlideChildren }),
          o(t.wrapperEl, { attributes: !1 });
      }
    },
    u = () => {
      s.forEach((c) => {
        c.disconnect();
      }),
        s.splice(0, s.length);
    };
  n({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
    r("init", a),
    r("destroy", u);
}
var Rv = {
  on(e, t, n) {
    const r = this;
    if (!r.eventsListeners || r.destroyed || typeof t != "function") return r;
    const i = n ? "unshift" : "push";
    return (
      e.split(" ").forEach((s) => {
        r.eventsListeners[s] || (r.eventsListeners[s] = []),
          r.eventsListeners[s][i](t);
      }),
      r
    );
  },
  once(e, t, n) {
    const r = this;
    if (!r.eventsListeners || r.destroyed || typeof t != "function") return r;
    function i() {
      r.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
      for (var s = arguments.length, l = new Array(s), o = 0; o < s; o++)
        l[o] = arguments[o];
      t.apply(r, l);
    }
    return (i.__emitterProxy = t), r.on(e, i, n);
  },
  onAny(e, t) {
    const n = this;
    if (!n.eventsListeners || n.destroyed || typeof e != "function") return n;
    const r = t ? "unshift" : "push";
    return n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[r](e), n;
  },
  offAny(e) {
    const t = this;
    if (!t.eventsListeners || t.destroyed || !t.eventsAnyListeners) return t;
    const n = t.eventsAnyListeners.indexOf(e);
    return n >= 0 && t.eventsAnyListeners.splice(n, 1), t;
  },
  off(e, t) {
    const n = this;
    return (
      !n.eventsListeners ||
        n.destroyed ||
        !n.eventsListeners ||
        e.split(" ").forEach((r) => {
          typeof t > "u"
            ? (n.eventsListeners[r] = [])
            : n.eventsListeners[r] &&
              n.eventsListeners[r].forEach((i, s) => {
                (i === t || (i.__emitterProxy && i.__emitterProxy === t)) &&
                  n.eventsListeners[r].splice(s, 1);
              });
        }),
      n
    );
  },
  emit() {
    const e = this;
    if (!e.eventsListeners || e.destroyed || !e.eventsListeners) return e;
    let t, n, r;
    for (var i = arguments.length, s = new Array(i), l = 0; l < i; l++)
      s[l] = arguments[l];
    return (
      typeof s[0] == "string" || Array.isArray(s[0])
        ? ((t = s[0]), (n = s.slice(1, s.length)), (r = e))
        : ((t = s[0].events), (n = s[0].data), (r = s[0].context || e)),
      n.unshift(r),
      (Array.isArray(t) ? t : t.split(" ")).forEach((a) => {
        e.eventsAnyListeners &&
          e.eventsAnyListeners.length &&
          e.eventsAnyListeners.forEach((u) => {
            u.apply(r, [a, ...n]);
          }),
          e.eventsListeners &&
            e.eventsListeners[a] &&
            e.eventsListeners[a].forEach((u) => {
              u.apply(r, n);
            });
      }),
      e
    );
  },
};
function jv() {
  const e = this;
  let t, n;
  const r = e.el;
  typeof e.params.width < "u" && e.params.width !== null
    ? (t = e.params.width)
    : (t = r.clientWidth),
    typeof e.params.height < "u" && e.params.height !== null
      ? (n = e.params.height)
      : (n = r.clientHeight),
    !((t === 0 && e.isHorizontal()) || (n === 0 && e.isVertical())) &&
      ((t =
        t -
        parseInt(It(r, "padding-left") || 0, 10) -
        parseInt(It(r, "padding-right") || 0, 10)),
      (n =
        n -
        parseInt(It(r, "padding-top") || 0, 10) -
        parseInt(It(r, "padding-bottom") || 0, 10)),
      Number.isNaN(t) && (t = 0),
      Number.isNaN(n) && (n = 0),
      Object.assign(e, {
        width: t,
        height: n,
        size: e.isHorizontal() ? t : n,
      }));
}
function Iv() {
  const e = this;
  function t(L) {
    return e.isHorizontal()
      ? L
      : {
          width: "height",
          "margin-top": "margin-left",
          "margin-bottom ": "margin-right",
          "margin-left": "margin-top",
          "margin-right": "margin-bottom",
          "padding-left": "padding-top",
          "padding-right": "padding-bottom",
          marginRight: "marginBottom",
        }[L];
  }
  function n(L, I) {
    return parseFloat(L.getPropertyValue(t(I)) || 0);
  }
  const r = e.params,
    { wrapperEl: i, slidesEl: s, size: l, rtlTranslate: o, wrongRTL: a } = e,
    u = e.virtual && r.virtual.enabled,
    c = u ? e.virtual.slides.length : e.slides.length,
    d = vt(s, `.${e.params.slideClass}, swiper-slide`),
    h = u ? e.virtual.slides.length : d.length;
  let g = [];
  const v = [],
    y = [];
  let x = r.slidesOffsetBefore;
  typeof x == "function" && (x = r.slidesOffsetBefore.call(e));
  let f = r.slidesOffsetAfter;
  typeof f == "function" && (f = r.slidesOffsetAfter.call(e));
  const p = e.snapGrid.length,
    m = e.slidesGrid.length;
  let S = r.spaceBetween,
    E = -x,
    _ = 0,
    T = 0;
  if (typeof l > "u") return;
  typeof S == "string" && S.indexOf("%") >= 0
    ? (S = (parseFloat(S.replace("%", "")) / 100) * l)
    : typeof S == "string" && (S = parseFloat(S)),
    (e.virtualSize = -S),
    d.forEach((L) => {
      o ? (L.style.marginLeft = "") : (L.style.marginRight = ""),
        (L.style.marginBottom = ""),
        (L.style.marginTop = "");
    }),
    r.centeredSlides &&
      r.cssMode &&
      (wi(i, "--swiper-centered-offset-before", ""),
      wi(i, "--swiper-centered-offset-after", ""));
  const N = r.grid && r.grid.rows > 1 && e.grid;
  N && e.grid.initSlides(h);
  let C;
  const A =
    r.slidesPerView === "auto" &&
    r.breakpoints &&
    Object.keys(r.breakpoints).filter(
      (L) => typeof r.breakpoints[L].slidesPerView < "u"
    ).length > 0;
  for (let L = 0; L < h; L += 1) {
    C = 0;
    let I;
    if (
      (d[L] && (I = d[L]),
      N && e.grid.updateSlide(L, I, h, t),
      !(d[L] && It(I, "display") === "none"))
    ) {
      if (r.slidesPerView === "auto") {
        A && (d[L].style[t("width")] = "");
        const z = getComputedStyle(I),
          H = I.style.transform,
          ce = I.style.webkitTransform;
        if (
          (H && (I.style.transform = "none"),
          ce && (I.style.webkitTransform = "none"),
          r.roundLengths)
        )
          C = e.isHorizontal() ? Ju(I, "width", !0) : Ju(I, "height", !0);
        else {
          const De = n(z, "width"),
            D = n(z, "padding-left"),
            M = n(z, "padding-right"),
            R = n(z, "margin-left"),
            F = n(z, "margin-right"),
            b = z.getPropertyValue("box-sizing");
          if (b && b === "border-box") C = De + R + F;
          else {
            const { clientWidth: ne, offsetWidth: vn } = I;
            C = De + D + M + R + F + (vn - ne);
          }
        }
        H && (I.style.transform = H),
          ce && (I.style.webkitTransform = ce),
          r.roundLengths && (C = Math.floor(C));
      } else
        (C = (l - (r.slidesPerView - 1) * S) / r.slidesPerView),
          r.roundLengths && (C = Math.floor(C)),
          d[L] && (d[L].style[t("width")] = `${C}px`);
      d[L] && (d[L].swiperSlideSize = C),
        y.push(C),
        r.centeredSlides
          ? ((E = E + C / 2 + _ / 2 + S),
            _ === 0 && L !== 0 && (E = E - l / 2 - S),
            L === 0 && (E = E - l / 2 - S),
            Math.abs(E) < 1 / 1e3 && (E = 0),
            r.roundLengths && (E = Math.floor(E)),
            T % r.slidesPerGroup === 0 && g.push(E),
            v.push(E))
          : (r.roundLengths && (E = Math.floor(E)),
            (T - Math.min(e.params.slidesPerGroupSkip, T)) %
              e.params.slidesPerGroup ===
              0 && g.push(E),
            v.push(E),
            (E = E + C + S)),
        (e.virtualSize += C + S),
        (_ = C),
        (T += 1);
    }
  }
  if (
    ((e.virtualSize = Math.max(e.virtualSize, l) + f),
    o &&
      a &&
      (r.effect === "slide" || r.effect === "coverflow") &&
      (i.style.width = `${e.virtualSize + S}px`),
    r.setWrapperSize && (i.style[t("width")] = `${e.virtualSize + S}px`),
    N && e.grid.updateWrapperSize(C, g, t),
    !r.centeredSlides)
  ) {
    const L = [];
    for (let I = 0; I < g.length; I += 1) {
      let z = g[I];
      r.roundLengths && (z = Math.floor(z)),
        g[I] <= e.virtualSize - l && L.push(z);
    }
    (g = L),
      Math.floor(e.virtualSize - l) - Math.floor(g[g.length - 1]) > 1 &&
        g.push(e.virtualSize - l);
  }
  if (u && r.loop) {
    const L = y[0] + S;
    if (r.slidesPerGroup > 1) {
      const I = Math.ceil(
          (e.virtual.slidesBefore + e.virtual.slidesAfter) / r.slidesPerGroup
        ),
        z = L * r.slidesPerGroup;
      for (let H = 0; H < I; H += 1) g.push(g[g.length - 1] + z);
    }
    for (let I = 0; I < e.virtual.slidesBefore + e.virtual.slidesAfter; I += 1)
      r.slidesPerGroup === 1 && g.push(g[g.length - 1] + L),
        v.push(v[v.length - 1] + L),
        (e.virtualSize += L);
  }
  if ((g.length === 0 && (g = [0]), S !== 0)) {
    const L = e.isHorizontal() && o ? "marginLeft" : t("marginRight");
    d.filter((I, z) =>
      !r.cssMode || r.loop ? !0 : z !== d.length - 1
    ).forEach((I) => {
      I.style[L] = `${S}px`;
    });
  }
  if (r.centeredSlides && r.centeredSlidesBounds) {
    let L = 0;
    y.forEach((z) => {
      L += z + (S || 0);
    }),
      (L -= S);
    const I = L - l;
    g = g.map((z) => (z <= 0 ? -x : z > I ? I + f : z));
  }
  if (r.centerInsufficientSlides) {
    let L = 0;
    if (
      (y.forEach((I) => {
        L += I + (S || 0);
      }),
      (L -= S),
      L < l)
    ) {
      const I = (l - L) / 2;
      g.forEach((z, H) => {
        g[H] = z - I;
      }),
        v.forEach((z, H) => {
          v[H] = z + I;
        });
    }
  }
  if (
    (Object.assign(e, {
      slides: d,
      snapGrid: g,
      slidesGrid: v,
      slidesSizesGrid: y,
    }),
    r.centeredSlides && r.cssMode && !r.centeredSlidesBounds)
  ) {
    wi(i, "--swiper-centered-offset-before", `${-g[0]}px`),
      wi(
        i,
        "--swiper-centered-offset-after",
        `${e.size / 2 - y[y.length - 1] / 2}px`
      );
    const L = -e.snapGrid[0],
      I = -e.slidesGrid[0];
    (e.snapGrid = e.snapGrid.map((z) => z + L)),
      (e.slidesGrid = e.slidesGrid.map((z) => z + I));
  }
  if (
    (h !== c && e.emit("slidesLengthChange"),
    g.length !== p &&
      (e.params.watchOverflow && e.checkOverflow(),
      e.emit("snapGridLengthChange")),
    v.length !== m && e.emit("slidesGridLengthChange"),
    r.watchSlidesProgress && e.updateSlidesOffset(),
    !u && !r.cssMode && (r.effect === "slide" || r.effect === "fade"))
  ) {
    const L = `${r.containerModifierClass}backface-hidden`,
      I = e.el.classList.contains(L);
    h <= r.maxBackfaceHiddenSlides
      ? I || e.el.classList.add(L)
      : I && e.el.classList.remove(L);
  }
}
function zv(e) {
  const t = this,
    n = [],
    r = t.virtual && t.params.virtual.enabled;
  let i = 0,
    s;
  typeof e == "number"
    ? t.setTransition(e)
    : e === !0 && t.setTransition(t.params.speed);
  const l = (o) => (r ? t.slides[t.getSlideIndexByData(o)] : t.slides[o]);
  if (t.params.slidesPerView !== "auto" && t.params.slidesPerView > 1)
    if (t.params.centeredSlides)
      (t.visibleSlides || []).forEach((o) => {
        n.push(o);
      });
    else
      for (s = 0; s < Math.ceil(t.params.slidesPerView); s += 1) {
        const o = t.activeIndex + s;
        if (o > t.slides.length && !r) break;
        n.push(l(o));
      }
  else n.push(l(t.activeIndex));
  for (s = 0; s < n.length; s += 1)
    if (typeof n[s] < "u") {
      const o = n[s].offsetHeight;
      i = o > i ? o : i;
    }
  (i || i === 0) && (t.wrapperEl.style.height = `${i}px`);
}
function Av() {
  const e = this,
    t = e.slides,
    n = e.isElement
      ? e.isHorizontal()
        ? e.wrapperEl.offsetLeft
        : e.wrapperEl.offsetTop
      : 0;
  for (let r = 0; r < t.length; r += 1)
    t[r].swiperSlideOffset =
      (e.isHorizontal() ? t[r].offsetLeft : t[r].offsetTop) -
      n -
      e.cssOverflowAdjustment();
}
function Fv(e) {
  e === void 0 && (e = (this && this.translate) || 0);
  const t = this,
    n = t.params,
    { slides: r, rtlTranslate: i, snapGrid: s } = t;
  if (r.length === 0) return;
  typeof r[0].swiperSlideOffset > "u" && t.updateSlidesOffset();
  let l = -e;
  i && (l = e),
    r.forEach((a) => {
      a.classList.remove(n.slideVisibleClass);
    }),
    (t.visibleSlidesIndexes = []),
    (t.visibleSlides = []);
  let o = n.spaceBetween;
  typeof o == "string" && o.indexOf("%") >= 0
    ? (o = (parseFloat(o.replace("%", "")) / 100) * t.size)
    : typeof o == "string" && (o = parseFloat(o));
  for (let a = 0; a < r.length; a += 1) {
    const u = r[a];
    let c = u.swiperSlideOffset;
    n.cssMode && n.centeredSlides && (c -= r[0].swiperSlideOffset);
    const d =
        (l + (n.centeredSlides ? t.minTranslate() : 0) - c) /
        (u.swiperSlideSize + o),
      h =
        (l - s[0] + (n.centeredSlides ? t.minTranslate() : 0) - c) /
        (u.swiperSlideSize + o),
      g = -(l - c),
      v = g + t.slidesSizesGrid[a];
    ((g >= 0 && g < t.size - 1) ||
      (v > 1 && v <= t.size) ||
      (g <= 0 && v >= t.size)) &&
      (t.visibleSlides.push(u),
      t.visibleSlidesIndexes.push(a),
      r[a].classList.add(n.slideVisibleClass)),
      (u.progress = i ? -d : d),
      (u.originalProgress = i ? -h : h);
  }
}
function Dv(e) {
  const t = this;
  if (typeof e > "u") {
    const c = t.rtlTranslate ? -1 : 1;
    e = (t && t.translate && t.translate * c) || 0;
  }
  const n = t.params,
    r = t.maxTranslate() - t.minTranslate();
  let { progress: i, isBeginning: s, isEnd: l, progressLoop: o } = t;
  const a = s,
    u = l;
  if (r === 0) (i = 0), (s = !0), (l = !0);
  else {
    i = (e - t.minTranslate()) / r;
    const c = Math.abs(e - t.minTranslate()) < 1,
      d = Math.abs(e - t.maxTranslate()) < 1;
    (s = c || i <= 0), (l = d || i >= 1), c && (i = 0), d && (i = 1);
  }
  if (n.loop) {
    const c = t.getSlideIndexByData(0),
      d = t.getSlideIndexByData(t.slides.length - 1),
      h = t.slidesGrid[c],
      g = t.slidesGrid[d],
      v = t.slidesGrid[t.slidesGrid.length - 1],
      y = Math.abs(e);
    y >= h ? (o = (y - h) / v) : (o = (y + v - g) / v), o > 1 && (o -= 1);
  }
  Object.assign(t, { progress: i, progressLoop: o, isBeginning: s, isEnd: l }),
    (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
      t.updateSlidesProgress(e),
    s && !a && t.emit("reachBeginning toEdge"),
    l && !u && t.emit("reachEnd toEdge"),
    ((a && !s) || (u && !l)) && t.emit("fromEdge"),
    t.emit("progress", i);
}
function Bv() {
  const e = this,
    { slides: t, params: n, slidesEl: r, activeIndex: i } = e,
    s = e.virtual && n.virtual.enabled,
    l = (a) => vt(r, `.${n.slideClass}${a}, swiper-slide${a}`)[0];
  t.forEach((a) => {
    a.classList.remove(n.slideActiveClass, n.slideNextClass, n.slidePrevClass);
  });
  let o;
  if (s)
    if (n.loop) {
      let a = i - e.virtual.slidesBefore;
      a < 0 && (a = e.virtual.slides.length + a),
        a >= e.virtual.slides.length && (a -= e.virtual.slides.length),
        (o = l(`[data-swiper-slide-index="${a}"]`));
    } else o = l(`[data-swiper-slide-index="${i}"]`);
  else o = t[i];
  if (o) {
    o.classList.add(n.slideActiveClass);
    let a = xv(o, `.${n.slideClass}, swiper-slide`)[0];
    n.loop && !a && (a = t[0]), a && a.classList.add(n.slideNextClass);
    let u = Sv(o, `.${n.slideClass}, swiper-slide`)[0];
    n.loop && !u === 0 && (u = t[t.length - 1]),
      u && u.classList.add(n.slidePrevClass);
  }
  e.emitSlidesClasses();
}
const Ri = (e, t) => {
    if (!e || e.destroyed || !e.params) return;
    const n = () => (e.isElement ? "swiper-slide" : `.${e.params.slideClass}`),
      r = t.closest(n());
    if (r) {
      let i = r.querySelector(`.${e.params.lazyPreloaderClass}`);
      !i &&
        e.isElement &&
        (r.shadowRoot
          ? (i = r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`))
          : requestAnimationFrame(() => {
              r.shadowRoot &&
                ((i = r.shadowRoot.querySelector(
                  `.${e.params.lazyPreloaderClass}`
                )),
                i && i.remove());
            })),
        i && i.remove();
    }
  },
  dl = (e, t) => {
    if (!e.slides[t]) return;
    const n = e.slides[t].querySelector('[loading="lazy"]');
    n && n.removeAttribute("loading");
  },
  ho = (e) => {
    if (!e || e.destroyed || !e.params) return;
    let t = e.params.lazyPreloadPrevNext;
    const n = e.slides.length;
    if (!n || !t || t < 0) return;
    t = Math.min(t, n);
    const r =
        e.params.slidesPerView === "auto"
          ? e.slidesPerViewDynamic()
          : Math.ceil(e.params.slidesPerView),
      i = e.activeIndex;
    if (e.params.grid && e.params.grid.rows > 1) {
      const l = i,
        o = [l - t];
      o.push(...Array.from({ length: t }).map((a, u) => l + r + u)),
        e.slides.forEach((a, u) => {
          o.includes(a.column) && dl(e, u);
        });
      return;
    }
    const s = i + r - 1;
    if (e.params.rewind || e.params.loop)
      for (let l = i - t; l <= s + t; l += 1) {
        const o = ((l % n) + n) % n;
        (o < i || o > s) && dl(e, o);
      }
    else
      for (let l = Math.max(i - t, 0); l <= Math.min(s + t, n - 1); l += 1)
        l !== i && (l > s || l < i) && dl(e, l);
  };
function $v(e) {
  const { slidesGrid: t, params: n } = e,
    r = e.rtlTranslate ? e.translate : -e.translate;
  let i;
  for (let s = 0; s < t.length; s += 1)
    typeof t[s + 1] < "u"
      ? r >= t[s] && r < t[s + 1] - (t[s + 1] - t[s]) / 2
        ? (i = s)
        : r >= t[s] && r < t[s + 1] && (i = s + 1)
      : r >= t[s] && (i = s);
  return n.normalizeSlideIndex && (i < 0 || typeof i > "u") && (i = 0), i;
}
function Uv(e) {
  const t = this,
    n = t.rtlTranslate ? t.translate : -t.translate,
    { snapGrid: r, params: i, activeIndex: s, realIndex: l, snapIndex: o } = t;
  let a = e,
    u;
  const c = (h) => {
    let g = h - t.virtual.slidesBefore;
    return (
      g < 0 && (g = t.virtual.slides.length + g),
      g >= t.virtual.slides.length && (g -= t.virtual.slides.length),
      g
    );
  };
  if ((typeof a > "u" && (a = $v(t)), r.indexOf(n) >= 0)) u = r.indexOf(n);
  else {
    const h = Math.min(i.slidesPerGroupSkip, a);
    u = h + Math.floor((a - h) / i.slidesPerGroup);
  }
  if ((u >= r.length && (u = r.length - 1), a === s)) {
    u !== o && ((t.snapIndex = u), t.emit("snapIndexChange")),
      t.params.loop &&
        t.virtual &&
        t.params.virtual.enabled &&
        (t.realIndex = c(a));
    return;
  }
  let d;
  t.virtual && i.virtual.enabled && i.loop
    ? (d = c(a))
    : t.slides[a]
    ? (d = parseInt(
        t.slides[a].getAttribute("data-swiper-slide-index") || a,
        10
      ))
    : (d = a),
    Object.assign(t, {
      previousSnapIndex: o,
      snapIndex: u,
      previousRealIndex: l,
      realIndex: d,
      previousIndex: s,
      activeIndex: a,
    }),
    t.initialized && ho(t),
    t.emit("activeIndexChange"),
    t.emit("snapIndexChange"),
    (t.initialized || t.params.runCallbacksOnInit) &&
      (l !== d && t.emit("realIndexChange"), t.emit("slideChange"));
}
function Vv(e, t) {
  const n = this,
    r = n.params;
  let i = e.closest(`.${r.slideClass}, swiper-slide`);
  !i &&
    n.isElement &&
    t &&
    t.length > 1 &&
    t.includes(e) &&
    [...t.slice(t.indexOf(e) + 1, t.length)].forEach((o) => {
      !i && o.matches && o.matches(`.${r.slideClass}, swiper-slide`) && (i = o);
    });
  let s = !1,
    l;
  if (i) {
    for (let o = 0; o < n.slides.length; o += 1)
      if (n.slides[o] === i) {
        (s = !0), (l = o);
        break;
      }
  }
  if (i && s)
    (n.clickedSlide = i),
      n.virtual && n.params.virtual.enabled
        ? (n.clickedIndex = parseInt(
            i.getAttribute("data-swiper-slide-index"),
            10
          ))
        : (n.clickedIndex = l);
  else {
    (n.clickedSlide = void 0), (n.clickedIndex = void 0);
    return;
  }
  r.slideToClickedSlide &&
    n.clickedIndex !== void 0 &&
    n.clickedIndex !== n.activeIndex &&
    n.slideToClickedSlide();
}
var bv = {
  updateSize: jv,
  updateSlides: Iv,
  updateAutoHeight: zv,
  updateSlidesOffset: Av,
  updateSlidesProgress: Fv,
  updateProgress: Dv,
  updateSlidesClasses: Bv,
  updateActiveIndex: Uv,
  updateClickedSlide: Vv,
};
function Hv(e) {
  e === void 0 && (e = this.isHorizontal() ? "x" : "y");
  const t = this,
    { params: n, rtlTranslate: r, translate: i, wrapperEl: s } = t;
  if (n.virtualTranslate) return r ? -i : i;
  if (n.cssMode) return i;
  let l = vv(s, e);
  return (l += t.cssOverflowAdjustment()), r && (l = -l), l || 0;
}
function Wv(e, t) {
  const n = this,
    { rtlTranslate: r, params: i, wrapperEl: s, progress: l } = n;
  let o = 0,
    a = 0;
  const u = 0;
  n.isHorizontal() ? (o = r ? -e : e) : (a = e),
    i.roundLengths && ((o = Math.floor(o)), (a = Math.floor(a))),
    (n.previousTranslate = n.translate),
    (n.translate = n.isHorizontal() ? o : a),
    i.cssMode
      ? (s[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal()
          ? -o
          : -a)
      : i.virtualTranslate ||
        (n.isHorizontal()
          ? (o -= n.cssOverflowAdjustment())
          : (a -= n.cssOverflowAdjustment()),
        (s.style.transform = `translate3d(${o}px, ${a}px, ${u}px)`));
  let c;
  const d = n.maxTranslate() - n.minTranslate();
  d === 0 ? (c = 0) : (c = (e - n.minTranslate()) / d),
    c !== l && n.updateProgress(e),
    n.emit("setTranslate", n.translate, t);
}
function Gv() {
  return -this.snapGrid[0];
}
function Xv() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function Yv(e, t, n, r, i) {
  e === void 0 && (e = 0),
    t === void 0 && (t = this.params.speed),
    n === void 0 && (n = !0),
    r === void 0 && (r = !0);
  const s = this,
    { params: l, wrapperEl: o } = s;
  if (s.animating && l.preventInteractionOnTransition) return !1;
  const a = s.minTranslate(),
    u = s.maxTranslate();
  let c;
  if (
    (r && e > a ? (c = a) : r && e < u ? (c = u) : (c = e),
    s.updateProgress(c),
    l.cssMode)
  ) {
    const d = s.isHorizontal();
    if (t === 0) o[d ? "scrollLeft" : "scrollTop"] = -c;
    else {
      if (!s.support.smoothScroll)
        return (
          Yf({ swiper: s, targetPosition: -c, side: d ? "left" : "top" }), !0
        );
      o.scrollTo({ [d ? "left" : "top"]: -c, behavior: "smooth" });
    }
    return !0;
  }
  return (
    t === 0
      ? (s.setTransition(0),
        s.setTranslate(c),
        n && (s.emit("beforeTransitionStart", t, i), s.emit("transitionEnd")))
      : (s.setTransition(t),
        s.setTranslate(c),
        n && (s.emit("beforeTransitionStart", t, i), s.emit("transitionStart")),
        s.animating ||
          ((s.animating = !0),
          s.onTranslateToWrapperTransitionEnd ||
            (s.onTranslateToWrapperTransitionEnd = function (h) {
              !s ||
                s.destroyed ||
                (h.target === this &&
                  (s.wrapperEl.removeEventListener(
                    "transitionend",
                    s.onTranslateToWrapperTransitionEnd
                  ),
                  (s.onTranslateToWrapperTransitionEnd = null),
                  delete s.onTranslateToWrapperTransitionEnd,
                  n && s.emit("transitionEnd")));
            }),
          s.wrapperEl.addEventListener(
            "transitionend",
            s.onTranslateToWrapperTransitionEnd
          ))),
    !0
  );
}
var Kv = {
  getTranslate: Hv,
  setTranslate: Wv,
  minTranslate: Gv,
  maxTranslate: Xv,
  translateTo: Yv,
};
function Qv(e, t) {
  const n = this;
  n.params.cssMode ||
    ((n.wrapperEl.style.transitionDuration = `${e}ms`),
    (n.wrapperEl.style.transitionDelay = e === 0 ? "0ms" : "")),
    n.emit("setTransition", e, t);
}
function Qf(e) {
  let { swiper: t, runCallbacks: n, direction: r, step: i } = e;
  const { activeIndex: s, previousIndex: l } = t;
  let o = r;
  if (
    (o || (s > l ? (o = "next") : s < l ? (o = "prev") : (o = "reset")),
    t.emit(`transition${i}`),
    n && s !== l)
  ) {
    if (o === "reset") {
      t.emit(`slideResetTransition${i}`);
      return;
    }
    t.emit(`slideChangeTransition${i}`),
      o === "next"
        ? t.emit(`slideNextTransition${i}`)
        : t.emit(`slidePrevTransition${i}`);
  }
}
function qv(e, t) {
  e === void 0 && (e = !0);
  const n = this,
    { params: r } = n;
  r.cssMode ||
    (r.autoHeight && n.updateAutoHeight(),
    Qf({ swiper: n, runCallbacks: e, direction: t, step: "Start" }));
}
function Jv(e, t) {
  e === void 0 && (e = !0);
  const n = this,
    { params: r } = n;
  (n.animating = !1),
    !r.cssMode &&
      (n.setTransition(0),
      Qf({ swiper: n, runCallbacks: e, direction: t, step: "End" }));
}
var Zv = { setTransition: Qv, transitionStart: qv, transitionEnd: Jv };
function ey(e, t, n, r, i) {
  e === void 0 && (e = 0),
    t === void 0 && (t = this.params.speed),
    n === void 0 && (n = !0),
    typeof e == "string" && (e = parseInt(e, 10));
  const s = this;
  let l = e;
  l < 0 && (l = 0);
  const {
    params: o,
    snapGrid: a,
    slidesGrid: u,
    previousIndex: c,
    activeIndex: d,
    rtlTranslate: h,
    wrapperEl: g,
    enabled: v,
  } = s;
  if ((s.animating && o.preventInteractionOnTransition) || (!v && !r && !i))
    return !1;
  const y = Math.min(s.params.slidesPerGroupSkip, l);
  let x = y + Math.floor((l - y) / s.params.slidesPerGroup);
  x >= a.length && (x = a.length - 1);
  const f = -a[x];
  if (o.normalizeSlideIndex)
    for (let m = 0; m < u.length; m += 1) {
      const S = -Math.floor(f * 100),
        E = Math.floor(u[m] * 100),
        _ = Math.floor(u[m + 1] * 100);
      typeof u[m + 1] < "u"
        ? S >= E && S < _ - (_ - E) / 2
          ? (l = m)
          : S >= E && S < _ && (l = m + 1)
        : S >= E && (l = m);
    }
  if (
    s.initialized &&
    l !== d &&
    ((!s.allowSlideNext &&
      (h
        ? f > s.translate && f > s.minTranslate()
        : f < s.translate && f < s.minTranslate())) ||
      (!s.allowSlidePrev &&
        f > s.translate &&
        f > s.maxTranslate() &&
        (d || 0) !== l))
  )
    return !1;
  l !== (c || 0) && n && s.emit("beforeSlideChangeStart"), s.updateProgress(f);
  let p;
  if (
    (l > d ? (p = "next") : l < d ? (p = "prev") : (p = "reset"),
    (h && -f === s.translate) || (!h && f === s.translate))
  )
    return (
      s.updateActiveIndex(l),
      o.autoHeight && s.updateAutoHeight(),
      s.updateSlidesClasses(),
      o.effect !== "slide" && s.setTranslate(f),
      p !== "reset" && (s.transitionStart(n, p), s.transitionEnd(n, p)),
      !1
    );
  if (o.cssMode) {
    const m = s.isHorizontal(),
      S = h ? f : -f;
    if (t === 0) {
      const E = s.virtual && s.params.virtual.enabled;
      E &&
        ((s.wrapperEl.style.scrollSnapType = "none"),
        (s._immediateVirtual = !0)),
        E && !s._cssModeVirtualInitialSet && s.params.initialSlide > 0
          ? ((s._cssModeVirtualInitialSet = !0),
            requestAnimationFrame(() => {
              g[m ? "scrollLeft" : "scrollTop"] = S;
            }))
          : (g[m ? "scrollLeft" : "scrollTop"] = S),
        E &&
          requestAnimationFrame(() => {
            (s.wrapperEl.style.scrollSnapType = ""), (s._immediateVirtual = !1);
          });
    } else {
      if (!s.support.smoothScroll)
        return (
          Yf({ swiper: s, targetPosition: S, side: m ? "left" : "top" }), !0
        );
      g.scrollTo({ [m ? "left" : "top"]: S, behavior: "smooth" });
    }
    return !0;
  }
  return (
    s.setTransition(t),
    s.setTranslate(f),
    s.updateActiveIndex(l),
    s.updateSlidesClasses(),
    s.emit("beforeTransitionStart", t, r),
    s.transitionStart(n, p),
    t === 0
      ? s.transitionEnd(n, p)
      : s.animating ||
        ((s.animating = !0),
        s.onSlideToWrapperTransitionEnd ||
          (s.onSlideToWrapperTransitionEnd = function (S) {
            !s ||
              s.destroyed ||
              (S.target === this &&
                (s.wrapperEl.removeEventListener(
                  "transitionend",
                  s.onSlideToWrapperTransitionEnd
                ),
                (s.onSlideToWrapperTransitionEnd = null),
                delete s.onSlideToWrapperTransitionEnd,
                s.transitionEnd(n, p)));
          }),
        s.wrapperEl.addEventListener(
          "transitionend",
          s.onSlideToWrapperTransitionEnd
        )),
    !0
  );
}
function ty(e, t, n, r) {
  e === void 0 && (e = 0),
    t === void 0 && (t = this.params.speed),
    n === void 0 && (n = !0),
    typeof e == "string" && (e = parseInt(e, 10));
  const i = this;
  let s = e;
  return (
    i.params.loop &&
      (i.virtual && i.params.virtual.enabled
        ? (s = s + i.virtual.slidesBefore)
        : (s = i.getSlideIndexByData(s))),
    i.slideTo(s, t, n, r)
  );
}
function ny(e, t, n) {
  e === void 0 && (e = this.params.speed), t === void 0 && (t = !0);
  const r = this,
    { enabled: i, params: s, animating: l } = r;
  if (!i) return r;
  let o = s.slidesPerGroup;
  s.slidesPerView === "auto" &&
    s.slidesPerGroup === 1 &&
    s.slidesPerGroupAuto &&
    (o = Math.max(r.slidesPerViewDynamic("current", !0), 1));
  const a = r.activeIndex < s.slidesPerGroupSkip ? 1 : o,
    u = r.virtual && s.virtual.enabled;
  if (s.loop) {
    if (l && !u && s.loopPreventsSliding) return !1;
    if (
      (r.loopFix({ direction: "next" }),
      (r._clientLeft = r.wrapperEl.clientLeft),
      r.activeIndex === r.slides.length - 1 && s.cssMode)
    )
      return (
        requestAnimationFrame(() => {
          r.slideTo(r.activeIndex + a, e, t, n);
        }),
        !0
      );
  }
  return s.rewind && r.isEnd
    ? r.slideTo(0, e, t, n)
    : r.slideTo(r.activeIndex + a, e, t, n);
}
function ry(e, t, n) {
  e === void 0 && (e = this.params.speed), t === void 0 && (t = !0);
  const r = this,
    {
      params: i,
      snapGrid: s,
      slidesGrid: l,
      rtlTranslate: o,
      enabled: a,
      animating: u,
    } = r;
  if (!a) return r;
  const c = r.virtual && i.virtual.enabled;
  if (i.loop) {
    if (u && !c && i.loopPreventsSliding) return !1;
    r.loopFix({ direction: "prev" }), (r._clientLeft = r.wrapperEl.clientLeft);
  }
  const d = o ? r.translate : -r.translate;
  function h(f) {
    return f < 0 ? -Math.floor(Math.abs(f)) : Math.floor(f);
  }
  const g = h(d),
    v = s.map((f) => h(f));
  let y = s[v.indexOf(g) - 1];
  if (typeof y > "u" && i.cssMode) {
    let f;
    s.forEach((p, m) => {
      g >= p && (f = m);
    }),
      typeof f < "u" && (y = s[f > 0 ? f - 1 : f]);
  }
  let x = 0;
  if (
    (typeof y < "u" &&
      ((x = l.indexOf(y)),
      x < 0 && (x = r.activeIndex - 1),
      i.slidesPerView === "auto" &&
        i.slidesPerGroup === 1 &&
        i.slidesPerGroupAuto &&
        ((x = x - r.slidesPerViewDynamic("previous", !0) + 1),
        (x = Math.max(x, 0)))),
    i.rewind && r.isBeginning)
  ) {
    const f =
      r.params.virtual && r.params.virtual.enabled && r.virtual
        ? r.virtual.slides.length - 1
        : r.slides.length - 1;
    return r.slideTo(f, e, t, n);
  } else if (i.loop && r.activeIndex === 0 && i.cssMode)
    return (
      requestAnimationFrame(() => {
        r.slideTo(x, e, t, n);
      }),
      !0
    );
  return r.slideTo(x, e, t, n);
}
function iy(e, t, n) {
  e === void 0 && (e = this.params.speed), t === void 0 && (t = !0);
  const r = this;
  return r.slideTo(r.activeIndex, e, t, n);
}
function sy(e, t, n, r) {
  e === void 0 && (e = this.params.speed),
    t === void 0 && (t = !0),
    r === void 0 && (r = 0.5);
  const i = this;
  let s = i.activeIndex;
  const l = Math.min(i.params.slidesPerGroupSkip, s),
    o = l + Math.floor((s - l) / i.params.slidesPerGroup),
    a = i.rtlTranslate ? i.translate : -i.translate;
  if (a >= i.snapGrid[o]) {
    const u = i.snapGrid[o],
      c = i.snapGrid[o + 1];
    a - u > (c - u) * r && (s += i.params.slidesPerGroup);
  } else {
    const u = i.snapGrid[o - 1],
      c = i.snapGrid[o];
    a - u <= (c - u) * r && (s -= i.params.slidesPerGroup);
  }
  return (
    (s = Math.max(s, 0)),
    (s = Math.min(s, i.slidesGrid.length - 1)),
    i.slideTo(s, e, t, n)
  );
}
function ly() {
  const e = this,
    { params: t, slidesEl: n } = e,
    r = t.slidesPerView === "auto" ? e.slidesPerViewDynamic() : t.slidesPerView;
  let i = e.clickedIndex,
    s;
  const l = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
  if (t.loop) {
    if (e.animating) return;
    (s = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10)),
      t.centeredSlides
        ? i < e.loopedSlides - r / 2 ||
          i > e.slides.length - e.loopedSlides + r / 2
          ? (e.loopFix(),
            (i = e.getSlideIndex(
              vt(n, `${l}[data-swiper-slide-index="${s}"]`)[0]
            )),
            Vr(() => {
              e.slideTo(i);
            }))
          : e.slideTo(i)
        : i > e.slides.length - r
        ? (e.loopFix(),
          (i = e.getSlideIndex(
            vt(n, `${l}[data-swiper-slide-index="${s}"]`)[0]
          )),
          Vr(() => {
            e.slideTo(i);
          }))
        : e.slideTo(i);
  } else e.slideTo(i);
}
var oy = {
  slideTo: ey,
  slideToLoop: ty,
  slideNext: ny,
  slidePrev: ry,
  slideReset: iy,
  slideToClosest: sy,
  slideToClickedSlide: ly,
};
function ay(e) {
  const t = this,
    { params: n, slidesEl: r } = t;
  if (!n.loop || (t.virtual && t.params.virtual.enabled)) return;
  vt(r, `.${n.slideClass}, swiper-slide`).forEach((s, l) => {
    s.setAttribute("data-swiper-slide-index", l);
  }),
    t.loopFix({
      slideRealIndex: e,
      direction: n.centeredSlides ? void 0 : "next",
    });
}
function uy(e) {
  let {
    slideRealIndex: t,
    slideTo: n = !0,
    direction: r,
    setTranslate: i,
    activeSlideIndex: s,
    byController: l,
    byMousewheel: o,
  } = e === void 0 ? {} : e;
  const a = this;
  if (!a.params.loop) return;
  a.emit("beforeLoopFix");
  const {
    slides: u,
    allowSlidePrev: c,
    allowSlideNext: d,
    slidesEl: h,
    params: g,
  } = a;
  if (
    ((a.allowSlidePrev = !0),
    (a.allowSlideNext = !0),
    a.virtual && g.virtual.enabled)
  ) {
    n &&
      (!g.centeredSlides && a.snapIndex === 0
        ? a.slideTo(a.virtual.slides.length, 0, !1, !0)
        : g.centeredSlides && a.snapIndex < g.slidesPerView
        ? a.slideTo(a.virtual.slides.length + a.snapIndex, 0, !1, !0)
        : a.snapIndex === a.snapGrid.length - 1 &&
          a.slideTo(a.virtual.slidesBefore, 0, !1, !0)),
      (a.allowSlidePrev = c),
      (a.allowSlideNext = d),
      a.emit("loopFix");
    return;
  }
  const v =
    g.slidesPerView === "auto"
      ? a.slidesPerViewDynamic()
      : Math.ceil(parseFloat(g.slidesPerView, 10));
  let y = g.loopedSlides || v;
  y % g.slidesPerGroup !== 0 &&
    (y += g.slidesPerGroup - (y % g.slidesPerGroup)),
    (a.loopedSlides = y);
  const x = [],
    f = [];
  let p = a.activeIndex;
  typeof s > "u"
    ? (s = a.getSlideIndex(
        a.slides.filter((T) => T.classList.contains(g.slideActiveClass))[0]
      ))
    : (p = s);
  const m = r === "next" || !r,
    S = r === "prev" || !r;
  let E = 0,
    _ = 0;
  if (s < y) {
    E = Math.max(y - s, g.slidesPerGroup);
    for (let T = 0; T < y - s; T += 1) {
      const N = T - Math.floor(T / u.length) * u.length;
      x.push(u.length - N - 1);
    }
  } else if (s > a.slides.length - y * 2) {
    _ = Math.max(s - (a.slides.length - y * 2), g.slidesPerGroup);
    for (let T = 0; T < _; T += 1) {
      const N = T - Math.floor(T / u.length) * u.length;
      f.push(N);
    }
  }
  if (
    (S &&
      x.forEach((T) => {
        (a.slides[T].swiperLoopMoveDOM = !0),
          h.prepend(a.slides[T]),
          (a.slides[T].swiperLoopMoveDOM = !1);
      }),
    m &&
      f.forEach((T) => {
        (a.slides[T].swiperLoopMoveDOM = !0),
          h.append(a.slides[T]),
          (a.slides[T].swiperLoopMoveDOM = !1);
      }),
    a.recalcSlides(),
    g.slidesPerView === "auto" && a.updateSlides(),
    g.watchSlidesProgress && a.updateSlidesOffset(),
    n)
  ) {
    if (x.length > 0 && S)
      if (typeof t > "u") {
        const T = a.slidesGrid[p],
          C = a.slidesGrid[p + E] - T;
        o
          ? a.setTranslate(a.translate - C)
          : (a.slideTo(p + E, 0, !1, !0),
            i &&
              ((a.touches[a.isHorizontal() ? "startX" : "startY"] += C),
              (a.touchEventsData.currentTranslate = a.translate)));
      } else
        i &&
          (a.slideToLoop(t, 0, !1, !0),
          (a.touchEventsData.currentTranslate = a.translate));
    else if (f.length > 0 && m)
      if (typeof t > "u") {
        const T = a.slidesGrid[p],
          C = a.slidesGrid[p - _] - T;
        o
          ? a.setTranslate(a.translate - C)
          : (a.slideTo(p - _, 0, !1, !0),
            i &&
              ((a.touches[a.isHorizontal() ? "startX" : "startY"] += C),
              (a.touchEventsData.currentTranslate = a.translate)));
      } else a.slideToLoop(t, 0, !1, !0);
  }
  if (
    ((a.allowSlidePrev = c),
    (a.allowSlideNext = d),
    a.controller && a.controller.control && !l)
  ) {
    const T = {
      slideRealIndex: t,
      direction: r,
      setTranslate: i,
      activeSlideIndex: s,
      byController: !0,
    };
    Array.isArray(a.controller.control)
      ? a.controller.control.forEach((N) => {
          !N.destroyed &&
            N.params.loop &&
            N.loopFix({
              ...T,
              slideTo: N.params.slidesPerView === g.slidesPerView ? n : !1,
            });
        })
      : a.controller.control instanceof a.constructor &&
        a.controller.control.params.loop &&
        a.controller.control.loopFix({
          ...T,
          slideTo:
            a.controller.control.params.slidesPerView === g.slidesPerView
              ? n
              : !1,
        });
  }
  a.emit("loopFix");
}
function cy() {
  const e = this,
    { params: t, slidesEl: n } = e;
  if (!t.loop || (e.virtual && e.params.virtual.enabled)) return;
  e.recalcSlides();
  const r = [];
  e.slides.forEach((i) => {
    const s =
      typeof i.swiperSlideIndex > "u"
        ? i.getAttribute("data-swiper-slide-index") * 1
        : i.swiperSlideIndex;
    r[s] = i;
  }),
    e.slides.forEach((i) => {
      i.removeAttribute("data-swiper-slide-index");
    }),
    r.forEach((i) => {
      n.append(i);
    }),
    e.recalcSlides(),
    e.slideTo(e.realIndex, 0);
}
var dy = { loopCreate: ay, loopFix: uy, loopDestroy: cy };
function fy(e) {
  const t = this;
  if (
    !t.params.simulateTouch ||
    (t.params.watchOverflow && t.isLocked) ||
    t.params.cssMode
  )
    return;
  const n = t.params.touchEventsTarget === "container" ? t.el : t.wrapperEl;
  t.isElement && (t.__preventObserver__ = !0),
    (n.style.cursor = "move"),
    (n.style.cursor = e ? "grabbing" : "grab"),
    t.isElement &&
      requestAnimationFrame(() => {
        t.__preventObserver__ = !1;
      });
}
function py() {
  const e = this;
  (e.params.watchOverflow && e.isLocked) ||
    e.params.cssMode ||
    (e.isElement && (e.__preventObserver__ = !0),
    (e[
      e.params.touchEventsTarget === "container" ? "el" : "wrapperEl"
    ].style.cursor = ""),
    e.isElement &&
      requestAnimationFrame(() => {
        e.__preventObserver__ = !1;
      }));
}
var my = { setGrabCursor: fy, unsetGrabCursor: py };
function hy(e, t) {
  t === void 0 && (t = this);
  function n(r) {
    if (!r || r === ot() || r === Le()) return null;
    r.assignedSlot && (r = r.assignedSlot);
    const i = r.closest(e);
    return !i && !r.getRootNode ? null : i || n(r.getRootNode().host);
  }
  return n(t);
}
function gy(e) {
  const t = this,
    n = ot(),
    r = Le(),
    i = t.touchEventsData;
  i.evCache.push(e);
  const { params: s, touches: l, enabled: o } = t;
  if (
    !o ||
    (!s.simulateTouch && e.pointerType === "mouse") ||
    (t.animating && s.preventInteractionOnTransition)
  )
    return;
  !t.animating && s.cssMode && s.loop && t.loopFix();
  let a = e;
  a.originalEvent && (a = a.originalEvent);
  let u = a.target;
  if (
    (s.touchEventsTarget === "wrapper" && !t.wrapperEl.contains(u)) ||
    ("which" in a && a.which === 3) ||
    ("button" in a && a.button > 0) ||
    (i.isTouched && i.isMoved)
  )
    return;
  const c = !!s.noSwipingClass && s.noSwipingClass !== "",
    d = e.composedPath ? e.composedPath() : e.path;
  c && a.target && a.target.shadowRoot && d && (u = d[0]);
  const h = s.noSwipingSelector ? s.noSwipingSelector : `.${s.noSwipingClass}`,
    g = !!(a.target && a.target.shadowRoot);
  if (s.noSwiping && (g ? hy(h, u) : u.closest(h))) {
    t.allowClick = !0;
    return;
  }
  if (s.swipeHandler && !u.closest(s.swipeHandler)) return;
  (l.currentX = a.pageX), (l.currentY = a.pageY);
  const v = l.currentX,
    y = l.currentY,
    x = s.edgeSwipeDetection || s.iOSEdgeSwipeDetection,
    f = s.edgeSwipeThreshold || s.iOSEdgeSwipeThreshold;
  if (x && (v <= f || v >= r.innerWidth - f))
    if (x === "prevent") e.preventDefault();
    else return;
  Object.assign(i, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0,
  }),
    (l.startX = v),
    (l.startY = y),
    (i.touchStartTime = mt()),
    (t.allowClick = !0),
    t.updateSize(),
    (t.swipeDirection = void 0),
    s.threshold > 0 && (i.allowThresholdMove = !1);
  let p = !0;
  u.matches(i.focusableElements) &&
    ((p = !1), u.nodeName === "SELECT" && (i.isTouched = !1)),
    n.activeElement &&
      n.activeElement.matches(i.focusableElements) &&
      n.activeElement !== u &&
      n.activeElement.blur();
  const m = p && t.allowTouchMove && s.touchStartPreventDefault;
  (s.touchStartForcePreventDefault || m) &&
    !u.isContentEditable &&
    a.preventDefault(),
    s.freeMode &&
      s.freeMode.enabled &&
      t.freeMode &&
      t.animating &&
      !s.cssMode &&
      t.freeMode.onTouchStart(),
    t.emit("touchStart", a);
}
function vy(e) {
  const t = ot(),
    n = this,
    r = n.touchEventsData,
    { params: i, touches: s, rtlTranslate: l, enabled: o } = n;
  if (!o || (!i.simulateTouch && e.pointerType === "mouse")) return;
  let a = e;
  if ((a.originalEvent && (a = a.originalEvent), !r.isTouched)) {
    r.startMoving && r.isScrolling && n.emit("touchMoveOpposite", a);
    return;
  }
  const u = r.evCache.findIndex((T) => T.pointerId === a.pointerId);
  u >= 0 && (r.evCache[u] = a);
  const c = r.evCache.length > 1 ? r.evCache[0] : a,
    d = c.pageX,
    h = c.pageY;
  if (a.preventedByNestedSwiper) {
    (s.startX = d), (s.startY = h);
    return;
  }
  if (!n.allowTouchMove) {
    a.target.matches(r.focusableElements) || (n.allowClick = !1),
      r.isTouched &&
        (Object.assign(s, {
          startX: d,
          startY: h,
          prevX: n.touches.currentX,
          prevY: n.touches.currentY,
          currentX: d,
          currentY: h,
        }),
        (r.touchStartTime = mt()));
    return;
  }
  if (i.touchReleaseOnEdges && !i.loop) {
    if (n.isVertical()) {
      if (
        (h < s.startY && n.translate <= n.maxTranslate()) ||
        (h > s.startY && n.translate >= n.minTranslate())
      ) {
        (r.isTouched = !1), (r.isMoved = !1);
        return;
      }
    } else if (
      (d < s.startX && n.translate <= n.maxTranslate()) ||
      (d > s.startX && n.translate >= n.minTranslate())
    )
      return;
  }
  if (
    t.activeElement &&
    a.target === t.activeElement &&
    a.target.matches(r.focusableElements)
  ) {
    (r.isMoved = !0), (n.allowClick = !1);
    return;
  }
  if (
    (r.allowTouchCallbacks && n.emit("touchMove", a),
    a.targetTouches && a.targetTouches.length > 1)
  )
    return;
  (s.currentX = d), (s.currentY = h);
  const g = s.currentX - s.startX,
    v = s.currentY - s.startY;
  if (n.params.threshold && Math.sqrt(g ** 2 + v ** 2) < n.params.threshold)
    return;
  if (typeof r.isScrolling > "u") {
    let T;
    (n.isHorizontal() && s.currentY === s.startY) ||
    (n.isVertical() && s.currentX === s.startX)
      ? (r.isScrolling = !1)
      : g * g + v * v >= 25 &&
        ((T = (Math.atan2(Math.abs(v), Math.abs(g)) * 180) / Math.PI),
        (r.isScrolling = n.isHorizontal()
          ? T > i.touchAngle
          : 90 - T > i.touchAngle));
  }
  if (
    (r.isScrolling && n.emit("touchMoveOpposite", a),
    typeof r.startMoving > "u" &&
      (s.currentX !== s.startX || s.currentY !== s.startY) &&
      (r.startMoving = !0),
    r.isScrolling ||
      (n.zoom &&
        n.params.zoom &&
        n.params.zoom.enabled &&
        r.evCache.length > 1))
  ) {
    r.isTouched = !1;
    return;
  }
  if (!r.startMoving) return;
  (n.allowClick = !1),
    !i.cssMode && a.cancelable && a.preventDefault(),
    i.touchMoveStopPropagation && !i.nested && a.stopPropagation();
  let y = n.isHorizontal() ? g : v,
    x = n.isHorizontal() ? s.currentX - s.previousX : s.currentY - s.previousY;
  i.oneWayMovement &&
    ((y = Math.abs(y) * (l ? 1 : -1)), (x = Math.abs(x) * (l ? 1 : -1))),
    (s.diff = y),
    (y *= i.touchRatio),
    l && ((y = -y), (x = -x));
  const f = n.touchesDirection;
  (n.swipeDirection = y > 0 ? "prev" : "next"),
    (n.touchesDirection = x > 0 ? "prev" : "next");
  const p = n.params.loop && !i.cssMode,
    m =
      (n.swipeDirection === "next" && n.allowSlideNext) ||
      (n.swipeDirection === "prev" && n.allowSlidePrev);
  if (!r.isMoved) {
    if (
      (p && m && n.loopFix({ direction: n.swipeDirection }),
      (r.startTranslate = n.getTranslate()),
      n.setTransition(0),
      n.animating)
    ) {
      const T = new window.CustomEvent("transitionend", {
        bubbles: !0,
        cancelable: !0,
      });
      n.wrapperEl.dispatchEvent(T);
    }
    (r.allowMomentumBounce = !1),
      i.grabCursor &&
        (n.allowSlideNext === !0 || n.allowSlidePrev === !0) &&
        n.setGrabCursor(!0),
      n.emit("sliderFirstMove", a);
  }
  let S;
  r.isMoved &&
    f !== n.touchesDirection &&
    p &&
    m &&
    Math.abs(y) >= 1 &&
    (n.loopFix({ direction: n.swipeDirection, setTranslate: !0 }), (S = !0)),
    n.emit("sliderMove", a),
    (r.isMoved = !0),
    (r.currentTranslate = y + r.startTranslate);
  let E = !0,
    _ = i.resistanceRatio;
  if (
    (i.touchReleaseOnEdges && (_ = 0),
    y > 0
      ? (p &&
          m &&
          !S &&
          r.currentTranslate >
            (i.centeredSlides
              ? n.minTranslate() - n.size / 2
              : n.minTranslate()) &&
          n.loopFix({
            direction: "prev",
            setTranslate: !0,
            activeSlideIndex: 0,
          }),
        r.currentTranslate > n.minTranslate() &&
          ((E = !1),
          i.resistance &&
            (r.currentTranslate =
              n.minTranslate() -
              1 +
              (-n.minTranslate() + r.startTranslate + y) ** _)))
      : y < 0 &&
        (p &&
          m &&
          !S &&
          r.currentTranslate <
            (i.centeredSlides
              ? n.maxTranslate() + n.size / 2
              : n.maxTranslate()) &&
          n.loopFix({
            direction: "next",
            setTranslate: !0,
            activeSlideIndex:
              n.slides.length -
              (i.slidesPerView === "auto"
                ? n.slidesPerViewDynamic()
                : Math.ceil(parseFloat(i.slidesPerView, 10))),
          }),
        r.currentTranslate < n.maxTranslate() &&
          ((E = !1),
          i.resistance &&
            (r.currentTranslate =
              n.maxTranslate() +
              1 -
              (n.maxTranslate() - r.startTranslate - y) ** _))),
    E && (a.preventedByNestedSwiper = !0),
    !n.allowSlideNext &&
      n.swipeDirection === "next" &&
      r.currentTranslate < r.startTranslate &&
      (r.currentTranslate = r.startTranslate),
    !n.allowSlidePrev &&
      n.swipeDirection === "prev" &&
      r.currentTranslate > r.startTranslate &&
      (r.currentTranslate = r.startTranslate),
    !n.allowSlidePrev &&
      !n.allowSlideNext &&
      (r.currentTranslate = r.startTranslate),
    i.threshold > 0)
  )
    if (Math.abs(y) > i.threshold || r.allowThresholdMove) {
      if (!r.allowThresholdMove) {
        (r.allowThresholdMove = !0),
          (s.startX = s.currentX),
          (s.startY = s.currentY),
          (r.currentTranslate = r.startTranslate),
          (s.diff = n.isHorizontal()
            ? s.currentX - s.startX
            : s.currentY - s.startY);
        return;
      }
    } else {
      r.currentTranslate = r.startTranslate;
      return;
    }
  !i.followFinger ||
    i.cssMode ||
    (((i.freeMode && i.freeMode.enabled && n.freeMode) ||
      i.watchSlidesProgress) &&
      (n.updateActiveIndex(), n.updateSlidesClasses()),
    i.freeMode && i.freeMode.enabled && n.freeMode && n.freeMode.onTouchMove(),
    n.updateProgress(r.currentTranslate),
    n.setTranslate(r.currentTranslate));
}
function yy(e) {
  const t = this,
    n = t.touchEventsData,
    r = n.evCache.findIndex((m) => m.pointerId === e.pointerId);
  if (
    (r >= 0 && n.evCache.splice(r, 1),
    ["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(
      e.type
    ) &&
      !(
        ["pointercancel", "contextmenu"].includes(e.type) &&
        (t.browser.isSafari || t.browser.isWebView)
      ))
  )
    return;
  const {
    params: i,
    touches: s,
    rtlTranslate: l,
    slidesGrid: o,
    enabled: a,
  } = t;
  if (!a || (!i.simulateTouch && e.pointerType === "mouse")) return;
  let u = e;
  if (
    (u.originalEvent && (u = u.originalEvent),
    n.allowTouchCallbacks && t.emit("touchEnd", u),
    (n.allowTouchCallbacks = !1),
    !n.isTouched)
  ) {
    n.isMoved && i.grabCursor && t.setGrabCursor(!1),
      (n.isMoved = !1),
      (n.startMoving = !1);
    return;
  }
  i.grabCursor &&
    n.isMoved &&
    n.isTouched &&
    (t.allowSlideNext === !0 || t.allowSlidePrev === !0) &&
    t.setGrabCursor(!1);
  const c = mt(),
    d = c - n.touchStartTime;
  if (t.allowClick) {
    const m = u.path || (u.composedPath && u.composedPath());
    t.updateClickedSlide((m && m[0]) || u.target, m),
      t.emit("tap click", u),
      d < 300 &&
        c - n.lastClickTime < 300 &&
        t.emit("doubleTap doubleClick", u);
  }
  if (
    ((n.lastClickTime = mt()),
    Vr(() => {
      t.destroyed || (t.allowClick = !0);
    }),
    !n.isTouched ||
      !n.isMoved ||
      !t.swipeDirection ||
      s.diff === 0 ||
      n.currentTranslate === n.startTranslate)
  ) {
    (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
    return;
  }
  (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
  let h;
  if (
    (i.followFinger
      ? (h = l ? t.translate : -t.translate)
      : (h = -n.currentTranslate),
    i.cssMode)
  )
    return;
  if (i.freeMode && i.freeMode.enabled) {
    t.freeMode.onTouchEnd({ currentPos: h });
    return;
  }
  let g = 0,
    v = t.slidesSizesGrid[0];
  for (
    let m = 0;
    m < o.length;
    m += m < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup
  ) {
    const S = m < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
    typeof o[m + S] < "u"
      ? h >= o[m] && h < o[m + S] && ((g = m), (v = o[m + S] - o[m]))
      : h >= o[m] && ((g = m), (v = o[o.length - 1] - o[o.length - 2]));
  }
  let y = null,
    x = null;
  i.rewind &&
    (t.isBeginning
      ? (x =
          i.virtual && i.virtual.enabled && t.virtual
            ? t.virtual.slides.length - 1
            : t.slides.length - 1)
      : t.isEnd && (y = 0));
  const f = (h - o[g]) / v,
    p = g < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
  if (d > i.longSwipesMs) {
    if (!i.longSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.swipeDirection === "next" &&
      (f >= i.longSwipesRatio
        ? t.slideTo(i.rewind && t.isEnd ? y : g + p)
        : t.slideTo(g)),
      t.swipeDirection === "prev" &&
        (f > 1 - i.longSwipesRatio
          ? t.slideTo(g + p)
          : x !== null && f < 0 && Math.abs(f) > i.longSwipesRatio
          ? t.slideTo(x)
          : t.slideTo(g));
  } else {
    if (!i.shortSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.navigation &&
    (u.target === t.navigation.nextEl || u.target === t.navigation.prevEl)
      ? u.target === t.navigation.nextEl
        ? t.slideTo(g + p)
        : t.slideTo(g)
      : (t.swipeDirection === "next" && t.slideTo(y !== null ? y : g + p),
        t.swipeDirection === "prev" && t.slideTo(x !== null ? x : g));
  }
}
function Zu() {
  const e = this,
    { params: t, el: n } = e;
  if (n && n.offsetWidth === 0) return;
  t.breakpoints && e.setBreakpoint();
  const { allowSlideNext: r, allowSlidePrev: i, snapGrid: s } = e,
    l = e.virtual && e.params.virtual.enabled;
  (e.allowSlideNext = !0),
    (e.allowSlidePrev = !0),
    e.updateSize(),
    e.updateSlides(),
    e.updateSlidesClasses();
  const o = l && t.loop;
  (t.slidesPerView === "auto" || t.slidesPerView > 1) &&
  e.isEnd &&
  !e.isBeginning &&
  !e.params.centeredSlides &&
  !o
    ? e.slideTo(e.slides.length - 1, 0, !1, !0)
    : e.params.loop && !l
    ? e.slideToLoop(e.realIndex, 0, !1, !0)
    : e.slideTo(e.activeIndex, 0, !1, !0),
    e.autoplay &&
      e.autoplay.running &&
      e.autoplay.paused &&
      (clearTimeout(e.autoplay.resizeTimeout),
      (e.autoplay.resizeTimeout = setTimeout(() => {
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          e.autoplay.resume();
      }, 500))),
    (e.allowSlidePrev = i),
    (e.allowSlideNext = r),
    e.params.watchOverflow && s !== e.snapGrid && e.checkOverflow();
}
function wy(e) {
  const t = this;
  t.enabled &&
    (t.allowClick ||
      (t.params.preventClicks && e.preventDefault(),
      t.params.preventClicksPropagation &&
        t.animating &&
        (e.stopPropagation(), e.stopImmediatePropagation())));
}
function Sy() {
  const e = this,
    { wrapperEl: t, rtlTranslate: n, enabled: r } = e;
  if (!r) return;
  (e.previousTranslate = e.translate),
    e.isHorizontal()
      ? (e.translate = -t.scrollLeft)
      : (e.translate = -t.scrollTop),
    e.translate === 0 && (e.translate = 0),
    e.updateActiveIndex(),
    e.updateSlidesClasses();
  let i;
  const s = e.maxTranslate() - e.minTranslate();
  s === 0 ? (i = 0) : (i = (e.translate - e.minTranslate()) / s),
    i !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
    e.emit("setTranslate", e.translate, !1);
}
function xy(e) {
  const t = this;
  Ri(t, e.target),
    !(
      t.params.cssMode ||
      (t.params.slidesPerView !== "auto" && !t.params.autoHeight)
    ) && t.update();
}
let ec = !1;
function Ey() {}
const qf = (e, t) => {
  const n = ot(),
    { params: r, el: i, wrapperEl: s, device: l } = e,
    o = !!r.nested,
    a = t === "on" ? "addEventListener" : "removeEventListener",
    u = t;
  i[a]("pointerdown", e.onTouchStart, { passive: !1 }),
    n[a]("pointermove", e.onTouchMove, { passive: !1, capture: o }),
    n[a]("pointerup", e.onTouchEnd, { passive: !0 }),
    n[a]("pointercancel", e.onTouchEnd, { passive: !0 }),
    n[a]("pointerout", e.onTouchEnd, { passive: !0 }),
    n[a]("pointerleave", e.onTouchEnd, { passive: !0 }),
    n[a]("contextmenu", e.onTouchEnd, { passive: !0 }),
    (r.preventClicks || r.preventClicksPropagation) &&
      i[a]("click", e.onClick, !0),
    r.cssMode && s[a]("scroll", e.onScroll),
    r.updateOnWindowResize
      ? e[u](
          l.ios || l.android
            ? "resize orientationchange observerUpdate"
            : "resize observerUpdate",
          Zu,
          !0
        )
      : e[u]("observerUpdate", Zu, !0),
    i[a]("load", e.onLoad, { capture: !0 });
};
function Ty() {
  const e = this,
    t = ot(),
    { params: n } = e;
  (e.onTouchStart = gy.bind(e)),
    (e.onTouchMove = vy.bind(e)),
    (e.onTouchEnd = yy.bind(e)),
    n.cssMode && (e.onScroll = Sy.bind(e)),
    (e.onClick = wy.bind(e)),
    (e.onLoad = xy.bind(e)),
    ec || (t.addEventListener("touchstart", Ey), (ec = !0)),
    qf(e, "on");
}
function Cy() {
  qf(this, "off");
}
var Py = { attachEvents: Ty, detachEvents: Cy };
const tc = (e, t) => e.grid && t.grid && t.grid.rows > 1;
function ky() {
  const e = this,
    { realIndex: t, initialized: n, params: r, el: i } = e,
    s = r.breakpoints;
  if (!s || (s && Object.keys(s).length === 0)) return;
  const l = e.getBreakpoint(s, e.params.breakpointsBase, e.el);
  if (!l || e.currentBreakpoint === l) return;
  const a = (l in s ? s[l] : void 0) || e.originalParams,
    u = tc(e, r),
    c = tc(e, a),
    d = r.enabled;
  u && !c
    ? (i.classList.remove(
        `${r.containerModifierClass}grid`,
        `${r.containerModifierClass}grid-column`
      ),
      e.emitContainerClasses())
    : !u &&
      c &&
      (i.classList.add(`${r.containerModifierClass}grid`),
      ((a.grid.fill && a.grid.fill === "column") ||
        (!a.grid.fill && r.grid.fill === "column")) &&
        i.classList.add(`${r.containerModifierClass}grid-column`),
      e.emitContainerClasses()),
    ["navigation", "pagination", "scrollbar"].forEach((f) => {
      if (typeof a[f] > "u") return;
      const p = r[f] && r[f].enabled,
        m = a[f] && a[f].enabled;
      p && !m && e[f].disable(), !p && m && e[f].enable();
    });
  const h = a.direction && a.direction !== r.direction,
    g = r.loop && (a.slidesPerView !== r.slidesPerView || h),
    v = r.loop;
  h && n && e.changeDirection(), Re(e.params, a);
  const y = e.params.enabled,
    x = e.params.loop;
  Object.assign(e, {
    allowTouchMove: e.params.allowTouchMove,
    allowSlideNext: e.params.allowSlideNext,
    allowSlidePrev: e.params.allowSlidePrev,
  }),
    d && !y ? e.disable() : !d && y && e.enable(),
    (e.currentBreakpoint = l),
    e.emit("_beforeBreakpoint", a),
    n &&
      (g
        ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides())
        : !v && x
        ? (e.loopCreate(t), e.updateSlides())
        : v && !x && e.loopDestroy()),
    e.emit("breakpoint", a);
}
function Ny(e, t, n) {
  if ((t === void 0 && (t = "window"), !e || (t === "container" && !n))) return;
  let r = !1;
  const i = Le(),
    s = t === "window" ? i.innerHeight : n.clientHeight,
    l = Object.keys(e).map((o) => {
      if (typeof o == "string" && o.indexOf("@") === 0) {
        const a = parseFloat(o.substr(1));
        return { value: s * a, point: o };
      }
      return { value: o, point: o };
    });
  l.sort((o, a) => parseInt(o.value, 10) - parseInt(a.value, 10));
  for (let o = 0; o < l.length; o += 1) {
    const { point: a, value: u } = l[o];
    t === "window"
      ? i.matchMedia(`(min-width: ${u}px)`).matches && (r = a)
      : u <= n.clientWidth && (r = a);
  }
  return r || "max";
}
var _y = { setBreakpoint: ky, getBreakpoint: Ny };
function Oy(e, t) {
  const n = [];
  return (
    e.forEach((r) => {
      typeof r == "object"
        ? Object.keys(r).forEach((i) => {
            r[i] && n.push(t + i);
          })
        : typeof r == "string" && n.push(t + r);
    }),
    n
  );
}
function Ly() {
  const e = this,
    { classNames: t, params: n, rtl: r, el: i, device: s } = e,
    l = Oy(
      [
        "initialized",
        n.direction,
        { "free-mode": e.params.freeMode && n.freeMode.enabled },
        { autoheight: n.autoHeight },
        { rtl: r },
        { grid: n.grid && n.grid.rows > 1 },
        {
          "grid-column": n.grid && n.grid.rows > 1 && n.grid.fill === "column",
        },
        { android: s.android },
        { ios: s.ios },
        { "css-mode": n.cssMode },
        { centered: n.cssMode && n.centeredSlides },
        { "watch-progress": n.watchSlidesProgress },
      ],
      n.containerModifierClass
    );
  t.push(...l), i.classList.add(...t), e.emitContainerClasses();
}
function My() {
  const e = this,
    { el: t, classNames: n } = e;
  t.classList.remove(...n), e.emitContainerClasses();
}
var Ry = { addClasses: Ly, removeClasses: My };
function jy() {
  const e = this,
    { isLocked: t, params: n } = e,
    { slidesOffsetBefore: r } = n;
  if (r) {
    const i = e.slides.length - 1,
      s = e.slidesGrid[i] + e.slidesSizesGrid[i] + r * 2;
    e.isLocked = e.size > s;
  } else e.isLocked = e.snapGrid.length === 1;
  n.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked),
    n.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked),
    t && t !== e.isLocked && (e.isEnd = !1),
    t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
}
var Iy = { checkOverflow: jy },
  go = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopedSlides: null,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
function zy(e, t) {
  return function (r) {
    r === void 0 && (r = {});
    const i = Object.keys(r)[0],
      s = r[i];
    if (typeof s != "object" || s === null) {
      Re(t, r);
      return;
    }
    if (
      (e[i] === !0 && (e[i] = { enabled: !0 }),
      i === "navigation" &&
        e[i] &&
        e[i].enabled &&
        !e[i].prevEl &&
        !e[i].nextEl &&
        (e[i].auto = !0),
      ["pagination", "scrollbar"].indexOf(i) >= 0 &&
        e[i] &&
        e[i].enabled &&
        !e[i].el &&
        (e[i].auto = !0),
      !(i in e && "enabled" in s))
    ) {
      Re(t, r);
      return;
    }
    typeof e[i] == "object" && !("enabled" in e[i]) && (e[i].enabled = !0),
      e[i] || (e[i] = { enabled: !1 }),
      Re(t, r);
  };
}
const fl = {
    eventsEmitter: Rv,
    update: bv,
    translate: Kv,
    transition: Zv,
    slide: oy,
    loop: dy,
    grabCursor: my,
    events: Py,
    breakpoints: _y,
    checkOverflow: Iy,
    classes: Ry,
  },
  pl = {};
let Ta = class ut {
  constructor() {
    let t, n;
    for (var r = arguments.length, i = new Array(r), s = 0; s < r; s++)
      i[s] = arguments[s];
    i.length === 1 &&
    i[0].constructor &&
    Object.prototype.toString.call(i[0]).slice(8, -1) === "Object"
      ? (n = i[0])
      : ([t, n] = i),
      n || (n = {}),
      (n = Re({}, n)),
      t && !n.el && (n.el = t);
    const l = ot();
    if (
      n.el &&
      typeof n.el == "string" &&
      l.querySelectorAll(n.el).length > 1
    ) {
      const c = [];
      return (
        l.querySelectorAll(n.el).forEach((d) => {
          const h = Re({}, n, { el: d });
          c.push(new ut(h));
        }),
        c
      );
    }
    const o = this;
    (o.__swiper__ = !0),
      (o.support = Kf()),
      (o.device = Nv({ userAgent: n.userAgent })),
      (o.browser = Ov()),
      (o.eventsListeners = {}),
      (o.eventsAnyListeners = []),
      (o.modules = [...o.__modules__]),
      n.modules && Array.isArray(n.modules) && o.modules.push(...n.modules);
    const a = {};
    o.modules.forEach((c) => {
      c({
        params: n,
        swiper: o,
        extendParams: zy(n, a),
        on: o.on.bind(o),
        once: o.once.bind(o),
        off: o.off.bind(o),
        emit: o.emit.bind(o),
      });
    });
    const u = Re({}, go, a);
    return (
      (o.params = Re({}, u, pl, n)),
      (o.originalParams = Re({}, o.params)),
      (o.passedParams = Re({}, n)),
      o.params &&
        o.params.on &&
        Object.keys(o.params.on).forEach((c) => {
          o.on(c, o.params.on[c]);
        }),
      o.params && o.params.onAny && o.onAny(o.params.onAny),
      Object.assign(o, {
        enabled: o.params.enabled,
        el: t,
        classNames: [],
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal() {
          return o.params.direction === "horizontal";
        },
        isVertical() {
          return o.params.direction === "vertical";
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        cssOverflowAdjustment() {
          return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
        },
        allowSlideNext: o.params.allowSlideNext,
        allowSlidePrev: o.params.allowSlidePrev,
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: o.params.focusableElements,
          lastClickTime: 0,
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          evCache: [],
        },
        allowClick: !0,
        allowTouchMove: o.params.allowTouchMove,
        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
        imagesToLoad: [],
        imagesLoaded: 0,
      }),
      o.emit("_swiper"),
      o.params.init && o.init(),
      o
    );
  }
  getSlideIndex(t) {
    const { slidesEl: n, params: r } = this,
      i = vt(n, `.${r.slideClass}, swiper-slide`),
      s = qu(i[0]);
    return qu(t) - s;
  }
  getSlideIndexByData(t) {
    return this.getSlideIndex(
      this.slides.filter(
        (n) => n.getAttribute("data-swiper-slide-index") * 1 === t
      )[0]
    );
  }
  recalcSlides() {
    const t = this,
      { slidesEl: n, params: r } = t;
    t.slides = vt(n, `.${r.slideClass}, swiper-slide`);
  }
  enable() {
    const t = this;
    t.enabled ||
      ((t.enabled = !0),
      t.params.grabCursor && t.setGrabCursor(),
      t.emit("enable"));
  }
  disable() {
    const t = this;
    t.enabled &&
      ((t.enabled = !1),
      t.params.grabCursor && t.unsetGrabCursor(),
      t.emit("disable"));
  }
  setProgress(t, n) {
    const r = this;
    t = Math.min(Math.max(t, 0), 1);
    const i = r.minTranslate(),
      l = (r.maxTranslate() - i) * t + i;
    r.translateTo(l, typeof n > "u" ? 0 : n),
      r.updateActiveIndex(),
      r.updateSlidesClasses();
  }
  emitContainerClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const n = t.el.className
      .split(" ")
      .filter(
        (r) =>
          r.indexOf("swiper") === 0 ||
          r.indexOf(t.params.containerModifierClass) === 0
      );
    t.emit("_containerClasses", n.join(" "));
  }
  getSlideClasses(t) {
    const n = this;
    return n.destroyed
      ? ""
      : t.className
          .split(" ")
          .filter(
            (r) =>
              r.indexOf("swiper-slide") === 0 ||
              r.indexOf(n.params.slideClass) === 0
          )
          .join(" ");
  }
  emitSlidesClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const n = [];
    t.slides.forEach((r) => {
      const i = t.getSlideClasses(r);
      n.push({ slideEl: r, classNames: i }), t.emit("_slideClass", r, i);
    }),
      t.emit("_slideClasses", n);
  }
  slidesPerViewDynamic(t, n) {
    t === void 0 && (t = "current"), n === void 0 && (n = !1);
    const r = this,
      {
        params: i,
        slides: s,
        slidesGrid: l,
        slidesSizesGrid: o,
        size: a,
        activeIndex: u,
      } = r;
    let c = 1;
    if (typeof i.slidesPerView == "number") return i.slidesPerView;
    if (i.centeredSlides) {
      let d = s[u] ? s[u].swiperSlideSize : 0,
        h;
      for (let g = u + 1; g < s.length; g += 1)
        s[g] &&
          !h &&
          ((d += s[g].swiperSlideSize), (c += 1), d > a && (h = !0));
      for (let g = u - 1; g >= 0; g -= 1)
        s[g] &&
          !h &&
          ((d += s[g].swiperSlideSize), (c += 1), d > a && (h = !0));
    } else if (t === "current")
      for (let d = u + 1; d < s.length; d += 1)
        (n ? l[d] + o[d] - l[u] < a : l[d] - l[u] < a) && (c += 1);
    else for (let d = u - 1; d >= 0; d -= 1) l[u] - l[d] < a && (c += 1);
    return c;
  }
  update() {
    const t = this;
    if (!t || t.destroyed) return;
    const { snapGrid: n, params: r } = t;
    r.breakpoints && t.setBreakpoint(),
      [...t.el.querySelectorAll('[loading="lazy"]')].forEach((l) => {
        l.complete && Ri(t, l);
      }),
      t.updateSize(),
      t.updateSlides(),
      t.updateProgress(),
      t.updateSlidesClasses();
    function i() {
      const l = t.rtlTranslate ? t.translate * -1 : t.translate,
        o = Math.min(Math.max(l, t.maxTranslate()), t.minTranslate());
      t.setTranslate(o), t.updateActiveIndex(), t.updateSlidesClasses();
    }
    let s;
    if (r.freeMode && r.freeMode.enabled && !r.cssMode)
      i(), r.autoHeight && t.updateAutoHeight();
    else {
      if (
        (r.slidesPerView === "auto" || r.slidesPerView > 1) &&
        t.isEnd &&
        !r.centeredSlides
      ) {
        const l = t.virtual && r.virtual.enabled ? t.virtual.slides : t.slides;
        s = t.slideTo(l.length - 1, 0, !1, !0);
      } else s = t.slideTo(t.activeIndex, 0, !1, !0);
      s || i();
    }
    r.watchOverflow && n !== t.snapGrid && t.checkOverflow(), t.emit("update");
  }
  changeDirection(t, n) {
    n === void 0 && (n = !0);
    const r = this,
      i = r.params.direction;
    return (
      t || (t = i === "horizontal" ? "vertical" : "horizontal"),
      t === i ||
        (t !== "horizontal" && t !== "vertical") ||
        (r.el.classList.remove(`${r.params.containerModifierClass}${i}`),
        r.el.classList.add(`${r.params.containerModifierClass}${t}`),
        r.emitContainerClasses(),
        (r.params.direction = t),
        r.slides.forEach((s) => {
          t === "vertical" ? (s.style.width = "") : (s.style.height = "");
        }),
        r.emit("changeDirection"),
        n && r.update()),
      r
    );
  }
  changeLanguageDirection(t) {
    const n = this;
    (n.rtl && t === "rtl") ||
      (!n.rtl && t === "ltr") ||
      ((n.rtl = t === "rtl"),
      (n.rtlTranslate = n.params.direction === "horizontal" && n.rtl),
      n.rtl
        ? (n.el.classList.add(`${n.params.containerModifierClass}rtl`),
          (n.el.dir = "rtl"))
        : (n.el.classList.remove(`${n.params.containerModifierClass}rtl`),
          (n.el.dir = "ltr")),
      n.update());
  }
  mount(t) {
    const n = this;
    if (n.mounted) return !0;
    let r = t || n.params.el;
    if ((typeof r == "string" && (r = document.querySelector(r)), !r))
      return !1;
    (r.swiper = n),
      r.parentNode &&
        r.parentNode.host &&
        r.parentNode.host.nodeName === "SWIPER-CONTAINER" &&
        (n.isElement = !0);
    const i = () =>
      `.${(n.params.wrapperClass || "").trim().split(" ").join(".")}`;
    let l = (() =>
      r && r.shadowRoot && r.shadowRoot.querySelector
        ? r.shadowRoot.querySelector(i())
        : vt(r, i())[0])();
    return (
      !l &&
        n.params.createElements &&
        ((l = wv("div", n.params.wrapperClass)),
        r.append(l),
        vt(r, `.${n.params.slideClass}`).forEach((o) => {
          l.append(o);
        })),
      Object.assign(n, {
        el: r,
        wrapperEl: l,
        slidesEl:
          n.isElement && !r.parentNode.host.slideSlots ? r.parentNode.host : l,
        hostEl: n.isElement ? r.parentNode.host : r,
        mounted: !0,
        rtl: r.dir.toLowerCase() === "rtl" || It(r, "direction") === "rtl",
        rtlTranslate:
          n.params.direction === "horizontal" &&
          (r.dir.toLowerCase() === "rtl" || It(r, "direction") === "rtl"),
        wrongRTL: It(l, "display") === "-webkit-box",
      }),
      !0
    );
  }
  init(t) {
    const n = this;
    if (n.initialized || n.mount(t) === !1) return n;
    n.emit("beforeInit"),
      n.params.breakpoints && n.setBreakpoint(),
      n.addClasses(),
      n.updateSize(),
      n.updateSlides(),
      n.params.watchOverflow && n.checkOverflow(),
      n.params.grabCursor && n.enabled && n.setGrabCursor(),
      n.params.loop && n.virtual && n.params.virtual.enabled
        ? n.slideTo(
            n.params.initialSlide + n.virtual.slidesBefore,
            0,
            n.params.runCallbacksOnInit,
            !1,
            !0
          )
        : n.slideTo(
            n.params.initialSlide,
            0,
            n.params.runCallbacksOnInit,
            !1,
            !0
          ),
      n.params.loop && n.loopCreate(),
      n.attachEvents();
    const i = [...n.el.querySelectorAll('[loading="lazy"]')];
    return (
      n.isElement && i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),
      i.forEach((s) => {
        s.complete
          ? Ri(n, s)
          : s.addEventListener("load", (l) => {
              Ri(n, l.target);
            });
      }),
      ho(n),
      (n.initialized = !0),
      ho(n),
      n.emit("init"),
      n.emit("afterInit"),
      n
    );
  }
  destroy(t, n) {
    t === void 0 && (t = !0), n === void 0 && (n = !0);
    const r = this,
      { params: i, el: s, wrapperEl: l, slides: o } = r;
    return (
      typeof r.params > "u" ||
        r.destroyed ||
        (r.emit("beforeDestroy"),
        (r.initialized = !1),
        r.detachEvents(),
        i.loop && r.loopDestroy(),
        n &&
          (r.removeClasses(),
          s.removeAttribute("style"),
          l.removeAttribute("style"),
          o &&
            o.length &&
            o.forEach((a) => {
              a.classList.remove(
                i.slideVisibleClass,
                i.slideActiveClass,
                i.slideNextClass,
                i.slidePrevClass
              ),
                a.removeAttribute("style"),
                a.removeAttribute("data-swiper-slide-index");
            })),
        r.emit("destroy"),
        Object.keys(r.eventsListeners).forEach((a) => {
          r.off(a);
        }),
        t !== !1 && ((r.el.swiper = null), hv(r)),
        (r.destroyed = !0)),
      null
    );
  }
  static extendDefaults(t) {
    Re(pl, t);
  }
  static get extendedDefaults() {
    return pl;
  }
  static get defaults() {
    return go;
  }
  static installModule(t) {
    ut.prototype.__modules__ || (ut.prototype.__modules__ = []);
    const n = ut.prototype.__modules__;
    typeof t == "function" && n.indexOf(t) < 0 && n.push(t);
  }
  static use(t) {
    return Array.isArray(t)
      ? (t.forEach((n) => ut.installModule(n)), ut)
      : (ut.installModule(t), ut);
  }
};
Object.keys(fl).forEach((e) => {
  Object.keys(fl[e]).forEach((t) => {
    Ta.prototype[t] = fl[e][t];
  });
});
Ta.use([Lv, Mv]);
const Jf = [
  "eventsPrefix",
  "injectStyles",
  "injectStylesUrls",
  "modules",
  "init",
  "_direction",
  "oneWayMovement",
  "touchEventsTarget",
  "initialSlide",
  "_speed",
  "cssMode",
  "updateOnWindowResize",
  "resizeObserver",
  "nested",
  "focusableElements",
  "_enabled",
  "_width",
  "_height",
  "preventInteractionOnTransition",
  "userAgent",
  "url",
  "_edgeSwipeDetection",
  "_edgeSwipeThreshold",
  "_freeMode",
  "_autoHeight",
  "setWrapperSize",
  "virtualTranslate",
  "_effect",
  "breakpoints",
  "breakpointsBase",
  "_spaceBetween",
  "_slidesPerView",
  "maxBackfaceHiddenSlides",
  "_grid",
  "_slidesPerGroup",
  "_slidesPerGroupSkip",
  "_slidesPerGroupAuto",
  "_centeredSlides",
  "_centeredSlidesBounds",
  "_slidesOffsetBefore",
  "_slidesOffsetAfter",
  "normalizeSlideIndex",
  "_centerInsufficientSlides",
  "_watchOverflow",
  "roundLengths",
  "touchRatio",
  "touchAngle",
  "simulateTouch",
  "_shortSwipes",
  "_longSwipes",
  "longSwipesRatio",
  "longSwipesMs",
  "_followFinger",
  "allowTouchMove",
  "_threshold",
  "touchMoveStopPropagation",
  "touchStartPreventDefault",
  "touchStartForcePreventDefault",
  "touchReleaseOnEdges",
  "uniqueNavElements",
  "_resistance",
  "_resistanceRatio",
  "_watchSlidesProgress",
  "_grabCursor",
  "preventClicks",
  "preventClicksPropagation",
  "_slideToClickedSlide",
  "_loop",
  "loopedSlides",
  "loopPreventsSliding",
  "_rewind",
  "_allowSlidePrev",
  "_allowSlideNext",
  "_swipeHandler",
  "_noSwiping",
  "noSwipingClass",
  "noSwipingSelector",
  "passiveListeners",
  "containerModifierClass",
  "slideClass",
  "slideActiveClass",
  "slideVisibleClass",
  "slideNextClass",
  "slidePrevClass",
  "wrapperClass",
  "lazyPreloaderClass",
  "lazyPreloadPrevNext",
  "runCallbacksOnInit",
  "observer",
  "observeParents",
  "observeSlideChildren",
  "a11y",
  "_autoplay",
  "_controller",
  "coverflowEffect",
  "cubeEffect",
  "fadeEffect",
  "flipEffect",
  "creativeEffect",
  "cardsEffect",
  "hashNavigation",
  "history",
  "keyboard",
  "mousewheel",
  "_navigation",
  "_pagination",
  "parallax",
  "_scrollbar",
  "_thumbs",
  "virtual",
  "zoom",
  "control",
];
function mn(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === "Object" &&
    !e.__swiper__
  );
}
function an(e, t) {
  const n = ["__proto__", "constructor", "prototype"];
  Object.keys(t)
    .filter((r) => n.indexOf(r) < 0)
    .forEach((r) => {
      typeof e[r] > "u"
        ? (e[r] = t[r])
        : mn(t[r]) && mn(e[r]) && Object.keys(t[r]).length > 0
        ? t[r].__swiper__
          ? (e[r] = t[r])
          : an(e[r], t[r])
        : (e[r] = t[r]);
    });
}
function Zf(e) {
  return (
    e === void 0 && (e = {}),
    e.navigation &&
      typeof e.navigation.nextEl > "u" &&
      typeof e.navigation.prevEl > "u"
  );
}
function ep(e) {
  return e === void 0 && (e = {}), e.pagination && typeof e.pagination.el > "u";
}
function tp(e) {
  return e === void 0 && (e = {}), e.scrollbar && typeof e.scrollbar.el > "u";
}
function np(e) {
  e === void 0 && (e = "");
  const t = e
      .split(" ")
      .map((r) => r.trim())
      .filter((r) => !!r),
    n = [];
  return (
    t.forEach((r) => {
      n.indexOf(r) < 0 && n.push(r);
    }),
    n.join(" ")
  );
}
function Ay(e) {
  return (
    e === void 0 && (e = ""),
    e
      ? e.includes("swiper-wrapper")
        ? e
        : `swiper-wrapper ${e}`
      : "swiper-wrapper"
  );
}
function Fy(e) {
  let {
    swiper: t,
    slides: n,
    passedParams: r,
    changedParams: i,
    nextEl: s,
    prevEl: l,
    scrollbarEl: o,
    paginationEl: a,
  } = e;
  const u = i.filter(
      (C) => C !== "children" && C !== "direction" && C !== "wrapperClass"
    ),
    {
      params: c,
      pagination: d,
      navigation: h,
      scrollbar: g,
      virtual: v,
      thumbs: y,
    } = t;
  let x, f, p, m, S, E, _, T;
  i.includes("thumbs") &&
    r.thumbs &&
    r.thumbs.swiper &&
    c.thumbs &&
    !c.thumbs.swiper &&
    (x = !0),
    i.includes("controller") &&
      r.controller &&
      r.controller.control &&
      c.controller &&
      !c.controller.control &&
      (f = !0),
    i.includes("pagination") &&
      r.pagination &&
      (r.pagination.el || a) &&
      (c.pagination || c.pagination === !1) &&
      d &&
      !d.el &&
      (p = !0),
    i.includes("scrollbar") &&
      r.scrollbar &&
      (r.scrollbar.el || o) &&
      (c.scrollbar || c.scrollbar === !1) &&
      g &&
      !g.el &&
      (m = !0),
    i.includes("navigation") &&
      r.navigation &&
      (r.navigation.prevEl || l) &&
      (r.navigation.nextEl || s) &&
      (c.navigation || c.navigation === !1) &&
      h &&
      !h.prevEl &&
      !h.nextEl &&
      (S = !0);
  const N = (C) => {
    t[C] &&
      (t[C].destroy(),
      C === "navigation"
        ? (t.isElement && (t[C].prevEl.remove(), t[C].nextEl.remove()),
          (c[C].prevEl = void 0),
          (c[C].nextEl = void 0),
          (t[C].prevEl = void 0),
          (t[C].nextEl = void 0))
        : (t.isElement && t[C].el.remove(),
          (c[C].el = void 0),
          (t[C].el = void 0)));
  };
  i.includes("loop") &&
    t.isElement &&
    (c.loop && !r.loop ? (E = !0) : !c.loop && r.loop ? (_ = !0) : (T = !0)),
    u.forEach((C) => {
      if (mn(c[C]) && mn(r[C]))
        an(c[C], r[C]),
          (C === "navigation" || C === "pagination" || C === "scrollbar") &&
            "enabled" in r[C] &&
            !r[C].enabled &&
            N(C);
      else {
        const A = r[C];
        (A === !0 || A === !1) &&
        (C === "navigation" || C === "pagination" || C === "scrollbar")
          ? A === !1 && N(C)
          : (c[C] = r[C]);
      }
    }),
    u.includes("controller") &&
      !f &&
      t.controller &&
      t.controller.control &&
      c.controller &&
      c.controller.control &&
      (t.controller.control = c.controller.control),
    i.includes("children") &&
      n &&
      v &&
      c.virtual.enabled &&
      ((v.slides = n), v.update(!0)),
    i.includes("children") && n && c.loop && (T = !0),
    x && y.init() && y.update(!0),
    f && (t.controller.control = c.controller.control),
    p &&
      (t.isElement &&
        (!a || typeof a == "string") &&
        ((a = document.createElement("div")),
        a.classList.add("swiper-pagination"),
        a.part.add("pagination"),
        t.el.appendChild(a)),
      a && (c.pagination.el = a),
      d.init(),
      d.render(),
      d.update()),
    m &&
      (t.isElement &&
        (!o || typeof o == "string") &&
        ((o = document.createElement("div")),
        o.classList.add("swiper-scrollbar"),
        o.part.add("scrollbar"),
        t.el.appendChild(o)),
      o && (c.scrollbar.el = o),
      g.init(),
      g.updateSize(),
      g.setTranslate()),
    S &&
      (t.isElement &&
        ((!s || typeof s == "string") &&
          ((s = document.createElement("div")),
          s.classList.add("swiper-button-next"),
          (s.innerHTML = t.hostEl.constructor.nextButtonSvg),
          s.part.add("button-next"),
          t.el.appendChild(s)),
        (!l || typeof l == "string") &&
          ((l = document.createElement("div")),
          l.classList.add("swiper-button-prev"),
          (l.innerHTML = t.hostEl.constructor.prevButtonSvg),
          l.part.add("button-prev"),
          t.el.appendChild(l))),
      s && (c.navigation.nextEl = s),
      l && (c.navigation.prevEl = l),
      h.init(),
      h.update()),
    i.includes("allowSlideNext") && (t.allowSlideNext = r.allowSlideNext),
    i.includes("allowSlidePrev") && (t.allowSlidePrev = r.allowSlidePrev),
    i.includes("direction") && t.changeDirection(r.direction, !1),
    (E || T) && t.loopDestroy(),
    (_ || T) && t.loopCreate(),
    t.update();
}
function Dy(e, t) {
  e === void 0 && (e = {}), t === void 0 && (t = !0);
  const n = { on: {} },
    r = {},
    i = {};
  an(n, go), (n._emitClasses = !0), (n.init = !1);
  const s = {},
    l = Jf.map((a) => a.replace(/_/, "")),
    o = Object.assign({}, e);
  return (
    Object.keys(o).forEach((a) => {
      typeof e[a] > "u" ||
        (l.indexOf(a) >= 0
          ? mn(e[a])
            ? ((n[a] = {}), (i[a] = {}), an(n[a], e[a]), an(i[a], e[a]))
            : ((n[a] = e[a]), (i[a] = e[a]))
          : a.search(/on[A-Z]/) === 0 && typeof e[a] == "function"
          ? t
            ? (r[`${a[2].toLowerCase()}${a.substr(3)}`] = e[a])
            : (n.on[`${a[2].toLowerCase()}${a.substr(3)}`] = e[a])
          : (s[a] = e[a]));
    }),
    ["navigation", "pagination", "scrollbar"].forEach((a) => {
      n[a] === !0 && (n[a] = {}), n[a] === !1 && delete n[a];
    }),
    { params: n, passedParams: i, rest: s, events: r }
  );
}
function By(e, t) {
  let {
    el: n,
    nextEl: r,
    prevEl: i,
    paginationEl: s,
    scrollbarEl: l,
    swiper: o,
  } = e;
  Zf(t) &&
    r &&
    i &&
    ((o.params.navigation.nextEl = r),
    (o.originalParams.navigation.nextEl = r),
    (o.params.navigation.prevEl = i),
    (o.originalParams.navigation.prevEl = i)),
    ep(t) &&
      s &&
      ((o.params.pagination.el = s), (o.originalParams.pagination.el = s)),
    tp(t) &&
      l &&
      ((o.params.scrollbar.el = l), (o.originalParams.scrollbar.el = l)),
    o.init(n);
}
function $y(e, t, n, r, i) {
  const s = [];
  if (!t) return s;
  const l = (a) => {
    s.indexOf(a) < 0 && s.push(a);
  };
  if (n && r) {
    const a = r.map(i),
      u = n.map(i);
    a.join("") !== u.join("") && l("children"),
      r.length !== n.length && l("children");
  }
  return (
    Jf.filter((a) => a[0] === "_")
      .map((a) => a.replace(/_/, ""))
      .forEach((a) => {
        if (a in e && a in t)
          if (mn(e[a]) && mn(t[a])) {
            const u = Object.keys(e[a]),
              c = Object.keys(t[a]);
            u.length !== c.length
              ? l(a)
              : (u.forEach((d) => {
                  e[a][d] !== t[a][d] && l(a);
                }),
                c.forEach((d) => {
                  e[a][d] !== t[a][d] && l(a);
                }));
          } else e[a] !== t[a] && l(a);
      }),
    s
  );
}
const Uy = (e) => {
  !e ||
    e.destroyed ||
    !e.params.virtual ||
    (e.params.virtual && !e.params.virtual.enabled) ||
    (e.updateSlides(),
    e.updateProgress(),
    e.updateSlidesClasses(),
    e.parallax &&
      e.params.parallax &&
      e.params.parallax.enabled &&
      e.parallax.setTranslate());
};
function us() {
  return (
    (us = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    us.apply(this, arguments)
  );
}
function rp(e) {
  return (
    e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
  );
}
function ip(e) {
  const t = [];
  return (
    ee.Children.toArray(e).forEach((n) => {
      rp(n)
        ? t.push(n)
        : n.props &&
          n.props.children &&
          ip(n.props.children).forEach((r) => t.push(r));
    }),
    t
  );
}
function Vy(e) {
  const t = [],
    n = {
      "container-start": [],
      "container-end": [],
      "wrapper-start": [],
      "wrapper-end": [],
    };
  return (
    ee.Children.toArray(e).forEach((r) => {
      if (rp(r)) t.push(r);
      else if (r.props && r.props.slot && n[r.props.slot])
        n[r.props.slot].push(r);
      else if (r.props && r.props.children) {
        const i = ip(r.props.children);
        i.length > 0 ? i.forEach((s) => t.push(s)) : n["container-end"].push(r);
      } else n["container-end"].push(r);
    }),
    { slides: t, slots: n }
  );
}
function by(e, t, n) {
  if (!n) return null;
  const r = (c) => {
      let d = c;
      return (
        c < 0 ? (d = t.length + c) : d >= t.length && (d = d - t.length), d
      );
    },
    i = e.isHorizontal()
      ? { [e.rtlTranslate ? "right" : "left"]: `${n.offset}px` }
      : { top: `${n.offset}px` },
    { from: s, to: l } = n,
    o = e.params.loop ? -t.length : 0,
    a = e.params.loop ? t.length * 2 : t.length,
    u = [];
  for (let c = o; c < a; c += 1) c >= s && c <= l && u.push(t[r(c)]);
  return u.map((c, d) =>
    ee.cloneElement(c, { swiper: e, style: i, key: `slide-${d}` })
  );
}
function Er(e, t) {
  return typeof window > "u" ? k.useEffect(e, t) : k.useLayoutEffect(e, t);
}
const nc = k.createContext(null),
  Hy = k.createContext(null),
  Ca = k.forwardRef(function (e, t) {
    let {
        className: n,
        tag: r = "div",
        wrapperTag: i = "div",
        children: s,
        onSwiper: l,
        ...o
      } = e === void 0 ? {} : e,
      a = !1;
    const [u, c] = k.useState("swiper"),
      [d, h] = k.useState(null),
      [g, v] = k.useState(!1),
      y = k.useRef(!1),
      x = k.useRef(null),
      f = k.useRef(null),
      p = k.useRef(null),
      m = k.useRef(null),
      S = k.useRef(null),
      E = k.useRef(null),
      _ = k.useRef(null),
      T = k.useRef(null),
      { params: N, passedParams: C, rest: A, events: L } = Dy(o),
      { slides: I, slots: z } = Vy(s),
      H = () => {
        v(!g);
      };
    Object.assign(N.on, {
      _containerClasses(R, F) {
        c(F);
      },
    });
    const ce = () => {
      Object.assign(N.on, L), (a = !0);
      const R = { ...N };
      if (
        (delete R.wrapperClass,
        (f.current = new Ta(R)),
        f.current.virtual && f.current.params.virtual.enabled)
      ) {
        f.current.virtual.slides = I;
        const F = {
          cache: !1,
          slides: I,
          renderExternal: h,
          renderExternalUpdate: !1,
        };
        an(f.current.params.virtual, F),
          an(f.current.originalParams.virtual, F);
      }
    };
    x.current || ce(), f.current && f.current.on("_beforeBreakpoint", H);
    const De = () => {
        a ||
          !L ||
          !f.current ||
          Object.keys(L).forEach((R) => {
            f.current.on(R, L[R]);
          });
      },
      D = () => {
        !L ||
          !f.current ||
          Object.keys(L).forEach((R) => {
            f.current.off(R, L[R]);
          });
      };
    k.useEffect(() => () => {
      f.current && f.current.off("_beforeBreakpoint", H);
    }),
      k.useEffect(() => {
        !y.current &&
          f.current &&
          (f.current.emitSlidesClasses(), (y.current = !0));
      }),
      Er(() => {
        if ((t && (t.current = x.current), !!x.current))
          return (
            f.current.destroyed && ce(),
            By(
              {
                el: x.current,
                nextEl: S.current,
                prevEl: E.current,
                paginationEl: _.current,
                scrollbarEl: T.current,
                swiper: f.current,
              },
              N
            ),
            l && l(f.current),
            () => {
              f.current && !f.current.destroyed && f.current.destroy(!0, !1);
            }
          );
      }, []),
      Er(() => {
        De();
        const R = $y(C, p.current, I, m.current, (F) => F.key);
        return (
          (p.current = C),
          (m.current = I),
          R.length &&
            f.current &&
            !f.current.destroyed &&
            Fy({
              swiper: f.current,
              slides: I,
              passedParams: C,
              changedParams: R,
              nextEl: S.current,
              prevEl: E.current,
              scrollbarEl: T.current,
              paginationEl: _.current,
            }),
          () => {
            D();
          }
        );
      }),
      Er(() => {
        Uy(f.current);
      }, [d]);
    function M() {
      return N.virtual
        ? by(f.current, I, d)
        : I.map((R, F) =>
            ee.cloneElement(R, { swiper: f.current, swiperSlideIndex: F })
          );
    }
    return ee.createElement(
      r,
      us({ ref: x, className: np(`${u}${n ? ` ${n}` : ""}`) }, A),
      ee.createElement(
        Hy.Provider,
        { value: f.current },
        z["container-start"],
        ee.createElement(
          i,
          { className: Ay(N.wrapperClass) },
          z["wrapper-start"],
          M(),
          z["wrapper-end"]
        ),
        Zf(N) &&
          ee.createElement(
            ee.Fragment,
            null,
            ee.createElement("div", {
              ref: E,
              className: "swiper-button-prev",
            }),
            ee.createElement("div", { ref: S, className: "swiper-button-next" })
          ),
        tp(N) &&
          ee.createElement("div", { ref: T, className: "swiper-scrollbar" }),
        ep(N) &&
          ee.createElement("div", { ref: _, className: "swiper-pagination" }),
        z["container-end"]
      )
    );
  });
Ca.displayName = "Swiper";
const Pa = k.forwardRef(function (e, t) {
  let {
    tag: n = "div",
    children: r,
    className: i = "",
    swiper: s,
    zoom: l,
    lazy: o,
    virtualIndex: a,
    swiperSlideIndex: u,
    ...c
  } = e === void 0 ? {} : e;
  const d = k.useRef(null),
    [h, g] = k.useState("swiper-slide"),
    [v, y] = k.useState(!1);
  function x(S, E, _) {
    E === d.current && g(_);
  }
  Er(() => {
    if (
      (typeof u < "u" && (d.current.swiperSlideIndex = u),
      t && (t.current = d.current),
      !(!d.current || !s))
    ) {
      if (s.destroyed) {
        h !== "swiper-slide" && g("swiper-slide");
        return;
      }
      return (
        s.on("_slideClass", x),
        () => {
          s && s.off("_slideClass", x);
        }
      );
    }
  }),
    Er(() => {
      s && d.current && !s.destroyed && g(s.getSlideClasses(d.current));
    }, [s]);
  const f = {
      isActive: h.indexOf("swiper-slide-active") >= 0,
      isVisible: h.indexOf("swiper-slide-visible") >= 0,
      isPrev: h.indexOf("swiper-slide-prev") >= 0,
      isNext: h.indexOf("swiper-slide-next") >= 0,
    },
    p = () => (typeof r == "function" ? r(f) : r),
    m = () => {
      y(!0);
    };
  return ee.createElement(
    n,
    us(
      {
        ref: d,
        className: np(`${h}${i ? ` ${i}` : ""}`),
        "data-swiper-slide-index": a,
        onLoad: m,
      },
      c
    ),
    l &&
      ee.createElement(
        nc.Provider,
        { value: f },
        ee.createElement(
          "div",
          {
            className: "swiper-zoom-container",
            "data-swiper-zoom": typeof l == "number" ? l : void 0,
          },
          p(),
          o &&
            !v &&
            ee.createElement("div", { className: "swiper-lazy-preloader" })
        )
      ),
    !l &&
      ee.createElement(
        nc.Provider,
        { value: f },
        p(),
        o &&
          !v &&
          ee.createElement("div", { className: "swiper-lazy-preloader" })
      )
  );
});
Pa.displayName = "SwiperSlide";
function sp(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: Wy } = Object.prototype,
  { getPrototypeOf: ka } = Object,
  Os = ((e) => (t) => {
    const n = Wy.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  at = (e) => ((e = e.toLowerCase()), (t) => Os(t) === e),
  Ls = (e) => (t) => typeof t === e,
  { isArray: Jn } = Array,
  br = Ls("undefined");
function Gy(e) {
  return (
    e !== null &&
    !br(e) &&
    e.constructor !== null &&
    !br(e.constructor) &&
    He(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const lp = at("ArrayBuffer");
function Xy(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && lp(e.buffer)),
    t
  );
}
const Yy = Ls("string"),
  He = Ls("function"),
  op = Ls("number"),
  Ms = (e) => e !== null && typeof e == "object",
  Ky = (e) => e === !0 || e === !1,
  ji = (e) => {
    if (Os(e) !== "object") return !1;
    const t = ka(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  Qy = at("Date"),
  qy = at("File"),
  Jy = at("Blob"),
  Zy = at("FileList"),
  e0 = (e) => Ms(e) && He(e.pipe),
  t0 = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (He(e.append) &&
          ((t = Os(e)) === "formdata" ||
            (t === "object" &&
              He(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  n0 = at("URLSearchParams"),
  r0 = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Jr(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, i;
  if ((typeof e != "object" && (e = [e]), Jn(e)))
    for (r = 0, i = e.length; r < i; r++) t.call(null, e[r], r, e);
  else {
    const s = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      l = s.length;
    let o;
    for (r = 0; r < l; r++) (o = s[r]), t.call(null, e[o], o, e);
  }
}
function ap(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    i;
  for (; r-- > 0; ) if (((i = n[r]), t === i.toLowerCase())) return i;
  return null;
}
const up = (() =>
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global)(),
  cp = (e) => !br(e) && e !== up;
function vo() {
  const { caseless: e } = (cp(this) && this) || {},
    t = {},
    n = (r, i) => {
      const s = (e && ap(t, i)) || i;
      ji(t[s]) && ji(r)
        ? (t[s] = vo(t[s], r))
        : ji(r)
        ? (t[s] = vo({}, r))
        : Jn(r)
        ? (t[s] = r.slice())
        : (t[s] = r);
    };
  for (let r = 0, i = arguments.length; r < i; r++)
    arguments[r] && Jr(arguments[r], n);
  return t;
}
const i0 = (e, t, n, { allOwnKeys: r } = {}) => (
    Jr(
      t,
      (i, s) => {
        n && He(i) ? (e[s] = sp(i, n)) : (e[s] = i);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  s0 = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  l0 = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  o0 = (e, t, n, r) => {
    let i, s, l;
    const o = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (i = Object.getOwnPropertyNames(e), s = i.length; s-- > 0; )
        (l = i[s]), (!r || r(l, e, t)) && !o[l] && ((t[l] = e[l]), (o[l] = !0));
      e = n !== !1 && ka(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  a0 = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  u0 = (e) => {
    if (!e) return null;
    if (Jn(e)) return e;
    let t = e.length;
    if (!op(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  c0 = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && ka(Uint8Array)),
  d0 = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let i;
    for (; (i = r.next()) && !i.done; ) {
      const s = i.value;
      t.call(e, s[0], s[1]);
    }
  },
  f0 = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  p0 = at("HTMLFormElement"),
  m0 = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, i) {
      return r.toUpperCase() + i;
    }),
  rc = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  h0 = at("RegExp"),
  dp = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    Jr(n, (i, s) => {
      let l;
      (l = t(i, s, e)) !== !1 && (r[s] = l || i);
    }),
      Object.defineProperties(e, r);
  },
  g0 = (e) => {
    dp(e, (t, n) => {
      if (He(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (He(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  v0 = (e, t) => {
    const n = {},
      r = (i) => {
        i.forEach((s) => {
          n[s] = !0;
        });
      };
    return Jn(e) ? r(e) : r(String(e).split(t)), n;
  },
  y0 = () => {},
  w0 = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  ml = "abcdefghijklmnopqrstuvwxyz",
  ic = "0123456789",
  fp = { DIGIT: ic, ALPHA: ml, ALPHA_DIGIT: ml + ml.toUpperCase() + ic },
  S0 = (e = 16, t = fp.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function x0(e) {
  return !!(
    e &&
    He(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const E0 = (e) => {
    const t = new Array(10),
      n = (r, i) => {
        if (Ms(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[i] = r;
            const s = Jn(r) ? [] : {};
            return (
              Jr(r, (l, o) => {
                const a = n(l, i + 1);
                !br(a) && (s[o] = a);
              }),
              (t[i] = void 0),
              s
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  T0 = at("AsyncFunction"),
  C0 = (e) => e && (Ms(e) || He(e)) && He(e.then) && He(e.catch),
  P = {
    isArray: Jn,
    isArrayBuffer: lp,
    isBuffer: Gy,
    isFormData: t0,
    isArrayBufferView: Xy,
    isString: Yy,
    isNumber: op,
    isBoolean: Ky,
    isObject: Ms,
    isPlainObject: ji,
    isUndefined: br,
    isDate: Qy,
    isFile: qy,
    isBlob: Jy,
    isRegExp: h0,
    isFunction: He,
    isStream: e0,
    isURLSearchParams: n0,
    isTypedArray: c0,
    isFileList: Zy,
    forEach: Jr,
    merge: vo,
    extend: i0,
    trim: r0,
    stripBOM: s0,
    inherits: l0,
    toFlatObject: o0,
    kindOf: Os,
    kindOfTest: at,
    endsWith: a0,
    toArray: u0,
    forEachEntry: d0,
    matchAll: f0,
    isHTMLForm: p0,
    hasOwnProperty: rc,
    hasOwnProp: rc,
    reduceDescriptors: dp,
    freezeMethods: g0,
    toObjectSet: v0,
    toCamelCase: m0,
    noop: y0,
    toFiniteNumber: w0,
    findKey: ap,
    global: up,
    isContextDefined: cp,
    ALPHABET: fp,
    generateString: S0,
    isSpecCompliantForm: x0,
    toJSONObject: E0,
    isAsyncFn: T0,
    isThenable: C0,
  };
function $(e, t, n, r, i) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    i && (this.response = i);
}
P.inherits($, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: P.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const pp = $.prototype,
  mp = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  mp[e] = { value: e };
});
Object.defineProperties($, mp);
Object.defineProperty(pp, "isAxiosError", { value: !0 });
$.from = (e, t, n, r, i, s) => {
  const l = Object.create(pp);
  return (
    P.toFlatObject(
      e,
      l,
      function (a) {
        return a !== Error.prototype;
      },
      (o) => o !== "isAxiosError"
    ),
    $.call(l, e.message, t, n, r, i),
    (l.cause = e),
    (l.name = e.name),
    s && Object.assign(l, s),
    l
  );
};
const P0 = null;
function yo(e) {
  return P.isPlainObject(e) || P.isArray(e);
}
function hp(e) {
  return P.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function sc(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (i, s) {
          return (i = hp(i)), !n && s ? "[" + i + "]" : i;
        })
        .join(n ? "." : "")
    : t;
}
function k0(e) {
  return P.isArray(e) && !e.some(yo);
}
const N0 = P.toFlatObject(P, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function Rs(e, t, n) {
  if (!P.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = P.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (y, x) {
        return !P.isUndefined(x[y]);
      }
    ));
  const r = n.metaTokens,
    i = n.visitor || c,
    s = n.dots,
    l = n.indexes,
    a = (n.Blob || (typeof Blob < "u" && Blob)) && P.isSpecCompliantForm(t);
  if (!P.isFunction(i)) throw new TypeError("visitor must be a function");
  function u(v) {
    if (v === null) return "";
    if (P.isDate(v)) return v.toISOString();
    if (!a && P.isBlob(v))
      throw new $("Blob is not supported. Use a Buffer instead.");
    return P.isArrayBuffer(v) || P.isTypedArray(v)
      ? a && typeof Blob == "function"
        ? new Blob([v])
        : Buffer.from(v)
      : v;
  }
  function c(v, y, x) {
    let f = v;
    if (v && !x && typeof v == "object") {
      if (P.endsWith(y, "{}"))
        (y = r ? y : y.slice(0, -2)), (v = JSON.stringify(v));
      else if (
        (P.isArray(v) && k0(v)) ||
        ((P.isFileList(v) || P.endsWith(y, "[]")) && (f = P.toArray(v)))
      )
        return (
          (y = hp(y)),
          f.forEach(function (m, S) {
            !(P.isUndefined(m) || m === null) &&
              t.append(
                l === !0 ? sc([y], S, s) : l === null ? y : y + "[]",
                u(m)
              );
          }),
          !1
        );
    }
    return yo(v) ? !0 : (t.append(sc(x, y, s), u(v)), !1);
  }
  const d = [],
    h = Object.assign(N0, {
      defaultVisitor: c,
      convertValue: u,
      isVisitable: yo,
    });
  function g(v, y) {
    if (!P.isUndefined(v)) {
      if (d.indexOf(v) !== -1)
        throw Error("Circular reference detected in " + y.join("."));
      d.push(v),
        P.forEach(v, function (f, p) {
          (!(P.isUndefined(f) || f === null) &&
            i.call(t, f, P.isString(p) ? p.trim() : p, y, h)) === !0 &&
            g(f, y ? y.concat(p) : [p]);
        }),
        d.pop();
    }
  }
  if (!P.isObject(e)) throw new TypeError("data must be an object");
  return g(e), t;
}
function lc(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function Na(e, t) {
  (this._pairs = []), e && Rs(e, this, t);
}
const gp = Na.prototype;
gp.append = function (t, n) {
  this._pairs.push([t, n]);
};
gp.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, lc);
      }
    : lc;
  return this._pairs
    .map(function (i) {
      return n(i[0]) + "=" + n(i[1]);
    }, "")
    .join("&");
};
function _0(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function vp(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || _0,
    i = n && n.serialize;
  let s;
  if (
    (i
      ? (s = i(t, n))
      : (s = P.isURLSearchParams(t) ? t.toString() : new Na(t, n).toString(r)),
    s)
  ) {
    const l = e.indexOf("#");
    l !== -1 && (e = e.slice(0, l)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + s);
  }
  return e;
}
class O0 {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    P.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const oc = O0,
  yp = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  L0 = typeof URLSearchParams < "u" ? URLSearchParams : Na,
  M0 = typeof FormData < "u" ? FormData : null,
  R0 = typeof Blob < "u" ? Blob : null,
  j0 = (() => {
    let e;
    return typeof navigator < "u" &&
      ((e = navigator.product) === "ReactNative" ||
        e === "NativeScript" ||
        e === "NS")
      ? !1
      : typeof window < "u" && typeof document < "u";
  })(),
  I0 = (() =>
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function")(),
  it = {
    isBrowser: !0,
    classes: { URLSearchParams: L0, FormData: M0, Blob: R0 },
    isStandardBrowserEnv: j0,
    isStandardBrowserWebWorkerEnv: I0,
    protocols: ["http", "https", "file", "blob", "url", "data"],
  };
function z0(e, t) {
  return Rs(
    e,
    new it.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, i, s) {
          return it.isNode && P.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : s.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function A0(e) {
  return P.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === "[]" ? "" : t[1] || t[0]
  );
}
function F0(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const i = n.length;
  let s;
  for (r = 0; r < i; r++) (s = n[r]), (t[s] = e[s]);
  return t;
}
function wp(e) {
  function t(n, r, i, s) {
    let l = n[s++];
    const o = Number.isFinite(+l),
      a = s >= n.length;
    return (
      (l = !l && P.isArray(i) ? i.length : l),
      a
        ? (P.hasOwnProp(i, l) ? (i[l] = [i[l], r]) : (i[l] = r), !o)
        : ((!i[l] || !P.isObject(i[l])) && (i[l] = []),
          t(n, r, i[l], s) && P.isArray(i[l]) && (i[l] = F0(i[l])),
          !o)
    );
  }
  if (P.isFormData(e) && P.isFunction(e.entries)) {
    const n = {};
    return (
      P.forEachEntry(e, (r, i) => {
        t(A0(r), i, n, 0);
      }),
      n
    );
  }
  return null;
}
function D0(e, t, n) {
  if (P.isString(e))
    try {
      return (t || JSON.parse)(e), P.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(e);
}
const _a = {
  transitional: yp,
  adapter: ["xhr", "http"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        i = r.indexOf("application/json") > -1,
        s = P.isObject(t);
      if ((s && P.isHTMLForm(t) && (t = new FormData(t)), P.isFormData(t)))
        return i && i ? JSON.stringify(wp(t)) : t;
      if (
        P.isArrayBuffer(t) ||
        P.isBuffer(t) ||
        P.isStream(t) ||
        P.isFile(t) ||
        P.isBlob(t)
      )
        return t;
      if (P.isArrayBufferView(t)) return t.buffer;
      if (P.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          t.toString()
        );
      let o;
      if (s) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return z0(t, this.formSerializer).toString();
        if ((o = P.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const a = this.env && this.env.FormData;
          return Rs(
            o ? { "files[]": t } : t,
            a && new a(),
            this.formSerializer
          );
        }
      }
      return s || i ? (n.setContentType("application/json", !1), D0(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || _a.transitional,
        r = n && n.forcedJSONParsing,
        i = this.responseType === "json";
      if (t && P.isString(t) && ((r && !this.responseType) || i)) {
        const l = !(n && n.silentJSONParsing) && i;
        try {
          return JSON.parse(t);
        } catch (o) {
          if (l)
            throw o.name === "SyntaxError"
              ? $.from(o, $.ERR_BAD_RESPONSE, this, null, this.response)
              : o;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: it.classes.FormData, Blob: it.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
P.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  _a.headers[e] = {};
});
const Oa = _a,
  B0 = P.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  $0 = (e) => {
    const t = {};
    let n, r, i;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (l) {
            (i = l.indexOf(":")),
              (n = l.substring(0, i).trim().toLowerCase()),
              (r = l.substring(i + 1).trim()),
              !(!n || (t[n] && B0[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  ac = Symbol("internals");
function or(e) {
  return e && String(e).trim().toLowerCase();
}
function Ii(e) {
  return e === !1 || e == null ? e : P.isArray(e) ? e.map(Ii) : String(e);
}
function U0(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const V0 = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function hl(e, t, n, r, i) {
  if (P.isFunction(r)) return r.call(this, t, n);
  if ((i && (t = n), !!P.isString(t))) {
    if (P.isString(r)) return t.indexOf(r) !== -1;
    if (P.isRegExp(r)) return r.test(t);
  }
}
function b0(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function H0(e, t) {
  const n = P.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (i, s, l) {
        return this[r].call(this, t, i, s, l);
      },
      configurable: !0,
    });
  });
}
class js {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const i = this;
    function s(o, a, u) {
      const c = or(a);
      if (!c) throw new Error("header name must be a non-empty string");
      const d = P.findKey(i, c);
      (!d || i[d] === void 0 || u === !0 || (u === void 0 && i[d] !== !1)) &&
        (i[d || a] = Ii(o));
    }
    const l = (o, a) => P.forEach(o, (u, c) => s(u, c, a));
    return (
      P.isPlainObject(t) || t instanceof this.constructor
        ? l(t, n)
        : P.isString(t) && (t = t.trim()) && !V0(t)
        ? l($0(t), n)
        : t != null && s(n, t, r),
      this
    );
  }
  get(t, n) {
    if (((t = or(t)), t)) {
      const r = P.findKey(this, t);
      if (r) {
        const i = this[r];
        if (!n) return i;
        if (n === !0) return U0(i);
        if (P.isFunction(n)) return n.call(this, i, r);
        if (P.isRegExp(n)) return n.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = or(t)), t)) {
      const r = P.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || hl(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let i = !1;
    function s(l) {
      if (((l = or(l)), l)) {
        const o = P.findKey(r, l);
        o && (!n || hl(r, r[o], o, n)) && (delete r[o], (i = !0));
      }
    }
    return P.isArray(t) ? t.forEach(s) : s(t), i;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      i = !1;
    for (; r--; ) {
      const s = n[r];
      (!t || hl(this, this[s], s, t, !0)) && (delete this[s], (i = !0));
    }
    return i;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      P.forEach(this, (i, s) => {
        const l = P.findKey(r, s);
        if (l) {
          (n[l] = Ii(i)), delete n[s];
          return;
        }
        const o = t ? b0(s) : String(s).trim();
        o !== s && delete n[s], (n[o] = Ii(i)), (r[o] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      P.forEach(this, (r, i) => {
        r != null && r !== !1 && (n[i] = t && P.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((i) => r.set(i)), r;
  }
  static accessor(t) {
    const r = (this[ac] = this[ac] = { accessors: {} }).accessors,
      i = this.prototype;
    function s(l) {
      const o = or(l);
      r[o] || (H0(i, l), (r[o] = !0));
    }
    return P.isArray(t) ? t.forEach(s) : s(t), this;
  }
}
js.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
P.reduceDescriptors(js.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
P.freezeMethods(js);
const wt = js;
function gl(e, t) {
  const n = this || Oa,
    r = t || n,
    i = wt.from(r.headers);
  let s = r.data;
  return (
    P.forEach(e, function (o) {
      s = o.call(n, s, i.normalize(), t ? t.status : void 0);
    }),
    i.normalize(),
    s
  );
}
function Sp(e) {
  return !!(e && e.__CANCEL__);
}
function Zr(e, t, n) {
  $.call(this, e ?? "canceled", $.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
P.inherits(Zr, $, { __CANCEL__: !0 });
function W0(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new $(
          "Request failed with status code " + n.status,
          [$.ERR_BAD_REQUEST, $.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
const G0 = it.isStandardBrowserEnv
  ? (function () {
      return {
        write: function (n, r, i, s, l, o) {
          const a = [];
          a.push(n + "=" + encodeURIComponent(r)),
            P.isNumber(i) && a.push("expires=" + new Date(i).toGMTString()),
            P.isString(s) && a.push("path=" + s),
            P.isString(l) && a.push("domain=" + l),
            o === !0 && a.push("secure"),
            (document.cookie = a.join("; "));
        },
        read: function (n) {
          const r = document.cookie.match(
            new RegExp("(^|;\\s*)(" + n + ")=([^;]*)")
          );
          return r ? decodeURIComponent(r[3]) : null;
        },
        remove: function (n) {
          this.write(n, "", Date.now() - 864e5);
        },
      };
    })()
  : (function () {
      return {
        write: function () {},
        read: function () {
          return null;
        },
        remove: function () {},
      };
    })();
function X0(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Y0(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function xp(e, t) {
  return e && !X0(t) ? Y0(e, t) : t;
}
const K0 = it.isStandardBrowserEnv
  ? (function () {
      const t = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement("a");
      let r;
      function i(s) {
        let l = s;
        return (
          t && (n.setAttribute("href", l), (l = n.href)),
          n.setAttribute("href", l),
          {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, "") : "",
            hash: n.hash ? n.hash.replace(/^#/, "") : "",
            hostname: n.hostname,
            port: n.port,
            pathname:
              n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
          }
        );
      }
      return (
        (r = i(window.location.href)),
        function (l) {
          const o = P.isString(l) ? i(l) : l;
          return o.protocol === r.protocol && o.host === r.host;
        }
      );
    })()
  : (function () {
      return function () {
        return !0;
      };
    })();
function Q0(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function q0(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let i = 0,
    s = 0,
    l;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (a) {
      const u = Date.now(),
        c = r[s];
      l || (l = u), (n[i] = a), (r[i] = u);
      let d = s,
        h = 0;
      for (; d !== i; ) (h += n[d++]), (d = d % e);
      if (((i = (i + 1) % e), i === s && (s = (s + 1) % e), u - l < t)) return;
      const g = c && u - c;
      return g ? Math.round((h * 1e3) / g) : void 0;
    }
  );
}
function uc(e, t) {
  let n = 0;
  const r = q0(50, 250);
  return (i) => {
    const s = i.loaded,
      l = i.lengthComputable ? i.total : void 0,
      o = s - n,
      a = r(o),
      u = s <= l;
    n = s;
    const c = {
      loaded: s,
      total: l,
      progress: l ? s / l : void 0,
      bytes: o,
      rate: a || void 0,
      estimated: a && l && u ? (l - s) / a : void 0,
      event: i,
    };
    (c[t ? "download" : "upload"] = !0), e(c);
  };
}
const J0 = typeof XMLHttpRequest < "u",
  Z0 =
    J0 &&
    function (e) {
      return new Promise(function (n, r) {
        let i = e.data;
        const s = wt.from(e.headers).normalize(),
          l = e.responseType;
        let o;
        function a() {
          e.cancelToken && e.cancelToken.unsubscribe(o),
            e.signal && e.signal.removeEventListener("abort", o);
        }
        let u;
        P.isFormData(i) &&
          (it.isStandardBrowserEnv || it.isStandardBrowserWebWorkerEnv
            ? s.setContentType(!1)
            : s.getContentType(/^\s*multipart\/form-data/)
            ? P.isString((u = s.getContentType())) &&
              s.setContentType(u.replace(/^\s*(multipart\/form-data);+/, "$1"))
            : s.setContentType("multipart/form-data"));
        let c = new XMLHttpRequest();
        if (e.auth) {
          const v = e.auth.username || "",
            y = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : "";
          s.set("Authorization", "Basic " + btoa(v + ":" + y));
        }
        const d = xp(e.baseURL, e.url);
        c.open(e.method.toUpperCase(), vp(d, e.params, e.paramsSerializer), !0),
          (c.timeout = e.timeout);
        function h() {
          if (!c) return;
          const v = wt.from(
              "getAllResponseHeaders" in c && c.getAllResponseHeaders()
            ),
            x = {
              data:
                !l || l === "text" || l === "json"
                  ? c.responseText
                  : c.response,
              status: c.status,
              statusText: c.statusText,
              headers: v,
              config: e,
              request: c,
            };
          W0(
            function (p) {
              n(p), a();
            },
            function (p) {
              r(p), a();
            },
            x
          ),
            (c = null);
        }
        if (
          ("onloadend" in c
            ? (c.onloadend = h)
            : (c.onreadystatechange = function () {
                !c ||
                  c.readyState !== 4 ||
                  (c.status === 0 &&
                    !(c.responseURL && c.responseURL.indexOf("file:") === 0)) ||
                  setTimeout(h);
              }),
          (c.onabort = function () {
            c &&
              (r(new $("Request aborted", $.ECONNABORTED, e, c)), (c = null));
          }),
          (c.onerror = function () {
            r(new $("Network Error", $.ERR_NETWORK, e, c)), (c = null);
          }),
          (c.ontimeout = function () {
            let y = e.timeout
              ? "timeout of " + e.timeout + "ms exceeded"
              : "timeout exceeded";
            const x = e.transitional || yp;
            e.timeoutErrorMessage && (y = e.timeoutErrorMessage),
              r(
                new $(
                  y,
                  x.clarifyTimeoutError ? $.ETIMEDOUT : $.ECONNABORTED,
                  e,
                  c
                )
              ),
              (c = null);
          }),
          it.isStandardBrowserEnv)
        ) {
          const v =
            (e.withCredentials || K0(d)) &&
            e.xsrfCookieName &&
            G0.read(e.xsrfCookieName);
          v && s.set(e.xsrfHeaderName, v);
        }
        i === void 0 && s.setContentType(null),
          "setRequestHeader" in c &&
            P.forEach(s.toJSON(), function (y, x) {
              c.setRequestHeader(x, y);
            }),
          P.isUndefined(e.withCredentials) ||
            (c.withCredentials = !!e.withCredentials),
          l && l !== "json" && (c.responseType = e.responseType),
          typeof e.onDownloadProgress == "function" &&
            c.addEventListener("progress", uc(e.onDownloadProgress, !0)),
          typeof e.onUploadProgress == "function" &&
            c.upload &&
            c.upload.addEventListener("progress", uc(e.onUploadProgress)),
          (e.cancelToken || e.signal) &&
            ((o = (v) => {
              c &&
                (r(!v || v.type ? new Zr(null, e, c) : v),
                c.abort(),
                (c = null));
            }),
            e.cancelToken && e.cancelToken.subscribe(o),
            e.signal &&
              (e.signal.aborted ? o() : e.signal.addEventListener("abort", o)));
        const g = Q0(d);
        if (g && it.protocols.indexOf(g) === -1) {
          r(new $("Unsupported protocol " + g + ":", $.ERR_BAD_REQUEST, e));
          return;
        }
        c.send(i || null);
      });
    },
  wo = { http: P0, xhr: Z0 };
P.forEach(wo, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const cc = (e) => `- ${e}`,
  ew = (e) => P.isFunction(e) || e === null || e === !1,
  Ep = {
    getAdapter: (e) => {
      e = P.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const i = {};
      for (let s = 0; s < t; s++) {
        n = e[s];
        let l;
        if (
          ((r = n),
          !ew(n) && ((r = wo[(l = String(n)).toLowerCase()]), r === void 0))
        )
          throw new $(`Unknown adapter '${l}'`);
        if (r) break;
        i[l || "#" + s] = r;
      }
      if (!r) {
        const s = Object.entries(i).map(
          ([o, a]) =>
            `adapter ${o} ` +
            (a === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let l = t
          ? s.length > 1
            ? `since :
` +
              s.map(cc).join(`
`)
            : " " + cc(s[0])
          : "as no adapter specified";
        throw new $(
          "There is no suitable adapter to dispatch the request " + l,
          "ERR_NOT_SUPPORT"
        );
      }
      return r;
    },
    adapters: wo,
  };
function vl(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new Zr(null, e);
}
function dc(e) {
  return (
    vl(e),
    (e.headers = wt.from(e.headers)),
    (e.data = gl.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    Ep.getAdapter(e.adapter || Oa.adapter)(e).then(
      function (r) {
        return (
          vl(e),
          (r.data = gl.call(e, e.transformResponse, r)),
          (r.headers = wt.from(r.headers)),
          r
        );
      },
      function (r) {
        return (
          Sp(r) ||
            (vl(e),
            r &&
              r.response &&
              ((r.response.data = gl.call(e, e.transformResponse, r.response)),
              (r.response.headers = wt.from(r.response.headers)))),
          Promise.reject(r)
        );
      }
    )
  );
}
const fc = (e) => (e instanceof wt ? e.toJSON() : e);
function Hn(e, t) {
  t = t || {};
  const n = {};
  function r(u, c, d) {
    return P.isPlainObject(u) && P.isPlainObject(c)
      ? P.merge.call({ caseless: d }, u, c)
      : P.isPlainObject(c)
      ? P.merge({}, c)
      : P.isArray(c)
      ? c.slice()
      : c;
  }
  function i(u, c, d) {
    if (P.isUndefined(c)) {
      if (!P.isUndefined(u)) return r(void 0, u, d);
    } else return r(u, c, d);
  }
  function s(u, c) {
    if (!P.isUndefined(c)) return r(void 0, c);
  }
  function l(u, c) {
    if (P.isUndefined(c)) {
      if (!P.isUndefined(u)) return r(void 0, u);
    } else return r(void 0, c);
  }
  function o(u, c, d) {
    if (d in t) return r(u, c);
    if (d in e) return r(void 0, u);
  }
  const a = {
    url: s,
    method: s,
    data: s,
    baseURL: l,
    transformRequest: l,
    transformResponse: l,
    paramsSerializer: l,
    timeout: l,
    timeoutMessage: l,
    withCredentials: l,
    adapter: l,
    responseType: l,
    xsrfCookieName: l,
    xsrfHeaderName: l,
    onUploadProgress: l,
    onDownloadProgress: l,
    decompress: l,
    maxContentLength: l,
    maxBodyLength: l,
    beforeRedirect: l,
    transport: l,
    httpAgent: l,
    httpsAgent: l,
    cancelToken: l,
    socketPath: l,
    responseEncoding: l,
    validateStatus: o,
    headers: (u, c) => i(fc(u), fc(c), !0),
  };
  return (
    P.forEach(Object.keys(Object.assign({}, e, t)), function (c) {
      const d = a[c] || i,
        h = d(e[c], t[c], c);
      (P.isUndefined(h) && d !== o) || (n[c] = h);
    }),
    n
  );
}
const Tp = "1.5.1",
  La = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    La[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const pc = {};
La.transitional = function (t, n, r) {
  function i(s, l) {
    return (
      "[Axios v" +
      Tp +
      "] Transitional option '" +
      s +
      "'" +
      l +
      (r ? ". " + r : "")
    );
  }
  return (s, l, o) => {
    if (t === !1)
      throw new $(
        i(l, " has been removed" + (n ? " in " + n : "")),
        $.ERR_DEPRECATED
      );
    return (
      n &&
        !pc[l] &&
        ((pc[l] = !0),
        console.warn(
          i(
            l,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      t ? t(s, l, o) : !0
    );
  };
};
function tw(e, t, n) {
  if (typeof e != "object")
    throw new $("options must be an object", $.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let i = r.length;
  for (; i-- > 0; ) {
    const s = r[i],
      l = t[s];
    if (l) {
      const o = e[s],
        a = o === void 0 || l(o, s, e);
      if (a !== !0)
        throw new $("option " + s + " must be " + a, $.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new $("Unknown option " + s, $.ERR_BAD_OPTION);
  }
}
const So = { assertOptions: tw, validators: La },
  kt = So.validators;
class cs {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new oc(), response: new oc() });
  }
  request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = Hn(this.defaults, n));
    const { transitional: r, paramsSerializer: i, headers: s } = n;
    r !== void 0 &&
      So.assertOptions(
        r,
        {
          silentJSONParsing: kt.transitional(kt.boolean),
          forcedJSONParsing: kt.transitional(kt.boolean),
          clarifyTimeoutError: kt.transitional(kt.boolean),
        },
        !1
      ),
      i != null &&
        (P.isFunction(i)
          ? (n.paramsSerializer = { serialize: i })
          : So.assertOptions(
              i,
              { encode: kt.function, serialize: kt.function },
              !0
            )),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let l = s && P.merge(s.common, s[n.method]);
    s &&
      P.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (v) => {
          delete s[v];
        }
      ),
      (n.headers = wt.concat(l, s));
    const o = [];
    let a = !0;
    this.interceptors.request.forEach(function (y) {
      (typeof y.runWhen == "function" && y.runWhen(n) === !1) ||
        ((a = a && y.synchronous), o.unshift(y.fulfilled, y.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function (y) {
      u.push(y.fulfilled, y.rejected);
    });
    let c,
      d = 0,
      h;
    if (!a) {
      const v = [dc.bind(this), void 0];
      for (
        v.unshift.apply(v, o),
          v.push.apply(v, u),
          h = v.length,
          c = Promise.resolve(n);
        d < h;

      )
        c = c.then(v[d++], v[d++]);
      return c;
    }
    h = o.length;
    let g = n;
    for (d = 0; d < h; ) {
      const v = o[d++],
        y = o[d++];
      try {
        g = v(g);
      } catch (x) {
        y.call(this, x);
        break;
      }
    }
    try {
      c = dc.call(this, g);
    } catch (v) {
      return Promise.reject(v);
    }
    for (d = 0, h = u.length; d < h; ) c = c.then(u[d++], u[d++]);
    return c;
  }
  getUri(t) {
    t = Hn(this.defaults, t);
    const n = xp(t.baseURL, t.url);
    return vp(n, t.params, t.paramsSerializer);
  }
}
P.forEach(["delete", "get", "head", "options"], function (t) {
  cs.prototype[t] = function (n, r) {
    return this.request(
      Hn(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
P.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (s, l, o) {
      return this.request(
        Hn(o || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: s,
          data: l,
        })
      );
    };
  }
  (cs.prototype[t] = n()), (cs.prototype[t + "Form"] = n(!0));
});
const zi = cs;
class Ma {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (s) {
      n = s;
    });
    const r = this;
    this.promise.then((i) => {
      if (!r._listeners) return;
      let s = r._listeners.length;
      for (; s-- > 0; ) r._listeners[s](i);
      r._listeners = null;
    }),
      (this.promise.then = (i) => {
        let s;
        const l = new Promise((o) => {
          r.subscribe(o), (s = o);
        }).then(i);
        return (
          (l.cancel = function () {
            r.unsubscribe(s);
          }),
          l
        );
      }),
      t(function (s, l, o) {
        r.reason || ((r.reason = new Zr(s, l, o)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  static source() {
    let t;
    return {
      token: new Ma(function (i) {
        t = i;
      }),
      cancel: t,
    };
  }
}
const nw = Ma;
function rw(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function iw(e) {
  return P.isObject(e) && e.isAxiosError === !0;
}
const xo = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(xo).forEach(([e, t]) => {
  xo[t] = e;
});
const sw = xo;
function Cp(e) {
  const t = new zi(e),
    n = sp(zi.prototype.request, t);
  return (
    P.extend(n, zi.prototype, t, { allOwnKeys: !0 }),
    P.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (i) {
      return Cp(Hn(e, i));
    }),
    n
  );
}
const oe = Cp(Oa);
oe.Axios = zi;
oe.CanceledError = Zr;
oe.CancelToken = nw;
oe.isCancel = Sp;
oe.VERSION = Tp;
oe.toFormData = Rs;
oe.AxiosError = $;
oe.Cancel = oe.CanceledError;
oe.all = function (t) {
  return Promise.all(t);
};
oe.spread = rw;
oe.isAxiosError = iw;
oe.mergeConfig = Hn;
oe.AxiosHeaders = wt;
oe.formToJSON = (e) => wp(P.isHTMLForm(e) ? new FormData(e) : e);
oe.getAdapter = Ep.getAdapter;
oe.HttpStatusCode = sw;
oe.default = oe;
const lw = oe,
  Pp = "%[a-f0-9]{2}",
  mc = new RegExp("(" + Pp + ")|([^%]+?)", "gi"),
  hc = new RegExp("(" + Pp + ")+", "gi");
function Eo(e, t) {
  try {
    return [decodeURIComponent(e.join(""))];
  } catch {}
  if (e.length === 1) return e;
  t = t || 1;
  const n = e.slice(0, t),
    r = e.slice(t);
  return Array.prototype.concat.call([], Eo(n), Eo(r));
}
function ow(e) {
  try {
    return decodeURIComponent(e);
  } catch {
    let t = e.match(mc) || [];
    for (let n = 1; n < t.length; n++)
      (e = Eo(t, n).join("")), (t = e.match(mc) || []);
    return e;
  }
}
function aw(e) {
  const t = { "%FE%FF": "  ", "%FF%FE": "  " };
  let n = hc.exec(e);
  for (; n; ) {
    try {
      t[n[0]] = decodeURIComponent(n[0]);
    } catch {
      const i = ow(n[0]);
      i !== n[0] && (t[n[0]] = i);
    }
    n = hc.exec(e);
  }
  t["%C2"] = " ";
  const r = Object.keys(t);
  for (const i of r) e = e.replace(new RegExp(i, "g"), t[i]);
  return e;
}
function uw(e) {
  if (typeof e != "string")
    throw new TypeError(
      "Expected `encodedURI` to be of type `string`, got `" + typeof e + "`"
    );
  try {
    return decodeURIComponent(e);
  } catch {
    return aw(e);
  }
}
function kp(e, t) {
  if (!(typeof e == "string" && typeof t == "string"))
    throw new TypeError("Expected the arguments to be of type `string`");
  if (e === "" || t === "") return [];
  const n = e.indexOf(t);
  return n === -1 ? [] : [e.slice(0, n), e.slice(n + t.length)];
}
function cw(e, t) {
  const n = {};
  if (Array.isArray(t))
    for (const r of t) {
      const i = Object.getOwnPropertyDescriptor(e, r);
      i != null && i.enumerable && Object.defineProperty(n, r, i);
    }
  else
    for (const r of Reflect.ownKeys(e)) {
      const i = Object.getOwnPropertyDescriptor(e, r);
      if (i.enumerable) {
        const s = e[r];
        t(r, s, e) && Object.defineProperty(n, r, i);
      }
    }
  return n;
}
const dw = (e) => e == null,
  fw = (e) =>
    encodeURIComponent(e).replace(
      /[!'()*]/g,
      (t) => `%${t.charCodeAt(0).toString(16).toUpperCase()}`
    ),
  To = Symbol("encodeFragmentIdentifier");
function pw(e) {
  switch (e.arrayFormat) {
    case "index":
      return (t) => (n, r) => {
        const i = n.length;
        return r === void 0 ||
          (e.skipNull && r === null) ||
          (e.skipEmptyString && r === "")
          ? n
          : r === null
          ? [...n, [re(t, e), "[", i, "]"].join("")]
          : [...n, [re(t, e), "[", re(i, e), "]=", re(r, e)].join("")];
      };
    case "bracket":
      return (t) => (n, r) =>
        r === void 0 ||
        (e.skipNull && r === null) ||
        (e.skipEmptyString && r === "")
          ? n
          : r === null
          ? [...n, [re(t, e), "[]"].join("")]
          : [...n, [re(t, e), "[]=", re(r, e)].join("")];
    case "colon-list-separator":
      return (t) => (n, r) =>
        r === void 0 ||
        (e.skipNull && r === null) ||
        (e.skipEmptyString && r === "")
          ? n
          : r === null
          ? [...n, [re(t, e), ":list="].join("")]
          : [...n, [re(t, e), ":list=", re(r, e)].join("")];
    case "comma":
    case "separator":
    case "bracket-separator": {
      const t = e.arrayFormat === "bracket-separator" ? "[]=" : "=";
      return (n) => (r, i) =>
        i === void 0 ||
        (e.skipNull && i === null) ||
        (e.skipEmptyString && i === "")
          ? r
          : ((i = i === null ? "" : i),
            r.length === 0
              ? [[re(n, e), t, re(i, e)].join("")]
              : [[r, re(i, e)].join(e.arrayFormatSeparator)]);
    }
    default:
      return (t) => (n, r) =>
        r === void 0 ||
        (e.skipNull && r === null) ||
        (e.skipEmptyString && r === "")
          ? n
          : r === null
          ? [...n, re(t, e)]
          : [...n, [re(t, e), "=", re(r, e)].join("")];
  }
}
function mw(e) {
  let t;
  switch (e.arrayFormat) {
    case "index":
      return (n, r, i) => {
        if (((t = /\[(\d*)]$/.exec(n)), (n = n.replace(/\[\d*]$/, "")), !t)) {
          i[n] = r;
          return;
        }
        i[n] === void 0 && (i[n] = {}), (i[n][t[1]] = r);
      };
    case "bracket":
      return (n, r, i) => {
        if (((t = /(\[])$/.exec(n)), (n = n.replace(/\[]$/, "")), !t)) {
          i[n] = r;
          return;
        }
        if (i[n] === void 0) {
          i[n] = [r];
          return;
        }
        i[n] = [...i[n], r];
      };
    case "colon-list-separator":
      return (n, r, i) => {
        if (((t = /(:list)$/.exec(n)), (n = n.replace(/:list$/, "")), !t)) {
          i[n] = r;
          return;
        }
        if (i[n] === void 0) {
          i[n] = [r];
          return;
        }
        i[n] = [...i[n], r];
      };
    case "comma":
    case "separator":
      return (n, r, i) => {
        const s = typeof r == "string" && r.includes(e.arrayFormatSeparator),
          l =
            typeof r == "string" &&
            !s &&
            pt(r, e).includes(e.arrayFormatSeparator);
        r = l ? pt(r, e) : r;
        const o =
          s || l
            ? r.split(e.arrayFormatSeparator).map((a) => pt(a, e))
            : r === null
            ? r
            : pt(r, e);
        i[n] = o;
      };
    case "bracket-separator":
      return (n, r, i) => {
        const s = /(\[])$/.test(n);
        if (((n = n.replace(/\[]$/, "")), !s)) {
          i[n] = r && pt(r, e);
          return;
        }
        const l =
          r === null
            ? []
            : r.split(e.arrayFormatSeparator).map((o) => pt(o, e));
        if (i[n] === void 0) {
          i[n] = l;
          return;
        }
        i[n] = [...i[n], ...l];
      };
    default:
      return (n, r, i) => {
        if (i[n] === void 0) {
          i[n] = r;
          return;
        }
        i[n] = [...[i[n]].flat(), r];
      };
  }
}
function Np(e) {
  if (typeof e != "string" || e.length !== 1)
    throw new TypeError("arrayFormatSeparator must be single character string");
}
function re(e, t) {
  return t.encode ? (t.strict ? fw(e) : encodeURIComponent(e)) : e;
}
function pt(e, t) {
  return t.decode ? uw(e) : e;
}
function _p(e) {
  return Array.isArray(e)
    ? e.sort()
    : typeof e == "object"
    ? _p(Object.keys(e))
        .sort((t, n) => Number(t) - Number(n))
        .map((t) => e[t])
    : e;
}
function Op(e) {
  const t = e.indexOf("#");
  return t !== -1 && (e = e.slice(0, t)), e;
}
function hw(e) {
  let t = "";
  const n = e.indexOf("#");
  return n !== -1 && (t = e.slice(n)), t;
}
function gc(e, t) {
  return (
    t.parseNumbers &&
    !Number.isNaN(Number(e)) &&
    typeof e == "string" &&
    e.trim() !== ""
      ? (e = Number(e))
      : t.parseBooleans &&
        e !== null &&
        (e.toLowerCase() === "true" || e.toLowerCase() === "false") &&
        (e = e.toLowerCase() === "true"),
    e
  );
}
function Ra(e) {
  e = Op(e);
  const t = e.indexOf("?");
  return t === -1 ? "" : e.slice(t + 1);
}
function ja(e, t) {
  (t = {
    decode: !0,
    sort: !0,
    arrayFormat: "none",
    arrayFormatSeparator: ",",
    parseNumbers: !1,
    parseBooleans: !1,
    ...t,
  }),
    Np(t.arrayFormatSeparator);
  const n = mw(t),
    r = Object.create(null);
  if (typeof e != "string" || ((e = e.trim().replace(/^[?#&]/, "")), !e))
    return r;
  for (const i of e.split("&")) {
    if (i === "") continue;
    const s = t.decode ? i.replace(/\+/g, " ") : i;
    let [l, o] = kp(s, "=");
    l === void 0 && (l = s),
      (o =
        o === void 0
          ? null
          : ["comma", "separator", "bracket-separator"].includes(t.arrayFormat)
          ? o
          : pt(o, t)),
      n(pt(l, t), o, r);
  }
  for (const [i, s] of Object.entries(r))
    if (typeof s == "object" && s !== null)
      for (const [l, o] of Object.entries(s)) s[l] = gc(o, t);
    else r[i] = gc(s, t);
  return t.sort === !1
    ? r
    : (t.sort === !0
        ? Object.keys(r).sort()
        : Object.keys(r).sort(t.sort)
      ).reduce((i, s) => {
        const l = r[s];
        return (
          l && typeof l == "object" && !Array.isArray(l)
            ? (i[s] = _p(l))
            : (i[s] = l),
          i
        );
      }, Object.create(null));
}
function Lp(e, t) {
  if (!e) return "";
  (t = {
    encode: !0,
    strict: !0,
    arrayFormat: "none",
    arrayFormatSeparator: ",",
    ...t,
  }),
    Np(t.arrayFormatSeparator);
  const n = (l) =>
      (t.skipNull && dw(e[l])) || (t.skipEmptyString && e[l] === ""),
    r = pw(t),
    i = {};
  for (const [l, o] of Object.entries(e)) n(l) || (i[l] = o);
  const s = Object.keys(i);
  return (
    t.sort !== !1 && s.sort(t.sort),
    s
      .map((l) => {
        const o = e[l];
        return o === void 0
          ? ""
          : o === null
          ? re(l, t)
          : Array.isArray(o)
          ? o.length === 0 && t.arrayFormat === "bracket-separator"
            ? re(l, t) + "[]"
            : o.reduce(r(l), []).join("&")
          : re(l, t) + "=" + re(o, t);
      })
      .filter((l) => l.length > 0)
      .join("&")
  );
}
function Mp(e, t) {
  var i;
  t = { decode: !0, ...t };
  let [n, r] = kp(e, "#");
  return (
    n === void 0 && (n = e),
    {
      url:
        ((i = n == null ? void 0 : n.split("?")) == null ? void 0 : i[0]) ?? "",
      query: ja(Ra(e), t),
      ...(t && t.parseFragmentIdentifier && r
        ? { fragmentIdentifier: pt(r, t) }
        : {}),
    }
  );
}
function Rp(e, t) {
  t = { encode: !0, strict: !0, [To]: !0, ...t };
  const n = Op(e.url).split("?")[0] || "",
    r = Ra(e.url),
    i = { ...ja(r, { sort: !1 }), ...e.query };
  let s = Lp(i, t);
  s && (s = `?${s}`);
  let l = hw(e.url);
  if (e.fragmentIdentifier) {
    const o = new URL(n);
    (o.hash = e.fragmentIdentifier),
      (l = t[To] ? o.hash : `#${e.fragmentIdentifier}`);
  }
  return `${n}${s}${l}`;
}
function jp(e, t, n) {
  n = { parseFragmentIdentifier: !0, [To]: !1, ...n };
  const { url: r, query: i, fragmentIdentifier: s } = Mp(e, n);
  return Rp({ url: r, query: cw(i, t), fragmentIdentifier: s }, n);
}
function gw(e, t, n) {
  const r = Array.isArray(t) ? (i) => !t.includes(i) : (i, s) => !t(i, s);
  return jp(e, r, n);
}
const vw = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        exclude: gw,
        extract: Ra,
        parse: ja,
        parseUrl: Mp,
        pick: jp,
        stringify: Lp,
        stringifyUrl: Rp,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Xt = {
    baseUrl: "https://api.themoviedb.org/3",
    apiKey: "05e66b34c1053c120252db6d530fc05f",
    originalImage: (e) => `https://image.tmdb.org/t/p/original/${e}`,
    w500Image: (e) => `https://image.tmdb.org/t/p/w500/${e}`,
  },
  Be = lw.create({
    baseURL: Xt.baseUrl,
    headers: { "Content-Type": "application/json" },
    paramsSerializer: (e) => vw.stringify({ ...e, api_key: Xt.apiKey }),
  });
Be.interceptors.request.use(async (e) => e);
Be.interceptors.response.use(
  (e) => (e && e.data ? e.data : e),
  (e) => {
    throw e;
  }
);
const Z = { movie: "movie", tv: "tv", all: "all" },
  Wn = { upcoming: "upcoming", popular: "popular", top_rated: "top_rated" },
  Hr = { popular: "popular", top_rated: "top_rated", on_the_air: "on_the_air" },
  Tr = { animation: 16, fantasy: 14, horror: 27 },
  fe = {
    getTrendingAll: (e, t) => {
      const n = "trending/" + Z[e] + "/week";
      return Be.get(n, { params: t });
    },
    getAllTV: (e, t) => {
      const n = "discover/tv";
      return Be.get(n, { params: { with_genres: Tr[e], ...t } });
    },
    getAllMovie: (e, t) => {
      const n = "discover/movie";
      return Be.get(n, { params: { with_genres: Tr[e], ...t } });
    },
    getMovieList: (e, t) => {
      const n = "movie/" + Wn[e];
      return Be.get(n, t);
    },
    getTvList: (e, t) => {
      const n = "tv/" + Hr[e];
      return Be.get(n, t);
    },
    getVideos: (e, t) => {
      const n = Z[e] + "/" + t + "/videos";
      return Be.get(n, { params: {} });
    },
    search: (e, t) => {
      const n = "search/" + Z[e];
      return Be.get(n, t);
    },
    getDetail: (e, t, n) => {
      const r = Z[e] + "/" + t;
      return Be.get(r, n);
    },
    credits: (e, t) => {
      const n = Z[e] + "/" + t + "/credits";
      return Be.get(n, { params: {} });
    },
    similar: (e, t) => {
      const n = Z[e] + "/" + t + "/similar";
      return Be.get(n, { params: {} });
    },
  };
class Ip extends k.Component {
  constructor(t) {
    super(t), (this.state = { hasError: !1 });
  }
  componentDidCatch(t, n) {
    console.error("Error:", t),
      console.error("Error Info:", n),
      this.setState({ hasError: !0 });
  }
  render() {
    return this.state.hasError
      ? w.jsx("div", { children: "Terjadi kesalahan." })
      : this.props.children;
  }
}
Ip.propTypes = { children: Ht.node };
const zp = (e) => {
  const [t, n] = k.useState(!1);
  return (
    k.useEffect(() => {
      n(e.active);
    }, [e.active]),
    w.jsx("div", {
      id: e.id,
      className: `modal ${t ? "active" : ""}`,
      children: e.children,
    })
  );
};
zp.propTypes = { active: Ht.bool, id: Ht.string };
const Ap = (e) => {
  const t = k.useRef(null),
    n = () => {
      t.current.parentNode.classList.remove("active"), e.onClose && e.onClose();
    };
  return w.jsxs("div", {
    ref: t,
    className: "modal-content",
    children: [
      e.children,
      w.jsx("div", {
        className: "modal-content-close",
        onClick: n,
        children: w.jsx("i", { className: "bx bx-x" }),
      }),
    ],
  });
};
Ap.propTypes = { onClose: Ht.func };
const yw = () => {
    const [e, t] = k.useState([]);
    return (
      k.useEffect(() => {
        (async () => {
          const r = { page: 1 };
          try {
            const i = await fe.getMovieList(Wn.popular, { params: r });
            t(i.results.slice(0, 4));
          } catch (i) {
            console.error("An error occurred:", i);
          }
        })();
      }, []),
      w.jsx(Ip, {
        children: w.jsx("div", {
          className: "banner-slide",
          children: w.jsx(Ca, {
            modules: [Cv],
            grabCursor: !0,
            spaceBetween: 0,
            slidesPerView: 1,
            children: e.map((n, r) =>
              w.jsx(
                Pa,
                {
                  children: ({ isActive: i }) =>
                    w.jsx(ww, { item: n, className: `${i ? "active" : ""}` }),
                },
                r
              )
            ),
          }),
        }),
      })
    );
  },
  ww = (e) => {
    let t = xa();
    const [n, r] = k.useState(!1),
      i = e.item,
      s = Xt.originalImage(i.backdrop_path ? i.backdrop_path : i.poster_path),
      l = async () => {
        try {
          const o = document.querySelector(`#modal_${i.id}`),
            a = await fe.getVideos(Z.movie, i.id);
          if (a.results.length > 0) {
            const u = "https://www.youtube.com/embed/" + a.results[0].key;
            r(!0),
              o.querySelector(".modal-content > iframe").setAttribute("src", u);
          } else o.querySelector(".modal-content").innerHTML = "No trailer";
        } catch (o) {
          console.error("An error occurred while fetching the video:", o);
        }
      };
    return w.jsxs("div", {
      className: `banner-slide-item ${e.className}`,
      style: { backgroundImage: `url(${s})` },
      children: [
        w.jsxs("div", {
          className: "banner-slide-item-content container",
          children: [
            w.jsxs("div", {
              className: "banner-slide-item-content-info",
              children: [
                w.jsx("h2", { className: "title", children: i.title }),
                w.jsx("div", { className: "overview", children: i.overview }),
                w.jsxs("div", {
                  className: "buttons",
                  children: [
                    w.jsx(_s, {
                      onClick: () => t(`/movie/${i.id}`),
                      children: "Watch Now",
                    }),
                    w.jsx(dt, { onClick: l, children: "Watch Trailer" }),
                  ],
                }),
              ],
            }),
            w.jsx("div", {
              className: "banner-slide-item-content-poster",
              children: w.jsx("img", {
                src: Xt.w500Image(i.poster_path),
                alt: "",
              }),
            }),
          ],
        }),
        w.jsx(zp, {
          active: n,
          id: `modal_${i.id}`,
          onModalClose: () => {
            const o = document.getElementById(`iframe_${i.id}`);
            o && o.setAttribute("src", ""), r(!1);
          },
          children: w.jsx(Ap, {
            children: w.jsx("iframe", {
              id: `iframe_${i.id}`,
              width: "100%",
              height: "500px",
              title: "trailer",
            }),
          }),
        }),
      ],
    });
  };
const Fp = (e) => {
    const t = e.item,
      n = "/" + Z[e.category] + "/" + t.id,
      r = Xt.w500Image(t.poster_path || t.backdrop_path);
    return w.jsxs(ie, {
      to: n,
      children: [
        w.jsx("div", {
          className: "movie-card",
          style: { backgroundImage: `url(${r})` },
          children: w.jsx(_s, {
            children: w.jsx("i", { className: "bx bx-play" }),
          }),
        }),
        w.jsx("h3", { children: t.title || t.name }),
      ],
    });
  },
  nt = (e) => {
    const [t, n] = k.useState([]);
    return (
      k.useEffect(() => {
        (async () => {
          let i = null;
          const s = {};
          if (e.type !== "similar")
            switch (e.category) {
              case Z.movie:
                i =
                  e.genre === 16
                    ? await fe.getAllMovie(e.type, {
                        with_genres: Tr.animation,
                      })
                    : e.genre === 27
                    ? await fe.getAllMovie(e.type, { with_genres: Tr.horror })
                    : e.type === "trending"
                    ? await fe.getTrendingAll(e.category, { params: s })
                    : await fe.getMovieList(e.type, { params: s });
                break;
              default:
                e.genre === 16
                  ? (i = await fe.getAllTV(e.type, {
                      with_genres: Tr.animation,
                    }))
                  : (i = await fe.getTvList(e.type, { params: s }));
            }
          else i = await fe.similar(e.category, e.id);
          n(i.results);
        })();
      }, [e.type, e.category, e.id, e.genre]),
      w.jsx("div", {
        className: "movie-list",
        children: w.jsx(Ca, {
          modules: [Tv],
          grabCursor: !0,
          spaceBetween: 10,
          slidesPerView: "auto",
          mousewheel: !0,
          speed: 300,
          effect: "slide",
          children: t.map((r, i) =>
            w.jsx(
              Pa,
              { children: w.jsx(Fp, { item: r, category: e.category }) },
              i
            )
          ),
        }),
      })
    );
  };
nt.propTypes = { category: Ht.string, type: Ht.string, genre: Ht.number };
const Sw = () =>
  w.jsxs(w.Fragment, {
    children: [
      w.jsx(yw, {}),
      w.jsxs("div", {
        className: "container",
        children: [
          w.jsxs("div", {
            className: "section mb-3",
            children: [
              w.jsx("div", {
                className: "section-header mb-2",
                children: w.jsx("h2", {
                  className: "title-home",
                  children: "Trending This Week",
                }),
              }),
              w.jsx(nt, { category: Z.movie, type: "trending" }),
            ],
          }),
          w.jsxs("div", {
            className: "section mb-3",
            children: [
              w.jsxs("div", {
                className: "section-header mb-2",
                children: [
                  w.jsx("h2", {
                    className: "title-home",
                    children: "Popular Movies",
                  }),
                  w.jsx(ie, {
                    to: "/movie",
                    children: w.jsx(dt, {
                      className: "small",
                      children: "View More",
                    }),
                  }),
                ],
              }),
              w.jsx(nt, { category: Z.movie, type: Wn.popular }),
            ],
          }),
          w.jsxs("div", {
            className: "section mb-3",
            children: [
              w.jsxs("div", {
                className: "section-header mb-2",
                children: [
                  w.jsx("h2", {
                    className: "title-home",
                    children: "Top Rated Movies",
                  }),
                  w.jsx(ie, {
                    to: "/movie",
                    children: w.jsx(dt, {
                      className: "small",
                      children: "View More",
                    }),
                  }),
                ],
              }),
              w.jsx(nt, { category: Z.movie, type: Wn.top_rated }),
            ],
          }),
          w.jsxs("div", {
            className: "section mb-3",
            children: [
              w.jsxs("div", {
                className: "section-header mb-2",
                children: [
                  w.jsx("h2", {
                    className: "title-home",
                    children: "Animated Movies",
                  }),
                  w.jsx(ie, {
                    to: "/movie",
                    children: w.jsx(dt, {
                      className: "small",
                      children: "View More",
                    }),
                  }),
                ],
              }),
              w.jsx(nt, { category: Z.movie, genre: 16 }),
            ],
          }),
          w.jsxs("div", {
            className: "section mb-3",
            children: [
              w.jsxs("div", {
                className: "section-header mb-2",
                children: [
                  w.jsx("h2", {
                    className: "title-home",
                    children: "Horror Movies",
                  }),
                  w.jsx(ie, {
                    to: "/movie",
                    children: w.jsx(dt, {
                      className: "small",
                      children: "View More",
                    }),
                  }),
                ],
              }),
              w.jsx(nt, { category: Z.movie, genre: 27 }),
            ],
          }),
          w.jsxs("div", {
            className: "section mb-3",
            children: [
              w.jsxs("div", {
                className: "section-header mb-2",
                children: [
                  w.jsx("h2", {
                    className: "title-home",
                    children: "Popular Series",
                  }),
                  w.jsx(ie, {
                    to: "/tv",
                    children: w.jsx(dt, {
                      className: "small",
                      children: "View More",
                    }),
                  }),
                ],
              }),
              w.jsx(nt, { category: Z.tv, type: Hr.popular }),
            ],
          }),
          w.jsxs("div", {
            className: "section mb-3",
            children: [
              w.jsxs("div", {
                className: "section-header mb-2",
                children: [
                  w.jsx("h2", {
                    className: "title-home",
                    children: "Top Rated Series",
                  }),
                  w.jsx(ie, {
                    to: "/tv",
                    children: w.jsx(dt, {
                      className: "small",
                      children: "View More",
                    }),
                  }),
                ],
              }),
              w.jsx(nt, { category: Z.tv, type: Hr.top_rated }),
            ],
          }),
          w.jsxs("div", {
            className: "section mb-3",
            children: [
              w.jsxs("div", {
                className: "section-header mb-2",
                children: [
                  w.jsx("h2", {
                    className: "title-home",
                    children: "Animated Series",
                  }),
                  w.jsx(ie, {
                    to: "/movie",
                    children: w.jsx(dt, {
                      className: "small",
                      children: "View More",
                    }),
                  }),
                ],
              }),
              w.jsx(nt, { category: Z.tv, genre: 16 }),
            ],
          }),
        ],
      }),
    ],
  });
const xw = "./assets/poster-bg-60b614b8.jpg",
  Ew = (e) =>
    w.jsxs(w.Fragment, {
      children: [
        w.jsx("div", {
          className: "page-header",
          style: { backgroundImage: `url(${xw})` },
          children: w.jsx("h2", { children: e.children }),
        }),
        w.jsx("div", { className: "overlay" }),
      ],
    });
const Tw = (e) =>
    w.jsx("input", {
      type: e.type,
      placeholder: e.placeholder,
      value: e.value,
      onChange: e.onChange ? (t) => e.onChange(t) : null,
    }),
  Cw = (e) => {
    const [t, n] = k.useState([]),
      [r, i] = k.useState(1),
      [s, l] = k.useState(0),
      { keyword: o } = qr();
    k.useEffect(() => {
      (async () => {
        let c = null;
        if (o === void 0) {
          const d = {};
          switch (e.category) {
            case Z.movie:
              c = await fe.getMovieList(Wn.upcoming, { params: d });
              break;
            default:
              c = await fe.getTvList(Hr.on_the_air, { params: d });
          }
        } else {
          const d = { query: o };
          c = await fe.search(e.category, { params: d });
        }
        n(c.results), l(c.total_pages);
      })();
    }, [e.category, o]);
    const a = async () => {
      let u = null;
      if (o === void 0) {
        const c = { page: r + 1 };
        switch (e.category) {
          case Z.movie:
            u = await fe.getMovieList(Wn.upcoming, { params: c });
            break;
          default:
            u = await fe.getTvList(Hr.on_the_air, { params: c });
        }
      } else {
        const c = { page: r + 1, query: o };
        u = await fe.search(e.category, { params: c });
      }
      n([...t, ...u.results]), i(r + 1);
    };
    return w.jsxs(w.Fragment, {
      children: [
        w.jsx("div", {
          className: "section input-search mb-3",
          children: w.jsx(Pw, { category: e.category, keyword: o }),
        }),
        w.jsx("div", {
          className: "movie-grid",
          children: t.map((u, c) =>
            w.jsx(Fp, { category: e.category, item: u }, c)
          ),
        }),
        r < s
          ? w.jsx("div", {
              className: "movie-grid-loadmore",
              children: w.jsx(dt, {
                className: "small",
                onClick: a,
                children: "Load More",
              }),
            })
          : null,
      ],
    });
  },
  Pw = (e) => {
    const t = xa(),
      [n, r] = k.useState(e.keyword ? e.keyword : ""),
      i = k.useCallback(() => {
        n.trim().length > 0 && t(`/${Z[e.category]}/search/${n}`);
      }, [n, e.category, t]);
    k.useEffect(() => {
      const l = (o) => {
        o.preventDefault(), o.keyCode === 13 && i();
      };
      return (
        document.addEventListener("keyup", l),
        () => {
          document.removeEventListener("keyup", l);
        }
      );
    }, [n, i]);
    const s =
      e.category === Z.movie
        ? "Search Your Favorite Movies"
        : "Search Your Favorite Series";
    return w.jsxs("div", {
      className: "movie-search",
      children: [
        w.jsx(Tw, {
          type: "text",
          placeholder: s,
          value: n,
          onChange: (l) => r(l.target.value),
        }),
        w.jsx(_s, { className: "small", onClick: i, children: "Search" }),
      ],
    });
  },
  vc = () => {
    const { category: e } = qr();
    return (
      console.log(e),
      w.jsxs(w.Fragment, {
        children: [
          w.jsx(Ew, { children: e === Z.movie ? "Movies" : "TV Series" }),
          w.jsx("div", {
            className: "container",
            children: w.jsx("div", {
              className: "section mb-3",
              children: w.jsx(Cw, { category: e }),
            }),
          }),
        ],
      })
    );
  };
const kw = (e) => {
    const { category: t } = qr(),
      [n, r] = k.useState([]);
    return (
      k.useEffect(() => {
        (async () => {
          const s = await fe.credits(t, e.id);
          r(s.cast.slice(0, 5));
        })();
      }, [t, e.id]),
      w.jsx("div", {
        className: "casts",
        children: n.map((i, s) =>
          w.jsxs(
            "div",
            {
              className: "casts-item",
              children: [
                w.jsx("div", {
                  className: "casts-item-img",
                  style: {
                    backgroundImage: `url(${Xt.w500Image(i.profile_path)})`,
                  },
                }),
                w.jsx("p", { className: "casts-item-name", children: i.name }),
              ],
            },
            s
          )
        ),
      })
    );
  },
  Nw = (e) => {
    const { category: t } = qr(),
      [n, r] = k.useState([]);
    return (
      k.useEffect(() => {
        (async () => {
          const s = await fe.getVideos(t, e.id);
          r(s.results.slice(0, 5));
        })();
      }, [t, e.id]),
      w.jsx(w.Fragment, {
        children: n.map((i, s) => w.jsx(_w, { item: i }, s)),
      })
    );
  },
  _w = (e) => {
    const t = e.item,
      n = k.useRef(null);
    return (
      k.useEffect(() => {
        const r = (n.current.offsetWidth * 9) / 16 + "px";
        n.current.setAttribute("height", r);
      }, []),
      w.jsxs("div", {
        className: "video",
        children: [
          w.jsx("div", {
            className: "video-title",
            children: w.jsx("h2", { children: t.name }),
          }),
          w.jsx("iframe", {
            className: "video-iframe",
            src: `https://www.youtube.com/embed/${t.key}`,
            ref: n,
            title: "video",
          }),
        ],
      })
    );
  },
  Ow = () => {
    const { category: e, id: t } = qr(),
      [n, r] = k.useState(null);
    return (
      k.useEffect(() => {
        (async () => {
          const s = await fe.getDetail(e, t, { params: {} });
          r(s), window.scrollTo(0, 0);
        })();
      }, [e, t]),
      w.jsx(w.Fragment, {
        children:
          n &&
          w.jsxs(w.Fragment, {
            children: [
              w.jsx("div", {
                className: "banner",
                style: {
                  backgroundImage: `url(${Xt.originalImage(
                    n.backdrop_path || n.poster_path
                  )})`,
                },
              }),
              w.jsxs("div", {
                className: "mb-3 movie-content container",
                children: [
                  w.jsx("div", {
                    className: "movie-content-poster",
                    children: w.jsx("div", {
                      className: "movie-content-poster-img",
                      style: {
                        backgroundImage: `url(${Xt.originalImage(
                          n.poster_path || n.backdrop_path
                        )})`,
                      },
                    }),
                  }),
                  w.jsxs("div", {
                    className: "movie-content-info",
                    children: [
                      w.jsx("h1", {
                        className: "title",
                        children: n.title || n.name,
                      }),
                      w.jsx("div", {
                        className: "genres",
                        children:
                          n.genres &&
                          n.genres
                            .slice(0, 5)
                            .map((i, s) =>
                              w.jsx(
                                "span",
                                { className: "genres-item", children: i.name },
                                s
                              )
                            ),
                      }),
                      w.jsx("p", {
                        className: "overview",
                        children: n.overview,
                      }),
                      w.jsxs("div", {
                        className: "cast",
                        children: [
                          w.jsx("div", {
                            className: "section-header",
                            children: w.jsx("h2", { children: "Casts" }),
                          }),
                          w.jsx(kw, { id: n.id }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              w.jsxs("div", {
                className: "container",
                children: [
                  w.jsx("div", {
                    className: "section mb-3",
                    children: w.jsx(Nw, { id: n.id }),
                  }),
                  w.jsxs("div", {
                    className: "section mb-3",
                    children: [
                      w.jsx("div", {
                        className: "section-header mb-2",
                        children: w.jsx("h2", { children: "Similar" }),
                      }),
                      w.jsx(nt, { category: e, type: "similar", id: n.id }),
                    ],
                  }),
                ],
              }),
            ],
          }),
      })
    );
  },
  Lw = () => {
    const { pathname: e } = qn();
    return (
      k.useEffect(() => {
        window.scrollTo(0, 0);
      }, [e]),
      w.jsxs(Zg, {
        children: [
          w.jsx(fr, { path: "/:category/:id", element: w.jsx(Ow, {}) }),
          w.jsx(fr, {
            path: "/:category/search/:keyword",
            element: w.jsx(vc, {}),
          }),
          w.jsx(fr, { path: "/:category/", element: w.jsx(vc, {}) }),
          w.jsx(fr, { path: "/CineHarbor/", element: w.jsx(Sw, {}) }),
        ],
      })
    );
  };
const Dp = "./assets/logo-39f50a69.png",
  yc = [
    { display: "Home", path: "/CineHarbor/" },
    { display: "Movies", path: "/movie/" },
    { display: "Series", path: "/tv/" },
  ],
  Mw = () => {
    const { pathname: e } = qn(),
      t = k.useRef(null),
      n = yc.findIndex((r) => r.path === e);
    return (
      k.useEffect(() => {
        const r = () => {
          document.body.scrollTop > 100 ||
          document.documentElement.scrollTop > 100
            ? t.current.classList.add("shrink")
            : t.current.classList.remove("shrink");
        };
        return (
          window.addEventListener("scroll", r),
          () => {
            window.removeEventListener("scroll", r);
          }
        );
      }, []),
      w.jsx("div", {
        ref: t,
        className: "header",
        children: w.jsxs("div", {
          className: "header-wrap container",
          children: [
            w.jsxs("div", {
              className: "logo",
              children: [
                w.jsx("img", { src: Dp, alt: "" }),
                w.jsx(ie, { to: "./", children: "CineHarbor" }),
              ],
            }),
            w.jsx("ul", {
              className: "header-navbar",
              children: yc.map((r, i) =>
                w.jsx(
                  "li",
                  {
                    className: `${i === n ? "active" : ""}`,
                    children: w.jsx(ie, { to: r.path, children: r.display }),
                  },
                  i
                )
              ),
            }),
          ],
        }),
      })
    );
  };
const Rw = () =>
    w.jsxs(w.Fragment, {
      children: [
        w.jsx("div", {
          className: "footer",
          children: w.jsx("div", {
            className: "footer-content container",
            children: w.jsxs("div", {
              className: "footer-content-menus",
              children: [
                w.jsx("div", {
                  className: "footer-content-logo",
                  children: w.jsxs("div", {
                    className: "logo",
                    children: [
                      w.jsx("img", { src: Dp, alt: "" }),
                      w.jsx(ie, { to: "/", children: "CineHarbor" }),
                    ],
                  }),
                }),
                w.jsxs("div", {
                  className: "footer-content-menu",
                  children: [
                    w.jsx("h3", {
                      className: "footer-content-menu-title",
                      children: "Menus",
                    }),
                    w.jsx(ie, { to: "/CineHarbor", children: "Home" }),
                    w.jsx(ie, { to: "/movie", children: "Movies" }),
                    w.jsx(ie, { to: "/tv", children: "Series" }),
                  ],
                }),
                w.jsxs("div", {
                  className: "footer-content-menu",
                  children: [
                    w.jsx("h3", {
                      className: "footer-content-menu-title",
                      children: "Genres",
                    }),
                    w.jsx(ie, { to: "/", children: "Horror" }),
                    w.jsx(ie, { to: "/", children: "Animation" }),
                    w.jsx(ie, { to: "/", children: "Fantasy" }),
                  ],
                }),
                w.jsxs("div", {
                  className: "footer-content-menu",
                  children: [
                    w.jsx("h3", {
                      className: "footer-content-menu-title-genres",
                      children: "Genres",
                    }),
                    w.jsx(ie, { to: "./", children: "Action" }),
                    w.jsx(ie, { to: "./", children: "Sci-fi" }),
                    w.jsx(ie, { to: "./", children: "Romance" }),
                  ],
                }),
              ],
            }),
          }),
        }),
        w.jsx("div", {
          className: "footer-copy",
          children: w.jsx("span", {
            children:
              "© 2023 CineHarbor | Made by Griselda Valerie Michelle Benedicta and Ferry Daniel",
          }),
        }),
      ],
    }),
  jw = () =>
    w.jsxs(sv, { children: [w.jsx(Mw, {}), w.jsx(Lw, {}), w.jsx(Rw, {})] });
yl.createRoot(document.getElementById("root")).render(
  w.jsx(ee.StrictMode, { children: w.jsx(jw, {}) })
);
