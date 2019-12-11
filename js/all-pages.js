function imgOnLoad() {
    for (var e = document.getElementsByTagName("img"), t = 0; t < e.length; t++) e[t].getAttribute("data-src") && e[t].setAttribute("src", e[t].getAttribute("data-src"))
}
window.onload = function() {
    imgOnLoad()
}, window.onbeforeunload = function() {
    window.scrollTo(0, 0)
}, jQuery(function(e) {
    var t = e("body");
    t.show();
    var o, i = window.innerWidth,
        n = e(window),
        a = e("#mastfoot").outerHeight();
    e(".l-header, .l-horizontal, .info-buttons-wrapper").addClass("show");
    var s, r = e(".container-load").innerWidth(),
        l = (n.innerWidth() - r) / 2;

    function c(e) {
        (e = e || window.event).preventDefault && e.preventDefault(), e.returnValue = !1
    }

    function d(e) {
        if (e.keyCode || e.which) return c(e), !1
    }

    function p() {
        window.removeEventListener && window.removeEventListener("DOMMouseScroll", c, !1), window.onmousewheel = document.onmousewheel = null, window.onwheel = null, window.ontouchmove = null, document.onkeydown = null
    }

    function u(e, t) {
        if ("function" == typeof jQuery && e instanceof jQuery && (e = e[0]), void 0 !== e && null !== e) {
            var o = e.getBoundingClientRect();
            return o.top >= 0 && o.left >= 0 && o.bottom <= (window.innerHeight + t || document.documentElement.clientHeight + t) && o.right <= (window.innerWidth || document.documentElement.clientWidth)
        }
    }
    e(".outer-load").css("width", l + "px"), e(".outer-load").eq(1).css("left", l + r + "px"), "true" === localStorage.getItem("page") ? setTimeout(function() {
        e(".l-loading").addClass("show"), e(".outer-load").eq(1).css({
            right: l + r + "px",
            left: "auto"
        }), e(".l-loading").addClass("hide-alt"), setTimeout(function() {
            e(".l-loading").removeClass("show"), e(".l-loading").removeClass("hide-alt"), e(".outer-load").eq(1).css({
                right: "auto",
                left: l + r + "px"
            }), localStorage.removeItem("page")
        }, 2800)
    }, 0) : e(".l-loading").removeClass("show show-darkgray"), s = e("#newsletter-subscribe").length ? e("#newsletter-subscribe").outerHeight() : 0, o = s + a + 100, i > 1025 && t.css("margin-bottom", a + "px"), setTimeout(function() {
        t.addClass("fade-lines")
    }, 700);
    var m, h, f, w, g, v = !0;

    function b(e, t, o) {
        setTimeout(function() {
            e.classList.add("show")
        }, o * t)
    }
    m = document.querySelectorAll(".banner-caption .write-text .outer-wrapper"), h = document.querySelectorAll(".scrollspy-nav li"), f = document.getElementsByTagName("body")[0], w = document.querySelectorAll(".single-portfolio-count a, #banner .animate-bigletter, .scrollspy-nav, #forms-popup .contact-us-wrapper, .scrollspy-nav span, #banner .banner-object, .breadcrumbs ul > li, .portfolio-count"), g = document.querySelectorAll(".info-buttons-wrapper .popart-btn"), setTimeout(function() {
        f.classList.remove("hide-header");
        for (var e = 0; e < w.length; e++) w[e].classList.add("show");
        for (var t = 0; t < m.length; t++) b(m[t], t, 300);
        for (var o = 0; o < h.length; o++) b(h[o], o, 200);
        p()
    }, 2e3), setTimeout(function() {
        f.classList.remove("slow-header");
        for (var e = 0; e < g.length; e++) b(g[e], e, 150);
        v = !0
    }, 3950), v = !0, e('.order-project a, .draggable-btn a, .prev-portfolio, .next-portfolio, .portfolio-project, .portfolio-a a, .info-buttons-wrapper .container a, .portfolio-item a, .page-load a, #baner-links a, #primary-nav .nav-link-wrap a, .tutorial-link a, #site-logo, .tutorial-list-wrapper a, .a.load-cta, .breadcrumbs li > a, .portfolio-wrapper a, .side-nav a:not(".social-share-link"), .footer-info a:not(".no-anim")').on("click", function(t) {
        if (t.preventDefault(), v) {
            v = !1;
            var o = e(this).attr("href");
            e(this).attr("data-href-title") && e(this).attr("data-href-title"), localStorage.setItem("page", "true"), console.log("loading.."), e(".l-loading").addClass("show show-darkgray"), setTimeout(function() {
                window.location = o
            }, 1e3)
        }
    }), e(window).on("popstate", function(t) {
        var o;
        v && (v = !1, localStorage.setItem("page", "true"), console.log("loading.."), console.log(window.history), o = null !== window.history.state ? window.history.state.href : "", e(".l-loading").addClass("show show-darkgray"), setTimeout(function() {
            window.location = o
        }, 1e3))
    });
    var y = 0;

    function C() {
        window.addEventListener && window.addEventListener("DOMMouseScroll", c, !1), window.onwheel = c, window.onmousewheel = document.onmousewheel = c, window.ontouchmove = c, document.onkeydown = d, e("#nav-btn").addClass("active"), e("#navsidebar").addClass("active"), e(".contact-us-wrapper").removeClass("show"), t.addClass("blur"), e(".menu-btn").addClass("open")
    }

    function $() {
        e("#navsidebar").removeClass("active"), e("#nav-btn").removeClass("active"), setTimeout(function() {
            e(".contact-us-wrapper").addClass("show")
        }, 500), t.removeClass("blur"), e(".menu-btn").removeClass("open"), p()
    }
    if (n.scroll(function(o) {
            var i = e(this).scrollTop(),
                n = e("#sidebar");
            window.innerWidth > 1024 ? (i > y ? (t.addClass("hide-header sticky-header"), e("#side-nav").removeClass("visible-header"), n.length && n.addClass("show")) : i <= 50 ? t.removeClass("hide-header sticky-header") : (t.removeClass("hide-header"), e("#side-nav").addClass("visible-header")), y = i) : i > 600 && (i > y ? (t.addClass("hide-header sticky-header"), e("#side-nav").removeClass("visible-header"), n.length && n.addClass("show")) : i <= 50 ? t.removeClass("hide-header sticky-header") : (t.removeClass("hide-header"), e("#side-nav").addClass("visible-header")), y = i)
        }), i > 1250 ? e("#nav-btn").on("click", function() {
            e(this).hasClass("active") ? $() : C()
        }) : (e("#nav-btn").on("click", function() {
            e(this).hasClass("active") ? $() : C()
        }), t.on("mouseup", function(t) {
            var o = e("#navsidebar");
            o.is(t.target) || 0 !== o.has(t.target).length || e("#nav-btn").is(t.target) || $()
        })), e(".sub-menu-btn").on("click", function() {
            e(this).toggleClass("open"), e(this).siblings(".sub-menu-wrapper").slideToggle()
        }), window.outerWidth > 1250) n.on("scroll", function() {
        e(".scroll-show").length && e(".scroll-show").each(function(t, o) {
            var i = e(o).outerHeight() / 2;
            if (u(e(o), i)) {
                var n = "#" + e(o).attr("id");
                e(o).find(".yellow-bg").addClass("show"), e(o).find(".yellow-block").addClass("show"), "#homeblog" == n ? e("#homeblog .outer-wrapper").addClass("show") : e(o).find(".outer-wrapper").each(function(t, o) {
                    var i = e(o).find(".outer-wrapper").length;
                    i -= e(o).find(".write-all .outer-wrapper").length;
                    var n = e(o).parent().hasClass("write-all") ? i : t;
                    setTimeout(function() {
                        e(o).addClass("show")
                    }, 300 * n)
                })
            }
       }), e(".animate-bigletter").length && e(".animate-bigletter").each(function() {
            u(e(this), 300) && e(this).addClass("show")
        }), e(".yellow-block").length && e(".yellow-block").each(function() {
            u(e(this), 300) && e(this).addClass("show")
        }), 
		/**e(".section-image").length && e(".section-image").each(function() {
            if (u(e(this), 300)) {
                e(this).addClass("show");
                var t = e(this);
                setTimeout(function() {
                    t.hasClass("plx") && t.addClass("no-delay")
                }, 500)
            }
        }), **/ 
		e(".about-testimonials").length && u(e(".testimonials-statistics"), 300) && T && (e(".ts-inc").each(function(t, o) {
            setTimeout(function() {
                var t = parseInt(e(o).text());
                e(o).text(t + 1)
            }, 200 * t + 500)
        }), T = !1)
    });
    else {
        e(".animate-bigletter").length > 0 && e("main .animate-bigletter").addClass("show"), /**e(".section-image").length > 0 && e(".section-image").addClass("show"), **/ e(".yellow-block").length > 0 && e("main .yellow-block").addClass("show"), e(".section-content").length > 0 && e("main .outer-wrapper").addClass("show");
        var k = setTimeout(function() {
            e("main").addClass("show"), clearTimeout(k)
        }, 3300)
    }
    var T = !0;
    if (n.on("scroll", function() {
            var t = e("#homeslides-wrapp");
            if (t.length) {
                var o = t.attr("style");
                o && (-1 === o.search("matrix") ? (o = o.replace("transform: translate(", "").replace("%, 0%) translate3d(0px, 0px, 0px);", ""), (o = -1 * parseInt(o)) > 40 && T && (e(".ts-inc").each(function(t, o) {
                    setTimeout(function() {
                        var t = parseInt(e(o).text());
                        e(o).text(t + 1)
                    }, 200 * t + 500)
                }), T = !1), e("#scrollspy").addClass("display-scrolling")) : e("#scrollspy").removeClass("display-scrolling"))
            }
        }), i > 1270 && function() {
            var e = document.querySelectorAll(".container")[0],
                t = document.querySelectorAll(".hi-wrapper"),
                o = window.innerWidth,
                i = (window.innerWidth - e.clientWidth - 10) / 2;
            o < 1650 && (i += (e.clientWidth - 30) / 3);
            for (var n = 0; n < t.length; n++) t[n].style.width = i + "px"
        }(), e("#toTop").on("click", function(t) {
            t.preventDefault(), e("html, body").animate({
                scrollTop: 0
            }, 750)
        }), e("#sidebar")) {
        function x(t, o) {
            this.wrapper = document.getElementById("sidebar"), this.element = document.getElementById("side-nav"), this.fixed = !1, this.itemDelay = .05, this.width = 0, this.resizeTimer = "";
            var i = this;
            setTimeout(function() {
                e("#sidebar").length && i.sidebarInit()
            }, 500)
        }
        x.prototype.sidebarInit = function() {
            var t, o;
            o = this, e("#sidebar").length && (n.width() > 1270 && (o.getWidth(), o.itemsDelay()), window.addEventListener("scroll", function() {
                o.sticky(o.wrapper)
            }), window.addEventListener("resize", function() {
                clearTimeout(t), n.width() > 1270 ? t = setTimeout(function() {
                    o.getWidth()
                }, 150) : o.wrapper.style.width = "100%"
            }))
        }, x.prototype.ajaxInit = function(e) {
            setTimeout(this.sidebarInit, e)
        }, x.prototype.itemsDelay = function() {
            var t, o, i, n, a, s, r;
            if (e("#sidebar").length) {
                for (t = (r = this).element.childNodes[1], o = r.element.childNodes[3].children, i = r.element.childNodes[7].children, n = r.itemDelay, n = (s = function(e, t) {
                        return e.style.transitionDelay = t + "s", t + r.itemDelay
                    })(t, .3), a = 0; a < o.length; a++) n = s(o[a], n);
                for (a = 0; a < i.length; a++) n = s(i[a], n)
            }
        }, x.prototype.getWidth = function() {
            var t, o, i;
            e("#sidebar").length && (i = window.innerWidth, document.getElementById("main"), t = document.querySelector(".l-horizontal"), o = 5, this.wrapper.style.width = i > 1850 ? "290px" : t.offsetLeft - o + "px")
        }, x.prototype.sticky = function(t) {
            var o, i, n, a, s;
            e("#sidebar").length && (s = document.getElementById("sidebar"), o = s.childNodes[1].childNodes[7], document.body, i = window.pageYOffset, n = document.getElementById("main").clientHeight, window.innerHeight, i >= n || (i > 90 ? (s.classList.add("show"), clearTimeout(a), a = setTimeout(function() {
                o.classList.add("no-delay")
            }, 400)) : (s.classList.remove("show"), clearTimeout(a), a = setTimeout(function() {
                o.classList.remove("no-delay")
            }, 400))))
        }, x.prototype.serializer = function() {
            var e = Array.prototype.slice.call(arguments, 0);
            return function() {
                var t, o;
                for (o = 0; o < e.length; o++)
                    if (!1 === (t = e[o].apply(this, arguments))) return t;
                return t
            }
        }, site_sidebar = new x("side-nav", "sidebar")
    }
    e(".menu-item>span").on("click", function() {
            e(this).siblings().slideToggle(), e(this).find(".menu-item-state").hasClass("open-submenu") ? (e(this).find(".menu-item-state").removeClass("open-submenu"), e(this).find(".menu-item-state").text("+")) : (e(this).find(".menu-item-state").addClass("open-submenu"), e(this).find(".menu-item-state").text("-"))
        }),
        function() {
            if (!e("#sidebar")) return !1;
            if (e("#sidebar ul li a").parent().hasClass("active-sidebar-item")) return !1;
            for (var t = e("#sidebar ul li a"), o = window.location.href, i = 0; i < t.length; i++)
                if (o.indexOf(e(t[i]).attr("href")) > -1) {
                    e(t[i]).parent().addClass("active-sidebar-item");
                    break
                }
        }(), i > 1023 && e(".x-btn").hover(function() {
            var t = e(this);
            t.addClass("hover-in"), setTimeout(function() {
                t.addClass("hover-in-alt")
            }, 175), setTimeout(function() {
                t.removeClass("hover-in-alt")
            }, 350)
        }, function() {
            var t = e(this);
            t.removeClass("hover-in"), t.removeClass("hover-in-alt")
        }), i > 1023 && e(".draggable-btn").mousedown(function(t) {
            if (t.preventDefault(), 1 === t.which) {
                var o = e(this).children(".x-btn"),
                    i = o.parent().innerHeight(),
                    n = parseInt(o.css("top")),
                    a = o.css("top", "").position().top;
                o.css({
                    top: n + "px"
                });
                var s = 0 - a,
                    r = i - a - o.outerHeight(),
                    l = t.clientY;
                e(window).on("mousemove", function(e) {
                    o.addClass("drag");
                    var t = n + (e.clientY - l);
                    o.css({
                        top: t + "px"
                    }), t < s && o.css({
                        top: s + "px"
                    }), t > r && o.css({
                        top: r + "px"
                    })
                }), e(window).on("mouseup", function(t) {
                    if (1 === t.which) {
                        o.removeClass("drag"), e(window).off("mouseup mousemove"), o.css({
                            top: 0
                        }), t.preventDefault();
                        var i = e(this).children(".x-btn").attr("href");
                        if (i) {
                            window.history.pushState({}, null, i)
                        }
                    }
                })
            }
        });
    var j, S, I, z = e("#forms-popup");

    function M(t) {
        t.show(), S = setTimeout(function() {
            t.find(".write-text .outer-wrapper").each(function(t, o) {
                setTimeout(function() {
                    e(o).addClass("show")
                }, 250 * t)
            })
        }, 700), I = setTimeout(function() {
            t.find(".fade-input").each(function(t, o) {
                setTimeout(function() {
                    e(o).addClass("show")
                }, 150 * t)
            }), t.find(".prev-form").fadeIn()
        }, 1150)
    }

    function D(t) {
        z.find(".write-text .outer-wrapper").removeClass("show"), e(".prev-form").hide(), e(".form-container").hide(), e(".fade-input").removeClass("show"), t.show()
    }


    e("#contact-us").on("click", function() {
            z.hasClass("open") ? (clearTimeout(j), clearTimeout(S), clearTimeout(I), z.find(".forms-wrapper").fadeOut(250, function() {
                D(e(this)), z.removeClass("open")
            })) : (z.addClass("open"), M(e("#chose-form")))
        }), e(".chose-btn").on("click", function() {
            var t = e(this).attr("data-btn-type"),
                o = e(this).attr("data-form");
            z.find(".forms-wrapper").fadeOut(250, function() {
                D(e(this))
            }), j = setTimeout(function() {
                M(e("open-form" == t ? "#" + o : "#chose-form"))
            }, 300)
        }), e(".carrer-btn").on("click", function() {
            var t = e(this).attr("data-btn-type"),
                o = e(this).attr("data-form");
            z.find(".forms-wrapper").fadeOut(250, function() {
                D(e(this))
            }), j = setTimeout(function() {
                M(e("open-form" == t ? "#" + o : "#chose-form"))
            }, 300)
        }), e(".carrer-btn").on("click", function() {
            e("#contact-us").trigger("click");
            var t = e(this).siblings(".section-title").text();
            "Web dizajner" == t ? t = "Web Dizajner" : "Grafički dizajner" == t ? t = "Grafički Dizajner" : "Front-end developer" == t ? t = "Front-end Developer" : "Back-end developer" == t ? t = "Back-end Developer" : "SEO specijalista" == t && (t = "SEO");
            var o = e('.f-opt:contains("' + t + '")');
            e(o).trigger("click")
        }), e(".order-btn").on("click", function() {
            var t = e(this).attr("data-btn-type"),
                o = e(this).attr("data-form");
            z.find(".forms-wrapper").fadeOut(250, function() {
                D(e(this))
            }), j = setTimeout(function() {
                M(e("open-form" == t ? "#" + o : "#chose-form"))
            }, 300)
        }), e(".order-btn").on("click", function() {
            e("#contact-us").trigger("click")
        }), e(".fake-options").on("mouseleave", function() {
            var t = e(this).siblings(".fake-select-text");
            t.hasClass("nothing-selected") ? t.text("") : t.text(e(this).siblings(".fake-select-text").attr("data-fakeval"))
        }), e(".f-opt").on("mouseenter", function() {
            e(this).parent(".fake-options").siblings(".fake-select-text").text(e(this).text())
        }), e(".f-opt").on("click", function() {
            var t = e(this).text(),
                o = e(this).parent(".fake-options").siblings(".fake-select-text");
            o.removeClass("nothing-selected"), o.addClass("selected"), o.parents(".fake-select").addClass("selected"), o.parents(".fake-select").siblings("input").val(t), o.text(t), o.attr("data-fakeval", t), o.addClass("selecting"), e(".budget-hidden-input").val(t), setTimeout(function() {
                o.removeClass("selecting")
            }, 500)
        }), e(".fake-input-file").on("click", function() {
            e(this).next('input[type="file"]').trigger("click")
        }), e('input[type="file"]').on("change", function() {
            var t = e(this).val();
            e(this)[0].files.length > 1 ? e(this).prev(".fake-input-file").text(e(this)[0].files.length + " files were added.") : e(this).prev(".fake-input-file").text(t)
        }),
        function() {
            if (e(".company-info-holder").length) {
                var t = 160;
                i < 1650 && (t = 360);
                var o = e(".company-info-holder").offset().top,
                    n = e(".contact-page").offset().top - (e(window).height() - e(".contact-page").innerHeight() - t);
                e(window).on("scroll", function(t) {
                    e(window).scrollTop() >= n ? e(".maps").addClass("bottom-map") : e(".maps").removeClass("bottom-map"), e(this).scrollTop() >= o && e(window).scrollTop() <= n ? e(".maps").addClass("fix-map") : e(".maps").removeClass("fix-map")
                })
            }
            i < 767 && e(".map-init").on("click", function(t) {
                e("html,body").animate({
                    scrollTop: e(".maps").offset().top - 78
                }, 400)
            })
        }(), e(".accordion .x-btn").on("click", function(t) {
            t.preventDefault();
            var o = document.querySelectorAll(".accordion"),
                i = this.parentNode.parentNode;
            if (i.classList.contains("active-acc")) i.classList.remove("active-acc"), i.children[0].style.maxHeight = "120px";
            else {
                for (var n = 0; n < o.length; n++) o[n].classList.contains("active-acc") && (o[n].classList.remove("active-acc"), o[n].children[0].style.maxHeight = "120px");
                i.classList.add("active-acc"), i.children[0].style.maxHeight = i.scrollHeight + "px"
            }
            setTimeout(function() {
                var t;
                t = e(i), e("html, body").animate({
                    scrollTop: t.offset().top + 100
                }, 500)
            }, 700)
        }), 


    e(".no-robot-input").on("copy paste cut", function() {
        return !1
    }), n.on("scroll", function() {
        e(".team-page").length && n.scrollTop() > e("#banner").outerHeight() ? e("#dropper").addClass("show") : e("#dropper").removeClass("show"), Math.floor(e(document).height() - e(document).scrollTop() - e(window).height()) < o ? e("#dropper").addClass("hide-alt") : e("#dropper").removeClass("hide-alt")
    }), e("#team-popup").length > 0 && (L = e("#team-popup"), i > 1250 && (e(".team-member-container").draggable({
        scroll: !0,
        scrollSensitivity: 100,
        revert: "invalid",
        containment: "#main"
    }), e(".team-member-container").each(function(t, o) {
        var i = e(o).css("left"),
            n = e(o).css("top");
        e(o).attr("data-left", i), e(o).attr("data-top", n)
    })), i > 1250 ? e("#dropper").droppable({
        drop: function(t, o) {
            var i = o.draggable,
                n = e(i).attr("data-left"),
                a = e(i).attr("data-top");
            i.addClass("dropped"), q(i, n, a)
        }
    }) : e(".team-member-container").on("click", function() {
        q(e(this))
    }), e(".team-member-container").on("mousedown", function() {
        e(".team-member-container").removeClass("last-moved"), e(this).addClass("last-moved")
    }), L.find(".close-btn").on("click", function() {
        L.removeClass("open"), L.find("img").remove(), L.find(".team-img-wrapper").css({
            right: "-50vw",
            opacity: 0
        }), setTimeout(function() {
            L.find(".member-info").remove()
        }, 2e3)
    })), e(".has-parallax").length && i > 1250 && void 0 !== window.ScrollMagic && (scrollController = new ScrollMagic.Controller({
        refreshInterval: 200
    }), e(".has-parallax").each(function() {
        var t = "#" + e(this).attr("id"),
            o = t + " .parallax";
        e(o).css("top", e(o).data("offset"));
        var i = e(o).data("parallax-offset"),
            n = (new TimelineMax).add([TweenMax.fromTo(o, 2, {
                css: {
                    y: 0
                }
            }, {
                css: {
                    y: i
                },
                ease: Power1.easeout
            })]);
        new ScrollMagic.Scene({
            triggerElement: t,
            duration: e("#main").height()
        }).setTween(n).addTo(scrollController)
    })), e(".main-portfolio-image").length > 0 && e(document).on("scroll", function() {
        if (window.innerWidth <= 1023) e(".single-portfolio-slider-wrapper").css({
            visibility: "visible",
            opacity: 1
        });
        else {
            var t = e(".main-portfolio-image"),
                o = e(window).scrollTop(),
                i = t.offset().top - o;
            t.position().top + t.outerHeight(!0) - o < 0 ? e(".single-portfolio-slider-wrapper").css({
                visibility: "hidden",
                opacity: 0
            }) : i < 0 ? e(".single-portfolio-slider-wrapper").css({
                visibility: "visible",
                opacity: 1
            }) : e(".single-portfolio-slider-wrapper").css({
                visibility: "hidden",
                opacity: 0
            })
        }
    }), e(".scroll-btn").fadeIn(3e3).css("display", "inline-block"), e(".mouse").fadeIn(3e3).css("display", "inline-block"), e(".mouse span").fadeIn(3e3).css("display", "inline-block"), e(".portfolio-cat").click(function() {
        e("html,body").animate({
            scrollTop: e("#name-a").offset().top
        }, "slow")
    }), e(".narucivanje-info-buttons-wrapper .popart-btn").click(function() {
        e("html, body").animate({
            scrollTop: e(".page-order").offset().top
        }, 2e3)
    })
}),

 $(".showcase-img-trigger").length > 0 && function() {
    var e, t, o = $(".showcase-img-trigger"),
        i = (o.length, !0);



}();