if (jQuery(function(e) {
        if (window.outerWidth > 1250) {
            var t = e("body");
            t.show();
            var o, i = window.innerWidth,
                n = e(window),
                s = (e("#mastfoot").outerHeight(), document.getElementById("home-banner-bg"));
         
            var r = [],
                a = e(".home-banner .layer");
          
            var l, d, h, c, p = !0;

            function f() {
                e("#clientslogo").length && i > 600 && e("#clientslogo li").each(function(t, o) {
                    var i = e(o).attr("data-delay");
                    setTimeout(function() {
                        e(o).find("img").addClass("switch"), setTimeout(function() {
                            e(o).find("img").removeClass("switch")
                        }, 4500)
                    }, i)
                })
            }

            function m() {
                this.main_delay = 1e3, this.item_delay = 300, this.wrapper = document.getElementById("homeseo"), this.icons = document.querySelectorAll(".icon-wrapper"), this.lines = document.querySelectorAll(".svg-lines svg"), this.icn_animated = !1, this.lines_animated = !1;
                var t = this;
                e(".svg-lines").length && window.addEventListener("scroll", function() {
                    t.inView(t.wrapper, 500) && setTimeout(function() {
                        !1 === t.lines_animated && (t.lines_animated = !0, t.initLines())
                    }, 500), t.inView(t.wrapper, 1250) && setTimeout(function() {
                        !1 === t.icn_animated && (t.icn_animated = !0, t.addDelay())
                    }, t.main_delay)
                })
            }
            n.on("scroll", function() {
                var t = e("#homeslides-wrapp");
                if (t.length) {
                    var o = t.attr("style");
                    o && -1 === o.search("matrix") && (o = o.replace("transform: translate(", "").replace("%, 0%) translate3d(0px, 0px, 0px);", ""), (o = -1 * parseInt(o)) > 40 && p && (e(".ts-inc").each(function(t, o) {
                        setTimeout(function() {
                            var t = parseInt(e(o).text());
                            e(o).text(t + 1)
                        }, 200 * t + 500)
                    }), p = !1))
                }
            }), e("#homeslider").length && i > 1250 && (l = e("#homeslider").outerHeight(), e(".home-slide").each(function() {
                var t = e(this).outerHeight();
                e(this).css("margin-top", (l - t) / 2)
            }), d = new ScrollMagic.Controller, h = (new TimelineMax).to("#homeslides-wrapp", 1, {
                x: "-25%"
            }).to("#homeslides-wrapp", 1, {
                x: "-50%"
            }), new ScrollMagic.Scene({
                triggerElement: "#homeslider",
                triggerHook: "onLeave",
                duration: "500%"
            }).setPin("#homeslider").setTween(h).addTo(d)), c = new ScrollMagic.Controller({
                refreshInterval: 200
            }), e(".has-parallax").length && i > 1250 ? e(".has-parallax").each(function() {
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
                }).setTween(n).addTo(c)
            }) : c.destroy(!0), f(), i > 600 && setInterval(function() {
                f()
            }, 9e3), m.prototype.inView = function(e, t) {
                return window.pageYOffset + window.outerHeight > e.offsetTop + t
            }, m.prototype.initLines = function() {
                var t;
                if (t = this, e(".svg-lines").length)
                    for (var o = 0; o < t.lines.length; o++) {
                        var i = t.lines[o].getAttribute("id");
                       
                    }
            }, m.prototype.addDelay = function() {
                var t;
                if (t = this, e(".svg-lines").length) {
                    function o(e, o) {
                        setTimeout(function() {
                            e.classList.add("show")
                        }, o * t.item_delay)
                    }
                    for (var i = 0; i < t.icons.length; i++) {
                        o(t.icons[i], i)
                    }
                }
            };
            new m;

            function u(t) {
                this.wrapper = document.getElementById("scrollspy"), this.props = {
                    top: 0,
                    height: 0
                }, this.toTopBtn = document.createElement("a"), this.toBottom = document.createElement("a"), this.childs = {}, this.getPosition(), this.setPosition();
                var o = this,
                    i = ["#homewebdesign", "#homewebdev", "#homegraphdesign", "#homeseo", "#hsabout"];
                e("#scrollspy").length && (o.wrapper || (o.wrapper = document.getElementById("scrollspy")), o.getChilds(o.wrapper), setTimeout(function() {
                    o.wrapper.classList.add("page-loaded"), setTimeout(function() {
                        o.wrapper.classList.add("no-delay")
                    }, 750)
                }, 1250),  this.toTopBtn.addEventListener("click", function(e) {
                    e.preventDefault(), o.scrollGoTo("#banner", 0)
                })), window.addEventListener("scroll", function() {
                    var t, n;
                    if (e("#scrollspy").length) {
                        t = window.pageYOffset, n = document.getElementById("main").clientHeight;
                        for (sec in i)
                            if (i.hasOwnProperty(sec) && o.inView(i[sec])) {
                                for (li in o.childs) o.childs.hasOwnProperty(li) && o.childs[li] !== o.childs[sec] && o.childs[li].classList.remove("active");
                                o.childs[sec].classList.add("active")
                            } 
							e(window).scrollTop() < e(i[0]).offset().top - 300 ? (o.wrapper.classList.add("init-pos"), o.childs[0].classList.contains("active") && o.childs[0].classList.remove("active")) : (o.wrapper.classList.remove("init-pos") ? (o.wrapper.classList.add("last-item"), o.childs[4].classList.remove("active")) : o.wrapper.classList.remove("last-item"), t >= n ? o.wrapper.classList.add("hidden-nav") : o.wrapper.classList.remove("hidden-nav"))
                    }
                })
            }
            e("#scrollspy").length && i > 1250 && (t.scrollspy("refresh"), e(".nav").find("a").click(function(t) {
                t.preventDefault();
                var o = e(this).attr("href");
                e("html, body").animate({
                    scrollTop: e(o).offset().top
                }, 600)
            }), n.on("scroll", function() {
                Math.floor(e(document).height() - e(document).scrollTop() - e(window).height()) < o ? e("#scrollspy").fadeOut() : e("#scrollspy").fadeIn()
            })), u.prototype.getChilds = function(e) {
                var t = this;
                for (var o in e.childNodes[3].childNodes)
                    if (e.childNodes[3].childNodes.hasOwnProperty(o)) {
                        var i = e.childNodes[3].childNodes[o];
                        "LI" === i.tagName && (t.childs[i.getAttribute("data-index")] = i, i.childNodes[0].addEventListener("click", function(e) {
                            var o;
                            e.preventDefault(), o = 0 === this.parentNode.getAttribute("data-index") || "0" === this.parentNode.getAttribute("data-index") ? -200 : 4 === this.parentNode.getAttribute("data-index") || "4" === this.parentNode.getAttribute("data-index") ? -220 : 100, t.scrollGoTo(this.getAttribute("href"), o)
                        }))
                    }
            }, u.prototype.scrollGoTo = function(t, o) {
                if (this.wrapper) {
                    var i = e(t).offset().top;
                    e("html, body").animate({
                        scrollTop: i + o
                    })
                }
            }, u.prototype.getPosition = function() {
                if (this.wrapper) {
                    var e = document.querySelector(".banner-inner");
                    this.props = {
                        top: e.offsetTop + "px",
                        height: e.clientHeight + "px"
                    }
                }
            }, u.prototype.setPosition = function() {
                this.wrapper && (this.wrapper.style.cssText = "top:" + this.props.top + ";height:" + this.props.height)
            }, u.prototype.inView = function(t) {
                if (this.wrapper) return e(window).scrollTop() > e(t).offset().top - 300
            }, setTimeout(function() {
                new u("scrollspy")
            }, 750)
        } else e(".home-banner .banner-object > div").remove(), e(".home-banner-image").removeAttr("hidden").addClass("reset-transform"), e("#scrollspy").remove()
    }), null !== document.querySelector(".preloader-svg-wrapper")) {
    var svgElem = document.querySelector(".preloader-svg-wrapper"),
        outerPath = document.getElementById("logo-outer"),
        innerPath = document.getElementById("logo-inner"),
        outerPathLength = outerPath.getTotalLength(),
        innerPathLength = innerPath.getTotalLength();
    new Promise(function(e) {
        outerPath.style["stroke-dasharray"] = outerPathLength, outerPath.style["stroke-dashoffset"] = outerPathLength, innerPath.style["stroke-dasharray"] = innerPathLength, innerPath.style["stroke-dashoffset"] = -innerPathLength, setTimeout(function() {
            svgElem.classList.add("animate-svg-path"), outerPath.style["stroke-dashoffset"] = 0, innerPath.style["stroke-dashoffset"] = 0
        }, 100), setTimeout(function() {
            e()
        }, 2600)
    }).then(function() {
        svgElem.style.display = "none"
    })
}

