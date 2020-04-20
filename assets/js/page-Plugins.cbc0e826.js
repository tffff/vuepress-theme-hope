(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{431:function(s,t,e){s.exports=e.p+"assets/img/architecture.9a93cf6c.png"},573:function(s,t,e){"use strict";e.r(t);var n=e(1),a=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"introduction"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[s._v("#")]),s._v(" Introduction")]),s._v(" "),n("p",[s._v("Plugins generally add global-level functionality to VuePress.")]),s._v(" "),n("p",[s._v("The architecture of the whole plugin system is as follows:")]),s._v(" "),n("p",[n("img",{attrs:{src:e(431),alt:"architecture"}})]),s._v(" "),n("h2",{attrs:{id:"using-a-plugin"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#using-a-plugin"}},[s._v("#")]),s._v(" Using a plugin")]),s._v(" "),n("p",[s._v("You can use plugins by doing some configuration at "),n("code",[s._v(".vuepress/config.js")]),s._v(":")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[s._v("module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  plugins"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./my-plugin.js'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h3",{attrs:{id:"use-plugins-from-a-dependency"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#use-plugins-from-a-dependency"}},[s._v("#")]),s._v(" Use plugins from a dependency")]),s._v(" "),n("p",[s._v("A plugin can be published on npm in "),n("code",[s._v("CommonJS")]),s._v(" format as "),n("code",[s._v("vuepress-plugin-xxx")]),s._v(". You can use it:")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[s._v("module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  plugins"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'vuepress-plugin-xx'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("If you prefix the plugin with "),n("code",[s._v("vuepress-plugin-")]),s._v(", you can use a shorthand to leave out that prefix:")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[s._v("module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  plugins"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'xxx'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("Same with:")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[s._v("module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  plugins"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'vuepress-plugin-xxx'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("This also works with "),n("a",{attrs:{href:"https://docs.npmjs.com/misc/scope",target:"_blank",rel:"noopener noreferrer"}},[s._v("Scoped Packages"),n("OutboundLink")],1),s._v(":")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[s._v("module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  plugins"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@org/vuepress-plugin-xxx'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@vuepress/plugin-xxx'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("Shorthand:")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[s._v("module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  plugins"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@org/xxx'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@vuepress/xxx'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[s._v("Note")]),s._v(" "),n("p",[s._v("The plugin whose name starts with "),n("code",[s._v("@vuepress/plugin-")]),s._v(" is an officially maintained plugin.")])]),s._v(" "),n("h2",{attrs:{id:"plugin-options"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#plugin-options"}},[s._v("#")]),s._v(" Plugin options")]),s._v(" "),n("p",[s._v("Config it by "),n("code",[s._v("pugins")]),s._v(" in "),n("code",[s._v("config.js")]),s._v(".")]),s._v(" "),n("h3",{attrs:{id:"babel-style"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#babel-style"}},[s._v("#")]),s._v(" Babel Style")]),s._v(" "),n("p",[s._v("Plugins can have options specified by wrapping the name and an options object in an array inside your config:")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[s._v("module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  plugins"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'vuepress-plugin-xxx'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* options */")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[s._v("Since this style is consistent with "),n("a",{attrs:{href:"https://babeljs.io/docs/en/plugins#plugin-preset-options",target:"_blank",rel:"noopener noreferrer"}},[s._v("babel’s Plugin/Preset Options"),n("OutboundLink")],1),s._v(", we call it "),n("code",[s._v("Babel Style")]),s._v(".")]),s._v(" "),n("h3",{attrs:{id:"object-style"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#object-style"}},[s._v("#")]),s._v(" Object Style")]),s._v(" "),n("p",[s._v("VuePress also provides a simpler way to use plugins from a dependency:")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[s._v("module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  plugins"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'xxx'")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* options */")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[s._v("Note")]),s._v(" "),n("p",[s._v("Prefer "),n("strong",[s._v("Babel Style")]),s._v(" first, because some plugins can have muti instance.")])]),s._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[s._v("Tips")]),s._v(" "),n("p",[s._v("The plugin can be disabled when "),n("code",[s._v("false")]),s._v(" is explicitly passed as option.")]),s._v(" "),n("ul",[n("li",[s._v("Babel style")])]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[s._v("module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  plugins"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'xxx'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// disabled.")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("ul",[n("li",[s._v("Object style")])]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[s._v("module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  plugins"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'xxx'")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// disabled.")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])])]),s._v(" "),n("h2",{attrs:{id:"official-plugins"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#official-plugins"}},[s._v("#")]),s._v(" Official Plugins")]),s._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://v1.vuepress.vuejs.org/plugin/official/plugin-active-header-links.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("active-header-links"),n("OutboundLink")],1),s._v(": A plugin of automatically activating sidebar links when page scrolls")]),s._v(" "),n("li",[n("a",{attrs:{href:"https://v1.vuepress.vuejs.org/plugin/official/plugin-back-to-top.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("back-to-top"),n("OutboundLink")],1),s._v(": Add the Back-to-top button")]),s._v(" "),n("li",[n("a",{attrs:{href:"https://v1.vuepress.vuejs.org/plugin/official/plugin-google-analytics.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("google-analytics"),n("OutboundLink")],1),s._v("：Add Google analytics")]),s._v(" "),n("li",[n("a",{attrs:{href:"https://v1.vuepress.vuejs.org/plugin/official/plugin-last-updated.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("last-updated"),n("OutboundLink")],1),s._v(": Update last edit time")]),s._v(" "),n("li",[n("a",{attrs:{href:"https://v1.vuepress.vuejs.org/plugin/official/plugin-medium-zoom.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("medium-zoom"),n("OutboundLink")],1),s._v(": Picture Zoom")]),s._v(" "),n("li",[n("a",{attrs:{href:"https://v1.vuepress.vuejs.org/plugin/official/plugin-nprogress.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("nprogress"),n("OutboundLink")],1),s._v(": A progress bar plugin based on nprogress")]),s._v(" "),n("li",[n("a",{attrs:{href:"https://v1.vuepress.vuejs.org/plugin/official/plugin-pwa.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("PWA"),n("OutboundLink")],1),s._v(": Surport for "),n("strong",[s._v("Progressive Web App")])]),s._v(" "),n("li",[n("a",{attrs:{href:"https://v1.vuepress.vuejs.org/plugin/official/plugin-register-components.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("register-component"),n("OutboundLink")],1),s._v(": register components")]),s._v(" "),n("li",[n("a",{attrs:{href:"https://v1.vuepress.vuejs.org/plugin/official/plugin-search.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("search"),n("OutboundLink")],1),s._v(": Headers-based search plugin")])]),s._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[s._v("Tips")]),s._v(" "),n("p",[s._v("More configuration, please view"),n("a",{attrs:{href:"https://v1.vuepress.vuejs.org/plugin/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Vuepress Plugins"),n("OutboundLink")],1)])]),s._v(" "),n("h2",{attrs:{id:"community-plugins"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#community-plugins"}},[s._v("#")]),s._v(" Community Plugins")]),s._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://vuepress.github.io/en/plugins/clean-urls.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("clean-urls"),n("OutboundLink")],1),s._v(": Use clean urls in VuePress")]),s._v(" "),n("li",[n("a",{attrs:{href:"https://vuepress.github.io/en/plugins/container.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("container"),n("OutboundLink")],1),s._v(": Use markdown containers in VuePress")]),s._v(" "),n("li",[n("a",{attrs:{href:"https://vuepress.github.io/en/plugins/copyright.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("copyright"),n("OutboundLink")],1),s._v(": 在 VuePress 中处理复制行为")]),s._v(" "),n("li",[n("a",{attrs:{href:"https://vuepress.github.io/en/plugins/dehydrate.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("dehydrate"),n("OutboundLink")],1),s._v(": Dehydrate HTML files in VuePress")]),s._v(" "),n("li",[n("a",{attrs:{href:"https://vuepress.github.io/en/plugins/git-log.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("git-log"),n("OutboundLink")],1),s._v(": Integrate git logs into VuePress")]),s._v(" "),n("li",[n("a",{attrs:{href:"https://vuepress.github.io/en/plugins/mathjax.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("mathjax"),n("OutboundLink")],1),s._v(": Use TeX syntax in VuePress")]),s._v(" "),n("li",[n("a",{attrs:{href:"https://vuepress.github.io/en/plugins/migrate.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("migrate"),n("OutboundLink")],1),s._v(": Migrate another website to VuePress")]),s._v(" "),n("li",[n("a",{attrs:{href:"https://vuepress.github.io/en/plugins/named-chunks.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("named-chunks"),n("OutboundLink")],1),s._v(": Generate named chunks in VuePress")]),s._v(" "),n("li",[n("a",{attrs:{href:"https://vuepress.github.io/en/plugins/redirect.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("redirect"),n("OutboundLink")],1),s._v(": Handle redirections in VuePress")]),s._v(" "),n("li",[n("a",{attrs:{href:"https://vuepress.github.io/en/plugins/serve.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("serve"),n("OutboundLink")],1),s._v(": Serve generated files in VuePress")]),s._v(" "),n("li",[n("a",{attrs:{href:"https://vuepress.github.io/en/plugins/zooming.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("zooming"),n("OutboundLink")],1),s._v(": Make images zoomable in VuePress (with zooming)")])]),s._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[s._v("Tips")]),s._v(" "),n("p",[s._v("For more infomation, please visit "),n("a",{attrs:{href:"https://vuepress.github.io/en/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Vuepress Community"),n("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=a.exports}}]);