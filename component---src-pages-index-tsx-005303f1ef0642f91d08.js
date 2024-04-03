"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[691],{3204:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,n=/([\p{Alpha}\p{N}_]|$)/u,s=/[_.\- ]+/,l=new RegExp("^"+s.source),i=new RegExp(s.source+n.source,"gu"),o=new RegExp("\\d+"+n.source,"gu"),c=(e,n)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(n={pascalCase:!1,preserveConsecutiveUppercase:!1,...n},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const s=!1===n.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(n.locale),c=!1===n.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(n.locale);if(1===e.length)return n.pascalCase?c(e):s(e);return e!==s(e)&&(e=((e,r,n)=>{let s=!1,l=!1,i=!1;for(let o=0;o<e.length;o++){const c=e[o];s&&t.test(c)?(e=e.slice(0,o)+"-"+e.slice(o),s=!1,i=l,l=!0,o++):l&&i&&a.test(c)?(e=e.slice(0,o-1)+"-"+e.slice(o-1),i=l,l=!1,s=!0):(s=r(c)===c&&n(c)!==c,i=l,l=n(c)===c&&r(c)!==c)}return e})(e,s,c)),e=e.replace(l,""),e=n.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,s):s(e),n.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(i.lastIndex=0,o.lastIndex=0,e.replace(i,((e,a)=>t(a))).replace(o,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,a){a.d(t,{L:function(){return g},M:function(){return E},P:function(){return x},S:function(){return F},_:function(){return i},a:function(){return l},b:function(){return d},g:function(){return u},h:function(){return o}});var r=a(7294),n=(a(3204),a(5697)),s=a.n(n);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},l.apply(this,arguments)}function i(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)t.indexOf(a=s[r])>=0||(n[a]=e[a]);return n}const o=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a){const r={};let n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}function d(e,t,a,r,n){return void 0===n&&(n={}),l({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:l({},n,{opacity:t?1:0})})}function u(e,t,a,r,n,s,i,o){const c={};s&&(c.backgroundColor=s,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=s,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),i&&(c.objectFit=i),o&&(c.objectPosition=o);const d=l({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:l({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const m=["children"],p=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:`data:image/svg+xml;charset=utf-8,%3Csvg%20height='${n}'%20width='${a}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E`,style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){let{children:t}=e,a=i(e,m);return r.createElement(r.Fragment,null,r.createElement(p,l({},a)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],y=function(e){let{src:t,srcSet:a,loading:n,alt:s="",shouldLoad:o}=e,c=i(e,f);return r.createElement("img",l({},c,{decoding:"async",loading:n,src:o?t:void 0,"data-src":o?void 0:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,alt:s}))},v=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,s=i(e,h);const o=s.sizes||(null==t?void 0:t.sizes),c=r.createElement(y,l({},s,t,{sizes:o,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:s}=e;return r.createElement("source",{key:`${t}-${s}-${a}`,type:s,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:o})})),c):c};var b;y.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},v.displayName="Picture",v.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const w=["fallback"],x=function(e){let{fallback:t}=e,a=i(e,w);return t?r.createElement(v,l({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",l({},a))};x.displayName="Placeholder",x.propTypes={fallback:n.string,sources:null==(b=v.propTypes)?void 0:b.sources,alt:function(e,t,a){return e[t]?new Error(`Invalid prop \`${t}\` supplied to \`${a}\`. Validation failed.`):null}};const E=function(e){return r.createElement(r.Fragment,null,r.createElement(v,l({},e)),r.createElement("noscript",null,r.createElement(v,l({},e,{shouldLoad:!0}))))};E.displayName="MainImage",E.propTypes=v.propTypes;const k=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],N=["style","className"],L=e=>e.replace(/\n/g,""),C=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),l=3;l<r;l++)n[l-3]=arguments[l];return e.alt||""===e.alt?s().string.apply(s(),[e,t,a].concat(n)):new Error(`The "alt" prop is required in ${a}. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html`)},S={image:s().object.isRequired,alt:C},T=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],I=["style","className"],$=new Set;let j,R;const O=function(e){let{as:t="div",image:n,style:s,backgroundColor:d,className:u,class:m,onStartLoad:p,onLoad:g,onError:f}=e,h=i(e,T);const{width:y,height:v,layout:b}=n,w=c(y,v,b),{style:x,className:E}=w,k=i(w,I),N=(0,r.useRef)(),L=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);m&&(u=m);const C=function(e,t,a){let r="";return"fullWidth"===e&&(r=`<div aria-hidden="true" style="padding-top: ${a/t*100}%;"></div>`),"constrained"===e&&(r=`<div style="max-width: ${t}px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height='${a}'%20width='${t}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E" style="max-width: 100%; display: block; position: static;"></div>`),r}(b,y,v);return(0,r.useEffect)((()=>{j||(j=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return R=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=N.current.querySelector("[data-gatsby-image-ssr]");if(e&&o())return e.complete?(null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void $.add(L);if(R&&$.has(L))return;let t,r;return j.then((e=>{let{renderImageToString:a,swapPlaceholderImage:i}=e;N.current&&(N.current.innerHTML=a(l({isLoading:!0,isLoaded:$.has(L),image:n},h)),$.has(L)||(t=requestAnimationFrame((()=>{N.current&&(r=i(N.current,L,$,s,p,g,f))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{$.has(L)&&R&&(N.current.innerHTML=R(l({isLoading:$.has(L),isLoaded:$.has(L),image:n},h)),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}))}),[n]),(0,r.createElement)(t,l({},k,{style:l({},x,s,{backgroundColor:d}),className:`${E}${u?` ${u}`:""}`,ref:N,dangerouslySetInnerHTML:{__html:C},suppressHydrationWarning:!0}))},_=(0,r.memo)((function(e){return e.image?(0,r.createElement)(O,e):null}));_.propTypes=S,_.displayName="GatsbyImage";const q=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function A(e){return function(t){let{src:a,__imageData:n,__error:s}=t,o=i(t,q);return s&&console.warn(s),n?r.createElement(e,l({image:n},o)):(console.warn("Image not loaded",a),null)}}const z=A((function(e){let{as:t="div",className:a,class:n,style:s,image:o,loading:m="lazy",imgClassName:p,imgStyle:f,backgroundColor:h,objectFit:y,objectPosition:v}=e,b=i(e,k);if(!o)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(a=n),f=l({objectFit:y,objectPosition:v,backgroundColor:h},f);const{width:w,height:C,layout:S,images:T,placeholder:I,backgroundColor:$}=o,j=c(w,C,S),{style:R,className:O}=j,_=i(j,N),q={fallback:void 0,sources:[]};return T.fallback&&(q.fallback=l({},T.fallback,{srcSet:T.fallback.srcSet?L(T.fallback.srcSet):void 0})),T.sources&&(q.sources=T.sources.map((e=>l({},e,{srcSet:L(e.srcSet)})))),r.createElement(t,l({},_,{style:l({},R,s,{backgroundColor:h}),className:`${O}${a?` ${a}`:""}`}),r.createElement(g,{layout:S,width:w,height:C},r.createElement(x,l({},u(I,!1,S,w,C,$,y,v))),r.createElement(E,l({"data-gatsby-image-ssr":"",className:p},b,d("eager"===m,!1,q,m,f)))))})),P=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?s().number.apply(s(),[e,t].concat(r)):new Error(`"${t}" ${e[t]} may not be passed when layout is fullWidth.`)},M=new Set(["fixed","fullWidth","constrained"]),W={src:s().string.isRequired,alt:C,width:P,height:P,sizes:s().string,layout:e=>{if(void 0!==e.layout&&!M.has(e.layout))return new Error(`Invalid value ${e.layout}" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".`)}};z.displayName="StaticImage",z.propTypes=W;const F=A(_);F.displayName="StaticImage",F.propTypes=W},2555:function(e,t,a){a.r(t),a.d(t,{default:function(){return p}});var r=a(7294),n=a(1883);var s=e=>{let{categories:t,selectCategory:a}=e;return r.createElement("div",{className:"hidden lg:block mx-5 overflow-auto"},r.createElement("div",{className:"flex flex-wrap my-2 cursor-pointer mx-2"},t.map((e=>r.createElement("div",{key:null==e?void 0:e.fieldValue,onClick:()=>{return t=e.fieldValue,void a(t);var t},className:"px-2 py-1 my-1 mx-1 text-xs bg-gray-200 rounded-full shadow-sm"},null==e?void 0:e.fieldValue.replaceAll(" "," "),r.createElement("span",{className:"text-gray-300 text-xs"},"(",e.totalCount,")"))))))},l=a(8032);var i=()=>r.createElement("div",{className:"my-6 mx-6 pl-2"},r.createElement(l.S,{className:"bio-avatar object-cover mb-3",formats:["auto","webp","avif"],src:"../images/profile.jpeg",alt:"Profile picture",__imageData:a(4589)}));var o=e=>{const t=(0,n.useStaticQuery)("1975914579"),{0:a,1:l}=(0,r.useState)(""),o=e=>{l(e)},{0:c,1:d}=(0,r.useState)(!1),u=t.category.group,m=t.allMarkdownRemark.edges.filter((t=>{var r,n;return(null===(r=t.node.frontmatter)||void 0===r?void 0:r.category)==(""==a?null==e||null===(n=e.props)||void 0===n?void 0:n.frontmatter.category:a)}));return r.createElement("div",{className:"my-3 mx-2"},r.createElement("div",{className:"hidden lg:block"},r.createElement(i,null),r.createElement("div",{className:"mx-3 px-3 py-2 text-xs font-semibold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"},"CATEGORY"),r.createElement(s,{categories:u,selectCategory:o}),r.createElement("div",{className:"mx-3 px-3 py-2 text-xs font-semibold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"},"LIST"),null==m?void 0:m.map((t=>{var a;let{node:s}=t;return r.createElement("div",{key:s.id,className:""+((null==e||null===(a=e.props)||void 0===a?void 0:a.id)==s.id?"text-purple-400 hover:text-rose-300 pl-2 mx-3 my-3 rounded":"hover:text-rose-300 pl-2 mx-3 my-3")},r.createElement(n.Link,{to:s.frontmatter.slug},r.createElement("span",{className:"font-semibold text-xs px-2"},s.frontmatter.title),r.createElement("span",{className:"pl-1 italic text-xs text-gray-300"},s.frontmatter.category),r.createElement("span",{className:"pl-3 italic text-xs text-gray-300"},s.frontmatter.date)))}))),r.createElement("div",{className:"lg:hidden flex"},r.createElement(s,{categories:u,selectCategory:o})))};var c=e=>{const t=(0,r.useRef)();return(0,r.useEffect)((()=>{t.current=new IntersectionObserver((e=>{e.map((e=>{e.target.classList.remove("text-slate-300"),e.isIntersecting&&e.intersectionRatio>1&&e.target.classList.add("text-slate-300")}),{threshold:1}),document.querySelectorAll("h3").forEach((e=>{t.observe(e)}))}))}),[]),r.createElement("div",{id:"toc",className:"lg:fixed lg:block hidden text-xs",dangerouslySetInnerHTML:{__html:null==e?void 0:e.props}})};var d=e=>{var t;const a=null===(t=e.markdown.frontmatter)||void 0===t?void 0:t.category,n=(0,r.useRef)({});return r.createElement("div",{className:"lg:grid lg:grid-cols-12"},r.createElement("div",{className:"lg:col-span-10 mx-6 py-6 my-6 prose"},r.createElement("span",{className:"mr-3 bg-purple-500 text-white px-2 py-1 text-sm rounded"},a),r.createElement("div",{dangerouslySetInnerHTML:{__html:e.markdown.html}})),r.createElement("div",{className:"lg:col-span-2 min-w-auto overflow-y-auto mx-6 py-6 my-6"},r.createElement(c,{props:e.markdown.tableOfContents,currId:n.current.id})))};var u=()=>r.createElement("div",{className:"m-2 lg:flex hidden fixed"},r.createElement("span",{className:"text-xs ms-9 hover:bg-purple-200 cursor-pointer"},r.createElement(n.Link,{to:"https://github.com/elliekoooo/"},"about")),r.createElement("span",{className:"text-xs ms-5 hover:bg-purple-200 cursor-pointer"},r.createElement(n.Link,{to:"https://github.com/elliekoooo"},"github")));var m=e=>{const t=e.props;if(null!=window)return r.createElement("div",{className:"container"},r.createElement(u,null),r.createElement("div",{className:"grid lg:grid-cols-12 sm:grid-cols-4 gap-4"},r.createElement("div",{className:"lg:col-span-4 sm:col-span-9 min-w-auto"},r.createElement(o,{props:t})),r.createElement("div",{className:"lg:col-span-8 sm:col-span-9 overflow-y-auto"},r.createElement(d,{location:location,markdown:t}))));console.log(window)};var p=e=>{let{pageContext:t,data:a,location:n}=e;const{markdownRemark:s}=a;return r.createElement(m,{props:s,location:n})}},4589:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#88b8d8","images":{"fallback":{"src":"/static/06d218eac2999bf56a17820189eee84b/81bf6/profile.jpg","srcSet":"/static/06d218eac2999bf56a17820189eee84b/77ce8/profile.jpg 75w,\\n/static/06d218eac2999bf56a17820189eee84b/f1a3a/profile.jpg 150w,\\n/static/06d218eac2999bf56a17820189eee84b/81bf6/profile.jpg 300w","sizes":"(min-width: 300px) 300px, 100vw"},"sources":[{"srcSet":"/static/06d218eac2999bf56a17820189eee84b/9d8d8/profile.avif 75w,\\n/static/06d218eac2999bf56a17820189eee84b/329f7/profile.avif 150w,\\n/static/06d218eac2999bf56a17820189eee84b/d0c69/profile.avif 300w","type":"image/avif","sizes":"(min-width: 300px) 300px, 100vw"},{"srcSet":"/static/06d218eac2999bf56a17820189eee84b/0987d/profile.webp 75w,\\n/static/06d218eac2999bf56a17820189eee84b/70dfd/profile.webp 150w,\\n/static/06d218eac2999bf56a17820189eee84b/9b21f/profile.webp 300w","type":"image/webp","sizes":"(min-width: 300px) 300px, 100vw"}]},"width":300,"height":200}')}}]);
//# sourceMappingURL=component---src-pages-index-tsx-005303f1ef0642f91d08.js.map