if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,i,d)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const c={uri:location.origin+a.slice(1)};return Promise.all(i.map(a=>{switch(a){case"exports":return s;case"module":return c;default:return e(a)}})).then(e=>{const a=d(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-1a661b4a"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"404.html",revision:"4ed17b1e7fcf8e12dc7695d7992d7880"},{url:"article/index.html",revision:"7f48ac02f3d148e420f08db78985370e"},{url:"assets/css/0.styles.27f86d28.css",revision:"fdd1dc346fe5fb7c7d7ce1a3b563d58a"},{url:"assets/fonts/KaTeX_AMS-Regular.7f06b4e3.woff",revision:"7f06b4e30317f784d61d26686aed0ab2"},{url:"assets/fonts/KaTeX_AMS-Regular.aaf4eee9.ttf",revision:"aaf4eee9fba9907d61c3935e0b6a54ae"},{url:"assets/fonts/KaTeX_AMS-Regular.e78e28b4.woff2",revision:"e78e28b4834954df047e4925e9dbf354"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.021dd4dc.ttf",revision:"021dd4dc61ee5f5cdf315f43b48c094b"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.1e802ca9.woff",revision:"1e802ca9dedc4ed4e3c6f645e4316128"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.4ec58bef.woff2",revision:"4ec58befa687e9752c3c91cd9bcf1bcb"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.7edb53b6.woff2",revision:"7edb53b6693d75b8a2232481eea1a52c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d3b46c3a.woff",revision:"d3b46c3a530116933081d9d74e3e9fe8"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d49f2d55.ttf",revision:"d49f2d55ce4f40f982d8ba63d746fbf9"},{url:"assets/fonts/KaTeX_Fraktur-Bold.a31e7cba.ttf",revision:"a31e7cba7b7221ebf1a2ae545fb306b2"},{url:"assets/fonts/KaTeX_Fraktur-Bold.c4c8cab7.woff",revision:"c4c8cab7d5be97b2bb283e531c077355"},{url:"assets/fonts/KaTeX_Fraktur-Bold.d5b59ec9.woff2",revision:"d5b59ec9764e10f4a82369ae29f3ac58"},{url:"assets/fonts/KaTeX_Fraktur-Regular.32a5339e.woff2",revision:"32a5339eb809f381a7357ba56f82aab3"},{url:"assets/fonts/KaTeX_Fraktur-Regular.a48dad4f.ttf",revision:"a48dad4f58c82e38a10da0ceebb86370"},{url:"assets/fonts/KaTeX_Fraktur-Regular.b7d9c46b.woff",revision:"b7d9c46bff5d51da6209e355cc4a235d"},{url:"assets/fonts/KaTeX_Main-Bold.22086eb5.woff",revision:"22086eb5d97009c3e99bcc1d16ce6865"},{url:"assets/fonts/KaTeX_Main-Bold.8e1e01c4.woff2",revision:"8e1e01c4b1207c0a383d9a2b4f86e637"},{url:"assets/fonts/KaTeX_Main-Bold.9ceff51b.ttf",revision:"9ceff51b3cb7ce6eb4e8efa8163a1472"},{url:"assets/fonts/KaTeX_Main-BoldItalic.284a17fe.woff2",revision:"284a17fe5baf72ff8217d4c7e70c0f82"},{url:"assets/fonts/KaTeX_Main-BoldItalic.4c57dbc4.woff",revision:"4c57dbc44bfff1fdf08a59cf556fdab3"},{url:"assets/fonts/KaTeX_Main-BoldItalic.e8b44b99.ttf",revision:"e8b44b990516dab7937bf240fde8b46a"},{url:"assets/fonts/KaTeX_Main-Italic.29c86397.ttf",revision:"29c86397e75cdcb3135af8295f1c2e28"},{url:"assets/fonts/KaTeX_Main-Italic.99be0e10.woff",revision:"99be0e10c38cd42466e6fe1665ef9536"},{url:"assets/fonts/KaTeX_Main-Italic.e533d5a2.woff2",revision:"e533d5a2506cf053cd671b335ec04dde"},{url:"assets/fonts/KaTeX_Main-Regular.5c734d78.woff2",revision:"5c734d78610fa35282f3379f866707f2"},{url:"assets/fonts/KaTeX_Main-Regular.5c94aef4.ttf",revision:"5c94aef490324b0925dbe5f643e8fd04"},{url:"assets/fonts/KaTeX_Main-Regular.b741441f.woff",revision:"b741441f6d71014d0453ca3ebc884dd4"},{url:"assets/fonts/KaTeX_Math-BoldItalic.9a2834a9.ttf",revision:"9a2834a9ff8ab411153571e0e55ac693"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b13731ef.woff",revision:"b13731ef4e2bfc3d8d859271e39550fc"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d747bd1e.woff2",revision:"d747bd1e7a6a43864285edd73dcde253"},{url:"assets/fonts/KaTeX_Math-Italic.291e76b8.ttf",revision:"291e76b8871b84560701bd29f9d1dcc7"},{url:"assets/fonts/KaTeX_Math-Italic.4ad08b82.woff2",revision:"4ad08b826b8065e1eab85324d726538c"},{url:"assets/fonts/KaTeX_Math-Italic.f0303906.woff",revision:"f0303906c2a67ac63bf1e8ccd638a89e"},{url:"assets/fonts/KaTeX_SansSerif-Bold.3fb41955.woff",revision:"3fb419559955e3ce75619f1a5e8c6c84"},{url:"assets/fonts/KaTeX_SansSerif-Bold.6e0830be.woff2",revision:"6e0830bee40435e72165345e0682fbfc"},{url:"assets/fonts/KaTeX_SansSerif-Bold.7dc027cb.ttf",revision:"7dc027cba9f7b11ec92af4a311372a85"},{url:"assets/fonts/KaTeX_SansSerif-Italic.4059868e.ttf",revision:"4059868e460d2d2e6be18e180d20c43d"},{url:"assets/fonts/KaTeX_SansSerif-Italic.727a9b0d.woff",revision:"727a9b0d97d72d2fc0228fe4e07fb4d8"},{url:"assets/fonts/KaTeX_SansSerif-Italic.fba01c9c.woff2",revision:"fba01c9c6fb2866a0f95bcacb2c187a5"},{url:"assets/fonts/KaTeX_SansSerif-Regular.2555754a.woff",revision:"2555754a67062cac3a0913b715ab982f"},{url:"assets/fonts/KaTeX_SansSerif-Regular.5c58d168.ttf",revision:"5c58d168c0b66d2c32234a6718e74dfb"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d929cd67.woff2",revision:"d929cd671b19f0cfea55b6200fb47461"},{url:"assets/fonts/KaTeX_Script-Regular.755e2491.woff2",revision:"755e2491f13b5269f0afd5a56f7aa692"},{url:"assets/fonts/KaTeX_Script-Regular.d12ea9ef.ttf",revision:"d12ea9efb375f9dc331f562e69892638"},{url:"assets/fonts/KaTeX_Script-Regular.d524c9a5.woff",revision:"d524c9a5b62a17f98f4a97af37fea735"},{url:"assets/fonts/KaTeX_Size1-Regular.7342d45b.ttf",revision:"7342d45b052c3a2abc21049959fbab7f"},{url:"assets/fonts/KaTeX_Size2-Regular.eb130dcc.ttf",revision:"eb130dcc661de766c999c60ba1525a88"},{url:"assets/fonts/KaTeX_Size4-Regular.ad767252.ttf",revision:"ad7672524b64b730dfd176140a8945cb"},{url:"assets/fonts/KaTeX_Typewriter-Regular.25702356.ttf",revision:"257023560753aeb0b89b7e434d3da17f"},{url:"assets/fonts/KaTeX_Typewriter-Regular.3fe216d2.woff",revision:"3fe216d2a5f736c560cde71984554b64"},{url:"assets/fonts/KaTeX_Typewriter-Regular.6cc31ea5.woff2",revision:"6cc31ea5c223c88705a13727a71417fa"},{url:"assets/icon/appleIcon152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/msIcon144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/architecture.9a93cf6c.png",revision:"9a93cf6cea38878e19c5816d1af28b17"},{url:"assets/img/blog.9a633287.png",revision:"9a633287cd74c5446a945458e904868f"},{url:"assets/img/category.30dc2bc0.png",revision:"30dc2bc01f51b2ead2def19517a298e4"},{url:"assets/img/darkmode.b09eae23.png",revision:"b09eae237bfb38394da644b422dd66cf"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/home.ab88bd60.png",revision:"ab88bd60aba3206fcfd93c7182f0fffb"},{url:"assets/img/home.fbb29418.png",revision:"fbb29418c5c550a0bccaf6e4a62d55c3"},{url:"assets/img/homeImage.56f13b5d.jpg",revision:"56f13b5d598a4feab49dd969ac9fd2ff"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/js/120.e69edf41.js",revision:"6cecd076c25c46f0703fade0cc50aff4"},{url:"assets/js/app.ccc31106.js",revision:"9831709af92283c841f98360734855c0"},{url:"assets/js/layout-Blog.20ddcd88.js",revision:"c8220c6bbfc3c6fd3671edf9c807e0cc"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.63a28829.js",revision:"9c489b2ee70ad31c44a8aa65a0de8a57"},{url:"assets/js/layout-Layout.43c1f351.js",revision:"93e3f8b3a1f6dfa98cc4b2bbb2760d35"},{url:"assets/js/layout-NotFound.70ae315b.js",revision:"3bca02e2bda889b102fffef34c9084ea"},{url:"assets/js/page-@mr-hopelast-update--1104de32.31ae5bb6.js",revision:"f657ac6d5ddc004dc8b4554adccc5ecd"},{url:"assets/js/page-@mr-hopelast-update--ebefb430.085f085a.js",revision:"4f0570fe7b8284e752cf506e3278f8c3"},{url:"assets/js/page-@mr-hopeplugin-pwa--1c9738b4.c09e788c.js",revision:"040076733854c81ec97cb524ec1ec1a1"},{url:"assets/js/page-@mr-hopepwa--051692f2.f73fcba0.js",revision:"e995cf22ed45f60d1993752137c5c054"},{url:"assets/js/page-@mr-hopereading-time--36317372.14d40830.js",revision:"02e80c64dba9f62ab99ebd50d329c060"},{url:"assets/js/page-@mr-hopereading-time--36b7a178.cc83d4c0.js",revision:"b7fba69d9b78ee293a99e004732c7c44"},{url:"assets/js/page-@mr-hopeseo--44db09a4.005227b4.js",revision:"56e32ef84485cc2fe085bd8ec436cbc7"},{url:"assets/js/page-@mr-hopeseo--4c19db12.5709c289.js",revision:"78fa2a9baa3e91066a180e51d93bd987"},{url:"assets/js/page-@mr-hopesitemap--4bd3dd04.c479d3ac.js",revision:"240ce36e0771ec767b4bb6dd6dec450a"},{url:"assets/js/page-@mr-hopesitemap--7a219d12.9d364e53.js",revision:"6ee100545450c3383fb03c7ae452bbc3"},{url:"assets/js/page-AboutVuepress--5d12de02.19fc8275.js",revision:"21dbea1f1262b552d71e9754f4568d2a"},{url:"assets/js/page-Basic--29b12659.59dea662.js",revision:"84251e883316b813fc16657fb08c8354"},{url:"assets/js/page-Bloghomepage--d988383c.f2a703ad.js",revision:"00b3ef1543de97532c377c56f2634aae"},{url:"assets/js/page-Blogrelated--7c1e4552.09d2affb.js",revision:"6673d1ae97f5534df30cc5623e4dbe08"},{url:"assets/js/page-CommentFunction--6884a164.5e0b4c46.js",revision:"da3998268c00ffd784f4e71b7b10a31a"},{url:"assets/js/page-Commonproblems--87e54bce.a1c93fc6.js",revision:"e266a44d516fcdf588082e7a2783c7f0"},{url:"assets/js/page-ConfigDocs--2082c612.60a39be0.js",revision:"fd1658f20a072d0bccc10896d85ed6da"},{url:"assets/js/page-Customalignment--df6a559c.111a9b27.js",revision:"95e33b1a41502c52704e0e91164cbb4a"},{url:"assets/js/page-DarkmodeandThemecolor--57fce360.440d5932.js",revision:"4b8fe513996e997d4fedc80bf20c7b86"},{url:"assets/js/page-Demos--cac80116.6e376fb0.js",revision:"d7d6221eb7d5066b2d2e201510c586fa"},{url:"assets/js/page-EmojiList--b946d226.98b3c120.js",revision:"554ad343eac5d0ac5361f614a5425be1"},{url:"assets/js/page-Emoji列表--41bb29b9.20a1277a.js",revision:"ce8df72356e9bbd4343b9274444226c1"},{url:"assets/js/page-Encryptionfunction--21c8c5d8.17ed439c.js",revision:"5d6846d51775cbf6e6a90bbd683421a1"},{url:"assets/js/page-FileStructure--5dff5230.f95e6edc.js",revision:"edd23aa32e0c312e11203f4d70ef5507"},{url:"assets/js/page-Flowchart--6426e412.b60767b7.js",revision:"2207f3696514ac3953214c02949d55ac"},{url:"assets/js/page-Footnote--3a89d162.53c74ad5.js",revision:"51734bd9ebadbd472dada69c226fe87c"},{url:"assets/js/page-HomePage--37b81ca8.427efae2.js",revision:"b6089cce2e7853ec693b32462c1f7702"},{url:"assets/js/page-InstallUsage--5dafe67a.57dbad14.js",revision:"ce1b3cd1c3cf9bf132f5004a0fd70fc6"},{url:"assets/js/page-Introduction--0b048d19.16fc72d0.js",revision:"876914c9c27a088788027cd2ff6ddc40"},{url:"assets/js/page-Layout--655201fe.06d727cd.js",revision:"da2cea6e52bd312c9f3ca0e153c759e2"},{url:"assets/js/page-MarkdownDEMO--ab10bb74.a83cdcfe.js",revision:"e606877966ced86d624dd4bfd2195097"},{url:"assets/js/page-MarkdownEnhance--ed59a9f6.4271de73.js",revision:"983dd98d164c62db20fa37d73f700da5"},{url:"assets/js/page-MarkdownIntroduction--25c54f9b.2acc5e57.js",revision:"316aabf398c5a83745c39fe86a20aa33"},{url:"assets/js/page-Markdown介绍--270989ce.af76cb85.js",revision:"512dcf61ebf838085c98b0785f75593d"},{url:"assets/js/page-Markdown增强--ad9dba8e.d38c512b.js",revision:"4cc28f8286fab56fd57fc553d54f2c11"},{url:"assets/js/page-Markdown示例--c3e1bfdc.5b28e8a6.js",revision:"a678bd1a1db6c7837450fed62a751933"},{url:"assets/js/page-Markup--4f1121f0.36231acd.js",revision:"03caba63857daee9c4493dd0531e12f6"},{url:"assets/js/page-Nature--5c9d3e6c.6cc2e590.js",revision:"7792c6b4ed8d30c7420e7325297e5810"},{url:"assets/js/page-NavBar--262632f4.23703188.js",revision:"214d25879da0754031f645421d82db40"},{url:"assets/js/page-NewComponent--2edd3b68.5a089a4f.js",revision:"595a14f0c1ae525a2f9356b843996445"},{url:"assets/js/page-Newfeature--3e66b879.c605a7cd.js",revision:"2ffd78ed36cf0cee0a433ea49ef18b36"},{url:"assets/js/page-Object--6d31953c.0cc9afab.js",revision:"09f716ff9a84f62379dd8268c63f8590"},{url:"assets/js/page-Page--26692570.002f7b29.js",revision:"a06ff2240f5a00866ca145beacd77453"},{url:"assets/js/page-PageConfiguration--493c56dc.9271ec1e.js",revision:"c792d3d571341314146e67fd1eb0ca7a"},{url:"assets/js/page-Pageinformation--6abfca0a.d7a8f51e.js",revision:"b4d8b164d5a919915409a695583fc716"},{url:"assets/js/page-People--f94822c8.eadb8466.js",revision:"a93df9b2251a403dfde93276f1e14c0c"},{url:"assets/js/page-photo-swipe--34ea45d2.39e262a1.js",revision:"1fa090438a5292b32bed6683decbcd3c"},{url:"assets/js/page-photo-swipe--7be1a0aa.33a7d3ea.js",revision:"78090f189ee661246c85ac79f5c80598"},{url:"assets/js/page-Place--32291f32.2814cb86.js",revision:"bcb3c0b03e4effbb9431b4c7c4eddc62"},{url:"assets/js/page-PluginDescription--b08a3ace.40407c50.js",revision:"605143335e2f198481fd04db53546da0"},{url:"assets/js/page-Plugins--1a5ef242.21aaa49c.js",revision:"a19f7911aa7161ff3b069231be976a7a"},{url:"assets/js/page-SEOandSitemap--13a48dac.40513469.js",revision:"cd13010eb1207a6cd52172f0bed89ba1"},{url:"assets/js/page-SEO和Sitemap--5934b3b2.c52449cc.js",revision:"6b24cb62aa75d14ea747e3d7d835e274"},{url:"assets/js/page-Sidebar--12800fd2.21b6cbe0.js",revision:"78b463e8fe8e6c9c155ceb1d4e599abb"},{url:"assets/js/page-stylusconfiguration--189ec968.c5b40e81.js",revision:"01d2cad4c0c341e128381a3dede77a4b"},{url:"assets/js/page-stylus配置--6796cdf2.29388386.js",revision:"3e6b51abe98601c20b82ab815960389c"},{url:"assets/js/page-SuperscriptandSubscript--d7f5f81c.a91648d7.js",revision:"c4849d9755575d9d77d0398275152acd"},{url:"assets/js/page-Symbol--0b92fe0a.2152b5d7.js",revision:"f8d3617f3cd0e184bfff228b0a004f99"},{url:"assets/js/page-TexSupport--f897e69c.ad89bfee.js",revision:"f76f80686a69c2672ef016f02463c8b6"},{url:"assets/js/page-Tex语法支持--64cb5e50.0695b099.js",revision:"f84b49a90da900e709864ccd1fc9fcce"},{url:"assets/js/page-ThemeConfig--085c2edc.56b6b6a1.js",revision:"27f8c092de0aa1922c868c2fc56493bb"},{url:"assets/js/page-ThemeConfig--4715c95c.ebd94538.js",revision:"338d4774a2283e0246511559fea2e5b7"},{url:"assets/js/page-TSsupport--165630b2.29cf3b77.js",revision:"473ed1275f385101187a66ccab0fbb97"},{url:"assets/js/page-TS支持--09728ac8.a0d26621.js",revision:"53fe8c16866fbd5731dd4b5acc7dad10"},{url:"assets/js/page-Vuepress--4a71114e.62f10b4b.js",revision:"ff1824518bcceda1d9b73998a1123b68"},{url:"assets/js/page-vuepress-plugin-container--31498112.5702a891.js",revision:"99268cfe2790d7ca16d1e9e841145780"},{url:"assets/js/page-vuepress-plugin-container--f45c2334.2c7a538e.js",revision:"1cd36b54ae73d7edd80af3bc48daba4c"},{url:"assets/js/page-vuepress-plugin-copyright--5242f65c.94bec537.js",revision:"6048b8ad1cf433846ce151ef18670e29"},{url:"assets/js/page-vuepress-plugin-copyright--dac5744c.f55a7ae7.js",revision:"f4ce08a3743147ee3660668bf59d3e47"},{url:"assets/js/page-vuepress-theme-hope--776d8369.b4f52eff.js",revision:"fe549e3c1d8b272fc739aedc18831bed"},{url:"assets/js/page-vuepress-theme-hope--7f862af9.13f82558.js",revision:"e40315ef4453f1f8e8caa1c1706f2569"},{url:"assets/js/page-VuepressCases--27d200c8.abc9f803.js",revision:"ccb8452983b65835c4e5eb2405881afb"},{url:"assets/js/page-Vuepresscommands--7e89705c.c84517e7.js",revision:"7173956edd7ebb34dbdfba15b15ba1a7"},{url:"assets/js/page-Vuepress案例--082972f2.1568ae27.js",revision:"ee218ddda8a14082b4a7d9816229a768"},{url:"assets/js/page-上下角标--895c91b8.e74cfa9a.js",revision:"a7a1dce0cdb93d733875880296701b92"},{url:"assets/js/page-主题配置--1120a0ce.b2ca3c88.js",revision:"0631f89447a73e06a3a76eff64fab513"},{url:"assets/js/page-主题配置--1a859dfc.3080b213.js",revision:"a70065bbd97fc070674a28a331a2566d"},{url:"assets/js/page-人物--2182769c.7d651216.js",revision:"0cef00bf90fb328c734cb5f89e31e2df"},{url:"assets/js/page-介绍--d4910962.7b884685.js",revision:"737d97f82088ea7c671fb870dfb208ff"},{url:"assets/js/page-侧边栏--2fa1ea2c.eddaf208.js",revision:"9f88cf13dfe6340ecf00de5f61ea44b8"},{url:"assets/js/page-加密功能--181bdc9c.f2a41f03.js",revision:"b53634d53a27bb6a93f0fd3d9bc151a3"},{url:"assets/js/page-博客相关--17c260a2.a7e4a3e5.js",revision:"0621125f74ffd4afedf523a45eba7b8d"},{url:"assets/js/page-博客首页--64265752.f62ddc13.js",revision:"da7938965dbdeb3f1d20498706fecc9c"},{url:"assets/js/page-地点--951cdc00.e15ac083.js",revision:"99866306db0ef69572f54b3a9654cfd0"},{url:"assets/js/page-基础知识--770cb96b.e6c3c219.js",revision:"d90580c149c1cb8d05ca7cbe38d9763e"},{url:"assets/js/page-安装使用--0ab466d2.e090d662.js",revision:"cbfe71a5ce7e0180c03e362d4e2631f6"},{url:"assets/js/page-对象--16031ab2.5f63a2a2.js",revision:"b6c411db212eb787080e0312b70422d5"},{url:"assets/js/page-导航栏--c7bf87dc.25b0727d.js",revision:"39ce857a3d135218d06d2be978d36b37"},{url:"assets/js/page-布局--12bd4f0e.e5a53aff.js",revision:"080a15181eab14cff12c99efd2323ffd"},{url:"assets/js/page-常见问题--2b571e9b.980ee210.js",revision:"1596bafe4d1e8059924dec7e9913e96c"},{url:"assets/js/page-插件--adbf415c.9c90dad5.js",revision:"5c3d543a076be4483df26ce55945473c"},{url:"assets/js/page-插件说明--137c6c07.13f5d645.js",revision:"7692e9357a3f45d4b91529a1cbb75197"},{url:"assets/js/page-文件结构介绍--665a4f1c.0a0756c1.js",revision:"3519c728fc4e6d953280efee4c105845"},{url:"assets/js/page-新增特性--5136c541.2aa20d66.js",revision:"df383f50803fac21aaa371abb7e0d2f0"},{url:"assets/js/page-新增组件--1d138c72.3e1dcd54.js",revision:"743fcaea8a2792cf223635e46bd4a2a3"},{url:"assets/js/page-标记--6b1f341c.a45980b7.js",revision:"87553e0c1c2522065fa99a0264d54e6a"},{url:"assets/js/page-流程图支持--7ce6d974.83c00c5e.js",revision:"1976f63d4359f162086bbda5ff7560cd"},{url:"assets/js/page-深色模式与主题色--e23e731c.048552a9.js",revision:"2973054b6607eb85ad8662175f8abe60"},{url:"assets/js/page-符号--a9259c5c.eba123f5.js",revision:"9aa6510679f2c5a0a88d75f785a0a4af"},{url:"assets/js/page-脚注--0c733e52.32d82ad4.js",revision:"a7d40e62fe55ab65de08b2334e8cd0d1"},{url:"assets/js/page-自定义对齐--4f21aa5c.573fb84f.js",revision:"67c1570d1008bd65daea146aa195bd14"},{url:"assets/js/page-自然--749fb09c.aa366ffa.js",revision:"4802a674dc16844e851d6565a3f3d970"},{url:"assets/js/page-评论功能--5bb6671c.e3aacbb3.js",revision:"39cb281d9bcd41fd4bd9a92593047e99"},{url:"assets/js/page-配置文档--35a0a7d9.edb6263e.js",revision:"2fd4af577d4aeb78fb9feb1bec2ef640"},{url:"assets/js/page-页面--af17b59c.1ba4be6b.js",revision:"c07beaafcb5871a48984aa6cd88b4b29"},{url:"assets/js/page-页面信息--71efd5d2.ac3bb057.js",revision:"16529e9d9a8afac07c7acc0e56e9667f"},{url:"assets/js/page-页面配置--0aacc152.54ea5de3.js",revision:"254bbbfa6e283722d528bc4e5adf4932"},{url:"assets/js/page-项目指令--9f3f316c.3e466805.js",revision:"ddb5dd4114dc80d1f4e0f53856e3aac0"},{url:"assets/js/page-项目案例--f328658e.7fc6eab1.js",revision:"d7bf3c6ee6f111563228a4a01f88d0f4"},{url:"assets/js/page-首页--5834599c.4fe42681.js",revision:"84547068a4f045850e8f0ebab2f4a5f0"},{url:"assets/js/vendors~docsearch.c815669b.js",revision:"d53823faa8c3c6fa28aa67a03f94337a"},{url:"assets/js/vendors~flowchart.5496fad0.js",revision:"3ce343ad5083fe32bb9311bdec205754"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.d8ea2271.js",revision:"d038c0a18a95f48f4029f397301f0d57"},{url:"assets/js/vendors~layout-Layout.8be1d9b1.js",revision:"61bdf43520ef65c98797733395d96f04"},{url:"basic/index.html",revision:"9ae9a0cd3f199a196871b7c156aac708"},{url:"basic/markdown/demo/index.html",revision:"cd3906ea04eb6223d0a419042aa42be1"},{url:"basic/markdown/emoji/index.html",revision:"13a22b2d7aa117232739a9d78c7a77f6"},{url:"basic/markdown/emoji/nature/index.html",revision:"8f3d6545d6bf51fa13c98540dedda89d"},{url:"basic/markdown/emoji/object/index.html",revision:"05b63f532913ad57e95f108ada97b520"},{url:"basic/markdown/emoji/people/index.html",revision:"72d08069dc9166244c0d4aeea89ec054"},{url:"basic/markdown/emoji/place/index.html",revision:"0f2b7e10d13234f81c6c0b573e8e4d82"},{url:"basic/markdown/emoji/symbol/index.html",revision:"7bd22386adc33da30dc1e243dff1bd9f"},{url:"basic/markdown/index.html",revision:"92d3f1819c2aee3eda515c2055e324ed"},{url:"basic/vuepress/case/index.html",revision:"236514e40842df731655e6211e5ac91a"},{url:"basic/vuepress/command/index.html",revision:"73d0ab242571219bcbf031d580d7b9f5"},{url:"basic/vuepress/file/index.html",revision:"1bad05a185e66aac64756319879be573"},{url:"basic/vuepress/index.html",revision:"8dd6b054ffac2e9b4cb30e89d42fe43c"},{url:"basic/vuepress/plugin/index.html",revision:"bdff13220a42bd9f3a60f724f556207f"},{url:"basic/vuepress/theme/index.html",revision:"b80c434990578bd22c66985f4d0d76cf"},{url:"category/basic/index.html",revision:"5250b85c2b7b356709cd115c99210b9f"},{url:"category/basic/page/2/index.html",revision:"837a4ae52c8ca5b8bb897293228a8cdf"},{url:"category/basic/page/3/index.html",revision:"dfb422c1637f43b64455c2956f52398a"},{url:"category/config/index.html",revision:"24b16078a2d43c8a3ab43e05933ca580"},{url:"category/config/page/2/index.html",revision:"50d5a92d474d00160b585fcfeb3effe1"},{url:"category/config/page/3/index.html",revision:"9576e72678d3bcf2ba213b5e80626d42"},{url:"category/demo/index.html",revision:"d12afd158a5ed35a3e7f066eee1284a5"},{url:"category/FAQ/index.html",revision:"20546fd860aa3791bfb36807b16893c4"},{url:"category/feature/index.html",revision:"1c6f05ca17ebab49a4e514dd5903bef3"},{url:"category/feature/page/2/index.html",revision:"86271076e43aa98c33161f20802485c5"},{url:"category/index.html",revision:"afbc63596b827c1fb7dce525bdadb8d0"},{url:"category/instruction/index.html",revision:"4bb19037f15da60f0f311adb730f89a9"},{url:"category/layout/index.html",revision:"3fd3cc89a4d0efa2b4320cb9113e0fb3"},{url:"category/layout/page/2/index.html",revision:"33e446bcc5480b4c001e43ce793b5402"},{url:"category/markdown/index.html",revision:"9d9771c46e6dd0f0100414643012ce0c"},{url:"config/index.html",revision:"2dc1c0b5c0936ef40dc1bafe14aa5d77"},{url:"config/page/index.html",revision:"c08662f59176a2db4e26e6dc2a86900a"},{url:"config/plugin/container/index.html",revision:"9826a0396570f55422c03fa05257ff97"},{url:"config/plugin/copyright/index.html",revision:"6ffc68699331f0a8ea2cb7b2d0cf44c6"},{url:"config/plugin/index.html",revision:"b8a344a8a65155adb055ba189805337c"},{url:"config/plugin/last-update/index.html",revision:"d8b9b457f4f99482e0f3ab2397f18b37"},{url:"config/plugin/photo-swipe/index.html",revision:"d740db85fbd0d8ab9697e5ee6bce7111"},{url:"config/plugin/pwa/index.html",revision:"a79d8bc1c9033fd19b988d6bb6b13dbc"},{url:"config/plugin/reading-time/index.html",revision:"8023422c61f5c272ae56558bec445a30"},{url:"config/plugin/seo/index.html",revision:"833455eef70afcd96f3339b83d359350"},{url:"config/plugin/sitemap/index.html",revision:"bfa63c65bf00d2117da1bea1bf2a670f"},{url:"config/stylus/index.html",revision:"231cde3b1f2cebdaceb8cb2deacc9d28"},{url:"config/themeConfig/index.html",revision:"8c131f9bd6ddbd0f13450af019dcfec1"},{url:"demo/index.html",revision:"defc5d16bf0139069f20076613647093"},{url:"en/basic/index.html",revision:"54e63d00c9783f3c7a5d5b5c3a96f900"},{url:"en/basic/markdown/demo/index.html",revision:"54605ba6d984d26819a6c930e5bfd4b1"},{url:"en/basic/markdown/emoji/index.html",revision:"89e9fbe2bd247d238e36b2321bb3ffbc"},{url:"en/basic/markdown/emoji/nature/index.html",revision:"7c0807a9167d2ac5f87904e73e428825"},{url:"en/basic/markdown/emoji/object/index.html",revision:"43f3ebc991a59c013fcd25a2302024e5"},{url:"en/basic/markdown/emoji/people/index.html",revision:"7fc2e22c730e9dc660268b340659e7e8"},{url:"en/basic/markdown/emoji/place/index.html",revision:"f39833c71fd77fb598c8d2b98b6a0fb0"},{url:"en/basic/markdown/emoji/symbol/index.html",revision:"aa4087588e9a9dad92b94dbc467f1d91"},{url:"en/basic/markdown/index.html",revision:"c19d6751c4f06d82e6d236b4f363dd96"},{url:"en/basic/vuepress/case/index.html",revision:"e66071cfb80b8b783d97830a3df750c6"},{url:"en/basic/vuepress/command/index.html",revision:"59620893768c33c5a5d69f906bd9df9a"},{url:"en/basic/vuepress/file/index.html",revision:"9e607b5c038dfa3480edd6296f27adbf"},{url:"en/basic/vuepress/index.html",revision:"62e248444119a113ad8e0edea6f86997"},{url:"en/basic/vuepress/plugin/index.html",revision:"b8592cff73c0cab7d030f1562935c1e4"},{url:"en/basic/vuepress/theme/index.html",revision:"f7c5178e1b74c588e6506b20401b36ab"},{url:"en/config/index.html",revision:"7c79ccfb1b4b694d920e5c8d0a06e20e"},{url:"en/config/page/index.html",revision:"fdbef2233a875270cf7e33eeb688e0b7"},{url:"en/config/plugin/container/index.html",revision:"b158d18017c8c3e958c92ae0e99104e0"},{url:"en/config/plugin/copyright/index.html",revision:"9818cea16b97290b762aad55f5470eb4"},{url:"en/config/plugin/index.html",revision:"5484bd3b1382c8b46ee62423fb20f51d"},{url:"en/config/plugin/last-update/index.html",revision:"8ed707f3c2a2ef8a79dac2a80c317685"},{url:"en/config/plugin/photo-swipe/index.html",revision:"aa606d2533902b98ba5a0936cde0fd47"},{url:"en/config/plugin/pwa/index.html",revision:"deb2d42d71269ac31b619785f52c72cc"},{url:"en/config/plugin/reading-time/index.html",revision:"0325929d435f7cc744257640fa38a784"},{url:"en/config/plugin/seo/index.html",revision:"013fda5bcba5acb2f6e7dd3e5a4d35dc"},{url:"en/config/plugin/sitemap/index.html",revision:"898f4a70e84b77d516d466244f5c5d1d"},{url:"en/config/stylus/index.html",revision:"bed71e8ccf714d5fcbef361653a67ec7"},{url:"en/config/themeConfig/index.html",revision:"df3a0c0526f60dc76694a69e8f085747"},{url:"en/demo/index.html",revision:"6eb166de8110da7b10144ddbb69bd6fb"},{url:"en/FAQ/index.html",revision:"9c83997bbf27fad7ed50a133420bee2b"},{url:"en/guide/feature/blog/index.html",revision:"1761bba51bd2234e4d946119459ce7f5"},{url:"en/guide/feature/comment/index.html",revision:"c3536fda76a669c1cac81902259c05a0"},{url:"en/guide/feature/component/index.html",revision:"eac0199381c3f3fcd7d12e79279d64e6"},{url:"en/guide/feature/encrypt/index.html",revision:"88cd387851167d06a0cba9f70f7feeae"},{url:"en/guide/feature/index.html",revision:"49c1e8e131717cd515af5b3259ed962d"},{url:"en/guide/feature/markdown/align/index.html",revision:"1b129a7cc2c5f545283013d3fbfe5c25"},{url:"en/guide/feature/markdown/flowchart/index.html",revision:"8ea2abcfbf1e7b5d585723f109a8ca23"},{url:"en/guide/feature/markdown/footnote/index.html",revision:"b3dee96ef97f3873ab31787608a357dd"},{url:"en/guide/feature/markdown/index.html",revision:"42d5aea66c72ac47d1aa05b85d6fb553"},{url:"en/guide/feature/markdown/mark/index.html",revision:"0e56178a9015c3dc6423821c0790f76b"},{url:"en/guide/feature/markdown/sup-sub/index.html",revision:"85389dd55fc61225bcdba8ae4f32911c"},{url:"en/guide/feature/markdown/tex/index.html",revision:"6b7788dda994806db1e2664c5037c118"},{url:"en/guide/feature/page-info/index.html",revision:"23cc3778b611d48d50c678933ee65997"},{url:"en/guide/feature/seoAndSitemap/index.html",revision:"c20f80ecd3874619df72b8101c1ed3f4"},{url:"en/guide/feature/theme/index.html",revision:"eac61c0fcb2e3211dd142b7ea9e5d894"},{url:"en/guide/feature/typescript/index.html",revision:"534d6af4bee89a49a5a2dc9173c42040"},{url:"en/guide/index.html",revision:"f211d3704af8a64dd1fc640a3ba52d4a"},{url:"en/guide/install/index.html",revision:"15a1853207277b372392b42f91e8c9ce"},{url:"en/guide/layout/blog/index.html",revision:"1021f9e07e5146ca00a5a49a491c3773"},{url:"en/guide/layout/home/index.html",revision:"eacbe29bd85b947c43c9a5fc5013c751"},{url:"en/guide/layout/index.html",revision:"6222700e56ce9962b1096370f0960abd"},{url:"en/guide/layout/navbar/index.html",revision:"06aee47ec4e30641673e2153acdbfe60"},{url:"en/guide/layout/page/index.html",revision:"27260c088e5dde901ec4e08dcb16068d"},{url:"en/guide/layout/sidebar/index.html",revision:"c61fe553f3093451d83b05d2d4e64bff"},{url:"en/index.html",revision:"2b91e0f07586f0257ec4f338efbc65e4"},{url:"FAQ/index.html",revision:"29a65f3f9d37ccfbe806a165aec03271"},{url:"guide/feature/blog/index.html",revision:"ec582adc2bea08de77e6ad2133a4429b"},{url:"guide/feature/comment/index.html",revision:"eecd27ed25caf30e97794642e68ce493"},{url:"guide/feature/component/index.html",revision:"197e292ac6a11058190fb626ca6cf832"},{url:"guide/feature/encrypt/index.html",revision:"12696dad2a3152964a3b193a124aaaf2"},{url:"guide/feature/index.html",revision:"c1db3167fcbdf1b0defb55fdfa6c9176"},{url:"guide/feature/markdown/align/index.html",revision:"7dba24d7c55c17c641c48b60cab08169"},{url:"guide/feature/markdown/flowchart/index.html",revision:"faa73243f1f77fbf9b9603df6024d2fe"},{url:"guide/feature/markdown/footnote/index.html",revision:"d59ddd9a913b07e281cf0c221e0b6f46"},{url:"guide/feature/markdown/index.html",revision:"5eef7711340bacd64df9a173526bb62e"},{url:"guide/feature/markdown/mark/index.html",revision:"9ddd9337aad6774e236e9ef183176586"},{url:"guide/feature/markdown/sup-sub/index.html",revision:"c12d508c75aa48660ac7f7c2eac1b735"},{url:"guide/feature/markdown/tex/index.html",revision:"cb31174f1dd6311d48343dec06ef63d6"},{url:"guide/feature/page-info/index.html",revision:"8bb1e3bf77b64fd6448585bcd37b9651"},{url:"guide/feature/seoAndSitemap/index.html",revision:"182c2522acee2ebcf9ef5d6611430cf6"},{url:"guide/feature/theme/index.html",revision:"85f6bbd46a741c65b9ccfd46433f3822"},{url:"guide/feature/typescript/index.html",revision:"3f3ca284c8b642fba81220d1d3e4ff2c"},{url:"guide/index.html",revision:"890c79749ee93d04e4b5ce876a63d9cd"},{url:"guide/install/index.html",revision:"a310614b4579aec57ec2907886ffad27"},{url:"guide/layout/blog/index.html",revision:"0871b05d515dc3281d934355a4dd831b"},{url:"guide/layout/home/index.html",revision:"2ca78c4f6762d7013e60d51ed7aff3bd"},{url:"guide/layout/index.html",revision:"52ede77947f46fc4998adccd65d2399d"},{url:"guide/layout/navbar/index.html",revision:"b745c48a447b653b0942af9b40954010"},{url:"guide/layout/page/index.html",revision:"531375f034ab52dc8107d97fc09eeb00"},{url:"guide/layout/sidebar/index.html",revision:"fb188f3f6942841717dffb50883e1e31"},{url:"index.html",revision:"576ced2ad36124baf0ac19a147753611"},{url:"logo.png",revision:"a4106d3bbae58733d609f32044a86a39"},{url:"logo.svg",revision:"e5d2cc16443a59035e0fa55c746f7d51"},{url:"tag/blog/index.html",revision:"2f70210864e780b8f0e467416c0f19bb"},{url:"tag/comment/index.html",revision:"89e608e59db0383ddf9547a35bedb6a6"},{url:"tag/components/index.html",revision:"8ea241ff523804bc24ef2c522310be65"},{url:"tag/config/index.html",revision:"77656cbcc9a3f5a55e1ac614e3ec1588"},{url:"tag/config/page/2/index.html",revision:"3c770ddedcfee15e2b2c93c3f8e60e9c"},{url:"tag/config/page/3/index.html",revision:"7b6cc080f7e84619bcda9be5e89d798e"},{url:"tag/emoji/index.html",revision:"f2b065009c47654d89c5645825b24523"},{url:"tag/emoji/page/2/index.html",revision:"6bb902f256132bfe53b30409b79231a2"},{url:"tag/encrypt/index.html",revision:"10dbf42c12f450c81187c45eb5094457"},{url:"tag/feature/index.html",revision:"622b22adced3311cfb7939318fb62e1b"},{url:"tag/feature/page/2/index.html",revision:"77ce4633ad2188ec02b95a747958c82f"},{url:"tag/frontmatter/index.html",revision:"6508cea90ff29bb54a28735d8d245d15"},{url:"tag/function/index.html",revision:"c7592bb423a274ee250619bd000091be"},{url:"tag/function/page/2/index.html",revision:"25e0df292eca66121a2f62a892631f11"},{url:"tag/home/index.html",revision:"cc4f3d96e7858f9b3f90bdf7b97175c1"},{url:"tag/index.html",revision:"182024b7103e008c908fe0afe7453f5c"},{url:"tag/intro/index.html",revision:"bef4a3f8f4d9b6cbc3c93eef77801e91"},{url:"tag/layout/index.html",revision:"063072ff2582378e04a98a61ebfc6a5e"},{url:"tag/layout/page/2/index.html",revision:"633fe68e98807b7d2f6341e24bb3976a"},{url:"tag/markdown/index.html",revision:"c080405c8d4921abc6442cc12aa9dbfa"},{url:"tag/markdown/page/2/index.html",revision:"13fc7749426d7f22cc9536ac553b41d6"},{url:"tag/markdown/page/3/index.html",revision:"fdfc9662790dcde72e3f149e851e3be1"},{url:"tag/navbar/index.html",revision:"ea18a9ab318ac8dc4f26c1046bac0a59"},{url:"tag/page-info/index.html",revision:"4e2b87bcf92e6a3e6ea9d74dbb1dfc6e"},{url:"tag/plugin/index.html",revision:"aec26645c7416813ab18a11ec1014b49"},{url:"tag/plugin/page/2/index.html",revision:"13f90c5d5fd8a62f0618514947e6f224"},{url:"tag/seo/index.html",revision:"cbcf308ee582a47c8d0fc446a659eade"},{url:"tag/sidebar/index.html",revision:"4d74bbe61e1d2333141c8b8ae957d4f1"},{url:"tag/sitemap/index.html",revision:"8d0e663f2e265ea3a9998300e2b27593"},{url:"tag/style/index.html",revision:"3f57c5917c2b0b128cc8488d03ab21a4"},{url:"tag/themeConfig/index.html",revision:"e35177709b9b5dd7e05993cbc965a688"},{url:"tag/typescript/index.html",revision:"cc514b505d2213d88366a82d523678a4"},{url:"tag/vuepress/index.html",revision:"bca4b8023702d6b29ea3afda79aa8f38"},{url:"tag/vuepress/page/2/index.html",revision:"bb95b6e9866d45daf7627f22b53af0f3"},{url:"timeline/index.html",revision:"ccf90feaf1ece0d9bd04adeeb3769ebb"}],{})}));
//# sourceMappingURL=service-worker.js.map
addEventListener("message", (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === "skip-waiting")
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});
