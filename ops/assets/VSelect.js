import{b as Ye,f as ye,m as Je,c as Qe,u as Ze,d as ke,e as et,g as tt,h as lt,i as nt}from"./VTextarea.js";import{q as Y,b as r,L as F,ab as pe,p as H,I as re,ac as at,S as ce,ad as ot,$ as ut,A as Z,ae as Ve,s as w,af as _e,ag as be,ah as it,a1 as U,u as ee,ai as st,G as K,D as z,aj as Le,ak as Me,al as Ue,F as X,i as me,am as He,an as rt,B as se,ao as ct,x as dt,ap as ge,Q as ae,a8 as xe,aq as ft,ar as vt,as as mt,at as gt,H as Q,y as $e,au as ht,av as Se,aw as yt,ax as de,ay as Vt,az as bt,aA as xt,aB as Ne,aC as Ct,K as Pe,aD as fe,aE as wt,aF as he,T as kt,aG as pt,a3 as St,aH as Pt,N as ue,P as It,aI as At,aJ as Tt,a9 as Et,aK as Dt,aL as Bt,aM as Ie,aN as Ft,aO as Rt,j as Ot,g as _t,aP as Ae}from"./index.js";import{a as ie,d as Lt,s as Te,b as Mt,g as Ut,n as Ht}from"./easing.js";import{m as $t,a as Ee,V as De,g as Nt}from"./VOverlay.js";const qt=H({target:[Object,Array]},"v-dialog-transition"),qe=Y()({name:"VDialogTransition",props:qt(),setup(e,d){let{slots:a}=d;const o={onBeforeEnter(l){l.style.pointerEvents="none",l.style.visibility="hidden"},async onEnter(l,v){var m;await new Promise(h=>requestAnimationFrame(h)),await new Promise(h=>requestAnimationFrame(h)),l.style.visibility="";const{x:f,y:u,sx:n,sy:c,speed:b}=Fe(e.target,l),P=ie(l,[{transform:`translate(${f}px, ${u}px) scale(${n}, ${c})`,opacity:0},{}],{duration:225*b,easing:Lt});(m=Be(l))==null||m.forEach(h=>{ie(h,[{opacity:0},{opacity:0,offset:.33},{}],{duration:225*2*b,easing:Te})}),P.finished.then(()=>v())},onAfterEnter(l){l.style.removeProperty("pointer-events")},onBeforeLeave(l){l.style.pointerEvents="none"},async onLeave(l,v){var m;await new Promise(h=>requestAnimationFrame(h));const{x:f,y:u,sx:n,sy:c,speed:b}=Fe(e.target,l);ie(l,[{},{transform:`translate(${f}px, ${u}px) scale(${n}, ${c})`,opacity:0}],{duration:125*b,easing:Mt}).finished.then(()=>v()),(m=Be(l))==null||m.forEach(h=>{ie(h,[{},{opacity:0,offset:.2},{opacity:0}],{duration:125*2*b,easing:Te})})},onAfterLeave(l){l.style.removeProperty("pointer-events")}};return()=>e.target?r(pe,F({name:"dialog-transition"},o,{css:!1}),a):r(pe,{name:"dialog-transition"},a)}});function Be(e){var a;const d=(a=e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list"))==null?void 0:a.children;return d&&[...d]}function Fe(e,d){const a=Ut(e),o=Ht(d),[l,v]=getComputedStyle(d).transformOrigin.split(" ").map(g=>parseFloat(g)),[f,u]=getComputedStyle(d).getPropertyValue("--v-overlay-anchor-origin").split(" ");let n=a.left+a.width/2;f==="left"||u==="left"?n-=a.width/2:(f==="right"||u==="right")&&(n+=a.width/2);let c=a.top+a.height/2;f==="top"||u==="top"?c-=a.height/2:(f==="bottom"||u==="bottom")&&(c+=a.height/2);const b=a.width/o.width,P=a.height/o.height,m=Math.max(1,b,P),h=b/m||0,k=P/m||0,x=o.width*o.height/(window.innerWidth*window.innerHeight),i=x>.12?Math.min(1.5,(x-.12)*10+1):1;return{x:n-(l+o.left),y:c-(v+o.top),sx:h,sy:k,speed:i}}const Ke=Symbol.for("vuetify:selection-control-group"),ze=H({color:String,disabled:{type:Boolean,default:null},defaultsTarget:String,error:Boolean,id:String,inline:Boolean,falseIcon:re,trueIcon:re,ripple:{type:[Boolean,Object],default:!0},multiple:{type:Boolean,default:null},name:String,readonly:{type:Boolean,default:null},modelValue:null,type:String,valueComparator:{type:Function,default:at},...ce(),...ot(),...ut()},"SelectionControlGroup"),Kt=H({...ze({defaultsTarget:"VSelectionControl"})},"VSelectionControlGroup");Y()({name:"VSelectionControlGroup",props:Kt(),emits:{"update:modelValue":e=>!0},setup(e,d){let{slots:a}=d;const o=Z(e,"modelValue"),l=Ve(),v=w(()=>e.id||`v-selection-control-group-${l}`),f=w(()=>e.name||v.value),u=new Set;return _e(Ke,{modelValue:o,forceUpdate:()=>{u.forEach(n=>n())},onForceUpdate:n=>{u.add(n),be(()=>{u.delete(n)})}}),it({[e.defaultsTarget]:{color:U(e,"color"),disabled:U(e,"disabled"),density:U(e,"density"),error:U(e,"error"),inline:U(e,"inline"),modelValue:o,multiple:w(()=>!!e.multiple||e.multiple==null&&Array.isArray(o.value)),name:f,falseIcon:U(e,"falseIcon"),trueIcon:U(e,"trueIcon"),readonly:U(e,"readonly"),ripple:U(e,"ripple"),type:U(e,"type"),valueComparator:U(e,"valueComparator")}}),ee(()=>{var n;return r("div",{class:["v-selection-control-group",{"v-selection-control-group--inline":e.inline},e.class],style:e.style,role:e.type==="radio"?"radiogroup":void 0},[(n=a.default)==null?void 0:n.call(a)])}),{}}});const je=H({label:String,baseColor:String,trueValue:null,falseValue:null,value:null,...ce(),...ze()},"VSelectionControl");function zt(e){const d=He(Ke,void 0),{densityClasses:a}=rt(e),o=Z(e,"modelValue"),l=w(()=>e.trueValue!==void 0?e.trueValue:e.value!==void 0?e.value:!0),v=w(()=>e.falseValue!==void 0?e.falseValue:!1),f=w(()=>!!e.multiple||e.multiple==null&&Array.isArray(o.value)),u=w({get(){const h=d?d.modelValue.value:o.value;return f.value?se(h).some(k=>e.valueComparator(k,l.value)):e.valueComparator(h,l.value)},set(h){if(e.readonly)return;const k=h?l.value:v.value;let x=k;f.value&&(x=h?[...se(o.value),k]:se(o.value).filter(i=>!e.valueComparator(i,l.value))),d?d.modelValue.value=x:o.value=x}}),{textColorClasses:n,textColorStyles:c}=ct(w(()=>{if(!(e.error||e.disabled))return u.value?e.color:e.baseColor})),{backgroundColorClasses:b,backgroundColorStyles:P}=dt(w(()=>u.value&&!e.error&&!e.disabled?e.color:e.baseColor)),m=w(()=>u.value?e.trueIcon:e.falseIcon);return{group:d,densityClasses:a,trueValue:l,falseValue:v,model:u,textColorClasses:n,textColorStyles:c,backgroundColorClasses:b,backgroundColorStyles:P,icon:m}}const Re=Y()({name:"VSelectionControl",directives:{Ripple:st},inheritAttrs:!1,props:je(),emits:{"update:modelValue":e=>!0},setup(e,d){let{attrs:a,slots:o}=d;const{group:l,densityClasses:v,icon:f,model:u,textColorClasses:n,textColorStyles:c,backgroundColorClasses:b,backgroundColorStyles:P,trueValue:m}=zt(e),h=Ve(),k=K(!1),x=K(!1),i=z(),g=w(()=>e.id||`input-${h}`),V=w(()=>!e.disabled&&!e.readonly);l==null||l.onForceUpdate(()=>{i.value&&(i.value.checked=u.value)});function A(y){V.value&&(k.value=!0,ge(y.target,":focus-visible")!==!1&&(x.value=!0))}function I(){k.value=!1,x.value=!1}function O(y){y.stopPropagation()}function S(y){if(!V.value){i.value&&(i.value.checked=u.value);return}e.readonly&&l&&ae(()=>l.forceUpdate()),u.value=y.target.checked}return ee(()=>{var j,G;const y=o.label?o.label({label:e.label,props:{for:g.value}}):e.label,[E,D]=Le(a),$=r("input",F({ref:i,checked:u.value,disabled:!!e.disabled,id:g.value,onBlur:I,onFocus:A,onInput:S,"aria-disabled":!!e.disabled,"aria-label":e.label,type:e.type,value:m.value,name:e.name,"aria-checked":e.type==="checkbox"?u.value:void 0},D),null);return r("div",F({class:["v-selection-control",{"v-selection-control--dirty":u.value,"v-selection-control--disabled":e.disabled,"v-selection-control--error":e.error,"v-selection-control--focused":k.value,"v-selection-control--focus-visible":x.value,"v-selection-control--inline":e.inline},v.value,e.class]},E,{style:e.style}),[r("div",{class:["v-selection-control__wrapper",n.value],style:c.value},[(j=o.default)==null?void 0:j.call(o,{backgroundColorClasses:b,backgroundColorStyles:P}),Me(r("div",{class:["v-selection-control__input"]},[((G=o.input)==null?void 0:G.call(o,{model:u,textColorClasses:n,textColorStyles:c,backgroundColorClasses:b,backgroundColorStyles:P,inputNode:$,icon:f.value,props:{onFocus:A,onBlur:I,id:g.value}}))??r(X,null,[f.value&&r(me,{key:"icon",icon:f.value},null),$])]),[[Ue("ripple"),e.ripple&&[!e.disabled&&!e.readonly,null,["center","circle"]]]])]),y&&r(Ye,{for:g.value,onClick:O},{default:()=>[y]})])}),{isFocused:k,input:i}}}),jt=H({indeterminate:Boolean,indeterminateIcon:{type:re,default:"$checkboxIndeterminate"},...je({falseIcon:"$checkboxOff",trueIcon:"$checkboxOn"})},"VCheckboxBtn"),Gt=Y()({name:"VCheckboxBtn",props:jt(),emits:{"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,d){let{slots:a}=d;const o=Z(e,"indeterminate"),l=Z(e,"modelValue");function v(n){o.value&&(o.value=!1)}const f=w(()=>o.value?e.indeterminateIcon:e.falseIcon),u=w(()=>o.value?e.indeterminateIcon:e.trueIcon);return ee(()=>{const n=xe(Re.filterProps(e),["modelValue"]);return r(Re,F(n,{modelValue:l.value,"onUpdate:modelValue":[c=>l.value=c,v],class:["v-checkbox-btn",e.class],style:e.style,type:"checkbox",falseIcon:f.value,trueIcon:u.value,"aria-checked":o.value?"mixed":void 0}),a)}),{}}}),Wt=H({id:String,submenu:Boolean,...xe($t({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",location:void 0,openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:qe}}),["absolute"])},"VMenu"),Xt=Y()({name:"VMenu",props:Wt(),emits:{"update:modelValue":e=>!0},setup(e,d){let{slots:a}=d;const o=Z(e,"modelValue"),{scopeId:l}=ft(),{isRtl:v}=vt(),f=Ve(),u=w(()=>e.id||`v-menu-${f}`),n=z(),c=He(Ee,null),b=K(new Set);_e(Ee,{register(){b.value.add(f)},unregister(){b.value.delete(f)},closeParents(i){setTimeout(()=>{var g;!b.value.size&&!e.persistent&&(i==null||(g=n.value)!=null&&g.contentEl&&!ht(i,n.value.contentEl))&&(o.value=!1,c==null||c.closeParents())},40)}}),mt(()=>c==null?void 0:c.unregister()),gt(()=>o.value=!1);async function P(i){var A,I,O;const g=i.relatedTarget,V=i.target;await ae(),o.value&&g!==V&&((A=n.value)!=null&&A.contentEl)&&((I=n.value)!=null&&I.globalTop)&&![document,n.value.contentEl].includes(V)&&!n.value.contentEl.contains(V)&&((O=Se(n.value.contentEl)[0])==null||O.focus())}Q(o,i=>{i?(c==null||c.register(),document.addEventListener("focusin",P,{once:!0})):(c==null||c.unregister(),document.removeEventListener("focusin",P))});function m(i){c==null||c.closeParents(i)}function h(i){var g,V,A,I,O;if(!e.disabled)if(i.key==="Tab"||i.key==="Enter"&&!e.closeOnContentClick){if(i.key==="Enter"&&(i.target instanceof HTMLTextAreaElement||i.target instanceof HTMLInputElement&&i.target.closest("form")))return;i.key==="Enter"&&i.preventDefault(),yt(Se((g=n.value)==null?void 0:g.contentEl,!1),i.shiftKey?"prev":"next",y=>y.tabIndex>=0)||(o.value=!1,(A=(V=n.value)==null?void 0:V.activatorEl)==null||A.focus())}else e.submenu&&i.key===(v.value?"ArrowRight":"ArrowLeft")&&(o.value=!1,(O=(I=n.value)==null?void 0:I.activatorEl)==null||O.focus())}function k(i){var V;if(e.disabled)return;const g=(V=n.value)==null?void 0:V.contentEl;g&&o.value?i.key==="ArrowDown"?(i.preventDefault(),i.stopImmediatePropagation(),de(g,"next")):i.key==="ArrowUp"?(i.preventDefault(),i.stopImmediatePropagation(),de(g,"prev")):e.submenu&&(i.key===(v.value?"ArrowRight":"ArrowLeft")?o.value=!1:i.key===(v.value?"ArrowLeft":"ArrowRight")&&(i.preventDefault(),de(g,"first"))):(e.submenu?i.key===(v.value?"ArrowLeft":"ArrowRight"):["ArrowDown","ArrowUp"].includes(i.key))&&(o.value=!0,i.preventDefault(),setTimeout(()=>setTimeout(()=>k(i))))}const x=w(()=>F({"aria-haspopup":"menu","aria-expanded":String(o.value),"aria-owns":u.value,onKeydown:k},e.activatorProps));return ee(()=>{const i=De.filterProps(e);return r(De,F({ref:n,id:u.value,class:["v-menu",e.class],style:e.style},i,{modelValue:o.value,"onUpdate:modelValue":g=>o.value=g,absolute:!0,activatorProps:x.value,location:e.location??(e.submenu?"end":"bottom"),"onClick:outside":m,onKeydown:h},l),{activator:a.activator,default:function(){for(var g=arguments.length,V=new Array(g),A=0;A<g;A++)V[A]=arguments[A];return r($e,{root:"VMenu"},{default:()=>{var I;return[(I=a.default)==null?void 0:I.call(a,...V)]}})}})}),ye({id:u,ΨopenChildren:b},n)}}),Yt=["color","file","time","date","datetime-local","week","month"],Ge=H({autofocus:Boolean,counter:[Boolean,Number,String],counterValue:[Number,Function],prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,suffix:String,role:String,type:{type:String,default:"text"},modelModifiers:Object,...Je(),...Qe()},"VTextField"),Oe=Y()({name:"VTextField",directives:{Intersect:Vt},inheritAttrs:!1,props:Ge(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,d){let{attrs:a,emit:o,slots:l}=d;const v=Z(e,"modelValue"),{isFocused:f,focus:u,blur:n}=Ze(e),c=w(()=>typeof e.counterValue=="function"?e.counterValue(v.value):typeof e.counterValue=="number"?e.counterValue:(v.value??"").toString().length),b=w(()=>{if(a.maxlength)return a.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter}),P=w(()=>["plain","underlined"].includes(e.variant));function m(S,y){var E,D;!e.autofocus||!S||(D=(E=y[0].target)==null?void 0:E.focus)==null||D.call(E)}const h=z(),k=z(),x=z(),i=w(()=>Yt.includes(e.type)||e.persistentPlaceholder||f.value||e.active);function g(){var S;x.value!==document.activeElement&&((S=x.value)==null||S.focus()),f.value||u()}function V(S){o("mousedown:control",S),S.target!==x.value&&(g(),S.preventDefault())}function A(S){g(),o("click:control",S)}function I(S){S.stopPropagation(),g(),ae(()=>{v.value=null,xt(e["onClick:clear"],S)})}function O(S){var E;const y=S.target;if(v.value=y.value,(E=e.modelModifiers)!=null&&E.trim&&["text","search","password","tel","url"].includes(e.type)){const D=[y.selectionStart,y.selectionEnd];ae(()=>{y.selectionStart=D[0],y.selectionEnd=D[1]})}}return ee(()=>{const S=!!(l.counter||e.counter!==!1&&e.counter!=null),y=!!(S||l.details),[E,D]=Le(a),{modelValue:$,...j}=ke.filterProps(e),G=et(e);return r(ke,F({ref:h,modelValue:v.value,"onUpdate:modelValue":L=>v.value=L,class:["v-text-field",{"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-input--plain-underlined":P.value},e.class],style:e.style},E,j,{centerAffix:!P.value,focused:f.value}),{...l,default:L=>{let{id:W,isDisabled:M,isDirty:te,isReadonly:le,isValid:oe}=L;return r(tt,F({ref:k,onMousedown:V,onClick:A,"onClick:clear":I,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:e.role},G,{id:W.value,active:i.value||te.value,dirty:te.value||e.dirty,disabled:M.value,focused:f.value,error:oe.value===!1}),{...l,default:t=>{let{props:{class:s,...p}}=t;const T=Me(r("input",F({ref:x,value:v.value,onInput:O,autofocus:e.autofocus,readonly:le.value,disabled:M.value,name:e.name,placeholder:e.placeholder,size:1,type:e.type,onFocus:g,onBlur:n},p,D),null),[[Ue("intersect"),{handler:m},null,{once:!0}]]);return r(X,null,[e.prefix&&r("span",{class:"v-text-field__prefix"},[r("span",{class:"v-text-field__prefix__text"},[e.prefix])]),l.default?r("div",{class:s,"data-no-activator":""},[l.default(),T]):bt(T,{class:s}),e.suffix&&r("span",{class:"v-text-field__suffix"},[r("span",{class:"v-text-field__suffix__text"},[e.suffix])])])}})},details:y?L=>{var W;return r(X,null,[(W=l.details)==null?void 0:W.call(l,L),S&&r(X,null,[r("span",null,null),r(lt,{active:e.persistentCounter||f.value,value:c.value,max:b.value,disabled:e.disabled},l.counter)])])}:void 0})}),ye({},h,k,x)}}),Jt=H({renderless:Boolean,...ce()},"VVirtualScrollItem"),Qt=Y()({name:"VVirtualScrollItem",inheritAttrs:!1,props:Jt(),emits:{"update:height":e=>!0},setup(e,d){let{attrs:a,emit:o,slots:l}=d;const{resizeRef:v,contentRect:f}=Ne(void 0,"border");Q(()=>{var u;return(u=f.value)==null?void 0:u.height},u=>{u!=null&&o("update:height",u)}),ee(()=>{var u,n;return e.renderless?r(X,null,[(u=l.default)==null?void 0:u.call(l,{itemRef:v})]):r("div",F({ref:v,class:["v-virtual-scroll__item",e.class],style:e.style},a),[(n=l.default)==null?void 0:n.call(l)])})}}),Zt=-1,el=1,ve=100,tl=H({itemHeight:{type:[Number,String],default:null},height:[Number,String]},"virtual");function ll(e,d){const a=Ct(),o=K(0);Pe(()=>{o.value=parseFloat(e.itemHeight||0)});const l=K(0),v=K(Math.ceil((parseInt(e.height)||a.height.value)/(o.value||16))||1),f=K(0),u=K(0),n=z(),c=z();let b=0;const{resizeRef:P,contentRect:m}=Ne();Pe(()=>{P.value=n.value});const h=w(()=>{var t;return n.value===document.documentElement?a.height.value:((t=m.value)==null?void 0:t.height)||parseInt(e.height)||0}),k=w(()=>!!(n.value&&c.value&&h.value&&o.value));let x=Array.from({length:d.value.length}),i=Array.from({length:d.value.length});const g=K(0);let V=-1;function A(t){return x[t]||o.value}const I=wt(()=>{const t=performance.now();i[0]=0;const s=d.value.length;for(let p=1;p<=s-1;p++)i[p]=(i[p-1]||0)+A(p-1);g.value=Math.max(g.value,performance.now()-t)},g),O=Q(k,t=>{t&&(O(),b=c.value.offsetTop,I.immediate(),M(),~V&&ae(()=>{he&&window.requestAnimationFrame(()=>{le(V),V=-1})}))});be(()=>{I.clear()});function S(t,s){const p=x[t],T=o.value;o.value=T?Math.min(o.value,s):s,(p!==s||T!==o.value)&&(x[t]=s,I())}function y(t){return t=fe(t,0,d.value.length-1),i[t]||0}function E(t){return nl(i,t)}let D=0,$=0,j=0;Q(h,(t,s)=>{s&&(M(),t<s&&requestAnimationFrame(()=>{$=0,M()}))});function G(){if(!n.value||!c.value)return;const t=n.value.scrollTop,s=performance.now();s-j>500?($=Math.sign(t-D),b=c.value.offsetTop):$=t-D,D=t,j=s,M()}function L(){!n.value||!c.value||($=0,j=0,M())}let W=-1;function M(){cancelAnimationFrame(W),W=requestAnimationFrame(te)}function te(){if(!n.value||!h.value)return;const t=D-b,s=Math.sign($),p=Math.max(0,t-ve),T=fe(E(p),0,d.value.length),N=t+h.value+ve,C=fe(E(N)+1,T+1,d.value.length);if((s!==Zt||T<l.value)&&(s!==el||C>v.value)){const B=y(l.value)-y(T),R=y(C)-y(v.value);Math.max(B,R)>ve?(l.value=T,v.value=C):(T<=0&&(l.value=T),C>=d.value.length&&(v.value=C))}f.value=y(l.value),u.value=y(d.value.length)-y(v.value)}function le(t){const s=y(t);!n.value||t&&!s?V=t:n.value.scrollTop=s}const oe=w(()=>d.value.slice(l.value,v.value).map((t,s)=>({raw:t,index:s+l.value})));return Q(d,()=>{x=Array.from({length:d.value.length}),i=Array.from({length:d.value.length}),I.immediate(),M()},{deep:!0}),{calculateVisibleItems:M,containerRef:n,markerRef:c,computedItems:oe,paddingTop:f,paddingBottom:u,scrollToIndex:le,handleScroll:G,handleScrollend:L,handleItemResize:S}}function nl(e,d){let a=e.length-1,o=0,l=0,v=null,f=-1;if(e[a]<d)return a;for(;o<=a;)if(l=o+a>>1,v=e[l],v>d)a=l-1;else if(v<d)f=l,o=l+1;else return v===d?l:o;return f}const al=H({items:{type:Array,default:()=>[]},renderless:Boolean,...tl(),...ce(),...kt()},"VVirtualScroll"),ol=Y()({name:"VVirtualScroll",props:al(),setup(e,d){let{slots:a}=d;const o=pt("VVirtualScroll"),{dimensionStyles:l}=St(e),{calculateVisibleItems:v,containerRef:f,markerRef:u,handleScroll:n,handleScrollend:c,handleItemResize:b,scrollToIndex:P,paddingTop:m,paddingBottom:h,computedItems:k}=ll(e,U(e,"items"));return Pt(()=>e.renderless,()=>{function x(){var V,A;const g=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1)?"addEventListener":"removeEventListener";f.value===document.documentElement?(document[g]("scroll",n,{passive:!0}),document[g]("scrollend",c)):((V=f.value)==null||V[g]("scroll",n,{passive:!0}),(A=f.value)==null||A[g]("scrollend",c))}It(()=>{f.value=Nt(o.vnode.el,!0),x(!0)}),be(x)}),ee(()=>{const x=k.value.map(i=>r(Qt,{key:i.index,renderless:e.renderless,"onUpdate:height":g=>b(i.index,g)},{default:g=>{var V;return(V=a.default)==null?void 0:V.call(a,{item:i.raw,index:i.index,...g})}}));return e.renderless?r(X,null,[r("div",{ref:u,class:"v-virtual-scroll__spacer",style:{paddingTop:ue(m.value)}},null),x,r("div",{class:"v-virtual-scroll__spacer",style:{paddingBottom:ue(h.value)}},null)]):r("div",{ref:f,class:["v-virtual-scroll",e.class],onScrollPassive:n,onScrollend:c,style:[l.value,e.style]},[r("div",{ref:u,class:"v-virtual-scroll__container",style:{paddingTop:ue(m.value),paddingBottom:ue(h.value)}},[x])])}),{calculateVisibleItems:v,scrollToIndex:P}}});function ul(e,d){const a=K(!1);let o;function l(u){cancelAnimationFrame(o),a.value=!0,o=requestAnimationFrame(()=>{o=requestAnimationFrame(()=>{a.value=!1})})}async function v(){await new Promise(u=>requestAnimationFrame(u)),await new Promise(u=>requestAnimationFrame(u)),await new Promise(u=>requestAnimationFrame(u)),await new Promise(u=>{if(a.value){const n=Q(a,()=>{n(),u()})}else u()})}async function f(u){var b,P;if(u.key==="Tab"&&((b=d.value)==null||b.focus()),!["PageDown","PageUp","Home","End"].includes(u.key))return;const n=(P=e.value)==null?void 0:P.$el;if(!n)return;(u.key==="Home"||u.key==="End")&&n.scrollTo({top:u.key==="Home"?0:n.scrollHeight,behavior:"smooth"}),await v();const c=n.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");if(u.key==="PageDown"||u.key==="Home"){const m=n.getBoundingClientRect().top;for(const h of c)if(h.getBoundingClientRect().top>=m){h.focus();break}}else{const m=n.getBoundingClientRect().bottom;for(const h of[...c].reverse())if(h.getBoundingClientRect().bottom<=m){h.focus();break}}}return{onScrollPassive:l,onKeydown:f}}const il=H({chips:Boolean,closableChips:Boolean,closeText:{type:String,default:"$vuetify.close"},openText:{type:String,default:"$vuetify.open"},eager:Boolean,hideNoData:Boolean,hideSelected:Boolean,listProps:{type:Object},menu:Boolean,menuIcon:{type:re,default:"$dropdown"},menuProps:{type:Object},multiple:Boolean,noDataText:{type:String,default:"$vuetify.noDataText"},openOnClear:Boolean,itemColor:String,...At({itemChildren:!1})},"Select"),sl=H({...il(),...xe(Ge({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...Tt({transition:{component:qe}})},"VSelect"),vl=Y()({name:"VSelect",props:sl(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,d){let{slots:a}=d;const{t:o}=Et(),l=z(),v=z(),f=z(),u=Z(e,"menu"),n=w({get:()=>u.value,set:t=>{var s;u.value&&!t&&((s=v.value)!=null&&s.ΨopenChildren.size)||(u.value=t)}}),{items:c,transformIn:b,transformOut:P}=Dt(e),m=Z(e,"modelValue",[],t=>b(t===null?[null]:se(t)),t=>{const s=P(t);return e.multiple?s:s[0]??null}),h=w(()=>typeof e.counterValue=="function"?e.counterValue(m.value):typeof e.counterValue=="number"?e.counterValue:m.value.length),k=nt(),x=w(()=>m.value.map(t=>t.value)),i=K(!1),g=w(()=>n.value?e.closeText:e.openText);let V="",A;const I=w(()=>e.hideSelected?c.value.filter(t=>!m.value.some(s=>e.valueComparator(s,t))):c.value),O=w(()=>e.hideNoData&&!I.value.length||e.readonly||(k==null?void 0:k.isReadonly.value)),S=w(()=>{var t;return{...e.menuProps,activatorProps:{...((t=e.menuProps)==null?void 0:t.activatorProps)||{},"aria-haspopup":"listbox"}}}),y=z(),E=ul(y,l);function D(t){e.openOnClear&&(n.value=!0)}function $(){O.value||(n.value=!n.value)}function j(t){Ae(t)&&G(t)}function G(t){var N,C;if(!t.key||e.readonly||k!=null&&k.isReadonly.value)return;["Enter"," ","ArrowDown","ArrowUp","Home","End"].includes(t.key)&&t.preventDefault(),["Enter","ArrowDown"," "].includes(t.key)&&(n.value=!0),["Escape","Tab"].includes(t.key)&&(n.value=!1),t.key==="Home"?(N=y.value)==null||N.focus("first"):t.key==="End"&&((C=y.value)==null||C.focus("last"));const s=1e3;if(e.multiple||!Ae(t))return;const p=performance.now();p-A>s&&(V=""),V+=t.key.toLowerCase(),A=p;const T=c.value.find(B=>B.title.toLowerCase().startsWith(V));if(T!==void 0){m.value=[T];const B=I.value.indexOf(T);he&&window.requestAnimationFrame(()=>{var R;B>=0&&((R=f.value)==null||R.scrollToIndex(B))})}}function L(t){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;if(!t.props.disabled)if(e.multiple){const p=m.value.findIndex(N=>e.valueComparator(N.value,t.value)),T=s??!~p;if(~p){const N=T?[...m.value,t]:[...m.value];N.splice(p,1),m.value=N}else T&&(m.value=[...m.value,t])}else{const p=s!==!1;m.value=p?[t]:[],ae(()=>{n.value=!1})}}function W(t){var s;(s=y.value)!=null&&s.$el.contains(t.relatedTarget)||(n.value=!1)}function M(){var t;e.eager&&((t=f.value)==null||t.calculateVisibleItems())}function te(){var t;i.value&&((t=l.value)==null||t.focus())}function le(t){i.value=!0}function oe(t){if(t==null)m.value=[];else if(ge(l.value,":autofill")||ge(l.value,":-webkit-autofill")){const s=c.value.find(p=>p.title===t);s&&L(s)}else l.value&&(l.value.value="")}return Q(n,()=>{if(!e.hideSelected&&n.value&&m.value.length){const t=I.value.findIndex(s=>m.value.some(p=>e.valueComparator(p.value,s.value)));he&&window.requestAnimationFrame(()=>{var s;t>=0&&((s=f.value)==null||s.scrollToIndex(t))})}}),Q(()=>e.items,(t,s)=>{n.value||i.value&&!s.length&&t.length&&(n.value=!0)}),ee(()=>{const t=!!(e.chips||a.chip),s=!!(!e.hideNoData||I.value.length||a["prepend-item"]||a["append-item"]||a["no-data"]),p=m.value.length>0,T=Oe.filterProps(e),N=p||!i.value&&e.label&&!e.persistentPlaceholder?void 0:e.placeholder;return r(Oe,F({ref:l},T,{modelValue:m.value.map(C=>C.props.value).join(", "),"onUpdate:modelValue":oe,focused:i.value,"onUpdate:focused":C=>i.value=C,validationValue:m.externalValue,counterValue:h.value,dirty:p,class:["v-select",{"v-select--active-menu":n.value,"v-select--chips":!!e.chips,[`v-select--${e.multiple?"multiple":"single"}`]:!0,"v-select--selected":m.value.length,"v-select--selection-slot":!!a.selection},e.class],style:e.style,inputmode:"none",placeholder:N,"onClick:clear":D,"onMousedown:control":$,onBlur:W,onKeydown:G,"aria-label":o(g.value),title:o(g.value)}),{...a,default:()=>r(X,null,[r(Xt,F({ref:v,modelValue:n.value,"onUpdate:modelValue":C=>n.value=C,activator:"parent",contentClass:"v-select__content",disabled:O.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterEnter:M,onAfterLeave:te},S.value),{default:()=>[s&&r(Bt,F({ref:y,selected:x.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:C=>C.preventDefault(),onKeydown:j,onFocusin:le,tabindex:"-1","aria-live":"polite",color:e.itemColor??e.color},E,e.listProps),{default:()=>{var C,B,R;return[(C=a["prepend-item"])==null?void 0:C.call(a),!I.value.length&&!e.hideNoData&&(((B=a["no-data"])==null?void 0:B.call(a))??r(Ie,{title:o(e.noDataText)},null)),r(ol,{ref:f,renderless:!0,items:I.value},{default:J=>{var we;let{item:q,index:ne,itemRef:_}=J;const Ce=F(q.props,{ref:_,key:ne,onClick:()=>L(q,null)});return((we=a.item)==null?void 0:we.call(a,{item:q,index:ne,props:Ce}))??r(Ie,F(Ce,{role:"option"}),{prepend:We=>{let{isSelected:Xe}=We;return r(X,null,[e.multiple&&!e.hideSelected?r(Gt,{key:q.value,modelValue:Xe,ripple:!1,tabindex:"-1"},null):void 0,q.props.prependAvatar&&r(Ft,{image:q.props.prependAvatar},null),q.props.prependIcon&&r(me,{icon:q.props.prependIcon},null)])}})}}),(R=a["append-item"])==null?void 0:R.call(a)]}})]}),m.value.map((C,B)=>{function R(_){_.stopPropagation(),_.preventDefault(),L(C,!1)}const J={"onClick:close":R,onKeydown(_){_.key!=="Enter"&&_.key!==" "||(_.preventDefault(),_.stopPropagation(),R(_))},onMousedown(_){_.preventDefault(),_.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},q=t?!!a.chip:!!a.selection,ne=q?Rt(t?a.chip({item:C,index:B,props:J}):a.selection({item:C,index:B})):void 0;if(!(q&&!ne))return r("div",{key:C.value,class:"v-select__selection"},[t?a.chip?r($e,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:C.title}}},{default:()=>[ne]}):r(Ot,F({key:"chip",closable:e.closableChips,size:"small",text:C.title,disabled:C.props.disabled},J),null):ne??r("span",{class:"v-select__selection-text"},[C.title,e.multiple&&B<m.value.length-1&&r("span",{class:"v-select__selection-comma"},[_t(",")])])])})]),"append-inner":function(){var J;for(var C=arguments.length,B=new Array(C),R=0;R<C;R++)B[R]=arguments[R];return r(X,null,[(J=a["append-inner"])==null?void 0:J.call(a,...B),e.menuIcon?r(me,{class:"v-select__menu-icon",icon:e.menuIcon},null):void 0])}})}),ye({isFocused:i,menu:n,select:L},l)}});export{vl as V,Oe as a};
