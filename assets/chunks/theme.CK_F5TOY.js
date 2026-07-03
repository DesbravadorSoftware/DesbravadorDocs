const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/VPLocalSearchBox.Cg1mKnvi.js","assets/chunks/framework.CPTW7DhK.js"])))=>i.map(i=>d[i]);
import{r as b,j as l,Z as u,H as M,Q as r,n as U,a4 as $,h as L,ax as v,b as be,i as f,c as y,ae as te,z as je,a8 as Ge,aw as ae,d as x,g as s,aa as c,y as J,ah as pe,X as D,as as j,au as oe,N as G,O as ne,av as ge,P as We,t as Ke,F as A,Y as z,$ as Y,L as re,o as w,a1 as Ve,a0 as R,E as Te,aj as se,D as K,x as ie,aq as Je,I as ke,M as me,G as Ce,ap as Ie,v as le,W as Ye,q as Xe,_ as Qe,al as Ne,V as Me,a5 as Ze,az as et,K as tt,aA as at,an as ot}from"./framework.CPTW7DhK.js";const nt=b({__name:"VPBadge",props:{text:{},type:{default:"tip"}},setup(e){return(t,a)=>(r(),l("span",{class:M(["VPBadge",e.type])},[u(t.$slots,"default",{},()=>[U($(e.text),1)])],2))}}),rt={key:0,class:"VPBackdrop"},st=b({__name:"VPBackdrop",props:{show:{type:Boolean}},setup(e){return(t,a)=>(r(),L(be,{name:"fade"},{default:v(()=>[e.show?(r(),l("div",rt)):f("",!0)]),_:1}))}}),it=y(st,[["__scopeId","data-v-c79a1216"]]),C=te;function lt(e,t){let a,o=!1;return()=>{a&&clearTimeout(a),o?a=setTimeout(e,t):(e(),(o=!0)&&setTimeout(()=>o=!1,t))}}function ve(e){return e.startsWith("/")?e:`/${e}`}function ye(e){const{pathname:t,search:a,hash:o,protocol:n}=new URL(e,"http://a.com");if(je(e)||e.startsWith("#")||!n.startsWith("http")||!Ge(t))return e;const{site:i}=C(),d=t.endsWith("/")||t.endsWith(".html")?e:e.replace(/(?:(^\.+)\/)?.*$/,`$1${t.replace(/(\.md)?$/,i.value.cleanUrls?"":".html")}${a}${o}`);return ae(d)}function Q({correspondingLink:e=!1}={}){const{site:t,localeIndex:a,page:o,theme:n,hash:i}=C(),d=x(()=>{var m,_;return{label:(m=t.value.locales[a.value])==null?void 0:m.label,link:((_=t.value.locales[a.value])==null?void 0:_.link)||(a.value==="root"?"/":`/${a.value}/`)}});return{localeLinks:x(()=>Object.entries(t.value.locales).flatMap(([m,_])=>d.value.label===_.label?[]:{text:_.label,link:ct(_.link||(m==="root"?"/":`/${m}/`),n.value.i18nRouting!==!1&&e,o.value.relativePath.slice(d.value.link.length-1),!t.value.cleanUrls)+i.value})),currentLang:d}}function ct(e,t,a,o){return t?e.replace(/\/$/,"")+ve(a.replace(/(^|\/)index\.md$/,"$1").replace(/\.md$/,o?".html":"")):e}const dt={class:"NotFound"},ut={class:"code"},pt={class:"title"},mt={class:"quote"},vt={class:"action"},ft=["href","aria-label"],ht=b({__name:"NotFound",setup(e){const{theme:t}=C(),{currentLang:a}=Q();return(o,n)=>{var i,d,p,m,_;return r(),l("div",dt,[s("p",ut,$(((i=c(t).notFound)==null?void 0:i.code)??"404"),1),s("h1",pt,$(((d=c(t).notFound)==null?void 0:d.title)??"PAGE NOT FOUND"),1),n[0]||(n[0]=s("div",{class:"divider"},null,-1)),s("blockquote",mt,$(((p=c(t).notFound)==null?void 0:p.quote)??"But if you don't change your direction, and if you keep looking, you may end up where you are heading."),1),s("div",vt,[s("a",{class:"link",href:c(ae)(c(a).link),"aria-label":((m=c(t).notFound)==null?void 0:m.linkLabel)??"go to home"},$(((_=c(t).notFound)==null?void 0:_.linkText)??"Take me home"),9,ft)])])}}}),bt=y(ht,[["__scopeId","data-v-d6be1790"]]);function Ae(e,t){if(Array.isArray(e))return Z(e);if(e==null)return[];t=ve(t);const a=Object.keys(e).sort((n,i)=>i.split("/").length-n.split("/").length).find(n=>t.startsWith(ve(n))),o=a?e[a]:[];return Array.isArray(o)?Z(o):Z(o.items,o.base)}function gt(e){const t=[];let a=0;for(const o in e){const n=e[o];if(n.items){a=t.push(n);continue}t[a]||t.push({items:[]}),t[a].items.push(n)}return t}function kt(e){const t=[];function a(o){for(const n of o)n.text&&n.link&&t.push({text:n.text,link:n.link,docFooterText:n.docFooterText}),n.items&&a(n.items)}return a(e),t}function fe(e,t){return Array.isArray(t)?t.some(a=>fe(e,a)):J(e,t.link)?!0:t.items?fe(e,t.items):!1}function Z(e,t){return[...e].map(a=>{const o={...a},n=o.base||t;return n&&o.link&&(o.link=n+o.link),o.items&&(o.items=Z(o.items,n)),o})}function W(){const{frontmatter:e,page:t,theme:a}=C(),o=pe("(min-width: 960px)"),n=D(!1),i=x(()=>{const g=a.value.sidebar,P=t.value.relativePath;return g?Ae(g,P):[]}),d=D(i.value);j(i,(g,P)=>{JSON.stringify(g)!==JSON.stringify(P)&&(d.value=i.value)});const p=x(()=>e.value.sidebar!==!1&&d.value.length>0&&e.value.layout!=="home"),m=x(()=>_?e.value.aside==null?a.value.aside==="left":e.value.aside==="left":!1),_=x(()=>e.value.layout==="home"?!1:e.value.aside!=null?!!e.value.aside:a.value.aside!==!1),V=x(()=>p.value&&o.value),h=x(()=>p.value?gt(d.value):[]);function k(){n.value=!0}function T(){n.value=!1}function S(){n.value?T():k()}return{isOpen:n,sidebar:d,sidebarGroups:h,hasSidebar:p,hasAside:_,leftAside:m,isSidebarEnabled:V,open:k,close:T,toggle:S}}function yt(e,t){let a;oe(()=>{a=e.value?document.activeElement:void 0}),G(()=>{window.addEventListener("keyup",o)}),ne(()=>{window.removeEventListener("keyup",o)});function o(n){n.key==="Escape"&&e.value&&(t(),a==null||a.focus())}}function $t(e){const{page:t,hash:a}=C(),o=D(!1),n=x(()=>e.value.collapsed!=null),i=x(()=>!!e.value.link),d=D(!1),p=()=>{d.value=J(t.value.relativePath,e.value.link)};j([t,e,a],p),G(p);const m=x(()=>d.value?!0:e.value.items?fe(t.value.relativePath,e.value.items):!1),_=x(()=>!!(e.value.items&&e.value.items.length));oe(()=>{o.value=!!(n.value&&e.value.collapsed)}),ge(()=>{(d.value||m.value)&&(o.value=!1)});function V(){n.value&&(o.value=!o.value)}return{collapsed:o,collapsible:n,isLink:i,isActiveLink:d,hasActiveLink:m,hasChildren:_,toggle:V}}function _t(){const{hasSidebar:e}=W(),t=pe("(min-width: 960px)"),a=pe("(min-width: 1280px)");return{isAsideEnabled:x(()=>!a.value&&!t.value?!1:e.value?a.value:t.value)}}const Pt=/\b(?:VPBadge|header-anchor|footnote-ref|ignore-header)\b/,he=[];function De(e){return typeof e.outline=="object"&&!Array.isArray(e.outline)&&e.outline.label||e.outlineTitle||"On this page"}function $e(e){const t=[...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")].filter(a=>a.id&&a.hasChildNodes()).map(a=>{const o=Number(a.tagName[1]);return{element:a,title:wt(a),link:"#"+a.id,level:o}});return Lt(t,e)}function wt(e){let t="";for(const a of e.childNodes)if(a.nodeType===1){if(Pt.test(a.className))continue;t+=a.textContent}else a.nodeType===3&&(t+=a.textContent);return t.trim()}function Lt(e,t){if(t===!1)return[];const a=(typeof t=="object"&&!Array.isArray(t)?t.level:t)||2,[o,n]=typeof a=="number"?[a,a]:a==="deep"?[2,6]:a;return Vt(e,o,n)}function xt(e,t){const{isAsideEnabled:a}=_t(),o=lt(i,100);let n=null;G(()=>{requestAnimationFrame(i),window.addEventListener("scroll",o)}),We(()=>{d(location.hash)}),ne(()=>{window.removeEventListener("scroll",o)});function i(){if(!a.value)return;const p=window.scrollY,m=window.innerHeight,_=document.body.offsetHeight,V=Math.abs(p+m-_)<1,h=he.map(({element:T,link:S})=>({link:S,top:St(T)})).filter(({top:T})=>!Number.isNaN(T)).sort((T,S)=>T.top-S.top);if(!h.length){d(null);return}if(p<1){d(null);return}if(V){d(h[h.length-1].link);return}let k=null;for(const{link:T,top:S}of h){if(S>p+Ke()+4)break;k=T}d(k)}function d(p){n&&n.classList.remove("active"),p==null?n=null:n=e.value.querySelector(`a[href="${decodeURIComponent(p)}"]`);const m=n;m?(m.classList.add("active"),t.value.style.top=m.offsetTop+39+"px",t.value.style.opacity="1"):(t.value.style.top="33px",t.value.style.opacity="0")}}function St(e){let t=0;for(;e!==document.body;){if(e===null)return NaN;t+=e.offsetTop,e=e.offsetParent}return t}function Vt(e,t,a){he.length=0;const o=[],n=[];return e.forEach(i=>{const d={...i,children:[]};let p=n[n.length-1];for(;p&&p.level>=d.level;)n.pop(),p=n[n.length-1];if(d.element.classList.contains("ignore-header")||p&&"shouldIgnore"in p){n.push({level:d.level,shouldIgnore:!0});return}d.level>a||d.level<t||(he.push({element:d.element,link:d.link}),p?p.children.push(d):o.push(d),n.push(d))}),o}const Tt=["href","title"],Ct=b({__name:"VPDocOutlineItem",props:{headers:{},root:{type:Boolean}},setup(e){function t({target:a}){const o=a.href.split("#")[1],n=document.getElementById(decodeURIComponent(o));n==null||n.focus({preventScroll:!0})}return(a,o)=>{const n=Y("VPDocOutlineItem",!0);return r(),l("ul",{class:M(["VPDocOutlineItem",e.root?"root":"nested"])},[(r(!0),l(A,null,z(e.headers,({children:i,link:d,title:p})=>(r(),l("li",null,[s("a",{class:"outline-link",href:d,onClick:t,title:p},$(p),9,Tt),i!=null&&i.length?(r(),L(n,{key:0,headers:i},null,8,["headers"])):f("",!0)]))),256))],2)}}}),Be=y(Ct,[["__scopeId","data-v-b933a997"]]),It={class:"content"},Nt={"aria-level":"2",class:"outline-title",id:"doc-outline-aria-label",role:"heading"},Mt=b({__name:"VPDocAsideOutline",setup(e){const{frontmatter:t,theme:a}=C(),o=Ve([]);re(()=>{o.value=$e(t.value.outline??a.value.outline)});const n=D(),i=D();return xt(n,i),(d,p)=>(r(),l("nav",{"aria-labelledby":"doc-outline-aria-label",class:M(["VPDocAsideOutline",{"has-outline":o.value.length>0}]),ref_key:"container",ref:n},[s("div",It,[s("div",{class:"outline-marker",ref_key:"marker",ref:i},null,512),s("div",Nt,$(c(De)(c(a))),1),w(Be,{headers:o.value,root:!0},null,8,["headers"])])],2))}}),At=y(Mt,[["__scopeId","data-v-a5bbad30"]]),Dt={class:"VPDocAsideCarbonAds"},Bt=b({__name:"VPDocAsideCarbonAds",props:{carbonAds:{}},setup(e){const t=()=>null;return(a,o)=>(r(),l("div",Dt,[w(c(t),{"carbon-ads":e.carbonAds},null,8,["carbon-ads"])]))}}),Ht={class:"VPDocAside"},Et=b({__name:"VPDocAside",setup(e){const{theme:t}=C();return(a,o)=>(r(),l("div",Ht,[u(a.$slots,"aside-top",{},void 0,!0),u(a.$slots,"aside-outline-before",{},void 0,!0),w(At),u(a.$slots,"aside-outline-after",{},void 0,!0),o[0]||(o[0]=s("div",{class:"spacer"},null,-1)),u(a.$slots,"aside-ads-before",{},void 0,!0),c(t).carbonAds?(r(),L(Bt,{key:0,"carbon-ads":c(t).carbonAds},null,8,["carbon-ads"])):f("",!0),u(a.$slots,"aside-ads-after",{},void 0,!0),u(a.$slots,"aside-bottom",{},void 0,!0)]))}}),zt=y(Et,[["__scopeId","data-v-3f215769"]]);function Ft(){const{theme:e,page:t}=C();return x(()=>{const{text:a="Edit this page",pattern:o=""}=e.value.editLink||{};let n;return typeof o=="function"?n=o(t.value):n=o.replace(/:path/g,t.value.filePath),{url:n,text:a}})}function Ot(){const{page:e,theme:t,frontmatter:a}=C();return x(()=>{var _,V,h,k,T,S,g,P;const o=Ae(t.value.sidebar,e.value.relativePath),n=kt(o),i=Rt(n,I=>I.link.replace(/[?#].*$/,"")),d=i.findIndex(I=>J(e.value.relativePath,I.link)),p=((_=t.value.docFooter)==null?void 0:_.prev)===!1&&!a.value.prev||a.value.prev===!1,m=((V=t.value.docFooter)==null?void 0:V.next)===!1&&!a.value.next||a.value.next===!1;return{prev:p?void 0:{text:(typeof a.value.prev=="string"?a.value.prev:typeof a.value.prev=="object"?a.value.prev.text:void 0)??((h=i[d-1])==null?void 0:h.docFooterText)??((k=i[d-1])==null?void 0:k.text),link:(typeof a.value.prev=="object"?a.value.prev.link:void 0)??((T=i[d-1])==null?void 0:T.link)},next:m?void 0:{text:(typeof a.value.next=="string"?a.value.next:typeof a.value.next=="object"?a.value.next.text:void 0)??((S=i[d+1])==null?void 0:S.docFooterText)??((g=i[d+1])==null?void 0:g.text),link:(typeof a.value.next=="object"?a.value.next.link:void 0)??((P=i[d+1])==null?void 0:P.link)}}})}function Rt(e,t){const a=new Set;return e.filter(o=>{const n=t(o);return a.has(n)?!1:a.add(n)})}const q=b({__name:"VPLink",props:{tag:{},href:{},noIcon:{type:Boolean},target:{},rel:{}},setup(e){const t=e,a=x(()=>t.tag??(t.href?"a":"span")),o=x(()=>t.href&&Te.test(t.href)||t.target==="_blank");return(n,i)=>(r(),L(R(a.value),{class:M(["VPLink",{link:e.href,"vp-external-link-icon":o.value,"no-icon":e.noIcon}]),href:e.href?c(ye)(e.href):void 0,target:e.target??(o.value?"_blank":void 0),rel:e.rel??(o.value?"noreferrer":void 0)},{default:v(()=>[u(n.$slots,"default")]),_:3},8,["class","href","target","rel"]))}}),qt={class:"VPLastUpdated"},Ut=["datetime"],jt=b({__name:"VPDocFooterLastUpdated",setup(e){const{theme:t,page:a,lang:o}=C(),n=x(()=>new Date(a.value.lastUpdated)),i=x(()=>n.value.toISOString()),d=D("");return G(()=>{oe(()=>{var p,m,_;d.value=new Intl.DateTimeFormat((m=(p=t.value.lastUpdated)==null?void 0:p.formatOptions)!=null&&m.forceLocale?o.value:void 0,((_=t.value.lastUpdated)==null?void 0:_.formatOptions)??{dateStyle:"short",timeStyle:"short"}).format(n.value)})}),(p,m)=>{var _;return r(),l("p",qt,[U($(((_=c(t).lastUpdated)==null?void 0:_.text)||c(t).lastUpdatedText||"Last updated")+": ",1),s("time",{datetime:i.value},$(d.value),9,Ut)])}}}),Gt=y(jt,[["__scopeId","data-v-e98dd255"]]),Wt={key:0,class:"VPDocFooter"},Kt={key:0,class:"edit-info"},Jt={key:0,class:"edit-link"},Yt={key:1,class:"last-updated"},Xt={key:1,class:"prev-next","aria-labelledby":"doc-footer-aria-label"},Qt={class:"pager"},Zt=["innerHTML"],ea=["innerHTML"],ta={class:"pager"},aa=["innerHTML"],oa=["innerHTML"],na=b({__name:"VPDocFooter",setup(e){const{theme:t,page:a,frontmatter:o}=C(),n=Ft(),i=Ot(),d=x(()=>t.value.editLink&&o.value.editLink!==!1),p=x(()=>a.value.lastUpdated),m=x(()=>d.value||p.value||i.value.prev||i.value.next);return(_,V)=>{var h,k,T,S;return m.value?(r(),l("footer",Wt,[u(_.$slots,"doc-footer-before",{},void 0,!0),d.value||p.value?(r(),l("div",Kt,[d.value?(r(),l("div",Jt,[w(q,{class:"edit-link-button",href:c(n).url,"no-icon":!0},{default:v(()=>[V[0]||(V[0]=s("span",{class:"vpi-square-pen edit-link-icon"},null,-1)),U(" "+$(c(n).text),1)]),_:1},8,["href"])])):f("",!0),p.value?(r(),l("div",Yt,[w(Gt)])):f("",!0)])):f("",!0),(h=c(i).prev)!=null&&h.link||(k=c(i).next)!=null&&k.link?(r(),l("nav",Xt,[V[1]||(V[1]=s("span",{class:"visually-hidden",id:"doc-footer-aria-label"},"Pager",-1)),s("div",Qt,[(T=c(i).prev)!=null&&T.link?(r(),L(q,{key:0,class:"pager-link prev",href:c(i).prev.link},{default:v(()=>{var g;return[s("span",{class:"desc",innerHTML:((g=c(t).docFooter)==null?void 0:g.prev)||"Previous page"},null,8,Zt),s("span",{class:"title",innerHTML:c(i).prev.text},null,8,ea)]}),_:1},8,["href"])):f("",!0)]),s("div",ta,[(S=c(i).next)!=null&&S.link?(r(),L(q,{key:0,class:"pager-link next",href:c(i).next.link},{default:v(()=>{var g;return[s("span",{class:"desc",innerHTML:((g=c(t).docFooter)==null?void 0:g.next)||"Next page"},null,8,aa),s("span",{class:"title",innerHTML:c(i).next.text},null,8,oa)]}),_:1},8,["href"])):f("",!0)])])):f("",!0)])):f("",!0)}}}),ra=y(na,[["__scopeId","data-v-e257564d"]]),sa={class:"container"},ia={class:"aside-container"},la={class:"aside-content"},ca={class:"content"},da={class:"content-container"},ua={class:"main"},pa=b({__name:"VPDoc",setup(e){const{theme:t}=C(),a=se(),{hasSidebar:o,hasAside:n,leftAside:i}=W(),d=x(()=>a.path.replace(/[./]+/g,"_").replace(/_html$/,""));return(p,m)=>{const _=Y("Content");return r(),l("div",{class:M(["VPDoc",{"has-sidebar":c(o),"has-aside":c(n)}])},[u(p.$slots,"doc-top",{},void 0,!0),s("div",sa,[c(n)?(r(),l("div",{key:0,class:M(["aside",{"left-aside":c(i)}])},[m[0]||(m[0]=s("div",{class:"aside-curtain"},null,-1)),s("div",ia,[s("div",la,[w(zt,null,{"aside-top":v(()=>[u(p.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":v(()=>[u(p.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":v(()=>[u(p.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":v(()=>[u(p.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":v(()=>[u(p.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":v(()=>[u(p.$slots,"aside-ads-after",{},void 0,!0)]),_:3})])])],2)):f("",!0),s("div",ca,[s("div",da,[u(p.$slots,"doc-before",{},void 0,!0),s("main",ua,[w(_,{class:M(["vp-doc",[d.value,c(t).externalLinkIcon&&"external-link-icon-enabled"]])},null,8,["class"])]),w(ra,null,{"doc-footer-before":v(()=>[u(p.$slots,"doc-footer-before",{},void 0,!0)]),_:3}),u(p.$slots,"doc-after",{},void 0,!0)])])]),u(p.$slots,"doc-bottom",{},void 0,!0)],2)}}}),ma=y(pa,[["__scopeId","data-v-39a288b8"]]),va=b({__name:"VPButton",props:{tag:{},size:{default:"medium"},theme:{default:"brand"},text:{},href:{},target:{},rel:{}},setup(e){const t=e,a=x(()=>t.href&&Te.test(t.href)),o=x(()=>t.tag||(t.href?"a":"button"));return(n,i)=>(r(),L(R(o.value),{class:M(["VPButton",[e.size,e.theme]]),href:e.href?c(ye)(e.href):void 0,target:t.target??(a.value?"_blank":void 0),rel:t.rel??(a.value?"noreferrer":void 0)},{default:v(()=>[U($(e.text),1)]),_:1},8,["class","href","target","rel"]))}}),fa=y(va,[["__scopeId","data-v-fa7799d5"]]),ha=["src","alt"],ba=b({inheritAttrs:!1,__name:"VPImage",props:{image:{},alt:{}},setup(e){return(t,a)=>{const o=Y("VPImage",!0);return e.image?(r(),l(A,{key:0},[typeof e.image=="string"||"src"in e.image?(r(),l("img",K({key:0,class:"VPImage"},typeof e.image=="string"?t.$attrs:{...e.image,...t.$attrs},{src:c(ae)(typeof e.image=="string"?e.image:e.image.src),alt:e.alt??(typeof e.image=="string"?"":e.image.alt||"")}),null,16,ha)):(r(),l(A,{key:1},[w(o,K({class:"dark",image:e.image.dark,alt:e.image.alt},t.$attrs),null,16,["image","alt"]),w(o,K({class:"light",image:e.image.light,alt:e.image.alt},t.$attrs),null,16,["image","alt"])],64))],64)):f("",!0)}}}),ee=y(ba,[["__scopeId","data-v-8426fc1a"]]),ga={class:"container"},ka={class:"main"},ya={class:"heading"},$a=["innerHTML"],_a=["innerHTML"],Pa=["innerHTML"],wa={key:0,class:"actions"},La={key:0,class:"image"},xa={class:"image-container"},Sa=b({__name:"VPHero",props:{name:{},text:{},tagline:{},image:{},actions:{}},setup(e){const t=ie("hero-image-slot-exists");return(a,o)=>(r(),l("div",{class:M(["VPHero",{"has-image":e.image||c(t)}])},[s("div",ga,[s("div",ka,[u(a.$slots,"home-hero-info-before",{},void 0,!0),u(a.$slots,"home-hero-info",{},()=>[s("h1",ya,[e.name?(r(),l("span",{key:0,innerHTML:e.name,class:"name clip"},null,8,$a)):f("",!0),e.text?(r(),l("span",{key:1,innerHTML:e.text,class:"text"},null,8,_a)):f("",!0)]),e.tagline?(r(),l("p",{key:0,innerHTML:e.tagline,class:"tagline"},null,8,Pa)):f("",!0)],!0),u(a.$slots,"home-hero-info-after",{},void 0,!0),e.actions?(r(),l("div",wa,[(r(!0),l(A,null,z(e.actions,n=>(r(),l("div",{key:n.link,class:"action"},[w(fa,{tag:"a",size:"medium",theme:n.theme,text:n.text,href:n.link,target:n.target,rel:n.rel},null,8,["theme","text","href","target","rel"])]))),128))])):f("",!0),u(a.$slots,"home-hero-actions-after",{},void 0,!0)]),e.image||c(t)?(r(),l("div",La,[s("div",xa,[o[0]||(o[0]=s("div",{class:"image-bg"},null,-1)),u(a.$slots,"home-hero-image",{},()=>[e.image?(r(),L(ee,{key:0,class:"image-src",image:e.image},null,8,["image"])):f("",!0)],!0)])])):f("",!0)])],2))}}),Va=y(Sa,[["__scopeId","data-v-4f9c455b"]]),Ta=b({__name:"VPHomeHero",setup(e){const{frontmatter:t}=C();return(a,o)=>c(t).hero?(r(),L(Va,{key:0,class:"VPHomeHero",name:c(t).hero.name,text:c(t).hero.text,tagline:c(t).hero.tagline,image:c(t).hero.image,actions:c(t).hero.actions},{"home-hero-info-before":v(()=>[u(a.$slots,"home-hero-info-before")]),"home-hero-info":v(()=>[u(a.$slots,"home-hero-info")]),"home-hero-info-after":v(()=>[u(a.$slots,"home-hero-info-after")]),"home-hero-actions-after":v(()=>[u(a.$slots,"home-hero-actions-after")]),"home-hero-image":v(()=>[u(a.$slots,"home-hero-image")]),_:3},8,["name","text","tagline","image","actions"])):f("",!0)}}),Ca={class:"box"},Ia={key:0,class:"icon"},Na=["innerHTML"],Ma=["innerHTML"],Aa=["innerHTML"],Da={key:4,class:"link-text"},Ba={class:"link-text-value"},Ha=b({__name:"VPFeature",props:{icon:{},title:{},details:{},link:{},linkText:{},rel:{},target:{}},setup(e){return(t,a)=>(r(),L(q,{class:"VPFeature",href:e.link,rel:e.rel,target:e.target,"no-icon":!0,tag:e.link?"a":"div"},{default:v(()=>[s("article",Ca,[typeof e.icon=="object"&&e.icon.wrap?(r(),l("div",Ia,[w(ee,{image:e.icon,alt:e.icon.alt,height:e.icon.height||48,width:e.icon.width||48},null,8,["image","alt","height","width"])])):typeof e.icon=="object"?(r(),L(ee,{key:1,image:e.icon,alt:e.icon.alt,height:e.icon.height||48,width:e.icon.width||48},null,8,["image","alt","height","width"])):e.icon?(r(),l("div",{key:2,class:"icon",innerHTML:e.icon},null,8,Na)):f("",!0),s("h2",{class:"title",innerHTML:e.title},null,8,Ma),e.details?(r(),l("p",{key:3,class:"details",innerHTML:e.details},null,8,Aa)):f("",!0),e.linkText?(r(),l("div",Da,[s("p",Ba,[U($(e.linkText)+" ",1),a[0]||(a[0]=s("span",{class:"vpi-arrow-right link-text-icon"},null,-1))])])):f("",!0)])]),_:1},8,["href","rel","target","tag"]))}}),Ea=y(Ha,[["__scopeId","data-v-a3976bdc"]]),za={key:0,class:"VPFeatures"},Fa={class:"container"},Oa={class:"items"},Ra=b({__name:"VPFeatures",props:{features:{}},setup(e){const t=e,a=x(()=>{const o=t.features.length;if(o){if(o===2)return"grid-2";if(o===3)return"grid-3";if(o%3===0)return"grid-6";if(o>3)return"grid-4"}else return});return(o,n)=>e.features?(r(),l("div",za,[s("div",Fa,[s("div",Oa,[(r(!0),l(A,null,z(e.features,i=>(r(),l("div",{key:i.title,class:M(["item",[a.value]])},[w(Ea,{icon:i.icon,title:i.title,details:i.details,link:i.link,"link-text":i.linkText,rel:i.rel,target:i.target},null,8,["icon","title","details","link","link-text","rel","target"])],2))),128))])])])):f("",!0)}}),qa=y(Ra,[["__scopeId","data-v-a6181336"]]),Ua=b({__name:"VPHomeFeatures",setup(e){const{frontmatter:t}=C();return(a,o)=>c(t).features?(r(),L(qa,{key:0,class:"VPHomeFeatures",features:c(t).features},null,8,["features"])):f("",!0)}}),ja=b({__name:"VPHomeContent",setup(e){const{width:t}=Je({initialWidth:0,includeScrollbar:!1});return(a,o)=>(r(),l("div",{class:"vp-doc container",style:ke(c(t)?{"--vp-offset":`calc(50% - ${c(t)/2}px)`}:{})},[u(a.$slots,"default",{},void 0,!0)],4))}}),Ga=y(ja,[["__scopeId","data-v-8e2d4988"]]),Wa=b({__name:"VPHome",setup(e){const{frontmatter:t,theme:a}=C();return(o,n)=>{const i=Y("Content");return r(),l("div",{class:M(["VPHome",{"external-link-icon-enabled":c(a).externalLinkIcon}])},[u(o.$slots,"home-hero-before",{},void 0,!0),w(Ta,null,{"home-hero-info-before":v(()=>[u(o.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":v(()=>[u(o.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":v(()=>[u(o.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":v(()=>[u(o.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":v(()=>[u(o.$slots,"home-hero-image",{},void 0,!0)]),_:3}),u(o.$slots,"home-hero-after",{},void 0,!0),u(o.$slots,"home-features-before",{},void 0,!0),w(Ua),u(o.$slots,"home-features-after",{},void 0,!0),c(t).markdownStyles!==!1?(r(),L(Ga,{key:0},{default:v(()=>[w(i)]),_:1})):(r(),L(i,{key:1}))],2)}}}),Ka=y(Wa,[["__scopeId","data-v-8b561e3d"]]),Ja={},Ya={class:"VPPage"};function Xa(e,t){const a=Y("Content");return r(),l("div",Ya,[u(e.$slots,"page-top"),w(a),u(e.$slots,"page-bottom")])}const Qa=y(Ja,[["render",Xa]]),Za=b({__name:"VPContent",setup(e){const{page:t,frontmatter:a}=C(),{hasSidebar:o}=W();return(n,i)=>(r(),l("div",{class:M(["VPContent",{"has-sidebar":c(o),"is-home":c(a).layout==="home"}]),id:"VPContent"},[c(t).isNotFound?u(n.$slots,"not-found",{key:0},()=>[w(bt)],!0):c(a).layout==="page"?(r(),L(Qa,{key:1},{"page-top":v(()=>[u(n.$slots,"page-top",{},void 0,!0)]),"page-bottom":v(()=>[u(n.$slots,"page-bottom",{},void 0,!0)]),_:3})):c(a).layout==="home"?(r(),L(Ka,{key:2},{"home-hero-before":v(()=>[u(n.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":v(()=>[u(n.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":v(()=>[u(n.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":v(()=>[u(n.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":v(()=>[u(n.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":v(()=>[u(n.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":v(()=>[u(n.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":v(()=>[u(n.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":v(()=>[u(n.$slots,"home-features-after",{},void 0,!0)]),_:3})):c(a).layout&&c(a).layout!=="doc"?(r(),L(R(c(a).layout),{key:3})):(r(),L(ma,{key:4},{"doc-top":v(()=>[u(n.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":v(()=>[u(n.$slots,"doc-bottom",{},void 0,!0)]),"doc-footer-before":v(()=>[u(n.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":v(()=>[u(n.$slots,"doc-before",{},void 0,!0)]),"doc-after":v(()=>[u(n.$slots,"doc-after",{},void 0,!0)]),"aside-top":v(()=>[u(n.$slots,"aside-top",{},void 0,!0)]),"aside-outline-before":v(()=>[u(n.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":v(()=>[u(n.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":v(()=>[u(n.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":v(()=>[u(n.$slots,"aside-ads-after",{},void 0,!0)]),"aside-bottom":v(()=>[u(n.$slots,"aside-bottom",{},void 0,!0)]),_:3}))],2))}}),eo=y(Za,[["__scopeId","data-v-1428d186"]]),to={class:"container"},ao=["innerHTML"],oo=["innerHTML"],no=b({__name:"VPFooter",setup(e){const{theme:t,frontmatter:a}=C(),{hasSidebar:o}=W();return(n,i)=>c(t).footer&&c(a).footer!==!1?(r(),l("footer",{key:0,class:M(["VPFooter",{"has-sidebar":c(o)}])},[s("div",to,[c(t).footer.message?(r(),l("p",{key:0,class:"message",innerHTML:c(t).footer.message},null,8,ao)):f("",!0),c(t).footer.copyright?(r(),l("p",{key:1,class:"copyright",innerHTML:c(t).footer.copyright},null,8,oo)):f("",!0)])],2)):f("",!0)}}),ro=y(no,[["__scopeId","data-v-e315a0ad"]]);function so(){const{theme:e,frontmatter:t}=C(),a=Ve([]),o=x(()=>a.value.length>0);return re(()=>{a.value=$e(t.value.outline??e.value.outline)}),{headers:a,hasLocalNav:o}}const io={class:"menu-text"},lo={class:"header"},co={class:"outline"},uo=b({__name:"VPLocalNavOutlineDropdown",props:{headers:{},navHeight:{}},setup(e){const t=e,{theme:a}=C(),o=D(!1),n=D(0),i=D(),d=D();function p(h){var k;(k=i.value)!=null&&k.contains(h.target)||(o.value=!1)}j(o,h=>{if(h){document.addEventListener("click",p);return}document.removeEventListener("click",p)}),me("Escape",()=>{o.value=!1}),re(()=>{o.value=!1});function m(){o.value=!o.value,n.value=window.innerHeight+Math.min(window.scrollY-t.navHeight,0)}function _(h){h.target.classList.contains("outline-link")&&(d.value&&(d.value.style.transition="none"),Ce(()=>{o.value=!1}))}function V(){o.value=!1,window.scrollTo({top:0,left:0,behavior:"smooth"})}return(h,k)=>(r(),l("div",{class:"VPLocalNavOutlineDropdown",style:ke({"--vp-vh":n.value+"px"}),ref_key:"main",ref:i},[e.headers.length>0?(r(),l("button",{key:0,onClick:m,class:M({open:o.value})},[s("span",io,$(c(De)(c(a))),1),k[0]||(k[0]=s("span",{class:"vpi-chevron-right icon"},null,-1))],2)):(r(),l("button",{key:1,onClick:V},$(c(a).returnToTopLabel||"Return to top"),1)),w(be,{name:"flyout"},{default:v(()=>[o.value?(r(),l("div",{key:0,ref_key:"items",ref:d,class:"items",onClick:_},[s("div",lo,[s("a",{class:"top-link",href:"#",onClick:V},$(c(a).returnToTopLabel||"Return to top"),1)]),s("div",co,[w(Be,{headers:e.headers},null,8,["headers"])])],512)):f("",!0)]),_:1})],4))}}),po=y(uo,[["__scopeId","data-v-8a42e2b4"]]),mo={class:"container"},vo=["aria-expanded"],fo={class:"menu-text"},ho=b({__name:"VPLocalNav",props:{open:{type:Boolean}},emits:["open-menu"],setup(e){const{theme:t,frontmatter:a}=C(),{hasSidebar:o}=W(),{headers:n}=so(),{y:i}=Ie(),d=D(0);G(()=>{d.value=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--vp-nav-height"))}),re(()=>{n.value=$e(a.value.outline??t.value.outline)});const p=x(()=>n.value.length===0),m=x(()=>p.value&&!o.value),_=x(()=>({VPLocalNav:!0,"has-sidebar":o.value,empty:p.value,fixed:m.value}));return(V,h)=>c(a).layout!=="home"&&(!m.value||c(i)>=d.value)?(r(),l("div",{key:0,class:M(_.value)},[s("div",mo,[c(o)?(r(),l("button",{key:0,class:"menu","aria-expanded":e.open,"aria-controls":"VPSidebarNav",onClick:h[0]||(h[0]=k=>V.$emit("open-menu"))},[h[1]||(h[1]=s("span",{class:"vpi-align-left menu-icon"},null,-1)),s("span",fo,$(c(t).sidebarMenuLabel||"Menu"),1)],8,vo)):f("",!0),w(po,{headers:c(n),navHeight:d.value},null,8,["headers","navHeight"])])],2)):f("",!0)}}),bo=y(ho,[["__scopeId","data-v-a6f0e41e"]]);function go(){const e=D(!1);function t(){e.value=!0,window.addEventListener("resize",n)}function a(){e.value=!1,window.removeEventListener("resize",n)}function o(){e.value?a():t()}function n(){window.outerWidth>=768&&a()}const i=se();return j(()=>i.path,a),{isScreenOpen:e,openScreen:t,closeScreen:a,toggleScreen:o}}const ko={},yo={class:"VPSwitch",type:"button",role:"switch"},$o={class:"check"},_o={key:0,class:"icon"};function Po(e,t){return r(),l("button",yo,[s("span",$o,[e.$slots.default?(r(),l("span",_o,[u(e.$slots,"default",{},void 0,!0)])):f("",!0)])])}const wo=y(ko,[["render",Po],["__scopeId","data-v-1d5665e3"]]),Lo=b({__name:"VPSwitchAppearance",setup(e){const{isDark:t,theme:a}=C(),o=ie("toggle-appearance",()=>{t.value=!t.value}),n=D("");return ge(()=>{n.value=t.value?a.value.lightModeSwitchTitle||"Switch to light theme":a.value.darkModeSwitchTitle||"Switch to dark theme"}),(i,d)=>(r(),L(wo,{title:n.value,class:"VPSwitchAppearance","aria-checked":c(t),onClick:c(o)},{default:v(()=>[...d[0]||(d[0]=[s("span",{class:"vpi-sun sun"},null,-1),s("span",{class:"vpi-moon moon"},null,-1)])]),_:1},8,["title","aria-checked","onClick"]))}}),_e=y(Lo,[["__scopeId","data-v-5337faa4"]]),xo={key:0,class:"VPNavBarAppearance"},So=b({__name:"VPNavBarAppearance",setup(e){const{site:t}=C();return(a,o)=>c(t).appearance&&c(t).appearance!=="force-dark"&&c(t).appearance!=="force-auto"?(r(),l("div",xo,[w(_e)])):f("",!0)}}),Vo=y(So,[["__scopeId","data-v-6c893767"]]),Pe=D();let He=!1,ue=0;function To(e){const t=D(!1);if(le){!He&&Co(),ue++;const a=j(Pe,o=>{var n,i,d;o===e.el.value||(n=e.el.value)!=null&&n.contains(o)?(t.value=!0,(i=e.onFocus)==null||i.call(e)):(t.value=!1,(d=e.onBlur)==null||d.call(e))});ne(()=>{a(),ue--,ue||Io()})}return Ye(t)}function Co(){document.addEventListener("focusin",Ee),He=!0,Pe.value=document.activeElement}function Io(){document.removeEventListener("focusin",Ee)}function Ee(){Pe.value=document.activeElement}const No={class:"VPMenuLink"},Mo=["innerHTML"],Ao=b({__name:"VPMenuLink",props:{item:{}},setup(e){const{page:t}=C();return(a,o)=>(r(),l("div",No,[w(q,{class:M({active:c(J)(c(t).relativePath,e.item.activeMatch||e.item.link,!!e.item.activeMatch)}),href:e.item.link,target:e.item.target,rel:e.item.rel,"no-icon":e.item.noIcon},{default:v(()=>[s("span",{innerHTML:e.item.text},null,8,Mo)]),_:1},8,["class","href","target","rel","no-icon"])]))}}),ce=y(Ao,[["__scopeId","data-v-35975db6"]]),Do={class:"VPMenuGroup"},Bo={key:0,class:"title"},Ho=b({__name:"VPMenuGroup",props:{text:{},items:{}},setup(e){return(t,a)=>(r(),l("div",Do,[e.text?(r(),l("p",Bo,$(e.text),1)):f("",!0),(r(!0),l(A,null,z(e.items,o=>(r(),l(A,null,["link"in o?(r(),L(ce,{key:0,item:o},null,8,["item"])):f("",!0)],64))),256))]))}}),Eo=y(Ho,[["__scopeId","data-v-69e747b5"]]),zo={class:"VPMenu"},Fo={key:0,class:"items"},Oo=b({__name:"VPMenu",props:{items:{}},setup(e){return(t,a)=>(r(),l("div",zo,[e.items?(r(),l("div",Fo,[(r(!0),l(A,null,z(e.items,o=>(r(),l(A,{key:JSON.stringify(o)},["link"in o?(r(),L(ce,{key:0,item:o},null,8,["item"])):"component"in o?(r(),L(R(o.component),K({key:1,ref_for:!0},o.props),null,16)):(r(),L(Eo,{key:2,text:o.text,items:o.items},null,8,["text","items"]))],64))),128))])):f("",!0),u(t.$slots,"default",{},void 0,!0)]))}}),Ro=y(Oo,[["__scopeId","data-v-b98bc113"]]),qo=["aria-expanded","aria-label"],Uo={key:0,class:"text"},jo=["innerHTML"],Go={key:1,class:"vpi-more-horizontal icon"},Wo={class:"menu"},Ko=b({__name:"VPFlyout",props:{icon:{},button:{},label:{},items:{}},setup(e){const t=D(!1),a=D();To({el:a,onBlur:o});function o(){t.value=!1}return(n,i)=>(r(),l("div",{class:"VPFlyout",ref_key:"el",ref:a,onMouseenter:i[1]||(i[1]=d=>t.value=!0),onMouseleave:i[2]||(i[2]=d=>t.value=!1)},[s("button",{type:"button",class:"button","aria-haspopup":"true","aria-expanded":t.value,"aria-label":e.label,onClick:i[0]||(i[0]=d=>t.value=!t.value)},[e.button||e.icon?(r(),l("span",Uo,[e.icon?(r(),l("span",{key:0,class:M([e.icon,"option-icon"])},null,2)):f("",!0),e.button?(r(),l("span",{key:1,innerHTML:e.button},null,8,jo)):f("",!0),i[3]||(i[3]=s("span",{class:"vpi-chevron-down text-icon"},null,-1))])):(r(),l("span",Go))],8,qo),s("div",Wo,[w(Ro,{items:e.items},{default:v(()=>[u(n.$slots,"default",{},void 0,!0)]),_:3},8,["items"])])],544))}}),we=y(Ko,[["__scopeId","data-v-cf11d7a2"]]),Jo=["href","aria-label","innerHTML"],Yo=b({__name:"VPSocialLink",props:{icon:{},link:{},ariaLabel:{}},setup(e){const t=e,a=D();G(async()=>{var i;await Ce();const n=(i=a.value)==null?void 0:i.children[0];n instanceof HTMLElement&&n.className.startsWith("vpi-social-")&&(getComputedStyle(n).maskImage||getComputedStyle(n).webkitMaskImage)==="none"&&n.style.setProperty("--icon",`url('https://api.iconify.design/simple-icons/${t.icon}.svg')`)});const o=x(()=>typeof t.icon=="object"?t.icon.svg:`<span class="vpi-social-${t.icon}"></span>`);return(n,i)=>(r(),l("a",{ref_key:"el",ref:a,class:"VPSocialLink no-icon",href:e.link,"aria-label":e.ariaLabel??(typeof e.icon=="string"?e.icon:""),target:"_blank",rel:"noopener",innerHTML:o.value},null,8,Jo))}}),Xo=y(Yo,[["__scopeId","data-v-bd121fe5"]]),Qo={class:"VPSocialLinks"},Zo=b({__name:"VPSocialLinks",props:{links:{}},setup(e){return(t,a)=>(r(),l("div",Qo,[(r(!0),l(A,null,z(e.links,({link:o,icon:n,ariaLabel:i})=>(r(),L(Xo,{key:o,icon:n,link:o,ariaLabel:i},null,8,["icon","link","ariaLabel"]))),128))]))}}),Le=y(Zo,[["__scopeId","data-v-7bc22406"]]),en={key:0,class:"group translations"},tn={class:"trans-title"},an={key:1,class:"group"},on={class:"item appearance"},nn={class:"label"},rn={class:"appearance-action"},sn={key:2,class:"group"},ln={class:"item social-links"},cn=b({__name:"VPNavBarExtra",setup(e){const{site:t,theme:a}=C(),{localeLinks:o,currentLang:n}=Q({correspondingLink:!0}),i=x(()=>o.value.length&&n.value.label||t.value.appearance||a.value.socialLinks);return(d,p)=>i.value?(r(),L(we,{key:0,class:"VPNavBarExtra",label:"extra navigation"},{default:v(()=>[c(o).length&&c(n).label?(r(),l("div",en,[s("p",tn,$(c(n).label),1),(r(!0),l(A,null,z(c(o),m=>(r(),L(ce,{key:m.link,item:m},null,8,["item"]))),128))])):f("",!0),c(t).appearance&&c(t).appearance!=="force-dark"&&c(t).appearance!=="force-auto"?(r(),l("div",an,[s("div",on,[s("p",nn,$(c(a).darkModeSwitchLabel||"Appearance"),1),s("div",rn,[w(_e)])])])):f("",!0),c(a).socialLinks?(r(),l("div",sn,[s("div",ln,[w(Le,{class:"social-links-list",links:c(a).socialLinks},null,8,["links"])])])):f("",!0)]),_:1})):f("",!0)}}),dn=y(cn,[["__scopeId","data-v-bb2aa2f0"]]),un=["aria-expanded"],pn=b({__name:"VPNavBarHamburger",props:{active:{type:Boolean}},emits:["click"],setup(e){return(t,a)=>(r(),l("button",{type:"button",class:M(["VPNavBarHamburger",{active:e.active}]),"aria-label":"mobile navigation","aria-expanded":e.active,"aria-controls":"VPNavScreen",onClick:a[0]||(a[0]=o=>t.$emit("click"))},[...a[1]||(a[1]=[s("span",{class:"container"},[s("span",{class:"top"}),s("span",{class:"middle"}),s("span",{class:"bottom"})],-1)])],10,un))}}),mn=y(pn,[["__scopeId","data-v-e5dd9c1c"]]),vn=["innerHTML"],fn=b({__name:"VPNavBarMenuLink",props:{item:{}},setup(e){const{page:t}=C();return(a,o)=>(r(),L(q,{class:M({VPNavBarMenuLink:!0,active:c(J)(c(t).relativePath,e.item.activeMatch||e.item.link,!!e.item.activeMatch)}),href:e.item.link,target:e.item.target,rel:e.item.rel,"no-icon":e.item.noIcon,tabindex:"0"},{default:v(()=>[s("span",{innerHTML:e.item.text},null,8,vn)]),_:1},8,["class","href","target","rel","no-icon"]))}}),hn=y(fn,[["__scopeId","data-v-e56f3d57"]]),bn=b({__name:"VPNavBarMenuGroup",props:{item:{}},setup(e){const t=e,{page:a}=C(),o=i=>"component"in i?!1:"link"in i?J(a.value.relativePath,i.link,!!t.item.activeMatch):i.items.some(o),n=x(()=>o(t.item));return(i,d)=>(r(),L(we,{class:M({VPNavBarMenuGroup:!0,active:c(J)(c(a).relativePath,e.item.activeMatch,!!e.item.activeMatch)||n.value}),button:e.item.text,items:e.item.items},null,8,["class","button","items"]))}}),gn={key:0,"aria-labelledby":"main-nav-aria-label",class:"VPNavBarMenu"},kn=b({__name:"VPNavBarMenu",setup(e){const{theme:t}=C();return(a,o)=>c(t).nav?(r(),l("nav",gn,[o[0]||(o[0]=s("span",{id:"main-nav-aria-label",class:"visually-hidden"}," Main Navigation ",-1)),(r(!0),l(A,null,z(c(t).nav,n=>(r(),l(A,{key:JSON.stringify(n)},["link"in n?(r(),L(hn,{key:0,item:n},null,8,["item"])):"component"in n?(r(),L(R(n.component),K({key:1,ref_for:!0},n.props),null,16)):(r(),L(bn,{key:2,item:n},null,8,["item"]))],64))),128))])):f("",!0)}}),yn=y(kn,[["__scopeId","data-v-dc692963"]]);function $n(e){const{localeIndex:t,theme:a}=C();function o(n){var S,g,P;const i=n.split("."),d=(S=a.value.search)==null?void 0:S.options,p=d&&typeof d=="object",m=p&&((P=(g=d.locales)==null?void 0:g[t.value])==null?void 0:P.translations)||null,_=p&&d.translations||null;let V=m,h=_,k=e;const T=i.pop();for(const I of i){let N=null;const B=k==null?void 0:k[I];B&&(N=k=B);const F=h==null?void 0:h[I];F&&(N=h=F);const H=V==null?void 0:V[I];H&&(N=V=H),B||(k=N),F||(h=N),H||(V=N)}return(V==null?void 0:V[T])??(h==null?void 0:h[T])??(k==null?void 0:k[T])??""}return o}const _n=["aria-label"],Pn={class:"DocSearch-Button-Container"},wn={class:"DocSearch-Button-Placeholder"},Se=b({__name:"VPNavBarSearchButton",setup(e){const a=$n({button:{buttonText:"Search",buttonAriaLabel:"Search"}});return(o,n)=>(r(),l("button",{type:"button",class:"DocSearch DocSearch-Button","aria-label":c(a)("button.buttonAriaLabel")},[s("span",Pn,[n[0]||(n[0]=s("span",{class:"vp-icon DocSearch-Search-Icon"},null,-1)),s("span",wn,$(c(a)("button.buttonText")),1)]),n[1]||(n[1]=s("span",{class:"DocSearch-Button-Keys"},[s("kbd",{class:"DocSearch-Button-Key"}),s("kbd",{class:"DocSearch-Button-Key"},"K")],-1))],8,_n))}}),Ln={class:"VPNavBarSearch"},xn={id:"local-search"},Sn={key:1,id:"docsearch"},Vn=b({__name:"VPNavBarSearch",setup(e){const t=Xe(()=>Qe(()=>import("./VPLocalSearchBox.Cg1mKnvi.js"),__vite__mapDeps([0,1]))),a=()=>null,{theme:o}=C(),n=D(!1),i=D(!1);G(()=>{});function d(){n.value||(n.value=!0,setTimeout(p,16))}function p(){const h=new Event("keydown");h.key="k",h.metaKey=!0,window.dispatchEvent(h),setTimeout(()=>{document.querySelector(".DocSearch-Modal")||p()},16)}function m(h){const k=h.target,T=k.tagName;return k.isContentEditable||T==="INPUT"||T==="SELECT"||T==="TEXTAREA"}const _=D(!1);me("k",h=>{(h.ctrlKey||h.metaKey)&&(h.preventDefault(),_.value=!0)}),me("/",h=>{m(h)||(h.preventDefault(),_.value=!0)});const V="local";return(h,k)=>{var T;return r(),l("div",Ln,[c(V)==="local"?(r(),l(A,{key:0},[_.value?(r(),L(c(t),{key:0,onClose:k[0]||(k[0]=S=>_.value=!1)})):f("",!0),s("div",xn,[w(Se,{onClick:k[1]||(k[1]=S=>_.value=!0)})])],64)):c(V)==="algolia"?(r(),l(A,{key:1},[n.value?(r(),L(c(a),{key:0,algolia:((T=c(o).search)==null?void 0:T.options)??c(o).algolia,onVnodeBeforeMount:k[2]||(k[2]=S=>i.value=!0)},null,8,["algolia"])):f("",!0),i.value?f("",!0):(r(),l("div",Sn,[w(Se,{onClick:d})]))],64)):f("",!0)])}}}),Tn=b({__name:"VPNavBarSocialLinks",setup(e){const{theme:t}=C();return(a,o)=>c(t).socialLinks?(r(),L(Le,{key:0,class:"VPNavBarSocialLinks",links:c(t).socialLinks},null,8,["links"])):f("",!0)}}),Cn=y(Tn,[["__scopeId","data-v-0394ad82"]]),In=["href","rel","target"],Nn=["innerHTML"],Mn={key:2},An=b({__name:"VPNavBarTitle",setup(e){const{site:t,theme:a}=C(),{hasSidebar:o}=W(),{currentLang:n}=Q(),i=x(()=>{var m;return typeof a.value.logoLink=="string"?a.value.logoLink:(m=a.value.logoLink)==null?void 0:m.link}),d=x(()=>{var m;return typeof a.value.logoLink=="string"||(m=a.value.logoLink)==null?void 0:m.rel}),p=x(()=>{var m;return typeof a.value.logoLink=="string"||(m=a.value.logoLink)==null?void 0:m.target});return(m,_)=>(r(),l("div",{class:M(["VPNavBarTitle",{"has-sidebar":c(o)}])},[s("a",{class:"title",href:i.value??c(ye)(c(n).link),rel:d.value,target:p.value},[u(m.$slots,"nav-bar-title-before",{},void 0,!0),c(a).logo?(r(),L(ee,{key:0,class:"logo",image:c(a).logo},null,8,["image"])):f("",!0),c(a).siteTitle?(r(),l("span",{key:1,innerHTML:c(a).siteTitle},null,8,Nn)):c(a).siteTitle===void 0?(r(),l("span",Mn,$(c(t).title),1)):f("",!0),u(m.$slots,"nav-bar-title-after",{},void 0,!0)],8,In)],2))}}),Dn=y(An,[["__scopeId","data-v-1168a8e4"]]),Bn={class:"items"},Hn={class:"title"},En=b({__name:"VPNavBarTranslations",setup(e){const{theme:t}=C(),{localeLinks:a,currentLang:o}=Q({correspondingLink:!0});return(n,i)=>c(a).length&&c(o).label?(r(),L(we,{key:0,class:"VPNavBarTranslations",icon:"vpi-languages",label:c(t).langMenuLabel||"Change language"},{default:v(()=>[s("div",Bn,[s("p",Hn,$(c(o).label),1),(r(!0),l(A,null,z(c(a),d=>(r(),L(ce,{key:d.link,item:d},null,8,["item"]))),128))])]),_:1},8,["label"])):f("",!0)}}),zn=y(En,[["__scopeId","data-v-88af2de4"]]),Fn={class:"wrapper"},On={class:"container"},Rn={class:"title"},qn={class:"content"},Un={class:"content-body"},jn=b({__name:"VPNavBar",props:{isScreenOpen:{type:Boolean}},emits:["toggle-screen"],setup(e){const t=e,{y:a}=Ie(),{hasSidebar:o}=W(),{frontmatter:n}=C(),i=D({});return ge(()=>{i.value={"has-sidebar":o.value,home:n.value.layout==="home",top:a.value===0,"screen-open":t.isScreenOpen}}),(d,p)=>(r(),l("div",{class:M(["VPNavBar",i.value])},[s("div",Fn,[s("div",On,[s("div",Rn,[w(Dn,null,{"nav-bar-title-before":v(()=>[u(d.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":v(()=>[u(d.$slots,"nav-bar-title-after",{},void 0,!0)]),_:3})]),s("div",qn,[s("div",Un,[u(d.$slots,"nav-bar-content-before",{},void 0,!0),w(Vn,{class:"search"}),w(yn,{class:"menu"}),w(zn,{class:"translations"}),w(Vo,{class:"appearance"}),w(Cn,{class:"social-links"}),w(dn,{class:"extra"}),u(d.$slots,"nav-bar-content-after",{},void 0,!0),w(mn,{class:"hamburger",active:e.isScreenOpen,onClick:p[0]||(p[0]=m=>d.$emit("toggle-screen"))},null,8,["active"])])])])]),p[1]||(p[1]=s("div",{class:"divider"},[s("div",{class:"divider-line"})],-1))],2))}}),Gn=y(jn,[["__scopeId","data-v-6aa21345"]]),Wn={key:0,class:"VPNavScreenAppearance"},Kn={class:"text"},Jn=b({__name:"VPNavScreenAppearance",setup(e){const{site:t,theme:a}=C();return(o,n)=>c(t).appearance&&c(t).appearance!=="force-dark"&&c(t).appearance!=="force-auto"?(r(),l("div",Wn,[s("p",Kn,$(c(a).darkModeSwitchLabel||"Appearance"),1),w(_e)])):f("",!0)}}),Yn=y(Jn,[["__scopeId","data-v-b44890b2"]]),Xn=["innerHTML"],Qn=b({__name:"VPNavScreenMenuLink",props:{item:{}},setup(e){const t=ie("close-screen");return(a,o)=>(r(),L(q,{class:"VPNavScreenMenuLink",href:e.item.link,target:e.item.target,rel:e.item.rel,"no-icon":e.item.noIcon,onClick:c(t)},{default:v(()=>[s("span",{innerHTML:e.item.text},null,8,Xn)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),Zn=y(Qn,[["__scopeId","data-v-df37e6dd"]]),er=["innerHTML"],tr=b({__name:"VPNavScreenMenuGroupLink",props:{item:{}},setup(e){const t=ie("close-screen");return(a,o)=>(r(),L(q,{class:"VPNavScreenMenuGroupLink",href:e.item.link,target:e.item.target,rel:e.item.rel,"no-icon":e.item.noIcon,onClick:c(t)},{default:v(()=>[s("span",{innerHTML:e.item.text},null,8,er)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),ze=y(tr,[["__scopeId","data-v-3e9c20e4"]]),ar={class:"VPNavScreenMenuGroupSection"},or={key:0,class:"title"},nr=b({__name:"VPNavScreenMenuGroupSection",props:{text:{},items:{}},setup(e){return(t,a)=>(r(),l("div",ar,[e.text?(r(),l("p",or,$(e.text),1)):f("",!0),(r(!0),l(A,null,z(e.items,o=>(r(),L(ze,{key:o.text,item:o},null,8,["item"]))),128))]))}}),rr=y(nr,[["__scopeId","data-v-8133b170"]]),sr=["aria-controls","aria-expanded"],ir=["innerHTML"],lr=["id"],cr={key:0,class:"item"},dr={key:1,class:"item"},ur={key:2,class:"group"},pr=b({__name:"VPNavScreenMenuGroup",props:{text:{},items:{}},setup(e){const t=e,a=D(!1),o=x(()=>`NavScreenGroup-${t.text.replace(" ","-").toLowerCase()}`);function n(){a.value=!a.value}return(i,d)=>(r(),l("div",{class:M(["VPNavScreenMenuGroup",{open:a.value}])},[s("button",{class:"button","aria-controls":o.value,"aria-expanded":a.value,onClick:n},[s("span",{class:"button-text",innerHTML:e.text},null,8,ir),d[0]||(d[0]=s("span",{class:"vpi-plus button-icon"},null,-1))],8,sr),s("div",{id:o.value,class:"items"},[(r(!0),l(A,null,z(e.items,p=>(r(),l(A,{key:JSON.stringify(p)},["link"in p?(r(),l("div",cr,[w(ze,{item:p},null,8,["item"])])):"component"in p?(r(),l("div",dr,[(r(),L(R(p.component),K({ref_for:!0},p.props,{"screen-menu":""}),null,16))])):(r(),l("div",ur,[w(rr,{text:p.text,items:p.items},null,8,["text","items"])]))],64))),128))],8,lr)],2))}}),mr=y(pr,[["__scopeId","data-v-b9ab8c58"]]),vr={key:0,class:"VPNavScreenMenu"},fr=b({__name:"VPNavScreenMenu",setup(e){const{theme:t}=C();return(a,o)=>c(t).nav?(r(),l("nav",vr,[(r(!0),l(A,null,z(c(t).nav,n=>(r(),l(A,{key:JSON.stringify(n)},["link"in n?(r(),L(Zn,{key:0,item:n},null,8,["item"])):"component"in n?(r(),L(R(n.component),K({key:1,ref_for:!0},n.props,{"screen-menu":""}),null,16)):(r(),L(mr,{key:2,text:n.text||"",items:n.items},null,8,["text","items"]))],64))),128))])):f("",!0)}}),hr=b({__name:"VPNavScreenSocialLinks",setup(e){const{theme:t}=C();return(a,o)=>c(t).socialLinks?(r(),L(Le,{key:0,class:"VPNavScreenSocialLinks",links:c(t).socialLinks},null,8,["links"])):f("",!0)}}),br={class:"list"},gr=b({__name:"VPNavScreenTranslations",setup(e){const{localeLinks:t,currentLang:a}=Q({correspondingLink:!0}),o=D(!1);function n(){o.value=!o.value}return(i,d)=>c(t).length&&c(a).label?(r(),l("div",{key:0,class:M(["VPNavScreenTranslations",{open:o.value}])},[s("button",{class:"title",onClick:n},[d[0]||(d[0]=s("span",{class:"vpi-languages icon lang"},null,-1)),U(" "+$(c(a).label)+" ",1),d[1]||(d[1]=s("span",{class:"vpi-chevron-down icon chevron"},null,-1))]),s("ul",br,[(r(!0),l(A,null,z(c(t),p=>(r(),l("li",{key:p.link,class:"item"},[w(q,{class:"link",href:p.link},{default:v(()=>[U($(p.text),1)]),_:2},1032,["href"])]))),128))])],2)):f("",!0)}}),kr=y(gr,[["__scopeId","data-v-858fe1a4"]]),yr={class:"container"},$r=b({__name:"VPNavScreen",props:{open:{type:Boolean}},setup(e){const t=D(null),a=Ne(le?document.body:null);return(o,n)=>(r(),L(be,{name:"fade",onEnter:n[0]||(n[0]=i=>a.value=!0),onAfterLeave:n[1]||(n[1]=i=>a.value=!1)},{default:v(()=>[e.open?(r(),l("div",{key:0,class:"VPNavScreen",ref_key:"screen",ref:t,id:"VPNavScreen"},[s("div",yr,[u(o.$slots,"nav-screen-content-before",{},void 0,!0),w(fr,{class:"menu"}),w(kr,{class:"translations"}),w(Yn,{class:"appearance"}),w(hr,{class:"social-links"}),u(o.$slots,"nav-screen-content-after",{},void 0,!0)])],512)):f("",!0)]),_:3}))}}),_r=y($r,[["__scopeId","data-v-f2779853"]]),Pr={key:0,class:"VPNav"},wr=b({__name:"VPNav",setup(e){const{isScreenOpen:t,closeScreen:a,toggleScreen:o}=go(),{frontmatter:n}=C(),i=x(()=>n.value.navbar!==!1);return Me("close-screen",a),oe(()=>{le&&document.documentElement.classList.toggle("hide-nav",!i.value)}),(d,p)=>i.value?(r(),l("header",Pr,[w(Gn,{"is-screen-open":c(t),onToggleScreen:c(o)},{"nav-bar-title-before":v(()=>[u(d.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":v(()=>[u(d.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":v(()=>[u(d.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":v(()=>[u(d.$slots,"nav-bar-content-after",{},void 0,!0)]),_:3},8,["is-screen-open","onToggleScreen"]),w(_r,{open:c(t)},{"nav-screen-content-before":v(()=>[u(d.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":v(()=>[u(d.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3},8,["open"])])):f("",!0)}}),Lr=y(wr,[["__scopeId","data-v-ae24b3ad"]]),xr=["role","tabindex"],Sr={key:1,class:"items"},Vr=b({__name:"VPSidebarItem",props:{item:{},depth:{}},setup(e){const t=e,{collapsed:a,collapsible:o,isLink:n,isActiveLink:i,hasActiveLink:d,hasChildren:p,toggle:m}=$t(x(()=>t.item)),_=x(()=>p.value?"section":"div"),V=x(()=>n.value?"a":"div"),h=x(()=>p.value?t.depth+2===7?"p":`h${t.depth+2}`:"p"),k=x(()=>n.value?void 0:"button"),T=x(()=>[[`level-${t.depth}`],{collapsible:o.value},{collapsed:a.value},{"is-link":n.value},{"is-active":i.value},{"has-active":d.value}]);function S(P){"key"in P&&P.key!=="Enter"||!t.item.link&&m()}function g(){t.item.link&&m()}return(P,I)=>{const N=Y("VPSidebarItem",!0);return r(),L(R(_.value),{class:M(["VPSidebarItem",T.value])},{default:v(()=>[e.item.text?(r(),l("div",K({key:0,class:"item",role:k.value},Ze(e.item.items?{click:S,keydown:S}:{},!0),{tabindex:e.item.items&&0}),[I[1]||(I[1]=s("div",{class:"indicator"},null,-1)),e.item.link?(r(),L(q,{key:0,tag:V.value,class:"link",href:e.item.link,rel:e.item.rel,target:e.item.target},{default:v(()=>[(r(),L(R(h.value),{class:"text",innerHTML:e.item.text},null,8,["innerHTML"]))]),_:1},8,["tag","href","rel","target"])):(r(),L(R(h.value),{key:1,class:"text",innerHTML:e.item.text},null,8,["innerHTML"])),e.item.collapsed!=null&&e.item.items&&e.item.items.length?(r(),l("div",{key:2,class:"caret",role:"button","aria-label":"toggle section",onClick:g,onKeydown:et(g,["enter"]),tabindex:"0"},[...I[0]||(I[0]=[s("span",{class:"vpi-chevron-right caret-icon"},null,-1)])],32)):f("",!0)],16,xr)):f("",!0),e.item.items&&e.item.items.length?(r(),l("div",Sr,[e.depth<5?(r(!0),l(A,{key:0},z(e.item.items,B=>(r(),L(N,{key:B.text,item:B,depth:e.depth+1},null,8,["item","depth"]))),128)):f("",!0)])):f("",!0)]),_:1},8,["class"])}}}),Tr=y(Vr,[["__scopeId","data-v-b3fd67f8"]]),Cr=b({__name:"VPSidebarGroup",props:{items:{}},setup(e){const t=D(!0);let a=null;return G(()=>{a=setTimeout(()=>{a=null,t.value=!1},300)}),tt(()=>{a!=null&&(clearTimeout(a),a=null)}),(o,n)=>(r(!0),l(A,null,z(e.items,i=>(r(),l("div",{key:i.text,class:M(["group",{"no-transition":t.value}])},[w(Tr,{item:i,depth:0},null,8,["item"])],2))),128))}}),Ir=y(Cr,[["__scopeId","data-v-c40bc020"]]),Nr={class:"nav",id:"VPSidebarNav","aria-labelledby":"sidebar-aria-label",tabindex:"-1"},Mr=b({__name:"VPSidebar",props:{open:{type:Boolean}},setup(e){const{sidebarGroups:t,hasSidebar:a}=W(),o=e,n=D(null),i=Ne(le?document.body:null);j([o,n],()=>{var p;o.open?(i.value=!0,(p=n.value)==null||p.focus()):i.value=!1},{immediate:!0,flush:"post"});const d=D(0);return j(t,()=>{d.value+=1},{deep:!0}),(p,m)=>c(a)?(r(),l("aside",{key:0,class:M(["VPSidebar",{open:e.open}]),ref_key:"navEl",ref:n,onClick:m[0]||(m[0]=at(()=>{},["stop"]))},[m[2]||(m[2]=s("div",{class:"curtain"},null,-1)),s("nav",Nr,[m[1]||(m[1]=s("span",{class:"visually-hidden",id:"sidebar-aria-label"}," Sidebar Navigation ",-1)),u(p.$slots,"sidebar-nav-before",{},void 0,!0),(r(),L(Ir,{items:c(t),key:d.value},null,8,["items"])),u(p.$slots,"sidebar-nav-after",{},void 0,!0)])],2)):f("",!0)}}),Ar=y(Mr,[["__scopeId","data-v-319d5ca6"]]),Dr=b({__name:"VPSkipLink",setup(e){const{theme:t}=C(),a=se(),o=D();j(()=>a.path,()=>o.value.focus());function n({target:i}){const d=document.getElementById(decodeURIComponent(i.hash).slice(1));if(d){const p=()=>{d.removeAttribute("tabindex"),d.removeEventListener("blur",p)};d.setAttribute("tabindex","-1"),d.addEventListener("blur",p),d.focus(),window.scrollTo(0,0)}}return(i,d)=>(r(),l(A,null,[s("span",{ref_key:"backToTop",ref:o,tabindex:"-1"},null,512),s("a",{href:"#VPContent",class:"VPSkipLink visually-hidden",onClick:n},$(c(t).skipToContentLabel||"Skip to content"),1)],64))}}),Br=y(Dr,[["__scopeId","data-v-0b0ada53"]]),Hr=b({__name:"Layout",setup(e){const{isOpen:t,open:a,close:o}=W(),n=se();j(()=>n.path,o),yt(t,o);const{frontmatter:i}=C(),d=ot(),p=x(()=>!!d["home-hero-image"]);return Me("hero-image-slot-exists",p),(m,_)=>{const V=Y("Content");return c(i).layout!==!1?(r(),l("div",{key:0,class:M(["Layout",c(i).pageClass])},[u(m.$slots,"layout-top",{},void 0,!0),w(Br),w(it,{class:"backdrop",show:c(t),onClick:c(o)},null,8,["show","onClick"]),w(Lr,null,{"nav-bar-title-before":v(()=>[u(m.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":v(()=>[u(m.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":v(()=>[u(m.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":v(()=>[u(m.$slots,"nav-bar-content-after",{},void 0,!0)]),"nav-screen-content-before":v(()=>[u(m.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":v(()=>[u(m.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3}),w(bo,{open:c(t),onOpenMenu:c(a)},null,8,["open","onOpenMenu"]),w(Ar,{open:c(t)},{"sidebar-nav-before":v(()=>[u(m.$slots,"sidebar-nav-before",{},void 0,!0)]),"sidebar-nav-after":v(()=>[u(m.$slots,"sidebar-nav-after",{},void 0,!0)]),_:3},8,["open"]),w(eo,null,{"page-top":v(()=>[u(m.$slots,"page-top",{},void 0,!0)]),"page-bottom":v(()=>[u(m.$slots,"page-bottom",{},void 0,!0)]),"not-found":v(()=>[u(m.$slots,"not-found",{},void 0,!0)]),"home-hero-before":v(()=>[u(m.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":v(()=>[u(m.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":v(()=>[u(m.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":v(()=>[u(m.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":v(()=>[u(m.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":v(()=>[u(m.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":v(()=>[u(m.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":v(()=>[u(m.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":v(()=>[u(m.$slots,"home-features-after",{},void 0,!0)]),"doc-footer-before":v(()=>[u(m.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":v(()=>[u(m.$slots,"doc-before",{},void 0,!0)]),"doc-after":v(()=>[u(m.$slots,"doc-after",{},void 0,!0)]),"doc-top":v(()=>[u(m.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":v(()=>[u(m.$slots,"doc-bottom",{},void 0,!0)]),"aside-top":v(()=>[u(m.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":v(()=>[u(m.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":v(()=>[u(m.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":v(()=>[u(m.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":v(()=>[u(m.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":v(()=>[u(m.$slots,"aside-ads-after",{},void 0,!0)]),_:3}),w(ro),u(m.$slots,"layout-bottom",{},void 0,!0)],2)):(r(),L(V,{key:1}))}}}),Er=y(Hr,[["__scopeId","data-v-5d98c3a5"]]),zr={Layout:Er,enhanceApp:({app:e})=>{e.component("Badge",nt)}};function Fe(e="portrait",t="A4"){return`
/* ================================================================
   PRINT REPORT — Professional Corporate PDF
   Renderizado em janela própria. Não herda estilos do navegador.
   ================================================================ */

@page {
  size: ${t} ${e};
  margin: 18mm 15mm 15mm 18mm;
}

/* Capa ocupa o papel inteiro — sem margens */
@page :first {
  margin: 0;
}

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --navy:    #0b2545;
  --blue:    #1a5fa8;
  --blue-lt: #e8f0fb;
  --text:    #111827;
  --sub:     #4b5563;
  --muted:   #9ca3af;
  --border:  #e2e8f0;
  --row-alt: #f8fafc;
  --row-tot: #e8f0fb;
  --green:   #059669;
  --red:     #dc2626;
  --amber:   #d97706;
}

html {
  background: #fff;
  print-color-adjust: exact;
  -webkit-print-color-adjust: exact;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
               'Helvetica Neue', Arial, sans-serif;
  font-size: 9pt;
  line-height: 1.6;
  color: var(--text);
  background: #fff;
  margin: 0;
  padding: 0;
}

/* ── Layout de página via table trick (header/footer repetidos por <thead>/<tfoot>) ── */
.pr-layout-table {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
}

.pr-layout-table thead { display: table-header-group; }
.pr-layout-table tfoot { display: table-footer-group; }
.pr-layout-table tbody { display: table-row-group; }

.pr-layout-hdr,
.pr-layout-ftr,
.pr-layout-body {
  display: table-cell;
  padding: 0;
  border: none;
}

/* ── Cabeçalho (repete via <thead> em todas as páginas) ───────── */
.pr-page-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3mm 0 4mm;
  background: #fff;
  position: relative;
}

