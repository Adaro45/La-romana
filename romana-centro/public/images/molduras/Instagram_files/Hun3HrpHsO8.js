;/*FB_PKG_DELIM*/

__d("PolarisAPINominateClipsMedia",["PolarisInstapi","nullthrows"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b){var e="/api/v1/clips/recommend_label/";b={author_id:c("nullthrows")((b=b.owner)==null?void 0:b.id),clips_media_id:a,labeling_categories:[]};return d("PolarisInstapi").apiPost(e,{body:b})}function b(a,b){var c="/api/v1/clips/recommend_label/";b={author_id:b,clips_media_id:a,labeling_categories:[]};return d("PolarisInstapi").apiPost(c,{body:b})}g.nominateClipsMedia=a;g.nominateClipsFromMediaDict=b}),98);
__d("PolarisCreationEditRootQuery_instagramRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6524283611030174"}),null);
__d("PolarisCreationEditRootQuery$Parameters",["PolarisCreationEditRootQuery_instagramRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("PolarisCreationEditRootQuery_instagramRelayOperation"),metadata:{is_distillery:!0},name:"PolarisCreationEditRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("PolarisCreationEditRoot.entrypoint",["JSResourceForInteraction","PolarisCreationEditRootQuery$Parameters"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){return{queries:{polarisCreationEditRootQuery:{options:{},parameters:c("PolarisCreationEditRootQuery$Parameters"),variables:{shortcode:a.routeParams.shortcode}}}}},root:c("JSResourceForInteraction")("PolarisCreationEditRoot.react").__setRef("PolarisCreationEditRoot.entrypoint")};g["default"]=a}),98);
__d("PolarisPostFastOptionAboutThisAccount.react",["fbt","IGCoreDialog.react","PolarisAboutThisAccountUtils","PolarisPostModalContext.react","react","react-compiler-runtime"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=i||d("react");function a(a){var b=d("react-compiler-runtime").c(5);a=a.post;a=a.owner;a=a!=null&&d("PolarisAboutThisAccountUtils").getIsEligibleForATA(a);var c=d("PolarisPostModalContext.react").useSetPostModal();if(!a)return null;b[0]!==c?(a=function(){c("aboutThisAccount")},b[0]=c,b[1]=a):a=b[1];a=a;var e;b[2]===Symbol["for"]("react.memo_cache_sentinel")?(e=h._(/*BTDS*/"__JHASH__nXVhUzKwAyS__JHASH__"),b[2]=e):e=b[2];b[3]!==a?(e=j.jsx(d("IGCoreDialog.react").IGCoreDialogItem,{onClick:a,children:e}),b[3]=a,b[4]=e):e=b[4];return e}g["default"]=a}),226);
__d("PolarisPostFastOptionAllowComments_media.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"PolarisPostFastOptionAllowComments_media",selections:[{alias:null,args:null,concreteType:"XDTUserDict",kind:"LinkedField",name:"owner",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"pk",storageKey:null}],storageKey:null}],type:"XDTMediaDict",abstractKey:null};e.exports=a}),null);
__d("PolarisPostFastOptionAllowComments.next.react",["fbt","CometRelay","IGCoreDialog.react","IGDSContextMenuItem.react","PolarisConfig","PolarisMenuUtils","PolarisPostFastOptionAllowComments_media.graphql","PolarisPostModalContext.react","react","react-compiler-runtime"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j,k=j||d("react");function a(a){var c=d("react-compiler-runtime").c(6),e=a.media;a=a.menuType;a=a===void 0?d("PolarisMenuUtils").MenuType.DIALOG:a;e=d("CometRelay").useFragment(i!==void 0?i:i=b("PolarisPostFastOptionAllowComments_media.graphql"),e);e=e.owner;e=(e==null?void 0:e.pk)===d("PolarisConfig").getViewerId();var f=d("PolarisPostModalContext.react").useSetPostModal();if(!e)return null;c[0]!==f?(e=function(){f("allowComments")},c[0]=f,c[1]=e):e=c[1];e=e;var g;c[2]===Symbol["for"]("react.memo_cache_sentinel")?(g=h._(/*BTDS*/"__JHASH__pT_cDTdL8ri__JHASH__"),c[2]=g):g=c[2];g=g;c[3]!==a||c[4]!==e?(g=a===d("PolarisMenuUtils").MenuType.DIALOG?k.jsx(d("IGCoreDialog.react").IGCoreDialogItem,{onClick:e,children:g}):k.jsx(d("IGDSContextMenuItem.react").IGDSContextMenuItem,{onPress:e,showEndChevron:!1,title:g}),c[3]=a,c[4]=e,c[5]=g):g=c[5];return g}g["default"]=a}),226);
__d("PolarisPostOwnerUtils",["PolarisConfig"],(function(a,b,c,d,e,f,g){"use strict";function a(a){return((a=a.owner)==null?void 0:a.id)===d("PolarisConfig").getViewerId()}g.getPostOwnedByViewer=a}),98);
__d("PolarisPostFastOptionDelete.react",["fbt","IGCoreDialog.react","PolarisPostModalContext.react","PolarisPostOwnerUtils","PolarisPostTypeUtils","PolarisUA","QPLUserFlow","polarisLogAction","qpl","react","react-compiler-runtime","usePolarisAnalyticsContext"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=i||d("react");function a(a){var b=d("react-compiler-runtime").c(9);a=a.post;var e=d("PolarisPostOwnerUtils").getPostOwnedByViewer(a),f;b[0]!==a?(f=d("PolarisPostTypeUtils").getPostType(a),b[0]=a,b[1]=f):f=b[1];var g=f,i=c("usePolarisAnalyticsContext")(),k=d("PolarisPostModalContext.react").useSetPostModal();a=d("PolarisUA").isMobile();d("PolarisUA").isDesktop()&&(a=!0);if(!e||!a)return null;b[2]!==i||b[3]!==g||b[4]!==k?(f=function(){c("polarisLogAction")("delete_post_click",{source:i,type:g}),c("QPLUserFlow").start(c("qpl")._(379202588,"719"),{annotations:{string:{source:i,type:g}}}),k("delete")},b[2]=i,b[3]=g,b[4]=k,b[5]=f):f=b[5];e=f;b[6]===Symbol["for"]("react.memo_cache_sentinel")?(a=h._(/*BTDS*/"__JHASH__uSEtG_36DqP__JHASH__"),b[6]=a):a=b[6];b[7]!==e?(f=j.jsx(d("IGCoreDialog.react").IGCoreDialogItem,{color:"ig-error-or-destructive","data-testid":void 0,onClick:e,children:a}),b[7]=e,b[8]=f):f=b[8];return f}g["default"]=a}),226);
__d("PolarisPostFastOptionDemote.react",["IGCoreDialog.react","react","react-compiler-runtime","usePolarisAnalyticsContext","usePolarisHidePost"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){var b=d("react-compiler-runtime").c(10),e=a.onClose;a=a.post;var f=c("usePolarisAnalyticsContext")(),g=a.feedDemotionControl,h=a.feedRecsDemotionControl,j=h!=null?"explore_story":"media_or_ad",k;b[0]!==a.id||b[1]!==a.loggingInfoToken||b[2]!==j?(k={inventorySource:j,postId:a.id,rankingInfoToken:a.loggingInfoToken},b[0]=a.id,b[1]=a.loggingInfoToken,b[2]=j,b[3]=k):k=b[3];var l=d("usePolarisHidePost").usePolarisHidePost(k);if(g==null&&h==null||f!=="feedPage")return null;b[4]!==l||b[5]!==e?(j=function(){l(),e()},b[4]=l,b[5]=e,b[6]=j):j=b[6];k=j;j=(h=(g=a.feedDemotionControl)==null?void 0:g.title)!=null?h:(f=a.feedRecsDemotionControl)==null?void 0:f.title;b[7]!==k||b[8]!==j?(g=i.jsx(d("IGCoreDialog.react").IGCoreDialogItem,{onClick:k,children:j}),b[7]=k,b[8]=j,b[9]=g):g=b[9];return g}g["default"]=a}),98);
__d("PolarisPostFastOptionEdit.react",["fbt","IGCoreDialog.react","InstagramODS","PolarisCreationEditRoot.entrypoint","PolarisCreationModalPlaceholder.react","PolarisHasFeedCreation","PolarisPostOwnerUtils","PolarisUA","react","react-compiler-runtime","useIGDSEntryPointDialog"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=i||d("react");function k(a){var b=d("react-compiler-runtime").c(11),e=a.onClose;a=a.post;var f=d("PolarisPostOwnerUtils").getPostOwnedByViewer(a);a=(a=a.code)!=null?a:"";var g;b[0]!==a?(g={shortcode:a},b[0]=a,b[1]=g):g=b[1];b[2]===Symbol["for"]("react.memo_cache_sentinel")?(a={},b[2]=a):a=b[2];b[3]!==g?(a={routeParams:g,routeProps:a},b[3]=g,b[4]=a):a=b[4];g=c("useIGDSEntryPointDialog")(c("PolarisCreationEditRoot.entrypoint"),a,"button",l);var i=g[0];a=d("PolarisUA").isDesktop()&&d("PolarisHasFeedCreation").hasFeedCreation();if(!f||!a)return null;b[5]!==e||b[6]!==i?(g=function(){c("InstagramODS").incr("web.profile.edit_post_click"),i({}),e()},b[5]=e,b[6]=i,b[7]=g):g=b[7];f=g;b[8]===Symbol["for"]("react.memo_cache_sentinel")?(a=h._(/*BTDS*/"__JHASH__NW8FGD6YRSe__JHASH__"),b[8]=a):a=b[8];b[9]!==f?(g=j.jsx(d("IGCoreDialog.react").IGCoreDialogItem,{onClick:f,children:a}),b[9]=f,b[10]=g):g=b[10];return g}function l(a){return j.jsx(c("PolarisCreationModalPlaceholder.react"),{onClose:a})}l.displayName=l.name+" [from "+f.id+"]";function a(a){var b=d("react-compiler-runtime").c(3),c=a.onClose;a=a.post;var e;b[0]!==c||b[1]!==a?(e=j.jsx(k,{onClose:c,post:a}),b[0]=c,b[1]=a,b[2]=e):e=b[2];return e}g["default"]=a}),226);
__d("PolarisPostFastOptionEmbed.react",["fbt","IGCoreDialog.react","PolarisPostModalContext.react","PolarisPostTypeUtils","polarisGetPostFromGraphMediaInterface","polarisLogAction","react","react-compiler-runtime","usePolarisAnalyticsContext"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=i||d("react");function a(a){var b=d("react-compiler-runtime").c(11),e=a.post,f=e.owner;a=f!=null&&d("polarisGetPostFromGraphMediaInterface").getUserIsEmbeddable(f);var g=d("PolarisPostModalContext.react").useSetPostModal(),i=c("usePolarisAnalyticsContext")(),k;b[0]!==e?(k=d("PolarisPostTypeUtils").getPostType(e),b[0]=e,b[1]=k):k=b[1];var l=k;if(!a)return null;b[2]!==i||b[3]!==(f==null?void 0:f.id)||b[4]!==e.id||b[5]!==l||b[6]!==g?(k=function(){c("polarisLogAction")("embedCodeClick",{mediaId:e.id,ownerId:f==null?void 0:f.id,source:i,type:l}),g("embed")},b[2]=i,b[3]=f==null?void 0:f.id,b[4]=e.id,b[5]=l,b[6]=g,b[7]=k):k=b[7];a=k;b[8]===Symbol["for"]("react.memo_cache_sentinel")?(k=h._(/*BTDS*/"__JHASH__bRE3yEUh4U8__JHASH__"),b[8]=k):k=b[8];b[9]!==a?(k=j.jsx(d("IGCoreDialog.react").IGCoreDialogItem,{onClick:a,children:k}),b[9]=a,b[10]=k):k=b[10];return k}g["default"]=a}),226);
__d("PolarisPostFastOptionFavorite.react",["IGCoreDialog.react","PolarisFavoritesStrings","PolarisReactRedux.react","PolarisRelationshipActionFavoriteUser","PolarisRelationshipActionUnfavoriteUser","polarisRelationshipSelectors.react","react","react-compiler-runtime","usePolarisAnalyticsContext"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){var b=d("react-compiler-runtime").c(11),e=a.onClose;a=a.post;var f=d("PolarisReactRedux.react").useDispatch(),g=a.owner,h=c("usePolarisAnalyticsContext")();a=d("polarisRelationshipSelectors.react").useRelationship(((a=a.owner)==null?void 0:a.id)||"");var j;b[0]!==a?(j=a!=null&&d("polarisRelationshipSelectors.react").favoritedByViewer(a),b[0]=a,b[1]=j):j=b[1];var k=j;j=a!=null&&d("polarisRelationshipSelectors.react").followedByViewer(a);b[2]!==h||b[3]!==f||b[4]!==k||b[5]!==e||b[6]!==g?(a=function(){if(!g)return;k?f(d("PolarisRelationshipActionUnfavoriteUser").unfavoriteUser(g.id,h)):f(d("PolarisRelationshipActionFavoriteUser").favoriteUser(g.id,h));e()},b[2]=h,b[3]=f,b[4]=k,b[5]=e,b[6]=g,b[7]=a):a=b[7];a=a;if(!j||!(h==="feedPage"||h==="postPage"))return null;j=k?d("PolarisFavoritesStrings").UNFAVORITE_MENU_TEXT:d("PolarisFavoritesStrings").FAVORITE_MENU_TEXT;var l;b[8]!==a||b[9]!==j?(l=i.jsx(d("IGCoreDialog.react").IGCoreDialogItem,{onClick:a,children:j}),b[8]=a,b[9]=j,b[10]=l):l=b[10];return l}g["default"]=a}),98);
__d("PolarisPostFastOptionGoToPost.react",["fbt","IGCoreDialog.react","IGDSText.react","PolarisFastLink.react","PolarisPostShareUtils","react","react-compiler-runtime","usePolarisIsOnPostPage"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=i||d("react");function a(a){var b,e=d("react-compiler-runtime").c(6);a=a.post;var f=c("usePolarisIsOnPostPage")();b=!!((b=a.code)==null?void 0:b.length)&&!f;e[0]!==a?(f=d("PolarisPostShareUtils").getShareURL(a),e[0]=a,e[1]=f):f=e[1];a=f;if(!b)return null;e[2]===Symbol["for"]("react.memo_cache_sentinel")?(f={navigation_source:"polaris_go_to_post"},e[2]=f):f=e[2];e[3]===Symbol["for"]("react.memo_cache_sentinel")?(b=j.jsx(c("IGDSText.react"),{color:"primaryText",children:h._(/*BTDS*/"__JHASH__vGPcgAUZhRu__JHASH__")}),e[3]=b):b=e[3];e[4]!==a?(f=j.jsx(d("IGCoreDialog.react").IGCoreDialogItem,{"data-testid":void 0,children:j.jsx(c("PolarisFastLink.react"),{display:"block",href:a,traceParams:f,children:b})}),e[4]=a,e[5]=f):f=e[5];return f}g["default"]=a}),226);
__d("PolarisPostFastOptionHideAd.react",["InstagramODS","PolarisHideAdDialogItem.react","PolarisPostModalContext.react","PolarisViewpointActionUtils","polarisAdsSelectors.react","react","react-compiler-runtime","usePolarisAnalyticsContext"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){var b=d("react-compiler-runtime").c(9);a=a.post;var e=d("PolarisPostModalContext.react").useSetPostModal(),f=c("usePolarisAnalyticsContext")(),g=d("polarisAdsSelectors.react").useFeedAdInfo(a.id,k),h=d("polarisAdsSelectors.react").useFeedAdInfo(a.id,j),l;b[0]!==a?(l=d("PolarisViewpointActionUtils").getMPKForFeedMedia(a),b[0]=a,b[1]=l):l=b[1];a=l;if(f!=="feedPage")return null;b[2]!==e?(l=function(){c("InstagramODS").incr("web.ads.feed.hide_option.click"),e("hideAd")},b[2]=e,b[3]=l):l=b[3];f=l;b[4]!==g||b[5]!==h||b[6]!==a||b[7]!==f?(l=i.jsx(c("PolarisHideAdDialogItem.react"),{adId:g,adTrackingToken:h,mpk:a,onClick:f}),b[4]=g,b[5]=h,b[6]=a,b[7]=f,b[8]=l):l=b[8];return l}function j(a){return a==null?void 0:a.tracking_token}function k(a){return a==null?void 0:a.ad_id}g["default"]=a}),98);
__d("PolarisPostFastOptionNominate.react",["fbt","IGCoreDialog.react","PolarisAPINominateClipsMedia","gkx","polarisGetPostFromGraphMediaInterface","promiseDone","react","react-compiler-runtime","usePolarisShowToast"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=i||d("react");function a(a){var b=d("react-compiler-runtime").c(6),e=a.post,f=c("usePolarisShowToast")();b[0]!==e||b[1]!==f?(a=function(){c("promiseDone")(d("PolarisAPINominateClipsMedia").nominateClipsMedia(e.id,e),function(a){f({text:"Thank you! We'll consider your nomination."})},function(a){f({text:"Request can't be completed. Try again later."})})},b[0]=e,b[1]=f,b[2]=a):a=b[2];a=a;if(c("gkx")("4256")&&d("polarisGetPostFromGraphMediaInterface").isClipsPost(e)){var g;b[3]===Symbol["for"]("react.memo_cache_sentinel")?(g=h._(/*BTDS*/"__JHASH__y3XMRXzNsXl__JHASH__"),b[3]=g):g=b[3];b[4]!==a?(g=j.jsx(d("IGCoreDialog.react").IGCoreDialogItem,{onClick:a,children:g}),b[4]=a,b[5]=g):g=b[5];return g}return null}g["default"]=a}),226);
__d("PolarisPostFastOptionRemoveFromAdActivity.react",["CometRelayEnvironmentProvider","PolarisPostModalContext.react","PolarisRemoveFromAdActivityDialogItem.react","nullthrows","polarisAdsSelectors.react","react","react-compiler-runtime","usePolarisIsOnAdsActivityPage"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){var b=d("react-compiler-runtime").c(6),e=a.onClose;a=a.post;var f=c("usePolarisIsOnAdsActivityPage")(),g=d("PolarisPostModalContext.react").useSetPostModal();a=d("polarisAdsSelectors.react").useFeedAdInfo(a.id,j);var h;b[0]!==a?(h=c("nullthrows")(a),b[0]=a,b[1]=h):h=b[1];a=h;if(!f)return null;b[2]!==a||b[3]!==e||b[4]!==g?(h=i.jsx(c("CometRelayEnvironmentProvider"),{children:i.jsx(c("PolarisRemoveFromAdActivityDialogItem.react"),{adInfo:a,onClose:e,setModal:g})}),b[2]=a,b[3]=e,b[4]=g,b[5]=h):h=b[5];return h}function j(a){return a}g["default"]=a}),98);
__d("PolarisPostFastOptionReport.react",["fbt","IGCoreDialog.react","PolarisExternalRoutes","PolarisIsLoggedIn","PolarisLinkBuilder","PolarisNavigationUtils","PolarisPostModalContext.react","PolarisPostOwnerUtils","react","react-compiler-runtime"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=i||d("react"),k=h._(/*BTDS*/"__JHASH__EZpI8Gf5x6M__JHASH__");function a(a){var b=d("react-compiler-runtime").c(5),c=a.post;a=d("PolarisPostOwnerUtils").getPostOwnedByViewer(c);var e=d("PolarisPostModalContext.react").useSetPostModal();if(a)return null;b[0]!==c||b[1]!==e?(a=function(){if(!d("PolarisIsLoggedIn").isLoggedIn()){var a=c.code;d("PolarisNavigationUtils").openExternalURL(d("PolarisLinkBuilder").buildLoggedOutReportLink(d("PolarisExternalRoutes").COMMUNITY_VIOLATIONS_GUIDELINES_CONTACT_FORM_PATH,a))}else e("report")},b[0]=c,b[1]=e,b[2]=a):a=b[2];a=a;var f;b[3]!==a?(f=j.jsx(d("IGCoreDialog.react").IGCoreDialogItem,{color:"ig-error-or-destructive","data-testid":void 0,onClick:a,children:k}),b[3]=a,b[4]=f):f=b[4];return f}g["default"]=a}),226);
__d("PolarisPostFastOptionReportAd.react",["InstagramODS","PolarisIsLoggedIn","PolarisPostModalContext.react","PolarisPostOwnerUtils","PolarisReportAdDialogItem.react","PolarisViewpointActionUtils","polarisAdsSelectors.react","react","react-compiler-runtime","usePolarisAnalyticsContext"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){var b=d("react-compiler-runtime").c(10);a=a.post;var e=d("PolarisPostOwnerUtils").getPostOwnedByViewer(a),f=d("PolarisPostModalContext.react").useSetPostModal(),g=c("usePolarisAnalyticsContext")(),h=d("polarisAdsSelectors.react").useFeedAdInfo(a.id,k),l=d("polarisAdsSelectors.react").useFeedAdInfo(a.id,j),m;b[0]!==a?(m=d("PolarisViewpointActionUtils").getMPKForFeedMedia(a),b[0]=a,b[1]=m):m=b[1];m=m;if(g!=="feedPage"&&g!=="adsActivityFeed"&&g!=="adsActivity")return null;if(e)return null;b[2]!==f?(g=function(){d("PolarisIsLoggedIn").isLoggedIn()&&(c("InstagramODS").incr("web.ads.feed.report_option.click"),f("reportAd"))},b[2]=f,b[3]=g):g=b[3];e=g;b[4]!==h||b[5]!==l||b[6]!==m||b[7]!==e||b[8]!==a?(g=i.jsx(c("PolarisReportAdDialogItem.react"),{adId:h,adTrackingToken:l,mpk:m,onClick:e,post:a}),b[4]=h,b[5]=l,b[6]=m,b[7]=e,b[8]=a,b[9]=g):g=b[9];return g}function j(a){return a==null?void 0:a.tracking_token}function k(a){return a==null?void 0:a.ad_id}g["default"]=a}),98);
__d("PolarisPostFastOptionShare.react",["fbt","IGCoreDialog.react","IGDSText.react","PolarisPostModalContext.react","PolarisPostShareUtils","react","react-compiler-runtime"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=i||d("react");function a(a){var b=d("react-compiler-runtime").c(5);a=a.post;var e=d("PolarisPostModalContext.react").useSetPostModal();if(a.owner==null)return null;a=d("PolarisPostShareUtils").getIsShareable(a,a.owner)&&d("PolarisPostShareUtils").getIsMediaQuarantinedForShare(a);if(!a)return null;b[0]!==e?(a=function(){e("share")},b[0]=e,b[1]=a):a=b[1];a=a;var f;b[2]===Symbol["for"]("react.memo_cache_sentinel")?(f=j.jsx(c("IGDSText.react"),{children:h._(/*BTDS*/"__JHASH__g7FO3r-qnxv__JHASH__")}),b[2]=f):f=b[2];b[3]!==a?(f=j.jsx(d("IGCoreDialog.react").IGCoreDialogItem,{"data-testid":void 0,onClick:a,children:f}),b[3]=a,b[4]=f):f=b[4];return f}g["default"]=a}),226);
__d("PolarisPostFastOptionToggleCommenting.react",["fbt","IGCoreDialog.react","InstagramODS","PolarisGenericStrings","PolarisHasFeedCreation","PolarisInstapi","PolarisPostActionLoadPost","PolarisPostOwnerUtils","PolarisReactRedux.react","PolarisToastActions","PolarisUA","polarisGetPostFromGraphMediaInterface","react","react-compiler-runtime"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=i||d("react");function a(a){var b=d("react-compiler-runtime").c(22),c=a.onClose,e=a.post;a=d("PolarisPostOwnerUtils").getPostOwnedByViewer(e);var f;b[0]!==e?(f=d("polarisGetPostFromGraphMediaInterface").isPostCommentingOff(e),b[0]=e,b[1]=f):f=b[1];var g=f;f=d("PolarisUA").isDesktop()&&d("PolarisHasFeedCreation").hasFeedCreation();var i;b[2]!==e?(i=d("polarisGetPostFromGraphMediaInterface").getPostShortCode(e),b[2]=e,b[3]=i):i=b[3];var l=i,m=d("PolarisReactRedux.react").useDispatch();if(!a||!f)return null;b[4]!==m||b[5]!==e.id?(i=function(a){if(a===!0){m({postId:e.id,type:"ENABLE_POST_COMMENTS"});return d("PolarisInstapi").apiPost("/api/v1/media/{compound_media_id}/enable_comments/",{path:{compound_media_id:e.id}})}m({postId:e.id,type:"DISABLE_POST_COMMENTS"});return d("PolarisInstapi").apiPost("/api/v1/media/{compound_media_id}/disable_comments/",{path:{compound_media_id:e.id}})},b[4]=m,b[5]=e.id,b[6]=i):i=b[6];var n=i,o=k;b[7]!==g||b[8]!==m||b[9]!==c||b[10]!==e.id||b[11]!==l||b[12]!==n?(a=function(){var a;a=!1;o(g);n(g).then(function(){a||m(d("PolarisPostActionLoadPost").loadPost(l!=null?l:"",e.id))})["catch"](function(){m(d("PolarisToastActions").showToast({text:d("PolarisGenericStrings").GENERIC_ERROR_MESSAGE})),m(d("PolarisPostActionLoadPost").loadPost(l!=null?l:"",e.id))});c();return function(){a=!0}},b[7]=g,b[8]=m,b[9]=c,b[10]=e.id,b[11]=l,b[12]=n,b[13]=a):a=b[13];f=a;b[14]!==g?(i=g&&h._(/*BTDS*/"__JHASH__HfLnSwUXfQ7__JHASH__"),b[14]=g,b[15]=i):i=b[15];b[16]!==g?(a=!g&&h._(/*BTDS*/"__JHASH__AzNrpHYeV8O__JHASH__"),b[16]=g,b[17]=a):a=b[17];var p;b[18]!==f||b[19]!==i||b[20]!==a?(p=j.jsxs(d("IGCoreDialog.react").IGCoreDialogItem,{onClick:f,children:[i,a]}),b[18]=f,b[19]=i,b[20]=a,b[21]=p):p=b[21];return p}function k(a){c("InstagramODS").incr("web.profile.edit_post_click"),c("InstagramODS").incr("web.edit.toggle_commenting"),a===!0?c("InstagramODS").incr("web.edit.toggle_commenting_on"):c("InstagramODS").incr("web.edit.toggle_commenting_off")}g["default"]=a}),226);
__d("PolarisPostFastOptionToggleViewLikeCount.react",["fbt","IGCoreDialog.react","InstagramODS","PolarisGenericStrings","PolarisHasFeedCreation","PolarisInstapi","PolarisPostActionLoadPost","PolarisPostOwnerUtils","PolarisReactRedux.react","PolarisToastActions","PolarisUA","polarisGetPostFromGraphMediaInterface","react","react-compiler-runtime"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=i||d("react");function a(a){var b=d("react-compiler-runtime").c(23),c=a.onClose,e=a.post;a=d("PolarisPostOwnerUtils").getPostOwnedByViewer(e);var f;b[0]!==e?(f=d("polarisGetPostFromGraphMediaInterface").isPostLikeViewCountVisible(e),b[0]=e,b[1]=f):f=b[1];var g=f;f=d("PolarisUA").isDesktop()&&d("PolarisHasFeedCreation").hasFeedCreation();var i=d("PolarisReactRedux.react").useDispatch(),l;b[2]!==e?(l=d("polarisGetPostFromGraphMediaInterface").getPostShortCode(e),b[2]=e,b[3]=l):l=b[3];var m=l;if(!a||!f)return null;b[4]!==i||b[5]!==g||b[6]!==e.id?(l=function(a){a===!0?i({postId:e.id,type:"HIDE_POST_LIKE_COUNT"}):i({postId:e.id,type:"UNHIDE_POST_LIKE_COUNT"});return d("PolarisInstapi").apiPost("/api/v1/media/update_like_and_view_counts_visibility/",{body:{like_and_view_counts_disabled:g,media_id:e.id}})},b[4]=i,b[5]=g,b[6]=e.id,b[7]=l):l=b[7];var n=l,o=k;b[8]!==i||b[9]!==g||b[10]!==c||b[11]!==e.id||b[12]!==m||b[13]!==n?(a=function(){var a;a=!1;o(g);n(g).then(function(){a||i(d("PolarisPostActionLoadPost").loadPost(m!=null?m:"",e.id))})["catch"](function(){i(d("PolarisToastActions").showToast({text:d("PolarisGenericStrings").GENERIC_ERROR_MESSAGE})),i(d("PolarisPostActionLoadPost").loadPost(m!=null?m:"",e.id))});c();return function(){a=!0}},b[8]=i,b[9]=g,b[10]=c,b[11]=e.id,b[12]=m,b[13]=n,b[14]=a):a=b[14];f=a;b[15]!==g?(l=g&&h._(/*BTDS*/"__JHASH__VBO1Ym96SW___JHASH__"),b[15]=g,b[16]=l):l=b[16];b[17]!==g?(a=!g&&h._(/*BTDS*/"__JHASH__CgyBdcwcdM0__JHASH__"),b[17]=g,b[18]=a):a=b[18];var p;b[19]!==f||b[20]!==l||b[21]!==a?(p=j.jsxs(d("IGCoreDialog.react").IGCoreDialogItem,{onClick:f,children:[l,a]}),b[19]=f,b[20]=l,b[21]=a,b[22]=p):p=b[22];return p}function k(a){c("InstagramODS").incr("web.profile.edit_post_click"),c("InstagramODS").incr("web.edit.toggle_like_count_visibility"),a===!0?c("InstagramODS").incr("web.edit.toggle_like_count_visibility_hidden"):c("InstagramODS").incr("web.edit.toggle_like_count_visibility_unhidden")}g["default"]=a}),226);
__d("PolarisPostFastOptionUnfollow.react",["fbt","IGCoreDialog.react","PolarisConnectionsLogger","PolarisPostModalContext.react","PolarisReactRedux.react","QPLUserFlow","polarisRelationshipSelectors.react","qpl","react","react-compiler-runtime","usePolarisAnalyticsContext"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=i||d("react"),k=h._(/*BTDS*/"__JHASH__srXyzAiqXZ2__JHASH__");function l(a,b){b=b.owner;if(!b)return!1;a=d("polarisRelationshipSelectors.react").getRelationship(a.relationships,b.id);return d("polarisRelationshipSelectors.react").followedByViewer(a)}function a(a){var b,e=d("react-compiler-runtime").c(8),f=a.post;e[0]!==f?(a=function(a){return l(a,f)},e[0]=f,e[1]=a):a=e[1];a=d("PolarisReactRedux.react").useSelector(a);var g=d("PolarisPostModalContext.react").useSetPostModal(),h=(b=f.owner)==null?void 0:b.id,i=c("usePolarisAnalyticsContext")();if(!a)return null;e[2]!==i||e[3]!==h||e[4]!==g?(b=function(){d("PolarisConnectionsLogger").logConnectionAction({containerModule:i,eventName:"unfollow_button_tapped",targetId:h}),c("QPLUserFlow").start(c("qpl")._(379193744,"299"),{annotations:{string:{source:i}}}),g("unfollow")},e[2]=i,e[3]=h,e[4]=g,e[5]=b):b=e[5];a=b;e[6]!==a?(b=j.jsx(d("IGCoreDialog.react").IGCoreDialogItem,{color:"ig-error-or-destructive","data-testid":void 0,onClick:a,children:k}),e[6]=a,e[7]=b):b=e[7];return b}g["default"]=a}),226);
__d("PolarisPostFastOptionWAIST.react",["InstagramODS","PolarisPostModalContext.react","PolarisWAISTDialogItem.react","react","react-compiler-runtime"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(){var a=d("react-compiler-runtime").c(4),b=d("PolarisPostModalContext.react").useSetPostModal(),e;a[0]!==b?(e=function(){c("InstagramODS").incr("web.ads.feed.waist_option.click"),b("whyAmISeeingThisAd")},a[0]=b,a[1]=e):e=a[1];e=e;var f;a[2]!==e?(f=i.jsx(c("PolarisWAISTDialogItem.react"),{onClick:e}),a[2]=e,a[3]=f):f=a[3];return f}g["default"]=a}),98);
__d("PolarisPostFastOptionsModal.react",["IGCoreDialog.react","PolarisAboutAdsDialogItem.react","PolarisAdsGatingHelpers","PolarisGenericStrings","PolarisHasFeedCreation","PolarisPostFastOptionAboutThisAccount.react","PolarisPostFastOptionCopyLink.react","PolarisPostFastOptionDelete.react","PolarisPostFastOptionDemote.react","PolarisPostFastOptionEdit.react","PolarisPostFastOptionEmbed.react","PolarisPostFastOptionFavorite.react","PolarisPostFastOptionGoToPost.react","PolarisPostFastOptionHideAd.react","PolarisPostFastOptionNominate.react","PolarisPostFastOptionRemoveFromAdActivity.react","PolarisPostFastOptionReport.react","PolarisPostFastOptionReportAd.react","PolarisPostFastOptionShare.react","PolarisPostFastOptionToggleCommenting.react","PolarisPostFastOptionToggleViewLikeCount.react","PolarisPostFastOptionUnfollow.react","PolarisPostFastOptionWAIST.react","PolarisPostModalContext.react","PolarisReportUnderLawDialogItem.react","cr:1468","react","react-compiler-runtime"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){var e=d("react-compiler-runtime").c(65),f=a.onClose;a=a.post;var g=d("PolarisPostModalContext.react").useSetPostModal();if(a.isSponsored===!0){var h,j,k;e[0]!==f||e[1]!==a?(h=i.jsx(c("PolarisPostFastOptionHideAd.react"),{onClose:f,post:a}),j=i.jsx(c("PolarisPostFastOptionReportAd.react"),{onClose:f,post:a}),k=i.jsx(c("PolarisPostFastOptionRemoveFromAdActivity.react"),{onClose:f,post:a}),e[0]=f,e[1]=a,e[2]=h,e[3]=j,e[4]=k):(h=e[2],j=e[3],k=e[4]);var l,m;e[5]===Symbol["for"]("react.memo_cache_sentinel")?(l=d("PolarisAdsGatingHelpers").hasAdWAIST()&&i.jsx(c("PolarisPostFastOptionWAIST.react"),{}),m=i.jsx(c("PolarisAboutAdsDialogItem.react"),{}),e[5]=l,e[6]=m):(l=e[5],m=e[6]);var n;e[7]!==g?(n=b("cr:1468")!=null&&i.jsx(b("cr:1468"),{onClick:function(){g("viewAdDebugTool")}}),e[7]=g,e[8]=n):n=e[8];var o;e[9]!==f?(o=i.jsx(d("IGCoreDialog.react").IGCoreDialogItem,{onClick:f,children:d("PolarisGenericStrings").CANCEL_TEXT}),e[9]=f,e[10]=o):o=e[10];e[11]!==f||e[12]!==h||e[13]!==j||e[14]!==k||e[15]!==n||e[16]!==o?(l=i.jsxs(d("IGCoreDialog.react").IGCoreDialog,{onModalClose:f,children:[h,j,k,l,m,n,o]}),e[11]=f,e[12]=h,e[13]=j,e[14]=k,e[15]=n,e[16]=o,e[17]=l):l=e[17];return l}e[18]!==f||e[19]!==a?(m=i.jsx(c("PolarisPostFastOptionDelete.react"),{onClose:f,post:a}),h=d("PolarisHasFeedCreation").hasFeedCreation()&&i.jsx(c("PolarisPostFastOptionEdit.react"),{onClose:f,post:a}),e[18]=f,e[19]=a,e[20]=m,e[21]=h):(m=e[20],h=e[21]);e[22]!==f||e[23]!==a?(j=d("PolarisHasFeedCreation").hasFeedCreation()&&i.jsx(c("PolarisPostFastOptionToggleViewLikeCount.react"),{onClose:f,post:a}),e[22]=f,e[23]=a,e[24]=j):j=e[24];e[25]!==f||e[26]!==a?(k=d("PolarisHasFeedCreation").hasFeedCreation()&&i.jsx(c("PolarisPostFastOptionToggleCommenting.react"),{onClose:f,post:a}),e[25]=f,e[26]=a,e[27]=k):k=e[27];e[28]!==f||e[29]!==a?(n=i.jsx(c("PolarisPostFastOptionReport.react"),{onClose:f,post:a}),e[28]=f,e[29]=a,e[30]=n):n=e[30];l=(o=a.code)!=null?o:a.id;o=(o=a.owner)==null?void 0:o.username;var p;e[31]!==l||e[32]!==o?(p=i.jsx(d("PolarisReportUnderLawDialogItem.react").ReportUnderLawDialogItem,{contentId:l,reportingType:d("PolarisReportUnderLawDialogItem.react").InstagramLegalReportingType.POST,username:o}),e[31]=l,e[32]=o,e[33]=p):p=e[33];var q,r,s,t,u,v,w;e[34]!==f||e[35]!==a?(l=i.jsx(c("PolarisPostFastOptionUnfollow.react"),{onClose:f,post:a}),o=i.jsx(c("PolarisPostFastOptionFavorite.react"),{onClose:f,post:a}),q=i.jsx(c("PolarisPostFastOptionDemote.react"),{onClose:f,post:a}),r=i.jsx(c("PolarisPostFastOptionNominate.react"),{onClose:f,post:a}),s=i.jsx(c("PolarisPostFastOptionGoToPost.react"),{onClose:f,post:a}),t=i.jsx(c("PolarisPostFastOptionShare.react"),{onClose:f,post:a}),u=i.jsx(d("PolarisPostFastOptionCopyLink.react").PostFastOptionCopyLink,{onClose:f,post:a}),v=i.jsx(c("PolarisPostFastOptionEmbed.react"),{onClose:f,post:a}),w=i.jsx(c("PolarisPostFastOptionAboutThisAccount.react"),{onClose:f,post:a}),e[34]=f,e[35]=a,e[36]=o,e[37]=q,e[38]=r,e[39]=s,e[40]=t,e[41]=u,e[42]=v,e[43]=w,e[44]=l):(o=e[36],q=e[37],r=e[38],s=e[39],t=e[40],u=e[41],v=e[42],w=e[43],l=e[44]);e[45]!==f?(a=i.jsx(d("IGCoreDialog.react").IGCoreDialogItem,{onClick:f,children:d("PolarisGenericStrings").CANCEL_TEXT}),e[45]=f,e[46]=a):a=e[46];var x;e[47]!==f||e[48]!==m||e[49]!==o||e[50]!==q||e[51]!==r||e[52]!==s||e[53]!==t||e[54]!==u||e[55]!==v||e[56]!==w||e[57]!==a||e[58]!==h||e[59]!==j||e[60]!==k||e[61]!==n||e[62]!==p||e[63]!==l?(x=i.jsxs(d("IGCoreDialog.react").IGCoreDialog,{"data-testid":void 0,onModalClose:f,children:[m,h,j,k,n,p,l,o,q,r,s,t,u,v,w,a]}),e[47]=f,e[48]=m,e[49]=o,e[50]=q,e[51]=r,e[52]=s,e[53]=t,e[54]=u,e[55]=v,e[56]=w,e[57]=a,e[58]=h,e[59]=j,e[60]=k,e[61]=n,e[62]=p,e[63]=l,e[64]=x):x=e[64];return x}g["default"]=a}),98);