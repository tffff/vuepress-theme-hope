if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,i,d)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const f={uri:location.origin+a.slice(1)};return Promise.all(i.map(a=>{switch(a){case"exports":return s;case"module":return f;default:return e(a)}})).then(e=>{const a=d(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-1a661b4a"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"404.html",revision:"ea6cc2d9fdf758f4178d2288d3bb07d2"},{url:"api/index.html",revision:"4f061031540258b53b31f20d03fe488a"},{url:"api/page.html",revision:"8a101e30b580f09dc84361091dcb811b"},{url:"api/plugin/container.html",revision:"c389b1890d5e80eaf153bb9b3f52b278"},{url:"api/plugin/copyright.html",revision:"f30c3e09418d7fd160f2f10fe6736168"},{url:"api/plugin/index.html",revision:"3898304423f5a3cf115d92557e38c0b7"},{url:"api/plugin/medium-zoom.html",revision:"4ea7a69714f50793704d6946c5261f6d"},{url:"api/plugin/pwa.html",revision:"5d8a7832f2fc8bbfe7405d9e214017ab"},{url:"api/stylus.html",revision:"257909eac7f793e0f7e69e2d41273c10"},{url:"api/themeConfig.html",revision:"1562d1aa65d747da97ca8e271db03fb1"},{url:"article/index.html",revision:"c8c0bad6a77040a189790ce212de4b48"},{url:"assets/css/0.styles.47d8d64d.css",revision:"fcd6244b5e312b1a7385124d33f8b740"},{url:"assets/fonts/KaTeX_AMS-Regular.7f06b4e3.woff",revision:"7f06b4e30317f784d61d26686aed0ab2"},{url:"assets/fonts/KaTeX_AMS-Regular.aaf4eee9.ttf",revision:"aaf4eee9fba9907d61c3935e0b6a54ae"},{url:"assets/fonts/KaTeX_AMS-Regular.e78e28b4.woff2",revision:"e78e28b4834954df047e4925e9dbf354"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.021dd4dc.ttf",revision:"021dd4dc61ee5f5cdf315f43b48c094b"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.1e802ca9.woff",revision:"1e802ca9dedc4ed4e3c6f645e4316128"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.4ec58bef.woff2",revision:"4ec58befa687e9752c3c91cd9bcf1bcb"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.7edb53b6.woff2",revision:"7edb53b6693d75b8a2232481eea1a52c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d3b46c3a.woff",revision:"d3b46c3a530116933081d9d74e3e9fe8"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d49f2d55.ttf",revision:"d49f2d55ce4f40f982d8ba63d746fbf9"},{url:"assets/fonts/KaTeX_Fraktur-Bold.a31e7cba.ttf",revision:"a31e7cba7b7221ebf1a2ae545fb306b2"},{url:"assets/fonts/KaTeX_Fraktur-Bold.c4c8cab7.woff",revision:"c4c8cab7d5be97b2bb283e531c077355"},{url:"assets/fonts/KaTeX_Fraktur-Bold.d5b59ec9.woff2",revision:"d5b59ec9764e10f4a82369ae29f3ac58"},{url:"assets/fonts/KaTeX_Fraktur-Regular.32a5339e.woff2",revision:"32a5339eb809f381a7357ba56f82aab3"},{url:"assets/fonts/KaTeX_Fraktur-Regular.a48dad4f.ttf",revision:"a48dad4f58c82e38a10da0ceebb86370"},{url:"assets/fonts/KaTeX_Fraktur-Regular.b7d9c46b.woff",revision:"b7d9c46bff5d51da6209e355cc4a235d"},{url:"assets/fonts/KaTeX_Main-Bold.22086eb5.woff",revision:"22086eb5d97009c3e99bcc1d16ce6865"},{url:"assets/fonts/KaTeX_Main-Bold.8e1e01c4.woff2",revision:"8e1e01c4b1207c0a383d9a2b4f86e637"},{url:"assets/fonts/KaTeX_Main-Bold.9ceff51b.ttf",revision:"9ceff51b3cb7ce6eb4e8efa8163a1472"},{url:"assets/fonts/KaTeX_Main-BoldItalic.284a17fe.woff2",revision:"284a17fe5baf72ff8217d4c7e70c0f82"},{url:"assets/fonts/KaTeX_Main-BoldItalic.4c57dbc4.woff",revision:"4c57dbc44bfff1fdf08a59cf556fdab3"},{url:"assets/fonts/KaTeX_Main-BoldItalic.e8b44b99.ttf",revision:"e8b44b990516dab7937bf240fde8b46a"},{url:"assets/fonts/KaTeX_Main-Italic.29c86397.ttf",revision:"29c86397e75cdcb3135af8295f1c2e28"},{url:"assets/fonts/KaTeX_Main-Italic.99be0e10.woff",revision:"99be0e10c38cd42466e6fe1665ef9536"},{url:"assets/fonts/KaTeX_Main-Italic.e533d5a2.woff2",revision:"e533d5a2506cf053cd671b335ec04dde"},{url:"assets/fonts/KaTeX_Main-Regular.5c734d78.woff2",revision:"5c734d78610fa35282f3379f866707f2"},{url:"assets/fonts/KaTeX_Main-Regular.5c94aef4.ttf",revision:"5c94aef490324b0925dbe5f643e8fd04"},{url:"assets/fonts/KaTeX_Main-Regular.b741441f.woff",revision:"b741441f6d71014d0453ca3ebc884dd4"},{url:"assets/fonts/KaTeX_Math-BoldItalic.9a2834a9.ttf",revision:"9a2834a9ff8ab411153571e0e55ac693"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b13731ef.woff",revision:"b13731ef4e2bfc3d8d859271e39550fc"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d747bd1e.woff2",revision:"d747bd1e7a6a43864285edd73dcde253"},{url:"assets/fonts/KaTeX_Math-Italic.291e76b8.ttf",revision:"291e76b8871b84560701bd29f9d1dcc7"},{url:"assets/fonts/KaTeX_Math-Italic.4ad08b82.woff2",revision:"4ad08b826b8065e1eab85324d726538c"},{url:"assets/fonts/KaTeX_Math-Italic.f0303906.woff",revision:"f0303906c2a67ac63bf1e8ccd638a89e"},{url:"assets/fonts/KaTeX_SansSerif-Bold.3fb41955.woff",revision:"3fb419559955e3ce75619f1a5e8c6c84"},{url:"assets/fonts/KaTeX_SansSerif-Bold.6e0830be.woff2",revision:"6e0830bee40435e72165345e0682fbfc"},{url:"assets/fonts/KaTeX_SansSerif-Bold.7dc027cb.ttf",revision:"7dc027cba9f7b11ec92af4a311372a85"},{url:"assets/fonts/KaTeX_SansSerif-Italic.4059868e.ttf",revision:"4059868e460d2d2e6be18e180d20c43d"},{url:"assets/fonts/KaTeX_SansSerif-Italic.727a9b0d.woff",revision:"727a9b0d97d72d2fc0228fe4e07fb4d8"},{url:"assets/fonts/KaTeX_SansSerif-Italic.fba01c9c.woff2",revision:"fba01c9c6fb2866a0f95bcacb2c187a5"},{url:"assets/fonts/KaTeX_SansSerif-Regular.2555754a.woff",revision:"2555754a67062cac3a0913b715ab982f"},{url:"assets/fonts/KaTeX_SansSerif-Regular.5c58d168.ttf",revision:"5c58d168c0b66d2c32234a6718e74dfb"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d929cd67.woff2",revision:"d929cd671b19f0cfea55b6200fb47461"},{url:"assets/fonts/KaTeX_Script-Regular.755e2491.woff2",revision:"755e2491f13b5269f0afd5a56f7aa692"},{url:"assets/fonts/KaTeX_Script-Regular.d12ea9ef.ttf",revision:"d12ea9efb375f9dc331f562e69892638"},{url:"assets/fonts/KaTeX_Script-Regular.d524c9a5.woff",revision:"d524c9a5b62a17f98f4a97af37fea735"},{url:"assets/fonts/KaTeX_Size1-Regular.7342d45b.ttf",revision:"7342d45b052c3a2abc21049959fbab7f"},{url:"assets/fonts/KaTeX_Size2-Regular.eb130dcc.ttf",revision:"eb130dcc661de766c999c60ba1525a88"},{url:"assets/fonts/KaTeX_Size4-Regular.ad767252.ttf",revision:"ad7672524b64b730dfd176140a8945cb"},{url:"assets/fonts/KaTeX_Typewriter-Regular.25702356.ttf",revision:"257023560753aeb0b89b7e434d3da17f"},{url:"assets/fonts/KaTeX_Typewriter-Regular.3fe216d2.woff",revision:"3fe216d2a5f736c560cde71984554b64"},{url:"assets/fonts/KaTeX_Typewriter-Regular.6cc31ea5.woff2",revision:"6cc31ea5c223c88705a13727a71417fa"},{url:"assets/img/architecture.9a93cf6c.png",revision:"9a93cf6cea38878e19c5816d1af28b17"},{url:"assets/img/blog.63c13822.png",revision:"63c138223630a1ad4ac7d129b848409d"},{url:"assets/img/category.4884e842.png",revision:"4884e842d997d40ecd3d347d69801497"},{url:"assets/img/darkmode.cd6c7360.png",revision:"cd6c73602cbe64a85e784daa3caf6b58"},{url:"assets/img/home.54e43b1b.png",revision:"54e43b1b23e40af37563d18d2ea728aa"},{url:"assets/img/home.c65f0280.png",revision:"c65f02809ddb4469ee5a7215e9c05802"},{url:"assets/img/homeImage.5ae9de9e.jpg",revision:"5ae9de9e15120d94e9892d0c15da9896"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/js/102.a3e430dc.js",revision:"39ed92499d7839d657f38a8712eca220"},{url:"assets/js/app.438cce1d.js",revision:"47f438a555473720209d38b7c765c270"},{url:"assets/js/layout-Blog.0a3ac3cf.js",revision:"6d26212d8be2cd5e26b4d881a0ddbbf5"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.103a4db2.js",revision:"aee05b77a858c8c4e79860a1fd74eb3e"},{url:"assets/js/layout-Layout.e793c82d.js",revision:"7f611bf29afcd85c2537440bd4bb09c0"},{url:"assets/js/layout-NotFound.16ddf868.js",revision:"c4e013110357db794afdc3325c4e15a7"},{url:"assets/js/page--0ab466d2.da062afd.js",revision:"8d1c148119b1896d6965b4600a84bb14"},{url:"assets/js/page--1f262314.bd3154f9.js",revision:"d6ee73f0b6e2da69c8c1b8a09be25801"},{url:"assets/js/page--5dafe67a.7034d11b.js",revision:"e1e662e0181cf1bac0b1330b4f6325ee"},{url:"assets/js/page--86453650.3342124d.js",revision:"0137fc19318f1e2f060dc65753e5bae1"},{url:"assets/js/page--9108a39c.ea419d02.js",revision:"efde87ce0a0ebb980a2d1c44ff7d8f65"},{url:"assets/js/page--d7fc60dc.0e7d6b18.js",revision:"b5547b9321fe28e9995da7327ed272e1"},{url:"assets/js/page-About Vuepress.64b4f094.js",revision:"a18724a0a7f9c02d7558150d8f8eb7af"},{url:"assets/js/page-API Docs.0f9db2fb.js",revision:"a0ea9dc584e1c0be2a3cf32249580beb"},{url:"assets/js/page-API 文档.08970931.js",revision:"9cd6ebe12e0b6089cf219ad97ae2b593"},{url:"assets/js/page-Basic.2992820f.js",revision:"59da32276042fa759ec5ba65d4f5778d"},{url:"assets/js/page-Blog homepage.bb555348.js",revision:"1fe311090470b346979dfaba41bd7290"},{url:"assets/js/page-Blog related.f0295aac.js",revision:"fca608061e9335e8ca431678a8e57400"},{url:"assets/js/page-Comment Function.b0f61e49.js",revision:"e1d65f7ae459c2f01853e685508d48db"},{url:"assets/js/page-Common problems.23800429.js",revision:"cf43d31c3e406db3c64699020c9c5305"},{url:"assets/js/page-Custom alignment.f9bcc0a5.js",revision:"c142916ec55bd9bc9f10f0daae97c84c"},{url:"assets/js/page-Darkmode and Theme color.cdaa4eb4.js",revision:"9eb7641151117b6484a8e7b4e9bc1196"},{url:"assets/js/page-Default Theme Config.6e887a47.js",revision:"831cd534f8f957d57133badf26efa9bb"},{url:"assets/js/page-Demos.d8daa7ce.js",revision:"190c2da895f6a4377af52e1faa4f8983"},{url:"assets/js/page-Emoji List.0da9bfc6.js",revision:"bd6ef3945ca161306e4d490fb1fa9463"},{url:"assets/js/page-Emoji 列表.8ecd6bd3.js",revision:"7e117bebd262b4030fe5fc043384cb40"},{url:"assets/js/page-Encryption function.c4a2154a.js",revision:"4fc4487610cc120701ad388abdd71287"},{url:"assets/js/page-File Structure.cb07d87e.js",revision:"ca290f25880c1fe35030dd10025984c9"},{url:"assets/js/page-Flowchart.91d48c28.js",revision:"5577f7b699c1ddc2d8b8dbfa8d591d6d"},{url:"assets/js/page-Footnote.d9174b56.js",revision:"1308f505545a9e33a8da7c9f71db2f56"},{url:"assets/js/page-Home Page.eda3deb0.js",revision:"9d5f990e66928be041ed885f5af31f8a"},{url:"assets/js/page-Home.342f7a6c.js",revision:"84dd62487e327ce4678ad51c1ca31e6a"},{url:"assets/js/page-Introduction.7621f5c2.js",revision:"7b3a1d53f72913f5eca608e4bd9b5e5b"},{url:"assets/js/page-Layout.aed1a620.js",revision:"d27f3e111da8900c2b91cddc7ba5e55e"},{url:"assets/js/page-Markdown DEMO.0d033c45.js",revision:"85cc43a68b71171dd5a458f0f31f3200"},{url:"assets/js/page-Markdown Introduction.309a5c6d.js",revision:"80208c36646d18f598c57b5327ceffb8"},{url:"assets/js/page-Markdown 介绍.684c80ba.js",revision:"3b6136dd182c17b0db5eb122e103d025"},{url:"assets/js/page-Markdown 新语法.784ca7a8.js",revision:"311c140b6127cf4e7e06cc9b8d90ea94"},{url:"assets/js/page-Markdown示例.e7b9c9be.js",revision:"857f633266e85cc0cad38a1e7344bba7"},{url:"assets/js/page-Markup.b49ddd1b.js",revision:"d4eabe78e302bfc54cfa464f2d106829"},{url:"assets/js/page-NavBar.0cc82741.js",revision:"42290490a27d6a7d37cdfd04448972eb"},{url:"assets/js/page-New Component.dd9a2498.js",revision:"f0e5dc887e531dcceb8e6987dd8a9a9c"},{url:"assets/js/page-New feature.3140d595.js",revision:"c7ae6800c8f4667e06a533933ab2c0b0"},{url:"assets/js/page-New syntax in Markdown.ebf2fb52.js",revision:"f7964b5429fe6cc285716c3dca08afb6"},{url:"assets/js/page-Page Configuration.ff19f1e2.js",revision:"6a5319574f5fbcdbcfabf4277a039144"},{url:"assets/js/page-Page information.7c96b206.js",revision:"f1a1e81273ee10de47716ab8da75ad56"},{url:"assets/js/page-Page.d48f9d95.js",revision:"da6de01c320b27af18022ef3be8f5b01"},{url:"assets/js/page-Plugin Description.ce68edab.js",revision:"ada5977efe551b1f2e38c792c5c74be8"},{url:"assets/js/page-Plugins.3bea0160.js",revision:"73d6a15f3290a0d891631ffdfa2f3a78"},{url:"assets/js/page-Sidebar.459586b8.js",revision:"d1df005f7043077add785e1c6ee605fc"},{url:"assets/js/page-stylus configuration.110e9654.js",revision:"5b3bb57550201183ce0d3403597c4b00"},{url:"assets/js/page-stylus 配置.373bf3fa.js",revision:"ac50f06482cb2c4be33e6f2e5e373a8c"},{url:"assets/js/page-Superscript and Subscript.31658566.js",revision:"ada64759129320a87b53b7100c7ba577"},{url:"assets/js/page-Tex Support.4ebfe534.js",revision:"0cb24011ad706bbd93632cffb2c4fadb"},{url:"assets/js/page-Tex 语法支持.4a7f8fd2.js",revision:"8219c9b5190805d87d36792d3d5ba2d7"},{url:"assets/js/page-Theme Config.10d37d11.js",revision:"dafa5b517e9441a83b029ce98aa0c1c9"},{url:"assets/js/page-TS support.2acc10a0.js",revision:"8c2b4d246ed8de51ae97c72c97151a2f"},{url:"assets/js/page-TS 支持.a9b8bbfd.js",revision:"0a631e21af61382e5b7461b23eec6c8d"},{url:"assets/js/page-Vuepress Cases.467034a4.js",revision:"5ef788006a4a8a7dfa4e72c1684f4c95"},{url:"assets/js/page-Vuepress commands.3a69aaf1.js",revision:"932531fefce28396ee501fc3b7ad21f0"},{url:"assets/js/page-Vuepress 案例.3eb0e9f6.js",revision:"34343d635355abcfaa469bb7c10e9823"},{url:"assets/js/page-vuepress-plugin-container.041f6b3a.js",revision:"473d69caee1401ae03947e92c4026860"},{url:"assets/js/page-vuepress-plugin-copyright.70d5ee72.js",revision:"f6adcffc06cf94017f9db04fbdfbf20f"},{url:"assets/js/page-Vuepress.76a4310a.js",revision:"a36bb16c7ebf84ace453293af8328051"},{url:"assets/js/page-Writing a theme.fc86abd0.js",revision:"ef65446d8c65e95d77270d2eb4dc5b5b"},{url:"assets/js/page-上下角标.b681129f.js",revision:"7c7cf398bb9b2a2a9f10ddc247d552ef"},{url:"assets/js/page-主题配置.464e1d9d.js",revision:"f379b6eba63f58b8893cf70cf3408c4d"},{url:"assets/js/page-人物.5ab45cf7.js",revision:"feb7e23e112992f1c161ad3da7dbca5f"},{url:"assets/js/page-介绍.2f8666f0.js",revision:"c562aac3f067d53ffda70527d50942dd"},{url:"assets/js/page-侧边栏.5b776833.js",revision:"02a0626237a0f8948e0e8deede235912"},{url:"assets/js/page-加密功能.dc7fea1e.js",revision:"c0ede1b48643afd6241345092d2094e5"},{url:"assets/js/page-博客相关.90570855.js",revision:"b9d96f2f88bf7a7f0e12bb98efe5ec4a"},{url:"assets/js/page-博客首页.651811b0.js",revision:"ee077affb31d4d54b05828e440c5a007"},{url:"assets/js/page-地点.a3204fac.js",revision:"89367acc1578751129974d5b0b384678"},{url:"assets/js/page-基础知识.e5732d92.js",revision:"f8d48e7ab82227beddff971c5e768645"},{url:"assets/js/page-对象.96223121.js",revision:"2974c98aba1976621608387b5ab25f15"},{url:"assets/js/page-导航栏.79a6404a.js",revision:"47561798c73bb83934f99fe6fa2bd33f"},{url:"assets/js/page-布局.c0a69496.js",revision:"c9fe6d0bc1766eaa514332ca653cae7b"},{url:"assets/js/page-常见问题.0d879d7f.js",revision:"e79a131bb4652acf0632ecf21429a591"},{url:"assets/js/page-开发主题.79238590.js",revision:"68c34e8c6649e8ba5700892cc7e7cffe"},{url:"assets/js/page-插件.f4b65a02.js",revision:"b18631f35af9352020039da0df087c97"},{url:"assets/js/page-插件说明.07692ab4.js",revision:"4dbae50ff35d3034e528320e4defe529"},{url:"assets/js/page-文件结构介绍.da035c47.js",revision:"629bb2b1094f88fc890f1484a03f6d25"},{url:"assets/js/page-新增特性.5f4427b4.js",revision:"1591024c6a7a810363fd434db3d84873"},{url:"assets/js/page-新增组件.f3cd6a2d.js",revision:"1648538ba8df65fa299ee8c2987760fe"},{url:"assets/js/page-标记.78a7bc68.js",revision:"557d21f260ba812322c6a6855feb6a63"},{url:"assets/js/page-流程图支持.d9728ea0.js",revision:"12afdcb119b64445cf061b06829fd3ec"},{url:"assets/js/page-深色模式与主题色.06a51cc4.js",revision:"5a4822fe14ccfc044f67f36d7a073e7a"},{url:"assets/js/page-符号.2ff84f0c.js",revision:"9f68ffd016d6127116682c36a747c8d9"},{url:"assets/js/page-脚注.87e59dfd.js",revision:"508501e432f24b58929080a330d2eb30"},{url:"assets/js/page-自定义对齐.aa35ca22.js",revision:"91aa5c008bc0e3a318177ac76c93f412"},{url:"assets/js/page-自然.a836d1a3.js",revision:"ce2806fd3355acd30a456aeac0779f63"},{url:"assets/js/page-评论功能.ead72bb7.js",revision:"28acdc9d70c00d0b1304f19bd716d567"},{url:"assets/js/page-页面.38a3a13a.js",revision:"14d3f0462e7e5ac9e7253c503e39e00a"},{url:"assets/js/page-页面信息.94fcb900.js",revision:"c6c2b7fbaa0b5f0a2d895690a576c9fc"},{url:"assets/js/page-页面配置.1a119b33.js",revision:"0efd2fe34c512534e8ba0563bfdacc38"},{url:"assets/js/page-项目指令.c4f35d9a.js",revision:"5a18301cfcf7d45b2599ecad5de6ce8a"},{url:"assets/js/page-项目案例.69474ebb.js",revision:"573349f8bea1b994c6a33d0d5e08db6e"},{url:"assets/js/page-首页.1c500c25.js",revision:"055a6adbd470360023e5ae803d9f56ec"},{url:"assets/js/page-默认主题配置.d8de946c.js",revision:"eb63807b10e74bb02b8d7c19cb5e68ee"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.7e6127f0.js",revision:"f0e0729b55d96fbc295a10614718b50d"},{url:"assets/js/vendors~layout-Layout.de5b8604.js",revision:"a388db0b3e8615f0caf4ba0f79381f57"},{url:"basic/index.html",revision:"508b49cbffacf47a9f8e48e5d93ad9f0"},{url:"basic/markdown/demo.html",revision:"a3e3853b5bae52259528d1409ee537bc"},{url:"basic/markdown/emoji/index.html",revision:"6d0ea82221708640958beecee887881d"},{url:"basic/markdown/emoji/locate.html",revision:"6727bdd2b8d293307eedc9e1a7d7f082"},{url:"basic/markdown/emoji/nature.html",revision:"a2dd279f8c5e5475fe807422725f2038"},{url:"basic/markdown/emoji/object.html",revision:"0529f905d2754ea3f320834fc6992bd9"},{url:"basic/markdown/emoji/people.html",revision:"574021a6ff441b55ef2974c70deb6061"},{url:"basic/markdown/emoji/symbol.html",revision:"396f94d9cb6e6313c654c1c6a4fd79fd"},{url:"basic/markdown/index.html",revision:"3455b4c6db96aca73fa159e94dbea87d"},{url:"basic/vuepress/case.html",revision:"89f229a52b10be06879787da23adbdbb"},{url:"basic/vuepress/command.html",revision:"6e7cf03884ddef2721a23474d5379ce9"},{url:"basic/vuepress/file.html",revision:"3529f4103385999be13534037da64eda"},{url:"basic/vuepress/index.html",revision:"ff707a55490c3cccb4044f0e306aff5c"},{url:"basic/vuepress/plugin.html",revision:"7a241f3af57e910950319e9d958f32f8"},{url:"basic/vuepress/theme/config.html",revision:"605bf1f8a49ab36fc8301c0882532ce3"},{url:"basic/vuepress/theme/dev.html",revision:"60546f3c4ca607c5b816c7e180e382c2"},{url:"basic/vuepress/theme/index.html",revision:"2bb1d702e076744b3ca98a72bbea3936"},{url:"category/api/index.html",revision:"524ca147edf397266026c52862a69359"},{url:"category/api/page/2/index.html",revision:"c98f8176482f13f0a165e75b4ce58e7a"},{url:"category/FAQ/index.html",revision:"55a26f97ac5febfe1de483ec2d2254dd"},{url:"category/function/index.html",revision:"c15f5152882e68d8d932fae5d1296d7d"},{url:"category/function/page/2/index.html",revision:"8eab2b5ee251ff94560ba8122118efb6"},{url:"category/index.html",revision:"8b9de3038ce141969063c1ed98976f50"},{url:"category/instruction/index.html",revision:"c92dea62c08ee37cfa2861716818b8b5"},{url:"category/layout/index.html",revision:"84cd7c9a817128d15af4d425da4b89e1"},{url:"category/layout/page/2/index.html",revision:"9f1e6fbc4a39dd4d2948125658e2a9fe"},{url:"category/markdown/index.html",revision:"c73dfe95c6a31cfa82e17ec75bee8793"},{url:"demo/index.html",revision:"37a106aa9b58faaa7fa1293c58ab230a"},{url:"en/api/index.html",revision:"371d00f7ace8387d53bf5ec7272e98e0"},{url:"en/api/page.html",revision:"2540729aa794701abfad51711f878a76"},{url:"en/api/plugin/container.html",revision:"11f60162fab6850a1873e8e91a582fb6"},{url:"en/api/plugin/copyright.html",revision:"b8122be03ec0367a989e7e78e6e0f2a1"},{url:"en/api/plugin/index.html",revision:"9eafd58ee03629ffbd93a7da0d7009d2"},{url:"en/api/plugin/medium-zoom.html",revision:"4c30886416c068446494d8cf2c7ed3f5"},{url:"en/api/plugin/pwa.html",revision:"33f16c7e78ac5533c00e4dc008edcd92"},{url:"en/api/stylus.html",revision:"e697e29999c4abacb585b91a314d482d"},{url:"en/api/themeConfig.html",revision:"b9b5e98a597a2128ebb49be3d9b79c25"},{url:"en/basic/index.html",revision:"564f9509fa3fae480ad4ecfceae546ae"},{url:"en/basic/markdown/demo.html",revision:"3a02ae0283a7a90b3d41a4e3091c2892"},{url:"en/basic/markdown/emoji.html",revision:"195c88219f20f957a68f4b67eef8d5a4"},{url:"en/basic/markdown/index.html",revision:"e1825e0b3d0e630d7200895cd7149947"},{url:"en/basic/vuepress/case.html",revision:"4e59208f08da68109f74561e3e29dfc7"},{url:"en/basic/vuepress/command.html",revision:"a41c4bed9309ac406c872aa0de74a49e"},{url:"en/basic/vuepress/file.html",revision:"6b8ef8c4d31d8e2ad6c74e434e1fa536"},{url:"en/basic/vuepress/index.html",revision:"77b5e9954df82d960f7b5d085014186e"},{url:"en/basic/vuepress/plugin.html",revision:"e933592efb31c19788e17cad310d3ec5"},{url:"en/basic/vuepress/theme/config.html",revision:"df55fca033b5fb78cf547d80cbc92160"},{url:"en/basic/vuepress/theme/dev.html",revision:"ad9a15a5e8ccd58f3131252de140933c"},{url:"en/basic/vuepress/theme/index.html",revision:"18884d08d4551bd911207b2a1195ded8"},{url:"en/demo/index.html",revision:"a35cdd38b08fd4c57df6f88d19a9c269"},{url:"en/FAQ/index.html",revision:"ac2412472e5b0a0edf8903840d4f9a77"},{url:"en/guide/feature/blog.html",revision:"2e8b11af50f11a7f57a14f8f429039e0"},{url:"en/guide/feature/comment.html",revision:"b7e9b89c6a293f699f8055eae2a6712b"},{url:"en/guide/feature/component.html",revision:"7c9384303d17efd8c9953d1fedef2b19"},{url:"en/guide/feature/encrypt.html",revision:"2bcf283d8a99478ad4d908e75ecbf34c"},{url:"en/guide/feature/index.html",revision:"a2bf9e3b9c9b83c63a4aec9f6fc3c178"},{url:"en/guide/feature/markdown/align.html",revision:"576bd0b381e64a91d35cf155da1cc82e"},{url:"en/guide/feature/markdown/flowchart.html",revision:"fc4c163963233f88afd25e63e3e0831d"},{url:"en/guide/feature/markdown/footnote.html",revision:"78f62bde5b384511f8a9a01cac81e741"},{url:"en/guide/feature/markdown/index.html",revision:"0d08dd20ef57f5543008b0c4ae134789"},{url:"en/guide/feature/markdown/mark.html",revision:"dec76ea13396bceac750d135628c8b8c"},{url:"en/guide/feature/markdown/sup-sub.html",revision:"115e900fa446ef9d7829dd0aff8f3451"},{url:"en/guide/feature/markdown/tex.html",revision:"dd58075ed7ebcc381165592790c7d75e"},{url:"en/guide/feature/page-info.html",revision:"1195a3d1edd0e631aee6dd81cce9138d"},{url:"en/guide/feature/theme.html",revision:"d681b1ce81b9bc7997127ffc96ed9009"},{url:"en/guide/feature/typescript.html",revision:"72295950910c37c050451e7f4d9373cd"},{url:"en/guide/index.html",revision:"a77faee0155b00cd2ad4b6ac03f192b3"},{url:"en/guide/install.html",revision:"87f72c0b02942b804d59cc005109b5aa"},{url:"en/guide/layout/blog.html",revision:"aed76f7486f34d1ce4eb482717036c51"},{url:"en/guide/layout/home.html",revision:"8350faaa85f19aaf75bc5ca20bc1a1a0"},{url:"en/guide/layout/index.html",revision:"00255bc132b7a121a775f92aa4c3f953"},{url:"en/guide/layout/navbar.html",revision:"212210b5e6f03f3fa54c680f69167b1f"},{url:"en/guide/layout/page.html",revision:"cf528af756fdd936af3ff399cf71cbd3"},{url:"en/guide/layout/sidebar.html",revision:"07f10bf672510e5b0c82658ecfa161cf"},{url:"en/index.html",revision:"0da0b76294ab22461241122c171b0a63"},{url:"FAQ/index.html",revision:"5b41da2cd14a4562fdc80f1236577799"},{url:"guide/feature/blog.html",revision:"1d1d5b7490da67216d69e121dc3e18f7"},{url:"guide/feature/comment.html",revision:"d308166623fe9a4ac9d8459dc4385885"},{url:"guide/feature/component.html",revision:"6265c4428e88411a4b8ea0e48ffc0b7c"},{url:"guide/feature/encrypt.html",revision:"62d4d9d69a319c963e97a8abdb9593c4"},{url:"guide/feature/index.html",revision:"d9d83ab4a7161431021e7613cea1bf3c"},{url:"guide/feature/markdown/align.html",revision:"bccaec6a7eaf26b49d712a016f9f01f5"},{url:"guide/feature/markdown/flowchart.html",revision:"604a366901df804f808b68e469bb28e0"},{url:"guide/feature/markdown/footnote.html",revision:"3cdf4f775491e1385da0db59880bf1ba"},{url:"guide/feature/markdown/index.html",revision:"68f514d7534a35a0cd7c1d918c968b6b"},{url:"guide/feature/markdown/mark.html",revision:"99d094820ae887e1e0075d26de260400"},{url:"guide/feature/markdown/sup-sub.html",revision:"a51695f04520a9a73115a7dd142ece0b"},{url:"guide/feature/markdown/tex.html",revision:"d836859b1b1ce51352a43ce874a71d44"},{url:"guide/feature/page-info.html",revision:"dc105ac99b6ea1e24240f23ed3823314"},{url:"guide/feature/theme.html",revision:"ca5cad476892095f2012a41a19cbe951"},{url:"guide/feature/typescript.html",revision:"ccea15d5ce140cf7afebe37976928d26"},{url:"guide/index.html",revision:"a4011c68e053da8df74bcdc45fa6cc65"},{url:"guide/install.html",revision:"4f5c3adc687a7dcabbb5bce806abde99"},{url:"guide/layout/blog.html",revision:"0a4dd83c89bc3c2ab223a7b757f699a1"},{url:"guide/layout/home.html",revision:"8521183e72c6c67e72e568d354f5dec5"},{url:"guide/layout/index.html",revision:"fa3dc0b89c5b2795e141e2d09d56d677"},{url:"guide/layout/navbar.html",revision:"a01800af461d3b05304e33926ea79f0c"},{url:"guide/layout/page.html",revision:"ad5afcfa36e3b875ec0bbc88e274e90f"},{url:"guide/layout/sidebar.html",revision:"4acb911c9f30d1e3f008def7fe61ede8"},{url:"img/icon/appleIcon152.png",revision:"9172ed03ed0e66ca085720b7c02fcccc"},{url:"img/icon/chrome192.png",revision:"581c452b65c71f36375193f75bbb7b8c"},{url:"img/icon/chrome512.png",revision:"78af354a94a00054caa93bdba2560bce"},{url:"img/icon/msIcon144.png",revision:"2200b78e72efdcd597b384cf62947c1a"},{url:"index.html",revision:"79646ea724abb258a24bb8fd27f05f8f"},{url:"logo.png",revision:"13417285202b91bf6571ccef63c17039"},{url:"logo.svg",revision:"2ff99a4865a6eceeaf3d949e479c7990"},{url:"tag/api/index.html",revision:"6f4799e7a9fd81e0d1c0d1919195878f"},{url:"tag/api/page/2/index.html",revision:"f0fe0bee9f6112464c66f99e71acafd9"},{url:"tag/blog/index.html",revision:"1e463e8bc6d5c84063612e40ab90524d"},{url:"tag/comment/index.html",revision:"5066fdb0cb48cd7a8afcba3ededc3b2a"},{url:"tag/components/index.html",revision:"ee6aea65f33493983c8a53c694a651d3"},{url:"tag/emoji/index.html",revision:"44be79fa2f3424e1f0088e27b4c74c59"},{url:"tag/encrypt/index.html",revision:"6b00c6985a242ea908c6cf679bd2c2f6"},{url:"tag/enhance/index.html",revision:"f256f15a702f8f5a4b14dffd9e3e8221"},{url:"tag/frontmatter/index.html",revision:"efc7ee0a75da26cd3d67c2fd00a95244"},{url:"tag/function/index.html",revision:"323960c18fd4bede8fbc625cb1396e52"},{url:"tag/function/page/2/index.html",revision:"efda54f5226b363bc96210341f9a9d23"},{url:"tag/home/index.html",revision:"41decd4a9d9ccf2496166b99f64628ca"},{url:"tag/index.html",revision:"2001e2141919250530a1e2dd74221e22"},{url:"tag/intro/index.html",revision:"54e09404ccb826345acbad0fb5381fb0"},{url:"tag/layout/index.html",revision:"e40d5848a46f9ef5f42848be1f7ee2e4"},{url:"tag/markdown/index.html",revision:"0d320c05fd23504f0bff6b53296a6bc6"},{url:"tag/page-info/index.html",revision:"625ccb374a1966f03c0aa150a7213304"},{url:"tag/plugin/index.html",revision:"5d40d94dc485af3127b5fc26d1b5058f"},{url:"tag/style/index.html",revision:"ad76084f6308e95bc09379cd21e16064"},{url:"tag/themeConfig/index.html",revision:"4367474a5af04fe5bd0b5318ff19f861"},{url:"tag/typescript/index.html",revision:"58a4e40a4701108cf4f3147ad297a57d"},{url:"tag/vuepress/index.html",revision:"bdd27f062bc7c990dc36d131859f937e"},{url:"timeline/index.html",revision:"cb6fc29972e89e8a7d20ab270661179c"}],{})}));
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