.pr-page-header::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1.5px;
  background: linear-gradient(to right, var(--navy), var(--blue), transparent);
}

.pr-hdr-left {
  display: flex;
  align-items: center;
  gap: 4mm;
}

.pr-hdr-logo {
  height: 18px;
  width: auto;
  object-fit: contain;
  object-position: left center;
}

.pr-hdr-sep {
  width: 1px;
  height: 10px;
  background: var(--border);
}

.pr-hdr-title {
  font-size: 8pt;
  font-weight: 700;
  color: var(--navy);
  max-width: 90mm;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.pr-hdr-period {
  font-size: 7pt;
  color: var(--muted);
  margin-left: 3mm;
}

.pr-hdr-right {
  text-align: right;
  font-size: 7pt;
  color: var(--muted);
  line-height: 1.4;
}

/* ── Rodapé (repete via <tfoot> em todas as páginas) ─────────── */
.pr-page-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3mm 0 0;
  background: #fff;
  position: relative;
}

.pr-page-footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: var(--border);
}

.pr-ftr-company {
  font-size: 7pt;
  color: var(--muted);
  font-weight: 500;
}

.pr-ftr-confidential {
  font-size: 6.5pt;
  color: #d1d5db;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.pr-ftr-page {
  font-size: 7pt;
  color: var(--muted);
  text-align: right;
  counter-increment: page;
}

