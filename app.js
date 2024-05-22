const emojis = ["🙃", "🏞️", "🎼", "🐰" ,"🪺", "💐", "😂", "🌻", "🍀", "🪻", "🪷", "🌿", "🏛️", "💕", "😭", "🤓", "☔", "🌤️"]

$(document).ready(function() {
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    $('#title').text("Ms. Love's Class Guide " + randomEmoji);
    
    (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[523], {
        2500: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/journal/[slug]", function() {
                return n(2517)
            }
            ])
        },
        2474: function(e, t, n) {
            "use strict";
            n.d(t, {
                F: function() {
                    return l
                },
                Z: function() {
                    return o
                }
            });
            var r = n(5893)
              , a = "text-3xl font-semibold text-gray-900 dark:text-gray-50 tracking-tight text-center mb-3"
              , i = "text-base text-gray-600 dark:text-gray-400 text-center mb-10";
            function o(e) {
                var t = e.title
                  , n = e.description
                  , o = e.hideBreak
                  , s = void 0 !== o && o;
                return (0,
                r.jsxs)(r.Fragment, {
                    children: [(0,
                    r.jsx)("h1", {
                        className: a,
                        children: t
                    }), (0,
                    r.jsx)("p", {
                        className: i,
                        children: n
                    }), !s && (0,
                    r.jsx)("hr", {})]
                })
            }
            var s = n(9628)
              , c = n(6010)
              , u = n(7294);
            function l(e) {
                var t = e.title
                  , n = e.description
                  , o = e.hideBreak
                  , l = void 0 !== o && o
                  , d = "transition-all duration-500"
                  , p = (0,
                u.useState)(!1)
                  , h = p[0]
                  , f = p[1];
                return (0,
                u.useEffect)((function() {
                    f(!0)
                }
                ), []),
                (0,
                r.jsxs)(s.u, {
                    show: h,
                    children: [(0,
                    r.jsx)(s.u.Child, {
                        enter: (0,
                        c.Z)(d),
                        enterFrom: "opacity-0 -translate-y-2",
                        enterTo: "opacity-100 translate-y-0",
                        children: (0,
                        r.jsx)("h1", {
                            className: a,
                            children: t
                        })
                    }), (0,
                    r.jsx)(s.u.Child, {
                        enter: (0,
                        c.Z)(d, "delay-[300ms]"),
                        enterFrom: "opacity-0 -translate-y-2",
                        enterTo: "opacity-100 translate-y-0",
                        children: (0,
                        r.jsx)("p", {
                            className: i,
                            children: n
                        })
                    }), !l && (0,
                    r.jsx)(s.u.Child, {
                        enter: (0,
                        c.Z)(d, "delay-[600ms]"),
                        enterFrom: "scale-x-0",
                        enterTo: "scale-x-100",
                        children: (0,
                        r.jsx)("hr", {})
                    })]
                })
            }
        },
        5909: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return s
                }
            });
            var r = n(5893)
              , a = n(9628)
              , i = (n(7294),
            n(2962))
              , o = n(1163);
            function s(e) {
                var t = e.children
                  , n = e.title
                  , s = e.description
                  , c = e.type
                  , u = void 0 === c ? "website" : c
                  , l = (0,
                o.useRouter)();
                return (0,
                r.jsxs)(r.Fragment, {
                    children: [(0,
                    r.jsx)(i.PB, {
                        title: "/" !== l.asPath ? "".concat(n, " - ").concat("Alexandru \u0162urcanu") : n,
                        description: s,
                        canonical: "https://alexandru.so".concat(l.asPath),
                        openGraph: {
                            type: u,
                            locale: "en_IE",
                            url: "https://alexandru.so".concat(l.asPath),
                            site_name: "Alexandru \u0162urcanu"
                        },
                        twitter: {
                            site: "@pondorasti",
                            cardType: "summary_large_image"
                        }
                    }), (0,
                    r.jsx)(a.u, {
                        appear: !0,
                        show: !0,
                        as: "div",
                        enter: "transition duration-500 ease-in-out",
                        enterFrom: "opacity-0",
                        enterTo: "opacity-100",
                        leave: "transition duration-500 ease-in-out",
                        leaveFrom: "opacity-100",
                        leaveTo: "opacity-0",
                        children: t
                    })]
                })
            }
        },
        5673: function(e, t, n) {
            "use strict";
            function r(e) {
                return new Date(e.getTime() + 6e4 * e.getTimezoneOffset())
            }
            function a(e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
                  , n = function(e) {
                    return e + (e > 0 ? ["th", "st", "nd", "rd"][e > 3 && e < 21 || e % 10 > 3 ? 0 : e % 10] : "")
                }
                  , r = n(e.getDate())
                  , a = e.toLocaleDateString("en-us", {
                    month: "long"
                })
                  , i = e.toLocaleDateString("en-us", {
                    year: "numeric"
                })
                  , o = "".concat(a, " ").concat(r);
                return t && (o += " ".concat(i)),
                o
            }
            n.d(t, {
                k: function() {
                    return r
                },
                p: function() {
                    return a
                }
            })
        },
        2517: function(e, t, n) {
            "use strict";
            function r() {
                return r = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n)
                            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }
                ,
                r.apply(this, arguments)
            }
            n.r(t),
            n.d(t, {
                __N_SSG: function() {
                    return x
                },
                default: function() {
                    return b
                }
            });
            var a = n(1799)
              , i = n(5893)
              , o = n(5152)
              , s = n.n(o)
              , c = n(9008)
              , u = n.n(c);
            function l(e) {
                var t = e.children;
                return (0,
                i.jsxs)("article", {
                    className: "prose prose-neutral prose-headings:font-['IBM_Plex_Sans'] prose-headings:font-medium prose-a:no-underline prose-pre:rounded-lg prose-ul:my-5 prose-img:rounded-xl dark:prose-invert",
                    children: [(0,
                    i.jsx)(u(), {
                        children: (0,
                        i.jsx)("link", {
                            rel: "stylesheet",
                            href: "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/styles/github-dark.min.css"
                        })
                    }), (0,
                    i.jsx)("div", {
                        className: "fixed top-0 -ml-6 h-full border-l-2 border-dotted border-divider"
                    }), t]
                })
            }
            var d = n(3968)
              , p = n(2474)
              , h = n(5673)
              , f = n(5909)
              , m = {
                "dns-ad-blocker-with-pi-hole-and-docker": s()((function() {
                    return Promise.all([n.e(675), n.e(512)]).then(n.bind(n, 512))
                }
                ), {
                    loadableGenerated: {
                        webpack: function() {
                            return [512]
                        }
                    }
                }),
                "dynamic-programming-for-dummies": s()((function() {
                    return Promise.all([n.e(675), n.e(892)]).then(n.bind(n, 8892))
                }
                ), {
                    loadableGenerated: {
                        webpack: function() {
                            return [8892]
                        }
                    }
                }),
                "gmail-automatic-forwarder": s()((function() {
                    return Promise.all([n.e(675), n.e(339)]).then(n.bind(n, 4339))
                }
                ), {
                    loadableGenerated: {
                        webpack: function() {
                            return [4339]
                        }
                    }
                }),
                "rfid-hacking-101": s()((function() {
                    return n.e(689).then(n.bind(n, 9689))
                }
                ), {
                    loadableGenerated: {
                        webpack: function() {
                            return [9689]
                        }
                    }
                }),
                "custom-paging-ui-in-swiftui": s()((function() {
                    return Promise.all([n.e(675), n.e(756)]).then(n.bind(n, 6756))
                }
                ), {
                    loadableGenerated: {
                        webpack: function() {
                            return [6756]
                        }
                    }
                }),
                "recreate-apples-breathing-animation-in-swiftui-part-2": s()((function() {
                    return Promise.all([n.e(675), n.e(742)]).then(n.bind(n, 2742))
                }
                ), {
                    loadableGenerated: {
                        webpack: function() {
                            return [2742]
                        }
                    }
                }),
                "recreate-apples-breathing-animation-in-swiftui-part-1": s()((function() {
                    return Promise.all([n.e(675), n.e(525)]).then(n.bind(n, 6525))
                }
                ), {
                    loadableGenerated: {
                        webpack: function() {
                            return [6525]
                        }
                    }
                })
            }
              , x = !0;
            function b(e) {
                var t = e.meta
                  , n = e.readingTime
                  , o = m[t.slug];
                return (0,
                i.jsxs)(f.Z, {
                    title: t.title,
                    description: t.description,
                    type: "article",
                    children: [(0,
                    i.jsx)("div", {
                        className: "relative",
                        children: (0,
                        i.jsxs)("aside", {
                            className: "absolute top-0 -left-12 h-screen pr-11 text-left font-['Luxurious_Roman'] text-sm text-gray-400 [writing-mode:vertical-rl] dark:text-gray-600 md:-left-14",
                            children: [(0,
                            h.p)((0,
                            h.k)(new Date(t.publishedAt))), " \u2022 ", n, " min read"]
                        })
                    }), (0,
                    i.jsx)(p.Z, {
                        title: t.title,
                        description: t.description
                    }), (0,
                    i.jsx)(o, {
                        components: {
                            wrapper: function(e) {
                                var t = function() {
                                    return r.apply(this, arguments)
                                }({}, e);
                                return (0,
                                i.jsx)(l, (0,
                                a.Z)({}, t))
                            },
                            a: function(e) {
                                return (0,
                                i.jsx)(d.Z, {
                                    name: e.children,
                                    href: e.href || "",
                                    alt: ""
                                })
                            }
                        }
                    })]
                })
            }
        }
    }, function(e) {
        var t = function(t) {
            return e(e.s = t)
        };
        e.O(0, [197, 774, 888, 179], (function() {
            return t(4768),
            t(2500)
        }
        ));
        var n = e.O();
        _N_E = n
    }
    ]);
});    