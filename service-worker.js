if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,i,d)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const r={uri:location.origin+a.slice(1)};return Promise.all(i.map(a=>{switch(a){case"exports":return s;case"module":return r;default:return e(a)}})).then(e=>{const a=d(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-1a661b4a"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"404.html",revision:"5914b53147b54c91bc8f85d6c1d158d3"},{url:"api/index.html",revision:"dd41ad37b85f9eb8ebf7aa7c3cee3a22"},{url:"api/page.html",revision:"db2671c21266aea38f7da6294744a464"},{url:"api/plugin/container.html",revision:"22e5b1a4020fcbda98c9990a47bfab1d"},{url:"api/plugin/copyright.html",revision:"3f8198d58beea73b212b8e3a94779746"},{url:"api/plugin/index.html",revision:"57d980a54c5e46e0eefa7fdf52149c25"},{url:"api/plugin/medium-zoom.html",revision:"3715b5b51abf0cfd328e13a412947472"},{url:"api/plugin/pwa.html",revision:"0f39ccbe0a7bc82a87ed0b9c09d798e6"},{url:"api/stylus.html",revision:"866d7467a9b6c866aec4000629b1e2ab"},{url:"api/themeConfig.html",revision:"c6b4893520c8f037ea90c3b2a1860536"},{url:"article/index.html",revision:"09bc94e53812d583c2a52a7af7969385"},{url:"assets/css/0.styles.a9b7c7e0.css",revision:"6b120757360be69545e7ad9e428f1602"},{url:"assets/fonts/KaTeX_AMS-Regular.7f06b4e3.woff",revision:"7f06b4e30317f784d61d26686aed0ab2"},{url:"assets/fonts/KaTeX_AMS-Regular.aaf4eee9.ttf",revision:"aaf4eee9fba9907d61c3935e0b6a54ae"},{url:"assets/fonts/KaTeX_AMS-Regular.e78e28b4.woff2",revision:"e78e28b4834954df047e4925e9dbf354"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.021dd4dc.ttf",revision:"021dd4dc61ee5f5cdf315f43b48c094b"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.1e802ca9.woff",revision:"1e802ca9dedc4ed4e3c6f645e4316128"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.4ec58bef.woff2",revision:"4ec58befa687e9752c3c91cd9bcf1bcb"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.7edb53b6.woff2",revision:"7edb53b6693d75b8a2232481eea1a52c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d3b46c3a.woff",revision:"d3b46c3a530116933081d9d74e3e9fe8"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d49f2d55.ttf",revision:"d49f2d55ce4f40f982d8ba63d746fbf9"},{url:"assets/fonts/KaTeX_Fraktur-Bold.a31e7cba.ttf",revision:"a31e7cba7b7221ebf1a2ae545fb306b2"},{url:"assets/fonts/KaTeX_Fraktur-Bold.c4c8cab7.woff",revision:"c4c8cab7d5be97b2bb283e531c077355"},{url:"assets/fonts/KaTeX_Fraktur-Bold.d5b59ec9.woff2",revision:"d5b59ec9764e10f4a82369ae29f3ac58"},{url:"assets/fonts/KaTeX_Fraktur-Regular.32a5339e.woff2",revision:"32a5339eb809f381a7357ba56f82aab3"},{url:"assets/fonts/KaTeX_Fraktur-Regular.a48dad4f.ttf",revision:"a48dad4f58c82e38a10da0ceebb86370"},{url:"assets/fonts/KaTeX_Fraktur-Regular.b7d9c46b.woff",revision:"b7d9c46bff5d51da6209e355cc4a235d"},{url:"assets/fonts/KaTeX_Main-Bold.22086eb5.woff",revision:"22086eb5d97009c3e99bcc1d16ce6865"},{url:"assets/fonts/KaTeX_Main-Bold.8e1e01c4.woff2",revision:"8e1e01c4b1207c0a383d9a2b4f86e637"},{url:"assets/fonts/KaTeX_Main-Bold.9ceff51b.ttf",revision:"9ceff51b3cb7ce6eb4e8efa8163a1472"},{url:"assets/fonts/KaTeX_Main-BoldItalic.284a17fe.woff2",revision:"284a17fe5baf72ff8217d4c7e70c0f82"},{url:"assets/fonts/KaTeX_Main-BoldItalic.4c57dbc4.woff",revision:"4c57dbc44bfff1fdf08a59cf556fdab3"},{url:"assets/fonts/KaTeX_Main-BoldItalic.e8b44b99.ttf",revision:"e8b44b990516dab7937bf240fde8b46a"},{url:"assets/fonts/KaTeX_Main-Italic.29c86397.ttf",revision:"29c86397e75cdcb3135af8295f1c2e28"},{url:"assets/fonts/KaTeX_Main-Italic.99be0e10.woff",revision:"99be0e10c38cd42466e6fe1665ef9536"},{url:"assets/fonts/KaTeX_Main-Italic.e533d5a2.woff2",revision:"e533d5a2506cf053cd671b335ec04dde"},{url:"assets/fonts/KaTeX_Main-Regular.5c734d78.woff2",revision:"5c734d78610fa35282f3379f866707f2"},{url:"assets/fonts/KaTeX_Main-Regular.5c94aef4.ttf",revision:"5c94aef490324b0925dbe5f643e8fd04"},{url:"assets/fonts/KaTeX_Main-Regular.b741441f.woff",revision:"b741441f6d71014d0453ca3ebc884dd4"},{url:"assets/fonts/KaTeX_Math-BoldItalic.9a2834a9.ttf",revision:"9a2834a9ff8ab411153571e0e55ac693"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b13731ef.woff",revision:"b13731ef4e2bfc3d8d859271e39550fc"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d747bd1e.woff2",revision:"d747bd1e7a6a43864285edd73dcde253"},{url:"assets/fonts/KaTeX_Math-Italic.291e76b8.ttf",revision:"291e76b8871b84560701bd29f9d1dcc7"},{url:"assets/fonts/KaTeX_Math-Italic.4ad08b82.woff2",revision:"4ad08b826b8065e1eab85324d726538c"},{url:"assets/fonts/KaTeX_Math-Italic.f0303906.woff",revision:"f0303906c2a67ac63bf1e8ccd638a89e"},{url:"assets/fonts/KaTeX_SansSerif-Bold.3fb41955.woff",revision:"3fb419559955e3ce75619f1a5e8c6c84"},{url:"assets/fonts/KaTeX_SansSerif-Bold.6e0830be.woff2",revision:"6e0830bee40435e72165345e0682fbfc"},{url:"assets/fonts/KaTeX_SansSerif-Bold.7dc027cb.ttf",revision:"7dc027cba9f7b11ec92af4a311372a85"},{url:"assets/fonts/KaTeX_SansSerif-Italic.4059868e.ttf",revision:"4059868e460d2d2e6be18e180d20c43d"},{url:"assets/fonts/KaTeX_SansSerif-Italic.727a9b0d.woff",revision:"727a9b0d97d72d2fc0228fe4e07fb4d8"},{url:"assets/fonts/KaTeX_SansSerif-Italic.fba01c9c.woff2",revision:"fba01c9c6fb2866a0f95bcacb2c187a5"},{url:"assets/fonts/KaTeX_SansSerif-Regular.2555754a.woff",revision:"2555754a67062cac3a0913b715ab982f"},{url:"assets/fonts/KaTeX_SansSerif-Regular.5c58d168.ttf",revision:"5c58d168c0b66d2c32234a6718e74dfb"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d929cd67.woff2",revision:"d929cd671b19f0cfea55b6200fb47461"},{url:"assets/fonts/KaTeX_Script-Regular.755e2491.woff2",revision:"755e2491f13b5269f0afd5a56f7aa692"},{url:"assets/fonts/KaTeX_Script-Regular.d12ea9ef.ttf",revision:"d12ea9efb375f9dc331f562e69892638"},{url:"assets/fonts/KaTeX_Script-Regular.d524c9a5.woff",revision:"d524c9a5b62a17f98f4a97af37fea735"},{url:"assets/fonts/KaTeX_Size1-Regular.7342d45b.ttf",revision:"7342d45b052c3a2abc21049959fbab7f"},{url:"assets/fonts/KaTeX_Size2-Regular.eb130dcc.ttf",revision:"eb130dcc661de766c999c60ba1525a88"},{url:"assets/fonts/KaTeX_Size4-Regular.ad767252.ttf",revision:"ad7672524b64b730dfd176140a8945cb"},{url:"assets/fonts/KaTeX_Typewriter-Regular.25702356.ttf",revision:"257023560753aeb0b89b7e434d3da17f"},{url:"assets/fonts/KaTeX_Typewriter-Regular.3fe216d2.woff",revision:"3fe216d2a5f736c560cde71984554b64"},{url:"assets/fonts/KaTeX_Typewriter-Regular.6cc31ea5.woff2",revision:"6cc31ea5c223c88705a13727a71417fa"},{url:"assets/img/architecture.9a93cf6c.png",revision:"9a93cf6cea38878e19c5816d1af28b17"},{url:"assets/img/blog.63c13822.png",revision:"63c138223630a1ad4ac7d129b848409d"},{url:"assets/img/category.4884e842.png",revision:"4884e842d997d40ecd3d347d69801497"},{url:"assets/img/darkmode.cd6c7360.png",revision:"cd6c73602cbe64a85e784daa3caf6b58"},{url:"assets/img/home.54e43b1b.png",revision:"54e43b1b23e40af37563d18d2ea728aa"},{url:"assets/img/home.c65f0280.png",revision:"c65f02809ddb4469ee5a7215e9c05802"},{url:"assets/img/homeImage.5ae9de9e.jpg",revision:"5ae9de9e15120d94e9892d0c15da9896"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/js/102.9eb0bd0d.js",revision:"39ed92499d7839d657f38a8712eca220"},{url:"assets/js/app.fb569240.js",revision:"42eea00f9ea5b7397810c3cb97dba99e"},{url:"assets/js/layout-Blog.7695ac4f.js",revision:"37e3542f85cb6609eedc92c6d669747c"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.ad7dde21.js",revision:"503135f27a368c36fd4c241e14ea40c4"},{url:"assets/js/layout-Layout.b7d9a945.js",revision:"798d41f916cb48932f45f880077fceaf"},{url:"assets/js/layout-NotFound.6e2e7c4e.js",revision:"6040745a6fc94d6a0b5cf35d4890ba2b"},{url:"assets/js/page--0ab466d2.183a1a04.js",revision:"3e6af0ea10514aa21fc0b5a04b3e3c91"},{url:"assets/js/page--1f262314.96af7543.js",revision:"4d4dc303ac2a629db190afa859c70e59"},{url:"assets/js/page--5dafe67a.ef53b0ee.js",revision:"87a3ee8c111f6b05d868934829e8e72e"},{url:"assets/js/page--86453650.75e24c11.js",revision:"d3e052b6f6909eb6b9ae3d9064cdbb29"},{url:"assets/js/page--9108a39c.03e19d20.js",revision:"b52ee0dca8b2b3636360c28258a8b77c"},{url:"assets/js/page--d7fc60dc.8f276f59.js",revision:"47fc5d6ef1cad03b59dcdba1c755b5b5"},{url:"assets/js/page-About Vuepress.8384c28c.js",revision:"d8a467fb25bc525b17340af7c714dac3"},{url:"assets/js/page-API Docs.5fe7e68c.js",revision:"d59807532a0bd973b88a148cbfc837b1"},{url:"assets/js/page-API 文档.0057ea3f.js",revision:"bd7d7f31ba2541a6fc2072363ebf128c"},{url:"assets/js/page-Basic.21fd86a3.js",revision:"9e5df729ee2bc33a13513845141ad06a"},{url:"assets/js/page-Blog homepage.05d61d3a.js",revision:"1cc8083a1d313a72643436d34e9b336e"},{url:"assets/js/page-Blog related.592abbc0.js",revision:"4af6b521ff3a77e2a4b5270ab0bbaa63"},{url:"assets/js/page-Comment Function.451f3cef.js",revision:"467fbe17e4e97c8ad4c7ee8b035e8e09"},{url:"assets/js/page-Common problems.0b454fb2.js",revision:"70d26f701dd4344d56fd90521f877048"},{url:"assets/js/page-Custom alignment.f340cd4d.js",revision:"3cd6550e23f6733e392a25a05a3fd626"},{url:"assets/js/page-Darkmode and Theme color.777640c8.js",revision:"b73b33771f2524f5fcd2d96fb109ab5a"},{url:"assets/js/page-Default Theme Config.4d74b77d.js",revision:"20fc7c6ca00e2cb7e1e52bf6bdf76bd8"},{url:"assets/js/page-Demos.1e72ec0e.js",revision:"d207aa56f22fb235a4803faedd7de20c"},{url:"assets/js/page-Emoji List.56bca4ee.js",revision:"8bbd0be733d2b52d14d6f6081d638cc1"},{url:"assets/js/page-Emoji 列表.f4cce980.js",revision:"40c5d35005427de6df3d201ffb073872"},{url:"assets/js/page-Encryption function.0f823bf9.js",revision:"c694b046a1a4b0b6b7f9ffcc6a010dc0"},{url:"assets/js/page-File Structure.ec44748e.js",revision:"f580ed75c32cbbce8fa4c5de388f4f98"},{url:"assets/js/page-Flowchart.0b6c301b.js",revision:"bd3681d523a54e1b26d56e68fe91dcad"},{url:"assets/js/page-Footnote.4406040f.js",revision:"c1e491bf57894f9e39659304519f71f8"},{url:"assets/js/page-Home Page.6b4bd08a.js",revision:"a84c056d3c0a5b3b1639f2b7d597db34"},{url:"assets/js/page-Home.9fc11f09.js",revision:"79d2584c58732453798489c00ca1a745"},{url:"assets/js/page-Introduction.1e69e82b.js",revision:"a8ae4d10c455380ed70b2fb91d1af814"},{url:"assets/js/page-Layout.d51cbc0c.js",revision:"1a8611f096c2309e10f8da05611c6b0e"},{url:"assets/js/page-Markdown DEMO.6bc27b78.js",revision:"626d14d2d67806d354677280cb5ae82e"},{url:"assets/js/page-Markdown Introduction.bab0b09f.js",revision:"b75ecdd8ab4bd869851ca4d8f9d1e90b"},{url:"assets/js/page-Markdown 介绍.fd440f38.js",revision:"8c1a869504e810b34b7f34a070638097"},{url:"assets/js/page-Markdown 新语法.c21c136a.js",revision:"bd364a87c7684f82c99f474608b15294"},{url:"assets/js/page-Markdown示例.e3eb862a.js",revision:"7aa8796af4d643f87706814418aa594b"},{url:"assets/js/page-Markup.9cc630f6.js",revision:"6e5356848da71cab768d1be0d6148b08"},{url:"assets/js/page-NavBar.018db61b.js",revision:"8e88b7c9c5dceabd53f3fdb24f5939c8"},{url:"assets/js/page-New Component.b22b22fe.js",revision:"bc51f5aae25a52499792fb64ae9ae234"},{url:"assets/js/page-New feature.a6425806.js",revision:"a29eb4dd1e0b03f7d5126306c579f76b"},{url:"assets/js/page-New syntax in Markdown.82790d5f.js",revision:"6a038dfc36fc1fea35628fcb5b3ee234"},{url:"assets/js/page-Page Configuration.f99a5241.js",revision:"a5ef482632c3e0304f30b2a65e0373d2"},{url:"assets/js/page-Page information.9882ea7f.js",revision:"bb92bdc32fa82c4b8f6a682028000b1d"},{url:"assets/js/page-Page.05454f79.js",revision:"ab58e711db50318595f2f9d9d7623b8c"},{url:"assets/js/page-Plugin Description.06f35799.js",revision:"94d7fef8fbc21d2942a7a7f412ca7721"},{url:"assets/js/page-Plugins.5b9631e3.js",revision:"a979008f06e5d78b8338264248bc5163"},{url:"assets/js/page-Sidebar.2212a052.js",revision:"72dc9fc915ee79f2691cc3abcab1472f"},{url:"assets/js/page-stylus configuration.91cea0a4.js",revision:"bdf8672257b09cc9284ebdbfad3186c1"},{url:"assets/js/page-stylus 配置.4ff8f38d.js",revision:"301ddcdf5dfce44b2734181bde6b40f1"},{url:"assets/js/page-Superscript and Subscript.881a2ef6.js",revision:"3ce6d6de485fb061db84020016d2c17d"},{url:"assets/js/page-Tex Support.82d173ce.js",revision:"47412c7978ad8e04bb14f501400f8dc7"},{url:"assets/js/page-Tex 语法支持.aec3c67c.js",revision:"1b772762bb26a1ebdd78094a1f13072c"},{url:"assets/js/page-Theme Config.26c11302.js",revision:"4de45cf4eab9902b0fddc8611181affd"},{url:"assets/js/page-TS support.e06ce6b7.js",revision:"4fe38c69ac7dd85c7765568bb8d4c15d"},{url:"assets/js/page-TS 支持.d0c1002b.js",revision:"53fe882ea329558e9d48f354c7f5b307"},{url:"assets/js/page-Vuepress Cases.db1c6513.js",revision:"98720a4d2931dbcdc8085efe828384ff"},{url:"assets/js/page-Vuepress commands.b33e5bb2.js",revision:"f7b4342c6841d55d3082ce4ed46b6a21"},{url:"assets/js/page-Vuepress 案例.03075692.js",revision:"45d008e316ddb121634d23fbc16018c2"},{url:"assets/js/page-vuepress-plugin-container.4422fc4c.js",revision:"c0277abde6fa93ff09fb79d48a29b801"},{url:"assets/js/page-vuepress-plugin-copyright.632a39ed.js",revision:"64e7172ac726749349dcc63c863cbef0"},{url:"assets/js/page-Vuepress.eb5f0c6b.js",revision:"010a653814b4a3a5b8749439ccc52c97"},{url:"assets/js/page-Writing a theme.55cc50bf.js",revision:"ce30c40fb97ffda4b51f87f24e5c6fd5"},{url:"assets/js/page-上下角标.5157b0d3.js",revision:"0badfbb6b5bbbd6b8217579c83f6e829"},{url:"assets/js/page-主题配置.89e69da2.js",revision:"049ff8b2ec9dd29e1c9bbb652327f256"},{url:"assets/js/page-人物.69b99bd8.js",revision:"8b4fc7518028997649b0f5e3b39c1dee"},{url:"assets/js/page-介绍.f2b19ed5.js",revision:"17a025183658253a9ed77304f271b3e7"},{url:"assets/js/page-侧边栏.54ffc094.js",revision:"a85c90151a424b1266e287e303ec1ae7"},{url:"assets/js/page-加密功能.894465ae.js",revision:"d9499d10c6dd28d5032dbabcc05933fb"},{url:"assets/js/page-博客相关.2a64ab07.js",revision:"88525405193fc5c5173bd51854daaeb2"},{url:"assets/js/page-博客首页.8c0d8e7e.js",revision:"73cf14b3d5f53d3ef714a271865c59a7"},{url:"assets/js/page-地点.aa82afab.js",revision:"7f6e93c878c4fde3d10d5eee1f168774"},{url:"assets/js/page-基础知识.0a34b3ed.js",revision:"ded55934b1cc28ffd256b2412aa8e72f"},{url:"assets/js/page-对象.f38169d5.js",revision:"68743d7d0e95d90cf9806812531ea71a"},{url:"assets/js/page-导航栏.9bd57347.js",revision:"4f9a111de357de1b3c53d394e8c6ab4c"},{url:"assets/js/page-布局.6f48d839.js",revision:"c07f91fa5ef218d8329e840740c4e61e"},{url:"assets/js/page-常见问题.8887c770.js",revision:"b5ae650b51e658d1ed9dd0c3ee98c87e"},{url:"assets/js/page-开发主题.b35adb36.js",revision:"afa53189f71935e8fa69fa104a5d2de7"},{url:"assets/js/page-插件.63bd9d04.js",revision:"2f3e9e76cb604c45d67183045b0dddfb"},{url:"assets/js/page-插件说明.7c3dd563.js",revision:"c374a47541204a2206789696b89250fb"},{url:"assets/js/page-文件结构介绍.fcefbe3c.js",revision:"2808e95ab9079377f425fc615804a371"},{url:"assets/js/page-新增特性.ece42d51.js",revision:"64d7544f67270d29121a7eda2c7a906d"},{url:"assets/js/page-新增组件.b2af819b.js",revision:"10d2165826c2266cc203794e091d6a8f"},{url:"assets/js/page-标记.5cee2c0d.js",revision:"2dc9aab8f58dfb435aeb5f39c6d0317c"},{url:"assets/js/page-流程图支持.78415ff7.js",revision:"77db30797a3b726dfeb177799269a352"},{url:"assets/js/page-深色模式与主题色.07a70ae2.js",revision:"ad91aa73b45d97418497125cdcfa68cc"},{url:"assets/js/page-符号.20932c98.js",revision:"ec9e32744d1fd5d3650184aec75c7358"},{url:"assets/js/page-脚注.519fc366.js",revision:"2c81f57f17ea6221585a7d850fbc3378"},{url:"assets/js/page-自定义对齐.8bda3723.js",revision:"0f5eca474d541322a0170e5328a52ba6"},{url:"assets/js/page-自然.b6efd697.js",revision:"6bd6d946e744ad54df83ecddf3b4ec64"},{url:"assets/js/page-评论功能.1878a485.js",revision:"349c40f1601aadb69f950457654fdf70"},{url:"assets/js/page-页面.766e1277.js",revision:"4e06733e3a62a43e22cc26b355117054"},{url:"assets/js/page-页面信息.4f88fdfe.js",revision:"c85a83109175750a0132d8325fc226c4"},{url:"assets/js/page-页面配置.30b1a1f4.js",revision:"29bd1939daf1883f89d3edd1df3c8724"},{url:"assets/js/page-项目指令.954465a0.js",revision:"2bda59373416654aa3f12df68e769410"},{url:"assets/js/page-项目案例.b8820b12.js",revision:"9a39d9bc32ef3158e9a45ad53a8d9eb5"},{url:"assets/js/page-首页.bcb5906e.js",revision:"cb4e50faf0778dee0a2e5f124e5798e1"},{url:"assets/js/page-默认主题配置.826f4c53.js",revision:"d9df813290ac410ef40b52b4d7f1cc75"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.384195cf.js",revision:"4d5f4ce0c166cdb7dafcee3fad98aebf"},{url:"assets/js/vendors~layout-Layout.3a1a8abe.js",revision:"46d4e17418a55580e151ff8678f8d0fa"},{url:"basic/index.html",revision:"61b36b77602dd9e35fcb94f66b170b23"},{url:"basic/markdown/demo.html",revision:"2892efcea65bb9f3b47bb6f484e1d272"},{url:"basic/markdown/emoji/index.html",revision:"10572db8faac6ff1bfacdd174bbc473c"},{url:"basic/markdown/emoji/locate.html",revision:"dc803eee71e96f137da3be399ac1079b"},{url:"basic/markdown/emoji/nature.html",revision:"08c8191b78c82bf66f675a574c67bda0"},{url:"basic/markdown/emoji/object.html",revision:"e4b2087c128f6beca85afc53d5d39e9f"},{url:"basic/markdown/emoji/people.html",revision:"ed29d62cea54fcb7d72e5c998ec2dcf5"},{url:"basic/markdown/emoji/symbol.html",revision:"0269007a57b311d302fba4f1eac0f707"},{url:"basic/markdown/index.html",revision:"c420f5e79cc760afd3177775d4080924"},{url:"basic/vuepress/case.html",revision:"9eaa79e20c6a4c6954c6379a55b67e60"},{url:"basic/vuepress/command.html",revision:"bce450702183db38462d1131c1b02c83"},{url:"basic/vuepress/file.html",revision:"3a9e7b5d2779a9753de3be9998506cd6"},{url:"basic/vuepress/index.html",revision:"9fd16959d1adff4be18cc10932eefa20"},{url:"basic/vuepress/plugin.html",revision:"96f8b8b91ed1a5307c9d47d5f40486ab"},{url:"basic/vuepress/theme/config.html",revision:"b0dd50c79f321b88f1063dc2f3b74c49"},{url:"basic/vuepress/theme/dev.html",revision:"6c6552b7ae8e1856f18e74d8450d1a4b"},{url:"basic/vuepress/theme/index.html",revision:"385374a91b8299ce6c422463b339842c"},{url:"category/api/index.html",revision:"5feb2b425aca4c731c80ede43b233dc9"},{url:"category/api/page/2/index.html",revision:"7a9c49a7a00d436dab35408b0dc7b72f"},{url:"category/FAQ/index.html",revision:"e64f1d1e085c11bc9f8ec0f44208d253"},{url:"category/feature/index.html",revision:"cccbb69163ebf45051084422a18814e3"},{url:"category/feature/page/2/index.html",revision:"eb675a7c7b5a83736448d95cda911c98"},{url:"category/index.html",revision:"7f8b9e5355a02ff8bc06bc37df76ea84"},{url:"category/instruction/index.html",revision:"8635cef057126ac6e7832186872d312d"},{url:"category/layout/index.html",revision:"4ebc48b90aa2ced76de6b40996415ec1"},{url:"category/layout/page/2/index.html",revision:"b870c56ec590614799cbe9e603d0505d"},{url:"category/markdown/index.html",revision:"b821f8c7cd1955d7b87ebfe6a839e1be"},{url:"demo/index.html",revision:"880f8f6d5969c7699176d150aacc30ef"},{url:"en/api/index.html",revision:"9184919633a61aa6e2e6c0505be7308a"},{url:"en/api/page.html",revision:"cf0e173658475a00554272b5ff72d0ae"},{url:"en/api/plugin/container.html",revision:"627c757304181b0dec99cbd58851f098"},{url:"en/api/plugin/copyright.html",revision:"1bea6d46f5fe96a9c451d5d5dc8d2706"},{url:"en/api/plugin/index.html",revision:"634f68da2bbd785941de53e09920279d"},{url:"en/api/plugin/medium-zoom.html",revision:"d8e3fc65dafefc15b3ab00d61f26077f"},{url:"en/api/plugin/pwa.html",revision:"8ec2980c69a3446b838be1744f99b63e"},{url:"en/api/stylus.html",revision:"e8150bc54ed403f13200cb21bbd8014e"},{url:"en/api/themeConfig.html",revision:"8d15d81638f5fc9d9f4cb92feabe964f"},{url:"en/basic/index.html",revision:"9ecab4a717d808ae7d25c1a2e052a6d1"},{url:"en/basic/markdown/demo.html",revision:"08c7bb754639785f0535611cc94f5a91"},{url:"en/basic/markdown/emoji.html",revision:"d65e50236cd546ae02c098ba2b49d0cf"},{url:"en/basic/markdown/index.html",revision:"6fdc7743e2a90197c571887d1ab92605"},{url:"en/basic/vuepress/case.html",revision:"2f79c24508632bfe44c5efdb9496ed37"},{url:"en/basic/vuepress/command.html",revision:"f19ec9c2d913fb6779b626c77841fa6e"},{url:"en/basic/vuepress/file.html",revision:"ba507577feacc509e3d704db75ca3f36"},{url:"en/basic/vuepress/index.html",revision:"579f00597197a1151918b0ac1f9d3475"},{url:"en/basic/vuepress/plugin.html",revision:"bbfc17689c1b7c5156afe2eee07e1958"},{url:"en/basic/vuepress/theme/config.html",revision:"da76f8d542b2161426ec0fee085f1fe5"},{url:"en/basic/vuepress/theme/dev.html",revision:"2e2ae1adde14b478c223d3c8cb87a84d"},{url:"en/basic/vuepress/theme/index.html",revision:"efb919c19b4f36a01ab29c7638c9a2a2"},{url:"en/demo/index.html",revision:"90ba5272532c90aca9c6b87a18a9bc48"},{url:"en/FAQ/index.html",revision:"1d14410ded866d1a3c10bb07c4cac559"},{url:"en/guide/feature/blog.html",revision:"70c78852315827dd8402042c7725b915"},{url:"en/guide/feature/comment.html",revision:"1eb98af622c3cd9365b11a372298423b"},{url:"en/guide/feature/component.html",revision:"8ac982d8cc5b748847f960a13021fd25"},{url:"en/guide/feature/encrypt.html",revision:"344491155c93a813bb1f5e3bdc7495a6"},{url:"en/guide/feature/index.html",revision:"6ce0bb99aa17cebcc89de8aa7332c101"},{url:"en/guide/feature/markdown/align.html",revision:"02de673076497a67b25fc2a6b3fffdb6"},{url:"en/guide/feature/markdown/flowchart.html",revision:"7067773689495a702f7e5ae9acfba565"},{url:"en/guide/feature/markdown/footnote.html",revision:"5357bfe4bbde213c2a622f566f80f876"},{url:"en/guide/feature/markdown/index.html",revision:"3a48cb9756e8c759abef44f8e6d9f98f"},{url:"en/guide/feature/markdown/mark.html",revision:"970cc998e21828d2d40f1ccc4ba280ec"},{url:"en/guide/feature/markdown/sup-sub.html",revision:"2f1f9101d54d68391c120a150933b1fc"},{url:"en/guide/feature/markdown/tex.html",revision:"873818d37336803285f9e0c7cca469d5"},{url:"en/guide/feature/page-info.html",revision:"0141f4a60e6d4c0327bb2d79f8c83a8e"},{url:"en/guide/feature/theme.html",revision:"d5d75b664569dd5fd4453d15db298262"},{url:"en/guide/feature/typescript.html",revision:"e15f13c4e0967660e448466489cab323"},{url:"en/guide/index.html",revision:"7c776be6ac903303aebb10e52b3bb13f"},{url:"en/guide/install.html",revision:"bd0d181ff5b63203bfafed80a308b24a"},{url:"en/guide/layout/blog.html",revision:"38cb0db632ae525796a8c58fd7916354"},{url:"en/guide/layout/home.html",revision:"7fd4a1c958cb470bb1ddecc85001b96a"},{url:"en/guide/layout/index.html",revision:"b84e74b4ae209e4a75da6f4c2e6f2e86"},{url:"en/guide/layout/navbar.html",revision:"653218de6e6480b7308eda6cf1fb52db"},{url:"en/guide/layout/page.html",revision:"635d8491014a2f3055912beadcb1005d"},{url:"en/guide/layout/sidebar.html",revision:"79499138f0234dc9130ee8791f5bc379"},{url:"en/index.html",revision:"84e2d93422b7669fa3f2383caa4e58df"},{url:"FAQ/index.html",revision:"622bfa5b723eada9ca29a2fd2611bf0f"},{url:"guide/feature/blog.html",revision:"36577f9b5b8eddf057c475323694aaa3"},{url:"guide/feature/comment.html",revision:"b718e8cdfdde4c478a72a3a548be43af"},{url:"guide/feature/component.html",revision:"ebe0454a473e84c6541ba12d9d84cdab"},{url:"guide/feature/encrypt.html",revision:"3c3f64ba75f2c60fdb79e0e617b0e339"},{url:"guide/feature/index.html",revision:"a07fa720bdcbc3ad5100db06d88889a2"},{url:"guide/feature/markdown/align.html",revision:"114532e54f6896e729c024151fb5db98"},{url:"guide/feature/markdown/flowchart.html",revision:"1f264be91b751b04bd15b776872a12eb"},{url:"guide/feature/markdown/footnote.html",revision:"7c11a050d4fc385301a84781ac30b993"},{url:"guide/feature/markdown/index.html",revision:"46fc506305378e913ab8ec17ad5505e1"},{url:"guide/feature/markdown/mark.html",revision:"c70f0fe0f66090af744f79153a11a0f7"},{url:"guide/feature/markdown/sup-sub.html",revision:"a797d0fed0019953d985ea15a6d5b46d"},{url:"guide/feature/markdown/tex.html",revision:"ffd2a671420d257aa1683e60ab66932f"},{url:"guide/feature/page-info.html",revision:"1cffd4e80c0d5c4bba8de7d346e4ae11"},{url:"guide/feature/theme.html",revision:"58ebc6b30e40992806fc64ccac7a52f5"},{url:"guide/feature/typescript.html",revision:"65f5e786c3119f221c119843dd0da278"},{url:"guide/index.html",revision:"f84e6942c86631c38cf7f0aa604cfec6"},{url:"guide/install.html",revision:"a51b692a72a4cda347c9b496fa74785c"},{url:"guide/layout/blog.html",revision:"581ee12ed6e245152240176bab453e18"},{url:"guide/layout/home.html",revision:"f672422031d2667a6c277ab85de44666"},{url:"guide/layout/index.html",revision:"43129fef652936a00a1de92f03f549f7"},{url:"guide/layout/navbar.html",revision:"f92738e7c9c3ee7ac37a9e89c31fc47a"},{url:"guide/layout/page.html",revision:"a030951080234535b041ae4cd0b4e65d"},{url:"guide/layout/sidebar.html",revision:"d95653dc1e071230f46eca752b782b6f"},{url:"img/icon/appleIcon152.png",revision:"9172ed03ed0e66ca085720b7c02fcccc"},{url:"img/icon/chrome192.png",revision:"581c452b65c71f36375193f75bbb7b8c"},{url:"img/icon/chrome512.png",revision:"78af354a94a00054caa93bdba2560bce"},{url:"img/icon/msIcon144.png",revision:"2200b78e72efdcd597b384cf62947c1a"},{url:"index.html",revision:"78cbd7be3149f24419f70d3d563cf7e3"},{url:"logo.png",revision:"13417285202b91bf6571ccef63c17039"},{url:"logo.svg",revision:"2ff99a4865a6eceeaf3d949e479c7990"},{url:"tag/api/index.html",revision:"cb46bfc2b9bcbe9b1c7449ce810b621a"},{url:"tag/api/page/2/index.html",revision:"2daeaaf544800f2b9023f20bd0735707"},{url:"tag/blog/index.html",revision:"2f807d4e83bd677d9ae4d9a6f6583cd5"},{url:"tag/comment/index.html",revision:"51aa02b8ad2c59217ac63afafb8f0dc5"},{url:"tag/components/index.html",revision:"b3a4504e140a45cb5f9e35198d2d1245"},{url:"tag/emoji/index.html",revision:"98dff79aab7014cfd15fef08fa527862"},{url:"tag/encrypt/index.html",revision:"78a6d7fbf393372d73b63a70a0b4efcf"},{url:"tag/feature/index.html",revision:"034ce58d997d097df31e65376aa2e881"},{url:"tag/feature/page/2/index.html",revision:"c976f0e73c382e927dfd9949301b9c8f"},{url:"tag/frontmatter/index.html",revision:"8e6a885d7932bb597bdac5eddb064dca"},{url:"tag/function/index.html",revision:"f20a4f2c121baaeed688c8c289c58ff5"},{url:"tag/function/page/2/index.html",revision:"d1d20f9fb28754ae3148badabd847827"},{url:"tag/home/index.html",revision:"568682628d81ff13d2da5c8ede9e42c2"},{url:"tag/index.html",revision:"3e8bdcf777070561b0cfd78164711596"},{url:"tag/intro/index.html",revision:"5809a06053b02c66e8c9ee13569374e1"},{url:"tag/layout/index.html",revision:"d2f3d093742e1cb0c25b4b59fbdcdde1"},{url:"tag/layout/page/2/index.html",revision:"a61eb2b91fd1a1390f3302102eb67e12"},{url:"tag/markdown/index.html",revision:"5eec722264a001ef1e83a578b2b5bc40"},{url:"tag/markdown/page/2/index.html",revision:"9d8ffda87ecae6602f771b526103fc00"},{url:"tag/markdown/page/3/index.html",revision:"78092c1df5d58a7d42cf8a0eddf554b3"},{url:"tag/navbar/index.html",revision:"82d330b6faac710d9e913746c4568128"},{url:"tag/page-info/index.html",revision:"b64fa193940957eacd48f6c9a9879071"},{url:"tag/plugin/index.html",revision:"c72f7ed9d9332231f81506541309f0d8"},{url:"tag/sidebar/index.html",revision:"6318091ae187a9158937d696bc9da1c9"},{url:"tag/style/index.html",revision:"ea0acf21723abd0042e17164f4b33fb2"},{url:"tag/themeConfig/index.html",revision:"c44935598c928cf7a7092fc50c28cf5d"},{url:"tag/typescript/index.html",revision:"288e2ce69c4112bfe2e2257bf0eaec25"},{url:"tag/vuepress/index.html",revision:"c58b7b95849ce67addb50df8d5a33787"},{url:"timeline/index.html",revision:"92c19ec4a8f0e04d6240a3ccb12af870"}],{})}));
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
