let isScriptsLoaded = false;
function loadDelayjs() {
    if (isScriptsLoaded) return;
    isScriptsLoaded = true;
    {
        var script = document.createElement("script");
        script.defer = true;
        script.type = "text/javascript";
        script.src = "./template/Default/js/cus_osg_js/formtt-chitietsp.js";
        document.body.appendChild(script);
    }
    {
        (function (w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({
                "gtm.start": new Date().getTime(),
                event: "gtm.js",
            });
            var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l !== "dataLayer" ? "&l=" + l : "";
            j.async = true;
            j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
            f.parentNode.insertBefore(j, f);
        })(window, document, "script", "dataLayer", "GTM-MS8RHDR");
        var script = document.createElement("script");
        script.async = true;
        script.src = "https://www.googletagmanager.com/gtag/js?id=G-87DQ13Y8ZH";
        document.head.appendChild(script);
        window.dataLayer = window.dataLayer || [];
        function gtag() {
            dataLayer.push(arguments);
        }
        gtag("js", new Date());
        gtag("config", "G-87DQ13Y8ZH");
    }
    {
        var script = document.createElement("script");
        script.async;
        script.src = "https://www.googletagmanager.com/gtag/js?id=AW-942676213";
        document.head.appendChild(script);
        window.dataLayer = window.dataLayer || [];
        function gtag() {
            dataLayer.push(arguments);
        }
        gtag("js", new Date());
        gtag("config", "AW-942676213");
    }
    {
        !(function (f, b, e, v, n, t, s) {
            if (f.fbq) return;
            n = f.fbq = function () {
                n.callMethod
                    ? n.callMethod.apply(n, arguments)
                    : n.queue.push(arguments);
            };
            if (!f._fbq) f._fbq = n;
            n.push = n;
            n.loaded = !0;
            n.version = "2.0";
            n.queue = [];
            t = b.createElement(e);
            t.async = !0;
            t.src = v;
            s = b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t, s);
        })(
            window,
            document,
            "script",
            "https://connect.facebook.net/en_US/fbevents.js",
        );
        fbq("init", "1438478740157930");
        fbq("track", "PageView");
    }
    {
        document.getElementById("fb-iframe-placeholder").innerHTML =
            ` <iframe src="https://www.facebook.com/plugins/page.php?adapt_container_width=true&amp;app_id=&amp;channel=https://www.facebook.com/officesaigon.vn&amp;container_width=295&amp;height=400&amp;hide_cover=false&amp;href=https://www.facebook.com/officesaigon.vn&amp;locale=vi_VN&amp;sdk=joey&amp;show_facepile=true&amp;small_header=false&amp;tabs=timeline" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" loading="lazy" width="295" height="440" style="border:none;overflow:hidden; border-radius: 8px; height: 440px;" title="Office Saigon Facebook Page"></iframe>`;
    }
}
["click", "mousemove", "scroll"].forEach((event) =>
    window.addEventListener(event, loadDelayjs, {
        once: true,
    }),
);
