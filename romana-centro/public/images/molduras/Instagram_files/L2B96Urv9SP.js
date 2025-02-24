;/*FB_PKG_DELIM*/

__d("AsyncTypedRequest",["AsyncRequest"],(function(a,b,c,d,e,f,g){"use strict";a=function(a){babelHelpers.inheritsLoose(b,a);function b(b){b=a.call(this,b)||this;b.setReplaceTransportMarkers();return b}var c=b.prototype;c.promisePayload=function(b){return a.prototype.promisePayload.call(this,b)};c.setPayloadHandler=function(b){a.prototype.setPayloadHandler.call(this,b);return this};return b}(c("AsyncRequest"));g["default"]=a}),98);
__d("BTManifestName",["$InternalEnum"],(function(a,b,c,d,e,f){a=b("$InternalEnum")({MAIN:"main",LONGTAIL:"longtail"});c=a;f["default"]=c}),66);
__d("BaseAccessibleElement_DEPRECATED.react",["react","react-compiler-runtime"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){var b=d("react-compiler-runtime").c(4),c=a.children;a=a.id;var e;b[0]===Symbol["for"]("react.memo_cache_sentinel")?(e={className:"xzpqnlu x1hyvwdk xjm9jq1 x6ikm8r x10wlt62 x10l6tqk x1i1rx1s"},b[0]=e):e=b[0];b[1]!==c||b[2]!==a?(e=i.jsx("span",babelHelpers["extends"]({},e,{"data-html2canvas-ignore":"true",id:a,children:c})),b[1]=c,b[2]=a,b[3]=e):e=b[3];return e}g["default"]=a}),98);
__d("BtLongtailHashFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("5779");b=d("FalcoLoggerInternal").create("bt_longtail_hash",a);e=b;g["default"]=e}),98);
__d("CometBTManifestLoader",["BootloaderEvents","BtLongtailHashFalcoEvent","ClientConsistencyEventEmitter","FBLogger","ODS","Promise","SiteData","XHRRequest","asyncToGeneratorRuntime","err","promiseDone"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=new Set();function k(a,b,c,d){return l.apply(this,arguments)}function l(){l=b("asyncToGeneratorRuntime").asyncToGenerator(function*(a,d,e,f){var g=(yield new(i||(i=b("Promise")))(function(b,g){new(c("XHRRequest"))(a+"/btmanifest/"+e+"/"+d+"/"+f).setMethod("GET").setResponseHandler(function(a){return b(a.toString())}).setErrorHandler(function(a){return g(a)}).send()}));if(typeof g!=="string")throw c("FBLogger")("binary_transparency","bt_invalid_manifest_response").mustfixThrow("Invalid response from BT manifest endpoint");return g});return l.apply(this,arguments)}function m(a,b){(h||(h=d("ODS"))).bumpEntityKey(454,"obc.www.all","bt.comet_manifest_loader."+Number(d("SiteData").compose_bootloads)+"."+d("SiteData").pkg_cohort+"."+a+"."+b)}function n(a,b,d){var e;if(d instanceof Error)e=d;else if(typeof d==="object"){var f=JSON.stringify(d);e=c("err")("(XHRRequest): %s",f.slice(0,300)+(f.length>300?"...":""))}else e=c("err")(d);c("FBLogger")("binary_transparency","bt_download_manifest_error").catching(e).mustfix('Unable to download and inject BT manifest "%s" for version: %s',b,a)}function o(a,b){return p.apply(this,arguments)}function p(){p=b("asyncToGeneratorRuntime").asyncToGenerator(function*(a,b){if(!d("SiteData").manifest_origin||d("SiteData").manifest_version_prefix==null||d("SiteData").manifest_base_uri==null)return;var c=a+"_"+b;a=""+d("SiteData").manifest_version_prefix+a;if(j.has(c))return;m(b,"start");j.add(c);try{var e,f=document.createElement("script");f.innerText=(yield k(d("SiteData").manifest_base_uri,d("SiteData").manifest_origin,a,b));f.type="application/json";f.setAttribute("name","binary-transparency-manifest");f.dataset.manifestRev=a;f.dataset.manifestType=b;(e=document.head)==null?void 0:e.appendChild(f);m(b,"complete")}catch(d){m(b,"failed"),n(a,b,d),j["delete"](c)}});return p.apply(this,arguments)}function a(){c("promiseDone")(o(d("SiteData").client_revision,"main")),d("BootloaderEvents").onResourceInLongTailBTManifest(function(a){c("promiseDone")(o(d("SiteData").client_revision,"longtail")),a.hashes.forEach(function(b){c("BtLongtailHashFalcoEvent").log(function(){return{client_revision:String(d("SiteData").client_revision),compose_bootloads:d("SiteData").compose_bootloads,ef_page:d("SiteData").ef_page||"",hash:b,pkg_cohort:d("SiteData").pkg_cohort,reference:a.source,rls_id:d("SiteData").hsi}})})}),c("ClientConsistencyEventEmitter").addListener("newRevision",function(a){c("promiseDone")(o(a,"main")),c("promiseDone")(o(a,"longtail"))})}g.init=a}),98);
__d("CometTopnavItemClickFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1743396");b=d("FalcoLoggerInternal").create("comet_topnav_item_click",a);e=b;g["default"]=e}),98);
__d("CometTopnavItemImpressionFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1743397");b=d("FalcoLoggerInternal").create("comet_topnav_item_impression",a);e=b;g["default"]=e}),98);
__d("NotificationPermissionRequestComet.react",["fbt","BaseAccessibleElement_DEPRECATED.react","BaseModal.react","CometHideLayerOnEscape.react","CometVisualCompletion","react","react-compiler-runtime"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=i||(i=d("react")),k=i.useEffect;function a(a){var b=d("react-compiler-runtime").c(11),e=a.onClick,f;b[0]!==e?(a=function(){window.addEventListener("mousedown",e);c("CometVisualCompletion").addAnnotationInt("pushRequestOverlay",1);return function(){window.removeEventListener("mousedown",e)}},f=[e],b[0]=e,b[1]=a,b[2]=f):(a=b[1],f=b[2]);k(a,f);b[3]===Symbol["for"]("react.memo_cache_sentinel")?(a=h._(/*BTDS*/"__JHASH__oE04FVLR0CK__JHASH__"),b[3]=a):a=b[3];b[4]===Symbol["for"]("react.memo_cache_sentinel")?(f=h._(/*BTDS*/"__JHASH__gW3M_fEDpFx__JHASH__"),b[4]=f):f=b[4];var g;b[5]===Symbol["for"]("react.memo_cache_sentinel")?(g=h._(/*BTDS*/"__JHASH__uufiRayKSVE__JHASH__"),b[5]=g):g=b[5];b[6]!==e?(a=j.jsx(c("BaseAccessibleElement_DEPRECATED.react"),{children:j.jsxs("div",{"aria-label":a,"aria-modal":"true",role:"alertdialog",children:[f,j.jsx("button",{onClick:e,children:g})]})}),b[6]=e,b[7]=a):a=b[7];b[8]!==e||b[9]!==a?(f=j.jsx(c("BaseModal.react"),{stackingBehavior:"above-everything",children:j.jsx(c("CometHideLayerOnEscape.react"),{onHide:e,children:a})}),b[8]=e,b[9]=a,b[10]=f):f=b[10];return f}g["default"]=a}),226);