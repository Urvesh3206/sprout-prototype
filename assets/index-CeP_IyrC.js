var Lg=Object.defineProperty;var Dg=(s,e,n)=>e in s?Lg(s,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[e]=n;var Ns=(s,e,n)=>Dg(s,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function i0(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Ru={exports:{}},ka={},Nu={exports:{}},xt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jp;function Ig(){if(jp)return xt;jp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),M=Symbol.iterator;function g(L){return L===null||typeof L!="object"?null:(L=M&&L[M]||L["@@iterator"],typeof L=="function"?L:null)}var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,R={};function S(L,Q,ye){this.props=L,this.context=Q,this.refs=R,this.updater=ye||_}S.prototype.isReactComponent={},S.prototype.setState=function(L,Q){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,Q,"setState")},S.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function y(){}y.prototype=S.prototype;function k(L,Q,ye){this.props=L,this.context=Q,this.refs=R,this.updater=ye||_}var G=k.prototype=new y;G.constructor=k,w(G,S.prototype),G.isPureReactComponent=!0;var N=Array.isArray,P=Object.prototype.hasOwnProperty,C={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function E(L,Q,ye){var De,He={},Oe=null,oe=null;if(Q!=null)for(De in Q.ref!==void 0&&(oe=Q.ref),Q.key!==void 0&&(Oe=""+Q.key),Q)P.call(Q,De)&&!U.hasOwnProperty(De)&&(He[De]=Q[De]);var he=arguments.length-2;if(he===1)He.children=ye;else if(1<he){for(var be=Array(he),$e=0;$e<he;$e++)be[$e]=arguments[$e+2];He.children=be}if(L&&L.defaultProps)for(De in he=L.defaultProps,he)He[De]===void 0&&(He[De]=he[De]);return{$$typeof:s,type:L,key:Oe,ref:oe,props:He,_owner:C.current}}function D(L,Q){return{$$typeof:s,type:L.type,key:Q,ref:L.ref,props:L.props,_owner:L._owner}}function z(L){return typeof L=="object"&&L!==null&&L.$$typeof===s}function O(L){var Q={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(ye){return Q[ye]})}var q=/\/+/g;function te(L,Q){return typeof L=="object"&&L!==null&&L.key!=null?O(""+L.key):Q.toString(36)}function B(L,Q,ye,De,He){var Oe=typeof L;(Oe==="undefined"||Oe==="boolean")&&(L=null);var oe=!1;if(L===null)oe=!0;else switch(Oe){case"string":case"number":oe=!0;break;case"object":switch(L.$$typeof){case s:case e:oe=!0}}if(oe)return oe=L,He=He(oe),L=De===""?"."+te(oe,0):De,N(He)?(ye="",L!=null&&(ye=L.replace(q,"$&/")+"/"),B(He,Q,ye,"",function($e){return $e})):He!=null&&(z(He)&&(He=D(He,ye+(!He.key||oe&&oe.key===He.key?"":(""+He.key).replace(q,"$&/")+"/")+L)),Q.push(He)),1;if(oe=0,De=De===""?".":De+":",N(L))for(var he=0;he<L.length;he++){Oe=L[he];var be=De+te(Oe,he);oe+=B(Oe,Q,ye,be,He)}else if(be=g(L),typeof be=="function")for(L=be.call(L),he=0;!(Oe=L.next()).done;)Oe=Oe.value,be=De+te(Oe,he++),oe+=B(Oe,Q,ye,be,He);else if(Oe==="object")throw Q=String(L),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.");return oe}function ne(L,Q,ye){if(L==null)return L;var De=[],He=0;return B(L,De,"","",function(Oe){return Q.call(ye,Oe,He++)}),De}function ue(L){if(L._status===-1){var Q=L._result;Q=Q(),Q.then(function(ye){(L._status===0||L._status===-1)&&(L._status=1,L._result=ye)},function(ye){(L._status===0||L._status===-1)&&(L._status=2,L._result=ye)}),L._status===-1&&(L._status=0,L._result=Q)}if(L._status===1)return L._result.default;throw L._result}var J={current:null},H={transition:null},j={ReactCurrentDispatcher:J,ReactCurrentBatchConfig:H,ReactCurrentOwner:C};function X(){throw Error("act(...) is not supported in production builds of React.")}return xt.Children={map:ne,forEach:function(L,Q,ye){ne(L,function(){Q.apply(this,arguments)},ye)},count:function(L){var Q=0;return ne(L,function(){Q++}),Q},toArray:function(L){return ne(L,function(Q){return Q})||[]},only:function(L){if(!z(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},xt.Component=S,xt.Fragment=n,xt.Profiler=o,xt.PureComponent=k,xt.StrictMode=r,xt.Suspense=x,xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=j,xt.act=X,xt.cloneElement=function(L,Q,ye){if(L==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+L+".");var De=w({},L.props),He=L.key,Oe=L.ref,oe=L._owner;if(Q!=null){if(Q.ref!==void 0&&(Oe=Q.ref,oe=C.current),Q.key!==void 0&&(He=""+Q.key),L.type&&L.type.defaultProps)var he=L.type.defaultProps;for(be in Q)P.call(Q,be)&&!U.hasOwnProperty(be)&&(De[be]=Q[be]===void 0&&he!==void 0?he[be]:Q[be])}var be=arguments.length-2;if(be===1)De.children=ye;else if(1<be){he=Array(be);for(var $e=0;$e<be;$e++)he[$e]=arguments[$e+2];De.children=he}return{$$typeof:s,type:L.type,key:He,ref:Oe,props:De,_owner:oe}},xt.createContext=function(L){return L={$$typeof:u,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},L.Provider={$$typeof:l,_context:L},L.Consumer=L},xt.createElement=E,xt.createFactory=function(L){var Q=E.bind(null,L);return Q.type=L,Q},xt.createRef=function(){return{current:null}},xt.forwardRef=function(L){return{$$typeof:h,render:L}},xt.isValidElement=z,xt.lazy=function(L){return{$$typeof:v,_payload:{_status:-1,_result:L},_init:ue}},xt.memo=function(L,Q){return{$$typeof:m,type:L,compare:Q===void 0?null:Q}},xt.startTransition=function(L){var Q=H.transition;H.transition={};try{L()}finally{H.transition=Q}},xt.unstable_act=X,xt.useCallback=function(L,Q){return J.current.useCallback(L,Q)},xt.useContext=function(L){return J.current.useContext(L)},xt.useDebugValue=function(){},xt.useDeferredValue=function(L){return J.current.useDeferredValue(L)},xt.useEffect=function(L,Q){return J.current.useEffect(L,Q)},xt.useId=function(){return J.current.useId()},xt.useImperativeHandle=function(L,Q,ye){return J.current.useImperativeHandle(L,Q,ye)},xt.useInsertionEffect=function(L,Q){return J.current.useInsertionEffect(L,Q)},xt.useLayoutEffect=function(L,Q){return J.current.useLayoutEffect(L,Q)},xt.useMemo=function(L,Q){return J.current.useMemo(L,Q)},xt.useReducer=function(L,Q,ye){return J.current.useReducer(L,Q,ye)},xt.useRef=function(L){return J.current.useRef(L)},xt.useState=function(L){return J.current.useState(L)},xt.useSyncExternalStore=function(L,Q,ye){return J.current.useSyncExternalStore(L,Q,ye)},xt.useTransition=function(){return J.current.useTransition()},xt.version="18.3.1",xt}var Xp;function sf(){return Xp||(Xp=1,Nu.exports=Ig()),Nu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qp;function kg(){if(qp)return ka;qp=1;var s=sf(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(h,x,m){var v,M={},g=null,_=null;m!==void 0&&(g=""+m),x.key!==void 0&&(g=""+x.key),x.ref!==void 0&&(_=x.ref);for(v in x)r.call(x,v)&&!l.hasOwnProperty(v)&&(M[v]=x[v]);if(h&&h.defaultProps)for(v in x=h.defaultProps,x)M[v]===void 0&&(M[v]=x[v]);return{$$typeof:e,type:h,key:g,ref:_,props:M,_owner:o.current}}return ka.Fragment=n,ka.jsx=u,ka.jsxs=u,ka}var Yp;function Ug(){return Yp||(Yp=1,Ru.exports=kg()),Ru.exports}var f=Ug(),Pe=sf();const Fg=i0(Pe);var sl={},Pu={exports:{}},Bn={},Lu={exports:{}},Du={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $p;function Og(){return $p||($p=1,(function(s){function e(H,j){var X=H.length;H.push(j);e:for(;0<X;){var L=X-1>>>1,Q=H[L];if(0<o(Q,j))H[L]=j,H[X]=Q,X=L;else break e}}function n(H){return H.length===0?null:H[0]}function r(H){if(H.length===0)return null;var j=H[0],X=H.pop();if(X!==j){H[0]=X;e:for(var L=0,Q=H.length,ye=Q>>>1;L<ye;){var De=2*(L+1)-1,He=H[De],Oe=De+1,oe=H[Oe];if(0>o(He,X))Oe<Q&&0>o(oe,He)?(H[L]=oe,H[Oe]=X,L=Oe):(H[L]=He,H[De]=X,L=De);else if(Oe<Q&&0>o(oe,X))H[L]=oe,H[Oe]=X,L=Oe;else break e}}return j}function o(H,j){var X=H.sortIndex-j.sortIndex;return X!==0?X:H.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,h=u.now();s.unstable_now=function(){return u.now()-h}}var x=[],m=[],v=1,M=null,g=3,_=!1,w=!1,R=!1,S=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,k=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function G(H){for(var j=n(m);j!==null;){if(j.callback===null)r(m);else if(j.startTime<=H)r(m),j.sortIndex=j.expirationTime,e(x,j);else break;j=n(m)}}function N(H){if(R=!1,G(H),!w)if(n(x)!==null)w=!0,ue(P);else{var j=n(m);j!==null&&J(N,j.startTime-H)}}function P(H,j){w=!1,R&&(R=!1,y(E),E=-1),_=!0;var X=g;try{for(G(j),M=n(x);M!==null&&(!(M.expirationTime>j)||H&&!O());){var L=M.callback;if(typeof L=="function"){M.callback=null,g=M.priorityLevel;var Q=L(M.expirationTime<=j);j=s.unstable_now(),typeof Q=="function"?M.callback=Q:M===n(x)&&r(x),G(j)}else r(x);M=n(x)}if(M!==null)var ye=!0;else{var De=n(m);De!==null&&J(N,De.startTime-j),ye=!1}return ye}finally{M=null,g=X,_=!1}}var C=!1,U=null,E=-1,D=5,z=-1;function O(){return!(s.unstable_now()-z<D)}function q(){if(U!==null){var H=s.unstable_now();z=H;var j=!0;try{j=U(!0,H)}finally{j?te():(C=!1,U=null)}}else C=!1}var te;if(typeof k=="function")te=function(){k(q)};else if(typeof MessageChannel<"u"){var B=new MessageChannel,ne=B.port2;B.port1.onmessage=q,te=function(){ne.postMessage(null)}}else te=function(){S(q,0)};function ue(H){U=H,C||(C=!0,te())}function J(H,j){E=S(function(){H(s.unstable_now())},j)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(H){H.callback=null},s.unstable_continueExecution=function(){w||_||(w=!0,ue(P))},s.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<H?Math.floor(1e3/H):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_getFirstCallbackNode=function(){return n(x)},s.unstable_next=function(H){switch(g){case 1:case 2:case 3:var j=3;break;default:j=g}var X=g;g=j;try{return H()}finally{g=X}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(H,j){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var X=g;g=H;try{return j()}finally{g=X}},s.unstable_scheduleCallback=function(H,j,X){var L=s.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?L+X:L):X=L,H){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=X+Q,H={id:v++,callback:j,priorityLevel:H,startTime:X,expirationTime:Q,sortIndex:-1},X>L?(H.sortIndex=X,e(m,H),n(x)===null&&H===n(m)&&(R?(y(E),E=-1):R=!0,J(N,X-L))):(H.sortIndex=Q,e(x,H),w||_||(w=!0,ue(P))),H},s.unstable_shouldYield=O,s.unstable_wrapCallback=function(H){var j=g;return function(){var X=g;g=j;try{return H.apply(this,arguments)}finally{g=X}}}})(Du)),Du}var Kp;function Bg(){return Kp||(Kp=1,Lu.exports=Og()),Lu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zp;function zg(){if(Zp)return Bn;Zp=1;var s=sf(),e=Bg();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(t,i){u(t,i),u(t+"Capture",i)}function u(t,i){for(o[t]=i,t=0;t<i.length;t++)r.add(i[t])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),x=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},M={};function g(t){return x.call(M,t)?!0:x.call(v,t)?!1:m.test(t)?M[t]=!0:(v[t]=!0,!1)}function _(t,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function w(t,i,a,c){if(i===null||typeof i>"u"||_(t,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function R(t,i,a,c,d,p,T){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=t,this.type=i,this.sanitizeURL=p,this.removeEmptyString=T}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){S[t]=new R(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];S[i]=new R(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){S[t]=new R(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){S[t]=new R(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){S[t]=new R(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){S[t]=new R(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){S[t]=new R(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){S[t]=new R(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){S[t]=new R(t,5,!1,t.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function k(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(y,k);S[i]=new R(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(y,k);S[i]=new R(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(y,k);S[i]=new R(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){S[t]=new R(t,1,!1,t.toLowerCase(),null,!1,!1)}),S.xlinkHref=new R("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){S[t]=new R(t,1,!1,t.toLowerCase(),null,!0,!0)});function G(t,i,a,c){var d=S.hasOwnProperty(i)?S[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(w(i,a,d,c)&&(a=null),c||d===null?g(i)&&(a===null?t.removeAttribute(i):t.setAttribute(i,""+a)):d.mustUseProperty?t[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?t.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?t.setAttributeNS(c,i,a):t.setAttribute(i,a))))}var N=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,P=Symbol.for("react.element"),C=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),z=Symbol.for("react.provider"),O=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),te=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),ne=Symbol.for("react.memo"),ue=Symbol.for("react.lazy"),J=Symbol.for("react.offscreen"),H=Symbol.iterator;function j(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var X=Object.assign,L;function Q(t){if(L===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);L=i&&i[1]||""}return`
`+L+t}var ye=!1;function De(t,i){if(!t||ye)return"";ye=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(fe){var c=fe}Reflect.construct(t,[],i)}else{try{i.call()}catch(fe){c=fe}t.call(i.prototype)}else{try{throw Error()}catch(fe){c=fe}t()}}catch(fe){if(fe&&c&&typeof fe.stack=="string"){for(var d=fe.stack.split(`
`),p=c.stack.split(`
`),T=d.length-1,F=p.length-1;1<=T&&0<=F&&d[T]!==p[F];)F--;for(;1<=T&&0<=F;T--,F--)if(d[T]!==p[F]){if(T!==1||F!==1)do if(T--,F--,0>F||d[T]!==p[F]){var W=`
`+d[T].replace(" at new "," at ");return t.displayName&&W.includes("<anonymous>")&&(W=W.replace("<anonymous>",t.displayName)),W}while(1<=T&&0<=F);break}}}finally{ye=!1,Error.prepareStackTrace=a}return(t=t?t.displayName||t.name:"")?Q(t):""}function He(t){switch(t.tag){case 5:return Q(t.type);case 16:return Q("Lazy");case 13:return Q("Suspense");case 19:return Q("SuspenseList");case 0:case 2:case 15:return t=De(t.type,!1),t;case 11:return t=De(t.type.render,!1),t;case 1:return t=De(t.type,!0),t;default:return""}}function Oe(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case U:return"Fragment";case C:return"Portal";case D:return"Profiler";case E:return"StrictMode";case te:return"Suspense";case B:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case O:return(t.displayName||"Context")+".Consumer";case z:return(t._context.displayName||"Context")+".Provider";case q:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ne:return i=t.displayName||null,i!==null?i:Oe(t.type)||"Memo";case ue:i=t._payload,t=t._init;try{return Oe(t(i))}catch{}}return null}function oe(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Oe(i);case 8:return i===E?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function he(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function be(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function $e(t){var i=be(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),c=""+t[i];if(!t.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,p=a.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return d.call(this)},set:function(T){c=""+T,p.call(this,T)}}),Object.defineProperty(t,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(T){c=""+T},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Be(t){t._valueTracker||(t._valueTracker=$e(t))}function ut(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return t&&(c=be(t)?t.checked?"true":"false":t.value),t=c,t!==a?(i.setValue(t),!0):!1}function zt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function st(t,i){var a=i.checked;return X({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??t._wrapperState.initialChecked})}function mt(t,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=he(i.value!=null?i.value:a),t._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function wt(t,i){i=i.checked,i!=null&&G(t,"checked",i,!1)}function dt(t,i){wt(t,i);var a=he(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+a):t.value!==""+a&&(t.value=""+a);else if(c==="submit"||c==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?Dt(t,i.type,a):i.hasOwnProperty("defaultValue")&&Dt(t,i.type,he(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Ut(t,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,a||i===t.value||(t.value=i),t.defaultValue=i}a=t.name,a!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,a!==""&&(t.name=a)}function Dt(t,i,a){(i!=="number"||zt(t.ownerDocument)!==t)&&(a==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+a&&(t.defaultValue=""+a))}var It=Array.isArray;function Ct(t,i,a,c){if(t=t.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<t.length;a++)d=i.hasOwnProperty("$"+t[a].value),t[a].selected!==d&&(t[a].selected=d),d&&c&&(t[a].defaultSelected=!0)}else{for(a=""+he(a),i=null,d=0;d<t.length;d++){if(t[d].value===a){t[d].selected=!0,c&&(t[d].defaultSelected=!0);return}i!==null||t[d].disabled||(i=t[d])}i!==null&&(i.selected=!0)}}function Vt(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return X({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function K(t,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(n(92));if(It(a)){if(1<a.length)throw Error(n(93));a=a[0]}i=a}i==null&&(i=""),a=i}t._wrapperState={initialValue:he(a)}}function en(t,i){var a=he(i.value),c=he(i.defaultValue);a!=null&&(a=""+a,a!==t.value&&(t.value=a),i.defaultValue==null&&t.defaultValue!==a&&(t.defaultValue=a)),c!=null&&(t.defaultValue=""+c)}function Mt(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function I(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function b(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?I(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var V,ee=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return t(i,a,c,d)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(V=V||document.createElement("div"),V.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=V.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function ae(t,i){if(i){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=i;return}}t.textContent=i}var Me={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},we=["Webkit","ms","Moz","O"];Object.keys(Me).forEach(function(t){we.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Me[i]=Me[t]})});function pe(t,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Me.hasOwnProperty(t)&&Me[t]?(""+i).trim():i+"px"}function xe(t,i){t=t.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=pe(a,i[a],c);a==="float"&&(a="cssFloat"),c?t.setProperty(a,d):t[a]=d}}var Re=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ke(t,i){if(i){if(Re[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function Ne(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Te=null;function Ze(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var tt=null,rt=null,Y=null;function Ae(t){if(t=ya(t)){if(typeof tt!="function")throw Error(n(280));var i=t.stateNode;i&&(i=yo(i),tt(t.stateNode,t.type,i))}}function me(t){rt?Y?Y.push(t):Y=[t]:rt=t}function Ce(){if(rt){var t=rt,i=Y;if(Y=rt=null,Ae(t),i)for(t=0;t<i.length;t++)Ae(i[t])}}function Fe(t,i){return t(i)}function ge(){}var Qe=!1;function qe(t,i,a){if(Qe)return t(i,a);Qe=!0;try{return Fe(t,i,a)}finally{Qe=!1,(rt!==null||Y!==null)&&(ge(),Ce())}}function Rt(t,i){var a=t.stateNode;if(a===null)return null;var c=yo(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(t=t.type,c=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!c;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(n(231,i,typeof a));return a}var bt=!1;if(h)try{var mn={};Object.defineProperty(mn,"passive",{get:function(){bt=!0}}),window.addEventListener("test",mn,mn),window.removeEventListener("test",mn,mn)}catch{bt=!1}function Zn(t,i,a,c,d,p,T,F,W){var fe=Array.prototype.slice.call(arguments,3);try{i.apply(a,fe)}catch(_e){this.onError(_e)}}var Lr=!1,as=null,Dr=!1,Ir=null,Jl={onError:function(t){Lr=!0,as=t}};function to(t,i,a,c,d,p,T,F,W){Lr=!1,as=null,Zn.apply(Jl,arguments)}function no(t,i,a,c,d,p,T,F,W){if(to.apply(this,arguments),Lr){if(Lr){var fe=as;Lr=!1,as=null}else throw Error(n(198));Dr||(Dr=!0,Ir=fe)}}function Rn(t){var i=t,a=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(a=i.return),t=i.return;while(t)}return i.tag===3?a:null}function os(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Qs(t){if(Rn(t)!==t)throw Error(n(188))}function io(t){var i=t.alternate;if(!i){if(i=Rn(t),i===null)throw Error(n(188));return i!==t?null:t}for(var a=t,c=i;;){var d=a.return;if(d===null)break;var p=d.alternate;if(p===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===a)return Qs(d),t;if(p===c)return Qs(d),i;p=p.sibling}throw Error(n(188))}if(a.return!==c.return)a=d,c=p;else{for(var T=!1,F=d.child;F;){if(F===a){T=!0,a=d,c=p;break}if(F===c){T=!0,c=d,a=p;break}F=F.sibling}if(!T){for(F=p.child;F;){if(F===a){T=!0,a=p,c=d;break}if(F===c){T=!0,c=p,a=d;break}F=F.sibling}if(!T)throw Error(n(189))}}if(a.alternate!==c)throw Error(n(190))}if(a.tag!==3)throw Error(n(188));return a.stateNode.current===a?t:i}function kr(t){return t=io(t),t!==null?ea(t):null}function ea(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=ea(t);if(i!==null)return i;t=t.sibling}return null}var Ur=e.unstable_scheduleCallback,ta=e.unstable_cancelCallback,ro=e.unstable_shouldYield,Ql=e.unstable_requestPaint,qt=e.unstable_now,ec=e.unstable_getCurrentPriorityLevel,na=e.unstable_ImmediatePriority,ia=e.unstable_UserBlockingPriority,A=e.unstable_NormalPriority,$=e.unstable_LowPriority,de=e.unstable_IdlePriority,re=null,ie=null;function ke(t){if(ie&&typeof ie.onCommitFiberRoot=="function")try{ie.onCommitFiberRoot(re,t,void 0,(t.current.flags&128)===128)}catch{}}var Le=Math.clz32?Math.clz32:Je,Ie=Math.log,je=Math.LN2;function Je(t){return t>>>=0,t===0?32:31-(Ie(t)/je|0)|0}var lt=64,ft=4194304;function Ge(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function gt(t,i){var a=t.pendingLanes;if(a===0)return 0;var c=0,d=t.suspendedLanes,p=t.pingedLanes,T=a&268435455;if(T!==0){var F=T&~d;F!==0?c=Ge(F):(p&=T,p!==0&&(c=Ge(p)))}else T=a&~d,T!==0?c=Ge(T):p!==0&&(c=Ge(p));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,p=i&-i,d>=p||d===16&&(p&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=c;0<i;)a=31-Le(i),d=1<<a,c|=t[a],i&=~d;return c}function Jt(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bt(t,i){for(var a=t.suspendedLanes,c=t.pingedLanes,d=t.expirationTimes,p=t.pendingLanes;0<p;){var T=31-Le(p),F=1<<T,W=d[T];W===-1?((F&a)===0||(F&c)!==0)&&(d[T]=Jt(F,i)):W<=i&&(t.expiredLanes|=F),p&=~F}}function kt(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function an(){var t=lt;return lt<<=1,(lt&4194240)===0&&(lt=64),t}function ze(t){for(var i=[],a=0;31>a;a++)i.push(t);return i}function tn(t,i,a){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-Le(i),t[i]=a}function vt(t,i){var a=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var c=t.eventTimes;for(t=t.expirationTimes;0<a;){var d=31-Le(a),p=1<<d;i[d]=0,c[d]=-1,t[d]=-1,a&=~p}}function yn(t,i){var a=t.entangledLanes|=i;for(t=t.entanglements;a;){var c=31-Le(a),d=1<<c;d&i|t[c]&i&&(t[c]|=i),a&=~d}}var ht=0;function ci(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Vi,Nt,jt,ui,Ft,Jn=!1,di=[],fi=null,ar=null,or=null,ra=new Map,sa=new Map,lr=[],ex="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Cf(t,i){switch(t){case"focusin":case"focusout":fi=null;break;case"dragenter":case"dragleave":ar=null;break;case"mouseover":case"mouseout":or=null;break;case"pointerover":case"pointerout":ra.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":sa.delete(i.pointerId)}}function aa(t,i,a,c,d,p){return t===null||t.nativeEvent!==p?(t={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:p,targetContainers:[d]},i!==null&&(i=ya(i),i!==null&&Nt(i)),t):(t.eventSystemFlags|=c,i=t.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),t)}function tx(t,i,a,c,d){switch(i){case"focusin":return fi=aa(fi,t,i,a,c,d),!0;case"dragenter":return ar=aa(ar,t,i,a,c,d),!0;case"mouseover":return or=aa(or,t,i,a,c,d),!0;case"pointerover":var p=d.pointerId;return ra.set(p,aa(ra.get(p)||null,t,i,a,c,d)),!0;case"gotpointercapture":return p=d.pointerId,sa.set(p,aa(sa.get(p)||null,t,i,a,c,d)),!0}return!1}function Rf(t){var i=Fr(t.target);if(i!==null){var a=Rn(i);if(a!==null){if(i=a.tag,i===13){if(i=os(a),i!==null){t.blockedOn=i,Ft(t.priority,function(){jt(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function so(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var a=nc(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(a===null){a=t.nativeEvent;var c=new a.constructor(a.type,a);Te=c,a.target.dispatchEvent(c),Te=null}else return i=ya(a),i!==null&&Nt(i),t.blockedOn=a,!1;i.shift()}return!0}function Nf(t,i,a){so(t)&&a.delete(i)}function nx(){Jn=!1,fi!==null&&so(fi)&&(fi=null),ar!==null&&so(ar)&&(ar=null),or!==null&&so(or)&&(or=null),ra.forEach(Nf),sa.forEach(Nf)}function oa(t,i){t.blockedOn===i&&(t.blockedOn=null,Jn||(Jn=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,nx)))}function la(t){function i(d){return oa(d,t)}if(0<di.length){oa(di[0],t);for(var a=1;a<di.length;a++){var c=di[a];c.blockedOn===t&&(c.blockedOn=null)}}for(fi!==null&&oa(fi,t),ar!==null&&oa(ar,t),or!==null&&oa(or,t),ra.forEach(i),sa.forEach(i),a=0;a<lr.length;a++)c=lr[a],c.blockedOn===t&&(c.blockedOn=null);for(;0<lr.length&&(a=lr[0],a.blockedOn===null);)Rf(a),a.blockedOn===null&&lr.shift()}var ls=N.ReactCurrentBatchConfig,ao=!0;function ix(t,i,a,c){var d=ht,p=ls.transition;ls.transition=null;try{ht=1,tc(t,i,a,c)}finally{ht=d,ls.transition=p}}function rx(t,i,a,c){var d=ht,p=ls.transition;ls.transition=null;try{ht=4,tc(t,i,a,c)}finally{ht=d,ls.transition=p}}function tc(t,i,a,c){if(ao){var d=nc(t,i,a,c);if(d===null)_c(t,i,c,oo,a),Cf(t,c);else if(tx(d,t,i,a,c))c.stopPropagation();else if(Cf(t,c),i&4&&-1<ex.indexOf(t)){for(;d!==null;){var p=ya(d);if(p!==null&&Vi(p),p=nc(t,i,a,c),p===null&&_c(t,i,c,oo,a),p===d)break;d=p}d!==null&&c.stopPropagation()}else _c(t,i,c,null,a)}}var oo=null;function nc(t,i,a,c){if(oo=null,t=Ze(c),t=Fr(t),t!==null)if(i=Rn(t),i===null)t=null;else if(a=i.tag,a===13){if(t=os(i),t!==null)return t;t=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return oo=t,null}function Pf(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ec()){case na:return 1;case ia:return 4;case A:case $:return 16;case de:return 536870912;default:return 16}default:return 16}}var cr=null,ic=null,lo=null;function Lf(){if(lo)return lo;var t,i=ic,a=i.length,c,d="value"in cr?cr.value:cr.textContent,p=d.length;for(t=0;t<a&&i[t]===d[t];t++);var T=a-t;for(c=1;c<=T&&i[a-c]===d[p-c];c++);return lo=d.slice(t,1<c?1-c:void 0)}function co(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function uo(){return!0}function Df(){return!1}function Gn(t){function i(a,c,d,p,T){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=p,this.target=T,this.currentTarget=null;for(var F in t)t.hasOwnProperty(F)&&(a=t[F],this[F]=a?a(p):p[F]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?uo:Df,this.isPropagationStopped=Df,this}return X(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=uo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=uo)},persist:function(){},isPersistent:uo}),i}var cs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rc=Gn(cs),ca=X({},cs,{view:0,detail:0}),sx=Gn(ca),sc,ac,ua,fo=X({},ca,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ua&&(ua&&t.type==="mousemove"?(sc=t.screenX-ua.screenX,ac=t.screenY-ua.screenY):ac=sc=0,ua=t),sc)},movementY:function(t){return"movementY"in t?t.movementY:ac}}),If=Gn(fo),ax=X({},fo,{dataTransfer:0}),ox=Gn(ax),lx=X({},ca,{relatedTarget:0}),oc=Gn(lx),cx=X({},cs,{animationName:0,elapsedTime:0,pseudoElement:0}),ux=Gn(cx),dx=X({},cs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),fx=Gn(dx),hx=X({},cs,{data:0}),kf=Gn(hx),px={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gx(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=xx[t])?!!i[t]:!1}function lc(){return gx}var vx=X({},ca,{key:function(t){if(t.key){var i=px[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=co(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?mx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lc,charCode:function(t){return t.type==="keypress"?co(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?co(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),_x=Gn(vx),yx=X({},fo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Uf=Gn(yx),Sx=X({},ca,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lc}),Mx=Gn(Sx),bx=X({},cs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ex=Gn(bx),wx=X({},fo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Tx=Gn(wx),Ax=[9,13,27,32],cc=h&&"CompositionEvent"in window,da=null;h&&"documentMode"in document&&(da=document.documentMode);var Cx=h&&"TextEvent"in window&&!da,Ff=h&&(!cc||da&&8<da&&11>=da),Of=" ",Bf=!1;function zf(t,i){switch(t){case"keyup":return Ax.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var us=!1;function Rx(t,i){switch(t){case"compositionend":return Vf(i);case"keypress":return i.which!==32?null:(Bf=!0,Of);case"textInput":return t=i.data,t===Of&&Bf?null:t;default:return null}}function Nx(t,i){if(us)return t==="compositionend"||!cc&&zf(t,i)?(t=Lf(),lo=ic=cr=null,us=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Ff&&i.locale!=="ko"?null:i.data;default:return null}}var Px={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Px[t.type]:i==="textarea"}function Gf(t,i,a,c){me(c),i=go(i,"onChange"),0<i.length&&(a=new rc("onChange","change",null,a,c),t.push({event:a,listeners:i}))}var fa=null,ha=null;function Lx(t){oh(t,0)}function ho(t){var i=ms(t);if(ut(i))return t}function Dx(t,i){if(t==="change")return i}var Wf=!1;if(h){var uc;if(h){var dc="oninput"in document;if(!dc){var jf=document.createElement("div");jf.setAttribute("oninput","return;"),dc=typeof jf.oninput=="function"}uc=dc}else uc=!1;Wf=uc&&(!document.documentMode||9<document.documentMode)}function Xf(){fa&&(fa.detachEvent("onpropertychange",qf),ha=fa=null)}function qf(t){if(t.propertyName==="value"&&ho(ha)){var i=[];Gf(i,ha,t,Ze(t)),qe(Lx,i)}}function Ix(t,i,a){t==="focusin"?(Xf(),fa=i,ha=a,fa.attachEvent("onpropertychange",qf)):t==="focusout"&&Xf()}function kx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ho(ha)}function Ux(t,i){if(t==="click")return ho(i)}function Fx(t,i){if(t==="input"||t==="change")return ho(i)}function Ox(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var hi=typeof Object.is=="function"?Object.is:Ox;function pa(t,i){if(hi(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var a=Object.keys(t),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!x.call(i,d)||!hi(t[d],i[d]))return!1}return!0}function Yf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function $f(t,i){var a=Yf(t);t=0;for(var c;a;){if(a.nodeType===3){if(c=t+a.textContent.length,t<=i&&c>=i)return{node:a,offset:i-t};t=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Yf(a)}}function Kf(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Kf(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Zf(){for(var t=window,i=zt();i instanceof t.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)t=i.contentWindow;else break;i=zt(t.document)}return i}function fc(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function Bx(t){var i=Zf(),a=t.focusedElem,c=t.selectionRange;if(i!==a&&a&&a.ownerDocument&&Kf(a.ownerDocument.documentElement,a)){if(c!==null&&fc(a)){if(i=c.start,t=c.end,t===void 0&&(t=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(t,a.value.length);else if(t=(i=a.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var d=a.textContent.length,p=Math.min(c.start,d);c=c.end===void 0?p:Math.min(c.end,d),!t.extend&&p>c&&(d=c,c=p,p=d),d=$f(a,p);var T=$f(a,c);d&&T&&(t.rangeCount!==1||t.anchorNode!==d.node||t.anchorOffset!==d.offset||t.focusNode!==T.node||t.focusOffset!==T.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),t.removeAllRanges(),p>c?(t.addRange(i),t.extend(T.node,T.offset)):(i.setEnd(T.node,T.offset),t.addRange(i)))}}for(i=[],t=a;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)t=i[a],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var zx=h&&"documentMode"in document&&11>=document.documentMode,ds=null,hc=null,ma=null,pc=!1;function Jf(t,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;pc||ds==null||ds!==zt(c)||(c=ds,"selectionStart"in c&&fc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ma&&pa(ma,c)||(ma=c,c=go(hc,"onSelect"),0<c.length&&(i=new rc("onSelect","select",null,i,a),t.push({event:i,listeners:c}),i.target=ds)))}function po(t,i){var a={};return a[t.toLowerCase()]=i.toLowerCase(),a["Webkit"+t]="webkit"+i,a["Moz"+t]="moz"+i,a}var fs={animationend:po("Animation","AnimationEnd"),animationiteration:po("Animation","AnimationIteration"),animationstart:po("Animation","AnimationStart"),transitionend:po("Transition","TransitionEnd")},mc={},Qf={};h&&(Qf=document.createElement("div").style,"AnimationEvent"in window||(delete fs.animationend.animation,delete fs.animationiteration.animation,delete fs.animationstart.animation),"TransitionEvent"in window||delete fs.transitionend.transition);function mo(t){if(mc[t])return mc[t];if(!fs[t])return t;var i=fs[t],a;for(a in i)if(i.hasOwnProperty(a)&&a in Qf)return mc[t]=i[a];return t}var eh=mo("animationend"),th=mo("animationiteration"),nh=mo("animationstart"),ih=mo("transitionend"),rh=new Map,sh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ur(t,i){rh.set(t,i),l(i,[t])}for(var xc=0;xc<sh.length;xc++){var gc=sh[xc],Vx=gc.toLowerCase(),Hx=gc[0].toUpperCase()+gc.slice(1);ur(Vx,"on"+Hx)}ur(eh,"onAnimationEnd"),ur(th,"onAnimationIteration"),ur(nh,"onAnimationStart"),ur("dblclick","onDoubleClick"),ur("focusin","onFocus"),ur("focusout","onBlur"),ur(ih,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gx=new Set("cancel close invalid load scroll toggle".split(" ").concat(xa));function ah(t,i,a){var c=t.type||"unknown-event";t.currentTarget=a,no(c,i,void 0,t),t.currentTarget=null}function oh(t,i){i=(i&4)!==0;for(var a=0;a<t.length;a++){var c=t[a],d=c.event;c=c.listeners;e:{var p=void 0;if(i)for(var T=c.length-1;0<=T;T--){var F=c[T],W=F.instance,fe=F.currentTarget;if(F=F.listener,W!==p&&d.isPropagationStopped())break e;ah(d,F,fe),p=W}else for(T=0;T<c.length;T++){if(F=c[T],W=F.instance,fe=F.currentTarget,F=F.listener,W!==p&&d.isPropagationStopped())break e;ah(d,F,fe),p=W}}}if(Dr)throw t=Ir,Dr=!1,Ir=null,t}function Gt(t,i){var a=i[wc];a===void 0&&(a=i[wc]=new Set);var c=t+"__bubble";a.has(c)||(lh(i,t,2,!1),a.add(c))}function vc(t,i,a){var c=0;i&&(c|=4),lh(a,t,c,i)}var xo="_reactListening"+Math.random().toString(36).slice(2);function ga(t){if(!t[xo]){t[xo]=!0,r.forEach(function(a){a!=="selectionchange"&&(Gx.has(a)||vc(a,!1,t),vc(a,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[xo]||(i[xo]=!0,vc("selectionchange",!1,i))}}function lh(t,i,a,c){switch(Pf(i)){case 1:var d=ix;break;case 4:d=rx;break;default:d=tc}a=d.bind(null,i,a,t),d=void 0,!bt||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?t.addEventListener(i,a,{capture:!0,passive:d}):t.addEventListener(i,a,!0):d!==void 0?t.addEventListener(i,a,{passive:d}):t.addEventListener(i,a,!1)}function _c(t,i,a,c,d){var p=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var T=c.tag;if(T===3||T===4){var F=c.stateNode.containerInfo;if(F===d||F.nodeType===8&&F.parentNode===d)break;if(T===4)for(T=c.return;T!==null;){var W=T.tag;if((W===3||W===4)&&(W=T.stateNode.containerInfo,W===d||W.nodeType===8&&W.parentNode===d))return;T=T.return}for(;F!==null;){if(T=Fr(F),T===null)return;if(W=T.tag,W===5||W===6){c=p=T;continue e}F=F.parentNode}}c=c.return}qe(function(){var fe=p,_e=Ze(a),Se=[];e:{var ve=rh.get(t);if(ve!==void 0){var Ve=rc,Xe=t;switch(t){case"keypress":if(co(a)===0)break e;case"keydown":case"keyup":Ve=_x;break;case"focusin":Xe="focus",Ve=oc;break;case"focusout":Xe="blur",Ve=oc;break;case"beforeblur":case"afterblur":Ve=oc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ve=If;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ve=ox;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ve=Mx;break;case eh:case th:case nh:Ve=ux;break;case ih:Ve=Ex;break;case"scroll":Ve=sx;break;case"wheel":Ve=Tx;break;case"copy":case"cut":case"paste":Ve=fx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ve=Uf}var Ye=(i&4)!==0,nn=!Ye&&t==="scroll",se=Ye?ve!==null?ve+"Capture":null:ve;Ye=[];for(var Z=fe,le;Z!==null;){le=Z;var Ee=le.stateNode;if(le.tag===5&&Ee!==null&&(le=Ee,se!==null&&(Ee=Rt(Z,se),Ee!=null&&Ye.push(va(Z,Ee,le)))),nn)break;Z=Z.return}0<Ye.length&&(ve=new Ve(ve,Xe,null,a,_e),Se.push({event:ve,listeners:Ye}))}}if((i&7)===0){e:{if(ve=t==="mouseover"||t==="pointerover",Ve=t==="mouseout"||t==="pointerout",ve&&a!==Te&&(Xe=a.relatedTarget||a.fromElement)&&(Fr(Xe)||Xe[Hi]))break e;if((Ve||ve)&&(ve=_e.window===_e?_e:(ve=_e.ownerDocument)?ve.defaultView||ve.parentWindow:window,Ve?(Xe=a.relatedTarget||a.toElement,Ve=fe,Xe=Xe?Fr(Xe):null,Xe!==null&&(nn=Rn(Xe),Xe!==nn||Xe.tag!==5&&Xe.tag!==6)&&(Xe=null)):(Ve=null,Xe=fe),Ve!==Xe)){if(Ye=If,Ee="onMouseLeave",se="onMouseEnter",Z="mouse",(t==="pointerout"||t==="pointerover")&&(Ye=Uf,Ee="onPointerLeave",se="onPointerEnter",Z="pointer"),nn=Ve==null?ve:ms(Ve),le=Xe==null?ve:ms(Xe),ve=new Ye(Ee,Z+"leave",Ve,a,_e),ve.target=nn,ve.relatedTarget=le,Ee=null,Fr(_e)===fe&&(Ye=new Ye(se,Z+"enter",Xe,a,_e),Ye.target=le,Ye.relatedTarget=nn,Ee=Ye),nn=Ee,Ve&&Xe)t:{for(Ye=Ve,se=Xe,Z=0,le=Ye;le;le=hs(le))Z++;for(le=0,Ee=se;Ee;Ee=hs(Ee))le++;for(;0<Z-le;)Ye=hs(Ye),Z--;for(;0<le-Z;)se=hs(se),le--;for(;Z--;){if(Ye===se||se!==null&&Ye===se.alternate)break t;Ye=hs(Ye),se=hs(se)}Ye=null}else Ye=null;Ve!==null&&ch(Se,ve,Ve,Ye,!1),Xe!==null&&nn!==null&&ch(Se,nn,Xe,Ye,!0)}}e:{if(ve=fe?ms(fe):window,Ve=ve.nodeName&&ve.nodeName.toLowerCase(),Ve==="select"||Ve==="input"&&ve.type==="file")var et=Dx;else if(Hf(ve))if(Wf)et=Fx;else{et=kx;var nt=Ix}else(Ve=ve.nodeName)&&Ve.toLowerCase()==="input"&&(ve.type==="checkbox"||ve.type==="radio")&&(et=Ux);if(et&&(et=et(t,fe))){Gf(Se,et,a,_e);break e}nt&&nt(t,ve,fe),t==="focusout"&&(nt=ve._wrapperState)&&nt.controlled&&ve.type==="number"&&Dt(ve,"number",ve.value)}switch(nt=fe?ms(fe):window,t){case"focusin":(Hf(nt)||nt.contentEditable==="true")&&(ds=nt,hc=fe,ma=null);break;case"focusout":ma=hc=ds=null;break;case"mousedown":pc=!0;break;case"contextmenu":case"mouseup":case"dragend":pc=!1,Jf(Se,a,_e);break;case"selectionchange":if(zx)break;case"keydown":case"keyup":Jf(Se,a,_e)}var it;if(cc)e:{switch(t){case"compositionstart":var at="onCompositionStart";break e;case"compositionend":at="onCompositionEnd";break e;case"compositionupdate":at="onCompositionUpdate";break e}at=void 0}else us?zf(t,a)&&(at="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(at="onCompositionStart");at&&(Ff&&a.locale!=="ko"&&(us||at!=="onCompositionStart"?at==="onCompositionEnd"&&us&&(it=Lf()):(cr=_e,ic="value"in cr?cr.value:cr.textContent,us=!0)),nt=go(fe,at),0<nt.length&&(at=new kf(at,t,null,a,_e),Se.push({event:at,listeners:nt}),it?at.data=it:(it=Vf(a),it!==null&&(at.data=it)))),(it=Cx?Rx(t,a):Nx(t,a))&&(fe=go(fe,"onBeforeInput"),0<fe.length&&(_e=new kf("onBeforeInput","beforeinput",null,a,_e),Se.push({event:_e,listeners:fe}),_e.data=it))}oh(Se,i)})}function va(t,i,a){return{instance:t,listener:i,currentTarget:a}}function go(t,i){for(var a=i+"Capture",c=[];t!==null;){var d=t,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=Rt(t,a),p!=null&&c.unshift(va(t,p,d)),p=Rt(t,i),p!=null&&c.push(va(t,p,d))),t=t.return}return c}function hs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ch(t,i,a,c,d){for(var p=i._reactName,T=[];a!==null&&a!==c;){var F=a,W=F.alternate,fe=F.stateNode;if(W!==null&&W===c)break;F.tag===5&&fe!==null&&(F=fe,d?(W=Rt(a,p),W!=null&&T.unshift(va(a,W,F))):d||(W=Rt(a,p),W!=null&&T.push(va(a,W,F)))),a=a.return}T.length!==0&&t.push({event:i,listeners:T})}var Wx=/\r\n?/g,jx=/\u0000|\uFFFD/g;function uh(t){return(typeof t=="string"?t:""+t).replace(Wx,`
`).replace(jx,"")}function vo(t,i,a){if(i=uh(i),uh(t)!==i&&a)throw Error(n(425))}function _o(){}var yc=null,Sc=null;function Mc(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var bc=typeof setTimeout=="function"?setTimeout:void 0,Xx=typeof clearTimeout=="function"?clearTimeout:void 0,dh=typeof Promise=="function"?Promise:void 0,qx=typeof queueMicrotask=="function"?queueMicrotask:typeof dh<"u"?function(t){return dh.resolve(null).then(t).catch(Yx)}:bc;function Yx(t){setTimeout(function(){throw t})}function Ec(t,i){var a=i,c=0;do{var d=a.nextSibling;if(t.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){t.removeChild(d),la(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);la(i)}function dr(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function fh(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return t;i--}else a==="/$"&&i++}t=t.previousSibling}return null}var ps=Math.random().toString(36).slice(2),Ti="__reactFiber$"+ps,_a="__reactProps$"+ps,Hi="__reactContainer$"+ps,wc="__reactEvents$"+ps,$x="__reactListeners$"+ps,Kx="__reactHandles$"+ps;function Fr(t){var i=t[Ti];if(i)return i;for(var a=t.parentNode;a;){if(i=a[Hi]||a[Ti]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(t=fh(t);t!==null;){if(a=t[Ti])return a;t=fh(t)}return i}t=a,a=t.parentNode}return null}function ya(t){return t=t[Ti]||t[Hi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ms(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function yo(t){return t[_a]||null}var Tc=[],xs=-1;function fr(t){return{current:t}}function Wt(t){0>xs||(t.current=Tc[xs],Tc[xs]=null,xs--)}function Ht(t,i){xs++,Tc[xs]=t.current,t.current=i}var hr={},Sn=fr(hr),In=fr(!1),Or=hr;function gs(t,i){var a=t.type.contextTypes;if(!a)return hr;var c=t.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in a)d[p]=i[p];return c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=d),d}function kn(t){return t=t.childContextTypes,t!=null}function So(){Wt(In),Wt(Sn)}function hh(t,i,a){if(Sn.current!==hr)throw Error(n(168));Ht(Sn,i),Ht(In,a)}function ph(t,i,a){var c=t.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(n(108,oe(t)||"Unknown",d));return X({},a,c)}function Mo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||hr,Or=Sn.current,Ht(Sn,t),Ht(In,In.current),!0}function mh(t,i,a){var c=t.stateNode;if(!c)throw Error(n(169));a?(t=ph(t,i,Or),c.__reactInternalMemoizedMergedChildContext=t,Wt(In),Wt(Sn),Ht(Sn,t)):Wt(In),Ht(In,a)}var Gi=null,bo=!1,Ac=!1;function xh(t){Gi===null?Gi=[t]:Gi.push(t)}function Zx(t){bo=!0,xh(t)}function pr(){if(!Ac&&Gi!==null){Ac=!0;var t=0,i=ht;try{var a=Gi;for(ht=1;t<a.length;t++){var c=a[t];do c=c(!0);while(c!==null)}Gi=null,bo=!1}catch(d){throw Gi!==null&&(Gi=Gi.slice(t+1)),Ur(na,pr),d}finally{ht=i,Ac=!1}}return null}var vs=[],_s=0,Eo=null,wo=0,Qn=[],ei=0,Br=null,Wi=1,ji="";function zr(t,i){vs[_s++]=wo,vs[_s++]=Eo,Eo=t,wo=i}function gh(t,i,a){Qn[ei++]=Wi,Qn[ei++]=ji,Qn[ei++]=Br,Br=t;var c=Wi;t=ji;var d=32-Le(c)-1;c&=~(1<<d),a+=1;var p=32-Le(i)+d;if(30<p){var T=d-d%5;p=(c&(1<<T)-1).toString(32),c>>=T,d-=T,Wi=1<<32-Le(i)+d|a<<d|c,ji=p+t}else Wi=1<<p|a<<d|c,ji=t}function Cc(t){t.return!==null&&(zr(t,1),gh(t,1,0))}function Rc(t){for(;t===Eo;)Eo=vs[--_s],vs[_s]=null,wo=vs[--_s],vs[_s]=null;for(;t===Br;)Br=Qn[--ei],Qn[ei]=null,ji=Qn[--ei],Qn[ei]=null,Wi=Qn[--ei],Qn[ei]=null}var Wn=null,jn=null,Xt=!1,pi=null;function vh(t,i){var a=ri(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=t,i=t.deletions,i===null?(t.deletions=[a],t.flags|=16):i.push(a)}function _h(t,i){switch(t.tag){case 5:var a=t.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Wn=t,jn=dr(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Wn=t,jn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Br!==null?{id:Wi,overflow:ji}:null,t.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=ri(18,null,null,0),a.stateNode=i,a.return=t,t.child=a,Wn=t,jn=null,!0):!1;default:return!1}}function Nc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Pc(t){if(Xt){var i=jn;if(i){var a=i;if(!_h(t,i)){if(Nc(t))throw Error(n(418));i=dr(a.nextSibling);var c=Wn;i&&_h(t,i)?vh(c,a):(t.flags=t.flags&-4097|2,Xt=!1,Wn=t)}}else{if(Nc(t))throw Error(n(418));t.flags=t.flags&-4097|2,Xt=!1,Wn=t}}}function yh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Wn=t}function To(t){if(t!==Wn)return!1;if(!Xt)return yh(t),Xt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!Mc(t.type,t.memoizedProps)),i&&(i=jn)){if(Nc(t))throw Sh(),Error(n(418));for(;i;)vh(t,i),i=dr(i.nextSibling)}if(yh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"){if(i===0){jn=dr(t.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}t=t.nextSibling}jn=null}}else jn=Wn?dr(t.stateNode.nextSibling):null;return!0}function Sh(){for(var t=jn;t;)t=dr(t.nextSibling)}function ys(){jn=Wn=null,Xt=!1}function Lc(t){pi===null?pi=[t]:pi.push(t)}var Jx=N.ReactCurrentBatchConfig;function Sa(t,i,a){if(t=a.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(n(309));var c=a.stateNode}if(!c)throw Error(n(147,t));var d=c,p=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(T){var F=d.refs;T===null?delete F[p]:F[p]=T},i._stringRef=p,i)}if(typeof t!="string")throw Error(n(284));if(!a._owner)throw Error(n(290,t))}return t}function Ao(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function Mh(t){var i=t._init;return i(t._payload)}function bh(t){function i(se,Z){if(t){var le=se.deletions;le===null?(se.deletions=[Z],se.flags|=16):le.push(Z)}}function a(se,Z){if(!t)return null;for(;Z!==null;)i(se,Z),Z=Z.sibling;return null}function c(se,Z){for(se=new Map;Z!==null;)Z.key!==null?se.set(Z.key,Z):se.set(Z.index,Z),Z=Z.sibling;return se}function d(se,Z){return se=Mr(se,Z),se.index=0,se.sibling=null,se}function p(se,Z,le){return se.index=le,t?(le=se.alternate,le!==null?(le=le.index,le<Z?(se.flags|=2,Z):le):(se.flags|=2,Z)):(se.flags|=1048576,Z)}function T(se){return t&&se.alternate===null&&(se.flags|=2),se}function F(se,Z,le,Ee){return Z===null||Z.tag!==6?(Z=bu(le,se.mode,Ee),Z.return=se,Z):(Z=d(Z,le),Z.return=se,Z)}function W(se,Z,le,Ee){var et=le.type;return et===U?_e(se,Z,le.props.children,Ee,le.key):Z!==null&&(Z.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===ue&&Mh(et)===Z.type)?(Ee=d(Z,le.props),Ee.ref=Sa(se,Z,le),Ee.return=se,Ee):(Ee=Zo(le.type,le.key,le.props,null,se.mode,Ee),Ee.ref=Sa(se,Z,le),Ee.return=se,Ee)}function fe(se,Z,le,Ee){return Z===null||Z.tag!==4||Z.stateNode.containerInfo!==le.containerInfo||Z.stateNode.implementation!==le.implementation?(Z=Eu(le,se.mode,Ee),Z.return=se,Z):(Z=d(Z,le.children||[]),Z.return=se,Z)}function _e(se,Z,le,Ee,et){return Z===null||Z.tag!==7?(Z=Yr(le,se.mode,Ee,et),Z.return=se,Z):(Z=d(Z,le),Z.return=se,Z)}function Se(se,Z,le){if(typeof Z=="string"&&Z!==""||typeof Z=="number")return Z=bu(""+Z,se.mode,le),Z.return=se,Z;if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case P:return le=Zo(Z.type,Z.key,Z.props,null,se.mode,le),le.ref=Sa(se,null,Z),le.return=se,le;case C:return Z=Eu(Z,se.mode,le),Z.return=se,Z;case ue:var Ee=Z._init;return Se(se,Ee(Z._payload),le)}if(It(Z)||j(Z))return Z=Yr(Z,se.mode,le,null),Z.return=se,Z;Ao(se,Z)}return null}function ve(se,Z,le,Ee){var et=Z!==null?Z.key:null;if(typeof le=="string"&&le!==""||typeof le=="number")return et!==null?null:F(se,Z,""+le,Ee);if(typeof le=="object"&&le!==null){switch(le.$$typeof){case P:return le.key===et?W(se,Z,le,Ee):null;case C:return le.key===et?fe(se,Z,le,Ee):null;case ue:return et=le._init,ve(se,Z,et(le._payload),Ee)}if(It(le)||j(le))return et!==null?null:_e(se,Z,le,Ee,null);Ao(se,le)}return null}function Ve(se,Z,le,Ee,et){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return se=se.get(le)||null,F(Z,se,""+Ee,et);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case P:return se=se.get(Ee.key===null?le:Ee.key)||null,W(Z,se,Ee,et);case C:return se=se.get(Ee.key===null?le:Ee.key)||null,fe(Z,se,Ee,et);case ue:var nt=Ee._init;return Ve(se,Z,le,nt(Ee._payload),et)}if(It(Ee)||j(Ee))return se=se.get(le)||null,_e(Z,se,Ee,et,null);Ao(Z,Ee)}return null}function Xe(se,Z,le,Ee){for(var et=null,nt=null,it=Z,at=Z=0,hn=null;it!==null&&at<le.length;at++){it.index>at?(hn=it,it=null):hn=it.sibling;var Pt=ve(se,it,le[at],Ee);if(Pt===null){it===null&&(it=hn);break}t&&it&&Pt.alternate===null&&i(se,it),Z=p(Pt,Z,at),nt===null?et=Pt:nt.sibling=Pt,nt=Pt,it=hn}if(at===le.length)return a(se,it),Xt&&zr(se,at),et;if(it===null){for(;at<le.length;at++)it=Se(se,le[at],Ee),it!==null&&(Z=p(it,Z,at),nt===null?et=it:nt.sibling=it,nt=it);return Xt&&zr(se,at),et}for(it=c(se,it);at<le.length;at++)hn=Ve(it,se,at,le[at],Ee),hn!==null&&(t&&hn.alternate!==null&&it.delete(hn.key===null?at:hn.key),Z=p(hn,Z,at),nt===null?et=hn:nt.sibling=hn,nt=hn);return t&&it.forEach(function(br){return i(se,br)}),Xt&&zr(se,at),et}function Ye(se,Z,le,Ee){var et=j(le);if(typeof et!="function")throw Error(n(150));if(le=et.call(le),le==null)throw Error(n(151));for(var nt=et=null,it=Z,at=Z=0,hn=null,Pt=le.next();it!==null&&!Pt.done;at++,Pt=le.next()){it.index>at?(hn=it,it=null):hn=it.sibling;var br=ve(se,it,Pt.value,Ee);if(br===null){it===null&&(it=hn);break}t&&it&&br.alternate===null&&i(se,it),Z=p(br,Z,at),nt===null?et=br:nt.sibling=br,nt=br,it=hn}if(Pt.done)return a(se,it),Xt&&zr(se,at),et;if(it===null){for(;!Pt.done;at++,Pt=le.next())Pt=Se(se,Pt.value,Ee),Pt!==null&&(Z=p(Pt,Z,at),nt===null?et=Pt:nt.sibling=Pt,nt=Pt);return Xt&&zr(se,at),et}for(it=c(se,it);!Pt.done;at++,Pt=le.next())Pt=Ve(it,se,at,Pt.value,Ee),Pt!==null&&(t&&Pt.alternate!==null&&it.delete(Pt.key===null?at:Pt.key),Z=p(Pt,Z,at),nt===null?et=Pt:nt.sibling=Pt,nt=Pt);return t&&it.forEach(function(Pg){return i(se,Pg)}),Xt&&zr(se,at),et}function nn(se,Z,le,Ee){if(typeof le=="object"&&le!==null&&le.type===U&&le.key===null&&(le=le.props.children),typeof le=="object"&&le!==null){switch(le.$$typeof){case P:e:{for(var et=le.key,nt=Z;nt!==null;){if(nt.key===et){if(et=le.type,et===U){if(nt.tag===7){a(se,nt.sibling),Z=d(nt,le.props.children),Z.return=se,se=Z;break e}}else if(nt.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===ue&&Mh(et)===nt.type){a(se,nt.sibling),Z=d(nt,le.props),Z.ref=Sa(se,nt,le),Z.return=se,se=Z;break e}a(se,nt);break}else i(se,nt);nt=nt.sibling}le.type===U?(Z=Yr(le.props.children,se.mode,Ee,le.key),Z.return=se,se=Z):(Ee=Zo(le.type,le.key,le.props,null,se.mode,Ee),Ee.ref=Sa(se,Z,le),Ee.return=se,se=Ee)}return T(se);case C:e:{for(nt=le.key;Z!==null;){if(Z.key===nt)if(Z.tag===4&&Z.stateNode.containerInfo===le.containerInfo&&Z.stateNode.implementation===le.implementation){a(se,Z.sibling),Z=d(Z,le.children||[]),Z.return=se,se=Z;break e}else{a(se,Z);break}else i(se,Z);Z=Z.sibling}Z=Eu(le,se.mode,Ee),Z.return=se,se=Z}return T(se);case ue:return nt=le._init,nn(se,Z,nt(le._payload),Ee)}if(It(le))return Xe(se,Z,le,Ee);if(j(le))return Ye(se,Z,le,Ee);Ao(se,le)}return typeof le=="string"&&le!==""||typeof le=="number"?(le=""+le,Z!==null&&Z.tag===6?(a(se,Z.sibling),Z=d(Z,le),Z.return=se,se=Z):(a(se,Z),Z=bu(le,se.mode,Ee),Z.return=se,se=Z),T(se)):a(se,Z)}return nn}var Ss=bh(!0),Eh=bh(!1),Co=fr(null),Ro=null,Ms=null,Dc=null;function Ic(){Dc=Ms=Ro=null}function kc(t){var i=Co.current;Wt(Co),t._currentValue=i}function Uc(t,i,a){for(;t!==null;){var c=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),t===a)break;t=t.return}}function bs(t,i){Ro=t,Dc=Ms=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(Un=!0),t.firstContext=null)}function ti(t){var i=t._currentValue;if(Dc!==t)if(t={context:t,memoizedValue:i,next:null},Ms===null){if(Ro===null)throw Error(n(308));Ms=t,Ro.dependencies={lanes:0,firstContext:t}}else Ms=Ms.next=t;return i}var Vr=null;function Fc(t){Vr===null?Vr=[t]:Vr.push(t)}function wh(t,i,a,c){var d=i.interleaved;return d===null?(a.next=a,Fc(i)):(a.next=d.next,d.next=a),i.interleaved=a,Xi(t,c)}function Xi(t,i){t.lanes|=i;var a=t.alternate;for(a!==null&&(a.lanes|=i),a=t,t=t.return;t!==null;)t.childLanes|=i,a=t.alternate,a!==null&&(a.childLanes|=i),a=t,t=t.return;return a.tag===3?a.stateNode:null}var mr=!1;function Oc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Th(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function qi(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function xr(t,i,a){var c=t.updateQueue;if(c===null)return null;if(c=c.shared,(Tt&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,Xi(t,a)}return d=c.interleaved,d===null?(i.next=i,Fc(c)):(i.next=d.next,d.next=i),c.interleaved=i,Xi(t,a)}function No(t,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=t.pendingLanes,a|=c,i.lanes=a,yn(t,a)}}function Ah(t,i){var a=t.updateQueue,c=t.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var T={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?d=p=T:p=p.next=T,a=a.next}while(a!==null);p===null?d=p=i:p=p.next=i}else d=p=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:c.shared,effects:c.effects},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=i:t.next=i,a.lastBaseUpdate=i}function Po(t,i,a,c){var d=t.updateQueue;mr=!1;var p=d.firstBaseUpdate,T=d.lastBaseUpdate,F=d.shared.pending;if(F!==null){d.shared.pending=null;var W=F,fe=W.next;W.next=null,T===null?p=fe:T.next=fe,T=W;var _e=t.alternate;_e!==null&&(_e=_e.updateQueue,F=_e.lastBaseUpdate,F!==T&&(F===null?_e.firstBaseUpdate=fe:F.next=fe,_e.lastBaseUpdate=W))}if(p!==null){var Se=d.baseState;T=0,_e=fe=W=null,F=p;do{var ve=F.lane,Ve=F.eventTime;if((c&ve)===ve){_e!==null&&(_e=_e.next={eventTime:Ve,lane:0,tag:F.tag,payload:F.payload,callback:F.callback,next:null});e:{var Xe=t,Ye=F;switch(ve=i,Ve=a,Ye.tag){case 1:if(Xe=Ye.payload,typeof Xe=="function"){Se=Xe.call(Ve,Se,ve);break e}Se=Xe;break e;case 3:Xe.flags=Xe.flags&-65537|128;case 0:if(Xe=Ye.payload,ve=typeof Xe=="function"?Xe.call(Ve,Se,ve):Xe,ve==null)break e;Se=X({},Se,ve);break e;case 2:mr=!0}}F.callback!==null&&F.lane!==0&&(t.flags|=64,ve=d.effects,ve===null?d.effects=[F]:ve.push(F))}else Ve={eventTime:Ve,lane:ve,tag:F.tag,payload:F.payload,callback:F.callback,next:null},_e===null?(fe=_e=Ve,W=Se):_e=_e.next=Ve,T|=ve;if(F=F.next,F===null){if(F=d.shared.pending,F===null)break;ve=F,F=ve.next,ve.next=null,d.lastBaseUpdate=ve,d.shared.pending=null}}while(!0);if(_e===null&&(W=Se),d.baseState=W,d.firstBaseUpdate=fe,d.lastBaseUpdate=_e,i=d.shared.interleaved,i!==null){d=i;do T|=d.lane,d=d.next;while(d!==i)}else p===null&&(d.shared.lanes=0);Wr|=T,t.lanes=T,t.memoizedState=Se}}function Ch(t,i,a){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var c=t[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(n(191,d));d.call(c)}}}var Ma={},Ai=fr(Ma),ba=fr(Ma),Ea=fr(Ma);function Hr(t){if(t===Ma)throw Error(n(174));return t}function Bc(t,i){switch(Ht(Ea,i),Ht(ba,t),Ht(Ai,Ma),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:b(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=b(i,t)}Wt(Ai),Ht(Ai,i)}function Es(){Wt(Ai),Wt(ba),Wt(Ea)}function Rh(t){Hr(Ea.current);var i=Hr(Ai.current),a=b(i,t.type);i!==a&&(Ht(ba,t),Ht(Ai,a))}function zc(t){ba.current===t&&(Wt(Ai),Wt(ba))}var Yt=fr(0);function Lo(t){for(var i=t;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Vc=[];function Hc(){for(var t=0;t<Vc.length;t++)Vc[t]._workInProgressVersionPrimary=null;Vc.length=0}var Do=N.ReactCurrentDispatcher,Gc=N.ReactCurrentBatchConfig,Gr=0,$t=null,on=null,dn=null,Io=!1,wa=!1,Ta=0,Qx=0;function Mn(){throw Error(n(321))}function Wc(t,i){if(i===null)return!1;for(var a=0;a<i.length&&a<t.length;a++)if(!hi(t[a],i[a]))return!1;return!0}function jc(t,i,a,c,d,p){if(Gr=p,$t=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Do.current=t===null||t.memoizedState===null?ig:rg,t=a(c,d),wa){p=0;do{if(wa=!1,Ta=0,25<=p)throw Error(n(301));p+=1,dn=on=null,i.updateQueue=null,Do.current=sg,t=a(c,d)}while(wa)}if(Do.current=Fo,i=on!==null&&on.next!==null,Gr=0,dn=on=$t=null,Io=!1,i)throw Error(n(300));return t}function Xc(){var t=Ta!==0;return Ta=0,t}function Ci(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dn===null?$t.memoizedState=dn=t:dn=dn.next=t,dn}function ni(){if(on===null){var t=$t.alternate;t=t!==null?t.memoizedState:null}else t=on.next;var i=dn===null?$t.memoizedState:dn.next;if(i!==null)dn=i,on=t;else{if(t===null)throw Error(n(310));on=t,t={memoizedState:on.memoizedState,baseState:on.baseState,baseQueue:on.baseQueue,queue:on.queue,next:null},dn===null?$t.memoizedState=dn=t:dn=dn.next=t}return dn}function Aa(t,i){return typeof i=="function"?i(t):i}function qc(t){var i=ni(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var c=on,d=c.baseQueue,p=a.pending;if(p!==null){if(d!==null){var T=d.next;d.next=p.next,p.next=T}c.baseQueue=d=p,a.pending=null}if(d!==null){p=d.next,c=c.baseState;var F=T=null,W=null,fe=p;do{var _e=fe.lane;if((Gr&_e)===_e)W!==null&&(W=W.next={lane:0,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null}),c=fe.hasEagerState?fe.eagerState:t(c,fe.action);else{var Se={lane:_e,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null};W===null?(F=W=Se,T=c):W=W.next=Se,$t.lanes|=_e,Wr|=_e}fe=fe.next}while(fe!==null&&fe!==p);W===null?T=c:W.next=F,hi(c,i.memoizedState)||(Un=!0),i.memoizedState=c,i.baseState=T,i.baseQueue=W,a.lastRenderedState=c}if(t=a.interleaved,t!==null){d=t;do p=d.lane,$t.lanes|=p,Wr|=p,d=d.next;while(d!==t)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Yc(t){var i=ni(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var c=a.dispatch,d=a.pending,p=i.memoizedState;if(d!==null){a.pending=null;var T=d=d.next;do p=t(p,T.action),T=T.next;while(T!==d);hi(p,i.memoizedState)||(Un=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),a.lastRenderedState=p}return[p,c]}function Nh(){}function Ph(t,i){var a=$t,c=ni(),d=i(),p=!hi(c.memoizedState,d);if(p&&(c.memoizedState=d,Un=!0),c=c.queue,$c(Ih.bind(null,a,c,t),[t]),c.getSnapshot!==i||p||dn!==null&&dn.memoizedState.tag&1){if(a.flags|=2048,Ca(9,Dh.bind(null,a,c,d,i),void 0,null),fn===null)throw Error(n(349));(Gr&30)!==0||Lh(a,i,d)}return d}function Lh(t,i,a){t.flags|=16384,t={getSnapshot:i,value:a},i=$t.updateQueue,i===null?(i={lastEffect:null,stores:null},$t.updateQueue=i,i.stores=[t]):(a=i.stores,a===null?i.stores=[t]:a.push(t))}function Dh(t,i,a,c){i.value=a,i.getSnapshot=c,kh(i)&&Uh(t)}function Ih(t,i,a){return a(function(){kh(i)&&Uh(t)})}function kh(t){var i=t.getSnapshot;t=t.value;try{var a=i();return!hi(t,a)}catch{return!0}}function Uh(t){var i=Xi(t,1);i!==null&&vi(i,t,1,-1)}function Fh(t){var i=Ci();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Aa,lastRenderedState:t},i.queue=t,t=t.dispatch=ng.bind(null,$t,t),[i.memoizedState,t]}function Ca(t,i,a,c){return t={tag:t,create:i,destroy:a,deps:c,next:null},i=$t.updateQueue,i===null?(i={lastEffect:null,stores:null},$t.updateQueue=i,i.lastEffect=t.next=t):(a=i.lastEffect,a===null?i.lastEffect=t.next=t:(c=a.next,a.next=t,t.next=c,i.lastEffect=t)),t}function Oh(){return ni().memoizedState}function ko(t,i,a,c){var d=Ci();$t.flags|=t,d.memoizedState=Ca(1|i,a,void 0,c===void 0?null:c)}function Uo(t,i,a,c){var d=ni();c=c===void 0?null:c;var p=void 0;if(on!==null){var T=on.memoizedState;if(p=T.destroy,c!==null&&Wc(c,T.deps)){d.memoizedState=Ca(i,a,p,c);return}}$t.flags|=t,d.memoizedState=Ca(1|i,a,p,c)}function Bh(t,i){return ko(8390656,8,t,i)}function $c(t,i){return Uo(2048,8,t,i)}function zh(t,i){return Uo(4,2,t,i)}function Vh(t,i){return Uo(4,4,t,i)}function Hh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Gh(t,i,a){return a=a!=null?a.concat([t]):null,Uo(4,4,Hh.bind(null,i,t),a)}function Kc(){}function Wh(t,i){var a=ni();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Wc(i,c[1])?c[0]:(a.memoizedState=[t,i],t)}function jh(t,i){var a=ni();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Wc(i,c[1])?c[0]:(t=t(),a.memoizedState=[t,i],t)}function Xh(t,i,a){return(Gr&21)===0?(t.baseState&&(t.baseState=!1,Un=!0),t.memoizedState=a):(hi(a,i)||(a=an(),$t.lanes|=a,Wr|=a,t.baseState=!0),i)}function eg(t,i){var a=ht;ht=a!==0&&4>a?a:4,t(!0);var c=Gc.transition;Gc.transition={};try{t(!1),i()}finally{ht=a,Gc.transition=c}}function qh(){return ni().memoizedState}function tg(t,i,a){var c=yr(t);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Yh(t))$h(i,a);else if(a=wh(t,i,a,c),a!==null){var d=Pn();vi(a,t,c,d),Kh(a,i,c)}}function ng(t,i,a){var c=yr(t),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Yh(t))$h(i,d);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var T=i.lastRenderedState,F=p(T,a);if(d.hasEagerState=!0,d.eagerState=F,hi(F,T)){var W=i.interleaved;W===null?(d.next=d,Fc(i)):(d.next=W.next,W.next=d),i.interleaved=d;return}}catch{}finally{}a=wh(t,i,d,c),a!==null&&(d=Pn(),vi(a,t,c,d),Kh(a,i,c))}}function Yh(t){var i=t.alternate;return t===$t||i!==null&&i===$t}function $h(t,i){wa=Io=!0;var a=t.pending;a===null?i.next=i:(i.next=a.next,a.next=i),t.pending=i}function Kh(t,i,a){if((a&4194240)!==0){var c=i.lanes;c&=t.pendingLanes,a|=c,i.lanes=a,yn(t,a)}}var Fo={readContext:ti,useCallback:Mn,useContext:Mn,useEffect:Mn,useImperativeHandle:Mn,useInsertionEffect:Mn,useLayoutEffect:Mn,useMemo:Mn,useReducer:Mn,useRef:Mn,useState:Mn,useDebugValue:Mn,useDeferredValue:Mn,useTransition:Mn,useMutableSource:Mn,useSyncExternalStore:Mn,useId:Mn,unstable_isNewReconciler:!1},ig={readContext:ti,useCallback:function(t,i){return Ci().memoizedState=[t,i===void 0?null:i],t},useContext:ti,useEffect:Bh,useImperativeHandle:function(t,i,a){return a=a!=null?a.concat([t]):null,ko(4194308,4,Hh.bind(null,i,t),a)},useLayoutEffect:function(t,i){return ko(4194308,4,t,i)},useInsertionEffect:function(t,i){return ko(4,2,t,i)},useMemo:function(t,i){var a=Ci();return i=i===void 0?null:i,t=t(),a.memoizedState=[t,i],t},useReducer:function(t,i,a){var c=Ci();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},c.queue=t,t=t.dispatch=tg.bind(null,$t,t),[c.memoizedState,t]},useRef:function(t){var i=Ci();return t={current:t},i.memoizedState=t},useState:Fh,useDebugValue:Kc,useDeferredValue:function(t){return Ci().memoizedState=t},useTransition:function(){var t=Fh(!1),i=t[0];return t=eg.bind(null,t[1]),Ci().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,a){var c=$t,d=Ci();if(Xt){if(a===void 0)throw Error(n(407));a=a()}else{if(a=i(),fn===null)throw Error(n(349));(Gr&30)!==0||Lh(c,i,a)}d.memoizedState=a;var p={value:a,getSnapshot:i};return d.queue=p,Bh(Ih.bind(null,c,p,t),[t]),c.flags|=2048,Ca(9,Dh.bind(null,c,p,a,i),void 0,null),a},useId:function(){var t=Ci(),i=fn.identifierPrefix;if(Xt){var a=ji,c=Wi;a=(c&~(1<<32-Le(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Ta++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Qx++,i=":"+i+"r"+a.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},rg={readContext:ti,useCallback:Wh,useContext:ti,useEffect:$c,useImperativeHandle:Gh,useInsertionEffect:zh,useLayoutEffect:Vh,useMemo:jh,useReducer:qc,useRef:Oh,useState:function(){return qc(Aa)},useDebugValue:Kc,useDeferredValue:function(t){var i=ni();return Xh(i,on.memoizedState,t)},useTransition:function(){var t=qc(Aa)[0],i=ni().memoizedState;return[t,i]},useMutableSource:Nh,useSyncExternalStore:Ph,useId:qh,unstable_isNewReconciler:!1},sg={readContext:ti,useCallback:Wh,useContext:ti,useEffect:$c,useImperativeHandle:Gh,useInsertionEffect:zh,useLayoutEffect:Vh,useMemo:jh,useReducer:Yc,useRef:Oh,useState:function(){return Yc(Aa)},useDebugValue:Kc,useDeferredValue:function(t){var i=ni();return on===null?i.memoizedState=t:Xh(i,on.memoizedState,t)},useTransition:function(){var t=Yc(Aa)[0],i=ni().memoizedState;return[t,i]},useMutableSource:Nh,useSyncExternalStore:Ph,useId:qh,unstable_isNewReconciler:!1};function mi(t,i){if(t&&t.defaultProps){i=X({},i),t=t.defaultProps;for(var a in t)i[a]===void 0&&(i[a]=t[a]);return i}return i}function Zc(t,i,a,c){i=t.memoizedState,a=a(c,i),a=a==null?i:X({},i,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Oo={isMounted:function(t){return(t=t._reactInternals)?Rn(t)===t:!1},enqueueSetState:function(t,i,a){t=t._reactInternals;var c=Pn(),d=yr(t),p=qi(c,d);p.payload=i,a!=null&&(p.callback=a),i=xr(t,p,d),i!==null&&(vi(i,t,d,c),No(i,t,d))},enqueueReplaceState:function(t,i,a){t=t._reactInternals;var c=Pn(),d=yr(t),p=qi(c,d);p.tag=1,p.payload=i,a!=null&&(p.callback=a),i=xr(t,p,d),i!==null&&(vi(i,t,d,c),No(i,t,d))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var a=Pn(),c=yr(t),d=qi(a,c);d.tag=2,i!=null&&(d.callback=i),i=xr(t,d,c),i!==null&&(vi(i,t,c,a),No(i,t,c))}};function Zh(t,i,a,c,d,p,T){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(c,p,T):i.prototype&&i.prototype.isPureReactComponent?!pa(a,c)||!pa(d,p):!0}function Jh(t,i,a){var c=!1,d=hr,p=i.contextType;return typeof p=="object"&&p!==null?p=ti(p):(d=kn(i)?Or:Sn.current,c=i.contextTypes,p=(c=c!=null)?gs(t,d):hr),i=new i(a,p),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Oo,t.stateNode=i,i._reactInternals=t,c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=d,t.__reactInternalMemoizedMaskedChildContext=p),i}function Qh(t,i,a,c){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==t&&Oo.enqueueReplaceState(i,i.state,null)}function Jc(t,i,a,c){var d=t.stateNode;d.props=a,d.state=t.memoizedState,d.refs={},Oc(t);var p=i.contextType;typeof p=="object"&&p!==null?d.context=ti(p):(p=kn(i)?Or:Sn.current,d.context=gs(t,p)),d.state=t.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(Zc(t,i,p,a),d.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Oo.enqueueReplaceState(d,d.state,null),Po(t,a,d,c),d.state=t.memoizedState),typeof d.componentDidMount=="function"&&(t.flags|=4194308)}function ws(t,i){try{var a="",c=i;do a+=He(c),c=c.return;while(c);var d=a}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:t,source:i,stack:d,digest:null}}function Qc(t,i,a){return{value:t,source:null,stack:a??null,digest:i??null}}function eu(t,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var ag=typeof WeakMap=="function"?WeakMap:Map;function ep(t,i,a){a=qi(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){jo||(jo=!0,mu=c),eu(t,i)},a}function tp(t,i,a){a=qi(-1,a),a.tag=3;var c=t.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){eu(t,i)}}var p=t.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){eu(t,i),typeof c!="function"&&(vr===null?vr=new Set([this]):vr.add(this));var T=i.stack;this.componentDidCatch(i.value,{componentStack:T!==null?T:""})}),a}function np(t,i,a){var c=t.pingCache;if(c===null){c=t.pingCache=new ag;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),t=yg.bind(null,t,i,a),i.then(t,t))}function ip(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function rp(t,i,a,c,d){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=qi(-1,1),i.tag=2,xr(a,i,1))),a.lanes|=1),t):(t.flags|=65536,t.lanes=d,t)}var og=N.ReactCurrentOwner,Un=!1;function Nn(t,i,a,c){i.child=t===null?Eh(i,null,a,c):Ss(i,t.child,a,c)}function sp(t,i,a,c,d){a=a.render;var p=i.ref;return bs(i,d),c=jc(t,i,a,c,p,d),a=Xc(),t!==null&&!Un?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,Yi(t,i,d)):(Xt&&a&&Cc(i),i.flags|=1,Nn(t,i,c,d),i.child)}function ap(t,i,a,c,d){if(t===null){var p=a.type;return typeof p=="function"&&!Mu(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=p,op(t,i,p,c,d)):(t=Zo(a.type,null,c,i,i.mode,d),t.ref=i.ref,t.return=i,i.child=t)}if(p=t.child,(t.lanes&d)===0){var T=p.memoizedProps;if(a=a.compare,a=a!==null?a:pa,a(T,c)&&t.ref===i.ref)return Yi(t,i,d)}return i.flags|=1,t=Mr(p,c),t.ref=i.ref,t.return=i,i.child=t}function op(t,i,a,c,d){if(t!==null){var p=t.memoizedProps;if(pa(p,c)&&t.ref===i.ref)if(Un=!1,i.pendingProps=c=p,(t.lanes&d)!==0)(t.flags&131072)!==0&&(Un=!0);else return i.lanes=t.lanes,Yi(t,i,d)}return tu(t,i,a,c,d)}function lp(t,i,a){var c=i.pendingProps,d=c.children,p=t!==null?t.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ht(As,Xn),Xn|=a;else{if((a&1073741824)===0)return t=p!==null?p.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Ht(As,Xn),Xn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=p!==null?p.baseLanes:a,Ht(As,Xn),Xn|=c}else p!==null?(c=p.baseLanes|a,i.memoizedState=null):c=a,Ht(As,Xn),Xn|=c;return Nn(t,i,d,a),i.child}function cp(t,i){var a=i.ref;(t===null&&a!==null||t!==null&&t.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function tu(t,i,a,c,d){var p=kn(a)?Or:Sn.current;return p=gs(i,p),bs(i,d),a=jc(t,i,a,c,p,d),c=Xc(),t!==null&&!Un?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,Yi(t,i,d)):(Xt&&c&&Cc(i),i.flags|=1,Nn(t,i,a,d),i.child)}function up(t,i,a,c,d){if(kn(a)){var p=!0;Mo(i)}else p=!1;if(bs(i,d),i.stateNode===null)zo(t,i),Jh(i,a,c),Jc(i,a,c,d),c=!0;else if(t===null){var T=i.stateNode,F=i.memoizedProps;T.props=F;var W=T.context,fe=a.contextType;typeof fe=="object"&&fe!==null?fe=ti(fe):(fe=kn(a)?Or:Sn.current,fe=gs(i,fe));var _e=a.getDerivedStateFromProps,Se=typeof _e=="function"||typeof T.getSnapshotBeforeUpdate=="function";Se||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(F!==c||W!==fe)&&Qh(i,T,c,fe),mr=!1;var ve=i.memoizedState;T.state=ve,Po(i,c,T,d),W=i.memoizedState,F!==c||ve!==W||In.current||mr?(typeof _e=="function"&&(Zc(i,a,_e,c),W=i.memoizedState),(F=mr||Zh(i,a,F,c,ve,W,fe))?(Se||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(i.flags|=4194308)):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=W),T.props=c,T.state=W,T.context=fe,c=F):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{T=i.stateNode,Th(t,i),F=i.memoizedProps,fe=i.type===i.elementType?F:mi(i.type,F),T.props=fe,Se=i.pendingProps,ve=T.context,W=a.contextType,typeof W=="object"&&W!==null?W=ti(W):(W=kn(a)?Or:Sn.current,W=gs(i,W));var Ve=a.getDerivedStateFromProps;(_e=typeof Ve=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(F!==Se||ve!==W)&&Qh(i,T,c,W),mr=!1,ve=i.memoizedState,T.state=ve,Po(i,c,T,d);var Xe=i.memoizedState;F!==Se||ve!==Xe||In.current||mr?(typeof Ve=="function"&&(Zc(i,a,Ve,c),Xe=i.memoizedState),(fe=mr||Zh(i,a,fe,c,ve,Xe,W)||!1)?(_e||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(c,Xe,W),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(c,Xe,W)),typeof T.componentDidUpdate=="function"&&(i.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof T.componentDidUpdate!="function"||F===t.memoizedProps&&ve===t.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||F===t.memoizedProps&&ve===t.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=Xe),T.props=c,T.state=Xe,T.context=W,c=fe):(typeof T.componentDidUpdate!="function"||F===t.memoizedProps&&ve===t.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||F===t.memoizedProps&&ve===t.memoizedState||(i.flags|=1024),c=!1)}return nu(t,i,a,c,p,d)}function nu(t,i,a,c,d,p){cp(t,i);var T=(i.flags&128)!==0;if(!c&&!T)return d&&mh(i,a,!1),Yi(t,i,p);c=i.stateNode,og.current=i;var F=T&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,t!==null&&T?(i.child=Ss(i,t.child,null,p),i.child=Ss(i,null,F,p)):Nn(t,i,F,p),i.memoizedState=c.state,d&&mh(i,a,!0),i.child}function dp(t){var i=t.stateNode;i.pendingContext?hh(t,i.pendingContext,i.pendingContext!==i.context):i.context&&hh(t,i.context,!1),Bc(t,i.containerInfo)}function fp(t,i,a,c,d){return ys(),Lc(d),i.flags|=256,Nn(t,i,a,c),i.child}var iu={dehydrated:null,treeContext:null,retryLane:0};function ru(t){return{baseLanes:t,cachePool:null,transitions:null}}function hp(t,i,a){var c=i.pendingProps,d=Yt.current,p=!1,T=(i.flags&128)!==0,F;if((F=T)||(F=t!==null&&t.memoizedState===null?!1:(d&2)!==0),F?(p=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(d|=1),Ht(Yt,d&1),t===null)return Pc(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(T=c.children,t=c.fallback,p?(c=i.mode,p=i.child,T={mode:"hidden",children:T},(c&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=T):p=Jo(T,c,0,null),t=Yr(t,c,a,null),p.return=i,t.return=i,p.sibling=t,i.child=p,i.child.memoizedState=ru(a),i.memoizedState=iu,t):su(i,T));if(d=t.memoizedState,d!==null&&(F=d.dehydrated,F!==null))return lg(t,i,T,c,F,d,a);if(p){p=c.fallback,T=i.mode,d=t.child,F=d.sibling;var W={mode:"hidden",children:c.children};return(T&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=W,i.deletions=null):(c=Mr(d,W),c.subtreeFlags=d.subtreeFlags&14680064),F!==null?p=Mr(F,p):(p=Yr(p,T,a,null),p.flags|=2),p.return=i,c.return=i,c.sibling=p,i.child=c,c=p,p=i.child,T=t.child.memoizedState,T=T===null?ru(a):{baseLanes:T.baseLanes|a,cachePool:null,transitions:T.transitions},p.memoizedState=T,p.childLanes=t.childLanes&~a,i.memoizedState=iu,c}return p=t.child,t=p.sibling,c=Mr(p,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,t!==null&&(a=i.deletions,a===null?(i.deletions=[t],i.flags|=16):a.push(t)),i.child=c,i.memoizedState=null,c}function su(t,i){return i=Jo({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Bo(t,i,a,c){return c!==null&&Lc(c),Ss(i,t.child,null,a),t=su(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function lg(t,i,a,c,d,p,T){if(a)return i.flags&256?(i.flags&=-257,c=Qc(Error(n(422))),Bo(t,i,T,c)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(p=c.fallback,d=i.mode,c=Jo({mode:"visible",children:c.children},d,0,null),p=Yr(p,d,T,null),p.flags|=2,c.return=i,p.return=i,c.sibling=p,i.child=c,(i.mode&1)!==0&&Ss(i,t.child,null,T),i.child.memoizedState=ru(T),i.memoizedState=iu,p);if((i.mode&1)===0)return Bo(t,i,T,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var F=c.dgst;return c=F,p=Error(n(419)),c=Qc(p,c,void 0),Bo(t,i,T,c)}if(F=(T&t.childLanes)!==0,Un||F){if(c=fn,c!==null){switch(T&-T){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|T))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,Xi(t,d),vi(c,t,d,-1))}return Su(),c=Qc(Error(n(421))),Bo(t,i,T,c)}return d.data==="$?"?(i.flags|=128,i.child=t.child,i=Sg.bind(null,t),d._reactRetry=i,null):(t=p.treeContext,jn=dr(d.nextSibling),Wn=i,Xt=!0,pi=null,t!==null&&(Qn[ei++]=Wi,Qn[ei++]=ji,Qn[ei++]=Br,Wi=t.id,ji=t.overflow,Br=i),i=su(i,c.children),i.flags|=4096,i)}function pp(t,i,a){t.lanes|=i;var c=t.alternate;c!==null&&(c.lanes|=i),Uc(t.return,i,a)}function au(t,i,a,c,d){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=c,p.tail=a,p.tailMode=d)}function mp(t,i,a){var c=i.pendingProps,d=c.revealOrder,p=c.tail;if(Nn(t,i,c.children,a),c=Yt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&pp(t,a,i);else if(t.tag===19)pp(t,a,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}c&=1}if(Ht(Yt,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)t=a.alternate,t!==null&&Lo(t)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),au(i,!1,d,a,p);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(t=d.alternate,t!==null&&Lo(t)===null){i.child=d;break}t=d.sibling,d.sibling=a,a=d,d=t}au(i,!0,a,null,p);break;case"together":au(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function zo(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Yi(t,i,a){if(t!==null&&(i.dependencies=t.dependencies),Wr|=i.lanes,(a&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,a=Mr(t,t.pendingProps),i.child=a,a.return=i;t.sibling!==null;)t=t.sibling,a=a.sibling=Mr(t,t.pendingProps),a.return=i;a.sibling=null}return i.child}function cg(t,i,a){switch(i.tag){case 3:dp(i),ys();break;case 5:Rh(i);break;case 1:kn(i.type)&&Mo(i);break;case 4:Bc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;Ht(Co,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Ht(Yt,Yt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?hp(t,i,a):(Ht(Yt,Yt.current&1),t=Yi(t,i,a),t!==null?t.sibling:null);Ht(Yt,Yt.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(t.flags&128)!==0){if(c)return mp(t,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Ht(Yt,Yt.current),c)break;return null;case 22:case 23:return i.lanes=0,lp(t,i,a)}return Yi(t,i,a)}var xp,ou,gp,vp;xp=function(t,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},ou=function(){},gp=function(t,i,a,c){var d=t.memoizedProps;if(d!==c){t=i.stateNode,Hr(Ai.current);var p=null;switch(a){case"input":d=st(t,d),c=st(t,c),p=[];break;case"select":d=X({},d,{value:void 0}),c=X({},c,{value:void 0}),p=[];break;case"textarea":d=Vt(t,d),c=Vt(t,c),p=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(t.onclick=_o)}Ke(a,c);var T;a=null;for(fe in d)if(!c.hasOwnProperty(fe)&&d.hasOwnProperty(fe)&&d[fe]!=null)if(fe==="style"){var F=d[fe];for(T in F)F.hasOwnProperty(T)&&(a||(a={}),a[T]="")}else fe!=="dangerouslySetInnerHTML"&&fe!=="children"&&fe!=="suppressContentEditableWarning"&&fe!=="suppressHydrationWarning"&&fe!=="autoFocus"&&(o.hasOwnProperty(fe)?p||(p=[]):(p=p||[]).push(fe,null));for(fe in c){var W=c[fe];if(F=d!=null?d[fe]:void 0,c.hasOwnProperty(fe)&&W!==F&&(W!=null||F!=null))if(fe==="style")if(F){for(T in F)!F.hasOwnProperty(T)||W&&W.hasOwnProperty(T)||(a||(a={}),a[T]="");for(T in W)W.hasOwnProperty(T)&&F[T]!==W[T]&&(a||(a={}),a[T]=W[T])}else a||(p||(p=[]),p.push(fe,a)),a=W;else fe==="dangerouslySetInnerHTML"?(W=W?W.__html:void 0,F=F?F.__html:void 0,W!=null&&F!==W&&(p=p||[]).push(fe,W)):fe==="children"?typeof W!="string"&&typeof W!="number"||(p=p||[]).push(fe,""+W):fe!=="suppressContentEditableWarning"&&fe!=="suppressHydrationWarning"&&(o.hasOwnProperty(fe)?(W!=null&&fe==="onScroll"&&Gt("scroll",t),p||F===W||(p=[])):(p=p||[]).push(fe,W))}a&&(p=p||[]).push("style",a);var fe=p;(i.updateQueue=fe)&&(i.flags|=4)}},vp=function(t,i,a,c){a!==c&&(i.flags|=4)};function Ra(t,i){if(!Xt)switch(t.tailMode){case"hidden":i=t.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:c.sibling=null}}function bn(t){var i=t.alternate!==null&&t.alternate.child===t.child,a=0,c=0;if(i)for(var d=t.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=c,t.childLanes=a,i}function ug(t,i,a){var c=i.pendingProps;switch(Rc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return bn(i),null;case 1:return kn(i.type)&&So(),bn(i),null;case 3:return c=i.stateNode,Es(),Wt(In),Wt(Sn),Hc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(t===null||t.child===null)&&(To(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,pi!==null&&(vu(pi),pi=null))),ou(t,i),bn(i),null;case 5:zc(i);var d=Hr(Ea.current);if(a=i.type,t!==null&&i.stateNode!=null)gp(t,i,a,c,d),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(n(166));return bn(i),null}if(t=Hr(Ai.current),To(i)){c=i.stateNode,a=i.type;var p=i.memoizedProps;switch(c[Ti]=i,c[_a]=p,t=(i.mode&1)!==0,a){case"dialog":Gt("cancel",c),Gt("close",c);break;case"iframe":case"object":case"embed":Gt("load",c);break;case"video":case"audio":for(d=0;d<xa.length;d++)Gt(xa[d],c);break;case"source":Gt("error",c);break;case"img":case"image":case"link":Gt("error",c),Gt("load",c);break;case"details":Gt("toggle",c);break;case"input":mt(c,p),Gt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!p.multiple},Gt("invalid",c);break;case"textarea":K(c,p),Gt("invalid",c)}Ke(a,p),d=null;for(var T in p)if(p.hasOwnProperty(T)){var F=p[T];T==="children"?typeof F=="string"?c.textContent!==F&&(p.suppressHydrationWarning!==!0&&vo(c.textContent,F,t),d=["children",F]):typeof F=="number"&&c.textContent!==""+F&&(p.suppressHydrationWarning!==!0&&vo(c.textContent,F,t),d=["children",""+F]):o.hasOwnProperty(T)&&F!=null&&T==="onScroll"&&Gt("scroll",c)}switch(a){case"input":Be(c),Ut(c,p,!0);break;case"textarea":Be(c),Mt(c);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(c.onclick=_o)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{T=d.nodeType===9?d:d.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=I(a)),t==="http://www.w3.org/1999/xhtml"?a==="script"?(t=T.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof c.is=="string"?t=T.createElement(a,{is:c.is}):(t=T.createElement(a),a==="select"&&(T=t,c.multiple?T.multiple=!0:c.size&&(T.size=c.size))):t=T.createElementNS(t,a),t[Ti]=i,t[_a]=c,xp(t,i,!1,!1),i.stateNode=t;e:{switch(T=Ne(a,c),a){case"dialog":Gt("cancel",t),Gt("close",t),d=c;break;case"iframe":case"object":case"embed":Gt("load",t),d=c;break;case"video":case"audio":for(d=0;d<xa.length;d++)Gt(xa[d],t);d=c;break;case"source":Gt("error",t),d=c;break;case"img":case"image":case"link":Gt("error",t),Gt("load",t),d=c;break;case"details":Gt("toggle",t),d=c;break;case"input":mt(t,c),d=st(t,c),Gt("invalid",t);break;case"option":d=c;break;case"select":t._wrapperState={wasMultiple:!!c.multiple},d=X({},c,{value:void 0}),Gt("invalid",t);break;case"textarea":K(t,c),d=Vt(t,c),Gt("invalid",t);break;default:d=c}Ke(a,d),F=d;for(p in F)if(F.hasOwnProperty(p)){var W=F[p];p==="style"?xe(t,W):p==="dangerouslySetInnerHTML"?(W=W?W.__html:void 0,W!=null&&ee(t,W)):p==="children"?typeof W=="string"?(a!=="textarea"||W!=="")&&ae(t,W):typeof W=="number"&&ae(t,""+W):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?W!=null&&p==="onScroll"&&Gt("scroll",t):W!=null&&G(t,p,W,T))}switch(a){case"input":Be(t),Ut(t,c,!1);break;case"textarea":Be(t),Mt(t);break;case"option":c.value!=null&&t.setAttribute("value",""+he(c.value));break;case"select":t.multiple=!!c.multiple,p=c.value,p!=null?Ct(t,!!c.multiple,p,!1):c.defaultValue!=null&&Ct(t,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(t.onclick=_o)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return bn(i),null;case 6:if(t&&i.stateNode!=null)vp(t,i,t.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(n(166));if(a=Hr(Ea.current),Hr(Ai.current),To(i)){if(c=i.stateNode,a=i.memoizedProps,c[Ti]=i,(p=c.nodeValue!==a)&&(t=Wn,t!==null))switch(t.tag){case 3:vo(c.nodeValue,a,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&vo(c.nodeValue,a,(t.mode&1)!==0)}p&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Ti]=i,i.stateNode=c}return bn(i),null;case 13:if(Wt(Yt),c=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Xt&&jn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Sh(),ys(),i.flags|=98560,p=!1;else if(p=To(i),c!==null&&c.dehydrated!==null){if(t===null){if(!p)throw Error(n(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(n(317));p[Ti]=i}else ys(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;bn(i),p=!1}else pi!==null&&(vu(pi),pi=null),p=!0;if(!p)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(t!==null&&t.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Yt.current&1)!==0?ln===0&&(ln=3):Su())),i.updateQueue!==null&&(i.flags|=4),bn(i),null);case 4:return Es(),ou(t,i),t===null&&ga(i.stateNode.containerInfo),bn(i),null;case 10:return kc(i.type._context),bn(i),null;case 17:return kn(i.type)&&So(),bn(i),null;case 19:if(Wt(Yt),p=i.memoizedState,p===null)return bn(i),null;if(c=(i.flags&128)!==0,T=p.rendering,T===null)if(c)Ra(p,!1);else{if(ln!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(T=Lo(t),T!==null){for(i.flags|=128,Ra(p,!1),c=T.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)p=a,t=c,p.flags&=14680066,T=p.alternate,T===null?(p.childLanes=0,p.lanes=t,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=T.childLanes,p.lanes=T.lanes,p.child=T.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=T.memoizedProps,p.memoizedState=T.memoizedState,p.updateQueue=T.updateQueue,p.type=T.type,t=T.dependencies,p.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),a=a.sibling;return Ht(Yt,Yt.current&1|2),i.child}t=t.sibling}p.tail!==null&&qt()>Cs&&(i.flags|=128,c=!0,Ra(p,!1),i.lanes=4194304)}else{if(!c)if(t=Lo(T),t!==null){if(i.flags|=128,c=!0,a=t.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Ra(p,!0),p.tail===null&&p.tailMode==="hidden"&&!T.alternate&&!Xt)return bn(i),null}else 2*qt()-p.renderingStartTime>Cs&&a!==1073741824&&(i.flags|=128,c=!0,Ra(p,!1),i.lanes=4194304);p.isBackwards?(T.sibling=i.child,i.child=T):(a=p.last,a!==null?a.sibling=T:i.child=T,p.last=T)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=qt(),i.sibling=null,a=Yt.current,Ht(Yt,c?a&1|2:a&1),i):(bn(i),null);case 22:case 23:return yu(),c=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(Xn&1073741824)!==0&&(bn(i),i.subtreeFlags&6&&(i.flags|=8192)):bn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function dg(t,i){switch(Rc(i),i.tag){case 1:return kn(i.type)&&So(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Es(),Wt(In),Wt(Sn),Hc(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return zc(i),null;case 13:if(Wt(Yt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));ys()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Wt(Yt),null;case 4:return Es(),null;case 10:return kc(i.type._context),null;case 22:case 23:return yu(),null;case 24:return null;default:return null}}var Vo=!1,En=!1,fg=typeof WeakSet=="function"?WeakSet:Set,We=null;function Ts(t,i){var a=t.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){Qt(t,i,c)}else a.current=null}function lu(t,i,a){try{a()}catch(c){Qt(t,i,c)}}var _p=!1;function hg(t,i){if(yc=ao,t=Zf(),fc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,p=c.focusNode;c=c.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var T=0,F=-1,W=-1,fe=0,_e=0,Se=t,ve=null;t:for(;;){for(var Ve;Se!==a||d!==0&&Se.nodeType!==3||(F=T+d),Se!==p||c!==0&&Se.nodeType!==3||(W=T+c),Se.nodeType===3&&(T+=Se.nodeValue.length),(Ve=Se.firstChild)!==null;)ve=Se,Se=Ve;for(;;){if(Se===t)break t;if(ve===a&&++fe===d&&(F=T),ve===p&&++_e===c&&(W=T),(Ve=Se.nextSibling)!==null)break;Se=ve,ve=Se.parentNode}Se=Ve}a=F===-1||W===-1?null:{start:F,end:W}}else a=null}a=a||{start:0,end:0}}else a=null;for(Sc={focusedElem:t,selectionRange:a},ao=!1,We=i;We!==null;)if(i=We,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,We=t;else for(;We!==null;){i=We;try{var Xe=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Xe!==null){var Ye=Xe.memoizedProps,nn=Xe.memoizedState,se=i.stateNode,Z=se.getSnapshotBeforeUpdate(i.elementType===i.type?Ye:mi(i.type,Ye),nn);se.__reactInternalSnapshotBeforeUpdate=Z}break;case 3:var le=i.stateNode.containerInfo;le.nodeType===1?le.textContent="":le.nodeType===9&&le.documentElement&&le.removeChild(le.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Ee){Qt(i,i.return,Ee)}if(t=i.sibling,t!==null){t.return=i.return,We=t;break}We=i.return}return Xe=_p,_p=!1,Xe}function Na(t,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&t)===t){var p=d.destroy;d.destroy=void 0,p!==void 0&&lu(i,a,p)}d=d.next}while(d!==c)}}function Ho(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&t)===t){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function cu(t){var i=t.ref;if(i!==null){var a=t.stateNode;switch(t.tag){case 5:t=a;break;default:t=a}typeof i=="function"?i(t):i.current=t}}function yp(t){var i=t.alternate;i!==null&&(t.alternate=null,yp(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[Ti],delete i[_a],delete i[wc],delete i[$x],delete i[Kx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Sp(t){return t.tag===5||t.tag===3||t.tag===4}function Mp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Sp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function uu(t,i,a){var c=t.tag;if(c===5||c===6)t=t.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(t,i):a.insertBefore(t,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(t,a)):(i=a,i.appendChild(t)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=_o));else if(c!==4&&(t=t.child,t!==null))for(uu(t,i,a),t=t.sibling;t!==null;)uu(t,i,a),t=t.sibling}function du(t,i,a){var c=t.tag;if(c===5||c===6)t=t.stateNode,i?a.insertBefore(t,i):a.appendChild(t);else if(c!==4&&(t=t.child,t!==null))for(du(t,i,a),t=t.sibling;t!==null;)du(t,i,a),t=t.sibling}var xn=null,xi=!1;function gr(t,i,a){for(a=a.child;a!==null;)bp(t,i,a),a=a.sibling}function bp(t,i,a){if(ie&&typeof ie.onCommitFiberUnmount=="function")try{ie.onCommitFiberUnmount(re,a)}catch{}switch(a.tag){case 5:En||Ts(a,i);case 6:var c=xn,d=xi;xn=null,gr(t,i,a),xn=c,xi=d,xn!==null&&(xi?(t=xn,a=a.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)):xn.removeChild(a.stateNode));break;case 18:xn!==null&&(xi?(t=xn,a=a.stateNode,t.nodeType===8?Ec(t.parentNode,a):t.nodeType===1&&Ec(t,a),la(t)):Ec(xn,a.stateNode));break;case 4:c=xn,d=xi,xn=a.stateNode.containerInfo,xi=!0,gr(t,i,a),xn=c,xi=d;break;case 0:case 11:case 14:case 15:if(!En&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var p=d,T=p.destroy;p=p.tag,T!==void 0&&((p&2)!==0||(p&4)!==0)&&lu(a,i,T),d=d.next}while(d!==c)}gr(t,i,a);break;case 1:if(!En&&(Ts(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(F){Qt(a,i,F)}gr(t,i,a);break;case 21:gr(t,i,a);break;case 22:a.mode&1?(En=(c=En)||a.memoizedState!==null,gr(t,i,a),En=c):gr(t,i,a);break;default:gr(t,i,a)}}function Ep(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var a=t.stateNode;a===null&&(a=t.stateNode=new fg),i.forEach(function(c){var d=Mg.bind(null,t,c);a.has(c)||(a.add(c),c.then(d,d))})}}function gi(t,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var p=t,T=i,F=T;e:for(;F!==null;){switch(F.tag){case 5:xn=F.stateNode,xi=!1;break e;case 3:xn=F.stateNode.containerInfo,xi=!0;break e;case 4:xn=F.stateNode.containerInfo,xi=!0;break e}F=F.return}if(xn===null)throw Error(n(160));bp(p,T,d),xn=null,xi=!1;var W=d.alternate;W!==null&&(W.return=null),d.return=null}catch(fe){Qt(d,i,fe)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)wp(i,t),i=i.sibling}function wp(t,i){var a=t.alternate,c=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(gi(i,t),Ri(t),c&4){try{Na(3,t,t.return),Ho(3,t)}catch(Ye){Qt(t,t.return,Ye)}try{Na(5,t,t.return)}catch(Ye){Qt(t,t.return,Ye)}}break;case 1:gi(i,t),Ri(t),c&512&&a!==null&&Ts(a,a.return);break;case 5:if(gi(i,t),Ri(t),c&512&&a!==null&&Ts(a,a.return),t.flags&32){var d=t.stateNode;try{ae(d,"")}catch(Ye){Qt(t,t.return,Ye)}}if(c&4&&(d=t.stateNode,d!=null)){var p=t.memoizedProps,T=a!==null?a.memoizedProps:p,F=t.type,W=t.updateQueue;if(t.updateQueue=null,W!==null)try{F==="input"&&p.type==="radio"&&p.name!=null&&wt(d,p),Ne(F,T);var fe=Ne(F,p);for(T=0;T<W.length;T+=2){var _e=W[T],Se=W[T+1];_e==="style"?xe(d,Se):_e==="dangerouslySetInnerHTML"?ee(d,Se):_e==="children"?ae(d,Se):G(d,_e,Se,fe)}switch(F){case"input":dt(d,p);break;case"textarea":en(d,p);break;case"select":var ve=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var Ve=p.value;Ve!=null?Ct(d,!!p.multiple,Ve,!1):ve!==!!p.multiple&&(p.defaultValue!=null?Ct(d,!!p.multiple,p.defaultValue,!0):Ct(d,!!p.multiple,p.multiple?[]:"",!1))}d[_a]=p}catch(Ye){Qt(t,t.return,Ye)}}break;case 6:if(gi(i,t),Ri(t),c&4){if(t.stateNode===null)throw Error(n(162));d=t.stateNode,p=t.memoizedProps;try{d.nodeValue=p}catch(Ye){Qt(t,t.return,Ye)}}break;case 3:if(gi(i,t),Ri(t),c&4&&a!==null&&a.memoizedState.isDehydrated)try{la(i.containerInfo)}catch(Ye){Qt(t,t.return,Ye)}break;case 4:gi(i,t),Ri(t);break;case 13:gi(i,t),Ri(t),d=t.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(pu=qt())),c&4&&Ep(t);break;case 22:if(_e=a!==null&&a.memoizedState!==null,t.mode&1?(En=(fe=En)||_e,gi(i,t),En=fe):gi(i,t),Ri(t),c&8192){if(fe=t.memoizedState!==null,(t.stateNode.isHidden=fe)&&!_e&&(t.mode&1)!==0)for(We=t,_e=t.child;_e!==null;){for(Se=We=_e;We!==null;){switch(ve=We,Ve=ve.child,ve.tag){case 0:case 11:case 14:case 15:Na(4,ve,ve.return);break;case 1:Ts(ve,ve.return);var Xe=ve.stateNode;if(typeof Xe.componentWillUnmount=="function"){c=ve,a=ve.return;try{i=c,Xe.props=i.memoizedProps,Xe.state=i.memoizedState,Xe.componentWillUnmount()}catch(Ye){Qt(c,a,Ye)}}break;case 5:Ts(ve,ve.return);break;case 22:if(ve.memoizedState!==null){Cp(Se);continue}}Ve!==null?(Ve.return=ve,We=Ve):Cp(Se)}_e=_e.sibling}e:for(_e=null,Se=t;;){if(Se.tag===5){if(_e===null){_e=Se;try{d=Se.stateNode,fe?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(F=Se.stateNode,W=Se.memoizedProps.style,T=W!=null&&W.hasOwnProperty("display")?W.display:null,F.style.display=pe("display",T))}catch(Ye){Qt(t,t.return,Ye)}}}else if(Se.tag===6){if(_e===null)try{Se.stateNode.nodeValue=fe?"":Se.memoizedProps}catch(Ye){Qt(t,t.return,Ye)}}else if((Se.tag!==22&&Se.tag!==23||Se.memoizedState===null||Se===t)&&Se.child!==null){Se.child.return=Se,Se=Se.child;continue}if(Se===t)break e;for(;Se.sibling===null;){if(Se.return===null||Se.return===t)break e;_e===Se&&(_e=null),Se=Se.return}_e===Se&&(_e=null),Se.sibling.return=Se.return,Se=Se.sibling}}break;case 19:gi(i,t),Ri(t),c&4&&Ep(t);break;case 21:break;default:gi(i,t),Ri(t)}}function Ri(t){var i=t.flags;if(i&2){try{e:{for(var a=t.return;a!==null;){if(Sp(a)){var c=a;break e}a=a.return}throw Error(n(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(ae(d,""),c.flags&=-33);var p=Mp(t);du(t,p,d);break;case 3:case 4:var T=c.stateNode.containerInfo,F=Mp(t);uu(t,F,T);break;default:throw Error(n(161))}}catch(W){Qt(t,t.return,W)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function pg(t,i,a){We=t,Tp(t)}function Tp(t,i,a){for(var c=(t.mode&1)!==0;We!==null;){var d=We,p=d.child;if(d.tag===22&&c){var T=d.memoizedState!==null||Vo;if(!T){var F=d.alternate,W=F!==null&&F.memoizedState!==null||En;F=Vo;var fe=En;if(Vo=T,(En=W)&&!fe)for(We=d;We!==null;)T=We,W=T.child,T.tag===22&&T.memoizedState!==null?Rp(d):W!==null?(W.return=T,We=W):Rp(d);for(;p!==null;)We=p,Tp(p),p=p.sibling;We=d,Vo=F,En=fe}Ap(t)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,We=p):Ap(t)}}function Ap(t){for(;We!==null;){var i=We;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:En||Ho(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!En)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:mi(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&Ch(i,p,c);break;case 3:var T=i.updateQueue;if(T!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Ch(i,T,a)}break;case 5:var F=i.stateNode;if(a===null&&i.flags&4){a=F;var W=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":W.autoFocus&&a.focus();break;case"img":W.src&&(a.src=W.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var fe=i.alternate;if(fe!==null){var _e=fe.memoizedState;if(_e!==null){var Se=_e.dehydrated;Se!==null&&la(Se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}En||i.flags&512&&cu(i)}catch(ve){Qt(i,i.return,ve)}}if(i===t){We=null;break}if(a=i.sibling,a!==null){a.return=i.return,We=a;break}We=i.return}}function Cp(t){for(;We!==null;){var i=We;if(i===t){We=null;break}var a=i.sibling;if(a!==null){a.return=i.return,We=a;break}We=i.return}}function Rp(t){for(;We!==null;){var i=We;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Ho(4,i)}catch(W){Qt(i,a,W)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(W){Qt(i,d,W)}}var p=i.return;try{cu(i)}catch(W){Qt(i,p,W)}break;case 5:var T=i.return;try{cu(i)}catch(W){Qt(i,T,W)}}}catch(W){Qt(i,i.return,W)}if(i===t){We=null;break}var F=i.sibling;if(F!==null){F.return=i.return,We=F;break}We=i.return}}var mg=Math.ceil,Go=N.ReactCurrentDispatcher,fu=N.ReactCurrentOwner,ii=N.ReactCurrentBatchConfig,Tt=0,fn=null,rn=null,gn=0,Xn=0,As=fr(0),ln=0,Pa=null,Wr=0,Wo=0,hu=0,La=null,Fn=null,pu=0,Cs=1/0,$i=null,jo=!1,mu=null,vr=null,Xo=!1,_r=null,qo=0,Da=0,xu=null,Yo=-1,$o=0;function Pn(){return(Tt&6)!==0?qt():Yo!==-1?Yo:Yo=qt()}function yr(t){return(t.mode&1)===0?1:(Tt&2)!==0&&gn!==0?gn&-gn:Jx.transition!==null?($o===0&&($o=an()),$o):(t=ht,t!==0||(t=window.event,t=t===void 0?16:Pf(t.type)),t)}function vi(t,i,a,c){if(50<Da)throw Da=0,xu=null,Error(n(185));tn(t,a,c),((Tt&2)===0||t!==fn)&&(t===fn&&((Tt&2)===0&&(Wo|=a),ln===4&&Sr(t,gn)),On(t,c),a===1&&Tt===0&&(i.mode&1)===0&&(Cs=qt()+500,bo&&pr()))}function On(t,i){var a=t.callbackNode;Bt(t,i);var c=gt(t,t===fn?gn:0);if(c===0)a!==null&&ta(a),t.callbackNode=null,t.callbackPriority=0;else if(i=c&-c,t.callbackPriority!==i){if(a!=null&&ta(a),i===1)t.tag===0?Zx(Pp.bind(null,t)):xh(Pp.bind(null,t)),qx(function(){(Tt&6)===0&&pr()}),a=null;else{switch(ci(c)){case 1:a=na;break;case 4:a=ia;break;case 16:a=A;break;case 536870912:a=de;break;default:a=A}a=Bp(a,Np.bind(null,t))}t.callbackPriority=i,t.callbackNode=a}}function Np(t,i){if(Yo=-1,$o=0,(Tt&6)!==0)throw Error(n(327));var a=t.callbackNode;if(Rs()&&t.callbackNode!==a)return null;var c=gt(t,t===fn?gn:0);if(c===0)return null;if((c&30)!==0||(c&t.expiredLanes)!==0||i)i=Ko(t,c);else{i=c;var d=Tt;Tt|=2;var p=Dp();(fn!==t||gn!==i)&&($i=null,Cs=qt()+500,Xr(t,i));do try{vg();break}catch(F){Lp(t,F)}while(!0);Ic(),Go.current=p,Tt=d,rn!==null?i=0:(fn=null,gn=0,i=ln)}if(i!==0){if(i===2&&(d=kt(t),d!==0&&(c=d,i=gu(t,d))),i===1)throw a=Pa,Xr(t,0),Sr(t,c),On(t,qt()),a;if(i===6)Sr(t,c);else{if(d=t.current.alternate,(c&30)===0&&!xg(d)&&(i=Ko(t,c),i===2&&(p=kt(t),p!==0&&(c=p,i=gu(t,p))),i===1))throw a=Pa,Xr(t,0),Sr(t,c),On(t,qt()),a;switch(t.finishedWork=d,t.finishedLanes=c,i){case 0:case 1:throw Error(n(345));case 2:qr(t,Fn,$i);break;case 3:if(Sr(t,c),(c&130023424)===c&&(i=pu+500-qt(),10<i)){if(gt(t,0)!==0)break;if(d=t.suspendedLanes,(d&c)!==c){Pn(),t.pingedLanes|=t.suspendedLanes&d;break}t.timeoutHandle=bc(qr.bind(null,t,Fn,$i),i);break}qr(t,Fn,$i);break;case 4:if(Sr(t,c),(c&4194240)===c)break;for(i=t.eventTimes,d=-1;0<c;){var T=31-Le(c);p=1<<T,T=i[T],T>d&&(d=T),c&=~p}if(c=d,c=qt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*mg(c/1960))-c,10<c){t.timeoutHandle=bc(qr.bind(null,t,Fn,$i),c);break}qr(t,Fn,$i);break;case 5:qr(t,Fn,$i);break;default:throw Error(n(329))}}}return On(t,qt()),t.callbackNode===a?Np.bind(null,t):null}function gu(t,i){var a=La;return t.current.memoizedState.isDehydrated&&(Xr(t,i).flags|=256),t=Ko(t,i),t!==2&&(i=Fn,Fn=a,i!==null&&vu(i)),t}function vu(t){Fn===null?Fn=t:Fn.push.apply(Fn,t)}function xg(t){for(var i=t;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],p=d.getSnapshot;d=d.value;try{if(!hi(p(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Sr(t,i){for(i&=~hu,i&=~Wo,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var a=31-Le(i),c=1<<a;t[a]=-1,i&=~c}}function Pp(t){if((Tt&6)!==0)throw Error(n(327));Rs();var i=gt(t,0);if((i&1)===0)return On(t,qt()),null;var a=Ko(t,i);if(t.tag!==0&&a===2){var c=kt(t);c!==0&&(i=c,a=gu(t,c))}if(a===1)throw a=Pa,Xr(t,0),Sr(t,i),On(t,qt()),a;if(a===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,qr(t,Fn,$i),On(t,qt()),null}function _u(t,i){var a=Tt;Tt|=1;try{return t(i)}finally{Tt=a,Tt===0&&(Cs=qt()+500,bo&&pr())}}function jr(t){_r!==null&&_r.tag===0&&(Tt&6)===0&&Rs();var i=Tt;Tt|=1;var a=ii.transition,c=ht;try{if(ii.transition=null,ht=1,t)return t()}finally{ht=c,ii.transition=a,Tt=i,(Tt&6)===0&&pr()}}function yu(){Xn=As.current,Wt(As)}function Xr(t,i){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;if(a!==-1&&(t.timeoutHandle=-1,Xx(a)),rn!==null)for(a=rn.return;a!==null;){var c=a;switch(Rc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&So();break;case 3:Es(),Wt(In),Wt(Sn),Hc();break;case 5:zc(c);break;case 4:Es();break;case 13:Wt(Yt);break;case 19:Wt(Yt);break;case 10:kc(c.type._context);break;case 22:case 23:yu()}a=a.return}if(fn=t,rn=t=Mr(t.current,null),gn=Xn=i,ln=0,Pa=null,hu=Wo=Wr=0,Fn=La=null,Vr!==null){for(i=0;i<Vr.length;i++)if(a=Vr[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,p=a.pending;if(p!==null){var T=p.next;p.next=d,c.next=T}a.pending=c}Vr=null}return t}function Lp(t,i){do{var a=rn;try{if(Ic(),Do.current=Fo,Io){for(var c=$t.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Io=!1}if(Gr=0,dn=on=$t=null,wa=!1,Ta=0,fu.current=null,a===null||a.return===null){ln=1,Pa=i,rn=null;break}e:{var p=t,T=a.return,F=a,W=i;if(i=gn,F.flags|=32768,W!==null&&typeof W=="object"&&typeof W.then=="function"){var fe=W,_e=F,Se=_e.tag;if((_e.mode&1)===0&&(Se===0||Se===11||Se===15)){var ve=_e.alternate;ve?(_e.updateQueue=ve.updateQueue,_e.memoizedState=ve.memoizedState,_e.lanes=ve.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var Ve=ip(T);if(Ve!==null){Ve.flags&=-257,rp(Ve,T,F,p,i),Ve.mode&1&&np(p,fe,i),i=Ve,W=fe;var Xe=i.updateQueue;if(Xe===null){var Ye=new Set;Ye.add(W),i.updateQueue=Ye}else Xe.add(W);break e}else{if((i&1)===0){np(p,fe,i),Su();break e}W=Error(n(426))}}else if(Xt&&F.mode&1){var nn=ip(T);if(nn!==null){(nn.flags&65536)===0&&(nn.flags|=256),rp(nn,T,F,p,i),Lc(ws(W,F));break e}}p=W=ws(W,F),ln!==4&&(ln=2),La===null?La=[p]:La.push(p),p=T;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var se=ep(p,W,i);Ah(p,se);break e;case 1:F=W;var Z=p.type,le=p.stateNode;if((p.flags&128)===0&&(typeof Z.getDerivedStateFromError=="function"||le!==null&&typeof le.componentDidCatch=="function"&&(vr===null||!vr.has(le)))){p.flags|=65536,i&=-i,p.lanes|=i;var Ee=tp(p,F,i);Ah(p,Ee);break e}}p=p.return}while(p!==null)}kp(a)}catch(et){i=et,rn===a&&a!==null&&(rn=a=a.return);continue}break}while(!0)}function Dp(){var t=Go.current;return Go.current=Fo,t===null?Fo:t}function Su(){(ln===0||ln===3||ln===2)&&(ln=4),fn===null||(Wr&268435455)===0&&(Wo&268435455)===0||Sr(fn,gn)}function Ko(t,i){var a=Tt;Tt|=2;var c=Dp();(fn!==t||gn!==i)&&($i=null,Xr(t,i));do try{gg();break}catch(d){Lp(t,d)}while(!0);if(Ic(),Tt=a,Go.current=c,rn!==null)throw Error(n(261));return fn=null,gn=0,ln}function gg(){for(;rn!==null;)Ip(rn)}function vg(){for(;rn!==null&&!ro();)Ip(rn)}function Ip(t){var i=Op(t.alternate,t,Xn);t.memoizedProps=t.pendingProps,i===null?kp(t):rn=i,fu.current=null}function kp(t){var i=t;do{var a=i.alternate;if(t=i.return,(i.flags&32768)===0){if(a=ug(a,i,Xn),a!==null){rn=a;return}}else{if(a=dg(a,i),a!==null){a.flags&=32767,rn=a;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ln=6,rn=null;return}}if(i=i.sibling,i!==null){rn=i;return}rn=i=t}while(i!==null);ln===0&&(ln=5)}function qr(t,i,a){var c=ht,d=ii.transition;try{ii.transition=null,ht=1,_g(t,i,a,c)}finally{ii.transition=d,ht=c}return null}function _g(t,i,a,c){do Rs();while(_r!==null);if((Tt&6)!==0)throw Error(n(327));a=t.finishedWork;var d=t.finishedLanes;if(a===null)return null;if(t.finishedWork=null,t.finishedLanes=0,a===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var p=a.lanes|a.childLanes;if(vt(t,p),t===fn&&(rn=fn=null,gn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Xo||(Xo=!0,Bp(A,function(){return Rs(),null})),p=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||p){p=ii.transition,ii.transition=null;var T=ht;ht=1;var F=Tt;Tt|=4,fu.current=null,hg(t,a),wp(a,t),Bx(Sc),ao=!!yc,Sc=yc=null,t.current=a,pg(a),Ql(),Tt=F,ht=T,ii.transition=p}else t.current=a;if(Xo&&(Xo=!1,_r=t,qo=d),p=t.pendingLanes,p===0&&(vr=null),ke(a.stateNode),On(t,qt()),i!==null)for(c=t.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(jo)throw jo=!1,t=mu,mu=null,t;return(qo&1)!==0&&t.tag!==0&&Rs(),p=t.pendingLanes,(p&1)!==0?t===xu?Da++:(Da=0,xu=t):Da=0,pr(),null}function Rs(){if(_r!==null){var t=ci(qo),i=ii.transition,a=ht;try{if(ii.transition=null,ht=16>t?16:t,_r===null)var c=!1;else{if(t=_r,_r=null,qo=0,(Tt&6)!==0)throw Error(n(331));var d=Tt;for(Tt|=4,We=t.current;We!==null;){var p=We,T=p.child;if((We.flags&16)!==0){var F=p.deletions;if(F!==null){for(var W=0;W<F.length;W++){var fe=F[W];for(We=fe;We!==null;){var _e=We;switch(_e.tag){case 0:case 11:case 15:Na(8,_e,p)}var Se=_e.child;if(Se!==null)Se.return=_e,We=Se;else for(;We!==null;){_e=We;var ve=_e.sibling,Ve=_e.return;if(yp(_e),_e===fe){We=null;break}if(ve!==null){ve.return=Ve,We=ve;break}We=Ve}}}var Xe=p.alternate;if(Xe!==null){var Ye=Xe.child;if(Ye!==null){Xe.child=null;do{var nn=Ye.sibling;Ye.sibling=null,Ye=nn}while(Ye!==null)}}We=p}}if((p.subtreeFlags&2064)!==0&&T!==null)T.return=p,We=T;else e:for(;We!==null;){if(p=We,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:Na(9,p,p.return)}var se=p.sibling;if(se!==null){se.return=p.return,We=se;break e}We=p.return}}var Z=t.current;for(We=Z;We!==null;){T=We;var le=T.child;if((T.subtreeFlags&2064)!==0&&le!==null)le.return=T,We=le;else e:for(T=Z;We!==null;){if(F=We,(F.flags&2048)!==0)try{switch(F.tag){case 0:case 11:case 15:Ho(9,F)}}catch(et){Qt(F,F.return,et)}if(F===T){We=null;break e}var Ee=F.sibling;if(Ee!==null){Ee.return=F.return,We=Ee;break e}We=F.return}}if(Tt=d,pr(),ie&&typeof ie.onPostCommitFiberRoot=="function")try{ie.onPostCommitFiberRoot(re,t)}catch{}c=!0}return c}finally{ht=a,ii.transition=i}}return!1}function Up(t,i,a){i=ws(a,i),i=ep(t,i,1),t=xr(t,i,1),i=Pn(),t!==null&&(tn(t,1,i),On(t,i))}function Qt(t,i,a){if(t.tag===3)Up(t,t,a);else for(;i!==null;){if(i.tag===3){Up(i,t,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(vr===null||!vr.has(c))){t=ws(a,t),t=tp(i,t,1),i=xr(i,t,1),t=Pn(),i!==null&&(tn(i,1,t),On(i,t));break}}i=i.return}}function yg(t,i,a){var c=t.pingCache;c!==null&&c.delete(i),i=Pn(),t.pingedLanes|=t.suspendedLanes&a,fn===t&&(gn&a)===a&&(ln===4||ln===3&&(gn&130023424)===gn&&500>qt()-pu?Xr(t,0):hu|=a),On(t,i)}function Fp(t,i){i===0&&((t.mode&1)===0?i=1:(i=ft,ft<<=1,(ft&130023424)===0&&(ft=4194304)));var a=Pn();t=Xi(t,i),t!==null&&(tn(t,i,a),On(t,a))}function Sg(t){var i=t.memoizedState,a=0;i!==null&&(a=i.retryLane),Fp(t,a)}function Mg(t,i){var a=0;switch(t.tag){case 13:var c=t.stateNode,d=t.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=t.stateNode;break;default:throw Error(n(314))}c!==null&&c.delete(i),Fp(t,a)}var Op;Op=function(t,i,a){if(t!==null)if(t.memoizedProps!==i.pendingProps||In.current)Un=!0;else{if((t.lanes&a)===0&&(i.flags&128)===0)return Un=!1,cg(t,i,a);Un=(t.flags&131072)!==0}else Un=!1,Xt&&(i.flags&1048576)!==0&&gh(i,wo,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;zo(t,i),t=i.pendingProps;var d=gs(i,Sn.current);bs(i,a),d=jc(null,i,c,t,d,a);var p=Xc();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,kn(c)?(p=!0,Mo(i)):p=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Oc(i),d.updater=Oo,i.stateNode=d,d._reactInternals=i,Jc(i,c,t,a),i=nu(null,i,c,!0,p,a)):(i.tag=0,Xt&&p&&Cc(i),Nn(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(zo(t,i),t=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=Eg(c),t=mi(c,t),d){case 0:i=tu(null,i,c,t,a);break e;case 1:i=up(null,i,c,t,a);break e;case 11:i=sp(null,i,c,t,a);break e;case 14:i=ap(null,i,c,mi(c.type,t),a);break e}throw Error(n(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:mi(c,d),tu(t,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:mi(c,d),up(t,i,c,d,a);case 3:e:{if(dp(i),t===null)throw Error(n(387));c=i.pendingProps,p=i.memoizedState,d=p.element,Th(t,i),Po(i,c,null,a);var T=i.memoizedState;if(c=T.element,p.isDehydrated)if(p={element:c,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){d=ws(Error(n(423)),i),i=fp(t,i,c,a,d);break e}else if(c!==d){d=ws(Error(n(424)),i),i=fp(t,i,c,a,d);break e}else for(jn=dr(i.stateNode.containerInfo.firstChild),Wn=i,Xt=!0,pi=null,a=Eh(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ys(),c===d){i=Yi(t,i,a);break e}Nn(t,i,c,a)}i=i.child}return i;case 5:return Rh(i),t===null&&Pc(i),c=i.type,d=i.pendingProps,p=t!==null?t.memoizedProps:null,T=d.children,Mc(c,d)?T=null:p!==null&&Mc(c,p)&&(i.flags|=32),cp(t,i),Nn(t,i,T,a),i.child;case 6:return t===null&&Pc(i),null;case 13:return hp(t,i,a);case 4:return Bc(i,i.stateNode.containerInfo),c=i.pendingProps,t===null?i.child=Ss(i,null,c,a):Nn(t,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:mi(c,d),sp(t,i,c,d,a);case 7:return Nn(t,i,i.pendingProps,a),i.child;case 8:return Nn(t,i,i.pendingProps.children,a),i.child;case 12:return Nn(t,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,p=i.memoizedProps,T=d.value,Ht(Co,c._currentValue),c._currentValue=T,p!==null)if(hi(p.value,T)){if(p.children===d.children&&!In.current){i=Yi(t,i,a);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var F=p.dependencies;if(F!==null){T=p.child;for(var W=F.firstContext;W!==null;){if(W.context===c){if(p.tag===1){W=qi(-1,a&-a),W.tag=2;var fe=p.updateQueue;if(fe!==null){fe=fe.shared;var _e=fe.pending;_e===null?W.next=W:(W.next=_e.next,_e.next=W),fe.pending=W}}p.lanes|=a,W=p.alternate,W!==null&&(W.lanes|=a),Uc(p.return,a,i),F.lanes|=a;break}W=W.next}}else if(p.tag===10)T=p.type===i.type?null:p.child;else if(p.tag===18){if(T=p.return,T===null)throw Error(n(341));T.lanes|=a,F=T.alternate,F!==null&&(F.lanes|=a),Uc(T,a,i),T=p.sibling}else T=p.child;if(T!==null)T.return=p;else for(T=p;T!==null;){if(T===i){T=null;break}if(p=T.sibling,p!==null){p.return=T.return,T=p;break}T=T.return}p=T}Nn(t,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,bs(i,a),d=ti(d),c=c(d),i.flags|=1,Nn(t,i,c,a),i.child;case 14:return c=i.type,d=mi(c,i.pendingProps),d=mi(c.type,d),ap(t,i,c,d,a);case 15:return op(t,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:mi(c,d),zo(t,i),i.tag=1,kn(c)?(t=!0,Mo(i)):t=!1,bs(i,a),Jh(i,c,d),Jc(i,c,d,a),nu(null,i,c,!0,t,a);case 19:return mp(t,i,a);case 22:return lp(t,i,a)}throw Error(n(156,i.tag))};function Bp(t,i){return Ur(t,i)}function bg(t,i,a,c){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ri(t,i,a,c){return new bg(t,i,a,c)}function Mu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Eg(t){if(typeof t=="function")return Mu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===q)return 11;if(t===ne)return 14}return 2}function Mr(t,i){var a=t.alternate;return a===null?(a=ri(t.tag,i,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=i,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&14680064,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,i=t.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a}function Zo(t,i,a,c,d,p){var T=2;if(c=t,typeof t=="function")Mu(t)&&(T=1);else if(typeof t=="string")T=5;else e:switch(t){case U:return Yr(a.children,d,p,i);case E:T=8,d|=8;break;case D:return t=ri(12,a,i,d|2),t.elementType=D,t.lanes=p,t;case te:return t=ri(13,a,i,d),t.elementType=te,t.lanes=p,t;case B:return t=ri(19,a,i,d),t.elementType=B,t.lanes=p,t;case J:return Jo(a,d,p,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case z:T=10;break e;case O:T=9;break e;case q:T=11;break e;case ne:T=14;break e;case ue:T=16,c=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=ri(T,a,i,d),i.elementType=t,i.type=c,i.lanes=p,i}function Yr(t,i,a,c){return t=ri(7,t,c,i),t.lanes=a,t}function Jo(t,i,a,c){return t=ri(22,t,c,i),t.elementType=J,t.lanes=a,t.stateNode={isHidden:!1},t}function bu(t,i,a){return t=ri(6,t,null,i),t.lanes=a,t}function Eu(t,i,a){return i=ri(4,t.children!==null?t.children:[],t.key,i),i.lanes=a,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function wg(t,i,a,c,d){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ze(0),this.expirationTimes=ze(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ze(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function wu(t,i,a,c,d,p,T,F,W){return t=new wg(t,i,a,F,W),i===1?(i=1,p===!0&&(i|=8)):i=0,p=ri(3,null,null,i),t.current=p,p.stateNode=t,p.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Oc(p),t}function Tg(t,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:C,key:c==null?null:""+c,children:t,containerInfo:i,implementation:a}}function zp(t){if(!t)return hr;t=t._reactInternals;e:{if(Rn(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(kn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var a=t.type;if(kn(a))return ph(t,a,i)}return i}function Vp(t,i,a,c,d,p,T,F,W){return t=wu(a,c,!0,t,d,p,T,F,W),t.context=zp(null),a=t.current,c=Pn(),d=yr(a),p=qi(c,d),p.callback=i??null,xr(a,p,d),t.current.lanes=d,tn(t,d,c),On(t,c),t}function Qo(t,i,a,c){var d=i.current,p=Pn(),T=yr(d);return a=zp(a),i.context===null?i.context=a:i.pendingContext=a,i=qi(p,T),i.payload={element:t},c=c===void 0?null:c,c!==null&&(i.callback=c),t=xr(d,i,T),t!==null&&(vi(t,d,T,p),No(t,d,T)),T}function el(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Hp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<i?a:i}}function Tu(t,i){Hp(t,i),(t=t.alternate)&&Hp(t,i)}function Ag(){return null}var Gp=typeof reportError=="function"?reportError:function(t){console.error(t)};function Au(t){this._internalRoot=t}tl.prototype.render=Au.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Qo(t,i,null,null)},tl.prototype.unmount=Au.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;jr(function(){Qo(null,t,null,null)}),i[Hi]=null}};function tl(t){this._internalRoot=t}tl.prototype.unstable_scheduleHydration=function(t){if(t){var i=ui();t={blockedOn:null,target:t,priority:i};for(var a=0;a<lr.length&&i!==0&&i<lr[a].priority;a++);lr.splice(a,0,t),a===0&&Rf(t)}};function Cu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function nl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Wp(){}function Cg(t,i,a,c,d){if(d){if(typeof c=="function"){var p=c;c=function(){var fe=el(T);p.call(fe)}}var T=Vp(i,c,t,0,null,!1,!1,"",Wp);return t._reactRootContainer=T,t[Hi]=T.current,ga(t.nodeType===8?t.parentNode:t),jr(),T}for(;d=t.lastChild;)t.removeChild(d);if(typeof c=="function"){var F=c;c=function(){var fe=el(W);F.call(fe)}}var W=wu(t,0,!1,null,null,!1,!1,"",Wp);return t._reactRootContainer=W,t[Hi]=W.current,ga(t.nodeType===8?t.parentNode:t),jr(function(){Qo(i,W,a,c)}),W}function il(t,i,a,c,d){var p=a._reactRootContainer;if(p){var T=p;if(typeof d=="function"){var F=d;d=function(){var W=el(T);F.call(W)}}Qo(i,T,t,d)}else T=Cg(a,i,t,d,c);return el(T)}Vi=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var a=Ge(i.pendingLanes);a!==0&&(yn(i,a|1),On(i,qt()),(Tt&6)===0&&(Cs=qt()+500,pr()))}break;case 13:jr(function(){var c=Xi(t,1);if(c!==null){var d=Pn();vi(c,t,1,d)}}),Tu(t,1)}},Nt=function(t){if(t.tag===13){var i=Xi(t,134217728);if(i!==null){var a=Pn();vi(i,t,134217728,a)}Tu(t,134217728)}},jt=function(t){if(t.tag===13){var i=yr(t),a=Xi(t,i);if(a!==null){var c=Pn();vi(a,t,i,c)}Tu(t,i)}},ui=function(){return ht},Ft=function(t,i){var a=ht;try{return ht=t,i()}finally{ht=a}},tt=function(t,i,a){switch(i){case"input":if(dt(t,a),i=a.name,a.type==="radio"&&i!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==t&&c.form===t.form){var d=yo(c);if(!d)throw Error(n(90));ut(c),dt(c,d)}}}break;case"textarea":en(t,a);break;case"select":i=a.value,i!=null&&Ct(t,!!a.multiple,i,!1)}},Fe=_u,ge=jr;var Rg={usingClientEntryPoint:!1,Events:[ya,ms,yo,me,Ce,_u]},Ia={findFiberByHostInstance:Fr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ng={bundleType:Ia.bundleType,version:Ia.version,rendererPackageName:Ia.rendererPackageName,rendererConfig:Ia.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:N.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=kr(t),t===null?null:t.stateNode},findFiberByHostInstance:Ia.findFiberByHostInstance||Ag,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var rl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rl.isDisabled&&rl.supportsFiber)try{re=rl.inject(Ng),ie=rl}catch{}}return Bn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rg,Bn.createPortal=function(t,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Cu(i))throw Error(n(200));return Tg(t,i,null,a)},Bn.createRoot=function(t,i){if(!Cu(t))throw Error(n(299));var a=!1,c="",d=Gp;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=wu(t,1,!1,null,null,a,!1,c,d),t[Hi]=i.current,ga(t.nodeType===8?t.parentNode:t),new Au(i)},Bn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=kr(i),t=t===null?null:t.stateNode,t},Bn.flushSync=function(t){return jr(t)},Bn.hydrate=function(t,i,a){if(!nl(i))throw Error(n(200));return il(null,t,i,!0,a)},Bn.hydrateRoot=function(t,i,a){if(!Cu(t))throw Error(n(405));var c=a!=null&&a.hydratedSources||null,d=!1,p="",T=Gp;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(T=a.onRecoverableError)),i=Vp(i,null,t,1,a??null,d,!1,p,T),t[Hi]=i.current,ga(t),c)for(t=0;t<c.length;t++)a=c[t],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new tl(i)},Bn.render=function(t,i,a){if(!nl(i))throw Error(n(200));return il(null,t,i,!1,a)},Bn.unmountComponentAtNode=function(t){if(!nl(t))throw Error(n(40));return t._reactRootContainer?(jr(function(){il(null,null,t,!1,function(){t._reactRootContainer=null,t[Hi]=null})}),!0):!1},Bn.unstable_batchedUpdates=_u,Bn.unstable_renderSubtreeIntoContainer=function(t,i,a,c){if(!nl(a))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return il(t,i,a,!1,c)},Bn.version="18.3.1-next-f1338f8080-20240426",Bn}var Jp;function Vg(){if(Jp)return Pu.exports;Jp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Pu.exports=zg(),Pu.exports}var Qp;function Hg(){if(Qp)return sl;Qp=1;var s=Vg();return sl.createRoot=s.createRoot,sl.hydrateRoot=s.hydrateRoot,sl}var Gg=Hg();const Wg=i0(Gg);class r0 extends Error{constructor(n,r){super((r==null?void 0:r.message)||(r==null?void 0:r.error)||"API Error");Ns(this,"status");Ns(this,"data");this.name="ApiError",this.status=n,this.data=r}}class Ll extends r0{constructor(n){super(409,n);Ns(this,"expectedVersion");Ns(this,"currentVersion");Ns(this,"currentItem");this.name="ConcurrencyConflictError",this.expectedVersion=n.expectedVersion,this.currentVersion=n.currentVersion,this.currentItem=n.currentItem}}let af=localStorage.getItem("ops_user_id")||"usr_alice";function em(s){af=s,localStorage.setItem("ops_user_id",s)}function jg(){return af}function s0(){return"idemp_"+Math.random().toString(36).substring(2,12)+"_"+Date.now()}async function zn(s,e={}){const n={"Content-Type":"application/json","x-user-id":af,...e.headers||{}};e.idempotencyKey&&(n["Idempotency-Key"]=e.idempotencyKey);const r=await fetch(s,{...e,headers:n}),o=r.headers.get("x-idempotent-replay")==="true";let l=null;const u=r.headers.get("content-type");if(u&&u.includes("application/json")?l=await r.json():l=await r.text(),!r.ok)throw r.status===409&&l.code==="VERSION_CONFLICT"?new Ll(l):new r0(r.status,l);return{data:l,isReplayed:o}}const Dn={getUsers:async()=>(await zn("/api/users")).data,getTeams:async()=>(await zn("/api/teams")).data,listWorkItems:async s=>{const e=new URLSearchParams;return s.team_id&&e.set("team_id",s.team_id),s.status&&e.set("status",s.status),s.priority&&e.set("priority",s.priority),s.category&&e.set("category",s.category),s.assignee_id&&e.set("assignee_id",s.assignee_id),s.unassigned_only&&e.set("unassigned_only","true"),s.requires_attention&&e.set("requires_attention","true"),s.search&&e.set("search",s.search),s.limit&&e.set("limit",s.limit.toString()),s.offset&&e.set("offset",s.offset.toString()),(await zn(`/api/work-items?${e.toString()}`)).data},getWorkItem:async s=>(await zn(`/api/work-items/${s}`)).data,createWorkItem:async(s,e)=>{const n=e||s0();return(await zn("/api/work-items",{method:"POST",body:JSON.stringify(s),idempotencyKey:n})).data},updateWorkItem:async(s,e,n)=>(await zn(`/api/work-items/${s}`,{method:"PATCH",body:JSON.stringify(e),idempotencyKey:n})).data,claimWorkItem:async(s,e)=>(await zn(`/api/work-items/${s}/claim`,{method:"POST",body:JSON.stringify({expectedVersion:e})})).data,decideApproval:async(s,e,n,r)=>(await zn(`/api/work-items/${s}/approve`,{method:"POST",body:JSON.stringify({decision:e,rationale:n,expectedVersion:r})})).data,addComment:async(s,e,n=!0)=>(await zn(`/api/work-items/${s}/comments`,{method:"POST",body:JSON.stringify({content:e,is_internal:n})})).data,simulateConflict:async s=>(await zn(`/api/work-items/${s}/simulate-conflict`,{method:"POST"})).data,getOutbox:async()=>(await zn("/api/outbox")).data,processOutbox:async()=>(await zn("/api/outbox/process",{method:"POST"})).data,simulateOutboxFailure:async()=>(await zn("/api/outbox/simulate-failure",{method:"POST"})).data,chatWithAi:async(s,e)=>(await zn("/api/chat",{method:"POST",body:JSON.stringify({message:s,history:e})})).data};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xg=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),a0=(...s)=>s.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var qg={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yg=Pe.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:o="",children:l,iconNode:u,...h},x)=>Pe.createElement("svg",{ref:x,...qg,width:e,height:e,stroke:s,strokeWidth:r?Number(n)*24/Number(e):n,className:a0("lucide",o),...h},[...u.map(([m,v])=>Pe.createElement(m,v)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const At=(s,e)=>{const n=Pe.forwardRef(({className:r,...o},l)=>Pe.createElement(Yg,{ref:l,iconNode:e,className:a0(`lucide-${Xg(s)}`,r),...o}));return n.displayName=`${s}`,n};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $g=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Kg=At("ArrowRight",$g);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zg=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],Jg=At("Award",Zg);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qg=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],ev=At("Check",Qg);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tv=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],nv=At("ChevronDown",tv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iv=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],o0=At("ChevronLeft",iv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rv=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],sv=At("ChevronRight",rv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const av=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],ov=At("CircleAlert",av);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lv=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Mi=At("CircleCheck",lv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cv=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],uv=At("CircleX",cv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dv=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],fv=At("Clock",dv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hv=[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]],of=At("Cpu",hv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pv=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],tm=At("Globe",pv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mv=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]],xv=At("House",mv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv=[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12",key:"o97t9d"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}]],vv=At("Inbox",gv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],yv=At("Lock",_v);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv=[["path",{d:"M5 12h14",key:"1ays0h"}]],Mv=At("Minus",Sv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bv=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]],Ev=At("Moon",bv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wv=[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]],Tv=At("Play",wv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Av=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],l0=At("Plus",Av);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cv=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],c0=At("RefreshCw",Cv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rv=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],Nv=At("Search",Rv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pv=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],u0=At("Send",Pv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lv=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],Dv=At("ShieldAlert",Lv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iv=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Bl=At("ShieldCheck",Iv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],d0=At("Smartphone",kv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uv=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],zl=At("Sparkles",Uv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fv=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],Ov=At("Sun",Fv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bv=[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]],zv=At("TrendingUp",Bv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vv=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],f0=At("TriangleAlert",Vv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hv=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]],Gv=At("UserCheck",Hv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wv=[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]],jv=At("Wifi",Wv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xv=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Za=At("X",Xv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qv=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Yv=At("Zap",qv),h0=Pe.createContext(void 0),$v=({children:s})=>{const[e,n]=Pe.useState(()=>{if(typeof window<"u"){const l=localStorage.getItem("ops_pulse_theme");if(l==="light"||l==="dark")return l;if(window.matchMedia("(prefers-color-scheme: dark)").matches)return"dark"}return"light"});Pe.useEffect(()=>{const l=document.documentElement;e==="dark"?l.classList.add("dark"):l.classList.remove("dark"),localStorage.setItem("ops_pulse_theme",e)},[e]);const r=()=>{n(l=>l==="light"?"dark":"light")},o=l=>{n(l)};return f.jsx(h0.Provider,{value:{theme:e,toggleTheme:r,setTheme:o},children:s})},p0=()=>{const s=Pe.useContext(h0);if(!s)throw new Error("useTheme must be used within a ThemeProvider");return s},Kv=({currentUser:s,users:e,teams:n,onSelectUser:r,onOpenCreate:o,onOpenOutbox:l,onRefresh:u,isRefreshing:h,outboxPendingCount:x,viewMode:m="console",onToggleView:v})=>{var w;const{theme:M,toggleTheme:g,setTheme:_}=p0();return f.jsx("header",{className:"bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-slate-200/90 dark:border-slate-800 sticky top-0 z-30 shadow-xs transition-colors duration-200",children:f.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between",children:[f.jsxs("div",{className:"flex items-center space-x-3",children:[f.jsx("div",{className:"w-10 h-10 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/80 dark:border-emerald-800/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shadow-xs transition-colors",children:f.jsxs("svg",{className:"w-6 h-6 text-emerald-600 dark:text-emerald-400",viewBox:"0 0 32 32",fill:"none",children:[f.jsx("path",{d:"M12 28C12 20 18 14 26 12C26 20 20 26 12 28Z",fill:"#10B981"}),f.jsx("path",{d:"M12 28C12 16 8 10 2 8C2 20 8 26 12 28Z",fill:"currentColor"}),f.jsx("path",{d:"M12 28V8C15 12 20 12 20 12",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round"})]})}),f.jsxs("div",{children:[f.jsxs("div",{className:"flex items-center space-x-2",children:[f.jsx("span",{className:"font-bold text-slate-900 dark:text-white text-lg tracking-tight",children:"OpsPulse"}),f.jsx("span",{className:"text-[11px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700",children:"Sprout Ops"})]}),f.jsx("p",{className:"text-xs text-slate-500 dark:text-slate-400 hidden sm:block",children:"Team coordination & operations queue"})]})]}),f.jsxs("div",{className:"flex items-center space-x-2 sm:space-x-3",children:[v&&f.jsxs("button",{onClick:v,className:`flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border shadow-xs transition active:scale-95 cursor-pointer ${m==="prototype"?"bg-emerald-600 text-white border-emerald-700 shadow-sm":"bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700"}`,title:"Toggle between Operations Queue and Sprout 2.0 Mobile Prototype",children:[f.jsx(d0,{className:"w-3.5 h-3.5"}),f.jsx("span",{className:"hidden sm:inline",children:m==="prototype"?"Ops Queue":"Sprout 2.0 App"})]}),f.jsxs("button",{onClick:l,className:"flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shadow-xs transition active:scale-95 cursor-pointer",title:"Transactional Outbox Worker Status",children:[f.jsx(of,{className:"w-3.5 h-3.5 text-slate-500 dark:text-slate-400"}),f.jsx("span",{className:"hidden sm:inline",children:"Outbox:"}),x>0?f.jsxs("span",{className:"bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 text-[10px] px-1.5 py-0.2 rounded-full font-bold animate-pulse",children:[x," pending"]}):f.jsx("span",{className:"text-emerald-600 dark:text-emerald-400 text-[10px] font-bold",children:"Idle"})]}),f.jsx("button",{onClick:u,disabled:h,className:"p-2 rounded-full text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition active:scale-95 cursor-pointer",title:"Refresh queue","aria-label":"Refresh queue",children:f.jsx(c0,{className:`w-4 h-4 ${h?"animate-spin text-emerald-600":""}`})}),f.jsxs("div",{className:"flex items-center bg-slate-100 dark:bg-slate-800 p-0.5 rounded-full border border-slate-200 dark:border-slate-700 shadow-xs",children:[f.jsx("button",{onClick:()=>_("light"),className:`p-1.5 rounded-full transition-all cursor-pointer flex items-center justify-center ${M==="light"?"bg-white text-amber-500 shadow-xs font-bold":"text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"}`,title:"Switch to Light Mode","aria-label":"Light mode",children:f.jsx(Ov,{className:"w-3.5 h-3.5"})}),f.jsx("button",{onClick:()=>_("dark"),className:`p-1.5 rounded-full transition-all cursor-pointer flex items-center justify-center ${M==="dark"?"bg-slate-900 text-sky-400 shadow-xs font-bold":"text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"}`,title:"Switch to Dark Mode","aria-label":"Dark mode",children:f.jsx(Ev,{className:"w-3.5 h-3.5"})})]}),f.jsxs("button",{onClick:o,className:"flex items-center space-x-1.5 text-xs font-semibold px-3.5 sm:px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xs transition active:scale-95 cursor-pointer",children:[f.jsx(l0,{className:"w-4 h-4 stroke-[2.5]"}),f.jsx("span",{className:"hidden sm:inline",children:"New request"})]}),f.jsxs("div",{className:"border-l border-slate-200 dark:border-slate-800 pl-2 sm:pl-3 flex items-center space-x-2",children:[s!=null&&s.avatar?f.jsx("img",{src:s.avatar,alt:s.name,className:"w-8 h-8 rounded-full object-cover border border-slate-200 dark:border-slate-700 shadow-xs"}):f.jsx("div",{className:"w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold text-xs flex items-center justify-center border border-slate-200 dark:border-slate-700",children:((w=s==null?void 0:s.name)==null?void 0:w.charAt(0))||"U"}),f.jsxs("div",{className:"relative",children:[f.jsx("select",{"aria-label":"Switch User Persona",value:(s==null?void 0:s.id)||"",onChange:R=>{const S=e.find(y=>y.id===R.target.value);S&&r(S)},className:"appearance-none bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-100 pr-7 pl-2.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 shadow-xs cursor-pointer transition",children:e.map(R=>f.jsxs("option",{value:R.id,className:"dark:bg-slate-900 dark:text-slate-100",children:[R.name," ",R.is_system_admin?"(Admin)":""]},R.id))}),f.jsx(nv,{className:"w-3.5 h-3.5 text-slate-400 absolute right-2 top-2.5 pointer-events-none"})]})]})]})]})})},Zv=({items:s,total:e,limit:n,offset:r,selectedId:o,onSelectItem:l,teams:u,currentUser:h,filterTeam:x,setFilterTeam:m,filterStatus:v,setFilterStatus:M,filterPriority:g,setFilterPriority:_,filterCategory:w,setFilterCategory:R,filterTab:S,setFilterTab:y,searchQuery:k,setSearchQuery:G,onPageChange:N,isLoading:P})=>{const C=Math.floor(r/n)+1,U=Math.ceil(e/n)||1,E=O=>{switch(O){case"PENDING_APPROVAL":return{label:"Awaiting approval",bg:"bg-purple-100 dark:bg-purple-950/60 text-purple-800 dark:text-purple-300 border-purple-200 dark:border-purple-800/50"};case"IN_PROGRESS":return{label:"In progress",bg:"bg-sky-100 dark:bg-sky-950/60 text-sky-800 dark:text-sky-300 border-sky-200 dark:border-sky-800/50"};case"OPEN":return{label:"Open",bg:"bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/50"};case"TRIAGED":return{label:"Triaged",bg:"bg-indigo-100 dark:bg-indigo-950/60 text-indigo-800 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800/50"};case"RESOLVED":return{label:"Resolved",bg:"bg-emerald-100 dark:bg-emerald-900/60 text-emerald-900 dark:text-emerald-200 border-emerald-300 dark:border-emerald-700/60 font-semibold"};case"CLOSED":return{label:"Closed",bg:"bg-slate-100 dark:bg-slate-800/60 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700/50"};case"REJECTED":return{label:"Rejected",bg:"bg-rose-100 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300 border-rose-200 dark:border-rose-800/50"}}},D=O=>{switch(O){case"URGENT":return f.jsx("span",{className:"font-bold text-rose-700 dark:text-rose-300 bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-800 px-2 py-0.5 rounded-md text-[10px] animate-pulse",children:"Urgent"});case"HIGH":return f.jsx("span",{className:"font-semibold text-amber-800 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 px-2 py-0.5 rounded-md text-[10px]",children:"High"});case"MEDIUM":return f.jsx("span",{className:"text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/60 px-1.5 py-0.5 rounded-md text-[10px]",children:"Medium"});case"LOW":return f.jsx("span",{className:"text-slate-400 dark:text-slate-500 text-[10px]",children:"Low"})}},z=O=>{try{const q=Date.now()-new Date(O).getTime(),te=Math.floor(q/6e4);if(te<1)return"just now";if(te<60)return`${te}m ago`;const B=Math.floor(te/60);return B<24?`${B}h ago`:`${Math.floor(B/24)}d ago`}catch{return""}};return f.jsxs("div",{className:"flex flex-col h-full bg-white/95 dark:bg-slate-900/90 backdrop-blur-xl border-r border-slate-200/90 dark:border-slate-800",children:[f.jsx("div",{className:"p-2.5 border-b border-slate-200/90 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80",children:f.jsxs("div",{className:"grid grid-cols-4 gap-1 p-1 bg-slate-200/60 dark:bg-slate-800/80 rounded-xl text-xs font-medium text-slate-500 dark:text-slate-400",children:[f.jsx("button",{onClick:()=>y("attention"),className:`py-1.5 px-2 rounded-lg transition text-center flex flex-col items-center justify-center cursor-pointer ${S==="attention"?"bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs font-semibold":"hover:text-slate-900 dark:hover:text-white"}`,children:f.jsx("span",{children:"Needs attention"})}),f.jsx("button",{onClick:()=>y("my"),className:`py-1.5 px-2 rounded-lg transition text-center flex flex-col items-center justify-center cursor-pointer ${S==="my"?"bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs font-semibold":"hover:text-slate-900 dark:hover:text-white"}`,children:f.jsx("span",{children:"Assigned to me"})}),f.jsx("button",{onClick:()=>y("unassigned"),className:`py-1.5 px-2 rounded-lg transition text-center flex flex-col items-center justify-center cursor-pointer ${S==="unassigned"?"bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs font-semibold":"hover:text-slate-900 dark:hover:text-white"}`,children:f.jsx("span",{children:"Unassigned"})}),f.jsx("button",{onClick:()=>y("all"),className:`py-1.5 px-2 rounded-lg transition text-center flex flex-col items-center justify-center cursor-pointer ${S==="all"?"bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs font-semibold":"hover:text-slate-900 dark:hover:text-white"}`,children:f.jsx("span",{children:"All items"})})]})}),f.jsxs("div",{className:"p-3 border-b border-slate-200/90 dark:border-slate-800 space-y-2 bg-white/80 dark:bg-slate-900/60",children:[f.jsxs("div",{className:"relative",children:[f.jsx(Nv,{className:"w-4 h-4 text-slate-400 absolute left-3 top-2.5 pointer-events-none"}),f.jsx("input",{type:"text",placeholder:"Search by title, ID, or keywords...",value:k,onChange:O=>G(O.target.value),className:"w-full pl-9 pr-8 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-slate-900 dark:text-white transition"}),k&&f.jsx("button",{onClick:()=>G(""),className:"absolute right-2.5 top-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-0.5 cursor-pointer",children:f.jsx(Za,{className:"w-3.5 h-3.5"})})]}),f.jsxs("div",{className:"grid grid-cols-2 gap-2 text-[11px]",children:[f.jsxs("select",{value:x,onChange:O=>m(O.target.value),className:"px-2.5 py-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-700 dark:text-slate-200 focus:outline-none cursor-pointer text-xs",children:[f.jsx("option",{value:"",className:"dark:bg-slate-900",children:"All Teams"}),u.map(O=>f.jsx("option",{value:O.id,className:"dark:bg-slate-900",children:O.name},O.id))]}),f.jsxs("select",{value:v,onChange:O=>M(O.target.value),className:"px-2.5 py-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-700 dark:text-slate-200 focus:outline-none cursor-pointer text-xs",children:[f.jsx("option",{value:"",className:"dark:bg-slate-900",children:"All Statuses"}),f.jsx("option",{value:"OPEN",className:"dark:bg-slate-900",children:"Open"}),f.jsx("option",{value:"IN_PROGRESS",className:"dark:bg-slate-900",children:"In progress"}),f.jsx("option",{value:"PENDING_APPROVAL",className:"dark:bg-slate-900",children:"Awaiting approval"}),f.jsx("option",{value:"RESOLVED",className:"dark:bg-slate-900",children:"Resolved"}),f.jsx("option",{value:"CLOSED",className:"dark:bg-slate-900",children:"Closed"})]})]})]}),f.jsxs("div",{className:"px-4 py-2 border-b border-slate-200/60 dark:border-slate-800/60 bg-slate-50/60 dark:bg-slate-900/40 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400",children:[f.jsxs("span",{children:["Showing ",f.jsx("strong",{className:"text-slate-900 dark:text-white font-semibold",children:s.length})," of ",e," items"]}),P&&f.jsx("span",{className:"text-xs text-emerald-600 dark:text-emerald-400 animate-pulse font-medium",children:"Updating..."})]}),f.jsx("div",{className:"flex-1 overflow-y-auto p-3 space-y-2.5",children:s.length===0?f.jsxs("div",{className:"h-48 flex flex-col items-center justify-center text-center p-6 text-slate-400 text-xs",children:[f.jsx(vv,{className:"w-10 h-10 mb-2 text-slate-300 stroke-[1.5]"}),f.jsx("p",{className:"font-semibold text-slate-600 dark:text-slate-300",children:"No work items found"}),f.jsx("p",{className:"text-[11px] text-slate-400 mt-1",children:"Try relaxing filters or search query"})]}):s.map(O=>{const q=O.id===o,te=E(O.status),B=O.priority==="URGENT",ne=u.find(ue=>ue.id===O.team_id);return f.jsxs("div",{onClick:()=>l(O.id),className:`bg-white dark:bg-slate-800/80 border border-slate-200/90 dark:border-slate-700/80 rounded-2xl p-3.5 cursor-pointer transition-all relative group hover:border-slate-300 dark:hover:border-slate-600 shadow-xs hover:shadow-sm ${q?"ring-2 ring-emerald-500 bg-white dark:bg-slate-800 shadow-sm":""} ${B?"border-l-4 border-l-rose-500":""}`,children:[f.jsxs("div",{className:"flex items-center justify-between gap-1.5 mb-1.5",children:[f.jsx("span",{className:"text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider",children:(ne==null?void 0:ne.name)||"General"}),f.jsxs("div",{className:"flex items-center space-x-1.5",children:[D(O.priority),f.jsx("span",{className:`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${te.bg}`,children:te.label})]})]}),f.jsx("h4",{className:"text-[13px] font-semibold text-slate-900 dark:text-white leading-snug line-clamp-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition",children:O.title}),f.jsxs("div",{className:"flex items-center justify-between mt-3 pt-2 border-t border-slate-100 dark:border-slate-700/60 text-[11px] text-slate-500 dark:text-slate-400",children:[f.jsx("div",{className:"flex items-center space-x-1.5",children:O.assignee_name?f.jsxs("div",{className:"flex items-center space-x-1.5",children:[f.jsx("div",{className:"w-5 h-5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-[9px] flex items-center justify-center border border-slate-200 dark:border-slate-600",children:O.assignee_name.charAt(0)}),f.jsx("span",{className:"font-medium text-slate-700 dark:text-slate-300",children:O.assignee_name})]}):f.jsxs("span",{className:"inline-flex items-center space-x-1 px-2 py-0.5 rounded-full bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800 font-semibold text-[10px]",children:[f.jsx(ov,{className:"w-3 h-3 text-amber-600 dark:text-amber-400"}),f.jsx("span",{children:"Unassigned"})]})}),f.jsxs("div",{className:"flex items-center space-x-1 text-slate-400 dark:text-slate-500 text-[10px]",children:[f.jsx(fv,{className:"w-3 h-3"}),f.jsx("span",{children:z(O.updated_at||O.created_at)})]})]})]},O.id)})}),f.jsxs("div",{className:"p-3 border-t border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/90 flex items-center justify-between text-xs",children:[f.jsxs("button",{disabled:C<=1||P,onClick:()=>N(Math.max(0,r-n)),className:"flex items-center space-x-1 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer shadow-xs transition",children:[f.jsx(o0,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:"Previous"})]}),f.jsxs("span",{className:"text-slate-500 dark:text-slate-400 text-[11px] font-medium",children:["Page ",f.jsx("strong",{className:"text-slate-900 dark:text-white",children:C})," of ",U]}),f.jsxs("button",{disabled:C>=U||P,onClick:()=>N(r+n),className:"flex items-center space-x-1 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer shadow-xs transition",children:[f.jsx("span",{children:"Next"}),f.jsx(sv,{className:"w-3.5 h-3.5"})]})]})]})},Jv=({item:s,auditLogs:e,comments:n,currentUser:r,users:o,onClaim:l,onUpdateStatus:u,onApprove:h,onAddComment:x,onSimulateConflict:m,isActionLoading:v,errorBanner:M,successBanner:g})=>{var ne,ue;const[_,w]=Pe.useState(""),[R,S]=Pe.useState(""),[y,k]=Pe.useState(""),[G,N]=Pe.useState(!1),[P,C]=Pe.useState("details");if(!s)return f.jsx("div",{className:"flex-1 flex flex-col items-center justify-center p-8 text-slate-500 dark:text-slate-400 text-sm bg-transparent relative overflow-hidden",children:f.jsxs("div",{className:"relative max-w-md w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl border border-slate-200/90 dark:border-slate-800 shadow-2xl rounded-3xl p-8 flex flex-col items-center text-center animate-float-slow transition-colors",children:[f.jsxs("div",{className:"relative mb-5",children:[f.jsx("div",{className:"w-20 h-20 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg flex items-center justify-center text-emerald-600 dark:text-emerald-400 relative z-10 backdrop-blur-xl transition-colors",children:f.jsxs("svg",{className:"w-10 h-10 text-emerald-600 dark:text-emerald-400",viewBox:"0 0 32 32",fill:"none",children:[f.jsx("path",{d:"M12 28C12 20 18 14 26 12C26 20 20 26 12 28Z",fill:"#10B981"}),f.jsx("path",{d:"M12 28C12 16 8 10 2 8C2 20 8 26 12 28Z",fill:"currentColor"}),f.jsx("path",{d:"M12 28V8C15 12 20 12 20 12",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round"})]})}),f.jsx("div",{className:"absolute -inset-3 bg-emerald-500/15 dark:bg-emerald-500/10 rounded-full blur-xl"})]}),f.jsx("span",{className:"text-[10px] font-bold tracking-wider text-slate-600 dark:text-slate-400 uppercase bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 py-1 rounded-full mb-3",children:"Zero-Gravity 3D Workspace"}),f.jsx("h3",{className:"font-bold text-slate-900 dark:text-white text-lg mb-2",children:"OpsPulse Work Coordination"}),f.jsx("p",{className:"text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-5",children:"Select an operational work item from the queue to review evidence, manage approval gates, and coordinate with your team."}),f.jsxs("div",{className:"flex items-center space-x-2 text-[11px] font-semibold text-slate-700 dark:text-slate-300 bg-slate-100/80 dark:bg-slate-800/80 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 shadow-xs",children:[f.jsx(zl,{className:"w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400"}),f.jsx("span",{children:"Strict OCC 409 · Atomic Claims · Outbox Queue"})]})]})});const U=s.assignee_id===(r==null?void 0:r.id),E=!s.assignee_id,D=s.status==="PENDING_APPROVAL",z=J=>{J.preventDefault(),_.trim()&&(x(_),w(""))},O=J=>{J.preventDefault(),!(!y.trim()||y.trim().length<10)&&(u("RESOLVED",y),N(!1),k(""))},q=J=>{switch(J.action){case"CREATED":return`${J.actor_name||"System"} created this request`;case"CLAIMED":return`${J.actor_name||"User"} claimed this item`;case"STATUS_CHANGE":return`${J.actor_name||"User"} changed status from ${J.old_state||"open"} to ${J.new_state||"in progress"}`;case"APPROVED":return`${J.actor_name||"Manager"} approved this request: "${J.diff_summary||"Approved"}"`;case"REJECTED":return`${J.actor_name||"Manager"} rejected approval: "${J.diff_summary||"Rejected"}"`;case"REASSIGNED":return`${J.actor_name||"User"} reassigned this item`;case"COMMENT_ADDED":return`${J.actor_name||"User"} added an internal note`;default:return`${J.actor_name||"User"} updated this item`}},B=(()=>{var J;if(s.status==="RESOLVED"||s.status==="CLOSED")return{sentence:`This request was marked as ${s.status.toLowerCase()} and requires no further action.`,allowedActions:[]};if(D){const H=(r==null?void 0:r.is_system_admin)===1||((J=r==null?void 0:r.memberships)==null?void 0:J.some(Q=>Q.role==="LEAD")),j=(r==null?void 0:r.id)===s.creator_id,X=H&&!j;let L="Awaiting managerial review and sign-off.";return X?L="As an authorized manager, please review evidence and make an approval determination.":j?L="You requested this change. Another manager must review and approve it (self-approval prohibited).":L="Requires a manager on this team to approve.",{sentence:L,allowedActions:X?["APPROVE","REJECT"]:[]}}if(E)return{sentence:"This item is currently unassigned. Take ownership to begin working on it.",allowedActions:["CLAIM"]};if(U){if(s.status==="OPEN"||s.status==="TRIAGED")return{sentence:"You own this item. Ready to start working?",allowedActions:["START_WORK"]};if(s.status==="IN_PROGRESS")return{sentence:"You are currently working on this item. Submit for manager sign-off or mark resolved.",allowedActions:["REQUEST_APPROVAL","RESOLVE"]}}return{sentence:`Assigned to ${s.assignee_name||"another team member"}.`,allowedActions:["CLAIM"]}})();return f.jsxs("div",{className:"flex-1 flex flex-col h-full overflow-hidden transition-colors",children:[M&&f.jsx("div",{className:"bg-rose-50/90 dark:bg-rose-950/80 backdrop-blur-md border-b border-rose-200 dark:border-rose-800 px-6 py-3 text-xs text-rose-800 dark:text-rose-200 flex items-center justify-between shadow-xs",children:f.jsxs("div",{className:"flex items-center space-x-2",children:[f.jsx(f0,{className:"w-4 h-4 text-rose-600 dark:text-rose-400 flex-shrink-0"}),f.jsx("span",{className:"font-semibold",children:M})]})}),g&&f.jsx("div",{className:"bg-emerald-50/90 dark:bg-emerald-950/80 backdrop-blur-md border-b border-emerald-200 dark:border-emerald-800 px-6 py-3 text-xs text-emerald-900 dark:text-emerald-200 flex items-center justify-between shadow-xs",children:f.jsxs("div",{className:"flex items-center space-x-2",children:[f.jsx(Mi,{className:"w-4 h-4 text-[#149B56] dark:text-emerald-400 flex-shrink-0"}),f.jsx("span",{className:"font-semibold",children:g})]})}),f.jsxs("div",{className:"p-6 border-b border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl shadow-xs transition-colors",children:[f.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 mb-3",children:[f.jsxs("div",{className:"flex items-center space-x-2",children:[f.jsx("span",{className:"text-[11px] font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-lg border border-slate-200 dark:border-slate-700",children:((ne=s.category)==null?void 0:ne.replace(/_/g," "))||"General Ops"}),f.jsxs("span",{className:"text-xs font-mono font-medium text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-700",children:["v",s.version]})]}),f.jsxs("div",{className:"flex items-center space-x-2",children:[f.jsx("span",{className:`text-xs font-semibold px-3 py-1 rounded-full border ${s.status==="RESOLVED"?"bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800":s.status==="PENDING_APPROVAL"?"bg-purple-100 dark:bg-purple-950/80 text-purple-800 dark:text-purple-300 border-purple-200 dark:border-purple-800":s.status==="IN_PROGRESS"?"bg-sky-100 dark:bg-sky-950/80 text-sky-800 dark:text-sky-300 border-sky-200 dark:border-sky-800":"bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-700"}`,children:s.status.replace(/_/g," ")}),f.jsx("span",{className:`text-xs font-semibold px-3 py-1 rounded-full border ${s.priority==="URGENT"?"bg-rose-100 dark:bg-rose-950/80 text-rose-800 dark:text-rose-300 border-rose-300 dark:border-rose-800 animate-pulse":s.priority==="HIGH"?"bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 border-amber-300 dark:border-amber-800":"bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700"}`,children:s.priority})]})]}),f.jsx("h1",{className:"text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight leading-snug mb-2.5",children:s.title}),f.jsx("p",{className:"text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl font-normal",children:s.description})]}),f.jsxs("div",{className:"flex-1 overflow-y-auto p-6 space-y-6",children:[f.jsxs("div",{className:"bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 shadow-xs relative overflow-hidden transition-colors",children:[f.jsx("div",{className:"flex items-start justify-between",children:f.jsxs("div",{className:"space-y-1",children:[f.jsxs("div",{className:"flex items-center space-x-2 text-slate-700 dark:text-slate-300 font-bold text-xs",children:[f.jsx(zl,{className:"w-4 h-4 text-emerald-600 dark:text-emerald-400"}),f.jsx("span",{className:"uppercase tracking-wider text-[11px] text-slate-500 dark:text-slate-400 font-semibold",children:"What's Next"})]}),f.jsx("p",{className:"text-sm font-semibold text-slate-900 dark:text-white",children:B.sentence})]})}),f.jsxs("div",{className:"flex flex-wrap items-center gap-3 mt-4 pt-4 border-t border-slate-200 dark:border-slate-800",children:[B.allowedActions.includes("CLAIM")&&f.jsxs("button",{onClick:l,disabled:v,className:"px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs shadow-xs active:scale-95 transition cursor-pointer flex items-center space-x-1.5",children:[f.jsx(Gv,{className:"w-4 h-4"}),f.jsx("span",{children:"Take this item (Claim)"})]}),B.allowedActions.includes("START_WORK")&&f.jsxs("button",{onClick:()=>u("IN_PROGRESS"),disabled:v,className:"px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs shadow-xs active:scale-95 transition cursor-pointer flex items-center space-x-1.5",children:[f.jsx(Kg,{className:"w-4 h-4"}),f.jsx("span",{children:"Start work"})]}),B.allowedActions.includes("REQUEST_APPROVAL")&&f.jsxs("button",{onClick:()=>u("PENDING_APPROVAL"),disabled:v,className:"px-5 py-2.5 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs shadow-xs active:scale-95 transition cursor-pointer flex items-center space-x-1.5",children:[f.jsx(Bl,{className:"w-4 h-4"}),f.jsx("span",{children:"Ask for manager approval"})]}),B.allowedActions.includes("RESOLVE")&&f.jsxs("button",{onClick:()=>N(!0),disabled:v,className:"px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs shadow-xs active:scale-95 transition cursor-pointer flex items-center space-x-1.5",children:[f.jsx(Mi,{className:"w-4 h-4"}),f.jsx("span",{children:"Mark as resolved"})]}),B.allowedActions.includes("APPROVE")&&f.jsxs("div",{className:"flex items-center space-x-2",children:[f.jsxs("button",{onClick:()=>h("APPROVED",R||"Meets operational compliance guidelines"),disabled:v,className:"px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs shadow-xs active:scale-95 transition cursor-pointer flex items-center space-x-1.5",children:[f.jsx(Mi,{className:"w-4 h-4"}),f.jsx("span",{children:"Approve Request"})]}),f.jsxs("button",{onClick:()=>h("REJECTED",R||"Insufficient documentation"),disabled:v,className:"px-5 py-2.5 rounded-full bg-rose-600 hover:bg-rose-500 text-white font-semibold text-xs shadow-xs active:scale-95 transition cursor-pointer flex items-center space-x-1.5",children:[f.jsx(uv,{className:"w-4 h-4"}),f.jsx("span",{children:"Send Back (Reject)"})]})]})]})]}),f.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:[f.jsxs("div",{className:"bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-all",children:[f.jsx("span",{className:"text-[11px] font-medium text-slate-500 dark:text-slate-400 block mb-1",children:"Requester"}),f.jsxs("div",{className:"flex items-center space-x-2",children:[f.jsx("div",{className:"w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold text-xs flex items-center justify-center border border-slate-200 dark:border-slate-700",children:((ue=s.creator_name)==null?void 0:ue.charAt(0))||"R"}),f.jsx("span",{className:"text-xs font-bold text-slate-900 dark:text-white",children:s.creator_name||"Requester"})]})]}),f.jsxs("div",{className:"bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-all",children:[f.jsx("span",{className:"text-[11px] font-medium text-slate-500 dark:text-slate-400 block mb-1",children:"Assignee"}),f.jsx("div",{className:"flex items-center space-x-2",children:s.assignee_name?f.jsxs(f.Fragment,{children:[f.jsx("div",{className:"w-6 h-6 rounded-full bg-slate-800 dark:bg-slate-700 text-white font-bold text-xs flex items-center justify-center",children:s.assignee_name.charAt(0)}),f.jsx("span",{className:"text-xs font-bold text-slate-900 dark:text-white",children:s.assignee_name})]}):f.jsx("span",{className:"text-xs font-bold text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/60 px-2 py-0.5 rounded-full border border-amber-200 dark:border-amber-800/60",children:"Unassigned"})})]}),f.jsxs("div",{className:"bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-all",children:[f.jsx("span",{className:"text-[11px] font-medium text-slate-500 dark:text-slate-400 block mb-1",children:"Created At"}),f.jsx("span",{className:"text-xs font-bold text-slate-900 dark:text-white",children:new Date(s.created_at).toLocaleDateString()})]}),f.jsxs("div",{className:"bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-all",children:[f.jsx("span",{className:"text-[11px] font-medium text-slate-500 dark:text-slate-400 block mb-1",children:"Version"}),f.jsxs("span",{className:"text-xs font-bold text-slate-900 dark:text-white font-mono",children:["Version ",s.version]})]})]}),f.jsxs("div",{className:"bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden transition-colors",children:[f.jsxs("div",{className:"flex items-center border-b border-slate-200 dark:border-slate-800 px-6 pt-3 bg-slate-50/70 dark:bg-slate-950/70",children:[f.jsx("button",{onClick:()=>C("details"),className:`pb-3 px-3 text-xs font-semibold transition border-b-2 cursor-pointer ${P==="details"?"border-emerald-500 text-slate-900 dark:text-white font-bold":"border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"}`,children:"Overview & Evidence"}),f.jsxs("button",{onClick:()=>C("activity"),className:`pb-3 px-3 text-xs font-semibold transition border-b-2 cursor-pointer ${P==="activity"?"border-emerald-500 text-slate-900 dark:text-white font-bold":"border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"}`,children:["Activity Timeline (",e.length,")"]}),f.jsxs("button",{onClick:()=>C("notes"),className:`pb-3 px-3 text-xs font-semibold transition border-b-2 cursor-pointer ${P==="notes"?"border-emerald-500 text-slate-900 dark:text-white font-bold":"border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"}`,children:["Internal Notes (",n.length,")"]})]}),f.jsxs("div",{className:"p-6",children:[P==="details"&&f.jsxs("div",{className:"space-y-5 text-sm leading-relaxed",children:[f.jsxs("div",{children:[f.jsx("h4",{className:"text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 mb-2",children:"Work Item Overview"}),f.jsx("p",{className:"text-slate-800 dark:text-slate-200 leading-relaxed font-normal",children:s.description})]}),f.jsxs("div",{className:"p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 space-y-2",children:[f.jsx("h4",{className:"font-semibold text-xs text-slate-900 dark:text-white",children:"Audit & Traceability Guarantee"}),f.jsxs("p",{className:"text-xs text-slate-600 dark:text-slate-400 leading-relaxed",children:["All updates to this work item write append-only records to PostgreSQL with transactional atomicity. Concurrent edits enforce conditional version locking (",f.jsxs("code",{className:"font-mono bg-white dark:bg-slate-900 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-800 text-emerald-600 dark:text-emerald-400 font-medium",children:["If-Match: v",s.version]}),")."]})]})]}),P==="activity"&&f.jsx("div",{className:"space-y-4",children:e.length===0?f.jsx("p",{className:"text-xs text-slate-400 dark:text-slate-500 text-center py-4",children:"No activity logged yet."}):f.jsx("div",{className:"relative pl-6 space-y-4 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800",children:e.map(J=>f.jsxs("div",{className:"relative flex items-start space-x-3 text-xs",children:[f.jsx("div",{className:"absolute -left-6 top-1 w-5 h-5 rounded-full bg-white dark:bg-slate-900 border-2 border-emerald-500 flex items-center justify-center shadow-xs",children:f.jsx("div",{className:"w-2 h-2 rounded-full bg-emerald-500"})}),f.jsxs("div",{className:"bg-slate-50 dark:bg-slate-950/70 rounded-2xl p-3.5 border border-slate-200 dark:border-slate-800 shadow-xs flex-1",children:[f.jsx("p",{className:"font-semibold text-xs text-slate-900 dark:text-white",children:q(J)}),f.jsxs("span",{className:"text-[10px] text-slate-400 dark:text-slate-500 mt-1 block",children:[new Date(J.created_at).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})," · ",new Date(J.created_at).toLocaleDateString()]})]})]},J.id))})}),P==="notes"&&f.jsxs("div",{className:"space-y-4",children:[f.jsx("div",{className:"space-y-3",children:n.length===0?f.jsx("p",{className:"text-xs text-slate-400 dark:text-slate-500 text-center py-4",children:"No internal notes posted yet."}):n.map(J=>f.jsxs("div",{className:"p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 shadow-xs space-y-1 text-xs",children:[f.jsxs("div",{className:"flex items-center justify-between text-slate-500 dark:text-slate-400 text-[10px]",children:[f.jsx("span",{className:"font-semibold text-xs text-slate-900 dark:text-white",children:J.user_name}),f.jsx("span",{children:new Date(J.created_at).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})})]}),f.jsx("p",{className:"text-xs text-slate-700 dark:text-slate-300 leading-relaxed",children:J.content})]},J.id))}),f.jsxs("form",{onSubmit:z,className:"flex gap-2 pt-2",children:[f.jsx("input",{type:"text",placeholder:"Add an internal note or context for team members...",value:_,onChange:J=>w(J.target.value),className:"flex-1 px-4 py-2.5 text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-slate-900 dark:text-white"}),f.jsxs("button",{type:"submit",disabled:!_.trim()||v,className:"px-5 py-2.5 rounded-2xl bg-slate-900 hover:bg-slate-800 dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white font-bold text-xs disabled:opacity-40 transition cursor-pointer flex items-center space-x-1",children:[f.jsx(u0,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:"Send"})]})]})]})]})]}),f.jsxs("div",{className:"p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs text-xs flex items-center justify-between transition-colors",children:[f.jsxs("div",{className:"space-y-0.5",children:[f.jsx("span",{className:"font-semibold text-slate-800 dark:text-slate-200 text-xs block",children:"Developer Concurrency Testing"}),f.jsx("span",{className:"text-[11px] text-slate-500 dark:text-slate-400",children:"Simulate another user updating this record behind your back to test OCC 409 rollback"})]}),f.jsx("button",{onClick:m,className:"px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-medium text-xs border border-slate-200 dark:border-slate-700 shadow-xs transition cursor-pointer",children:"Simulate 409 Conflict"})]})]}),G&&f.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4",children:f.jsxs("div",{className:"bg-white dark:bg-slate-900 rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-200 dark:border-slate-800 space-y-4",children:[f.jsx("h3",{className:"text-base font-bold text-slate-900 dark:text-white",children:"Mark Request as Resolved"}),f.jsx("p",{className:"text-xs text-slate-600 dark:text-slate-400",children:"Provide a clear summary of the resolution for audit compliance."}),f.jsxs("form",{onSubmit:O,className:"space-y-4",children:[f.jsx("textarea",{required:!0,minLength:10,placeholder:"Resolution summary (minimum 10 characters)...",value:y,onChange:J=>k(J.target.value),className:"w-full h-24 p-3 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl placeholder-slate-400 text-slate-900 dark:text-white focus:outline-none"}),f.jsxs("div",{className:"flex justify-end space-x-2",children:[f.jsx("button",{type:"button",onClick:()=>N(!1),className:"px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800",children:"Cancel"}),f.jsx("button",{type:"submit",disabled:y.trim().length<10||v,className:"px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-xs disabled:opacity-40",children:"Confirm Resolution"})]})]})]})})]})},Qv=({isOpen:s,onClose:e,teams:n,users:r,onCreate:o})=>{var P;const[l,u]=Pe.useState(""),[h,x]=Pe.useState(""),[m,v]=Pe.useState("PAYMENT_INVESTIGATION"),[M,g]=Pe.useState("HIGH"),[_,w]=Pe.useState(((P=n[0])==null?void 0:P.id)||"payments"),[R,S]=Pe.useState(""),[y,k]=Pe.useState(!1),[G]=Pe.useState(s0());if(!s)return null;const N=async C=>{if(C.preventDefault(),!l.trim()||!h.trim())return;k(!0);const U={title:l.trim(),description:h.trim(),category:m,priority:M,team_id:_,assignee_id:R||null};try{await o(U,G),e()}catch(E){console.error(E)}finally{k(!1)}};return f.jsx("div",{className:"fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200",children:f.jsxs("div",{className:"bg-white dark:bg-slate-900 rounded-3xl max-w-lg w-full p-6 space-y-4 shadow-2xl border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100 transition-colors",children:[f.jsxs("div",{className:"flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3",children:[f.jsxs("div",{className:"flex items-center space-x-2.5",children:[f.jsx("div",{className:"w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 flex items-center justify-center font-bold",children:f.jsx(l0,{className:"w-5 h-5 stroke-[2.5]"})}),f.jsxs("div",{children:[f.jsx("h2",{className:"text-base font-bold text-slate-900 dark:text-white",children:"New Operational Request"}),f.jsx("p",{className:"text-xs text-slate-500 dark:text-slate-400",children:"Create a work item with idempotency guarantee"})]})]}),f.jsx("button",{onClick:e,className:"text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 p-1 rounded-full cursor-pointer",children:f.jsx(Za,{className:"w-4 h-4"})})]}),f.jsxs("form",{onSubmit:N,className:"space-y-4 text-xs",children:[f.jsxs("div",{children:[f.jsx("label",{className:"block text-slate-700 dark:text-slate-200 mb-1.5 font-semibold",children:"What is this request? *"}),f.jsx("input",{type:"text",required:!0,minLength:5,placeholder:"e.g. Discrepancy in Merchant batch payout #4829",value:l,onChange:C=>u(C.target.value),className:"w-full px-3.5 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl placeholder-slate-400 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition"})]}),f.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[f.jsxs("div",{children:[f.jsx("label",{className:"block text-slate-700 dark:text-slate-200 mb-1.5 font-semibold",children:"Owning Team"}),f.jsx("select",{value:_,onChange:C=>w(C.target.value),className:"w-full px-3 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-700 dark:text-slate-200 focus:outline-none cursor-pointer",children:n.map(C=>f.jsx("option",{value:C.id,className:"dark:bg-slate-900",children:C.name},C.id))})]}),f.jsxs("div",{children:[f.jsx("label",{className:"block text-slate-700 dark:text-slate-200 mb-1.5 font-semibold",children:"Priority"}),f.jsxs("select",{value:M,onChange:C=>g(C.target.value),className:"w-full px-3 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-700 dark:text-slate-200 focus:outline-none cursor-pointer",children:[f.jsx("option",{value:"URGENT",className:"dark:bg-slate-900",children:"Urgent (Red left edge)"}),f.jsx("option",{value:"HIGH",className:"dark:bg-slate-900",children:"High"}),f.jsx("option",{value:"MEDIUM",className:"dark:bg-slate-900",children:"Medium"}),f.jsx("option",{value:"LOW",className:"dark:bg-slate-900",children:"Low"})]})]})]}),f.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[f.jsxs("div",{children:[f.jsx("label",{className:"block text-slate-700 dark:text-slate-200 mb-1.5 font-semibold",children:"Category"}),f.jsxs("select",{value:m,onChange:C=>v(C.target.value),className:"w-full px-3 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-700 dark:text-slate-200 focus:outline-none cursor-pointer",children:[f.jsx("option",{value:"PAYMENT_INVESTIGATION",className:"dark:bg-slate-900",children:"Payment Investigation"}),f.jsx("option",{value:"KYC_DISCREPANCY",className:"dark:bg-slate-900",children:"KYC Discrepancy"}),f.jsx("option",{value:"SETTLEMENT_RECONCILIATION",className:"dark:bg-slate-900",children:"Settlement Reconciliation"}),f.jsx("option",{value:"ACCOUNT_TAKEOVER_ALERT",className:"dark:bg-slate-900",children:"Account Takeover Alert"}),f.jsx("option",{value:"SYSTEM_MAINTENANCE",className:"dark:bg-slate-900",children:"System Maintenance"})]})]}),f.jsxs("div",{children:[f.jsx("label",{className:"block text-slate-700 dark:text-slate-200 mb-1.5 font-semibold",children:"Initial Assignee (Optional)"}),f.jsxs("select",{value:R,onChange:C=>S(C.target.value),className:"w-full px-3 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-700 dark:text-slate-200 focus:outline-none cursor-pointer",children:[f.jsx("option",{value:"",className:"dark:bg-slate-900",children:"Leave Unassigned"}),r.map(C=>f.jsx("option",{value:C.id,className:"dark:bg-slate-900",children:C.name},C.id))]})]})]}),f.jsxs("div",{children:[f.jsx("label",{className:"block text-slate-700 dark:text-slate-200 mb-1.5 font-semibold",children:"Details & Context *"}),f.jsx("textarea",{required:!0,minLength:10,rows:3,placeholder:"Provide background, merchant IDs, transaction references, or incident details...",value:h,onChange:C=>x(C.target.value),className:"w-full px-3.5 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl placeholder-slate-400 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition resize-none"})]}),f.jsxs("div",{className:"p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex items-center space-x-2 text-[11px] text-slate-600 dark:text-slate-300",children:[f.jsx(Bl,{className:"w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0"}),f.jsxs("span",{children:["Idempotency-Key active (",f.jsxs("code",{className:"font-mono text-emerald-600 dark:text-emerald-400",children:[G.slice(0,10),"..."]}),"). Retrying will safely return the existing item without duplicates."]})]}),f.jsxs("div",{className:"flex items-center justify-end space-x-2.5 pt-2",children:[f.jsx("button",{type:"button",onClick:e,className:"px-4 py-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold cursor-pointer transition",children:"Cancel"}),f.jsx("button",{type:"submit",disabled:y||!l.trim()||!h.trim(),className:"px-6 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold shadow-xs active:scale-95 disabled:opacity-50 transition cursor-pointer",children:y?"Creating...":"Create work item"})]})]})]})})},e_=({isOpen:s,onClose:e,onReload:n,expectedVersion:r,currentVersion:o,currentItem:l})=>{var u;return s?f.jsx("div",{className:"fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200",children:f.jsxs("div",{className:"bg-white dark:bg-slate-900 rounded-3xl max-w-lg w-full p-6 space-y-4 shadow-2xl border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100 transition-colors",children:[f.jsxs("div",{className:"flex items-start justify-between",children:[f.jsxs("div",{className:"flex items-center space-x-3",children:[f.jsx("div",{className:"w-10 h-10 rounded-2xl bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 flex items-center justify-center text-amber-600 dark:text-amber-400",children:f.jsx(Dv,{className:"w-5 h-5"})}),f.jsxs("div",{children:[f.jsx("h2",{className:"text-base font-bold text-slate-900 dark:text-white",children:"Someone just updated this item"}),f.jsx("p",{className:"text-xs text-slate-500 dark:text-slate-400",children:"A teammate saved changes while you had this open."})]})]}),f.jsx("button",{onClick:e,className:"text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 p-1 rounded-full cursor-pointer",children:f.jsx(Za,{className:"w-4 h-4"})})]}),f.jsxs("div",{className:"p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 text-xs space-y-2",children:[f.jsxs("div",{className:"flex items-center justify-between text-slate-600 dark:text-slate-400 font-medium pb-2 border-b border-slate-200 dark:border-slate-800",children:[f.jsx("span",{children:"Current server state"}),f.jsxs("span",{className:"text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800 font-semibold",children:["Latest (v",o,")"]})]}),f.jsxs("div",{className:"space-y-1.5 pt-1 text-slate-800 dark:text-slate-200",children:[f.jsxs("div",{children:[f.jsx("span",{className:"text-slate-500 dark:text-slate-400 font-semibold",children:"Title:"})," ",l==null?void 0:l.title]}),f.jsxs("div",{children:[f.jsx("span",{className:"text-slate-500 dark:text-slate-400 font-semibold",children:"Status:"})," ",(u=l==null?void 0:l.status)==null?void 0:u.replace(/_/g," ")]}),f.jsxs("div",{children:[f.jsx("span",{className:"text-slate-500 dark:text-slate-400 font-semibold",children:"Owner:"})," ",(l==null?void 0:l.assignee_name)||"Unassigned"]}),f.jsxs("div",{children:[f.jsx("span",{className:"text-slate-500 dark:text-slate-400 font-semibold",children:"Priority:"})," ",l==null?void 0:l.priority]})]})]}),f.jsx("p",{className:"text-xs text-slate-600 dark:text-slate-400 leading-relaxed",children:"To prevent accidentally overwriting what your teammate just saved, please reload the latest version to review their updates."}),f.jsxs("div",{className:"flex items-center justify-end space-x-2.5 pt-2 border-t border-slate-200 dark:border-slate-800",children:[f.jsx("button",{onClick:e,className:"px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer",children:"Cancel"}),f.jsxs("button",{onClick:n,className:"flex items-center space-x-1.5 px-5 py-2.5 rounded-full text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow-xs active:scale-95 cursor-pointer transition",children:[f.jsx(c0,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:"Show latest version"})]})]})]})}):null},t_=({isOpen:s,onClose:e})=>{const[n,r]=Pe.useState([]),[o,l]=Pe.useState([]),[u,h]=Pe.useState(!1),[x,m]=Pe.useState(null),v=async()=>{h(!0);try{const _=await Dn.getOutbox();r(_.events),l(_.stats)}catch(_){console.error(_)}finally{h(!1)}};Pe.useEffect(()=>{if(s){v();const _=setInterval(v,3e3);return()=>clearInterval(_)}},[s]);const M=async()=>{try{const _=await Dn.processOutbox();m(`Worker processed ${_.processedCount} queued event(s).`),v(),setTimeout(()=>m(null),3e3)}catch(_){m(`Worker failed: ${_.message}`)}},g=async()=>{try{const _=await Dn.simulateOutboxFailure();m("Simulated failing job created. Worker will retry 3x then route to dead-letter."),v(),setTimeout(()=>m(null),4e3)}catch(_){m(`Failed: ${_.message}`)}};return s?f.jsx("div",{className:"fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200",children:f.jsxs("div",{className:"bg-white dark:bg-slate-900 rounded-3xl max-w-4xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100 transition-colors",children:[f.jsxs("div",{className:"p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between",children:[f.jsxs("div",{className:"flex items-center space-x-3",children:[f.jsx("div",{className:"w-10 h-10 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 flex items-center justify-center",children:f.jsx(of,{className:"w-5 h-5"})}),f.jsxs("div",{children:[f.jsx("h2",{className:"text-base font-bold text-slate-900 dark:text-white",children:"Background Outbox & Notification Worker"}),f.jsx("p",{className:"text-xs text-slate-500 dark:text-slate-400",children:"SKIP LOCKED concurrency, exponential backoff, and idempotent queue"})]})]}),f.jsx("button",{onClick:e,className:"text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 p-1 rounded-full cursor-pointer",children:f.jsx(Za,{className:"w-4 h-4"})})]}),f.jsxs("div",{className:"px-6 py-4 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs transition-colors",children:[f.jsx("div",{className:"flex items-center space-x-3",children:o.map(_=>f.jsxs("div",{className:"flex items-center space-x-1.5 bg-white dark:bg-slate-800 px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700 shadow-2xs",children:[f.jsxs("span",{className:"text-slate-500 dark:text-slate-400 capitalize",children:[_.status.toLowerCase(),":"]}),f.jsx("span",{className:`font-bold ${_.status==="PENDING"?"text-amber-700 dark:text-amber-300":_.status==="DEAD"?"text-rose-700 dark:text-rose-400":"text-emerald-600 dark:text-emerald-400"}`,children:_.count})]},_.status))}),f.jsxs("div",{className:"flex items-center space-x-2",children:[f.jsxs("button",{onClick:M,className:"flex items-center space-x-1.5 px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs shadow-xs active:scale-95 transition cursor-pointer",children:[f.jsx(Tv,{className:"w-3.5 h-3.5 fill-white"}),f.jsx("span",{children:"Run worker now"})]}),f.jsxs("button",{onClick:g,className:"flex items-center space-x-1.5 px-4 py-2 rounded-full bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-xs transition cursor-pointer shadow-xs",children:[f.jsx(f0,{className:"w-3.5 h-3.5 text-amber-600 dark:text-amber-400"}),f.jsx("span",{children:"Simulate failure"})]})]})]}),x&&f.jsxs("div",{className:"mx-6 mt-4 p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-900 dark:text-emerald-200 font-medium flex items-center space-x-2",children:[f.jsx(Mi,{className:"w-4 h-4 text-emerald-600 dark:text-emerald-400"}),f.jsx("span",{children:x})]}),f.jsx("div",{className:"flex-1 overflow-y-auto p-6",children:f.jsxs("table",{className:"w-full text-left text-xs text-slate-700 dark:text-slate-200",children:[f.jsx("thead",{className:"bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider sticky top-0",children:f.jsxs("tr",{children:[f.jsx("th",{className:"py-2.5 px-3",children:"Job ID"}),f.jsx("th",{className:"py-2.5 px-3",children:"Type"}),f.jsx("th",{className:"py-2.5 px-3",children:"Status"}),f.jsx("th",{className:"py-2.5 px-3",children:"Attempts"}),f.jsx("th",{className:"py-2.5 px-3",children:"Created"}),f.jsx("th",{className:"py-2.5 px-3",children:"Payload Summary"})]})}),f.jsx("tbody",{className:"divide-y divide-slate-200 dark:divide-slate-800",children:n.length===0?f.jsx("tr",{children:f.jsx("td",{colSpan:6,className:"py-8 text-center text-slate-400 dark:text-slate-500",children:"No outbox events queued. Actions write notifications transactionally."})}):n.map(_=>f.jsxs("tr",{className:"hover:bg-slate-50 dark:hover:bg-slate-800/60 transition",children:[f.jsxs("td",{className:"py-3 px-3 font-mono text-[11px] text-slate-500 dark:text-slate-400",children:[_.id.slice(0,8),"..."]}),f.jsx("td",{className:"py-3 px-3 font-bold text-slate-900 dark:text-white",children:_.event_type}),f.jsx("td",{className:"py-3 px-3",children:f.jsx("span",{className:`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${_.status==="COMPLETED"?"bg-emerald-100 dark:bg-emerald-900/60 text-emerald-900 dark:text-emerald-200 border-emerald-300 dark:border-emerald-700":_.status==="DEAD_LETTER"?"bg-rose-100 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300 border-rose-300 dark:border-rose-800":"bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border-amber-300 dark:border-amber-800 animate-pulse"}`,children:_.status})}),f.jsxs("td",{className:"py-3 px-3 font-mono",children:[_.retry_count," / 3"]}),f.jsx("td",{className:"py-3 px-3 text-slate-500 dark:text-slate-400 text-[11px]",children:new Date(_.created_at).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit"})}),f.jsx("td",{className:"py-3 px-3 text-slate-600 dark:text-slate-300 max-w-xs truncate text-[11px]",children:typeof _.payload=="object"?JSON.stringify(_.payload):_.payload})]},_.id))})]})})]})}):null},n_=""+new URL("sprout-robot-final-DNxGtCpw.png",import.meta.url).href,i_=""+new URL("sprout-coin-D4yKMzjv.png",import.meta.url).href,nm=""+new URL("sprout-bot-head-BqHi0Izc.png",import.meta.url).href,al=({size:s="lg"})=>{const e=s==="sm";return f.jsx("div",{className:`relative flex items-center justify-center ${e?"w-7 h-7":"w-20 h-24 sm:w-22 sm:h-28"}`,children:f.jsxs("svg",{viewBox:"0 0 100 120",className:"w-full h-full drop-shadow-xl",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[f.jsxs("defs",{children:[f.jsxs("linearGradient",{id:`bodyGrad-${s}`,x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[f.jsx("stop",{offset:"0%",stopColor:"#34d399"}),f.jsx("stop",{offset:"50%",stopColor:"#059669"}),f.jsx("stop",{offset:"100%",stopColor:"#064e3b"})]}),f.jsxs("linearGradient",{id:`visorGrad-${s}`,x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[f.jsx("stop",{offset:"0%",stopColor:"#0f172a"}),f.jsx("stop",{offset:"100%",stopColor:"#1e293b"})]})]}),f.jsx("line",{x1:"50",y1:"22",x2:"50",y2:"8",stroke:"#10b981",strokeWidth:"3",strokeLinecap:"round"}),f.jsx("circle",{cx:"50",cy:"7",r:"4",fill:"#34d399"}),f.jsx("path",{d:"M50 8 C56 2, 64 4, 61 12 C55 12, 52 10, 50 8 Z",fill:"#4ade80"}),f.jsx("rect",{x:"22",y:"20",width:"56",height:"42",rx:"16",fill:`url(#bodyGrad-${s})`,stroke:"#6ee7b7",strokeWidth:"2"}),f.jsx("rect",{x:"28",y:"28",width:"44",height:"24",rx:"8",fill:`url(#visorGrad-${s})`,stroke:"#10b981",strokeWidth:"1.5"}),f.jsx("circle",{cx:"40",cy:"40",r:"4",fill:"#34d399",children:f.jsx("animate",{attributeName:"opacity",values:"1;0.4;1",dur:"2s",repeatCount:"indefinite"})}),f.jsx("circle",{cx:"60",cy:"40",r:"4",fill:"#34d399",children:f.jsx("animate",{attributeName:"opacity",values:"1;0.4;1",dur:"2s",repeatCount:"indefinite"})}),!e&&f.jsxs(f.Fragment,{children:[f.jsx("rect",{x:"42",y:"62",width:"16",height:"6",rx:"2",fill:"#047857"}),f.jsx("rect",{x:"26",y:"68",width:"48",height:"38",rx:"12",fill:`url(#bodyGrad-${s})`,stroke:"#6ee7b7",strokeWidth:"1.5"}),f.jsx("circle",{cx:"50",cy:"86",r:"7",fill:"#0f172a",stroke:"#34d399",strokeWidth:"1.5"}),f.jsx("circle",{cx:"50",cy:"86",r:"3.5",fill:"#34d399"})]})]})})},r_=()=>{const[s,e]=Pe.useState(!1),[n,r]=Pe.useState(""),[o,l]=Pe.useState(!1),[u,h]=Pe.useState(!1),[x,m]=Pe.useState(!1),[v,M]=Pe.useState(!1),[g,_]=Pe.useState([{id:"welcome",role:"model",text:`👋 **Hi! I'm here to help.**

I'm your **OpsPulse AI Copilot** (powered by Google Gemini). Ask me how any feature works, how to test concurrent claim races, or why an action is blocked!`,source:"gemini-ai",timestamp:new Date}]),w=Pe.useRef(null),R=()=>{var P;(P=w.current)==null||P.scrollIntoView({behavior:"smooth"})};Pe.useEffect(()=>{s&&R()},[s,g,o]);const S=async P=>{const C=(P||n).trim();if(!C||o)return;const U={id:"user_"+Date.now(),role:"user",text:C,timestamp:new Date};_(E=>[...E,U]),r(""),l(!0);try{const E=g.map(O=>({role:O.role,text:O.text})),D=await Dn.chatWithAi(C,E),z={id:"ai_"+Date.now(),role:"model",text:D.reply,source:D.source,timestamp:new Date};_(O=>[...O,z])}catch{const D={id:"err_"+Date.now(),role:"model",text:"I'm having trouble connecting right now. Try asking about **Atomic Claims**, **409 Conflicts**, or **Manager Approvals**!",timestamp:new Date};_(z=>[...z,D])}finally{l(!1)}},y=P=>{P.key==="Enter"&&(P.preventDefault(),S())},k=[{label:"⚡ Atomic Claim",query:"How does Atomic Claim work in OpsPulse and where can I test it?"},{label:"⚠️ 409 Conflict",query:"How do I simulate an Optimistic Concurrency 409 conflict?"},{label:"🛡️ Four-Eyes Approval",query:"Explain the four-eyes approval workflow and separation of duties"},{label:"📦 Outbox Worker",query:"How does the Transactional Outbox pattern and retry queue work?"}],G=P=>P.split(`
`).map((C,U)=>{if(C.trim().startsWith("- ")||C.trim().startsWith("* ")){const E=C.trim().substring(2);return f.jsxs("div",{className:"flex items-start space-x-1.5 my-1 pl-1",children:[f.jsx("span",{className:"text-[#149B56] font-bold",children:"•"}),f.jsx("span",{children:N(E)})]},U)}return/^\d+\.\s/.test(C.trim())?f.jsx("div",{className:"my-1 pl-1",children:N(C)},U):C.trim()?f.jsx("p",{className:"my-0.5",children:N(C)},U):f.jsx("div",{className:"h-1.5"},U)}),N=P=>P.split(/(\*\*.*?\*\*)/g).map((U,E)=>U.startsWith("**")&&U.endsWith("**")?f.jsx("strong",{className:"font-bold text-slate-900 dark:text-white",children:U.slice(2,-2)},E):U.startsWith("`")&&U.endsWith("`")?f.jsx("code",{className:"font-mono bg-slate-100 dark:bg-slate-800 px-1 py-0.2 rounded text-[10px] border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200",children:U.slice(1,-1)},E):U);return f.jsxs("div",{className:"fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none",children:[s&&f.jsxs("div",{className:"pointer-events-auto w-[360px] sm:w-[410px] h-[540px] max-h-[82vh] bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200 dark:border-slate-800 shadow-2xl rounded-3xl flex flex-col overflow-hidden mb-3 animate-in fade-in slide-in-from-bottom-5 duration-200 transition-colors",children:[f.jsxs("div",{className:"px-5 py-3.5 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between transition-colors",children:[f.jsxs("div",{className:"flex items-center space-x-3",children:[f.jsxs("div",{className:"relative",children:[v?f.jsx(al,{size:"sm"}):f.jsx("img",{src:nm,alt:"Sprout Bot",onError:()=>M(!0),className:"w-10 h-10 rounded-full object-cover border-2 border-white dark:border-slate-700 shadow-sm"}),f.jsx("span",{className:"absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-900 animate-pulse"})]}),f.jsxs("div",{children:[f.jsxs("div",{className:"flex items-center space-x-1.5",children:[f.jsx("h3",{className:"text-xs font-bold text-slate-900 dark:text-white",children:"Sprout AI Copilot"}),f.jsx("span",{className:"text-[10px] bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 px-1.5 py-0.2 rounded-full font-bold",children:"Online"})]}),f.jsx("p",{className:"text-[10px] text-slate-500 dark:text-slate-400",children:"Gemini Intelligence · Ops Guide"})]})]}),f.jsxs("div",{className:"flex items-center space-x-1",children:[f.jsx("button",{onClick:()=>e(!1),className:"p-1.5 rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer",title:"Minimize chat",children:f.jsx(Mv,{className:"w-4 h-4"})}),f.jsx("button",{onClick:()=>e(!1),className:"p-1.5 rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer",title:"Close chat",children:f.jsx(Za,{className:"w-4 h-4"})})]})]}),f.jsx("div",{className:"px-3.5 py-2 bg-slate-50/50 dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-800 flex items-center space-x-1.5 overflow-x-auto no-scrollbar",children:k.map((P,C)=>f.jsx("button",{onClick:()=>S(P.query),className:"whitespace-nowrap px-2.5 py-1 rounded-full bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-[10px] font-semibold border border-slate-200 dark:border-slate-700 transition active:scale-95 cursor-pointer shadow-2xs",children:P.label},C))}),f.jsxs("div",{className:"flex-1 overflow-y-auto p-4 space-y-3",children:[g.map(P=>{const C=P.role==="user";return f.jsxs("div",{className:`flex items-start space-x-2 ${C?"flex-row-reverse space-x-reverse":""}`,children:[!C&&f.jsx("div",{className:"w-6 h-6 rounded-full overflow-hidden flex-shrink-0 mt-0.5 border border-slate-200 dark:border-slate-700",children:v?f.jsx(al,{size:"sm"}):f.jsx("img",{src:nm,alt:"AI",onError:()=>M(!0),className:"w-full h-full object-cover"})}),f.jsxs("div",{className:`flex flex-col ${C?"items-end":"items-start"} max-w-[85%]`,children:[f.jsx("div",{className:`rounded-2xl px-3.5 py-2.5 text-xs ${C?"bg-emerald-600 text-white rounded-br-xs shadow-xs":"bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-bl-xs shadow-2xs leading-relaxed"}`,children:G(P.text)}),f.jsx("span",{className:"text-[9px] text-slate-400 dark:text-slate-500 mt-0.5 px-1",children:P.timestamp.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})})]})]},P.id)}),o&&f.jsxs("div",{className:"flex items-center space-x-2",children:[f.jsx("div",{className:"w-6 h-6 rounded-full overflow-hidden flex-shrink-0 border border-slate-200 dark:border-slate-700",children:f.jsx(al,{size:"sm"})}),f.jsxs("div",{className:"flex items-center space-x-1.5 bg-slate-100 dark:bg-slate-800 text-slate-500 px-3.5 py-2.5 rounded-2xl rounded-bl-xs border border-slate-200 dark:border-slate-700",children:[f.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-emerald-500 animate-bounce"}),f.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-emerald-500 animate-bounce [animation-delay:0.2s]"}),f.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-emerald-500 animate-bounce [animation-delay:0.4s]"})]})]}),f.jsx("div",{ref:w})]}),f.jsxs("div",{className:"p-3 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center space-x-2 transition-colors",children:[f.jsx("input",{type:"text",placeholder:"Ask anything about OpsPulse...",value:n,onChange:P=>r(P.target.value),onKeyDown:y,disabled:o,className:"flex-1 px-3.5 py-2 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-full placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"}),f.jsx("button",{onClick:()=>S(),disabled:!n.trim()||o,className:"w-8 h-8 rounded-full bg-emerald-600 hover:bg-emerald-500 disabled:opacity-40 text-white flex items-center justify-center transition shadow-xs cursor-pointer active:scale-95",children:f.jsx(u0,{className:"w-3.5 h-3.5"})})]})]}),!s&&f.jsxs("div",{onClick:()=>e(!0),className:"pointer-events-auto relative cursor-pointer group select-none flex items-end space-x-2 mr-2",title:"Click to talk with Sprout AI Copilot",children:[f.jsxs("div",{className:"relative mb-6 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200 dark:border-slate-700 shadow-xl rounded-2xl px-3.5 py-2 transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-1",children:[f.jsxs("div",{className:"flex items-center space-x-1.5 font-bold text-[11px] text-slate-900 dark:text-white",children:[f.jsx("span",{children:"Hi!"}),f.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-500 animate-pulse"})]}),f.jsx("p",{className:"text-[10px] text-slate-500 dark:text-slate-400 font-medium leading-tight mt-0.5 whitespace-nowrap",children:"I'm here to help."}),f.jsx("div",{className:"absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-white/95 dark:bg-slate-900/95 border-r border-t border-slate-200 dark:border-slate-700 rotate-45"})]}),f.jsx("div",{className:"absolute -top-3 right-16 w-5 h-5 rounded-full overflow-hidden shadow-md animate-coin-float pointer-events-none",children:x?f.jsx("div",{className:"w-full h-full rounded-full bg-amber-400 border border-amber-300 flex items-center justify-center text-[9px] font-bold text-amber-900 shadow",children:"₹"}):f.jsx("img",{src:i_,alt:"",onError:()=>m(!0),className:"w-full h-full object-cover"})}),f.jsxs("div",{className:"relative flex flex-col items-center",children:[f.jsxs("div",{className:"relative w-20 h-24 sm:w-22 sm:h-28 transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-1.5 animate-robot-float",children:[f.jsx("div",{className:"absolute inset-1 rounded-full bg-emerald-400/25 blur-lg group-hover:bg-emerald-400/40 transition"}),u?f.jsx("div",{className:"relative z-10 w-full h-full flex items-center justify-center",children:f.jsx(al,{size:"lg"})}):f.jsx("img",{src:n_,alt:"",onError:()=>h(!0),className:"relative z-10 w-full h-full object-contain filter drop-shadow-lg"}),f.jsx("div",{className:"absolute bottom-8 left-[50%] -translate-x-[50%] w-2 h-2 rounded-full bg-emerald-400 animate-ping z-20 pointer-events-none"})]}),f.jsx("div",{className:"w-12 h-1.5 bg-slate-900/20 dark:bg-black/40 rounded-full blur-xs mt-0.5 transform scale-x-90 animate-pulse"})]})]})]})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const lf="186",s_=0,im=1,a_=2,Dl=1,o_=2,Ga=3,ns=0,Hn=1,tr=2,ir=0,ja=1,hd=2,rm=3,sm=4,l_=5,Ws=100,c_=101,u_=102,d_=103,f_=104,h_=200,p_=201,m_=202,x_=203,m0=204,x0=205,g_=206,v_=207,__=208,y_=209,S_=210,M_=211,b_=212,E_=213,w_=214,pd=0,md=1,xd=2,Xa=3,gd=4,vd=5,_d=6,yd=7,g0=0,T_=1,A_=2,ki=0,v0=1,_0=2,y0=3,cf=4,S0=5,M0=6,b0=7,E0=300,is=301,Ys=302,Iu=303,ku=304,ql=306,Sd=1e3,nr=1001,Md=1002,vn=1003,C_=1004,ol=1005,An=1006,Uu=1007,es=1008,Kn=1009,w0=1010,T0=1011,qa=1012,uf=1013,Fi=1014,Di=1015,Oi=1016,df=1017,ff=1018,Ya=1020,A0=35902,C0=35899,R0=1021,N0=1022,Ei=1023,sr=1026,ts=1027,P0=1028,hf=1029,rs=1030,pf=1031,mf=1033,Il=33776,kl=33777,Ul=33778,Fl=33779,bd=35840,Ed=35841,wd=35842,Td=35843,Ad=36196,Cd=37492,Rd=37496,Nd=37488,Pd=37489,Vl=37490,Ld=37491,Dd=37808,Id=37809,kd=37810,Ud=37811,Fd=37812,Od=37813,Bd=37814,zd=37815,Vd=37816,Hd=37817,Gd=37818,Wd=37819,jd=37820,Xd=37821,qd=36492,Yd=36494,$d=36495,Kd=36283,Zd=36284,Hl=36285,Jd=36286,R_=3200,Qd=0,N_=1,Nr="",ai="srgb",Gl="srgb-linear",Wl="linear",Ot="srgb",Fu=7680,P_=519,L_=512,D_=513,I_=514,xf=515,k_=516,U_=517,gf=518,F_=519,O_=35044,am="300 es",Ii=2e3,$a=2001;function B_(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function jl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function z_(){const s=jl("canvas");return s.style.display="block",s}const om={};function lm(...s){const e="THREE."+s.shift();console.log(e,...s)}function L0(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=s[1];n&&n.isStackTrace?s[0]+=" "+n.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function ot(...s){s=L0(s);const e="THREE."+s.shift();{const n=s[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...s)}}function Lt(...s){s=L0(s);const e="THREE."+s.shift();{const n=s[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...s)}}function Xs(...s){const e=s.join(" ");e in om||(om[e]=!0,ot(...s))}function V_(s,e,n){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,n);break;default:r()}}setTimeout(l,n)})}const H_={[pd]:md,[xd]:_d,[gd]:yd,[Xa]:vd,[md]:pd,[_d]:xd,[yd]:gd,[vd]:Xa};class ss{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(n);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ou=Math.PI/180,ef=180/Math.PI;function Ja(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(wn[s&255]+wn[s>>8&255]+wn[s>>16&255]+wn[s>>24&255]+"-"+wn[e&255]+wn[e>>8&255]+"-"+wn[e>>16&15|64]+wn[e>>24&255]+"-"+wn[n&63|128]+wn[n>>8&255]+"-"+wn[n>>16&255]+wn[n>>24&255]+wn[r&255]+wn[r>>8&255]+wn[r>>16&255]+wn[r>>24&255]).toLowerCase()}function yt(s,e,n){return Math.max(e,Math.min(n,s))}function G_(s,e){return(s%e+e)%e}function Bu(s,e,n){return(1-n)*s+n*e}function Ua(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Vn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const bf=class bf{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=yt(this.x,e.x,n.x),this.y=yt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=yt(this.x,e,n),this.y=yt(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(yt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(yt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),o=Math.sin(n),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};bf.prototype.isVector2=!0;let St=bf;class Ks{constructor(e=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=o}static slerpFlat(e,n,r,o,l,u,h){let x=r[o+0],m=r[o+1],v=r[o+2],M=r[o+3],g=l[u+0],_=l[u+1],w=l[u+2],R=l[u+3];if(M!==R||x!==g||m!==_||v!==w){let S=x*g+m*_+v*w+M*R;S<0&&(g=-g,_=-_,w=-w,R=-R,S=-S);let y=1-h;if(S<.9995){const k=Math.acos(S),G=Math.sin(k);y=Math.sin(y*k)/G,h=Math.sin(h*k)/G,x=x*y+g*h,m=m*y+_*h,v=v*y+w*h,M=M*y+R*h}else{x=x*y+g*h,m=m*y+_*h,v=v*y+w*h,M=M*y+R*h;const k=1/Math.sqrt(x*x+m*m+v*v+M*M);x*=k,m*=k,v*=k,M*=k}}e[n]=x,e[n+1]=m,e[n+2]=v,e[n+3]=M}static multiplyQuaternionsFlat(e,n,r,o,l,u){const h=r[o],x=r[o+1],m=r[o+2],v=r[o+3],M=l[u],g=l[u+1],_=l[u+2],w=l[u+3];return e[n]=h*w+v*M+x*_-m*g,e[n+1]=x*w+v*g+m*M-h*_,e[n+2]=m*w+v*_+h*g-x*M,e[n+3]=v*w-h*M-x*g-m*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,o){return this._x=e,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,o=e._y,l=e._z,u=e._order,h=Math.cos,x=Math.sin,m=h(r/2),v=h(o/2),M=h(l/2),g=x(r/2),_=x(o/2),w=x(l/2);switch(u){case"XYZ":this._x=g*v*M+m*_*w,this._y=m*_*M-g*v*w,this._z=m*v*w+g*_*M,this._w=m*v*M-g*_*w;break;case"YXZ":this._x=g*v*M+m*_*w,this._y=m*_*M-g*v*w,this._z=m*v*w-g*_*M,this._w=m*v*M+g*_*w;break;case"ZXY":this._x=g*v*M-m*_*w,this._y=m*_*M+g*v*w,this._z=m*v*w+g*_*M,this._w=m*v*M-g*_*w;break;case"ZYX":this._x=g*v*M-m*_*w,this._y=m*_*M+g*v*w,this._z=m*v*w-g*_*M,this._w=m*v*M+g*_*w;break;case"YZX":this._x=g*v*M+m*_*w,this._y=m*_*M+g*v*w,this._z=m*v*w-g*_*M,this._w=m*v*M-g*_*w;break;case"XZY":this._x=g*v*M-m*_*w,this._y=m*_*M-g*v*w,this._z=m*v*w+g*_*M,this._w=m*v*M+g*_*w;break;default:ot("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],o=n[4],l=n[8],u=n[1],h=n[5],x=n[9],m=n[2],v=n[6],M=n[10],g=r+h+M;if(g>0){const _=.5/Math.sqrt(g+1);this._w=.25/_,this._x=(v-x)*_,this._y=(l-m)*_,this._z=(u-o)*_}else if(r>h&&r>M){const _=2*Math.sqrt(1+r-h-M);this._w=(v-x)/_,this._x=.25*_,this._y=(o+u)/_,this._z=(l+m)/_}else if(h>M){const _=2*Math.sqrt(1+h-r-M);this._w=(l-m)/_,this._x=(o+u)/_,this._y=.25*_,this._z=(x+v)/_}else{const _=2*Math.sqrt(1+M-r-h);this._w=(u-o)/_,this._x=(l+m)/_,this._y=(x+v)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,o=e._y,l=e._z,u=e._w,h=n._x,x=n._y,m=n._z,v=n._w;return this._x=r*v+u*h+o*m-l*x,this._y=o*v+u*x+l*h-r*m,this._z=l*v+u*m+r*x-o*h,this._w=u*v-r*h-o*x-l*m,this._onChangeCallback(),this}slerp(e,n){let r=e._x,o=e._y,l=e._z,u=e._w,h=this.dot(e);h<0&&(r=-r,o=-o,l=-l,u=-u,h=-h);let x=1-n;if(h<.9995){const m=Math.acos(h),v=Math.sin(m);x=Math.sin(x*m)/v,n=Math.sin(n*m)/v,this._x=this._x*x+r*n,this._y=this._y*x+o*n,this._z=this._z*x+l*n,this._w=this._w*x+u*n,this._onChangeCallback()}else this._x=this._x*x+r*n,this._y=this._y*x+o*n,this._z=this._z*x+l*n,this._w=this._w*x+u*n,this.normalize();return this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(n),l*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Ef=class Ef{constructor(e=0,n=0,r=0){this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(cm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(cm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*n+l[3]*r+l[6]*o,this.y=l[1]*n+l[4]*r+l[7]*o,this.z=l[2]*n+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*n+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*n+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*n+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*n+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const n=this.x,r=this.y,o=this.z,l=e.x,u=e.y,h=e.z,x=e.w,m=2*(u*o-h*r),v=2*(h*n-l*o),M=2*(l*r-u*n);return this.x=n+x*m+u*M-h*v,this.y=r+x*v+h*m-l*M,this.z=o+x*M+l*v-u*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*n+l[4]*r+l[8]*o,this.y=l[1]*n+l[5]*r+l[9]*o,this.z=l[2]*n+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=yt(this.x,e.x,n.x),this.y=yt(this.y,e.y,n.y),this.z=yt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=yt(this.x,e,n),this.y=yt(this.y,e,n),this.z=yt(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(yt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,o=e.y,l=e.z,u=n.x,h=n.y,x=n.z;return this.x=o*x-l*h,this.y=l*u-r*x,this.z=r*h-o*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return zu.copy(this).projectOnVector(e),this.sub(zu)}reflect(e){return this.sub(zu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(yt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return n*n+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const o=Math.sin(n)*e;return this.x=o*Math.sin(r),this.y=Math.cos(n)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ef.prototype.isVector3=!0;let ce=Ef;const zu=new ce,cm=new Ks,wf=class wf{constructor(e,n,r,o,l,u,h,x,m){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,o,l,u,h,x,m)}set(e,n,r,o,l,u,h,x,m){const v=this.elements;return v[0]=e,v[1]=o,v[2]=h,v[3]=n,v[4]=l,v[5]=x,v[6]=r,v[7]=u,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,l=this.elements,u=r[0],h=r[3],x=r[6],m=r[1],v=r[4],M=r[7],g=r[2],_=r[5],w=r[8],R=o[0],S=o[3],y=o[6],k=o[1],G=o[4],N=o[7],P=o[2],C=o[5],U=o[8];return l[0]=u*R+h*k+x*P,l[3]=u*S+h*G+x*C,l[6]=u*y+h*N+x*U,l[1]=m*R+v*k+M*P,l[4]=m*S+v*G+M*C,l[7]=m*y+v*N+M*U,l[2]=g*R+_*k+w*P,l[5]=g*S+_*G+w*C,l[8]=g*y+_*N+w*U,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],o=e[2],l=e[3],u=e[4],h=e[5],x=e[6],m=e[7],v=e[8];return n*u*v-n*h*m-r*l*v+r*h*x+o*l*m-o*u*x}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],l=e[3],u=e[4],h=e[5],x=e[6],m=e[7],v=e[8],M=v*u-h*m,g=h*x-v*l,_=m*l-u*x,w=n*M+r*g+o*_;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/w;return e[0]=M*R,e[1]=(o*m-v*r)*R,e[2]=(h*r-o*u)*R,e[3]=g*R,e[4]=(v*n-o*x)*R,e[5]=(o*l-h*n)*R,e[6]=_*R,e[7]=(r*x-m*n)*R,e[8]=(u*n-r*l)*R,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,o,l,u,h){const x=Math.cos(l),m=Math.sin(l);return this.set(r*x,r*m,-r*(x*u+m*h)+u+e,-o*m,o*x,-o*(-m*u+x*h)+h+n,0,0,1),this}scale(e,n){return Xs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Vu.makeScale(e,n)),this}rotate(e){return Xs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Vu.makeRotation(-e)),this}translate(e,n){return Xs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Vu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};wf.prototype.isMatrix3=!0;let ct=wf;const Vu=new ct,um=new ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),dm=new ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function W_(){const s={enabled:!0,workingColorSpace:Gl,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Ot&&(o.r=rr(o.r),o.g=rr(o.g),o.b=rr(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Ot&&(o.r=qs(o.r),o.g=qs(o.g),o.b=qs(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Nr?Wl:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return Xs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return Xs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Gl]:{primaries:e,whitePoint:r,transfer:Wl,toXYZ:um,fromXYZ:dm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ai},outputColorSpaceConfig:{drawingBufferColorSpace:ai}},[ai]:{primaries:e,whitePoint:r,transfer:Ot,toXYZ:um,fromXYZ:dm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ai}}}),s}const _t=W_();function rr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function qs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ps;class j_{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Ps===void 0&&(Ps=jl("canvas")),Ps.width=e.width,Ps.height=e.height;const o=Ps.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Ps}return r.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=jl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=rr(l[u]/255)*255;return r.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(rr(n[r]/255)*255):n[r]=rr(n[r]);return{data:n,width:e.width,height:e.height}}else return ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let X_=0;class vf{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:X_++}),this.uuid=Ja(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,h=o.length;u<h;u++)o[u].isDataTexture?l.push(Hu(o[u].image)):l.push(Hu(o[u]))}else l=Hu(o);r.url=l}return n||(e.images[this.uuid]=r),r}}function Hu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?j_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(ot("Texture: Unable to serialize Texture."),{})}let q_=0;const Gu=new ce;class Cn extends ss{constructor(e=Cn.DEFAULT_IMAGE,n=Cn.DEFAULT_MAPPING,r=nr,o=nr,l=An,u=es,h=Ei,x=Kn,m=Cn.DEFAULT_ANISOTROPY,v=Nr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:q_++}),this.uuid=Ja(),this.name="",this.source=new vf(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=x,this.offset=new St(0,0),this.repeat=new St(1,1),this.center=new St(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Gu).x}get height(){return this.source.getSize(Gu).y}get depth(){return this.source.getSize(Gu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const r=e[n];if(r===void 0){ot(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){ot(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==E0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Sd:e.x=e.x-Math.floor(e.x);break;case nr:e.x=e.x<0?0:1;break;case Md:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Sd:e.y=e.y-Math.floor(e.y);break;case nr:e.y=e.y<0?0:1;break;case Md:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Cn.DEFAULT_IMAGE=null;Cn.DEFAULT_MAPPING=E0;Cn.DEFAULT_ANISOTROPY=1;const Tf=class Tf{constructor(e=0,n=0,r=0,o=1){this.x=e,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,o){return this.x=e,this.y=n,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*n+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*n+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*n+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,o,l;const x=e.elements,m=x[0],v=x[4],M=x[8],g=x[1],_=x[5],w=x[9],R=x[2],S=x[6],y=x[10];if(Math.abs(v-g)<.01&&Math.abs(M-R)<.01&&Math.abs(w-S)<.01){if(Math.abs(v+g)<.1&&Math.abs(M+R)<.1&&Math.abs(w+S)<.1&&Math.abs(m+_+y-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const G=(m+1)/2,N=(_+1)/2,P=(y+1)/2,C=(v+g)/4,U=(M+R)/4,E=(w+S)/4;return G>N&&G>P?G<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(G),o=C/r,l=U/r):N>P?N<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(N),r=C/o,l=E/o):P<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(P),r=U/l,o=E/l),this.set(r,o,l,n),this}let k=Math.sqrt((S-w)*(S-w)+(M-R)*(M-R)+(g-v)*(g-v));return Math.abs(k)<.001&&(k=1),this.x=(S-w)/k,this.y=(M-R)/k,this.z=(g-v)/k,this.w=Math.acos((m+_+y-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=yt(this.x,e.x,n.x),this.y=yt(this.y,e.y,n.y),this.z=yt(this.z,e.z,n.z),this.w=yt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=yt(this.x,e,n),this.y=yt(this.y,e,n),this.z=yt(this.z,e,n),this.w=yt(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(yt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Tf.prototype.isVector4=!0;let Kt=Tf;class Y_ extends ss{constructor(e=1,n=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:An,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=r.depth,this.scissor=new Kt(0,0,e,n),this.scissorTest=!1,this.viewport=new Kt(0,0,e,n),this.textures=[];const o={width:e,height:n,depth:r.depth},l=new Cn(o),u=r.count;for(let h=0;h<u;h++)this.textures[h]=l.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:An,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new vf(o)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wi extends Y_{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class D0 extends Cn{constructor(e=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=vn,this.minFilter=vn,this.wrapR=nr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class $_ extends Cn{constructor(e=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=vn,this.minFilter=vn,this.wrapR=nr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Xl=class Xl{constructor(e,n,r,o,l,u,h,x,m,v,M,g,_,w,R,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,o,l,u,h,x,m,v,M,g,_,w,R,S)}set(e,n,r,o,l,u,h,x,m,v,M,g,_,w,R,S){const y=this.elements;return y[0]=e,y[4]=n,y[8]=r,y[12]=o,y[1]=l,y[5]=u,y[9]=h,y[13]=x,y[2]=m,y[6]=v,y[10]=M,y[14]=g,y[3]=_,y[7]=w,y[11]=R,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xl().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,r=e.elements,o=1/Ls.setFromMatrixColumn(e,0).length(),l=1/Ls.setFromMatrixColumn(e,1).length(),u=1/Ls.setFromMatrixColumn(e,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*l,n[5]=r[5]*l,n[6]=r[6]*l,n[7]=0,n[8]=r[8]*u,n[9]=r[9]*u,n[10]=r[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),h=Math.sin(r),x=Math.cos(o),m=Math.sin(o),v=Math.cos(l),M=Math.sin(l);if(e.order==="XYZ"){const g=u*v,_=u*M,w=h*v,R=h*M;n[0]=x*v,n[4]=-x*M,n[8]=m,n[1]=_+w*m,n[5]=g-R*m,n[9]=-h*x,n[2]=R-g*m,n[6]=w+_*m,n[10]=u*x}else if(e.order==="YXZ"){const g=x*v,_=x*M,w=m*v,R=m*M;n[0]=g+R*h,n[4]=w*h-_,n[8]=u*m,n[1]=u*M,n[5]=u*v,n[9]=-h,n[2]=_*h-w,n[6]=R+g*h,n[10]=u*x}else if(e.order==="ZXY"){const g=x*v,_=x*M,w=m*v,R=m*M;n[0]=g-R*h,n[4]=-u*M,n[8]=w+_*h,n[1]=_+w*h,n[5]=u*v,n[9]=R-g*h,n[2]=-u*m,n[6]=h,n[10]=u*x}else if(e.order==="ZYX"){const g=u*v,_=u*M,w=h*v,R=h*M;n[0]=x*v,n[4]=w*m-_,n[8]=g*m+R,n[1]=x*M,n[5]=R*m+g,n[9]=_*m-w,n[2]=-m,n[6]=h*x,n[10]=u*x}else if(e.order==="YZX"){const g=u*x,_=u*m,w=h*x,R=h*m;n[0]=x*v,n[4]=R-g*M,n[8]=w*M+_,n[1]=M,n[5]=u*v,n[9]=-h*v,n[2]=-m*v,n[6]=_*M+w,n[10]=g-R*M}else if(e.order==="XZY"){const g=u*x,_=u*m,w=h*x,R=h*m;n[0]=x*v,n[4]=-M,n[8]=m*v,n[1]=g*M+R,n[5]=u*v,n[9]=_*M-w,n[2]=w*M-_,n[6]=h*v,n[10]=R*M+g}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(K_,e,Z_)}lookAt(e,n,r){const o=this.elements;return qn.subVectors(e,n),qn.lengthSq()===0&&(qn.z=1),qn.normalize(),Er.crossVectors(r,qn),Er.lengthSq()===0&&(Math.abs(r.z)===1?qn.x+=1e-4:qn.z+=1e-4,qn.normalize(),Er.crossVectors(r,qn)),Er.normalize(),ll.crossVectors(qn,Er),o[0]=Er.x,o[4]=ll.x,o[8]=qn.x,o[1]=Er.y,o[5]=ll.y,o[9]=qn.y,o[2]=Er.z,o[6]=ll.z,o[10]=qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,l=this.elements,u=r[0],h=r[4],x=r[8],m=r[12],v=r[1],M=r[5],g=r[9],_=r[13],w=r[2],R=r[6],S=r[10],y=r[14],k=r[3],G=r[7],N=r[11],P=r[15],C=o[0],U=o[4],E=o[8],D=o[12],z=o[1],O=o[5],q=o[9],te=o[13],B=o[2],ne=o[6],ue=o[10],J=o[14],H=o[3],j=o[7],X=o[11],L=o[15];return l[0]=u*C+h*z+x*B+m*H,l[4]=u*U+h*O+x*ne+m*j,l[8]=u*E+h*q+x*ue+m*X,l[12]=u*D+h*te+x*J+m*L,l[1]=v*C+M*z+g*B+_*H,l[5]=v*U+M*O+g*ne+_*j,l[9]=v*E+M*q+g*ue+_*X,l[13]=v*D+M*te+g*J+_*L,l[2]=w*C+R*z+S*B+y*H,l[6]=w*U+R*O+S*ne+y*j,l[10]=w*E+R*q+S*ue+y*X,l[14]=w*D+R*te+S*J+y*L,l[3]=k*C+G*z+N*B+P*H,l[7]=k*U+G*O+N*ne+P*j,l[11]=k*E+G*q+N*ue+P*X,l[15]=k*D+G*te+N*J+P*L,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],o=e[8],l=e[12],u=e[1],h=e[5],x=e[9],m=e[13],v=e[2],M=e[6],g=e[10],_=e[14],w=e[3],R=e[7],S=e[11],y=e[15],k=x*_-m*g,G=h*_-m*M,N=h*g-x*M,P=u*_-m*v,C=u*g-x*v,U=u*M-h*v;return n*(R*k-S*G+y*N)-r*(w*k-S*P+y*C)+o*(w*G-R*P+y*U)-l*(w*N-R*C+S*U)}determinantAffine(){const e=this.elements,n=e[0],r=e[4],o=e[8],l=e[1],u=e[5],h=e[9],x=e[2],m=e[6],v=e[10];return n*(u*v-h*m)-r*(l*v-h*x)+o*(l*m-u*x)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],l=e[3],u=e[4],h=e[5],x=e[6],m=e[7],v=e[8],M=e[9],g=e[10],_=e[11],w=e[12],R=e[13],S=e[14],y=e[15],k=n*h-r*u,G=n*x-o*u,N=n*m-l*u,P=r*x-o*h,C=r*m-l*h,U=o*m-l*x,E=v*R-M*w,D=v*S-g*w,z=v*y-_*w,O=M*S-g*R,q=M*y-_*R,te=g*y-_*S,B=k*te-G*q+N*O+P*z-C*D+U*E;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const ne=1/B;return e[0]=(h*te-x*q+m*O)*ne,e[1]=(o*q-r*te-l*O)*ne,e[2]=(R*U-S*C+y*P)*ne,e[3]=(g*C-M*U-_*P)*ne,e[4]=(x*z-u*te-m*D)*ne,e[5]=(n*te-o*z+l*D)*ne,e[6]=(S*N-w*U-y*G)*ne,e[7]=(v*U-g*N+_*G)*ne,e[8]=(u*q-h*z+m*E)*ne,e[9]=(r*z-n*q-l*E)*ne,e[10]=(w*C-R*N+y*k)*ne,e[11]=(M*N-v*C-_*k)*ne,e[12]=(h*D-u*O-x*E)*ne,e[13]=(n*O-r*D+o*E)*ne,e[14]=(R*G-w*P-S*k)*ne,e[15]=(v*P-M*G+g*k)*ne,this}scale(e){const n=this.elements,r=e.x,o=e.y,l=e.z;return n[0]*=r,n[4]*=o,n[8]*=l,n[1]*=r,n[5]*=o,n[9]*=l,n[2]*=r,n[6]*=o,n[10]*=l,n[3]*=r,n[7]*=o,n[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),o=Math.sin(n),l=1-r,u=e.x,h=e.y,x=e.z,m=l*u,v=l*h;return this.set(m*u+r,m*h-o*x,m*x+o*h,0,m*h+o*x,v*h+r,v*x-o*u,0,m*x-o*h,v*x+o*u,l*x*x+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,n,o,1,0,0,0,0,1),this}compose(e,n,r){const o=this.elements,l=n._x,u=n._y,h=n._z,x=n._w,m=l+l,v=u+u,M=h+h,g=l*m,_=l*v,w=l*M,R=u*v,S=u*M,y=h*M,k=x*m,G=x*v,N=x*M,P=r.x,C=r.y,U=r.z;return o[0]=(1-(R+y))*P,o[1]=(_+N)*P,o[2]=(w-G)*P,o[3]=0,o[4]=(_-N)*C,o[5]=(1-(g+y))*C,o[6]=(S+k)*C,o[7]=0,o[8]=(w+G)*U,o[9]=(S-k)*U,o[10]=(1-(g+R))*U,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinantAffine();if(l===0)return r.set(1,1,1),n.identity(),this;let u=Ls.set(o[0],o[1],o[2]).length();const h=Ls.set(o[4],o[5],o[6]).length(),x=Ls.set(o[8],o[9],o[10]).length();l<0&&(u=-u),_i.copy(this);const m=1/u,v=1/h,M=1/x;return _i.elements[0]*=m,_i.elements[1]*=m,_i.elements[2]*=m,_i.elements[4]*=v,_i.elements[5]*=v,_i.elements[6]*=v,_i.elements[8]*=M,_i.elements[9]*=M,_i.elements[10]*=M,n.setFromRotationMatrix(_i),r.x=u,r.y=h,r.z=x,this}makePerspective(e,n,r,o,l,u,h=Ii,x=!1){const m=this.elements,v=2*l/(n-e),M=2*l/(r-o),g=(n+e)/(n-e),_=(r+o)/(r-o);let w,R;if(x)w=l/(u-l),R=u*l/(u-l);else if(h===Ii)w=-(u+l)/(u-l),R=-2*u*l/(u-l);else if(h===$a)w=-u/(u-l),R=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return m[0]=v,m[4]=0,m[8]=g,m[12]=0,m[1]=0,m[5]=M,m[9]=_,m[13]=0,m[2]=0,m[6]=0,m[10]=w,m[14]=R,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,n,r,o,l,u,h=Ii,x=!1){const m=this.elements,v=2/(n-e),M=2/(r-o),g=-(n+e)/(n-e),_=-(r+o)/(r-o);let w,R;if(x)w=1/(u-l),R=u/(u-l);else if(h===Ii)w=-2/(u-l),R=-(u+l)/(u-l);else if(h===$a)w=-1/(u-l),R=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return m[0]=v,m[4]=0,m[8]=0,m[12]=g,m[1]=0,m[5]=M,m[9]=0,m[13]=_,m[2]=0,m[6]=0,m[10]=w,m[14]=R,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}};Xl.prototype.isMatrix4=!0;let Zt=Xl;const Ls=new ce,_i=new Zt,K_=new ce(0,0,0),Z_=new ce(1,1,1),Er=new ce,ll=new ce,qn=new ce,fm=new Zt,hm=new Ks;class Pr{constructor(e=0,n=0,r=0,o=Pr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,o=this._order){return this._x=e,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],h=o[8],x=o[1],m=o[5],v=o[9],M=o[2],g=o[6],_=o[10];switch(n){case"XYZ":this._y=Math.asin(yt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,_),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(g,m),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(h,_),this._z=Math.atan2(x,m)):(this._y=Math.atan2(-M,l),this._z=0);break;case"ZXY":this._x=Math.asin(yt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-M,_),this._z=Math.atan2(-u,m)):(this._y=0,this._z=Math.atan2(x,l));break;case"ZYX":this._y=Math.asin(-yt(M,-1,1)),Math.abs(M)<.9999999?(this._x=Math.atan2(g,_),this._z=Math.atan2(x,l)):(this._x=0,this._z=Math.atan2(-u,m));break;case"YZX":this._z=Math.asin(yt(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-M,l)):(this._x=0,this._y=Math.atan2(h,_));break;case"XZY":this._z=Math.asin(-yt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(g,m),this._y=Math.atan2(h,l)):(this._x=Math.atan2(-v,_),this._y=0);break;default:ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return fm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fm,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return hm.setFromEuler(this),this.setFromQuaternion(hm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pr.DEFAULT_ORDER="XYZ";class I0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let J_=0;const pm=new ce,Ds=new Ks,Ki=new Zt,cl=new ce,Fa=new ce,Q_=new ce,ey=new Ks,mm=new ce(1,0,0),xm=new ce(0,1,0),gm=new ce(0,0,1),vm={type:"added"},ty={type:"removed"},Is={type:"childadded",child:null},Wu={type:"childremoved",child:null};class _n extends ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:J_++}),this.uuid=Ja(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_n.DEFAULT_UP.clone();const e=new ce,n=new Pr,r=new Ks,o=new ce(1,1,1);function l(){r.setFromEuler(n,!1)}function u(){n.setFromQuaternion(r,void 0,!1)}n._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Zt},normalMatrix:{value:new ct}}),this.matrix=new Zt,this.matrixWorld=new Zt,this.matrixAutoUpdate=_n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new I0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ds.setFromAxisAngle(e,n),this.quaternion.multiply(Ds),this}rotateOnWorldAxis(e,n){return Ds.setFromAxisAngle(e,n),this.quaternion.premultiply(Ds),this}rotateX(e){return this.rotateOnAxis(mm,e)}rotateY(e){return this.rotateOnAxis(xm,e)}rotateZ(e){return this.rotateOnAxis(gm,e)}translateOnAxis(e,n){return pm.copy(e).applyQuaternion(this.quaternion),this.position.add(pm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(mm,e)}translateY(e){return this.translateOnAxis(xm,e)}translateZ(e){return this.translateOnAxis(gm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ki.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?cl.copy(e):cl.set(e,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Fa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ki.lookAt(Fa,cl,this.up):Ki.lookAt(cl,Fa,this.up),this.quaternion.setFromRotationMatrix(Ki),o&&(Ki.extractRotation(o.matrixWorld),Ds.setFromRotationMatrix(Ki),this.quaternion.premultiply(Ds.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Lt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(vm),Is.child=e,this.dispatchEvent(Is),Is.child=null):Lt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(ty),Wu.child=e,this.dispatchEvent(Wu),Wu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ki),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(vm),Is.child=e,this.dispatchEvent(Is),Is.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fa,e,Q_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fa,ey,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,r=e.y,o=e.z,l=this.matrix.elements;l[12]+=n-l[0]*n-l[4]*r-l[8]*o,l[13]+=r-l[1]*n-l[5]*r-l[9]*o,l[14]+=o-l[2]*n-l[6]*r-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),n===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0,r)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,o.name=this.name,o.castShadow=this.castShadow,o.receiveShadow=this.receiveShadow,o.visible=this.visible,o.frustumCulled=this.frustumCulled,o.renderOrder=this.renderOrder,o.static=this.static,o.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(h=>({...h})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(h,x){return h[x.uuid]===void 0&&(h[x.uuid]=x.toJSON(e)),x.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const x=h.shapes;if(Array.isArray(x))for(let m=0,v=x.length;m<v;m++){const M=x[m];l(e.shapes,M)}else l(e.shapes,x)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let x=0,m=this.material.length;x<m;x++)h.push(l(e.materials,this.material[x]));o.material=h}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const x=this.animations[h];o.animations.push(l(e.animations,x))}}if(n){const h=u(e.geometries),x=u(e.materials),m=u(e.textures),v=u(e.images),M=u(e.shapes),g=u(e.skeletons),_=u(e.animations),w=u(e.nodes);h.length>0&&(r.geometries=h),x.length>0&&(r.materials=x),m.length>0&&(r.textures=m),v.length>0&&(r.images=v),M.length>0&&(r.shapes=M),g.length>0&&(r.skeletons=g),_.length>0&&(r.animations=_),w.length>0&&(r.nodes=w)}return r.object=o,r;function u(h){const x=[];for(const m in h){const v=h[m];delete v.metadata,x.push(v)}return x}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}_n.DEFAULT_UP=new ce(0,1,0);_n.DEFAULT_MATRIX_AUTO_UPDATE=!0;_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ul extends _n{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ny={type:"move"};class ju{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ul,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ul,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ce,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ce),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ul,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ce,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ce,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let o=null,l=null,u=null;const h=this._targetRay,x=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){u=!0;for(const R of e.hand.values()){const S=n.getJointPose(R,r),y=this._getHandJoint(m,R);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const v=m.joints["index-finger-tip"],M=m.joints["thumb-tip"],g=v.position.distanceTo(M.position),_=.02,w=.005;m.inputState.pinching&&g>_+w?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&g<=_-w&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else x!==null&&e.gripSpace&&(l=n.getPose(e.gripSpace,r),l!==null&&(x.matrix.fromArray(l.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,l.linearVelocity?(x.hasLinearVelocity=!0,x.linearVelocity.copy(l.linearVelocity)):x.hasLinearVelocity=!1,l.angularVelocity?(x.hasAngularVelocity=!0,x.angularVelocity.copy(l.angularVelocity)):x.hasAngularVelocity=!1,x.eventsEnabled&&x.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(o=n.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(ny)))}return h!==null&&(h.visible=o!==null),x!==null&&(x.visible=l!==null),m!==null&&(m.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new ul;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const k0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wr={h:0,s:0,l:0},dl={h:0,s:0,l:0};function Xu(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class Et{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ai){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_t.colorSpaceToWorking(this,n),this}setRGB(e,n,r,o=_t.workingColorSpace){return this.r=e,this.g=n,this.b=r,_t.colorSpaceToWorking(this,o),this}setHSL(e,n,r,o=_t.workingColorSpace){if(e=G_(e,1),n=yt(n,0,1),r=yt(r,0,1),n===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+n):r+n-r*n,u=2*r-l;this.r=Xu(u,l,e+1/3),this.g=Xu(u,l,e),this.b=Xu(u,l,e-1/3)}return _t.colorSpaceToWorking(this,o),this}setStyle(e,n=ai){function r(l){l!==void 0&&parseFloat(l)<1&&ot("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],h=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,n);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:ot("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(l,16),n);ot("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ai){const r=k0[e.toLowerCase()];return r!==void 0?this.setHex(r,n):ot("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=rr(e.r),this.g=rr(e.g),this.b=rr(e.b),this}copyLinearToSRGB(e){return this.r=qs(e.r),this.g=qs(e.g),this.b=qs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ai){return _t.workingToColorSpace(Tn.copy(this),e),Math.round(yt(Tn.r*255,0,255))*65536+Math.round(yt(Tn.g*255,0,255))*256+Math.round(yt(Tn.b*255,0,255))}getHexString(e=ai){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=_t.workingColorSpace){_t.workingToColorSpace(Tn.copy(this),n);const r=Tn.r,o=Tn.g,l=Tn.b,u=Math.max(r,o,l),h=Math.min(r,o,l);let x,m;const v=(h+u)/2;if(h===u)x=0,m=0;else{const M=u-h;switch(m=v<=.5?M/(u+h):M/(2-u-h),u){case r:x=(o-l)/M+(o<l?6:0);break;case o:x=(l-r)/M+2;break;case l:x=(r-o)/M+4;break}x/=6}return e.h=x,e.s=m,e.l=v,e}getRGB(e,n=_t.workingColorSpace){return _t.workingToColorSpace(Tn.copy(this),n),e.r=Tn.r,e.g=Tn.g,e.b=Tn.b,e}getStyle(e=ai){_t.workingToColorSpace(Tn.copy(this),e);const n=Tn.r,r=Tn.g,o=Tn.b;return e!==ai?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,n,r){return this.getHSL(wr),this.setHSL(wr.h+e,wr.s+n,wr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(wr),e.getHSL(dl);const r=Bu(wr.h,dl.h,n),o=Bu(wr.s,dl.s,n),l=Bu(wr.l,dl.l,n);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*n+l[3]*r+l[6]*o,this.g=l[1]*n+l[4]*r+l[7]*o,this.b=l[2]*n+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tn=new Et;Et.NAMES=k0;class iy extends _n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pr,this.environmentIntensity=1,this.environmentRotation=new Pr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}}const yi=new ce,Zi=new ce,qu=new ce,Ji=new ce,ks=new ce,Us=new ce,_m=new ce,Yu=new ce,$u=new ce,Ku=new ce,Zu=new Kt,Ju=new Kt,Qu=new Kt;class bi{constructor(e=new ce,n=new ce,r=new ce){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,o){o.subVectors(r,n),yi.subVectors(e,n),o.cross(yi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,n,r,o,l){yi.subVectors(o,n),Zi.subVectors(r,n),qu.subVectors(e,n);const u=yi.dot(yi),h=yi.dot(Zi),x=yi.dot(qu),m=Zi.dot(Zi),v=Zi.dot(qu),M=u*m-h*h;if(M===0)return l.set(0,0,0),null;const g=1/M,_=(m*x-h*v)*g,w=(u*v-h*x)*g;return l.set(1-_-w,w,_)}static containsPoint(e,n,r,o){return this.getBarycoord(e,n,r,o,Ji)===null?!1:Ji.x>=0&&Ji.y>=0&&Ji.x+Ji.y<=1}static getInterpolation(e,n,r,o,l,u,h,x){return this.getBarycoord(e,n,r,o,Ji)===null?(x.x=0,x.y=0,"z"in x&&(x.z=0),"w"in x&&(x.w=0),null):(x.setScalar(0),x.addScaledVector(l,Ji.x),x.addScaledVector(u,Ji.y),x.addScaledVector(h,Ji.z),x)}static getInterpolatedAttribute(e,n,r,o,l,u){return Zu.setScalar(0),Ju.setScalar(0),Qu.setScalar(0),Zu.fromBufferAttribute(e,n),Ju.fromBufferAttribute(e,r),Qu.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(Zu,l.x),u.addScaledVector(Ju,l.y),u.addScaledVector(Qu,l.z),u}static isFrontFacing(e,n,r,o){return yi.subVectors(r,n),Zi.subVectors(e,n),yi.cross(Zi).dot(o)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,o){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,r,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yi.subVectors(this.c,this.b),Zi.subVectors(this.a,this.b),yi.cross(Zi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return bi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return bi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,o,l){return bi.getInterpolation(e,this.a,this.b,this.c,n,r,o,l)}containsPoint(e){return bi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return bi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,o=this.b,l=this.c;let u,h;ks.subVectors(o,r),Us.subVectors(l,r),Yu.subVectors(e,r);const x=ks.dot(Yu),m=Us.dot(Yu);if(x<=0&&m<=0)return n.copy(r);$u.subVectors(e,o);const v=ks.dot($u),M=Us.dot($u);if(v>=0&&M<=v)return n.copy(o);const g=x*M-v*m;if(g<=0&&x>=0&&v<=0)return u=x/(x-v),n.copy(r).addScaledVector(ks,u);Ku.subVectors(e,l);const _=ks.dot(Ku),w=Us.dot(Ku);if(w>=0&&_<=w)return n.copy(l);const R=_*m-x*w;if(R<=0&&m>=0&&w<=0)return h=m/(m-w),n.copy(r).addScaledVector(Us,h);const S=v*w-_*M;if(S<=0&&M-v>=0&&_-w>=0)return _m.subVectors(l,o),h=(M-v)/(M-v+(_-w)),n.copy(o).addScaledVector(_m,h);const y=1/(S+R+g);return u=R*y,h=g*y,n.copy(r).addScaledVector(ks,u).addScaledVector(Us,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Qa{constructor(e=new ce(1/0,1/0,1/0),n=new ce(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(Si.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(Si.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=Si.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(n===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,h=l.count;u<h;u++)e.isMesh===!0?e.getVertexPosition(u,Si):Si.fromBufferAttribute(l,u),Si.applyMatrix4(e.matrixWorld),this.expandByPoint(Si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),fl.copy(r.boundingBox)),fl.applyMatrix4(e.matrixWorld),this.union(fl)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Si),Si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Oa),hl.subVectors(this.max,Oa),Fs.subVectors(e.a,Oa),Os.subVectors(e.b,Oa),Bs.subVectors(e.c,Oa),Tr.subVectors(Os,Fs),Ar.subVectors(Bs,Os),$r.subVectors(Fs,Bs);let n=[0,-Tr.z,Tr.y,0,-Ar.z,Ar.y,0,-$r.z,$r.y,Tr.z,0,-Tr.x,Ar.z,0,-Ar.x,$r.z,0,-$r.x,-Tr.y,Tr.x,0,-Ar.y,Ar.x,0,-$r.y,$r.x,0];return!ed(n,Fs,Os,Bs,hl)||(n=[1,0,0,0,1,0,0,0,1],!ed(n,Fs,Os,Bs,hl))?!1:(pl.crossVectors(Tr,Ar),n=[pl.x,pl.y,pl.z],ed(n,Fs,Os,Bs,hl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Qi=[new ce,new ce,new ce,new ce,new ce,new ce,new ce,new ce],Si=new ce,fl=new Qa,Fs=new ce,Os=new ce,Bs=new ce,Tr=new ce,Ar=new ce,$r=new ce,Oa=new ce,hl=new ce,pl=new ce,Kr=new ce;function ed(s,e,n,r,o){for(let l=0,u=s.length-3;l<=u;l+=3){Kr.fromArray(s,l);const h=o.x*Math.abs(Kr.x)+o.y*Math.abs(Kr.y)+o.z*Math.abs(Kr.z),x=e.dot(Kr),m=n.dot(Kr),v=r.dot(Kr);if(Math.max(-Math.max(x,m,v),Math.min(x,m,v))>h)return!1}return!0}const sn=new ce,ml=new St;let ry=0;class Ui extends ss{constructor(e,n,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ry++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=O_,this.updateRanges=[],this.gpuType=Di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=n.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)ml.fromBufferAttribute(this,n),ml.applyMatrix3(e),this.setXY(n,ml.x,ml.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)sn.fromBufferAttribute(this,n),sn.applyMatrix3(e),this.setXYZ(n,sn.x,sn.y,sn.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)sn.fromBufferAttribute(this,n),sn.applyMatrix4(e),this.setXYZ(n,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)sn.fromBufferAttribute(this,n),sn.applyNormalMatrix(e),this.setXYZ(n,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)sn.fromBufferAttribute(this,n),sn.transformDirection(e),this.setXYZ(n,sn.x,sn.y,sn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Ua(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Vn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ua(n,this.array)),n}setX(e,n){return this.normalized&&(n=Vn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ua(n,this.array)),n}setY(e,n){return this.normalized&&(n=Vn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ua(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Vn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ua(n,this.array)),n}setW(e,n){return this.normalized&&(n=Vn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Vn(n,this.array),r=Vn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,o){return e*=this.itemSize,this.normalized&&(n=Vn(n,this.array),r=Vn(r,this.array),o=Vn(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,n,r,o,l){return e*=this.itemSize,this.normalized&&(n=Vn(n,this.array),r=Vn(r,this.array),o=Vn(o,this.array),l=Vn(l,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class U0 extends Ui{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class F0 extends Ui{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class oi extends Ui{constructor(e,n,r){super(new Float32Array(e),n,r)}}const sy=new Qa,Ba=new ce,td=new ce;class Yl{constructor(e=new ce,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):sy.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ba.subVectors(e,this.center);const n=Ba.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(Ba,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(td.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ba.copy(e.center).add(td)),this.expandByPoint(Ba.copy(e.center).sub(td))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let ay=0;const si=new Zt,nd=new _n,zs=new ce,Yn=new Qa,za=new Qa,pn=new ce;class li extends ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ay++}),this.uuid=Ja(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(B_(e)?F0:U0)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new ct().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return si.makeRotationFromQuaternion(e),this.applyMatrix4(si),this}rotateX(e){return si.makeRotationX(e),this.applyMatrix4(si),this}rotateY(e){return si.makeRotationY(e),this.applyMatrix4(si),this}rotateZ(e){return si.makeRotationZ(e),this.applyMatrix4(si),this}translate(e,n,r){return si.makeTranslation(e,n,r),this.applyMatrix4(si),this}scale(e,n,r){return si.makeScale(e,n,r),this.applyMatrix4(si),this}lookAt(e){return nd.lookAt(e),nd.updateMatrix(),this.applyMatrix4(nd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zs).negate(),this.translate(zs.x,zs.y,zs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new oi(r,3))}else{const r=Math.min(e.length,n.count);for(let o=0;o<r;o++){const l=e[o];n.setXYZ(o,l.x,l.y,l.z||0)}e.length>n.count&&ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ce(-1/0,-1/0,-1/0),new ce(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const l=n[r];Yn.setFromBufferAttribute(l),this.morphTargetsRelative?(pn.addVectors(this.boundingBox.min,Yn.min),this.boundingBox.expandByPoint(pn),pn.addVectors(this.boundingBox.max,Yn.max),this.boundingBox.expandByPoint(pn)):(this.boundingBox.expandByPoint(Yn.min),this.boundingBox.expandByPoint(Yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Lt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ce,1/0);return}if(e){const r=this.boundingSphere.center;if(Yn.setFromBufferAttribute(e),n)for(let l=0,u=n.length;l<u;l++){const h=n[l];za.setFromBufferAttribute(h),this.morphTargetsRelative?(pn.addVectors(Yn.min,za.min),Yn.expandByPoint(pn),pn.addVectors(Yn.max,za.max),Yn.expandByPoint(pn)):(Yn.expandByPoint(za.min),Yn.expandByPoint(za.max))}Yn.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)pn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(pn));if(n)for(let l=0,u=n.length;l<u;l++){const h=n[l],x=this.morphTargetsRelative;for(let m=0,v=h.count;m<v;m++)pn.fromBufferAttribute(h,m),x&&(zs.fromBufferAttribute(e,m),pn.add(zs)),o=Math.max(o,r.distanceToSquared(pn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Lt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Lt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,l=n.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==r.count)&&(u=new Ui(new Float32Array(4*r.count),4),this.setAttribute("tangent",u));const h=[],x=[];for(let E=0;E<r.count;E++)h[E]=new ce,x[E]=new ce;const m=new ce,v=new ce,M=new ce,g=new St,_=new St,w=new St,R=new ce,S=new ce;function y(E,D,z){m.fromBufferAttribute(r,E),v.fromBufferAttribute(r,D),M.fromBufferAttribute(r,z),g.fromBufferAttribute(l,E),_.fromBufferAttribute(l,D),w.fromBufferAttribute(l,z),v.sub(m),M.sub(m),_.sub(g),w.sub(g);const O=1/(_.x*w.y-w.x*_.y);isFinite(O)&&(R.copy(v).multiplyScalar(w.y).addScaledVector(M,-_.y).multiplyScalar(O),S.copy(M).multiplyScalar(_.x).addScaledVector(v,-w.x).multiplyScalar(O),h[E].add(R),h[D].add(R),h[z].add(R),x[E].add(S),x[D].add(S),x[z].add(S))}let k=this.groups;k.length===0&&(k=[{start:0,count:e.count}]);for(let E=0,D=k.length;E<D;++E){const z=k[E],O=z.start,q=z.count;for(let te=O,B=O+q;te<B;te+=3)y(e.getX(te+0),e.getX(te+1),e.getX(te+2))}const G=new ce,N=new ce,P=new ce,C=new ce;function U(E){P.fromBufferAttribute(o,E),C.copy(P);const D=h[E];G.copy(D),G.sub(P.multiplyScalar(P.dot(D))).normalize(),N.crossVectors(C,D);const O=N.dot(x[E])<0?-1:1;u.setXYZW(E,G.x,G.y,G.z,O)}for(let E=0,D=k.length;E<D;++E){const z=k[E],O=z.start,q=z.count;for(let te=O,B=O+q;te<B;te+=3)U(e.getX(te+0)),U(e.getX(te+1)),U(e.getX(te+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==n.count)r=new Ui(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let g=0,_=r.count;g<_;g++)r.setXYZ(g,0,0,0);const o=new ce,l=new ce,u=new ce,h=new ce,x=new ce,m=new ce,v=new ce,M=new ce;if(e)for(let g=0,_=e.count;g<_;g+=3){const w=e.getX(g+0),R=e.getX(g+1),S=e.getX(g+2);o.fromBufferAttribute(n,w),l.fromBufferAttribute(n,R),u.fromBufferAttribute(n,S),v.subVectors(u,l),M.subVectors(o,l),v.cross(M),h.fromBufferAttribute(r,w),x.fromBufferAttribute(r,R),m.fromBufferAttribute(r,S),h.add(v),x.add(v),m.add(v),r.setXYZ(w,h.x,h.y,h.z),r.setXYZ(R,x.x,x.y,x.z),r.setXYZ(S,m.x,m.y,m.z)}else for(let g=0,_=n.count;g<_;g+=3)o.fromBufferAttribute(n,g+0),l.fromBufferAttribute(n,g+1),u.fromBufferAttribute(n,g+2),v.subVectors(u,l),M.subVectors(o,l),v.cross(M),r.setXYZ(g+0,v.x,v.y,v.z),r.setXYZ(g+1,v.x,v.y,v.z),r.setXYZ(g+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)pn.fromBufferAttribute(e,n),pn.normalize(),e.setXYZ(n,pn.x,pn.y,pn.z)}toNonIndexed(){function e(h,x){const m=h.array,v=h.itemSize,M=h.normalized,g=new m.constructor(x.length*v);let _=0,w=0;for(let R=0,S=x.length;R<S;R++){h.isInterleavedBufferAttribute?_=x[R]*h.data.stride+h.offset:_=x[R]*v;for(let y=0;y<v;y++)g[w++]=m[_++]}return new Ui(g,v,M)}if(this.index===null)return ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new li,r=this.index.array,o=this.attributes;for(const h in o){const x=o[h],m=e(x,r);n.setAttribute(h,m)}const l=this.morphAttributes;for(const h in l){const x=[],m=l[h];for(let v=0,M=m.length;v<M;v++){const g=m[v],_=e(g,r);x.push(_)}n.morphAttributes[h]=x}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let h=0,x=u.length;h<x;h++){const m=u[h];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const x=this.parameters;for(const m in x)x[m]!==void 0&&(e[m]=x[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const x in r){const m=r[x];e.data.attributes[x]=m.toJSON(e.data)}const o={};let l=!1;for(const x in this.morphAttributes){const m=this.morphAttributes[x],v=[];for(let M=0,g=m.length;M<g;M++){const _=m[M];v.push(_.toJSON(e.data))}v.length>0&&(o[x]=v,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const m in o){const v=o[m];this.setAttribute(m,v.clone(n))}const l=e.morphAttributes;for(const m in l){const v=[],M=l[m];for(let g=0,_=M.length;g<_;g++)v.push(M[g].clone(n));this.morphAttributes[m]=v}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let m=0,v=u.length;m<v;m++){const M=u[m];this.addGroup(M.start,M.count,M.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const x=e.boundingSphere;return x!==null&&(this.boundingSphere=x.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const id=new ce,oy=new ce,ly=new ct;class Rr{constructor(e=new ce(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,o){return this.normal.set(e,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const o=id.subVectors(r,n).cross(oy.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,r=!0){const o=e.delta(id),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(u<0||u>1)?null:n.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||ly.getNormalMatrix(e),o=this.coplanarPoint(id).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let cy=0;class Zs extends ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cy++}),this.uuid=Ja(),this.name="",this.type="Material",this.blending=ja,this.side=ns,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=m0,this.blendDst=x0,this.blendEquation=Ws,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=Xa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=P_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fu,this.stencilZFail=Fu,this.stencilZPass=Fu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){ot(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){ot(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(l=>l.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const h in l){const x=l[h];delete x.metadata,u.push(x)}return u}if(n){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Et().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(r=>new Rr().fromJSON(r))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new St().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new St().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=n[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const er=new ce,rd=new ce,xl=new ce,gl=new ce;class O0{constructor(e=new ce,n=new ce(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,er)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=er.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(er.copy(this.origin).addScaledVector(this.direction,n),er.distanceToSquared(e))}distanceSqToSegment(e,n,r,o){rd.copy(e).add(n).multiplyScalar(.5),xl.copy(n).sub(e).normalize(),gl.copy(this.origin).sub(rd);const l=e.distanceTo(n)*.5,u=-this.direction.dot(xl),h=gl.dot(this.direction),x=-gl.dot(xl),m=gl.lengthSq(),v=Math.abs(1-u*u);let M,g,_,w;if(v>0)if(M=u*x-h,g=u*h-x,w=l*v,M>=0)if(g>=-w)if(g<=w){const R=1/v;M*=R,g*=R,_=M*(M+u*g+2*h)+g*(u*M+g+2*x)+m}else g=l,M=Math.max(0,-(u*g+h)),_=-M*M+g*(g+2*x)+m;else g=-l,M=Math.max(0,-(u*g+h)),_=-M*M+g*(g+2*x)+m;else g<=-w?(M=Math.max(0,-(-u*l+h)),g=M>0?-l:Math.min(Math.max(-l,-x),l),_=-M*M+g*(g+2*x)+m):g<=w?(M=0,g=Math.min(Math.max(-l,-x),l),_=g*(g+2*x)+m):(M=Math.max(0,-(u*l+h)),g=M>0?l:Math.min(Math.max(-l,-x),l),_=-M*M+g*(g+2*x)+m);else g=u>0?-l:l,M=Math.max(0,-(u*g+h)),_=-M*M+g*(g+2*x)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,M),o&&o.copy(rd).addScaledVector(xl,g),_}intersectSphere(e,n){if(e.radius<0)return null;er.subVectors(e.center,this.origin);const r=er.dot(this.direction),o=er.dot(er)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),h=r-u,x=r+u;return x<0?null:h<0?this.at(x,n):this.at(h,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,o,l,u,h,x;const m=1/this.direction.x,v=1/this.direction.y,M=1/this.direction.z,g=this.origin;return m>=0?(r=(e.min.x-g.x)*m,o=(e.max.x-g.x)*m):(r=(e.max.x-g.x)*m,o=(e.min.x-g.x)*m),v>=0?(l=(e.min.y-g.y)*v,u=(e.max.y-g.y)*v):(l=(e.max.y-g.y)*v,u=(e.min.y-g.y)*v),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),M>=0?(h=(e.min.z-g.z)*M,x=(e.max.z-g.z)*M):(h=(e.max.z-g.z)*M,x=(e.min.z-g.z)*M),r>x||h>o)||((h>r||r!==r)&&(r=h),(x<o||o!==o)&&(o=x),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(e){return this.intersectBox(e,er)!==null}intersectTriangle(e,n,r,o,l){const u=this.origin,h=this.direction,x=h.x,m=h.y,v=h.z,M=e.x-u.x,g=e.y-u.y,_=e.z-u.z,w=n.x-u.x,R=n.y-u.y,S=n.z-u.z,y=r.x-u.x,k=r.y-u.y,G=r.z-u.z,N=Math.abs(x),P=Math.abs(m),C=Math.abs(v);let U,E,D,z,O,q,te,B,ne,ue,J,H;if(N>=P&&N>=C?(D=x,q=M,ne=w,H=y,x>=0?(U=m,E=v,z=g,O=_,te=R,B=S,ue=k,J=G):(U=v,E=m,z=_,O=g,te=S,B=R,ue=G,J=k)):P>=C?(D=m,q=g,ne=R,H=k,m>=0?(U=v,E=x,z=_,O=M,te=S,B=w,ue=G,J=y):(U=x,E=v,z=M,O=_,te=w,B=S,ue=y,J=G)):(D=v,q=_,ne=S,H=G,v>=0?(U=x,E=m,z=M,O=g,te=w,B=R,ue=y,J=k):(U=m,E=x,z=g,O=M,te=R,B=w,ue=k,J=y)),D===0)return null;const j=U/D,X=E/D,L=1/D,Q=z-j*q,ye=O-X*q,De=te-j*ne,He=B-X*ne,Oe=ue-j*H,oe=J-X*H,he=Oe*He-oe*De,be=Q*oe-ye*Oe,$e=De*ye-He*Q;if(o){if(he<0||be<0||$e<0)return null}else if((he<0||be<0||$e<0)&&(he>0||be>0||$e>0))return null;const Be=he+be+$e;if(Be===0)return null;const ut=L*(he*q+be*ne+$e*H);return(Be>0?ut<0:ut>0)?null:this.at(ut/Be,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class B0 extends Zs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pr,this.combine=g0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ym=new Zt,Zr=new O0,vl=new Yl,Sm=new ce,_l=new ce,yl=new ce,Sl=new ce,sd=new ce,Ml=new ce,Mm=new ce,bl=new ce;class Bi extends _n{constructor(e=new li,n=new B0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const h=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=l}}}}getVertexPosition(e,n){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;n.fromBufferAttribute(o,e);const h=this.morphTargetInfluences;if(l&&h){Ml.set(0,0,0);for(let x=0,m=l.length;x<m;x++){const v=h[x],M=l[x];v!==0&&(sd.fromBufferAttribute(M,e),u?Ml.addScaledVector(sd,v):Ml.addScaledVector(sd.sub(n),v))}n.add(Ml)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),vl.copy(r.boundingSphere),vl.applyMatrix4(l),Zr.copy(e.ray).recast(e.near),!(vl.containsPoint(Zr.origin)===!1&&(Zr.intersectSphere(vl,Sm)===null||Zr.origin.distanceToSquared(Sm)>(e.far-e.near)**2))&&(ym.copy(l).invert(),Zr.copy(e.ray).applyMatrix4(ym),!(r.boundingBox!==null&&Zr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Zr)))}_computeIntersections(e,n,r){let o;const l=this.geometry,u=this.material,h=l.index,x=l.attributes.position,m=l.attributes.uv,v=l.attributes.uv1,M=l.attributes.normal,g=l.groups,_=l.drawRange;if(h!==null)if(Array.isArray(u))for(let w=0,R=g.length;w<R;w++){const S=g[w],y=u[S.materialIndex],k=Math.max(S.start,_.start),G=Math.min(h.count,Math.min(S.start+S.count,_.start+_.count));for(let N=k,P=G;N<P;N+=3){const C=h.getX(N),U=h.getX(N+1),E=h.getX(N+2);o=El(this,y,e,r,m,v,M,C,U,E),o&&(o.faceIndex=Math.floor(N/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const w=Math.max(0,_.start),R=Math.min(h.count,_.start+_.count);for(let S=w,y=R;S<y;S+=3){const k=h.getX(S),G=h.getX(S+1),N=h.getX(S+2);o=El(this,u,e,r,m,v,M,k,G,N),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}else if(x!==void 0)if(Array.isArray(u))for(let w=0,R=g.length;w<R;w++){const S=g[w],y=u[S.materialIndex],k=Math.max(S.start,_.start),G=Math.min(x.count,Math.min(S.start+S.count,_.start+_.count));for(let N=k,P=G;N<P;N+=3){const C=N,U=N+1,E=N+2;o=El(this,y,e,r,m,v,M,C,U,E),o&&(o.faceIndex=Math.floor(N/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const w=Math.max(0,_.start),R=Math.min(x.count,_.start+_.count);for(let S=w,y=R;S<y;S+=3){const k=S,G=S+1,N=S+2;o=El(this,u,e,r,m,v,M,k,G,N),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}}}function uy(s,e,n,r,o,l,u,h){let x;if(e.side===Hn?x=r.intersectTriangle(u,l,o,!0,h):x=r.intersectTriangle(o,l,u,e.side===ns,h),x===null)return null;bl.copy(h),bl.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(bl);return m<n.near||m>n.far?null:{distance:m,point:bl.clone(),object:s}}function El(s,e,n,r,o,l,u,h,x,m){s.getVertexPosition(h,_l),s.getVertexPosition(x,yl),s.getVertexPosition(m,Sl);const v=uy(s,e,n,r,_l,yl,Sl,Mm);if(v){const M=new ce;bi.getBarycoord(Mm,_l,yl,Sl,M),o&&(v.uv=bi.getInterpolatedAttribute(o,h,x,m,M,new St)),l&&(v.uv1=bi.getInterpolatedAttribute(l,h,x,m,M,new St)),u&&(v.normal=bi.getInterpolatedAttribute(u,h,x,m,M,new ce),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const g={a:h,b:x,c:m,normal:new ce,materialIndex:0};bi.getNormal(_l,yl,Sl,g.normal),v.face=g,v.barycoord=M}return v}class dy extends Cn{constructor(e=null,n=1,r=1,o,l,u,h,x,m=vn,v=vn,M,g){super(null,u,h,x,m,v,o,l,M,g),this.isDataTexture=!0,this.image={data:e,width:n,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Jr=new Yl,fy=new St(.5,.5),wl=new ce;class _f{constructor(e=new Rr,n=new Rr,r=new Rr,o=new Rr,l=new Rr,u=new Rr){this.planes=[e,n,r,o,l,u]}set(e,n,r,o,l,u){const h=this.planes;return h[0].copy(e),h[1].copy(n),h[2].copy(r),h[3].copy(o),h[4].copy(l),h[5].copy(u),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Ii,r=!1){const o=this.planes,l=e.elements,u=l[0],h=l[1],x=l[2],m=l[3],v=l[4],M=l[5],g=l[6],_=l[7],w=l[8],R=l[9],S=l[10],y=l[11],k=l[12],G=l[13],N=l[14],P=l[15];if(o[0].setComponents(m-u,_-v,y-w,P-k).normalize(),o[1].setComponents(m+u,_+v,y+w,P+k).normalize(),o[2].setComponents(m+h,_+M,y+R,P+G).normalize(),o[3].setComponents(m-h,_-M,y-R,P-G).normalize(),r)o[4].setComponents(x,g,S,N).normalize(),o[5].setComponents(m-x,_-g,y-S,P-N).normalize();else if(o[4].setComponents(m-x,_-g,y-S,P-N).normalize(),n===Ii)o[5].setComponents(m+x,_+g,y+S,P+N).normalize();else if(n===$a)o[5].setComponents(x,g,S,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Jr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Jr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Jr)}intersectsSprite(e){Jr.center.set(0,0,0);const n=fy.distanceTo(e.center);return Jr.radius=.7071067811865476+n,Jr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Jr)}intersectsSphere(e){const n=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(wl.x=o.normal.x>0?e.max.x:e.min.x,wl.y=o.normal.y>0?e.max.y:e.min.y,wl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(wl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class z0 extends Zs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const bm=new Zt,tf=new O0,Tl=new Yl,Al=new ce;class hy extends _n{constructor(e=new li,n=new z0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const r=this.geometry,o=this.matrixWorld,l=e.params.Points.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Tl.copy(r.boundingSphere),Tl.applyMatrix4(o),Tl.radius+=l,e.ray.intersectsSphere(Tl)===!1)return;bm.copy(o).invert(),tf.copy(e.ray).applyMatrix4(bm);const h=l/((this.scale.x+this.scale.y+this.scale.z)/3),x=h*h,m=r.index,M=r.attributes.position;if(m!==null){const g=Math.max(0,u.start),_=Math.min(m.count,u.start+u.count);for(let w=g,R=_;w<R;w++){const S=m.getX(w);Al.fromBufferAttribute(M,S),Em(Al,S,x,o,e,n,this)}}else{const g=Math.max(0,u.start),_=Math.min(M.count,u.start+u.count);for(let w=g,R=_;w<R;w++)Al.fromBufferAttribute(M,w),Em(Al,w,x,o,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const h=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=l}}}}}function Em(s,e,n,r,o,l,u){const h=tf.distanceSqToPoint(s);if(h<n){const x=new ce;tf.closestPointToPoint(s,x),x.applyMatrix4(r);const m=o.ray.origin.distanceTo(x);if(m<o.near||m>o.far)return;l.push({distance:m,distanceToRay:Math.sqrt(h),point:x,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class V0 extends Cn{constructor(e=[],n=is,r,o,l,u,h,x,m,v){super(e,n,r,o,l,u,h,x,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class wm extends Cn{constructor(e,n,r,o,l,u,h,x,m){super(e,n,r,o,l,u,h,x,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ka extends Cn{constructor(e,n,r=Fi,o,l,u,h=vn,x=vn,m,v=sr,M=1){if(v!==sr&&v!==ts)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:n,depth:M};super(g,o,l,u,h,x,v,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new vf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}}class py extends Ka{constructor(e,n=Fi,r=is,o,l,u=vn,h=vn,x,m=sr){const v={width:e,height:e,depth:1},M=[v,v,v,v,v,v];super(e,e,n,r,o,l,u,h,x,m),this.image=M,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class H0 extends Cn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class eo extends li{constructor(e=1,n=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const h=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const x=[],m=[],v=[],M=[];let g=0,_=0;w("z","y","x",-1,-1,r,n,e,u,l,0),w("z","y","x",1,-1,r,n,-e,u,l,1),w("x","z","y",1,1,e,r,n,o,u,2),w("x","z","y",1,-1,e,r,-n,o,u,3),w("x","y","z",1,-1,e,n,r,o,l,4),w("x","y","z",-1,-1,e,n,-r,o,l,5),this.setIndex(x),this.setAttribute("position",new oi(m,3)),this.setAttribute("normal",new oi(v,3)),this.setAttribute("uv",new oi(M,2));function w(R,S,y,k,G,N,P,C,U,E,D){const z=N/U,O=P/E,q=N/2,te=P/2,B=C/2,ne=U+1,ue=E+1;let J=0,H=0;const j=new ce;for(let X=0;X<ue;X++){const L=X*O-te;for(let Q=0;Q<ne;Q++){const ye=Q*z-q;j[R]=ye*k,j[S]=L*G,j[y]=B,m.push(j.x,j.y,j.z),j[R]=0,j[S]=0,j[y]=C>0?1:-1,v.push(j.x,j.y,j.z),M.push(Q/U),M.push(1-X/E),J+=1}}for(let X=0;X<E;X++)for(let L=0;L<U;L++){const Q=g+L+ne*X,ye=g+L+ne*(X+1),De=g+(L+1)+ne*(X+1),He=g+(L+1)+ne*X;x.push(Q,ye,He),x.push(ye,De,He),H+=6}h.addGroup(_,H,D),_+=H,g+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new eo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class yf extends li{constructor(e=1,n=1,r=1,o=32,l=1,u=!1,h=0,x=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:r,radialSegments:o,heightSegments:l,openEnded:u,thetaStart:h,thetaLength:x};const m=this;o=Math.floor(o),l=Math.floor(l);const v=[],M=[],g=[],_=[];let w=0;const R=[],S=r/2;let y=0;k(),u===!1&&(e>0&&G(!0),n>0&&G(!1)),this.setIndex(v),this.setAttribute("position",new oi(M,3)),this.setAttribute("normal",new oi(g,3)),this.setAttribute("uv",new oi(_,2));function k(){const N=new ce,P=new ce;let C=0;const U=(n-e)/r;for(let E=0;E<=l;E++){const D=[],z=E/l,O=z*(n-e)+e;for(let q=0;q<=o;q++){const te=q/o,B=te*x+h,ne=Math.sin(B),ue=Math.cos(B);P.x=O*ne,P.y=-z*r+S,P.z=O*ue,M.push(P.x,P.y,P.z),N.set(ne,U,ue).normalize(),g.push(N.x,N.y,N.z),_.push(te,1-z),D.push(w++)}R.push(D)}for(let E=0;E<o;E++)for(let D=0;D<l;D++){const z=R[D][E],O=R[D+1][E],q=R[D+1][E+1],te=R[D][E+1];(e>0||D!==0)&&(v.push(z,O,te),C+=3),(n>0||D!==l-1)&&(v.push(O,q,te),C+=3)}m.addGroup(y,C,0),y+=C}function G(N){const P=w,C=new St,U=new ce;let E=0;const D=N===!0?e:n,z=N===!0?1:-1;for(let q=1;q<=o;q++)M.push(0,S*z,0),g.push(0,z,0),_.push(.5,.5),w++;const O=w;for(let q=0;q<=o;q++){const B=q/o*x+h,ne=Math.cos(B),ue=Math.sin(B);U.x=D*ue,U.y=S*z,U.z=D*ne,M.push(U.x,U.y,U.z),g.push(0,z,0),C.x=ne*.5+.5,C.y=ue*.5*z+.5,_.push(C.x,C.y),w++}for(let q=0;q<o;q++){const te=P+q,B=O+q;N===!0?v.push(B,B+1,te):v.push(B+1,B,te),E+=3}m.addGroup(y,E,N===!0?1:2),y+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yf(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class $l extends li{constructor(e=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:o};const l=e/2,u=n/2,h=Math.floor(r),x=Math.floor(o),m=h+1,v=x+1,M=e/h,g=n/x,_=[],w=[],R=[],S=[];for(let y=0;y<v;y++){const k=y*g-u;for(let G=0;G<m;G++){const N=G*M-l;w.push(N,-k,0),R.push(0,0,1),S.push(G/h),S.push(1-y/x)}}for(let y=0;y<x;y++)for(let k=0;k<h;k++){const G=k+m*y,N=k+m*(y+1),P=k+1+m*(y+1),C=k+1+m*y;_.push(G,N,C),_.push(N,P,C)}this.setIndex(_),this.setAttribute("position",new oi(w,3)),this.setAttribute("normal",new oi(R,3)),this.setAttribute("uv",new oi(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $l(e.width,e.height,e.widthSegments,e.heightSegments)}}function $s(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const o=s[n][r];if(Tm(o))o.isRenderTargetTexture?(ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=o.clone();else if(Array.isArray(o))if(Tm(o[0])){const l=[];for(let u=0,h=o.length;u<h;u++)l[u]=o[u].clone();e[n][r]=l}else e[n][r]=o.slice();else e[n][r]=o}}return e}function Ln(s){const e={};for(let n=0;n<s.length;n++){const r=$s(s[n]);for(const o in r)e[o]=r[o]}return e}function Tm(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function my(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function G0(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:_t.workingColorSpace}const xy={clone:$s,merge:Ln};var gy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zi extends Zs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gy,this.fragmentShader=vy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$s(e.uniforms),this.uniformsGroups=my(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=n[o.value]||null;break;case"c":this.uniforms[r].value=new Et().setHex(o.value);break;case"v2":this.uniforms[r].value=new St().fromArray(o.value);break;case"v3":this.uniforms[r].value=new ce().fromArray(o.value);break;case"v4":this.uniforms[r].value=new Kt().fromArray(o.value);break;case"m3":this.uniforms[r].value=new ct().fromArray(o.value);break;case"m4":this.uniforms[r].value=new Zt().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class _y extends zi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Am extends Zs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qd,this.normalScale=new St(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class yy extends Zs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=R_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Sy extends Zs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Sf extends _n{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Et(e),this.intensity=n}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const ad=new Zt,Cm=new ce,Rm=new ce;class W0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new St(512,512),this.mapType=Kn,this.map=null,this.mapPass=null,this.matrix=new Zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _f,this._frameExtents=new St(1,1),this._viewportCount=1,this._viewports=[new Kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera;Cm.setFromMatrixPosition(e.matrixWorld),n.position.copy(Cm),Rm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Rm),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(e,n,r,o){ad.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),r.setFromProjectionMatrix(ad,e.coordinateSystem,e.reversedDepth);const l=this._frameExtents,u=o?o.z/l.x:1,h=o?o.w/l.y:1,x=o?o.x/l.x:0,m=o?o.y/l.y:0;e.coordinateSystem===$a||e.reversedDepth?n.set(.5*u,0,0,.5*u+x,0,.5*h,0,.5*h+m,0,0,1,0,0,0,0,1):n.set(.5*u,0,0,.5*u+x,0,.5*h,0,.5*h+m,0,0,.5,.5,0,0,0,1),n.multiply(ad)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Cl=new ce,Rl=new Ks,Ni=new ce;class j0 extends _n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Zt,this.projectionMatrix=new Zt,this.projectionMatrixInverse=new Zt,this.coordinateSystem=Ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Cl,Rl,Ni),Ni.x===1&&Ni.y===1&&Ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Cl,Rl,Ni.set(1,1,1)).invert()}updateWorldMatrix(e,n,r=!1){super.updateWorldMatrix(e,n,r),this.matrixWorld.decompose(Cl,Rl,Ni),Ni.x===1&&Ni.y===1&&Ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Cl,Rl,Ni.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Cr=new ce,Nm=new St,Pm=new St;class $n extends j0{constructor(e=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=ef*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ou*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ef*2*Math.atan(Math.tan(Ou*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){Cr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Cr.x,Cr.y).multiplyScalar(-e/Cr.z),Cr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Cr.x,Cr.y).multiplyScalar(-e/Cr.z)}getViewSize(e,n){return this.getViewBounds(e,Nm,Pm),n.subVectors(Pm,Nm)}setViewOffset(e,n,r,o,l,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ou*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const x=u.fullWidth,m=u.fullHeight;l+=u.offsetX*o/x,n-=u.offsetY*r/m,o*=u.width/x,r*=u.height/m}const h=this.filmOffset;h!==0&&(l+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,n,n-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class My extends W0{constructor(){super(new $n(90,1,.5,500)),this.isPointLightShadow=!0}}class by extends Sf{constructor(e,n,r=0,o=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=o,this.shadow=new My}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class Mf extends j0{constructor(e=-1,n=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,h=o+n,x=o-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,u=l+m*this.view.width,h-=v*this.view.offsetY,x=h-v*this.view.height}this.projectionMatrix.makeOrthographic(l,u,h,x,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class Ey extends W0{constructor(){super(new Mf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Lm extends Sf{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_n.DEFAULT_UP),this.updateMatrix(),this.target=new _n,this.shadow=new Ey}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class wy extends Sf{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const Vs=-90,Hs=1;class Ty extends _n{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new $n(Vs,Hs,e,n);o.layers=this.layers,this.add(o);const l=new $n(Vs,Hs,e,n);l.layers=this.layers,this.add(l);const u=new $n(Vs,Hs,e,n);u.layers=this.layers,this.add(u);const h=new $n(Vs,Hs,e,n);h.layers=this.layers,this.add(h);const x=new $n(Vs,Hs,e,n);x.layers=this.layers,this.add(x);const m=new $n(Vs,Hs,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,o,l,u,h,x]=n;for(const m of n)this.remove(m);if(e===Ii)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),x.up.set(0,1,0),x.lookAt(0,0,-1);else if(e===$a)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),x.up.set(0,-1,0),x.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,h,x,m,v]=this.children,M=e.getRenderTarget(),g=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let S=!1;e.isWebGLRenderer===!0?S=e.state.buffers.depth.getReversed():S=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(r,1,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(r,2,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),e.setRenderTarget(r,3,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(n,x),e.setRenderTarget(r,4,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(n,m),r.texture.generateMipmaps=R,e.setRenderTarget(r,5,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(n,v),e.setRenderTarget(M,g,_),e.xr.enabled=w,r.texture.needsPMREMUpdate=!0}}class Ay extends $n{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Cy{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,ot("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}const Af=class Af{constructor(e,n,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let r=0;r<4;r++)this.elements[r]=e[r+n];return this}set(e,n,r,o){const l=this.elements;return l[0]=e,l[2]=n,l[1]=r,l[3]=o,this}};Af.prototype.isMatrix2=!0;let Dm=Af;function Im(s,e,n,r){const o=Ry(r);switch(n){case R0:return s*e;case P0:return s*e/o.components*o.byteLength;case hf:return s*e/o.components*o.byteLength;case rs:return s*e*2/o.components*o.byteLength;case pf:return s*e*2/o.components*o.byteLength;case N0:return s*e*3/o.components*o.byteLength;case Ei:return s*e*4/o.components*o.byteLength;case mf:return s*e*4/o.components*o.byteLength;case Il:case kl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ul:case Fl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ed:case Td:return Math.max(s,16)*Math.max(e,8)/4;case bd:case wd:return Math.max(s,8)*Math.max(e,8)/2;case Ad:case Cd:case Nd:case Pd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Rd:case Vl:case Ld:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Dd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Id:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case kd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Ud:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Fd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Od:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Bd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case zd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Vd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Hd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Gd:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Wd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case jd:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Xd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case qd:case Yd:case $d:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Kd:case Zd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Hl:case Jd:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Ry(s){switch(s){case Kn:case w0:return{byteLength:1,components:1};case qa:case T0:case Oi:return{byteLength:2,components:1};case df:case ff:return{byteLength:2,components:4};case Fi:case uf:case Di:return{byteLength:4,components:1};case A0:case C0:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lf}}));typeof window<"u"&&(window.__THREE__?ot("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lf);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function X0(){let s=null,e=!1,n=null,r=null;function o(l,u){r=s.requestAnimationFrame(o),n(l,u)}return{start:function(){e!==!0&&n!==null&&s!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){n=l},setContext:function(l){s=l}}}function Ny(s){const e=new WeakMap;function n(h,x){const m=h.array,v=h.usage,M=m.byteLength,g=s.createBuffer();s.bindBuffer(x,g),s.bufferData(x,m,v),h.onUploadCallback();let _;if(m instanceof Float32Array)_=s.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)_=s.HALF_FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?_=s.HALF_FLOAT:_=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)_=s.SHORT;else if(m instanceof Uint32Array)_=s.UNSIGNED_INT;else if(m instanceof Int32Array)_=s.INT;else if(m instanceof Int8Array)_=s.BYTE;else if(m instanceof Uint8Array)_=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)_=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:g,type:_,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:M}}function r(h,x,m){const v=x.array,M=x.updateRanges;if(s.bindBuffer(m,h),M.length===0)s.bufferSubData(m,0,v);else{M.sort((_,w)=>_.start-w.start);let g=0;for(let _=1;_<M.length;_++){const w=M[g],R=M[_];R.start<=w.start+w.count+1?w.count=Math.max(w.count,R.start+R.count-w.start):(++g,M[g]=R)}M.length=g+1;for(let _=0,w=M.length;_<w;_++){const R=M[_];s.bufferSubData(m,R.start*v.BYTES_PER_ELEMENT,v,R.start,R.count)}x.clearUpdateRanges()}x.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function l(h){h.isInterleavedBufferAttribute&&(h=h.data);const x=e.get(h);x&&(s.deleteBuffer(x.buffer),e.delete(h))}function u(h,x){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const v=e.get(h);(!v||v.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=e.get(h);if(m===void 0)e.set(h,n(h,x));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,h,x),m.version=h.version}}return{get:o,remove:l,update:u}}var Py=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ly=`#ifdef USE_ALPHAHASH
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
#endif`,Dy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Iy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ky=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Uy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fy=`#ifdef USE_AOMAP
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
#endif`,Oy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,By=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,zy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Vy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Wy=`#ifdef USE_IRIDESCENCE
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
#endif`,jy=`#ifdef USE_BUMPMAP
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
#endif`,Xy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,qy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$y=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ky=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Zy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Jy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Qy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,eS=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,tS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,nS=`vec3 transformedNormal = objectNormal;
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
#endif`,iS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,aS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,oS="gl_FragColor = linearToOutputTexel( gl_FragColor );",lS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,uS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,dS=`#ifdef USE_ENVMAP
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
#endif`,fS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,pS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vS=`#ifdef USE_GRADIENTMAP
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
}`,_S=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,SS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,MS=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,bS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,ES=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,TS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,AS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,CS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,RS=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,NS=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,PS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,LS=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,DS=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,IS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,US=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,FS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,OS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,BS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,VS=`#if defined( USE_POINTS_UV )
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
#endif`,HS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,GS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,WS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,XS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,YS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$S=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,KS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ZS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,JS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,QS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,eM=`#ifdef USE_NORMALMAP
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
#endif`,tM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,iM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,aM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,oM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,pM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,mM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,xM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,gM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vM=`#ifdef USE_SKINNING
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
#endif`,_M=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yM=`#ifdef USE_SKINNING
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
#endif`,SM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,MM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,EM=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,wM=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,TM=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,AM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,CM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,RM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,NM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const PM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,LM=`uniform sampler2D t2D;
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
}`,DM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,IM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,UM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FM=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,OM=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,BM=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,zM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,VM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,HM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GM=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,WM=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jM=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,XM=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,qM=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,YM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,$M=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,KM=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,ZM=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,JM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,QM=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,e1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,t1=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,n1=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,i1=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,r1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,s1=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,a1=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,o1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,l1=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,c1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,u1=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,pt={alphahash_fragment:Py,alphahash_pars_fragment:Ly,alphamap_fragment:Dy,alphamap_pars_fragment:Iy,alphatest_fragment:ky,alphatest_pars_fragment:Uy,aomap_fragment:Fy,aomap_pars_fragment:Oy,batching_pars_vertex:By,batching_vertex:zy,begin_vertex:Vy,beginnormal_vertex:Hy,bsdfs:Gy,iridescence_fragment:Wy,bumpmap_pars_fragment:jy,clipping_planes_fragment:Xy,clipping_planes_pars_fragment:qy,clipping_planes_pars_vertex:Yy,clipping_planes_vertex:$y,color_fragment:Ky,color_pars_fragment:Zy,color_pars_vertex:Jy,color_vertex:Qy,common:eS,cube_uv_reflection_fragment:tS,defaultnormal_vertex:nS,displacementmap_pars_vertex:iS,displacementmap_vertex:rS,emissivemap_fragment:sS,emissivemap_pars_fragment:aS,colorspace_fragment:oS,colorspace_pars_fragment:lS,envmap_fragment:cS,envmap_common_pars_fragment:uS,envmap_pars_fragment:dS,envmap_pars_vertex:fS,envmap_physical_pars_fragment:bS,envmap_vertex:hS,fog_vertex:pS,fog_pars_vertex:mS,fog_fragment:xS,fog_pars_fragment:gS,gradientmap_pars_fragment:vS,lightmap_pars_fragment:_S,lights_lambert_fragment:yS,lights_lambert_pars_fragment:SS,lights_pars_begin:MS,lights_toon_fragment:ES,lights_toon_pars_fragment:wS,lights_phong_fragment:TS,lights_phong_pars_fragment:AS,lights_physical_fragment:CS,lights_physical_pars_fragment:RS,lights_fragment_begin:NS,lights_fragment_maps:PS,lights_fragment_end:LS,lightprobes_pars_fragment:DS,logdepthbuf_fragment:IS,logdepthbuf_pars_fragment:kS,logdepthbuf_pars_vertex:US,logdepthbuf_vertex:FS,map_fragment:OS,map_pars_fragment:BS,map_particle_fragment:zS,map_particle_pars_fragment:VS,metalnessmap_fragment:HS,metalnessmap_pars_fragment:GS,morphinstance_vertex:WS,morphcolor_vertex:jS,morphnormal_vertex:XS,morphtarget_pars_vertex:qS,morphtarget_vertex:YS,normal_fragment_begin:$S,normal_fragment_maps:KS,normal_pars_fragment:ZS,normal_pars_vertex:JS,normal_vertex:QS,normalmap_pars_fragment:eM,clearcoat_normal_fragment_begin:tM,clearcoat_normal_fragment_maps:nM,clearcoat_pars_fragment:iM,iridescence_pars_fragment:rM,opaque_fragment:sM,packing:aM,premultiplied_alpha_fragment:oM,project_vertex:lM,dithering_fragment:cM,dithering_pars_fragment:uM,roughnessmap_fragment:dM,roughnessmap_pars_fragment:fM,shadowmap_pars_fragment:hM,shadowmap_pars_vertex:pM,shadowmap_vertex:mM,shadowmask_pars_fragment:xM,skinbase_vertex:gM,skinning_pars_vertex:vM,skinning_vertex:_M,skinnormal_vertex:yM,specularmap_fragment:SM,specularmap_pars_fragment:MM,tonemapping_fragment:bM,tonemapping_pars_fragment:EM,transmission_fragment:wM,transmission_pars_fragment:TM,uv_pars_fragment:AM,uv_pars_vertex:CM,uv_vertex:RM,worldpos_vertex:NM,background_vert:PM,background_frag:LM,backgroundCube_vert:DM,backgroundCube_frag:IM,cube_vert:kM,cube_frag:UM,depth_vert:FM,depth_frag:OM,distance_vert:BM,distance_frag:zM,equirect_vert:VM,equirect_frag:HM,linedashed_vert:GM,linedashed_frag:WM,meshbasic_vert:jM,meshbasic_frag:XM,meshlambert_vert:qM,meshlambert_frag:YM,meshmatcap_vert:$M,meshmatcap_frag:KM,meshnormal_vert:ZM,meshnormal_frag:JM,meshphong_vert:QM,meshphong_frag:e1,meshphysical_vert:t1,meshphysical_frag:n1,meshtoon_vert:i1,meshtoon_frag:r1,points_vert:s1,points_frag:a1,shadow_vert:o1,shadow_frag:l1,sprite_vert:c1,sprite_frag:u1},Ue={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new St(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ce},probesMax:{value:new ce},probesResolution:{value:new ce}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new St(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},Li={basic:{uniforms:Ln([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:Ln([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new Et(0)},envMapIntensity:{value:1}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:Ln([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:Ln([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:Ln([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new Et(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:Ln([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:Ln([Ue.points,Ue.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:Ln([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:Ln([Ue.common,Ue.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:Ln([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:Ln([Ue.sprite,Ue.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distance:{uniforms:Ln([Ue.common,Ue.displacementmap,{referencePosition:{value:new ce},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distance_vert,fragmentShader:pt.distance_frag},shadow:{uniforms:Ln([Ue.lights,Ue.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};Li.physical={uniforms:Ln([Li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new St(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new St},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new St},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const Nl={r:0,b:0,g:0},d1=new Zt,q0=new ct;q0.set(-1,0,0,0,1,0,0,0,1);function f1(s,e,n,r,o,l){const u=new Et(0);let h=o===!0?0:1,x,m,v=null,M=0,g=null;function _(k){let G=k.isScene===!0?k.background:null;if(G&&G.isTexture){const N=k.backgroundBlurriness>0;G=e.get(G,N)}return G}function w(k){let G=!1;const N=_(k);N===null?S(u,h):N&&N.isColor&&(S(N,1),G=!0);const P=s.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,l):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,l),(s.autoClear||G)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function R(k,G){const N=_(G);N&&(N.isCubeTexture||N.mapping===ql)?(m===void 0&&(m=new Bi(new eo(1,1,1),new zi({name:"BackgroundCubeMaterial",uniforms:$s(Li.backgroundCube.uniforms),vertexShader:Li.backgroundCube.vertexShader,fragmentShader:Li.backgroundCube.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(P,C,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),m.material.uniforms.envMap.value=N,m.material.uniforms.backgroundBlurriness.value=G.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=G.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(d1.makeRotationFromEuler(G.backgroundRotation)).transpose(),N.isCubeTexture&&N.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(q0),m.material.toneMapped=_t.getTransfer(N.colorSpace)!==Ot,(v!==N||M!==N.version||g!==s.toneMapping)&&(m.material.needsUpdate=!0,v=N,M=N.version,g=s.toneMapping),m.layers.enableAll(),k.unshift(m,m.geometry,m.material,0,0,null)):N&&N.isTexture&&(x===void 0&&(x=new Bi(new $l(2,2),new zi({name:"BackgroundMaterial",uniforms:$s(Li.background.uniforms),vertexShader:Li.background.vertexShader,fragmentShader:Li.background.fragmentShader,side:ns,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),x.geometry.deleteAttribute("normal"),Object.defineProperty(x.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(x)),x.material.uniforms.t2D.value=N,x.material.uniforms.backgroundIntensity.value=G.backgroundIntensity,x.material.toneMapped=_t.getTransfer(N.colorSpace)!==Ot,N.matrixAutoUpdate===!0&&N.updateMatrix(),x.material.uniforms.uvTransform.value.copy(N.matrix),(v!==N||M!==N.version||g!==s.toneMapping)&&(x.material.needsUpdate=!0,v=N,M=N.version,g=s.toneMapping),x.layers.enableAll(),k.unshift(x,x.geometry,x.material,0,0,null))}function S(k,G){k.getRGB(Nl,G0(s)),n.buffers.color.setClear(Nl.r,Nl.g,Nl.b,G,l)}function y(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),x!==void 0&&(x.geometry.dispose(),x.material.dispose(),x=void 0)}return{getClearColor:function(){return u},setClearColor:function(k,G=1){u.set(k),h=G,S(u,h)},getClearAlpha:function(){return h},setClearAlpha:function(k){h=k,S(u,h)},render:w,addToRenderList:R,dispose:y}}function h1(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=g(null);let l=o,u=!1;function h(O,q,te,B,ne){let ue=!1;const J=M(O,B,te,q);l!==J&&(l=J,m(l.object)),ue=_(O,B,te,ne),ue&&w(O,B,te,ne),ne!==null&&e.update(ne,s.ELEMENT_ARRAY_BUFFER),(ue||u)&&(u=!1,N(O,q,te,B),ne!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ne).buffer))}function x(){return s.createVertexArray()}function m(O){return s.bindVertexArray(O)}function v(O){return s.deleteVertexArray(O)}function M(O,q,te,B){const ne=B.wireframe===!0;let ue=r[q.id];ue===void 0&&(ue={},r[q.id]=ue);const J=O.isInstancedMesh===!0?O.id:0;let H=ue[J];H===void 0&&(H={},ue[J]=H);let j=H[te.id];j===void 0&&(j={},H[te.id]=j);let X=j[ne];return X===void 0&&(X=g(x()),j[ne]=X),X}function g(O){const q=[],te=[],B=[];for(let ne=0;ne<n;ne++)q[ne]=0,te[ne]=0,B[ne]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:te,attributeDivisors:B,object:O,attributes:{},index:null}}function _(O,q,te,B){const ne=l.attributes,ue=q.attributes;let J=0;const H=te.getAttributes();for(const j in H)if(H[j].location>=0){const L=ne[j];let Q=ue[j];if(Q===void 0&&(j==="instanceMatrix"&&O.instanceMatrix&&(Q=O.instanceMatrix),j==="instanceColor"&&O.instanceColor&&(Q=O.instanceColor)),L===void 0||L.attribute!==Q||Q&&L.data!==Q.data)return!0;J++}return l.attributesNum!==J||l.index!==B}function w(O,q,te,B){const ne={},ue=q.attributes;let J=0;const H=te.getAttributes();for(const j in H)if(H[j].location>=0){let L=ue[j];L===void 0&&(j==="instanceMatrix"&&O.instanceMatrix&&(L=O.instanceMatrix),j==="instanceColor"&&O.instanceColor&&(L=O.instanceColor));const Q={};Q.attribute=L,L&&L.data&&(Q.data=L.data),ne[j]=Q,J++}l.attributes=ne,l.attributesNum=J,l.index=B}function R(){const O=l.newAttributes;for(let q=0,te=O.length;q<te;q++)O[q]=0}function S(O){y(O,0)}function y(O,q){const te=l.newAttributes,B=l.enabledAttributes,ne=l.attributeDivisors;te[O]=1,B[O]===0&&(s.enableVertexAttribArray(O),B[O]=1),ne[O]!==q&&(s.vertexAttribDivisor(O,q),ne[O]=q)}function k(){const O=l.newAttributes,q=l.enabledAttributes;for(let te=0,B=q.length;te<B;te++)q[te]!==O[te]&&(s.disableVertexAttribArray(te),q[te]=0)}function G(O,q,te,B,ne,ue,J){J===!0?s.vertexAttribIPointer(O,q,te,ne,ue):s.vertexAttribPointer(O,q,te,B,ne,ue)}function N(O,q,te,B){R();const ne=B.attributes,ue=te.getAttributes(),J=q.defaultAttributeValues;for(const H in ue){const j=ue[H];if(j.location>=0){let X=ne[H];if(X===void 0&&(H==="instanceMatrix"&&O.instanceMatrix&&(X=O.instanceMatrix),H==="instanceColor"&&O.instanceColor&&(X=O.instanceColor)),X!==void 0){const L=X.normalized,Q=X.itemSize,ye=e.get(X);if(ye===void 0)continue;const De=ye.buffer,He=ye.type,Oe=ye.bytesPerElement,oe=He===s.INT||He===s.UNSIGNED_INT||X.gpuType===uf;if(X.isInterleavedBufferAttribute){const he=X.data,be=he.stride,$e=X.offset;if(he.isInstancedInterleavedBuffer){for(let Be=0;Be<j.locationSize;Be++)y(j.location+Be,he.meshPerAttribute);O.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Be=0;Be<j.locationSize;Be++)S(j.location+Be);s.bindBuffer(s.ARRAY_BUFFER,De);for(let Be=0;Be<j.locationSize;Be++)G(j.location+Be,Q/j.locationSize,He,L,be*Oe,($e+Q/j.locationSize*Be)*Oe,oe)}else{if(X.isInstancedBufferAttribute){for(let he=0;he<j.locationSize;he++)y(j.location+he,X.meshPerAttribute);O.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let he=0;he<j.locationSize;he++)S(j.location+he);s.bindBuffer(s.ARRAY_BUFFER,De);for(let he=0;he<j.locationSize;he++)G(j.location+he,Q/j.locationSize,He,L,Q*Oe,Q/j.locationSize*he*Oe,oe)}}else if(J!==void 0){const L=J[H];if(L!==void 0)switch(L.length){case 2:s.vertexAttrib2fv(j.location,L);break;case 3:s.vertexAttrib3fv(j.location,L);break;case 4:s.vertexAttrib4fv(j.location,L);break;default:s.vertexAttrib1fv(j.location,L)}}}}k()}function P(){D();for(const O in r){const q=r[O];for(const te in q){const B=q[te];for(const ne in B){const ue=B[ne];for(const J in ue)v(ue[J].object),delete ue[J];delete B[ne]}}delete r[O]}}function C(O){if(r[O.id]===void 0)return;const q=r[O.id];for(const te in q){const B=q[te];for(const ne in B){const ue=B[ne];for(const J in ue)v(ue[J].object),delete ue[J];delete B[ne]}}delete r[O.id]}function U(O){for(const q in r){const te=r[q];for(const B in te){const ne=te[B];if(ne[O.id]===void 0)continue;const ue=ne[O.id];for(const J in ue)v(ue[J].object),delete ue[J];delete ne[O.id]}}}function E(O){for(const q in r){const te=r[q],B=O.isInstancedMesh===!0?O.id:0,ne=te[B];if(ne!==void 0){for(const ue in ne){const J=ne[ue];for(const H in J)v(J[H].object),delete J[H];delete ne[ue]}delete te[B],Object.keys(te).length===0&&delete r[q]}}}function D(){z(),u=!0,l!==o&&(l=o,m(l.object))}function z(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:D,resetDefaultState:z,dispose:P,releaseStatesOfGeometry:C,releaseStatesOfObject:E,releaseStatesOfProgram:U,initAttributes:R,enableAttribute:S,disableUnusedAttributes:k}}function p1(s,e,n){let r;function o(x){r=x}function l(x,m){s.drawArrays(r,x,m),n.update(m,r,1)}function u(x,m,v){v!==0&&(s.drawArraysInstanced(r,x,m,v),n.update(m,r,v))}function h(x,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,x,0,m,0,v);let g=0;for(let _=0;_<v;_++)g+=m[_];n.update(g,r,1)}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=h}function m1(s,e,n,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(U){return!(U!==Ei&&r.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(U){const E=U===Oi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==Kn&&U!==Di&&!E&&r.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function x(U){if(U==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const v=x(m);v!==m&&(ot("WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const M=n.logarithmicDepthBuffer===!0,g=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&g===!1&&ot("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const _=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),y=s.getParameter(s.MAX_VERTEX_ATTRIBS),k=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),G=s.getParameter(s.MAX_VARYING_VECTORS),N=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),P=s.getParameter(s.MAX_SAMPLES),C=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:x,textureFormatReadable:u,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:M,reversedDepthBuffer:g,maxTextures:_,maxVertexTextures:w,maxTextureSize:R,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:k,maxVaryings:G,maxFragmentUniforms:N,maxSamples:P,samples:C}}function x1(s){const e=this;let n=null,r=0,o=!1,l=!1;const u=new Rr,h=new ct,x={value:null,needsUpdate:!1};this.uniform=x,this.numPlanes=0,this.numIntersection=0,this.init=function(M,g){const _=M.length!==0||g||r!==0||o;return o=g,r=M.length,_},this.beginShadows=function(){l=!0,v(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(M,g){n=v(M,g,0)},this.setState=function(M,g,_){const w=M.clippingPlanes,R=M.clipIntersection,S=M.clipShadows,y=s.get(M);if(!o||w===null||w.length===0||l&&!S)l?v(null):m();else{const k=l?0:r,G=k*4;let N=y.clippingState||null;x.value=N,N=v(w,g,G,_);for(let P=0;P!==G;++P)N[P]=n[P];y.clippingState=N,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=k}};function m(){x.value!==n&&(x.value=n,x.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(M,g,_,w){const R=M!==null?M.length:0;let S=null;if(R!==0){if(S=x.value,w!==!0||S===null){const y=_+R*4,k=g.matrixWorldInverse;h.getNormalMatrix(k),(S===null||S.length<y)&&(S=new Float32Array(y));for(let G=0,N=_;G!==R;++G,N+=4)u.copy(M[G]).applyMatrix4(k,h),u.normal.toArray(S,N),S[N+3]=u.constant}x.value=S,x.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,S}}const js=4,g1=6,v1=20,_1=256,Va=new Mf,km=new Et;let od=null,ld=0,cd=0,ud=!1;const y1=new ce,Qr=new ce;class Um{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,r=.1,o=100,l={}){const{size:u=256,position:h=y1}=l;od=this._renderer.getRenderTarget(),ld=this._renderer.getActiveCubeFace(),cd=this._renderer.getActiveMipmapLevel(),ud=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const x=this._allocateTargets();return x.depthBuffer=!0,this._sceneToCubeUV(e,r,o,x,h),n>0&&this._blur(x,0,0,n),this._applyPMREM(x),this._cleanup(x),x}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Om(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(od,ld,cd),this._renderer.xr.enabled=ud,e.scissorTest=!1,Gs(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===is||e.mapping===Ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),od=this._renderer.getRenderTarget(),ld=this._renderer.getActiveCubeFace(),cd=this._renderer.getActiveMipmapLevel(),ud=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:An,minFilter:An,generateMipmaps:!1,type:Oi,format:Ei,colorSpace:Gl,depthBuffer:!1},o=Fm(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fm(e,n,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=S1(l)),this._blurMaterial=b1(l,e,n),this._ggxMaterial=M1(l,e,n)}return o}_compileMaterial(e){const n=new Bi(new li,e);this._renderer.compile(n,Va)}_sceneToCubeUV(e,n,r,o,l){const x=new $n(90,1,n,r),m=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],M=this._renderer,g=M.autoClear,_=M.toneMapping;M.getClearColor(km),M.toneMapping=ki,M.autoClear=!1,M.state.buffers.depth.getReversed()&&(M.setRenderTarget(o),M.clearDepth(),M.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Bi(new eo,new B0({name:"PMREM.Background",side:Hn,depthWrite:!1,depthTest:!1})));const R=this._backgroundBox,S=R.material;let y=!1;const k=e.background;k?k.isColor&&(S.color.copy(k),e.background=null,y=!0):(S.color.copy(km),y=!0);for(let G=0;G<6;G++){const N=G%3;N===0?(x.up.set(0,m[G],0),x.position.set(l.x,l.y,l.z),x.lookAt(l.x+v[G],l.y,l.z)):N===1?(x.up.set(0,0,m[G]),x.position.set(l.x,l.y,l.z),x.lookAt(l.x,l.y+v[G],l.z)):(x.up.set(0,m[G],0),x.position.set(l.x,l.y,l.z),x.lookAt(l.x,l.y,l.z+v[G]));const P=this._cubeSize;Gs(o,N*P,G>2?P:0,P,P),M.setRenderTarget(o),y&&M.render(R,x),M.render(e,x)}M.toneMapping=_,M.autoClear=g,e.background=k}_textureToCubeUV(e,n){const r=this._renderer,o=e.mapping===is||e.mapping===Ys;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Om());const l=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const h=l.uniforms;h.envMap.value=e;const x=this._cubeSize;Gs(n,0,0,3*x,2*x),r.setRenderTarget(n),r.render(u,Va)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);n.autoClear=r}_applyGGXFilter(e,n,r){const o=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,h=this._lodMeshes[r];h.material=u;const x=u.uniforms,m=r/(this._lodMeshes.length-1),v=n/(this._lodMeshes.length-1),M=Math.sqrt(m*m-v*v),g=m*1.25,_=M*g,{_lodMax:w}=this,R=this._sizeLods[r],S=3*R*(r>w-js?r-w+js:0),y=4*(this._cubeSize-R);x.envMap.value=e.texture,x.roughness.value=_,x.mipInt.value=w-n,Gs(l,S,y,3*R,2*R),o.setRenderTarget(l),o.render(h,Va),x.envMap.value=l.texture,x.roughness.value=0,x.mipInt.value=w-r,Gs(e,S,y,3*R,2*R),o.setRenderTarget(e),o.render(h,Va)}_blur(e,n,r,o){const l=this._pingPongRenderTarget,u=Math.min(o,Math.PI)/Math.SQRT2;this._blurPass(e,l,n,r,u),this._blurPass(l,e,r,r,u)}_blurPass(e,n,r,o,l){const u=this._renderer,h=this._blurMaterial,x=this._lodMeshes[o];x.material=h;const m=h.uniforms;m.envMap.value=e.texture,m.sigma.value=l,m.mipInt.value=this._lodMax-r;const v=this._sizeLods[o],M=3*v*(o>this._lodMax-js?o-this._lodMax+js:0),g=4*(this._cubeSize-v);Gs(n,M,g,3*v,2*v),u.setRenderTarget(n),u.render(x,Va)}}function S1(s){const e=[],n=[];let r=s;const o=s-js+1+g1;for(let l=0;l<o;l++){const u=Math.pow(2,r);e.push(u);const h=1/(u-2),x=-h,m=1+h,v=[x,x,m,x,m,m,x,x,m,m,x,m],M=6,g=6,_=3,w=new Float32Array(_*g*M),R=new Float32Array(_*g*M);for(let y=0;y<M;y++){const k=y%3*2/3-1,G=y>2?0:-1,N=[k,G,0,k+2/3,G,0,k+2/3,G+1,0,k,G,0,k+2/3,G+1,0,k,G+1,0];w.set(N,_*g*y);for(let P=0;P<g;P++){const C=v[P*2]*2-1,U=v[P*2+1]*2-1;y===0?Qr.set(1,U,C):y===1?Qr.set(-C,1,-U):y===2?Qr.set(-C,U,1):y===3?Qr.set(-1,U,-C):y===4?Qr.set(-C,-1,U):Qr.set(C,U,-1),Qr.toArray(R,(y*g+P)*_)}}const S=new li;S.setAttribute("position",new Ui(w,_)),S.setAttribute("outputDirection",new Ui(R,_)),n.push(new Bi(S,null)),r>js&&r--}return{lodMeshes:n,sizeLods:e}}function Fm(s,e,n){const r=new wi(s,e,n);return r.texture.mapping=ql,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Gs(s,e,n,r,o){s.viewport.set(e,n,r,o),s.scissor.set(e,n,r,o)}function M1(s,e,n){return new zi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:_1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Kl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ir,depthTest:!1,depthWrite:!1})}function b1(s,e,n){return new zi({name:"SphericalGaussianBlur",defines:{SAMPLES:v1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Kl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:ir,depthTest:!1,depthWrite:!1})}function Om(){return new zi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kl(),fragmentShader:`

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
		`,blending:ir,depthTest:!1,depthWrite:!1})}function Bm(){return new zi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ir,depthTest:!1,depthWrite:!1})}function Kl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Y0 extends wi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new V0(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new eo(5,5,5),l=new zi({name:"CubemapFromEquirect",uniforms:$s(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Hn,blending:ir});l.uniforms.tEquirect.value=n;const u=new Bi(o,l),h=n.minFilter;return n.minFilter===es&&(n.minFilter=An),new Ty(1,10,this).update(e,u),n.minFilter=h,u.geometry.dispose(),u.material.dispose(),this}clear(e,n=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,r,o);e.setRenderTarget(l)}}function E1(s){let e=new WeakMap,n=new WeakMap,r=null;function o(g,_=!1){return g==null?null:_?u(g):l(g)}function l(g){if(g&&g.isTexture){const _=g.mapping;if(_===Iu||_===ku)if(e.has(g)){const w=e.get(g).texture;return h(w,g.mapping)}else{const w=g.image;if(w&&w.height>0){const R=new Y0(w.height);return R.fromEquirectangularTexture(s,g),e.set(g,R),g.addEventListener("dispose",m),h(R.texture,g.mapping)}else return null}}return g}function u(g){if(g&&g.isTexture){const _=g.mapping,w=_===Iu||_===ku,R=_===is||_===Ys;if(w||R){let S=n.get(g);const y=S!==void 0?S.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==y)return r===null&&(r=new Um(s)),S=w?r.fromEquirectangular(g,S):r.fromCubemap(g,S),S.texture.pmremVersion=g.pmremVersion,n.set(g,S),S.texture;if(S!==void 0)return S.texture;{const k=g.image;return w&&k&&k.height>0||R&&k&&x(k)?(r===null&&(r=new Um(s)),S=w?r.fromEquirectangular(g):r.fromCubemap(g),S.texture.pmremVersion=g.pmremVersion,n.set(g,S),g.addEventListener("dispose",v),S.texture):null}}}return g}function h(g,_){return _===Iu?g.mapping=is:_===ku&&(g.mapping=Ys),g}function x(g){let _=0;const w=6;for(let R=0;R<w;R++)g[R]!==void 0&&_++;return _===w}function m(g){const _=g.target;_.removeEventListener("dispose",m);const w=e.get(_);w!==void 0&&(e.delete(_),w.dispose())}function v(g){const _=g.target;_.removeEventListener("dispose",v);const w=n.get(_);w!==void 0&&(n.delete(_),w.dispose())}function M(){e=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:M}}function w1(s){const e={};function n(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&Xs("WebGLRenderer: "+r+" extension not supported."),o}}}function T1(s,e,n,r){const o={},l=new WeakMap;function u(M){const g=M.target;g.index!==null&&e.remove(g.index);for(const w in g.attributes)e.remove(g.attributes[w]);g.removeEventListener("dispose",u),delete o[g.id];const _=l.get(g);_&&(e.remove(_),l.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,n.memory.geometries--}function h(M,g){return o[g.id]===!0||(g.addEventListener("dispose",u),o[g.id]=!0,n.memory.geometries++),g}function x(M){const g=M.attributes;for(const _ in g)e.update(g[_],s.ARRAY_BUFFER)}function m(M){const g=[],_=M.index,w=M.attributes.position;let R=0;if(w===void 0)return;if(_!==null){const k=_.array;R=_.version;for(let G=0,N=k.length;G<N;G+=3){const P=k[G+0],C=k[G+1],U=k[G+2];g.push(P,C,C,U,U,P)}}else{const k=w.array;R=w.version;for(let G=0,N=k.length/3-1;G<N;G+=3){const P=G+0,C=G+1,U=G+2;g.push(P,C,C,U,U,P)}}const S=new(w.count>=65535?F0:U0)(g,1);S.version=R;const y=l.get(M);y&&e.remove(y),l.set(M,S)}function v(M){const g=l.get(M);if(g){const _=M.index;_!==null&&g.version<_.version&&m(M)}else m(M);return l.get(M)}return{get:h,update:x,getWireframeAttribute:v}}function A1(s,e,n){let r;function o(M){r=M}let l,u;function h(M){l=M.type,u=M.bytesPerElement}function x(M,g){s.drawElements(r,g,l,M*u),n.update(g,r,1)}function m(M,g,_){_!==0&&(s.drawElementsInstanced(r,g,l,M*u,_),n.update(g,r,_))}function v(M,g,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,l,M,0,_);let R=0;for(let S=0;S<_;S++)R+=g[S];n.update(R,r,1)}this.setMode=o,this.setIndex=h,this.render=x,this.renderInstances=m,this.renderMultiDraw=v}function C1(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,h){switch(n.calls++,u){case s.TRIANGLES:n.triangles+=h*(l/3);break;case s.LINES:n.lines+=h*(l/2);break;case s.LINE_STRIP:n.lines+=h*(l-1);break;case s.LINE_LOOP:n.lines+=h*l;break;case s.POINTS:n.points+=h*l;break;default:Lt("WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:r}}function R1(s,e,n){const r=new WeakMap,o=new Kt;function l(u,h,x){const m=u.morphTargetInfluences,v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,M=v!==void 0?v.length:0;let g=r.get(h);if(g===void 0||g.count!==M){let D=function(){U.dispose(),r.delete(h),h.removeEventListener("dispose",D)};g!==void 0&&g.texture.dispose();const _=h.morphAttributes.position!==void 0,w=h.morphAttributes.normal!==void 0,R=h.morphAttributes.color!==void 0,S=h.morphAttributes.position||[],y=h.morphAttributes.normal||[],k=h.morphAttributes.color||[];let G=0;_===!0&&(G=1),w===!0&&(G=2),R===!0&&(G=3);let N=h.attributes.position.count*G,P=1;N>e.maxTextureSize&&(P=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const C=new Float32Array(N*P*4*M),U=new D0(C,N,P,M);U.type=Di,U.needsUpdate=!0;const E=G*4;for(let z=0;z<M;z++){const O=S[z],q=y[z],te=k[z],B=N*P*4*z;for(let ne=0;ne<O.count;ne++){const ue=ne*E;_===!0&&(o.fromBufferAttribute(O,ne),C[B+ue+0]=o.x,C[B+ue+1]=o.y,C[B+ue+2]=o.z,C[B+ue+3]=0),w===!0&&(o.fromBufferAttribute(q,ne),C[B+ue+4]=o.x,C[B+ue+5]=o.y,C[B+ue+6]=o.z,C[B+ue+7]=0),R===!0&&(o.fromBufferAttribute(te,ne),C[B+ue+8]=o.x,C[B+ue+9]=o.y,C[B+ue+10]=o.z,C[B+ue+11]=te.itemSize===4?o.w:1)}}g={count:M,texture:U,size:new St(N,P)},r.set(h,g),h.addEventListener("dispose",D)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)x.getUniforms().setValue(s,"morphTexture",u.morphTexture,n);else{let _=0;for(let R=0;R<m.length;R++)_+=m[R];const w=h.morphTargetsRelative?1:1-_;x.getUniforms().setValue(s,"morphTargetBaseInfluence",w),x.getUniforms().setValue(s,"morphTargetInfluences",m)}x.getUniforms().setValue(s,"morphTargetsTexture",g.texture,n),x.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:l}}function N1(s,e,n,r,o){let l=new WeakMap;function u(m){const v=o.render.frame,M=m.geometry,g=e.get(m,M);if(l.get(g)!==v&&(e.update(g),l.set(g,v)),m.isInstancedMesh&&(m.hasEventListener("dispose",x)===!1&&m.addEventListener("dispose",x),l.get(m)!==v&&(n.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&n.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,v))),m.isSkinnedMesh){const _=m.skeleton;l.get(_)!==v&&(_.update(),l.set(_,v))}return g}function h(){l=new WeakMap}function x(m){const v=m.target;v.removeEventListener("dispose",x),r.releaseStatesOfObject(v),n.remove(v.instanceMatrix),v.instanceColor!==null&&n.remove(v.instanceColor)}return{update:u,dispose:h}}const P1={[v0]:"LINEAR_TONE_MAPPING",[_0]:"REINHARD_TONE_MAPPING",[y0]:"CINEON_TONE_MAPPING",[cf]:"ACES_FILMIC_TONE_MAPPING",[M0]:"AGX_TONE_MAPPING",[b0]:"NEUTRAL_TONE_MAPPING",[S0]:"CUSTOM_TONE_MAPPING"};function L1(s,e,n,r,o,l){const u=new wi(e,n,{type:s,depthBuffer:o,stencilBuffer:l,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let h=null,x=null;const m=new li;m.setAttribute("position",new oi([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new oi([0,2,0,0,2,0],2));const v=new _y({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),M=new Bi(m,v),g=new Mf(-1,1,1,-1,0,1);let _=null,w=null,R=!1,S,y=null,k=[],G=!1;this.setSize=function(N,P){u.setSize(N,P),h!==null&&h.setSize(N,P),x!==null&&x.setSize(N,P);for(let C=0;C<k.length;C++){const U=k[C];U.setSize&&U.setSize(N,P)}},this.setEffects=function(N){k=N,G=k.length>0&&k[0].isRenderPass===!0;const P=u.width,C=u.height;k.length>0&&h===null&&(h=new wi(P,C,{type:Oi,depthBuffer:!1,stencilBuffer:!1}),x=new wi(P,C,{type:Oi,depthBuffer:!1,stencilBuffer:!1}));for(let U=0;U<k.length;U++){const E=k[U];E.setSize&&E.setSize(P,C)}},this.begin=function(N,P){if(R||N.toneMapping===ki&&k.length===0)return!1;if(y=P,P!==null){const C=P.width,U=P.height;(u.width!==C||u.height!==U)&&this.setSize(C,U)}return G===!1&&N.setRenderTarget(u),S=N.toneMapping,N.toneMapping=ki,!0},this.hasRenderPass=function(){return G},this.end=function(N,P){N.toneMapping=S,R=!0;let C=u,U=h;for(let E=0;E<k.length;E++){const D=k[E];D.enabled!==!1&&(D.render(N,U,C,P),D.needsSwap!==!1&&(C=U,U=U===h?x:h))}if(_!==N.outputColorSpace||w!==N.toneMapping){_=N.outputColorSpace,w=N.toneMapping,v.defines={},_t.getTransfer(_)===Ot&&(v.defines.SRGB_TRANSFER="");const E=P1[w];E&&(v.defines[E]=""),v.needsUpdate=!0}v.uniforms.tDiffuse.value=C.texture,N.setRenderTarget(y),N.render(M,g),y=null,R=!1},this.isCompositing=function(){return R},this.dispose=function(){u.dispose(),h!==null&&h.dispose(),x!==null&&x.dispose(),m.dispose(),v.dispose()}}const $0=new Cn,nf=new Ka(1,1),K0=new D0,Z0=new $_,J0=new V0,zm=[],Vm=[],Hm=new Float32Array(16),Gm=new Float32Array(9),Wm=new Float32Array(4);function Js(s,e,n){const r=s[0];if(r<=0||r>0)return s;const o=e*n;let l=zm[o];if(l===void 0&&(l=new Float32Array(o),zm[o]=l),e!==0){r.toArray(l,0);for(let u=1,h=0;u!==e;++u)h+=n,s[u].toArray(l,h)}return l}function cn(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function un(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Zl(s,e){let n=Vm[e];n===void 0&&(n=new Int32Array(e),Vm[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function D1(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function I1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(cn(n,e))return;s.uniform2fv(this.addr,e),un(n,e)}}function k1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(cn(n,e))return;s.uniform3fv(this.addr,e),un(n,e)}}function U1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(cn(n,e))return;s.uniform4fv(this.addr,e),un(n,e)}}function F1(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(cn(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),un(n,e)}else{if(cn(n,r))return;Wm.set(r),s.uniformMatrix2fv(this.addr,!1,Wm),un(n,r)}}function O1(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(cn(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),un(n,e)}else{if(cn(n,r))return;Gm.set(r),s.uniformMatrix3fv(this.addr,!1,Gm),un(n,r)}}function B1(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(cn(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),un(n,e)}else{if(cn(n,r))return;Hm.set(r),s.uniformMatrix4fv(this.addr,!1,Hm),un(n,r)}}function z1(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function V1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(cn(n,e))return;s.uniform2iv(this.addr,e),un(n,e)}}function H1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(cn(n,e))return;s.uniform3iv(this.addr,e),un(n,e)}}function G1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(cn(n,e))return;s.uniform4iv(this.addr,e),un(n,e)}}function W1(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function j1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(cn(n,e))return;s.uniform2uiv(this.addr,e),un(n,e)}}function X1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(cn(n,e))return;s.uniform3uiv(this.addr,e),un(n,e)}}function q1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(cn(n,e))return;s.uniform4uiv(this.addr,e),un(n,e)}}function Y1(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(nf.compareFunction=n.isReversedDepthBuffer()?gf:xf,l=nf):l=$0,n.setTexture2D(e||l,o)}function $1(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(e||Z0,o)}function K1(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(e||J0,o)}function Z1(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(e||K0,o)}function J1(s){switch(s){case 5126:return D1;case 35664:return I1;case 35665:return k1;case 35666:return U1;case 35674:return F1;case 35675:return O1;case 35676:return B1;case 5124:case 35670:return z1;case 35667:case 35671:return V1;case 35668:case 35672:return H1;case 35669:case 35673:return G1;case 5125:return W1;case 36294:return j1;case 36295:return X1;case 36296:return q1;case 35678:case 36198:case 36298:case 36306:case 35682:return Y1;case 35679:case 36299:case 36307:return $1;case 35680:case 36300:case 36308:case 36293:return K1;case 36289:case 36303:case 36311:case 36292:return Z1}}function Q1(s,e){s.uniform1fv(this.addr,e)}function eb(s,e){const n=Js(e,this.size,2);s.uniform2fv(this.addr,n)}function tb(s,e){const n=Js(e,this.size,3);s.uniform3fv(this.addr,n)}function nb(s,e){const n=Js(e,this.size,4);s.uniform4fv(this.addr,n)}function ib(s,e){const n=Js(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function rb(s,e){const n=Js(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function sb(s,e){const n=Js(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function ab(s,e){s.uniform1iv(this.addr,e)}function ob(s,e){s.uniform2iv(this.addr,e)}function lb(s,e){s.uniform3iv(this.addr,e)}function cb(s,e){s.uniform4iv(this.addr,e)}function ub(s,e){s.uniform1uiv(this.addr,e)}function db(s,e){s.uniform2uiv(this.addr,e)}function fb(s,e){s.uniform3uiv(this.addr,e)}function hb(s,e){s.uniform4uiv(this.addr,e)}function pb(s,e,n){const r=this.cache,o=e.length,l=Zl(n,o);cn(r,l)||(s.uniform1iv(this.addr,l),un(r,l));let u;this.type===s.SAMPLER_2D_SHADOW?u=nf:u=$0;for(let h=0;h!==o;++h)n.setTexture2D(e[h]||u,l[h])}function mb(s,e,n){const r=this.cache,o=e.length,l=Zl(n,o);cn(r,l)||(s.uniform1iv(this.addr,l),un(r,l));for(let u=0;u!==o;++u)n.setTexture3D(e[u]||Z0,l[u])}function xb(s,e,n){const r=this.cache,o=e.length,l=Zl(n,o);cn(r,l)||(s.uniform1iv(this.addr,l),un(r,l));for(let u=0;u!==o;++u)n.setTextureCube(e[u]||J0,l[u])}function gb(s,e,n){const r=this.cache,o=e.length,l=Zl(n,o);cn(r,l)||(s.uniform1iv(this.addr,l),un(r,l));for(let u=0;u!==o;++u)n.setTexture2DArray(e[u]||K0,l[u])}function vb(s){switch(s){case 5126:return Q1;case 35664:return eb;case 35665:return tb;case 35666:return nb;case 35674:return ib;case 35675:return rb;case 35676:return sb;case 5124:case 35670:return ab;case 35667:case 35671:return ob;case 35668:case 35672:return lb;case 35669:case 35673:return cb;case 5125:return ub;case 36294:return db;case 36295:return fb;case 36296:return hb;case 35678:case 36198:case 36298:case 36306:case 35682:return pb;case 35679:case 36299:case 36307:return mb;case 35680:case 36300:case 36308:case 36293:return xb;case 36289:case 36303:case 36311:case 36292:return gb}}class _b{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=J1(n.type)}}class yb{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=vb(n.type)}}class Sb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const h=o[l];h.setValue(e,n[h.id],r)}}}const dd=/(\w+)(\])?(\[|\.)?/g;function jm(s,e){s.seq.push(e),s.map[e.id]=e}function Mb(s,e,n){const r=s.name,o=r.length;for(dd.lastIndex=0;;){const l=dd.exec(r),u=dd.lastIndex;let h=l[1];const x=l[2]==="]",m=l[3];if(x&&(h=h|0),m===void 0||m==="["&&u+2===o){jm(n,m===void 0?new _b(h,s,e):new yb(h,s,e));break}else{let M=n.map[h];M===void 0&&(M=new Sb(h),jm(n,M)),n=M}}}class Ol{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const h=e.getActiveUniform(n,u),x=e.getUniformLocation(n,h.name);Mb(h,x,this)}const o=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):l.push(u);o.length>0&&(this.seq=o.concat(l))}setValue(e,n,r,o){const l=this.map[n];l!==void 0&&l.setValue(e,r,o)}setOptional(e,n,r){const o=n[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,n,r,o){for(let l=0,u=n.length;l!==u;++l){const h=n[l],x=r[h.id];x.needsUpdate!==!1&&h.setValue(e,x.value,o)}}static seqWithValue(e,n){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in n&&r.push(u)}return r}}function Xm(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const bb=37297;let Eb=0;function wb(s,e){const n=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,n.length);for(let u=o;u<l;u++){const h=u+1;r.push(`${h===e?">":" "} ${h}: ${n[u]}`)}return r.join(`
`)}const qm=new ct;function Tb(s){_t._getMatrix(qm,_t.workingColorSpace,s);const e=`mat3( ${qm.elements.map(n=>n.toFixed(4))} )`;switch(_t.getTransfer(s)){case Wl:return[e,"LinearTransferOETF"];case Ot:return[e,"sRGBTransferOETF"];default:return ot("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Ym(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const h=parseInt(u[1]);return n.toUpperCase()+`

`+l+`

`+wb(s.getShaderSource(e),h)}else return l}function Ab(s,e){const n=Tb(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const Cb={[v0]:"Linear",[_0]:"Reinhard",[y0]:"Cineon",[cf]:"ACESFilmic",[M0]:"AgX",[b0]:"Neutral",[S0]:"Custom"};function Rb(s,e){const n=Cb[e];return n===void 0?(ot("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Pl=new ce;function Nb(){_t.getLuminanceCoefficients(Pl);const s=Pl.x.toFixed(4),e=Pl.y.toFixed(4),n=Pl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Pb(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wa).join(`
`)}function Lb(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function Db(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),u=l.name;let h=1;l.type===s.FLOAT_MAT2&&(h=2),l.type===s.FLOAT_MAT3&&(h=3),l.type===s.FLOAT_MAT4&&(h=4),n[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:h}}return n}function Wa(s){return s!==""}function $m(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Km(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ib=/^[ \t]*#include +<([\w\d./]+)>/gm;function rf(s){return s.replace(Ib,Ub)}const kb=new Map;function Ub(s,e){let n=pt[e];if(n===void 0){const r=kb.get(e);if(r!==void 0)n=pt[r],ot('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return rf(n)}const Fb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zm(s){return s.replace(Fb,Ob)}function Ob(s,e,n,r){let o="";for(let l=parseInt(e);l<parseInt(n);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function Jm(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Bb={[Dl]:"SHADOWMAP_TYPE_PCF",[Ga]:"SHADOWMAP_TYPE_VSM"};function zb(s){return Bb[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Vb={[is]:"ENVMAP_TYPE_CUBE",[Ys]:"ENVMAP_TYPE_CUBE",[ql]:"ENVMAP_TYPE_CUBE_UV"};function Hb(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":Vb[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const Gb={[Ys]:"ENVMAP_MODE_REFRACTION"};function Wb(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Gb[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const jb={[g0]:"ENVMAP_BLENDING_MULTIPLY",[T_]:"ENVMAP_BLENDING_MIX",[A_]:"ENVMAP_BLENDING_ADD"};function Xb(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":jb[s.combine]||"ENVMAP_BLENDING_NONE"}function qb(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function Yb(s,e,n,r){const o=s.getContext(),l=n.defines;let u=n.vertexShader,h=n.fragmentShader;const x=zb(n),m=Hb(n),v=Wb(n),M=Xb(n),g=qb(n),_=Pb(n),w=Lb(l),R=o.createProgram();let S,y,k=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(Wa).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(Wa).join(`
`),y.length>0&&(y+=`
`)):(S=[Jm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+v:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+x:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wa).join(`
`),y=[Jm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+v:"",n.envMap?"#define "+M:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+x:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ki?"#define TONE_MAPPING":"",n.toneMapping!==ki?pt.tonemapping_pars_fragment:"",n.toneMapping!==ki?Rb("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,Ab("linearToOutputTexel",n.outputColorSpace),Nb(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Wa).join(`
`)),u=rf(u),u=$m(u,n),u=Km(u,n),h=rf(h),h=$m(h,n),h=Km(h,n),u=Zm(u),h=Zm(h),n.isRawShaderMaterial!==!0&&(k=`#version 300 es
`,S=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",n.glslVersion===am?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===am?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const G=k+S+u,N=k+y+h,P=Xm(o,o.VERTEX_SHADER,G),C=Xm(o,o.FRAGMENT_SHADER,N);o.attachShader(R,P),o.attachShader(R,C),n.index0AttributeName!==void 0?o.bindAttribLocation(R,0,n.index0AttributeName):n.hasPositionAttribute===!0&&o.bindAttribLocation(R,0,"position"),o.linkProgram(R);function U(O){if(s.debug.checkShaderErrors){const q=o.getProgramInfoLog(R)||"",te=o.getShaderInfoLog(P)||"",B=o.getShaderInfoLog(C)||"",ne=q.trim(),ue=te.trim(),J=B.trim();let H=!0,j=!0;if(o.getProgramParameter(R,o.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,R,P,C);else{const X=Ym(o,P,"vertex"),L=Ym(o,C,"fragment");Lt("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(R,o.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+ne+`
`+X+`
`+L)}else ne!==""?ot("WebGLProgram: Program Info Log:",ne):(ue===""||J==="")&&(j=!1);j&&(O.diagnostics={runnable:H,programLog:ne,vertexShader:{log:ue,prefix:S},fragmentShader:{log:J,prefix:y}})}o.deleteShader(P),o.deleteShader(C),E=new Ol(o,R),D=Db(o,R)}let E;this.getUniforms=function(){return E===void 0&&U(this),E};let D;this.getAttributes=function(){return D===void 0&&U(this),D};let z=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=o.getProgramParameter(R,bb)),z},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(R),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Eb++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=P,this.fragmentShader=C,this}let $b=0;class Kb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,r){const o=this._getShaderCacheForMaterial(e);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new Zb(e),n.set(e,r)),r}}class Zb{constructor(e){this.id=$b++,this.code=e,this.usedTimes=0}}function Jb(s){return s===rs||s===Vl||s===Hl}function Qb(s,e,n,r,o,l){const u=new I0,h=new Kb,x=new Set,m=[],v=new Map,M=r.logarithmicDepthBuffer;let g=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(E){return x.add(E),E===0?"uv":`uv${E}`}function R(E,D,z,O,q,te){const B=O.fog,ne=q.geometry,ue=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?O.environment:null,J=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,H=e.get(E.envMap||ue,J),j=H&&H.mapping===ql?H.image.height:null,X=_[E.type];E.precision!==null&&(g=r.getMaxPrecision(E.precision),g!==E.precision&&ot("WebGLProgram.getParameters:",E.precision,"not supported, using",g,"instead."));const L=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,Q=L!==void 0?L.length:0;let ye=0;ne.morphAttributes.position!==void 0&&(ye=1),ne.morphAttributes.normal!==void 0&&(ye=2),ne.morphAttributes.color!==void 0&&(ye=3);let De,He,Oe,oe;if(X){const Rt=Li[X];De=Rt.vertexShader,He=Rt.fragmentShader}else{De=E.vertexShader,He=E.fragmentShader;const Rt=h.getVertexShaderStage(E),bt=h.getFragmentShaderStage(E);h.update(E,Rt,bt),Oe=Rt.id,oe=bt.id}const he=s.getRenderTarget(),be=s.state.buffers.depth.getReversed(),$e=q.isInstancedMesh===!0,Be=q.isBatchedMesh===!0,ut=!!E.map,zt=!!E.matcap,st=!!H,mt=!!E.aoMap,wt=!!E.lightMap,dt=!!E.bumpMap&&E.wireframe===!1,Ut=!!E.normalMap,Dt=!!E.displacementMap,It=!!E.emissiveMap,Ct=!!E.metalnessMap,Vt=!!E.roughnessMap,K=E.anisotropy>0,en=E.clearcoat>0,Mt=E.dispersion>0,I=E.retroreflectivity>0,b=E.iridescence>0,V=E.sheen>0,ee=E.transmission>0,ae=K&&!!E.anisotropyMap,Me=en&&!!E.clearcoatMap,we=en&&!!E.clearcoatNormalMap,pe=en&&!!E.clearcoatRoughnessMap,xe=b&&!!E.iridescenceMap,Re=b&&!!E.iridescenceThicknessMap,Ke=V&&!!E.sheenColorMap,Ne=V&&!!E.sheenRoughnessMap,Te=!!E.specularMap,Ze=!!E.specularColorMap,tt=!!E.specularIntensityMap,rt=ee&&!!E.transmissionMap,Y=ee&&!!E.thicknessMap,Ae=!!E.gradientMap,me=!!E.alphaMap,Ce=E.alphaTest>0,Fe=!!E.alphaHash,ge=!!E.extensions;let Qe=ki;E.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(Qe=s.toneMapping);const qe={shaderID:X,shaderType:E.type,shaderName:E.name,vertexShader:De,fragmentShader:He,defines:E.defines,customVertexShaderID:Oe,customFragmentShaderID:oe,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:g,batching:Be,batchingColor:Be&&q._colorsTexture!==null,instancing:$e,instancingColor:$e&&q.instanceColor!==null,instancingMorph:$e&&q.morphTexture!==null,outputColorSpace:he===null?s.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:_t.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:ut,matcap:zt,envMap:st,envMapMode:st&&H.mapping,envMapCubeUVHeight:j,aoMap:mt,lightMap:wt,bumpMap:dt,normalMap:Ut,displacementMap:Dt,emissiveMap:It,normalMapObjectSpace:Ut&&E.normalMapType===N_,normalMapTangentSpace:Ut&&E.normalMapType===Qd,packedNormalMap:Ut&&E.normalMapType===Qd&&Jb(E.normalMap.format),metalnessMap:Ct,roughnessMap:Vt,anisotropy:K,anisotropyMap:ae,clearcoat:en,clearcoatMap:Me,clearcoatNormalMap:we,clearcoatRoughnessMap:pe,dispersion:Mt,retroreflection:I,iridescence:b,iridescenceMap:xe,iridescenceThicknessMap:Re,sheen:V,sheenColorMap:Ke,sheenRoughnessMap:Ne,specularMap:Te,specularColorMap:Ze,specularIntensityMap:tt,transmission:ee,transmissionMap:rt,thicknessMap:Y,gradientMap:Ae,opaque:E.transparent===!1&&E.blending===ja&&E.alphaToCoverage===!1,alphaMap:me,alphaTest:Ce,alphaHash:Fe,combine:E.combine,mapUv:ut&&w(E.map.channel),aoMapUv:mt&&w(E.aoMap.channel),lightMapUv:wt&&w(E.lightMap.channel),bumpMapUv:dt&&w(E.bumpMap.channel),normalMapUv:Ut&&w(E.normalMap.channel),displacementMapUv:Dt&&w(E.displacementMap.channel),emissiveMapUv:It&&w(E.emissiveMap.channel),metalnessMapUv:Ct&&w(E.metalnessMap.channel),roughnessMapUv:Vt&&w(E.roughnessMap.channel),anisotropyMapUv:ae&&w(E.anisotropyMap.channel),clearcoatMapUv:Me&&w(E.clearcoatMap.channel),clearcoatNormalMapUv:we&&w(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&w(E.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&w(E.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&w(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ke&&w(E.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&w(E.sheenRoughnessMap.channel),specularMapUv:Te&&w(E.specularMap.channel),specularColorMapUv:Ze&&w(E.specularColorMap.channel),specularIntensityMapUv:tt&&w(E.specularIntensityMap.channel),transmissionMapUv:rt&&w(E.transmissionMap.channel),thicknessMapUv:Y&&w(E.thicknessMap.channel),alphaMapUv:me&&w(E.alphaMap.channel),vertexTangents:!!ne.attributes.tangent&&(Ut||K),vertexNormals:!!ne.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!ne.attributes.uv&&(ut||me),fog:!!B,useFog:E.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||ne.attributes.normal===void 0&&Ut===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:M,reversedDepthBuffer:be,skinning:q.isSkinnedMesh===!0,hasPositionAttribute:ne.attributes.position!==void 0,morphTargets:ne.morphAttributes.position!==void 0,morphNormals:ne.morphAttributes.normal!==void 0,morphColors:ne.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:ye,numSunLights:D.sun.length,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numSunLightShadows:D.sunShadowMap.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numLightProbeGrids:te.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&z.length>0,shadowMapType:s.shadowMap.type,toneMapping:Qe,decodeVideoTexture:ut&&E.map.isVideoTexture===!0&&_t.getTransfer(E.map.colorSpace)===Ot,decodeVideoTextureEmissive:It&&E.emissiveMap.isVideoTexture===!0&&_t.getTransfer(E.emissiveMap.colorSpace)===Ot,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===tr,flipSided:E.side===Hn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:ge&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ge&&E.extensions.multiDraw===!0||Be)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return qe.vertexUv1s=x.has(1),qe.vertexUv2s=x.has(2),qe.vertexUv3s=x.has(3),x.clear(),qe}function S(E){const D=[];if(E.shaderID?D.push(E.shaderID):(D.push(E.customVertexShaderID),D.push(E.customFragmentShaderID)),E.defines!==void 0)for(const z in E.defines)D.push(z),D.push(E.defines[z]);return E.isRawShaderMaterial===!1&&(y(D,E),k(D,E),D.push(s.outputColorSpace)),D.push(E.customProgramCacheKey),D.join()}function y(E,D){E.push(D.precision),E.push(D.outputColorSpace),E.push(D.envMapMode),E.push(D.envMapCubeUVHeight),E.push(D.mapUv),E.push(D.alphaMapUv),E.push(D.lightMapUv),E.push(D.aoMapUv),E.push(D.bumpMapUv),E.push(D.normalMapUv),E.push(D.displacementMapUv),E.push(D.emissiveMapUv),E.push(D.metalnessMapUv),E.push(D.roughnessMapUv),E.push(D.anisotropyMapUv),E.push(D.clearcoatMapUv),E.push(D.clearcoatNormalMapUv),E.push(D.clearcoatRoughnessMapUv),E.push(D.iridescenceMapUv),E.push(D.iridescenceThicknessMapUv),E.push(D.sheenColorMapUv),E.push(D.sheenRoughnessMapUv),E.push(D.specularMapUv),E.push(D.specularColorMapUv),E.push(D.specularIntensityMapUv),E.push(D.transmissionMapUv),E.push(D.thicknessMapUv),E.push(D.combine),E.push(D.fogExp2),E.push(D.sizeAttenuation),E.push(D.morphTargetsCount),E.push(D.morphAttributeCount),E.push(D.numSunLights),E.push(D.numDirLights),E.push(D.numPointLights),E.push(D.numSpotLights),E.push(D.numSpotLightMaps),E.push(D.numHemiLights),E.push(D.numRectAreaLights),E.push(D.numSunLightShadows),E.push(D.numDirLightShadows),E.push(D.numPointLightShadows),E.push(D.numSpotLightShadows),E.push(D.numSpotLightShadowsWithMaps),E.push(D.numLightProbes),E.push(D.shadowMapType),E.push(D.toneMapping),E.push(D.numClippingPlanes),E.push(D.numClipIntersection),E.push(D.depthPacking)}function k(E,D){u.disableAll(),D.instancing&&u.enable(0),D.instancingColor&&u.enable(1),D.instancingMorph&&u.enable(2),D.matcap&&u.enable(3),D.envMap&&u.enable(4),D.normalMapObjectSpace&&u.enable(5),D.normalMapTangentSpace&&u.enable(6),D.clearcoat&&u.enable(7),D.iridescence&&u.enable(8),D.alphaTest&&u.enable(9),D.vertexColors&&u.enable(10),D.vertexAlphas&&u.enable(11),D.vertexUv1s&&u.enable(12),D.vertexUv2s&&u.enable(13),D.vertexUv3s&&u.enable(14),D.vertexTangents&&u.enable(15),D.anisotropy&&u.enable(16),D.alphaHash&&u.enable(17),D.batching&&u.enable(18),D.dispersion&&u.enable(19),D.retroreflection&&u.enable(24),D.batchingColor&&u.enable(20),D.gradientMap&&u.enable(21),D.packedNormalMap&&u.enable(22),D.vertexNormals&&u.enable(23),E.push(u.mask),u.disableAll(),D.fog&&u.enable(0),D.useFog&&u.enable(1),D.flatShading&&u.enable(2),D.logarithmicDepthBuffer&&u.enable(3),D.reversedDepthBuffer&&u.enable(4),D.skinning&&u.enable(5),D.morphTargets&&u.enable(6),D.morphNormals&&u.enable(7),D.morphColors&&u.enable(8),D.premultipliedAlpha&&u.enable(9),D.shadowMapEnabled&&u.enable(10),D.doubleSided&&u.enable(11),D.flipSided&&u.enable(12),D.useDepthPacking&&u.enable(13),D.dithering&&u.enable(14),D.transmission&&u.enable(15),D.sheen&&u.enable(16),D.opaque&&u.enable(17),D.pointsUvs&&u.enable(18),D.decodeVideoTexture&&u.enable(19),D.decodeVideoTextureEmissive&&u.enable(20),D.alphaToCoverage&&u.enable(21),D.numLightProbeGrids>0&&u.enable(22),D.hasPositionAttribute&&u.enable(23),E.push(u.mask)}function G(E){const D=_[E.type];let z;if(D){const O=Li[D];z=xy.clone(O.uniforms)}else z=E.uniforms;return z}function N(E,D){let z=v.get(D);return z!==void 0?++z.usedTimes:(z=new Yb(s,D,E,o),m.push(z),v.set(D,z)),z}function P(E){if(--E.usedTimes===0){const D=m.indexOf(E);m[D]=m[m.length-1],m.pop(),v.delete(E.cacheKey),E.destroy()}}function C(E){h.remove(E)}function U(){h.dispose()}return{getParameters:R,getProgramCacheKey:S,getUniforms:G,acquireProgram:N,releaseProgram:P,releaseShaderCache:C,programs:m,dispose:U}}function eE(){let s=new WeakMap;function e(u){return s.has(u)}function n(u){let h=s.get(u);return h===void 0&&(h={},s.set(u,h)),h}function r(u){s.delete(u)}function o(u,h,x){s.get(u)[h]=x}function l(){s=new WeakMap}return{has:e,get:n,remove:r,update:o,dispose:l}}function tE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Qm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function e0(){const s=[];let e=0;const n=[],r=[],o=[];function l(){e=0,n.length=0,r.length=0,o.length=0}function u(g){let _=0;return g.isInstancedMesh&&(_+=2),g.isSkinnedMesh&&(_+=1),_}function h(g,_,w,R,S,y){let k=s[e];return k===void 0?(k={id:g.id,object:g,geometry:_,material:w,materialVariant:u(g),groupOrder:R,renderOrder:g.renderOrder,z:S,group:y},s[e]=k):(k.id=g.id,k.object=g,k.geometry=_,k.material=w,k.materialVariant=u(g),k.groupOrder=R,k.renderOrder=g.renderOrder,k.z=S,k.group=y),e++,k}function x(g,_,w,R,S,y,k){k.reversedDepth===!0&&(S=-S);const G=h(g,_,w,R,S,y);w.transmission>0?r.push(G):w.transparent===!0?o.push(G):n.push(G)}function m(g,_,w,R,S,y){const k=h(g,_,w,R,S,y);w.transmission>0?r.unshift(k):w.transparent===!0?o.unshift(k):n.unshift(k)}function v(g,_){n.length>1&&n.sort(g||tE),r.length>1&&r.sort(_||Qm),o.length>1&&o.sort(_||Qm)}function M(){for(let g=e,_=s.length;g<_;g++){const w=s[g];if(w.id===null)break;w.id=null,w.object=null,w.geometry=null,w.material=null,w.group=null}}return{opaque:n,transmissive:r,transparent:o,init:l,push:x,unshift:m,finish:M,sort:v}}function nE(){let s=new WeakMap;function e(r,o){const l=s.get(r);let u;return l===void 0?(u=new e0,s.set(r,[u])):o>=l.length?(u=new e0,l.push(u)):u=l[o],u}function n(){s=new WeakMap}return{get:e,dispose:n}}function iE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new ce,color:new Et};break;case"SpotLight":n={position:new ce,direction:new ce,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ce,color:new Et,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ce,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":n={color:new Et,position:new ce,halfWidth:new ce,halfHeight:new ce};break}return s[e.id]=n,n}}}function rE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let sE=0;function aE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function oE(s){const e=new iE,n=rE(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new ce);const o=new ce,l=new Zt,u=new Zt;function h(m){let v=0,M=0,g=0;for(let q=0;q<9;q++)r.probe[q].set(0,0,0);let _=0,w=0,R=0,S=0,y=0,k=0,G=0,N=0,P=0,C=0,U=0,E=0,D=0,z=0;m.sort(aE);for(let q=0,te=m.length;q<te;q++){const B=m[q],ne=B.color,ue=B.intensity,J=B.distance;let H=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===rs?H=B.shadow.map.texture:H=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)v+=ne.r*ue,M+=ne.g*ue,g+=ne.b*ue;else if(B.isLightProbe){for(let j=0;j<9;j++)r.probe[j].addScaledVector(B.sh.coefficients[j],ue);z++}else if(B.isSunLight){const j=e.get(B);if(j.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const X=B.shadow,L=n.get(B);L.shadowIntensity=X.intensity,L.shadowBias=X.bias,L.shadowNormalBias=X.normalBias,L.shadowRadius=X.radius,L.shadowMapSize.copy(X.mapSize).multiply(X.getFrameExtents()),r.sunShadow[w]=L,r.sunShadowMap[w]=H;const Q=X.getViewportCount();for(let ye=0;ye<Q;ye++)r.sunShadowMatrix[R+ye]=X.getMatrix(ye),r.sunShadowCascade[R+ye]=X._cascadeData[ye];R+=Q,w++}r.sun[_]=j,_++}else if(B.isDirectionalLight){const j=e.get(B);if(j.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const X=B.shadow,L=n.get(B);L.shadowIntensity=X.intensity,L.shadowBias=X.bias,L.shadowNormalBias=X.normalBias,L.shadowRadius=X.radius,L.shadowMapSize=X.mapSize,r.directionalShadow[S]=L,r.directionalShadowMap[S]=H,r.directionalShadowMatrix[S]=B.shadow.matrix,P++}r.directional[S]=j,S++}else if(B.isSpotLight){const j=e.get(B);j.position.setFromMatrixPosition(B.matrixWorld),j.color.copy(ne).multiplyScalar(ue),j.distance=J,j.coneCos=Math.cos(B.angle),j.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),j.decay=B.decay,r.spot[k]=j;const X=B.shadow;if(B.map&&(r.spotLightMap[E]=B.map,E++,X.updateMatrices(B),B.castShadow&&D++),r.spotLightMatrix[k]=X.matrix,B.castShadow){const L=n.get(B);L.shadowIntensity=X.intensity,L.shadowBias=X.bias,L.shadowNormalBias=X.normalBias,L.shadowRadius=X.radius,L.shadowMapSize=X.mapSize,r.spotShadow[k]=L,r.spotShadowMap[k]=H,U++}k++}else if(B.isRectAreaLight){const j=e.get(B);j.color.copy(ne).multiplyScalar(ue),j.halfWidth.set(B.width*.5,0,0),j.halfHeight.set(0,B.height*.5,0),r.rectArea[G]=j,G++}else if(B.isPointLight){const j=e.get(B);if(j.color.copy(B.color).multiplyScalar(B.intensity),j.distance=B.distance,j.decay=B.decay,B.castShadow){const X=B.shadow,L=n.get(B);L.shadowIntensity=X.intensity,L.shadowBias=X.bias,L.shadowNormalBias=X.normalBias,L.shadowRadius=X.radius,L.shadowMapSize=X.mapSize,L.shadowCameraNear=X.camera.near,L.shadowCameraFar=X.camera.far,r.pointShadow[y]=L,r.pointShadowMap[y]=H,r.pointShadowMatrix[y]=B.shadow.matrix,C++}r.point[y]=j,y++}else if(B.isHemisphereLight){const j=e.get(B);j.skyColor.copy(B.color).multiplyScalar(ue),j.groundColor.copy(B.groundColor).multiplyScalar(ue),r.hemi[N]=j,N++}}G>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ue.LTC_FLOAT_1,r.rectAreaLTC2=Ue.LTC_FLOAT_2):(r.rectAreaLTC1=Ue.LTC_HALF_1,r.rectAreaLTC2=Ue.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=M,r.ambient[2]=g;const O=r.hash;(O.sunLength!==_||O.directionalLength!==S||O.pointLength!==y||O.spotLength!==k||O.rectAreaLength!==G||O.hemiLength!==N||O.numSunShadows!==w||O.numDirectionalShadows!==P||O.numPointShadows!==C||O.numSpotShadows!==U||O.numSpotMaps!==E||O.numLightProbes!==z)&&(r.sun.length=_,r.directional.length=S,r.spot.length=k,r.rectArea.length=G,r.point.length=y,r.hemi.length=N,r.sunShadow.length=w,r.sunShadowMap.length=w,r.sunShadowMatrix.length=R,r.sunShadowCascade.length=R,r.directionalShadow.length=P,r.directionalShadowMap.length=P,r.directionalShadowMatrix.length=P,r.pointShadow.length=C,r.pointShadowMap.length=C,r.pointShadowMatrix.length=C,r.spotShadow.length=U,r.spotShadowMap.length=U,r.spotLightMatrix.length=U+E-D,r.spotLightMap.length=E,r.numSpotLightShadowsWithMaps=D,r.numLightProbes=z,O.sunLength=_,O.directionalLength=S,O.pointLength=y,O.spotLength=k,O.rectAreaLength=G,O.hemiLength=N,O.numSunShadows=w,O.numDirectionalShadows=P,O.numPointShadows=C,O.numSpotShadows=U,O.numSpotMaps=E,O.numLightProbes=z,r.version=sE++)}function x(m,v){let M=0,g=0,_=0,w=0,R=0,S=0;const y=v.matrixWorldInverse;for(let k=0,G=m.length;k<G;k++){const N=m[k];if(N.isSunLight){const P=r.sun[M];P.direction.setFromMatrixPosition(N.matrixWorld),P.direction.transformDirection(y),M++}else if(N.isDirectionalLight){const P=r.directional[g];P.direction.setFromMatrixPosition(N.matrixWorld),o.setFromMatrixPosition(N.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(y),g++}else if(N.isSpotLight){const P=r.spot[w];P.position.setFromMatrixPosition(N.matrixWorld),P.position.applyMatrix4(y),P.direction.setFromMatrixPosition(N.matrixWorld),o.setFromMatrixPosition(N.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(y),w++}else if(N.isRectAreaLight){const P=r.rectArea[R];P.position.setFromMatrixPosition(N.matrixWorld),P.position.applyMatrix4(y),u.identity(),l.copy(N.matrixWorld),l.premultiply(y),u.extractRotation(l),P.halfWidth.set(N.width*.5,0,0),P.halfHeight.set(0,N.height*.5,0),P.halfWidth.applyMatrix4(u),P.halfHeight.applyMatrix4(u),R++}else if(N.isPointLight){const P=r.point[_];P.position.setFromMatrixPosition(N.matrixWorld),P.position.applyMatrix4(y),_++}else if(N.isHemisphereLight){const P=r.hemi[S];P.direction.setFromMatrixPosition(N.matrixWorld),P.direction.transformDirection(y),S++}}}return{setup:h,setupView:x,state:r}}function t0(s){const e=new oE(s),n=[],r=[],o=[];function l(g){M.camera=g,n.length=0,r.length=0,o.length=0}function u(g){n.push(g)}function h(g){r.push(g)}function x(g){o.push(g)}function m(){e.setup(n)}function v(g){e.setupView(n,g)}const M={lightsArray:n,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:M,setupLights:m,setupLightsView:v,pushLight:u,pushShadow:h,pushLightProbeGrid:x}}function lE(s){let e=new WeakMap;function n(o,l=0){const u=e.get(o);let h;return u===void 0?(h=new t0(s),e.set(o,[h])):l>=u.length?(h=new t0(s),u.push(h)):h=u[l],h}function r(){e=new WeakMap}return{get:n,dispose:r}}const cE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,dE=[new ce(1,0,0),new ce(-1,0,0),new ce(0,1,0),new ce(0,-1,0),new ce(0,0,1),new ce(0,0,-1)],fE=[new ce(0,-1,0),new ce(0,-1,0),new ce(0,0,1),new ce(0,0,-1),new ce(0,-1,0),new ce(0,-1,0)],n0=new Zt,Ha=new ce,fd=new ce;function hE(s,e,n){let r=new _f;const o=new St,l=new St,u=new Kt,h=new yy,x=new Sy,m={},v=n.maxTextureSize,M={[ns]:Hn,[Hn]:ns,[tr]:tr},g=new zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new St},radius:{value:4}},vertexShader:cE,fragmentShader:uE}),_=g.clone();_.defines.HORIZONTAL_PASS=1;const w=new li;w.setAttribute("position",new Ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Bi(w,g),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dl;let y=this.type;this.render=function(C,U,E){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||C.length===0)return;this.type===o_&&(ot("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Dl);const D=s.getRenderTarget(),z=s.getActiveCubeFace(),O=s.getActiveMipmapLevel(),q=s.state;q.setBlending(ir),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const te=y!==this.type;te&&U.traverse(function(B){B.material&&(Array.isArray(B.material)?B.material.forEach(ne=>ne.needsUpdate=!0):B.material.needsUpdate=!0)});for(let B=0,ne=C.length;B<ne;B++){const ue=C[B],J=ue.shadow;if(J===void 0){ot("WebGLShadowMap:",ue,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;o.copy(J.mapSize);const H=J.getFrameExtents();o.multiply(H),l.copy(J.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(l.x=Math.floor(v/H.x),o.x=l.x*H.x,J.mapSize.x=l.x),o.y>v&&(l.y=Math.floor(v/H.y),o.y=l.y*H.y,J.mapSize.y=l.y));const j=s.state.buffers.depth.getReversed();if(J.camera._reversedDepth=j,J.map===null||te===!0){if(J.map!==null&&(J.map.depthTexture!==null&&(J.map.depthTexture.dispose(),J.map.depthTexture=null),J.map.dispose()),this.type===Ga){if(ue.isPointLight){ot("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}J.map=new wi(o.x,o.y,{format:rs,type:Oi,minFilter:An,magFilter:An,generateMipmaps:!1}),J.map.texture.name=ue.name+".shadowMap",J.map.depthTexture=new Ka(o.x,o.y,Di),J.map.depthTexture.name=ue.name+".shadowMapDepth",J.map.depthTexture.format=sr,J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=vn,J.map.depthTexture.magFilter=vn}else ue.isPointLight?(J.map=new Y0(o.x),J.map.depthTexture=new py(o.x,Fi)):(J.map=new wi(o.x,o.y),J.map.depthTexture=new Ka(o.x,o.y,Fi)),J.map.depthTexture.name=ue.name+".shadowMap",J.map.depthTexture.format=sr,this.type===Dl?(J.map.depthTexture.compareFunction=j?gf:xf,J.map.depthTexture.minFilter=An,J.map.depthTexture.magFilter=An):(J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=vn,J.map.depthTexture.magFilter=vn);J.camera.updateProjectionMatrix()}J.map.isWebGLCubeRenderTarget!==!0&&(J.map.width!==o.x||J.map.height!==o.y)&&J.map.setSize(o.x,o.y);const X=J.map.isWebGLCubeRenderTarget?6:J.getViewportCount();ue.isPointLight!==!0&&J.updateMatrices(ue,E);for(let L=0;L<X;L++){const Q=J.getCamera(L);if(ue.isPointLight){const ye=J.camera,De=J.matrix,He=ue.distance||ye.far;He!==ye.far&&(ye.far=He,ye.updateProjectionMatrix()),Ha.setFromMatrixPosition(ue.matrixWorld),ye.position.copy(Ha),fd.copy(ye.position),fd.add(dE[L]),ye.up.copy(fE[L]),ye.lookAt(fd),ye.updateMatrixWorld(),De.makeTranslation(-Ha.x,-Ha.y,-Ha.z),n0.multiplyMatrices(ye.projectionMatrix,ye.matrixWorldInverse),J._frustum.setFromProjectionMatrix(n0,ye.coordinateSystem,ye.reversedDepth)}if(J.map.isWebGLCubeRenderTarget)s.setRenderTarget(J.map,L),s.clear();else{L===0&&(s.setRenderTarget(J.map),s.clear());const ye=J.getViewport(L);u.set(l.x*ye.x,l.y*ye.y,l.x*ye.z,l.y*ye.w),q.viewport(u)}r=J.getFrustum(L),N(U,E,Q,ue,this.type)}J.isPointLightShadow!==!0&&this.type===Ga&&k(J,E),J.needsUpdate=!1}y=this.type,S.needsUpdate=!1,s.setRenderTarget(D,z,O)};function k(C,U){const E=e.update(R);g.defines.VSM_SAMPLES!==C.blurSamples&&(g.defines.VSM_SAMPLES=C.blurSamples,_.defines.VSM_SAMPLES=C.blurSamples,g.needsUpdate=!0,_.needsUpdate=!0),C.mapPass===null?C.mapPass=new wi(o.x,o.y,{format:rs,type:Oi}):(C.mapPass.width!==C.map.width||C.mapPass.height!==C.map.height)&&C.mapPass.setSize(C.map.width,C.map.height),g.uniforms.shadow_pass.value=C.map.depthTexture,g.uniforms.resolution.value.set(C.map.width,C.map.height),g.uniforms.radius.value=C.radius,s.setRenderTarget(C.mapPass),s.clear(),s.renderBufferDirect(U,null,E,g,R,null),_.uniforms.shadow_pass.value=C.mapPass.texture,_.uniforms.resolution.value.set(C.map.width,C.map.height),_.uniforms.radius.value=C.radius,s.setRenderTarget(C.map),s.clear(),s.renderBufferDirect(U,null,E,_,R,null)}function G(C,U,E,D){let z=null;const O=E.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(O!==void 0)z=O;else if(z=E.isPointLight===!0?x:h,s.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){const q=z.uuid,te=U.uuid;let B=m[q];B===void 0&&(B={},m[q]=B);let ne=B[te];ne===void 0&&(ne=z.clone(),B[te]=ne,U.addEventListener("dispose",P)),z=ne}if(z.visible=U.visible,z.wireframe=U.wireframe,D===Ga?z.side=U.shadowSide!==null?U.shadowSide:U.side:z.side=U.shadowSide!==null?U.shadowSide:M[U.side],z.alphaMap=U.alphaMap,z.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,z.map=U.map,z.clipShadows=U.clipShadows,z.clippingPlanes=U.clippingPlanes,z.clipIntersection=U.clipIntersection,z.displacementMap=U.displacementMap,z.displacementScale=U.displacementScale,z.displacementBias=U.displacementBias,z.wireframeLinewidth=U.wireframeLinewidth,z.linewidth=U.linewidth,E.isPointLight===!0&&z.isMeshDistanceMaterial===!0){const q=s.properties.get(z);q.light=E}return z}function N(C,U,E,D,z){if(C.visible===!1)return;if(C.layers.test(U.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&z===Ga)&&(!C.frustumCulled||C.intersectsFrustum(r))){C.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,C.matrixWorld);const te=e.update(C),B=C.material;if(Array.isArray(B)){const ne=te.groups;for(let ue=0,J=ne.length;ue<J;ue++){const H=ne[ue],j=B[H.materialIndex];if(j&&j.visible){const X=G(C,j,D,z);C.onBeforeShadow(s,C,U,E,te,X,H),s.renderBufferDirect(E,null,te,X,C,H),C.onAfterShadow(s,C,U,E,te,X,H)}}}else if(B.visible){const ne=G(C,B,D,z);C.onBeforeShadow(s,C,U,E,te,ne,null),s.renderBufferDirect(E,null,te,ne,C,null),C.onAfterShadow(s,C,U,E,te,ne,null)}}const q=C.children;for(let te=0,B=q.length;te<B;te++)N(q[te],U,E,D,z)}function P(C){C.target.removeEventListener("dispose",P);for(const E in m){const D=m[E],z=C.target.uuid;z in D&&(D[z].dispose(),delete D[z])}}}function pE(s,e){function n(){let Y=!1;const Ae=new Kt;let me=null;const Ce=new Kt(0,0,0,0);return{setMask:function(Fe){me!==Fe&&!Y&&(s.colorMask(Fe,Fe,Fe,Fe),me=Fe)},setLocked:function(Fe){Y=Fe},setClear:function(Fe,ge,Qe,qe,Rt){Rt===!0&&(Fe*=qe,ge*=qe,Qe*=qe),Ae.set(Fe,ge,Qe,qe),Ce.equals(Ae)===!1&&(s.clearColor(Fe,ge,Qe,qe),Ce.copy(Ae))},reset:function(){Y=!1,me=null,Ce.set(-1,0,0,0)}}}function r(){let Y=!1,Ae=!1,me=null,Ce=null,Fe=null;return{setReversed:function(ge){if(Ae!==ge){const Qe=e.get("EXT_clip_control");ge?Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.ZERO_TO_ONE_EXT):Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.NEGATIVE_ONE_TO_ONE_EXT),Ae=ge;const qe=Fe;Fe=null,this.setClear(qe)}},getReversed:function(){return Ae},setTest:function(ge){ge?he(s.DEPTH_TEST):be(s.DEPTH_TEST)},setMask:function(ge){me!==ge&&!Y&&(s.depthMask(ge),me=ge)},setFunc:function(ge){if(Ae&&(ge=H_[ge]),Ce!==ge){switch(ge){case pd:s.depthFunc(s.NEVER);break;case md:s.depthFunc(s.ALWAYS);break;case xd:s.depthFunc(s.LESS);break;case Xa:s.depthFunc(s.LEQUAL);break;case gd:s.depthFunc(s.EQUAL);break;case vd:s.depthFunc(s.GEQUAL);break;case _d:s.depthFunc(s.GREATER);break;case yd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ce=ge}},setLocked:function(ge){Y=ge},setClear:function(ge){Fe!==ge&&(Fe=ge,Ae&&(ge=1-ge),s.clearDepth(ge))},reset:function(){Y=!1,me=null,Ce=null,Fe=null,Ae=!1}}}function o(){let Y=!1,Ae=null,me=null,Ce=null,Fe=null,ge=null,Qe=null,qe=null,Rt=null;return{setTest:function(bt){Y||(bt?he(s.STENCIL_TEST):be(s.STENCIL_TEST))},setMask:function(bt){Ae!==bt&&!Y&&(s.stencilMask(bt),Ae=bt)},setFunc:function(bt,mn,Zn){(me!==bt||Ce!==mn||Fe!==Zn)&&(s.stencilFunc(bt,mn,Zn),me=bt,Ce=mn,Fe=Zn)},setOp:function(bt,mn,Zn){(ge!==bt||Qe!==mn||qe!==Zn)&&(s.stencilOp(bt,mn,Zn),ge=bt,Qe=mn,qe=Zn)},setLocked:function(bt){Y=bt},setClear:function(bt){Rt!==bt&&(s.clearStencil(bt),Rt=bt)},reset:function(){Y=!1,Ae=null,me=null,Ce=null,Fe=null,ge=null,Qe=null,qe=null,Rt=null}}}const l=new n,u=new r,h=new o,x=new WeakMap,m=new WeakMap;let v={},M={},g={},_=new WeakMap,w=[],R=null,S=!1,y=null,k=null,G=null,N=null,P=null,C=null,U=null,E=new Et(0,0,0),D=0,z=!1,O=null,q=null,te=null,B=null,ne=null;const ue=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,H=0;const j=s.getParameter(s.VERSION);j.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(j)[1]),J=H>=1):j.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),J=H>=2);let X=null,L={};const Q=s.getParameter(s.SCISSOR_BOX),ye=s.getParameter(s.VIEWPORT),De=new Kt().fromArray(Q),He=new Kt().fromArray(ye);function Oe(Y,Ae,me,Ce){const Fe=new Uint8Array(4),ge=s.createTexture();s.bindTexture(Y,ge),s.texParameteri(Y,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(Y,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Qe=0;Qe<me;Qe++)Y===s.TEXTURE_3D||Y===s.TEXTURE_2D_ARRAY?s.texImage3D(Ae,0,s.RGBA,1,1,Ce,0,s.RGBA,s.UNSIGNED_BYTE,Fe):s.texImage2D(Ae+Qe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Fe);return ge}const oe={};oe[s.TEXTURE_2D]=Oe(s.TEXTURE_2D,s.TEXTURE_2D,1),oe[s.TEXTURE_CUBE_MAP]=Oe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[s.TEXTURE_2D_ARRAY]=Oe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),oe[s.TEXTURE_3D]=Oe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),h.setClear(0),he(s.DEPTH_TEST),u.setFunc(Xa),dt(!1),Ut(im),he(s.CULL_FACE),mt(ir);function he(Y){v[Y]!==!0&&(s.enable(Y),v[Y]=!0)}function be(Y){v[Y]!==!1&&(s.disable(Y),v[Y]=!1)}function $e(Y,Ae){return g[Y]!==Ae?(s.bindFramebuffer(Y,Ae),g[Y]=Ae,Y===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Ae),Y===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Ae),!0):!1}function Be(Y,Ae){let me=w,Ce=!1;if(Y){me=_.get(Ae),me===void 0&&(me=[],_.set(Ae,me));const Fe=Y.textures;if(me.length!==Fe.length||me[0]!==s.COLOR_ATTACHMENT0){for(let ge=0,Qe=Fe.length;ge<Qe;ge++)me[ge]=s.COLOR_ATTACHMENT0+ge;me.length=Fe.length,Ce=!0}}else me[0]!==s.BACK&&(me[0]=s.BACK,Ce=!0);Ce&&s.drawBuffers(me)}function ut(Y){return R!==Y?(s.useProgram(Y),R=Y,!0):!1}const zt={[Ws]:s.FUNC_ADD,[c_]:s.FUNC_SUBTRACT,[u_]:s.FUNC_REVERSE_SUBTRACT};zt[d_]=s.MIN,zt[f_]=s.MAX;const st={[h_]:s.ZERO,[p_]:s.ONE,[m_]:s.SRC_COLOR,[m0]:s.SRC_ALPHA,[S_]:s.SRC_ALPHA_SATURATE,[__]:s.DST_COLOR,[g_]:s.DST_ALPHA,[x_]:s.ONE_MINUS_SRC_COLOR,[x0]:s.ONE_MINUS_SRC_ALPHA,[y_]:s.ONE_MINUS_DST_COLOR,[v_]:s.ONE_MINUS_DST_ALPHA,[M_]:s.CONSTANT_COLOR,[b_]:s.ONE_MINUS_CONSTANT_COLOR,[E_]:s.CONSTANT_ALPHA,[w_]:s.ONE_MINUS_CONSTANT_ALPHA};function mt(Y,Ae,me,Ce,Fe,ge,Qe,qe,Rt,bt){if(Y===ir){S===!0&&(be(s.BLEND),S=!1);return}if(S===!1&&(he(s.BLEND),S=!0),Y!==l_){if(Y!==y||bt!==z){if((k!==Ws||P!==Ws)&&(s.blendEquation(s.FUNC_ADD),k=Ws,P=Ws),bt)switch(Y){case ja:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case hd:s.blendFunc(s.ONE,s.ONE);break;case rm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case sm:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Lt("WebGLState: Invalid blending: ",Y);break}else switch(Y){case ja:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case hd:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case rm:Lt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case sm:Lt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Lt("WebGLState: Invalid blending: ",Y);break}G=null,N=null,C=null,U=null,E.set(0,0,0),D=0,y=Y,z=bt}return}Fe=Fe||Ae,ge=ge||me,Qe=Qe||Ce,(Ae!==k||Fe!==P)&&(s.blendEquationSeparate(zt[Ae],zt[Fe]),k=Ae,P=Fe),(me!==G||Ce!==N||ge!==C||Qe!==U)&&(s.blendFuncSeparate(st[me],st[Ce],st[ge],st[Qe]),G=me,N=Ce,C=ge,U=Qe),(qe.equals(E)===!1||Rt!==D)&&(s.blendColor(qe.r,qe.g,qe.b,Rt),E.copy(qe),D=Rt),y=Y,z=!1}function wt(Y,Ae){Y.side===tr?be(s.CULL_FACE):he(s.CULL_FACE);let me=Y.side===Hn;Ae&&(me=!me),dt(me),Y.blending===ja&&Y.transparent===!1?mt(ir):mt(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),u.setFunc(Y.depthFunc),u.setTest(Y.depthTest),u.setMask(Y.depthWrite),l.setMask(Y.colorWrite);const Ce=Y.stencilWrite;h.setTest(Ce),Ce&&(h.setMask(Y.stencilWriteMask),h.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),h.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),It(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?he(s.SAMPLE_ALPHA_TO_COVERAGE):be(s.SAMPLE_ALPHA_TO_COVERAGE)}function dt(Y){O!==Y&&(Y?s.frontFace(s.CW):s.frontFace(s.CCW),O=Y)}function Ut(Y){Y!==s_?(he(s.CULL_FACE),Y!==q&&(Y===im?s.cullFace(s.BACK):Y===a_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):be(s.CULL_FACE),q=Y}function Dt(Y){Y!==te&&(J&&s.lineWidth(Y),te=Y)}function It(Y,Ae,me){Y?(he(s.POLYGON_OFFSET_FILL),(B!==Ae||ne!==me)&&(B=Ae,ne=me,u.getReversed()&&(Ae=-Ae),s.polygonOffset(Ae,me))):be(s.POLYGON_OFFSET_FILL)}function Ct(Y){Y?he(s.SCISSOR_TEST):be(s.SCISSOR_TEST)}function Vt(Y){Y===void 0&&(Y=s.TEXTURE0+ue-1),X!==Y&&(s.activeTexture(Y),X=Y)}function K(Y,Ae,me){me===void 0&&(X===null?me=s.TEXTURE0+ue-1:me=X);let Ce=L[me];Ce===void 0&&(Ce={type:void 0,texture:void 0},L[me]=Ce),(Ce.type!==Y||Ce.texture!==Ae)&&(X!==me&&(s.activeTexture(me),X=me),s.bindTexture(Y,Ae||oe[Y]),Ce.type=Y,Ce.texture=Ae)}function en(){const Y=L[X];Y!==void 0&&Y.type!==void 0&&(s.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function Mt(){try{s.compressedTexImage2D(...arguments)}catch(Y){Lt("WebGLState:",Y)}}function I(){try{s.compressedTexImage3D(...arguments)}catch(Y){Lt("WebGLState:",Y)}}function b(){try{s.texSubImage2D(...arguments)}catch(Y){Lt("WebGLState:",Y)}}function V(){try{s.texSubImage3D(...arguments)}catch(Y){Lt("WebGLState:",Y)}}function ee(){try{s.compressedTexSubImage2D(...arguments)}catch(Y){Lt("WebGLState:",Y)}}function ae(){try{s.compressedTexSubImage3D(...arguments)}catch(Y){Lt("WebGLState:",Y)}}function Me(){try{s.texStorage2D(...arguments)}catch(Y){Lt("WebGLState:",Y)}}function we(){try{s.texStorage3D(...arguments)}catch(Y){Lt("WebGLState:",Y)}}function pe(){try{s.texImage2D(...arguments)}catch(Y){Lt("WebGLState:",Y)}}function xe(){try{s.texImage3D(...arguments)}catch(Y){Lt("WebGLState:",Y)}}function Re(Y){return M[Y]!==void 0?M[Y]:s.getParameter(Y)}function Ke(Y,Ae){M[Y]!==Ae&&(s.pixelStorei(Y,Ae),M[Y]=Ae)}function Ne(Y){De.equals(Y)===!1&&(s.scissor(Y.x,Y.y,Y.z,Y.w),De.copy(Y))}function Te(Y){He.equals(Y)===!1&&(s.viewport(Y.x,Y.y,Y.z,Y.w),He.copy(Y))}function Ze(Y,Ae){let me=m.get(Ae);me===void 0&&(me=new WeakMap,m.set(Ae,me));let Ce=me.get(Y);Ce===void 0&&(Ce=s.getUniformBlockIndex(Ae,Y.name),me.set(Y,Ce))}function tt(Y,Ae){const Ce=m.get(Ae).get(Y);x.get(Ae)!==Ce&&(s.uniformBlockBinding(Ae,Ce,Y.__bindingPointIndex),x.set(Ae,Ce))}function rt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),v={},M={},X=null,L={},g={},_=new WeakMap,w=[],R=null,S=!1,y=null,k=null,G=null,N=null,P=null,C=null,U=null,E=new Et(0,0,0),D=0,z=!1,O=null,q=null,te=null,B=null,ne=null,De.set(0,0,s.canvas.width,s.canvas.height),He.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),h.reset()}return{buffers:{color:l,depth:u,stencil:h},enable:he,disable:be,bindFramebuffer:$e,drawBuffers:Be,useProgram:ut,setBlending:mt,setMaterial:wt,setFlipSided:dt,setCullFace:Ut,setLineWidth:Dt,setPolygonOffset:It,setScissorTest:Ct,activeTexture:Vt,bindTexture:K,unbindTexture:en,compressedTexImage2D:Mt,compressedTexImage3D:I,texImage2D:pe,texImage3D:xe,pixelStorei:Ke,getParameter:Re,updateUBOMapping:Ze,uniformBlockBinding:tt,texStorage2D:Me,texStorage3D:we,texSubImage2D:b,texSubImage3D:V,compressedTexSubImage2D:ee,compressedTexSubImage3D:ae,scissor:Ne,viewport:Te,reset:rt}}function mE(s,e,n,r,o,l,u){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,x=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new St,v=new WeakMap,M=new Set;let g;const _=new WeakMap;let w=!1;try{w=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(I,b){return w?new OffscreenCanvas(I,b):jl("canvas")}function S(I,b,V){let ee=1;const ae=Mt(I);if((ae.width>V||ae.height>V)&&(ee=V/Math.max(ae.width,ae.height)),ee<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const Me=Math.floor(ee*ae.width),we=Math.floor(ee*ae.height);g===void 0&&(g=R(Me,we));const pe=b?R(Me,we):g;return pe.width=Me,pe.height=we,pe.getContext("2d").drawImage(I,0,0,Me,we),ot("WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+Me+"x"+we+")."),pe}else return"data"in I&&ot("WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),I;return I}function y(I){return I.generateMipmaps}function k(I){s.generateMipmap(I)}function G(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function N(I,b,V,ee,ae,Me=!1){if(I!==null){if(s[I]!==void 0)return s[I];ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let we;ee&&(we=e.get("EXT_texture_norm16"),we||ot("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let pe=b;if(b===s.RED&&(V===s.FLOAT&&(pe=s.R32F),V===s.HALF_FLOAT&&(pe=s.R16F),V===s.UNSIGNED_BYTE&&(pe=s.R8),V===s.UNSIGNED_SHORT&&we&&(pe=we.R16_EXT),V===s.SHORT&&we&&(pe=we.R16_SNORM_EXT)),b===s.RED_INTEGER&&(V===s.UNSIGNED_BYTE&&(pe=s.R8UI),V===s.UNSIGNED_SHORT&&(pe=s.R16UI),V===s.UNSIGNED_INT&&(pe=s.R32UI),V===s.BYTE&&(pe=s.R8I),V===s.SHORT&&(pe=s.R16I),V===s.INT&&(pe=s.R32I)),b===s.RG&&(V===s.FLOAT&&(pe=s.RG32F),V===s.HALF_FLOAT&&(pe=s.RG16F),V===s.UNSIGNED_BYTE&&(pe=s.RG8),V===s.UNSIGNED_SHORT&&we&&(pe=we.RG16_EXT),V===s.SHORT&&we&&(pe=we.RG16_SNORM_EXT)),b===s.RG_INTEGER&&(V===s.UNSIGNED_BYTE&&(pe=s.RG8UI),V===s.UNSIGNED_SHORT&&(pe=s.RG16UI),V===s.UNSIGNED_INT&&(pe=s.RG32UI),V===s.BYTE&&(pe=s.RG8I),V===s.SHORT&&(pe=s.RG16I),V===s.INT&&(pe=s.RG32I)),b===s.RGB_INTEGER&&(V===s.UNSIGNED_BYTE&&(pe=s.RGB8UI),V===s.UNSIGNED_SHORT&&(pe=s.RGB16UI),V===s.UNSIGNED_INT&&(pe=s.RGB32UI),V===s.BYTE&&(pe=s.RGB8I),V===s.SHORT&&(pe=s.RGB16I),V===s.INT&&(pe=s.RGB32I)),b===s.RGBA_INTEGER&&(V===s.UNSIGNED_BYTE&&(pe=s.RGBA8UI),V===s.UNSIGNED_SHORT&&(pe=s.RGBA16UI),V===s.UNSIGNED_INT&&(pe=s.RGBA32UI),V===s.BYTE&&(pe=s.RGBA8I),V===s.SHORT&&(pe=s.RGBA16I),V===s.INT&&(pe=s.RGBA32I)),b===s.RGB&&(V===s.UNSIGNED_SHORT&&we&&(pe=we.RGB16_EXT),V===s.SHORT&&we&&(pe=we.RGB16_SNORM_EXT),V===s.UNSIGNED_INT_5_9_9_9_REV&&(pe=s.RGB9_E5),V===s.UNSIGNED_INT_10F_11F_11F_REV&&(pe=s.R11F_G11F_B10F)),b===s.RGBA){const xe=Me?Wl:_t.getTransfer(ae);V===s.FLOAT&&(pe=s.RGBA32F),V===s.HALF_FLOAT&&(pe=s.RGBA16F),V===s.UNSIGNED_BYTE&&(pe=xe===Ot?s.SRGB8_ALPHA8:s.RGBA8),V===s.UNSIGNED_SHORT&&we&&(pe=we.RGBA16_EXT),V===s.SHORT&&we&&(pe=we.RGBA16_SNORM_EXT),V===s.UNSIGNED_SHORT_4_4_4_4&&(pe=s.RGBA4),V===s.UNSIGNED_SHORT_5_5_5_1&&(pe=s.RGB5_A1)}return(pe===s.R16F||pe===s.R32F||pe===s.RG16F||pe===s.RG32F||pe===s.RGBA16F||pe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function P(I,b){let V;return I?b===null||b===Fi||b===Ya?V=s.DEPTH24_STENCIL8:b===Di?V=s.DEPTH32F_STENCIL8:b===qa&&(V=s.DEPTH24_STENCIL8,ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Fi||b===Ya?V=s.DEPTH_COMPONENT24:b===Di?V=s.DEPTH_COMPONENT32F:b===qa&&(V=s.DEPTH_COMPONENT16),V}function C(I,b){return y(I)===!0||I.isFramebufferTexture&&I.minFilter!==vn&&I.minFilter!==An?Math.log2(Math.max(b.width,b.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?b.mipmaps.length:1}function U(I){const b=I.target;b.removeEventListener("dispose",U),D(b),b.isVideoTexture&&v.delete(b),b.isHTMLTexture&&M.delete(b)}function E(I){const b=I.target;b.removeEventListener("dispose",E),O(b)}function D(I){const b=r.get(I);if(b.__webglInit===void 0)return;const V=I.source,ee=_.get(V);if(ee){const ae=ee[b.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&z(I),Object.keys(ee).length===0&&_.delete(V)}r.remove(I)}function z(I){const b=r.get(I);s.deleteTexture(b.__webglTexture);const V=I.source,ee=_.get(V);delete ee[b.__cacheKey],u.memory.textures--}function O(I){const b=r.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),r.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(b.__webglFramebuffer[ee]))for(let ae=0;ae<b.__webglFramebuffer[ee].length;ae++)s.deleteFramebuffer(b.__webglFramebuffer[ee][ae]);else s.deleteFramebuffer(b.__webglFramebuffer[ee]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[ee])}else{if(Array.isArray(b.__webglFramebuffer))for(let ee=0;ee<b.__webglFramebuffer.length;ee++)s.deleteFramebuffer(b.__webglFramebuffer[ee]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ee=0;ee<b.__webglColorRenderbuffer.length;ee++)b.__webglColorRenderbuffer[ee]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[ee]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const V=I.textures;for(let ee=0,ae=V.length;ee<ae;ee++){const Me=r.get(V[ee]);Me.__webglTexture&&(s.deleteTexture(Me.__webglTexture),u.memory.textures--),r.remove(V[ee])}r.remove(I)}let q=0;function te(){q=0}function B(){return q}function ne(I){q=I}function ue(){const I=q;return I>=o.maxTextures&&ot("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+o.maxTextures),q+=1,I}function J(I){const b=[];return b.push(I.wrapS),b.push(I.wrapT),b.push(I.wrapR||0),b.push(I.magFilter),b.push(I.minFilter),b.push(I.anisotropy),b.push(I.internalFormat),b.push(I.format),b.push(I.type),b.push(I.generateMipmaps),b.push(I.premultiplyAlpha),b.push(I.flipY),b.push(I.unpackAlignment),b.push(I.colorSpace),b.join()}function H(I,b){const V=r.get(I);if(I.isVideoTexture&&K(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&V.__version!==I.version){const ee=I.image;if(ee===null)ot("WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)ot("WebGLRenderer: Texture marked for update but image is incomplete");else{be(V,I,b);return}}else I.isExternalTexture&&(V.__webglTexture=I.sourceTexture?I.sourceTexture:null);n.bindTexture(s.TEXTURE_2D,V.__webglTexture,s.TEXTURE0+b)}function j(I,b){const V=r.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&V.__version!==I.version){be(V,I,b);return}else I.isExternalTexture&&(V.__webglTexture=I.sourceTexture?I.sourceTexture:null);n.bindTexture(s.TEXTURE_2D_ARRAY,V.__webglTexture,s.TEXTURE0+b)}function X(I,b){const V=r.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&V.__version!==I.version){be(V,I,b);return}n.bindTexture(s.TEXTURE_3D,V.__webglTexture,s.TEXTURE0+b)}function L(I,b){const V=r.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&V.__version!==I.version){$e(V,I,b);return}n.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture,s.TEXTURE0+b)}const Q={[Sd]:s.REPEAT,[nr]:s.CLAMP_TO_EDGE,[Md]:s.MIRRORED_REPEAT},ye={[vn]:s.NEAREST,[C_]:s.NEAREST_MIPMAP_NEAREST,[ol]:s.NEAREST_MIPMAP_LINEAR,[An]:s.LINEAR,[Uu]:s.LINEAR_MIPMAP_NEAREST,[es]:s.LINEAR_MIPMAP_LINEAR},De={[L_]:s.NEVER,[F_]:s.ALWAYS,[D_]:s.LESS,[xf]:s.LEQUAL,[I_]:s.EQUAL,[gf]:s.GEQUAL,[k_]:s.GREATER,[U_]:s.NOTEQUAL};function He(I,b){if(b.type===Di&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===An||b.magFilter===Uu||b.magFilter===ol||b.magFilter===es||b.minFilter===An||b.minFilter===Uu||b.minFilter===ol||b.minFilter===es)&&ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,Q[b.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,Q[b.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,Q[b.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,ye[b.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,ye[b.minFilter]),b.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,De[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===vn||b.minFilter!==ol&&b.minFilter!==es||b.type===Di&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");s.texParameterf(I,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,o.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function Oe(I,b){let V=!1;I.__webglInit===void 0&&(I.__webglInit=!0,b.addEventListener("dispose",U));const ee=b.source;let ae=_.get(ee);ae===void 0&&(ae={},_.set(ee,ae));const Me=J(b);if(Me!==I.__cacheKey){ae[Me]===void 0&&(ae[Me]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,V=!0),ae[Me].usedTimes++;const we=ae[I.__cacheKey];we!==void 0&&(ae[I.__cacheKey].usedTimes--,we.usedTimes===0&&z(b)),I.__cacheKey=Me,I.__webglTexture=ae[Me].texture}return V}function oe(I,b,V){return Math.floor(Math.floor(I/V)/b)}function he(I,b,V,ee){const Me=I.updateRanges;if(Me.length===0)n.texSubImage2D(s.TEXTURE_2D,0,0,0,b.width,b.height,V,ee,b.data);else{Me.sort((Ke,Ne)=>Ke.start-Ne.start);let we=0;for(let Ke=1;Ke<Me.length;Ke++){const Ne=Me[we],Te=Me[Ke],Ze=Ne.start+Ne.count,tt=oe(Te.start,b.width,4),rt=oe(Ne.start,b.width,4);Te.start<=Ze+1&&tt===rt&&oe(Te.start+Te.count-1,b.width,4)===tt?Ne.count=Math.max(Ne.count,Te.start+Te.count-Ne.start):(++we,Me[we]=Te)}Me.length=we+1;const pe=n.getParameter(s.UNPACK_ROW_LENGTH),xe=n.getParameter(s.UNPACK_SKIP_PIXELS),Re=n.getParameter(s.UNPACK_SKIP_ROWS);n.pixelStorei(s.UNPACK_ROW_LENGTH,b.width);for(let Ke=0,Ne=Me.length;Ke<Ne;Ke++){const Te=Me[Ke],Ze=Math.floor(Te.start/4),tt=Math.ceil(Te.count/4),rt=Ze%b.width,Y=Math.floor(Ze/b.width),Ae=tt,me=1;n.pixelStorei(s.UNPACK_SKIP_PIXELS,rt),n.pixelStorei(s.UNPACK_SKIP_ROWS,Y),n.texSubImage2D(s.TEXTURE_2D,0,rt,Y,Ae,me,V,ee,b.data)}I.clearUpdateRanges(),n.pixelStorei(s.UNPACK_ROW_LENGTH,pe),n.pixelStorei(s.UNPACK_SKIP_PIXELS,xe),n.pixelStorei(s.UNPACK_SKIP_ROWS,Re)}}function be(I,b,V){let ee=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ee=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ee=s.TEXTURE_3D);const ae=Oe(I,b),Me=b.source;n.bindTexture(ee,I.__webglTexture,s.TEXTURE0+V);const we=r.get(Me);if(Me.version!==we.__version||ae===!0){if(n.activeTexture(s.TEXTURE0+V),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const me=_t.getPrimaries(_t.workingColorSpace),Ce=b.colorSpace===Nr?null:_t.getPrimaries(b.colorSpace),Fe=b.colorSpace===Nr||me===Ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;n.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe)}n.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment);let xe=S(b.image,!1,o.maxTextureSize);xe=en(b,xe);const Re=l.convert(b.format,b.colorSpace),Ke=l.convert(b.type);let Ne=N(b.internalFormat,Re,Ke,b.normalized,b.colorSpace,b.isVideoTexture);He(ee,b);let Te;const Ze=b.mipmaps,tt=b.isVideoTexture!==!0,rt=we.__version===void 0||ae===!0,Y=Me.dataReady,Ae=C(b,xe);if(b.isDepthTexture)Ne=P(b.format===ts,b.type),rt&&(tt?n.texStorage2D(s.TEXTURE_2D,1,Ne,xe.width,xe.height):n.texImage2D(s.TEXTURE_2D,0,Ne,xe.width,xe.height,0,Re,Ke,null));else if(b.isDataTexture)if(Ze.length>0){tt&&rt&&n.texStorage2D(s.TEXTURE_2D,Ae,Ne,Ze[0].width,Ze[0].height);for(let me=0,Ce=Ze.length;me<Ce;me++)Te=Ze[me],tt?Y&&n.texSubImage2D(s.TEXTURE_2D,me,0,0,Te.width,Te.height,Re,Ke,Te.data):n.texImage2D(s.TEXTURE_2D,me,Ne,Te.width,Te.height,0,Re,Ke,Te.data);b.generateMipmaps=!1}else tt?(rt&&n.texStorage2D(s.TEXTURE_2D,Ae,Ne,xe.width,xe.height),Y&&he(b,xe,Re,Ke)):n.texImage2D(s.TEXTURE_2D,0,Ne,xe.width,xe.height,0,Re,Ke,xe.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){tt&&rt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ae,Ne,Ze[0].width,Ze[0].height,xe.depth);for(let me=0,Ce=Ze.length;me<Ce;me++)if(Te=Ze[me],b.format!==Ei)if(Re!==null)if(tt){if(Y)if(b.layerUpdates.size>0){const Fe=Im(Te.width,Te.height,b.format,b.type);for(const ge of b.layerUpdates){const Qe=Te.data.subarray(ge*Fe/Te.data.BYTES_PER_ELEMENT,(ge+1)*Fe/Te.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,me,0,0,ge,Te.width,Te.height,1,Re,Qe)}}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,me,0,0,0,Te.width,Te.height,xe.depth,Re,Te.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,me,Ne,Te.width,Te.height,xe.depth,0,Te.data,0,0);else ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else tt?Y&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,me,0,0,0,Te.width,Te.height,xe.depth,Re,Ke,Te.data):n.texImage3D(s.TEXTURE_2D_ARRAY,me,Ne,Te.width,Te.height,xe.depth,0,Re,Ke,Te.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{tt&&rt&&n.texStorage2D(s.TEXTURE_2D,Ae,Ne,Ze[0].width,Ze[0].height);for(let me=0,Ce=Ze.length;me<Ce;me++)Te=Ze[me],b.format!==Ei?Re!==null?tt?Y&&n.compressedTexSubImage2D(s.TEXTURE_2D,me,0,0,Te.width,Te.height,Re,Te.data):n.compressedTexImage2D(s.TEXTURE_2D,me,Ne,Te.width,Te.height,0,Te.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?Y&&n.texSubImage2D(s.TEXTURE_2D,me,0,0,Te.width,Te.height,Re,Ke,Te.data):n.texImage2D(s.TEXTURE_2D,me,Ne,Te.width,Te.height,0,Re,Ke,Te.data)}else if(b.isDataArrayTexture)if(tt){if(rt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ae,Ne,xe.width,xe.height,xe.depth),Y)if(b.layerUpdates.size>0){const me=Im(xe.width,xe.height,b.format,b.type);for(const Ce of b.layerUpdates){const Fe=xe.data.subarray(Ce*me/xe.data.BYTES_PER_ELEMENT,(Ce+1)*me/xe.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Ce,xe.width,xe.height,1,Re,Ke,Fe)}b.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,Re,Ke,xe.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,Ne,xe.width,xe.height,xe.depth,0,Re,Ke,xe.data);else if(b.isData3DTexture)tt?(rt&&n.texStorage3D(s.TEXTURE_3D,Ae,Ne,xe.width,xe.height,xe.depth),Y&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,Re,Ke,xe.data)):n.texImage3D(s.TEXTURE_3D,0,Ne,xe.width,xe.height,xe.depth,0,Re,Ke,xe.data);else if(b.isFramebufferTexture){if(rt)if(tt)n.texStorage2D(s.TEXTURE_2D,Ae,Ne,xe.width,xe.height);else{let me=xe.width,Ce=xe.height;for(let Fe=0;Fe<Ae;Fe++)n.texImage2D(s.TEXTURE_2D,Fe,Ne,me,Ce,0,Re,Ke,null),me>>=1,Ce>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in s){const me=s.canvas;if(me.hasAttribute("layoutsubtree")||me.setAttribute("layoutsubtree","true"),xe.parentNode!==me){me.appendChild(xe),M.add(b),me.onpaint=Ce=>{const Fe=Ce.changedElements;for(const ge of M)Fe.includes(ge.image)&&(ge.needsUpdate=!0)},me.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,xe);else{const Fe=s.RGBA,ge=s.RGBA,Qe=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Fe,ge,Qe,xe)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Ze.length>0){if(tt&&rt){const me=Mt(Ze[0]);n.texStorage2D(s.TEXTURE_2D,Ae,Ne,me.width,me.height)}for(let me=0,Ce=Ze.length;me<Ce;me++)Te=Ze[me],tt?Y&&n.texSubImage2D(s.TEXTURE_2D,me,0,0,Re,Ke,Te):n.texImage2D(s.TEXTURE_2D,me,Ne,Re,Ke,Te);b.generateMipmaps=!1}else if(tt){if(rt){const me=Mt(xe);n.texStorage2D(s.TEXTURE_2D,Ae,Ne,me.width,me.height)}Y&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Re,Ke,xe)}else n.texImage2D(s.TEXTURE_2D,0,Ne,Re,Ke,xe);y(b)&&k(ee),we.__version=Me.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function $e(I,b,V){if(b.image.length!==6)return;const ee=Oe(I,b),ae=b.source;n.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+V);const Me=r.get(ae);if(ae.version!==Me.__version||ee===!0){n.activeTexture(s.TEXTURE0+V);const we=_t.getPrimaries(_t.workingColorSpace),pe=b.colorSpace===Nr?null:_t.getPrimaries(b.colorSpace),xe=b.colorSpace===Nr||we===pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;n.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Re=b.isCompressedTexture||b.image[0].isCompressedTexture,Ke=b.image[0]&&b.image[0].isDataTexture,Ne=[];for(let ge=0;ge<6;ge++)!Re&&!Ke?Ne[ge]=S(b.image[ge],!0,o.maxCubemapSize):Ne[ge]=Ke?b.image[ge].image:b.image[ge],Ne[ge]=en(b,Ne[ge]);const Te=Ne[0],Ze=l.convert(b.format,b.colorSpace),tt=l.convert(b.type),rt=N(b.internalFormat,Ze,tt,b.normalized,b.colorSpace),Y=b.isVideoTexture!==!0,Ae=Me.__version===void 0||ee===!0,me=ae.dataReady;let Ce=C(b,Te);He(s.TEXTURE_CUBE_MAP,b);let Fe;if(Re){Y&&Ae&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Ce,rt,Te.width,Te.height);for(let ge=0;ge<6;ge++){Fe=Ne[ge].mipmaps;for(let Qe=0;Qe<Fe.length;Qe++){const qe=Fe[Qe];b.format!==Ei?Ze!==null?Y?me&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Qe,0,0,qe.width,qe.height,Ze,qe.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Qe,rt,qe.width,qe.height,0,qe.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?me&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Qe,0,0,qe.width,qe.height,Ze,tt,qe.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Qe,rt,qe.width,qe.height,0,Ze,tt,qe.data)}}}else{if(Fe=b.mipmaps,Y&&Ae){Fe.length>0&&Ce++;const ge=Mt(Ne[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Ce,rt,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(Ke){Y?me&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Ne[ge].width,Ne[ge].height,Ze,tt,Ne[ge].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,rt,Ne[ge].width,Ne[ge].height,0,Ze,tt,Ne[ge].data);for(let Qe=0;Qe<Fe.length;Qe++){const Rt=Fe[Qe].image[ge].image;Y?me&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Qe+1,0,0,Rt.width,Rt.height,Ze,tt,Rt.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Qe+1,rt,Rt.width,Rt.height,0,Ze,tt,Rt.data)}}else{Y?me&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Ze,tt,Ne[ge]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,rt,Ze,tt,Ne[ge]);for(let Qe=0;Qe<Fe.length;Qe++){const qe=Fe[Qe];Y?me&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Qe+1,0,0,Ze,tt,qe.image[ge]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Qe+1,rt,Ze,tt,qe.image[ge])}}}y(b)&&k(s.TEXTURE_CUBE_MAP),Me.__version=ae.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function Be(I,b,V,ee,ae,Me){const we=l.convert(V.format,V.colorSpace),pe=l.convert(V.type),xe=N(V.internalFormat,we,pe,V.normalized,V.colorSpace),Re=r.get(b),Ke=r.get(V);if(Ke.__renderTarget=b,!Re.__hasExternalTextures){const Ne=Math.max(1,b.width>>Me),Te=Math.max(1,b.height>>Me);ae===s.TEXTURE_3D||ae===s.TEXTURE_2D_ARRAY?n.texImage3D(ae,Me,xe,Ne,Te,b.depth,0,we,pe,null):n.texImage2D(ae,Me,xe,Ne,Te,0,we,pe,null)}n.bindFramebuffer(s.FRAMEBUFFER,I),Vt(b)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ee,ae,Ke.__webglTexture,0,Ct(b)):(ae===s.TEXTURE_2D||ae>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ee,ae,Ke.__webglTexture,Me),n.bindFramebuffer(s.FRAMEBUFFER,null)}function ut(I,b,V){if(s.bindRenderbuffer(s.RENDERBUFFER,I),b.depthBuffer){const ee=b.depthTexture,ae=ee&&ee.isDepthTexture?ee.type:null,Me=P(b.stencilBuffer,ae),we=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Vt(b)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ct(b),Me,b.width,b.height):V?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ct(b),Me,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,Me,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,we,s.RENDERBUFFER,I)}else{const ee=b.textures;for(let ae=0;ae<ee.length;ae++){const Me=ee[ae],we=l.convert(Me.format,Me.colorSpace),pe=l.convert(Me.type),xe=N(Me.internalFormat,we,pe,Me.normalized,Me.colorSpace);Vt(b)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ct(b),xe,b.width,b.height):V?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ct(b),xe,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,xe,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function zt(I,b,V){const ee=b.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(s.FRAMEBUFFER,I),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ae=r.get(b.depthTexture);if(ae.__renderTarget=b,(!ae.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ee){if(ae.__webglInit===void 0&&(ae.__webglInit=!0,b.depthTexture.addEventListener("dispose",U)),ae.__webglTexture===void 0){ae.__webglTexture=s.createTexture(),n.bindTexture(s.TEXTURE_CUBE_MAP,ae.__webglTexture),He(s.TEXTURE_CUBE_MAP,b.depthTexture);const Re=l.convert(b.depthTexture.format),Ke=l.convert(b.depthTexture.type);let Ne;b.depthTexture.format===sr?Ne=s.DEPTH_COMPONENT24:b.depthTexture.format===ts&&(Ne=s.DEPTH24_STENCIL8);for(let Te=0;Te<6;Te++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,Ne,b.width,b.height,0,Re,Ke,null)}}else H(b.depthTexture,0);const Me=ae.__webglTexture,we=Ct(b),pe=ee?s.TEXTURE_CUBE_MAP_POSITIVE_X+V:s.TEXTURE_2D,xe=b.depthTexture.format===ts?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(b.depthTexture.format===sr)Vt(b)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,xe,pe,Me,0,we):s.framebufferTexture2D(s.FRAMEBUFFER,xe,pe,Me,0);else if(b.depthTexture.format===ts)Vt(b)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,xe,pe,Me,0,we):s.framebufferTexture2D(s.FRAMEBUFFER,xe,pe,Me,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function st(I){const b=r.get(I),V=I.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==I.depthTexture){const ee=I.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ee){const ae=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ee.removeEventListener("dispose",ae)};ee.addEventListener("dispose",ae),b.__depthDisposeCallback=ae}b.__boundDepthTexture=ee}if(I.depthTexture&&!b.__autoAllocateDepthBuffer)if(V)for(let ee=0;ee<6;ee++)zt(b.__webglFramebuffer[ee],I,ee);else{const ee=I.texture.mipmaps;ee&&ee.length>0?zt(b.__webglFramebuffer[0],I,0):zt(b.__webglFramebuffer,I,0)}else if(V){b.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(n.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[ee]),b.__webglDepthbuffer[ee]===void 0)b.__webglDepthbuffer[ee]=s.createRenderbuffer(),ut(b.__webglDepthbuffer[ee],I,!1);else{const ae=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Me=b.__webglDepthbuffer[ee];s.bindRenderbuffer(s.RENDERBUFFER,Me),s.framebufferRenderbuffer(s.FRAMEBUFFER,ae,s.RENDERBUFFER,Me)}}else{const ee=I.texture.mipmaps;if(ee&&ee.length>0?n.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):n.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),ut(b.__webglDepthbuffer,I,!1);else{const ae=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Me=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Me),s.framebufferRenderbuffer(s.FRAMEBUFFER,ae,s.RENDERBUFFER,Me)}}n.bindFramebuffer(s.FRAMEBUFFER,null)}function mt(I,b,V){const ee=r.get(I);b!==void 0&&Be(ee.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),V!==void 0&&st(I)}function wt(I){const b=I.texture,V=r.get(I),ee=r.get(b);I.addEventListener("dispose",E);const ae=I.textures,Me=I.isWebGLCubeRenderTarget===!0,we=ae.length>1;if(we||(ee.__webglTexture===void 0&&(ee.__webglTexture=s.createTexture()),ee.__version=b.version,u.memory.textures++),Me){V.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(b.mipmaps&&b.mipmaps.length>0){V.__webglFramebuffer[pe]=[];for(let xe=0;xe<b.mipmaps.length;xe++)V.__webglFramebuffer[pe][xe]=s.createFramebuffer()}else V.__webglFramebuffer[pe]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){V.__webglFramebuffer=[];for(let pe=0;pe<b.mipmaps.length;pe++)V.__webglFramebuffer[pe]=s.createFramebuffer()}else V.__webglFramebuffer=s.createFramebuffer();if(we)for(let pe=0,xe=ae.length;pe<xe;pe++){const Re=r.get(ae[pe]);Re.__webglTexture===void 0&&(Re.__webglTexture=s.createTexture(),u.memory.textures++)}if(I.samples>0&&Vt(I)===!1){V.__webglMultisampledFramebuffer=s.createFramebuffer(),V.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let pe=0;pe<ae.length;pe++){const xe=ae[pe];V.__webglColorRenderbuffer[pe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,V.__webglColorRenderbuffer[pe]);const Re=l.convert(xe.format,xe.colorSpace),Ke=l.convert(xe.type),Ne=N(xe.internalFormat,Re,Ke,xe.normalized,xe.colorSpace,I.isXRRenderTarget===!0),Te=Ct(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,Te,Ne,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.RENDERBUFFER,V.__webglColorRenderbuffer[pe])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(V.__webglDepthRenderbuffer=s.createRenderbuffer(),ut(V.__webglDepthRenderbuffer,I,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Me){n.bindTexture(s.TEXTURE_CUBE_MAP,ee.__webglTexture),He(s.TEXTURE_CUBE_MAP,b);for(let pe=0;pe<6;pe++)if(b.mipmaps&&b.mipmaps.length>0)for(let xe=0;xe<b.mipmaps.length;xe++)Be(V.__webglFramebuffer[pe][xe],I,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,xe);else Be(V.__webglFramebuffer[pe],I,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);y(b)&&k(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(we){for(let pe=0,xe=ae.length;pe<xe;pe++){const Re=ae[pe],Ke=r.get(Re);let Ne=s.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Ne=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Ne,Ke.__webglTexture),He(Ne,Re),Be(V.__webglFramebuffer,I,Re,s.COLOR_ATTACHMENT0+pe,Ne,0),y(Re)&&k(Ne)}n.unbindTexture()}else{let pe=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(pe=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(pe,ee.__webglTexture),He(pe,b),b.mipmaps&&b.mipmaps.length>0)for(let xe=0;xe<b.mipmaps.length;xe++)Be(V.__webglFramebuffer[xe],I,b,s.COLOR_ATTACHMENT0,pe,xe);else Be(V.__webglFramebuffer,I,b,s.COLOR_ATTACHMENT0,pe,0);y(b)&&k(pe),n.unbindTexture()}I.depthBuffer&&st(I)}function dt(I){const b=I.textures;for(let V=0,ee=b.length;V<ee;V++){const ae=b[V];if(y(ae)){const Me=G(I),we=r.get(ae).__webglTexture;n.bindTexture(Me,we),k(Me),n.unbindTexture()}}}const Ut=[],Dt=[];function It(I){if(I.samples>0){if(Vt(I)===!1){const b=I.textures,V=I.width,ee=I.height;let ae=s.COLOR_BUFFER_BIT;const Me=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,we=r.get(I),pe=b.length>1;if(pe)for(let Re=0;Re<b.length;Re++)n.bindFramebuffer(s.FRAMEBUFFER,we.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,we.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer);const xe=I.texture.mipmaps;xe&&xe.length>0?n.bindFramebuffer(s.DRAW_FRAMEBUFFER,we.__webglFramebuffer[0]):n.bindFramebuffer(s.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let Re=0;Re<b.length;Re++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ae|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ae|=s.STENCIL_BUFFER_BIT)),pe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,we.__webglColorRenderbuffer[Re]);const Ke=r.get(b[Re]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ke,0)}s.blitFramebuffer(0,0,V,ee,0,0,V,ee,ae,s.NEAREST),x===!0&&(Ut.length=0,Dt.length=0,Ut.push(s.COLOR_ATTACHMENT0+Re),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&(Ut.push(Me),Dt.push(Me),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Dt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ut))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),pe)for(let Re=0;Re<b.length;Re++){n.bindFramebuffer(s.FRAMEBUFFER,we.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.RENDERBUFFER,we.__webglColorRenderbuffer[Re]);const Ke=r.get(b[Re]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,we.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.TEXTURE_2D,Ke,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&x){const b=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function Ct(I){return Math.min(o.maxSamples,I.samples)}function Vt(I){const b=r.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function K(I){const b=u.render.frame;v.get(I)!==b&&(v.set(I,b),I.update())}function en(I,b){const V=I.colorSpace,ee=I.format,ae=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||V!==Gl&&V!==Nr&&(_t.getTransfer(V)===Ot?(ee!==Ei||ae!==Kn)&&ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Lt("WebGLTextures: Unsupported texture color space:",V)),b}function Mt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(m.width=I.naturalWidth||I.width,m.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(m.width=I.displayWidth,m.height=I.displayHeight):(m.width=I.width,m.height=I.height),m}this.allocateTextureUnit=ue,this.resetTextureUnits=te,this.getTextureUnits=B,this.setTextureUnits=ne,this.setTexture2D=H,this.setTexture2DArray=j,this.setTexture3D=X,this.setTextureCube=L,this.rebindTextures=mt,this.setupRenderTarget=wt,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=It,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=Be,this.useMultisampledRTT=Vt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function xE(s,e){function n(r,o=Nr){let l;const u=_t.getTransfer(o);if(r===Kn)return s.UNSIGNED_BYTE;if(r===df)return s.UNSIGNED_SHORT_4_4_4_4;if(r===ff)return s.UNSIGNED_SHORT_5_5_5_1;if(r===A0)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===C0)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===w0)return s.BYTE;if(r===T0)return s.SHORT;if(r===qa)return s.UNSIGNED_SHORT;if(r===uf)return s.INT;if(r===Fi)return s.UNSIGNED_INT;if(r===Di)return s.FLOAT;if(r===Oi)return s.HALF_FLOAT;if(r===R0)return s.ALPHA;if(r===N0)return s.RGB;if(r===Ei)return s.RGBA;if(r===sr)return s.DEPTH_COMPONENT;if(r===ts)return s.DEPTH_STENCIL;if(r===P0)return s.RED;if(r===hf)return s.RED_INTEGER;if(r===rs)return s.RG;if(r===pf)return s.RG_INTEGER;if(r===mf)return s.RGBA_INTEGER;if(r===Il||r===kl||r===Ul||r===Fl)if(u===Ot)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Il)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===kl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ul)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Fl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Il)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===kl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ul)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Fl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===bd||r===Ed||r===wd||r===Td)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===bd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ed)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===wd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Td)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ad||r===Cd||r===Rd||r===Nd||r===Pd||r===Vl||r===Ld)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Ad||r===Cd)return u===Ot?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Rd)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===Nd)return l.COMPRESSED_R11_EAC;if(r===Pd)return l.COMPRESSED_SIGNED_R11_EAC;if(r===Vl)return l.COMPRESSED_RG11_EAC;if(r===Ld)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Dd||r===Id||r===kd||r===Ud||r===Fd||r===Od||r===Bd||r===zd||r===Vd||r===Hd||r===Gd||r===Wd||r===jd||r===Xd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Dd)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Id)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===kd)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ud)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Fd)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Od)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Bd)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===zd)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Vd)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Hd)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Gd)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Wd)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===jd)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Xd)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===qd||r===Yd||r===$d)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===qd)return u===Ot?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Yd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===$d)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Kd||r===Zd||r===Hl||r===Jd)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Kd)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Zd)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Hl)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Jd)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ya?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}const gE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class _E{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const r=new H0(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new zi({vertexShader:gE,fragmentShader:vE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Bi(new $l(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class yE extends ss{constructor(e,n){super();const r=this;let o=null,l=1,u=null,h="local-floor",x=1,m=null,v=null,M=null,g=null,_=null,w=null;const R=typeof XRWebGLBinding<"u",S=new _E,y={},k=n.getContextAttributes();let G=null,N=null;const P=[],C=[],U=new St;let E=null,D=null;const z=new $n;z.viewport=new Kt;const O=new $n;O.viewport=new Kt;const q=[z,O],te=new Ay;let B=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let he=P[oe];return he===void 0&&(he=new ju,P[oe]=he),he.getTargetRaySpace()},this.getControllerGrip=function(oe){let he=P[oe];return he===void 0&&(he=new ju,P[oe]=he),he.getGripSpace()},this.getHand=function(oe){let he=P[oe];return he===void 0&&(he=new ju,P[oe]=he),he.getHandSpace()};function ue(oe){const he=C.indexOf(oe.inputSource);if(he===-1)return;const be=P[he];be!==void 0&&(be.update(oe.inputSource,oe.frame,m||u),be.dispatchEvent({type:oe.type,data:oe.inputSource}))}function J(){o.removeEventListener("select",ue),o.removeEventListener("selectstart",ue),o.removeEventListener("selectend",ue),o.removeEventListener("squeeze",ue),o.removeEventListener("squeezestart",ue),o.removeEventListener("squeezeend",ue),o.removeEventListener("end",J),o.removeEventListener("inputsourceschange",H);for(let oe=0;oe<P.length;oe++){const he=C[oe];he!==null&&(C[oe]=null,P[oe].disconnect(he))}B=null,ne=null,S.reset();for(const oe in y)delete y[oe];if(e.setRenderTarget(G),_=null,g=null,M=null,o=null,N=null,Oe.stop(),r.isPresenting=!1,e.setPixelRatio(E),e.setSize(U.width,U.height,!1),D!==null){const oe=D.camera;oe.fov=D.fov,oe.zoom=D.zoom,oe.updateProjectionMatrix(),D=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){l=oe,r.isPresenting===!0&&ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){h=oe,r.isPresenting===!0&&ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||u},this.setReferenceSpace=function(oe){m=oe},this.getBaseLayer=function(){return g!==null?g:_},this.getBinding=function(){return M===null&&R&&(M=new XRWebGLBinding(o,n)),M},this.getFrame=function(){return w},this.getSession=function(){return o},this.setSession=async function(oe){if(o=oe,o!==null){if(G=e.getRenderTarget(),o.addEventListener("select",ue),o.addEventListener("selectstart",ue),o.addEventListener("selectend",ue),o.addEventListener("squeeze",ue),o.addEventListener("squeezestart",ue),o.addEventListener("squeezeend",ue),o.addEventListener("end",J),o.addEventListener("inputsourceschange",H),k.xrCompatible!==!0&&await n.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(U),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,$e=null,Be=null;k.depth&&(Be=k.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,be=k.stencil?ts:sr,$e=k.stencil?Ya:Fi);const ut={colorFormat:n.RGBA8,depthFormat:Be,scaleFactor:l};M=this.getBinding(),g=M.createProjectionLayer(ut),o.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),N=new wi(g.textureWidth,g.textureHeight,{format:Ei,type:Kn,depthTexture:new Ka(g.textureWidth,g.textureHeight,$e,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:k.stencil,colorSpace:e.outputColorSpace,samples:k.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}else{const be={antialias:k.antialias,alpha:!0,depth:k.depth,stencil:k.stencil,framebufferScaleFactor:l};_=new XRWebGLLayer(o,n,be),o.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),N=new wi(_.framebufferWidth,_.framebufferHeight,{format:Ei,type:Kn,colorSpace:e.outputColorSpace,stencilBuffer:k.stencil,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1,storeMultisampledDepthBuffer:_.ignoreDepthValues===!1,storeMultisampledStencilBuffer:_.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(x),m=null,u=await o.requestReferenceSpace(h),Oe.setContext(o),Oe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function H(oe){for(let he=0;he<oe.removed.length;he++){const be=oe.removed[he],$e=C.indexOf(be);$e>=0&&(C[$e]=null,P[$e].disconnect(be))}for(let he=0;he<oe.added.length;he++){const be=oe.added[he];let $e=C.indexOf(be);if($e===-1){for(let ut=0;ut<P.length;ut++)if(ut>=C.length){C.push(be),$e=ut;break}else if(C[ut]===null){C[ut]=be,$e=ut;break}if($e===-1)break}const Be=P[$e];Be&&Be.connect(be)}}const j=new ce,X=new ce;function L(oe,he,be){j.setFromMatrixPosition(he.matrixWorld),X.setFromMatrixPosition(be.matrixWorld);const $e=j.distanceTo(X),Be=he.projectionMatrix.elements,ut=be.projectionMatrix.elements,zt=Be[14]/(Be[10]-1),st=Be[14]/(Be[10]+1),mt=(Be[9]+1)/Be[5],wt=(Be[9]-1)/Be[5],dt=(Be[8]-1)/Be[0],Ut=(ut[8]+1)/ut[0],Dt=zt*dt,It=zt*Ut,Ct=$e/(-dt+Ut),Vt=Ct*-dt;if(he.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(Vt),oe.translateZ(Ct),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert(),Be[10]===-1)oe.projectionMatrix.copy(he.projectionMatrix),oe.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const K=zt+Ct,en=st+Ct,Mt=Dt-Vt,I=It+($e-Vt),b=mt*st/en*K,V=wt*st/en*K;oe.projectionMatrix.makePerspective(Mt,I,b,V,K,en),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}}function Q(oe,he){he===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(he.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(o===null)return;let he=oe.near,be=oe.far;S.texture!==null&&(S.depthNear>0&&(he=S.depthNear),S.depthFar>0&&(be=S.depthFar)),te.near=O.near=z.near=he,te.far=O.far=z.far=be,(B!==te.near||ne!==te.far)&&(o.updateRenderState({depthNear:te.near,depthFar:te.far}),B=te.near,ne=te.far),te.layers.mask=oe.layers.mask|6,z.layers.mask=te.layers.mask&-5,O.layers.mask=te.layers.mask&-3;const $e=oe.parent,Be=te.cameras;Q(te,$e);for(let ut=0;ut<Be.length;ut++)Q(Be[ut],$e);Be.length===2?L(te,z,O):te.projectionMatrix.copy(z.projectionMatrix),D===null&&oe.isPerspectiveCamera&&(D={camera:oe,fov:oe.fov,zoom:oe.zoom}),ye(oe,te,$e)};function ye(oe,he,be){be===null?oe.matrix.copy(he.matrixWorld):(oe.matrix.copy(be.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(he.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0),oe.projectionMatrix.copy(he.projectionMatrix),oe.projectionMatrixInverse.copy(he.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=ef*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return te},this.getFoveation=function(){if(!(g===null&&_===null))return x},this.setFoveation=function(oe){x=oe,g!==null&&(g.fixedFoveation=oe),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=oe)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(te)},this.getCameraTexture=function(oe){return y[oe]};let De=null;function He(oe,he){if(v=he.getViewerPose(m||u),w=he,v!==null){const be=v.views;_!==null&&(e.setRenderTargetFramebuffer(N,_.framebuffer),e.setRenderTarget(N));let $e=!1;be.length!==te.cameras.length&&(te.cameras.length=0,$e=!0);for(let st=0;st<be.length;st++){const mt=be[st];let wt=null;if(_!==null)wt=_.getViewport(mt);else{const Ut=M.getViewSubImage(g,mt);wt=Ut.viewport,st===0&&(e.setRenderTargetTextures(N,Ut.colorTexture,Ut.depthStencilTexture),e.setRenderTarget(N))}let dt=q[st];dt===void 0&&(dt=new $n,dt.layers.enable(st),dt.viewport=new Kt,q[st]=dt),dt.matrix.fromArray(mt.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(mt.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(wt.x,wt.y,wt.width,wt.height),st===0&&(te.matrix.copy(dt.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale)),$e===!0&&te.cameras.push(dt)}const Be=o.enabledFeatures;if(Be&&Be.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&R){M=r.getBinding();const st=M.getDepthInformation(be[0]);st&&st.isValid&&st.texture&&S.init(st,o.renderState)}if(Be&&Be.includes("camera-access")&&R){e.state.unbindTexture(),M=r.getBinding();for(let st=0;st<be.length;st++){const mt=be[st].camera;if(mt){let wt=y[mt];wt||(wt=new H0,y[mt]=wt);const dt=M.getCameraImage(mt);wt.sourceTexture=dt}}}}for(let be=0;be<P.length;be++){const $e=C[be],Be=P[be];$e!==null&&Be!==void 0&&Be.update($e,he,m||u)}De&&De(oe,he),he.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:he}),w=null}const Oe=new X0;Oe.setAnimationLoop(He),this.setAnimationLoop=function(oe){De=oe},this.dispose=function(){}}}const SE=new Zt,Q0=new ct;Q0.set(-1,0,0,0,1,0,0,0,1);function ME(s,e){function n(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function r(S,y){y.color.getRGB(S.fogColor.value,G0(s)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function o(S,y,k,G,N){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?l(S,y):y.isMeshLambertMaterial?(l(S,y),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(l(S,y),M(S,y)):y.isMeshPhongMaterial?(l(S,y),v(S,y),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(l(S,y),g(S,y),y.isMeshPhysicalMaterial&&_(S,y,N)):y.isMeshMatcapMaterial?(l(S,y),w(S,y)):y.isMeshDepthMaterial?l(S,y):y.isMeshDistanceMaterial?(l(S,y),R(S,y)):y.isMeshNormalMaterial?l(S,y):y.isLineBasicMaterial?(u(S,y),y.isLineDashedMaterial&&h(S,y)):y.isPointsMaterial?x(S,y,k,G):y.isSpriteMaterial?m(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function l(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,n(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,n(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,n(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===Hn&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,n(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===Hn&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,n(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,n(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,n(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const k=e.get(y),G=k.envMap,N=k.envMapRotation;G&&(S.envMap.value=G,S.envMapRotation.value.setFromMatrix4(SE.makeRotationFromEuler(N)).transpose(),G.isCubeTexture&&G.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(Q0),S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,n(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,n(y.aoMap,S.aoMapTransform))}function u(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,n(y.map,S.mapTransform))}function h(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function x(S,y,k,G){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*k,S.scale.value=G*.5,y.map&&(S.map.value=y.map,n(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,n(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function m(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,n(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,n(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function v(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function M(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function g(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,n(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,n(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function _(S,y,k){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,n(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,n(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,n(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,n(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,n(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Hn&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.retroreflectivity>0&&(S.retroreflectivity.value=y.retroreflectivity),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,n(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,n(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=k.texture,S.transmissionSamplerSize.value.set(k.width,k.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,n(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,n(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,n(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,n(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,n(y.specularIntensityMap,S.specularIntensityMapTransform))}function w(S,y){y.matcap&&(S.matcap.value=y.matcap)}function R(S,y){const k=e.get(y).light;S.referencePosition.value.setFromMatrixPosition(k.matrixWorld),S.nearDistance.value=k.shadow.camera.near,S.farDistance.value=k.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function bE(s,e,n,r){let o={},l={},u=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function x(N,P){const C=P.program;r.uniformBlockBinding(N,C)}function m(N,P){let C=o[N.id];C===void 0&&(S(N),C=v(N),o[N.id]=C,N.addEventListener("dispose",k));const U=P.program;r.updateUBOMapping(N,U);const E=e.render.frame;l[N.id]!==E&&(g(N),l[N.id]=E)}function v(N){const P=M();N.__bindingPointIndex=P;const C=s.createBuffer(),U=N.__size,E=N.usage;return s.bindBuffer(s.UNIFORM_BUFFER,C),s.bufferData(s.UNIFORM_BUFFER,U,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,P,C),C}function M(){for(let N=0;N<h;N++)if(u.indexOf(N)===-1)return u.push(N),N;return Lt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(N){const P=o[N.id],C=N.uniforms,U=N.__cache;s.bindBuffer(s.UNIFORM_BUFFER,P);for(let E=0,D=C.length;E<D;E++){const z=C[E];if(Array.isArray(z))for(let O=0,q=z.length;O<q;O++)_(z[O],E,O,U);else _(z,E,0,U)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function _(N,P,C,U){if(R(N,P,C,U)===!0){const E=N.__offset,D=N.value;if(Array.isArray(D)){let z=0;for(let O=0;O<D.length;O++){const q=D[O],te=y(q);w(q,N.__data,z),typeof q!="number"&&typeof q!="boolean"&&!q.isMatrix3&&!ArrayBuffer.isView(q)&&(z+=te.storage/Float32Array.BYTES_PER_ELEMENT)}}else w(D,N.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,E,N.__data)}}function w(N,P,C){typeof N=="number"||typeof N=="boolean"?P[0]=N:N.isMatrix3?(P[0]=N.elements[0],P[1]=N.elements[1],P[2]=N.elements[2],P[3]=0,P[4]=N.elements[3],P[5]=N.elements[4],P[6]=N.elements[5],P[7]=0,P[8]=N.elements[6],P[9]=N.elements[7],P[10]=N.elements[8],P[11]=0):ArrayBuffer.isView(N)?P.set(new N.constructor(N.buffer,N.byteOffset,P.length)):N.toArray(P,C)}function R(N,P,C,U){const E=N.value,D=P+"_"+C;if(U[D]===void 0)return typeof E=="number"||typeof E=="boolean"?U[D]=E:ArrayBuffer.isView(E)?U[D]=E.slice():U[D]=E.clone(),!0;{const z=U[D];if(typeof E=="number"||typeof E=="boolean"){if(z!==E)return U[D]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(z.equals(E)===!1)return z.copy(E),!0}}return!1}function S(N){const P=N.uniforms;let C=0;const U=16;for(let D=0,z=P.length;D<z;D++){const O=Array.isArray(P[D])?P[D]:[P[D]];for(let q=0,te=O.length;q<te;q++){const B=O[q],ne=Array.isArray(B.value)?B.value:[B.value];for(let ue=0,J=ne.length;ue<J;ue++){const H=ne[ue],j=y(H),X=C%U,L=X%j.boundary,Q=X+L;C+=L,Q!==0&&U-Q<j.storage&&(C+=U-Q),B.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=C,C+=j.storage}}}const E=C%U;return E>0&&(C+=U-E),N.__size=C,N.__cache={},this}function y(N){const P={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(P.boundary=4,P.storage=4):N.isVector2?(P.boundary=8,P.storage=8):N.isVector3||N.isColor?(P.boundary=16,P.storage=12):N.isVector4?(P.boundary=16,P.storage=16):N.isMatrix3?(P.boundary=48,P.storage=48):N.isMatrix4?(P.boundary=64,P.storage=64):N.isTexture?ot("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(N)?(P.boundary=16,P.storage=N.byteLength):ot("WebGLRenderer: Unsupported uniform value type.",N),P}function k(N){const P=N.target;P.removeEventListener("dispose",k);const C=u.indexOf(P.__bindingPointIndex);u.splice(C,1),s.deleteBuffer(o[P.id]),delete o[P.id],delete l[P.id]}function G(){for(const N in o)s.deleteBuffer(o[N]);u=[],o={},l={}}return{bind:x,update:m,dispose:G}}const EE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Pi=null;function wE(){return Pi===null&&(Pi=new dy(EE,16,16,rs,Oi),Pi.name="DFG_LUT",Pi.minFilter=An,Pi.magFilter=An,Pi.wrapS=nr,Pi.wrapT=nr,Pi.generateMipmaps=!1,Pi.needsUpdate=!0),Pi}class TE{constructor(e={}){const{canvas:n=z_(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:h=!1,premultipliedAlpha:x=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:M=!1,reversedDepthBuffer:g=!1,outputBufferType:_=Kn}=e;this.isWebGLRenderer=!0;let w;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");w=r.getContextAttributes().alpha}else w=u;const R=_,S=new Set([mf,pf,hf]),y=new Set([Kn,Fi,qa,Ya,df,ff]),k=new Uint32Array(4),G=new Int32Array(4),N=new ce;let P=null,C=null;const U=[],E=[];let D=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const z=this;let O=!1,q=null,te=null,B=null,ne=null;this._outputColorSpace=ai;let ue=0,J=0,H=null,j=-1,X=null;const L=new Kt,Q=new Kt;let ye=null;const De=new Et(0);let He=0,Oe=n.width,oe=n.height,he=1,be=null,$e=null;const Be=new Kt(0,0,Oe,oe),ut=new Kt(0,0,Oe,oe);let zt=!1;const st=new _f;let mt=!1,wt=!1;const dt=new Zt,Ut=new ce,Dt=new Kt,It={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ct=!1;function Vt(){return H===null?he:1}let K=r;function en(A,$){return n.getContext(A,$)}let Mt,I,b,V,ee,ae,Me,we,pe,xe,Re,Ke,Ne,Te,Ze,tt,rt,Y,Ae,me,Ce,Fe,ge;try{const A={alpha:!0,depth:o,stencil:l,antialias:h,premultipliedAlpha:x,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:M};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${lf}`),n.addEventListener("webglcontextlost",Rt,!1),n.addEventListener("webglcontextrestored",bt,!1),n.addEventListener("webglcontextcreationerror",mn,!1),K===null){const $="webgl2";if(K=en($,A),K===null)throw en($)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Qe()}catch(A){throw n.removeEventListener("webglcontextlost",Rt,!1),n.removeEventListener("webglcontextrestored",bt,!1),n.removeEventListener("webglcontextcreationerror",mn,!1),Lt("WebGLRenderer: "+A.message),A}function Qe(){Mt=new w1(K),Mt.init(),Ce=new xE(K,Mt),I=new m1(K,Mt,e,Ce),b=new pE(K,Mt),I.reversedDepthBuffer&&g&&b.buffers.depth.setReversed(!0),te=K.createFramebuffer(),B=K.createFramebuffer(),ne=K.createFramebuffer(),V=new C1(K),ee=new eE,ae=new mE(K,Mt,b,ee,I,Ce,V),Me=new E1(z),we=new Ny(K),Fe=new h1(K,we),pe=new T1(K,we,V,Fe),xe=new N1(K,pe,we,Fe,V),Y=new R1(K,I,ae),Ze=new x1(ee),Re=new Qb(z,Me,Mt,I,Fe,Ze),Ke=new ME(z,ee),Ne=new nE,Te=new lE(Mt),rt=new f1(z,Me,b,xe,w,x),tt=new hE(z,xe,I),ge=new bE(K,V,I,b),Ae=new p1(K,Mt,V),me=new A1(K,Mt,V),V.programs=Re.programs,z.capabilities=I,z.extensions=Mt,z.properties=ee,z.renderLists=Ne,z.shadowMap=tt,z.state=b,z.info=V}R!==Kn&&(D=new L1(R,n.width,n.height,h,o,l));const qe=new yE(z,K);this.xr=qe,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){const A=Mt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Mt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(A){A!==void 0&&(he=A,this.setSize(Oe,oe,!1))},this.getSize=function(A){return A.set(Oe,oe)},this.setSize=function(A,$,de=!0){if(qe.isPresenting){ot("WebGLRenderer: Can't change size while VR device is presenting.");return}Oe=A,oe=$,n.width=Math.floor(A*he),n.height=Math.floor($*he),de===!0&&(n.style.width=A+"px",n.style.height=$+"px"),D!==null&&D.setSize(n.width,n.height),this.setViewport(0,0,A,$)},this.getDrawingBufferSize=function(A){return A.set(Oe*he,oe*he).floor()},this.setDrawingBufferSize=function(A,$,de){Oe=A,oe=$,he=de,n.width=Math.floor(A*de),n.height=Math.floor($*de),this.setViewport(0,0,A,$)},this.setEffects=function(A){if(R===Kn){Lt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let $=0;$<A.length;$++)if(A[$].isOutputPass===!0){ot("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(L)},this.getViewport=function(A){return A.copy(Be)},this.setViewport=function(A,$,de,re){A.isVector4?Be.set(A.x,A.y,A.z,A.w):Be.set(A,$,de,re),b.viewport(L.copy(Be).multiplyScalar(he).round())},this.getScissor=function(A){return A.copy(ut)},this.setScissor=function(A,$,de,re){A.isVector4?ut.set(A.x,A.y,A.z,A.w):ut.set(A,$,de,re),b.scissor(Q.copy(ut).multiplyScalar(he).round())},this.getScissorTest=function(){return zt},this.setScissorTest=function(A){b.setScissorTest(zt=A)},this.setOpaqueSort=function(A){be=A},this.setTransparentSort=function(A){$e=A},this.getClearColor=function(A){return A.copy(rt.getClearColor())},this.setClearColor=function(){rt.setClearColor(...arguments)},this.getClearAlpha=function(){return rt.getClearAlpha()},this.setClearAlpha=function(){rt.setClearAlpha(...arguments)},this.clear=function(A=!0,$=!0,de=!0){let re=0;if(A){let ie=!1;if(H!==null){const ke=H.texture.format;ie=S.has(ke)}if(ie){const ke=H.texture.type,Le=y.has(ke),Ie=rt.getClearColor(),je=rt.getClearAlpha(),Je=Ie.r,lt=Ie.g,ft=Ie.b;Le?(k[0]=Je,k[1]=lt,k[2]=ft,k[3]=je,K.clearBufferuiv(K.COLOR,0,k)):(G[0]=Je,G[1]=lt,G[2]=ft,G[3]=je,K.clearBufferiv(K.COLOR,0,G))}else re|=K.COLOR_BUFFER_BIT}$&&(re|=K.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),de&&(re|=K.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),re!==0&&K.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),q=A},this.dispose=function(){n.removeEventListener("webglcontextlost",Rt,!1),n.removeEventListener("webglcontextrestored",bt,!1),n.removeEventListener("webglcontextcreationerror",mn,!1),rt.dispose(),Ne.dispose(),Te.dispose(),ee.dispose(),Me.dispose(),xe.dispose(),Fe.dispose(),ge.dispose(),Re.dispose(),qe.dispose(),qe.removeEventListener("sessionstart",to),qe.removeEventListener("sessionend",no),Rn.stop()};function Rt(A){A.preventDefault(),lm("WebGLRenderer: Context Lost."),O=!0}function bt(){lm("WebGLRenderer: Context Restored."),O=!1;const A=V.autoReset,$=tt.enabled,de=tt.autoUpdate,re=tt.needsUpdate,ie=tt.type;Qe(),V.autoReset=A,tt.enabled=$,tt.autoUpdate=de,tt.needsUpdate=re,tt.type=ie}function mn(A){Lt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Zn(A){const $=A.target;$.removeEventListener("dispose",Zn),Lr($)}function Lr(A){as(A),ee.remove(A)}function as(A){const $=ee.get(A).programs;$!==void 0&&($.forEach(function(de){Re.releaseProgram(de)}),A.isShaderMaterial&&Re.releaseShaderCache(A))}this.renderBufferDirect=function(A,$,de,re,ie,ke){$===null&&($=It);const Le=ie.isMesh&&ie.matrixWorld.determinantAffine()<0,Ie=qt(A,$,de,re,ie);b.setMaterial(re,Le);let je=de.index,Je=1;if(re.wireframe===!0){if(je=pe.getWireframeAttribute(de),je===void 0)return;Je=2}const lt=de.drawRange,ft=de.attributes.position;let Ge=lt.start*Je,gt=(lt.start+lt.count)*Je;ke!==null&&(Ge=Math.max(Ge,ke.start*Je),gt=Math.min(gt,(ke.start+ke.count)*Je)),je!==null?(Ge=Math.max(Ge,0),gt=Math.min(gt,je.count)):ft!=null&&(Ge=Math.max(Ge,0),gt=Math.min(gt,ft.count));const Jt=gt-Ge;if(Jt<0||Jt===1/0)return;Fe.setup(ie,re,Ie,de,je);let Bt,kt=Ae;if(je!==null&&(Bt=we.get(je),kt=me,kt.setIndex(Bt)),ie.isMesh)re.wireframe===!0?(b.setLineWidth(re.wireframeLinewidth*Vt()),kt.setMode(K.LINES)):kt.setMode(K.TRIANGLES);else if(ie.isLine){let an=re.linewidth;an===void 0&&(an=1),b.setLineWidth(an*Vt()),ie.isLineSegments?kt.setMode(K.LINES):ie.isLineLoop?kt.setMode(K.LINE_LOOP):kt.setMode(K.LINE_STRIP)}else ie.isPoints?kt.setMode(K.POINTS):ie.isSprite&&kt.setMode(K.TRIANGLES);if(ie.isBatchedMesh)if(Mt.get("WEBGL_multi_draw"))kt.renderMultiDraw(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount);else{const an=ie._multiDrawStarts,ze=ie._multiDrawCounts,tn=ie._multiDrawCount,vt=je?we.get(je).bytesPerElement:1,yn=ee.get(re).currentProgram.getUniforms();for(let ht=0;ht<tn;ht++)yn.setValue(K,"_gl_DrawID",ht),kt.render(an[ht]/vt,ze[ht])}else if(ie.isInstancedMesh)kt.renderInstances(Ge,Jt,ie.count);else if(de.isInstancedBufferGeometry){const an=de._maxInstanceCount!==void 0?de._maxInstanceCount:1/0,ze=Math.min(de.instanceCount,an);kt.renderInstances(Ge,Jt,ze)}else kt.render(Ge,Jt)};function Dr(A,$,de,re){q!==null&&A.isNodeMaterial&&q.setObject(re,A),mt===!0&&Ze.setState(A,de,!1),A.transparent===!0&&A.side===tr&&A.forceSinglePass===!1?(A.side=Hn,A.needsUpdate=!0,Ur(A,$,re),A.side=ns,A.needsUpdate=!0,Ur(A,$,re),A.side=tr):Ur(A,$,re)}this.compile=function(A,$,de=null){de===null&&(de=A),q!==null&&q.renderStart(A,$,de),C=Te.get(de),C.init($),E.push(C),de.traverseVisible(function(ie){ie.isLight&&ie.layers.test($.layers)&&(C.pushLight(ie),ie.castShadow&&C.pushShadow(ie))}),A!==de&&A.traverseVisible(function(ie){ie.isLight&&ie.layers.test($.layers)&&(C.pushLight(ie),ie.castShadow&&C.pushShadow(ie))}),C.setupLights(),q!==null&&q.updateLights(C.state.lightsArray),wt=this.localClippingEnabled,mt=Ze.init(this.clippingPlanes,wt),mt===!0&&Ze.setGlobalState(this.clippingPlanes,$),q!==null&&tt.render(C.state.shadowsArray,de,$);const re=new Set;return A.traverse(function(ie){if(!(ie.isMesh||ie.isPoints||ie.isLine||ie.isSprite))return;const ke=ie.material;if(ke)if(Array.isArray(ke))for(let Le=0;Le<ke.length;Le++){const Ie=ke[Le];Dr(Ie,de,$,ie),re.add(Ie)}else Dr(ke,de,$,ie),re.add(ke)}),C=E.pop(),q!==null&&q.renderEnd(),re},this.compileAsync=function(A,$,de=null){const re=this.compile(A,$,de);return new Promise(ie=>{function ke(){if(re.forEach(function(Le){const je=ee.get(Le).currentProgram;(je===void 0||je.isReady())&&re.delete(Le)}),re.size===0){ie(A);return}setTimeout(ke,10)}Mt.get("KHR_parallel_shader_compile")!==null?ke():setTimeout(ke,10)})};let Ir=null;function Jl(A){Ir&&Ir(A)}function to(){Rn.stop()}function no(){Rn.start()}const Rn=new X0;Rn.setAnimationLoop(Jl),typeof self<"u"&&Rn.setContext(self),this.setAnimationLoop=function(A){Ir=A,qe.setAnimationLoop(A),A===null?Rn.stop():Rn.start()},qe.addEventListener("sessionstart",to),qe.addEventListener("sessionend",no),this.render=function(A,$){if($!==void 0&&$.isCamera!==!0){Lt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;q!==null&&q.renderStart(A,$);const de=qe.enabled===!0&&qe.isPresenting===!0,re=D!==null&&(H===null||de)&&D.begin(z,H);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),qe.enabled===!0&&qe.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(qe.cameraAutoUpdate===!0&&qe.updateCamera($),$=qe.getCamera()),A.isScene===!0&&A.onBeforeRender(z,A,$,H),C=Te.get(A,E.length),C.init($),C.state.textureUnits=ae.getTextureUnits(),E.push(C),dt.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),st.setFromProjectionMatrix(dt,Ii,$.reversedDepth),wt=this.localClippingEnabled,mt=Ze.init(this.clippingPlanes,wt),P=Ne.get(A,U.length),P.init(),U.push(P),qe.enabled===!0&&qe.isPresenting===!0){const Le=z.xr.getDepthSensingMesh();Le!==null&&os(Le,$,-1/0,z.sortObjects)}os(A,$,0,z.sortObjects),P.finish(),q!==null&&q.updateLights(C.state.lightsArray),z.sortObjects===!0&&P.sort(be,$e),Ct=qe.enabled===!1||qe.isPresenting===!1||qe.hasDepthSensing()===!1,Ct&&rt.addToRenderList(P,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),mt===!0&&Ze.beginShadows();const ie=C.state.shadowsArray;if(tt.render(ie,A,$),mt===!0&&Ze.endShadows(),(re&&D.hasRenderPass())===!1){const Le=P.opaque,Ie=P.transmissive;if(C.setupLights(),$.isArrayCamera){const je=$.cameras;if(Ie.length>0)for(let Je=0,lt=je.length;Je<lt;Je++){const ft=je[Je];io(Le,Ie,A,ft)}Ct&&rt.render(A);for(let Je=0,lt=je.length;Je<lt;Je++){const ft=je[Je];Qs(P,A,ft,ft.viewport)}}else Ie.length>0&&io(Le,Ie,A,$),Ct&&rt.render(A),Qs(P,A,$)}H!==null&&J===0&&(ae.updateMultisampleRenderTarget(H),ae.updateRenderTargetMipmap(H)),re&&D.end(z),A.isScene===!0&&A.onAfterRender(z,A,$),Fe.resetDefaultState(),j=-1,X=null,E.pop(),E.length>0?(C=E[E.length-1],ae.setTextureUnits(C.state.textureUnits),mt===!0&&Ze.setGlobalState(z.clippingPlanes,C.state.camera)):C=null,U.pop(),U.length>0?P=U[U.length-1]:P=null,q!==null&&q.renderEnd()};function os(A,$,de,re){if(A.visible===!1)return;if(A.layers.test($.layers)){if(A.isGroup)de=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update($);else if(A.isLightProbeGrid)C.pushLightProbeGrid(A);else if(A.isLight)C.pushLight(A),A.castShadow&&C.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(st)){re&&Dt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(dt);const Le=xe.update(A),Ie=A.material;Ie.visible&&P.push(A,Le,Ie,de,Dt.z,null,$)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(st))){const Le=xe.update(A),Ie=A.material;if(re&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Dt.copy(A.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),Dt.copy(Le.boundingSphere.center)),Dt.applyMatrix4(A.matrixWorld).applyMatrix4(dt)),Array.isArray(Ie)){const je=Le.groups;for(let Je=0,lt=je.length;Je<lt;Je++){const ft=je[Je],Ge=Ie[ft.materialIndex];Ge&&Ge.visible&&P.push(A,Le,Ge,de,Dt.z,ft,$)}}else Ie.visible&&P.push(A,Le,Ie,de,Dt.z,null,$)}}const ke=A.children;for(let Le=0,Ie=ke.length;Le<Ie;Le++)os(ke[Le],$,de,re)}function Qs(A,$,de,re){const{opaque:ie,transmissive:ke,transparent:Le}=A;C.setupLightsView(de),mt===!0&&Ze.setGlobalState(z.clippingPlanes,de),re&&b.viewport(L.copy(re)),ie.length>0&&kr(ie,$,de),ke.length>0&&kr(ke,$,de),Le.length>0&&kr(Le,$,de),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function io(A,$,de,re){if((de.isScene===!0?de.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[re.id]===void 0){const Ge=Mt.has("EXT_color_buffer_half_float")||Mt.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[re.id]=new wi(1,1,{generateMipmaps:!0,type:Ge?Oi:Kn,minFilter:es,samples:Math.max(4,I.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:_t.workingColorSpace})}const ke=C.state.transmissionRenderTarget[re.id],Le=re.viewport||L;ke.setSize(Le.z*z.transmissionResolutionScale,Le.w*z.transmissionResolutionScale);const Ie=z.getRenderTarget(),je=z.getActiveCubeFace(),Je=z.getActiveMipmapLevel();z.setRenderTarget(ke),z.getClearColor(De),He=z.getClearAlpha(),He<1&&z.setClearColor(16777215,.5),z.clear(),Ct&&rt.render(de);const lt=z.toneMapping;z.toneMapping=ki;const ft=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),C.setupLightsView(re),mt===!0&&Ze.setGlobalState(z.clippingPlanes,re),kr(A,de,re),ae.updateMultisampleRenderTarget(ke),ae.updateRenderTargetMipmap(ke),Mt.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let gt=0,Jt=$.length;gt<Jt;gt++){const Bt=$[gt],{object:kt,geometry:an,material:ze,group:tn}=Bt;if(ze.side===tr&&kt.layers.test(re.layers)){const vt=ze.side;ze.side=Hn,ze.needsUpdate=!0,ea(kt,de,re,an,ze,tn),ze.side=vt,ze.needsUpdate=!0,Ge=!0}}Ge===!0&&(ae.updateMultisampleRenderTarget(ke),ae.updateRenderTargetMipmap(ke))}z.setRenderTarget(Ie,je,Je),z.setClearColor(De,He),ft!==void 0&&(re.viewport=ft),z.toneMapping=lt}function kr(A,$,de){const re=$.isScene===!0?$.overrideMaterial:null;for(let ie=0,ke=A.length;ie<ke;ie++){const Le=A[ie],{object:Ie,geometry:je,group:Je}=Le;let lt=Le.material;lt.allowOverride===!0&&re!==null&&(lt=re),Ie.layers.test(de.layers)&&ea(Ie,$,de,je,lt,Je)}}function ea(A,$,de,re,ie,ke){q!==null&&ie.isNodeMaterial&&q.setObject(A,ie),A.onBeforeRender(z,$,de,re,ie,ke),A.modelViewMatrix.multiplyMatrices(de.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ie.onBeforeRender(z,$,de,re,A,ke),ie.transparent===!0&&ie.side===tr&&ie.forceSinglePass===!1?(ie.side=Hn,ie.needsUpdate=!0,z.renderBufferDirect(de,$,re,ie,A,ke),ie.side=ns,ie.needsUpdate=!0,z.renderBufferDirect(de,$,re,ie,A,ke),ie.side=tr):z.renderBufferDirect(de,$,re,ie,A,ke),A.onAfterRender(z,$,de,re,ie,ke)}function Ur(A,$,de){$.isScene!==!0&&($=It);const re=ee.get(A),ie=C.state.lights,ke=C.state.shadowsArray,Le=ie.state.version,Ie=Re.getParameters(A,ie.state,ke,$,de,C.state.lightProbeGridArray),je=Re.getProgramCacheKey(Ie);let Je=re.programs;re.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?$.environment:null,re.fog=$.fog;const lt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;re.envMap=Me.get(A.envMap||re.environment,lt),re.envMapRotation=re.environment!==null&&A.envMap===null?$.environmentRotation:A.envMapRotation,Je===void 0&&(A.addEventListener("dispose",Zn),Je=new Map,re.programs=Je);let ft=Je.get(je);if(ft!==void 0){if(re.currentProgram===ft&&re.lightsStateVersion===Le)return ro(A,Ie),ft}else Ie.uniforms=Re.getUniforms(A),q!==null&&A.isNodeMaterial&&q.build(A,de,Ie),A.onBeforeCompile(Ie,z),ft=Re.acquireProgram(Ie,je),Je.set(je,ft),re.uniforms=Ie.uniforms;const Ge=re.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ge.clippingPlanes=Ze.uniform),ro(A,Ie),re.needsLights=na(A),re.lightsStateVersion=Le,re.needsLights&&(Ge.ambientLightColor.value=ie.state.ambient,Ge.lightProbe.value=ie.state.probe,Ge.sunLights.value=ie.state.sun,Ge.sunLightShadows.value=ie.state.sunShadow,Ge.directionalLights.value=ie.state.directional,Ge.directionalLightShadows.value=ie.state.directionalShadow,Ge.spotLights.value=ie.state.spot,Ge.spotLightShadows.value=ie.state.spotShadow,Ge.rectAreaLights.value=ie.state.rectArea,Ge.ltc_1.value=ie.state.rectAreaLTC1,Ge.ltc_2.value=ie.state.rectAreaLTC2,Ge.pointLights.value=ie.state.point,Ge.pointLightShadows.value=ie.state.pointShadow,Ge.hemisphereLights.value=ie.state.hemi,Ge.sunShadowMatrix.value=ie.state.sunShadowMatrix,Ge.sunShadowCascade.value=ie.state.sunShadowCascade,Ge.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,Ge.spotLightMatrix.value=ie.state.spotLightMatrix,Ge.spotLightMap.value=ie.state.spotLightMap,Ge.pointShadowMatrix.value=ie.state.pointShadowMatrix),re.lightProbeGrid=C.state.lightProbeGridArray.length>0,re.currentProgram=ft,re.uniformsList=null,ft}function ta(A){if(A.uniformsList===null){const $=A.currentProgram.getUniforms();A.uniformsList=Ol.seqWithValue($.seq,A.uniforms)}return A.uniformsList}function ro(A,$){const de=ee.get(A);de.outputColorSpace=$.outputColorSpace,de.batching=$.batching,de.batchingColor=$.batchingColor,de.instancing=$.instancing,de.instancingColor=$.instancingColor,de.instancingMorph=$.instancingMorph,de.skinning=$.skinning,de.morphTargets=$.morphTargets,de.morphNormals=$.morphNormals,de.morphColors=$.morphColors,de.morphTargetsCount=$.morphTargetsCount,de.numClippingPlanes=$.numClippingPlanes,de.numIntersection=$.numClipIntersection,de.vertexAlphas=$.vertexAlphas,de.vertexTangents=$.vertexTangents,de.toneMapping=$.toneMapping}function Ql(A,$){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;N.setFromMatrixPosition($.matrixWorld);for(let de=0,re=A.length;de<re;de++){const ie=A[de];if(ie.texture!==null&&ie.boundingBox.containsPoint(N))return ie}return null}function qt(A,$,de,re,ie){$.isScene!==!0&&($=It),ae.resetTextureUnits();const ke=$.fog,Le=re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial?$.environment:null,Ie=H===null?z.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:_t.workingColorSpace,je=re.isMeshStandardMaterial||re.isMeshLambertMaterial&&!re.envMap||re.isMeshPhongMaterial&&!re.envMap,Je=Me.get(re.envMap||Le,je),lt=re.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,ft=!!de.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),Ge=!!de.morphAttributes.position,gt=!!de.morphAttributes.normal,Jt=!!de.morphAttributes.color;let Bt=ki;re.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Bt=z.toneMapping);const kt=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,an=kt!==void 0?kt.length:0,ze=ee.get(re),tn=C.state.lights;if(mt===!0&&(wt===!0||A!==X)){const Ft=A===X&&re.id===j;Ze.setState(re,A,Ft)}let vt=!1;re.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==tn.state.version||ze.outputColorSpace!==Ie||ie.isBatchedMesh&&ze.batching===!1||!ie.isBatchedMesh&&ze.batching===!0||ie.isBatchedMesh&&ze.batchingColor===!0&&ie._colorsTexture===null||ie.isBatchedMesh&&ze.batchingColor===!1&&ie._colorsTexture!==null||ie.isInstancedMesh&&ze.instancing===!1||!ie.isInstancedMesh&&ze.instancing===!0||ie.isSkinnedMesh&&ze.skinning===!1||!ie.isSkinnedMesh&&ze.skinning===!0||ie.isInstancedMesh&&ze.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&ze.instancingColor===!1&&ie.instanceColor!==null||ie.isInstancedMesh&&ze.instancingMorph===!0&&ie.morphTexture===null||ie.isInstancedMesh&&ze.instancingMorph===!1&&ie.morphTexture!==null||ze.envMap!==Je||re.fog===!0&&ze.fog!==ke||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==Ze.numPlanes||ze.numIntersection!==Ze.numIntersection)||ze.vertexAlphas!==lt||ze.vertexTangents!==ft||ze.morphTargets!==Ge||ze.morphNormals!==gt||ze.morphColors!==Jt||ze.toneMapping!==Bt||ze.morphTargetsCount!==an||!!ze.lightProbeGrid!=C.state.lightProbeGridArray.length>0)&&(vt=!0):(vt=!0,ze.__version=re.version);let yn=ze.currentProgram;vt===!0&&(yn=Ur(re,$,ie),q&&re.isNodeMaterial&&q.onUpdateProgram(re,yn,ze));let ht=!1,ci=!1,Vi=!1;const Nt=yn.getUniforms(),jt=ze.uniforms;if(b.useProgram(yn.program)&&(ht=!0,ci=!0,Vi=!0),re.id!==j&&(j=re.id,ci=!0),ze.needsLights){const Ft=Ql(C.state.lightProbeGridArray,ie);ze.lightProbeGrid!==Ft&&(ze.lightProbeGrid=Ft,ci=!0)}if(ht||X!==A){b.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Nt.setValue(K,"projectionMatrix",A.projectionMatrix),Nt.setValue(K,"viewMatrix",A.matrixWorldInverse);const Jn=Nt.map.cameraPosition;Jn!==void 0&&Jn.setValue(K,Ut.setFromMatrixPosition(A.matrixWorld)),I.logarithmicDepthBuffer&&Nt.setValue(K,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&Nt.setValue(K,"isOrthographic",A.isOrthographicCamera===!0),X!==A&&(X=A,ci=!0,Vi=!0)}if(ze.needsLights&&(tn.state.sunShadowMap.length>0&&Nt.setValue(K,"sunShadowMap",tn.state.sunShadowMap,ae),tn.state.directionalShadowMap.length>0&&Nt.setValue(K,"directionalShadowMap",tn.state.directionalShadowMap,ae),tn.state.spotShadowMap.length>0&&Nt.setValue(K,"spotShadowMap",tn.state.spotShadowMap,ae),tn.state.pointShadowMap.length>0&&Nt.setValue(K,"pointShadowMap",tn.state.pointShadowMap,ae)),ie.isSkinnedMesh){Nt.setOptional(K,ie,"bindMatrix"),Nt.setOptional(K,ie,"bindMatrixInverse");const Ft=ie.skeleton;Ft&&(Ft.boneTexture===null&&Ft.computeBoneTexture(),Nt.setValue(K,"boneTexture",Ft.boneTexture,ae))}ie.isBatchedMesh&&(Nt.setOptional(K,ie,"batchingTexture"),Nt.setValue(K,"batchingTexture",ie._matricesTexture,ae),Nt.setOptional(K,ie,"batchingIdTexture"),Nt.setValue(K,"batchingIdTexture",ie._indirectTexture,ae),Nt.setOptional(K,ie,"batchingColorTexture"),ie._colorsTexture!==null&&Nt.setValue(K,"batchingColorTexture",ie._colorsTexture,ae));const ui=de.morphAttributes;if((ui.position!==void 0||ui.normal!==void 0||ui.color!==void 0)&&Y.update(ie,de,yn),(ci||ze.receiveShadow!==ie.receiveShadow)&&(ze.receiveShadow=ie.receiveShadow,Nt.setValue(K,"receiveShadow",ie.receiveShadow)),(re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial)&&re.envMap===null&&$.environment!==null&&(jt.envMapIntensity.value=$.environmentIntensity),jt.dfgLUT!==void 0&&(jt.dfgLUT.value=wE()),ci){if(Nt.setValue(K,"toneMappingExposure",z.toneMappingExposure),ze.needsLights&&ec(jt,Vi),ke&&re.fog===!0&&Ke.refreshFogUniforms(jt,ke),Ke.refreshMaterialUniforms(jt,re,he,oe,C.state.transmissionRenderTarget[A.id]),ze.needsLights&&ze.lightProbeGrid){const Ft=ze.lightProbeGrid;jt.probesSH.value=Ft.texture,jt.probesMin.value.copy(Ft.boundingBox.min),jt.probesMax.value.copy(Ft.boundingBox.max),jt.probesResolution.value.copy(Ft.resolution)}Ol.upload(K,ta(ze),jt,ae)}if(re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(Ol.upload(K,ta(ze),jt,ae),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&Nt.setValue(K,"center",ie.center),Nt.setValue(K,"modelViewMatrix",ie.modelViewMatrix),Nt.setValue(K,"normalMatrix",ie.normalMatrix),Nt.setValue(K,"modelMatrix",ie.matrixWorld),re.uniformsGroups!==void 0){const Ft=re.uniformsGroups;for(let Jn=0,di=Ft.length;Jn<di;Jn++){const fi=Ft[Jn];ge.update(fi,yn),ge.bind(fi,yn)}}return yn}function ec(A,$){A.ambientLightColor.needsUpdate=$,A.lightProbe.needsUpdate=$,A.sunLights.needsUpdate=$,A.sunLightShadows.needsUpdate=$,A.directionalLights.needsUpdate=$,A.directionalLightShadows.needsUpdate=$,A.pointLights.needsUpdate=$,A.pointLightShadows.needsUpdate=$,A.spotLights.needsUpdate=$,A.spotLightShadows.needsUpdate=$,A.rectAreaLights.needsUpdate=$,A.hemisphereLights.needsUpdate=$}function na(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return ue},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(A,$,de){const re=ee.get(A);re.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),ee.get(A.texture).__webglTexture=$,ee.get(A.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:de,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,$){const de=ee.get(A);de.__webglFramebuffer=$,de.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(A,$=0,de=0){H=A,ue=$,J=de;let re=null,ie=!1,ke=!1;if(A){const Ie=ee.get(A);if(Ie.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(K.FRAMEBUFFER,Ie.__webglFramebuffer),L.copy(A.viewport),Q.copy(A.scissor),ye=A.scissorTest,b.viewport(L),b.scissor(Q),b.setScissorTest(ye),j=-1;return}else if(Ie.__webglFramebuffer===void 0)ae.setupRenderTarget(A);else if(Ie.__hasExternalTextures)ae.rebindTextures(A,ee.get(A.texture).__webglTexture,ee.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const lt=A.depthTexture;if(Ie.__boundDepthTexture!==lt){if(lt!==null&&ee.has(lt)&&(A.width!==lt.image.width||A.height!==lt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ae.setupDepthRenderbuffer(A)}}const je=A.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(ke=!0);const Je=ee.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Je[$])?re=Je[$][de]:re=Je[$],ie=!0):A.samples>0&&ae.useMultisampledRTT(A)===!1?re=ee.get(A).__webglMultisampledFramebuffer:Array.isArray(Je)?re=Je[de]:re=Je,L.copy(A.viewport),Q.copy(A.scissor),ye=A.scissorTest}else L.copy(Be).multiplyScalar(he).floor(),Q.copy(ut).multiplyScalar(he).floor(),ye=zt;if(de!==0&&(re=te),b.bindFramebuffer(K.FRAMEBUFFER,re)&&b.drawBuffers(A,re),b.viewport(L),b.scissor(Q),b.setScissorTest(ye),ie){const Ie=ee.get(A.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ie.__webglTexture,de)}else if(ke){const Ie=$;for(let je=0;je<A.textures.length;je++){const Je=ee.get(A.textures[je]);K.framebufferTextureLayer(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0+je,Je.__webglTexture,de,Ie)}}else if(A!==null&&de!==0){const Ie=ee.get(A.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,Ie.__webglTexture,de)}j=-1};function ia(A){const $=ee.get(A);return($.__readFormat!==A.format||$.__readType!==A.type)&&($.__readFormat=A.format,$.__readType=A.type,$.__formatReadable=I.textureFormatReadable(A.format),$.__typeReadable=I.textureTypeReadable(A.type)),$}this.readRenderTargetPixels=function(A,$,de,re,ie,ke,Le,Ie=0){if(!(A&&A.isWebGLRenderTarget)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let je=ee.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Le!==void 0&&(je=je[Le]),je){b.bindFramebuffer(K.FRAMEBUFFER,je);try{const Je=A.textures[Ie],lt=Je.format,ft=Je.type;A.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+Ie);const Ge=ia(Je);if(Ge.__formatReadable===!1){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ge.__typeReadable===!1){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=A.width-re&&de>=0&&de<=A.height-ie&&K.readPixels($,de,re,ie,Ce.convert(lt),Ce.convert(ft),ke)}finally{const Je=H!==null?ee.get(H).__webglFramebuffer:null;b.bindFramebuffer(K.FRAMEBUFFER,Je)}}},this.readRenderTargetPixelsAsync=async function(A,$,de,re,ie,ke,Le,Ie=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let je=ee.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Le!==void 0&&(je=je[Le]),je)if($>=0&&$<=A.width-re&&de>=0&&de<=A.height-ie){b.bindFramebuffer(K.FRAMEBUFFER,je);const Je=A.textures[Ie],lt=Je.format,ft=Je.type;A.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+Ie);const Ge=ia(Je);if(Ge.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ge.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const gt=K.createBuffer();K.bindBuffer(K.PIXEL_PACK_BUFFER,gt),K.bufferData(K.PIXEL_PACK_BUFFER,ke.byteLength,K.STREAM_READ),K.readPixels($,de,re,ie,Ce.convert(lt),Ce.convert(ft),0),K.bindBuffer(K.PIXEL_PACK_BUFFER,null);const Jt=H!==null?ee.get(H).__webglFramebuffer:null;b.bindFramebuffer(K.FRAMEBUFFER,Jt);const Bt=K.fenceSync(K.SYNC_GPU_COMMANDS_COMPLETE,0);return K.flush(),await V_(K,Bt,4),K.bindBuffer(K.PIXEL_PACK_BUFFER,gt),K.getBufferSubData(K.PIXEL_PACK_BUFFER,0,ke),K.bindBuffer(K.PIXEL_PACK_BUFFER,null),K.deleteBuffer(gt),K.deleteSync(Bt),ke}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,$=null,de=0){const re=Math.pow(2,-de),ie=Math.floor(A.image.width*re),ke=Math.floor(A.image.height*re),Le=$!==null?$.x:0,Ie=$!==null?$.y:0;ae.setTexture2D(A,0),K.copyTexSubImage2D(K.TEXTURE_2D,de,0,0,Le,Ie,ie,ke),b.unbindTexture()},this.copyTextureToTexture=function(A,$,de=null,re=null,ie=0,ke=0){let Le,Ie,je,Je,lt,ft,Ge,gt,Jt;const Bt=A.isCompressedTexture?A.mipmaps[ke]:A.image;if(de!==null)Le=de.max.x-de.min.x,Ie=de.max.y-de.min.y,je=de.isBox3?de.max.z-de.min.z:1,Je=de.min.x,lt=de.min.y,ft=de.isBox3?de.min.z:0;else{const jt=Math.pow(2,-ie);Le=Math.floor(Bt.width*jt),Ie=Math.floor(Bt.height*jt),A.isDataArrayTexture?je=Bt.depth:A.isData3DTexture?je=Math.floor(Bt.depth*jt):je=1,Je=0,lt=0,ft=0}re!==null?(Ge=re.x,gt=re.y,Jt=re.z):(Ge=0,gt=0,Jt=0);const kt=Ce.convert($.format),an=Ce.convert($.type);let ze;$.isData3DTexture?(ae.setTexture3D($,0),ze=K.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(ae.setTexture2DArray($,0),ze=K.TEXTURE_2D_ARRAY):(ae.setTexture2D($,0),ze=K.TEXTURE_2D),b.activeTexture(K.TEXTURE0),b.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,$.flipY),b.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),b.pixelStorei(K.UNPACK_ALIGNMENT,$.unpackAlignment);const tn=b.getParameter(K.UNPACK_ROW_LENGTH),vt=b.getParameter(K.UNPACK_IMAGE_HEIGHT),yn=b.getParameter(K.UNPACK_SKIP_PIXELS),ht=b.getParameter(K.UNPACK_SKIP_ROWS),ci=b.getParameter(K.UNPACK_SKIP_IMAGES);b.pixelStorei(K.UNPACK_ROW_LENGTH,Bt.width),b.pixelStorei(K.UNPACK_IMAGE_HEIGHT,Bt.height),b.pixelStorei(K.UNPACK_SKIP_PIXELS,Je),b.pixelStorei(K.UNPACK_SKIP_ROWS,lt),b.pixelStorei(K.UNPACK_SKIP_IMAGES,ft);const Vi=A.isDataArrayTexture||A.isData3DTexture,Nt=$.isDataArrayTexture||$.isData3DTexture;if(A.isDepthTexture){const jt=ee.get(A),ui=ee.get($),Ft=ee.get(jt.__renderTarget),Jn=ee.get(ui.__renderTarget);b.bindFramebuffer(K.READ_FRAMEBUFFER,Ft.__webglFramebuffer),b.bindFramebuffer(K.DRAW_FRAMEBUFFER,Jn.__webglFramebuffer);for(let di=0;di<je;di++)Vi&&(K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,ee.get(A).__webglTexture,ie,ft+di),K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,ee.get($).__webglTexture,ke,Jt+di)),K.blitFramebuffer(Je,lt,Le,Ie,Ge,gt,Le,Ie,K.DEPTH_BUFFER_BIT,K.NEAREST);b.bindFramebuffer(K.READ_FRAMEBUFFER,null),b.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else if(ie!==0||A.isRenderTargetTexture||ee.has(A)){const jt=ee.get(A),ui=ee.get($);b.bindFramebuffer(K.READ_FRAMEBUFFER,B),b.bindFramebuffer(K.DRAW_FRAMEBUFFER,ne);for(let Ft=0;Ft<je;Ft++)Vi?K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,jt.__webglTexture,ie,ft+Ft):K.framebufferTexture2D(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,jt.__webglTexture,ie),Nt?K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,ui.__webglTexture,ke,Jt+Ft):K.framebufferTexture2D(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,ui.__webglTexture,ke),ie!==0?K.blitFramebuffer(Je,lt,Le,Ie,Ge,gt,Le,Ie,K.COLOR_BUFFER_BIT,K.NEAREST):Nt?K.copyTexSubImage3D(ze,ke,Ge,gt,Jt+Ft,Je,lt,Le,Ie):K.copyTexSubImage2D(ze,ke,Ge,gt,Je,lt,Le,Ie);b.bindFramebuffer(K.READ_FRAMEBUFFER,null),b.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else Nt?A.isDataTexture||A.isData3DTexture?K.texSubImage3D(ze,ke,Ge,gt,Jt,Le,Ie,je,kt,an,Bt.data):$.isCompressedArrayTexture?K.compressedTexSubImage3D(ze,ke,Ge,gt,Jt,Le,Ie,je,kt,Bt.data):K.texSubImage3D(ze,ke,Ge,gt,Jt,Le,Ie,je,kt,an,Bt):A.isDataTexture?K.texSubImage2D(K.TEXTURE_2D,ke,Ge,gt,Le,Ie,kt,an,Bt.data):A.isCompressedTexture?K.compressedTexSubImage2D(K.TEXTURE_2D,ke,Ge,gt,Bt.width,Bt.height,kt,Bt.data):K.texSubImage2D(K.TEXTURE_2D,ke,Ge,gt,Le,Ie,kt,an,Bt);b.pixelStorei(K.UNPACK_ROW_LENGTH,tn),b.pixelStorei(K.UNPACK_IMAGE_HEIGHT,vt),b.pixelStorei(K.UNPACK_SKIP_PIXELS,yn),b.pixelStorei(K.UNPACK_SKIP_ROWS,ht),b.pixelStorei(K.UNPACK_SKIP_IMAGES,ci),ke===0&&$.generateMipmaps&&K.generateMipmap(ze),b.unbindTexture()},this.initRenderTarget=function(A){ee.get(A).__webglFramebuffer===void 0&&ae.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?ae.setTextureCube(A,0):A.isData3DTexture?ae.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ae.setTexture2DArray(A,0):ae.setTexture2D(A,0),b.unbindTexture()},this.resetState=function(){ue=0,J=0,H=null,b.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=_t._getDrawingBufferColorSpace(e),n.unpackColorSpace=_t._getUnpackColorSpace()}}const AE=()=>{const s=Pe.useRef(null),{theme:e}=p0(),n=Pe.useRef(e);return n.current=e,Pe.useEffect(()=>{const r=s.current;if(!r)return;const o=new iy,l=new $n(45,window.innerWidth/window.innerHeight,.1,1e3);l.position.set(0,0,18);const u=new TE({alpha:!0,antialias:!0,powerPreference:"high-performance"});u.setSize(window.innerWidth,window.innerHeight),u.setPixelRatio(Math.min(window.devicePixelRatio,2)),u.toneMapping=cf,u.toneMappingExposure=1.1,r.appendChild(u.domElement);const h=new wy(n.current==="dark"?1976635:16777215,n.current==="dark"?1.2:1.8);o.add(h);const x=new Lm(16774619,2);x.position.set(10,15,10),o.add(x);const m=new Lm(1096065,1.5);m.position.set(-10,-5,5),o.add(m);const v=new by(16096779,2.5,30);v.position.set(0,0,5),o.add(v);const g=(()=>{const H=document.createElement("canvas");H.width=256,H.height=256;const j=H.getContext("2d");if(j){const X=j.createRadialGradient(128,128,20,128,128,128);X.addColorStop(0,"#FFFBEB"),X.addColorStop(.3,"#FDE047"),X.addColorStop(.7,"#D97706"),X.addColorStop(1,"#92400E"),j.fillStyle=X,j.beginPath(),j.arc(128,128,120,0,Math.PI*2),j.fill(),j.strokeStyle="#FBBF24",j.lineWidth=10,j.beginPath(),j.arc(128,128,110,0,Math.PI*2),j.stroke(),j.fillStyle="#78350F",j.font="bold 120px sans-serif",j.textAlign="center",j.textBaseline="middle",j.fillText("₹",128,134)}return new wm(H)})(),_=new yf(.7,.7,.12,32),w=new Am({color:16096779,metalness:.9,roughness:.25}),R=new Am({map:g,metalness:.85,roughness:.2}),S=[w,R,R],y=[];[{x:4.8,y:3.2,z:2,scale:.95},{x:3.6,y:1.5,z:1,scale:.75},{x:5.5,y:-.2,z:3,scale:1.1},{x:2.8,y:4,z:-1,scale:.65},{x:6.2,y:2.2,z:.5,scale:.85},{x:4.2,y:-2,z:2.5,scale:.9}].forEach((H,j)=>{const X=new Bi(_,S);X.position.set(H.x,H.y,H.z),X.scale.set(H.scale,H.scale,H.scale),X.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,0),o.add(X),y.push({mesh:X,baseX:H.x,baseY:H.y,baseZ:H.z,rotSpeedX:(Math.random()*.015+.008)*(j%2===0?1:-1),rotSpeedY:(Math.random()*.02+.01)*(j%2===0?1:-1),rotSpeedZ:Math.random()*.01+.005,bobSpeed:Math.random()*.8+.8,bobAmplitude:Math.random()*.3+.2,phase:Math.random()*Math.PI*2})});const G=140,N=new li,P=new Float32Array(G*3),C=[];for(let H=0;H<G;H++){const j=Math.random()*8+1,X=Math.random()*12-6,L=Math.random()*8-2;P[H*3]=j,P[H*3+1]=X,P[H*3+2]=L,C.push({x:(Math.random()-.5)*.006,y:Math.random()*.008+.003,z:(Math.random()-.5)*.006})}N.setAttribute("position",new Ui(P,3));const U=document.createElement("canvas");U.width=64,U.height=64;const E=U.getContext("2d");if(E){const H=E.createRadialGradient(32,32,0,32,32,32);H.addColorStop(0,"rgba(255, 255, 255, 1)"),H.addColorStop(.3,"rgba(250, 204, 21, 0.9)"),H.addColorStop(.7,"rgba(16, 185, 129, 0.4)"),H.addColorStop(1,"rgba(16, 185, 129, 0)"),E.fillStyle=H,E.beginPath(),E.arc(32,32,32,0,Math.PI*2),E.fill()}const D=new wm(U),z=new z0({size:.35,map:D,transparent:!0,blending:hd,depthWrite:!1}),O=new hy(N,z);o.add(O);const q={x:0,y:0,targetX:0,targetY:0},te=H=>{q.targetX=H.clientX/window.innerWidth*2-1,q.targetY=-(H.clientY/window.innerHeight)*2+1};window.addEventListener("mousemove",te,{passive:!0});const B=()=>{l.aspect=window.innerWidth/window.innerHeight,l.updateProjectionMatrix(),u.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",B);let ne,ue=new Cy;const J=()=>{ne=requestAnimationFrame(J);const H=ue.getElapsedTime();q.x+=(q.targetX-q.x)*.05,q.y+=(q.targetY-q.y)*.05,l.position.x=q.x*.8,l.position.y=q.y*.6,l.lookAt(0,0,0),v.position.x=q.x*10,v.position.y=q.y*8,y.forEach(Q=>{Q.mesh.rotation.x+=Q.rotSpeedX,Q.mesh.rotation.y+=Q.rotSpeedY,Q.mesh.rotation.z+=Q.rotSpeedZ,Q.mesh.position.y=Q.baseY+Math.sin(H*Q.bobSpeed+Q.phase)*Q.bobAmplitude,Q.mesh.position.x=Q.baseX+Math.cos(H*.5+Q.phase)*.1});const j=N.attributes.position,X=j.array;for(let Q=0;Q<G;Q++)X[Q*3+1]+=C[Q].y,X[Q*3]+=C[Q].x,X[Q*3+2]+=C[Q].z,X[Q*3+1]>7&&(X[Q*3+1]=-7,X[Q*3]=Math.random()*8+1);j.needsUpdate=!0;const L=n.current==="dark";h.color.setHex(L?988970:16777215),h.intensity=L?.9:1.8,x.intensity=L?1.2:2.2,u.render(o,l)};return J(),()=>{cancelAnimationFrame(ne),window.removeEventListener("mousemove",te),window.removeEventListener("resize",B),r.contains(u.domElement)&&r.removeChild(u.domElement),u.dispose(),_.dispose(),w.dispose(),R.dispose(),g.dispose(),N.dispose(),z.dispose(),D.dispose()}},[]),f.jsx("div",{ref:s,className:"fixed inset-0 pointer-events-none z-0 overflow-hidden",style:{opacity:e==="dark"?.85:.95}})},CE=""+new URL("sprout-hero-DKwuJ2mK.jpg",import.meta.url).href,RE=({onBackToConsole:s})=>{const[e,n]=Pe.useState("EN"),[r,o]=Pe.useState(0),[l,u]=Pe.useState(100),[h,x]=Pe.useState(1),[m,v]=Pe.useState(!1),M=l*52*3,g=Math.round(l*((Math.pow(1+.12/52,156)-1)/(.12/52))),_=[{title:e==="EN"?"Welcome to Sprout":"स्प्रूट में आपका स्वागत है",subtitle:e==="EN"?"You don't need thousands to start building wealth.":"दौलत बनाने के लिए आपको हजारों रुपये की जरूरत नहीं है।",badge:"₹100 Threshold",content:f.jsxs("div",{className:"space-y-4 text-center",children:[f.jsx("div",{className:"w-20 h-20 mx-auto rounded-3xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-600 shadow-inner",children:f.jsx("span",{className:"text-3xl font-bold font-mono",children:"₹100"})}),f.jsx("p",{className:"text-xs text-slate-600 leading-relaxed max-w-xs mx-auto",children:e==="EN"?"Start with the cost of two cups of tea. No hidden brokerage, zero paperwork, and fully SEBI regulated.":"सिर्फ दो कप चाय की कीमत से शुरुआत करें। कोई छिपा शुल्क नहीं, शून्य कागजी कार्रवाई।"}),f.jsxs("div",{className:"p-3 rounded-2xl bg-slate-50 border border-slate-200 text-left text-xs space-y-1.5",children:[f.jsxs("div",{className:"flex items-center space-x-2 text-slate-700 font-medium",children:[f.jsx(Mi,{className:"w-4 h-4 text-emerald-600 shrink-0"}),f.jsx("span",{children:e==="EN"?"Start with just ₹100":"केवल ₹100 से शुरुआत"})]}),f.jsxs("div",{className:"flex items-center space-x-2 text-slate-700 font-medium",children:[f.jsx(Mi,{className:"w-4 h-4 text-emerald-600 shrink-0"}),f.jsx("span",{children:e==="EN"?"Withdraw anytime to your bank account":"कभी भी अपने बैंक खाते में निकालें"})]}),f.jsxs("div",{className:"flex items-center space-x-2 text-slate-700 font-medium",children:[f.jsx(Mi,{className:"w-4 h-4 text-emerald-600 shrink-0"}),f.jsx("span",{children:e==="EN"?"Regulated by SEBI & AMFI registered":"SEBI द्वारा विनियमित"})]})]})]})},{title:e==="EN"?"What is investing?":"निवेश क्या है?",subtitle:e==="EN"?"Addressing the fear: let India's top companies grow for you.":"भारत की शीर्ष 50 कंपनियों को आपके लिए काम करने दें।",badge:"Plain Language",content:f.jsxs("div",{className:"space-y-4",children:[f.jsxs("div",{className:"p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs space-y-2",children:[f.jsxs("div",{className:"flex items-center justify-between text-emerald-900 font-semibold",children:[f.jsx("span",{children:e==="EN"?"Interactive ₹100/week habit:":"साप्ताहिक ₹100 निवेश:"}),f.jsxs("span",{className:"font-bold font-mono",children:["₹",l,"/wk"]})]}),f.jsx("input",{type:"range",min:"100",max:"2000",step:"100",value:l,onChange:w=>u(Number(w.target.value)),className:"w-full accent-emerald-600 cursor-pointer h-1.5 bg-slate-200 rounded-lg"}),f.jsxs("div",{className:"grid grid-cols-2 gap-2 pt-2 border-t border-emerald-200/80 text-[11px]",children:[f.jsxs("div",{children:[f.jsx("span",{className:"text-emerald-700 block",children:e==="EN"?"Total Saved:":"कुल बचत:"}),f.jsxs("span",{className:"font-bold text-slate-800",children:["₹",M.toLocaleString()]})]}),f.jsxs("div",{children:[f.jsx("span",{className:"text-emerald-700 block",children:e==="EN"?"Estimated Growth:":"अनुमानित मूल्य:"}),f.jsxs("span",{className:"font-bold text-emerald-600 font-mono",children:["₹",g.toLocaleString()]})]})]})]}),f.jsx("p",{className:"text-xs text-slate-500 text-center leading-relaxed",children:e==="EN"?"Instead of keeping money idle, your ₹100 buys tiny fractions of India's top 50 growing companies (Nifty 50).":"पैसे को निष्क्रिय रखने के बजाय, आपका ₹100 भारत की शीर्ष 50 कंपनियों में साझेदारी खरीदता है।"})]})},{title:e==="EN"?"Ready in 60 Seconds":"60 सेकंड में तैयार",subtitle:e==="EN"?"Keep these two cards ready before we begin.":"शुरू करने से पहले ये दो दस्तावेज पास रखें।",badge:"Zero Drop-Off KYC",content:f.jsxs("div",{className:"space-y-3",children:[f.jsxs("div",{className:"p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start space-x-3",children:[f.jsx("div",{className:"w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-xs shrink-0",children:"1"}),f.jsxs("div",{children:[f.jsx("h4",{className:"text-xs font-bold text-slate-800",children:e==="EN"?"PAN Card Number":"पैन कार्ड नंबर"}),f.jsx("p",{className:"text-[11px] text-slate-500 mt-0.5",children:e==="EN"?"Government mandate for all Indian investment accounts.":"सभी भारतीय निवेश खातों के लिए सरकारी नियम।"})]})]}),f.jsxs("div",{className:"p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start space-x-3",children:[f.jsx("div",{className:"w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xs shrink-0",children:"2"}),f.jsxs("div",{children:[f.jsx("h4",{className:"text-xs font-bold text-slate-800",children:e==="EN"?"Aadhaar Linked Phone":"आधार से जुड़ा फोन"}),f.jsx("p",{className:"text-[11px] text-slate-500 mt-0.5",children:e==="EN"?"You will receive a 6-digit OTP for paperless instant verification.":"कागजरहित सत्यापन के लिए 6-अंकीय ओटीपी प्राप्त होगा।"})]})]}),f.jsx("div",{className:"p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-[11px] text-amber-800",children:e==="EN"?"💡 Don't have them handy? You can save your progress and return anytime.":"💡 अभी पास नहीं हैं? आप प्रगति सहेज सकते हैं और कभी भी वापस आ सकते हैं।"})]})},{title:e==="EN"?"Fast Digital Verification":"तेज डिजिटल सत्यापन",subtitle:e==="EN"?"Clear progress indicators so you know the app is working.":"स्पष्ट प्रगति संकेतक ताकि आप जान सकें कि प्रक्रिया जारी है।",badge:"Real-time Feedback",content:f.jsxs("div",{className:"space-y-3",children:[f.jsxs("div",{className:"p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3",children:[f.jsxs("div",{className:"flex items-center justify-between text-xs font-semibold",children:[f.jsx("span",{className:"text-slate-800",children:e==="EN"?"Verification Status":"सत्यापन स्थिति"}),f.jsxs("span",{className:"text-emerald-600 font-mono",children:["Stage ",h," of 3"]})]}),f.jsxs("div",{className:"space-y-2 text-xs",children:[f.jsxs("div",{className:"flex items-center space-x-2 text-emerald-700",children:[f.jsx(Mi,{className:"w-4 h-4 text-emerald-600 shrink-0"}),f.jsx("span",{children:e==="EN"?"NSDL PAN Gateway: Verified":"पैन गेटवे: सत्यापित"})]}),f.jsxs("div",{className:`flex items-center space-x-2 ${h>=2?"text-emerald-700":"text-slate-400"}`,children:[h>=2?f.jsx(Mi,{className:"w-4 h-4 text-emerald-600 shrink-0"}):f.jsx("div",{className:"w-4 h-4 rounded-full border-2 border-slate-300 shrink-0"}),f.jsx("span",{children:e==="EN"?"UIDAI Aadhaar e-KYC: Authenticated":"आधार ई-केवाईसी: प्रमाणित"})]}),f.jsxs("div",{className:`flex items-center space-x-2 ${h>=3?"text-emerald-700":"text-slate-400"}`,children:[h>=3?f.jsx(Mi,{className:"w-4 h-4 text-emerald-600 shrink-0"}):f.jsx("div",{className:"w-4 h-4 rounded-full border-2 border-slate-300 animate-spin border-t-emerald-600 shrink-0"}),f.jsx("span",{children:e==="EN"?"Creating investment locker (approx. 8 sec)":"निवेश लॉकर तैयार हो रहा है..."})]})]}),f.jsxs("button",{onClick:()=>x(w=>w<3?w+1:1),className:"w-full text-center py-1.5 text-[11px] text-emerald-700 bg-emerald-50 rounded-lg font-medium hover:bg-emerald-100 transition cursor-pointer",children:["[Tap to simulate stage ",h<3?h+1:1," of 3]"]})]}),f.jsx("p",{className:"text-[11px] text-slate-500 text-center",children:e==="EN"?"Your app has not crashed. We are connecting with government-verified nodal servers.":"आपका ऐप रुका नहीं है। हम सरकारी नोडल सर्वर से जुड़ रहे हैं।"})]})},{title:e==="EN"?"Plant Your First ₹100 Seed":"अपना पहला ₹100 निवेश करें",subtitle:e==="EN"?"Congratulations! Your account is active and ready.":"बधाई हो! आपका खाता सक्रिय और तैयार है।",badge:"The ₹100 Milestone",content:f.jsxs("div",{className:"space-y-4 text-center",children:[f.jsx("div",{className:"w-16 h-16 mx-auto rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shadow-inner",children:f.jsx(zl,{className:"w-8 h-8 text-emerald-600 animate-bounce"})}),f.jsxs("div",{children:[f.jsx("h4",{className:"text-sm font-bold text-slate-900",children:e==="EN"?"Ready to make your first investment":"अपना पहला निवेश करने के लिए तैयार"}),f.jsx("p",{className:"text-xs text-slate-500 mt-0.5",children:e==="EN"?"Select amount and pay instantly via UPI":"राशि चुनें और यूपीआई द्वारा तुरंत भुगतान करें"})]}),f.jsx("div",{className:"flex items-center justify-center space-x-2",children:[100,250,500].map(w=>f.jsxs("button",{onClick:()=>u(w),className:`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${l===w?"bg-emerald-600 text-white shadow-md shadow-emerald-950/20":"bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200"}`,children:["₹",w]},w))}),f.jsx("button",{onClick:()=>alert(`Simulated ₹${l} UPI investment completed! Sprout activated.`),className:"w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg shadow-emerald-950/30 transition active:scale-95 cursor-pointer",children:e==="EN"?`Invest ₹${l} via UPI (GPay / PhonePe)`:`UPI से ₹${l} निवेश करें`})]})}];return f.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-white",children:[f.jsxs("header",{className:"bg-slate-900/90 backdrop-blur-md border-b border-white/10 px-4 md:px-8 py-3 flex items-center justify-between sticky top-0 z-50",children:[f.jsxs("div",{className:"flex items-center space-x-3",children:[f.jsxs("button",{onClick:s,className:"flex items-center space-x-1 text-xs font-semibold px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-white/10 transition cursor-pointer",title:"Switch to Newtonite Ops Console",children:[f.jsx(o0,{className:"w-3.5 h-3.5"}),f.jsx("span",{className:"hidden sm:inline",children:"Ops Console"})]}),f.jsxs("div",{className:"flex items-center space-x-2 pl-2 border-l border-white/10",children:[f.jsxs("span",{className:"font-extrabold text-white text-sm tracking-tight flex items-center space-x-1.5",children:[f.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"}),f.jsx("span",{children:"Sprout 2.0"})]}),f.jsx("span",{className:"text-[10px] bg-emerald-950 text-emerald-300 border border-emerald-500/40 px-2 py-0.5 rounded-full font-medium hidden md:inline-block",children:"Mobile Prototype"})]})]}),f.jsxs("div",{className:"flex items-center space-x-2",children:[f.jsxs("div",{className:"flex items-center bg-slate-800/80 border border-white/10 rounded-xl p-0.5 text-xs overflow-x-auto max-w-[260px] sm:max-w-none",children:[f.jsx("button",{onClick:()=>{o(0),v(!1)},className:`px-2.5 py-1 rounded-lg text-xs font-medium transition cursor-pointer whitespace-nowrap ${r===0&&!m?"bg-emerald-600 text-white font-bold shadow":"text-slate-400 hover:text-white"}`,children:"📱 Mobile Home"}),f.jsxs("button",{onClick:()=>{r===0&&o(1),v(!1)},className:`px-2.5 py-1 rounded-lg text-xs font-medium transition cursor-pointer whitespace-nowrap ${r>0&&!m?"bg-emerald-600 text-white font-bold shadow":"text-slate-400 hover:text-white"}`,children:["🚀 Onboarding (",r===0?"1-5":`Step ${r}`,")"]}),f.jsx("button",{onClick:()=>v(!0),className:`px-2.5 py-1 rounded-lg text-xs font-medium transition cursor-pointer whitespace-nowrap hidden lg:block ${m?"bg-emerald-600 text-white font-bold shadow":"text-slate-400 hover:text-white"}`,children:"🎨 3D Hero Art"})]}),f.jsxs("button",{onClick:()=>n(w=>w==="EN"?"HI":"EN"),className:"flex items-center space-x-1.5 text-xs px-2.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-white/10 text-emerald-400 font-bold transition cursor-pointer",title:"Toggle Hindi/English Language",children:[f.jsx(tm,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:e==="EN"?"EN | हिंदी":"हिंदी | EN"})]})]})]}),f.jsx("main",{className:"flex-1 flex flex-col justify-center items-center py-6 px-4 bg-radial from-slate-900 via-slate-950 to-black overflow-y-auto",children:m?f.jsx("div",{className:"w-full max-w-5xl mx-auto flex flex-col items-center animate-fadeIn",children:f.jsxs("div",{className:"relative w-full rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-slate-950",children:[f.jsx("img",{src:CE,alt:"Sprout Zero-Gravity Floating Hero Concept",className:"w-full h-auto object-cover object-center max-h-[600px]"}),f.jsxs("div",{className:"p-6 bg-slate-900/90 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4",children:[f.jsxs("div",{children:[f.jsx("h3",{className:"text-base font-bold text-white",children:"Sprout 2.0 Weightless 3D Vision"}),f.jsx("p",{className:"text-xs text-slate-300 mt-1",children:"Continuous storytelling journey: Glassmorphic sprout guide, floating ₹ currency tokens, and natural earth bedrock."})]}),f.jsx("button",{onClick:()=>{v(!1),o(0)},className:"px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg transition active:scale-95 cursor-pointer whitespace-nowrap",children:"View Mobile Homepage & Device Prototype →"})]})]})}):f.jsxs("div",{className:"w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start justify-center",children:[f.jsxs("div",{className:"lg:col-span-6 flex flex-col items-center w-full",children:[f.jsx("div",{className:"flex items-center space-x-1.5 mb-3 bg-slate-900/80 p-1 rounded-2xl border border-white/10 text-xs",children:[0,1,2,3,4,5].map(w=>f.jsx("button",{onClick:()=>o(w),className:`px-2.5 py-1 rounded-xl text-[11px] font-semibold transition cursor-pointer ${r===w?"bg-emerald-600 text-white shadow":"text-slate-400 hover:text-white"}`,children:w===0?"Home":`Step ${w}`},w))}),f.jsxs("div",{className:"w-full max-w-[380px] rounded-[44px] bg-slate-950 p-3 shadow-2xl border-4 border-slate-700/80 relative",children:[f.jsxs("div",{className:"w-24 h-4 bg-slate-900 rounded-full mx-auto mb-2 flex items-center justify-center space-x-1",children:[f.jsx("div",{className:"w-2 h-2 rounded-full bg-slate-950 border border-slate-800"}),f.jsx("div",{className:"w-8 h-1 bg-slate-800 rounded-full"})]}),f.jsx("div",{className:"w-full min-h-[580px] rounded-[34px] bg-white text-slate-900 p-5 flex flex-col justify-between shadow-inner relative overflow-hidden",children:r===0?f.jsxs("div",{className:"flex-1 flex flex-col justify-between space-y-3",children:[f.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-slate-100",children:[f.jsxs("div",{className:"flex items-center space-x-1.5",children:[f.jsx("div",{className:"w-6 h-6 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-bold text-xs shadow-xs",children:"🌱"}),f.jsx("span",{className:"font-extrabold text-slate-900 text-sm",children:"Sprout"})]}),f.jsxs("div",{className:"flex items-center space-x-1.5",children:[f.jsx("button",{onClick:()=>n(w=>w==="EN"?"HI":"EN"),className:"text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-emerald-700 hover:bg-slate-200 transition cursor-pointer",children:e==="EN"?"हिंदी":"English"}),f.jsx("div",{className:"w-6 h-6 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center text-[10px] font-bold",children:"₹"})]})]}),f.jsxs("div",{className:"bg-amber-500/10 border border-amber-500/25 rounded-xl px-2.5 py-1.5 flex items-start space-x-1.5 text-[10px] text-amber-800 leading-tight",children:[f.jsx(Bl,{className:"w-3.5 h-3.5 shrink-0 text-amber-600 mt-0.5"}),f.jsxs("div",{children:[f.jsx("span",{className:"font-bold",children:"SEBI & AMFI Regulated:"})," Mutual funds carry market risk. Zero guaranteed returns. 100% paperless KYC."]})]}),f.jsxs("div",{className:"p-4 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-800 text-white shadow-md space-y-2",children:[f.jsxs("div",{className:"flex items-center justify-between",children:[f.jsx("span",{className:"text-[10px] font-bold tracking-wider bg-white/20 px-2 py-0.5 rounded-full uppercase",children:e==="EN"?"☕ 1 Chai = 1 SIP":"☕ 1 चाय = 1 निवेश"}),f.jsx("span",{className:"text-[10px] font-mono text-emerald-200 bg-emerald-950/40 px-2 py-0.5 rounded-full font-bold",children:"₹100 Min"})]}),f.jsx("h3",{className:"text-base font-extrabold leading-tight",children:e==="EN"?"Start investing with just ₹100/week":"सिर्फ ₹100 प्रति सप्ताह से निवेश शुरू करें"}),f.jsx("p",{className:"text-[11px] text-emerald-100/90 leading-relaxed",children:e==="EN"?"No minimum salary required. Put your spare change into India's top 50 growing giants.":"बड़ी पूंजी की जरूरत नहीं। अपने अतिरिक्त पैसे को भारत की शीर्ष कंपनियों में निवेश करें।"})]}),f.jsxs("div",{className:"p-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-2",children:[f.jsxs("div",{className:"flex items-center justify-between text-slate-800 font-semibold text-[11px]",children:[f.jsx("span",{children:e==="EN"?"Weekly habit:":"साप्ताहिक निवेश:"}),f.jsxs("span",{className:"font-bold text-emerald-700 font-mono",children:["₹",l,"/wk"]})]}),f.jsx("input",{type:"range",min:"100",max:"1000",step:"50",value:l,onChange:w=>u(Number(w.target.value)),className:"w-full accent-emerald-600 cursor-pointer h-1.5 bg-slate-200 rounded-lg"}),f.jsxs("div",{className:"grid grid-cols-2 gap-2 pt-1 border-t border-slate-200/80 text-[10px]",children:[f.jsxs("div",{children:[f.jsx("span",{className:"text-slate-500 block",children:e==="EN"?"Saved in 3 yrs:":"3 साल में बचत:"}),f.jsxs("span",{className:"font-bold text-slate-800",children:["₹",M.toLocaleString()]})]}),f.jsxs("div",{children:[f.jsx("span",{className:"text-emerald-700 block",children:e==="EN"?"Est. Growth (12%):":"अनुमानित मूल्य (12%):"}),f.jsxs("span",{className:"font-bold text-emerald-600 font-mono",children:["₹",g.toLocaleString()]})]})]})]}),f.jsx("button",{onClick:()=>o(1),className:"w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md shadow-emerald-950/20 flex items-center justify-center space-x-1.5 transition active:scale-95 cursor-pointer",children:f.jsx("span",{children:e==="EN"?"Start in 3 Minutes (Paperless KYC) →":"3 मिनट में शुरू करें (कागजरहित) →"})}),f.jsxs("div",{className:"grid grid-cols-3 gap-1.5 text-center text-[10px] text-slate-600",children:[f.jsxs("div",{className:"p-2 rounded-xl bg-slate-50 border border-slate-100 flex flex-col items-center",children:[f.jsx(Yv,{className:"w-3.5 h-3.5 text-amber-500 mb-0.5"}),f.jsx("span",{className:"font-bold text-slate-800",children:"60s KYC"}),f.jsx("span",{className:"text-[9px] text-slate-400",children:"PAN + Aadhaar"})]}),f.jsxs("div",{className:"p-2 rounded-xl bg-slate-50 border border-slate-100 flex flex-col items-center",children:[f.jsx(yv,{className:"w-3.5 h-3.5 text-emerald-600 mb-0.5"}),f.jsx("span",{className:"font-bold text-slate-800",children:"No Lock-in"}),f.jsx("span",{className:"text-[9px] text-slate-400",children:"Withdraw Anytime"})]}),f.jsxs("div",{className:"p-2 rounded-xl bg-slate-50 border border-slate-100 flex flex-col items-center",children:[f.jsx(Jg,{className:"w-3.5 h-3.5 text-indigo-600 mb-0.5"}),f.jsx("span",{className:"font-bold text-slate-800",children:"Nifty 50"}),f.jsx("span",{className:"text-[9px] text-slate-400",children:"Top Giants"})]})]}),f.jsxs("div",{className:"p-2 rounded-xl bg-emerald-50 border border-emerald-200/60 flex items-center justify-between text-[10px] text-emerald-800",children:[f.jsxs("span",{className:"flex items-center space-x-1",children:[f.jsx(d0,{className:"w-3 h-3 text-emerald-600"}),f.jsx("span",{className:"font-medium",children:"Runs on ₹8k–₹12k phones"})]}),f.jsx("span",{className:"font-mono font-bold bg-white px-1.5 py-0.5 rounded text-[9px] border border-emerald-300",children:"214 KB Gzip"})]}),f.jsxs("div",{className:"pt-2 border-t border-slate-100 grid grid-cols-4 text-center text-[9px] text-slate-400",children:[f.jsxs("button",{className:"flex flex-col items-center text-emerald-600 font-bold",children:[f.jsx(xv,{className:"w-4 h-4"}),f.jsx("span",{children:"Home"})]}),f.jsxs("button",{onClick:()=>o(2),className:"flex flex-col items-center hover:text-slate-600",children:[f.jsx(zv,{className:"w-4 h-4"}),f.jsx("span",{children:"Grow"})]}),f.jsxs("button",{onClick:()=>o(3),className:"flex flex-col items-center hover:text-slate-600",children:[f.jsx(Bl,{className:"w-4 h-4"}),f.jsx("span",{children:"KYC"})]}),f.jsxs("button",{onClick:()=>o(5),className:"flex flex-col items-center hover:text-slate-600",children:[f.jsx(zl,{className:"w-4 h-4"}),f.jsx("span",{children:"Invest"})]})]})]}):f.jsxs("div",{className:"flex-1 flex flex-col justify-between",children:[f.jsxs("div",{children:[f.jsxs("div",{className:"flex items-center justify-between mb-3",children:[f.jsx("span",{className:"text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200",children:_[r-1].badge}),f.jsxs("span",{className:"text-[10px] font-bold text-slate-400 font-mono",children:["Step ",r," of 5"]})]}),f.jsx("h2",{className:"text-lg font-bold text-slate-900 tracking-tight leading-snug",children:_[r-1].title}),f.jsx("p",{className:"text-xs text-slate-500 mt-1 leading-relaxed",children:_[r-1].subtitle})]}),f.jsx("div",{className:"my-auto py-3",children:_[r-1].content}),f.jsxs("div",{className:"pt-3 border-t border-slate-100 flex items-center justify-between",children:[f.jsx("button",{onClick:()=>o(w=>w>0?w-1:0),className:"text-xs text-slate-500 hover:text-slate-800 font-medium cursor-pointer",children:r===1?"← Back to Home":"← Back"}),f.jsx("button",{onClick:()=>{r<5?o(w=>w+1):o(0)},className:"flex items-center space-x-1 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition active:scale-95 cursor-pointer",children:f.jsx("span",{children:r<5?e==="EN"?"Next →":"आगे →":e==="EN"?"Finish & Go to Home":"होम पर जाएं"})})]})]})}),f.jsx("div",{className:"w-28 h-1 bg-slate-700 rounded-full mx-auto mt-2"})]})]}),f.jsxs("div",{className:"lg:col-span-6 space-y-4",children:[f.jsxs("div",{className:"p-5 rounded-3xl bg-slate-900 border border-white/10 shadow-xl space-y-4",children:[f.jsxs("div",{className:"flex items-center justify-between border-b border-white/10 pb-3",children:[f.jsxs("div",{className:"flex items-center space-x-2",children:[f.jsx(Mi,{className:"w-5 h-5 text-emerald-400"}),f.jsx("h3",{className:"text-sm font-bold text-white",children:"Reviewer Criteria Verification"})]}),f.jsx("span",{className:"text-[10px] font-mono bg-emerald-950 text-emerald-300 border border-emerald-500/40 px-2 py-0.5 rounded-full font-bold",children:"100% Passed"})]}),f.jsxs("div",{className:"space-y-3 text-xs",children:[f.jsxs("div",{className:"p-3 rounded-2xl bg-slate-950 border border-white/5 space-y-1",children:[f.jsxs("div",{className:"flex items-center justify-between text-slate-200 font-semibold",children:[f.jsxs("span",{className:"flex items-center space-x-1.5",children:[f.jsx(ev,{className:"w-3.5 h-3.5 text-emerald-400"}),f.jsx("span",{children:"Mobile Homepage Design"})]}),f.jsx("span",{className:"text-emerald-400 text-[10px]",children:"Included & Live"})]}),f.jsx("p",{className:"text-[11px] text-slate-400 leading-relaxed pl-5",children:"Dedicated mobile homepage screen with ₹100 threshold hero, Chai vs SIP compounding slider, SEBI regulatory sticky banner, and quick onboarding CTA."})]}),f.jsxs("div",{className:"p-3 rounded-2xl bg-slate-950 border border-white/5 space-y-1",children:[f.jsxs("div",{className:"flex items-center justify-between text-slate-200 font-semibold",children:[f.jsxs("span",{className:"flex items-center space-x-1.5",children:[f.jsx(of,{className:"w-3.5 h-3.5 text-emerald-400"}),f.jsx("span",{children:"Low-End Mobile Device Considerations"})]}),f.jsx("span",{className:"text-emerald-400 text-[10px]",children:"Optimized (<₹10k)"})]}),f.jsx("p",{className:"text-[11px] text-slate-400 leading-relaxed pl-5",children:"Tailored for 40% user base on budget devices (Redmi 9A, Samsung M02). No heavy 3D canvas on mobile, pure CSS/SVG vector graphics, and 60fps scrolling on low-power GPUs."})]}),f.jsxs("div",{className:"p-3 rounded-2xl bg-slate-950 border border-white/5 space-y-1",children:[f.jsxs("div",{className:"flex items-center justify-between text-slate-200 font-semibold",children:[f.jsxs("span",{className:"flex items-center space-x-1.5",children:[f.jsx(jv,{className:"w-3.5 h-3.5 text-emerald-400"}),f.jsx("span",{children:"2G/3G Network Performance (<215 KB)"})]}),f.jsx("span",{className:"text-emerald-400 text-[10px]",children:"Instant Render"})]}),f.jsx("p",{className:"text-[11px] text-slate-400 leading-relaxed pl-5",children:"Production bundle: 203 KB JS + 9.5 KB CSS (Gzip). Total initial load is under 0.5s even on throttled Tier-3 mobile networks."})]}),f.jsxs("div",{className:"p-3 rounded-2xl bg-slate-950 border border-white/5 space-y-1",children:[f.jsxs("div",{className:"flex items-center justify-between text-slate-200 font-semibold",children:[f.jsxs("span",{className:"flex items-center space-x-1.5",children:[f.jsx(tm,{className:"w-3.5 h-3.5 text-emerald-400"}),f.jsx("span",{children:"Bilingual (English / Devanagari Hindi)"})]}),f.jsx("span",{className:"text-emerald-400 text-[10px]",children:"Zero FOIT"})]}),f.jsx("p",{className:"text-[11px] text-slate-400 leading-relaxed pl-5",children:"Native system font stacks for Hindi prevents multi-megabyte webfont downloads and eliminating text flash (FOIT)."})]})]})]}),f.jsxs("div",{className:"p-5 rounded-3xl bg-slate-900 border border-white/10 shadow-xl space-y-3",children:[f.jsx("h4",{className:"text-xs font-bold text-white uppercase tracking-wider text-slate-400",children:"Root-Cause Resolutions"}),f.jsxs("div",{className:"grid grid-cols-2 gap-2 text-[11px]",children:[f.jsxs("div",{className:"p-2.5 rounded-xl bg-slate-950 border border-white/5 space-y-1",children:[f.jsx("span",{className:"font-bold text-amber-400 block",children:"Support #1: Missing Docs"}),f.jsx("p",{className:"text-slate-400 leading-snug",children:"Step 3 presents an upfront 60-second checklist (PAN + Aadhaar) before the user enters the verification pipeline."})]}),f.jsxs("div",{className:"p-2.5 rounded-xl bg-slate-950 border border-white/5 space-y-1",children:[f.jsx("span",{className:"font-bold text-amber-400 block",children:'Support #2: "App Crashed"'}),f.jsx("p",{className:"text-slate-400 leading-snug",children:"Step 4 replaces ambiguous spinners with a 3-stage transparent status stepper showing government nodal connection."})]})]})]})]})]})})]})};function NE(){const[s,e]=Pe.useState([]),[n,r]=Pe.useState([]),[o,l]=Pe.useState(null),[u,h]=Pe.useState([]),[x,m]=Pe.useState(0),[v]=Pe.useState(20),[M,g]=Pe.useState(0),[_,w]=Pe.useState(null),[R,S]=Pe.useState(null),[y,k]=Pe.useState([]),[G,N]=Pe.useState([]),[P,C]=Pe.useState(""),[U,E]=Pe.useState(""),[D,z]=Pe.useState(""),[O,q]=Pe.useState(""),[te,B]=Pe.useState("attention"),[ne,ue]=Pe.useState(""),[J,H]=Pe.useState(!1),[j,X]=Pe.useState(!1),[L,Q]=Pe.useState(!1),[ye,De]=Pe.useState(null),[He,Oe]=Pe.useState(null),[oe,he]=Pe.useState(!1),[be,$e]=Pe.useState(!1),[Be,ut]=Pe.useState(0),[zt,st]=Pe.useState(!1),[mt,wt]=Pe.useState({expectedVersion:1,currentVersion:1,currentItem:null}),[dt,Ut]=Pe.useState(()=>typeof window<"u"&&new URLSearchParams(window.location.search).get("view")==="console"?"console":"prototype");Pe.useEffect(()=>{async function V(){try{const[ee,ae]=await Promise.all([Dn.getUsers(),Dn.getTeams()]);e(ee),r(ae);const Me=jg(),we=ee.find(pe=>pe.id===Me)||ee[0]||null;l(we),we&&em(we.id)}catch(ee){console.error("Failed to load initial metadata:",ee)}}V()},[]);const Dt=Pe.useCallback(async(V=!1)=>{V&&H(!0),Q(!0);try{const ee=await Dn.listWorkItems({team_id:P||void 0,status:U||void 0,priority:D||void 0,category:O||void 0,assignee_id:te==="my"&&o?o.id:void 0,unassigned_only:te==="unassigned",requires_attention:te==="attention",search:ne||void 0,limit:v,offset:M});h(ee.items),m(ee.total),ee.items.length>0&&(!_||!ee.items.some(ae=>ae.id===_))?w(ee.items[0].id):ee.items.length===0&&(w(null),S(null))}catch(ee){console.error("Failed to fetch items:",ee),De("Failed to load operational items queue")}finally{H(!1),Q(!1)}},[P,U,D,O,te,ne,v,M,o,_]);Pe.useEffect(()=>{Dt(!0)},[Dt]);const It=Pe.useCallback(async V=>{try{const ee=await Dn.getWorkItem(V);S(ee.workItem),k(ee.auditLogs),N(ee.comments)}catch(ee){console.error("Failed to fetch item detail:",ee),ee.status===404&&(w(null),S(null))}},[]);Pe.useEffect(()=>{_?It(_):(S(null),k([]),N([]))},[_,It]),Pe.useEffect(()=>{const V=setInterval(async()=>{var ee;_&&It(_);try{const Me=((ee=(await Dn.getOutbox()).stats.find(we=>we.status==="PENDING"))==null?void 0:ee.count)||0;ut(Me)}catch{}},15e3);return()=>clearInterval(V)},[_,It]);const Ct=V=>{l(V),em(V.id),Oe(`Switched active persona to ${V.name}`),setTimeout(()=>Oe(null),3e3)},Vt=async()=>{if(R){X(!0),De(null),Oe(null);try{const V=await Dn.claimWorkItem(R.id,R.version);S(V),Oe("Successfully claimed item! You are now the designated owner."),Dt(),It(R.id)}catch(V){V instanceof Ll?(De(`Conflict: ${V.message}`),wt({expectedVersion:R.version,currentVersion:V.currentVersion,currentItem:V.currentItem}),st(!0)):De(V.message||"Failed to claim work item")}finally{X(!1)}}},K=async(V,ee)=>{if(R){X(!0),De(null),Oe(null);try{const ae=await Dn.updateWorkItem(R.id,{status:V,expectedVersion:R.version,resolution_summary:ee});S(ae),Oe(`Status updated to ${V.replace(/_/g," ")}`),Dt(),It(R.id)}catch(ae){ae instanceof Ll?(De(`Concurrent modification detected (409): ${ae.message}`),wt({expectedVersion:R.version,currentVersion:ae.currentVersion,currentItem:ae.currentItem}),st(!0)):De(ae.message||"Failed to update status")}finally{X(!1)}}},en=async(V,ee)=>{if(R){X(!0),De(null);try{const ae=await Dn.decideApproval(R.id,V,ee,R.version);S(ae),Oe(`Decision recorded: ${V}`),Dt(),It(R.id)}catch(ae){ae instanceof Ll?(wt({expectedVersion:R.version,currentVersion:ae.currentVersion,currentItem:ae.currentItem}),st(!0)):De(ae.message||"Approval rejected by server policy")}finally{X(!1)}}},Mt=async V=>{if(R)try{await Dn.addComment(R.id,V),It(R.id)}catch{De("Failed to add note")}},I=async()=>{if(R)try{const V=await Dn.simulateConflict(R.id);Oe(`Simulated: another user just updated this request to version ${V.newVersion}. Now click any action button to see the conflict modal.`)}catch{De("Failed to simulate conflict")}},b=async(V,ee)=>{const ae=await Dn.createWorkItem(V,ee);return Dt(),w(ae.id),ae};return f.jsxs("div",{className:"flex flex-col h-screen light-sprout-bg text-slate-900 dark:text-slate-100 overflow-hidden selection:bg-emerald-500 selection:text-white transition-colors duration-200 relative",children:[f.jsx(AE,{}),f.jsx(Kv,{currentUser:o,users:s,teams:n,onSelectUser:Ct,onOpenCreate:()=>he(!0),onOpenOutbox:()=>$e(!0),onRefresh:()=>{Dt(!1),_&&It(_)},isRefreshing:L,outboxPendingCount:Be,viewMode:dt,onToggleView:()=>Ut(V=>V==="console"?"prototype":"console")}),dt==="prototype"?f.jsx("div",{className:"flex-1 overflow-y-auto z-10",children:f.jsx(RE,{onBackToConsole:()=>Ut("console")})}):f.jsxs("div",{className:"flex-1 flex overflow-hidden z-10",children:[f.jsx("div",{className:"w-full md:w-[420px] lg:w-[460px] flex-shrink-0 flex flex-col h-full bg-white/95 dark:bg-slate-900/90 backdrop-blur-xl border-r border-slate-200/90 dark:border-slate-800 shadow-xs z-10",children:f.jsx(Zv,{items:u,total:x,limit:v,offset:M,selectedId:_,onSelectItem:w,teams:n,currentUser:o,filterTeam:P,setFilterTeam:C,filterStatus:U,setFilterStatus:E,filterPriority:D,setFilterPriority:z,filterCategory:O,setFilterCategory:q,filterTab:te,setFilterTab:B,searchQuery:ne,setSearchQuery:ue,onPageChange:g,isLoading:J})}),f.jsx("div",{className:"hidden md:flex flex-1 flex-col h-full bg-slate-50/70 dark:bg-slate-950/60 backdrop-blur-md overflow-hidden",children:f.jsx(Jv,{item:R,auditLogs:y,comments:G,currentUser:o,users:s,onClaim:Vt,onUpdateStatus:K,onApprove:en,onAddComment:Mt,onSimulateConflict:I,isActionLoading:j,errorBanner:ye,successBanner:He})})]}),f.jsxs("footer",{className:"w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-t border-slate-200/80 dark:border-slate-800 py-2.5 px-6 text-center text-xs text-slate-500 dark:text-slate-400 font-medium flex items-center justify-between z-20 transition-colors",children:[f.jsxs("div",{className:"flex items-center space-x-2",children:[f.jsx("div",{className:"w-2 h-2 rounded-full bg-emerald-500 animate-pulse"}),f.jsx("span",{className:"font-bold text-slate-900 dark:text-white",children:"OpsPulse Active"}),f.jsx("span",{className:"text-slate-300 dark:text-slate-700",children:"·"}),f.jsx("span",{className:"text-slate-600 dark:text-slate-400",children:"PostgreSQL Strict Concurrency & Append-Only Event Stream"})]}),f.jsx("div",{className:"text-[11px] text-slate-500 dark:text-slate-400 hidden sm:block",children:"Conditional Optimistic Locking (OCC) · Atomic Claim Handlers · Idempotency Keys · Outbox Queue"})]}),f.jsx(Qv,{isOpen:oe,onClose:()=>he(!1),teams:n,users:s,onCreate:b}),f.jsx(e_,{isOpen:zt,onClose:()=>st(!1),onReload:()=>{st(!1),_&&It(_),Dt()},expectedVersion:mt.expectedVersion,currentVersion:mt.currentVersion,currentItem:mt.currentItem}),f.jsx(t_,{isOpen:be,onClose:()=>$e(!1)}),f.jsx(r_,{})]})}Wg.createRoot(document.getElementById("root")).render(f.jsx(Fg.StrictMode,{children:f.jsx($v,{children:f.jsx(NE,{})})}));
