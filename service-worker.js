if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,i,d)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const c={uri:location.origin+a.slice(1)};return Promise.all(i.map(a=>{switch(a){case"exports":return s;case"module":return c;default:return e(a)}})).then(e=>{const a=d(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-60b22648"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"api/index.html",revision:"92ab64da76411825f6c3e55f4d25be9f"},{url:"api/page.html",revision:"a3ba23e93ff7c0278800b55f67ac9836"},{url:"api/plugin/container.html",revision:"a4bea94a1a08724b552360f8575e1244"},{url:"api/plugin/copyright.html",revision:"2d339c5cd2565d0e9509d930bd969bbc"},{url:"api/plugin/index.html",revision:"f0fae2e7d2e8349b61005d72f33d96ac"},{url:"api/plugin/medium-zoom.html",revision:"3e2c8c9be310e3941a8ba6c363783ebd"},{url:"api/plugin/pwa.html",revision:"53cc8bbdfe95c7a74004ac9905e24bd1"},{url:"api/stylus.html",revision:"1eeab6fba60f92a8f513337dcd48d02a"},{url:"api/themeConfig.html",revision:"05826c50d7e507fcb5561132e4f45725"},{url:"assets/css/0.styles.443c9e0d.css",revision:"83261d067dd786ef6a5a427be581e224"},{url:"assets/fonts/MathJax_AMS-Regular.07173fb7.woff",revision:"07173fb77d2ee655811499d40c8388e7"},{url:"assets/fonts/MathJax_Fraktur-Bold.bc421258.woff",revision:"bc42125861bd5bfc8686deeb612dcbb3"},{url:"assets/fonts/MathJax_Fraktur-Regular.b80e08d5.woff",revision:"b80e08d5a79acbd1fafb1ca6f3515664"},{url:"assets/fonts/MathJax_Main-Bold.c9423d5d.woff",revision:"c9423d5dc9d82a38ca215f74e9cdd9f2"},{url:"assets/fonts/MathJax_Main-Italic.7e83626b.woff",revision:"7e83626ba8bf2d20dc41565f1e6d0afc"},{url:"assets/fonts/MathJax_Main-Regular.9995de47.woff",revision:"9995de4787f908d8237dba7007f6c3fe"},{url:"assets/fonts/MathJax_Math-BoldItalic.77dbcee3.woff",revision:"77dbcee3c3d9a82a0c04a4ae7992b895"},{url:"assets/fonts/MathJax_Math-Italic.5589d1a8.woff",revision:"5589d1a8fc62be6613020ef2fa13e410"},{url:"assets/fonts/MathJax_SansSerif-Bold.07281897.woff",revision:"07281897a98a61c3733e1670f82a9fd5"},{url:"assets/fonts/MathJax_SansSerif-Italic.3d580bd5.woff",revision:"3d580bd561716bfb1f0b4fdd7063a802"},{url:"assets/fonts/MathJax_SansSerif-Regular.bc3af04f.woff",revision:"bc3af04f9a671fcabd6498042c57478f"},{url:"assets/fonts/MathJax_Script-Regular.4c74e33b.woff",revision:"4c74e33b0feb1fdbda49403a5e7ed604"},{url:"assets/fonts/MathJax_Typewriter-Regular.72815766.woff",revision:"72815766b08ca24d4d29ad1f5d4ecb45"},{url:"assets/img/architecture.9a93cf6c.png",revision:"9a93cf6cea38878e19c5816d1af28b17"},{url:"assets/img/homeImage.5ae9de9e.jpg",revision:"5ae9de9e15120d94e9892d0c15da9896"},{url:"assets/img/nightmode.73215ae2.png",revision:"73215ae22b72654917bb26f315d7d47c"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/js/95.96b8f593.js",revision:"6d39909bc2b42b97469e4e84cf1204fe"},{url:"assets/js/96.72edbade.js",revision:"ac4c77fce26f9cf7ab9e2ce28551dfdc"},{url:"assets/js/app.146cbee9.js",revision:"7ddcac0e7f1dfe7e6e80b8116aaefebb"},{url:"assets/js/layout-BlogEntry.cf1a0fe2.js",revision:"1a8202649f4f0baaa56aeb66499ac9f4"},{url:"assets/js/layout-BlogEntry~layout-Category~layout-Layout~layout-Tag.3c33a47e.js",revision:"be36573d9c27cef665c8c21e7e94c271"},{url:"assets/js/layout-BlogEntry~layout-Layout.48d04dfa.js",revision:"9d92263d2af920c8b135e596624857cf"},{url:"assets/js/layout-Category.d012e6f3.js",revision:"efb2b389311d18ceacd225ab06d10596"},{url:"assets/js/layout-Layout.3e46d324.js",revision:"ebb8fd92784ea7f259579cd46909164d"},{url:"assets/js/layout-NotFound.1614b9ac.js",revision:"b77e30e6f5c438030c8d03f12b8e027a"},{url:"assets/js/layout-Tag.1576415f.js",revision:"b44faf0db40528e1e23d8b9a7801c56e"},{url:"assets/js/page--1b278726.8a95b656.js",revision:"6d5316397a921179a1fd24f3db29b047"},{url:"assets/js/page--24b68849.c44bce45.js",revision:"459059a6f16b14a5fd10079549b17c55"},{url:"assets/js/page--298eb4e9.fbf3331a.js",revision:"111ad0b26ffecdcd8285c6aac435d095"},{url:"assets/js/page--33732ef1.d6e855a5.js",revision:"f159263a04253c0c3a5b61215eb3ebe6"},{url:"assets/js/page--608d80cf.b02bf1df.js",revision:"76a87c6dca894baf6b2998b6252bbb9f"},{url:"assets/js/page--b64dd6ee.ff4932ab.js",revision:"c7f5df91f58ac17c016ca9e50212d330"},{url:"assets/js/page-About Vuepress.67c2bf2b.js",revision:"b06881271596b78c959c5a52a39de178"},{url:"assets/js/page-API Docs.14d59695.js",revision:"3c86e84aac8ad3f5361cb8de748c42f4"},{url:"assets/js/page-API 文档.33eeff56.js",revision:"3ef80522d7eb2aa9f0db42d81ad62f4a"},{url:"assets/js/page-Basic.d084b553.js",revision:"ccab46aa7d53f68662a0638759dac060"},{url:"assets/js/page-Breadcrumb.dd54fed9.js",revision:"3f8925cdd6618945fe160c16031866e4"},{url:"assets/js/page-Comment Function.f319bab2.js",revision:"40f4efe3b4967b141c98c0409f871845"},{url:"assets/js/page-Default Theme Config.da00ae2b.js",revision:"0a33587c6c5b7979f9b7b26a14163b55"},{url:"assets/js/page-Emoji List.3f3d59fb.js",revision:"4c278c6d40680cf802dcc8efdf8e54e2"},{url:"assets/js/page-Emoji列表.18d30f14.js",revision:"d1152b1cedad3fed279670df7bb2703a"},{url:"assets/js/page-File Structure.e219ef86.js",revision:"2cb80d0b62fe27cf94febb3a8bd1ec2c"},{url:"assets/js/page-flowchart.c0b01bee.js",revision:"6f76081e98e9675f34538fb35f7b9889"},{url:"assets/js/page-Footnote.d49c7ce9.js",revision:"c19b9366b55c7b801a4f0b56f00e706c"},{url:"assets/js/page-Fullscreen Button.d1bbdd04.js",revision:"788728ef2820d790d47ab83ef5cdcb17"},{url:"assets/js/page-Home Page.cb8b3c82.js",revision:"2ae19fa288c8e0f3a11dd1008c4e3fc3"},{url:"assets/js/page-Home.b307d547.js",revision:"9702c42a6385c2613fa7a4f574563ebc"},{url:"assets/js/page-Introduction.59a2af1c.js",revision:"6c7804ba75a1bf234793163b103c4b83"},{url:"assets/js/page-Markdown DEMO.6703a92f.js",revision:"5dcb95693a6264e7aeb3d87af8d25e15"},{url:"assets/js/page-Markdown Introduction.147346c8.js",revision:"928513a8247c60f2ce65873c0d140ff5"},{url:"assets/js/page-Markdown 新语法.0b0d7407.js",revision:"ce20b89acc0f9db7f90f705ea14341e1"},{url:"assets/js/page-Markdown介绍.9c2cf85b.js",revision:"9f376bbd75ba61116ff333ef7402386a"},{url:"assets/js/page-Markdown示例.94c069f7.js",revision:"b0aad2ee60810db68d37fbbf9a37a801"},{url:"assets/js/page-NavBar.1ec8c36b.js",revision:"763193d71caee2289e21dee022a4f433"},{url:"assets/js/page-New Component.31a2bb54.js",revision:"ab970c35b3327762a8e0e38d53410309"},{url:"assets/js/page-New syntax in Markdown.c7bd17c4.js",revision:"dcff8c9f51f6a662562f1a013f7c6d54"},{url:"assets/js/page-Page Configuration.622d2b0e.js",revision:"1b24831e476d283fa4bfd0ecfadb3e19"},{url:"assets/js/page-Page.fde1ae0e.js",revision:"0af79c5ef9e8414781e313650f8b3e54"},{url:"assets/js/page-Plugin Description.09a3c2fb.js",revision:"24f4313aa854ceb43df10fe99f4b2056"},{url:"assets/js/page-Plugins.9c508de0.js",revision:"5f1a45bab96bea7d89611bcb646f8c34"},{url:"assets/js/page-Sidebar.b1cac9b0.js",revision:"39c04fc0fdc8fbe867b2e811a650cd50"},{url:"assets/js/page-stylus configuration.4a35a20f.js",revision:"f1adcdfa1d677c4dd014a6d57d3c4361"},{url:"assets/js/page-stylus 配置.93f894d2.js",revision:"1f4796b965cca05daa68bab586a5a36d"},{url:"assets/js/page-Superscript and Subscript.afac2ece.js",revision:"c13416603a385b6fc373c2e82629674d"},{url:"assets/js/page-Tex Support.369a023b.js",revision:"cf5bc27cad2085c794080b947454a05e"},{url:"assets/js/page-Tex 语法支持.6abd9ace.js",revision:"89bf54d181f227e17b070236cb55d952"},{url:"assets/js/page-Theme color and Night mode.9412b886.js",revision:"3fe1e4b4b7ad98800529373c8c7cd73a"},{url:"assets/js/page-Theme Config.11f77448.js",revision:"d951ff50ea983b7bfa46de54eebf48c2"},{url:"assets/js/page-TS 支持.7a05a028.js",revision:"c6d02c5338ab5a90bb3901e15fdd8cc0"},{url:"assets/js/page-Vuepress Cases.3793ec94.js",revision:"4c19ebedf2902c3fd42040fca6019b86"},{url:"assets/js/page-Vuepress commands.98a8c202.js",revision:"a51f161ec1db6f151582ac5659fb0b4a"},{url:"assets/js/page-Vuepress 案例.2146afbe.js",revision:"da809403bcedc6fc830df33c9574bb73"},{url:"assets/js/page-vuepress-plugin-container.92c824af.js",revision:"e2e581e1556fc95f0992e6a7b6a801bb"},{url:"assets/js/page-vuepress-plugin-copyright.357603da.js",revision:"41f6d58dd021ed789a1815a155db4f7b"},{url:"assets/js/page-vuepress-plugin-name-chunks.f4c3331b.js",revision:"b1cccc82e4f0511ab3ac438bee36ce7b"},{url:"assets/js/page-Vuepress.9bc8dd43.js",revision:"4aab3eef77df067dc3ba8c1505ee5a15"},{url:"assets/js/page-Writing a theme.6067f8c7.js",revision:"e461668c6f7e9175090f897fd8a265a4"},{url:"assets/js/page-上下角标.59fbe914.js",revision:"0527c3859e4e5fe79b5fa45fd4fe7ca0"},{url:"assets/js/page-主页.ea42ebfa.js",revision:"fe70560c70c549f87cd6e5ae95f5db36"},{url:"assets/js/page-主题色与夜间模式.03c89293.js",revision:"7b260d8129ee525a74a0d080d8f22920"},{url:"assets/js/page-主题配置.1fe46a11.js",revision:"87c1c76988c6a467441bca8678527a6a"},{url:"assets/js/page-人物.afebb32a.js",revision:"2fc09d1881cf993cea22c88ca6ff4781"},{url:"assets/js/page-介绍.14d2630d.js",revision:"f0da26d13f9aabe4ed37c3613ffd96fb"},{url:"assets/js/page-侧边栏.8f46f595.js",revision:"c6ceea9a9b7bcebec4130f68a8a6c234"},{url:"assets/js/page-全屏按钮.cc83a723.js",revision:"81aa3ec564405e69bdd2ad71b50340e7"},{url:"assets/js/page-加密功能.d02e303a.js",revision:"1277fa2dc6a6d1f622a96c098f49972b"},{url:"assets/js/page-图标支持.f83c3c96.js",revision:"d4032816f554d2dab0a05a70ecb0e4bd"},{url:"assets/js/page-地点.496c7d0a.js",revision:"8ecce872a2b1831cfef4165a961ff118"},{url:"assets/js/page-基础知识.5dfc54c3.js",revision:"f96b7faa580fe0fcf950b9e1c1f20ea7"},{url:"assets/js/page-对象.6102f3b2.js",revision:"17156e794fd09d1505507f652b218f5a"},{url:"assets/js/page-导航栏.d9b9755c.js",revision:"84158440f573609c9c0224e6529fa5ee"},{url:"assets/js/page-布局.edd1aaa2.js",revision:"7c2d4abc9d5c3173fc46bac84e45e78a"},{url:"assets/js/page-常见问题.d81ac16b.js",revision:"9099b0a03d309cb58db515c8a061baf1"},{url:"assets/js/page-开发主题.bf38d4e5.js",revision:"0ccfc3eb1f68d4932f7b4772b4298a38"},{url:"assets/js/page-插件.f35c9c48.js",revision:"68ed8aa4d56a60f139cce1a53e24f98c"},{url:"assets/js/page-插件说明.8b74fdcf.js",revision:"7b803f256309c43a04eacbb8163ff519"},{url:"assets/js/page-文件结构介绍.91568ec4.js",revision:"489454e98c181e3e24397be1374276b8"},{url:"assets/js/page-新增特性.dbcf2b4a.js",revision:"cd2a38aa19b9886598d45802b15a9e07"},{url:"assets/js/page-新增组件.d5df5826.js",revision:"1b8aaa9234baf92d4767d9845049c01a"},{url:"assets/js/page-流程图支持.cb436ed9.js",revision:"e32bc62bef2a436a8b4fe453fa29d4e5"},{url:"assets/js/page-符号.49e7652a.js",revision:"144fb757917306cd550c7660f181199c"},{url:"assets/js/page-脚注.36898723.js",revision:"2c473c309af774371be6ef1cb52a59b4"},{url:"assets/js/page-自定义对齐.ba188096.js",revision:"6f7533ba65c712c12d6c2f89b8f1bab4"},{url:"assets/js/page-自然.b062dd6b.js",revision:"000d12d2cafbef99293876192b23f9d8"},{url:"assets/js/page-评论功能.5606a8d5.js",revision:"272a3dad75afecf28a8d30ba783d07e0"},{url:"assets/js/page-路径导航.daa52389.js",revision:"0ce20f5cfb3eda42a2b31590aa0b5cf3"},{url:"assets/js/page-页面.afb9e7fb.js",revision:"e0ced73864d92dae655373483aa46f2c"},{url:"assets/js/page-页面配置.e65fabf3.js",revision:"93d3dbeaaa49a834154dbdd52364cbed"},{url:"assets/js/page-项目指令.1536abaf.js",revision:"7382d8ab4fbf71628d8ae3cb3a219cef"},{url:"assets/js/page-默认主题配置.ce07e3e9.js",revision:"d71d7bea2e1211b7ed9bce3dd0055690"},{url:"assets/js/vendors~docsearch.aac21b54.js",revision:"ced9fb55bd44e54ed7336c813f7c0f4f"},{url:"assets/js/vendors~layout-BlogEntry~layout-Layout.9d04333e.js",revision:"dbdd097e4f3e4b5e5ae572810de14ff0"},{url:"basic/index.html",revision:"a5720487221506bf1277bdc3f728e34f"},{url:"basic/markdown/demo.html",revision:"d12cfca25d24d08d072ad263861f1ade"},{url:"basic/markdown/emoji/index.html",revision:"fe099ab3ad22e2401299ca1a38809a5e"},{url:"basic/markdown/emoji/locate.html",revision:"8ed80f9d4d9b6f725888c2a9194161e8"},{url:"basic/markdown/emoji/nature.html",revision:"2f23075ab7e66217ff46baff8589689f"},{url:"basic/markdown/emoji/object.html",revision:"d1099a8220cf1b96360a90107544b8f7"},{url:"basic/markdown/emoji/people.html",revision:"a530477ad6e51cd9c31b6b366aaf35db"},{url:"basic/markdown/emoji/symbol.html",revision:"0fed233b790b522bdf111f2862e16289"},{url:"basic/markdown/index.html",revision:"90158db08e72d372dccf3802a5e406e1"},{url:"basic/vuepress/case.html",revision:"fa49a3b339c1ba8db4274ecc4b00084a"},{url:"basic/vuepress/command.html",revision:"192233f0bca8eb80e1f05b0cbe3122e6"},{url:"basic/vuepress/file.html",revision:"d37b7f81323777d90c15be7881f93ffa"},{url:"basic/vuepress/index.html",revision:"7c622fdfda2718be4f5467f3e36ed81e"},{url:"basic/vuepress/plugin.html",revision:"b225da0783d5437027df8ec4e2d61136"},{url:"basic/vuepress/theme/config.html",revision:"fe20fbb9afb7845566cb179c3be0cf8c"},{url:"basic/vuepress/theme/dev.html",revision:"4a4ec72e3e2e0a10e7cb0146a81ba727"},{url:"basic/vuepress/theme/index.html",revision:"a3e83d1bdde1f332965a477ad5a6c39d"},{url:"category/api/index.html",revision:"fc1e70cf4ec94b2958f476b37ff40352"},{url:"category/function/index.html",revision:"8400507d4dd50dd9b8668a3cbf3b092f"},{url:"category/index.html",revision:"d74025e170c82243fdcd4d4ff008bbb1"},{url:"category/instruction/index.html",revision:"2b189a2d0c6d15fa512850225a5b2bcd"},{url:"category/layout/index.html",revision:"ed10ef526bf6ac6d4c1281f9121d4eb0"},{url:"category/markdown/index.html",revision:"b12785ff2c391d2867362af60f7403d2"},{url:"category/style/index.html",revision:"285db30d0ecf43c44e9cb257f19fa1ae"},{url:"en/api/index.html",revision:"dd8302fd583a99c009eb9361b5c40307"},{url:"en/api/page.html",revision:"9425762608d4d65e52eec0bbc42f5133"},{url:"en/api/plugin/container.html",revision:"6180c1d8caa78c13a113171972b62e99"},{url:"en/api/plugin/copyright.html",revision:"985638ff1454f4defb81a46826fa906b"},{url:"en/api/plugin/index.html",revision:"c111d00f16015bf1ba986544791dbf44"},{url:"en/api/plugin/medium-zoom.html",revision:"ed6fa013cedbbce914af19d584a738f0"},{url:"en/api/plugin/name-chunks..html",revision:"bf97047d6e9526ccd6b71fc69c8e1dc2"},{url:"en/api/plugin/pwa.html",revision:"c57811014c89383fad676cf1b55cd4d3"},{url:"en/api/stylus.html",revision:"4c13895aa20f84f466c06c75aec1d684"},{url:"en/api/themeConfig.html",revision:"298d851fa3d2c156a672198bb0dc4a94"},{url:"en/basic/index.html",revision:"c7f9446a6db2eb1a32db7ea09ef04ddc"},{url:"en/basic/markdown/demo.html",revision:"5f3486eea2cc17e2ff83d7d793ee16cb"},{url:"en/basic/markdown/emoji.html",revision:"6de95de802b3b6c36886f388ba25c9a4"},{url:"en/basic/markdown/index.html",revision:"f7c9c069d13a715a92d76a1a4f6a3307"},{url:"en/basic/vuepress/case.html",revision:"9cf87873b7524b064e716769516af849"},{url:"en/basic/vuepress/command.html",revision:"abd8c566c8da7348f10277147aeebc57"},{url:"en/basic/vuepress/file.html",revision:"3832f226c8e7a7ad79b3a2e04dfa32fc"},{url:"en/basic/vuepress/index.html",revision:"abe7d6710c79e742e8faa4f23f456a90"},{url:"en/basic/vuepress/plugin.html",revision:"77c1b62d79a7da6d8a1e81b973fd8b89"},{url:"en/basic/vuepress/theme/config.html",revision:"d9d408e5df413cc1197ea3fad4c74360"},{url:"en/basic/vuepress/theme/dev.html",revision:"4c0b023f04ca1877de05ff981939676e"},{url:"en/basic/vuepress/theme/index.html",revision:"255e0f00fc740325471ecc7fffa580a3"},{url:"en/guide/breadcrumb.html",revision:"068cdda037855c8ecb929f80576e4c67"},{url:"en/guide/comment.html",revision:"3676e73bdf189d84b59f556701d32e74"},{url:"en/guide/component.html",revision:"60af8ed1a9c87c1223851a9373542b5f"},{url:"en/guide/fullscreen.html",revision:"755634b7bcc956b75d6e671041528678"},{url:"en/guide/home.html",revision:"d6793e0f00812070d2dff2460478e8f9"},{url:"en/guide/index.html",revision:"9a7ab87d63fbe9ea40e8c2fa8c5cb752"},{url:"en/guide/install.html",revision:"f6edf8af50da86c7b4f9879d9bb55673"},{url:"en/guide/markdown/flowchart.html",revision:"5490f4abd4aa184bc93d9c3e882302a6"},{url:"en/guide/markdown/footnote.html",revision:"70d43c01a63c1c46260d9dfdec8c963a"},{url:"en/guide/markdown/index.html",revision:"250e765e841efeac406bfb8b5e442c04"},{url:"en/guide/markdown/sup-sub.html",revision:"d0b43de5c387838bfa3dd576d3b4b203"},{url:"en/guide/markdown/tex.html",revision:"a7856cc9a179a9421df372c5fdd3c25b"},{url:"en/guide/navbar.html",revision:"1028ddbf0fe542622cf12537fbc44862"},{url:"en/guide/page.html",revision:"641e5a5a2894d55cc800a33078bd4e8b"},{url:"en/guide/sidebar.html",revision:"4063ee783d6424a69998166ba065daa8"},{url:"en/guide/themecolor.html",revision:"6ec1f4f9b78c678164c53223fce8f2d2"},{url:"en/index.html",revision:"ef4c7c08cb8530634cc469f12a6168d5"},{url:"FAQ/index.html",revision:"f38a94d58b3e9993e19dfc33807c5d68"},{url:"guide/feature/comment.html",revision:"c474652df0ac4a18cefd1275e33847ec"},{url:"guide/feature/component.html",revision:"1e51ca2a6bc43df9b1d84f48f6ed1e5c"},{url:"guide/feature/encrypt.html",revision:"d95270b45af78a50f4c5711bcc4e70e1"},{url:"guide/feature/fullscreen.html",revision:"24dca85c9557a49ebdc32f435944e250"},{url:"guide/feature/icon.html",revision:"2be49843377a6c9970a0318275600a81"},{url:"guide/feature/index.html",revision:"a6bf11f3a8aec26f5c5fa6a584115267"},{url:"guide/feature/themecolor.html",revision:"127079fc0867daff1fbd60a43511306b"},{url:"guide/feature/typescript.html",revision:"b3ea6ed84d1f62c6a40fd11d3d9e3e51"},{url:"guide/index.html",revision:"21509e776de1c70a591b95c1b572aa13"},{url:"guide/install.html",revision:"ba57a95fe6b60d83905ff13aa84a488c"},{url:"guide/layout/breadcrumb.html",revision:"64c76070dcc307c5a55ac3f674f31858"},{url:"guide/layout/home.html",revision:"babcce2e3161a57029532c7f1289e43e"},{url:"guide/layout/index.html",revision:"82d289e90e4f9cb8187e44d7d16aada1"},{url:"guide/layout/navbar.html",revision:"7343a52c039c7030d908fd4a83fd02ba"},{url:"guide/layout/page.html",revision:"86d332ee219b14e6798b0662e1788a6a"},{url:"guide/layout/sidebar.html",revision:"6127a4337305e9bf7a8d4e10e4ba85e1"},{url:"guide/markdown/align.html",revision:"defbb5d14bd48220c063ea782f8fa5bf"},{url:"guide/markdown/flowchart.html",revision:"66342d8bab2e7112e72013aa89cada03"},{url:"guide/markdown/footnote.html",revision:"f8c6f090a2f98f8ce87bd613e98a429d"},{url:"guide/markdown/index.html",revision:"f0fc1be09adc28e005e74f383b25f1b3"},{url:"guide/markdown/sup-sub.html",revision:"ebc2d84b7bf91b893121e3925fcb2926"},{url:"guide/markdown/tex.html",revision:"ac4fd216cf9d9d2f1618805bf1557048"},{url:"img/icon/appleIcon152.png",revision:"9172ed03ed0e66ca085720b7c02fcccc"},{url:"img/icon/chrome192.png",revision:"581c452b65c71f36375193f75bbb7b8c"},{url:"img/icon/chrome512.png",revision:"78af354a94a00054caa93bdba2560bce"},{url:"img/icon/msIcon144.png",revision:"2200b78e72efdcd597b384cf62947c1a"},{url:"index.html",revision:"8f5022744977db98aa827cfd210e7b9a"},{url:"logo.png",revision:"13417285202b91bf6571ccef63c17039"},{url:"logo.svg",revision:"2ff99a4865a6eceeaf3d949e479c7990"},{url:"tag/api/index.html",revision:"bd1dd571a319215a607cbfdf1e5639ab"},{url:"tag/comment/index.html",revision:"04d9d8915de0897a907318991117c2a2"},{url:"tag/component/index.html",revision:"cafe9a8298cff1a3cb51a2a3e82f8227"},{url:"tag/components/index.html",revision:"84030fb336a0d92519345283c3484b23"},{url:"tag/emoji/index.html",revision:"4c1fdec7f0900cd4a4d7a92e0d037f20"},{url:"tag/encrypt/index.html",revision:"1fc56bcc00b248ec5557e6a38eb56da8"},{url:"tag/enhance/index.html",revision:"0a5455d3e7e2b012137a530cc4d4290c"},{url:"tag/frontmatter/index.html",revision:"e0573977a2b143726dfdadd13bd721c0"},{url:"tag/fullscreen/index.html",revision:"cc0b006edb5ef95fe4ea71d652ca6dfa"},{url:"tag/function/index.html",revision:"648ab86d04dafda60b11c98867929190"},{url:"tag/home/index.html",revision:"8dd8ec234847afc81f00e36e9ba9d16f"},{url:"tag/icon/index.html",revision:"853846b13bd753ce319321eecfe8200a"},{url:"tag/index.html",revision:"e630b02ff71cc32e4da2e2cd2d059142"},{url:"tag/intro/index.html",revision:"43cd6972216063ebf195f5194d848614"},{url:"tag/layout/index.html",revision:"3f5d5f17e60a4b063969a1f856368de1"},{url:"tag/markdown/index.html",revision:"a7bd5762b8e3044cbb5e21787715bead"},{url:"tag/plugin/index.html",revision:"ddbe9c94610d83eb4bbf53c312adcbba"},{url:"tag/style/index.html",revision:"27ad0e1dc6622cb17b20e47cb16f879b"},{url:"tag/themeConfig/index.html",revision:"3c5ddbec4634619ba61815b293332efc"},{url:"tag/typescript/index.html",revision:"ac3b45058930eed7f796fe0ba7c1be3e"},{url:"tag/vuepress/index.html",revision:"32e524310cfdcea2a5565b2d1b404f21"}],{})}));
//# sourceMappingURL=service-worker.js.map
addEventListener('message', event => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    );
  }
});