.pr-ftr-page::after {
  content: "Página " counter(page);
}

/* ══════════════════════════════════════════════════════════════
   CAPA
   ══════════════════════════════════════════════════════════════ */
.pr-cover {
  position: relative;
  width: 100%;
  /* Capa full-bleed: ocupa a folha inteira (@page :first { margin: 0 }) */
  min-height: 297mm;
  display: flex;
  flex-direction: column;
  page-break-after: always;
  break-after: page;
  overflow: hidden;
  padding: 0;
}

/* Barra lateral esquerda */
.pr-cover::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 6mm;
  background: var(--navy);
}

/* Acento direito */
.pr-cover::after {
  content: '';
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 2.5mm;
  background: var(--blue);
}

.pr-cover-top {
  background: var(--navy);
  padding: 14mm 18mm 10mm 14mm;
  display: flex;
  align-items: flex-start;
  gap: 6mm;
}

.pr-cover-logo-wrap {
  flex-shrink: 0;
}

.pr-cover-logo {
  height: 36px;
  width: auto;
  object-fit: contain;
  filter: brightness(0) invert(1);
}

.pr-cover-logo-name {
  font-size: 11pt;
  font-weight: 700;
  color: rgba(255,255,255,0.9);
  margin-left: 2mm;
}

.pr-cover-body {
  flex: 1;
  padding: 20mm 18mm 18mm 14mm;
  display: flex;
  flex-direction: column;
}

