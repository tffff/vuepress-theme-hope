if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,i,f)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const d={uri:location.origin+a.slice(1)};return Promise.all(i.map(a=>{switch(a){case"exports":return s;case"module":return d;default:return e(a)}})).then(e=>{const a=f(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-1a661b4a"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"404.html",revision:"c63db19970244fd3fcfa5d2451961955"},{url:"api/index.html",revision:"f6ab8ec39dd35baf53b6e3f04758d7c3"},{url:"api/page.html",revision:"30daeb07c107aaabc89c8c0aec3253c4"},{url:"api/plugin/container.html",revision:"3a5aed671522707e2b64dd6676acf11c"},{url:"api/plugin/copyright.html",revision:"67d0516abc09544440ec024c10b219fd"},{url:"api/plugin/index.html",revision:"81b7ccd69d486cd6e221a28287354851"},{url:"api/plugin/medium-zoom.html",revision:"4d257ec73df3b6c2ba0980443779acb5"},{url:"api/plugin/pwa.html",revision:"b56e680c691d26fa3a82a5941420361b"},{url:"api/stylus.html",revision:"3ed501f7ba77f0ab2ac49714c4380ac6"},{url:"api/themeConfig.html",revision:"7f96c40669c03be769617b52d1e7e64e"},{url:"article/index.html",revision:"5ada61a62c052aa66d797d58dacee9e2"},{url:"assets/css/0.styles.aad6a2a6.css",revision:"885c2fc9738f94f317fa28a5841215ff"},{url:"assets/fonts/KaTeX_AMS-Regular.7f06b4e3.woff",revision:"7f06b4e30317f784d61d26686aed0ab2"},{url:"assets/fonts/KaTeX_AMS-Regular.aaf4eee9.ttf",revision:"aaf4eee9fba9907d61c3935e0b6a54ae"},{url:"assets/fonts/KaTeX_AMS-Regular.e78e28b4.woff2",revision:"e78e28b4834954df047e4925e9dbf354"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.021dd4dc.ttf",revision:"021dd4dc61ee5f5cdf315f43b48c094b"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.1e802ca9.woff",revision:"1e802ca9dedc4ed4e3c6f645e4316128"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.4ec58bef.woff2",revision:"4ec58befa687e9752c3c91cd9bcf1bcb"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.7edb53b6.woff2",revision:"7edb53b6693d75b8a2232481eea1a52c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d3b46c3a.woff",revision:"d3b46c3a530116933081d9d74e3e9fe8"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d49f2d55.ttf",revision:"d49f2d55ce4f40f982d8ba63d746fbf9"},{url:"assets/fonts/KaTeX_Fraktur-Bold.a31e7cba.ttf",revision:"a31e7cba7b7221ebf1a2ae545fb306b2"},{url:"assets/fonts/KaTeX_Fraktur-Bold.c4c8cab7.woff",revision:"c4c8cab7d5be97b2bb283e531c077355"},{url:"assets/fonts/KaTeX_Fraktur-Bold.d5b59ec9.woff2",revision:"d5b59ec9764e10f4a82369ae29f3ac58"},{url:"assets/fonts/KaTeX_Fraktur-Regular.32a5339e.woff2",revision:"32a5339eb809f381a7357ba56f82aab3"},{url:"assets/fonts/KaTeX_Fraktur-Regular.a48dad4f.ttf",revision:"a48dad4f58c82e38a10da0ceebb86370"},{url:"assets/fonts/KaTeX_Fraktur-Regular.b7d9c46b.woff",revision:"b7d9c46bff5d51da6209e355cc4a235d"},{url:"assets/fonts/KaTeX_Main-Bold.22086eb5.woff",revision:"22086eb5d97009c3e99bcc1d16ce6865"},{url:"assets/fonts/KaTeX_Main-Bold.8e1e01c4.woff2",revision:"8e1e01c4b1207c0a383d9a2b4f86e637"},{url:"assets/fonts/KaTeX_Main-Bold.9ceff51b.ttf",revision:"9ceff51b3cb7ce6eb4e8efa8163a1472"},{url:"assets/fonts/KaTeX_Main-BoldItalic.284a17fe.woff2",revision:"284a17fe5baf72ff8217d4c7e70c0f82"},{url:"assets/fonts/KaTeX_Main-BoldItalic.4c57dbc4.woff",revision:"4c57dbc44bfff1fdf08a59cf556fdab3"},{url:"assets/fonts/KaTeX_Main-BoldItalic.e8b44b99.ttf",revision:"e8b44b990516dab7937bf240fde8b46a"},{url:"assets/fonts/KaTeX_Main-Italic.29c86397.ttf",revision:"29c86397e75cdcb3135af8295f1c2e28"},{url:"assets/fonts/KaTeX_Main-Italic.99be0e10.woff",revision:"99be0e10c38cd42466e6fe1665ef9536"},{url:"assets/fonts/KaTeX_Main-Italic.e533d5a2.woff2",revision:"e533d5a2506cf053cd671b335ec04dde"},{url:"assets/fonts/KaTeX_Main-Regular.5c734d78.woff2",revision:"5c734d78610fa35282f3379f866707f2"},{url:"assets/fonts/KaTeX_Main-Regular.5c94aef4.ttf",revision:"5c94aef490324b0925dbe5f643e8fd04"},{url:"assets/fonts/KaTeX_Main-Regular.b741441f.woff",revision:"b741441f6d71014d0453ca3ebc884dd4"},{url:"assets/fonts/KaTeX_Math-BoldItalic.9a2834a9.ttf",revision:"9a2834a9ff8ab411153571e0e55ac693"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b13731ef.woff",revision:"b13731ef4e2bfc3d8d859271e39550fc"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d747bd1e.woff2",revision:"d747bd1e7a6a43864285edd73dcde253"},{url:"assets/fonts/KaTeX_Math-Italic.291e76b8.ttf",revision:"291e76b8871b84560701bd29f9d1dcc7"},{url:"assets/fonts/KaTeX_Math-Italic.4ad08b82.woff2",revision:"4ad08b826b8065e1eab85324d726538c"},{url:"assets/fonts/KaTeX_Math-Italic.f0303906.woff",revision:"f0303906c2a67ac63bf1e8ccd638a89e"},{url:"assets/fonts/KaTeX_SansSerif-Bold.3fb41955.woff",revision:"3fb419559955e3ce75619f1a5e8c6c84"},{url:"assets/fonts/KaTeX_SansSerif-Bold.6e0830be.woff2",revision:"6e0830bee40435e72165345e0682fbfc"},{url:"assets/fonts/KaTeX_SansSerif-Bold.7dc027cb.ttf",revision:"7dc027cba9f7b11ec92af4a311372a85"},{url:"assets/fonts/KaTeX_SansSerif-Italic.4059868e.ttf",revision:"4059868e460d2d2e6be18e180d20c43d"},{url:"assets/fonts/KaTeX_SansSerif-Italic.727a9b0d.woff",revision:"727a9b0d97d72d2fc0228fe4e07fb4d8"},{url:"assets/fonts/KaTeX_SansSerif-Italic.fba01c9c.woff2",revision:"fba01c9c6fb2866a0f95bcacb2c187a5"},{url:"assets/fonts/KaTeX_SansSerif-Regular.2555754a.woff",revision:"2555754a67062cac3a0913b715ab982f"},{url:"assets/fonts/KaTeX_SansSerif-Regular.5c58d168.ttf",revision:"5c58d168c0b66d2c32234a6718e74dfb"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d929cd67.woff2",revision:"d929cd671b19f0cfea55b6200fb47461"},{url:"assets/fonts/KaTeX_Script-Regular.755e2491.woff2",revision:"755e2491f13b5269f0afd5a56f7aa692"},{url:"assets/fonts/KaTeX_Script-Regular.d12ea9ef.ttf",revision:"d12ea9efb375f9dc331f562e69892638"},{url:"assets/fonts/KaTeX_Script-Regular.d524c9a5.woff",revision:"d524c9a5b62a17f98f4a97af37fea735"},{url:"assets/fonts/KaTeX_Size1-Regular.7342d45b.ttf",revision:"7342d45b052c3a2abc21049959fbab7f"},{url:"assets/fonts/KaTeX_Size2-Regular.eb130dcc.ttf",revision:"eb130dcc661de766c999c60ba1525a88"},{url:"assets/fonts/KaTeX_Size4-Regular.ad767252.ttf",revision:"ad7672524b64b730dfd176140a8945cb"},{url:"assets/fonts/KaTeX_Typewriter-Regular.25702356.ttf",revision:"257023560753aeb0b89b7e434d3da17f"},{url:"assets/fonts/KaTeX_Typewriter-Regular.3fe216d2.woff",revision:"3fe216d2a5f736c560cde71984554b64"},{url:"assets/fonts/KaTeX_Typewriter-Regular.6cc31ea5.woff2",revision:"6cc31ea5c223c88705a13727a71417fa"},{url:"assets/img/architecture.9a93cf6c.png",revision:"9a93cf6cea38878e19c5816d1af28b17"},{url:"assets/img/blog.63c13822.png",revision:"63c138223630a1ad4ac7d129b848409d"},{url:"assets/img/category.4884e842.png",revision:"4884e842d997d40ecd3d347d69801497"},{url:"assets/img/darkmode.cd6c7360.png",revision:"cd6c73602cbe64a85e784daa3caf6b58"},{url:"assets/img/home.54e43b1b.png",revision:"54e43b1b23e40af37563d18d2ea728aa"},{url:"assets/img/home.c65f0280.png",revision:"c65f02809ddb4469ee5a7215e9c05802"},{url:"assets/img/homeImage.5ae9de9e.jpg",revision:"5ae9de9e15120d94e9892d0c15da9896"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/js/102.9eb0bd0d.js",revision:"39ed92499d7839d657f38a8712eca220"},{url:"assets/js/app.b1a53527.js",revision:"ae5a9fca8e8d3f9d2e2e9bea6a5e52d3"},{url:"assets/js/layout-Blog.8deaf2f5.js",revision:"4384c7231072e0b09b0f8311225d53ec"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.7efeee61.js",revision:"169546d1379d66be565e76ca9d9d229e"},{url:"assets/js/layout-Layout.fa961189.js",revision:"d352a83461314a26425041608669979a"},{url:"assets/js/layout-NotFound.eb607ac0.js",revision:"a0e38c1b2823d3838eb1f725247eb848"},{url:"assets/js/page--0ab466d2.a4397a4f.js",revision:"8d1c148119b1896d6965b4600a84bb14"},{url:"assets/js/page--1f262314.ae032d13.js",revision:"d6ee73f0b6e2da69c8c1b8a09be25801"},{url:"assets/js/page--5dafe67a.345a9941.js",revision:"e1e662e0181cf1bac0b1330b4f6325ee"},{url:"assets/js/page--86453650.ccb1abbb.js",revision:"0137fc19318f1e2f060dc65753e5bae1"},{url:"assets/js/page--9108a39c.4ae98b06.js",revision:"efde87ce0a0ebb980a2d1c44ff7d8f65"},{url:"assets/js/page--d7fc60dc.2148b371.js",revision:"b5547b9321fe28e9995da7327ed272e1"},{url:"assets/js/page-About Vuepress.8cc8e659.js",revision:"a18724a0a7f9c02d7558150d8f8eb7af"},{url:"assets/js/page-API Docs.bfb8f76d.js",revision:"a0ea9dc584e1c0be2a3cf32249580beb"},{url:"assets/js/page-API 文档.5d8aa2d6.js",revision:"9cd6ebe12e0b6089cf219ad97ae2b593"},{url:"assets/js/page-Basic.5e18eca2.js",revision:"59da32276042fa759ec5ba65d4f5778d"},{url:"assets/js/page-Blog homepage.be01d1f3.js",revision:"f9a1be2f076cd33498afb8ee6ecf09e5"},{url:"assets/js/page-Blog related.9b5a9fa7.js",revision:"285142f687e37051f200c5eaa8de9bff"},{url:"assets/js/page-Comment Function.82eeac6b.js",revision:"e1d65f7ae459c2f01853e685508d48db"},{url:"assets/js/page-Common problems.841f62d9.js",revision:"cf43d31c3e406db3c64699020c9c5305"},{url:"assets/js/page-Custom alignment.107fec0c.js",revision:"c142916ec55bd9bc9f10f0daae97c84c"},{url:"assets/js/page-Darkmode and Theme color.d55feca6.js",revision:"9297ffb847256d40411ba0a005665e1a"},{url:"assets/js/page-Default Theme Config.a5489a1a.js",revision:"831cd534f8f957d57133badf26efa9bb"},{url:"assets/js/page-Demos.092324c4.js",revision:"190c2da895f6a4377af52e1faa4f8983"},{url:"assets/js/page-Emoji List.b5a97222.js",revision:"bd6ef3945ca161306e4d490fb1fa9463"},{url:"assets/js/page-Emoji 列表.5f497e56.js",revision:"7e117bebd262b4030fe5fc043384cb40"},{url:"assets/js/page-Encryption function.e18ec09f.js",revision:"4fc4487610cc120701ad388abdd71287"},{url:"assets/js/page-File Structure.abfb5d5b.js",revision:"ca290f25880c1fe35030dd10025984c9"},{url:"assets/js/page-Flowchart.79a4adc6.js",revision:"5577f7b699c1ddc2d8b8dbfa8d591d6d"},{url:"assets/js/page-Footnote.2de4f025.js",revision:"1308f505545a9e33a8da7c9f71db2f56"},{url:"assets/js/page-Home Page.aee3cb89.js",revision:"3cde099f9006314ea3f281c4fca4f02f"},{url:"assets/js/page-Home.aef98277.js",revision:"84dd62487e327ce4678ad51c1ca31e6a"},{url:"assets/js/page-Introduction.c4545f53.js",revision:"7b3a1d53f72913f5eca608e4bd9b5e5b"},{url:"assets/js/page-Layout.6d94fbf9.js",revision:"d27f3e111da8900c2b91cddc7ba5e55e"},{url:"assets/js/page-Markdown DEMO.1fe89f89.js",revision:"85cc43a68b71171dd5a458f0f31f3200"},{url:"assets/js/page-Markdown Introduction.d6799385.js",revision:"80208c36646d18f598c57b5327ceffb8"},{url:"assets/js/page-Markdown 介绍.be1e89a8.js",revision:"3b6136dd182c17b0db5eb122e103d025"},{url:"assets/js/page-Markdown 新语法.b6bd74e2.js",revision:"311c140b6127cf4e7e06cc9b8d90ea94"},{url:"assets/js/page-Markdown示例.4006dc4e.js",revision:"857f633266e85cc0cad38a1e7344bba7"},{url:"assets/js/page-Markup.02a166d0.js",revision:"d4eabe78e302bfc54cfa464f2d106829"},{url:"assets/js/page-NavBar.36194292.js",revision:"42290490a27d6a7d37cdfd04448972eb"},{url:"assets/js/page-New Component.a9dc4fb9.js",revision:"f0e5dc887e531dcceb8e6987dd8a9a9c"},{url:"assets/js/page-New feature.8e99bf92.js",revision:"c7ae6800c8f4667e06a533933ab2c0b0"},{url:"assets/js/page-New syntax in Markdown.db4c604b.js",revision:"f7964b5429fe6cc285716c3dca08afb6"},{url:"assets/js/page-Page Configuration.12f9efc0.js",revision:"6a5319574f5fbcdbcfabf4277a039144"},{url:"assets/js/page-Page information.5b973a7f.js",revision:"f1a1e81273ee10de47716ab8da75ad56"},{url:"assets/js/page-Page.042894a9.js",revision:"da6de01c320b27af18022ef3be8f5b01"},{url:"assets/js/page-Plugin Description.94102c40.js",revision:"ada5977efe551b1f2e38c792c5c74be8"},{url:"assets/js/page-Plugins.68db78bf.js",revision:"8cd3643a0c3b52ebdaf1d4e03e7ac277"},{url:"assets/js/page-Sidebar.40bca50a.js",revision:"d1df005f7043077add785e1c6ee605fc"},{url:"assets/js/page-stylus configuration.b8842b05.js",revision:"5b3bb57550201183ce0d3403597c4b00"},{url:"assets/js/page-stylus 配置.5dff5906.js",revision:"ac50f06482cb2c4be33e6f2e5e373a8c"},{url:"assets/js/page-Superscript and Subscript.038620e1.js",revision:"ada64759129320a87b53b7100c7ba577"},{url:"assets/js/page-Tex Support.604e2cec.js",revision:"0cb24011ad706bbd93632cffb2c4fadb"},{url:"assets/js/page-Tex 语法支持.5db667f6.js",revision:"8219c9b5190805d87d36792d3d5ba2d7"},{url:"assets/js/page-Theme Config.497fe828.js",revision:"dafa5b517e9441a83b029ce98aa0c1c9"},{url:"assets/js/page-TS support.92a11a34.js",revision:"8c2b4d246ed8de51ae97c72c97151a2f"},{url:"assets/js/page-TS 支持.84025a04.js",revision:"0a631e21af61382e5b7461b23eec6c8d"},{url:"assets/js/page-Vuepress Cases.43c52303.js",revision:"5ef788006a4a8a7dfa4e72c1684f4c95"},{url:"assets/js/page-Vuepress commands.49e83eea.js",revision:"932531fefce28396ee501fc3b7ad21f0"},{url:"assets/js/page-Vuepress 案例.1b06fbb8.js",revision:"34343d635355abcfaa469bb7c10e9823"},{url:"assets/js/page-vuepress-plugin-container.9afbb6ed.js",revision:"473d69caee1401ae03947e92c4026860"},{url:"assets/js/page-vuepress-plugin-copyright.2d93bde2.js",revision:"f6adcffc06cf94017f9db04fbdfbf20f"},{url:"assets/js/page-Vuepress.1bb95ad7.js",revision:"a36bb16c7ebf84ace453293af8328051"},{url:"assets/js/page-Writing a theme.bd498847.js",revision:"ef65446d8c65e95d77270d2eb4dc5b5b"},{url:"assets/js/page-上下角标.a8480fc1.js",revision:"7c7cf398bb9b2a2a9f10ddc247d552ef"},{url:"assets/js/page-主题配置.1c62cedf.js",revision:"f379b6eba63f58b8893cf70cf3408c4d"},{url:"assets/js/page-人物.122dffcf.js",revision:"feb7e23e112992f1c161ad3da7dbca5f"},{url:"assets/js/page-介绍.5d3229ee.js",revision:"c562aac3f067d53ffda70527d50942dd"},{url:"assets/js/page-侧边栏.b9f201f1.js",revision:"02a0626237a0f8948e0e8deede235912"},{url:"assets/js/page-加密功能.e6b1fc09.js",revision:"c0ede1b48643afd6241345092d2094e5"},{url:"assets/js/page-博客相关.f80525d0.js",revision:"9d305e800f23059514f413458e1bf02a"},{url:"assets/js/page-博客首页.da5965aa.js",revision:"9c6dd37720b50ff8d655ad95ba5d2fba"},{url:"assets/js/page-地点.5eb7323a.js",revision:"89367acc1578751129974d5b0b384678"},{url:"assets/js/page-基础知识.5f611929.js",revision:"f8d48e7ab82227beddff971c5e768645"},{url:"assets/js/page-对象.286c885e.js",revision:"2974c98aba1976621608387b5ab25f15"},{url:"assets/js/page-导航栏.e37c4107.js",revision:"47561798c73bb83934f99fe6fa2bd33f"},{url:"assets/js/page-布局.1f1ac6ba.js",revision:"c9fe6d0bc1766eaa514332ca653cae7b"},{url:"assets/js/page-常见问题.12e34e02.js",revision:"e79a131bb4652acf0632ecf21429a591"},{url:"assets/js/page-开发主题.2742d9a5.js",revision:"68c34e8c6649e8ba5700892cc7e7cffe"},{url:"assets/js/page-插件.615ad886.js",revision:"05b32a4ba3fe32d394baae445f039322"},{url:"assets/js/page-插件说明.b57ac0a8.js",revision:"4dbae50ff35d3034e528320e4defe529"},{url:"assets/js/page-文件结构介绍.a86c08c3.js",revision:"629bb2b1094f88fc890f1484a03f6d25"},{url:"assets/js/page-新增特性.3aca8680.js",revision:"1591024c6a7a810363fd434db3d84873"},{url:"assets/js/page-新增组件.7f7c05d3.js",revision:"1648538ba8df65fa299ee8c2987760fe"},{url:"assets/js/page-标记.392daf65.js",revision:"557d21f260ba812322c6a6855feb6a63"},{url:"assets/js/page-流程图支持.32f004d2.js",revision:"12afdcb119b64445cf061b06829fd3ec"},{url:"assets/js/page-深色模式与主题色.8d6cb1e3.js",revision:"60acdecc283719c99829d402170e1d8e"},{url:"assets/js/page-符号.8271718d.js",revision:"9f68ffd016d6127116682c36a747c8d9"},{url:"assets/js/page-脚注.227942ba.js",revision:"508501e432f24b58929080a330d2eb30"},{url:"assets/js/page-自定义对齐.f23538eb.js",revision:"91aa5c008bc0e3a318177ac76c93f412"},{url:"assets/js/page-自然.21152d1c.js",revision:"ce2806fd3355acd30a456aeac0779f63"},{url:"assets/js/page-评论功能.688de808.js",revision:"28acdc9d70c00d0b1304f19bd716d567"},{url:"assets/js/page-页面.7b9a654a.js",revision:"14d3f0462e7e5ac9e7253c503e39e00a"},{url:"assets/js/page-页面信息.dd05d77d.js",revision:"c6c2b7fbaa0b5f0a2d895690a576c9fc"},{url:"assets/js/page-页面配置.a8ff8527.js",revision:"0efd2fe34c512534e8ba0563bfdacc38"},{url:"assets/js/page-项目指令.16b207bb.js",revision:"5a18301cfcf7d45b2599ecad5de6ce8a"},{url:"assets/js/page-项目案例.7b6007dd.js",revision:"573349f8bea1b994c6a33d0d5e08db6e"},{url:"assets/js/page-首页.f0edb6f8.js",revision:"262234914ac5cf95994dc854a032221c"},{url:"assets/js/page-默认主题配置.97aa96a0.js",revision:"eb63807b10e74bb02b8d7c19cb5e68ee"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.ba84147b.js",revision:"4fd5813dd06ba2df92e18b690eaababe"},{url:"assets/js/vendors~layout-Layout.fe06f42d.js",revision:"d73b30bd8293d9647fa34422fefe8e79"},{url:"basic/index.html",revision:"1093bd0f5913a6066ac45990253eb5c6"},{url:"basic/markdown/demo.html",revision:"24ef714c681fc89086737f501b0e9b4f"},{url:"basic/markdown/emoji/index.html",revision:"34e65abc292d7db49a3fc80b3a733b19"},{url:"basic/markdown/emoji/locate.html",revision:"f37b848b1896e91dc0d107c2c42d4a66"},{url:"basic/markdown/emoji/nature.html",revision:"dfa094487f154271141d683814036bb1"},{url:"basic/markdown/emoji/object.html",revision:"d29b44c236988418ed237f1f8b13272f"},{url:"basic/markdown/emoji/people.html",revision:"519da3a5eafdb7198e05af4aa8bf52bc"},{url:"basic/markdown/emoji/symbol.html",revision:"b6c0c989149a4993fc3f4c0fd83bc4d0"},{url:"basic/markdown/index.html",revision:"20a7c6d93b84df269186a9d7ff0d4690"},{url:"basic/vuepress/case.html",revision:"eae488d028fadaa3a65fc8ed71529947"},{url:"basic/vuepress/command.html",revision:"a6a64ad08f8017b103c7e1898e5a08b7"},{url:"basic/vuepress/file.html",revision:"d8994c2bd96ba2dcabfc927e040f3db1"},{url:"basic/vuepress/index.html",revision:"470957601f3db444fe16048e38de6122"},{url:"basic/vuepress/plugin.html",revision:"20008cfe1e8d8bc3765e34bb061a4809"},{url:"basic/vuepress/theme/config.html",revision:"00869563018782e2f20339d4dd76d4bf"},{url:"basic/vuepress/theme/dev.html",revision:"2b88d8ee6b03be8dcbaafd590f5f134c"},{url:"basic/vuepress/theme/index.html",revision:"d7e7dba143853b9e4511f6a845f99101"},{url:"category/api/index.html",revision:"85f1022f5012d19cfbf3bf32e70e16b4"},{url:"category/api/page/2/index.html",revision:"ffa7a8d9c767451e0f6b9e0f76ab6c7b"},{url:"category/FAQ/index.html",revision:"bb350297469b2de3ab1e309cedfdab1c"},{url:"category/function/index.html",revision:"b1699fb77f2f6a521862b51ccb71890b"},{url:"category/function/page/2/index.html",revision:"d75c9173132837649e12decb131e7876"},{url:"category/index.html",revision:"5d87a0fa7f392f5caf7fdb2106005437"},{url:"category/instruction/index.html",revision:"192e75435835afad707116c5bf758340"},{url:"category/layout/index.html",revision:"83e9889e83155fe1d74871319395bdae"},{url:"category/layout/page/2/index.html",revision:"5de48c2c2e6c50d1e7981e72d48bf409"},{url:"category/markdown/index.html",revision:"7279ce9f4bbae21887bb69ddc29b7247"},{url:"demo/index.html",revision:"c5ddedc18e9f93d80a6e919c5d293ec4"},{url:"en/api/index.html",revision:"64ac1f5f65a79e5ebf19877e97b2687d"},{url:"en/api/page.html",revision:"2323ab949be957f0474e54cc9d896a92"},{url:"en/api/plugin/container.html",revision:"a20d0713975d35feefc03d174db51e17"},{url:"en/api/plugin/copyright.html",revision:"c87fe1dfd765340947a94ab9c2b4a9d9"},{url:"en/api/plugin/index.html",revision:"f1f1f5ed74e114872eec56edb361d8c8"},{url:"en/api/plugin/medium-zoom.html",revision:"9c310d3fcaa81ffd60a244cdbae158a8"},{url:"en/api/plugin/pwa.html",revision:"99960cb2ee251efdb56d28c5094912d3"},{url:"en/api/stylus.html",revision:"cefb3d4737e7ca97c70b3d0a2b7565f3"},{url:"en/api/themeConfig.html",revision:"07728fd876962bf3c070edacb3b6653a"},{url:"en/basic/index.html",revision:"76d038b2fbac12ffeeef0f6bc9a8a780"},{url:"en/basic/markdown/demo.html",revision:"9b79ca1a812ca2258d0894cb1ce502b7"},{url:"en/basic/markdown/emoji.html",revision:"0cf0b636090cac86cdabba439e22461a"},{url:"en/basic/markdown/index.html",revision:"22285cb035672c095bdf3a5225a4ef4e"},{url:"en/basic/vuepress/case.html",revision:"90f649a648e0f7b39baf3947497c8b9f"},{url:"en/basic/vuepress/command.html",revision:"b876b618a3343d1f212ffe45d9dec7f2"},{url:"en/basic/vuepress/file.html",revision:"0ef1797f232544c37e6e6c52a17a8598"},{url:"en/basic/vuepress/index.html",revision:"7cddb1f2789c49faec4a4151dff640f6"},{url:"en/basic/vuepress/plugin.html",revision:"9a5e197b50f29fc59b794711a8cbfbee"},{url:"en/basic/vuepress/theme/config.html",revision:"97e26abfdb312aa33b3fed0b191fc322"},{url:"en/basic/vuepress/theme/dev.html",revision:"db4c66cc3b6e383c377bb3a6a7cbb531"},{url:"en/basic/vuepress/theme/index.html",revision:"c4d177c375f7c6a4b777e48055640c70"},{url:"en/demo/index.html",revision:"38ec1e176ea140bbccbc9a1b8522ce5d"},{url:"en/FAQ/index.html",revision:"b3be8ad791c1aa16447f705e2ca78ad0"},{url:"en/guide/feature/blog.html",revision:"1a206157b2cb10cc7c5ad0850cb6b2ea"},{url:"en/guide/feature/comment.html",revision:"93d253191ec5884f1fea35d827bb9463"},{url:"en/guide/feature/component.html",revision:"d83125478257e5cc144693b3e14d58ac"},{url:"en/guide/feature/encrypt.html",revision:"44c2f836047543ff1481c32c26edc789"},{url:"en/guide/feature/index.html",revision:"4508f673afed4f8cda4d8eeb3180dd65"},{url:"en/guide/feature/markdown/align.html",revision:"3eb6c169f552f1bfaf8b9c489786d7b4"},{url:"en/guide/feature/markdown/flowchart.html",revision:"b7cdb054364b2284e6c850af52616e9a"},{url:"en/guide/feature/markdown/footnote.html",revision:"987216e1b27e8a91aa48fb46611d6967"},{url:"en/guide/feature/markdown/index.html",revision:"492e22a63b51ec85482f0264f78303aa"},{url:"en/guide/feature/markdown/mark.html",revision:"5df6aa32ba4e2bac65f84def47e6167b"},{url:"en/guide/feature/markdown/sup-sub.html",revision:"bd0f21b0dbddd6499167e6ded653095f"},{url:"en/guide/feature/markdown/tex.html",revision:"2e01e7ea3bcf07a7199e1981d3671d26"},{url:"en/guide/feature/page-info.html",revision:"e0b1fcebeb92b8427125445888d5e83e"},{url:"en/guide/feature/theme.html",revision:"a5acaf2828101afc8337c123e71aca6c"},{url:"en/guide/feature/typescript.html",revision:"27e47d97364fef8d1ccfedb3e54e4766"},{url:"en/guide/index.html",revision:"0cd900b6422b3e5a64a64468d7261a49"},{url:"en/guide/install.html",revision:"45321526014208161f92cfb8784074e6"},{url:"en/guide/layout/blog.html",revision:"f23729695eb774a1665187e9a7f47abc"},{url:"en/guide/layout/home.html",revision:"1a4817eccf4bb17673e4f5651ed489db"},{url:"en/guide/layout/index.html",revision:"e26bed2ef921738171c1ac0cb14e6baa"},{url:"en/guide/layout/navbar.html",revision:"32484e5d4f58260bf4c1a7e0659c1259"},{url:"en/guide/layout/page.html",revision:"f9a0e92bfda3e2bf6a9be23f3baba4e9"},{url:"en/guide/layout/sidebar.html",revision:"294a33e915b108b2022eaa34cbe3550d"},{url:"en/index.html",revision:"0b249c5aaa13673b08eb17738b0875aa"},{url:"FAQ/index.html",revision:"c6fc07b6c3299bcdcf8628a6cc4d6e85"},{url:"guide/feature/blog.html",revision:"a85ee2f0131c989f5075e26b5af4b2a2"},{url:"guide/feature/comment.html",revision:"6cfabd29f68d0b946a6918efeee21cab"},{url:"guide/feature/component.html",revision:"e0053c147119785af6b5c75a870b5732"},{url:"guide/feature/encrypt.html",revision:"cb83082f831efe25776ce48eb2f69346"},{url:"guide/feature/index.html",revision:"def827406bdf3396b8e4b9786dacb912"},{url:"guide/feature/markdown/align.html",revision:"415bb3cb85909c6303544db0b076cd7b"},{url:"guide/feature/markdown/flowchart.html",revision:"07b8e221276f5fa22f7c157131b98892"},{url:"guide/feature/markdown/footnote.html",revision:"6109847d502cd1e3a91ebb0f56cdfe61"},{url:"guide/feature/markdown/index.html",revision:"04cd74109f36e98a6ef470db3424d33f"},{url:"guide/feature/markdown/mark.html",revision:"fbc4a3fe6cd028e2ebf9c1bacfda45a2"},{url:"guide/feature/markdown/sup-sub.html",revision:"d6f8d68222eee33a51da5997fe67ebde"},{url:"guide/feature/markdown/tex.html",revision:"5a291df2ed7351d763a3502baefd6331"},{url:"guide/feature/page-info.html",revision:"4017420c43e6246b722f199dd7546c93"},{url:"guide/feature/theme.html",revision:"a76b490939b1fe27d40aa1a45479e3d2"},{url:"guide/feature/typescript.html",revision:"3b32cb166eba7925a6e00c6175f9ca88"},{url:"guide/index.html",revision:"74368faf8dce841eb947f7ecb864d51b"},{url:"guide/install.html",revision:"72830890bc7b10484ae35b548be68ea0"},{url:"guide/layout/blog.html",revision:"42329679f09820c29392afd89a2d74de"},{url:"guide/layout/home.html",revision:"4bfaf62d8fc4f7110cb4c8100e4cb4cc"},{url:"guide/layout/index.html",revision:"616ebad1d8de5d7da21a9aa86ecb971b"},{url:"guide/layout/navbar.html",revision:"73f61a75239b4868f803c4351f2bd5b2"},{url:"guide/layout/page.html",revision:"381a853b7a859f6b56935624ee7727d1"},{url:"guide/layout/sidebar.html",revision:"f0f707ea568093adc20bb07481152d49"},{url:"img/icon/appleIcon152.png",revision:"9172ed03ed0e66ca085720b7c02fcccc"},{url:"img/icon/chrome192.png",revision:"581c452b65c71f36375193f75bbb7b8c"},{url:"img/icon/chrome512.png",revision:"78af354a94a00054caa93bdba2560bce"},{url:"img/icon/msIcon144.png",revision:"2200b78e72efdcd597b384cf62947c1a"},{url:"index.html",revision:"c360329d52f74901b9cca62856a97bb8"},{url:"logo.png",revision:"13417285202b91bf6571ccef63c17039"},{url:"logo.svg",revision:"2ff99a4865a6eceeaf3d949e479c7990"},{url:"tag/api/index.html",revision:"a94f77f52808162d511522d9abd90b03"},{url:"tag/api/page/2/index.html",revision:"2beeed9ff71335a54f1821c293b67aed"},{url:"tag/blog/index.html",revision:"20de26c89030ef802b9c5dbabb11c18b"},{url:"tag/comment/index.html",revision:"288c4b718d0437b39999f9018daa4419"},{url:"tag/components/index.html",revision:"09b1f54bd6ebc0da4152f2151731908b"},{url:"tag/emoji/index.html",revision:"c8513d8dd3655d696fa29bb66b197e62"},{url:"tag/encrypt/index.html",revision:"931b6a6b41cce01d202e88805c03e5d7"},{url:"tag/enhance/index.html",revision:"51d8caa3c7cba563b0a430bb9f7024a0"},{url:"tag/frontmatter/index.html",revision:"2e1aa0ecf58463e5be468fa38f7096ec"},{url:"tag/function/index.html",revision:"3d1033591c93c00ef5402f798c172159"},{url:"tag/function/page/2/index.html",revision:"207a2f04b87435ef7d7b30640ee4cbb8"},{url:"tag/home/index.html",revision:"96f9e86eb3f695400df6e4cdd73d81da"},{url:"tag/index.html",revision:"033b5902227a07114ae6110193f066a3"},{url:"tag/intro/index.html",revision:"1d1284dfb9b1e26b5350fc1fdde2a75a"},{url:"tag/layout/index.html",revision:"8af3ee1afc980f023323cd1502b8c5ad"},{url:"tag/markdown/index.html",revision:"8c478c3efcadb299b1eb553107bcb343"},{url:"tag/page-info/index.html",revision:"6fbcc379d7e0046ac09eada9b489224a"},{url:"tag/plugin/index.html",revision:"4161d4e0f3c2a50267617bb7e27f5731"},{url:"tag/style/index.html",revision:"effde489e497bab8c00881b756b87d9b"},{url:"tag/themeConfig/index.html",revision:"c016892d3b16f0786e8bb83134fc5e95"},{url:"tag/typescript/index.html",revision:"fc997dd452b486d6b1e83069f4126ea5"},{url:"tag/vuepress/index.html",revision:"dcbee52b2f995d1cbf97fdfe16a7f14c"},{url:"timeline/index.html",revision:"ffb28a77c1e635d7af2bae50c65da8f4"}],{})}));
//# sourceMappingURL=service-worker.js.map
addEventListener('message', (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === 'skip-waiting')
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});
