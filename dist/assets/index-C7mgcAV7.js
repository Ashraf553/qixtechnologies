var t_=Object.defineProperty;var n_=(t,e,n)=>e in t?t_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Me=(t,e,n)=>n_(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function qp(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Yp={exports:{}},yl={},$p={exports:{}},Xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Aa=Symbol.for("react.element"),i_=Symbol.for("react.portal"),r_=Symbol.for("react.fragment"),s_=Symbol.for("react.strict_mode"),a_=Symbol.for("react.profiler"),o_=Symbol.for("react.provider"),l_=Symbol.for("react.context"),c_=Symbol.for("react.forward_ref"),u_=Symbol.for("react.suspense"),d_=Symbol.for("react.memo"),h_=Symbol.for("react.lazy"),lh=Symbol.iterator;function f_(t){return t===null||typeof t!="object"?null:(t=lh&&t[lh]||t["@@iterator"],typeof t=="function"?t:null)}var Kp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Zp=Object.assign,Qp={};function ws(t,e,n){this.props=t,this.context=e,this.refs=Qp,this.updater=n||Kp}ws.prototype.isReactComponent={};ws.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ws.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Jp(){}Jp.prototype=ws.prototype;function Qu(t,e,n){this.props=t,this.context=e,this.refs=Qp,this.updater=n||Kp}var Ju=Qu.prototype=new Jp;Ju.constructor=Qu;Zp(Ju,ws.prototype);Ju.isPureReactComponent=!0;var ch=Array.isArray,em=Object.prototype.hasOwnProperty,ed={current:null},tm={key:!0,ref:!0,__self:!0,__source:!0};function nm(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)em.call(e,i)&&!tm.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Aa,type:t,key:s,ref:a,props:r,_owner:ed.current}}function p_(t,e){return{$$typeof:Aa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function td(t){return typeof t=="object"&&t!==null&&t.$$typeof===Aa}function m_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var uh=/\/+/g;function Xl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?m_(""+t.key):e.toString(36)}function bo(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Aa:case i_:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+Xl(a,0):i,ch(r)?(n="",t!=null&&(n=t.replace(uh,"$&/")+"/"),bo(r,e,n,"",function(c){return c})):r!=null&&(td(r)&&(r=p_(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(uh,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",ch(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+Xl(s,o);a+=bo(s,e,n,l,r)}else if(l=f_(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+Xl(s,o++),a+=bo(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function ka(t,e,n){if(t==null)return t;var i=[],r=0;return bo(t,i,"","",function(s){return e.call(n,s,r++)}),i}function g_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Kt={current:null},Co={transition:null},v_={ReactCurrentDispatcher:Kt,ReactCurrentBatchConfig:Co,ReactCurrentOwner:ed};function im(){throw Error("act(...) is not supported in production builds of React.")}Xe.Children={map:ka,forEach:function(t,e,n){ka(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ka(t,function(){e++}),e},toArray:function(t){return ka(t,function(e){return e})||[]},only:function(t){if(!td(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Xe.Component=ws;Xe.Fragment=r_;Xe.Profiler=a_;Xe.PureComponent=Qu;Xe.StrictMode=s_;Xe.Suspense=u_;Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=v_;Xe.act=im;Xe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Zp({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=ed.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)em.call(e,l)&&!tm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:Aa,type:t.type,key:r,ref:s,props:i,_owner:a}};Xe.createContext=function(t){return t={$$typeof:l_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:o_,_context:t},t.Consumer=t};Xe.createElement=nm;Xe.createFactory=function(t){var e=nm.bind(null,t);return e.type=t,e};Xe.createRef=function(){return{current:null}};Xe.forwardRef=function(t){return{$$typeof:c_,render:t}};Xe.isValidElement=td;Xe.lazy=function(t){return{$$typeof:h_,_payload:{_status:-1,_result:t},_init:g_}};Xe.memo=function(t,e){return{$$typeof:d_,type:t,compare:e===void 0?null:e}};Xe.startTransition=function(t){var e=Co.transition;Co.transition={};try{t()}finally{Co.transition=e}};Xe.unstable_act=im;Xe.useCallback=function(t,e){return Kt.current.useCallback(t,e)};Xe.useContext=function(t){return Kt.current.useContext(t)};Xe.useDebugValue=function(){};Xe.useDeferredValue=function(t){return Kt.current.useDeferredValue(t)};Xe.useEffect=function(t,e){return Kt.current.useEffect(t,e)};Xe.useId=function(){return Kt.current.useId()};Xe.useImperativeHandle=function(t,e,n){return Kt.current.useImperativeHandle(t,e,n)};Xe.useInsertionEffect=function(t,e){return Kt.current.useInsertionEffect(t,e)};Xe.useLayoutEffect=function(t,e){return Kt.current.useLayoutEffect(t,e)};Xe.useMemo=function(t,e){return Kt.current.useMemo(t,e)};Xe.useReducer=function(t,e,n){return Kt.current.useReducer(t,e,n)};Xe.useRef=function(t){return Kt.current.useRef(t)};Xe.useState=function(t){return Kt.current.useState(t)};Xe.useSyncExternalStore=function(t,e,n){return Kt.current.useSyncExternalStore(t,e,n)};Xe.useTransition=function(){return Kt.current.useTransition()};Xe.version="18.3.1";$p.exports=Xe;var fe=$p.exports;const rm=qp(fe);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var __=fe,x_=Symbol.for("react.element"),y_=Symbol.for("react.fragment"),S_=Object.prototype.hasOwnProperty,E_=__.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,M_={key:!0,ref:!0,__self:!0,__source:!0};function sm(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)S_.call(e,i)&&!M_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:x_,type:t,key:s,ref:a,props:r,_owner:E_.current}}yl.Fragment=y_;yl.jsx=sm;yl.jsxs=sm;Yp.exports=yl;var d=Yp.exports,$c={},am={exports:{}},gn={},om={exports:{}},lm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,z){var N=U.length;U.push(z);e:for(;0<N;){var I=N-1>>>1,K=U[I];if(0<r(K,z))U[I]=z,U[N]=K,N=I;else break e}}function n(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var z=U[0],N=U.pop();if(N!==z){U[0]=N;e:for(var I=0,K=U.length,j=K>>>1;I<j;){var Z=2*(I+1)-1,ae=U[Z],pe=Z+1,ge=U[pe];if(0>r(ae,N))pe<K&&0>r(ge,ae)?(U[I]=ge,U[pe]=N,I=pe):(U[I]=ae,U[Z]=N,I=Z);else if(pe<K&&0>r(ge,N))U[I]=ge,U[pe]=N,I=pe;else break e}}return z}function r(U,z){var N=U.sortIndex-z.sortIndex;return N!==0?N:U.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],f=1,p=null,h=3,v=!1,_=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(U){for(var z=n(c);z!==null;){if(z.callback===null)i(c);else if(z.startTime<=U)i(c),z.sortIndex=z.expirationTime,e(l,z);else break;z=n(c)}}function E(U){if(y=!1,x(U),!_)if(n(l)!==null)_=!0,$(R);else{var z=n(c);z!==null&&B(E,z.startTime-U)}}function R(U,z){_=!1,y&&(y=!1,u(F),F=-1),v=!0;var N=h;try{for(x(z),p=n(l);p!==null&&(!(p.expirationTime>z)||U&&!P());){var I=p.callback;if(typeof I=="function"){p.callback=null,h=p.priorityLevel;var K=I(p.expirationTime<=z);z=t.unstable_now(),typeof K=="function"?p.callback=K:p===n(l)&&i(l),x(z)}else i(l);p=n(l)}if(p!==null)var j=!0;else{var Z=n(c);Z!==null&&B(E,Z.startTime-z),j=!1}return j}finally{p=null,h=N,v=!1}}var C=!1,w=null,F=-1,S=5,T=-1;function P(){return!(t.unstable_now()-T<S)}function Y(){if(w!==null){var U=t.unstable_now();T=U;var z=!0;try{z=w(!0,U)}finally{z?ie():(C=!1,w=null)}}else C=!1}var ie;if(typeof g=="function")ie=function(){g(Y)};else if(typeof MessageChannel<"u"){var D=new MessageChannel,H=D.port2;D.port1.onmessage=Y,ie=function(){H.postMessage(null)}}else ie=function(){m(Y,0)};function $(U){w=U,C||(C=!0,ie())}function B(U,z){F=m(function(){U(t.unstable_now())},z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){_||v||(_=!0,$(R))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(U){switch(h){case 1:case 2:case 3:var z=3;break;default:z=h}var N=h;h=z;try{return U()}finally{h=N}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,z){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var N=h;h=U;try{return z()}finally{h=N}},t.unstable_scheduleCallback=function(U,z,N){var I=t.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?I+N:I):N=I,U){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=N+K,U={id:f++,callback:z,priorityLevel:U,startTime:N,expirationTime:K,sortIndex:-1},N>I?(U.sortIndex=N,e(c,U),n(l)===null&&U===n(c)&&(y?(u(F),F=-1):y=!0,B(E,N-I))):(U.sortIndex=K,e(l,U),_||v||(_=!0,$(R))),U},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(U){var z=h;return function(){var N=h;h=z;try{return U.apply(this,arguments)}finally{h=N}}}})(lm);om.exports=lm;var T_=om.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w_=fe,mn=T_;function ne(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var cm=new Set,aa={};function wr(t,e){fs(t,e),fs(t+"Capture",e)}function fs(t,e){for(aa[t]=e,t=0;t<e.length;t++)cm.add(e[t])}var di=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Kc=Object.prototype.hasOwnProperty,A_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,dh={},hh={};function b_(t){return Kc.call(hh,t)?!0:Kc.call(dh,t)?!1:A_.test(t)?hh[t]=!0:(dh[t]=!0,!1)}function C_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function R_(t,e,n,i){if(e===null||typeof e>"u"||C_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Zt(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var It={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){It[t]=new Zt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];It[e]=new Zt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){It[t]=new Zt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){It[t]=new Zt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){It[t]=new Zt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){It[t]=new Zt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){It[t]=new Zt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){It[t]=new Zt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){It[t]=new Zt(t,5,!1,t.toLowerCase(),null,!1,!1)});var nd=/[\-:]([a-z])/g;function id(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(nd,id);It[e]=new Zt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(nd,id);It[e]=new Zt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(nd,id);It[e]=new Zt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){It[t]=new Zt(t,1,!1,t.toLowerCase(),null,!1,!1)});It.xlinkHref=new Zt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){It[t]=new Zt(t,1,!1,t.toLowerCase(),null,!0,!0)});function rd(t,e,n,i){var r=It.hasOwnProperty(e)?It[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(R_(e,n,r,i)&&(n=null),i||r===null?b_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var gi=w_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Oa=Symbol.for("react.element"),Wr=Symbol.for("react.portal"),Xr=Symbol.for("react.fragment"),sd=Symbol.for("react.strict_mode"),Zc=Symbol.for("react.profiler"),um=Symbol.for("react.provider"),dm=Symbol.for("react.context"),ad=Symbol.for("react.forward_ref"),Qc=Symbol.for("react.suspense"),Jc=Symbol.for("react.suspense_list"),od=Symbol.for("react.memo"),wi=Symbol.for("react.lazy"),hm=Symbol.for("react.offscreen"),fh=Symbol.iterator;function Ls(t){return t===null||typeof t!="object"?null:(t=fh&&t[fh]||t["@@iterator"],typeof t=="function"?t:null)}var ht=Object.assign,ql;function Vs(t){if(ql===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ql=e&&e[1]||""}return`
`+ql+t}var Yl=!1;function $l(t,e){if(!t||Yl)return"";Yl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{Yl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Vs(t):""}function N_(t){switch(t.tag){case 5:return Vs(t.type);case 16:return Vs("Lazy");case 13:return Vs("Suspense");case 19:return Vs("SuspenseList");case 0:case 2:case 15:return t=$l(t.type,!1),t;case 11:return t=$l(t.type.render,!1),t;case 1:return t=$l(t.type,!0),t;default:return""}}function eu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Xr:return"Fragment";case Wr:return"Portal";case Zc:return"Profiler";case sd:return"StrictMode";case Qc:return"Suspense";case Jc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case dm:return(t.displayName||"Context")+".Consumer";case um:return(t._context.displayName||"Context")+".Provider";case ad:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case od:return e=t.displayName||null,e!==null?e:eu(t.type)||"Memo";case wi:e=t._payload,t=t._init;try{return eu(t(e))}catch{}}return null}function P_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return eu(e);case 8:return e===sd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Wi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function fm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function L_(t){var e=fm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function za(t){t._valueTracker||(t._valueTracker=L_(t))}function pm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=fm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Bo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function tu(t,e){var n=e.checked;return ht({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function ph(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Wi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function mm(t,e){e=e.checked,e!=null&&rd(t,"checked",e,!1)}function nu(t,e){mm(t,e);var n=Wi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?iu(t,e.type,n):e.hasOwnProperty("defaultValue")&&iu(t,e.type,Wi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function mh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function iu(t,e,n){(e!=="number"||Bo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ws=Array.isArray;function ss(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Wi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function ru(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ne(91));return ht({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function gh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ne(92));if(Ws(n)){if(1<n.length)throw Error(ne(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Wi(n)}}function gm(t,e){var n=Wi(e.value),i=Wi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function vh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function vm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function su(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?vm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ba,_m=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ba=Ba||document.createElement("div"),Ba.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ba.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function oa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ys={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},D_=["Webkit","ms","Moz","O"];Object.keys(Ys).forEach(function(t){D_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ys[e]=Ys[t]})});function xm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ys.hasOwnProperty(t)&&Ys[t]?(""+e).trim():e+"px"}function ym(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=xm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var I_=ht({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function au(t,e){if(e){if(I_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ne(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ne(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ne(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ne(62))}}function ou(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lu=null;function ld(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var cu=null,as=null,os=null;function _h(t){if(t=Ra(t)){if(typeof cu!="function")throw Error(ne(280));var e=t.stateNode;e&&(e=wl(e),cu(t.stateNode,t.type,e))}}function Sm(t){as?os?os.push(t):os=[t]:as=t}function Em(){if(as){var t=as,e=os;if(os=as=null,_h(t),e)for(t=0;t<e.length;t++)_h(e[t])}}function Mm(t,e){return t(e)}function Tm(){}var Kl=!1;function wm(t,e,n){if(Kl)return t(e,n);Kl=!0;try{return Mm(t,e,n)}finally{Kl=!1,(as!==null||os!==null)&&(Tm(),Em())}}function la(t,e){var n=t.stateNode;if(n===null)return null;var i=wl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ne(231,e,typeof n));return n}var uu=!1;if(di)try{var Ds={};Object.defineProperty(Ds,"passive",{get:function(){uu=!0}}),window.addEventListener("test",Ds,Ds),window.removeEventListener("test",Ds,Ds)}catch{uu=!1}function U_(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var $s=!1,Ho=null,jo=!1,du=null,F_={onError:function(t){$s=!0,Ho=t}};function k_(t,e,n,i,r,s,a,o,l){$s=!1,Ho=null,U_.apply(F_,arguments)}function O_(t,e,n,i,r,s,a,o,l){if(k_.apply(this,arguments),$s){if($s){var c=Ho;$s=!1,Ho=null}else throw Error(ne(198));jo||(jo=!0,du=c)}}function Ar(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Am(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function xh(t){if(Ar(t)!==t)throw Error(ne(188))}function z_(t){var e=t.alternate;if(!e){if(e=Ar(t),e===null)throw Error(ne(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return xh(r),t;if(s===i)return xh(r),e;s=s.sibling}throw Error(ne(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(ne(189))}}if(n.alternate!==i)throw Error(ne(190))}if(n.tag!==3)throw Error(ne(188));return n.stateNode.current===n?t:e}function bm(t){return t=z_(t),t!==null?Cm(t):null}function Cm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Cm(t);if(e!==null)return e;t=t.sibling}return null}var Rm=mn.unstable_scheduleCallback,yh=mn.unstable_cancelCallback,B_=mn.unstable_shouldYield,H_=mn.unstable_requestPaint,vt=mn.unstable_now,j_=mn.unstable_getCurrentPriorityLevel,cd=mn.unstable_ImmediatePriority,Nm=mn.unstable_UserBlockingPriority,Go=mn.unstable_NormalPriority,G_=mn.unstable_LowPriority,Pm=mn.unstable_IdlePriority,Sl=null,qn=null;function V_(t){if(qn&&typeof qn.onCommitFiberRoot=="function")try{qn.onCommitFiberRoot(Sl,t,void 0,(t.current.flags&128)===128)}catch{}}var On=Math.clz32?Math.clz32:q_,W_=Math.log,X_=Math.LN2;function q_(t){return t>>>=0,t===0?32:31-(W_(t)/X_|0)|0}var Ha=64,ja=4194304;function Xs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Vo(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=Xs(o):(s&=a,s!==0&&(i=Xs(s)))}else a=n&~r,a!==0?i=Xs(a):s!==0&&(i=Xs(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-On(e),r=1<<n,i|=t[n],e&=~r;return i}function Y_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-On(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=Y_(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function hu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Lm(){var t=Ha;return Ha<<=1,!(Ha&4194240)&&(Ha=64),t}function Zl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ba(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-On(e),t[e]=n}function K_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-On(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function ud(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-On(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Ze=0;function Dm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Im,dd,Um,Fm,km,fu=!1,Ga=[],Ii=null,Ui=null,Fi=null,ca=new Map,ua=new Map,bi=[],Z_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sh(t,e){switch(t){case"focusin":case"focusout":Ii=null;break;case"dragenter":case"dragleave":Ui=null;break;case"mouseover":case"mouseout":Fi=null;break;case"pointerover":case"pointerout":ca.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ua.delete(e.pointerId)}}function Is(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ra(e),e!==null&&dd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Q_(t,e,n,i,r){switch(e){case"focusin":return Ii=Is(Ii,t,e,n,i,r),!0;case"dragenter":return Ui=Is(Ui,t,e,n,i,r),!0;case"mouseover":return Fi=Is(Fi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ca.set(s,Is(ca.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ua.set(s,Is(ua.get(s)||null,t,e,n,i,r)),!0}return!1}function Om(t){var e=cr(t.target);if(e!==null){var n=Ar(e);if(n!==null){if(e=n.tag,e===13){if(e=Am(n),e!==null){t.blockedOn=e,km(t.priority,function(){Um(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ro(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=pu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);lu=i,n.target.dispatchEvent(i),lu=null}else return e=Ra(n),e!==null&&dd(e),t.blockedOn=n,!1;e.shift()}return!0}function Eh(t,e,n){Ro(t)&&n.delete(e)}function J_(){fu=!1,Ii!==null&&Ro(Ii)&&(Ii=null),Ui!==null&&Ro(Ui)&&(Ui=null),Fi!==null&&Ro(Fi)&&(Fi=null),ca.forEach(Eh),ua.forEach(Eh)}function Us(t,e){t.blockedOn===e&&(t.blockedOn=null,fu||(fu=!0,mn.unstable_scheduleCallback(mn.unstable_NormalPriority,J_)))}function da(t){function e(r){return Us(r,t)}if(0<Ga.length){Us(Ga[0],t);for(var n=1;n<Ga.length;n++){var i=Ga[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ii!==null&&Us(Ii,t),Ui!==null&&Us(Ui,t),Fi!==null&&Us(Fi,t),ca.forEach(e),ua.forEach(e),n=0;n<bi.length;n++)i=bi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<bi.length&&(n=bi[0],n.blockedOn===null);)Om(n),n.blockedOn===null&&bi.shift()}var ls=gi.ReactCurrentBatchConfig,Wo=!0;function e0(t,e,n,i){var r=Ze,s=ls.transition;ls.transition=null;try{Ze=1,hd(t,e,n,i)}finally{Ze=r,ls.transition=s}}function t0(t,e,n,i){var r=Ze,s=ls.transition;ls.transition=null;try{Ze=4,hd(t,e,n,i)}finally{Ze=r,ls.transition=s}}function hd(t,e,n,i){if(Wo){var r=pu(t,e,n,i);if(r===null)oc(t,e,i,Xo,n),Sh(t,i);else if(Q_(r,t,e,n,i))i.stopPropagation();else if(Sh(t,i),e&4&&-1<Z_.indexOf(t)){for(;r!==null;){var s=Ra(r);if(s!==null&&Im(s),s=pu(t,e,n,i),s===null&&oc(t,e,i,Xo,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else oc(t,e,i,null,n)}}var Xo=null;function pu(t,e,n,i){if(Xo=null,t=ld(i),t=cr(t),t!==null)if(e=Ar(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Am(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Xo=t,null}function zm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(j_()){case cd:return 1;case Nm:return 4;case Go:case G_:return 16;case Pm:return 536870912;default:return 16}default:return 16}}var Ri=null,fd=null,No=null;function Bm(){if(No)return No;var t,e=fd,n=e.length,i,r="value"in Ri?Ri.value:Ri.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return No=r.slice(t,1<i?1-i:void 0)}function Po(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Va(){return!0}function Mh(){return!1}function vn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Va:Mh,this.isPropagationStopped=Mh,this}return ht(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Va)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Va)},persist:function(){},isPersistent:Va}),e}var As={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pd=vn(As),Ca=ht({},As,{view:0,detail:0}),n0=vn(Ca),Ql,Jl,Fs,El=ht({},Ca,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:md,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Fs&&(Fs&&t.type==="mousemove"?(Ql=t.screenX-Fs.screenX,Jl=t.screenY-Fs.screenY):Jl=Ql=0,Fs=t),Ql)},movementY:function(t){return"movementY"in t?t.movementY:Jl}}),Th=vn(El),i0=ht({},El,{dataTransfer:0}),r0=vn(i0),s0=ht({},Ca,{relatedTarget:0}),ec=vn(s0),a0=ht({},As,{animationName:0,elapsedTime:0,pseudoElement:0}),o0=vn(a0),l0=ht({},As,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),c0=vn(l0),u0=ht({},As,{data:0}),wh=vn(u0),d0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},h0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},f0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function p0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=f0[t])?!!e[t]:!1}function md(){return p0}var m0=ht({},Ca,{key:function(t){if(t.key){var e=d0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Po(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?h0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:md,charCode:function(t){return t.type==="keypress"?Po(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Po(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),g0=vn(m0),v0=ht({},El,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ah=vn(v0),_0=ht({},Ca,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:md}),x0=vn(_0),y0=ht({},As,{propertyName:0,elapsedTime:0,pseudoElement:0}),S0=vn(y0),E0=ht({},El,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),M0=vn(E0),T0=[9,13,27,32],gd=di&&"CompositionEvent"in window,Ks=null;di&&"documentMode"in document&&(Ks=document.documentMode);var w0=di&&"TextEvent"in window&&!Ks,Hm=di&&(!gd||Ks&&8<Ks&&11>=Ks),bh=" ",Ch=!1;function jm(t,e){switch(t){case"keyup":return T0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var qr=!1;function A0(t,e){switch(t){case"compositionend":return Gm(e);case"keypress":return e.which!==32?null:(Ch=!0,bh);case"textInput":return t=e.data,t===bh&&Ch?null:t;default:return null}}function b0(t,e){if(qr)return t==="compositionend"||!gd&&jm(t,e)?(t=Bm(),No=fd=Ri=null,qr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Hm&&e.locale!=="ko"?null:e.data;default:return null}}var C0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!C0[t.type]:e==="textarea"}function Vm(t,e,n,i){Sm(i),e=qo(e,"onChange"),0<e.length&&(n=new pd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Zs=null,ha=null;function R0(t){tg(t,0)}function Ml(t){var e=Kr(t);if(pm(e))return t}function N0(t,e){if(t==="change")return e}var Wm=!1;if(di){var tc;if(di){var nc="oninput"in document;if(!nc){var Nh=document.createElement("div");Nh.setAttribute("oninput","return;"),nc=typeof Nh.oninput=="function"}tc=nc}else tc=!1;Wm=tc&&(!document.documentMode||9<document.documentMode)}function Ph(){Zs&&(Zs.detachEvent("onpropertychange",Xm),ha=Zs=null)}function Xm(t){if(t.propertyName==="value"&&Ml(ha)){var e=[];Vm(e,ha,t,ld(t)),wm(R0,e)}}function P0(t,e,n){t==="focusin"?(Ph(),Zs=e,ha=n,Zs.attachEvent("onpropertychange",Xm)):t==="focusout"&&Ph()}function L0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ml(ha)}function D0(t,e){if(t==="click")return Ml(e)}function I0(t,e){if(t==="input"||t==="change")return Ml(e)}function U0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Hn=typeof Object.is=="function"?Object.is:U0;function fa(t,e){if(Hn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Kc.call(e,r)||!Hn(t[r],e[r]))return!1}return!0}function Lh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Dh(t,e){var n=Lh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Lh(n)}}function qm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?qm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Ym(){for(var t=window,e=Bo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Bo(t.document)}return e}function vd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function F0(t){var e=Ym(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&qm(n.ownerDocument.documentElement,n)){if(i!==null&&vd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Dh(n,s);var a=Dh(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var k0=di&&"documentMode"in document&&11>=document.documentMode,Yr=null,mu=null,Qs=null,gu=!1;function Ih(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;gu||Yr==null||Yr!==Bo(i)||(i=Yr,"selectionStart"in i&&vd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Qs&&fa(Qs,i)||(Qs=i,i=qo(mu,"onSelect"),0<i.length&&(e=new pd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Yr)))}function Wa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var $r={animationend:Wa("Animation","AnimationEnd"),animationiteration:Wa("Animation","AnimationIteration"),animationstart:Wa("Animation","AnimationStart"),transitionend:Wa("Transition","TransitionEnd")},ic={},$m={};di&&($m=document.createElement("div").style,"AnimationEvent"in window||(delete $r.animationend.animation,delete $r.animationiteration.animation,delete $r.animationstart.animation),"TransitionEvent"in window||delete $r.transitionend.transition);function Tl(t){if(ic[t])return ic[t];if(!$r[t])return t;var e=$r[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in $m)return ic[t]=e[n];return t}var Km=Tl("animationend"),Zm=Tl("animationiteration"),Qm=Tl("animationstart"),Jm=Tl("transitionend"),eg=new Map,Uh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yi(t,e){eg.set(t,e),wr(e,[t])}for(var rc=0;rc<Uh.length;rc++){var sc=Uh[rc],O0=sc.toLowerCase(),z0=sc[0].toUpperCase()+sc.slice(1);Yi(O0,"on"+z0)}Yi(Km,"onAnimationEnd");Yi(Zm,"onAnimationIteration");Yi(Qm,"onAnimationStart");Yi("dblclick","onDoubleClick");Yi("focusin","onFocus");Yi("focusout","onBlur");Yi(Jm,"onTransitionEnd");fs("onMouseEnter",["mouseout","mouseover"]);fs("onMouseLeave",["mouseout","mouseover"]);fs("onPointerEnter",["pointerout","pointerover"]);fs("onPointerLeave",["pointerout","pointerover"]);wr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));wr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));wr("onBeforeInput",["compositionend","keypress","textInput","paste"]);wr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));wr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));wr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),B0=new Set("cancel close invalid load scroll toggle".split(" ").concat(qs));function Fh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,O_(i,e,void 0,t),t.currentTarget=null}function tg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;Fh(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;Fh(r,o,c),s=l}}}if(jo)throw t=du,jo=!1,du=null,t}function st(t,e){var n=e[Su];n===void 0&&(n=e[Su]=new Set);var i=t+"__bubble";n.has(i)||(ng(e,t,2,!1),n.add(i))}function ac(t,e,n){var i=0;e&&(i|=4),ng(n,t,i,e)}var Xa="_reactListening"+Math.random().toString(36).slice(2);function pa(t){if(!t[Xa]){t[Xa]=!0,cm.forEach(function(n){n!=="selectionchange"&&(B0.has(n)||ac(n,!1,t),ac(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Xa]||(e[Xa]=!0,ac("selectionchange",!1,e))}}function ng(t,e,n,i){switch(zm(e)){case 1:var r=e0;break;case 4:r=t0;break;default:r=hd}n=r.bind(null,e,n,t),r=void 0,!uu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function oc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=cr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}wm(function(){var c=s,f=ld(n),p=[];e:{var h=eg.get(t);if(h!==void 0){var v=pd,_=t;switch(t){case"keypress":if(Po(n)===0)break e;case"keydown":case"keyup":v=g0;break;case"focusin":_="focus",v=ec;break;case"focusout":_="blur",v=ec;break;case"beforeblur":case"afterblur":v=ec;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Th;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=r0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=x0;break;case Km:case Zm:case Qm:v=o0;break;case Jm:v=S0;break;case"scroll":v=n0;break;case"wheel":v=M0;break;case"copy":case"cut":case"paste":v=c0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Ah}var y=(e&4)!==0,m=!y&&t==="scroll",u=y?h!==null?h+"Capture":null:h;y=[];for(var g=c,x;g!==null;){x=g;var E=x.stateNode;if(x.tag===5&&E!==null&&(x=E,u!==null&&(E=la(g,u),E!=null&&y.push(ma(g,E,x)))),m)break;g=g.return}0<y.length&&(h=new v(h,_,null,n,f),p.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",h&&n!==lu&&(_=n.relatedTarget||n.fromElement)&&(cr(_)||_[hi]))break e;if((v||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,v?(_=n.relatedTarget||n.toElement,v=c,_=_?cr(_):null,_!==null&&(m=Ar(_),_!==m||_.tag!==5&&_.tag!==6)&&(_=null)):(v=null,_=c),v!==_)){if(y=Th,E="onMouseLeave",u="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(y=Ah,E="onPointerLeave",u="onPointerEnter",g="pointer"),m=v==null?h:Kr(v),x=_==null?h:Kr(_),h=new y(E,g+"leave",v,n,f),h.target=m,h.relatedTarget=x,E=null,cr(f)===c&&(y=new y(u,g+"enter",_,n,f),y.target=x,y.relatedTarget=m,E=y),m=E,v&&_)t:{for(y=v,u=_,g=0,x=y;x;x=br(x))g++;for(x=0,E=u;E;E=br(E))x++;for(;0<g-x;)y=br(y),g--;for(;0<x-g;)u=br(u),x--;for(;g--;){if(y===u||u!==null&&y===u.alternate)break t;y=br(y),u=br(u)}y=null}else y=null;v!==null&&kh(p,h,v,y,!1),_!==null&&m!==null&&kh(p,m,_,y,!0)}}e:{if(h=c?Kr(c):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var R=N0;else if(Rh(h))if(Wm)R=I0;else{R=L0;var C=P0}else(v=h.nodeName)&&v.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(R=D0);if(R&&(R=R(t,c))){Vm(p,R,n,f);break e}C&&C(t,h,c),t==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&iu(h,"number",h.value)}switch(C=c?Kr(c):window,t){case"focusin":(Rh(C)||C.contentEditable==="true")&&(Yr=C,mu=c,Qs=null);break;case"focusout":Qs=mu=Yr=null;break;case"mousedown":gu=!0;break;case"contextmenu":case"mouseup":case"dragend":gu=!1,Ih(p,n,f);break;case"selectionchange":if(k0)break;case"keydown":case"keyup":Ih(p,n,f)}var w;if(gd)e:{switch(t){case"compositionstart":var F="onCompositionStart";break e;case"compositionend":F="onCompositionEnd";break e;case"compositionupdate":F="onCompositionUpdate";break e}F=void 0}else qr?jm(t,n)&&(F="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(F="onCompositionStart");F&&(Hm&&n.locale!=="ko"&&(qr||F!=="onCompositionStart"?F==="onCompositionEnd"&&qr&&(w=Bm()):(Ri=f,fd="value"in Ri?Ri.value:Ri.textContent,qr=!0)),C=qo(c,F),0<C.length&&(F=new wh(F,t,null,n,f),p.push({event:F,listeners:C}),w?F.data=w:(w=Gm(n),w!==null&&(F.data=w)))),(w=w0?A0(t,n):b0(t,n))&&(c=qo(c,"onBeforeInput"),0<c.length&&(f=new wh("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:c}),f.data=w))}tg(p,e)})}function ma(t,e,n){return{instance:t,listener:e,currentTarget:n}}function qo(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=la(t,n),s!=null&&i.unshift(ma(t,s,r)),s=la(t,e),s!=null&&i.push(ma(t,s,r))),t=t.return}return i}function br(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function kh(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=la(n,s),l!=null&&a.unshift(ma(n,l,o))):r||(l=la(n,s),l!=null&&a.push(ma(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var H0=/\r\n?/g,j0=/\u0000|\uFFFD/g;function Oh(t){return(typeof t=="string"?t:""+t).replace(H0,`
`).replace(j0,"")}function qa(t,e,n){if(e=Oh(e),Oh(t)!==e&&n)throw Error(ne(425))}function Yo(){}var vu=null,_u=null;function xu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var yu=typeof setTimeout=="function"?setTimeout:void 0,G0=typeof clearTimeout=="function"?clearTimeout:void 0,zh=typeof Promise=="function"?Promise:void 0,V0=typeof queueMicrotask=="function"?queueMicrotask:typeof zh<"u"?function(t){return zh.resolve(null).then(t).catch(W0)}:yu;function W0(t){setTimeout(function(){throw t})}function lc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),da(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);da(e)}function ki(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Bh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var bs=Math.random().toString(36).slice(2),Xn="__reactFiber$"+bs,ga="__reactProps$"+bs,hi="__reactContainer$"+bs,Su="__reactEvents$"+bs,X0="__reactListeners$"+bs,q0="__reactHandles$"+bs;function cr(t){var e=t[Xn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[hi]||n[Xn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Bh(t);t!==null;){if(n=t[Xn])return n;t=Bh(t)}return e}t=n,n=t.parentNode}return null}function Ra(t){return t=t[Xn]||t[hi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Kr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ne(33))}function wl(t){return t[ga]||null}var Eu=[],Zr=-1;function $i(t){return{current:t}}function ot(t){0>Zr||(t.current=Eu[Zr],Eu[Zr]=null,Zr--)}function rt(t,e){Zr++,Eu[Zr]=t.current,t.current=e}var Xi={},Ht=$i(Xi),en=$i(!1),_r=Xi;function ps(t,e){var n=t.type.contextTypes;if(!n)return Xi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function tn(t){return t=t.childContextTypes,t!=null}function $o(){ot(en),ot(Ht)}function Hh(t,e,n){if(Ht.current!==Xi)throw Error(ne(168));rt(Ht,e),rt(en,n)}function ig(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ne(108,P_(t)||"Unknown",r));return ht({},n,i)}function Ko(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Xi,_r=Ht.current,rt(Ht,t),rt(en,en.current),!0}function jh(t,e,n){var i=t.stateNode;if(!i)throw Error(ne(169));n?(t=ig(t,e,_r),i.__reactInternalMemoizedMergedChildContext=t,ot(en),ot(Ht),rt(Ht,t)):ot(en),rt(en,n)}var ri=null,Al=!1,cc=!1;function rg(t){ri===null?ri=[t]:ri.push(t)}function Y0(t){Al=!0,rg(t)}function Ki(){if(!cc&&ri!==null){cc=!0;var t=0,e=Ze;try{var n=ri;for(Ze=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ri=null,Al=!1}catch(r){throw ri!==null&&(ri=ri.slice(t+1)),Rm(cd,Ki),r}finally{Ze=e,cc=!1}}return null}var Qr=[],Jr=0,Zo=null,Qo=0,yn=[],Sn=0,xr=null,ai=1,oi="";function ir(t,e){Qr[Jr++]=Qo,Qr[Jr++]=Zo,Zo=t,Qo=e}function sg(t,e,n){yn[Sn++]=ai,yn[Sn++]=oi,yn[Sn++]=xr,xr=t;var i=ai;t=oi;var r=32-On(i)-1;i&=~(1<<r),n+=1;var s=32-On(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,ai=1<<32-On(e)+r|n<<r|i,oi=s+t}else ai=1<<s|n<<r|i,oi=t}function _d(t){t.return!==null&&(ir(t,1),sg(t,1,0))}function xd(t){for(;t===Zo;)Zo=Qr[--Jr],Qr[Jr]=null,Qo=Qr[--Jr],Qr[Jr]=null;for(;t===xr;)xr=yn[--Sn],yn[Sn]=null,oi=yn[--Sn],yn[Sn]=null,ai=yn[--Sn],yn[Sn]=null}var fn=null,hn=null,lt=!1,In=null;function ag(t,e){var n=Tn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Gh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,fn=t,hn=ki(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,fn=t,hn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=xr!==null?{id:ai,overflow:oi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Tn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,fn=t,hn=null,!0):!1;default:return!1}}function Mu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Tu(t){if(lt){var e=hn;if(e){var n=e;if(!Gh(t,e)){if(Mu(t))throw Error(ne(418));e=ki(n.nextSibling);var i=fn;e&&Gh(t,e)?ag(i,n):(t.flags=t.flags&-4097|2,lt=!1,fn=t)}}else{if(Mu(t))throw Error(ne(418));t.flags=t.flags&-4097|2,lt=!1,fn=t}}}function Vh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;fn=t}function Ya(t){if(t!==fn)return!1;if(!lt)return Vh(t),lt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!xu(t.type,t.memoizedProps)),e&&(e=hn)){if(Mu(t))throw og(),Error(ne(418));for(;e;)ag(t,e),e=ki(e.nextSibling)}if(Vh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ne(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){hn=ki(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}hn=null}}else hn=fn?ki(t.stateNode.nextSibling):null;return!0}function og(){for(var t=hn;t;)t=ki(t.nextSibling)}function ms(){hn=fn=null,lt=!1}function yd(t){In===null?In=[t]:In.push(t)}var $0=gi.ReactCurrentBatchConfig;function ks(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ne(309));var i=n.stateNode}if(!i)throw Error(ne(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ne(284));if(!n._owner)throw Error(ne(290,t))}return t}function $a(t,e){throw t=Object.prototype.toString.call(e),Error(ne(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Wh(t){var e=t._init;return e(t._payload)}function lg(t){function e(u,g){if(t){var x=u.deletions;x===null?(u.deletions=[g],u.flags|=16):x.push(g)}}function n(u,g){if(!t)return null;for(;g!==null;)e(u,g),g=g.sibling;return null}function i(u,g){for(u=new Map;g!==null;)g.key!==null?u.set(g.key,g):u.set(g.index,g),g=g.sibling;return u}function r(u,g){return u=Hi(u,g),u.index=0,u.sibling=null,u}function s(u,g,x){return u.index=x,t?(x=u.alternate,x!==null?(x=x.index,x<g?(u.flags|=2,g):x):(u.flags|=2,g)):(u.flags|=1048576,g)}function a(u){return t&&u.alternate===null&&(u.flags|=2),u}function o(u,g,x,E){return g===null||g.tag!==6?(g=gc(x,u.mode,E),g.return=u,g):(g=r(g,x),g.return=u,g)}function l(u,g,x,E){var R=x.type;return R===Xr?f(u,g,x.props.children,E,x.key):g!==null&&(g.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===wi&&Wh(R)===g.type)?(E=r(g,x.props),E.ref=ks(u,g,x),E.return=u,E):(E=Oo(x.type,x.key,x.props,null,u.mode,E),E.ref=ks(u,g,x),E.return=u,E)}function c(u,g,x,E){return g===null||g.tag!==4||g.stateNode.containerInfo!==x.containerInfo||g.stateNode.implementation!==x.implementation?(g=vc(x,u.mode,E),g.return=u,g):(g=r(g,x.children||[]),g.return=u,g)}function f(u,g,x,E,R){return g===null||g.tag!==7?(g=fr(x,u.mode,E,R),g.return=u,g):(g=r(g,x),g.return=u,g)}function p(u,g,x){if(typeof g=="string"&&g!==""||typeof g=="number")return g=gc(""+g,u.mode,x),g.return=u,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Oa:return x=Oo(g.type,g.key,g.props,null,u.mode,x),x.ref=ks(u,null,g),x.return=u,x;case Wr:return g=vc(g,u.mode,x),g.return=u,g;case wi:var E=g._init;return p(u,E(g._payload),x)}if(Ws(g)||Ls(g))return g=fr(g,u.mode,x,null),g.return=u,g;$a(u,g)}return null}function h(u,g,x,E){var R=g!==null?g.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return R!==null?null:o(u,g,""+x,E);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Oa:return x.key===R?l(u,g,x,E):null;case Wr:return x.key===R?c(u,g,x,E):null;case wi:return R=x._init,h(u,g,R(x._payload),E)}if(Ws(x)||Ls(x))return R!==null?null:f(u,g,x,E,null);$a(u,x)}return null}function v(u,g,x,E,R){if(typeof E=="string"&&E!==""||typeof E=="number")return u=u.get(x)||null,o(g,u,""+E,R);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Oa:return u=u.get(E.key===null?x:E.key)||null,l(g,u,E,R);case Wr:return u=u.get(E.key===null?x:E.key)||null,c(g,u,E,R);case wi:var C=E._init;return v(u,g,x,C(E._payload),R)}if(Ws(E)||Ls(E))return u=u.get(x)||null,f(g,u,E,R,null);$a(g,E)}return null}function _(u,g,x,E){for(var R=null,C=null,w=g,F=g=0,S=null;w!==null&&F<x.length;F++){w.index>F?(S=w,w=null):S=w.sibling;var T=h(u,w,x[F],E);if(T===null){w===null&&(w=S);break}t&&w&&T.alternate===null&&e(u,w),g=s(T,g,F),C===null?R=T:C.sibling=T,C=T,w=S}if(F===x.length)return n(u,w),lt&&ir(u,F),R;if(w===null){for(;F<x.length;F++)w=p(u,x[F],E),w!==null&&(g=s(w,g,F),C===null?R=w:C.sibling=w,C=w);return lt&&ir(u,F),R}for(w=i(u,w);F<x.length;F++)S=v(w,u,F,x[F],E),S!==null&&(t&&S.alternate!==null&&w.delete(S.key===null?F:S.key),g=s(S,g,F),C===null?R=S:C.sibling=S,C=S);return t&&w.forEach(function(P){return e(u,P)}),lt&&ir(u,F),R}function y(u,g,x,E){var R=Ls(x);if(typeof R!="function")throw Error(ne(150));if(x=R.call(x),x==null)throw Error(ne(151));for(var C=R=null,w=g,F=g=0,S=null,T=x.next();w!==null&&!T.done;F++,T=x.next()){w.index>F?(S=w,w=null):S=w.sibling;var P=h(u,w,T.value,E);if(P===null){w===null&&(w=S);break}t&&w&&P.alternate===null&&e(u,w),g=s(P,g,F),C===null?R=P:C.sibling=P,C=P,w=S}if(T.done)return n(u,w),lt&&ir(u,F),R;if(w===null){for(;!T.done;F++,T=x.next())T=p(u,T.value,E),T!==null&&(g=s(T,g,F),C===null?R=T:C.sibling=T,C=T);return lt&&ir(u,F),R}for(w=i(u,w);!T.done;F++,T=x.next())T=v(w,u,F,T.value,E),T!==null&&(t&&T.alternate!==null&&w.delete(T.key===null?F:T.key),g=s(T,g,F),C===null?R=T:C.sibling=T,C=T);return t&&w.forEach(function(Y){return e(u,Y)}),lt&&ir(u,F),R}function m(u,g,x,E){if(typeof x=="object"&&x!==null&&x.type===Xr&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Oa:e:{for(var R=x.key,C=g;C!==null;){if(C.key===R){if(R=x.type,R===Xr){if(C.tag===7){n(u,C.sibling),g=r(C,x.props.children),g.return=u,u=g;break e}}else if(C.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===wi&&Wh(R)===C.type){n(u,C.sibling),g=r(C,x.props),g.ref=ks(u,C,x),g.return=u,u=g;break e}n(u,C);break}else e(u,C);C=C.sibling}x.type===Xr?(g=fr(x.props.children,u.mode,E,x.key),g.return=u,u=g):(E=Oo(x.type,x.key,x.props,null,u.mode,E),E.ref=ks(u,g,x),E.return=u,u=E)}return a(u);case Wr:e:{for(C=x.key;g!==null;){if(g.key===C)if(g.tag===4&&g.stateNode.containerInfo===x.containerInfo&&g.stateNode.implementation===x.implementation){n(u,g.sibling),g=r(g,x.children||[]),g.return=u,u=g;break e}else{n(u,g);break}else e(u,g);g=g.sibling}g=vc(x,u.mode,E),g.return=u,u=g}return a(u);case wi:return C=x._init,m(u,g,C(x._payload),E)}if(Ws(x))return _(u,g,x,E);if(Ls(x))return y(u,g,x,E);$a(u,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,g!==null&&g.tag===6?(n(u,g.sibling),g=r(g,x),g.return=u,u=g):(n(u,g),g=gc(x,u.mode,E),g.return=u,u=g),a(u)):n(u,g)}return m}var gs=lg(!0),cg=lg(!1),Jo=$i(null),el=null,es=null,Sd=null;function Ed(){Sd=es=el=null}function Md(t){var e=Jo.current;ot(Jo),t._currentValue=e}function wu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function cs(t,e){el=t,Sd=es=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Jt=!0),t.firstContext=null)}function An(t){var e=t._currentValue;if(Sd!==t)if(t={context:t,memoizedValue:e,next:null},es===null){if(el===null)throw Error(ne(308));es=t,el.dependencies={lanes:0,firstContext:t}}else es=es.next=t;return e}var ur=null;function Td(t){ur===null?ur=[t]:ur.push(t)}function ug(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Td(e)):(n.next=r.next,r.next=n),e.interleaved=n,fi(t,i)}function fi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ai=!1;function wd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function dg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ci(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Oi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,$e&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,fi(t,n)}return r=i.interleaved,r===null?(e.next=e,Td(i)):(e.next=r.next,r.next=e),i.interleaved=e,fi(t,n)}function Lo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,ud(t,n)}}function Xh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function tl(t,e,n,i){var r=t.updateQueue;Ai=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var f=t.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==a&&(o===null?f.firstBaseUpdate=c:o.next=c,f.lastBaseUpdate=l))}if(s!==null){var p=r.baseState;a=0,f=c=l=null,o=s;do{var h=o.lane,v=o.eventTime;if((i&h)===h){f!==null&&(f=f.next={eventTime:v,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var _=t,y=o;switch(h=e,v=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){p=_.call(v,p,h);break e}p=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,h=typeof _=="function"?_.call(v,p,h):_,h==null)break e;p=ht({},p,h);break e;case 2:Ai=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[o]:h.push(o))}else v={eventTime:v,lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(c=f=v,l=p):f=f.next=v,a|=h;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;h=o,o=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(f===null&&(l=p),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Sr|=a,t.lanes=a,t.memoizedState=p}}function qh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ne(191,r));r.call(i)}}}var Na={},Yn=$i(Na),va=$i(Na),_a=$i(Na);function dr(t){if(t===Na)throw Error(ne(174));return t}function Ad(t,e){switch(rt(_a,e),rt(va,t),rt(Yn,Na),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:su(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=su(e,t)}ot(Yn),rt(Yn,e)}function vs(){ot(Yn),ot(va),ot(_a)}function hg(t){dr(_a.current);var e=dr(Yn.current),n=su(e,t.type);e!==n&&(rt(va,t),rt(Yn,n))}function bd(t){va.current===t&&(ot(Yn),ot(va))}var ut=$i(0);function nl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var uc=[];function Cd(){for(var t=0;t<uc.length;t++)uc[t]._workInProgressVersionPrimary=null;uc.length=0}var Do=gi.ReactCurrentDispatcher,dc=gi.ReactCurrentBatchConfig,yr=0,dt=null,yt=null,bt=null,il=!1,Js=!1,xa=0,K0=0;function Ft(){throw Error(ne(321))}function Rd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Hn(t[n],e[n]))return!1;return!0}function Nd(t,e,n,i,r,s){if(yr=s,dt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Do.current=t===null||t.memoizedState===null?ex:tx,t=n(i,r),Js){s=0;do{if(Js=!1,xa=0,25<=s)throw Error(ne(301));s+=1,bt=yt=null,e.updateQueue=null,Do.current=nx,t=n(i,r)}while(Js)}if(Do.current=rl,e=yt!==null&&yt.next!==null,yr=0,bt=yt=dt=null,il=!1,e)throw Error(ne(300));return t}function Pd(){var t=xa!==0;return xa=0,t}function Vn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return bt===null?dt.memoizedState=bt=t:bt=bt.next=t,bt}function bn(){if(yt===null){var t=dt.alternate;t=t!==null?t.memoizedState:null}else t=yt.next;var e=bt===null?dt.memoizedState:bt.next;if(e!==null)bt=e,yt=t;else{if(t===null)throw Error(ne(310));yt=t,t={memoizedState:yt.memoizedState,baseState:yt.baseState,baseQueue:yt.baseQueue,queue:yt.queue,next:null},bt===null?dt.memoizedState=bt=t:bt=bt.next=t}return bt}function ya(t,e){return typeof e=="function"?e(t):e}function hc(t){var e=bn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=yt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var f=c.lane;if((yr&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var p={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=p,a=i):l=l.next=p,dt.lanes|=f,Sr|=f}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,Hn(i,e.memoizedState)||(Jt=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,dt.lanes|=s,Sr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function fc(t){var e=bn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);Hn(s,e.memoizedState)||(Jt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function fg(){}function pg(t,e){var n=dt,i=bn(),r=e(),s=!Hn(i.memoizedState,r);if(s&&(i.memoizedState=r,Jt=!0),i=i.queue,Ld(vg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||bt!==null&&bt.memoizedState.tag&1){if(n.flags|=2048,Sa(9,gg.bind(null,n,i,r,e),void 0,null),Ct===null)throw Error(ne(349));yr&30||mg(n,e,r)}return r}function mg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=dt.updateQueue,e===null?(e={lastEffect:null,stores:null},dt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function gg(t,e,n,i){e.value=n,e.getSnapshot=i,_g(e)&&xg(t)}function vg(t,e,n){return n(function(){_g(e)&&xg(t)})}function _g(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Hn(t,n)}catch{return!0}}function xg(t){var e=fi(t,1);e!==null&&zn(e,t,1,-1)}function Yh(t){var e=Vn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:t},e.queue=t,t=t.dispatch=J0.bind(null,dt,t),[e.memoizedState,t]}function Sa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=dt.updateQueue,e===null?(e={lastEffect:null,stores:null},dt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function yg(){return bn().memoizedState}function Io(t,e,n,i){var r=Vn();dt.flags|=t,r.memoizedState=Sa(1|e,n,void 0,i===void 0?null:i)}function bl(t,e,n,i){var r=bn();i=i===void 0?null:i;var s=void 0;if(yt!==null){var a=yt.memoizedState;if(s=a.destroy,i!==null&&Rd(i,a.deps)){r.memoizedState=Sa(e,n,s,i);return}}dt.flags|=t,r.memoizedState=Sa(1|e,n,s,i)}function $h(t,e){return Io(8390656,8,t,e)}function Ld(t,e){return bl(2048,8,t,e)}function Sg(t,e){return bl(4,2,t,e)}function Eg(t,e){return bl(4,4,t,e)}function Mg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Tg(t,e,n){return n=n!=null?n.concat([t]):null,bl(4,4,Mg.bind(null,e,t),n)}function Dd(){}function wg(t,e){var n=bn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Rd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Ag(t,e){var n=bn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Rd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function bg(t,e,n){return yr&21?(Hn(n,e)||(n=Lm(),dt.lanes|=n,Sr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Jt=!0),t.memoizedState=n)}function Z0(t,e){var n=Ze;Ze=n!==0&&4>n?n:4,t(!0);var i=dc.transition;dc.transition={};try{t(!1),e()}finally{Ze=n,dc.transition=i}}function Cg(){return bn().memoizedState}function Q0(t,e,n){var i=Bi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Rg(t))Ng(e,n);else if(n=ug(t,e,n,i),n!==null){var r=$t();zn(n,t,i,r),Pg(n,e,i)}}function J0(t,e,n){var i=Bi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Rg(t))Ng(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,Hn(o,a)){var l=e.interleaved;l===null?(r.next=r,Td(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=ug(t,e,r,i),n!==null&&(r=$t(),zn(n,t,i,r),Pg(n,e,i))}}function Rg(t){var e=t.alternate;return t===dt||e!==null&&e===dt}function Ng(t,e){Js=il=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Pg(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,ud(t,n)}}var rl={readContext:An,useCallback:Ft,useContext:Ft,useEffect:Ft,useImperativeHandle:Ft,useInsertionEffect:Ft,useLayoutEffect:Ft,useMemo:Ft,useReducer:Ft,useRef:Ft,useState:Ft,useDebugValue:Ft,useDeferredValue:Ft,useTransition:Ft,useMutableSource:Ft,useSyncExternalStore:Ft,useId:Ft,unstable_isNewReconciler:!1},ex={readContext:An,useCallback:function(t,e){return Vn().memoizedState=[t,e===void 0?null:e],t},useContext:An,useEffect:$h,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Io(4194308,4,Mg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Io(4194308,4,t,e)},useInsertionEffect:function(t,e){return Io(4,2,t,e)},useMemo:function(t,e){var n=Vn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Vn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Q0.bind(null,dt,t),[i.memoizedState,t]},useRef:function(t){var e=Vn();return t={current:t},e.memoizedState=t},useState:Yh,useDebugValue:Dd,useDeferredValue:function(t){return Vn().memoizedState=t},useTransition:function(){var t=Yh(!1),e=t[0];return t=Z0.bind(null,t[1]),Vn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=dt,r=Vn();if(lt){if(n===void 0)throw Error(ne(407));n=n()}else{if(n=e(),Ct===null)throw Error(ne(349));yr&30||mg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,$h(vg.bind(null,i,s,t),[t]),i.flags|=2048,Sa(9,gg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Vn(),e=Ct.identifierPrefix;if(lt){var n=oi,i=ai;n=(i&~(1<<32-On(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=xa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=K0++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},tx={readContext:An,useCallback:wg,useContext:An,useEffect:Ld,useImperativeHandle:Tg,useInsertionEffect:Sg,useLayoutEffect:Eg,useMemo:Ag,useReducer:hc,useRef:yg,useState:function(){return hc(ya)},useDebugValue:Dd,useDeferredValue:function(t){var e=bn();return bg(e,yt.memoizedState,t)},useTransition:function(){var t=hc(ya)[0],e=bn().memoizedState;return[t,e]},useMutableSource:fg,useSyncExternalStore:pg,useId:Cg,unstable_isNewReconciler:!1},nx={readContext:An,useCallback:wg,useContext:An,useEffect:Ld,useImperativeHandle:Tg,useInsertionEffect:Sg,useLayoutEffect:Eg,useMemo:Ag,useReducer:fc,useRef:yg,useState:function(){return fc(ya)},useDebugValue:Dd,useDeferredValue:function(t){var e=bn();return yt===null?e.memoizedState=t:bg(e,yt.memoizedState,t)},useTransition:function(){var t=fc(ya)[0],e=bn().memoizedState;return[t,e]},useMutableSource:fg,useSyncExternalStore:pg,useId:Cg,unstable_isNewReconciler:!1};function Ln(t,e){if(t&&t.defaultProps){e=ht({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Au(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ht({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Cl={isMounted:function(t){return(t=t._reactInternals)?Ar(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=$t(),r=Bi(t),s=ci(i,r);s.payload=e,n!=null&&(s.callback=n),e=Oi(t,s,r),e!==null&&(zn(e,t,r,i),Lo(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=$t(),r=Bi(t),s=ci(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Oi(t,s,r),e!==null&&(zn(e,t,r,i),Lo(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=$t(),i=Bi(t),r=ci(n,i);r.tag=2,e!=null&&(r.callback=e),e=Oi(t,r,i),e!==null&&(zn(e,t,i,n),Lo(e,t,i))}};function Kh(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!fa(n,i)||!fa(r,s):!0}function Lg(t,e,n){var i=!1,r=Xi,s=e.contextType;return typeof s=="object"&&s!==null?s=An(s):(r=tn(e)?_r:Ht.current,i=e.contextTypes,s=(i=i!=null)?ps(t,r):Xi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Cl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Zh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Cl.enqueueReplaceState(e,e.state,null)}function bu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},wd(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=An(s):(s=tn(e)?_r:Ht.current,r.context=ps(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Au(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Cl.enqueueReplaceState(r,r.state,null),tl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function _s(t,e){try{var n="",i=e;do n+=N_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function pc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Cu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var ix=typeof WeakMap=="function"?WeakMap:Map;function Dg(t,e,n){n=ci(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){al||(al=!0,Ou=i),Cu(t,e)},n}function Ig(t,e,n){n=ci(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Cu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Cu(t,e),typeof i!="function"&&(zi===null?zi=new Set([this]):zi.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Qh(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new ix;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=vx.bind(null,t,e,n),e.then(t,t))}function Jh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function ef(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ci(-1,1),e.tag=2,Oi(n,e,1))),n.lanes|=1),t)}var rx=gi.ReactCurrentOwner,Jt=!1;function Xt(t,e,n,i){e.child=t===null?cg(e,null,n,i):gs(e,t.child,n,i)}function tf(t,e,n,i,r){n=n.render;var s=e.ref;return cs(e,r),i=Nd(t,e,n,i,s,r),n=Pd(),t!==null&&!Jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,pi(t,e,r)):(lt&&n&&_d(e),e.flags|=1,Xt(t,e,i,r),e.child)}function nf(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Hd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Ug(t,e,s,i,r)):(t=Oo(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:fa,n(a,i)&&t.ref===e.ref)return pi(t,e,r)}return e.flags|=1,t=Hi(s,i),t.ref=e.ref,t.return=e,e.child=t}function Ug(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(fa(s,i)&&t.ref===e.ref)if(Jt=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Jt=!0);else return e.lanes=t.lanes,pi(t,e,r)}return Ru(t,e,n,i,r)}function Fg(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},rt(ns,cn),cn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,rt(ns,cn),cn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,rt(ns,cn),cn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,rt(ns,cn),cn|=i;return Xt(t,e,r,n),e.child}function kg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ru(t,e,n,i,r){var s=tn(n)?_r:Ht.current;return s=ps(e,s),cs(e,r),n=Nd(t,e,n,i,s,r),i=Pd(),t!==null&&!Jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,pi(t,e,r)):(lt&&i&&_d(e),e.flags|=1,Xt(t,e,n,r),e.child)}function rf(t,e,n,i,r){if(tn(n)){var s=!0;Ko(e)}else s=!1;if(cs(e,r),e.stateNode===null)Uo(t,e),Lg(e,n,i),bu(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=An(c):(c=tn(n)?_r:Ht.current,c=ps(e,c));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&Zh(e,a,i,c),Ai=!1;var h=e.memoizedState;a.state=h,tl(e,i,a,r),l=e.memoizedState,o!==i||h!==l||en.current||Ai?(typeof f=="function"&&(Au(e,n,f,i),l=e.memoizedState),(o=Ai||Kh(e,n,o,i,h,l,c))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,dg(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:Ln(e.type,o),a.props=c,p=e.pendingProps,h=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=An(l):(l=tn(n)?_r:Ht.current,l=ps(e,l));var v=n.getDerivedStateFromProps;(f=typeof v=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==p||h!==l)&&Zh(e,a,i,l),Ai=!1,h=e.memoizedState,a.state=h,tl(e,i,a,r);var _=e.memoizedState;o!==p||h!==_||en.current||Ai?(typeof v=="function"&&(Au(e,n,v,i),_=e.memoizedState),(c=Ai||Kh(e,n,c,i,h,_,l)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,_,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,_,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),a.props=i,a.state=_,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Nu(t,e,n,i,s,r)}function Nu(t,e,n,i,r,s){kg(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&jh(e,n,!1),pi(t,e,s);i=e.stateNode,rx.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=gs(e,t.child,null,s),e.child=gs(e,null,o,s)):Xt(t,e,o,s),e.memoizedState=i.state,r&&jh(e,n,!0),e.child}function Og(t){var e=t.stateNode;e.pendingContext?Hh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Hh(t,e.context,!1),Ad(t,e.containerInfo)}function sf(t,e,n,i,r){return ms(),yd(r),e.flags|=256,Xt(t,e,n,i),e.child}var Pu={dehydrated:null,treeContext:null,retryLane:0};function Lu(t){return{baseLanes:t,cachePool:null,transitions:null}}function zg(t,e,n){var i=e.pendingProps,r=ut.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),rt(ut,r&1),t===null)return Tu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Pl(a,i,0,null),t=fr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Lu(n),e.memoizedState=Pu,t):Id(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return sx(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Hi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=Hi(o,s):(s=fr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?Lu(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Pu,i}return s=t.child,t=s.sibling,i=Hi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Id(t,e){return e=Pl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ka(t,e,n,i){return i!==null&&yd(i),gs(e,t.child,null,n),t=Id(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function sx(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=pc(Error(ne(422))),Ka(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Pl({mode:"visible",children:i.children},r,0,null),s=fr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&gs(e,t.child,null,a),e.child.memoizedState=Lu(a),e.memoizedState=Pu,s);if(!(e.mode&1))return Ka(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ne(419)),i=pc(s,i,void 0),Ka(t,e,a,i)}if(o=(a&t.childLanes)!==0,Jt||o){if(i=Ct,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,fi(t,r),zn(i,t,r,-1))}return Bd(),i=pc(Error(ne(421))),Ka(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=_x.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,hn=ki(r.nextSibling),fn=e,lt=!0,In=null,t!==null&&(yn[Sn++]=ai,yn[Sn++]=oi,yn[Sn++]=xr,ai=t.id,oi=t.overflow,xr=e),e=Id(e,i.children),e.flags|=4096,e)}function af(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),wu(t.return,e,n)}function mc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Bg(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Xt(t,e,i.children,n),i=ut.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&af(t,n,e);else if(t.tag===19)af(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(rt(ut,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&nl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),mc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&nl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}mc(e,!0,n,null,s);break;case"together":mc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Uo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function pi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Sr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ne(153));if(e.child!==null){for(t=e.child,n=Hi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Hi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function ax(t,e,n){switch(e.tag){case 3:Og(e),ms();break;case 5:hg(e);break;case 1:tn(e.type)&&Ko(e);break;case 4:Ad(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;rt(Jo,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(rt(ut,ut.current&1),e.flags|=128,null):n&e.child.childLanes?zg(t,e,n):(rt(ut,ut.current&1),t=pi(t,e,n),t!==null?t.sibling:null);rt(ut,ut.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Bg(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),rt(ut,ut.current),i)break;return null;case 22:case 23:return e.lanes=0,Fg(t,e,n)}return pi(t,e,n)}var Hg,Du,jg,Gg;Hg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Du=function(){};jg=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,dr(Yn.current);var s=null;switch(n){case"input":r=tu(t,r),i=tu(t,i),s=[];break;case"select":r=ht({},r,{value:void 0}),i=ht({},i,{value:void 0}),s=[];break;case"textarea":r=ru(t,r),i=ru(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Yo)}au(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(aa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(aa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&st("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Gg=function(t,e,n,i){n!==i&&(e.flags|=4)};function Os(t,e){if(!lt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function kt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function ox(t,e,n){var i=e.pendingProps;switch(xd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return kt(e),null;case 1:return tn(e.type)&&$o(),kt(e),null;case 3:return i=e.stateNode,vs(),ot(en),ot(Ht),Cd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Ya(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,In!==null&&(Hu(In),In=null))),Du(t,e),kt(e),null;case 5:bd(e);var r=dr(_a.current);if(n=e.type,t!==null&&e.stateNode!=null)jg(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ne(166));return kt(e),null}if(t=dr(Yn.current),Ya(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Xn]=e,i[ga]=s,t=(e.mode&1)!==0,n){case"dialog":st("cancel",i),st("close",i);break;case"iframe":case"object":case"embed":st("load",i);break;case"video":case"audio":for(r=0;r<qs.length;r++)st(qs[r],i);break;case"source":st("error",i);break;case"img":case"image":case"link":st("error",i),st("load",i);break;case"details":st("toggle",i);break;case"input":ph(i,s),st("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},st("invalid",i);break;case"textarea":gh(i,s),st("invalid",i)}au(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&qa(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&qa(i.textContent,o,t),r=["children",""+o]):aa.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&st("scroll",i)}switch(n){case"input":za(i),mh(i,s,!0);break;case"textarea":za(i),vh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Yo)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=vm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[Xn]=e,t[ga]=i,Hg(t,e,!1,!1),e.stateNode=t;e:{switch(a=ou(n,i),n){case"dialog":st("cancel",t),st("close",t),r=i;break;case"iframe":case"object":case"embed":st("load",t),r=i;break;case"video":case"audio":for(r=0;r<qs.length;r++)st(qs[r],t);r=i;break;case"source":st("error",t),r=i;break;case"img":case"image":case"link":st("error",t),st("load",t),r=i;break;case"details":st("toggle",t),r=i;break;case"input":ph(t,i),r=tu(t,i),st("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ht({},i,{value:void 0}),st("invalid",t);break;case"textarea":gh(t,i),r=ru(t,i),st("invalid",t);break;default:r=i}au(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?ym(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&_m(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&oa(t,l):typeof l=="number"&&oa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(aa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&st("scroll",t):l!=null&&rd(t,s,l,a))}switch(n){case"input":za(t),mh(t,i,!1);break;case"textarea":za(t),vh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Wi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ss(t,!!i.multiple,s,!1):i.defaultValue!=null&&ss(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Yo)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return kt(e),null;case 6:if(t&&e.stateNode!=null)Gg(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ne(166));if(n=dr(_a.current),dr(Yn.current),Ya(e)){if(i=e.stateNode,n=e.memoizedProps,i[Xn]=e,(s=i.nodeValue!==n)&&(t=fn,t!==null))switch(t.tag){case 3:qa(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&qa(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Xn]=e,e.stateNode=i}return kt(e),null;case 13:if(ot(ut),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(lt&&hn!==null&&e.mode&1&&!(e.flags&128))og(),ms(),e.flags|=98560,s=!1;else if(s=Ya(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ne(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ne(317));s[Xn]=e}else ms(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;kt(e),s=!1}else In!==null&&(Hu(In),In=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ut.current&1?St===0&&(St=3):Bd())),e.updateQueue!==null&&(e.flags|=4),kt(e),null);case 4:return vs(),Du(t,e),t===null&&pa(e.stateNode.containerInfo),kt(e),null;case 10:return Md(e.type._context),kt(e),null;case 17:return tn(e.type)&&$o(),kt(e),null;case 19:if(ot(ut),s=e.memoizedState,s===null)return kt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Os(s,!1);else{if(St!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=nl(t),a!==null){for(e.flags|=128,Os(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return rt(ut,ut.current&1|2),e.child}t=t.sibling}s.tail!==null&&vt()>xs&&(e.flags|=128,i=!0,Os(s,!1),e.lanes=4194304)}else{if(!i)if(t=nl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Os(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!lt)return kt(e),null}else 2*vt()-s.renderingStartTime>xs&&n!==1073741824&&(e.flags|=128,i=!0,Os(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=vt(),e.sibling=null,n=ut.current,rt(ut,i?n&1|2:n&1),e):(kt(e),null);case 22:case 23:return zd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?cn&1073741824&&(kt(e),e.subtreeFlags&6&&(e.flags|=8192)):kt(e),null;case 24:return null;case 25:return null}throw Error(ne(156,e.tag))}function lx(t,e){switch(xd(e),e.tag){case 1:return tn(e.type)&&$o(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return vs(),ot(en),ot(Ht),Cd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return bd(e),null;case 13:if(ot(ut),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ne(340));ms()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ot(ut),null;case 4:return vs(),null;case 10:return Md(e.type._context),null;case 22:case 23:return zd(),null;case 24:return null;default:return null}}var Za=!1,Bt=!1,cx=typeof WeakSet=="function"?WeakSet:Set,xe=null;function ts(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){mt(t,e,i)}else n.current=null}function Iu(t,e,n){try{n()}catch(i){mt(t,e,i)}}var of=!1;function ux(t,e){if(vu=Wo,t=Ym(),vd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,f=0,p=t,h=null;t:for(;;){for(var v;p!==n||r!==0&&p.nodeType!==3||(o=a+r),p!==s||i!==0&&p.nodeType!==3||(l=a+i),p.nodeType===3&&(a+=p.nodeValue.length),(v=p.firstChild)!==null;)h=p,p=v;for(;;){if(p===t)break t;if(h===n&&++c===r&&(o=a),h===s&&++f===i&&(l=a),(v=p.nextSibling)!==null)break;p=h,h=p.parentNode}p=v}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(_u={focusedElem:t,selectionRange:n},Wo=!1,xe=e;xe!==null;)if(e=xe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,xe=t;else for(;xe!==null;){e=xe;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,m=_.memoizedState,u=e.stateNode,g=u.getSnapshotBeforeUpdate(e.elementType===e.type?y:Ln(e.type,y),m);u.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ne(163))}}catch(E){mt(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,xe=t;break}xe=e.return}return _=of,of=!1,_}function ea(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Iu(e,n,s)}r=r.next}while(r!==i)}}function Rl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Uu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Vg(t){var e=t.alternate;e!==null&&(t.alternate=null,Vg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Xn],delete e[ga],delete e[Su],delete e[X0],delete e[q0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Wg(t){return t.tag===5||t.tag===3||t.tag===4}function lf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Wg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Fu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Yo));else if(i!==4&&(t=t.child,t!==null))for(Fu(t,e,n),t=t.sibling;t!==null;)Fu(t,e,n),t=t.sibling}function ku(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(ku(t,e,n),t=t.sibling;t!==null;)ku(t,e,n),t=t.sibling}var Nt=null,Dn=!1;function vi(t,e,n){for(n=n.child;n!==null;)Xg(t,e,n),n=n.sibling}function Xg(t,e,n){if(qn&&typeof qn.onCommitFiberUnmount=="function")try{qn.onCommitFiberUnmount(Sl,n)}catch{}switch(n.tag){case 5:Bt||ts(n,e);case 6:var i=Nt,r=Dn;Nt=null,vi(t,e,n),Nt=i,Dn=r,Nt!==null&&(Dn?(t=Nt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Nt.removeChild(n.stateNode));break;case 18:Nt!==null&&(Dn?(t=Nt,n=n.stateNode,t.nodeType===8?lc(t.parentNode,n):t.nodeType===1&&lc(t,n),da(t)):lc(Nt,n.stateNode));break;case 4:i=Nt,r=Dn,Nt=n.stateNode.containerInfo,Dn=!0,vi(t,e,n),Nt=i,Dn=r;break;case 0:case 11:case 14:case 15:if(!Bt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Iu(n,e,a),r=r.next}while(r!==i)}vi(t,e,n);break;case 1:if(!Bt&&(ts(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){mt(n,e,o)}vi(t,e,n);break;case 21:vi(t,e,n);break;case 22:n.mode&1?(Bt=(i=Bt)||n.memoizedState!==null,vi(t,e,n),Bt=i):vi(t,e,n);break;default:vi(t,e,n)}}function cf(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new cx),e.forEach(function(i){var r=xx.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Cn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Nt=o.stateNode,Dn=!1;break e;case 3:Nt=o.stateNode.containerInfo,Dn=!0;break e;case 4:Nt=o.stateNode.containerInfo,Dn=!0;break e}o=o.return}if(Nt===null)throw Error(ne(160));Xg(s,a,r),Nt=null,Dn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){mt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)qg(e,t),e=e.sibling}function qg(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Cn(e,t),Gn(t),i&4){try{ea(3,t,t.return),Rl(3,t)}catch(y){mt(t,t.return,y)}try{ea(5,t,t.return)}catch(y){mt(t,t.return,y)}}break;case 1:Cn(e,t),Gn(t),i&512&&n!==null&&ts(n,n.return);break;case 5:if(Cn(e,t),Gn(t),i&512&&n!==null&&ts(n,n.return),t.flags&32){var r=t.stateNode;try{oa(r,"")}catch(y){mt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&mm(r,s),ou(o,a);var c=ou(o,s);for(a=0;a<l.length;a+=2){var f=l[a],p=l[a+1];f==="style"?ym(r,p):f==="dangerouslySetInnerHTML"?_m(r,p):f==="children"?oa(r,p):rd(r,f,p,c)}switch(o){case"input":nu(r,s);break;case"textarea":gm(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?ss(r,!!s.multiple,v,!1):h!==!!s.multiple&&(s.defaultValue!=null?ss(r,!!s.multiple,s.defaultValue,!0):ss(r,!!s.multiple,s.multiple?[]:"",!1))}r[ga]=s}catch(y){mt(t,t.return,y)}}break;case 6:if(Cn(e,t),Gn(t),i&4){if(t.stateNode===null)throw Error(ne(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){mt(t,t.return,y)}}break;case 3:if(Cn(e,t),Gn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{da(e.containerInfo)}catch(y){mt(t,t.return,y)}break;case 4:Cn(e,t),Gn(t);break;case 13:Cn(e,t),Gn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(kd=vt())),i&4&&cf(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Bt=(c=Bt)||f,Cn(e,t),Bt=c):Cn(e,t),Gn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(xe=t,f=t.child;f!==null;){for(p=xe=f;xe!==null;){switch(h=xe,v=h.child,h.tag){case 0:case 11:case 14:case 15:ea(4,h,h.return);break;case 1:ts(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){mt(i,n,y)}}break;case 5:ts(h,h.return);break;case 22:if(h.memoizedState!==null){df(p);continue}}v!==null?(v.return=h,xe=v):df(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{r=p.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=p.stateNode,l=p.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=xm("display",a))}catch(y){mt(t,t.return,y)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(y){mt(t,t.return,y)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Cn(e,t),Gn(t),i&4&&cf(t);break;case 21:break;default:Cn(e,t),Gn(t)}}function Gn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Wg(n)){var i=n;break e}n=n.return}throw Error(ne(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(oa(r,""),i.flags&=-33);var s=lf(t);ku(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=lf(t);Fu(t,o,a);break;default:throw Error(ne(161))}}catch(l){mt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function dx(t,e,n){xe=t,Yg(t)}function Yg(t,e,n){for(var i=(t.mode&1)!==0;xe!==null;){var r=xe,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||Za;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||Bt;o=Za;var c=Bt;if(Za=a,(Bt=l)&&!c)for(xe=r;xe!==null;)a=xe,l=a.child,a.tag===22&&a.memoizedState!==null?hf(r):l!==null?(l.return=a,xe=l):hf(r);for(;s!==null;)xe=s,Yg(s),s=s.sibling;xe=r,Za=o,Bt=c}uf(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,xe=s):uf(t)}}function uf(t){for(;xe!==null;){var e=xe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Bt||Rl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Bt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Ln(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&qh(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}qh(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&da(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ne(163))}Bt||e.flags&512&&Uu(e)}catch(h){mt(e,e.return,h)}}if(e===t){xe=null;break}if(n=e.sibling,n!==null){n.return=e.return,xe=n;break}xe=e.return}}function df(t){for(;xe!==null;){var e=xe;if(e===t){xe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,xe=n;break}xe=e.return}}function hf(t){for(;xe!==null;){var e=xe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Rl(4,e)}catch(l){mt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){mt(e,r,l)}}var s=e.return;try{Uu(e)}catch(l){mt(e,s,l)}break;case 5:var a=e.return;try{Uu(e)}catch(l){mt(e,a,l)}}}catch(l){mt(e,e.return,l)}if(e===t){xe=null;break}var o=e.sibling;if(o!==null){o.return=e.return,xe=o;break}xe=e.return}}var hx=Math.ceil,sl=gi.ReactCurrentDispatcher,Ud=gi.ReactCurrentOwner,wn=gi.ReactCurrentBatchConfig,$e=0,Ct=null,xt=null,Dt=0,cn=0,ns=$i(0),St=0,Ea=null,Sr=0,Nl=0,Fd=0,ta=null,Qt=null,kd=0,xs=1/0,ii=null,al=!1,Ou=null,zi=null,Qa=!1,Ni=null,ol=0,na=0,zu=null,Fo=-1,ko=0;function $t(){return $e&6?vt():Fo!==-1?Fo:Fo=vt()}function Bi(t){return t.mode&1?$e&2&&Dt!==0?Dt&-Dt:$0.transition!==null?(ko===0&&(ko=Lm()),ko):(t=Ze,t!==0||(t=window.event,t=t===void 0?16:zm(t.type)),t):1}function zn(t,e,n,i){if(50<na)throw na=0,zu=null,Error(ne(185));ba(t,n,i),(!($e&2)||t!==Ct)&&(t===Ct&&(!($e&2)&&(Nl|=n),St===4&&Ci(t,Dt)),nn(t,i),n===1&&$e===0&&!(e.mode&1)&&(xs=vt()+500,Al&&Ki()))}function nn(t,e){var n=t.callbackNode;$_(t,e);var i=Vo(t,t===Ct?Dt:0);if(i===0)n!==null&&yh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&yh(n),e===1)t.tag===0?Y0(ff.bind(null,t)):rg(ff.bind(null,t)),V0(function(){!($e&6)&&Ki()}),n=null;else{switch(Dm(i)){case 1:n=cd;break;case 4:n=Nm;break;case 16:n=Go;break;case 536870912:n=Pm;break;default:n=Go}n=nv(n,$g.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function $g(t,e){if(Fo=-1,ko=0,$e&6)throw Error(ne(327));var n=t.callbackNode;if(us()&&t.callbackNode!==n)return null;var i=Vo(t,t===Ct?Dt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=ll(t,i);else{e=i;var r=$e;$e|=2;var s=Zg();(Ct!==t||Dt!==e)&&(ii=null,xs=vt()+500,hr(t,e));do try{mx();break}catch(o){Kg(t,o)}while(!0);Ed(),sl.current=s,$e=r,xt!==null?e=0:(Ct=null,Dt=0,e=St)}if(e!==0){if(e===2&&(r=hu(t),r!==0&&(i=r,e=Bu(t,r))),e===1)throw n=Ea,hr(t,0),Ci(t,i),nn(t,vt()),n;if(e===6)Ci(t,i);else{if(r=t.current.alternate,!(i&30)&&!fx(r)&&(e=ll(t,i),e===2&&(s=hu(t),s!==0&&(i=s,e=Bu(t,s))),e===1))throw n=Ea,hr(t,0),Ci(t,i),nn(t,vt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ne(345));case 2:rr(t,Qt,ii);break;case 3:if(Ci(t,i),(i&130023424)===i&&(e=kd+500-vt(),10<e)){if(Vo(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){$t(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=yu(rr.bind(null,t,Qt,ii),e);break}rr(t,Qt,ii);break;case 4:if(Ci(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-On(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=vt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*hx(i/1960))-i,10<i){t.timeoutHandle=yu(rr.bind(null,t,Qt,ii),i);break}rr(t,Qt,ii);break;case 5:rr(t,Qt,ii);break;default:throw Error(ne(329))}}}return nn(t,vt()),t.callbackNode===n?$g.bind(null,t):null}function Bu(t,e){var n=ta;return t.current.memoizedState.isDehydrated&&(hr(t,e).flags|=256),t=ll(t,e),t!==2&&(e=Qt,Qt=n,e!==null&&Hu(e)),t}function Hu(t){Qt===null?Qt=t:Qt.push.apply(Qt,t)}function fx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Hn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ci(t,e){for(e&=~Fd,e&=~Nl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-On(e),i=1<<n;t[n]=-1,e&=~i}}function ff(t){if($e&6)throw Error(ne(327));us();var e=Vo(t,0);if(!(e&1))return nn(t,vt()),null;var n=ll(t,e);if(t.tag!==0&&n===2){var i=hu(t);i!==0&&(e=i,n=Bu(t,i))}if(n===1)throw n=Ea,hr(t,0),Ci(t,e),nn(t,vt()),n;if(n===6)throw Error(ne(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,rr(t,Qt,ii),nn(t,vt()),null}function Od(t,e){var n=$e;$e|=1;try{return t(e)}finally{$e=n,$e===0&&(xs=vt()+500,Al&&Ki())}}function Er(t){Ni!==null&&Ni.tag===0&&!($e&6)&&us();var e=$e;$e|=1;var n=wn.transition,i=Ze;try{if(wn.transition=null,Ze=1,t)return t()}finally{Ze=i,wn.transition=n,$e=e,!($e&6)&&Ki()}}function zd(){cn=ns.current,ot(ns)}function hr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,G0(n)),xt!==null)for(n=xt.return;n!==null;){var i=n;switch(xd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&$o();break;case 3:vs(),ot(en),ot(Ht),Cd();break;case 5:bd(i);break;case 4:vs();break;case 13:ot(ut);break;case 19:ot(ut);break;case 10:Md(i.type._context);break;case 22:case 23:zd()}n=n.return}if(Ct=t,xt=t=Hi(t.current,null),Dt=cn=e,St=0,Ea=null,Fd=Nl=Sr=0,Qt=ta=null,ur!==null){for(e=0;e<ur.length;e++)if(n=ur[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}ur=null}return t}function Kg(t,e){do{var n=xt;try{if(Ed(),Do.current=rl,il){for(var i=dt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}il=!1}if(yr=0,bt=yt=dt=null,Js=!1,xa=0,Ud.current=null,n===null||n.return===null){St=1,Ea=e,xt=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Dt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=o,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var v=Jh(a);if(v!==null){v.flags&=-257,ef(v,a,o,s,e),v.mode&1&&Qh(s,c,e),e=v,l=c;var _=e.updateQueue;if(_===null){var y=new Set;y.add(l),e.updateQueue=y}else _.add(l);break e}else{if(!(e&1)){Qh(s,c,e),Bd();break e}l=Error(ne(426))}}else if(lt&&o.mode&1){var m=Jh(a);if(m!==null){!(m.flags&65536)&&(m.flags|=256),ef(m,a,o,s,e),yd(_s(l,o));break e}}s=l=_s(l,o),St!==4&&(St=2),ta===null?ta=[s]:ta.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=Dg(s,l,e);Xh(s,u);break e;case 1:o=l;var g=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(zi===null||!zi.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=Ig(s,o,e);Xh(s,E);break e}}s=s.return}while(s!==null)}Jg(n)}catch(R){e=R,xt===n&&n!==null&&(xt=n=n.return);continue}break}while(!0)}function Zg(){var t=sl.current;return sl.current=rl,t===null?rl:t}function Bd(){(St===0||St===3||St===2)&&(St=4),Ct===null||!(Sr&268435455)&&!(Nl&268435455)||Ci(Ct,Dt)}function ll(t,e){var n=$e;$e|=2;var i=Zg();(Ct!==t||Dt!==e)&&(ii=null,hr(t,e));do try{px();break}catch(r){Kg(t,r)}while(!0);if(Ed(),$e=n,sl.current=i,xt!==null)throw Error(ne(261));return Ct=null,Dt=0,St}function px(){for(;xt!==null;)Qg(xt)}function mx(){for(;xt!==null&&!B_();)Qg(xt)}function Qg(t){var e=tv(t.alternate,t,cn);t.memoizedProps=t.pendingProps,e===null?Jg(t):xt=e,Ud.current=null}function Jg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=lx(n,e),n!==null){n.flags&=32767,xt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{St=6,xt=null;return}}else if(n=ox(n,e,cn),n!==null){xt=n;return}if(e=e.sibling,e!==null){xt=e;return}xt=e=t}while(e!==null);St===0&&(St=5)}function rr(t,e,n){var i=Ze,r=wn.transition;try{wn.transition=null,Ze=1,gx(t,e,n,i)}finally{wn.transition=r,Ze=i}return null}function gx(t,e,n,i){do us();while(Ni!==null);if($e&6)throw Error(ne(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ne(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(K_(t,s),t===Ct&&(xt=Ct=null,Dt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Qa||(Qa=!0,nv(Go,function(){return us(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=wn.transition,wn.transition=null;var a=Ze;Ze=1;var o=$e;$e|=4,Ud.current=null,ux(t,n),qg(n,t),F0(_u),Wo=!!vu,_u=vu=null,t.current=n,dx(n),H_(),$e=o,Ze=a,wn.transition=s}else t.current=n;if(Qa&&(Qa=!1,Ni=t,ol=r),s=t.pendingLanes,s===0&&(zi=null),V_(n.stateNode),nn(t,vt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(al)throw al=!1,t=Ou,Ou=null,t;return ol&1&&t.tag!==0&&us(),s=t.pendingLanes,s&1?t===zu?na++:(na=0,zu=t):na=0,Ki(),null}function us(){if(Ni!==null){var t=Dm(ol),e=wn.transition,n=Ze;try{if(wn.transition=null,Ze=16>t?16:t,Ni===null)var i=!1;else{if(t=Ni,Ni=null,ol=0,$e&6)throw Error(ne(331));var r=$e;for($e|=4,xe=t.current;xe!==null;){var s=xe,a=s.child;if(xe.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(xe=c;xe!==null;){var f=xe;switch(f.tag){case 0:case 11:case 15:ea(8,f,s)}var p=f.child;if(p!==null)p.return=f,xe=p;else for(;xe!==null;){f=xe;var h=f.sibling,v=f.return;if(Vg(f),f===c){xe=null;break}if(h!==null){h.return=v,xe=h;break}xe=v}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}xe=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,xe=a;else e:for(;xe!==null;){if(s=xe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ea(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,xe=u;break e}xe=s.return}}var g=t.current;for(xe=g;xe!==null;){a=xe;var x=a.child;if(a.subtreeFlags&2064&&x!==null)x.return=a,xe=x;else e:for(a=g;xe!==null;){if(o=xe,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Rl(9,o)}}catch(R){mt(o,o.return,R)}if(o===a){xe=null;break e}var E=o.sibling;if(E!==null){E.return=o.return,xe=E;break e}xe=o.return}}if($e=r,Ki(),qn&&typeof qn.onPostCommitFiberRoot=="function")try{qn.onPostCommitFiberRoot(Sl,t)}catch{}i=!0}return i}finally{Ze=n,wn.transition=e}}return!1}function pf(t,e,n){e=_s(n,e),e=Dg(t,e,1),t=Oi(t,e,1),e=$t(),t!==null&&(ba(t,1,e),nn(t,e))}function mt(t,e,n){if(t.tag===3)pf(t,t,n);else for(;e!==null;){if(e.tag===3){pf(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(zi===null||!zi.has(i))){t=_s(n,t),t=Ig(e,t,1),e=Oi(e,t,1),t=$t(),e!==null&&(ba(e,1,t),nn(e,t));break}}e=e.return}}function vx(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=$t(),t.pingedLanes|=t.suspendedLanes&n,Ct===t&&(Dt&n)===n&&(St===4||St===3&&(Dt&130023424)===Dt&&500>vt()-kd?hr(t,0):Fd|=n),nn(t,e)}function ev(t,e){e===0&&(t.mode&1?(e=ja,ja<<=1,!(ja&130023424)&&(ja=4194304)):e=1);var n=$t();t=fi(t,e),t!==null&&(ba(t,e,n),nn(t,n))}function _x(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),ev(t,n)}function xx(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ne(314))}i!==null&&i.delete(e),ev(t,n)}var tv;tv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||en.current)Jt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Jt=!1,ax(t,e,n);Jt=!!(t.flags&131072)}else Jt=!1,lt&&e.flags&1048576&&sg(e,Qo,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Uo(t,e),t=e.pendingProps;var r=ps(e,Ht.current);cs(e,n),r=Nd(null,e,i,t,r,n);var s=Pd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,tn(i)?(s=!0,Ko(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,wd(e),r.updater=Cl,e.stateNode=r,r._reactInternals=e,bu(e,i,t,n),e=Nu(null,e,i,!0,s,n)):(e.tag=0,lt&&s&&_d(e),Xt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Uo(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Sx(i),t=Ln(i,t),r){case 0:e=Ru(null,e,i,t,n);break e;case 1:e=rf(null,e,i,t,n);break e;case 11:e=tf(null,e,i,t,n);break e;case 14:e=nf(null,e,i,Ln(i.type,t),n);break e}throw Error(ne(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ln(i,r),Ru(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ln(i,r),rf(t,e,i,r,n);case 3:e:{if(Og(e),t===null)throw Error(ne(387));i=e.pendingProps,s=e.memoizedState,r=s.element,dg(t,e),tl(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=_s(Error(ne(423)),e),e=sf(t,e,i,n,r);break e}else if(i!==r){r=_s(Error(ne(424)),e),e=sf(t,e,i,n,r);break e}else for(hn=ki(e.stateNode.containerInfo.firstChild),fn=e,lt=!0,In=null,n=cg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ms(),i===r){e=pi(t,e,n);break e}Xt(t,e,i,n)}e=e.child}return e;case 5:return hg(e),t===null&&Tu(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,xu(i,r)?a=null:s!==null&&xu(i,s)&&(e.flags|=32),kg(t,e),Xt(t,e,a,n),e.child;case 6:return t===null&&Tu(e),null;case 13:return zg(t,e,n);case 4:return Ad(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=gs(e,null,i,n):Xt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ln(i,r),tf(t,e,i,r,n);case 7:return Xt(t,e,e.pendingProps,n),e.child;case 8:return Xt(t,e,e.pendingProps.children,n),e.child;case 12:return Xt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,rt(Jo,i._currentValue),i._currentValue=a,s!==null)if(Hn(s.value,a)){if(s.children===r.children&&!en.current){e=pi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=ci(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),wu(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ne(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),wu(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Xt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,cs(e,n),r=An(r),i=i(r),e.flags|=1,Xt(t,e,i,n),e.child;case 14:return i=e.type,r=Ln(i,e.pendingProps),r=Ln(i.type,r),nf(t,e,i,r,n);case 15:return Ug(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ln(i,r),Uo(t,e),e.tag=1,tn(i)?(t=!0,Ko(e)):t=!1,cs(e,n),Lg(e,i,r),bu(e,i,r,n),Nu(null,e,i,!0,t,n);case 19:return Bg(t,e,n);case 22:return Fg(t,e,n)}throw Error(ne(156,e.tag))};function nv(t,e){return Rm(t,e)}function yx(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tn(t,e,n,i){return new yx(t,e,n,i)}function Hd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Sx(t){if(typeof t=="function")return Hd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ad)return 11;if(t===od)return 14}return 2}function Hi(t,e){var n=t.alternate;return n===null?(n=Tn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Oo(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Hd(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Xr:return fr(n.children,r,s,e);case sd:a=8,r|=8;break;case Zc:return t=Tn(12,n,e,r|2),t.elementType=Zc,t.lanes=s,t;case Qc:return t=Tn(13,n,e,r),t.elementType=Qc,t.lanes=s,t;case Jc:return t=Tn(19,n,e,r),t.elementType=Jc,t.lanes=s,t;case hm:return Pl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case um:a=10;break e;case dm:a=9;break e;case ad:a=11;break e;case od:a=14;break e;case wi:a=16,i=null;break e}throw Error(ne(130,t==null?t:typeof t,""))}return e=Tn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function fr(t,e,n,i){return t=Tn(7,t,i,e),t.lanes=n,t}function Pl(t,e,n,i){return t=Tn(22,t,i,e),t.elementType=hm,t.lanes=n,t.stateNode={isHidden:!1},t}function gc(t,e,n){return t=Tn(6,t,null,e),t.lanes=n,t}function vc(t,e,n){return e=Tn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Ex(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zl(0),this.expirationTimes=Zl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zl(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function jd(t,e,n,i,r,s,a,o,l){return t=new Ex(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Tn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},wd(s),t}function Mx(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Wr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function iv(t){if(!t)return Xi;t=t._reactInternals;e:{if(Ar(t)!==t||t.tag!==1)throw Error(ne(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(tn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ne(171))}if(t.tag===1){var n=t.type;if(tn(n))return ig(t,n,e)}return e}function rv(t,e,n,i,r,s,a,o,l){return t=jd(n,i,!0,t,r,s,a,o,l),t.context=iv(null),n=t.current,i=$t(),r=Bi(n),s=ci(i,r),s.callback=e??null,Oi(n,s,r),t.current.lanes=r,ba(t,r,i),nn(t,i),t}function Ll(t,e,n,i){var r=e.current,s=$t(),a=Bi(r);return n=iv(n),e.context===null?e.context=n:e.pendingContext=n,e=ci(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Oi(r,e,a),t!==null&&(zn(t,r,a,s),Lo(t,r,a)),a}function cl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function mf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Gd(t,e){mf(t,e),(t=t.alternate)&&mf(t,e)}function Tx(){return null}var sv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Vd(t){this._internalRoot=t}Dl.prototype.render=Vd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ne(409));Ll(t,e,null,null)};Dl.prototype.unmount=Vd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Er(function(){Ll(null,t,null,null)}),e[hi]=null}};function Dl(t){this._internalRoot=t}Dl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Fm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<bi.length&&e!==0&&e<bi[n].priority;n++);bi.splice(n,0,t),n===0&&Om(t)}};function Wd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Il(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function gf(){}function wx(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=cl(a);s.call(c)}}var a=rv(e,i,t,0,null,!1,!1,"",gf);return t._reactRootContainer=a,t[hi]=a.current,pa(t.nodeType===8?t.parentNode:t),Er(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=cl(l);o.call(c)}}var l=jd(t,0,!1,null,null,!1,!1,"",gf);return t._reactRootContainer=l,t[hi]=l.current,pa(t.nodeType===8?t.parentNode:t),Er(function(){Ll(e,l,n,i)}),l}function Ul(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=cl(a);o.call(l)}}Ll(e,a,t,r)}else a=wx(n,e,t,r,i);return cl(a)}Im=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Xs(e.pendingLanes);n!==0&&(ud(e,n|1),nn(e,vt()),!($e&6)&&(xs=vt()+500,Ki()))}break;case 13:Er(function(){var i=fi(t,1);if(i!==null){var r=$t();zn(i,t,1,r)}}),Gd(t,1)}};dd=function(t){if(t.tag===13){var e=fi(t,134217728);if(e!==null){var n=$t();zn(e,t,134217728,n)}Gd(t,134217728)}};Um=function(t){if(t.tag===13){var e=Bi(t),n=fi(t,e);if(n!==null){var i=$t();zn(n,t,e,i)}Gd(t,e)}};Fm=function(){return Ze};km=function(t,e){var n=Ze;try{return Ze=t,e()}finally{Ze=n}};cu=function(t,e,n){switch(e){case"input":if(nu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=wl(i);if(!r)throw Error(ne(90));pm(i),nu(i,r)}}}break;case"textarea":gm(t,n);break;case"select":e=n.value,e!=null&&ss(t,!!n.multiple,e,!1)}};Mm=Od;Tm=Er;var Ax={usingClientEntryPoint:!1,Events:[Ra,Kr,wl,Sm,Em,Od]},zs={findFiberByHostInstance:cr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},bx={bundleType:zs.bundleType,version:zs.version,rendererPackageName:zs.rendererPackageName,rendererConfig:zs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:gi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=bm(t),t===null?null:t.stateNode},findFiberByHostInstance:zs.findFiberByHostInstance||Tx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ja=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ja.isDisabled&&Ja.supportsFiber)try{Sl=Ja.inject(bx),qn=Ja}catch{}}gn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ax;gn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wd(e))throw Error(ne(200));return Mx(t,e,null,n)};gn.createRoot=function(t,e){if(!Wd(t))throw Error(ne(299));var n=!1,i="",r=sv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=jd(t,1,!1,null,null,n,!1,i,r),t[hi]=e.current,pa(t.nodeType===8?t.parentNode:t),new Vd(e)};gn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ne(188)):(t=Object.keys(t).join(","),Error(ne(268,t)));return t=bm(e),t=t===null?null:t.stateNode,t};gn.flushSync=function(t){return Er(t)};gn.hydrate=function(t,e,n){if(!Il(e))throw Error(ne(200));return Ul(null,t,e,!0,n)};gn.hydrateRoot=function(t,e,n){if(!Wd(t))throw Error(ne(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=sv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=rv(e,null,t,1,n??null,r,!1,s,a),t[hi]=e.current,pa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Dl(e)};gn.render=function(t,e,n){if(!Il(e))throw Error(ne(200));return Ul(null,t,e,!1,n)};gn.unmountComponentAtNode=function(t){if(!Il(t))throw Error(ne(40));return t._reactRootContainer?(Er(function(){Ul(null,null,t,!1,function(){t._reactRootContainer=null,t[hi]=null})}),!0):!1};gn.unstable_batchedUpdates=Od;gn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Il(n))throw Error(ne(200));if(t==null||t._reactInternals===void 0)throw Error(ne(38));return Ul(t,e,n,!1,i)};gn.version="18.3.1-next-f1338f8080-20240426";function av(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(av)}catch(t){console.error(t)}}av(),am.exports=gn;var Cx=am.exports,vf=Cx;$c.createRoot=vf.createRoot,$c.hydrateRoot=vf.hydrateRoot;var _f="1.3.25";function ov(t,e,n){return Math.max(t,Math.min(e,n))}function Rx(t,e,n){return(1-n)*t+n*e}function Nx(t,e,n,i){return Rx(t,e,1-Math.exp(-n*i))}function Px(t,e){return(t%e+e)%e}var Lx=class{constructor(){Me(this,"isRunning",!1);Me(this,"value",0);Me(this,"from",0);Me(this,"to",0);Me(this,"currentTime",0);Me(this,"lerp");Me(this,"duration");Me(this,"easing");Me(this,"onUpdate")}advance(t){var n;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=t;const i=ov(0,this.currentTime/this.duration,1);e=i>=1;const r=e?1:this.easing(i);this.value=this.from+(this.to-this.from)*r}else this.lerp?(this.value=Nx(this.value,this.to,this.lerp*60,t),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),(n=this.onUpdate)==null||n.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(t,e,{lerp:n,duration:i,easing:r,onStart:s,onUpdate:a}){this.from=this.value=t,this.to=e,this.lerp=n,this.duration=i,this.easing=r,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=a}};function Dx(t,e){let n;return function(...i){clearTimeout(n),n=setTimeout(()=>{n=void 0,t.apply(this,i)},e)}}var Ix=class{constructor(t,e,{autoResize:n=!0,debounce:i=250}={}){Me(this,"width",0);Me(this,"height",0);Me(this,"scrollHeight",0);Me(this,"scrollWidth",0);Me(this,"debouncedResize");Me(this,"wrapperResizeObserver");Me(this,"contentResizeObserver");Me(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Me(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Me(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=t,this.content=e,n&&(this.debouncedResize=Dx(this.resize,i),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var t,e;(t=this.wrapperResizeObserver)==null||t.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},lv=class{constructor(){Me(this,"events",{})}emit(t,...e){var i;const n=this.events[t]||[];for(let r=0,s=n.length;r<s;r++)(i=n[r])==null||i.call(n,...e)}on(t,e){return this.events[t]?this.events[t].push(e):this.events[t]=[e],()=>{var n;this.events[t]=(n=this.events[t])==null?void 0:n.filter(i=>e!==i)}}off(t,e){var n;this.events[t]=(n=this.events[t])==null?void 0:n.filter(i=>e!==i)}destroy(){this.events={}}};const Ux=100/6,_i={passive:!1};function xf(t,e){return t===1?Ux:t===2?e:1}var Fx=class{constructor(t,e={wheelMultiplier:1,touchMultiplier:1}){Me(this,"touchStart",{x:0,y:0});Me(this,"lastDelta",{x:0,y:0});Me(this,"window",{width:0,height:0});Me(this,"emitter",new lv);Me(this,"onTouchStart",t=>{const{clientX:e,clientY:n}=t.targetTouches?t.targetTouches[0]:t;this.touchStart.x=e,this.touchStart.y=n,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:t})});Me(this,"onTouchMove",t=>{const{clientX:e,clientY:n}=t.targetTouches?t.targetTouches[0]:t,i=-(e-this.touchStart.x)*this.options.touchMultiplier,r=-(n-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=n,this.lastDelta={x:i,y:r},this.emitter.emit("scroll",{deltaX:i,deltaY:r,event:t})});Me(this,"onTouchEnd",t=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:t})});Me(this,"onWheel",t=>{let{deltaX:e,deltaY:n,deltaMode:i}=t;const r=xf(i,this.window.width),s=xf(i,this.window.height);e*=r,n*=s,e*=this.options.wheelMultiplier,n*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:n,event:t})});Me(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=t,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,_i),this.element.addEventListener("touchstart",this.onTouchStart,_i),this.element.addEventListener("touchmove",this.onTouchMove,_i),this.element.addEventListener("touchend",this.onTouchEnd,_i)}on(t,e){return this.emitter.on(t,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,_i),this.element.removeEventListener("touchstart",this.onTouchStart,_i),this.element.removeEventListener("touchmove",this.onTouchMove,_i),this.element.removeEventListener("touchend",this.onTouchEnd,_i)}};const yf=t=>Math.min(1,1.001-2**(-10*t));var kx=class{constructor({wrapper:t=window,content:e=document.documentElement,eventsTarget:n=t,smoothWheel:i=!0,syncTouch:r=!1,syncTouchLerp:s=.075,touchInertiaExponent:a=1.7,duration:o,easing:l,lerp:c=.1,infinite:f=!1,orientation:p="vertical",gestureOrientation:h=p==="horizontal"?"both":"vertical",touchMultiplier:v=1,wheelMultiplier:_=1,autoResize:y=!0,prevent:m,virtualScroll:u,overscroll:g=!0,autoRaf:x=!1,anchors:E=!1,autoToggle:R=!1,allowNestedScroll:C=!1,__experimental__naiveDimensions:w=!1,naiveDimensions:F=w,stopInertiaOnNavigate:S=!1}={}){Me(this,"_isScrolling",!1);Me(this,"_isStopped",!1);Me(this,"_isLocked",!1);Me(this,"_preventNextNativeScrollEvent",!1);Me(this,"_resetVelocityTimeout",null);Me(this,"_rafId",null);Me(this,"_isDraggingSelection",!1);Me(this,"isTouching");Me(this,"isIos");Me(this,"time",0);Me(this,"userData",{});Me(this,"lastVelocity",0);Me(this,"velocity",0);Me(this,"direction",0);Me(this,"options");Me(this,"targetScroll");Me(this,"animatedScroll");Me(this,"animate",new Lx);Me(this,"emitter",new lv);Me(this,"dimensions");Me(this,"virtualScroll");Me(this,"onScrollEnd",t=>{t instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&t.stopPropagation()});Me(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Me(this,"onTransitionEnd",t=>{var e;(e=t.propertyName)!=null&&e.includes("overflow")&&t.target===this.rootElement&&this.checkOverflow()});Me(this,"onClick",t=>{const e=t.composedPath().filter(i=>i instanceof HTMLAnchorElement&&i.href).map(i=>new URL(i.href)),n=new URL(window.location.href);if(this.options.anchors){const i=e.find(r=>n.host===r.host&&n.pathname===r.pathname&&r.hash);if(i){const r=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=decodeURIComponent(i.hash);this.scrollTo(s,r);return}}if(this.options.stopInertiaOnNavigate&&e.some(i=>n.host===i.host&&n.pathname!==i.pathname)){this.reset();return}});Me(this,"onPointerDown",t=>{t.button===1&&this.reset()});Me(this,"onVirtualScroll",t=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(t)===!1)return;const{deltaX:e,deltaY:n,event:i}=t;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:n,event:i}),i.ctrlKey||i.lenisStopPropagation)return;const r=i.type.includes("touch"),s=i.type.includes("wheel");if(r&&this.isIos&&(i.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(i)),this._isDraggingSelection)){i.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=i.type==="touchstart"||i.type==="touchmove";const a=e===0&&n===0;if(this.options.syncTouch&&r&&i.type==="touchstart"&&a&&!this.isStopped&&!this.isLocked){this.reset();return}const o=this.options.gestureOrientation==="vertical"&&n===0||this.options.gestureOrientation==="horizontal"&&e===0;if(a||o)return;let l=i.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const c=this.options.prevent,f=Math.abs(e)>=Math.abs(n)?"horizontal":"vertical";if(l.find(_=>{var y,m,u,g,x;return _ instanceof HTMLElement&&(typeof c=="function"&&(c==null?void 0:c(_))||((y=_.hasAttribute)==null?void 0:y.call(_,"data-lenis-prevent"))||f==="vertical"&&((m=_.hasAttribute)==null?void 0:m.call(_,"data-lenis-prevent-vertical"))||f==="horizontal"&&((u=_.hasAttribute)==null?void 0:u.call(_,"data-lenis-prevent-horizontal"))||r&&((g=_.hasAttribute)==null?void 0:g.call(_,"data-lenis-prevent-touch"))||s&&((x=_.hasAttribute)==null?void 0:x.call(_,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(_,{deltaX:e,deltaY:n}))}))return;if(this.isStopped||this.isLocked){i.cancelable&&i.preventDefault();return}if(!(this.options.syncTouch&&r||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),i.lenisStopPropagation=!0;return}let p=n;this.options.gestureOrientation==="both"?p=Math.abs(n)>Math.abs(e)?n:e:this.options.gestureOrientation==="horizontal"&&(p=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&n>0||this.animatedScroll===this.limit&&n<0))&&(i.lenisStopPropagation=!0),i.cancelable&&i.preventDefault();const h=r&&this.options.syncTouch,v=r&&i.type==="touchend";v&&(p=Math.sign(p)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+p,{programmatic:!1,...h?{lerp:v?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Me(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const t=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-t,this.direction=Math.sign(this.animatedScroll-t),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Me(this,"raf",t=>{const e=t-(this.time||t);this.time=t,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=_f,window.lenis||(window.lenis={}),window.lenis.version=_f,p==="horizontal"&&(window.lenis.horizontal=!0),r===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!t||t===document.documentElement)&&(t=window),typeof o=="number"&&typeof l!="function"?l=yf:typeof l=="function"&&typeof o!="number"&&(o=1),this.options={wrapper:t,content:e,eventsTarget:n,smoothWheel:i,syncTouch:r,syncTouchLerp:s,touchInertiaExponent:a,duration:o,easing:l,lerp:c,infinite:f,gestureOrientation:h,orientation:p,touchMultiplier:v,wheelMultiplier:_,autoResize:y,prevent:m,virtualScroll:u,overscroll:g,autoRaf:x,anchors:E,autoToggle:R,allowNestedScroll:C,naiveDimensions:F,stopInertiaOnNavigate:S},this.dimensions=new Ix(t,e,{autoResize:y}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new Fx(n,{touchMultiplier:v,wheelMultiplier:_}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(t,e){return this.emitter.on(t,e)}off(t,e){return this.emitter.off(t,e)}get overflow(){const t=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[t]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(t){this.isHorizontal?this.options.wrapper.scrollTo({left:t,behavior:"instant"}):this.options.wrapper.scrollTo({top:t,behavior:"instant"})}isTouchOnSelectionHandle(t){const e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;const n=t.targetTouches[0]??t.changedTouches[0];if(!n)return!1;const i=e.getRangeAt(0).getClientRects();if(i.length===0)return!1;const r=i[0],s=i[i.length-1],a=40,o=Math.hypot(n.clientX-r.left,n.clientY-r.top)<=a,l=Math.hypot(n.clientX-s.right,n.clientY-s.bottom)<=a;return o||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(t,{offset:e=0,immediate:n=!1,lock:i=!1,programmatic:r=!0,lerp:s=r?this.options.lerp:void 0,duration:a=r?this.options.duration:void 0,easing:o=r?this.options.easing:void 0,onStart:l,onComplete:c,force:f=!1,userData:p}={}){if((this.isStopped||this.isLocked)&&!f)return;let h=t,v=e;if(typeof h=="string"&&["top","left","start","#"].includes(h))h=0;else if(typeof h=="string"&&["bottom","right","end"].includes(h))h=this.limit;else{let _=null;if(typeof h=="string"?(_=h.startsWith("#")?document.getElementById(h.slice(1)):document.querySelector(h),_||(h==="#top"?h=0:console.warn("Lenis: Target not found",h))):h instanceof HTMLElement&&(h!=null&&h.nodeType)&&(_=h),_){if(this.options.wrapper!==window){const E=this.rootElement.getBoundingClientRect();v-=this.isHorizontal?E.left:E.top}const y=_.getBoundingClientRect(),m=getComputedStyle(_),u=this.isHorizontal?Number.parseFloat(m.scrollMarginLeft):Number.parseFloat(m.scrollMarginTop),g=getComputedStyle(this.rootElement),x=this.isHorizontal?Number.parseFloat(g.scrollPaddingLeft):Number.parseFloat(g.scrollPaddingTop);h=(this.isHorizontal?y.left:y.top)+this.animatedScroll-(Number.isNaN(u)?0:u)-(Number.isNaN(x)?0:x)}}if(typeof h=="number"){if(h+=v,this.options.infinite){if(r){this.targetScroll=this.animatedScroll=this.scroll;const _=h-this.animatedScroll;_>this.limit/2?h-=this.limit:_<-this.limit/2&&(h+=this.limit)}}else h=ov(0,h,this.limit);if(h===this.targetScroll){l==null||l(this),c==null||c(this);return}if(this.userData=p??{},n){this.animatedScroll=this.targetScroll=h,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}r||(this.targetScroll=h),typeof a=="number"&&typeof o!="function"?o=yf:typeof o=="function"&&typeof a!="number"&&(a=1),this.animate.fromTo(this.animatedScroll,h,{duration:a,easing:o,lerp:s,onStart:()=>{i&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(_,y)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=_-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=_,this.setScroll(this.scroll),r&&(this.targetScroll=_),y||this.emit(),y&&(this.reset(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(t,{deltaX:e,deltaY:n}){const i=Date.now();t._lenis||(t._lenis={});const r=t._lenis;let s,a,o,l,c,f,p,h,v,_;if(i-(r.time??0)>2e3){r.time=Date.now();const C=window.getComputedStyle(t);if(r.computedStyle=C,s=["auto","overlay","scroll"].includes(C.overflowX),a=["auto","overlay","scroll"].includes(C.overflowY),c=["auto"].includes(C.overscrollBehaviorX),f=["auto"].includes(C.overscrollBehaviorY),r.hasOverflowX=s,r.hasOverflowY=a,!(s||a))return!1;p=t.scrollWidth,h=t.scrollHeight,v=t.clientWidth,_=t.clientHeight,o=p>v,l=h>_,r.isScrollableX=o,r.isScrollableY=l,r.scrollWidth=p,r.scrollHeight=h,r.clientWidth=v,r.clientHeight=_,r.hasOverscrollBehaviorX=c,r.hasOverscrollBehaviorY=f}else o=r.isScrollableX,l=r.isScrollableY,s=r.hasOverflowX,a=r.hasOverflowY,p=r.scrollWidth,h=r.scrollHeight,v=r.clientWidth,_=r.clientHeight,c=r.hasOverscrollBehaviorX,f=r.hasOverscrollBehaviorY;if(!(s&&o||a&&l))return!1;const y=Math.abs(e)>=Math.abs(n)?"horizontal":"vertical";let m,u,g,x,E,R;if(y==="horizontal")m=Math.round(t.scrollLeft),u=p-v,g=e,x=s,E=o,R=c;else if(y==="vertical")m=Math.round(t.scrollTop),u=h-_,g=n,x=a,E=l,R=f;else return!1;return!R&&(m>=u||m<=0)?!0:(g>0?m<u:m>0)&&x&&E}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const t=this.options.wrapper;return this.isHorizontal?t.scrollX??t.scrollLeft:t.scrollY??t.scrollTop}get scroll(){return this.options.infinite?Px(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(t){this._isScrolling!==t&&(this._isScrolling=t,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(t){this._isStopped!==t&&(this._isStopped=t,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(t){this._isLocked!==t&&(this._isLocked=t,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let t="lenis";return this.options.autoToggle&&(t+=" lenis-autoToggle"),this.isStopped&&(t+=" lenis-stopped"),this.isLocked&&(t+=" lenis-locked"),this.isScrolling&&(t+=" lenis-scrolling"),this.isScrolling==="smooth"&&(t+=" lenis-smooth"),t}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(t=>{this.rootElement.classList.add(t)})}cleanUpClassName(){for(const t of Array.from(this.rootElement.classList))(t==="lenis"||t.startsWith("lenis-"))&&this.rootElement.classList.remove(t)}};function Ox(){const t=fe.useRef(null);return fe.useEffect(()=>{const e=t.current;if(!e)return;const n=e.getContext("2d");if(!n)return;let i,r=e.width=window.innerWidth,s=e.height=window.innerHeight;const a={x:-1e3,y:-1e3,targetX:-1e3,targetY:-1e3,radius:150};let o=[];const l=S=>{a.targetX=S.clientX,a.targetY=S.clientY},c=()=>{a.targetX=-1e3,a.targetY=-1e3},f=S=>{S.target.tagName==="A"||S.target.tagName==="BUTTON"||S.target.closest("a")||S.target.closest("button")||S.target.closest("input")||S.target.closest("textarea")||S.target.closest(".user-profile-badge")||S.target.closest(".settings-toggle")||S.target.closest(".project-sidebar")||S.target.closest(".auth-fullscreen-overlay")||S.target.closest(".mobile-menu")||S.target.closest(".settings-panel")||o.push({x:S.clientX,y:S.clientY+window.scrollY,radius:0,maxRadius:380,speed:9,force:110,width:65})},p=S=>{if(S.touches.length>0){const T=S.touches[0];a.targetX=T.clientX,a.targetY=T.clientY;const P=document.elementFromPoint(T.clientX,T.clientY);if(P&&(P.tagName==="A"||P.tagName==="BUTTON"||P.closest("a")||P.closest("button")||P.closest("input")||P.closest("textarea")||P.closest(".user-profile-badge")||P.closest(".settings-toggle")||P.closest(".project-sidebar")||P.closest(".auth-fullscreen-overlay")||P.closest(".mobile-menu")||P.closest(".settings-panel")))return;o.push({x:T.clientX,y:T.clientY+window.scrollY,radius:0,maxRadius:280,speed:8,force:90,width:50})}},h=S=>{if(S.touches.length>0){const T=S.touches[0];a.targetX=T.clientX,a.targetY=T.clientY}},v=()=>{a.targetX=-1e3,a.targetY=-1e3};window.addEventListener("mousemove",l),window.addEventListener("mouseleave",c),window.addEventListener("mousedown",f),window.addEventListener("touchstart",p,{passive:!0}),window.addEventListener("touchmove",h,{passive:!0}),window.addEventListener("touchend",v,{passive:!0});let _=[];const y=40;let m=Math.ceil(r/y)+1,u=8e3,g=Math.ceil(u/y)+1;const x=()=>{r=e.width=window.innerWidth,s=e.height=window.innerHeight,m=Math.ceil(r/y)+1,g=Math.ceil(u/y)+1,_=[];for(let S=0;S<g;S++)for(let T=0;T<m;T++){const P=T*y-(m*y-r)/2,Y=S*y;_.push({homeX:P,homeY:Y,x:P+(Math.random()-.5)*8,y:Y+(Math.random()-.5)*8,vx:0,vy:0,radius:1.5+Math.random()*.7,activation:0})}};x(),window.addEventListener("resize",x);let E=0;const R=.045,C=.88,w=48,F=()=>{E+=1,n.clearRect(0,0,r,s);const S=window.scrollY;let T=-1e3,P=-1e3;a.targetX===-1e3?(a.x+=(-1e3-a.x)*.1,a.y+=(-1e3-a.y)*.1):(a.x+=(a.targetX-a.x)*.18,a.y+=(a.targetY-a.y)*.18,T=a.x,P=a.y+S),o.forEach(D=>{D.radius+=D.speed}),o=o.filter(D=>D.radius<D.maxRadius);const Y=Math.max(0,Math.floor((S-120)/y)),ie=Math.min(g,Math.ceil((S+s+120)/y));for(let D=Y;D<ie;D++)for(let H=0;H<m;H++){const $=D*m+H,B=_[$];if(!B)continue;const U=Math.sin(E*.015+B.homeY*.008)*2.5,z=Math.cos(E*.012+B.homeX*.008)*2.5;let N=0,I=0;if(T!==-1e3){const be=B.x-T,k=B.y-P,qe=Math.sqrt(be*be+k*k);if(qe<a.radius){const _e=(a.radius-qe)/a.radius,Q=Math.pow(_e,1.5),J=Math.atan2(k,be);N=Math.cos(J)*Q*w,I=Math.sin(J)*Q*w,B.activation=Math.max(B.activation,_e)}else B.activation*=.94}else B.activation*=.94;o.forEach(be=>{const k=B.x-be.x,qe=B.y-be.y,_e=Math.sqrt(k*k+qe*qe),Q=Math.abs(_e-be.radius);if(Q<be.width){const J=1-Q/be.width,de=1-be.radius/be.maxRadius,me=J*de,A=Math.atan2(qe,k),M=me*be.force*.12;B.vx+=Math.cos(A)*M,B.vy+=Math.sin(A)*M,B.activation=Math.max(B.activation,me*.85)}});const K=B.homeX+N+U,j=B.homeY+I+z;B.vx+=(K-B.x)*R,B.vy+=(j-B.y)*R,B.vx*=C,B.vy*=C,B.x+=B.vx,B.y+=B.vy;const Z=B.x,ae=B.y-S;if(H<m-1){const be=D*m+(H+1),k=_[be];if(k){const qe=Math.max(B.activation,k.activation),_e=.08+qe*.16;qe>.01?n.strokeStyle=`hsla(${265-qe*85}, 80%, 60%, ${_e})`:n.strokeStyle=`rgba(139, 92, 246, ${_e})`,n.beginPath(),n.moveTo(Z,ae),n.lineTo(k.x,k.y-S),n.stroke()}}if(D<g-1){const be=(D+1)*m+H,k=_[be];if(k){const qe=Math.max(B.activation,k.activation),_e=.08+qe*.16;qe>.01?n.strokeStyle=`hsla(${265-qe*85}, 80%, 60%, ${_e})`:n.strokeStyle=`rgba(139, 92, 246, ${_e})`,n.beginPath(),n.moveTo(Z,ae),n.lineTo(k.x,k.y-S),n.stroke()}}const pe=265-B.activation*85,ge=55+B.activation*45,ye=48+B.activation*22,Re=.32+B.activation*.55,Te=B.radius+B.activation*1.6;B.activation>.05&&(n.fillStyle=`hsla(${pe}, ${ge}%, ${ye}%, ${B.activation*.12})`,n.beginPath(),n.arc(Z,ae,Te*3.5,0,Math.PI*2),n.fill()),n.fillStyle=`hsla(${pe}, ${ge}%, ${ye}%, ${Re})`,n.beginPath(),n.arc(Z,ae,Te,0,Math.PI*2),n.fill()}i=requestAnimationFrame(F)};return F(),()=>{cancelAnimationFrame(i),window.removeEventListener("mousemove",l),window.removeEventListener("mouseleave",c),window.removeEventListener("mousedown",f),window.removeEventListener("touchstart",p),window.removeEventListener("touchmove",h),window.removeEventListener("touchend",v),window.removeEventListener("resize",x)}},[]),d.jsx("canvas",{ref:t,className:"interactive-dots-canvas"})}const zx={},Sf=t=>{let e;const n=new Set,i=(f,p)=>{const h=typeof f=="function"?f(e):f;if(!Object.is(h,e)){const v=e;e=p??(typeof h!="object"||h===null)?h:Object.assign({},e,h),n.forEach(_=>_(e,v))}},r=()=>e,l={setState:i,getState:r,getInitialState:()=>c,subscribe:f=>(n.add(f),()=>n.delete(f)),destroy:()=>{(zx?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},c=e=t(i,r,l);return l},Bx=t=>t?Sf(t):Sf;var cv={exports:{}},uv={},dv={exports:{}},hv={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ys=fe;function Hx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var jx=typeof Object.is=="function"?Object.is:Hx,Gx=ys.useState,Vx=ys.useEffect,Wx=ys.useLayoutEffect,Xx=ys.useDebugValue;function qx(t,e){var n=e(),i=Gx({inst:{value:n,getSnapshot:e}}),r=i[0].inst,s=i[1];return Wx(function(){r.value=n,r.getSnapshot=e,_c(r)&&s({inst:r})},[t,n,e]),Vx(function(){return _c(r)&&s({inst:r}),t(function(){_c(r)&&s({inst:r})})},[t]),Xx(n),n}function _c(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!jx(t,n)}catch{return!0}}function Yx(t,e){return e()}var $x=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?Yx:qx;hv.useSyncExternalStore=ys.useSyncExternalStore!==void 0?ys.useSyncExternalStore:$x;dv.exports=hv;var Kx=dv.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fl=fe,Zx=Kx;function Qx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Jx=typeof Object.is=="function"?Object.is:Qx,ey=Zx.useSyncExternalStore,ty=Fl.useRef,ny=Fl.useEffect,iy=Fl.useMemo,ry=Fl.useDebugValue;uv.useSyncExternalStoreWithSelector=function(t,e,n,i,r){var s=ty(null);if(s.current===null){var a={hasValue:!1,value:null};s.current=a}else a=s.current;s=iy(function(){function l(v){if(!c){if(c=!0,f=v,v=i(v),r!==void 0&&a.hasValue){var _=a.value;if(r(_,v))return p=_}return p=v}if(_=p,Jx(f,v))return _;var y=i(v);return r!==void 0&&r(_,y)?(f=v,_):(f=v,p=y)}var c=!1,f,p,h=n===void 0?null:n;return[function(){return l(e())},h===null?void 0:function(){return l(h())}]},[e,n,i,r]);var o=ey(t,s[0],s[1]);return ny(function(){a.hasValue=!0,a.value=o},[o]),ry(o),o};cv.exports=uv;var sy=cv.exports;const ay=qp(sy),fv={},{useDebugValue:oy}=rm,{useSyncExternalStoreWithSelector:ly}=ay;let Ef=!1;const cy=t=>t;function uy(t,e=cy,n){(fv?"production":void 0)!=="production"&&n&&!Ef&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),Ef=!0);const i=ly(t.subscribe,t.getState,t.getServerState||t.getInitialState,e,n);return oy(i),i}const Mf=t=>{(fv?"production":void 0)!=="production"&&typeof t!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const e=typeof t=="function"?Bx(t):t,n=(i,r)=>uy(e,i,r);return Object.assign(n,e),n},Xd=t=>t?Mf(t):Mf,un=[{id:"avatar-1",colors:["#ff416c","#ff4b2b"],name:"Crimson Sunset"},{id:"avatar-2",colors:["#a855f7","#3b82f6"],name:"Nebula Cyber"},{id:"avatar-3",colors:["#10b981","#059669"],name:"Teal Forest"},{id:"avatar-4",colors:["#f59e0b","#e11d48"],name:"Solar Flare"},{id:"avatar-5",colors:["#ec4899","#8b5cf6"],name:"Cosmic Fuchsia"},{id:"avatar-6",colors:["#06b6d4","#3b82f6"],name:"Cyan Ocean"}],ul=t=>{const e=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100"><defs><linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:${t[0]};stop-opacity:1" /><stop offset="100%" style="stop-color:${t[1]};stop-opacity:1" /></linearGradient></defs><circle cx="50" cy="50" r="50" fill="url(#grad)" /></svg>`;return`data:image/svg+xml;utf8,${encodeURIComponent(e)}`},dy=()=>{try{const t=localStorage.getItem("qix-auth-storage");if(t){const e=JSON.parse(t);if(e&&e.state)return{user:e.state.user||null,isLoggedIn:!!e.state.isLoggedIn}}}catch(t){console.error("Failed to load persisted auth state:",t)}return{user:null,isLoggedIn:!1}},Tf=dy(),pr=Xd(t=>({user:Tf.user,isLoggedIn:Tf.isLoggedIn,login:(e,n,i)=>{const r={email:e,name:n,avatar:i||ul(un[0].colors)};t({isLoggedIn:!0,user:r});try{localStorage.setItem("qix-auth-storage",JSON.stringify({state:{isLoggedIn:!0,user:r}}))}catch(s){console.error("Failed to persist auth state:",s)}},logout:()=>{t({isLoggedIn:!1,user:null});try{localStorage.removeItem("qix-auth-storage")}catch(e){console.error("Failed to remove persisted auth state:",e)}}})),hy=()=>{if(typeof window>"u")return"ru";const e=(navigator.language||navigator.userLanguage||"ru").substring(0,2).toLowerCase();return["ru","uz","en"].includes(e)?e:"ru"},qd={en:{services:"Services",expertise:"Expertise",scale:"Scale",login:"Log In",logout:"Log Out",startProject:"Start Project",disconnect:"Disconnect",heroTitle:"The Best Web Studio in Uzbekistan.",heroTitleSub:"Making websites beautifully.",heroDesc:"We design, develop, and launch high-performance websites and mobile apps. We handle the engineering so you can grow.",heroStatsProjects:"Projects Launched",heroStatsUptime:"Uptime SLA",heroStatsUsers:"Active Users",whatWeDo:"What We Do",engineeredStability:"Engineered for stability.",designedGrowth:"Designed for growth.",cardWebTitle:"Custom Web Development",cardWebDesc:"High-performance, secure, and SEO-optimized web systems built with modern frameworks (React, Next.js, Node.js) that load instantly.",cardAppTitle:"iOS & Android Apps",cardAppDesc:"Native & cross-platform applications crafted for optimal user experiences, from design to submission in the App Store and Google Play.",cardDesignTitle:"UI/UX Interface Design",cardDesignDesc:"Visual design systems that communicate brand trust. Pixel-perfect, accessible, and structured user flows that drive customer conversion.",cardCloudTitle:"Cloud Infrastructure",cardCloudDesc:"Reliable CI/CD pipelines, containerized orchestration (Docker/Kubernetes), and scalable architecture setups on AWS, GCP, and Vercel.",cardApiTitle:"Integrations & API Design",cardApiDesc:"Seamless connections to CRMs, payment gateways, ERP pipelines, and secure enterprise backend services.",cardSupportTitle:"Support & Optimization",cardSupportDesc:"Post-launch support, performance audits, page speed optimization, security updates, and database maintenance to keep apps healthy.",researchAreas:"Research Areas",threePillars:"Three pillars",scientificExecution:"of scientific execution",pillar1Title:"High-Performance Web Engines",pillar1Desc:"Building sub-second loading web applications using edge-rendering, caching layers, and clean, modular component structures.",pillar2Title:"Fluid Native Mobile Frameworks",pillar2Desc:"Crafting mobile software that utilizes GPU hardware acceleration for smooth 120Hz animations, local databases, and offline accessibility.",pillar3Title:"Secure & Automated Cloud",pillar3Desc:"Deploying auto-scaling cloud clusters protected by firewalls, standard authorization models, and fully automated deployment workflows.",selectedWork:"Selected Work",caseStudies:"Case studies",builtSolutions:"of solutions built",visitWebsite:"Visit Website",viewCase:"View Case Study",byNumbers:"By The Numbers",scaleSpeaks:"Scale that speaks",itself:"for itself",numCardProjects:"Web & mobile projects launched successfully",numCardUptime:"Uptime and build reliability standards",numCardEngineers:"Experienced engineers and product designers",numCardSpeed:"Average load speed improvement for clients",getInvolved:"Get Involved",nextBreakthrough:"The next breakthrough",startsYou:"starts with you",ctaDesc:"Have a website or mobile application concept? Let our team handle the engineering, design, and deployment. We launch products under iOS, Android, and Web platforms.",footerCopy:"Quality • Intelligence • Experience. All rights reserved.",establishIdentity:"Establish Identity",authSubtitle:"Create your developer profile and choose an avatar to authorize secure connections.",fullName:"Full Name",emailAddr:"Email Address",chooseAvatar:"Choose Avatar Identity",password:"Password",createAccount:"Create Account",newWorkspace:"New Workspace",workspaceSubtitle:"Outline the requirements and specify features for your sandbox project. Our AI will analyze your specifications and generate an estimate.",workspaceName:"Workspace Name",envEngine:"Environment Engine",projRequirements:"Project Requirements (AI Analysis)",analyzeReqs:"Analyze Requirements",neuralAssessment:"Neural Assessment",radarSubtitle:"Our neural interpreter is analyzing requirements and estimating resources.",aiCostBreakdown:"AI Cost Breakdown",aiSubtitle:"Based on your requirements, the AI has compiled the following invoice quote.",projectTarget:"Project Target",timeline:"Timeline",itemizedTasks:"Itemized Tasks",invoicedTotal:"Invoiced Total",proceedCheckout:"Proceed to Checkout",confirmPayment:"Confirm Payment",p2pSender:"Your card or phone number (Sender)",p2pReceipt:"Transaction ID / Receipt Code (Click / Payme)",workspaceActive:"Workspace Active!",receiptEmailed:"Transaction confirmed. A billing copy of your receipt has been dispatched to your e-mail.",amountPaid:"Amount Paid:",method:"Method:",status:"Status:",online:"Online",successFooter:"An email with details has been sent. We will verify the receipt ID and contact you within 15 minutes.",returnHome:"Return to Home",connectWorkspace:"Proceed to Workspace",connectingAuth:"Connecting to secure auth gateway...",creatingProfile:"Creating secure developer profile...",syncingAvatar:"Syncing custom avatar identity...",accessGranted:"Access Granted!",authorized:"Authorized",authPrompt:"You can now proceed to initialize your first project workspace."},ru:{services:"Услуги",expertise:"Экспертиза",scale:"Масштаб",login:"Войти",logout:"Выйти",startProject:"Начать проект",disconnect:"Выйти",heroTitle:"Лучшая веб-студия в Узбекистане.",heroTitleSub:"Делаем сайты красиво.",heroDesc:"Проектируем, разрабатываем и запускаем быстрые сайты и мобильные приложения. Берем на себя инженерию, чтобы вы могли расти.",heroStatsProjects:"Проектов запущено",heroStatsUptime:"Время работы SLA",heroStatsUsers:"Пользователей",whatWeDo:"Что мы делаем",engineeredStability:"Разработано для стабильности.",designedGrowth:"Создано для роста.",cardWebTitle:"Разработка сайтов",cardWebDesc:"Высокопроизводительные, безопасные и SEO-оптимизированные веб-системы на современных фреймворках (React, Next.js, Node.js) с мгновенной загрузкой.",cardAppTitle:"Приложения iOS & Android",cardAppDesc:"Нативные и кроссплатформенные мобильные приложения с упором на UX, от дизайна до публикации в App Store и Google Play.",cardDesignTitle:"UI/UX Дизайн интерфейсов",cardDesignDesc:"Визуальные дизайн-системы, вызывающие доверие к бренду. Пиксельно-точные, доступные и конвертирующие пользовательские интерфейсы.",cardCloudTitle:"Облачная инфраструктура",cardCloudDesc:"Надежные CI/CD пайплайны, контейнеризация (Docker/Kubernetes) и масштабируемая архитектура на AWS, GCP и Vercel.",cardApiTitle:"Интеграции и API",cardApiDesc:"Бесшовное подключение CRM-систем, платежных шлюзов, ERP-каналов и защищенных корпоративных бэкенд-сервисов.",cardSupportTitle:"Поддержка и оптимизация",cardSupportDesc:"Послепусковая поддержка, аудит производительности, оптимизация скорости, обновления безопасности и обслуживание баз данных.",researchAreas:"Направления",threePillars:"Три столпа",scientificExecution:"научного исполнения",pillar1Title:"Высокопроизводительные веб-движки",pillar1Desc:"Создание веб-приложений с субсекундной загрузкой с использованием рендеринга на границе сети, слоев кэширования и чистой модульной архитектуры.",pillar2Title:"Адаптивные мобильные фреймворки",pillar2Desc:"Разработка мобильного ПО с аппаратным ускорением GPU для плавных анимаций 120 Гц, локальными БД и оффлайн-доступом.",pillar3Title:"Безопасное и автоматизированное облако",pillar3Desc:"Развертывание облачных кластеров с автоматическим масштабированием, защищенных файрволами, стандартными моделями авторизации и CI/CD.",selectedWork:"Портфолио",caseStudies:"Кейсы решений",builtSolutions:"готовых к запуску",visitWebsite:"Перейти на сайт",viewCase:"Смотреть кейс",byNumbers:"В цифрах",scaleSpeaks:"Масштаб, который говорит",itself:"сам за себя",numCardProjects:"Успешно запущенных веб- и мобильных проектов",numCardUptime:"Стандарты надежности аптайма и сборок",numCardEngineers:"Опытных инженеров и дизайнеров продуктов",numCardSpeed:"Среднее ускорение загрузки сайтов клиентов",getInvolved:"Сотрудничество",nextBreakthrough:"Следующий прорыв",startsYou:"начинается с вас",ctaDesc:"Есть идея сайта или мобильного приложения? Наша команда возьмет на себя проектирование, дизайн и деплой на iOS, Android и Web.",footerCopy:"Качество • Интеллект • Опыт. Все права защищены.",establishIdentity:"Создать профиль",authSubtitle:"Создайте профиль разработчика и выберите аватар для авторизации безопасного соединения.",fullName:"Полное имя",emailAddr:"Электронная почта",chooseAvatar:"Выберите аватар",password:"Пароль",createAccount:"Создать аккаунт",newWorkspace:"Новая рабочая область",workspaceSubtitle:"Опишите ваши требования и укажите функции песочницы. Наш ИИ проанализирует параметры и рассчитает смету.",workspaceName:"Имя рабочей области",envEngine:"Движок окружения",projRequirements:"Требования к проекту (AI-анализ)",analyzeReqs:"Анализировать требования",neuralAssessment:"Нейросетевой анализ",radarSubtitle:"Наш нейросетевой анализатор изучает требования и оценивает ресурсы.",aiCostBreakdown:"Смета от ИИ",aiSubtitle:"На основе ваших требований ИИ сформировал следующий счет-смету.",projectTarget:"Цель проекта",timeline:"Сроки выполнения",itemizedTasks:"Задачи сметы",invoicedTotal:"Итого к оплате",proceedCheckout:"Перейти к оплате",confirmPayment:"Подтвердить оплату",p2pSender:"Ваша карта или телефон (Отправитель)",p2pReceipt:"ID транзакции / Код чека (Click / Payme)",workspaceActive:"Песочница создана!",receiptEmailed:"Транзакция подтверждена. Электронный чек отправлен на ваш e-mail.",amountPaid:"Сумма перевода:",method:"Метод:",status:"Статус:",online:"Активен",successFooter:"Детали зачисления отправлены на почту. Мы проверим ID чека и свяжемся с вами в течение 15 минут.",returnHome:"Вернуться на главную",connectWorkspace:"Перейти к песочнице",connectingAuth:"Подключение к шлюзу авторизации...",creatingProfile:"Создание безопасного профиля...",syncingAvatar:"Синхронизация аватара...",accessGranted:"Доступ разрешен!",authorized:"Авторизован",authPrompt:"Теперь вы можете перейти к созданию своей первой рабочей области."},uz:{services:"Xizmatlar",expertise:"Ekspertiza",scale:"Miqyos",login:"Kirish",logout:"Chiqish",startProject:"Loyihani boshlash",disconnect:"Chiqish",heroTitle:"O'zbekistondagi eng yaxshi veb-studiya.",heroTitleSub:"Saytlarni chiroyli qilamiz.",heroDesc:"Tezkor veb-saytlar va mobil ilovalarni loyihalashtiramiz, ishlab chiqamiz va ishga tushiramiz. Biz texnologiyalarni o'z zimmamizga olamiz, toki siz o'sa olasiz.",heroStatsProjects:"Loyihalar ishga tushirilgan",heroStatsUptime:"SLA Uptime vaqti",heroStatsUsers:"Foydalanuvchilar",whatWeDo:"Biz nima qilamiz",engineeredStability:"Barqarorlik uchun mo'ljallangan.",designedGrowth:"O'sish uchun yaratilgan.",cardWebTitle:"Veb-saytlar yaratish",cardWebDesc:"Zamonaviy freymvorklarda (React, Next.js, Node.js) yaratilgan, tez yuklanadigan, xavfsiz va SEO-optimallashtirilgan veb-tizimlar.",cardAppTitle:"iOS va Android ilovalar",cardAppDesc:"UX-ga yo'naltirilgan, dizayndan tortib App Store va Google Play-da chop etishgacha bo'lgan nativ va krossplatformali mobil ilovalar.",cardDesignTitle:"UI/UX Interface dizayni",cardDesignDesc:"Brendga ishonch uyg'otadigan vizual dizayn tizimlari. Piksel darajasida aniq, qulay va mijozlarni jalb etuvchi interfeyslar.",cardCloudTitle:"Bulutli infratuzilma",cardCloudDesc:"AWS, GCP va Vercel platformalarida ishonchli CI/CD quvurlari, konteynerlashtirish (Docker/Kubernetes) va kengayuvchi arxitektura.",cardApiTitle:"Integratsiyalar va API",cardApiDesc:"CRM tizimlar, to'lov shlyuzlari, ERP kanallari va xavfsiz korporativ backend xizmatlarini uzluksiz ulash.",cardSupportTitle:"Qo'llab-quvvatlash va optimallashtirish",cardSupportDesc:"Ishga tushirilgandan keyingi yordam, samaradorlik auditi, tezlikni optimallashtirish, xavfsizlik yangilanishlari va MB xizmati.",researchAreas:"Tadqiqot yo'nalishlari",threePillars:"Uchta ustun",scientificExecution:"ilmiy bajarilish",pillar1Title:"Yuqori samarali veb-dvigatellar",pillar1Desc:"Edge rendering, kesh qatlamlari va toza modulli arxitektura yordamida soniyadan kam vaqtda yuklanadigan veb-ilovalar yaratish.",pillar2Title:"Moslashuvchan mobil freymvorklar",pillar2Desc:"Silliq 120Hz animatsiyalar, lokal MB va oflayn rejim uchun GPU apparat tezlashuvidan foydalanadigan mobil dasturlar yaratish.",pillar3Title:"Xavfsiz va avtomatlashtirilgan bulut",pillar3Desc:"Tarmoq ekranlari, standart avtorizatsiya va to'liq avtomatlashtirilgan CI/CD bilan himoyalangan avtomatik kengayuvchi bulut klasterlari.",selectedWork:"Tanlangan ishlar",caseStudies:"Tayyor yechimlar",builtSolutions:"keyslari",visitWebsite:"Saytga o'tish",viewCase:"Keysni ko'rish",byNumbers:"Raqamlarda",scaleSpeaks:"O'z-o'zidan gapiradigan",itself:"miqyos",numCardProjects:"Muvaffaqiyatli ishga tushirilgan veb va mobil loyihalar",numCardUptime:"Uptime va yig'ishning ishonchlilik standartlari",numCardEngineers:"Tajribali muhandislar va mahsulot dizaynerlari",numCardSpeed:"Mijozlar saytlari yuklanishining o'rtacha tezlashishi",getInvolved:"Hamkorlik",nextBreakthrough:"Keyingi yutuq",startsYou:"sizdan boshlanadi",ctaDesc:"Sayt yoki mobil ilova g'oyangiz bormi? Jamoamiz loyihalash, dizayn va iOS, Android hamda Web platformalarida ishga tushirishni o'z zimmasiga oladi.",footerCopy:"Sifat • Intellekt • Tajriba. Barcha huquqlar himoyalangan.",establishIdentity:"Shaxsni tasdiqlash",authSubtitle:"Xavfsiz ulanishni avtorizatsiya qilish uchun ishlab chiquvchi profilini yarating va avatar tanlang.",fullName:"To'liq ism",emailAddr:"Elektron pochta",chooseAvatar:"Avatar tanlang",password:"Parol",createAccount:"Hisob yaratish",newWorkspace:"Yangi ish maydoni",workspaceSubtitle:"Loyiha talablarini tavsiflang va parametrlarini ko'rsating. Bizning Sun'iy intellekt smetani hisoblab beradi.",workspaceName:"Ish maydoni nomi",envEngine:"Atrof-muhit dvigateli",projRequirements:"Loyiha talablari (AI-tahlil)",analyzeReqs:"Talablarni tahlil qilish",neuralAssessment:"Neyrotahlil",radarSubtitle:"Bizning neyrotahlil tizimimiz talablarni o'rganib chiqib, resurslarni baholamoqda.",aiCostBreakdown:"AI smetasi",aiSubtitle:"Sizning talablaringiz asosida Sun'iy intellekt quyidagi hisob-smetani shakllantirdi.",projectTarget:"Loyiha maqsadi",timeline:"Bajarilish muddati",itemizedTasks:"Smeta vazifalari",invoicedTotal:"Jami to'lov",proceedCheckout:"To'lovga o'tish",confirmPayment:"To'lovni tasdiqlash",p2pSender:"Koyangiz yoki telefon raqamingiz (Yuboruvchi)",p2pReceipt:"Tranzaksiya ID / Chek kodi (Click / Payme)",workspaceActive:"Ish maydoni yaratildi!",receiptEmailed:"Tranzaksiya tasdiqlandi. Elektron chek emailingizga yuborildi.",amountPaid:"To'lov summasi:",method:"Uslub:",status:"Holat:",online:"Faol",successFooter:"To'lov tafsilotlari yuborildi. Biz chek ID-sini tekshirib, 15 daqiqa ichida siz bilan bog'lanamiz.",returnHome:"Bosh sahifaga qaytish",connectWorkspace:"Ish maydoniga o'tish",connectingAuth:"Avtorizatsiya shlyuziga ulanish...",creatingProfile:"Xavfsiz profil yaratish...",syncingAvatar:"Avatarni sinxronlashtirish...",accessGranted:"Ruxsat berildi!",authorized:"Avtorizatsiyadan o'tdi",authPrompt:"Endi siz birinchi ish maydoningizni yaratishga o'tishingiz mumkin."}},dl=Xd(t=>({lang:hy(),setLang:e=>t({lang:e})}));function fy({isOpen:t,onClose:e}){var _e;const[n,i]=fe.useState(1),[r,s]=fe.useState(""),[a,o]=fe.useState(""),[l,c]=fe.useState(""),[f,p]=fe.useState(un[0].id),[h,v]=fe.useState({}),[_,y]=fe.useState(""),[m,u]=fe.useState(""),[g,x]=fe.useState("Cloud Sandbox"),[E,R]=fe.useState(""),[C,w]=fe.useState(null),[F,S]=fe.useState([]),[T,P]=fe.useState([]),[Y,ie]=fe.useState("uzcard"),[D,H]=fe.useState(""),[$,B]=fe.useState(""),[U,z]=fe.useState(!1),N=dl(Q=>Q.lang),I=qd[N],K=pr(Q=>Q.isLoggedIn),j=pr(Q=>Q.user),Z=pr(Q=>Q.login),ae=fe.useRef(null);fe.useEffect(()=>{if(!t){const Q=setTimeout(()=>{i(1),s(""),o(""),c(""),p(un[0].id),v({}),u(""),x("Cloud Sandbox"),R(""),w(null),S([]),P([]),ie("humo"),H(""),B(""),z(!1)},500);return()=>clearTimeout(Q)}},[t]),fe.useEffect(()=>{const Q=J=>{t&&ae.current&&!ae.current.contains(J.target)&&J.target.classList.contains("project-sidebar-overlay")&&e()};return document.addEventListener("mousedown",Q),()=>document.removeEventListener("mousedown",Q)},[t,e]),fe.useEffect(()=>{if(n==="ai_analysis"){S([]);const Q={en:["Initializing QIX Intelligence Engine...","Parsing architectural description notes...","Scanning specifications for core components...",`Keywords matched for [${g}] node...`,"Running deep workload analysis on edge cluster...","Compiling microservices and compute resource cost...","AI Analysis complete! Generating invoice..."],ru:["Инициализация интеллектуального движка QIX...","Парсинг примечаний по архитектуре проекта...","Сканирование спецификаций для ключевых компонентов...",`Ключевые слова сопоставлены для узла [${g}]...`,"Глубокий анализ нагрузок на пограничный кластер...","Компиляция стоимости микросервисов и ресурсов...","Анализ завершен! Создание сметы..."],uz:["QIX sun'iy intellekt tizimi yuklanmoqda...","Loyiha arxitekturasi tahlil qilinmoqda...","Asosiy komponentlar spetsifikatsiyasi o'rganilmoqda...",`[${g}] tuguni uchun kalit so'zlar mos keldi...`,"Klasterdagi yuklamaning chuqur tahlili boshlandi...","Mikroxizmatlar va resurslar narxi hisoblanmoqda...","Tahlil yakunlandi! Smeta shakllantirilmoqda..."]}[N];let J=0;const de=setInterval(()=>{if(J<Q.length)S(me=>[...me,Q[J]]),J++;else{clearInterval(de);const me=setInterval(()=>{C&&(clearInterval(me),i("invoice"))},100)}},600);return()=>clearInterval(de)}},[n,g,C,N]),fe.useEffect(()=>{if(n==="processing_payment"){P([]);const Q={en:["Connecting to secure payment gateway...","Locating transaction in Humo/Uzcard P2P ledger...","Verifying transfer reference ID with Click/Payme...","Confirming deposit to QIX Technologies vault...","Payment authorized. Transmitting invoice copy...","Initializing Sandbox container deploy context..."],ru:["Подключение к шлюзу авторизации платежей...","Поиск транзакции в реестре Humo/Uzcard...","Проверка ID перевода в базе Click/Payme...","Подтверждение зачисления на счет QIX Technologies...","Платеж авторизован. Отправка копии чека...","Инициализация контейнера песочницы..."],uz:["To'lov shlyuziga ulanish o'rnatilmoqda...","Tranzaksiyani Humo/Uzcard reestridan izlash...","Click/Payme bazasida o'tkazma ID-sini tekshirish...","QIX Technologies hisobiga pul kelganini tasdiqlash...","To'lov tasdiqlandi. Elektron chekni yuborish...","Loyiha konteyneri ishga tushirilmoqda..."]}[N];let J=0;const de=setInterval(()=>{J<Q.length?(P(me=>[...me,Q[J]]),J++):(clearInterval(de),setTimeout(()=>{i(3)},600))},600);return()=>clearInterval(de)}},[n,N]);const pe=(Q,J)=>{const de=Q.trim().toLowerCase(),me=[];let A=15e4;de.length<5?(me.push({name:`Basic Sandbox Allocation (${J})`,price:1e5}),A+=1e5):((de.includes("design")||de.includes("ui")||de.includes("ux")||de.includes("figma")||de.includes("interface"))&&(me.push({name:"Figma UI/UX Design & Prototyping",price:45e4}),A+=45e4),(de.includes("database")||de.includes("db")||de.includes("sql")||de.includes("mongo")||de.includes("data")||de.includes("backend"))&&(me.push({name:"High-Performance Database Node Setup",price:6e5}),A+=6e5),(de.includes("mobile")||de.includes("app")||de.includes("ios")||de.includes("android")||de.includes("phone"))&&(me.push({name:"Mobile Frame Native Deployment",price:9e5}),A+=9e5),(de.includes("secure")||de.includes("security")||de.includes("auth")||de.includes("crypto")||de.includes("login"))&&(me.push({name:"Cryptographic Authorization Gateway",price:65e4}),A+=65e4),me.length<2&&(me.push({name:"Core API Routing & Endpoint Infrastructure",price:4e5}),A+=4e5),me.push({name:`Edge CD Pipeline (${J})`,price:1e5}),A+=1e5);const M=new Intl.NumberFormat("uz-UZ",{style:"currency",currency:"UZS",maximumFractionDigits:0}).format(A);w({tasks:me.map(G=>({...G,price:new Intl.NumberFormat("uz-UZ",{style:"currency",currency:"UZS",maximumFractionDigits:0}).format(G.price)})),totalPriceRaw:A,totalPrice:M,timeline:A>12e5?"14 Days":"7 Days"})},ge=Q=>{navigator.clipboard.writeText(Q),z(!0),setTimeout(()=>z(!1),2e3)},ye=Q=>{Q.preventDefault();const J={};if(r.trim()||(J.name=N==="en"?"Full name is required":N==="uz"?"To'liq ism kiritilishi shart":"Имя обязательно"),a?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a)||(J.email=N==="en"?"Invalid email format":N==="uz"?"Email formati noto'g'ri":"Неверный формат email"):J.email=N==="en"?"Email is required":N==="uz"?"Email kiritilishi shart":"Email обязателен",l?l.length<6&&(J.password=N==="en"?"At least 6 characters":N==="uz"?"Kamida 6 ta belgi":"Не менее 6 символов"):J.password=N==="en"?"Password is required":N==="uz"?"Parol kiritilishi shart":"Пароль обязателен",Object.keys(J).length>0){v(J);return}v({}),i(2),y(I.connectingAuth),setTimeout(()=>{y(I.creatingProfile)},600),setTimeout(()=>{y(I.syncingAvatar)},1200),setTimeout(()=>{const me=un.find(M=>M.id===f)||un[0],A=ul(me.colors);Z(a,r.trim(),A),i(3)},1800)},Re=Q=>{Q.preventDefault();const J={};if(m.trim()||(J.projectName=N==="en"?"Project name is required":N==="uz"?"Loyiha nomi kiritilishi shart":"Имя проекта обязательно"),Object.keys(J).length>0){v(J);return}v({}),i("ai_analysis"),w(null),fetch("/api/analyze",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({projectName:m,projectType:g,projectNotes:E})}).then(de=>de.json()).then(de=>{const me=de.tasks.map(M=>{let G=M.price;return typeof M.price=="number"&&(G=new Intl.NumberFormat("uz-UZ",{style:"currency",currency:"UZS",maximumFractionDigits:0}).format(M.price)),{name:M.name,price:G}});let A=de.totalPrice;typeof de.totalPrice=="number"&&(A=new Intl.NumberFormat("uz-UZ",{style:"currency",currency:"UZS",maximumFractionDigits:0}).format(de.totalPrice)),w({tasks:me,totalPriceRaw:typeof de.totalPrice=="number"?de.totalPrice:parseFloat(String(de.totalPrice).replace(/[^0-9.]/g,"")),totalPrice:A,timeline:de.timeline||"7 Days"})}).catch(de=>{console.error("AI Analysis API failed, using fallback:",de),pe(E,g)})},Te=Q=>{Q.preventDefault();const J={};if(D.trim()||(J.senderInfo=N==="en"?"Enter sender info":N==="uz"?"Yuboruvchi ma'lumotini kiriting":"Введите данные отправителя"),$.trim()||(J.transactionId=N==="en"?"Enter receipt ID":N==="uz"?"Chek kodi kiritilishi shart":"Введите код чека"),Object.keys(J).length>0){v(J);return}v({}),i("processing_payment");const de=C.tasks.map(me=>`${me.name}: ${me.price}`).join(", ");fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({access_key:"6b251218-8d3a-4b5f-8227-259b0c552263",subject:`💳 PAID QIX Project: ${m} (${C.totalPrice})`,from_name:"QIX Technologies UZS Billing Gateway",client_name:j?j.name:"Authorized Client",client_email:j?j.email:"billing@qix.tech",workspace_name:`qix-sandbox-${m.toLowerCase().replace(/\s+/g,"-")}`,engine_type:g,total_invoiced:C.totalPrice,estimated_timeline:C.timeline,invoice_items:de,payment_status:`PAID (Simulated P2P ${Y.toUpperCase()} Transfer)`,sender_card_or_phone:D,click_payme_receipt_id:$,notes:E||"No notes provided."})}).catch(me=>console.error("Failed to dispatch payment notification:",me))},be="5614 6835 1781 0909",k="BADALBAEV.A",qe=be;return d.jsx("div",{className:`project-sidebar-overlay ${t?"open":""}`,children:d.jsxs("div",{ref:ae,className:`project-sidebar ${t?"open":""}`,children:[d.jsx("button",{className:"project-sidebar-close",onClick:e,"aria-label":"Close sidebar",children:d.jsx("svg",{viewBox:"0 0 24 24",width:"24",height:"24",children:d.jsx("path",{d:"M18 6 6 18M6 6l12 12",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),d.jsxs("div",{className:"project-sidebar-inner",children:[n===1&&d.jsx(d.Fragment,{children:K?d.jsxs("div",{className:"sidebar-step-container",children:[d.jsxs("div",{className:"sidebar-profile-header",children:[d.jsx("img",{className:"sidebar-profile-avatar",src:j.avatar,alt:j.name}),d.jsxs("div",{children:[d.jsx("h4",{className:"sidebar-profile-name",children:j.name}),d.jsx("p",{className:"sidebar-profile-email",children:j.email})]})]}),d.jsx("h3",{className:"sidebar-title font-instrument",style:{marginTop:"20px"},children:I.newWorkspace}),d.jsx("p",{className:"sidebar-subtitle",children:I.workspaceSubtitle}),d.jsxs("form",{onSubmit:Re,className:"sidebar-form",children:[d.jsxs("div",{className:"input-group",children:[d.jsx("label",{htmlFor:"proj-name",children:I.workspaceName}),d.jsx("input",{type:"text",id:"proj-name",placeholder:"my-quantum-engine",value:m,onChange:Q=>u(Q.target.value),className:h.projectName?"input-error":""}),h.projectName&&d.jsx("span",{className:"error-message-text",children:h.projectName})]}),d.jsxs("div",{className:"input-group",children:[d.jsx("label",{htmlFor:"proj-type",children:I.envEngine}),d.jsxs("select",{id:"proj-type",value:g,onChange:Q=>x(Q.target.value),style:{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"12px",padding:"14px 18px",color:"#fff",fontSize:"14px",fontFamily:"inherit",width:"100%",outline:"none",cursor:"pointer"},children:[d.jsx("option",{value:"Cloud Sandbox",style:{background:"#0a0a0f"},children:"Cloud Sandbox (General)"}),d.jsx("option",{value:"Quantum Engine",style:{background:"#0a0a0f"},children:"Quantum Simulator Node"}),d.jsx("option",{value:"AI Synthesis Node",style:{background:"#0a0a0f"},children:"AI LLM Training Kernel"})]})]}),d.jsxs("div",{className:"input-group",children:[d.jsx("label",{htmlFor:"proj-notes",children:I.projRequirements}),d.jsx("textarea",{id:"proj-notes",placeholder:N==="en"?"Example: I need Figma UI/UX, MongoDB, and deployment pipeline...":N==="uz"?"Namuna: Figma UI/UX dizayn, MongoDB va deploy quvuri kerak...":"Пример: Нужен дизайн в Figma, база данных MongoDB, и деплой проекта...",rows:"4",value:E,onChange:Q=>R(Q.target.value),style:{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"12px",padding:"14px 18px",color:"#fff",fontSize:"14px",fontFamily:"inherit",width:"100%",outline:"none",resize:"none"}})]}),d.jsx("button",{type:"submit",className:"sidebar-submit-btn",style:{marginTop:"16px"},children:d.jsxs("span",{className:"btn-content-inner",children:[d.jsxs("span",{className:"btn-slide-item",children:[d.jsx("span",{children:I.analyzeReqs}),d.jsx("svg",{className:"btn-arrow",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:d.jsx("path",{d:"M3 8h10M9 4l4 4-4 4"})})]}),d.jsxs("span",{className:"btn-slide-item btn-slide-item-hover",children:[d.jsx("span",{children:I.analyzeReqs}),d.jsx("svg",{className:"btn-arrow",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:d.jsx("path",{d:"M3 8h10M9 4l4 4-4 4"})})]})]})})]})]}):d.jsxs("div",{className:"sidebar-step-container",children:[d.jsx("div",{className:"sidebar-decor-icon",children:"✦"}),d.jsx("h3",{className:"sidebar-title font-instrument",children:I.establishIdentity}),d.jsx("p",{className:"sidebar-subtitle",children:I.authSubtitle}),d.jsxs("form",{onSubmit:ye,className:"sidebar-form",children:[d.jsxs("div",{className:"input-group",children:[d.jsx("label",{htmlFor:"auth-name",children:I.fullName}),d.jsx("input",{type:"text",id:"auth-name",placeholder:"Alex Rivera",value:r,onChange:Q=>s(Q.target.value),className:h.name?"input-error":""}),h.name&&d.jsx("span",{className:"error-message-text",children:h.name})]}),d.jsxs("div",{className:"input-group",children:[d.jsx("label",{htmlFor:"auth-email",children:I.emailAddr}),d.jsx("input",{type:"email",id:"auth-email",placeholder:"alex@gmail.com",value:a,onChange:Q=>o(Q.target.value),className:h.email?"input-error":""}),h.email&&d.jsx("span",{className:"error-message-text",children:h.email})]}),d.jsxs("div",{className:"input-group",children:[d.jsx("label",{children:I.chooseAvatar}),d.jsx("div",{className:"avatar-selection-grid",style:{marginTop:"8px",marginBottom:"8px"},children:un.map(Q=>{const J={background:`linear-gradient(135deg, ${Q.colors[0]} 0%, ${Q.colors[1]} 100%)`};return d.jsx("button",{type:"button",className:`avatar-option-btn ${f===Q.id?"active":""}`,style:J,onClick:()=>p(Q.id),"aria-label":Q.name,title:Q.name},Q.id)})})]}),d.jsxs("div",{className:"input-group",children:[d.jsx("label",{htmlFor:"auth-pass",children:I.password}),d.jsx("input",{type:"password",id:"auth-pass",placeholder:"••••••••",value:l,onChange:Q=>c(Q.target.value),className:h.password?"input-error":""}),h.password&&d.jsx("span",{className:"error-message-text",children:h.password})]}),d.jsx("button",{type:"submit",className:"sidebar-submit-btn",children:d.jsxs("span",{className:"btn-content-inner",children:[d.jsxs("span",{className:"btn-slide-item",children:[d.jsx("span",{children:I.createAccount}),d.jsx("svg",{className:"btn-arrow",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:d.jsx("path",{d:"M3 8h10M9 4l4 4-4 4"})})]}),d.jsxs("span",{className:"btn-slide-item btn-slide-item-hover",children:[d.jsx("span",{children:I.createAccount}),d.jsx("svg",{className:"btn-arrow",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:d.jsx("path",{d:"M3 8h10M9 4l4 4-4 4"})})]})]})})]})]})}),n==="ai_analysis"&&d.jsxs("div",{className:"sidebar-step-container",children:[d.jsx("h3",{className:"sidebar-title font-instrument",children:I.neuralAssessment}),d.jsx("p",{className:"sidebar-subtitle",children:I.radarSubtitle}),d.jsxs("div",{className:"ai-analysis-radar",children:[d.jsx("div",{className:"radar-ring"}),d.jsx("div",{className:"radar-sweep"}),d.jsx("div",{className:"radar-core"})]}),d.jsx("div",{className:"analysis-log-container",children:F.map((Q,J)=>d.jsxs("div",{className:"analysis-log-line",children:[d.jsx("span",{style:{color:"#a855f7",marginRight:"6px"},children:">"}),Q]},J))})]}),n==="invoice"&&C&&d.jsxs("div",{className:"sidebar-step-container",children:[d.jsx("h3",{className:"sidebar-title font-instrument",children:I.aiCostBreakdown}),d.jsx("p",{className:"sidebar-subtitle",children:I.aiSubtitle}),d.jsxs("div",{className:"invoice-container",children:[d.jsxs("div",{className:"invoice-header-row",children:[d.jsxs("div",{children:[d.jsx("span",{className:"invoice-label",children:I.projectTarget}),d.jsx("div",{className:"invoice-val",children:m})]}),d.jsxs("div",{style:{textAlign:"right"},children:[d.jsx("span",{className:"invoice-label",children:I.timeline}),d.jsx("div",{className:"invoice-val",children:C.timeline})]})]}),d.jsxs("div",{className:"invoice-task-list",children:[d.jsx("span",{className:"invoice-label",children:I.itemizedTasks}),C.tasks.map((Q,J)=>d.jsxs("div",{className:"invoice-task-item",children:[d.jsx("span",{className:"invoice-task-name",children:Q.name}),d.jsx("span",{className:"invoice-task-price",children:Q.price})]},J))]}),d.jsxs("div",{className:"invoice-total-row",children:[d.jsxs("div",{children:[d.jsx("span",{className:"invoice-label",children:I.invoicedTotal}),d.jsx("p",{style:{fontSize:"11px",color:"rgba(255, 255, 255, 0.4)"},children:N==="en"?"Commission 0%":N==="uz"?"Komissiya 0%":"Комиссия 0%"})]}),d.jsx("div",{className:"invoice-total-price",children:C.totalPrice})]})]}),d.jsx("button",{className:"sidebar-submit-btn",onClick:()=>i("checkout"),children:d.jsxs("span",{className:"btn-content-inner",children:[d.jsxs("span",{className:"btn-slide-item",children:[d.jsx("span",{children:I.proceedCheckout}),d.jsx("svg",{className:"btn-arrow",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:d.jsx("path",{d:"M3 8h10M9 4l4 4-4 4"})})]}),d.jsxs("span",{className:"btn-slide-item btn-slide-item-hover",children:[d.jsx("span",{children:I.proceedCheckout}),d.jsx("svg",{className:"btn-arrow",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:d.jsx("path",{d:"M3 8h10M9 4l4 4-4 4"})})]})]})})]}),n==="checkout"&&C&&d.jsxs("div",{className:"sidebar-step-container",children:[d.jsx("h3",{className:"sidebar-title font-instrument",children:"Uzcard P2P"}),d.jsxs("p",{className:"sidebar-subtitle",style:{marginBottom:"16px"},children:[N==="en"?"Transfer ":N==="uz"?"O'tkazing: ":"Переведите ",d.jsx("strong",{children:C.totalPrice}),N==="en"?" to the card below via local mobile banking (Uzcard) and paste your transaction receipt code.":N==="uz"?" quyidagi kartaga va tasdiqlash uchun chek ID-sini kiriting.":" на карту ниже через Click/Payme и вставьте код чека для подтверждения."]}),d.jsxs("div",{className:"checkout-card-preview uzcard-theme",children:[d.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start"},children:[d.jsx("div",{className:"card-preview-chip"}),d.jsx("span",{style:{fontSize:"13px",fontWeight:"800",letterSpacing:"1px",color:"#fff"},children:"UZCARD"})]}),d.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:"16px"},children:[d.jsx("div",{className:"card-preview-number",style:{marginTop:0,fontSize:"18px"},children:qe}),d.jsx("button",{type:"button",onClick:()=>ge(qe.replace(/\s/g,"")),style:{background:"rgba(255,255,255,0.1)",border:"1px solid rgba(255,255,255,0.2)",borderRadius:"6px",color:"#fff",fontSize:"10px",padding:"4px 8px",cursor:"pointer",transition:"all 0.2s"},children:U?"Copied!":"Copy"})]}),d.jsxs("div",{className:"card-preview-bottom",children:[d.jsxs("div",{children:[d.jsx("div",{className:"card-preview-holder",children:N==="en"?"Recipient":N==="uz"?"Qabul qiluvchi":"Получатель"}),d.jsx("div",{style:{fontSize:"13px",fontWeight:"600"},children:k})]}),d.jsxs("div",{style:{textAlign:"right"},children:[d.jsx("div",{className:"card-preview-holder",children:N==="en"?"Currency":N==="uz"?"Valyuta":"Валюта"}),d.jsx("div",{className:"card-preview-expiry",style:{fontSize:"12px",fontWeight:"700"},children:"UZS (so'm)"})]})]})]}),d.jsxs("form",{onSubmit:Te,className:"sidebar-form",children:[d.jsxs("div",{className:"input-group",children:[d.jsx("label",{htmlFor:"p2p-sender",children:I.p2pSender}),d.jsx("input",{type:"text",id:"p2p-sender",placeholder:N==="en"?"9860 •••• •••• •••• or phone number":N==="uz"?"9860 •••• •••• •••• yoki telefon":"9860 •••• •••• •••• или +998...",value:D,onChange:Q=>H(Q.target.value),className:h.senderInfo?"input-error":""}),h.senderInfo&&d.jsx("span",{className:"error-message-text",children:h.senderInfo})]}),d.jsxs("div",{className:"input-group",children:[d.jsx("label",{htmlFor:"p2p-receipt",children:I.p2pReceipt}),d.jsx("input",{type:"text",id:"p2p-receipt",placeholder:N==="en"?"Example: 582914839":N==="uz"?"Namuna: 582914839":"Пример: 582914839",value:$,onChange:Q=>B(Q.target.value),className:h.transactionId?"input-error":""}),h.transactionId&&d.jsx("span",{className:"error-message-text",children:h.transactionId})]}),d.jsx("button",{type:"submit",className:"sidebar-submit-btn",style:{marginTop:"16px"},children:d.jsxs("span",{className:"btn-content-inner",children:[d.jsxs("span",{className:"btn-slide-item",children:[d.jsx("span",{children:I.confirmPayment}),d.jsx("svg",{className:"btn-arrow",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:d.jsx("path",{d:"M3 8h10M9 4l4 4-4 4"})})]}),d.jsxs("span",{className:"btn-slide-item btn-slide-item-hover",children:[d.jsx("span",{children:I.confirmPayment}),d.jsx("svg",{className:"btn-arrow",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:d.jsx("path",{d:"M3 8h10M9 4l4 4-4 4"})})]})]})})]})]}),n==="processing_payment"&&d.jsxs("div",{className:"sidebar-step-container",children:[d.jsx("h3",{className:"sidebar-title font-instrument",children:N==="en"?"Payment Verification":N==="uz"?"To'lovni tekshirish":"Проверка платежа"}),d.jsx("p",{className:"sidebar-subtitle",children:N==="en"?"Verifying your P2P receipt in Click/Payme network registry...":N==="uz"?"Tranzaksiyani Click/Payme tarmog'ida tekshirmoqdamiz...":"Проверка P2P транзакции в реестре Click/Payme. Пожалуйста, подождите."}),d.jsx("div",{className:"sidebar-loading-container",style:{margin:"16px 0 32px"},children:d.jsxs("div",{className:"loading-spinner-wrap",children:[d.jsx("div",{className:"pulse-loader-ring",style:{borderColor:"rgba(168, 85, 247, 0.4) transparent"}}),d.jsx("div",{className:"pulse-loader-core",style:{background:"#a855f7"}})]})}),d.jsx("div",{className:"analysis-log-container",style:{color:"#22c55e"},children:T.map((Q,J)=>d.jsxs("div",{className:"analysis-log-line",children:[d.jsx("span",{style:{color:"#22c55e",marginRight:"6px"},children:"✓"}),Q]},J))})]}),n===2&&d.jsxs("div",{className:"sidebar-step-container sidebar-loading-container",children:[d.jsxs("div",{className:"loading-spinner-wrap",children:[d.jsx("div",{className:"pulse-loader-ring"}),d.jsx("div",{className:"pulse-loader-core"})]}),d.jsx("h4",{className:"loading-title",children:N==="en"?"Establishing Connection":N==="uz"?"Ulanish o'rnatilmoqda":"Установка соединения"}),d.jsx("p",{className:"loading-subtitle",children:_})]}),n===3&&d.jsx(d.Fragment,{children:m?d.jsxs("div",{className:"sidebar-step-container sidebar-success-container",children:[d.jsx("div",{className:"success-icon-wrap",children:d.jsx("svg",{viewBox:"0 0 24 24",width:"48",height:"48",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:d.jsx("polyline",{points:"20 6 9 17 4 12"})})}),d.jsx("h3",{className:"sidebar-title font-instrument",style:{marginTop:"24px"},children:I.workspaceActive}),d.jsx("p",{className:"sidebar-subtitle",children:I.receiptEmailed}),C&&d.jsxs("div",{className:"success-details-card",children:[d.jsxs("div",{className:"success-details-row",children:[d.jsx("span",{children:"Workspace:"}),d.jsxs("strong",{children:["qix-sandbox-",m.toLowerCase().replace(/\s+/g,"-")]})]}),d.jsxs("div",{className:"success-details-row",children:[d.jsx("span",{children:"Engine:"}),d.jsx("strong",{children:g})]}),d.jsxs("div",{className:"success-details-row",children:[d.jsx("span",{children:I.amountPaid}),d.jsx("strong",{style:{color:"#22c55e",fontFamily:"monospace"},children:C.totalPrice})]}),d.jsxs("div",{className:"success-details-row",children:[d.jsx("span",{children:I.method}),d.jsxs("strong",{children:["P2P (",Y.toUpperCase(),")"]})]}),d.jsxs("div",{className:"success-details-row",children:[d.jsx("span",{children:I.status}),d.jsx("strong",{className:"status-badge-active",children:I.online})]})]}),d.jsx("p",{className:"success-footer-text",children:I.successFooter}),d.jsx("button",{className:"sidebar-close-btn",onClick:e,children:I.returnHome})]}):d.jsxs("div",{className:"sidebar-step-container sidebar-success-container",children:[d.jsx("div",{className:"success-icon-wrap",children:d.jsx("svg",{viewBox:"0 0 24 24",width:"48",height:"48",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:d.jsx("polyline",{points:"20 6 9 17 4 12"})})}),d.jsx("h3",{className:"sidebar-title font-instrument",style:{marginTop:"24px"},children:I.accessGranted}),d.jsx("p",{className:"sidebar-subtitle",children:N==="en"?`Developer profile ${r} has been successfully registered.`:N==="uz"?`Dasturchi profili ${r} muvaffaqiyatli ro'yxatdan o'tdi.`:`Профиль разработчика ${r} был успешно зарегистрирован.`}),d.jsxs("div",{className:"success-details-card",children:[d.jsxs("div",{className:"success-details-row",style:{alignItems:"center"},children:[d.jsx("span",{children:"Identity:"}),d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[d.jsx("img",{className:"sidebar-profile-avatar",src:ul(((_e=un.find(Q=>Q.id===f))==null?void 0:_e.colors)||un[0].colors),alt:r,style:{width:"24px",height:"24px",margin:0}}),d.jsx("strong",{children:r})]})]}),d.jsxs("div",{className:"success-details-row",children:[d.jsx("span",{children:"Access:"}),d.jsx("strong",{className:"status-badge-active",children:I.authorized})]})]}),d.jsx("p",{className:"success-footer-text",style:{marginBottom:"24px"},children:I.authPrompt}),d.jsx("button",{className:"sidebar-close-btn",onClick:()=>{i(1),v({})},style:{background:"#fff",color:"#0a0a0f",border:"none"},children:I.connectWorkspace})]})})]})]})})}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Yd="160",py=0,wf=1,my=2,pv=1,gy=2,ni=3,qi=0,rn=1,si=2,ji=0,ds=1,hl=2,Af=3,bf=4,vy=5,or=100,_y=101,xy=102,Cf=103,Rf=104,yy=200,Sy=201,Ey=202,My=203,ju=204,Gu=205,Ty=206,wy=207,Ay=208,by=209,Cy=210,Ry=211,Ny=212,Py=213,Ly=214,Dy=0,Iy=1,Uy=2,fl=3,Fy=4,ky=5,Oy=6,zy=7,mv=0,By=1,Hy=2,Gi=0,jy=1,Gy=2,Vy=3,Wy=4,Xy=5,qy=6,gv=300,Ss=301,Es=302,Vu=303,Wu=304,kl=306,Xu=1e3,Fn=1001,qu=1002,qt=1003,Nf=1004,xc=1005,En=1006,Yy=1007,Ma=1008,Vi=1009,$y=1010,Ky=1011,$d=1012,vv=1013,Pi=1014,Li=1015,Ta=1016,_v=1017,xv=1018,mr=1020,Zy=1021,kn=1023,Qy=1024,Jy=1025,gr=1026,Ms=1027,eS=1028,yv=1029,tS=1030,Sv=1031,Ev=1033,yc=33776,Sc=33777,Ec=33778,Mc=33779,Pf=35840,Lf=35841,Df=35842,If=35843,Mv=36196,Uf=37492,Ff=37496,kf=37808,Of=37809,zf=37810,Bf=37811,Hf=37812,jf=37813,Gf=37814,Vf=37815,Wf=37816,Xf=37817,qf=37818,Yf=37819,$f=37820,Kf=37821,Tc=36492,Zf=36494,Qf=36495,nS=36283,Jf=36284,ep=36285,tp=36286,Tv=3e3,vr=3001,iS=3200,rS=3201,sS=0,aS=1,Mn="",Pt="srgb",mi="srgb-linear",Kd="display-p3",Ol="display-p3-linear",pl="linear",at="srgb",ml="rec709",gl="p3",Cr=7680,np=519,oS=512,lS=513,cS=514,wv=515,uS=516,dS=517,hS=518,fS=519,ip=35044,rp="300 es",Yu=1035,li=2e3,vl=2001;class Cs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let sp=1234567;const ia=Math.PI/180,wa=180/Math.PI;function Rs(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ot[t&255]+Ot[t>>8&255]+Ot[t>>16&255]+Ot[t>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[n&63|128]+Ot[n>>8&255]+"-"+Ot[n>>16&255]+Ot[n>>24&255]+Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]).toLowerCase()}function Yt(t,e,n){return Math.max(e,Math.min(n,t))}function Zd(t,e){return(t%e+e)%e}function pS(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function mS(t,e,n){return t!==e?(n-t)/(e-t):0}function ra(t,e,n){return(1-n)*t+n*e}function gS(t,e,n,i){return ra(t,e,1-Math.exp(-n*i))}function vS(t,e=1){return e-Math.abs(Zd(t,e*2)-e)}function _S(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function xS(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function yS(t,e){return t+Math.floor(Math.random()*(e-t+1))}function SS(t,e){return t+Math.random()*(e-t)}function ES(t){return t*(.5-Math.random())}function MS(t){t!==void 0&&(sp=t);let e=sp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function TS(t){return t*ia}function wS(t){return t*wa}function $u(t){return(t&t-1)===0&&t!==0}function AS(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function _l(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function bS(t,e,n,i,r){const s=Math.cos,a=Math.sin,o=s(n/2),l=a(n/2),c=s((e+i)/2),f=a((e+i)/2),p=s((e-i)/2),h=a((e-i)/2),v=s((i-e)/2),_=a((i-e)/2);switch(r){case"XYX":t.set(o*f,l*p,l*h,o*c);break;case"YZY":t.set(l*h,o*f,l*p,o*c);break;case"ZXZ":t.set(l*p,l*h,o*f,o*c);break;case"XZX":t.set(o*f,l*_,l*v,o*c);break;case"YXY":t.set(l*v,o*f,l*_,o*c);break;case"ZYZ":t.set(l*_,l*v,o*f,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Vr(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Vt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const ap={DEG2RAD:ia,RAD2DEG:wa,generateUUID:Rs,clamp:Yt,euclideanModulo:Zd,mapLinear:pS,inverseLerp:mS,lerp:ra,damp:gS,pingpong:vS,smoothstep:_S,smootherstep:xS,randInt:yS,randFloat:SS,randFloatSpread:ES,seededRandom:MS,degToRad:TS,radToDeg:wS,isPowerOfTwo:$u,ceilPowerOfTwo:AS,floorPowerOfTwo:_l,setQuaternionFromProperEuler:bS,normalize:Vt,denormalize:Vr};class et{constructor(e=0,n=0){et.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ve{constructor(e,n,i,r,s,a,o,l,c){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=o,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=a,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],f=i[4],p=i[7],h=i[2],v=i[5],_=i[8],y=r[0],m=r[3],u=r[6],g=r[1],x=r[4],E=r[7],R=r[2],C=r[5],w=r[8];return s[0]=a*y+o*g+l*R,s[3]=a*m+o*x+l*C,s[6]=a*u+o*E+l*w,s[1]=c*y+f*g+p*R,s[4]=c*m+f*x+p*C,s[7]=c*u+f*E+p*w,s[2]=h*y+v*g+_*R,s[5]=h*m+v*x+_*C,s[8]=h*u+v*E+_*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8];return n*a*f-n*o*c-i*s*f+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],p=f*a-o*c,h=o*l-f*s,v=c*s-a*l,_=n*p+i*h+r*v;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=p*y,e[1]=(r*c-f*i)*y,e[2]=(o*i-r*a)*y,e[3]=h*y,e[4]=(f*n-r*l)*y,e[5]=(r*s-o*n)*y,e[6]=v*y,e[7]=(i*l-c*n)*y,e[8]=(a*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(wc.makeScale(e,n)),this}rotate(e){return this.premultiply(wc.makeRotation(-e)),this}translate(e,n){return this.premultiply(wc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const wc=new Ve;function Av(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function xl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function CS(){const t=xl("canvas");return t.style.display="block",t}const op={};function sa(t){t in op||(op[t]=!0,console.warn(t))}const lp=new Ve().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),cp=new Ve().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),eo={[mi]:{transfer:pl,primaries:ml,toReference:t=>t,fromReference:t=>t},[Pt]:{transfer:at,primaries:ml,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Ol]:{transfer:pl,primaries:gl,toReference:t=>t.applyMatrix3(cp),fromReference:t=>t.applyMatrix3(lp)},[Kd]:{transfer:at,primaries:gl,toReference:t=>t.convertSRGBToLinear().applyMatrix3(cp),fromReference:t=>t.applyMatrix3(lp).convertLinearToSRGB()}},RS=new Set([mi,Ol]),Je={enabled:!0,_workingColorSpace:mi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!RS.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=eo[e].toReference,r=eo[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return eo[t].primaries},getTransfer:function(t){return t===Mn?pl:eo[t].transfer}};function hs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Ac(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Rr;class bv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Rr===void 0&&(Rr=xl("canvas")),Rr.width=e.width,Rr.height=e.height;const i=Rr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Rr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=xl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=hs(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(hs(n[i]/255)*255):n[i]=hs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let NS=0;class Cv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:NS++}),this.uuid=Rs(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(bc(r[a].image)):s.push(bc(r[a]))}else s=bc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function bc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?bv.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let PS=0;class pn extends Cs{constructor(e=pn.DEFAULT_IMAGE,n=pn.DEFAULT_MAPPING,i=Fn,r=Fn,s=En,a=Ma,o=kn,l=Vi,c=pn.DEFAULT_ANISOTROPY,f=Mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:PS++}),this.uuid=Rs(),this.name="",this.source=new Cv(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof f=="string"?this.colorSpace=f:(sa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=f===vr?Pt:Mn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xu:e.x=e.x-Math.floor(e.x);break;case Fn:e.x=e.x<0?0:1;break;case qu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xu:e.y=e.y-Math.floor(e.y);break;case Fn:e.y=e.y<0?0:1;break;case qu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return sa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Pt?vr:Tv}set encoding(e){sa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===vr?Pt:Mn}}pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=gv;pn.DEFAULT_ANISOTROPY=1;class Lt{constructor(e=0,n=0,i=0,r=1){Lt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],p=l[8],h=l[1],v=l[5],_=l[9],y=l[2],m=l[6],u=l[10];if(Math.abs(f-h)<.01&&Math.abs(p-y)<.01&&Math.abs(_-m)<.01){if(Math.abs(f+h)<.1&&Math.abs(p+y)<.1&&Math.abs(_+m)<.1&&Math.abs(c+v+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(c+1)/2,E=(v+1)/2,R=(u+1)/2,C=(f+h)/4,w=(p+y)/4,F=(_+m)/4;return x>E&&x>R?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=C/i,s=w/i):E>R?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=C/r,s=F/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=w/s,r=F/s),this.set(i,r,s,n),this}let g=Math.sqrt((m-_)*(m-_)+(p-y)*(p-y)+(h-f)*(h-f));return Math.abs(g)<.001&&(g=1),this.x=(m-_)/g,this.y=(p-y)/g,this.z=(h-f)/g,this.w=Math.acos((c+v+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class LS extends Cs{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Lt(0,0,e,n),this.scissorTest=!1,this.viewport=new Lt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(sa("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===vr?Pt:Mn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new pn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Cv(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mr extends LS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Rv extends pn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class DS extends pn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pa{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],f=i[r+2],p=i[r+3];const h=s[a+0],v=s[a+1],_=s[a+2],y=s[a+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=f,e[n+3]=p;return}if(o===1){e[n+0]=h,e[n+1]=v,e[n+2]=_,e[n+3]=y;return}if(p!==y||l!==h||c!==v||f!==_){let m=1-o;const u=l*h+c*v+f*_+p*y,g=u>=0?1:-1,x=1-u*u;if(x>Number.EPSILON){const R=Math.sqrt(x),C=Math.atan2(R,u*g);m=Math.sin(m*C)/R,o=Math.sin(o*C)/R}const E=o*g;if(l=l*m+h*E,c=c*m+v*E,f=f*m+_*E,p=p*m+y*E,m===1-o){const R=1/Math.sqrt(l*l+c*c+f*f+p*p);l*=R,c*=R,f*=R,p*=R}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],f=i[r+3],p=s[a],h=s[a+1],v=s[a+2],_=s[a+3];return e[n]=o*_+f*p+l*v-c*h,e[n+1]=l*_+f*h+c*p-o*v,e[n+2]=c*_+f*v+o*h-l*p,e[n+3]=f*_-o*p-l*h-c*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),f=o(r/2),p=o(s/2),h=l(i/2),v=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=h*f*p+c*v*_,this._y=c*v*p-h*f*_,this._z=c*f*_+h*v*p,this._w=c*f*p-h*v*_;break;case"YXZ":this._x=h*f*p+c*v*_,this._y=c*v*p-h*f*_,this._z=c*f*_-h*v*p,this._w=c*f*p+h*v*_;break;case"ZXY":this._x=h*f*p-c*v*_,this._y=c*v*p+h*f*_,this._z=c*f*_+h*v*p,this._w=c*f*p-h*v*_;break;case"ZYX":this._x=h*f*p-c*v*_,this._y=c*v*p+h*f*_,this._z=c*f*_-h*v*p,this._w=c*f*p+h*v*_;break;case"YZX":this._x=h*f*p+c*v*_,this._y=c*v*p+h*f*_,this._z=c*f*_-h*v*p,this._w=c*f*p-h*v*_;break;case"XZY":this._x=h*f*p-c*v*_,this._y=c*v*p-h*f*_,this._z=c*f*_+h*v*p,this._w=c*f*p+h*v*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],f=n[6],p=n[10],h=i+o+p;if(h>0){const v=.5/Math.sqrt(h+1);this._w=.25/v,this._x=(f-l)*v,this._y=(s-c)*v,this._z=(a-r)*v}else if(i>o&&i>p){const v=2*Math.sqrt(1+i-o-p);this._w=(f-l)/v,this._x=.25*v,this._y=(r+a)/v,this._z=(s+c)/v}else if(o>p){const v=2*Math.sqrt(1+o-i-p);this._w=(s-c)/v,this._x=(r+a)/v,this._y=.25*v,this._z=(l+f)/v}else{const v=2*Math.sqrt(1+p-i-o);this._w=(a-r)/v,this._x=(s+c)/v,this._y=(l+f)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Yt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+a*o+r*c-s*l,this._y=r*f+a*l+s*o-i*c,this._z=s*f+a*c+i*l-r*o,this._w=a*f-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const v=1-n;return this._w=v*a+n*this._w,this._x=v*i+n*this._x,this._y=v*r+n*this._y,this._z=v*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),f=Math.atan2(c,o),p=Math.sin((1-n)*f)/c,h=Math.sin(n*f)/c;return this._w=a*p+this._w*h,this._x=i*p+this._x*h,this._y=r*p+this._y*h,this._z=s*p+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,n=0,i=0){X.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(up.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(up.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),f=2*(o*n-s*r),p=2*(s*i-a*n);return this.x=n+l*c+a*p-o*f,this.y=i+l*f+o*c-s*p,this.z=r+l*p+s*f-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Cc.copy(this).projectOnVector(e),this.sub(Cc)}reflect(e){return this.sub(Cc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Cc=new X,up=new Pa;class La{constructor(e=new X(1/0,1/0,1/0),n=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Rn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Rn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Rn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Rn):Rn.fromBufferAttribute(s,a),Rn.applyMatrix4(e.matrixWorld),this.expandByPoint(Rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),to.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),to.copy(i.boundingBox)),to.applyMatrix4(e.matrixWorld),this.union(to)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Rn),Rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bs),no.subVectors(this.max,Bs),Nr.subVectors(e.a,Bs),Pr.subVectors(e.b,Bs),Lr.subVectors(e.c,Bs),xi.subVectors(Pr,Nr),yi.subVectors(Lr,Pr),Ji.subVectors(Nr,Lr);let n=[0,-xi.z,xi.y,0,-yi.z,yi.y,0,-Ji.z,Ji.y,xi.z,0,-xi.x,yi.z,0,-yi.x,Ji.z,0,-Ji.x,-xi.y,xi.x,0,-yi.y,yi.x,0,-Ji.y,Ji.x,0];return!Rc(n,Nr,Pr,Lr,no)||(n=[1,0,0,0,1,0,0,0,1],!Rc(n,Nr,Pr,Lr,no))?!1:(io.crossVectors(xi,yi),n=[io.x,io.y,io.z],Rc(n,Nr,Pr,Lr,no))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Zn=[new X,new X,new X,new X,new X,new X,new X,new X],Rn=new X,to=new La,Nr=new X,Pr=new X,Lr=new X,xi=new X,yi=new X,Ji=new X,Bs=new X,no=new X,io=new X,er=new X;function Rc(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){er.fromArray(t,s);const o=r.x*Math.abs(er.x)+r.y*Math.abs(er.y)+r.z*Math.abs(er.z),l=e.dot(er),c=n.dot(er),f=i.dot(er);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}const IS=new La,Hs=new X,Nc=new X;class zl{constructor(e=new X,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):IS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Hs.subVectors(e,this.center);const n=Hs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Hs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Nc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Hs.copy(e.center).add(Nc)),this.expandByPoint(Hs.copy(e.center).sub(Nc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Qn=new X,Pc=new X,ro=new X,Si=new X,Lc=new X,so=new X,Dc=new X;class Nv{constructor(e=new X,n=new X(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Qn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Qn.copy(this.origin).addScaledVector(this.direction,n),Qn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Pc.copy(e).add(n).multiplyScalar(.5),ro.copy(n).sub(e).normalize(),Si.copy(this.origin).sub(Pc);const s=e.distanceTo(n)*.5,a=-this.direction.dot(ro),o=Si.dot(this.direction),l=-Si.dot(ro),c=Si.lengthSq(),f=Math.abs(1-a*a);let p,h,v,_;if(f>0)if(p=a*l-o,h=a*o-l,_=s*f,p>=0)if(h>=-_)if(h<=_){const y=1/f;p*=y,h*=y,v=p*(p+a*h+2*o)+h*(a*p+h+2*l)+c}else h=s,p=Math.max(0,-(a*h+o)),v=-p*p+h*(h+2*l)+c;else h=-s,p=Math.max(0,-(a*h+o)),v=-p*p+h*(h+2*l)+c;else h<=-_?(p=Math.max(0,-(-a*s+o)),h=p>0?-s:Math.min(Math.max(-s,-l),s),v=-p*p+h*(h+2*l)+c):h<=_?(p=0,h=Math.min(Math.max(-s,-l),s),v=h*(h+2*l)+c):(p=Math.max(0,-(a*s+o)),h=p>0?s:Math.min(Math.max(-s,-l),s),v=-p*p+h*(h+2*l)+c);else h=a>0?-s:s,p=Math.max(0,-(a*h+o)),v=-p*p+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(Pc).addScaledVector(ro,h),v}intersectSphere(e,n){Qn.subVectors(e.center,this.origin);const i=Qn.dot(this.direction),r=Qn.dot(Qn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,f=1/this.direction.y,p=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),f>=0?(s=(e.min.y-h.y)*f,a=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,a=(e.min.y-h.y)*f),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),p>=0?(o=(e.min.z-h.z)*p,l=(e.max.z-h.z)*p):(o=(e.max.z-h.z)*p,l=(e.min.z-h.z)*p),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Qn)!==null}intersectTriangle(e,n,i,r,s){Lc.subVectors(n,e),so.subVectors(i,e),Dc.crossVectors(Lc,so);let a=this.direction.dot(Dc),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Si.subVectors(this.origin,e);const l=o*this.direction.dot(so.crossVectors(Si,so));if(l<0)return null;const c=o*this.direction.dot(Lc.cross(Si));if(c<0||l+c>a)return null;const f=-o*Si.dot(Dc);return f<0?null:this.at(f/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Rt{constructor(e,n,i,r,s,a,o,l,c,f,p,h,v,_,y,m){Rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,f,p,h,v,_,y,m)}set(e,n,i,r,s,a,o,l,c,f,p,h,v,_,y,m){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=f,u[10]=p,u[14]=h,u[3]=v,u[7]=_,u[11]=y,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Rt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Dr.setFromMatrixColumn(e,0).length(),s=1/Dr.setFromMatrixColumn(e,1).length(),a=1/Dr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const h=a*f,v=a*p,_=o*f,y=o*p;n[0]=l*f,n[4]=-l*p,n[8]=c,n[1]=v+_*c,n[5]=h-y*c,n[9]=-o*l,n[2]=y-h*c,n[6]=_+v*c,n[10]=a*l}else if(e.order==="YXZ"){const h=l*f,v=l*p,_=c*f,y=c*p;n[0]=h+y*o,n[4]=_*o-v,n[8]=a*c,n[1]=a*p,n[5]=a*f,n[9]=-o,n[2]=v*o-_,n[6]=y+h*o,n[10]=a*l}else if(e.order==="ZXY"){const h=l*f,v=l*p,_=c*f,y=c*p;n[0]=h-y*o,n[4]=-a*p,n[8]=_+v*o,n[1]=v+_*o,n[5]=a*f,n[9]=y-h*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const h=a*f,v=a*p,_=o*f,y=o*p;n[0]=l*f,n[4]=_*c-v,n[8]=h*c+y,n[1]=l*p,n[5]=y*c+h,n[9]=v*c-_,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const h=a*l,v=a*c,_=o*l,y=o*c;n[0]=l*f,n[4]=y-h*p,n[8]=_*p+v,n[1]=p,n[5]=a*f,n[9]=-o*f,n[2]=-c*f,n[6]=v*p+_,n[10]=h-y*p}else if(e.order==="XZY"){const h=a*l,v=a*c,_=o*l,y=o*c;n[0]=l*f,n[4]=-p,n[8]=c*f,n[1]=h*p+y,n[5]=a*f,n[9]=v*p-_,n[2]=_*p-v,n[6]=o*f,n[10]=y*p+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(US,e,FS)}lookAt(e,n,i){const r=this.elements;return on.subVectors(e,n),on.lengthSq()===0&&(on.z=1),on.normalize(),Ei.crossVectors(i,on),Ei.lengthSq()===0&&(Math.abs(i.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),Ei.crossVectors(i,on)),Ei.normalize(),ao.crossVectors(on,Ei),r[0]=Ei.x,r[4]=ao.x,r[8]=on.x,r[1]=Ei.y,r[5]=ao.y,r[9]=on.y,r[2]=Ei.z,r[6]=ao.z,r[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],f=i[1],p=i[5],h=i[9],v=i[13],_=i[2],y=i[6],m=i[10],u=i[14],g=i[3],x=i[7],E=i[11],R=i[15],C=r[0],w=r[4],F=r[8],S=r[12],T=r[1],P=r[5],Y=r[9],ie=r[13],D=r[2],H=r[6],$=r[10],B=r[14],U=r[3],z=r[7],N=r[11],I=r[15];return s[0]=a*C+o*T+l*D+c*U,s[4]=a*w+o*P+l*H+c*z,s[8]=a*F+o*Y+l*$+c*N,s[12]=a*S+o*ie+l*B+c*I,s[1]=f*C+p*T+h*D+v*U,s[5]=f*w+p*P+h*H+v*z,s[9]=f*F+p*Y+h*$+v*N,s[13]=f*S+p*ie+h*B+v*I,s[2]=_*C+y*T+m*D+u*U,s[6]=_*w+y*P+m*H+u*z,s[10]=_*F+y*Y+m*$+u*N,s[14]=_*S+y*ie+m*B+u*I,s[3]=g*C+x*T+E*D+R*U,s[7]=g*w+x*P+E*H+R*z,s[11]=g*F+x*Y+E*$+R*N,s[15]=g*S+x*ie+E*B+R*I,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],f=e[2],p=e[6],h=e[10],v=e[14],_=e[3],y=e[7],m=e[11],u=e[15];return _*(+s*l*p-r*c*p-s*o*h+i*c*h+r*o*v-i*l*v)+y*(+n*l*v-n*c*h+s*a*h-r*a*v+r*c*f-s*l*f)+m*(+n*c*p-n*o*v-s*a*p+i*a*v+s*o*f-i*c*f)+u*(-r*o*f-n*l*p+n*o*h+r*a*p-i*a*h+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],p=e[9],h=e[10],v=e[11],_=e[12],y=e[13],m=e[14],u=e[15],g=p*m*c-y*h*c+y*l*v-o*m*v-p*l*u+o*h*u,x=_*h*c-f*m*c-_*l*v+a*m*v+f*l*u-a*h*u,E=f*y*c-_*p*c+_*o*v-a*y*v-f*o*u+a*p*u,R=_*p*l-f*y*l-_*o*h+a*y*h+f*o*m-a*p*m,C=n*g+i*x+r*E+s*R;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/C;return e[0]=g*w,e[1]=(y*h*s-p*m*s-y*r*v+i*m*v+p*r*u-i*h*u)*w,e[2]=(o*m*s-y*l*s+y*r*c-i*m*c-o*r*u+i*l*u)*w,e[3]=(p*l*s-o*h*s-p*r*c+i*h*c+o*r*v-i*l*v)*w,e[4]=x*w,e[5]=(f*m*s-_*h*s+_*r*v-n*m*v-f*r*u+n*h*u)*w,e[6]=(_*l*s-a*m*s-_*r*c+n*m*c+a*r*u-n*l*u)*w,e[7]=(a*h*s-f*l*s+f*r*c-n*h*c-a*r*v+n*l*v)*w,e[8]=E*w,e[9]=(_*p*s-f*y*s-_*i*v+n*y*v+f*i*u-n*p*u)*w,e[10]=(a*y*s-_*o*s+_*i*c-n*y*c-a*i*u+n*o*u)*w,e[11]=(f*o*s-a*p*s-f*i*c+n*p*c+a*i*v-n*o*v)*w,e[12]=R*w,e[13]=(f*y*r-_*p*r+_*i*h-n*y*h-f*i*m+n*p*m)*w,e[14]=(_*o*r-a*y*r-_*i*l+n*y*l+a*i*m-n*o*m)*w,e[15]=(a*p*r-f*o*r+f*i*l-n*p*l-a*i*h+n*o*h)*w,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,f=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,f*o+i,f*l-r*a,0,c*l-r*o,f*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,f=a+a,p=o+o,h=s*c,v=s*f,_=s*p,y=a*f,m=a*p,u=o*p,g=l*c,x=l*f,E=l*p,R=i.x,C=i.y,w=i.z;return r[0]=(1-(y+u))*R,r[1]=(v+E)*R,r[2]=(_-x)*R,r[3]=0,r[4]=(v-E)*C,r[5]=(1-(h+u))*C,r[6]=(m+g)*C,r[7]=0,r[8]=(_+x)*w,r[9]=(m-g)*w,r[10]=(1-(h+y))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Dr.set(r[0],r[1],r[2]).length();const a=Dr.set(r[4],r[5],r[6]).length(),o=Dr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Nn.copy(this);const c=1/s,f=1/a,p=1/o;return Nn.elements[0]*=c,Nn.elements[1]*=c,Nn.elements[2]*=c,Nn.elements[4]*=f,Nn.elements[5]*=f,Nn.elements[6]*=f,Nn.elements[8]*=p,Nn.elements[9]*=p,Nn.elements[10]*=p,n.setFromRotationMatrix(Nn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=li){const l=this.elements,c=2*s/(n-e),f=2*s/(i-r),p=(n+e)/(n-e),h=(i+r)/(i-r);let v,_;if(o===li)v=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===vl)v=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=v,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=li){const l=this.elements,c=1/(n-e),f=1/(i-r),p=1/(a-s),h=(n+e)*c,v=(i+r)*f;let _,y;if(o===li)_=(a+s)*p,y=-2*p;else if(o===vl)_=s*p,y=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-v,l[2]=0,l[6]=0,l[10]=y,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Dr=new X,Nn=new Rt,US=new X(0,0,0),FS=new X(1,1,1),Ei=new X,ao=new X,on=new X,dp=new Rt,hp=new Pa;class Bl{constructor(e=0,n=0,i=0,r=Bl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],f=r[9],p=r[2],h=r[6],v=r[10];switch(n){case"XYZ":this._y=Math.asin(Yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,v),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,v),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-p,v),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Yt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(h,v),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,v));break;case"XZY":this._z=Math.asin(-Yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return dp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return hp.setFromEuler(this),this.setFromQuaternion(hp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bl.DEFAULT_ORDER="XYZ";class Pv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let kS=0;const fp=new X,Ir=new Pa,Jn=new Rt,oo=new X,js=new X,OS=new X,zS=new Pa,pp=new X(1,0,0),mp=new X(0,1,0),gp=new X(0,0,1),BS={type:"added"},HS={type:"removed"};class sn extends Cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kS++}),this.uuid=Rs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=sn.DEFAULT_UP.clone();const e=new X,n=new Bl,i=new Pa,r=new X(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Rt},normalMatrix:{value:new Ve}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ir.setFromAxisAngle(e,n),this.quaternion.multiply(Ir),this}rotateOnWorldAxis(e,n){return Ir.setFromAxisAngle(e,n),this.quaternion.premultiply(Ir),this}rotateX(e){return this.rotateOnAxis(pp,e)}rotateY(e){return this.rotateOnAxis(mp,e)}rotateZ(e){return this.rotateOnAxis(gp,e)}translateOnAxis(e,n){return fp.copy(e).applyQuaternion(this.quaternion),this.position.add(fp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(pp,e)}translateY(e){return this.translateOnAxis(mp,e)}translateZ(e){return this.translateOnAxis(gp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?oo.copy(e):oo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(js,oo,this.up):Jn.lookAt(oo,js,this.up),this.quaternion.setFromRotationMatrix(Jn),r&&(Jn.extractRotation(r.matrixWorld),Ir.setFromRotationMatrix(Jn),this.quaternion.premultiply(Ir.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(BS)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(HS)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Jn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(js,e,OS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(js,zS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const p=l[c];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),f=a(e.images),p=a(e.shapes),h=a(e.skeletons),v=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),p.length>0&&(i.shapes=p),h.length>0&&(i.skeletons=h),v.length>0&&(i.animations=v),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const f=o[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}sn.DEFAULT_UP=new X(0,1,0);sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pn=new X,ei=new X,Ic=new X,ti=new X,Ur=new X,Fr=new X,vp=new X,Uc=new X,Fc=new X,kc=new X;let lo=!1;class Un{constructor(e=new X,n=new X,i=new X){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Pn.subVectors(e,n),r.cross(Pn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Pn.subVectors(r,n),ei.subVectors(i,n),Ic.subVectors(e,n);const a=Pn.dot(Pn),o=Pn.dot(ei),l=Pn.dot(Ic),c=ei.dot(ei),f=ei.dot(Ic),p=a*c-o*o;if(p===0)return s.set(0,0,0),null;const h=1/p,v=(c*l-o*f)*h,_=(a*f-o*l)*h;return s.set(1-v-_,_,v)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getUV(e,n,i,r,s,a,o,l){return lo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),lo=!0),this.getInterpolation(e,n,i,r,s,a,o,l)}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ti.x),l.addScaledVector(a,ti.y),l.addScaledVector(o,ti.z),l)}static isFrontFacing(e,n,i,r){return Pn.subVectors(i,n),ei.subVectors(e,n),Pn.cross(ei).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),Pn.cross(ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Un.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Un.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return lo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),lo=!0),Un.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return Un.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Un.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Un.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Ur.subVectors(r,i),Fr.subVectors(s,i),Uc.subVectors(e,i);const l=Ur.dot(Uc),c=Fr.dot(Uc);if(l<=0&&c<=0)return n.copy(i);Fc.subVectors(e,r);const f=Ur.dot(Fc),p=Fr.dot(Fc);if(f>=0&&p<=f)return n.copy(r);const h=l*p-f*c;if(h<=0&&l>=0&&f<=0)return a=l/(l-f),n.copy(i).addScaledVector(Ur,a);kc.subVectors(e,s);const v=Ur.dot(kc),_=Fr.dot(kc);if(_>=0&&v<=_)return n.copy(s);const y=v*c-l*_;if(y<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector(Fr,o);const m=f*_-v*p;if(m<=0&&p-f>=0&&v-_>=0)return vp.subVectors(s,r),o=(p-f)/(p-f+(v-_)),n.copy(r).addScaledVector(vp,o);const u=1/(m+y+h);return a=y*u,o=h*u,n.copy(i).addScaledVector(Ur,a).addScaledVector(Fr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Lv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mi={h:0,s:0,l:0},co={h:0,s:0,l:0};function Oc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ye{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Je.workingColorSpace){return this.r=e,this.g=n,this.b=i,Je.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Je.workingColorSpace){if(e=Zd(e,1),n=Yt(n,0,1),i=Yt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Oc(a,s,e+1/3),this.g=Oc(a,s,e),this.b=Oc(a,s,e-1/3)}return Je.toWorkingColorSpace(this,r),this}setStyle(e,n=Pt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Pt){const i=Lv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hs(e.r),this.g=hs(e.g),this.b=hs(e.b),this}copyLinearToSRGB(e){return this.r=Ac(e.r),this.g=Ac(e.g),this.b=Ac(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pt){return Je.fromWorkingColorSpace(zt.copy(this),e),Math.round(Yt(zt.r*255,0,255))*65536+Math.round(Yt(zt.g*255,0,255))*256+Math.round(Yt(zt.b*255,0,255))}getHexString(e=Pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Je.workingColorSpace){Je.fromWorkingColorSpace(zt.copy(this),n);const i=zt.r,r=zt.g,s=zt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const f=(o+a)/2;if(o===a)l=0,c=0;else{const p=a-o;switch(c=f<=.5?p/(a+o):p/(2-a-o),a){case i:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-i)/p+2;break;case s:l=(i-r)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=Je.workingColorSpace){return Je.fromWorkingColorSpace(zt.copy(this),n),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=Pt){Je.fromWorkingColorSpace(zt.copy(this),e);const n=zt.r,i=zt.g,r=zt.b;return e!==Pt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Mi),this.setHSL(Mi.h+e,Mi.s+n,Mi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Mi),e.getHSL(co);const i=ra(Mi.h,co.h,n),r=ra(Mi.s,co.s,n),s=ra(Mi.l,co.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new Ye;Ye.NAMES=Lv;let jS=0;class Da extends Cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jS++}),this.uuid=Rs(),this.name="",this.type="Material",this.blending=ds,this.side=qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ju,this.blendDst=Gu,this.blendEquation=or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=fl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=np,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cr,this.stencilZFail=Cr,this.stencilZPass=Cr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ds&&(i.blending=this.blending),this.side!==qi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ju&&(i.blendSrc=this.blendSrc),this.blendDst!==Gu&&(i.blendDst=this.blendDst),this.blendEquation!==or&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==fl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==np&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Cr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Cr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Cr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Dv extends Da{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=mv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _t=new X,uo=new et;class Bn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=ip,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)uo.fromBufferAttribute(this,n),uo.applyMatrix3(e),this.setXY(n,uo.x,uo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.applyMatrix3(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.applyMatrix4(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.applyNormalMatrix(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.transformDirection(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Vr(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Vt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Vr(n,this.array)),n}setX(e,n){return this.normalized&&(n=Vt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Vr(n,this.array)),n}setY(e,n){return this.normalized&&(n=Vt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Vr(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Vt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Vr(n,this.array)),n}setW(e,n){return this.normalized&&(n=Vt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Vt(n,this.array),i=Vt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Vt(n,this.array),i=Vt(i,this.array),r=Vt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Vt(n,this.array),i=Vt(i,this.array),r=Vt(r,this.array),s=Vt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ip&&(e.usage=this.usage),e}}class Iv extends Bn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Uv extends Bn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class ui extends Bn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let GS=0;const xn=new Rt,zc=new sn,kr=new X,ln=new La,Gs=new La,At=new X;class $n extends Cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:GS++}),this.uuid=Rs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Av(e)?Uv:Iv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ve().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xn.makeRotationFromQuaternion(e),this.applyMatrix4(xn),this}rotateX(e){return xn.makeRotationX(e),this.applyMatrix4(xn),this}rotateY(e){return xn.makeRotationY(e),this.applyMatrix4(xn),this}rotateZ(e){return xn.makeRotationZ(e),this.applyMatrix4(xn),this}translate(e,n,i){return xn.makeTranslation(e,n,i),this.applyMatrix4(xn),this}scale(e,n,i){return xn.makeScale(e,n,i),this.applyMatrix4(xn),this}lookAt(e){return zc.lookAt(e),zc.updateMatrix(),this.applyMatrix4(zc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(kr).negate(),this.translate(kr.x,kr.y,kr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ui(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new La);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];ln.setFromBufferAttribute(s),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Gs.setFromBufferAttribute(o),this.morphTargetsRelative?(At.addVectors(ln.min,Gs.min),ln.expandByPoint(At),At.addVectors(ln.max,Gs.max),ln.expandByPoint(At)):(ln.expandByPoint(Gs.min),ln.expandByPoint(Gs.max))}ln.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)At.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(At));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)At.fromBufferAttribute(o,c),l&&(kr.fromBufferAttribute(e,c),At.add(kr)),r=Math.max(r,i.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,a=n.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],f=[];for(let T=0;T<o;T++)c[T]=new X,f[T]=new X;const p=new X,h=new X,v=new X,_=new et,y=new et,m=new et,u=new X,g=new X;function x(T,P,Y){p.fromArray(r,T*3),h.fromArray(r,P*3),v.fromArray(r,Y*3),_.fromArray(a,T*2),y.fromArray(a,P*2),m.fromArray(a,Y*2),h.sub(p),v.sub(p),y.sub(_),m.sub(_);const ie=1/(y.x*m.y-m.x*y.y);isFinite(ie)&&(u.copy(h).multiplyScalar(m.y).addScaledVector(v,-y.y).multiplyScalar(ie),g.copy(v).multiplyScalar(y.x).addScaledVector(h,-m.x).multiplyScalar(ie),c[T].add(u),c[P].add(u),c[Y].add(u),f[T].add(g),f[P].add(g),f[Y].add(g))}let E=this.groups;E.length===0&&(E=[{start:0,count:i.length}]);for(let T=0,P=E.length;T<P;++T){const Y=E[T],ie=Y.start,D=Y.count;for(let H=ie,$=ie+D;H<$;H+=3)x(i[H+0],i[H+1],i[H+2])}const R=new X,C=new X,w=new X,F=new X;function S(T){w.fromArray(s,T*3),F.copy(w);const P=c[T];R.copy(P),R.sub(w.multiplyScalar(w.dot(P))).normalize(),C.crossVectors(F,P);const ie=C.dot(f[T])<0?-1:1;l[T*4]=R.x,l[T*4+1]=R.y,l[T*4+2]=R.z,l[T*4+3]=ie}for(let T=0,P=E.length;T<P;++T){const Y=E[T],ie=Y.start,D=Y.count;for(let H=ie,$=ie+D;H<$;H+=3)S(i[H+0]),S(i[H+1]),S(i[H+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Bn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,v=i.count;h<v;h++)i.setXYZ(h,0,0,0);const r=new X,s=new X,a=new X,o=new X,l=new X,c=new X,f=new X,p=new X;if(e)for(let h=0,v=e.count;h<v;h+=3){const _=e.getX(h+0),y=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,y),a.fromBufferAttribute(n,m),f.subVectors(a,s),p.subVectors(r,s),f.cross(p),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),o.add(f),l.add(f),c.add(f),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,v=n.count;h<v;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),a.fromBufferAttribute(n,h+2),f.subVectors(a,s),p.subVectors(r,s),f.cross(p),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)At.fromBufferAttribute(e,n),At.normalize(),e.setXYZ(n,At.x,At.y,At.z)}toNonIndexed(){function e(o,l){const c=o.array,f=o.itemSize,p=o.normalized,h=new c.constructor(l.length*f);let v=0,_=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?v=l[y]*o.data.stride+o.offset:v=l[y]*f;for(let u=0;u<f;u++)h[_++]=c[v++]}return new Bn(h,f,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new $n,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let f=0,p=c.length;f<p;f++){const h=c[f],v=e(h,i);l.push(v)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let p=0,h=c.length;p<h;p++){const v=c[p];f.push(v.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],p=s[c];for(let h=0,v=p.length;h<v;h++)f.push(p[h].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,f=a.length;c<f;c++){const p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _p=new Rt,tr=new Nv,ho=new zl,xp=new X,Or=new X,zr=new X,Br=new X,Bc=new X,fo=new X,po=new et,mo=new et,go=new et,yp=new X,Sp=new X,Ep=new X,vo=new X,_o=new X;class Di extends sn{constructor(e=new $n,n=new Dv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){fo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=o[l],p=s[l];f!==0&&(Bc.fromBufferAttribute(p,e),a?fo.addScaledVector(Bc,f):fo.addScaledVector(Bc.sub(n),f))}n.add(fo)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ho.copy(i.boundingSphere),ho.applyMatrix4(s),tr.copy(e.ray).recast(e.near),!(ho.containsPoint(tr.origin)===!1&&(tr.intersectSphere(ho,xp)===null||tr.origin.distanceToSquared(xp)>(e.far-e.near)**2))&&(_p.copy(s).invert(),tr.copy(e.ray).applyMatrix4(_p),!(i.boundingBox!==null&&tr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,tr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,p=s.attributes.normal,h=s.groups,v=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,y=h.length;_<y;_++){const m=h[_],u=a[m.materialIndex],g=Math.max(m.start,v.start),x=Math.min(o.count,Math.min(m.start+m.count,v.start+v.count));for(let E=g,R=x;E<R;E+=3){const C=o.getX(E),w=o.getX(E+1),F=o.getX(E+2);r=xo(this,u,e,i,c,f,p,C,w,F),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,v.start),y=Math.min(o.count,v.start+v.count);for(let m=_,u=y;m<u;m+=3){const g=o.getX(m),x=o.getX(m+1),E=o.getX(m+2);r=xo(this,a,e,i,c,f,p,g,x,E),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,y=h.length;_<y;_++){const m=h[_],u=a[m.materialIndex],g=Math.max(m.start,v.start),x=Math.min(l.count,Math.min(m.start+m.count,v.start+v.count));for(let E=g,R=x;E<R;E+=3){const C=E,w=E+1,F=E+2;r=xo(this,u,e,i,c,f,p,C,w,F),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,v.start),y=Math.min(l.count,v.start+v.count);for(let m=_,u=y;m<u;m+=3){const g=m,x=m+1,E=m+2;r=xo(this,a,e,i,c,f,p,g,x,E),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function VS(t,e,n,i,r,s,a,o){let l;if(e.side===rn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===qi,o),l===null)return null;_o.copy(o),_o.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(_o);return c<n.near||c>n.far?null:{distance:c,point:_o.clone(),object:t}}function xo(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,Or),t.getVertexPosition(l,zr),t.getVertexPosition(c,Br);const f=VS(t,e,n,i,Or,zr,Br,vo);if(f){r&&(po.fromBufferAttribute(r,o),mo.fromBufferAttribute(r,l),go.fromBufferAttribute(r,c),f.uv=Un.getInterpolation(vo,Or,zr,Br,po,mo,go,new et)),s&&(po.fromBufferAttribute(s,o),mo.fromBufferAttribute(s,l),go.fromBufferAttribute(s,c),f.uv1=Un.getInterpolation(vo,Or,zr,Br,po,mo,go,new et),f.uv2=f.uv1),a&&(yp.fromBufferAttribute(a,o),Sp.fromBufferAttribute(a,l),Ep.fromBufferAttribute(a,c),f.normal=Un.getInterpolation(vo,Or,zr,Br,yp,Sp,Ep,new X),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const p={a:o,b:l,c,normal:new X,materialIndex:0};Un.getNormal(Or,zr,Br,p.normal),f.face=p}return f}class Ia extends $n{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],f=[],p=[];let h=0,v=0;_("z","y","x",-1,-1,i,n,e,a,s,0),_("z","y","x",1,-1,i,n,-e,a,s,1),_("x","z","y",1,1,e,i,n,r,a,2),_("x","z","y",1,-1,e,i,-n,r,a,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ui(c,3)),this.setAttribute("normal",new ui(f,3)),this.setAttribute("uv",new ui(p,2));function _(y,m,u,g,x,E,R,C,w,F,S){const T=E/w,P=R/F,Y=E/2,ie=R/2,D=C/2,H=w+1,$=F+1;let B=0,U=0;const z=new X;for(let N=0;N<$;N++){const I=N*P-ie;for(let K=0;K<H;K++){const j=K*T-Y;z[y]=j*g,z[m]=I*x,z[u]=D,c.push(z.x,z.y,z.z),z[y]=0,z[m]=0,z[u]=C>0?1:-1,f.push(z.x,z.y,z.z),p.push(K/w),p.push(1-N/F),B+=1}}for(let N=0;N<F;N++)for(let I=0;I<w;I++){const K=h+I+H*N,j=h+I+H*(N+1),Z=h+(I+1)+H*(N+1),ae=h+(I+1)+H*N;l.push(K,j,ae),l.push(j,Z,ae),U+=6}o.addGroup(v,U,S),v+=U,h+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ia(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ts(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Wt(t){const e={};for(let n=0;n<t.length;n++){const i=Ts(t[n]);for(const r in i)e[r]=i[r]}return e}function WS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Fv(t){return t.getRenderTarget()===null?t.outputColorSpace:Je.workingColorSpace}const XS={clone:Ts,merge:Wt};var qS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,YS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Tr extends Da{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qS,this.fragmentShader=YS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ts(e.uniforms),this.uniformsGroups=WS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class kv extends sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=li}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class dn extends kv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=wa*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ia*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wa*2*Math.atan(Math.tan(ia*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ia*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Hr=-90,jr=1;class $S extends sn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new dn(Hr,jr,e,n);r.layers=this.layers,this.add(r);const s=new dn(Hr,jr,e,n);s.layers=this.layers,this.add(s);const a=new dn(Hr,jr,e,n);a.layers=this.layers,this.add(a);const o=new dn(Hr,jr,e,n);o.layers=this.layers,this.add(o);const l=new dn(Hr,jr,e,n);l.layers=this.layers,this.add(l);const c=new dn(Hr,jr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===li)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===vl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,f]=this.children,p=e.getRenderTarget(),h=e.getActiveCubeFace(),v=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(p,h,v),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Ov extends pn{constructor(e,n,i,r,s,a,o,l,c,f){e=e!==void 0?e:[],n=n!==void 0?n:Ss,super(e,n,i,r,s,a,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class KS extends Mr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(sa("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===vr?Pt:Mn),this.texture=new Ov(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:En}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ia(5,5,5),s=new Tr({name:"CubemapFromEquirect",uniforms:Ts(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:rn,blending:ji});s.uniforms.tEquirect.value=n;const a=new Di(r,s),o=n.minFilter;return n.minFilter===Ma&&(n.minFilter=En),new $S(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const Hc=new X,ZS=new X,QS=new Ve;class sr{constructor(e=new X(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Hc.subVectors(i,n).cross(ZS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Hc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||QS.getNormalMatrix(e),r=this.coplanarPoint(Hc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const nr=new zl,yo=new X;class zv{constructor(e=new sr,n=new sr,i=new sr,r=new sr,s=new sr,a=new sr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=li){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],f=r[5],p=r[6],h=r[7],v=r[8],_=r[9],y=r[10],m=r[11],u=r[12],g=r[13],x=r[14],E=r[15];if(i[0].setComponents(l-s,h-c,m-v,E-u).normalize(),i[1].setComponents(l+s,h+c,m+v,E+u).normalize(),i[2].setComponents(l+a,h+f,m+_,E+g).normalize(),i[3].setComponents(l-a,h-f,m-_,E-g).normalize(),i[4].setComponents(l-o,h-p,m-y,E-x).normalize(),n===li)i[5].setComponents(l+o,h+p,m+y,E+x).normalize();else if(n===vl)i[5].setComponents(o,p,y,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),nr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),nr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(nr)}intersectsSprite(e){return nr.center.set(0,0,0),nr.radius=.7071067811865476,nr.applyMatrix4(e.matrixWorld),this.intersectsSphere(nr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(yo.x=r.normal.x>0?e.max.x:e.min.x,yo.y=r.normal.y>0?e.max.y:e.min.y,yo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(yo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Bv(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function JS(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,f){const p=c.array,h=c.usage,v=p.byteLength,_=t.createBuffer();t.bindBuffer(f,_),t.bufferData(f,p,h),c.onUploadCallback();let y;if(p instanceof Float32Array)y=t.FLOAT;else if(p instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)y=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=t.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=t.SHORT;else if(p instanceof Uint32Array)y=t.UNSIGNED_INT;else if(p instanceof Int32Array)y=t.INT;else if(p instanceof Int8Array)y=t.BYTE;else if(p instanceof Uint8Array)y=t.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:c.version,size:v}}function s(c,f,p){const h=f.array,v=f._updateRange,_=f.updateRanges;if(t.bindBuffer(p,c),v.count===-1&&_.length===0&&t.bufferSubData(p,0,h),_.length!==0){for(let y=0,m=_.length;y<m;y++){const u=_[y];n?t.bufferSubData(p,u.start*h.BYTES_PER_ELEMENT,h,u.start,u.count):t.bufferSubData(p,u.start*h.BYTES_PER_ELEMENT,h.subarray(u.start,u.start+u.count))}f.clearUpdateRanges()}v.count!==-1&&(n?t.bufferSubData(p,v.offset*h.BYTES_PER_ELEMENT,h,v.offset,v.count):t.bufferSubData(p,v.offset*h.BYTES_PER_ELEMENT,h.subarray(v.offset,v.offset+v.count)),v.count=-1),f.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f&&(t.deleteBuffer(f.buffer),i.delete(c))}function l(c,f){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const p=i.get(c);if(p===void 0)i.set(c,r(c,f));else if(p.version<c.version){if(p.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,c,f),p.version=c.version}}return{get:a,remove:o,update:l}}class Qd extends $n{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,f=l+1,p=e/o,h=n/l,v=[],_=[],y=[],m=[];for(let u=0;u<f;u++){const g=u*h-a;for(let x=0;x<c;x++){const E=x*p-s;_.push(E,-g,0),y.push(0,0,1),m.push(x/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let g=0;g<o;g++){const x=g+c*u,E=g+c*(u+1),R=g+1+c*(u+1),C=g+1+c*u;v.push(x,E,C),v.push(E,R,C)}this.setIndex(v),this.setAttribute("position",new ui(_,3)),this.setAttribute("normal",new ui(y,3)),this.setAttribute("uv",new ui(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qd(e.width,e.height,e.widthSegments,e.heightSegments)}}var eE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tE=`#ifdef USE_ALPHAHASH
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
#endif`,nE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,iE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rE=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,sE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aE=`#ifdef USE_AOMAP
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
#endif`,oE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lE=`#ifdef USE_BATCHING
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
#endif`,cE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,uE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,fE=`#ifdef USE_IRIDESCENCE
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
#endif`,pE=`#ifdef USE_BUMPMAP
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
#endif`,mE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,gE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_E=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,SE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,EE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ME=`#define PI 3.141592653589793
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
} // validated`,TE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,wE=`vec3 transformedNormal = objectNormal;
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
#endif`,AE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,CE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,RE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,NE="gl_FragColor = linearToOutputTexel( gl_FragColor );",PE=`
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
}`,LE=`#ifdef USE_ENVMAP
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
#endif`,DE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,IE=`#ifdef USE_ENVMAP
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
#endif`,UE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,FE=`#ifdef USE_ENVMAP
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
#endif`,kE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,OE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,BE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,HE=`#ifdef USE_GRADIENTMAP
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
}`,jE=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,GE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,VE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,WE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,XE=`uniform bool receiveShadow;
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
#endif`,qE=`#ifdef USE_ENVMAP
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
#endif`,YE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$E=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,KE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ZE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,QE=`PhysicalMaterial material;
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
#endif`,JE=`struct PhysicalMaterial {
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
}`,eM=`
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
#endif`,tM=`#if defined( RE_IndirectDiffuse )
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
#endif`,nM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,iM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,aM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,oM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,uM=`#if defined( USE_POINTS_UV )
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
#endif`,dM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pM=`#ifdef USE_MORPHNORMALS
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
#endif`,mM=`#ifdef USE_MORPHTARGETS
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
#endif`,gM=`#ifdef USE_MORPHTARGETS
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
#endif`,vM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,_M=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,SM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,EM=`#ifdef USE_NORMALMAP
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
#endif`,MM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,TM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,AM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,CM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,RM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,NM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,PM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,LM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,DM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,IM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,UM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,FM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,OM=`float getShadowMask() {
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
}`,zM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,BM=`#ifdef USE_SKINNING
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
#endif`,HM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jM=`#ifdef USE_SKINNING
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
#endif`,GM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,VM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,WM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,XM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qM=`#ifdef USE_TRANSMISSION
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
#endif`,YM=`#ifdef USE_TRANSMISSION
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
#endif`,$M=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,KM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ZM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,QM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const JM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,eT=`uniform sampler2D t2D;
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
}`,tT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,iT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sT=`#include <common>
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
}`,aT=`#if DEPTH_PACKING == 3200
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
}`,oT=`#define DISTANCE
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
}`,lT=`#define DISTANCE
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
}`,cT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,uT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dT=`uniform float scale;
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
}`,hT=`uniform vec3 diffuse;
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
}`,fT=`#include <common>
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
}`,pT=`uniform vec3 diffuse;
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
}`,mT=`#define LAMBERT
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
}`,gT=`#define LAMBERT
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
}`,vT=`#define MATCAP
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
}`,_T=`#define MATCAP
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
}`,xT=`#define NORMAL
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
}`,yT=`#define NORMAL
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
}`,ST=`#define PHONG
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
}`,ET=`#define PHONG
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
}`,MT=`#define STANDARD
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
}`,TT=`#define STANDARD
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
}`,wT=`#define TOON
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
}`,AT=`#define TOON
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
}`,bT=`uniform float size;
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
}`,CT=`uniform vec3 diffuse;
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
}`,RT=`#include <common>
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
}`,NT=`uniform vec3 color;
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
}`,PT=`uniform float rotation;
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
}`,LT=`uniform vec3 diffuse;
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
}`,ze={alphahash_fragment:eE,alphahash_pars_fragment:tE,alphamap_fragment:nE,alphamap_pars_fragment:iE,alphatest_fragment:rE,alphatest_pars_fragment:sE,aomap_fragment:aE,aomap_pars_fragment:oE,batching_pars_vertex:lE,batching_vertex:cE,begin_vertex:uE,beginnormal_vertex:dE,bsdfs:hE,iridescence_fragment:fE,bumpmap_pars_fragment:pE,clipping_planes_fragment:mE,clipping_planes_pars_fragment:gE,clipping_planes_pars_vertex:vE,clipping_planes_vertex:_E,color_fragment:xE,color_pars_fragment:yE,color_pars_vertex:SE,color_vertex:EE,common:ME,cube_uv_reflection_fragment:TE,defaultnormal_vertex:wE,displacementmap_pars_vertex:AE,displacementmap_vertex:bE,emissivemap_fragment:CE,emissivemap_pars_fragment:RE,colorspace_fragment:NE,colorspace_pars_fragment:PE,envmap_fragment:LE,envmap_common_pars_fragment:DE,envmap_pars_fragment:IE,envmap_pars_vertex:UE,envmap_physical_pars_fragment:qE,envmap_vertex:FE,fog_vertex:kE,fog_pars_vertex:OE,fog_fragment:zE,fog_pars_fragment:BE,gradientmap_pars_fragment:HE,lightmap_fragment:jE,lightmap_pars_fragment:GE,lights_lambert_fragment:VE,lights_lambert_pars_fragment:WE,lights_pars_begin:XE,lights_toon_fragment:YE,lights_toon_pars_fragment:$E,lights_phong_fragment:KE,lights_phong_pars_fragment:ZE,lights_physical_fragment:QE,lights_physical_pars_fragment:JE,lights_fragment_begin:eM,lights_fragment_maps:tM,lights_fragment_end:nM,logdepthbuf_fragment:iM,logdepthbuf_pars_fragment:rM,logdepthbuf_pars_vertex:sM,logdepthbuf_vertex:aM,map_fragment:oM,map_pars_fragment:lM,map_particle_fragment:cM,map_particle_pars_fragment:uM,metalnessmap_fragment:dM,metalnessmap_pars_fragment:hM,morphcolor_vertex:fM,morphnormal_vertex:pM,morphtarget_pars_vertex:mM,morphtarget_vertex:gM,normal_fragment_begin:vM,normal_fragment_maps:_M,normal_pars_fragment:xM,normal_pars_vertex:yM,normal_vertex:SM,normalmap_pars_fragment:EM,clearcoat_normal_fragment_begin:MM,clearcoat_normal_fragment_maps:TM,clearcoat_pars_fragment:wM,iridescence_pars_fragment:AM,opaque_fragment:bM,packing:CM,premultiplied_alpha_fragment:RM,project_vertex:NM,dithering_fragment:PM,dithering_pars_fragment:LM,roughnessmap_fragment:DM,roughnessmap_pars_fragment:IM,shadowmap_pars_fragment:UM,shadowmap_pars_vertex:FM,shadowmap_vertex:kM,shadowmask_pars_fragment:OM,skinbase_vertex:zM,skinning_pars_vertex:BM,skinning_vertex:HM,skinnormal_vertex:jM,specularmap_fragment:GM,specularmap_pars_fragment:VM,tonemapping_fragment:WM,tonemapping_pars_fragment:XM,transmission_fragment:qM,transmission_pars_fragment:YM,uv_pars_fragment:$M,uv_pars_vertex:KM,uv_vertex:ZM,worldpos_vertex:QM,background_vert:JM,background_frag:eT,backgroundCube_vert:tT,backgroundCube_frag:nT,cube_vert:iT,cube_frag:rT,depth_vert:sT,depth_frag:aT,distanceRGBA_vert:oT,distanceRGBA_frag:lT,equirect_vert:cT,equirect_frag:uT,linedashed_vert:dT,linedashed_frag:hT,meshbasic_vert:fT,meshbasic_frag:pT,meshlambert_vert:mT,meshlambert_frag:gT,meshmatcap_vert:vT,meshmatcap_frag:_T,meshnormal_vert:xT,meshnormal_frag:yT,meshphong_vert:ST,meshphong_frag:ET,meshphysical_vert:MT,meshphysical_frag:TT,meshtoon_vert:wT,meshtoon_frag:AT,points_vert:bT,points_frag:CT,shadow_vert:RT,shadow_frag:NT,sprite_vert:PT,sprite_frag:LT},le={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},Wn={basic:{uniforms:Wt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Wt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Ye(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Wt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Wt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Wt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Ye(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Wt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Wt([le.points,le.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Wt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Wt([le.common,le.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Wt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Wt([le.sprite,le.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:Wt([le.common,le.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:Wt([le.lights,le.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};Wn.physical={uniforms:Wt([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const So={r:0,b:0,g:0};function DT(t,e,n,i,r,s,a){const o=new Ye(0);let l=s===!0?0:1,c,f,p=null,h=0,v=null;function _(m,u){let g=!1,x=u.isScene===!0?u.background:null;x&&x.isTexture&&(x=(u.backgroundBlurriness>0?n:e).get(x)),x===null?y(o,l):x&&x.isColor&&(y(x,1),g=!0);const E=t.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||g)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),x&&(x.isCubeTexture||x.mapping===kl)?(f===void 0&&(f=new Di(new Ia(1,1,1),new Tr({name:"BackgroundCubeMaterial",uniforms:Ts(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(R,C,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),f.material.uniforms.envMap.value=x,f.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,f.material.toneMapped=Je.getTransfer(x.colorSpace)!==at,(p!==x||h!==x.version||v!==t.toneMapping)&&(f.material.needsUpdate=!0,p=x,h=x.version,v=t.toneMapping),f.layers.enableAll(),m.unshift(f,f.geometry,f.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Di(new Qd(2,2),new Tr({name:"BackgroundMaterial",uniforms:Ts(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:qi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=Je.getTransfer(x.colorSpace)!==at,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(p!==x||h!==x.version||v!==t.toneMapping)&&(c.material.needsUpdate=!0,p=x,h=x.version,v=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function y(m,u){m.getRGB(So,Fv(t)),i.buffers.color.setClear(So.r,So.g,So.b,u,a)}return{getClearColor:function(){return o},setClearColor:function(m,u=1){o.set(m),l=u,y(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,y(o,l)},render:_}}function IT(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=m(null);let c=l,f=!1;function p(D,H,$,B,U){let z=!1;if(a){const N=y(B,$,H);c!==N&&(c=N,v(c.object)),z=u(D,B,$,U),z&&g(D,B,$,U)}else{const N=H.wireframe===!0;(c.geometry!==B.id||c.program!==$.id||c.wireframe!==N)&&(c.geometry=B.id,c.program=$.id,c.wireframe=N,z=!0)}U!==null&&n.update(U,t.ELEMENT_ARRAY_BUFFER),(z||f)&&(f=!1,F(D,H,$,B),U!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(U).buffer))}function h(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function v(D){return i.isWebGL2?t.bindVertexArray(D):s.bindVertexArrayOES(D)}function _(D){return i.isWebGL2?t.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function y(D,H,$){const B=$.wireframe===!0;let U=o[D.id];U===void 0&&(U={},o[D.id]=U);let z=U[H.id];z===void 0&&(z={},U[H.id]=z);let N=z[B];return N===void 0&&(N=m(h()),z[B]=N),N}function m(D){const H=[],$=[],B=[];for(let U=0;U<r;U++)H[U]=0,$[U]=0,B[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:$,attributeDivisors:B,object:D,attributes:{},index:null}}function u(D,H,$,B){const U=c.attributes,z=H.attributes;let N=0;const I=$.getAttributes();for(const K in I)if(I[K].location>=0){const Z=U[K];let ae=z[K];if(ae===void 0&&(K==="instanceMatrix"&&D.instanceMatrix&&(ae=D.instanceMatrix),K==="instanceColor"&&D.instanceColor&&(ae=D.instanceColor)),Z===void 0||Z.attribute!==ae||ae&&Z.data!==ae.data)return!0;N++}return c.attributesNum!==N||c.index!==B}function g(D,H,$,B){const U={},z=H.attributes;let N=0;const I=$.getAttributes();for(const K in I)if(I[K].location>=0){let Z=z[K];Z===void 0&&(K==="instanceMatrix"&&D.instanceMatrix&&(Z=D.instanceMatrix),K==="instanceColor"&&D.instanceColor&&(Z=D.instanceColor));const ae={};ae.attribute=Z,Z&&Z.data&&(ae.data=Z.data),U[K]=ae,N++}c.attributes=U,c.attributesNum=N,c.index=B}function x(){const D=c.newAttributes;for(let H=0,$=D.length;H<$;H++)D[H]=0}function E(D){R(D,0)}function R(D,H){const $=c.newAttributes,B=c.enabledAttributes,U=c.attributeDivisors;$[D]=1,B[D]===0&&(t.enableVertexAttribArray(D),B[D]=1),U[D]!==H&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,H),U[D]=H)}function C(){const D=c.newAttributes,H=c.enabledAttributes;for(let $=0,B=H.length;$<B;$++)H[$]!==D[$]&&(t.disableVertexAttribArray($),H[$]=0)}function w(D,H,$,B,U,z,N){N===!0?t.vertexAttribIPointer(D,H,$,U,z):t.vertexAttribPointer(D,H,$,B,U,z)}function F(D,H,$,B){if(i.isWebGL2===!1&&(D.isInstancedMesh||B.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const U=B.attributes,z=$.getAttributes(),N=H.defaultAttributeValues;for(const I in z){const K=z[I];if(K.location>=0){let j=U[I];if(j===void 0&&(I==="instanceMatrix"&&D.instanceMatrix&&(j=D.instanceMatrix),I==="instanceColor"&&D.instanceColor&&(j=D.instanceColor)),j!==void 0){const Z=j.normalized,ae=j.itemSize,pe=n.get(j);if(pe===void 0)continue;const ge=pe.buffer,ye=pe.type,Re=pe.bytesPerElement,Te=i.isWebGL2===!0&&(ye===t.INT||ye===t.UNSIGNED_INT||j.gpuType===vv);if(j.isInterleavedBufferAttribute){const be=j.data,k=be.stride,qe=j.offset;if(be.isInstancedInterleavedBuffer){for(let _e=0;_e<K.locationSize;_e++)R(K.location+_e,be.meshPerAttribute);D.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let _e=0;_e<K.locationSize;_e++)E(K.location+_e);t.bindBuffer(t.ARRAY_BUFFER,ge);for(let _e=0;_e<K.locationSize;_e++)w(K.location+_e,ae/K.locationSize,ye,Z,k*Re,(qe+ae/K.locationSize*_e)*Re,Te)}else{if(j.isInstancedBufferAttribute){for(let be=0;be<K.locationSize;be++)R(K.location+be,j.meshPerAttribute);D.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let be=0;be<K.locationSize;be++)E(K.location+be);t.bindBuffer(t.ARRAY_BUFFER,ge);for(let be=0;be<K.locationSize;be++)w(K.location+be,ae/K.locationSize,ye,Z,ae*Re,ae/K.locationSize*be*Re,Te)}}else if(N!==void 0){const Z=N[I];if(Z!==void 0)switch(Z.length){case 2:t.vertexAttrib2fv(K.location,Z);break;case 3:t.vertexAttrib3fv(K.location,Z);break;case 4:t.vertexAttrib4fv(K.location,Z);break;default:t.vertexAttrib1fv(K.location,Z)}}}}C()}function S(){Y();for(const D in o){const H=o[D];for(const $ in H){const B=H[$];for(const U in B)_(B[U].object),delete B[U];delete H[$]}delete o[D]}}function T(D){if(o[D.id]===void 0)return;const H=o[D.id];for(const $ in H){const B=H[$];for(const U in B)_(B[U].object),delete B[U];delete H[$]}delete o[D.id]}function P(D){for(const H in o){const $=o[H];if($[D.id]===void 0)continue;const B=$[D.id];for(const U in B)_(B[U].object),delete B[U];delete $[D.id]}}function Y(){ie(),f=!0,c!==l&&(c=l,v(c.object))}function ie(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:Y,resetDefaultState:ie,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfProgram:P,initAttributes:x,enableAttribute:E,disableUnusedAttributes:C}}function UT(t,e,n,i){const r=i.isWebGL2;let s;function a(f){s=f}function o(f,p){t.drawArrays(s,f,p),n.update(p,s,1)}function l(f,p,h){if(h===0)return;let v,_;if(r)v=t,_="drawArraysInstanced";else if(v=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",v===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[_](s,f,p,h),n.update(p,s,h)}function c(f,p,h){if(h===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let _=0;_<h;_++)this.render(f[_],p[_]);else{v.multiDrawArraysWEBGL(s,f,0,p,0,h);let _=0;for(let y=0;y<h;y++)_+=p[y];n.update(_,s,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function FT(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let o=n.precision!==void 0?n.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),f=n.logarithmicDepthBuffer===!0,p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),y=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),u=t.getParameter(t.MAX_VARYING_VECTORS),g=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),x=h>0,E=a||e.has("OES_texture_float"),R=x&&E,C=a?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:f,maxTextures:p,maxVertexTextures:h,maxTextureSize:v,maxCubemapSize:_,maxAttributes:y,maxVertexUniforms:m,maxVaryings:u,maxFragmentUniforms:g,vertexTextures:x,floatFragmentTextures:E,floatVertexTextures:R,maxSamples:C}}function kT(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new sr,o=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,h){const v=p.length!==0||h||i!==0||r;return r=h,i=p.length,v},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,h){n=f(p,h,0)},this.setState=function(p,h,v){const _=p.clippingPlanes,y=p.clipIntersection,m=p.clipShadows,u=t.get(p);if(!r||_===null||_.length===0||s&&!m)s?f(null):c();else{const g=s?0:i,x=g*4;let E=u.clippingState||null;l.value=E,E=f(_,h,x,v);for(let R=0;R!==x;++R)E[R]=n[R];u.clippingState=E,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(p,h,v,_){const y=p!==null?p.length:0;let m=null;if(y!==0){if(m=l.value,_!==!0||m===null){const u=v+y*4,g=h.matrixWorldInverse;o.getNormalMatrix(g),(m===null||m.length<u)&&(m=new Float32Array(u));for(let x=0,E=v;x!==y;++x,E+=4)a.copy(p[x]).applyMatrix4(g,o),a.normal.toArray(m,E),m[E+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function OT(t){let e=new WeakMap;function n(a,o){return o===Vu?a.mapping=Ss:o===Wu&&(a.mapping=Es),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Vu||o===Wu)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new KS(l.height/2);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class zT extends kv{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const is=4,Mp=[.125,.215,.35,.446,.526,.582],lr=20,jc=new zT,Tp=new Ye;let Gc=null,Vc=0,Wc=0;const ar=(1+Math.sqrt(5))/2,Gr=1/ar,wp=[new X(1,1,1),new X(-1,1,1),new X(1,1,-1),new X(-1,1,-1),new X(0,ar,Gr),new X(0,ar,-Gr),new X(Gr,0,ar),new X(-Gr,0,ar),new X(ar,Gr,0),new X(-ar,Gr,0)];class Ap{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Gc=this._renderer.getRenderTarget(),Vc=this._renderer.getActiveCubeFace(),Wc=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Gc,Vc,Wc),e.scissorTest=!1,Eo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ss||e.mapping===Es?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Gc=this._renderer.getRenderTarget(),Vc=this._renderer.getActiveCubeFace(),Wc=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:En,minFilter:En,generateMipmaps:!1,type:Ta,format:kn,colorSpace:mi,depthBuffer:!1},r=bp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=BT(s)),this._blurMaterial=HT(s,e,n)}return r}_compileMaterial(e){const n=new Di(this._lodPlanes[0],e);this._renderer.compile(n,jc)}_sceneToCubeUV(e,n,i,r){const o=new dn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,p=f.autoClear,h=f.toneMapping;f.getClearColor(Tp),f.toneMapping=Gi,f.autoClear=!1;const v=new Dv({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),_=new Di(new Ia,v);let y=!1;const m=e.background;m?m.isColor&&(v.color.copy(m),e.background=null,y=!0):(v.color.copy(Tp),y=!0);for(let u=0;u<6;u++){const g=u%3;g===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):g===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));const x=this._cubeSize;Eo(r,g*x,u>2?x:0,x,x),f.setRenderTarget(r),y&&f.render(_,o),f.render(e,o)}_.geometry.dispose(),_.material.dispose(),f.toneMapping=h,f.autoClear=p,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ss||e.mapping===Es;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cp());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Di(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Eo(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,jc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=wp[(r-1)%wp.length];this._blur(e,r-1,r,s,a)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,p=new Di(this._lodPlanes[r],c),h=c.uniforms,v=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*v):2*Math.PI/(2*lr-1),y=s/_,m=isFinite(s)?1+Math.floor(f*y):lr;m>lr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${lr}`);const u=[];let g=0;for(let w=0;w<lr;++w){const F=w/y,S=Math.exp(-F*F/2);u.push(S),w===0?g+=S:w<m&&(g+=2*S)}for(let w=0;w<u.length;w++)u[w]=u[w]/g;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=u,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:x}=this;h.dTheta.value=_,h.mipInt.value=x-i;const E=this._sizeLods[r],R=3*E*(r>x-is?r-x+is:0),C=4*(this._cubeSize-E);Eo(n,R,C,3*E,2*E),l.setRenderTarget(n),l.render(p,jc)}}function BT(t){const e=[],n=[],i=[];let r=t;const s=t-is+1+Mp.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-is?l=Mp[a-t+is-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),f=-c,p=1+c,h=[f,f,p,f,p,p,f,f,p,p,f,p],v=6,_=6,y=3,m=2,u=1,g=new Float32Array(y*_*v),x=new Float32Array(m*_*v),E=new Float32Array(u*_*v);for(let C=0;C<v;C++){const w=C%3*2/3-1,F=C>2?0:-1,S=[w,F,0,w+2/3,F,0,w+2/3,F+1,0,w,F,0,w+2/3,F+1,0,w,F+1,0];g.set(S,y*_*C),x.set(h,m*_*C);const T=[C,C,C,C,C,C];E.set(T,u*_*C)}const R=new $n;R.setAttribute("position",new Bn(g,y)),R.setAttribute("uv",new Bn(x,m)),R.setAttribute("faceIndex",new Bn(E,u)),e.push(R),r>is&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function bp(t,e,n){const i=new Mr(t,e,n);return i.texture.mapping=kl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Eo(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function HT(t,e,n){const i=new Float32Array(lr),r=new X(0,1,0);return new Tr({name:"SphericalGaussianBlur",defines:{n:lr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Jd(),fragmentShader:`

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
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Cp(){return new Tr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jd(),fragmentShader:`

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
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Rp(){return new Tr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Jd(){return`

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
	`}function jT(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Vu||l===Wu,f=l===Ss||l===Es;if(c||f)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let p=e.get(o);return n===null&&(n=new Ap(t)),p=c?n.fromEquirectangular(o,p):n.fromCubemap(o,p),e.set(o,p),p.texture}else{if(e.has(o))return e.get(o).texture;{const p=o.image;if(c&&p&&p.height>0||f&&p&&r(p)){n===null&&(n=new Ap(t));const h=c?n.fromEquirectangular(o):n.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",s),h.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let f=0;f<c;f++)o[f]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function GT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function VT(t,e,n,i){const r={},s=new WeakMap;function a(p){const h=p.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const y=h.morphAttributes[_];for(let m=0,u=y.length;m<u;m++)e.remove(y[m])}h.removeEventListener("dispose",a),delete r[h.id];const v=s.get(h);v&&(e.remove(v),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function o(p,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,n.memory.geometries++),h}function l(p){const h=p.attributes;for(const _ in h)e.update(h[_],t.ARRAY_BUFFER);const v=p.morphAttributes;for(const _ in v){const y=v[_];for(let m=0,u=y.length;m<u;m++)e.update(y[m],t.ARRAY_BUFFER)}}function c(p){const h=[],v=p.index,_=p.attributes.position;let y=0;if(v!==null){const g=v.array;y=v.version;for(let x=0,E=g.length;x<E;x+=3){const R=g[x+0],C=g[x+1],w=g[x+2];h.push(R,C,C,w,w,R)}}else if(_!==void 0){const g=_.array;y=_.version;for(let x=0,E=g.length/3-1;x<E;x+=3){const R=x+0,C=x+1,w=x+2;h.push(R,C,C,w,w,R)}}else return;const m=new(Av(h)?Uv:Iv)(h,1);m.version=y;const u=s.get(p);u&&e.remove(u),s.set(p,m)}function f(p){const h=s.get(p);if(h){const v=p.index;v!==null&&h.version<v.version&&c(p)}else c(p);return s.get(p)}return{get:o,update:l,getWireframeAttribute:f}}function WT(t,e,n,i){const r=i.isWebGL2;let s;function a(v){s=v}let o,l;function c(v){o=v.type,l=v.bytesPerElement}function f(v,_){t.drawElements(s,_,o,v*l),n.update(_,s,1)}function p(v,_,y){if(y===0)return;let m,u;if(r)m=t,u="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[u](s,_,o,v*l,y),n.update(_,s,y)}function h(v,_,y){if(y===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<y;u++)this.render(v[u]/l,_[u]);else{m.multiDrawElementsWEBGL(s,_,0,o,v,0,y);let u=0;for(let g=0;g<y;g++)u+=_[g];n.update(u,s,1)}}this.setMode=a,this.setIndex=c,this.render=f,this.renderInstances=p,this.renderMultiDraw=h}function XT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function qT(t,e){return t[0]-e[0]}function YT(t,e){return Math.abs(e[1])-Math.abs(t[1])}function $T(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,a=new Lt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,f,p){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,y=_!==void 0?_.length:0;let m=s.get(f);if(m===void 0||m.count!==y){let H=function(){ie.dispose(),s.delete(f),f.removeEventListener("dispose",H)};var v=H;m!==void 0&&m.texture.dispose();const x=f.morphAttributes.position!==void 0,E=f.morphAttributes.normal!==void 0,R=f.morphAttributes.color!==void 0,C=f.morphAttributes.position||[],w=f.morphAttributes.normal||[],F=f.morphAttributes.color||[];let S=0;x===!0&&(S=1),E===!0&&(S=2),R===!0&&(S=3);let T=f.attributes.position.count*S,P=1;T>e.maxTextureSize&&(P=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const Y=new Float32Array(T*P*4*y),ie=new Rv(Y,T,P,y);ie.type=Li,ie.needsUpdate=!0;const D=S*4;for(let $=0;$<y;$++){const B=C[$],U=w[$],z=F[$],N=T*P*4*$;for(let I=0;I<B.count;I++){const K=I*D;x===!0&&(a.fromBufferAttribute(B,I),Y[N+K+0]=a.x,Y[N+K+1]=a.y,Y[N+K+2]=a.z,Y[N+K+3]=0),E===!0&&(a.fromBufferAttribute(U,I),Y[N+K+4]=a.x,Y[N+K+5]=a.y,Y[N+K+6]=a.z,Y[N+K+7]=0),R===!0&&(a.fromBufferAttribute(z,I),Y[N+K+8]=a.x,Y[N+K+9]=a.y,Y[N+K+10]=a.z,Y[N+K+11]=z.itemSize===4?a.w:1)}}m={count:y,texture:ie,size:new et(T,P)},s.set(f,m),f.addEventListener("dispose",H)}let u=0;for(let x=0;x<h.length;x++)u+=h[x];const g=f.morphTargetsRelative?1:1-u;p.getUniforms().setValue(t,"morphTargetBaseInfluence",g),p.getUniforms().setValue(t,"morphTargetInfluences",h),p.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),p.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}else{const _=h===void 0?0:h.length;let y=i[f.id];if(y===void 0||y.length!==_){y=[];for(let E=0;E<_;E++)y[E]=[E,0];i[f.id]=y}for(let E=0;E<_;E++){const R=y[E];R[0]=E,R[1]=h[E]}y.sort(YT);for(let E=0;E<8;E++)E<_&&y[E][1]?(o[E][0]=y[E][0],o[E][1]=y[E][1]):(o[E][0]=Number.MAX_SAFE_INTEGER,o[E][1]=0);o.sort(qT);const m=f.morphAttributes.position,u=f.morphAttributes.normal;let g=0;for(let E=0;E<8;E++){const R=o[E],C=R[0],w=R[1];C!==Number.MAX_SAFE_INTEGER&&w?(m&&f.getAttribute("morphTarget"+E)!==m[C]&&f.setAttribute("morphTarget"+E,m[C]),u&&f.getAttribute("morphNormal"+E)!==u[C]&&f.setAttribute("morphNormal"+E,u[C]),r[E]=w,g+=w):(m&&f.hasAttribute("morphTarget"+E)===!0&&f.deleteAttribute("morphTarget"+E),u&&f.hasAttribute("morphNormal"+E)===!0&&f.deleteAttribute("morphNormal"+E),r[E]=0)}const x=f.morphTargetsRelative?1:1-g;p.getUniforms().setValue(t,"morphTargetBaseInfluence",x),p.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function KT(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,f=l.geometry,p=e.get(l,f);if(r.get(p)!==c&&(e.update(p),r.set(p,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return p}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}class Hv extends pn{constructor(e,n,i,r,s,a,o,l,c,f){if(f=f!==void 0?f:gr,f!==gr&&f!==Ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===gr&&(i=Pi),i===void 0&&f===Ms&&(i=mr),super(null,r,s,a,o,l,f,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:qt,this.minFilter=l!==void 0?l:qt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const jv=new pn,Gv=new Hv(1,1);Gv.compareFunction=wv;const Vv=new Rv,Wv=new DS,Xv=new Ov,Np=[],Pp=[],Lp=new Float32Array(16),Dp=new Float32Array(9),Ip=new Float32Array(4);function Ns(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Np[r];if(s===void 0&&(s=new Float32Array(r),Np[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Et(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Mt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Hl(t,e){let n=Pp[e];n===void 0&&(n=new Int32Array(e),Pp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function ZT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function QT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Et(n,e))return;t.uniform2fv(this.addr,e),Mt(n,e)}}function JT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Et(n,e))return;t.uniform3fv(this.addr,e),Mt(n,e)}}function ew(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Et(n,e))return;t.uniform4fv(this.addr,e),Mt(n,e)}}function tw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Et(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Mt(n,e)}else{if(Et(n,i))return;Ip.set(i),t.uniformMatrix2fv(this.addr,!1,Ip),Mt(n,i)}}function nw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Et(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Mt(n,e)}else{if(Et(n,i))return;Dp.set(i),t.uniformMatrix3fv(this.addr,!1,Dp),Mt(n,i)}}function iw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Et(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Mt(n,e)}else{if(Et(n,i))return;Lp.set(i),t.uniformMatrix4fv(this.addr,!1,Lp),Mt(n,i)}}function rw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function sw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Et(n,e))return;t.uniform2iv(this.addr,e),Mt(n,e)}}function aw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Et(n,e))return;t.uniform3iv(this.addr,e),Mt(n,e)}}function ow(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Et(n,e))return;t.uniform4iv(this.addr,e),Mt(n,e)}}function lw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function cw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Et(n,e))return;t.uniform2uiv(this.addr,e),Mt(n,e)}}function uw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Et(n,e))return;t.uniform3uiv(this.addr,e),Mt(n,e)}}function dw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Et(n,e))return;t.uniform4uiv(this.addr,e),Mt(n,e)}}function hw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?Gv:jv;n.setTexture2D(e||s,r)}function fw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Wv,r)}function pw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Xv,r)}function mw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Vv,r)}function gw(t){switch(t){case 5126:return ZT;case 35664:return QT;case 35665:return JT;case 35666:return ew;case 35674:return tw;case 35675:return nw;case 35676:return iw;case 5124:case 35670:return rw;case 35667:case 35671:return sw;case 35668:case 35672:return aw;case 35669:case 35673:return ow;case 5125:return lw;case 36294:return cw;case 36295:return uw;case 36296:return dw;case 35678:case 36198:case 36298:case 36306:case 35682:return hw;case 35679:case 36299:case 36307:return fw;case 35680:case 36300:case 36308:case 36293:return pw;case 36289:case 36303:case 36311:case 36292:return mw}}function vw(t,e){t.uniform1fv(this.addr,e)}function _w(t,e){const n=Ns(e,this.size,2);t.uniform2fv(this.addr,n)}function xw(t,e){const n=Ns(e,this.size,3);t.uniform3fv(this.addr,n)}function yw(t,e){const n=Ns(e,this.size,4);t.uniform4fv(this.addr,n)}function Sw(t,e){const n=Ns(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Ew(t,e){const n=Ns(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Mw(t,e){const n=Ns(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Tw(t,e){t.uniform1iv(this.addr,e)}function ww(t,e){t.uniform2iv(this.addr,e)}function Aw(t,e){t.uniform3iv(this.addr,e)}function bw(t,e){t.uniform4iv(this.addr,e)}function Cw(t,e){t.uniform1uiv(this.addr,e)}function Rw(t,e){t.uniform2uiv(this.addr,e)}function Nw(t,e){t.uniform3uiv(this.addr,e)}function Pw(t,e){t.uniform4uiv(this.addr,e)}function Lw(t,e,n){const i=this.cache,r=e.length,s=Hl(n,r);Et(i,s)||(t.uniform1iv(this.addr,s),Mt(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||jv,s[a])}function Dw(t,e,n){const i=this.cache,r=e.length,s=Hl(n,r);Et(i,s)||(t.uniform1iv(this.addr,s),Mt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Wv,s[a])}function Iw(t,e,n){const i=this.cache,r=e.length,s=Hl(n,r);Et(i,s)||(t.uniform1iv(this.addr,s),Mt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||Xv,s[a])}function Uw(t,e,n){const i=this.cache,r=e.length,s=Hl(n,r);Et(i,s)||(t.uniform1iv(this.addr,s),Mt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Vv,s[a])}function Fw(t){switch(t){case 5126:return vw;case 35664:return _w;case 35665:return xw;case 35666:return yw;case 35674:return Sw;case 35675:return Ew;case 35676:return Mw;case 5124:case 35670:return Tw;case 35667:case 35671:return ww;case 35668:case 35672:return Aw;case 35669:case 35673:return bw;case 5125:return Cw;case 36294:return Rw;case 36295:return Nw;case 36296:return Pw;case 35678:case 36198:case 36298:case 36306:case 35682:return Lw;case 35679:case 36299:case 36307:return Dw;case 35680:case 36300:case 36308:case 36293:return Iw;case 36289:case 36303:case 36311:case 36292:return Uw}}class kw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=gw(n.type)}}class Ow{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Fw(n.type)}}class zw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const Xc=/(\w+)(\])?(\[|\.)?/g;function Up(t,e){t.seq.push(e),t.map[e.id]=e}function Bw(t,e,n){const i=t.name,r=i.length;for(Xc.lastIndex=0;;){const s=Xc.exec(i),a=Xc.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Up(n,c===void 0?new kw(o,t,e):new Ow(o,t,e));break}else{let p=n.map[o];p===void 0&&(p=new zw(o),Up(n,p)),n=p}}}class zo{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);Bw(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Fp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Hw=37297;let jw=0;function Gw(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function Vw(t){const e=Je.getPrimaries(Je.workingColorSpace),n=Je.getPrimaries(t);let i;switch(e===n?i="":e===gl&&n===ml?i="LinearDisplayP3ToLinearSRGB":e===ml&&n===gl&&(i="LinearSRGBToLinearDisplayP3"),t){case mi:case Ol:return[i,"LinearTransferOETF"];case Pt:case Kd:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function kp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+Gw(t.getShaderSource(e),a)}else return r}function Ww(t,e){const n=Vw(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function Xw(t,e){let n;switch(e){case jy:n="Linear";break;case Gy:n="Reinhard";break;case Vy:n="OptimizedCineon";break;case Wy:n="ACESFilmic";break;case qy:n="AgX";break;case Xy:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function qw(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(rs).join(`
`)}function Yw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(rs).join(`
`)}function $w(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Kw(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function rs(t){return t!==""}function Op(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Zw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ku(t){return t.replace(Zw,Jw)}const Qw=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Jw(t,e){let n=ze[e];if(n===void 0){const i=Qw.get(e);if(i!==void 0)n=ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ku(n)}const e1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bp(t){return t.replace(e1,t1)}function t1(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Hp(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function n1(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===pv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===gy?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ni&&(e="SHADOWMAP_TYPE_VSM"),e}function i1(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ss:case Es:e="ENVMAP_TYPE_CUBE";break;case kl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function r1(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Es:e="ENVMAP_MODE_REFRACTION";break}return e}function s1(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case mv:e="ENVMAP_BLENDING_MULTIPLY";break;case By:e="ENVMAP_BLENDING_MIX";break;case Hy:e="ENVMAP_BLENDING_ADD";break}return e}function a1(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function o1(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=n1(n),c=i1(n),f=r1(n),p=s1(n),h=a1(n),v=n.isWebGL2?"":qw(n),_=Yw(n),y=$w(s),m=r.createProgram();let u,g,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(rs).join(`
`),u.length>0&&(u+=`
`),g=[v,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(rs).join(`
`),g.length>0&&(g+=`
`)):(u=[Hp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rs).join(`
`),g=[v,Hp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+p:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Gi?"#define TONE_MAPPING":"",n.toneMapping!==Gi?ze.tonemapping_pars_fragment:"",n.toneMapping!==Gi?Xw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,Ww("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(rs).join(`
`)),a=Ku(a),a=Op(a,n),a=zp(a,n),o=Ku(o),o=Op(o,n),o=zp(o,n),a=Bp(a),o=Bp(o),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,u=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,g=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===rp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===rp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const E=x+u+a,R=x+g+o,C=Fp(r,r.VERTEX_SHADER,E),w=Fp(r,r.FRAGMENT_SHADER,R);r.attachShader(m,C),r.attachShader(m,w),n.index0AttributeName!==void 0?r.bindAttribLocation(m,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function F(Y){if(t.debug.checkShaderErrors){const ie=r.getProgramInfoLog(m).trim(),D=r.getShaderInfoLog(C).trim(),H=r.getShaderInfoLog(w).trim();let $=!0,B=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if($=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,m,C,w);else{const U=kp(r,C,"vertex"),z=kp(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+ie+`
`+U+`
`+z)}else ie!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ie):(D===""||H==="")&&(B=!1);B&&(Y.diagnostics={runnable:$,programLog:ie,vertexShader:{log:D,prefix:u},fragmentShader:{log:H,prefix:g}})}r.deleteShader(C),r.deleteShader(w),S=new zo(r,m),T=Kw(r,m)}let S;this.getUniforms=function(){return S===void 0&&F(this),S};let T;this.getAttributes=function(){return T===void 0&&F(this),T};let P=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(m,Hw)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=jw++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=C,this.fragmentShader=w,this}let l1=0;class c1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new u1(e),n.set(e,i)),i}}class u1{constructor(e){this.id=l1++,this.code=e,this.usedTimes=0}}function d1(t,e,n,i,r,s,a){const o=new Pv,l=new c1,c=[],f=r.isWebGL2,p=r.logarithmicDepthBuffer,h=r.vertexTextures;let v=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(S){return S===0?"uv":`uv${S}`}function m(S,T,P,Y,ie){const D=Y.fog,H=ie.geometry,$=S.isMeshStandardMaterial?Y.environment:null,B=(S.isMeshStandardMaterial?n:e).get(S.envMap||$),U=B&&B.mapping===kl?B.image.height:null,z=_[S.type];S.precision!==null&&(v=r.getMaxPrecision(S.precision),v!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",v,"instead."));const N=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,I=N!==void 0?N.length:0;let K=0;H.morphAttributes.position!==void 0&&(K=1),H.morphAttributes.normal!==void 0&&(K=2),H.morphAttributes.color!==void 0&&(K=3);let j,Z,ae,pe;if(z){const jt=Wn[z];j=jt.vertexShader,Z=jt.fragmentShader}else j=S.vertexShader,Z=S.fragmentShader,l.update(S),ae=l.getVertexShaderID(S),pe=l.getFragmentShaderID(S);const ge=t.getRenderTarget(),ye=ie.isInstancedMesh===!0,Re=ie.isBatchedMesh===!0,Te=!!S.map,be=!!S.matcap,k=!!B,qe=!!S.aoMap,_e=!!S.lightMap,Q=!!S.bumpMap,J=!!S.normalMap,de=!!S.displacementMap,me=!!S.emissiveMap,A=!!S.metalnessMap,M=!!S.roughnessMap,G=S.anisotropy>0,re=S.clearcoat>0,te=S.iridescence>0,se=S.sheen>0,we=S.transmission>0,he=G&&!!S.anisotropyMap,Se=re&&!!S.clearcoatMap,Le=re&&!!S.clearcoatNormalMap,Be=re&&!!S.clearcoatRoughnessMap,ee=te&&!!S.iridescenceMap,Qe=te&&!!S.iridescenceThicknessMap,We=se&&!!S.sheenColorMap,Ue=se&&!!S.sheenRoughnessMap,Ce=!!S.specularMap,Ee=!!S.specularColorMap,Oe=!!S.specularIntensityMap,Ke=we&&!!S.transmissionMap,ft=we&&!!S.thicknessMap,je=!!S.gradientMap,oe=!!S.alphaMap,L=S.alphaTest>0,ce=!!S.alphaHash,ue=!!S.extensions,De=!!H.attributes.uv1,Ne=!!H.attributes.uv2,tt=!!H.attributes.uv3;let nt=Gi;return S.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(nt=t.toneMapping),{isWebGL2:f,shaderID:z,shaderType:S.type,shaderName:S.name,vertexShader:j,fragmentShader:Z,defines:S.defines,customVertexShaderID:ae,customFragmentShaderID:pe,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:v,batching:Re,instancing:ye,instancingColor:ye&&ie.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:ge===null?t.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:mi,map:Te,matcap:be,envMap:k,envMapMode:k&&B.mapping,envMapCubeUVHeight:U,aoMap:qe,lightMap:_e,bumpMap:Q,normalMap:J,displacementMap:h&&de,emissiveMap:me,normalMapObjectSpace:J&&S.normalMapType===aS,normalMapTangentSpace:J&&S.normalMapType===sS,metalnessMap:A,roughnessMap:M,anisotropy:G,anisotropyMap:he,clearcoat:re,clearcoatMap:Se,clearcoatNormalMap:Le,clearcoatRoughnessMap:Be,iridescence:te,iridescenceMap:ee,iridescenceThicknessMap:Qe,sheen:se,sheenColorMap:We,sheenRoughnessMap:Ue,specularMap:Ce,specularColorMap:Ee,specularIntensityMap:Oe,transmission:we,transmissionMap:Ke,thicknessMap:ft,gradientMap:je,opaque:S.transparent===!1&&S.blending===ds,alphaMap:oe,alphaTest:L,alphaHash:ce,combine:S.combine,mapUv:Te&&y(S.map.channel),aoMapUv:qe&&y(S.aoMap.channel),lightMapUv:_e&&y(S.lightMap.channel),bumpMapUv:Q&&y(S.bumpMap.channel),normalMapUv:J&&y(S.normalMap.channel),displacementMapUv:de&&y(S.displacementMap.channel),emissiveMapUv:me&&y(S.emissiveMap.channel),metalnessMapUv:A&&y(S.metalnessMap.channel),roughnessMapUv:M&&y(S.roughnessMap.channel),anisotropyMapUv:he&&y(S.anisotropyMap.channel),clearcoatMapUv:Se&&y(S.clearcoatMap.channel),clearcoatNormalMapUv:Le&&y(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Be&&y(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&y(S.iridescenceMap.channel),iridescenceThicknessMapUv:Qe&&y(S.iridescenceThicknessMap.channel),sheenColorMapUv:We&&y(S.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&y(S.sheenRoughnessMap.channel),specularMapUv:Ce&&y(S.specularMap.channel),specularColorMapUv:Ee&&y(S.specularColorMap.channel),specularIntensityMapUv:Oe&&y(S.specularIntensityMap.channel),transmissionMapUv:Ke&&y(S.transmissionMap.channel),thicknessMapUv:ft&&y(S.thicknessMap.channel),alphaMapUv:oe&&y(S.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(J||G),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,vertexUv1s:De,vertexUv2s:Ne,vertexUv3s:tt,pointsUvs:ie.isPoints===!0&&!!H.attributes.uv&&(Te||oe),fog:!!D,useFog:S.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:ie.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:K,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:nt,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Te&&S.map.isVideoTexture===!0&&Je.getTransfer(S.map.colorSpace)===at,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===si,flipSided:S.side===rn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:ue&&S.extensions.derivatives===!0,extensionFragDepth:ue&&S.extensions.fragDepth===!0,extensionDrawBuffers:ue&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:ue&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ue&&S.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function u(S){const T=[];if(S.shaderID?T.push(S.shaderID):(T.push(S.customVertexShaderID),T.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)T.push(P),T.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(g(T,S),x(T,S),T.push(t.outputColorSpace)),T.push(S.customProgramCacheKey),T.join()}function g(S,T){S.push(T.precision),S.push(T.outputColorSpace),S.push(T.envMapMode),S.push(T.envMapCubeUVHeight),S.push(T.mapUv),S.push(T.alphaMapUv),S.push(T.lightMapUv),S.push(T.aoMapUv),S.push(T.bumpMapUv),S.push(T.normalMapUv),S.push(T.displacementMapUv),S.push(T.emissiveMapUv),S.push(T.metalnessMapUv),S.push(T.roughnessMapUv),S.push(T.anisotropyMapUv),S.push(T.clearcoatMapUv),S.push(T.clearcoatNormalMapUv),S.push(T.clearcoatRoughnessMapUv),S.push(T.iridescenceMapUv),S.push(T.iridescenceThicknessMapUv),S.push(T.sheenColorMapUv),S.push(T.sheenRoughnessMapUv),S.push(T.specularMapUv),S.push(T.specularColorMapUv),S.push(T.specularIntensityMapUv),S.push(T.transmissionMapUv),S.push(T.thicknessMapUv),S.push(T.combine),S.push(T.fogExp2),S.push(T.sizeAttenuation),S.push(T.morphTargetsCount),S.push(T.morphAttributeCount),S.push(T.numDirLights),S.push(T.numPointLights),S.push(T.numSpotLights),S.push(T.numSpotLightMaps),S.push(T.numHemiLights),S.push(T.numRectAreaLights),S.push(T.numDirLightShadows),S.push(T.numPointLightShadows),S.push(T.numSpotLightShadows),S.push(T.numSpotLightShadowsWithMaps),S.push(T.numLightProbes),S.push(T.shadowMapType),S.push(T.toneMapping),S.push(T.numClippingPlanes),S.push(T.numClipIntersection),S.push(T.depthPacking)}function x(S,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),T.batching&&o.enable(19),S.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.skinning&&o.enable(4),T.morphTargets&&o.enable(5),T.morphNormals&&o.enable(6),T.morphColors&&o.enable(7),T.premultipliedAlpha&&o.enable(8),T.shadowMapEnabled&&o.enable(9),T.useLegacyLights&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),S.push(o.mask)}function E(S){const T=_[S.type];let P;if(T){const Y=Wn[T];P=XS.clone(Y.uniforms)}else P=S.uniforms;return P}function R(S,T){let P;for(let Y=0,ie=c.length;Y<ie;Y++){const D=c[Y];if(D.cacheKey===T){P=D,++P.usedTimes;break}}return P===void 0&&(P=new o1(t,T,S,s),c.push(P)),P}function C(S){if(--S.usedTimes===0){const T=c.indexOf(S);c[T]=c[c.length-1],c.pop(),S.destroy()}}function w(S){l.remove(S)}function F(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:E,acquireProgram:R,releaseProgram:C,releaseShaderCache:w,programs:c,dispose:F}}function h1(){let t=new WeakMap;function e(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function n(s){t.delete(s)}function i(s,a,o){t.get(s)[a]=o}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function f1(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function jp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Gp(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(p,h,v,_,y,m){let u=t[e];return u===void 0?(u={id:p.id,object:p,geometry:h,material:v,groupOrder:_,renderOrder:p.renderOrder,z:y,group:m},t[e]=u):(u.id=p.id,u.object=p,u.geometry=h,u.material=v,u.groupOrder=_,u.renderOrder=p.renderOrder,u.z=y,u.group=m),e++,u}function o(p,h,v,_,y,m){const u=a(p,h,v,_,y,m);v.transmission>0?i.push(u):v.transparent===!0?r.push(u):n.push(u)}function l(p,h,v,_,y,m){const u=a(p,h,v,_,y,m);v.transmission>0?i.unshift(u):v.transparent===!0?r.unshift(u):n.unshift(u)}function c(p,h){n.length>1&&n.sort(p||f1),i.length>1&&i.sort(h||jp),r.length>1&&r.sort(h||jp)}function f(){for(let p=e,h=t.length;p<h;p++){const v=t[p];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:f,sort:c}}function p1(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Gp,t.set(i,[a])):r>=s.length?(a=new Gp,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function m1(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new X,color:new Ye};break;case"SpotLight":n={position:new X,direction:new X,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new X,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":n={direction:new X,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":n={color:new Ye,position:new X,halfWidth:new X,halfHeight:new X};break}return t[e.id]=n,n}}}function g1(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let v1=0;function _1(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function x1(t,e){const n=new m1,i=g1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)r.probe.push(new X);const s=new X,a=new Rt,o=new Rt;function l(f,p){let h=0,v=0,_=0;for(let Y=0;Y<9;Y++)r.probe[Y].set(0,0,0);let y=0,m=0,u=0,g=0,x=0,E=0,R=0,C=0,w=0,F=0,S=0;f.sort(_1);const T=p===!0?Math.PI:1;for(let Y=0,ie=f.length;Y<ie;Y++){const D=f[Y],H=D.color,$=D.intensity,B=D.distance,U=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=H.r*$*T,v+=H.g*$*T,_+=H.b*$*T;else if(D.isLightProbe){for(let z=0;z<9;z++)r.probe[z].addScaledVector(D.sh.coefficients[z],$);S++}else if(D.isDirectionalLight){const z=n.get(D);if(z.color.copy(D.color).multiplyScalar(D.intensity*T),D.castShadow){const N=D.shadow,I=i.get(D);I.shadowBias=N.bias,I.shadowNormalBias=N.normalBias,I.shadowRadius=N.radius,I.shadowMapSize=N.mapSize,r.directionalShadow[y]=I,r.directionalShadowMap[y]=U,r.directionalShadowMatrix[y]=D.shadow.matrix,E++}r.directional[y]=z,y++}else if(D.isSpotLight){const z=n.get(D);z.position.setFromMatrixPosition(D.matrixWorld),z.color.copy(H).multiplyScalar($*T),z.distance=B,z.coneCos=Math.cos(D.angle),z.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),z.decay=D.decay,r.spot[u]=z;const N=D.shadow;if(D.map&&(r.spotLightMap[w]=D.map,w++,N.updateMatrices(D),D.castShadow&&F++),r.spotLightMatrix[u]=N.matrix,D.castShadow){const I=i.get(D);I.shadowBias=N.bias,I.shadowNormalBias=N.normalBias,I.shadowRadius=N.radius,I.shadowMapSize=N.mapSize,r.spotShadow[u]=I,r.spotShadowMap[u]=U,C++}u++}else if(D.isRectAreaLight){const z=n.get(D);z.color.copy(H).multiplyScalar($),z.halfWidth.set(D.width*.5,0,0),z.halfHeight.set(0,D.height*.5,0),r.rectArea[g]=z,g++}else if(D.isPointLight){const z=n.get(D);if(z.color.copy(D.color).multiplyScalar(D.intensity*T),z.distance=D.distance,z.decay=D.decay,D.castShadow){const N=D.shadow,I=i.get(D);I.shadowBias=N.bias,I.shadowNormalBias=N.normalBias,I.shadowRadius=N.radius,I.shadowMapSize=N.mapSize,I.shadowCameraNear=N.camera.near,I.shadowCameraFar=N.camera.far,r.pointShadow[m]=I,r.pointShadowMap[m]=U,r.pointShadowMatrix[m]=D.shadow.matrix,R++}r.point[m]=z,m++}else if(D.isHemisphereLight){const z=n.get(D);z.skyColor.copy(D.color).multiplyScalar($*T),z.groundColor.copy(D.groundColor).multiplyScalar($*T),r.hemi[x]=z,x++}}g>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=le.LTC_FLOAT_1,r.rectAreaLTC2=le.LTC_FLOAT_2):(r.rectAreaLTC1=le.LTC_HALF_1,r.rectAreaLTC2=le.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=le.LTC_FLOAT_1,r.rectAreaLTC2=le.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=le.LTC_HALF_1,r.rectAreaLTC2=le.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=v,r.ambient[2]=_;const P=r.hash;(P.directionalLength!==y||P.pointLength!==m||P.spotLength!==u||P.rectAreaLength!==g||P.hemiLength!==x||P.numDirectionalShadows!==E||P.numPointShadows!==R||P.numSpotShadows!==C||P.numSpotMaps!==w||P.numLightProbes!==S)&&(r.directional.length=y,r.spot.length=u,r.rectArea.length=g,r.point.length=m,r.hemi.length=x,r.directionalShadow.length=E,r.directionalShadowMap.length=E,r.pointShadow.length=R,r.pointShadowMap.length=R,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=E,r.pointShadowMatrix.length=R,r.spotLightMatrix.length=C+w-F,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=S,P.directionalLength=y,P.pointLength=m,P.spotLength=u,P.rectAreaLength=g,P.hemiLength=x,P.numDirectionalShadows=E,P.numPointShadows=R,P.numSpotShadows=C,P.numSpotMaps=w,P.numLightProbes=S,r.version=v1++)}function c(f,p){let h=0,v=0,_=0,y=0,m=0;const u=p.matrixWorldInverse;for(let g=0,x=f.length;g<x;g++){const E=f[g];if(E.isDirectionalLight){const R=r.directional[h];R.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(u),h++}else if(E.isSpotLight){const R=r.spot[_];R.position.setFromMatrixPosition(E.matrixWorld),R.position.applyMatrix4(u),R.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(u),_++}else if(E.isRectAreaLight){const R=r.rectArea[y];R.position.setFromMatrixPosition(E.matrixWorld),R.position.applyMatrix4(u),o.identity(),a.copy(E.matrixWorld),a.premultiply(u),o.extractRotation(a),R.halfWidth.set(E.width*.5,0,0),R.halfHeight.set(0,E.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),y++}else if(E.isPointLight){const R=r.point[v];R.position.setFromMatrixPosition(E.matrixWorld),R.position.applyMatrix4(u),v++}else if(E.isHemisphereLight){const R=r.hemi[m];R.direction.setFromMatrixPosition(E.matrixWorld),R.direction.transformDirection(u),m++}}}return{setup:l,setupView:c,state:r}}function Vp(t,e){const n=new x1(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(p){i.push(p)}function o(p){r.push(p)}function l(p){n.setup(i,p)}function c(p){n.setupView(i,p)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function y1(t,e){let n=new WeakMap;function i(s,a=0){const o=n.get(s);let l;return o===void 0?(l=new Vp(t,e),n.set(s,[l])):a>=o.length?(l=new Vp(t,e),o.push(l)):l=o[a],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class S1 extends Da{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=iS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class E1 extends Da{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const M1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,T1=`uniform sampler2D shadow_pass;
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
}`;function w1(t,e,n){let i=new zv;const r=new et,s=new et,a=new Lt,o=new S1({depthPacking:rS}),l=new E1,c={},f=n.maxTextureSize,p={[qi]:rn,[rn]:qi,[si]:si},h=new Tr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:M1,fragmentShader:T1}),v=h.clone();v.defines.HORIZONTAL_PASS=1;const _=new $n;_.setAttribute("position",new Bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Di(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pv;let u=this.type;this.render=function(C,w,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const S=t.getRenderTarget(),T=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),Y=t.state;Y.setBlending(ji),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const ie=u!==ni&&this.type===ni,D=u===ni&&this.type!==ni;for(let H=0,$=C.length;H<$;H++){const B=C[H],U=B.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const z=U.getFrameExtents();if(r.multiply(z),s.copy(U.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/z.x),r.x=s.x*z.x,U.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/z.y),r.y=s.y*z.y,U.mapSize.y=s.y)),U.map===null||ie===!0||D===!0){const I=this.type!==ni?{minFilter:qt,magFilter:qt}:{};U.map!==null&&U.map.dispose(),U.map=new Mr(r.x,r.y,I),U.map.texture.name=B.name+".shadowMap",U.camera.updateProjectionMatrix()}t.setRenderTarget(U.map),t.clear();const N=U.getViewportCount();for(let I=0;I<N;I++){const K=U.getViewport(I);a.set(s.x*K.x,s.y*K.y,s.x*K.z,s.y*K.w),Y.viewport(a),U.updateMatrices(B,I),i=U.getFrustum(),E(w,F,U.camera,B,this.type)}U.isPointLightShadow!==!0&&this.type===ni&&g(U,F),U.needsUpdate=!1}u=this.type,m.needsUpdate=!1,t.setRenderTarget(S,T,P)};function g(C,w){const F=e.update(y);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,v.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,v.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Mr(r.x,r.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(w,null,F,h,y,null),v.uniforms.shadow_pass.value=C.mapPass.texture,v.uniforms.resolution.value=C.mapSize,v.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(w,null,F,v,y,null)}function x(C,w,F,S){let T=null;const P=F.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(P!==void 0)T=P;else if(T=F.isPointLight===!0?l:o,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const Y=T.uuid,ie=w.uuid;let D=c[Y];D===void 0&&(D={},c[Y]=D);let H=D[ie];H===void 0&&(H=T.clone(),D[ie]=H,w.addEventListener("dispose",R)),T=H}if(T.visible=w.visible,T.wireframe=w.wireframe,S===ni?T.side=w.shadowSide!==null?w.shadowSide:w.side:T.side=w.shadowSide!==null?w.shadowSide:p[w.side],T.alphaMap=w.alphaMap,T.alphaTest=w.alphaTest,T.map=w.map,T.clipShadows=w.clipShadows,T.clippingPlanes=w.clippingPlanes,T.clipIntersection=w.clipIntersection,T.displacementMap=w.displacementMap,T.displacementScale=w.displacementScale,T.displacementBias=w.displacementBias,T.wireframeLinewidth=w.wireframeLinewidth,T.linewidth=w.linewidth,F.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const Y=t.properties.get(T);Y.light=F}return T}function E(C,w,F,S,T){if(C.visible===!1)return;if(C.layers.test(w.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&T===ni)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,C.matrixWorld);const ie=e.update(C),D=C.material;if(Array.isArray(D)){const H=ie.groups;for(let $=0,B=H.length;$<B;$++){const U=H[$],z=D[U.materialIndex];if(z&&z.visible){const N=x(C,z,S,T);C.onBeforeShadow(t,C,w,F,ie,N,U),t.renderBufferDirect(F,null,ie,N,C,U),C.onAfterShadow(t,C,w,F,ie,N,U)}}}else if(D.visible){const H=x(C,D,S,T);C.onBeforeShadow(t,C,w,F,ie,H,null),t.renderBufferDirect(F,null,ie,H,C,null),C.onAfterShadow(t,C,w,F,ie,H,null)}}const Y=C.children;for(let ie=0,D=Y.length;ie<D;ie++)E(Y[ie],w,F,S,T)}function R(C){C.target.removeEventListener("dispose",R);for(const F in c){const S=c[F],T=C.target.uuid;T in S&&(S[T].dispose(),delete S[T])}}}function A1(t,e,n){const i=n.isWebGL2;function r(){let L=!1;const ce=new Lt;let ue=null;const De=new Lt(0,0,0,0);return{setMask:function(Ne){ue!==Ne&&!L&&(t.colorMask(Ne,Ne,Ne,Ne),ue=Ne)},setLocked:function(Ne){L=Ne},setClear:function(Ne,tt,nt,Tt,jt){jt===!0&&(Ne*=Tt,tt*=Tt,nt*=Tt),ce.set(Ne,tt,nt,Tt),De.equals(ce)===!1&&(t.clearColor(Ne,tt,nt,Tt),De.copy(ce))},reset:function(){L=!1,ue=null,De.set(-1,0,0,0)}}}function s(){let L=!1,ce=null,ue=null,De=null;return{setTest:function(Ne){Ne?Re(t.DEPTH_TEST):Te(t.DEPTH_TEST)},setMask:function(Ne){ce!==Ne&&!L&&(t.depthMask(Ne),ce=Ne)},setFunc:function(Ne){if(ue!==Ne){switch(Ne){case Dy:t.depthFunc(t.NEVER);break;case Iy:t.depthFunc(t.ALWAYS);break;case Uy:t.depthFunc(t.LESS);break;case fl:t.depthFunc(t.LEQUAL);break;case Fy:t.depthFunc(t.EQUAL);break;case ky:t.depthFunc(t.GEQUAL);break;case Oy:t.depthFunc(t.GREATER);break;case zy:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ue=Ne}},setLocked:function(Ne){L=Ne},setClear:function(Ne){De!==Ne&&(t.clearDepth(Ne),De=Ne)},reset:function(){L=!1,ce=null,ue=null,De=null}}}function a(){let L=!1,ce=null,ue=null,De=null,Ne=null,tt=null,nt=null,Tt=null,jt=null;return{setTest:function(it){L||(it?Re(t.STENCIL_TEST):Te(t.STENCIL_TEST))},setMask:function(it){ce!==it&&!L&&(t.stencilMask(it),ce=it)},setFunc:function(it,Gt,jn){(ue!==it||De!==Gt||Ne!==jn)&&(t.stencilFunc(it,Gt,jn),ue=it,De=Gt,Ne=jn)},setOp:function(it,Gt,jn){(tt!==it||nt!==Gt||Tt!==jn)&&(t.stencilOp(it,Gt,jn),tt=it,nt=Gt,Tt=jn)},setLocked:function(it){L=it},setClear:function(it){jt!==it&&(t.clearStencil(it),jt=it)},reset:function(){L=!1,ce=null,ue=null,De=null,Ne=null,tt=null,nt=null,Tt=null,jt=null}}}const o=new r,l=new s,c=new a,f=new WeakMap,p=new WeakMap;let h={},v={},_=new WeakMap,y=[],m=null,u=!1,g=null,x=null,E=null,R=null,C=null,w=null,F=null,S=new Ye(0,0,0),T=0,P=!1,Y=null,ie=null,D=null,H=null,$=null;const B=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,z=0;const N=t.getParameter(t.VERSION);N.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(N)[1]),U=z>=1):N.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),U=z>=2);let I=null,K={};const j=t.getParameter(t.SCISSOR_BOX),Z=t.getParameter(t.VIEWPORT),ae=new Lt().fromArray(j),pe=new Lt().fromArray(Z);function ge(L,ce,ue,De){const Ne=new Uint8Array(4),tt=t.createTexture();t.bindTexture(L,tt),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let nt=0;nt<ue;nt++)i&&(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)?t.texImage3D(ce,0,t.RGBA,1,1,De,0,t.RGBA,t.UNSIGNED_BYTE,Ne):t.texImage2D(ce+nt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Ne);return tt}const ye={};ye[t.TEXTURE_2D]=ge(t.TEXTURE_2D,t.TEXTURE_2D,1),ye[t.TEXTURE_CUBE_MAP]=ge(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ye[t.TEXTURE_2D_ARRAY]=ge(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ye[t.TEXTURE_3D]=ge(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Re(t.DEPTH_TEST),l.setFunc(fl),me(!1),A(wf),Re(t.CULL_FACE),J(ji);function Re(L){h[L]!==!0&&(t.enable(L),h[L]=!0)}function Te(L){h[L]!==!1&&(t.disable(L),h[L]=!1)}function be(L,ce){return v[L]!==ce?(t.bindFramebuffer(L,ce),v[L]=ce,i&&(L===t.DRAW_FRAMEBUFFER&&(v[t.FRAMEBUFFER]=ce),L===t.FRAMEBUFFER&&(v[t.DRAW_FRAMEBUFFER]=ce)),!0):!1}function k(L,ce){let ue=y,De=!1;if(L)if(ue=_.get(ce),ue===void 0&&(ue=[],_.set(ce,ue)),L.isWebGLMultipleRenderTargets){const Ne=L.texture;if(ue.length!==Ne.length||ue[0]!==t.COLOR_ATTACHMENT0){for(let tt=0,nt=Ne.length;tt<nt;tt++)ue[tt]=t.COLOR_ATTACHMENT0+tt;ue.length=Ne.length,De=!0}}else ue[0]!==t.COLOR_ATTACHMENT0&&(ue[0]=t.COLOR_ATTACHMENT0,De=!0);else ue[0]!==t.BACK&&(ue[0]=t.BACK,De=!0);De&&(n.isWebGL2?t.drawBuffers(ue):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ue))}function qe(L){return m!==L?(t.useProgram(L),m=L,!0):!1}const _e={[or]:t.FUNC_ADD,[_y]:t.FUNC_SUBTRACT,[xy]:t.FUNC_REVERSE_SUBTRACT};if(i)_e[Cf]=t.MIN,_e[Rf]=t.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(_e[Cf]=L.MIN_EXT,_e[Rf]=L.MAX_EXT)}const Q={[yy]:t.ZERO,[Sy]:t.ONE,[Ey]:t.SRC_COLOR,[ju]:t.SRC_ALPHA,[Cy]:t.SRC_ALPHA_SATURATE,[Ay]:t.DST_COLOR,[Ty]:t.DST_ALPHA,[My]:t.ONE_MINUS_SRC_COLOR,[Gu]:t.ONE_MINUS_SRC_ALPHA,[by]:t.ONE_MINUS_DST_COLOR,[wy]:t.ONE_MINUS_DST_ALPHA,[Ry]:t.CONSTANT_COLOR,[Ny]:t.ONE_MINUS_CONSTANT_COLOR,[Py]:t.CONSTANT_ALPHA,[Ly]:t.ONE_MINUS_CONSTANT_ALPHA};function J(L,ce,ue,De,Ne,tt,nt,Tt,jt,it){if(L===ji){u===!0&&(Te(t.BLEND),u=!1);return}if(u===!1&&(Re(t.BLEND),u=!0),L!==vy){if(L!==g||it!==P){if((x!==or||C!==or)&&(t.blendEquation(t.FUNC_ADD),x=or,C=or),it)switch(L){case ds:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case hl:t.blendFunc(t.ONE,t.ONE);break;case Af:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case bf:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case ds:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case hl:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Af:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case bf:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}E=null,R=null,w=null,F=null,S.set(0,0,0),T=0,g=L,P=it}return}Ne=Ne||ce,tt=tt||ue,nt=nt||De,(ce!==x||Ne!==C)&&(t.blendEquationSeparate(_e[ce],_e[Ne]),x=ce,C=Ne),(ue!==E||De!==R||tt!==w||nt!==F)&&(t.blendFuncSeparate(Q[ue],Q[De],Q[tt],Q[nt]),E=ue,R=De,w=tt,F=nt),(Tt.equals(S)===!1||jt!==T)&&(t.blendColor(Tt.r,Tt.g,Tt.b,jt),S.copy(Tt),T=jt),g=L,P=!1}function de(L,ce){L.side===si?Te(t.CULL_FACE):Re(t.CULL_FACE);let ue=L.side===rn;ce&&(ue=!ue),me(ue),L.blending===ds&&L.transparent===!1?J(ji):J(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),o.setMask(L.colorWrite);const De=L.stencilWrite;c.setTest(De),De&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),G(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Re(t.SAMPLE_ALPHA_TO_COVERAGE):Te(t.SAMPLE_ALPHA_TO_COVERAGE)}function me(L){Y!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),Y=L)}function A(L){L!==py?(Re(t.CULL_FACE),L!==ie&&(L===wf?t.cullFace(t.BACK):L===my?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Te(t.CULL_FACE),ie=L}function M(L){L!==D&&(U&&t.lineWidth(L),D=L)}function G(L,ce,ue){L?(Re(t.POLYGON_OFFSET_FILL),(H!==ce||$!==ue)&&(t.polygonOffset(ce,ue),H=ce,$=ue)):Te(t.POLYGON_OFFSET_FILL)}function re(L){L?Re(t.SCISSOR_TEST):Te(t.SCISSOR_TEST)}function te(L){L===void 0&&(L=t.TEXTURE0+B-1),I!==L&&(t.activeTexture(L),I=L)}function se(L,ce,ue){ue===void 0&&(I===null?ue=t.TEXTURE0+B-1:ue=I);let De=K[ue];De===void 0&&(De={type:void 0,texture:void 0},K[ue]=De),(De.type!==L||De.texture!==ce)&&(I!==ue&&(t.activeTexture(ue),I=ue),t.bindTexture(L,ce||ye[L]),De.type=L,De.texture=ce)}function we(){const L=K[I];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function he(){try{t.compressedTexImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Se(){try{t.compressedTexImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Le(){try{t.texSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Be(){try{t.texSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ee(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Qe(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function We(){try{t.texStorage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ue(){try{t.texStorage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ce(){try{t.texImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ee(){try{t.texImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Oe(L){ae.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),ae.copy(L))}function Ke(L){pe.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),pe.copy(L))}function ft(L,ce){let ue=p.get(ce);ue===void 0&&(ue=new WeakMap,p.set(ce,ue));let De=ue.get(L);De===void 0&&(De=t.getUniformBlockIndex(ce,L.name),ue.set(L,De))}function je(L,ce){const De=p.get(ce).get(L);f.get(ce)!==De&&(t.uniformBlockBinding(ce,De,L.__bindingPointIndex),f.set(ce,De))}function oe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},I=null,K={},v={},_=new WeakMap,y=[],m=null,u=!1,g=null,x=null,E=null,R=null,C=null,w=null,F=null,S=new Ye(0,0,0),T=0,P=!1,Y=null,ie=null,D=null,H=null,$=null,ae.set(0,0,t.canvas.width,t.canvas.height),pe.set(0,0,t.canvas.width,t.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Re,disable:Te,bindFramebuffer:be,drawBuffers:k,useProgram:qe,setBlending:J,setMaterial:de,setFlipSided:me,setCullFace:A,setLineWidth:M,setPolygonOffset:G,setScissorTest:re,activeTexture:te,bindTexture:se,unbindTexture:we,compressedTexImage2D:he,compressedTexImage3D:Se,texImage2D:Ce,texImage3D:Ee,updateUBOMapping:ft,uniformBlockBinding:je,texStorage2D:We,texStorage3D:Ue,texSubImage2D:Le,texSubImage3D:Be,compressedTexSubImage2D:ee,compressedTexSubImage3D:Qe,scissor:Oe,viewport:Ke,reset:oe}}function b1(t,e,n,i,r,s,a){const o=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new WeakMap;let p;const h=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,M){return v?new OffscreenCanvas(A,M):xl("canvas")}function y(A,M,G,re){let te=1;if((A.width>re||A.height>re)&&(te=re/Math.max(A.width,A.height)),te<1||M===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const se=M?_l:Math.floor,we=se(te*A.width),he=se(te*A.height);p===void 0&&(p=_(we,he));const Se=G?_(we,he):p;return Se.width=we,Se.height=he,Se.getContext("2d").drawImage(A,0,0,we,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+we+"x"+he+")."),Se}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function m(A){return $u(A.width)&&$u(A.height)}function u(A){return o?!1:A.wrapS!==Fn||A.wrapT!==Fn||A.minFilter!==qt&&A.minFilter!==En}function g(A,M){return A.generateMipmaps&&M&&A.minFilter!==qt&&A.minFilter!==En}function x(A){t.generateMipmap(A)}function E(A,M,G,re,te=!1){if(o===!1)return M;if(A!==null){if(t[A]!==void 0)return t[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let se=M;if(M===t.RED&&(G===t.FLOAT&&(se=t.R32F),G===t.HALF_FLOAT&&(se=t.R16F),G===t.UNSIGNED_BYTE&&(se=t.R8)),M===t.RED_INTEGER&&(G===t.UNSIGNED_BYTE&&(se=t.R8UI),G===t.UNSIGNED_SHORT&&(se=t.R16UI),G===t.UNSIGNED_INT&&(se=t.R32UI),G===t.BYTE&&(se=t.R8I),G===t.SHORT&&(se=t.R16I),G===t.INT&&(se=t.R32I)),M===t.RG&&(G===t.FLOAT&&(se=t.RG32F),G===t.HALF_FLOAT&&(se=t.RG16F),G===t.UNSIGNED_BYTE&&(se=t.RG8)),M===t.RGBA){const we=te?pl:Je.getTransfer(re);G===t.FLOAT&&(se=t.RGBA32F),G===t.HALF_FLOAT&&(se=t.RGBA16F),G===t.UNSIGNED_BYTE&&(se=we===at?t.SRGB8_ALPHA8:t.RGBA8),G===t.UNSIGNED_SHORT_4_4_4_4&&(se=t.RGBA4),G===t.UNSIGNED_SHORT_5_5_5_1&&(se=t.RGB5_A1)}return(se===t.R16F||se===t.R32F||se===t.RG16F||se===t.RG32F||se===t.RGBA16F||se===t.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function R(A,M,G){return g(A,G)===!0||A.isFramebufferTexture&&A.minFilter!==qt&&A.minFilter!==En?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function C(A){return A===qt||A===Nf||A===xc?t.NEAREST:t.LINEAR}function w(A){const M=A.target;M.removeEventListener("dispose",w),S(M),M.isVideoTexture&&f.delete(M)}function F(A){const M=A.target;M.removeEventListener("dispose",F),P(M)}function S(A){const M=i.get(A);if(M.__webglInit===void 0)return;const G=A.source,re=h.get(G);if(re){const te=re[M.__cacheKey];te.usedTimes--,te.usedTimes===0&&T(A),Object.keys(re).length===0&&h.delete(G)}i.remove(A)}function T(A){const M=i.get(A);t.deleteTexture(M.__webglTexture);const G=A.source,re=h.get(G);delete re[M.__cacheKey],a.memory.textures--}function P(A){const M=A.texture,G=i.get(A),re=i.get(M);if(re.__webglTexture!==void 0&&(t.deleteTexture(re.__webglTexture),a.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(G.__webglFramebuffer[te]))for(let se=0;se<G.__webglFramebuffer[te].length;se++)t.deleteFramebuffer(G.__webglFramebuffer[te][se]);else t.deleteFramebuffer(G.__webglFramebuffer[te]);G.__webglDepthbuffer&&t.deleteRenderbuffer(G.__webglDepthbuffer[te])}else{if(Array.isArray(G.__webglFramebuffer))for(let te=0;te<G.__webglFramebuffer.length;te++)t.deleteFramebuffer(G.__webglFramebuffer[te]);else t.deleteFramebuffer(G.__webglFramebuffer);if(G.__webglDepthbuffer&&t.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&t.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let te=0;te<G.__webglColorRenderbuffer.length;te++)G.__webglColorRenderbuffer[te]&&t.deleteRenderbuffer(G.__webglColorRenderbuffer[te]);G.__webglDepthRenderbuffer&&t.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let te=0,se=M.length;te<se;te++){const we=i.get(M[te]);we.__webglTexture&&(t.deleteTexture(we.__webglTexture),a.memory.textures--),i.remove(M[te])}i.remove(M),i.remove(A)}let Y=0;function ie(){Y=0}function D(){const A=Y;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),Y+=1,A}function H(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function $(A,M){const G=i.get(A);if(A.isVideoTexture&&de(A),A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){const re=A.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ae(G,A,M);return}}n.bindTexture(t.TEXTURE_2D,G.__webglTexture,t.TEXTURE0+M)}function B(A,M){const G=i.get(A);if(A.version>0&&G.__version!==A.version){ae(G,A,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,G.__webglTexture,t.TEXTURE0+M)}function U(A,M){const G=i.get(A);if(A.version>0&&G.__version!==A.version){ae(G,A,M);return}n.bindTexture(t.TEXTURE_3D,G.__webglTexture,t.TEXTURE0+M)}function z(A,M){const G=i.get(A);if(A.version>0&&G.__version!==A.version){pe(G,A,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,G.__webglTexture,t.TEXTURE0+M)}const N={[Xu]:t.REPEAT,[Fn]:t.CLAMP_TO_EDGE,[qu]:t.MIRRORED_REPEAT},I={[qt]:t.NEAREST,[Nf]:t.NEAREST_MIPMAP_NEAREST,[xc]:t.NEAREST_MIPMAP_LINEAR,[En]:t.LINEAR,[Yy]:t.LINEAR_MIPMAP_NEAREST,[Ma]:t.LINEAR_MIPMAP_LINEAR},K={[oS]:t.NEVER,[fS]:t.ALWAYS,[lS]:t.LESS,[wv]:t.LEQUAL,[cS]:t.EQUAL,[hS]:t.GEQUAL,[uS]:t.GREATER,[dS]:t.NOTEQUAL};function j(A,M,G){if(G?(t.texParameteri(A,t.TEXTURE_WRAP_S,N[M.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,N[M.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,N[M.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,I[M.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,I[M.minFilter])):(t.texParameteri(A,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(A,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(M.wrapS!==Fn||M.wrapT!==Fn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(A,t.TEXTURE_MAG_FILTER,C(M.magFilter)),t.texParameteri(A,t.TEXTURE_MIN_FILTER,C(M.minFilter)),M.minFilter!==qt&&M.minFilter!==En&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,K[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const re=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===qt||M.minFilter!==xc&&M.minFilter!==Ma||M.type===Li&&e.has("OES_texture_float_linear")===!1||o===!1&&M.type===Ta&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(t.texParameterf(A,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function Z(A,M){let G=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",w));const re=M.source;let te=h.get(re);te===void 0&&(te={},h.set(re,te));const se=H(M);if(se!==A.__cacheKey){te[se]===void 0&&(te[se]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,G=!0),te[se].usedTimes++;const we=te[A.__cacheKey];we!==void 0&&(te[A.__cacheKey].usedTimes--,we.usedTimes===0&&T(M)),A.__cacheKey=se,A.__webglTexture=te[se].texture}return G}function ae(A,M,G){let re=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(re=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(re=t.TEXTURE_3D);const te=Z(A,M),se=M.source;n.bindTexture(re,A.__webglTexture,t.TEXTURE0+G);const we=i.get(se);if(se.version!==we.__version||te===!0){n.activeTexture(t.TEXTURE0+G);const he=Je.getPrimaries(Je.workingColorSpace),Se=M.colorSpace===Mn?null:Je.getPrimaries(M.colorSpace),Le=M.colorSpace===Mn||he===Se?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);const Be=u(M)&&m(M.image)===!1;let ee=y(M.image,Be,!1,r.maxTextureSize);ee=me(M,ee);const Qe=m(ee)||o,We=s.convert(M.format,M.colorSpace);let Ue=s.convert(M.type),Ce=E(M.internalFormat,We,Ue,M.colorSpace,M.isVideoTexture);j(re,M,Qe);let Ee;const Oe=M.mipmaps,Ke=o&&M.isVideoTexture!==!0&&Ce!==Mv,ft=we.__version===void 0||te===!0,je=R(M,ee,Qe);if(M.isDepthTexture)Ce=t.DEPTH_COMPONENT,o?M.type===Li?Ce=t.DEPTH_COMPONENT32F:M.type===Pi?Ce=t.DEPTH_COMPONENT24:M.type===mr?Ce=t.DEPTH24_STENCIL8:Ce=t.DEPTH_COMPONENT16:M.type===Li&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===gr&&Ce===t.DEPTH_COMPONENT&&M.type!==$d&&M.type!==Pi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Pi,Ue=s.convert(M.type)),M.format===Ms&&Ce===t.DEPTH_COMPONENT&&(Ce=t.DEPTH_STENCIL,M.type!==mr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=mr,Ue=s.convert(M.type))),ft&&(Ke?n.texStorage2D(t.TEXTURE_2D,1,Ce,ee.width,ee.height):n.texImage2D(t.TEXTURE_2D,0,Ce,ee.width,ee.height,0,We,Ue,null));else if(M.isDataTexture)if(Oe.length>0&&Qe){Ke&&ft&&n.texStorage2D(t.TEXTURE_2D,je,Ce,Oe[0].width,Oe[0].height);for(let oe=0,L=Oe.length;oe<L;oe++)Ee=Oe[oe],Ke?n.texSubImage2D(t.TEXTURE_2D,oe,0,0,Ee.width,Ee.height,We,Ue,Ee.data):n.texImage2D(t.TEXTURE_2D,oe,Ce,Ee.width,Ee.height,0,We,Ue,Ee.data);M.generateMipmaps=!1}else Ke?(ft&&n.texStorage2D(t.TEXTURE_2D,je,Ce,ee.width,ee.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,ee.width,ee.height,We,Ue,ee.data)):n.texImage2D(t.TEXTURE_2D,0,Ce,ee.width,ee.height,0,We,Ue,ee.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ke&&ft&&n.texStorage3D(t.TEXTURE_2D_ARRAY,je,Ce,Oe[0].width,Oe[0].height,ee.depth);for(let oe=0,L=Oe.length;oe<L;oe++)Ee=Oe[oe],M.format!==kn?We!==null?Ke?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,oe,0,0,0,Ee.width,Ee.height,ee.depth,We,Ee.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,oe,Ce,Ee.width,Ee.height,ee.depth,0,Ee.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?n.texSubImage3D(t.TEXTURE_2D_ARRAY,oe,0,0,0,Ee.width,Ee.height,ee.depth,We,Ue,Ee.data):n.texImage3D(t.TEXTURE_2D_ARRAY,oe,Ce,Ee.width,Ee.height,ee.depth,0,We,Ue,Ee.data)}else{Ke&&ft&&n.texStorage2D(t.TEXTURE_2D,je,Ce,Oe[0].width,Oe[0].height);for(let oe=0,L=Oe.length;oe<L;oe++)Ee=Oe[oe],M.format!==kn?We!==null?Ke?n.compressedTexSubImage2D(t.TEXTURE_2D,oe,0,0,Ee.width,Ee.height,We,Ee.data):n.compressedTexImage2D(t.TEXTURE_2D,oe,Ce,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?n.texSubImage2D(t.TEXTURE_2D,oe,0,0,Ee.width,Ee.height,We,Ue,Ee.data):n.texImage2D(t.TEXTURE_2D,oe,Ce,Ee.width,Ee.height,0,We,Ue,Ee.data)}else if(M.isDataArrayTexture)Ke?(ft&&n.texStorage3D(t.TEXTURE_2D_ARRAY,je,Ce,ee.width,ee.height,ee.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,We,Ue,ee.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ce,ee.width,ee.height,ee.depth,0,We,Ue,ee.data);else if(M.isData3DTexture)Ke?(ft&&n.texStorage3D(t.TEXTURE_3D,je,Ce,ee.width,ee.height,ee.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,We,Ue,ee.data)):n.texImage3D(t.TEXTURE_3D,0,Ce,ee.width,ee.height,ee.depth,0,We,Ue,ee.data);else if(M.isFramebufferTexture){if(ft)if(Ke)n.texStorage2D(t.TEXTURE_2D,je,Ce,ee.width,ee.height);else{let oe=ee.width,L=ee.height;for(let ce=0;ce<je;ce++)n.texImage2D(t.TEXTURE_2D,ce,Ce,oe,L,0,We,Ue,null),oe>>=1,L>>=1}}else if(Oe.length>0&&Qe){Ke&&ft&&n.texStorage2D(t.TEXTURE_2D,je,Ce,Oe[0].width,Oe[0].height);for(let oe=0,L=Oe.length;oe<L;oe++)Ee=Oe[oe],Ke?n.texSubImage2D(t.TEXTURE_2D,oe,0,0,We,Ue,Ee):n.texImage2D(t.TEXTURE_2D,oe,Ce,We,Ue,Ee);M.generateMipmaps=!1}else Ke?(ft&&n.texStorage2D(t.TEXTURE_2D,je,Ce,ee.width,ee.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,We,Ue,ee)):n.texImage2D(t.TEXTURE_2D,0,Ce,We,Ue,ee);g(M,Qe)&&x(re),we.__version=se.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function pe(A,M,G){if(M.image.length!==6)return;const re=Z(A,M),te=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+G);const se=i.get(te);if(te.version!==se.__version||re===!0){n.activeTexture(t.TEXTURE0+G);const we=Je.getPrimaries(Je.workingColorSpace),he=M.colorSpace===Mn?null:Je.getPrimaries(M.colorSpace),Se=M.colorSpace===Mn||we===he?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const Le=M.isCompressedTexture||M.image[0].isCompressedTexture,Be=M.image[0]&&M.image[0].isDataTexture,ee=[];for(let oe=0;oe<6;oe++)!Le&&!Be?ee[oe]=y(M.image[oe],!1,!0,r.maxCubemapSize):ee[oe]=Be?M.image[oe].image:M.image[oe],ee[oe]=me(M,ee[oe]);const Qe=ee[0],We=m(Qe)||o,Ue=s.convert(M.format,M.colorSpace),Ce=s.convert(M.type),Ee=E(M.internalFormat,Ue,Ce,M.colorSpace),Oe=o&&M.isVideoTexture!==!0,Ke=se.__version===void 0||re===!0;let ft=R(M,Qe,We);j(t.TEXTURE_CUBE_MAP,M,We);let je;if(Le){Oe&&Ke&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ft,Ee,Qe.width,Qe.height);for(let oe=0;oe<6;oe++){je=ee[oe].mipmaps;for(let L=0;L<je.length;L++){const ce=je[L];M.format!==kn?Ue!==null?Oe?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,L,0,0,ce.width,ce.height,Ue,ce.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,L,Ee,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,L,0,0,ce.width,ce.height,Ue,Ce,ce.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,L,Ee,ce.width,ce.height,0,Ue,Ce,ce.data)}}}else{je=M.mipmaps,Oe&&Ke&&(je.length>0&&ft++,n.texStorage2D(t.TEXTURE_CUBE_MAP,ft,Ee,ee[0].width,ee[0].height));for(let oe=0;oe<6;oe++)if(Be){Oe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,ee[oe].width,ee[oe].height,Ue,Ce,ee[oe].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Ee,ee[oe].width,ee[oe].height,0,Ue,Ce,ee[oe].data);for(let L=0;L<je.length;L++){const ue=je[L].image[oe].image;Oe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,L+1,0,0,ue.width,ue.height,Ue,Ce,ue.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,L+1,Ee,ue.width,ue.height,0,Ue,Ce,ue.data)}}else{Oe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Ue,Ce,ee[oe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Ee,Ue,Ce,ee[oe]);for(let L=0;L<je.length;L++){const ce=je[L];Oe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,L+1,0,0,Ue,Ce,ce.image[oe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,L+1,Ee,Ue,Ce,ce.image[oe])}}}g(M,We)&&x(t.TEXTURE_CUBE_MAP),se.__version=te.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function ge(A,M,G,re,te,se){const we=s.convert(G.format,G.colorSpace),he=s.convert(G.type),Se=E(G.internalFormat,we,he,G.colorSpace);if(!i.get(M).__hasExternalTextures){const Be=Math.max(1,M.width>>se),ee=Math.max(1,M.height>>se);te===t.TEXTURE_3D||te===t.TEXTURE_2D_ARRAY?n.texImage3D(te,se,Se,Be,ee,M.depth,0,we,he,null):n.texImage2D(te,se,Se,Be,ee,0,we,he,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),J(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,re,te,i.get(G).__webglTexture,0,Q(M)):(te===t.TEXTURE_2D||te>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,re,te,i.get(G).__webglTexture,se),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ye(A,M,G){if(t.bindRenderbuffer(t.RENDERBUFFER,A),M.depthBuffer&&!M.stencilBuffer){let re=o===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(G||J(M)){const te=M.depthTexture;te&&te.isDepthTexture&&(te.type===Li?re=t.DEPTH_COMPONENT32F:te.type===Pi&&(re=t.DEPTH_COMPONENT24));const se=Q(M);J(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,se,re,M.width,M.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,se,re,M.width,M.height)}else t.renderbufferStorage(t.RENDERBUFFER,re,M.width,M.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,A)}else if(M.depthBuffer&&M.stencilBuffer){const re=Q(M);G&&J(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,re,t.DEPTH24_STENCIL8,M.width,M.height):J(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,re,t.DEPTH24_STENCIL8,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,A)}else{const re=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let te=0;te<re.length;te++){const se=re[te],we=s.convert(se.format,se.colorSpace),he=s.convert(se.type),Se=E(se.internalFormat,we,he,se.colorSpace),Le=Q(M);G&&J(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Le,Se,M.width,M.height):J(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Le,Se,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,Se,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Re(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),$(M.depthTexture,0);const re=i.get(M.depthTexture).__webglTexture,te=Q(M);if(M.depthTexture.format===gr)J(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,re,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,re,0);else if(M.depthTexture.format===Ms)J(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,re,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function Te(A){const M=i.get(A),G=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Re(M.__webglFramebuffer,A)}else if(G){M.__webglDepthbuffer=[];for(let re=0;re<6;re++)n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[re]),M.__webglDepthbuffer[re]=t.createRenderbuffer(),ye(M.__webglDepthbuffer[re],A,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),ye(M.__webglDepthbuffer,A,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function be(A,M,G){const re=i.get(A);M!==void 0&&ge(re.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),G!==void 0&&Te(A)}function k(A){const M=A.texture,G=i.get(A),re=i.get(M);A.addEventListener("dispose",F),A.isWebGLMultipleRenderTargets!==!0&&(re.__webglTexture===void 0&&(re.__webglTexture=t.createTexture()),re.__version=M.version,a.memory.textures++);const te=A.isWebGLCubeRenderTarget===!0,se=A.isWebGLMultipleRenderTargets===!0,we=m(A)||o;if(te){G.__webglFramebuffer=[];for(let he=0;he<6;he++)if(o&&M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer[he]=[];for(let Se=0;Se<M.mipmaps.length;Se++)G.__webglFramebuffer[he][Se]=t.createFramebuffer()}else G.__webglFramebuffer[he]=t.createFramebuffer()}else{if(o&&M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer=[];for(let he=0;he<M.mipmaps.length;he++)G.__webglFramebuffer[he]=t.createFramebuffer()}else G.__webglFramebuffer=t.createFramebuffer();if(se)if(r.drawBuffers){const he=A.texture;for(let Se=0,Le=he.length;Se<Le;Se++){const Be=i.get(he[Se]);Be.__webglTexture===void 0&&(Be.__webglTexture=t.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&A.samples>0&&J(A)===!1){const he=se?M:[M];G.__webglMultisampledFramebuffer=t.createFramebuffer(),G.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let Se=0;Se<he.length;Se++){const Le=he[Se];G.__webglColorRenderbuffer[Se]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,G.__webglColorRenderbuffer[Se]);const Be=s.convert(Le.format,Le.colorSpace),ee=s.convert(Le.type),Qe=E(Le.internalFormat,Be,ee,Le.colorSpace,A.isXRRenderTarget===!0),We=Q(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,We,Qe,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.RENDERBUFFER,G.__webglColorRenderbuffer[Se])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(G.__webglDepthRenderbuffer=t.createRenderbuffer(),ye(G.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(te){n.bindTexture(t.TEXTURE_CUBE_MAP,re.__webglTexture),j(t.TEXTURE_CUBE_MAP,M,we);for(let he=0;he<6;he++)if(o&&M.mipmaps&&M.mipmaps.length>0)for(let Se=0;Se<M.mipmaps.length;Se++)ge(G.__webglFramebuffer[he][Se],A,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Se);else ge(G.__webglFramebuffer[he],A,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);g(M,we)&&x(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(se){const he=A.texture;for(let Se=0,Le=he.length;Se<Le;Se++){const Be=he[Se],ee=i.get(Be);n.bindTexture(t.TEXTURE_2D,ee.__webglTexture),j(t.TEXTURE_2D,Be,we),ge(G.__webglFramebuffer,A,Be,t.COLOR_ATTACHMENT0+Se,t.TEXTURE_2D,0),g(Be,we)&&x(t.TEXTURE_2D)}n.unbindTexture()}else{let he=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(o?he=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(he,re.__webglTexture),j(he,M,we),o&&M.mipmaps&&M.mipmaps.length>0)for(let Se=0;Se<M.mipmaps.length;Se++)ge(G.__webglFramebuffer[Se],A,M,t.COLOR_ATTACHMENT0,he,Se);else ge(G.__webglFramebuffer,A,M,t.COLOR_ATTACHMENT0,he,0);g(M,we)&&x(he),n.unbindTexture()}A.depthBuffer&&Te(A)}function qe(A){const M=m(A)||o,G=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let re=0,te=G.length;re<te;re++){const se=G[re];if(g(se,M)){const we=A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,he=i.get(se).__webglTexture;n.bindTexture(we,he),x(we),n.unbindTexture()}}}function _e(A){if(o&&A.samples>0&&J(A)===!1){const M=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],G=A.width,re=A.height;let te=t.COLOR_BUFFER_BIT;const se=[],we=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,he=i.get(A),Se=A.isWebGLMultipleRenderTargets===!0;if(Se)for(let Le=0;Le<M.length;Le++)n.bindFramebuffer(t.FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Le,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,he.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Le,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let Le=0;Le<M.length;Le++){se.push(t.COLOR_ATTACHMENT0+Le),A.depthBuffer&&se.push(we);const Be=he.__ignoreDepthValues!==void 0?he.__ignoreDepthValues:!1;if(Be===!1&&(A.depthBuffer&&(te|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&(te|=t.STENCIL_BUFFER_BIT)),Se&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,he.__webglColorRenderbuffer[Le]),Be===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[we]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[we])),Se){const ee=i.get(M[Le]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ee,0)}t.blitFramebuffer(0,0,G,re,0,0,G,re,te,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,se)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Se)for(let Le=0;Le<M.length;Le++){n.bindFramebuffer(t.FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Le,t.RENDERBUFFER,he.__webglColorRenderbuffer[Le]);const Be=i.get(M[Le]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,he.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Le,t.TEXTURE_2D,Be,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}}function Q(A){return Math.min(r.maxSamples,A.samples)}function J(A){const M=i.get(A);return o&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function de(A){const M=a.render.frame;f.get(A)!==M&&(f.set(A,M),A.update())}function me(A,M){const G=A.colorSpace,re=A.format,te=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Yu||G!==mi&&G!==Mn&&(Je.getTransfer(G)===at?o===!1?e.has("EXT_sRGB")===!0&&re===kn?(A.format=Yu,A.minFilter=En,A.generateMipmaps=!1):M=bv.sRGBToLinear(M):(re!==kn||te!==Vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),M}this.allocateTextureUnit=D,this.resetTextureUnits=ie,this.setTexture2D=$,this.setTexture2DArray=B,this.setTexture3D=U,this.setTextureCube=z,this.rebindTextures=be,this.setupRenderTarget=k,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=J}function C1(t,e,n){const i=n.isWebGL2;function r(s,a=Mn){let o;const l=Je.getTransfer(a);if(s===Vi)return t.UNSIGNED_BYTE;if(s===_v)return t.UNSIGNED_SHORT_4_4_4_4;if(s===xv)return t.UNSIGNED_SHORT_5_5_5_1;if(s===$y)return t.BYTE;if(s===Ky)return t.SHORT;if(s===$d)return t.UNSIGNED_SHORT;if(s===vv)return t.INT;if(s===Pi)return t.UNSIGNED_INT;if(s===Li)return t.FLOAT;if(s===Ta)return i?t.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Zy)return t.ALPHA;if(s===kn)return t.RGBA;if(s===Qy)return t.LUMINANCE;if(s===Jy)return t.LUMINANCE_ALPHA;if(s===gr)return t.DEPTH_COMPONENT;if(s===Ms)return t.DEPTH_STENCIL;if(s===Yu)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===eS)return t.RED;if(s===yv)return t.RED_INTEGER;if(s===tS)return t.RG;if(s===Sv)return t.RG_INTEGER;if(s===Ev)return t.RGBA_INTEGER;if(s===yc||s===Sc||s===Ec||s===Mc)if(l===at)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===yc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Sc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ec)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Mc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===yc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Sc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ec)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Mc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Pf||s===Lf||s===Df||s===If)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Pf)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Lf)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Df)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===If)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Mv)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Uf||s===Ff)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Uf)return l===at?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Ff)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===kf||s===Of||s===zf||s===Bf||s===Hf||s===jf||s===Gf||s===Vf||s===Wf||s===Xf||s===qf||s===Yf||s===$f||s===Kf)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===kf)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Of)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===zf)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Bf)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Hf)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===jf)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Gf)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Vf)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Wf)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Xf)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===qf)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Yf)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===$f)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Kf)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Tc||s===Zf||s===Qf)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Tc)return l===at?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Zf)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Qf)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===nS||s===Jf||s===ep||s===tp)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===Tc)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Jf)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ep)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===tp)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===mr?i?t.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class R1 extends dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Mo extends sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const N1={type:"move"};class qc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const y of e.hand.values()){const m=n.getJointPose(y,i),u=this._getHandJoint(c,y);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const f=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],h=f.position.distanceTo(p.position),v=.02,_=.005;c.inputState.pinching&&h>v+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=v-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(N1)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Mo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class P1 extends Cs{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,f=null,p=null,h=null,v=null,_=null;const y=n.getContextAttributes();let m=null,u=null;const g=[],x=[],E=new et;let R=null;const C=new dn;C.layers.enable(1),C.viewport=new Lt;const w=new dn;w.layers.enable(2),w.viewport=new Lt;const F=[C,w],S=new R1;S.layers.enable(1),S.layers.enable(2);let T=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let Z=g[j];return Z===void 0&&(Z=new qc,g[j]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(j){let Z=g[j];return Z===void 0&&(Z=new qc,g[j]=Z),Z.getGripSpace()},this.getHand=function(j){let Z=g[j];return Z===void 0&&(Z=new qc,g[j]=Z),Z.getHandSpace()};function Y(j){const Z=x.indexOf(j.inputSource);if(Z===-1)return;const ae=g[Z];ae!==void 0&&(ae.update(j.inputSource,j.frame,c||a),ae.dispatchEvent({type:j.type,data:j.inputSource}))}function ie(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",ie),r.removeEventListener("inputsourceschange",D);for(let j=0;j<g.length;j++){const Z=x[j];Z!==null&&(x[j]=null,g[j].disconnect(Z))}T=null,P=null,e.setRenderTarget(m),v=null,h=null,p=null,r=null,u=null,K.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return h!==null?h:v},this.getBinding=function(){return p},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",ie),r.addEventListener("inputsourceschange",D),y.xrCompatible!==!0&&await n.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(E),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Z={antialias:r.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};v=new XRWebGLLayer(r,n,Z),r.updateRenderState({baseLayer:v}),e.setPixelRatio(1),e.setSize(v.framebufferWidth,v.framebufferHeight,!1),u=new Mr(v.framebufferWidth,v.framebufferHeight,{format:kn,type:Vi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let Z=null,ae=null,pe=null;y.depth&&(pe=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Z=y.stencil?Ms:gr,ae=y.stencil?mr:Pi);const ge={colorFormat:n.RGBA8,depthFormat:pe,scaleFactor:s};p=new XRWebGLBinding(r,n),h=p.createProjectionLayer(ge),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),u=new Mr(h.textureWidth,h.textureHeight,{format:kn,type:Vi,depthTexture:new Hv(h.textureWidth,h.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});const ye=e.properties.get(u);ye.__ignoreDepthValues=h.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),K.setContext(r),K.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function D(j){for(let Z=0;Z<j.removed.length;Z++){const ae=j.removed[Z],pe=x.indexOf(ae);pe>=0&&(x[pe]=null,g[pe].disconnect(ae))}for(let Z=0;Z<j.added.length;Z++){const ae=j.added[Z];let pe=x.indexOf(ae);if(pe===-1){for(let ye=0;ye<g.length;ye++)if(ye>=x.length){x.push(ae),pe=ye;break}else if(x[ye]===null){x[ye]=ae,pe=ye;break}if(pe===-1)break}const ge=g[pe];ge&&ge.connect(ae)}}const H=new X,$=new X;function B(j,Z,ae){H.setFromMatrixPosition(Z.matrixWorld),$.setFromMatrixPosition(ae.matrixWorld);const pe=H.distanceTo($),ge=Z.projectionMatrix.elements,ye=ae.projectionMatrix.elements,Re=ge[14]/(ge[10]-1),Te=ge[14]/(ge[10]+1),be=(ge[9]+1)/ge[5],k=(ge[9]-1)/ge[5],qe=(ge[8]-1)/ge[0],_e=(ye[8]+1)/ye[0],Q=Re*qe,J=Re*_e,de=pe/(-qe+_e),me=de*-qe;Z.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(me),j.translateZ(de),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const A=Re+de,M=Te+de,G=Q-me,re=J+(pe-me),te=be*Te/M*A,se=k*Te/M*A;j.projectionMatrix.makePerspective(G,re,te,se,A,M),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function U(j,Z){Z===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(Z.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;S.near=w.near=C.near=j.near,S.far=w.far=C.far=j.far,(T!==S.near||P!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),T=S.near,P=S.far);const Z=j.parent,ae=S.cameras;U(S,Z);for(let pe=0;pe<ae.length;pe++)U(ae[pe],Z);ae.length===2?B(S,C,w):S.projectionMatrix.copy(C.projectionMatrix),z(j,S,Z)};function z(j,Z,ae){ae===null?j.matrix.copy(Z.matrixWorld):(j.matrix.copy(ae.matrixWorld),j.matrix.invert(),j.matrix.multiply(Z.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(Z.projectionMatrix),j.projectionMatrixInverse.copy(Z.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=wa*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&v===null))return l},this.setFoveation=function(j){l=j,h!==null&&(h.fixedFoveation=j),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=j)};let N=null;function I(j,Z){if(f=Z.getViewerPose(c||a),_=Z,f!==null){const ae=f.views;v!==null&&(e.setRenderTargetFramebuffer(u,v.framebuffer),e.setRenderTarget(u));let pe=!1;ae.length!==S.cameras.length&&(S.cameras.length=0,pe=!0);for(let ge=0;ge<ae.length;ge++){const ye=ae[ge];let Re=null;if(v!==null)Re=v.getViewport(ye);else{const be=p.getViewSubImage(h,ye);Re=be.viewport,ge===0&&(e.setRenderTargetTextures(u,be.colorTexture,h.ignoreDepthValues?void 0:be.depthStencilTexture),e.setRenderTarget(u))}let Te=F[ge];Te===void 0&&(Te=new dn,Te.layers.enable(ge),Te.viewport=new Lt,F[ge]=Te),Te.matrix.fromArray(ye.transform.matrix),Te.matrix.decompose(Te.position,Te.quaternion,Te.scale),Te.projectionMatrix.fromArray(ye.projectionMatrix),Te.projectionMatrixInverse.copy(Te.projectionMatrix).invert(),Te.viewport.set(Re.x,Re.y,Re.width,Re.height),ge===0&&(S.matrix.copy(Te.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),pe===!0&&S.cameras.push(Te)}}for(let ae=0;ae<g.length;ae++){const pe=x[ae],ge=g[ae];pe!==null&&ge!==void 0&&ge.update(pe,Z,c||a)}N&&N(j,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),_=null}const K=new Bv;K.setAnimationLoop(I),this.setAnimationLoop=function(j){N=j},this.dispose=function(){}}}function L1(t,e){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,Fv(t)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,g,x,E){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),p(m,u)):u.isMeshPhongMaterial?(s(m,u),f(m,u)):u.isMeshStandardMaterial?(s(m,u),h(m,u),u.isMeshPhysicalMaterial&&v(m,u,E)):u.isMeshMatcapMaterial?(s(m,u),_(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),y(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(a(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,g,x):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===rn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===rn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const g=e.get(u).envMap;if(g&&(m.envMap.value=g,m.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap){m.lightMap.value=u.lightMap;const x=t._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=u.lightMapIntensity*x,n(u.lightMap,m.lightMapTransform)}u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function a(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,g,x){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*g,m.scale.value=x*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function f(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function p(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function h(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),e.get(u).envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function v(m,u,g){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===rn&&m.clearcoatNormalScale.value.negate())),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,u){u.matcap&&(m.matcap.value=u.matcap)}function y(m,u){const g=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function D1(t,e,n,i){let r={},s={},a=[];const o=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(g,x){const E=x.program;i.uniformBlockBinding(g,E)}function c(g,x){let E=r[g.id];E===void 0&&(_(g),E=f(g),r[g.id]=E,g.addEventListener("dispose",m));const R=x.program;i.updateUBOMapping(g,R);const C=e.render.frame;s[g.id]!==C&&(h(g),s[g.id]=C)}function f(g){const x=p();g.__bindingPointIndex=x;const E=t.createBuffer(),R=g.__size,C=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,R,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,E),E}function p(){for(let g=0;g<o;g++)if(a.indexOf(g)===-1)return a.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(g){const x=r[g.id],E=g.uniforms,R=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let C=0,w=E.length;C<w;C++){const F=Array.isArray(E[C])?E[C]:[E[C]];for(let S=0,T=F.length;S<T;S++){const P=F[S];if(v(P,C,S,R)===!0){const Y=P.__offset,ie=Array.isArray(P.value)?P.value:[P.value];let D=0;for(let H=0;H<ie.length;H++){const $=ie[H],B=y($);typeof $=="number"||typeof $=="boolean"?(P.__data[0]=$,t.bufferSubData(t.UNIFORM_BUFFER,Y+D,P.__data)):$.isMatrix3?(P.__data[0]=$.elements[0],P.__data[1]=$.elements[1],P.__data[2]=$.elements[2],P.__data[3]=0,P.__data[4]=$.elements[3],P.__data[5]=$.elements[4],P.__data[6]=$.elements[5],P.__data[7]=0,P.__data[8]=$.elements[6],P.__data[9]=$.elements[7],P.__data[10]=$.elements[8],P.__data[11]=0):($.toArray(P.__data,D),D+=B.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,Y,P.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function v(g,x,E,R){const C=g.value,w=x+"_"+E;if(R[w]===void 0)return typeof C=="number"||typeof C=="boolean"?R[w]=C:R[w]=C.clone(),!0;{const F=R[w];if(typeof C=="number"||typeof C=="boolean"){if(F!==C)return R[w]=C,!0}else if(F.equals(C)===!1)return F.copy(C),!0}return!1}function _(g){const x=g.uniforms;let E=0;const R=16;for(let w=0,F=x.length;w<F;w++){const S=Array.isArray(x[w])?x[w]:[x[w]];for(let T=0,P=S.length;T<P;T++){const Y=S[T],ie=Array.isArray(Y.value)?Y.value:[Y.value];for(let D=0,H=ie.length;D<H;D++){const $=ie[D],B=y($),U=E%R;U!==0&&R-U<B.boundary&&(E+=R-U),Y.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=E,E+=B.storage}}}const C=E%R;return C>0&&(E+=R-C),g.__size=E,g.__cache={},this}function y(g){const x={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(x.boundary=4,x.storage=4):g.isVector2?(x.boundary=8,x.storage=8):g.isVector3||g.isColor?(x.boundary=16,x.storage=12):g.isVector4?(x.boundary=16,x.storage=16):g.isMatrix3?(x.boundary=48,x.storage=48):g.isMatrix4?(x.boundary=64,x.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),x}function m(g){const x=g.target;x.removeEventListener("dispose",m);const E=a.indexOf(x.__bindingPointIndex);a.splice(E,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function u(){for(const g in r)t.deleteBuffer(r[g]);a=[],r={},s={}}return{bind:l,update:c,dispose:u}}class eh{constructor(e={}){const{canvas:n=CS(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=a;const v=new Uint32Array(4),_=new Int32Array(4);let y=null,m=null;const u=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Pt,this._useLegacyLights=!1,this.toneMapping=Gi,this.toneMappingExposure=1;const x=this;let E=!1,R=0,C=0,w=null,F=-1,S=null;const T=new Lt,P=new Lt;let Y=null;const ie=new Ye(0);let D=0,H=n.width,$=n.height,B=1,U=null,z=null;const N=new Lt(0,0,H,$),I=new Lt(0,0,H,$);let K=!1;const j=new zv;let Z=!1,ae=!1,pe=null;const ge=new Rt,ye=new et,Re=new X,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function be(){return w===null?B:1}let k=i;function qe(b,O){for(let W=0;W<b.length;W++){const q=b[W],V=n.getContext(q,O);if(V!==null)return V}return null}try{const b={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Yd}`),n.addEventListener("webglcontextlost",oe,!1),n.addEventListener("webglcontextrestored",L,!1),n.addEventListener("webglcontextcreationerror",ce,!1),k===null){const O=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&O.shift(),k=qe(O,b),k===null)throw qe(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&k instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let _e,Q,J,de,me,A,M,G,re,te,se,we,he,Se,Le,Be,ee,Qe,We,Ue,Ce,Ee,Oe,Ke;function ft(){_e=new GT(k),Q=new FT(k,_e,e),_e.init(Q),Ee=new C1(k,_e,Q),J=new A1(k,_e,Q),de=new XT(k),me=new h1,A=new b1(k,_e,J,me,Q,Ee,de),M=new OT(x),G=new jT(x),re=new JS(k,Q),Oe=new IT(k,_e,re,Q),te=new VT(k,re,de,Oe),se=new KT(k,te,re,de),We=new $T(k,Q,A),Be=new kT(me),we=new d1(x,M,G,_e,Q,Oe,Be),he=new L1(x,me),Se=new p1,Le=new y1(_e,Q),Qe=new DT(x,M,G,J,se,h,l),ee=new w1(x,se,Q),Ke=new D1(k,de,Q,J),Ue=new UT(k,_e,de,Q),Ce=new WT(k,_e,de,Q),de.programs=we.programs,x.capabilities=Q,x.extensions=_e,x.properties=me,x.renderLists=Se,x.shadowMap=ee,x.state=J,x.info=de}ft();const je=new P1(x,k);this.xr=je,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const b=_e.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=_e.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(b){b!==void 0&&(B=b,this.setSize(H,$,!1))},this.getSize=function(b){return b.set(H,$)},this.setSize=function(b,O,W=!0){if(je.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=b,$=O,n.width=Math.floor(b*B),n.height=Math.floor(O*B),W===!0&&(n.style.width=b+"px",n.style.height=O+"px"),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set(H*B,$*B).floor()},this.setDrawingBufferSize=function(b,O,W){H=b,$=O,B=W,n.width=Math.floor(b*W),n.height=Math.floor(O*W),this.setViewport(0,0,b,O)},this.getCurrentViewport=function(b){return b.copy(T)},this.getViewport=function(b){return b.copy(N)},this.setViewport=function(b,O,W,q){b.isVector4?N.set(b.x,b.y,b.z,b.w):N.set(b,O,W,q),J.viewport(T.copy(N).multiplyScalar(B).floor())},this.getScissor=function(b){return b.copy(I)},this.setScissor=function(b,O,W,q){b.isVector4?I.set(b.x,b.y,b.z,b.w):I.set(b,O,W,q),J.scissor(P.copy(I).multiplyScalar(B).floor())},this.getScissorTest=function(){return K},this.setScissorTest=function(b){J.setScissorTest(K=b)},this.setOpaqueSort=function(b){U=b},this.setTransparentSort=function(b){z=b},this.getClearColor=function(b){return b.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor.apply(Qe,arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha.apply(Qe,arguments)},this.clear=function(b=!0,O=!0,W=!0){let q=0;if(b){let V=!1;if(w!==null){const ve=w.texture.format;V=ve===Ev||ve===Sv||ve===yv}if(V){const ve=w.texture.type,Ae=ve===Vi||ve===Pi||ve===$d||ve===mr||ve===_v||ve===xv,Pe=Qe.getClearColor(),Ie=Qe.getClearAlpha(),He=Pe.r,Fe=Pe.g,ke=Pe.b;Ae?(v[0]=He,v[1]=Fe,v[2]=ke,v[3]=Ie,k.clearBufferuiv(k.COLOR,0,v)):(_[0]=He,_[1]=Fe,_[2]=ke,_[3]=Ie,k.clearBufferiv(k.COLOR,0,_))}else q|=k.COLOR_BUFFER_BIT}O&&(q|=k.DEPTH_BUFFER_BIT),W&&(q|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",oe,!1),n.removeEventListener("webglcontextrestored",L,!1),n.removeEventListener("webglcontextcreationerror",ce,!1),Se.dispose(),Le.dispose(),me.dispose(),M.dispose(),G.dispose(),se.dispose(),Oe.dispose(),Ke.dispose(),we.dispose(),je.dispose(),je.removeEventListener("sessionstart",jt),je.removeEventListener("sessionend",it),pe&&(pe.dispose(),pe=null),Gt.stop()};function oe(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const b=de.autoReset,O=ee.enabled,W=ee.autoUpdate,q=ee.needsUpdate,V=ee.type;ft(),de.autoReset=b,ee.enabled=O,ee.autoUpdate=W,ee.needsUpdate=q,ee.type=V}function ce(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ue(b){const O=b.target;O.removeEventListener("dispose",ue),De(O)}function De(b){Ne(b),me.remove(b)}function Ne(b){const O=me.get(b).programs;O!==void 0&&(O.forEach(function(W){we.releaseProgram(W)}),b.isShaderMaterial&&we.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,W,q,V,ve){O===null&&(O=Te);const Ae=V.isMesh&&V.matrixWorld.determinant()<0,Pe=Zv(b,O,W,q,V);J.setMaterial(q,Ae);let Ie=W.index,He=1;if(q.wireframe===!0){if(Ie=te.getWireframeAttribute(W),Ie===void 0)return;He=2}const Fe=W.drawRange,ke=W.attributes.position;let gt=Fe.start*He,an=(Fe.start+Fe.count)*He;ve!==null&&(gt=Math.max(gt,ve.start*He),an=Math.min(an,(ve.start+ve.count)*He)),Ie!==null?(gt=Math.max(gt,0),an=Math.min(an,Ie.count)):ke!=null&&(gt=Math.max(gt,0),an=Math.min(an,ke.count));const wt=an-gt;if(wt<0||wt===1/0)return;Oe.setup(V,q,Pe,W,Ie);let Kn,ct=Ue;if(Ie!==null&&(Kn=re.get(Ie),ct=Ce,ct.setIndex(Kn)),V.isMesh)q.wireframe===!0?(J.setLineWidth(q.wireframeLinewidth*be()),ct.setMode(k.LINES)):ct.setMode(k.TRIANGLES);else if(V.isLine){let Ge=q.linewidth;Ge===void 0&&(Ge=1),J.setLineWidth(Ge*be()),V.isLineSegments?ct.setMode(k.LINES):V.isLineLoop?ct.setMode(k.LINE_LOOP):ct.setMode(k.LINE_STRIP)}else V.isPoints?ct.setMode(k.POINTS):V.isSprite&&ct.setMode(k.TRIANGLES);if(V.isBatchedMesh)ct.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else if(V.isInstancedMesh)ct.renderInstances(gt,wt,V.count);else if(W.isInstancedBufferGeometry){const Ge=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,jl=Math.min(W.instanceCount,Ge);ct.renderInstances(gt,wt,jl)}else ct.render(gt,wt)};function tt(b,O,W){b.transparent===!0&&b.side===si&&b.forceSinglePass===!1?(b.side=rn,b.needsUpdate=!0,Fa(b,O,W),b.side=qi,b.needsUpdate=!0,Fa(b,O,W),b.side=si):Fa(b,O,W)}this.compile=function(b,O,W=null){W===null&&(W=b),m=Le.get(W),m.init(),g.push(m),W.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),b!==W&&b.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),m.setupLights(x._useLegacyLights);const q=new Set;return b.traverse(function(V){const ve=V.material;if(ve)if(Array.isArray(ve))for(let Ae=0;Ae<ve.length;Ae++){const Pe=ve[Ae];tt(Pe,W,V),q.add(Pe)}else tt(ve,W,V),q.add(ve)}),g.pop(),m=null,q},this.compileAsync=function(b,O,W=null){const q=this.compile(b,O,W);return new Promise(V=>{function ve(){if(q.forEach(function(Ae){me.get(Ae).currentProgram.isReady()&&q.delete(Ae)}),q.size===0){V(b);return}setTimeout(ve,10)}_e.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let nt=null;function Tt(b){nt&&nt(b)}function jt(){Gt.stop()}function it(){Gt.start()}const Gt=new Bv;Gt.setAnimationLoop(Tt),typeof self<"u"&&Gt.setContext(self),this.setAnimationLoop=function(b){nt=b,je.setAnimationLoop(b),b===null?Gt.stop():Gt.start()},je.addEventListener("sessionstart",jt),je.addEventListener("sessionend",it),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),je.enabled===!0&&je.isPresenting===!0&&(je.cameraAutoUpdate===!0&&je.updateCamera(O),O=je.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,O,w),m=Le.get(b,g.length),m.init(),g.push(m),ge.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),j.setFromProjectionMatrix(ge),ae=this.localClippingEnabled,Z=Be.init(this.clippingPlanes,ae),y=Se.get(b,u.length),y.init(),u.push(y),jn(b,O,0,x.sortObjects),y.finish(),x.sortObjects===!0&&y.sort(U,z),this.info.render.frame++,Z===!0&&Be.beginShadows();const W=m.state.shadowsArray;if(ee.render(W,b,O),Z===!0&&Be.endShadows(),this.info.autoReset===!0&&this.info.reset(),Qe.render(y,b),m.setupLights(x._useLegacyLights),O.isArrayCamera){const q=O.cameras;for(let V=0,ve=q.length;V<ve;V++){const Ae=q[V];nh(y,b,Ae,Ae.viewport)}}else nh(y,b,O);w!==null&&(A.updateMultisampleRenderTarget(w),A.updateRenderTargetMipmap(w)),b.isScene===!0&&b.onAfterRender(x,b,O),Oe.resetDefaultState(),F=-1,S=null,g.pop(),g.length>0?m=g[g.length-1]:m=null,u.pop(),u.length>0?y=u[u.length-1]:y=null};function jn(b,O,W,q){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)W=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||j.intersectsSprite(b)){q&&Re.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ge);const Ae=se.update(b),Pe=b.material;Pe.visible&&y.push(b,Ae,Pe,W,Re.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||j.intersectsObject(b))){const Ae=se.update(b),Pe=b.material;if(q&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Re.copy(b.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),Re.copy(Ae.boundingSphere.center)),Re.applyMatrix4(b.matrixWorld).applyMatrix4(ge)),Array.isArray(Pe)){const Ie=Ae.groups;for(let He=0,Fe=Ie.length;He<Fe;He++){const ke=Ie[He],gt=Pe[ke.materialIndex];gt&&gt.visible&&y.push(b,Ae,gt,W,Re.z,ke)}}else Pe.visible&&y.push(b,Ae,Pe,W,Re.z,null)}}const ve=b.children;for(let Ae=0,Pe=ve.length;Ae<Pe;Ae++)jn(ve[Ae],O,W,q)}function nh(b,O,W,q){const V=b.opaque,ve=b.transmissive,Ae=b.transparent;m.setupLightsView(W),Z===!0&&Be.setGlobalState(x.clippingPlanes,W),ve.length>0&&Kv(V,ve,O,W),q&&J.viewport(T.copy(q)),V.length>0&&Ua(V,O,W),ve.length>0&&Ua(ve,O,W),Ae.length>0&&Ua(Ae,O,W),J.buffers.depth.setTest(!0),J.buffers.depth.setMask(!0),J.buffers.color.setMask(!0),J.setPolygonOffset(!1)}function Kv(b,O,W,q){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;const ve=Q.isWebGL2;pe===null&&(pe=new Mr(1,1,{generateMipmaps:!0,type:_e.has("EXT_color_buffer_half_float")?Ta:Vi,minFilter:Ma,samples:ve?4:0})),x.getDrawingBufferSize(ye),ve?pe.setSize(ye.x,ye.y):pe.setSize(_l(ye.x),_l(ye.y));const Ae=x.getRenderTarget();x.setRenderTarget(pe),x.getClearColor(ie),D=x.getClearAlpha(),D<1&&x.setClearColor(16777215,.5),x.clear();const Pe=x.toneMapping;x.toneMapping=Gi,Ua(b,W,q),A.updateMultisampleRenderTarget(pe),A.updateRenderTargetMipmap(pe);let Ie=!1;for(let He=0,Fe=O.length;He<Fe;He++){const ke=O[He],gt=ke.object,an=ke.geometry,wt=ke.material,Kn=ke.group;if(wt.side===si&&gt.layers.test(q.layers)){const ct=wt.side;wt.side=rn,wt.needsUpdate=!0,ih(gt,W,q,an,wt,Kn),wt.side=ct,wt.needsUpdate=!0,Ie=!0}}Ie===!0&&(A.updateMultisampleRenderTarget(pe),A.updateRenderTargetMipmap(pe)),x.setRenderTarget(Ae),x.setClearColor(ie,D),x.toneMapping=Pe}function Ua(b,O,W){const q=O.isScene===!0?O.overrideMaterial:null;for(let V=0,ve=b.length;V<ve;V++){const Ae=b[V],Pe=Ae.object,Ie=Ae.geometry,He=q===null?Ae.material:q,Fe=Ae.group;Pe.layers.test(W.layers)&&ih(Pe,O,W,Ie,He,Fe)}}function ih(b,O,W,q,V,ve){b.onBeforeRender(x,O,W,q,V,ve),b.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),V.onBeforeRender(x,O,W,q,b,ve),V.transparent===!0&&V.side===si&&V.forceSinglePass===!1?(V.side=rn,V.needsUpdate=!0,x.renderBufferDirect(W,O,q,V,b,ve),V.side=qi,V.needsUpdate=!0,x.renderBufferDirect(W,O,q,V,b,ve),V.side=si):x.renderBufferDirect(W,O,q,V,b,ve),b.onAfterRender(x,O,W,q,V,ve)}function Fa(b,O,W){O.isScene!==!0&&(O=Te);const q=me.get(b),V=m.state.lights,ve=m.state.shadowsArray,Ae=V.state.version,Pe=we.getParameters(b,V.state,ve,O,W),Ie=we.getProgramCacheKey(Pe);let He=q.programs;q.environment=b.isMeshStandardMaterial?O.environment:null,q.fog=O.fog,q.envMap=(b.isMeshStandardMaterial?G:M).get(b.envMap||q.environment),He===void 0&&(b.addEventListener("dispose",ue),He=new Map,q.programs=He);let Fe=He.get(Ie);if(Fe!==void 0){if(q.currentProgram===Fe&&q.lightsStateVersion===Ae)return sh(b,Pe),Fe}else Pe.uniforms=we.getUniforms(b),b.onBuild(W,Pe,x),b.onBeforeCompile(Pe,x),Fe=we.acquireProgram(Pe,Ie),He.set(Ie,Fe),q.uniforms=Pe.uniforms;const ke=q.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(ke.clippingPlanes=Be.uniform),sh(b,Pe),q.needsLights=Jv(b),q.lightsStateVersion=Ae,q.needsLights&&(ke.ambientLightColor.value=V.state.ambient,ke.lightProbe.value=V.state.probe,ke.directionalLights.value=V.state.directional,ke.directionalLightShadows.value=V.state.directionalShadow,ke.spotLights.value=V.state.spot,ke.spotLightShadows.value=V.state.spotShadow,ke.rectAreaLights.value=V.state.rectArea,ke.ltc_1.value=V.state.rectAreaLTC1,ke.ltc_2.value=V.state.rectAreaLTC2,ke.pointLights.value=V.state.point,ke.pointLightShadows.value=V.state.pointShadow,ke.hemisphereLights.value=V.state.hemi,ke.directionalShadowMap.value=V.state.directionalShadowMap,ke.directionalShadowMatrix.value=V.state.directionalShadowMatrix,ke.spotShadowMap.value=V.state.spotShadowMap,ke.spotLightMatrix.value=V.state.spotLightMatrix,ke.spotLightMap.value=V.state.spotLightMap,ke.pointShadowMap.value=V.state.pointShadowMap,ke.pointShadowMatrix.value=V.state.pointShadowMatrix),q.currentProgram=Fe,q.uniformsList=null,Fe}function rh(b){if(b.uniformsList===null){const O=b.currentProgram.getUniforms();b.uniformsList=zo.seqWithValue(O.seq,b.uniforms)}return b.uniformsList}function sh(b,O){const W=me.get(b);W.outputColorSpace=O.outputColorSpace,W.batching=O.batching,W.instancing=O.instancing,W.instancingColor=O.instancingColor,W.skinning=O.skinning,W.morphTargets=O.morphTargets,W.morphNormals=O.morphNormals,W.morphColors=O.morphColors,W.morphTargetsCount=O.morphTargetsCount,W.numClippingPlanes=O.numClippingPlanes,W.numIntersection=O.numClipIntersection,W.vertexAlphas=O.vertexAlphas,W.vertexTangents=O.vertexTangents,W.toneMapping=O.toneMapping}function Zv(b,O,W,q,V){O.isScene!==!0&&(O=Te),A.resetTextureUnits();const ve=O.fog,Ae=q.isMeshStandardMaterial?O.environment:null,Pe=w===null?x.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:mi,Ie=(q.isMeshStandardMaterial?G:M).get(q.envMap||Ae),He=q.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Fe=!!W.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),ke=!!W.morphAttributes.position,gt=!!W.morphAttributes.normal,an=!!W.morphAttributes.color;let wt=Gi;q.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(wt=x.toneMapping);const Kn=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ct=Kn!==void 0?Kn.length:0,Ge=me.get(q),jl=m.state.lights;if(Z===!0&&(ae===!0||b!==S)){const _n=b===S&&q.id===F;Be.setState(q,b,_n)}let pt=!1;q.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==jl.state.version||Ge.outputColorSpace!==Pe||V.isBatchedMesh&&Ge.batching===!1||!V.isBatchedMesh&&Ge.batching===!0||V.isInstancedMesh&&Ge.instancing===!1||!V.isInstancedMesh&&Ge.instancing===!0||V.isSkinnedMesh&&Ge.skinning===!1||!V.isSkinnedMesh&&Ge.skinning===!0||V.isInstancedMesh&&Ge.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ge.instancingColor===!1&&V.instanceColor!==null||Ge.envMap!==Ie||q.fog===!0&&Ge.fog!==ve||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==Be.numPlanes||Ge.numIntersection!==Be.numIntersection)||Ge.vertexAlphas!==He||Ge.vertexTangents!==Fe||Ge.morphTargets!==ke||Ge.morphNormals!==gt||Ge.morphColors!==an||Ge.toneMapping!==wt||Q.isWebGL2===!0&&Ge.morphTargetsCount!==ct)&&(pt=!0):(pt=!0,Ge.__version=q.version);let Zi=Ge.currentProgram;pt===!0&&(Zi=Fa(q,O,V));let ah=!1,Ps=!1,Gl=!1;const Ut=Zi.getUniforms(),Qi=Ge.uniforms;if(J.useProgram(Zi.program)&&(ah=!0,Ps=!0,Gl=!0),q.id!==F&&(F=q.id,Ps=!0),ah||S!==b){Ut.setValue(k,"projectionMatrix",b.projectionMatrix),Ut.setValue(k,"viewMatrix",b.matrixWorldInverse);const _n=Ut.map.cameraPosition;_n!==void 0&&_n.setValue(k,Re.setFromMatrixPosition(b.matrixWorld)),Q.logarithmicDepthBuffer&&Ut.setValue(k,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Ut.setValue(k,"isOrthographic",b.isOrthographicCamera===!0),S!==b&&(S=b,Ps=!0,Gl=!0)}if(V.isSkinnedMesh){Ut.setOptional(k,V,"bindMatrix"),Ut.setOptional(k,V,"bindMatrixInverse");const _n=V.skeleton;_n&&(Q.floatVertexTextures?(_n.boneTexture===null&&_n.computeBoneTexture(),Ut.setValue(k,"boneTexture",_n.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}V.isBatchedMesh&&(Ut.setOptional(k,V,"batchingTexture"),Ut.setValue(k,"batchingTexture",V._matricesTexture,A));const Vl=W.morphAttributes;if((Vl.position!==void 0||Vl.normal!==void 0||Vl.color!==void 0&&Q.isWebGL2===!0)&&We.update(V,W,Zi),(Ps||Ge.receiveShadow!==V.receiveShadow)&&(Ge.receiveShadow=V.receiveShadow,Ut.setValue(k,"receiveShadow",V.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Qi.envMap.value=Ie,Qi.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),Ps&&(Ut.setValue(k,"toneMappingExposure",x.toneMappingExposure),Ge.needsLights&&Qv(Qi,Gl),ve&&q.fog===!0&&he.refreshFogUniforms(Qi,ve),he.refreshMaterialUniforms(Qi,q,B,$,pe),zo.upload(k,rh(Ge),Qi,A)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(zo.upload(k,rh(Ge),Qi,A),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Ut.setValue(k,"center",V.center),Ut.setValue(k,"modelViewMatrix",V.modelViewMatrix),Ut.setValue(k,"normalMatrix",V.normalMatrix),Ut.setValue(k,"modelMatrix",V.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const _n=q.uniformsGroups;for(let Wl=0,e_=_n.length;Wl<e_;Wl++)if(Q.isWebGL2){const oh=_n[Wl];Ke.update(oh,Zi),Ke.bind(oh,Zi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Zi}function Qv(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function Jv(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(b,O,W){me.get(b.texture).__webglTexture=O,me.get(b.depthTexture).__webglTexture=W;const q=me.get(b);q.__hasExternalTextures=!0,q.__hasExternalTextures&&(q.__autoAllocateDepthBuffer=W===void 0,q.__autoAllocateDepthBuffer||_e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,O){const W=me.get(b);W.__webglFramebuffer=O,W.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(b,O=0,W=0){w=b,R=O,C=W;let q=!0,V=null,ve=!1,Ae=!1;if(b){const Ie=me.get(b);Ie.__useDefaultFramebuffer!==void 0?(J.bindFramebuffer(k.FRAMEBUFFER,null),q=!1):Ie.__webglFramebuffer===void 0?A.setupRenderTarget(b):Ie.__hasExternalTextures&&A.rebindTextures(b,me.get(b.texture).__webglTexture,me.get(b.depthTexture).__webglTexture);const He=b.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Ae=!0);const Fe=me.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Fe[O])?V=Fe[O][W]:V=Fe[O],ve=!0):Q.isWebGL2&&b.samples>0&&A.useMultisampledRTT(b)===!1?V=me.get(b).__webglMultisampledFramebuffer:Array.isArray(Fe)?V=Fe[W]:V=Fe,T.copy(b.viewport),P.copy(b.scissor),Y=b.scissorTest}else T.copy(N).multiplyScalar(B).floor(),P.copy(I).multiplyScalar(B).floor(),Y=K;if(J.bindFramebuffer(k.FRAMEBUFFER,V)&&Q.drawBuffers&&q&&J.drawBuffers(b,V),J.viewport(T),J.scissor(P),J.setScissorTest(Y),ve){const Ie=me.get(b.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ie.__webglTexture,W)}else if(Ae){const Ie=me.get(b.texture),He=O||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ie.__webglTexture,W||0,He)}F=-1},this.readRenderTargetPixels=function(b,O,W,q,V,ve,Ae){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=me.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ae!==void 0&&(Pe=Pe[Ae]),Pe){J.bindFramebuffer(k.FRAMEBUFFER,Pe);try{const Ie=b.texture,He=Ie.format,Fe=Ie.type;if(He!==kn&&Ee.convert(He)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ke=Fe===Ta&&(_e.has("EXT_color_buffer_half_float")||Q.isWebGL2&&_e.has("EXT_color_buffer_float"));if(Fe!==Vi&&Ee.convert(Fe)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Fe===Li&&(Q.isWebGL2||_e.has("OES_texture_float")||_e.has("WEBGL_color_buffer_float")))&&!ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-q&&W>=0&&W<=b.height-V&&k.readPixels(O,W,q,V,Ee.convert(He),Ee.convert(Fe),ve)}finally{const Ie=w!==null?me.get(w).__webglFramebuffer:null;J.bindFramebuffer(k.FRAMEBUFFER,Ie)}}},this.copyFramebufferToTexture=function(b,O,W=0){const q=Math.pow(2,-W),V=Math.floor(O.image.width*q),ve=Math.floor(O.image.height*q);A.setTexture2D(O,0),k.copyTexSubImage2D(k.TEXTURE_2D,W,0,0,b.x,b.y,V,ve),J.unbindTexture()},this.copyTextureToTexture=function(b,O,W,q=0){const V=O.image.width,ve=O.image.height,Ae=Ee.convert(W.format),Pe=Ee.convert(W.type);A.setTexture2D(W,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,W.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,W.unpackAlignment),O.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,q,b.x,b.y,V,ve,Ae,Pe,O.image.data):O.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,q,b.x,b.y,O.mipmaps[0].width,O.mipmaps[0].height,Ae,O.mipmaps[0].data):k.texSubImage2D(k.TEXTURE_2D,q,b.x,b.y,Ae,Pe,O.image),q===0&&W.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),J.unbindTexture()},this.copyTextureToTexture3D=function(b,O,W,q,V=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ve=b.max.x-b.min.x+1,Ae=b.max.y-b.min.y+1,Pe=b.max.z-b.min.z+1,Ie=Ee.convert(q.format),He=Ee.convert(q.type);let Fe;if(q.isData3DTexture)A.setTexture3D(q,0),Fe=k.TEXTURE_3D;else if(q.isDataArrayTexture||q.isCompressedArrayTexture)A.setTexture2DArray(q,0),Fe=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,q.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,q.unpackAlignment);const ke=k.getParameter(k.UNPACK_ROW_LENGTH),gt=k.getParameter(k.UNPACK_IMAGE_HEIGHT),an=k.getParameter(k.UNPACK_SKIP_PIXELS),wt=k.getParameter(k.UNPACK_SKIP_ROWS),Kn=k.getParameter(k.UNPACK_SKIP_IMAGES),ct=W.isCompressedTexture?W.mipmaps[V]:W.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,ct.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ct.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,b.min.x),k.pixelStorei(k.UNPACK_SKIP_ROWS,b.min.y),k.pixelStorei(k.UNPACK_SKIP_IMAGES,b.min.z),W.isDataTexture||W.isData3DTexture?k.texSubImage3D(Fe,V,O.x,O.y,O.z,ve,Ae,Pe,Ie,He,ct.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),k.compressedTexSubImage3D(Fe,V,O.x,O.y,O.z,ve,Ae,Pe,Ie,ct.data)):k.texSubImage3D(Fe,V,O.x,O.y,O.z,ve,Ae,Pe,Ie,He,ct),k.pixelStorei(k.UNPACK_ROW_LENGTH,ke),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,gt),k.pixelStorei(k.UNPACK_SKIP_PIXELS,an),k.pixelStorei(k.UNPACK_SKIP_ROWS,wt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Kn),V===0&&q.generateMipmaps&&k.generateMipmap(Fe),J.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?A.setTextureCube(b,0):b.isData3DTexture?A.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?A.setTexture2DArray(b,0):A.setTexture2D(b,0),J.unbindTexture()},this.resetState=function(){R=0,C=0,w=null,J.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Kd?"display-p3":"srgb",n.unpackColorSpace=Je.workingColorSpace===Ol?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Pt?vr:Tv}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===vr?Pt:mi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class I1 extends eh{}I1.prototype.isWebGL1Renderer=!0;class qv extends sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class th extends Da{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Wp=new Rt,Zu=new Nv,To=new zl,wo=new X;class Yv extends sn{constructor(e=new $n,n=new th){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),To.copy(i.boundingSphere),To.applyMatrix4(r),To.radius+=s,e.ray.intersectsSphere(To)===!1)return;Wp.copy(r).invert(),Zu.copy(e.ray).applyMatrix4(Wp);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,p=i.attributes.position;if(c!==null){const h=Math.max(0,a.start),v=Math.min(c.count,a.start+a.count);for(let _=h,y=v;_<y;_++){const m=c.getX(_);wo.fromBufferAttribute(p,m),Xp(wo,m,l,r,e,n,this)}}else{const h=Math.max(0,a.start),v=Math.min(p.count,a.start+a.count);for(let _=h,y=v;_<y;_++)wo.fromBufferAttribute(p,_),Xp(wo,_,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Xp(t,e,n,i,r,s,a){const o=Zu.distanceSqToPoint(t);if(o<n){const l=new X;Zu.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yd);function U1({activeFormation:t}){const e=fe.useRef(null),n=fe.useRef(null),i=fe.useRef(null),r=fe.useRef(null),s=1800,a=fe.useRef([]),o=fe.useRef([]),l=fe.useRef([]);if(a.current.length===0){for(let p=0;p<s;p++){const h=Math.floor(p/50),v=p%50,_=(v-50/2)*.35,y=(h-36/2)*.35,m=Math.sin(v*.18)*Math.cos(h*.22)*1.5;a.current.push(_,m,y)}for(let p=0;p<s;p++){const h=Math.pow(Math.random(),2)*8.5;let v=(Math.random()-.5)*1.5*(8.5-h)/8.5;const _=Math.floor(Math.random()*2)*Math.PI,y=h*.5+_;let m=Math.cos(y)*h+(Math.random()-.5)*.4,u=Math.sin(y)*h+(Math.random()-.5)*.4;o.current.push(m,v,u)}for(let p=0;p<s;p++){const h=Math.random()>.5,v=Math.random()>.85,_=p/s*Math.PI*6.5,y=3.2;let m=(_-Math.PI*3.25)*1.25,u,g;if(v){const x=Math.random(),E=_,R=_+Math.PI;u=ap.lerp(Math.cos(E),Math.cos(R),x)*y,g=ap.lerp(Math.sin(E),Math.sin(R),x)*y}else{const x=_+(h?Math.PI:0);u=Math.cos(x)*y,g=Math.sin(x)*y}u+=(Math.random()-.5)*.18,m+=(Math.random()-.5)*.18,g+=(Math.random()-.5)*.18,l.current.push(u,m,g)}}return fe.useEffect(()=>{let c=a.current;t===1?c=a.current:t===2?c=o.current:t===3&&(c=l.current),n.current=c},[t]),fe.useEffect(()=>{const c=e.current;if(!c)return;const f=c.clientWidth||500,p=c.clientHeight||400,h=new eh({antialias:!0,alpha:!0});h.setSize(f,p),h.setPixelRatio(Math.min(window.devicePixelRatio,2)),c.appendChild(h.domElement);const v=new qv,_=new dn(45,f/p,.1,100);_.position.z=18;const y=new $n,m=new Float32Array(s*3);let u=a.current;t===2?u=o.current:t===3&&(u=l.current),n.current=u;for(let T=0;T<s*3;T++)m[T]=u[T];const g=new Bn(m,3);y.setAttribute("position",g),r.current=g;const x=new th({size:.15,vertexColors:!0,transparent:!0,opacity:.85,blending:hl}),E=[],R=[new Ye(16777215),new Ye(13358561),new Ye(9741240),new Ye(6583435)];for(let T=0;T<s;T++){const P=R[Math.floor(Math.random()*R.length)];E.push(P.r,P.g,P.b)}y.setAttribute("color",new ui(E,3));const C=new Yv(y,x);i.current=C,v.add(C);const w=()=>{if(!c)return;const T=c.clientWidth,P=c.clientHeight;_.aspect=T/P,_.updateProjectionMatrix(),h.setSize(T,P)};window.addEventListener("resize",w);let F=null;const S=()=>{F=requestAnimationFrame(S),C.rotation.y+=.0035,C.rotation.x+=.001;const T=g.array,P=n.current;if(P){for(let Y=0;Y<s*3;Y++)T[Y]+=(P[Y]-T[Y])*.075;g.needsUpdate=!0}h.render(v,_)};return S(),()=>{cancelAnimationFrame(F),window.removeEventListener("resize",w),h.dispose(),x.dispose(),y.dispose(),c.contains(h.domElement)&&c.removeChild(h.domElement)}},[]),d.jsx("div",{className:"research-canvas-inner",id:"research-canvas",ref:e,style:{width:"100%",height:"100%"}})}function F1(){const t=fe.useRef(null);return fe.useEffect(()=>{const e=t.current;if(!e)return;const n=e.clientWidth,i=e.clientHeight,r=new eh({antialias:!1,alpha:!0});r.setSize(n,i),r.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),e.appendChild(r.domElement);const s=new qv,a=new dn(60,n/i,.1,100);a.position.z=10;const o=180,l=new $n,c=[],f=[];for(let m=0;m<o;m++)c.push((Math.random()-.5)*15,(Math.random()-.5)*10,(Math.random()-.5)*10),f.push([(Math.random()-.5)*.004,Math.random()*.006+.002,(Math.random()-.5)*.004]);l.setAttribute("position",new ui(c,3));const p=new th({size:.07,color:13358561,transparent:!0,opacity:.45,blending:hl}),h=new Yv(l,p);s.add(h);const v=()=>{if(!e)return;const m=e.clientWidth,u=e.clientHeight;a.aspect=m/u,a.updateProjectionMatrix(),r.setSize(m,u)};window.addEventListener("resize",v);let _=null;const y=()=>{_=requestAnimationFrame(y);const m=l.attributes.position,u=m.array;for(let g=0;g<o;g++){const x=g*3;u[x]+=f[g][0],u[x+1]+=f[g][1],u[x+2]+=f[g][2],u[x+1]>5&&(u[x+1]=-5,u[x]=(Math.random()-.5)*15)}m.needsUpdate=!0,r.render(s,a)};return y(),()=>{cancelAnimationFrame(_),window.removeEventListener("resize",v),r.dispose(),p.dispose(),l.dispose(),e.contains(r.domElement)&&e.removeChild(r.domElement)}},[]),d.jsx("div",{className:"numbers-canvas-wrap",id:"numbers-canvas",ref:t})}const k1=Xd(t=>({speed:.85,gooeyness:1.2,ditherEnabled:!0,dotSize:5,dotGap:2.5,brightness:.85,contrast:.6,crossEnabled:!1,crossIntensity:.95,bloomEnabled:!0,bloomIntensity:.55,bloomSize:1.5,crtEnabled:!0,scanlines:.75,curvature:0,vignette:2,chroma:.1,gpuTier:"detecting…",setSpeed:e=>t({speed:e}),setGooeyness:e=>t({gooeyness:e}),setDitherEnabled:e=>t({ditherEnabled:e}),setDotSize:e=>t({dotSize:e}),setDotGap:e=>t({dotGap:e}),setBrightness:e=>t({brightness:e}),setContrast:e=>t({contrast:e}),setCrossEnabled:e=>t({crossEnabled:e}),setCrossIntensity:e=>t({crossIntensity:e}),setBloomEnabled:e=>t({bloomEnabled:e}),setBloomIntensity:e=>t({bloomIntensity:e}),setBloomSize:e=>t({bloomSize:e}),setCrtEnabled:e=>t({crtEnabled:e}),setScanlines:e=>t({scanlines:e}),setCurvature:e=>t({curvature:e}),setVignette:e=>t({vignette:e}),setChroma:e=>t({chroma:e}),setGpuTier:e=>t({gpuTier:e})}));function O1({isOpen:t,onClose:e}){const n=k1();return d.jsxs(d.Fragment,{children:[d.jsx("div",{className:`settings-backdrop ${t?"open":""}`,onClick:e}),d.jsxs("div",{className:`settings-panel ${t?"open":""}`,id:"settings-panel",children:[d.jsxs("div",{className:"settings-panel-header",children:[d.jsx("span",{className:"settings-panel-title",children:"Visual Synthesizer"}),d.jsx("button",{className:"settings-panel-close",onClick:e,"aria-label":"Close settings",children:d.jsx("svg",{viewBox:"0 0 16 16",children:d.jsx("path",{d:"M4 4l8 8M12 4l-8 8",stroke:"currentColor",strokeWidth:"2",fill:"none"})})})]}),d.jsxs("div",{className:"settings-panel-body",children:[d.jsxs("div",{className:"settings-section",children:[d.jsx("div",{className:"settings-section-title",children:"Fluid Aura"}),d.jsxs("div",{className:"settings-slider-row",children:[d.jsxs("div",{className:"settings-slider-header",children:[d.jsx("span",{className:"settings-label",children:"Flow Speed"}),d.jsx("span",{className:"settings-value",children:n.speed.toFixed(2)})]}),d.jsx("input",{type:"range",className:"s-range",min:"0",max:"2",step:"0.05",value:n.speed,onChange:i=>n.setSpeed(parseFloat(i.target.value))})]}),d.jsxs("div",{className:"settings-slider-row",children:[d.jsxs("div",{className:"settings-slider-header",children:[d.jsx("span",{className:"settings-label",children:"Gooeyness"}),d.jsx("span",{className:"settings-value",children:n.gooeyness.toFixed(2)})]}),d.jsx("input",{type:"range",className:"s-range",min:"0.1",max:"3",step:"0.05",value:n.gooeyness,onChange:i=>n.setGooeyness(parseFloat(i.target.value))})]})]}),d.jsx("div",{className:"settings-divider"}),d.jsxs("div",{className:"settings-section",children:[d.jsx("div",{className:"settings-section-title",children:"Dot Matrix"}),d.jsxs("div",{className:"settings-row",children:[d.jsx("span",{className:"settings-label",children:"Enabled"}),d.jsx("div",{className:`s-toggle ${n.ditherEnabled?"on":""}`,onClick:()=>n.setDitherEnabled(!n.ditherEnabled)})]}),d.jsxs("div",{className:"settings-slider-row",children:[d.jsxs("div",{className:"settings-slider-header",children:[d.jsx("span",{className:"settings-label",children:"Dot Size"}),d.jsx("span",{className:"settings-value",children:n.dotSize.toFixed(1)})]}),d.jsx("input",{type:"range",className:"s-range",min:"1",max:"12",step:"0.5",value:n.dotSize,onChange:i=>n.setDotSize(parseFloat(i.target.value))})]}),d.jsxs("div",{className:"settings-slider-row",children:[d.jsxs("div",{className:"settings-slider-header",children:[d.jsx("span",{className:"settings-label",children:"Dot Gap"}),d.jsx("span",{className:"settings-value",children:n.dotGap.toFixed(1)})]}),d.jsx("input",{type:"range",className:"s-range",min:"0",max:"6",step:"0.5",value:n.dotGap,onChange:i=>n.setDotGap(parseFloat(i.target.value))})]}),d.jsxs("div",{className:"settings-slider-row",children:[d.jsxs("div",{className:"settings-slider-header",children:[d.jsx("span",{className:"settings-label",children:"Brightness"}),d.jsx("span",{className:"settings-value",children:n.brightness.toFixed(2)})]}),d.jsx("input",{type:"range",className:"s-range",min:"0.1",max:"2",step:"0.05",value:n.brightness,onChange:i=>n.setBrightness(parseFloat(i.target.value))})]}),d.jsxs("div",{className:"settings-slider-row",children:[d.jsxs("div",{className:"settings-slider-header",children:[d.jsx("span",{className:"settings-label",children:"Contrast"}),d.jsx("span",{className:"settings-value",children:n.contrast.toFixed(2)})]}),d.jsx("input",{type:"range",className:"s-range",min:"0.1",max:"2",step:"0.05",value:n.contrast,onChange:i=>n.setContrast(parseFloat(i.target.value))})]})]}),d.jsx("div",{className:"settings-divider"}),d.jsxs("div",{className:"settings-section",children:[d.jsx("div",{className:"settings-section-title",children:"Crosshatch"}),d.jsxs("div",{className:"settings-row",children:[d.jsx("span",{className:"settings-label",children:"Enabled"}),d.jsx("div",{className:`s-toggle ${n.crossEnabled?"on":""}`,onClick:()=>n.setCrossEnabled(!n.crossEnabled)})]}),d.jsxs("div",{className:"settings-slider-row",children:[d.jsxs("div",{className:"settings-slider-header",children:[d.jsx("span",{className:"settings-label",children:"Intensity"}),d.jsx("span",{className:"settings-value",children:n.crossIntensity.toFixed(2)})]}),d.jsx("input",{type:"range",className:"s-range",min:"0",max:"1",step:"0.05",value:n.crossIntensity,onChange:i=>n.setCrossIntensity(parseFloat(i.target.value))})]})]}),d.jsx("div",{className:"settings-divider"}),d.jsxs("div",{className:"settings-section",children:[d.jsx("div",{className:"settings-section-title",children:"Bloom Glow"}),d.jsxs("div",{className:"settings-row",children:[d.jsx("span",{className:"settings-label",children:"Enabled"}),d.jsx("div",{className:`s-toggle ${n.bloomEnabled?"on":""}`,onClick:()=>n.setBloomEnabled(!n.bloomEnabled)})]}),d.jsxs("div",{className:"settings-slider-row",children:[d.jsxs("div",{className:"settings-slider-header",children:[d.jsx("span",{className:"settings-label",children:"Intensity"}),d.jsx("span",{className:"settings-value",children:n.bloomIntensity.toFixed(2)})]}),d.jsx("input",{type:"range",className:"s-range",min:"0",max:"2",step:"0.05",value:n.bloomIntensity,onChange:i=>n.setBloomIntensity(parseFloat(i.target.value))})]}),d.jsxs("div",{className:"settings-slider-row",children:[d.jsxs("div",{className:"settings-slider-header",children:[d.jsx("span",{className:"settings-label",children:"Size"}),d.jsx("span",{className:"settings-value",children:n.bloomSize.toFixed(2)})]}),d.jsx("input",{type:"range",className:"s-range",min:"0.5",max:"4",step:"0.1",value:n.bloomSize,onChange:i=>n.setBloomSize(parseFloat(i.target.value))})]})]}),d.jsx("div",{className:"settings-divider"}),d.jsxs("div",{className:"settings-section",children:[d.jsx("div",{className:"settings-section-title",children:"CRT Shader"}),d.jsxs("div",{className:"settings-row",children:[d.jsx("span",{className:"settings-label",children:"Enabled"}),d.jsx("div",{className:`s-toggle ${n.crtEnabled?"on":""}`,onClick:()=>n.setCrtEnabled(!n.crtEnabled)})]}),d.jsxs("div",{className:"settings-slider-row",children:[d.jsxs("div",{className:"settings-slider-header",children:[d.jsx("span",{className:"settings-label",children:"Scanlines"}),d.jsx("span",{className:"settings-value",children:n.scanlines.toFixed(2)})]}),d.jsx("input",{type:"range",className:"s-range",min:"0",max:"1",step:"0.05",value:n.scanlines,onChange:i=>n.setScanlines(parseFloat(i.target.value))})]}),d.jsxs("div",{className:"settings-slider-row",children:[d.jsxs("div",{className:"settings-slider-header",children:[d.jsx("span",{className:"settings-label",children:"Curvature"}),d.jsx("span",{className:"settings-value",children:n.curvature.toFixed(2)})]}),d.jsx("input",{type:"range",className:"s-range",min:"0",max:"5",step:"0.1",value:n.curvature,onChange:i=>n.setCurvature(parseFloat(i.target.value))})]}),d.jsxs("div",{className:"settings-slider-row",children:[d.jsxs("div",{className:"settings-slider-header",children:[d.jsx("span",{className:"settings-label",children:"Vignette"}),d.jsx("span",{className:"settings-value",children:n.vignette.toFixed(2)})]}),d.jsx("input",{type:"range",className:"s-range",min:"0",max:"5",step:"0.1",value:n.vignette,onChange:i=>n.setVignette(parseFloat(i.target.value))})]}),d.jsxs("div",{className:"settings-slider-row",children:[d.jsxs("div",{className:"settings-slider-header",children:[d.jsx("span",{className:"settings-label",children:"Chroma"}),d.jsx("span",{className:"settings-value",children:n.chroma.toFixed(2)})]}),d.jsx("input",{type:"range",className:"s-range",min:"0",max:"5",step:"0.1",value:n.chroma,onChange:i=>n.setChroma(parseFloat(i.target.value))})]})]}),d.jsx("div",{className:"settings-divider"}),d.jsxs("div",{className:"settings-tier",id:"settings-tier",children:["GPU Tier: ",n.gpuTier]})]})]})]})}const $v="THANKYOUFORCHOOSINGUS",Yc=$v.length;function z1({isOpen:t,onClose:e}){const n=pr(N=>N.login),[i,r]=fe.useState(!0),[s,a]=fe.useState(""),[o,l]=fe.useState(""),[c,f]=fe.useState(""),[p,h]=fe.useState(un[0].id),[v,_]=fe.useState(""),[y,m]=fe.useState(!1),[u,g]=fe.useState(!1),[x,E]=fe.useState(Array(Yc).fill(!1)),[R,C]=fe.useState(!1),[w,F]=fe.useState({x:-1e3,y:-1e3}),[S,T]=fe.useState(!1),P=dl(N=>N.lang),Y=qd[P];if(fe.useEffect(()=>{t||(a(""),l(""),f(""),h(un[0].id),_(""),E(Array(Yc).fill(!1)),C(!1),F({x:-1e3,y:-1e3}),T(!1))},[t]),fe.useEffect(()=>{t&&x.every(I=>I)&&!R&&C(!0)},[x,t,R]),!t)return null;const ie=N=>{if(x[N])return;const I=[...x];I[N]=!0,E(I)},D=N=>{const I=N.currentTarget.getBoundingClientRect(),K=N.clientX-I.left,j=N.clientY-I.top;F({x:K,y:j});const Z=N.clientX-I.left-I.width/2,pe=(N.clientY-I.top-I.height/2)/(I.height/2)*-9,ge=Z/(I.width/2)*9,ye=N.currentTarget.querySelector(".cubes-grid-matrix");ye&&(ye.style.setProperty("--tilt-x",`${pe}deg`),ye.style.setProperty("--tilt-y",`${ge}deg`))},H=N=>{T(!1);const I=N.currentTarget.querySelector(".cubes-grid-matrix");I&&(I.style.setProperty("--tilt-x","0deg"),I.style.setProperty("--tilt-y","0deg"))},$=()=>{T(!0)},B=N=>{if(N.preventDefault(),_(""),i&&!s.trim()){_(P==="en"?"Please enter your name.":P==="uz"?"Ismingizni kiriting.":"Пожалуйста, введите имя.");return}if(!o||!c){_(P==="en"?"Please fill in all fields.":P==="uz"?"Barcha maydonlarni to'ldiring.":"Пожалуйста, заполните все поля.");return}if(!/\S+@\S+\.\S+/.test(o)){_(P==="en"?"Please enter a valid email.":P==="uz"?"Email noto'g'ri.":"Введите корректный email.");return}if(c.length<5){_(P==="en"?"Password must be at least 5 characters.":P==="uz"?"Parol kamida 5 ta belgi bo'lishi shart.":"Пароль должен содержать не менее 5 символов.");return}m(!0),setTimeout(()=>{m(!1),g(!0);const I=o.trim();let K=i?s.trim():I.split("@")[0];K=K.charAt(0).toUpperCase()+K.slice(1);const j=un.find(ae=>ae.id===p)||un[0],Z=ul(j.colors);setTimeout(()=>{n(I,K,Z),g(!1),e()},1200)},1500)},U=x.filter(Boolean).length,z=Yc-U;return d.jsxs("div",{className:"auth-fullscreen-overlay",children:[d.jsx("button",{className:"auth-fullscreen-close",onClick:e,"aria-label":"Close",children:d.jsx("svg",{viewBox:"0 0 24 24",width:"24",height:"24",children:d.jsx("path",{d:"M18 6 6 18M6 6l12 12",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),d.jsxs("div",{className:"auth-fullscreen-container",children:[d.jsx("div",{className:"auth-left-panel",children:d.jsx("div",{className:"auth-left-content",children:u?d.jsxs("div",{className:"auth-success-screen",children:[d.jsx("div",{className:"auth-success-icon",children:d.jsx("svg",{viewBox:"0 0 24 24",width:"48",height:"48",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:d.jsx("polyline",{points:"20 6 9 17 4 12"})})}),d.jsx("h3",{className:"auth-panel-title",style:{marginTop:"24px"},children:Y.accessGranted}),d.jsxs("p",{className:"auth-panel-subtitle",style:{color:"rgba(255, 255, 255, 0.85)",fontSize:"14px"},children:[P==="en"?"Welcome back":P==="uz"?"Xush kelibsiz":"Добро пожаловать обратно",", ",i?s.trim():o.split("@")[0]]}),d.jsx("p",{className:"auth-panel-subtitle",style:{fontSize:"11px",color:"rgba(255, 255, 255, 0.3)",marginTop:"8px"},children:P==="en"?"Decrypting user credentials & authorization keys...":P==="uz"?"Foydalanuvchi ma'lumotlari va avtorizatsiya kalitlari ochilmoqda...":"Дешифрование данных пользователя и ключей авторизации..."})]}):d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"auth-logo-area",children:[d.jsx("span",{className:"auth-decor-bullet",children:"✦"}),d.jsx("h3",{className:"auth-panel-title",children:i?Y.createAccount.toUpperCase():P==="en"?"ESTABLISH SESSION":P==="uz"?"TIZIMGA KIRISH":"УСТАНОВИТЬ СЕССИЮ"}),d.jsx("p",{className:"auth-panel-subtitle",children:i?P==="en"?"Register your developer identity to access QIX nodes.":P==="uz"?"QIX tugunlariga kirish uchun dasturchi profilingizni yarating.":"Зарегистрируйте профиль разработчика для доступа к узлам QIX.":P==="en"?"Connect with your credentials to resume your session.":P==="uz"?"Sessiyangizni tiklash uchun hisob ma'lumotlaringizni kiriting.":"Войдите под своими учетными данными, чтобы возобновить сессию."})]}),d.jsxs("form",{onSubmit:B,className:"auth-panel-form",children:[v&&d.jsx("div",{className:"auth-panel-error",children:v}),i&&d.jsxs("div",{className:"auth-input-group",children:[d.jsx("label",{className:"auth-input-label",children:Y.fullName}),d.jsx("input",{type:"text",className:"auth-input-field",value:s,onChange:N=>a(N.target.value),placeholder:"Alex Rivera",disabled:y})]}),d.jsxs("div",{className:"auth-input-group",children:[d.jsx("label",{className:"auth-input-label",children:Y.emailAddr}),d.jsx("input",{type:"email",className:"auth-input-field",value:o,onChange:N=>l(N.target.value),placeholder:"alex@gmail.com",disabled:y})]}),i&&d.jsxs("div",{className:"auth-input-group",children:[d.jsx("label",{className:"auth-input-label",children:Y.chooseAvatar}),d.jsx("div",{className:"avatar-selection-grid",children:un.map(N=>{const I={background:`linear-gradient(135deg, ${N.colors[0]} 0%, ${N.colors[1]} 100%)`};return d.jsx("button",{type:"button",className:`avatar-option-btn ${p===N.id?"active":""}`,style:I,onClick:()=>h(N.id),"aria-label":N.name,title:N.name,disabled:y},N.id)})})]}),d.jsxs("div",{className:"auth-input-group",children:[d.jsx("label",{className:"auth-input-label",children:Y.password}),d.jsx("input",{type:"password",className:"auth-input-field",value:c,onChange:N=>f(N.target.value),placeholder:"••••••••",disabled:y})]}),d.jsx("button",{type:"submit",className:"auth-submit-btn",disabled:y,children:y?d.jsx("span",{className:"auth-spinner"}):i?P==="en"?"Create Profile & Connect":P==="uz"?"Profil yaratish va ulanish":"Создать профиль и подключиться":P==="en"?"Authorize Connection":P==="uz"?"Ulanishni tasdiqlash":"Авторизовать подключение"}),d.jsxs("div",{className:"auth-switch-prompt",children:[d.jsx("span",{children:i?P==="en"?"Already registered? ":P==="uz"?"Ro'yxatdan o'tganmisiz? ":"Уже зарегистрированы? ":P==="en"?"New developer? ":P==="uz"?"Yangi dasturchimisiz? ":"Новый разработчик? "}),d.jsx("button",{type:"button",className:"auth-switch-link",onClick:()=>{r(!i),_("")},disabled:y,children:i?Y.login:P==="en"?"Sign Up":P==="uz"?"Ro'yxatdan o'tish":"Регистрация"})]})]})]})})}),d.jsxs("div",{className:"auth-right-panel",onMouseMove:D,onMouseEnter:$,onMouseLeave:H,children:[d.jsx("div",{className:"auth-hover-orb",style:{left:`${w.x}px`,top:`${w.y}px`,opacity:S?1:0}}),d.jsxs("div",{className:"auth-game-container",children:[d.jsx("h4",{className:"game-title",children:P==="en"?"DEVELOPER AUTHENTICATION GRID":P==="uz"?"DASTURCHI AVTORIZATSIYA TO'RI":"СЕТКА АВТОРИЗАЦИИ РАЗРАБОТЧИКА"}),d.jsx("p",{className:"game-subtitle",children:R?P==="en"?"Grid fully decrypted. Secure channel verified!":P==="uz"?"Tarmoq to'liq ochildi. Xavfsiz kanal tasdiqlandi!":"Сетка успешно расшифрована. Безопасный канал подтвержден!":P==="en"?`Hover your mouse over the cybernetic cubes to decrypt the access key. (${z} cubes remaining)`:P==="uz"?`Kirish kalitini ochish uchun kiber kubiklar ustiga kursorni olib boring. (${z} ta kubik qoldi)`:`Наведите курсор на кибернетические кубы, чтобы расшифровать ключ доступа. (Осталось кубов: ${z})`}),d.jsx("div",{className:`cubes-grid-matrix ${R?"won-glow":""}`,children:$v.split("").map((N,I)=>d.jsx("div",{className:`cube-container ${x[I]?"revealed":""}`,onMouseEnter:()=>ie(I),onTouchStart:()=>ie(I),style:{animationDelay:`${I*.035}s`,"--cube-idx":I},children:d.jsxs("div",{className:"cube-card",children:[d.jsx("div",{className:"cube-front",children:d.jsx("span",{className:"cube-front-dot"})}),d.jsx("div",{className:"cube-back",children:d.jsx("span",{className:"cube-letter",children:N})})]})},I))}),R&&d.jsxs("div",{className:"game-congrats-banner",children:[d.jsx("span",{className:"congrats-pulse"}),d.jsx("span",{children:"THANK YOU FOR CHOOSING US"})]})]})]})]})]})}function Ti({children:t}){const e=fe.useRef(null);return fe.useEffect(()=>{const n=e.current;if(!n)return;let i=0,r=0,s=0,a=0,o=null;const l=()=>{i+=(s-i)*.16,r+=(a-r)*.16,n.style.transform=`translate3d(${i}px, ${r}px, 0)`,Math.abs(s-i)>.01||Math.abs(a-r)>.01?o=requestAnimationFrame(l):(i=s,r=a,n.style.transform=`translate3d(${i}px, ${r}px, 0)`,o=null)},c=p=>{const h=n.getBoundingClientRect(),v=h.left+h.width/2,_=h.top+h.height/2,y=p.clientX-v,m=p.clientY-_;Math.hypot(y,m)<75?(s=y*.38,a=m*.38):(s=0,a=0),o||(o=requestAnimationFrame(l))},f=()=>{s=0,a=0,o||(o=requestAnimationFrame(l))};return window.addEventListener("mousemove",c),n.addEventListener("mouseleave",f),()=>{window.removeEventListener("mousemove",c),n.removeEventListener("mouseleave",f),o&&cancelAnimationFrame(o)}},[]),d.jsx("div",{ref:e,style:{display:"inline-block",willChange:"transform"},children:t})}function Ao({count:t,suffix:e}){const n=fe.useRef(null),[i,r]=fe.useState(0);return fe.useEffect(()=>{const s=new IntersectionObserver(a=>{if(a[0].isIntersecting){const l=performance.now(),c=f=>{const p=Math.min((f-l)/2e3,1),h=1-Math.pow(1-p,3);r(Math.floor(h*t)),p<1&&requestAnimationFrame(c)};requestAnimationFrame(c)}},{threshold:.1});return n.current&&s.observe(n.current),()=>s.disconnect()},[t]),d.jsxs("span",{ref:n,children:[i,e]})}function B1(){const[t,e]=fe.useState(!1),[n,i]=fe.useState(!1),[r,s]=fe.useState(!1),[a,o]=fe.useState(!1),[l,c]=fe.useState(!1),[f,p]=fe.useState(1),[h,v]=fe.useState(!1),_=fe.useRef(null),y=fe.useRef(null),m=dl(w=>w.lang),u=dl(w=>w.setLang),g=qd[m],x=pr(w=>w.isLoggedIn),E=pr(w=>w.user),R=pr(w=>w.logout);fe.useEffect(()=>{const w=new kx({duration:1.2,easing:T=>Math.min(1,1.001-Math.pow(2,-10*T)),orientation:"vertical",gestureOrientation:"vertical",smoothWheel:!0,wheelMultiplier:1,touchMultiplier:2,infinite:!1});let F;function S(T){w.raf(T),F=requestAnimationFrame(S)}return F=requestAnimationFrame(S),()=>{w.destroy(),cancelAnimationFrame(F)}},[]),fe.useEffect(()=>{v(!0)},[]),fe.useEffect(()=>{const w=_.current,F=y.current,S={x:-1e3,y:-1e3,targetX:-1e3,targetY:-1e3},T=I=>{S.targetX=I.clientX,S.targetY=I.clientY};window.addEventListener("mousemove",T);let P;const Y=()=>{S.targetX===-1e3?(S.x+=(-1e3-S.x)*.12,S.y+=(-1e3-S.y)*.12):(S.x+=(S.targetX-S.x)*.22,S.y+=(S.targetY-S.y)*.22),w&&(w.style.transform=`translate3d(${S.x}px, ${S.y}px, 0)`),F&&(F.style.transform=`translate3d(${S.targetX}px, ${S.targetY}px, 0)`),P=requestAnimationFrame(Y)};P=requestAnimationFrame(Y);const ie=()=>{window.scrollY>50?c(!0):c(!1)};let D=[];const H=()=>{D=Array.from(document.querySelectorAll(".portfolio-card-wrapper")).map(I=>{const K=I.getBoundingClientRect();return window.scrollY+K.top})};setTimeout(H,600),window.addEventListener("resize",H);const $=()=>{if(window.innerWidth<768){document.querySelectorAll(".portfolio-card-wrapper").forEach(j=>{const Z=j.querySelector(".portfolio-card");Z&&(Z.style.transform="none",Z.style.opacity="1",Z.style.filter="none")});return}const I=document.querySelectorAll(".portfolio-card-wrapper"),K=window.scrollY;I.forEach((j,Z)=>{const pe=(D[Z]||K+j.getBoundingClientRect().top)-K,ge=120+Z*30,ye=j.querySelector(".portfolio-card");if(ye)if(pe<=ge){const Re=I[Z+1];if(Re){const be=(D[Z+1]||K+Re.getBoundingClientRect().top)-K,k=120+(Z+1)*30,qe=be-k,_e=400,Q=Math.max(0,Math.min(1,(_e-qe)/_e)),J=1-Q*.06,de=1-Q*.4,me=1-Q*.45;ye.style.transform=`scale(${J})`,ye.style.opacity=`${de}`,ye.style.filter=`brightness(${me})`;const A=ye.querySelector(".portfolio-card-image img");if(A){const M=-Q*40;A.style.transform=`scale(1.04) translateY(${M}px)`}}else{ye.style.transform="scale(1)",ye.style.opacity="1",ye.style.filter="none";const Te=ye.querySelector(".portfolio-card-image img");Te&&(Te.style.transform="none")}}else{ye.style.transform="scale(1)",ye.style.opacity="1",ye.style.filter="none";const Re=ye.querySelector(".portfolio-card-image img");Re&&(Re.style.transform="none")}})};let B=!1;const U=()=>{B||(B=!0,requestAnimationFrame(()=>{ie(),$(),B=!1}))};window.addEventListener("scroll",U,{passive:!0}),setTimeout($,100);const z=new IntersectionObserver(I=>{I.forEach(K=>{K.isIntersecting&&(K.target.classList.add("visible"),z.unobserve(K.target))})},{threshold:.1,rootMargin:"0px 0px -30px 0px"});document.querySelectorAll(".reveal").forEach(I=>z.observe(I));const N=I=>{const K=I.target;K.tagName==="A"||K.tagName==="BUTTON"||K.closest("a")||K.closest("button")||K.closest(".user-profile-badge")||K.closest(".settings-toggle")||K.classList.contains("research-item")||K.closest(".research-item")?(w==null||w.classList.add("hovered"),F==null||F.classList.add("hovered")):(w==null||w.classList.remove("hovered"),F==null||F.classList.remove("hovered"))};return window.addEventListener("mouseover",N),()=>{window.removeEventListener("mousemove",T),window.removeEventListener("mouseover",N),window.removeEventListener("scroll",U),window.removeEventListener("resize",H),cancelAnimationFrame(P),z.disconnect()}},[]);const C=h?"anim-in":"";return d.jsxs(d.Fragment,{children:[d.jsx(Ox,{}),d.jsxs("nav",{className:`nav ${l?"scrolled":""} ${C}`,children:[d.jsxs("div",{className:"nav-left nav-links",children:[d.jsx("a",{href:"#services",children:g.services}),d.jsx("a",{href:"#expertise",children:g.expertise})]}),d.jsxs("div",{className:"nav-brand-center",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:[d.jsx("img",{className:"nav-brand-img",src:"/logo.jpg",alt:"QIX Logo"}),d.jsx("span",{className:"nav-brand-text notranslate",translate:"no",children:"QIX Technologies"})]}),d.jsxs("div",{className:"nav-right nav-links",children:[d.jsxs("div",{className:"lang-switcher",children:[d.jsx("button",{onClick:()=>u("ru"),className:m==="ru"?"active":"",children:"RU"}),d.jsx("button",{onClick:()=>u("uz"),className:m==="uz"?"active":"",children:"UZ"}),d.jsx("button",{onClick:()=>u("en"),className:m==="en"?"active":"",children:"EN"})]}),x?d.jsxs("div",{className:"user-profile-badge",children:[d.jsx("img",{className:"user-profile-avatar",src:E.avatar,alt:"User Avatar"}),d.jsx("span",{className:"user-profile-name",children:E.name}),d.jsx("div",{className:"logout-dropdown",children:d.jsx("button",{className:"logout-btn",onClick:R,children:g.disconnect})})]}):d.jsx("a",{href:"#login",className:"nav-login-link",onClick:w=>{w.preventDefault(),s(!0)},style:{fontSize:"13px",fontWeight:"500",color:"rgba(255, 255, 255, 0.55)",textDecoration:"none",letterSpacing:"0.5px",transition:"color 0.3s ease"},onMouseEnter:w=>w.target.style.color="#fff",onMouseLeave:w=>w.target.style.color="rgba(255, 255, 255, 0.55)",children:g.login}),d.jsx(Ti,{children:d.jsx("a",{href:"#contact",className:"nav-cta",onClick:w=>{w.preventDefault(),o(!0)},children:d.jsxs("span",{className:"btn-content-inner",children:[d.jsxs("span",{className:"btn-slide-item",children:[d.jsx("span",{children:g.startProject}),d.jsx("svg",{className:"btn-arrow",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:d.jsx("path",{d:"M3 8h10M9 4l4 4-4 4"})})]}),d.jsxs("span",{className:"btn-slide-item btn-slide-item-hover",children:[d.jsx("span",{children:g.startProject}),d.jsx("svg",{className:"btn-arrow",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:d.jsx("path",{d:"M3 8h10M9 4l4 4-4 4"})})]})]})})})]}),d.jsxs("button",{className:`nav-hamburger ${n?"open":""}`,onClick:()=>i(!n),"aria-label":"Menu",children:[d.jsx("span",{}),d.jsx("span",{}),d.jsx("span",{})]})]}),d.jsxs("div",{className:`mobile-menu ${n?"open":""}`,children:[d.jsx("a",{href:"#services",onClick:()=>i(!1),children:g.services}),d.jsx("a",{href:"#expertise",onClick:()=>i(!1),children:g.expertise}),d.jsxs("div",{className:"mobile-lang-switcher",children:[d.jsx("button",{onClick:()=>{u("ru"),i(!1)},className:m==="ru"?"active":"",children:"RU"}),d.jsx("button",{onClick:()=>{u("uz"),i(!1)},className:m==="uz"?"active":"",children:"UZ"}),d.jsx("button",{onClick:()=>{u("en"),i(!1)},className:m==="en"?"active":"",children:"EN"})]}),x?d.jsxs("a",{href:"#logout",onClick:w=>{w.preventDefault(),R(),i(!1)},children:[g.logout," (",E.name,")"]}):d.jsx("a",{href:"#login",onClick:w=>{w.preventDefault(),s(!0),i(!1)},children:g.login}),d.jsx("a",{href:"#contact",className:"mobile-cta",onClick:w=>{w.preventDefault(),i(!1),o(!0)},children:g.startProject})]}),d.jsxs("div",{className:"hero-wrapper",children:[d.jsx("div",{className:`hero-fade ${C}`}),d.jsx("div",{className:`hero-fade-top ${C}`}),d.jsxs("div",{id:"hero-overlay",children:[d.jsxs("div",{className:"hero-content",children:[x&&d.jsxs("div",{className:"hero-welcome-badge",children:[d.jsx("span",{className:"welcome-pulse-dot"}),d.jsxs("span",{children:[m==="en"?"Welcome":m==="uz"?"Xush kelibsiz":"Добро пожаловать",", ",E.name]})]}),d.jsxs("h1",{className:`hero-h1 ${C}`,children:[g.heroTitle," ",d.jsx("br",{}),d.jsx("span",{className:"thin",children:g.heroTitleSub})]}),d.jsxs("div",{className:"hero-row",children:[d.jsx("p",{className:`hero-sub ${C}`,children:g.heroDesc}),d.jsxs("div",{className:`hero-actions ${C}`,children:[d.jsx(Ti,{children:d.jsx("a",{href:"#services",className:"btn-primary",children:d.jsxs("span",{className:"btn-content-inner",children:[d.jsxs("span",{className:"btn-slide-item",children:[d.jsx("span",{children:g.services}),d.jsx("svg",{className:"btn-arrow",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:d.jsx("path",{d:"M3 8h10M9 4l4 4-4 4"})})]}),d.jsxs("span",{className:"btn-slide-item btn-slide-item-hover",children:[d.jsx("span",{children:g.services}),d.jsx("svg",{className:"btn-arrow",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:d.jsx("path",{d:"M3 8h10M9 4l4 4-4 4"})})]})]})})}),d.jsx(Ti,{children:d.jsx("a",{href:"#contact",className:"btn-secondary",onClick:w=>{w.preventDefault(),o(!0)},children:d.jsxs("span",{className:"btn-content-inner",children:[d.jsxs("span",{className:"btn-slide-item",children:[d.jsx("span",{children:m==="en"?"Get in Touch":m==="uz"?"Bog'lanish":"Связаться"}),d.jsx("svg",{className:"btn-arrow",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:d.jsx("path",{d:"M3 8h10M9 4l4 4-4 4"})})]}),d.jsxs("span",{className:"btn-slide-item btn-slide-item-hover",children:[d.jsx("span",{children:m==="en"?"Get in Touch":m==="uz"?"Bog'lanish":"Связаться"}),d.jsx("svg",{className:"btn-arrow",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:d.jsx("path",{d:"M3 8h10M9 4l4 4-4 4"})})]})]})})})]})]})]}),d.jsxs("div",{className:"hero-bottom",children:[d.jsxs("div",{className:"hero-stats",children:[d.jsxs("div",{className:`hero-stat ${C}`,children:[d.jsx("span",{className:"hero-stat-val",children:"150+"}),d.jsx("span",{className:"hero-stat-label",children:g.heroStatsProjects})]}),d.jsxs("div",{className:`hero-stat ${C}`,children:[d.jsx("span",{className:"hero-stat-val",children:"99.9%"}),d.jsx("span",{className:"hero-stat-label",children:g.heroStatsUptime})]}),d.jsxs("div",{className:`hero-stat ${C}`,children:[d.jsx("span",{className:"hero-stat-val",children:"15M+"}),d.jsx("span",{className:"hero-stat-label",children:g.heroStatsUsers})]})]}),d.jsxs("div",{className:`hero-scroll ${C}`,children:[d.jsx("svg",{width:"13",height:"13",viewBox:"0 0 13 13",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{opacity:.35,flexShrink:0},children:d.jsx("path",{d:"M6.5 1v11M2 8l4.5 4.5L11 8",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),d.jsx("span",{style:{letterSpacing:"2px",fontSize:"10px"},children:m==="en"?"Scroll to explore":m==="uz"?"O'rganish uchun aylantiring":"Листайте ниже"})]})]})]})]}),d.jsx("button",{className:"settings-toggle",onClick:()=>e(!t),"aria-label":"Synthesizer Settings",children:d.jsxs("svg",{viewBox:"0 0 24 24",children:[d.jsx("path",{d:"M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"}),d.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51-1Z"})]})}),d.jsx("section",{className:"section section-whatwedo",id:"services",children:d.jsxs("div",{className:"section-inner",children:[d.jsx("div",{className:"section-label reveal",children:g.whatWeDo}),d.jsxs("h2",{className:"section-heading reveal reveal-delay-1",children:[g.engineeredStability," ",d.jsx("span",{className:"thin",children:g.designedGrowth})]}),d.jsxs("div",{className:"features-grid",children:[d.jsxs("div",{className:"feature-card reveal reveal-delay-1",children:[d.jsx("div",{className:"feature-icon",children:d.jsxs("svg",{viewBox:"0 0 24 24",children:[d.jsx("path",{d:"M12 2L2 7l10 5 10-5-10-5z"}),d.jsx("path",{d:"M2 17l10 5 10-5"}),d.jsx("path",{d:"M2 12l10 5 10-5"})]})}),d.jsx("div",{className:"feature-title",children:g.cardWebTitle}),d.jsx("div",{className:"feature-desc",children:g.cardWebDesc})]}),d.jsxs("div",{className:"feature-card reveal reveal-delay-2",children:[d.jsx("div",{className:"feature-icon",children:d.jsxs("svg",{viewBox:"0 0 24 24",children:[d.jsx("circle",{cx:"12",cy:"12",r:"3"}),d.jsx("path",{d:"M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"})]})}),d.jsx("div",{className:"feature-title",children:g.cardAppTitle}),d.jsx("div",{className:"feature-desc",children:g.cardAppDesc})]}),d.jsxs("div",{className:"feature-card reveal reveal-delay-3",children:[d.jsx("div",{className:"feature-icon",children:d.jsx("svg",{viewBox:"0 0 24 24",children:d.jsx("path",{d:"M22 12h-4l-3 9L9 3l-3 9H2"})})}),d.jsx("div",{className:"feature-title",children:g.cardDesignTitle}),d.jsx("div",{className:"feature-desc",children:g.cardDesignDesc})]}),d.jsxs("div",{className:"feature-card reveal reveal-delay-4",children:[d.jsx("div",{className:"feature-icon",children:d.jsxs("svg",{viewBox:"0 0 24 24",children:[d.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),d.jsx("path",{d:"M3 9h18M9 3v18"})]})}),d.jsx("div",{className:"feature-title",children:g.cardCloudTitle}),d.jsx("div",{className:"feature-desc",children:g.cardCloudDesc})]}),d.jsxs("div",{className:"feature-card reveal reveal-delay-5",children:[d.jsx("div",{className:"feature-icon",children:d.jsxs("svg",{viewBox:"0 0 24 24",children:[d.jsx("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),d.jsx("circle",{cx:"9",cy:"7",r:"4"}),d.jsx("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),d.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]})}),d.jsx("div",{className:"feature-title",children:g.cardApiTitle}),d.jsx("div",{className:"feature-desc",children:g.cardApiDesc})]}),d.jsxs("div",{className:"feature-card reveal reveal-delay-6",children:[d.jsx("div",{className:"feature-icon",children:d.jsx("svg",{viewBox:"0 0 24 24",children:d.jsx("polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"})})}),d.jsx("div",{className:"feature-title",children:g.cardSupportTitle}),d.jsx("div",{className:"feature-desc",children:g.cardSupportDesc})]})]})]})}),d.jsx("section",{className:"section section-research",id:"expertise",children:d.jsxs("div",{className:"section-inner",children:[d.jsxs("div",{className:"research-content",children:[d.jsx("div",{className:"section-label reveal",children:g.researchAreas}),d.jsxs("h2",{className:"section-heading reveal reveal-delay-1",style:{marginBottom:"48px"},children:[g.threePillars," ",d.jsx("span",{className:"thin",children:g.scientificExecution})]}),d.jsxs("div",{className:"research-list",children:[d.jsx("div",{className:"research-item-wrap reveal reveal-delay-2",children:d.jsxs("div",{className:`research-item ${f===1?"active":""}`,onMouseEnter:()=>p(1),onTouchStart:()=>p(1),children:[d.jsx("div",{className:"research-num",children:"01"}),d.jsxs("div",{className:"research-item-content",children:[d.jsx("div",{className:"research-item-title",children:g.pillar1Title}),d.jsx("div",{className:"research-item-desc",children:g.pillar1Desc})]})]})}),d.jsx("div",{className:"research-item-wrap reveal reveal-delay-3",children:d.jsxs("div",{className:`research-item ${f===2?"active":""}`,onMouseEnter:()=>p(2),onTouchStart:()=>p(2),children:[d.jsx("div",{className:"research-num",children:"02"}),d.jsxs("div",{className:"research-item-content",children:[d.jsx("div",{className:"research-item-title",children:g.pillar2Title}),d.jsx("div",{className:"research-item-desc",children:g.pillar2Desc})]})]})}),d.jsx("div",{className:"research-item-wrap reveal reveal-delay-4",children:d.jsxs("div",{className:`research-item ${f===3?"active":""}`,onMouseEnter:()=>p(3),onTouchStart:()=>p(3),children:[d.jsx("div",{className:"research-num",children:"03"}),d.jsxs("div",{className:"research-item-content",children:[d.jsx("div",{className:"research-item-title",children:g.pillar3Title}),d.jsx("div",{className:"research-item-desc",children:g.pillar3Desc})]})]})})]})]}),d.jsx("div",{className:"research-canvas-wrap",children:d.jsx(U1,{activeFormation:f})})]})}),d.jsx("section",{className:"section section-portfolio",id:"work",children:d.jsxs("div",{className:"section-inner",children:[d.jsxs("div",{className:"portfolio-header",children:[d.jsx("div",{className:"section-label reveal",children:g.selectedWork}),d.jsxs("h2",{className:"section-heading reveal reveal-delay-1",children:[g.caseStudies," ",d.jsx("span",{className:"thin",children:g.builtSolutions})]})]}),d.jsxs("div",{className:"portfolio-cards",children:[d.jsx("div",{className:"portfolio-card-wrapper reveal reveal-delay-2",children:d.jsxs("div",{className:"portfolio-card",children:[d.jsxs("div",{className:"portfolio-card-content",children:[d.jsx("div",{className:"portfolio-card-tag",children:m==="en"?"Web Application / AI":m==="uz"?"Veb-ilova / AI":"Веб-приложение / ИИ"}),d.jsx("h3",{className:"portfolio-card-title",children:"HubRecipeCook"}),d.jsx("p",{className:"portfolio-card-desc",children:m==="en"?"A modern culinary recipe platform featuring category filtering, detailed cooking instructions, user favorites, and an integrated AI Chef Assistant that crafts custom recipes based on ingredients currently in your kitchen.":m==="uz"?"Kategoriya filtratsiyasi, batafsil pishirish ko'rsatmalari, sevimli taomlar ro'yxati va oshxonangizdagi masalliqlar asosida shaxsiy retseptlar yaratadigan Sun'iy Intellekt oshpaziga ega zamonaviy pazandachilik platformasi.":"Современная кулинарная платформа с фильтрацией по категориям, подробными инструкциями, избранным и встроенным ИИ-шефом, который создает уникальные рецепты из продуктов в вашем холодильнике."}),d.jsxs("div",{className:"portfolio-card-tech",children:[d.jsx("span",{children:"React"}),d.jsx("span",{children:"Vite"}),d.jsx("span",{children:"AI Chef"}),d.jsx("span",{children:"Glassmorphism"})]}),d.jsx(Ti,{children:d.jsx("a",{href:"https://hubrecipecook.netlify.app",target:"_blank",rel:"noopener noreferrer",className:"btn-primary",children:d.jsxs("span",{className:"btn-content-inner",children:[d.jsxs("span",{className:"btn-slide-item",children:[d.jsx("span",{children:g.visitWebsite}),d.jsx("svg",{className:"btn-arrow",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:d.jsx("path",{d:"M3 8h10M9 4l4 4-4 4"})})]}),d.jsxs("span",{className:"btn-slide-item btn-slide-item-hover",children:[d.jsx("span",{children:g.visitWebsite}),d.jsx("svg",{className:"btn-arrow",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:d.jsx("path",{d:"M3 8h10M9 4l4 4-4 4"})})]})]})})})]}),d.jsx("div",{className:"portfolio-card-image",children:d.jsx("img",{src:"/project_recipe.jpg",alt:"HubRecipeCook Platform",loading:"lazy"})})]})}),d.jsx("div",{className:"portfolio-card-wrapper reveal reveal-delay-3",children:d.jsxs("div",{className:"portfolio-card",children:[d.jsxs("div",{className:"portfolio-card-content",children:[d.jsx("div",{className:"portfolio-card-tag",children:"SaaS Platform"}),d.jsx("h3",{className:"portfolio-card-title",children:"Aether Analytics Suite"}),d.jsx("p",{className:"portfolio-card-desc",children:m==="en"?"Enterprise performance tracking platform processing millions of API events daily. Features custom 3D data visualization, predictive analytics, and automated alerting.":m==="uz"?"Har kuni millionlab API so'rovlarini qayta ishlaydigan korxona samaradorligini kuzatish platformasi. Shaxsiy 3D ma'lumotlar vizualizatsiyasi, prognozli tahlillar va avtomatlashtirilgan ogohlantirishlarni o'z ichiga oladi.":"Корпоративная платформа аналитики, обрабатывающая миллионы API-событий ежедневно. Включает 3D-визуализацию данных, предиктивную аналитику и автооповещения."}),d.jsxs("div",{className:"portfolio-card-tech",children:[d.jsx("span",{children:"React"}),d.jsx("span",{children:"Next.js"}),d.jsx("span",{children:"Three.js"}),d.jsx("span",{children:"Node.js"})]}),d.jsx(Ti,{children:d.jsx("a",{href:"#contact",className:"btn-primary",onClick:w=>{w.preventDefault(),o(!0)},children:d.jsxs("span",{className:"btn-content-inner",children:[d.jsxs("span",{className:"btn-slide-item",children:[d.jsx("span",{children:g.viewCase}),d.jsx("svg",{className:"btn-arrow",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:d.jsx("path",{d:"M3 8h10M9 4l4 4-4 4"})})]}),d.jsxs("span",{className:"btn-slide-item btn-slide-item-hover",children:[d.jsx("span",{children:g.viewCase}),d.jsx("svg",{className:"btn-arrow",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:d.jsx("path",{d:"M3 8h10M9 4l4 4-4 4"})})]})]})})})]}),d.jsx("div",{className:"portfolio-card-image",children:d.jsx("img",{src:"/project_analytics.jpg",alt:"Aether Analytics Suite",loading:"lazy"})})]})}),d.jsx("div",{className:"portfolio-card-wrapper reveal reveal-delay-4",children:d.jsxs("div",{className:"portfolio-card",children:[d.jsxs("div",{className:"portfolio-card-content",children:[d.jsx("div",{className:"portfolio-card-tag",children:"DevOps / Cloud"}),d.jsx("h3",{className:"portfolio-card-title",children:"Nebula Cloud Console"}),d.jsx("p",{className:"portfolio-card-desc",children:m==="en"?"Fully automated multi-region deployment center. Combines real-time global network mesh maps, cluster load indicators, and secure authorization controls.":m==="uz"?"To'liq avtomatlashtirilgan ko'p mintaqali bulutli serverlar markazi. Haqiqiy vaqtdagi global tarmoq xaritalari, yuklama ko'rsatkichlari va xavfsiz avtorizatsiyani birlashtiradi.":"Полностью автоматизированный центр развертывания в нескольких облачных регионах. Объединяет глобальные сетевые карты в реальном времени, датчики нагрузки кластеров и средства контроля безопасности."}),d.jsxs("div",{className:"portfolio-card-tech",children:[d.jsx("span",{children:"Vite"}),d.jsx("span",{children:"AWS"}),d.jsx("span",{children:"Kubernetes"}),d.jsx("span",{children:"GraphQL"})]}),d.jsx(Ti,{children:d.jsx("a",{href:"#contact",className:"btn-primary",onClick:w=>{w.preventDefault(),o(!0)},children:d.jsxs("span",{className:"btn-content-inner",children:[d.jsxs("span",{className:"btn-slide-item",children:[d.jsx("span",{children:g.viewCase}),d.jsx("svg",{className:"btn-arrow",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:d.jsx("path",{d:"M3 8h10M9 4l4 4-4 4"})})]}),d.jsxs("span",{className:"btn-slide-item btn-slide-item-hover",children:[d.jsx("span",{children:g.viewCase}),d.jsx("svg",{className:"btn-arrow",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:d.jsx("path",{d:"M3 8h10M9 4l4 4-4 4"})})]})]})})})]}),d.jsx("div",{className:"portfolio-card-image",children:d.jsx("img",{src:"/project_cloud.jpg",alt:"Nebula Cloud Console",loading:"lazy"})})]})})]})]})}),d.jsxs("section",{className:"section section-numbers",id:"scale",children:[d.jsx(F1,{}),d.jsx("div",{className:"section-inner",children:d.jsxs("div",{className:"numbers-content",children:[d.jsx("div",{className:"section-label reveal",children:g.byNumbers}),d.jsxs("h2",{className:"section-heading reveal reveal-delay-1",children:[g.scaleSpeaks," ",d.jsx("span",{className:"thin",children:g.itself})]}),d.jsxs("div",{className:"numbers-grid",children:[d.jsxs("div",{className:"number-card reveal reveal-delay-2",children:[d.jsx("div",{className:"number-val",children:d.jsx(Ao,{count:150,suffix:"+"})}),d.jsx("div",{className:"number-divider"}),d.jsx("div",{className:"number-label",children:g.numCardProjects})]}),d.jsxs("div",{className:"number-card reveal reveal-delay-3",children:[d.jsx("div",{className:"number-val",children:d.jsx(Ao,{count:99,suffix:".9%"})}),d.jsx("div",{className:"number-divider"}),d.jsx("div",{className:"number-label",children:g.numCardUptime})]}),d.jsxs("div",{className:"number-card reveal reveal-delay-4",children:[d.jsx("div",{className:"number-val",children:d.jsx(Ao,{count:45,suffix:"+"})}),d.jsx("div",{className:"number-divider"}),d.jsx("div",{className:"number-label",children:g.numCardEngineers})]}),d.jsxs("div",{className:"number-card reveal reveal-delay-5",children:[d.jsx("div",{className:"number-val",children:d.jsx(Ao,{count:10,suffix:"x"})}),d.jsx("div",{className:"number-divider"}),d.jsx("div",{className:"number-label",children:g.numCardSpeed})]})]})]})})]}),d.jsx("section",{className:"section section-cta",id:"contact",children:d.jsxs("div",{className:"section-inner",children:[d.jsx("div",{className:"section-label reveal",children:g.getInvolved}),d.jsxs("h2",{className:"cta-heading reveal reveal-delay-1",children:[g.nextBreakthrough," ",d.jsx("span",{className:"thin",children:g.startsYou})]}),d.jsx("p",{className:"cta-sub reveal reveal-delay-2",children:g.ctaDesc}),d.jsxs("div",{className:"cta-actions reveal reveal-delay-3",children:[d.jsx(Ti,{children:d.jsx("button",{className:"btn-primary",onClick:()=>o(!0),children:d.jsxs("span",{className:"btn-content-inner",children:[d.jsxs("span",{className:"btn-slide-item",children:[d.jsx("span",{children:g.startProject}),d.jsx("svg",{className:"btn-arrow",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:d.jsx("path",{d:"M3 8h10M9 4l4 4-4 4"})})]}),d.jsxs("span",{className:"btn-slide-item btn-slide-item-hover",children:[d.jsx("span",{children:g.startProject}),d.jsx("svg",{className:"btn-arrow",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:d.jsx("path",{d:"M3 8h10M9 4l4 4-4 4"})})]})]})})}),d.jsx(Ti,{children:d.jsx("button",{className:"btn-secondary",onClick:()=>o(!0),children:d.jsxs("span",{className:"btn-content-inner",children:[d.jsxs("span",{className:"btn-slide-item",children:[d.jsx("span",{children:m==="en"?"Get in Touch":m==="uz"?"Bog'lanish":"Связаться"}),d.jsx("svg",{className:"btn-arrow",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:d.jsx("path",{d:"M3 8h10M9 4l4 4-4 4"})})]}),d.jsxs("span",{className:"btn-slide-item btn-slide-item-hover",children:[d.jsx("span",{children:m==="en"?"Get in Touch":m==="uz"?"Bog'lanish":"Связаться"}),d.jsx("svg",{className:"btn-arrow",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:d.jsx("path",{d:"M3 8h10M9 4l4 4-4 4"})})]})]})})})]})]})}),d.jsx("footer",{className:"footer",id:"about",children:d.jsxs("div",{className:"section-inner",style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%"},children:[d.jsxs("div",{className:"footer-left",children:[d.jsx("img",{className:"footer-img",src:"/logo.jpg",alt:"QIX Logo"}),d.jsx("span",{className:"footer-brand",style:{marginLeft:"10px"},children:"QIX Technologies"})]}),d.jsxs("div",{className:"footer-right",children:["© 2026 QIX Technologies Inc. ",g.footerCopy]})]})}),d.jsx(O1,{isOpen:t,onClose:()=>e(!1)}),d.jsx(z1,{isOpen:r,onClose:()=>s(!1)}),d.jsx(fy,{isOpen:a,onClose:()=>o(!1)}),d.jsx("div",{ref:y,className:"custom-cursor-dot"}),d.jsx("div",{ref:_,className:"custom-cursor-circle"})]})}$c.createRoot(document.getElementById("root")).render(d.jsx(rm.StrictMode,{children:d.jsx(B1,{})}));
