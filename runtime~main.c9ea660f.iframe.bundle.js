!function(){"use strict";var deferred,leafPrototypes,getProto,inProgress,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.amdO={},deferred=[],__webpack_require__.O=function(result,chunkIds,fn,priority){if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){chunkIds=deferred[i][0],fn=deferred[i][1],priority=deferred[i][2];for(var fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((function(key){return __webpack_require__.O[key](chunkIds[j])}))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,{a:getter}),getter},getProto=Object.getPrototypeOf?function(obj){return Object.getPrototypeOf(obj)}:function(obj){return obj.__proto__},__webpack_require__.t=function(value,mode){if(1&mode&&(value=this(value)),8&mode)return value;if("object"==typeof value&&value){if(4&mode&&value.__esModule)return value;if(16&mode&&"function"==typeof value.then)return value}var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=2&mode&&value;"object"==typeof current&&!~leafPrototypes.indexOf(current);current=getProto(current))Object.getOwnPropertyNames(current).forEach((function(key){def[key]=function(){return value[key]}}));return def.default=function(){return value},__webpack_require__.d(ns,def),ns},__webpack_require__.d=function(exports,definition){for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=function(chunkId){return Promise.all(Object.keys(__webpack_require__.f).reduce((function(promises,key){return __webpack_require__.f[key](chunkId,promises),promises}),[]))},__webpack_require__.u=function(chunkId){return({81:"components-inserter-stories-index-story",139:"guide-stories-index-story",204:"heading-stories-index-story",243:"scroll-lock-stories-index-story",309:"toggle-group-control-stories-index-story",408:"popover-stories-index-story",698:"navigation-stories-index-story",772:"date-time-stories-time-story",869:"components-dimensions-tool-stories-scale-tool-story",951:"components-block-mover-stories-index-story",970:"angle-picker-control-stories-index-story",983:"components-dimensions-tool-stories-index-story",988:"stories-index-story",1057:"visually-hidden-stories-index-story",1101:"palette-edit-stories-index-story",1638:"placeholder-stories-index-story",1656:"components-block-draggable-stories-index-story",1791:"search-control-stories-index-story",1802:"form-toggle-stories-index-story",1821:"sandbox-stories-index-story",1960:"base-control-stories-index-story",1998:"gradient-picker-stories-index-story",2057:"docs-introduction-mdx",2211:"dropdown-menu-stories-index-story",2419:"text-highlight-stories-index-story",2900:"tooltip-stories-index-story",3134:"custom-select-control-v2-stories-index-story",3218:"components-url-popover-stories-index-story",3267:"item-group-stories-index-story",3417:"icon-stories-index-story",3421:"combobox-control-stories-index-story",3517:"dropdown-menu-v2-stories-index-story",3614:"navigator-stories-index-story",3732:"date-time-stories-date-story",3754:"truncate-stories-index-story",3772:"view-stories-index-story",3788:"radio-group-stories-index-story",3813:"components-text-decoration-control-stories-index-story",3933:"tab-panel-stories-index-story",3953:"border-box-control-stories-index-story",4317:"alignment-matrix-control-stories-index-story",4325:"number-control-stories-index-story",4355:"text-control-stories-index-story",4520:"docs-components-contributing-mdx",4593:"resizable-box-stories-index-story",4595:"components-global-styles-stories-index-story",4662:"draggable-stories-index-story",4706:"select-control-stories-index-story",4770:"components-dimensions-tool-stories-width-height-tool-story",4831:"navigable-container-stories-navigable-menu-story",4836:"drop-zone-stories-index-story",4895:"unit-control-stories-index-story",4972:"components-dimensions-tool-stories-aspect-ratio-tool-story",5008:"button-stories-index-story",5100:"toggle-control-stories-index-story",5106:"menu-items-choice-stories-index-story",5151:"scrollable-stories-index-story",5175:"custom-gradient-picker-stories-index-story",5194:"components-text-transform-control-stories-index-story",5309:"font-size-picker-stories-index-story",5367:"h-stack-stories-index-story",5619:"menu-group-stories-index-story",5735:"dropdown-stories-index-story",5739:"menu-item-stories-index-story",5745:"tip-stories-index-story",5825:"components-resolution-tool-stories-index-story",5891:"animate-stories-index-story",6180:"box-control-stories-index-story",6246:"spinner-stories-index-story",6265:"components-height-control-stories-index-story",6510:"query-controls-stories-index-story",6605:"card-stories-index-story",6610:"icon-stories-index-story-tsx",6758:"form-file-upload-stories-index-story",6764:"modal-stories-index-story",6869:"flex-stories-index-story",6883:"surface-stories-index-story",6932:"form-token-field-stories-index-story",6939:"border-control-stories-index-story",7131:"spacer-stories-index-story",7137:"elevation-stories-index-story",7152:"input-control-stories-index-story",7196:"duotone-picker-stories-duotone-picker-story",7211:"tabs-stories-index-story",7306:"color-indicator-stories-index-story",7351:"radio-control-stories-index-story",7552:"dimension-control-stories-index-story",7577:"color-palette-stories-index-story",7637:"tree-select-stories-index-story",7707:"button-group-stories-index-story",7716:"textarea-control-stories-index-story",7752:"snackbar-stories-index-story",7844:"color-picker-stories-index-story",7875:"tree-grid-stories-index-story",8035:"range-control-stories-index-story",8067:"shortcut-stories-index-story",8108:"v-stack-stories-index-story",8147:"duotone-picker-stories-duotone-swatch-story",8297:"checkbox-control-stories-index-story",8518:"tools-panel-stories-index-story",8628:"snackbar-stories-list-story",8633:"date-time-stories-date-time-story",8673:"confirm-dialog-stories-index-story",8748:"components-line-height-control-stories-index-story",8751:"focal-point-picker-stories-index-story",8768:"external-link-stories-index-story",8772:"playground-index-story",8773:"custom-select-control-stories-index-story",8821:"icon-stories-index-story-js",8917:"slot-fill-stories-index-story",8930:"circular-option-picker-stories-index-story",8953:"keyboard-shortcuts-stories-index-story",8958:"toolbar-stories-index-story",8971:"z-stack-stories-index-story",9003:"disabled-stories-index-story",9170:"progress-bar-stories-index-story",9189:"notice-stories-index-story",9379:"divider-stories-index-story",9475:"text-stories-index-story",9501:"docs-components-readme-mdx",9696:"navigable-container-stories-tabbable-container-story",9812:"grid-stories-index-story",9828:"theme-stories-index-story",9901:"responsive-wrapper-stories-index-story",9943:"panel-stories-index-story"}[chunkId]||chunkId)+"."+{81:"ef5af9e5",139:"e3e9079b",204:"befcf389",238:"43fc269d",243:"9543cea4",257:"71a13471",272:"41a128c6",309:"554f2200",331:"502f95ad",404:"3c2640af",408:"ab9d1e61",453:"e6b858e3",511:"a7dcef9a",628:"41cf2316",652:"a2b28818",698:"8b99476d",723:"ec4a8c66",772:"5162a40a",869:"54d15fb9",888:"be76b6a4",951:"18293943",970:"d4e5e7cc",983:"2c057a9c",988:"f46d70fc",1057:"1b98951e",1101:"a0486a0b",1200:"a6f138ab",1223:"550d96fe",1230:"98c1abc4",1505:"32b490c3",1613:"ba854f4a",1638:"b5c0506b",1642:"e56fac8e",1656:"b787d76a",1730:"2144d391",1785:"52b73ef5",1791:"6e65f378",1802:"e13ff0d2",1821:"c7299901",1867:"c1a564b6",1960:"d1b51ff4",1998:"e9c0e210",2033:"8f380c67",2057:"1cb445a4",2211:"9514d8d5",2218:"a9e9e56c",2324:"b2a592bd",2394:"d4a87594",2419:"d377fe6c",2493:"92c97c56",2689:"00c3f629",2761:"80c5a560",2900:"4e6ca8b6",3043:"238c3940",3134:"251ccf12",3137:"d32341b9",3171:"24ccac4c",3218:"552271fc",3264:"5ff57dbc",3267:"aa0a62b2",3417:"470af28e",3421:"6f8629dc",3423:"d8535112",3469:"2bbdfa57",3517:"7233b86d",3614:"9ce90fd3",3622:"33d25c59",3665:"451085ee",3712:"d4de279c",3732:"6aed8755",3754:"19527e95",3772:"34bb30ea",3788:"a4268f77",3813:"87734522",3933:"59bd6f49",3953:"dd86f0ae",4095:"e88e97f9",4166:"f433f25b",4210:"2e927090",4285:"ae2c098c",4308:"6698b0c5",4317:"eb79f55a",4323:"977ce527",4325:"957afcdf",4355:"6454ccd6",4520:"5a528c0c",4535:"735e18da",4593:"125beede",4595:"0fe27aca",4611:"da436d35",4646:"018e5175",4662:"56dde9e3",4706:"2fcc87a4",4736:"c52aa9e5",4743:"86369f25",4754:"d6e959ee",4760:"c8d7ea5f",4770:"39beed58",4831:"b90a3525",4836:"3a8736cd",4837:"f2e7ecf3",4875:"6d6c124e",4895:"c2121c72",4915:"c573e72f",4928:"d916315c",4929:"839fd75c",4940:"fee11a70",4963:"5bf57440",4972:"c6cc315f",4991:"375f2956",5008:"63114363",5100:"f89a6aa6",5106:"c4734643",5150:"904fd9f5",5151:"08819869",5175:"0e2820e2",5183:"5bb3798e",5194:"c226ddf8",5248:"eb413c2e",5253:"07f7805c",5309:"299e67a2",5353:"00677a60",5367:"736e96b3",5416:"65f7487e",5434:"7f69cfe1",5473:"69d5689d",5609:"acd9990a",5619:"6bd66501",5649:"22175e76",5699:"9b10ac33",5723:"3b97c8a0",5735:"735c7bda",5739:"ff51d421",5745:"9a054687",5800:"e1d86463",5825:"21265bd2",5891:"c4314d0b",6004:"dc30b4d0",6081:"9fab4754",6118:"4fb16113",6180:"9f987f01",6243:"f9fd90d0",6246:"0c87846b",6265:"8d2893a7",6414:"83eae2cc",6447:"d6af0285",6476:"31e3522c",6493:"70be7d94",6503:"eb39a296",6510:"ce07cca7",6516:"0f37222c",6605:"b41334b4",6607:"e8bf1e4d",6610:"fb72fb90",6615:"20d2f4d0",6758:"24b0323a",6759:"7afb6e8f",6764:"b43c42b8",6783:"3e12ef7a",6809:"0fb5ea1b",6869:"423b550c",6883:"fe700671",6911:"95bf6ba4",6932:"737b3bea",6939:"745c6f7d",6966:"b0b9c294",6983:"e07259ba",7026:"38662d19",7131:"46720848",7137:"94717680",7143:"8e160c31",7152:"bdbff191",7196:"ad79b452",7211:"820fc902",7275:"daf47ab5",7306:"c9a99653",7324:"ca27aef4",7328:"989e45bc",7351:"badb0958",7355:"36597437",7398:"430918e4",7435:"8e4ea61a",7463:"16929906",7482:"205df1e9",7513:"7fb5f820",7552:"9f7e07fe",7577:"e9ecfa22",7637:"6d9c3e27",7707:"dfc68596",7716:"b6ef4254",7752:"cb7f2e07",7782:"c7ced795",7784:"0c8a5d09",7844:"d8c36a73",7875:"4a85962d",7886:"67e7226c",7945:"0f3ec5dd",8035:"42f9b046",8067:"0d043a28",8102:"9ab34e12",8108:"84a2fbbb",8147:"ddfef8ba",8162:"84d27afc",8193:"c2f45549",8297:"86be59f7",8303:"93ede7a2",8322:"d09a1a64",8372:"48221aeb",8518:"808d6922",8628:"01b3ff5f",8633:"f232148e",8673:"465fb005",8692:"22b81534",8693:"6347ae70",8738:"95ec0595",8748:"66b96c35",8751:"3f3ef1a6",8768:"494a85ca",8772:"ad92e3d4",8773:"39b1e15a",8777:"fc906bd6",8821:"f650714e",8895:"0ed35c70",8917:"d5569e05",8930:"93f44792",8938:"8dfcb9b8",8953:"6cbf093d",8958:"abac7ff2",8971:"737b3cc8",8975:"ed330dc8",9003:"f4fa6f11",9027:"13f66feb",9032:"b3b2f611",9044:"4304cbfe",9115:"81967b0c",9119:"3217407f",9170:"cd5384f8",9189:"c57b8a90",9213:"4d28a19d",9226:"0f94096e",9379:"29b09c1a",9433:"307677a8",9475:"b2e63906",9501:"9f789ab7",9696:"26ad7993",9744:"4ce3100c",9812:"2bec24ed",9828:"90e37de9",9831:"351c6909",9839:"afc5490f",9841:"07f344e1",9901:"519b932c",9943:"da26b0ed",9982:"4269f711",9989:"86a40855"}[chunkId]+".iframe.bundle.js"},__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=function(obj,prop){return Object.prototype.hasOwnProperty.call(obj,prop)},inProgress={},__webpack_require__.l=function(url,done,key,chunkId){if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="gutenberg:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","gutenberg:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=function(prev,event){script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((function(fn){return fn(event)})),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=function(exports){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=function(module){return module.paths=[],module.children||(module.children=[]),module},__webpack_require__.p="",function(){__webpack_require__.b=document.baseURI||self.location.href;var installedChunks={1303:0};__webpack_require__.f.j=function(chunkId,promises){var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(1303!=chunkId){var promise=new Promise((function(resolve,reject){installedChunkData=installedChunks[chunkId]=[resolve,reject]}));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(function(event){if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}else installedChunks[chunkId]=0},__webpack_require__.O.j=function(chunkId){return 0===installedChunks[chunkId]};var webpackJsonpCallback=function(parentChunkLoadingFunction,data){var moduleId,chunkId,chunkIds=data[0],moreModules=data[1],runtime=data[2],i=0;if(chunkIds.some((function(id){return 0!==installedChunks[id]}))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=self.webpackChunkgutenberg=self.webpackChunkgutenberg||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))}(),__webpack_require__.nc=void 0}();