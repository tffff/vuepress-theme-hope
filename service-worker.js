if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,i,d)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const c={uri:location.origin+a.slice(1)};return Promise.all(i.map(a=>{switch(a){case"exports":return s;case"module":return c;default:return e(a)}})).then(e=>{const a=d(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-1a661b4a"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"404.html",revision:"16c41cd3a39684c24ae91ca955f40d1a"},{url:"article/index.html",revision:"05bb0e3cd9c5b56b8fd2bd37dfd4e193"},{url:"assets/css/0.styles.0cec0e77.css",revision:"d1704170be7f83a0312de9d98770a687"},{url:"assets/fonts/KaTeX_AMS-Regular.7f06b4e3.woff",revision:"7f06b4e30317f784d61d26686aed0ab2"},{url:"assets/fonts/KaTeX_AMS-Regular.aaf4eee9.ttf",revision:"aaf4eee9fba9907d61c3935e0b6a54ae"},{url:"assets/fonts/KaTeX_AMS-Regular.e78e28b4.woff2",revision:"e78e28b4834954df047e4925e9dbf354"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.021dd4dc.ttf",revision:"021dd4dc61ee5f5cdf315f43b48c094b"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.1e802ca9.woff",revision:"1e802ca9dedc4ed4e3c6f645e4316128"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.4ec58bef.woff2",revision:"4ec58befa687e9752c3c91cd9bcf1bcb"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.7edb53b6.woff2",revision:"7edb53b6693d75b8a2232481eea1a52c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d3b46c3a.woff",revision:"d3b46c3a530116933081d9d74e3e9fe8"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d49f2d55.ttf",revision:"d49f2d55ce4f40f982d8ba63d746fbf9"},{url:"assets/fonts/KaTeX_Fraktur-Bold.a31e7cba.ttf",revision:"a31e7cba7b7221ebf1a2ae545fb306b2"},{url:"assets/fonts/KaTeX_Fraktur-Bold.c4c8cab7.woff",revision:"c4c8cab7d5be97b2bb283e531c077355"},{url:"assets/fonts/KaTeX_Fraktur-Bold.d5b59ec9.woff2",revision:"d5b59ec9764e10f4a82369ae29f3ac58"},{url:"assets/fonts/KaTeX_Fraktur-Regular.32a5339e.woff2",revision:"32a5339eb809f381a7357ba56f82aab3"},{url:"assets/fonts/KaTeX_Fraktur-Regular.a48dad4f.ttf",revision:"a48dad4f58c82e38a10da0ceebb86370"},{url:"assets/fonts/KaTeX_Fraktur-Regular.b7d9c46b.woff",revision:"b7d9c46bff5d51da6209e355cc4a235d"},{url:"assets/fonts/KaTeX_Main-Bold.22086eb5.woff",revision:"22086eb5d97009c3e99bcc1d16ce6865"},{url:"assets/fonts/KaTeX_Main-Bold.8e1e01c4.woff2",revision:"8e1e01c4b1207c0a383d9a2b4f86e637"},{url:"assets/fonts/KaTeX_Main-Bold.9ceff51b.ttf",revision:"9ceff51b3cb7ce6eb4e8efa8163a1472"},{url:"assets/fonts/KaTeX_Main-BoldItalic.284a17fe.woff2",revision:"284a17fe5baf72ff8217d4c7e70c0f82"},{url:"assets/fonts/KaTeX_Main-BoldItalic.4c57dbc4.woff",revision:"4c57dbc44bfff1fdf08a59cf556fdab3"},{url:"assets/fonts/KaTeX_Main-BoldItalic.e8b44b99.ttf",revision:"e8b44b990516dab7937bf240fde8b46a"},{url:"assets/fonts/KaTeX_Main-Italic.29c86397.ttf",revision:"29c86397e75cdcb3135af8295f1c2e28"},{url:"assets/fonts/KaTeX_Main-Italic.99be0e10.woff",revision:"99be0e10c38cd42466e6fe1665ef9536"},{url:"assets/fonts/KaTeX_Main-Italic.e533d5a2.woff2",revision:"e533d5a2506cf053cd671b335ec04dde"},{url:"assets/fonts/KaTeX_Main-Regular.5c734d78.woff2",revision:"5c734d78610fa35282f3379f866707f2"},{url:"assets/fonts/KaTeX_Main-Regular.5c94aef4.ttf",revision:"5c94aef490324b0925dbe5f643e8fd04"},{url:"assets/fonts/KaTeX_Main-Regular.b741441f.woff",revision:"b741441f6d71014d0453ca3ebc884dd4"},{url:"assets/fonts/KaTeX_Math-BoldItalic.9a2834a9.ttf",revision:"9a2834a9ff8ab411153571e0e55ac693"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b13731ef.woff",revision:"b13731ef4e2bfc3d8d859271e39550fc"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d747bd1e.woff2",revision:"d747bd1e7a6a43864285edd73dcde253"},{url:"assets/fonts/KaTeX_Math-Italic.291e76b8.ttf",revision:"291e76b8871b84560701bd29f9d1dcc7"},{url:"assets/fonts/KaTeX_Math-Italic.4ad08b82.woff2",revision:"4ad08b826b8065e1eab85324d726538c"},{url:"assets/fonts/KaTeX_Math-Italic.f0303906.woff",revision:"f0303906c2a67ac63bf1e8ccd638a89e"},{url:"assets/fonts/KaTeX_SansSerif-Bold.3fb41955.woff",revision:"3fb419559955e3ce75619f1a5e8c6c84"},{url:"assets/fonts/KaTeX_SansSerif-Bold.6e0830be.woff2",revision:"6e0830bee40435e72165345e0682fbfc"},{url:"assets/fonts/KaTeX_SansSerif-Bold.7dc027cb.ttf",revision:"7dc027cba9f7b11ec92af4a311372a85"},{url:"assets/fonts/KaTeX_SansSerif-Italic.4059868e.ttf",revision:"4059868e460d2d2e6be18e180d20c43d"},{url:"assets/fonts/KaTeX_SansSerif-Italic.727a9b0d.woff",revision:"727a9b0d97d72d2fc0228fe4e07fb4d8"},{url:"assets/fonts/KaTeX_SansSerif-Italic.fba01c9c.woff2",revision:"fba01c9c6fb2866a0f95bcacb2c187a5"},{url:"assets/fonts/KaTeX_SansSerif-Regular.2555754a.woff",revision:"2555754a67062cac3a0913b715ab982f"},{url:"assets/fonts/KaTeX_SansSerif-Regular.5c58d168.ttf",revision:"5c58d168c0b66d2c32234a6718e74dfb"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d929cd67.woff2",revision:"d929cd671b19f0cfea55b6200fb47461"},{url:"assets/fonts/KaTeX_Script-Regular.755e2491.woff2",revision:"755e2491f13b5269f0afd5a56f7aa692"},{url:"assets/fonts/KaTeX_Script-Regular.d12ea9ef.ttf",revision:"d12ea9efb375f9dc331f562e69892638"},{url:"assets/fonts/KaTeX_Script-Regular.d524c9a5.woff",revision:"d524c9a5b62a17f98f4a97af37fea735"},{url:"assets/fonts/KaTeX_Size1-Regular.7342d45b.ttf",revision:"7342d45b052c3a2abc21049959fbab7f"},{url:"assets/fonts/KaTeX_Size2-Regular.eb130dcc.ttf",revision:"eb130dcc661de766c999c60ba1525a88"},{url:"assets/fonts/KaTeX_Size4-Regular.ad767252.ttf",revision:"ad7672524b64b730dfd176140a8945cb"},{url:"assets/fonts/KaTeX_Typewriter-Regular.25702356.ttf",revision:"257023560753aeb0b89b7e434d3da17f"},{url:"assets/fonts/KaTeX_Typewriter-Regular.3fe216d2.woff",revision:"3fe216d2a5f736c560cde71984554b64"},{url:"assets/fonts/KaTeX_Typewriter-Regular.6cc31ea5.woff2",revision:"6cc31ea5c223c88705a13727a71417fa"},{url:"assets/icon/appleIcon152.png",revision:"9172ed03ed0e66ca085720b7c02fcccc"},{url:"assets/icon/chrome192.png",revision:"581c452b65c71f36375193f75bbb7b8c"},{url:"assets/icon/chrome512.png",revision:"78af354a94a00054caa93bdba2560bce"},{url:"assets/icon/msIcon144.png",revision:"2200b78e72efdcd597b384cf62947c1a"},{url:"assets/img/architecture.9a93cf6c.png",revision:"9a93cf6cea38878e19c5816d1af28b17"},{url:"assets/img/blog.63c13822.png",revision:"63c138223630a1ad4ac7d129b848409d"},{url:"assets/img/category.4884e842.png",revision:"4884e842d997d40ecd3d347d69801497"},{url:"assets/img/darkmode.cd6c7360.png",revision:"cd6c73602cbe64a85e784daa3caf6b58"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/home.54e43b1b.png",revision:"54e43b1b23e40af37563d18d2ea728aa"},{url:"assets/img/home.c65f0280.png",revision:"c65f02809ddb4469ee5a7215e9c05802"},{url:"assets/img/homeImage.5ae9de9e.jpg",revision:"5ae9de9e15120d94e9892d0c15da9896"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/js/app.90d203ea.js",revision:"f4ec3b912998f2bbf8917dd30f401c15"},{url:"assets/js/layout-Blog.89c2978b.js",revision:"1ed0dacbfeb008cbf375f8b87caa1f10"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.46c991fe.js",revision:"7107d99a90a93a9ece50e7d994c057b2"},{url:"assets/js/layout-Layout.d5721ed7.js",revision:"cb79112149e6ecc0996d0bc2f9b0c9fe"},{url:"assets/js/layout-NotFound.e91dcf4f.js",revision:"1f51d931ff5a24211b8f74c153539f12"},{url:"assets/js/page-@mr-hopelast-update--1104de32.5d42fd4c.js",revision:"417811a61aa92e8101b2fd2375260607"},{url:"assets/js/page-@mr-hopelast-update--ebefb430.9dbd6bd2.js",revision:"d2140d2ebdb6f33c6150a217c879a59f"},{url:"assets/js/page-@mr-hopepwa--051692f2.0f534daf.js",revision:"57856da909822e662f62a7460bb7ac32"},{url:"assets/js/page-@mr-hopereading-time--36317372.209ddb9d.js",revision:"976b73da07d2a8121624e73ea9af7c77"},{url:"assets/js/page-@mr-hopereading-time--36b7a178.b91327f9.js",revision:"67dd4f035e2b823eb9ccfa510a885da5"},{url:"assets/js/page-@mr-hopeseo--44db09a4.df570a44.js",revision:"a869d6a39b65ddd1400b8b6cc37a0bca"},{url:"assets/js/page-@mr-hopeseo--4c19db12.33c61e1a.js",revision:"ec567021e191286c15bef41dcbcfe021"},{url:"assets/js/page-@mr-hopesitemap--4bd3dd04.7015467a.js",revision:"bb2c5ce3778b642de08240633741c7e5"},{url:"assets/js/page-@mr-hopesitemap--7a219d12.8dd27d81.js",revision:"77e3e7f3e5b34596a1aaa6b3c8ac54ba"},{url:"assets/js/page-@vuepressplugin-pwa--1c9738b4.a5c1dd07.js",revision:"591a62d479d969c066eb89f95edb9306"},{url:"assets/js/page-AboutVuepress--5d12de02.7f930a0e.js",revision:"72562750d0358b07fda5cd564a1f50ef"},{url:"assets/js/page-Basic--29b12659.7ab38378.js",revision:"3bb9bb2008118ea4492ca9648b69ce86"},{url:"assets/js/page-Bloghomepage--d988383c.243268c9.js",revision:"cb3fba26b8f50e45db188a7373260822"},{url:"assets/js/page-Blogrelated--7c1e4552.347fa6c7.js",revision:"2925ec1b3b3ec5aaab484ac1200af56d"},{url:"assets/js/page-CommentFunction--6884a164.bc92f3c8.js",revision:"6cfbc9c2739dff177ce90df45d2fbd32"},{url:"assets/js/page-Commonproblems--87e54bce.88a0800d.js",revision:"51d9a8be0d351d1f0b0d144cb990668e"},{url:"assets/js/page-ConfigDocs--2082c612.2080e05a.js",revision:"9917deb728dc969e445e70e7e7d1381a"},{url:"assets/js/page-Customalignment--df6a559c.f53c33bb.js",revision:"3b7241c69da62a750f413dc25efb4adc"},{url:"assets/js/page-DarkmodeandThemecolor--57fce360.1d2b7ae3.js",revision:"43fcfacf8d470f0881e24bbb75334c8f"},{url:"assets/js/page-Demos--cac80116.728d10ae.js",revision:"8a2e3bca548bd4dff310a520812df72c"},{url:"assets/js/page-EmojiList--b946d226.d5cc34bc.js",revision:"884dc372dfba110c4da5ddcafb1a57f5"},{url:"assets/js/page-Emoji列表--41bb29b9.a97ce87a.js",revision:"c05243474d97e0bb00bc0c42eedbfc9d"},{url:"assets/js/page-Encryptionfunction--21c8c5d8.6e4c32bc.js",revision:"698e1715da1ab6bc73cc369b0ff12cb0"},{url:"assets/js/page-FileStructure--5dff5230.773a33a7.js",revision:"3185158d420a993b4d1cc18c53bcdb38"},{url:"assets/js/page-Flowchart--6426e412.90797f77.js",revision:"8b03a570363c49647fbaa6f9b6541c7b"},{url:"assets/js/page-Footnote--3a89d162.079e8153.js",revision:"a6ef63f99ee1cf478dc0e5e0277a6b46"},{url:"assets/js/page-HomePage--37b81ca8.2c14d7b0.js",revision:"364e2200108860a3ad561d36ea6178e5"},{url:"assets/js/page-InstallUsage--5dafe67a.01408bfe.js",revision:"e40bc0916e7541d63c070b16c76c1524"},{url:"assets/js/page-Introduction--0b048d19.bc91a356.js",revision:"cd6cdaa77c1b87a33a095ed51e402fdd"},{url:"assets/js/page-Layout--655201fe.eb6c93f1.js",revision:"b6967f4f7662e5641e42ad76d47af35b"},{url:"assets/js/page-MarkdownDEMO--ab10bb74.a08cfc24.js",revision:"518d056559076b23dd0cfc402314f32b"},{url:"assets/js/page-MarkdownEnhance--ed59a9f6.051cbbd9.js",revision:"9d604da318968f2b50f83b49bfe41916"},{url:"assets/js/page-MarkdownIntroduction--25c54f9b.d96cfd60.js",revision:"3b0592b21dab4f5f74786b914d9e42cb"},{url:"assets/js/page-Markdown介绍--270989ce.2ee76fef.js",revision:"94b258082fc3f9c431da07ea63d0efe0"},{url:"assets/js/page-Markdown增强--ad9dba8e.40817b8d.js",revision:"1ca991859a5e948c0db99a9c2c7f873d"},{url:"assets/js/page-Markdown示例--c3e1bfdc.0b32c865.js",revision:"03a1c38ea6a1e18678e5b3412514909f"},{url:"assets/js/page-Markup--4f1121f0.14b31fce.js",revision:"a008b8c9869a8d2f9fcea4a2d402cdf3"},{url:"assets/js/page-Nature--5c9d3e6c.82ed995a.js",revision:"b6fe43d90b5c1e48b1eae86630bd83b7"},{url:"assets/js/page-NavBar--262632f4.dbe53a39.js",revision:"9c681b7bbb0b3b7c124bec1ac196e9c2"},{url:"assets/js/page-NewComponent--2edd3b68.72ab576b.js",revision:"8e00dbb21126453e2ee4104a102bc106"},{url:"assets/js/page-Newfeature--3e66b879.b4816ff6.js",revision:"12a6fc483abf5b00545aa5f7ebe3408f"},{url:"assets/js/page-Object--6d31953c.a51c5be0.js",revision:"e38de77c62dcc991133112f662401aa3"},{url:"assets/js/page-Page--26692570.3dd234d3.js",revision:"4d42a5ed9fc925d57dee2bbe9ce7fb83"},{url:"assets/js/page-PageConfiguration--493c56dc.25acd89f.js",revision:"049cf6f8d85e95ff4289c9369059707a"},{url:"assets/js/page-Pageinformation--6abfca0a.f8aa33db.js",revision:"e4ec351c712dab79ff9084d4d28ab6a1"},{url:"assets/js/page-People--f94822c8.9f507e3a.js",revision:"e72883c57179445d6705ef632514dbe4"},{url:"assets/js/page-photo-swipe--34ea45d2.c12b06e3.js",revision:"d6d60f55d88a452c7303b73f7915390f"},{url:"assets/js/page-photo-swipe--7be1a0aa.f60d6db8.js",revision:"19c6a1d037c805a433ad96d0ab2481d2"},{url:"assets/js/page-Place--32291f32.5848c9b6.js",revision:"22344cb4791b872eb8734ddaddd62fbd"},{url:"assets/js/page-PluginDescription--b08a3ace.9914e40a.js",revision:"80017409574e8698a778743fae04e83d"},{url:"assets/js/page-Plugins--1a5ef242.c0c934a9.js",revision:"79a80d6cd8c341323b0d90bc13beeaec"},{url:"assets/js/page-SEOandSitemap--13a48dac.02bbabac.js",revision:"4cdbb7bb13eed71f0a89e6d8ae3db195"},{url:"assets/js/page-SEO和Sitemap--5934b3b2.e6969b3c.js",revision:"2e5aeb96fb6eeeb7f6831d2c85b6d666"},{url:"assets/js/page-Sidebar--12800fd2.5c3a67ec.js",revision:"cee729f217402a18cdb92db2317d79d5"},{url:"assets/js/page-stylusconfiguration--189ec968.adaf9243.js",revision:"8b76eea62b669e90bc5d99d0a37c232a"},{url:"assets/js/page-stylus配置--6796cdf2.6c0c610b.js",revision:"dd24858518e2a7218ea517dc3f88b731"},{url:"assets/js/page-SuperscriptandSubscript--d7f5f81c.205ba638.js",revision:"14e8bec57e0ecb902b6a3b461a412b25"},{url:"assets/js/page-Symbol--0b92fe0a.c9dd678c.js",revision:"01d8eca8c991627a7f36b55ceed9bebc"},{url:"assets/js/page-TexSupport--f897e69c.914fff2e.js",revision:"5a1500f1eeb27c8d2e71bf23b98ba8a7"},{url:"assets/js/page-Tex语法支持--64cb5e50.83c40576.js",revision:"58c5c1031a9e5aa72336db259078be00"},{url:"assets/js/page-ThemeConfig--085c2edc.e5ec1705.js",revision:"6400a0c4c0345178959cbd9776850f9c"},{url:"assets/js/page-ThemeConfig--4715c95c.0fb90044.js",revision:"8e555efafa76b865849a78c8df642c20"},{url:"assets/js/page-TSsupport--165630b2.42c8073b.js",revision:"51be46b73b2e82953fd267dab4c2bad8"},{url:"assets/js/page-TS支持--09728ac8.8ba5041e.js",revision:"ca7ae05d932a235be4bb9983c9a0ec78"},{url:"assets/js/page-Vuepress--4a71114e.97c0e87c.js",revision:"935e5f9e5e99d4c3b91955686cf6c890"},{url:"assets/js/page-vuepress-plugin-container--31498112.02fe830f.js",revision:"96886fbfc37625c3e183fad1fd19d6fa"},{url:"assets/js/page-vuepress-plugin-container--f45c2334.94795f0a.js",revision:"8402b4bb9c479c0684bb101c758355ee"},{url:"assets/js/page-vuepress-plugin-copyright--5242f65c.b1903f6a.js",revision:"b43297d81933058730ae97aa24ff13f2"},{url:"assets/js/page-vuepress-plugin-copyright--dac5744c.3ef74b44.js",revision:"bb4f8dd83cd56e1413720a29df54a678"},{url:"assets/js/page-vuepress-theme-hope--776d8369.ffbda338.js",revision:"bdca204198298a29c5491a8d2aa44bf5"},{url:"assets/js/page-vuepress-theme-hope--7f862af9.2a2de386.js",revision:"d2b058263d59b031dbc7f02cb6dde659"},{url:"assets/js/page-VuepressCases--27d200c8.e95a4fae.js",revision:"a01f0c70628e4adc660c3687fc91fd4c"},{url:"assets/js/page-Vuepresscommands--7e89705c.7131ac5e.js",revision:"9b6903e4c9f20e043e0d21adc807d0e5"},{url:"assets/js/page-Vuepress案例--082972f2.81861631.js",revision:"4b93199be0ba593c31b5ef26c48ff5d4"},{url:"assets/js/page-上下角标--895c91b8.32aa1e7a.js",revision:"2e3f64372eeb11c8caa310dc3fec2091"},{url:"assets/js/page-主题配置--1120a0ce.63d06e7e.js",revision:"45c35098db1b3a51d14d5b2ba45bf1b1"},{url:"assets/js/page-主题配置--1a859dfc.369dbf2a.js",revision:"9cc5a93f4c79aae554b937946f8b9a92"},{url:"assets/js/page-人物--2182769c.a22f6bf4.js",revision:"5f63bbb630e065dc056644b570682f6d"},{url:"assets/js/page-介绍--d4910962.054c17eb.js",revision:"b7d0013b73dad6f00539237f9c38905d"},{url:"assets/js/page-侧边栏--2fa1ea2c.da893abe.js",revision:"f6d3b2373191465ca2c1f48d1990f82f"},{url:"assets/js/page-加密功能--181bdc9c.de7ac2be.js",revision:"8896f0c4a3a9810cbc8ad743064080bc"},{url:"assets/js/page-博客相关--17c260a2.01a3548d.js",revision:"b7bb5e6515194f99daef844c45981eb7"},{url:"assets/js/page-博客首页--64265752.f65e40e4.js",revision:"a44882dd20bc0a2af9909b77850d1de7"},{url:"assets/js/page-地点--951cdc00.0e019654.js",revision:"3562d8f3a4ee68671c1dc51b89c85970"},{url:"assets/js/page-基础知识--770cb96b.19f2d852.js",revision:"103e2b9c155aedd9ea8f7c672cc03660"},{url:"assets/js/page-安装使用--0ab466d2.b2fb6d76.js",revision:"23c385cd46ecd5ffb6fdd8a21efb0c10"},{url:"assets/js/page-对象--16031ab2.2db35385.js",revision:"47a175a9f89982bf1b766fe7b20f081b"},{url:"assets/js/page-导航栏--c7bf87dc.86a05982.js",revision:"d96f04d7c9ff359cb903effcc32d2ac1"},{url:"assets/js/page-布局--12bd4f0e.2e262a1c.js",revision:"0d5c7f6133872df9017308f6c59c7213"},{url:"assets/js/page-常见问题--2b571e9b.65241d36.js",revision:"a077e2c2365d69f25c9c7228d564a1b0"},{url:"assets/js/page-插件--adbf415c.0e14d40a.js",revision:"911c3ba2e4720edc332baebe433f73c9"},{url:"assets/js/page-插件说明--137c6c07.4318318e.js",revision:"a0285e1f5b5c3df26b672cb9316e4379"},{url:"assets/js/page-文件结构介绍--665a4f1c.a9e9cff4.js",revision:"16e9a75c51f12035ecc9058957f8e964"},{url:"assets/js/page-新增特性--5136c541.f4fdb693.js",revision:"9eada083615f26e706449dc6436a8282"},{url:"assets/js/page-新增组件--1d138c72.1aa8f318.js",revision:"b40c1e3db2a7ebe2090cfc0b52f84e16"},{url:"assets/js/page-标记--6b1f341c.af35e00c.js",revision:"1856efe12f9cd48e80b60a796584785f"},{url:"assets/js/page-流程图支持--7ce6d974.66b2113f.js",revision:"8eacf512753dad33f7b3ccc67dea4c5d"},{url:"assets/js/page-深色模式与主题色--e23e731c.dd85c9b0.js",revision:"4b8d20862dabb6b2139c4a58c7883efb"},{url:"assets/js/page-符号--a9259c5c.96262c7c.js",revision:"89a2a929e7011585a8750a240c30c594"},{url:"assets/js/page-脚注--0c733e52.6302f937.js",revision:"706c1d8879b93cf6e2b3fb432c8242a0"},{url:"assets/js/page-自定义对齐--4f21aa5c.5409d520.js",revision:"2dbd61aab8dde98b3aac86db4315f60d"},{url:"assets/js/page-自然--749fb09c.3d53cd6d.js",revision:"1ee1380880871c859f8eb5bb805f0ce1"},{url:"assets/js/page-评论功能--5bb6671c.f52ece12.js",revision:"30a3280d727e7cebd17461f7ab2f2212"},{url:"assets/js/page-配置文档--35a0a7d9.912c635d.js",revision:"10b6b017c2775fa9d46b300eba10b5db"},{url:"assets/js/page-页面--af17b59c.1f3008f3.js",revision:"bf23c4ab1aada9f3c082d733092b58a8"},{url:"assets/js/page-页面信息--71efd5d2.a0ae4ffb.js",revision:"f343acb9994420f34cc1d5cf950c8503"},{url:"assets/js/page-页面配置--0aacc152.a6969a82.js",revision:"47b8dc5f3ecba0e3efc37c2383a7f738"},{url:"assets/js/page-项目指令--9f3f316c.8be38a8b.js",revision:"30a3c3ad05d4a3b203f6fb4c19253258"},{url:"assets/js/page-项目案例--f328658e.218e3e76.js",revision:"2c1ec44b0b42de499871f27bb88666bc"},{url:"assets/js/page-首页--5834599c.03734cb4.js",revision:"108a0c3f6f8f9864ae346c27a0d9058b"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.e2624112.js",revision:"6d12e82a69af36b986fa59a2cd9999cb"},{url:"assets/js/vendors~layout-Layout.83b574c4.js",revision:"e9e9e5780d6b2c821dc01eb06dbace72"},{url:"basic/index.html",revision:"088045ab1599c2c5b688edd0335ec39d"},{url:"basic/markdown/demo/index.html",revision:"457941c9da5cce8ee0861e563ed95a98"},{url:"basic/markdown/emoji/index.html",revision:"72f955c165908b962273bf443a99b039"},{url:"basic/markdown/emoji/nature/index.html",revision:"87c95f6faeff7ab5fdd8a91232d6b668"},{url:"basic/markdown/emoji/object/index.html",revision:"f88785f60eb54062087a00eab1101195"},{url:"basic/markdown/emoji/people/index.html",revision:"ead03b216bd832a9d9712ad51159e841"},{url:"basic/markdown/emoji/place/index.html",revision:"bdb98a0497b84553bcb0ec905517d7ab"},{url:"basic/markdown/emoji/symbol/index.html",revision:"4c72cb14a6b830ee67d29913eb6b6072"},{url:"basic/markdown/index.html",revision:"7c3f80dc720a9fcd7b628937d1c265a6"},{url:"basic/vuepress/case/index.html",revision:"81c08c0952dec02c90e4186a21b28b85"},{url:"basic/vuepress/command/index.html",revision:"c996680fedc7b8ce84dd99e96cdc50ab"},{url:"basic/vuepress/file/index.html",revision:"4c73be84ac7df31ce80dd89f413d90c8"},{url:"basic/vuepress/index.html",revision:"d144285d38055a6ea42dd65b1914f4f8"},{url:"basic/vuepress/plugin/index.html",revision:"152d75fcf98c04326c1463c533b035f9"},{url:"basic/vuepress/theme/index.html",revision:"ef1a8d64ee1486590882353fc7c457d3"},{url:"category/config/index.html",revision:"f5f90a24c1e4d08dafdbd8b9bbc65154"},{url:"category/config/page/2/index.html",revision:"cb7e1d6d27785ebed00ce8931b6589af"},{url:"category/config/page/3/index.html",revision:"de172aa4ded6998317def52720106ea5"},{url:"category/FAQ/index.html",revision:"b901191b692e73d62fa54254c3fb06c8"},{url:"category/feature/index.html",revision:"170b4790c47db98f020b5056b007bebf"},{url:"category/feature/page/2/index.html",revision:"832c7eae55e5f9f34709d75273bca3b2"},{url:"category/index.html",revision:"c926f9d536f20ee66a98b6cc99fd8289"},{url:"category/instruction/index.html",revision:"5b9943ed29e6fea544419c27bb1b28fb"},{url:"category/layout/index.html",revision:"f08329ead7212a1678d7a5fa61a60e11"},{url:"category/layout/page/2/index.html",revision:"8d921603d9e81e76c7464437ec78c453"},{url:"category/markdown/index.html",revision:"bb9ef620dcf356e02532f56f50407f8e"},{url:"config/index.html",revision:"8535a48ba39552defda3ebc198504a82"},{url:"config/page/index.html",revision:"60f406ecff9e9d959b113d2f54cbe3bd"},{url:"config/plugin/container/index.html",revision:"0cfbd2b4fbad6c20509c2d5e371f7196"},{url:"config/plugin/copyright/index.html",revision:"2d6192358e3b099ccf6a4906ea7e71a7"},{url:"config/plugin/index.html",revision:"231612d2a38e0f8dcf9a351219095c76"},{url:"config/plugin/last-update/index.html",revision:"d077e9fca2605ac5bf3b68a9cb85ce56"},{url:"config/plugin/photo-swipe/index.html",revision:"3dc037c126f15e4e265a8c00f2baf6db"},{url:"config/plugin/pwa/index.html",revision:"d631cc31a0556d2f18bf8b2cce4620a8"},{url:"config/plugin/reading-time/index.html",revision:"1a35f801cec6271153c215851bcb029f"},{url:"config/plugin/seo/index.html",revision:"8af35c35550d6c6fe2ec0106bb58bebc"},{url:"config/plugin/sitemap/index.html",revision:"87c38ed5548b49017746b00406bd8ad3"},{url:"config/stylus/index.html",revision:"260751342473a1dd7e9154fa43332070"},{url:"config/themeConfig/index.html",revision:"ce2c44d845960cdf27fb8968299b01cf"},{url:"demo/index.html",revision:"fca48623adee0207243b7e4dc9255d0d"},{url:"en/basic/index.html",revision:"338f12a96a5d7bf78cbbef64b4add117"},{url:"en/basic/markdown/demo/index.html",revision:"2dd9ba0f9ea0f48cea59db87e24c7519"},{url:"en/basic/markdown/emoji/index.html",revision:"c3b4293840d7b287c75b35036c7a70f2"},{url:"en/basic/markdown/emoji/nature/index.html",revision:"c95112be00e46aba374f6d28044f0db4"},{url:"en/basic/markdown/emoji/object/index.html",revision:"ee898f63e48a87f234517e8bf5c7bcfd"},{url:"en/basic/markdown/emoji/people/index.html",revision:"4418b55d13f240eaa1f209eaa22f5225"},{url:"en/basic/markdown/emoji/place/index.html",revision:"30838514f3bed38bcc7ec8dc64805a95"},{url:"en/basic/markdown/emoji/symbol/index.html",revision:"deec9ffe0fdba173c3beda6a03124203"},{url:"en/basic/markdown/index.html",revision:"7e750ecf0070998594966980b3b29bf3"},{url:"en/basic/vuepress/case/index.html",revision:"26caf684bcd900a318f4d6a1717a5233"},{url:"en/basic/vuepress/command/index.html",revision:"2d0618410897cabba9b62ba912bdd8cf"},{url:"en/basic/vuepress/file/index.html",revision:"680196d46785d079e329594c0035f71b"},{url:"en/basic/vuepress/index.html",revision:"339b64c3f5ee20a5ec57b68b3aa5a179"},{url:"en/basic/vuepress/plugin/index.html",revision:"f332b95f6fa14e1c2db7e61efff96db4"},{url:"en/basic/vuepress/theme/index.html",revision:"6fd9af72ac81a2f3cc6490d54a222186"},{url:"en/config/index.html",revision:"b10b2aa528f5c9648fc4a328c8d434a1"},{url:"en/config/page/index.html",revision:"9846c6464796274cd31bfcd0bdeeac06"},{url:"en/config/plugin/container/index.html",revision:"118186acba5542d3d67e2b07c267abdf"},{url:"en/config/plugin/copyright/index.html",revision:"9b81a1117c94d105b0b3d551d0fa09a5"},{url:"en/config/plugin/index.html",revision:"075fcd6bfde5501f48e44c8fa0a4944c"},{url:"en/config/plugin/last-update/index.html",revision:"f6dd9f5055e3bc3733228b9cc6c600be"},{url:"en/config/plugin/photo-swipe/index.html",revision:"9cee1d125b1eeb39805a57263e4a7e14"},{url:"en/config/plugin/pwa/index.html",revision:"abc433ab9e28f6689e6d76aa4544e000"},{url:"en/config/plugin/reading-time/index.html",revision:"b08d6341d6fec0f41c145c270717e52f"},{url:"en/config/plugin/seo/index.html",revision:"fc6376cb8ce836a012a04c01e84a68c0"},{url:"en/config/plugin/sitemap/index.html",revision:"30d81e40d4562ef30674e8942028f5cf"},{url:"en/config/stylus/index.html",revision:"e4d6705a76f7dec1eb2b6c560a50472c"},{url:"en/config/themeConfig/index.html",revision:"a0d0fcff55333ad28a7aea4ef1195d74"},{url:"en/demo/index.html",revision:"1ee1fb620111ff527d3431e4563b05a0"},{url:"en/FAQ/index.html",revision:"f551705c00d57ff64ea6dda9514dab8e"},{url:"en/guide/feature/blog/index.html",revision:"cf0740521fd0353180561a85b8c6e421"},{url:"en/guide/feature/comment/index.html",revision:"3d2deace33a1a740d9feea0730b6fc6b"},{url:"en/guide/feature/component/index.html",revision:"7402c504875904ba333aebb7fc9c348c"},{url:"en/guide/feature/encrypt/index.html",revision:"43d589e38ef0c674aa49bb9f31cce0b9"},{url:"en/guide/feature/index.html",revision:"c5687a0187f3bc36b740d7909189901f"},{url:"en/guide/feature/markdown/align/index.html",revision:"efcf181d344d65cbc34fb90814553aa8"},{url:"en/guide/feature/markdown/flowchart/index.html",revision:"2363bc05f914c7acdb24c089fc599614"},{url:"en/guide/feature/markdown/footnote/index.html",revision:"40f19128ec6e48783e914e100c36fe6f"},{url:"en/guide/feature/markdown/index.html",revision:"ce52dde698f7e4c0e153a2158f6927d9"},{url:"en/guide/feature/markdown/mark/index.html",revision:"b93f65937bd3e484565949291b632ba2"},{url:"en/guide/feature/markdown/sup-sub/index.html",revision:"2411205271b3d0fc56ce236813952f54"},{url:"en/guide/feature/markdown/tex/index.html",revision:"39fc55532e30f168262b6b37156df020"},{url:"en/guide/feature/page-info/index.html",revision:"a27e5c435a80a451b07de77cc87dcfe3"},{url:"en/guide/feature/seoAndSitemap/index.html",revision:"b4184ef2abc09099cee3ee5b7903c53a"},{url:"en/guide/feature/theme/index.html",revision:"3cdfbb59393fc0bf04d12f289f37a722"},{url:"en/guide/feature/typescript/index.html",revision:"9b72bafb44f4a673e708e20b8b652723"},{url:"en/guide/index.html",revision:"1feacb08d471e9d4dd0ca45d6b5b995a"},{url:"en/guide/install/index.html",revision:"ff2571077bdf886933ddb40de39e9076"},{url:"en/guide/layout/blog/index.html",revision:"65a119dde503c2d4d2fa603d6a05a81b"},{url:"en/guide/layout/home/index.html",revision:"3c7b31171e3ad4110117a5cb3eeca34d"},{url:"en/guide/layout/index.html",revision:"56cda643e333f932d17ba82f14b0a5b4"},{url:"en/guide/layout/navbar/index.html",revision:"a8ab0d0f05675eaf99dbb41b833cd7cb"},{url:"en/guide/layout/page/index.html",revision:"3ff8241ad694637f5bcd62975a3aecff"},{url:"en/guide/layout/sidebar/index.html",revision:"dc6702cc5a28ddda4cea41456cbc9a42"},{url:"en/index.html",revision:"77db5ff8073e6ba5c60a13a5690cd06d"},{url:"FAQ/index.html",revision:"b1da52dc059f85ee7ba4362933f8df48"},{url:"guide/feature/blog/index.html",revision:"3beaedcf2cd4a947de29c5fe2c810c95"},{url:"guide/feature/comment/index.html",revision:"072ae10f1012b598aac4f0aa685649ac"},{url:"guide/feature/component/index.html",revision:"c7fccc80f8a1d0b458919639e0ba9941"},{url:"guide/feature/encrypt/index.html",revision:"0c9451932928d90fbc413434ac9220b9"},{url:"guide/feature/index.html",revision:"6fbea6574700b39251ed6da58d013dc2"},{url:"guide/feature/markdown/align/index.html",revision:"e68fb924364086b5fecb5e9d89097537"},{url:"guide/feature/markdown/flowchart/index.html",revision:"74676b2ab6df1ec6d8323fd39f697637"},{url:"guide/feature/markdown/footnote/index.html",revision:"8f8166d015dab3b7d73632aef2bd8b09"},{url:"guide/feature/markdown/index.html",revision:"02cec0f06acf0ca779944192aa410019"},{url:"guide/feature/markdown/mark/index.html",revision:"d0c7a13cefcfbbe934373e2b54bc926d"},{url:"guide/feature/markdown/sup-sub/index.html",revision:"67cdc4f805d6d931521674996fd89a71"},{url:"guide/feature/markdown/tex/index.html",revision:"7ac1f303e3743b4127a048bb379c36b7"},{url:"guide/feature/page-info/index.html",revision:"09b82bf24e2b42d29e5ffccd0d40cc61"},{url:"guide/feature/seoAndSitemap/index.html",revision:"b1ec7046172001d04a10a67a5c422585"},{url:"guide/feature/theme/index.html",revision:"5823e6640baaed7ffd2abdf4a67f93d4"},{url:"guide/feature/typescript/index.html",revision:"4eac5b347c779be12bef15c9cf044416"},{url:"guide/index.html",revision:"eff05cb6ccc0be05e3b31f503d9dc5f3"},{url:"guide/install/index.html",revision:"db44687b0e61a16b893cc8350d0a7f2c"},{url:"guide/layout/blog/index.html",revision:"6e9cd203d3d6e3e13c4cc07b3f1112ee"},{url:"guide/layout/home/index.html",revision:"2dbb89ab41164d7b099abb821f99fcb4"},{url:"guide/layout/index.html",revision:"ba58b4652be31ea27b8a9b86bf37dd4c"},{url:"guide/layout/navbar/index.html",revision:"0aa2c992e940935036732665b68078a6"},{url:"guide/layout/page/index.html",revision:"71b145f1c416aaf85f22546b8679f833"},{url:"guide/layout/sidebar/index.html",revision:"629905f346dcbfcb4ad3414ef134cb00"},{url:"index.html",revision:"ac2e4c83c7807227014cacf17f6d25ec"},{url:"logo.png",revision:"13417285202b91bf6571ccef63c17039"},{url:"logo.svg",revision:"2ff99a4865a6eceeaf3d949e479c7990"},{url:"tag/blog/index.html",revision:"24ed16d34168e8c568738009e235d236"},{url:"tag/comment/index.html",revision:"0bf9b65f86e9595b60af3abc8d510dae"},{url:"tag/components/index.html",revision:"c69402fe6cbe3175c01b9196b3d7260e"},{url:"tag/config/index.html",revision:"8243ce228f96a84ad32aa06753ab8c55"},{url:"tag/config/page/2/index.html",revision:"0c4f005b72f98474c2b2119929a06f18"},{url:"tag/config/page/3/index.html",revision:"31211225499d420890213dd0b2769724"},{url:"tag/emoji/index.html",revision:"c298b1baddfa8a4a03075213c242bb26"},{url:"tag/emoji/page/2/index.html",revision:"09968839f8455b52c1404c9ac6ed61e4"},{url:"tag/encrypt/index.html",revision:"7778b854983f95690b8dfd86ba0b148e"},{url:"tag/feature/index.html",revision:"c2072d277fd1364dd094127d9112ad1e"},{url:"tag/feature/page/2/index.html",revision:"b8b75a1fb483c20cb05cf124a4dfebf1"},{url:"tag/frontmatter/index.html",revision:"f8c1380736cef9f48ea65e28233eaba6"},{url:"tag/function/index.html",revision:"b32644c6a27fccecd998d9306b3f7f98"},{url:"tag/function/page/2/index.html",revision:"a5e7336aa60509a667d35c9226d4abe3"},{url:"tag/home/index.html",revision:"4e695e70a4a7e75f54df073da44306f8"},{url:"tag/index.html",revision:"3cd6464c088c2ab117df60ce1dbb969e"},{url:"tag/intro/index.html",revision:"69ed84692d6c5d636d6c1531f43a54a2"},{url:"tag/layout/index.html",revision:"ed5a0c0c7a65964f495695d32ddfb029"},{url:"tag/layout/page/2/index.html",revision:"475ce02da19574f3f763fd1ebc3087f1"},{url:"tag/markdown/index.html",revision:"caceae8d44c4fde997e1d854411ec5ed"},{url:"tag/markdown/page/2/index.html",revision:"68ab27d20dbda22652ad55a8dcebb0c3"},{url:"tag/markdown/page/3/index.html",revision:"c284552f2f76a7f39aacf1e2759330d5"},{url:"tag/navbar/index.html",revision:"bdf174ffb6ecbf7deae261da799a3759"},{url:"tag/page-info/index.html",revision:"26f4a646f6872cd80f5c8cd129e35a79"},{url:"tag/plugin/index.html",revision:"aa4a01deaa344779f8627ea7b1ec001d"},{url:"tag/plugin/page/2/index.html",revision:"76af93443c269844e50097c8830054a7"},{url:"tag/seo/index.html",revision:"4b8bdb6900e3c3ec1221fde787b53235"},{url:"tag/sidebar/index.html",revision:"67d33a022d54f5c358ad2347a4162078"},{url:"tag/sitemap/index.html",revision:"f7db1634aed00514aa0b9aff75013e70"},{url:"tag/style/index.html",revision:"5c23b5f13325dbd6d1c39907473413a4"},{url:"tag/themeConfig/index.html",revision:"d88f8a3079a16532ccc0cbf462287585"},{url:"tag/typescript/index.html",revision:"8ec4c119bfc2d8976851c982abb0815f"},{url:"tag/vuepress/index.html",revision:"d8ee3535382a17d9b6496c8ca851e78d"},{url:"timeline/index.html",revision:"3f2abdbf45a8ad202440e42e318b6671"}],{})}));
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