.pr-cover-label {
  font-size: 7.5pt;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--muted);
  margin-bottom: 5mm;
}

.pr-cover-title {
  font-size: 28pt;
  font-weight: 800;
  color: var(--navy);
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin-bottom: 4mm;
}

.pr-cover-subtitle {
  font-size: 12pt;
  font-weight: 400;
  color: var(--sub);
  line-height: 1.45;
  margin-bottom: 10mm;
  max-width: 140mm;
}

.pr-cover-accent-bar {
  width: 16mm;
  height: 3px;
  background: var(--blue);
  margin-bottom: 12mm;
  border-radius: 2px;
}

.pr-cover-meta {
  margin-top: auto;
  border-top: 1px solid var(--border);
  padding-top: 8mm;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4mm 12mm;
}

.pr-cover-meta-item {}

.pr-cover-meta-label {
  display: block;
  font-size: 6.5pt;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--muted);
  margin-bottom: 1mm;
}

.pr-cover-meta-value {
  font-size: 9pt;
  font-weight: 600;
  color: var(--text);
}

.pr-cover-notes {
  margin-top: 8mm;
  padding: 4mm 5mm;
  background: #f8fafc;
  border-left: 3px solid var(--blue);
  border-radius: 0 3px 3px 0;
  font-size: 8pt;
  color: var(--sub);
  line-height: 1.55;
}

