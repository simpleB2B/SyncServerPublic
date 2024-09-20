import{p as E,A as ie,s as v,G as ne,D as $,H as A,af as De,b6 as Ae,a1 as ge,am as Ee,S as j,q as H,u as W,b as i,E as U,$ as de,a9 as Oe,i as Le,aJ as me,b7 as ye,B as Z,ao as he,M as be,b8 as Ve,ae as ce,aG as Te,b9 as ze,ba as Ne,as as xe,P as Ce,aH as fe,Q as ee,I as q,ad as He,bb as We,T as Ge,an as Ue,a3 as je,a0 as Ie,ar as we,ak as le,b4 as Pe,bc as Ke,Y as qe,bd as Qe,a7 as Ye,x as Je,N as Se,be as Xe,bf as Ze,y as et,F as te,L as ae,aQ as tt,bg as at,ay as nt,K as lt,aj as it,al as st,bh as ut,aA as ot,aD as rt}from"./index.js";import{n as dt,a as ct,s as ft}from"./easing.js";const Fe=Symbol.for("vuetify:form"),vt=E({disabled:Boolean,fastFail:Boolean,readonly:Boolean,modelValue:{type:Boolean,default:null},validateOn:{type:String,default:"input"}},"form");function gt(e){const r=ie(e,"modelValue"),l=v(()=>e.disabled),n=v(()=>e.readonly),a=ne(!1),t=$([]),s=$([]);async function g(){const u=[];let d=!0;s.value=[],a.value=!0;for(const c of t.value){const o=await c.validate();if(o.length>0&&(d=!1,u.push({id:c.id,errorMessages:o})),!d&&e.fastFail)break}return s.value=u,a.value=!1,{valid:d,errors:s.value}}function h(){t.value.forEach(u=>u.reset())}function m(){t.value.forEach(u=>u.resetValidation())}return A(t,()=>{let u=0,d=0;const c=[];for(const o of t.value)o.isValid===!1?(d++,c.push({id:o.id,errorMessages:o.errorMessages})):o.isValid===!0&&u++;s.value=c,r.value=d>0?!1:u===t.value.length?!0:null},{deep:!0,flush:"post"}),De(Fe,{register:u=>{let{id:d,vm:c,validate:o,reset:S,resetValidation:k}=u;t.value.some(L=>L.id===d),t.value.push({id:d,validate:o,reset:S,resetValidation:k,vm:Ae(c),isValid:null,errorMessages:[]})},unregister:u=>{t.value=t.value.filter(d=>d.id!==u)},update:(u,d,c)=>{const o=t.value.find(S=>S.id===u);o&&(o.isValid=d,o.errorMessages=c)},isDisabled:l,isReadonly:n,isValidating:a,isValid:r,items:t,validateOn:ge(e,"validateOn")}),{errors:s,isDisabled:l,isReadonly:n,isValidating:a,isValid:r,items:t,validate:g,reset:h,resetValidation:m}}function mt(){return Ee(Fe,null)}const oe=Symbol("Forwarded refs");function re(e,r){let l=e;for(;l;){const n=Reflect.getOwnPropertyDescriptor(l,r);if(n)return n;l=Object.getPrototypeOf(l)}}function _e(e){for(var r=arguments.length,l=new Array(r>1?r-1:0),n=1;n<r;n++)l[n-1]=arguments[n];return e[oe]=l,new Proxy(e,{get(a,t){if(Reflect.has(a,t))return Reflect.get(a,t);if(!(typeof t=="symbol"||t.startsWith("$")||t.startsWith("__"))){for(const s of l)if(s.value&&Reflect.has(s.value,t)){const g=Reflect.get(s.value,t);return typeof g=="function"?g.bind(s.value):g}}},has(a,t){if(Reflect.has(a,t))return!0;if(typeof t=="symbol"||t.startsWith("$")||t.startsWith("__"))return!1;for(const s of l)if(s.value&&Reflect.has(s.value,t))return!0;return!1},set(a,t,s){if(Reflect.has(a,t))return Reflect.set(a,t,s);if(typeof t=="symbol"||t.startsWith("$")||t.startsWith("__"))return!1;for(const g of l)if(g.value&&Reflect.has(g.value,t))return Reflect.set(g.value,t,s);return!1},getOwnPropertyDescriptor(a,t){var g;const s=Reflect.getOwnPropertyDescriptor(a,t);if(s)return s;if(!(typeof t=="symbol"||t.startsWith("$")||t.startsWith("__"))){for(const h of l){if(!h.value)continue;const m=re(h.value,t)??("_"in h.value?re((g=h.value._)==null?void 0:g.setupState,t):void 0);if(m)return m}for(const h of l){const m=h.value&&h.value[oe];if(!m)continue;const u=m.slice();for(;u.length;){const d=u.shift(),c=re(d.value,t);if(c)return c;const o=d.value&&d.value[oe];o&&u.push(...o)}}}}})}const yt=E({...j(),...vt()},"VForm"),pt=H()({name:"VForm",props:yt(),emits:{"update:modelValue":e=>!0,submit:e=>!0},setup(e,r){let{slots:l,emit:n}=r;const a=gt(e),t=$();function s(h){h.preventDefault(),a.reset()}function g(h){const m=h,u=a.validate();m.then=u.then.bind(u),m.catch=u.catch.bind(u),m.finally=u.finally.bind(u),n("submit",m),m.defaultPrevented||u.then(d=>{var o;let{valid:c}=d;c&&((o=t.value)==null||o.submit())}),m.preventDefault()}return W(()=>{var h;return i("form",{ref:t,class:["v-form",e.class],style:e.style,novalidate:!0,onReset:s,onSubmit:g},[(h=l.default)==null?void 0:h.call(l,a)])}),_e(a,t)}}),ht=E({text:String,onClick:U(),...j(),...de()},"VLabel"),bt=H()({name:"VLabel",props:ht(),setup(e,r){let{slots:l}=r;return W(()=>{var n;return i("label",{class:["v-label",{"v-label--clickable":!!e.onClick},e.class],style:e.style,onClick:e.onClick},[e.text,(n=l.default)==null?void 0:n.call(l)])}),{}}});function Re(e){const{t:r}=Oe();function l(n){let{name:a}=n;const t={prepend:"prependAction",prependInner:"prependAction",append:"appendAction",appendInner:"appendAction",clear:"clear"}[a],s=e[`onClick:${a}`],g=s&&t?r(`$vuetify.input.${t}`,e.label??""):void 0;return i(Le,{icon:e[`${a}Icon`],"aria-label":g,onClick:s},null)}return{InputIcon:l}}const Vt=E({active:Boolean,color:String,messages:{type:[Array,String],default:()=>[]},...j(),...me({transition:{component:ye,leaveAbsolute:!0,group:!0}})},"VMessages"),xt=H()({name:"VMessages",props:Vt(),setup(e,r){let{slots:l}=r;const n=v(()=>Z(e.messages)),{textColorClasses:a,textColorStyles:t}=he(v(()=>e.color));return W(()=>i(be,{transition:e.transition,tag:"div",class:["v-messages",a.value,e.class],style:[t.value,e.style],role:"alert","aria-live":"polite"},{default:()=>[e.active&&n.value.map((s,g)=>i("div",{class:"v-messages__message",key:`${g}-${n.value}`},[l.message?l.message({message:s}):s]))]})),{}}}),ke=E({focused:Boolean,"onUpdate:focused":U()},"focus");function Be(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Ve();const l=ie(e,"focused"),n=v(()=>({[`${r}--focused`]:l.value}));function a(){l.value=!0}function t(){l.value=!1}return{focusClasses:n,isFocused:l,focus:a,blur:t}}const Ct=E({disabled:{type:Boolean,default:null},error:Boolean,errorMessages:{type:[Array,String],default:()=>[]},maxErrors:{type:[Number,String],default:1},name:String,label:String,readonly:{type:Boolean,default:null},rules:{type:Array,default:()=>[]},modelValue:null,validateOn:String,validationValue:null,...ke()},"validation");function It(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Ve(),l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:ce();const n=ie(e,"modelValue"),a=v(()=>e.validationValue===void 0?n.value:e.validationValue),t=mt(),s=$([]),g=ne(!0),h=v(()=>!!(Z(n.value===""?null:n.value).length||Z(a.value===""?null:a.value).length)),m=v(()=>!!(e.disabled??(t==null?void 0:t.isDisabled.value))),u=v(()=>!!(e.readonly??(t==null?void 0:t.isReadonly.value))),d=v(()=>{var y;return(y=e.errorMessages)!=null&&y.length?Z(e.errorMessages).concat(s.value).slice(0,Math.max(0,+e.maxErrors)):s.value}),c=v(()=>{let y=(e.validateOn??(t==null?void 0:t.validateOn.value))||"input";y==="lazy"&&(y="input lazy"),y==="eager"&&(y="input eager");const b=new Set((y==null?void 0:y.split(" "))??[]);return{input:b.has("input"),blur:b.has("blur")||b.has("input")||b.has("invalid-input"),invalidInput:b.has("invalid-input"),lazy:b.has("lazy"),eager:b.has("eager")}}),o=v(()=>{var y;return e.error||(y=e.errorMessages)!=null&&y.length?!1:e.rules.length?g.value?s.value.length||c.value.lazy?null:!0:!s.value.length:!0}),S=ne(!1),k=v(()=>({[`${r}--error`]:o.value===!1,[`${r}--dirty`]:h.value,[`${r}--disabled`]:m.value,[`${r}--readonly`]:u.value})),L=Te("validation"),x=v(()=>e.name??ze(l));Ne(()=>{t==null||t.register({id:x.value,vm:L,validate:F,reset:T,resetValidation:O})}),xe(()=>{t==null||t.unregister(x.value)}),Ce(async()=>{c.value.lazy||await F(!c.value.eager),t==null||t.update(x.value,o.value,d.value)}),fe(()=>c.value.input||c.value.invalidInput&&o.value===!1,()=>{A(a,()=>{if(a.value!=null)F();else if(e.focused){const y=A(()=>e.focused,b=>{b||F(),y()})}})}),fe(()=>c.value.blur,()=>{A(()=>e.focused,y=>{y||F()})}),A([o,d],()=>{t==null||t.update(x.value,o.value,d.value)});async function T(){n.value=null,await ee(),await O()}async function O(){g.value=!0,c.value.lazy?s.value=[]:await F(!c.value.eager)}async function F(){let y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;const b=[];S.value=!0;for(const M of e.rules){if(b.length>=+(e.maxErrors??1))break;const w=await(typeof M=="function"?M:()=>M)(a.value);if(w!==!0){if(w!==!1&&typeof w!="string"){console.warn(`${w} is not a valid value. Rule functions must return boolean true or a string.`);continue}b.push(w||"")}}return s.value=b,S.value=!1,g.value=y,s.value}return{errorMessages:d,isDirty:h,isDisabled:m,isReadonly:u,isPristine:g,isValid:o,isValidating:S,reset:T,resetValidation:O,validate:F,validationClasses:k}}const pe=E({id:String,appendIcon:q,centerAffix:{type:Boolean,default:!0},prependIcon:q,hideDetails:[Boolean,String],hideSpinButtons:Boolean,hint:String,persistentHint:Boolean,messages:{type:[Array,String],default:()=>[]},direction:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},"onClick:prepend":U(),"onClick:append":U(),...j(),...He(),...We(Ge(),["maxWidth","minWidth","width"]),...de(),...Ct()},"VInput"),ve=H()({name:"VInput",props:{...pe()},emits:{"update:modelValue":e=>!0},setup(e,r){let{attrs:l,slots:n,emit:a}=r;const{densityClasses:t}=Ue(e),{dimensionStyles:s}=je(e),{themeClasses:g}=Ie(e),{rtlClasses:h}=we(),{InputIcon:m}=Re(e),u=ce(),d=v(()=>e.id||`input-${u}`),c=v(()=>`${d.value}-messages`),{errorMessages:o,isDirty:S,isDisabled:k,isReadonly:L,isPristine:x,isValid:T,isValidating:O,reset:F,resetValidation:y,validate:b,validationClasses:M}=It(e,"v-input",d),D=v(()=>({id:d,messagesId:c,isDirty:S,isDisabled:k,isReadonly:L,isPristine:x,isValid:T,isValidating:O,reset:F,resetValidation:y,validate:b})),w=v(()=>{var _;return(_=e.errorMessages)!=null&&_.length||!x.value&&o.value.length?o.value:e.hint&&(e.persistentHint||e.focused)?e.hint:e.messages});return W(()=>{var V,C,B,p;const _=!!(n.prepend||e.prependIcon),f=!!(n.append||e.appendIcon),R=w.value.length>0,P=!e.hideDetails||e.hideDetails==="auto"&&(R||!!n.details);return i("div",{class:["v-input",`v-input--${e.direction}`,{"v-input--center-affix":e.centerAffix,"v-input--hide-spin-buttons":e.hideSpinButtons},t.value,g.value,h.value,M.value,e.class],style:[s.value,e.style]},[_&&i("div",{key:"prepend",class:"v-input__prepend"},[(V=n.prepend)==null?void 0:V.call(n,D.value),e.prependIcon&&i(m,{key:"prepend-icon",name:"prepend"},null)]),n.default&&i("div",{class:"v-input__control"},[(C=n.default)==null?void 0:C.call(n,D.value)]),f&&i("div",{key:"append",class:"v-input__append"},[e.appendIcon&&i(m,{key:"append-icon",name:"append"},null),(B=n.append)==null?void 0:B.call(n,D.value)]),P&&i("div",{class:"v-input__details"},[i(xt,{id:c.value,active:R,messages:w.value},{message:n.message}),(p=n.details)==null?void 0:p.call(n,D.value)])])}),{reset:F,resetValidation:y,validate:b,isValid:T,errorMessages:o}}}),wt=E({active:Boolean,disabled:Boolean,max:[Number,String],value:{type:[Number,String],default:0},...j(),...me({transition:{component:ye}})},"VCounter"),Pt=H()({name:"VCounter",functional:!0,props:wt(),setup(e,r){let{slots:l}=r;const n=v(()=>e.max?`${e.value} / ${e.max}`:String(e.value));return W(()=>i(be,{transition:e.transition},{default:()=>[le(i("div",{class:["v-counter",{"text-error":e.max&&!e.disabled&&parseFloat(e.value)>parseFloat(e.max)},e.class],style:e.style},[l.default?l.default({counter:n.value,max:e.max,value:e.value}):n.value]),[[Pe,e.active]])]})),{}}}),St=E({floating:Boolean,...j()},"VFieldLabel"),X=H()({name:"VFieldLabel",props:St(),setup(e,r){let{slots:l}=r;return W(()=>i(bt,{class:["v-field-label",{"v-field-label--floating":e.floating},e.class],style:e.style,"aria-hidden":e.floating||void 0},l)),{}}}),Ft=["underlined","outlined","filled","solo","solo-inverted","solo-filled","plain"],Me=E({appendInnerIcon:q,bgColor:String,clearable:Boolean,clearIcon:{type:q,default:"$clear"},active:Boolean,centerAffix:{type:Boolean,default:void 0},color:String,baseColor:String,dirty:Boolean,disabled:{type:Boolean,default:null},error:Boolean,flat:Boolean,label:String,persistentClear:Boolean,prependInnerIcon:q,reverse:Boolean,singleLine:Boolean,variant:{type:String,default:"filled",validator:e=>Ft.includes(e)},"onClick:clear":U(),"onClick:appendInner":U(),"onClick:prependInner":U(),...j(),...Ke(),...qe(),...de()},"VField"),$e=H()({name:"VField",inheritAttrs:!1,props:{id:String,...ke(),...Me()},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,r){let{attrs:l,emit:n,slots:a}=r;const{themeClasses:t}=Ie(e),{loaderClasses:s}=Qe(e),{focusClasses:g,isFocused:h,focus:m,blur:u}=Be(e),{InputIcon:d}=Re(e),{roundedClasses:c}=Ye(e),{rtlClasses:o}=we(),S=v(()=>e.dirty||e.active),k=v(()=>!e.singleLine&&!!(e.label||a.label)),L=ce(),x=v(()=>e.id||`input-${L}`),T=v(()=>`${x.value}-messages`),O=$(),F=$(),y=$(),b=v(()=>["plain","underlined"].includes(e.variant)),{backgroundColorClasses:M,backgroundColorStyles:D}=Je(ge(e,"bgColor")),{textColorClasses:w,textColorStyles:_}=he(v(()=>e.error||e.disabled?void 0:S.value&&h.value?e.color:e.baseColor));A(S,V=>{if(k.value){const C=O.value.$el,B=F.value.$el;requestAnimationFrame(()=>{const p=dt(C),I=B.getBoundingClientRect(),z=I.x-p.x,G=I.y-p.y-(p.height/2-I.height/2),N=I.width/.75,K=Math.abs(N-p.width)>1?{maxWidth:Se(N)}:void 0,se=getComputedStyle(C),Q=getComputedStyle(B),Y=parseFloat(se.transitionDuration)*1e3||150,J=parseFloat(Q.getPropertyValue("--v-field-label-scale")),ue=Q.getPropertyValue("color");C.style.visibility="visible",B.style.visibility="hidden",ct(C,{transform:`translate(${z}px, ${G}px) scale(${J})`,color:ue,...K},{duration:Y,easing:ft,direction:V?"normal":"reverse"}).finished.then(()=>{C.style.removeProperty("visibility"),B.style.removeProperty("visibility")})})}},{flush:"post"});const f=v(()=>({isActive:S,isFocused:h,controlRef:y,blur:u,focus:m}));function R(V){V.target!==document.activeElement&&V.preventDefault()}function P(V){var C;V.key!=="Enter"&&V.key!==" "||(V.preventDefault(),V.stopPropagation(),(C=e["onClick:clear"])==null||C.call(e,new MouseEvent("click")))}return W(()=>{var z,G,N;const V=e.variant==="outlined",C=!!(a["prepend-inner"]||e.prependInnerIcon),B=!!(e.clearable||a.clear),p=!!(a["append-inner"]||e.appendInnerIcon||B),I=()=>a.label?a.label({...f.value,label:e.label,props:{for:x.value}}):e.label;return i("div",ae({class:["v-field",{"v-field--active":S.value,"v-field--appended":p,"v-field--center-affix":e.centerAffix??!b.value,"v-field--disabled":e.disabled,"v-field--dirty":e.dirty,"v-field--error":e.error,"v-field--flat":e.flat,"v-field--has-background":!!e.bgColor,"v-field--persistent-clear":e.persistentClear,"v-field--prepended":C,"v-field--reverse":e.reverse,"v-field--single-line":e.singleLine,"v-field--no-label":!I(),[`v-field--variant-${e.variant}`]:!0},t.value,M.value,g.value,s.value,c.value,o.value,e.class],style:[D.value,e.style],onClick:R},l),[i("div",{class:"v-field__overlay"},null),i(Xe,{name:"v-field",active:!!e.loading,color:e.error?"error":typeof e.loading=="string"?e.loading:e.color},{default:a.loader}),C&&i("div",{key:"prepend",class:"v-field__prepend-inner"},[e.prependInnerIcon&&i(d,{key:"prepend-icon",name:"prependInner"},null),(z=a["prepend-inner"])==null?void 0:z.call(a,f.value)]),i("div",{class:"v-field__field","data-no-activator":""},[["filled","solo","solo-inverted","solo-filled"].includes(e.variant)&&k.value&&i(X,{key:"floating-label",ref:F,class:[w.value],floating:!0,for:x.value,style:_.value},{default:()=>[I()]}),i(X,{ref:O,for:x.value},{default:()=>[I()]}),(G=a.default)==null?void 0:G.call(a,{...f.value,props:{id:x.value,class:"v-field__input","aria-describedby":T.value},focus:m,blur:u})]),B&&i(Ze,{key:"clear"},{default:()=>[le(i("div",{class:"v-field__clearable",onMousedown:K=>{K.preventDefault(),K.stopPropagation()}},[i(et,{defaults:{VIcon:{icon:e.clearIcon}}},{default:()=>[a.clear?a.clear({...f.value,props:{onKeydown:P,onFocus:m,onBlur:u,onClick:e["onClick:clear"]}}):i(d,{name:"clear",onKeydown:P,onFocus:m,onBlur:u},null)]})]),[[Pe,e.dirty]])]}),p&&i("div",{key:"append",class:"v-field__append-inner"},[(N=a["append-inner"])==null?void 0:N.call(a,f.value),e.appendInnerIcon&&i(d,{key:"append-icon",name:"appendInner"},null)]),i("div",{class:["v-field__outline",w.value],style:_.value},[V&&i(te,null,[i("div",{class:"v-field__outline__start"},null),k.value&&i("div",{class:"v-field__outline__notch"},[i(X,{ref:F,floating:!0,for:x.value},{default:()=>[I()]})]),i("div",{class:"v-field__outline__end"},null)]),b.value&&k.value&&i(X,{ref:F,floating:!0,for:x.value},{default:()=>[I()]})])])}),{controlRef:y}}});function _t(e){const r=Object.keys($e.props).filter(l=>!tt(l)&&l!=="class"&&l!=="style");return at(e,r)}const Rt=E({autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,...pe(),...Me()},"VTextarea"),Mt=H()({name:"VTextarea",directives:{Intersect:nt},inheritAttrs:!1,props:Rt(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,r){let{attrs:l,emit:n,slots:a}=r;const t=ie(e,"modelValue"),{isFocused:s,focus:g,blur:h}=Be(e),m=v(()=>typeof e.counterValue=="function"?e.counterValue(t.value):(t.value||"").toString().length),u=v(()=>{if(l.maxlength)return l.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function d(f,R){var P,V;!e.autofocus||!f||(V=(P=R[0].target)==null?void 0:P.focus)==null||V.call(P)}const c=$(),o=$(),S=ne(""),k=$(),L=v(()=>e.persistentPlaceholder||s.value||e.active);function x(){var f;k.value!==document.activeElement&&((f=k.value)==null||f.focus()),s.value||g()}function T(f){x(),n("click:control",f)}function O(f){n("mousedown:control",f)}function F(f){f.stopPropagation(),x(),ee(()=>{t.value="",ot(e["onClick:clear"],f)})}function y(f){var P;const R=f.target;if(t.value=R.value,(P=e.modelModifiers)!=null&&P.trim){const V=[R.selectionStart,R.selectionEnd];ee(()=>{R.selectionStart=V[0],R.selectionEnd=V[1]})}}const b=$(),M=$(+e.rows),D=v(()=>["plain","underlined"].includes(e.variant));lt(()=>{e.autoGrow||(M.value=+e.rows)});function w(){e.autoGrow&&ee(()=>{if(!b.value||!o.value)return;const f=getComputedStyle(b.value),R=getComputedStyle(o.value.$el),P=parseFloat(f.getPropertyValue("--v-field-padding-top"))+parseFloat(f.getPropertyValue("--v-input-padding-top"))+parseFloat(f.getPropertyValue("--v-field-padding-bottom")),V=b.value.scrollHeight,C=parseFloat(f.lineHeight),B=Math.max(parseFloat(e.rows)*C+P,parseFloat(R.getPropertyValue("--v-input-control-height"))),p=parseFloat(e.maxRows)*C+P||1/0,I=rt(V??0,B,p);M.value=Math.floor((I-P)/C),S.value=Se(I)})}Ce(w),A(t,w),A(()=>e.rows,w),A(()=>e.maxRows,w),A(()=>e.density,w);let _;return A(b,f=>{f?(_=new ResizeObserver(w),_.observe(b.value)):_==null||_.disconnect()}),xe(()=>{_==null||_.disconnect()}),W(()=>{const f=!!(a.counter||e.counter||e.counterValue),R=!!(f||a.details),[P,V]=it(l),{modelValue:C,...B}=ve.filterProps(e),p=_t(e);return i(ve,ae({ref:c,modelValue:t.value,"onUpdate:modelValue":I=>t.value=I,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-input--plain-underlined":D.value},e.class],style:e.style},P,B,{centerAffix:M.value===1&&!D.value,focused:s.value}),{...a,default:I=>{let{id:z,isDisabled:G,isDirty:N,isReadonly:K,isValid:se}=I;return i($e,ae({ref:o,style:{"--v-textarea-control-height":S.value},onClick:T,onMousedown:O,"onClick:clear":F,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},p,{id:z.value,active:L.value||N.value,centerAffix:M.value===1&&!D.value,dirty:N.value||e.dirty,disabled:G.value,focused:s.value,error:se.value===!1}),{...a,default:Q=>{let{props:{class:Y,...J}}=Q;return i(te,null,[e.prefix&&i("span",{class:"v-text-field__prefix"},[e.prefix]),le(i("textarea",ae({ref:k,class:Y,value:t.value,onInput:y,autofocus:e.autofocus,readonly:K.value,disabled:G.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:x,onBlur:h},J,V),null),[[st("intersect"),{handler:d},null,{once:!0}]]),e.autoGrow&&le(i("textarea",{class:[Y,"v-textarea__sizer"],id:`${J.id}-sizer`,"onUpdate:modelValue":ue=>t.value=ue,ref:b,readonly:!0,"aria-hidden":"true"},null),[[ut,t.value]]),e.suffix&&i("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:R?I=>{var z;return i(te,null,[(z=a.details)==null?void 0:z.call(a,I),f&&i(te,null,[i("span",null,null),i(Pt,{active:e.persistentCounter||s.value,value:m.value,max:u.value,disabled:e.disabled},a.counter)])])}:void 0})}),_e({},c,o,k)}});export{Mt as V,pt as a,bt as b,Me as c,ve as d,_t as e,_e as f,$e as g,Pt as h,mt as i,pe as m,Be as u};