---
title: "Recent comments"
date: 2022-10-05T20:30:38-05:00
draft: false
hidden: true
showComments: false
showDate: false
showAuthor: false
showReadingTime: false
sharingLinks: false
showPagination: false
---
<script>
  var remark_config = {
    host: "https://remark42.brndn.io",
    site_id: "brndn.io",
    theme: document.documentElement.classList.contains("dark")
      ? "dark"
      : "light",
    components: ['last-comments'],
  };
  !(function (e, n) {
    for (var o = 0; o < e.length; o++) {
      var r = n.createElement("script"),
        c = ".js",
        d = n.head || n.body;
      "noModule" in r ? ((r.type = "module"), (c = ".mjs")) : (r.async = !0),
        (r.defer = !0),
        (r.src = remark_config.host + "/web/" + e[o] + c),
        d.appendChild(r);
    }
  })(remark_config.components || ["embed"], document);
</script>
<div id="remark42"></div>
