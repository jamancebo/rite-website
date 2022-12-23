(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[12],{101:function(e,t){},114:function(e,t,r){"use strict";var n=r(0);t.a=function(e){let{icon:t,size:r=24,...c}=e;return Object(n.cloneElement)(t,{width:r,height:r,...c})}},115:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return a}));var n=r(5);const c=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";const a=e.filter(e=>e.attribute===r.taxonomy),l=a.length?a[0]:null;if(!(l&&l.slug&&Array.isArray(l.slug)&&l.slug.includes(c)))return;const s=l.slug.filter(e=>e!==c),i=e.filter(e=>e.attribute!==r.taxonomy);s.length>0&&(l.slug=s.sort(),i.push(l)),t(Object(n.sortBy)(i,"attribute"))},a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"in";if(!r||!r.taxonomy)return[];const l=e.filter(e=>e.attribute!==r.taxonomy);return 0===c.length?t(l):(l.push({attribute:r.taxonomy,operator:a,slug:c.map(e=>{let{slug:t}=e;return t}).sort()}),t(Object(n.sortBy)(l,"attribute"))),l}},120:function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return l}));var n=r(2);const c=Object(n.getSetting)("attributes",[]).reduce((e,t)=>{const r=(n=t)&&n.attribute_name?{id:parseInt(n.attribute_id,10),name:n.attribute_name,taxonomy:"pa_"+n.attribute_name,label:n.attribute_label}:null;var n;return r&&r.id&&e.push(r),e},[]),a=e=>{if(e)return c.find(t=>t.id===e)},l=e=>{if(e)return c.find(t=>t.taxonomy===e)}},139:function(e){e.exports=JSON.parse('{"name":"woocommerce/active-filters","version":"1.0.0","title":"Active Product Filters Controls","description":"Display the currently active product filters.","category":"woocommerce","keywords":["WooCommerce"],"supports":{"html":false,"multiple":false,"inserter":false,"color":{"text":true,"background":false},"lock":false},"attributes":{"displayStyle":{"type":"string","default":"list"},"headingLevel":{"type":"number","default":3}},"textdomain":"woocommerce","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}')},159:function(e,t,r){"use strict";var n=r(0),c=r(1),a=r(31),l=r(2),s=r(4),i=r.n(s),o=r(19),u=r(74),b=r(20),f=r(226),d=r(71),p=r(67);r(230);var m=r(120),O=r(42),j=r(61),g=r(23),y=r(115),_=e=>{let{attributeObject:t,slugs:r=[],operator:s="in",displayStyle:i,isLoadingCallback:o}=e;const{results:b,isLoading:d}=Object(j.a)({namespace:"/wc/store/v1",resourceName:"products/attributes/terms",resourceValues:[t.id]}),[p,m]=Object(a.b)("attributes",[]);if(Object(n.useEffect)(()=>{o(d)},[d,o]),!Array.isArray(b)||!Object(f.b)(b)||!Object(f.a)(p))return null;const _=t.label,v=Object(l.getSettingWithCoercion)("is_rendering_php_template",!1,u.a);return Object(n.createElement)("li",null,Object(n.createElement)("span",{className:"wc-block-active-filters__list-item-type"},_,":"),Object(n.createElement)("ul",null,r.map((e,r)=>{const a=b.find(t=>t.slug===e);if(!a)return null;let l="";return r>0&&"and"===s&&(l=Object(n.createElement)("span",{className:"wc-block-active-filters__list-item-operator"},Object(c.__)("All","woocommerce"))),Object(O.f)({type:_,name:Object(g.decodeEntities)(a.name||e),prefix:l,isLoading:d,removeCallback:()=>{const r=p.find(e=>{let{attribute:r}=e;return r==="pa_"+t.name});1===(null==r?void 0:r.slug.length)?Object(O.e)("query_type_"+t.name,"filter_"+t.name):Object(O.e)({["filter_"+t.name]:e}),v||Object(y.a)(p,m,t,e)},showLabel:!1,displayStyle:i})})))},v=e=>{let{displayStyle:t,isLoading:r}=e;return r?Object(n.createElement)(n.Fragment,null,[...Array("list"===t?2:3)].map((e,r)=>Object(n.createElement)("li",{className:"list"===t?"show-loading-state-list":"show-loading-state-chips",key:r},Object(n.createElement)("span",{className:"show-loading-state__inner"})))):null},h=r(45);t.a=e=>{let{attributes:t,isEditor:r=!1}=e;const s=Object(h.b)(),j=function(){const e=Object(n.useRef)(!1);return Object(n.useEffect)(()=>(e.current=!0,()=>{e.current=!1}),[]),Object(n.useCallback)(()=>e.current,[])}()(),g=Object(l.getSettingWithCoercion)("is_rendering_php_template",!1,u.a),[y,w]=Object(n.useState)(!0),k=Object(O.c)()&&!r&&y,[E,S]=Object(a.b)("attributes",[]),[N,x]=Object(a.b)("stock_status",[]),[A,C]=Object(a.b)("min_price"),[L,R]=Object(a.b)("max_price"),[F,T]=Object(a.b)("rating"),Q=Object(l.getSetting)("stockStatusOptions",[]),P=Object(l.getSetting)("attributes",[]),B=Object(n.useMemo)(()=>{if(k||0===N.length||(e=N,!Array.isArray(e)||!e.every(e=>["instock","outofstock","onbackorder"].includes(e)))||!(e=>Object(b.a)(e)&&Object.keys(e).every(e=>["instock","outofstock","onbackorder"].includes(e)))(Q))return null;var e;const r=Object(c.__)("Stock Status","woocommerce");return Object(n.createElement)("li",null,Object(n.createElement)("span",{className:"wc-block-active-filters__list-item-type"},r,":"),Object(n.createElement)("ul",null,N.map(e=>Object(O.f)({type:r,name:Q[e],removeCallback:()=>{if(Object(O.e)({filter_stock_status:e}),!g){const t=N.filter(t=>t!==e);x(t)}},showLabel:!1,displayStyle:t.displayStyle}))))},[k,Q,N,x,t.displayStyle,g]),Y=Object(n.useMemo)(()=>k||!Number.isFinite(A)&&!Number.isFinite(L)?null:Object(O.f)({type:Object(c.__)("Price","woocommerce"),name:Object(O.b)(A,L),removeCallback:()=>{Object(O.e)("max_price","min_price"),g||(C(void 0),R(void 0))},displayStyle:t.displayStyle}),[k,A,L,t.displayStyle,C,R,g]),V=Object(n.useMemo)(()=>!Object(f.a)(E)&&j||!E.length&&!Object(O.g)(P)?(y&&w(!1),null):E.map(e=>{const r=Object(m.b)(e.attribute);return r?Object(n.createElement)(_,{attributeObject:r,displayStyle:t.displayStyle,slugs:e.slug,key:e.attribute,operator:e.operator,isLoadingCallback:w}):(y&&w(!1),null)}),[E,j,P,y,t.displayStyle]);Object(n.useEffect)(()=>{var e;if(!g)return;if(F.length&&F.length>0)return;const t=null===(e=Object(d.d)("rating_filter"))||void 0===e?void 0:e.toString();t&&T(t.split(","))},[g,F,T]);const K=Object(n.useMemo)(()=>{if(k||0===F.length||(e=F,!Array.isArray(e)||!e.every(e=>["1","2","3","4","5"].includes(e))))return null;var e;const r=Object(c.__)("Rating","woocommerce");return Object(n.createElement)("li",null,Object(n.createElement)("span",{className:"wc-block-active-filters__list-item-type"},r,":"),Object(n.createElement)("ul",null,F.map(e=>Object(O.f)({type:r,name:Object(c.sprintf)(
/* translators: %s is referring to the average rating value */
Object(c.__)("Rated %s out of 5","woocommerce"),e),removeCallback:()=>{if(Object(O.e)({rating_filter:e}),!g){const t=F.filter(t=>t!==e);T(t)}},showLabel:!1,displayStyle:t.displayStyle}))))},[k,F,T,t.displayStyle,g]);if(!k&&!(E.length>0||N.length>0||F.length>0||Number.isFinite(A)||Number.isFinite(L))&&!r)return s(!1),null;const W="h"+t.headingLevel,U=Object(n.createElement)(W,{className:"wc-block-active-filters__title"},t.heading),z=k?Object(n.createElement)(p.a,null,U):U;if(!Object(l.getSettingWithCoercion)("has_filterable_products",!1,u.a))return s(!1),null;s(!0);const D=i()("wc-block-active-filters__list",{"wc-block-active-filters__list--chips":"chips"===t.displayStyle,"wc-block-active-filters--loading":k});return Object(n.createElement)(n.Fragment,null,!r&&t.heading&&z,Object(n.createElement)("div",{className:"wc-block-active-filters"},Object(n.createElement)("ul",{className:D},r?Object(n.createElement)(n.Fragment,null,Object(O.f)({type:Object(c.__)("Size","woocommerce"),name:Object(c.__)("Small","woocommerce"),displayStyle:t.displayStyle}),Object(O.f)({type:Object(c.__)("Color","woocommerce"),name:Object(c.__)("Blue","woocommerce"),displayStyle:t.displayStyle})):Object(n.createElement)(n.Fragment,null,Object(n.createElement)(v,{isLoading:k,displayStyle:t.displayStyle}),Y,B,V,K)),k?Object(n.createElement)("span",{className:"wc-block-active-filters__clear-all-placeholder"}):Object(n.createElement)("button",{className:"wc-block-active-filters__clear-all",onClick:()=>{Object(O.a)(),g||(C(void 0),R(void 0),S([]),x([]),T([]))}},Object(n.createElement)(o.a,{label:Object(c.__)("Clear All","woocommerce"),screenReaderLabel:Object(c.__)("Clear All Filters","woocommerce")}))))}},19:function(e,t,r){"use strict";var n=r(0),c=r(4),a=r.n(c);t.a=e=>{let t,{label:r,screenReaderLabel:c,wrapperElement:l,wrapperProps:s={}}=e;const i=null!=r,o=null!=c;return!i&&o?(t=l||"span",s={...s,className:a()(s.className,"screen-reader-text")},Object(n.createElement)(t,s,c)):(t=l||n.Fragment,i&&o&&r!==c?Object(n.createElement)(t,s,Object(n.createElement)("span",{"aria-hidden":"true"},r),Object(n.createElement)("span",{className:"screen-reader-text"},c)):Object(n.createElement)(t,s,r))}},20:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return c}));const n=e=>!(e=>null===e)(e)&&e instanceof Object&&e.constructor===Object;function c(e,t){return n(e)&&t in e}},216:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r(100);var n=r(46);const c=()=>n.m>1},217:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(30),c=r(20);const a=e=>Object(n.a)(e)?JSON.parse(e)||{}:Object(c.a)(e)?e:{}},219:function(e,t){},226:function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return s}));var n=r(20);const c=e=>Object(n.b)(e,"count")&&Object(n.b)(e,"description")&&Object(n.b)(e,"id")&&Object(n.b)(e,"name")&&Object(n.b)(e,"parent")&&Object(n.b)(e,"slug")&&"number"==typeof e.count&&"string"==typeof e.description&&"number"==typeof e.id&&"string"==typeof e.name&&"number"==typeof e.parent&&"string"==typeof e.slug,a=e=>Array.isArray(e)&&e.every(c),l=e=>Object(n.b)(e,"attribute")&&Object(n.b)(e,"operator")&&Object(n.b)(e,"slug")&&"string"==typeof e.attribute&&"string"==typeof e.operator&&Array.isArray(e.slug)&&e.slug.every(e=>"string"==typeof e),s=e=>Array.isArray(e)&&e.every(l)},229:function(e,t,r){"use strict";var n=r(0),c=r(15);const a=Object(n.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(n.createElement)(c.Path,{d:"M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"}));t.a=a},230:function(e,t){},235:function(e,t,r){"use strict";var n=r(12),c=r.n(n),a=r(0),l=r(4),s=r.n(l),i=r(1),o=r(114),u=r(229);r(219);var b=e=>{let{text:t,screenReaderText:r="",element:n="li",className:l="",radius:i="small",children:o=null,...u}=e;const b=n,f=s()(l,"wc-block-components-chip","wc-block-components-chip--radius-"+i),d=Boolean(r&&r!==t);return Object(a.createElement)(b,c()({className:f},u),Object(a.createElement)("span",{"aria-hidden":d,className:"wc-block-components-chip__text"},t),d&&Object(a.createElement)("span",{className:"screen-reader-text"},r),o)};t.a=e=>{let{ariaLabel:t="",className:r="",disabled:n=!1,onRemove:l=(()=>{}),removeOnAnyClick:f=!1,text:d,screenReaderText:p="",...m}=e;const O=f?"span":"button";if(!t){const e=p&&"string"==typeof p?p:d;t="string"!=typeof e?
/* translators: Remove chip. */
Object(i.__)("Remove","woocommerce"):Object(i.sprintf)(
/* translators: %s text of the chip to remove. */
Object(i.__)('Remove "%s"',"woocommerce"),e)}const j={"aria-label":t,disabled:n,onClick:l,onKeyDown:e=>{"Backspace"!==e.key&&"Delete"!==e.key||l()}},g=f?j:{},y=f?{"aria-hidden":!0}:j;return Object(a.createElement)(b,c()({},m,g,{className:s()(r,"is-removable"),element:f?"button":m.element,screenReaderText:p,text:d}),Object(a.createElement)(O,c()({className:"wc-block-components-chip__remove"},y),Object(a.createElement)(o.a,{className:"wc-block-components-chip__remove-icon",icon:u.a,size:16})))}},25:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(0);const c=Object(n.createContext)("page"),a=()=>Object(n.useContext)(c);c.Provider},29:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var n=r(0),c=r(13),a=r.n(c);function l(e){const t=Object(n.useRef)(e);return a()(e,t.current)||(t.current=e),t.current}},292:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var n=r(111),c=r(216),a=r(20),l=r(217);const s=e=>{if(!Object(c.a)())return{className:"",style:{}};const t=Object(a.a)(e)?e:{},r=Object(l.a)(t.style);return Object(n.__experimentalUseColorProps)({...t,style:r})}},30:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));const n=e=>"string"==typeof e},31:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return f})),r.d(t,"c",(function(){return d}));var n=r(3),c=r(6),a=r(0),l=r(13),s=r.n(l),i=r(29),o=r(62),u=r(25);const b=e=>{const t=Object(u.a)();e=e||t;const r=Object(c.useSelect)(t=>t(n.QUERY_STATE_STORE_KEY).getValueForQueryContext(e,void 0),[e]),{setValueForQueryContext:l}=Object(c.useDispatch)(n.QUERY_STATE_STORE_KEY);return[r,Object(a.useCallback)(t=>{l(e,t)},[e,l])]},f=(e,t,r)=>{const l=Object(u.a)();r=r||l;const s=Object(c.useSelect)(c=>c(n.QUERY_STATE_STORE_KEY).getValueForQueryKey(r,e,t),[r,e]),{setQueryValue:i}=Object(c.useDispatch)(n.QUERY_STATE_STORE_KEY);return[s,Object(a.useCallback)(t=>{i(r,e,t)},[r,e,i])]},d=(e,t)=>{const r=Object(u.a)();t=t||r;const[n,c]=b(t),l=Object(i.a)(n),f=Object(i.a)(e),d=Object(o.a)(f),p=Object(a.useRef)(!1);return Object(a.useEffect)(()=>{s()(d,f)||(c(Object.assign({},l,f)),p.current=!0)},[l,f,d,c]),p.current?[n,c]:[e,c]}},4:function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function c(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var l=c.apply(null,n);l&&e.push(l)}}else if("object"===a)if(n.toString===Object.prototype.toString)for(var s in n)r.call(n,s)&&n[s]&&e.push(s);else e.push(n.toString())}}return e.join(" ")}e.exports?(c.default=c,e.exports=c):void 0===(n=function(){return c}.apply(t,[]))||(e.exports=n)}()},42:function(e,t,r){"use strict";r.d(t,"b",(function(){return p})),r.d(t,"f",(function(){return m})),r.d(t,"e",(function(){return O})),r.d(t,"a",(function(){return y})),r.d(t,"c",(function(){return _})),r.d(t,"g",(function(){return v})),r.d(t,"d",(function(){return h}));var n=r(0),c=r(1),a=r(40),l=r(235),s=r(19),i=r(14),o=r(71),u=r(114),b=r(229),f=r(30),d=r(139);const p=(e,t)=>Number.isFinite(e)&&Number.isFinite(t)?Object(c.sprintf)(
/* translators: %1$s min price, %2$s max price */
Object(c.__)("Between %1$s and %2$s","woocommerce"),Object(a.formatPrice)(e),Object(a.formatPrice)(t)):Number.isFinite(e)?Object(c.sprintf)(
/* translators: %s min price */
Object(c.__)("From %s","woocommerce"),Object(a.formatPrice)(e)):Object(c.sprintf)(
/* translators: %s max price */
Object(c.__)("Up to %s","woocommerce"),Object(a.formatPrice)(t)),m=e=>{let{type:t,name:r,prefix:a="",removeCallback:i=(()=>null),showLabel:o=!0,displayStyle:f}=e;const d=a?Object(n.createElement)(n.Fragment,null,a," ",r):r,p=Object(c.sprintf)(
/* translators: %s attribute value used in the filter. For example: yellow, green, small, large. */
Object(c.__)("Remove %s filter","woocommerce"),r);return Object(n.createElement)("li",{className:"wc-block-active-filters__list-item",key:t+":"+r},o&&Object(n.createElement)("span",{className:"wc-block-active-filters__list-item-type"},t+": "),"chips"===f?Object(n.createElement)(l.a,{element:"span",text:d,onRemove:i,radius:"large",ariaLabel:p}):Object(n.createElement)("span",{className:"wc-block-active-filters__list-item-name"},Object(n.createElement)("button",{className:"wc-block-active-filters__list-item-remove",onClick:i},Object(n.createElement)(u.a,{className:"wc-block-components-chip__remove-icon",icon:b.a,size:16}),Object(n.createElement)(s.a,{screenReaderLabel:p})),d))},O=function(){if(!window)return;const e=window.location.href,t=Object(i.getQueryArgs)(e),r=Object(i.removeQueryArgs)(e,...Object.keys(t));for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];c.forEach(e=>{if("string"==typeof e)return delete t[e];if("object"==typeof e){const r=Object.keys(e)[0],n=t[r].toString().split(",");t[r]=n.filter(t=>t!==e[r]).join(",")}});const l=Object.fromEntries(Object.entries(t).filter(e=>{let[,t]=e;return t})),s=Object(i.addQueryArgs)(r,l);Object(o.c)(s)},j=["min_price","max_price","rating_filter","filter_","query_typ����U  ����U                  ��j�U          `���U  ����U          ����U  �      ����U          }return t},y=()=>{if(!window)return;const e=window.location.href,t=Object(i.getQueryArgs)(e),r=Object(i.removeQueryArgs)(e,...Object.keys(t)),n=Object.fromEntries(Object.keys(t).filter(e=>!g(e)).map(e=>[e,t[e]])),c=Object(i.addQueryArgs)(r,n);Object(o.c)(c)},_=()=>{if(!window)return!1;const e=window.location.href,t=Object(i.getQueryArgs)(e),r=Object.keys(t);let n=!1;for(let e=0;r.length>e;e++){const t=r[e];if(g(t)){n=!0;break}}return n},v=e=>{if(!window)return!1;const t=e.map(e=>"filter_"+e.attribute_name),r=window.location.href,n=Object(i.getQueryArgs)(r),c=Object.keys(n);let a=!1;for(let e=0;c.length>e;e++){const r=c[e];if(t.includes(r)){a=!0;break}}return a},h=e=>({heading:Object(f.a)(null==e?void 0:e.heading)?e.heading:"",headingLevel:Object(f.a)(null==e?void 0:e.headingLevel)&&parseInt(e.headingLevel,10)||d.attributes.headingLevel.default,displayStyle:Object(f.a)(null==e?void 0:e.displayStyle)&&e.displayStyle||d.attributes.displayStyle.default})},456:function(e,t,r){"use strict";r.r(t);var n=r(0),c=r(292),a=r(30),l=r(159),s=r(42);t.default=e=>{const t=Object(c.a)(e);return Object(n.createElement)("div",{className:Object(a.a)(e.className)?e.className:"",style:{...t.style}},Object(n.createElement)(l.a,{isEditor:!1,attributes:Object(s.d)(e)}))}},61:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r(3),c=r(6),a=r(0),l=r(29),s=r(76);const i=e=>{const{namespace:t,resourceName:r,resourceValues:i=[],query:o={},shouldSelect:u=!0}=e;if(!t||!r)throw new Error("The options object must have valid values for the namespace and the resource properties.");const b=Object(a.useRef)({results:[],isLoading:!0}),f=Object(l.a)(o),d=Object(l.a)(i),p=Object(s.a)(),m=Object(c.useSelect)(e=>{if(!u)return null;const c=e(n.COLLECTIONS_STORE_KEY),a=[t,r,f,d],l=c.getCollectionError(...a);if(l){if(!(l instanceof Error))throw new Error("TypeError: `error` object is not an instance of Error constructor");p(l)}return{results:c.getCollection(...a),isLoading:!c.hasFinishedResolution("getCollection",a)}},[t,r,d,f,u]);return null!==m&&(b.current=m),b.current}},62:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(8);function c(e,t){const r=Object(n.useRef)();return Object(n.useEffect)(()=>{r.current===e||t&&!t(e,r.current)||(r.current=e)},[e,t]),r.current}},67:function(e,t,r){"use strict";var n=r(0);r(101),t.a=e=>{let{children:t}=e;return Object(n.createElement)("div",{className:"wc-block-filter-title-placeholder"},t)}},71:function(e,t,r){"use strict";r.d(t,"b",(function(){return s})),r.d(t,"a",(function(){return i})),r.d(t,"d",(function(){return o})),r.d(t,"c",(function(){return u}));var n=r(14),c=r(2),a=r(74);const l=Object(c.getSettingWithCoercion)("is_rendering_php_template",!1,a.a),s="query_type_",i="filter_";function o(e){return window?Object(n.getQueryArg)(window.location.href,e):null}function u(e){l?window.location.href=e:window.history.replaceState({},"",e)}},74:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));const n=e=>"boolean"==typeof e},76:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(0);const c=()=>{const[,e]=Object(n.useState)();return Object(n.useCallback)(t=>{e(()=>{throw t})},[])}}}]);