/* ══════════════════════════════════════════════════════════════
   SEÇÕES
   ══════════════════════════════════════════════════════════════ */
.pr-section {
  margin-bottom: 10mm;
}

.pr-section + .pr-section {
  padding-top: 2mm;
}

.pr-section-hdr {
  display: flex;
  align-items: baseline;
  gap: 4mm;
  margin-bottom: 5mm;
  padding-bottom: 2.5mm;
  border-bottom: 1.5px solid var(--border);
}

.pr-section-eyebrow {
  font-size: 6.5pt;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--blue);
  white-space: nowrap;
}

.pr-section-title {
  font-size: 13pt;
  font-weight: 700;
  color: var(--navy);
  line-height: 1.2;
}

.pr-section-desc {
  font-size: 8pt;
  color: var(--muted);
  margin-top: 1.5mm;
  line-height: 1.5;
}

/* Forçar quebra de página antes de uma seção */
.pr-section.pr-page-break {
  break-before: page;
  page-break-before: always;
}

/* ══════════════════════════════════════════════════════════════
   RESUMO EXECUTIVO
   ══════════════════════════════════════════════════════════════ */
.pr-summary {
  break-inside: avoid;
  page-break-inside: avoid;
  background: linear-gradient(135deg, #f0f5ff 0%, var(--blue-lt) 100%);
  border: 1px solid #c7d9f5;
  border-left: 4px solid var(--blue);
  border-radius: 0 5px 5px 0;
  padding: 6mm 7mm;
  margin-bottom: 6mm;
}

.pr-summary-label {
  font-size: 6.5pt;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--blue);
  margin-bottom: 3mm;
}

