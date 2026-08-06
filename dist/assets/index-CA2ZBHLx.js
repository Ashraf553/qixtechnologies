var t_=Object.defineProperty;var n_=(t,e,n)=>e in t?t_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Te=(t,e,n)=>n_(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function qp(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Yp={exports:{}},yl={},$p={exports:{}},qe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ba=Symbol.for("react.element"),i_=Symbol.for("react.portal"),r_=Symbol.for("react.fragment"),s_=Symbol.for("react.strict_mode"),a_=Symbol.for("react.profiler"),o_=Symbol.for("react.provider"),l_=Symbol.for("react.context"),c_=Symbol.for("react.forward_ref"),u_=Symbol.for("react.suspense"),d_=Symbol.for("react.memo"),h_=Symbol.for("react.lazy"),lh=Symbol.iterator;function f_(t){return t===null||typeof t!="object"?null:(t=lh&&t[lh]||t["@@iterator"],typeof t=="function"?t:null)}var Kp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Zp=Object.assign,Qp={};function As(t,e,n){this.props=t,this.context=e,this.refs=Qp,this.updater=n||Kp}As.prototype.isReactComponent={};As.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};As.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Jp(){}Jp.prototype=As.prototype;function Qu(t,e,n){this.props=t,this.context=e,this.refs=Qp,this.updater=n||Kp}var Ju=Qu.prototype=new Jp;Ju.constructor=Qu;Zp(Ju,As.prototype);Ju.isPureReactComponent=!0;var ch=Array.isArray,em=Object.prototype.hasOwnProperty,ed={current:null},tm={key:!0,ref:!0,__self:!0,__source:!0};function nm(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)em.call(e,i)&&!tm.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),u=0;u<o;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:ba,type:t,key:s,ref:a,props:r,_owner:ed.current}}function p_(t,e){return{$$typeof:ba,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function td(t){return typeof t=="object"&&t!==null&&t.$$typeof===ba}function m_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var uh=/\/+/g;function Xl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?m_(""+t.key):e.toString(36)}function Co(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case ba:case i_:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+Xl(a,0):i,ch(r)?(n="",t!=null&&(n=t.replace(uh,"$&/")+"/"),Co(r,e,n,"",function(u){return u})):r!=null&&(td(r)&&(r=p_(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(uh,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",ch(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+Xl(s,o);a+=Co(s,e,n,l,r)}else if(l=f_(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+Xl(s,o++),a+=Co(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Oa(t,e,n){if(t==null)return t;var i=[],r=0;return Co(t,i,"","",function(s){return e.call(n,s,r++)}),i}function g_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Kt={current:null},Ro={transition:null},v_={ReactCurrentDispatcher:Kt,ReactCurrentBatchConfig:Ro,ReactCurrentOwner:ed};function im(){throw Error("act(...) is not supported in production builds of React.")}qe.Children={map:Oa,forEach:function(t,e,n){Oa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Oa(t,function(){e++}),e},toArray:function(t){return Oa(t,function(e){return e})||[]},only:function(t){if(!td(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};qe.Component=As;qe.Fragment=r_;qe.Profiler=a_;qe.PureComponent=Qu;qe.StrictMode=s_;qe.Suspense=u_;qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=v_;qe.act=im;qe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Zp({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=ed.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)em.call(e,l)&&!tm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var u=0;u<l;u++)o[u]=arguments[u+2];i.children=o}return{$$typeof:ba,type:t.type,key:r,ref:s,props:i,_owner:a}};qe.createContext=function(t){return t={$$typeof:l_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:o_,_context:t},t.Consumer=t};qe.createElement=nm;qe.createFactory=function(t){var e=nm.bind(null,t);return e.type=t,e};qe.createRef=function(){return{current:null}};qe.forwardRef=function(t){return{$$typeof:c_,render:t}};qe.isValidElement=td;qe.lazy=function(t){return{$$typeof:h_,_payload:{_status:-1,_result:t},_init:g_}};qe.memo=function(t,e){return{$$typeof:d_,type:t,compare:e===void 0?null:e}};qe.startTransition=function(t){var e=Ro.transition;Ro.transition={};try{t()}finally{Ro.transition=e}};qe.unstable_act=im;qe.useCallback=function(t,e){return Kt.current.useCallback(t,e)};qe.useContext=function(t){return Kt.current.useContext(t)};qe.useDebugValue=function(){};qe.useDeferredValue=function(t){return Kt.current.useDeferredValue(t)};qe.useEffect=function(t,e){return Kt.current.useEffect(t,e)};qe.useId=function(){return Kt.current.useId()};qe.useImperativeHandle=function(t,e,n){return Kt.current.useImperativeHandle(t,e,n)};qe.useInsertionEffect=function(t,e){return Kt.current.useInsertionEffect(t,e)};qe.useLayoutEffect=function(t,e){return Kt.current.useLayoutEffect(t,e)};qe.useMemo=function(t,e){return Kt.current.useMemo(t,e)};qe.useReducer=function(t,e,n){return Kt.current.useReducer(t,e,n)};qe.useRef=function(t){return Kt.current.useRef(t)};qe.useState=function(t){return Kt.current.useState(t)};qe.useSyncExternalStore=function(t,e,n){return Kt.current.useSyncExternalStore(t,e,n)};qe.useTransition=function(){return Kt.current.useTransition()};qe.version="18.3.1";$p.exports=qe;var me=$p.exports;const rm=qp(me);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var __=me,x_=Symbol.for("react.element"),y_=Symbol.for("react.fragment"),S_=Object.prototype.hasOwnProperty,M_=__.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,E_={key:!0,ref:!0,__self:!0,__source:!0};function sm(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)S_.call(e,i)&&!E_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:x_,type:t,key:s,ref:a,props:r,_owner:M_.current}}yl.Fragment=y_;yl.jsx=sm;yl.jsxs=sm;Yp.exports=yl;var c=Yp.exports,$c={},am={exports:{}},gn={},om={exports:{}},lm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,O){var D=N.length;N.push(O);e:for(;0<D;){var z=D-1>>>1,Q=N[z];if(0<r(Q,O))N[z]=O,N[D]=Q,D=z;else break e}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var O=N[0],D=N.pop();if(D!==O){N[0]=D;e:for(var z=0,Q=N.length,V=Q>>>1;z<V;){var K=2*(z+1)-1,J=N[K],fe=K+1,de=N[fe];if(0>r(J,D))fe<Q&&0>r(de,J)?(N[z]=de,N[fe]=D,z=fe):(N[z]=J,N[K]=D,z=K);else if(fe<Q&&0>r(de,D))N[z]=de,N[fe]=D,z=fe;else break e}}return O}function r(N,O){var D=N.sortIndex-O.sortIndex;return D!==0?D:N.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],u=[],f=1,p=null,h=3,g=!1,_=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(N){for(var O=n(u);O!==null;){if(O.callback===null)i(u);else if(O.startTime<=N)i(u),O.sortIndex=O.expirationTime,e(l,O);else break;O=n(u)}}function E(N){if(y=!1,v(N),!_)if(n(l)!==null)_=!0,$(w);else{var O=n(u);O!==null&&B(E,O.startTime-N)}}function w(N,O){_=!1,y&&(y=!1,d(k),k=-1),g=!0;var D=h;try{for(v(O),p=n(l);p!==null&&(!(p.expirationTime>O)||N&&!I());){var z=p.callback;if(typeof z=="function"){p.callback=null,h=p.priorityLevel;var Q=z(p.expirationTime<=O);O=t.unstable_now(),typeof Q=="function"?p.callback=Q:p===n(l)&&i(l),v(O)}else i(l);p=n(l)}if(p!==null)var V=!0;else{var K=n(u);K!==null&&B(E,K.startTime-O),V=!1}return V}finally{p=null,h=D,g=!1}}var C=!1,R=null,k=-1,S=5,M=-1;function I(){return!(t.unstable_now()-M<S)}function H(){if(R!==null){var N=t.unstable_now();M=N;var O=!0;try{O=R(!0,N)}finally{O?ie():(C=!1,R=null)}}else C=!1}var ie;if(typeof x=="function")ie=function(){x(H)};else if(typeof MessageChannel<"u"){var P=new MessageChannel,j=P.port2;P.port1.onmessage=H,ie=function(){j.postMessage(null)}}else ie=function(){m(H,0)};function $(N){R=N,C||(C=!0,ie())}function B(N,O){k=m(function(){N(t.unstable_now())},O)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){_||g||(_=!0,$(w))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(h){case 1:case 2:case 3:var O=3;break;default:O=h}var D=h;h=O;try{return N()}finally{h=D}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,O){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var D=h;h=N;try{return O()}finally{h=D}},t.unstable_scheduleCallback=function(N,O,D){var z=t.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?z+D:z):D=z,N){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=D+Q,N={id:f++,callback:O,priorityLevel:N,startTime:D,expirationTime:Q,sortIndex:-1},D>z?(N.sortIndex=D,e(u,N),n(l)===null&&N===n(u)&&(y?(d(k),k=-1):y=!0,B(E,D-z))):(N.sortIndex=Q,e(l,N),_||g||(_=!0,$(w))),N},t.unstable_shouldYield=I,t.unstable_wrapCallback=function(N){var O=h;return function(){var D=h;h=O;try{return N.apply(this,arguments)}finally{h=D}}}})(lm);om.exports=lm;var T_=om.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w_=me,mn=T_;function oe(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var cm=new Set,oa={};function wr(t,e){ps(t,e),ps(t+"Capture",e)}function ps(t,e){for(oa[t]=e,t=0;t<e.length;t++)cm.add(e[t])}var di=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Kc=Object.prototype.hasOwnProperty,A_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,dh={},hh={};function b_(t){return Kc.call(hh,t)?!0:Kc.call(dh,t)?!1:A_.test(t)?hh[t]=!0:(dh[t]=!0,!1)}function C_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function R_(t,e,n,i){if(e===null||typeof e>"u"||C_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Zt(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var It={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){It[t]=new Zt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];It[e]=new Zt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){It[t]=new Zt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){It[t]=new Zt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){It[t]=new Zt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){It[t]=new Zt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){It[t]=new Zt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){It[t]=new Zt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){It[t]=new Zt(t,5,!1,t.toLowerCase(),null,!1,!1)});var nd=/[\-:]([a-z])/g;function id(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(nd,id);It[e]=new Zt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(nd,id);It[e]=new Zt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(nd,id);It[e]=new Zt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){It[t]=new Zt(t,1,!1,t.toLowerCase(),null,!1,!1)});It.xlinkHref=new Zt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){It[t]=new Zt(t,1,!1,t.toLowerCase(),null,!0,!0)});function rd(t,e,n,i){var r=It.hasOwnProperty(e)?It[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(R_(e,n,r,i)&&(n=null),i||r===null?b_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var gi=w_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,za=Symbol.for("react.element"),Wr=Symbol.for("react.portal"),Xr=Symbol.for("react.fragment"),sd=Symbol.for("react.strict_mode"),Zc=Symbol.for("react.profiler"),um=Symbol.for("react.provider"),dm=Symbol.for("react.context"),ad=Symbol.for("react.forward_ref"),Qc=Symbol.for("react.suspense"),Jc=Symbol.for("react.suspense_list"),od=Symbol.for("react.memo"),wi=Symbol.for("react.lazy"),hm=Symbol.for("react.offscreen"),fh=Symbol.iterator;function Ds(t){return t===null||typeof t!="object"?null:(t=fh&&t[fh]||t["@@iterator"],typeof t=="function"?t:null)}var ht=Object.assign,ql;function Ws(t){if(ql===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ql=e&&e[1]||""}return`
`+ql+t}var Yl=!1;function $l(t,e){if(!t||Yl)return"";Yl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{Yl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ws(t):""}function N_(t){switch(t.tag){case 5:return Ws(t.type);case 16:return Ws("Lazy");case 13:return Ws("Suspense");case 19:return Ws("SuspenseList");case 0:case 2:case 15:return t=$l(t.type,!1),t;case 11:return t=$l(t.type.render,!1),t;case 1:return t=$l(t.type,!0),t;default:return""}}function eu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Xr:return"Fragment";case Wr:return"Portal";case Zc:return"Profiler";case sd:return"StrictMode";case Qc:return"Suspense";case Jc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case dm:return(t.displayName||"Context")+".Consumer";case um:return(t._context.displayName||"Context")+".Provider";case ad:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case od:return e=t.displayName||null,e!==null?e:eu(t.type)||"Memo";case wi:e=t._payload,t=t._init;try{return eu(t(e))}catch{}}return null}function P_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return eu(e);case 8:return e===sd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Wi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function fm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function L_(t){var e=fm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ba(t){t._valueTracker||(t._valueTracker=L_(t))}function pm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=fm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function jo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function tu(t,e){var n=e.checked;return ht({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function ph(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Wi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function mm(t,e){e=e.checked,e!=null&&rd(t,"checked",e,!1)}function nu(t,e){mm(t,e);var n=Wi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?iu(t,e.type,n):e.hasOwnProperty("defaultValue")&&iu(t,e.type,Wi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function mh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function iu(t,e,n){(e!=="number"||jo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Xs=Array.isArray;function ss(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Wi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function ru(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(oe(91));return ht({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function gh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(oe(92));if(Xs(n)){if(1<n.length)throw Error(oe(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Wi(n)}}function gm(t,e){var n=Wi(e.value),i=Wi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function vh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function vm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function su(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?vm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ja,_m=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ja=ja||document.createElement("div"),ja.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ja.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function la(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var $s={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},D_=["Webkit","ms","Moz","O"];Object.keys($s).forEach(function(t){D_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),$s[e]=$s[t]})});function xm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||$s.hasOwnProperty(t)&&$s[t]?(""+e).trim():e+"px"}function ym(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=xm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var I_=ht({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function au(t,e){if(e){if(I_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(oe(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(oe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(oe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(oe(62))}}function ou(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lu=null;function ld(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var cu=null,as=null,os=null;function _h(t){if(t=Na(t)){if(typeof cu!="function")throw Error(oe(280));var e=t.stateNode;e&&(e=wl(e),cu(t.stateNode,t.type,e))}}function Sm(t){as?os?os.push(t):os=[t]:as=t}function Mm(){if(as){var t=as,e=os;if(os=as=null,_h(t),e)for(t=0;t<e.length;t++)_h(e[t])}}function Em(t,e){return t(e)}function Tm(){}var Kl=!1;function wm(t,e,n){if(Kl)return t(e,n);Kl=!0;try{return Em(t,e,n)}finally{Kl=!1,(as!==null||os!==null)&&(Tm(),Mm())}}function ca(t,e){var n=t.stateNode;if(n===null)return null;var i=wl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(oe(231,e,typeof n));return n}var uu=!1;if(di)try{var Is={};Object.defineProperty(Is,"passive",{get:function(){uu=!0}}),window.addEventListener("test",Is,Is),window.removeEventListener("test",Is,Is)}catch{uu=!1}function U_(t,e,n,i,r,s,a,o,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(f){this.onError(f)}}var Ks=!1,Ho=null,Go=!1,du=null,F_={onError:function(t){Ks=!0,Ho=t}};function k_(t,e,n,i,r,s,a,o,l){Ks=!1,Ho=null,U_.apply(F_,arguments)}function O_(t,e,n,i,r,s,a,o,l){if(k_.apply(this,arguments),Ks){if(Ks){var u=Ho;Ks=!1,Ho=null}else throw Error(oe(198));Go||(Go=!0,du=u)}}function Ar(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Am(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function xh(t){if(Ar(t)!==t)throw Error(oe(188))}function z_(t){var e=t.alternate;if(!e){if(e=Ar(t),e===null)throw Error(oe(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return xh(r),t;if(s===i)return xh(r),e;s=s.sibling}throw Error(oe(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(oe(189))}}if(n.alternate!==i)throw Error(oe(190))}if(n.tag!==3)throw Error(oe(188));return n.stateNode.current===n?t:e}function bm(t){return t=z_(t),t!==null?Cm(t):null}function Cm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Cm(t);if(e!==null)return e;t=t.sibling}return null}var Rm=mn.unstable_scheduleCallback,yh=mn.unstable_cancelCallback,B_=mn.unstable_shouldYield,j_=mn.unstable_requestPaint,vt=mn.unstable_now,H_=mn.unstable_getCurrentPriorityLevel,cd=mn.unstable_ImmediatePriority,Nm=mn.unstable_UserBlockingPriority,Vo=mn.unstable_NormalPriority,G_=mn.unstable_LowPriority,Pm=mn.unstable_IdlePriority,Sl=null,qn=null;function V_(t){if(qn&&typeof qn.onCommitFiberRoot=="function")try{qn.onCommitFiberRoot(Sl,t,void 0,(t.current.flags&128)===128)}catch{}}var On=Math.clz32?Math.clz32:q_,W_=Math.log,X_=Math.LN2;function q_(t){return t>>>=0,t===0?32:31-(W_(t)/X_|0)|0}var Ha=64,Ga=4194304;function qs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Wo(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=qs(o):(s&=a,s!==0&&(i=qs(s)))}else a=n&~r,a!==0?i=qs(a):s!==0&&(i=qs(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-On(e),r=1<<n,i|=t[n],e&=~r;return i}function Y_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-On(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=Y_(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function hu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Lm(){var t=Ha;return Ha<<=1,!(Ha&4194240)&&(Ha=64),t}function Zl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ca(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-On(e),t[e]=n}function K_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-On(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function ud(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-On(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Ze=0;function Dm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Im,dd,Um,Fm,km,fu=!1,Va=[],Ii=null,Ui=null,Fi=null,ua=new Map,da=new Map,bi=[],Z_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sh(t,e){switch(t){case"focusin":case"focusout":Ii=null;break;case"dragenter":case"dragleave":Ui=null;break;case"mouseover":case"mouseout":Fi=null;break;case"pointerover":case"pointerout":ua.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":da.delete(e.pointerId)}}function Us(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Na(e),e!==null&&dd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Q_(t,e,n,i,r){switch(e){case"focusin":return Ii=Us(Ii,t,e,n,i,r),!0;case"dragenter":return Ui=Us(Ui,t,e,n,i,r),!0;case"mouseover":return Fi=Us(Fi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ua.set(s,Us(ua.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,da.set(s,Us(da.get(s)||null,t,e,n,i,r)),!0}return!1}function Om(t){var e=cr(t.target);if(e!==null){var n=Ar(e);if(n!==null){if(e=n.tag,e===13){if(e=Am(n),e!==null){t.blockedOn=e,km(t.priority,function(){Um(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function No(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=pu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);lu=i,n.target.dispatchEvent(i),lu=null}else return e=Na(n),e!==null&&dd(e),t.blockedOn=n,!1;e.shift()}return!0}function Mh(t,e,n){No(t)&&n.delete(e)}function J_(){fu=!1,Ii!==null&&No(Ii)&&(Ii=null),Ui!==null&&No(Ui)&&(Ui=null),Fi!==null&&No(Fi)&&(Fi=null),ua.forEach(Mh),da.forEach(Mh)}function Fs(t,e){t.blockedOn===e&&(t.blockedOn=null,fu||(fu=!0,mn.unstable_scheduleCallback(mn.unstable_NormalPriority,J_)))}function ha(t){function e(r){return Fs(r,t)}if(0<Va.length){Fs(Va[0],t);for(var n=1;n<Va.length;n++){var i=Va[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ii!==null&&Fs(Ii,t),Ui!==null&&Fs(Ui,t),Fi!==null&&Fs(Fi,t),ua.forEach(e),da.forEach(e),n=0;n<bi.length;n++)i=bi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<bi.length&&(n=bi[0],n.blockedOn===null);)Om(n),n.blockedOn===null&&bi.shift()}var ls=gi.ReactCurrentBatchConfig,Xo=!0;function e0(t,e,n,i){var r=Ze,s=ls.transition;ls.transition=null;try{Ze=1,hd(t,e,n,i)}finally{Ze=r,ls.transition=s}}function t0(t,e,n,i){var r=Ze,s=ls.transition;ls.transition=null;try{Ze=4,hd(t,e,n,i)}finally{Ze=r,ls.transition=s}}function hd(t,e,n,i){if(Xo){var r=pu(t,e,n,i);if(r===null)oc(t,e,i,qo,n),Sh(t,i);else if(Q_(r,t,e,n,i))i.stopPropagation();else if(Sh(t,i),e&4&&-1<Z_.indexOf(t)){for(;r!==null;){var s=Na(r);if(s!==null&&Im(s),s=pu(t,e,n,i),s===null&&oc(t,e,i,qo,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else oc(t,e,i,null,n)}}var qo=null;function pu(t,e,n,i){if(qo=null,t=ld(i),t=cr(t),t!==null)if(e=Ar(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Am(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return qo=t,null}function zm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(H_()){case cd:return 1;case Nm:return 4;case Vo:case G_:return 16;case Pm:return 536870912;default:return 16}default:return 16}}var Ri=null,fd=null,Po=null;function Bm(){if(Po)return Po;var t,e=fd,n=e.length,i,r="value"in Ri?Ri.value:Ri.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Po=r.slice(t,1<i?1-i:void 0)}function Lo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Wa(){return!0}function Eh(){return!1}function vn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Wa:Eh,this.isPropagationStopped=Eh,this}return ht(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Wa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Wa)},persist:function(){},isPersistent:Wa}),e}var bs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pd=vn(bs),Ra=ht({},bs,{view:0,detail:0}),n0=vn(Ra),Ql,Jl,ks,Ml=ht({},Ra,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:md,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ks&&(ks&&t.type==="mousemove"?(Ql=t.screenX-ks.screenX,Jl=t.screenY-ks.screenY):Jl=Ql=0,ks=t),Ql)},movementY:function(t){return"movementY"in t?t.movementY:Jl}}),Th=vn(Ml),i0=ht({},Ml,{dataTransfer:0}),r0=vn(i0),s0=ht({},Ra,{relatedTarget:0}),ec=vn(s0),a0=ht({},bs,{animationName:0,elapsedTime:0,pseudoElement:0}),o0=vn(a0),l0=ht({},bs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),c0=vn(l0),u0=ht({},bs,{data:0}),wh=vn(u0),d0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},h0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},f0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function p0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=f0[t])?!!e[t]:!1}function md(){return p0}var m0=ht({},Ra,{key:function(t){if(t.key){var e=d0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Lo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?h0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:md,charCode:function(t){return t.type==="keypress"?Lo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Lo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),g0=vn(m0),v0=ht({},Ml,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ah=vn(v0),_0=ht({},Ra,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:md}),x0=vn(_0),y0=ht({},bs,{propertyName:0,elapsedTime:0,pseudoElement:0}),S0=vn(y0),M0=ht({},Ml,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),E0=vn(M0),T0=[9,13,27,32],gd=di&&"CompositionEvent"in window,Zs=null;di&&"documentMode"in document&&(Zs=document.documentMode);var w0=di&&"TextEvent"in window&&!Zs,jm=di&&(!gd||Zs&&8<Zs&&11>=Zs),bh=" ",Ch=!1;function Hm(t,e){switch(t){case"keyup":return T0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var qr=!1;function A0(t,e){switch(t){case"compositionend":return Gm(e);case"keypress":return e.which!==32?null:(Ch=!0,bh);case"textInput":return t=e.data,t===bh&&Ch?null:t;default:return null}}function b0(t,e){if(qr)return t==="compositionend"||!gd&&Hm(t,e)?(t=Bm(),Po=fd=Ri=null,qr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return jm&&e.locale!=="ko"?null:e.data;default:return null}}var C0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!C0[t.type]:e==="textarea"}function Vm(t,e,n,i){Sm(i),e=Yo(e,"onChange"),0<e.length&&(n=new pd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Qs=null,fa=null;function R0(t){tg(t,0)}function El(t){var e=Kr(t);if(pm(e))return t}function N0(t,e){if(t==="change")return e}var Wm=!1;if(di){var tc;if(di){var nc="oninput"in document;if(!nc){var Nh=document.createElement("div");Nh.setAttribute("oninput","return;"),nc=typeof Nh.oninput=="function"}tc=nc}else tc=!1;Wm=tc&&(!document.documentMode||9<document.documentMode)}function Ph(){Qs&&(Qs.detachEvent("onpropertychange",Xm),fa=Qs=null)}function Xm(t){if(t.propertyName==="value"&&El(fa)){var e=[];Vm(e,fa,t,ld(t)),wm(R0,e)}}function P0(t,e,n){t==="focusin"?(Ph(),Qs=e,fa=n,Qs.attachEvent("onpropertychange",Xm)):t==="focusout"&&Ph()}function L0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return El(fa)}function D0(t,e){if(t==="click")return El(e)}function I0(t,e){if(t==="input"||t==="change")return El(e)}function U0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var jn=typeof Object.is=="function"?Object.is:U0;function pa(t,e){if(jn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Kc.call(e,r)||!jn(t[r],e[r]))return!1}return!0}function Lh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Dh(t,e){var n=Lh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Lh(n)}}function qm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?qm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Ym(){for(var t=window,e=jo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=jo(t.document)}return e}function vd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function F0(t){var e=Ym(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&qm(n.ownerDocument.documentElement,n)){if(i!==null&&vd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Dh(n,s);var a=Dh(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var k0=di&&"documentMode"in document&&11>=document.documentMode,Yr=null,mu=null,Js=null,gu=!1;function Ih(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;gu||Yr==null||Yr!==jo(i)||(i=Yr,"selectionStart"in i&&vd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Js&&pa(Js,i)||(Js=i,i=Yo(mu,"onSelect"),0<i.length&&(e=new pd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Yr)))}function Xa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var $r={animationend:Xa("Animation","AnimationEnd"),animationiteration:Xa("Animation","AnimationIteration"),animationstart:Xa("Animation","AnimationStart"),transitionend:Xa("Transition","TransitionEnd")},ic={},$m={};di&&($m=document.createElement("div").style,"AnimationEvent"in window||(delete $r.animationend.animation,delete $r.animationiteration.animation,delete $r.animationstart.animation),"TransitionEvent"in window||delete $r.transitionend.transition);function Tl(t){if(ic[t])return ic[t];if(!$r[t])return t;var e=$r[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in $m)return ic[t]=e[n];return t}var Km=Tl("animationend"),Zm=Tl("animationiteration"),Qm=Tl("animationstart"),Jm=Tl("transitionend"),eg=new Map,Uh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yi(t,e){eg.set(t,e),wr(e,[t])}for(var rc=0;rc<Uh.length;rc++){var sc=Uh[rc],O0=sc.toLowerCase(),z0=sc[0].toUpperCase()+sc.slice(1);Yi(O0,"on"+z0)}Yi(Km,"onAnimationEnd");Yi(Zm,"onAnimationIteration");Yi(Qm,"onAnimationStart");Yi("dblclick","onDoubleClick");Yi("focusin","onFocus");Yi("focusout","onBlur");Yi(Jm,"onTransitionEnd");ps("onMouseEnter",["mouseout","mouseover"]);ps("onMouseLeave",["mouseout","mouseover"]);ps("onPointerEnter",["pointerout","pointerover"]);ps("onPointerLeave",["pointerout","pointerover"]);wr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));wr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));wr("onBeforeInput",["compositionend","keypress","textInput","paste"]);wr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));wr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));wr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ys="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),B0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ys));function Fh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,O_(i,e,void 0,t),t.currentTarget=null}function tg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;Fh(r,o,u),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,u=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;Fh(r,o,u),s=l}}}if(Go)throw t=du,Go=!1,du=null,t}function st(t,e){var n=e[Su];n===void 0&&(n=e[Su]=new Set);var i=t+"__bubble";n.has(i)||(ng(e,t,2,!1),n.add(i))}function ac(t,e,n){var i=0;e&&(i|=4),ng(n,t,i,e)}var qa="_reactListening"+Math.random().toString(36).slice(2);function ma(t){if(!t[qa]){t[qa]=!0,cm.forEach(function(n){n!=="selectionchange"&&(B0.has(n)||ac(n,!1,t),ac(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[qa]||(e[qa]=!0,ac("selectionchange",!1,e))}}function ng(t,e,n,i){switch(zm(e)){case 1:var r=e0;break;case 4:r=t0;break;default:r=hd}n=r.bind(null,e,n,t),r=void 0,!uu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function oc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=cr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}wm(function(){var u=s,f=ld(n),p=[];e:{var h=eg.get(t);if(h!==void 0){var g=pd,_=t;switch(t){case"keypress":if(Lo(n)===0)break e;case"keydown":case"keyup":g=g0;break;case"focusin":_="focus",g=ec;break;case"focusout":_="blur",g=ec;break;case"beforeblur":case"afterblur":g=ec;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Th;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=r0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=x0;break;case Km:case Zm:case Qm:g=o0;break;case Jm:g=S0;break;case"scroll":g=n0;break;case"wheel":g=E0;break;case"copy":case"cut":case"paste":g=c0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Ah}var y=(e&4)!==0,m=!y&&t==="scroll",d=y?h!==null?h+"Capture":null:h;y=[];for(var x=u,v;x!==null;){v=x;var E=v.stateNode;if(v.tag===5&&E!==null&&(v=E,d!==null&&(E=ca(x,d),E!=null&&y.push(ga(x,E,v)))),m)break;x=x.return}0<y.length&&(h=new g(h,_,null,n,f),p.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",h&&n!==lu&&(_=n.relatedTarget||n.fromElement)&&(cr(_)||_[hi]))break e;if((g||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,g?(_=n.relatedTarget||n.toElement,g=u,_=_?cr(_):null,_!==null&&(m=Ar(_),_!==m||_.tag!==5&&_.tag!==6)&&(_=null)):(g=null,_=u),g!==_)){if(y=Th,E="onMouseLeave",d="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(y=Ah,E="onPointerLeave",d="onPointerEnter",x="pointer"),m=g==null?h:Kr(g),v=_==null?h:Kr(_),h=new y(E,x+"leave",g,n,f),h.target=m,h.relatedTarget=v,E=null,cr(f)===u&&(y=new y(d,x+"enter",_,n,f),y.target=v,y.relatedTarget=m,E=y),m=E,g&&_)t:{for(y=g,d=_,x=0,v=y;v;v=br(v))x++;for(v=0,E=d;E;E=br(E))v++;for(;0<x-v;)y=br(y),x--;for(;0<v-x;)d=br(d),v--;for(;x--;){if(y===d||d!==null&&y===d.alternate)break t;y=br(y),d=br(d)}y=null}else y=null;g!==null&&kh(p,h,g,y,!1),_!==null&&m!==null&&kh(p,m,_,y,!0)}}e:{if(h=u?Kr(u):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var w=N0;else if(Rh(h))if(Wm)w=I0;else{w=L0;var C=P0}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(w=D0);if(w&&(w=w(t,u))){Vm(p,w,n,f);break e}C&&C(t,h,u),t==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&iu(h,"number",h.value)}switch(C=u?Kr(u):window,t){case"focusin":(Rh(C)||C.contentEditable==="true")&&(Yr=C,mu=u,Js=null);break;case"focusout":Js=mu=Yr=null;break;case"mousedown":gu=!0;break;case"contextmenu":case"mouseup":case"dragend":gu=!1,Ih(p,n,f);break;case"selectionchange":if(k0)break;case"keydown":case"keyup":Ih(p,n,f)}var R;if(gd)e:{switch(t){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else qr?Hm(t,n)&&(k="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(jm&&n.locale!=="ko"&&(qr||k!=="onCompositionStart"?k==="onCompositionEnd"&&qr&&(R=Bm()):(Ri=f,fd="value"in Ri?Ri.value:Ri.textContent,qr=!0)),C=Yo(u,k),0<C.length&&(k=new wh(k,t,null,n,f),p.push({event:k,listeners:C}),R?k.data=R:(R=Gm(n),R!==null&&(k.data=R)))),(R=w0?A0(t,n):b0(t,n))&&(u=Yo(u,"onBeforeInput"),0<u.length&&(f=new wh("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:u}),f.data=R))}tg(p,e)})}function ga(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Yo(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ca(t,n),s!=null&&i.unshift(ga(t,s,r)),s=ca(t,e),s!=null&&i.push(ga(t,s,r))),t=t.return}return i}function br(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function kh(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,u=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&u!==null&&(o=u,r?(l=ca(n,s),l!=null&&a.unshift(ga(n,l,o))):r||(l=ca(n,s),l!=null&&a.push(ga(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var j0=/\r\n?/g,H0=/\u0000|\uFFFD/g;function Oh(t){return(typeof t=="string"?t:""+t).replace(j0,`
`).replace(H0,"")}function Ya(t,e,n){if(e=Oh(e),Oh(t)!==e&&n)throw Error(oe(425))}function $o(){}var vu=null,_u=null;function xu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var yu=typeof setTimeout=="function"?setTimeout:void 0,G0=typeof clearTimeout=="function"?clearTimeout:void 0,zh=typeof Promise=="function"?Promise:void 0,V0=typeof queueMicrotask=="function"?queueMicrotask:typeof zh<"u"?function(t){return zh.resolve(null).then(t).catch(W0)}:yu;function W0(t){setTimeout(function(){throw t})}function lc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ha(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ha(e)}function ki(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Bh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Cs=Math.random().toString(36).slice(2),Xn="__reactFiber$"+Cs,va="__reactProps$"+Cs,hi="__reactContainer$"+Cs,Su="__reactEvents$"+Cs,X0="__reactListeners$"+Cs,q0="__reactHandles$"+Cs;function cr(t){var e=t[Xn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[hi]||n[Xn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Bh(t);t!==null;){if(n=t[Xn])return n;t=Bh(t)}return e}t=n,n=t.parentNode}return null}function Na(t){return t=t[Xn]||t[hi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Kr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(oe(33))}function wl(t){return t[va]||null}var Mu=[],Zr=-1;function $i(t){return{current:t}}function ot(t){0>Zr||(t.current=Mu[Zr],Mu[Zr]=null,Zr--)}function rt(t,e){Zr++,Mu[Zr]=t.current,t.current=e}var Xi={},jt=$i(Xi),en=$i(!1),_r=Xi;function ms(t,e){var n=t.type.contextTypes;if(!n)return Xi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function tn(t){return t=t.childContextTypes,t!=null}function Ko(){ot(en),ot(jt)}function jh(t,e,n){if(jt.current!==Xi)throw Error(oe(168));rt(jt,e),rt(en,n)}function ig(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(oe(108,P_(t)||"Unknown",r));return ht({},n,i)}function Zo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Xi,_r=jt.current,rt(jt,t),rt(en,en.current),!0}function Hh(t,e,n){var i=t.stateNode;if(!i)throw Error(oe(169));n?(t=ig(t,e,_r),i.__reactInternalMemoizedMergedChildContext=t,ot(en),ot(jt),rt(jt,t)):ot(en),rt(en,n)}var ri=null,Al=!1,cc=!1;function rg(t){ri===null?ri=[t]:ri.push(t)}function Y0(t){Al=!0,rg(t)}function Ki(){if(!cc&&ri!==null){cc=!0;var t=0,e=Ze;try{var n=ri;for(Ze=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ri=null,Al=!1}catch(r){throw ri!==null&&(ri=ri.slice(t+1)),Rm(cd,Ki),r}finally{Ze=e,cc=!1}}return null}var Qr=[],Jr=0,Qo=null,Jo=0,yn=[],Sn=0,xr=null,ai=1,oi="";function ir(t,e){Qr[Jr++]=Jo,Qr[Jr++]=Qo,Qo=t,Jo=e}function sg(t,e,n){yn[Sn++]=ai,yn[Sn++]=oi,yn[Sn++]=xr,xr=t;var i=ai;t=oi;var r=32-On(i)-1;i&=~(1<<r),n+=1;var s=32-On(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,ai=1<<32-On(e)+r|n<<r|i,oi=s+t}else ai=1<<s|n<<r|i,oi=t}function _d(t){t.return!==null&&(ir(t,1),sg(t,1,0))}function xd(t){for(;t===Qo;)Qo=Qr[--Jr],Qr[Jr]=null,Jo=Qr[--Jr],Qr[Jr]=null;for(;t===xr;)xr=yn[--Sn],yn[Sn]=null,oi=yn[--Sn],yn[Sn]=null,ai=yn[--Sn],yn[Sn]=null}var fn=null,hn=null,lt=!1,In=null;function ag(t,e){var n=Tn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Gh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,fn=t,hn=ki(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,fn=t,hn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=xr!==null?{id:ai,overflow:oi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Tn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,fn=t,hn=null,!0):!1;default:return!1}}function Eu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Tu(t){if(lt){var e=hn;if(e){var n=e;if(!Gh(t,e)){if(Eu(t))throw Error(oe(418));e=ki(n.nextSibling);var i=fn;e&&Gh(t,e)?ag(i,n):(t.flags=t.flags&-4097|2,lt=!1,fn=t)}}else{if(Eu(t))throw Error(oe(418));t.flags=t.flags&-4097|2,lt=!1,fn=t}}}function Vh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;fn=t}function $a(t){if(t!==fn)return!1;if(!lt)return Vh(t),lt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!xu(t.type,t.memoizedProps)),e&&(e=hn)){if(Eu(t))throw og(),Error(oe(418));for(;e;)ag(t,e),e=ki(e.nextSibling)}if(Vh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(oe(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){hn=ki(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}hn=null}}else hn=fn?ki(t.stateNode.nextSibling):null;return!0}function og(){for(var t=hn;t;)t=ki(t.nextSibling)}function gs(){hn=fn=null,lt=!1}function yd(t){In===null?In=[t]:In.push(t)}var $0=gi.ReactCurrentBatchConfig;function Os(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(oe(309));var i=n.stateNode}if(!i)throw Error(oe(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(oe(284));if(!n._owner)throw Error(oe(290,t))}return t}function Ka(t,e){throw t=Object.prototype.toString.call(e),Error(oe(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Wh(t){var e=t._init;return e(t._payload)}function lg(t){function e(d,x){if(t){var v=d.deletions;v===null?(d.deletions=[x],d.flags|=16):v.push(x)}}function n(d,x){if(!t)return null;for(;x!==null;)e(d,x),x=x.sibling;return null}function i(d,x){for(d=new Map;x!==null;)x.key!==null?d.set(x.key,x):d.set(x.index,x),x=x.sibling;return d}function r(d,x){return d=ji(d,x),d.index=0,d.sibling=null,d}function s(d,x,v){return d.index=v,t?(v=d.alternate,v!==null?(v=v.index,v<x?(d.flags|=2,x):v):(d.flags|=2,x)):(d.flags|=1048576,x)}function a(d){return t&&d.alternate===null&&(d.flags|=2),d}function o(d,x,v,E){return x===null||x.tag!==6?(x=gc(v,d.mode,E),x.return=d,x):(x=r(x,v),x.return=d,x)}function l(d,x,v,E){var w=v.type;return w===Xr?f(d,x,v.props.children,E,v.key):x!==null&&(x.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===wi&&Wh(w)===x.type)?(E=r(x,v.props),E.ref=Os(d,x,v),E.return=d,E):(E=zo(v.type,v.key,v.props,null,d.mode,E),E.ref=Os(d,x,v),E.return=d,E)}function u(d,x,v,E){return x===null||x.tag!==4||x.stateNode.containerInfo!==v.containerInfo||x.stateNode.implementation!==v.implementation?(x=vc(v,d.mode,E),x.return=d,x):(x=r(x,v.children||[]),x.return=d,x)}function f(d,x,v,E,w){return x===null||x.tag!==7?(x=fr(v,d.mode,E,w),x.return=d,x):(x=r(x,v),x.return=d,x)}function p(d,x,v){if(typeof x=="string"&&x!==""||typeof x=="number")return x=gc(""+x,d.mode,v),x.return=d,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case za:return v=zo(x.type,x.key,x.props,null,d.mode,v),v.ref=Os(d,null,x),v.return=d,v;case Wr:return x=vc(x,d.mode,v),x.return=d,x;case wi:var E=x._init;return p(d,E(x._payload),v)}if(Xs(x)||Ds(x))return x=fr(x,d.mode,v,null),x.return=d,x;Ka(d,x)}return null}function h(d,x,v,E){var w=x!==null?x.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return w!==null?null:o(d,x,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case za:return v.key===w?l(d,x,v,E):null;case Wr:return v.key===w?u(d,x,v,E):null;case wi:return w=v._init,h(d,x,w(v._payload),E)}if(Xs(v)||Ds(v))return w!==null?null:f(d,x,v,E,null);Ka(d,v)}return null}function g(d,x,v,E,w){if(typeof E=="string"&&E!==""||typeof E=="number")return d=d.get(v)||null,o(x,d,""+E,w);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case za:return d=d.get(E.key===null?v:E.key)||null,l(x,d,E,w);case Wr:return d=d.get(E.key===null?v:E.key)||null,u(x,d,E,w);case wi:var C=E._init;return g(d,x,v,C(E._payload),w)}if(Xs(E)||Ds(E))return d=d.get(v)||null,f(x,d,E,w,null);Ka(x,E)}return null}function _(d,x,v,E){for(var w=null,C=null,R=x,k=x=0,S=null;R!==null&&k<v.length;k++){R.index>k?(S=R,R=null):S=R.sibling;var M=h(d,R,v[k],E);if(M===null){R===null&&(R=S);break}t&&R&&M.alternate===null&&e(d,R),x=s(M,x,k),C===null?w=M:C.sibling=M,C=M,R=S}if(k===v.length)return n(d,R),lt&&ir(d,k),w;if(R===null){for(;k<v.length;k++)R=p(d,v[k],E),R!==null&&(x=s(R,x,k),C===null?w=R:C.sibling=R,C=R);return lt&&ir(d,k),w}for(R=i(d,R);k<v.length;k++)S=g(R,d,k,v[k],E),S!==null&&(t&&S.alternate!==null&&R.delete(S.key===null?k:S.key),x=s(S,x,k),C===null?w=S:C.sibling=S,C=S);return t&&R.forEach(function(I){return e(d,I)}),lt&&ir(d,k),w}function y(d,x,v,E){var w=Ds(v);if(typeof w!="function")throw Error(oe(150));if(v=w.call(v),v==null)throw Error(oe(151));for(var C=w=null,R=x,k=x=0,S=null,M=v.next();R!==null&&!M.done;k++,M=v.next()){R.index>k?(S=R,R=null):S=R.sibling;var I=h(d,R,M.value,E);if(I===null){R===null&&(R=S);break}t&&R&&I.alternate===null&&e(d,R),x=s(I,x,k),C===null?w=I:C.sibling=I,C=I,R=S}if(M.done)return n(d,R),lt&&ir(d,k),w;if(R===null){for(;!M.done;k++,M=v.next())M=p(d,M.value,E),M!==null&&(x=s(M,x,k),C===null?w=M:C.sibling=M,C=M);return lt&&ir(d,k),w}for(R=i(d,R);!M.done;k++,M=v.next())M=g(R,d,k,M.value,E),M!==null&&(t&&M.alternate!==null&&R.delete(M.key===null?k:M.key),x=s(M,x,k),C===null?w=M:C.sibling=M,C=M);return t&&R.forEach(function(H){return e(d,H)}),lt&&ir(d,k),w}function m(d,x,v,E){if(typeof v=="object"&&v!==null&&v.type===Xr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case za:e:{for(var w=v.key,C=x;C!==null;){if(C.key===w){if(w=v.type,w===Xr){if(C.tag===7){n(d,C.sibling),x=r(C,v.props.children),x.return=d,d=x;break e}}else if(C.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===wi&&Wh(w)===C.type){n(d,C.sibling),x=r(C,v.props),x.ref=Os(d,C,v),x.return=d,d=x;break e}n(d,C);break}else e(d,C);C=C.sibling}v.type===Xr?(x=fr(v.props.children,d.mode,E,v.key),x.return=d,d=x):(E=zo(v.type,v.key,v.props,null,d.mode,E),E.ref=Os(d,x,v),E.return=d,d=E)}return a(d);case Wr:e:{for(C=v.key;x!==null;){if(x.key===C)if(x.tag===4&&x.stateNode.containerInfo===v.containerInfo&&x.stateNode.implementation===v.implementation){n(d,x.sibling),x=r(x,v.children||[]),x.return=d,d=x;break e}else{n(d,x);break}else e(d,x);x=x.sibling}x=vc(v,d.mode,E),x.return=d,d=x}return a(d);case wi:return C=v._init,m(d,x,C(v._payload),E)}if(Xs(v))return _(d,x,v,E);if(Ds(v))return y(d,x,v,E);Ka(d,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,x!==null&&x.tag===6?(n(d,x.sibling),x=r(x,v),x.return=d,d=x):(n(d,x),x=gc(v,d.mode,E),x.return=d,d=x),a(d)):n(d,x)}return m}var vs=lg(!0),cg=lg(!1),el=$i(null),tl=null,es=null,Sd=null;function Md(){Sd=es=tl=null}function Ed(t){var e=el.current;ot(el),t._currentValue=e}function wu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function cs(t,e){tl=t,Sd=es=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Jt=!0),t.firstContext=null)}function An(t){var e=t._currentValue;if(Sd!==t)if(t={context:t,memoizedValue:e,next:null},es===null){if(tl===null)throw Error(oe(308));es=t,tl.dependencies={lanes:0,firstContext:t}}else es=es.next=t;return e}var ur=null;function Td(t){ur===null?ur=[t]:ur.push(t)}function ug(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Td(e)):(n.next=r.next,r.next=n),e.interleaved=n,fi(t,i)}function fi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ai=!1;function wd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function dg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ci(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Oi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,$e&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,fi(t,n)}return r=i.interleaved,r===null?(e.next=e,Td(i)):(e.next=r.next,r.next=e),i.interleaved=e,fi(t,n)}function Do(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,ud(t,n)}}function Xh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function nl(t,e,n,i){var r=t.updateQueue;Ai=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,u=l.next;l.next=null,a===null?s=u:a.next=u,a=l;var f=t.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==a&&(o===null?f.firstBaseUpdate=u:o.next=u,f.lastBaseUpdate=l))}if(s!==null){var p=r.baseState;a=0,f=u=l=null,o=s;do{var h=o.lane,g=o.eventTime;if((i&h)===h){f!==null&&(f=f.next={eventTime:g,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var _=t,y=o;switch(h=e,g=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){p=_.call(g,p,h);break e}p=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,h=typeof _=="function"?_.call(g,p,h):_,h==null)break e;p=ht({},p,h);break e;case 2:Ai=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[o]:h.push(o))}else g={eventTime:g,lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(u=f=g,l=p):f=f.next=g,a|=h;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;h=o,o=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(f===null&&(l=p),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Sr|=a,t.lanes=a,t.memoizedState=p}}function qh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(oe(191,r));r.call(i)}}}var Pa={},Yn=$i(Pa),_a=$i(Pa),xa=$i(Pa);function dr(t){if(t===Pa)throw Error(oe(174));return t}function Ad(t,e){switch(rt(xa,e),rt(_a,t),rt(Yn,Pa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:su(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=su(e,t)}ot(Yn),rt(Yn,e)}function _s(){ot(Yn),ot(_a),ot(xa)}function hg(t){dr(xa.current);var e=dr(Yn.current),n=su(e,t.type);e!==n&&(rt(_a,t),rt(Yn,n))}function bd(t){_a.current===t&&(ot(Yn),ot(_a))}var ut=$i(0);function il(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var uc=[];function Cd(){for(var t=0;t<uc.length;t++)uc[t]._workInProgressVersionPrimary=null;uc.length=0}var Io=gi.ReactCurrentDispatcher,dc=gi.ReactCurrentBatchConfig,yr=0,dt=null,yt=null,bt=null,rl=!1,ea=!1,ya=0,K0=0;function Ft(){throw Error(oe(321))}function Rd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!jn(t[n],e[n]))return!1;return!0}function Nd(t,e,n,i,r,s){if(yr=s,dt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Io.current=t===null||t.memoizedState===null?ex:tx,t=n(i,r),ea){s=0;do{if(ea=!1,ya=0,25<=s)throw Error(oe(301));s+=1,bt=yt=null,e.updateQueue=null,Io.current=nx,t=n(i,r)}while(ea)}if(Io.current=sl,e=yt!==null&&yt.next!==null,yr=0,bt=yt=dt=null,rl=!1,e)throw Error(oe(300));return t}function Pd(){var t=ya!==0;return ya=0,t}function Vn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return bt===null?dt.memoizedState=bt=t:bt=bt.next=t,bt}function bn(){if(yt===null){var t=dt.alternate;t=t!==null?t.memoizedState:null}else t=yt.next;var e=bt===null?dt.memoizedState:bt.next;if(e!==null)bt=e,yt=t;else{if(t===null)throw Error(oe(310));yt=t,t={memoizedState:yt.memoizedState,baseState:yt.baseState,baseQueue:yt.baseQueue,queue:yt.queue,next:null},bt===null?dt.memoizedState=bt=t:bt=bt.next=t}return bt}function Sa(t,e){return typeof e=="function"?e(t):e}function hc(t){var e=bn(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=yt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,u=s;do{var f=u.lane;if((yr&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var p={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(o=l=p,a=i):l=l.next=p,dt.lanes|=f,Sr|=f}u=u.next}while(u!==null&&u!==s);l===null?a=i:l.next=o,jn(i,e.memoizedState)||(Jt=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,dt.lanes|=s,Sr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function fc(t){var e=bn(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);jn(s,e.memoizedState)||(Jt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function fg(){}function pg(t,e){var n=dt,i=bn(),r=e(),s=!jn(i.memoizedState,r);if(s&&(i.memoizedState=r,Jt=!0),i=i.queue,Ld(vg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||bt!==null&&bt.memoizedState.tag&1){if(n.flags|=2048,Ma(9,gg.bind(null,n,i,r,e),void 0,null),Ct===null)throw Error(oe(349));yr&30||mg(n,e,r)}return r}function mg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=dt.updateQueue,e===null?(e={lastEffect:null,stores:null},dt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function gg(t,e,n,i){e.value=n,e.getSnapshot=i,_g(e)&&xg(t)}function vg(t,e,n){return n(function(){_g(e)&&xg(t)})}function _g(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!jn(t,n)}catch{return!0}}function xg(t){var e=fi(t,1);e!==null&&zn(e,t,1,-1)}function Yh(t){var e=Vn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:t},e.queue=t,t=t.dispatch=J0.bind(null,dt,t),[e.memoizedState,t]}function Ma(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=dt.updateQueue,e===null?(e={lastEffect:null,stores:null},dt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function yg(){return bn().memoizedState}function Uo(t,e,n,i){var r=Vn();dt.flags|=t,r.memoizedState=Ma(1|e,n,void 0,i===void 0?null:i)}function bl(t,e,n,i){var r=bn();i=i===void 0?null:i;var s=void 0;if(yt!==null){var a=yt.memoizedState;if(s=a.destroy,i!==null&&Rd(i,a.deps)){r.memoizedState=Ma(e,n,s,i);return}}dt.flags|=t,r.memoizedState=Ma(1|e,n,s,i)}function $h(t,e){return Uo(8390656,8,t,e)}function Ld(t,e){return bl(2048,8,t,e)}function Sg(t,e){return bl(4,2,t,e)}function Mg(t,e){return bl(4,4,t,e)}function Eg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Tg(t,e,n){return n=n!=null?n.concat([t]):null,bl(4,4,Eg.bind(null,e,t),n)}function Dd(){}function wg(t,e){var n=bn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Rd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Ag(t,e){var n=bn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Rd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function bg(t,e,n){return yr&21?(jn(n,e)||(n=Lm(),dt.lanes|=n,Sr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Jt=!0),t.memoizedState=n)}function Z0(t,e){var n=Ze;Ze=n!==0&&4>n?n:4,t(!0);var i=dc.transition;dc.transition={};try{t(!1),e()}finally{Ze=n,dc.transition=i}}function Cg(){return bn().memoizedState}function Q0(t,e,n){var i=Bi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Rg(t))Ng(e,n);else if(n=ug(t,e,n,i),n!==null){var r=$t();zn(n,t,i,r),Pg(n,e,i)}}function J0(t,e,n){var i=Bi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Rg(t))Ng(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,jn(o,a)){var l=e.interleaved;l===null?(r.next=r,Td(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=ug(t,e,r,i),n!==null&&(r=$t(),zn(n,t,i,r),Pg(n,e,i))}}function Rg(t){var e=t.alternate;return t===dt||e!==null&&e===dt}function Ng(t,e){ea=rl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Pg(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,ud(t,n)}}var sl={readContext:An,useCallback:Ft,useContext:Ft,useEffect:Ft,useImperativeHandle:Ft,useInsertionEffect:Ft,useLayoutEffect:Ft,useMemo:Ft,useReducer:Ft,useRef:Ft,useState:Ft,useDebugValue:Ft,useDeferredValue:Ft,useTransition:Ft,useMutableSource:Ft,useSyncExternalStore:Ft,useId:Ft,unstable_isNewReconciler:!1},ex={readContext:An,useCallback:function(t,e){return Vn().memoizedState=[t,e===void 0?null:e],t},useContext:An,useEffect:$h,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Uo(4194308,4,Eg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Uo(4194308,4,t,e)},useInsertionEffect:function(t,e){return Uo(4,2,t,e)},useMemo:function(t,e){var n=Vn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Vn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Q0.bind(null,dt,t),[i.memoizedState,t]},useRef:function(t){var e=Vn();return t={current:t},e.memoizedState=t},useState:Yh,useDebugValue:Dd,useDeferredValue:function(t){return Vn().memoizedState=t},useTransition:function(){var t=Yh(!1),e=t[0];return t=Z0.bind(null,t[1]),Vn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=dt,r=Vn();if(lt){if(n===void 0)throw Error(oe(407));n=n()}else{if(n=e(),Ct===null)throw Error(oe(349));yr&30||mg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,$h(vg.bind(null,i,s,t),[t]),i.flags|=2048,Ma(9,gg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Vn(),e=Ct.identifierPrefix;if(lt){var n=oi,i=ai;n=(i&~(1<<32-On(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ya++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=K0++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},tx={readContext:An,useCallback:wg,useContext:An,useEffect:Ld,useImperativeHandle:Tg,useInsertionEffect:Sg,useLayoutEffect:Mg,useMemo:Ag,useReducer:hc,useRef:yg,useState:function(){return hc(Sa)},useDebugValue:Dd,useDeferredValue:function(t){var e=bn();return bg(e,yt.memoizedState,t)},useTransition:function(){var t=hc(Sa)[0],e=bn().memoizedState;return[t,e]},useMutableSource:fg,useSyncExternalStore:pg,useId:Cg,unstable_isNewReconciler:!1},nx={readContext:An,useCallback:wg,useContext:An,useEffect:Ld,useImperativeHandle:Tg,useInsertionEffect:Sg,useLayoutEffect:Mg,useMemo:Ag,useReducer:fc,useRef:yg,useState:function(){return fc(Sa)},useDebugValue:Dd,useDeferredValue:function(t){var e=bn();return yt===null?e.memoizedState=t:bg(e,yt.memoizedState,t)},useTransition:function(){var t=fc(Sa)[0],e=bn().memoizedState;return[t,e]},useMutableSource:fg,useSyncExternalStore:pg,useId:Cg,unstable_isNewReconciler:!1};function Ln(t,e){if(t&&t.defaultProps){e=ht({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Au(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ht({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Cl={isMounted:function(t){return(t=t._reactInternals)?Ar(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=$t(),r=Bi(t),s=ci(i,r);s.payload=e,n!=null&&(s.callback=n),e=Oi(t,s,r),e!==null&&(zn(e,t,r,i),Do(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=$t(),r=Bi(t),s=ci(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Oi(t,s,r),e!==null&&(zn(e,t,r,i),Do(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=$t(),i=Bi(t),r=ci(n,i);r.tag=2,e!=null&&(r.callback=e),e=Oi(t,r,i),e!==null&&(zn(e,t,i,n),Do(e,t,i))}};function Kh(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!pa(n,i)||!pa(r,s):!0}function Lg(t,e,n){var i=!1,r=Xi,s=e.contextType;return typeof s=="object"&&s!==null?s=An(s):(r=tn(e)?_r:jt.current,i=e.contextTypes,s=(i=i!=null)?ms(t,r):Xi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Cl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Zh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Cl.enqueueReplaceState(e,e.state,null)}function bu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},wd(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=An(s):(s=tn(e)?_r:jt.current,r.context=ms(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Au(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Cl.enqueueReplaceState(r,r.state,null),nl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function xs(t,e){try{var n="",i=e;do n+=N_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function pc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Cu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var ix=typeof WeakMap=="function"?WeakMap:Map;function Dg(t,e,n){n=ci(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){ol||(ol=!0,Ou=i),Cu(t,e)},n}function Ig(t,e,n){n=ci(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Cu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Cu(t,e),typeof i!="function"&&(zi===null?zi=new Set([this]):zi.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Qh(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new ix;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=vx.bind(null,t,e,n),e.then(t,t))}function Jh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function ef(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ci(-1,1),e.tag=2,Oi(n,e,1))),n.lanes|=1),t)}var rx=gi.ReactCurrentOwner,Jt=!1;function Xt(t,e,n,i){e.child=t===null?cg(e,null,n,i):vs(e,t.child,n,i)}function tf(t,e,n,i,r){n=n.render;var s=e.ref;return cs(e,r),i=Nd(t,e,n,i,s,r),n=Pd(),t!==null&&!Jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,pi(t,e,r)):(lt&&n&&_d(e),e.flags|=1,Xt(t,e,i,r),e.child)}function nf(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!jd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Ug(t,e,s,i,r)):(t=zo(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:pa,n(a,i)&&t.ref===e.ref)return pi(t,e,r)}return e.flags|=1,t=ji(s,i),t.ref=e.ref,t.return=e,e.child=t}function Ug(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(pa(s,i)&&t.ref===e.ref)if(Jt=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Jt=!0);else return e.lanes=t.lanes,pi(t,e,r)}return Ru(t,e,n,i,r)}function Fg(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},rt(ns,cn),cn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,rt(ns,cn),cn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,rt(ns,cn),cn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,rt(ns,cn),cn|=i;return Xt(t,e,r,n),e.child}function kg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ru(t,e,n,i,r){var s=tn(n)?_r:jt.current;return s=ms(e,s),cs(e,r),n=Nd(t,e,n,i,s,r),i=Pd(),t!==null&&!Jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,pi(t,e,r)):(lt&&i&&_d(e),e.flags|=1,Xt(t,e,n,r),e.child)}function rf(t,e,n,i,r){if(tn(n)){var s=!0;Zo(e)}else s=!1;if(cs(e,r),e.stateNode===null)Fo(t,e),Lg(e,n,i),bu(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=An(u):(u=tn(n)?_r:jt.current,u=ms(e,u));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==u)&&Zh(e,a,i,u),Ai=!1;var h=e.memoizedState;a.state=h,nl(e,i,a,r),l=e.memoizedState,o!==i||h!==l||en.current||Ai?(typeof f=="function"&&(Au(e,n,f,i),l=e.memoizedState),(o=Ai||Kh(e,n,o,i,h,l,u))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=u,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,dg(t,e),o=e.memoizedProps,u=e.type===e.elementType?o:Ln(e.type,o),a.props=u,p=e.pendingProps,h=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=An(l):(l=tn(n)?_r:jt.current,l=ms(e,l));var g=n.getDerivedStateFromProps;(f=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==p||h!==l)&&Zh(e,a,i,l),Ai=!1,h=e.memoizedState,a.state=h,nl(e,i,a,r);var _=e.memoizedState;o!==p||h!==_||en.current||Ai?(typeof g=="function"&&(Au(e,n,g,i),_=e.memoizedState),(u=Ai||Kh(e,n,u,i,h,_,l)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,_,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,_,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),a.props=i,a.state=_,a.context=l,i=u):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Nu(t,e,n,i,s,r)}function Nu(t,e,n,i,r,s){kg(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Hh(e,n,!1),pi(t,e,s);i=e.stateNode,rx.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=vs(e,t.child,null,s),e.child=vs(e,null,o,s)):Xt(t,e,o,s),e.memoizedState=i.state,r&&Hh(e,n,!0),e.child}function Og(t){var e=t.stateNode;e.pendingContext?jh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&jh(t,e.context,!1),Ad(t,e.containerInfo)}function sf(t,e,n,i,r){return gs(),yd(r),e.flags|=256,Xt(t,e,n,i),e.child}var Pu={dehydrated:null,treeContext:null,retryLane:0};function Lu(t){return{baseLanes:t,cachePool:null,transitions:null}}function zg(t,e,n){var i=e.pendingProps,r=ut.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),rt(ut,r&1),t===null)return Tu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Pl(a,i,0,null),t=fr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Lu(n),e.memoizedState=Pu,t):Id(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return sx(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=ji(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=ji(o,s):(s=fr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?Lu(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Pu,i}return s=t.child,t=s.sibling,i=ji(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Id(t,e){return e=Pl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Za(t,e,n,i){return i!==null&&yd(i),vs(e,t.child,null,n),t=Id(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function sx(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=pc(Error(oe(422))),Za(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Pl({mode:"visible",children:i.children},r,0,null),s=fr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&vs(e,t.child,null,a),e.child.memoizedState=Lu(a),e.memoizedState=Pu,s);if(!(e.mode&1))return Za(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(oe(419)),i=pc(s,i,void 0),Za(t,e,a,i)}if(o=(a&t.childLanes)!==0,Jt||o){if(i=Ct,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,fi(t,r),zn(i,t,r,-1))}return Bd(),i=pc(Error(oe(421))),Za(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=_x.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,hn=ki(r.nextSibling),fn=e,lt=!0,In=null,t!==null&&(yn[Sn++]=ai,yn[Sn++]=oi,yn[Sn++]=xr,ai=t.id,oi=t.overflow,xr=e),e=Id(e,i.children),e.flags|=4096,e)}function af(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),wu(t.return,e,n)}function mc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Bg(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Xt(t,e,i.children,n),i=ut.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&af(t,n,e);else if(t.tag===19)af(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(rt(ut,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&il(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),mc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&il(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}mc(e,!0,n,null,s);break;case"together":mc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Fo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function pi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Sr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(oe(153));if(e.child!==null){for(t=e.child,n=ji(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ji(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function ax(t,e,n){switch(e.tag){case 3:Og(e),gs();break;case 5:hg(e);break;case 1:tn(e.type)&&Zo(e);break;case 4:Ad(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;rt(el,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(rt(ut,ut.current&1),e.flags|=128,null):n&e.child.childLanes?zg(t,e,n):(rt(ut,ut.current&1),t=pi(t,e,n),t!==null?t.sibling:null);rt(ut,ut.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Bg(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),rt(ut,ut.current),i)break;return null;case 22:case 23:return e.lanes=0,Fg(t,e,n)}return pi(t,e,n)}var jg,Du,Hg,Gg;jg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Du=function(){};Hg=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,dr(Yn.current);var s=null;switch(n){case"input":r=tu(t,r),i=tu(t,i),s=[];break;case"select":r=ht({},r,{value:void 0}),i=ht({},i,{value:void 0}),s=[];break;case"textarea":r=ru(t,r),i=ru(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=$o)}au(n,i);var a;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var o=r[u];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(oa.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(o=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==o&&(l!=null||o!=null))if(u==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(oa.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&st("scroll",t),s||o===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Gg=function(t,e,n,i){n!==i&&(e.flags|=4)};function zs(t,e){if(!lt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function kt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function ox(t,e,n){var i=e.pendingProps;switch(xd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return kt(e),null;case 1:return tn(e.type)&&Ko(),kt(e),null;case 3:return i=e.stateNode,_s(),ot(en),ot(jt),Cd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&($a(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,In!==null&&(ju(In),In=null))),Du(t,e),kt(e),null;case 5:bd(e);var r=dr(xa.current);if(n=e.type,t!==null&&e.stateNode!=null)Hg(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(oe(166));return kt(e),null}if(t=dr(Yn.current),$a(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Xn]=e,i[va]=s,t=(e.mode&1)!==0,n){case"dialog":st("cancel",i),st("close",i);break;case"iframe":case"object":case"embed":st("load",i);break;case"video":case"audio":for(r=0;r<Ys.length;r++)st(Ys[r],i);break;case"source":st("error",i);break;case"img":case"image":case"link":st("error",i),st("load",i);break;case"details":st("toggle",i);break;case"input":ph(i,s),st("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},st("invalid",i);break;case"textarea":gh(i,s),st("invalid",i)}au(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&Ya(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&Ya(i.textContent,o,t),r=["children",""+o]):oa.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&st("scroll",i)}switch(n){case"input":Ba(i),mh(i,s,!0);break;case"textarea":Ba(i),vh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=$o)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=vm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[Xn]=e,t[va]=i,jg(t,e,!1,!1),e.stateNode=t;e:{switch(a=ou(n,i),n){case"dialog":st("cancel",t),st("close",t),r=i;break;case"iframe":case"object":case"embed":st("load",t),r=i;break;case"video":case"audio":for(r=0;r<Ys.length;r++)st(Ys[r],t);r=i;break;case"source":st("error",t),r=i;break;case"img":case"image":case"link":st("error",t),st("load",t),r=i;break;case"details":st("toggle",t),r=i;break;case"input":ph(t,i),r=tu(t,i),st("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ht({},i,{value:void 0}),st("invalid",t);break;case"textarea":gh(t,i),r=ru(t,i),st("invalid",t);break;default:r=i}au(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?ym(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&_m(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&la(t,l):typeof l=="number"&&la(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(oa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&st("scroll",t):l!=null&&rd(t,s,l,a))}switch(n){case"input":Ba(t),mh(t,i,!1);break;case"textarea":Ba(t),vh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Wi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ss(t,!!i.multiple,s,!1):i.defaultValue!=null&&ss(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=$o)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return kt(e),null;case 6:if(t&&e.stateNode!=null)Gg(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(oe(166));if(n=dr(xa.current),dr(Yn.current),$a(e)){if(i=e.stateNode,n=e.memoizedProps,i[Xn]=e,(s=i.nodeValue!==n)&&(t=fn,t!==null))switch(t.tag){case 3:Ya(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ya(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Xn]=e,e.stateNode=i}return kt(e),null;case 13:if(ot(ut),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(lt&&hn!==null&&e.mode&1&&!(e.flags&128))og(),gs(),e.flags|=98560,s=!1;else if(s=$a(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(oe(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(oe(317));s[Xn]=e}else gs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;kt(e),s=!1}else In!==null&&(ju(In),In=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ut.current&1?St===0&&(St=3):Bd())),e.updateQueue!==null&&(e.flags|=4),kt(e),null);case 4:return _s(),Du(t,e),t===null&&ma(e.stateNode.containerInfo),kt(e),null;case 10:return Ed(e.type._context),kt(e),null;case 17:return tn(e.type)&&Ko(),kt(e),null;case 19:if(ot(ut),s=e.memoizedState,s===null)return kt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)zs(s,!1);else{if(St!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=il(t),a!==null){for(e.flags|=128,zs(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return rt(ut,ut.current&1|2),e.child}t=t.sibling}s.tail!==null&&vt()>ys&&(e.flags|=128,i=!0,zs(s,!1),e.lanes=4194304)}else{if(!i)if(t=il(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),zs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!lt)return kt(e),null}else 2*vt()-s.renderingStartTime>ys&&n!==1073741824&&(e.flags|=128,i=!0,zs(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=vt(),e.sibling=null,n=ut.current,rt(ut,i?n&1|2:n&1),e):(kt(e),null);case 22:case 23:return zd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?cn&1073741824&&(kt(e),e.subtreeFlags&6&&(e.flags|=8192)):kt(e),null;case 24:return null;case 25:return null}throw Error(oe(156,e.tag))}function lx(t,e){switch(xd(e),e.tag){case 1:return tn(e.type)&&Ko(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return _s(),ot(en),ot(jt),Cd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return bd(e),null;case 13:if(ot(ut),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(oe(340));gs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ot(ut),null;case 4:return _s(),null;case 10:return Ed(e.type._context),null;case 22:case 23:return zd(),null;case 24:return null;default:return null}}var Qa=!1,Bt=!1,cx=typeof WeakSet=="function"?WeakSet:Set,Se=null;function ts(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){mt(t,e,i)}else n.current=null}function Iu(t,e,n){try{n()}catch(i){mt(t,e,i)}}var of=!1;function ux(t,e){if(vu=Xo,t=Ym(),vd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,u=0,f=0,p=t,h=null;t:for(;;){for(var g;p!==n||r!==0&&p.nodeType!==3||(o=a+r),p!==s||i!==0&&p.nodeType!==3||(l=a+i),p.nodeType===3&&(a+=p.nodeValue.length),(g=p.firstChild)!==null;)h=p,p=g;for(;;){if(p===t)break t;if(h===n&&++u===r&&(o=a),h===s&&++f===i&&(l=a),(g=p.nextSibling)!==null)break;p=h,h=p.parentNode}p=g}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(_u={focusedElem:t,selectionRange:n},Xo=!1,Se=e;Se!==null;)if(e=Se,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Se=t;else for(;Se!==null;){e=Se;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,m=_.memoizedState,d=e.stateNode,x=d.getSnapshotBeforeUpdate(e.elementType===e.type?y:Ln(e.type,y),m);d.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(oe(163))}}catch(E){mt(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,Se=t;break}Se=e.return}return _=of,of=!1,_}function ta(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Iu(e,n,s)}r=r.next}while(r!==i)}}function Rl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Uu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Vg(t){var e=t.alternate;e!==null&&(t.alternate=null,Vg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Xn],delete e[va],delete e[Su],delete e[X0],delete e[q0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Wg(t){return t.tag===5||t.tag===3||t.tag===4}function lf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Wg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Fu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=$o));else if(i!==4&&(t=t.child,t!==null))for(Fu(t,e,n),t=t.sibling;t!==null;)Fu(t,e,n),t=t.sibling}function ku(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(ku(t,e,n),t=t.sibling;t!==null;)ku(t,e,n),t=t.sibling}var Nt=null,Dn=!1;function vi(t,e,n){for(n=n.child;n!==null;)Xg(t,e,n),n=n.sibling}function Xg(t,e,n){if(qn&&typeof qn.onCommitFiberUnmount=="function")try{qn.onCommitFiberUnmount(Sl,n)}catch{}switch(n.tag){case 5:Bt||ts(n,e);case 6:var i=Nt,r=Dn;Nt=null,vi(t,e,n),Nt=i,Dn=r,Nt!==null&&(Dn?(t=Nt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Nt.removeChild(n.stateNode));break;case 18:Nt!==null&&(Dn?(t=Nt,n=n.stateNode,t.nodeType===8?lc(t.parentNode,n):t.nodeType===1&&lc(t,n),ha(t)):lc(Nt,n.stateNode));break;case 4:i=Nt,r=Dn,Nt=n.stateNode.containerInfo,Dn=!0,vi(t,e,n),Nt=i,Dn=r;break;case 0:case 11:case 14:case 15:if(!Bt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Iu(n,e,a),r=r.next}while(r!==i)}vi(t,e,n);break;case 1:if(!Bt&&(ts(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){mt(n,e,o)}vi(t,e,n);break;case 21:vi(t,e,n);break;case 22:n.mode&1?(Bt=(i=Bt)||n.memoizedState!==null,vi(t,e,n),Bt=i):vi(t,e,n);break;default:vi(t,e,n)}}function cf(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new cx),e.forEach(function(i){var r=xx.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Cn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Nt=o.stateNode,Dn=!1;break e;case 3:Nt=o.stateNode.containerInfo,Dn=!0;break e;case 4:Nt=o.stateNode.containerInfo,Dn=!0;break e}o=o.return}if(Nt===null)throw Error(oe(160));Xg(s,a,r),Nt=null,Dn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){mt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)qg(e,t),e=e.sibling}function qg(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Cn(e,t),Gn(t),i&4){try{ta(3,t,t.return),Rl(3,t)}catch(y){mt(t,t.return,y)}try{ta(5,t,t.return)}catch(y){mt(t,t.return,y)}}break;case 1:Cn(e,t),Gn(t),i&512&&n!==null&&ts(n,n.return);break;case 5:if(Cn(e,t),Gn(t),i&512&&n!==null&&ts(n,n.return),t.flags&32){var r=t.stateNode;try{la(r,"")}catch(y){mt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&mm(r,s),ou(o,a);var u=ou(o,s);for(a=0;a<l.length;a+=2){var f=l[a],p=l[a+1];f==="style"?ym(r,p):f==="dangerouslySetInnerHTML"?_m(r,p):f==="children"?la(r,p):rd(r,f,p,u)}switch(o){case"input":nu(r,s);break;case"textarea":gm(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?ss(r,!!s.multiple,g,!1):h!==!!s.multiple&&(s.defaultValue!=null?ss(r,!!s.multiple,s.defaultValue,!0):ss(r,!!s.multiple,s.multiple?[]:"",!1))}r[va]=s}catch(y){mt(t,t.return,y)}}break;case 6:if(Cn(e,t),Gn(t),i&4){if(t.stateNode===null)throw Error(oe(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){mt(t,t.return,y)}}break;case 3:if(Cn(e,t),Gn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ha(e.containerInfo)}catch(y){mt(t,t.return,y)}break;case 4:Cn(e,t),Gn(t);break;case 13:Cn(e,t),Gn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(kd=vt())),i&4&&cf(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Bt=(u=Bt)||f,Cn(e,t),Bt=u):Cn(e,t),Gn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!f&&t.mode&1)for(Se=t,f=t.child;f!==null;){for(p=Se=f;Se!==null;){switch(h=Se,g=h.child,h.tag){case 0:case 11:case 14:case 15:ta(4,h,h.return);break;case 1:ts(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){mt(i,n,y)}}break;case 5:ts(h,h.return);break;case 22:if(h.memoizedState!==null){df(p);continue}}g!==null?(g.return=h,Se=g):df(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{r=p.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=p.stateNode,l=p.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=xm("display",a))}catch(y){mt(t,t.return,y)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(y){mt(t,t.return,y)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Cn(e,t),Gn(t),i&4&&cf(t);break;case 21:break;default:Cn(e,t),Gn(t)}}function Gn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Wg(n)){var i=n;break e}n=n.return}throw Error(oe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(la(r,""),i.flags&=-33);var s=lf(t);ku(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=lf(t);Fu(t,o,a);break;default:throw Error(oe(161))}}catch(l){mt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function dx(t,e,n){Se=t,Yg(t)}function Yg(t,e,n){for(var i=(t.mode&1)!==0;Se!==null;){var r=Se,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||Qa;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||Bt;o=Qa;var u=Bt;if(Qa=a,(Bt=l)&&!u)for(Se=r;Se!==null;)a=Se,l=a.child,a.tag===22&&a.memoizedState!==null?hf(r):l!==null?(l.return=a,Se=l):hf(r);for(;s!==null;)Se=s,Yg(s),s=s.sibling;Se=r,Qa=o,Bt=u}uf(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Se=s):uf(t)}}function uf(t){for(;Se!==null;){var e=Se;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Bt||Rl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Bt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Ln(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&qh(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}qh(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&ha(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(oe(163))}Bt||e.flags&512&&Uu(e)}catch(h){mt(e,e.return,h)}}if(e===t){Se=null;break}if(n=e.sibling,n!==null){n.return=e.return,Se=n;break}Se=e.return}}function df(t){for(;Se!==null;){var e=Se;if(e===t){Se=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Se=n;break}Se=e.return}}function hf(t){for(;Se!==null;){var e=Se;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Rl(4,e)}catch(l){mt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){mt(e,r,l)}}var s=e.return;try{Uu(e)}catch(l){mt(e,s,l)}break;case 5:var a=e.return;try{Uu(e)}catch(l){mt(e,a,l)}}}catch(l){mt(e,e.return,l)}if(e===t){Se=null;break}var o=e.sibling;if(o!==null){o.return=e.return,Se=o;break}Se=e.return}}var hx=Math.ceil,al=gi.ReactCurrentDispatcher,Ud=gi.ReactCurrentOwner,wn=gi.ReactCurrentBatchConfig,$e=0,Ct=null,xt=null,Dt=0,cn=0,ns=$i(0),St=0,Ea=null,Sr=0,Nl=0,Fd=0,na=null,Qt=null,kd=0,ys=1/0,ii=null,ol=!1,Ou=null,zi=null,Ja=!1,Ni=null,ll=0,ia=0,zu=null,ko=-1,Oo=0;function $t(){return $e&6?vt():ko!==-1?ko:ko=vt()}function Bi(t){return t.mode&1?$e&2&&Dt!==0?Dt&-Dt:$0.transition!==null?(Oo===0&&(Oo=Lm()),Oo):(t=Ze,t!==0||(t=window.event,t=t===void 0?16:zm(t.type)),t):1}function zn(t,e,n,i){if(50<ia)throw ia=0,zu=null,Error(oe(185));Ca(t,n,i),(!($e&2)||t!==Ct)&&(t===Ct&&(!($e&2)&&(Nl|=n),St===4&&Ci(t,Dt)),nn(t,i),n===1&&$e===0&&!(e.mode&1)&&(ys=vt()+500,Al&&Ki()))}function nn(t,e){var n=t.callbackNode;$_(t,e);var i=Wo(t,t===Ct?Dt:0);if(i===0)n!==null&&yh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&yh(n),e===1)t.tag===0?Y0(ff.bind(null,t)):rg(ff.bind(null,t)),V0(function(){!($e&6)&&Ki()}),n=null;else{switch(Dm(i)){case 1:n=cd;break;case 4:n=Nm;break;case 16:n=Vo;break;case 536870912:n=Pm;break;default:n=Vo}n=nv(n,$g.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function $g(t,e){if(ko=-1,Oo=0,$e&6)throw Error(oe(327));var n=t.callbackNode;if(us()&&t.callbackNode!==n)return null;var i=Wo(t,t===Ct?Dt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=cl(t,i);else{e=i;var r=$e;$e|=2;var s=Zg();(Ct!==t||Dt!==e)&&(ii=null,ys=vt()+500,hr(t,e));do try{mx();break}catch(o){Kg(t,o)}while(!0);Md(),al.current=s,$e=r,xt!==null?e=0:(Ct=null,Dt=0,e=St)}if(e!==0){if(e===2&&(r=hu(t),r!==0&&(i=r,e=Bu(t,r))),e===1)throw n=Ea,hr(t,0),Ci(t,i),nn(t,vt()),n;if(e===6)Ci(t,i);else{if(r=t.current.alternate,!(i&30)&&!fx(r)&&(e=cl(t,i),e===2&&(s=hu(t),s!==0&&(i=s,e=Bu(t,s))),e===1))throw n=Ea,hr(t,0),Ci(t,i),nn(t,vt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(oe(345));case 2:rr(t,Qt,ii);break;case 3:if(Ci(t,i),(i&130023424)===i&&(e=kd+500-vt(),10<e)){if(Wo(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){$t(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=yu(rr.bind(null,t,Qt,ii),e);break}rr(t,Qt,ii);break;case 4:if(Ci(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-On(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=vt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*hx(i/1960))-i,10<i){t.timeoutHandle=yu(rr.bind(null,t,Qt,ii),i);break}rr(t,Qt,ii);break;case 5:rr(t,Qt,ii);break;default:throw Error(oe(329))}}}return nn(t,vt()),t.callbackNode===n?$g.bind(null,t):null}function Bu(t,e){var n=na;return t.current.memoizedState.isDehydrated&&(hr(t,e).flags|=256),t=cl(t,e),t!==2&&(e=Qt,Qt=n,e!==null&&ju(e)),t}function ju(t){Qt===null?Qt=t:Qt.push.apply(Qt,t)}function fx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!jn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ci(t,e){for(e&=~Fd,e&=~Nl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-On(e),i=1<<n;t[n]=-1,e&=~i}}function ff(t){if($e&6)throw Error(oe(327));us();var e=Wo(t,0);if(!(e&1))return nn(t,vt()),null;var n=cl(t,e);if(t.tag!==0&&n===2){var i=hu(t);i!==0&&(e=i,n=Bu(t,i))}if(n===1)throw n=Ea,hr(t,0),Ci(t,e),nn(t,vt()),n;if(n===6)throw Error(oe(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,rr(t,Qt,ii),nn(t,vt()),null}function Od(t,e){var n=$e;$e|=1;try{return t(e)}finally{$e=n,$e===0&&(ys=vt()+500,Al&&Ki())}}function Mr(t){Ni!==null&&Ni.tag===0&&!($e&6)&&us();var e=$e;$e|=1;var n=wn.transition,i=Ze;try{if(wn.transition=null,Ze=1,t)return t()}finally{Ze=i,wn.transition=n,$e=e,!($e&6)&&Ki()}}function zd(){cn=ns.current,ot(ns)}function hr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,G0(n)),xt!==null)for(n=xt.return;n!==null;){var i=n;switch(xd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Ko();break;case 3:_s(),ot(en),ot(jt),Cd();break;case 5:bd(i);break;case 4:_s();break;case 13:ot(ut);break;case 19:ot(ut);break;case 10:Ed(i.type._context);break;case 22:case 23:zd()}n=n.return}if(Ct=t,xt=t=ji(t.current,null),Dt=cn=e,St=0,Ea=null,Fd=Nl=Sr=0,Qt=na=null,ur!==null){for(e=0;e<ur.length;e++)if(n=ur[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}ur=null}return t}function Kg(t,e){do{var n=xt;try{if(Md(),Io.current=sl,rl){for(var i=dt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}rl=!1}if(yr=0,bt=yt=dt=null,ea=!1,ya=0,Ud.current=null,n===null||n.return===null){St=1,Ea=e,xt=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Dt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=o,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var g=Jh(a);if(g!==null){g.flags&=-257,ef(g,a,o,s,e),g.mode&1&&Qh(s,u,e),e=g,l=u;var _=e.updateQueue;if(_===null){var y=new Set;y.add(l),e.updateQueue=y}else _.add(l);break e}else{if(!(e&1)){Qh(s,u,e),Bd();break e}l=Error(oe(426))}}else if(lt&&o.mode&1){var m=Jh(a);if(m!==null){!(m.flags&65536)&&(m.flags|=256),ef(m,a,o,s,e),yd(xs(l,o));break e}}s=l=xs(l,o),St!==4&&(St=2),na===null?na=[s]:na.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=Dg(s,l,e);Xh(s,d);break e;case 1:o=l;var x=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof x.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(zi===null||!zi.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=Ig(s,o,e);Xh(s,E);break e}}s=s.return}while(s!==null)}Jg(n)}catch(w){e=w,xt===n&&n!==null&&(xt=n=n.return);continue}break}while(!0)}function Zg(){var t=al.current;return al.current=sl,t===null?sl:t}function Bd(){(St===0||St===3||St===2)&&(St=4),Ct===null||!(Sr&268435455)&&!(Nl&268435455)||Ci(Ct,Dt)}function cl(t,e){var n=$e;$e|=2;var i=Zg();(Ct!==t||Dt!==e)&&(ii=null,hr(t,e));do try{px();break}catch(r){Kg(t,r)}while(!0);if(Md(),$e=n,al.current=i,xt!==null)throw Error(oe(261));return Ct=null,Dt=0,St}function px(){for(;xt!==null;)Qg(xt)}function mx(){for(;xt!==null&&!B_();)Qg(xt)}function Qg(t){var e=tv(t.alternate,t,cn);t.memoizedProps=t.pendingProps,e===null?Jg(t):xt=e,Ud.current=null}function Jg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=lx(n,e),n!==null){n.flags&=32767,xt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{St=6,xt=null;return}}else if(n=ox(n,e,cn),n!==null){xt=n;return}if(e=e.sibling,e!==null){xt=e;return}xt=e=t}while(e!==null);St===0&&(St=5)}function rr(t,e,n){var i=Ze,r=wn.transition;try{wn.transition=null,Ze=1,gx(t,e,n,i)}finally{wn.transition=r,Ze=i}return null}function gx(t,e,n,i){do us();while(Ni!==null);if($e&6)throw Error(oe(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(oe(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(K_(t,s),t===Ct&&(xt=Ct=null,Dt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ja||(Ja=!0,nv(Vo,function(){return us(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=wn.transition,wn.transition=null;var a=Ze;Ze=1;var o=$e;$e|=4,Ud.current=null,ux(t,n),qg(n,t),F0(_u),Xo=!!vu,_u=vu=null,t.current=n,dx(n),j_(),$e=o,Ze=a,wn.transition=s}else t.current=n;if(Ja&&(Ja=!1,Ni=t,ll=r),s=t.pendingLanes,s===0&&(zi=null),V_(n.stateNode),nn(t,vt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(ol)throw ol=!1,t=Ou,Ou=null,t;return ll&1&&t.tag!==0&&us(),s=t.pendingLanes,s&1?t===zu?ia++:(ia=0,zu=t):ia=0,Ki(),null}function us(){if(Ni!==null){var t=Dm(ll),e=wn.transition,n=Ze;try{if(wn.transition=null,Ze=16>t?16:t,Ni===null)var i=!1;else{if(t=Ni,Ni=null,ll=0,$e&6)throw Error(oe(331));var r=$e;for($e|=4,Se=t.current;Se!==null;){var s=Se,a=s.child;if(Se.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var u=o[l];for(Se=u;Se!==null;){var f=Se;switch(f.tag){case 0:case 11:case 15:ta(8,f,s)}var p=f.child;if(p!==null)p.return=f,Se=p;else for(;Se!==null;){f=Se;var h=f.sibling,g=f.return;if(Vg(f),f===u){Se=null;break}if(h!==null){h.return=g,Se=h;break}Se=g}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}Se=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Se=a;else e:for(;Se!==null;){if(s=Se,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ta(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,Se=d;break e}Se=s.return}}var x=t.current;for(Se=x;Se!==null;){a=Se;var v=a.child;if(a.subtreeFlags&2064&&v!==null)v.return=a,Se=v;else e:for(a=x;Se!==null;){if(o=Se,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Rl(9,o)}}catch(w){mt(o,o.return,w)}if(o===a){Se=null;break e}var E=o.sibling;if(E!==null){E.return=o.return,Se=E;break e}Se=o.return}}if($e=r,Ki(),qn&&typeof qn.onPostCommitFiberRoot=="function")try{qn.onPostCommitFiberRoot(Sl,t)}catch{}i=!0}return i}finally{Ze=n,wn.transition=e}}return!1}function pf(t,e,n){e=xs(n,e),e=Dg(t,e,1),t=Oi(t,e,1),e=$t(),t!==null&&(Ca(t,1,e),nn(t,e))}function mt(t,e,n){if(t.tag===3)pf(t,t,n);else for(;e!==null;){if(e.tag===3){pf(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(zi===null||!zi.has(i))){t=xs(n,t),t=Ig(e,t,1),e=Oi(e,t,1),t=$t(),e!==null&&(Ca(e,1,t),nn(e,t));break}}e=e.return}}function vx(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=$t(),t.pingedLanes|=t.suspendedLanes&n,Ct===t&&(Dt&n)===n&&(St===4||St===3&&(Dt&130023424)===Dt&&500>vt()-kd?hr(t,0):Fd|=n),nn(t,e)}function ev(t,e){e===0&&(t.mode&1?(e=Ga,Ga<<=1,!(Ga&130023424)&&(Ga=4194304)):e=1);var n=$t();t=fi(t,e),t!==null&&(Ca(t,e,n),nn(t,n))}function _x(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),ev(t,n)}function xx(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(oe(314))}i!==null&&i.delete(e),ev(t,n)}var tv;tv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||en.current)Jt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Jt=!1,ax(t,e,n);Jt=!!(t.flags&131072)}else Jt=!1,lt&&e.flags&1048576&&sg(e,Jo,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Fo(t,e),t=e.pendingProps;var r=ms(e,jt.current);cs(e,n),r=Nd(null,e,i,t,r,n);var s=Pd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,tn(i)?(s=!0,Zo(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,wd(e),r.updater=Cl,e.stateNode=r,r._reactInternals=e,bu(e,i,t,n),e=Nu(null,e,i,!0,s,n)):(e.tag=0,lt&&s&&_d(e),Xt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Fo(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Sx(i),t=Ln(i,t),r){case 0:e=Ru(null,e,i,t,n);break e;case 1:e=rf(null,e,i,t,n);break e;case 11:e=tf(null,e,i,t,n);break e;case 14:e=nf(null,e,i,Ln(i.type,t),n);break e}throw Error(oe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ln(i,r),Ru(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ln(i,r),rf(t,e,i,r,n);case 3:e:{if(Og(e),t===null)throw Error(oe(387));i=e.pendingProps,s=e.memoizedState,r=s.element,dg(t,e),nl(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=xs(Error(oe(423)),e),e=sf(t,e,i,n,r);break e}else if(i!==r){r=xs(Error(oe(424)),e),e=sf(t,e,i,n,r);break e}else for(hn=ki(e.stateNode.containerInfo.firstChild),fn=e,lt=!0,In=null,n=cg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(gs(),i===r){e=pi(t,e,n);break e}Xt(t,e,i,n)}e=e.child}return e;case 5:return hg(e),t===null&&Tu(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,xu(i,r)?a=null:s!==null&&xu(i,s)&&(e.flags|=32),kg(t,e),Xt(t,e,a,n),e.child;case 6:return t===null&&Tu(e),null;case 13:return zg(t,e,n);case 4:return Ad(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=vs(e,null,i,n):Xt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ln(i,r),tf(t,e,i,r,n);case 7:return Xt(t,e,e.pendingProps,n),e.child;case 8:return Xt(t,e,e.pendingProps.children,n),e.child;case 12:return Xt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,rt(el,i._currentValue),i._currentValue=a,s!==null)if(jn(s.value,a)){if(s.children===r.children&&!en.current){e=pi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=ci(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),wu(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(oe(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),wu(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Xt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,cs(e,n),r=An(r),i=i(r),e.flags|=1,Xt(t,e,i,n),e.child;case 14:return i=e.type,r=Ln(i,e.pendingProps),r=Ln(i.type,r),nf(t,e,i,r,n);case 15:return Ug(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ln(i,r),Fo(t,e),e.tag=1,tn(i)?(t=!0,Zo(e)):t=!1,cs(e,n),Lg(e,i,r),bu(e,i,r,n),Nu(null,e,i,!0,t,n);case 19:return Bg(t,e,n);case 22:return Fg(t,e,n)}throw Error(oe(156,e.tag))};function nv(t,e){return Rm(t,e)}function yx(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tn(t,e,n,i){return new yx(t,e,n,i)}function jd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Sx(t){if(typeof t=="function")return jd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ad)return 11;if(t===od)return 14}return 2}function ji(t,e){var n=t.alternate;return n===null?(n=Tn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function zo(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")jd(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Xr:return fr(n.children,r,s,e);case sd:a=8,r|=8;break;case Zc:return t=Tn(12,n,e,r|2),t.elementType=Zc,t.lanes=s,t;case Qc:return t=Tn(13,n,e,r),t.elementType=Qc,t.lanes=s,t;case Jc:return t=Tn(19,n,e,r),t.elementType=Jc,t.lanes=s,t;case hm:return Pl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case um:a=10;break e;case dm:a=9;break e;case ad:a=11;break e;case od:a=14;break e;case wi:a=16,i=null;break e}throw Error(oe(130,t==null?t:typeof t,""))}return e=Tn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function fr(t,e,n,i){return t=Tn(7,t,i,e),t.lanes=n,t}function Pl(t,e,n,i){return t=Tn(22,t,i,e),t.elementType=hm,t.lanes=n,t.stateNode={isHidden:!1},t}function gc(t,e,n){return t=Tn(6,t,null,e),t.lanes=n,t}function vc(t,e,n){return e=Tn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Mx(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zl(0),this.expirationTimes=Zl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zl(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Hd(t,e,n,i,r,s,a,o,l){return t=new Mx(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Tn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},wd(s),t}function Ex(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Wr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function iv(t){if(!t)return Xi;t=t._reactInternals;e:{if(Ar(t)!==t||t.tag!==1)throw Error(oe(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(tn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(oe(171))}if(t.tag===1){var n=t.type;if(tn(n))return ig(t,n,e)}return e}function rv(t,e,n,i,r,s,a,o,l){return t=Hd(n,i,!0,t,r,s,a,o,l),t.context=iv(null),n=t.current,i=$t(),r=Bi(n),s=ci(i,r),s.callback=e??null,Oi(n,s,r),t.current.lanes=r,Ca(t,r,i),nn(t,i),t}function Ll(t,e,n,i){var r=e.current,s=$t(),a=Bi(r);return n=iv(n),e.context===null?e.context=n:e.pendingContext=n,e=ci(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Oi(r,e,a),t!==null&&(zn(t,r,a,s),Do(t,r,a)),a}function ul(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function mf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Gd(t,e){mf(t,e),(t=t.alternate)&&mf(t,e)}function Tx(){return null}var sv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Vd(t){this._internalRoot=t}Dl.prototype.render=Vd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(oe(409));Ll(t,e,null,null)};Dl.prototype.unmount=Vd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Mr(function(){Ll(null,t,null,null)}),e[hi]=null}};function Dl(t){this._internalRoot=t}Dl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Fm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<bi.length&&e!==0&&e<bi[n].priority;n++);bi.splice(n,0,t),n===0&&Om(t)}};function Wd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Il(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function gf(){}function wx(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=ul(a);s.call(u)}}var a=rv(e,i,t,0,null,!1,!1,"",gf);return t._reactRootContainer=a,t[hi]=a.current,ma(t.nodeType===8?t.parentNode:t),Mr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var u=ul(l);o.call(u)}}var l=Hd(t,0,!1,null,null,!1,!1,"",gf);return t._reactRootContainer=l,t[hi]=l.current,ma(t.nodeType===8?t.parentNode:t),Mr(function(){Ll(e,l,n,i)}),l}function Ul(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=ul(a);o.call(l)}}Ll(e,a,t,r)}else a=wx(n,e,t,r,i);return ul(a)}Im=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=qs(e.pendingLanes);n!==0&&(ud(e,n|1),nn(e,vt()),!($e&6)&&(ys=vt()+500,Ki()))}break;case 13:Mr(function(){var i=fi(t,1);if(i!==null){var r=$t();zn(i,t,1,r)}}),Gd(t,1)}};dd=function(t){if(t.tag===13){var e=fi(t,134217728);if(e!==null){var n=$t();zn(e,t,134217728,n)}Gd(t,134217728)}};Um=function(t){if(t.tag===13){var e=Bi(t),n=fi(t,e);if(n!==null){var i=$t();zn(n,t,e,i)}Gd(t,e)}};Fm=function(){return Ze};km=function(t,e){var n=Ze;try{return Ze=t,e()}finally{Ze=n}};cu=function(t,e,n){switch(e){case"input":if(nu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=wl(i);if(!r)throw Error(oe(90));pm(i),nu(i,r)}}}break;case"textarea":gm(t,n);break;case"select":e=n.value,e!=null&&ss(t,!!n.multiple,e,!1)}};Em=Od;Tm=Mr;var Ax={usingClientEntryPoint:!1,Events:[Na,Kr,wl,Sm,Mm,Od]},Bs={findFiberByHostInstance:cr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},bx={bundleType:Bs.bundleType,version:Bs.version,rendererPackageName:Bs.rendererPackageName,rendererConfig:Bs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:gi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=bm(t),t===null?null:t.stateNode},findFiberByHostInstance:Bs.findFiberByHostInstance||Tx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var eo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!eo.isDisabled&&eo.supportsFiber)try{Sl=eo.inject(bx),qn=eo}catch{}}gn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ax;gn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wd(e))throw Error(oe(200));return Ex(t,e,null,n)};gn.createRoot=function(t,e){if(!Wd(t))throw Error(oe(299));var n=!1,i="",r=sv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Hd(t,1,!1,null,null,n,!1,i,r),t[hi]=e.current,ma(t.nodeType===8?t.parentNode:t),new Vd(e)};gn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(oe(188)):(t=Object.keys(t).join(","),Error(oe(268,t)));return t=bm(e),t=t===null?null:t.stateNode,t};gn.flushSync=function(t){return Mr(t)};gn.hydrate=function(t,e,n){if(!Il(e))throw Error(oe(200));return Ul(null,t,e,!0,n)};gn.hydrateRoot=function(t,e,n){if(!Wd(t))throw Error(oe(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=sv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=rv(e,null,t,1,n??null,r,!1,s,a),t[hi]=e.current,ma(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Dl(e)};gn.render=function(t,e,n){if(!Il(e))throw Error(oe(200));return Ul(null,t,e,!1,n)};gn.unmountComponentAtNode=function(t){if(!Il(t))throw Error(oe(40));return t._reactRootContainer?(Mr(function(){Ul(null,null,t,!1,function(){t._reactRootContainer=null,t[hi]=null})}),!0):!1};gn.unstable_batchedUpdates=Od;gn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Il(n))throw Error(oe(200));if(t==null||t._reactInternals===void 0)throw Error(oe(38));return Ul(t,e,n,!1,i)};gn.version="18.3.1-next-f1338f8080-20240426";function av(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(av)}catch(t){console.error(t)}}av(),am.exports=gn;var Cx=am.exports,vf=Cx;$c.createRoot=vf.createRoot,$c.hydrateRoot=vf.hydrateRoot;var _f="1.3.25";function ov(t,e,n){return Math.max(t,Math.min(e,n))}function Rx(t,e,n){return(1-n)*t+n*e}function Nx(t,e,n,i){return Rx(t,e,1-Math.exp(-n*i))}function Px(t,e){return(t%e+e)%e}var Lx=class{constructor(){Te(this,"isRunning",!1);Te(this,"value",0);Te(this,"from",0);Te(this,"to",0);Te(this,"currentTime",0);Te(this,"lerp");Te(this,"duration");Te(this,"easing");Te(this,"onUpdate")}advance(t){var n;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=t;const i=ov(0,this.currentTime/this.duration,1);e=i>=1;const r=e?1:this.easing(i);this.value=this.from+(this.to-this.from)*r}else this.lerp?(this.value=Nx(this.value,this.to,this.lerp*60,t),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),(n=this.onUpdate)==null||n.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(t,e,{lerp:n,duration:i,easing:r,onStart:s,onUpdate:a}){this.from=this.value=t,this.to=e,this.lerp=n,this.duration=i,this.easing=r,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=a}};function Dx(t,e){let n;return function(...i){clearTimeout(n),n=setTimeout(()=>{n=void 0,t.apply(this,i)},e)}}var Ix=class{constructor(t,e,{autoResize:n=!0,debounce:i=250}={}){Te(this,"width",0);Te(this,"height",0);Te(this,"scrollHeight",0);Te(this,"scrollWidth",0);Te(this,"debouncedResize");Te(this,"wrapperResizeObserver");Te(this,"contentResizeObserver");Te(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Te(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Te(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=t,this.content=e,n&&(this.debouncedResize=Dx(this.resize,i),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var t,e;(t=this.wrapperResizeObserver)==null||t.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},lv=class{constructor(){Te(this,"events",{})}emit(t,...e){var i;const n=this.events[t]||[];for(let r=0,s=n.length;r<s;r++)(i=n[r])==null||i.call(n,...e)}on(t,e){return this.events[t]?this.events[t].push(e):this.events[t]=[e],()=>{var n;this.events[t]=(n=this.events[t])==null?void 0:n.filter(i=>e!==i)}}off(t,e){var n;this.events[t]=(n=this.events[t])==null?void 0:n.filter(i=>e!==i)}destroy(){this.events={}}};const Ux=100/6,_i={passive:!1};function xf(t,e){return t===1?Ux:t===2?e:1}var Fx=class{constructor(t,e={wheelMultiplier:1,touchMultiplier:1}){Te(this,"touchStart",{x:0,y:0});Te(this,"lastDelta",{x:0,y:0});Te(this,"window",{width:0,height:0});Te(this,"emitter",new lv);Te(this,"onTouchStart",t=>{const{clientX:e,clientY:n}=t.targetTouches?t.targetTouches[0]:t;this.touchStart.x=e,this.touchStart.y=n,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:t})});Te(this,"onTouchMove",t=>{const{clientX:e,clientY:n}=t.targetTouches?t.targetTouches[0]:t,i=-(e-this.touchStart.x)*this.options.touchMultiplier,r=-(n-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=n,this.lastDelta={x:i,y:r},this.emitter.emit("scroll",{deltaX:i,deltaY:r,event:t})});Te(this,"onTouchEnd",t=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:t})});Te(this,"onWheel",t=>{let{deltaX:e,deltaY:n,deltaMode:i}=t;const r=xf(i,this.window.width),s=xf(i,this.window.height);e*=r,n*=s,e*=this.options.wheelMultiplier,n*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:n,event:t})});Te(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=t,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,_i),this.element.addEventListener("touchstart",this.onTouchStart,_i),this.element.addEventListener("touchmove",this.onTouchMove,_i),this.element.addEventListener("touchend",this.onTouchEnd,_i)}on(t,e){return this.emitter.on(t,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,_i),this.element.removeEventListener("touchstart",this.onTouchStart,_i),this.element.removeEventListener("touchmove",this.onTouchMove,_i),this.element.removeEventListener("touchend",this.onTouchEnd,_i)}};const yf=t=>Math.min(1,1.001-2**(-10*t));var kx=class{constructor({wrapper:t=window,content:e=document.documentElement,eventsTarget:n=t,smoothWheel:i=!0,syncTouch:r=!1,syncTouchLerp:s=.075,touchInertiaExponent:a=1.7,duration:o,easing:l,lerp:u=.1,infinite:f=!1,orientation:p="vertical",gestureOrientation:h=p==="horizontal"?"both":"vertical",touchMultiplier:g=1,wheelMultiplier:_=1,autoResize:y=!0,prevent:m,virtualScroll:d,overscroll:x=!0,autoRaf:v=!1,anchors:E=!1,autoToggle:w=!1,allowNestedScroll:C=!1,__experimental__naiveDimensions:R=!1,naiveDimensions:k=R,stopInertiaOnNavigate:S=!1}={}){Te(this,"_isScrolling",!1);Te(this,"_isStopped",!1);Te(this,"_isLocked",!1);Te(this,"_preventNextNativeScrollEvent",!1);Te(this,"_resetVelocityTimeout",null);Te(this,"_rafId",null);Te(this,"_isDraggingSelection",!1);Te(this,"isTouching");Te(this,"isIos");Te(this,"time",0);Te(this,"userData",{});Te(this,"lastVelocity",0);Te(this,"velocity",0);Te(this,"direction",0);Te(this,"options");Te(this,"targetScroll");Te(this,"animatedScroll");Te(this,"animate",new Lx);Te(this,"emitter",new lv);Te(this,"dimensions");Te(this,"virtualScroll");Te(this,"onScrollEnd",t=>{t instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&t.stopPropagation()});Te(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Te(this,"onTransitionEnd",t=>{var e;(e=t.propertyName)!=null&&e.includes("overflow")&&t.target===this.rootElement&&this.checkOverflow()});Te(this,"onClick",t=>{const e=t.composedPath().filter(i=>i instanceof HTMLAnchorElement&&i.href).map(i=>new URL(i.href)),n=new URL(window.location.href);if(this.options.anchors){const i=e.find(r=>n.host===r.host&&n.pathname===r.pathname&&r.hash);if(i){const r=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=decodeURIComponent(i.hash);this.scrollTo(s,r);return}}if(this.options.stopInertiaOnNavigate&&e.some(i=>n.host===i.host&&n.pathname!==i.pathname)){this.reset();return}});Te(this,"onPointerDown",t=>{t.button===1&&this.reset()});Te(this,"onVirtualScroll",t=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(t)===!1)return;const{deltaX:e,deltaY:n,event:i}=t;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:n,event:i}),i.ctrlKey||i.lenisStopPropagation)return;const r=i.type.includes("touch"),s=i.type.includes("wheel");if(r&&this.isIos&&(i.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(i)),this._isDraggingSelection)){i.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=i.type==="touchstart"||i.type==="touchmove";const a=e===0&&n===0;if(this.options.syncTouch&&r&&i.type==="touchstart"&&a&&!this.isStopped&&!this.isLocked){this.reset();return}const o=this.options.gestureOrientation==="vertical"&&n===0||this.options.gestureOrientation==="horizontal"&&e===0;if(a||o)return;let l=i.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const u=this.options.prevent,f=Math.abs(e)>=Math.abs(n)?"horizontal":"vertical";if(l.find(_=>{var y,m,d,x,v;return _ instanceof HTMLElement&&(typeof u=="function"&&(u==null?void 0:u(_))||((y=_.hasAttribute)==null?void 0:y.call(_,"data-lenis-prevent"))||f==="vertical"&&((m=_.hasAttribute)==null?void 0:m.call(_,"data-lenis-prevent-vertical"))||f==="horizontal"&&((d=_.hasAttribute)==null?void 0:d.call(_,"data-lenis-prevent-horizontal"))||r&&((x=_.hasAttribute)==null?void 0:x.call(_,"data-lenis-prevent-touch"))||s&&((v=_.hasAttribute)==null?void 0:v.call(_,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(_,{deltaX:e,deltaY:n}))}))return;if(this.isStopped||this.isLocked){i.cancelable&&i.preventDefault();return}if(!(this.options.syncTouch&&r||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),i.lenisStopPropagation=!0;return}let p=n;this.options.gestureOrientation==="both"?p=Math.abs(n)>Math.abs(e)?n:e:this.options.gestureOrientation==="horizontal"&&(p=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&n>0||this.animatedScroll===this.limit&&n<0))&&(i.lenisStopPropagation=!0),i.cancelable&&i.preventDefault();const h=r&&this.options.syncTouch,g=r&&i.type==="touchend";g&&(p=Math.sign(p)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+p,{programmatic:!1,...h?{lerp:g?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Te(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const t=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-t,this.direction=Math.sign(this.animatedScroll-t),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Te(this,"raf",t=>{const e=t-(this.time||t);this.time=t,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=_f,window.lenis||(window.lenis={}),window.lenis.version=_f,p==="horizontal"&&(window.lenis.horizontal=!0),r===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!t||t===document.documentElement)&&(t=window),typeof o=="number"&&typeof l!="function"?l=yf:typeof l=="function"&&typeof o!="number"&&(o=1),this.options={wrapper:t,content:e,eventsTarget:n,smoothWheel:i,syncTouch:r,syncTouchLerp:s,touchInertiaExponent:a,duration:o,easing:l,lerp:u,infinite:f,gestureOrientation:h,orientation:p,touchMultiplier:g,wheelMultiplier:_,autoResize:y,prevent:m,virtualScroll:d,overscroll:x,autoRaf:v,anchors:E,autoToggle:w,allowNestedScroll:C,naiveDimensions:k,stopInertiaOnNavigate:S},this.dimensions=new Ix(t,e,{autoResize:y}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new Fx(n,{touchMultiplier:g,wheelMultiplier:_}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(t,e){return this.emitter.on(t,e)}off(t,e){return this.emitter.off(t,e)}get overflow(){const t=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[t]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(t){this.isHorizontal?this.options.wrapper.scrollTo({left:t,behavior:"instant"}):this.options.wrapper.scrollTo({top:t,behavior:"instant"})}isTouchOnSelectionHandle(t){const e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;const n=t.targetTouches[0]??t.changedTouches[0];if(!n)return!1;const i=e.getRangeAt(0).getClientRects();if(i.length===0)return!1;const r=i[0],s=i[i.length-1],a=40,o=Math.hypot(n.clientX-r.left,n.clientY-r.top)<=a,l=Math.hypot(n.clientX-s.right,n.clientY-s.bottom)<=a;return o||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(t,{offset:e=0,immediate:n=!1,lock:i=!1,programmatic:r=!0,lerp:s=r?this.options.lerp:void 0,duration:a=r?this.options.duration:void 0,easing:o=r?this.options.easing:void 0,onStart:l,onComplete:u,force:f=!1,userData:p}={}){if((this.isStopped||this.isLocked)&&!f)return;let h=t,g=e;if(typeof h=="string"&&["top","left","start","#"].includes(h))h=0;else if(typeof h=="string"&&["bottom","right","end"].includes(h))h=this.limit;else{let _=null;if(typeof h=="string"?(_=h.startsWith("#")?document.getElementById(h.slice(1)):document.querySelector(h),_||(h==="#top"?h=0:console.warn("Lenis: Target not found",h))):h instanceof HTMLElement&&(h!=null&&h.nodeType)&&(_=h),_){if(this.options.wrapper!==window){const E=this.rootElement.getBoundingClientRect();g-=this.isHorizontal?E.left:E.top}const y=_.getBoundingClientRect(),m=getComputedStyle(_),d=this.isHorizontal?Number.parseFloat(m.scrollMarginLeft):Number.parseFloat(m.scrollMarginTop),x=getComputedStyle(this.rootElement),v=this.isHorizontal?Number.parseFloat(x.scrollPaddingLeft):Number.parseFloat(x.scrollPaddingTop);h=(this.isHorizontal?y.left:y.top)+this.animatedScroll-(Number.isNaN(d)?0:d)-(Number.isNaN(v)?0:v)}}if(typeof h=="number"){if(h+=g,this.options.infinite){if(r){this.targetScroll=this.animatedScroll=this.scroll;const _=h-this.animatedScroll;_>this.limit/2?h-=this.limit:_<-this.limit/2&&(h+=this.limit)}}else h=ov(0,h,this.limit);if(h===this.targetScroll){l==null||l(this),u==null||u(this);return}if(this.userData=p??{},n){this.animatedScroll=this.targetScroll=h,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),u==null||u(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}r||(this.targetScroll=h),typeof a=="number"&&typeof o!="function"?o=yf:typeof o=="function"&&typeof a!="number"&&(a=1),this.animate.fromTo(this.animatedScroll,h,{duration:a,easing:o,lerp:s,onStart:()=>{i&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(_,y)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=_-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=_,this.setScroll(this.scroll),r&&(this.targetScroll=_),y||this.emit(),y&&(this.reset(),this.emit(),u==null||u(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(t,{deltaX:e,deltaY:n}){const i=Date.now();t._lenis||(t._lenis={});const r=t._lenis;let s,a,o,l,u,f,p,h,g,_;if(i-(r.time??0)>2e3){r.time=Date.now();const C=window.getComputedStyle(t);if(r.computedStyle=C,s=["auto","overlay","scroll"].includes(C.overflowX),a=["auto","overlay","scroll"].includes(C.overflowY),u=["auto"].includes(C.overscrollBehaviorX),f=["auto"].includes(C.overscrollBehaviorY),r.hasOverflowX=s,r.hasOverflowY=a,!(s||a))return!1;p=t.scrollWidth,h=t.scrollHeight,g=t.clientWidth,_=t.clientHeight,o=p>g,l=h>_,r.isScrollableX=o,r.isScrollableY=l,r.scrollWidth=p,r.scrollHeight=h,r.clientWidth=g,r.clientHeight=_,r.hasOverscrollBehaviorX=u,r.hasOverscrollBehaviorY=f}else o=r.isScrollableX,l=r.isScrollableY,s=r.hasOverflowX,a=r.hasOverflowY,p=r.scrollWidth,h=r.scrollHeight,g=r.clientWidth,_=r.clientHeight,u=r.hasOverscrollBehaviorX,f=r.hasOverscrollBehaviorY;if(!(s&&o||a&&l))return!1;const y=Math.abs(e)>=Math.abs(n)?"horizontal":"vertical";let m,d,x,v,E,w;if(y==="horizontal")m=Math.round(t.scrollLeft),d=p-g,x=e,v=s,E=o,w=u;else if(y==="vertical")m=Math.round(t.scrollTop),d=h-_,x=n,v=a,E=l,w=f;else return!1;return!w&&(m>=d||m<=0)?!0:(x>0?m<d:m>0)&&v&&E}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const t=this.options.wrapper;return this.isHorizontal?t.scrollX??t.scrollLeft:t.scrollY??t.scrollTop}get scroll(){return this.options.infinite?Px(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(t){this._isScrolling!==t&&(this._isScrolling=t,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(t){this._isStopped!==t&&(this._isStopped=t,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(t){this._isLocked!==t&&(this._isLocked=t,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let t="lenis";return this.options.autoToggle&&(t+=" lenis-autoToggle"),this.isStopped&&(t+=" lenis-stopped"),this.isLocked&&(t+=" lenis-locked"),this.isScrolling&&(t+=" lenis-scrolling"),this.isScrolling==="smooth"&&(t+=" lenis-smooth"),t}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(t=>{this.rootElement.classList.add(t)})}cleanUpClassName(){for(const t of Array.from(this.rootElement.classList))(t==="lenis"||t.startsWith("lenis-"))&&this.rootElement.classList.remove(t)}};function Ox(){const t=me.useRef(null);return me.useEffect(()=>{const e=t.current;if(!e)return;const n=e.getContext("2d");if(!n)return;let i,r=e.width=window.innerWidth,s=e.height=window.innerHeight;const a={x:-1e3,y:-1e3,targetX:-1e3,targetY:-1e3,radius:150};let o=[];const l=S=>{a.targetX=S.clientX,a.targetY=S.clientY},u=()=>{a.targetX=-1e3,a.targetY=-1e3},f=S=>{S.target.tagName==="A"||S.target.tagName==="BUTTON"||S.target.closest("a")||S.target.closest("button")||S.target.closest("input")||S.target.closest("textarea")||S.target.closest(".user-profile-badge")||S.target.closest(".settings-toggle")||S.target.closest(".project-sidebar")||S.target.closest(".auth-fullscreen-overlay")||S.target.closest(".mobile-menu")||S.target.closest(".settings-panel")||o.push({x:S.clientX,y:S.clientY+window.scrollY,radius:0,maxRadius:380,speed:9,force:110,width:65})},p=S=>{if(S.touches.length>0){const M=S.touches[0];a.targetX=M.clientX,a.targetY=M.clientY;const I=document.elementFromPoint(M.clientX,M.clientY);if(I&&(I.tagName==="A"||I.tagName==="BUTTON"||I.closest("a")||I.closest("button")||I.closest("input")||I.closest("textarea")||I.closest(".user-profile-badge")||I.closest(".settings-toggle")||I.closest(".project-sidebar")||I.closest(".auth-fullscreen-overlay")||I.closest(".mobile-menu")||I.closest(".settings-panel")))return;o.push({x:M.clientX,y:M.clientY+window.scrollY,radius:0,maxRadius:280,speed:8,force:90,width:50})}},h=S=>{if(S.touches.length>0){const M=S.touches[0];a.targetX=M.clientX,a.targetY=M.clientY}},g=()=>{a.targetX=-1e3,a.targetY=-1e3};window.addEventListener("mousemove",l),window.addEventListener("mouseleave",u),window.addEventListener("mousedown",f),window.addEventListener("touchstart",p,{passive:!0}),window.addEventListener("touchmove",h,{passive:!0}),window.addEventListener("touchend",g,{passive:!0});let _=[];const y=40;let m=Math.ceil(r/y)+1,d=8e3,x=Math.ceil(d/y)+1;const v=()=>{r=e.width=window.innerWidth,s=e.height=window.innerHeight,m=Math.ceil(r/y)+1,x=Math.ceil(d/y)+1,_=[];for(let S=0;S<x;S++)for(let M=0;M<m;M++){const I=M*y-(m*y-r)/2,H=S*y;_.push({homeX:I,homeY:H,x:I+(Math.random()-.5)*8,y:H+(Math.random()-.5)*8,vx:0,vy:0,radius:1.5+Math.random()*.7,activation:0})}};v(),window.addEventListener("resize",v);let E=0;const w=.045,C=.88,R=48,k=()=>{E+=1,n.clearRect(0,0,r,s);const S=window.scrollY;let M=-1e3,I=-1e3;a.targetX===-1e3?(a.x+=(-1e3-a.x)*.1,a.y+=(-1e3-a.y)*.1):(a.x+=(a.targetX-a.x)*.18,a.y+=(a.targetY-a.y)*.18,M=a.x,I=a.y+S),o.forEach(P=>{P.radius+=P.speed}),o=o.filter(P=>P.radius<P.maxRadius);const H=Math.max(0,Math.floor((S-120)/y)),ie=Math.min(x,Math.ceil((S+s+120)/y));for(let P=H;P<ie;P++)for(let j=0;j<m;j++){const $=P*m+j,B=_[$];if(!B)continue;const N=Math.sin(E*.015+B.homeY*.008)*2.5,O=Math.cos(E*.012+B.homeX*.008)*2.5;let D=0,z=0;if(M!==-1e3){const te=B.x-M,U=B.y-I,Ie=Math.sqrt(te*te+U*U);if(Ie<a.radius){const xe=(a.radius-Ie)/a.radius,Z=Math.pow(xe,1.5),ee=Math.atan2(U,te);D=Math.cos(ee)*Z*R,z=Math.sin(ee)*Z*R,B.activation=Math.max(B.activation,xe)}else B.activation*=.94}else B.activation*=.94;o.forEach(te=>{const U=B.x-te.x,Ie=B.y-te.y,xe=Math.sqrt(U*U+Ie*Ie),Z=Math.abs(xe-te.radius);if(Z<te.width){const ee=1-Z/te.width,pe=1-te.radius/te.maxRadius,he=ee*pe,A=Math.atan2(Ie,U),T=he*te.force*.12;B.vx+=Math.cos(A)*T,B.vy+=Math.sin(A)*T,B.activation=Math.max(B.activation,he*.85)}});const Q=B.homeX+D+N,V=B.homeY+z+O;B.vx+=(Q-B.x)*w,B.vy+=(V-B.y)*w,B.vx*=C,B.vy*=C,B.x+=B.vx,B.y+=B.vy;const K=B.x,J=B.y-S;if(j<m-1){const te=P*m+(j+1),U=_[te];if(U){const Ie=Math.max(B.activation,U.activation),xe=.08+Ie*.16;Ie>.01?n.strokeStyle=`hsla(${265-Ie*85}, 80%, 60%, ${xe})`:n.strokeStyle=`rgba(139, 92, 246, ${xe})`,n.beginPath(),n.moveTo(K,J),n.lineTo(U.x,U.y-S),n.stroke()}}if(P<x-1){const te=(P+1)*m+j,U=_[te];if(U){const Ie=Math.max(B.activation,U.activation),xe=.08+Ie*.16;Ie>.01?n.strokeStyle=`hsla(${265-Ie*85}, 80%, 60%, ${xe})`:n.strokeStyle=`rgba(139, 92, 246, ${xe})`,n.beginPath(),n.moveTo(K,J),n.lineTo(U.x,U.y-S),n.stroke()}}const fe=265-B.activation*85,de=55+B.activation*45,Re=48+B.activation*22,Ce=.32+B.activation*.55,ne=B.radius+B.activation*1.6;B.activation>.05&&(n.fillStyle=`hsla(${fe}, ${de}%, ${Re}%, ${B.activation*.12})`,n.beginPath(),n.arc(K,J,ne*3.5,0,Math.PI*2),n.fill()),n.fillStyle=`hsla(${fe}, ${de}%, ${Re}%, ${Ce})`,n.beginPath(),n.arc(K,J,ne,0,Math.PI*2),n.fill()}i=requestAnimationFrame(k)};return k(),()=>{cancelAnimationFrame(i),window.removeEventListener("mousemove",l),window.removeEventListener("mouseleave",u),window.removeEventListener("mousedown",f),window.removeEventListener("touchstart",p),window.removeEventListener("touchmove",h),window.removeEventListener("touchend",g),window.removeEventListener("resize",v)}},[]),c.jsx("canvas",{ref:t,className:"interactive-dots-canvas"})}const zx={},Sf=t=>{let e;const n=new Set,i=(f,p)=>{const h=typeof f=="function"?f(e):f;if(!Object.is(h,e)){const g=e;e=p??(typeof h!="object"||h===null)?h:Object.assign({},e,h),n.forEach(_=>_(e,g))}},r=()=>e,l={setState:i,getState:r,getInitialState:()=>u,subscribe:f=>(n.add(f),()=>n.delete(f)),destroy:()=>{(zx?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},u=e=t(i,r,l);return l},Bx=t=>t?Sf(t):Sf;var cv={exports:{}},uv={},dv={exports:{}},hv={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ss=me;function jx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Hx=typeof Object.is=="function"?Object.is:jx,Gx=Ss.useState,Vx=Ss.useEffect,Wx=Ss.useLayoutEffect,Xx=Ss.useDebugValue;function qx(t,e){var n=e(),i=Gx({inst:{value:n,getSnapshot:e}}),r=i[0].inst,s=i[1];return Wx(function(){r.value=n,r.getSnapshot=e,_c(r)&&s({inst:r})},[t,n,e]),Vx(function(){return _c(r)&&s({inst:r}),t(function(){_c(r)&&s({inst:r})})},[t]),Xx(n),n}function _c(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Hx(t,n)}catch{return!0}}function Yx(t,e){return e()}var $x=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?Yx:qx;hv.useSyncExternalStore=Ss.useSyncExternalStore!==void 0?Ss.useSyncExternalStore:$x;dv.exports=hv;var Kx=dv.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fl=me,Zx=Kx;function Qx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Jx=typeof Object.is=="function"?Object.is:Qx,ey=Zx.useSyncExternalStore,ty=Fl.useRef,ny=Fl.useEffect,iy=Fl.useMemo,ry=Fl.useDebugValue;uv.useSyncExternalStoreWithSelector=function(t,e,n,i,r){var s=ty(null);if(s.current===null){var a={hasValue:!1,value:null};s.current=a}else a=s.current;s=iy(function(){function l(g){if(!u){if(u=!0,f=g,g=i(g),r!==void 0&&a.hasValue){var _=a.value;if(r(_,g))return p=_}return p=g}if(_=p,Jx(f,g))return _;var y=i(g);return r!==void 0&&r(_,y)?(f=g,_):(f=g,p=y)}var u=!1,f,p,h=n===void 0?null:n;return[function(){return l(e())},h===null?void 0:function(){return l(h())}]},[e,n,i,r]);var o=ey(t,s[0],s[1]);return ny(function(){a.hasValue=!0,a.value=o},[o]),ry(o),o};cv.exports=uv;var sy=cv.exports;const ay=qp(sy),fv={},{useDebugValue:oy}=rm,{useSyncExternalStoreWithSelector:ly}=ay;let Mf=!1;const cy=t=>t;function uy(t,e=cy,n){(fv?"production":void 0)!=="production"&&n&&!Mf&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),Mf=!0);const i=ly(t.subscribe,t.getState,t.getServerState||t.getInitialState,e,n);return oy(i),i}const Ef=t=>{(fv?"production":void 0)!=="production"&&typeof t!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const e=typeof t=="function"?Bx(t):t,n=(i,r)=>uy(e,i,r);return Object.assign(n,e),n},Xd=t=>t?Ef(t):Ef,un=[{id:"avatar-1",colors:["#ff416c","#ff4b2b"],name:"Crimson Sunset"},{id:"avatar-2",colors:["#a855f7","#3b82f6"],name:"Nebula Cyber"},{id:"avatar-3",colors:["#10b981","#059669"],name:"Teal Forest"},{id:"avatar-4",colors:["#f59e0b","#e11d48"],name:"Solar Flare"},{id:"avatar-5",colors:["#ec4899","#8b5cf6"],name:"Cosmic Fuchsia"},{id:"avatar-6",colors:["#06b6d4","#3b82f6"],name:"Cyan Ocean"}],ds=t=>{const e=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100"><defs><linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:${t[0]};stop-opacity:1" /><stop offset="100%" style="stop-color:${t[1]};stop-opacity:1" /></linearGradient></defs><circle cx="50" cy="50" r="50" fill="url(#grad)" /></svg>`;return`data:image/svg+xml;utf8,${encodeURIComponent(e)}`},dy=()=>{try{const t=localStorage.getItem("qix-auth-storage");if(t){const e=JSON.parse(t);if(e&&e.state)return{user:e.state.user||null,isLoggedIn:!!e.state.isLoggedIn}}}catch(t){console.error("Failed to load persisted auth state:",t)}return{user:null,isLoggedIn:!1}},Tf=dy(),pr=Xd(t=>({user:Tf.user,isLoggedIn:Tf.isLoggedIn,login:(e,n,i)=>{const r={email:e,name:n,avatar:i||ds(un[0].colors)};t({isLoggedIn:!0,user:r});try{localStorage.setItem("qix-auth-storage",JSON.stringify({state:{isLoggedIn:!0,user:r}}))}catch(s){console.error("Failed to persist auth state:",s)}},logout:()=>{t({isLoggedIn:!1,user:null});try{localStorage.removeItem("qix-auth-storage")}catch(e){console.error("Failed to remove persisted auth state:",e)}}})),hy=()=>{if(typeof window>"u")return"ru";const e=(navigator.language||navigator.userLanguage||"ru").substring(0,2).toLowerCase();return["ru","uz","en"].includes(e)?e:"ru"},qd={en:{services:"Services",expertise:"Expertise",scale:"Scale",login:"Log In",logout:"Log Out",startProject:"Start Project",disconnect:"Disconnect",heroTitle:"The Best Web Studio in Uzbekistan.",heroTitleSub:"Making websites beautifully.",heroDesc:"We design, develop, and launch high-performance websites and mobile apps. We handle the engineering so you can grow.",heroStatsProjects:"Projects Launched",heroStatsUptime:"Uptime SLA",heroStatsUsers:"Active Users",whatWeDo:"What We Do",engineeredStability:"Engineered for stability.",designedGrowth:"Designed for growth.",cardWebTitle:"Custom Web Development",cardWebDesc:"High-performance, secure, and SEO-optimized web systems built with modern frameworks (React, Next.js, Node.js) that load instantly.",cardAppTitle:"iOS & Android Apps",cardAppDesc:"Native & cross-platform applications crafted for optimal user experiences, from design to submission in the App Store and Google Play.",cardDesignTitle:"UI/UX Interface Design",cardDesignDesc:"Visual design systems that communicate brand trust. Pixel-perfect, accessible, and structured user flows that drive customer conversion.",cardCloudTitle:"Cloud Infrastructure",cardCloudDesc:"Reliable CI/CD pipelines, containerized orchestration (Docker/Kubernetes), and scalable architecture setups on AWS, GCP, and Vercel.",cardApiTitle:"Integrations & API Design",cardApiDesc:"Seamless connections to CRMs, payment gateways, ERP pipelines, and secure enterprise backend services.",cardSupportTitle:"Support & Optimization",cardSupportDesc:"Post-launch support, performance audits, page speed optimization, security updates, and database maintenance to keep apps healthy.",researchAreas:"Research Areas",threePillars:"Three pillars",scientificExecution:"of scientific execution",pillar1Title:"High-Performance Web Engines",pillar1Desc:"Building sub-second loading web applications using edge-rendering, caching layers, and clean, modular component structures.",pillar2Title:"Fluid Native Mobile Frameworks",pillar2Desc:"Crafting mobile software that utilizes GPU hardware acceleration for smooth 120Hz animations, local databases, and offline accessibility.",pillar3Title:"Secure & Automated Cloud",pillar3Desc:"Deploying auto-scaling cloud clusters protected by firewalls, standard authorization models, and fully automated deployment workflows.",selectedWork:"Selected Work",caseStudies:"Case studies",builtSolutions:"of solutions built",visitWebsite:"Visit Website",viewCase:"View Case Study",byNumbers:"By The Numbers",scaleSpeaks:"Scale that speaks",itself:"for itself",numCardProjects:"Web & mobile projects launched successfully",numCardUptime:"Uptime and build reliability standards",numCardEngineers:"Experienced engineers and product designers",numCardSpeed:"Average load speed improvement for clients",getInvolved:"Get Involved",nextBreakthrough:"The next breakthrough",startsYou:"starts with you",ctaDesc:"Have a website or mobile application concept? Let our team handle the engineering, design, and deployment. We launch products under iOS, Android, and Web platforms.",footerCopy:"Quality • Intelligence • Experience. All rights reserved.",establishIdentity:"Establish Identity",authSubtitle:"Create your developer profile and choose an avatar to authorize secure connections.",fullName:"Full Name",emailAddr:"Email Address",chooseAvatar:"Choose Avatar Identity",password:"Password",createAccount:"Create Account",newWorkspace:"New Workspace",workspaceSubtitle:"Outline the requirements and specify features for your sandbox project. Our AI will analyze your specifications and generate an estimate.",workspaceName:"Workspace Name",envEngine:"Environment Engine",projRequirements:"Project Requirements (AI Analysis)",analyzeReqs:"Analyze Requirements",neuralAssessment:"Neural Assessment",radarSubtitle:"Our neural interpreter is analyzing requirements and estimating resources.",aiCostBreakdown:"AI Cost Breakdown",aiSubtitle:"Based on your requirements, the AI has compiled the following invoice quote.",projectTarget:"Project Target",timeline:"Timeline",itemizedTasks:"Itemized Tasks",invoicedTotal:"Invoiced Total",proceedCheckout:"Proceed to Checkout",confirmPayment:"Confirm Payment",p2pSender:"Your card or phone number (Sender)",p2pReceipt:"Transaction ID / Receipt Code (Click / Payme)",workspaceActive:"Workspace Active!",receiptEmailed:"Transaction confirmed. A billing copy of your receipt has been dispatched to your e-mail.",amountPaid:"Amount Paid:",method:"Method:",status:"Status:",online:"Online",successFooter:"An email with details has been sent. We will verify the receipt ID and contact you within 15 minutes.",returnHome:"Return to Home",connectWorkspace:"Proceed to Workspace",connectingAuth:"Connecting to secure auth gateway...",creatingProfile:"Creating secure developer profile...",syncingAvatar:"Syncing custom avatar identity...",accessGranted:"Access Granted!",authorized:"Authorized",authPrompt:"You can now proceed to initialize your first project workspace."},ru:{services:"Услуги",expertise:"Экспертиза",scale:"Масштаб",login:"Войти",logout:"Выйти",startProject:"Начать проект",disconnect:"Выйти",heroTitle:"Лучшая веб-студия в Узбекистане.",heroTitleSub:"Делаем сайты красиво.",heroDesc:"Проектируем, разрабатываем и запускаем быстрые сайты и мобильные приложения. Берем на себя инженерию, чтобы вы могли расти.",heroStatsProjects:"Проектов запущено",heroStatsUptime:"Время работы SLA",heroStatsUsers:"Пользователей",whatWeDo:"Что мы делаем",engineeredStability:"Разработано для стабильности.",designedGrowth:"Создано для роста.",cardWebTitle:"Разработка сайтов",cardWebDesc:"Высокопроизводительные, безопасные и SEO-оптимизированные веб-системы на современных фреймворках (React, Next.js, Node.js) с мгновенной загрузкой.",cardAppTitle:"Приложения iOS & Android",cardAppDesc:"Нативные и кроссплатформенные мобильные приложения с упором на UX, от дизайна до публикации в App Store и Google Play.",cardDesignTitle:"UI/UX Дизайн интерфейсов",cardDesignDesc:"Визуальные дизайн-системы, вызывающие доверие к бренду. Пиксельно-точные, доступные и конвертирующие пользовательские интерфейсы.",cardCloudTitle:"Облачная инфраструктура",cardCloudDesc:"Надежные CI/CD пайплайны, контейнеризация (Docker/Kubernetes) и масштабируемая архитектура на AWS, GCP и Vercel.",cardApiTitle:"Интеграции и API",cardApiDesc:"Бесшовное подключение CRM-систем, платежных шлюзов, ERP-каналов и защищенных корпоративных бэкенд-сервисов.",cardSupportTitle:"Поддержка и оптимизация",cardSupportDesc:"Послепусковая поддержка, аудит производительности, оптимизация скорости, обновления безопасности и обслуживание баз данных.",researchAreas:"Направления",threePillars:"Три столпа",scientificExecution:"научного исполнения",pillar1Title:"Высокопроизводительные веб-движки",pillar1Desc:"Создание веб-приложений с субсекундной загрузкой с использованием рендеринга на границе сети, слоев кэширования и чистой модульной архитектуры.",pillar2Title:"Адаптивные мобильные фреймворки",pillar2Desc:"Разработка мобильного ПО с аппаратным ускорением GPU для плавных анимаций 120 Гц, локальными БД и оффлайн-доступом.",pillar3Title:"Безопасное и автоматизированное облако",pillar3Desc:"Развертывание облачных кластеров с автоматическим масштабированием, защищенных файрволами, стандартными моделями авторизации и CI/CD.",selectedWork:"Портфолио",caseStudies:"Кейсы решений",builtSolutions:"готовых к запуску",visitWebsite:"Перейти на сайт",viewCase:"Смотреть кейс",byNumbers:"В цифрах",scaleSpeaks:"Масштаб, который говорит",itself:"сам за себя",numCardProjects:"Успешно запущенных веб- и мобильных проектов",numCardUptime:"Стандарты надежности аптайма и сборок",numCardEngineers:"Опытных инженеров и дизайнеров продуктов",numCardSpeed:"Среднее ускорение загрузки сайтов клиентов",getInvolved:"Сотрудничество",nextBreakthrough:"Следующий прорыв",startsYou:"начинается с вас",ctaDesc:"Есть идея сайта или мобильного приложения? Наша команда возьмет на себя проектирование, дизайн и деплой на iOS, Android и Web.",footerCopy:"Качество • Интеллект • Опыт. Все права защищены.",establishIdentity:"Создать профиль",authSubtitle:"Создайте профиль разработчика и выберите аватар для авторизации безопасного соединения.",fullName:"Полное имя",emailAddr:"Электронная почта",chooseAvatar:"Выберите аватар",password:"Пароль",createAccount:"Создать аккаунт",newWorkspace:"Новая рабочая область",workspaceSubtitle:"Опишите ваши требования и укажите функции песочницы. Наш ИИ проанализирует параметры и рассчитает смету.",workspaceName:"Имя рабочей области",envEngine:"Движок окружения",projRequirements:"Требования к проекту (AI-анализ)",analyzeReqs:"Анализировать требования",neuralAssessment:"Нейросетевой анализ",radarSubtitle:"Наш нейросетевой анализатор изучает требования и оценивает ресурсы.",aiCostBreakdown:"Смета от ИИ",aiSubtitle:"На основе ваших требований ИИ сформировал следующий счет-смету.",projectTarget:"Цель проекта",timeline:"Сроки выполнения",itemizedTasks:"Задачи сметы",invoicedTotal:"Итого к оплате",proceedCheckout:"Перейти к оплате",confirmPayment:"Подтвердить оплату",p2pSender:"Ваша карта или телефон (Отправитель)",p2pReceipt:"ID транзакции / Код чека (Click / Payme)",workspaceActive:"Песочница создана!",receiptEmailed:"Транзакция подтверждена. Электронный чек отправлен на ваш e-mail.",amountPaid:"Сумма перевода:",method:"Метод:",status:"Статус:",online:"Активен",successFooter:"Детали зачисления отправлены на почту. Мы проверим ID чека и свяжемся с вами в течение 15 минут.",returnHome:"Вернуться на главную",connectWorkspace:"Перейти к песочнице",connectingAuth:"Подключение к шлюзу авторизации...",creatingProfile:"Создание безопасного профиля...",syncingAvatar:"Синхронизация аватара...",accessGranted:"Доступ разрешен!",authorized:"Авторизован",authPrompt:"Теперь вы можете перейти к созданию своей первой рабочей области."},uz:{services:"Xizmatlar",expertise:"Ekspertiza",scale:"Miqyos",login:"Kirish",logout:"Chiqish",startProject:"Loyihani boshlash",disconnect:"Chiqish",heroTitle:"O'zbekistondagi eng yaxshi veb-studiya.",heroTitleSub:"Saytlarni chiroyli qilamiz.",heroDesc:"Tezkor veb-saytlar va mobil ilovalarni loyihalashtiramiz, ishlab chiqamiz va ishga tushiramiz. Biz texnologiyalarni o'z zimmamizga olamiz, toki siz o'sa olasiz.",heroStatsProjects:"Loyihalar ishga tushirilgan",heroStatsUptime:"SLA Uptime vaqti",heroStatsUsers:"Foydalanuvchilar",whatWeDo:"Biz nima qilamiz",engineeredStability:"Barqarorlik uchun mo'ljallangan.",designedGrowth:"O'sish uchun yaratilgan.",cardWebTitle:"Veb-saytlar yaratish",cardWebDesc:"Zamonaviy freymvorklarda (React, Next.js, Node.js) yaratilgan, tez yuklanadigan, xavfsiz va SEO-optimallashtirilgan veb-tizimlar.",cardAppTitle:"iOS va Android ilovalar",cardAppDesc:"UX-ga yo'naltirilgan, dizayndan tortib App Store va Google Play-da chop etishgacha bo'lgan nativ va krossplatformali mobil ilovalar.",cardDesignTitle:"UI/UX Interface dizayni",cardDesignDesc:"Brendga ishonch uyg'otadigan vizual dizayn tizimlari. Piksel darajasida aniq, qulay va mijozlarni jalb etuvchi interfeyslar.",cardCloudTitle:"Bulutli infratuzilma",cardCloudDesc:"AWS, GCP va Vercel platformalarida ishonchli CI/CD quvurlari, konteynerlashtirish (Docker/Kubernetes) va kengayuvchi arxitektura.",cardApiTitle:"Integratsiyalar va API",cardApiDesc:"CRM tizimlar, to'lov shlyuzlari, ERP kanallari va xavfsiz korporativ backend xizmatlarini uzluksiz ulash.",cardSupportTitle:"Qo'llab-quvvatlash va optimallashtirish",cardSupportDesc:"Ishga tushirilgandan keyingi yordam, samaradorlik auditi, tezlikni optimallashtirish, xavfsizlik yangilanishlari va MB xizmati.",researchAreas:"Tadqiqot yo'nalishlari",threePillars:"Uchta ustun",scientificExecution:"ilmiy bajarilish",pillar1Title:"Yuqori samarali veb-dvigatellar",pillar1Desc:"Edge rendering, kesh qatlamlari va toza modulli arxitektura yordamida soniyadan kam vaqtda yuklanadigan veb-ilovalar yaratish.",pillar2Title:"Moslashuvchan mobil freymvorklar",pillar2Desc:"Silliq 120Hz animatsiyalar, lokal MB va oflayn rejim uchun GPU apparat tezlashuvidan foydalanadigan mobil dasturlar yaratish.",pillar3Title:"Xavfsiz va avtomatlashtirilgan bulut",pillar3Desc:"Tarmoq ekranlari, standart avtorizatsiya va to'liq avtomatlashtirilgan CI/CD bilan himoyalangan avtomatik kengayuvchi bulut klasterlari.",selectedWork:"Tanlangan ishlar",caseStudies:"Tayyor yechimlar",builtSolutions:"keyslari",visitWebsite:"Saytga o'tish",viewCase:"Keysni ko'rish",byNumbers:"Raqamlarda",scaleSpeaks:"O'z-o'zidan gapiradigan",itself:"miqyos",numCardProjects:"Muvaffaqiyatli ishga tushirilgan veb va mobil loyihalar",numCardUptime:"Uptime va yig'ishning ishonchlilik standartlari",numCardEngineers:"Tajribali muhandislar va mahsulot dizaynerlari",numCardSpeed:"Mijozlar saytlari yuklanishining o'rtacha tezlashishi",getInvolved:"Hamkorlik",nextBreakthrough:"Keyingi yutuq",startsYou:"sizdan boshlanadi",ctaDesc:"Sayt yoki mobil ilova g'oyangiz bormi? Jamoamiz loyihalash, dizayn va iOS, Android hamda Web platformalarida ishga tushirishni o'z zimmasiga oladi.",footerCopy:"Sifat • Intellekt • Tajriba. Barcha huquqlar himoyalangan.",establishIdentity:"Shaxsni tasdiqlash",authSubtitle:"Xavfsiz ulanishni avtorizatsiya qilish uchun ishlab chiquvchi profilini yarating va avatar tanlang.",fullName:"To'liq ism",emailAddr:"Elektron pochta",chooseAvatar:"Avatar tanlang",password:"Parol",createAccount:"Hisob yaratish",newWorkspace:"Yangi ish maydoni",workspaceSubtitle:"Loyiha talablarini tavsiflang va parametrlarini ko'rsating. Bizning Sun'iy intellekt smetani hisoblab beradi.",workspaceName:"Ish maydoni nomi",envEngine:"Atrof-muhit dvigateli",projRequirements:"Loyiha talablari (AI-tahlil)",analyzeReqs:"Talablarni tahlil qilish",neuralAssessment:"Neyrotahlil",radarSubtitle:"Bizning neyrotahlil tizimimiz talablarni o'rganib chiqib, resurslarni baholamoqda.",aiCostBreakdown:"AI smetasi",aiSubtitle:"Sizning talablaringiz asosida Sun'iy intellekt quyidagi hisob-smetani shakllantirdi.",projectTarget:"Loyiha maqsadi",timeline:"Bajarilish muddati",itemizedTasks:"Smeta vazifalari",invoicedTotal:"Jami to'lov",proceedCheckout:"To'lovga o'tish",confirmPayment:"To'lovni tasdiqlash",p2pSender:"Koyangiz yoki telefon raqamingiz (Yuboruvchi)",p2pReceipt:"Tranzaksiya ID / Chek kodi (Click / Payme)",workspaceActive:"Ish maydoni yaratildi!",receiptEmailed:"Tranzaksiya tasdiqlandi. Elektron chek emailingizga yuborildi.",amountPaid:"To'lov summasi:",method:"Uslub:",status:"Holat:",online:"Faol",successFooter:"To'lov tafsilotlari yuborildi. Biz chek ID-sini tekshirib, 15 daqiqa ichida siz bilan bog'lanamiz.",returnHome:"Bosh sahifaga qaytish",connectWorkspace:"Ish maydoniga o'tish",connectingAuth:"Avtorizatsiya shlyuziga ulanish...",creatingProfile:"Xavfsiz profil yaratish...",syncingAvatar:"Avatarni sinxronlashtirish...",accessGranted:"Ruxsat berildi!",authorized:"Avtorizatsiyadan o'tdi",authPrompt:"Endi siz birinchi ish maydoningizni yaratishga o'tishingiz mumkin."}},dl=Xd(t=>({lang:hy(),setLang:e=>t({lang:e})}));function fy({isOpen:t,onClose:e}){var xe;const[n,i]=me.useState(1),[r,s]=me.useState(""),[a,o]=me.useState(""),[l,u]=me.useState(""),[f,p]=me.useState(un[0].id),[h,g]=me.useState({}),[_,y]=me.useState(""),[m,d]=me.useState(""),[x,v]=me.useState("Cloud Sandbox"),[E,w]=me.useState(""),[C,R]=me.useState(null),[k,S]=me.useState([]),[M,I]=me.useState([]),[H,ie]=me.useState("uzcard"),[P,j]=me.useState(""),[$,B]=me.useState(""),[N,O]=me.useState(!1),D=dl(Z=>Z.lang),z=qd[D],Q=pr(Z=>Z.isLoggedIn),V=pr(Z=>Z.user),K=pr(Z=>Z.login),J=me.useRef(null);me.useEffect(()=>{if(!t){const Z=setTimeout(()=>{i(1),s(""),o(""),u(""),p(un[0].id),g({}),d(""),v("Cloud Sandbox"),w(""),R(null),S([]),I([]),ie("humo"),j(""),B(""),O(!1)},500);return()=>clearTimeout(Z)}},[t]),me.useEffect(()=>{const Z=ee=>{t&&J.current&&!J.current.contains(ee.target)&&ee.target.classList.contains("project-sidebar-overlay")&&e()};return document.addEventListener("mousedown",Z),()=>document.removeEventListener("mousedown",Z)},[t,e]),me.useEffect(()=>{if(n==="ai_analysis"){S([]);const Z={en:["Initializing QIX Intelligence Engine...","Parsing architectural description notes...","Scanning specifications for core components...",`Keywords matched for [${x}] node...`,"Running deep workload analysis on edge cluster...","Compiling microservices and compute resource cost...","AI Analysis complete! Generating invoice..."],ru:["Инициализация интеллектуального движка QIX...","Парсинг примечаний по архитектуре проекта...","Сканирование спецификаций для ключевых компонентов...",`Ключевые слова сопоставлены для узла [${x}]...`,"Глубокий анализ нагрузок на пограничный кластер...","Компиляция стоимости микросервисов и ресурсов...","Анализ завершен! Создание сметы..."],uz:["QIX sun'iy intellekt tizimi yuklanmoqda...","Loyiha arxitekturasi tahlil qilinmoqda...","Asosiy komponentlar spetsifikatsiyasi o'rganilmoqda...",`[${x}] tuguni uchun kalit so'zlar mos keldi...`,"Klasterdagi yuklamaning chuqur tahlili boshlandi...","Mikroxizmatlar va resurslar narxi hisoblanmoqda...","Tahlil yakunlandi! Smeta shakllantirilmoqda..."]}[D];let ee=0;const pe=setInterval(()=>{if(ee<Z.length)S(he=>[...he,Z[ee]]),ee++;else{clearInterval(pe);const he=setInterval(()=>{C&&(clearInterval(he),i("invoice"))},100)}},600);return()=>clearInterval(pe)}},[n,x,C,D]),me.useEffect(()=>{if(n==="processing_payment"){I([]);const Z={en:["Connecting to secure payment gateway...","Locating transaction in Humo/Uzcard P2P ledger...","Verifying transfer reference ID with Click/Payme...","Confirming deposit to QIX Technologies vault...","Payment authorized. Transmitting invoice copy...","Initializing Sandbox container deploy context..."],ru:["Подключение к шлюзу авторизации платежей...","Поиск транзакции в реестре Humo/Uzcard...","Проверка ID перевода в базе Click/Payme...","Подтверждение зачисления на счет QIX Technologies...","Платеж авторизован. Отправка копии чека...","Инициализация контейнера песочницы..."],uz:["To'lov shlyuziga ulanish o'rnatilmoqda...","Tranzaksiyani Humo/Uzcard reestridan izlash...","Click/Payme bazasida o'tkazma ID-sini tekshirish...","QIX Technologies hisobiga pul kelganini tasdiqlash...","To'lov tasdiqlandi. Elektron chekni yuborish...","Loyiha konteyneri ishga tushirilmoqda..."]}[D];let ee=0;const pe=setInterval(()=>{ee<Z.length?(I(he=>[...he,Z[ee]]),ee++):(clearInterval(pe),setTimeout(()=>{i(3)},600))},600);return()=>clearInterval(pe)}},[n,D]);const fe=(Z,ee)=>{const pe=Z.trim().toLowerCase(),he=[];let A=15e4;pe.length<5?(he.push({name:`Basic Sandbox Allocation (${ee})`,price:1e5}),A+=1e5):((pe.includes("design")||pe.includes("ui")||pe.includes("ux")||pe.includes("figma")||pe.includes("interface"))&&(he.push({name:"Figma UI/UX Design & Prototyping",price:45e4}),A+=45e4),(pe.includes("database")||pe.includes("db")||pe.includes("sql")||pe.includes("mongo")||pe.includes("data")||pe.includes("backend"))&&(he.push({name:"High-Performance Database Node Setup",price:6e5}),A+=6e5),(pe.includes("mobile")||pe.includes("app")||pe.includes("ios")||pe.includes("android")||pe.includes("phone"))&&(he.push({name:"Mobile Frame Native Deployment",price:9e5}),A+=9e5),(pe.includes("secure")||pe.includes("security")||pe.includes("auth")||pe.includes("crypto")||pe.includes("login"))&&(he.push({name:"Cryptographic Authorization Gateway",price:65e4}),A+=65e4),he.length<2&&(he.push({name:"Core API Routing & Endpoint Infrastructure",price:4e5}),A+=4e5),he.push({name:`Edge CD Pipeline (${ee})`,price:1e5}),A+=1e5);const T=new Intl.NumberFormat("uz-UZ",{style:"currency",currency:"UZS",maximumFractionDigits:0}).format(A);R({tasks:he.map(G=>({...G,price:new Intl.NumberFormat("uz-UZ",{style:"currency",currency:"UZS",maximumFractionDigits:0}).format(G.price)})),totalPriceRaw:A,totalPrice:T,timeline:A>12e5?"14 Days":"7 Days"})},de=Z=>{navigator.clipboard.writeText(Z),O(!0),setTimeout(()=>O(!1),2e3)},Re=Z=>{Z.preventDefault();const ee={};if(r.trim()||(ee.name=D==="en"?"Full name is required":D==="uz"?"To'liq ism kiritilishi shart":"Имя обязательно"),a?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a)||(ee.email=D==="en"?"Invalid email format":D==="uz"?"Email formati noto'g'ri":"Неверный формат email"):ee.email=D==="en"?"Email is required":D==="uz"?"Email kiritilishi shart":"Email обязателен",l?l.length<6&&(ee.password=D==="en"?"At least 6 characters":D==="uz"?"Kamida 6 ta belgi":"Не менее 6 символов"):ee.password=D==="en"?"Password is required":D==="uz"?"Parol kiritilishi shart":"Пароль обязателен",Object.keys(ee).length>0){g(ee);return}g({}),i(2),y(z.connectingAuth),setTimeout(()=>{y(z.creatingProfile)},600),setTimeout(()=>{y(z.syncingAvatar)},1200),setTimeout(()=>{const he=un.find(T=>T.id===f)||un[0],A=ds(he.colors);K(a,r.trim(),A),i(3)},1800)},Ce=Z=>{Z.preventDefault();const ee={};if(m.trim()||(ee.projectName=D==="en"?"Project name is required":D==="uz"?"Loyiha nomi kiritilishi shart":"Имя проекта обязательно"),Object.keys(ee).length>0){g(ee);return}g({}),i("ai_analysis"),R(null),fetch("/api/analyze",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({projectName:m,projectType:x,projectNotes:E})}).then(pe=>pe.json()).then(pe=>{const he=pe.tasks.map(T=>{let G=T.price;return typeof T.price=="number"&&(G=new Intl.NumberFormat("uz-UZ",{style:"currency",currency:"UZS",maximumFractionDigits:0}).format(T.price)),{name:T.name,price:G}});let A=pe.totalPrice;typeof pe.totalPrice=="number"&&(A=new Intl.NumberFormat("uz-UZ",{style:"currency",currency:"UZS",maximumFractionDigits:0}).format(pe.totalPrice)),R({tasks:he,totalPriceRaw:typeof pe.totalPrice=="number"?pe.totalPrice:parseFloat(String(pe.totalPrice).replace(/[^0-9.]/g,"")),totalPrice:A,timeline:pe.timeline||"7 Days"})}).catch(pe=>{console.error("AI Analysis API failed, using fallback:",pe),fe(E,x)})},ne=Z=>{Z.preventDefault();const ee={};if(P.trim()||(ee.senderInfo=D==="en"?"Enter sender info":D==="uz"?"Yuboruvchi ma'lumotini kiriting":"Введите данные отправителя"),$.trim()||(ee.transactionId=D==="en"?"Enter receipt ID":D==="uz"?"Chek kodi kiritilishi shart":"Введите код чека"),Object.keys(ee).length>0){g(ee);return}g({}),i("processing_payment");const pe=C.tasks.map(he=>`${he.name}: ${he.price}`).join(", ");fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({access_key:"6b251218-8d3a-4b5f-8227-259b0c552263",subject:`💳 PAID QIX Project: ${m} (${C.totalPrice})`,from_name:"QIX Technologies UZS Billing Gateway",client_name:V?V.name:"Authorized Client",client_email:V?V.email:"billing@qix.tech",workspace_name:`qix-sandbox-${m.toLowerCase().replace(/\s+/g,"-")}`,engine_type:x,total_invoiced:C.totalPrice,estimated_timeline:C.timeline,invoice_items:pe,payment_status:`PAID (Simulated P2P ${H.toUpperCase()} Transfer)`,sender_card_or_phone:P,click_payme_receipt_id:$,notes:E||"No notes provided."})}).catch(he=>console.error("Failed to dispatch payment notification:",he))},te="5614 6835 1781 0909",U="BADALBAEV.A",Ie=te;return c.jsx("div",{className:`project-sidebar-overlay ${t?"open":""}`,children:c.jsxs("div",{ref:J,className:`project-sidebar ${t?"open":""}`,children:[c.jsx("button",{className:"project-sidebar-close",onClick:e,"aria-label":"Close sidebar",children:c.jsx("svg",{viewBox:"0 0 24 24",width:"24",height:"24",children:c.jsx("path",{d:"M18 6 6 18M6 6l12 12",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),c.jsxs("div",{className:"project-sidebar-inner",children:[n===1&&c.jsx(c.Fragment,{children:Q?c.jsxs("div",{className:"sidebar-step-container",children:[c.jsxs("div",{className:"sidebar-profile-header",children:[c.jsx("img",{className:"sidebar-profile-avatar",src:V.avatar,alt:V.name}),c.jsxs("div",{children:[c.jsx("h4",{className:"sidebar-profile-name",children:V.name}),c.jsx("p",{className:"sidebar-profile-email",children:V.email})]})]}),c.jsx("h3",{className:"sidebar-title font-instrument",style:{marginTop:"20px"},children:z.newWorkspace}),c.jsx("p",{className:"sidebar-subtitle",children:z.workspaceSubtitle}),c.jsxs("form",{onSubmit:Ce,className:"sidebar-form",children:[c.jsxs("div",{className:"input-group",children:[c.jsx("label",{htmlFor:"proj-name",children:z.workspaceName}),c.jsx("input",{type:"text",id:"proj-name",placeholder:"my-quantum-engine",value:m,onChange:Z=>d(Z.target.value),className:h.projectName?"input-error":""}),h.projectName&&c.jsx("span",{className:"error-message-text",children:h.projectName})]}),c.jsxs("div",{className:"input-group",children:[c.jsx("label",{htmlFor:"proj-type",children:z.envEngine}),c.jsxs("select",{id:"proj-type",value:x,onChange:Z=>v(Z.target.value),style:{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"12px",padding:"14px 18px",color:"#fff",fontSize:"14px",fontFamily:"inherit",width:"100%",outline:"none",cursor:"pointer"},children:[c.jsx("option",{value:"Cloud Sandbox",style:{background:"#0a0a0f"},children:"Cloud Sandbox (General)"}),c.jsx("option",{value:"Quantum Engine",style:{background:"#0a0a0f"},children:"Quantum Simulator Node"}),c.jsx("option",{value:"AI Synthesis Node",style:{background:"#0a0a0f"},children:"AI LLM Training Kernel"})]})]}),c.jsxs("div",{className:"input-group",children:[c.jsx("label",{htmlFor:"proj-notes",children:z.projRequirements}),c.jsx("textarea",{id:"proj-notes",placeholder:D==="en"?"Example: I need Figma UI/UX, MongoDB, and deployment pipeline...":D==="uz"?"Namuna: Figma UI/UX dizayn, MongoDB va deploy quvuri kerak...":"Пример: Нужен дизайн в Figma, база данных MongoDB, и деплой проекта...",rows:"4",value:E,onChange:Z=>w(Z.target.value),style:{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"12px",padding:"14px 18px",color:"#fff",fontSize:"14px",fontFamily:"inherit",width:"100%",outline:"none",resize:"none"}})]}),c.jsx("button",{type:"submit",className:"sidebar-submit-btn",style:{marginTop:"16px"},children:c.jsxs("span",{className:"btn-content-inner",children:[c.jsxs("span",{className:"btn-slide-item",children:[c.jsx("span",{children:z.analyzeReqs}),c.jsx("svg",{className:"btn-arrow",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:c.jsx("path",{d:"M3 8h10M9 4l4 4-4 4"})})]}),c.jsxs("span",{className:"btn-slide-item btn-slide-item-hover",children:[c.jsx("span",{children:z.analyzeReqs}),c.jsx("svg",{className:"btn-arrow",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:c.jsx("path",{d:"M3 8h10M9 4l4 4-4 4"})})]})]})})]})]}):c.jsxs("div",{className:"sidebar-step-container",children:[c.jsx("div",{className:"sidebar-decor-icon",children:"✦"}),c.jsx("h3",{className:"sidebar-title font-instrument",children:z.establishIdentity}),c.jsx("p",{className:"sidebar-subtitle",children:z.authSubtitle}),c.jsxs("form",{onSubmit:Re,className:"sidebar-form",children:[c.jsxs("div",{className:"input-group",children:[c.jsx("label",{htmlFor:"auth-name",children:z.fullName}),c.jsx("input",{type:"text",id:"auth-name",placeholder:"Alex Rivera",value:r,onChange:Z=>s(Z.target.value),className:h.name?"input-error":""}),h.name&&c.jsx("span",{className:"error-message-text",children:h.name})]}),c.jsxs("div",{className:"input-group",children:[c.jsx("label",{htmlFor:"auth-email",children:z.emailAddr}),c.jsx("input",{type:"email",id:"auth-email",placeholder:"alex@gmail.com",value:a,onChange:Z=>o(Z.target.value),className:h.email?"input-error":""}),h.email&&c.jsx("span",{className:"error-message-text",children:h.email})]}),c.jsxs("div",{className:"input-group",children:[c.jsx("label",{children:z.chooseAvatar}),c.jsx("div",{className:"avatar-selection-grid",style:{marginTop:"8px",marginBottom:"8px"},children:un.map(Z=>{const ee={background:`linear-gradient(135deg, ${Z.colors[0]} 0%, ${Z.colors[1]} 100%)`};return c.jsx("button",{type:"button",className:`avatar-option-btn ${f===Z.id?"active":""}`,style:ee,onClick:()=>p(Z.id),"aria-label":Z.name,title:Z.name},Z.id)})})]}),c.jsxs("div",{className:"input-group",children:[c.jsx("label",{htmlFor:"auth-pass",children:z.password}),c.jsx("input",{type:"password",id:"auth-pass",placeholder:"••••••••",value:l,onChange:Z=>u(Z.target.value),className:h.password?"input-error":""}),h.password&&c.jsx("span",{className:"error-message-text",children:h.password})]}),c.jsx("button",{type:"submit",className:"sidebar-submit-btn",children:c.jsxs("span",{className:"btn-content-inner",children:[c.jsxs("span",{className:"btn-slide-item",children:[c.jsx("span",{children:z.createAccount}),c.jsx("svg",{className:"btn-arrow",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:c.jsx("path",{d:"M3 8h10M9 4l4 4-4 4"})})]}),c.jsxs("span",{className:"btn-slide-item btn-slide-item-hover",children:[c.jsx("span",{children:z.createAccount}),c.jsx("svg",{className:"btn-arrow",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:c.jsx("path",{d:"M3 8h10M9 4l4 4-4 4"})})]})]})})]})]})}),n==="ai_analysis"&&c.jsxs("div",{className:"sidebar-step-container",children:[c.jsx("h3",{className:"sidebar-title font-instrument",children:z.neuralAssessment}),c.jsx("p",{className:"sidebar-subtitle",children:z.radarSubtitle}),c.jsxs("div",{className:"ai-analysis-radar",children:[c.jsx("div",{className:"radar-ring"}),c.jsx("div",{className:"radar-sweep"}),c.jsx("div",{className:"radar-core"})]}),c.jsx("div",{className:"analysis-log-container",children:k.map((Z,ee)=>c.jsxs("div",{className:"analysis-log-line",children:[c.jsx("span",{style:{color:"#a855f7",marginRight:"6px"},children:">"}),Z]},ee))})]}),n==="invoice"&&C&&c.jsxs("div",{className:"sidebar-step-container",children:[c.jsx("h3",{className:"sidebar-title font-instrument",children:z.aiCostBreakdown}),c.jsx("p",{className:"sidebar-subtitle",children:z.aiSubtitle}),c.jsxs("div",{className:"invoice-container",children:[c.jsxs("div",{className:"invoice-header-row",children:[c.jsxs("div",{children:[c.jsx("span",{className:"invoice-label",children:z.projectTarget}),c.jsx("div",{className:"invoice-val",children:m})]}),c.jsxs("div",{style:{textAlign:"right"},children:[c.jsx("span",{className:"invoice-label",children:z.timeline}),c.jsx("div",{className:"invoice-val",children:C.timeline})]})]}),c.jsxs("div",{className:"invoice-task-list",children:[c.jsx("span",{className:"invoice-label",children:z.itemizedTasks}),C.tasks.map((Z,ee)=>c.jsxs("div",{className:"invoice-task-item",children:[c.jsx("span",{className:"invoice-task-name",children:Z.name}),c.jsx("span",{className:"invoice-task-price",children:Z.price})]},ee))]}),c.jsxs("div",{className:"invoice-total-row",children:[c.jsxs("div",{children:[c.jsx("span",{className:"invoice-label",children:z.invoicedTotal}),c.jsx("p",{style:{fontSize:"11px",color:"rgba(255, 255, 255, 0.4)"},children:D==="en"?"Commission 0%":D==="uz"?"Komissiya 0%":"Комиссия 0%"})]}),c.jsx("div",{className:"invoice-total-price",children:C.totalPrice})]})]}),c.jsx("button",{className:"sidebar-submit-btn",onClick:()=>i("checkout"),children:c.jsxs("span",{className:"btn-content-inner",children:[c.jsxs("span",{className:"btn-slide-item",children:[c.jsx("span",{children:z.proceedCheckout}),c.jsx("svg",{className:"btn-arrow",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:c.jsx("path",{d:"M3 8h10M9 4l4 4-4 4"})})]}),c.jsxs("span",{className:"btn-slide-item btn-slide-item-hover",children:[c.jsx("span",{children:z.proceedCheckout}),c.jsx("svg",{className:"btn-arrow",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:c.jsx("path",{d:"M3 8h10M9 4l4 4-4 4"})})]})]})})]}),n==="checkout"&&C&&c.jsxs("div",{className:"sidebar-step-container",children:[c.jsx("h3",{className:"sidebar-title font-instrument",children:"Uzcard P2P"}),c.jsxs("p",{className:"sidebar-subtitle",style:{marginBottom:"16px"},children:[D==="en"?"Transfer ":D==="uz"?"O'tkazing: ":"Переведите ",c.jsx("strong",{children:C.totalPrice}),D==="en"?" to the card below via local mobile banking (Uzcard) and paste your transaction receipt code.":D==="uz"?" quyidagi kartaga va tasdiqlash uchun chek ID-sini kiriting.":" на карту ниже через Click/Payme и вставьте код чека для подтверждения."]}),c.jsxs("div",{className:"checkout-card-preview uzcard-theme",children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start"},children:[c.jsx("div",{className:"card-preview-chip"}),c.jsx("span",{style:{fontSize:"13px",fontWeight:"800",letterSpacing:"1px",color:"#fff"},children:"UZCARD"})]}),c.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:"16px"},children:[c.jsx("div",{className:"card-preview-number",style:{marginTop:0,fontSize:"18px"},children:Ie}),c.jsx("button",{type:"button",onClick:()=>de(Ie.replace(/\s/g,"")),style:{background:"rgba(255,255,255,0.1)",border:"1px solid rgba(255,255,255,0.2)",borderRadius:"6px",color:"#fff",fontSize:"10px",padding:"4px 8px",cursor:"pointer",transition:"all 0.2s"},children:N?"Copied!":"Copy"})]}),c.jsxs("div",{className:"card-preview-bottom",children:[c.jsxs("div",{children:[c.jsx("div",{className:"card-preview-holder",children:D==="en"?"Recipient":D==="uz"?"Qabul qiluvchi":"Получатель"}),c.jsx("div",{style:{fontSize:"13px",fontWeight:"600"},children:U})]}),c.jsxs("div",{style:{textAlign:"right"},children:[c.jsx("div",{className:"card-preview-holder",children:D==="en"?"Currency":D==="uz"?"Valyuta":"Валюта"}),c.jsx("div",{className:"card-preview-expiry",style:{fontSize:"12px",fontWeight:"700"},children:"UZS (so'm)"})]})]})]}),c.jsxs("form",{onSubmit:ne,className:"sidebar-form",children:[c.jsxs("div",{className:"input-group",children:[c.jsx("label",{htmlFor:"p2p-sender",children:z.p2pSender}),c.jsx("input",{type:"text",id:"p2p-sender",placeholder:D==="en"?"9860 •••• •••• •••• or phone number":D==="uz"?"9860 •••• •••• •••• yoki telefon":"9860 •••• •••• •••• или +998...",value:P,onChange:Z=>j(Z.target.value),className:h.senderInfo?"input-error":""}),h.senderInfo&&c.jsx("span",{className:"error-message-text",children:h.senderInfo})]}),c.jsxs("div",{className:"input-group",children:[c.jsx("label",{htmlFor:"p2p-receipt",children:z.p2pReceipt}),c.jsx("input",{type:"text",id:"p2p-receipt",placeholder:D==="en"?"Example: 582914839":D==="uz"?"Namuna: 582914839":"Пример: 582914839",value:$,onChange:Z=>B(Z.target.value),className:h.transactionId?"input-error":""}),h.transactionId&&c.jsx("span",{className:"error-message-text",children:h.transactionId})]}),c.jsx("button",{type:"submit",className:"sidebar-submit-btn",style:{marginTop:"16px"},children:c.jsxs("span",{className:"btn-content-inner",children:[c.jsxs("span",{className:"btn-slide-item",children:[c.jsx("span",{children:z.confirmPayment}),c.jsx("svg",{className:"btn-arrow",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:c.jsx("path",{d:"M3 8h10M9 4l4 4-4 4"})})]}),c.jsxs("span",{className:"btn-slide-item btn-slide-item-hover",children:[c.jsx("span",{children:z.confirmPayment}),c.jsx("svg",{className:"btn-arrow",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:c.jsx("path",{d:"M3 8h10M9 4l4 4-4 4"})})]})]})})]})]}),n==="processing_payment"&&c.jsxs("div",{className:"sidebar-step-container",children:[c.jsx("h3",{className:"sidebar-title font-instrument",children:D==="en"?"Payment Verification":D==="uz"?"To'lovni tekshirish":"Проверка платежа"}),c.jsx("p",{className:"sidebar-subtitle",children:D==="en"?"Verifying your P2P receipt in Click/Payme network registry...":D==="uz"?"Tranzaksiyani Click/Payme tarmog'ida tekshirmoqdamiz...":"Проверка P2P транзакции в реестре Click/Payme. Пожалуйста, подождите."}),c.jsx("div",{className:"sidebar-loading-container",style:{margin:"16px 0 32px"},children:c.jsxs("div",{className:"loading-spinner-wrap",children:[c.jsx("div",{className:"pulse-loader-ring",style:{borderColor:"rgba(168, 85, 247, 0.4) transparent"}}),c.jsx("div",{className:"pulse-loader-core",style:{background:"#a855f7"}})]})}),c.jsx("div",{className:"analysis-log-container",style:{color:"#22c55e"},children:M.map((Z,ee)=>c.jsxs("div",{className:"analysis-log-line",children:[c.jsx("span",{style:{color:"#22c55e",marginRight:"6px"},children:"✓"}),Z]},ee))})]}),n===2&&c.jsxs("div",{className:"sidebar-step-container sidebar-loading-container",children:[c.jsxs("div",{className:"loading-spinner-wrap",children:[c.jsx("div",{className:"pulse-loader-ring"}),c.jsx("div",{className:"pulse-loader-core"})]}),c.jsx("h4",{className:"loading-title",children:D==="en"?"Establishing Connection":D==="uz"?"Ulanish o'rnatilmoqda":"Установка соединения"}),c.jsx("p",{className:"loading-subtitle",children:_})]}),n===3&&c.jsx(c.Fragment,{children:m?c.jsxs("div",{className:"sidebar-step-container sidebar-success-container",children:[c.jsx("div",{className:"success-icon-wrap",children:c.jsx("svg",{viewBox:"0 0 24 24",width:"48",height:"48",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:c.jsx("polyline",{points:"20 6 9 17 4 12"})})}),c.jsx("h3",{className:"sidebar-title font-instrument",style:{marginTop:"24px"},children:z.workspaceActive}),c.jsx("p",{className:"sidebar-subtitle",children:z.receiptEmailed}),C&&c.jsxs("div",{className:"success-details-card",children:[c.jsxs("div",{className:"success-details-row",children:[c.jsx("span",{children:"Workspace:"}),c.jsxs("strong",{children:["qix-sandbox-",m.toLowerCase().replace(/\s+/g,"-")]})]}),c.jsxs("div",{className:"success-details-row",children:[c.jsx("span",{children:"Engine:"}),c.jsx("strong",{children:x})]}),c.jsxs("div",{className:"success-details-row",children:[c.jsx("span",{children:z.amountPaid}),c.jsx("strong",{style:{color:"#22c55e",fontFamily:"monospace"},children:C.totalPrice})]}),c.jsxs("div",{className:"success-details-row",children:[c.jsx("span",{children:z.method}),c.jsxs("strong",{children:["P2P (",H.toUpperCase(),")"]})]}),c.jsxs("div",{className:"success-details-row",children:[c.jsx("span",{children:z.status}),c.jsx("strong",{className:"status-badge-active",children:z.online})]})]}),c.jsx("p",{className:"success-footer-text",children:z.successFooter}),c.jsx("button",{className:"sidebar-close-btn",onClick:e,children:z.returnHome})]}):c.jsxs("div",{className:"sidebar-step-container sidebar-success-container",children:[c.jsx("div",{className:"success-icon-wrap",children:c.jsx("svg",{viewBox:"0 0 24 24",width:"48",height:"48",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:c.jsx("polyline",{points:"20 6 9 17 4 12"})})}),c.jsx("h3",{className:"sidebar-title font-instrument",style:{marginTop:"24px"},children:z.accessGranted}),c.jsx("p",{className:"sidebar-subtitle",children:D==="en"?`Developer profile ${r} has been successfully registered.`:D==="uz"?`Dasturchi profili ${r} muvaffaqiyatli ro'yxatdan o'tdi.`:`Профиль разработчика ${r} был успешно зарегистрирован.`}),c.jsxs("div",{className:"success-details-card",children:[c.jsxs("div",{className:"success-details-row",style:{alignItems:"center"},children:[c.jsx("span",{children:"Identity:"}),c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[c.jsx("img",{className:"sidebar-profile-avatar",src:ds(((xe=un.find(Z=>Z.id===f))==null?void 0:xe.colors)||un[0].colors),alt:r,style:{width:"24px",height:"24px",margin:0}}),c.jsx("strong",{children:r})]})]}),c.jsxs("div",{className:"success-details-row",children:[c.jsx("span",{children:"Access:"}),c.jsx("strong",{className:"status-badge-active",children:z.authorized})]})]}),c.jsx("p",{className:"success-footer-text",style:{marginBottom:"24px"},children:z.authPrompt}),c.jsx("button",{className:"sidebar-close-btn",onClick:()=>{i(1),g({})},style:{background:"#fff",color:"#0a0a0f",border:"none"},children:z.connectWorkspace})]})})]})]})})}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Yd="160",py=0,wf=1,my=2,pv=1,gy=2,ni=3,qi=0,rn=1,si=2,Hi=0,hs=1,hl=2,Af=3,bf=4,vy=5,or=100,_y=101,xy=102,Cf=103,Rf=104,yy=200,Sy=201,My=202,Ey=203,Hu=204,Gu=205,Ty=206,wy=207,Ay=208,by=209,Cy=210,Ry=211,Ny=212,Py=213,Ly=214,Dy=0,Iy=1,Uy=2,fl=3,Fy=4,ky=5,Oy=6,zy=7,mv=0,By=1,jy=2,Gi=0,Hy=1,Gy=2,Vy=3,Wy=4,Xy=5,qy=6,gv=300,Ms=301,Es=302,Vu=303,Wu=304,kl=306,Xu=1e3,Fn=1001,qu=1002,qt=1003,Nf=1004,xc=1005,Mn=1006,Yy=1007,Ta=1008,Vi=1009,$y=1010,Ky=1011,$d=1012,vv=1013,Pi=1014,Li=1015,wa=1016,_v=1017,xv=1018,mr=1020,Zy=1021,kn=1023,Qy=1024,Jy=1025,gr=1026,Ts=1027,eS=1028,yv=1029,tS=1030,Sv=1031,Mv=1033,yc=33776,Sc=33777,Mc=33778,Ec=33779,Pf=35840,Lf=35841,Df=35842,If=35843,Ev=36196,Uf=37492,Ff=37496,kf=37808,Of=37809,zf=37810,Bf=37811,jf=37812,Hf=37813,Gf=37814,Vf=37815,Wf=37816,Xf=37817,qf=37818,Yf=37819,$f=37820,Kf=37821,Tc=36492,Zf=36494,Qf=36495,nS=36283,Jf=36284,ep=36285,tp=36286,Tv=3e3,vr=3001,iS=3200,rS=3201,sS=0,aS=1,En="",Pt="srgb",mi="srgb-linear",Kd="display-p3",Ol="display-p3-linear",pl="linear",at="srgb",ml="rec709",gl="p3",Cr=7680,np=519,oS=512,lS=513,cS=514,wv=515,uS=516,dS=517,hS=518,fS=519,ip=35044,rp="300 es",Yu=1035,li=2e3,vl=2001;class Rs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let sp=1234567;const ra=Math.PI/180,Aa=180/Math.PI;function Ns(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ot[t&255]+Ot[t>>8&255]+Ot[t>>16&255]+Ot[t>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[n&63|128]+Ot[n>>8&255]+"-"+Ot[n>>16&255]+Ot[n>>24&255]+Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]).toLowerCase()}function Yt(t,e,n){return Math.max(e,Math.min(n,t))}function Zd(t,e){return(t%e+e)%e}function pS(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function mS(t,e,n){return t!==e?(n-t)/(e-t):0}function sa(t,e,n){return(1-n)*t+n*e}function gS(t,e,n,i){return sa(t,e,1-Math.exp(-n*i))}function vS(t,e=1){return e-Math.abs(Zd(t,e*2)-e)}function _S(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function xS(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function yS(t,e){return t+Math.floor(Math.random()*(e-t+1))}function SS(t,e){return t+Math.random()*(e-t)}function MS(t){return t*(.5-Math.random())}function ES(t){t!==void 0&&(sp=t);let e=sp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function TS(t){return t*ra}function wS(t){return t*Aa}function $u(t){return(t&t-1)===0&&t!==0}function AS(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function _l(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function bS(t,e,n,i,r){const s=Math.cos,a=Math.sin,o=s(n/2),l=a(n/2),u=s((e+i)/2),f=a((e+i)/2),p=s((e-i)/2),h=a((e-i)/2),g=s((i-e)/2),_=a((i-e)/2);switch(r){case"XYX":t.set(o*f,l*p,l*h,o*u);break;case"YZY":t.set(l*h,o*f,l*p,o*u);break;case"ZXZ":t.set(l*p,l*h,o*f,o*u);break;case"XZX":t.set(o*f,l*_,l*g,o*u);break;case"YXY":t.set(l*g,o*f,l*_,o*u);break;case"ZYZ":t.set(l*_,l*g,o*f,o*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Vr(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Vt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const ap={DEG2RAD:ra,RAD2DEG:Aa,generateUUID:Ns,clamp:Yt,euclideanModulo:Zd,mapLinear:pS,inverseLerp:mS,lerp:sa,damp:gS,pingpong:vS,smoothstep:_S,smootherstep:xS,randInt:yS,randFloat:SS,randFloatSpread:MS,seededRandom:ES,degToRad:TS,radToDeg:wS,isPowerOfTwo:$u,ceilPowerOfTwo:AS,floorPowerOfTwo:_l,setQuaternionFromProperEuler:bS,normalize:Vt,denormalize:Vr};class et{constructor(e=0,n=0){et.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,n,i,r,s,a,o,l,u){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,u)}set(e,n,i,r,s,a,o,l,u){const f=this.elements;return f[0]=e,f[1]=r,f[2]=o,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=a,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],u=i[1],f=i[4],p=i[7],h=i[2],g=i[5],_=i[8],y=r[0],m=r[3],d=r[6],x=r[1],v=r[4],E=r[7],w=r[2],C=r[5],R=r[8];return s[0]=a*y+o*x+l*w,s[3]=a*m+o*v+l*C,s[6]=a*d+o*E+l*R,s[1]=u*y+f*x+p*w,s[4]=u*m+f*v+p*C,s[7]=u*d+f*E+p*R,s[2]=h*y+g*x+_*w,s[5]=h*m+g*v+_*C,s[8]=h*d+g*E+_*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],f=e[8];return n*a*f-n*o*u-i*s*f+i*o*l+r*s*u-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],f=e[8],p=f*a-o*u,h=o*l-f*s,g=u*s-a*l,_=n*p+i*h+r*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=p*y,e[1]=(r*u-f*i)*y,e[2]=(o*i-r*a)*y,e[3]=h*y,e[4]=(f*n-r*l)*y,e[5]=(r*s-o*n)*y,e[6]=g*y,e[7]=(i*l-u*n)*y,e[8]=(a*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*a+u*o)+a+e,-r*u,r*l,-r*(-u*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(wc.makeScale(e,n)),this}rotate(e){return this.premultiply(wc.makeRotation(-e)),this}translate(e,n){return this.premultiply(wc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const wc=new We;function Av(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function xl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function CS(){const t=xl("canvas");return t.style.display="block",t}const op={};function aa(t){t in op||(op[t]=!0,console.warn(t))}const lp=new We().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),cp=new We().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),to={[mi]:{transfer:pl,primaries:ml,toReference:t=>t,fromReference:t=>t},[Pt]:{transfer:at,primaries:ml,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Ol]:{transfer:pl,primaries:gl,toReference:t=>t.applyMatrix3(cp),fromReference:t=>t.applyMatrix3(lp)},[Kd]:{transfer:at,primaries:gl,toReference:t=>t.convertSRGBToLinear().applyMatrix3(cp),fromReference:t=>t.applyMatrix3(lp).convertLinearToSRGB()}},RS=new Set([mi,Ol]),Je={enabled:!0,_workingColorSpace:mi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!RS.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=to[e].toReference,r=to[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return to[t].primaries},getTransfer:function(t){return t===En?pl:to[t].transfer}};function fs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Ac(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Rr;class bv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Rr===void 0&&(Rr=xl("canvas")),Rr.width=e.width,Rr.height=e.height;const i=Rr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Rr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=xl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=fs(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(fs(n[i]/255)*255):n[i]=fs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let NS=0;class Cv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:NS++}),this.uuid=Ns(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(bc(r[a].image)):s.push(bc(r[a]))}else s=bc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function bc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?bv.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let PS=0;class pn extends Rs{constructor(e=pn.DEFAULT_IMAGE,n=pn.DEFAULT_MAPPING,i=Fn,r=Fn,s=Mn,a=Ta,o=kn,l=Vi,u=pn.DEFAULT_ANISOTROPY,f=En){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:PS++}),this.uuid=Ns(),this.name="",this.source=new Cv(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof f=="string"?this.colorSpace=f:(aa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=f===vr?Pt:En),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xu:e.x=e.x-Math.floor(e.x);break;case Fn:e.x=e.x<0?0:1;break;case qu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xu:e.y=e.y-Math.floor(e.y);break;case Fn:e.y=e.y<0?0:1;break;case qu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return aa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Pt?vr:Tv}set encoding(e){aa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===vr?Pt:En}}pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=gv;pn.DEFAULT_ANISOTROPY=1;class Lt{constructor(e=0,n=0,i=0,r=1){Lt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],f=l[4],p=l[8],h=l[1],g=l[5],_=l[9],y=l[2],m=l[6],d=l[10];if(Math.abs(f-h)<.01&&Math.abs(p-y)<.01&&Math.abs(_-m)<.01){if(Math.abs(f+h)<.1&&Math.abs(p+y)<.1&&Math.abs(_+m)<.1&&Math.abs(u+g+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(u+1)/2,E=(g+1)/2,w=(d+1)/2,C=(f+h)/4,R=(p+y)/4,k=(_+m)/4;return v>E&&v>w?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=C/i,s=R/i):E>w?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=C/r,s=k/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=R/s,r=k/s),this.set(i,r,s,n),this}let x=Math.sqrt((m-_)*(m-_)+(p-y)*(p-y)+(h-f)*(h-f));return Math.abs(x)<.001&&(x=1),this.x=(m-_)/x,this.y=(p-y)/x,this.z=(h-f)/x,this.w=Math.acos((u+g+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class LS extends Rs{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Lt(0,0,e,n),this.scissorTest=!1,this.viewport=new Lt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(aa("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===vr?Pt:En),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new pn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Cv(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Er extends LS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Rv extends pn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class DS extends pn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class La{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],u=i[r+1],f=i[r+2],p=i[r+3];const h=s[a+0],g=s[a+1],_=s[a+2],y=s[a+3];if(o===0){e[n+0]=l,e[n+1]=u,e[n+2]=f,e[n+3]=p;return}if(o===1){e[n+0]=h,e[n+1]=g,e[n+2]=_,e[n+3]=y;return}if(p!==y||l!==h||u!==g||f!==_){let m=1-o;const d=l*h+u*g+f*_+p*y,x=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){const w=Math.sqrt(v),C=Math.atan2(w,d*x);m=Math.sin(m*C)/w,o=Math.sin(o*C)/w}const E=o*x;if(l=l*m+h*E,u=u*m+g*E,f=f*m+_*E,p=p*m+y*E,m===1-o){const w=1/Math.sqrt(l*l+u*u+f*f+p*p);l*=w,u*=w,f*=w,p*=w}}e[n]=l,e[n+1]=u,e[n+2]=f,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],u=i[r+2],f=i[r+3],p=s[a],h=s[a+1],g=s[a+2],_=s[a+3];return e[n]=o*_+f*p+l*g-u*h,e[n+1]=l*_+f*h+u*p-o*g,e[n+2]=u*_+f*g+o*h-l*p,e[n+3]=f*_-o*p-l*h-u*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,u=o(i/2),f=o(r/2),p=o(s/2),h=l(i/2),g=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=h*f*p+u*g*_,this._y=u*g*p-h*f*_,this._z=u*f*_+h*g*p,this._w=u*f*p-h*g*_;break;case"YXZ":this._x=h*f*p+u*g*_,this._y=u*g*p-h*f*_,this._z=u*f*_-h*g*p,this._w=u*f*p+h*g*_;break;case"ZXY":this._x=h*f*p-u*g*_,this._y=u*g*p+h*f*_,this._z=u*f*_+h*g*p,this._w=u*f*p-h*g*_;break;case"ZYX":this._x=h*f*p-u*g*_,this._y=u*g*p+h*f*_,this._z=u*f*_-h*g*p,this._w=u*f*p+h*g*_;break;case"YZX":this._x=h*f*p+u*g*_,this._y=u*g*p+h*f*_,this._z=u*f*_-h*g*p,this._w=u*f*p-h*g*_;break;case"XZY":this._x=h*f*p-u*g*_,this._y=u*g*p-h*f*_,this._z=u*f*_+h*g*p,this._w=u*f*p+h*g*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],u=n[2],f=n[6],p=n[10],h=i+o+p;if(h>0){const g=.5/Math.sqrt(h+1);this._w=.25/g,this._x=(f-l)*g,this._y=(s-u)*g,this._z=(a-r)*g}else if(i>o&&i>p){const g=2*Math.sqrt(1+i-o-p);this._w=(f-l)/g,this._x=.25*g,this._y=(r+a)/g,this._z=(s+u)/g}else if(o>p){const g=2*Math.sqrt(1+o-i-p);this._w=(s-u)/g,this._x=(r+a)/g,this._y=.25*g,this._z=(l+f)/g}else{const g=2*Math.sqrt(1+p-i-o);this._w=(a-r)/g,this._x=(s+u)/g,this._y=(l+f)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Yt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,u=n._z,f=n._w;return this._x=i*f+a*o+r*u-s*l,this._y=r*f+a*l+s*o-i*u,this._z=s*f+a*u+i*l-r*o,this._w=a*f-i*o-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const g=1-n;return this._w=g*a+n*this._w,this._x=g*i+n*this._x,this._y=g*r+n*this._y,this._z=g*s+n*this._z,this.normalize(),this}const u=Math.sqrt(l),f=Math.atan2(u,o),p=Math.sin((1-n)*f)/u,h=Math.sin(n*f)/u;return this._w=a*p+this._w*h,this._x=i*p+this._x*h,this._y=r*p+this._y*h,this._z=s*p+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,n=0,i=0){q.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(up.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(up.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,u=2*(a*r-o*i),f=2*(o*n-s*r),p=2*(s*i-a*n);return this.x=n+l*u+a*p-o*f,this.y=i+l*f+o*u-s*p,this.z=r+l*p+s*f-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Cc.copy(this).projectOnVector(e),this.sub(Cc)}reflect(e){return this.sub(Cc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Cc=new q,up=new La;class Da{constructor(e=new q(1/0,1/0,1/0),n=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Rn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Rn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Rn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Rn):Rn.fromBufferAttribute(s,a),Rn.applyMatrix4(e.matrixWorld),this.expandByPoint(Rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),no.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),no.copy(i.boundingBox)),no.applyMatrix4(e.matrixWorld),this.union(no)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Rn),Rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(js),io.subVectors(this.max,js),Nr.subVectors(e.a,js),Pr.subVectors(e.b,js),Lr.subVectors(e.c,js),xi.subVectors(Pr,Nr),yi.subVectors(Lr,Pr),Ji.subVectors(Nr,Lr);let n=[0,-xi.z,xi.y,0,-yi.z,yi.y,0,-Ji.z,Ji.y,xi.z,0,-xi.x,yi.z,0,-yi.x,Ji.z,0,-Ji.x,-xi.y,xi.x,0,-yi.y,yi.x,0,-Ji.y,Ji.x,0];return!Rc(n,Nr,Pr,Lr,io)||(n=[1,0,0,0,1,0,0,0,1],!Rc(n,Nr,Pr,Lr,io))?!1:(ro.crossVectors(xi,yi),n=[ro.x,ro.y,ro.z],Rc(n,Nr,Pr,Lr,io))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Zn=[new q,new q,new q,new q,new q,new q,new q,new q],Rn=new q,no=new Da,Nr=new q,Pr=new q,Lr=new q,xi=new q,yi=new q,Ji=new q,js=new q,io=new q,ro=new q,er=new q;function Rc(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){er.fromArray(t,s);const o=r.x*Math.abs(er.x)+r.y*Math.abs(er.y)+r.z*Math.abs(er.z),l=e.dot(er),u=n.dot(er),f=i.dot(er);if(Math.max(-Math.max(l,u,f),Math.min(l,u,f))>o)return!1}return!0}const IS=new Da,Hs=new q,Nc=new q;class zl{constructor(e=new q,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):IS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Hs.subVectors(e,this.center);const n=Hs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Hs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Nc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Hs.copy(e.center).add(Nc)),this.expandByPoint(Hs.copy(e.center).sub(Nc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Qn=new q,Pc=new q,so=new q,Si=new q,Lc=new q,ao=new q,Dc=new q;class Nv{constructor(e=new q,n=new q(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Qn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Qn.copy(this.origin).addScaledVector(this.direction,n),Qn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Pc.copy(e).add(n).multiplyScalar(.5),so.copy(n).sub(e).normalize(),Si.copy(this.origin).sub(Pc);const s=e.distanceTo(n)*.5,a=-this.direction.dot(so),o=Si.dot(this.direction),l=-Si.dot(so),u=Si.lengthSq(),f=Math.abs(1-a*a);let p,h,g,_;if(f>0)if(p=a*l-o,h=a*o-l,_=s*f,p>=0)if(h>=-_)if(h<=_){const y=1/f;p*=y,h*=y,g=p*(p+a*h+2*o)+h*(a*p+h+2*l)+u}else h=s,p=Math.max(0,-(a*h+o)),g=-p*p+h*(h+2*l)+u;else h=-s,p=Math.max(0,-(a*h+o)),g=-p*p+h*(h+2*l)+u;else h<=-_?(p=Math.max(0,-(-a*s+o)),h=p>0?-s:Math.min(Math.max(-s,-l),s),g=-p*p+h*(h+2*l)+u):h<=_?(p=0,h=Math.min(Math.max(-s,-l),s),g=h*(h+2*l)+u):(p=Math.max(0,-(a*s+o)),h=p>0?s:Math.min(Math.max(-s,-l),s),g=-p*p+h*(h+2*l)+u);else h=a>0?-s:s,p=Math.max(0,-(a*h+o)),g=-p*p+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(Pc).addScaledVector(so,h),g}intersectSphere(e,n){Qn.subVectors(e.center,this.origin);const i=Qn.dot(this.direction),r=Qn.dot(Qn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const u=1/this.direction.x,f=1/this.direction.y,p=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),f>=0?(s=(e.min.y-h.y)*f,a=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,a=(e.min.y-h.y)*f),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),p>=0?(o=(e.min.z-h.z)*p,l=(e.max.z-h.z)*p):(o=(e.max.z-h.z)*p,l=(e.min.z-h.z)*p),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Qn)!==null}intersectTriangle(e,n,i,r,s){Lc.subVectors(n,e),ao.subVectors(i,e),Dc.crossVectors(Lc,ao);let a=this.direction.dot(Dc),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Si.subVectors(this.origin,e);const l=o*this.direction.dot(ao.crossVectors(Si,ao));if(l<0)return null;const u=o*this.direction.dot(Lc.cross(Si));if(u<0||l+u>a)return null;const f=-o*Si.dot(Dc);return f<0?null:this.at(f/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Rt{constructor(e,n,i,r,s,a,o,l,u,f,p,h,g,_,y,m){Rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,u,f,p,h,g,_,y,m)}set(e,n,i,r,s,a,o,l,u,f,p,h,g,_,y,m){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=u,d[6]=f,d[10]=p,d[14]=h,d[3]=g,d[7]=_,d[11]=y,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Rt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Dr.setFromMatrixColumn(e,0).length(),s=1/Dr.setFromMatrixColumn(e,1).length(),a=1/Dr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),u=Math.sin(r),f=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const h=a*f,g=a*p,_=o*f,y=o*p;n[0]=l*f,n[4]=-l*p,n[8]=u,n[1]=g+_*u,n[5]=h-y*u,n[9]=-o*l,n[2]=y-h*u,n[6]=_+g*u,n[10]=a*l}else if(e.order==="YXZ"){const h=l*f,g=l*p,_=u*f,y=u*p;n[0]=h+y*o,n[4]=_*o-g,n[8]=a*u,n[1]=a*p,n[5]=a*f,n[9]=-o,n[2]=g*o-_,n[6]=y+h*o,n[10]=a*l}else if(e.order==="ZXY"){const h=l*f,g=l*p,_=u*f,y=u*p;n[0]=h-y*o,n[4]=-a*p,n[8]=_+g*o,n[1]=g+_*o,n[5]=a*f,n[9]=y-h*o,n[2]=-a*u,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const h=a*f,g=a*p,_=o*f,y=o*p;n[0]=l*f,n[4]=_*u-g,n[8]=h*u+y,n[1]=l*p,n[5]=y*u+h,n[9]=g*u-_,n[2]=-u,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const h=a*l,g=a*u,_=o*l,y=o*u;n[0]=l*f,n[4]=y-h*p,n[8]=_*p+g,n[1]=p,n[5]=a*f,n[9]=-o*f,n[2]=-u*f,n[6]=g*p+_,n[10]=h-y*p}else if(e.order==="XZY"){const h=a*l,g=a*u,_=o*l,y=o*u;n[0]=l*f,n[4]=-p,n[8]=u*f,n[1]=h*p+y,n[5]=a*f,n[9]=g*p-_,n[2]=_*p-g,n[6]=o*f,n[10]=y*p+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(US,e,FS)}lookAt(e,n,i){const r=this.elements;return on.subVectors(e,n),on.lengthSq()===0&&(on.z=1),on.normalize(),Mi.crossVectors(i,on),Mi.lengthSq()===0&&(Math.abs(i.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),Mi.crossVectors(i,on)),Mi.normalize(),oo.crossVectors(on,Mi),r[0]=Mi.x,r[4]=oo.x,r[8]=on.x,r[1]=Mi.y,r[5]=oo.y,r[9]=on.y,r[2]=Mi.z,r[6]=oo.z,r[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],u=i[12],f=i[1],p=i[5],h=i[9],g=i[13],_=i[2],y=i[6],m=i[10],d=i[14],x=i[3],v=i[7],E=i[11],w=i[15],C=r[0],R=r[4],k=r[8],S=r[12],M=r[1],I=r[5],H=r[9],ie=r[13],P=r[2],j=r[6],$=r[10],B=r[14],N=r[3],O=r[7],D=r[11],z=r[15];return s[0]=a*C+o*M+l*P+u*N,s[4]=a*R+o*I+l*j+u*O,s[8]=a*k+o*H+l*$+u*D,s[12]=a*S+o*ie+l*B+u*z,s[1]=f*C+p*M+h*P+g*N,s[5]=f*R+p*I+h*j+g*O,s[9]=f*k+p*H+h*$+g*D,s[13]=f*S+p*ie+h*B+g*z,s[2]=_*C+y*M+m*P+d*N,s[6]=_*R+y*I+m*j+d*O,s[10]=_*k+y*H+m*$+d*D,s[14]=_*S+y*ie+m*B+d*z,s[3]=x*C+v*M+E*P+w*N,s[7]=x*R+v*I+E*j+w*O,s[11]=x*k+v*H+E*$+w*D,s[15]=x*S+v*ie+E*B+w*z,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],u=e[13],f=e[2],p=e[6],h=e[10],g=e[14],_=e[3],y=e[7],m=e[11],d=e[15];return _*(+s*l*p-r*u*p-s*o*h+i*u*h+r*o*g-i*l*g)+y*(+n*l*g-n*u*h+s*a*h-r*a*g+r*u*f-s*l*f)+m*(+n*u*p-n*o*g-s*a*p+i*a*g+s*o*f-i*u*f)+d*(-r*o*f-n*l*p+n*o*h+r*a*p-i*a*h+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],f=e[8],p=e[9],h=e[10],g=e[11],_=e[12],y=e[13],m=e[14],d=e[15],x=p*m*u-y*h*u+y*l*g-o*m*g-p*l*d+o*h*d,v=_*h*u-f*m*u-_*l*g+a*m*g+f*l*d-a*h*d,E=f*y*u-_*p*u+_*o*g-a*y*g-f*o*d+a*p*d,w=_*p*l-f*y*l-_*o*h+a*y*h+f*o*m-a*p*m,C=n*x+i*v+r*E+s*w;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/C;return e[0]=x*R,e[1]=(y*h*s-p*m*s-y*r*g+i*m*g+p*r*d-i*h*d)*R,e[2]=(o*m*s-y*l*s+y*r*u-i*m*u-o*r*d+i*l*d)*R,e[3]=(p*l*s-o*h*s-p*r*u+i*h*u+o*r*g-i*l*g)*R,e[4]=v*R,e[5]=(f*m*s-_*h*s+_*r*g-n*m*g-f*r*d+n*h*d)*R,e[6]=(_*l*s-a*m*s-_*r*u+n*m*u+a*r*d-n*l*d)*R,e[7]=(a*h*s-f*l*s+f*r*u-n*h*u-a*r*g+n*l*g)*R,e[8]=E*R,e[9]=(_*p*s-f*y*s-_*i*g+n*y*g+f*i*d-n*p*d)*R,e[10]=(a*y*s-_*o*s+_*i*u-n*y*u-a*i*d+n*o*d)*R,e[11]=(f*o*s-a*p*s-f*i*u+n*p*u+a*i*g-n*o*g)*R,e[12]=w*R,e[13]=(f*y*r-_*p*r+_*i*h-n*y*h-f*i*m+n*p*m)*R,e[14]=(_*o*r-a*y*r-_*i*l+n*y*l+a*i*m-n*o*m)*R,e[15]=(a*p*r-f*o*r+f*i*l-n*p*l-a*i*h+n*o*h)*R,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,u=s*a,f=s*o;return this.set(u*a+i,u*o-r*l,u*l+r*o,0,u*o+r*l,f*o+i,f*l-r*a,0,u*l-r*o,f*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,u=s+s,f=a+a,p=o+o,h=s*u,g=s*f,_=s*p,y=a*f,m=a*p,d=o*p,x=l*u,v=l*f,E=l*p,w=i.x,C=i.y,R=i.z;return r[0]=(1-(y+d))*w,r[1]=(g+E)*w,r[2]=(_-v)*w,r[3]=0,r[4]=(g-E)*C,r[5]=(1-(h+d))*C,r[6]=(m+x)*C,r[7]=0,r[8]=(_+v)*R,r[9]=(m-x)*R,r[10]=(1-(h+y))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Dr.set(r[0],r[1],r[2]).length();const a=Dr.set(r[4],r[5],r[6]).length(),o=Dr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Nn.copy(this);const u=1/s,f=1/a,p=1/o;return Nn.elements[0]*=u,Nn.elements[1]*=u,Nn.elements[2]*=u,Nn.elements[4]*=f,Nn.elements[5]*=f,Nn.elements[6]*=f,Nn.elements[8]*=p,Nn.elements[9]*=p,Nn.elements[10]*=p,n.setFromRotationMatrix(Nn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=li){const l=this.elements,u=2*s/(n-e),f=2*s/(i-r),p=(n+e)/(n-e),h=(i+r)/(i-r);let g,_;if(o===li)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===vl)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=li){const l=this.elements,u=1/(n-e),f=1/(i-r),p=1/(a-s),h=(n+e)*u,g=(i+r)*f;let _,y;if(o===li)_=(a+s)*p,y=-2*p;else if(o===vl)_=s*p,y=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=y,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Dr=new q,Nn=new Rt,US=new q(0,0,0),FS=new q(1,1,1),Mi=new q,oo=new q,on=new q,dp=new Rt,hp=new La;class Bl{constructor(e=0,n=0,i=0,r=Bl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],u=r[5],f=r[9],p=r[2],h=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(Yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,g),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-p,g),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Yt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(h,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-Yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return dp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return hp.setFromEuler(this),this.setFromQuaternion(hp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bl.DEFAULT_ORDER="XYZ";class Pv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let kS=0;const fp=new q,Ir=new La,Jn=new Rt,lo=new q,Gs=new q,OS=new q,zS=new La,pp=new q(1,0,0),mp=new q(0,1,0),gp=new q(0,0,1),BS={type:"added"},jS={type:"removed"};class sn extends Rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kS++}),this.uuid=Ns(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=sn.DEFAULT_UP.clone();const e=new q,n=new Bl,i=new La,r=new q(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Rt},normalMatrix:{value:new We}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ir.setFromAxisAngle(e,n),this.quaternion.multiply(Ir),this}rotateOnWorldAxis(e,n){return Ir.setFromAxisAngle(e,n),this.quaternion.premultiply(Ir),this}rotateX(e){return this.rotateOnAxis(pp,e)}rotateY(e){return this.rotateOnAxis(mp,e)}rotateZ(e){return this.rotateOnAxis(gp,e)}translateOnAxis(e,n){return fp.copy(e).applyQuaternion(this.quaternion),this.position.add(fp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(pp,e)}translateY(e){return this.translateOnAxis(mp,e)}translateZ(e){return this.translateOnAxis(gp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?lo.copy(e):lo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(Gs,lo,this.up):Jn.lookAt(lo,Gs,this.up),this.quaternion.setFromRotationMatrix(Jn),r&&(Jn.extractRotation(r.matrixWorld),Ir.setFromRotationMatrix(Jn),this.quaternion.premultiply(Ir.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(BS)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(jS)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Jn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,e,OS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,zS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,f=l.length;u<f;u++){const p=l[u];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),u=a(e.textures),f=a(e.images),p=a(e.shapes),h=a(e.skeletons),g=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),f.length>0&&(i.images=f),p.length>0&&(i.shapes=p),h.length>0&&(i.skeletons=h),g.length>0&&(i.animations=g),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const u in o){const f=o[u];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}sn.DEFAULT_UP=new q(0,1,0);sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pn=new q,ei=new q,Ic=new q,ti=new q,Ur=new q,Fr=new q,vp=new q,Uc=new q,Fc=new q,kc=new q;let co=!1;class Un{constructor(e=new q,n=new q,i=new q){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Pn.subVectors(e,n),r.cross(Pn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Pn.subVectors(r,n),ei.subVectors(i,n),Ic.subVectors(e,n);const a=Pn.dot(Pn),o=Pn.dot(ei),l=Pn.dot(Ic),u=ei.dot(ei),f=ei.dot(Ic),p=a*u-o*o;if(p===0)return s.set(0,0,0),null;const h=1/p,g=(u*l-o*f)*h,_=(a*f-o*l)*h;return s.set(1-g-_,_,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getUV(e,n,i,r,s,a,o,l){return co===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),co=!0),this.getInterpolation(e,n,i,r,s,a,o,l)}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ti.x),l.addScaledVector(a,ti.y),l.addScaledVector(o,ti.z),l)}static isFrontFacing(e,n,i,r){return Pn.subVectors(i,n),ei.subVectors(e,n),Pn.cross(ei).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),Pn.cross(ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Un.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Un.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return co===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),co=!0),Un.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return Un.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Un.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Un.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Ur.subVectors(r,i),Fr.subVectors(s,i),Uc.subVectors(e,i);const l=Ur.dot(Uc),u=Fr.dot(Uc);if(l<=0&&u<=0)return n.copy(i);Fc.subVectors(e,r);const f=Ur.dot(Fc),p=Fr.dot(Fc);if(f>=0&&p<=f)return n.copy(r);const h=l*p-f*u;if(h<=0&&l>=0&&f<=0)return a=l/(l-f),n.copy(i).addScaledVector(Ur,a);kc.subVectors(e,s);const g=Ur.dot(kc),_=Fr.dot(kc);if(_>=0&&g<=_)return n.copy(s);const y=g*u-l*_;if(y<=0&&u>=0&&_<=0)return o=u/(u-_),n.copy(i).addScaledVector(Fr,o);const m=f*_-g*p;if(m<=0&&p-f>=0&&g-_>=0)return vp.subVectors(s,r),o=(p-f)/(p-f+(g-_)),n.copy(r).addScaledVector(vp,o);const d=1/(m+y+h);return a=y*d,o=h*d,n.copy(i).addScaledVector(Ur,a).addScaledVector(Fr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Lv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ei={h:0,s:0,l:0},uo={h:0,s:0,l:0};function Oc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ye{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Je.workingColorSpace){return this.r=e,this.g=n,this.b=i,Je.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Je.workingColorSpace){if(e=Zd(e,1),n=Yt(n,0,1),i=Yt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Oc(a,s,e+1/3),this.g=Oc(a,s,e),this.b=Oc(a,s,e-1/3)}return Je.toWorkingColorSpace(this,r),this}setStyle(e,n=Pt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Pt){const i=Lv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fs(e.r),this.g=fs(e.g),this.b=fs(e.b),this}copyLinearToSRGB(e){return this.r=Ac(e.r),this.g=Ac(e.g),this.b=Ac(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pt){return Je.fromWorkingColorSpace(zt.copy(this),e),Math.round(Yt(zt.r*255,0,255))*65536+Math.round(Yt(zt.g*255,0,255))*256+Math.round(Yt(zt.b*255,0,255))}getHexString(e=Pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Je.workingColorSpace){Je.fromWorkingColorSpace(zt.copy(this),n);const i=zt.r,r=zt.g,s=zt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,u;const f=(o+a)/2;if(o===a)l=0,u=0;else{const p=a-o;switch(u=f<=.5?p/(a+o):p/(2-a-o),a){case i:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-i)/p+2;break;case s:l=(i-r)/p+4;break}l/=6}return e.h=l,e.s=u,e.l=f,e}getRGB(e,n=Je.workingColorSpace){return Je.fromWorkingColorSpace(zt.copy(this),n),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=Pt){Je.fromWorkingColorSpace(zt.copy(this),e);const n=zt.r,i=zt.g,r=zt.b;return e!==Pt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ei),this.setHSL(Ei.h+e,Ei.s+n,Ei.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ei),e.getHSL(uo);const i=sa(Ei.h,uo.h,n),r=sa(Ei.s,uo.s,n),s=sa(Ei.l,uo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new Ye;Ye.NAMES=Lv;let HS=0;class Ia extends Rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:HS++}),this.uuid=Ns(),this.name="",this.type="Material",this.blending=hs,this.side=qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hu,this.blendDst=Gu,this.blendEquation=or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=fl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=np,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cr,this.stencilZFail=Cr,this.stencilZPass=Cr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==hs&&(i.blending=this.blending),this.side!==qi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Hu&&(i.blendSrc=this.blendSrc),this.blendDst!==Gu&&(i.blendDst=this.blendDst),this.blendEquation!==or&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==fl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==np&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Cr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Cr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Cr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Dv extends Ia{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=mv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _t=new q,ho=new et;class Bn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=ip,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ho.fromBufferAttribute(this,n),ho.applyMatrix3(e),this.setXY(n,ho.x,ho.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.applyMatrix3(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.applyMatrix4(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.applyNormalMatrix(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.transformDirection(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Vr(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Vt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Vr(n,this.array)),n}setX(e,n){return this.normalized&&(n=Vt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Vr(n,this.array)),n}setY(e,n){return this.normalized&&(n=Vt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Vr(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Vt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Vr(n,this.array)),n}setW(e,n){return this.normalized&&(n=Vt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Vt(n,this.array),i=Vt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Vt(n,this.array),i=Vt(i,this.array),r=Vt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Vt(n,this.array),i=Vt(i,this.array),r=Vt(r,this.array),s=Vt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ip&&(e.usage=this.usage),e}}class Iv extends Bn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Uv extends Bn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class ui extends Bn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let GS=0;const xn=new Rt,zc=new sn,kr=new q,ln=new Da,Vs=new Da,At=new q;class $n extends Rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:GS++}),this.uuid=Ns(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Av(e)?Uv:Iv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new We().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xn.makeRotationFromQuaternion(e),this.applyMatrix4(xn),this}rotateX(e){return xn.makeRotationX(e),this.applyMatrix4(xn),this}rotateY(e){return xn.makeRotationY(e),this.applyMatrix4(xn),this}rotateZ(e){return xn.makeRotationZ(e),this.applyMatrix4(xn),this}translate(e,n,i){return xn.makeTranslation(e,n,i),this.applyMatrix4(xn),this}scale(e,n,i){return xn.makeScale(e,n,i),this.applyMatrix4(xn),this}lookAt(e){return zc.lookAt(e),zc.updateMatrix(),this.applyMatrix4(zc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(kr).negate(),this.translate(kr.x,kr.y,kr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ui(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Da);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];ln.setFromBufferAttribute(s),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new q,1/0);return}if(e){const i=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Vs.setFromBufferAttribute(o),this.morphTargetsRelative?(At.addVectors(ln.min,Vs.min),ln.expandByPoint(At),At.addVectors(ln.max,Vs.max),ln.expandByPoint(At)):(ln.expandByPoint(Vs.min),ln.expandByPoint(Vs.max))}ln.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)At.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(At));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let u=0,f=o.count;u<f;u++)At.fromBufferAttribute(o,u),l&&(kr.fromBufferAttribute(e,u),At.add(kr)),r=Math.max(r,i.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,a=n.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,u=[],f=[];for(let M=0;M<o;M++)u[M]=new q,f[M]=new q;const p=new q,h=new q,g=new q,_=new et,y=new et,m=new et,d=new q,x=new q;function v(M,I,H){p.fromArray(r,M*3),h.fromArray(r,I*3),g.fromArray(r,H*3),_.fromArray(a,M*2),y.fromArray(a,I*2),m.fromArray(a,H*2),h.sub(p),g.sub(p),y.sub(_),m.sub(_);const ie=1/(y.x*m.y-m.x*y.y);isFinite(ie)&&(d.copy(h).multiplyScalar(m.y).addScaledVector(g,-y.y).multiplyScalar(ie),x.copy(g).multiplyScalar(y.x).addScaledVector(h,-m.x).multiplyScalar(ie),u[M].add(d),u[I].add(d),u[H].add(d),f[M].add(x),f[I].add(x),f[H].add(x))}let E=this.groups;E.length===0&&(E=[{start:0,count:i.length}]);for(let M=0,I=E.length;M<I;++M){const H=E[M],ie=H.start,P=H.count;for(let j=ie,$=ie+P;j<$;j+=3)v(i[j+0],i[j+1],i[j+2])}const w=new q,C=new q,R=new q,k=new q;function S(M){R.fromArray(s,M*3),k.copy(R);const I=u[M];w.copy(I),w.sub(R.multiplyScalar(R.dot(I))).normalize(),C.crossVectors(k,I);const ie=C.dot(f[M])<0?-1:1;l[M*4]=w.x,l[M*4+1]=w.y,l[M*4+2]=w.z,l[M*4+3]=ie}for(let M=0,I=E.length;M<I;++M){const H=E[M],ie=H.start,P=H.count;for(let j=ie,$=ie+P;j<$;j+=3)S(i[j+0]),S(i[j+1]),S(i[j+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Bn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,g=i.count;h<g;h++)i.setXYZ(h,0,0,0);const r=new q,s=new q,a=new q,o=new q,l=new q,u=new q,f=new q,p=new q;if(e)for(let h=0,g=e.count;h<g;h+=3){const _=e.getX(h+0),y=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,y),a.fromBufferAttribute(n,m),f.subVectors(a,s),p.subVectors(r,s),f.cross(p),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),u.fromBufferAttribute(i,m),o.add(f),l.add(f),u.add(f),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let h=0,g=n.count;h<g;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),a.fromBufferAttribute(n,h+2),f.subVectors(a,s),p.subVectors(r,s),f.cross(p),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)At.fromBufferAttribute(e,n),At.normalize(),e.setXYZ(n,At.x,At.y,At.z)}toNonIndexed(){function e(o,l){const u=o.array,f=o.itemSize,p=o.normalized,h=new u.constructor(l.length*f);let g=0,_=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?g=l[y]*o.data.stride+o.offset:g=l[y]*f;for(let d=0;d<f;d++)h[_++]=u[g++]}return new Bn(h,f,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new $n,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],u=e(l,i);n.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const l=[],u=s[o];for(let f=0,p=u.length;f<p;f++){const h=u[f],g=e(h,i);l.push(g)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],f=[];for(let p=0,h=u.length;p<h;p++){const g=u[p];f.push(g.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const f=r[u];this.setAttribute(u,f.clone(n))}const s=e.morphAttributes;for(const u in s){const f=[],p=s[u];for(let h=0,g=p.length;h<g;h++)f.push(p[h].clone(n));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,f=a.length;u<f;u++){const p=a[u];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _p=new Rt,tr=new Nv,fo=new zl,xp=new q,Or=new q,zr=new q,Br=new q,Bc=new q,po=new q,mo=new et,go=new et,vo=new et,yp=new q,Sp=new q,Mp=new q,_o=new q,xo=new q;class Di extends sn{constructor(e=new $n,n=new Dv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){po.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const f=o[l],p=s[l];f!==0&&(Bc.fromBufferAttribute(p,e),a?po.addScaledVector(Bc,f):po.addScaledVector(Bc.sub(n),f))}n.add(po)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),fo.copy(i.boundingSphere),fo.applyMatrix4(s),tr.copy(e.ray).recast(e.near),!(fo.containsPoint(tr.origin)===!1&&(tr.intersectSphere(fo,xp)===null||tr.origin.distanceToSquared(xp)>(e.far-e.near)**2))&&(_p.copy(s).invert(),tr.copy(e.ray).applyMatrix4(_p),!(i.boundingBox!==null&&tr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,tr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,u=s.attributes.uv,f=s.attributes.uv1,p=s.attributes.normal,h=s.groups,g=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,y=h.length;_<y;_++){const m=h[_],d=a[m.materialIndex],x=Math.max(m.start,g.start),v=Math.min(o.count,Math.min(m.start+m.count,g.start+g.count));for(let E=x,w=v;E<w;E+=3){const C=o.getX(E),R=o.getX(E+1),k=o.getX(E+2);r=yo(this,d,e,i,u,f,p,C,R,k),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,g.start),y=Math.min(o.count,g.start+g.count);for(let m=_,d=y;m<d;m+=3){const x=o.getX(m),v=o.getX(m+1),E=o.getX(m+2);r=yo(this,a,e,i,u,f,p,x,v,E),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,y=h.length;_<y;_++){const m=h[_],d=a[m.materialIndex],x=Math.max(m.start,g.start),v=Math.min(l.count,Math.min(m.start+m.count,g.start+g.count));for(let E=x,w=v;E<w;E+=3){const C=E,R=E+1,k=E+2;r=yo(this,d,e,i,u,f,p,C,R,k),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,g.start),y=Math.min(l.count,g.start+g.count);for(let m=_,d=y;m<d;m+=3){const x=m,v=m+1,E=m+2;r=yo(this,a,e,i,u,f,p,x,v,E),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function VS(t,e,n,i,r,s,a,o){let l;if(e.side===rn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===qi,o),l===null)return null;xo.copy(o),xo.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(xo);return u<n.near||u>n.far?null:{distance:u,point:xo.clone(),object:t}}function yo(t,e,n,i,r,s,a,o,l,u){t.getVertexPosition(o,Or),t.getVertexPosition(l,zr),t.getVertexPosition(u,Br);const f=VS(t,e,n,i,Or,zr,Br,_o);if(f){r&&(mo.fromBufferAttribute(r,o),go.fromBufferAttribute(r,l),vo.fromBufferAttribute(r,u),f.uv=Un.getInterpolation(_o,Or,zr,Br,mo,go,vo,new et)),s&&(mo.fromBufferAttribute(s,o),go.fromBufferAttribute(s,l),vo.fromBufferAttribute(s,u),f.uv1=Un.getInterpolation(_o,Or,zr,Br,mo,go,vo,new et),f.uv2=f.uv1),a&&(yp.fromBufferAttribute(a,o),Sp.fromBufferAttribute(a,l),Mp.fromBufferAttribute(a,u),f.normal=Un.getInterpolation(_o,Or,zr,Br,yp,Sp,Mp,new q),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const p={a:o,b:l,c:u,normal:new q,materialIndex:0};Un.getNormal(Or,zr,Br,p.normal),f.face=p}return f}class Ua extends $n{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],u=[],f=[],p=[];let h=0,g=0;_("z","y","x",-1,-1,i,n,e,a,s,0),_("z","y","x",1,-1,i,n,-e,a,s,1),_("x","z","y",1,1,e,i,n,r,a,2),_("x","z","y",1,-1,e,i,-n,r,a,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ui(u,3)),this.setAttribute("normal",new ui(f,3)),this.setAttribute("uv",new ui(p,2));function _(y,m,d,x,v,E,w,C,R,k,S){const M=E/R,I=w/k,H=E/2,ie=w/2,P=C/2,j=R+1,$=k+1;let B=0,N=0;const O=new q;for(let D=0;D<$;D++){const z=D*I-ie;for(let Q=0;Q<j;Q++){const V=Q*M-H;O[y]=V*x,O[m]=z*v,O[d]=P,u.push(O.x,O.y,O.z),O[y]=0,O[m]=0,O[d]=C>0?1:-1,f.push(O.x,O.y,O.z),p.push(Q/R),p.push(1-D/k),B+=1}}for(let D=0;D<k;D++)for(let z=0;z<R;z++){const Q=h+z+j*D,V=h+z+j*(D+1),K=h+(z+1)+j*(D+1),J=h+(z+1)+j*D;l.push(Q,V,J),l.push(V,K,J),N+=6}o.addGroup(g,N,S),g+=N,h+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ua(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ws(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Wt(t){const e={};for(let n=0;n<t.length;n++){const i=ws(t[n]);for(const r in i)e[r]=i[r]}return e}function WS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Fv(t){return t.getRenderTarget()===null?t.outputColorSpace:Je.workingColorSpace}const XS={clone:ws,merge:Wt};var qS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,YS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Tr extends Ia{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qS,this.fragmentShader=YS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ws(e.uniforms),this.uniformsGroups=WS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class kv extends sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=li}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class dn extends kv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Aa*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ra*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Aa*2*Math.atan(Math.tan(ra*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ra*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/u,r*=a.width/l,i*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const jr=-90,Hr=1;class $S extends sn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new dn(jr,Hr,e,n);r.layers=this.layers,this.add(r);const s=new dn(jr,Hr,e,n);s.layers=this.layers,this.add(s);const a=new dn(jr,Hr,e,n);a.layers=this.layers,this.add(a);const o=new dn(jr,Hr,e,n);o.layers=this.layers,this.add(o);const l=new dn(jr,Hr,e,n);l.layers=this.layers,this.add(l);const u=new dn(jr,Hr,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const u of n)this.remove(u);if(e===li)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===vl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,u,f]=this.children,p=e.getRenderTarget(),h=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(p,h,g),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Ov extends pn{constructor(e,n,i,r,s,a,o,l,u,f){e=e!==void 0?e:[],n=n!==void 0?n:Ms,super(e,n,i,r,s,a,o,l,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class KS extends Er{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(aa("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===vr?Pt:En),this.texture=new Ov(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Mn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ua(5,5,5),s=new Tr({name:"CubemapFromEquirect",uniforms:ws(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:rn,blending:Hi});s.uniforms.tEquirect.value=n;const a=new Di(r,s),o=n.minFilter;return n.minFilter===Ta&&(n.minFilter=Mn),new $S(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const jc=new q,ZS=new q,QS=new We;class sr{constructor(e=new q(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=jc.subVectors(i,n).cross(ZS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(jc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||QS.getNormalMatrix(e),r=this.coplanarPoint(jc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const nr=new zl,So=new q;class zv{constructor(e=new sr,n=new sr,i=new sr,r=new sr,s=new sr,a=new sr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=li){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],u=r[4],f=r[5],p=r[6],h=r[7],g=r[8],_=r[9],y=r[10],m=r[11],d=r[12],x=r[13],v=r[14],E=r[15];if(i[0].setComponents(l-s,h-u,m-g,E-d).normalize(),i[1].setComponents(l+s,h+u,m+g,E+d).normalize(),i[2].setComponents(l+a,h+f,m+_,E+x).normalize(),i[3].setComponents(l-a,h-f,m-_,E-x).normalize(),i[4].setComponents(l-o,h-p,m-y,E-v).normalize(),n===li)i[5].setComponents(l+o,h+p,m+y,E+v).normalize();else if(n===vl)i[5].setComponents(o,p,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),nr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),nr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(nr)}intersectsSprite(e){return nr.center.set(0,0,0),nr.radius=.7071067811865476,nr.applyMatrix4(e.matrixWorld),this.intersectsSphere(nr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(So.x=r.normal.x>0?e.max.x:e.min.x,So.y=r.normal.y>0?e.max.y:e.min.y,So.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(So)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Bv(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function JS(t,e){const n=e.isWebGL2,i=new WeakMap;function r(u,f){const p=u.array,h=u.usage,g=p.byteLength,_=t.createBuffer();t.bindBuffer(f,_),t.bufferData(f,p,h),u.onUploadCallback();let y;if(p instanceof Float32Array)y=t.FLOAT;else if(p instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)y=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=t.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=t.SHORT;else if(p instanceof Uint32Array)y=t.UNSIGNED_INT;else if(p instanceof Int32Array)y=t.INT;else if(p instanceof Int8Array)y=t.BYTE;else if(p instanceof Uint8Array)y=t.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:u.version,size:g}}function s(u,f,p){const h=f.array,g=f._updateRange,_=f.updateRanges;if(t.bindBuffer(p,u),g.count===-1&&_.length===0&&t.bufferSubData(p,0,h),_.length!==0){for(let y=0,m=_.length;y<m;y++){const d=_[y];n?t.bufferSubData(p,d.start*h.BYTES_PER_ELEMENT,h,d.start,d.count):t.bufferSubData(p,d.start*h.BYTES_PER_ELEMENT,h.subarray(d.start,d.start+d.count))}f.clearUpdateRanges()}g.count!==-1&&(n?t.bufferSubData(p,g.offset*h.BYTES_PER_ELEMENT,h,g.offset,g.count):t.bufferSubData(p,g.offset*h.BYTES_PER_ELEMENT,h.subarray(g.offset,g.offset+g.count)),g.count=-1),f.onUploadCallback()}function a(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);f&&(t.deleteBuffer(f.buffer),i.delete(u))}function l(u,f){if(u.isGLBufferAttribute){const h=i.get(u);(!h||h.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const p=i.get(u);if(p===void 0)i.set(u,r(u,f));else if(p.version<u.version){if(p.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,u,f),p.version=u.version}}return{get:a,remove:o,update:l}}class Qd extends $n{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),u=o+1,f=l+1,p=e/o,h=n/l,g=[],_=[],y=[],m=[];for(let d=0;d<f;d++){const x=d*h-a;for(let v=0;v<u;v++){const E=v*p-s;_.push(E,-x,0),y.push(0,0,1),m.push(v/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let x=0;x<o;x++){const v=x+u*d,E=x+u*(d+1),w=x+1+u*(d+1),C=x+1+u*d;g.push(v,E,C),g.push(E,w,C)}this.setIndex(g),this.setAttribute("position",new ui(_,3)),this.setAttribute("normal",new ui(y,3)),this.setAttribute("uv",new ui(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qd(e.width,e.height,e.widthSegments,e.heightSegments)}}var eM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tM=`#ifdef USE_ALPHAHASH
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
#endif`,nM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,iM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rM=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,sM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aM=`#ifdef USE_AOMAP
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
#endif`,oM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lM=`#ifdef USE_BATCHING
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
#endif`,cM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,uM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,fM=`#ifdef USE_IRIDESCENCE
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
#endif`,pM=`#ifdef USE_BUMPMAP
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
#endif`,mM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,gM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_M=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,SM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,MM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,EM=`#define PI 3.141592653589793
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
} // validated`,TM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,wM=`vec3 transformedNormal = objectNormal;
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
#endif`,AM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,CM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,RM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,NM="gl_FragColor = linearToOutputTexel( gl_FragColor );",PM=`
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
}`,LM=`#ifdef USE_ENVMAP
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
#endif`,DM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,IM=`#ifdef USE_ENVMAP
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
#endif`,UM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,FM=`#ifdef USE_ENVMAP
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
#endif`,kM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,OM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,BM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jM=`#ifdef USE_GRADIENTMAP
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
}`,HM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,GM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,VM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,WM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,XM=`uniform bool receiveShadow;
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
#endif`,qM=`#ifdef USE_ENVMAP
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
#endif`,YM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$M=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,KM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ZM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,QM=`PhysicalMaterial material;
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
#endif`,JM=`struct PhysicalMaterial {
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
}`,eE=`
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
#endif`,tE=`#if defined( RE_IndirectDiffuse )
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
#endif`,nE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,iE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,aE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,oE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,uE=`#if defined( USE_POINTS_UV )
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
#endif`,dE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fE=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pE=`#ifdef USE_MORPHNORMALS
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
#endif`,mE=`#ifdef USE_MORPHTARGETS
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
#endif`,gE=`#ifdef USE_MORPHTARGETS
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
#endif`,vE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,_E=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,SE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ME=`#ifdef USE_NORMALMAP
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
#endif`,EE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,TE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,AE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,CE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,RE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,NE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,PE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,LE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,DE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,IE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,UE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,FE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,OE=`float getShadowMask() {
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
}`,zE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,BE=`#ifdef USE_SKINNING
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
#endif`,jE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,HE=`#ifdef USE_SKINNING
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
#endif`,GE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,VE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,WE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,XE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qE=`#ifdef USE_TRANSMISSION
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
#endif`,YE=`#ifdef USE_TRANSMISSION
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
#endif`,$E=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,KE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ZE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,QE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const JE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,e1=`uniform sampler2D t2D;
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
}`,t1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,n1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,i1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,r1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s1=`#include <common>
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
}`,a1=`#if DEPTH_PACKING == 3200
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
}`,o1=`#define DISTANCE
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
}`,l1=`#define DISTANCE
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
}`,c1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,u1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d1=`uniform float scale;
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
}`,h1=`uniform vec3 diffuse;
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
}`,f1=`#include <common>
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
}`,p1=`uniform vec3 diffuse;
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
}`,m1=`#define LAMBERT
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
}`,g1=`#define LAMBERT
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
}`,v1=`#define MATCAP
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
}`,_1=`#define MATCAP
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
}`,x1=`#define NORMAL
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
}`,y1=`#define NORMAL
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
}`,S1=`#define PHONG
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
}`,M1=`#define PHONG
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
}`,E1=`#define STANDARD
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
}`,T1=`#define STANDARD
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
}`,w1=`#define TOON
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
}`,A1=`#define TOON
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
}`,b1=`uniform float size;
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
}`,C1=`uniform vec3 diffuse;
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
}`,R1=`#include <common>
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
}`,N1=`uniform vec3 color;
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
}`,P1=`uniform float rotation;
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
}`,L1=`uniform vec3 diffuse;
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
}`,Be={alphahash_fragment:eM,alphahash_pars_fragment:tM,alphamap_fragment:nM,alphamap_pars_fragment:iM,alphatest_fragment:rM,alphatest_pars_fragment:sM,aomap_fragment:aM,aomap_pars_fragment:oM,batching_pars_vertex:lM,batching_vertex:cM,begin_vertex:uM,beginnormal_vertex:dM,bsdfs:hM,iridescence_fragment:fM,bumpmap_pars_fragment:pM,clipping_planes_fragment:mM,clipping_planes_pars_fragment:gM,clipping_planes_pars_vertex:vM,clipping_planes_vertex:_M,color_fragment:xM,color_pars_fragment:yM,color_pars_vertex:SM,color_vertex:MM,common:EM,cube_uv_reflection_fragment:TM,defaultnormal_vertex:wM,displacementmap_pars_vertex:AM,displacementmap_vertex:bM,emissivemap_fragment:CM,emissivemap_pars_fragment:RM,colorspace_fragment:NM,colorspace_pars_fragment:PM,envmap_fragment:LM,envmap_common_pars_fragment:DM,envmap_pars_fragment:IM,envmap_pars_vertex:UM,envmap_physical_pars_fragment:qM,envmap_vertex:FM,fog_vertex:kM,fog_pars_vertex:OM,fog_fragment:zM,fog_pars_fragment:BM,gradientmap_pars_fragment:jM,lightmap_fragment:HM,lightmap_pars_fragment:GM,lights_lambert_fragment:VM,lights_lambert_pars_fragment:WM,lights_pars_begin:XM,lights_toon_fragment:YM,lights_toon_pars_fragment:$M,lights_phong_fragment:KM,lights_phong_pars_fragment:ZM,lights_physical_fragment:QM,lights_physical_pars_fragment:JM,lights_fragment_begin:eE,lights_fragment_maps:tE,lights_fragment_end:nE,logdepthbuf_fragment:iE,logdepthbuf_pars_fragment:rE,logdepthbuf_pars_vertex:sE,logdepthbuf_vertex:aE,map_fragment:oE,map_pars_fragment:lE,map_particle_fragment:cE,map_particle_pars_fragment:uE,metalnessmap_fragment:dE,metalnessmap_pars_fragment:hE,morphcolor_vertex:fE,morphnormal_vertex:pE,morphtarget_pars_vertex:mE,morphtarget_vertex:gE,normal_fragment_begin:vE,normal_fragment_maps:_E,normal_pars_fragment:xE,normal_pars_vertex:yE,normal_vertex:SE,normalmap_pars_fragment:ME,clearcoat_normal_fragment_begin:EE,clearcoat_normal_fragment_maps:TE,clearcoat_pars_fragment:wE,iridescence_pars_fragment:AE,opaque_fragment:bE,packing:CE,premultiplied_alpha_fragment:RE,project_vertex:NE,dithering_fragment:PE,dithering_pars_fragment:LE,roughnessmap_fragment:DE,roughnessmap_pars_fragment:IE,shadowmap_pars_fragment:UE,shadowmap_pars_vertex:FE,shadowmap_vertex:kE,shadowmask_pars_fragment:OE,skinbase_vertex:zE,skinning_pars_vertex:BE,skinning_vertex:jE,skinnormal_vertex:HE,specularmap_fragment:GE,specularmap_pars_fragment:VE,tonemapping_fragment:WE,tonemapping_pars_fragment:XE,transmission_fragment:qE,transmission_pars_fragment:YE,uv_pars_fragment:$E,uv_pars_vertex:KE,uv_vertex:ZE,worldpos_vertex:QE,background_vert:JE,background_frag:e1,backgroundCube_vert:t1,backgroundCube_frag:n1,cube_vert:i1,cube_frag:r1,depth_vert:s1,depth_frag:a1,distanceRGBA_vert:o1,distanceRGBA_frag:l1,equirect_vert:c1,equirect_frag:u1,linedashed_vert:d1,linedashed_frag:h1,meshbasic_vert:f1,meshbasic_frag:p1,meshlambert_vert:m1,meshlambert_frag:g1,meshmatcap_vert:v1,meshmatcap_frag:_1,meshnormal_vert:x1,meshnormal_frag:y1,meshphong_vert:S1,meshphong_frag:M1,meshphysical_vert:E1,meshphysical_frag:T1,meshtoon_vert:w1,meshtoon_frag:A1,points_vert:b1,points_frag:C1,shadow_vert:R1,shadow_frag:N1,sprite_vert:P1,sprite_frag:L1},ue={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},Wn={basic:{uniforms:Wt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:Wt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:Wt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:Wt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:Wt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:Wt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:Wt([ue.points,ue.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:Wt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:Wt([ue.common,ue.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:Wt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:Wt([ue.sprite,ue.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:Wt([ue.common,ue.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:Wt([ue.lights,ue.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};Wn.physical={uniforms:Wt([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const Mo={r:0,b:0,g:0};function D1(t,e,n,i,r,s,a){const o=new Ye(0);let l=s===!0?0:1,u,f,p=null,h=0,g=null;function _(m,d){let x=!1,v=d.isScene===!0?d.background:null;v&&v.isTexture&&(v=(d.backgroundBlurriness>0?n:e).get(v)),v===null?y(o,l):v&&v.isColor&&(y(v,1),x=!0);const E=t.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||x)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),v&&(v.isCubeTexture||v.mapping===kl)?(f===void 0&&(f=new Di(new Ua(1,1,1),new Tr({name:"BackgroundCubeMaterial",uniforms:ws(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(w,C,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),f.material.uniforms.envMap.value=v,f.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,f.material.toneMapped=Je.getTransfer(v.colorSpace)!==at,(p!==v||h!==v.version||g!==t.toneMapping)&&(f.material.needsUpdate=!0,p=v,h=v.version,g=t.toneMapping),f.layers.enableAll(),m.unshift(f,f.geometry,f.material,0,0,null)):v&&v.isTexture&&(u===void 0&&(u=new Di(new Qd(2,2),new Tr({name:"BackgroundMaterial",uniforms:ws(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:qi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=v,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=Je.getTransfer(v.colorSpace)!==at,v.matrixAutoUpdate===!0&&v.updateMatrix(),u.material.uniforms.uvTransform.value.copy(v.matrix),(p!==v||h!==v.version||g!==t.toneMapping)&&(u.material.needsUpdate=!0,p=v,h=v.version,g=t.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function y(m,d){m.getRGB(Mo,Fv(t)),i.buffers.color.setClear(Mo.r,Mo.g,Mo.b,d,a)}return{getClearColor:function(){return o},setClearColor:function(m,d=1){o.set(m),l=d,y(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,y(o,l)},render:_}}function I1(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=m(null);let u=l,f=!1;function p(P,j,$,B,N){let O=!1;if(a){const D=y(B,$,j);u!==D&&(u=D,g(u.object)),O=d(P,B,$,N),O&&x(P,B,$,N)}else{const D=j.wireframe===!0;(u.geometry!==B.id||u.program!==$.id||u.wireframe!==D)&&(u.geometry=B.id,u.program=$.id,u.wireframe=D,O=!0)}N!==null&&n.update(N,t.ELEMENT_ARRAY_BUFFER),(O||f)&&(f=!1,k(P,j,$,B),N!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(N).buffer))}function h(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function g(P){return i.isWebGL2?t.bindVertexArray(P):s.bindVertexArrayOES(P)}function _(P){return i.isWebGL2?t.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function y(P,j,$){const B=$.wireframe===!0;let N=o[P.id];N===void 0&&(N={},o[P.id]=N);let O=N[j.id];O===void 0&&(O={},N[j.id]=O);let D=O[B];return D===void 0&&(D=m(h()),O[B]=D),D}function m(P){const j=[],$=[],B=[];for(let N=0;N<r;N++)j[N]=0,$[N]=0,B[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:$,attributeDivisors:B,object:P,attributes:{},index:null}}function d(P,j,$,B){const N=u.attributes,O=j.attributes;let D=0;const z=$.getAttributes();for(const Q in z)if(z[Q].location>=0){const K=N[Q];let J=O[Q];if(J===void 0&&(Q==="instanceMatrix"&&P.instanceMatrix&&(J=P.instanceMatrix),Q==="instanceColor"&&P.instanceColor&&(J=P.instanceColor)),K===void 0||K.attribute!==J||J&&K.data!==J.data)return!0;D++}return u.attributesNum!==D||u.index!==B}function x(P,j,$,B){const N={},O=j.attributes;let D=0;const z=$.getAttributes();for(const Q in z)if(z[Q].location>=0){let K=O[Q];K===void 0&&(Q==="instanceMatrix"&&P.instanceMatrix&&(K=P.instanceMatrix),Q==="instanceColor"&&P.instanceColor&&(K=P.instanceColor));const J={};J.attribute=K,K&&K.data&&(J.data=K.data),N[Q]=J,D++}u.attributes=N,u.attributesNum=D,u.index=B}function v(){const P=u.newAttributes;for(let j=0,$=P.length;j<$;j++)P[j]=0}function E(P){w(P,0)}function w(P,j){const $=u.newAttributes,B=u.enabledAttributes,N=u.attributeDivisors;$[P]=1,B[P]===0&&(t.enableVertexAttribArray(P),B[P]=1),N[P]!==j&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,j),N[P]=j)}function C(){const P=u.newAttributes,j=u.enabledAttributes;for(let $=0,B=j.length;$<B;$++)j[$]!==P[$]&&(t.disableVertexAttribArray($),j[$]=0)}function R(P,j,$,B,N,O,D){D===!0?t.vertexAttribIPointer(P,j,$,N,O):t.vertexAttribPointer(P,j,$,B,N,O)}function k(P,j,$,B){if(i.isWebGL2===!1&&(P.isInstancedMesh||B.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const N=B.attributes,O=$.getAttributes(),D=j.defaultAttributeValues;for(const z in O){const Q=O[z];if(Q.location>=0){let V=N[z];if(V===void 0&&(z==="instanceMatrix"&&P.instanceMatrix&&(V=P.instanceMatrix),z==="instanceColor"&&P.instanceColor&&(V=P.instanceColor)),V!==void 0){const K=V.normalized,J=V.itemSize,fe=n.get(V);if(fe===void 0)continue;const de=fe.buffer,Re=fe.type,Ce=fe.bytesPerElement,ne=i.isWebGL2===!0&&(Re===t.INT||Re===t.UNSIGNED_INT||V.gpuType===vv);if(V.isInterleavedBufferAttribute){const te=V.data,U=te.stride,Ie=V.offset;if(te.isInstancedInterleavedBuffer){for(let xe=0;xe<Q.locationSize;xe++)w(Q.location+xe,te.meshPerAttribute);P.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let xe=0;xe<Q.locationSize;xe++)E(Q.location+xe);t.bindBuffer(t.ARRAY_BUFFER,de);for(let xe=0;xe<Q.locationSize;xe++)R(Q.location+xe,J/Q.locationSize,Re,K,U*Ce,(Ie+J/Q.locationSize*xe)*Ce,ne)}else{if(V.isInstancedBufferAttribute){for(let te=0;te<Q.locationSize;te++)w(Q.location+te,V.meshPerAttribute);P.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let te=0;te<Q.locationSize;te++)E(Q.location+te);t.bindBuffer(t.ARRAY_BUFFER,de);for(let te=0;te<Q.locationSize;te++)R(Q.location+te,J/Q.locationSize,Re,K,J*Ce,J/Q.locationSize*te*Ce,ne)}}else if(D!==void 0){const K=D[z];if(K!==void 0)switch(K.length){case 2:t.vertexAttrib2fv(Q.location,K);break;case 3:t.vertexAttrib3fv(Q.location,K);break;case 4:t.vertexAttrib4fv(Q.location,K);break;default:t.vertexAttrib1fv(Q.location,K)}}}}C()}function S(){H();for(const P in o){const j=o[P];for(const $ in j){const B=j[$];for(const N in B)_(B[N].object),delete B[N];delete j[$]}delete o[P]}}function M(P){if(o[P.id]===void 0)return;const j=o[P.id];for(const $ in j){const B=j[$];for(const N in B)_(B[N].object),delete B[N];delete j[$]}delete o[P.id]}function I(P){for(const j in o){const $=o[j];if($[P.id]===void 0)continue;const B=$[P.id];for(const N in B)_(B[N].object),delete B[N];delete $[P.id]}}function H(){ie(),f=!0,u!==l&&(u=l,g(u.object))}function ie(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:H,resetDefaultState:ie,dispose:S,releaseStatesOfGeometry:M,releaseStatesOfProgram:I,initAttributes:v,enableAttribute:E,disableUnusedAttributes:C}}function U1(t,e,n,i){const r=i.isWebGL2;let s;function a(f){s=f}function o(f,p){t.drawArrays(s,f,p),n.update(p,s,1)}function l(f,p,h){if(h===0)return;let g,_;if(r)g=t,_="drawArraysInstanced";else if(g=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[_](s,f,p,h),n.update(p,s,h)}function u(f,p,h){if(h===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<h;_++)this.render(f[_],p[_]);else{g.multiDrawArraysWEBGL(s,f,0,p,0,h);let _=0;for(let y=0;y<h;y++)_+=p[y];n.update(_,s,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=u}function F1(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let o=n.precision!==void 0?n.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const u=a||e.has("WEBGL_draw_buffers"),f=n.logarithmicDepthBuffer===!0,p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),y=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),d=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),v=h>0,E=a||e.has("OES_texture_float"),w=v&&E,C=a?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:f,maxTextures:p,maxVertexTextures:h,maxTextureSize:g,maxCubemapSize:_,maxAttributes:y,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:x,vertexTextures:v,floatFragmentTextures:E,floatVertexTextures:w,maxSamples:C}}function k1(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new sr,o=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,h){const g=p.length!==0||h||i!==0||r;return r=h,i=p.length,g},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,h){n=f(p,h,0)},this.setState=function(p,h,g){const _=p.clippingPlanes,y=p.clipIntersection,m=p.clipShadows,d=t.get(p);if(!r||_===null||_.length===0||s&&!m)s?f(null):u();else{const x=s?0:i,v=x*4;let E=d.clippingState||null;l.value=E,E=f(_,h,v,g);for(let w=0;w!==v;++w)E[w]=n[w];d.clippingState=E,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=x}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(p,h,g,_){const y=p!==null?p.length:0;let m=null;if(y!==0){if(m=l.value,_!==!0||m===null){const d=g+y*4,x=h.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<d)&&(m=new Float32Array(d));for(let v=0,E=g;v!==y;++v,E+=4)a.copy(p[v]).applyMatrix4(x,o),a.normal.toArray(m,E),m[E+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function O1(t){let e=new WeakMap;function n(a,o){return o===Vu?a.mapping=Ms:o===Wu&&(a.mapping=Es),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Vu||o===Wu)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const u=new KS(l.height/2);return u.fromEquirectangularTexture(t,a),e.set(a,u),a.addEventListener("dispose",r),n(u.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class z1 extends kv{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const is=4,Ep=[.125,.215,.35,.446,.526,.582],lr=20,Hc=new z1,Tp=new Ye;let Gc=null,Vc=0,Wc=0;const ar=(1+Math.sqrt(5))/2,Gr=1/ar,wp=[new q(1,1,1),new q(-1,1,1),new q(1,1,-1),new q(-1,1,-1),new q(0,ar,Gr),new q(0,ar,-Gr),new q(Gr,0,ar),new q(-Gr,0,ar),new q(ar,Gr,0),new q(-ar,Gr,0)];class Ap{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Gc=this._renderer.getRenderTarget(),Vc=this._renderer.getActiveCubeFace(),Wc=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Gc,Vc,Wc),e.scissorTest=!1,Eo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ms||e.mapping===Es?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Gc=this._renderer.getRenderTarget(),Vc=this._renderer.getActiveCubeFace(),Wc=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Mn,minFilter:Mn,generateMipmaps:!1,type:wa,format:kn,colorSpace:mi,depthBuffer:!1},r=bp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=B1(s)),this._blurMaterial=j1(s,e,n)}return r}_compileMaterial(e){const n=new Di(this._lodPlanes[0],e);this._renderer.compile(n,Hc)}_sceneToCubeUV(e,n,i,r){const o=new dn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,p=f.autoClear,h=f.toneMapping;f.getClearColor(Tp),f.toneMapping=Gi,f.autoClear=!1;const g=new Dv({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),_=new Di(new Ua,g);let y=!1;const m=e.background;m?m.isColor&&(g.color.copy(m),e.background=null,y=!0):(g.color.copy(Tp),y=!0);for(let d=0;d<6;d++){const x=d%3;x===0?(o.up.set(0,l[d],0),o.lookAt(u[d],0,0)):x===1?(o.up.set(0,0,l[d]),o.lookAt(0,u[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,u[d]));const v=this._cubeSize;Eo(r,x*v,d>2?v:0,v,v),f.setRenderTarget(r),y&&f.render(_,o),f.render(e,o)}_.geometry.dispose(),_.material.dispose(),f.toneMapping=h,f.autoClear=p,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ms||e.mapping===Es;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cp());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Di(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Eo(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,Hc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=wp[(r-1)%wp.length];this._blur(e,r-1,r,s,a)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,p=new Di(this._lodPlanes[r],u),h=u.uniforms,g=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*lr-1),y=s/_,m=isFinite(s)?1+Math.floor(f*y):lr;m>lr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${lr}`);const d=[];let x=0;for(let R=0;R<lr;++R){const k=R/y,S=Math.exp(-k*k/2);d.push(S),R===0?x+=S:R<m&&(x+=2*S)}for(let R=0;R<d.length;R++)d[R]=d[R]/x;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:v}=this;h.dTheta.value=_,h.mipInt.value=v-i;const E=this._sizeLods[r],w=3*E*(r>v-is?r-v+is:0),C=4*(this._cubeSize-E);Eo(n,w,C,3*E,2*E),l.setRenderTarget(n),l.render(p,Hc)}}function B1(t){const e=[],n=[],i=[];let r=t;const s=t-is+1+Ep.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-is?l=Ep[a-t+is-1]:a===0&&(l=0),i.push(l);const u=1/(o-2),f=-u,p=1+u,h=[f,f,p,f,p,p,f,f,p,p,f,p],g=6,_=6,y=3,m=2,d=1,x=new Float32Array(y*_*g),v=new Float32Array(m*_*g),E=new Float32Array(d*_*g);for(let C=0;C<g;C++){const R=C%3*2/3-1,k=C>2?0:-1,S=[R,k,0,R+2/3,k,0,R+2/3,k+1,0,R,k,0,R+2/3,k+1,0,R,k+1,0];x.set(S,y*_*C),v.set(h,m*_*C);const M=[C,C,C,C,C,C];E.set(M,d*_*C)}const w=new $n;w.setAttribute("position",new Bn(x,y)),w.setAttribute("uv",new Bn(v,m)),w.setAttribute("faceIndex",new Bn(E,d)),e.push(w),r>is&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function bp(t,e,n){const i=new Er(t,e,n);return i.texture.mapping=kl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Eo(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function j1(t,e,n){const i=new Float32Array(lr),r=new q(0,1,0);return new Tr({name:"SphericalGaussianBlur",defines:{n:lr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Jd(),fragmentShader:`

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
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function Cp(){return new Tr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jd(),fragmentShader:`

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
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function Rp(){return new Tr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function Jd(){return`

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
	`}function H1(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,u=l===Vu||l===Wu,f=l===Ms||l===Es;if(u||f)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let p=e.get(o);return n===null&&(n=new Ap(t)),p=u?n.fromEquirectangular(o,p):n.fromCubemap(o,p),e.set(o,p),p.texture}else{if(e.has(o))return e.get(o).texture;{const p=o.image;if(u&&p&&p.height>0||f&&p&&r(p)){n===null&&(n=new Ap(t));const h=u?n.fromEquirectangular(o):n.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",s),h.texture}else return null}}}return o}function r(o){let l=0;const u=6;for(let f=0;f<u;f++)o[f]!==void 0&&l++;return l===u}function s(o){const l=o.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function G1(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function V1(t,e,n,i){const r={},s=new WeakMap;function a(p){const h=p.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const y=h.morphAttributes[_];for(let m=0,d=y.length;m<d;m++)e.remove(y[m])}h.removeEventListener("dispose",a),delete r[h.id];const g=s.get(h);g&&(e.remove(g),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function o(p,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,n.memory.geometries++),h}function l(p){const h=p.attributes;for(const _ in h)e.update(h[_],t.ARRAY_BUFFER);const g=p.morphAttributes;for(const _ in g){const y=g[_];for(let m=0,d=y.length;m<d;m++)e.update(y[m],t.ARRAY_BUFFER)}}function u(p){const h=[],g=p.index,_=p.attributes.position;let y=0;if(g!==null){const x=g.array;y=g.version;for(let v=0,E=x.length;v<E;v+=3){const w=x[v+0],C=x[v+1],R=x[v+2];h.push(w,C,C,R,R,w)}}else if(_!==void 0){const x=_.array;y=_.version;for(let v=0,E=x.length/3-1;v<E;v+=3){const w=v+0,C=v+1,R=v+2;h.push(w,C,C,R,R,w)}}else return;const m=new(Av(h)?Uv:Iv)(h,1);m.version=y;const d=s.get(p);d&&e.remove(d),s.set(p,m)}function f(p){const h=s.get(p);if(h){const g=p.index;g!==null&&h.version<g.version&&u(p)}else u(p);return s.get(p)}return{get:o,update:l,getWireframeAttribute:f}}function W1(t,e,n,i){const r=i.isWebGL2;let s;function a(g){s=g}let o,l;function u(g){o=g.type,l=g.bytesPerElement}function f(g,_){t.drawElements(s,_,o,g*l),n.update(_,s,1)}function p(g,_,y){if(y===0)return;let m,d;if(r)m=t,d="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](s,_,o,g*l,y),n.update(_,s,y)}function h(g,_,y){if(y===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<y;d++)this.render(g[d]/l,_[d]);else{m.multiDrawElementsWEBGL(s,_,0,o,g,0,y);let d=0;for(let x=0;x<y;x++)d+=_[x];n.update(d,s,1)}}this.setMode=a,this.setIndex=u,this.render=f,this.renderInstances=p,this.renderMultiDraw=h}function X1(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function q1(t,e){return t[0]-e[0]}function Y1(t,e){return Math.abs(e[1])-Math.abs(t[1])}function $1(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,a=new Lt,o=[];for(let u=0;u<8;u++)o[u]=[u,0];function l(u,f,p){const h=u.morphTargetInfluences;if(e.isWebGL2===!0){const _=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,y=_!==void 0?_.length:0;let m=s.get(f);if(m===void 0||m.count!==y){let j=function(){ie.dispose(),s.delete(f),f.removeEventListener("dispose",j)};var g=j;m!==void 0&&m.texture.dispose();const v=f.morphAttributes.position!==void 0,E=f.morphAttributes.normal!==void 0,w=f.morphAttributes.color!==void 0,C=f.morphAttributes.position||[],R=f.morphAttributes.normal||[],k=f.morphAttributes.color||[];let S=0;v===!0&&(S=1),E===!0&&(S=2),w===!0&&(S=3);let M=f.attributes.position.count*S,I=1;M>e.maxTextureSize&&(I=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const H=new Float32Array(M*I*4*y),ie=new Rv(H,M,I,y);ie.type=Li,ie.needsUpdate=!0;const P=S*4;for(let $=0;$<y;$++){const B=C[$],N=R[$],O=k[$],D=M*I*4*$;for(let z=0;z<B.count;z++){const Q=z*P;v===!0&&(a.fromBufferAttribute(B,z),H[D+Q+0]=a.x,H[D+Q+1]=a.y,H[D+Q+2]=a.z,H[D+Q+3]=0),E===!0&&(a.fromBufferAttribute(N,z),H[D+Q+4]=a.x,H[D+Q+5]=a.y,H[D+Q+6]=a.z,H[D+Q+7]=0),w===!0&&(a.fromBufferAttribute(O,z),H[D+Q+8]=a.x,H[D+Q+9]=a.y,H[D+Q+10]=a.z,H[D+Q+11]=O.itemSize===4?a.w:1)}}m={count:y,texture:ie,size:new et(M,I)},s.set(f,m),f.addEventListener("dispose",j)}let d=0;for(let v=0;v<h.length;v++)d+=h[v];const x=f.morphTargetsRelative?1:1-d;p.getUniforms().setValue(t,"morphTargetBaseInfluence",x),p.getUniforms().setValue(t,"morphTargetInfluences",h),p.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),p.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}else{const _=h===void 0?0:h.length;let y=i[f.id];if(y===void 0||y.length!==_){y=[];for(let E=0;E<_;E++)y[E]=[E,0];i[f.id]=y}for(let E=0;E<_;E++){const w=y[E];w[0]=E,w[1]=h[E]}y.sort(Y1);for(let E=0;E<8;E++)E<_&&y[E][1]?(o[E][0]=y[E][0],o[E][1]=y[E][1]):(o[E][0]=Number.MAX_SAFE_INTEGER,o[E][1]=0);o.sort(q1);const m=f.morphAttributes.position,d=f.morphAttributes.normal;let x=0;for(let E=0;E<8;E++){const w=o[E],C=w[0],R=w[1];C!==Number.MAX_SAFE_INTEGER&&R?(m&&f.getAttribute("morphTarget"+E)!==m[C]&&f.setAttribute("morphTarget"+E,m[C]),d&&f.getAttribute("morphNormal"+E)!==d[C]&&f.setAttribute("morphNormal"+E,d[C]),r[E]=R,x+=R):(m&&f.hasAttribute("morphTarget"+E)===!0&&f.deleteAttribute("morphTarget"+E),d&&f.hasAttribute("morphNormal"+E)===!0&&f.deleteAttribute("morphNormal"+E),r[E]=0)}const v=f.morphTargetsRelative?1:1-x;p.getUniforms().setValue(t,"morphTargetBaseInfluence",v),p.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function K1(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,f=l.geometry,p=e.get(l,f);if(r.get(p)!==u&&(e.update(p),r.set(p,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return p}function a(){r=new WeakMap}function o(l){const u=l.target;u.removeEventListener("dispose",o),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:a}}class jv extends pn{constructor(e,n,i,r,s,a,o,l,u,f){if(f=f!==void 0?f:gr,f!==gr&&f!==Ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===gr&&(i=Pi),i===void 0&&f===Ts&&(i=mr),super(null,r,s,a,o,l,f,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:qt,this.minFilter=l!==void 0?l:qt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Hv=new pn,Gv=new jv(1,1);Gv.compareFunction=wv;const Vv=new Rv,Wv=new DS,Xv=new Ov,Np=[],Pp=[],Lp=new Float32Array(16),Dp=new Float32Array(9),Ip=new Float32Array(4);function Ps(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Np[r];if(s===void 0&&(s=new Float32Array(r),Np[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Mt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Et(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function jl(t,e){let n=Pp[e];n===void 0&&(n=new Int32Array(e),Pp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Z1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Q1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Mt(n,e))return;t.uniform2fv(this.addr,e),Et(n,e)}}function J1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Mt(n,e))return;t.uniform3fv(this.addr,e),Et(n,e)}}function eT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Mt(n,e))return;t.uniform4fv(this.addr,e),Et(n,e)}}function tT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Mt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Et(n,e)}else{if(Mt(n,i))return;Ip.set(i),t.uniformMatrix2fv(this.addr,!1,Ip),Et(n,i)}}function nT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Mt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Et(n,e)}else{if(Mt(n,i))return;Dp.set(i),t.uniformMatrix3fv(this.addr,!1,Dp),Et(n,i)}}function iT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Mt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Et(n,e)}else{if(Mt(n,i))return;Lp.set(i),t.uniformMatrix4fv(this.addr,!1,Lp),Et(n,i)}}function rT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function sT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Mt(n,e))return;t.uniform2iv(this.addr,e),Et(n,e)}}function aT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Mt(n,e))return;t.uniform3iv(this.addr,e),Et(n,e)}}function oT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Mt(n,e))return;t.uniform4iv(this.addr,e),Et(n,e)}}function lT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function cT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Mt(n,e))return;t.uniform2uiv(this.addr,e),Et(n,e)}}function uT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Mt(n,e))return;t.uniform3uiv(this.addr,e),Et(n,e)}}function dT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Mt(n,e))return;t.uniform4uiv(this.addr,e),Et(n,e)}}function hT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?Gv:Hv;n.setTexture2D(e||s,r)}function fT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Wv,r)}function pT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Xv,r)}function mT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Vv,r)}function gT(t){switch(t){case 5126:return Z1;case 35664:return Q1;case 35665:return J1;case 35666:return eT;case 35674:return tT;case 35675:return nT;case 35676:return iT;case 5124:case 35670:return rT;case 35667:case 35671:return sT;case 35668:case 35672:return aT;case 35669:case 35673:return oT;case 5125:return lT;case 36294:return cT;case 36295:return uT;case 36296:return dT;case 35678:case 36198:case 36298:case 36306:case 35682:return hT;case 35679:case 36299:case 36307:return fT;case 35680:case 36300:case 36308:case 36293:return pT;case 36289:case 36303:case 36311:case 36292:return mT}}function vT(t,e){t.uniform1fv(this.addr,e)}function _T(t,e){const n=Ps(e,this.size,2);t.uniform2fv(this.addr,n)}function xT(t,e){const n=Ps(e,this.size,3);t.uniform3fv(this.addr,n)}function yT(t,e){const n=Ps(e,this.size,4);t.uniform4fv(this.addr,n)}function ST(t,e){const n=Ps(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function MT(t,e){const n=Ps(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function ET(t,e){const n=Ps(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function TT(t,e){t.uniform1iv(this.addr,e)}function wT(t,e){t.uniform2iv(this.addr,e)}function AT(t,e){t.uniform3iv(this.addr,e)}function bT(t,e){t.uniform4iv(this.addr,e)}function CT(t,e){t.uniform1uiv(this.addr,e)}function RT(t,e){t.uniform2uiv(this.addr,e)}function NT(t,e){t.uniform3uiv(this.addr,e)}function PT(t,e){t.uniform4uiv(this.addr,e)}function LT(t,e,n){const i=this.cache,r=e.length,s=jl(n,r);Mt(i,s)||(t.uniform1iv(this.addr,s),Et(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||Hv,s[a])}function DT(t,e,n){const i=this.cache,r=e.length,s=jl(n,r);Mt(i,s)||(t.uniform1iv(this.addr,s),Et(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Wv,s[a])}function IT(t,e,n){const i=this.cache,r=e.length,s=jl(n,r);Mt(i,s)||(t.uniform1iv(this.addr,s),Et(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||Xv,s[a])}function UT(t,e,n){const i=this.cache,r=e.length,s=jl(n,r);Mt(i,s)||(t.uniform1iv(this.addr,s),Et(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Vv,s[a])}function FT(t){switch(t){case 5126:return vT;case 35664:return _T;case 35665:return xT;case 35666:return yT;case 35674:return ST;case 35675:return MT;case 35676:return ET;case 5124:case 35670:return TT;case 35667:case 35671:return wT;case 35668:case 35672:return AT;case 35669:case 35673:return bT;case 5125:return CT;case 36294:return RT;case 36295:return NT;case 36296:return PT;case 35678:case 36198:case 36298:case 36306:case 35682:return LT;case 35679:case 36299:case 36307:return DT;case 35680:case 36300:case 36308:case 36293:return IT;case 36289:case 36303:case 36311:case 36292:return UT}}class kT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=gT(n.type)}}class OT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=FT(n.type)}}class zT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const Xc=/(\w+)(\])?(\[|\.)?/g;function Up(t,e){t.seq.push(e),t.map[e.id]=e}function BT(t,e,n){const i=t.name,r=i.length;for(Xc.lastIndex=0;;){const s=Xc.exec(i),a=Xc.lastIndex;let o=s[1];const l=s[2]==="]",u=s[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===r){Up(n,u===void 0?new kT(o,t,e):new OT(o,t,e));break}else{let p=n.map[o];p===void 0&&(p=new zT(o),Up(n,p)),n=p}}}class Bo{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);BT(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Fp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const jT=37297;let HT=0;function GT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function VT(t){const e=Je.getPrimaries(Je.workingColorSpace),n=Je.getPrimaries(t);let i;switch(e===n?i="":e===gl&&n===ml?i="LinearDisplayP3ToLinearSRGB":e===ml&&n===gl&&(i="LinearSRGBToLinearDisplayP3"),t){case mi:case Ol:return[i,"LinearTransferOETF"];case Pt:case Kd:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function kp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+GT(t.getShaderSource(e),a)}else return r}function WT(t,e){const n=VT(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function XT(t,e){let n;switch(e){case Hy:n="Linear";break;case Gy:n="Reinhard";break;case Vy:n="OptimizedCineon";break;case Wy:n="ACESFilmic";break;case qy:n="AgX";break;case Xy:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function qT(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(rs).join(`
`)}function YT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(rs).join(`
`)}function $T(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function KT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function rs(t){return t!==""}function Op(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ZT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ku(t){return t.replace(ZT,JT)}const QT=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function JT(t,e){let n=Be[e];if(n===void 0){const i=QT.get(e);if(i!==void 0)n=Be[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ku(n)}const ew=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bp(t){return t.replace(ew,tw)}function tw(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function jp(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function nw(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===pv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===gy?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ni&&(e="SHADOWMAP_TYPE_VSM"),e}function iw(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ms:case Es:e="ENVMAP_TYPE_CUBE";break;case kl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function rw(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Es:e="ENVMAP_MODE_REFRACTION";break}return e}function sw(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case mv:e="ENVMAP_BLENDING_MULTIPLY";break;case By:e="ENVMAP_BLENDING_MIX";break;case jy:e="ENVMAP_BLENDING_ADD";break}return e}function aw(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function ow(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=nw(n),u=iw(n),f=rw(n),p=sw(n),h=aw(n),g=n.isWebGL2?"":qT(n),_=YT(n),y=$T(s),m=r.createProgram();let d,x,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(rs).join(`
`),d.length>0&&(d+=`
`),x=[g,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(rs).join(`
`),x.length>0&&(x+=`
`)):(d=[jp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rs).join(`
`),x=[g,jp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",n.envMap?"#define "+p:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Gi?"#define TONE_MAPPING":"",n.toneMapping!==Gi?Be.tonemapping_pars_fragment:"",n.toneMapping!==Gi?XT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,WT("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(rs).join(`
`)),a=Ku(a),a=Op(a,n),a=zp(a,n),o=Ku(o),o=Op(o,n),o=zp(o,n),a=Bp(a),o=Bp(o),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,d=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,x=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===rp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===rp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const E=v+d+a,w=v+x+o,C=Fp(r,r.VERTEX_SHADER,E),R=Fp(r,r.FRAGMENT_SHADER,w);r.attachShader(m,C),r.attachShader(m,R),n.index0AttributeName!==void 0?r.bindAttribLocation(m,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function k(H){if(t.debug.checkShaderErrors){const ie=r.getProgramInfoLog(m).trim(),P=r.getShaderInfoLog(C).trim(),j=r.getShaderInfoLog(R).trim();let $=!0,B=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if($=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,m,C,R);else{const N=kp(r,C,"vertex"),O=kp(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+ie+`
`+N+`
`+O)}else ie!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ie):(P===""||j==="")&&(B=!1);B&&(H.diagnostics={runnable:$,programLog:ie,vertexShader:{log:P,prefix:d},fragmentShader:{log:j,prefix:x}})}r.deleteShader(C),r.deleteShader(R),S=new Bo(r,m),M=KT(r,m)}let S;this.getUniforms=function(){return S===void 0&&k(this),S};let M;this.getAttributes=function(){return M===void 0&&k(this),M};let I=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=r.getProgramParameter(m,jT)),I},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=HT++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=C,this.fragmentShader=R,this}let lw=0;class cw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new uw(e),n.set(e,i)),i}}class uw{constructor(e){this.id=lw++,this.code=e,this.usedTimes=0}}function dw(t,e,n,i,r,s,a){const o=new Pv,l=new cw,u=[],f=r.isWebGL2,p=r.logarithmicDepthBuffer,h=r.vertexTextures;let g=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(S){return S===0?"uv":`uv${S}`}function m(S,M,I,H,ie){const P=H.fog,j=ie.geometry,$=S.isMeshStandardMaterial?H.environment:null,B=(S.isMeshStandardMaterial?n:e).get(S.envMap||$),N=B&&B.mapping===kl?B.image.height:null,O=_[S.type];S.precision!==null&&(g=r.getMaxPrecision(S.precision),g!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",g,"instead."));const D=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,z=D!==void 0?D.length:0;let Q=0;j.morphAttributes.position!==void 0&&(Q=1),j.morphAttributes.normal!==void 0&&(Q=2),j.morphAttributes.color!==void 0&&(Q=3);let V,K,J,fe;if(O){const Ht=Wn[O];V=Ht.vertexShader,K=Ht.fragmentShader}else V=S.vertexShader,K=S.fragmentShader,l.update(S),J=l.getVertexShaderID(S),fe=l.getFragmentShaderID(S);const de=t.getRenderTarget(),Re=ie.isInstancedMesh===!0,Ce=ie.isBatchedMesh===!0,ne=!!S.map,te=!!S.matcap,U=!!B,Ie=!!S.aoMap,xe=!!S.lightMap,Z=!!S.bumpMap,ee=!!S.normalMap,pe=!!S.displacementMap,he=!!S.emissiveMap,A=!!S.metalnessMap,T=!!S.roughnessMap,G=S.anisotropy>0,ae=S.clearcoat>0,re=S.iridescence>0,le=S.sheen>0,we=S.transmission>0,_e=G&&!!S.anisotropyMap,Me=ae&&!!S.clearcoatMap,Le=ae&&!!S.clearcoatNormalMap,je=ae&&!!S.clearcoatRoughnessMap,se=re&&!!S.iridescenceMap,Qe=re&&!!S.iridescenceThicknessMap,Xe=le&&!!S.sheenColorMap,Fe=le&&!!S.sheenRoughnessMap,be=!!S.specularMap,Ee=!!S.specularColorMap,ze=!!S.specularIntensityMap,Ke=we&&!!S.transmissionMap,ft=we&&!!S.thicknessMap,Ge=!!S.gradientMap,ce=!!S.alphaMap,L=S.alphaTest>0,ge=!!S.alphaHash,ve=!!S.extensions,De=!!j.attributes.uv1,Ne=!!j.attributes.uv2,tt=!!j.attributes.uv3;let nt=Gi;return S.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(nt=t.toneMapping),{isWebGL2:f,shaderID:O,shaderType:S.type,shaderName:S.name,vertexShader:V,fragmentShader:K,defines:S.defines,customVertexShaderID:J,customFragmentShaderID:fe,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:g,batching:Ce,instancing:Re,instancingColor:Re&&ie.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:de===null?t.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:mi,map:ne,matcap:te,envMap:U,envMapMode:U&&B.mapping,envMapCubeUVHeight:N,aoMap:Ie,lightMap:xe,bumpMap:Z,normalMap:ee,displacementMap:h&&pe,emissiveMap:he,normalMapObjectSpace:ee&&S.normalMapType===aS,normalMapTangentSpace:ee&&S.normalMapType===sS,metalnessMap:A,roughnessMap:T,anisotropy:G,anisotropyMap:_e,clearcoat:ae,clearcoatMap:Me,clearcoatNormalMap:Le,clearcoatRoughnessMap:je,iridescence:re,iridescenceMap:se,iridescenceThicknessMap:Qe,sheen:le,sheenColorMap:Xe,sheenRoughnessMap:Fe,specularMap:be,specularColorMap:Ee,specularIntensityMap:ze,transmission:we,transmissionMap:Ke,thicknessMap:ft,gradientMap:Ge,opaque:S.transparent===!1&&S.blending===hs,alphaMap:ce,alphaTest:L,alphaHash:ge,combine:S.combine,mapUv:ne&&y(S.map.channel),aoMapUv:Ie&&y(S.aoMap.channel),lightMapUv:xe&&y(S.lightMap.channel),bumpMapUv:Z&&y(S.bumpMap.channel),normalMapUv:ee&&y(S.normalMap.channel),displacementMapUv:pe&&y(S.displacementMap.channel),emissiveMapUv:he&&y(S.emissiveMap.channel),metalnessMapUv:A&&y(S.metalnessMap.channel),roughnessMapUv:T&&y(S.roughnessMap.channel),anisotropyMapUv:_e&&y(S.anisotropyMap.channel),clearcoatMapUv:Me&&y(S.clearcoatMap.channel),clearcoatNormalMapUv:Le&&y(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:je&&y(S.clearcoatRoughnessMap.channel),iridescenceMapUv:se&&y(S.iridescenceMap.channel),iridescenceThicknessMapUv:Qe&&y(S.iridescenceThicknessMap.channel),sheenColorMapUv:Xe&&y(S.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&y(S.sheenRoughnessMap.channel),specularMapUv:be&&y(S.specularMap.channel),specularColorMapUv:Ee&&y(S.specularColorMap.channel),specularIntensityMapUv:ze&&y(S.specularIntensityMap.channel),transmissionMapUv:Ke&&y(S.transmissionMap.channel),thicknessMapUv:ft&&y(S.thicknessMap.channel),alphaMapUv:ce&&y(S.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(ee||G),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,vertexUv1s:De,vertexUv2s:Ne,vertexUv3s:tt,pointsUvs:ie.isPoints===!0&&!!j.attributes.uv&&(ne||ce),fog:!!P,useFog:S.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:ie.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:Q,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&I.length>0,shadowMapType:t.shadowMap.type,toneMapping:nt,useLegacyLights:t._useLegacyLights,decodeVideoTexture:ne&&S.map.isVideoTexture===!0&&Je.getTransfer(S.map.colorSpace)===at,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===si,flipSided:S.side===rn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:ve&&S.extensions.derivatives===!0,extensionFragDepth:ve&&S.extensions.fragDepth===!0,extensionDrawBuffers:ve&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:ve&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ve&&S.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function d(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const I in S.defines)M.push(I),M.push(S.defines[I]);return S.isRawShaderMaterial===!1&&(x(M,S),v(M,S),M.push(t.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function x(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function v(S,M){o.disableAll(),M.isWebGL2&&o.enable(0),M.supportsVertexTextures&&o.enable(1),M.instancing&&o.enable(2),M.instancingColor&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.skinning&&o.enable(4),M.morphTargets&&o.enable(5),M.morphNormals&&o.enable(6),M.morphColors&&o.enable(7),M.premultipliedAlpha&&o.enable(8),M.shadowMapEnabled&&o.enable(9),M.useLegacyLights&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),S.push(o.mask)}function E(S){const M=_[S.type];let I;if(M){const H=Wn[M];I=XS.clone(H.uniforms)}else I=S.uniforms;return I}function w(S,M){let I;for(let H=0,ie=u.length;H<ie;H++){const P=u[H];if(P.cacheKey===M){I=P,++I.usedTimes;break}}return I===void 0&&(I=new ow(t,M,S,s),u.push(I)),I}function C(S){if(--S.usedTimes===0){const M=u.indexOf(S);u[M]=u[u.length-1],u.pop(),S.destroy()}}function R(S){l.remove(S)}function k(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:E,acquireProgram:w,releaseProgram:C,releaseShaderCache:R,programs:u,dispose:k}}function hw(){let t=new WeakMap;function e(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function n(s){t.delete(s)}function i(s,a,o){t.get(s)[a]=o}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function fw(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Hp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Gp(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(p,h,g,_,y,m){let d=t[e];return d===void 0?(d={id:p.id,object:p,geometry:h,material:g,groupOrder:_,renderOrder:p.renderOrder,z:y,group:m},t[e]=d):(d.id=p.id,d.object=p,d.geometry=h,d.material=g,d.groupOrder=_,d.renderOrder=p.renderOrder,d.z=y,d.group=m),e++,d}function o(p,h,g,_,y,m){const d=a(p,h,g,_,y,m);g.transmission>0?i.push(d):g.transparent===!0?r.push(d):n.push(d)}function l(p,h,g,_,y,m){const d=a(p,h,g,_,y,m);g.transmission>0?i.unshift(d):g.transparent===!0?r.unshift(d):n.unshift(d)}function u(p,h){n.length>1&&n.sort(p||fw),i.length>1&&i.sort(h||Hp),r.length>1&&r.sort(h||Hp)}function f(){for(let p=e,h=t.length;p<h;p++){const g=t[p];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:f,sort:u}}function pw(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Gp,t.set(i,[a])):r>=s.length?(a=new Gp,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function mw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new q,color:new Ye};break;case"SpotLight":n={position:new q,direction:new q,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new q,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":n={direction:new q,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":n={color:new Ye,position:new q,halfWidth:new q,halfHeight:new q};break}return t[e.id]=n,n}}}function gw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let vw=0;function _w(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function xw(t,e){const n=new mw,i=gw(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)r.probe.push(new q);const s=new q,a=new Rt,o=new Rt;function l(f,p){let h=0,g=0,_=0;for(let H=0;H<9;H++)r.probe[H].set(0,0,0);let y=0,m=0,d=0,x=0,v=0,E=0,w=0,C=0,R=0,k=0,S=0;f.sort(_w);const M=p===!0?Math.PI:1;for(let H=0,ie=f.length;H<ie;H++){const P=f[H],j=P.color,$=P.intensity,B=P.distance,N=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=j.r*$*M,g+=j.g*$*M,_+=j.b*$*M;else if(P.isLightProbe){for(let O=0;O<9;O++)r.probe[O].addScaledVector(P.sh.coefficients[O],$);S++}else if(P.isDirectionalLight){const O=n.get(P);if(O.color.copy(P.color).multiplyScalar(P.intensity*M),P.castShadow){const D=P.shadow,z=i.get(P);z.shadowBias=D.bias,z.shadowNormalBias=D.normalBias,z.shadowRadius=D.radius,z.shadowMapSize=D.mapSize,r.directionalShadow[y]=z,r.directionalShadowMap[y]=N,r.directionalShadowMatrix[y]=P.shadow.matrix,E++}r.directional[y]=O,y++}else if(P.isSpotLight){const O=n.get(P);O.position.setFromMatrixPosition(P.matrixWorld),O.color.copy(j).multiplyScalar($*M),O.distance=B,O.coneCos=Math.cos(P.angle),O.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),O.decay=P.decay,r.spot[d]=O;const D=P.shadow;if(P.map&&(r.spotLightMap[R]=P.map,R++,D.updateMatrices(P),P.castShadow&&k++),r.spotLightMatrix[d]=D.matrix,P.castShadow){const z=i.get(P);z.shadowBias=D.bias,z.shadowNormalBias=D.normalBias,z.shadowRadius=D.radius,z.shadowMapSize=D.mapSize,r.spotShadow[d]=z,r.spotShadowMap[d]=N,C++}d++}else if(P.isRectAreaLight){const O=n.get(P);O.color.copy(j).multiplyScalar($),O.halfWidth.set(P.width*.5,0,0),O.halfHeight.set(0,P.height*.5,0),r.rectArea[x]=O,x++}else if(P.isPointLight){const O=n.get(P);if(O.color.copy(P.color).multiplyScalar(P.intensity*M),O.distance=P.distance,O.decay=P.decay,P.castShadow){const D=P.shadow,z=i.get(P);z.shadowBias=D.bias,z.shadowNormalBias=D.normalBias,z.shadowRadius=D.radius,z.shadowMapSize=D.mapSize,z.shadowCameraNear=D.camera.near,z.shadowCameraFar=D.camera.far,r.pointShadow[m]=z,r.pointShadowMap[m]=N,r.pointShadowMatrix[m]=P.shadow.matrix,w++}r.point[m]=O,m++}else if(P.isHemisphereLight){const O=n.get(P);O.skyColor.copy(P.color).multiplyScalar($*M),O.groundColor.copy(P.groundColor).multiplyScalar($*M),r.hemi[v]=O,v++}}x>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ue.LTC_FLOAT_1,r.rectAreaLTC2=ue.LTC_FLOAT_2):(r.rectAreaLTC1=ue.LTC_HALF_1,r.rectAreaLTC2=ue.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ue.LTC_FLOAT_1,r.rectAreaLTC2=ue.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ue.LTC_HALF_1,r.rectAreaLTC2=ue.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=g,r.ambient[2]=_;const I=r.hash;(I.directionalLength!==y||I.pointLength!==m||I.spotLength!==d||I.rectAreaLength!==x||I.hemiLength!==v||I.numDirectionalShadows!==E||I.numPointShadows!==w||I.numSpotShadows!==C||I.numSpotMaps!==R||I.numLightProbes!==S)&&(r.directional.length=y,r.spot.length=d,r.rectArea.length=x,r.point.length=m,r.hemi.length=v,r.directionalShadow.length=E,r.directionalShadowMap.length=E,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=E,r.pointShadowMatrix.length=w,r.spotLightMatrix.length=C+R-k,r.spotLightMap.length=R,r.numSpotLightShadowsWithMaps=k,r.numLightProbes=S,I.directionalLength=y,I.pointLength=m,I.spotLength=d,I.rectAreaLength=x,I.hemiLength=v,I.numDirectionalShadows=E,I.numPointShadows=w,I.numSpotShadows=C,I.numSpotMaps=R,I.numLightProbes=S,r.version=vw++)}function u(f,p){let h=0,g=0,_=0,y=0,m=0;const d=p.matrixWorldInverse;for(let x=0,v=f.length;x<v;x++){const E=f[x];if(E.isDirectionalLight){const w=r.directional[h];w.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(d),h++}else if(E.isSpotLight){const w=r.spot[_];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(d),w.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(d),_++}else if(E.isRectAreaLight){const w=r.rectArea[y];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(d),o.identity(),a.copy(E.matrixWorld),a.premultiply(d),o.extractRotation(a),w.halfWidth.set(E.width*.5,0,0),w.halfHeight.set(0,E.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),y++}else if(E.isPointLight){const w=r.point[g];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(d),g++}else if(E.isHemisphereLight){const w=r.hemi[m];w.direction.setFromMatrixPosition(E.matrixWorld),w.direction.transformDirection(d),m++}}}return{setup:l,setupView:u,state:r}}function Vp(t,e){const n=new xw(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(p){i.push(p)}function o(p){r.push(p)}function l(p){n.setup(i,p)}function u(p){n.setupView(i,p)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o}}function yw(t,e){let n=new WeakMap;function i(s,a=0){const o=n.get(s);let l;return o===void 0?(l=new Vp(t,e),n.set(s,[l])):a>=o.length?(l=new Vp(t,e),o.push(l)):l=o[a],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class Sw extends Ia{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=iS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Mw extends Ia{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ew=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Tw=`uniform sampler2D shadow_pass;
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
}`;function ww(t,e,n){let i=new zv;const r=new et,s=new et,a=new Lt,o=new Sw({depthPacking:rS}),l=new Mw,u={},f=n.maxTextureSize,p={[qi]:rn,[rn]:qi,[si]:si},h=new Tr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:Ew,fragmentShader:Tw}),g=h.clone();g.defines.HORIZONTAL_PASS=1;const _=new $n;_.setAttribute("position",new Bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Di(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pv;let d=this.type;this.render=function(C,R,k){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const S=t.getRenderTarget(),M=t.getActiveCubeFace(),I=t.getActiveMipmapLevel(),H=t.state;H.setBlending(Hi),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const ie=d!==ni&&this.type===ni,P=d===ni&&this.type!==ni;for(let j=0,$=C.length;j<$;j++){const B=C[j],N=B.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const O=N.getFrameExtents();if(r.multiply(O),s.copy(N.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/O.x),r.x=s.x*O.x,N.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/O.y),r.y=s.y*O.y,N.mapSize.y=s.y)),N.map===null||ie===!0||P===!0){const z=this.type!==ni?{minFilter:qt,magFilter:qt}:{};N.map!==null&&N.map.dispose(),N.map=new Er(r.x,r.y,z),N.map.texture.name=B.name+".shadowMap",N.camera.updateProjectionMatrix()}t.setRenderTarget(N.map),t.clear();const D=N.getViewportCount();for(let z=0;z<D;z++){const Q=N.getViewport(z);a.set(s.x*Q.x,s.y*Q.y,s.x*Q.z,s.y*Q.w),H.viewport(a),N.updateMatrices(B,z),i=N.getFrustum(),E(R,k,N.camera,B,this.type)}N.isPointLightShadow!==!0&&this.type===ni&&x(N,k),N.needsUpdate=!1}d=this.type,m.needsUpdate=!1,t.setRenderTarget(S,M,I)};function x(C,R){const k=e.update(y);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,g.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,g.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Er(r.x,r.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(R,null,k,h,y,null),g.uniforms.shadow_pass.value=C.mapPass.texture,g.uniforms.resolution.value=C.mapSize,g.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(R,null,k,g,y,null)}function v(C,R,k,S){let M=null;const I=k.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(I!==void 0)M=I;else if(M=k.isPointLight===!0?l:o,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const H=M.uuid,ie=R.uuid;let P=u[H];P===void 0&&(P={},u[H]=P);let j=P[ie];j===void 0&&(j=M.clone(),P[ie]=j,R.addEventListener("dispose",w)),M=j}if(M.visible=R.visible,M.wireframe=R.wireframe,S===ni?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:p[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,k.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const H=t.properties.get(M);H.light=k}return M}function E(C,R,k,S,M){if(C.visible===!1)return;if(C.layers.test(R.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===ni)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,C.matrixWorld);const ie=e.update(C),P=C.material;if(Array.isArray(P)){const j=ie.groups;for(let $=0,B=j.length;$<B;$++){const N=j[$],O=P[N.materialIndex];if(O&&O.visible){const D=v(C,O,S,M);C.onBeforeShadow(t,C,R,k,ie,D,N),t.renderBufferDirect(k,null,ie,D,C,N),C.onAfterShadow(t,C,R,k,ie,D,N)}}}else if(P.visible){const j=v(C,P,S,M);C.onBeforeShadow(t,C,R,k,ie,j,null),t.renderBufferDirect(k,null,ie,j,C,null),C.onAfterShadow(t,C,R,k,ie,j,null)}}const H=C.children;for(let ie=0,P=H.length;ie<P;ie++)E(H[ie],R,k,S,M)}function w(C){C.target.removeEventListener("dispose",w);for(const k in u){const S=u[k],M=C.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}function Aw(t,e,n){const i=n.isWebGL2;function r(){let L=!1;const ge=new Lt;let ve=null;const De=new Lt(0,0,0,0);return{setMask:function(Ne){ve!==Ne&&!L&&(t.colorMask(Ne,Ne,Ne,Ne),ve=Ne)},setLocked:function(Ne){L=Ne},setClear:function(Ne,tt,nt,Tt,Ht){Ht===!0&&(Ne*=Tt,tt*=Tt,nt*=Tt),ge.set(Ne,tt,nt,Tt),De.equals(ge)===!1&&(t.clearColor(Ne,tt,nt,Tt),De.copy(ge))},reset:function(){L=!1,ve=null,De.set(-1,0,0,0)}}}function s(){let L=!1,ge=null,ve=null,De=null;return{setTest:function(Ne){Ne?Ce(t.DEPTH_TEST):ne(t.DEPTH_TEST)},setMask:function(Ne){ge!==Ne&&!L&&(t.depthMask(Ne),ge=Ne)},setFunc:function(Ne){if(ve!==Ne){switch(Ne){case Dy:t.depthFunc(t.NEVER);break;case Iy:t.depthFunc(t.ALWAYS);break;case Uy:t.depthFunc(t.LESS);break;case fl:t.depthFunc(t.LEQUAL);break;case Fy:t.depthFunc(t.EQUAL);break;case ky:t.depthFunc(t.GEQUAL);break;case Oy:t.depthFunc(t.GREATER);break;case zy:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ve=Ne}},setLocked:function(Ne){L=Ne},setClear:function(Ne){De!==Ne&&(t.clearDepth(Ne),De=Ne)},reset:function(){L=!1,ge=null,ve=null,De=null}}}function a(){let L=!1,ge=null,ve=null,De=null,Ne=null,tt=null,nt=null,Tt=null,Ht=null;return{setTest:function(it){L||(it?Ce(t.STENCIL_TEST):ne(t.STENCIL_TEST))},setMask:function(it){ge!==it&&!L&&(t.stencilMask(it),ge=it)},setFunc:function(it,Gt,Hn){(ve!==it||De!==Gt||Ne!==Hn)&&(t.stencilFunc(it,Gt,Hn),ve=it,De=Gt,Ne=Hn)},setOp:function(it,Gt,Hn){(tt!==it||nt!==Gt||Tt!==Hn)&&(t.stencilOp(it,Gt,Hn),tt=it,nt=Gt,Tt=Hn)},setLocked:function(it){L=it},setClear:function(it){Ht!==it&&(t.clearStencil(it),Ht=it)},reset:function(){L=!1,ge=null,ve=null,De=null,Ne=null,tt=null,nt=null,Tt=null,Ht=null}}}const o=new r,l=new s,u=new a,f=new WeakMap,p=new WeakMap;let h={},g={},_=new WeakMap,y=[],m=null,d=!1,x=null,v=null,E=null,w=null,C=null,R=null,k=null,S=new Ye(0,0,0),M=0,I=!1,H=null,ie=null,P=null,j=null,$=null;const B=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,O=0;const D=t.getParameter(t.VERSION);D.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(D)[1]),N=O>=1):D.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),N=O>=2);let z=null,Q={};const V=t.getParameter(t.SCISSOR_BOX),K=t.getParameter(t.VIEWPORT),J=new Lt().fromArray(V),fe=new Lt().fromArray(K);function de(L,ge,ve,De){const Ne=new Uint8Array(4),tt=t.createTexture();t.bindTexture(L,tt),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let nt=0;nt<ve;nt++)i&&(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)?t.texImage3D(ge,0,t.RGBA,1,1,De,0,t.RGBA,t.UNSIGNED_BYTE,Ne):t.texImage2D(ge+nt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Ne);return tt}const Re={};Re[t.TEXTURE_2D]=de(t.TEXTURE_2D,t.TEXTURE_2D,1),Re[t.TEXTURE_CUBE_MAP]=de(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Re[t.TEXTURE_2D_ARRAY]=de(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Re[t.TEXTURE_3D]=de(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),u.setClear(0),Ce(t.DEPTH_TEST),l.setFunc(fl),he(!1),A(wf),Ce(t.CULL_FACE),ee(Hi);function Ce(L){h[L]!==!0&&(t.enable(L),h[L]=!0)}function ne(L){h[L]!==!1&&(t.disable(L),h[L]=!1)}function te(L,ge){return g[L]!==ge?(t.bindFramebuffer(L,ge),g[L]=ge,i&&(L===t.DRAW_FRAMEBUFFER&&(g[t.FRAMEBUFFER]=ge),L===t.FRAMEBUFFER&&(g[t.DRAW_FRAMEBUFFER]=ge)),!0):!1}function U(L,ge){let ve=y,De=!1;if(L)if(ve=_.get(ge),ve===void 0&&(ve=[],_.set(ge,ve)),L.isWebGLMultipleRenderTargets){const Ne=L.texture;if(ve.length!==Ne.length||ve[0]!==t.COLOR_ATTACHMENT0){for(let tt=0,nt=Ne.length;tt<nt;tt++)ve[tt]=t.COLOR_ATTACHMENT0+tt;ve.length=Ne.length,De=!0}}else ve[0]!==t.COLOR_ATTACHMENT0&&(ve[0]=t.COLOR_ATTACHMENT0,De=!0);else ve[0]!==t.BACK&&(ve[0]=t.BACK,De=!0);De&&(n.isWebGL2?t.drawBuffers(ve):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ve))}function Ie(L){return m!==L?(t.useProgram(L),m=L,!0):!1}const xe={[or]:t.FUNC_ADD,[_y]:t.FUNC_SUBTRACT,[xy]:t.FUNC_REVERSE_SUBTRACT};if(i)xe[Cf]=t.MIN,xe[Rf]=t.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(xe[Cf]=L.MIN_EXT,xe[Rf]=L.MAX_EXT)}const Z={[yy]:t.ZERO,[Sy]:t.ONE,[My]:t.SRC_COLOR,[Hu]:t.SRC_ALPHA,[Cy]:t.SRC_ALPHA_SATURATE,[Ay]:t.DST_COLOR,[Ty]:t.DST_ALPHA,[Ey]:t.ONE_MINUS_SRC_COLOR,[Gu]:t.ONE_MINUS_SRC_ALPHA,[by]:t.ONE_MINUS_DST_COLOR,[wy]:t.ONE_MINUS_DST_ALPHA,[Ry]:t.CONSTANT_COLOR,[Ny]:t.ONE_MINUS_CONSTANT_COLOR,[Py]:t.CONSTANT_ALPHA,[Ly]:t.ONE_MINUS_CONSTANT_ALPHA};function ee(L,ge,ve,De,Ne,tt,nt,Tt,Ht,it){if(L===Hi){d===!0&&(ne(t.BLEND),d=!1);return}if(d===!1&&(Ce(t.BLEND),d=!0),L!==vy){if(L!==x||it!==I){if((v!==or||C!==or)&&(t.blendEquation(t.FUNC_ADD),v=or,C=or),it)switch(L){case hs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case hl:t.blendFunc(t.ONE,t.ONE);break;case Af:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case bf:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case hs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case hl:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Af:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case bf:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}E=null,w=null,R=null,k=null,S.set(0,0,0),M=0,x=L,I=it}return}Ne=Ne||ge,tt=tt||ve,nt=nt||De,(ge!==v||Ne!==C)&&(t.blendEquationSeparate(xe[ge],xe[Ne]),v=ge,C=Ne),(ve!==E||De!==w||tt!==R||nt!==k)&&(t.blendFuncSeparate(Z[ve],Z[De],Z[tt],Z[nt]),E=ve,w=De,R=tt,k=nt),(Tt.equals(S)===!1||Ht!==M)&&(t.blendColor(Tt.r,Tt.g,Tt.b,Ht),S.copy(Tt),M=Ht),x=L,I=!1}function pe(L,ge){L.side===si?ne(t.CULL_FACE):Ce(t.CULL_FACE);let ve=L.side===rn;ge&&(ve=!ve),he(ve),L.blending===hs&&L.transparent===!1?ee(Hi):ee(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),o.setMask(L.colorWrite);const De=L.stencilWrite;u.setTest(De),De&&(u.setMask(L.stencilWriteMask),u.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),u.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),G(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Ce(t.SAMPLE_ALPHA_TO_COVERAGE):ne(t.SAMPLE_ALPHA_TO_COVERAGE)}function he(L){H!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),H=L)}function A(L){L!==py?(Ce(t.CULL_FACE),L!==ie&&(L===wf?t.cullFace(t.BACK):L===my?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ne(t.CULL_FACE),ie=L}function T(L){L!==P&&(N&&t.lineWidth(L),P=L)}function G(L,ge,ve){L?(Ce(t.POLYGON_OFFSET_FILL),(j!==ge||$!==ve)&&(t.polygonOffset(ge,ve),j=ge,$=ve)):ne(t.POLYGON_OFFSET_FILL)}function ae(L){L?Ce(t.SCISSOR_TEST):ne(t.SCISSOR_TEST)}function re(L){L===void 0&&(L=t.TEXTURE0+B-1),z!==L&&(t.activeTexture(L),z=L)}function le(L,ge,ve){ve===void 0&&(z===null?ve=t.TEXTURE0+B-1:ve=z);let De=Q[ve];De===void 0&&(De={type:void 0,texture:void 0},Q[ve]=De),(De.type!==L||De.texture!==ge)&&(z!==ve&&(t.activeTexture(ve),z=ve),t.bindTexture(L,ge||Re[L]),De.type=L,De.texture=ge)}function we(){const L=Q[z];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function _e(){try{t.compressedTexImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Me(){try{t.compressedTexImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Le(){try{t.texSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function je(){try{t.texSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function se(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Qe(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Xe(){try{t.texStorage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Fe(){try{t.texStorage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function be(){try{t.texImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ee(){try{t.texImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ze(L){J.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),J.copy(L))}function Ke(L){fe.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),fe.copy(L))}function ft(L,ge){let ve=p.get(ge);ve===void 0&&(ve=new WeakMap,p.set(ge,ve));let De=ve.get(L);De===void 0&&(De=t.getUniformBlockIndex(ge,L.name),ve.set(L,De))}function Ge(L,ge){const De=p.get(ge).get(L);f.get(ge)!==De&&(t.uniformBlockBinding(ge,De,L.__bindingPointIndex),f.set(ge,De))}function ce(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},z=null,Q={},g={},_=new WeakMap,y=[],m=null,d=!1,x=null,v=null,E=null,w=null,C=null,R=null,k=null,S=new Ye(0,0,0),M=0,I=!1,H=null,ie=null,P=null,j=null,$=null,J.set(0,0,t.canvas.width,t.canvas.height),fe.set(0,0,t.canvas.width,t.canvas.height),o.reset(),l.reset(),u.reset()}return{buffers:{color:o,depth:l,stencil:u},enable:Ce,disable:ne,bindFramebuffer:te,drawBuffers:U,useProgram:Ie,setBlending:ee,setMaterial:pe,setFlipSided:he,setCullFace:A,setLineWidth:T,setPolygonOffset:G,setScissorTest:ae,activeTexture:re,bindTexture:le,unbindTexture:we,compressedTexImage2D:_e,compressedTexImage3D:Me,texImage2D:be,texImage3D:Ee,updateUBOMapping:ft,uniformBlockBinding:Ge,texStorage2D:Xe,texStorage3D:Fe,texSubImage2D:Le,texSubImage3D:je,compressedTexSubImage2D:se,compressedTexSubImage3D:Qe,scissor:ze,viewport:Ke,reset:ce}}function bw(t,e,n,i,r,s,a){const o=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new WeakMap;let p;const h=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,T){return g?new OffscreenCanvas(A,T):xl("canvas")}function y(A,T,G,ae){let re=1;if((A.width>ae||A.height>ae)&&(re=ae/Math.max(A.width,A.height)),re<1||T===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const le=T?_l:Math.floor,we=le(re*A.width),_e=le(re*A.height);p===void 0&&(p=_(we,_e));const Me=G?_(we,_e):p;return Me.width=we,Me.height=_e,Me.getContext("2d").drawImage(A,0,0,we,_e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+we+"x"+_e+")."),Me}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function m(A){return $u(A.width)&&$u(A.height)}function d(A){return o?!1:A.wrapS!==Fn||A.wrapT!==Fn||A.minFilter!==qt&&A.minFilter!==Mn}function x(A,T){return A.generateMipmaps&&T&&A.minFilter!==qt&&A.minFilter!==Mn}function v(A){t.generateMipmap(A)}function E(A,T,G,ae,re=!1){if(o===!1)return T;if(A!==null){if(t[A]!==void 0)return t[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let le=T;if(T===t.RED&&(G===t.FLOAT&&(le=t.R32F),G===t.HALF_FLOAT&&(le=t.R16F),G===t.UNSIGNED_BYTE&&(le=t.R8)),T===t.RED_INTEGER&&(G===t.UNSIGNED_BYTE&&(le=t.R8UI),G===t.UNSIGNED_SHORT&&(le=t.R16UI),G===t.UNSIGNED_INT&&(le=t.R32UI),G===t.BYTE&&(le=t.R8I),G===t.SHORT&&(le=t.R16I),G===t.INT&&(le=t.R32I)),T===t.RG&&(G===t.FLOAT&&(le=t.RG32F),G===t.HALF_FLOAT&&(le=t.RG16F),G===t.UNSIGNED_BYTE&&(le=t.RG8)),T===t.RGBA){const we=re?pl:Je.getTransfer(ae);G===t.FLOAT&&(le=t.RGBA32F),G===t.HALF_FLOAT&&(le=t.RGBA16F),G===t.UNSIGNED_BYTE&&(le=we===at?t.SRGB8_ALPHA8:t.RGBA8),G===t.UNSIGNED_SHORT_4_4_4_4&&(le=t.RGBA4),G===t.UNSIGNED_SHORT_5_5_5_1&&(le=t.RGB5_A1)}return(le===t.R16F||le===t.R32F||le===t.RG16F||le===t.RG32F||le===t.RGBA16F||le===t.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function w(A,T,G){return x(A,G)===!0||A.isFramebufferTexture&&A.minFilter!==qt&&A.minFilter!==Mn?Math.log2(Math.max(T.width,T.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?T.mipmaps.length:1}function C(A){return A===qt||A===Nf||A===xc?t.NEAREST:t.LINEAR}function R(A){const T=A.target;T.removeEventListener("dispose",R),S(T),T.isVideoTexture&&f.delete(T)}function k(A){const T=A.target;T.removeEventListener("dispose",k),I(T)}function S(A){const T=i.get(A);if(T.__webglInit===void 0)return;const G=A.source,ae=h.get(G);if(ae){const re=ae[T.__cacheKey];re.usedTimes--,re.usedTimes===0&&M(A),Object.keys(ae).length===0&&h.delete(G)}i.remove(A)}function M(A){const T=i.get(A);t.deleteTexture(T.__webglTexture);const G=A.source,ae=h.get(G);delete ae[T.__cacheKey],a.memory.textures--}function I(A){const T=A.texture,G=i.get(A),ae=i.get(T);if(ae.__webglTexture!==void 0&&(t.deleteTexture(ae.__webglTexture),a.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(G.__webglFramebuffer[re]))for(let le=0;le<G.__webglFramebuffer[re].length;le++)t.deleteFramebuffer(G.__webglFramebuffer[re][le]);else t.deleteFramebuffer(G.__webglFramebuffer[re]);G.__webglDepthbuffer&&t.deleteRenderbuffer(G.__webglDepthbuffer[re])}else{if(Array.isArray(G.__webglFramebuffer))for(let re=0;re<G.__webglFramebuffer.length;re++)t.deleteFramebuffer(G.__webglFramebuffer[re]);else t.deleteFramebuffer(G.__webglFramebuffer);if(G.__webglDepthbuffer&&t.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&t.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let re=0;re<G.__webglColorRenderbuffer.length;re++)G.__webglColorRenderbuffer[re]&&t.deleteRenderbuffer(G.__webglColorRenderbuffer[re]);G.__webglDepthRenderbuffer&&t.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let re=0,le=T.length;re<le;re++){const we=i.get(T[re]);we.__webglTexture&&(t.deleteTexture(we.__webglTexture),a.memory.textures--),i.remove(T[re])}i.remove(T),i.remove(A)}let H=0;function ie(){H=0}function P(){const A=H;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),H+=1,A}function j(A){const T=[];return T.push(A.wrapS),T.push(A.wrapT),T.push(A.wrapR||0),T.push(A.magFilter),T.push(A.minFilter),T.push(A.anisotropy),T.push(A.internalFormat),T.push(A.format),T.push(A.type),T.push(A.generateMipmaps),T.push(A.premultiplyAlpha),T.push(A.flipY),T.push(A.unpackAlignment),T.push(A.colorSpace),T.join()}function $(A,T){const G=i.get(A);if(A.isVideoTexture&&pe(A),A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){const ae=A.image;if(ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(G,A,T);return}}n.bindTexture(t.TEXTURE_2D,G.__webglTexture,t.TEXTURE0+T)}function B(A,T){const G=i.get(A);if(A.version>0&&G.__version!==A.version){J(G,A,T);return}n.bindTexture(t.TEXTURE_2D_ARRAY,G.__webglTexture,t.TEXTURE0+T)}function N(A,T){const G=i.get(A);if(A.version>0&&G.__version!==A.version){J(G,A,T);return}n.bindTexture(t.TEXTURE_3D,G.__webglTexture,t.TEXTURE0+T)}function O(A,T){const G=i.get(A);if(A.version>0&&G.__version!==A.version){fe(G,A,T);return}n.bindTexture(t.TEXTURE_CUBE_MAP,G.__webglTexture,t.TEXTURE0+T)}const D={[Xu]:t.REPEAT,[Fn]:t.CLAMP_TO_EDGE,[qu]:t.MIRRORED_REPEAT},z={[qt]:t.NEAREST,[Nf]:t.NEAREST_MIPMAP_NEAREST,[xc]:t.NEAREST_MIPMAP_LINEAR,[Mn]:t.LINEAR,[Yy]:t.LINEAR_MIPMAP_NEAREST,[Ta]:t.LINEAR_MIPMAP_LINEAR},Q={[oS]:t.NEVER,[fS]:t.ALWAYS,[lS]:t.LESS,[wv]:t.LEQUAL,[cS]:t.EQUAL,[hS]:t.GEQUAL,[uS]:t.GREATER,[dS]:t.NOTEQUAL};function V(A,T,G){if(G?(t.texParameteri(A,t.TEXTURE_WRAP_S,D[T.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,D[T.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,D[T.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,z[T.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,z[T.minFilter])):(t.texParameteri(A,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(A,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(T.wrapS!==Fn||T.wrapT!==Fn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(A,t.TEXTURE_MAG_FILTER,C(T.magFilter)),t.texParameteri(A,t.TEXTURE_MIN_FILTER,C(T.minFilter)),T.minFilter!==qt&&T.minFilter!==Mn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,Q[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ae=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===qt||T.minFilter!==xc&&T.minFilter!==Ta||T.type===Li&&e.has("OES_texture_float_linear")===!1||o===!1&&T.type===wa&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||i.get(T).__currentAnisotropy)&&(t.texParameterf(A,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy)}}function K(A,T){let G=!1;A.__webglInit===void 0&&(A.__webglInit=!0,T.addEventListener("dispose",R));const ae=T.source;let re=h.get(ae);re===void 0&&(re={},h.set(ae,re));const le=j(T);if(le!==A.__cacheKey){re[le]===void 0&&(re[le]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,G=!0),re[le].usedTimes++;const we=re[A.__cacheKey];we!==void 0&&(re[A.__cacheKey].usedTimes--,we.usedTimes===0&&M(T)),A.__cacheKey=le,A.__webglTexture=re[le].texture}return G}function J(A,T,G){let ae=t.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ae=t.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ae=t.TEXTURE_3D);const re=K(A,T),le=T.source;n.bindTexture(ae,A.__webglTexture,t.TEXTURE0+G);const we=i.get(le);if(le.version!==we.__version||re===!0){n.activeTexture(t.TEXTURE0+G);const _e=Je.getPrimaries(Je.workingColorSpace),Me=T.colorSpace===En?null:Je.getPrimaries(T.colorSpace),Le=T.colorSpace===En||_e===Me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);const je=d(T)&&m(T.image)===!1;let se=y(T.image,je,!1,r.maxTextureSize);se=he(T,se);const Qe=m(se)||o,Xe=s.convert(T.format,T.colorSpace);let Fe=s.convert(T.type),be=E(T.internalFormat,Xe,Fe,T.colorSpace,T.isVideoTexture);V(ae,T,Qe);let Ee;const ze=T.mipmaps,Ke=o&&T.isVideoTexture!==!0&&be!==Ev,ft=we.__version===void 0||re===!0,Ge=w(T,se,Qe);if(T.isDepthTexture)be=t.DEPTH_COMPONENT,o?T.type===Li?be=t.DEPTH_COMPONENT32F:T.type===Pi?be=t.DEPTH_COMPONENT24:T.type===mr?be=t.DEPTH24_STENCIL8:be=t.DEPTH_COMPONENT16:T.type===Li&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===gr&&be===t.DEPTH_COMPONENT&&T.type!==$d&&T.type!==Pi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=Pi,Fe=s.convert(T.type)),T.format===Ts&&be===t.DEPTH_COMPONENT&&(be=t.DEPTH_STENCIL,T.type!==mr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=mr,Fe=s.convert(T.type))),ft&&(Ke?n.texStorage2D(t.TEXTURE_2D,1,be,se.width,se.height):n.texImage2D(t.TEXTURE_2D,0,be,se.width,se.height,0,Xe,Fe,null));else if(T.isDataTexture)if(ze.length>0&&Qe){Ke&&ft&&n.texStorage2D(t.TEXTURE_2D,Ge,be,ze[0].width,ze[0].height);for(let ce=0,L=ze.length;ce<L;ce++)Ee=ze[ce],Ke?n.texSubImage2D(t.TEXTURE_2D,ce,0,0,Ee.width,Ee.height,Xe,Fe,Ee.data):n.texImage2D(t.TEXTURE_2D,ce,be,Ee.width,Ee.height,0,Xe,Fe,Ee.data);T.generateMipmaps=!1}else Ke?(ft&&n.texStorage2D(t.TEXTURE_2D,Ge,be,se.width,se.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,se.width,se.height,Xe,Fe,se.data)):n.texImage2D(t.TEXTURE_2D,0,be,se.width,se.height,0,Xe,Fe,se.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Ke&&ft&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ge,be,ze[0].width,ze[0].height,se.depth);for(let ce=0,L=ze.length;ce<L;ce++)Ee=ze[ce],T.format!==kn?Xe!==null?Ke?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ce,0,0,0,Ee.width,Ee.height,se.depth,Xe,Ee.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ce,be,Ee.width,Ee.height,se.depth,0,Ee.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?n.texSubImage3D(t.TEXTURE_2D_ARRAY,ce,0,0,0,Ee.width,Ee.height,se.depth,Xe,Fe,Ee.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ce,be,Ee.width,Ee.height,se.depth,0,Xe,Fe,Ee.data)}else{Ke&&ft&&n.texStorage2D(t.TEXTURE_2D,Ge,be,ze[0].width,ze[0].height);for(let ce=0,L=ze.length;ce<L;ce++)Ee=ze[ce],T.format!==kn?Xe!==null?Ke?n.compressedTexSubImage2D(t.TEXTURE_2D,ce,0,0,Ee.width,Ee.height,Xe,Ee.data):n.compressedTexImage2D(t.TEXTURE_2D,ce,be,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?n.texSubImage2D(t.TEXTURE_2D,ce,0,0,Ee.width,Ee.height,Xe,Fe,Ee.data):n.texImage2D(t.TEXTURE_2D,ce,be,Ee.width,Ee.height,0,Xe,Fe,Ee.data)}else if(T.isDataArrayTexture)Ke?(ft&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ge,be,se.width,se.height,se.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,Xe,Fe,se.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,be,se.width,se.height,se.depth,0,Xe,Fe,se.data);else if(T.isData3DTexture)Ke?(ft&&n.texStorage3D(t.TEXTURE_3D,Ge,be,se.width,se.height,se.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,Xe,Fe,se.data)):n.texImage3D(t.TEXTURE_3D,0,be,se.width,se.height,se.depth,0,Xe,Fe,se.data);else if(T.isFramebufferTexture){if(ft)if(Ke)n.texStorage2D(t.TEXTURE_2D,Ge,be,se.width,se.height);else{let ce=se.width,L=se.height;for(let ge=0;ge<Ge;ge++)n.texImage2D(t.TEXTURE_2D,ge,be,ce,L,0,Xe,Fe,null),ce>>=1,L>>=1}}else if(ze.length>0&&Qe){Ke&&ft&&n.texStorage2D(t.TEXTURE_2D,Ge,be,ze[0].width,ze[0].height);for(let ce=0,L=ze.length;ce<L;ce++)Ee=ze[ce],Ke?n.texSubImage2D(t.TEXTURE_2D,ce,0,0,Xe,Fe,Ee):n.texImage2D(t.TEXTURE_2D,ce,be,Xe,Fe,Ee);T.generateMipmaps=!1}else Ke?(ft&&n.texStorage2D(t.TEXTURE_2D,Ge,be,se.width,se.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Xe,Fe,se)):n.texImage2D(t.TEXTURE_2D,0,be,Xe,Fe,se);x(T,Qe)&&v(ae),we.__version=le.version,T.onUpdate&&T.onUpdate(T)}A.__version=T.version}function fe(A,T,G){if(T.image.length!==6)return;const ae=K(A,T),re=T.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+G);const le=i.get(re);if(re.version!==le.__version||ae===!0){n.activeTexture(t.TEXTURE0+G);const we=Je.getPrimaries(Je.workingColorSpace),_e=T.colorSpace===En?null:Je.getPrimaries(T.colorSpace),Me=T.colorSpace===En||we===_e?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const Le=T.isCompressedTexture||T.image[0].isCompressedTexture,je=T.image[0]&&T.image[0].isDataTexture,se=[];for(let ce=0;ce<6;ce++)!Le&&!je?se[ce]=y(T.image[ce],!1,!0,r.maxCubemapSize):se[ce]=je?T.image[ce].image:T.image[ce],se[ce]=he(T,se[ce]);const Qe=se[0],Xe=m(Qe)||o,Fe=s.convert(T.format,T.colorSpace),be=s.convert(T.type),Ee=E(T.internalFormat,Fe,be,T.colorSpace),ze=o&&T.isVideoTexture!==!0,Ke=le.__version===void 0||ae===!0;let ft=w(T,Qe,Xe);V(t.TEXTURE_CUBE_MAP,T,Xe);let Ge;if(Le){ze&&Ke&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ft,Ee,Qe.width,Qe.height);for(let ce=0;ce<6;ce++){Ge=se[ce].mipmaps;for(let L=0;L<Ge.length;L++){const ge=Ge[L];T.format!==kn?Fe!==null?ze?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,L,0,0,ge.width,ge.height,Fe,ge.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,L,Ee,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,L,0,0,ge.width,ge.height,Fe,be,ge.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,L,Ee,ge.width,ge.height,0,Fe,be,ge.data)}}}else{Ge=T.mipmaps,ze&&Ke&&(Ge.length>0&&ft++,n.texStorage2D(t.TEXTURE_CUBE_MAP,ft,Ee,se[0].width,se[0].height));for(let ce=0;ce<6;ce++)if(je){ze?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,se[ce].width,se[ce].height,Fe,be,se[ce].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Ee,se[ce].width,se[ce].height,0,Fe,be,se[ce].data);for(let L=0;L<Ge.length;L++){const ve=Ge[L].image[ce].image;ze?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,L+1,0,0,ve.width,ve.height,Fe,be,ve.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,L+1,Ee,ve.width,ve.height,0,Fe,be,ve.data)}}else{ze?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Fe,be,se[ce]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Ee,Fe,be,se[ce]);for(let L=0;L<Ge.length;L++){const ge=Ge[L];ze?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,L+1,0,0,Fe,be,ge.image[ce]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,L+1,Ee,Fe,be,ge.image[ce])}}}x(T,Xe)&&v(t.TEXTURE_CUBE_MAP),le.__version=re.version,T.onUpdate&&T.onUpdate(T)}A.__version=T.version}function de(A,T,G,ae,re,le){const we=s.convert(G.format,G.colorSpace),_e=s.convert(G.type),Me=E(G.internalFormat,we,_e,G.colorSpace);if(!i.get(T).__hasExternalTextures){const je=Math.max(1,T.width>>le),se=Math.max(1,T.height>>le);re===t.TEXTURE_3D||re===t.TEXTURE_2D_ARRAY?n.texImage3D(re,le,Me,je,se,T.depth,0,we,_e,null):n.texImage2D(re,le,Me,je,se,0,we,_e,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),ee(T)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ae,re,i.get(G).__webglTexture,0,Z(T)):(re===t.TEXTURE_2D||re>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ae,re,i.get(G).__webglTexture,le),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Re(A,T,G){if(t.bindRenderbuffer(t.RENDERBUFFER,A),T.depthBuffer&&!T.stencilBuffer){let ae=o===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(G||ee(T)){const re=T.depthTexture;re&&re.isDepthTexture&&(re.type===Li?ae=t.DEPTH_COMPONENT32F:re.type===Pi&&(ae=t.DEPTH_COMPONENT24));const le=Z(T);ee(T)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,le,ae,T.width,T.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,le,ae,T.width,T.height)}else t.renderbufferStorage(t.RENDERBUFFER,ae,T.width,T.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,A)}else if(T.depthBuffer&&T.stencilBuffer){const ae=Z(T);G&&ee(T)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ae,t.DEPTH24_STENCIL8,T.width,T.height):ee(T)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ae,t.DEPTH24_STENCIL8,T.width,T.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,A)}else{const ae=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let re=0;re<ae.length;re++){const le=ae[re],we=s.convert(le.format,le.colorSpace),_e=s.convert(le.type),Me=E(le.internalFormat,we,_e,le.colorSpace),Le=Z(T);G&&ee(T)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Le,Me,T.width,T.height):ee(T)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Le,Me,T.width,T.height):t.renderbufferStorage(t.RENDERBUFFER,Me,T.width,T.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ce(A,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),$(T.depthTexture,0);const ae=i.get(T.depthTexture).__webglTexture,re=Z(T);if(T.depthTexture.format===gr)ee(T)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ae,0,re):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ae,0);else if(T.depthTexture.format===Ts)ee(T)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ae,0,re):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function ne(A){const T=i.get(A),G=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!T.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Ce(T.__webglFramebuffer,A)}else if(G){T.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer[ae]),T.__webglDepthbuffer[ae]=t.createRenderbuffer(),Re(T.__webglDepthbuffer[ae],A,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=t.createRenderbuffer(),Re(T.__webglDepthbuffer,A,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function te(A,T,G){const ae=i.get(A);T!==void 0&&de(ae.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),G!==void 0&&ne(A)}function U(A){const T=A.texture,G=i.get(A),ae=i.get(T);A.addEventListener("dispose",k),A.isWebGLMultipleRenderTargets!==!0&&(ae.__webglTexture===void 0&&(ae.__webglTexture=t.createTexture()),ae.__version=T.version,a.memory.textures++);const re=A.isWebGLCubeRenderTarget===!0,le=A.isWebGLMultipleRenderTargets===!0,we=m(A)||o;if(re){G.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(o&&T.mipmaps&&T.mipmaps.length>0){G.__webglFramebuffer[_e]=[];for(let Me=0;Me<T.mipmaps.length;Me++)G.__webglFramebuffer[_e][Me]=t.createFramebuffer()}else G.__webglFramebuffer[_e]=t.createFramebuffer()}else{if(o&&T.mipmaps&&T.mipmaps.length>0){G.__webglFramebuffer=[];for(let _e=0;_e<T.mipmaps.length;_e++)G.__webglFramebuffer[_e]=t.createFramebuffer()}else G.__webglFramebuffer=t.createFramebuffer();if(le)if(r.drawBuffers){const _e=A.texture;for(let Me=0,Le=_e.length;Me<Le;Me++){const je=i.get(_e[Me]);je.__webglTexture===void 0&&(je.__webglTexture=t.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&A.samples>0&&ee(A)===!1){const _e=le?T:[T];G.__webglMultisampledFramebuffer=t.createFramebuffer(),G.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let Me=0;Me<_e.length;Me++){const Le=_e[Me];G.__webglColorRenderbuffer[Me]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,G.__webglColorRenderbuffer[Me]);const je=s.convert(Le.format,Le.colorSpace),se=s.convert(Le.type),Qe=E(Le.internalFormat,je,se,Le.colorSpace,A.isXRRenderTarget===!0),Xe=Z(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,Xe,Qe,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.RENDERBUFFER,G.__webglColorRenderbuffer[Me])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(G.__webglDepthRenderbuffer=t.createRenderbuffer(),Re(G.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(re){n.bindTexture(t.TEXTURE_CUBE_MAP,ae.__webglTexture),V(t.TEXTURE_CUBE_MAP,T,we);for(let _e=0;_e<6;_e++)if(o&&T.mipmaps&&T.mipmaps.length>0)for(let Me=0;Me<T.mipmaps.length;Me++)de(G.__webglFramebuffer[_e][Me],A,T,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Me);else de(G.__webglFramebuffer[_e],A,T,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);x(T,we)&&v(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(le){const _e=A.texture;for(let Me=0,Le=_e.length;Me<Le;Me++){const je=_e[Me],se=i.get(je);n.bindTexture(t.TEXTURE_2D,se.__webglTexture),V(t.TEXTURE_2D,je,we),de(G.__webglFramebuffer,A,je,t.COLOR_ATTACHMENT0+Me,t.TEXTURE_2D,0),x(je,we)&&v(t.TEXTURE_2D)}n.unbindTexture()}else{let _e=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(o?_e=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(_e,ae.__webglTexture),V(_e,T,we),o&&T.mipmaps&&T.mipmaps.length>0)for(let Me=0;Me<T.mipmaps.length;Me++)de(G.__webglFramebuffer[Me],A,T,t.COLOR_ATTACHMENT0,_e,Me);else de(G.__webglFramebuffer,A,T,t.COLOR_ATTACHMENT0,_e,0);x(T,we)&&v(_e),n.unbindTexture()}A.depthBuffer&&ne(A)}function Ie(A){const T=m(A)||o,G=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ae=0,re=G.length;ae<re;ae++){const le=G[ae];if(x(le,T)){const we=A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,_e=i.get(le).__webglTexture;n.bindTexture(we,_e),v(we),n.unbindTexture()}}}function xe(A){if(o&&A.samples>0&&ee(A)===!1){const T=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],G=A.width,ae=A.height;let re=t.COLOR_BUFFER_BIT;const le=[],we=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,_e=i.get(A),Me=A.isWebGLMultipleRenderTargets===!0;if(Me)for(let Le=0;Le<T.length;Le++)n.bindFramebuffer(t.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Le,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,_e.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Le,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let Le=0;Le<T.length;Le++){le.push(t.COLOR_ATTACHMENT0+Le),A.depthBuffer&&le.push(we);const je=_e.__ignoreDepthValues!==void 0?_e.__ignoreDepthValues:!1;if(je===!1&&(A.depthBuffer&&(re|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&(re|=t.STENCIL_BUFFER_BIT)),Me&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,_e.__webglColorRenderbuffer[Le]),je===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[we]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[we])),Me){const se=i.get(T[Le]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,se,0)}t.blitFramebuffer(0,0,G,ae,0,0,G,ae,re,t.NEAREST),u&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,le)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Me)for(let Le=0;Le<T.length;Le++){n.bindFramebuffer(t.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Le,t.RENDERBUFFER,_e.__webglColorRenderbuffer[Le]);const je=i.get(T[Le]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,_e.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Le,t.TEXTURE_2D,je,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}}function Z(A){return Math.min(r.maxSamples,A.samples)}function ee(A){const T=i.get(A);return o&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function pe(A){const T=a.render.frame;f.get(A)!==T&&(f.set(A,T),A.update())}function he(A,T){const G=A.colorSpace,ae=A.format,re=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Yu||G!==mi&&G!==En&&(Je.getTransfer(G)===at?o===!1?e.has("EXT_sRGB")===!0&&ae===kn?(A.format=Yu,A.minFilter=Mn,A.generateMipmaps=!1):T=bv.sRGBToLinear(T):(ae!==kn||re!==Vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),T}this.allocateTextureUnit=P,this.resetTextureUnits=ie,this.setTexture2D=$,this.setTexture2DArray=B,this.setTexture3D=N,this.setTextureCube=O,this.rebindTextures=te,this.setupRenderTarget=U,this.updateRenderTargetMipmap=Ie,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=ne,this.setupFrameBufferTexture=de,this.useMultisampledRTT=ee}function Cw(t,e,n){const i=n.isWebGL2;function r(s,a=En){let o;const l=Je.getTransfer(a);if(s===Vi)return t.UNSIGNED_BYTE;if(s===_v)return t.UNSIGNED_SHORT_4_4_4_4;if(s===xv)return t.UNSIGNED_SHORT_5_5_5_1;if(s===$y)return t.BYTE;if(s===Ky)return t.SHORT;if(s===$d)return t.UNSIGNED_SHORT;if(s===vv)return t.INT;if(s===Pi)return t.UNSIGNED_INT;if(s===Li)return t.FLOAT;if(s===wa)return i?t.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Zy)return t.ALPHA;if(s===kn)return t.RGBA;if(s===Qy)return t.LUMINANCE;if(s===Jy)return t.LUMINANCE_ALPHA;if(s===gr)return t.DEPTH_COMPONENT;if(s===Ts)return t.DEPTH_STENCIL;if(s===Yu)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===eS)return t.RED;if(s===yv)return t.RED_INTEGER;if(s===tS)return t.RG;if(s===Sv)return t.RG_INTEGER;if(s===Mv)return t.RGBA_INTEGER;if(s===yc||s===Sc||s===Mc||s===Ec)if(l===at)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===yc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Sc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Mc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ec)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===yc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Sc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Mc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ec)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Pf||s===Lf||s===Df||s===If)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Pf)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Lf)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Df)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===If)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Ev)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Uf||s===Ff)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Uf)return l===at?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Ff)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===kf||s===Of||s===zf||s===Bf||s===jf||s===Hf||s===Gf||s===Vf||s===Wf||s===Xf||s===qf||s===Yf||s===$f||s===Kf)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===kf)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Of)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===zf)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Bf)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===jf)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Hf)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Gf)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Vf)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Wf)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Xf)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===qf)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Yf)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===$f)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Kf)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Tc||s===Zf||s===Qf)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Tc)return l===at?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Zf)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Qf)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===nS||s===Jf||s===ep||s===tp)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===Tc)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Jf)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ep)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===tp)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===mr?i?t.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class Rw extends dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class To extends sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Nw={type:"move"};class qc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new To,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new To,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new To,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const y of e.hand.values()){const m=n.getJointPose(y,i),d=this._getHandJoint(u,y);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const f=u.joints["index-finger-tip"],p=u.joints["thumb-tip"],h=f.position.distanceTo(p.position),g=.02,_=.005;u.inputState.pinching&&h>g+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=g-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Nw)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new To;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class Pw extends Rs{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,u=null,f=null,p=null,h=null,g=null,_=null;const y=n.getContextAttributes();let m=null,d=null;const x=[],v=[],E=new et;let w=null;const C=new dn;C.layers.enable(1),C.viewport=new Lt;const R=new dn;R.layers.enable(2),R.viewport=new Lt;const k=[C,R],S=new Rw;S.layers.enable(1),S.layers.enable(2);let M=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let K=x[V];return K===void 0&&(K=new qc,x[V]=K),K.getTargetRaySpace()},this.getControllerGrip=function(V){let K=x[V];return K===void 0&&(K=new qc,x[V]=K),K.getGripSpace()},this.getHand=function(V){let K=x[V];return K===void 0&&(K=new qc,x[V]=K),K.getHandSpace()};function H(V){const K=v.indexOf(V.inputSource);if(K===-1)return;const J=x[K];J!==void 0&&(J.update(V.inputSource,V.frame,u||a),J.dispatchEvent({type:V.type,data:V.inputSource}))}function ie(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",ie),r.removeEventListener("inputsourceschange",P);for(let V=0;V<x.length;V++){const K=v[V];K!==null&&(v[V]=null,x[V].disconnect(K))}M=null,I=null,e.setRenderTarget(m),g=null,h=null,p=null,r=null,d=null,Q.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(V){u=V},this.getBaseLayer=function(){return h!==null?h:g},this.getBinding=function(){return p},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",ie),r.addEventListener("inputsourceschange",P),y.xrCompatible!==!0&&await n.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(E),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const K={antialias:r.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,n,K),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),d=new Er(g.framebufferWidth,g.framebufferHeight,{format:kn,type:Vi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let K=null,J=null,fe=null;y.depth&&(fe=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,K=y.stencil?Ts:gr,J=y.stencil?mr:Pi);const de={colorFormat:n.RGBA8,depthFormat:fe,scaleFactor:s};p=new XRWebGLBinding(r,n),h=p.createProjectionLayer(de),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),d=new Er(h.textureWidth,h.textureHeight,{format:kn,type:Vi,depthTexture:new jv(h.textureWidth,h.textureHeight,J,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});const Re=e.properties.get(d);Re.__ignoreDepthValues=h.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await r.requestReferenceSpace(o),Q.setContext(r),Q.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function P(V){for(let K=0;K<V.removed.length;K++){const J=V.removed[K],fe=v.indexOf(J);fe>=0&&(v[fe]=null,x[fe].disconnect(J))}for(let K=0;K<V.added.length;K++){const J=V.added[K];let fe=v.indexOf(J);if(fe===-1){for(let Re=0;Re<x.length;Re++)if(Re>=v.length){v.push(J),fe=Re;break}else if(v[Re]===null){v[Re]=J,fe=Re;break}if(fe===-1)break}const de=x[fe];de&&de.connect(J)}}const j=new q,$=new q;function B(V,K,J){j.setFromMatrixPosition(K.matrixWorld),$.setFromMatrixPosition(J.matrixWorld);const fe=j.distanceTo($),de=K.projectionMatrix.elements,Re=J.projectionMatrix.elements,Ce=de[14]/(de[10]-1),ne=de[14]/(de[10]+1),te=(de[9]+1)/de[5],U=(de[9]-1)/de[5],Ie=(de[8]-1)/de[0],xe=(Re[8]+1)/Re[0],Z=Ce*Ie,ee=Ce*xe,pe=fe/(-Ie+xe),he=pe*-Ie;K.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(he),V.translateZ(pe),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const A=Ce+pe,T=ne+pe,G=Z-he,ae=ee+(fe-he),re=te*ne/T*A,le=U*ne/T*A;V.projectionMatrix.makePerspective(G,ae,re,le,A,T),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function N(V,K){K===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(K.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;S.near=R.near=C.near=V.near,S.far=R.far=C.far=V.far,(M!==S.near||I!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),M=S.near,I=S.far);const K=V.parent,J=S.cameras;N(S,K);for(let fe=0;fe<J.length;fe++)N(J[fe],K);J.length===2?B(S,C,R):S.projectionMatrix.copy(C.projectionMatrix),O(V,S,K)};function O(V,K,J){J===null?V.matrix.copy(K.matrixWorld):(V.matrix.copy(J.matrixWorld),V.matrix.invert(),V.matrix.multiply(K.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(K.projectionMatrix),V.projectionMatrixInverse.copy(K.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Aa*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&g===null))return l},this.setFoveation=function(V){l=V,h!==null&&(h.fixedFoveation=V),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=V)};let D=null;function z(V,K){if(f=K.getViewerPose(u||a),_=K,f!==null){const J=f.views;g!==null&&(e.setRenderTargetFramebuffer(d,g.framebuffer),e.setRenderTarget(d));let fe=!1;J.length!==S.cameras.length&&(S.cameras.length=0,fe=!0);for(let de=0;de<J.length;de++){const Re=J[de];let Ce=null;if(g!==null)Ce=g.getViewport(Re);else{const te=p.getViewSubImage(h,Re);Ce=te.viewport,de===0&&(e.setRenderTargetTextures(d,te.colorTexture,h.ignoreDepthValues?void 0:te.depthStencilTexture),e.setRenderTarget(d))}let ne=k[de];ne===void 0&&(ne=new dn,ne.layers.enable(de),ne.viewport=new Lt,k[de]=ne),ne.matrix.fromArray(Re.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(Re.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),de===0&&(S.matrix.copy(ne.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),fe===!0&&S.cameras.push(ne)}}for(let J=0;J<x.length;J++){const fe=v[J],de=x[J];fe!==null&&de!==void 0&&de.update(fe,K,u||a)}D&&D(V,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),_=null}const Q=new Bv;Q.setAnimationLoop(z),this.setAnimationLoop=function(V){D=V},this.dispose=function(){}}}function Lw(t,e){function n(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Fv(t)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,x,v,E){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),p(m,d)):d.isMeshPhongMaterial?(s(m,d),f(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&g(m,d,E)):d.isMeshMatcapMaterial?(s(m,d),_(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),y(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,x,v):d.isSpriteMaterial?u(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,n(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===rn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,n(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===rn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,n(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,n(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const x=e.get(d).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const v=t._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*v,n(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,x,v){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*x,m.scale.value=v*.5,d.map&&(m.map.value=d.map,n(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function f(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function p(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function g(m,d,x){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===rn&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function y(m,d){const x=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Dw(t,e,n,i){let r={},s={},a=[];const o=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,v){const E=v.program;i.uniformBlockBinding(x,E)}function u(x,v){let E=r[x.id];E===void 0&&(_(x),E=f(x),r[x.id]=E,x.addEventListener("dispose",m));const w=v.program;i.updateUBOMapping(x,w);const C=e.render.frame;s[x.id]!==C&&(h(x),s[x.id]=C)}function f(x){const v=p();x.__bindingPointIndex=v;const E=t.createBuffer(),w=x.__size,C=x.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,w,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,E),E}function p(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const v=r[x.id],E=x.uniforms,w=x.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let C=0,R=E.length;C<R;C++){const k=Array.isArray(E[C])?E[C]:[E[C]];for(let S=0,M=k.length;S<M;S++){const I=k[S];if(g(I,C,S,w)===!0){const H=I.__offset,ie=Array.isArray(I.value)?I.value:[I.value];let P=0;for(let j=0;j<ie.length;j++){const $=ie[j],B=y($);typeof $=="number"||typeof $=="boolean"?(I.__data[0]=$,t.bufferSubData(t.UNIFORM_BUFFER,H+P,I.__data)):$.isMatrix3?(I.__data[0]=$.elements[0],I.__data[1]=$.elements[1],I.__data[2]=$.elements[2],I.__data[3]=0,I.__data[4]=$.elements[3],I.__data[5]=$.elements[4],I.__data[6]=$.elements[5],I.__data[7]=0,I.__data[8]=$.elements[6],I.__data[9]=$.elements[7],I.__data[10]=$.elements[8],I.__data[11]=0):($.toArray(I.__data,P),P+=B.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,H,I.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function g(x,v,E,w){const C=x.value,R=v+"_"+E;if(w[R]===void 0)return typeof C=="number"||typeof C=="boolean"?w[R]=C:w[R]=C.clone(),!0;{const k=w[R];if(typeof C=="number"||typeof C=="boolean"){if(k!==C)return w[R]=C,!0}else if(k.equals(C)===!1)return k.copy(C),!0}return!1}function _(x){const v=x.uniforms;let E=0;const w=16;for(let R=0,k=v.length;R<k;R++){const S=Array.isArray(v[R])?v[R]:[v[R]];for(let M=0,I=S.length;M<I;M++){const H=S[M],ie=Array.isArray(H.value)?H.value:[H.value];for(let P=0,j=ie.length;P<j;P++){const $=ie[P],B=y($),N=E%w;N!==0&&w-N<B.boundary&&(E+=w-N),H.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=E,E+=B.storage}}}const C=E%w;return C>0&&(E+=w-C),x.__size=E,x.__cache={},this}function y(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function m(x){const v=x.target;v.removeEventListener("dispose",m);const E=a.indexOf(v.__bindingPointIndex);a.splice(E,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function d(){for(const x in r)t.deleteBuffer(r[x]);a=[],r={},s={}}return{bind:l,update:u,dispose:d}}class eh{constructor(e={}){const{canvas:n=CS(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=a;const g=new Uint32Array(4),_=new Int32Array(4);let y=null,m=null;const d=[],x=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Pt,this._useLegacyLights=!1,this.toneMapping=Gi,this.toneMappingExposure=1;const v=this;let E=!1,w=0,C=0,R=null,k=-1,S=null;const M=new Lt,I=new Lt;let H=null;const ie=new Ye(0);let P=0,j=n.width,$=n.height,B=1,N=null,O=null;const D=new Lt(0,0,j,$),z=new Lt(0,0,j,$);let Q=!1;const V=new zv;let K=!1,J=!1,fe=null;const de=new Rt,Re=new et,Ce=new q,ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function te(){return R===null?B:1}let U=i;function Ie(b,F){for(let X=0;X<b.length;X++){const Y=b[X],W=n.getContext(Y,F);if(W!==null)return W}return null}try{const b={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Yd}`),n.addEventListener("webglcontextlost",ce,!1),n.addEventListener("webglcontextrestored",L,!1),n.addEventListener("webglcontextcreationerror",ge,!1),U===null){const F=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&F.shift(),U=Ie(F,b),U===null)throw Ie(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&U instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let xe,Z,ee,pe,he,A,T,G,ae,re,le,we,_e,Me,Le,je,se,Qe,Xe,Fe,be,Ee,ze,Ke;function ft(){xe=new G1(U),Z=new F1(U,xe,e),xe.init(Z),Ee=new Cw(U,xe,Z),ee=new Aw(U,xe,Z),pe=new X1(U),he=new hw,A=new bw(U,xe,ee,he,Z,Ee,pe),T=new O1(v),G=new H1(v),ae=new JS(U,Z),ze=new I1(U,xe,ae,Z),re=new V1(U,ae,pe,ze),le=new K1(U,re,ae,pe),Xe=new $1(U,Z,A),je=new k1(he),we=new dw(v,T,G,xe,Z,ze,je),_e=new Lw(v,he),Me=new pw,Le=new yw(xe,Z),Qe=new D1(v,T,G,ee,le,h,l),se=new ww(v,le,Z),Ke=new Dw(U,pe,Z,ee),Fe=new U1(U,xe,pe,Z),be=new W1(U,xe,pe,Z),pe.programs=we.programs,v.capabilities=Z,v.extensions=xe,v.properties=he,v.renderLists=Me,v.shadowMap=se,v.state=ee,v.info=pe}ft();const Ge=new Pw(v,U);this.xr=Ge,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const b=xe.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=xe.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(b){b!==void 0&&(B=b,this.setSize(j,$,!1))},this.getSize=function(b){return b.set(j,$)},this.setSize=function(b,F,X=!0){if(Ge.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=b,$=F,n.width=Math.floor(b*B),n.height=Math.floor(F*B),X===!0&&(n.style.width=b+"px",n.style.height=F+"px"),this.setViewport(0,0,b,F)},this.getDrawingBufferSize=function(b){return b.set(j*B,$*B).floor()},this.setDrawingBufferSize=function(b,F,X){j=b,$=F,B=X,n.width=Math.floor(b*X),n.height=Math.floor(F*X),this.setViewport(0,0,b,F)},this.getCurrentViewport=function(b){return b.copy(M)},this.getViewport=function(b){return b.copy(D)},this.setViewport=function(b,F,X,Y){b.isVector4?D.set(b.x,b.y,b.z,b.w):D.set(b,F,X,Y),ee.viewport(M.copy(D).multiplyScalar(B).floor())},this.getScissor=function(b){return b.copy(z)},this.setScissor=function(b,F,X,Y){b.isVector4?z.set(b.x,b.y,b.z,b.w):z.set(b,F,X,Y),ee.scissor(I.copy(z).multiplyScalar(B).floor())},this.getScissorTest=function(){return Q},this.setScissorTest=function(b){ee.setScissorTest(Q=b)},this.setOpaqueSort=function(b){N=b},this.setTransparentSort=function(b){O=b},this.getClearColor=function(b){return b.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor.apply(Qe,arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha.apply(Qe,arguments)},this.clear=function(b=!0,F=!0,X=!0){let Y=0;if(b){let W=!1;if(R!==null){const ye=R.texture.format;W=ye===Mv||ye===Sv||ye===yv}if(W){const ye=R.texture.type,Ae=ye===Vi||ye===Pi||ye===$d||ye===mr||ye===_v||ye===xv,Pe=Qe.getClearColor(),Ue=Qe.getClearAlpha(),He=Pe.r,ke=Pe.g,Oe=Pe.b;Ae?(g[0]=He,g[1]=ke,g[2]=Oe,g[3]=Ue,U.clearBufferuiv(U.COLOR,0,g)):(_[0]=He,_[1]=ke,_[2]=Oe,_[3]=Ue,U.clearBufferiv(U.COLOR,0,_))}else Y|=U.COLOR_BUFFER_BIT}F&&(Y|=U.DEPTH_BUFFER_BIT),X&&(Y|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ce,!1),n.removeEventListener("webglcontextrestored",L,!1),n.removeEventListener("webglcontextcreationerror",ge,!1),Me.dispose(),Le.dispose(),he.dispose(),T.dispose(),G.dispose(),le.dispose(),ze.dispose(),Ke.dispose(),we.dispose(),Ge.dispose(),Ge.removeEventListener("sessionstart",Ht),Ge.removeEventListener("sessionend",it),fe&&(fe.dispose(),fe=null),Gt.stop()};function ce(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const b=pe.autoReset,F=se.enabled,X=se.autoUpdate,Y=se.needsUpdate,W=se.type;ft(),pe.autoReset=b,se.enabled=F,se.autoUpdate=X,se.needsUpdate=Y,se.type=W}function ge(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ve(b){const F=b.target;F.removeEventListener("dispose",ve),De(F)}function De(b){Ne(b),he.remove(b)}function Ne(b){const F=he.get(b).programs;F!==void 0&&(F.forEach(function(X){we.releaseProgram(X)}),b.isShaderMaterial&&we.releaseShaderCache(b))}this.renderBufferDirect=function(b,F,X,Y,W,ye){F===null&&(F=ne);const Ae=W.isMesh&&W.matrixWorld.determinant()<0,Pe=Zv(b,F,X,Y,W);ee.setMaterial(Y,Ae);let Ue=X.index,He=1;if(Y.wireframe===!0){if(Ue=re.getWireframeAttribute(X),Ue===void 0)return;He=2}const ke=X.drawRange,Oe=X.attributes.position;let gt=ke.start*He,an=(ke.start+ke.count)*He;ye!==null&&(gt=Math.max(gt,ye.start*He),an=Math.min(an,(ye.start+ye.count)*He)),Ue!==null?(gt=Math.max(gt,0),an=Math.min(an,Ue.count)):Oe!=null&&(gt=Math.max(gt,0),an=Math.min(an,Oe.count));const wt=an-gt;if(wt<0||wt===1/0)return;ze.setup(W,Y,Pe,X,Ue);let Kn,ct=Fe;if(Ue!==null&&(Kn=ae.get(Ue),ct=be,ct.setIndex(Kn)),W.isMesh)Y.wireframe===!0?(ee.setLineWidth(Y.wireframeLinewidth*te()),ct.setMode(U.LINES)):ct.setMode(U.TRIANGLES);else if(W.isLine){let Ve=Y.linewidth;Ve===void 0&&(Ve=1),ee.setLineWidth(Ve*te()),W.isLineSegments?ct.setMode(U.LINES):W.isLineLoop?ct.setMode(U.LINE_LOOP):ct.setMode(U.LINE_STRIP)}else W.isPoints?ct.setMode(U.POINTS):W.isSprite&&ct.setMode(U.TRIANGLES);if(W.isBatchedMesh)ct.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else if(W.isInstancedMesh)ct.renderInstances(gt,wt,W.count);else if(X.isInstancedBufferGeometry){const Ve=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Hl=Math.min(X.instanceCount,Ve);ct.renderInstances(gt,wt,Hl)}else ct.render(gt,wt)};function tt(b,F,X){b.transparent===!0&&b.side===si&&b.forceSinglePass===!1?(b.side=rn,b.needsUpdate=!0,ka(b,F,X),b.side=qi,b.needsUpdate=!0,ka(b,F,X),b.side=si):ka(b,F,X)}this.compile=function(b,F,X=null){X===null&&(X=b),m=Le.get(X),m.init(),x.push(m),X.traverseVisible(function(W){W.isLight&&W.layers.test(F.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),b!==X&&b.traverseVisible(function(W){W.isLight&&W.layers.test(F.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),m.setupLights(v._useLegacyLights);const Y=new Set;return b.traverse(function(W){const ye=W.material;if(ye)if(Array.isArray(ye))for(let Ae=0;Ae<ye.length;Ae++){const Pe=ye[Ae];tt(Pe,X,W),Y.add(Pe)}else tt(ye,X,W),Y.add(ye)}),x.pop(),m=null,Y},this.compileAsync=function(b,F,X=null){const Y=this.compile(b,F,X);return new Promise(W=>{function ye(){if(Y.forEach(function(Ae){he.get(Ae).currentProgram.isReady()&&Y.delete(Ae)}),Y.size===0){W(b);return}setTimeout(ye,10)}xe.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let nt=null;function Tt(b){nt&&nt(b)}function Ht(){Gt.stop()}function it(){Gt.start()}const Gt=new Bv;Gt.setAnimationLoop(Tt),typeof self<"u"&&Gt.setContext(self),this.setAnimationLoop=function(b){nt=b,Ge.setAnimationLoop(b),b===null?Gt.stop():Gt.start()},Ge.addEventListener("sessionstart",Ht),Ge.addEventListener("sessionend",it),this.render=function(b,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Ge.enabled===!0&&Ge.isPresenting===!0&&(Ge.cameraAutoUpdate===!0&&Ge.updateCamera(F),F=Ge.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,F,R),m=Le.get(b,x.length),m.init(),x.push(m),de.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),V.setFromProjectionMatrix(de),J=this.localClippingEnabled,K=je.init(this.clippingPlanes,J),y=Me.get(b,d.length),y.init(),d.push(y),Hn(b,F,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(N,O),this.info.render.frame++,K===!0&&je.beginShadows();const X=m.state.shadowsArray;if(se.render(X,b,F),K===!0&&je.endShadows(),this.info.autoReset===!0&&this.info.reset(),Qe.render(y,b),m.setupLights(v._useLegacyLights),F.isArrayCamera){const Y=F.cameras;for(let W=0,ye=Y.length;W<ye;W++){const Ae=Y[W];nh(y,b,Ae,Ae.viewport)}}else nh(y,b,F);R!==null&&(A.updateMultisampleRenderTarget(R),A.updateRenderTargetMipmap(R)),b.isScene===!0&&b.onAfterRender(v,b,F),ze.resetDefaultState(),k=-1,S=null,x.pop(),x.length>0?m=x[x.length-1]:m=null,d.pop(),d.length>0?y=d[d.length-1]:y=null};function Hn(b,F,X,Y){if(b.visible===!1)return;if(b.layers.test(F.layers)){if(b.isGroup)X=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(F);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||V.intersectsSprite(b)){Y&&Ce.setFromMatrixPosition(b.matrixWorld).applyMatrix4(de);const Ae=le.update(b),Pe=b.material;Pe.visible&&y.push(b,Ae,Pe,X,Ce.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||V.intersectsObject(b))){const Ae=le.update(b),Pe=b.material;if(Y&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ce.copy(b.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),Ce.copy(Ae.boundingSphere.center)),Ce.applyMatrix4(b.matrixWorld).applyMatrix4(de)),Array.isArray(Pe)){const Ue=Ae.groups;for(let He=0,ke=Ue.length;He<ke;He++){const Oe=Ue[He],gt=Pe[Oe.materialIndex];gt&&gt.visible&&y.push(b,Ae,gt,X,Ce.z,Oe)}}else Pe.visible&&y.push(b,Ae,Pe,X,Ce.z,null)}}const ye=b.children;for(let Ae=0,Pe=ye.length;Ae<Pe;Ae++)Hn(ye[Ae],F,X,Y)}function nh(b,F,X,Y){const W=b.opaque,ye=b.transmissive,Ae=b.transparent;m.setupLightsView(X),K===!0&&je.setGlobalState(v.clippingPlanes,X),ye.length>0&&Kv(W,ye,F,X),Y&&ee.viewport(M.copy(Y)),W.length>0&&Fa(W,F,X),ye.length>0&&Fa(ye,F,X),Ae.length>0&&Fa(Ae,F,X),ee.buffers.depth.setTest(!0),ee.buffers.depth.setMask(!0),ee.buffers.color.setMask(!0),ee.setPolygonOffset(!1)}function Kv(b,F,X,Y){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;const ye=Z.isWebGL2;fe===null&&(fe=new Er(1,1,{generateMipmaps:!0,type:xe.has("EXT_color_buffer_half_float")?wa:Vi,minFilter:Ta,samples:ye?4:0})),v.getDrawingBufferSize(Re),ye?fe.setSize(Re.x,Re.y):fe.setSize(_l(Re.x),_l(Re.y));const Ae=v.getRenderTarget();v.setRenderTarget(fe),v.getClearColor(ie),P=v.getClearAlpha(),P<1&&v.setClearColor(16777215,.5),v.clear();const Pe=v.toneMapping;v.toneMapping=Gi,Fa(b,X,Y),A.updateMultisampleRenderTarget(fe),A.updateRenderTargetMipmap(fe);let Ue=!1;for(let He=0,ke=F.length;He<ke;He++){const Oe=F[He],gt=Oe.object,an=Oe.geometry,wt=Oe.material,Kn=Oe.group;if(wt.side===si&&gt.layers.test(Y.layers)){const ct=wt.side;wt.side=rn,wt.needsUpdate=!0,ih(gt,X,Y,an,wt,Kn),wt.side=ct,wt.needsUpdate=!0,Ue=!0}}Ue===!0&&(A.updateMultisampleRenderTarget(fe),A.updateRenderTargetMipmap(fe)),v.setRenderTarget(Ae),v.setClearColor(ie,P),v.toneMapping=Pe}function Fa(b,F,X){const Y=F.isScene===!0?F.overrideMaterial:null;for(let W=0,ye=b.length;W<ye;W++){const Ae=b[W],Pe=Ae.object,Ue=Ae.geometry,He=Y===null?Ae.material:Y,ke=Ae.group;Pe.layers.test(X.layers)&&ih(Pe,F,X,Ue,He,ke)}}function ih(b,F,X,Y,W,ye){b.onBeforeRender(v,F,X,Y,W,ye),b.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),W.onBeforeRender(v,F,X,Y,b,ye),W.transparent===!0&&W.side===si&&W.forceSinglePass===!1?(W.side=rn,W.needsUpdate=!0,v.renderBufferDirect(X,F,Y,W,b,ye),W.side=qi,W.needsUpdate=!0,v.renderBufferDirect(X,F,Y,W,b,ye),W.side=si):v.renderBufferDirect(X,F,Y,W,b,ye),b.onAfterRender(v,F,X,Y,W,ye)}function ka(b,F,X){F.isScene!==!0&&(F=ne);const Y=he.get(b),W=m.state.lights,ye=m.state.shadowsArray,Ae=W.state.version,Pe=we.getParameters(b,W.state,ye,F,X),Ue=we.getProgramCacheKey(Pe);let He=Y.programs;Y.environment=b.isMeshStandardMaterial?F.environment:null,Y.fog=F.fog,Y.envMap=(b.isMeshStandardMaterial?G:T).get(b.envMap||Y.environment),He===void 0&&(b.addEventListener("dispose",ve),He=new Map,Y.programs=He);let ke=He.get(Ue);if(ke!==void 0){if(Y.currentProgram===ke&&Y.lightsStateVersion===Ae)return sh(b,Pe),ke}else Pe.uniforms=we.getUniforms(b),b.onBuild(X,Pe,v),b.onBeforeCompile(Pe,v),ke=we.acquireProgram(Pe,Ue),He.set(Ue,ke),Y.uniforms=Pe.uniforms;const Oe=Y.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Oe.clippingPlanes=je.uniform),sh(b,Pe),Y.needsLights=Jv(b),Y.lightsStateVersion=Ae,Y.needsLights&&(Oe.ambientLightColor.value=W.state.ambient,Oe.lightProbe.value=W.state.probe,Oe.directionalLights.value=W.state.directional,Oe.directionalLightShadows.value=W.state.directionalShadow,Oe.spotLights.value=W.state.spot,Oe.spotLightShadows.value=W.state.spotShadow,Oe.rectAreaLights.value=W.state.rectArea,Oe.ltc_1.value=W.state.rectAreaLTC1,Oe.ltc_2.value=W.state.rectAreaLTC2,Oe.pointLights.value=W.state.point,Oe.pointLightShadows.value=W.state.pointShadow,Oe.hemisphereLights.value=W.state.hemi,Oe.directionalShadowMap.value=W.state.directionalShadowMap,Oe.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Oe.spotShadowMap.value=W.state.spotShadowMap,Oe.spotLightMatrix.value=W.state.spotLightMatrix,Oe.spotLightMap.value=W.state.spotLightMap,Oe.pointShadowMap.value=W.state.pointShadowMap,Oe.pointShadowMatrix.value=W.state.pointShadowMatrix),Y.currentProgram=ke,Y.uniformsList=null,ke}function rh(b){if(b.uniformsList===null){const F=b.currentProgram.getUniforms();b.uniformsList=Bo.seqWithValue(F.seq,b.uniforms)}return b.uniformsList}function sh(b,F){const X=he.get(b);X.outputColorSpace=F.outputColorSpace,X.batching=F.batching,X.instancing=F.instancing,X.instancingColor=F.instancingColor,X.skinning=F.skinning,X.morphTargets=F.morphTargets,X.morphNormals=F.morphNormals,X.morphColors=F.morphColors,X.morphTargetsCount=F.morphTargetsCount,X.numClippingPlanes=F.numClippingPlanes,X.numIntersection=F.numClipIntersection,X.vertexAlphas=F.vertexAlphas,X.vertexTangents=F.vertexTangents,X.toneMapping=F.toneMapping}function Zv(b,F,X,Y,W){F.isScene!==!0&&(F=ne),A.resetTextureUnits();const ye=F.fog,Ae=Y.isMeshStandardMaterial?F.environment:null,Pe=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:mi,Ue=(Y.isMeshStandardMaterial?G:T).get(Y.envMap||Ae),He=Y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,ke=!!X.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Oe=!!X.morphAttributes.position,gt=!!X.morphAttributes.normal,an=!!X.morphAttributes.color;let wt=Gi;Y.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(wt=v.toneMapping);const Kn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ct=Kn!==void 0?Kn.length:0,Ve=he.get(Y),Hl=m.state.lights;if(K===!0&&(J===!0||b!==S)){const _n=b===S&&Y.id===k;je.setState(Y,b,_n)}let pt=!1;Y.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==Hl.state.version||Ve.outputColorSpace!==Pe||W.isBatchedMesh&&Ve.batching===!1||!W.isBatchedMesh&&Ve.batching===!0||W.isInstancedMesh&&Ve.instancing===!1||!W.isInstancedMesh&&Ve.instancing===!0||W.isSkinnedMesh&&Ve.skinning===!1||!W.isSkinnedMesh&&Ve.skinning===!0||W.isInstancedMesh&&Ve.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ve.instancingColor===!1&&W.instanceColor!==null||Ve.envMap!==Ue||Y.fog===!0&&Ve.fog!==ye||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==je.numPlanes||Ve.numIntersection!==je.numIntersection)||Ve.vertexAlphas!==He||Ve.vertexTangents!==ke||Ve.morphTargets!==Oe||Ve.morphNormals!==gt||Ve.morphColors!==an||Ve.toneMapping!==wt||Z.isWebGL2===!0&&Ve.morphTargetsCount!==ct)&&(pt=!0):(pt=!0,Ve.__version=Y.version);let Zi=Ve.currentProgram;pt===!0&&(Zi=ka(Y,F,W));let ah=!1,Ls=!1,Gl=!1;const Ut=Zi.getUniforms(),Qi=Ve.uniforms;if(ee.useProgram(Zi.program)&&(ah=!0,Ls=!0,Gl=!0),Y.id!==k&&(k=Y.id,Ls=!0),ah||S!==b){Ut.setValue(U,"projectionMatrix",b.projectionMatrix),Ut.setValue(U,"viewMatrix",b.matrixWorldInverse);const _n=Ut.map.cameraPosition;_n!==void 0&&_n.setValue(U,Ce.setFromMatrixPosition(b.matrixWorld)),Z.logarithmicDepthBuffer&&Ut.setValue(U,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Ut.setValue(U,"isOrthographic",b.isOrthographicCamera===!0),S!==b&&(S=b,Ls=!0,Gl=!0)}if(W.isSkinnedMesh){Ut.setOptional(U,W,"bindMatrix"),Ut.setOptional(U,W,"bindMatrixInverse");const _n=W.skeleton;_n&&(Z.floatVertexTextures?(_n.boneTexture===null&&_n.computeBoneTexture(),Ut.setValue(U,"boneTexture",_n.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}W.isBatchedMesh&&(Ut.setOptional(U,W,"batchingTexture"),Ut.setValue(U,"batchingTexture",W._matricesTexture,A));const Vl=X.morphAttributes;if((Vl.position!==void 0||Vl.normal!==void 0||Vl.color!==void 0&&Z.isWebGL2===!0)&&Xe.update(W,X,Zi),(Ls||Ve.receiveShadow!==W.receiveShadow)&&(Ve.receiveShadow=W.receiveShadow,Ut.setValue(U,"receiveShadow",W.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Qi.envMap.value=Ue,Qi.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),Ls&&(Ut.setValue(U,"toneMappingExposure",v.toneMappingExposure),Ve.needsLights&&Qv(Qi,Gl),ye&&Y.fog===!0&&_e.refreshFogUniforms(Qi,ye),_e.refreshMaterialUniforms(Qi,Y,B,$,fe),Bo.upload(U,rh(Ve),Qi,A)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Bo.upload(U,rh(Ve),Qi,A),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Ut.setValue(U,"center",W.center),Ut.setValue(U,"modelViewMatrix",W.modelViewMatrix),Ut.setValue(U,"normalMatrix",W.normalMatrix),Ut.setValue(U,"modelMatrix",W.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const _n=Y.uniformsGroups;for(let Wl=0,e_=_n.length;Wl<e_;Wl++)if(Z.isWebGL2){const oh=_n[Wl];Ke.update(oh,Zi),Ke.bind(oh,Zi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Zi}function Qv(b,F){b.ambientLightColor.needsUpdate=F,b.lightProbe.needsUpdate=F,b.directionalLights.needsUpdate=F,b.directionalLightShadows.needsUpdate=F,b.pointLights.needsUpdate=F,b.pointLightShadows.needsUpdate=F,b.spotLights.needsUpdate=F,b.spotLightShadows.needsUpdate=F,b.rectAreaLights.needsUpdate=F,b.hemisphereLights.needsUpdate=F}function Jv(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(b,F,X){he.get(b.texture).__webglTexture=F,he.get(b.depthTexture).__webglTexture=X;const Y=he.get(b);Y.__hasExternalTextures=!0,Y.__hasExternalTextures&&(Y.__autoAllocateDepthBuffer=X===void 0,Y.__autoAllocateDepthBuffer||xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,F){const X=he.get(b);X.__webglFramebuffer=F,X.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(b,F=0,X=0){R=b,w=F,C=X;let Y=!0,W=null,ye=!1,Ae=!1;if(b){const Ue=he.get(b);Ue.__useDefaultFramebuffer!==void 0?(ee.bindFramebuffer(U.FRAMEBUFFER,null),Y=!1):Ue.__webglFramebuffer===void 0?A.setupRenderTarget(b):Ue.__hasExternalTextures&&A.rebindTextures(b,he.get(b.texture).__webglTexture,he.get(b.depthTexture).__webglTexture);const He=b.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Ae=!0);const ke=he.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(ke[F])?W=ke[F][X]:W=ke[F],ye=!0):Z.isWebGL2&&b.samples>0&&A.useMultisampledRTT(b)===!1?W=he.get(b).__webglMultisampledFramebuffer:Array.isArray(ke)?W=ke[X]:W=ke,M.copy(b.viewport),I.copy(b.scissor),H=b.scissorTest}else M.copy(D).multiplyScalar(B).floor(),I.copy(z).multiplyScalar(B).floor(),H=Q;if(ee.bindFramebuffer(U.FRAMEBUFFER,W)&&Z.drawBuffers&&Y&&ee.drawBuffers(b,W),ee.viewport(M),ee.scissor(I),ee.setScissorTest(H),ye){const Ue=he.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ue.__webglTexture,X)}else if(Ae){const Ue=he.get(b.texture),He=F||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ue.__webglTexture,X||0,He)}k=-1},this.readRenderTargetPixels=function(b,F,X,Y,W,ye,Ae){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=he.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ae!==void 0&&(Pe=Pe[Ae]),Pe){ee.bindFramebuffer(U.FRAMEBUFFER,Pe);try{const Ue=b.texture,He=Ue.format,ke=Ue.type;if(He!==kn&&Ee.convert(He)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Oe=ke===wa&&(xe.has("EXT_color_buffer_half_float")||Z.isWebGL2&&xe.has("EXT_color_buffer_float"));if(ke!==Vi&&Ee.convert(ke)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ke===Li&&(Z.isWebGL2||xe.has("OES_texture_float")||xe.has("WEBGL_color_buffer_float")))&&!Oe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=b.width-Y&&X>=0&&X<=b.height-W&&U.readPixels(F,X,Y,W,Ee.convert(He),Ee.convert(ke),ye)}finally{const Ue=R!==null?he.get(R).__webglFramebuffer:null;ee.bindFramebuffer(U.FRAMEBUFFER,Ue)}}},this.copyFramebufferToTexture=function(b,F,X=0){const Y=Math.pow(2,-X),W=Math.floor(F.image.width*Y),ye=Math.floor(F.image.height*Y);A.setTexture2D(F,0),U.copyTexSubImage2D(U.TEXTURE_2D,X,0,0,b.x,b.y,W,ye),ee.unbindTexture()},this.copyTextureToTexture=function(b,F,X,Y=0){const W=F.image.width,ye=F.image.height,Ae=Ee.convert(X.format),Pe=Ee.convert(X.type);A.setTexture2D(X,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,X.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,X.unpackAlignment),F.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Y,b.x,b.y,W,ye,Ae,Pe,F.image.data):F.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Y,b.x,b.y,F.mipmaps[0].width,F.mipmaps[0].height,Ae,F.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,Y,b.x,b.y,Ae,Pe,F.image),Y===0&&X.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),ee.unbindTexture()},this.copyTextureToTexture3D=function(b,F,X,Y,W=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ye=b.max.x-b.min.x+1,Ae=b.max.y-b.min.y+1,Pe=b.max.z-b.min.z+1,Ue=Ee.convert(Y.format),He=Ee.convert(Y.type);let ke;if(Y.isData3DTexture)A.setTexture3D(Y,0),ke=U.TEXTURE_3D;else if(Y.isDataArrayTexture||Y.isCompressedArrayTexture)A.setTexture2DArray(Y,0),ke=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,Y.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,Y.unpackAlignment);const Oe=U.getParameter(U.UNPACK_ROW_LENGTH),gt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),an=U.getParameter(U.UNPACK_SKIP_PIXELS),wt=U.getParameter(U.UNPACK_SKIP_ROWS),Kn=U.getParameter(U.UNPACK_SKIP_IMAGES),ct=X.isCompressedTexture?X.mipmaps[W]:X.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,ct.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ct.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,b.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,b.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,b.min.z),X.isDataTexture||X.isData3DTexture?U.texSubImage3D(ke,W,F.x,F.y,F.z,ye,Ae,Pe,Ue,He,ct.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(ke,W,F.x,F.y,F.z,ye,Ae,Pe,Ue,ct.data)):U.texSubImage3D(ke,W,F.x,F.y,F.z,ye,Ae,Pe,Ue,He,ct),U.pixelStorei(U.UNPACK_ROW_LENGTH,Oe),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,gt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,an),U.pixelStorei(U.UNPACK_SKIP_ROWS,wt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Kn),W===0&&Y.generateMipmaps&&U.generateMipmap(ke),ee.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?A.setTextureCube(b,0):b.isData3DTexture?A.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?A.setTexture2DArray(b,0):A.setTexture2D(b,0),ee.unbindTexture()},this.resetState=function(){w=0,C=0,R=null,ee.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Kd?"display-p3":"srgb",n.unpackColorSpace=Je.workingColorSpace===Ol?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Pt?vr:Tv}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===vr?Pt:mi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Iw extends eh{}Iw.prototype.isWebGL1Renderer=!0;class qv extends sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class th extends Ia{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Wp=new Rt,Zu=new Nv,wo=new zl,Ao=new q;class Yv extends sn{constructor(e=new $n,n=new th){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),wo.copy(i.boundingSphere),wo.applyMatrix4(r),wo.radius+=s,e.ray.intersectsSphere(wo)===!1)return;Wp.copy(r).invert(),Zu.copy(e.ray).applyMatrix4(Wp);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,u=i.index,p=i.attributes.position;if(u!==null){const h=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=h,y=g;_<y;_++){const m=u.getX(_);Ao.fromBufferAttribute(p,m),Xp(Ao,m,l,r,e,n,this)}}else{const h=Math.max(0,a.start),g=Math.min(p.count,a.start+a.count);for(let _=h,y=g;_<y;_++)Ao.fromBufferAttribute(p,_),Xp(Ao,_,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Xp(t,e,n,i,r,s,a){const o=Zu.distanceSqToPoint(t);if(o<n){const l=new q;Zu.closestPointToPoint(t,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yd);function Uw({activeFormation:t}){const e=me.useRef(null),n=me.useRef(null),i=me.useRef(null),r=me.useRef(null),s=1800,a=me.useRef([]),o=me.useRef([]),l=me.useRef([]);if(a.current.length===0){for(let p=0;p<s;p++){const h=Math.floor(p/50),g=p%50,_=(g-50/2)*.35,y=(h-36/2)*.35,m=Math.sin(g*.18)*Math.cos(h*.22)*1.5;a.current.push(_,m,y)}for(let p=0;p<s;p++){const h=Math.pow(Math.random(),2)*8.5;let g=(Math.random()-.5)*1.5*(8.5-h)/8.5;const _=Math.floor(Math.random()*2)*Math.PI,y=h*.5+_;let m=Math.cos(y)*h+(Math.random()-.5)*.4,d=Math.sin(y)*h+(Math.random()-.5)*.4;o.current.push(m,g,d)}for(let p=0;p<s;p++){const h=Math.random()>.5,g=Math.random()>.85,_=p/s*Math.PI*6.5,y=3.2;let m=(_-Math.PI*3.25)*1.25,d,x;if(g){const v=Math.random(),E=_,w=_+Math.PI;d=ap.lerp(Math.cos(E),Math.cos(w),v)*y,x=ap.lerp(Math.sin(E),Math.sin(w),v)*y}else{const v=_+(h?Math.PI:0);d=Math.cos(v)*y,x=Math.sin(v)*y}d+=(Math.random()-.5)*.18,m+=(Math.random()-.5)*.18,x+=(Math.random()-.5)*.18,l.current.push(d,m,x)}}return me.useEffect(()=>{let u=a.current;t===1?u=a.current:t===2?u=o.current:t===3&&(u=l.current),n.current=u},[t]),me.useEffect(()=>{const u=e.current;if(!u)return;const f=u.clientWidth||500,p=u.clientHeight||400,h=new eh({antialias:!0,alpha:!0});h.setSize(f,p),h.setPixelRatio(Math.min(window.devicePixelRatio,2)),u.appendChild(h.domElement);const g=new qv,_=new dn(45,f/p,.1,100);_.position.z=18;const y=new $n,m=new Float32Array(s*3);let d=a.current;t===2?d=o.current:t===3&&(d=l.current),n.current=d;for(let M=0;M<s*3;M++)m[M]=d[M];const x=new Bn(m,3);y.setAttribute("position",x),r.current=x;const v=new th({size:.15,vertexColors:!0,transparent:!0,opacity:.85,blending:hl}),E=[],w=[new Ye(16777215),new Ye(13358561),new Ye(9741240),new Ye(6583435)];for(let M=0;M<s;M++){const I=w[Math.floor(Math.random()*w.length)];E.push(I.r,I.g,I.b)}y.setAttribute("color",new ui(E,3));const C=new Yv(y,v);i.current=C,g.add(C);const R=()=>{if(!u)return;const M=u.clientWidth,I=u.clientHeight;_.aspect=M/I,_.updateProjectionMatrix(),h.setSize(M,I)};window.addEventListener("resize",R);let k=null;const S=()=>{k=requestAnimationFrame(S),C.rotation.y+=.0035,C.rotation.x+=.001;const M=x.array,I=n.current;if(I){for(let H=0;H<s*3;H++)M[H]+=(I[H]-M[H])*.075;x.needsUpdate=!0}h.render(g,_)};return S(),()=>{cancelAnimationFrame(k),window.removeEventListener("resize",R),h.dispose(),v.dispose(),y.dispose(),u.contains(h.domElement)&&u.removeChild(h.domElement)}},[]),c.jsx("div",{className:"research-canvas-inner",id:"research-canvas",ref:e,style:{width:"100%",height:"100%"}})}function Fw(){const t=me.useRef(null);return me.useEffect(()=>{const e=t.current;if(!e)return;const n=e.clientWidth,i=e.clientHeight,r=new eh({antialias:!1,alpha:!0});r.setSize(n,i),r.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),e.appendChild(r.domElement);const s=new qv,a=new dn(60,n/i,.1,100);a.position.z=10;const o=180,l=new $n,u=[],f=[];for(let m=0;m<o;m++)u.push((Math.random()-.5)*15,(Math.random()-.5)*10,(Math.random()-.5)*10),f.push([(Math.random()-.5)*.004,Math.random()*.006+.002,(Math.random()-.5)*.004]);l.setAttribute("position",new ui(u,3));const p=new th({size:.07,color:13358561,transparent:!0,opacity:.45,blending:hl}),h=new Yv(l,p);s.add(h);const g=()=>{if(!e)return;const m=e.clientWidth,d=e.clientHeight;a.aspect=m/d,a.updateProjectionMatrix(),r.setSize(m,d)};window.addEventListener("resize",g);let _=null;const y=()=>{_=requestAnimationFrame(y);const m=l.attributes.position,d=m.array;for(let x=0;x<o;x++){const v=x*3;d[v]+=f[x][0],d[v+1]+=f[x][1],d[v+2]+=f[x][2],d[v+1]>5&&(d[v+1]=-5,d[v]=(Math.random()-.5)*15)}m.needsUpdate=!0,r.render(s,a)};return y(),()=>{cancelAnimationFrame(_),window.removeEventListener("resize",g),r.dispose(),p.dispose(),l.dispose(),e.contains(r.domElement)&&e.removeChild(r.domElement)}},[]),c.jsx("div",{className:"numbers-canvas-wrap",id:"numbers-canvas",ref:t})}const kw=Xd(t=>({speed:.85,gooeyness:1.2,ditherEnabled:!0,dotSize:5,dotGap:2.5,brightness:.85,contrast:.6,crossEnabled:!1,crossIntensity:.95,bloomEnabled:!0,bloomIntensity:.55,bloomSize:1.5,crtEnabled:!0,scanlines:.75,curvature:0,vignette:2,chroma:.1,gpuTier:"detecting…",setSpeed:e=>t({speed:e}),setGooeyness:e=>t({gooeyness:e}),setDitherEnabled:e=>t({ditherEnabled:e}),setDotSize:e=>t({dotSize:e}),setDotGap:e=>t({dotGap:e}),setBrightness:e=>t({brightness:e}),setContrast:e=>t({contrast:e}),setCrossEnabled:e=>t({crossEnabled:e}),setCrossIntensity:e=>t({crossIntensity:e}),setBloomEnabled:e=>t({bloomEnabled:e}),setBloomIntensity:e=>t({bloomIntensity:e}),setBloomSize:e=>t({bloomSize:e}),setCrtEnabled:e=>t({crtEnabled:e}),setScanlines:e=>t({scanlines:e}),setCurvature:e=>t({curvature:e}),setVignette:e=>t({vignette:e}),setChroma:e=>t({chroma:e}),setGpuTier:e=>t({gpuTier:e})}));function Ow({isOpen:t,onClose:e}){const n=kw();return c.jsxs(c.Fragment,{children:[c.jsx("div",{className:`settings-backdrop ${t?"open":""}`,onClick:e}),c.jsxs("div",{className:`settings-panel ${t?"open":""}`,id:"settings-panel",children:[c.jsxs("div",{className:"settings-panel-header",children:[c.jsx("span",{className:"settings-panel-title",children:"Visual Synthesizer"}),c.jsx("button",{className:"settings-panel-close",onClick:e,"aria-label":"Close settings",children:c.jsx("svg",{viewBox:"0 0 16 16",children:c.jsx("path",{d:"M4 4l8 8M12 4l-8 8",stroke:"currentColor",strokeWidth:"2",fill:"none"})})})]}),c.jsxs("div",{className:"settings-panel-body",children:[c.jsxs("div",{className:"settings-section",children:[c.jsx("div",{className:"settings-section-title",children:"Fluid Aura"}),c.jsxs("div",{className:"settings-slider-row",children:[c.jsxs("div",{className:"settings-slider-header",children:[c.jsx("span",{className:"settings-label",children:"Flow Speed"}),c.jsx("span",{className:"settings-value",children:n.speed.toFixed(2)})]}),c.jsx("input",{type:"range",className:"s-range",min:"0",max:"2",step:"0.05",value:n.speed,onChange:i=>n.setSpeed(parseFloat(i.target.value))})]}),c.jsxs("div",{className:"settings-slider-row",children:[c.jsxs("div",{className:"settings-slider-header",children:[c.jsx("span",{className:"settings-label",children:"Gooeyness"}),c.jsx("span",{className:"settings-value",children:n.gooeyness.toFixed(2)})]}),c.jsx("input",{type:"range",className:"s-range",min:"0.1",max:"3",step:"0.05",value:n.gooeyness,onChange:i=>n.setGooeyness(parseFloat(i.target.value))})]})]}),c.jsx("div",{className:"settings-divider"}),c.jsxs("div",{className:"settings-section",children:[c.jsx("div",{className:"settings-section-title",children:"Dot Matrix"}),c.jsxs("div",{className:"settings-row",children:[c.jsx("span",{className:"settings-label",children:"Enabled"}),c.jsx("div",{className:`s-toggle ${n.ditherEnabled?"on":""}`,onClick:()=>n.setDitherEnabled(!n.ditherEnabled)})]}),c.jsxs("div",{className:"settings-slider-row",children:[c.jsxs("div",{className:"settings-slider-header",children:[c.jsx("span",{className:"settings-label",children:"Dot Size"}),c.jsx("span",{className:"settings-value",children:n.dotSize.toFixed(1)})]}),c.jsx("input",{type:"range",className:"s-range",min:"1",max:"12",step:"0.5",value:n.dotSize,onChange:i=>n.setDotSize(parseFloat(i.target.value))})]}),c.jsxs("div",{className:"settings-slider-row",children:[c.jsxs("div",{className:"settings-slider-header",children:[c.jsx("span",{className:"settings-label",children:"Dot Gap"}),c.jsx("span",{className:"settings-value",children:n.dotGap.toFixed(1)})]}),c.jsx("input",{type:"range",className:"s-range",min:"0",max:"6",step:"0.5",value:n.dotGap,onChange:i=>n.setDotGap(parseFloat(i.target.value))})]}),c.jsxs("div",{className:"settings-slider-row",children:[c.jsxs("div",{className:"settings-slider-header",children:[c.jsx("span",{className:"settings-label",children:"Brightness"}),c.jsx("span",{className:"settings-value",children:n.brightness.toFixed(2)})]}),c.jsx("input",{type:"range",className:"s-range",min:"0.1",max:"2",step:"0.05",value:n.brightness,onChange:i=>n.setBrightness(parseFloat(i.target.value))})]}),c.jsxs("div",{className:"settings-slider-row",children:[c.jsxs("div",{className:"settings-slider-header",children:[c.jsx("span",{className:"settings-label",children:"Contrast"}),c.jsx("span",{className:"settings-value",children:n.contrast.toFixed(2)})]}),c.jsx("input",{type:"range",className:"s-range",min:"0.1",max:"2",step:"0.05",value:n.contrast,onChange:i=>n.setContrast(parseFloat(i.target.value))})]})]}),c.jsx("div",{className:"settings-divider"}),c.jsxs("div",{className:"settings-section",children:[c.jsx("div",{className:"settings-section-title",children:"Crosshatch"}),c.jsxs("div",{className:"settings-row",children:[c.jsx("span",{className:"settings-label",children:"Enabled"}),c.jsx("div",{className:`s-toggle ${n.crossEnabled?"on":""}`,onClick:()=>n.setCrossEnabled(!n.crossEnabled)})]}),c.jsxs("div",{className:"settings-slider-row",children:[c.jsxs("div",{className:"settings-slider-header",children:[c.jsx("span",{className:"settings-label",children:"Intensity"}),c.jsx("span",{className:"settings-value",children:n.crossIntensity.toFixed(2)})]}),c.jsx("input",{type:"range",className:"s-range",min:"0",max:"1",step:"0.05",value:n.crossIntensity,onChange:i=>n.setCrossIntensity(parseFloat(i.target.value))})]})]}),c.jsx("div",{className:"settings-divider"}),c.jsxs("div",{className:"settings-section",children:[c.jsx("div",{className:"settings-section-title",children:"Bloom Glow"}),c.jsxs("div",{className:"settings-row",children:[c.jsx("span",{className:"settings-label",children:"Enabled"}),c.jsx("div",{className:`s-toggle ${n.bloomEnabled?"on":""}`,onClick:()=>n.setBloomEnabled(!n.bloomEnabled)})]}),c.jsxs("div",{className:"settings-slider-row",children:[c.jsxs("div",{className:"settings-slider-header",children:[c.jsx("span",{className:"settings-label",children:"Intensity"}),c.jsx("span",{className:"settings-value",children:n.bloomIntensity.toFixed(2)})]}),c.jsx("input",{type:"range",className:"s-range",min:"0",max:"2",step:"0.05",value:n.bloomIntensity,onChange:i=>n.setBloomIntensity(parseFloat(i.target.value))})]}),c.jsxs("div",{className:"settings-slider-row",children:[c.jsxs("div",{className:"settings-slider-header",children:[c.jsx("span",{className:"settings-label",children:"Size"}),c.jsx("span",{className:"settings-value",children:n.bloomSize.toFixed(2)})]}),c.jsx("input",{type:"range",className:"s-range",min:"0.5",max:"4",step:"0.1",value:n.bloomSize,onChange:i=>n.setBloomSize(parseFloat(i.target.value))})]})]}),c.jsx("div",{className:"settings-divider"}),c.jsxs("div",{className:"settings-section",children:[c.jsx("div",{className:"settings-section-title",children:"CRT Shader"}),c.jsxs("div",{className:"settings-row",children:[c.jsx("span",{className:"settings-label",children:"Enabled"}),c.jsx("div",{className:`s-toggle ${n.crtEnabled?"on":""}`,onClick:()=>n.setCrtEnabled(!n.crtEnabled)})]}),c.jsxs("div",{className:"settings-slider-row",children:[c.jsxs("div",{className:"settings-slider-header",children:[c.jsx("span",{className:"settings-label",children:"Scanlines"}),c.jsx("span",{className:"settings-value",children:n.scanlines.toFixed(2)})]}),c.jsx("input",{type:"range",className:"s-range",min:"0",max:"1",step:"0.05",value:n.scanlines,onChange:i=>n.setScanlines(parseFloat(i.target.value))})]}),c.jsxs("div",{className:"settings-slider-row",children:[c.jsxs("div",{className:"settings-slider-header",children:[c.jsx("span",{className:"settings-label",children:"Curvature"}),c.jsx("span",{className:"settings-value",children:n.curvature.toFixed(2)})]}),c.jsx("input",{type:"range",className:"s-range",min:"0",max:"5",step:"0.1",value:n.curvature,onChange:i=>n.setCurvature(parseFloat(i.target.value))})]}),c.jsxs("div",{className:"settings-slider-row",children:[c.jsxs("div",{className:"settings-slider-header",children:[c.jsx("span",{className:"settings-label",children:"Vignette"}),c.jsx("span",{className:"settings-value",children:n.vignette.toFixed(2)})]}),c.jsx("input",{type:"range",className:"s-range",min:"0",max:"5",step:"0.1",value:n.vignette,onChange:i=>n.setVignette(parseFloat(i.target.value))})]}),c.jsxs("div",{className:"settings-slider-row",children:[c.jsxs("div",{className:"settings-slider-header",children:[c.jsx("span",{className:"settings-label",children:"Chroma"}),c.jsx("span",{className:"settings-value",children:n.chroma.toFixed(2)})]}),c.jsx("input",{type:"range",className:"s-range",min:"0",max:"5",step:"0.1",value:n.chroma,onChange:i=>n.setChroma(parseFloat(i.target.value))})]})]}),c.jsx("div",{className:"settings-divider"}),c.jsxs("div",{className:"settings-tier",id:"settings-tier",children:["GPU Tier: ",n.gpuTier]})]})]})]})}const $v="THANKYOUFORCHOOSINGUS",Yc=$v.length;function zw({isOpen:t,onClose:e,isRequiredNotice:n}){const i=pr(ne=>ne.login),[r,s]=me.useState(!0),[a,o]=me.useState(""),[l,u]=me.useState(""),[f,p]=me.useState(""),[h,g]=me.useState(un[0].id),[_,y]=me.useState(""),[m,d]=me.useState(!1),[x,v]=me.useState(!1),[E,w]=me.useState(null),[C,R]=me.useState(!1),[k,S]=me.useState(!1),[M,I]=me.useState(Array(Yc).fill(!1)),[H,ie]=me.useState(!1),[P,j]=me.useState({x:-1e3,y:-1e3}),[$,B]=me.useState(!1),N=dl(ne=>ne.lang),O=qd[N];if(me.useEffect(()=>{t||(o(""),u(""),p(""),g(un[0].id),y(""),I(Array(Yc).fill(!1)),ie(!1),j({x:-1e3,y:-1e3}),B(!1),w(null),R(!1),S(!1))},[t]),me.useEffect(()=>{t&&M.every(te=>te)&&!H&&ie(!0)},[M,t,H]),!t)return null;const D=ne=>{if(M[ne])return;const te=[...M];te[ne]=!0,I(te)},z=ne=>{const te=ne.currentTarget.getBoundingClientRect(),U=ne.clientX-te.left,Ie=ne.clientY-te.top;j({x:U,y:Ie});const xe=ne.clientX-te.left-te.width/2,ee=(ne.clientY-te.top-te.height/2)/(te.height/2)*-9,pe=xe/(te.width/2)*9,he=ne.currentTarget.querySelector(".cubes-grid-matrix");he&&(he.style.setProperty("--tilt-x",`${ee}deg`),he.style.setProperty("--tilt-y",`${pe}deg`))},Q=ne=>{B(!1);const te=ne.currentTarget.querySelector(".cubes-grid-matrix");te&&(te.style.setProperty("--tilt-x","0deg"),te.style.setProperty("--tilt-y","0deg"))},V=()=>{B(!0)},K=ne=>{if(ne.preventDefault(),y(""),r&&!a.trim()){y(N==="en"?"Please enter your name.":N==="uz"?"Ismingizni kiriting.":"Пожалуйста, введите имя.");return}if(!l||!f){y(N==="en"?"Please fill in all fields.":N==="uz"?"Barcha maydonlarni to'ldiring.":"Пожалуйста, заполните все поля.");return}if(!/\S+@\S+\.\S+/.test(l)){y(N==="en"?"Please enter a valid email.":N==="uz"?"Email noto'g'ri.":"Введите корректный email.");return}if(f.length<5){y(N==="en"?"Password must be at least 5 characters.":N==="uz"?"Parol kamida 5 ta belgi bo'lishi shart.":"Пароль должен содержать не менее 5 символов.");return}d(!0),setTimeout(()=>{d(!1),v(!0);const te=l.trim();let U=r?a.trim():te.split("@")[0];U=U.charAt(0).toUpperCase()+U.slice(1);const Ie=un.find(Z=>Z.id===h)||un[0],xe=ds(Ie.colors);setTimeout(()=>{i(te,U,xe),v(!1),e()},1200)},1500)},J=ne=>{ne==="Google"?R(!0):ne==="Apple"&&S(!0)},fe=(ne,te,U)=>{R(!1),d(!0),w("Google"),setTimeout(()=>{d(!1),v(!0);const Ie=ds(U);setTimeout(()=>{i(te,ne,Ie),v(!1),w(null),e()},1200)},1200)},de=(ne,te)=>{S(!1),d(!0),w("Apple"),setTimeout(()=>{d(!1),v(!0);const Ie=ds(["#000000","#444444"]);setTimeout(()=>{i(te,ne,Ie),v(!1),w(null),e()},1200)},1200)},Re=M.filter(Boolean).length,Ce=Yc-Re;return c.jsxs("div",{className:"auth-fullscreen-overlay",children:[c.jsx("button",{className:"auth-fullscreen-close",onClick:e,"aria-label":"Close",children:c.jsx("svg",{viewBox:"0 0 24 24",width:"24",height:"24",children:c.jsx("path",{d:"M18 6 6 18M6 6l12 12",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),c.jsxs("div",{className:"auth-fullscreen-container",children:[c.jsx("div",{className:"auth-left-panel",children:c.jsx("div",{className:"auth-left-content",children:x?c.jsxs("div",{className:"auth-success-screen",children:[c.jsx("div",{className:"auth-success-icon",children:c.jsx("svg",{viewBox:"0 0 24 24",width:"48",height:"48",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:c.jsx("polyline",{points:"20 6 9 17 4 12"})})}),c.jsx("h3",{className:"auth-panel-title",style:{marginTop:"24px"},children:O.accessGranted}),c.jsxs("p",{className:"auth-panel-subtitle",style:{color:"rgba(255, 255, 255, 0.85)",fontSize:"14px"},children:[N==="en"?"Welcome":N==="uz"?"Xush kelibsiz":"Добро пожаловать",", ",E?`${E} Developer`:r?a.trim():l.split("@")[0]]}),c.jsx("p",{className:"auth-panel-subtitle",style:{fontSize:"11px",color:"rgba(255, 255, 255, 0.3)",marginTop:"8px"},children:E?N==="en"?`Connecting securely via ${E} ID...`:N==="uz"?`${E} ID orqali xavfsiz ulanmoqda...`:`Безопасное подключение через ${E} ID...`:N==="en"?"Decrypting user credentials & authorization keys...":N==="uz"?"Foydalanuvchi ma'lumotlari va avtorizatsiya kalitlari ochilmoqda...":"Дешифрование данных пользователя и ключей авторизации..."})]}):c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"auth-logo-area",children:[n&&c.jsxs("div",{className:"premium-auth-notice",style:{marginTop:0,marginBottom:"20px"},children:[c.jsx("div",{className:"notice-glow-ring"}),c.jsx("div",{className:"notice-icon",children:c.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:c.jsx("path",{d:"M12 15v2m0-8V7m0 11a1 1 0 100-2 1 1 0 000 2zM21 12a9 9 0 11-18 0 9 9 0 0118 0z",strokeLinecap:"round",strokeLinejoin:"round"})})}),c.jsxs("div",{className:"notice-text",children:[c.jsx("span",{className:"notice-tag",children:N==="en"?"Authorization Required":N==="uz"?"Avtorizatsiya Zarur":"Требуется авторизация"}),c.jsx("p",{className:"notice-description",style:{fontSize:"12px"},children:N==="en"?"To configure a new workspace and start your project, please register or log in first.":N==="uz"?"Yangi loyihani boshlash uchun avval tizimga kiring yoki ro'yxatdan o'ting.":"Чтобы создать проект, пожалуйста, сначала войдите или зарегистрируйтесь."})]})]}),c.jsx("span",{className:"auth-decor-bullet",children:"✦"}),c.jsx("h3",{className:"auth-panel-title",children:r?O.createAccount.toUpperCase():N==="en"?"ESTABLISH SESSION":N==="uz"?"TIZIMGA KIRISH":"УСТАНОВИТЬ СЕССИЮ"}),c.jsx("p",{className:"auth-panel-subtitle",children:r?N==="en"?"Register your developer identity to access QIX nodes.":N==="uz"?"QIX tugunlariga kirish uchun dasturchi profilingizni yarating.":"Зарегистрируйте профиль разработчика для доступа к узлам QIX.":N==="en"?"Connect with your credentials to resume your session.":N==="uz"?"Sessiyangizni tiklash uchun hisob ma'lumotlaringizni kiriting.":"Войдите под своими учетными данными, чтобы возобновить сессию."})]}),c.jsxs("div",{className:"auth-social-buttons-wrapper",children:[c.jsxs("div",{className:"auth-social-buttons",children:[c.jsxs("button",{type:"button",className:"social-btn google-btn",onClick:()=>J("Google"),disabled:m,children:[c.jsxs("svg",{viewBox:"0 0 24 24",width:"18",height:"18",children:[c.jsx("path",{fill:"#EA4335",d:"M12 5.04c1.67 0 3.2.58 4.38 1.71l3.27-3.27C17.68 1.54 15.02 1 12 1 7.24 1 3.2 3.73 1.25 7.72l3.85 2.99C6.03 7.42 8.78 5.04 12 5.04z"}),c.jsx("path",{fill:"#4285F4",d:"M23.49 12.27c0-.81-.07-1.59-.2-2.34H12v4.45h6.44c-.28 1.48-1.12 2.73-2.38 3.58l3.69 2.87c2.16-2 3.74-4.94 3.74-8.56z"}),c.jsx("path",{fill:"#FBBC05",d:"M5.1 14.71a6.99 6.99 0 010-4.42L1.25 7.3a11.97 11.97 0 000 9.4l3.85-2.99z"}),c.jsx("path",{fill:"#34A853",d:"M12 23c3.24 0 5.97-1.08 7.96-2.92l-3.69-2.87c-1.1.74-2.52 1.18-4.27 1.18-3.22 0-5.97-2.38-6.9-5.67l-3.85 2.99C3.2 20.27 7.24 23 12 23z"})]}),"Google"]}),c.jsxs("button",{type:"button",className:"social-btn apple-btn",onClick:()=>J("Apple"),disabled:m,children:[c.jsx("svg",{viewBox:"0 0 24 24",width:"18",height:"18",fill:"currentColor",children:c.jsx("path",{d:"M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.22.67-2.94 1.51-.63.73-1.18 1.87-1.03 2.98 1.12.09 2.27-.56 2.98-1.43z"})}),"Apple"]})]}),c.jsx("div",{className:"auth-social-divider",children:c.jsx("span",{children:N==="en"?"or":N==="uz"?"yoki":"или"})})]}),c.jsxs("form",{onSubmit:K,className:"auth-panel-form",children:[_&&c.jsx("div",{className:"auth-panel-error",children:_}),r&&c.jsxs("div",{className:"auth-input-group",children:[c.jsx("label",{className:"auth-input-label",children:O.fullName}),c.jsx("input",{type:"text",className:"auth-input-field",value:a,onChange:ne=>o(ne.target.value),placeholder:"Alex Rivera",disabled:m})]}),c.jsxs("div",{className:"auth-input-group",children:[c.jsx("label",{className:"auth-input-label",children:O.emailAddr}),c.jsx("input",{type:"email",className:"auth-input-field",value:l,onChange:ne=>u(ne.target.value),placeholder:"alex@gmail.com",disabled:m})]}),r&&c.jsxs("div",{className:"auth-input-group",children:[c.jsx("label",{className:"auth-input-label",children:O.chooseAvatar}),c.jsx("div",{className:"avatar-selection-grid",children:un.map(ne=>{const te={background:`linear-gradient(135deg, ${ne.colors[0]} 0%, ${ne.colors[1]} 100%)`};return c.jsx("button",{type:"button",className:`avatar-option-btn ${h===ne.id?"active":""}`,style:te,onClick:()=>g(ne.id),"aria-label":ne.name,title:ne.name,disabled:m},ne.id)})})]}),c.jsxs("div",{className:"auth-input-group",children:[c.jsx("label",{className:"auth-input-label",children:O.password}),c.jsx("input",{type:"password",className:"auth-input-field",value:f,onChange:ne=>p(ne.target.value),placeholder:"••••••••",disabled:m})]}),c.jsx("button",{type:"submit",className:"auth-submit-btn",disabled:m,children:m?c.jsx("span",{className:"auth-spinner"}):r?N==="en"?"Create Profile & Connect":N==="uz"?"Profil yaratish va ulanish":"Создать профиль и подключиться":N==="en"?"Authorize Connection":N==="uz"?"Ulanishni tasdiqlash":"Авторизовать подключение"}),c.jsxs("div",{className:"auth-switch-prompt",children:[c.jsx("span",{children:r?N==="en"?"Already registered? ":N==="uz"?"Ro'yxatdan o'tganmisiz? ":"Уже зарегистрированы? ":N==="en"?"New developer? ":N==="uz"?"Yangi dasturchimisiz? ":"Новый разработчик? "}),c.jsx("button",{type:"button",className:"auth-switch-link",onClick:()=>{s(!r),y("")},disabled:m,children:r?O.login:N==="en"?"Sign Up":N==="uz"?"Ro'yxatdan o'tish":"Регистрация"})]})]})]})})}),c.jsxs("div",{className:"auth-right-panel",onMouseMove:z,onMouseEnter:V,onMouseLeave:Q,children:[c.jsx("div",{className:"auth-hover-orb",style:{left:`${P.x}px`,top:`${P.y}px`,opacity:$?1:0}}),c.jsxs("div",{className:"auth-game-container",children:[c.jsx("h4",{className:"game-title",children:N==="en"?"DEVELOPER AUTHENTICATION GRID":N==="uz"?"DASTURCHI AVTORIZATSIYA TO'RI":"СЕТКА АВТОРИЗАЦИИ РАЗРАБОТЧИКА"}),c.jsx("p",{className:"game-subtitle",children:H?N==="en"?"Grid fully decrypted. Secure channel verified!":N==="uz"?"Tarmoq to'liq ochildi. Xavfsiz kanal tasdiqlandi!":"Сетка успешно расшифрована. Безопасный канал подтвержден!":N==="en"?`Hover your mouse over the cybernetic cubes to decrypt the access key. (${Ce} cubes remaining)`:N==="uz"?`Kirish kalitini ochish uchun kiber kubiklar ustiga kursorni olib boring. (${Ce} ta kubik qoldi)`:`Наведите курсор на кибернетические кубы, чтобы расшифровать ключ доступа. (Осталось кубов: ${Ce})`}),c.jsx("div",{className:`cubes-grid-matrix ${H?"won-glow":""}`,children:$v.split("").map((ne,te)=>c.jsx("div",{className:`cube-container ${M[te]?"revealed":""}`,onMouseEnter:()=>D(te),onTouchStart:()=>D(te),style:{animationDelay:`${te*.035}s`,"--cube-idx":te},children:c.jsxs("div",{className:"cube-card",children:[c.jsx("div",{className:"cube-front",children:c.jsx("span",{className:"cube-front-dot"})}),c.jsx("div",{className:"cube-back",children:c.jsx("span",{className:"cube-letter",children:ne})})]})},te))}),H&&c.jsxs("div",{className:"game-congrats-banner",children:[c.jsx("span",{className:"congrats-pulse"}),c.jsx("span",{children:"THANK YOU FOR CHOOSING US"})]})]})]})]}),C&&c.jsx("div",{className:"google-oauth-overlay",onClick:()=>R(!1),children:c.jsxs("div",{className:"google-oauth-window",onClick:ne=>ne.stopPropagation(),children:[c.jsxs("div",{className:"google-oauth-header",children:[c.jsxs("svg",{viewBox:"0 0 24 24",width:"24",height:"24",className:"google-icon-svg",children:[c.jsx("path",{fill:"#EA4335",d:"M12 5.04c1.67 0 3.2.58 4.38 1.71l3.27-3.27C17.68 1.54 15.02 1 12 1 7.24 1 3.2 3.73 1.25 7.72l3.85 2.99C6.03 7.42 8.78 5.04 12 5.04z"}),c.jsx("path",{fill:"#4285F4",d:"M23.49 12.27c0-.81-.07-1.59-.2-2.34H12v4.45h6.44c-.28 1.48-1.12 2.73-2.38 3.58l3.69 2.87c2.16-2 3.74-4.94 3.74-8.56z"}),c.jsx("path",{fill:"#FBBC05",d:"M5.1 14.71a6.99 6.99 0 010-4.42L1.25 7.3a11.97 11.97 0 000 9.4l3.85-2.99z"}),c.jsx("path",{fill:"#34A853",d:"M12 23c3.24 0 5.97-1.08 7.96-2.92l-3.69-2.87c-1.1.74-2.52 1.18-4.27 1.18-3.22 0-5.97-2.38-6.9-5.67l-3.85 2.99C3.2 20.27 7.24 23 12 23z"})]}),c.jsx("h2",{children:N==="en"?"Choose an account":N==="uz"?"Hisobni tanlang":"Выбор аккаунта"}),c.jsx("p",{style:{margin:"0 0 24px 0"},children:N==="en"?"to continue to QIX Technologies":N==="uz"?"QIX Technologies ilovasiga o'tish uchun":"для перехода в приложение QIX Technologies"})]}),c.jsxs("div",{className:"google-oauth-accounts",children:[c.jsxs("button",{type:"button",className:"google-account-row",onClick:()=>fe("BADALBAEV.A","badalbaev.a@gmail.com",["#a855f7","#3b82f6"]),children:[c.jsx("div",{className:"google-avatar-circle",style:{background:"#a855f7"},children:"B"}),c.jsxs("div",{className:"google-account-info",children:[c.jsx("span",{className:"google-name",children:"BADALBAEV.A"}),c.jsx("span",{className:"google-email",children:"badalbaev.a@gmail.com"})]})]}),c.jsxs("button",{type:"button",className:"google-account-row",onClick:()=>fe("Ashraf Askarov","ashraf.askarov@gmail.com",["#ff416c","#ff4b2b"]),children:[c.jsx("div",{className:"google-avatar-circle",style:{background:"#ff416c"},children:"A"}),c.jsxs("div",{className:"google-account-info",children:[c.jsx("span",{className:"google-name",children:"Ashraf Askarov"}),c.jsx("span",{className:"google-email",children:"ashraf.askarov@gmail.com"})]})]}),c.jsxs("button",{type:"button",className:"google-account-row",onClick:()=>fe("Google Developer","google.dev@qix.com",["#10b981","#059669"]),children:[c.jsx("div",{className:"google-avatar-circle google-add-icon",children:c.jsx("svg",{viewBox:"0 0 24 24",width:"18",height:"18",fill:"currentColor",children:c.jsx("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"})})}),c.jsx("div",{className:"google-account-info",children:c.jsx("span",{className:"google-name",style:{color:"#1a73e8"},children:N==="en"?"Use another account":N==="uz"?"Boshqa hisobdan foydalanish":"Войти в другой аккаунт"})})]})]}),c.jsx("div",{className:"google-oauth-footer",children:c.jsx("span",{children:N==="en"?"To continue, Google will share your name, email address, language preference, and profile picture with QIX Technologies.":N==="uz"?"Davom etish uchun Google ismingizni, emailingizni, til tanlovingizni va profilingiz rasmini QIX Technologies bilan baham ko'radi.":"Чтобы продолжить, Google предоставит приложению QIX Technologies ваше имя, адрес электронной почты, языковые настройки и фото профиля."})})]})}),k&&c.jsx("div",{className:"apple-oauth-overlay",onClick:()=>S(!1),children:c.jsxs("div",{className:"apple-oauth-window",onClick:ne=>ne.stopPropagation(),children:[c.jsx("button",{type:"button",className:"apple-oauth-close",onClick:()=>S(!1),children:"✕"}),c.jsxs("div",{className:"apple-oauth-header",children:[c.jsx("svg",{viewBox:"0 0 24 24",width:"36",height:"36",fill:"currentColor",style:{color:"#fff",marginBottom:"8px"},children:c.jsx("path",{d:"M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.22.67-2.94 1.51-.63.73-1.18 1.87-1.03 2.98 1.12.09 2.27-.56 2.98-1.43z"})}),c.jsx("h2",{children:"Apple ID"}),c.jsx("p",{children:N==="en"?"Sign in with your Apple ID to continue to QIX Technologies.":N==="uz"?"QIX Technologies ilovasiga kirish uchun Apple ID-ingizdan foydalaning.":"Войдите со своим Apple ID для перехода в приложение QIX Technologies."})]}),c.jsxs("div",{className:"apple-oauth-body",children:[c.jsxs("div",{className:"apple-id-row",children:[c.jsx("span",{className:"apple-id-label",children:"Apple ID"}),c.jsx("span",{className:"apple-id-value",children:"badalbaev.a@icloud.com"})]}),c.jsx("button",{type:"button",className:"apple-continue-btn",onClick:()=>de("BADALBAEV.A","badalbaev.a@icloud.com"),children:N==="en"?"Continue with Touch ID / Face ID":N==="uz"?"Touch ID / Face ID orqali davom etish":"Продолжить с Touch ID / Face ID"}),c.jsx("button",{type:"button",className:"apple-use-other-btn",onClick:()=>de("Apple Developer","apple.dev@qix.com"),children:N==="en"?"Use a different Apple ID":N==="uz"?"Boshqa Apple ID-dan foydalanish":"Использовать другой Apple ID"})]})]})})]})}function Ti({children:t}){const e=me.useRef(null);return me.useEffect(()=>{const n=e.current;if(!n)return;let i=0,r=0,s=0,a=0,o=null;const l=()=>{i+=(s-i)*.16,r+=(a-r)*.16,n.style.transform=`translate3d(${i}px, ${r}px, 0)`,Math.abs(s-i)>.01||Math.abs(a-r)>.01?o=requestAnimationFrame(l):(i=s,r=a,n.style.transform=`translate3d(${i}px, ${r}px, 0)`,o=null)},u=p=>{const h=n.getBoundingClientRect(),g=h.left+h.width/2,_=h.top+h.height/2,y=p.clientX-g,m=p.clientY-_;Math.hypot(y,m)<75?(s=y*.38,a=m*.38):(s=0,a=0),o||(o=requestAnimationFrame(l))},f=()=>{s=0,a=0,o||(o=requestAnimationFrame(l))};return window.addEventListener("mousemove",u),n.addEventListener("mouseleave",f),()=>{window.removeEventListener("mousemove",u),n.removeEventListener("mouseleave",f),o&&cancelAnimationFrame(o)}},[]),c.jsx("div",{ref:e,style:{display:"inline-block",willChange:"transform"},children:t})}function bo({count:t,suffix:e}){const n=me.useRef(null),[i,r]=me.useState(0);return me.useEffect(()=>{const s=new IntersectionObserver(a=>{if(a[0].isIntersecting){const l=performance.now(),u=f=>{const p=Math.min((f-l)/2e3,1),h=1-Math.pow(1-p,3);r(Math.floor(h*t)),p<1&&requestAnimationFrame(u)};requestAnimationFrame(u)}},{threshold:.1});return n.current&&s.observe(n.current),()=>s.disconnect()},[t]),c.jsxs("span",{ref:n,children:[i,e]})}function Bw(){const[t,e]=me.useState(!1),[n,i]=me.useState(!1),[r,s]=me.useState(!1),[a,o]=me.useState(!1),[l,u]=me.useState(!1),f=M=>{M&&M.preventDefault(),C?o(!0):(u(!0),s(!0))},[p,h]=me.useState(!1),[g,_]=me.useState(1),[y,m]=me.useState(!1),d=me.useRef(null),x=me.useRef(null),v=dl(M=>M.lang),E=dl(M=>M.setLang),w=qd[v],C=pr(M=>M.isLoggedIn),R=pr(M=>M.user),k=pr(M=>M.logout);me.useEffect(()=>{const M=new kx({duration:1.2,easing:ie=>Math.min(1,1.001-Math.pow(2,-10*ie)),orientation:"vertical",gestureOrientation:"vertical",smoothWheel:!0,wheelMultiplier:1,touchMultiplier:2,infinite:!1});let I;function H(ie){M.raf(ie),I=requestAnimationFrame(H)}return I=requestAnimationFrame(H),()=>{M.destroy(),cancelAnimationFrame(I)}},[]),me.useEffect(()=>{m(!0)},[]),me.useEffect(()=>{const M=d.current,I=x.current,H={x:-1e3,y:-1e3,targetX:-1e3,targetY:-1e3},ie=K=>{H.targetX=K.clientX,H.targetY=K.clientY};window.addEventListener("mousemove",ie);let P;const j=()=>{H.targetX===-1e3?(H.x+=(-1e3-H.x)*.12,H.y+=(-1e3-H.y)*.12):(H.x+=(H.targetX-H.x)*.22,H.y+=(H.targetY-H.y)*.22),M&&(M.style.transform=`translate3d(${H.x}px, ${H.y}px, 0)`),I&&(I.style.transform=`translate3d(${H.targetX}px, ${H.targetY}px, 0)`),P=requestAnimationFrame(j)};P=requestAnimationFrame(j);const $=()=>{window.scrollY>50?h(!0):h(!1)};let B=[];const N=()=>{B=Array.from(document.querySelectorAll(".portfolio-card-wrapper")).map(K=>{const J=K.getBoundingClientRect();return window.scrollY+J.top})};setTimeout(N,600),window.addEventListener("resize",N);const O=()=>{if(window.innerWidth<768){document.querySelectorAll(".portfolio-card-wrapper").forEach(fe=>{const de=fe.querySelector(".portfolio-card");de&&(de.style.transform="none",de.style.opacity="1",de.style.filter="none")});return}const K=document.querySelectorAll(".portfolio-card-wrapper"),J=window.scrollY;K.forEach((fe,de)=>{const Ce=(B[de]||J+fe.getBoundingClientRect().top)-J,ne=120+de*30,te=fe.querySelector(".portfolio-card");if(te)if(Ce<=ne){const U=K[de+1];if(U){const xe=(B[de+1]||J+U.getBoundingClientRect().top)-J,Z=120+(de+1)*30,ee=xe-Z,pe=400,he=Math.max(0,Math.min(1,(pe-ee)/pe)),A=1-he*.06,T=1-he*.4,G=1-he*.45;te.style.transform=`scale(${A})`,te.style.opacity=`${T}`,te.style.filter=`brightness(${G})`;const ae=te.querySelector(".portfolio-card-image img");if(ae){const re=-he*40;ae.style.transform=`scale(1.04) translateY(${re}px)`}}else{te.style.transform="scale(1)",te.style.opacity="1",te.style.filter="none";const Ie=te.querySelector(".portfolio-card-image img");Ie&&(Ie.style.transform="none")}}else{te.style.transform="scale(1)",te.style.opacity="1",te.style.filter="none";const U=te.querySelector(".portfolio-card-image img");U&&(U.style.transform="none")}})};let D=!1;const z=()=>{D||(D=!0,requestAnimationFrame(()=>{$(),O(),D=!1}))};window.addEventListener("scroll",z,{passive:!0}),setTimeout(O,100);const Q=new IntersectionObserver(K=>{K.forEach(J=>{J.isIntersecting&&(J.target.classList.add("visible"),Q.unobserve(J.target))})},{threshold:.1,rootMargin:"0px 0px -30px 0px"});document.querySelectorAll(".reveal").forEach(K=>Q.observe(K));const V=K=>{const J=K.target;J.tagName==="A"||J.tagName==="BUTTON"||J.closest("a")||J.closest("button")||J.closest(".user-profile-badge")||J.closest(".settings-toggle")||J.classList.contains("research-item")||J.closest(".research-item")?(M==null||M.classList.add("hovered"),I==null||I.classList.add("hovered")):(M==null||M.classList.remove("hovered"),I==null||I.classList.remove("hovered"))};return window.addEventListener("mouseover",V),()=>{window.removeEventListener("mousemove",ie),window.removeEventListener("mouseover",V),window.removeEventListener("scroll",z),window.removeEventListener("resize",N),cancelAnimationFrame(P),Q.disconnect()}},[]);const S=y?"anim-in":"";return c.jsxs(c.Fragment,{children:[c.jsx(Ox,{}),c.jsxs("nav",{className:`nav ${p?"scrolled":""} ${S}`,children:[c.jsxs("div",{className:"nav-left nav-links",children:[c.jsx("a",{href:"#services",children:w.services}),c.jsx("a",{href:"#expertise",children:w.expertise})]}),c.jsxs("div",{className:"nav-brand-center",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:[c.jsx("img",{className:"nav-brand-img",src:"/logo.jpg",alt:"QIX Logo"}),c.jsx("span",{className:"nav-brand-text notranslate",translate:"no",children:"QIX Technologies"})]}),c.jsxs("div",{className:"nav-right nav-links",children:[c.jsxs("div",{className:"lang-switcher",children:[c.jsx("button",{onClick:()=>E("ru"),className:v==="ru"?"active":"",children:"RU"}),c.jsx("button",{onClick:()=>E("uz"),className:v==="uz"?"active":"",children:"UZ"}),c.jsx("button",{onClick:()=>E("en"),className:v==="en"?"active":"",children:"EN"})]}),C?c.jsxs("div",{className:"user-profile-badge",children:[c.jsx("img",{className:"user-profile-avatar",src:R.avatar,alt:"User Avatar"}),c.jsx("span",{className:"user-profile-name",children:R.name}),c.jsx("div",{className:"logout-dropdown",children:c.jsx("button",{className:"logout-btn",onClick:k,children:w.disconnect})})]}):c.jsx("a",{href:"#login",className:"nav-login-link",onClick:M=>{M.preventDefault(),s(!0)},style:{fontSize:"13px",fontWeight:"500",color:"rgba(255, 255, 255, 0.55)",textDecoration:"none",letterSpacing:"0.5px",transition:"color 0.3s ease"},onMouseEnter:M=>M.target.style.color="#fff",onMouseLeave:M=>M.target.style.color="rgba(255, 255, 255, 0.55)",children:w.login}),c.jsx(Ti,{children:c.jsx("a",{href:"#contact",className:"nav-cta",onClick:f,children:c.jsxs("span",{className:"btn-content-inner",children:[c.jsxs("span",{className:"btn-slide-item",children:[c.jsx("span",{children:w.startProject}),c.jsx("svg",{className:"btn-arrow",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:c.jsx("path",{d:"M3 8h10M9 4l4 4-4 4"})})]}),c.jsxs("span",{className:"btn-slide-item btn-slide-item-hover",children:[c.jsx("span",{children:w.startProject}),c.jsx("svg",{className:"btn-arrow",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:c.jsx("path",{d:"M3 8h10M9 4l4 4-4 4"})})]})]})})})]}),c.jsxs("button",{className:`nav-hamburger ${n?"open":""}`,onClick:()=>i(!n),"aria-label":"Menu",children:[c.jsx("span",{}),c.jsx("span",{}),c.jsx("span",{})]})]}),c.jsxs("div",{className:`mobile-menu ${n?"open":""}`,children:[c.jsx("a",{href:"#services",onClick:()=>i(!1),children:w.services}),c.jsx("a",{href:"#expertise",onClick:()=>i(!1),children:w.expertise}),c.jsxs("div",{className:"mobile-lang-switcher",children:[c.jsx("button",{onClick:()=>{E("ru"),i(!1)},className:v==="ru"?"active":"",children:"RU"}),c.jsx("button",{onClick:()=>{E("uz"),i(!1)},className:v==="uz"?"active":"",children:"UZ"}),c.jsx("button",{onClick:()=>{E("en"),i(!1)},className:v==="en"?"active":"",children:"EN"})]}),C?c.jsxs("a",{href:"#logout",onClick:M=>{M.preventDefault(),k(),i(!1)},children:[w.logout," (",R.name,")"]}):c.jsx("a",{href:"#login",onClick:M=>{M.preventDefault(),s(!0),i(!1)},children:w.login}),c.jsx("a",{href:"#contact",className:"mobile-cta",onClick:M=>{i(!1),f(M)},children:w.startProject})]}),c.jsxs("div",{className:"hero-wrapper",children:[c.jsx("div",{className:`hero-fade ${S}`}),c.jsx("div",{className:`hero-fade-top ${S}`}),c.jsxs("div",{id:"hero-overlay",children:[c.jsxs("div",{className:"hero-content",children:[C&&c.jsxs("div",{className:"hero-welcome-badge",children:[c.jsx("span",{className:"welcome-pulse-dot"}),c.jsxs("span",{children:[v==="en"?"Welcome":v==="uz"?"Xush kelibsiz":"Добро пожаловать",", ",R.name]})]}),c.jsxs("h1",{className:`hero-h1 ${S}`,children:[w.heroTitle," ",c.jsx("br",{}),c.jsx("span",{className:"thin",children:w.heroTitleSub})]}),c.jsxs("div",{className:"hero-row",children:[c.jsx("p",{className:`hero-sub ${S}`,children:w.heroDesc}),c.jsxs("div",{className:`hero-actions ${S}`,children:[c.jsx(Ti,{children:c.jsx("a",{href:"#services",className:"btn-primary",children:c.jsxs("span",{className:"btn-content-inner",children:[c.jsxs("span",{className:"btn-slide-item",children:[c.jsx("span",{children:w.services}),c.jsx("svg",{className:"btn-arrow",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:c.jsx("path",{d:"M3 8h10M9 4l4 4-4 4"})})]}),c.jsxs("span",{className:"btn-slide-item btn-slide-item-hover",children:[c.jsx("span",{children:w.services}),c.jsx("svg",{className:"btn-arrow",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:c.jsx("path",{d:"M3 8h10M9 4l4 4-4 4"})})]})]})})}),c.jsx(Ti,{children:c.jsx("a",{href:"#contact",className:"btn-secondary",onClick:f,children:c.jsxs("span",{className:"btn-content-inner",children:[c.jsxs("span",{className:"btn-slide-item",children:[c.jsx("span",{children:v==="en"?"Get in Touch":v==="uz"?"Bog'lanish":"Связаться"}),c.jsx("svg",{className:"btn-arrow",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:c.jsx("path",{d:"M3 8h10M9 4l4 4-4 4"})})]}),c.jsxs("span",{className:"btn-slide-item btn-slide-item-hover",children:[c.jsx("span",{children:v==="en"?"Get in Touch":v==="uz"?"Bog'lanish":"Связаться"}),c.jsx("svg",{className:"btn-arrow",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:c.jsx("path",{d:"M3 8h10M9 4l4 4-4 4"})})]})]})})})]})]})]}),c.jsxs("div",{className:"hero-bottom",children:[c.jsxs("div",{className:"hero-stats",children:[c.jsxs("div",{className:`hero-stat ${S}`,children:[c.jsx("span",{className:"hero-stat-val",children:"150+"}),c.jsx("span",{className:"hero-stat-label",children:w.heroStatsProjects})]}),c.jsxs("div",{className:`hero-stat ${S}`,children:[c.jsx("span",{className:"hero-stat-val",children:"99.9%"}),c.jsx("span",{className:"hero-stat-label",children:w.heroStatsUptime})]}),c.jsxs("div",{className:`hero-stat ${S}`,children:[c.jsx("span",{className:"hero-stat-val",children:"15M+"}),c.jsx("span",{className:"hero-stat-label",children:w.heroStatsUsers})]})]}),c.jsxs("div",{className:`hero-scroll ${S}`,children:[c.jsx("svg",{width:"13",height:"13",viewBox:"0 0 13 13",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{opacity:.35,flexShrink:0},children:c.jsx("path",{d:"M6.5 1v11M2 8l4.5 4.5L11 8",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),c.jsx("span",{style:{letterSpacing:"2px",fontSize:"10px"},children:v==="en"?"Scroll to explore":v==="uz"?"O'rganish uchun aylantiring":"Листайте ниже"})]})]})]})]}),c.jsx("button",{className:"settings-toggle",onClick:()=>e(!t),"aria-label":"Synthesizer Settings",children:c.jsxs("svg",{viewBox:"0 0 24 24",children:[c.jsx("path",{d:"M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"}),c.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51-1Z"})]})}),c.jsx("section",{className:"section section-whatwedo",id:"services",children:c.jsxs("div",{className:"section-inner",children:[c.jsx("div",{className:"section-label reveal",children:w.whatWeDo}),c.jsxs("h2",{className:"section-heading reveal reveal-delay-1",children:[w.engineeredStability," ",c.jsx("span",{className:"thin",children:w.designedGrowth})]}),c.jsxs("div",{className:"features-grid",children:[c.jsxs("div",{className:"feature-card reveal reveal-delay-1",children:[c.jsx("div",{className:"feature-icon",children:c.jsxs("svg",{viewBox:"0 0 24 24",children:[c.jsx("path",{d:"M12 2L2 7l10 5 10-5-10-5z"}),c.jsx("path",{d:"M2 17l10 5 10-5"}),c.jsx("path",{d:"M2 12l10 5 10-5"})]})}),c.jsx("div",{className:"feature-title",children:w.cardWebTitle}),c.jsx("div",{className:"feature-desc",children:w.cardWebDesc})]}),c.jsxs("div",{className:"feature-card reveal reveal-delay-2",children:[c.jsx("div",{className:"feature-icon",children:c.jsxs("svg",{viewBox:"0 0 24 24",children:[c.jsx("circle",{cx:"12",cy:"12",r:"3"}),c.jsx("path",{d:"M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"})]})}),c.jsx("div",{className:"feature-title",children:w.cardAppTitle}),c.jsx("div",{className:"feature-desc",children:w.cardAppDesc})]}),c.jsxs("div",{className:"feature-card reveal reveal-delay-3",children:[c.jsx("div",{className:"feature-icon",children:c.jsx("svg",{viewBox:"0 0 24 24",children:c.jsx("path",{d:"M22 12h-4l-3 9L9 3l-3 9H2"})})}),c.jsx("div",{className:"feature-title",children:w.cardDesignTitle}),c.jsx("div",{className:"feature-desc",children:w.cardDesignDesc})]}),c.jsxs("div",{className:"feature-card reveal reveal-delay-4",children:[c.jsx("div",{className:"feature-icon",children:c.jsxs("svg",{viewBox:"0 0 24 24",children:[c.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),c.jsx("path",{d:"M3 9h18M9 3v18"})]})}),c.jsx("div",{className:"feature-title",children:w.cardCloudTitle}),c.jsx("div",{className:"feature-desc",children:w.cardCloudDesc})]}),c.jsxs("div",{className:"feature-card reveal reveal-delay-5",children:[c.jsx("div",{className:"feature-icon",children:c.jsxs("svg",{viewBox:"0 0 24 24",children:[c.jsx("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),c.jsx("circle",{cx:"9",cy:"7",r:"4"}),c.jsx("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),c.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]})}),c.jsx("div",{className:"feature-title",children:w.cardApiTitle}),c.jsx("div",{className:"feature-desc",children:w.cardApiDesc})]}),c.jsxs("div",{className:"feature-card reveal reveal-delay-6",children:[c.jsx("div",{className:"feature-icon",children:c.jsx("svg",{viewBox:"0 0 24 24",children:c.jsx("polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"})})}),c.jsx("div",{className:"feature-title",children:w.cardSupportTitle}),c.jsx("div",{className:"feature-desc",children:w.cardSupportDesc})]})]})]})}),c.jsx("section",{className:"section section-research",id:"expertise",children:c.jsxs("div",{className:"section-inner",children:[c.jsxs("div",{className:"research-content",children:[c.jsx("div",{className:"section-label reveal",children:w.researchAreas}),c.jsxs("h2",{className:"section-heading reveal reveal-delay-1",style:{marginBottom:"48px"},children:[w.threePillars," ",c.jsx("span",{className:"thin",children:w.scientificExecution})]}),c.jsxs("div",{className:"research-list",children:[c.jsx("div",{className:"research-item-wrap reveal reveal-delay-2",children:c.jsxs("div",{className:`research-item ${g===1?"active":""}`,onMouseEnter:()=>_(1),onTouchStart:()=>_(1),children:[c.jsx("div",{className:"research-num",children:"01"}),c.jsxs("div",{className:"research-item-content",children:[c.jsx("div",{className:"research-item-title",children:w.pillar1Title}),c.jsx("div",{className:"research-item-desc",children:w.pillar1Desc})]})]})}),c.jsx("div",{className:"research-item-wrap reveal reveal-delay-3",children:c.jsxs("div",{className:`research-item ${g===2?"active":""}`,onMouseEnter:()=>_(2),onTouchStart:()=>_(2),children:[c.jsx("div",{className:"research-num",children:"02"}),c.jsxs("div",{className:"research-item-content",children:[c.jsx("div",{className:"research-item-title",children:w.pillar2Title}),c.jsx("div",{className:"research-item-desc",children:w.pillar2Desc})]})]})}),c.jsx("div",{className:"research-item-wrap reveal reveal-delay-4",children:c.jsxs("div",{className:`research-item ${g===3?"active":""}`,onMouseEnter:()=>_(3),onTouchStart:()=>_(3),children:[c.jsx("div",{className:"research-num",children:"03"}),c.jsxs("div",{className:"research-item-content",children:[c.jsx("div",{className:"research-item-title",children:w.pillar3Title}),c.jsx("div",{className:"research-item-desc",children:w.pillar3Desc})]})]})})]})]}),c.jsx("div",{className:"research-canvas-wrap",children:c.jsx(Uw,{activeFormation:g})})]})}),c.jsx("section",{className:"section section-portfolio",id:"work",children:c.jsxs("div",{className:"section-inner",children:[c.jsxs("div",{className:"portfolio-header",children:[c.jsx("div",{className:"section-label reveal",children:w.selectedWork}),c.jsxs("h2",{className:"section-heading reveal reveal-delay-1",children:[w.caseStudies," ",c.jsx("span",{className:"thin",children:w.builtSolutions})]})]}),c.jsxs("div",{className:"portfolio-cards",children:[c.jsx("div",{className:"portfolio-card-wrapper reveal reveal-delay-2",children:c.jsxs("div",{className:"portfolio-card",children:[c.jsxs("div",{className:"portfolio-card-content",children:[c.jsx("div",{className:"portfolio-card-tag",children:v==="en"?"Web Application / AI":v==="uz"?"Veb-ilova / AI":"Веб-приложение / ИИ"}),c.jsx("h3",{className:"portfolio-card-title",children:"HubRecipeCook"}),c.jsx("p",{className:"portfolio-card-desc",children:v==="en"?"A modern culinary recipe platform featuring category filtering, detailed cooking instructions, user favorites, and an integrated AI Chef Assistant that crafts custom recipes based on ingredients currently in your kitchen.":v==="uz"?"Kategoriya filtratsiyasi, batafsil pishirish ko'rsatmalari, sevimli taomlar ro'yxati va oshxonangizdagi masalliqlar asosida shaxsiy retseptlar yaratadigan Sun'iy Intellekt oshpaziga ega zamonaviy pazandachilik platformasi.":"Современная кулинарная платформа с фильтрацией по категориям, подробными инструкциями, избранным и встроенным ИИ-шефом, который создает уникальные рецепты из продуктов в вашем холодильнике."}),c.jsxs("div",{className:"portfolio-card-tech",children:[c.jsx("span",{children:"React"}),c.jsx("span",{children:"Vite"}),c.jsx("span",{children:"AI Chef"}),c.jsx("span",{children:"Glassmorphism"})]}),c.jsx(Ti,{children:c.jsx("a",{href:"https://hubrecipecook.netlify.app",target:"_blank",rel:"noopener noreferrer",className:"btn-primary",children:c.jsxs("span",{className:"btn-content-inner",children:[c.jsxs("span",{className:"btn-slide-item",children:[c.jsx("span",{children:w.visitWebsite}),c.jsx("svg",{className:"btn-arrow",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:c.jsx("path",{d:"M3 8h10M9 4l4 4-4 4"})})]}),c.jsxs("span",{className:"btn-slide-item btn-slide-item-hover",children:[c.jsx("span",{children:w.visitWebsite}),c.jsx("svg",{className:"btn-arrow",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:c.jsx("path",{d:"M3 8h10M9 4l4 4-4 4"})})]})]})})})]}),c.jsx("div",{className:"portfolio-card-image",children:c.jsx("img",{src:"/project_recipe.jpg",alt:"HubRecipeCook Platform",loading:"lazy"})})]})}),c.jsx("div",{className:"portfolio-card-wrapper reveal reveal-delay-3",children:c.jsxs("div",{className:"portfolio-card",children:[c.jsxs("div",{className:"portfolio-card-content",children:[c.jsx("div",{className:"portfolio-card-tag",children:"SaaS Platform"}),c.jsx("h3",{className:"portfolio-card-title",children:"Aether Analytics Suite"}),c.jsx("p",{className:"portfolio-card-desc",children:v==="en"?"Enterprise performance tracking platform processing millions of API events daily. Features custom 3D data visualization, predictive analytics, and automated alerting.":v==="uz"?"Har kuni millionlab API so'rovlarini qayta ishlaydigan korxona samaradorligini kuzatish platformasi. Shaxsiy 3D ma'lumotlar vizualizatsiyasi, prognozli tahlillar va avtomatlashtirilgan ogohlantirishlarni o'z ichiga oladi.":"Корпоративная платформа аналитики, обрабатывающая миллионы API-событий ежедневно. Включает 3D-визуализацию данных, предиктивную аналитику и автооповещения."}),c.jsxs("div",{className:"portfolio-card-tech",children:[c.jsx("span",{children:"React"}),c.jsx("span",{children:"Next.js"}),c.jsx("span",{children:"Three.js"}),c.jsx("span",{children:"Node.js"})]}),c.jsx(Ti,{children:c.jsx("a",{href:"#contact",className:"btn-primary",onClick:f,children:c.jsxs("span",{className:"btn-content-inner",children:[c.jsxs("span",{className:"btn-slide-item",children:[c.jsx("span",{children:w.viewCase}),c.jsx("svg",{className:"btn-arrow",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:c.jsx("path",{d:"M3 8h10M9 4l4 4-4 4"})})]}),c.jsxs("span",{className:"btn-slide-item btn-slide-item-hover",children:[c.jsx("span",{children:w.viewCase}),c.jsx("svg",{className:"btn-arrow",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:c.jsx("path",{d:"M3 8h10M9 4l4 4-4 4"})})]})]})})})]}),c.jsx("div",{className:"portfolio-card-image",children:c.jsx("img",{src:"/project_analytics.jpg",alt:"Aether Analytics Suite",loading:"lazy"})})]})}),c.jsx("div",{className:"portfolio-card-wrapper reveal reveal-delay-4",children:c.jsxs("div",{className:"portfolio-card",children:[c.jsxs("div",{className:"portfolio-card-content",children:[c.jsx("div",{className:"portfolio-card-tag",children:"DevOps / Cloud"}),c.jsx("h3",{className:"portfolio-card-title",children:"Nebula Cloud Console"}),c.jsx("p",{className:"portfolio-card-desc",children:v==="en"?"Fully automated multi-region deployment center. Combines real-time global network mesh maps, cluster load indicators, and secure authorization controls.":v==="uz"?"To'liq avtomatlashtirilgan ko'p mintaqali bulutli serverlar markazi. Haqiqiy vaqtdagi global tarmoq xaritalari, yuklama ko'rsatkichlari va xavfsiz avtorizatsiyani birlashtiradi.":"Полностью автоматизированный центр развертывания в нескольких облачных регионах. Объединяет глобальные сетевые карты в реальном времени, датчики нагрузки кластеров и средства контроля безопасности."}),c.jsxs("div",{className:"portfolio-card-tech",children:[c.jsx("span",{children:"Vite"}),c.jsx("span",{children:"AWS"}),c.jsx("span",{children:"Kubernetes"}),c.jsx("span",{children:"GraphQL"})]}),c.jsx(Ti,{children:c.jsx("a",{href:"#contact",className:"btn-primary",onClick:f,children:c.jsxs("span",{className:"btn-content-inner",children:[c.jsxs("span",{className:"btn-slide-item",children:[c.jsx("span",{children:w.viewCase}),c.jsx("svg",{className:"btn-arrow",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:c.jsx("path",{d:"M3 8h10M9 4l4 4-4 4"})})]}),c.jsxs("span",{className:"btn-slide-item btn-slide-item-hover",children:[c.jsx("span",{children:w.viewCase}),c.jsx("svg",{className:"btn-arrow",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:c.jsx("path",{d:"M3 8h10M9 4l4 4-4 4"})})]})]})})})]}),c.jsx("div",{className:"portfolio-card-image",children:c.jsx("img",{src:"/project_cloud.jpg",alt:"Nebula Cloud Console",loading:"lazy"})})]})})]})]})}),c.jsxs("section",{className:"section section-numbers",id:"scale",children:[c.jsx(Fw,{}),c.jsx("div",{className:"section-inner",children:c.jsxs("div",{className:"numbers-content",children:[c.jsx("div",{className:"section-label reveal",children:w.byNumbers}),c.jsxs("h2",{className:"section-heading reveal reveal-delay-1",children:[w.scaleSpeaks," ",c.jsx("span",{className:"thin",children:w.itself})]}),c.jsxs("div",{className:"numbers-grid",children:[c.jsxs("div",{className:"number-card reveal reveal-delay-2",children:[c.jsx("div",{className:"number-val",children:c.jsx(bo,{count:150,suffix:"+"})}),c.jsx("div",{className:"number-divider"}),c.jsx("div",{className:"number-label",children:w.numCardProjects})]}),c.jsxs("div",{className:"number-card reveal reveal-delay-3",children:[c.jsx("div",{className:"number-val",children:c.jsx(bo,{count:99,suffix:".9%"})}),c.jsx("div",{className:"number-divider"}),c.jsx("div",{className:"number-label",children:w.numCardUptime})]}),c.jsxs("div",{className:"number-card reveal reveal-delay-4",children:[c.jsx("div",{className:"number-val",children:c.jsx(bo,{count:45,suffix:"+"})}),c.jsx("div",{className:"number-divider"}),c.jsx("div",{className:"number-label",children:w.numCardEngineers})]}),c.jsxs("div",{className:"number-card reveal reveal-delay-5",children:[c.jsx("div",{className:"number-val",children:c.jsx(bo,{count:10,suffix:"x"})}),c.jsx("div",{className:"number-divider"}),c.jsx("div",{className:"number-label",children:w.numCardSpeed})]})]})]})})]}),c.jsx("section",{className:"section section-cta",id:"contact",children:c.jsxs("div",{className:"section-inner",children:[c.jsx("div",{className:"section-label reveal",children:w.getInvolved}),c.jsxs("h2",{className:"cta-heading reveal reveal-delay-1",children:[w.nextBreakthrough," ",c.jsx("span",{className:"thin",children:w.startsYou})]}),c.jsx("p",{className:"cta-sub reveal reveal-delay-2",children:w.ctaDesc}),c.jsxs("div",{className:"cta-actions reveal reveal-delay-3",children:[c.jsx(Ti,{children:c.jsx("button",{className:"btn-primary",onClick:()=>f(),children:c.jsxs("span",{className:"btn-content-inner",children:[c.jsxs("span",{className:"btn-slide-item",children:[c.jsx("span",{children:w.startProject}),c.jsx("svg",{className:"btn-arrow",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:c.jsx("path",{d:"M3 8h10M9 4l4 4-4 4"})})]}),c.jsxs("span",{className:"btn-slide-item btn-slide-item-hover",children:[c.jsx("span",{children:w.startProject}),c.jsx("svg",{className:"btn-arrow",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:c.jsx("path",{d:"M3 8h10M9 4l4 4-4 4"})})]})]})})}),c.jsx(Ti,{children:c.jsx("button",{className:"btn-secondary",onClick:()=>f(),children:c.jsxs("span",{className:"btn-content-inner",children:[c.jsxs("span",{className:"btn-slide-item",children:[c.jsx("span",{children:v==="en"?"Get in Touch":v==="uz"?"Bog'lanish":"Связаться"}),c.jsx("svg",{className:"btn-arrow",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:c.jsx("path",{d:"M3 8h10M9 4l4 4-4 4"})})]}),c.jsxs("span",{className:"btn-slide-item btn-slide-item-hover",children:[c.jsx("span",{children:v==="en"?"Get in Touch":v==="uz"?"Bog'lanish":"Связаться"}),c.jsx("svg",{className:"btn-arrow",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:c.jsx("path",{d:"M3 8h10M9 4l4 4-4 4"})})]})]})})})]})]})}),c.jsx("footer",{className:"footer",id:"about",children:c.jsxs("div",{className:"section-inner",style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%"},children:[c.jsxs("div",{className:"footer-left",children:[c.jsx("img",{className:"footer-img",src:"/logo.jpg",alt:"QIX Logo"}),c.jsx("span",{className:"footer-brand",style:{marginLeft:"10px"},children:"QIX Technologies"})]}),c.jsxs("div",{className:"footer-right",children:["© 2026 QIX Technologies Inc. ",w.footerCopy]})]})}),c.jsx(Ow,{isOpen:t,onClose:()=>e(!1)}),c.jsx(zw,{isOpen:r,onClose:()=>{s(!1),u(!1)},isRequiredNotice:l}),c.jsx(fy,{isOpen:a,onClose:()=>o(!1)}),c.jsx("div",{ref:x,className:"custom-cursor-dot"}),c.jsx("div",{ref:d,className:"custom-cursor-circle"})]})}$c.createRoot(document.getElementById("root")).render(c.jsx(rm.StrictMode,{children:c.jsx(Bw,{})}));
