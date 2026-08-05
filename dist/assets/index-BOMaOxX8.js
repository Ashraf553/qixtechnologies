var t_=Object.defineProperty;var n_=(t,e,n)=>e in t?t_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Se=(t,e,n)=>n_(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function qp(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Yp={exports:{}},Sl={},$p={exports:{}},We={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ba=Symbol.for("react.element"),i_=Symbol.for("react.portal"),r_=Symbol.for("react.fragment"),s_=Symbol.for("react.strict_mode"),a_=Symbol.for("react.profiler"),o_=Symbol.for("react.provider"),l_=Symbol.for("react.context"),c_=Symbol.for("react.forward_ref"),u_=Symbol.for("react.suspense"),d_=Symbol.for("react.memo"),h_=Symbol.for("react.lazy"),ch=Symbol.iterator;function f_(t){return t===null||typeof t!="object"?null:(t=ch&&t[ch]||t["@@iterator"],typeof t=="function"?t:null)}var Kp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Zp=Object.assign,Qp={};function ws(t,e,n){this.props=t,this.context=e,this.refs=Qp,this.updater=n||Kp}ws.prototype.isReactComponent={};ws.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ws.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Jp(){}Jp.prototype=ws.prototype;function Ju(t,e,n){this.props=t,this.context=e,this.refs=Qp,this.updater=n||Kp}var ed=Ju.prototype=new Jp;ed.constructor=Ju;Zp(ed,ws.prototype);ed.isPureReactComponent=!0;var uh=Array.isArray,em=Object.prototype.hasOwnProperty,td={current:null},tm={key:!0,ref:!0,__self:!0,__source:!0};function nm(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)em.call(e,i)&&!tm.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:ba,type:t,key:s,ref:a,props:r,_owner:td.current}}function p_(t,e){return{$$typeof:ba,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function nd(t){return typeof t=="object"&&t!==null&&t.$$typeof===ba}function m_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var dh=/\/+/g;function ql(t,e){return typeof t=="object"&&t!==null&&t.key!=null?m_(""+t.key):e.toString(36)}function Co(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case ba:case i_:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+ql(a,0):i,uh(r)?(n="",t!=null&&(n=t.replace(dh,"$&/")+"/"),Co(r,e,n,"",function(c){return c})):r!=null&&(nd(r)&&(r=p_(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(dh,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",uh(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+ql(s,o);a+=Co(s,e,n,l,r)}else if(l=f_(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+ql(s,o++),a+=Co(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Oa(t,e,n){if(t==null)return t;var i=[],r=0;return Co(t,i,"","",function(s){return e.call(n,s,r++)}),i}function g_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Kt={current:null},Ro={transition:null},v_={ReactCurrentDispatcher:Kt,ReactCurrentBatchConfig:Ro,ReactCurrentOwner:td};function im(){throw Error("act(...) is not supported in production builds of React.")}We.Children={map:Oa,forEach:function(t,e,n){Oa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Oa(t,function(){e++}),e},toArray:function(t){return Oa(t,function(e){return e})||[]},only:function(t){if(!nd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};We.Component=ws;We.Fragment=r_;We.Profiler=a_;We.PureComponent=Ju;We.StrictMode=s_;We.Suspense=u_;We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=v_;We.act=im;We.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Zp({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=td.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)em.call(e,l)&&!tm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:ba,type:t.type,key:r,ref:s,props:i,_owner:a}};We.createContext=function(t){return t={$$typeof:l_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:o_,_context:t},t.Consumer=t};We.createElement=nm;We.createFactory=function(t){var e=nm.bind(null,t);return e.type=t,e};We.createRef=function(){return{current:null}};We.forwardRef=function(t){return{$$typeof:c_,render:t}};We.isValidElement=nd;We.lazy=function(t){return{$$typeof:h_,_payload:{_status:-1,_result:t},_init:g_}};We.memo=function(t,e){return{$$typeof:d_,type:t,compare:e===void 0?null:e}};We.startTransition=function(t){var e=Ro.transition;Ro.transition={};try{t()}finally{Ro.transition=e}};We.unstable_act=im;We.useCallback=function(t,e){return Kt.current.useCallback(t,e)};We.useContext=function(t){return Kt.current.useContext(t)};We.useDebugValue=function(){};We.useDeferredValue=function(t){return Kt.current.useDeferredValue(t)};We.useEffect=function(t,e){return Kt.current.useEffect(t,e)};We.useId=function(){return Kt.current.useId()};We.useImperativeHandle=function(t,e,n){return Kt.current.useImperativeHandle(t,e,n)};We.useInsertionEffect=function(t,e){return Kt.current.useInsertionEffect(t,e)};We.useLayoutEffect=function(t,e){return Kt.current.useLayoutEffect(t,e)};We.useMemo=function(t,e){return Kt.current.useMemo(t,e)};We.useReducer=function(t,e,n){return Kt.current.useReducer(t,e,n)};We.useRef=function(t){return Kt.current.useRef(t)};We.useState=function(t){return Kt.current.useState(t)};We.useSyncExternalStore=function(t,e,n){return Kt.current.useSyncExternalStore(t,e,n)};We.useTransition=function(){return Kt.current.useTransition()};We.version="18.3.1";$p.exports=We;var fe=$p.exports;const rm=qp(fe);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var __=fe,x_=Symbol.for("react.element"),y_=Symbol.for("react.fragment"),S_=Object.prototype.hasOwnProperty,E_=__.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,M_={key:!0,ref:!0,__self:!0,__source:!0};function sm(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)S_.call(e,i)&&!M_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:x_,type:t,key:s,ref:a,props:r,_owner:E_.current}}Sl.Fragment=y_;Sl.jsx=sm;Sl.jsxs=sm;Yp.exports=Sl;var d=Yp.exports,Kc={},am={exports:{}},gn={},om={exports:{}},lm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(F,k){var R=F.length;F.push(k);e:for(;0<R;){var D=R-1>>>1,K=F[D];if(0<r(K,k))F[D]=k,F[R]=K,R=D;else break e}}function n(F){return F.length===0?null:F[0]}function i(F){if(F.length===0)return null;var k=F[0],R=F.pop();if(R!==k){F[0]=R;e:for(var D=0,K=F.length,H=K>>>1;D<H;){var Y=2*(D+1)-1,ae=F[Y],ce=Y+1,pe=F[ce];if(0>r(ae,R))ce<K&&0>r(pe,ae)?(F[D]=pe,F[ce]=R,D=ce):(F[D]=ae,F[Y]=R,D=Y);else if(ce<K&&0>r(pe,R))F[D]=pe,F[ce]=R,D=ce;else break e}}return k}function r(F,k){var R=F.sortIndex-k.sortIndex;return R!==0?R:F.id-k.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],f=1,p=null,h=3,v=!1,_=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(F){for(var k=n(c);k!==null;){if(k.callback===null)i(c);else if(k.startTime<=F)i(c),k.sortIndex=k.expirationTime,e(l,k);else break;k=n(c)}}function S(F){if(y=!1,x(F),!_)if(n(l)!==null)_=!0,q(N);else{var k=n(c);k!==null&&Q(S,k.startTime-F)}}function N(F,k){_=!1,y&&(y=!1,u(z),z=-1),v=!0;var R=h;try{for(x(k),p=n(l);p!==null&&(!(p.expirationTime>k)||F&&!U());){var D=p.callback;if(typeof D=="function"){p.callback=null,h=p.priorityLevel;var K=D(p.expirationTime<=k);k=t.unstable_now(),typeof K=="function"?p.callback=K:p===n(l)&&i(l),x(k)}else i(l);p=n(l)}if(p!==null)var H=!0;else{var Y=n(c);Y!==null&&Q(S,Y.startTime-k),H=!1}return H}finally{p=null,h=R,v=!1}}var C=!1,T=null,z=-1,E=5,w=-1;function U(){return!(t.unstable_now()-w<E)}function L(){if(T!==null){var F=t.unstable_now();w=F;var k=!0;try{k=T(!0,F)}finally{k?Z():(C=!1,T=null)}}else C=!1}var Z;if(typeof g=="function")Z=function(){g(L)};else if(typeof MessageChannel<"u"){var P=new MessageChannel,O=P.port2;P.port1.onmessage=L,Z=function(){O.postMessage(null)}}else Z=function(){m(L,0)};function q(F){T=F,C||(C=!0,Z())}function Q(F,k){z=m(function(){F(t.unstable_now())},k)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(F){F.callback=null},t.unstable_continueExecution=function(){_||v||(_=!0,q(N))},t.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<F?Math.floor(1e3/F):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(F){switch(h){case 1:case 2:case 3:var k=3;break;default:k=h}var R=h;h=k;try{return F()}finally{h=R}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(F,k){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var R=h;h=F;try{return k()}finally{h=R}},t.unstable_scheduleCallback=function(F,k,R){var D=t.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?D+R:D):R=D,F){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=R+K,F={id:f++,callback:k,priorityLevel:F,startTime:R,expirationTime:K,sortIndex:-1},R>D?(F.sortIndex=R,e(c,F),n(l)===null&&F===n(c)&&(y?(u(z),z=-1):y=!0,Q(S,R-D))):(F.sortIndex=K,e(l,F),_||v||(_=!0,q(N))),F},t.unstable_shouldYield=U,t.unstable_wrapCallback=function(F){var k=h;return function(){var R=h;h=k;try{return F.apply(this,arguments)}finally{h=R}}}})(lm);om.exports=lm;var T_=om.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w_=fe,mn=T_;function ie(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var cm=new Set,aa={};function wr(t,e){fs(t,e),fs(t+"Capture",e)}function fs(t,e){for(aa[t]=e,t=0;t<e.length;t++)cm.add(e[t])}var di=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zc=Object.prototype.hasOwnProperty,A_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,hh={},fh={};function b_(t){return Zc.call(fh,t)?!0:Zc.call(hh,t)?!1:A_.test(t)?fh[t]=!0:(hh[t]=!0,!1)}function C_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function R_(t,e,n,i){if(e===null||typeof e>"u"||C_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Zt(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var It={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){It[t]=new Zt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];It[e]=new Zt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){It[t]=new Zt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){It[t]=new Zt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){It[t]=new Zt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){It[t]=new Zt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){It[t]=new Zt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){It[t]=new Zt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){It[t]=new Zt(t,5,!1,t.toLowerCase(),null,!1,!1)});var id=/[\-:]([a-z])/g;function rd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(id,rd);It[e]=new Zt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(id,rd);It[e]=new Zt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(id,rd);It[e]=new Zt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){It[t]=new Zt(t,1,!1,t.toLowerCase(),null,!1,!1)});It.xlinkHref=new Zt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){It[t]=new Zt(t,1,!1,t.toLowerCase(),null,!0,!0)});function sd(t,e,n,i){var r=It.hasOwnProperty(e)?It[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(R_(e,n,r,i)&&(n=null),i||r===null?b_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var gi=w_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,za=Symbol.for("react.element"),Wr=Symbol.for("react.portal"),Xr=Symbol.for("react.fragment"),ad=Symbol.for("react.strict_mode"),Qc=Symbol.for("react.profiler"),um=Symbol.for("react.provider"),dm=Symbol.for("react.context"),od=Symbol.for("react.forward_ref"),Jc=Symbol.for("react.suspense"),eu=Symbol.for("react.suspense_list"),ld=Symbol.for("react.memo"),wi=Symbol.for("react.lazy"),hm=Symbol.for("react.offscreen"),ph=Symbol.iterator;function Ls(t){return t===null||typeof t!="object"?null:(t=ph&&t[ph]||t["@@iterator"],typeof t=="function"?t:null)}var dt=Object.assign,Yl;function Vs(t){if(Yl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Yl=e&&e[1]||""}return`
`+Yl+t}var $l=!1;function Kl(t,e){if(!t||$l)return"";$l=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{$l=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Vs(t):""}function N_(t){switch(t.tag){case 5:return Vs(t.type);case 16:return Vs("Lazy");case 13:return Vs("Suspense");case 19:return Vs("SuspenseList");case 0:case 2:case 15:return t=Kl(t.type,!1),t;case 11:return t=Kl(t.type.render,!1),t;case 1:return t=Kl(t.type,!0),t;default:return""}}function tu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Xr:return"Fragment";case Wr:return"Portal";case Qc:return"Profiler";case ad:return"StrictMode";case Jc:return"Suspense";case eu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case dm:return(t.displayName||"Context")+".Consumer";case um:return(t._context.displayName||"Context")+".Provider";case od:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ld:return e=t.displayName||null,e!==null?e:tu(t.type)||"Memo";case wi:e=t._payload,t=t._init;try{return tu(t(e))}catch{}}return null}function P_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return tu(e);case 8:return e===ad?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Wi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function fm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function L_(t){var e=fm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ba(t){t._valueTracker||(t._valueTracker=L_(t))}function pm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=fm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Ho(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function nu(t,e){var n=e.checked;return dt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function mh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Wi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function mm(t,e){e=e.checked,e!=null&&sd(t,"checked",e,!1)}function iu(t,e){mm(t,e);var n=Wi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ru(t,e.type,n):e.hasOwnProperty("defaultValue")&&ru(t,e.type,Wi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function gh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ru(t,e,n){(e!=="number"||Ho(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ws=Array.isArray;function ss(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Wi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function su(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ie(91));return dt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function vh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ie(92));if(Ws(n)){if(1<n.length)throw Error(ie(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Wi(n)}}function gm(t,e){var n=Wi(e.value),i=Wi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function _h(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function vm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function au(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?vm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ha,_m=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ha=Ha||document.createElement("div"),Ha.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ha.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function oa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ys={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},D_=["Webkit","ms","Moz","O"];Object.keys(Ys).forEach(function(t){D_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ys[e]=Ys[t]})});function xm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ys.hasOwnProperty(t)&&Ys[t]?(""+e).trim():e+"px"}function ym(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=xm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var I_=dt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ou(t,e){if(e){if(I_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ie(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ie(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ie(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ie(62))}}function lu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var cu=null;function cd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var uu=null,as=null,os=null;function xh(t){if(t=Na(t)){if(typeof uu!="function")throw Error(ie(280));var e=t.stateNode;e&&(e=Al(e),uu(t.stateNode,t.type,e))}}function Sm(t){as?os?os.push(t):os=[t]:as=t}function Em(){if(as){var t=as,e=os;if(os=as=null,xh(t),e)for(t=0;t<e.length;t++)xh(e[t])}}function Mm(t,e){return t(e)}function Tm(){}var Zl=!1;function wm(t,e,n){if(Zl)return t(e,n);Zl=!0;try{return Mm(t,e,n)}finally{Zl=!1,(as!==null||os!==null)&&(Tm(),Em())}}function la(t,e){var n=t.stateNode;if(n===null)return null;var i=Al(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ie(231,e,typeof n));return n}var du=!1;if(di)try{var Ds={};Object.defineProperty(Ds,"passive",{get:function(){du=!0}}),window.addEventListener("test",Ds,Ds),window.removeEventListener("test",Ds,Ds)}catch{du=!1}function U_(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var $s=!1,jo=null,Go=!1,hu=null,F_={onError:function(t){$s=!0,jo=t}};function k_(t,e,n,i,r,s,a,o,l){$s=!1,jo=null,U_.apply(F_,arguments)}function O_(t,e,n,i,r,s,a,o,l){if(k_.apply(this,arguments),$s){if($s){var c=jo;$s=!1,jo=null}else throw Error(ie(198));Go||(Go=!0,hu=c)}}function Ar(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Am(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function yh(t){if(Ar(t)!==t)throw Error(ie(188))}function z_(t){var e=t.alternate;if(!e){if(e=Ar(t),e===null)throw Error(ie(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return yh(r),t;if(s===i)return yh(r),e;s=s.sibling}throw Error(ie(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(ie(189))}}if(n.alternate!==i)throw Error(ie(190))}if(n.tag!==3)throw Error(ie(188));return n.stateNode.current===n?t:e}function bm(t){return t=z_(t),t!==null?Cm(t):null}function Cm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Cm(t);if(e!==null)return e;t=t.sibling}return null}var Rm=mn.unstable_scheduleCallback,Sh=mn.unstable_cancelCallback,B_=mn.unstable_shouldYield,H_=mn.unstable_requestPaint,gt=mn.unstable_now,j_=mn.unstable_getCurrentPriorityLevel,ud=mn.unstable_ImmediatePriority,Nm=mn.unstable_UserBlockingPriority,Vo=mn.unstable_NormalPriority,G_=mn.unstable_LowPriority,Pm=mn.unstable_IdlePriority,El=null,qn=null;function V_(t){if(qn&&typeof qn.onCommitFiberRoot=="function")try{qn.onCommitFiberRoot(El,t,void 0,(t.current.flags&128)===128)}catch{}}var On=Math.clz32?Math.clz32:q_,W_=Math.log,X_=Math.LN2;function q_(t){return t>>>=0,t===0?32:31-(W_(t)/X_|0)|0}var ja=64,Ga=4194304;function Xs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Wo(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=Xs(o):(s&=a,s!==0&&(i=Xs(s)))}else a=n&~r,a!==0?i=Xs(a):s!==0&&(i=Xs(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-On(e),r=1<<n,i|=t[n],e&=~r;return i}function Y_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-On(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=Y_(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function fu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Lm(){var t=ja;return ja<<=1,!(ja&4194240)&&(ja=64),t}function Ql(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ca(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-On(e),t[e]=n}function K_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-On(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function dd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-On(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Ke=0;function Dm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Im,hd,Um,Fm,km,pu=!1,Va=[],Ii=null,Ui=null,Fi=null,ca=new Map,ua=new Map,bi=[],Z_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Eh(t,e){switch(t){case"focusin":case"focusout":Ii=null;break;case"dragenter":case"dragleave":Ui=null;break;case"mouseover":case"mouseout":Fi=null;break;case"pointerover":case"pointerout":ca.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ua.delete(e.pointerId)}}function Is(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Na(e),e!==null&&hd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Q_(t,e,n,i,r){switch(e){case"focusin":return Ii=Is(Ii,t,e,n,i,r),!0;case"dragenter":return Ui=Is(Ui,t,e,n,i,r),!0;case"mouseover":return Fi=Is(Fi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ca.set(s,Is(ca.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ua.set(s,Is(ua.get(s)||null,t,e,n,i,r)),!0}return!1}function Om(t){var e=cr(t.target);if(e!==null){var n=Ar(e);if(n!==null){if(e=n.tag,e===13){if(e=Am(n),e!==null){t.blockedOn=e,km(t.priority,function(){Um(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function No(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=mu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);cu=i,n.target.dispatchEvent(i),cu=null}else return e=Na(n),e!==null&&hd(e),t.blockedOn=n,!1;e.shift()}return!0}function Mh(t,e,n){No(t)&&n.delete(e)}function J_(){pu=!1,Ii!==null&&No(Ii)&&(Ii=null),Ui!==null&&No(Ui)&&(Ui=null),Fi!==null&&No(Fi)&&(Fi=null),ca.forEach(Mh),ua.forEach(Mh)}function Us(t,e){t.blockedOn===e&&(t.blockedOn=null,pu||(pu=!0,mn.unstable_scheduleCallback(mn.unstable_NormalPriority,J_)))}function da(t){function e(r){return Us(r,t)}if(0<Va.length){Us(Va[0],t);for(var n=1;n<Va.length;n++){var i=Va[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ii!==null&&Us(Ii,t),Ui!==null&&Us(Ui,t),Fi!==null&&Us(Fi,t),ca.forEach(e),ua.forEach(e),n=0;n<bi.length;n++)i=bi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<bi.length&&(n=bi[0],n.blockedOn===null);)Om(n),n.blockedOn===null&&bi.shift()}var ls=gi.ReactCurrentBatchConfig,Xo=!0;function e0(t,e,n,i){var r=Ke,s=ls.transition;ls.transition=null;try{Ke=1,fd(t,e,n,i)}finally{Ke=r,ls.transition=s}}function t0(t,e,n,i){var r=Ke,s=ls.transition;ls.transition=null;try{Ke=4,fd(t,e,n,i)}finally{Ke=r,ls.transition=s}}function fd(t,e,n,i){if(Xo){var r=mu(t,e,n,i);if(r===null)lc(t,e,i,qo,n),Eh(t,i);else if(Q_(r,t,e,n,i))i.stopPropagation();else if(Eh(t,i),e&4&&-1<Z_.indexOf(t)){for(;r!==null;){var s=Na(r);if(s!==null&&Im(s),s=mu(t,e,n,i),s===null&&lc(t,e,i,qo,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else lc(t,e,i,null,n)}}var qo=null;function mu(t,e,n,i){if(qo=null,t=cd(i),t=cr(t),t!==null)if(e=Ar(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Am(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return qo=t,null}function zm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(j_()){case ud:return 1;case Nm:return 4;case Vo:case G_:return 16;case Pm:return 536870912;default:return 16}default:return 16}}var Ri=null,pd=null,Po=null;function Bm(){if(Po)return Po;var t,e=pd,n=e.length,i,r="value"in Ri?Ri.value:Ri.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Po=r.slice(t,1<i?1-i:void 0)}function Lo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Wa(){return!0}function Th(){return!1}function vn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Wa:Th,this.isPropagationStopped=Th,this}return dt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Wa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Wa)},persist:function(){},isPersistent:Wa}),e}var As={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},md=vn(As),Ra=dt({},As,{view:0,detail:0}),n0=vn(Ra),Jl,ec,Fs,Ml=dt({},Ra,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Fs&&(Fs&&t.type==="mousemove"?(Jl=t.screenX-Fs.screenX,ec=t.screenY-Fs.screenY):ec=Jl=0,Fs=t),Jl)},movementY:function(t){return"movementY"in t?t.movementY:ec}}),wh=vn(Ml),i0=dt({},Ml,{dataTransfer:0}),r0=vn(i0),s0=dt({},Ra,{relatedTarget:0}),tc=vn(s0),a0=dt({},As,{animationName:0,elapsedTime:0,pseudoElement:0}),o0=vn(a0),l0=dt({},As,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),c0=vn(l0),u0=dt({},As,{data:0}),Ah=vn(u0),d0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},h0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},f0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function p0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=f0[t])?!!e[t]:!1}function gd(){return p0}var m0=dt({},Ra,{key:function(t){if(t.key){var e=d0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Lo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?h0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gd,charCode:function(t){return t.type==="keypress"?Lo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Lo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),g0=vn(m0),v0=dt({},Ml,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bh=vn(v0),_0=dt({},Ra,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gd}),x0=vn(_0),y0=dt({},As,{propertyName:0,elapsedTime:0,pseudoElement:0}),S0=vn(y0),E0=dt({},Ml,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),M0=vn(E0),T0=[9,13,27,32],vd=di&&"CompositionEvent"in window,Ks=null;di&&"documentMode"in document&&(Ks=document.documentMode);var w0=di&&"TextEvent"in window&&!Ks,Hm=di&&(!vd||Ks&&8<Ks&&11>=Ks),Ch=" ",Rh=!1;function jm(t,e){switch(t){case"keyup":return T0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var qr=!1;function A0(t,e){switch(t){case"compositionend":return Gm(e);case"keypress":return e.which!==32?null:(Rh=!0,Ch);case"textInput":return t=e.data,t===Ch&&Rh?null:t;default:return null}}function b0(t,e){if(qr)return t==="compositionend"||!vd&&jm(t,e)?(t=Bm(),Po=pd=Ri=null,qr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Hm&&e.locale!=="ko"?null:e.data;default:return null}}var C0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!C0[t.type]:e==="textarea"}function Vm(t,e,n,i){Sm(i),e=Yo(e,"onChange"),0<e.length&&(n=new md("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Zs=null,ha=null;function R0(t){tg(t,0)}function Tl(t){var e=Kr(t);if(pm(e))return t}function N0(t,e){if(t==="change")return e}var Wm=!1;if(di){var nc;if(di){var ic="oninput"in document;if(!ic){var Ph=document.createElement("div");Ph.setAttribute("oninput","return;"),ic=typeof Ph.oninput=="function"}nc=ic}else nc=!1;Wm=nc&&(!document.documentMode||9<document.documentMode)}function Lh(){Zs&&(Zs.detachEvent("onpropertychange",Xm),ha=Zs=null)}function Xm(t){if(t.propertyName==="value"&&Tl(ha)){var e=[];Vm(e,ha,t,cd(t)),wm(R0,e)}}function P0(t,e,n){t==="focusin"?(Lh(),Zs=e,ha=n,Zs.attachEvent("onpropertychange",Xm)):t==="focusout"&&Lh()}function L0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Tl(ha)}function D0(t,e){if(t==="click")return Tl(e)}function I0(t,e){if(t==="input"||t==="change")return Tl(e)}function U0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Hn=typeof Object.is=="function"?Object.is:U0;function fa(t,e){if(Hn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Zc.call(e,r)||!Hn(t[r],e[r]))return!1}return!0}function Dh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ih(t,e){var n=Dh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Dh(n)}}function qm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?qm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Ym(){for(var t=window,e=Ho();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ho(t.document)}return e}function _d(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function F0(t){var e=Ym(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&qm(n.ownerDocument.documentElement,n)){if(i!==null&&_d(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Ih(n,s);var a=Ih(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var k0=di&&"documentMode"in document&&11>=document.documentMode,Yr=null,gu=null,Qs=null,vu=!1;function Uh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;vu||Yr==null||Yr!==Ho(i)||(i=Yr,"selectionStart"in i&&_d(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Qs&&fa(Qs,i)||(Qs=i,i=Yo(gu,"onSelect"),0<i.length&&(e=new md("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Yr)))}function Xa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var $r={animationend:Xa("Animation","AnimationEnd"),animationiteration:Xa("Animation","AnimationIteration"),animationstart:Xa("Animation","AnimationStart"),transitionend:Xa("Transition","TransitionEnd")},rc={},$m={};di&&($m=document.createElement("div").style,"AnimationEvent"in window||(delete $r.animationend.animation,delete $r.animationiteration.animation,delete $r.animationstart.animation),"TransitionEvent"in window||delete $r.transitionend.transition);function wl(t){if(rc[t])return rc[t];if(!$r[t])return t;var e=$r[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in $m)return rc[t]=e[n];return t}var Km=wl("animationend"),Zm=wl("animationiteration"),Qm=wl("animationstart"),Jm=wl("transitionend"),eg=new Map,Fh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yi(t,e){eg.set(t,e),wr(e,[t])}for(var sc=0;sc<Fh.length;sc++){var ac=Fh[sc],O0=ac.toLowerCase(),z0=ac[0].toUpperCase()+ac.slice(1);Yi(O0,"on"+z0)}Yi(Km,"onAnimationEnd");Yi(Zm,"onAnimationIteration");Yi(Qm,"onAnimationStart");Yi("dblclick","onDoubleClick");Yi("focusin","onFocus");Yi("focusout","onBlur");Yi(Jm,"onTransitionEnd");fs("onMouseEnter",["mouseout","mouseover"]);fs("onMouseLeave",["mouseout","mouseover"]);fs("onPointerEnter",["pointerout","pointerover"]);fs("onPointerLeave",["pointerout","pointerover"]);wr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));wr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));wr("onBeforeInput",["compositionend","keypress","textInput","paste"]);wr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));wr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));wr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),B0=new Set("cancel close invalid load scroll toggle".split(" ").concat(qs));function kh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,O_(i,e,void 0,t),t.currentTarget=null}function tg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;kh(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;kh(r,o,c),s=l}}}if(Go)throw t=hu,Go=!1,hu=null,t}function rt(t,e){var n=e[Eu];n===void 0&&(n=e[Eu]=new Set);var i=t+"__bubble";n.has(i)||(ng(e,t,2,!1),n.add(i))}function oc(t,e,n){var i=0;e&&(i|=4),ng(n,t,i,e)}var qa="_reactListening"+Math.random().toString(36).slice(2);function pa(t){if(!t[qa]){t[qa]=!0,cm.forEach(function(n){n!=="selectionchange"&&(B0.has(n)||oc(n,!1,t),oc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[qa]||(e[qa]=!0,oc("selectionchange",!1,e))}}function ng(t,e,n,i){switch(zm(e)){case 1:var r=e0;break;case 4:r=t0;break;default:r=fd}n=r.bind(null,e,n,t),r=void 0,!du||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function lc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=cr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}wm(function(){var c=s,f=cd(n),p=[];e:{var h=eg.get(t);if(h!==void 0){var v=md,_=t;switch(t){case"keypress":if(Lo(n)===0)break e;case"keydown":case"keyup":v=g0;break;case"focusin":_="focus",v=tc;break;case"focusout":_="blur",v=tc;break;case"beforeblur":case"afterblur":v=tc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=wh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=r0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=x0;break;case Km:case Zm:case Qm:v=o0;break;case Jm:v=S0;break;case"scroll":v=n0;break;case"wheel":v=M0;break;case"copy":case"cut":case"paste":v=c0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=bh}var y=(e&4)!==0,m=!y&&t==="scroll",u=y?h!==null?h+"Capture":null:h;y=[];for(var g=c,x;g!==null;){x=g;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,u!==null&&(S=la(g,u),S!=null&&y.push(ma(g,S,x)))),m)break;g=g.return}0<y.length&&(h=new v(h,_,null,n,f),p.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",h&&n!==cu&&(_=n.relatedTarget||n.fromElement)&&(cr(_)||_[hi]))break e;if((v||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,v?(_=n.relatedTarget||n.toElement,v=c,_=_?cr(_):null,_!==null&&(m=Ar(_),_!==m||_.tag!==5&&_.tag!==6)&&(_=null)):(v=null,_=c),v!==_)){if(y=wh,S="onMouseLeave",u="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(y=bh,S="onPointerLeave",u="onPointerEnter",g="pointer"),m=v==null?h:Kr(v),x=_==null?h:Kr(_),h=new y(S,g+"leave",v,n,f),h.target=m,h.relatedTarget=x,S=null,cr(f)===c&&(y=new y(u,g+"enter",_,n,f),y.target=x,y.relatedTarget=m,S=y),m=S,v&&_)t:{for(y=v,u=_,g=0,x=y;x;x=br(x))g++;for(x=0,S=u;S;S=br(S))x++;for(;0<g-x;)y=br(y),g--;for(;0<x-g;)u=br(u),x--;for(;g--;){if(y===u||u!==null&&y===u.alternate)break t;y=br(y),u=br(u)}y=null}else y=null;v!==null&&Oh(p,h,v,y,!1),_!==null&&m!==null&&Oh(p,m,_,y,!0)}}e:{if(h=c?Kr(c):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var N=N0;else if(Nh(h))if(Wm)N=I0;else{N=L0;var C=P0}else(v=h.nodeName)&&v.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(N=D0);if(N&&(N=N(t,c))){Vm(p,N,n,f);break e}C&&C(t,h,c),t==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&ru(h,"number",h.value)}switch(C=c?Kr(c):window,t){case"focusin":(Nh(C)||C.contentEditable==="true")&&(Yr=C,gu=c,Qs=null);break;case"focusout":Qs=gu=Yr=null;break;case"mousedown":vu=!0;break;case"contextmenu":case"mouseup":case"dragend":vu=!1,Uh(p,n,f);break;case"selectionchange":if(k0)break;case"keydown":case"keyup":Uh(p,n,f)}var T;if(vd)e:{switch(t){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else qr?jm(t,n)&&(z="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(Hm&&n.locale!=="ko"&&(qr||z!=="onCompositionStart"?z==="onCompositionEnd"&&qr&&(T=Bm()):(Ri=f,pd="value"in Ri?Ri.value:Ri.textContent,qr=!0)),C=Yo(c,z),0<C.length&&(z=new Ah(z,t,null,n,f),p.push({event:z,listeners:C}),T?z.data=T:(T=Gm(n),T!==null&&(z.data=T)))),(T=w0?A0(t,n):b0(t,n))&&(c=Yo(c,"onBeforeInput"),0<c.length&&(f=new Ah("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:c}),f.data=T))}tg(p,e)})}function ma(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Yo(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=la(t,n),s!=null&&i.unshift(ma(t,s,r)),s=la(t,e),s!=null&&i.push(ma(t,s,r))),t=t.return}return i}function br(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Oh(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=la(n,s),l!=null&&a.unshift(ma(n,l,o))):r||(l=la(n,s),l!=null&&a.push(ma(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var H0=/\r\n?/g,j0=/\u0000|\uFFFD/g;function zh(t){return(typeof t=="string"?t:""+t).replace(H0,`
`).replace(j0,"")}function Ya(t,e,n){if(e=zh(e),zh(t)!==e&&n)throw Error(ie(425))}function $o(){}var _u=null,xu=null;function yu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Su=typeof setTimeout=="function"?setTimeout:void 0,G0=typeof clearTimeout=="function"?clearTimeout:void 0,Bh=typeof Promise=="function"?Promise:void 0,V0=typeof queueMicrotask=="function"?queueMicrotask:typeof Bh<"u"?function(t){return Bh.resolve(null).then(t).catch(W0)}:Su;function W0(t){setTimeout(function(){throw t})}function cc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),da(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);da(e)}function ki(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Hh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var bs=Math.random().toString(36).slice(2),Xn="__reactFiber$"+bs,ga="__reactProps$"+bs,hi="__reactContainer$"+bs,Eu="__reactEvents$"+bs,X0="__reactListeners$"+bs,q0="__reactHandles$"+bs;function cr(t){var e=t[Xn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[hi]||n[Xn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Hh(t);t!==null;){if(n=t[Xn])return n;t=Hh(t)}return e}t=n,n=t.parentNode}return null}function Na(t){return t=t[Xn]||t[hi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Kr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ie(33))}function Al(t){return t[ga]||null}var Mu=[],Zr=-1;function $i(t){return{current:t}}function at(t){0>Zr||(t.current=Mu[Zr],Mu[Zr]=null,Zr--)}function it(t,e){Zr++,Mu[Zr]=t.current,t.current=e}var Xi={},Ht=$i(Xi),en=$i(!1),_r=Xi;function ps(t,e){var n=t.type.contextTypes;if(!n)return Xi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function tn(t){return t=t.childContextTypes,t!=null}function Ko(){at(en),at(Ht)}function jh(t,e,n){if(Ht.current!==Xi)throw Error(ie(168));it(Ht,e),it(en,n)}function ig(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ie(108,P_(t)||"Unknown",r));return dt({},n,i)}function Zo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Xi,_r=Ht.current,it(Ht,t),it(en,en.current),!0}function Gh(t,e,n){var i=t.stateNode;if(!i)throw Error(ie(169));n?(t=ig(t,e,_r),i.__reactInternalMemoizedMergedChildContext=t,at(en),at(Ht),it(Ht,t)):at(en),it(en,n)}var ri=null,bl=!1,uc=!1;function rg(t){ri===null?ri=[t]:ri.push(t)}function Y0(t){bl=!0,rg(t)}function Ki(){if(!uc&&ri!==null){uc=!0;var t=0,e=Ke;try{var n=ri;for(Ke=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ri=null,bl=!1}catch(r){throw ri!==null&&(ri=ri.slice(t+1)),Rm(ud,Ki),r}finally{Ke=e,uc=!1}}return null}var Qr=[],Jr=0,Qo=null,Jo=0,yn=[],Sn=0,xr=null,ai=1,oi="";function ir(t,e){Qr[Jr++]=Jo,Qr[Jr++]=Qo,Qo=t,Jo=e}function sg(t,e,n){yn[Sn++]=ai,yn[Sn++]=oi,yn[Sn++]=xr,xr=t;var i=ai;t=oi;var r=32-On(i)-1;i&=~(1<<r),n+=1;var s=32-On(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,ai=1<<32-On(e)+r|n<<r|i,oi=s+t}else ai=1<<s|n<<r|i,oi=t}function xd(t){t.return!==null&&(ir(t,1),sg(t,1,0))}function yd(t){for(;t===Qo;)Qo=Qr[--Jr],Qr[Jr]=null,Jo=Qr[--Jr],Qr[Jr]=null;for(;t===xr;)xr=yn[--Sn],yn[Sn]=null,oi=yn[--Sn],yn[Sn]=null,ai=yn[--Sn],yn[Sn]=null}var fn=null,hn=null,ot=!1,In=null;function ag(t,e){var n=Tn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Vh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,fn=t,hn=ki(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,fn=t,hn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=xr!==null?{id:ai,overflow:oi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Tn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,fn=t,hn=null,!0):!1;default:return!1}}function Tu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function wu(t){if(ot){var e=hn;if(e){var n=e;if(!Vh(t,e)){if(Tu(t))throw Error(ie(418));e=ki(n.nextSibling);var i=fn;e&&Vh(t,e)?ag(i,n):(t.flags=t.flags&-4097|2,ot=!1,fn=t)}}else{if(Tu(t))throw Error(ie(418));t.flags=t.flags&-4097|2,ot=!1,fn=t}}}function Wh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;fn=t}function $a(t){if(t!==fn)return!1;if(!ot)return Wh(t),ot=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!yu(t.type,t.memoizedProps)),e&&(e=hn)){if(Tu(t))throw og(),Error(ie(418));for(;e;)ag(t,e),e=ki(e.nextSibling)}if(Wh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ie(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){hn=ki(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}hn=null}}else hn=fn?ki(t.stateNode.nextSibling):null;return!0}function og(){for(var t=hn;t;)t=ki(t.nextSibling)}function ms(){hn=fn=null,ot=!1}function Sd(t){In===null?In=[t]:In.push(t)}var $0=gi.ReactCurrentBatchConfig;function ks(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ie(309));var i=n.stateNode}if(!i)throw Error(ie(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ie(284));if(!n._owner)throw Error(ie(290,t))}return t}function Ka(t,e){throw t=Object.prototype.toString.call(e),Error(ie(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Xh(t){var e=t._init;return e(t._payload)}function lg(t){function e(u,g){if(t){var x=u.deletions;x===null?(u.deletions=[g],u.flags|=16):x.push(g)}}function n(u,g){if(!t)return null;for(;g!==null;)e(u,g),g=g.sibling;return null}function i(u,g){for(u=new Map;g!==null;)g.key!==null?u.set(g.key,g):u.set(g.index,g),g=g.sibling;return u}function r(u,g){return u=Hi(u,g),u.index=0,u.sibling=null,u}function s(u,g,x){return u.index=x,t?(x=u.alternate,x!==null?(x=x.index,x<g?(u.flags|=2,g):x):(u.flags|=2,g)):(u.flags|=1048576,g)}function a(u){return t&&u.alternate===null&&(u.flags|=2),u}function o(u,g,x,S){return g===null||g.tag!==6?(g=vc(x,u.mode,S),g.return=u,g):(g=r(g,x),g.return=u,g)}function l(u,g,x,S){var N=x.type;return N===Xr?f(u,g,x.props.children,S,x.key):g!==null&&(g.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===wi&&Xh(N)===g.type)?(S=r(g,x.props),S.ref=ks(u,g,x),S.return=u,S):(S=zo(x.type,x.key,x.props,null,u.mode,S),S.ref=ks(u,g,x),S.return=u,S)}function c(u,g,x,S){return g===null||g.tag!==4||g.stateNode.containerInfo!==x.containerInfo||g.stateNode.implementation!==x.implementation?(g=_c(x,u.mode,S),g.return=u,g):(g=r(g,x.children||[]),g.return=u,g)}function f(u,g,x,S,N){return g===null||g.tag!==7?(g=fr(x,u.mode,S,N),g.return=u,g):(g=r(g,x),g.return=u,g)}function p(u,g,x){if(typeof g=="string"&&g!==""||typeof g=="number")return g=vc(""+g,u.mode,x),g.return=u,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case za:return x=zo(g.type,g.key,g.props,null,u.mode,x),x.ref=ks(u,null,g),x.return=u,x;case Wr:return g=_c(g,u.mode,x),g.return=u,g;case wi:var S=g._init;return p(u,S(g._payload),x)}if(Ws(g)||Ls(g))return g=fr(g,u.mode,x,null),g.return=u,g;Ka(u,g)}return null}function h(u,g,x,S){var N=g!==null?g.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return N!==null?null:o(u,g,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case za:return x.key===N?l(u,g,x,S):null;case Wr:return x.key===N?c(u,g,x,S):null;case wi:return N=x._init,h(u,g,N(x._payload),S)}if(Ws(x)||Ls(x))return N!==null?null:f(u,g,x,S,null);Ka(u,x)}return null}function v(u,g,x,S,N){if(typeof S=="string"&&S!==""||typeof S=="number")return u=u.get(x)||null,o(g,u,""+S,N);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case za:return u=u.get(S.key===null?x:S.key)||null,l(g,u,S,N);case Wr:return u=u.get(S.key===null?x:S.key)||null,c(g,u,S,N);case wi:var C=S._init;return v(u,g,x,C(S._payload),N)}if(Ws(S)||Ls(S))return u=u.get(x)||null,f(g,u,S,N,null);Ka(g,S)}return null}function _(u,g,x,S){for(var N=null,C=null,T=g,z=g=0,E=null;T!==null&&z<x.length;z++){T.index>z?(E=T,T=null):E=T.sibling;var w=h(u,T,x[z],S);if(w===null){T===null&&(T=E);break}t&&T&&w.alternate===null&&e(u,T),g=s(w,g,z),C===null?N=w:C.sibling=w,C=w,T=E}if(z===x.length)return n(u,T),ot&&ir(u,z),N;if(T===null){for(;z<x.length;z++)T=p(u,x[z],S),T!==null&&(g=s(T,g,z),C===null?N=T:C.sibling=T,C=T);return ot&&ir(u,z),N}for(T=i(u,T);z<x.length;z++)E=v(T,u,z,x[z],S),E!==null&&(t&&E.alternate!==null&&T.delete(E.key===null?z:E.key),g=s(E,g,z),C===null?N=E:C.sibling=E,C=E);return t&&T.forEach(function(U){return e(u,U)}),ot&&ir(u,z),N}function y(u,g,x,S){var N=Ls(x);if(typeof N!="function")throw Error(ie(150));if(x=N.call(x),x==null)throw Error(ie(151));for(var C=N=null,T=g,z=g=0,E=null,w=x.next();T!==null&&!w.done;z++,w=x.next()){T.index>z?(E=T,T=null):E=T.sibling;var U=h(u,T,w.value,S);if(U===null){T===null&&(T=E);break}t&&T&&U.alternate===null&&e(u,T),g=s(U,g,z),C===null?N=U:C.sibling=U,C=U,T=E}if(w.done)return n(u,T),ot&&ir(u,z),N;if(T===null){for(;!w.done;z++,w=x.next())w=p(u,w.value,S),w!==null&&(g=s(w,g,z),C===null?N=w:C.sibling=w,C=w);return ot&&ir(u,z),N}for(T=i(u,T);!w.done;z++,w=x.next())w=v(T,u,z,w.value,S),w!==null&&(t&&w.alternate!==null&&T.delete(w.key===null?z:w.key),g=s(w,g,z),C===null?N=w:C.sibling=w,C=w);return t&&T.forEach(function(L){return e(u,L)}),ot&&ir(u,z),N}function m(u,g,x,S){if(typeof x=="object"&&x!==null&&x.type===Xr&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case za:e:{for(var N=x.key,C=g;C!==null;){if(C.key===N){if(N=x.type,N===Xr){if(C.tag===7){n(u,C.sibling),g=r(C,x.props.children),g.return=u,u=g;break e}}else if(C.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===wi&&Xh(N)===C.type){n(u,C.sibling),g=r(C,x.props),g.ref=ks(u,C,x),g.return=u,u=g;break e}n(u,C);break}else e(u,C);C=C.sibling}x.type===Xr?(g=fr(x.props.children,u.mode,S,x.key),g.return=u,u=g):(S=zo(x.type,x.key,x.props,null,u.mode,S),S.ref=ks(u,g,x),S.return=u,u=S)}return a(u);case Wr:e:{for(C=x.key;g!==null;){if(g.key===C)if(g.tag===4&&g.stateNode.containerInfo===x.containerInfo&&g.stateNode.implementation===x.implementation){n(u,g.sibling),g=r(g,x.children||[]),g.return=u,u=g;break e}else{n(u,g);break}else e(u,g);g=g.sibling}g=_c(x,u.mode,S),g.return=u,u=g}return a(u);case wi:return C=x._init,m(u,g,C(x._payload),S)}if(Ws(x))return _(u,g,x,S);if(Ls(x))return y(u,g,x,S);Ka(u,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,g!==null&&g.tag===6?(n(u,g.sibling),g=r(g,x),g.return=u,u=g):(n(u,g),g=vc(x,u.mode,S),g.return=u,u=g),a(u)):n(u,g)}return m}var gs=lg(!0),cg=lg(!1),el=$i(null),tl=null,es=null,Ed=null;function Md(){Ed=es=tl=null}function Td(t){var e=el.current;at(el),t._currentValue=e}function Au(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function cs(t,e){tl=t,Ed=es=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Jt=!0),t.firstContext=null)}function An(t){var e=t._currentValue;if(Ed!==t)if(t={context:t,memoizedValue:e,next:null},es===null){if(tl===null)throw Error(ie(308));es=t,tl.dependencies={lanes:0,firstContext:t}}else es=es.next=t;return e}var ur=null;function wd(t){ur===null?ur=[t]:ur.push(t)}function ug(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,wd(e)):(n.next=r.next,r.next=n),e.interleaved=n,fi(t,i)}function fi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ai=!1;function Ad(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function dg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ci(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Oi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ye&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,fi(t,n)}return r=i.interleaved,r===null?(e.next=e,wd(i)):(e.next=r.next,r.next=e),i.interleaved=e,fi(t,n)}function Do(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,dd(t,n)}}function qh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function nl(t,e,n,i){var r=t.updateQueue;Ai=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var f=t.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==a&&(o===null?f.firstBaseUpdate=c:o.next=c,f.lastBaseUpdate=l))}if(s!==null){var p=r.baseState;a=0,f=c=l=null,o=s;do{var h=o.lane,v=o.eventTime;if((i&h)===h){f!==null&&(f=f.next={eventTime:v,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var _=t,y=o;switch(h=e,v=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){p=_.call(v,p,h);break e}p=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,h=typeof _=="function"?_.call(v,p,h):_,h==null)break e;p=dt({},p,h);break e;case 2:Ai=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[o]:h.push(o))}else v={eventTime:v,lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(c=f=v,l=p):f=f.next=v,a|=h;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;h=o,o=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(f===null&&(l=p),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Sr|=a,t.lanes=a,t.memoizedState=p}}function Yh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ie(191,r));r.call(i)}}}var Pa={},Yn=$i(Pa),va=$i(Pa),_a=$i(Pa);function dr(t){if(t===Pa)throw Error(ie(174));return t}function bd(t,e){switch(it(_a,e),it(va,t),it(Yn,Pa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:au(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=au(e,t)}at(Yn),it(Yn,e)}function vs(){at(Yn),at(va),at(_a)}function hg(t){dr(_a.current);var e=dr(Yn.current),n=au(e,t.type);e!==n&&(it(va,t),it(Yn,n))}function Cd(t){va.current===t&&(at(Yn),at(va))}var ct=$i(0);function il(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var dc=[];function Rd(){for(var t=0;t<dc.length;t++)dc[t]._workInProgressVersionPrimary=null;dc.length=0}var Io=gi.ReactCurrentDispatcher,hc=gi.ReactCurrentBatchConfig,yr=0,ut=null,yt=null,bt=null,rl=!1,Js=!1,xa=0,K0=0;function Ft(){throw Error(ie(321))}function Nd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Hn(t[n],e[n]))return!1;return!0}function Pd(t,e,n,i,r,s){if(yr=s,ut=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Io.current=t===null||t.memoizedState===null?ex:tx,t=n(i,r),Js){s=0;do{if(Js=!1,xa=0,25<=s)throw Error(ie(301));s+=1,bt=yt=null,e.updateQueue=null,Io.current=nx,t=n(i,r)}while(Js)}if(Io.current=sl,e=yt!==null&&yt.next!==null,yr=0,bt=yt=ut=null,rl=!1,e)throw Error(ie(300));return t}function Ld(){var t=xa!==0;return xa=0,t}function Vn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return bt===null?ut.memoizedState=bt=t:bt=bt.next=t,bt}function bn(){if(yt===null){var t=ut.alternate;t=t!==null?t.memoizedState:null}else t=yt.next;var e=bt===null?ut.memoizedState:bt.next;if(e!==null)bt=e,yt=t;else{if(t===null)throw Error(ie(310));yt=t,t={memoizedState:yt.memoizedState,baseState:yt.baseState,baseQueue:yt.baseQueue,queue:yt.queue,next:null},bt===null?ut.memoizedState=bt=t:bt=bt.next=t}return bt}function ya(t,e){return typeof e=="function"?e(t):e}function fc(t){var e=bn(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=yt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var f=c.lane;if((yr&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var p={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=p,a=i):l=l.next=p,ut.lanes|=f,Sr|=f}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,Hn(i,e.memoizedState)||(Jt=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,ut.lanes|=s,Sr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function pc(t){var e=bn(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);Hn(s,e.memoizedState)||(Jt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function fg(){}function pg(t,e){var n=ut,i=bn(),r=e(),s=!Hn(i.memoizedState,r);if(s&&(i.memoizedState=r,Jt=!0),i=i.queue,Dd(vg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||bt!==null&&bt.memoizedState.tag&1){if(n.flags|=2048,Sa(9,gg.bind(null,n,i,r,e),void 0,null),Ct===null)throw Error(ie(349));yr&30||mg(n,e,r)}return r}function mg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ut.updateQueue,e===null?(e={lastEffect:null,stores:null},ut.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function gg(t,e,n,i){e.value=n,e.getSnapshot=i,_g(e)&&xg(t)}function vg(t,e,n){return n(function(){_g(e)&&xg(t)})}function _g(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Hn(t,n)}catch{return!0}}function xg(t){var e=fi(t,1);e!==null&&zn(e,t,1,-1)}function $h(t){var e=Vn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:t},e.queue=t,t=t.dispatch=J0.bind(null,ut,t),[e.memoizedState,t]}function Sa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ut.updateQueue,e===null?(e={lastEffect:null,stores:null},ut.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function yg(){return bn().memoizedState}function Uo(t,e,n,i){var r=Vn();ut.flags|=t,r.memoizedState=Sa(1|e,n,void 0,i===void 0?null:i)}function Cl(t,e,n,i){var r=bn();i=i===void 0?null:i;var s=void 0;if(yt!==null){var a=yt.memoizedState;if(s=a.destroy,i!==null&&Nd(i,a.deps)){r.memoizedState=Sa(e,n,s,i);return}}ut.flags|=t,r.memoizedState=Sa(1|e,n,s,i)}function Kh(t,e){return Uo(8390656,8,t,e)}function Dd(t,e){return Cl(2048,8,t,e)}function Sg(t,e){return Cl(4,2,t,e)}function Eg(t,e){return Cl(4,4,t,e)}function Mg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Tg(t,e,n){return n=n!=null?n.concat([t]):null,Cl(4,4,Mg.bind(null,e,t),n)}function Id(){}function wg(t,e){var n=bn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Nd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Ag(t,e){var n=bn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Nd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function bg(t,e,n){return yr&21?(Hn(n,e)||(n=Lm(),ut.lanes|=n,Sr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Jt=!0),t.memoizedState=n)}function Z0(t,e){var n=Ke;Ke=n!==0&&4>n?n:4,t(!0);var i=hc.transition;hc.transition={};try{t(!1),e()}finally{Ke=n,hc.transition=i}}function Cg(){return bn().memoizedState}function Q0(t,e,n){var i=Bi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Rg(t))Ng(e,n);else if(n=ug(t,e,n,i),n!==null){var r=$t();zn(n,t,i,r),Pg(n,e,i)}}function J0(t,e,n){var i=Bi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Rg(t))Ng(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,Hn(o,a)){var l=e.interleaved;l===null?(r.next=r,wd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=ug(t,e,r,i),n!==null&&(r=$t(),zn(n,t,i,r),Pg(n,e,i))}}function Rg(t){var e=t.alternate;return t===ut||e!==null&&e===ut}function Ng(t,e){Js=rl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Pg(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,dd(t,n)}}var sl={readContext:An,useCallback:Ft,useContext:Ft,useEffect:Ft,useImperativeHandle:Ft,useInsertionEffect:Ft,useLayoutEffect:Ft,useMemo:Ft,useReducer:Ft,useRef:Ft,useState:Ft,useDebugValue:Ft,useDeferredValue:Ft,useTransition:Ft,useMutableSource:Ft,useSyncExternalStore:Ft,useId:Ft,unstable_isNewReconciler:!1},ex={readContext:An,useCallback:function(t,e){return Vn().memoizedState=[t,e===void 0?null:e],t},useContext:An,useEffect:Kh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Uo(4194308,4,Mg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Uo(4194308,4,t,e)},useInsertionEffect:function(t,e){return Uo(4,2,t,e)},useMemo:function(t,e){var n=Vn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Vn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Q0.bind(null,ut,t),[i.memoizedState,t]},useRef:function(t){var e=Vn();return t={current:t},e.memoizedState=t},useState:$h,useDebugValue:Id,useDeferredValue:function(t){return Vn().memoizedState=t},useTransition:function(){var t=$h(!1),e=t[0];return t=Z0.bind(null,t[1]),Vn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ut,r=Vn();if(ot){if(n===void 0)throw Error(ie(407));n=n()}else{if(n=e(),Ct===null)throw Error(ie(349));yr&30||mg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Kh(vg.bind(null,i,s,t),[t]),i.flags|=2048,Sa(9,gg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Vn(),e=Ct.identifierPrefix;if(ot){var n=oi,i=ai;n=(i&~(1<<32-On(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=xa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=K0++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},tx={readContext:An,useCallback:wg,useContext:An,useEffect:Dd,useImperativeHandle:Tg,useInsertionEffect:Sg,useLayoutEffect:Eg,useMemo:Ag,useReducer:fc,useRef:yg,useState:function(){return fc(ya)},useDebugValue:Id,useDeferredValue:function(t){var e=bn();return bg(e,yt.memoizedState,t)},useTransition:function(){var t=fc(ya)[0],e=bn().memoizedState;return[t,e]},useMutableSource:fg,useSyncExternalStore:pg,useId:Cg,unstable_isNewReconciler:!1},nx={readContext:An,useCallback:wg,useContext:An,useEffect:Dd,useImperativeHandle:Tg,useInsertionEffect:Sg,useLayoutEffect:Eg,useMemo:Ag,useReducer:pc,useRef:yg,useState:function(){return pc(ya)},useDebugValue:Id,useDeferredValue:function(t){var e=bn();return yt===null?e.memoizedState=t:bg(e,yt.memoizedState,t)},useTransition:function(){var t=pc(ya)[0],e=bn().memoizedState;return[t,e]},useMutableSource:fg,useSyncExternalStore:pg,useId:Cg,unstable_isNewReconciler:!1};function Ln(t,e){if(t&&t.defaultProps){e=dt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function bu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:dt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Rl={isMounted:function(t){return(t=t._reactInternals)?Ar(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=$t(),r=Bi(t),s=ci(i,r);s.payload=e,n!=null&&(s.callback=n),e=Oi(t,s,r),e!==null&&(zn(e,t,r,i),Do(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=$t(),r=Bi(t),s=ci(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Oi(t,s,r),e!==null&&(zn(e,t,r,i),Do(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=$t(),i=Bi(t),r=ci(n,i);r.tag=2,e!=null&&(r.callback=e),e=Oi(t,r,i),e!==null&&(zn(e,t,i,n),Do(e,t,i))}};function Zh(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!fa(n,i)||!fa(r,s):!0}function Lg(t,e,n){var i=!1,r=Xi,s=e.contextType;return typeof s=="object"&&s!==null?s=An(s):(r=tn(e)?_r:Ht.current,i=e.contextTypes,s=(i=i!=null)?ps(t,r):Xi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Rl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Qh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Rl.enqueueReplaceState(e,e.state,null)}function Cu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Ad(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=An(s):(s=tn(e)?_r:Ht.current,r.context=ps(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(bu(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Rl.enqueueReplaceState(r,r.state,null),nl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function _s(t,e){try{var n="",i=e;do n+=N_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function mc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ru(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var ix=typeof WeakMap=="function"?WeakMap:Map;function Dg(t,e,n){n=ci(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){ol||(ol=!0,zu=i),Ru(t,e)},n}function Ig(t,e,n){n=ci(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Ru(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ru(t,e),typeof i!="function"&&(zi===null?zi=new Set([this]):zi.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Jh(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new ix;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=vx.bind(null,t,e,n),e.then(t,t))}function ef(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function tf(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ci(-1,1),e.tag=2,Oi(n,e,1))),n.lanes|=1),t)}var rx=gi.ReactCurrentOwner,Jt=!1;function Xt(t,e,n,i){e.child=t===null?cg(e,null,n,i):gs(e,t.child,n,i)}function nf(t,e,n,i,r){n=n.render;var s=e.ref;return cs(e,r),i=Pd(t,e,n,i,s,r),n=Ld(),t!==null&&!Jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,pi(t,e,r)):(ot&&n&&xd(e),e.flags|=1,Xt(t,e,i,r),e.child)}function rf(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!jd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Ug(t,e,s,i,r)):(t=zo(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:fa,n(a,i)&&t.ref===e.ref)return pi(t,e,r)}return e.flags|=1,t=Hi(s,i),t.ref=e.ref,t.return=e,e.child=t}function Ug(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(fa(s,i)&&t.ref===e.ref)if(Jt=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Jt=!0);else return e.lanes=t.lanes,pi(t,e,r)}return Nu(t,e,n,i,r)}function Fg(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},it(ns,cn),cn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,it(ns,cn),cn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,it(ns,cn),cn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,it(ns,cn),cn|=i;return Xt(t,e,r,n),e.child}function kg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Nu(t,e,n,i,r){var s=tn(n)?_r:Ht.current;return s=ps(e,s),cs(e,r),n=Pd(t,e,n,i,s,r),i=Ld(),t!==null&&!Jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,pi(t,e,r)):(ot&&i&&xd(e),e.flags|=1,Xt(t,e,n,r),e.child)}function sf(t,e,n,i,r){if(tn(n)){var s=!0;Zo(e)}else s=!1;if(cs(e,r),e.stateNode===null)Fo(t,e),Lg(e,n,i),Cu(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=An(c):(c=tn(n)?_r:Ht.current,c=ps(e,c));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&Qh(e,a,i,c),Ai=!1;var h=e.memoizedState;a.state=h,nl(e,i,a,r),l=e.memoizedState,o!==i||h!==l||en.current||Ai?(typeof f=="function"&&(bu(e,n,f,i),l=e.memoizedState),(o=Ai||Zh(e,n,o,i,h,l,c))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,dg(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:Ln(e.type,o),a.props=c,p=e.pendingProps,h=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=An(l):(l=tn(n)?_r:Ht.current,l=ps(e,l));var v=n.getDerivedStateFromProps;(f=typeof v=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==p||h!==l)&&Qh(e,a,i,l),Ai=!1,h=e.memoizedState,a.state=h,nl(e,i,a,r);var _=e.memoizedState;o!==p||h!==_||en.current||Ai?(typeof v=="function"&&(bu(e,n,v,i),_=e.memoizedState),(c=Ai||Zh(e,n,c,i,h,_,l)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,_,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,_,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),a.props=i,a.state=_,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Pu(t,e,n,i,s,r)}function Pu(t,e,n,i,r,s){kg(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Gh(e,n,!1),pi(t,e,s);i=e.stateNode,rx.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=gs(e,t.child,null,s),e.child=gs(e,null,o,s)):Xt(t,e,o,s),e.memoizedState=i.state,r&&Gh(e,n,!0),e.child}function Og(t){var e=t.stateNode;e.pendingContext?jh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&jh(t,e.context,!1),bd(t,e.containerInfo)}function af(t,e,n,i,r){return ms(),Sd(r),e.flags|=256,Xt(t,e,n,i),e.child}var Lu={dehydrated:null,treeContext:null,retryLane:0};function Du(t){return{baseLanes:t,cachePool:null,transitions:null}}function zg(t,e,n){var i=e.pendingProps,r=ct.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),it(ct,r&1),t===null)return wu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Ll(a,i,0,null),t=fr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Du(n),e.memoizedState=Lu,t):Ud(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return sx(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Hi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=Hi(o,s):(s=fr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?Du(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Lu,i}return s=t.child,t=s.sibling,i=Hi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Ud(t,e){return e=Ll({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Za(t,e,n,i){return i!==null&&Sd(i),gs(e,t.child,null,n),t=Ud(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function sx(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=mc(Error(ie(422))),Za(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Ll({mode:"visible",children:i.children},r,0,null),s=fr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&gs(e,t.child,null,a),e.child.memoizedState=Du(a),e.memoizedState=Lu,s);if(!(e.mode&1))return Za(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ie(419)),i=mc(s,i,void 0),Za(t,e,a,i)}if(o=(a&t.childLanes)!==0,Jt||o){if(i=Ct,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,fi(t,r),zn(i,t,r,-1))}return Hd(),i=mc(Error(ie(421))),Za(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=_x.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,hn=ki(r.nextSibling),fn=e,ot=!0,In=null,t!==null&&(yn[Sn++]=ai,yn[Sn++]=oi,yn[Sn++]=xr,ai=t.id,oi=t.overflow,xr=e),e=Ud(e,i.children),e.flags|=4096,e)}function of(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Au(t.return,e,n)}function gc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Bg(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Xt(t,e,i.children,n),i=ct.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&of(t,n,e);else if(t.tag===19)of(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(it(ct,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&il(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),gc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&il(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}gc(e,!0,n,null,s);break;case"together":gc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Fo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function pi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Sr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ie(153));if(e.child!==null){for(t=e.child,n=Hi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Hi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function ax(t,e,n){switch(e.tag){case 3:Og(e),ms();break;case 5:hg(e);break;case 1:tn(e.type)&&Zo(e);break;case 4:bd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;it(el,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(it(ct,ct.current&1),e.flags|=128,null):n&e.child.childLanes?zg(t,e,n):(it(ct,ct.current&1),t=pi(t,e,n),t!==null?t.sibling:null);it(ct,ct.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Bg(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),it(ct,ct.current),i)break;return null;case 22:case 23:return e.lanes=0,Fg(t,e,n)}return pi(t,e,n)}var Hg,Iu,jg,Gg;Hg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Iu=function(){};jg=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,dr(Yn.current);var s=null;switch(n){case"input":r=nu(t,r),i=nu(t,i),s=[];break;case"select":r=dt({},r,{value:void 0}),i=dt({},i,{value:void 0}),s=[];break;case"textarea":r=su(t,r),i=su(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=$o)}ou(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(aa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(aa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&rt("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Gg=function(t,e,n,i){n!==i&&(e.flags|=4)};function Os(t,e){if(!ot)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function kt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function ox(t,e,n){var i=e.pendingProps;switch(yd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return kt(e),null;case 1:return tn(e.type)&&Ko(),kt(e),null;case 3:return i=e.stateNode,vs(),at(en),at(Ht),Rd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&($a(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,In!==null&&(ju(In),In=null))),Iu(t,e),kt(e),null;case 5:Cd(e);var r=dr(_a.current);if(n=e.type,t!==null&&e.stateNode!=null)jg(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ie(166));return kt(e),null}if(t=dr(Yn.current),$a(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Xn]=e,i[ga]=s,t=(e.mode&1)!==0,n){case"dialog":rt("cancel",i),rt("close",i);break;case"iframe":case"object":case"embed":rt("load",i);break;case"video":case"audio":for(r=0;r<qs.length;r++)rt(qs[r],i);break;case"source":rt("error",i);break;case"img":case"image":case"link":rt("error",i),rt("load",i);break;case"details":rt("toggle",i);break;case"input":mh(i,s),rt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},rt("invalid",i);break;case"textarea":vh(i,s),rt("invalid",i)}ou(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&Ya(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&Ya(i.textContent,o,t),r=["children",""+o]):aa.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&rt("scroll",i)}switch(n){case"input":Ba(i),gh(i,s,!0);break;case"textarea":Ba(i),_h(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=$o)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=vm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[Xn]=e,t[ga]=i,Hg(t,e,!1,!1),e.stateNode=t;e:{switch(a=lu(n,i),n){case"dialog":rt("cancel",t),rt("close",t),r=i;break;case"iframe":case"object":case"embed":rt("load",t),r=i;break;case"video":case"audio":for(r=0;r<qs.length;r++)rt(qs[r],t);r=i;break;case"source":rt("error",t),r=i;break;case"img":case"image":case"link":rt("error",t),rt("load",t),r=i;break;case"details":rt("toggle",t),r=i;break;case"input":mh(t,i),r=nu(t,i),rt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=dt({},i,{value:void 0}),rt("invalid",t);break;case"textarea":vh(t,i),r=su(t,i),rt("invalid",t);break;default:r=i}ou(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?ym(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&_m(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&oa(t,l):typeof l=="number"&&oa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(aa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&rt("scroll",t):l!=null&&sd(t,s,l,a))}switch(n){case"input":Ba(t),gh(t,i,!1);break;case"textarea":Ba(t),_h(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Wi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ss(t,!!i.multiple,s,!1):i.defaultValue!=null&&ss(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=$o)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return kt(e),null;case 6:if(t&&e.stateNode!=null)Gg(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ie(166));if(n=dr(_a.current),dr(Yn.current),$a(e)){if(i=e.stateNode,n=e.memoizedProps,i[Xn]=e,(s=i.nodeValue!==n)&&(t=fn,t!==null))switch(t.tag){case 3:Ya(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ya(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Xn]=e,e.stateNode=i}return kt(e),null;case 13:if(at(ct),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ot&&hn!==null&&e.mode&1&&!(e.flags&128))og(),ms(),e.flags|=98560,s=!1;else if(s=$a(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ie(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ie(317));s[Xn]=e}else ms(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;kt(e),s=!1}else In!==null&&(ju(In),In=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ct.current&1?St===0&&(St=3):Hd())),e.updateQueue!==null&&(e.flags|=4),kt(e),null);case 4:return vs(),Iu(t,e),t===null&&pa(e.stateNode.containerInfo),kt(e),null;case 10:return Td(e.type._context),kt(e),null;case 17:return tn(e.type)&&Ko(),kt(e),null;case 19:if(at(ct),s=e.memoizedState,s===null)return kt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Os(s,!1);else{if(St!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=il(t),a!==null){for(e.flags|=128,Os(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return it(ct,ct.current&1|2),e.child}t=t.sibling}s.tail!==null&&gt()>xs&&(e.flags|=128,i=!0,Os(s,!1),e.lanes=4194304)}else{if(!i)if(t=il(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Os(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!ot)return kt(e),null}else 2*gt()-s.renderingStartTime>xs&&n!==1073741824&&(e.flags|=128,i=!0,Os(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=gt(),e.sibling=null,n=ct.current,it(ct,i?n&1|2:n&1),e):(kt(e),null);case 22:case 23:return Bd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?cn&1073741824&&(kt(e),e.subtreeFlags&6&&(e.flags|=8192)):kt(e),null;case 24:return null;case 25:return null}throw Error(ie(156,e.tag))}function lx(t,e){switch(yd(e),e.tag){case 1:return tn(e.type)&&Ko(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return vs(),at(en),at(Ht),Rd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Cd(e),null;case 13:if(at(ct),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ie(340));ms()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return at(ct),null;case 4:return vs(),null;case 10:return Td(e.type._context),null;case 22:case 23:return Bd(),null;case 24:return null;default:return null}}var Qa=!1,Bt=!1,cx=typeof WeakSet=="function"?WeakSet:Set,ve=null;function ts(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){pt(t,e,i)}else n.current=null}function Uu(t,e,n){try{n()}catch(i){pt(t,e,i)}}var lf=!1;function ux(t,e){if(_u=Xo,t=Ym(),_d(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,f=0,p=t,h=null;t:for(;;){for(var v;p!==n||r!==0&&p.nodeType!==3||(o=a+r),p!==s||i!==0&&p.nodeType!==3||(l=a+i),p.nodeType===3&&(a+=p.nodeValue.length),(v=p.firstChild)!==null;)h=p,p=v;for(;;){if(p===t)break t;if(h===n&&++c===r&&(o=a),h===s&&++f===i&&(l=a),(v=p.nextSibling)!==null)break;p=h,h=p.parentNode}p=v}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(xu={focusedElem:t,selectionRange:n},Xo=!1,ve=e;ve!==null;)if(e=ve,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ve=t;else for(;ve!==null;){e=ve;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,m=_.memoizedState,u=e.stateNode,g=u.getSnapshotBeforeUpdate(e.elementType===e.type?y:Ln(e.type,y),m);u.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ie(163))}}catch(S){pt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,ve=t;break}ve=e.return}return _=lf,lf=!1,_}function ea(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Uu(e,n,s)}r=r.next}while(r!==i)}}function Nl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Fu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Vg(t){var e=t.alternate;e!==null&&(t.alternate=null,Vg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Xn],delete e[ga],delete e[Eu],delete e[X0],delete e[q0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Wg(t){return t.tag===5||t.tag===3||t.tag===4}function cf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Wg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ku(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=$o));else if(i!==4&&(t=t.child,t!==null))for(ku(t,e,n),t=t.sibling;t!==null;)ku(t,e,n),t=t.sibling}function Ou(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Ou(t,e,n),t=t.sibling;t!==null;)Ou(t,e,n),t=t.sibling}var Nt=null,Dn=!1;function vi(t,e,n){for(n=n.child;n!==null;)Xg(t,e,n),n=n.sibling}function Xg(t,e,n){if(qn&&typeof qn.onCommitFiberUnmount=="function")try{qn.onCommitFiberUnmount(El,n)}catch{}switch(n.tag){case 5:Bt||ts(n,e);case 6:var i=Nt,r=Dn;Nt=null,vi(t,e,n),Nt=i,Dn=r,Nt!==null&&(Dn?(t=Nt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Nt.removeChild(n.stateNode));break;case 18:Nt!==null&&(Dn?(t=Nt,n=n.stateNode,t.nodeType===8?cc(t.parentNode,n):t.nodeType===1&&cc(t,n),da(t)):cc(Nt,n.stateNode));break;case 4:i=Nt,r=Dn,Nt=n.stateNode.containerInfo,Dn=!0,vi(t,e,n),Nt=i,Dn=r;break;case 0:case 11:case 14:case 15:if(!Bt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Uu(n,e,a),r=r.next}while(r!==i)}vi(t,e,n);break;case 1:if(!Bt&&(ts(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){pt(n,e,o)}vi(t,e,n);break;case 21:vi(t,e,n);break;case 22:n.mode&1?(Bt=(i=Bt)||n.memoizedState!==null,vi(t,e,n),Bt=i):vi(t,e,n);break;default:vi(t,e,n)}}function uf(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new cx),e.forEach(function(i){var r=xx.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Cn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Nt=o.stateNode,Dn=!1;break e;case 3:Nt=o.stateNode.containerInfo,Dn=!0;break e;case 4:Nt=o.stateNode.containerInfo,Dn=!0;break e}o=o.return}if(Nt===null)throw Error(ie(160));Xg(s,a,r),Nt=null,Dn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){pt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)qg(e,t),e=e.sibling}function qg(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Cn(e,t),Gn(t),i&4){try{ea(3,t,t.return),Nl(3,t)}catch(y){pt(t,t.return,y)}try{ea(5,t,t.return)}catch(y){pt(t,t.return,y)}}break;case 1:Cn(e,t),Gn(t),i&512&&n!==null&&ts(n,n.return);break;case 5:if(Cn(e,t),Gn(t),i&512&&n!==null&&ts(n,n.return),t.flags&32){var r=t.stateNode;try{oa(r,"")}catch(y){pt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&mm(r,s),lu(o,a);var c=lu(o,s);for(a=0;a<l.length;a+=2){var f=l[a],p=l[a+1];f==="style"?ym(r,p):f==="dangerouslySetInnerHTML"?_m(r,p):f==="children"?oa(r,p):sd(r,f,p,c)}switch(o){case"input":iu(r,s);break;case"textarea":gm(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?ss(r,!!s.multiple,v,!1):h!==!!s.multiple&&(s.defaultValue!=null?ss(r,!!s.multiple,s.defaultValue,!0):ss(r,!!s.multiple,s.multiple?[]:"",!1))}r[ga]=s}catch(y){pt(t,t.return,y)}}break;case 6:if(Cn(e,t),Gn(t),i&4){if(t.stateNode===null)throw Error(ie(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){pt(t,t.return,y)}}break;case 3:if(Cn(e,t),Gn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{da(e.containerInfo)}catch(y){pt(t,t.return,y)}break;case 4:Cn(e,t),Gn(t);break;case 13:Cn(e,t),Gn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Od=gt())),i&4&&uf(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Bt=(c=Bt)||f,Cn(e,t),Bt=c):Cn(e,t),Gn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(ve=t,f=t.child;f!==null;){for(p=ve=f;ve!==null;){switch(h=ve,v=h.child,h.tag){case 0:case 11:case 14:case 15:ea(4,h,h.return);break;case 1:ts(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){pt(i,n,y)}}break;case 5:ts(h,h.return);break;case 22:if(h.memoizedState!==null){hf(p);continue}}v!==null?(v.return=h,ve=v):hf(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{r=p.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=p.stateNode,l=p.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=xm("display",a))}catch(y){pt(t,t.return,y)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(y){pt(t,t.return,y)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Cn(e,t),Gn(t),i&4&&uf(t);break;case 21:break;default:Cn(e,t),Gn(t)}}function Gn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Wg(n)){var i=n;break e}n=n.return}throw Error(ie(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(oa(r,""),i.flags&=-33);var s=cf(t);Ou(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=cf(t);ku(t,o,a);break;default:throw Error(ie(161))}}catch(l){pt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function dx(t,e,n){ve=t,Yg(t)}function Yg(t,e,n){for(var i=(t.mode&1)!==0;ve!==null;){var r=ve,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||Qa;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||Bt;o=Qa;var c=Bt;if(Qa=a,(Bt=l)&&!c)for(ve=r;ve!==null;)a=ve,l=a.child,a.tag===22&&a.memoizedState!==null?ff(r):l!==null?(l.return=a,ve=l):ff(r);for(;s!==null;)ve=s,Yg(s),s=s.sibling;ve=r,Qa=o,Bt=c}df(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ve=s):df(t)}}function df(t){for(;ve!==null;){var e=ve;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Bt||Nl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Bt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Ln(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Yh(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Yh(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&da(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ie(163))}Bt||e.flags&512&&Fu(e)}catch(h){pt(e,e.return,h)}}if(e===t){ve=null;break}if(n=e.sibling,n!==null){n.return=e.return,ve=n;break}ve=e.return}}function hf(t){for(;ve!==null;){var e=ve;if(e===t){ve=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ve=n;break}ve=e.return}}function ff(t){for(;ve!==null;){var e=ve;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Nl(4,e)}catch(l){pt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){pt(e,r,l)}}var s=e.return;try{Fu(e)}catch(l){pt(e,s,l)}break;case 5:var a=e.return;try{Fu(e)}catch(l){pt(e,a,l)}}}catch(l){pt(e,e.return,l)}if(e===t){ve=null;break}var o=e.sibling;if(o!==null){o.return=e.return,ve=o;break}ve=e.return}}var hx=Math.ceil,al=gi.ReactCurrentDispatcher,Fd=gi.ReactCurrentOwner,wn=gi.ReactCurrentBatchConfig,Ye=0,Ct=null,xt=null,Dt=0,cn=0,ns=$i(0),St=0,Ea=null,Sr=0,Pl=0,kd=0,ta=null,Qt=null,Od=0,xs=1/0,ii=null,ol=!1,zu=null,zi=null,Ja=!1,Ni=null,ll=0,na=0,Bu=null,ko=-1,Oo=0;function $t(){return Ye&6?gt():ko!==-1?ko:ko=gt()}function Bi(t){return t.mode&1?Ye&2&&Dt!==0?Dt&-Dt:$0.transition!==null?(Oo===0&&(Oo=Lm()),Oo):(t=Ke,t!==0||(t=window.event,t=t===void 0?16:zm(t.type)),t):1}function zn(t,e,n,i){if(50<na)throw na=0,Bu=null,Error(ie(185));Ca(t,n,i),(!(Ye&2)||t!==Ct)&&(t===Ct&&(!(Ye&2)&&(Pl|=n),St===4&&Ci(t,Dt)),nn(t,i),n===1&&Ye===0&&!(e.mode&1)&&(xs=gt()+500,bl&&Ki()))}function nn(t,e){var n=t.callbackNode;$_(t,e);var i=Wo(t,t===Ct?Dt:0);if(i===0)n!==null&&Sh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Sh(n),e===1)t.tag===0?Y0(pf.bind(null,t)):rg(pf.bind(null,t)),V0(function(){!(Ye&6)&&Ki()}),n=null;else{switch(Dm(i)){case 1:n=ud;break;case 4:n=Nm;break;case 16:n=Vo;break;case 536870912:n=Pm;break;default:n=Vo}n=nv(n,$g.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function $g(t,e){if(ko=-1,Oo=0,Ye&6)throw Error(ie(327));var n=t.callbackNode;if(us()&&t.callbackNode!==n)return null;var i=Wo(t,t===Ct?Dt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=cl(t,i);else{e=i;var r=Ye;Ye|=2;var s=Zg();(Ct!==t||Dt!==e)&&(ii=null,xs=gt()+500,hr(t,e));do try{mx();break}catch(o){Kg(t,o)}while(!0);Md(),al.current=s,Ye=r,xt!==null?e=0:(Ct=null,Dt=0,e=St)}if(e!==0){if(e===2&&(r=fu(t),r!==0&&(i=r,e=Hu(t,r))),e===1)throw n=Ea,hr(t,0),Ci(t,i),nn(t,gt()),n;if(e===6)Ci(t,i);else{if(r=t.current.alternate,!(i&30)&&!fx(r)&&(e=cl(t,i),e===2&&(s=fu(t),s!==0&&(i=s,e=Hu(t,s))),e===1))throw n=Ea,hr(t,0),Ci(t,i),nn(t,gt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ie(345));case 2:rr(t,Qt,ii);break;case 3:if(Ci(t,i),(i&130023424)===i&&(e=Od+500-gt(),10<e)){if(Wo(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){$t(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Su(rr.bind(null,t,Qt,ii),e);break}rr(t,Qt,ii);break;case 4:if(Ci(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-On(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=gt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*hx(i/1960))-i,10<i){t.timeoutHandle=Su(rr.bind(null,t,Qt,ii),i);break}rr(t,Qt,ii);break;case 5:rr(t,Qt,ii);break;default:throw Error(ie(329))}}}return nn(t,gt()),t.callbackNode===n?$g.bind(null,t):null}function Hu(t,e){var n=ta;return t.current.memoizedState.isDehydrated&&(hr(t,e).flags|=256),t=cl(t,e),t!==2&&(e=Qt,Qt=n,e!==null&&ju(e)),t}function ju(t){Qt===null?Qt=t:Qt.push.apply(Qt,t)}function fx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Hn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ci(t,e){for(e&=~kd,e&=~Pl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-On(e),i=1<<n;t[n]=-1,e&=~i}}function pf(t){if(Ye&6)throw Error(ie(327));us();var e=Wo(t,0);if(!(e&1))return nn(t,gt()),null;var n=cl(t,e);if(t.tag!==0&&n===2){var i=fu(t);i!==0&&(e=i,n=Hu(t,i))}if(n===1)throw n=Ea,hr(t,0),Ci(t,e),nn(t,gt()),n;if(n===6)throw Error(ie(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,rr(t,Qt,ii),nn(t,gt()),null}function zd(t,e){var n=Ye;Ye|=1;try{return t(e)}finally{Ye=n,Ye===0&&(xs=gt()+500,bl&&Ki())}}function Er(t){Ni!==null&&Ni.tag===0&&!(Ye&6)&&us();var e=Ye;Ye|=1;var n=wn.transition,i=Ke;try{if(wn.transition=null,Ke=1,t)return t()}finally{Ke=i,wn.transition=n,Ye=e,!(Ye&6)&&Ki()}}function Bd(){cn=ns.current,at(ns)}function hr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,G0(n)),xt!==null)for(n=xt.return;n!==null;){var i=n;switch(yd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Ko();break;case 3:vs(),at(en),at(Ht),Rd();break;case 5:Cd(i);break;case 4:vs();break;case 13:at(ct);break;case 19:at(ct);break;case 10:Td(i.type._context);break;case 22:case 23:Bd()}n=n.return}if(Ct=t,xt=t=Hi(t.current,null),Dt=cn=e,St=0,Ea=null,kd=Pl=Sr=0,Qt=ta=null,ur!==null){for(e=0;e<ur.length;e++)if(n=ur[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}ur=null}return t}function Kg(t,e){do{var n=xt;try{if(Md(),Io.current=sl,rl){for(var i=ut.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}rl=!1}if(yr=0,bt=yt=ut=null,Js=!1,xa=0,Fd.current=null,n===null||n.return===null){St=1,Ea=e,xt=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Dt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=o,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var v=ef(a);if(v!==null){v.flags&=-257,tf(v,a,o,s,e),v.mode&1&&Jh(s,c,e),e=v,l=c;var _=e.updateQueue;if(_===null){var y=new Set;y.add(l),e.updateQueue=y}else _.add(l);break e}else{if(!(e&1)){Jh(s,c,e),Hd();break e}l=Error(ie(426))}}else if(ot&&o.mode&1){var m=ef(a);if(m!==null){!(m.flags&65536)&&(m.flags|=256),tf(m,a,o,s,e),Sd(_s(l,o));break e}}s=l=_s(l,o),St!==4&&(St=2),ta===null?ta=[s]:ta.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=Dg(s,l,e);qh(s,u);break e;case 1:o=l;var g=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(zi===null||!zi.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=Ig(s,o,e);qh(s,S);break e}}s=s.return}while(s!==null)}Jg(n)}catch(N){e=N,xt===n&&n!==null&&(xt=n=n.return);continue}break}while(!0)}function Zg(){var t=al.current;return al.current=sl,t===null?sl:t}function Hd(){(St===0||St===3||St===2)&&(St=4),Ct===null||!(Sr&268435455)&&!(Pl&268435455)||Ci(Ct,Dt)}function cl(t,e){var n=Ye;Ye|=2;var i=Zg();(Ct!==t||Dt!==e)&&(ii=null,hr(t,e));do try{px();break}catch(r){Kg(t,r)}while(!0);if(Md(),Ye=n,al.current=i,xt!==null)throw Error(ie(261));return Ct=null,Dt=0,St}function px(){for(;xt!==null;)Qg(xt)}function mx(){for(;xt!==null&&!B_();)Qg(xt)}function Qg(t){var e=tv(t.alternate,t,cn);t.memoizedProps=t.pendingProps,e===null?Jg(t):xt=e,Fd.current=null}function Jg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=lx(n,e),n!==null){n.flags&=32767,xt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{St=6,xt=null;return}}else if(n=ox(n,e,cn),n!==null){xt=n;return}if(e=e.sibling,e!==null){xt=e;return}xt=e=t}while(e!==null);St===0&&(St=5)}function rr(t,e,n){var i=Ke,r=wn.transition;try{wn.transition=null,Ke=1,gx(t,e,n,i)}finally{wn.transition=r,Ke=i}return null}function gx(t,e,n,i){do us();while(Ni!==null);if(Ye&6)throw Error(ie(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ie(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(K_(t,s),t===Ct&&(xt=Ct=null,Dt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ja||(Ja=!0,nv(Vo,function(){return us(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=wn.transition,wn.transition=null;var a=Ke;Ke=1;var o=Ye;Ye|=4,Fd.current=null,ux(t,n),qg(n,t),F0(xu),Xo=!!_u,xu=_u=null,t.current=n,dx(n),H_(),Ye=o,Ke=a,wn.transition=s}else t.current=n;if(Ja&&(Ja=!1,Ni=t,ll=r),s=t.pendingLanes,s===0&&(zi=null),V_(n.stateNode),nn(t,gt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(ol)throw ol=!1,t=zu,zu=null,t;return ll&1&&t.tag!==0&&us(),s=t.pendingLanes,s&1?t===Bu?na++:(na=0,Bu=t):na=0,Ki(),null}function us(){if(Ni!==null){var t=Dm(ll),e=wn.transition,n=Ke;try{if(wn.transition=null,Ke=16>t?16:t,Ni===null)var i=!1;else{if(t=Ni,Ni=null,ll=0,Ye&6)throw Error(ie(331));var r=Ye;for(Ye|=4,ve=t.current;ve!==null;){var s=ve,a=s.child;if(ve.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(ve=c;ve!==null;){var f=ve;switch(f.tag){case 0:case 11:case 15:ea(8,f,s)}var p=f.child;if(p!==null)p.return=f,ve=p;else for(;ve!==null;){f=ve;var h=f.sibling,v=f.return;if(Vg(f),f===c){ve=null;break}if(h!==null){h.return=v,ve=h;break}ve=v}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}ve=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,ve=a;else e:for(;ve!==null;){if(s=ve,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ea(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,ve=u;break e}ve=s.return}}var g=t.current;for(ve=g;ve!==null;){a=ve;var x=a.child;if(a.subtreeFlags&2064&&x!==null)x.return=a,ve=x;else e:for(a=g;ve!==null;){if(o=ve,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Nl(9,o)}}catch(N){pt(o,o.return,N)}if(o===a){ve=null;break e}var S=o.sibling;if(S!==null){S.return=o.return,ve=S;break e}ve=o.return}}if(Ye=r,Ki(),qn&&typeof qn.onPostCommitFiberRoot=="function")try{qn.onPostCommitFiberRoot(El,t)}catch{}i=!0}return i}finally{Ke=n,wn.transition=e}}return!1}function mf(t,e,n){e=_s(n,e),e=Dg(t,e,1),t=Oi(t,e,1),e=$t(),t!==null&&(Ca(t,1,e),nn(t,e))}function pt(t,e,n){if(t.tag===3)mf(t,t,n);else for(;e!==null;){if(e.tag===3){mf(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(zi===null||!zi.has(i))){t=_s(n,t),t=Ig(e,t,1),e=Oi(e,t,1),t=$t(),e!==null&&(Ca(e,1,t),nn(e,t));break}}e=e.return}}function vx(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=$t(),t.pingedLanes|=t.suspendedLanes&n,Ct===t&&(Dt&n)===n&&(St===4||St===3&&(Dt&130023424)===Dt&&500>gt()-Od?hr(t,0):kd|=n),nn(t,e)}function ev(t,e){e===0&&(t.mode&1?(e=Ga,Ga<<=1,!(Ga&130023424)&&(Ga=4194304)):e=1);var n=$t();t=fi(t,e),t!==null&&(Ca(t,e,n),nn(t,n))}function _x(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),ev(t,n)}function xx(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ie(314))}i!==null&&i.delete(e),ev(t,n)}var tv;tv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||en.current)Jt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Jt=!1,ax(t,e,n);Jt=!!(t.flags&131072)}else Jt=!1,ot&&e.flags&1048576&&sg(e,Jo,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Fo(t,e),t=e.pendingProps;var r=ps(e,Ht.current);cs(e,n),r=Pd(null,e,i,t,r,n);var s=Ld();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,tn(i)?(s=!0,Zo(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Ad(e),r.updater=Rl,e.stateNode=r,r._reactInternals=e,Cu(e,i,t,n),e=Pu(null,e,i,!0,s,n)):(e.tag=0,ot&&s&&xd(e),Xt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Fo(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Sx(i),t=Ln(i,t),r){case 0:e=Nu(null,e,i,t,n);break e;case 1:e=sf(null,e,i,t,n);break e;case 11:e=nf(null,e,i,t,n);break e;case 14:e=rf(null,e,i,Ln(i.type,t),n);break e}throw Error(ie(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ln(i,r),Nu(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ln(i,r),sf(t,e,i,r,n);case 3:e:{if(Og(e),t===null)throw Error(ie(387));i=e.pendingProps,s=e.memoizedState,r=s.element,dg(t,e),nl(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=_s(Error(ie(423)),e),e=af(t,e,i,n,r);break e}else if(i!==r){r=_s(Error(ie(424)),e),e=af(t,e,i,n,r);break e}else for(hn=ki(e.stateNode.containerInfo.firstChild),fn=e,ot=!0,In=null,n=cg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ms(),i===r){e=pi(t,e,n);break e}Xt(t,e,i,n)}e=e.child}return e;case 5:return hg(e),t===null&&wu(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,yu(i,r)?a=null:s!==null&&yu(i,s)&&(e.flags|=32),kg(t,e),Xt(t,e,a,n),e.child;case 6:return t===null&&wu(e),null;case 13:return zg(t,e,n);case 4:return bd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=gs(e,null,i,n):Xt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ln(i,r),nf(t,e,i,r,n);case 7:return Xt(t,e,e.pendingProps,n),e.child;case 8:return Xt(t,e,e.pendingProps.children,n),e.child;case 12:return Xt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,it(el,i._currentValue),i._currentValue=a,s!==null)if(Hn(s.value,a)){if(s.children===r.children&&!en.current){e=pi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=ci(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Au(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ie(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Au(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Xt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,cs(e,n),r=An(r),i=i(r),e.flags|=1,Xt(t,e,i,n),e.child;case 14:return i=e.type,r=Ln(i,e.pendingProps),r=Ln(i.type,r),rf(t,e,i,r,n);case 15:return Ug(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ln(i,r),Fo(t,e),e.tag=1,tn(i)?(t=!0,Zo(e)):t=!1,cs(e,n),Lg(e,i,r),Cu(e,i,r,n),Pu(null,e,i,!0,t,n);case 19:return Bg(t,e,n);case 22:return Fg(t,e,n)}throw Error(ie(156,e.tag))};function nv(t,e){return Rm(t,e)}function yx(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tn(t,e,n,i){return new yx(t,e,n,i)}function jd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Sx(t){if(typeof t=="function")return jd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===od)return 11;if(t===ld)return 14}return 2}function Hi(t,e){var n=t.alternate;return n===null?(n=Tn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function zo(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")jd(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Xr:return fr(n.children,r,s,e);case ad:a=8,r|=8;break;case Qc:return t=Tn(12,n,e,r|2),t.elementType=Qc,t.lanes=s,t;case Jc:return t=Tn(13,n,e,r),t.elementType=Jc,t.lanes=s,t;case eu:return t=Tn(19,n,e,r),t.elementType=eu,t.lanes=s,t;case hm:return Ll(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case um:a=10;break e;case dm:a=9;break e;case od:a=11;break e;case ld:a=14;break e;case wi:a=16,i=null;break e}throw Error(ie(130,t==null?t:typeof t,""))}return e=Tn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function fr(t,e,n,i){return t=Tn(7,t,i,e),t.lanes=n,t}function Ll(t,e,n,i){return t=Tn(22,t,i,e),t.elementType=hm,t.lanes=n,t.stateNode={isHidden:!1},t}function vc(t,e,n){return t=Tn(6,t,null,e),t.lanes=n,t}function _c(t,e,n){return e=Tn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Ex(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ql(0),this.expirationTimes=Ql(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ql(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Gd(t,e,n,i,r,s,a,o,l){return t=new Ex(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Tn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ad(s),t}function Mx(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Wr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function iv(t){if(!t)return Xi;t=t._reactInternals;e:{if(Ar(t)!==t||t.tag!==1)throw Error(ie(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(tn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ie(171))}if(t.tag===1){var n=t.type;if(tn(n))return ig(t,n,e)}return e}function rv(t,e,n,i,r,s,a,o,l){return t=Gd(n,i,!0,t,r,s,a,o,l),t.context=iv(null),n=t.current,i=$t(),r=Bi(n),s=ci(i,r),s.callback=e??null,Oi(n,s,r),t.current.lanes=r,Ca(t,r,i),nn(t,i),t}function Dl(t,e,n,i){var r=e.current,s=$t(),a=Bi(r);return n=iv(n),e.context===null?e.context=n:e.pendingContext=n,e=ci(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Oi(r,e,a),t!==null&&(zn(t,r,a,s),Do(t,r,a)),a}function ul(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function gf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Vd(t,e){gf(t,e),(t=t.alternate)&&gf(t,e)}function Tx(){return null}var sv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Wd(t){this._internalRoot=t}Il.prototype.render=Wd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ie(409));Dl(t,e,null,null)};Il.prototype.unmount=Wd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Er(function(){Dl(null,t,null,null)}),e[hi]=null}};function Il(t){this._internalRoot=t}Il.prototype.unstable_scheduleHydration=function(t){if(t){var e=Fm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<bi.length&&e!==0&&e<bi[n].priority;n++);bi.splice(n,0,t),n===0&&Om(t)}};function Xd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ul(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function vf(){}function wx(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=ul(a);s.call(c)}}var a=rv(e,i,t,0,null,!1,!1,"",vf);return t._reactRootContainer=a,t[hi]=a.current,pa(t.nodeType===8?t.parentNode:t),Er(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=ul(l);o.call(c)}}var l=Gd(t,0,!1,null,null,!1,!1,"",vf);return t._reactRootContainer=l,t[hi]=l.current,pa(t.nodeType===8?t.parentNode:t),Er(function(){Dl(e,l,n,i)}),l}function Fl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=ul(a);o.call(l)}}Dl(e,a,t,r)}else a=wx(n,e,t,r,i);return ul(a)}Im=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Xs(e.pendingLanes);n!==0&&(dd(e,n|1),nn(e,gt()),!(Ye&6)&&(xs=gt()+500,Ki()))}break;case 13:Er(function(){var i=fi(t,1);if(i!==null){var r=$t();zn(i,t,1,r)}}),Vd(t,1)}};hd=function(t){if(t.tag===13){var e=fi(t,134217728);if(e!==null){var n=$t();zn(e,t,134217728,n)}Vd(t,134217728)}};Um=function(t){if(t.tag===13){var e=Bi(t),n=fi(t,e);if(n!==null){var i=$t();zn(n,t,e,i)}Vd(t,e)}};Fm=function(){return Ke};km=function(t,e){var n=Ke;try{return Ke=t,e()}finally{Ke=n}};uu=function(t,e,n){switch(e){case"input":if(iu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Al(i);if(!r)throw Error(ie(90));pm(i),iu(i,r)}}}break;case"textarea":gm(t,n);break;case"select":e=n.value,e!=null&&ss(t,!!n.multiple,e,!1)}};Mm=zd;Tm=Er;var Ax={usingClientEntryPoint:!1,Events:[Na,Kr,Al,Sm,Em,zd]},zs={findFiberByHostInstance:cr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},bx={bundleType:zs.bundleType,version:zs.version,rendererPackageName:zs.rendererPackageName,rendererConfig:zs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:gi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=bm(t),t===null?null:t.stateNode},findFiberByHostInstance:zs.findFiberByHostInstance||Tx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var eo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!eo.isDisabled&&eo.supportsFiber)try{El=eo.inject(bx),qn=eo}catch{}}gn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ax;gn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xd(e))throw Error(ie(200));return Mx(t,e,null,n)};gn.createRoot=function(t,e){if(!Xd(t))throw Error(ie(299));var n=!1,i="",r=sv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Gd(t,1,!1,null,null,n,!1,i,r),t[hi]=e.current,pa(t.nodeType===8?t.parentNode:t),new Wd(e)};gn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ie(188)):(t=Object.keys(t).join(","),Error(ie(268,t)));return t=bm(e),t=t===null?null:t.stateNode,t};gn.flushSync=function(t){return Er(t)};gn.hydrate=function(t,e,n){if(!Ul(e))throw Error(ie(200));return Fl(null,t,e,!0,n)};gn.hydrateRoot=function(t,e,n){if(!Xd(t))throw Error(ie(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=sv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=rv(e,null,t,1,n??null,r,!1,s,a),t[hi]=e.current,pa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Il(e)};gn.render=function(t,e,n){if(!Ul(e))throw Error(ie(200));return Fl(null,t,e,!1,n)};gn.unmountComponentAtNode=function(t){if(!Ul(t))throw Error(ie(40));return t._reactRootContainer?(Er(function(){Fl(null,null,t,!1,function(){t._reactRootContainer=null,t[hi]=null})}),!0):!1};gn.unstable_batchedUpdates=zd;gn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Ul(n))throw Error(ie(200));if(t==null||t._reactInternals===void 0)throw Error(ie(38));return Fl(t,e,n,!1,i)};gn.version="18.3.1-next-f1338f8080-20240426";function av(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(av)}catch(t){console.error(t)}}av(),am.exports=gn;var Cx=am.exports,_f=Cx;Kc.createRoot=_f.createRoot,Kc.hydrateRoot=_f.hydrateRoot;var xf="1.3.25";function ov(t,e,n){return Math.max(t,Math.min(e,n))}function Rx(t,e,n){return(1-n)*t+n*e}function Nx(t,e,n,i){return Rx(t,e,1-Math.exp(-n*i))}function Px(t,e){return(t%e+e)%e}var Lx=class{constructor(){Se(this,"isRunning",!1);Se(this,"value",0);Se(this,"from",0);Se(this,"to",0);Se(this,"currentTime",0);Se(this,"lerp");Se(this,"duration");Se(this,"easing");Se(this,"onUpdate")}advance(t){var n;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=t;const i=ov(0,this.currentTime/this.duration,1);e=i>=1;const r=e?1:this.easing(i);this.value=this.from+(this.to-this.from)*r}else this.lerp?(this.value=Nx(this.value,this.to,this.lerp*60,t),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),(n=this.onUpdate)==null||n.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(t,e,{lerp:n,duration:i,easing:r,onStart:s,onUpdate:a}){this.from=this.value=t,this.to=e,this.lerp=n,this.duration=i,this.easing=r,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=a}};function Dx(t,e){let n;return function(...i){clearTimeout(n),n=setTimeout(()=>{n=void 0,t.apply(this,i)},e)}}var Ix=class{constructor(t,e,{autoResize:n=!0,debounce:i=250}={}){Se(this,"width",0);Se(this,"height",0);Se(this,"scrollHeight",0);Se(this,"scrollWidth",0);Se(this,"debouncedResize");Se(this,"wrapperResizeObserver");Se(this,"contentResizeObserver");Se(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Se(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Se(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=t,this.content=e,n&&(this.debouncedResize=Dx(this.resize,i),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var t,e;(t=this.wrapperResizeObserver)==null||t.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},lv=class{constructor(){Se(this,"events",{})}emit(t,...e){var i;const n=this.events[t]||[];for(let r=0,s=n.length;r<s;r++)(i=n[r])==null||i.call(n,...e)}on(t,e){return this.events[t]?this.events[t].push(e):this.events[t]=[e],()=>{var n;this.events[t]=(n=this.events[t])==null?void 0:n.filter(i=>e!==i)}}off(t,e){var n;this.events[t]=(n=this.events[t])==null?void 0:n.filter(i=>e!==i)}destroy(){this.events={}}};const Ux=100/6,_i={passive:!1};function yf(t,e){return t===1?Ux:t===2?e:1}var Fx=class{constructor(t,e={wheelMultiplier:1,touchMultiplier:1}){Se(this,"touchStart",{x:0,y:0});Se(this,"lastDelta",{x:0,y:0});Se(this,"window",{width:0,height:0});Se(this,"emitter",new lv);Se(this,"onTouchStart",t=>{const{clientX:e,clientY:n}=t.targetTouches?t.targetTouches[0]:t;this.touchStart.x=e,this.touchStart.y=n,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:t})});Se(this,"onTouchMove",t=>{const{clientX:e,clientY:n}=t.targetTouches?t.targetTouches[0]:t,i=-(e-this.touchStart.x)*this.options.touchMultiplier,r=-(n-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=n,this.lastDelta={x:i,y:r},this.emitter.emit("scroll",{deltaX:i,deltaY:r,event:t})});Se(this,"onTouchEnd",t=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:t})});Se(this,"onWheel",t=>{let{deltaX:e,deltaY:n,deltaMode:i}=t;const r=yf(i,this.window.width),s=yf(i,this.window.height);e*=r,n*=s,e*=this.options.wheelMultiplier,n*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:n,event:t})});Se(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=t,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,_i),this.element.addEventListener("touchstart",this.onTouchStart,_i),this.element.addEventListener("touchmove",this.onTouchMove,_i),this.element.addEventListener("touchend",this.onTouchEnd,_i)}on(t,e){return this.emitter.on(t,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,_i),this.element.removeEventListener("touchstart",this.onTouchStart,_i),this.element.removeEventListener("touchmove",this.onTouchMove,_i),this.element.removeEventListener("touchend",this.onTouchEnd,_i)}};const Sf=t=>Math.min(1,1.001-2**(-10*t));var kx=class{constructor({wrapper:t=window,content:e=document.documentElement,eventsTarget:n=t,smoothWheel:i=!0,syncTouch:r=!1,syncTouchLerp:s=.075,touchInertiaExponent:a=1.7,duration:o,easing:l,lerp:c=.1,infinite:f=!1,orientation:p="vertical",gestureOrientation:h=p==="horizontal"?"both":"vertical",touchMultiplier:v=1,wheelMultiplier:_=1,autoResize:y=!0,prevent:m,virtualScroll:u,overscroll:g=!0,autoRaf:x=!1,anchors:S=!1,autoToggle:N=!1,allowNestedScroll:C=!1,__experimental__naiveDimensions:T=!1,naiveDimensions:z=T,stopInertiaOnNavigate:E=!1}={}){Se(this,"_isScrolling",!1);Se(this,"_isStopped",!1);Se(this,"_isLocked",!1);Se(this,"_preventNextNativeScrollEvent",!1);Se(this,"_resetVelocityTimeout",null);Se(this,"_rafId",null);Se(this,"_isDraggingSelection",!1);Se(this,"isTouching");Se(this,"isIos");Se(this,"time",0);Se(this,"userData",{});Se(this,"lastVelocity",0);Se(this,"velocity",0);Se(this,"direction",0);Se(this,"options");Se(this,"targetScroll");Se(this,"animatedScroll");Se(this,"animate",new Lx);Se(this,"emitter",new lv);Se(this,"dimensions");Se(this,"virtualScroll");Se(this,"onScrollEnd",t=>{t instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&t.stopPropagation()});Se(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Se(this,"onTransitionEnd",t=>{var e;(e=t.propertyName)!=null&&e.includes("overflow")&&t.target===this.rootElement&&this.checkOverflow()});Se(this,"onClick",t=>{const e=t.composedPath().filter(i=>i instanceof HTMLAnchorElement&&i.href).map(i=>new URL(i.href)),n=new URL(window.location.href);if(this.options.anchors){const i=e.find(r=>n.host===r.host&&n.pathname===r.pathname&&r.hash);if(i){const r=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=decodeURIComponent(i.hash);this.scrollTo(s,r);return}}if(this.options.stopInertiaOnNavigate&&e.some(i=>n.host===i.host&&n.pathname!==i.pathname)){this.reset();return}});Se(this,"onPointerDown",t=>{t.button===1&&this.reset()});Se(this,"onVirtualScroll",t=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(t)===!1)return;const{deltaX:e,deltaY:n,event:i}=t;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:n,event:i}),i.ctrlKey||i.lenisStopPropagation)return;const r=i.type.includes("touch"),s=i.type.includes("wheel");if(r&&this.isIos&&(i.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(i)),this._isDraggingSelection)){i.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=i.type==="touchstart"||i.type==="touchmove";const a=e===0&&n===0;if(this.options.syncTouch&&r&&i.type==="touchstart"&&a&&!this.isStopped&&!this.isLocked){this.reset();return}const o=this.options.gestureOrientation==="vertical"&&n===0||this.options.gestureOrientation==="horizontal"&&e===0;if(a||o)return;let l=i.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const c=this.options.prevent,f=Math.abs(e)>=Math.abs(n)?"horizontal":"vertical";if(l.find(_=>{var y,m,u,g,x;return _ instanceof HTMLElement&&(typeof c=="function"&&(c==null?void 0:c(_))||((y=_.hasAttribute)==null?void 0:y.call(_,"data-lenis-prevent"))||f==="vertical"&&((m=_.hasAttribute)==null?void 0:m.call(_,"data-lenis-prevent-vertical"))||f==="horizontal"&&((u=_.hasAttribute)==null?void 0:u.call(_,"data-lenis-prevent-horizontal"))||r&&((g=_.hasAttribute)==null?void 0:g.call(_,"data-lenis-prevent-touch"))||s&&((x=_.hasAttribute)==null?void 0:x.call(_,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(_,{deltaX:e,deltaY:n}))}))return;if(this.isStopped||this.isLocked){i.cancelable&&i.preventDefault();return}if(!(this.options.syncTouch&&r||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),i.lenisStopPropagation=!0;return}let p=n;this.options.gestureOrientation==="both"?p=Math.abs(n)>Math.abs(e)?n:e:this.options.gestureOrientation==="horizontal"&&(p=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&n>0||this.animatedScroll===this.limit&&n<0))&&(i.lenisStopPropagation=!0),i.cancelable&&i.preventDefault();const h=r&&this.options.syncTouch,v=r&&i.type==="touchend";v&&(p=Math.sign(p)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+p,{programmatic:!1,...h?{lerp:v?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Se(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const t=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-t,this.direction=Math.sign(this.animatedScroll-t),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Se(this,"raf",t=>{const e=t-(this.time||t);this.time=t,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=xf,window.lenis||(window.lenis={}),window.lenis.version=xf,p==="horizontal"&&(window.lenis.horizontal=!0),r===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!t||t===document.documentElement)&&(t=window),typeof o=="number"&&typeof l!="function"?l=Sf:typeof l=="function"&&typeof o!="number"&&(o=1),this.options={wrapper:t,content:e,eventsTarget:n,smoothWheel:i,syncTouch:r,syncTouchLerp:s,touchInertiaExponent:a,duration:o,easing:l,lerp:c,infinite:f,gestureOrientation:h,orientation:p,touchMultiplier:v,wheelMultiplier:_,autoResize:y,prevent:m,virtualScroll:u,overscroll:g,autoRaf:x,anchors:S,autoToggle:N,allowNestedScroll:C,naiveDimensions:z,stopInertiaOnNavigate:E},this.dimensions=new Ix(t,e,{autoResize:y}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new Fx(n,{touchMultiplier:v,wheelMultiplier:_}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(t,e){return this.emitter.on(t,e)}off(t,e){return this.emitter.off(t,e)}get overflow(){const t=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[t]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(t){this.isHorizontal?this.options.wrapper.scrollTo({left:t,behavior:"instant"}):this.options.wrapper.scrollTo({top:t,behavior:"instant"})}isTouchOnSelectionHandle(t){const e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;const n=t.targetTouches[0]??t.changedTouches[0];if(!n)return!1;const i=e.getRangeAt(0).getClientRects();if(i.length===0)return!1;const r=i[0],s=i[i.length-1],a=40,o=Math.hypot(n.clientX-r.left,n.clientY-r.top)<=a,l=Math.hypot(n.clientX-s.right,n.clientY-s.bottom)<=a;return o||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(t,{offset:e=0,immediate:n=!1,lock:i=!1,programmatic:r=!0,lerp:s=r?this.options.lerp:void 0,duration:a=r?this.options.duration:void 0,easing:o=r?this.options.easing:void 0,onStart:l,onComplete:c,force:f=!1,userData:p}={}){if((this.isStopped||this.isLocked)&&!f)return;let h=t,v=e;if(typeof h=="string"&&["top","left","start","#"].includes(h))h=0;else if(typeof h=="string"&&["bottom","right","end"].includes(h))h=this.limit;else{let _=null;if(typeof h=="string"?(_=h.startsWith("#")?document.getElementById(h.slice(1)):document.querySelector(h),_||(h==="#top"?h=0:console.warn("Lenis: Target not found",h))):h instanceof HTMLElement&&(h!=null&&h.nodeType)&&(_=h),_){if(this.options.wrapper!==window){const S=this.rootElement.getBoundingClientRect();v-=this.isHorizontal?S.left:S.top}const y=_.getBoundingClientRect(),m=getComputedStyle(_),u=this.isHorizontal?Number.parseFloat(m.scrollMarginLeft):Number.parseFloat(m.scrollMarginTop),g=getComputedStyle(this.rootElement),x=this.isHorizontal?Number.parseFloat(g.scrollPaddingLeft):Number.parseFloat(g.scrollPaddingTop);h=(this.isHorizontal?y.left:y.top)+this.animatedScroll-(Number.isNaN(u)?0:u)-(Number.isNaN(x)?0:x)}}if(typeof h=="number"){if(h+=v,this.options.infinite){if(r){this.targetScroll=this.animatedScroll=this.scroll;const _=h-this.animatedScroll;_>this.limit/2?h-=this.limit:_<-this.limit/2&&(h+=this.limit)}}else h=ov(0,h,this.limit);if(h===this.targetScroll){l==null||l(this),c==null||c(this);return}if(this.userData=p??{},n){this.animatedScroll=this.targetScroll=h,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}r||(this.targetScroll=h),typeof a=="number"&&typeof o!="function"?o=Sf:typeof o=="function"&&typeof a!="number"&&(a=1),this.animate.fromTo(this.animatedScroll,h,{duration:a,easing:o,lerp:s,onStart:()=>{i&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(_,y)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=_-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=_,this.setScroll(this.scroll),r&&(this.targetScroll=_),y||this.emit(),y&&(this.reset(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(t,{deltaX:e,deltaY:n}){const i=Date.now();t._lenis||(t._lenis={});const r=t._lenis;let s,a,o,l,c,f,p,h,v,_;if(i-(r.time??0)>2e3){r.time=Date.now();const C=window.getComputedStyle(t);if(r.computedStyle=C,s=["auto","overlay","scroll"].includes(C.overflowX),a=["auto","overlay","scroll"].includes(C.overflowY),c=["auto"].includes(C.overscrollBehaviorX),f=["auto"].includes(C.overscrollBehaviorY),r.hasOverflowX=s,r.hasOverflowY=a,!(s||a))return!1;p=t.scrollWidth,h=t.scrollHeight,v=t.clientWidth,_=t.clientHeight,o=p>v,l=h>_,r.isScrollableX=o,r.isScrollableY=l,r.scrollWidth=p,r.scrollHeight=h,r.clientWidth=v,r.clientHeight=_,r.hasOverscrollBehaviorX=c,r.hasOverscrollBehaviorY=f}else o=r.isScrollableX,l=r.isScrollableY,s=r.hasOverflowX,a=r.hasOverflowY,p=r.scrollWidth,h=r.scrollHeight,v=r.clientWidth,_=r.clientHeight,c=r.hasOverscrollBehaviorX,f=r.hasOverscrollBehaviorY;if(!(s&&o||a&&l))return!1;const y=Math.abs(e)>=Math.abs(n)?"horizontal":"vertical";let m,u,g,x,S,N;if(y==="horizontal")m=Math.round(t.scrollLeft),u=p-v,g=e,x=s,S=o,N=c;else if(y==="vertical")m=Math.round(t.scrollTop),u=h-_,g=n,x=a,S=l,N=f;else return!1;return!N&&(m>=u||m<=0)?!0:(g>0?m<u:m>0)&&x&&S}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const t=this.options.wrapper;return this.isHorizontal?t.scrollX??t.scrollLeft:t.scrollY??t.scrollTop}get scroll(){return this.options.infinite?Px(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(t){this._isScrolling!==t&&(this._isScrolling=t,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(t){this._isStopped!==t&&(this._isStopped=t,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(t){this._isLocked!==t&&(this._isLocked=t,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let t="lenis";return this.options.autoToggle&&(t+=" lenis-autoToggle"),this.isStopped&&(t+=" lenis-stopped"),this.isLocked&&(t+=" lenis-locked"),this.isScrolling&&(t+=" lenis-scrolling"),this.isScrolling==="smooth"&&(t+=" lenis-smooth"),t}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(t=>{this.rootElement.classList.add(t)})}cleanUpClassName(){for(const t of Array.from(this.rootElement.classList))(t==="lenis"||t.startsWith("lenis-"))&&this.rootElement.classList.remove(t)}};function Ox(){const t=fe.useRef(null);return fe.useEffect(()=>{const e=t.current;if(!e)return;const n=e.getContext("2d");if(!n)return;let i,r=e.width=window.innerWidth,s=e.height=window.innerHeight;const a={x:-1e3,y:-1e3,targetX:-1e3,targetY:-1e3,radius:130};let o=[];const l=L=>{a.targetX=L.clientX,a.targetY=L.clientY},c=()=>{a.targetX=-1e3,a.targetY=-1e3},f=L=>{L.target.tagName==="A"||L.target.tagName==="BUTTON"||L.target.closest("a")||L.target.closest("button")||L.target.closest("input")||L.target.closest("textarea")||L.target.closest(".user-profile-badge")||L.target.closest(".settings-toggle")||o.push({x:L.clientX,y:L.clientY,radius:0,maxRadius:300,speed:8,force:80,width:50})},p=L=>{if(L.touches.length>0){const Z=L.touches[0];a.targetX=Z.clientX,a.targetY=Z.clientY;const P=document.elementFromPoint(Z.clientX,Z.clientY);if(P&&(P.tagName==="A"||P.tagName==="BUTTON"||P.closest("a")||P.closest("button")||P.closest("input")||P.closest("textarea")||P.closest(".user-profile-badge")||P.closest(".settings-toggle")))return;o.push({x:Z.clientX,y:Z.clientY,radius:0,maxRadius:220,speed:7,force:70,width:40})}},h=L=>{if(L.touches.length>0){const Z=L.touches[0];a.targetX=Z.clientX,a.targetY=Z.clientY}},v=()=>{a.targetX=-1e3,a.targetY=-1e3};window.addEventListener("mousemove",l),window.addEventListener("mouseleave",c),window.addEventListener("mousedown",f),window.addEventListener("touchstart",p,{passive:!0}),window.addEventListener("touchmove",h,{passive:!0}),window.addEventListener("touchend",v,{passive:!0});let _=[];const m=r<768?65:46;let u=Math.ceil(r/m)+1,g=Math.ceil(s/m)+1;const x=()=>{r=e.width=window.innerWidth,s=e.height=window.innerHeight;const Z=r<768?65:46;u=Math.ceil(r/Z)+1,g=Math.ceil(s/Z)+1,_=[];for(let P=0;P<g;P++)for(let O=0;O<u;O++){const q=O*Z-(u*Z-r)/2,Q=P*Z-(g*Z-s)/2;_.push({homeX:q,homeY:Q,x:q+(Math.random()-.5)*6,y:Q+(Math.random()-.5)*6,vx:0,vy:0,radius:1.2+Math.random()*.6,activation:0})}};x(),window.addEventListener("resize",x);let S=window.scrollY,N=0;const C=()=>{const L=window.scrollY,Z=L-S;S=L,N+=Z};window.addEventListener("scroll",C,{passive:!0});let T=0;const z=.045,E=.88,w=40,U=()=>{T+=1,n.clearRect(0,0,r,s),Math.abs(N)>.05&&(_.forEach(L=>{L.vy-=N*.06}),N*=.85),a.targetX===-1e3?(a.x+=(-1e3-a.x)*.1,a.y+=(-1e3-a.y)*.1):(a.x+=(a.targetX-a.x)*.18,a.y+=(a.targetY-a.y)*.18),o.forEach(L=>{L.radius+=L.speed}),o=o.filter(L=>L.radius<L.maxRadius),_.forEach(L=>{const Z=Math.sin(T*.015+L.homeY*.008)*2,P=Math.cos(T*.012+L.homeX*.008)*2;let O=0,q=0;if(a.x!==-1e3){const k=L.x-a.x,R=L.y-a.y,D=Math.sqrt(k*k+R*R);if(D<a.radius){const K=(a.radius-D)/a.radius,H=Math.pow(K,1.5),Y=Math.atan2(R,k);O=Math.cos(Y)*H*w,q=Math.sin(Y)*H*w,L.activation=Math.max(L.activation,K)}else L.activation*=.94}else L.activation*=.94;o.forEach(k=>{const R=L.x-k.x,D=L.y-k.y,K=Math.sqrt(R*R+D*D),H=Math.abs(K-k.radius);if(H<k.width){const Y=1-H/k.width,ae=1-k.radius/k.maxRadius,ce=Y*ae,pe=Math.atan2(D,R),Ae=ce*k.force*.12;L.vx+=Math.cos(pe)*Ae,L.vy+=Math.sin(pe)*Ae,L.activation=Math.max(L.activation,ce*.85)}});const Q=L.homeX+O+Z,F=L.homeY+q+P;L.vx+=(Q-L.x)*z,L.vy+=(F-L.y)*z,L.vx*=E,L.vy*=E,L.x+=L.vx,L.y+=L.vy}),n.lineWidth=.8;for(let L=0;L<g;L++)for(let Z=0;Z<u;Z++){const P=L*u+Z,O=_[P];if(!O)continue;if(Z<u-1){const D=L*u+(Z+1),K=_[D];if(K){const H=Math.max(O.activation,K.activation),Y=.06+H*.14;H>.01?n.strokeStyle=`hsla(${265-H*85}, 80%, 60%, ${Y})`:n.strokeStyle=`rgba(139, 92, 246, ${Y})`,n.beginPath(),n.moveTo(O.x,O.y),n.lineTo(K.x,K.y),n.stroke()}}if(L<g-1){const D=(L+1)*u+Z,K=_[D];if(K){const H=Math.max(O.activation,K.activation),Y=.06+H*.14;H>.01?n.strokeStyle=`hsla(${265-H*85}, 80%, 60%, ${Y})`:n.strokeStyle=`rgba(139, 92, 246, ${Y})`,n.beginPath(),n.moveTo(O.x,O.y),n.lineTo(K.x,K.y),n.stroke()}}const q=265-O.activation*85,Q=55+O.activation*45,F=48+O.activation*22,k=.28+O.activation*.55,R=O.radius+O.activation*1.5;O.activation>.05&&(n.fillStyle=`hsla(${q}, ${Q}%, ${F}%, ${O.activation*.1})`,n.beginPath(),n.arc(O.x,O.y,R*3.2,0,Math.PI*2),n.fill()),n.fillStyle=`hsla(${q}, ${Q}%, ${F}%, ${k})`,n.beginPath(),n.arc(O.x,O.y,R,0,Math.PI*2),n.fill()}i=requestAnimationFrame(U)};return U(),()=>{cancelAnimationFrame(i),window.removeEventListener("mousemove",l),window.removeEventListener("mouseleave",c),window.removeEventListener("mousedown",f),window.removeEventListener("touchstart",p),window.removeEventListener("touchmove",h),window.removeEventListener("touchend",v),window.removeEventListener("resize",x),window.removeEventListener("scroll",C)}},[]),d.jsx("canvas",{ref:t,className:"interactive-dots-canvas"})}const zx={},Ef=t=>{let e;const n=new Set,i=(f,p)=>{const h=typeof f=="function"?f(e):f;if(!Object.is(h,e)){const v=e;e=p??(typeof h!="object"||h===null)?h:Object.assign({},e,h),n.forEach(_=>_(e,v))}},r=()=>e,l={setState:i,getState:r,getInitialState:()=>c,subscribe:f=>(n.add(f),()=>n.delete(f)),destroy:()=>{(zx?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},c=e=t(i,r,l);return l},Bx=t=>t?Ef(t):Ef;var cv={exports:{}},uv={},dv={exports:{}},hv={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ys=fe;function Hx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var jx=typeof Object.is=="function"?Object.is:Hx,Gx=ys.useState,Vx=ys.useEffect,Wx=ys.useLayoutEffect,Xx=ys.useDebugValue;function qx(t,e){var n=e(),i=Gx({inst:{value:n,getSnapshot:e}}),r=i[0].inst,s=i[1];return Wx(function(){r.value=n,r.getSnapshot=e,xc(r)&&s({inst:r})},[t,n,e]),Vx(function(){return xc(r)&&s({inst:r}),t(function(){xc(r)&&s({inst:r})})},[t]),Xx(n),n}function xc(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!jx(t,n)}catch{return!0}}function Yx(t,e){return e()}var $x=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?Yx:qx;hv.useSyncExternalStore=ys.useSyncExternalStore!==void 0?ys.useSyncExternalStore:$x;dv.exports=hv;var Kx=dv.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kl=fe,Zx=Kx;function Qx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Jx=typeof Object.is=="function"?Object.is:Qx,ey=Zx.useSyncExternalStore,ty=kl.useRef,ny=kl.useEffect,iy=kl.useMemo,ry=kl.useDebugValue;uv.useSyncExternalStoreWithSelector=function(t,e,n,i,r){var s=ty(null);if(s.current===null){var a={hasValue:!1,value:null};s.current=a}else a=s.current;s=iy(function(){function l(v){if(!c){if(c=!0,f=v,v=i(v),r!==void 0&&a.hasValue){var _=a.value;if(r(_,v))return p=_}return p=v}if(_=p,Jx(f,v))return _;var y=i(v);return r!==void 0&&r(_,y)?(f=v,_):(f=v,p=y)}var c=!1,f,p,h=n===void 0?null:n;return[function(){return l(e())},h===null?void 0:function(){return l(h())}]},[e,n,i,r]);var o=ey(t,s[0],s[1]);return ny(function(){a.hasValue=!0,a.value=o},[o]),ry(o),o};cv.exports=uv;var sy=cv.exports;const ay=qp(sy),fv={},{useDebugValue:oy}=rm,{useSyncExternalStoreWithSelector:ly}=ay;let Mf=!1;const cy=t=>t;function uy(t,e=cy,n){(fv?"production":void 0)!=="production"&&n&&!Mf&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),Mf=!0);const i=ly(t.subscribe,t.getState,t.getServerState||t.getInitialState,e,n);return oy(i),i}const Tf=t=>{(fv?"production":void 0)!=="production"&&typeof t!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const e=typeof t=="function"?Bx(t):t,n=(i,r)=>uy(e,i,r);return Object.assign(n,e),n},qd=t=>t?Tf(t):Tf,dy={};function hy(t,e){let n;try{n=t()}catch{return}return{getItem:r=>{var s;const a=l=>l===null?null:JSON.parse(l,void 0),o=(s=n.getItem(r))!=null?s:null;return o instanceof Promise?o.then(a):a(o)},setItem:(r,s)=>n.setItem(r,JSON.stringify(s,void 0)),removeItem:r=>n.removeItem(r)}}const Ma=t=>e=>{try{const n=t(e);return n instanceof Promise?n:{then(i){return Ma(i)(n)},catch(i){return this}}}catch(n){return{then(i){return this},catch(i){return Ma(i)(n)}}}},fy=(t,e)=>(n,i,r)=>{let s={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:m=>m,version:0,merge:(m,u)=>({...u,...m}),...e},a=!1;const o=new Set,l=new Set;let c;try{c=s.getStorage()}catch{}if(!c)return t((...m)=>{console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`),n(...m)},i,r);const f=Ma(s.serialize),p=()=>{const m=s.partialize({...i()});let u;const g=f({state:m,version:s.version}).then(x=>c.setItem(s.name,x)).catch(x=>{u=x});if(u)throw u;return g},h=r.setState;r.setState=(m,u)=>{h(m,u),p()};const v=t((...m)=>{n(...m),p()},i,r);let _;const y=()=>{var m;if(!c)return;a=!1,o.forEach(g=>g(i()));const u=((m=s.onRehydrateStorage)==null?void 0:m.call(s,i()))||void 0;return Ma(c.getItem.bind(c))(s.name).then(g=>{if(g)return s.deserialize(g)}).then(g=>{if(g)if(typeof g.version=="number"&&g.version!==s.version){if(s.migrate)return s.migrate(g.state,g.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return g.state}).then(g=>{var x;return _=s.merge(g,(x=i())!=null?x:v),n(_,!0),p()}).then(()=>{u==null||u(_,void 0),a=!0,l.forEach(g=>g(_))}).catch(g=>{u==null||u(void 0,g)})};return r.persist={setOptions:m=>{s={...s,...m},m.getStorage&&(c=m.getStorage())},clearStorage:()=>{c==null||c.removeItem(s.name)},getOptions:()=>s,rehydrate:()=>y(),hasHydrated:()=>a,onHydrate:m=>(o.add(m),()=>{o.delete(m)}),onFinishHydration:m=>(l.add(m),()=>{l.delete(m)})},y(),_||v},py=(t,e)=>(n,i,r)=>{let s={storage:hy(()=>localStorage),partialize:y=>y,version:0,merge:(y,m)=>({...m,...y}),...e},a=!1;const o=new Set,l=new Set;let c=s.storage;if(!c)return t((...y)=>{console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`),n(...y)},i,r);const f=()=>{const y=s.partialize({...i()});return c.setItem(s.name,{state:y,version:s.version})},p=r.setState;r.setState=(y,m)=>{p(y,m),f()};const h=t((...y)=>{n(...y),f()},i,r);r.getInitialState=()=>h;let v;const _=()=>{var y,m;if(!c)return;a=!1,o.forEach(g=>{var x;return g((x=i())!=null?x:h)});const u=((m=s.onRehydrateStorage)==null?void 0:m.call(s,(y=i())!=null?y:h))||void 0;return Ma(c.getItem.bind(c))(s.name).then(g=>{if(g)if(typeof g.version=="number"&&g.version!==s.version){if(s.migrate)return[!0,s.migrate(g.state,g.version)];console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return[!1,g.state];return[!1,void 0]}).then(g=>{var x;const[S,N]=g;if(v=s.merge(N,(x=i())!=null?x:h),n(v,!0),S)return f()}).then(()=>{u==null||u(v,void 0),v=i(),a=!0,l.forEach(g=>g(v))}).catch(g=>{u==null||u(void 0,g)})};return r.persist={setOptions:y=>{s={...s,...y},y.storage&&(c=y.storage)},clearStorage:()=>{c==null||c.removeItem(s.name)},getOptions:()=>s,rehydrate:()=>_(),hasHydrated:()=>a,onHydrate:y=>(o.add(y),()=>{o.delete(y)}),onFinishHydration:y=>(l.add(y),()=>{l.delete(y)})},s.skipHydration||_(),v||h},my=(t,e)=>"getStorage"in e||"serialize"in e||"deserialize"in e?((dy?"production":void 0)!=="production"&&console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),fy(t,e)):py(t,e),gy=my,un=[{id:"avatar-1",colors:["#ff416c","#ff4b2b"],name:"Crimson Sunset"},{id:"avatar-2",colors:["#a855f7","#3b82f6"],name:"Nebula Cyber"},{id:"avatar-3",colors:["#10b981","#059669"],name:"Teal Forest"},{id:"avatar-4",colors:["#f59e0b","#e11d48"],name:"Solar Flare"},{id:"avatar-5",colors:["#ec4899","#8b5cf6"],name:"Cosmic Fuchsia"},{id:"avatar-6",colors:["#06b6d4","#3b82f6"],name:"Cyan Ocean"}],dl=t=>{const e=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100"><defs><linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:${t[0]};stop-opacity:1" /><stop offset="100%" style="stop-color:${t[1]};stop-opacity:1" /></linearGradient></defs><circle cx="50" cy="50" r="50" fill="url(#grad)" /></svg>`;return`data:image/svg+xml;utf8,${encodeURIComponent(e)}`},pr=qd(gy(t=>({user:null,isLoggedIn:!1,login:(e,n,i)=>t({isLoggedIn:!0,user:{email:e,name:n,avatar:i||dl(un[0].colors)}}),logout:()=>t({isLoggedIn:!1,user:null})}),{name:"qix-auth-storage"})),vy=()=>{if(typeof window>"u")return"ru";const e=(navigator.language||navigator.userLanguage||"ru").substring(0,2).toLowerCase();return["ru","uz","en"].includes(e)?e:"ru"},Yd={en:{services:"Services",expertise:"Expertise",scale:"Scale",login:"Log In",logout:"Log Out",startProject:"Start Project",disconnect:"Disconnect",heroTitle:"The Best Web Studio.",heroTitleSub:"Making websites beautifully.",heroDesc:"We design, develop, and launch high-performance websites and mobile apps. We handle the engineering so you can grow.",heroStatsProjects:"Projects Launched",heroStatsUptime:"Uptime SLA",heroStatsUsers:"Active Users",whatWeDo:"What We Do",engineeredStability:"Engineered for stability.",designedGrowth:"Designed for growth.",cardWebTitle:"Custom Web Development",cardWebDesc:"High-performance, secure, and SEO-optimized web systems built with modern frameworks (React, Next.js, Node.js) that load instantly.",cardAppTitle:"iOS & Android Apps",cardAppDesc:"Native & cross-platform applications crafted for optimal user experiences, from design to submission in the App Store and Google Play.",cardDesignTitle:"UI/UX Interface Design",cardDesignDesc:"Visual design systems that communicate brand trust. Pixel-perfect, accessible, and structured user flows that drive customer conversion.",cardCloudTitle:"Cloud Infrastructure",cardCloudDesc:"Reliable CI/CD pipelines, containerized orchestration (Docker/Kubernetes), and scalable architecture setups on AWS, GCP, and Vercel.",cardApiTitle:"Integrations & API Design",cardApiDesc:"Seamless connections to CRMs, payment gateways, ERP pipelines, and secure enterprise backend services.",cardSupportTitle:"Support & Optimization",cardSupportDesc:"Post-launch support, performance audits, page speed optimization, security updates, and database maintenance to keep apps healthy.",researchAreas:"Research Areas",threePillars:"Three pillars",scientificExecution:"of scientific execution",pillar1Title:"High-Performance Web Engines",pillar1Desc:"Building sub-second loading web applications using edge-rendering, caching layers, and clean, modular component structures.",pillar2Title:"Fluid Native Mobile Frameworks",pillar2Desc:"Crafting mobile software that utilizes GPU hardware acceleration for smooth 120Hz animations, local databases, and offline accessibility.",pillar3Title:"Secure & Automated Cloud",pillar3Desc:"Deploying auto-scaling cloud clusters protected by firewalls, standard authorization models, and fully automated deployment workflows.",selectedWork:"Selected Work",caseStudies:"Case studies",builtSolutions:"of solutions built",visitWebsite:"Visit Website",viewCase:"View Case Study",byNumbers:"By The Numbers",scaleSpeaks:"Scale that speaks",itself:"for itself",numCardProjects:"Web & mobile projects launched successfully",numCardUptime:"Uptime and build reliability standards",numCardEngineers:"Experienced engineers and product designers",numCardSpeed:"Average load speed improvement for clients",getInvolved:"Get Involved",nextBreakthrough:"The next breakthrough",startsYou:"starts with you",ctaDesc:"Have a website or mobile application concept? Let our team handle the engineering, design, and deployment. We launch products under iOS, Android, and Web platforms.",footerCopy:"Quality • Intelligence • Experience. All rights reserved.",establishIdentity:"Establish Identity",authSubtitle:"Create your developer profile and choose an avatar to authorize secure connections.",fullName:"Full Name",emailAddr:"Email Address",chooseAvatar:"Choose Avatar Identity",password:"Password",createAccount:"Create Account",newWorkspace:"New Workspace",workspaceSubtitle:"Outline the requirements and specify features for your sandbox project. Our AI will analyze your specifications and generate an estimate.",workspaceName:"Workspace Name",envEngine:"Environment Engine",projRequirements:"Project Requirements (AI Analysis)",analyzeReqs:"Analyze Requirements",neuralAssessment:"Neural Assessment",radarSubtitle:"Our neural interpreter is analyzing requirements and estimating resources.",aiCostBreakdown:"AI Cost Breakdown",aiSubtitle:"Based on your requirements, the AI has compiled the following invoice quote.",projectTarget:"Project Target",timeline:"Timeline",itemizedTasks:"Itemized Tasks",invoicedTotal:"Invoiced Total",proceedCheckout:"Proceed to Checkout",confirmPayment:"Confirm Payment",p2pSender:"Your card or phone number (Sender)",p2pReceipt:"Transaction ID / Receipt Code (Click / Payme)",workspaceActive:"Workspace Active!",receiptEmailed:"Transaction confirmed. A billing copy of your receipt has been dispatched to your e-mail.",amountPaid:"Amount Paid:",method:"Method:",status:"Status:",online:"Online",successFooter:"An email with details has been sent. We will verify the receipt ID and contact you within 15 minutes.",returnHome:"Return to Home",connectWorkspace:"Proceed to Workspace",connectingAuth:"Connecting to secure auth gateway...",creatingProfile:"Creating secure developer profile...",syncingAvatar:"Syncing custom avatar identity...",accessGranted:"Access Granted!",authorized:"Authorized",authPrompt:"You can now proceed to initialize your first project workspace."},ru:{services:"Услуги",expertise:"Экспертиза",scale:"Масштаб",login:"Войти",logout:"Выйти",startProject:"Начать проект",disconnect:"Выйти",heroTitle:"Лучшая веб-студия.",heroTitleSub:"Делаем сайты красиво.",heroDesc:"Проектируем, разрабатываем и запускаем быстрые сайты и мобильные приложения. Берем на себя инженерию, чтобы вы могли расти.",heroStatsProjects:"Проектов запущено",heroStatsUptime:"Время работы SLA",heroStatsUsers:"Пользователей",whatWeDo:"Что мы делаем",engineeredStability:"Разработано для стабильности.",designedGrowth:"Создано для роста.",cardWebTitle:"Разработка сайтов",cardWebDesc:"Высокопроизводительные, безопасные и SEO-оптимизированные веб-системы на современных фреймворках (React, Next.js, Node.js) с мгновенной загрузкой.",cardAppTitle:"Приложения iOS & Android",cardAppDesc:"Нативные и кроссплатформенные мобильные приложения с упором на UX, от дизайна до публикации в App Store и Google Play.",cardDesignTitle:"UI/UX Дизайн интерфейсов",cardDesignDesc:"Визуальные дизайн-системы, вызывающие доверие к бренду. Пиксельно-точные, доступные и конвертирующие пользовательские интерфейсы.",cardCloudTitle:"Облачная инфраструктура",cardCloudDesc:"Надежные CI/CD пайплайны, контейнеризация (Docker/Kubernetes) и масштабируемая архитектура на AWS, GCP и Vercel.",cardApiTitle:"Интеграции и API",cardApiDesc:"Бесшовное подключение CRM-систем, платежных шлюзов, ERP-каналов и защищенных корпоративных бэкенд-сервисов.",cardSupportTitle:"Поддержка и оптимизация",cardSupportDesc:"Послепусковая поддержка, аудит производительности, оптимизация скорости, обновления безопасности и обслуживание баз данных.",researchAreas:"Направления",threePillars:"Три столпа",scientificExecution:"научного исполнения",pillar1Title:"Высокопроизводительные веб-движки",pillar1Desc:"Создание веб-приложений с субсекундной загрузкой с использованием рендеринга на границе сети, слоев кэширования и чистой модульной архитектуры.",pillar2Title:"Адаптивные мобильные фреймворки",pillar2Desc:"Разработка мобильного ПО с аппаратным ускорением GPU для плавных анимаций 120 Гц, локальными БД и оффлайн-доступом.",pillar3Title:"Безопасное и автоматизированное облако",pillar3Desc:"Развертывание облачных кластеров с автоматическим масштабированием, защищенных файрволами, стандартными моделями авторизации и CI/CD.",selectedWork:"Портфолио",caseStudies:"Кейсы решений",builtSolutions:"готовых к запуску",visitWebsite:"Перейти на сайт",viewCase:"Смотреть кейс",byNumbers:"В цифрах",scaleSpeaks:"Масштаб, который говорит",itself:"сам за себя",numCardProjects:"Успешно запущенных веб- и мобильных проектов",numCardUptime:"Стандарты надежности аптайма и сборок",numCardEngineers:"Опытных инженеров и дизайнеров продуктов",numCardSpeed:"Среднее ускорение загрузки сайтов клиентов",getInvolved:"Сотрудничество",nextBreakthrough:"Следующий прорыв",startsYou:"начинается с вас",ctaDesc:"Есть идея сайта или мобильного приложения? Наша команда возьмет на себя проектирование, дизайн и деплой на iOS, Android и Web.",footerCopy:"Качество • Интеллект • Опыт. Все права защищены.",establishIdentity:"Создать профиль",authSubtitle:"Создайте профиль разработчика и выберите аватар для авторизации безопасного соединения.",fullName:"Полное имя",emailAddr:"Электронная почта",chooseAvatar:"Выберите аватар",password:"Пароль",createAccount:"Создать аккаунт",newWorkspace:"Новая рабочая область",workspaceSubtitle:"Опишите ваши требования и укажите функции песочницы. Наш ИИ проанализирует параметры и рассчитает смету.",workspaceName:"Имя рабочей области",envEngine:"Движок окружения",projRequirements:"Требования к проекту (AI-анализ)",analyzeReqs:"Анализировать требования",neuralAssessment:"Нейросетевой анализ",radarSubtitle:"Наш нейросетевой анализатор изучает требования и оценивает ресурсы.",aiCostBreakdown:"Смета от ИИ",aiSubtitle:"На основе ваших требований ИИ сформировал следующий счет-смету.",projectTarget:"Цель проекта",timeline:"Сроки выполнения",itemizedTasks:"Задачи сметы",invoicedTotal:"Итого к оплате",proceedCheckout:"Перейти к оплате",confirmPayment:"Подтвердить оплату",p2pSender:"Ваша карта или телефон (Отправитель)",p2pReceipt:"ID транзакции / Код чека (Click / Payme)",workspaceActive:"Песочница создана!",receiptEmailed:"Транзакция подтверждена. Электронный чек отправлен на ваш e-mail.",amountPaid:"Сумма перевода:",method:"Метод:",status:"Статус:",online:"Активен",successFooter:"Детали зачисления отправлены на почту. Мы проверим ID чека и свяжемся с вами в течение 15 минут.",returnHome:"Вернуться на главную",connectWorkspace:"Перейти к песочнице",connectingAuth:"Подключение к шлюзу авторизации...",creatingProfile:"Создание безопасного профиля...",syncingAvatar:"Синхронизация аватара...",accessGranted:"Доступ разрешен!",authorized:"Авторизован",authPrompt:"Теперь вы можете перейти к созданию своей первой рабочей области."},uz:{services:"Xizmatlar",expertise:"Ekspertiza",scale:"Miqyos",login:"Kirish",logout:"Chiqish",startProject:"Loyihani boshlash",disconnect:"Chiqish",heroTitle:"Eng yaxshi veb-studiya.",heroTitleSub:"Saytlarni chiroyli qilamiz.",heroDesc:"Tezkor veb-saytlar va mobil ilovalarni loyihalashtiramiz, ishlab chiqamiz va ishga tushiramiz. Biz texnologiyalarni o'z zimmamizga olamiz, toki siz o'sa olasiz.",heroStatsProjects:"Loyihalar ishga tushirilgan",heroStatsUptime:"SLA Uptime vaqti",heroStatsUsers:"Foydalanuvchilar",whatWeDo:"Biz nima qilamiz",engineeredStability:"Barqarorlik uchun mo'ljallangan.",designedGrowth:"O'sish uchun yaratilgan.",cardWebTitle:"Veb-saytlar yaratish",cardWebDesc:"Zamonaviy freymvorklarda (React, Next.js, Node.js) yaratilgan, tez yuklanadigan, xavfsiz va SEO-optimallashtirilgan veb-tizimlar.",cardAppTitle:"iOS va Android ilovalar",cardAppDesc:"UX-ga yo'naltirilgan, dizayndan tortib App Store va Google Play-da chop etishgacha bo'lgan nativ va krossplatformali mobil ilovalar.",cardDesignTitle:"UI/UX Interface dizayni",cardDesignDesc:"Brendga ishonch uyg'otadigan vizual dizayn tizimlari. Piksel darajasida aniq, qulay va mijozlarni jalb etuvchi interfeyslar.",cardCloudTitle:"Bulutli infratuzilma",cardCloudDesc:"AWS, GCP va Vercel platformalarida ishonchli CI/CD quvurlari, konteynerlashtirish (Docker/Kubernetes) va kengayuvchi arxitektura.",cardApiTitle:"Integratsiyalar va API",cardApiDesc:"CRM tizimlar, to'lov shlyuzlari, ERP kanallari va xavfsiz korporativ backend xizmatlarini uzluksiz ulash.",cardSupportTitle:"Qo'llab-quvvatlash va optimallashtirish",cardSupportDesc:"Ishga tushirilgandan keyingi yordam, samaradorlik auditi, tezlikni optimallashtirish, xavfsizlik yangilanishlari va MB xizmati.",researchAreas:"Tadqiqot yo'nalishlari",threePillars:"Uchta ustun",scientificExecution:"ilmiy bajarilish",pillar1Title:"Yuqori samarali veb-dvigatellar",pillar1Desc:"Edge rendering, kesh qatlamlari va toza modulli arxitektura yordamida soniyadan kam vaqtda yuklanadigan veb-ilovalar yaratish.",pillar2Title:"Moslashuvchan mobil freymvorklar",pillar2Desc:"Silliq 120Hz animatsiyalar, lokal MB va oflayn rejim uchun GPU apparat tezlashuvidan foydalanadigan mobil dasturlar yaratish.",pillar3Title:"Xavfsiz va avtomatlashtirilgan bulut",pillar3Desc:"Tarmoq ekranlari, standart avtorizatsiya va to'liq avtomatlashtirilgan CI/CD bilan himoyalangan avtomatik kengayuvchi bulut klasterlari.",selectedWork:"Tanlangan ishlar",caseStudies:"Tayyor yechimlar",builtSolutions:"keyslari",visitWebsite:"Saytga o'tish",viewCase:"Keysni ko'rish",byNumbers:"Raqamlarda",scaleSpeaks:"O'z-o'zidan gapiradigan",itself:"miqyos",numCardProjects:"Muvaffaqiyatli ishga tushirilgan veb va mobil loyihalar",numCardUptime:"Uptime va yig'ishning ishonchlilik standartlari",numCardEngineers:"Tajribali muhandislar va mahsulot dizaynerlari",numCardSpeed:"Mijozlar saytlari yuklanishining o'rtacha tezlashishi",getInvolved:"Hamkorlik",nextBreakthrough:"Keyingi yutuq",startsYou:"sizdan boshlanadi",ctaDesc:"Sayt yoki mobil ilova g'oyangiz bormi? Jamoamiz loyihalash, dizayn va iOS, Android hamda Web platformalarida ishga tushirishni o'z zimmasiga oladi.",footerCopy:"Sifat • Intellekt • Tajriba. Barcha huquqlar himoyalangan.",establishIdentity:"Shaxsni tasdiqlash",authSubtitle:"Xavfsiz ulanishni avtorizatsiya qilish uchun ishlab chiquvchi profilini yarating va avatar tanlang.",fullName:"To'liq ism",emailAddr:"Elektron pochta",chooseAvatar:"Avatar tanlang",password:"Parol",createAccount:"Hisob yaratish",newWorkspace:"Yangi ish maydoni",workspaceSubtitle:"Loyiha talablarini tavsiflang va parametrlarini ko'rsating. Bizning Sun'iy intellekt smetani hisoblab beradi.",workspaceName:"Ish maydoni nomi",envEngine:"Atrof-muhit dvigateli",projRequirements:"Loyiha talablari (AI-tahlil)",analyzeReqs:"Talablarni tahlil qilish",neuralAssessment:"Neyrotahlil",radarSubtitle:"Bizning neyrotahlil tizimimiz talablarni o'rganib chiqib, resurslarni baholamoqda.",aiCostBreakdown:"AI smetasi",aiSubtitle:"Sizning talablaringiz asosida Sun'iy intellekt quyidagi hisob-smetani shakllantirdi.",projectTarget:"Loyiha maqsadi",timeline:"Bajarilish muddati",itemizedTasks:"Smeta vazifalari",invoicedTotal:"Jami to'lov",proceedCheckout:"To'lovga o'tish",confirmPayment:"To'lovni tasdiqlash",p2pSender:"Koyangiz yoki telefon raqamingiz (Yuboruvchi)",p2pReceipt:"Tranzaksiya ID / Chek kodi (Click / Payme)",workspaceActive:"Ish maydoni yaratildi!",receiptEmailed:"Tranzaksiya tasdiqlandi. Elektron chek emailingizga yuborildi.",amountPaid:"To'lov summasi:",method:"Uslub:",status:"Holat:",online:"Faol",successFooter:"To'lov tafsilotlari yuborildi. Biz chek ID-sini tekshirib, 15 daqiqa ichida siz bilan bog'lanamiz.",returnHome:"Bosh sahifaga qaytish",connectWorkspace:"Ish maydoniga o'tish",connectingAuth:"Avtorizatsiya shlyuziga ulanish...",creatingProfile:"Xavfsiz profil yaratish...",syncingAvatar:"Avatarni sinxronlashtirish...",accessGranted:"Ruxsat berildi!",authorized:"Avtorizatsiyadan o'tdi",authPrompt:"Endi siz birinchi ish maydoningizni yaratishga o'tishingiz mumkin."}},hl=qd(t=>({lang:vy(),setLang:e=>t({lang:e})}));function _y({isOpen:t,onClose:e}){var Ee;const[n,i]=fe.useState(1),[r,s]=fe.useState(""),[a,o]=fe.useState(""),[l,c]=fe.useState(""),[f,p]=fe.useState(un[0].id),[h,v]=fe.useState({}),[_,y]=fe.useState(""),[m,u]=fe.useState(""),[g,x]=fe.useState("Cloud Sandbox"),[S,N]=fe.useState(""),[C,T]=fe.useState(null),[z,E]=fe.useState([]),[w,U]=fe.useState([]),[L,Z]=fe.useState("uzcard"),[P,O]=fe.useState(""),[q,Q]=fe.useState(""),[F,k]=fe.useState(!1),R=hl(J=>J.lang),D=Yd[R],K=pr(J=>J.isLoggedIn),H=pr(J=>J.user),Y=pr(J=>J.login),ae=fe.useRef(null);fe.useEffect(()=>{if(!t){const J=setTimeout(()=>{i(1),s(""),o(""),c(""),p(un[0].id),v({}),u(""),x("Cloud Sandbox"),N(""),T(null),E([]),U([]),Z("humo"),O(""),Q(""),k(!1)},500);return()=>clearTimeout(J)}},[t]),fe.useEffect(()=>{const J=ee=>{t&&ae.current&&!ae.current.contains(ee.target)&&ee.target.classList.contains("project-sidebar-overlay")&&e()};return document.addEventListener("mousedown",J),()=>document.removeEventListener("mousedown",J)},[t,e]),fe.useEffect(()=>{if(n==="ai_analysis"){E([]);const J={en:["Initializing QIX Intelligence Engine...","Parsing architectural description notes...","Scanning specifications for core components...",`Keywords matched for [${g}] node...`,"Running deep workload analysis on edge cluster...","Compiling microservices and compute resource cost...","AI Analysis complete! Generating invoice..."],ru:["Инициализация интеллектуального движка QIX...","Парсинг примечаний по архитектуре проекта...","Сканирование спецификаций для ключевых компонентов...",`Ключевые слова сопоставлены для узла [${g}]...`,"Глубокий анализ нагрузок на пограничный кластер...","Компиляция стоимости микросервисов и ресурсов...","Анализ завершен! Создание сметы..."],uz:["QIX sun'iy intellekt tizimi yuklanmoqda...","Loyiha arxitekturasi tahlil qilinmoqda...","Asosiy komponentlar spetsifikatsiyasi o'rganilmoqda...",`[${g}] tuguni uchun kalit so'zlar mos keldi...`,"Klasterdagi yuklamaning chuqur tahlili boshlandi...","Mikroxizmatlar va resurslar narxi hisoblanmoqda...","Tahlil yakunlandi! Smeta shakllantirilmoqda..."]}[R];let ee=0;const me=setInterval(()=>{if(ee<J.length)E(_e=>[..._e,J[ee]]),ee++;else{clearInterval(me);const _e=setInterval(()=>{C&&(clearInterval(_e),i("invoice"))},100)}},600);return()=>clearInterval(me)}},[n,g,C,R]),fe.useEffect(()=>{if(n==="processing_payment"){U([]);const J={en:["Connecting to secure payment gateway...","Locating transaction in Humo/Uzcard P2P ledger...","Verifying transfer reference ID with Click/Payme...","Confirming deposit to QIX Technologies vault...","Payment authorized. Transmitting invoice copy...","Initializing Sandbox container deploy context..."],ru:["Подключение к шлюзу авторизации платежей...","Поиск транзакции в реестре Humo/Uzcard...","Проверка ID перевода в базе Click/Payme...","Подтверждение зачисления на счет QIX Technologies...","Платеж авторизован. Отправка копии чека...","Инициализация контейнера песочницы..."],uz:["To'lov shlyuziga ulanish o'rnatilmoqda...","Tranzaksiyani Humo/Uzcard reestridan izlash...","Click/Payme bazasida o'tkazma ID-sini tekshirish...","QIX Technologies hisobiga pul kelganini tasdiqlash...","To'lov tasdiqlandi. Elektron chekni yuborish...","Loyiha konteyneri ishga tushirilmoqda..."]}[R];let ee=0;const me=setInterval(()=>{ee<J.length?(U(_e=>[..._e,J[ee]]),ee++):(clearInterval(me),setTimeout(()=>{i(3)},600))},600);return()=>clearInterval(me)}},[n,R]);const ce=(J,ee)=>{const me=J.trim().toLowerCase(),_e=[];let b=15e4;me.length<5?(_e.push({name:`Basic Sandbox Allocation (${ee})`,price:1e5}),b+=1e5):((me.includes("design")||me.includes("ui")||me.includes("ux")||me.includes("figma")||me.includes("interface"))&&(_e.push({name:"Figma UI/UX Design & Prototyping",price:45e4}),b+=45e4),(me.includes("database")||me.includes("db")||me.includes("sql")||me.includes("mongo")||me.includes("data")||me.includes("backend"))&&(_e.push({name:"High-Performance Database Node Setup",price:6e5}),b+=6e5),(me.includes("mobile")||me.includes("app")||me.includes("ios")||me.includes("android")||me.includes("phone"))&&(_e.push({name:"Mobile Frame Native Deployment",price:9e5}),b+=9e5),(me.includes("secure")||me.includes("security")||me.includes("auth")||me.includes("crypto")||me.includes("login"))&&(_e.push({name:"Cryptographic Authorization Gateway",price:65e4}),b+=65e4),_e.length<2&&(_e.push({name:"Core API Routing & Endpoint Infrastructure",price:4e5}),b+=4e5),_e.push({name:`Edge CD Pipeline (${ee})`,price:1e5}),b+=1e5);const M=new Intl.NumberFormat("uz-UZ",{style:"currency",currency:"UZS",maximumFractionDigits:0}).format(b);T({tasks:_e.map(j=>({...j,price:new Intl.NumberFormat("uz-UZ",{style:"currency",currency:"UZS",maximumFractionDigits:0}).format(j.price)})),totalPriceRaw:b,totalPrice:M,timeline:b>12e5?"14 Days":"7 Days"})},pe=J=>{navigator.clipboard.writeText(J),k(!0),setTimeout(()=>k(!1),2e3)},Ae=J=>{J.preventDefault();const ee={};if(r.trim()||(ee.name=R==="en"?"Full name is required":R==="uz"?"To'liq ism kiritilishi shart":"Имя обязательно"),a?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a)||(ee.email=R==="en"?"Invalid email format":R==="uz"?"Email formati noto'g'ri":"Неверный формат email"):ee.email=R==="en"?"Email is required":R==="uz"?"Email kiritilishi shart":"Email обязателен",l?l.length<6&&(ee.password=R==="en"?"At least 6 characters":R==="uz"?"Kamida 6 ta belgi":"Не менее 6 символов"):ee.password=R==="en"?"Password is required":R==="uz"?"Parol kiritilishi shart":"Пароль обязателен",Object.keys(ee).length>0){v(ee);return}v({}),i(2),y(D.connectingAuth),setTimeout(()=>{y(D.creatingProfile)},600),setTimeout(()=>{y(D.syncingAvatar)},1200),setTimeout(()=>{const _e=un.find(M=>M.id===f)||un[0],b=dl(_e.colors);Y(a,r.trim(),b),i(3)},1800)},Le=J=>{J.preventDefault();const ee={};if(m.trim()||(ee.projectName=R==="en"?"Project name is required":R==="uz"?"Loyiha nomi kiritilishi shart":"Имя проекта обязательно"),Object.keys(ee).length>0){v(ee);return}v({}),i("ai_analysis"),T(null),fetch("/api/analyze",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({projectName:m,projectType:g,projectNotes:S})}).then(me=>me.json()).then(me=>{const _e=me.tasks.map(M=>{let j=M.price;return typeof M.price=="number"&&(j=new Intl.NumberFormat("uz-UZ",{style:"currency",currency:"UZS",maximumFractionDigits:0}).format(M.price)),{name:M.name,price:j}});let b=me.totalPrice;typeof me.totalPrice=="number"&&(b=new Intl.NumberFormat("uz-UZ",{style:"currency",currency:"UZS",maximumFractionDigits:0}).format(me.totalPrice)),T({tasks:_e,totalPriceRaw:typeof me.totalPrice=="number"?me.totalPrice:parseFloat(String(me.totalPrice).replace(/[^0-9.]/g,"")),totalPrice:b,timeline:me.timeline||"7 Days"})}).catch(me=>{console.error("AI Analysis API failed, using fallback:",me),ce(S,g)})},we=J=>{J.preventDefault();const ee={};if(P.trim()||(ee.senderInfo=R==="en"?"Enter sender info":R==="uz"?"Yuboruvchi ma'lumotini kiriting":"Введите данные отправителя"),q.trim()||(ee.transactionId=R==="en"?"Enter receipt ID":R==="uz"?"Chek kodi kiritilishi shart":"Введите код чека"),Object.keys(ee).length>0){v(ee);return}v({}),i("processing_payment");const me=C.tasks.map(_e=>`${_e.name}: ${_e.price}`).join(", ");fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({access_key:"6b251218-8d3a-4b5f-8227-259b0c552263",subject:`💳 PAID QIX Project: ${m} (${C.totalPrice})`,from_name:"QIX Technologies UZS Billing Gateway",client_name:H?H.name:"Authorized Client",client_email:H?H.email:"billing@qix.tech",workspace_name:`qix-sandbox-${m.toLowerCase().replace(/\s+/g,"-")}`,engine_type:g,total_invoiced:C.totalPrice,estimated_timeline:C.timeline,invoice_items:me,payment_status:`PAID (Simulated P2P ${L.toUpperCase()} Transfer)`,sender_card_or_phone:P,click_payme_receipt_id:q,notes:S||"No notes provided."})}).catch(_e=>console.error("Failed to dispatch payment notification:",_e))},vt=L==="humo"?"9860 1201 5567 4821":"8600 1402 7839 9924";return d.jsx("div",{className:`project-sidebar-overlay ${t?"open":""}`,children:d.jsxs("div",{ref:ae,className:`project-sidebar ${t?"open":""}`,children:[d.jsx("button",{className:"project-sidebar-close",onClick:e,"aria-label":"Close sidebar",children:d.jsx("svg",{viewBox:"0 0 24 24",width:"24",height:"24",children:d.jsx("path",{d:"M18 6 6 18M6 6l12 12",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),d.jsxs("div",{className:"project-sidebar-inner",children:[n===1&&d.jsx(d.Fragment,{children:K?d.jsxs("div",{className:"sidebar-step-container",children:[d.jsxs("div",{className:"sidebar-profile-header",children:[d.jsx("img",{className:"sidebar-profile-avatar",src:H.avatar,alt:H.name}),d.jsxs("div",{children:[d.jsx("h4",{className:"sidebar-profile-name",children:H.name}),d.jsx("p",{className:"sidebar-profile-email",children:H.email})]})]}),d.jsx("h3",{className:"sidebar-title font-instrument",style:{marginTop:"20px"},children:D.newWorkspace}),d.jsx("p",{className:"sidebar-subtitle",children:D.workspaceSubtitle}),d.jsxs("form",{onSubmit:Le,className:"sidebar-form",children:[d.jsxs("div",{className:"input-group",children:[d.jsx("label",{htmlFor:"proj-name",children:D.workspaceName}),d.jsx("input",{type:"text",id:"proj-name",placeholder:"my-quantum-engine",value:m,onChange:J=>u(J.target.value),className:h.projectName?"input-error":""}),h.projectName&&d.jsx("span",{className:"error-message-text",children:h.projectName})]}),d.jsxs("div",{className:"input-group",children:[d.jsx("label",{htmlFor:"proj-type",children:D.envEngine}),d.jsxs("select",{id:"proj-type",value:g,onChange:J=>x(J.target.value),style:{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"12px",padding:"14px 18px",color:"#fff",fontSize:"14px",fontFamily:"inherit",width:"100%",outline:"none",cursor:"pointer"},children:[d.jsx("option",{value:"Cloud Sandbox",style:{background:"#0a0a0f"},children:"Cloud Sandbox (General)"}),d.jsx("option",{value:"Quantum Engine",style:{background:"#0a0a0f"},children:"Quantum Simulator Node"}),d.jsx("option",{value:"AI Synthesis Node",style:{background:"#0a0a0f"},children:"AI LLM Training Kernel"})]})]}),d.jsxs("div",{className:"input-group",children:[d.jsx("label",{htmlFor:"proj-notes",children:D.projRequirements}),d.jsx("textarea",{id:"proj-notes",placeholder:R==="en"?"Example: I need Figma UI/UX, MongoDB, and deployment pipeline...":R==="uz"?"Namuna: Figma UI/UX dizayn, MongoDB va deploy quvuri kerak...":"Пример: Нужен дизайн в Figma, база данных MongoDB, и деплой проекта...",rows:"4",value:S,onChange:J=>N(J.target.value),style:{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"12px",padding:"14px 18px",color:"#fff",fontSize:"14px",fontFamily:"inherit",width:"100%",outline:"none",resize:"none"}})]}),d.jsx("button",{type:"submit",className:"sidebar-submit-btn",style:{marginTop:"16px"},children:d.jsxs("span",{className:"btn-content-inner",children:[d.jsxs("span",{className:"btn-slide-item",children:[d.jsx("span",{children:D.analyzeReqs}),d.jsx("svg",{className:"btn-arrow",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:d.jsx("path",{d:"M3 8h10M9 4l4 4-4 4"})})]}),d.jsxs("span",{className:"btn-slide-item btn-slide-item-hover",children:[d.jsx("span",{children:D.analyzeReqs}),d.jsx("svg",{className:"btn-arrow",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:d.jsx("path",{d:"M3 8h10M9 4l4 4-4 4"})})]})]})})]})]}):d.jsxs("div",{className:"sidebar-step-container",children:[d.jsx("div",{className:"sidebar-decor-icon",children:"✦"}),d.jsx("h3",{className:"sidebar-title font-instrument",children:D.establishIdentity}),d.jsx("p",{className:"sidebar-subtitle",children:D.authSubtitle}),d.jsxs("form",{onSubmit:Ae,className:"sidebar-form",children:[d.jsxs("div",{className:"input-group",children:[d.jsx("label",{htmlFor:"auth-name",children:D.fullName}),d.jsx("input",{type:"text",id:"auth-name",placeholder:"Alex Rivera",value:r,onChange:J=>s(J.target.value),className:h.name?"input-error":""}),h.name&&d.jsx("span",{className:"error-message-text",children:h.name})]}),d.jsxs("div",{className:"input-group",children:[d.jsx("label",{htmlFor:"auth-email",children:D.emailAddr}),d.jsx("input",{type:"email",id:"auth-email",placeholder:"alex@gmail.com",value:a,onChange:J=>o(J.target.value),className:h.email?"input-error":""}),h.email&&d.jsx("span",{className:"error-message-text",children:h.email})]}),d.jsxs("div",{className:"input-group",children:[d.jsx("label",{children:D.chooseAvatar}),d.jsx("div",{className:"avatar-selection-grid",style:{marginTop:"8px",marginBottom:"8px"},children:un.map(J=>{const ee={background:`linear-gradient(135deg, ${J.colors[0]} 0%, ${J.colors[1]} 100%)`};return d.jsx("button",{type:"button",className:`avatar-option-btn ${f===J.id?"active":""}`,style:ee,onClick:()=>p(J.id),"aria-label":J.name,title:J.name},J.id)})})]}),d.jsxs("div",{className:"input-group",children:[d.jsx("label",{htmlFor:"auth-pass",children:D.password}),d.jsx("input",{type:"password",id:"auth-pass",placeholder:"••••••••",value:l,onChange:J=>c(J.target.value),className:h.password?"input-error":""}),h.password&&d.jsx("span",{className:"error-message-text",children:h.password})]}),d.jsx("button",{type:"submit",className:"sidebar-submit-btn",children:d.jsxs("span",{className:"btn-content-inner",children:[d.jsxs("span",{className:"btn-slide-item",children:[d.jsx("span",{children:D.createAccount}),d.jsx("svg",{className:"btn-arrow",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:d.jsx("path",{d:"M3 8h10M9 4l4 4-4 4"})})]}),d.jsxs("span",{className:"btn-slide-item btn-slide-item-hover",children:[d.jsx("span",{children:D.createAccount}),d.jsx("svg",{className:"btn-arrow",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:d.jsx("path",{d:"M3 8h10M9 4l4 4-4 4"})})]})]})})]})]})}),n==="ai_analysis"&&d.jsxs("div",{className:"sidebar-step-container",children:[d.jsx("h3",{className:"sidebar-title font-instrument",children:D.neuralAssessment}),d.jsx("p",{className:"sidebar-subtitle",children:D.radarSubtitle}),d.jsxs("div",{className:"ai-analysis-radar",children:[d.jsx("div",{className:"radar-ring"}),d.jsx("div",{className:"radar-sweep"}),d.jsx("div",{className:"radar-core"})]}),d.jsx("div",{className:"analysis-log-container",children:z.map((J,ee)=>d.jsxs("div",{className:"analysis-log-line",children:[d.jsx("span",{style:{color:"#a855f7",marginRight:"6px"},children:">"}),J]},ee))})]}),n==="invoice"&&C&&d.jsxs("div",{className:"sidebar-step-container",children:[d.jsx("h3",{className:"sidebar-title font-instrument",children:D.aiCostBreakdown}),d.jsx("p",{className:"sidebar-subtitle",children:D.aiSubtitle}),d.jsxs("div",{className:"invoice-container",children:[d.jsxs("div",{className:"invoice-header-row",children:[d.jsxs("div",{children:[d.jsx("span",{className:"invoice-label",children:D.projectTarget}),d.jsx("div",{className:"invoice-val",children:m})]}),d.jsxs("div",{style:{textAlign:"right"},children:[d.jsx("span",{className:"invoice-label",children:D.timeline}),d.jsx("div",{className:"invoice-val",children:C.timeline})]})]}),d.jsxs("div",{className:"invoice-task-list",children:[d.jsx("span",{className:"invoice-label",children:D.itemizedTasks}),C.tasks.map((J,ee)=>d.jsxs("div",{className:"invoice-task-item",children:[d.jsx("span",{className:"invoice-task-name",children:J.name}),d.jsx("span",{className:"invoice-task-price",children:J.price})]},ee))]}),d.jsxs("div",{className:"invoice-total-row",children:[d.jsxs("div",{children:[d.jsx("span",{className:"invoice-label",children:D.invoicedTotal}),d.jsx("p",{style:{fontSize:"11px",color:"rgba(255, 255, 255, 0.4)"},children:R==="en"?"Commission 0%":R==="uz"?"Komissiya 0%":"Комиссия 0%"})]}),d.jsx("div",{className:"invoice-total-price",children:C.totalPrice})]})]}),d.jsx("button",{className:"sidebar-submit-btn",onClick:()=>i("checkout"),children:d.jsxs("span",{className:"btn-content-inner",children:[d.jsxs("span",{className:"btn-slide-item",children:[d.jsx("span",{children:D.proceedCheckout}),d.jsx("svg",{className:"btn-arrow",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:d.jsx("path",{d:"M3 8h10M9 4l4 4-4 4"})})]}),d.jsxs("span",{className:"btn-slide-item btn-slide-item-hover",children:[d.jsx("span",{children:D.proceedCheckout}),d.jsx("svg",{className:"btn-arrow",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:d.jsx("path",{d:"M3 8h10M9 4l4 4-4 4"})})]})]})})]}),n==="checkout"&&C&&d.jsxs("div",{className:"sidebar-step-container",children:[d.jsx("h3",{className:"sidebar-title font-instrument",children:"Humo / Uzcard P2P"}),d.jsxs("p",{className:"sidebar-subtitle",style:{marginBottom:"16px"},children:[R==="en"?"Transfer ":R==="uz"?"O'tkazing: ":"Переведите ",d.jsx("strong",{children:C.totalPrice}),R==="en"?" to the card below via local mobile banking (Humo/Uzcard) and paste your transaction receipt code.":R==="uz"?" quyidagi kartaga va tasdiqlash uchun chek ID-sini kiriting.":" на карту ниже через Click/Payme и вставьте код чека для подтверждения."]}),d.jsxs("div",{style:{display:"flex",gap:"8px",marginBottom:"16px"},children:[d.jsx("button",{type:"button",className:`settings-tab-btn ${L==="humo"?"active":""}`,onClick:()=>Z("humo"),style:{flex:1,padding:"10px",fontSize:"12px"},children:"HUMO"}),d.jsx("button",{type:"button",className:`settings-tab-btn ${L==="uzcard"?"active":""}`,onClick:()=>Z("uzcard"),style:{flex:1,padding:"10px",fontSize:"12px"},children:"UZCARD"})]}),d.jsxs("div",{className:`checkout-card-preview ${L==="humo"?"humo-theme":"uzcard-theme"}`,children:[d.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start"},children:[d.jsx("div",{className:"card-preview-chip"}),d.jsx("span",{style:{fontSize:"13px",fontWeight:"800",letterSpacing:"1px",color:"#fff"},children:L==="humo"?"HUMO":"UZCARD"})]}),d.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:"16px"},children:[d.jsx("div",{className:"card-preview-number",style:{marginTop:0,fontSize:"18px"},children:vt}),d.jsx("button",{type:"button",onClick:()=>pe(vt.replace(/\s/g,"")),style:{background:"rgba(255,255,255,0.1)",border:"1px solid rgba(255,255,255,0.2)",borderRadius:"6px",color:"#fff",fontSize:"10px",padding:"4px 8px",cursor:"pointer",transition:"all 0.2s"},children:F?"Copied!":"Copy"})]}),d.jsxs("div",{className:"card-preview-bottom",children:[d.jsxs("div",{children:[d.jsx("div",{className:"card-preview-holder",children:R==="en"?"Recipient":R==="uz"?"Qabul qiluvchi":"Получатель"}),d.jsx("div",{style:{fontSize:"13px",fontWeight:"600"},children:"ASHRAF ASKAROV"})]}),d.jsxs("div",{style:{textAlign:"right"},children:[d.jsx("div",{className:"card-preview-holder",children:R==="en"?"Currency":R==="uz"?"Valyuta":"Валюта"}),d.jsx("div",{className:"card-preview-expiry",style:{fontSize:"12px",fontWeight:"700"},children:"UZS (so'm)"})]})]})]}),d.jsxs("form",{onSubmit:we,className:"sidebar-form",children:[d.jsxs("div",{className:"input-group",children:[d.jsx("label",{htmlFor:"p2p-sender",children:D.p2pSender}),d.jsx("input",{type:"text",id:"p2p-sender",placeholder:R==="en"?"9860 •••• •••• •••• or phone number":R==="uz"?"9860 •••• •••• •••• yoki telefon":"9860 •••• •••• •••• или +998...",value:P,onChange:J=>O(J.target.value),className:h.senderInfo?"input-error":""}),h.senderInfo&&d.jsx("span",{className:"error-message-text",children:h.senderInfo})]}),d.jsxs("div",{className:"input-group",children:[d.jsx("label",{htmlFor:"p2p-receipt",children:D.p2pReceipt}),d.jsx("input",{type:"text",id:"p2p-receipt",placeholder:R==="en"?"Example: 582914839":R==="uz"?"Namuna: 582914839":"Пример: 582914839",value:q,onChange:J=>Q(J.target.value),className:h.transactionId?"input-error":""}),h.transactionId&&d.jsx("span",{className:"error-message-text",children:h.transactionId})]}),d.jsx("button",{type:"submit",className:"sidebar-submit-btn",style:{marginTop:"16px"},children:d.jsxs("span",{className:"btn-content-inner",children:[d.jsxs("span",{className:"btn-slide-item",children:[d.jsx("span",{children:D.confirmPayment}),d.jsx("svg",{className:"btn-arrow",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:d.jsx("path",{d:"M3 8h10M9 4l4 4-4 4"})})]}),d.jsxs("span",{className:"btn-slide-item btn-slide-item-hover",children:[d.jsx("span",{children:D.confirmPayment}),d.jsx("svg",{className:"btn-arrow",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:d.jsx("path",{d:"M3 8h10M9 4l4 4-4 4"})})]})]})})]})]}),n==="processing_payment"&&d.jsxs("div",{className:"sidebar-step-container",children:[d.jsx("h3",{className:"sidebar-title font-instrument",children:R==="en"?"Payment Verification":R==="uz"?"To'lovni tekshirish":"Проверка платежа"}),d.jsx("p",{className:"sidebar-subtitle",children:R==="en"?"Verifying your P2P receipt in Click/Payme network registry...":R==="uz"?"Tranzaksiyani Click/Payme tarmog'ida tekshirmoqdamiz...":"Проверка P2P транзакции в реестре Click/Payme. Пожалуйста, подождите."}),d.jsx("div",{className:"sidebar-loading-container",style:{margin:"16px 0 32px"},children:d.jsxs("div",{className:"loading-spinner-wrap",children:[d.jsx("div",{className:"pulse-loader-ring",style:{borderColor:"rgba(168, 85, 247, 0.4) transparent"}}),d.jsx("div",{className:"pulse-loader-core",style:{background:"#a855f7"}})]})}),d.jsx("div",{className:"analysis-log-container",style:{color:"#22c55e"},children:w.map((J,ee)=>d.jsxs("div",{className:"analysis-log-line",children:[d.jsx("span",{style:{color:"#22c55e",marginRight:"6px"},children:"✓"}),J]},ee))})]}),n===2&&d.jsxs("div",{className:"sidebar-step-container sidebar-loading-container",children:[d.jsxs("div",{className:"loading-spinner-wrap",children:[d.jsx("div",{className:"pulse-loader-ring"}),d.jsx("div",{className:"pulse-loader-core"})]}),d.jsx("h4",{className:"loading-title",children:R==="en"?"Establishing Connection":R==="uz"?"Ulanish o'rnatilmoqda":"Установка соединения"}),d.jsx("p",{className:"loading-subtitle",children:_})]}),n===3&&d.jsx(d.Fragment,{children:m?d.jsxs("div",{className:"sidebar-step-container sidebar-success-container",children:[d.jsx("div",{className:"success-icon-wrap",children:d.jsx("svg",{viewBox:"0 0 24 24",width:"48",height:"48",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:d.jsx("polyline",{points:"20 6 9 17 4 12"})})}),d.jsx("h3",{className:"sidebar-title font-instrument",style:{marginTop:"24px"},children:D.workspaceActive}),d.jsx("p",{className:"sidebar-subtitle",children:D.receiptEmailed}),C&&d.jsxs("div",{className:"success-details-card",children:[d.jsxs("div",{className:"success-details-row",children:[d.jsx("span",{children:"Workspace:"}),d.jsxs("strong",{children:["qix-sandbox-",m.toLowerCase().replace(/\s+/g,"-")]})]}),d.jsxs("div",{className:"success-details-row",children:[d.jsx("span",{children:"Engine:"}),d.jsx("strong",{children:g})]}),d.jsxs("div",{className:"success-details-row",children:[d.jsx("span",{children:D.amountPaid}),d.jsx("strong",{style:{color:"#22c55e",fontFamily:"monospace"},children:C.totalPrice})]}),d.jsxs("div",{className:"success-details-row",children:[d.jsx("span",{children:D.method}),d.jsxs("strong",{children:["P2P (",L.toUpperCase(),")"]})]}),d.jsxs("div",{className:"success-details-row",children:[d.jsx("span",{children:D.status}),d.jsx("strong",{className:"status-badge-active",children:D.online})]})]}),d.jsx("p",{className:"success-footer-text",children:D.successFooter}),d.jsx("button",{className:"sidebar-close-btn",onClick:e,children:D.returnHome})]}):d.jsxs("div",{className:"sidebar-step-container sidebar-success-container",children:[d.jsx("div",{className:"success-icon-wrap",children:d.jsx("svg",{viewBox:"0 0 24 24",width:"48",height:"48",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:d.jsx("polyline",{points:"20 6 9 17 4 12"})})}),d.jsx("h3",{className:"sidebar-title font-instrument",style:{marginTop:"24px"},children:D.accessGranted}),d.jsx("p",{className:"sidebar-subtitle",children:R==="en"?`Developer profile ${r} has been successfully registered.`:R==="uz"?`Dasturchi profili ${r} muvaffaqiyatli ro'yxatdan o'tdi.`:`Профиль разработчика ${r} был успешно зарегистрирован.`}),d.jsxs("div",{className:"success-details-card",children:[d.jsxs("div",{className:"success-details-row",style:{alignItems:"center"},children:[d.jsx("span",{children:"Identity:"}),d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[d.jsx("img",{className:"sidebar-profile-avatar",src:dl(((Ee=un.find(J=>J.id===f))==null?void 0:Ee.colors)||un[0].colors),alt:r,style:{width:"24px",height:"24px",margin:0}}),d.jsx("strong",{children:r})]})]}),d.jsxs("div",{className:"success-details-row",children:[d.jsx("span",{children:"Access:"}),d.jsx("strong",{className:"status-badge-active",children:D.authorized})]})]}),d.jsx("p",{className:"success-footer-text",style:{marginBottom:"24px"},children:D.authPrompt}),d.jsx("button",{className:"sidebar-close-btn",onClick:()=>{i(1),v({})},style:{background:"#fff",color:"#0a0a0f",border:"none"},children:D.connectWorkspace})]})})]})]})})}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $d="160",xy=0,wf=1,yy=2,pv=1,Sy=2,ni=3,qi=0,rn=1,si=2,ji=0,ds=1,fl=2,Af=3,bf=4,Ey=5,or=100,My=101,Ty=102,Cf=103,Rf=104,wy=200,Ay=201,by=202,Cy=203,Gu=204,Vu=205,Ry=206,Ny=207,Py=208,Ly=209,Dy=210,Iy=211,Uy=212,Fy=213,ky=214,Oy=0,zy=1,By=2,pl=3,Hy=4,jy=5,Gy=6,Vy=7,mv=0,Wy=1,Xy=2,Gi=0,qy=1,Yy=2,$y=3,Ky=4,Zy=5,Qy=6,gv=300,Ss=301,Es=302,Wu=303,Xu=304,Ol=306,qu=1e3,Fn=1001,Yu=1002,qt=1003,Nf=1004,yc=1005,En=1006,Jy=1007,Ta=1008,Vi=1009,eS=1010,tS=1011,Kd=1012,vv=1013,Pi=1014,Li=1015,wa=1016,_v=1017,xv=1018,mr=1020,nS=1021,kn=1023,iS=1024,rS=1025,gr=1026,Ms=1027,sS=1028,yv=1029,aS=1030,Sv=1031,Ev=1033,Sc=33776,Ec=33777,Mc=33778,Tc=33779,Pf=35840,Lf=35841,Df=35842,If=35843,Mv=36196,Uf=37492,Ff=37496,kf=37808,Of=37809,zf=37810,Bf=37811,Hf=37812,jf=37813,Gf=37814,Vf=37815,Wf=37816,Xf=37817,qf=37818,Yf=37819,$f=37820,Kf=37821,wc=36492,Zf=36494,Qf=36495,oS=36283,Jf=36284,ep=36285,tp=36286,Tv=3e3,vr=3001,lS=3200,cS=3201,uS=0,dS=1,Mn="",Pt="srgb",mi="srgb-linear",Zd="display-p3",zl="display-p3-linear",ml="linear",st="srgb",gl="rec709",vl="p3",Cr=7680,np=519,hS=512,fS=513,pS=514,wv=515,mS=516,gS=517,vS=518,_S=519,ip=35044,rp="300 es",$u=1035,li=2e3,_l=2001;class Cs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let sp=1234567;const ia=Math.PI/180,Aa=180/Math.PI;function Rs(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ot[t&255]+Ot[t>>8&255]+Ot[t>>16&255]+Ot[t>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[n&63|128]+Ot[n>>8&255]+"-"+Ot[n>>16&255]+Ot[n>>24&255]+Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]).toLowerCase()}function Yt(t,e,n){return Math.max(e,Math.min(n,t))}function Qd(t,e){return(t%e+e)%e}function xS(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function yS(t,e,n){return t!==e?(n-t)/(e-t):0}function ra(t,e,n){return(1-n)*t+n*e}function SS(t,e,n,i){return ra(t,e,1-Math.exp(-n*i))}function ES(t,e=1){return e-Math.abs(Qd(t,e*2)-e)}function MS(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function TS(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function wS(t,e){return t+Math.floor(Math.random()*(e-t+1))}function AS(t,e){return t+Math.random()*(e-t)}function bS(t){return t*(.5-Math.random())}function CS(t){t!==void 0&&(sp=t);let e=sp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function RS(t){return t*ia}function NS(t){return t*Aa}function Ku(t){return(t&t-1)===0&&t!==0}function PS(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function xl(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function LS(t,e,n,i,r){const s=Math.cos,a=Math.sin,o=s(n/2),l=a(n/2),c=s((e+i)/2),f=a((e+i)/2),p=s((e-i)/2),h=a((e-i)/2),v=s((i-e)/2),_=a((i-e)/2);switch(r){case"XYX":t.set(o*f,l*p,l*h,o*c);break;case"YZY":t.set(l*h,o*f,l*p,o*c);break;case"ZXZ":t.set(l*p,l*h,o*f,o*c);break;case"XZX":t.set(o*f,l*_,l*v,o*c);break;case"YXY":t.set(l*v,o*f,l*_,o*c);break;case"ZYZ":t.set(l*_,l*v,o*f,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Vr(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Vt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const ap={DEG2RAD:ia,RAD2DEG:Aa,generateUUID:Rs,clamp:Yt,euclideanModulo:Qd,mapLinear:xS,inverseLerp:yS,lerp:ra,damp:SS,pingpong:ES,smoothstep:MS,smootherstep:TS,randInt:wS,randFloat:AS,randFloatSpread:bS,seededRandom:CS,degToRad:RS,radToDeg:NS,isPowerOfTwo:Ku,ceilPowerOfTwo:PS,floorPowerOfTwo:xl,setQuaternionFromProperEuler:LS,normalize:Vt,denormalize:Vr};class Je{constructor(e=0,n=0){Je.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,n,i,r,s,a,o,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=o,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=a,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],f=i[4],p=i[7],h=i[2],v=i[5],_=i[8],y=r[0],m=r[3],u=r[6],g=r[1],x=r[4],S=r[7],N=r[2],C=r[5],T=r[8];return s[0]=a*y+o*g+l*N,s[3]=a*m+o*x+l*C,s[6]=a*u+o*S+l*T,s[1]=c*y+f*g+p*N,s[4]=c*m+f*x+p*C,s[7]=c*u+f*S+p*T,s[2]=h*y+v*g+_*N,s[5]=h*m+v*x+_*C,s[8]=h*u+v*S+_*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8];return n*a*f-n*o*c-i*s*f+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],p=f*a-o*c,h=o*l-f*s,v=c*s-a*l,_=n*p+i*h+r*v;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=p*y,e[1]=(r*c-f*i)*y,e[2]=(o*i-r*a)*y,e[3]=h*y,e[4]=(f*n-r*l)*y,e[5]=(r*s-o*n)*y,e[6]=v*y,e[7]=(i*l-c*n)*y,e[8]=(a*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Ac.makeScale(e,n)),this}rotate(e){return this.premultiply(Ac.makeRotation(-e)),this}translate(e,n){return this.premultiply(Ac.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ac=new Ge;function Av(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function yl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function DS(){const t=yl("canvas");return t.style.display="block",t}const op={};function sa(t){t in op||(op[t]=!0,console.warn(t))}const lp=new Ge().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),cp=new Ge().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),to={[mi]:{transfer:ml,primaries:gl,toReference:t=>t,fromReference:t=>t},[Pt]:{transfer:st,primaries:gl,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[zl]:{transfer:ml,primaries:vl,toReference:t=>t.applyMatrix3(cp),fromReference:t=>t.applyMatrix3(lp)},[Zd]:{transfer:st,primaries:vl,toReference:t=>t.convertSRGBToLinear().applyMatrix3(cp),fromReference:t=>t.applyMatrix3(lp).convertLinearToSRGB()}},IS=new Set([mi,zl]),Qe={enabled:!0,_workingColorSpace:mi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!IS.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=to[e].toReference,r=to[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return to[t].primaries},getTransfer:function(t){return t===Mn?ml:to[t].transfer}};function hs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function bc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Rr;class bv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Rr===void 0&&(Rr=yl("canvas")),Rr.width=e.width,Rr.height=e.height;const i=Rr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Rr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=yl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=hs(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(hs(n[i]/255)*255):n[i]=hs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let US=0;class Cv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:US++}),this.uuid=Rs(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Cc(r[a].image)):s.push(Cc(r[a]))}else s=Cc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Cc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?bv.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let FS=0;class pn extends Cs{constructor(e=pn.DEFAULT_IMAGE,n=pn.DEFAULT_MAPPING,i=Fn,r=Fn,s=En,a=Ta,o=kn,l=Vi,c=pn.DEFAULT_ANISOTROPY,f=Mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:FS++}),this.uuid=Rs(),this.name="",this.source=new Cv(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof f=="string"?this.colorSpace=f:(sa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=f===vr?Pt:Mn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qu:e.x=e.x-Math.floor(e.x);break;case Fn:e.x=e.x<0?0:1;break;case Yu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qu:e.y=e.y-Math.floor(e.y);break;case Fn:e.y=e.y<0?0:1;break;case Yu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return sa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Pt?vr:Tv}set encoding(e){sa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===vr?Pt:Mn}}pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=gv;pn.DEFAULT_ANISOTROPY=1;class Lt{constructor(e=0,n=0,i=0,r=1){Lt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],p=l[8],h=l[1],v=l[5],_=l[9],y=l[2],m=l[6],u=l[10];if(Math.abs(f-h)<.01&&Math.abs(p-y)<.01&&Math.abs(_-m)<.01){if(Math.abs(f+h)<.1&&Math.abs(p+y)<.1&&Math.abs(_+m)<.1&&Math.abs(c+v+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(c+1)/2,S=(v+1)/2,N=(u+1)/2,C=(f+h)/4,T=(p+y)/4,z=(_+m)/4;return x>S&&x>N?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=C/i,s=T/i):S>N?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=C/r,s=z/r):N<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(N),i=T/s,r=z/s),this.set(i,r,s,n),this}let g=Math.sqrt((m-_)*(m-_)+(p-y)*(p-y)+(h-f)*(h-f));return Math.abs(g)<.001&&(g=1),this.x=(m-_)/g,this.y=(p-y)/g,this.z=(h-f)/g,this.w=Math.acos((c+v+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class kS extends Cs{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Lt(0,0,e,n),this.scissorTest=!1,this.viewport=new Lt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(sa("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===vr?Pt:Mn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new pn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Cv(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mr extends kS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Rv extends pn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class OS extends pn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class La{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],f=i[r+2],p=i[r+3];const h=s[a+0],v=s[a+1],_=s[a+2],y=s[a+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=f,e[n+3]=p;return}if(o===1){e[n+0]=h,e[n+1]=v,e[n+2]=_,e[n+3]=y;return}if(p!==y||l!==h||c!==v||f!==_){let m=1-o;const u=l*h+c*v+f*_+p*y,g=u>=0?1:-1,x=1-u*u;if(x>Number.EPSILON){const N=Math.sqrt(x),C=Math.atan2(N,u*g);m=Math.sin(m*C)/N,o=Math.sin(o*C)/N}const S=o*g;if(l=l*m+h*S,c=c*m+v*S,f=f*m+_*S,p=p*m+y*S,m===1-o){const N=1/Math.sqrt(l*l+c*c+f*f+p*p);l*=N,c*=N,f*=N,p*=N}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],f=i[r+3],p=s[a],h=s[a+1],v=s[a+2],_=s[a+3];return e[n]=o*_+f*p+l*v-c*h,e[n+1]=l*_+f*h+c*p-o*v,e[n+2]=c*_+f*v+o*h-l*p,e[n+3]=f*_-o*p-l*h-c*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),f=o(r/2),p=o(s/2),h=l(i/2),v=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=h*f*p+c*v*_,this._y=c*v*p-h*f*_,this._z=c*f*_+h*v*p,this._w=c*f*p-h*v*_;break;case"YXZ":this._x=h*f*p+c*v*_,this._y=c*v*p-h*f*_,this._z=c*f*_-h*v*p,this._w=c*f*p+h*v*_;break;case"ZXY":this._x=h*f*p-c*v*_,this._y=c*v*p+h*f*_,this._z=c*f*_+h*v*p,this._w=c*f*p-h*v*_;break;case"ZYX":this._x=h*f*p-c*v*_,this._y=c*v*p+h*f*_,this._z=c*f*_-h*v*p,this._w=c*f*p+h*v*_;break;case"YZX":this._x=h*f*p+c*v*_,this._y=c*v*p+h*f*_,this._z=c*f*_-h*v*p,this._w=c*f*p-h*v*_;break;case"XZY":this._x=h*f*p-c*v*_,this._y=c*v*p-h*f*_,this._z=c*f*_+h*v*p,this._w=c*f*p+h*v*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],f=n[6],p=n[10],h=i+o+p;if(h>0){const v=.5/Math.sqrt(h+1);this._w=.25/v,this._x=(f-l)*v,this._y=(s-c)*v,this._z=(a-r)*v}else if(i>o&&i>p){const v=2*Math.sqrt(1+i-o-p);this._w=(f-l)/v,this._x=.25*v,this._y=(r+a)/v,this._z=(s+c)/v}else if(o>p){const v=2*Math.sqrt(1+o-i-p);this._w=(s-c)/v,this._x=(r+a)/v,this._y=.25*v,this._z=(l+f)/v}else{const v=2*Math.sqrt(1+p-i-o);this._w=(a-r)/v,this._x=(s+c)/v,this._y=(l+f)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Yt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+a*o+r*c-s*l,this._y=r*f+a*l+s*o-i*c,this._z=s*f+a*c+i*l-r*o,this._w=a*f-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const v=1-n;return this._w=v*a+n*this._w,this._x=v*i+n*this._x,this._y=v*r+n*this._y,this._z=v*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),f=Math.atan2(c,o),p=Math.sin((1-n)*f)/c,h=Math.sin(n*f)/c;return this._w=a*p+this._w*h,this._x=i*p+this._x*h,this._y=r*p+this._y*h,this._z=s*p+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,n=0,i=0){X.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(up.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(up.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),f=2*(o*n-s*r),p=2*(s*i-a*n);return this.x=n+l*c+a*p-o*f,this.y=i+l*f+o*c-s*p,this.z=r+l*p+s*f-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Rc.copy(this).projectOnVector(e),this.sub(Rc)}reflect(e){return this.sub(Rc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Rc=new X,up=new La;class Da{constructor(e=new X(1/0,1/0,1/0),n=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Rn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Rn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Rn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Rn):Rn.fromBufferAttribute(s,a),Rn.applyMatrix4(e.matrixWorld),this.expandByPoint(Rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),no.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),no.copy(i.boundingBox)),no.applyMatrix4(e.matrixWorld),this.union(no)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Rn),Rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bs),io.subVectors(this.max,Bs),Nr.subVectors(e.a,Bs),Pr.subVectors(e.b,Bs),Lr.subVectors(e.c,Bs),xi.subVectors(Pr,Nr),yi.subVectors(Lr,Pr),Ji.subVectors(Nr,Lr);let n=[0,-xi.z,xi.y,0,-yi.z,yi.y,0,-Ji.z,Ji.y,xi.z,0,-xi.x,yi.z,0,-yi.x,Ji.z,0,-Ji.x,-xi.y,xi.x,0,-yi.y,yi.x,0,-Ji.y,Ji.x,0];return!Nc(n,Nr,Pr,Lr,io)||(n=[1,0,0,0,1,0,0,0,1],!Nc(n,Nr,Pr,Lr,io))?!1:(ro.crossVectors(xi,yi),n=[ro.x,ro.y,ro.z],Nc(n,Nr,Pr,Lr,io))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Zn=[new X,new X,new X,new X,new X,new X,new X,new X],Rn=new X,no=new Da,Nr=new X,Pr=new X,Lr=new X,xi=new X,yi=new X,Ji=new X,Bs=new X,io=new X,ro=new X,er=new X;function Nc(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){er.fromArray(t,s);const o=r.x*Math.abs(er.x)+r.y*Math.abs(er.y)+r.z*Math.abs(er.z),l=e.dot(er),c=n.dot(er),f=i.dot(er);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}const zS=new Da,Hs=new X,Pc=new X;class Bl{constructor(e=new X,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):zS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Hs.subVectors(e,this.center);const n=Hs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Hs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Hs.copy(e.center).add(Pc)),this.expandByPoint(Hs.copy(e.center).sub(Pc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Qn=new X,Lc=new X,so=new X,Si=new X,Dc=new X,ao=new X,Ic=new X;class Nv{constructor(e=new X,n=new X(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Qn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Qn.copy(this.origin).addScaledVector(this.direction,n),Qn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Lc.copy(e).add(n).multiplyScalar(.5),so.copy(n).sub(e).normalize(),Si.copy(this.origin).sub(Lc);const s=e.distanceTo(n)*.5,a=-this.direction.dot(so),o=Si.dot(this.direction),l=-Si.dot(so),c=Si.lengthSq(),f=Math.abs(1-a*a);let p,h,v,_;if(f>0)if(p=a*l-o,h=a*o-l,_=s*f,p>=0)if(h>=-_)if(h<=_){const y=1/f;p*=y,h*=y,v=p*(p+a*h+2*o)+h*(a*p+h+2*l)+c}else h=s,p=Math.max(0,-(a*h+o)),v=-p*p+h*(h+2*l)+c;else h=-s,p=Math.max(0,-(a*h+o)),v=-p*p+h*(h+2*l)+c;else h<=-_?(p=Math.max(0,-(-a*s+o)),h=p>0?-s:Math.min(Math.max(-s,-l),s),v=-p*p+h*(h+2*l)+c):h<=_?(p=0,h=Math.min(Math.max(-s,-l),s),v=h*(h+2*l)+c):(p=Math.max(0,-(a*s+o)),h=p>0?s:Math.min(Math.max(-s,-l),s),v=-p*p+h*(h+2*l)+c);else h=a>0?-s:s,p=Math.max(0,-(a*h+o)),v=-p*p+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(Lc).addScaledVector(so,h),v}intersectSphere(e,n){Qn.subVectors(e.center,this.origin);const i=Qn.dot(this.direction),r=Qn.dot(Qn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,f=1/this.direction.y,p=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),f>=0?(s=(e.min.y-h.y)*f,a=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,a=(e.min.y-h.y)*f),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),p>=0?(o=(e.min.z-h.z)*p,l=(e.max.z-h.z)*p):(o=(e.max.z-h.z)*p,l=(e.min.z-h.z)*p),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Qn)!==null}intersectTriangle(e,n,i,r,s){Dc.subVectors(n,e),ao.subVectors(i,e),Ic.crossVectors(Dc,ao);let a=this.direction.dot(Ic),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Si.subVectors(this.origin,e);const l=o*this.direction.dot(ao.crossVectors(Si,ao));if(l<0)return null;const c=o*this.direction.dot(Dc.cross(Si));if(c<0||l+c>a)return null;const f=-o*Si.dot(Ic);return f<0?null:this.at(f/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Rt{constructor(e,n,i,r,s,a,o,l,c,f,p,h,v,_,y,m){Rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,f,p,h,v,_,y,m)}set(e,n,i,r,s,a,o,l,c,f,p,h,v,_,y,m){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=f,u[10]=p,u[14]=h,u[3]=v,u[7]=_,u[11]=y,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Rt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Dr.setFromMatrixColumn(e,0).length(),s=1/Dr.setFromMatrixColumn(e,1).length(),a=1/Dr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const h=a*f,v=a*p,_=o*f,y=o*p;n[0]=l*f,n[4]=-l*p,n[8]=c,n[1]=v+_*c,n[5]=h-y*c,n[9]=-o*l,n[2]=y-h*c,n[6]=_+v*c,n[10]=a*l}else if(e.order==="YXZ"){const h=l*f,v=l*p,_=c*f,y=c*p;n[0]=h+y*o,n[4]=_*o-v,n[8]=a*c,n[1]=a*p,n[5]=a*f,n[9]=-o,n[2]=v*o-_,n[6]=y+h*o,n[10]=a*l}else if(e.order==="ZXY"){const h=l*f,v=l*p,_=c*f,y=c*p;n[0]=h-y*o,n[4]=-a*p,n[8]=_+v*o,n[1]=v+_*o,n[5]=a*f,n[9]=y-h*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const h=a*f,v=a*p,_=o*f,y=o*p;n[0]=l*f,n[4]=_*c-v,n[8]=h*c+y,n[1]=l*p,n[5]=y*c+h,n[9]=v*c-_,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const h=a*l,v=a*c,_=o*l,y=o*c;n[0]=l*f,n[4]=y-h*p,n[8]=_*p+v,n[1]=p,n[5]=a*f,n[9]=-o*f,n[2]=-c*f,n[6]=v*p+_,n[10]=h-y*p}else if(e.order==="XZY"){const h=a*l,v=a*c,_=o*l,y=o*c;n[0]=l*f,n[4]=-p,n[8]=c*f,n[1]=h*p+y,n[5]=a*f,n[9]=v*p-_,n[2]=_*p-v,n[6]=o*f,n[10]=y*p+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(BS,e,HS)}lookAt(e,n,i){const r=this.elements;return on.subVectors(e,n),on.lengthSq()===0&&(on.z=1),on.normalize(),Ei.crossVectors(i,on),Ei.lengthSq()===0&&(Math.abs(i.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),Ei.crossVectors(i,on)),Ei.normalize(),oo.crossVectors(on,Ei),r[0]=Ei.x,r[4]=oo.x,r[8]=on.x,r[1]=Ei.y,r[5]=oo.y,r[9]=on.y,r[2]=Ei.z,r[6]=oo.z,r[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],f=i[1],p=i[5],h=i[9],v=i[13],_=i[2],y=i[6],m=i[10],u=i[14],g=i[3],x=i[7],S=i[11],N=i[15],C=r[0],T=r[4],z=r[8],E=r[12],w=r[1],U=r[5],L=r[9],Z=r[13],P=r[2],O=r[6],q=r[10],Q=r[14],F=r[3],k=r[7],R=r[11],D=r[15];return s[0]=a*C+o*w+l*P+c*F,s[4]=a*T+o*U+l*O+c*k,s[8]=a*z+o*L+l*q+c*R,s[12]=a*E+o*Z+l*Q+c*D,s[1]=f*C+p*w+h*P+v*F,s[5]=f*T+p*U+h*O+v*k,s[9]=f*z+p*L+h*q+v*R,s[13]=f*E+p*Z+h*Q+v*D,s[2]=_*C+y*w+m*P+u*F,s[6]=_*T+y*U+m*O+u*k,s[10]=_*z+y*L+m*q+u*R,s[14]=_*E+y*Z+m*Q+u*D,s[3]=g*C+x*w+S*P+N*F,s[7]=g*T+x*U+S*O+N*k,s[11]=g*z+x*L+S*q+N*R,s[15]=g*E+x*Z+S*Q+N*D,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],f=e[2],p=e[6],h=e[10],v=e[14],_=e[3],y=e[7],m=e[11],u=e[15];return _*(+s*l*p-r*c*p-s*o*h+i*c*h+r*o*v-i*l*v)+y*(+n*l*v-n*c*h+s*a*h-r*a*v+r*c*f-s*l*f)+m*(+n*c*p-n*o*v-s*a*p+i*a*v+s*o*f-i*c*f)+u*(-r*o*f-n*l*p+n*o*h+r*a*p-i*a*h+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],p=e[9],h=e[10],v=e[11],_=e[12],y=e[13],m=e[14],u=e[15],g=p*m*c-y*h*c+y*l*v-o*m*v-p*l*u+o*h*u,x=_*h*c-f*m*c-_*l*v+a*m*v+f*l*u-a*h*u,S=f*y*c-_*p*c+_*o*v-a*y*v-f*o*u+a*p*u,N=_*p*l-f*y*l-_*o*h+a*y*h+f*o*m-a*p*m,C=n*g+i*x+r*S+s*N;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/C;return e[0]=g*T,e[1]=(y*h*s-p*m*s-y*r*v+i*m*v+p*r*u-i*h*u)*T,e[2]=(o*m*s-y*l*s+y*r*c-i*m*c-o*r*u+i*l*u)*T,e[3]=(p*l*s-o*h*s-p*r*c+i*h*c+o*r*v-i*l*v)*T,e[4]=x*T,e[5]=(f*m*s-_*h*s+_*r*v-n*m*v-f*r*u+n*h*u)*T,e[6]=(_*l*s-a*m*s-_*r*c+n*m*c+a*r*u-n*l*u)*T,e[7]=(a*h*s-f*l*s+f*r*c-n*h*c-a*r*v+n*l*v)*T,e[8]=S*T,e[9]=(_*p*s-f*y*s-_*i*v+n*y*v+f*i*u-n*p*u)*T,e[10]=(a*y*s-_*o*s+_*i*c-n*y*c-a*i*u+n*o*u)*T,e[11]=(f*o*s-a*p*s-f*i*c+n*p*c+a*i*v-n*o*v)*T,e[12]=N*T,e[13]=(f*y*r-_*p*r+_*i*h-n*y*h-f*i*m+n*p*m)*T,e[14]=(_*o*r-a*y*r-_*i*l+n*y*l+a*i*m-n*o*m)*T,e[15]=(a*p*r-f*o*r+f*i*l-n*p*l-a*i*h+n*o*h)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,f=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,f*o+i,f*l-r*a,0,c*l-r*o,f*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,f=a+a,p=o+o,h=s*c,v=s*f,_=s*p,y=a*f,m=a*p,u=o*p,g=l*c,x=l*f,S=l*p,N=i.x,C=i.y,T=i.z;return r[0]=(1-(y+u))*N,r[1]=(v+S)*N,r[2]=(_-x)*N,r[3]=0,r[4]=(v-S)*C,r[5]=(1-(h+u))*C,r[6]=(m+g)*C,r[7]=0,r[8]=(_+x)*T,r[9]=(m-g)*T,r[10]=(1-(h+y))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Dr.set(r[0],r[1],r[2]).length();const a=Dr.set(r[4],r[5],r[6]).length(),o=Dr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Nn.copy(this);const c=1/s,f=1/a,p=1/o;return Nn.elements[0]*=c,Nn.elements[1]*=c,Nn.elements[2]*=c,Nn.elements[4]*=f,Nn.elements[5]*=f,Nn.elements[6]*=f,Nn.elements[8]*=p,Nn.elements[9]*=p,Nn.elements[10]*=p,n.setFromRotationMatrix(Nn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=li){const l=this.elements,c=2*s/(n-e),f=2*s/(i-r),p=(n+e)/(n-e),h=(i+r)/(i-r);let v,_;if(o===li)v=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===_l)v=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=v,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=li){const l=this.elements,c=1/(n-e),f=1/(i-r),p=1/(a-s),h=(n+e)*c,v=(i+r)*f;let _,y;if(o===li)_=(a+s)*p,y=-2*p;else if(o===_l)_=s*p,y=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-v,l[2]=0,l[6]=0,l[10]=y,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Dr=new X,Nn=new Rt,BS=new X(0,0,0),HS=new X(1,1,1),Ei=new X,oo=new X,on=new X,dp=new Rt,hp=new La;class Hl{constructor(e=0,n=0,i=0,r=Hl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],f=r[9],p=r[2],h=r[6],v=r[10];switch(n){case"XYZ":this._y=Math.asin(Yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,v),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,v),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-p,v),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Yt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(h,v),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,v));break;case"XZY":this._z=Math.asin(-Yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return dp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return hp.setFromEuler(this),this.setFromQuaternion(hp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hl.DEFAULT_ORDER="XYZ";class Pv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let jS=0;const fp=new X,Ir=new La,Jn=new Rt,lo=new X,js=new X,GS=new X,VS=new La,pp=new X(1,0,0),mp=new X(0,1,0),gp=new X(0,0,1),WS={type:"added"},XS={type:"removed"};class sn extends Cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jS++}),this.uuid=Rs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=sn.DEFAULT_UP.clone();const e=new X,n=new Hl,i=new La,r=new X(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Rt},normalMatrix:{value:new Ge}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ir.setFromAxisAngle(e,n),this.quaternion.multiply(Ir),this}rotateOnWorldAxis(e,n){return Ir.setFromAxisAngle(e,n),this.quaternion.premultiply(Ir),this}rotateX(e){return this.rotateOnAxis(pp,e)}rotateY(e){return this.rotateOnAxis(mp,e)}rotateZ(e){return this.rotateOnAxis(gp,e)}translateOnAxis(e,n){return fp.copy(e).applyQuaternion(this.quaternion),this.position.add(fp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(pp,e)}translateY(e){return this.translateOnAxis(mp,e)}translateZ(e){return this.translateOnAxis(gp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?lo.copy(e):lo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(js,lo,this.up):Jn.lookAt(lo,js,this.up),this.quaternion.setFromRotationMatrix(Jn),r&&(Jn.extractRotation(r.matrixWorld),Ir.setFromRotationMatrix(Jn),this.quaternion.premultiply(Ir.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(WS)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(XS)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Jn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(js,e,GS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(js,VS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const p=l[c];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),f=a(e.images),p=a(e.shapes),h=a(e.skeletons),v=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),p.length>0&&(i.shapes=p),h.length>0&&(i.skeletons=h),v.length>0&&(i.animations=v),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const f=o[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}sn.DEFAULT_UP=new X(0,1,0);sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pn=new X,ei=new X,Uc=new X,ti=new X,Ur=new X,Fr=new X,vp=new X,Fc=new X,kc=new X,Oc=new X;let co=!1;class Un{constructor(e=new X,n=new X,i=new X){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Pn.subVectors(e,n),r.cross(Pn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Pn.subVectors(r,n),ei.subVectors(i,n),Uc.subVectors(e,n);const a=Pn.dot(Pn),o=Pn.dot(ei),l=Pn.dot(Uc),c=ei.dot(ei),f=ei.dot(Uc),p=a*c-o*o;if(p===0)return s.set(0,0,0),null;const h=1/p,v=(c*l-o*f)*h,_=(a*f-o*l)*h;return s.set(1-v-_,_,v)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getUV(e,n,i,r,s,a,o,l){return co===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),co=!0),this.getInterpolation(e,n,i,r,s,a,o,l)}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ti.x),l.addScaledVector(a,ti.y),l.addScaledVector(o,ti.z),l)}static isFrontFacing(e,n,i,r){return Pn.subVectors(i,n),ei.subVectors(e,n),Pn.cross(ei).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),Pn.cross(ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Un.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Un.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return co===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),co=!0),Un.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return Un.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Un.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Un.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Ur.subVectors(r,i),Fr.subVectors(s,i),Fc.subVectors(e,i);const l=Ur.dot(Fc),c=Fr.dot(Fc);if(l<=0&&c<=0)return n.copy(i);kc.subVectors(e,r);const f=Ur.dot(kc),p=Fr.dot(kc);if(f>=0&&p<=f)return n.copy(r);const h=l*p-f*c;if(h<=0&&l>=0&&f<=0)return a=l/(l-f),n.copy(i).addScaledVector(Ur,a);Oc.subVectors(e,s);const v=Ur.dot(Oc),_=Fr.dot(Oc);if(_>=0&&v<=_)return n.copy(s);const y=v*c-l*_;if(y<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector(Fr,o);const m=f*_-v*p;if(m<=0&&p-f>=0&&v-_>=0)return vp.subVectors(s,r),o=(p-f)/(p-f+(v-_)),n.copy(r).addScaledVector(vp,o);const u=1/(m+y+h);return a=y*u,o=h*u,n.copy(i).addScaledVector(Ur,a).addScaledVector(Fr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Lv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mi={h:0,s:0,l:0},uo={h:0,s:0,l:0};function zc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class qe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Qe.workingColorSpace){return this.r=e,this.g=n,this.b=i,Qe.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Qe.workingColorSpace){if(e=Qd(e,1),n=Yt(n,0,1),i=Yt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=zc(a,s,e+1/3),this.g=zc(a,s,e),this.b=zc(a,s,e-1/3)}return Qe.toWorkingColorSpace(this,r),this}setStyle(e,n=Pt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Pt){const i=Lv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hs(e.r),this.g=hs(e.g),this.b=hs(e.b),this}copyLinearToSRGB(e){return this.r=bc(e.r),this.g=bc(e.g),this.b=bc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pt){return Qe.fromWorkingColorSpace(zt.copy(this),e),Math.round(Yt(zt.r*255,0,255))*65536+Math.round(Yt(zt.g*255,0,255))*256+Math.round(Yt(zt.b*255,0,255))}getHexString(e=Pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Qe.workingColorSpace){Qe.fromWorkingColorSpace(zt.copy(this),n);const i=zt.r,r=zt.g,s=zt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const f=(o+a)/2;if(o===a)l=0,c=0;else{const p=a-o;switch(c=f<=.5?p/(a+o):p/(2-a-o),a){case i:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-i)/p+2;break;case s:l=(i-r)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(zt.copy(this),n),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=Pt){Qe.fromWorkingColorSpace(zt.copy(this),e);const n=zt.r,i=zt.g,r=zt.b;return e!==Pt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Mi),this.setHSL(Mi.h+e,Mi.s+n,Mi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Mi),e.getHSL(uo);const i=ra(Mi.h,uo.h,n),r=ra(Mi.s,uo.s,n),s=ra(Mi.l,uo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new qe;qe.NAMES=Lv;let qS=0;class Ia extends Cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qS++}),this.uuid=Rs(),this.name="",this.type="Material",this.blending=ds,this.side=qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gu,this.blendDst=Vu,this.blendEquation=or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=pl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=np,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cr,this.stencilZFail=Cr,this.stencilZPass=Cr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ds&&(i.blending=this.blending),this.side!==qi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Gu&&(i.blendSrc=this.blendSrc),this.blendDst!==Vu&&(i.blendDst=this.blendDst),this.blendEquation!==or&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==pl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==np&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Cr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Cr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Cr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Dv extends Ia{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=mv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _t=new X,ho=new Je;class Bn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=ip,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ho.fromBufferAttribute(this,n),ho.applyMatrix3(e),this.setXY(n,ho.x,ho.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.applyMatrix3(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.applyMatrix4(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.applyNormalMatrix(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.transformDirection(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Vr(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Vt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Vr(n,this.array)),n}setX(e,n){return this.normalized&&(n=Vt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Vr(n,this.array)),n}setY(e,n){return this.normalized&&(n=Vt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Vr(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Vt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Vr(n,this.array)),n}setW(e,n){return this.normalized&&(n=Vt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Vt(n,this.array),i=Vt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Vt(n,this.array),i=Vt(i,this.array),r=Vt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Vt(n,this.array),i=Vt(i,this.array),r=Vt(r,this.array),s=Vt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ip&&(e.usage=this.usage),e}}class Iv extends Bn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Uv extends Bn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class ui extends Bn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let YS=0;const xn=new Rt,Bc=new sn,kr=new X,ln=new Da,Gs=new Da,At=new X;class $n extends Cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:YS++}),this.uuid=Rs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Av(e)?Uv:Iv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xn.makeRotationFromQuaternion(e),this.applyMatrix4(xn),this}rotateX(e){return xn.makeRotationX(e),this.applyMatrix4(xn),this}rotateY(e){return xn.makeRotationY(e),this.applyMatrix4(xn),this}rotateZ(e){return xn.makeRotationZ(e),this.applyMatrix4(xn),this}translate(e,n,i){return xn.makeTranslation(e,n,i),this.applyMatrix4(xn),this}scale(e,n,i){return xn.makeScale(e,n,i),this.applyMatrix4(xn),this}lookAt(e){return Bc.lookAt(e),Bc.updateMatrix(),this.applyMatrix4(Bc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(kr).negate(),this.translate(kr.x,kr.y,kr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ui(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Da);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];ln.setFromBufferAttribute(s),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Gs.setFromBufferAttribute(o),this.morphTargetsRelative?(At.addVectors(ln.min,Gs.min),ln.expandByPoint(At),At.addVectors(ln.max,Gs.max),ln.expandByPoint(At)):(ln.expandByPoint(Gs.min),ln.expandByPoint(Gs.max))}ln.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)At.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(At));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)At.fromBufferAttribute(o,c),l&&(kr.fromBufferAttribute(e,c),At.add(kr)),r=Math.max(r,i.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,a=n.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],f=[];for(let w=0;w<o;w++)c[w]=new X,f[w]=new X;const p=new X,h=new X,v=new X,_=new Je,y=new Je,m=new Je,u=new X,g=new X;function x(w,U,L){p.fromArray(r,w*3),h.fromArray(r,U*3),v.fromArray(r,L*3),_.fromArray(a,w*2),y.fromArray(a,U*2),m.fromArray(a,L*2),h.sub(p),v.sub(p),y.sub(_),m.sub(_);const Z=1/(y.x*m.y-m.x*y.y);isFinite(Z)&&(u.copy(h).multiplyScalar(m.y).addScaledVector(v,-y.y).multiplyScalar(Z),g.copy(v).multiplyScalar(y.x).addScaledVector(h,-m.x).multiplyScalar(Z),c[w].add(u),c[U].add(u),c[L].add(u),f[w].add(g),f[U].add(g),f[L].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let w=0,U=S.length;w<U;++w){const L=S[w],Z=L.start,P=L.count;for(let O=Z,q=Z+P;O<q;O+=3)x(i[O+0],i[O+1],i[O+2])}const N=new X,C=new X,T=new X,z=new X;function E(w){T.fromArray(s,w*3),z.copy(T);const U=c[w];N.copy(U),N.sub(T.multiplyScalar(T.dot(U))).normalize(),C.crossVectors(z,U);const Z=C.dot(f[w])<0?-1:1;l[w*4]=N.x,l[w*4+1]=N.y,l[w*4+2]=N.z,l[w*4+3]=Z}for(let w=0,U=S.length;w<U;++w){const L=S[w],Z=L.start,P=L.count;for(let O=Z,q=Z+P;O<q;O+=3)E(i[O+0]),E(i[O+1]),E(i[O+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Bn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,v=i.count;h<v;h++)i.setXYZ(h,0,0,0);const r=new X,s=new X,a=new X,o=new X,l=new X,c=new X,f=new X,p=new X;if(e)for(let h=0,v=e.count;h<v;h+=3){const _=e.getX(h+0),y=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,y),a.fromBufferAttribute(n,m),f.subVectors(a,s),p.subVectors(r,s),f.cross(p),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),o.add(f),l.add(f),c.add(f),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,v=n.count;h<v;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),a.fromBufferAttribute(n,h+2),f.subVectors(a,s),p.subVectors(r,s),f.cross(p),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)At.fromBufferAttribute(e,n),At.normalize(),e.setXYZ(n,At.x,At.y,At.z)}toNonIndexed(){function e(o,l){const c=o.array,f=o.itemSize,p=o.normalized,h=new c.constructor(l.length*f);let v=0,_=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?v=l[y]*o.data.stride+o.offset:v=l[y]*f;for(let u=0;u<f;u++)h[_++]=c[v++]}return new Bn(h,f,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new $n,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let f=0,p=c.length;f<p;f++){const h=c[f],v=e(h,i);l.push(v)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let p=0,h=c.length;p<h;p++){const v=c[p];f.push(v.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],p=s[c];for(let h=0,v=p.length;h<v;h++)f.push(p[h].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,f=a.length;c<f;c++){const p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _p=new Rt,tr=new Nv,fo=new Bl,xp=new X,Or=new X,zr=new X,Br=new X,Hc=new X,po=new X,mo=new Je,go=new Je,vo=new Je,yp=new X,Sp=new X,Ep=new X,_o=new X,xo=new X;class Di extends sn{constructor(e=new $n,n=new Dv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){po.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=o[l],p=s[l];f!==0&&(Hc.fromBufferAttribute(p,e),a?po.addScaledVector(Hc,f):po.addScaledVector(Hc.sub(n),f))}n.add(po)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),fo.copy(i.boundingSphere),fo.applyMatrix4(s),tr.copy(e.ray).recast(e.near),!(fo.containsPoint(tr.origin)===!1&&(tr.intersectSphere(fo,xp)===null||tr.origin.distanceToSquared(xp)>(e.far-e.near)**2))&&(_p.copy(s).invert(),tr.copy(e.ray).applyMatrix4(_p),!(i.boundingBox!==null&&tr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,tr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,p=s.attributes.normal,h=s.groups,v=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,y=h.length;_<y;_++){const m=h[_],u=a[m.materialIndex],g=Math.max(m.start,v.start),x=Math.min(o.count,Math.min(m.start+m.count,v.start+v.count));for(let S=g,N=x;S<N;S+=3){const C=o.getX(S),T=o.getX(S+1),z=o.getX(S+2);r=yo(this,u,e,i,c,f,p,C,T,z),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,v.start),y=Math.min(o.count,v.start+v.count);for(let m=_,u=y;m<u;m+=3){const g=o.getX(m),x=o.getX(m+1),S=o.getX(m+2);r=yo(this,a,e,i,c,f,p,g,x,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,y=h.length;_<y;_++){const m=h[_],u=a[m.materialIndex],g=Math.max(m.start,v.start),x=Math.min(l.count,Math.min(m.start+m.count,v.start+v.count));for(let S=g,N=x;S<N;S+=3){const C=S,T=S+1,z=S+2;r=yo(this,u,e,i,c,f,p,C,T,z),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,v.start),y=Math.min(l.count,v.start+v.count);for(let m=_,u=y;m<u;m+=3){const g=m,x=m+1,S=m+2;r=yo(this,a,e,i,c,f,p,g,x,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function $S(t,e,n,i,r,s,a,o){let l;if(e.side===rn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===qi,o),l===null)return null;xo.copy(o),xo.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(xo);return c<n.near||c>n.far?null:{distance:c,point:xo.clone(),object:t}}function yo(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,Or),t.getVertexPosition(l,zr),t.getVertexPosition(c,Br);const f=$S(t,e,n,i,Or,zr,Br,_o);if(f){r&&(mo.fromBufferAttribute(r,o),go.fromBufferAttribute(r,l),vo.fromBufferAttribute(r,c),f.uv=Un.getInterpolation(_o,Or,zr,Br,mo,go,vo,new Je)),s&&(mo.fromBufferAttribute(s,o),go.fromBufferAttribute(s,l),vo.fromBufferAttribute(s,c),f.uv1=Un.getInterpolation(_o,Or,zr,Br,mo,go,vo,new Je),f.uv2=f.uv1),a&&(yp.fromBufferAttribute(a,o),Sp.fromBufferAttribute(a,l),Ep.fromBufferAttribute(a,c),f.normal=Un.getInterpolation(_o,Or,zr,Br,yp,Sp,Ep,new X),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const p={a:o,b:l,c,normal:new X,materialIndex:0};Un.getNormal(Or,zr,Br,p.normal),f.face=p}return f}class Ua extends $n{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],f=[],p=[];let h=0,v=0;_("z","y","x",-1,-1,i,n,e,a,s,0),_("z","y","x",1,-1,i,n,-e,a,s,1),_("x","z","y",1,1,e,i,n,r,a,2),_("x","z","y",1,-1,e,i,-n,r,a,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ui(c,3)),this.setAttribute("normal",new ui(f,3)),this.setAttribute("uv",new ui(p,2));function _(y,m,u,g,x,S,N,C,T,z,E){const w=S/T,U=N/z,L=S/2,Z=N/2,P=C/2,O=T+1,q=z+1;let Q=0,F=0;const k=new X;for(let R=0;R<q;R++){const D=R*U-Z;for(let K=0;K<O;K++){const H=K*w-L;k[y]=H*g,k[m]=D*x,k[u]=P,c.push(k.x,k.y,k.z),k[y]=0,k[m]=0,k[u]=C>0?1:-1,f.push(k.x,k.y,k.z),p.push(K/T),p.push(1-R/z),Q+=1}}for(let R=0;R<z;R++)for(let D=0;D<T;D++){const K=h+D+O*R,H=h+D+O*(R+1),Y=h+(D+1)+O*(R+1),ae=h+(D+1)+O*R;l.push(K,H,ae),l.push(H,Y,ae),F+=6}o.addGroup(v,F,E),v+=F,h+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ua(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ts(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Wt(t){const e={};for(let n=0;n<t.length;n++){const i=Ts(t[n]);for(const r in i)e[r]=i[r]}return e}function KS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Fv(t){return t.getRenderTarget()===null?t.outputColorSpace:Qe.workingColorSpace}const ZS={clone:Ts,merge:Wt};var QS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,JS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Tr extends Ia{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=QS,this.fragmentShader=JS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ts(e.uniforms),this.uniformsGroups=KS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class kv extends sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=li}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class dn extends kv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Aa*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ia*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Aa*2*Math.atan(Math.tan(ia*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ia*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Hr=-90,jr=1;class eE extends sn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new dn(Hr,jr,e,n);r.layers=this.layers,this.add(r);const s=new dn(Hr,jr,e,n);s.layers=this.layers,this.add(s);const a=new dn(Hr,jr,e,n);a.layers=this.layers,this.add(a);const o=new dn(Hr,jr,e,n);o.layers=this.layers,this.add(o);const l=new dn(Hr,jr,e,n);l.layers=this.layers,this.add(l);const c=new dn(Hr,jr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===li)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===_l)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,f]=this.children,p=e.getRenderTarget(),h=e.getActiveCubeFace(),v=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(p,h,v),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Ov extends pn{constructor(e,n,i,r,s,a,o,l,c,f){e=e!==void 0?e:[],n=n!==void 0?n:Ss,super(e,n,i,r,s,a,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class tE extends Mr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(sa("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===vr?Pt:Mn),this.texture=new Ov(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:En}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ua(5,5,5),s=new Tr({name:"CubemapFromEquirect",uniforms:Ts(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:rn,blending:ji});s.uniforms.tEquirect.value=n;const a=new Di(r,s),o=n.minFilter;return n.minFilter===Ta&&(n.minFilter=En),new eE(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const jc=new X,nE=new X,iE=new Ge;class sr{constructor(e=new X(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=jc.subVectors(i,n).cross(nE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(jc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||iE.getNormalMatrix(e),r=this.coplanarPoint(jc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const nr=new Bl,So=new X;class zv{constructor(e=new sr,n=new sr,i=new sr,r=new sr,s=new sr,a=new sr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=li){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],f=r[5],p=r[6],h=r[7],v=r[8],_=r[9],y=r[10],m=r[11],u=r[12],g=r[13],x=r[14],S=r[15];if(i[0].setComponents(l-s,h-c,m-v,S-u).normalize(),i[1].setComponents(l+s,h+c,m+v,S+u).normalize(),i[2].setComponents(l+a,h+f,m+_,S+g).normalize(),i[3].setComponents(l-a,h-f,m-_,S-g).normalize(),i[4].setComponents(l-o,h-p,m-y,S-x).normalize(),n===li)i[5].setComponents(l+o,h+p,m+y,S+x).normalize();else if(n===_l)i[5].setComponents(o,p,y,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),nr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),nr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(nr)}intersectsSprite(e){return nr.center.set(0,0,0),nr.radius=.7071067811865476,nr.applyMatrix4(e.matrixWorld),this.intersectsSphere(nr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(So.x=r.normal.x>0?e.max.x:e.min.x,So.y=r.normal.y>0?e.max.y:e.min.y,So.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(So)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Bv(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function rE(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,f){const p=c.array,h=c.usage,v=p.byteLength,_=t.createBuffer();t.bindBuffer(f,_),t.bufferData(f,p,h),c.onUploadCallback();let y;if(p instanceof Float32Array)y=t.FLOAT;else if(p instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)y=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=t.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=t.SHORT;else if(p instanceof Uint32Array)y=t.UNSIGNED_INT;else if(p instanceof Int32Array)y=t.INT;else if(p instanceof Int8Array)y=t.BYTE;else if(p instanceof Uint8Array)y=t.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:c.version,size:v}}function s(c,f,p){const h=f.array,v=f._updateRange,_=f.updateRanges;if(t.bindBuffer(p,c),v.count===-1&&_.length===0&&t.bufferSubData(p,0,h),_.length!==0){for(let y=0,m=_.length;y<m;y++){const u=_[y];n?t.bufferSubData(p,u.start*h.BYTES_PER_ELEMENT,h,u.start,u.count):t.bufferSubData(p,u.start*h.BYTES_PER_ELEMENT,h.subarray(u.start,u.start+u.count))}f.clearUpdateRanges()}v.count!==-1&&(n?t.bufferSubData(p,v.offset*h.BYTES_PER_ELEMENT,h,v.offset,v.count):t.bufferSubData(p,v.offset*h.BYTES_PER_ELEMENT,h.subarray(v.offset,v.offset+v.count)),v.count=-1),f.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f&&(t.deleteBuffer(f.buffer),i.delete(c))}function l(c,f){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const p=i.get(c);if(p===void 0)i.set(c,r(c,f));else if(p.version<c.version){if(p.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,c,f),p.version=c.version}}return{get:a,remove:o,update:l}}class Jd extends $n{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,f=l+1,p=e/o,h=n/l,v=[],_=[],y=[],m=[];for(let u=0;u<f;u++){const g=u*h-a;for(let x=0;x<c;x++){const S=x*p-s;_.push(S,-g,0),y.push(0,0,1),m.push(x/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let g=0;g<o;g++){const x=g+c*u,S=g+c*(u+1),N=g+1+c*(u+1),C=g+1+c*u;v.push(x,S,C),v.push(S,N,C)}this.setIndex(v),this.setAttribute("position",new ui(_,3)),this.setAttribute("normal",new ui(y,3)),this.setAttribute("uv",new ui(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jd(e.width,e.height,e.widthSegments,e.heightSegments)}}var sE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,aE=`#ifdef USE_ALPHAHASH
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
#endif`,oE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cE=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,uE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dE=`#ifdef USE_AOMAP
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
#endif`,hE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fE=`#ifdef USE_BATCHING
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
#endif`,pE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,mE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_E=`#ifdef USE_IRIDESCENCE
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
#endif`,xE=`#ifdef USE_BUMPMAP
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
#endif`,yE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,SE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,EE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ME=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,TE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,AE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,bE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,CE=`#define PI 3.141592653589793
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
} // validated`,RE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,NE=`vec3 transformedNormal = objectNormal;
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
#endif`,PE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,LE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,DE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,IE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,UE="gl_FragColor = linearToOutputTexel( gl_FragColor );",FE=`
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
}`,kE=`#ifdef USE_ENVMAP
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
#endif`,OE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zE=`#ifdef USE_ENVMAP
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
#endif`,BE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,HE=`#ifdef USE_ENVMAP
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
#endif`,jE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,GE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,VE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,WE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,XE=`#ifdef USE_GRADIENTMAP
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
}`,qE=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,YE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$E=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,KE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ZE=`uniform bool receiveShadow;
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
#endif`,QE=`#ifdef USE_ENVMAP
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
#endif`,JE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,eM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,iM=`PhysicalMaterial material;
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
#endif`,rM=`struct PhysicalMaterial {
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
}`,sM=`
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
#endif`,aM=`#if defined( RE_IndirectDiffuse )
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
#endif`,oM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,dM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,hM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,mM=`#if defined( USE_POINTS_UV )
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
#endif`,gM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_M=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xM=`#ifdef USE_MORPHNORMALS
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
#endif`,yM=`#ifdef USE_MORPHTARGETS
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
#endif`,SM=`#ifdef USE_MORPHTARGETS
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
#endif`,EM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,MM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,TM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,AM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bM=`#ifdef USE_NORMALMAP
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
#endif`,CM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,RM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,NM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,PM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,LM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,DM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,IM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,UM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,FM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,OM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,BM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,HM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,GM=`float getShadowMask() {
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
}`,VM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,WM=`#ifdef USE_SKINNING
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
#endif`,XM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qM=`#ifdef USE_SKINNING
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
#endif`,YM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$M=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,KM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ZM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,QM=`#ifdef USE_TRANSMISSION
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
#endif`,JM=`#ifdef USE_TRANSMISSION
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
#endif`,eT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sT=`uniform sampler2D t2D;
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
}`,aT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,lT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uT=`#include <common>
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
}`,dT=`#if DEPTH_PACKING == 3200
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
}`,hT=`#define DISTANCE
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
}`,fT=`#define DISTANCE
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
}`,pT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gT=`uniform float scale;
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
}`,vT=`uniform vec3 diffuse;
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
}`,_T=`#include <common>
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
}`,xT=`uniform vec3 diffuse;
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
}`,yT=`#define LAMBERT
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
}`,ST=`#define LAMBERT
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
}`,ET=`#define MATCAP
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
}`,MT=`#define MATCAP
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
}`,TT=`#define NORMAL
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
}`,wT=`#define NORMAL
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
}`,AT=`#define PHONG
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
}`,bT=`#define PHONG
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
}`,CT=`#define STANDARD
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
}`,RT=`#define STANDARD
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
}`,NT=`#define TOON
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
}`,PT=`#define TOON
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
}`,LT=`uniform float size;
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
}`,DT=`uniform vec3 diffuse;
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
}`,IT=`#include <common>
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
}`,UT=`uniform vec3 color;
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
}`,FT=`uniform float rotation;
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
}`,kT=`uniform vec3 diffuse;
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
}`,Oe={alphahash_fragment:sE,alphahash_pars_fragment:aE,alphamap_fragment:oE,alphamap_pars_fragment:lE,alphatest_fragment:cE,alphatest_pars_fragment:uE,aomap_fragment:dE,aomap_pars_fragment:hE,batching_pars_vertex:fE,batching_vertex:pE,begin_vertex:mE,beginnormal_vertex:gE,bsdfs:vE,iridescence_fragment:_E,bumpmap_pars_fragment:xE,clipping_planes_fragment:yE,clipping_planes_pars_fragment:SE,clipping_planes_pars_vertex:EE,clipping_planes_vertex:ME,color_fragment:TE,color_pars_fragment:wE,color_pars_vertex:AE,color_vertex:bE,common:CE,cube_uv_reflection_fragment:RE,defaultnormal_vertex:NE,displacementmap_pars_vertex:PE,displacementmap_vertex:LE,emissivemap_fragment:DE,emissivemap_pars_fragment:IE,colorspace_fragment:UE,colorspace_pars_fragment:FE,envmap_fragment:kE,envmap_common_pars_fragment:OE,envmap_pars_fragment:zE,envmap_pars_vertex:BE,envmap_physical_pars_fragment:QE,envmap_vertex:HE,fog_vertex:jE,fog_pars_vertex:GE,fog_fragment:VE,fog_pars_fragment:WE,gradientmap_pars_fragment:XE,lightmap_fragment:qE,lightmap_pars_fragment:YE,lights_lambert_fragment:$E,lights_lambert_pars_fragment:KE,lights_pars_begin:ZE,lights_toon_fragment:JE,lights_toon_pars_fragment:eM,lights_phong_fragment:tM,lights_phong_pars_fragment:nM,lights_physical_fragment:iM,lights_physical_pars_fragment:rM,lights_fragment_begin:sM,lights_fragment_maps:aM,lights_fragment_end:oM,logdepthbuf_fragment:lM,logdepthbuf_pars_fragment:cM,logdepthbuf_pars_vertex:uM,logdepthbuf_vertex:dM,map_fragment:hM,map_pars_fragment:fM,map_particle_fragment:pM,map_particle_pars_fragment:mM,metalnessmap_fragment:gM,metalnessmap_pars_fragment:vM,morphcolor_vertex:_M,morphnormal_vertex:xM,morphtarget_pars_vertex:yM,morphtarget_vertex:SM,normal_fragment_begin:EM,normal_fragment_maps:MM,normal_pars_fragment:TM,normal_pars_vertex:wM,normal_vertex:AM,normalmap_pars_fragment:bM,clearcoat_normal_fragment_begin:CM,clearcoat_normal_fragment_maps:RM,clearcoat_pars_fragment:NM,iridescence_pars_fragment:PM,opaque_fragment:LM,packing:DM,premultiplied_alpha_fragment:IM,project_vertex:UM,dithering_fragment:FM,dithering_pars_fragment:kM,roughnessmap_fragment:OM,roughnessmap_pars_fragment:zM,shadowmap_pars_fragment:BM,shadowmap_pars_vertex:HM,shadowmap_vertex:jM,shadowmask_pars_fragment:GM,skinbase_vertex:VM,skinning_pars_vertex:WM,skinning_vertex:XM,skinnormal_vertex:qM,specularmap_fragment:YM,specularmap_pars_fragment:$M,tonemapping_fragment:KM,tonemapping_pars_fragment:ZM,transmission_fragment:QM,transmission_pars_fragment:JM,uv_pars_fragment:eT,uv_pars_vertex:tT,uv_vertex:nT,worldpos_vertex:iT,background_vert:rT,background_frag:sT,backgroundCube_vert:aT,backgroundCube_frag:oT,cube_vert:lT,cube_frag:cT,depth_vert:uT,depth_frag:dT,distanceRGBA_vert:hT,distanceRGBA_frag:fT,equirect_vert:pT,equirect_frag:mT,linedashed_vert:gT,linedashed_frag:vT,meshbasic_vert:_T,meshbasic_frag:xT,meshlambert_vert:yT,meshlambert_frag:ST,meshmatcap_vert:ET,meshmatcap_frag:MT,meshnormal_vert:TT,meshnormal_frag:wT,meshphong_vert:AT,meshphong_frag:bT,meshphysical_vert:CT,meshphysical_frag:RT,meshtoon_vert:NT,meshtoon_frag:PT,points_vert:LT,points_frag:DT,shadow_vert:IT,shadow_frag:UT,sprite_vert:FT,sprite_frag:kT},le={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},Wn={basic:{uniforms:Wt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Wt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new qe(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Wt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Wt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Wt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new qe(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Wt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Wt([le.points,le.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Wt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Wt([le.common,le.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Wt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Wt([le.sprite,le.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:Wt([le.common,le.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:Wt([le.lights,le.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};Wn.physical={uniforms:Wt([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const Eo={r:0,b:0,g:0};function OT(t,e,n,i,r,s,a){const o=new qe(0);let l=s===!0?0:1,c,f,p=null,h=0,v=null;function _(m,u){let g=!1,x=u.isScene===!0?u.background:null;x&&x.isTexture&&(x=(u.backgroundBlurriness>0?n:e).get(x)),x===null?y(o,l):x&&x.isColor&&(y(x,1),g=!0);const S=t.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||g)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Ol)?(f===void 0&&(f=new Di(new Ua(1,1,1),new Tr({name:"BackgroundCubeMaterial",uniforms:Ts(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(N,C,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),f.material.uniforms.envMap.value=x,f.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,f.material.toneMapped=Qe.getTransfer(x.colorSpace)!==st,(p!==x||h!==x.version||v!==t.toneMapping)&&(f.material.needsUpdate=!0,p=x,h=x.version,v=t.toneMapping),f.layers.enableAll(),m.unshift(f,f.geometry,f.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Di(new Jd(2,2),new Tr({name:"BackgroundMaterial",uniforms:Ts(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:qi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(x.colorSpace)!==st,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(p!==x||h!==x.version||v!==t.toneMapping)&&(c.material.needsUpdate=!0,p=x,h=x.version,v=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function y(m,u){m.getRGB(Eo,Fv(t)),i.buffers.color.setClear(Eo.r,Eo.g,Eo.b,u,a)}return{getClearColor:function(){return o},setClearColor:function(m,u=1){o.set(m),l=u,y(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,y(o,l)},render:_}}function zT(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=m(null);let c=l,f=!1;function p(P,O,q,Q,F){let k=!1;if(a){const R=y(Q,q,O);c!==R&&(c=R,v(c.object)),k=u(P,Q,q,F),k&&g(P,Q,q,F)}else{const R=O.wireframe===!0;(c.geometry!==Q.id||c.program!==q.id||c.wireframe!==R)&&(c.geometry=Q.id,c.program=q.id,c.wireframe=R,k=!0)}F!==null&&n.update(F,t.ELEMENT_ARRAY_BUFFER),(k||f)&&(f=!1,z(P,O,q,Q),F!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(F).buffer))}function h(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function v(P){return i.isWebGL2?t.bindVertexArray(P):s.bindVertexArrayOES(P)}function _(P){return i.isWebGL2?t.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function y(P,O,q){const Q=q.wireframe===!0;let F=o[P.id];F===void 0&&(F={},o[P.id]=F);let k=F[O.id];k===void 0&&(k={},F[O.id]=k);let R=k[Q];return R===void 0&&(R=m(h()),k[Q]=R),R}function m(P){const O=[],q=[],Q=[];for(let F=0;F<r;F++)O[F]=0,q[F]=0,Q[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:q,attributeDivisors:Q,object:P,attributes:{},index:null}}function u(P,O,q,Q){const F=c.attributes,k=O.attributes;let R=0;const D=q.getAttributes();for(const K in D)if(D[K].location>=0){const Y=F[K];let ae=k[K];if(ae===void 0&&(K==="instanceMatrix"&&P.instanceMatrix&&(ae=P.instanceMatrix),K==="instanceColor"&&P.instanceColor&&(ae=P.instanceColor)),Y===void 0||Y.attribute!==ae||ae&&Y.data!==ae.data)return!0;R++}return c.attributesNum!==R||c.index!==Q}function g(P,O,q,Q){const F={},k=O.attributes;let R=0;const D=q.getAttributes();for(const K in D)if(D[K].location>=0){let Y=k[K];Y===void 0&&(K==="instanceMatrix"&&P.instanceMatrix&&(Y=P.instanceMatrix),K==="instanceColor"&&P.instanceColor&&(Y=P.instanceColor));const ae={};ae.attribute=Y,Y&&Y.data&&(ae.data=Y.data),F[K]=ae,R++}c.attributes=F,c.attributesNum=R,c.index=Q}function x(){const P=c.newAttributes;for(let O=0,q=P.length;O<q;O++)P[O]=0}function S(P){N(P,0)}function N(P,O){const q=c.newAttributes,Q=c.enabledAttributes,F=c.attributeDivisors;q[P]=1,Q[P]===0&&(t.enableVertexAttribArray(P),Q[P]=1),F[P]!==O&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,O),F[P]=O)}function C(){const P=c.newAttributes,O=c.enabledAttributes;for(let q=0,Q=O.length;q<Q;q++)O[q]!==P[q]&&(t.disableVertexAttribArray(q),O[q]=0)}function T(P,O,q,Q,F,k,R){R===!0?t.vertexAttribIPointer(P,O,q,F,k):t.vertexAttribPointer(P,O,q,Q,F,k)}function z(P,O,q,Q){if(i.isWebGL2===!1&&(P.isInstancedMesh||Q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const F=Q.attributes,k=q.getAttributes(),R=O.defaultAttributeValues;for(const D in k){const K=k[D];if(K.location>=0){let H=F[D];if(H===void 0&&(D==="instanceMatrix"&&P.instanceMatrix&&(H=P.instanceMatrix),D==="instanceColor"&&P.instanceColor&&(H=P.instanceColor)),H!==void 0){const Y=H.normalized,ae=H.itemSize,ce=n.get(H);if(ce===void 0)continue;const pe=ce.buffer,Ae=ce.type,Le=ce.bytesPerElement,we=i.isWebGL2===!0&&(Ae===t.INT||Ae===t.UNSIGNED_INT||H.gpuType===vv);if(H.isInterleavedBufferAttribute){const Xe=H.data,G=Xe.stride,vt=H.offset;if(Xe.isInstancedInterleavedBuffer){for(let Ee=0;Ee<K.locationSize;Ee++)N(K.location+Ee,Xe.meshPerAttribute);P.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=Xe.meshPerAttribute*Xe.count)}else for(let Ee=0;Ee<K.locationSize;Ee++)S(K.location+Ee);t.bindBuffer(t.ARRAY_BUFFER,pe);for(let Ee=0;Ee<K.locationSize;Ee++)T(K.location+Ee,ae/K.locationSize,Ae,Y,G*Le,(vt+ae/K.locationSize*Ee)*Le,we)}else{if(H.isInstancedBufferAttribute){for(let Xe=0;Xe<K.locationSize;Xe++)N(K.location+Xe,H.meshPerAttribute);P.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let Xe=0;Xe<K.locationSize;Xe++)S(K.location+Xe);t.bindBuffer(t.ARRAY_BUFFER,pe);for(let Xe=0;Xe<K.locationSize;Xe++)T(K.location+Xe,ae/K.locationSize,Ae,Y,ae*Le,ae/K.locationSize*Xe*Le,we)}}else if(R!==void 0){const Y=R[D];if(Y!==void 0)switch(Y.length){case 2:t.vertexAttrib2fv(K.location,Y);break;case 3:t.vertexAttrib3fv(K.location,Y);break;case 4:t.vertexAttrib4fv(K.location,Y);break;default:t.vertexAttrib1fv(K.location,Y)}}}}C()}function E(){L();for(const P in o){const O=o[P];for(const q in O){const Q=O[q];for(const F in Q)_(Q[F].object),delete Q[F];delete O[q]}delete o[P]}}function w(P){if(o[P.id]===void 0)return;const O=o[P.id];for(const q in O){const Q=O[q];for(const F in Q)_(Q[F].object),delete Q[F];delete O[q]}delete o[P.id]}function U(P){for(const O in o){const q=o[O];if(q[P.id]===void 0)continue;const Q=q[P.id];for(const F in Q)_(Q[F].object),delete Q[F];delete q[P.id]}}function L(){Z(),f=!0,c!==l&&(c=l,v(c.object))}function Z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:L,resetDefaultState:Z,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfProgram:U,initAttributes:x,enableAttribute:S,disableUnusedAttributes:C}}function BT(t,e,n,i){const r=i.isWebGL2;let s;function a(f){s=f}function o(f,p){t.drawArrays(s,f,p),n.update(p,s,1)}function l(f,p,h){if(h===0)return;let v,_;if(r)v=t,_="drawArraysInstanced";else if(v=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",v===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[_](s,f,p,h),n.update(p,s,h)}function c(f,p,h){if(h===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let _=0;_<h;_++)this.render(f[_],p[_]);else{v.multiDrawArraysWEBGL(s,f,0,p,0,h);let _=0;for(let y=0;y<h;y++)_+=p[y];n.update(_,s,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function HT(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let o=n.precision!==void 0?n.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),f=n.logarithmicDepthBuffer===!0,p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),y=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),u=t.getParameter(t.MAX_VARYING_VECTORS),g=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),x=h>0,S=a||e.has("OES_texture_float"),N=x&&S,C=a?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:f,maxTextures:p,maxVertexTextures:h,maxTextureSize:v,maxCubemapSize:_,maxAttributes:y,maxVertexUniforms:m,maxVaryings:u,maxFragmentUniforms:g,vertexTextures:x,floatFragmentTextures:S,floatVertexTextures:N,maxSamples:C}}function jT(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new sr,o=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,h){const v=p.length!==0||h||i!==0||r;return r=h,i=p.length,v},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,h){n=f(p,h,0)},this.setState=function(p,h,v){const _=p.clippingPlanes,y=p.clipIntersection,m=p.clipShadows,u=t.get(p);if(!r||_===null||_.length===0||s&&!m)s?f(null):c();else{const g=s?0:i,x=g*4;let S=u.clippingState||null;l.value=S,S=f(_,h,x,v);for(let N=0;N!==x;++N)S[N]=n[N];u.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(p,h,v,_){const y=p!==null?p.length:0;let m=null;if(y!==0){if(m=l.value,_!==!0||m===null){const u=v+y*4,g=h.matrixWorldInverse;o.getNormalMatrix(g),(m===null||m.length<u)&&(m=new Float32Array(u));for(let x=0,S=v;x!==y;++x,S+=4)a.copy(p[x]).applyMatrix4(g,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function GT(t){let e=new WeakMap;function n(a,o){return o===Wu?a.mapping=Ss:o===Xu&&(a.mapping=Es),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Wu||o===Xu)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new tE(l.height/2);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class VT extends kv{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const is=4,Mp=[.125,.215,.35,.446,.526,.582],lr=20,Gc=new VT,Tp=new qe;let Vc=null,Wc=0,Xc=0;const ar=(1+Math.sqrt(5))/2,Gr=1/ar,wp=[new X(1,1,1),new X(-1,1,1),new X(1,1,-1),new X(-1,1,-1),new X(0,ar,Gr),new X(0,ar,-Gr),new X(Gr,0,ar),new X(-Gr,0,ar),new X(ar,Gr,0),new X(-ar,Gr,0)];class Ap{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Vc=this._renderer.getRenderTarget(),Wc=this._renderer.getActiveCubeFace(),Xc=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Vc,Wc,Xc),e.scissorTest=!1,Mo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ss||e.mapping===Es?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vc=this._renderer.getRenderTarget(),Wc=this._renderer.getActiveCubeFace(),Xc=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:En,minFilter:En,generateMipmaps:!1,type:wa,format:kn,colorSpace:mi,depthBuffer:!1},r=bp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=WT(s)),this._blurMaterial=XT(s,e,n)}return r}_compileMaterial(e){const n=new Di(this._lodPlanes[0],e);this._renderer.compile(n,Gc)}_sceneToCubeUV(e,n,i,r){const o=new dn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,p=f.autoClear,h=f.toneMapping;f.getClearColor(Tp),f.toneMapping=Gi,f.autoClear=!1;const v=new Dv({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),_=new Di(new Ua,v);let y=!1;const m=e.background;m?m.isColor&&(v.color.copy(m),e.background=null,y=!0):(v.color.copy(Tp),y=!0);for(let u=0;u<6;u++){const g=u%3;g===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):g===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));const x=this._cubeSize;Mo(r,g*x,u>2?x:0,x,x),f.setRenderTarget(r),y&&f.render(_,o),f.render(e,o)}_.geometry.dispose(),_.material.dispose(),f.toneMapping=h,f.autoClear=p,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ss||e.mapping===Es;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cp());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Di(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Mo(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,Gc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=wp[(r-1)%wp.length];this._blur(e,r-1,r,s,a)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,p=new Di(this._lodPlanes[r],c),h=c.uniforms,v=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*v):2*Math.PI/(2*lr-1),y=s/_,m=isFinite(s)?1+Math.floor(f*y):lr;m>lr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${lr}`);const u=[];let g=0;for(let T=0;T<lr;++T){const z=T/y,E=Math.exp(-z*z/2);u.push(E),T===0?g+=E:T<m&&(g+=2*E)}for(let T=0;T<u.length;T++)u[T]=u[T]/g;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=u,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:x}=this;h.dTheta.value=_,h.mipInt.value=x-i;const S=this._sizeLods[r],N=3*S*(r>x-is?r-x+is:0),C=4*(this._cubeSize-S);Mo(n,N,C,3*S,2*S),l.setRenderTarget(n),l.render(p,Gc)}}function WT(t){const e=[],n=[],i=[];let r=t;const s=t-is+1+Mp.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-is?l=Mp[a-t+is-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),f=-c,p=1+c,h=[f,f,p,f,p,p,f,f,p,p,f,p],v=6,_=6,y=3,m=2,u=1,g=new Float32Array(y*_*v),x=new Float32Array(m*_*v),S=new Float32Array(u*_*v);for(let C=0;C<v;C++){const T=C%3*2/3-1,z=C>2?0:-1,E=[T,z,0,T+2/3,z,0,T+2/3,z+1,0,T,z,0,T+2/3,z+1,0,T,z+1,0];g.set(E,y*_*C),x.set(h,m*_*C);const w=[C,C,C,C,C,C];S.set(w,u*_*C)}const N=new $n;N.setAttribute("position",new Bn(g,y)),N.setAttribute("uv",new Bn(x,m)),N.setAttribute("faceIndex",new Bn(S,u)),e.push(N),r>is&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function bp(t,e,n){const i=new Mr(t,e,n);return i.texture.mapping=Ol,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Mo(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function XT(t,e,n){const i=new Float32Array(lr),r=new X(0,1,0);return new Tr({name:"SphericalGaussianBlur",defines:{n:lr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:eh(),fragmentShader:`

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
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Cp(){return new Tr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:eh(),fragmentShader:`

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
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Rp(){return new Tr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:eh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function eh(){return`

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
	`}function qT(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Wu||l===Xu,f=l===Ss||l===Es;if(c||f)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let p=e.get(o);return n===null&&(n=new Ap(t)),p=c?n.fromEquirectangular(o,p):n.fromCubemap(o,p),e.set(o,p),p.texture}else{if(e.has(o))return e.get(o).texture;{const p=o.image;if(c&&p&&p.height>0||f&&p&&r(p)){n===null&&(n=new Ap(t));const h=c?n.fromEquirectangular(o):n.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",s),h.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let f=0;f<c;f++)o[f]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function YT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function $T(t,e,n,i){const r={},s=new WeakMap;function a(p){const h=p.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const y=h.morphAttributes[_];for(let m=0,u=y.length;m<u;m++)e.remove(y[m])}h.removeEventListener("dispose",a),delete r[h.id];const v=s.get(h);v&&(e.remove(v),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function o(p,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,n.memory.geometries++),h}function l(p){const h=p.attributes;for(const _ in h)e.update(h[_],t.ARRAY_BUFFER);const v=p.morphAttributes;for(const _ in v){const y=v[_];for(let m=0,u=y.length;m<u;m++)e.update(y[m],t.ARRAY_BUFFER)}}function c(p){const h=[],v=p.index,_=p.attributes.position;let y=0;if(v!==null){const g=v.array;y=v.version;for(let x=0,S=g.length;x<S;x+=3){const N=g[x+0],C=g[x+1],T=g[x+2];h.push(N,C,C,T,T,N)}}else if(_!==void 0){const g=_.array;y=_.version;for(let x=0,S=g.length/3-1;x<S;x+=3){const N=x+0,C=x+1,T=x+2;h.push(N,C,C,T,T,N)}}else return;const m=new(Av(h)?Uv:Iv)(h,1);m.version=y;const u=s.get(p);u&&e.remove(u),s.set(p,m)}function f(p){const h=s.get(p);if(h){const v=p.index;v!==null&&h.version<v.version&&c(p)}else c(p);return s.get(p)}return{get:o,update:l,getWireframeAttribute:f}}function KT(t,e,n,i){const r=i.isWebGL2;let s;function a(v){s=v}let o,l;function c(v){o=v.type,l=v.bytesPerElement}function f(v,_){t.drawElements(s,_,o,v*l),n.update(_,s,1)}function p(v,_,y){if(y===0)return;let m,u;if(r)m=t,u="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[u](s,_,o,v*l,y),n.update(_,s,y)}function h(v,_,y){if(y===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<y;u++)this.render(v[u]/l,_[u]);else{m.multiDrawElementsWEBGL(s,_,0,o,v,0,y);let u=0;for(let g=0;g<y;g++)u+=_[g];n.update(u,s,1)}}this.setMode=a,this.setIndex=c,this.render=f,this.renderInstances=p,this.renderMultiDraw=h}function ZT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function QT(t,e){return t[0]-e[0]}function JT(t,e){return Math.abs(e[1])-Math.abs(t[1])}function ew(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,a=new Lt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,f,p){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,y=_!==void 0?_.length:0;let m=s.get(f);if(m===void 0||m.count!==y){let O=function(){Z.dispose(),s.delete(f),f.removeEventListener("dispose",O)};var v=O;m!==void 0&&m.texture.dispose();const x=f.morphAttributes.position!==void 0,S=f.morphAttributes.normal!==void 0,N=f.morphAttributes.color!==void 0,C=f.morphAttributes.position||[],T=f.morphAttributes.normal||[],z=f.morphAttributes.color||[];let E=0;x===!0&&(E=1),S===!0&&(E=2),N===!0&&(E=3);let w=f.attributes.position.count*E,U=1;w>e.maxTextureSize&&(U=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const L=new Float32Array(w*U*4*y),Z=new Rv(L,w,U,y);Z.type=Li,Z.needsUpdate=!0;const P=E*4;for(let q=0;q<y;q++){const Q=C[q],F=T[q],k=z[q],R=w*U*4*q;for(let D=0;D<Q.count;D++){const K=D*P;x===!0&&(a.fromBufferAttribute(Q,D),L[R+K+0]=a.x,L[R+K+1]=a.y,L[R+K+2]=a.z,L[R+K+3]=0),S===!0&&(a.fromBufferAttribute(F,D),L[R+K+4]=a.x,L[R+K+5]=a.y,L[R+K+6]=a.z,L[R+K+7]=0),N===!0&&(a.fromBufferAttribute(k,D),L[R+K+8]=a.x,L[R+K+9]=a.y,L[R+K+10]=a.z,L[R+K+11]=k.itemSize===4?a.w:1)}}m={count:y,texture:Z,size:new Je(w,U)},s.set(f,m),f.addEventListener("dispose",O)}let u=0;for(let x=0;x<h.length;x++)u+=h[x];const g=f.morphTargetsRelative?1:1-u;p.getUniforms().setValue(t,"morphTargetBaseInfluence",g),p.getUniforms().setValue(t,"morphTargetInfluences",h),p.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),p.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}else{const _=h===void 0?0:h.length;let y=i[f.id];if(y===void 0||y.length!==_){y=[];for(let S=0;S<_;S++)y[S]=[S,0];i[f.id]=y}for(let S=0;S<_;S++){const N=y[S];N[0]=S,N[1]=h[S]}y.sort(JT);for(let S=0;S<8;S++)S<_&&y[S][1]?(o[S][0]=y[S][0],o[S][1]=y[S][1]):(o[S][0]=Number.MAX_SAFE_INTEGER,o[S][1]=0);o.sort(QT);const m=f.morphAttributes.position,u=f.morphAttributes.normal;let g=0;for(let S=0;S<8;S++){const N=o[S],C=N[0],T=N[1];C!==Number.MAX_SAFE_INTEGER&&T?(m&&f.getAttribute("morphTarget"+S)!==m[C]&&f.setAttribute("morphTarget"+S,m[C]),u&&f.getAttribute("morphNormal"+S)!==u[C]&&f.setAttribute("morphNormal"+S,u[C]),r[S]=T,g+=T):(m&&f.hasAttribute("morphTarget"+S)===!0&&f.deleteAttribute("morphTarget"+S),u&&f.hasAttribute("morphNormal"+S)===!0&&f.deleteAttribute("morphNormal"+S),r[S]=0)}const x=f.morphTargetsRelative?1:1-g;p.getUniforms().setValue(t,"morphTargetBaseInfluence",x),p.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function tw(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,f=l.geometry,p=e.get(l,f);if(r.get(p)!==c&&(e.update(p),r.set(p,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return p}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}class Hv extends pn{constructor(e,n,i,r,s,a,o,l,c,f){if(f=f!==void 0?f:gr,f!==gr&&f!==Ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===gr&&(i=Pi),i===void 0&&f===Ms&&(i=mr),super(null,r,s,a,o,l,f,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:qt,this.minFilter=l!==void 0?l:qt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const jv=new pn,Gv=new Hv(1,1);Gv.compareFunction=wv;const Vv=new Rv,Wv=new OS,Xv=new Ov,Np=[],Pp=[],Lp=new Float32Array(16),Dp=new Float32Array(9),Ip=new Float32Array(4);function Ns(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Np[r];if(s===void 0&&(s=new Float32Array(r),Np[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Et(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Mt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function jl(t,e){let n=Pp[e];n===void 0&&(n=new Int32Array(e),Pp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function nw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function iw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Et(n,e))return;t.uniform2fv(this.addr,e),Mt(n,e)}}function rw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Et(n,e))return;t.uniform3fv(this.addr,e),Mt(n,e)}}function sw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Et(n,e))return;t.uniform4fv(this.addr,e),Mt(n,e)}}function aw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Et(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Mt(n,e)}else{if(Et(n,i))return;Ip.set(i),t.uniformMatrix2fv(this.addr,!1,Ip),Mt(n,i)}}function ow(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Et(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Mt(n,e)}else{if(Et(n,i))return;Dp.set(i),t.uniformMatrix3fv(this.addr,!1,Dp),Mt(n,i)}}function lw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Et(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Mt(n,e)}else{if(Et(n,i))return;Lp.set(i),t.uniformMatrix4fv(this.addr,!1,Lp),Mt(n,i)}}function cw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function uw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Et(n,e))return;t.uniform2iv(this.addr,e),Mt(n,e)}}function dw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Et(n,e))return;t.uniform3iv(this.addr,e),Mt(n,e)}}function hw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Et(n,e))return;t.uniform4iv(this.addr,e),Mt(n,e)}}function fw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function pw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Et(n,e))return;t.uniform2uiv(this.addr,e),Mt(n,e)}}function mw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Et(n,e))return;t.uniform3uiv(this.addr,e),Mt(n,e)}}function gw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Et(n,e))return;t.uniform4uiv(this.addr,e),Mt(n,e)}}function vw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?Gv:jv;n.setTexture2D(e||s,r)}function _w(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Wv,r)}function xw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Xv,r)}function yw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Vv,r)}function Sw(t){switch(t){case 5126:return nw;case 35664:return iw;case 35665:return rw;case 35666:return sw;case 35674:return aw;case 35675:return ow;case 35676:return lw;case 5124:case 35670:return cw;case 35667:case 35671:return uw;case 35668:case 35672:return dw;case 35669:case 35673:return hw;case 5125:return fw;case 36294:return pw;case 36295:return mw;case 36296:return gw;case 35678:case 36198:case 36298:case 36306:case 35682:return vw;case 35679:case 36299:case 36307:return _w;case 35680:case 36300:case 36308:case 36293:return xw;case 36289:case 36303:case 36311:case 36292:return yw}}function Ew(t,e){t.uniform1fv(this.addr,e)}function Mw(t,e){const n=Ns(e,this.size,2);t.uniform2fv(this.addr,n)}function Tw(t,e){const n=Ns(e,this.size,3);t.uniform3fv(this.addr,n)}function ww(t,e){const n=Ns(e,this.size,4);t.uniform4fv(this.addr,n)}function Aw(t,e){const n=Ns(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function bw(t,e){const n=Ns(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Cw(t,e){const n=Ns(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Rw(t,e){t.uniform1iv(this.addr,e)}function Nw(t,e){t.uniform2iv(this.addr,e)}function Pw(t,e){t.uniform3iv(this.addr,e)}function Lw(t,e){t.uniform4iv(this.addr,e)}function Dw(t,e){t.uniform1uiv(this.addr,e)}function Iw(t,e){t.uniform2uiv(this.addr,e)}function Uw(t,e){t.uniform3uiv(this.addr,e)}function Fw(t,e){t.uniform4uiv(this.addr,e)}function kw(t,e,n){const i=this.cache,r=e.length,s=jl(n,r);Et(i,s)||(t.uniform1iv(this.addr,s),Mt(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||jv,s[a])}function Ow(t,e,n){const i=this.cache,r=e.length,s=jl(n,r);Et(i,s)||(t.uniform1iv(this.addr,s),Mt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Wv,s[a])}function zw(t,e,n){const i=this.cache,r=e.length,s=jl(n,r);Et(i,s)||(t.uniform1iv(this.addr,s),Mt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||Xv,s[a])}function Bw(t,e,n){const i=this.cache,r=e.length,s=jl(n,r);Et(i,s)||(t.uniform1iv(this.addr,s),Mt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Vv,s[a])}function Hw(t){switch(t){case 5126:return Ew;case 35664:return Mw;case 35665:return Tw;case 35666:return ww;case 35674:return Aw;case 35675:return bw;case 35676:return Cw;case 5124:case 35670:return Rw;case 35667:case 35671:return Nw;case 35668:case 35672:return Pw;case 35669:case 35673:return Lw;case 5125:return Dw;case 36294:return Iw;case 36295:return Uw;case 36296:return Fw;case 35678:case 36198:case 36298:case 36306:case 35682:return kw;case 35679:case 36299:case 36307:return Ow;case 35680:case 36300:case 36308:case 36293:return zw;case 36289:case 36303:case 36311:case 36292:return Bw}}class jw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Sw(n.type)}}class Gw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Hw(n.type)}}class Vw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const qc=/(\w+)(\])?(\[|\.)?/g;function Up(t,e){t.seq.push(e),t.map[e.id]=e}function Ww(t,e,n){const i=t.name,r=i.length;for(qc.lastIndex=0;;){const s=qc.exec(i),a=qc.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Up(n,c===void 0?new jw(o,t,e):new Gw(o,t,e));break}else{let p=n.map[o];p===void 0&&(p=new Vw(o),Up(n,p)),n=p}}}class Bo{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);Ww(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Fp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Xw=37297;let qw=0;function Yw(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function $w(t){const e=Qe.getPrimaries(Qe.workingColorSpace),n=Qe.getPrimaries(t);let i;switch(e===n?i="":e===vl&&n===gl?i="LinearDisplayP3ToLinearSRGB":e===gl&&n===vl&&(i="LinearSRGBToLinearDisplayP3"),t){case mi:case zl:return[i,"LinearTransferOETF"];case Pt:case Zd:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function kp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+Yw(t.getShaderSource(e),a)}else return r}function Kw(t,e){const n=$w(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function Zw(t,e){let n;switch(e){case qy:n="Linear";break;case Yy:n="Reinhard";break;case $y:n="OptimizedCineon";break;case Ky:n="ACESFilmic";break;case Qy:n="AgX";break;case Zy:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function Qw(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(rs).join(`
`)}function Jw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(rs).join(`
`)}function e1(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function t1(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function rs(t){return t!==""}function Op(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const n1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zu(t){return t.replace(n1,r1)}const i1=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function r1(t,e){let n=Oe[e];if(n===void 0){const i=i1.get(e);if(i!==void 0)n=Oe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Zu(n)}const s1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bp(t){return t.replace(s1,a1)}function a1(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Hp(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function o1(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===pv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Sy?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ni&&(e="SHADOWMAP_TYPE_VSM"),e}function l1(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ss:case Es:e="ENVMAP_TYPE_CUBE";break;case Ol:e="ENVMAP_TYPE_CUBE_UV";break}return e}function c1(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Es:e="ENVMAP_MODE_REFRACTION";break}return e}function u1(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case mv:e="ENVMAP_BLENDING_MULTIPLY";break;case Wy:e="ENVMAP_BLENDING_MIX";break;case Xy:e="ENVMAP_BLENDING_ADD";break}return e}function d1(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function h1(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=o1(n),c=l1(n),f=c1(n),p=u1(n),h=d1(n),v=n.isWebGL2?"":Qw(n),_=Jw(n),y=e1(s),m=r.createProgram();let u,g,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(rs).join(`
`),u.length>0&&(u+=`
`),g=[v,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(rs).join(`
`),g.length>0&&(g+=`
`)):(u=[Hp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rs).join(`
`),g=[v,Hp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+p:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Gi?"#define TONE_MAPPING":"",n.toneMapping!==Gi?Oe.tonemapping_pars_fragment:"",n.toneMapping!==Gi?Zw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,Kw("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(rs).join(`
`)),a=Zu(a),a=Op(a,n),a=zp(a,n),o=Zu(o),o=Op(o,n),o=zp(o,n),a=Bp(a),o=Bp(o),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,u=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,g=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===rp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===rp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const S=x+u+a,N=x+g+o,C=Fp(r,r.VERTEX_SHADER,S),T=Fp(r,r.FRAGMENT_SHADER,N);r.attachShader(m,C),r.attachShader(m,T),n.index0AttributeName!==void 0?r.bindAttribLocation(m,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function z(L){if(t.debug.checkShaderErrors){const Z=r.getProgramInfoLog(m).trim(),P=r.getShaderInfoLog(C).trim(),O=r.getShaderInfoLog(T).trim();let q=!0,Q=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,m,C,T);else{const F=kp(r,C,"vertex"),k=kp(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+Z+`
`+F+`
`+k)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(P===""||O==="")&&(Q=!1);Q&&(L.diagnostics={runnable:q,programLog:Z,vertexShader:{log:P,prefix:u},fragmentShader:{log:O,prefix:g}})}r.deleteShader(C),r.deleteShader(T),E=new Bo(r,m),w=t1(r,m)}let E;this.getUniforms=function(){return E===void 0&&z(this),E};let w;this.getAttributes=function(){return w===void 0&&z(this),w};let U=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=r.getProgramParameter(m,Xw)),U},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=qw++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=C,this.fragmentShader=T,this}let f1=0;class p1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new m1(e),n.set(e,i)),i}}class m1{constructor(e){this.id=f1++,this.code=e,this.usedTimes=0}}function g1(t,e,n,i,r,s,a){const o=new Pv,l=new p1,c=[],f=r.isWebGL2,p=r.logarithmicDepthBuffer,h=r.vertexTextures;let v=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(E){return E===0?"uv":`uv${E}`}function m(E,w,U,L,Z){const P=L.fog,O=Z.geometry,q=E.isMeshStandardMaterial?L.environment:null,Q=(E.isMeshStandardMaterial?n:e).get(E.envMap||q),F=Q&&Q.mapping===Ol?Q.image.height:null,k=_[E.type];E.precision!==null&&(v=r.getMaxPrecision(E.precision),v!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",v,"instead."));const R=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,D=R!==void 0?R.length:0;let K=0;O.morphAttributes.position!==void 0&&(K=1),O.morphAttributes.normal!==void 0&&(K=2),O.morphAttributes.color!==void 0&&(K=3);let H,Y,ae,ce;if(k){const jt=Wn[k];H=jt.vertexShader,Y=jt.fragmentShader}else H=E.vertexShader,Y=E.fragmentShader,l.update(E),ae=l.getVertexShaderID(E),ce=l.getFragmentShaderID(E);const pe=t.getRenderTarget(),Ae=Z.isInstancedMesh===!0,Le=Z.isBatchedMesh===!0,we=!!E.map,Xe=!!E.matcap,G=!!Q,vt=!!E.aoMap,Ee=!!E.lightMap,J=!!E.bumpMap,ee=!!E.normalMap,me=!!E.displacementMap,_e=!!E.emissiveMap,b=!!E.metalnessMap,M=!!E.roughnessMap,j=E.anisotropy>0,re=E.clearcoat>0,ne=E.iridescence>0,se=E.sheen>0,Me=E.transmission>0,he=j&&!!E.anisotropyMap,xe=re&&!!E.clearcoatMap,Ne=re&&!!E.clearcoatNormalMap,ze=re&&!!E.clearcoatRoughnessMap,te=ne&&!!E.iridescenceMap,Ze=ne&&!!E.iridescenceThicknessMap,Ve=se&&!!E.sheenColorMap,Ie=se&&!!E.sheenRoughnessMap,be=!!E.specularMap,ye=!!E.specularColorMap,ke=!!E.specularIntensityMap,$e=Me&&!!E.transmissionMap,ht=Me&&!!E.thicknessMap,He=!!E.gradientMap,oe=!!E.alphaMap,I=E.alphaTest>0,ue=!!E.alphaHash,de=!!E.extensions,Pe=!!O.attributes.uv1,Ce=!!O.attributes.uv2,et=!!O.attributes.uv3;let tt=Gi;return E.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(tt=t.toneMapping),{isWebGL2:f,shaderID:k,shaderType:E.type,shaderName:E.name,vertexShader:H,fragmentShader:Y,defines:E.defines,customVertexShaderID:ae,customFragmentShaderID:ce,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:v,batching:Le,instancing:Ae,instancingColor:Ae&&Z.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:pe===null?t.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:mi,map:we,matcap:Xe,envMap:G,envMapMode:G&&Q.mapping,envMapCubeUVHeight:F,aoMap:vt,lightMap:Ee,bumpMap:J,normalMap:ee,displacementMap:h&&me,emissiveMap:_e,normalMapObjectSpace:ee&&E.normalMapType===dS,normalMapTangentSpace:ee&&E.normalMapType===uS,metalnessMap:b,roughnessMap:M,anisotropy:j,anisotropyMap:he,clearcoat:re,clearcoatMap:xe,clearcoatNormalMap:Ne,clearcoatRoughnessMap:ze,iridescence:ne,iridescenceMap:te,iridescenceThicknessMap:Ze,sheen:se,sheenColorMap:Ve,sheenRoughnessMap:Ie,specularMap:be,specularColorMap:ye,specularIntensityMap:ke,transmission:Me,transmissionMap:$e,thicknessMap:ht,gradientMap:He,opaque:E.transparent===!1&&E.blending===ds,alphaMap:oe,alphaTest:I,alphaHash:ue,combine:E.combine,mapUv:we&&y(E.map.channel),aoMapUv:vt&&y(E.aoMap.channel),lightMapUv:Ee&&y(E.lightMap.channel),bumpMapUv:J&&y(E.bumpMap.channel),normalMapUv:ee&&y(E.normalMap.channel),displacementMapUv:me&&y(E.displacementMap.channel),emissiveMapUv:_e&&y(E.emissiveMap.channel),metalnessMapUv:b&&y(E.metalnessMap.channel),roughnessMapUv:M&&y(E.roughnessMap.channel),anisotropyMapUv:he&&y(E.anisotropyMap.channel),clearcoatMapUv:xe&&y(E.clearcoatMap.channel),clearcoatNormalMapUv:Ne&&y(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ze&&y(E.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&y(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ze&&y(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ve&&y(E.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&y(E.sheenRoughnessMap.channel),specularMapUv:be&&y(E.specularMap.channel),specularColorMapUv:ye&&y(E.specularColorMap.channel),specularIntensityMapUv:ke&&y(E.specularIntensityMap.channel),transmissionMapUv:$e&&y(E.transmissionMap.channel),thicknessMapUv:ht&&y(E.thicknessMap.channel),alphaMapUv:oe&&y(E.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(ee||j),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:Pe,vertexUv2s:Ce,vertexUv3s:et,pointsUvs:Z.isPoints===!0&&!!O.attributes.uv&&(we||oe),fog:!!P,useFog:E.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:Z.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:D,morphTextureStride:K,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&U.length>0,shadowMapType:t.shadowMap.type,toneMapping:tt,useLegacyLights:t._useLegacyLights,decodeVideoTexture:we&&E.map.isVideoTexture===!0&&Qe.getTransfer(E.map.colorSpace)===st,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===si,flipSided:E.side===rn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:de&&E.extensions.derivatives===!0,extensionFragDepth:de&&E.extensions.fragDepth===!0,extensionDrawBuffers:de&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:de&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:de&&E.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function u(E){const w=[];if(E.shaderID?w.push(E.shaderID):(w.push(E.customVertexShaderID),w.push(E.customFragmentShaderID)),E.defines!==void 0)for(const U in E.defines)w.push(U),w.push(E.defines[U]);return E.isRawShaderMaterial===!1&&(g(w,E),x(w,E),w.push(t.outputColorSpace)),w.push(E.customProgramCacheKey),w.join()}function g(E,w){E.push(w.precision),E.push(w.outputColorSpace),E.push(w.envMapMode),E.push(w.envMapCubeUVHeight),E.push(w.mapUv),E.push(w.alphaMapUv),E.push(w.lightMapUv),E.push(w.aoMapUv),E.push(w.bumpMapUv),E.push(w.normalMapUv),E.push(w.displacementMapUv),E.push(w.emissiveMapUv),E.push(w.metalnessMapUv),E.push(w.roughnessMapUv),E.push(w.anisotropyMapUv),E.push(w.clearcoatMapUv),E.push(w.clearcoatNormalMapUv),E.push(w.clearcoatRoughnessMapUv),E.push(w.iridescenceMapUv),E.push(w.iridescenceThicknessMapUv),E.push(w.sheenColorMapUv),E.push(w.sheenRoughnessMapUv),E.push(w.specularMapUv),E.push(w.specularColorMapUv),E.push(w.specularIntensityMapUv),E.push(w.transmissionMapUv),E.push(w.thicknessMapUv),E.push(w.combine),E.push(w.fogExp2),E.push(w.sizeAttenuation),E.push(w.morphTargetsCount),E.push(w.morphAttributeCount),E.push(w.numDirLights),E.push(w.numPointLights),E.push(w.numSpotLights),E.push(w.numSpotLightMaps),E.push(w.numHemiLights),E.push(w.numRectAreaLights),E.push(w.numDirLightShadows),E.push(w.numPointLightShadows),E.push(w.numSpotLightShadows),E.push(w.numSpotLightShadowsWithMaps),E.push(w.numLightProbes),E.push(w.shadowMapType),E.push(w.toneMapping),E.push(w.numClippingPlanes),E.push(w.numClipIntersection),E.push(w.depthPacking)}function x(E,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),E.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.useLegacyLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),E.push(o.mask)}function S(E){const w=_[E.type];let U;if(w){const L=Wn[w];U=ZS.clone(L.uniforms)}else U=E.uniforms;return U}function N(E,w){let U;for(let L=0,Z=c.length;L<Z;L++){const P=c[L];if(P.cacheKey===w){U=P,++U.usedTimes;break}}return U===void 0&&(U=new h1(t,w,E,s),c.push(U)),U}function C(E){if(--E.usedTimes===0){const w=c.indexOf(E);c[w]=c[c.length-1],c.pop(),E.destroy()}}function T(E){l.remove(E)}function z(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:S,acquireProgram:N,releaseProgram:C,releaseShaderCache:T,programs:c,dispose:z}}function v1(){let t=new WeakMap;function e(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function n(s){t.delete(s)}function i(s,a,o){t.get(s)[a]=o}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function _1(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function jp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Gp(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(p,h,v,_,y,m){let u=t[e];return u===void 0?(u={id:p.id,object:p,geometry:h,material:v,groupOrder:_,renderOrder:p.renderOrder,z:y,group:m},t[e]=u):(u.id=p.id,u.object=p,u.geometry=h,u.material=v,u.groupOrder=_,u.renderOrder=p.renderOrder,u.z=y,u.group=m),e++,u}function o(p,h,v,_,y,m){const u=a(p,h,v,_,y,m);v.transmission>0?i.push(u):v.transparent===!0?r.push(u):n.push(u)}function l(p,h,v,_,y,m){const u=a(p,h,v,_,y,m);v.transmission>0?i.unshift(u):v.transparent===!0?r.unshift(u):n.unshift(u)}function c(p,h){n.length>1&&n.sort(p||_1),i.length>1&&i.sort(h||jp),r.length>1&&r.sort(h||jp)}function f(){for(let p=e,h=t.length;p<h;p++){const v=t[p];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:f,sort:c}}function x1(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Gp,t.set(i,[a])):r>=s.length?(a=new Gp,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function y1(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new X,color:new qe};break;case"SpotLight":n={position:new X,direction:new X,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new X,color:new qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new X,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":n={color:new qe,position:new X,halfWidth:new X,halfHeight:new X};break}return t[e.id]=n,n}}}function S1(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let E1=0;function M1(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function T1(t,e){const n=new y1,i=S1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)r.probe.push(new X);const s=new X,a=new Rt,o=new Rt;function l(f,p){let h=0,v=0,_=0;for(let L=0;L<9;L++)r.probe[L].set(0,0,0);let y=0,m=0,u=0,g=0,x=0,S=0,N=0,C=0,T=0,z=0,E=0;f.sort(M1);const w=p===!0?Math.PI:1;for(let L=0,Z=f.length;L<Z;L++){const P=f[L],O=P.color,q=P.intensity,Q=P.distance,F=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=O.r*q*w,v+=O.g*q*w,_+=O.b*q*w;else if(P.isLightProbe){for(let k=0;k<9;k++)r.probe[k].addScaledVector(P.sh.coefficients[k],q);E++}else if(P.isDirectionalLight){const k=n.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity*w),P.castShadow){const R=P.shadow,D=i.get(P);D.shadowBias=R.bias,D.shadowNormalBias=R.normalBias,D.shadowRadius=R.radius,D.shadowMapSize=R.mapSize,r.directionalShadow[y]=D,r.directionalShadowMap[y]=F,r.directionalShadowMatrix[y]=P.shadow.matrix,S++}r.directional[y]=k,y++}else if(P.isSpotLight){const k=n.get(P);k.position.setFromMatrixPosition(P.matrixWorld),k.color.copy(O).multiplyScalar(q*w),k.distance=Q,k.coneCos=Math.cos(P.angle),k.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),k.decay=P.decay,r.spot[u]=k;const R=P.shadow;if(P.map&&(r.spotLightMap[T]=P.map,T++,R.updateMatrices(P),P.castShadow&&z++),r.spotLightMatrix[u]=R.matrix,P.castShadow){const D=i.get(P);D.shadowBias=R.bias,D.shadowNormalBias=R.normalBias,D.shadowRadius=R.radius,D.shadowMapSize=R.mapSize,r.spotShadow[u]=D,r.spotShadowMap[u]=F,C++}u++}else if(P.isRectAreaLight){const k=n.get(P);k.color.copy(O).multiplyScalar(q),k.halfWidth.set(P.width*.5,0,0),k.halfHeight.set(0,P.height*.5,0),r.rectArea[g]=k,g++}else if(P.isPointLight){const k=n.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity*w),k.distance=P.distance,k.decay=P.decay,P.castShadow){const R=P.shadow,D=i.get(P);D.shadowBias=R.bias,D.shadowNormalBias=R.normalBias,D.shadowRadius=R.radius,D.shadowMapSize=R.mapSize,D.shadowCameraNear=R.camera.near,D.shadowCameraFar=R.camera.far,r.pointShadow[m]=D,r.pointShadowMap[m]=F,r.pointShadowMatrix[m]=P.shadow.matrix,N++}r.point[m]=k,m++}else if(P.isHemisphereLight){const k=n.get(P);k.skyColor.copy(P.color).multiplyScalar(q*w),k.groundColor.copy(P.groundColor).multiplyScalar(q*w),r.hemi[x]=k,x++}}g>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=le.LTC_FLOAT_1,r.rectAreaLTC2=le.LTC_FLOAT_2):(r.rectAreaLTC1=le.LTC_HALF_1,r.rectAreaLTC2=le.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=le.LTC_FLOAT_1,r.rectAreaLTC2=le.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=le.LTC_HALF_1,r.rectAreaLTC2=le.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=v,r.ambient[2]=_;const U=r.hash;(U.directionalLength!==y||U.pointLength!==m||U.spotLength!==u||U.rectAreaLength!==g||U.hemiLength!==x||U.numDirectionalShadows!==S||U.numPointShadows!==N||U.numSpotShadows!==C||U.numSpotMaps!==T||U.numLightProbes!==E)&&(r.directional.length=y,r.spot.length=u,r.rectArea.length=g,r.point.length=m,r.hemi.length=x,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=C+T-z,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=z,r.numLightProbes=E,U.directionalLength=y,U.pointLength=m,U.spotLength=u,U.rectAreaLength=g,U.hemiLength=x,U.numDirectionalShadows=S,U.numPointShadows=N,U.numSpotShadows=C,U.numSpotMaps=T,U.numLightProbes=E,r.version=E1++)}function c(f,p){let h=0,v=0,_=0,y=0,m=0;const u=p.matrixWorldInverse;for(let g=0,x=f.length;g<x;g++){const S=f[g];if(S.isDirectionalLight){const N=r.directional[h];N.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),N.direction.sub(s),N.direction.transformDirection(u),h++}else if(S.isSpotLight){const N=r.spot[_];N.position.setFromMatrixPosition(S.matrixWorld),N.position.applyMatrix4(u),N.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),N.direction.sub(s),N.direction.transformDirection(u),_++}else if(S.isRectAreaLight){const N=r.rectArea[y];N.position.setFromMatrixPosition(S.matrixWorld),N.position.applyMatrix4(u),o.identity(),a.copy(S.matrixWorld),a.premultiply(u),o.extractRotation(a),N.halfWidth.set(S.width*.5,0,0),N.halfHeight.set(0,S.height*.5,0),N.halfWidth.applyMatrix4(o),N.halfHeight.applyMatrix4(o),y++}else if(S.isPointLight){const N=r.point[v];N.position.setFromMatrixPosition(S.matrixWorld),N.position.applyMatrix4(u),v++}else if(S.isHemisphereLight){const N=r.hemi[m];N.direction.setFromMatrixPosition(S.matrixWorld),N.direction.transformDirection(u),m++}}}return{setup:l,setupView:c,state:r}}function Vp(t,e){const n=new T1(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(p){i.push(p)}function o(p){r.push(p)}function l(p){n.setup(i,p)}function c(p){n.setupView(i,p)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function w1(t,e){let n=new WeakMap;function i(s,a=0){const o=n.get(s);let l;return o===void 0?(l=new Vp(t,e),n.set(s,[l])):a>=o.length?(l=new Vp(t,e),o.push(l)):l=o[a],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class A1 extends Ia{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class b1 extends Ia{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const C1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,R1=`uniform sampler2D shadow_pass;
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
}`;function N1(t,e,n){let i=new zv;const r=new Je,s=new Je,a=new Lt,o=new A1({depthPacking:cS}),l=new b1,c={},f=n.maxTextureSize,p={[qi]:rn,[rn]:qi,[si]:si},h=new Tr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:C1,fragmentShader:R1}),v=h.clone();v.defines.HORIZONTAL_PASS=1;const _=new $n;_.setAttribute("position",new Bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Di(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pv;let u=this.type;this.render=function(C,T,z){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const E=t.getRenderTarget(),w=t.getActiveCubeFace(),U=t.getActiveMipmapLevel(),L=t.state;L.setBlending(ji),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const Z=u!==ni&&this.type===ni,P=u===ni&&this.type!==ni;for(let O=0,q=C.length;O<q;O++){const Q=C[O],F=Q.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);const k=F.getFrameExtents();if(r.multiply(k),s.copy(F.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/k.x),r.x=s.x*k.x,F.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/k.y),r.y=s.y*k.y,F.mapSize.y=s.y)),F.map===null||Z===!0||P===!0){const D=this.type!==ni?{minFilter:qt,magFilter:qt}:{};F.map!==null&&F.map.dispose(),F.map=new Mr(r.x,r.y,D),F.map.texture.name=Q.name+".shadowMap",F.camera.updateProjectionMatrix()}t.setRenderTarget(F.map),t.clear();const R=F.getViewportCount();for(let D=0;D<R;D++){const K=F.getViewport(D);a.set(s.x*K.x,s.y*K.y,s.x*K.z,s.y*K.w),L.viewport(a),F.updateMatrices(Q,D),i=F.getFrustum(),S(T,z,F.camera,Q,this.type)}F.isPointLightShadow!==!0&&this.type===ni&&g(F,z),F.needsUpdate=!1}u=this.type,m.needsUpdate=!1,t.setRenderTarget(E,w,U)};function g(C,T){const z=e.update(y);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,v.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,v.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Mr(r.x,r.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(T,null,z,h,y,null),v.uniforms.shadow_pass.value=C.mapPass.texture,v.uniforms.resolution.value=C.mapSize,v.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(T,null,z,v,y,null)}function x(C,T,z,E){let w=null;const U=z.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(U!==void 0)w=U;else if(w=z.isPointLight===!0?l:o,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const L=w.uuid,Z=T.uuid;let P=c[L];P===void 0&&(P={},c[L]=P);let O=P[Z];O===void 0&&(O=w.clone(),P[Z]=O,T.addEventListener("dispose",N)),w=O}if(w.visible=T.visible,w.wireframe=T.wireframe,E===ni?w.side=T.shadowSide!==null?T.shadowSide:T.side:w.side=T.shadowSide!==null?T.shadowSide:p[T.side],w.alphaMap=T.alphaMap,w.alphaTest=T.alphaTest,w.map=T.map,w.clipShadows=T.clipShadows,w.clippingPlanes=T.clippingPlanes,w.clipIntersection=T.clipIntersection,w.displacementMap=T.displacementMap,w.displacementScale=T.displacementScale,w.displacementBias=T.displacementBias,w.wireframeLinewidth=T.wireframeLinewidth,w.linewidth=T.linewidth,z.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const L=t.properties.get(w);L.light=z}return w}function S(C,T,z,E,w){if(C.visible===!1)return;if(C.layers.test(T.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&w===ni)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,C.matrixWorld);const Z=e.update(C),P=C.material;if(Array.isArray(P)){const O=Z.groups;for(let q=0,Q=O.length;q<Q;q++){const F=O[q],k=P[F.materialIndex];if(k&&k.visible){const R=x(C,k,E,w);C.onBeforeShadow(t,C,T,z,Z,R,F),t.renderBufferDirect(z,null,Z,R,C,F),C.onAfterShadow(t,C,T,z,Z,R,F)}}}else if(P.visible){const O=x(C,P,E,w);C.onBeforeShadow(t,C,T,z,Z,O,null),t.renderBufferDirect(z,null,Z,O,C,null),C.onAfterShadow(t,C,T,z,Z,O,null)}}const L=C.children;for(let Z=0,P=L.length;Z<P;Z++)S(L[Z],T,z,E,w)}function N(C){C.target.removeEventListener("dispose",N);for(const z in c){const E=c[z],w=C.target.uuid;w in E&&(E[w].dispose(),delete E[w])}}}function P1(t,e,n){const i=n.isWebGL2;function r(){let I=!1;const ue=new Lt;let de=null;const Pe=new Lt(0,0,0,0);return{setMask:function(Ce){de!==Ce&&!I&&(t.colorMask(Ce,Ce,Ce,Ce),de=Ce)},setLocked:function(Ce){I=Ce},setClear:function(Ce,et,tt,Tt,jt){jt===!0&&(Ce*=Tt,et*=Tt,tt*=Tt),ue.set(Ce,et,tt,Tt),Pe.equals(ue)===!1&&(t.clearColor(Ce,et,tt,Tt),Pe.copy(ue))},reset:function(){I=!1,de=null,Pe.set(-1,0,0,0)}}}function s(){let I=!1,ue=null,de=null,Pe=null;return{setTest:function(Ce){Ce?Le(t.DEPTH_TEST):we(t.DEPTH_TEST)},setMask:function(Ce){ue!==Ce&&!I&&(t.depthMask(Ce),ue=Ce)},setFunc:function(Ce){if(de!==Ce){switch(Ce){case Oy:t.depthFunc(t.NEVER);break;case zy:t.depthFunc(t.ALWAYS);break;case By:t.depthFunc(t.LESS);break;case pl:t.depthFunc(t.LEQUAL);break;case Hy:t.depthFunc(t.EQUAL);break;case jy:t.depthFunc(t.GEQUAL);break;case Gy:t.depthFunc(t.GREATER);break;case Vy:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}de=Ce}},setLocked:function(Ce){I=Ce},setClear:function(Ce){Pe!==Ce&&(t.clearDepth(Ce),Pe=Ce)},reset:function(){I=!1,ue=null,de=null,Pe=null}}}function a(){let I=!1,ue=null,de=null,Pe=null,Ce=null,et=null,tt=null,Tt=null,jt=null;return{setTest:function(nt){I||(nt?Le(t.STENCIL_TEST):we(t.STENCIL_TEST))},setMask:function(nt){ue!==nt&&!I&&(t.stencilMask(nt),ue=nt)},setFunc:function(nt,Gt,jn){(de!==nt||Pe!==Gt||Ce!==jn)&&(t.stencilFunc(nt,Gt,jn),de=nt,Pe=Gt,Ce=jn)},setOp:function(nt,Gt,jn){(et!==nt||tt!==Gt||Tt!==jn)&&(t.stencilOp(nt,Gt,jn),et=nt,tt=Gt,Tt=jn)},setLocked:function(nt){I=nt},setClear:function(nt){jt!==nt&&(t.clearStencil(nt),jt=nt)},reset:function(){I=!1,ue=null,de=null,Pe=null,Ce=null,et=null,tt=null,Tt=null,jt=null}}}const o=new r,l=new s,c=new a,f=new WeakMap,p=new WeakMap;let h={},v={},_=new WeakMap,y=[],m=null,u=!1,g=null,x=null,S=null,N=null,C=null,T=null,z=null,E=new qe(0,0,0),w=0,U=!1,L=null,Z=null,P=null,O=null,q=null;const Q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,k=0;const R=t.getParameter(t.VERSION);R.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(R)[1]),F=k>=1):R.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(R)[1]),F=k>=2);let D=null,K={};const H=t.getParameter(t.SCISSOR_BOX),Y=t.getParameter(t.VIEWPORT),ae=new Lt().fromArray(H),ce=new Lt().fromArray(Y);function pe(I,ue,de,Pe){const Ce=new Uint8Array(4),et=t.createTexture();t.bindTexture(I,et),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let tt=0;tt<de;tt++)i&&(I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY)?t.texImage3D(ue,0,t.RGBA,1,1,Pe,0,t.RGBA,t.UNSIGNED_BYTE,Ce):t.texImage2D(ue+tt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Ce);return et}const Ae={};Ae[t.TEXTURE_2D]=pe(t.TEXTURE_2D,t.TEXTURE_2D,1),Ae[t.TEXTURE_CUBE_MAP]=pe(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ae[t.TEXTURE_2D_ARRAY]=pe(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Ae[t.TEXTURE_3D]=pe(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Le(t.DEPTH_TEST),l.setFunc(pl),_e(!1),b(wf),Le(t.CULL_FACE),ee(ji);function Le(I){h[I]!==!0&&(t.enable(I),h[I]=!0)}function we(I){h[I]!==!1&&(t.disable(I),h[I]=!1)}function Xe(I,ue){return v[I]!==ue?(t.bindFramebuffer(I,ue),v[I]=ue,i&&(I===t.DRAW_FRAMEBUFFER&&(v[t.FRAMEBUFFER]=ue),I===t.FRAMEBUFFER&&(v[t.DRAW_FRAMEBUFFER]=ue)),!0):!1}function G(I,ue){let de=y,Pe=!1;if(I)if(de=_.get(ue),de===void 0&&(de=[],_.set(ue,de)),I.isWebGLMultipleRenderTargets){const Ce=I.texture;if(de.length!==Ce.length||de[0]!==t.COLOR_ATTACHMENT0){for(let et=0,tt=Ce.length;et<tt;et++)de[et]=t.COLOR_ATTACHMENT0+et;de.length=Ce.length,Pe=!0}}else de[0]!==t.COLOR_ATTACHMENT0&&(de[0]=t.COLOR_ATTACHMENT0,Pe=!0);else de[0]!==t.BACK&&(de[0]=t.BACK,Pe=!0);Pe&&(n.isWebGL2?t.drawBuffers(de):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(de))}function vt(I){return m!==I?(t.useProgram(I),m=I,!0):!1}const Ee={[or]:t.FUNC_ADD,[My]:t.FUNC_SUBTRACT,[Ty]:t.FUNC_REVERSE_SUBTRACT};if(i)Ee[Cf]=t.MIN,Ee[Rf]=t.MAX;else{const I=e.get("EXT_blend_minmax");I!==null&&(Ee[Cf]=I.MIN_EXT,Ee[Rf]=I.MAX_EXT)}const J={[wy]:t.ZERO,[Ay]:t.ONE,[by]:t.SRC_COLOR,[Gu]:t.SRC_ALPHA,[Dy]:t.SRC_ALPHA_SATURATE,[Py]:t.DST_COLOR,[Ry]:t.DST_ALPHA,[Cy]:t.ONE_MINUS_SRC_COLOR,[Vu]:t.ONE_MINUS_SRC_ALPHA,[Ly]:t.ONE_MINUS_DST_COLOR,[Ny]:t.ONE_MINUS_DST_ALPHA,[Iy]:t.CONSTANT_COLOR,[Uy]:t.ONE_MINUS_CONSTANT_COLOR,[Fy]:t.CONSTANT_ALPHA,[ky]:t.ONE_MINUS_CONSTANT_ALPHA};function ee(I,ue,de,Pe,Ce,et,tt,Tt,jt,nt){if(I===ji){u===!0&&(we(t.BLEND),u=!1);return}if(u===!1&&(Le(t.BLEND),u=!0),I!==Ey){if(I!==g||nt!==U){if((x!==or||C!==or)&&(t.blendEquation(t.FUNC_ADD),x=or,C=or),nt)switch(I){case ds:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case fl:t.blendFunc(t.ONE,t.ONE);break;case Af:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case bf:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case ds:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case fl:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Af:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case bf:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}S=null,N=null,T=null,z=null,E.set(0,0,0),w=0,g=I,U=nt}return}Ce=Ce||ue,et=et||de,tt=tt||Pe,(ue!==x||Ce!==C)&&(t.blendEquationSeparate(Ee[ue],Ee[Ce]),x=ue,C=Ce),(de!==S||Pe!==N||et!==T||tt!==z)&&(t.blendFuncSeparate(J[de],J[Pe],J[et],J[tt]),S=de,N=Pe,T=et,z=tt),(Tt.equals(E)===!1||jt!==w)&&(t.blendColor(Tt.r,Tt.g,Tt.b,jt),E.copy(Tt),w=jt),g=I,U=!1}function me(I,ue){I.side===si?we(t.CULL_FACE):Le(t.CULL_FACE);let de=I.side===rn;ue&&(de=!de),_e(de),I.blending===ds&&I.transparent===!1?ee(ji):ee(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),o.setMask(I.colorWrite);const Pe=I.stencilWrite;c.setTest(Pe),Pe&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),j(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Le(t.SAMPLE_ALPHA_TO_COVERAGE):we(t.SAMPLE_ALPHA_TO_COVERAGE)}function _e(I){L!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),L=I)}function b(I){I!==xy?(Le(t.CULL_FACE),I!==Z&&(I===wf?t.cullFace(t.BACK):I===yy?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):we(t.CULL_FACE),Z=I}function M(I){I!==P&&(F&&t.lineWidth(I),P=I)}function j(I,ue,de){I?(Le(t.POLYGON_OFFSET_FILL),(O!==ue||q!==de)&&(t.polygonOffset(ue,de),O=ue,q=de)):we(t.POLYGON_OFFSET_FILL)}function re(I){I?Le(t.SCISSOR_TEST):we(t.SCISSOR_TEST)}function ne(I){I===void 0&&(I=t.TEXTURE0+Q-1),D!==I&&(t.activeTexture(I),D=I)}function se(I,ue,de){de===void 0&&(D===null?de=t.TEXTURE0+Q-1:de=D);let Pe=K[de];Pe===void 0&&(Pe={type:void 0,texture:void 0},K[de]=Pe),(Pe.type!==I||Pe.texture!==ue)&&(D!==de&&(t.activeTexture(de),D=de),t.bindTexture(I,ue||Ae[I]),Pe.type=I,Pe.texture=ue)}function Me(){const I=K[D];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function he(){try{t.compressedTexImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xe(){try{t.compressedTexImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ne(){try{t.texSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ze(){try{t.texSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function te(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ze(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ve(){try{t.texStorage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ie(){try{t.texStorage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function be(){try{t.texImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ye(){try{t.texImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ke(I){ae.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),ae.copy(I))}function $e(I){ce.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),ce.copy(I))}function ht(I,ue){let de=p.get(ue);de===void 0&&(de=new WeakMap,p.set(ue,de));let Pe=de.get(I);Pe===void 0&&(Pe=t.getUniformBlockIndex(ue,I.name),de.set(I,Pe))}function He(I,ue){const Pe=p.get(ue).get(I);f.get(ue)!==Pe&&(t.uniformBlockBinding(ue,Pe,I.__bindingPointIndex),f.set(ue,Pe))}function oe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},D=null,K={},v={},_=new WeakMap,y=[],m=null,u=!1,g=null,x=null,S=null,N=null,C=null,T=null,z=null,E=new qe(0,0,0),w=0,U=!1,L=null,Z=null,P=null,O=null,q=null,ae.set(0,0,t.canvas.width,t.canvas.height),ce.set(0,0,t.canvas.width,t.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Le,disable:we,bindFramebuffer:Xe,drawBuffers:G,useProgram:vt,setBlending:ee,setMaterial:me,setFlipSided:_e,setCullFace:b,setLineWidth:M,setPolygonOffset:j,setScissorTest:re,activeTexture:ne,bindTexture:se,unbindTexture:Me,compressedTexImage2D:he,compressedTexImage3D:xe,texImage2D:be,texImage3D:ye,updateUBOMapping:ht,uniformBlockBinding:He,texStorage2D:Ve,texStorage3D:Ie,texSubImage2D:Ne,texSubImage3D:ze,compressedTexSubImage2D:te,compressedTexSubImage3D:Ze,scissor:ke,viewport:$e,reset:oe}}function L1(t,e,n,i,r,s,a){const o=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new WeakMap;let p;const h=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(b,M){return v?new OffscreenCanvas(b,M):yl("canvas")}function y(b,M,j,re){let ne=1;if((b.width>re||b.height>re)&&(ne=re/Math.max(b.width,b.height)),ne<1||M===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const se=M?xl:Math.floor,Me=se(ne*b.width),he=se(ne*b.height);p===void 0&&(p=_(Me,he));const xe=j?_(Me,he):p;return xe.width=Me,xe.height=he,xe.getContext("2d").drawImage(b,0,0,Me,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+Me+"x"+he+")."),xe}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function m(b){return Ku(b.width)&&Ku(b.height)}function u(b){return o?!1:b.wrapS!==Fn||b.wrapT!==Fn||b.minFilter!==qt&&b.minFilter!==En}function g(b,M){return b.generateMipmaps&&M&&b.minFilter!==qt&&b.minFilter!==En}function x(b){t.generateMipmap(b)}function S(b,M,j,re,ne=!1){if(o===!1)return M;if(b!==null){if(t[b]!==void 0)return t[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let se=M;if(M===t.RED&&(j===t.FLOAT&&(se=t.R32F),j===t.HALF_FLOAT&&(se=t.R16F),j===t.UNSIGNED_BYTE&&(se=t.R8)),M===t.RED_INTEGER&&(j===t.UNSIGNED_BYTE&&(se=t.R8UI),j===t.UNSIGNED_SHORT&&(se=t.R16UI),j===t.UNSIGNED_INT&&(se=t.R32UI),j===t.BYTE&&(se=t.R8I),j===t.SHORT&&(se=t.R16I),j===t.INT&&(se=t.R32I)),M===t.RG&&(j===t.FLOAT&&(se=t.RG32F),j===t.HALF_FLOAT&&(se=t.RG16F),j===t.UNSIGNED_BYTE&&(se=t.RG8)),M===t.RGBA){const Me=ne?ml:Qe.getTransfer(re);j===t.FLOAT&&(se=t.RGBA32F),j===t.HALF_FLOAT&&(se=t.RGBA16F),j===t.UNSIGNED_BYTE&&(se=Me===st?t.SRGB8_ALPHA8:t.RGBA8),j===t.UNSIGNED_SHORT_4_4_4_4&&(se=t.RGBA4),j===t.UNSIGNED_SHORT_5_5_5_1&&(se=t.RGB5_A1)}return(se===t.R16F||se===t.R32F||se===t.RG16F||se===t.RG32F||se===t.RGBA16F||se===t.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function N(b,M,j){return g(b,j)===!0||b.isFramebufferTexture&&b.minFilter!==qt&&b.minFilter!==En?Math.log2(Math.max(M.width,M.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?M.mipmaps.length:1}function C(b){return b===qt||b===Nf||b===yc?t.NEAREST:t.LINEAR}function T(b){const M=b.target;M.removeEventListener("dispose",T),E(M),M.isVideoTexture&&f.delete(M)}function z(b){const M=b.target;M.removeEventListener("dispose",z),U(M)}function E(b){const M=i.get(b);if(M.__webglInit===void 0)return;const j=b.source,re=h.get(j);if(re){const ne=re[M.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&w(b),Object.keys(re).length===0&&h.delete(j)}i.remove(b)}function w(b){const M=i.get(b);t.deleteTexture(M.__webglTexture);const j=b.source,re=h.get(j);delete re[M.__cacheKey],a.memory.textures--}function U(b){const M=b.texture,j=i.get(b),re=i.get(M);if(re.__webglTexture!==void 0&&(t.deleteTexture(re.__webglTexture),a.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(j.__webglFramebuffer[ne]))for(let se=0;se<j.__webglFramebuffer[ne].length;se++)t.deleteFramebuffer(j.__webglFramebuffer[ne][se]);else t.deleteFramebuffer(j.__webglFramebuffer[ne]);j.__webglDepthbuffer&&t.deleteRenderbuffer(j.__webglDepthbuffer[ne])}else{if(Array.isArray(j.__webglFramebuffer))for(let ne=0;ne<j.__webglFramebuffer.length;ne++)t.deleteFramebuffer(j.__webglFramebuffer[ne]);else t.deleteFramebuffer(j.__webglFramebuffer);if(j.__webglDepthbuffer&&t.deleteRenderbuffer(j.__webglDepthbuffer),j.__webglMultisampledFramebuffer&&t.deleteFramebuffer(j.__webglMultisampledFramebuffer),j.__webglColorRenderbuffer)for(let ne=0;ne<j.__webglColorRenderbuffer.length;ne++)j.__webglColorRenderbuffer[ne]&&t.deleteRenderbuffer(j.__webglColorRenderbuffer[ne]);j.__webglDepthRenderbuffer&&t.deleteRenderbuffer(j.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let ne=0,se=M.length;ne<se;ne++){const Me=i.get(M[ne]);Me.__webglTexture&&(t.deleteTexture(Me.__webglTexture),a.memory.textures--),i.remove(M[ne])}i.remove(M),i.remove(b)}let L=0;function Z(){L=0}function P(){const b=L;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),L+=1,b}function O(b){const M=[];return M.push(b.wrapS),M.push(b.wrapT),M.push(b.wrapR||0),M.push(b.magFilter),M.push(b.minFilter),M.push(b.anisotropy),M.push(b.internalFormat),M.push(b.format),M.push(b.type),M.push(b.generateMipmaps),M.push(b.premultiplyAlpha),M.push(b.flipY),M.push(b.unpackAlignment),M.push(b.colorSpace),M.join()}function q(b,M){const j=i.get(b);if(b.isVideoTexture&&me(b),b.isRenderTargetTexture===!1&&b.version>0&&j.__version!==b.version){const re=b.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ae(j,b,M);return}}n.bindTexture(t.TEXTURE_2D,j.__webglTexture,t.TEXTURE0+M)}function Q(b,M){const j=i.get(b);if(b.version>0&&j.__version!==b.version){ae(j,b,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,j.__webglTexture,t.TEXTURE0+M)}function F(b,M){const j=i.get(b);if(b.version>0&&j.__version!==b.version){ae(j,b,M);return}n.bindTexture(t.TEXTURE_3D,j.__webglTexture,t.TEXTURE0+M)}function k(b,M){const j=i.get(b);if(b.version>0&&j.__version!==b.version){ce(j,b,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,j.__webglTexture,t.TEXTURE0+M)}const R={[qu]:t.REPEAT,[Fn]:t.CLAMP_TO_EDGE,[Yu]:t.MIRRORED_REPEAT},D={[qt]:t.NEAREST,[Nf]:t.NEAREST_MIPMAP_NEAREST,[yc]:t.NEAREST_MIPMAP_LINEAR,[En]:t.LINEAR,[Jy]:t.LINEAR_MIPMAP_NEAREST,[Ta]:t.LINEAR_MIPMAP_LINEAR},K={[hS]:t.NEVER,[_S]:t.ALWAYS,[fS]:t.LESS,[wv]:t.LEQUAL,[pS]:t.EQUAL,[vS]:t.GEQUAL,[mS]:t.GREATER,[gS]:t.NOTEQUAL};function H(b,M,j){if(j?(t.texParameteri(b,t.TEXTURE_WRAP_S,R[M.wrapS]),t.texParameteri(b,t.TEXTURE_WRAP_T,R[M.wrapT]),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,R[M.wrapR]),t.texParameteri(b,t.TEXTURE_MAG_FILTER,D[M.magFilter]),t.texParameteri(b,t.TEXTURE_MIN_FILTER,D[M.minFilter])):(t.texParameteri(b,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(b,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(M.wrapS!==Fn||M.wrapT!==Fn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(b,t.TEXTURE_MAG_FILTER,C(M.magFilter)),t.texParameteri(b,t.TEXTURE_MIN_FILTER,C(M.minFilter)),M.minFilter!==qt&&M.minFilter!==En&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(t.texParameteri(b,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(b,t.TEXTURE_COMPARE_FUNC,K[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const re=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===qt||M.minFilter!==yc&&M.minFilter!==Ta||M.type===Li&&e.has("OES_texture_float_linear")===!1||o===!1&&M.type===wa&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(t.texParameterf(b,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function Y(b,M){let j=!1;b.__webglInit===void 0&&(b.__webglInit=!0,M.addEventListener("dispose",T));const re=M.source;let ne=h.get(re);ne===void 0&&(ne={},h.set(re,ne));const se=O(M);if(se!==b.__cacheKey){ne[se]===void 0&&(ne[se]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,j=!0),ne[se].usedTimes++;const Me=ne[b.__cacheKey];Me!==void 0&&(ne[b.__cacheKey].usedTimes--,Me.usedTimes===0&&w(M)),b.__cacheKey=se,b.__webglTexture=ne[se].texture}return j}function ae(b,M,j){let re=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(re=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(re=t.TEXTURE_3D);const ne=Y(b,M),se=M.source;n.bindTexture(re,b.__webglTexture,t.TEXTURE0+j);const Me=i.get(se);if(se.version!==Me.__version||ne===!0){n.activeTexture(t.TEXTURE0+j);const he=Qe.getPrimaries(Qe.workingColorSpace),xe=M.colorSpace===Mn?null:Qe.getPrimaries(M.colorSpace),Ne=M.colorSpace===Mn||he===xe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);const ze=u(M)&&m(M.image)===!1;let te=y(M.image,ze,!1,r.maxTextureSize);te=_e(M,te);const Ze=m(te)||o,Ve=s.convert(M.format,M.colorSpace);let Ie=s.convert(M.type),be=S(M.internalFormat,Ve,Ie,M.colorSpace,M.isVideoTexture);H(re,M,Ze);let ye;const ke=M.mipmaps,$e=o&&M.isVideoTexture!==!0&&be!==Mv,ht=Me.__version===void 0||ne===!0,He=N(M,te,Ze);if(M.isDepthTexture)be=t.DEPTH_COMPONENT,o?M.type===Li?be=t.DEPTH_COMPONENT32F:M.type===Pi?be=t.DEPTH_COMPONENT24:M.type===mr?be=t.DEPTH24_STENCIL8:be=t.DEPTH_COMPONENT16:M.type===Li&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===gr&&be===t.DEPTH_COMPONENT&&M.type!==Kd&&M.type!==Pi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Pi,Ie=s.convert(M.type)),M.format===Ms&&be===t.DEPTH_COMPONENT&&(be=t.DEPTH_STENCIL,M.type!==mr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=mr,Ie=s.convert(M.type))),ht&&($e?n.texStorage2D(t.TEXTURE_2D,1,be,te.width,te.height):n.texImage2D(t.TEXTURE_2D,0,be,te.width,te.height,0,Ve,Ie,null));else if(M.isDataTexture)if(ke.length>0&&Ze){$e&&ht&&n.texStorage2D(t.TEXTURE_2D,He,be,ke[0].width,ke[0].height);for(let oe=0,I=ke.length;oe<I;oe++)ye=ke[oe],$e?n.texSubImage2D(t.TEXTURE_2D,oe,0,0,ye.width,ye.height,Ve,Ie,ye.data):n.texImage2D(t.TEXTURE_2D,oe,be,ye.width,ye.height,0,Ve,Ie,ye.data);M.generateMipmaps=!1}else $e?(ht&&n.texStorage2D(t.TEXTURE_2D,He,be,te.width,te.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,te.width,te.height,Ve,Ie,te.data)):n.texImage2D(t.TEXTURE_2D,0,be,te.width,te.height,0,Ve,Ie,te.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){$e&&ht&&n.texStorage3D(t.TEXTURE_2D_ARRAY,He,be,ke[0].width,ke[0].height,te.depth);for(let oe=0,I=ke.length;oe<I;oe++)ye=ke[oe],M.format!==kn?Ve!==null?$e?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,oe,0,0,0,ye.width,ye.height,te.depth,Ve,ye.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,oe,be,ye.width,ye.height,te.depth,0,ye.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?n.texSubImage3D(t.TEXTURE_2D_ARRAY,oe,0,0,0,ye.width,ye.height,te.depth,Ve,Ie,ye.data):n.texImage3D(t.TEXTURE_2D_ARRAY,oe,be,ye.width,ye.height,te.depth,0,Ve,Ie,ye.data)}else{$e&&ht&&n.texStorage2D(t.TEXTURE_2D,He,be,ke[0].width,ke[0].height);for(let oe=0,I=ke.length;oe<I;oe++)ye=ke[oe],M.format!==kn?Ve!==null?$e?n.compressedTexSubImage2D(t.TEXTURE_2D,oe,0,0,ye.width,ye.height,Ve,ye.data):n.compressedTexImage2D(t.TEXTURE_2D,oe,be,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?n.texSubImage2D(t.TEXTURE_2D,oe,0,0,ye.width,ye.height,Ve,Ie,ye.data):n.texImage2D(t.TEXTURE_2D,oe,be,ye.width,ye.height,0,Ve,Ie,ye.data)}else if(M.isDataArrayTexture)$e?(ht&&n.texStorage3D(t.TEXTURE_2D_ARRAY,He,be,te.width,te.height,te.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,Ve,Ie,te.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,be,te.width,te.height,te.depth,0,Ve,Ie,te.data);else if(M.isData3DTexture)$e?(ht&&n.texStorage3D(t.TEXTURE_3D,He,be,te.width,te.height,te.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,Ve,Ie,te.data)):n.texImage3D(t.TEXTURE_3D,0,be,te.width,te.height,te.depth,0,Ve,Ie,te.data);else if(M.isFramebufferTexture){if(ht)if($e)n.texStorage2D(t.TEXTURE_2D,He,be,te.width,te.height);else{let oe=te.width,I=te.height;for(let ue=0;ue<He;ue++)n.texImage2D(t.TEXTURE_2D,ue,be,oe,I,0,Ve,Ie,null),oe>>=1,I>>=1}}else if(ke.length>0&&Ze){$e&&ht&&n.texStorage2D(t.TEXTURE_2D,He,be,ke[0].width,ke[0].height);for(let oe=0,I=ke.length;oe<I;oe++)ye=ke[oe],$e?n.texSubImage2D(t.TEXTURE_2D,oe,0,0,Ve,Ie,ye):n.texImage2D(t.TEXTURE_2D,oe,be,Ve,Ie,ye);M.generateMipmaps=!1}else $e?(ht&&n.texStorage2D(t.TEXTURE_2D,He,be,te.width,te.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ve,Ie,te)):n.texImage2D(t.TEXTURE_2D,0,be,Ve,Ie,te);g(M,Ze)&&x(re),Me.__version=se.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function ce(b,M,j){if(M.image.length!==6)return;const re=Y(b,M),ne=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,b.__webglTexture,t.TEXTURE0+j);const se=i.get(ne);if(ne.version!==se.__version||re===!0){n.activeTexture(t.TEXTURE0+j);const Me=Qe.getPrimaries(Qe.workingColorSpace),he=M.colorSpace===Mn?null:Qe.getPrimaries(M.colorSpace),xe=M.colorSpace===Mn||Me===he?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Ne=M.isCompressedTexture||M.image[0].isCompressedTexture,ze=M.image[0]&&M.image[0].isDataTexture,te=[];for(let oe=0;oe<6;oe++)!Ne&&!ze?te[oe]=y(M.image[oe],!1,!0,r.maxCubemapSize):te[oe]=ze?M.image[oe].image:M.image[oe],te[oe]=_e(M,te[oe]);const Ze=te[0],Ve=m(Ze)||o,Ie=s.convert(M.format,M.colorSpace),be=s.convert(M.type),ye=S(M.internalFormat,Ie,be,M.colorSpace),ke=o&&M.isVideoTexture!==!0,$e=se.__version===void 0||re===!0;let ht=N(M,Ze,Ve);H(t.TEXTURE_CUBE_MAP,M,Ve);let He;if(Ne){ke&&$e&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ht,ye,Ze.width,Ze.height);for(let oe=0;oe<6;oe++){He=te[oe].mipmaps;for(let I=0;I<He.length;I++){const ue=He[I];M.format!==kn?Ie!==null?ke?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,I,0,0,ue.width,ue.height,Ie,ue.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,I,ye,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,I,0,0,ue.width,ue.height,Ie,be,ue.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,I,ye,ue.width,ue.height,0,Ie,be,ue.data)}}}else{He=M.mipmaps,ke&&$e&&(He.length>0&&ht++,n.texStorage2D(t.TEXTURE_CUBE_MAP,ht,ye,te[0].width,te[0].height));for(let oe=0;oe<6;oe++)if(ze){ke?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,te[oe].width,te[oe].height,Ie,be,te[oe].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,ye,te[oe].width,te[oe].height,0,Ie,be,te[oe].data);for(let I=0;I<He.length;I++){const de=He[I].image[oe].image;ke?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,I+1,0,0,de.width,de.height,Ie,be,de.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,I+1,ye,de.width,de.height,0,Ie,be,de.data)}}else{ke?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Ie,be,te[oe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,ye,Ie,be,te[oe]);for(let I=0;I<He.length;I++){const ue=He[I];ke?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,I+1,0,0,Ie,be,ue.image[oe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,I+1,ye,Ie,be,ue.image[oe])}}}g(M,Ve)&&x(t.TEXTURE_CUBE_MAP),se.__version=ne.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function pe(b,M,j,re,ne,se){const Me=s.convert(j.format,j.colorSpace),he=s.convert(j.type),xe=S(j.internalFormat,Me,he,j.colorSpace);if(!i.get(M).__hasExternalTextures){const ze=Math.max(1,M.width>>se),te=Math.max(1,M.height>>se);ne===t.TEXTURE_3D||ne===t.TEXTURE_2D_ARRAY?n.texImage3D(ne,se,xe,ze,te,M.depth,0,Me,he,null):n.texImage2D(ne,se,xe,ze,te,0,Me,he,null)}n.bindFramebuffer(t.FRAMEBUFFER,b),ee(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,re,ne,i.get(j).__webglTexture,0,J(M)):(ne===t.TEXTURE_2D||ne>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,re,ne,i.get(j).__webglTexture,se),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ae(b,M,j){if(t.bindRenderbuffer(t.RENDERBUFFER,b),M.depthBuffer&&!M.stencilBuffer){let re=o===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(j||ee(M)){const ne=M.depthTexture;ne&&ne.isDepthTexture&&(ne.type===Li?re=t.DEPTH_COMPONENT32F:ne.type===Pi&&(re=t.DEPTH_COMPONENT24));const se=J(M);ee(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,se,re,M.width,M.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,se,re,M.width,M.height)}else t.renderbufferStorage(t.RENDERBUFFER,re,M.width,M.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,b)}else if(M.depthBuffer&&M.stencilBuffer){const re=J(M);j&&ee(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,re,t.DEPTH24_STENCIL8,M.width,M.height):ee(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,re,t.DEPTH24_STENCIL8,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,b)}else{const re=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let ne=0;ne<re.length;ne++){const se=re[ne],Me=s.convert(se.format,se.colorSpace),he=s.convert(se.type),xe=S(se.internalFormat,Me,he,se.colorSpace),Ne=J(M);j&&ee(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ne,xe,M.width,M.height):ee(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ne,xe,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,xe,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Le(b,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,b),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),q(M.depthTexture,0);const re=i.get(M.depthTexture).__webglTexture,ne=J(M);if(M.depthTexture.format===gr)ee(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,re,0,ne):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,re,0);else if(M.depthTexture.format===Ms)ee(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,re,0,ne):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function we(b){const M=i.get(b),j=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!M.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");Le(M.__webglFramebuffer,b)}else if(j){M.__webglDepthbuffer=[];for(let re=0;re<6;re++)n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[re]),M.__webglDepthbuffer[re]=t.createRenderbuffer(),Ae(M.__webglDepthbuffer[re],b,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),Ae(M.__webglDepthbuffer,b,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Xe(b,M,j){const re=i.get(b);M!==void 0&&pe(re.__webglFramebuffer,b,b.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),j!==void 0&&we(b)}function G(b){const M=b.texture,j=i.get(b),re=i.get(M);b.addEventListener("dispose",z),b.isWebGLMultipleRenderTargets!==!0&&(re.__webglTexture===void 0&&(re.__webglTexture=t.createTexture()),re.__version=M.version,a.memory.textures++);const ne=b.isWebGLCubeRenderTarget===!0,se=b.isWebGLMultipleRenderTargets===!0,Me=m(b)||o;if(ne){j.__webglFramebuffer=[];for(let he=0;he<6;he++)if(o&&M.mipmaps&&M.mipmaps.length>0){j.__webglFramebuffer[he]=[];for(let xe=0;xe<M.mipmaps.length;xe++)j.__webglFramebuffer[he][xe]=t.createFramebuffer()}else j.__webglFramebuffer[he]=t.createFramebuffer()}else{if(o&&M.mipmaps&&M.mipmaps.length>0){j.__webglFramebuffer=[];for(let he=0;he<M.mipmaps.length;he++)j.__webglFramebuffer[he]=t.createFramebuffer()}else j.__webglFramebuffer=t.createFramebuffer();if(se)if(r.drawBuffers){const he=b.texture;for(let xe=0,Ne=he.length;xe<Ne;xe++){const ze=i.get(he[xe]);ze.__webglTexture===void 0&&(ze.__webglTexture=t.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&b.samples>0&&ee(b)===!1){const he=se?M:[M];j.__webglMultisampledFramebuffer=t.createFramebuffer(),j.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let xe=0;xe<he.length;xe++){const Ne=he[xe];j.__webglColorRenderbuffer[xe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,j.__webglColorRenderbuffer[xe]);const ze=s.convert(Ne.format,Ne.colorSpace),te=s.convert(Ne.type),Ze=S(Ne.internalFormat,ze,te,Ne.colorSpace,b.isXRRenderTarget===!0),Ve=J(b);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ve,Ze,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.RENDERBUFFER,j.__webglColorRenderbuffer[xe])}t.bindRenderbuffer(t.RENDERBUFFER,null),b.depthBuffer&&(j.__webglDepthRenderbuffer=t.createRenderbuffer(),Ae(j.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ne){n.bindTexture(t.TEXTURE_CUBE_MAP,re.__webglTexture),H(t.TEXTURE_CUBE_MAP,M,Me);for(let he=0;he<6;he++)if(o&&M.mipmaps&&M.mipmaps.length>0)for(let xe=0;xe<M.mipmaps.length;xe++)pe(j.__webglFramebuffer[he][xe],b,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he,xe);else pe(j.__webglFramebuffer[he],b,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);g(M,Me)&&x(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(se){const he=b.texture;for(let xe=0,Ne=he.length;xe<Ne;xe++){const ze=he[xe],te=i.get(ze);n.bindTexture(t.TEXTURE_2D,te.__webglTexture),H(t.TEXTURE_2D,ze,Me),pe(j.__webglFramebuffer,b,ze,t.COLOR_ATTACHMENT0+xe,t.TEXTURE_2D,0),g(ze,Me)&&x(t.TEXTURE_2D)}n.unbindTexture()}else{let he=t.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(o?he=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(he,re.__webglTexture),H(he,M,Me),o&&M.mipmaps&&M.mipmaps.length>0)for(let xe=0;xe<M.mipmaps.length;xe++)pe(j.__webglFramebuffer[xe],b,M,t.COLOR_ATTACHMENT0,he,xe);else pe(j.__webglFramebuffer,b,M,t.COLOR_ATTACHMENT0,he,0);g(M,Me)&&x(he),n.unbindTexture()}b.depthBuffer&&we(b)}function vt(b){const M=m(b)||o,j=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let re=0,ne=j.length;re<ne;re++){const se=j[re];if(g(se,M)){const Me=b.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,he=i.get(se).__webglTexture;n.bindTexture(Me,he),x(Me),n.unbindTexture()}}}function Ee(b){if(o&&b.samples>0&&ee(b)===!1){const M=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],j=b.width,re=b.height;let ne=t.COLOR_BUFFER_BIT;const se=[],Me=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,he=i.get(b),xe=b.isWebGLMultipleRenderTargets===!0;if(xe)for(let Ne=0;Ne<M.length;Ne++)n.bindFramebuffer(t.FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ne,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,he.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ne,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let Ne=0;Ne<M.length;Ne++){se.push(t.COLOR_ATTACHMENT0+Ne),b.depthBuffer&&se.push(Me);const ze=he.__ignoreDepthValues!==void 0?he.__ignoreDepthValues:!1;if(ze===!1&&(b.depthBuffer&&(ne|=t.DEPTH_BUFFER_BIT),b.stencilBuffer&&(ne|=t.STENCIL_BUFFER_BIT)),xe&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,he.__webglColorRenderbuffer[Ne]),ze===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[Me]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[Me])),xe){const te=i.get(M[Ne]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,te,0)}t.blitFramebuffer(0,0,j,re,0,0,j,re,ne,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,se)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),xe)for(let Ne=0;Ne<M.length;Ne++){n.bindFramebuffer(t.FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ne,t.RENDERBUFFER,he.__webglColorRenderbuffer[Ne]);const ze=i.get(M[Ne]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,he.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ne,t.TEXTURE_2D,ze,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}}function J(b){return Math.min(r.maxSamples,b.samples)}function ee(b){const M=i.get(b);return o&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function me(b){const M=a.render.frame;f.get(b)!==M&&(f.set(b,M),b.update())}function _e(b,M){const j=b.colorSpace,re=b.format,ne=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===$u||j!==mi&&j!==Mn&&(Qe.getTransfer(j)===st?o===!1?e.has("EXT_sRGB")===!0&&re===kn?(b.format=$u,b.minFilter=En,b.generateMipmaps=!1):M=bv.sRGBToLinear(M):(re!==kn||ne!==Vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),M}this.allocateTextureUnit=P,this.resetTextureUnits=Z,this.setTexture2D=q,this.setTexture2DArray=Q,this.setTexture3D=F,this.setTextureCube=k,this.rebindTextures=Xe,this.setupRenderTarget=G,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=ee}function D1(t,e,n){const i=n.isWebGL2;function r(s,a=Mn){let o;const l=Qe.getTransfer(a);if(s===Vi)return t.UNSIGNED_BYTE;if(s===_v)return t.UNSIGNED_SHORT_4_4_4_4;if(s===xv)return t.UNSIGNED_SHORT_5_5_5_1;if(s===eS)return t.BYTE;if(s===tS)return t.SHORT;if(s===Kd)return t.UNSIGNED_SHORT;if(s===vv)return t.INT;if(s===Pi)return t.UNSIGNED_INT;if(s===Li)return t.FLOAT;if(s===wa)return i?t.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===nS)return t.ALPHA;if(s===kn)return t.RGBA;if(s===iS)return t.LUMINANCE;if(s===rS)return t.LUMINANCE_ALPHA;if(s===gr)return t.DEPTH_COMPONENT;if(s===Ms)return t.DEPTH_STENCIL;if(s===$u)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===sS)return t.RED;if(s===yv)return t.RED_INTEGER;if(s===aS)return t.RG;if(s===Sv)return t.RG_INTEGER;if(s===Ev)return t.RGBA_INTEGER;if(s===Sc||s===Ec||s===Mc||s===Tc)if(l===st)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Sc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ec)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Mc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Tc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Sc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ec)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Mc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Tc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Pf||s===Lf||s===Df||s===If)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Pf)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Lf)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Df)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===If)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Mv)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Uf||s===Ff)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Uf)return l===st?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Ff)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===kf||s===Of||s===zf||s===Bf||s===Hf||s===jf||s===Gf||s===Vf||s===Wf||s===Xf||s===qf||s===Yf||s===$f||s===Kf)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===kf)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Of)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===zf)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Bf)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Hf)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===jf)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Gf)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Vf)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Wf)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Xf)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===qf)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Yf)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===$f)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Kf)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===wc||s===Zf||s===Qf)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===wc)return l===st?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Zf)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Qf)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===oS||s===Jf||s===ep||s===tp)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===wc)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Jf)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ep)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===tp)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===mr?i?t.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class I1 extends dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class To extends sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const U1={type:"move"};class Yc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new To,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new To,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new To,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const y of e.hand.values()){const m=n.getJointPose(y,i),u=this._getHandJoint(c,y);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const f=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],h=f.position.distanceTo(p.position),v=.02,_=.005;c.inputState.pinching&&h>v+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=v-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(U1)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new To;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class F1 extends Cs{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,f=null,p=null,h=null,v=null,_=null;const y=n.getContextAttributes();let m=null,u=null;const g=[],x=[],S=new Je;let N=null;const C=new dn;C.layers.enable(1),C.viewport=new Lt;const T=new dn;T.layers.enable(2),T.viewport=new Lt;const z=[C,T],E=new I1;E.layers.enable(1),E.layers.enable(2);let w=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let Y=g[H];return Y===void 0&&(Y=new Yc,g[H]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(H){let Y=g[H];return Y===void 0&&(Y=new Yc,g[H]=Y),Y.getGripSpace()},this.getHand=function(H){let Y=g[H];return Y===void 0&&(Y=new Yc,g[H]=Y),Y.getHandSpace()};function L(H){const Y=x.indexOf(H.inputSource);if(Y===-1)return;const ae=g[Y];ae!==void 0&&(ae.update(H.inputSource,H.frame,c||a),ae.dispatchEvent({type:H.type,data:H.inputSource}))}function Z(){r.removeEventListener("select",L),r.removeEventListener("selectstart",L),r.removeEventListener("selectend",L),r.removeEventListener("squeeze",L),r.removeEventListener("squeezestart",L),r.removeEventListener("squeezeend",L),r.removeEventListener("end",Z),r.removeEventListener("inputsourceschange",P);for(let H=0;H<g.length;H++){const Y=x[H];Y!==null&&(x[H]=null,g[H].disconnect(Y))}w=null,U=null,e.setRenderTarget(m),v=null,h=null,p=null,r=null,u=null,K.stop(),i.isPresenting=!1,e.setPixelRatio(N),e.setSize(S.width,S.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return h!==null?h:v},this.getBinding=function(){return p},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",L),r.addEventListener("selectstart",L),r.addEventListener("selectend",L),r.addEventListener("squeeze",L),r.addEventListener("squeezestart",L),r.addEventListener("squeezeend",L),r.addEventListener("end",Z),r.addEventListener("inputsourceschange",P),y.xrCompatible!==!0&&await n.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(S),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Y={antialias:r.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};v=new XRWebGLLayer(r,n,Y),r.updateRenderState({baseLayer:v}),e.setPixelRatio(1),e.setSize(v.framebufferWidth,v.framebufferHeight,!1),u=new Mr(v.framebufferWidth,v.framebufferHeight,{format:kn,type:Vi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let Y=null,ae=null,ce=null;y.depth&&(ce=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Y=y.stencil?Ms:gr,ae=y.stencil?mr:Pi);const pe={colorFormat:n.RGBA8,depthFormat:ce,scaleFactor:s};p=new XRWebGLBinding(r,n),h=p.createProjectionLayer(pe),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),u=new Mr(h.textureWidth,h.textureHeight,{format:kn,type:Vi,depthTexture:new Hv(h.textureWidth,h.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});const Ae=e.properties.get(u);Ae.__ignoreDepthValues=h.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),K.setContext(r),K.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function P(H){for(let Y=0;Y<H.removed.length;Y++){const ae=H.removed[Y],ce=x.indexOf(ae);ce>=0&&(x[ce]=null,g[ce].disconnect(ae))}for(let Y=0;Y<H.added.length;Y++){const ae=H.added[Y];let ce=x.indexOf(ae);if(ce===-1){for(let Ae=0;Ae<g.length;Ae++)if(Ae>=x.length){x.push(ae),ce=Ae;break}else if(x[Ae]===null){x[Ae]=ae,ce=Ae;break}if(ce===-1)break}const pe=g[ce];pe&&pe.connect(ae)}}const O=new X,q=new X;function Q(H,Y,ae){O.setFromMatrixPosition(Y.matrixWorld),q.setFromMatrixPosition(ae.matrixWorld);const ce=O.distanceTo(q),pe=Y.projectionMatrix.elements,Ae=ae.projectionMatrix.elements,Le=pe[14]/(pe[10]-1),we=pe[14]/(pe[10]+1),Xe=(pe[9]+1)/pe[5],G=(pe[9]-1)/pe[5],vt=(pe[8]-1)/pe[0],Ee=(Ae[8]+1)/Ae[0],J=Le*vt,ee=Le*Ee,me=ce/(-vt+Ee),_e=me*-vt;Y.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(_e),H.translateZ(me),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const b=Le+me,M=we+me,j=J-_e,re=ee+(ce-_e),ne=Xe*we/M*b,se=G*we/M*b;H.projectionMatrix.makePerspective(j,re,ne,se,b,M),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function F(H,Y){Y===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(Y.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;E.near=T.near=C.near=H.near,E.far=T.far=C.far=H.far,(w!==E.near||U!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),w=E.near,U=E.far);const Y=H.parent,ae=E.cameras;F(E,Y);for(let ce=0;ce<ae.length;ce++)F(ae[ce],Y);ae.length===2?Q(E,C,T):E.projectionMatrix.copy(C.projectionMatrix),k(H,E,Y)};function k(H,Y,ae){ae===null?H.matrix.copy(Y.matrixWorld):(H.matrix.copy(ae.matrixWorld),H.matrix.invert(),H.matrix.multiply(Y.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(Y.projectionMatrix),H.projectionMatrixInverse.copy(Y.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Aa*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(h===null&&v===null))return l},this.setFoveation=function(H){l=H,h!==null&&(h.fixedFoveation=H),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=H)};let R=null;function D(H,Y){if(f=Y.getViewerPose(c||a),_=Y,f!==null){const ae=f.views;v!==null&&(e.setRenderTargetFramebuffer(u,v.framebuffer),e.setRenderTarget(u));let ce=!1;ae.length!==E.cameras.length&&(E.cameras.length=0,ce=!0);for(let pe=0;pe<ae.length;pe++){const Ae=ae[pe];let Le=null;if(v!==null)Le=v.getViewport(Ae);else{const Xe=p.getViewSubImage(h,Ae);Le=Xe.viewport,pe===0&&(e.setRenderTargetTextures(u,Xe.colorTexture,h.ignoreDepthValues?void 0:Xe.depthStencilTexture),e.setRenderTarget(u))}let we=z[pe];we===void 0&&(we=new dn,we.layers.enable(pe),we.viewport=new Lt,z[pe]=we),we.matrix.fromArray(Ae.transform.matrix),we.matrix.decompose(we.position,we.quaternion,we.scale),we.projectionMatrix.fromArray(Ae.projectionMatrix),we.projectionMatrixInverse.copy(we.projectionMatrix).invert(),we.viewport.set(Le.x,Le.y,Le.width,Le.height),pe===0&&(E.matrix.copy(we.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),ce===!0&&E.cameras.push(we)}}for(let ae=0;ae<g.length;ae++){const ce=x[ae],pe=g[ae];ce!==null&&pe!==void 0&&pe.update(ce,Y,c||a)}R&&R(H,Y),Y.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Y}),_=null}const K=new Bv;K.setAnimationLoop(D),this.setAnimationLoop=function(H){R=H},this.dispose=function(){}}}function k1(t,e){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,Fv(t)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,g,x,S){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),p(m,u)):u.isMeshPhongMaterial?(s(m,u),f(m,u)):u.isMeshStandardMaterial?(s(m,u),h(m,u),u.isMeshPhysicalMaterial&&v(m,u,S)):u.isMeshMatcapMaterial?(s(m,u),_(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),y(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(a(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,g,x):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===rn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===rn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const g=e.get(u).envMap;if(g&&(m.envMap.value=g,m.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap){m.lightMap.value=u.lightMap;const x=t._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=u.lightMapIntensity*x,n(u.lightMap,m.lightMapTransform)}u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function a(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,g,x){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*g,m.scale.value=x*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function f(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function p(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function h(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),e.get(u).envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function v(m,u,g){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===rn&&m.clearcoatNormalScale.value.negate())),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,u){u.matcap&&(m.matcap.value=u.matcap)}function y(m,u){const g=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function O1(t,e,n,i){let r={},s={},a=[];const o=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(g,x){const S=x.program;i.uniformBlockBinding(g,S)}function c(g,x){let S=r[g.id];S===void 0&&(_(g),S=f(g),r[g.id]=S,g.addEventListener("dispose",m));const N=x.program;i.updateUBOMapping(g,N);const C=e.render.frame;s[g.id]!==C&&(h(g),s[g.id]=C)}function f(g){const x=p();g.__bindingPointIndex=x;const S=t.createBuffer(),N=g.__size,C=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,N,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,S),S}function p(){for(let g=0;g<o;g++)if(a.indexOf(g)===-1)return a.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(g){const x=r[g.id],S=g.uniforms,N=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let C=0,T=S.length;C<T;C++){const z=Array.isArray(S[C])?S[C]:[S[C]];for(let E=0,w=z.length;E<w;E++){const U=z[E];if(v(U,C,E,N)===!0){const L=U.__offset,Z=Array.isArray(U.value)?U.value:[U.value];let P=0;for(let O=0;O<Z.length;O++){const q=Z[O],Q=y(q);typeof q=="number"||typeof q=="boolean"?(U.__data[0]=q,t.bufferSubData(t.UNIFORM_BUFFER,L+P,U.__data)):q.isMatrix3?(U.__data[0]=q.elements[0],U.__data[1]=q.elements[1],U.__data[2]=q.elements[2],U.__data[3]=0,U.__data[4]=q.elements[3],U.__data[5]=q.elements[4],U.__data[6]=q.elements[5],U.__data[7]=0,U.__data[8]=q.elements[6],U.__data[9]=q.elements[7],U.__data[10]=q.elements[8],U.__data[11]=0):(q.toArray(U.__data,P),P+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,L,U.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function v(g,x,S,N){const C=g.value,T=x+"_"+S;if(N[T]===void 0)return typeof C=="number"||typeof C=="boolean"?N[T]=C:N[T]=C.clone(),!0;{const z=N[T];if(typeof C=="number"||typeof C=="boolean"){if(z!==C)return N[T]=C,!0}else if(z.equals(C)===!1)return z.copy(C),!0}return!1}function _(g){const x=g.uniforms;let S=0;const N=16;for(let T=0,z=x.length;T<z;T++){const E=Array.isArray(x[T])?x[T]:[x[T]];for(let w=0,U=E.length;w<U;w++){const L=E[w],Z=Array.isArray(L.value)?L.value:[L.value];for(let P=0,O=Z.length;P<O;P++){const q=Z[P],Q=y(q),F=S%N;F!==0&&N-F<Q.boundary&&(S+=N-F),L.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=S,S+=Q.storage}}}const C=S%N;return C>0&&(S+=N-C),g.__size=S,g.__cache={},this}function y(g){const x={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(x.boundary=4,x.storage=4):g.isVector2?(x.boundary=8,x.storage=8):g.isVector3||g.isColor?(x.boundary=16,x.storage=12):g.isVector4?(x.boundary=16,x.storage=16):g.isMatrix3?(x.boundary=48,x.storage=48):g.isMatrix4?(x.boundary=64,x.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),x}function m(g){const x=g.target;x.removeEventListener("dispose",m);const S=a.indexOf(x.__bindingPointIndex);a.splice(S,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function u(){for(const g in r)t.deleteBuffer(r[g]);a=[],r={},s={}}return{bind:l,update:c,dispose:u}}class th{constructor(e={}){const{canvas:n=DS(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=a;const v=new Uint32Array(4),_=new Int32Array(4);let y=null,m=null;const u=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Pt,this._useLegacyLights=!1,this.toneMapping=Gi,this.toneMappingExposure=1;const x=this;let S=!1,N=0,C=0,T=null,z=-1,E=null;const w=new Lt,U=new Lt;let L=null;const Z=new qe(0);let P=0,O=n.width,q=n.height,Q=1,F=null,k=null;const R=new Lt(0,0,O,q),D=new Lt(0,0,O,q);let K=!1;const H=new zv;let Y=!1,ae=!1,ce=null;const pe=new Rt,Ae=new Je,Le=new X,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Xe(){return T===null?Q:1}let G=i;function vt(A,B){for(let W=0;W<A.length;W++){const $=A[W],V=n.getContext($,B);if(V!==null)return V}return null}try{const A={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${$d}`),n.addEventListener("webglcontextlost",oe,!1),n.addEventListener("webglcontextrestored",I,!1),n.addEventListener("webglcontextcreationerror",ue,!1),G===null){const B=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&B.shift(),G=vt(B,A),G===null)throw vt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&G instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Ee,J,ee,me,_e,b,M,j,re,ne,se,Me,he,xe,Ne,ze,te,Ze,Ve,Ie,be,ye,ke,$e;function ht(){Ee=new YT(G),J=new HT(G,Ee,e),Ee.init(J),ye=new D1(G,Ee,J),ee=new P1(G,Ee,J),me=new ZT(G),_e=new v1,b=new L1(G,Ee,ee,_e,J,ye,me),M=new GT(x),j=new qT(x),re=new rE(G,J),ke=new zT(G,Ee,re,J),ne=new $T(G,re,me,ke),se=new tw(G,ne,re,me),Ve=new ew(G,J,b),ze=new jT(_e),Me=new g1(x,M,j,Ee,J,ke,ze),he=new k1(x,_e),xe=new x1,Ne=new w1(Ee,J),Ze=new OT(x,M,j,ee,se,h,l),te=new N1(x,se,J),$e=new O1(G,me,J,ee),Ie=new BT(G,Ee,me,J),be=new KT(G,Ee,me,J),me.programs=Me.programs,x.capabilities=J,x.extensions=Ee,x.properties=_e,x.renderLists=xe,x.shadowMap=te,x.state=ee,x.info=me}ht();const He=new F1(x,G);this.xr=He,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const A=Ee.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Ee.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(A){A!==void 0&&(Q=A,this.setSize(O,q,!1))},this.getSize=function(A){return A.set(O,q)},this.setSize=function(A,B,W=!0){if(He.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=A,q=B,n.width=Math.floor(A*Q),n.height=Math.floor(B*Q),W===!0&&(n.style.width=A+"px",n.style.height=B+"px"),this.setViewport(0,0,A,B)},this.getDrawingBufferSize=function(A){return A.set(O*Q,q*Q).floor()},this.setDrawingBufferSize=function(A,B,W){O=A,q=B,Q=W,n.width=Math.floor(A*W),n.height=Math.floor(B*W),this.setViewport(0,0,A,B)},this.getCurrentViewport=function(A){return A.copy(w)},this.getViewport=function(A){return A.copy(R)},this.setViewport=function(A,B,W,$){A.isVector4?R.set(A.x,A.y,A.z,A.w):R.set(A,B,W,$),ee.viewport(w.copy(R).multiplyScalar(Q).floor())},this.getScissor=function(A){return A.copy(D)},this.setScissor=function(A,B,W,$){A.isVector4?D.set(A.x,A.y,A.z,A.w):D.set(A,B,W,$),ee.scissor(U.copy(D).multiplyScalar(Q).floor())},this.getScissorTest=function(){return K},this.setScissorTest=function(A){ee.setScissorTest(K=A)},this.setOpaqueSort=function(A){F=A},this.setTransparentSort=function(A){k=A},this.getClearColor=function(A){return A.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor.apply(Ze,arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha.apply(Ze,arguments)},this.clear=function(A=!0,B=!0,W=!0){let $=0;if(A){let V=!1;if(T!==null){const ge=T.texture.format;V=ge===Ev||ge===Sv||ge===yv}if(V){const ge=T.texture.type,Te=ge===Vi||ge===Pi||ge===Kd||ge===mr||ge===_v||ge===xv,Re=Ze.getClearColor(),De=Ze.getClearAlpha(),Be=Re.r,Ue=Re.g,Fe=Re.b;Te?(v[0]=Be,v[1]=Ue,v[2]=Fe,v[3]=De,G.clearBufferuiv(G.COLOR,0,v)):(_[0]=Be,_[1]=Ue,_[2]=Fe,_[3]=De,G.clearBufferiv(G.COLOR,0,_))}else $|=G.COLOR_BUFFER_BIT}B&&($|=G.DEPTH_BUFFER_BIT),W&&($|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",oe,!1),n.removeEventListener("webglcontextrestored",I,!1),n.removeEventListener("webglcontextcreationerror",ue,!1),xe.dispose(),Ne.dispose(),_e.dispose(),M.dispose(),j.dispose(),se.dispose(),ke.dispose(),$e.dispose(),Me.dispose(),He.dispose(),He.removeEventListener("sessionstart",jt),He.removeEventListener("sessionend",nt),ce&&(ce.dispose(),ce=null),Gt.stop()};function oe(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const A=me.autoReset,B=te.enabled,W=te.autoUpdate,$=te.needsUpdate,V=te.type;ht(),me.autoReset=A,te.enabled=B,te.autoUpdate=W,te.needsUpdate=$,te.type=V}function ue(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function de(A){const B=A.target;B.removeEventListener("dispose",de),Pe(B)}function Pe(A){Ce(A),_e.remove(A)}function Ce(A){const B=_e.get(A).programs;B!==void 0&&(B.forEach(function(W){Me.releaseProgram(W)}),A.isShaderMaterial&&Me.releaseShaderCache(A))}this.renderBufferDirect=function(A,B,W,$,V,ge){B===null&&(B=we);const Te=V.isMesh&&V.matrixWorld.determinant()<0,Re=Zv(A,B,W,$,V);ee.setMaterial($,Te);let De=W.index,Be=1;if($.wireframe===!0){if(De=ne.getWireframeAttribute(W),De===void 0)return;Be=2}const Ue=W.drawRange,Fe=W.attributes.position;let mt=Ue.start*Be,an=(Ue.start+Ue.count)*Be;ge!==null&&(mt=Math.max(mt,ge.start*Be),an=Math.min(an,(ge.start+ge.count)*Be)),De!==null?(mt=Math.max(mt,0),an=Math.min(an,De.count)):Fe!=null&&(mt=Math.max(mt,0),an=Math.min(an,Fe.count));const wt=an-mt;if(wt<0||wt===1/0)return;ke.setup(V,$,Re,W,De);let Kn,lt=Ie;if(De!==null&&(Kn=re.get(De),lt=be,lt.setIndex(Kn)),V.isMesh)$.wireframe===!0?(ee.setLineWidth($.wireframeLinewidth*Xe()),lt.setMode(G.LINES)):lt.setMode(G.TRIANGLES);else if(V.isLine){let je=$.linewidth;je===void 0&&(je=1),ee.setLineWidth(je*Xe()),V.isLineSegments?lt.setMode(G.LINES):V.isLineLoop?lt.setMode(G.LINE_LOOP):lt.setMode(G.LINE_STRIP)}else V.isPoints?lt.setMode(G.POINTS):V.isSprite&&lt.setMode(G.TRIANGLES);if(V.isBatchedMesh)lt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else if(V.isInstancedMesh)lt.renderInstances(mt,wt,V.count);else if(W.isInstancedBufferGeometry){const je=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Gl=Math.min(W.instanceCount,je);lt.renderInstances(mt,wt,Gl)}else lt.render(mt,wt)};function et(A,B,W){A.transparent===!0&&A.side===si&&A.forceSinglePass===!1?(A.side=rn,A.needsUpdate=!0,ka(A,B,W),A.side=qi,A.needsUpdate=!0,ka(A,B,W),A.side=si):ka(A,B,W)}this.compile=function(A,B,W=null){W===null&&(W=A),m=Ne.get(W),m.init(),g.push(m),W.traverseVisible(function(V){V.isLight&&V.layers.test(B.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),A!==W&&A.traverseVisible(function(V){V.isLight&&V.layers.test(B.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),m.setupLights(x._useLegacyLights);const $=new Set;return A.traverse(function(V){const ge=V.material;if(ge)if(Array.isArray(ge))for(let Te=0;Te<ge.length;Te++){const Re=ge[Te];et(Re,W,V),$.add(Re)}else et(ge,W,V),$.add(ge)}),g.pop(),m=null,$},this.compileAsync=function(A,B,W=null){const $=this.compile(A,B,W);return new Promise(V=>{function ge(){if($.forEach(function(Te){_e.get(Te).currentProgram.isReady()&&$.delete(Te)}),$.size===0){V(A);return}setTimeout(ge,10)}Ee.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let tt=null;function Tt(A){tt&&tt(A)}function jt(){Gt.stop()}function nt(){Gt.start()}const Gt=new Bv;Gt.setAnimationLoop(Tt),typeof self<"u"&&Gt.setContext(self),this.setAnimationLoop=function(A){tt=A,He.setAnimationLoop(A),A===null?Gt.stop():Gt.start()},He.addEventListener("sessionstart",jt),He.addEventListener("sessionend",nt),this.render=function(A,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),He.enabled===!0&&He.isPresenting===!0&&(He.cameraAutoUpdate===!0&&He.updateCamera(B),B=He.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,B,T),m=Ne.get(A,g.length),m.init(),g.push(m),pe.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),H.setFromProjectionMatrix(pe),ae=this.localClippingEnabled,Y=ze.init(this.clippingPlanes,ae),y=xe.get(A,u.length),y.init(),u.push(y),jn(A,B,0,x.sortObjects),y.finish(),x.sortObjects===!0&&y.sort(F,k),this.info.render.frame++,Y===!0&&ze.beginShadows();const W=m.state.shadowsArray;if(te.render(W,A,B),Y===!0&&ze.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ze.render(y,A),m.setupLights(x._useLegacyLights),B.isArrayCamera){const $=B.cameras;for(let V=0,ge=$.length;V<ge;V++){const Te=$[V];ih(y,A,Te,Te.viewport)}}else ih(y,A,B);T!==null&&(b.updateMultisampleRenderTarget(T),b.updateRenderTargetMipmap(T)),A.isScene===!0&&A.onAfterRender(x,A,B),ke.resetDefaultState(),z=-1,E=null,g.pop(),g.length>0?m=g[g.length-1]:m=null,u.pop(),u.length>0?y=u[u.length-1]:y=null};function jn(A,B,W,$){if(A.visible===!1)return;if(A.layers.test(B.layers)){if(A.isGroup)W=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(B);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||H.intersectsSprite(A)){$&&Le.setFromMatrixPosition(A.matrixWorld).applyMatrix4(pe);const Te=se.update(A),Re=A.material;Re.visible&&y.push(A,Te,Re,W,Le.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||H.intersectsObject(A))){const Te=se.update(A),Re=A.material;if($&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Le.copy(A.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),Le.copy(Te.boundingSphere.center)),Le.applyMatrix4(A.matrixWorld).applyMatrix4(pe)),Array.isArray(Re)){const De=Te.groups;for(let Be=0,Ue=De.length;Be<Ue;Be++){const Fe=De[Be],mt=Re[Fe.materialIndex];mt&&mt.visible&&y.push(A,Te,mt,W,Le.z,Fe)}}else Re.visible&&y.push(A,Te,Re,W,Le.z,null)}}const ge=A.children;for(let Te=0,Re=ge.length;Te<Re;Te++)jn(ge[Te],B,W,$)}function ih(A,B,W,$){const V=A.opaque,ge=A.transmissive,Te=A.transparent;m.setupLightsView(W),Y===!0&&ze.setGlobalState(x.clippingPlanes,W),ge.length>0&&Kv(V,ge,B,W),$&&ee.viewport(w.copy($)),V.length>0&&Fa(V,B,W),ge.length>0&&Fa(ge,B,W),Te.length>0&&Fa(Te,B,W),ee.buffers.depth.setTest(!0),ee.buffers.depth.setMask(!0),ee.buffers.color.setMask(!0),ee.setPolygonOffset(!1)}function Kv(A,B,W,$){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;const ge=J.isWebGL2;ce===null&&(ce=new Mr(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")?wa:Vi,minFilter:Ta,samples:ge?4:0})),x.getDrawingBufferSize(Ae),ge?ce.setSize(Ae.x,Ae.y):ce.setSize(xl(Ae.x),xl(Ae.y));const Te=x.getRenderTarget();x.setRenderTarget(ce),x.getClearColor(Z),P=x.getClearAlpha(),P<1&&x.setClearColor(16777215,.5),x.clear();const Re=x.toneMapping;x.toneMapping=Gi,Fa(A,W,$),b.updateMultisampleRenderTarget(ce),b.updateRenderTargetMipmap(ce);let De=!1;for(let Be=0,Ue=B.length;Be<Ue;Be++){const Fe=B[Be],mt=Fe.object,an=Fe.geometry,wt=Fe.material,Kn=Fe.group;if(wt.side===si&&mt.layers.test($.layers)){const lt=wt.side;wt.side=rn,wt.needsUpdate=!0,rh(mt,W,$,an,wt,Kn),wt.side=lt,wt.needsUpdate=!0,De=!0}}De===!0&&(b.updateMultisampleRenderTarget(ce),b.updateRenderTargetMipmap(ce)),x.setRenderTarget(Te),x.setClearColor(Z,P),x.toneMapping=Re}function Fa(A,B,W){const $=B.isScene===!0?B.overrideMaterial:null;for(let V=0,ge=A.length;V<ge;V++){const Te=A[V],Re=Te.object,De=Te.geometry,Be=$===null?Te.material:$,Ue=Te.group;Re.layers.test(W.layers)&&rh(Re,B,W,De,Be,Ue)}}function rh(A,B,W,$,V,ge){A.onBeforeRender(x,B,W,$,V,ge),A.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),V.onBeforeRender(x,B,W,$,A,ge),V.transparent===!0&&V.side===si&&V.forceSinglePass===!1?(V.side=rn,V.needsUpdate=!0,x.renderBufferDirect(W,B,$,V,A,ge),V.side=qi,V.needsUpdate=!0,x.renderBufferDirect(W,B,$,V,A,ge),V.side=si):x.renderBufferDirect(W,B,$,V,A,ge),A.onAfterRender(x,B,W,$,V,ge)}function ka(A,B,W){B.isScene!==!0&&(B=we);const $=_e.get(A),V=m.state.lights,ge=m.state.shadowsArray,Te=V.state.version,Re=Me.getParameters(A,V.state,ge,B,W),De=Me.getProgramCacheKey(Re);let Be=$.programs;$.environment=A.isMeshStandardMaterial?B.environment:null,$.fog=B.fog,$.envMap=(A.isMeshStandardMaterial?j:M).get(A.envMap||$.environment),Be===void 0&&(A.addEventListener("dispose",de),Be=new Map,$.programs=Be);let Ue=Be.get(De);if(Ue!==void 0){if($.currentProgram===Ue&&$.lightsStateVersion===Te)return ah(A,Re),Ue}else Re.uniforms=Me.getUniforms(A),A.onBuild(W,Re,x),A.onBeforeCompile(Re,x),Ue=Me.acquireProgram(Re,De),Be.set(De,Ue),$.uniforms=Re.uniforms;const Fe=$.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Fe.clippingPlanes=ze.uniform),ah(A,Re),$.needsLights=Jv(A),$.lightsStateVersion=Te,$.needsLights&&(Fe.ambientLightColor.value=V.state.ambient,Fe.lightProbe.value=V.state.probe,Fe.directionalLights.value=V.state.directional,Fe.directionalLightShadows.value=V.state.directionalShadow,Fe.spotLights.value=V.state.spot,Fe.spotLightShadows.value=V.state.spotShadow,Fe.rectAreaLights.value=V.state.rectArea,Fe.ltc_1.value=V.state.rectAreaLTC1,Fe.ltc_2.value=V.state.rectAreaLTC2,Fe.pointLights.value=V.state.point,Fe.pointLightShadows.value=V.state.pointShadow,Fe.hemisphereLights.value=V.state.hemi,Fe.directionalShadowMap.value=V.state.directionalShadowMap,Fe.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Fe.spotShadowMap.value=V.state.spotShadowMap,Fe.spotLightMatrix.value=V.state.spotLightMatrix,Fe.spotLightMap.value=V.state.spotLightMap,Fe.pointShadowMap.value=V.state.pointShadowMap,Fe.pointShadowMatrix.value=V.state.pointShadowMatrix),$.currentProgram=Ue,$.uniformsList=null,Ue}function sh(A){if(A.uniformsList===null){const B=A.currentProgram.getUniforms();A.uniformsList=Bo.seqWithValue(B.seq,A.uniforms)}return A.uniformsList}function ah(A,B){const W=_e.get(A);W.outputColorSpace=B.outputColorSpace,W.batching=B.batching,W.instancing=B.instancing,W.instancingColor=B.instancingColor,W.skinning=B.skinning,W.morphTargets=B.morphTargets,W.morphNormals=B.morphNormals,W.morphColors=B.morphColors,W.morphTargetsCount=B.morphTargetsCount,W.numClippingPlanes=B.numClippingPlanes,W.numIntersection=B.numClipIntersection,W.vertexAlphas=B.vertexAlphas,W.vertexTangents=B.vertexTangents,W.toneMapping=B.toneMapping}function Zv(A,B,W,$,V){B.isScene!==!0&&(B=we),b.resetTextureUnits();const ge=B.fog,Te=$.isMeshStandardMaterial?B.environment:null,Re=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:mi,De=($.isMeshStandardMaterial?j:M).get($.envMap||Te),Be=$.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ue=!!W.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Fe=!!W.morphAttributes.position,mt=!!W.morphAttributes.normal,an=!!W.morphAttributes.color;let wt=Gi;$.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(wt=x.toneMapping);const Kn=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,lt=Kn!==void 0?Kn.length:0,je=_e.get($),Gl=m.state.lights;if(Y===!0&&(ae===!0||A!==E)){const _n=A===E&&$.id===z;ze.setState($,A,_n)}let ft=!1;$.version===je.__version?(je.needsLights&&je.lightsStateVersion!==Gl.state.version||je.outputColorSpace!==Re||V.isBatchedMesh&&je.batching===!1||!V.isBatchedMesh&&je.batching===!0||V.isInstancedMesh&&je.instancing===!1||!V.isInstancedMesh&&je.instancing===!0||V.isSkinnedMesh&&je.skinning===!1||!V.isSkinnedMesh&&je.skinning===!0||V.isInstancedMesh&&je.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&je.instancingColor===!1&&V.instanceColor!==null||je.envMap!==De||$.fog===!0&&je.fog!==ge||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==ze.numPlanes||je.numIntersection!==ze.numIntersection)||je.vertexAlphas!==Be||je.vertexTangents!==Ue||je.morphTargets!==Fe||je.morphNormals!==mt||je.morphColors!==an||je.toneMapping!==wt||J.isWebGL2===!0&&je.morphTargetsCount!==lt)&&(ft=!0):(ft=!0,je.__version=$.version);let Zi=je.currentProgram;ft===!0&&(Zi=ka($,B,V));let oh=!1,Ps=!1,Vl=!1;const Ut=Zi.getUniforms(),Qi=je.uniforms;if(ee.useProgram(Zi.program)&&(oh=!0,Ps=!0,Vl=!0),$.id!==z&&(z=$.id,Ps=!0),oh||E!==A){Ut.setValue(G,"projectionMatrix",A.projectionMatrix),Ut.setValue(G,"viewMatrix",A.matrixWorldInverse);const _n=Ut.map.cameraPosition;_n!==void 0&&_n.setValue(G,Le.setFromMatrixPosition(A.matrixWorld)),J.logarithmicDepthBuffer&&Ut.setValue(G,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Ut.setValue(G,"isOrthographic",A.isOrthographicCamera===!0),E!==A&&(E=A,Ps=!0,Vl=!0)}if(V.isSkinnedMesh){Ut.setOptional(G,V,"bindMatrix"),Ut.setOptional(G,V,"bindMatrixInverse");const _n=V.skeleton;_n&&(J.floatVertexTextures?(_n.boneTexture===null&&_n.computeBoneTexture(),Ut.setValue(G,"boneTexture",_n.boneTexture,b)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}V.isBatchedMesh&&(Ut.setOptional(G,V,"batchingTexture"),Ut.setValue(G,"batchingTexture",V._matricesTexture,b));const Wl=W.morphAttributes;if((Wl.position!==void 0||Wl.normal!==void 0||Wl.color!==void 0&&J.isWebGL2===!0)&&Ve.update(V,W,Zi),(Ps||je.receiveShadow!==V.receiveShadow)&&(je.receiveShadow=V.receiveShadow,Ut.setValue(G,"receiveShadow",V.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Qi.envMap.value=De,Qi.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),Ps&&(Ut.setValue(G,"toneMappingExposure",x.toneMappingExposure),je.needsLights&&Qv(Qi,Vl),ge&&$.fog===!0&&he.refreshFogUniforms(Qi,ge),he.refreshMaterialUniforms(Qi,$,Q,q,ce),Bo.upload(G,sh(je),Qi,b)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Bo.upload(G,sh(je),Qi,b),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Ut.setValue(G,"center",V.center),Ut.setValue(G,"modelViewMatrix",V.modelViewMatrix),Ut.setValue(G,"normalMatrix",V.normalMatrix),Ut.setValue(G,"modelMatrix",V.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const _n=$.uniformsGroups;for(let Xl=0,e_=_n.length;Xl<e_;Xl++)if(J.isWebGL2){const lh=_n[Xl];$e.update(lh,Zi),$e.bind(lh,Zi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Zi}function Qv(A,B){A.ambientLightColor.needsUpdate=B,A.lightProbe.needsUpdate=B,A.directionalLights.needsUpdate=B,A.directionalLightShadows.needsUpdate=B,A.pointLights.needsUpdate=B,A.pointLightShadows.needsUpdate=B,A.spotLights.needsUpdate=B,A.spotLightShadows.needsUpdate=B,A.rectAreaLights.needsUpdate=B,A.hemisphereLights.needsUpdate=B}function Jv(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(A,B,W){_e.get(A.texture).__webglTexture=B,_e.get(A.depthTexture).__webglTexture=W;const $=_e.get(A);$.__hasExternalTextures=!0,$.__hasExternalTextures&&($.__autoAllocateDepthBuffer=W===void 0,$.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,B){const W=_e.get(A);W.__webglFramebuffer=B,W.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(A,B=0,W=0){T=A,N=B,C=W;let $=!0,V=null,ge=!1,Te=!1;if(A){const De=_e.get(A);De.__useDefaultFramebuffer!==void 0?(ee.bindFramebuffer(G.FRAMEBUFFER,null),$=!1):De.__webglFramebuffer===void 0?b.setupRenderTarget(A):De.__hasExternalTextures&&b.rebindTextures(A,_e.get(A.texture).__webglTexture,_e.get(A.depthTexture).__webglTexture);const Be=A.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Te=!0);const Ue=_e.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ue[B])?V=Ue[B][W]:V=Ue[B],ge=!0):J.isWebGL2&&A.samples>0&&b.useMultisampledRTT(A)===!1?V=_e.get(A).__webglMultisampledFramebuffer:Array.isArray(Ue)?V=Ue[W]:V=Ue,w.copy(A.viewport),U.copy(A.scissor),L=A.scissorTest}else w.copy(R).multiplyScalar(Q).floor(),U.copy(D).multiplyScalar(Q).floor(),L=K;if(ee.bindFramebuffer(G.FRAMEBUFFER,V)&&J.drawBuffers&&$&&ee.drawBuffers(A,V),ee.viewport(w),ee.scissor(U),ee.setScissorTest(L),ge){const De=_e.get(A.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+B,De.__webglTexture,W)}else if(Te){const De=_e.get(A.texture),Be=B||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,De.__webglTexture,W||0,Be)}z=-1},this.readRenderTargetPixels=function(A,B,W,$,V,ge,Te){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=_e.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Te!==void 0&&(Re=Re[Te]),Re){ee.bindFramebuffer(G.FRAMEBUFFER,Re);try{const De=A.texture,Be=De.format,Ue=De.type;if(Be!==kn&&ye.convert(Be)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Fe=Ue===wa&&(Ee.has("EXT_color_buffer_half_float")||J.isWebGL2&&Ee.has("EXT_color_buffer_float"));if(Ue!==Vi&&ye.convert(Ue)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ue===Li&&(J.isWebGL2||Ee.has("OES_texture_float")||Ee.has("WEBGL_color_buffer_float")))&&!Fe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=A.width-$&&W>=0&&W<=A.height-V&&G.readPixels(B,W,$,V,ye.convert(Be),ye.convert(Ue),ge)}finally{const De=T!==null?_e.get(T).__webglFramebuffer:null;ee.bindFramebuffer(G.FRAMEBUFFER,De)}}},this.copyFramebufferToTexture=function(A,B,W=0){const $=Math.pow(2,-W),V=Math.floor(B.image.width*$),ge=Math.floor(B.image.height*$);b.setTexture2D(B,0),G.copyTexSubImage2D(G.TEXTURE_2D,W,0,0,A.x,A.y,V,ge),ee.unbindTexture()},this.copyTextureToTexture=function(A,B,W,$=0){const V=B.image.width,ge=B.image.height,Te=ye.convert(W.format),Re=ye.convert(W.type);b.setTexture2D(W,0),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,W.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,W.unpackAlignment),B.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,$,A.x,A.y,V,ge,Te,Re,B.image.data):B.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,$,A.x,A.y,B.mipmaps[0].width,B.mipmaps[0].height,Te,B.mipmaps[0].data):G.texSubImage2D(G.TEXTURE_2D,$,A.x,A.y,Te,Re,B.image),$===0&&W.generateMipmaps&&G.generateMipmap(G.TEXTURE_2D),ee.unbindTexture()},this.copyTextureToTexture3D=function(A,B,W,$,V=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ge=A.max.x-A.min.x+1,Te=A.max.y-A.min.y+1,Re=A.max.z-A.min.z+1,De=ye.convert($.format),Be=ye.convert($.type);let Ue;if($.isData3DTexture)b.setTexture3D($,0),Ue=G.TEXTURE_3D;else if($.isDataArrayTexture||$.isCompressedArrayTexture)b.setTexture2DArray($,0),Ue=G.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,$.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,$.unpackAlignment);const Fe=G.getParameter(G.UNPACK_ROW_LENGTH),mt=G.getParameter(G.UNPACK_IMAGE_HEIGHT),an=G.getParameter(G.UNPACK_SKIP_PIXELS),wt=G.getParameter(G.UNPACK_SKIP_ROWS),Kn=G.getParameter(G.UNPACK_SKIP_IMAGES),lt=W.isCompressedTexture?W.mipmaps[V]:W.image;G.pixelStorei(G.UNPACK_ROW_LENGTH,lt.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,lt.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,A.min.x),G.pixelStorei(G.UNPACK_SKIP_ROWS,A.min.y),G.pixelStorei(G.UNPACK_SKIP_IMAGES,A.min.z),W.isDataTexture||W.isData3DTexture?G.texSubImage3D(Ue,V,B.x,B.y,B.z,ge,Te,Re,De,Be,lt.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(Ue,V,B.x,B.y,B.z,ge,Te,Re,De,lt.data)):G.texSubImage3D(Ue,V,B.x,B.y,B.z,ge,Te,Re,De,Be,lt),G.pixelStorei(G.UNPACK_ROW_LENGTH,Fe),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,mt),G.pixelStorei(G.UNPACK_SKIP_PIXELS,an),G.pixelStorei(G.UNPACK_SKIP_ROWS,wt),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Kn),V===0&&$.generateMipmaps&&G.generateMipmap(Ue),ee.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?b.setTextureCube(A,0):A.isData3DTexture?b.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?b.setTexture2DArray(A,0):b.setTexture2D(A,0),ee.unbindTexture()},this.resetState=function(){N=0,C=0,T=null,ee.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Zd?"display-p3":"srgb",n.unpackColorSpace=Qe.workingColorSpace===zl?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Pt?vr:Tv}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===vr?Pt:mi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class z1 extends th{}z1.prototype.isWebGL1Renderer=!0;class qv extends sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class nh extends Ia{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Wp=new Rt,Qu=new Nv,wo=new Bl,Ao=new X;class Yv extends sn{constructor(e=new $n,n=new nh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),wo.copy(i.boundingSphere),wo.applyMatrix4(r),wo.radius+=s,e.ray.intersectsSphere(wo)===!1)return;Wp.copy(r).invert(),Qu.copy(e.ray).applyMatrix4(Wp);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,p=i.attributes.position;if(c!==null){const h=Math.max(0,a.start),v=Math.min(c.count,a.start+a.count);for(let _=h,y=v;_<y;_++){const m=c.getX(_);Ao.fromBufferAttribute(p,m),Xp(Ao,m,l,r,e,n,this)}}else{const h=Math.max(0,a.start),v=Math.min(p.count,a.start+a.count);for(let _=h,y=v;_<y;_++)Ao.fromBufferAttribute(p,_),Xp(Ao,_,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Xp(t,e,n,i,r,s,a){const o=Qu.distanceSqToPoint(t);if(o<n){const l=new X;Qu.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$d}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$d);function B1({activeFormation:t}){const e=fe.useRef(null),n=fe.useRef(null),i=fe.useRef(null),r=fe.useRef(null),s=1800,a=fe.useRef([]),o=fe.useRef([]),l=fe.useRef([]);if(a.current.length===0){for(let p=0;p<s;p++){const h=Math.floor(p/50),v=p%50,_=(v-50/2)*.35,y=(h-36/2)*.35,m=Math.sin(v*.18)*Math.cos(h*.22)*1.5;a.current.push(_,m,y)}for(let p=0;p<s;p++){const h=Math.pow(Math.random(),2)*8.5;let v=(Math.random()-.5)*1.5*(8.5-h)/8.5;const _=Math.floor(Math.random()*2)*Math.PI,y=h*.5+_;let m=Math.cos(y)*h+(Math.random()-.5)*.4,u=Math.sin(y)*h+(Math.random()-.5)*.4;o.current.push(m,v,u)}for(let p=0;p<s;p++){const h=Math.random()>.5,v=Math.random()>.85,_=p/s*Math.PI*6.5,y=3.2;let m=(_-Math.PI*3.25)*1.25,u,g;if(v){const x=Math.random(),S=_,N=_+Math.PI;u=ap.lerp(Math.cos(S),Math.cos(N),x)*y,g=ap.lerp(Math.sin(S),Math.sin(N),x)*y}else{const x=_+(h?Math.PI:0);u=Math.cos(x)*y,g=Math.sin(x)*y}u+=(Math.random()-.5)*.18,m+=(Math.random()-.5)*.18,g+=(Math.random()-.5)*.18,l.current.push(u,m,g)}}return fe.useEffect(()=>{let c=a.current;t===1?c=a.current:t===2?c=o.current:t===3&&(c=l.current),n.current=c},[t]),fe.useEffect(()=>{const c=e.current;if(!c)return;const f=c.clientWidth||500,p=c.clientHeight||400,h=new th({antialias:!0,alpha:!0});h.setSize(f,p),h.setPixelRatio(Math.min(window.devicePixelRatio,2)),c.appendChild(h.domElement);const v=new qv,_=new dn(45,f/p,.1,100);_.position.z=18;const y=new $n,m=new Float32Array(s*3);let u=a.current;t===2?u=o.current:t===3&&(u=l.current),n.current=u;for(let w=0;w<s*3;w++)m[w]=u[w];const g=new Bn(m,3);y.setAttribute("position",g),r.current=g;const x=new nh({size:.15,vertexColors:!0,transparent:!0,opacity:.85,blending:fl}),S=[],N=[new qe(16777215),new qe(13358561),new qe(9741240),new qe(6583435)];for(let w=0;w<s;w++){const U=N[Math.floor(Math.random()*N.length)];S.push(U.r,U.g,U.b)}y.setAttribute("color",new ui(S,3));const C=new Yv(y,x);i.current=C,v.add(C);const T=()=>{if(!c)return;const w=c.clientWidth,U=c.clientHeight;_.aspect=w/U,_.updateProjectionMatrix(),h.setSize(w,U)};window.addEventListener("resize",T);let z=null;const E=()=>{z=requestAnimationFrame(E),C.rotation.y+=.0035,C.rotation.x+=.001;const w=g.array,U=n.current;if(U){for(let L=0;L<s*3;L++)w[L]+=(U[L]-w[L])*.075;g.needsUpdate=!0}h.render(v,_)};return E(),()=>{cancelAnimationFrame(z),window.removeEventListener("resize",T),h.dispose(),x.dispose(),y.dispose(),c.contains(h.domElement)&&c.removeChild(h.domElement)}},[]),d.jsx("div",{className:"research-canvas-inner",id:"research-canvas",ref:e,style:{width:"100%",height:"100%"}})}function H1(){const t=fe.useRef(null);return fe.useEffect(()=>{const e=t.current;if(!e)return;const n=e.clientWidth,i=e.clientHeight,r=new th({antialias:!1,alpha:!0});r.setSize(n,i),r.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),e.appendChild(r.domElement);const s=new qv,a=new dn(60,n/i,.1,100);a.position.z=10;const o=180,l=new $n,c=[],f=[];for(let m=0;m<o;m++)c.push((Math.random()-.5)*15,(Math.random()-.5)*10,(Math.random()-.5)*10),f.push([(Math.random()-.5)*.004,Math.random()*.006+.002,(Math.random()-.5)*.004]);l.setAttribute("position",new ui(c,3));const p=new nh({size:.07,color:13358561,transparent:!0,opacity:.45,blending:fl}),h=new Yv(l,p);s.add(h);const v=()=>{if(!e)return;const m=e.clientWidth,u=e.clientHeight;a.aspect=m/u,a.updateProjectionMatrix(),r.setSize(m,u)};window.addEventListener("resize",v);let _=null;const y=()=>{_=requestAnimationFrame(y);const m=l.attributes.position,u=m.array;for(let g=0;g<o;g++){const x=g*3;u[x]+=f[g][0],u[x+1]+=f[g][1],u[x+2]+=f[g][2],u[x+1]>5&&(u[x+1]=-5,u[x]=(Math.random()-.5)*15)}m.needsUpdate=!0,r.render(s,a)};return y(),()=>{cancelAnimationFrame(_),window.removeEventListener("resize",v),r.dispose(),p.dispose(),l.dispose(),e.contains(r.domElement)&&e.removeChild(r.domElement)}},[]),d.jsx("div",{className:"numbers-canvas-wrap",id:"numbers-canvas",ref:t})}const j1=qd(t=>({speed:.85,gooeyness:1.2,ditherEnabled:!0,dotSize:5,dotGap:2.5,brightness:.85,contrast:.6,crossEnabled:!1,crossIntensity:.95,bloomEnabled:!0,bloomIntensity:.55,bloomSize:1.5,crtEnabled:!0,scanlines:.75,curvature:0,vignette:2,chroma:.1,gpuTier:"detecting…",setSpeed:e=>t({speed:e}),setGooeyness:e=>t({gooeyness:e}),setDitherEnabled:e=>t({ditherEnabled:e}),setDotSize:e=>t({dotSize:e}),setDotGap:e=>t({dotGap:e}),setBrightness:e=>t({brightness:e}),setContrast:e=>t({contrast:e}),setCrossEnabled:e=>t({crossEnabled:e}),setCrossIntensity:e=>t({crossIntensity:e}),setBloomEnabled:e=>t({bloomEnabled:e}),setBloomIntensity:e=>t({bloomIntensity:e}),setBloomSize:e=>t({bloomSize:e}),setCrtEnabled:e=>t({crtEnabled:e}),setScanlines:e=>t({scanlines:e}),setCurvature:e=>t({curvature:e}),setVignette:e=>t({vignette:e}),setChroma:e=>t({chroma:e}),setGpuTier:e=>t({gpuTier:e})}));function G1({isOpen:t,onClose:e}){const n=j1();return d.jsxs(d.Fragment,{children:[d.jsx("div",{className:`settings-backdrop ${t?"open":""}`,onClick:e}),d.jsxs("div",{className:`settings-panel ${t?"open":""}`,id:"settings-panel",children:[d.jsxs("div",{className:"settings-panel-header",children:[d.jsx("span",{className:"settings-panel-title",children:"Visual Synthesizer"}),d.jsx("button",{className:"settings-panel-close",onClick:e,"aria-label":"Close settings",children:d.jsx("svg",{viewBox:"0 0 16 16",children:d.jsx("path",{d:"M4 4l8 8M12 4l-8 8",stroke:"currentColor",strokeWidth:"2",fill:"none"})})})]}),d.jsxs("div",{className:"settings-panel-body",children:[d.jsxs("div",{className:"settings-section",children:[d.jsx("div",{className:"settings-section-title",children:"Fluid Aura"}),d.jsxs("div",{className:"settings-slider-row",children:[d.jsxs("div",{className:"settings-slider-header",children:[d.jsx("span",{className:"settings-label",children:"Flow Speed"}),d.jsx("span",{className:"settings-value",children:n.speed.toFixed(2)})]}),d.jsx("input",{type:"range",className:"s-range",min:"0",max:"2",step:"0.05",value:n.speed,onChange:i=>n.setSpeed(parseFloat(i.target.value))})]}),d.jsxs("div",{className:"settings-slider-row",children:[d.jsxs("div",{className:"settings-slider-header",children:[d.jsx("span",{className:"settings-label",children:"Gooeyness"}),d.jsx("span",{className:"settings-value",children:n.gooeyness.toFixed(2)})]}),d.jsx("input",{type:"range",className:"s-range",min:"0.1",max:"3",step:"0.05",value:n.gooeyness,onChange:i=>n.setGooeyness(parseFloat(i.target.value))})]})]}),d.jsx("div",{className:"settings-divider"}),d.jsxs("div",{className:"settings-section",children:[d.jsx("div",{className:"settings-section-title",children:"Dot Matrix"}),d.jsxs("div",{className:"settings-row",children:[d.jsx("span",{className:"settings-label",children:"Enabled"}),d.jsx("div",{className:`s-toggle ${n.ditherEnabled?"on":""}`,onClick:()=>n.setDitherEnabled(!n.ditherEnabled)})]}),d.jsxs("div",{className:"settings-slider-row",children:[d.jsxs("div",{className:"settings-slider-header",children:[d.jsx("span",{className:"settings-label",children:"Dot Size"}),d.jsx("span",{className:"settings-value",children:n.dotSize.toFixed(1)})]}),d.jsx("input",{type:"range",className:"s-range",min:"1",max:"12",step:"0.5",value:n.dotSize,onChange:i=>n.setDotSize(parseFloat(i.target.value))})]}),d.jsxs("div",{className:"settings-slider-row",children:[d.jsxs("div",{className:"settings-slider-header",children:[d.jsx("span",{className:"settings-label",children:"Dot Gap"}),d.jsx("span",{className:"settings-value",children:n.dotGap.toFixed(1)})]}),d.jsx("input",{type:"range",className:"s-range",min:"0",max:"6",step:"0.5",value:n.dotGap,onChange:i=>n.setDotGap(parseFloat(i.target.value))})]}),d.jsxs("div",{className:"settings-slider-row",children:[d.jsxs("div",{className:"settings-slider-header",children:[d.jsx("span",{className:"settings-label",children:"Brightness"}),d.jsx("span",{className:"settings-value",children:n.brightness.toFixed(2)})]}),d.jsx("input",{type:"range",className:"s-range",min:"0.1",max:"2",step:"0.05",value:n.brightness,onChange:i=>n.setBrightness(parseFloat(i.target.value))})]}),d.jsxs("div",{className:"settings-slider-row",children:[d.jsxs("div",{className:"settings-slider-header",children:[d.jsx("span",{className:"settings-label",children:"Contrast"}),d.jsx("span",{className:"settings-value",children:n.contrast.toFixed(2)})]}),d.jsx("input",{type:"range",className:"s-range",min:"0.1",max:"2",step:"0.05",value:n.contrast,onChange:i=>n.setContrast(parseFloat(i.target.value))})]})]}),d.jsx("div",{className:"settings-divider"}),d.jsxs("div",{className:"settings-section",children:[d.jsx("div",{className:"settings-section-title",children:"Crosshatch"}),d.jsxs("div",{className:"settings-row",children:[d.jsx("span",{className:"settings-label",children:"Enabled"}),d.jsx("div",{className:`s-toggle ${n.crossEnabled?"on":""}`,onClick:()=>n.setCrossEnabled(!n.crossEnabled)})]}),d.jsxs("div",{className:"settings-slider-row",children:[d.jsxs("div",{className:"settings-slider-header",children:[d.jsx("span",{className:"settings-label",children:"Intensity"}),d.jsx("span",{className:"settings-value",children:n.crossIntensity.toFixed(2)})]}),d.jsx("input",{type:"range",className:"s-range",min:"0",max:"1",step:"0.05",value:n.crossIntensity,onChange:i=>n.setCrossIntensity(parseFloat(i.target.value))})]})]}),d.jsx("div",{className:"settings-divider"}),d.jsxs("div",{className:"settings-section",children:[d.jsx("div",{className:"settings-section-title",children:"Bloom Glow"}),d.jsxs("div",{className:"settings-row",children:[d.jsx("span",{className:"settings-label",children:"Enabled"}),d.jsx("div",{className:`s-toggle ${n.bloomEnabled?"on":""}`,onClick:()=>n.setBloomEnabled(!n.bloomEnabled)})]}),d.jsxs("div",{className:"settings-slider-row",children:[d.jsxs("div",{className:"settings-slider-header",children:[d.jsx("span",{className:"settings-label",children:"Intensity"}),d.jsx("span",{className:"settings-value",children:n.bloomIntensity.toFixed(2)})]}),d.jsx("input",{type:"range",className:"s-range",min:"0",max:"2",step:"0.05",value:n.bloomIntensity,onChange:i=>n.setBloomIntensity(parseFloat(i.target.value))})]}),d.jsxs("div",{className:"settings-slider-row",children:[d.jsxs("div",{className:"settings-slider-header",children:[d.jsx("span",{className:"settings-label",children:"Size"}),d.jsx("span",{className:"settings-value",children:n.bloomSize.toFixed(2)})]}),d.jsx("input",{type:"range",className:"s-range",min:"0.5",max:"4",step:"0.1",value:n.bloomSize,onChange:i=>n.setBloomSize(parseFloat(i.target.value))})]})]}),d.jsx("div",{className:"settings-divider"}),d.jsxs("div",{className:"settings-section",children:[d.jsx("div",{className:"settings-section-title",children:"CRT Shader"}),d.jsxs("div",{className:"settings-row",children:[d.jsx("span",{className:"settings-label",children:"Enabled"}),d.jsx("div",{className:`s-toggle ${n.crtEnabled?"on":""}`,onClick:()=>n.setCrtEnabled(!n.crtEnabled)})]}),d.jsxs("div",{className:"settings-slider-row",children:[d.jsxs("div",{className:"settings-slider-header",children:[d.jsx("span",{className:"settings-label",children:"Scanlines"}),d.jsx("span",{className:"settings-value",children:n.scanlines.toFixed(2)})]}),d.jsx("input",{type:"range",className:"s-range",min:"0",max:"1",step:"0.05",value:n.scanlines,onChange:i=>n.setScanlines(parseFloat(i.target.value))})]}),d.jsxs("div",{className:"settings-slider-row",children:[d.jsxs("div",{className:"settings-slider-header",children:[d.jsx("span",{className:"settings-label",children:"Curvature"}),d.jsx("span",{className:"settings-value",children:n.curvature.toFixed(2)})]}),d.jsx("input",{type:"range",className:"s-range",min:"0",max:"5",step:"0.1",value:n.curvature,onChange:i=>n.setCurvature(parseFloat(i.target.value))})]}),d.jsxs("div",{className:"settings-slider-row",children:[d.jsxs("div",{className:"settings-slider-header",children:[d.jsx("span",{className:"settings-label",children:"Vignette"}),d.jsx("span",{className:"settings-value",children:n.vignette.toFixed(2)})]}),d.jsx("input",{type:"range",className:"s-range",min:"0",max:"5",step:"0.1",value:n.vignette,onChange:i=>n.setVignette(parseFloat(i.target.value))})]}),d.jsxs("div",{className:"settings-slider-row",children:[d.jsxs("div",{className:"settings-slider-header",children:[d.jsx("span",{className:"settings-label",children:"Chroma"}),d.jsx("span",{className:"settings-value",children:n.chroma.toFixed(2)})]}),d.jsx("input",{type:"range",className:"s-range",min:"0",max:"5",step:"0.1",value:n.chroma,onChange:i=>n.setChroma(parseFloat(i.target.value))})]})]}),d.jsx("div",{className:"settings-divider"}),d.jsxs("div",{className:"settings-tier",id:"settings-tier",children:["GPU Tier: ",n.gpuTier]})]})]})]})}const $v="THANKYOUFORCHOOSINGUS",$c=$v.length;function V1({isOpen:t,onClose:e}){const n=pr(R=>R.login),[i,r]=fe.useState(!0),[s,a]=fe.useState(""),[o,l]=fe.useState(""),[c,f]=fe.useState(""),[p,h]=fe.useState(un[0].id),[v,_]=fe.useState(""),[y,m]=fe.useState(!1),[u,g]=fe.useState(!1),[x,S]=fe.useState(Array($c).fill(!1)),[N,C]=fe.useState(!1),[T,z]=fe.useState({x:-1e3,y:-1e3}),[E,w]=fe.useState(!1),U=hl(R=>R.lang),L=Yd[U];if(fe.useEffect(()=>{t||(a(""),l(""),f(""),h(un[0].id),_(""),S(Array($c).fill(!1)),C(!1),z({x:-1e3,y:-1e3}),w(!1))},[t]),fe.useEffect(()=>{t&&x.every(D=>D)&&!N&&C(!0)},[x,t,N]),!t)return null;const Z=R=>{if(x[R])return;const D=[...x];D[R]=!0,S(D)},P=R=>{const D=R.currentTarget.getBoundingClientRect(),K=R.clientX-D.left,H=R.clientY-D.top;z({x:K,y:H});const Y=R.clientX-D.left-D.width/2,ce=(R.clientY-D.top-D.height/2)/(D.height/2)*-9,pe=Y/(D.width/2)*9,Ae=R.currentTarget.querySelector(".cubes-grid-matrix");Ae&&(Ae.style.setProperty("--tilt-x",`${ce}deg`),Ae.style.setProperty("--tilt-y",`${pe}deg`))},O=R=>{w(!1);const D=R.currentTarget.querySelector(".cubes-grid-matrix");D&&(D.style.setProperty("--tilt-x","0deg"),D.style.setProperty("--tilt-y","0deg"))},q=()=>{w(!0)},Q=R=>{if(R.preventDefault(),_(""),i&&!s.trim()){_(U==="en"?"Please enter your name.":U==="uz"?"Ismingizni kiriting.":"Пожалуйста, введите имя.");return}if(!o||!c){_(U==="en"?"Please fill in all fields.":U==="uz"?"Barcha maydonlarni to'ldiring.":"Пожалуйста, заполните все поля.");return}if(!/\S+@\S+\.\S+/.test(o)){_(U==="en"?"Please enter a valid email.":U==="uz"?"Email noto'g'ri.":"Введите корректный email.");return}if(c.length<5){_(U==="en"?"Password must be at least 5 characters.":U==="uz"?"Parol kamida 5 ta belgi bo'lishi shart.":"Пароль должен содержать не менее 5 символов.");return}m(!0),setTimeout(()=>{m(!1),g(!0);const D=o.trim();let K=i?s.trim():D.split("@")[0];K=K.charAt(0).toUpperCase()+K.slice(1);const H=un.find(ae=>ae.id===p)||un[0],Y=dl(H.colors);setTimeout(()=>{n(D,K,Y),g(!1),e()},1200)},1500)},F=x.filter(Boolean).length,k=$c-F;return d.jsxs("div",{className:"auth-fullscreen-overlay",children:[d.jsx("button",{className:"auth-fullscreen-close",onClick:e,"aria-label":"Close",children:d.jsx("svg",{viewBox:"0 0 24 24",width:"24",height:"24",children:d.jsx("path",{d:"M18 6 6 18M6 6l12 12",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),d.jsxs("div",{className:"auth-fullscreen-container",children:[d.jsx("div",{className:"auth-left-panel",children:d.jsx("div",{className:"auth-left-content",children:u?d.jsxs("div",{className:"auth-success-screen",children:[d.jsx("div",{className:"auth-success-icon",children:d.jsx("svg",{viewBox:"0 0 24 24",width:"48",height:"48",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:d.jsx("polyline",{points:"20 6 9 17 4 12"})})}),d.jsx("h3",{className:"auth-panel-title",style:{marginTop:"24px"},children:L.accessGranted}),d.jsxs("p",{className:"auth-panel-subtitle",style:{color:"rgba(255, 255, 255, 0.85)",fontSize:"14px"},children:[U==="en"?"Welcome back":U==="uz"?"Xush kelibsiz":"Добро пожаловать обратно",", ",i?s.trim():o.split("@")[0]]}),d.jsx("p",{className:"auth-panel-subtitle",style:{fontSize:"11px",color:"rgba(255, 255, 255, 0.3)",marginTop:"8px"},children:U==="en"?"Decrypting user credentials & authorization keys...":U==="uz"?"Foydalanuvchi ma'lumotlari va avtorizatsiya kalitlari ochilmoqda...":"Дешифрование данных пользователя и ключей авторизации..."})]}):d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"auth-logo-area",children:[d.jsx("span",{className:"auth-decor-bullet",children:"✦"}),d.jsx("h3",{className:"auth-panel-title",children:i?L.createAccount.toUpperCase():U==="en"?"ESTABLISH SESSION":U==="uz"?"TIZIMGA KIRISH":"УСТАНОВИТЬ СЕССИЮ"}),d.jsx("p",{className:"auth-panel-subtitle",children:i?U==="en"?"Register your developer identity to access QIX nodes.":U==="uz"?"QIX tugunlariga kirish uchun dasturchi profilingizni yarating.":"Зарегистрируйте профиль разработчика для доступа к узлам QIX.":U==="en"?"Connect with your credentials to resume your session.":U==="uz"?"Sessiyangizni tiklash uchun hisob ma'lumotlaringizni kiriting.":"Войдите под своими учетными данными, чтобы возобновить сессию."})]}),d.jsxs("form",{onSubmit:Q,className:"auth-panel-form",children:[v&&d.jsx("div",{className:"auth-panel-error",children:v}),i&&d.jsxs("div",{className:"auth-input-group",children:[d.jsx("label",{className:"auth-input-label",children:L.fullName}),d.jsx("input",{type:"text",className:"auth-input-field",value:s,onChange:R=>a(R.target.value),placeholder:"Alex Rivera",disabled:y})]}),d.jsxs("div",{className:"auth-input-group",children:[d.jsx("label",{className:"auth-input-label",children:L.emailAddr}),d.jsx("input",{type:"email",className:"auth-input-field",value:o,onChange:R=>l(R.target.value),placeholder:"alex@gmail.com",disabled:y})]}),i&&d.jsxs("div",{className:"auth-input-group",children:[d.jsx("label",{className:"auth-input-label",children:L.chooseAvatar}),d.jsx("div",{className:"avatar-selection-grid",children:un.map(R=>{const D={background:`linear-gradient(135deg, ${R.colors[0]} 0%, ${R.colors[1]} 100%)`};return d.jsx("button",{type:"button",className:`avatar-option-btn ${p===R.id?"active":""}`,style:D,onClick:()=>h(R.id),"aria-label":R.name,title:R.name,disabled:y},R.id)})})]}),d.jsxs("div",{className:"auth-input-group",children:[d.jsx("label",{className:"auth-input-label",children:L.password}),d.jsx("input",{type:"password",className:"auth-input-field",value:c,onChange:R=>f(R.target.value),placeholder:"••••••••",disabled:y})]}),d.jsx("button",{type:"submit",className:"auth-submit-btn",disabled:y,children:y?d.jsx("span",{className:"auth-spinner"}):i?U==="en"?"Create Profile & Connect":U==="uz"?"Profil yaratish va ulanish":"Создать профиль и подключиться":U==="en"?"Authorize Connection":U==="uz"?"Ulanishni tasdiqlash":"Авторизовать подключение"}),d.jsxs("div",{className:"auth-switch-prompt",children:[d.jsx("span",{children:i?U==="en"?"Already registered? ":U==="uz"?"Ro'yxatdan o'tganmisiz? ":"Уже зарегистрированы? ":U==="en"?"New developer? ":U==="uz"?"Yangi dasturchimisiz? ":"Новый разработчик? "}),d.jsx("button",{type:"button",className:"auth-switch-link",onClick:()=>{r(!i),_("")},disabled:y,children:i?L.login:U==="en"?"Sign Up":U==="uz"?"Ro'yxatdan o'tish":"Регистрация"})]})]})]})})}),d.jsxs("div",{className:"auth-right-panel",onMouseMove:P,onMouseEnter:q,onMouseLeave:O,children:[d.jsx("div",{className:"auth-hover-orb",style:{left:`${T.x}px`,top:`${T.y}px`,opacity:E?1:0}}),d.jsxs("div",{className:"auth-game-container",children:[d.jsx("h4",{className:"game-title",children:U==="en"?"DEVELOPER AUTHENTICATION GRID":U==="uz"?"DASTURCHI AVTORIZATSIYA TO'RI":"СЕТКА АВТОРИЗАЦИИ РАЗРАБОТЧИКА"}),d.jsx("p",{className:"game-subtitle",children:N?U==="en"?"Grid fully decrypted. Secure channel verified!":U==="uz"?"Tarmoq to'liq ochildi. Xavfsiz kanal tasdiqlandi!":"Сетка успешно расшифрована. Безопасный канал подтвержден!":U==="en"?`Hover your mouse over the cybernetic cubes to decrypt the access key. (${k} cubes remaining)`:U==="uz"?`Kirish kalitini ochish uchun kiber kubiklar ustiga kursorni olib boring. (${k} ta kubik qoldi)`:`Наведите курсор на кибернетические кубы, чтобы расшифровать ключ доступа. (Осталось кубов: ${k})`}),d.jsx("div",{className:`cubes-grid-matrix ${N?"won-glow":""}`,children:$v.split("").map((R,D)=>d.jsx("div",{className:`cube-container ${x[D]?"revealed":""}`,onMouseEnter:()=>Z(D),onTouchStart:()=>Z(D),style:{animationDelay:`${D*.035}s`,"--cube-idx":D},children:d.jsxs("div",{className:"cube-card",children:[d.jsx("div",{className:"cube-front",children:d.jsx("span",{className:"cube-front-dot"})}),d.jsx("div",{className:"cube-back",children:d.jsx("span",{className:"cube-letter",children:R})})]})},D))}),N&&d.jsxs("div",{className:"game-congrats-banner",children:[d.jsx("span",{className:"congrats-pulse"}),d.jsx("span",{children:"THANK YOU FOR CHOOSING US"})]})]})]})]})]})}function Ti({children:t}){const e=fe.useRef(null);return fe.useEffect(()=>{const n=e.current;if(!n)return;let i=0,r=0,s=0,a=0,o=null;const l=()=>{i+=(s-i)*.16,r+=(a-r)*.16,n.style.transform=`translate3d(${i}px, ${r}px, 0)`,Math.abs(s-i)>.01||Math.abs(a-r)>.01?o=requestAnimationFrame(l):(i=s,r=a,n.style.transform=`translate3d(${i}px, ${r}px, 0)`,o=null)},c=p=>{const h=n.getBoundingClientRect(),v=h.left+h.width/2,_=h.top+h.height/2,y=p.clientX-v,m=p.clientY-_;Math.hypot(y,m)<75?(s=y*.38,a=m*.38):(s=0,a=0),o||(o=requestAnimationFrame(l))},f=()=>{s=0,a=0,o||(o=requestAnimationFrame(l))};return window.addEventListener("mousemove",c),n.addEventListener("mouseleave",f),()=>{window.removeEventListener("mousemove",c),n.removeEventListener("mouseleave",f),o&&cancelAnimationFrame(o)}},[]),d.jsx("div",{ref:e,style:{display:"inline-block",willChange:"transform"},children:t})}function bo({count:t,suffix:e}){const n=fe.useRef(null),[i,r]=fe.useState(0);return fe.useEffect(()=>{const s=new IntersectionObserver(a=>{if(a[0].isIntersecting){const l=performance.now(),c=f=>{const p=Math.min((f-l)/2e3,1),h=1-Math.pow(1-p,3);r(Math.floor(h*t)),p<1&&requestAnimationFrame(c)};requestAnimationFrame(c)}},{threshold:.1});return n.current&&s.observe(n.current),()=>s.disconnect()},[t]),d.jsxs("span",{ref:n,children:[i,e]})}function W1(){const[t,e]=fe.useState(!1),[n,i]=fe.useState(!1),[r,s]=fe.useState(!1),[a,o]=fe.useState(!1),[l,c]=fe.useState(!1),[f,p]=fe.useState(1),[h,v]=fe.useState(!1),_=fe.useRef(null),y=fe.useRef(null),m=hl(T=>T.lang),u=hl(T=>T.setLang),g=Yd[m],x=pr(T=>T.isLoggedIn),S=pr(T=>T.user),N=pr(T=>T.logout);fe.useEffect(()=>{const T=new kx({duration:1.2,easing:E=>Math.min(1,1.001-Math.pow(2,-10*E)),orientation:"vertical",gestureOrientation:"vertical",smoothWheel:!0,wheelMultiplier:1,touchMultiplier:2,infinite:!1});function z(E){T.raf(E),requestAnimationFrame(z)}return requestAnimationFrame(z),()=>T.destroy()},[]),fe.useEffect(()=>{v(!0)},[]),fe.useEffect(()=>{const T=_.current,z=y.current,E={x:-1e3,y:-1e3,targetX:-1e3,targetY:-1e3},w=k=>{E.targetX=k.clientX,E.targetY=k.clientY};window.addEventListener("mousemove",w);let U;const L=()=>{E.targetX===-1e3?(E.x+=(-1e3-E.x)*.12,E.y+=(-1e3-E.y)*.12):(E.x+=(E.targetX-E.x)*.22,E.y+=(E.targetY-E.y)*.22),T&&(T.style.transform=`translate3d(${E.x}px, ${E.y}px, 0)`),z&&(z.style.transform=`translate3d(${E.targetX}px, ${E.targetY}px, 0)`),U=requestAnimationFrame(L)};U=requestAnimationFrame(L);const Z=()=>{window.scrollY>50?c(!0):c(!1)},P=()=>{if(window.innerWidth<768){document.querySelectorAll(".portfolio-card-wrapper").forEach(R=>{const D=R.querySelector(".portfolio-card");D&&(D.style.transform="none",D.style.opacity="1",D.style.filter="none")});return}const k=document.querySelectorAll(".portfolio-card-wrapper");k.forEach((R,D)=>{const K=R.getBoundingClientRect(),H=120+D*30,Y=R.querySelector(".portfolio-card");if(Y)if(K.top<=H){const ae=k[D+1];if(ae){const ce=ae.getBoundingClientRect(),pe=120+(D+1)*30,Ae=ce.top-pe,Le=400,we=Math.max(0,Math.min(1,(Le-Ae)/Le)),Xe=1-we*.06,G=1-we*.4,vt=1-we*.45;Y.style.transform=`scale(${Xe})`,Y.style.opacity=`${G}`,Y.style.filter=`brightness(${vt})`;const Ee=Y.querySelector(".portfolio-card-image img");if(Ee){const J=-we*40;Ee.style.transform=`scale(1.04) translateY(${J}px)`}}else{Y.style.transform="scale(1)",Y.style.opacity="1",Y.style.filter="none";const ce=Y.querySelector(".portfolio-card-image img");ce&&(ce.style.transform="none")}}else{Y.style.transform="scale(1)",Y.style.opacity="1",Y.style.filter="none";const ae=Y.querySelector(".portfolio-card-image img");ae&&(ae.style.transform="none")}})};let O=!1;const q=()=>{O||(O=!0,requestAnimationFrame(()=>{Z(),P(),O=!1}))};window.addEventListener("scroll",q,{passive:!0}),setTimeout(P,100);const Q=new IntersectionObserver(k=>{k.forEach(R=>{R.isIntersecting&&(R.target.classList.add("visible"),Q.unobserve(R.target))})},{threshold:.1,rootMargin:"0px 0px -30px 0px"});document.querySelectorAll(".reveal").forEach(k=>Q.observe(k));const F=k=>{const R=k.target;R.tagName==="A"||R.tagName==="BUTTON"||R.closest("a")||R.closest("button")||R.closest(".user-profile-badge")||R.closest(".settings-toggle")||R.classList.contains("research-item")||R.closest(".research-item")?(T==null||T.classList.add("hovered"),z==null||z.classList.add("hovered")):(T==null||T.classList.remove("hovered"),z==null||z.classList.remove("hovered"))};return window.addEventListener("mouseover",F),()=>{window.removeEventListener("mousemove",w),window.removeEventListener("mouseover",F),window.removeEventListener("scroll",q),cancelAnimationFrame(U),Q.disconnect()}},[]);const C=h?"anim-in":"";return d.jsxs(d.Fragment,{children:[d.jsx(Ox,{}),d.jsxs("nav",{className:`nav ${l?"scrolled":""} ${C}`,children:[d.jsxs("div",{className:"nav-left nav-links",children:[d.jsx("a",{href:"#services",children:g.services}),d.jsx("a",{href:"#expertise",children:g.expertise})]}),d.jsxs("div",{className:"nav-brand-center",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:[d.jsx("img",{className:"nav-brand-img",src:"/logo.jpg",alt:"QIX Logo"}),d.jsx("span",{className:"nav-brand-text",children:"QIX Technologies"})]}),d.jsxs("div",{className:"nav-right nav-links",children:[d.jsx("a",{href:"#scale",children:g.scale}),d.jsxs("div",{className:"lang-switcher",children:[d.jsx("button",{onClick:()=>u("ru"),className:m==="ru"?"active":"",children:"RU"}),d.jsx("button",{onClick:()=>u("uz"),className:m==="uz"?"active":"",children:"UZ"}),d.jsx("button",{onClick:()=>u("en"),className:m==="en"?"active":"",children:"EN"})]}),x?d.jsxs("div",{className:"user-profile-badge",children:[d.jsx("img",{className:"user-profile-avatar",src:S.avatar,alt:"User Avatar"}),d.jsx("span",{className:"user-profile-name",children:S.name}),d.jsx("div",{className:"logout-dropdown",children:d.jsx("button",{className:"logout-btn",onClick:N,children:g.disconnect})})]}):d.jsx("a",{href:"#login",className:"nav-login-link",onClick:T=>{T.preventDefault(),s(!0)},style:{fontSize:"13px",fontWeight:"500",color:"rgba(255, 255, 255, 0.55)",textDecoration:"none",letterSpacing:"0.5px",transition:"color 0.3s ease"},onMouseEnter:T=>T.target.style.color="#fff",onMouseLeave:T=>T.target.style.color="rgba(255, 255, 255, 0.55)",children:g.login}),d.jsx(Ti,{children:d.jsx("a",{href:"#contact",className:"nav-cta",onClick:T=>{T.preventDefault(),o(!0)},children:d.jsxs("span",{className:"btn-content-inner",children:[d.jsxs("span",{className:"btn-slide-item",children:[d.jsx("span",{children:g.startProject}),d.jsx("svg",{className:"btn-arrow",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:d.jsx("path",{d:"M3 8h10M9 4l4 4-4 4"})})]}),d.jsxs("span",{className:"btn-slide-item btn-slide-item-hover",children:[d.jsx("span",{children:g.startProject}),d.jsx("svg",{className:"btn-arrow",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:d.jsx("path",{d:"M3 8h10M9 4l4 4-4 4"})})]})]})})})]}),d.jsxs("button",{className:`nav-hamburger ${n?"open":""}`,onClick:()=>i(!n),"aria-label":"Menu",children:[d.jsx("span",{}),d.jsx("span",{}),d.jsx("span",{})]})]}),d.jsxs("div",{className:`mobile-menu ${n?"open":""}`,children:[d.jsx("a",{href:"#services",onClick:()=>i(!1),children:g.services}),d.jsx("a",{href:"#expertise",onClick:()=>i(!1),children:g.expertise}),d.jsx("a",{href:"#scale",onClick:()=>i(!1),children:g.scale}),d.jsxs("div",{className:"mobile-lang-switcher",children:[d.jsx("button",{onClick:()=>{u("ru"),i(!1)},className:m==="ru"?"active":"",children:"RU"}),d.jsx("button",{onClick:()=>{u("uz"),i(!1)},className:m==="uz"?"active":"",children:"UZ"}),d.jsx("button",{onClick:()=>{u("en"),i(!1)},className:m==="en"?"active":"",children:"EN"})]}),x?d.jsxs("a",{href:"#logout",onClick:T=>{T.preventDefault(),N(),i(!1)},children:[g.logout," (",S.name,")"]}):d.jsx("a",{href:"#login",onClick:T=>{T.preventDefault(),s(!0),i(!1)},children:g.login}),d.jsx("a",{href:"#contact",className:"mobile-cta",onClick:T=>{T.preventDefault(),i(!1),o(!0)},children:g.startProject})]}),d.jsxs("div",{className:"hero-wrapper",children:[d.jsx("div",{className:`hero-fade ${C}`}),d.jsx("div",{className:`hero-fade-top ${C}`}),d.jsxs("div",{id:"hero-overlay",children:[d.jsxs("div",{className:"hero-content",children:[x&&d.jsxs("div",{className:"hero-welcome-badge",children:[d.jsx("span",{className:"welcome-pulse-dot"}),d.jsxs("span",{children:[m==="en"?"Welcome":m==="uz"?"Xush kelibsiz":"Добро пожаловать",", ",S.name]})]}),d.jsxs("h1",{className:`hero-h1 ${C}`,children:[g.heroTitle," ",d.jsx("br",{}),d.jsx("span",{className:"thin",children:g.heroTitleSub})]}),d.jsxs("div",{className:"hero-row",children:[d.jsx("p",{className:`hero-sub ${C}`,children:g.heroDesc}),d.jsxs("div",{className:`hero-actions ${C}`,children:[d.jsx(Ti,{children:d.jsx("a",{href:"#services",className:"btn-primary",children:d.jsxs("span",{className:"btn-content-inner",children:[d.jsxs("span",{className:"btn-slide-item",children:[d.jsx("span",{children:g.services}),d.jsx("svg",{className:"btn-arrow",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:d.jsx("path",{d:"M3 8h10M9 4l4 4-4 4"})})]}),d.jsxs("span",{className:"btn-slide-item btn-slide-item-hover",children:[d.jsx("span",{children:g.services}),d.jsx("svg",{className:"btn-arrow",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:d.jsx("path",{d:"M3 8h10M9 4l4 4-4 4"})})]})]})})}),d.jsx(Ti,{children:d.jsx("a",{href:"#contact",className:"btn-secondary",onClick:T=>{T.preventDefault(),o(!0)},children:d.jsxs("span",{className:"btn-content-inner",children:[d.jsxs("span",{className:"btn-slide-item",children:[d.jsx("span",{children:m==="en"?"Get in Touch":m==="uz"?"Bog'lanish":"Связаться"}),d.jsx("svg",{className:"btn-arrow",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:d.jsx("path",{d:"M3 8h10M9 4l4 4-4 4"})})]}),d.jsxs("span",{className:"btn-slide-item btn-slide-item-hover",children:[d.jsx("span",{children:m==="en"?"Get in Touch":m==="uz"?"Bog'lanish":"Связаться"}),d.jsx("svg",{className:"btn-arrow",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:d.jsx("path",{d:"M3 8h10M9 4l4 4-4 4"})})]})]})})})]})]})]}),d.jsxs("div",{className:"hero-bottom",children:[d.jsxs("div",{className:"hero-stats",children:[d.jsxs("div",{className:`hero-stat ${C}`,children:[d.jsx("span",{className:"hero-stat-val",children:"150+"}),d.jsx("span",{className:"hero-stat-label",children:g.heroStatsProjects})]}),d.jsxs("div",{className:`hero-stat ${C}`,children:[d.jsx("span",{className:"hero-stat-val",children:"99.9%"}),d.jsx("span",{className:"hero-stat-label",children:g.heroStatsUptime})]}),d.jsxs("div",{className:`hero-stat ${C}`,children:[d.jsx("span",{className:"hero-stat-val",children:"15M+"}),d.jsx("span",{className:"hero-stat-label",children:g.heroStatsUsers})]})]}),d.jsxs("div",{className:`hero-scroll ${C}`,children:[d.jsx("svg",{width:"13",height:"13",viewBox:"0 0 13 13",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{opacity:.35,flexShrink:0},children:d.jsx("path",{d:"M6.5 1v11M2 8l4.5 4.5L11 8",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),d.jsx("span",{style:{letterSpacing:"2px",fontSize:"10px"},children:m==="en"?"Scroll to explore":m==="uz"?"O'rganish uchun aylantiring":"Листайте ниже"})]})]})]})]}),d.jsx("button",{className:"settings-toggle",onClick:()=>e(!t),"aria-label":"Synthesizer Settings",children:d.jsxs("svg",{viewBox:"0 0 24 24",children:[d.jsx("path",{d:"M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"}),d.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51-1Z"})]})}),d.jsx("section",{className:"section section-whatwedo",id:"services",children:d.jsxs("div",{className:"section-inner",children:[d.jsx("div",{className:"section-label reveal",children:g.whatWeDo}),d.jsxs("h2",{className:"section-heading reveal reveal-delay-1",children:[g.engineeredStability," ",d.jsx("span",{className:"thin",children:g.designedGrowth})]}),d.jsxs("div",{className:"features-grid",children:[d.jsxs("div",{className:"feature-card reveal reveal-delay-1",children:[d.jsx("div",{className:"feature-icon",children:d.jsxs("svg",{viewBox:"0 0 24 24",children:[d.jsx("path",{d:"M12 2L2 7l10 5 10-5-10-5z"}),d.jsx("path",{d:"M2 17l10 5 10-5"}),d.jsx("path",{d:"M2 12l10 5 10-5"})]})}),d.jsx("div",{className:"feature-title",children:g.cardWebTitle}),d.jsx("div",{className:"feature-desc",children:g.cardWebDesc})]}),d.jsxs("div",{className:"feature-card reveal reveal-delay-2",children:[d.jsx("div",{className:"feature-icon",children:d.jsxs("svg",{viewBox:"0 0 24 24",children:[d.jsx("circle",{cx:"12",cy:"12",r:"3"}),d.jsx("path",{d:"M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"})]})}),d.jsx("div",{className:"feature-title",children:g.cardAppTitle}),d.jsx("div",{className:"feature-desc",children:g.cardAppDesc})]}),d.jsxs("div",{className:"feature-card reveal reveal-delay-3",children:[d.jsx("div",{className:"feature-icon",children:d.jsx("svg",{viewBox:"0 0 24 24",children:d.jsx("path",{d:"M22 12h-4l-3 9L9 3l-3 9H2"})})}),d.jsx("div",{className:"feature-title",children:g.cardDesignTitle}),d.jsx("div",{className:"feature-desc",children:g.cardDesignDesc})]}),d.jsxs("div",{className:"feature-card reveal reveal-delay-4",children:[d.jsx("div",{className:"feature-icon",children:d.jsxs("svg",{viewBox:"0 0 24 24",children:[d.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),d.jsx("path",{d:"M3 9h18M9 3v18"})]})}),d.jsx("div",{className:"feature-title",children:g.cardCloudTitle}),d.jsx("div",{className:"feature-desc",children:g.cardCloudDesc})]}),d.jsxs("div",{className:"feature-card reveal reveal-delay-5",children:[d.jsx("div",{className:"feature-icon",children:d.jsxs("svg",{viewBox:"0 0 24 24",children:[d.jsx("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),d.jsx("circle",{cx:"9",cy:"7",r:"4"}),d.jsx("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),d.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]})}),d.jsx("div",{className:"feature-title",children:g.cardApiTitle}),d.jsx("div",{className:"feature-desc",children:g.cardApiDesc})]}),d.jsxs("div",{className:"feature-card reveal reveal-delay-6",children:[d.jsx("div",{className:"feature-icon",children:d.jsx("svg",{viewBox:"0 0 24 24",children:d.jsx("polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"})})}),d.jsx("div",{className:"feature-title",children:g.cardSupportTitle}),d.jsx("div",{className:"feature-desc",children:g.cardSupportDesc})]})]})]})}),d.jsx("section",{className:"section section-research",id:"expertise",children:d.jsxs("div",{className:"section-inner",children:[d.jsxs("div",{className:"research-content",children:[d.jsx("div",{className:"section-label reveal",children:g.researchAreas}),d.jsxs("h2",{className:"section-heading reveal reveal-delay-1",style:{marginBottom:"48px"},children:[g.threePillars," ",d.jsx("span",{className:"thin",children:g.scientificExecution})]}),d.jsxs("div",{className:"research-list",children:[d.jsx("div",{className:"research-item-wrap reveal reveal-delay-2",children:d.jsxs("div",{className:`research-item ${f===1?"active":""}`,onMouseEnter:()=>p(1),onTouchStart:()=>p(1),children:[d.jsx("div",{className:"research-num",children:"01"}),d.jsxs("div",{className:"research-item-content",children:[d.jsx("div",{className:"research-item-title",children:g.pillar1Title}),d.jsx("div",{className:"research-item-desc",children:g.pillar1Desc})]})]})}),d.jsx("div",{className:"research-item-wrap reveal reveal-delay-3",children:d.jsxs("div",{className:`research-item ${f===2?"active":""}`,onMouseEnter:()=>p(2),onTouchStart:()=>p(2),children:[d.jsx("div",{className:"research-num",children:"02"}),d.jsxs("div",{className:"research-item-content",children:[d.jsx("div",{className:"research-item-title",children:g.pillar2Title}),d.jsx("div",{className:"research-item-desc",children:g.pillar2Desc})]})]})}),d.jsx("div",{className:"research-item-wrap reveal reveal-delay-4",children:d.jsxs("div",{className:`research-item ${f===3?"active":""}`,onMouseEnter:()=>p(3),onTouchStart:()=>p(3),children:[d.jsx("div",{className:"research-num",children:"03"}),d.jsxs("div",{className:"research-item-content",children:[d.jsx("div",{className:"research-item-title",children:g.pillar3Title}),d.jsx("div",{className:"research-item-desc",children:g.pillar3Desc})]})]})})]})]}),d.jsx("div",{className:"research-canvas-wrap",children:d.jsx(B1,{activeFormation:f})})]})}),d.jsx("section",{className:"section section-portfolio",id:"work",children:d.jsxs("div",{className:"section-inner",children:[d.jsxs("div",{className:"portfolio-header",children:[d.jsx("div",{className:"section-label reveal",children:g.selectedWork}),d.jsxs("h2",{className:"section-heading reveal reveal-delay-1",children:[g.caseStudies," ",d.jsx("span",{className:"thin",children:g.builtSolutions})]})]}),d.jsxs("div",{className:"portfolio-cards",children:[d.jsx("div",{className:"portfolio-card-wrapper reveal reveal-delay-2",children:d.jsxs("div",{className:"portfolio-card",children:[d.jsxs("div",{className:"portfolio-card-content",children:[d.jsx("div",{className:"portfolio-card-tag",children:m==="en"?"Web Application / AI":m==="uz"?"Veb-ilova / AI":"Веб-приложение / ИИ"}),d.jsx("h3",{className:"portfolio-card-title",children:"HubRecipeCook"}),d.jsx("p",{className:"portfolio-card-desc",children:m==="en"?"A modern culinary recipe platform featuring category filtering, detailed cooking instructions, user favorites, and an integrated AI Chef Assistant that crafts custom recipes based on ingredients currently in your kitchen.":m==="uz"?"Kategoriya filtratsiyasi, batafsil pishirish ko'rsatmalari, sevimli taomlar ro'yxati va oshxonangizdagi masalliqlar asosida shaxsiy retseptlar yaratadigan Sun'iy Intellekt oshpaziga ega zamonaviy pazandachilik platformasi.":"Современная кулинарная платформа с фильтрацией по категориям, подробными инструкциями, избранным и встроенным ИИ-шефом, который создает уникальные рецепты из продуктов в вашем холодильнике."}),d.jsxs("div",{className:"portfolio-card-tech",children:[d.jsx("span",{children:"React"}),d.jsx("span",{children:"Vite"}),d.jsx("span",{children:"AI Chef"}),d.jsx("span",{children:"Glassmorphism"})]}),d.jsx(Ti,{children:d.jsx("a",{href:"https://hubrecipecook.netlify.app",target:"_blank",rel:"noopener noreferrer",className:"btn-primary",children:d.jsxs("span",{className:"btn-content-inner",children:[d.jsxs("span",{className:"btn-slide-item",children:[d.jsx("span",{children:g.visitWebsite}),d.jsx("svg",{className:"btn-arrow",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:d.jsx("path",{d:"M3 8h10M9 4l4 4-4 4"})})]}),d.jsxs("span",{className:"btn-slide-item btn-slide-item-hover",children:[d.jsx("span",{children:g.visitWebsite}),d.jsx("svg",{className:"btn-arrow",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:d.jsx("path",{d:"M3 8h10M9 4l4 4-4 4"})})]})]})})})]}),d.jsx("div",{className:"portfolio-card-image",children:d.jsx("img",{src:"/project_recipe.jpg",alt:"HubRecipeCook Platform",loading:"lazy"})})]})}),d.jsx("div",{className:"portfolio-card-wrapper reveal reveal-delay-3",children:d.jsxs("div",{className:"portfolio-card",children:[d.jsxs("div",{className:"portfolio-card-content",children:[d.jsx("div",{className:"portfolio-card-tag",children:"SaaS Platform"}),d.jsx("h3",{className:"portfolio-card-title",children:"Aether Analytics Suite"}),d.jsx("p",{className:"portfolio-card-desc",children:m==="en"?"Enterprise performance tracking platform processing millions of API events daily. Features custom 3D data visualization, predictive analytics, and automated alerting.":m==="uz"?"Har kuni millionlab API so'rovlarini qayta ishlaydigan korxona samaradorligini kuzatish platformasi. Shaxsiy 3D ma'lumotlar vizualizatsiyasi, prognozli tahlillar va avtomatlashtirilgan ogohlantirishlarni o'z ichiga oladi.":"Корпоративная платформа аналитики, обрабатывающая миллионы API-событий ежедневно. Включает 3D-визуализацию данных, предиктивную аналитику и автооповещения."}),d.jsxs("div",{className:"portfolio-card-tech",children:[d.jsx("span",{children:"React"}),d.jsx("span",{children:"Next.js"}),d.jsx("span",{children:"Three.js"}),d.jsx("span",{children:"Node.js"})]}),d.jsx(Ti,{children:d.jsx("a",{href:"#contact",className:"btn-primary",onClick:T=>{T.preventDefault(),o(!0)},children:d.jsxs("span",{className:"btn-content-inner",children:[d.jsxs("span",{className:"btn-slide-item",children:[d.jsx("span",{children:g.viewCase}),d.jsx("svg",{className:"btn-arrow",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:d.jsx("path",{d:"M3 8h10M9 4l4 4-4 4"})})]}),d.jsxs("span",{className:"btn-slide-item btn-slide-item-hover",children:[d.jsx("span",{children:g.viewCase}),d.jsx("svg",{className:"btn-arrow",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:d.jsx("path",{d:"M3 8h10M9 4l4 4-4 4"})})]})]})})})]}),d.jsx("div",{className:"portfolio-card-image",children:d.jsx("img",{src:"/project_analytics.jpg",alt:"Aether Analytics Suite",loading:"lazy"})})]})}),d.jsx("div",{className:"portfolio-card-wrapper reveal reveal-delay-4",children:d.jsxs("div",{className:"portfolio-card",children:[d.jsxs("div",{className:"portfolio-card-content",children:[d.jsx("div",{className:"portfolio-card-tag",children:"DevOps / Cloud"}),d.jsx("h3",{className:"portfolio-card-title",children:"Nebula Cloud Console"}),d.jsx("p",{className:"portfolio-card-desc",children:m==="en"?"Fully automated multi-region deployment center. Combines real-time global network mesh maps, cluster load indicators, and secure authorization controls.":m==="uz"?"To'liq avtomatlashtirilgan ko'p mintaqali bulutli serverlar markazi. Haqiqiy vaqtdagi global tarmoq xaritalari, yuklama ko'rsatkichlari va xavfsiz avtorizatsiyani birlashtiradi.":"Полностью автоматизированный центр развертывания в нескольких облачных регионах. Объединяет глобальные сетевые карты в реальном времени, датчики нагрузки кластеров и средства контроля безопасности."}),d.jsxs("div",{className:"portfolio-card-tech",children:[d.jsx("span",{children:"Vite"}),d.jsx("span",{children:"AWS"}),d.jsx("span",{children:"Kubernetes"}),d.jsx("span",{children:"GraphQL"})]}),d.jsx(Ti,{children:d.jsx("a",{href:"#contact",className:"btn-primary",onClick:T=>{T.preventDefault(),o(!0)},children:d.jsxs("span",{className:"btn-content-inner",children:[d.jsxs("span",{className:"btn-slide-item",children:[d.jsx("span",{children:g.viewCase}),d.jsx("svg",{className:"btn-arrow",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:d.jsx("path",{d:"M3 8h10M9 4l4 4-4 4"})})]}),d.jsxs("span",{className:"btn-slide-item btn-slide-item-hover",children:[d.jsx("span",{children:g.viewCase}),d.jsx("svg",{className:"btn-arrow",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:d.jsx("path",{d:"M3 8h10M9 4l4 4-4 4"})})]})]})})})]}),d.jsx("div",{className:"portfolio-card-image",children:d.jsx("img",{src:"/project_cloud.jpg",alt:"Nebula Cloud Console",loading:"lazy"})})]})})]})]})}),d.jsxs("section",{className:"section section-numbers",id:"scale",children:[d.jsx(H1,{}),d.jsx("div",{className:"section-inner",children:d.jsxs("div",{className:"numbers-content",children:[d.jsx("div",{className:"section-label reveal",children:g.byNumbers}),d.jsxs("h2",{className:"section-heading reveal reveal-delay-1",children:[g.scaleSpeaks," ",d.jsx("span",{className:"thin",children:g.itself})]}),d.jsxs("div",{className:"numbers-grid",children:[d.jsxs("div",{className:"number-card reveal reveal-delay-2",children:[d.jsx("div",{className:"number-val",children:d.jsx(bo,{count:150,suffix:"+"})}),d.jsx("div",{className:"number-divider"}),d.jsx("div",{className:"number-label",children:g.numCardProjects})]}),d.jsxs("div",{className:"number-card reveal reveal-delay-3",children:[d.jsx("div",{className:"number-val",children:d.jsx(bo,{count:99,suffix:".9%"})}),d.jsx("div",{className:"number-divider"}),d.jsx("div",{className:"number-label",children:g.numCardUptime})]}),d.jsxs("div",{className:"number-card reveal reveal-delay-4",children:[d.jsx("div",{className:"number-val",children:d.jsx(bo,{count:45,suffix:"+"})}),d.jsx("div",{className:"number-divider"}),d.jsx("div",{className:"number-label",children:g.numCardEngineers})]}),d.jsxs("div",{className:"number-card reveal reveal-delay-5",children:[d.jsx("div",{className:"number-val",children:d.jsx(bo,{count:10,suffix:"x"})}),d.jsx("div",{className:"number-divider"}),d.jsx("div",{className:"number-label",children:g.numCardSpeed})]})]})]})})]}),d.jsx("section",{className:"section section-cta",id:"contact",children:d.jsxs("div",{className:"section-inner",children:[d.jsx("div",{className:"section-label reveal",children:g.getInvolved}),d.jsxs("h2",{className:"cta-heading reveal reveal-delay-1",children:[g.nextBreakthrough," ",d.jsx("span",{className:"thin",children:g.startsYou})]}),d.jsx("p",{className:"cta-sub reveal reveal-delay-2",children:g.ctaDesc}),d.jsxs("div",{className:"cta-actions reveal reveal-delay-3",children:[d.jsx(Ti,{children:d.jsx("button",{className:"btn-primary",onClick:()=>o(!0),children:d.jsxs("span",{className:"btn-content-inner",children:[d.jsxs("span",{className:"btn-slide-item",children:[d.jsx("span",{children:g.startProject}),d.jsx("svg",{className:"btn-arrow",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:d.jsx("path",{d:"M3 8h10M9 4l4 4-4 4"})})]}),d.jsxs("span",{className:"btn-slide-item btn-slide-item-hover",children:[d.jsx("span",{children:g.startProject}),d.jsx("svg",{className:"btn-arrow",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:d.jsx("path",{d:"M3 8h10M9 4l4 4-4 4"})})]})]})})}),d.jsx(Ti,{children:d.jsx("button",{className:"btn-secondary",onClick:()=>o(!0),children:d.jsxs("span",{className:"btn-content-inner",children:[d.jsxs("span",{className:"btn-slide-item",children:[d.jsx("span",{children:m==="en"?"Get in Touch":m==="uz"?"Bog'lanish":"Связаться"}),d.jsx("svg",{className:"btn-arrow",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:d.jsx("path",{d:"M3 8h10M9 4l4 4-4 4"})})]}),d.jsxs("span",{className:"btn-slide-item btn-slide-item-hover",children:[d.jsx("span",{children:m==="en"?"Get in Touch":m==="uz"?"Bog'lanish":"Связаться"}),d.jsx("svg",{className:"btn-arrow",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:d.jsx("path",{d:"M3 8h10M9 4l4 4-4 4"})})]})]})})})]})]})}),d.jsx("footer",{className:"footer",id:"about",children:d.jsxs("div",{className:"section-inner",style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%"},children:[d.jsxs("div",{className:"footer-left",children:[d.jsx("img",{className:"footer-img",src:"/logo.jpg",alt:"QIX Logo"}),d.jsx("span",{className:"footer-brand",style:{marginLeft:"10px"},children:"QIX Technologies"})]}),d.jsxs("div",{className:"footer-right",children:["© 2026 QIX Technologies Inc. ",g.footerCopy]})]})}),d.jsx(G1,{isOpen:t,onClose:()=>e(!1)}),d.jsx(V1,{isOpen:r,onClose:()=>s(!1)}),d.jsx(_y,{isOpen:a,onClose:()=>o(!1)}),d.jsx("div",{ref:y,className:"custom-cursor-dot"}),d.jsx("div",{ref:_,className:"custom-cursor-circle"})]})}Kc.createRoot(document.getElementById("root")).render(d.jsx(rm.StrictMode,{children:d.jsx(W1,{})}));