.pr-summary-body {
  font-size: 9.5pt;
  color: var(--text);
  line-height: 1.7;
}

.pr-summary-body p + p { margin-top: 2mm; }

/* ══════════════════════════════════════════════════════════════
   KPI CARDS
   ══════════════════════════════════════════════════════════════ */
.pr-kpi-grid {
  display: grid;
  gap: 4mm;
  margin-bottom: 6mm;
}

.pr-kpi-grid[data-cols="2"] { grid-template-columns: repeat(2, 1fr); }
.pr-kpi-grid[data-cols="3"] { grid-template-columns: repeat(3, 1fr); }
.pr-kpi-grid[data-cols="4"] { grid-template-columns: repeat(4, 1fr); }

.pr-kpi-card {
  break-inside: avoid;
  page-break-inside: avoid;
  position: relative;
  border: 1px solid var(--border);
  border-radius: 5px;
  padding: 5mm 5mm 4mm;
  background: #fff;
  overflow: hidden;
}

/* Topo colorido */
.pr-kpi-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 2.5px;
  background: var(--blue);
}

.pr-kpi-card[data-trend="up"]::before    { background: var(--green); }
.pr-kpi-card[data-trend="down"]::before  { background: var(--red); }
.pr-kpi-card[data-trend="warn"]::before  { background: var(--amber); }

/* Fundo sutil */
.pr-kpi-card::after {
  content: '';
  position: absolute;
  bottom: 0; right: 0;
  width: 20mm;
  height: 20mm;
  background: radial-gradient(circle at bottom right, rgba(26,95,168,0.04) 0%, transparent 70%);
}

.pr-kpi-label {
  font-size: 6.5pt;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  color: var(--muted);
  margin-bottom: 2.5mm;
}

.pr-kpi-value {
  font-size: 20pt;
  font-weight: 800;
  color: var(--navy);
  line-height: 1;
  letter-spacing: -0.03em;
  font-variant-numeric: tabular-nums;
  margin-bottom: 2.5mm;
}

.pr-kpi-change {
  display: inline-flex;
  align-items: center;
  gap: 1mm;
  font-size: 8pt;
  font-weight: 600;
  color: var(--muted);
}

.pr-kpi-change[data-dir="up"]   { color: var(--green); }
.pr-kpi-change[data-dir="down"] { color: var(--red); }

.pr-kpi-note {
  font-size: 7pt;
  color: var(--muted);
  margin-top: 2mm;
  line-height: 1.4;
}

/* ══════════════════════════════════════════════════════════════
   TABELA DE DADOS
   ══════════════════════════════════════════════════════════════ */
.pr-table-wrap {
  margin-bottom: 6mm;
  border-radius: 5px;
  overflow: hidden;
  border: 1px solid #dce5ef;
}

.pr-table-title {
  padding: 3mm 4mm;
  background: #f8fafc;
  border-bottom: 1px solid var(--border);
  font-size: 8pt;
  font-weight: 700;
  color: var(--navy);
}

table.pr-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 8.5pt;
}

table.pr-table thead {
  display: table-header-group; /* repete em cada página */
}

table.pr-table thead th {
  background: var(--navy);
  color: #fff;
  font-weight: 600;
  font-size: 7.5pt;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  padding: 3mm 4mm;
  text-align: left;
  border: none;
  white-space: nowrap;
  vertical-align: middle;
}

table.pr-table thead th.th-right  { text-align: right; }
table.pr-table thead th.th-center { text-align: center; }

table.pr-table tbody tr {
  break-inside: avoid;
  page-break-inside: avoid;
}

table.pr-table tbody tr:nth-child(even) td {
  background: var(--row-alt);
}

table.pr-table tbody tr.tr-total td {
  background: var(--row-tot) !important;
  font-weight: 700;
  color: var(--navy);
  border-top: 1.5px solid var(--blue);
  border-bottom: none;
}

table.pr-table tbody tr.tr-subtotal td {
  background: #f1f5f9 !important;
  font-weight: 600;
  color: var(--sub);
  font-style: italic;
}

table.pr-table tbody td {
  padding: 2.8mm 4mm;
  border-bottom: 1px solid #eef2f7;
  color: var(--text);
  vertical-align: middle;
  line-height: 1.4;
}

table.pr-table tbody td.td-right   { text-align: right; font-variant-numeric: tabular-nums; }
table.pr-table tbody td.td-center  { text-align: center; }
table.pr-table tbody td.td-muted   { color: var(--muted); }
table.pr-table tbody td.td-bold    { font-weight: 700; }
table.pr-table tbody td.td-mono    { font-family: 'SFMono-Regular', Consolas, monospace; font-size: 8pt; }

/* Modo compacto */
.pr-table-compact table.pr-table thead th { padding: 2mm 3mm; font-size: 7pt; }
.pr-table-compact table.pr-table tbody td { padding: 1.8mm 3mm; font-size: 8pt; }

/* ══════════════════════════════════════════════════════════════
   BLOCO DE GRÁFICO
   ══════════════════════════════════════════════════════════════ */
.pr-chart-block {
  break-inside: avoid;
  page-break-inside: avoid;
  border: 1px solid var(--border);
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 6mm;
}

.pr-chart-hdr {
  padding: 4mm 5mm 3mm;
  border-bottom: 1px solid var(--border);
  background: #f8fafc;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 4mm;
}

.pr-chart-title {
  font-size: 9.5pt;
  font-weight: 700;
  color: var(--navy);
}

.pr-chart-desc {
  font-size: 7.5pt;
  color: var(--muted);
}

.pr-chart-canvas {
  padding: 5mm;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 55mm;
}

.pr-chart-canvas svg,
.pr-chart-canvas canvas,
.pr-chart-canvas img {
  max-width: 100%;
  max-height: 80mm;
  height: auto;
  width: auto;
}

.pr-chart-footer {
  padding: 2.5mm 5mm;
  border-top: 1px solid var(--border);
  background: #f8fafc;
  font-size: 7pt;
  color: var(--muted);
}

/* ══════════════════════════════════════════════════════════════
   BLOCO DE INFORMAÇÃO
   ══════════════════════════════════════════════════════════════ */
.pr-info-block {
  break-inside: avoid;
  page-break-inside: avoid;
  border-left: 3.5px solid var(--blue);
  border-radius: 0 4px 4px 0;
  padding: 4mm 5mm;
  margin-bottom: 4mm;
  background: #f8fafc;
  border: 1px solid #dbeafe;
  border-left-width: 3.5px;
  border-left-color: var(--blue);
}

.pr-info-block.pr-info-success {
  border-left-color: var(--green);
  background: #f0fdf4;
  border-color: #d1fae5;
  border-left-color: var(--green);
}

.pr-info-block.pr-info-warning {
  border-left-color: var(--amber);
  background: #fffbeb;
  border-color: #fde68a;
  border-left-color: var(--amber);
}

.pr-info-block.pr-info-error {
  border-left-color: var(--red);
  background: #fef2f2;
  border-color: #fecaca;
  border-left-color: var(--red);
}

.pr-info-title {
  font-size: 8.5pt;
  font-weight: 700;
  color: var(--navy);
  margin-bottom: 2mm;
}

.pr-info-body {
  font-size: 8.5pt;
  color: var(--sub);
  line-height: 1.6;
}

/* ══════════════════════════════════════════════════════════════
   BLOCO DE ASSINATURAS
   ══════════════════════════════════════════════════════════════ */
.pr-signature-block {
  break-inside: avoid;
  page-break-inside: avoid;
  margin-top: 12mm;
}

.pr-signature-place-date {
  font-size: 8.5pt;
  color: var(--sub);
  margin-bottom: 10mm;
}

.pr-signature-grid {
  display: grid;
  gap: 12mm;
  margin-bottom: 4mm;
}

.pr-signature-grid[data-cols="2"] { grid-template-columns: repeat(2, 1fr); }
.pr-signature-grid[data-cols="3"] { grid-template-columns: repeat(3, 1fr); }

.pr-signature-item { text-align: center; }

.pr-signature-line {
  border-top: 1px solid #374151;
  margin-bottom: 2.5mm;
  padding-top: 0;
}

.pr-signature-name {
  font-size: 8.5pt;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 1mm;
}

.pr-signature-role {
  font-size: 7.5pt;
  color: var(--muted);
}

/* ══════════════════════════════════════════════════════════════
   UTILITÁRIOS GERAIS
   ══════════════════════════════════════════════════════════════ */
.pr-divider {
  border: none;
  border-top: 1px solid var(--border);
  margin: 5mm 0;
}

.pr-spacer-sm { height: 4mm; }
.pr-spacer-md { height: 8mm; }
.pr-spacer-lg { height: 14mm; }

.pr-two-col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6mm;
}

.pr-three-col {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 5mm;
}

.pr-text-right  { text-align: right; }
.pr-text-center { text-align: center; }
.pr-text-muted  { color: var(--muted); }
.pr-text-small  { font-size: 7.5pt; }
.pr-text-bold   { font-weight: 700; }

.pr-badge {
  display: inline-block;
  padding: 0.5mm 2.5mm;
  border-radius: 3px;
  font-size: 7pt;
  font-weight: 600;
  vertical-align: middle;
}

