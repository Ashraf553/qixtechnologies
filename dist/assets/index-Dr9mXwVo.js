var Qv=Object.defineProperty;var Jv=(t,e,n)=>e in t?Qv(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var _e=(t,e,n)=>Jv(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Vp(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var jp={exports:{}},xl={},Wp={exports:{}},je={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Aa=Symbol.for("react.element"),e_=Symbol.for("react.portal"),t_=Symbol.for("react.fragment"),n_=Symbol.for("react.strict_mode"),i_=Symbol.for("react.profiler"),r_=Symbol.for("react.provider"),s_=Symbol.for("react.context"),a_=Symbol.for("react.forward_ref"),o_=Symbol.for("react.suspense"),l_=Symbol.for("react.memo"),c_=Symbol.for("react.lazy"),af=Symbol.iterator;function u_(t){return t===null||typeof t!="object"?null:(t=af&&t[af]||t["@@iterator"],typeof t=="function"?t:null)}var Xp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Yp=Object.assign,$p={};function Ts(t,e,n){this.props=t,this.context=e,this.refs=$p,this.updater=n||Xp}Ts.prototype.isReactComponent={};Ts.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ts.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function qp(){}qp.prototype=Ts.prototype;function Zu(t,e,n){this.props=t,this.context=e,this.refs=$p,this.updater=n||Xp}var Qu=Zu.prototype=new qp;Qu.constructor=Zu;Yp(Qu,Ts.prototype);Qu.isPureReactComponent=!0;var of=Array.isArray,Kp=Object.prototype.hasOwnProperty,Ju={current:null},Zp={key:!0,ref:!0,__self:!0,__source:!0};function Qp(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)Kp.call(e,i)&&!Zp.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Aa,type:t,key:s,ref:a,props:r,_owner:Ju.current}}function d_(t,e){return{$$typeof:Aa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ed(t){return typeof t=="object"&&t!==null&&t.$$typeof===Aa}function f_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var lf=/\/+/g;function Wl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?f_(""+t.key):e.toString(36)}function Co(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Aa:case e_:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+Wl(a,0):i,of(r)?(n="",t!=null&&(n=t.replace(lf,"$&/")+"/"),Co(r,e,n,"",function(c){return c})):r!=null&&(ed(r)&&(r=d_(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(lf,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",of(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+Wl(s,o);a+=Co(s,e,n,l,r)}else if(l=u_(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+Wl(s,o++),a+=Co(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Oa(t,e,n){if(t==null)return t;var i=[],r=0;return Co(t,i,"","",function(s){return e.call(n,s,r++)}),i}function h_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Kt={current:null},Ro={transition:null},p_={ReactCurrentDispatcher:Kt,ReactCurrentBatchConfig:Ro,ReactCurrentOwner:Ju};function Jp(){throw Error("act(...) is not supported in production builds of React.")}je.Children={map:Oa,forEach:function(t,e,n){Oa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Oa(t,function(){e++}),e},toArray:function(t){return Oa(t,function(e){return e})||[]},only:function(t){if(!ed(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};je.Component=Ts;je.Fragment=t_;je.Profiler=i_;je.PureComponent=Zu;je.StrictMode=n_;je.Suspense=o_;je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=p_;je.act=Jp;je.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Yp({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Ju.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)Kp.call(e,l)&&!Zp.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:Aa,type:t.type,key:r,ref:s,props:i,_owner:a}};je.createContext=function(t){return t={$$typeof:s_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:r_,_context:t},t.Consumer=t};je.createElement=Qp;je.createFactory=function(t){var e=Qp.bind(null,t);return e.type=t,e};je.createRef=function(){return{current:null}};je.forwardRef=function(t){return{$$typeof:a_,render:t}};je.isValidElement=ed;je.lazy=function(t){return{$$typeof:c_,_payload:{_status:-1,_result:t},_init:h_}};je.memo=function(t,e){return{$$typeof:l_,type:t,compare:e===void 0?null:e}};je.startTransition=function(t){var e=Ro.transition;Ro.transition={};try{t()}finally{Ro.transition=e}};je.unstable_act=Jp;je.useCallback=function(t,e){return Kt.current.useCallback(t,e)};je.useContext=function(t){return Kt.current.useContext(t)};je.useDebugValue=function(){};je.useDeferredValue=function(t){return Kt.current.useDeferredValue(t)};je.useEffect=function(t,e){return Kt.current.useEffect(t,e)};je.useId=function(){return Kt.current.useId()};je.useImperativeHandle=function(t,e,n){return Kt.current.useImperativeHandle(t,e,n)};je.useInsertionEffect=function(t,e){return Kt.current.useInsertionEffect(t,e)};je.useLayoutEffect=function(t,e){return Kt.current.useLayoutEffect(t,e)};je.useMemo=function(t,e){return Kt.current.useMemo(t,e)};je.useReducer=function(t,e,n){return Kt.current.useReducer(t,e,n)};je.useRef=function(t){return Kt.current.useRef(t)};je.useState=function(t){return Kt.current.useState(t)};je.useSyncExternalStore=function(t,e,n){return Kt.current.useSyncExternalStore(t,e,n)};je.useTransition=function(){return Kt.current.useTransition()};je.version="18.3.1";Wp.exports=je;var ge=Wp.exports;const em=Vp(ge);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m_=ge,g_=Symbol.for("react.element"),v_=Symbol.for("react.fragment"),__=Object.prototype.hasOwnProperty,x_=m_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y_={key:!0,ref:!0,__self:!0,__source:!0};function tm(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)__.call(e,i)&&!y_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:g_,type:t,key:s,ref:a,props:r,_owner:x_.current}}xl.Fragment=v_;xl.jsx=tm;xl.jsxs=tm;jp.exports=xl;var p=jp.exports,$c={},nm={exports:{}},gn={},im={exports:{}},rm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,D){var k=N.length;N.push(D);e:for(;0<k;){var O=k-1>>>1,Z=N[O];if(0<r(Z,D))N[O]=D,N[k]=Z,k=O;else break e}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var D=N[0],k=N.pop();if(k!==D){N[0]=k;e:for(var O=0,Z=N.length,B=Z>>>1;O<B;){var Q=2*(O+1)-1,se=N[Q],J=Q+1,le=N[J];if(0>r(se,k))J<Z&&0>r(le,se)?(N[O]=le,N[J]=k,O=J):(N[O]=se,N[Q]=k,O=Q);else if(J<Z&&0>r(le,k))N[O]=le,N[J]=k,O=J;else break e}}return D}function r(N,D){var k=N.sortIndex-D.sortIndex;return k!==0?k:N.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],f=1,h=null,d=3,g=!1,_=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(N){for(var D=n(c);D!==null;){if(D.callback===null)i(c);else if(D.startTime<=N)i(c),D.sortIndex=D.expirationTime,e(l,D);else break;D=n(c)}}function S(N){if(y=!1,v(N),!_)if(n(l)!==null)_=!0,Y(b);else{var D=n(c);D!==null&&K(S,D.startTime-N)}}function b(N,D){_=!1,y&&(y=!1,u(F),F=-1),g=!0;var k=d;try{for(v(D),h=n(l);h!==null&&(!(h.expirationTime>D)||N&&!U());){var O=h.callback;if(typeof O=="function"){h.callback=null,d=h.priorityLevel;var Z=O(h.expirationTime<=D);D=t.unstable_now(),typeof Z=="function"?h.callback=Z:h===n(l)&&i(l),v(D)}else i(l);h=n(l)}if(h!==null)var B=!0;else{var Q=n(c);Q!==null&&K(S,Q.startTime-D),B=!1}return B}finally{h=null,d=k,g=!1}}var R=!1,A=null,F=-1,M=5,w=-1;function U(){return!(t.unstable_now()-w<M)}function $(){if(A!==null){var N=t.unstable_now();w=N;var D=!0;try{D=A(!0,N)}finally{D?q():(R=!1,A=null)}}else R=!1}var q;if(typeof x=="function")q=function(){x($)};else if(typeof MessageChannel<"u"){var L=new MessageChannel,z=L.port2;L.port1.onmessage=$,q=function(){z.postMessage(null)}}else q=function(){m($,0)};function Y(N){A=N,R||(R=!0,q())}function K(N,D){F=m(function(){N(t.unstable_now())},D)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){_||g||(_=!0,Y(b))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(d){case 1:case 2:case 3:var D=3;break;default:D=d}var k=d;d=D;try{return N()}finally{d=k}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,D){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var k=d;d=N;try{return D()}finally{d=k}},t.unstable_scheduleCallback=function(N,D,k){var O=t.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?O+k:O):k=O,N){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=k+Z,N={id:f++,callback:D,priorityLevel:N,startTime:k,expirationTime:Z,sortIndex:-1},k>O?(N.sortIndex=k,e(c,N),n(l)===null&&N===n(c)&&(y?(u(F),F=-1):y=!0,K(S,k-O))):(N.sortIndex=Z,e(l,N),_||g||(_=!0,Y(b))),N},t.unstable_shouldYield=U,t.unstable_wrapCallback=function(N){var D=d;return function(){var k=d;d=D;try{return N.apply(this,arguments)}finally{d=k}}}})(rm);im.exports=rm;var S_=im.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M_=ge,mn=S_;function ne(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var sm=new Set,aa={};function Tr(t,e){hs(t,e),hs(t+"Capture",e)}function hs(t,e){for(aa[t]=e,t=0;t<e.length;t++)sm.add(e[t])}var di=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qc=Object.prototype.hasOwnProperty,E_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,cf={},uf={};function w_(t){return qc.call(uf,t)?!0:qc.call(cf,t)?!1:E_.test(t)?uf[t]=!0:(cf[t]=!0,!1)}function T_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function A_(t,e,n,i){if(e===null||typeof e>"u"||T_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Zt(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Ut={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ut[t]=new Zt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ut[e]=new Zt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ut[t]=new Zt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ut[t]=new Zt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ut[t]=new Zt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ut[t]=new Zt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ut[t]=new Zt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ut[t]=new Zt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ut[t]=new Zt(t,5,!1,t.toLowerCase(),null,!1,!1)});var td=/[\-:]([a-z])/g;function nd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(td,nd);Ut[e]=new Zt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(td,nd);Ut[e]=new Zt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(td,nd);Ut[e]=new Zt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ut[t]=new Zt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ut.xlinkHref=new Zt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ut[t]=new Zt(t,1,!1,t.toLowerCase(),null,!0,!0)});function id(t,e,n,i){var r=Ut.hasOwnProperty(e)?Ut[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(A_(e,n,r,i)&&(n=null),i||r===null?w_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var gi=M_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ka=Symbol.for("react.element"),Wr=Symbol.for("react.portal"),Xr=Symbol.for("react.fragment"),rd=Symbol.for("react.strict_mode"),Kc=Symbol.for("react.profiler"),am=Symbol.for("react.provider"),om=Symbol.for("react.context"),sd=Symbol.for("react.forward_ref"),Zc=Symbol.for("react.suspense"),Qc=Symbol.for("react.suspense_list"),ad=Symbol.for("react.memo"),Ti=Symbol.for("react.lazy"),lm=Symbol.for("react.offscreen"),df=Symbol.iterator;function Ps(t){return t===null||typeof t!="object"?null:(t=df&&t[df]||t["@@iterator"],typeof t=="function"?t:null)}var dt=Object.assign,Xl;function js(t){if(Xl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Xl=e&&e[1]||""}return`
`+Xl+t}var Yl=!1;function $l(t,e){if(!t||Yl)return"";Yl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{Yl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?js(t):""}function C_(t){switch(t.tag){case 5:return js(t.type);case 16:return js("Lazy");case 13:return js("Suspense");case 19:return js("SuspenseList");case 0:case 2:case 15:return t=$l(t.type,!1),t;case 11:return t=$l(t.type.render,!1),t;case 1:return t=$l(t.type,!0),t;default:return""}}function Jc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Xr:return"Fragment";case Wr:return"Portal";case Kc:return"Profiler";case rd:return"StrictMode";case Zc:return"Suspense";case Qc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case om:return(t.displayName||"Context")+".Consumer";case am:return(t._context.displayName||"Context")+".Provider";case sd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ad:return e=t.displayName||null,e!==null?e:Jc(t.type)||"Memo";case Ti:e=t._payload,t=t._init;try{return Jc(t(e))}catch{}}return null}function R_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Jc(e);case 8:return e===rd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Wi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function cm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function b_(t){var e=cm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function za(t){t._valueTracker||(t._valueTracker=b_(t))}function um(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=cm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Bo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function eu(t,e){var n=e.checked;return dt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function ff(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Wi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function dm(t,e){e=e.checked,e!=null&&id(t,"checked",e,!1)}function tu(t,e){dm(t,e);var n=Wi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?nu(t,e.type,n):e.hasOwnProperty("defaultValue")&&nu(t,e.type,Wi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function hf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function nu(t,e,n){(e!=="number"||Bo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ws=Array.isArray;function ss(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Wi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function iu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ne(91));return dt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function pf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ne(92));if(Ws(n)){if(1<n.length)throw Error(ne(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Wi(n)}}function fm(t,e){var n=Wi(e.value),i=Wi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function mf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function hm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ru(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?hm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ba,pm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ba=Ba||document.createElement("div"),Ba.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ba.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function oa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var $s={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},L_=["Webkit","ms","Moz","O"];Object.keys($s).forEach(function(t){L_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),$s[e]=$s[t]})});function mm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||$s.hasOwnProperty(t)&&$s[t]?(""+e).trim():e+"px"}function gm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=mm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var N_=dt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function su(t,e){if(e){if(N_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ne(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ne(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ne(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ne(62))}}function au(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ou=null;function od(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var lu=null,as=null,os=null;function gf(t){if(t=ba(t)){if(typeof lu!="function")throw Error(ne(280));var e=t.stateNode;e&&(e=wl(e),lu(t.stateNode,t.type,e))}}function vm(t){as?os?os.push(t):os=[t]:as=t}function _m(){if(as){var t=as,e=os;if(os=as=null,gf(t),e)for(t=0;t<e.length;t++)gf(e[t])}}function xm(t,e){return t(e)}function ym(){}var ql=!1;function Sm(t,e,n){if(ql)return t(e,n);ql=!0;try{return xm(t,e,n)}finally{ql=!1,(as!==null||os!==null)&&(ym(),_m())}}function la(t,e){var n=t.stateNode;if(n===null)return null;var i=wl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ne(231,e,typeof n));return n}var cu=!1;if(di)try{var Ds={};Object.defineProperty(Ds,"passive",{get:function(){cu=!0}}),window.addEventListener("test",Ds,Ds),window.removeEventListener("test",Ds,Ds)}catch{cu=!1}function P_(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var qs=!1,Ho=null,Go=!1,uu=null,D_={onError:function(t){qs=!0,Ho=t}};function U_(t,e,n,i,r,s,a,o,l){qs=!1,Ho=null,P_.apply(D_,arguments)}function I_(t,e,n,i,r,s,a,o,l){if(U_.apply(this,arguments),qs){if(qs){var c=Ho;qs=!1,Ho=null}else throw Error(ne(198));Go||(Go=!0,uu=c)}}function Ar(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Mm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function vf(t){if(Ar(t)!==t)throw Error(ne(188))}function F_(t){var e=t.alternate;if(!e){if(e=Ar(t),e===null)throw Error(ne(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return vf(r),t;if(s===i)return vf(r),e;s=s.sibling}throw Error(ne(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(ne(189))}}if(n.alternate!==i)throw Error(ne(190))}if(n.tag!==3)throw Error(ne(188));return n.stateNode.current===n?t:e}function Em(t){return t=F_(t),t!==null?wm(t):null}function wm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=wm(t);if(e!==null)return e;t=t.sibling}return null}var Tm=mn.unstable_scheduleCallback,_f=mn.unstable_cancelCallback,O_=mn.unstable_shouldYield,k_=mn.unstable_requestPaint,gt=mn.unstable_now,z_=mn.unstable_getCurrentPriorityLevel,ld=mn.unstable_ImmediatePriority,Am=mn.unstable_UserBlockingPriority,Vo=mn.unstable_NormalPriority,B_=mn.unstable_LowPriority,Cm=mn.unstable_IdlePriority,yl=null,Yn=null;function H_(t){if(Yn&&typeof Yn.onCommitFiberRoot=="function")try{Yn.onCommitFiberRoot(yl,t,void 0,(t.current.flags&128)===128)}catch{}}var kn=Math.clz32?Math.clz32:j_,G_=Math.log,V_=Math.LN2;function j_(t){return t>>>=0,t===0?32:31-(G_(t)/V_|0)|0}var Ha=64,Ga=4194304;function Xs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function jo(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=Xs(o):(s&=a,s!==0&&(i=Xs(s)))}else a=n&~r,a!==0?i=Xs(a):s!==0&&(i=Xs(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-kn(e),r=1<<n,i|=t[n],e&=~r;return i}function W_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function X_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-kn(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=W_(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function du(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Rm(){var t=Ha;return Ha<<=1,!(Ha&4194240)&&(Ha=64),t}function Kl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ca(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-kn(e),t[e]=n}function Y_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-kn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function cd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-kn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var qe=0;function bm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Lm,ud,Nm,Pm,Dm,fu=!1,Va=[],Ui=null,Ii=null,Fi=null,ca=new Map,ua=new Map,Ci=[],$_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xf(t,e){switch(t){case"focusin":case"focusout":Ui=null;break;case"dragenter":case"dragleave":Ii=null;break;case"mouseover":case"mouseout":Fi=null;break;case"pointerover":case"pointerout":ca.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ua.delete(e.pointerId)}}function Us(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ba(e),e!==null&&ud(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function q_(t,e,n,i,r){switch(e){case"focusin":return Ui=Us(Ui,t,e,n,i,r),!0;case"dragenter":return Ii=Us(Ii,t,e,n,i,r),!0;case"mouseover":return Fi=Us(Fi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ca.set(s,Us(ca.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ua.set(s,Us(ua.get(s)||null,t,e,n,i,r)),!0}return!1}function Um(t){var e=cr(t.target);if(e!==null){var n=Ar(e);if(n!==null){if(e=n.tag,e===13){if(e=Mm(n),e!==null){t.blockedOn=e,Dm(t.priority,function(){Nm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function bo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=hu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);ou=i,n.target.dispatchEvent(i),ou=null}else return e=ba(n),e!==null&&ud(e),t.blockedOn=n,!1;e.shift()}return!0}function yf(t,e,n){bo(t)&&n.delete(e)}function K_(){fu=!1,Ui!==null&&bo(Ui)&&(Ui=null),Ii!==null&&bo(Ii)&&(Ii=null),Fi!==null&&bo(Fi)&&(Fi=null),ca.forEach(yf),ua.forEach(yf)}function Is(t,e){t.blockedOn===e&&(t.blockedOn=null,fu||(fu=!0,mn.unstable_scheduleCallback(mn.unstable_NormalPriority,K_)))}function da(t){function e(r){return Is(r,t)}if(0<Va.length){Is(Va[0],t);for(var n=1;n<Va.length;n++){var i=Va[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ui!==null&&Is(Ui,t),Ii!==null&&Is(Ii,t),Fi!==null&&Is(Fi,t),ca.forEach(e),ua.forEach(e),n=0;n<Ci.length;n++)i=Ci[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ci.length&&(n=Ci[0],n.blockedOn===null);)Um(n),n.blockedOn===null&&Ci.shift()}var ls=gi.ReactCurrentBatchConfig,Wo=!0;function Z_(t,e,n,i){var r=qe,s=ls.transition;ls.transition=null;try{qe=1,dd(t,e,n,i)}finally{qe=r,ls.transition=s}}function Q_(t,e,n,i){var r=qe,s=ls.transition;ls.transition=null;try{qe=4,dd(t,e,n,i)}finally{qe=r,ls.transition=s}}function dd(t,e,n,i){if(Wo){var r=hu(t,e,n,i);if(r===null)ac(t,e,i,Xo,n),xf(t,i);else if(q_(r,t,e,n,i))i.stopPropagation();else if(xf(t,i),e&4&&-1<$_.indexOf(t)){for(;r!==null;){var s=ba(r);if(s!==null&&Lm(s),s=hu(t,e,n,i),s===null&&ac(t,e,i,Xo,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else ac(t,e,i,null,n)}}var Xo=null;function hu(t,e,n,i){if(Xo=null,t=od(i),t=cr(t),t!==null)if(e=Ar(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Mm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Xo=t,null}function Im(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(z_()){case ld:return 1;case Am:return 4;case Vo:case B_:return 16;case Cm:return 536870912;default:return 16}default:return 16}}var bi=null,fd=null,Lo=null;function Fm(){if(Lo)return Lo;var t,e=fd,n=e.length,i,r="value"in bi?bi.value:bi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Lo=r.slice(t,1<i?1-i:void 0)}function No(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ja(){return!0}function Sf(){return!1}function vn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ja:Sf,this.isPropagationStopped=Sf,this}return dt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ja)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ja)},persist:function(){},isPersistent:ja}),e}var As={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hd=vn(As),Ra=dt({},As,{view:0,detail:0}),J_=vn(Ra),Zl,Ql,Fs,Sl=dt({},Ra,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Fs&&(Fs&&t.type==="mousemove"?(Zl=t.screenX-Fs.screenX,Ql=t.screenY-Fs.screenY):Ql=Zl=0,Fs=t),Zl)},movementY:function(t){return"movementY"in t?t.movementY:Ql}}),Mf=vn(Sl),e0=dt({},Sl,{dataTransfer:0}),t0=vn(e0),n0=dt({},Ra,{relatedTarget:0}),Jl=vn(n0),i0=dt({},As,{animationName:0,elapsedTime:0,pseudoElement:0}),r0=vn(i0),s0=dt({},As,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),a0=vn(s0),o0=dt({},As,{data:0}),Ef=vn(o0),l0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},c0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},u0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function d0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=u0[t])?!!e[t]:!1}function pd(){return d0}var f0=dt({},Ra,{key:function(t){if(t.key){var e=l0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=No(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?c0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pd,charCode:function(t){return t.type==="keypress"?No(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?No(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),h0=vn(f0),p0=dt({},Sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wf=vn(p0),m0=dt({},Ra,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pd}),g0=vn(m0),v0=dt({},As,{propertyName:0,elapsedTime:0,pseudoElement:0}),_0=vn(v0),x0=dt({},Sl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),y0=vn(x0),S0=[9,13,27,32],md=di&&"CompositionEvent"in window,Ks=null;di&&"documentMode"in document&&(Ks=document.documentMode);var M0=di&&"TextEvent"in window&&!Ks,Om=di&&(!md||Ks&&8<Ks&&11>=Ks),Tf=" ",Af=!1;function km(t,e){switch(t){case"keyup":return S0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Yr=!1;function E0(t,e){switch(t){case"compositionend":return zm(e);case"keypress":return e.which!==32?null:(Af=!0,Tf);case"textInput":return t=e.data,t===Tf&&Af?null:t;default:return null}}function w0(t,e){if(Yr)return t==="compositionend"||!md&&km(t,e)?(t=Fm(),Lo=fd=bi=null,Yr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Om&&e.locale!=="ko"?null:e.data;default:return null}}var T0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!T0[t.type]:e==="textarea"}function Bm(t,e,n,i){vm(i),e=Yo(e,"onChange"),0<e.length&&(n=new hd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Zs=null,fa=null;function A0(t){Zm(t,0)}function Ml(t){var e=Kr(t);if(um(e))return t}function C0(t,e){if(t==="change")return e}var Hm=!1;if(di){var ec;if(di){var tc="oninput"in document;if(!tc){var Rf=document.createElement("div");Rf.setAttribute("oninput","return;"),tc=typeof Rf.oninput=="function"}ec=tc}else ec=!1;Hm=ec&&(!document.documentMode||9<document.documentMode)}function bf(){Zs&&(Zs.detachEvent("onpropertychange",Gm),fa=Zs=null)}function Gm(t){if(t.propertyName==="value"&&Ml(fa)){var e=[];Bm(e,fa,t,od(t)),Sm(A0,e)}}function R0(t,e,n){t==="focusin"?(bf(),Zs=e,fa=n,Zs.attachEvent("onpropertychange",Gm)):t==="focusout"&&bf()}function b0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ml(fa)}function L0(t,e){if(t==="click")return Ml(e)}function N0(t,e){if(t==="input"||t==="change")return Ml(e)}function P0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Hn=typeof Object.is=="function"?Object.is:P0;function ha(t,e){if(Hn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!qc.call(e,r)||!Hn(t[r],e[r]))return!1}return!0}function Lf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Nf(t,e){var n=Lf(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Lf(n)}}function Vm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Vm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function jm(){for(var t=window,e=Bo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Bo(t.document)}return e}function gd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function D0(t){var e=jm(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Vm(n.ownerDocument.documentElement,n)){if(i!==null&&gd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Nf(n,s);var a=Nf(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var U0=di&&"documentMode"in document&&11>=document.documentMode,$r=null,pu=null,Qs=null,mu=!1;function Pf(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;mu||$r==null||$r!==Bo(i)||(i=$r,"selectionStart"in i&&gd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Qs&&ha(Qs,i)||(Qs=i,i=Yo(pu,"onSelect"),0<i.length&&(e=new hd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=$r)))}function Wa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var qr={animationend:Wa("Animation","AnimationEnd"),animationiteration:Wa("Animation","AnimationIteration"),animationstart:Wa("Animation","AnimationStart"),transitionend:Wa("Transition","TransitionEnd")},nc={},Wm={};di&&(Wm=document.createElement("div").style,"AnimationEvent"in window||(delete qr.animationend.animation,delete qr.animationiteration.animation,delete qr.animationstart.animation),"TransitionEvent"in window||delete qr.transitionend.transition);function El(t){if(nc[t])return nc[t];if(!qr[t])return t;var e=qr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Wm)return nc[t]=e[n];return t}var Xm=El("animationend"),Ym=El("animationiteration"),$m=El("animationstart"),qm=El("transitionend"),Km=new Map,Df="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $i(t,e){Km.set(t,e),Tr(e,[t])}for(var ic=0;ic<Df.length;ic++){var rc=Df[ic],I0=rc.toLowerCase(),F0=rc[0].toUpperCase()+rc.slice(1);$i(I0,"on"+F0)}$i(Xm,"onAnimationEnd");$i(Ym,"onAnimationIteration");$i($m,"onAnimationStart");$i("dblclick","onDoubleClick");$i("focusin","onFocus");$i("focusout","onBlur");$i(qm,"onTransitionEnd");hs("onMouseEnter",["mouseout","mouseover"]);hs("onMouseLeave",["mouseout","mouseover"]);hs("onPointerEnter",["pointerout","pointerover"]);hs("onPointerLeave",["pointerout","pointerover"]);Tr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Tr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Tr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Tr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Tr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Tr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ys="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),O0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ys));function Uf(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,I_(i,e,void 0,t),t.currentTarget=null}function Zm(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;Uf(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;Uf(r,o,c),s=l}}}if(Go)throw t=uu,Go=!1,uu=null,t}function rt(t,e){var n=e[yu];n===void 0&&(n=e[yu]=new Set);var i=t+"__bubble";n.has(i)||(Qm(e,t,2,!1),n.add(i))}function sc(t,e,n){var i=0;e&&(i|=4),Qm(n,t,i,e)}var Xa="_reactListening"+Math.random().toString(36).slice(2);function pa(t){if(!t[Xa]){t[Xa]=!0,sm.forEach(function(n){n!=="selectionchange"&&(O0.has(n)||sc(n,!1,t),sc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Xa]||(e[Xa]=!0,sc("selectionchange",!1,e))}}function Qm(t,e,n,i){switch(Im(e)){case 1:var r=Z_;break;case 4:r=Q_;break;default:r=dd}n=r.bind(null,e,n,t),r=void 0,!cu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function ac(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=cr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}Sm(function(){var c=s,f=od(n),h=[];e:{var d=Km.get(t);if(d!==void 0){var g=hd,_=t;switch(t){case"keypress":if(No(n)===0)break e;case"keydown":case"keyup":g=h0;break;case"focusin":_="focus",g=Jl;break;case"focusout":_="blur",g=Jl;break;case"beforeblur":case"afterblur":g=Jl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Mf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=t0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=g0;break;case Xm:case Ym:case $m:g=r0;break;case qm:g=_0;break;case"scroll":g=J_;break;case"wheel":g=y0;break;case"copy":case"cut":case"paste":g=a0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=wf}var y=(e&4)!==0,m=!y&&t==="scroll",u=y?d!==null?d+"Capture":null:d;y=[];for(var x=c,v;x!==null;){v=x;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,u!==null&&(S=la(x,u),S!=null&&y.push(ma(x,S,v)))),m)break;x=x.return}0<y.length&&(d=new g(d,_,null,n,f),h.push({event:d,listeners:y}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",d&&n!==ou&&(_=n.relatedTarget||n.fromElement)&&(cr(_)||_[fi]))break e;if((g||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,g?(_=n.relatedTarget||n.toElement,g=c,_=_?cr(_):null,_!==null&&(m=Ar(_),_!==m||_.tag!==5&&_.tag!==6)&&(_=null)):(g=null,_=c),g!==_)){if(y=Mf,S="onMouseLeave",u="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(y=wf,S="onPointerLeave",u="onPointerEnter",x="pointer"),m=g==null?d:Kr(g),v=_==null?d:Kr(_),d=new y(S,x+"leave",g,n,f),d.target=m,d.relatedTarget=v,S=null,cr(f)===c&&(y=new y(u,x+"enter",_,n,f),y.target=v,y.relatedTarget=m,S=y),m=S,g&&_)t:{for(y=g,u=_,x=0,v=y;v;v=Cr(v))x++;for(v=0,S=u;S;S=Cr(S))v++;for(;0<x-v;)y=Cr(y),x--;for(;0<v-x;)u=Cr(u),v--;for(;x--;){if(y===u||u!==null&&y===u.alternate)break t;y=Cr(y),u=Cr(u)}y=null}else y=null;g!==null&&If(h,d,g,y,!1),_!==null&&m!==null&&If(h,m,_,y,!0)}}e:{if(d=c?Kr(c):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var b=C0;else if(Cf(d))if(Hm)b=N0;else{b=b0;var R=R0}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(b=L0);if(b&&(b=b(t,c))){Bm(h,b,n,f);break e}R&&R(t,d,c),t==="focusout"&&(R=d._wrapperState)&&R.controlled&&d.type==="number"&&nu(d,"number",d.value)}switch(R=c?Kr(c):window,t){case"focusin":(Cf(R)||R.contentEditable==="true")&&($r=R,pu=c,Qs=null);break;case"focusout":Qs=pu=$r=null;break;case"mousedown":mu=!0;break;case"contextmenu":case"mouseup":case"dragend":mu=!1,Pf(h,n,f);break;case"selectionchange":if(U0)break;case"keydown":case"keyup":Pf(h,n,f)}var A;if(md)e:{switch(t){case"compositionstart":var F="onCompositionStart";break e;case"compositionend":F="onCompositionEnd";break e;case"compositionupdate":F="onCompositionUpdate";break e}F=void 0}else Yr?km(t,n)&&(F="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(F="onCompositionStart");F&&(Om&&n.locale!=="ko"&&(Yr||F!=="onCompositionStart"?F==="onCompositionEnd"&&Yr&&(A=Fm()):(bi=f,fd="value"in bi?bi.value:bi.textContent,Yr=!0)),R=Yo(c,F),0<R.length&&(F=new Ef(F,t,null,n,f),h.push({event:F,listeners:R}),A?F.data=A:(A=zm(n),A!==null&&(F.data=A)))),(A=M0?E0(t,n):w0(t,n))&&(c=Yo(c,"onBeforeInput"),0<c.length&&(f=new Ef("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:c}),f.data=A))}Zm(h,e)})}function ma(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Yo(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=la(t,n),s!=null&&i.unshift(ma(t,s,r)),s=la(t,e),s!=null&&i.push(ma(t,s,r))),t=t.return}return i}function Cr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function If(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=la(n,s),l!=null&&a.unshift(ma(n,l,o))):r||(l=la(n,s),l!=null&&a.push(ma(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var k0=/\r\n?/g,z0=/\u0000|\uFFFD/g;function Ff(t){return(typeof t=="string"?t:""+t).replace(k0,`
`).replace(z0,"")}function Ya(t,e,n){if(e=Ff(e),Ff(t)!==e&&n)throw Error(ne(425))}function $o(){}var gu=null,vu=null;function _u(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var xu=typeof setTimeout=="function"?setTimeout:void 0,B0=typeof clearTimeout=="function"?clearTimeout:void 0,Of=typeof Promise=="function"?Promise:void 0,H0=typeof queueMicrotask=="function"?queueMicrotask:typeof Of<"u"?function(t){return Of.resolve(null).then(t).catch(G0)}:xu;function G0(t){setTimeout(function(){throw t})}function oc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),da(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);da(e)}function Oi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function kf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Cs=Math.random().toString(36).slice(2),Xn="__reactFiber$"+Cs,ga="__reactProps$"+Cs,fi="__reactContainer$"+Cs,yu="__reactEvents$"+Cs,V0="__reactListeners$"+Cs,j0="__reactHandles$"+Cs;function cr(t){var e=t[Xn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[fi]||n[Xn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=kf(t);t!==null;){if(n=t[Xn])return n;t=kf(t)}return e}t=n,n=t.parentNode}return null}function ba(t){return t=t[Xn]||t[fi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Kr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ne(33))}function wl(t){return t[ga]||null}var Su=[],Zr=-1;function qi(t){return{current:t}}function at(t){0>Zr||(t.current=Su[Zr],Su[Zr]=null,Zr--)}function nt(t,e){Zr++,Su[Zr]=t.current,t.current=e}var Xi={},Ht=qi(Xi),en=qi(!1),_r=Xi;function ps(t,e){var n=t.type.contextTypes;if(!n)return Xi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function tn(t){return t=t.childContextTypes,t!=null}function qo(){at(en),at(Ht)}function zf(t,e,n){if(Ht.current!==Xi)throw Error(ne(168));nt(Ht,e),nt(en,n)}function Jm(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ne(108,R_(t)||"Unknown",r));return dt({},n,i)}function Ko(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Xi,_r=Ht.current,nt(Ht,t),nt(en,en.current),!0}function Bf(t,e,n){var i=t.stateNode;if(!i)throw Error(ne(169));n?(t=Jm(t,e,_r),i.__reactInternalMemoizedMergedChildContext=t,at(en),at(Ht),nt(Ht,t)):at(en),nt(en,n)}var ri=null,Tl=!1,lc=!1;function eg(t){ri===null?ri=[t]:ri.push(t)}function W0(t){Tl=!0,eg(t)}function Ki(){if(!lc&&ri!==null){lc=!0;var t=0,e=qe;try{var n=ri;for(qe=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ri=null,Tl=!1}catch(r){throw ri!==null&&(ri=ri.slice(t+1)),Tm(ld,Ki),r}finally{qe=e,lc=!1}}return null}var Qr=[],Jr=0,Zo=null,Qo=0,yn=[],Sn=0,xr=null,ai=1,oi="";function ir(t,e){Qr[Jr++]=Qo,Qr[Jr++]=Zo,Zo=t,Qo=e}function tg(t,e,n){yn[Sn++]=ai,yn[Sn++]=oi,yn[Sn++]=xr,xr=t;var i=ai;t=oi;var r=32-kn(i)-1;i&=~(1<<r),n+=1;var s=32-kn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,ai=1<<32-kn(e)+r|n<<r|i,oi=s+t}else ai=1<<s|n<<r|i,oi=t}function vd(t){t.return!==null&&(ir(t,1),tg(t,1,0))}function _d(t){for(;t===Zo;)Zo=Qr[--Jr],Qr[Jr]=null,Qo=Qr[--Jr],Qr[Jr]=null;for(;t===xr;)xr=yn[--Sn],yn[Sn]=null,oi=yn[--Sn],yn[Sn]=null,ai=yn[--Sn],yn[Sn]=null}var hn=null,fn=null,ot=!1,Un=null;function ng(t,e){var n=wn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Hf(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,hn=t,fn=Oi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,hn=t,fn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=xr!==null?{id:ai,overflow:oi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=wn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,hn=t,fn=null,!0):!1;default:return!1}}function Mu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Eu(t){if(ot){var e=fn;if(e){var n=e;if(!Hf(t,e)){if(Mu(t))throw Error(ne(418));e=Oi(n.nextSibling);var i=hn;e&&Hf(t,e)?ng(i,n):(t.flags=t.flags&-4097|2,ot=!1,hn=t)}}else{if(Mu(t))throw Error(ne(418));t.flags=t.flags&-4097|2,ot=!1,hn=t}}}function Gf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;hn=t}function $a(t){if(t!==hn)return!1;if(!ot)return Gf(t),ot=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!_u(t.type,t.memoizedProps)),e&&(e=fn)){if(Mu(t))throw ig(),Error(ne(418));for(;e;)ng(t,e),e=Oi(e.nextSibling)}if(Gf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ne(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){fn=Oi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}fn=null}}else fn=hn?Oi(t.stateNode.nextSibling):null;return!0}function ig(){for(var t=fn;t;)t=Oi(t.nextSibling)}function ms(){fn=hn=null,ot=!1}function xd(t){Un===null?Un=[t]:Un.push(t)}var X0=gi.ReactCurrentBatchConfig;function Os(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ne(309));var i=n.stateNode}if(!i)throw Error(ne(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ne(284));if(!n._owner)throw Error(ne(290,t))}return t}function qa(t,e){throw t=Object.prototype.toString.call(e),Error(ne(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Vf(t){var e=t._init;return e(t._payload)}function rg(t){function e(u,x){if(t){var v=u.deletions;v===null?(u.deletions=[x],u.flags|=16):v.push(x)}}function n(u,x){if(!t)return null;for(;x!==null;)e(u,x),x=x.sibling;return null}function i(u,x){for(u=new Map;x!==null;)x.key!==null?u.set(x.key,x):u.set(x.index,x),x=x.sibling;return u}function r(u,x){return u=Hi(u,x),u.index=0,u.sibling=null,u}function s(u,x,v){return u.index=v,t?(v=u.alternate,v!==null?(v=v.index,v<x?(u.flags|=2,x):v):(u.flags|=2,x)):(u.flags|=1048576,x)}function a(u){return t&&u.alternate===null&&(u.flags|=2),u}function o(u,x,v,S){return x===null||x.tag!==6?(x=mc(v,u.mode,S),x.return=u,x):(x=r(x,v),x.return=u,x)}function l(u,x,v,S){var b=v.type;return b===Xr?f(u,x,v.props.children,S,v.key):x!==null&&(x.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Ti&&Vf(b)===x.type)?(S=r(x,v.props),S.ref=Os(u,x,v),S.return=u,S):(S=ko(v.type,v.key,v.props,null,u.mode,S),S.ref=Os(u,x,v),S.return=u,S)}function c(u,x,v,S){return x===null||x.tag!==4||x.stateNode.containerInfo!==v.containerInfo||x.stateNode.implementation!==v.implementation?(x=gc(v,u.mode,S),x.return=u,x):(x=r(x,v.children||[]),x.return=u,x)}function f(u,x,v,S,b){return x===null||x.tag!==7?(x=hr(v,u.mode,S,b),x.return=u,x):(x=r(x,v),x.return=u,x)}function h(u,x,v){if(typeof x=="string"&&x!==""||typeof x=="number")return x=mc(""+x,u.mode,v),x.return=u,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ka:return v=ko(x.type,x.key,x.props,null,u.mode,v),v.ref=Os(u,null,x),v.return=u,v;case Wr:return x=gc(x,u.mode,v),x.return=u,x;case Ti:var S=x._init;return h(u,S(x._payload),v)}if(Ws(x)||Ps(x))return x=hr(x,u.mode,v,null),x.return=u,x;qa(u,x)}return null}function d(u,x,v,S){var b=x!==null?x.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return b!==null?null:o(u,x,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ka:return v.key===b?l(u,x,v,S):null;case Wr:return v.key===b?c(u,x,v,S):null;case Ti:return b=v._init,d(u,x,b(v._payload),S)}if(Ws(v)||Ps(v))return b!==null?null:f(u,x,v,S,null);qa(u,v)}return null}function g(u,x,v,S,b){if(typeof S=="string"&&S!==""||typeof S=="number")return u=u.get(v)||null,o(x,u,""+S,b);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ka:return u=u.get(S.key===null?v:S.key)||null,l(x,u,S,b);case Wr:return u=u.get(S.key===null?v:S.key)||null,c(x,u,S,b);case Ti:var R=S._init;return g(u,x,v,R(S._payload),b)}if(Ws(S)||Ps(S))return u=u.get(v)||null,f(x,u,S,b,null);qa(x,S)}return null}function _(u,x,v,S){for(var b=null,R=null,A=x,F=x=0,M=null;A!==null&&F<v.length;F++){A.index>F?(M=A,A=null):M=A.sibling;var w=d(u,A,v[F],S);if(w===null){A===null&&(A=M);break}t&&A&&w.alternate===null&&e(u,A),x=s(w,x,F),R===null?b=w:R.sibling=w,R=w,A=M}if(F===v.length)return n(u,A),ot&&ir(u,F),b;if(A===null){for(;F<v.length;F++)A=h(u,v[F],S),A!==null&&(x=s(A,x,F),R===null?b=A:R.sibling=A,R=A);return ot&&ir(u,F),b}for(A=i(u,A);F<v.length;F++)M=g(A,u,F,v[F],S),M!==null&&(t&&M.alternate!==null&&A.delete(M.key===null?F:M.key),x=s(M,x,F),R===null?b=M:R.sibling=M,R=M);return t&&A.forEach(function(U){return e(u,U)}),ot&&ir(u,F),b}function y(u,x,v,S){var b=Ps(v);if(typeof b!="function")throw Error(ne(150));if(v=b.call(v),v==null)throw Error(ne(151));for(var R=b=null,A=x,F=x=0,M=null,w=v.next();A!==null&&!w.done;F++,w=v.next()){A.index>F?(M=A,A=null):M=A.sibling;var U=d(u,A,w.value,S);if(U===null){A===null&&(A=M);break}t&&A&&U.alternate===null&&e(u,A),x=s(U,x,F),R===null?b=U:R.sibling=U,R=U,A=M}if(w.done)return n(u,A),ot&&ir(u,F),b;if(A===null){for(;!w.done;F++,w=v.next())w=h(u,w.value,S),w!==null&&(x=s(w,x,F),R===null?b=w:R.sibling=w,R=w);return ot&&ir(u,F),b}for(A=i(u,A);!w.done;F++,w=v.next())w=g(A,u,F,w.value,S),w!==null&&(t&&w.alternate!==null&&A.delete(w.key===null?F:w.key),x=s(w,x,F),R===null?b=w:R.sibling=w,R=w);return t&&A.forEach(function($){return e(u,$)}),ot&&ir(u,F),b}function m(u,x,v,S){if(typeof v=="object"&&v!==null&&v.type===Xr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case ka:e:{for(var b=v.key,R=x;R!==null;){if(R.key===b){if(b=v.type,b===Xr){if(R.tag===7){n(u,R.sibling),x=r(R,v.props.children),x.return=u,u=x;break e}}else if(R.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Ti&&Vf(b)===R.type){n(u,R.sibling),x=r(R,v.props),x.ref=Os(u,R,v),x.return=u,u=x;break e}n(u,R);break}else e(u,R);R=R.sibling}v.type===Xr?(x=hr(v.props.children,u.mode,S,v.key),x.return=u,u=x):(S=ko(v.type,v.key,v.props,null,u.mode,S),S.ref=Os(u,x,v),S.return=u,u=S)}return a(u);case Wr:e:{for(R=v.key;x!==null;){if(x.key===R)if(x.tag===4&&x.stateNode.containerInfo===v.containerInfo&&x.stateNode.implementation===v.implementation){n(u,x.sibling),x=r(x,v.children||[]),x.return=u,u=x;break e}else{n(u,x);break}else e(u,x);x=x.sibling}x=gc(v,u.mode,S),x.return=u,u=x}return a(u);case Ti:return R=v._init,m(u,x,R(v._payload),S)}if(Ws(v))return _(u,x,v,S);if(Ps(v))return y(u,x,v,S);qa(u,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,x!==null&&x.tag===6?(n(u,x.sibling),x=r(x,v),x.return=u,u=x):(n(u,x),x=mc(v,u.mode,S),x.return=u,u=x),a(u)):n(u,x)}return m}var gs=rg(!0),sg=rg(!1),Jo=qi(null),el=null,es=null,yd=null;function Sd(){yd=es=el=null}function Md(t){var e=Jo.current;at(Jo),t._currentValue=e}function wu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function cs(t,e){el=t,yd=es=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Jt=!0),t.firstContext=null)}function An(t){var e=t._currentValue;if(yd!==t)if(t={context:t,memoizedValue:e,next:null},es===null){if(el===null)throw Error(ne(308));es=t,el.dependencies={lanes:0,firstContext:t}}else es=es.next=t;return e}var ur=null;function Ed(t){ur===null?ur=[t]:ur.push(t)}function ag(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Ed(e)):(n.next=r.next,r.next=n),e.interleaved=n,hi(t,i)}function hi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ai=!1;function wd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function og(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ci(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ki(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ye&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,hi(t,n)}return r=i.interleaved,r===null?(e.next=e,Ed(i)):(e.next=r.next,r.next=e),i.interleaved=e,hi(t,n)}function Po(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,cd(t,n)}}function jf(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function tl(t,e,n,i){var r=t.updateQueue;Ai=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var f=t.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==a&&(o===null?f.firstBaseUpdate=c:o.next=c,f.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;a=0,f=c=l=null,o=s;do{var d=o.lane,g=o.eventTime;if((i&d)===d){f!==null&&(f=f.next={eventTime:g,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var _=t,y=o;switch(d=e,g=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){h=_.call(g,h,d);break e}h=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,d=typeof _=="function"?_.call(g,h,d):_,d==null)break e;h=dt({},h,d);break e;case 2:Ai=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[o]:d.push(o))}else g={eventTime:g,lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(c=f=g,l=h):f=f.next=g,a|=d;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;d=o,o=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(f===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Sr|=a,t.lanes=a,t.memoizedState=h}}function Wf(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ne(191,r));r.call(i)}}}var La={},$n=qi(La),va=qi(La),_a=qi(La);function dr(t){if(t===La)throw Error(ne(174));return t}function Td(t,e){switch(nt(_a,e),nt(va,t),nt($n,La),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ru(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ru(e,t)}at($n),nt($n,e)}function vs(){at($n),at(va),at(_a)}function lg(t){dr(_a.current);var e=dr($n.current),n=ru(e,t.type);e!==n&&(nt(va,t),nt($n,n))}function Ad(t){va.current===t&&(at($n),at(va))}var ct=qi(0);function nl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var cc=[];function Cd(){for(var t=0;t<cc.length;t++)cc[t]._workInProgressVersionPrimary=null;cc.length=0}var Do=gi.ReactCurrentDispatcher,uc=gi.ReactCurrentBatchConfig,yr=0,ut=null,xt=null,At=null,il=!1,Js=!1,xa=0,Y0=0;function Ft(){throw Error(ne(321))}function Rd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Hn(t[n],e[n]))return!1;return!0}function bd(t,e,n,i,r,s){if(yr=s,ut=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Do.current=t===null||t.memoizedState===null?Z0:Q0,t=n(i,r),Js){s=0;do{if(Js=!1,xa=0,25<=s)throw Error(ne(301));s+=1,At=xt=null,e.updateQueue=null,Do.current=J0,t=n(i,r)}while(Js)}if(Do.current=rl,e=xt!==null&&xt.next!==null,yr=0,At=xt=ut=null,il=!1,e)throw Error(ne(300));return t}function Ld(){var t=xa!==0;return xa=0,t}function jn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return At===null?ut.memoizedState=At=t:At=At.next=t,At}function Cn(){if(xt===null){var t=ut.alternate;t=t!==null?t.memoizedState:null}else t=xt.next;var e=At===null?ut.memoizedState:At.next;if(e!==null)At=e,xt=t;else{if(t===null)throw Error(ne(310));xt=t,t={memoizedState:xt.memoizedState,baseState:xt.baseState,baseQueue:xt.baseQueue,queue:xt.queue,next:null},At===null?ut.memoizedState=At=t:At=At.next=t}return At}function ya(t,e){return typeof e=="function"?e(t):e}function dc(t){var e=Cn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=xt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var f=c.lane;if((yr&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=h,a=i):l=l.next=h,ut.lanes|=f,Sr|=f}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,Hn(i,e.memoizedState)||(Jt=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,ut.lanes|=s,Sr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function fc(t){var e=Cn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);Hn(s,e.memoizedState)||(Jt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function cg(){}function ug(t,e){var n=ut,i=Cn(),r=e(),s=!Hn(i.memoizedState,r);if(s&&(i.memoizedState=r,Jt=!0),i=i.queue,Nd(hg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||At!==null&&At.memoizedState.tag&1){if(n.flags|=2048,Sa(9,fg.bind(null,n,i,r,e),void 0,null),Ct===null)throw Error(ne(349));yr&30||dg(n,e,r)}return r}function dg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ut.updateQueue,e===null?(e={lastEffect:null,stores:null},ut.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function fg(t,e,n,i){e.value=n,e.getSnapshot=i,pg(e)&&mg(t)}function hg(t,e,n){return n(function(){pg(e)&&mg(t)})}function pg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Hn(t,n)}catch{return!0}}function mg(t){var e=hi(t,1);e!==null&&zn(e,t,1,-1)}function Xf(t){var e=jn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:t},e.queue=t,t=t.dispatch=K0.bind(null,ut,t),[e.memoizedState,t]}function Sa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ut.updateQueue,e===null?(e={lastEffect:null,stores:null},ut.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function gg(){return Cn().memoizedState}function Uo(t,e,n,i){var r=jn();ut.flags|=t,r.memoizedState=Sa(1|e,n,void 0,i===void 0?null:i)}function Al(t,e,n,i){var r=Cn();i=i===void 0?null:i;var s=void 0;if(xt!==null){var a=xt.memoizedState;if(s=a.destroy,i!==null&&Rd(i,a.deps)){r.memoizedState=Sa(e,n,s,i);return}}ut.flags|=t,r.memoizedState=Sa(1|e,n,s,i)}function Yf(t,e){return Uo(8390656,8,t,e)}function Nd(t,e){return Al(2048,8,t,e)}function vg(t,e){return Al(4,2,t,e)}function _g(t,e){return Al(4,4,t,e)}function xg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function yg(t,e,n){return n=n!=null?n.concat([t]):null,Al(4,4,xg.bind(null,e,t),n)}function Pd(){}function Sg(t,e){var n=Cn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Rd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Mg(t,e){var n=Cn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Rd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Eg(t,e,n){return yr&21?(Hn(n,e)||(n=Rm(),ut.lanes|=n,Sr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Jt=!0),t.memoizedState=n)}function $0(t,e){var n=qe;qe=n!==0&&4>n?n:4,t(!0);var i=uc.transition;uc.transition={};try{t(!1),e()}finally{qe=n,uc.transition=i}}function wg(){return Cn().memoizedState}function q0(t,e,n){var i=Bi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Tg(t))Ag(e,n);else if(n=ag(t,e,n,i),n!==null){var r=qt();zn(n,t,i,r),Cg(n,e,i)}}function K0(t,e,n){var i=Bi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Tg(t))Ag(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,Hn(o,a)){var l=e.interleaved;l===null?(r.next=r,Ed(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=ag(t,e,r,i),n!==null&&(r=qt(),zn(n,t,i,r),Cg(n,e,i))}}function Tg(t){var e=t.alternate;return t===ut||e!==null&&e===ut}function Ag(t,e){Js=il=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Cg(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,cd(t,n)}}var rl={readContext:An,useCallback:Ft,useContext:Ft,useEffect:Ft,useImperativeHandle:Ft,useInsertionEffect:Ft,useLayoutEffect:Ft,useMemo:Ft,useReducer:Ft,useRef:Ft,useState:Ft,useDebugValue:Ft,useDeferredValue:Ft,useTransition:Ft,useMutableSource:Ft,useSyncExternalStore:Ft,useId:Ft,unstable_isNewReconciler:!1},Z0={readContext:An,useCallback:function(t,e){return jn().memoizedState=[t,e===void 0?null:e],t},useContext:An,useEffect:Yf,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Uo(4194308,4,xg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Uo(4194308,4,t,e)},useInsertionEffect:function(t,e){return Uo(4,2,t,e)},useMemo:function(t,e){var n=jn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=jn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=q0.bind(null,ut,t),[i.memoizedState,t]},useRef:function(t){var e=jn();return t={current:t},e.memoizedState=t},useState:Xf,useDebugValue:Pd,useDeferredValue:function(t){return jn().memoizedState=t},useTransition:function(){var t=Xf(!1),e=t[0];return t=$0.bind(null,t[1]),jn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ut,r=jn();if(ot){if(n===void 0)throw Error(ne(407));n=n()}else{if(n=e(),Ct===null)throw Error(ne(349));yr&30||dg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Yf(hg.bind(null,i,s,t),[t]),i.flags|=2048,Sa(9,fg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=jn(),e=Ct.identifierPrefix;if(ot){var n=oi,i=ai;n=(i&~(1<<32-kn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=xa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Y0++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Q0={readContext:An,useCallback:Sg,useContext:An,useEffect:Nd,useImperativeHandle:yg,useInsertionEffect:vg,useLayoutEffect:_g,useMemo:Mg,useReducer:dc,useRef:gg,useState:function(){return dc(ya)},useDebugValue:Pd,useDeferredValue:function(t){var e=Cn();return Eg(e,xt.memoizedState,t)},useTransition:function(){var t=dc(ya)[0],e=Cn().memoizedState;return[t,e]},useMutableSource:cg,useSyncExternalStore:ug,useId:wg,unstable_isNewReconciler:!1},J0={readContext:An,useCallback:Sg,useContext:An,useEffect:Nd,useImperativeHandle:yg,useInsertionEffect:vg,useLayoutEffect:_g,useMemo:Mg,useReducer:fc,useRef:gg,useState:function(){return fc(ya)},useDebugValue:Pd,useDeferredValue:function(t){var e=Cn();return xt===null?e.memoizedState=t:Eg(e,xt.memoizedState,t)},useTransition:function(){var t=fc(ya)[0],e=Cn().memoizedState;return[t,e]},useMutableSource:cg,useSyncExternalStore:ug,useId:wg,unstable_isNewReconciler:!1};function Pn(t,e){if(t&&t.defaultProps){e=dt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Tu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:dt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Cl={isMounted:function(t){return(t=t._reactInternals)?Ar(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=qt(),r=Bi(t),s=ci(i,r);s.payload=e,n!=null&&(s.callback=n),e=ki(t,s,r),e!==null&&(zn(e,t,r,i),Po(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=qt(),r=Bi(t),s=ci(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ki(t,s,r),e!==null&&(zn(e,t,r,i),Po(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=qt(),i=Bi(t),r=ci(n,i);r.tag=2,e!=null&&(r.callback=e),e=ki(t,r,i),e!==null&&(zn(e,t,i,n),Po(e,t,i))}};function $f(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!ha(n,i)||!ha(r,s):!0}function Rg(t,e,n){var i=!1,r=Xi,s=e.contextType;return typeof s=="object"&&s!==null?s=An(s):(r=tn(e)?_r:Ht.current,i=e.contextTypes,s=(i=i!=null)?ps(t,r):Xi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Cl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function qf(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Cl.enqueueReplaceState(e,e.state,null)}function Au(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},wd(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=An(s):(s=tn(e)?_r:Ht.current,r.context=ps(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Tu(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Cl.enqueueReplaceState(r,r.state,null),tl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function _s(t,e){try{var n="",i=e;do n+=C_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function hc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Cu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var ex=typeof WeakMap=="function"?WeakMap:Map;function bg(t,e,n){n=ci(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){al||(al=!0,Ou=i),Cu(t,e)},n}function Lg(t,e,n){n=ci(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Cu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Cu(t,e),typeof i!="function"&&(zi===null?zi=new Set([this]):zi.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Kf(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new ex;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=px.bind(null,t,e,n),e.then(t,t))}function Zf(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Qf(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ci(-1,1),e.tag=2,ki(n,e,1))),n.lanes|=1),t)}var tx=gi.ReactCurrentOwner,Jt=!1;function Xt(t,e,n,i){e.child=t===null?sg(e,null,n,i):gs(e,t.child,n,i)}function Jf(t,e,n,i,r){n=n.render;var s=e.ref;return cs(e,r),i=bd(t,e,n,i,s,r),n=Ld(),t!==null&&!Jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,pi(t,e,r)):(ot&&n&&vd(e),e.flags|=1,Xt(t,e,i,r),e.child)}function eh(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Bd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Ng(t,e,s,i,r)):(t=ko(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:ha,n(a,i)&&t.ref===e.ref)return pi(t,e,r)}return e.flags|=1,t=Hi(s,i),t.ref=e.ref,t.return=e,e.child=t}function Ng(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ha(s,i)&&t.ref===e.ref)if(Jt=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Jt=!0);else return e.lanes=t.lanes,pi(t,e,r)}return Ru(t,e,n,i,r)}function Pg(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},nt(ns,cn),cn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,nt(ns,cn),cn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,nt(ns,cn),cn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,nt(ns,cn),cn|=i;return Xt(t,e,r,n),e.child}function Dg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ru(t,e,n,i,r){var s=tn(n)?_r:Ht.current;return s=ps(e,s),cs(e,r),n=bd(t,e,n,i,s,r),i=Ld(),t!==null&&!Jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,pi(t,e,r)):(ot&&i&&vd(e),e.flags|=1,Xt(t,e,n,r),e.child)}function th(t,e,n,i,r){if(tn(n)){var s=!0;Ko(e)}else s=!1;if(cs(e,r),e.stateNode===null)Io(t,e),Rg(e,n,i),Au(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=An(c):(c=tn(n)?_r:Ht.current,c=ps(e,c));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&qf(e,a,i,c),Ai=!1;var d=e.memoizedState;a.state=d,tl(e,i,a,r),l=e.memoizedState,o!==i||d!==l||en.current||Ai?(typeof f=="function"&&(Tu(e,n,f,i),l=e.memoizedState),(o=Ai||$f(e,n,o,i,d,l,c))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,og(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:Pn(e.type,o),a.props=c,h=e.pendingProps,d=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=An(l):(l=tn(n)?_r:Ht.current,l=ps(e,l));var g=n.getDerivedStateFromProps;(f=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==h||d!==l)&&qf(e,a,i,l),Ai=!1,d=e.memoizedState,a.state=d,tl(e,i,a,r);var _=e.memoizedState;o!==h||d!==_||en.current||Ai?(typeof g=="function"&&(Tu(e,n,g,i),_=e.memoizedState),(c=Ai||$f(e,n,c,i,d,_,l)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,_,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,_,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),a.props=i,a.state=_,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return bu(t,e,n,i,s,r)}function bu(t,e,n,i,r,s){Dg(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Bf(e,n,!1),pi(t,e,s);i=e.stateNode,tx.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=gs(e,t.child,null,s),e.child=gs(e,null,o,s)):Xt(t,e,o,s),e.memoizedState=i.state,r&&Bf(e,n,!0),e.child}function Ug(t){var e=t.stateNode;e.pendingContext?zf(t,e.pendingContext,e.pendingContext!==e.context):e.context&&zf(t,e.context,!1),Td(t,e.containerInfo)}function nh(t,e,n,i,r){return ms(),xd(r),e.flags|=256,Xt(t,e,n,i),e.child}var Lu={dehydrated:null,treeContext:null,retryLane:0};function Nu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Ig(t,e,n){var i=e.pendingProps,r=ct.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),nt(ct,r&1),t===null)return Eu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Ll(a,i,0,null),t=hr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Nu(n),e.memoizedState=Lu,t):Dd(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return nx(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Hi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=Hi(o,s):(s=hr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?Nu(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Lu,i}return s=t.child,t=s.sibling,i=Hi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Dd(t,e){return e=Ll({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ka(t,e,n,i){return i!==null&&xd(i),gs(e,t.child,null,n),t=Dd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function nx(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=hc(Error(ne(422))),Ka(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Ll({mode:"visible",children:i.children},r,0,null),s=hr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&gs(e,t.child,null,a),e.child.memoizedState=Nu(a),e.memoizedState=Lu,s);if(!(e.mode&1))return Ka(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ne(419)),i=hc(s,i,void 0),Ka(t,e,a,i)}if(o=(a&t.childLanes)!==0,Jt||o){if(i=Ct,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,hi(t,r),zn(i,t,r,-1))}return zd(),i=hc(Error(ne(421))),Ka(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=mx.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,fn=Oi(r.nextSibling),hn=e,ot=!0,Un=null,t!==null&&(yn[Sn++]=ai,yn[Sn++]=oi,yn[Sn++]=xr,ai=t.id,oi=t.overflow,xr=e),e=Dd(e,i.children),e.flags|=4096,e)}function ih(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),wu(t.return,e,n)}function pc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Fg(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Xt(t,e,i.children,n),i=ct.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ih(t,n,e);else if(t.tag===19)ih(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(nt(ct,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&nl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),pc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&nl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}pc(e,!0,n,null,s);break;case"together":pc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Io(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function pi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Sr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ne(153));if(e.child!==null){for(t=e.child,n=Hi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Hi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function ix(t,e,n){switch(e.tag){case 3:Ug(e),ms();break;case 5:lg(e);break;case 1:tn(e.type)&&Ko(e);break;case 4:Td(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;nt(Jo,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(nt(ct,ct.current&1),e.flags|=128,null):n&e.child.childLanes?Ig(t,e,n):(nt(ct,ct.current&1),t=pi(t,e,n),t!==null?t.sibling:null);nt(ct,ct.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Fg(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),nt(ct,ct.current),i)break;return null;case 22:case 23:return e.lanes=0,Pg(t,e,n)}return pi(t,e,n)}var Og,Pu,kg,zg;Og=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Pu=function(){};kg=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,dr($n.current);var s=null;switch(n){case"input":r=eu(t,r),i=eu(t,i),s=[];break;case"select":r=dt({},r,{value:void 0}),i=dt({},i,{value:void 0}),s=[];break;case"textarea":r=iu(t,r),i=iu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=$o)}su(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(aa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(aa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&rt("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};zg=function(t,e,n,i){n!==i&&(e.flags|=4)};function ks(t,e){if(!ot)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ot(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function rx(t,e,n){var i=e.pendingProps;switch(_d(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ot(e),null;case 1:return tn(e.type)&&qo(),Ot(e),null;case 3:return i=e.stateNode,vs(),at(en),at(Ht),Cd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&($a(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Un!==null&&(Bu(Un),Un=null))),Pu(t,e),Ot(e),null;case 5:Ad(e);var r=dr(_a.current);if(n=e.type,t!==null&&e.stateNode!=null)kg(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ne(166));return Ot(e),null}if(t=dr($n.current),$a(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Xn]=e,i[ga]=s,t=(e.mode&1)!==0,n){case"dialog":rt("cancel",i),rt("close",i);break;case"iframe":case"object":case"embed":rt("load",i);break;case"video":case"audio":for(r=0;r<Ys.length;r++)rt(Ys[r],i);break;case"source":rt("error",i);break;case"img":case"image":case"link":rt("error",i),rt("load",i);break;case"details":rt("toggle",i);break;case"input":ff(i,s),rt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},rt("invalid",i);break;case"textarea":pf(i,s),rt("invalid",i)}su(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&Ya(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&Ya(i.textContent,o,t),r=["children",""+o]):aa.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&rt("scroll",i)}switch(n){case"input":za(i),hf(i,s,!0);break;case"textarea":za(i),mf(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=$o)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=hm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[Xn]=e,t[ga]=i,Og(t,e,!1,!1),e.stateNode=t;e:{switch(a=au(n,i),n){case"dialog":rt("cancel",t),rt("close",t),r=i;break;case"iframe":case"object":case"embed":rt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Ys.length;r++)rt(Ys[r],t);r=i;break;case"source":rt("error",t),r=i;break;case"img":case"image":case"link":rt("error",t),rt("load",t),r=i;break;case"details":rt("toggle",t),r=i;break;case"input":ff(t,i),r=eu(t,i),rt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=dt({},i,{value:void 0}),rt("invalid",t);break;case"textarea":pf(t,i),r=iu(t,i),rt("invalid",t);break;default:r=i}su(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?gm(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&pm(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&oa(t,l):typeof l=="number"&&oa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(aa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&rt("scroll",t):l!=null&&id(t,s,l,a))}switch(n){case"input":za(t),hf(t,i,!1);break;case"textarea":za(t),mf(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Wi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ss(t,!!i.multiple,s,!1):i.defaultValue!=null&&ss(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=$o)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ot(e),null;case 6:if(t&&e.stateNode!=null)zg(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ne(166));if(n=dr(_a.current),dr($n.current),$a(e)){if(i=e.stateNode,n=e.memoizedProps,i[Xn]=e,(s=i.nodeValue!==n)&&(t=hn,t!==null))switch(t.tag){case 3:Ya(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ya(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Xn]=e,e.stateNode=i}return Ot(e),null;case 13:if(at(ct),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ot&&fn!==null&&e.mode&1&&!(e.flags&128))ig(),ms(),e.flags|=98560,s=!1;else if(s=$a(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ne(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ne(317));s[Xn]=e}else ms(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ot(e),s=!1}else Un!==null&&(Bu(Un),Un=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ct.current&1?yt===0&&(yt=3):zd())),e.updateQueue!==null&&(e.flags|=4),Ot(e),null);case 4:return vs(),Pu(t,e),t===null&&pa(e.stateNode.containerInfo),Ot(e),null;case 10:return Md(e.type._context),Ot(e),null;case 17:return tn(e.type)&&qo(),Ot(e),null;case 19:if(at(ct),s=e.memoizedState,s===null)return Ot(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)ks(s,!1);else{if(yt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=nl(t),a!==null){for(e.flags|=128,ks(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return nt(ct,ct.current&1|2),e.child}t=t.sibling}s.tail!==null&&gt()>xs&&(e.flags|=128,i=!0,ks(s,!1),e.lanes=4194304)}else{if(!i)if(t=nl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ks(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!ot)return Ot(e),null}else 2*gt()-s.renderingStartTime>xs&&n!==1073741824&&(e.flags|=128,i=!0,ks(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=gt(),e.sibling=null,n=ct.current,nt(ct,i?n&1|2:n&1),e):(Ot(e),null);case 22:case 23:return kd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?cn&1073741824&&(Ot(e),e.subtreeFlags&6&&(e.flags|=8192)):Ot(e),null;case 24:return null;case 25:return null}throw Error(ne(156,e.tag))}function sx(t,e){switch(_d(e),e.tag){case 1:return tn(e.type)&&qo(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return vs(),at(en),at(Ht),Cd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ad(e),null;case 13:if(at(ct),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ne(340));ms()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return at(ct),null;case 4:return vs(),null;case 10:return Md(e.type._context),null;case 22:case 23:return kd(),null;case 24:return null;default:return null}}var Za=!1,Bt=!1,ax=typeof WeakSet=="function"?WeakSet:Set,he=null;function ts(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){pt(t,e,i)}else n.current=null}function Du(t,e,n){try{n()}catch(i){pt(t,e,i)}}var rh=!1;function ox(t,e){if(gu=Wo,t=jm(),gd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,f=0,h=t,d=null;t:for(;;){for(var g;h!==n||r!==0&&h.nodeType!==3||(o=a+r),h!==s||i!==0&&h.nodeType!==3||(l=a+i),h.nodeType===3&&(a+=h.nodeValue.length),(g=h.firstChild)!==null;)d=h,h=g;for(;;){if(h===t)break t;if(d===n&&++c===r&&(o=a),d===s&&++f===i&&(l=a),(g=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=g}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(vu={focusedElem:t,selectionRange:n},Wo=!1,he=e;he!==null;)if(e=he,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,he=t;else for(;he!==null;){e=he;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,m=_.memoizedState,u=e.stateNode,x=u.getSnapshotBeforeUpdate(e.elementType===e.type?y:Pn(e.type,y),m);u.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ne(163))}}catch(S){pt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,he=t;break}he=e.return}return _=rh,rh=!1,_}function ea(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Du(e,n,s)}r=r.next}while(r!==i)}}function Rl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Uu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Bg(t){var e=t.alternate;e!==null&&(t.alternate=null,Bg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Xn],delete e[ga],delete e[yu],delete e[V0],delete e[j0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Hg(t){return t.tag===5||t.tag===3||t.tag===4}function sh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Hg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Iu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=$o));else if(i!==4&&(t=t.child,t!==null))for(Iu(t,e,n),t=t.sibling;t!==null;)Iu(t,e,n),t=t.sibling}function Fu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Fu(t,e,n),t=t.sibling;t!==null;)Fu(t,e,n),t=t.sibling}var Lt=null,Dn=!1;function vi(t,e,n){for(n=n.child;n!==null;)Gg(t,e,n),n=n.sibling}function Gg(t,e,n){if(Yn&&typeof Yn.onCommitFiberUnmount=="function")try{Yn.onCommitFiberUnmount(yl,n)}catch{}switch(n.tag){case 5:Bt||ts(n,e);case 6:var i=Lt,r=Dn;Lt=null,vi(t,e,n),Lt=i,Dn=r,Lt!==null&&(Dn?(t=Lt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Lt.removeChild(n.stateNode));break;case 18:Lt!==null&&(Dn?(t=Lt,n=n.stateNode,t.nodeType===8?oc(t.parentNode,n):t.nodeType===1&&oc(t,n),da(t)):oc(Lt,n.stateNode));break;case 4:i=Lt,r=Dn,Lt=n.stateNode.containerInfo,Dn=!0,vi(t,e,n),Lt=i,Dn=r;break;case 0:case 11:case 14:case 15:if(!Bt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Du(n,e,a),r=r.next}while(r!==i)}vi(t,e,n);break;case 1:if(!Bt&&(ts(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){pt(n,e,o)}vi(t,e,n);break;case 21:vi(t,e,n);break;case 22:n.mode&1?(Bt=(i=Bt)||n.memoizedState!==null,vi(t,e,n),Bt=i):vi(t,e,n);break;default:vi(t,e,n)}}function ah(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new ax),e.forEach(function(i){var r=gx.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Rn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Lt=o.stateNode,Dn=!1;break e;case 3:Lt=o.stateNode.containerInfo,Dn=!0;break e;case 4:Lt=o.stateNode.containerInfo,Dn=!0;break e}o=o.return}if(Lt===null)throw Error(ne(160));Gg(s,a,r),Lt=null,Dn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){pt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Vg(e,t),e=e.sibling}function Vg(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Rn(e,t),Vn(t),i&4){try{ea(3,t,t.return),Rl(3,t)}catch(y){pt(t,t.return,y)}try{ea(5,t,t.return)}catch(y){pt(t,t.return,y)}}break;case 1:Rn(e,t),Vn(t),i&512&&n!==null&&ts(n,n.return);break;case 5:if(Rn(e,t),Vn(t),i&512&&n!==null&&ts(n,n.return),t.flags&32){var r=t.stateNode;try{oa(r,"")}catch(y){pt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&dm(r,s),au(o,a);var c=au(o,s);for(a=0;a<l.length;a+=2){var f=l[a],h=l[a+1];f==="style"?gm(r,h):f==="dangerouslySetInnerHTML"?pm(r,h):f==="children"?oa(r,h):id(r,f,h,c)}switch(o){case"input":tu(r,s);break;case"textarea":fm(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?ss(r,!!s.multiple,g,!1):d!==!!s.multiple&&(s.defaultValue!=null?ss(r,!!s.multiple,s.defaultValue,!0):ss(r,!!s.multiple,s.multiple?[]:"",!1))}r[ga]=s}catch(y){pt(t,t.return,y)}}break;case 6:if(Rn(e,t),Vn(t),i&4){if(t.stateNode===null)throw Error(ne(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){pt(t,t.return,y)}}break;case 3:if(Rn(e,t),Vn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{da(e.containerInfo)}catch(y){pt(t,t.return,y)}break;case 4:Rn(e,t),Vn(t);break;case 13:Rn(e,t),Vn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Fd=gt())),i&4&&ah(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Bt=(c=Bt)||f,Rn(e,t),Bt=c):Rn(e,t),Vn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(he=t,f=t.child;f!==null;){for(h=he=f;he!==null;){switch(d=he,g=d.child,d.tag){case 0:case 11:case 14:case 15:ea(4,d,d.return);break;case 1:ts(d,d.return);var _=d.stateNode;if(typeof _.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){pt(i,n,y)}}break;case 5:ts(d,d.return);break;case 22:if(d.memoizedState!==null){lh(h);continue}}g!==null?(g.return=d,he=g):lh(h)}f=f.sibling}e:for(f=null,h=t;;){if(h.tag===5){if(f===null){f=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=h.stateNode,l=h.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=mm("display",a))}catch(y){pt(t,t.return,y)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(y){pt(t,t.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Rn(e,t),Vn(t),i&4&&ah(t);break;case 21:break;default:Rn(e,t),Vn(t)}}function Vn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Hg(n)){var i=n;break e}n=n.return}throw Error(ne(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(oa(r,""),i.flags&=-33);var s=sh(t);Fu(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=sh(t);Iu(t,o,a);break;default:throw Error(ne(161))}}catch(l){pt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function lx(t,e,n){he=t,jg(t)}function jg(t,e,n){for(var i=(t.mode&1)!==0;he!==null;){var r=he,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||Za;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||Bt;o=Za;var c=Bt;if(Za=a,(Bt=l)&&!c)for(he=r;he!==null;)a=he,l=a.child,a.tag===22&&a.memoizedState!==null?ch(r):l!==null?(l.return=a,he=l):ch(r);for(;s!==null;)he=s,jg(s),s=s.sibling;he=r,Za=o,Bt=c}oh(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,he=s):oh(t)}}function oh(t){for(;he!==null;){var e=he;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Bt||Rl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Bt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Pn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Wf(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Wf(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&da(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ne(163))}Bt||e.flags&512&&Uu(e)}catch(d){pt(e,e.return,d)}}if(e===t){he=null;break}if(n=e.sibling,n!==null){n.return=e.return,he=n;break}he=e.return}}function lh(t){for(;he!==null;){var e=he;if(e===t){he=null;break}var n=e.sibling;if(n!==null){n.return=e.return,he=n;break}he=e.return}}function ch(t){for(;he!==null;){var e=he;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Rl(4,e)}catch(l){pt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){pt(e,r,l)}}var s=e.return;try{Uu(e)}catch(l){pt(e,s,l)}break;case 5:var a=e.return;try{Uu(e)}catch(l){pt(e,a,l)}}}catch(l){pt(e,e.return,l)}if(e===t){he=null;break}var o=e.sibling;if(o!==null){o.return=e.return,he=o;break}he=e.return}}var cx=Math.ceil,sl=gi.ReactCurrentDispatcher,Ud=gi.ReactCurrentOwner,Tn=gi.ReactCurrentBatchConfig,Ye=0,Ct=null,_t=null,Dt=0,cn=0,ns=qi(0),yt=0,Ma=null,Sr=0,bl=0,Id=0,ta=null,Qt=null,Fd=0,xs=1/0,ii=null,al=!1,Ou=null,zi=null,Qa=!1,Li=null,ol=0,na=0,ku=null,Fo=-1,Oo=0;function qt(){return Ye&6?gt():Fo!==-1?Fo:Fo=gt()}function Bi(t){return t.mode&1?Ye&2&&Dt!==0?Dt&-Dt:X0.transition!==null?(Oo===0&&(Oo=Rm()),Oo):(t=qe,t!==0||(t=window.event,t=t===void 0?16:Im(t.type)),t):1}function zn(t,e,n,i){if(50<na)throw na=0,ku=null,Error(ne(185));Ca(t,n,i),(!(Ye&2)||t!==Ct)&&(t===Ct&&(!(Ye&2)&&(bl|=n),yt===4&&Ri(t,Dt)),nn(t,i),n===1&&Ye===0&&!(e.mode&1)&&(xs=gt()+500,Tl&&Ki()))}function nn(t,e){var n=t.callbackNode;X_(t,e);var i=jo(t,t===Ct?Dt:0);if(i===0)n!==null&&_f(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&_f(n),e===1)t.tag===0?W0(uh.bind(null,t)):eg(uh.bind(null,t)),H0(function(){!(Ye&6)&&Ki()}),n=null;else{switch(bm(i)){case 1:n=ld;break;case 4:n=Am;break;case 16:n=Vo;break;case 536870912:n=Cm;break;default:n=Vo}n=Qg(n,Wg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Wg(t,e){if(Fo=-1,Oo=0,Ye&6)throw Error(ne(327));var n=t.callbackNode;if(us()&&t.callbackNode!==n)return null;var i=jo(t,t===Ct?Dt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=ll(t,i);else{e=i;var r=Ye;Ye|=2;var s=Yg();(Ct!==t||Dt!==e)&&(ii=null,xs=gt()+500,fr(t,e));do try{fx();break}catch(o){Xg(t,o)}while(!0);Sd(),sl.current=s,Ye=r,_t!==null?e=0:(Ct=null,Dt=0,e=yt)}if(e!==0){if(e===2&&(r=du(t),r!==0&&(i=r,e=zu(t,r))),e===1)throw n=Ma,fr(t,0),Ri(t,i),nn(t,gt()),n;if(e===6)Ri(t,i);else{if(r=t.current.alternate,!(i&30)&&!ux(r)&&(e=ll(t,i),e===2&&(s=du(t),s!==0&&(i=s,e=zu(t,s))),e===1))throw n=Ma,fr(t,0),Ri(t,i),nn(t,gt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ne(345));case 2:rr(t,Qt,ii);break;case 3:if(Ri(t,i),(i&130023424)===i&&(e=Fd+500-gt(),10<e)){if(jo(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){qt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=xu(rr.bind(null,t,Qt,ii),e);break}rr(t,Qt,ii);break;case 4:if(Ri(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-kn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=gt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*cx(i/1960))-i,10<i){t.timeoutHandle=xu(rr.bind(null,t,Qt,ii),i);break}rr(t,Qt,ii);break;case 5:rr(t,Qt,ii);break;default:throw Error(ne(329))}}}return nn(t,gt()),t.callbackNode===n?Wg.bind(null,t):null}function zu(t,e){var n=ta;return t.current.memoizedState.isDehydrated&&(fr(t,e).flags|=256),t=ll(t,e),t!==2&&(e=Qt,Qt=n,e!==null&&Bu(e)),t}function Bu(t){Qt===null?Qt=t:Qt.push.apply(Qt,t)}function ux(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Hn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ri(t,e){for(e&=~Id,e&=~bl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-kn(e),i=1<<n;t[n]=-1,e&=~i}}function uh(t){if(Ye&6)throw Error(ne(327));us();var e=jo(t,0);if(!(e&1))return nn(t,gt()),null;var n=ll(t,e);if(t.tag!==0&&n===2){var i=du(t);i!==0&&(e=i,n=zu(t,i))}if(n===1)throw n=Ma,fr(t,0),Ri(t,e),nn(t,gt()),n;if(n===6)throw Error(ne(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,rr(t,Qt,ii),nn(t,gt()),null}function Od(t,e){var n=Ye;Ye|=1;try{return t(e)}finally{Ye=n,Ye===0&&(xs=gt()+500,Tl&&Ki())}}function Mr(t){Li!==null&&Li.tag===0&&!(Ye&6)&&us();var e=Ye;Ye|=1;var n=Tn.transition,i=qe;try{if(Tn.transition=null,qe=1,t)return t()}finally{qe=i,Tn.transition=n,Ye=e,!(Ye&6)&&Ki()}}function kd(){cn=ns.current,at(ns)}function fr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,B0(n)),_t!==null)for(n=_t.return;n!==null;){var i=n;switch(_d(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&qo();break;case 3:vs(),at(en),at(Ht),Cd();break;case 5:Ad(i);break;case 4:vs();break;case 13:at(ct);break;case 19:at(ct);break;case 10:Md(i.type._context);break;case 22:case 23:kd()}n=n.return}if(Ct=t,_t=t=Hi(t.current,null),Dt=cn=e,yt=0,Ma=null,Id=bl=Sr=0,Qt=ta=null,ur!==null){for(e=0;e<ur.length;e++)if(n=ur[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}ur=null}return t}function Xg(t,e){do{var n=_t;try{if(Sd(),Do.current=rl,il){for(var i=ut.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}il=!1}if(yr=0,At=xt=ut=null,Js=!1,xa=0,Ud.current=null,n===null||n.return===null){yt=1,Ma=e,_t=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Dt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=o,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var g=Zf(a);if(g!==null){g.flags&=-257,Qf(g,a,o,s,e),g.mode&1&&Kf(s,c,e),e=g,l=c;var _=e.updateQueue;if(_===null){var y=new Set;y.add(l),e.updateQueue=y}else _.add(l);break e}else{if(!(e&1)){Kf(s,c,e),zd();break e}l=Error(ne(426))}}else if(ot&&o.mode&1){var m=Zf(a);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Qf(m,a,o,s,e),xd(_s(l,o));break e}}s=l=_s(l,o),yt!==4&&(yt=2),ta===null?ta=[s]:ta.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=bg(s,l,e);jf(s,u);break e;case 1:o=l;var x=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof x.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(zi===null||!zi.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=Lg(s,o,e);jf(s,S);break e}}s=s.return}while(s!==null)}qg(n)}catch(b){e=b,_t===n&&n!==null&&(_t=n=n.return);continue}break}while(!0)}function Yg(){var t=sl.current;return sl.current=rl,t===null?rl:t}function zd(){(yt===0||yt===3||yt===2)&&(yt=4),Ct===null||!(Sr&268435455)&&!(bl&268435455)||Ri(Ct,Dt)}function ll(t,e){var n=Ye;Ye|=2;var i=Yg();(Ct!==t||Dt!==e)&&(ii=null,fr(t,e));do try{dx();break}catch(r){Xg(t,r)}while(!0);if(Sd(),Ye=n,sl.current=i,_t!==null)throw Error(ne(261));return Ct=null,Dt=0,yt}function dx(){for(;_t!==null;)$g(_t)}function fx(){for(;_t!==null&&!O_();)$g(_t)}function $g(t){var e=Zg(t.alternate,t,cn);t.memoizedProps=t.pendingProps,e===null?qg(t):_t=e,Ud.current=null}function qg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=sx(n,e),n!==null){n.flags&=32767,_t=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{yt=6,_t=null;return}}else if(n=rx(n,e,cn),n!==null){_t=n;return}if(e=e.sibling,e!==null){_t=e;return}_t=e=t}while(e!==null);yt===0&&(yt=5)}function rr(t,e,n){var i=qe,r=Tn.transition;try{Tn.transition=null,qe=1,hx(t,e,n,i)}finally{Tn.transition=r,qe=i}return null}function hx(t,e,n,i){do us();while(Li!==null);if(Ye&6)throw Error(ne(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ne(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Y_(t,s),t===Ct&&(_t=Ct=null,Dt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Qa||(Qa=!0,Qg(Vo,function(){return us(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Tn.transition,Tn.transition=null;var a=qe;qe=1;var o=Ye;Ye|=4,Ud.current=null,ox(t,n),Vg(n,t),D0(vu),Wo=!!gu,vu=gu=null,t.current=n,lx(n),k_(),Ye=o,qe=a,Tn.transition=s}else t.current=n;if(Qa&&(Qa=!1,Li=t,ol=r),s=t.pendingLanes,s===0&&(zi=null),H_(n.stateNode),nn(t,gt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(al)throw al=!1,t=Ou,Ou=null,t;return ol&1&&t.tag!==0&&us(),s=t.pendingLanes,s&1?t===ku?na++:(na=0,ku=t):na=0,Ki(),null}function us(){if(Li!==null){var t=bm(ol),e=Tn.transition,n=qe;try{if(Tn.transition=null,qe=16>t?16:t,Li===null)var i=!1;else{if(t=Li,Li=null,ol=0,Ye&6)throw Error(ne(331));var r=Ye;for(Ye|=4,he=t.current;he!==null;){var s=he,a=s.child;if(he.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(he=c;he!==null;){var f=he;switch(f.tag){case 0:case 11:case 15:ea(8,f,s)}var h=f.child;if(h!==null)h.return=f,he=h;else for(;he!==null;){f=he;var d=f.sibling,g=f.return;if(Bg(f),f===c){he=null;break}if(d!==null){d.return=g,he=d;break}he=g}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}he=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,he=a;else e:for(;he!==null;){if(s=he,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ea(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,he=u;break e}he=s.return}}var x=t.current;for(he=x;he!==null;){a=he;var v=a.child;if(a.subtreeFlags&2064&&v!==null)v.return=a,he=v;else e:for(a=x;he!==null;){if(o=he,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Rl(9,o)}}catch(b){pt(o,o.return,b)}if(o===a){he=null;break e}var S=o.sibling;if(S!==null){S.return=o.return,he=S;break e}he=o.return}}if(Ye=r,Ki(),Yn&&typeof Yn.onPostCommitFiberRoot=="function")try{Yn.onPostCommitFiberRoot(yl,t)}catch{}i=!0}return i}finally{qe=n,Tn.transition=e}}return!1}function dh(t,e,n){e=_s(n,e),e=bg(t,e,1),t=ki(t,e,1),e=qt(),t!==null&&(Ca(t,1,e),nn(t,e))}function pt(t,e,n){if(t.tag===3)dh(t,t,n);else for(;e!==null;){if(e.tag===3){dh(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(zi===null||!zi.has(i))){t=_s(n,t),t=Lg(e,t,1),e=ki(e,t,1),t=qt(),e!==null&&(Ca(e,1,t),nn(e,t));break}}e=e.return}}function px(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=qt(),t.pingedLanes|=t.suspendedLanes&n,Ct===t&&(Dt&n)===n&&(yt===4||yt===3&&(Dt&130023424)===Dt&&500>gt()-Fd?fr(t,0):Id|=n),nn(t,e)}function Kg(t,e){e===0&&(t.mode&1?(e=Ga,Ga<<=1,!(Ga&130023424)&&(Ga=4194304)):e=1);var n=qt();t=hi(t,e),t!==null&&(Ca(t,e,n),nn(t,n))}function mx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Kg(t,n)}function gx(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ne(314))}i!==null&&i.delete(e),Kg(t,n)}var Zg;Zg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||en.current)Jt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Jt=!1,ix(t,e,n);Jt=!!(t.flags&131072)}else Jt=!1,ot&&e.flags&1048576&&tg(e,Qo,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Io(t,e),t=e.pendingProps;var r=ps(e,Ht.current);cs(e,n),r=bd(null,e,i,t,r,n);var s=Ld();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,tn(i)?(s=!0,Ko(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,wd(e),r.updater=Cl,e.stateNode=r,r._reactInternals=e,Au(e,i,t,n),e=bu(null,e,i,!0,s,n)):(e.tag=0,ot&&s&&vd(e),Xt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Io(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=_x(i),t=Pn(i,t),r){case 0:e=Ru(null,e,i,t,n);break e;case 1:e=th(null,e,i,t,n);break e;case 11:e=Jf(null,e,i,t,n);break e;case 14:e=eh(null,e,i,Pn(i.type,t),n);break e}throw Error(ne(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Pn(i,r),Ru(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Pn(i,r),th(t,e,i,r,n);case 3:e:{if(Ug(e),t===null)throw Error(ne(387));i=e.pendingProps,s=e.memoizedState,r=s.element,og(t,e),tl(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=_s(Error(ne(423)),e),e=nh(t,e,i,n,r);break e}else if(i!==r){r=_s(Error(ne(424)),e),e=nh(t,e,i,n,r);break e}else for(fn=Oi(e.stateNode.containerInfo.firstChild),hn=e,ot=!0,Un=null,n=sg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ms(),i===r){e=pi(t,e,n);break e}Xt(t,e,i,n)}e=e.child}return e;case 5:return lg(e),t===null&&Eu(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,_u(i,r)?a=null:s!==null&&_u(i,s)&&(e.flags|=32),Dg(t,e),Xt(t,e,a,n),e.child;case 6:return t===null&&Eu(e),null;case 13:return Ig(t,e,n);case 4:return Td(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=gs(e,null,i,n):Xt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Pn(i,r),Jf(t,e,i,r,n);case 7:return Xt(t,e,e.pendingProps,n),e.child;case 8:return Xt(t,e,e.pendingProps.children,n),e.child;case 12:return Xt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,nt(Jo,i._currentValue),i._currentValue=a,s!==null)if(Hn(s.value,a)){if(s.children===r.children&&!en.current){e=pi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=ci(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),wu(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ne(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),wu(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Xt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,cs(e,n),r=An(r),i=i(r),e.flags|=1,Xt(t,e,i,n),e.child;case 14:return i=e.type,r=Pn(i,e.pendingProps),r=Pn(i.type,r),eh(t,e,i,r,n);case 15:return Ng(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Pn(i,r),Io(t,e),e.tag=1,tn(i)?(t=!0,Ko(e)):t=!1,cs(e,n),Rg(e,i,r),Au(e,i,r,n),bu(null,e,i,!0,t,n);case 19:return Fg(t,e,n);case 22:return Pg(t,e,n)}throw Error(ne(156,e.tag))};function Qg(t,e){return Tm(t,e)}function vx(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wn(t,e,n,i){return new vx(t,e,n,i)}function Bd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function _x(t){if(typeof t=="function")return Bd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===sd)return 11;if(t===ad)return 14}return 2}function Hi(t,e){var n=t.alternate;return n===null?(n=wn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ko(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Bd(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Xr:return hr(n.children,r,s,e);case rd:a=8,r|=8;break;case Kc:return t=wn(12,n,e,r|2),t.elementType=Kc,t.lanes=s,t;case Zc:return t=wn(13,n,e,r),t.elementType=Zc,t.lanes=s,t;case Qc:return t=wn(19,n,e,r),t.elementType=Qc,t.lanes=s,t;case lm:return Ll(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case am:a=10;break e;case om:a=9;break e;case sd:a=11;break e;case ad:a=14;break e;case Ti:a=16,i=null;break e}throw Error(ne(130,t==null?t:typeof t,""))}return e=wn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function hr(t,e,n,i){return t=wn(7,t,i,e),t.lanes=n,t}function Ll(t,e,n,i){return t=wn(22,t,i,e),t.elementType=lm,t.lanes=n,t.stateNode={isHidden:!1},t}function mc(t,e,n){return t=wn(6,t,null,e),t.lanes=n,t}function gc(t,e,n){return e=wn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function xx(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Kl(0),this.expirationTimes=Kl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Kl(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Hd(t,e,n,i,r,s,a,o,l){return t=new xx(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=wn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},wd(s),t}function yx(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Wr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Jg(t){if(!t)return Xi;t=t._reactInternals;e:{if(Ar(t)!==t||t.tag!==1)throw Error(ne(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(tn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ne(171))}if(t.tag===1){var n=t.type;if(tn(n))return Jm(t,n,e)}return e}function ev(t,e,n,i,r,s,a,o,l){return t=Hd(n,i,!0,t,r,s,a,o,l),t.context=Jg(null),n=t.current,i=qt(),r=Bi(n),s=ci(i,r),s.callback=e??null,ki(n,s,r),t.current.lanes=r,Ca(t,r,i),nn(t,i),t}function Nl(t,e,n,i){var r=e.current,s=qt(),a=Bi(r);return n=Jg(n),e.context===null?e.context=n:e.pendingContext=n,e=ci(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=ki(r,e,a),t!==null&&(zn(t,r,a,s),Po(t,r,a)),a}function cl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function fh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Gd(t,e){fh(t,e),(t=t.alternate)&&fh(t,e)}function Sx(){return null}var tv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Vd(t){this._internalRoot=t}Pl.prototype.render=Vd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ne(409));Nl(t,e,null,null)};Pl.prototype.unmount=Vd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Mr(function(){Nl(null,t,null,null)}),e[fi]=null}};function Pl(t){this._internalRoot=t}Pl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Pm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ci.length&&e!==0&&e<Ci[n].priority;n++);Ci.splice(n,0,t),n===0&&Um(t)}};function jd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Dl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function hh(){}function Mx(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=cl(a);s.call(c)}}var a=ev(e,i,t,0,null,!1,!1,"",hh);return t._reactRootContainer=a,t[fi]=a.current,pa(t.nodeType===8?t.parentNode:t),Mr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=cl(l);o.call(c)}}var l=Hd(t,0,!1,null,null,!1,!1,"",hh);return t._reactRootContainer=l,t[fi]=l.current,pa(t.nodeType===8?t.parentNode:t),Mr(function(){Nl(e,l,n,i)}),l}function Ul(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=cl(a);o.call(l)}}Nl(e,a,t,r)}else a=Mx(n,e,t,r,i);return cl(a)}Lm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Xs(e.pendingLanes);n!==0&&(cd(e,n|1),nn(e,gt()),!(Ye&6)&&(xs=gt()+500,Ki()))}break;case 13:Mr(function(){var i=hi(t,1);if(i!==null){var r=qt();zn(i,t,1,r)}}),Gd(t,1)}};ud=function(t){if(t.tag===13){var e=hi(t,134217728);if(e!==null){var n=qt();zn(e,t,134217728,n)}Gd(t,134217728)}};Nm=function(t){if(t.tag===13){var e=Bi(t),n=hi(t,e);if(n!==null){var i=qt();zn(n,t,e,i)}Gd(t,e)}};Pm=function(){return qe};Dm=function(t,e){var n=qe;try{return qe=t,e()}finally{qe=n}};lu=function(t,e,n){switch(e){case"input":if(tu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=wl(i);if(!r)throw Error(ne(90));um(i),tu(i,r)}}}break;case"textarea":fm(t,n);break;case"select":e=n.value,e!=null&&ss(t,!!n.multiple,e,!1)}};xm=Od;ym=Mr;var Ex={usingClientEntryPoint:!1,Events:[ba,Kr,wl,vm,_m,Od]},zs={findFiberByHostInstance:cr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},wx={bundleType:zs.bundleType,version:zs.version,rendererPackageName:zs.rendererPackageName,rendererConfig:zs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:gi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Em(t),t===null?null:t.stateNode},findFiberByHostInstance:zs.findFiberByHostInstance||Sx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ja=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ja.isDisabled&&Ja.supportsFiber)try{yl=Ja.inject(wx),Yn=Ja}catch{}}gn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ex;gn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!jd(e))throw Error(ne(200));return yx(t,e,null,n)};gn.createRoot=function(t,e){if(!jd(t))throw Error(ne(299));var n=!1,i="",r=tv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Hd(t,1,!1,null,null,n,!1,i,r),t[fi]=e.current,pa(t.nodeType===8?t.parentNode:t),new Vd(e)};gn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ne(188)):(t=Object.keys(t).join(","),Error(ne(268,t)));return t=Em(e),t=t===null?null:t.stateNode,t};gn.flushSync=function(t){return Mr(t)};gn.hydrate=function(t,e,n){if(!Dl(e))throw Error(ne(200));return Ul(null,t,e,!0,n)};gn.hydrateRoot=function(t,e,n){if(!jd(t))throw Error(ne(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=tv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=ev(e,null,t,1,n??null,r,!1,s,a),t[fi]=e.current,pa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Pl(e)};gn.render=function(t,e,n){if(!Dl(e))throw Error(ne(200));return Ul(null,t,e,!1,n)};gn.unmountComponentAtNode=function(t){if(!Dl(t))throw Error(ne(40));return t._reactRootContainer?(Mr(function(){Ul(null,null,t,!1,function(){t._reactRootContainer=null,t[fi]=null})}),!0):!1};gn.unstable_batchedUpdates=Od;gn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Dl(n))throw Error(ne(200));if(t==null||t._reactInternals===void 0)throw Error(ne(38));return Ul(t,e,n,!1,i)};gn.version="18.3.1-next-f1338f8080-20240426";function nv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nv)}catch(t){console.error(t)}}nv(),nm.exports=gn;var Tx=nm.exports,ph=Tx;$c.createRoot=ph.createRoot,$c.hydrateRoot=ph.hydrateRoot;var mh="1.3.25";function iv(t,e,n){return Math.max(t,Math.min(e,n))}function Ax(t,e,n){return(1-n)*t+n*e}function Cx(t,e,n,i){return Ax(t,e,1-Math.exp(-n*i))}function Rx(t,e){return(t%e+e)%e}var bx=class{constructor(){_e(this,"isRunning",!1);_e(this,"value",0);_e(this,"from",0);_e(this,"to",0);_e(this,"currentTime",0);_e(this,"lerp");_e(this,"duration");_e(this,"easing");_e(this,"onUpdate")}advance(t){var n;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=t;const i=iv(0,this.currentTime/this.duration,1);e=i>=1;const r=e?1:this.easing(i);this.value=this.from+(this.to-this.from)*r}else this.lerp?(this.value=Cx(this.value,this.to,this.lerp*60,t),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),(n=this.onUpdate)==null||n.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(t,e,{lerp:n,duration:i,easing:r,onStart:s,onUpdate:a}){this.from=this.value=t,this.to=e,this.lerp=n,this.duration=i,this.easing=r,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=a}};function Lx(t,e){let n;return function(...i){clearTimeout(n),n=setTimeout(()=>{n=void 0,t.apply(this,i)},e)}}var Nx=class{constructor(t,e,{autoResize:n=!0,debounce:i=250}={}){_e(this,"width",0);_e(this,"height",0);_e(this,"scrollHeight",0);_e(this,"scrollWidth",0);_e(this,"debouncedResize");_e(this,"wrapperResizeObserver");_e(this,"contentResizeObserver");_e(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});_e(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});_e(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=t,this.content=e,n&&(this.debouncedResize=Lx(this.resize,i),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var t,e;(t=this.wrapperResizeObserver)==null||t.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},rv=class{constructor(){_e(this,"events",{})}emit(t,...e){var i;const n=this.events[t]||[];for(let r=0,s=n.length;r<s;r++)(i=n[r])==null||i.call(n,...e)}on(t,e){return this.events[t]?this.events[t].push(e):this.events[t]=[e],()=>{var n;this.events[t]=(n=this.events[t])==null?void 0:n.filter(i=>e!==i)}}off(t,e){var n;this.events[t]=(n=this.events[t])==null?void 0:n.filter(i=>e!==i)}destroy(){this.events={}}};const Px=100/6,_i={passive:!1};function gh(t,e){return t===1?Px:t===2?e:1}var Dx=class{constructor(t,e={wheelMultiplier:1,touchMultiplier:1}){_e(this,"touchStart",{x:0,y:0});_e(this,"lastDelta",{x:0,y:0});_e(this,"window",{width:0,height:0});_e(this,"emitter",new rv);_e(this,"onTouchStart",t=>{const{clientX:e,clientY:n}=t.targetTouches?t.targetTouches[0]:t;this.touchStart.x=e,this.touchStart.y=n,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:t})});_e(this,"onTouchMove",t=>{const{clientX:e,clientY:n}=t.targetTouches?t.targetTouches[0]:t,i=-(e-this.touchStart.x)*this.options.touchMultiplier,r=-(n-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=n,this.lastDelta={x:i,y:r},this.emitter.emit("scroll",{deltaX:i,deltaY:r,event:t})});_e(this,"onTouchEnd",t=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:t})});_e(this,"onWheel",t=>{let{deltaX:e,deltaY:n,deltaMode:i}=t;const r=gh(i,this.window.width),s=gh(i,this.window.height);e*=r,n*=s,e*=this.options.wheelMultiplier,n*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:n,event:t})});_e(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=t,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,_i),this.element.addEventListener("touchstart",this.onTouchStart,_i),this.element.addEventListener("touchmove",this.onTouchMove,_i),this.element.addEventListener("touchend",this.onTouchEnd,_i)}on(t,e){return this.emitter.on(t,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,_i),this.element.removeEventListener("touchstart",this.onTouchStart,_i),this.element.removeEventListener("touchmove",this.onTouchMove,_i),this.element.removeEventListener("touchend",this.onTouchEnd,_i)}};const vh=t=>Math.min(1,1.001-2**(-10*t));var Ux=class{constructor({wrapper:t=window,content:e=document.documentElement,eventsTarget:n=t,smoothWheel:i=!0,syncTouch:r=!1,syncTouchLerp:s=.075,touchInertiaExponent:a=1.7,duration:o,easing:l,lerp:c=.1,infinite:f=!1,orientation:h="vertical",gestureOrientation:d=h==="horizontal"?"both":"vertical",touchMultiplier:g=1,wheelMultiplier:_=1,autoResize:y=!0,prevent:m,virtualScroll:u,overscroll:x=!0,autoRaf:v=!1,anchors:S=!1,autoToggle:b=!1,allowNestedScroll:R=!1,__experimental__naiveDimensions:A=!1,naiveDimensions:F=A,stopInertiaOnNavigate:M=!1}={}){_e(this,"_isScrolling",!1);_e(this,"_isStopped",!1);_e(this,"_isLocked",!1);_e(this,"_preventNextNativeScrollEvent",!1);_e(this,"_resetVelocityTimeout",null);_e(this,"_rafId",null);_e(this,"_isDraggingSelection",!1);_e(this,"isTouching");_e(this,"isIos");_e(this,"time",0);_e(this,"userData",{});_e(this,"lastVelocity",0);_e(this,"velocity",0);_e(this,"direction",0);_e(this,"options");_e(this,"targetScroll");_e(this,"animatedScroll");_e(this,"animate",new bx);_e(this,"emitter",new rv);_e(this,"dimensions");_e(this,"virtualScroll");_e(this,"onScrollEnd",t=>{t instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&t.stopPropagation()});_e(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});_e(this,"onTransitionEnd",t=>{var e;(e=t.propertyName)!=null&&e.includes("overflow")&&t.target===this.rootElement&&this.checkOverflow()});_e(this,"onClick",t=>{const e=t.composedPath().filter(i=>i instanceof HTMLAnchorElement&&i.href).map(i=>new URL(i.href)),n=new URL(window.location.href);if(this.options.anchors){const i=e.find(r=>n.host===r.host&&n.pathname===r.pathname&&r.hash);if(i){const r=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=decodeURIComponent(i.hash);this.scrollTo(s,r);return}}if(this.options.stopInertiaOnNavigate&&e.some(i=>n.host===i.host&&n.pathname!==i.pathname)){this.reset();return}});_e(this,"onPointerDown",t=>{t.button===1&&this.reset()});_e(this,"onVirtualScroll",t=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(t)===!1)return;const{deltaX:e,deltaY:n,event:i}=t;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:n,event:i}),i.ctrlKey||i.lenisStopPropagation)return;const r=i.type.includes("touch"),s=i.type.includes("wheel");if(r&&this.isIos&&(i.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(i)),this._isDraggingSelection)){i.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=i.type==="touchstart"||i.type==="touchmove";const a=e===0&&n===0;if(this.options.syncTouch&&r&&i.type==="touchstart"&&a&&!this.isStopped&&!this.isLocked){this.reset();return}const o=this.options.gestureOrientation==="vertical"&&n===0||this.options.gestureOrientation==="horizontal"&&e===0;if(a||o)return;let l=i.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const c=this.options.prevent,f=Math.abs(e)>=Math.abs(n)?"horizontal":"vertical";if(l.find(_=>{var y,m,u,x,v;return _ instanceof HTMLElement&&(typeof c=="function"&&(c==null?void 0:c(_))||((y=_.hasAttribute)==null?void 0:y.call(_,"data-lenis-prevent"))||f==="vertical"&&((m=_.hasAttribute)==null?void 0:m.call(_,"data-lenis-prevent-vertical"))||f==="horizontal"&&((u=_.hasAttribute)==null?void 0:u.call(_,"data-lenis-prevent-horizontal"))||r&&((x=_.hasAttribute)==null?void 0:x.call(_,"data-lenis-prevent-touch"))||s&&((v=_.hasAttribute)==null?void 0:v.call(_,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(_,{deltaX:e,deltaY:n}))}))return;if(this.isStopped||this.isLocked){i.cancelable&&i.preventDefault();return}if(!(this.options.syncTouch&&r||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),i.lenisStopPropagation=!0;return}let h=n;this.options.gestureOrientation==="both"?h=Math.abs(n)>Math.abs(e)?n:e:this.options.gestureOrientation==="horizontal"&&(h=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&n>0||this.animatedScroll===this.limit&&n<0))&&(i.lenisStopPropagation=!0),i.cancelable&&i.preventDefault();const d=r&&this.options.syncTouch,g=r&&i.type==="touchend";g&&(h=Math.sign(h)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+h,{programmatic:!1,...d?{lerp:g?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});_e(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const t=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-t,this.direction=Math.sign(this.animatedScroll-t),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});_e(this,"raf",t=>{const e=t-(this.time||t);this.time=t,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=mh,window.lenis||(window.lenis={}),window.lenis.version=mh,h==="horizontal"&&(window.lenis.horizontal=!0),r===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!t||t===document.documentElement)&&(t=window),typeof o=="number"&&typeof l!="function"?l=vh:typeof l=="function"&&typeof o!="number"&&(o=1),this.options={wrapper:t,content:e,eventsTarget:n,smoothWheel:i,syncTouch:r,syncTouchLerp:s,touchInertiaExponent:a,duration:o,easing:l,lerp:c,infinite:f,gestureOrientation:d,orientation:h,touchMultiplier:g,wheelMultiplier:_,autoResize:y,prevent:m,virtualScroll:u,overscroll:x,autoRaf:v,anchors:S,autoToggle:b,allowNestedScroll:R,naiveDimensions:F,stopInertiaOnNavigate:M},this.dimensions=new Nx(t,e,{autoResize:y}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new Dx(n,{touchMultiplier:g,wheelMultiplier:_}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(t,e){return this.emitter.on(t,e)}off(t,e){return this.emitter.off(t,e)}get overflow(){const t=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[t]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(t){this.isHorizontal?this.options.wrapper.scrollTo({left:t,behavior:"instant"}):this.options.wrapper.scrollTo({top:t,behavior:"instant"})}isTouchOnSelectionHandle(t){const e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;const n=t.targetTouches[0]??t.changedTouches[0];if(!n)return!1;const i=e.getRangeAt(0).getClientRects();if(i.length===0)return!1;const r=i[0],s=i[i.length-1],a=40,o=Math.hypot(n.clientX-r.left,n.clientY-r.top)<=a,l=Math.hypot(n.clientX-s.right,n.clientY-s.bottom)<=a;return o||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(t,{offset:e=0,immediate:n=!1,lock:i=!1,programmatic:r=!0,lerp:s=r?this.options.lerp:void 0,duration:a=r?this.options.duration:void 0,easing:o=r?this.options.easing:void 0,onStart:l,onComplete:c,force:f=!1,userData:h}={}){if((this.isStopped||this.isLocked)&&!f)return;let d=t,g=e;if(typeof d=="string"&&["top","left","start","#"].includes(d))d=0;else if(typeof d=="string"&&["bottom","right","end"].includes(d))d=this.limit;else{let _=null;if(typeof d=="string"?(_=d.startsWith("#")?document.getElementById(d.slice(1)):document.querySelector(d),_||(d==="#top"?d=0:console.warn("Lenis: Target not found",d))):d instanceof HTMLElement&&(d!=null&&d.nodeType)&&(_=d),_){if(this.options.wrapper!==window){const S=this.rootElement.getBoundingClientRect();g-=this.isHorizontal?S.left:S.top}const y=_.getBoundingClientRect(),m=getComputedStyle(_),u=this.isHorizontal?Number.parseFloat(m.scrollMarginLeft):Number.parseFloat(m.scrollMarginTop),x=getComputedStyle(this.rootElement),v=this.isHorizontal?Number.parseFloat(x.scrollPaddingLeft):Number.parseFloat(x.scrollPaddingTop);d=(this.isHorizontal?y.left:y.top)+this.animatedScroll-(Number.isNaN(u)?0:u)-(Number.isNaN(v)?0:v)}}if(typeof d=="number"){if(d+=g,this.options.infinite){if(r){this.targetScroll=this.animatedScroll=this.scroll;const _=d-this.animatedScroll;_>this.limit/2?d-=this.limit:_<-this.limit/2&&(d+=this.limit)}}else d=iv(0,d,this.limit);if(d===this.targetScroll){l==null||l(this),c==null||c(this);return}if(this.userData=h??{},n){this.animatedScroll=this.targetScroll=d,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}r||(this.targetScroll=d),typeof a=="number"&&typeof o!="function"?o=vh:typeof o=="function"&&typeof a!="number"&&(a=1),this.animate.fromTo(this.animatedScroll,d,{duration:a,easing:o,lerp:s,onStart:()=>{i&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(_,y)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=_-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=_,this.setScroll(this.scroll),r&&(this.targetScroll=_),y||this.emit(),y&&(this.reset(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(t,{deltaX:e,deltaY:n}){const i=Date.now();t._lenis||(t._lenis={});const r=t._lenis;let s,a,o,l,c,f,h,d,g,_;if(i-(r.time??0)>2e3){r.time=Date.now();const R=window.getComputedStyle(t);if(r.computedStyle=R,s=["auto","overlay","scroll"].includes(R.overflowX),a=["auto","overlay","scroll"].includes(R.overflowY),c=["auto"].includes(R.overscrollBehaviorX),f=["auto"].includes(R.overscrollBehaviorY),r.hasOverflowX=s,r.hasOverflowY=a,!(s||a))return!1;h=t.scrollWidth,d=t.scrollHeight,g=t.clientWidth,_=t.clientHeight,o=h>g,l=d>_,r.isScrollableX=o,r.isScrollableY=l,r.scrollWidth=h,r.scrollHeight=d,r.clientWidth=g,r.clientHeight=_,r.hasOverscrollBehaviorX=c,r.hasOverscrollBehaviorY=f}else o=r.isScrollableX,l=r.isScrollableY,s=r.hasOverflowX,a=r.hasOverflowY,h=r.scrollWidth,d=r.scrollHeight,g=r.clientWidth,_=r.clientHeight,c=r.hasOverscrollBehaviorX,f=r.hasOverscrollBehaviorY;if(!(s&&o||a&&l))return!1;const y=Math.abs(e)>=Math.abs(n)?"horizontal":"vertical";let m,u,x,v,S,b;if(y==="horizontal")m=Math.round(t.scrollLeft),u=h-g,x=e,v=s,S=o,b=c;else if(y==="vertical")m=Math.round(t.scrollTop),u=d-_,x=n,v=a,S=l,b=f;else return!1;return!b&&(m>=u||m<=0)?!0:(x>0?m<u:m>0)&&v&&S}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const t=this.options.wrapper;return this.isHorizontal?t.scrollX??t.scrollLeft:t.scrollY??t.scrollTop}get scroll(){return this.options.infinite?Rx(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(t){this._isScrolling!==t&&(this._isScrolling=t,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(t){this._isStopped!==t&&(this._isStopped=t,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(t){this._isLocked!==t&&(this._isLocked=t,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let t="lenis";return this.options.autoToggle&&(t+=" lenis-autoToggle"),this.isStopped&&(t+=" lenis-stopped"),this.isLocked&&(t+=" lenis-locked"),this.isScrolling&&(t+=" lenis-scrolling"),this.isScrolling==="smooth"&&(t+=" lenis-smooth"),t}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(t=>{this.rootElement.classList.add(t)})}cleanUpClassName(){for(const t of Array.from(this.rootElement.classList))(t==="lenis"||t.startsWith("lenis-"))&&this.rootElement.classList.remove(t)}};function Ix(){const t=ge.useRef(null);return ge.useEffect(()=>{const e=t.current;if(!e)return;const n=e.getContext("2d");if(!n)return;let i,r=e.width=window.innerWidth,s=e.height=window.innerHeight;const a={x:-1e3,y:-1e3,targetX:-1e3,targetY:-1e3,radius:150};let o=[];const l=M=>{a.targetX=M.clientX,a.targetY=M.clientY},c=()=>{a.targetX=-1e3,a.targetY=-1e3},f=M=>{M.target.tagName==="A"||M.target.tagName==="BUTTON"||M.target.closest("a")||M.target.closest("button")||M.target.closest("input")||M.target.closest("textarea")||M.target.closest(".user-profile-badge")||M.target.closest(".settings-toggle")||o.push({x:M.clientX,y:M.clientY+window.scrollY,radius:0,maxRadius:380,speed:9,force:110,width:65})},h=M=>{if(M.touches.length>0){const w=M.touches[0];a.targetX=w.clientX,a.targetY=w.clientY;const U=document.elementFromPoint(w.clientX,w.clientY);if(U&&(U.tagName==="A"||U.tagName==="BUTTON"||U.closest("a")||U.closest("button")||U.closest("input")||U.closest("textarea")||U.closest(".user-profile-badge")||U.closest(".settings-toggle")))return;o.push({x:w.clientX,y:w.clientY+window.scrollY,radius:0,maxRadius:280,speed:8,force:90,width:50})}},d=M=>{if(M.touches.length>0){const w=M.touches[0];a.targetX=w.clientX,a.targetY=w.clientY}},g=()=>{a.targetX=-1e3,a.targetY=-1e3};window.addEventListener("mousemove",l),window.addEventListener("mouseleave",c),window.addEventListener("mousedown",f),window.addEventListener("touchstart",h,{passive:!0}),window.addEventListener("touchmove",d,{passive:!0}),window.addEventListener("touchend",g,{passive:!0});let _=[];const y=40;let m=Math.ceil(r/y)+1,u=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight,window.innerHeight),x=Math.ceil(u/y)+1;const v=()=>{r=e.width=window.innerWidth,s=e.height=window.innerHeight,u=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight,window.innerHeight),m=Math.ceil(r/y)+1,x=Math.ceil(u/y)+1,_=[];for(let M=0;M<x;M++)for(let w=0;w<m;w++){const U=w*y-(m*y-r)/2,$=M*y;_.push({homeX:U,homeY:$,x:U+(Math.random()-.5)*8,y:$+(Math.random()-.5)*8,vx:0,vy:0,radius:1.5+Math.random()*.7,activation:0})}};v(),window.addEventListener("resize",v);let S=0;const b=.045,R=.88,A=48,F=()=>{S+=1,n.clearRect(0,0,r,s);const M=window.scrollY;if(S%100===0){const L=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight,window.innerHeight);Math.abs(L-u)>100&&v()}let w=-1e3,U=-1e3;a.targetX===-1e3?(a.x+=(-1e3-a.x)*.1,a.y+=(-1e3-a.y)*.1):(a.x+=(a.targetX-a.x)*.18,a.y+=(a.targetY-a.y)*.18,w=a.x,U=a.y+M),o.forEach(L=>{L.radius+=L.speed}),o=o.filter(L=>L.radius<L.maxRadius),_.forEach(L=>{const z=Math.sin(S*.015+L.homeY*.008)*2.5,Y=Math.cos(S*.012+L.homeX*.008)*2.5;let K=0,N=0;if(w!==-1e3){const O=L.x-w,Z=L.y-U,B=Math.sqrt(O*O+Z*Z);if(B<a.radius){const Q=(a.radius-B)/a.radius,se=Math.pow(Q,1.5),J=Math.atan2(Z,O);K=Math.cos(J)*se*A,N=Math.sin(J)*se*A,L.activation=Math.max(L.activation,Q)}else L.activation*=.94}else L.activation*=.94;o.forEach(O=>{const Z=L.x-O.x,B=L.y-O.y,Q=Math.sqrt(Z*Z+B*B),se=Math.abs(Q-O.radius);if(se<O.width){const J=1-se/O.width,le=1-O.radius/O.maxRadius,xe=J*le,be=Math.atan2(B,Z),Me=xe*O.force*.12;L.vx+=Math.cos(be)*Me,L.vy+=Math.sin(be)*Me,L.activation=Math.max(L.activation,xe*.85)}});const D=L.homeX+K+z,k=L.homeY+N+Y;L.vx+=(D-L.x)*b,L.vy+=(k-L.y)*b,L.vx*=R,L.vy*=R,L.x+=L.vx,L.y+=L.vy}),n.lineWidth=.8;const $=Math.max(0,Math.floor((M-80)/y)),q=Math.min(x,Math.ceil((M+s+80)/y));for(let L=$;L<q;L++)for(let z=0;z<m;z++){const Y=L*m+z,K=_[Y];if(!K)continue;const N=K.x,D=K.y-M;if(z<m-1){const se=L*m+(z+1),J=_[se];if(J){const le=Math.max(K.activation,J.activation),xe=.08+le*.16;le>.01?n.strokeStyle=`hsla(${265-le*85}, 80%, 60%, ${xe})`:n.strokeStyle=`rgba(139, 92, 246, ${xe})`,n.beginPath(),n.moveTo(N,D),n.lineTo(J.x,J.y-M),n.stroke()}}if(L<x-1){const se=(L+1)*m+z,J=_[se];if(J){const le=Math.max(K.activation,J.activation),xe=.08+le*.16;le>.01?n.strokeStyle=`hsla(${265-le*85}, 80%, 60%, ${xe})`:n.strokeStyle=`rgba(139, 92, 246, ${xe})`,n.beginPath(),n.moveTo(N,D),n.lineTo(J.x,J.y-M),n.stroke()}}const k=265-K.activation*85,O=55+K.activation*45,Z=48+K.activation*22,B=.32+K.activation*.55,Q=K.radius+K.activation*1.6;K.activation>.05&&(n.fillStyle=`hsla(${k}, ${O}%, ${Z}%, ${K.activation*.12})`,n.beginPath(),n.arc(N,D,Q*3.5,0,Math.PI*2),n.fill()),n.fillStyle=`hsla(${k}, ${O}%, ${Z}%, ${B})`,n.beginPath(),n.arc(N,D,Q,0,Math.PI*2),n.fill()}i=requestAnimationFrame(F)};return F(),()=>{cancelAnimationFrame(i),window.removeEventListener("mousemove",l),window.removeEventListener("mouseleave",c),window.removeEventListener("mousedown",f),window.removeEventListener("touchstart",h),window.removeEventListener("touchmove",d),window.removeEventListener("touchend",g),window.removeEventListener("resize",v)}},[]),p.jsx("canvas",{ref:t,className:"interactive-dots-canvas"})}const Fx={},_h=t=>{let e;const n=new Set,i=(f,h)=>{const d=typeof f=="function"?f(e):f;if(!Object.is(d,e)){const g=e;e=h??(typeof d!="object"||d===null)?d:Object.assign({},e,d),n.forEach(_=>_(e,g))}},r=()=>e,l={setState:i,getState:r,getInitialState:()=>c,subscribe:f=>(n.add(f),()=>n.delete(f)),destroy:()=>{(Fx?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},c=e=t(i,r,l);return l},Ox=t=>t?_h(t):_h;var sv={exports:{}},av={},ov={exports:{}},lv={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ys=ge;function kx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var zx=typeof Object.is=="function"?Object.is:kx,Bx=ys.useState,Hx=ys.useEffect,Gx=ys.useLayoutEffect,Vx=ys.useDebugValue;function jx(t,e){var n=e(),i=Bx({inst:{value:n,getSnapshot:e}}),r=i[0].inst,s=i[1];return Gx(function(){r.value=n,r.getSnapshot=e,vc(r)&&s({inst:r})},[t,n,e]),Hx(function(){return vc(r)&&s({inst:r}),t(function(){vc(r)&&s({inst:r})})},[t]),Vx(n),n}function vc(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!zx(t,n)}catch{return!0}}function Wx(t,e){return e()}var Xx=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?Wx:jx;lv.useSyncExternalStore=ys.useSyncExternalStore!==void 0?ys.useSyncExternalStore:Xx;ov.exports=lv;var Yx=ov.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Il=ge,$x=Yx;function qx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Kx=typeof Object.is=="function"?Object.is:qx,Zx=$x.useSyncExternalStore,Qx=Il.useRef,Jx=Il.useEffect,ey=Il.useMemo,ty=Il.useDebugValue;av.useSyncExternalStoreWithSelector=function(t,e,n,i,r){var s=Qx(null);if(s.current===null){var a={hasValue:!1,value:null};s.current=a}else a=s.current;s=ey(function(){function l(g){if(!c){if(c=!0,f=g,g=i(g),r!==void 0&&a.hasValue){var _=a.value;if(r(_,g))return h=_}return h=g}if(_=h,Kx(f,g))return _;var y=i(g);return r!==void 0&&r(_,y)?(f=g,_):(f=g,h=y)}var c=!1,f,h,d=n===void 0?null:n;return[function(){return l(e())},d===null?void 0:function(){return l(d())}]},[e,n,i,r]);var o=Zx(t,s[0],s[1]);return Jx(function(){a.hasValue=!0,a.value=o},[o]),ty(o),o};sv.exports=av;var ny=sv.exports;const iy=Vp(ny),cv={},{useDebugValue:ry}=em,{useSyncExternalStoreWithSelector:sy}=iy;let xh=!1;const ay=t=>t;function oy(t,e=ay,n){(cv?"production":void 0)!=="production"&&n&&!xh&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),xh=!0);const i=sy(t.subscribe,t.getState,t.getServerState||t.getInitialState,e,n);return ry(i),i}const yh=t=>{(cv?"production":void 0)!=="production"&&typeof t!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const e=typeof t=="function"?Ox(t):t,n=(i,r)=>oy(e,i,r);return Object.assign(n,e),n},uv=t=>t?yh(t):yh,un=[{id:"avatar-1",colors:["#ff416c","#ff4b2b"],name:"Crimson Sunset"},{id:"avatar-2",colors:["#a855f7","#3b82f6"],name:"Nebula Cyber"},{id:"avatar-3",colors:["#10b981","#059669"],name:"Teal Forest"},{id:"avatar-4",colors:["#f59e0b","#e11d48"],name:"Solar Flare"},{id:"avatar-5",colors:["#ec4899","#8b5cf6"],name:"Cosmic Fuchsia"},{id:"avatar-6",colors:["#06b6d4","#3b82f6"],name:"Cyan Ocean"}],ul=t=>{const e=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100"><defs><linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:${t[0]};stop-opacity:1" /><stop offset="100%" style="stop-color:${t[1]};stop-opacity:1" /></linearGradient></defs><circle cx="50" cy="50" r="50" fill="url(#grad)" /></svg>`;return`data:image/svg+xml;utf8,${encodeURIComponent(e)}`},pr=uv(t=>({user:null,isLoggedIn:!1,login:(e,n,i)=>t({isLoggedIn:!0,user:{email:e,name:n,avatar:i||ul(un[0].colors)}}),logout:()=>t({isLoggedIn:!1,user:null})}));function ly({isOpen:t,onClose:e}){var $;const[n,i]=ge.useState(1),[r,s]=ge.useState(""),[a,o]=ge.useState(""),[l,c]=ge.useState(""),[f,h]=ge.useState(un[0].id),[d,g]=ge.useState({}),[_,y]=ge.useState(""),[m,u]=ge.useState(""),[x,v]=ge.useState("Cloud Sandbox"),[S,b]=ge.useState(""),R=pr(q=>q.isLoggedIn),A=pr(q=>q.user),F=pr(q=>q.login),M=ge.useRef(null);ge.useEffect(()=>{if(!t){const q=setTimeout(()=>{i(1),s(""),o(""),c(""),h(un[0].id),g({}),u(""),v("Cloud Sandbox"),b("")},500);return()=>clearTimeout(q)}},[t]),ge.useEffect(()=>{const q=L=>{t&&M.current&&!M.current.contains(L.target)&&L.target.classList.contains("project-sidebar-overlay")&&e()};return document.addEventListener("mousedown",q),()=>document.removeEventListener("mousedown",q)},[t,e]);const w=q=>{q.preventDefault();const L={};if(r.trim()||(L.name="Full name is required"),a?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a)||(L.email="Please enter a valid email"):L.email="Email address is required",l?l.length<6&&(L.password="Password must be at least 6 characters"):L.password="Password is required",Object.keys(L).length>0){g(L);return}g({}),i(2),y("Connecting to secure auth gateway..."),setTimeout(()=>{y("Creating secure developer profile...")},600),setTimeout(()=>{y("Syncing custom avatar identity...")},1200),setTimeout(()=>{const Y=un.find(N=>N.id===f)||un[0],K=ul(Y.colors);F(a,r.trim(),K),i(3)},1800)},U=q=>{q.preventDefault();const L={};if(m.trim()||(L.projectName="Project name is required"),Object.keys(L).length>0){g(L);return}g({}),i(2),y("Provisioning secure cloud sandbox..."),fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({access_key:"6b251218-8d3a-4b5f-8227-259b0c552263",subject:`🚀 New QIX Project Request: ${m}`,from_name:"QIX Technologies Gateway",client_name:A?A.name:"Authorized Client",client_email:A?A.email:"Authorized Email",workspace_name:`qix-sandbox-${m.toLowerCase().replace(/\s+/g,"-")}`,engine_type:x,notes:S||"No description notes provided."})}).catch(z=>console.error("Failed to dispatch project notification:",z)),setTimeout(()=>{y(`Deploying cluster context: sandbox-${m.toLowerCase().replace(/\s+/g,"-")}`)},700),setTimeout(()=>{y("Registering project details with lead architect...")},1400),setTimeout(()=>{i(3)},2100)};return p.jsx("div",{className:`project-sidebar-overlay ${t?"open":""}`,children:p.jsxs("div",{ref:M,className:`project-sidebar ${t?"open":""}`,children:[p.jsx("button",{className:"project-sidebar-close",onClick:e,"aria-label":"Close sidebar",children:p.jsx("svg",{viewBox:"0 0 24 24",width:"24",height:"24",children:p.jsx("path",{d:"M18 6 6 18M6 6l12 12",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),p.jsxs("div",{className:"project-sidebar-inner",children:[n===1&&p.jsx(p.Fragment,{children:R?p.jsxs("div",{className:"sidebar-step-container",children:[p.jsxs("div",{className:"sidebar-profile-header",children:[p.jsx("img",{className:"sidebar-profile-avatar",src:A.avatar,alt:A.name}),p.jsxs("div",{children:[p.jsx("h4",{className:"sidebar-profile-name",children:A.name}),p.jsx("p",{className:"sidebar-profile-email",children:A.email})]})]}),p.jsx("h3",{className:"sidebar-title font-instrument",style:{marginTop:"20px"},children:"New Workspace"}),p.jsx("p",{className:"sidebar-subtitle",children:"Configure and launch a new sandbox environment associated with your developer profile."}),p.jsxs("form",{onSubmit:U,className:"sidebar-form",children:[p.jsxs("div",{className:"input-group",children:[p.jsx("label",{htmlFor:"proj-name",children:"Workspace Name"}),p.jsx("input",{type:"text",id:"proj-name",placeholder:"my-quantum-engine",value:m,onChange:q=>u(q.target.value),className:d.projectName?"input-error":""}),d.projectName&&p.jsx("span",{className:"error-message-text",children:d.projectName})]}),p.jsxs("div",{className:"input-group",children:[p.jsx("label",{htmlFor:"proj-type",children:"Environment Engine"}),p.jsxs("select",{id:"proj-type",value:x,onChange:q=>v(q.target.value),style:{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"12px",padding:"14px 18px",color:"#fff",fontSize:"14px",fontFamily:"inherit",width:"100%",outline:"none",cursor:"pointer"},children:[p.jsx("option",{value:"Cloud Sandbox",style:{background:"#0a0a0f"},children:"Cloud Sandbox (General)"}),p.jsx("option",{value:"Quantum Engine",style:{background:"#0a0a0f"},children:"Quantum Simulator Node"}),p.jsx("option",{value:"AI Synthesis Node",style:{background:"#0a0a0f"},children:"AI LLM Training Kernel"})]})]}),p.jsxs("div",{className:"input-group",children:[p.jsx("label",{htmlFor:"proj-notes",children:"Deployment Notes"}),p.jsx("textarea",{id:"proj-notes",placeholder:"Briefly outline your architectural goals...",rows:"3",value:S,onChange:q=>b(q.target.value),style:{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"12px",padding:"14px 18px",color:"#fff",fontSize:"14px",fontFamily:"inherit",width:"100%",outline:"none",resize:"none"}})]}),p.jsx("button",{type:"submit",className:"sidebar-submit-btn",style:{marginTop:"16px"},children:p.jsxs("span",{className:"btn-content-inner",children:[p.jsxs("span",{className:"btn-slide-item",children:[p.jsx("span",{children:"Launch Sandbox"}),p.jsx("svg",{className:"btn-arrow",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:p.jsx("path",{d:"M3 8h10M9 4l4 4-4 4"})})]}),p.jsxs("span",{className:"btn-slide-item btn-slide-item-hover",children:[p.jsx("span",{children:"Launch Sandbox"}),p.jsx("svg",{className:"btn-arrow",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:p.jsx("path",{d:"M3 8h10M9 4l4 4-4 4"})})]})]})})]})]}):p.jsxs("div",{className:"sidebar-step-container",children:[p.jsx("div",{className:"sidebar-decor-icon",children:"✦"}),p.jsx("h3",{className:"sidebar-title font-instrument",children:"Establish Identity"}),p.jsx("p",{className:"sidebar-subtitle",children:"Create your developer profile and choose an avatar to authorize secure connections."}),p.jsxs("form",{onSubmit:w,className:"sidebar-form",children:[p.jsxs("div",{className:"input-group",children:[p.jsx("label",{htmlFor:"auth-name",children:"Full Name"}),p.jsx("input",{type:"text",id:"auth-name",placeholder:"Alex Rivera",value:r,onChange:q=>s(q.target.value),className:d.name?"input-error":""}),d.name&&p.jsx("span",{className:"error-message-text",children:d.name})]}),p.jsxs("div",{className:"input-group",children:[p.jsx("label",{htmlFor:"auth-email",children:"Email Address"}),p.jsx("input",{type:"email",id:"auth-email",placeholder:"alex@gmail.com",value:a,onChange:q=>o(q.target.value),className:d.email?"input-error":""}),d.email&&p.jsx("span",{className:"error-message-text",children:d.email})]}),p.jsxs("div",{className:"input-group",children:[p.jsx("label",{children:"Choose Avatar Identity"}),p.jsx("div",{className:"avatar-selection-grid",style:{marginTop:"8px",marginBottom:"8px"},children:un.map(q=>{const L={background:`linear-gradient(135deg, ${q.colors[0]} 0%, ${q.colors[1]} 100%)`};return p.jsx("button",{type:"button",className:`avatar-option-btn ${f===q.id?"active":""}`,style:L,onClick:()=>h(q.id),"aria-label":q.name,title:q.name},q.id)})})]}),p.jsxs("div",{className:"input-group",children:[p.jsx("label",{htmlFor:"auth-pass",children:"Password"}),p.jsx("input",{type:"password",id:"auth-pass",placeholder:"••••••••",value:l,onChange:q=>c(q.target.value),className:d.password?"input-error":""}),d.password&&p.jsx("span",{className:"error-message-text",children:d.password})]}),p.jsx("button",{type:"submit",className:"sidebar-submit-btn",children:p.jsxs("span",{className:"btn-content-inner",children:[p.jsxs("span",{className:"btn-slide-item",children:[p.jsx("span",{children:"Create Account"}),p.jsx("svg",{className:"btn-arrow",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:p.jsx("path",{d:"M3 8h10M9 4l4 4-4 4"})})]}),p.jsxs("span",{className:"btn-slide-item btn-slide-item-hover",children:[p.jsx("span",{children:"Create Account"}),p.jsx("svg",{className:"btn-arrow",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:p.jsx("path",{d:"M3 8h10M9 4l4 4-4 4"})})]})]})})]})]})}),n===2&&p.jsxs("div",{className:"sidebar-step-container sidebar-loading-container",children:[p.jsxs("div",{className:"loading-spinner-wrap",children:[p.jsx("div",{className:"pulse-loader-ring"}),p.jsx("div",{className:"pulse-loader-core"})]}),p.jsx("h4",{className:"loading-title",children:"Establishing Connection"}),p.jsx("p",{className:"loading-subtitle",children:_})]}),n===3&&p.jsx(p.Fragment,{children:m?p.jsxs("div",{className:"sidebar-step-container sidebar-success-container",children:[p.jsx("div",{className:"success-icon-wrap",children:p.jsx("svg",{viewBox:"0 0 24 24",width:"48",height:"48",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:p.jsx("polyline",{points:"20 6 9 17 4 12"})})}),p.jsx("h3",{className:"sidebar-title font-instrument",style:{marginTop:"24px"},children:"Project Initialized!"}),p.jsx("p",{className:"sidebar-subtitle",children:"Your sandbox environment has been successfully provisioned and is online."}),p.jsxs("div",{className:"success-details-card",children:[p.jsxs("div",{className:"success-details-row",children:[p.jsx("span",{children:"Workspace:"}),p.jsxs("strong",{children:["qix-sandbox-",m.toLowerCase().replace(/\s+/g,"-")]})]}),p.jsxs("div",{className:"success-details-row",children:[p.jsx("span",{children:"Engine:"}),p.jsx("strong",{children:x})]}),p.jsxs("div",{className:"success-details-row",children:[p.jsx("span",{children:"Status:"}),p.jsx("strong",{className:"status-badge-active",children:"Active"})]})]}),p.jsx("p",{className:"success-footer-text",children:"Our lead software architect will contact you within 30 minutes to schedule your technical consultation. Thank you for your trust!"}),p.jsx("button",{className:"sidebar-close-btn",onClick:e,children:"Close Panel"})]}):p.jsxs("div",{className:"sidebar-step-container sidebar-success-container",children:[p.jsx("div",{className:"success-icon-wrap",children:p.jsx("svg",{viewBox:"0 0 24 24",width:"48",height:"48",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:p.jsx("polyline",{points:"20 6 9 17 4 12"})})}),p.jsx("h3",{className:"sidebar-title font-instrument",style:{marginTop:"24px"},children:"Access Granted!"}),p.jsxs("p",{className:"sidebar-subtitle",children:["Developer profile ",p.jsx("strong",{children:r})," has been successfully authorized and registered locally."]}),p.jsxs("div",{className:"success-details-card",children:[p.jsxs("div",{className:"success-details-row",style:{alignItems:"center"},children:[p.jsx("span",{children:"Identity:"}),p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[p.jsx("img",{className:"sidebar-profile-avatar",src:ul((($=un.find(q=>q.id===f))==null?void 0:$.colors)||un[0].colors),alt:r,style:{width:"24px",height:"24px",margin:0}}),p.jsx("strong",{children:r})]})]}),p.jsxs("div",{className:"success-details-row",children:[p.jsx("span",{children:"Access:"}),p.jsx("strong",{className:"status-badge-active",children:"Authorized"})]})]}),p.jsx("p",{className:"success-footer-text",style:{marginBottom:"24px"},children:"You can now proceed to initialize your first project workspace."}),p.jsx("button",{className:"sidebar-close-btn",onClick:()=>{i(1),g({})},style:{background:"#fff",color:"#0a0a0f",border:"none"},children:"Proceed to Workspace"})]})})]})]})})}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wd="160",cy=0,Sh=1,uy=2,dv=1,dy=2,ni=3,Yi=0,rn=1,si=2,Gi=0,ds=1,dl=2,Mh=3,Eh=4,fy=5,or=100,hy=101,py=102,wh=103,Th=104,my=200,gy=201,vy=202,_y=203,Hu=204,Gu=205,xy=206,yy=207,Sy=208,My=209,Ey=210,wy=211,Ty=212,Ay=213,Cy=214,Ry=0,by=1,Ly=2,fl=3,Ny=4,Py=5,Dy=6,Uy=7,fv=0,Iy=1,Fy=2,Vi=0,Oy=1,ky=2,zy=3,By=4,Hy=5,Gy=6,hv=300,Ss=301,Ms=302,Vu=303,ju=304,Fl=306,Wu=1e3,Fn=1001,Xu=1002,Yt=1003,Ah=1004,_c=1005,Mn=1006,Vy=1007,Ea=1008,ji=1009,jy=1010,Wy=1011,Xd=1012,pv=1013,Ni=1014,Pi=1015,wa=1016,mv=1017,gv=1018,mr=1020,Xy=1021,On=1023,Yy=1024,$y=1025,gr=1026,Es=1027,qy=1028,vv=1029,Ky=1030,_v=1031,xv=1033,xc=33776,yc=33777,Sc=33778,Mc=33779,Ch=35840,Rh=35841,bh=35842,Lh=35843,yv=36196,Nh=37492,Ph=37496,Dh=37808,Uh=37809,Ih=37810,Fh=37811,Oh=37812,kh=37813,zh=37814,Bh=37815,Hh=37816,Gh=37817,Vh=37818,jh=37819,Wh=37820,Xh=37821,Ec=36492,Yh=36494,$h=36495,Zy=36283,qh=36284,Kh=36285,Zh=36286,Sv=3e3,vr=3001,Qy=3200,Jy=3201,eS=0,tS=1,En="",Nt="srgb",mi="srgb-linear",Yd="display-p3",Ol="display-p3-linear",hl="linear",st="srgb",pl="rec709",ml="p3",Rr=7680,Qh=519,nS=512,iS=513,rS=514,Mv=515,sS=516,aS=517,oS=518,lS=519,Jh=35044,ep="300 es",Yu=1035,li=2e3,gl=2001;class Rs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let tp=1234567;const ia=Math.PI/180,Ta=180/Math.PI;function bs(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(kt[t&255]+kt[t>>8&255]+kt[t>>16&255]+kt[t>>24&255]+"-"+kt[e&255]+kt[e>>8&255]+"-"+kt[e>>16&15|64]+kt[e>>24&255]+"-"+kt[n&63|128]+kt[n>>8&255]+"-"+kt[n>>16&255]+kt[n>>24&255]+kt[i&255]+kt[i>>8&255]+kt[i>>16&255]+kt[i>>24&255]).toLowerCase()}function $t(t,e,n){return Math.max(e,Math.min(n,t))}function $d(t,e){return(t%e+e)%e}function cS(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function uS(t,e,n){return t!==e?(n-t)/(e-t):0}function ra(t,e,n){return(1-n)*t+n*e}function dS(t,e,n,i){return ra(t,e,1-Math.exp(-n*i))}function fS(t,e=1){return e-Math.abs($d(t,e*2)-e)}function hS(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function pS(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function mS(t,e){return t+Math.floor(Math.random()*(e-t+1))}function gS(t,e){return t+Math.random()*(e-t)}function vS(t){return t*(.5-Math.random())}function _S(t){t!==void 0&&(tp=t);let e=tp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function xS(t){return t*ia}function yS(t){return t*Ta}function $u(t){return(t&t-1)===0&&t!==0}function SS(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function vl(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function MS(t,e,n,i,r){const s=Math.cos,a=Math.sin,o=s(n/2),l=a(n/2),c=s((e+i)/2),f=a((e+i)/2),h=s((e-i)/2),d=a((e-i)/2),g=s((i-e)/2),_=a((i-e)/2);switch(r){case"XYX":t.set(o*f,l*h,l*d,o*c);break;case"YZY":t.set(l*d,o*f,l*h,o*c);break;case"ZXZ":t.set(l*h,l*d,o*f,o*c);break;case"XZX":t.set(o*f,l*_,l*g,o*c);break;case"YXY":t.set(l*g,o*f,l*_,o*c);break;case"ZYZ":t.set(l*_,l*g,o*f,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function jr(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function jt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const np={DEG2RAD:ia,RAD2DEG:Ta,generateUUID:bs,clamp:$t,euclideanModulo:$d,mapLinear:cS,inverseLerp:uS,lerp:ra,damp:dS,pingpong:fS,smoothstep:hS,smootherstep:pS,randInt:mS,randFloat:gS,randFloatSpread:vS,seededRandom:_S,degToRad:xS,radToDeg:yS,isPowerOfTwo:$u,ceilPowerOfTwo:SS,floorPowerOfTwo:vl,setQuaternionFromProperEuler:MS,normalize:jt,denormalize:jr};class Qe{constructor(e=0,n=0){Qe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos($t(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,n,i,r,s,a,o,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=o,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=a,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],f=i[4],h=i[7],d=i[2],g=i[5],_=i[8],y=r[0],m=r[3],u=r[6],x=r[1],v=r[4],S=r[7],b=r[2],R=r[5],A=r[8];return s[0]=a*y+o*x+l*b,s[3]=a*m+o*v+l*R,s[6]=a*u+o*S+l*A,s[1]=c*y+f*x+h*b,s[4]=c*m+f*v+h*R,s[7]=c*u+f*S+h*A,s[2]=d*y+g*x+_*b,s[5]=d*m+g*v+_*R,s[8]=d*u+g*S+_*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8];return n*a*f-n*o*c-i*s*f+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],h=f*a-o*c,d=o*l-f*s,g=c*s-a*l,_=n*h+i*d+r*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=h*y,e[1]=(r*c-f*i)*y,e[2]=(o*i-r*a)*y,e[3]=d*y,e[4]=(f*n-r*l)*y,e[5]=(r*s-o*n)*y,e[6]=g*y,e[7]=(i*l-c*n)*y,e[8]=(a*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(wc.makeScale(e,n)),this}rotate(e){return this.premultiply(wc.makeRotation(-e)),this}translate(e,n){return this.premultiply(wc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const wc=new Ge;function Ev(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function _l(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function ES(){const t=_l("canvas");return t.style.display="block",t}const ip={};function sa(t){t in ip||(ip[t]=!0,console.warn(t))}const rp=new Ge().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),sp=new Ge().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),eo={[mi]:{transfer:hl,primaries:pl,toReference:t=>t,fromReference:t=>t},[Nt]:{transfer:st,primaries:pl,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Ol]:{transfer:hl,primaries:ml,toReference:t=>t.applyMatrix3(sp),fromReference:t=>t.applyMatrix3(rp)},[Yd]:{transfer:st,primaries:ml,toReference:t=>t.convertSRGBToLinear().applyMatrix3(sp),fromReference:t=>t.applyMatrix3(rp).convertLinearToSRGB()}},wS=new Set([mi,Ol]),Ze={enabled:!0,_workingColorSpace:mi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!wS.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=eo[e].toReference,r=eo[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return eo[t].primaries},getTransfer:function(t){return t===En?hl:eo[t].transfer}};function fs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Tc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let br;class wv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{br===void 0&&(br=_l("canvas")),br.width=e.width,br.height=e.height;const i=br.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=br}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=_l("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=fs(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(fs(n[i]/255)*255):n[i]=fs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let TS=0;class Tv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:TS++}),this.uuid=bs(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ac(r[a].image)):s.push(Ac(r[a]))}else s=Ac(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Ac(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?wv.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let AS=0;class pn extends Rs{constructor(e=pn.DEFAULT_IMAGE,n=pn.DEFAULT_MAPPING,i=Fn,r=Fn,s=Mn,a=Ea,o=On,l=ji,c=pn.DEFAULT_ANISOTROPY,f=En){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:AS++}),this.uuid=bs(),this.name="",this.source=new Tv(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Qe(0,0),this.repeat=new Qe(1,1),this.center=new Qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof f=="string"?this.colorSpace=f:(sa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=f===vr?Nt:En),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wu:e.x=e.x-Math.floor(e.x);break;case Fn:e.x=e.x<0?0:1;break;case Xu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wu:e.y=e.y-Math.floor(e.y);break;case Fn:e.y=e.y<0?0:1;break;case Xu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return sa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Nt?vr:Sv}set encoding(e){sa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===vr?Nt:En}}pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=hv;pn.DEFAULT_ANISOTROPY=1;class Pt{constructor(e=0,n=0,i=0,r=1){Pt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],h=l[8],d=l[1],g=l[5],_=l[9],y=l[2],m=l[6],u=l[10];if(Math.abs(f-d)<.01&&Math.abs(h-y)<.01&&Math.abs(_-m)<.01){if(Math.abs(f+d)<.1&&Math.abs(h+y)<.1&&Math.abs(_+m)<.1&&Math.abs(c+g+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,S=(g+1)/2,b=(u+1)/2,R=(f+d)/4,A=(h+y)/4,F=(_+m)/4;return v>S&&v>b?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=R/i,s=A/i):S>b?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=R/r,s=F/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=A/s,r=F/s),this.set(i,r,s,n),this}let x=Math.sqrt((m-_)*(m-_)+(h-y)*(h-y)+(d-f)*(d-f));return Math.abs(x)<.001&&(x=1),this.x=(m-_)/x,this.y=(h-y)/x,this.z=(d-f)/x,this.w=Math.acos((c+g+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class CS extends Rs{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Pt(0,0,e,n),this.scissorTest=!1,this.viewport=new Pt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(sa("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===vr?Nt:En),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new pn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Tv(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Er extends CS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Av extends pn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class RS extends pn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Na{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],f=i[r+2],h=i[r+3];const d=s[a+0],g=s[a+1],_=s[a+2],y=s[a+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=f,e[n+3]=h;return}if(o===1){e[n+0]=d,e[n+1]=g,e[n+2]=_,e[n+3]=y;return}if(h!==y||l!==d||c!==g||f!==_){let m=1-o;const u=l*d+c*g+f*_+h*y,x=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){const b=Math.sqrt(v),R=Math.atan2(b,u*x);m=Math.sin(m*R)/b,o=Math.sin(o*R)/b}const S=o*x;if(l=l*m+d*S,c=c*m+g*S,f=f*m+_*S,h=h*m+y*S,m===1-o){const b=1/Math.sqrt(l*l+c*c+f*f+h*h);l*=b,c*=b,f*=b,h*=b}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],f=i[r+3],h=s[a],d=s[a+1],g=s[a+2],_=s[a+3];return e[n]=o*_+f*h+l*g-c*d,e[n+1]=l*_+f*d+c*h-o*g,e[n+2]=c*_+f*g+o*d-l*h,e[n+3]=f*_-o*h-l*d-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),f=o(r/2),h=o(s/2),d=l(i/2),g=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=d*f*h+c*g*_,this._y=c*g*h-d*f*_,this._z=c*f*_+d*g*h,this._w=c*f*h-d*g*_;break;case"YXZ":this._x=d*f*h+c*g*_,this._y=c*g*h-d*f*_,this._z=c*f*_-d*g*h,this._w=c*f*h+d*g*_;break;case"ZXY":this._x=d*f*h-c*g*_,this._y=c*g*h+d*f*_,this._z=c*f*_+d*g*h,this._w=c*f*h-d*g*_;break;case"ZYX":this._x=d*f*h-c*g*_,this._y=c*g*h+d*f*_,this._z=c*f*_-d*g*h,this._w=c*f*h+d*g*_;break;case"YZX":this._x=d*f*h+c*g*_,this._y=c*g*h+d*f*_,this._z=c*f*_-d*g*h,this._w=c*f*h-d*g*_;break;case"XZY":this._x=d*f*h-c*g*_,this._y=c*g*h-d*f*_,this._z=c*f*_+d*g*h,this._w=c*f*h+d*g*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],f=n[6],h=n[10],d=i+o+h;if(d>0){const g=.5/Math.sqrt(d+1);this._w=.25/g,this._x=(f-l)*g,this._y=(s-c)*g,this._z=(a-r)*g}else if(i>o&&i>h){const g=2*Math.sqrt(1+i-o-h);this._w=(f-l)/g,this._x=.25*g,this._y=(r+a)/g,this._z=(s+c)/g}else if(o>h){const g=2*Math.sqrt(1+o-i-h);this._w=(s-c)/g,this._x=(r+a)/g,this._y=.25*g,this._z=(l+f)/g}else{const g=2*Math.sqrt(1+h-i-o);this._w=(a-r)/g,this._x=(s+c)/g,this._y=(l+f)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($t(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+a*o+r*c-s*l,this._y=r*f+a*l+s*o-i*c,this._z=s*f+a*c+i*l-r*o,this._w=a*f-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const g=1-n;return this._w=g*a+n*this._w,this._x=g*i+n*this._x,this._y=g*r+n*this._y,this._z=g*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),f=Math.atan2(c,o),h=Math.sin((1-n)*f)/c,d=Math.sin(n*f)/c;return this._w=a*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,n=0,i=0){W.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(ap.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(ap.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),f=2*(o*n-s*r),h=2*(s*i-a*n);return this.x=n+l*c+a*h-o*f,this.y=i+l*f+o*c-s*h,this.z=r+l*h+s*f-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Cc.copy(this).projectOnVector(e),this.sub(Cc)}reflect(e){return this.sub(Cc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos($t(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Cc=new W,ap=new Na;class Pa{constructor(e=new W(1/0,1/0,1/0),n=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(bn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(bn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=bn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,bn):bn.fromBufferAttribute(s,a),bn.applyMatrix4(e.matrixWorld),this.expandByPoint(bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),to.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),to.copy(i.boundingBox)),to.applyMatrix4(e.matrixWorld),this.union(to)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,bn),bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bs),no.subVectors(this.max,Bs),Lr.subVectors(e.a,Bs),Nr.subVectors(e.b,Bs),Pr.subVectors(e.c,Bs),xi.subVectors(Nr,Lr),yi.subVectors(Pr,Nr),Ji.subVectors(Lr,Pr);let n=[0,-xi.z,xi.y,0,-yi.z,yi.y,0,-Ji.z,Ji.y,xi.z,0,-xi.x,yi.z,0,-yi.x,Ji.z,0,-Ji.x,-xi.y,xi.x,0,-yi.y,yi.x,0,-Ji.y,Ji.x,0];return!Rc(n,Lr,Nr,Pr,no)||(n=[1,0,0,0,1,0,0,0,1],!Rc(n,Lr,Nr,Pr,no))?!1:(io.crossVectors(xi,yi),n=[io.x,io.y,io.z],Rc(n,Lr,Nr,Pr,no))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Zn=[new W,new W,new W,new W,new W,new W,new W,new W],bn=new W,to=new Pa,Lr=new W,Nr=new W,Pr=new W,xi=new W,yi=new W,Ji=new W,Bs=new W,no=new W,io=new W,er=new W;function Rc(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){er.fromArray(t,s);const o=r.x*Math.abs(er.x)+r.y*Math.abs(er.y)+r.z*Math.abs(er.z),l=e.dot(er),c=n.dot(er),f=i.dot(er);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}const bS=new Pa,Hs=new W,bc=new W;class kl{constructor(e=new W,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):bS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Hs.subVectors(e,this.center);const n=Hs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Hs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Hs.copy(e.center).add(bc)),this.expandByPoint(Hs.copy(e.center).sub(bc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Qn=new W,Lc=new W,ro=new W,Si=new W,Nc=new W,so=new W,Pc=new W;class Cv{constructor(e=new W,n=new W(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Qn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Qn.copy(this.origin).addScaledVector(this.direction,n),Qn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Lc.copy(e).add(n).multiplyScalar(.5),ro.copy(n).sub(e).normalize(),Si.copy(this.origin).sub(Lc);const s=e.distanceTo(n)*.5,a=-this.direction.dot(ro),o=Si.dot(this.direction),l=-Si.dot(ro),c=Si.lengthSq(),f=Math.abs(1-a*a);let h,d,g,_;if(f>0)if(h=a*l-o,d=a*o-l,_=s*f,h>=0)if(d>=-_)if(d<=_){const y=1/f;h*=y,d*=y,g=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=s,h=Math.max(0,-(a*d+o)),g=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(a*d+o)),g=-h*h+d*(d+2*l)+c;else d<=-_?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),g=-h*h+d*(d+2*l)+c):d<=_?(h=0,d=Math.min(Math.max(-s,-l),s),g=d*(d+2*l)+c):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),g=-h*h+d*(d+2*l)+c);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),g=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Lc).addScaledVector(ro,d),g}intersectSphere(e,n){Qn.subVectors(e.center,this.origin);const i=Qn.dot(this.direction),r=Qn.dot(Qn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),f>=0?(s=(e.min.y-d.y)*f,a=(e.max.y-d.y)*f):(s=(e.max.y-d.y)*f,a=(e.min.y-d.y)*f),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Qn)!==null}intersectTriangle(e,n,i,r,s){Nc.subVectors(n,e),so.subVectors(i,e),Pc.crossVectors(Nc,so);let a=this.direction.dot(Pc),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Si.subVectors(this.origin,e);const l=o*this.direction.dot(so.crossVectors(Si,so));if(l<0)return null;const c=o*this.direction.dot(Nc.cross(Si));if(c<0||l+c>a)return null;const f=-o*Si.dot(Pc);return f<0?null:this.at(f/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Rt{constructor(e,n,i,r,s,a,o,l,c,f,h,d,g,_,y,m){Rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,f,h,d,g,_,y,m)}set(e,n,i,r,s,a,o,l,c,f,h,d,g,_,y,m){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=f,u[10]=h,u[14]=d,u[3]=g,u[7]=_,u[11]=y,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Rt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Dr.setFromMatrixColumn(e,0).length(),s=1/Dr.setFromMatrixColumn(e,1).length(),a=1/Dr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*f,g=a*h,_=o*f,y=o*h;n[0]=l*f,n[4]=-l*h,n[8]=c,n[1]=g+_*c,n[5]=d-y*c,n[9]=-o*l,n[2]=y-d*c,n[6]=_+g*c,n[10]=a*l}else if(e.order==="YXZ"){const d=l*f,g=l*h,_=c*f,y=c*h;n[0]=d+y*o,n[4]=_*o-g,n[8]=a*c,n[1]=a*h,n[5]=a*f,n[9]=-o,n[2]=g*o-_,n[6]=y+d*o,n[10]=a*l}else if(e.order==="ZXY"){const d=l*f,g=l*h,_=c*f,y=c*h;n[0]=d-y*o,n[4]=-a*h,n[8]=_+g*o,n[1]=g+_*o,n[5]=a*f,n[9]=y-d*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const d=a*f,g=a*h,_=o*f,y=o*h;n[0]=l*f,n[4]=_*c-g,n[8]=d*c+y,n[1]=l*h,n[5]=y*c+d,n[9]=g*c-_,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const d=a*l,g=a*c,_=o*l,y=o*c;n[0]=l*f,n[4]=y-d*h,n[8]=_*h+g,n[1]=h,n[5]=a*f,n[9]=-o*f,n[2]=-c*f,n[6]=g*h+_,n[10]=d-y*h}else if(e.order==="XZY"){const d=a*l,g=a*c,_=o*l,y=o*c;n[0]=l*f,n[4]=-h,n[8]=c*f,n[1]=d*h+y,n[5]=a*f,n[9]=g*h-_,n[2]=_*h-g,n[6]=o*f,n[10]=y*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(LS,e,NS)}lookAt(e,n,i){const r=this.elements;return on.subVectors(e,n),on.lengthSq()===0&&(on.z=1),on.normalize(),Mi.crossVectors(i,on),Mi.lengthSq()===0&&(Math.abs(i.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),Mi.crossVectors(i,on)),Mi.normalize(),ao.crossVectors(on,Mi),r[0]=Mi.x,r[4]=ao.x,r[8]=on.x,r[1]=Mi.y,r[5]=ao.y,r[9]=on.y,r[2]=Mi.z,r[6]=ao.z,r[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],f=i[1],h=i[5],d=i[9],g=i[13],_=i[2],y=i[6],m=i[10],u=i[14],x=i[3],v=i[7],S=i[11],b=i[15],R=r[0],A=r[4],F=r[8],M=r[12],w=r[1],U=r[5],$=r[9],q=r[13],L=r[2],z=r[6],Y=r[10],K=r[14],N=r[3],D=r[7],k=r[11],O=r[15];return s[0]=a*R+o*w+l*L+c*N,s[4]=a*A+o*U+l*z+c*D,s[8]=a*F+o*$+l*Y+c*k,s[12]=a*M+o*q+l*K+c*O,s[1]=f*R+h*w+d*L+g*N,s[5]=f*A+h*U+d*z+g*D,s[9]=f*F+h*$+d*Y+g*k,s[13]=f*M+h*q+d*K+g*O,s[2]=_*R+y*w+m*L+u*N,s[6]=_*A+y*U+m*z+u*D,s[10]=_*F+y*$+m*Y+u*k,s[14]=_*M+y*q+m*K+u*O,s[3]=x*R+v*w+S*L+b*N,s[7]=x*A+v*U+S*z+b*D,s[11]=x*F+v*$+S*Y+b*k,s[15]=x*M+v*q+S*K+b*O,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],f=e[2],h=e[6],d=e[10],g=e[14],_=e[3],y=e[7],m=e[11],u=e[15];return _*(+s*l*h-r*c*h-s*o*d+i*c*d+r*o*g-i*l*g)+y*(+n*l*g-n*c*d+s*a*d-r*a*g+r*c*f-s*l*f)+m*(+n*c*h-n*o*g-s*a*h+i*a*g+s*o*f-i*c*f)+u*(-r*o*f-n*l*h+n*o*d+r*a*h-i*a*d+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],h=e[9],d=e[10],g=e[11],_=e[12],y=e[13],m=e[14],u=e[15],x=h*m*c-y*d*c+y*l*g-o*m*g-h*l*u+o*d*u,v=_*d*c-f*m*c-_*l*g+a*m*g+f*l*u-a*d*u,S=f*y*c-_*h*c+_*o*g-a*y*g-f*o*u+a*h*u,b=_*h*l-f*y*l-_*o*d+a*y*d+f*o*m-a*h*m,R=n*x+i*v+r*S+s*b;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return e[0]=x*A,e[1]=(y*d*s-h*m*s-y*r*g+i*m*g+h*r*u-i*d*u)*A,e[2]=(o*m*s-y*l*s+y*r*c-i*m*c-o*r*u+i*l*u)*A,e[3]=(h*l*s-o*d*s-h*r*c+i*d*c+o*r*g-i*l*g)*A,e[4]=v*A,e[5]=(f*m*s-_*d*s+_*r*g-n*m*g-f*r*u+n*d*u)*A,e[6]=(_*l*s-a*m*s-_*r*c+n*m*c+a*r*u-n*l*u)*A,e[7]=(a*d*s-f*l*s+f*r*c-n*d*c-a*r*g+n*l*g)*A,e[8]=S*A,e[9]=(_*h*s-f*y*s-_*i*g+n*y*g+f*i*u-n*h*u)*A,e[10]=(a*y*s-_*o*s+_*i*c-n*y*c-a*i*u+n*o*u)*A,e[11]=(f*o*s-a*h*s-f*i*c+n*h*c+a*i*g-n*o*g)*A,e[12]=b*A,e[13]=(f*y*r-_*h*r+_*i*d-n*y*d-f*i*m+n*h*m)*A,e[14]=(_*o*r-a*y*r-_*i*l+n*y*l+a*i*m-n*o*m)*A,e[15]=(a*h*r-f*o*r+f*i*l-n*h*l-a*i*d+n*o*d)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,f=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,f*o+i,f*l-r*a,0,c*l-r*o,f*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,f=a+a,h=o+o,d=s*c,g=s*f,_=s*h,y=a*f,m=a*h,u=o*h,x=l*c,v=l*f,S=l*h,b=i.x,R=i.y,A=i.z;return r[0]=(1-(y+u))*b,r[1]=(g+S)*b,r[2]=(_-v)*b,r[3]=0,r[4]=(g-S)*R,r[5]=(1-(d+u))*R,r[6]=(m+x)*R,r[7]=0,r[8]=(_+v)*A,r[9]=(m-x)*A,r[10]=(1-(d+y))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Dr.set(r[0],r[1],r[2]).length();const a=Dr.set(r[4],r[5],r[6]).length(),o=Dr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ln.copy(this);const c=1/s,f=1/a,h=1/o;return Ln.elements[0]*=c,Ln.elements[1]*=c,Ln.elements[2]*=c,Ln.elements[4]*=f,Ln.elements[5]*=f,Ln.elements[6]*=f,Ln.elements[8]*=h,Ln.elements[9]*=h,Ln.elements[10]*=h,n.setFromRotationMatrix(Ln),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=li){const l=this.elements,c=2*s/(n-e),f=2*s/(i-r),h=(n+e)/(n-e),d=(i+r)/(i-r);let g,_;if(o===li)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===gl)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=li){const l=this.elements,c=1/(n-e),f=1/(i-r),h=1/(a-s),d=(n+e)*c,g=(i+r)*f;let _,y;if(o===li)_=(a+s)*h,y=-2*h;else if(o===gl)_=s*h,y=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=y,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Dr=new W,Ln=new Rt,LS=new W(0,0,0),NS=new W(1,1,1),Mi=new W,ao=new W,on=new W,op=new Rt,lp=new Na;class zl{constructor(e=0,n=0,i=0,r=zl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],f=r[9],h=r[2],d=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin($t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,g),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin($t(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,g),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-$t(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin($t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-$t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return op.makeRotationFromQuaternion(e),this.setFromRotationMatrix(op,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return lp.setFromEuler(this),this.setFromQuaternion(lp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zl.DEFAULT_ORDER="XYZ";class Rv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let PS=0;const cp=new W,Ur=new Na,Jn=new Rt,oo=new W,Gs=new W,DS=new W,US=new Na,up=new W(1,0,0),dp=new W(0,1,0),fp=new W(0,0,1),IS={type:"added"},FS={type:"removed"};class sn extends Rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:PS++}),this.uuid=bs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=sn.DEFAULT_UP.clone();const e=new W,n=new zl,i=new Na,r=new W(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Rt},normalMatrix:{value:new Ge}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ur.setFromAxisAngle(e,n),this.quaternion.multiply(Ur),this}rotateOnWorldAxis(e,n){return Ur.setFromAxisAngle(e,n),this.quaternion.premultiply(Ur),this}rotateX(e){return this.rotateOnAxis(up,e)}rotateY(e){return this.rotateOnAxis(dp,e)}rotateZ(e){return this.rotateOnAxis(fp,e)}translateOnAxis(e,n){return cp.copy(e).applyQuaternion(this.quaternion),this.position.add(cp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(up,e)}translateY(e){return this.translateOnAxis(dp,e)}translateZ(e){return this.translateOnAxis(fp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?oo.copy(e):oo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(Gs,oo,this.up):Jn.lookAt(oo,Gs,this.up),this.quaternion.setFromRotationMatrix(Jn),r&&(Jn.extractRotation(r.matrixWorld),Ur.setFromRotationMatrix(Jn),this.quaternion.premultiply(Ur.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(IS)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(FS)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Jn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,e,DS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,US,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),f=a(e.images),h=a(e.shapes),d=a(e.skeletons),g=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),g.length>0&&(i.animations=g),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const f=o[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}sn.DEFAULT_UP=new W(0,1,0);sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Nn=new W,ei=new W,Dc=new W,ti=new W,Ir=new W,Fr=new W,hp=new W,Uc=new W,Ic=new W,Fc=new W;let lo=!1;class In{constructor(e=new W,n=new W,i=new W){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Nn.subVectors(e,n),r.cross(Nn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Nn.subVectors(r,n),ei.subVectors(i,n),Dc.subVectors(e,n);const a=Nn.dot(Nn),o=Nn.dot(ei),l=Nn.dot(Dc),c=ei.dot(ei),f=ei.dot(Dc),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,g=(c*l-o*f)*d,_=(a*f-o*l)*d;return s.set(1-g-_,_,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getUV(e,n,i,r,s,a,o,l){return lo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),lo=!0),this.getInterpolation(e,n,i,r,s,a,o,l)}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ti.x),l.addScaledVector(a,ti.y),l.addScaledVector(o,ti.z),l)}static isFrontFacing(e,n,i,r){return Nn.subVectors(i,n),ei.subVectors(e,n),Nn.cross(ei).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nn.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),Nn.cross(ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return In.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return In.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return lo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),lo=!0),In.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return In.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return In.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return In.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Ir.subVectors(r,i),Fr.subVectors(s,i),Uc.subVectors(e,i);const l=Ir.dot(Uc),c=Fr.dot(Uc);if(l<=0&&c<=0)return n.copy(i);Ic.subVectors(e,r);const f=Ir.dot(Ic),h=Fr.dot(Ic);if(f>=0&&h<=f)return n.copy(r);const d=l*h-f*c;if(d<=0&&l>=0&&f<=0)return a=l/(l-f),n.copy(i).addScaledVector(Ir,a);Fc.subVectors(e,s);const g=Ir.dot(Fc),_=Fr.dot(Fc);if(_>=0&&g<=_)return n.copy(s);const y=g*c-l*_;if(y<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector(Fr,o);const m=f*_-g*h;if(m<=0&&h-f>=0&&g-_>=0)return hp.subVectors(s,r),o=(h-f)/(h-f+(g-_)),n.copy(r).addScaledVector(hp,o);const u=1/(m+y+d);return a=y*u,o=d*u,n.copy(i).addScaledVector(Ir,a).addScaledVector(Fr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const bv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ei={h:0,s:0,l:0},co={h:0,s:0,l:0};function Oc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Xe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Ze.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ze.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Ze.workingColorSpace){if(e=$d(e,1),n=$t(n,0,1),i=$t(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Oc(a,s,e+1/3),this.g=Oc(a,s,e),this.b=Oc(a,s,e-1/3)}return Ze.toWorkingColorSpace(this,r),this}setStyle(e,n=Nt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Nt){const i=bv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fs(e.r),this.g=fs(e.g),this.b=fs(e.b),this}copyLinearToSRGB(e){return this.r=Tc(e.r),this.g=Tc(e.g),this.b=Tc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nt){return Ze.fromWorkingColorSpace(zt.copy(this),e),Math.round($t(zt.r*255,0,255))*65536+Math.round($t(zt.g*255,0,255))*256+Math.round($t(zt.b*255,0,255))}getHexString(e=Nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ze.workingColorSpace){Ze.fromWorkingColorSpace(zt.copy(this),n);const i=zt.r,r=zt.g,s=zt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const f=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=f<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(zt.copy(this),n),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=Nt){Ze.fromWorkingColorSpace(zt.copy(this),e);const n=zt.r,i=zt.g,r=zt.b;return e!==Nt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ei),this.setHSL(Ei.h+e,Ei.s+n,Ei.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ei),e.getHSL(co);const i=ra(Ei.h,co.h,n),r=ra(Ei.s,co.s,n),s=ra(Ei.l,co.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new Xe;Xe.NAMES=bv;let OS=0;class Da extends Rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:OS++}),this.uuid=bs(),this.name="",this.type="Material",this.blending=ds,this.side=Yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hu,this.blendDst=Gu,this.blendEquation=or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=fl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rr,this.stencilZFail=Rr,this.stencilZPass=Rr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ds&&(i.blending=this.blending),this.side!==Yi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Hu&&(i.blendSrc=this.blendSrc),this.blendDst!==Gu&&(i.blendDst=this.blendDst),this.blendEquation!==or&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==fl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Rr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Rr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Rr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Lv extends Da{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=fv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vt=new W,uo=new Qe;class Bn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Jh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)uo.fromBufferAttribute(this,n),uo.applyMatrix3(e),this.setXY(n,uo.x,uo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)vt.fromBufferAttribute(this,n),vt.applyMatrix3(e),this.setXYZ(n,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)vt.fromBufferAttribute(this,n),vt.applyMatrix4(e),this.setXYZ(n,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)vt.fromBufferAttribute(this,n),vt.applyNormalMatrix(e),this.setXYZ(n,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)vt.fromBufferAttribute(this,n),vt.transformDirection(e),this.setXYZ(n,vt.x,vt.y,vt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=jr(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=jt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=jr(n,this.array)),n}setX(e,n){return this.normalized&&(n=jt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=jr(n,this.array)),n}setY(e,n){return this.normalized&&(n=jt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=jr(n,this.array)),n}setZ(e,n){return this.normalized&&(n=jt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=jr(n,this.array)),n}setW(e,n){return this.normalized&&(n=jt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=jt(n,this.array),i=jt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=jt(n,this.array),i=jt(i,this.array),r=jt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=jt(n,this.array),i=jt(i,this.array),r=jt(r,this.array),s=jt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Jh&&(e.usage=this.usage),e}}class Nv extends Bn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Pv extends Bn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class ui extends Bn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let kS=0;const xn=new Rt,kc=new sn,Or=new W,ln=new Pa,Vs=new Pa,Tt=new W;class qn extends Rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kS++}),this.uuid=bs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ev(e)?Pv:Nv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xn.makeRotationFromQuaternion(e),this.applyMatrix4(xn),this}rotateX(e){return xn.makeRotationX(e),this.applyMatrix4(xn),this}rotateY(e){return xn.makeRotationY(e),this.applyMatrix4(xn),this}rotateZ(e){return xn.makeRotationZ(e),this.applyMatrix4(xn),this}translate(e,n,i){return xn.makeTranslation(e,n,i),this.applyMatrix4(xn),this}scale(e,n,i){return xn.makeScale(e,n,i),this.applyMatrix4(xn),this}lookAt(e){return kc.lookAt(e),kc.updateMatrix(),this.applyMatrix4(kc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Or).negate(),this.translate(Or.x,Or.y,Or.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ui(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];ln.setFromBufferAttribute(s),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Vs.setFromBufferAttribute(o),this.morphTargetsRelative?(Tt.addVectors(ln.min,Vs.min),ln.expandByPoint(Tt),Tt.addVectors(ln.max,Vs.max),ln.expandByPoint(Tt)):(ln.expandByPoint(Vs.min),ln.expandByPoint(Vs.max))}ln.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Tt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Tt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)Tt.fromBufferAttribute(o,c),l&&(Or.fromBufferAttribute(e,c),Tt.add(Or)),r=Math.max(r,i.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,a=n.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],f=[];for(let w=0;w<o;w++)c[w]=new W,f[w]=new W;const h=new W,d=new W,g=new W,_=new Qe,y=new Qe,m=new Qe,u=new W,x=new W;function v(w,U,$){h.fromArray(r,w*3),d.fromArray(r,U*3),g.fromArray(r,$*3),_.fromArray(a,w*2),y.fromArray(a,U*2),m.fromArray(a,$*2),d.sub(h),g.sub(h),y.sub(_),m.sub(_);const q=1/(y.x*m.y-m.x*y.y);isFinite(q)&&(u.copy(d).multiplyScalar(m.y).addScaledVector(g,-y.y).multiplyScalar(q),x.copy(g).multiplyScalar(y.x).addScaledVector(d,-m.x).multiplyScalar(q),c[w].add(u),c[U].add(u),c[$].add(u),f[w].add(x),f[U].add(x),f[$].add(x))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let w=0,U=S.length;w<U;++w){const $=S[w],q=$.start,L=$.count;for(let z=q,Y=q+L;z<Y;z+=3)v(i[z+0],i[z+1],i[z+2])}const b=new W,R=new W,A=new W,F=new W;function M(w){A.fromArray(s,w*3),F.copy(A);const U=c[w];b.copy(U),b.sub(A.multiplyScalar(A.dot(U))).normalize(),R.crossVectors(F,U);const q=R.dot(f[w])<0?-1:1;l[w*4]=b.x,l[w*4+1]=b.y,l[w*4+2]=b.z,l[w*4+3]=q}for(let w=0,U=S.length;w<U;++w){const $=S[w],q=$.start,L=$.count;for(let z=q,Y=q+L;z<Y;z+=3)M(i[z+0]),M(i[z+1]),M(i[z+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Bn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,g=i.count;d<g;d++)i.setXYZ(d,0,0,0);const r=new W,s=new W,a=new W,o=new W,l=new W,c=new W,f=new W,h=new W;if(e)for(let d=0,g=e.count;d<g;d+=3){const _=e.getX(d+0),y=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,y),a.fromBufferAttribute(n,m),f.subVectors(a,s),h.subVectors(r,s),f.cross(h),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),o.add(f),l.add(f),c.add(f),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,g=n.count;d<g;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),a.fromBufferAttribute(n,d+2),f.subVectors(a,s),h.subVectors(r,s),f.cross(h),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Tt.fromBufferAttribute(e,n),Tt.normalize(),e.setXYZ(n,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(o,l){const c=o.array,f=o.itemSize,h=o.normalized,d=new c.constructor(l.length*f);let g=0,_=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?g=l[y]*o.data.stride+o.offset:g=l[y]*f;for(let u=0;u<f;u++)d[_++]=c[g++]}return new Bn(d,f,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new qn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let f=0,h=c.length;f<h;f++){const d=c[f],g=e(d,i);l.push(g)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let h=0,d=c.length;h<d;h++){const g=c[h];f.push(g.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],h=s[c];for(let d=0,g=h.length;d<g;d++)f.push(h[d].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,f=a.length;c<f;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const pp=new Rt,tr=new Cv,fo=new kl,mp=new W,kr=new W,zr=new W,Br=new W,zc=new W,ho=new W,po=new Qe,mo=new Qe,go=new Qe,gp=new W,vp=new W,_p=new W,vo=new W,_o=new W;class Di extends sn{constructor(e=new qn,n=new Lv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){ho.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=o[l],h=s[l];f!==0&&(zc.fromBufferAttribute(h,e),a?ho.addScaledVector(zc,f):ho.addScaledVector(zc.sub(n),f))}n.add(ho)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),fo.copy(i.boundingSphere),fo.applyMatrix4(s),tr.copy(e.ray).recast(e.near),!(fo.containsPoint(tr.origin)===!1&&(tr.intersectSphere(fo,mp)===null||tr.origin.distanceToSquared(mp)>(e.far-e.near)**2))&&(pp.copy(s).invert(),tr.copy(e.ray).applyMatrix4(pp),!(i.boundingBox!==null&&tr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,tr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,h=s.attributes.normal,d=s.groups,g=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,y=d.length;_<y;_++){const m=d[_],u=a[m.materialIndex],x=Math.max(m.start,g.start),v=Math.min(o.count,Math.min(m.start+m.count,g.start+g.count));for(let S=x,b=v;S<b;S+=3){const R=o.getX(S),A=o.getX(S+1),F=o.getX(S+2);r=xo(this,u,e,i,c,f,h,R,A,F),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,g.start),y=Math.min(o.count,g.start+g.count);for(let m=_,u=y;m<u;m+=3){const x=o.getX(m),v=o.getX(m+1),S=o.getX(m+2);r=xo(this,a,e,i,c,f,h,x,v,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,y=d.length;_<y;_++){const m=d[_],u=a[m.materialIndex],x=Math.max(m.start,g.start),v=Math.min(l.count,Math.min(m.start+m.count,g.start+g.count));for(let S=x,b=v;S<b;S+=3){const R=S,A=S+1,F=S+2;r=xo(this,u,e,i,c,f,h,R,A,F),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,g.start),y=Math.min(l.count,g.start+g.count);for(let m=_,u=y;m<u;m+=3){const x=m,v=m+1,S=m+2;r=xo(this,a,e,i,c,f,h,x,v,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function zS(t,e,n,i,r,s,a,o){let l;if(e.side===rn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Yi,o),l===null)return null;_o.copy(o),_o.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(_o);return c<n.near||c>n.far?null:{distance:c,point:_o.clone(),object:t}}function xo(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,kr),t.getVertexPosition(l,zr),t.getVertexPosition(c,Br);const f=zS(t,e,n,i,kr,zr,Br,vo);if(f){r&&(po.fromBufferAttribute(r,o),mo.fromBufferAttribute(r,l),go.fromBufferAttribute(r,c),f.uv=In.getInterpolation(vo,kr,zr,Br,po,mo,go,new Qe)),s&&(po.fromBufferAttribute(s,o),mo.fromBufferAttribute(s,l),go.fromBufferAttribute(s,c),f.uv1=In.getInterpolation(vo,kr,zr,Br,po,mo,go,new Qe),f.uv2=f.uv1),a&&(gp.fromBufferAttribute(a,o),vp.fromBufferAttribute(a,l),_p.fromBufferAttribute(a,c),f.normal=In.getInterpolation(vo,kr,zr,Br,gp,vp,_p,new W),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new W,materialIndex:0};In.getNormal(kr,zr,Br,h.normal),f.face=h}return f}class Ua extends qn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],f=[],h=[];let d=0,g=0;_("z","y","x",-1,-1,i,n,e,a,s,0),_("z","y","x",1,-1,i,n,-e,a,s,1),_("x","z","y",1,1,e,i,n,r,a,2),_("x","z","y",1,-1,e,i,-n,r,a,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ui(c,3)),this.setAttribute("normal",new ui(f,3)),this.setAttribute("uv",new ui(h,2));function _(y,m,u,x,v,S,b,R,A,F,M){const w=S/A,U=b/F,$=S/2,q=b/2,L=R/2,z=A+1,Y=F+1;let K=0,N=0;const D=new W;for(let k=0;k<Y;k++){const O=k*U-q;for(let Z=0;Z<z;Z++){const B=Z*w-$;D[y]=B*x,D[m]=O*v,D[u]=L,c.push(D.x,D.y,D.z),D[y]=0,D[m]=0,D[u]=R>0?1:-1,f.push(D.x,D.y,D.z),h.push(Z/A),h.push(1-k/F),K+=1}}for(let k=0;k<F;k++)for(let O=0;O<A;O++){const Z=d+O+z*k,B=d+O+z*(k+1),Q=d+(O+1)+z*(k+1),se=d+(O+1)+z*k;l.push(Z,B,se),l.push(B,Q,se),N+=6}o.addGroup(g,N,M),g+=N,d+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ua(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ws(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Wt(t){const e={};for(let n=0;n<t.length;n++){const i=ws(t[n]);for(const r in i)e[r]=i[r]}return e}function BS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Dv(t){return t.getRenderTarget()===null?t.outputColorSpace:Ze.workingColorSpace}const HS={clone:ws,merge:Wt};var GS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,VS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wr extends Da{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=GS,this.fragmentShader=VS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ws(e.uniforms),this.uniformsGroups=BS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Uv extends sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=li}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class dn extends Uv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ta*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ia*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ta*2*Math.atan(Math.tan(ia*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ia*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Hr=-90,Gr=1;class jS extends sn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new dn(Hr,Gr,e,n);r.layers=this.layers,this.add(r);const s=new dn(Hr,Gr,e,n);s.layers=this.layers,this.add(s);const a=new dn(Hr,Gr,e,n);a.layers=this.layers,this.add(a);const o=new dn(Hr,Gr,e,n);o.layers=this.layers,this.add(o);const l=new dn(Hr,Gr,e,n);l.layers=this.layers,this.add(l);const c=new dn(Hr,Gr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===li)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===gl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,f]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(h,d,g),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Iv extends pn{constructor(e,n,i,r,s,a,o,l,c,f){e=e!==void 0?e:[],n=n!==void 0?n:Ss,super(e,n,i,r,s,a,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class WS extends Er{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(sa("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===vr?Nt:En),this.texture=new Iv(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Mn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ua(5,5,5),s=new wr({name:"CubemapFromEquirect",uniforms:ws(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:rn,blending:Gi});s.uniforms.tEquirect.value=n;const a=new Di(r,s),o=n.minFilter;return n.minFilter===Ea&&(n.minFilter=Mn),new jS(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const Bc=new W,XS=new W,YS=new Ge;class sr{constructor(e=new W(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Bc.subVectors(i,n).cross(XS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Bc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||YS.getNormalMatrix(e),r=this.coplanarPoint(Bc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const nr=new kl,yo=new W;class Fv{constructor(e=new sr,n=new sr,i=new sr,r=new sr,s=new sr,a=new sr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=li){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],f=r[5],h=r[6],d=r[7],g=r[8],_=r[9],y=r[10],m=r[11],u=r[12],x=r[13],v=r[14],S=r[15];if(i[0].setComponents(l-s,d-c,m-g,S-u).normalize(),i[1].setComponents(l+s,d+c,m+g,S+u).normalize(),i[2].setComponents(l+a,d+f,m+_,S+x).normalize(),i[3].setComponents(l-a,d-f,m-_,S-x).normalize(),i[4].setComponents(l-o,d-h,m-y,S-v).normalize(),n===li)i[5].setComponents(l+o,d+h,m+y,S+v).normalize();else if(n===gl)i[5].setComponents(o,h,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),nr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),nr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(nr)}intersectsSprite(e){return nr.center.set(0,0,0),nr.radius=.7071067811865476,nr.applyMatrix4(e.matrixWorld),this.intersectsSphere(nr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(yo.x=r.normal.x>0?e.max.x:e.min.x,yo.y=r.normal.y>0?e.max.y:e.min.y,yo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(yo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ov(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function $S(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,f){const h=c.array,d=c.usage,g=h.byteLength,_=t.createBuffer();t.bindBuffer(f,_),t.bufferData(f,h,d),c.onUploadCallback();let y;if(h instanceof Float32Array)y=t.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)y=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=t.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=t.SHORT;else if(h instanceof Uint32Array)y=t.UNSIGNED_INT;else if(h instanceof Int32Array)y=t.INT;else if(h instanceof Int8Array)y=t.BYTE;else if(h instanceof Uint8Array)y=t.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:_,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:g}}function s(c,f,h){const d=f.array,g=f._updateRange,_=f.updateRanges;if(t.bindBuffer(h,c),g.count===-1&&_.length===0&&t.bufferSubData(h,0,d),_.length!==0){for(let y=0,m=_.length;y<m;y++){const u=_[y];n?t.bufferSubData(h,u.start*d.BYTES_PER_ELEMENT,d,u.start,u.count):t.bufferSubData(h,u.start*d.BYTES_PER_ELEMENT,d.subarray(u.start,u.start+u.count))}f.clearUpdateRanges()}g.count!==-1&&(n?t.bufferSubData(h,g.offset*d.BYTES_PER_ELEMENT,d,g.offset,g.count):t.bufferSubData(h,g.offset*d.BYTES_PER_ELEMENT,d.subarray(g.offset,g.offset+g.count)),g.count=-1),f.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f&&(t.deleteBuffer(f.buffer),i.delete(c))}function l(c,f){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);if(h===void 0)i.set(c,r(c,f));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,c,f),h.version=c.version}}return{get:a,remove:o,update:l}}class qd extends qn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,f=l+1,h=e/o,d=n/l,g=[],_=[],y=[],m=[];for(let u=0;u<f;u++){const x=u*d-a;for(let v=0;v<c;v++){const S=v*h-s;_.push(S,-x,0),y.push(0,0,1),m.push(v/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let x=0;x<o;x++){const v=x+c*u,S=x+c*(u+1),b=x+1+c*(u+1),R=x+1+c*u;g.push(v,S,R),g.push(S,b,R)}this.setIndex(g),this.setAttribute("position",new ui(_,3)),this.setAttribute("normal",new ui(y,3)),this.setAttribute("uv",new ui(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qd(e.width,e.height,e.widthSegments,e.heightSegments)}}var qS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,KS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ZS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,QS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,JS=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,eM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,nM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,iM=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,rM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,sM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,aM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,oM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,lM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,cM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,uM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,dM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,vM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,_M=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,xM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,yM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,SM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,MM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,EM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,TM="gl_FragColor = linearToOutputTexel( gl_FragColor );",AM=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,CM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,RM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,LM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,NM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,PM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,DM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,UM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,IM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,FM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,OM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,kM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,BM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,HM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,GM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,VM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,WM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,XM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,YM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,$M=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,qM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,KM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ZM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,QM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,JM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,tE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,nE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,iE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,sE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,aE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,oE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lE=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,uE=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,dE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,fE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,hE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,pE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,_E=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,SE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ME=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,EE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,wE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,TE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,AE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,CE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,RE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,LE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,NE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,PE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,DE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,UE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,IE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,FE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,OE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,kE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,BE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,HE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,GE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,VE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,jE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,WE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,XE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,YE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $E=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ZE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,JE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ew=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,tw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,nw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,iw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,rw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ow=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,cw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,hw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,mw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,gw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_w=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,xw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ew=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ww=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Aw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Cw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Fe={alphahash_fragment:qS,alphahash_pars_fragment:KS,alphamap_fragment:ZS,alphamap_pars_fragment:QS,alphatest_fragment:JS,alphatest_pars_fragment:eM,aomap_fragment:tM,aomap_pars_fragment:nM,batching_pars_vertex:iM,batching_vertex:rM,begin_vertex:sM,beginnormal_vertex:aM,bsdfs:oM,iridescence_fragment:lM,bumpmap_pars_fragment:cM,clipping_planes_fragment:uM,clipping_planes_pars_fragment:dM,clipping_planes_pars_vertex:fM,clipping_planes_vertex:hM,color_fragment:pM,color_pars_fragment:mM,color_pars_vertex:gM,color_vertex:vM,common:_M,cube_uv_reflection_fragment:xM,defaultnormal_vertex:yM,displacementmap_pars_vertex:SM,displacementmap_vertex:MM,emissivemap_fragment:EM,emissivemap_pars_fragment:wM,colorspace_fragment:TM,colorspace_pars_fragment:AM,envmap_fragment:CM,envmap_common_pars_fragment:RM,envmap_pars_fragment:bM,envmap_pars_vertex:LM,envmap_physical_pars_fragment:GM,envmap_vertex:NM,fog_vertex:PM,fog_pars_vertex:DM,fog_fragment:UM,fog_pars_fragment:IM,gradientmap_pars_fragment:FM,lightmap_fragment:OM,lightmap_pars_fragment:kM,lights_lambert_fragment:zM,lights_lambert_pars_fragment:BM,lights_pars_begin:HM,lights_toon_fragment:VM,lights_toon_pars_fragment:jM,lights_phong_fragment:WM,lights_phong_pars_fragment:XM,lights_physical_fragment:YM,lights_physical_pars_fragment:$M,lights_fragment_begin:qM,lights_fragment_maps:KM,lights_fragment_end:ZM,logdepthbuf_fragment:QM,logdepthbuf_pars_fragment:JM,logdepthbuf_pars_vertex:eE,logdepthbuf_vertex:tE,map_fragment:nE,map_pars_fragment:iE,map_particle_fragment:rE,map_particle_pars_fragment:sE,metalnessmap_fragment:aE,metalnessmap_pars_fragment:oE,morphcolor_vertex:lE,morphnormal_vertex:cE,morphtarget_pars_vertex:uE,morphtarget_vertex:dE,normal_fragment_begin:fE,normal_fragment_maps:hE,normal_pars_fragment:pE,normal_pars_vertex:mE,normal_vertex:gE,normalmap_pars_fragment:vE,clearcoat_normal_fragment_begin:_E,clearcoat_normal_fragment_maps:xE,clearcoat_pars_fragment:yE,iridescence_pars_fragment:SE,opaque_fragment:ME,packing:EE,premultiplied_alpha_fragment:wE,project_vertex:TE,dithering_fragment:AE,dithering_pars_fragment:CE,roughnessmap_fragment:RE,roughnessmap_pars_fragment:bE,shadowmap_pars_fragment:LE,shadowmap_pars_vertex:NE,shadowmap_vertex:PE,shadowmask_pars_fragment:DE,skinbase_vertex:UE,skinning_pars_vertex:IE,skinning_vertex:FE,skinnormal_vertex:OE,specularmap_fragment:kE,specularmap_pars_fragment:zE,tonemapping_fragment:BE,tonemapping_pars_fragment:HE,transmission_fragment:GE,transmission_pars_fragment:VE,uv_pars_fragment:jE,uv_pars_vertex:WE,uv_vertex:XE,worldpos_vertex:YE,background_vert:$E,background_frag:qE,backgroundCube_vert:KE,backgroundCube_frag:ZE,cube_vert:QE,cube_frag:JE,depth_vert:ew,depth_frag:tw,distanceRGBA_vert:nw,distanceRGBA_frag:iw,equirect_vert:rw,equirect_frag:sw,linedashed_vert:aw,linedashed_frag:ow,meshbasic_vert:lw,meshbasic_frag:cw,meshlambert_vert:uw,meshlambert_frag:dw,meshmatcap_vert:fw,meshmatcap_frag:hw,meshnormal_vert:pw,meshnormal_frag:mw,meshphong_vert:gw,meshphong_frag:vw,meshphysical_vert:_w,meshphysical_frag:xw,meshtoon_vert:yw,meshtoon_frag:Sw,points_vert:Mw,points_frag:Ew,shadow_vert:ww,shadow_frag:Tw,sprite_vert:Aw,sprite_frag:Cw},oe={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},Wn={basic:{uniforms:Wt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:Wt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:Wt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:Wt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:Wt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:Wt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:Wt([oe.points,oe.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:Wt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:Wt([oe.common,oe.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:Wt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:Wt([oe.sprite,oe.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:Wt([oe.common,oe.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:Wt([oe.lights,oe.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};Wn.physical={uniforms:Wt([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const So={r:0,b:0,g:0};function Rw(t,e,n,i,r,s,a){const o=new Xe(0);let l=s===!0?0:1,c,f,h=null,d=0,g=null;function _(m,u){let x=!1,v=u.isScene===!0?u.background:null;v&&v.isTexture&&(v=(u.backgroundBlurriness>0?n:e).get(v)),v===null?y(o,l):v&&v.isColor&&(y(v,1),x=!0);const S=t.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||x)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Fl)?(f===void 0&&(f=new Di(new Ua(1,1,1),new wr({name:"BackgroundCubeMaterial",uniforms:ws(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(b,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),f.material.uniforms.envMap.value=v,f.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,f.material.toneMapped=Ze.getTransfer(v.colorSpace)!==st,(h!==v||d!==v.version||g!==t.toneMapping)&&(f.material.needsUpdate=!0,h=v,d=v.version,g=t.toneMapping),f.layers.enableAll(),m.unshift(f,f.geometry,f.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Di(new qd(2,2),new wr({name:"BackgroundMaterial",uniforms:ws(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:Yi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(v.colorSpace)!==st,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||g!==t.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,g=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function y(m,u){m.getRGB(So,Dv(t)),i.buffers.color.setClear(So.r,So.g,So.b,u,a)}return{getClearColor:function(){return o},setClearColor:function(m,u=1){o.set(m),l=u,y(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,y(o,l)},render:_}}function bw(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=m(null);let c=l,f=!1;function h(L,z,Y,K,N){let D=!1;if(a){const k=y(K,Y,z);c!==k&&(c=k,g(c.object)),D=u(L,K,Y,N),D&&x(L,K,Y,N)}else{const k=z.wireframe===!0;(c.geometry!==K.id||c.program!==Y.id||c.wireframe!==k)&&(c.geometry=K.id,c.program=Y.id,c.wireframe=k,D=!0)}N!==null&&n.update(N,t.ELEMENT_ARRAY_BUFFER),(D||f)&&(f=!1,F(L,z,Y,K),N!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(N).buffer))}function d(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function g(L){return i.isWebGL2?t.bindVertexArray(L):s.bindVertexArrayOES(L)}function _(L){return i.isWebGL2?t.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function y(L,z,Y){const K=Y.wireframe===!0;let N=o[L.id];N===void 0&&(N={},o[L.id]=N);let D=N[z.id];D===void 0&&(D={},N[z.id]=D);let k=D[K];return k===void 0&&(k=m(d()),D[K]=k),k}function m(L){const z=[],Y=[],K=[];for(let N=0;N<r;N++)z[N]=0,Y[N]=0,K[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:Y,attributeDivisors:K,object:L,attributes:{},index:null}}function u(L,z,Y,K){const N=c.attributes,D=z.attributes;let k=0;const O=Y.getAttributes();for(const Z in O)if(O[Z].location>=0){const Q=N[Z];let se=D[Z];if(se===void 0&&(Z==="instanceMatrix"&&L.instanceMatrix&&(se=L.instanceMatrix),Z==="instanceColor"&&L.instanceColor&&(se=L.instanceColor)),Q===void 0||Q.attribute!==se||se&&Q.data!==se.data)return!0;k++}return c.attributesNum!==k||c.index!==K}function x(L,z,Y,K){const N={},D=z.attributes;let k=0;const O=Y.getAttributes();for(const Z in O)if(O[Z].location>=0){let Q=D[Z];Q===void 0&&(Z==="instanceMatrix"&&L.instanceMatrix&&(Q=L.instanceMatrix),Z==="instanceColor"&&L.instanceColor&&(Q=L.instanceColor));const se={};se.attribute=Q,Q&&Q.data&&(se.data=Q.data),N[Z]=se,k++}c.attributes=N,c.attributesNum=k,c.index=K}function v(){const L=c.newAttributes;for(let z=0,Y=L.length;z<Y;z++)L[z]=0}function S(L){b(L,0)}function b(L,z){const Y=c.newAttributes,K=c.enabledAttributes,N=c.attributeDivisors;Y[L]=1,K[L]===0&&(t.enableVertexAttribArray(L),K[L]=1),N[L]!==z&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,z),N[L]=z)}function R(){const L=c.newAttributes,z=c.enabledAttributes;for(let Y=0,K=z.length;Y<K;Y++)z[Y]!==L[Y]&&(t.disableVertexAttribArray(Y),z[Y]=0)}function A(L,z,Y,K,N,D,k){k===!0?t.vertexAttribIPointer(L,z,Y,N,D):t.vertexAttribPointer(L,z,Y,K,N,D)}function F(L,z,Y,K){if(i.isWebGL2===!1&&(L.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const N=K.attributes,D=Y.getAttributes(),k=z.defaultAttributeValues;for(const O in D){const Z=D[O];if(Z.location>=0){let B=N[O];if(B===void 0&&(O==="instanceMatrix"&&L.instanceMatrix&&(B=L.instanceMatrix),O==="instanceColor"&&L.instanceColor&&(B=L.instanceColor)),B!==void 0){const Q=B.normalized,se=B.itemSize,J=n.get(B);if(J===void 0)continue;const le=J.buffer,xe=J.type,be=J.bytesPerElement,Me=i.isWebGL2===!0&&(xe===t.INT||xe===t.UNSIGNED_INT||B.gpuType===pv);if(B.isInterleavedBufferAttribute){const We=B.data,H=We.stride,bt=B.offset;if(We.isInstancedInterleavedBuffer){for(let Ee=0;Ee<Z.locationSize;Ee++)b(Z.location+Ee,We.meshPerAttribute);L.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=We.meshPerAttribute*We.count)}else for(let Ee=0;Ee<Z.locationSize;Ee++)S(Z.location+Ee);t.bindBuffer(t.ARRAY_BUFFER,le);for(let Ee=0;Ee<Z.locationSize;Ee++)A(Z.location+Ee,se/Z.locationSize,xe,Q,H*be,(bt+se/Z.locationSize*Ee)*be,Me)}else{if(B.isInstancedBufferAttribute){for(let We=0;We<Z.locationSize;We++)b(Z.location+We,B.meshPerAttribute);L.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let We=0;We<Z.locationSize;We++)S(Z.location+We);t.bindBuffer(t.ARRAY_BUFFER,le);for(let We=0;We<Z.locationSize;We++)A(Z.location+We,se/Z.locationSize,xe,Q,se*be,se/Z.locationSize*We*be,Me)}}else if(k!==void 0){const Q=k[O];if(Q!==void 0)switch(Q.length){case 2:t.vertexAttrib2fv(Z.location,Q);break;case 3:t.vertexAttrib3fv(Z.location,Q);break;case 4:t.vertexAttrib4fv(Z.location,Q);break;default:t.vertexAttrib1fv(Z.location,Q)}}}}R()}function M(){$();for(const L in o){const z=o[L];for(const Y in z){const K=z[Y];for(const N in K)_(K[N].object),delete K[N];delete z[Y]}delete o[L]}}function w(L){if(o[L.id]===void 0)return;const z=o[L.id];for(const Y in z){const K=z[Y];for(const N in K)_(K[N].object),delete K[N];delete z[Y]}delete o[L.id]}function U(L){for(const z in o){const Y=o[z];if(Y[L.id]===void 0)continue;const K=Y[L.id];for(const N in K)_(K[N].object),delete K[N];delete Y[L.id]}}function $(){q(),f=!0,c!==l&&(c=l,g(c.object))}function q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:$,resetDefaultState:q,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfProgram:U,initAttributes:v,enableAttribute:S,disableUnusedAttributes:R}}function Lw(t,e,n,i){const r=i.isWebGL2;let s;function a(f){s=f}function o(f,h){t.drawArrays(s,f,h),n.update(h,s,1)}function l(f,h,d){if(d===0)return;let g,_;if(r)g=t,_="drawArraysInstanced";else if(g=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[_](s,f,h,d),n.update(h,s,d)}function c(f,h,d){if(d===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<d;_++)this.render(f[_],h[_]);else{g.multiDrawArraysWEBGL(s,f,0,h,0,d);let _=0;for(let y=0;y<d;y++)_+=h[y];n.update(_,s,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function Nw(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let o=n.precision!==void 0?n.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),f=n.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),d=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),y=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),u=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,S=a||e.has("OES_texture_float"),b=v&&S,R=a?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:f,maxTextures:h,maxVertexTextures:d,maxTextureSize:g,maxCubemapSize:_,maxAttributes:y,maxVertexUniforms:m,maxVaryings:u,maxFragmentUniforms:x,vertexTextures:v,floatFragmentTextures:S,floatVertexTextures:b,maxSamples:R}}function Pw(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new sr,o=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const g=h.length!==0||d||i!==0||r;return r=d,i=h.length,g},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){n=f(h,d,0)},this.setState=function(h,d,g){const _=h.clippingPlanes,y=h.clipIntersection,m=h.clipShadows,u=t.get(h);if(!r||_===null||_.length===0||s&&!m)s?f(null):c();else{const x=s?0:i,v=x*4;let S=u.clippingState||null;l.value=S,S=f(_,d,v,g);for(let b=0;b!==v;++b)S[b]=n[b];u.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,d,g,_){const y=h!==null?h.length:0;let m=null;if(y!==0){if(m=l.value,_!==!0||m===null){const u=g+y*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<u)&&(m=new Float32Array(u));for(let v=0,S=g;v!==y;++v,S+=4)a.copy(h[v]).applyMatrix4(x,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function Dw(t){let e=new WeakMap;function n(a,o){return o===Vu?a.mapping=Ss:o===ju&&(a.mapping=Ms),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Vu||o===ju)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new WS(l.height/2);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Uw extends Uv{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const is=4,xp=[.125,.215,.35,.446,.526,.582],lr=20,Hc=new Uw,yp=new Xe;let Gc=null,Vc=0,jc=0;const ar=(1+Math.sqrt(5))/2,Vr=1/ar,Sp=[new W(1,1,1),new W(-1,1,1),new W(1,1,-1),new W(-1,1,-1),new W(0,ar,Vr),new W(0,ar,-Vr),new W(Vr,0,ar),new W(-Vr,0,ar),new W(ar,Vr,0),new W(-ar,Vr,0)];class Mp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Gc=this._renderer.getRenderTarget(),Vc=this._renderer.getActiveCubeFace(),jc=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Gc,Vc,jc),e.scissorTest=!1,Mo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ss||e.mapping===Ms?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Gc=this._renderer.getRenderTarget(),Vc=this._renderer.getActiveCubeFace(),jc=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Mn,minFilter:Mn,generateMipmaps:!1,type:wa,format:On,colorSpace:mi,depthBuffer:!1},r=Ep(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ep(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Iw(s)),this._blurMaterial=Fw(s,e,n)}return r}_compileMaterial(e){const n=new Di(this._lodPlanes[0],e);this._renderer.compile(n,Hc)}_sceneToCubeUV(e,n,i,r){const o=new dn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(yp),f.toneMapping=Vi,f.autoClear=!1;const g=new Lv({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),_=new Di(new Ua,g);let y=!1;const m=e.background;m?m.isColor&&(g.color.copy(m),e.background=null,y=!0):(g.color.copy(yp),y=!0);for(let u=0;u<6;u++){const x=u%3;x===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):x===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));const v=this._cubeSize;Mo(r,x*v,u>2?v:0,v,v),f.setRenderTarget(r),y&&f.render(_,o),f.render(e,o)}_.geometry.dispose(),_.material.dispose(),f.toneMapping=d,f.autoClear=h,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ss||e.mapping===Ms;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wp());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Di(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Mo(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,Hc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Sp[(r-1)%Sp.length];this._blur(e,r-1,r,s,a)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,h=new Di(this._lodPlanes[r],c),d=c.uniforms,g=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*lr-1),y=s/_,m=isFinite(s)?1+Math.floor(f*y):lr;m>lr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${lr}`);const u=[];let x=0;for(let A=0;A<lr;++A){const F=A/y,M=Math.exp(-F*F/2);u.push(M),A===0?x+=M:A<m&&(x+=2*M)}for(let A=0;A<u.length;A++)u[A]=u[A]/x;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=u,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:v}=this;d.dTheta.value=_,d.mipInt.value=v-i;const S=this._sizeLods[r],b=3*S*(r>v-is?r-v+is:0),R=4*(this._cubeSize-S);Mo(n,b,R,3*S,2*S),l.setRenderTarget(n),l.render(h,Hc)}}function Iw(t){const e=[],n=[],i=[];let r=t;const s=t-is+1+xp.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-is?l=xp[a-t+is-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),f=-c,h=1+c,d=[f,f,h,f,h,h,f,f,h,h,f,h],g=6,_=6,y=3,m=2,u=1,x=new Float32Array(y*_*g),v=new Float32Array(m*_*g),S=new Float32Array(u*_*g);for(let R=0;R<g;R++){const A=R%3*2/3-1,F=R>2?0:-1,M=[A,F,0,A+2/3,F,0,A+2/3,F+1,0,A,F,0,A+2/3,F+1,0,A,F+1,0];x.set(M,y*_*R),v.set(d,m*_*R);const w=[R,R,R,R,R,R];S.set(w,u*_*R)}const b=new qn;b.setAttribute("position",new Bn(x,y)),b.setAttribute("uv",new Bn(v,m)),b.setAttribute("faceIndex",new Bn(S,u)),e.push(b),r>is&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Ep(t,e,n){const i=new Er(t,e,n);return i.texture.mapping=Fl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Mo(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Fw(t,e,n){const i=new Float32Array(lr),r=new W(0,1,0);return new wr({name:"SphericalGaussianBlur",defines:{n:lr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Kd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function wp(){return new wr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Tp(){return new wr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Kd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ow(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Vu||l===ju,f=l===Ss||l===Ms;if(c||f)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return n===null&&(n=new Mp(t)),h=c?n.fromEquirectangular(o,h):n.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||f&&h&&r(h)){n===null&&(n=new Mp(t));const d=c?n.fromEquirectangular(o):n.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let f=0;f<c;f++)o[f]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function kw(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function zw(t,e,n,i){const r={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const y=d.morphAttributes[_];for(let m=0,u=y.length;m<u;m++)e.remove(y[m])}d.removeEventListener("dispose",a),delete r[d.id];const g=s.get(d);g&&(e.remove(g),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function o(h,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const _ in d)e.update(d[_],t.ARRAY_BUFFER);const g=h.morphAttributes;for(const _ in g){const y=g[_];for(let m=0,u=y.length;m<u;m++)e.update(y[m],t.ARRAY_BUFFER)}}function c(h){const d=[],g=h.index,_=h.attributes.position;let y=0;if(g!==null){const x=g.array;y=g.version;for(let v=0,S=x.length;v<S;v+=3){const b=x[v+0],R=x[v+1],A=x[v+2];d.push(b,R,R,A,A,b)}}else if(_!==void 0){const x=_.array;y=_.version;for(let v=0,S=x.length/3-1;v<S;v+=3){const b=v+0,R=v+1,A=v+2;d.push(b,R,R,A,A,b)}}else return;const m=new(Ev(d)?Pv:Nv)(d,1);m.version=y;const u=s.get(h);u&&e.remove(u),s.set(h,m)}function f(h){const d=s.get(h);if(d){const g=h.index;g!==null&&d.version<g.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:f}}function Bw(t,e,n,i){const r=i.isWebGL2;let s;function a(g){s=g}let o,l;function c(g){o=g.type,l=g.bytesPerElement}function f(g,_){t.drawElements(s,_,o,g*l),n.update(_,s,1)}function h(g,_,y){if(y===0)return;let m,u;if(r)m=t,u="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[u](s,_,o,g*l,y),n.update(_,s,y)}function d(g,_,y){if(y===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<y;u++)this.render(g[u]/l,_[u]);else{m.multiDrawElementsWEBGL(s,_,0,o,g,0,y);let u=0;for(let x=0;x<y;x++)u+=_[x];n.update(u,s,1)}}this.setMode=a,this.setIndex=c,this.render=f,this.renderInstances=h,this.renderMultiDraw=d}function Hw(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Gw(t,e){return t[0]-e[0]}function Vw(t,e){return Math.abs(e[1])-Math.abs(t[1])}function jw(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,a=new Pt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,f,h){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,y=_!==void 0?_.length:0;let m=s.get(f);if(m===void 0||m.count!==y){let z=function(){q.dispose(),s.delete(f),f.removeEventListener("dispose",z)};var g=z;m!==void 0&&m.texture.dispose();const v=f.morphAttributes.position!==void 0,S=f.morphAttributes.normal!==void 0,b=f.morphAttributes.color!==void 0,R=f.morphAttributes.position||[],A=f.morphAttributes.normal||[],F=f.morphAttributes.color||[];let M=0;v===!0&&(M=1),S===!0&&(M=2),b===!0&&(M=3);let w=f.attributes.position.count*M,U=1;w>e.maxTextureSize&&(U=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const $=new Float32Array(w*U*4*y),q=new Av($,w,U,y);q.type=Pi,q.needsUpdate=!0;const L=M*4;for(let Y=0;Y<y;Y++){const K=R[Y],N=A[Y],D=F[Y],k=w*U*4*Y;for(let O=0;O<K.count;O++){const Z=O*L;v===!0&&(a.fromBufferAttribute(K,O),$[k+Z+0]=a.x,$[k+Z+1]=a.y,$[k+Z+2]=a.z,$[k+Z+3]=0),S===!0&&(a.fromBufferAttribute(N,O),$[k+Z+4]=a.x,$[k+Z+5]=a.y,$[k+Z+6]=a.z,$[k+Z+7]=0),b===!0&&(a.fromBufferAttribute(D,O),$[k+Z+8]=a.x,$[k+Z+9]=a.y,$[k+Z+10]=a.z,$[k+Z+11]=D.itemSize===4?a.w:1)}}m={count:y,texture:q,size:new Qe(w,U)},s.set(f,m),f.addEventListener("dispose",z)}let u=0;for(let v=0;v<d.length;v++)u+=d[v];const x=f.morphTargetsRelative?1:1-u;h.getUniforms().setValue(t,"morphTargetBaseInfluence",x),h.getUniforms().setValue(t,"morphTargetInfluences",d),h.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),h.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}else{const _=d===void 0?0:d.length;let y=i[f.id];if(y===void 0||y.length!==_){y=[];for(let S=0;S<_;S++)y[S]=[S,0];i[f.id]=y}for(let S=0;S<_;S++){const b=y[S];b[0]=S,b[1]=d[S]}y.sort(Vw);for(let S=0;S<8;S++)S<_&&y[S][1]?(o[S][0]=y[S][0],o[S][1]=y[S][1]):(o[S][0]=Number.MAX_SAFE_INTEGER,o[S][1]=0);o.sort(Gw);const m=f.morphAttributes.position,u=f.morphAttributes.normal;let x=0;for(let S=0;S<8;S++){const b=o[S],R=b[0],A=b[1];R!==Number.MAX_SAFE_INTEGER&&A?(m&&f.getAttribute("morphTarget"+S)!==m[R]&&f.setAttribute("morphTarget"+S,m[R]),u&&f.getAttribute("morphNormal"+S)!==u[R]&&f.setAttribute("morphNormal"+S,u[R]),r[S]=A,x+=A):(m&&f.hasAttribute("morphTarget"+S)===!0&&f.deleteAttribute("morphTarget"+S),u&&f.hasAttribute("morphNormal"+S)===!0&&f.deleteAttribute("morphNormal"+S),r[S]=0)}const v=f.morphTargetsRelative?1:1-x;h.getUniforms().setValue(t,"morphTargetBaseInfluence",v),h.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function Ww(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,f=l.geometry,h=e.get(l,f);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}class kv extends pn{constructor(e,n,i,r,s,a,o,l,c,f){if(f=f!==void 0?f:gr,f!==gr&&f!==Es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===gr&&(i=Ni),i===void 0&&f===Es&&(i=mr),super(null,r,s,a,o,l,f,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:Yt,this.minFilter=l!==void 0?l:Yt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const zv=new pn,Bv=new kv(1,1);Bv.compareFunction=Mv;const Hv=new Av,Gv=new RS,Vv=new Iv,Ap=[],Cp=[],Rp=new Float32Array(16),bp=new Float32Array(9),Lp=new Float32Array(4);function Ls(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Ap[r];if(s===void 0&&(s=new Float32Array(r),Ap[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function St(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Mt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Bl(t,e){let n=Cp[e];n===void 0&&(n=new Int32Array(e),Cp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Xw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Yw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(St(n,e))return;t.uniform2fv(this.addr,e),Mt(n,e)}}function $w(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(St(n,e))return;t.uniform3fv(this.addr,e),Mt(n,e)}}function qw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(St(n,e))return;t.uniform4fv(this.addr,e),Mt(n,e)}}function Kw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(St(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Mt(n,e)}else{if(St(n,i))return;Lp.set(i),t.uniformMatrix2fv(this.addr,!1,Lp),Mt(n,i)}}function Zw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(St(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Mt(n,e)}else{if(St(n,i))return;bp.set(i),t.uniformMatrix3fv(this.addr,!1,bp),Mt(n,i)}}function Qw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(St(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Mt(n,e)}else{if(St(n,i))return;Rp.set(i),t.uniformMatrix4fv(this.addr,!1,Rp),Mt(n,i)}}function Jw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function eT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(St(n,e))return;t.uniform2iv(this.addr,e),Mt(n,e)}}function tT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(St(n,e))return;t.uniform3iv(this.addr,e),Mt(n,e)}}function nT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(St(n,e))return;t.uniform4iv(this.addr,e),Mt(n,e)}}function iT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function rT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(St(n,e))return;t.uniform2uiv(this.addr,e),Mt(n,e)}}function sT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(St(n,e))return;t.uniform3uiv(this.addr,e),Mt(n,e)}}function aT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(St(n,e))return;t.uniform4uiv(this.addr,e),Mt(n,e)}}function oT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?Bv:zv;n.setTexture2D(e||s,r)}function lT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Gv,r)}function cT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Vv,r)}function uT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Hv,r)}function dT(t){switch(t){case 5126:return Xw;case 35664:return Yw;case 35665:return $w;case 35666:return qw;case 35674:return Kw;case 35675:return Zw;case 35676:return Qw;case 5124:case 35670:return Jw;case 35667:case 35671:return eT;case 35668:case 35672:return tT;case 35669:case 35673:return nT;case 5125:return iT;case 36294:return rT;case 36295:return sT;case 36296:return aT;case 35678:case 36198:case 36298:case 36306:case 35682:return oT;case 35679:case 36299:case 36307:return lT;case 35680:case 36300:case 36308:case 36293:return cT;case 36289:case 36303:case 36311:case 36292:return uT}}function fT(t,e){t.uniform1fv(this.addr,e)}function hT(t,e){const n=Ls(e,this.size,2);t.uniform2fv(this.addr,n)}function pT(t,e){const n=Ls(e,this.size,3);t.uniform3fv(this.addr,n)}function mT(t,e){const n=Ls(e,this.size,4);t.uniform4fv(this.addr,n)}function gT(t,e){const n=Ls(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function vT(t,e){const n=Ls(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function _T(t,e){const n=Ls(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function xT(t,e){t.uniform1iv(this.addr,e)}function yT(t,e){t.uniform2iv(this.addr,e)}function ST(t,e){t.uniform3iv(this.addr,e)}function MT(t,e){t.uniform4iv(this.addr,e)}function ET(t,e){t.uniform1uiv(this.addr,e)}function wT(t,e){t.uniform2uiv(this.addr,e)}function TT(t,e){t.uniform3uiv(this.addr,e)}function AT(t,e){t.uniform4uiv(this.addr,e)}function CT(t,e,n){const i=this.cache,r=e.length,s=Bl(n,r);St(i,s)||(t.uniform1iv(this.addr,s),Mt(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||zv,s[a])}function RT(t,e,n){const i=this.cache,r=e.length,s=Bl(n,r);St(i,s)||(t.uniform1iv(this.addr,s),Mt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Gv,s[a])}function bT(t,e,n){const i=this.cache,r=e.length,s=Bl(n,r);St(i,s)||(t.uniform1iv(this.addr,s),Mt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||Vv,s[a])}function LT(t,e,n){const i=this.cache,r=e.length,s=Bl(n,r);St(i,s)||(t.uniform1iv(this.addr,s),Mt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Hv,s[a])}function NT(t){switch(t){case 5126:return fT;case 35664:return hT;case 35665:return pT;case 35666:return mT;case 35674:return gT;case 35675:return vT;case 35676:return _T;case 5124:case 35670:return xT;case 35667:case 35671:return yT;case 35668:case 35672:return ST;case 35669:case 35673:return MT;case 5125:return ET;case 36294:return wT;case 36295:return TT;case 36296:return AT;case 35678:case 36198:case 36298:case 36306:case 35682:return CT;case 35679:case 36299:case 36307:return RT;case 35680:case 36300:case 36308:case 36293:return bT;case 36289:case 36303:case 36311:case 36292:return LT}}class PT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=dT(n.type)}}class DT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=NT(n.type)}}class UT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const Wc=/(\w+)(\])?(\[|\.)?/g;function Np(t,e){t.seq.push(e),t.map[e.id]=e}function IT(t,e,n){const i=t.name,r=i.length;for(Wc.lastIndex=0;;){const s=Wc.exec(i),a=Wc.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Np(n,c===void 0?new PT(o,t,e):new DT(o,t,e));break}else{let h=n.map[o];h===void 0&&(h=new UT(o),Np(n,h)),n=h}}}class zo{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);IT(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Pp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const FT=37297;let OT=0;function kT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function zT(t){const e=Ze.getPrimaries(Ze.workingColorSpace),n=Ze.getPrimaries(t);let i;switch(e===n?i="":e===ml&&n===pl?i="LinearDisplayP3ToLinearSRGB":e===pl&&n===ml&&(i="LinearSRGBToLinearDisplayP3"),t){case mi:case Ol:return[i,"LinearTransferOETF"];case Nt:case Yd:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Dp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+kT(t.getShaderSource(e),a)}else return r}function BT(t,e){const n=zT(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function HT(t,e){let n;switch(e){case Oy:n="Linear";break;case ky:n="Reinhard";break;case zy:n="OptimizedCineon";break;case By:n="ACESFilmic";break;case Gy:n="AgX";break;case Hy:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function GT(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(rs).join(`
`)}function VT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(rs).join(`
`)}function jT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function WT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function rs(t){return t!==""}function Up(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ip(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const XT=/^[ \t]*#include +<([\w\d./]+)>/gm;function qu(t){return t.replace(XT,$T)}const YT=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function $T(t,e){let n=Fe[e];if(n===void 0){const i=YT.get(e);if(i!==void 0)n=Fe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return qu(n)}const qT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fp(t){return t.replace(qT,KT)}function KT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Op(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ZT(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===dv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===dy?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ni&&(e="SHADOWMAP_TYPE_VSM"),e}function QT(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ss:case Ms:e="ENVMAP_TYPE_CUBE";break;case Fl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function JT(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ms:e="ENVMAP_MODE_REFRACTION";break}return e}function e1(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case fv:e="ENVMAP_BLENDING_MULTIPLY";break;case Iy:e="ENVMAP_BLENDING_MIX";break;case Fy:e="ENVMAP_BLENDING_ADD";break}return e}function t1(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function n1(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=ZT(n),c=QT(n),f=JT(n),h=e1(n),d=t1(n),g=n.isWebGL2?"":GT(n),_=VT(n),y=jT(s),m=r.createProgram();let u,x,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(rs).join(`
`),u.length>0&&(u+=`
`),x=[g,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(rs).join(`
`),x.length>0&&(x+=`
`)):(u=[Op(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rs).join(`
`),x=[g,Op(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Vi?"#define TONE_MAPPING":"",n.toneMapping!==Vi?Fe.tonemapping_pars_fragment:"",n.toneMapping!==Vi?HT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,BT("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(rs).join(`
`)),a=qu(a),a=Up(a,n),a=Ip(a,n),o=qu(o),o=Up(o,n),o=Ip(o,n),a=Fp(a),o=Fp(o),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,u=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,x=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===ep?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===ep?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const S=v+u+a,b=v+x+o,R=Pp(r,r.VERTEX_SHADER,S),A=Pp(r,r.FRAGMENT_SHADER,b);r.attachShader(m,R),r.attachShader(m,A),n.index0AttributeName!==void 0?r.bindAttribLocation(m,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function F($){if(t.debug.checkShaderErrors){const q=r.getProgramInfoLog(m).trim(),L=r.getShaderInfoLog(R).trim(),z=r.getShaderInfoLog(A).trim();let Y=!0,K=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(Y=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,m,R,A);else{const N=Dp(r,R,"vertex"),D=Dp(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+q+`
`+N+`
`+D)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(L===""||z==="")&&(K=!1);K&&($.diagnostics={runnable:Y,programLog:q,vertexShader:{log:L,prefix:u},fragmentShader:{log:z,prefix:x}})}r.deleteShader(R),r.deleteShader(A),M=new zo(r,m),w=WT(r,m)}let M;this.getUniforms=function(){return M===void 0&&F(this),M};let w;this.getAttributes=function(){return w===void 0&&F(this),w};let U=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=r.getProgramParameter(m,FT)),U},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=OT++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=R,this.fragmentShader=A,this}let i1=0;class r1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new s1(e),n.set(e,i)),i}}class s1{constructor(e){this.id=i1++,this.code=e,this.usedTimes=0}}function a1(t,e,n,i,r,s,a){const o=new Rv,l=new r1,c=[],f=r.isWebGL2,h=r.logarithmicDepthBuffer,d=r.vertexTextures;let g=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(M){return M===0?"uv":`uv${M}`}function m(M,w,U,$,q){const L=$.fog,z=q.geometry,Y=M.isMeshStandardMaterial?$.environment:null,K=(M.isMeshStandardMaterial?n:e).get(M.envMap||Y),N=K&&K.mapping===Fl?K.image.height:null,D=_[M.type];M.precision!==null&&(g=r.getMaxPrecision(M.precision),g!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",g,"instead."));const k=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,O=k!==void 0?k.length:0;let Z=0;z.morphAttributes.position!==void 0&&(Z=1),z.morphAttributes.normal!==void 0&&(Z=2),z.morphAttributes.color!==void 0&&(Z=3);let B,Q,se,J;if(D){const Gt=Wn[D];B=Gt.vertexShader,Q=Gt.fragmentShader}else B=M.vertexShader,Q=M.fragmentShader,l.update(M),se=l.getVertexShaderID(M),J=l.getFragmentShaderID(M);const le=t.getRenderTarget(),xe=q.isInstancedMesh===!0,be=q.isBatchedMesh===!0,Me=!!M.map,We=!!M.matcap,H=!!K,bt=!!M.aoMap,Ee=!!M.lightMap,Ne=!!M.bumpMap,ve=!!M.normalMap,it=!!M.displacementMap,Oe=!!M.emissiveMap,C=!!M.metalnessMap,E=!!M.roughnessMap,V=M.anisotropy>0,ie=M.clearcoat>0,te=M.iridescence>0,re=M.sheen>0,ye=M.transmission>0,de=V&&!!M.anisotropyMap,pe=ie&&!!M.clearcoatMap,Ce=ie&&!!M.clearcoatNormalMap,ke=ie&&!!M.clearcoatRoughnessMap,ee=te&&!!M.iridescenceMap,Ke=te&&!!M.iridescenceThicknessMap,Ve=re&&!!M.sheenColorMap,Pe=re&&!!M.sheenRoughnessMap,we=!!M.specularMap,me=!!M.specularColorMap,Ie=!!M.specularIntensityMap,$e=ye&&!!M.transmissionMap,ft=ye&&!!M.thicknessMap,Be=!!M.gradientMap,ae=!!M.alphaMap,P=M.alphaTest>0,ce=!!M.alphaHash,ue=!!M.extensions,Re=!!z.attributes.uv1,Te=!!z.attributes.uv2,Je=!!z.attributes.uv3;let et=Vi;return M.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(et=t.toneMapping),{isWebGL2:f,shaderID:D,shaderType:M.type,shaderName:M.name,vertexShader:B,fragmentShader:Q,defines:M.defines,customVertexShaderID:se,customFragmentShaderID:J,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:g,batching:be,instancing:xe,instancingColor:xe&&q.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:le===null?t.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:mi,map:Me,matcap:We,envMap:H,envMapMode:H&&K.mapping,envMapCubeUVHeight:N,aoMap:bt,lightMap:Ee,bumpMap:Ne,normalMap:ve,displacementMap:d&&it,emissiveMap:Oe,normalMapObjectSpace:ve&&M.normalMapType===tS,normalMapTangentSpace:ve&&M.normalMapType===eS,metalnessMap:C,roughnessMap:E,anisotropy:V,anisotropyMap:de,clearcoat:ie,clearcoatMap:pe,clearcoatNormalMap:Ce,clearcoatRoughnessMap:ke,iridescence:te,iridescenceMap:ee,iridescenceThicknessMap:Ke,sheen:re,sheenColorMap:Ve,sheenRoughnessMap:Pe,specularMap:we,specularColorMap:me,specularIntensityMap:Ie,transmission:ye,transmissionMap:$e,thicknessMap:ft,gradientMap:Be,opaque:M.transparent===!1&&M.blending===ds,alphaMap:ae,alphaTest:P,alphaHash:ce,combine:M.combine,mapUv:Me&&y(M.map.channel),aoMapUv:bt&&y(M.aoMap.channel),lightMapUv:Ee&&y(M.lightMap.channel),bumpMapUv:Ne&&y(M.bumpMap.channel),normalMapUv:ve&&y(M.normalMap.channel),displacementMapUv:it&&y(M.displacementMap.channel),emissiveMapUv:Oe&&y(M.emissiveMap.channel),metalnessMapUv:C&&y(M.metalnessMap.channel),roughnessMapUv:E&&y(M.roughnessMap.channel),anisotropyMapUv:de&&y(M.anisotropyMap.channel),clearcoatMapUv:pe&&y(M.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&y(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ke&&y(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&y(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ke&&y(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ve&&y(M.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&y(M.sheenRoughnessMap.channel),specularMapUv:we&&y(M.specularMap.channel),specularColorMapUv:me&&y(M.specularColorMap.channel),specularIntensityMapUv:Ie&&y(M.specularIntensityMap.channel),transmissionMapUv:$e&&y(M.transmissionMap.channel),thicknessMapUv:ft&&y(M.thicknessMap.channel),alphaMapUv:ae&&y(M.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(ve||V),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUv1s:Re,vertexUv2s:Te,vertexUv3s:Je,pointsUvs:q.isPoints===!0&&!!z.attributes.uv&&(Me||ae),fog:!!L,useFog:M.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:q.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:Z,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:t.shadowMap.enabled&&U.length>0,shadowMapType:t.shadowMap.type,toneMapping:et,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Me&&M.map.isVideoTexture===!0&&Ze.getTransfer(M.map.colorSpace)===st,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===si,flipSided:M.side===rn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ue&&M.extensions.derivatives===!0,extensionFragDepth:ue&&M.extensions.fragDepth===!0,extensionDrawBuffers:ue&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ue&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ue&&M.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function u(M){const w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(const U in M.defines)w.push(U),w.push(M.defines[U]);return M.isRawShaderMaterial===!1&&(x(w,M),v(w,M),w.push(t.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function x(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.numLightProbes),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function v(M,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),M.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.useLegacyLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),M.push(o.mask)}function S(M){const w=_[M.type];let U;if(w){const $=Wn[w];U=HS.clone($.uniforms)}else U=M.uniforms;return U}function b(M,w){let U;for(let $=0,q=c.length;$<q;$++){const L=c[$];if(L.cacheKey===w){U=L,++U.usedTimes;break}}return U===void 0&&(U=new n1(t,w,M,s),c.push(U)),U}function R(M){if(--M.usedTimes===0){const w=c.indexOf(M);c[w]=c[c.length-1],c.pop(),M.destroy()}}function A(M){l.remove(M)}function F(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:S,acquireProgram:b,releaseProgram:R,releaseShaderCache:A,programs:c,dispose:F}}function o1(){let t=new WeakMap;function e(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function n(s){t.delete(s)}function i(s,a,o){t.get(s)[a]=o}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function l1(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function kp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function zp(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(h,d,g,_,y,m){let u=t[e];return u===void 0?(u={id:h.id,object:h,geometry:d,material:g,groupOrder:_,renderOrder:h.renderOrder,z:y,group:m},t[e]=u):(u.id=h.id,u.object=h,u.geometry=d,u.material=g,u.groupOrder=_,u.renderOrder=h.renderOrder,u.z=y,u.group=m),e++,u}function o(h,d,g,_,y,m){const u=a(h,d,g,_,y,m);g.transmission>0?i.push(u):g.transparent===!0?r.push(u):n.push(u)}function l(h,d,g,_,y,m){const u=a(h,d,g,_,y,m);g.transmission>0?i.unshift(u):g.transparent===!0?r.unshift(u):n.unshift(u)}function c(h,d){n.length>1&&n.sort(h||l1),i.length>1&&i.sort(d||kp),r.length>1&&r.sort(d||kp)}function f(){for(let h=e,d=t.length;h<d;h++){const g=t[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:f,sort:c}}function c1(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new zp,t.set(i,[a])):r>=s.length?(a=new zp,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function u1(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new W,color:new Xe};break;case"SpotLight":n={position:new W,direction:new W,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new W,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new W,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":n={color:new Xe,position:new W,halfWidth:new W,halfHeight:new W};break}return t[e.id]=n,n}}}function d1(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let f1=0;function h1(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function p1(t,e){const n=new u1,i=d1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)r.probe.push(new W);const s=new W,a=new Rt,o=new Rt;function l(f,h){let d=0,g=0,_=0;for(let $=0;$<9;$++)r.probe[$].set(0,0,0);let y=0,m=0,u=0,x=0,v=0,S=0,b=0,R=0,A=0,F=0,M=0;f.sort(h1);const w=h===!0?Math.PI:1;for(let $=0,q=f.length;$<q;$++){const L=f[$],z=L.color,Y=L.intensity,K=L.distance,N=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=z.r*Y*w,g+=z.g*Y*w,_+=z.b*Y*w;else if(L.isLightProbe){for(let D=0;D<9;D++)r.probe[D].addScaledVector(L.sh.coefficients[D],Y);M++}else if(L.isDirectionalLight){const D=n.get(L);if(D.color.copy(L.color).multiplyScalar(L.intensity*w),L.castShadow){const k=L.shadow,O=i.get(L);O.shadowBias=k.bias,O.shadowNormalBias=k.normalBias,O.shadowRadius=k.radius,O.shadowMapSize=k.mapSize,r.directionalShadow[y]=O,r.directionalShadowMap[y]=N,r.directionalShadowMatrix[y]=L.shadow.matrix,S++}r.directional[y]=D,y++}else if(L.isSpotLight){const D=n.get(L);D.position.setFromMatrixPosition(L.matrixWorld),D.color.copy(z).multiplyScalar(Y*w),D.distance=K,D.coneCos=Math.cos(L.angle),D.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),D.decay=L.decay,r.spot[u]=D;const k=L.shadow;if(L.map&&(r.spotLightMap[A]=L.map,A++,k.updateMatrices(L),L.castShadow&&F++),r.spotLightMatrix[u]=k.matrix,L.castShadow){const O=i.get(L);O.shadowBias=k.bias,O.shadowNormalBias=k.normalBias,O.shadowRadius=k.radius,O.shadowMapSize=k.mapSize,r.spotShadow[u]=O,r.spotShadowMap[u]=N,R++}u++}else if(L.isRectAreaLight){const D=n.get(L);D.color.copy(z).multiplyScalar(Y),D.halfWidth.set(L.width*.5,0,0),D.halfHeight.set(0,L.height*.5,0),r.rectArea[x]=D,x++}else if(L.isPointLight){const D=n.get(L);if(D.color.copy(L.color).multiplyScalar(L.intensity*w),D.distance=L.distance,D.decay=L.decay,L.castShadow){const k=L.shadow,O=i.get(L);O.shadowBias=k.bias,O.shadowNormalBias=k.normalBias,O.shadowRadius=k.radius,O.shadowMapSize=k.mapSize,O.shadowCameraNear=k.camera.near,O.shadowCameraFar=k.camera.far,r.pointShadow[m]=O,r.pointShadowMap[m]=N,r.pointShadowMatrix[m]=L.shadow.matrix,b++}r.point[m]=D,m++}else if(L.isHemisphereLight){const D=n.get(L);D.skyColor.copy(L.color).multiplyScalar(Y*w),D.groundColor.copy(L.groundColor).multiplyScalar(Y*w),r.hemi[v]=D,v++}}x>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_FLOAT_1,r.rectAreaLTC2=oe.LTC_FLOAT_2):(r.rectAreaLTC1=oe.LTC_HALF_1,r.rectAreaLTC2=oe.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_FLOAT_1,r.rectAreaLTC2=oe.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_HALF_1,r.rectAreaLTC2=oe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=g,r.ambient[2]=_;const U=r.hash;(U.directionalLength!==y||U.pointLength!==m||U.spotLength!==u||U.rectAreaLength!==x||U.hemiLength!==v||U.numDirectionalShadows!==S||U.numPointShadows!==b||U.numSpotShadows!==R||U.numSpotMaps!==A||U.numLightProbes!==M)&&(r.directional.length=y,r.spot.length=u,r.rectArea.length=x,r.point.length=m,r.hemi.length=v,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=b,r.spotLightMatrix.length=R+A-F,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=M,U.directionalLength=y,U.pointLength=m,U.spotLength=u,U.rectAreaLength=x,U.hemiLength=v,U.numDirectionalShadows=S,U.numPointShadows=b,U.numSpotShadows=R,U.numSpotMaps=A,U.numLightProbes=M,r.version=f1++)}function c(f,h){let d=0,g=0,_=0,y=0,m=0;const u=h.matrixWorldInverse;for(let x=0,v=f.length;x<v;x++){const S=f[x];if(S.isDirectionalLight){const b=r.directional[d];b.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(u),d++}else if(S.isSpotLight){const b=r.spot[_];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(u),b.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(u),_++}else if(S.isRectAreaLight){const b=r.rectArea[y];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(u),o.identity(),a.copy(S.matrixWorld),a.premultiply(u),o.extractRotation(a),b.halfWidth.set(S.width*.5,0,0),b.halfHeight.set(0,S.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),y++}else if(S.isPointLight){const b=r.point[g];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(u),g++}else if(S.isHemisphereLight){const b=r.hemi[m];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(u),m++}}}return{setup:l,setupView:c,state:r}}function Bp(t,e){const n=new p1(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(h){i.push(h)}function o(h){r.push(h)}function l(h){n.setup(i,h)}function c(h){n.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function m1(t,e){let n=new WeakMap;function i(s,a=0){const o=n.get(s);let l;return o===void 0?(l=new Bp(t,e),n.set(s,[l])):a>=o.length?(l=new Bp(t,e),o.push(l)):l=o[a],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class g1 extends Da{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class v1 extends Da{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const _1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,x1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function y1(t,e,n){let i=new Fv;const r=new Qe,s=new Qe,a=new Pt,o=new g1({depthPacking:Jy}),l=new v1,c={},f=n.maxTextureSize,h={[Yi]:rn,[rn]:Yi,[si]:si},d=new wr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:_1,fragmentShader:x1}),g=d.clone();g.defines.HORIZONTAL_PASS=1;const _=new qn;_.setAttribute("position",new Bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Di(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dv;let u=this.type;this.render=function(R,A,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const M=t.getRenderTarget(),w=t.getActiveCubeFace(),U=t.getActiveMipmapLevel(),$=t.state;$.setBlending(Gi),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const q=u!==ni&&this.type===ni,L=u===ni&&this.type!==ni;for(let z=0,Y=R.length;z<Y;z++){const K=R[z],N=K.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const D=N.getFrameExtents();if(r.multiply(D),s.copy(N.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/D.x),r.x=s.x*D.x,N.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/D.y),r.y=s.y*D.y,N.mapSize.y=s.y)),N.map===null||q===!0||L===!0){const O=this.type!==ni?{minFilter:Yt,magFilter:Yt}:{};N.map!==null&&N.map.dispose(),N.map=new Er(r.x,r.y,O),N.map.texture.name=K.name+".shadowMap",N.camera.updateProjectionMatrix()}t.setRenderTarget(N.map),t.clear();const k=N.getViewportCount();for(let O=0;O<k;O++){const Z=N.getViewport(O);a.set(s.x*Z.x,s.y*Z.y,s.x*Z.z,s.y*Z.w),$.viewport(a),N.updateMatrices(K,O),i=N.getFrustum(),S(A,F,N.camera,K,this.type)}N.isPointLightShadow!==!0&&this.type===ni&&x(N,F),N.needsUpdate=!1}u=this.type,m.needsUpdate=!1,t.setRenderTarget(M,w,U)};function x(R,A){const F=e.update(y);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,g.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,g.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Er(r.x,r.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,t.setRenderTarget(R.mapPass),t.clear(),t.renderBufferDirect(A,null,F,d,y,null),g.uniforms.shadow_pass.value=R.mapPass.texture,g.uniforms.resolution.value=R.mapSize,g.uniforms.radius.value=R.radius,t.setRenderTarget(R.map),t.clear(),t.renderBufferDirect(A,null,F,g,y,null)}function v(R,A,F,M){let w=null;const U=F.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(U!==void 0)w=U;else if(w=F.isPointLight===!0?l:o,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const $=w.uuid,q=A.uuid;let L=c[$];L===void 0&&(L={},c[$]=L);let z=L[q];z===void 0&&(z=w.clone(),L[q]=z,A.addEventListener("dispose",b)),w=z}if(w.visible=A.visible,w.wireframe=A.wireframe,M===ni?w.side=A.shadowSide!==null?A.shadowSide:A.side:w.side=A.shadowSide!==null?A.shadowSide:h[A.side],w.alphaMap=A.alphaMap,w.alphaTest=A.alphaTest,w.map=A.map,w.clipShadows=A.clipShadows,w.clippingPlanes=A.clippingPlanes,w.clipIntersection=A.clipIntersection,w.displacementMap=A.displacementMap,w.displacementScale=A.displacementScale,w.displacementBias=A.displacementBias,w.wireframeLinewidth=A.wireframeLinewidth,w.linewidth=A.linewidth,F.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const $=t.properties.get(w);$.light=F}return w}function S(R,A,F,M,w){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&w===ni)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,R.matrixWorld);const q=e.update(R),L=R.material;if(Array.isArray(L)){const z=q.groups;for(let Y=0,K=z.length;Y<K;Y++){const N=z[Y],D=L[N.materialIndex];if(D&&D.visible){const k=v(R,D,M,w);R.onBeforeShadow(t,R,A,F,q,k,N),t.renderBufferDirect(F,null,q,k,R,N),R.onAfterShadow(t,R,A,F,q,k,N)}}}else if(L.visible){const z=v(R,L,M,w);R.onBeforeShadow(t,R,A,F,q,z,null),t.renderBufferDirect(F,null,q,z,R,null),R.onAfterShadow(t,R,A,F,q,z,null)}}const $=R.children;for(let q=0,L=$.length;q<L;q++)S($[q],A,F,M,w)}function b(R){R.target.removeEventListener("dispose",b);for(const F in c){const M=c[F],w=R.target.uuid;w in M&&(M[w].dispose(),delete M[w])}}}function S1(t,e,n){const i=n.isWebGL2;function r(){let P=!1;const ce=new Pt;let ue=null;const Re=new Pt(0,0,0,0);return{setMask:function(Te){ue!==Te&&!P&&(t.colorMask(Te,Te,Te,Te),ue=Te)},setLocked:function(Te){P=Te},setClear:function(Te,Je,et,Et,Gt){Gt===!0&&(Te*=Et,Je*=Et,et*=Et),ce.set(Te,Je,et,Et),Re.equals(ce)===!1&&(t.clearColor(Te,Je,et,Et),Re.copy(ce))},reset:function(){P=!1,ue=null,Re.set(-1,0,0,0)}}}function s(){let P=!1,ce=null,ue=null,Re=null;return{setTest:function(Te){Te?be(t.DEPTH_TEST):Me(t.DEPTH_TEST)},setMask:function(Te){ce!==Te&&!P&&(t.depthMask(Te),ce=Te)},setFunc:function(Te){if(ue!==Te){switch(Te){case Ry:t.depthFunc(t.NEVER);break;case by:t.depthFunc(t.ALWAYS);break;case Ly:t.depthFunc(t.LESS);break;case fl:t.depthFunc(t.LEQUAL);break;case Ny:t.depthFunc(t.EQUAL);break;case Py:t.depthFunc(t.GEQUAL);break;case Dy:t.depthFunc(t.GREATER);break;case Uy:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ue=Te}},setLocked:function(Te){P=Te},setClear:function(Te){Re!==Te&&(t.clearDepth(Te),Re=Te)},reset:function(){P=!1,ce=null,ue=null,Re=null}}}function a(){let P=!1,ce=null,ue=null,Re=null,Te=null,Je=null,et=null,Et=null,Gt=null;return{setTest:function(tt){P||(tt?be(t.STENCIL_TEST):Me(t.STENCIL_TEST))},setMask:function(tt){ce!==tt&&!P&&(t.stencilMask(tt),ce=tt)},setFunc:function(tt,Vt,Gn){(ue!==tt||Re!==Vt||Te!==Gn)&&(t.stencilFunc(tt,Vt,Gn),ue=tt,Re=Vt,Te=Gn)},setOp:function(tt,Vt,Gn){(Je!==tt||et!==Vt||Et!==Gn)&&(t.stencilOp(tt,Vt,Gn),Je=tt,et=Vt,Et=Gn)},setLocked:function(tt){P=tt},setClear:function(tt){Gt!==tt&&(t.clearStencil(tt),Gt=tt)},reset:function(){P=!1,ce=null,ue=null,Re=null,Te=null,Je=null,et=null,Et=null,Gt=null}}}const o=new r,l=new s,c=new a,f=new WeakMap,h=new WeakMap;let d={},g={},_=new WeakMap,y=[],m=null,u=!1,x=null,v=null,S=null,b=null,R=null,A=null,F=null,M=new Xe(0,0,0),w=0,U=!1,$=null,q=null,L=null,z=null,Y=null;const K=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,D=0;const k=t.getParameter(t.VERSION);k.indexOf("WebGL")!==-1?(D=parseFloat(/^WebGL (\d)/.exec(k)[1]),N=D>=1):k.indexOf("OpenGL ES")!==-1&&(D=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),N=D>=2);let O=null,Z={};const B=t.getParameter(t.SCISSOR_BOX),Q=t.getParameter(t.VIEWPORT),se=new Pt().fromArray(B),J=new Pt().fromArray(Q);function le(P,ce,ue,Re){const Te=new Uint8Array(4),Je=t.createTexture();t.bindTexture(P,Je),t.texParameteri(P,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(P,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let et=0;et<ue;et++)i&&(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)?t.texImage3D(ce,0,t.RGBA,1,1,Re,0,t.RGBA,t.UNSIGNED_BYTE,Te):t.texImage2D(ce+et,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Te);return Je}const xe={};xe[t.TEXTURE_2D]=le(t.TEXTURE_2D,t.TEXTURE_2D,1),xe[t.TEXTURE_CUBE_MAP]=le(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(xe[t.TEXTURE_2D_ARRAY]=le(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),xe[t.TEXTURE_3D]=le(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),be(t.DEPTH_TEST),l.setFunc(fl),Oe(!1),C(Sh),be(t.CULL_FACE),ve(Gi);function be(P){d[P]!==!0&&(t.enable(P),d[P]=!0)}function Me(P){d[P]!==!1&&(t.disable(P),d[P]=!1)}function We(P,ce){return g[P]!==ce?(t.bindFramebuffer(P,ce),g[P]=ce,i&&(P===t.DRAW_FRAMEBUFFER&&(g[t.FRAMEBUFFER]=ce),P===t.FRAMEBUFFER&&(g[t.DRAW_FRAMEBUFFER]=ce)),!0):!1}function H(P,ce){let ue=y,Re=!1;if(P)if(ue=_.get(ce),ue===void 0&&(ue=[],_.set(ce,ue)),P.isWebGLMultipleRenderTargets){const Te=P.texture;if(ue.length!==Te.length||ue[0]!==t.COLOR_ATTACHMENT0){for(let Je=0,et=Te.length;Je<et;Je++)ue[Je]=t.COLOR_ATTACHMENT0+Je;ue.length=Te.length,Re=!0}}else ue[0]!==t.COLOR_ATTACHMENT0&&(ue[0]=t.COLOR_ATTACHMENT0,Re=!0);else ue[0]!==t.BACK&&(ue[0]=t.BACK,Re=!0);Re&&(n.isWebGL2?t.drawBuffers(ue):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ue))}function bt(P){return m!==P?(t.useProgram(P),m=P,!0):!1}const Ee={[or]:t.FUNC_ADD,[hy]:t.FUNC_SUBTRACT,[py]:t.FUNC_REVERSE_SUBTRACT};if(i)Ee[wh]=t.MIN,Ee[Th]=t.MAX;else{const P=e.get("EXT_blend_minmax");P!==null&&(Ee[wh]=P.MIN_EXT,Ee[Th]=P.MAX_EXT)}const Ne={[my]:t.ZERO,[gy]:t.ONE,[vy]:t.SRC_COLOR,[Hu]:t.SRC_ALPHA,[Ey]:t.SRC_ALPHA_SATURATE,[Sy]:t.DST_COLOR,[xy]:t.DST_ALPHA,[_y]:t.ONE_MINUS_SRC_COLOR,[Gu]:t.ONE_MINUS_SRC_ALPHA,[My]:t.ONE_MINUS_DST_COLOR,[yy]:t.ONE_MINUS_DST_ALPHA,[wy]:t.CONSTANT_COLOR,[Ty]:t.ONE_MINUS_CONSTANT_COLOR,[Ay]:t.CONSTANT_ALPHA,[Cy]:t.ONE_MINUS_CONSTANT_ALPHA};function ve(P,ce,ue,Re,Te,Je,et,Et,Gt,tt){if(P===Gi){u===!0&&(Me(t.BLEND),u=!1);return}if(u===!1&&(be(t.BLEND),u=!0),P!==fy){if(P!==x||tt!==U){if((v!==or||R!==or)&&(t.blendEquation(t.FUNC_ADD),v=or,R=or),tt)switch(P){case ds:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case dl:t.blendFunc(t.ONE,t.ONE);break;case Mh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Eh:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case ds:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case dl:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Mh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Eh:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}S=null,b=null,A=null,F=null,M.set(0,0,0),w=0,x=P,U=tt}return}Te=Te||ce,Je=Je||ue,et=et||Re,(ce!==v||Te!==R)&&(t.blendEquationSeparate(Ee[ce],Ee[Te]),v=ce,R=Te),(ue!==S||Re!==b||Je!==A||et!==F)&&(t.blendFuncSeparate(Ne[ue],Ne[Re],Ne[Je],Ne[et]),S=ue,b=Re,A=Je,F=et),(Et.equals(M)===!1||Gt!==w)&&(t.blendColor(Et.r,Et.g,Et.b,Gt),M.copy(Et),w=Gt),x=P,U=!1}function it(P,ce){P.side===si?Me(t.CULL_FACE):be(t.CULL_FACE);let ue=P.side===rn;ce&&(ue=!ue),Oe(ue),P.blending===ds&&P.transparent===!1?ve(Gi):ve(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),o.setMask(P.colorWrite);const Re=P.stencilWrite;c.setTest(Re),Re&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),V(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?be(t.SAMPLE_ALPHA_TO_COVERAGE):Me(t.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(P){$!==P&&(P?t.frontFace(t.CW):t.frontFace(t.CCW),$=P)}function C(P){P!==cy?(be(t.CULL_FACE),P!==q&&(P===Sh?t.cullFace(t.BACK):P===uy?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Me(t.CULL_FACE),q=P}function E(P){P!==L&&(N&&t.lineWidth(P),L=P)}function V(P,ce,ue){P?(be(t.POLYGON_OFFSET_FILL),(z!==ce||Y!==ue)&&(t.polygonOffset(ce,ue),z=ce,Y=ue)):Me(t.POLYGON_OFFSET_FILL)}function ie(P){P?be(t.SCISSOR_TEST):Me(t.SCISSOR_TEST)}function te(P){P===void 0&&(P=t.TEXTURE0+K-1),O!==P&&(t.activeTexture(P),O=P)}function re(P,ce,ue){ue===void 0&&(O===null?ue=t.TEXTURE0+K-1:ue=O);let Re=Z[ue];Re===void 0&&(Re={type:void 0,texture:void 0},Z[ue]=Re),(Re.type!==P||Re.texture!==ce)&&(O!==ue&&(t.activeTexture(ue),O=ue),t.bindTexture(P,ce||xe[P]),Re.type=P,Re.texture=ce)}function ye(){const P=Z[O];P!==void 0&&P.type!==void 0&&(t.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function de(){try{t.compressedTexImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function pe(){try{t.compressedTexImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ce(){try{t.texSubImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ke(){try{t.texSubImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ee(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ke(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ve(){try{t.texStorage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Pe(){try{t.texStorage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function we(){try{t.texImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function me(){try{t.texImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ie(P){se.equals(P)===!1&&(t.scissor(P.x,P.y,P.z,P.w),se.copy(P))}function $e(P){J.equals(P)===!1&&(t.viewport(P.x,P.y,P.z,P.w),J.copy(P))}function ft(P,ce){let ue=h.get(ce);ue===void 0&&(ue=new WeakMap,h.set(ce,ue));let Re=ue.get(P);Re===void 0&&(Re=t.getUniformBlockIndex(ce,P.name),ue.set(P,Re))}function Be(P,ce){const Re=h.get(ce).get(P);f.get(ce)!==Re&&(t.uniformBlockBinding(ce,Re,P.__bindingPointIndex),f.set(ce,Re))}function ae(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},O=null,Z={},g={},_=new WeakMap,y=[],m=null,u=!1,x=null,v=null,S=null,b=null,R=null,A=null,F=null,M=new Xe(0,0,0),w=0,U=!1,$=null,q=null,L=null,z=null,Y=null,se.set(0,0,t.canvas.width,t.canvas.height),J.set(0,0,t.canvas.width,t.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:be,disable:Me,bindFramebuffer:We,drawBuffers:H,useProgram:bt,setBlending:ve,setMaterial:it,setFlipSided:Oe,setCullFace:C,setLineWidth:E,setPolygonOffset:V,setScissorTest:ie,activeTexture:te,bindTexture:re,unbindTexture:ye,compressedTexImage2D:de,compressedTexImage3D:pe,texImage2D:we,texImage3D:me,updateUBOMapping:ft,uniformBlockBinding:Be,texStorage2D:Ve,texStorage3D:Pe,texSubImage2D:Ce,texSubImage3D:ke,compressedTexSubImage2D:ee,compressedTexSubImage3D:Ke,scissor:Ie,viewport:$e,reset:ae}}function M1(t,e,n,i,r,s,a){const o=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new WeakMap;let h;const d=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,E){return g?new OffscreenCanvas(C,E):_l("canvas")}function y(C,E,V,ie){let te=1;if((C.width>ie||C.height>ie)&&(te=ie/Math.max(C.width,C.height)),te<1||E===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const re=E?vl:Math.floor,ye=re(te*C.width),de=re(te*C.height);h===void 0&&(h=_(ye,de));const pe=V?_(ye,de):h;return pe.width=ye,pe.height=de,pe.getContext("2d").drawImage(C,0,0,ye,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+ye+"x"+de+")."),pe}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function m(C){return $u(C.width)&&$u(C.height)}function u(C){return o?!1:C.wrapS!==Fn||C.wrapT!==Fn||C.minFilter!==Yt&&C.minFilter!==Mn}function x(C,E){return C.generateMipmaps&&E&&C.minFilter!==Yt&&C.minFilter!==Mn}function v(C){t.generateMipmap(C)}function S(C,E,V,ie,te=!1){if(o===!1)return E;if(C!==null){if(t[C]!==void 0)return t[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let re=E;if(E===t.RED&&(V===t.FLOAT&&(re=t.R32F),V===t.HALF_FLOAT&&(re=t.R16F),V===t.UNSIGNED_BYTE&&(re=t.R8)),E===t.RED_INTEGER&&(V===t.UNSIGNED_BYTE&&(re=t.R8UI),V===t.UNSIGNED_SHORT&&(re=t.R16UI),V===t.UNSIGNED_INT&&(re=t.R32UI),V===t.BYTE&&(re=t.R8I),V===t.SHORT&&(re=t.R16I),V===t.INT&&(re=t.R32I)),E===t.RG&&(V===t.FLOAT&&(re=t.RG32F),V===t.HALF_FLOAT&&(re=t.RG16F),V===t.UNSIGNED_BYTE&&(re=t.RG8)),E===t.RGBA){const ye=te?hl:Ze.getTransfer(ie);V===t.FLOAT&&(re=t.RGBA32F),V===t.HALF_FLOAT&&(re=t.RGBA16F),V===t.UNSIGNED_BYTE&&(re=ye===st?t.SRGB8_ALPHA8:t.RGBA8),V===t.UNSIGNED_SHORT_4_4_4_4&&(re=t.RGBA4),V===t.UNSIGNED_SHORT_5_5_5_1&&(re=t.RGB5_A1)}return(re===t.R16F||re===t.R32F||re===t.RG16F||re===t.RG32F||re===t.RGBA16F||re===t.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function b(C,E,V){return x(C,V)===!0||C.isFramebufferTexture&&C.minFilter!==Yt&&C.minFilter!==Mn?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function R(C){return C===Yt||C===Ah||C===_c?t.NEAREST:t.LINEAR}function A(C){const E=C.target;E.removeEventListener("dispose",A),M(E),E.isVideoTexture&&f.delete(E)}function F(C){const E=C.target;E.removeEventListener("dispose",F),U(E)}function M(C){const E=i.get(C);if(E.__webglInit===void 0)return;const V=C.source,ie=d.get(V);if(ie){const te=ie[E.__cacheKey];te.usedTimes--,te.usedTimes===0&&w(C),Object.keys(ie).length===0&&d.delete(V)}i.remove(C)}function w(C){const E=i.get(C);t.deleteTexture(E.__webglTexture);const V=C.source,ie=d.get(V);delete ie[E.__cacheKey],a.memory.textures--}function U(C){const E=C.texture,V=i.get(C),ie=i.get(E);if(ie.__webglTexture!==void 0&&(t.deleteTexture(ie.__webglTexture),a.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(V.__webglFramebuffer[te]))for(let re=0;re<V.__webglFramebuffer[te].length;re++)t.deleteFramebuffer(V.__webglFramebuffer[te][re]);else t.deleteFramebuffer(V.__webglFramebuffer[te]);V.__webglDepthbuffer&&t.deleteRenderbuffer(V.__webglDepthbuffer[te])}else{if(Array.isArray(V.__webglFramebuffer))for(let te=0;te<V.__webglFramebuffer.length;te++)t.deleteFramebuffer(V.__webglFramebuffer[te]);else t.deleteFramebuffer(V.__webglFramebuffer);if(V.__webglDepthbuffer&&t.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&t.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let te=0;te<V.__webglColorRenderbuffer.length;te++)V.__webglColorRenderbuffer[te]&&t.deleteRenderbuffer(V.__webglColorRenderbuffer[te]);V.__webglDepthRenderbuffer&&t.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let te=0,re=E.length;te<re;te++){const ye=i.get(E[te]);ye.__webglTexture&&(t.deleteTexture(ye.__webglTexture),a.memory.textures--),i.remove(E[te])}i.remove(E),i.remove(C)}let $=0;function q(){$=0}function L(){const C=$;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),$+=1,C}function z(C){const E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function Y(C,E){const V=i.get(C);if(C.isVideoTexture&&it(C),C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){const ie=C.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(V,C,E);return}}n.bindTexture(t.TEXTURE_2D,V.__webglTexture,t.TEXTURE0+E)}function K(C,E){const V=i.get(C);if(C.version>0&&V.__version!==C.version){se(V,C,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,V.__webglTexture,t.TEXTURE0+E)}function N(C,E){const V=i.get(C);if(C.version>0&&V.__version!==C.version){se(V,C,E);return}n.bindTexture(t.TEXTURE_3D,V.__webglTexture,t.TEXTURE0+E)}function D(C,E){const V=i.get(C);if(C.version>0&&V.__version!==C.version){J(V,C,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,V.__webglTexture,t.TEXTURE0+E)}const k={[Wu]:t.REPEAT,[Fn]:t.CLAMP_TO_EDGE,[Xu]:t.MIRRORED_REPEAT},O={[Yt]:t.NEAREST,[Ah]:t.NEAREST_MIPMAP_NEAREST,[_c]:t.NEAREST_MIPMAP_LINEAR,[Mn]:t.LINEAR,[Vy]:t.LINEAR_MIPMAP_NEAREST,[Ea]:t.LINEAR_MIPMAP_LINEAR},Z={[nS]:t.NEVER,[lS]:t.ALWAYS,[iS]:t.LESS,[Mv]:t.LEQUAL,[rS]:t.EQUAL,[oS]:t.GEQUAL,[sS]:t.GREATER,[aS]:t.NOTEQUAL};function B(C,E,V){if(V?(t.texParameteri(C,t.TEXTURE_WRAP_S,k[E.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,k[E.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,k[E.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,O[E.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,O[E.minFilter])):(t.texParameteri(C,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(C,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(E.wrapS!==Fn||E.wrapT!==Fn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(C,t.TEXTURE_MAG_FILTER,R(E.magFilter)),t.texParameteri(C,t.TEXTURE_MIN_FILTER,R(E.minFilter)),E.minFilter!==Yt&&E.minFilter!==Mn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,Z[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ie=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===Yt||E.minFilter!==_c&&E.minFilter!==Ea||E.type===Pi&&e.has("OES_texture_float_linear")===!1||o===!1&&E.type===wa&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||i.get(E).__currentAnisotropy)&&(t.texParameterf(C,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy)}}function Q(C,E){let V=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",A));const ie=E.source;let te=d.get(ie);te===void 0&&(te={},d.set(ie,te));const re=z(E);if(re!==C.__cacheKey){te[re]===void 0&&(te[re]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,V=!0),te[re].usedTimes++;const ye=te[C.__cacheKey];ye!==void 0&&(te[C.__cacheKey].usedTimes--,ye.usedTimes===0&&w(E)),C.__cacheKey=re,C.__webglTexture=te[re].texture}return V}function se(C,E,V){let ie=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ie=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ie=t.TEXTURE_3D);const te=Q(C,E),re=E.source;n.bindTexture(ie,C.__webglTexture,t.TEXTURE0+V);const ye=i.get(re);if(re.version!==ye.__version||te===!0){n.activeTexture(t.TEXTURE0+V);const de=Ze.getPrimaries(Ze.workingColorSpace),pe=E.colorSpace===En?null:Ze.getPrimaries(E.colorSpace),Ce=E.colorSpace===En||de===pe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const ke=u(E)&&m(E.image)===!1;let ee=y(E.image,ke,!1,r.maxTextureSize);ee=Oe(E,ee);const Ke=m(ee)||o,Ve=s.convert(E.format,E.colorSpace);let Pe=s.convert(E.type),we=S(E.internalFormat,Ve,Pe,E.colorSpace,E.isVideoTexture);B(ie,E,Ke);let me;const Ie=E.mipmaps,$e=o&&E.isVideoTexture!==!0&&we!==yv,ft=ye.__version===void 0||te===!0,Be=b(E,ee,Ke);if(E.isDepthTexture)we=t.DEPTH_COMPONENT,o?E.type===Pi?we=t.DEPTH_COMPONENT32F:E.type===Ni?we=t.DEPTH_COMPONENT24:E.type===mr?we=t.DEPTH24_STENCIL8:we=t.DEPTH_COMPONENT16:E.type===Pi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===gr&&we===t.DEPTH_COMPONENT&&E.type!==Xd&&E.type!==Ni&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Ni,Pe=s.convert(E.type)),E.format===Es&&we===t.DEPTH_COMPONENT&&(we=t.DEPTH_STENCIL,E.type!==mr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=mr,Pe=s.convert(E.type))),ft&&($e?n.texStorage2D(t.TEXTURE_2D,1,we,ee.width,ee.height):n.texImage2D(t.TEXTURE_2D,0,we,ee.width,ee.height,0,Ve,Pe,null));else if(E.isDataTexture)if(Ie.length>0&&Ke){$e&&ft&&n.texStorage2D(t.TEXTURE_2D,Be,we,Ie[0].width,Ie[0].height);for(let ae=0,P=Ie.length;ae<P;ae++)me=Ie[ae],$e?n.texSubImage2D(t.TEXTURE_2D,ae,0,0,me.width,me.height,Ve,Pe,me.data):n.texImage2D(t.TEXTURE_2D,ae,we,me.width,me.height,0,Ve,Pe,me.data);E.generateMipmaps=!1}else $e?(ft&&n.texStorage2D(t.TEXTURE_2D,Be,we,ee.width,ee.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,ee.width,ee.height,Ve,Pe,ee.data)):n.texImage2D(t.TEXTURE_2D,0,we,ee.width,ee.height,0,Ve,Pe,ee.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){$e&&ft&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Be,we,Ie[0].width,Ie[0].height,ee.depth);for(let ae=0,P=Ie.length;ae<P;ae++)me=Ie[ae],E.format!==On?Ve!==null?$e?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ae,0,0,0,me.width,me.height,ee.depth,Ve,me.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ae,we,me.width,me.height,ee.depth,0,me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?n.texSubImage3D(t.TEXTURE_2D_ARRAY,ae,0,0,0,me.width,me.height,ee.depth,Ve,Pe,me.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ae,we,me.width,me.height,ee.depth,0,Ve,Pe,me.data)}else{$e&&ft&&n.texStorage2D(t.TEXTURE_2D,Be,we,Ie[0].width,Ie[0].height);for(let ae=0,P=Ie.length;ae<P;ae++)me=Ie[ae],E.format!==On?Ve!==null?$e?n.compressedTexSubImage2D(t.TEXTURE_2D,ae,0,0,me.width,me.height,Ve,me.data):n.compressedTexImage2D(t.TEXTURE_2D,ae,we,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?n.texSubImage2D(t.TEXTURE_2D,ae,0,0,me.width,me.height,Ve,Pe,me.data):n.texImage2D(t.TEXTURE_2D,ae,we,me.width,me.height,0,Ve,Pe,me.data)}else if(E.isDataArrayTexture)$e?(ft&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Be,we,ee.width,ee.height,ee.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,Ve,Pe,ee.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,we,ee.width,ee.height,ee.depth,0,Ve,Pe,ee.data);else if(E.isData3DTexture)$e?(ft&&n.texStorage3D(t.TEXTURE_3D,Be,we,ee.width,ee.height,ee.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,Ve,Pe,ee.data)):n.texImage3D(t.TEXTURE_3D,0,we,ee.width,ee.height,ee.depth,0,Ve,Pe,ee.data);else if(E.isFramebufferTexture){if(ft)if($e)n.texStorage2D(t.TEXTURE_2D,Be,we,ee.width,ee.height);else{let ae=ee.width,P=ee.height;for(let ce=0;ce<Be;ce++)n.texImage2D(t.TEXTURE_2D,ce,we,ae,P,0,Ve,Pe,null),ae>>=1,P>>=1}}else if(Ie.length>0&&Ke){$e&&ft&&n.texStorage2D(t.TEXTURE_2D,Be,we,Ie[0].width,Ie[0].height);for(let ae=0,P=Ie.length;ae<P;ae++)me=Ie[ae],$e?n.texSubImage2D(t.TEXTURE_2D,ae,0,0,Ve,Pe,me):n.texImage2D(t.TEXTURE_2D,ae,we,Ve,Pe,me);E.generateMipmaps=!1}else $e?(ft&&n.texStorage2D(t.TEXTURE_2D,Be,we,ee.width,ee.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ve,Pe,ee)):n.texImage2D(t.TEXTURE_2D,0,we,Ve,Pe,ee);x(E,Ke)&&v(ie),ye.__version=re.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function J(C,E,V){if(E.image.length!==6)return;const ie=Q(C,E),te=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+V);const re=i.get(te);if(te.version!==re.__version||ie===!0){n.activeTexture(t.TEXTURE0+V);const ye=Ze.getPrimaries(Ze.workingColorSpace),de=E.colorSpace===En?null:Ze.getPrimaries(E.colorSpace),pe=E.colorSpace===En||ye===de?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const Ce=E.isCompressedTexture||E.image[0].isCompressedTexture,ke=E.image[0]&&E.image[0].isDataTexture,ee=[];for(let ae=0;ae<6;ae++)!Ce&&!ke?ee[ae]=y(E.image[ae],!1,!0,r.maxCubemapSize):ee[ae]=ke?E.image[ae].image:E.image[ae],ee[ae]=Oe(E,ee[ae]);const Ke=ee[0],Ve=m(Ke)||o,Pe=s.convert(E.format,E.colorSpace),we=s.convert(E.type),me=S(E.internalFormat,Pe,we,E.colorSpace),Ie=o&&E.isVideoTexture!==!0,$e=re.__version===void 0||ie===!0;let ft=b(E,Ke,Ve);B(t.TEXTURE_CUBE_MAP,E,Ve);let Be;if(Ce){Ie&&$e&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ft,me,Ke.width,Ke.height);for(let ae=0;ae<6;ae++){Be=ee[ae].mipmaps;for(let P=0;P<Be.length;P++){const ce=Be[P];E.format!==On?Pe!==null?Ie?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,P,0,0,ce.width,ce.height,Pe,ce.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,P,me,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,P,0,0,ce.width,ce.height,Pe,we,ce.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,P,me,ce.width,ce.height,0,Pe,we,ce.data)}}}else{Be=E.mipmaps,Ie&&$e&&(Be.length>0&&ft++,n.texStorage2D(t.TEXTURE_CUBE_MAP,ft,me,ee[0].width,ee[0].height));for(let ae=0;ae<6;ae++)if(ke){Ie?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,ee[ae].width,ee[ae].height,Pe,we,ee[ae].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,me,ee[ae].width,ee[ae].height,0,Pe,we,ee[ae].data);for(let P=0;P<Be.length;P++){const ue=Be[P].image[ae].image;Ie?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,P+1,0,0,ue.width,ue.height,Pe,we,ue.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,P+1,me,ue.width,ue.height,0,Pe,we,ue.data)}}else{Ie?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Pe,we,ee[ae]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,me,Pe,we,ee[ae]);for(let P=0;P<Be.length;P++){const ce=Be[P];Ie?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,P+1,0,0,Pe,we,ce.image[ae]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,P+1,me,Pe,we,ce.image[ae])}}}x(E,Ve)&&v(t.TEXTURE_CUBE_MAP),re.__version=te.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function le(C,E,V,ie,te,re){const ye=s.convert(V.format,V.colorSpace),de=s.convert(V.type),pe=S(V.internalFormat,ye,de,V.colorSpace);if(!i.get(E).__hasExternalTextures){const ke=Math.max(1,E.width>>re),ee=Math.max(1,E.height>>re);te===t.TEXTURE_3D||te===t.TEXTURE_2D_ARRAY?n.texImage3D(te,re,pe,ke,ee,E.depth,0,ye,de,null):n.texImage2D(te,re,pe,ke,ee,0,ye,de,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),ve(E)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ie,te,i.get(V).__webglTexture,0,Ne(E)):(te===t.TEXTURE_2D||te>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ie,te,i.get(V).__webglTexture,re),n.bindFramebuffer(t.FRAMEBUFFER,null)}function xe(C,E,V){if(t.bindRenderbuffer(t.RENDERBUFFER,C),E.depthBuffer&&!E.stencilBuffer){let ie=o===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(V||ve(E)){const te=E.depthTexture;te&&te.isDepthTexture&&(te.type===Pi?ie=t.DEPTH_COMPONENT32F:te.type===Ni&&(ie=t.DEPTH_COMPONENT24));const re=Ne(E);ve(E)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,re,ie,E.width,E.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,re,ie,E.width,E.height)}else t.renderbufferStorage(t.RENDERBUFFER,ie,E.width,E.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,C)}else if(E.depthBuffer&&E.stencilBuffer){const ie=Ne(E);V&&ve(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ie,t.DEPTH24_STENCIL8,E.width,E.height):ve(E)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ie,t.DEPTH24_STENCIL8,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,C)}else{const ie=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let te=0;te<ie.length;te++){const re=ie[te],ye=s.convert(re.format,re.colorSpace),de=s.convert(re.type),pe=S(re.internalFormat,ye,de,re.colorSpace),Ce=Ne(E);V&&ve(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ce,pe,E.width,E.height):ve(E)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ce,pe,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,pe,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function be(C,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Y(E.depthTexture,0);const ie=i.get(E.depthTexture).__webglTexture,te=Ne(E);if(E.depthTexture.format===gr)ve(E)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ie,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ie,0);else if(E.depthTexture.format===Es)ve(E)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ie,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function Me(C){const E=i.get(C),V=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!E.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");be(E.__webglFramebuffer,C)}else if(V){E.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[ie]),E.__webglDepthbuffer[ie]=t.createRenderbuffer(),xe(E.__webglDepthbuffer[ie],C,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=t.createRenderbuffer(),xe(E.__webglDepthbuffer,C,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function We(C,E,V){const ie=i.get(C);E!==void 0&&le(ie.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),V!==void 0&&Me(C)}function H(C){const E=C.texture,V=i.get(C),ie=i.get(E);C.addEventListener("dispose",F),C.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=t.createTexture()),ie.__version=E.version,a.memory.textures++);const te=C.isWebGLCubeRenderTarget===!0,re=C.isWebGLMultipleRenderTargets===!0,ye=m(C)||o;if(te){V.__webglFramebuffer=[];for(let de=0;de<6;de++)if(o&&E.mipmaps&&E.mipmaps.length>0){V.__webglFramebuffer[de]=[];for(let pe=0;pe<E.mipmaps.length;pe++)V.__webglFramebuffer[de][pe]=t.createFramebuffer()}else V.__webglFramebuffer[de]=t.createFramebuffer()}else{if(o&&E.mipmaps&&E.mipmaps.length>0){V.__webglFramebuffer=[];for(let de=0;de<E.mipmaps.length;de++)V.__webglFramebuffer[de]=t.createFramebuffer()}else V.__webglFramebuffer=t.createFramebuffer();if(re)if(r.drawBuffers){const de=C.texture;for(let pe=0,Ce=de.length;pe<Ce;pe++){const ke=i.get(de[pe]);ke.__webglTexture===void 0&&(ke.__webglTexture=t.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&C.samples>0&&ve(C)===!1){const de=re?E:[E];V.__webglMultisampledFramebuffer=t.createFramebuffer(),V.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let pe=0;pe<de.length;pe++){const Ce=de[pe];V.__webglColorRenderbuffer[pe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,V.__webglColorRenderbuffer[pe]);const ke=s.convert(Ce.format,Ce.colorSpace),ee=s.convert(Ce.type),Ke=S(Ce.internalFormat,ke,ee,Ce.colorSpace,C.isXRRenderTarget===!0),Ve=Ne(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ve,Ke,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,V.__webglColorRenderbuffer[pe])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(V.__webglDepthRenderbuffer=t.createRenderbuffer(),xe(V.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(te){n.bindTexture(t.TEXTURE_CUBE_MAP,ie.__webglTexture),B(t.TEXTURE_CUBE_MAP,E,ye);for(let de=0;de<6;de++)if(o&&E.mipmaps&&E.mipmaps.length>0)for(let pe=0;pe<E.mipmaps.length;pe++)le(V.__webglFramebuffer[de][pe],C,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,pe);else le(V.__webglFramebuffer[de],C,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);x(E,ye)&&v(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(re){const de=C.texture;for(let pe=0,Ce=de.length;pe<Ce;pe++){const ke=de[pe],ee=i.get(ke);n.bindTexture(t.TEXTURE_2D,ee.__webglTexture),B(t.TEXTURE_2D,ke,ye),le(V.__webglFramebuffer,C,ke,t.COLOR_ATTACHMENT0+pe,t.TEXTURE_2D,0),x(ke,ye)&&v(t.TEXTURE_2D)}n.unbindTexture()}else{let de=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(o?de=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(de,ie.__webglTexture),B(de,E,ye),o&&E.mipmaps&&E.mipmaps.length>0)for(let pe=0;pe<E.mipmaps.length;pe++)le(V.__webglFramebuffer[pe],C,E,t.COLOR_ATTACHMENT0,de,pe);else le(V.__webglFramebuffer,C,E,t.COLOR_ATTACHMENT0,de,0);x(E,ye)&&v(de),n.unbindTexture()}C.depthBuffer&&Me(C)}function bt(C){const E=m(C)||o,V=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let ie=0,te=V.length;ie<te;ie++){const re=V[ie];if(x(re,E)){const ye=C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,de=i.get(re).__webglTexture;n.bindTexture(ye,de),v(ye),n.unbindTexture()}}}function Ee(C){if(o&&C.samples>0&&ve(C)===!1){const E=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],V=C.width,ie=C.height;let te=t.COLOR_BUFFER_BIT;const re=[],ye=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=i.get(C),pe=C.isWebGLMultipleRenderTargets===!0;if(pe)for(let Ce=0;Ce<E.length;Ce++)n.bindFramebuffer(t.FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,de.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let Ce=0;Ce<E.length;Ce++){re.push(t.COLOR_ATTACHMENT0+Ce),C.depthBuffer&&re.push(ye);const ke=de.__ignoreDepthValues!==void 0?de.__ignoreDepthValues:!1;if(ke===!1&&(C.depthBuffer&&(te|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&(te|=t.STENCIL_BUFFER_BIT)),pe&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,de.__webglColorRenderbuffer[Ce]),ke===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[ye]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[ye])),pe){const ee=i.get(E[Ce]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ee,0)}t.blitFramebuffer(0,0,V,ie,0,0,V,ie,te,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,re)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),pe)for(let Ce=0;Ce<E.length;Ce++){n.bindFramebuffer(t.FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.RENDERBUFFER,de.__webglColorRenderbuffer[Ce]);const ke=i.get(E[Ce]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,de.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.TEXTURE_2D,ke,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}}function Ne(C){return Math.min(r.maxSamples,C.samples)}function ve(C){const E=i.get(C);return o&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function it(C){const E=a.render.frame;f.get(C)!==E&&(f.set(C,E),C.update())}function Oe(C,E){const V=C.colorSpace,ie=C.format,te=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===Yu||V!==mi&&V!==En&&(Ze.getTransfer(V)===st?o===!1?e.has("EXT_sRGB")===!0&&ie===On?(C.format=Yu,C.minFilter=Mn,C.generateMipmaps=!1):E=wv.sRGBToLinear(E):(ie!==On||te!==ji)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),E}this.allocateTextureUnit=L,this.resetTextureUnits=q,this.setTexture2D=Y,this.setTexture2DArray=K,this.setTexture3D=N,this.setTextureCube=D,this.rebindTextures=We,this.setupRenderTarget=H,this.updateRenderTargetMipmap=bt,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=le,this.useMultisampledRTT=ve}function E1(t,e,n){const i=n.isWebGL2;function r(s,a=En){let o;const l=Ze.getTransfer(a);if(s===ji)return t.UNSIGNED_BYTE;if(s===mv)return t.UNSIGNED_SHORT_4_4_4_4;if(s===gv)return t.UNSIGNED_SHORT_5_5_5_1;if(s===jy)return t.BYTE;if(s===Wy)return t.SHORT;if(s===Xd)return t.UNSIGNED_SHORT;if(s===pv)return t.INT;if(s===Ni)return t.UNSIGNED_INT;if(s===Pi)return t.FLOAT;if(s===wa)return i?t.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Xy)return t.ALPHA;if(s===On)return t.RGBA;if(s===Yy)return t.LUMINANCE;if(s===$y)return t.LUMINANCE_ALPHA;if(s===gr)return t.DEPTH_COMPONENT;if(s===Es)return t.DEPTH_STENCIL;if(s===Yu)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===qy)return t.RED;if(s===vv)return t.RED_INTEGER;if(s===Ky)return t.RG;if(s===_v)return t.RG_INTEGER;if(s===xv)return t.RGBA_INTEGER;if(s===xc||s===yc||s===Sc||s===Mc)if(l===st)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===xc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===yc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Sc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Mc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===xc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===yc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Sc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Mc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ch||s===Rh||s===bh||s===Lh)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Ch)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Rh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===bh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Lh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===yv)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Nh||s===Ph)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Nh)return l===st?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Ph)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Dh||s===Uh||s===Ih||s===Fh||s===Oh||s===kh||s===zh||s===Bh||s===Hh||s===Gh||s===Vh||s===jh||s===Wh||s===Xh)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Dh)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Uh)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ih)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Fh)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Oh)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===kh)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===zh)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Bh)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Hh)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Gh)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Vh)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===jh)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Wh)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Xh)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ec||s===Yh||s===$h)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Ec)return l===st?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Yh)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===$h)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Zy||s===qh||s===Kh||s===Zh)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===Ec)return o.COMPRESSED_RED_RGTC1_EXT;if(s===qh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Kh)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Zh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===mr?i?t.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class w1 extends dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Eo extends sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const T1={type:"move"};class Xc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Eo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Eo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Eo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const y of e.hand.values()){const m=n.getJointPose(y,i),u=this._getHandJoint(c,y);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const f=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=f.position.distanceTo(h.position),g=.02,_=.005;c.inputState.pinching&&d>g+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=g-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(T1)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Eo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class A1 extends Rs{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,f=null,h=null,d=null,g=null,_=null;const y=n.getContextAttributes();let m=null,u=null;const x=[],v=[],S=new Qe;let b=null;const R=new dn;R.layers.enable(1),R.viewport=new Pt;const A=new dn;A.layers.enable(2),A.viewport=new Pt;const F=[R,A],M=new w1;M.layers.enable(1),M.layers.enable(2);let w=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let Q=x[B];return Q===void 0&&(Q=new Xc,x[B]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(B){let Q=x[B];return Q===void 0&&(Q=new Xc,x[B]=Q),Q.getGripSpace()},this.getHand=function(B){let Q=x[B];return Q===void 0&&(Q=new Xc,x[B]=Q),Q.getHandSpace()};function $(B){const Q=v.indexOf(B.inputSource);if(Q===-1)return;const se=x[Q];se!==void 0&&(se.update(B.inputSource,B.frame,c||a),se.dispatchEvent({type:B.type,data:B.inputSource}))}function q(){r.removeEventListener("select",$),r.removeEventListener("selectstart",$),r.removeEventListener("selectend",$),r.removeEventListener("squeeze",$),r.removeEventListener("squeezestart",$),r.removeEventListener("squeezeend",$),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",L);for(let B=0;B<x.length;B++){const Q=v[B];Q!==null&&(v[B]=null,x[B].disconnect(Q))}w=null,U=null,e.setRenderTarget(m),g=null,d=null,h=null,r=null,u=null,Z.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(S.width,S.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){s=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){o=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return d!==null?d:g},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(B){if(r=B,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",$),r.addEventListener("selectstart",$),r.addEventListener("selectend",$),r.addEventListener("squeeze",$),r.addEventListener("squeezestart",$),r.addEventListener("squeezeend",$),r.addEventListener("end",q),r.addEventListener("inputsourceschange",L),y.xrCompatible!==!0&&await n.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(S),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Q={antialias:r.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,n,Q),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),u=new Er(g.framebufferWidth,g.framebufferHeight,{format:On,type:ji,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let Q=null,se=null,J=null;y.depth&&(J=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Q=y.stencil?Es:gr,se=y.stencil?mr:Ni);const le={colorFormat:n.RGBA8,depthFormat:J,scaleFactor:s};h=new XRWebGLBinding(r,n),d=h.createProjectionLayer(le),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),u=new Er(d.textureWidth,d.textureHeight,{format:On,type:ji,depthTexture:new kv(d.textureWidth,d.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});const xe=e.properties.get(u);xe.__ignoreDepthValues=d.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Z.setContext(r),Z.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function L(B){for(let Q=0;Q<B.removed.length;Q++){const se=B.removed[Q],J=v.indexOf(se);J>=0&&(v[J]=null,x[J].disconnect(se))}for(let Q=0;Q<B.added.length;Q++){const se=B.added[Q];let J=v.indexOf(se);if(J===-1){for(let xe=0;xe<x.length;xe++)if(xe>=v.length){v.push(se),J=xe;break}else if(v[xe]===null){v[xe]=se,J=xe;break}if(J===-1)break}const le=x[J];le&&le.connect(se)}}const z=new W,Y=new W;function K(B,Q,se){z.setFromMatrixPosition(Q.matrixWorld),Y.setFromMatrixPosition(se.matrixWorld);const J=z.distanceTo(Y),le=Q.projectionMatrix.elements,xe=se.projectionMatrix.elements,be=le[14]/(le[10]-1),Me=le[14]/(le[10]+1),We=(le[9]+1)/le[5],H=(le[9]-1)/le[5],bt=(le[8]-1)/le[0],Ee=(xe[8]+1)/xe[0],Ne=be*bt,ve=be*Ee,it=J/(-bt+Ee),Oe=it*-bt;Q.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(Oe),B.translateZ(it),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const C=be+it,E=Me+it,V=Ne-Oe,ie=ve+(J-Oe),te=We*Me/E*C,re=H*Me/E*C;B.projectionMatrix.makePerspective(V,ie,te,re,C,E),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}function N(B,Q){Q===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(Q.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(r===null)return;M.near=A.near=R.near=B.near,M.far=A.far=R.far=B.far,(w!==M.near||U!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),w=M.near,U=M.far);const Q=B.parent,se=M.cameras;N(M,Q);for(let J=0;J<se.length;J++)N(se[J],Q);se.length===2?K(M,R,A):M.projectionMatrix.copy(R.projectionMatrix),D(B,M,Q)};function D(B,Q,se){se===null?B.matrix.copy(Q.matrixWorld):(B.matrix.copy(se.matrixWorld),B.matrix.invert(),B.matrix.multiply(Q.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(Q.projectionMatrix),B.projectionMatrixInverse.copy(Q.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=Ta*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&g===null))return l},this.setFoveation=function(B){l=B,d!==null&&(d.fixedFoveation=B),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=B)};let k=null;function O(B,Q){if(f=Q.getViewerPose(c||a),_=Q,f!==null){const se=f.views;g!==null&&(e.setRenderTargetFramebuffer(u,g.framebuffer),e.setRenderTarget(u));let J=!1;se.length!==M.cameras.length&&(M.cameras.length=0,J=!0);for(let le=0;le<se.length;le++){const xe=se[le];let be=null;if(g!==null)be=g.getViewport(xe);else{const We=h.getViewSubImage(d,xe);be=We.viewport,le===0&&(e.setRenderTargetTextures(u,We.colorTexture,d.ignoreDepthValues?void 0:We.depthStencilTexture),e.setRenderTarget(u))}let Me=F[le];Me===void 0&&(Me=new dn,Me.layers.enable(le),Me.viewport=new Pt,F[le]=Me),Me.matrix.fromArray(xe.transform.matrix),Me.matrix.decompose(Me.position,Me.quaternion,Me.scale),Me.projectionMatrix.fromArray(xe.projectionMatrix),Me.projectionMatrixInverse.copy(Me.projectionMatrix).invert(),Me.viewport.set(be.x,be.y,be.width,be.height),le===0&&(M.matrix.copy(Me.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),J===!0&&M.cameras.push(Me)}}for(let se=0;se<x.length;se++){const J=v[se],le=x[se];J!==null&&le!==void 0&&le.update(J,Q,c||a)}k&&k(B,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),_=null}const Z=new Ov;Z.setAnimationLoop(O),this.setAnimationLoop=function(B){k=B},this.dispose=function(){}}}function C1(t,e){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,Dv(t)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,x,v,S){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),h(m,u)):u.isMeshPhongMaterial?(s(m,u),f(m,u)):u.isMeshStandardMaterial?(s(m,u),d(m,u),u.isMeshPhysicalMaterial&&g(m,u,S)):u.isMeshMatcapMaterial?(s(m,u),_(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),y(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(a(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,x,v):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===rn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===rn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const x=e.get(u).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap){m.lightMap.value=u.lightMap;const v=t._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=u.lightMapIntensity*v,n(u.lightMap,m.lightMapTransform)}u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function a(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,x,v){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*x,m.scale.value=v*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function f(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function h(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function d(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),e.get(u).envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function g(m,u,x){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===rn&&m.clearcoatNormalScale.value.negate())),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,u){u.matcap&&(m.matcap.value=u.matcap)}function y(m,u){const x=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function R1(t,e,n,i){let r={},s={},a=[];const o=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,v){const S=v.program;i.uniformBlockBinding(x,S)}function c(x,v){let S=r[x.id];S===void 0&&(_(x),S=f(x),r[x.id]=S,x.addEventListener("dispose",m));const b=v.program;i.updateUBOMapping(x,b);const R=e.render.frame;s[x.id]!==R&&(d(x),s[x.id]=R)}function f(x){const v=h();x.__bindingPointIndex=v;const S=t.createBuffer(),b=x.__size,R=x.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,b,R),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,S),S}function h(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const v=r[x.id],S=x.uniforms,b=x.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let R=0,A=S.length;R<A;R++){const F=Array.isArray(S[R])?S[R]:[S[R]];for(let M=0,w=F.length;M<w;M++){const U=F[M];if(g(U,R,M,b)===!0){const $=U.__offset,q=Array.isArray(U.value)?U.value:[U.value];let L=0;for(let z=0;z<q.length;z++){const Y=q[z],K=y(Y);typeof Y=="number"||typeof Y=="boolean"?(U.__data[0]=Y,t.bufferSubData(t.UNIFORM_BUFFER,$+L,U.__data)):Y.isMatrix3?(U.__data[0]=Y.elements[0],U.__data[1]=Y.elements[1],U.__data[2]=Y.elements[2],U.__data[3]=0,U.__data[4]=Y.elements[3],U.__data[5]=Y.elements[4],U.__data[6]=Y.elements[5],U.__data[7]=0,U.__data[8]=Y.elements[6],U.__data[9]=Y.elements[7],U.__data[10]=Y.elements[8],U.__data[11]=0):(Y.toArray(U.__data,L),L+=K.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,$,U.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function g(x,v,S,b){const R=x.value,A=v+"_"+S;if(b[A]===void 0)return typeof R=="number"||typeof R=="boolean"?b[A]=R:b[A]=R.clone(),!0;{const F=b[A];if(typeof R=="number"||typeof R=="boolean"){if(F!==R)return b[A]=R,!0}else if(F.equals(R)===!1)return F.copy(R),!0}return!1}function _(x){const v=x.uniforms;let S=0;const b=16;for(let A=0,F=v.length;A<F;A++){const M=Array.isArray(v[A])?v[A]:[v[A]];for(let w=0,U=M.length;w<U;w++){const $=M[w],q=Array.isArray($.value)?$.value:[$.value];for(let L=0,z=q.length;L<z;L++){const Y=q[L],K=y(Y),N=S%b;N!==0&&b-N<K.boundary&&(S+=b-N),$.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=S,S+=K.storage}}}const R=S%b;return R>0&&(S+=b-R),x.__size=S,x.__cache={},this}function y(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function m(x){const v=x.target;v.removeEventListener("dispose",m);const S=a.indexOf(v.__bindingPointIndex);a.splice(S,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function u(){for(const x in r)t.deleteBuffer(r[x]);a=[],r={},s={}}return{bind:l,update:c,dispose:u}}class Zd{constructor(e={}){const{canvas:n=ES(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=a;const g=new Uint32Array(4),_=new Int32Array(4);let y=null,m=null;const u=[],x=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Nt,this._useLegacyLights=!1,this.toneMapping=Vi,this.toneMappingExposure=1;const v=this;let S=!1,b=0,R=0,A=null,F=-1,M=null;const w=new Pt,U=new Pt;let $=null;const q=new Xe(0);let L=0,z=n.width,Y=n.height,K=1,N=null,D=null;const k=new Pt(0,0,z,Y),O=new Pt(0,0,z,Y);let Z=!1;const B=new Fv;let Q=!1,se=!1,J=null;const le=new Rt,xe=new Qe,be=new W,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function We(){return A===null?K:1}let H=i;function bt(T,I){for(let j=0;j<T.length;j++){const X=T[j],G=n.getContext(X,I);if(G!==null)return G}return null}try{const T={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Wd}`),n.addEventListener("webglcontextlost",ae,!1),n.addEventListener("webglcontextrestored",P,!1),n.addEventListener("webglcontextcreationerror",ce,!1),H===null){const I=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&I.shift(),H=bt(I,T),H===null)throw bt(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&H instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Ee,Ne,ve,it,Oe,C,E,V,ie,te,re,ye,de,pe,Ce,ke,ee,Ke,Ve,Pe,we,me,Ie,$e;function ft(){Ee=new kw(H),Ne=new Nw(H,Ee,e),Ee.init(Ne),me=new E1(H,Ee,Ne),ve=new S1(H,Ee,Ne),it=new Hw(H),Oe=new o1,C=new M1(H,Ee,ve,Oe,Ne,me,it),E=new Dw(v),V=new Ow(v),ie=new $S(H,Ne),Ie=new bw(H,Ee,ie,Ne),te=new zw(H,ie,it,Ie),re=new Ww(H,te,ie,it),Ve=new jw(H,Ne,C),ke=new Pw(Oe),ye=new a1(v,E,V,Ee,Ne,Ie,ke),de=new C1(v,Oe),pe=new c1,Ce=new m1(Ee,Ne),Ke=new Rw(v,E,V,ve,re,d,l),ee=new y1(v,re,Ne),$e=new R1(H,it,Ne,ve),Pe=new Lw(H,Ee,it,Ne),we=new Bw(H,Ee,it,Ne),it.programs=ye.programs,v.capabilities=Ne,v.extensions=Ee,v.properties=Oe,v.renderLists=pe,v.shadowMap=ee,v.state=ve,v.info=it}ft();const Be=new A1(v,H);this.xr=Be,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const T=Ee.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Ee.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(T){T!==void 0&&(K=T,this.setSize(z,Y,!1))},this.getSize=function(T){return T.set(z,Y)},this.setSize=function(T,I,j=!0){if(Be.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=T,Y=I,n.width=Math.floor(T*K),n.height=Math.floor(I*K),j===!0&&(n.style.width=T+"px",n.style.height=I+"px"),this.setViewport(0,0,T,I)},this.getDrawingBufferSize=function(T){return T.set(z*K,Y*K).floor()},this.setDrawingBufferSize=function(T,I,j){z=T,Y=I,K=j,n.width=Math.floor(T*j),n.height=Math.floor(I*j),this.setViewport(0,0,T,I)},this.getCurrentViewport=function(T){return T.copy(w)},this.getViewport=function(T){return T.copy(k)},this.setViewport=function(T,I,j,X){T.isVector4?k.set(T.x,T.y,T.z,T.w):k.set(T,I,j,X),ve.viewport(w.copy(k).multiplyScalar(K).floor())},this.getScissor=function(T){return T.copy(O)},this.setScissor=function(T,I,j,X){T.isVector4?O.set(T.x,T.y,T.z,T.w):O.set(T,I,j,X),ve.scissor(U.copy(O).multiplyScalar(K).floor())},this.getScissorTest=function(){return Z},this.setScissorTest=function(T){ve.setScissorTest(Z=T)},this.setOpaqueSort=function(T){N=T},this.setTransparentSort=function(T){D=T},this.getClearColor=function(T){return T.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor.apply(Ke,arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha.apply(Ke,arguments)},this.clear=function(T=!0,I=!0,j=!0){let X=0;if(T){let G=!1;if(A!==null){const fe=A.texture.format;G=fe===xv||fe===_v||fe===vv}if(G){const fe=A.texture.type,Se=fe===ji||fe===Ni||fe===Xd||fe===mr||fe===mv||fe===gv,Ae=Ke.getClearColor(),Le=Ke.getClearAlpha(),ze=Ae.r,De=Ae.g,Ue=Ae.b;Se?(g[0]=ze,g[1]=De,g[2]=Ue,g[3]=Le,H.clearBufferuiv(H.COLOR,0,g)):(_[0]=ze,_[1]=De,_[2]=Ue,_[3]=Le,H.clearBufferiv(H.COLOR,0,_))}else X|=H.COLOR_BUFFER_BIT}I&&(X|=H.DEPTH_BUFFER_BIT),j&&(X|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ae,!1),n.removeEventListener("webglcontextrestored",P,!1),n.removeEventListener("webglcontextcreationerror",ce,!1),pe.dispose(),Ce.dispose(),Oe.dispose(),E.dispose(),V.dispose(),re.dispose(),Ie.dispose(),$e.dispose(),ye.dispose(),Be.dispose(),Be.removeEventListener("sessionstart",Gt),Be.removeEventListener("sessionend",tt),J&&(J.dispose(),J=null),Vt.stop()};function ae(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const T=it.autoReset,I=ee.enabled,j=ee.autoUpdate,X=ee.needsUpdate,G=ee.type;ft(),it.autoReset=T,ee.enabled=I,ee.autoUpdate=j,ee.needsUpdate=X,ee.type=G}function ce(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ue(T){const I=T.target;I.removeEventListener("dispose",ue),Re(I)}function Re(T){Te(T),Oe.remove(T)}function Te(T){const I=Oe.get(T).programs;I!==void 0&&(I.forEach(function(j){ye.releaseProgram(j)}),T.isShaderMaterial&&ye.releaseShaderCache(T))}this.renderBufferDirect=function(T,I,j,X,G,fe){I===null&&(I=Me);const Se=G.isMesh&&G.matrixWorld.determinant()<0,Ae=$v(T,I,j,X,G);ve.setMaterial(X,Se);let Le=j.index,ze=1;if(X.wireframe===!0){if(Le=te.getWireframeAttribute(j),Le===void 0)return;ze=2}const De=j.drawRange,Ue=j.attributes.position;let mt=De.start*ze,an=(De.start+De.count)*ze;fe!==null&&(mt=Math.max(mt,fe.start*ze),an=Math.min(an,(fe.start+fe.count)*ze)),Le!==null?(mt=Math.max(mt,0),an=Math.min(an,Le.count)):Ue!=null&&(mt=Math.max(mt,0),an=Math.min(an,Ue.count));const wt=an-mt;if(wt<0||wt===1/0)return;Ie.setup(G,X,Ae,j,Le);let Kn,lt=Pe;if(Le!==null&&(Kn=ie.get(Le),lt=we,lt.setIndex(Kn)),G.isMesh)X.wireframe===!0?(ve.setLineWidth(X.wireframeLinewidth*We()),lt.setMode(H.LINES)):lt.setMode(H.TRIANGLES);else if(G.isLine){let He=X.linewidth;He===void 0&&(He=1),ve.setLineWidth(He*We()),G.isLineSegments?lt.setMode(H.LINES):G.isLineLoop?lt.setMode(H.LINE_LOOP):lt.setMode(H.LINE_STRIP)}else G.isPoints?lt.setMode(H.POINTS):G.isSprite&&lt.setMode(H.TRIANGLES);if(G.isBatchedMesh)lt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else if(G.isInstancedMesh)lt.renderInstances(mt,wt,G.count);else if(j.isInstancedBufferGeometry){const He=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Hl=Math.min(j.instanceCount,He);lt.renderInstances(mt,wt,Hl)}else lt.render(mt,wt)};function Je(T,I,j){T.transparent===!0&&T.side===si&&T.forceSinglePass===!1?(T.side=rn,T.needsUpdate=!0,Fa(T,I,j),T.side=Yi,T.needsUpdate=!0,Fa(T,I,j),T.side=si):Fa(T,I,j)}this.compile=function(T,I,j=null){j===null&&(j=T),m=Ce.get(j),m.init(),x.push(m),j.traverseVisible(function(G){G.isLight&&G.layers.test(I.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),T!==j&&T.traverseVisible(function(G){G.isLight&&G.layers.test(I.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),m.setupLights(v._useLegacyLights);const X=new Set;return T.traverse(function(G){const fe=G.material;if(fe)if(Array.isArray(fe))for(let Se=0;Se<fe.length;Se++){const Ae=fe[Se];Je(Ae,j,G),X.add(Ae)}else Je(fe,j,G),X.add(fe)}),x.pop(),m=null,X},this.compileAsync=function(T,I,j=null){const X=this.compile(T,I,j);return new Promise(G=>{function fe(){if(X.forEach(function(Se){Oe.get(Se).currentProgram.isReady()&&X.delete(Se)}),X.size===0){G(T);return}setTimeout(fe,10)}Ee.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let et=null;function Et(T){et&&et(T)}function Gt(){Vt.stop()}function tt(){Vt.start()}const Vt=new Ov;Vt.setAnimationLoop(Et),typeof self<"u"&&Vt.setContext(self),this.setAnimationLoop=function(T){et=T,Be.setAnimationLoop(T),T===null?Vt.stop():Vt.start()},Be.addEventListener("sessionstart",Gt),Be.addEventListener("sessionend",tt),this.render=function(T,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Be.enabled===!0&&Be.isPresenting===!0&&(Be.cameraAutoUpdate===!0&&Be.updateCamera(I),I=Be.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,I,A),m=Ce.get(T,x.length),m.init(),x.push(m),le.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),B.setFromProjectionMatrix(le),se=this.localClippingEnabled,Q=ke.init(this.clippingPlanes,se),y=pe.get(T,u.length),y.init(),u.push(y),Gn(T,I,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(N,D),this.info.render.frame++,Q===!0&&ke.beginShadows();const j=m.state.shadowsArray;if(ee.render(j,T,I),Q===!0&&ke.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ke.render(y,T),m.setupLights(v._useLegacyLights),I.isArrayCamera){const X=I.cameras;for(let G=0,fe=X.length;G<fe;G++){const Se=X[G];Jd(y,T,Se,Se.viewport)}}else Jd(y,T,I);A!==null&&(C.updateMultisampleRenderTarget(A),C.updateRenderTargetMipmap(A)),T.isScene===!0&&T.onAfterRender(v,T,I),Ie.resetDefaultState(),F=-1,M=null,x.pop(),x.length>0?m=x[x.length-1]:m=null,u.pop(),u.length>0?y=u[u.length-1]:y=null};function Gn(T,I,j,X){if(T.visible===!1)return;if(T.layers.test(I.layers)){if(T.isGroup)j=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(I);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||B.intersectsSprite(T)){X&&be.setFromMatrixPosition(T.matrixWorld).applyMatrix4(le);const Se=re.update(T),Ae=T.material;Ae.visible&&y.push(T,Se,Ae,j,be.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||B.intersectsObject(T))){const Se=re.update(T),Ae=T.material;if(X&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),be.copy(T.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),be.copy(Se.boundingSphere.center)),be.applyMatrix4(T.matrixWorld).applyMatrix4(le)),Array.isArray(Ae)){const Le=Se.groups;for(let ze=0,De=Le.length;ze<De;ze++){const Ue=Le[ze],mt=Ae[Ue.materialIndex];mt&&mt.visible&&y.push(T,Se,mt,j,be.z,Ue)}}else Ae.visible&&y.push(T,Se,Ae,j,be.z,null)}}const fe=T.children;for(let Se=0,Ae=fe.length;Se<Ae;Se++)Gn(fe[Se],I,j,X)}function Jd(T,I,j,X){const G=T.opaque,fe=T.transmissive,Se=T.transparent;m.setupLightsView(j),Q===!0&&ke.setGlobalState(v.clippingPlanes,j),fe.length>0&&Yv(G,fe,I,j),X&&ve.viewport(w.copy(X)),G.length>0&&Ia(G,I,j),fe.length>0&&Ia(fe,I,j),Se.length>0&&Ia(Se,I,j),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function Yv(T,I,j,X){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;const fe=Ne.isWebGL2;J===null&&(J=new Er(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")?wa:ji,minFilter:Ea,samples:fe?4:0})),v.getDrawingBufferSize(xe),fe?J.setSize(xe.x,xe.y):J.setSize(vl(xe.x),vl(xe.y));const Se=v.getRenderTarget();v.setRenderTarget(J),v.getClearColor(q),L=v.getClearAlpha(),L<1&&v.setClearColor(16777215,.5),v.clear();const Ae=v.toneMapping;v.toneMapping=Vi,Ia(T,j,X),C.updateMultisampleRenderTarget(J),C.updateRenderTargetMipmap(J);let Le=!1;for(let ze=0,De=I.length;ze<De;ze++){const Ue=I[ze],mt=Ue.object,an=Ue.geometry,wt=Ue.material,Kn=Ue.group;if(wt.side===si&&mt.layers.test(X.layers)){const lt=wt.side;wt.side=rn,wt.needsUpdate=!0,ef(mt,j,X,an,wt,Kn),wt.side=lt,wt.needsUpdate=!0,Le=!0}}Le===!0&&(C.updateMultisampleRenderTarget(J),C.updateRenderTargetMipmap(J)),v.setRenderTarget(Se),v.setClearColor(q,L),v.toneMapping=Ae}function Ia(T,I,j){const X=I.isScene===!0?I.overrideMaterial:null;for(let G=0,fe=T.length;G<fe;G++){const Se=T[G],Ae=Se.object,Le=Se.geometry,ze=X===null?Se.material:X,De=Se.group;Ae.layers.test(j.layers)&&ef(Ae,I,j,Le,ze,De)}}function ef(T,I,j,X,G,fe){T.onBeforeRender(v,I,j,X,G,fe),T.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),G.onBeforeRender(v,I,j,X,T,fe),G.transparent===!0&&G.side===si&&G.forceSinglePass===!1?(G.side=rn,G.needsUpdate=!0,v.renderBufferDirect(j,I,X,G,T,fe),G.side=Yi,G.needsUpdate=!0,v.renderBufferDirect(j,I,X,G,T,fe),G.side=si):v.renderBufferDirect(j,I,X,G,T,fe),T.onAfterRender(v,I,j,X,G,fe)}function Fa(T,I,j){I.isScene!==!0&&(I=Me);const X=Oe.get(T),G=m.state.lights,fe=m.state.shadowsArray,Se=G.state.version,Ae=ye.getParameters(T,G.state,fe,I,j),Le=ye.getProgramCacheKey(Ae);let ze=X.programs;X.environment=T.isMeshStandardMaterial?I.environment:null,X.fog=I.fog,X.envMap=(T.isMeshStandardMaterial?V:E).get(T.envMap||X.environment),ze===void 0&&(T.addEventListener("dispose",ue),ze=new Map,X.programs=ze);let De=ze.get(Le);if(De!==void 0){if(X.currentProgram===De&&X.lightsStateVersion===Se)return nf(T,Ae),De}else Ae.uniforms=ye.getUniforms(T),T.onBuild(j,Ae,v),T.onBeforeCompile(Ae,v),De=ye.acquireProgram(Ae,Le),ze.set(Le,De),X.uniforms=Ae.uniforms;const Ue=X.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ue.clippingPlanes=ke.uniform),nf(T,Ae),X.needsLights=Kv(T),X.lightsStateVersion=Se,X.needsLights&&(Ue.ambientLightColor.value=G.state.ambient,Ue.lightProbe.value=G.state.probe,Ue.directionalLights.value=G.state.directional,Ue.directionalLightShadows.value=G.state.directionalShadow,Ue.spotLights.value=G.state.spot,Ue.spotLightShadows.value=G.state.spotShadow,Ue.rectAreaLights.value=G.state.rectArea,Ue.ltc_1.value=G.state.rectAreaLTC1,Ue.ltc_2.value=G.state.rectAreaLTC2,Ue.pointLights.value=G.state.point,Ue.pointLightShadows.value=G.state.pointShadow,Ue.hemisphereLights.value=G.state.hemi,Ue.directionalShadowMap.value=G.state.directionalShadowMap,Ue.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ue.spotShadowMap.value=G.state.spotShadowMap,Ue.spotLightMatrix.value=G.state.spotLightMatrix,Ue.spotLightMap.value=G.state.spotLightMap,Ue.pointShadowMap.value=G.state.pointShadowMap,Ue.pointShadowMatrix.value=G.state.pointShadowMatrix),X.currentProgram=De,X.uniformsList=null,De}function tf(T){if(T.uniformsList===null){const I=T.currentProgram.getUniforms();T.uniformsList=zo.seqWithValue(I.seq,T.uniforms)}return T.uniformsList}function nf(T,I){const j=Oe.get(T);j.outputColorSpace=I.outputColorSpace,j.batching=I.batching,j.instancing=I.instancing,j.instancingColor=I.instancingColor,j.skinning=I.skinning,j.morphTargets=I.morphTargets,j.morphNormals=I.morphNormals,j.morphColors=I.morphColors,j.morphTargetsCount=I.morphTargetsCount,j.numClippingPlanes=I.numClippingPlanes,j.numIntersection=I.numClipIntersection,j.vertexAlphas=I.vertexAlphas,j.vertexTangents=I.vertexTangents,j.toneMapping=I.toneMapping}function $v(T,I,j,X,G){I.isScene!==!0&&(I=Me),C.resetTextureUnits();const fe=I.fog,Se=X.isMeshStandardMaterial?I.environment:null,Ae=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:mi,Le=(X.isMeshStandardMaterial?V:E).get(X.envMap||Se),ze=X.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,De=!!j.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ue=!!j.morphAttributes.position,mt=!!j.morphAttributes.normal,an=!!j.morphAttributes.color;let wt=Vi;X.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(wt=v.toneMapping);const Kn=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,lt=Kn!==void 0?Kn.length:0,He=Oe.get(X),Hl=m.state.lights;if(Q===!0&&(se===!0||T!==M)){const _n=T===M&&X.id===F;ke.setState(X,T,_n)}let ht=!1;X.version===He.__version?(He.needsLights&&He.lightsStateVersion!==Hl.state.version||He.outputColorSpace!==Ae||G.isBatchedMesh&&He.batching===!1||!G.isBatchedMesh&&He.batching===!0||G.isInstancedMesh&&He.instancing===!1||!G.isInstancedMesh&&He.instancing===!0||G.isSkinnedMesh&&He.skinning===!1||!G.isSkinnedMesh&&He.skinning===!0||G.isInstancedMesh&&He.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&He.instancingColor===!1&&G.instanceColor!==null||He.envMap!==Le||X.fog===!0&&He.fog!==fe||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==ke.numPlanes||He.numIntersection!==ke.numIntersection)||He.vertexAlphas!==ze||He.vertexTangents!==De||He.morphTargets!==Ue||He.morphNormals!==mt||He.morphColors!==an||He.toneMapping!==wt||Ne.isWebGL2===!0&&He.morphTargetsCount!==lt)&&(ht=!0):(ht=!0,He.__version=X.version);let Zi=He.currentProgram;ht===!0&&(Zi=Fa(X,I,G));let rf=!1,Ns=!1,Gl=!1;const It=Zi.getUniforms(),Qi=He.uniforms;if(ve.useProgram(Zi.program)&&(rf=!0,Ns=!0,Gl=!0),X.id!==F&&(F=X.id,Ns=!0),rf||M!==T){It.setValue(H,"projectionMatrix",T.projectionMatrix),It.setValue(H,"viewMatrix",T.matrixWorldInverse);const _n=It.map.cameraPosition;_n!==void 0&&_n.setValue(H,be.setFromMatrixPosition(T.matrixWorld)),Ne.logarithmicDepthBuffer&&It.setValue(H,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&It.setValue(H,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,Ns=!0,Gl=!0)}if(G.isSkinnedMesh){It.setOptional(H,G,"bindMatrix"),It.setOptional(H,G,"bindMatrixInverse");const _n=G.skeleton;_n&&(Ne.floatVertexTextures?(_n.boneTexture===null&&_n.computeBoneTexture(),It.setValue(H,"boneTexture",_n.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}G.isBatchedMesh&&(It.setOptional(H,G,"batchingTexture"),It.setValue(H,"batchingTexture",G._matricesTexture,C));const Vl=j.morphAttributes;if((Vl.position!==void 0||Vl.normal!==void 0||Vl.color!==void 0&&Ne.isWebGL2===!0)&&Ve.update(G,j,Zi),(Ns||He.receiveShadow!==G.receiveShadow)&&(He.receiveShadow=G.receiveShadow,It.setValue(H,"receiveShadow",G.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Qi.envMap.value=Le,Qi.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),Ns&&(It.setValue(H,"toneMappingExposure",v.toneMappingExposure),He.needsLights&&qv(Qi,Gl),fe&&X.fog===!0&&de.refreshFogUniforms(Qi,fe),de.refreshMaterialUniforms(Qi,X,K,Y,J),zo.upload(H,tf(He),Qi,C)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(zo.upload(H,tf(He),Qi,C),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&It.setValue(H,"center",G.center),It.setValue(H,"modelViewMatrix",G.modelViewMatrix),It.setValue(H,"normalMatrix",G.normalMatrix),It.setValue(H,"modelMatrix",G.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const _n=X.uniformsGroups;for(let jl=0,Zv=_n.length;jl<Zv;jl++)if(Ne.isWebGL2){const sf=_n[jl];$e.update(sf,Zi),$e.bind(sf,Zi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Zi}function qv(T,I){T.ambientLightColor.needsUpdate=I,T.lightProbe.needsUpdate=I,T.directionalLights.needsUpdate=I,T.directionalLightShadows.needsUpdate=I,T.pointLights.needsUpdate=I,T.pointLightShadows.needsUpdate=I,T.spotLights.needsUpdate=I,T.spotLightShadows.needsUpdate=I,T.rectAreaLights.needsUpdate=I,T.hemisphereLights.needsUpdate=I}function Kv(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(T,I,j){Oe.get(T.texture).__webglTexture=I,Oe.get(T.depthTexture).__webglTexture=j;const X=Oe.get(T);X.__hasExternalTextures=!0,X.__hasExternalTextures&&(X.__autoAllocateDepthBuffer=j===void 0,X.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,I){const j=Oe.get(T);j.__webglFramebuffer=I,j.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(T,I=0,j=0){A=T,b=I,R=j;let X=!0,G=null,fe=!1,Se=!1;if(T){const Le=Oe.get(T);Le.__useDefaultFramebuffer!==void 0?(ve.bindFramebuffer(H.FRAMEBUFFER,null),X=!1):Le.__webglFramebuffer===void 0?C.setupRenderTarget(T):Le.__hasExternalTextures&&C.rebindTextures(T,Oe.get(T.texture).__webglTexture,Oe.get(T.depthTexture).__webglTexture);const ze=T.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Se=!0);const De=Oe.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(De[I])?G=De[I][j]:G=De[I],fe=!0):Ne.isWebGL2&&T.samples>0&&C.useMultisampledRTT(T)===!1?G=Oe.get(T).__webglMultisampledFramebuffer:Array.isArray(De)?G=De[j]:G=De,w.copy(T.viewport),U.copy(T.scissor),$=T.scissorTest}else w.copy(k).multiplyScalar(K).floor(),U.copy(O).multiplyScalar(K).floor(),$=Z;if(ve.bindFramebuffer(H.FRAMEBUFFER,G)&&Ne.drawBuffers&&X&&ve.drawBuffers(T,G),ve.viewport(w),ve.scissor(U),ve.setScissorTest($),fe){const Le=Oe.get(T.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+I,Le.__webglTexture,j)}else if(Se){const Le=Oe.get(T.texture),ze=I||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Le.__webglTexture,j||0,ze)}F=-1},this.readRenderTargetPixels=function(T,I,j,X,G,fe,Se){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=Oe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Se!==void 0&&(Ae=Ae[Se]),Ae){ve.bindFramebuffer(H.FRAMEBUFFER,Ae);try{const Le=T.texture,ze=Le.format,De=Le.type;if(ze!==On&&me.convert(ze)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ue=De===wa&&(Ee.has("EXT_color_buffer_half_float")||Ne.isWebGL2&&Ee.has("EXT_color_buffer_float"));if(De!==ji&&me.convert(De)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_TYPE)&&!(De===Pi&&(Ne.isWebGL2||Ee.has("OES_texture_float")||Ee.has("WEBGL_color_buffer_float")))&&!Ue){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=T.width-X&&j>=0&&j<=T.height-G&&H.readPixels(I,j,X,G,me.convert(ze),me.convert(De),fe)}finally{const Le=A!==null?Oe.get(A).__webglFramebuffer:null;ve.bindFramebuffer(H.FRAMEBUFFER,Le)}}},this.copyFramebufferToTexture=function(T,I,j=0){const X=Math.pow(2,-j),G=Math.floor(I.image.width*X),fe=Math.floor(I.image.height*X);C.setTexture2D(I,0),H.copyTexSubImage2D(H.TEXTURE_2D,j,0,0,T.x,T.y,G,fe),ve.unbindTexture()},this.copyTextureToTexture=function(T,I,j,X=0){const G=I.image.width,fe=I.image.height,Se=me.convert(j.format),Ae=me.convert(j.type);C.setTexture2D(j,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,j.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,j.unpackAlignment),I.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,X,T.x,T.y,G,fe,Se,Ae,I.image.data):I.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,X,T.x,T.y,I.mipmaps[0].width,I.mipmaps[0].height,Se,I.mipmaps[0].data):H.texSubImage2D(H.TEXTURE_2D,X,T.x,T.y,Se,Ae,I.image),X===0&&j.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),ve.unbindTexture()},this.copyTextureToTexture3D=function(T,I,j,X,G=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const fe=T.max.x-T.min.x+1,Se=T.max.y-T.min.y+1,Ae=T.max.z-T.min.z+1,Le=me.convert(X.format),ze=me.convert(X.type);let De;if(X.isData3DTexture)C.setTexture3D(X,0),De=H.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)C.setTexture2DArray(X,0),De=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,X.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,X.unpackAlignment);const Ue=H.getParameter(H.UNPACK_ROW_LENGTH),mt=H.getParameter(H.UNPACK_IMAGE_HEIGHT),an=H.getParameter(H.UNPACK_SKIP_PIXELS),wt=H.getParameter(H.UNPACK_SKIP_ROWS),Kn=H.getParameter(H.UNPACK_SKIP_IMAGES),lt=j.isCompressedTexture?j.mipmaps[G]:j.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,lt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,lt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,T.min.x),H.pixelStorei(H.UNPACK_SKIP_ROWS,T.min.y),H.pixelStorei(H.UNPACK_SKIP_IMAGES,T.min.z),j.isDataTexture||j.isData3DTexture?H.texSubImage3D(De,G,I.x,I.y,I.z,fe,Se,Ae,Le,ze,lt.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(De,G,I.x,I.y,I.z,fe,Se,Ae,Le,lt.data)):H.texSubImage3D(De,G,I.x,I.y,I.z,fe,Se,Ae,Le,ze,lt),H.pixelStorei(H.UNPACK_ROW_LENGTH,Ue),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,mt),H.pixelStorei(H.UNPACK_SKIP_PIXELS,an),H.pixelStorei(H.UNPACK_SKIP_ROWS,wt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Kn),G===0&&X.generateMipmaps&&H.generateMipmap(De),ve.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?C.setTextureCube(T,0):T.isData3DTexture?C.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?C.setTexture2DArray(T,0):C.setTexture2D(T,0),ve.unbindTexture()},this.resetState=function(){b=0,R=0,A=null,ve.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Yd?"display-p3":"srgb",n.unpackColorSpace=Ze.workingColorSpace===Ol?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Nt?vr:Sv}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===vr?Nt:mi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class b1 extends Zd{}b1.prototype.isWebGL1Renderer=!0;class jv extends sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class Qd extends Da{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Hp=new Rt,Ku=new Cv,wo=new kl,To=new W;class Wv extends sn{constructor(e=new qn,n=new Qd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),wo.copy(i.boundingSphere),wo.applyMatrix4(r),wo.radius+=s,e.ray.intersectsSphere(wo)===!1)return;Hp.copy(r).invert(),Ku.copy(e.ray).applyMatrix4(Hp);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){const d=Math.max(0,a.start),g=Math.min(c.count,a.start+a.count);for(let _=d,y=g;_<y;_++){const m=c.getX(_);To.fromBufferAttribute(h,m),Gp(To,m,l,r,e,n,this)}}else{const d=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=d,y=g;_<y;_++)To.fromBufferAttribute(h,_),Gp(To,_,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Gp(t,e,n,i,r,s,a){const o=Ku.distanceSqToPoint(t);if(o<n){const l=new W;Ku.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wd);function L1({activeFormation:t}){const e=ge.useRef(null),n=ge.useRef(null),i=ge.useRef(null),r=ge.useRef(null),s=1800,a=ge.useRef([]),o=ge.useRef([]),l=ge.useRef([]);if(a.current.length===0){for(let h=0;h<s;h++){const d=Math.floor(h/50),g=h%50,_=(g-50/2)*.35,y=(d-36/2)*.35,m=Math.sin(g*.18)*Math.cos(d*.22)*1.5;a.current.push(_,m,y)}for(let h=0;h<s;h++){const d=Math.pow(Math.random(),2)*8.5;let g=(Math.random()-.5)*1.5*(8.5-d)/8.5;const _=Math.floor(Math.random()*2)*Math.PI,y=d*.5+_;let m=Math.cos(y)*d+(Math.random()-.5)*.4,u=Math.sin(y)*d+(Math.random()-.5)*.4;o.current.push(m,g,u)}for(let h=0;h<s;h++){const d=Math.random()>.5,g=Math.random()>.85,_=h/s*Math.PI*6.5,y=3.2;let m=(_-Math.PI*3.25)*1.25,u,x;if(g){const v=Math.random(),S=_,b=_+Math.PI;u=np.lerp(Math.cos(S),Math.cos(b),v)*y,x=np.lerp(Math.sin(S),Math.sin(b),v)*y}else{const v=_+(d?Math.PI:0);u=Math.cos(v)*y,x=Math.sin(v)*y}u+=(Math.random()-.5)*.18,m+=(Math.random()-.5)*.18,x+=(Math.random()-.5)*.18,l.current.push(u,m,x)}}return ge.useEffect(()=>{let c=a.current;t===1?c=a.current:t===2?c=o.current:t===3&&(c=l.current),n.current=c},[t]),ge.useEffect(()=>{const c=e.current;if(!c)return;const f=c.clientWidth||500,h=c.clientHeight||400,d=new Zd({antialias:!0,alpha:!0});d.setSize(f,h),d.setPixelRatio(Math.min(window.devicePixelRatio,2)),c.appendChild(d.domElement);const g=new jv,_=new dn(45,f/h,.1,100);_.position.z=18;const y=new qn,m=new Float32Array(s*3);let u=a.current;t===2?u=o.current:t===3&&(u=l.current),n.current=u;for(let w=0;w<s*3;w++)m[w]=u[w];const x=new Bn(m,3);y.setAttribute("position",x),r.current=x;const v=new Qd({size:.15,vertexColors:!0,transparent:!0,opacity:.85,blending:dl}),S=[],b=[new Xe(16777215),new Xe(13358561),new Xe(9741240),new Xe(6583435)];for(let w=0;w<s;w++){const U=b[Math.floor(Math.random()*b.length)];S.push(U.r,U.g,U.b)}y.setAttribute("color",new ui(S,3));const R=new Wv(y,v);i.current=R,g.add(R);const A=()=>{if(!c)return;const w=c.clientWidth,U=c.clientHeight;_.aspect=w/U,_.updateProjectionMatrix(),d.setSize(w,U)};window.addEventListener("resize",A);let F=null;const M=()=>{F=requestAnimationFrame(M),R.rotation.y+=.0035,R.rotation.x+=.001;const w=x.array,U=n.current;if(U){for(let $=0;$<s*3;$++)w[$]+=(U[$]-w[$])*.075;x.needsUpdate=!0}d.render(g,_)};return M(),()=>{cancelAnimationFrame(F),window.removeEventListener("resize",A),d.dispose(),v.dispose(),y.dispose(),c.contains(d.domElement)&&c.removeChild(d.domElement)}},[]),p.jsx("div",{className:"research-canvas-inner",id:"research-canvas",ref:e,style:{width:"100%",height:"100%"}})}function N1(){const t=ge.useRef(null);return ge.useEffect(()=>{const e=t.current;if(!e)return;const n=e.clientWidth,i=e.clientHeight,r=new Zd({antialias:!1,alpha:!0});r.setSize(n,i),r.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),e.appendChild(r.domElement);const s=new jv,a=new dn(60,n/i,.1,100);a.position.z=10;const o=180,l=new qn,c=[],f=[];for(let m=0;m<o;m++)c.push((Math.random()-.5)*15,(Math.random()-.5)*10,(Math.random()-.5)*10),f.push([(Math.random()-.5)*.004,Math.random()*.006+.002,(Math.random()-.5)*.004]);l.setAttribute("position",new ui(c,3));const h=new Qd({size:.07,color:13358561,transparent:!0,opacity:.45,blending:dl}),d=new Wv(l,h);s.add(d);const g=()=>{if(!e)return;const m=e.clientWidth,u=e.clientHeight;a.aspect=m/u,a.updateProjectionMatrix(),r.setSize(m,u)};window.addEventListener("resize",g);let _=null;const y=()=>{_=requestAnimationFrame(y);const m=l.attributes.position,u=m.array;for(let x=0;x<o;x++){const v=x*3;u[v]+=f[x][0],u[v+1]+=f[x][1],u[v+2]+=f[x][2],u[v+1]>5&&(u[v+1]=-5,u[v]=(Math.random()-.5)*15)}m.needsUpdate=!0,r.render(s,a)};return y(),()=>{cancelAnimationFrame(_),window.removeEventListener("resize",g),r.dispose(),h.dispose(),l.dispose(),e.contains(r.domElement)&&e.removeChild(r.domElement)}},[]),p.jsx("div",{className:"numbers-canvas-wrap",id:"numbers-canvas",ref:t})}const P1=uv(t=>({speed:.85,gooeyness:1.2,ditherEnabled:!0,dotSize:5,dotGap:2.5,brightness:.85,contrast:.6,crossEnabled:!1,crossIntensity:.95,bloomEnabled:!0,bloomIntensity:.55,bloomSize:1.5,crtEnabled:!0,scanlines:.75,curvature:0,vignette:2,chroma:.1,gpuTier:"detecting…",setSpeed:e=>t({speed:e}),setGooeyness:e=>t({gooeyness:e}),setDitherEnabled:e=>t({ditherEnabled:e}),setDotSize:e=>t({dotSize:e}),setDotGap:e=>t({dotGap:e}),setBrightness:e=>t({brightness:e}),setContrast:e=>t({contrast:e}),setCrossEnabled:e=>t({crossEnabled:e}),setCrossIntensity:e=>t({crossIntensity:e}),setBloomEnabled:e=>t({bloomEnabled:e}),setBloomIntensity:e=>t({bloomIntensity:e}),setBloomSize:e=>t({bloomSize:e}),setCrtEnabled:e=>t({crtEnabled:e}),setScanlines:e=>t({scanlines:e}),setCurvature:e=>t({curvature:e}),setVignette:e=>t({vignette:e}),setChroma:e=>t({chroma:e}),setGpuTier:e=>t({gpuTier:e})}));function D1({isOpen:t,onClose:e}){const n=P1();return p.jsxs(p.Fragment,{children:[p.jsx("div",{className:`settings-backdrop ${t?"open":""}`,onClick:e}),p.jsxs("div",{className:`settings-panel ${t?"open":""}`,id:"settings-panel",children:[p.jsxs("div",{className:"settings-panel-header",children:[p.jsx("span",{className:"settings-panel-title",children:"Visual Synthesizer"}),p.jsx("button",{className:"settings-panel-close",onClick:e,"aria-label":"Close settings",children:p.jsx("svg",{viewBox:"0 0 16 16",children:p.jsx("path",{d:"M4 4l8 8M12 4l-8 8",stroke:"currentColor",strokeWidth:"2",fill:"none"})})})]}),p.jsxs("div",{className:"settings-panel-body",children:[p.jsxs("div",{className:"settings-section",children:[p.jsx("div",{className:"settings-section-title",children:"Fluid Aura"}),p.jsxs("div",{className:"settings-slider-row",children:[p.jsxs("div",{className:"settings-slider-header",children:[p.jsx("span",{className:"settings-label",children:"Flow Speed"}),p.jsx("span",{className:"settings-value",children:n.speed.toFixed(2)})]}),p.jsx("input",{type:"range",className:"s-range",min:"0",max:"2",step:"0.05",value:n.speed,onChange:i=>n.setSpeed(parseFloat(i.target.value))})]}),p.jsxs("div",{className:"settings-slider-row",children:[p.jsxs("div",{className:"settings-slider-header",children:[p.jsx("span",{className:"settings-label",children:"Gooeyness"}),p.jsx("span",{className:"settings-value",children:n.gooeyness.toFixed(2)})]}),p.jsx("input",{type:"range",className:"s-range",min:"0.1",max:"3",step:"0.05",value:n.gooeyness,onChange:i=>n.setGooeyness(parseFloat(i.target.value))})]})]}),p.jsx("div",{className:"settings-divider"}),p.jsxs("div",{className:"settings-section",children:[p.jsx("div",{className:"settings-section-title",children:"Dot Matrix"}),p.jsxs("div",{className:"settings-row",children:[p.jsx("span",{className:"settings-label",children:"Enabled"}),p.jsx("div",{className:`s-toggle ${n.ditherEnabled?"on":""}`,onClick:()=>n.setDitherEnabled(!n.ditherEnabled)})]}),p.jsxs("div",{className:"settings-slider-row",children:[p.jsxs("div",{className:"settings-slider-header",children:[p.jsx("span",{className:"settings-label",children:"Dot Size"}),p.jsx("span",{className:"settings-value",children:n.dotSize.toFixed(1)})]}),p.jsx("input",{type:"range",className:"s-range",min:"1",max:"12",step:"0.5",value:n.dotSize,onChange:i=>n.setDotSize(parseFloat(i.target.value))})]}),p.jsxs("div",{className:"settings-slider-row",children:[p.jsxs("div",{className:"settings-slider-header",children:[p.jsx("span",{className:"settings-label",children:"Dot Gap"}),p.jsx("span",{className:"settings-value",children:n.dotGap.toFixed(1)})]}),p.jsx("input",{type:"range",className:"s-range",min:"0",max:"6",step:"0.5",value:n.dotGap,onChange:i=>n.setDotGap(parseFloat(i.target.value))})]}),p.jsxs("div",{className:"settings-slider-row",children:[p.jsxs("div",{className:"settings-slider-header",children:[p.jsx("span",{className:"settings-label",children:"Brightness"}),p.jsx("span",{className:"settings-value",children:n.brightness.toFixed(2)})]}),p.jsx("input",{type:"range",className:"s-range",min:"0.1",max:"2",step:"0.05",value:n.brightness,onChange:i=>n.setBrightness(parseFloat(i.target.value))})]}),p.jsxs("div",{className:"settings-slider-row",children:[p.jsxs("div",{className:"settings-slider-header",children:[p.jsx("span",{className:"settings-label",children:"Contrast"}),p.jsx("span",{className:"settings-value",children:n.contrast.toFixed(2)})]}),p.jsx("input",{type:"range",className:"s-range",min:"0.1",max:"2",step:"0.05",value:n.contrast,onChange:i=>n.setContrast(parseFloat(i.target.value))})]})]}),p.jsx("div",{className:"settings-divider"}),p.jsxs("div",{className:"settings-section",children:[p.jsx("div",{className:"settings-section-title",children:"Crosshatch"}),p.jsxs("div",{className:"settings-row",children:[p.jsx("span",{className:"settings-label",children:"Enabled"}),p.jsx("div",{className:`s-toggle ${n.crossEnabled?"on":""}`,onClick:()=>n.setCrossEnabled(!n.crossEnabled)})]}),p.jsxs("div",{className:"settings-slider-row",children:[p.jsxs("div",{className:"settings-slider-header",children:[p.jsx("span",{className:"settings-label",children:"Intensity"}),p.jsx("span",{className:"settings-value",children:n.crossIntensity.toFixed(2)})]}),p.jsx("input",{type:"range",className:"s-range",min:"0",max:"1",step:"0.05",value:n.crossIntensity,onChange:i=>n.setCrossIntensity(parseFloat(i.target.value))})]})]}),p.jsx("div",{className:"settings-divider"}),p.jsxs("div",{className:"settings-section",children:[p.jsx("div",{className:"settings-section-title",children:"Bloom Glow"}),p.jsxs("div",{className:"settings-row",children:[p.jsx("span",{className:"settings-label",children:"Enabled"}),p.jsx("div",{className:`s-toggle ${n.bloomEnabled?"on":""}`,onClick:()=>n.setBloomEnabled(!n.bloomEnabled)})]}),p.jsxs("div",{className:"settings-slider-row",children:[p.jsxs("div",{className:"settings-slider-header",children:[p.jsx("span",{className:"settings-label",children:"Intensity"}),p.jsx("span",{className:"settings-value",children:n.bloomIntensity.toFixed(2)})]}),p.jsx("input",{type:"range",className:"s-range",min:"0",max:"2",step:"0.05",value:n.bloomIntensity,onChange:i=>n.setBloomIntensity(parseFloat(i.target.value))})]}),p.jsxs("div",{className:"settings-slider-row",children:[p.jsxs("div",{className:"settings-slider-header",children:[p.jsx("span",{className:"settings-label",children:"Size"}),p.jsx("span",{className:"settings-value",children:n.bloomSize.toFixed(2)})]}),p.jsx("input",{type:"range",className:"s-range",min:"0.5",max:"4",step:"0.1",value:n.bloomSize,onChange:i=>n.setBloomSize(parseFloat(i.target.value))})]})]}),p.jsx("div",{className:"settings-divider"}),p.jsxs("div",{className:"settings-section",children:[p.jsx("div",{className:"settings-section-title",children:"CRT Shader"}),p.jsxs("div",{className:"settings-row",children:[p.jsx("span",{className:"settings-label",children:"Enabled"}),p.jsx("div",{className:`s-toggle ${n.crtEnabled?"on":""}`,onClick:()=>n.setCrtEnabled(!n.crtEnabled)})]}),p.jsxs("div",{className:"settings-slider-row",children:[p.jsxs("div",{className:"settings-slider-header",children:[p.jsx("span",{className:"settings-label",children:"Scanlines"}),p.jsx("span",{className:"settings-value",children:n.scanlines.toFixed(2)})]}),p.jsx("input",{type:"range",className:"s-range",min:"0",max:"1",step:"0.05",value:n.scanlines,onChange:i=>n.setScanlines(parseFloat(i.target.value))})]}),p.jsxs("div",{className:"settings-slider-row",children:[p.jsxs("div",{className:"settings-slider-header",children:[p.jsx("span",{className:"settings-label",children:"Curvature"}),p.jsx("span",{className:"settings-value",children:n.curvature.toFixed(2)})]}),p.jsx("input",{type:"range",className:"s-range",min:"0",max:"5",step:"0.1",value:n.curvature,onChange:i=>n.setCurvature(parseFloat(i.target.value))})]}),p.jsxs("div",{className:"settings-slider-row",children:[p.jsxs("div",{className:"settings-slider-header",children:[p.jsx("span",{className:"settings-label",children:"Vignette"}),p.jsx("span",{className:"settings-value",children:n.vignette.toFixed(2)})]}),p.jsx("input",{type:"range",className:"s-range",min:"0",max:"5",step:"0.1",value:n.vignette,onChange:i=>n.setVignette(parseFloat(i.target.value))})]}),p.jsxs("div",{className:"settings-slider-row",children:[p.jsxs("div",{className:"settings-slider-header",children:[p.jsx("span",{className:"settings-label",children:"Chroma"}),p.jsx("span",{className:"settings-value",children:n.chroma.toFixed(2)})]}),p.jsx("input",{type:"range",className:"s-range",min:"0",max:"5",step:"0.1",value:n.chroma,onChange:i=>n.setChroma(parseFloat(i.target.value))})]})]}),p.jsx("div",{className:"settings-divider"}),p.jsxs("div",{className:"settings-tier",id:"settings-tier",children:["GPU Tier: ",n.gpuTier]})]})]})]})}const Xv="THANKYOUFORCHOOSINGUS",Yc=Xv.length;function U1({isOpen:t,onClose:e}){const n=pr(N=>N.login),[i,r]=ge.useState(!0),[s,a]=ge.useState(""),[o,l]=ge.useState(""),[c,f]=ge.useState(""),[h,d]=ge.useState(un[0].id),[g,_]=ge.useState(""),[y,m]=ge.useState(!1),[u,x]=ge.useState(!1),[v,S]=ge.useState(Array(Yc).fill(!1)),[b,R]=ge.useState(!1),[A,F]=ge.useState({x:-1e3,y:-1e3}),[M,w]=ge.useState(!1);if(ge.useEffect(()=>{t||(a(""),l(""),f(""),d(un[0].id),_(""),S(Array(Yc).fill(!1)),R(!1),F({x:-1e3,y:-1e3}),w(!1))},[t]),ge.useEffect(()=>{t&&v.every(D=>D)&&!b&&R(!0)},[v,t,b]),!t)return null;const U=N=>{if(v[N])return;const D=[...v];D[N]=!0,S(D)},$=N=>{const D=N.currentTarget.getBoundingClientRect(),k=N.clientX-D.left,O=N.clientY-D.top;F({x:k,y:O});const Z=N.clientX-D.left-D.width/2,Q=(N.clientY-D.top-D.height/2)/(D.height/2)*-9,se=Z/(D.width/2)*9,J=N.currentTarget.querySelector(".cubes-grid-matrix");J&&(J.style.setProperty("--tilt-x",`${Q}deg`),J.style.setProperty("--tilt-y",`${se}deg`))},q=N=>{w(!1);const D=N.currentTarget.querySelector(".cubes-grid-matrix");D&&(D.style.setProperty("--tilt-x","0deg"),D.style.setProperty("--tilt-y","0deg"))},L=()=>{w(!0)},z=N=>{if(N.preventDefault(),_(""),i&&!s.trim()){_("Please enter your name.");return}if(!o||!c){_("Please fill in all fields.");return}if(!/\S+@\S+\.\S+/.test(o)){_("Please enter a valid email address.");return}if(c.length<5){_("Password must be at least 5 characters long.");return}m(!0),setTimeout(()=>{m(!1),x(!0);const D=o.trim();let k=i?s.trim():D.split("@")[0];k=k.charAt(0).toUpperCase()+k.slice(1);const O=un.find(B=>B.id===h)||un[0],Z=ul(O.colors);setTimeout(()=>{n(D,k,Z),x(!1),e()},1200)},1500)},Y=v.filter(Boolean).length,K=Yc-Y;return p.jsxs("div",{className:"auth-fullscreen-overlay",children:[p.jsx("button",{className:"auth-fullscreen-close",onClick:e,"aria-label":"Close",children:p.jsx("svg",{viewBox:"0 0 24 24",width:"24",height:"24",children:p.jsx("path",{d:"M18 6 6 18M6 6l12 12",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),p.jsxs("div",{className:"auth-fullscreen-container",children:[p.jsx("div",{className:"auth-left-panel",children:p.jsx("div",{className:"auth-left-content",children:u?p.jsxs("div",{className:"auth-success-screen",children:[p.jsx("div",{className:"auth-success-icon",children:p.jsx("svg",{viewBox:"0 0 24 24",width:"48",height:"48",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:p.jsx("polyline",{points:"20 6 9 17 4 12"})})}),p.jsx("h3",{className:"auth-panel-title",style:{marginTop:"24px"},children:"ACCESS GRANTED"}),p.jsxs("p",{className:"auth-panel-subtitle",style:{color:"rgba(255, 255, 255, 0.85)",fontSize:"14px"},children:["Welcome back, ",i?s.trim():o.split("@")[0]]}),p.jsx("p",{className:"auth-panel-subtitle",style:{fontSize:"11px",color:"rgba(255, 255, 255, 0.3)",marginTop:"8px"},children:"Decrypting user credentials & authorization keys..."})]}):p.jsxs(p.Fragment,{children:[p.jsxs("div",{className:"auth-logo-area",children:[p.jsx("span",{className:"auth-decor-bullet",children:"✦"}),p.jsx("h3",{className:"auth-panel-title",children:i?"CREATE ACCOUNT":"ESTABLISH SESSION"}),p.jsx("p",{className:"auth-panel-subtitle",children:i?"Register your developer identity to access QIX nodes.":"Connect with your credentials to resume your session."})]}),p.jsxs("form",{onSubmit:z,className:"auth-panel-form",children:[g&&p.jsx("div",{className:"auth-panel-error",children:g}),i&&p.jsxs("div",{className:"auth-input-group",children:[p.jsx("label",{className:"auth-input-label",children:"Full Name"}),p.jsx("input",{type:"text",className:"auth-input-field",value:s,onChange:N=>a(N.target.value),placeholder:"Alex Rivera",disabled:y})]}),p.jsxs("div",{className:"auth-input-group",children:[p.jsx("label",{className:"auth-input-label",children:"User Email"}),p.jsx("input",{type:"email",className:"auth-input-field",value:o,onChange:N=>l(N.target.value),placeholder:"alex@gmail.com",disabled:y})]}),i&&p.jsxs("div",{className:"auth-input-group",children:[p.jsx("label",{className:"auth-input-label",children:"Select Avatar Identity"}),p.jsx("div",{className:"avatar-selection-grid",children:un.map(N=>{const D={background:`linear-gradient(135deg, ${N.colors[0]} 0%, ${N.colors[1]} 100%)`};return p.jsx("button",{type:"button",className:`avatar-option-btn ${h===N.id?"active":""}`,style:D,onClick:()=>d(N.id),"aria-label":N.name,title:N.name,disabled:y},N.id)})})]}),p.jsxs("div",{className:"auth-input-group",children:[p.jsx("label",{className:"auth-input-label",children:"Password"}),p.jsx("input",{type:"password",className:"auth-input-field",value:c,onChange:N=>f(N.target.value),placeholder:"••••••••",disabled:y})]}),p.jsx("button",{type:"submit",className:"auth-submit-btn",disabled:y,children:y?p.jsx("span",{className:"auth-spinner"}):i?"Create Profile & Connect":"Authorize Connection"}),p.jsxs("div",{className:"auth-switch-prompt",children:[p.jsx("span",{children:i?"Already registered? ":"New developer? "}),p.jsx("button",{type:"button",className:"auth-switch-link",onClick:()=>{r(!i),_("")},disabled:y,children:i?"Log In":"Sign Up"})]})]})]})})}),p.jsxs("div",{className:"auth-right-panel",onMouseMove:$,onMouseEnter:L,onMouseLeave:q,children:[p.jsx("div",{className:"auth-hover-orb",style:{left:`${A.x}px`,top:`${A.y}px`,opacity:M?1:0}}),p.jsxs("div",{className:"auth-game-container",children:[p.jsx("h4",{className:"game-title",children:"DEVELOPER AUTHENTICATION GRID"}),p.jsx("p",{className:"game-subtitle",children:b?"Grid fully decrypted. Secure channel verified!":`Hover your mouse over the cybernetic cubes to decrypt the access key. (${K} cubes remaining)`}),p.jsx("div",{className:`cubes-grid-matrix ${b?"won-glow":""}`,children:Xv.split("").map((N,D)=>p.jsx("div",{className:`cube-container ${v[D]?"revealed":""}`,onMouseEnter:()=>U(D),style:{animationDelay:`${D*.035}s`,"--cube-idx":D},children:p.jsxs("div",{className:"cube-card",children:[p.jsx("div",{className:"cube-front",children:p.jsx("span",{className:"cube-front-dot"})}),p.jsx("div",{className:"cube-back",children:p.jsx("span",{className:"cube-letter",children:N})})]})},D))}),b&&p.jsxs("div",{className:"game-congrats-banner",children:[p.jsx("span",{className:"congrats-pulse"}),p.jsx("span",{children:"THANK YOU FOR CHOOSING US"})]})]})]})]})]})}function wi({children:t}){const e=ge.useRef(null);return ge.useEffect(()=>{const n=e.current;if(!n)return;let i=0,r=0,s=0,a=0,o=null;const l=()=>{i+=(s-i)*.16,r+=(a-r)*.16,n.style.transform=`translate3d(${i}px, ${r}px, 0)`,Math.abs(s-i)>.01||Math.abs(a-r)>.01?o=requestAnimationFrame(l):(i=s,r=a,n.style.transform=`translate3d(${i}px, ${r}px, 0)`,o=null)},c=h=>{const d=n.getBoundingClientRect(),g=d.left+d.width/2,_=d.top+d.height/2,y=h.clientX-g,m=h.clientY-_;Math.hypot(y,m)<75?(s=y*.38,a=m*.38):(s=0,a=0),o||(o=requestAnimationFrame(l))},f=()=>{s=0,a=0,o||(o=requestAnimationFrame(l))};return window.addEventListener("mousemove",c),n.addEventListener("mouseleave",f),()=>{window.removeEventListener("mousemove",c),n.removeEventListener("mouseleave",f),o&&cancelAnimationFrame(o)}},[]),p.jsx("div",{ref:e,style:{display:"inline-block",willChange:"transform"},children:t})}function Ao({count:t,suffix:e}){const n=ge.useRef(null),[i,r]=ge.useState(0);return ge.useEffect(()=>{const s=new IntersectionObserver(a=>{if(a[0].isIntersecting){const l=performance.now(),c=f=>{const h=Math.min((f-l)/2e3,1),d=1-Math.pow(1-h,3);r(Math.floor(d*t)),h<1?requestAnimationFrame(c):r(t)};requestAnimationFrame(c),s.unobserve(a[0].target)}},{threshold:.2});return n.current&&s.observe(n.current),()=>s.disconnect()},[t]),p.jsxs("span",{ref:n,children:[i.toLocaleString(),e]})}function I1(){const[t,e]=ge.useState(!1),[n,i]=ge.useState(!1),[r,s]=ge.useState(!1),[a,o]=ge.useState(!1),[l,c]=ge.useState(!1),[f,h]=ge.useState(1),[d,g]=ge.useState(!1),_=ge.useRef(null),y=ge.useRef(null),m=pr(S=>S.isLoggedIn),u=pr(S=>S.user),x=pr(S=>S.logout);ge.useEffect(()=>{g(!0);const S=new Ux({duration:1.2,easing:O=>Math.min(1,1.001-Math.pow(2,-10*O)),direction:"vertical",gestureDirection:"vertical",smooth:!0,mouseMultiplier:1,smoothTouch:!1,touchMultiplier:2,infinite:!1});let b;function R(O){S.raf(O),b=requestAnimationFrame(R)}b=requestAnimationFrame(R);const A=_.current,F=y.current;let M=0,w=0,U=0,$=0;const q=O=>{M=O.clientX,w=O.clientY,F&&(F.style.transform=`translate3d(${M}px, ${w}px, 0)`)};window.addEventListener("mousemove",q);let L;const z=.25,Y=()=>{U+=(M-U)*z,$+=(w-$)*z,A&&(A.style.transform=`translate3d(${U}px, ${$}px, 0)`),L=requestAnimationFrame(Y)};L=requestAnimationFrame(Y);const K=O=>{O.target.tagName==="A"||O.target.tagName==="BUTTON"||O.target.tagName==="INPUT"||O.target.tagName==="TEXTAREA"||O.target.tagName==="SELECT"||O.target.closest("a")||O.target.closest("button")||O.target.closest("input")||O.target.closest("textarea")||O.target.closest("select")||O.target.closest(".research-item")||O.target.closest(".portfolio-card")||O.target.closest(".feature-card")||O.target.closest(".number-card")||O.target.closest(".cube-container")||O.target.closest('[role="button"]')?A==null||A.classList.add("hovered"):A==null||A.classList.remove("hovered")};window.addEventListener("mouseover",K);const N=new IntersectionObserver(O=>{O.forEach(Z=>{Z.isIntersecting&&(Z.target.classList.add("visible"),N.unobserve(Z.target))})},{threshold:.1,rootMargin:"0px 0px -30px 0px"});document.querySelectorAll(".reveal").forEach(O=>N.observe(O));const D=()=>{c(window.scrollY>50)},k=()=>{if(window.innerWidth<768){document.querySelectorAll(".portfolio-card-wrapper").forEach(Z=>{const B=Z.querySelector(".portfolio-card");B&&(B.style.transform="none",B.style.opacity="1",B.style.filter="none")});return}const O=document.querySelectorAll(".portfolio-card-wrapper");O.forEach((Z,B)=>{const Q=Z.getBoundingClientRect(),se=120+B*30,J=Z.querySelector(".portfolio-card");if(J)if(Q.top<=se){const le=O[B+1];if(le){const xe=le.getBoundingClientRect(),be=120+(B+1)*30,Me=xe.top-be,We=400,H=Math.max(0,Math.min(1,(We-Me)/We)),bt=1-H*.06,Ee=1-H*.4,Ne=1-H*.45;J.style.transform=`scale(${bt})`,J.style.opacity=`${Ee}`,J.style.filter=`brightness(${Ne})`;const ve=J.querySelector(".portfolio-card-image img");if(ve){const it=-H*40;ve.style.transform=`scale(1.04) translateY(${it}px)`}}else{J.style.transform="scale(1)",J.style.opacity="1",J.style.filter="none";const xe=J.querySelector(".portfolio-card-image img");xe&&(xe.style.transform="none")}}else{J.style.transform="scale(1)",J.style.opacity="1",J.style.filter="none";const le=J.querySelector(".portfolio-card-image img");le&&(le.style.transform="none")}})};return window.addEventListener("scroll",D,{passive:!0}),window.addEventListener("scroll",k,{passive:!0}),()=>{S.destroy(),cancelAnimationFrame(b),cancelAnimationFrame(L),N.disconnect(),window.removeEventListener("mousemove",q),window.removeEventListener("mouseover",K),window.removeEventListener("scroll",D),window.removeEventListener("scroll",k)}},[]);const v=d?"anim-in":"";return p.jsxs(p.Fragment,{children:[p.jsx(Ix,{}),p.jsxs("nav",{className:`nav ${l?"scrolled":""} ${v}`,children:[p.jsxs("div",{className:"nav-left nav-links",children:[p.jsx("a",{href:"#services",children:"Services"}),p.jsx("a",{href:"#expertise",children:"Expertise"})]}),p.jsxs("div",{className:"nav-brand-center",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:[p.jsx("img",{className:"nav-brand-img",src:"/logo.jpg",alt:"QIX Logo"}),p.jsx("span",{className:"nav-brand-text",children:"QIX Technologies"})]}),p.jsxs("div",{className:"nav-right nav-links",style:{display:"flex",alignItems:"center",gap:"24px"},children:[p.jsx("a",{href:"#scale",children:"Scale"}),m?p.jsxs("div",{className:"user-profile-badge",children:[p.jsx("img",{className:"user-profile-avatar",src:u.avatar,alt:"User Avatar"}),p.jsx("span",{className:"user-profile-name",children:u.name}),p.jsx("div",{className:"logout-dropdown",children:p.jsx("button",{className:"logout-btn",onClick:x,children:"Disconnect"})})]}):p.jsx("a",{href:"#login",className:"nav-login-link",onClick:S=>{S.preventDefault(),s(!0)},style:{fontSize:"13px",fontWeight:"500",color:"rgba(255, 255, 255, 0.55)",textDecoration:"none",letterSpacing:"0.5px",transition:"color 0.3s ease"},onMouseEnter:S=>S.target.style.color="#fff",onMouseLeave:S=>S.target.style.color="rgba(255, 255, 255, 0.55)",children:"Log In"}),p.jsx(wi,{children:p.jsx("a",{href:"#contact",className:"nav-cta",onClick:S=>{S.preventDefault(),o(!0)},children:p.jsxs("span",{className:"btn-content-inner",children:[p.jsxs("span",{className:"btn-slide-item",children:[p.jsx("span",{children:"Start Project"}),p.jsx("svg",{className:"btn-arrow",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:p.jsx("path",{d:"M3 8h10M9 4l4 4-4 4"})})]}),p.jsxs("span",{className:"btn-slide-item btn-slide-item-hover",children:[p.jsx("span",{children:"Start Project"}),p.jsx("svg",{className:"btn-arrow",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:p.jsx("path",{d:"M3 8h10M9 4l4 4-4 4"})})]})]})})})]}),p.jsxs("button",{className:`nav-hamburger ${n?"open":""}`,onClick:()=>i(!n),"aria-label":"Menu",children:[p.jsx("span",{}),p.jsx("span",{}),p.jsx("span",{})]})]}),p.jsxs("div",{className:`mobile-menu ${n?"open":""}`,children:[p.jsx("a",{href:"#services",onClick:()=>i(!1),children:"Services"}),p.jsx("a",{href:"#expertise",onClick:()=>i(!1),children:"Expertise"}),p.jsx("a",{href:"#scale",onClick:()=>i(!1),children:"Scale"}),m?p.jsxs("a",{href:"#logout",onClick:S=>{S.preventDefault(),x(),i(!1)},children:["Log Out (",u.name,")"]}):p.jsx("a",{href:"#login",onClick:S=>{S.preventDefault(),s(!0),i(!1)},children:"Log In"}),p.jsx("a",{href:"#contact",className:"mobile-cta",onClick:S=>{S.preventDefault(),i(!1),o(!0)},children:"Start Project"})]}),p.jsxs("div",{className:"hero-wrapper",children:[p.jsx("div",{className:`hero-fade ${v}`}),p.jsx("div",{className:`hero-fade-top ${v}`}),p.jsxs("div",{id:"hero-overlay",children:[p.jsxs("div",{className:"hero-content",children:[m&&p.jsxs("div",{className:"hero-welcome-badge",children:[p.jsx("span",{className:"welcome-pulse-dot"}),p.jsxs("span",{children:["Welcome, ",u.name]})]}),p.jsxs("h1",{className:`hero-h1 ${v}`,children:["We build software. ",p.jsx("br",{}),p.jsx("span",{className:"thin",children:"Web. App Store. Android."})]}),p.jsxs("div",{className:"hero-row",children:[p.jsx("p",{className:`hero-sub ${v}`,children:"We design, develop, and launch high-performance websites and custom mobile applications. From sleek interfaces in the App Store and Google Play to cloud scale backends, we handle the technology so you can scale your business."}),p.jsxs("div",{className:`hero-actions ${v}`,children:[p.jsx(wi,{children:p.jsx("a",{href:"#services",className:"btn-primary",children:p.jsxs("span",{className:"btn-content-inner",children:[p.jsxs("span",{className:"btn-slide-item",children:[p.jsx("span",{children:"Our Services"}),p.jsx("svg",{className:"btn-arrow",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:p.jsx("path",{d:"M3 8h10M9 4l4 4-4 4"})})]}),p.jsxs("span",{className:"btn-slide-item btn-slide-item-hover",children:[p.jsx("span",{children:"Our Services"}),p.jsx("svg",{className:"btn-arrow",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:p.jsx("path",{d:"M3 8h10M9 4l4 4-4 4"})})]})]})})}),p.jsx(wi,{children:p.jsx("a",{href:"#contact",className:"btn-secondary",children:p.jsxs("span",{className:"btn-content-inner",children:[p.jsxs("span",{className:"btn-slide-item",children:[p.jsx("span",{children:"Get in Touch"}),p.jsx("svg",{className:"btn-arrow",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:p.jsx("path",{d:"M3 8h10M9 4l4 4-4 4"})})]}),p.jsxs("span",{className:"btn-slide-item btn-slide-item-hover",children:[p.jsx("span",{children:"Get in Touch"}),p.jsx("svg",{className:"btn-arrow",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:p.jsx("path",{d:"M3 8h10M9 4l4 4-4 4"})})]})]})})})]})]})]}),p.jsxs("div",{className:"hero-bottom",children:[p.jsxs("div",{className:"hero-stats",children:[p.jsxs("div",{className:`hero-stat ${v}`,children:[p.jsx("span",{className:"hero-stat-val",children:"150+"}),p.jsx("span",{className:"hero-stat-label",children:"Products Launched"})]}),p.jsxs("div",{className:`hero-stat ${v}`,children:[p.jsx("span",{className:"hero-stat-val",children:"99.9%"}),p.jsx("span",{className:"hero-stat-label",children:"Uptime SLA"})]}),p.jsxs("div",{className:`hero-stat ${v}`,children:[p.jsx("span",{className:"hero-stat-val",children:"15M+"}),p.jsx("span",{className:"hero-stat-label",children:"Active App Users"})]})]}),p.jsxs("div",{className:`hero-scroll ${v}`,children:[p.jsx("svg",{width:"13",height:"13",viewBox:"0 0 13 13",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{opacity:.35,flexShrink:0},children:p.jsx("path",{d:"M6.5 1v11M2 8l4.5 4.5L11 8",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),p.jsx("span",{style:{letterSpacing:"2px",fontSize:"10px"},children:"Scroll to explore"})]})]})]})]}),p.jsx("button",{className:"settings-toggle",onClick:()=>e(!t),"aria-label":"Synthesizer Settings",children:p.jsxs("svg",{viewBox:"0 0 24 24",children:[p.jsx("path",{d:"M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"}),p.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51-1Z"})]})}),p.jsx("section",{className:"section section-whatwedo",id:"services",children:p.jsxs("div",{className:"section-inner",children:[p.jsx("div",{className:"section-label reveal",children:"What We Do"}),p.jsxs("h2",{className:"section-heading reveal reveal-delay-1",children:["Engineered for stability. ",p.jsx("span",{className:"thin",children:"Designed for growth."})]}),p.jsxs("div",{className:"features-grid",children:[p.jsxs("div",{className:"feature-card reveal reveal-delay-1",children:[p.jsx("div",{className:"feature-icon",children:p.jsxs("svg",{viewBox:"0 0 24 24",children:[p.jsx("path",{d:"M12 2L2 7l10 5 10-5-10-5z"}),p.jsx("path",{d:"M2 17l10 5 10-5"}),p.jsx("path",{d:"M2 12l10 5 10-5"})]})}),p.jsx("div",{className:"feature-title",children:"Custom Web Development"}),p.jsx("div",{className:"feature-desc",children:"High-performance, secure, and SEO-optimized web systems built with modern frameworks (React, Next.js, Node.js) that load instantly."})]}),p.jsxs("div",{className:"feature-card reveal reveal-delay-2",children:[p.jsx("div",{className:"feature-icon",children:p.jsxs("svg",{viewBox:"0 0 24 24",children:[p.jsx("circle",{cx:"12",cy:"12",r:"3"}),p.jsx("path",{d:"M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"})]})}),p.jsx("div",{className:"feature-title",children:"iOS & Android Apps"}),p.jsx("div",{className:"feature-desc",children:"Native & cross-platform applications crafted for optimal user experiences, from design to submission in the App Store and Google Play."})]}),p.jsxs("div",{className:"feature-card reveal reveal-delay-3",children:[p.jsx("div",{className:"feature-icon",children:p.jsx("svg",{viewBox:"0 0 24 24",children:p.jsx("path",{d:"M22 12h-4l-3 9L9 3l-3 9H2"})})}),p.jsx("div",{className:"feature-title",children:"UI/UX Interface Design"}),p.jsx("div",{className:"feature-desc",children:"Visual design systems that communicate brand trust. Pixel-perfect, accessible, and structured user flows that drive customer conversion."})]}),p.jsxs("div",{className:"feature-card reveal reveal-delay-4",children:[p.jsx("div",{className:"feature-icon",children:p.jsxs("svg",{viewBox:"0 0 24 24",children:[p.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),p.jsx("path",{d:"M3 9h18M9 3v18"})]})}),p.jsx("div",{className:"feature-title",children:"Cloud Infrastructure"}),p.jsx("div",{className:"feature-desc",children:"Reliable CI/CD pipelines, containerized orchestration (Docker/Kubernetes), and scalable architecture setups on AWS, GCP, and Vercel."})]}),p.jsxs("div",{className:"feature-card reveal reveal-delay-5",children:[p.jsx("div",{className:"feature-icon",children:p.jsxs("svg",{viewBox:"0 0 24 24",children:[p.jsx("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),p.jsx("circle",{cx:"9",cy:"7",r:"4"}),p.jsx("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),p.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]})}),p.jsx("div",{className:"feature-title",children:"Integrations & API Design"}),p.jsx("div",{className:"feature-desc",children:"Seamless connections to CRMs, payment gateways (Stripe), ERP pipelines, and secure enterprise backend services."})]}),p.jsxs("div",{className:"feature-card reveal reveal-delay-6",children:[p.jsx("div",{className:"feature-icon",children:p.jsx("svg",{viewBox:"0 0 24 24",children:p.jsx("polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"})})}),p.jsx("div",{className:"feature-title",children:"Support & Optimization"}),p.jsx("div",{className:"feature-desc",children:"Post-launch support, performance audits, page speed optimization, security updates, and database maintenance to keep apps healthy."})]})]})]})}),p.jsx("section",{className:"section section-research",id:"expertise",children:p.jsxs("div",{className:"section-inner",children:[p.jsxs("div",{className:"research-content",children:[p.jsx("div",{className:"section-label reveal",children:"Research Areas"}),p.jsxs("h2",{className:"section-heading reveal reveal-delay-1",style:{marginBottom:"48px"},children:["Three pillars ",p.jsx("span",{className:"thin",children:"of scientific execution"})]}),p.jsxs("div",{className:"research-list",children:[p.jsx("div",{className:"research-item-wrap reveal reveal-delay-2",children:p.jsxs("div",{className:`research-item ${f===1?"active":""}`,onMouseEnter:()=>h(1),children:[p.jsx("div",{className:"research-num",children:"01"}),p.jsxs("div",{className:"research-item-content",children:[p.jsx("div",{className:"research-item-title",children:"High-Performance Web Engines"}),p.jsx("div",{className:"research-item-desc",children:"Building sub-second loading web applications using edge-rendering, caching layers, and clean, modular component structures."})]})]})}),p.jsx("div",{className:"research-item-wrap reveal reveal-delay-3",children:p.jsxs("div",{className:`research-item ${f===2?"active":""}`,onMouseEnter:()=>h(2),children:[p.jsx("div",{className:"research-num",children:"02"}),p.jsxs("div",{className:"research-item-content",children:[p.jsx("div",{className:"research-item-title",children:"Fluid Native Mobile Frameworks"}),p.jsx("div",{className:"research-item-desc",children:"Crafting mobile software that utilizes GPU hardware acceleration for smooth 120Hz animations, local databases, and offline accessibility."})]})]})}),p.jsx("div",{className:"research-item-wrap reveal reveal-delay-4",children:p.jsxs("div",{className:`research-item ${f===3?"active":""}`,onMouseEnter:()=>h(3),children:[p.jsx("div",{className:"research-num",children:"03"}),p.jsxs("div",{className:"research-item-content",children:[p.jsx("div",{className:"research-item-title",children:"Secure & Automated Cloud"}),p.jsx("div",{className:"research-item-desc",children:"Deploying auto-scaling cloud clusters protected by firewalls, standard authorization models, and fully automated deployment workflows."})]})]})})]})]}),p.jsx("div",{className:"research-canvas-wrap",children:p.jsx(L1,{activeFormation:f})})]})}),p.jsx("section",{className:"section section-portfolio",id:"work",children:p.jsxs("div",{className:"section-inner",children:[p.jsxs("div",{className:"portfolio-header",children:[p.jsx("div",{className:"section-label reveal",children:"Selected Work"}),p.jsxs("h2",{className:"section-heading reveal reveal-delay-1",children:["Case studies ",p.jsx("span",{className:"thin",children:"of built solutions"})]})]}),p.jsxs("div",{className:"portfolio-cards",children:[p.jsx("div",{className:"portfolio-card-wrapper reveal reveal-delay-2",children:p.jsxs("div",{className:"portfolio-card",children:[p.jsxs("div",{className:"portfolio-card-content",children:[p.jsx("div",{className:"portfolio-card-tag",children:"Web Application / AI"}),p.jsx("h3",{className:"portfolio-card-title",children:"HubRecipeCook"}),p.jsx("p",{className:"portfolio-card-desc",children:"A modern culinary recipe platform featuring category filtering, detailed cooking instructions, user favorites, and an integrated AI Chef Assistant that crafts custom recipes based on ingredients currently in your kitchen."}),p.jsxs("div",{className:"portfolio-card-tech",children:[p.jsx("span",{children:"React"}),p.jsx("span",{children:"Vite"}),p.jsx("span",{children:"AI Chef"}),p.jsx("span",{children:"Glassmorphism"})]}),p.jsx(wi,{children:p.jsx("a",{href:"https://hubrecipecook.netlify.app",target:"_blank",rel:"noopener noreferrer",className:"btn-primary",children:p.jsxs("span",{className:"btn-content-inner",children:[p.jsxs("span",{className:"btn-slide-item",children:[p.jsx("span",{children:"Visit Website"}),p.jsx("svg",{className:"btn-arrow",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:p.jsx("path",{d:"M3 8h10M9 4l4 4-4 4"})})]}),p.jsxs("span",{className:"btn-slide-item btn-slide-item-hover",children:[p.jsx("span",{children:"Visit Website"}),p.jsx("svg",{className:"btn-arrow",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:p.jsx("path",{d:"M3 8h10M9 4l4 4-4 4"})})]})]})})})]}),p.jsx("div",{className:"portfolio-card-image",children:p.jsx("img",{src:"/project_recipe.jpg",alt:"HubRecipeCook Platform",loading:"lazy"})})]})}),p.jsx("div",{className:"portfolio-card-wrapper reveal reveal-delay-3",children:p.jsxs("div",{className:"portfolio-card",children:[p.jsxs("div",{className:"portfolio-card-content",children:[p.jsx("div",{className:"portfolio-card-tag",children:"SaaS Platform"}),p.jsx("h3",{className:"portfolio-card-title",children:"Aether Analytics Suite"}),p.jsx("p",{className:"portfolio-card-desc",children:"Enterprise performance tracking platform processing millions of API events daily. Features custom 3D data visualization, predictive analytics, and automated alerting."}),p.jsxs("div",{className:"portfolio-card-tech",children:[p.jsx("span",{children:"React"}),p.jsx("span",{children:"Next.js"}),p.jsx("span",{children:"Three.js"}),p.jsx("span",{children:"Node.js"})]}),p.jsx(wi,{children:p.jsx("a",{href:"#contact",className:"btn-primary",children:p.jsxs("span",{className:"btn-content-inner",children:[p.jsxs("span",{className:"btn-slide-item",children:[p.jsx("span",{children:"View Case Study"}),p.jsx("svg",{className:"btn-arrow",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:p.jsx("path",{d:"M3 8h10M9 4l4 4-4 4"})})]}),p.jsxs("span",{className:"btn-slide-item btn-slide-item-hover",children:[p.jsx("span",{children:"View Case Study"}),p.jsx("svg",{className:"btn-arrow",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:p.jsx("path",{d:"M3 8h10M9 4l4 4-4 4"})})]})]})})})]}),p.jsx("div",{className:"portfolio-card-image",children:p.jsx("img",{src:"/project_analytics.jpg",alt:"Aether Analytics Suite",loading:"lazy"})})]})}),p.jsx("div",{className:"portfolio-card-wrapper reveal reveal-delay-4",children:p.jsxs("div",{className:"portfolio-card",children:[p.jsxs("div",{className:"portfolio-card-content",children:[p.jsx("div",{className:"portfolio-card-tag",children:"DevOps / Cloud"}),p.jsx("h3",{className:"portfolio-card-title",children:"Nebula Cloud Console"}),p.jsx("p",{className:"portfolio-card-desc",children:"Fully automated multi-region deployment center. Combines real-time global network mesh maps, cluster load indicators, and secure authorization controls."}),p.jsxs("div",{className:"portfolio-card-tech",children:[p.jsx("span",{children:"Vite"}),p.jsx("span",{children:"AWS"}),p.jsx("span",{children:"Kubernetes"}),p.jsx("span",{children:"GraphQL"})]}),p.jsx(wi,{children:p.jsx("a",{href:"#contact",className:"btn-primary",children:p.jsxs("span",{className:"btn-content-inner",children:[p.jsxs("span",{className:"btn-slide-item",children:[p.jsx("span",{children:"View Case Study"}),p.jsx("svg",{className:"btn-arrow",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:p.jsx("path",{d:"M3 8h10M9 4l4 4-4 4"})})]}),p.jsxs("span",{className:"btn-slide-item btn-slide-item-hover",children:[p.jsx("span",{children:"View Case Study"}),p.jsx("svg",{className:"btn-arrow",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:p.jsx("path",{d:"M3 8h10M9 4l4 4-4 4"})})]})]})})})]}),p.jsx("div",{className:"portfolio-card-image",children:p.jsx("img",{src:"/project_cloud.jpg",alt:"Nebula Cloud Console",loading:"lazy"})})]})})]})]})}),p.jsxs("section",{className:"section section-numbers",id:"scale",children:[p.jsx(N1,{}),p.jsx("div",{className:"section-inner",children:p.jsxs("div",{className:"numbers-content",children:[p.jsx("div",{className:"section-label reveal",children:"By The Numbers"}),p.jsxs("h2",{className:"section-heading reveal reveal-delay-1",children:["Scale that ",p.jsx("span",{className:"thin",children:"speaks for itself"})]}),p.jsxs("div",{className:"numbers-grid",children:[p.jsxs("div",{className:"number-card reveal reveal-delay-2",children:[p.jsx("div",{className:"number-val",children:p.jsx(Ao,{count:150,suffix:"+"})}),p.jsx("div",{className:"number-divider"}),p.jsxs("div",{className:"number-label",children:["Web & mobile projects",p.jsx("br",{}),"launched successfully"]})]}),p.jsxs("div",{className:"number-card reveal reveal-delay-3",children:[p.jsx("div",{className:"number-val",children:p.jsx(Ao,{count:99,suffix:".9%"})}),p.jsx("div",{className:"number-divider"}),p.jsxs("div",{className:"number-label",children:["Uptime and build",p.jsx("br",{}),"reliability standards"]})]}),p.jsxs("div",{className:"number-card reveal reveal-delay-4",children:[p.jsx("div",{className:"number-val",children:p.jsx(Ao,{count:45,suffix:"+"})}),p.jsx("div",{className:"number-divider"}),p.jsxs("div",{className:"number-label",children:["Experienced engineers",p.jsx("br",{}),"and product designers"]})]}),p.jsxs("div",{className:"number-card reveal reveal-delay-5",children:[p.jsx("div",{className:"number-val",children:p.jsx(Ao,{count:10,suffix:"x"})}),p.jsx("div",{className:"number-divider"}),p.jsxs("div",{className:"number-label",children:["Average load speed",p.jsx("br",{}),"improvement for clients"]})]})]})]})})]}),p.jsx("section",{className:"section section-cta",id:"contact",children:p.jsxs("div",{className:"section-inner",children:[p.jsx("div",{className:"section-label reveal",children:"Get Involved"}),p.jsxs("h2",{className:"cta-heading reveal reveal-delay-1",children:["The next breakthrough ",p.jsx("span",{className:"thin",children:"starts with you"})]}),p.jsx("p",{className:"cta-sub reveal reveal-delay-2",children:"Have a website or mobile application concept? Let our team handle the engineering, design, and deployment. We launch products under iOS, Android, and Web platforms."}),p.jsxs("div",{className:"cta-actions reveal reveal-delay-3",children:[p.jsx(wi,{children:p.jsx("button",{className:"btn-primary",onClick:()=>o(!0),children:p.jsxs("span",{className:"btn-content-inner",children:[p.jsxs("span",{className:"btn-slide-item",children:[p.jsx("span",{children:"Start a Project"}),p.jsx("svg",{className:"btn-arrow",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:p.jsx("path",{d:"M3 8h10M9 4l4 4-4 4"})})]}),p.jsxs("span",{className:"btn-slide-item btn-slide-item-hover",children:[p.jsx("span",{children:"Start a Project"}),p.jsx("svg",{className:"btn-arrow",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:p.jsx("path",{d:"M3 8h10M9 4l4 4-4 4"})})]})]})})}),p.jsx(wi,{children:p.jsx("button",{className:"btn-secondary",onClick:()=>alert("Sending contact form."),children:p.jsxs("span",{className:"btn-content-inner",children:[p.jsxs("span",{className:"btn-slide-item",children:[p.jsx("span",{children:"Get in Touch"}),p.jsx("svg",{className:"btn-arrow",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:p.jsx("path",{d:"M3 8h10M9 4l4 4-4 4"})})]}),p.jsxs("span",{className:"btn-slide-item btn-slide-item-hover",children:[p.jsx("span",{children:"Get in Touch"}),p.jsx("svg",{className:"btn-arrow",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:p.jsx("path",{d:"M3 8h10M9 4l4 4-4 4"})})]})]})})})]})]})}),p.jsx("footer",{className:"footer",id:"about",children:p.jsxs("div",{className:"section-inner",style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%"},children:[p.jsxs("div",{className:"footer-left",children:[p.jsx("img",{className:"footer-img",src:"/logo.jpg",alt:"QIX Logo"}),p.jsx("span",{className:"footer-brand",style:{marginLeft:"10px"},children:"QIX Technologies"})]}),p.jsx("div",{className:"footer-right",children:"© 2026 QIX Technologies Inc. Quality • Intelligence • Experience. All rights reserved."})]})}),p.jsx(D1,{isOpen:t,onClose:()=>e(!1)}),p.jsx(U1,{isOpen:r,onClose:()=>s(!1)}),p.jsx(ly,{isOpen:a,onClose:()=>o(!1)}),p.jsx("div",{ref:y,className:"custom-cursor-dot"}),p.jsx("div",{ref:_,className:"custom-cursor-circle"})]})}$c.createRoot(document.getElementById("root")).render(p.jsx(em.StrictMode,{children:p.jsx(I1,{})}));
