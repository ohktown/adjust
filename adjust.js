!(function (t, e, a, r, n, s, d, l, o, i, u) {
  (t.Adjust = t.Adjust || {}), (t.Adjust_q = t.Adjust_q || []);
  for (var c = 0; c < l.length; c++) o(t.Adjust, t.Adjust_q, l[c]);
  (i = e.createElement(a)),
    (u = e.getElementsByTagName(a)[0]),
    (i.async = !0),
    (i.src = "https://cdn.adjust.com/adjust-latest.min.js"),
    (i.onload = function () {
      for (var e = 0; e < t.Adjust_q.length; e++)
        t.Adjust[t.Adjust_q[e][0]].apply(t.Adjust, t.Adjust_q[e][1]);
      t.Adjust_q = [];
    }),
    u.parentNode.insertBefore(i, u);
})(
  window,
  document,
  "script",
  0,
  0,
  0,
  0,
  [
    "initSdk",
    "getAttribution",
    "getWebUUID",
    "setReferrer",
    "trackEvent",
    "addGlobalCallbackParameters",
    "addGlobalPartnerParameters",
    "removeGlobalCallbackParameter",
    "removeGlobalPartnerParameter",
    "clearGlobalCallbackParameters",
    "clearGlobalPartnerParameters",
    "switchToOfflineMode",
    "switchBackToOnlineMode",
    "stop",
    "restart",
    "gdprForgetMe",
    "disableThirdPartySharing",
    "initSmartBanner",
    "showSmartBanner",
    "hideSmartBanner",
  ],
  function (t, e, a) {
    t[a] = function () {
      e.push([a, arguments]);
    };
  }
);