.pr-badge-blue   { background: #dbeafe; color: var(--blue); }
.pr-badge-green  { background: #d1fae5; color: var(--green); }
.pr-badge-red    { background: #fee2e2; color: var(--red); }
.pr-badge-amber  { background: #fef3c7; color: var(--amber); }
.pr-badge-gray   { background: #f3f4f6; color: var(--muted); }

/* Tipografia de conteúdo geral */
p   { margin-bottom: 2mm; }
ul, ol { padding-left: 5mm; margin-bottom: 2mm; }
li  { margin-bottom: 1mm; }
strong { font-weight: 700; }
em     { font-style: italic; }

a { color: var(--blue); text-decoration: none; }

h1 { font-size: 16pt; font-weight: 700; color: var(--navy); margin: 0 0 4mm; page-break-after: avoid; }
h2 { font-size: 12pt; font-weight: 700; color: var(--navy); margin: 0 0 3mm; page-break-after: avoid; }
h3 { font-size: 10pt; font-weight: 700; color: var(--sub);  margin: 0 0 2mm; page-break-after: avoid; }

/* Seção marcada para não quebrar entre páginas (ex.: cada periférico) */
.pr-avoid-break {
  break-inside: avoid;
  page-break-inside: avoid;
}

@media print {
  .pr-layout-table thead { display: table-header-group; }
  .pr-layout-table tfoot { display: table-footer-group; }
  .pr-layout-table tbody { display: table-row-group; }

  table.pr-table thead { display: table-header-group; }

  .pr-kpi-card,
  .pr-chart-block,
  .pr-info-block,
  .pr-summary,
  .pr-signature-block,
  .pr-avoid-break {
    break-inside: avoid;
    page-break-inside: avoid;
  }

  h1, h2, h3, h4 {
    break-after: avoid;
    page-break-after: avoid;
  }
}
`}const Fr={class:"home-table-wrapper"},Or={class:"home-table"},Rr=["href"],qr={style:{"text-align":"center"}},Ur={style:{"text-align":"center"}},jr={style:{"text-align":"center"}},Gr=["disabled","title","onClick"],Wr={key:0,class:"pdf-btn-loading"},Kr={key:1},Jr=`
/* ── Conteúdo extraído do .vp-doc ── */

.doc-content h1 {
  font-size: 16pt; font-weight: 700; color: #0b2545;
  margin: 0 0 5mm; padding-bottom: 3mm;
  border-bottom: 1.5px solid #e2e8f0;
  break-after: avoid; page-break-after: avoid;
}
.doc-content h2 {
  font-size: 12pt; font-weight: 700; color: #1f2937;
  margin: 6mm 0 3mm; break-after: avoid; page-break-after: avoid;
}
.doc-content h3 {
  font-size: 10pt; font-weight: 700; color: #374151;
  margin: 4mm 0 2mm; break-after: avoid; page-break-after: avoid;
}
.doc-content h4 {
  font-size: 9.5pt; font-weight: 600; color: #4b5563;
  margin: 3mm 0 1.5mm; break-after: avoid; page-break-after: avoid;
}

.doc-content p  { margin: 0 0 2.5mm; font-size: 9pt; line-height: 1.65; }
.doc-content ul, .doc-content ol { padding-left: 5mm; margin: 0 0 3mm; }
.doc-content li { margin-bottom: 1.2mm; font-size: 9pt; }
.doc-content strong { font-weight: 700; }
.doc-content em     { font-style: italic; }

.doc-content hr {
  border: none; border-top: 1px solid #e2e8f0; margin: 4mm 0;
}

/* Tabelas nativas do VitePress */
.doc-content table {
  width: 100%; border-collapse: collapse;
  margin: 3mm 0 5mm; font-size: 8.5pt;
}
.doc-content table thead { display: table-header-group; }
.doc-content table thead th {
  background: #0b2545; color: #fff;
  font-weight: 600; font-size: 7.5pt;
  text-transform: uppercase; letter-spacing: 0.07em;
  padding: 3mm 4mm; text-align: left; border: none;
}
.doc-content table tbody tr {
  break-inside: avoid !important;
  page-break-inside: avoid !important;
}
.doc-content table tbody tr:nth-child(even) td { background: #f8fafc; }
.doc-content table tbody td {
  padding: 2.5mm 4mm; border-bottom: 1px solid #eef2f7;
  color: #1f2937; vertical-align: middle; line-height: 1.4;
}

/* Código */
.doc-content code {
  font-family: 'SFMono-Regular', Consolas, monospace;
  font-size: 8.5pt; background: #f3f4f6; color: #1f2937;
  padding: 0.1em 0.35em; border-radius: 3px;
  border: 1px solid #e5e7eb;
}
.doc-content pre {
  background: #f8f9fa; border: 1px solid #e5e7eb;
  border-radius: 4px; padding: 3mm 4mm; margin: 3mm 0;
  font-size: 8.5pt; white-space: pre-wrap; word-break: break-word;
  break-inside: avoid; page-break-inside: avoid;
}
.doc-content pre code {
  background: none; border: none; padding: 0;
}

/* Blockquotes (⚠️ / ℹ️) */
.doc-content blockquote {
  border-left: 4px solid #f59e0b; background: #fffbeb;
  padding: 3mm 4mm; margin: 3mm 0;
  border-radius: 0 4px 4px 0;
  break-inside: avoid; page-break-inside: avoid;
}
.doc-content blockquote p { margin: 0; color: #78350f; }

/* Custom blocks VitePress */
.doc-content .custom-block {
  padding: 3mm 4mm; border-radius: 4px;
  margin: 3mm 0; border-left: 4px solid;
  break-inside: avoid; page-break-inside: avoid;
}
.doc-content .custom-block-title {
  font-weight: 700; font-size: 8.5pt; margin-bottom: 1.5mm;
}
.doc-content .custom-block.tip    { border-color: #10b981; background: #ecfdf5; }
.doc-content .custom-block.tip    .custom-block-title { color: #065f46; }
.doc-content .custom-block.info   { border-color: #3b82f6; background: #eff6ff; }
.doc-content .custom-block.info   .custom-block-title { color: #1e40af; }
.doc-content .custom-block.warning { border-color: #f59e0b; background: #fffbeb; }
.doc-content .custom-block.warning .custom-block-title { color: #92400e; }
.doc-content .custom-block.danger  { border-color: #ef4444; background: #fef2f2; }
.doc-content .custom-block.danger  .custom-block-title { color: #991b1b; }

/* SVG / Mermaid */
.doc-content svg { max-width: 100%; height: auto; display: block; margin: 3mm auto; }

/* Divisor do Anexo */
.appendix-divider-wrap {
  display: flex; align-items: center; min-height: 40mm;
}
.appendix-divider-box {
  border-left: 5px solid #1a5fa8; padding: 4mm 6mm;
}
`,Yr=b({__name:"HomeTable",setup(e){const{site:t}=te(),a=[{name:"Desbravador 4.1 / 3.1 / 3.0 Smart",primaryLink:"/desbravador-41/local/requisitos-hardware",docPages:[{path:"/desbravador-41/local/requisitos-hardware",label:"Instalação Local"},{path:"/desbravador-41/cloud/requisitos-cloud",label:"Cloud — AutoSky"}],hasLocal:!0,hasCloud:!0},{name:"POS Fast by Desbravador",primaryLink:"/desbravador-posfast/local/requisitos-hardware",docPages:[{path:"/desbravador-posfast/local/requisitos-hardware",label:"Instalação Local"}],hasLocal:!0,hasCloud:!1},{name:"Light Web Plus / 3.0 Web Plus",primaryLink:"/light-web-plus/local/requisitos-hardware",docPages:[{path:"/light-web-plus/local/requisitos-hardware",label:"Instalação Local"}],hasLocal:!0,hasCloud:!0},{name:"Gas Station / Liquor Store",primaryLink:"/gas-station/local/requisitos-hardware",docPages:[{path:"/gas-station/local/requisitos-hardware",label:"Instalação Local"}],hasLocal:!0,hasCloud:!1},{name:"Easy Web / Light Web / 3.0 Web",primaryLink:"/light-web/local/requisitos-hardware",docPages:[{path:"/light-web/local/requisitos-hardware",label:"Requisitos"}],hasLocal:!1,hasCloud:!0},{name:"Desbravador Enterprise / 4.0",primaryLink:"/desbravador-enterprise/",docPages:[{path:"/desbravador-enterprise/",label:"Visão Geral"},{path:"/desbravador-enterprise/local/requisitos-hardware",label:"On-Premise"},{path:"/desbravador-enterprise/hibrido/requisitos-hardware",label:"Híbrido"},{path:"/desbravador-enterprise/cloud/requisitos-hardware",label:"Cloud — AutoSky"}],hasLocal:!0,hasCloud:!0}],o=[{path:"/perifericos/fechaduras-homologadas",label:"Fechaduras e Tarifadores Homologados"},{path:"/perifericos/impressoras-homologadas",label:"Impressoras Homologadas"},{path:"/perifericos/pinpads-homologados",label:"Pinpads Homologados"},{path:"/perifericos/tef-homologados",label:"Sistemas de TEF Homologados"},{path:"/perifericos/dispositivos-ipdv-pdv",label:"Dispositivos iPDV e PDV Homologados"},{path:"/perifericos/sat-mfe-homologados",label:"SAT / MFE Homologados"}],n=D(null);function i(S){const g=(t.value.base||"/").replace(/\/$/,"");return`${window.location.origin}${g}${S}`}async function d(S){try{const g=await fetch(i(S));if(!g.ok)return null;const P=await g.text(),B=new DOMParser().parseFromString(P,"text/html").querySelector(".vp-doc");if(!B)return null;B.querySelectorAll(".header-anchor, [tabindex], script").forEach(H=>{H.tagName==="A"&&H.classList.contains("header-anchor")||H.tagName==="SCRIPT"?H.remove():H.removeAttribute("tabindex")});const F=window.location.origin;return B.querySelectorAll("a[href]").forEach(H=>{const E=H.getAttribute("href");E!=null&&E.startsWith("/")&&H.setAttribute("href",`${F}${E}`)}),B.querySelectorAll("img[src]").forEach(H=>{const E=H.getAttribute("src");E!=null&&E.startsWith("/")&&H.setAttribute("src",`${F}${E}`)}),B.innerHTML}catch{return null}}function p(S,g,P){return`
<header class="pr-page-header">
  <div class="pr-hdr-left">
    ${g?`<img class="pr-hdr-logo" src="${g}" alt="Desbravador" /><div class="pr-hdr-sep"></div>`:""}
    <span class="pr-hdr-title">${S.name}</span>
    <span class="pr-hdr-period">Documentação Técnica</span>
  </div>
  <div class="pr-hdr-right">Desbravador Software Ltda.<br>${P}</div>
</header>`}function m(){return`
<footer class="pr-page-footer">
  <span class="pr-ftr-company">Desbravador Software Ltda.</span>
  <span class="pr-ftr-confidential">Uso Técnico</span>
  <span class="pr-ftr-page"></span>
</footer>`}function _(S,g,P){return`
<div class="pr-cover">
  <div class="pr-cover-top">
    <div class="pr-cover-logo-wrap">${g?`<img class="pr-cover-logo" src="${g}" alt="Desbravador" />`:'<span class="pr-cover-logo-name">Desbravador</span>'}</div>
  </div>
  <div class="pr-cover-body">
    <div class="pr-cover-label">Documentação Técnica</div>
    <h1 class="pr-cover-title">${S.name}</h1>
    <p class="pr-cover-subtitle">Requisitos de hardware, software e configuração.<br>
    Inclui periféricos homologados como anexo.</p>
    <div class="pr-cover-accent-bar"></div>
    <div class="pr-cover-meta">
      <div class="pr-cover-meta-item">
        <span class="pr-cover-meta-label">Modalidades</span>
        <span class="pr-cover-meta-value">${S.docPages.map(N=>N.label).join(" · ")}</span>
      </div>
      <div class="pr-cover-meta-item">
        <span class="pr-cover-meta-label">Data de Geração</span>
        <span class="pr-cover-meta-value">${P}</span>
      </div>
      <div class="pr-cover-meta-item">
        <span class="pr-cover-meta-label">Empresa</span>
        <span class="pr-cover-meta-value">Desbravador Software Ltda.</span>
      </div>
    </div>
    <div class="pr-cover-notes">
      Este documento é gerado automaticamente a partir da documentação técnica oficial.
      Para a versão mais atualizada, acesse docs.desbravador.com.br.
    </div>
  </div>
</div>`}function V(){return`
<div class="pr-section pr-page-break appendix-divider-wrap">
  <div class="appendix-divider-box">
    <p class="pr-section-eyebrow">Anexo</p>
    <h2 class="pr-section-title" style="font-size:20pt;margin:0 0 3mm;">Periféricos Homologados</h2>
    <p style="font-size:9pt;color:#6b7280;margin:0;">
      Relação de periféricos homologados para uso com os sistemas Desbravador.
    </p>
  </div>
</div>`}function h(S,g,P,I=!1){return`
<div class="pr-section doc-section ${P?"":"pr-page-break"} ${I?"pr-avoid-break":""}">
  ${S?`<div class="pr-section-hdr"><span class="pr-section-eyebrow">Documentação</span><h2 class="pr-section-title">${S}</h2></div>`:""}
  <div class="pr-section-body doc-content">${g}</div>
</div>`}async function k(S){try{const g=await fetch(S);if(!g.ok)return null;const P=await g.blob();return new Promise(I=>{const N=new FileReader;N.onloadend=()=>I(N.result),N.onerror=()=>I(null),N.readAsDataURL(P)})}catch{return null}}async function T(S){n.value=S.name;try{const[g,P]=await Promise.all([Promise.all(S.docPages.map(O=>d(O.path))),Promise.all(o.map(O=>d(O.path)))]),I=(()=>{var xe;const O=(xe=t.value.themeConfig)==null?void 0:xe.logo;if(!O)return null;const X=(t.value.base||"/").replace(/\/$/,"");return typeof O=="string"?`${window.location.origin}${X}${O}`:null})(),N=I?await k(I)??I:null,B=new Date().toLocaleDateString("pt-BR",{day:"2-digit",month:"long",year:"numeric"}),F=new Date().toLocaleString("pt-BR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"});let H="",E=!0;g.forEach((O,X)=>{O&&(H+=h(S.docPages[X].label,O,E),E=!1)}),P.some(Boolean)&&(H+=V(),P.forEach((O,X)=>{O&&(H+=h(o[X].label,O,!1,!0))}));const de=window.open("","_blank","width=960,height=720");if(!de){alert("Permita pop-ups neste site para gerar o PDF.");return}const Oe=Fe("portrait","A4")+Jr,Re=p(S,N,F),qe=m(),Ue=_(S,N,B);de.document.write(`<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>${S.name} — Documentação Técnica Desbravador</title>
  <style>${Oe}</style>
</head>
<body>
  ${Ue}
  <table class="pr-layout-table">
    <thead><tr><th class="pr-layout-hdr">${Re}</th></tr></thead>
    <tfoot><tr><td class="pr-layout-ftr">${qe}</td></tr></tfoot>
    <tbody><tr><td class="pr-layout-body">
      <div class="pr-body">${H}</div>
    </td></tr></tbody>
  </table>
  <script>
    window.addEventListener('load', function () {
      setTimeout(function () { window.print() }, 600)
    })
  <\/script>
</body>
</html>`),de.document.close()}finally{n.value=null}}return(S,g)=>(r(),l("div",Fr,[s("table",Or,[g[0]||(g[0]=s("thead",null,[s("tr",null,[s("th",null,"Sistema"),s("th",{style:{"text-align":"center"}},"Instalação Local"),s("th",{style:{"text-align":"center"}},"Instalação Cloud"),s("th",{style:{"text-align":"center"}},"PDF")])],-1)),s("tbody",null,[(r(),l(A,null,z(a,P=>s("tr",{key:P.name},[s("td",null,[s("a",{href:c(ae)(P.primaryLink)},$(P.name),9,Rr)]),s("td",qr,$(P.hasLocal?"✅":"—"),1),s("td",Ur,$(P.hasCloud?"✅":"—"),1),s("td",jr,[s("button",{class:"pdf-btn",disabled:n.value===P.name,title:`Gerar PDF de ${P.name}`,onClick:I=>T(P)},[n.value===P.name?(r(),l("span",Wr,"⏳")):(r(),l("span",Kr,"🖨️ PDF"))],8,Gr)])])),64))])])]))}}),Xr=y(Yr,[["__scopeId","data-v-5f1fe038"]]),Qr={class:"pl-root"},Zr={key:0,class:"pl-controls no-print","aria-hidden":"true"},es={class:"pl-page-header"},ts={class:"pl-header-inner"},as={class:"pl-header-left"},os=["src","alt"],ns={key:1,class:"pl-header-logo-text"},rs={class:"pl-header-right"},ss={class:"pl-body"},is={class:"pl-title-block"},ls={class:"pl-title"},cs={key:0,class:"pl-subtitle"},ds={key:1,class:"pl-meta"},us={class:"pl-content"},ps={class:"pl-page-footer"},ms={class:"pl-footer-inner"},vs={class:"pl-footer-app"},fs={class:"pl-footer-date"},hs=b({__name:"PrintLayout",props:{title:{},subtitle:{},logo:{},printedBy:{},footerText:{},orientation:{default:"portrait"},paperSize:{default:"A4"},filters:{default:()=>[]},showDateTime:{type:Boolean,default:!0},appName:{default:"Desbravador Docs"},showPrintButton:{type:Boolean,default:!0}},setup(e){const t=e,{site:a}=te(),n=new Date().toLocaleString("pt-BR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"}),i=x(()=>{var T;if(t.logo)return t.logo;const h=(T=a.value.themeConfig)==null?void 0:T.logo;if(!h)return null;const k=(a.value.base||"/").replace(/\/$/,"");return typeof h=="string"?`${k}${h}`:null}),d=x(()=>t.footerText||t.appName),p=x(()=>{var h;return t.showDateTime||!!t.printedBy||(((h=t.filters)==null?void 0:h.length)??0)>0});function m(h,k){return`
/* PrintLayout — estilos globais de impressão */

@page {
  size: ${k} ${h};
  margin: 20mm 22mm 24mm 22mm;
}

/* Página inicial: margem superior menor (cabeçalho cobre) */
@page :first {
  margin-top: 20mm;
}

/* Numeração de página no rodapé (Chromium) */
@page {
  @bottom-center {
    content: "Página " counter(page) " de " counter(pages);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    font-size: 8pt;
    color: #6b7280;
  }
}

@media print {
  /* ── Ocultar chrome do VitePress ── */
  .VPNav,
  .VPLocalNav,
  .VPSidebar,
  .VPDocAside,
  .VPDocFooter,
  .VPFooter,
  .VPBadge,
  .no-print,
  .pl-controls {
    display: none !important;
  }

  /* ── Expandir área de conteúdo ── */
  html, body { background: #fff !important; }

  .VPContent,
  .VPDoc,
  .VPDoc > .container,
  .VPDoc .content,
  .VPDoc .content-container {
    max-width: 100% !important;
    padding: 0 !important;
    margin: 0 !important;
    width: 100% !important;
  }

  /* ── Cabeçalho fixo em todas as páginas ── */
  .pl-page-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9999;
    background: #fff;
    padding: 8mm 22mm 3mm;
    box-sizing: border-box;
  }

  /* ── Rodapé fixo em todas as páginas ── */
  .pl-page-footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 9999;
    background: #fff;
    padding: 3mm 22mm 6mm;
    box-sizing: border-box;
  }

  /* ── Espaçamento do corpo para não sobrepor header/footer ── */
  .pl-body {
    margin-top: 28mm !important;
    margin-bottom: 20mm !important;
  }

  /* ── Tipografia base ── */
  .pl-document {
    font-size: 12px !important;
    line-height: 1.6 !important;
    color: #111827 !important;
  }

  /* ── Preservar cores de fundo em tabelas ── */
  * {
    print-color-adjust: exact;
    -webkit-print-color-adjust: exact;
  }

  /* ── Tabelas ── */
  table { break-inside: auto; }
  thead { display: table-header-group; } /* repete cabeçalho em cada página */
  tfoot { display: table-footer-group; }
  tr    { break-inside: avoid; page-break-inside: avoid; }

  /* ── Não quebrar cards e blocos importantes ── */
  .print-card,
  .pl-title-block,
  blockquote,
  pre,
  figure,
  .custom-block {
    break-inside: avoid;
    page-break-inside: avoid;
  }

  /* ── Headings nunca ficam órfãos ── */
  h1, h2, h3, h4, h5, h6 {
    break-after: avoid;
    page-break-after: avoid;
  }

  /* ── Forçar quebra de página ── */
  .print-page-break {
    break-before: page;
    page-break-before: always;
  }
}
`}let _=null;G(()=>{_=document.createElement("style"),_.id="pl-global-print-styles",_.textContent=m(t.orientation,t.paperSize),document.head.appendChild(_)}),ne(()=>{_==null||_.remove(),_=null});function V(){window.print()}return(h,k)=>(r(),l("div",Qr,[e.showPrintButton?(r(),l("div",Zr,[u(h.$slots,"controls",{},()=>[s("button",{class:"pl-print-btn",onClick:V},[...k[0]||(k[0]=[s("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[s("polyline",{points:"6 9 6 2 18 2 18 9"}),s("path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"}),s("rect",{x:"6",y:"14",width:"12",height:"8"})],-1),U(" Imprimir / Salvar PDF ",-1)])])],!0)])):f("",!0),s("div",{class:M(["pl-document",[`pl-paper-${e.paperSize.toLowerCase()}`,`pl-orient-${e.orientation}`]])},[s("header",es,[u(h.$slots,"header",{},()=>[s("div",ts,[s("div",as,[i.value?(r(),l("img",{key:0,src:i.value,class:"pl-header-logo",alt:e.appName},null,8,os)):(r(),l("span",ns,$(e.appName),1))]),s("div",rs,$(e.appName),1)]),k[1]||(k[1]=s("div",{class:"pl-header-rule"},null,-1))],!0)]),s("div",ss,[s("div",is,[s("h1",ls,$(e.title),1),e.subtitle?(r(),l("p",cs,$(e.subtitle),1)):f("",!0),p.value?(r(),l("dl",ds,[e.showDateTime?(r(),l(A,{key:0},[k[2]||(k[2]=s("dt",null,"Data:",-1)),s("dd",null,$(c(n)),1)],64)):f("",!0),e.printedBy?(r(),l(A,{key:1},[k[3]||(k[3]=s("dt",null,"Usuário:",-1)),s("dd",null,$(e.printedBy),1)],64)):f("",!0),(r(!0),l(A,null,z(e.filters,T=>(r(),l(A,{key:T.label},[s("dt",null,$(T.label)+":",1),s("dd",null,$(T.value),1)],64))),128)),u(h.$slots,"meta",{},void 0,!0)])):f("",!0)]),k[4]||(k[4]=s("hr",{class:"pl-divider"},null,-1)),s("main",us,[u(h.$slots,"default",{},void 0,!0)])]),s("footer",ps,[u(h.$slots,"footer",{},()=>[s("div",ms,[s("span",vs,$(d.value),1),k[5]||(k[5]=s("span",{class:"pl-footer-page"},null,-1)),s("span",fs,"Gerado em "+$(c(n)),1)]),k[6]||(k[6]=s("div",{class:"pl-footer-rule"},null,-1))],!0)])],2)]))}}),bs=y(hs,[["__scopeId","data-v-7ee5de0b"]]),gs={class:"pr-root"},ks={class:"pr-controls no-print"},ys=["disabled"],$s={key:0,width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.2","stroke-linecap":"round","stroke-linejoin":"round"},_s={key:1,class:"pr-spinner"},Ps=b({__name:"PrintReport",props:{title:{},subtitle:{},reportLabel:{},logo:{},company:{},printedBy:{},period:{},footerText:{},confidential:{},showCover:{type:Boolean,default:!1},coverNotes:{},orientation:{default:"portrait"},paperSize:{default:"A4"},appName:{default:"Desbravador Docs"}},setup(e){const t=e,{site:a}=te(),o=D(null),n=D(!1),i=new Date,d=i.toLocaleString("pt-BR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"}),p=i.toLocaleDateString("pt-BR",{day:"2-digit",month:"long",year:"numeric"});function m(){var I;if(t.logo)return t.logo;const g=(I=a.value.themeConfig)==null?void 0:I.logo;if(!g)return null;const P=(a.value.base||"/").replace(/\/$/,"");return typeof g=="string"?`${window.location.origin}${P}${g}`:null}function _(g){const P=g.cloneNode(!0);g.querySelectorAll("canvas").forEach((N,B)=>{var H;const F=P.querySelectorAll("canvas")[B];if(F)try{const E=document.createElement("img");E.src=N.toDataURL("image/png",1),E.style.maxWidth="100%",E.style.height="auto",(H=F.parentNode)==null||H.replaceChild(E,F)}catch{}}),(a.value.base||"/").replace(/\/$/,""),P.querySelectorAll("img[src]").forEach(N=>{const B=N.getAttribute("src");B&&B.startsWith("/")&&N.setAttribute("src",`${window.location.origin}${B}`)});const I=["button","input","select","textarea",".no-print","[data-no-print]",".VPBadge",".header-anchor"];return P.querySelectorAll(I.join(",")).forEach(N=>N.remove()),P.querySelectorAll("*").forEach(N=>{Array.from(N.attributes).forEach(B=>{B.name.startsWith("data-v-")&&N.removeAttribute(B.name)})}),P}function V(g){if(!t.showCover)return"";const P=g?`<img class="pr-cover-logo" src="${g}" alt="${t.company??t.appName}" />`:`<span class="pr-cover-logo-name">${t.company??t.appName??""}</span>`,I=[t.period?`<div class="pr-cover-meta-item"><span class="pr-cover-meta-label">Período</span><span class="pr-cover-meta-value">${t.period}</span></div>`:"",t.printedBy?`<div class="pr-cover-meta-item"><span class="pr-cover-meta-label">Responsável</span><span class="pr-cover-meta-value">${t.printedBy}</span></div>`:"",`<div class="pr-cover-meta-item"><span class="pr-cover-meta-label">Data de Geração</span><span class="pr-cover-meta-value">${p}</span></div>`,t.company?`<div class="pr-cover-meta-item"><span class="pr-cover-meta-label">Empresa</span><span class="pr-cover-meta-value">${t.company}</span></div>`:""].filter(Boolean).join(""),N=t.coverNotes?`<div class="pr-cover-notes">${t.coverNotes}</div>`:"";return`
<div class="pr-cover">
  <div class="pr-cover-top">
    <div class="pr-cover-logo-wrap">${P}</div>
  </div>
  <div class="pr-cover-body">
    <div class="pr-cover-label">${t.reportLabel??"Relatório"}</div>
    <h1 class="pr-cover-title">${t.title}</h1>
    ${t.subtitle?`<p class="pr-cover-subtitle">${t.subtitle}</p>`:""}
    <div class="pr-cover-accent-bar"></div>
    <div class="pr-cover-meta">${I}</div>
    ${N}
  </div>
</div>`}function h(g){const P=g?`<img class="pr-hdr-logo" src="${g}" alt="" /><div class="pr-hdr-sep"></div>`:"",I=t.period?`<span class="pr-hdr-period">| ${t.period}</span>`:"";return`
<header class="pr-page-header">
  <div class="pr-hdr-left">
    ${P}
    <span class="pr-hdr-title">${t.title}</span>
    ${I}
  </div>
  <div class="pr-hdr-right">
    ${t.appName??""}<br>${d}
  </div>
</header>`}function k(){return`
<footer class="pr-page-footer">
  <span class="pr-ftr-company">${t.footerText??t.company??t.appName??""}</span>
  <span class="pr-ftr-confidential">${t.confidential??""}</span>
  <span class="pr-ftr-page"></span>
</footer>`}async function T(g){try{const P=await fetch(g);if(!P.ok)return null;const I=await P.blob();return new Promise(N=>{const B=new FileReader;B.onloadend=()=>N(B.result),B.onerror=()=>N(null),B.readAsDataURL(I)})}catch{return null}}async function S(){if(!(!o.value||n.value)){n.value=!0,await new Promise(g=>setTimeout(g,50));try{const g=m(),P=g?await T(g)??g:null,I=_(o.value),N=V(P),B=h(P),F=k(),H=Fe(t.orientation,t.paperSize),E=window.open("","_blank","width=960,height=720");if(!E){alert("Permita pop-ups neste site para gerar o PDF.");return}E.document.write(`<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>${t.title} — ${t.appName??"Relatório"}</title>
  <style>${H}</style>
</head>
<body>
  ${N}
  <table class="pr-layout-table">
    <thead><tr><th class="pr-layout-hdr">${B}</th></tr></thead>
    <tfoot><tr><td class="pr-layout-ftr">${F}</td></tr></tfoot>
    <tbody><tr><td class="pr-layout-body">
      <div class="pr-body">${I.innerHTML}</div>
    </td></tr></tbody>
  </table>
  <script>
    window.addEventListener('load', function () {
      setTimeout(function () { window.print() }, 600)
    })
  <\/script>
</body>
</html>`),E.document.close()}finally{n.value=!1}}}return(g,P)=>(r(),l("div",gs,[s("div",ks,[u(g.$slots,"controls",{},()=>[s("button",{class:"pr-btn-print",onClick:S,disabled:n.value},[n.value?f("",!0):(r(),l("svg",$s,[...P[0]||(P[0]=[s("polyline",{points:"6 9 6 2 18 2 18 9"},null,-1),s("path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"},null,-1),s("rect",{x:"6",y:"14",width:"12",height:"8"},null,-1)])])),n.value?(r(),l("span",_s)):f("",!0),U(" "+$(n.value?"Preparando...":"Imprimir / Salvar PDF"),1)],8,ys)],!0)]),s("div",{ref_key:"contentRef",ref:o,class:"pr-screen-content"},[u(g.$slots,"default",{},void 0,!0)],512)]))}}),ws=y(Ps,[["__scopeId","data-v-9babd79a"]]),Ls={key:0,class:"pr-section-hdr"},xs={key:0,class:"pr-section-eyebrow"},Ss={class:"pr-section-title"},Vs={key:1,class:"pr-section-desc"},Ts={class:"pr-section-body"},Cs=b({__name:"PrintSection",props:{title:{},eyebrow:{},description:{},pageBreak:{type:Boolean}},setup(e){return(t,a)=>(r(),l("div",{class:M(["pr-section",{"pr-page-break":e.pageBreak}])},[e.title?(r(),l("div",Ls,[e.eyebrow?(r(),l("span",xs,$(e.eyebrow),1)):f("",!0),s("h2",Ss,$(e.title),1)])):f("",!0),e.description?(r(),l("p",Vs,$(e.description),1)):f("",!0),s("div",Ts,[u(t.$slots,"default",{},void 0,!0)])],2))}}),Is=y(Cs,[["__scopeId","data-v-3c1ebe34"]]),Ns=["data-cols"],Ms=b({__name:"PrintKPIGrid",props:{cols:{default:4}},setup(e){return(t,a)=>(r(),l("div",{class:"pr-kpi-grid","data-cols":e.cols},[u(t.$slots,"default",{},void 0,!0)],8,Ns))}}),As=y(Ms,[["__scopeId","data-v-0e7da588"]]),Ds=["data-trend"],Bs={class:"pr-kpi-label"},Hs={class:"pr-kpi-value"},Es=["data-dir"],zs={key:1,class:"pr-kpi-note"},Fs=b({__name:"PrintKPICard",props:{label:{},value:{},change:{},changeDir:{},note:{},trend:{}},setup(e){return(t,a)=>(r(),l("div",{class:"pr-kpi-card","data-trend":e.trend},[s("div",Bs,$(e.label),1),s("div",Hs,$(e.value),1),e.change?(r(),l("div",{key:0,class:"pr-kpi-change","data-dir":e.changeDir},$(e.changeDir==="up"?"▲":e.changeDir==="down"?"▼":"")+" "+$(e.change),9,Es)):f("",!0),e.note?(r(),l("div",zs,$(e.note),1)):f("",!0)],8,Ds))}}),Os=y(Fs,[["__scopeId","data-v-e4f81f35"]]),Rs={key:0,class:"pr-table-title"},qs={class:"pr-table"},Us={key:0},js=["colspan"],Gs=b({__name:"PrintDataTable",props:{title:{},columns:{},rows:{},compact:{type:Boolean,default:!1}},setup(e){function t(o){const n=o.align??(o.type==="currency"||o.type==="number"?"right":o.type==="date"?"center":"left");return n==="right"?"th-right":n==="center"?"th-center":""}function a(o,n){const i=[],d=o.align??(o.type==="currency"||o.type==="number"?"right":o.type==="date"?"center":"left");return d==="right"&&i.push("td-right"),d==="center"&&i.push("td-center"),(o.bold||n._total)&&i.push("td-bold"),o.muted&&i.push("td-muted"),o.type==="mono"&&i.push("td-mono"),i.join(" ")}return(o,n)=>(r(),l("div",{class:M(["pr-table-wrap",{"pr-table-compact":e.compact}])},[e.title?(r(),l("div",Rs,$(e.title),1)):f("",!0),s("table",qs,[s("thead",null,[s("tr",null,[(r(!0),l(A,null,z(e.columns,i=>(r(),l("th",{key:i.key,class:M(t(i)),style:ke(i.width?`width:${i.width}`:"")},$(i.label),7))),128))])]),s("tbody",null,[(r(!0),l(A,null,z(e.rows,(i,d)=>(r(),l("tr",{key:d,class:M({"tr-total":i._total,"tr-subtotal":i._subtotal})},[(r(!0),l(A,null,z(e.columns,p=>(r(),l("td",{key:p.key,class:M(a(p,i))},[u(o.$slots,`cell-${p.key}`,{value:i[p.key],row:i},()=>[U($(i[p.key]??"—"),1)],!0)],2))),128))],2))),128)),e.rows.length===0?(r(),l("tr",Us,[s("td",{colspan:e.columns.length,class:"td-center td-muted"}," Nenhum registro encontrado. ",8,js)])):f("",!0)])])],2))}}),Ws=y(Gs,[["__scopeId","data-v-885cefbd"]]),Ks={class:"pr-chart-block"},Js={class:"pr-chart-hdr"},Ys={class:"pr-chart-title"},Xs={key:0,class:"pr-chart-desc"},Qs={class:"pr-chart-canvas",ref:"canvasWrap"},Zs={key:0,class:"pr-chart-footer"},ei=b({__name:"PrintChartBlock",props:{title:{},description:{}},setup(e){return(t,a)=>(r(),l("div",Ks,[s("div",Js,[s("div",null,[s("div",Ys,$(e.title),1),e.description?(r(),l("div",Xs,$(e.description),1)):f("",!0)])]),s("div",Qs,[u(t.$slots,"default",{},void 0,!0)],512),t.$slots.footer?(r(),l("div",Zs,[u(t.$slots,"footer",{},void 0,!0)])):f("",!0)]))}}),ti=y(ei,[["__scopeId","data-v-adcb00ad"]]),ai={key:0,class:"pr-info-title"},oi={class:"pr-info-body"},ni=b({__name:"PrintInfoBlock",props:{title:{},variant:{default:"default"}},setup(e){return(t,a)=>(r(),l("div",{class:M(["pr-info-block",`pr-info-${e.variant}`])},[e.title?(r(),l("div",ai,$(e.title),1)):f("",!0),s("div",oi,[u(t.$slots,"default",{},void 0,!0)])],2))}}),ri=y(ni,[["__scopeId","data-v-b200e9ee"]]),si={class:"pr-summary"},ii={class:"pr-summary-label"},li={class:"pr-summary-body"},ci=b({__name:"PrintSummary",props:{label:{}},setup(e){return(t,a)=>(r(),l("div",si,[s("div",ii,$(e.label??"Resumo Executivo"),1),s("div",li,[u(t.$slots,"default",{},void 0,!0)])]))}}),di=y(ci,[["__scopeId","data-v-fe604797"]]),ui={class:"pr-signature-block"},pi={key:0,class:"pr-signature-place-date"},mi=["data-cols"],vi={class:"pr-signature-name"},fi={key:0,class:"pr-signature-role"},hi=b({__name:"PrintSignatureBlock",props:{signatures:{},placeDate:{}},setup(e){return(t,a)=>(r(),l("div",ui,[e.placeDate?(r(),l("p",pi,$(e.placeDate),1)):f("",!0),s("div",{class:"pr-signature-grid","data-cols":e.signatures.length<=2?e.signatures.length:3},[(r(!0),l(A,null,z(e.signatures,o=>(r(),l("div",{key:o.name,class:"pr-signature-item"},[a[0]||(a[0]=s("div",{class:"pr-signature-line"},null,-1)),s("div",vi,$(o.name),1),o.role?(r(),l("div",fi,$(o.role),1)):f("",!0)]))),128))],8,mi)]))}}),bi=y(hi,[["__scopeId","data-v-df1318a4"]]),yi={extends:zr,enhanceApp({app:e}){e.component("HomeTable",Xr),e.component("PrintLayout",bs),e.component("PrintReport",ws),e.component("PrintSection",Is),e.component("PrintKPIGrid",As),e.component("PrintKPICard",Os),e.component("PrintDataTable",Ws),e.component("PrintChartBlock",ti),e.component("PrintInfoBlock",ri),e.component("PrintSummary",di),e.component("PrintSignatureBlock",bi)}};export{yi as R,$n as c,C as u};
