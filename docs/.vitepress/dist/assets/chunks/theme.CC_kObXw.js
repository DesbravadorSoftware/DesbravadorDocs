const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/VPLocalSearchBox.D-6g5hkc.js","assets/chunks/framework.CPTW7DhK.js"])))=>i.map(i=>d[i]);
import{r as k,j as c,Z as d,H as I,Q as s,n as G,a4 as S,h as $,ax as m,b as ve,i as p,c as y,ae as fe,z as He,a8 as Be,aw as Y,d as L,g as i,aa as r,y as U,ah as ie,X as T,as as E,au as X,N as F,O as Q,av as me,P as De,t as Ee,F as N,Y as H,$ as j,L as Z,o as _,a1 as ye,a0 as B,E as Pe,aj as ee,D as q,x as te,aq as Fe,I as Le,M as le,G as Ve,ap as Se,v as oe,W as Oe,q as ze,_ as qe,al as we,V as xe,a5 as Ge,az as Ue,K as je,aA as We,an as Re}from"./framework.CPTW7DhK.js";const Ke=k({__name:"VPBadge",props:{text:{},type:{default:"tip"}},setup(e){return(t,o)=>(s(),c("span",{class:I(["VPBadge",e.type])},[d(t.$slots,"default",{},()=>[G(S(e.text),1)])],2))}}),Je={key:0,class:"VPBackdrop"},Ye=k({__name:"VPBackdrop",props:{show:{type:Boolean}},setup(e){return(t,o)=>(s(),$(ve,{name:"fade"},{default:m(()=>[e.show?(s(),c("div",Je)):p("",!0)]),_:1}))}}),Xe=y(Ye,[["__scopeId","data-v-c79a1216"]]),w=fe;function Qe(e,t){let o,a=!1;return()=>{o&&clearTimeout(o),a?o=setTimeout(e,t):(e(),(a=!0)&&setTimeout(()=>a=!1,t))}}function ce(e){return e.startsWith("/")?e:`/${e}`}function he(e){const{pathname:t,search:o,hash:a,protocol:n}=new URL(e,"http://a.com");if(He(e)||e.startsWith("#")||!n.startsWith("http")||!Be(t))return e;const{site:l}=w(),u=t.endsWith("/")||t.endsWith(".html")?e:e.replace(/(?:(^\.+)\/)?.*$/,`$1${t.replace(/(\.md)?$/,l.value.cleanUrls?"":".html")}${o}${a}`);return Y(u)}function R({correspondingLink:e=!1}={}){const{site:t,localeIndex:o,page:a,theme:n,hash:l}=w(),u=L(()=>{var v,b;return{label:(v=t.value.locales[o.value])==null?void 0:v.label,link:((b=t.value.locales[o.value])==null?void 0:b.link)||(o.value==="root"?"/":`/${o.value}/`)}});return{localeLinks:L(()=>Object.entries(t.value.locales).flatMap(([v,b])=>u.value.label===b.label?[]:{text:b.label,link:Ze(b.link||(v==="root"?"/":`/${v}/`),n.value.i18nRouting!==!1&&e,a.value.relativePath.slice(u.value.link.length-1),!t.value.cleanUrls)+l.value})),currentLang:u}}function Ze(e,t,o,a){return t?e.replace(/\/$/,"")+ce(o.replace(/(^|\/)index\.md$/,"$1").replace(/\.md$/,a?".html":"")):e}const et={class:"NotFound"},tt={class:"code"},ot={class:"title"},at={class:"quote"},nt={class:"action"},st=["href","aria-label"],rt=k({__name:"NotFound",setup(e){const{theme:t}=w(),{currentLang:o}=R();return(a,n)=>{var l,u,f,v,b;return s(),c("div",et,[i("p",tt,S(((l=r(t).notFound)==null?void 0:l.code)??"404"),1),i("h1",ot,S(((u=r(t).notFound)==null?void 0:u.title)??"PAGE NOT FOUND"),1),n[0]||(n[0]=i("div",{class:"divider"},null,-1)),i("blockquote",at,S(((f=r(t).notFound)==null?void 0:f.quote)??"But if you don't change your direction, and if you keep looking, you may end up where you are heading."),1),i("div",nt,[i("a",{class:"link",href:r(Y)(r(o).link),"aria-label":((v=r(t).notFound)==null?void 0:v.linkLabel)??"go to home"},S(((b=r(t).notFound)==null?void 0:b.linkText)??"Take me home"),9,st)])])}}}),it=y(rt,[["__scopeId","data-v-d6be1790"]]);function Te(e,t){if(Array.isArray(e))return K(e);if(e==null)return[];t=ce(t);const o=Object.keys(e).sort((n,l)=>l.split("/").length-n.split("/").length).find(n=>t.startsWith(ce(n))),a=o?e[o]:[];return Array.isArray(a)?K(a):K(a.items,a.base)}function lt(e){const t=[];let o=0;for(const a in e){const n=e[a];if(n.items){o=t.push(n);continue}t[o]||t.push({items:[]}),t[o].items.push(n)}return t}function ct(e){const t=[];function o(a){for(const n of a)n.text&&n.link&&t.push({text:n.text,link:n.link,docFooterText:n.docFooterText}),n.items&&o(n.items)}return o(e),t}function ue(e,t){return Array.isArray(t)?t.some(o=>ue(e,o)):U(e,t.link)?!0:t.items?ue(e,t.items):!1}function K(e,t){return[...e].map(o=>{const a={...o},n=a.base||t;return n&&a.link&&(a.link=n+a.link),a.items&&(a.items=K(a.items,n)),a})}function O(){const{frontmatter:e,page:t,theme:o}=w(),a=ie("(min-width: 960px)"),n=T(!1),l=L(()=>{const C=o.value.sidebar,x=t.value.relativePath;return C?Te(C,x):[]}),u=T(l.value);E(l,(C,x)=>{JSON.stringify(C)!==JSON.stringify(x)&&(u.value=l.value)});const f=L(()=>e.value.sidebar!==!1&&u.value.length>0&&e.value.layout!=="home"),v=L(()=>b?e.value.aside==null?o.value.aside==="left":e.value.aside==="left":!1),b=L(()=>e.value.layout==="home"?!1:e.value.aside!=null?!!e.value.aside:o.value.aside!==!1),P=L(()=>f.value&&a.value),h=L(()=>f.value?lt(u.value):[]);function g(){n.value=!0}function V(){n.value=!1}function M(){n.value?V():g()}return{isOpen:n,sidebar:u,sidebarGroups:h,hasSidebar:f,hasAside:b,leftAside:v,isSidebarEnabled:P,open:g,close:V,toggle:M}}function ut(e,t){let o;X(()=>{o=e.value?document.activeElement:void 0}),F(()=>{window.addEventListener("keyup",a)}),Q(()=>{window.removeEventListener("keyup",a)});function a(n){n.key==="Escape"&&e.value&&(t(),o==null||o.focus())}}function dt(e){const{page:t,hash:o}=w(),a=T(!1),n=L(()=>e.value.collapsed!=null),l=L(()=>!!e.value.link),u=T(!1),f=()=>{u.value=U(t.value.relativePath,e.value.link)};E([t,e,o],f),F(f);const v=L(()=>u.value?!0:e.value.items?ue(t.value.relativePath,e.value.items):!1),b=L(()=>!!(e.value.items&&e.value.items.length));X(()=>{a.value=!!(n.value&&e.value.collapsed)}),me(()=>{(u.value||v.value)&&(a.value=!1)});function P(){n.value&&(a.value=!a.value)}return{collapsed:a,collapsible:n,isLink:l,isActiveLink:u,hasActiveLink:v,hasChildren:b,toggle:P}}function vt(){const{hasSidebar:e}=O(),t=ie("(min-width: 960px)"),o=ie("(min-width: 1280px)");return{isAsideEnabled:L(()=>!o.value&&!t.value?!1:e.value?o.value:t.value)}}const ft=/\b(?:VPBadge|header-anchor|footnote-ref|ignore-header)\b/,de=[];function Ne(e){return typeof e.outline=="object"&&!Array.isArray(e.outline)&&e.outline.label||e.outlineTitle||"On this page"}function pe(e){const t=[...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")].filter(o=>o.id&&o.hasChildNodes()).map(o=>{const a=Number(o.tagName[1]);return{element:o,title:mt(o),link:"#"+o.id,level:a}});return ht(t,e)}function mt(e){let t="";for(const o of e.childNodes)if(o.nodeType===1){if(ft.test(o.className))continue;t+=o.textContent}else o.nodeType===3&&(t+=o.textContent);return t.trim()}function ht(e,t){if(t===!1)return[];const o=(typeof t=="object"&&!Array.isArray(t)?t.level:t)||2,[a,n]=typeof o=="number"?[o,o]:o==="deep"?[2,6]:o;return gt(e,a,n)}function pt(e,t){const{isAsideEnabled:o}=vt(),a=Qe(l,100);let n=null;F(()=>{requestAnimationFrame(l),window.addEventListener("scroll",a)}),De(()=>{u(location.hash)}),Q(()=>{window.removeEventListener("scroll",a)});function l(){if(!o.value)return;const f=window.scrollY,v=window.innerHeight,b=document.body.offsetHeight,P=Math.abs(f+v-b)<1,h=de.map(({element:V,link:M})=>({link:M,top:bt(V)})).filter(({top:V})=>!Number.isNaN(V)).sort((V,M)=>V.top-M.top);if(!h.length){u(null);return}if(f<1){u(null);return}if(P){u(h[h.length-1].link);return}let g=null;for(const{link:V,top:M}of h){if(M>f+Ee()+4)break;g=V}u(g)}function u(f){n&&n.classList.remove("active"),f==null?n=null:n=e.value.querySelector(`a[href="${decodeURIComponent(f)}"]`);const v=n;v?(v.classList.add("active"),t.value.style.top=v.offsetTop+39+"px",t.value.style.opacity="1"):(t.value.style.top="33px",t.value.style.opacity="0")}}function bt(e){let t=0;for(;e!==document.body;){if(e===null)return NaN;t+=e.offsetTop,e=e.offsetParent}return t}function gt(e,t,o){de.length=0;const a=[],n=[];return e.forEach(l=>{const u={...l,children:[]};let f=n[n.length-1];for(;f&&f.level>=u.level;)n.pop(),f=n[n.length-1];if(u.element.classList.contains("ignore-header")||f&&"shouldIgnore"in f){n.push({level:u.level,shouldIgnore:!0});return}u.level>o||u.level<t||(de.push({element:u.element,link:u.link}),f?f.children.push(u):a.push(u),n.push(u))}),a}const kt=["href","title"],_t=k({__name:"VPDocOutlineItem",props:{headers:{},root:{type:Boolean}},setup(e){function t({target:o}){const a=o.href.split("#")[1],n=document.getElementById(decodeURIComponent(a));n==null||n.focus({preventScroll:!0})}return(o,a)=>{const n=j("VPDocOutlineItem",!0);return s(),c("ul",{class:I(["VPDocOutlineItem",e.root?"root":"nested"])},[(s(!0),c(N,null,H(e.headers,({children:l,link:u,title:f})=>(s(),c("li",null,[i("a",{class:"outline-link",href:u,onClick:t,title:f},S(f),9,kt),l!=null&&l.length?(s(),$(n,{key:0,headers:l},null,8,["headers"])):p("",!0)]))),256))],2)}}}),Me=y(_t,[["__scopeId","data-v-b933a997"]]),$t={class:"content"},yt={"aria-level":"2",class:"outline-title",id:"doc-outline-aria-label",role:"heading"},Pt=k({__name:"VPDocAsideOutline",setup(e){const{frontmatter:t,theme:o}=w(),a=ye([]);Z(()=>{a.value=pe(t.value.outline??o.value.outline)});const n=T(),l=T();return pt(n,l),(u,f)=>(s(),c("nav",{"aria-labelledby":"doc-outline-aria-label",class:I(["VPDocAsideOutline",{"has-outline":a.value.length>0}]),ref_key:"container",ref:n},[i("div",$t,[i("div",{class:"outline-marker",ref_key:"marker",ref:l},null,512),i("div",yt,S(r(Ne)(r(o))),1),_(Me,{headers:a.value,root:!0},null,8,["headers"])])],2))}}),Lt=y(Pt,[["__scopeId","data-v-a5bbad30"]]),Vt={class:"VPDocAsideCarbonAds"},St=k({__name:"VPDocAsideCarbonAds",props:{carbonAds:{}},setup(e){const t=()=>null;return(o,a)=>(s(),c("div",Vt,[_(r(t),{"carbon-ads":e.carbonAds},null,8,["carbon-ads"])]))}}),wt={class:"VPDocAside"},xt=k({__name:"VPDocAside",setup(e){const{theme:t}=w();return(o,a)=>(s(),c("div",wt,[d(o.$slots,"aside-top",{},void 0,!0),d(o.$slots,"aside-outline-before",{},void 0,!0),_(Lt),d(o.$slots,"aside-outline-after",{},void 0,!0),a[0]||(a[0]=i("div",{class:"spacer"},null,-1)),d(o.$slots,"aside-ads-before",{},void 0,!0),r(t).carbonAds?(s(),$(St,{key:0,"carbon-ads":r(t).carbonAds},null,8,["carbon-ads"])):p("",!0),d(o.$slots,"aside-ads-after",{},void 0,!0),d(o.$slots,"aside-bottom",{},void 0,!0)]))}}),Tt=y(xt,[["__scopeId","data-v-3f215769"]]);function Nt(){const{theme:e,page:t}=w();return L(()=>{const{text:o="Edit this page",pattern:a=""}=e.value.editLink||{};let n;return typeof a=="function"?n=a(t.value):n=a.replace(/:path/g,t.value.filePath),{url:n,text:o}})}function Mt(){const{page:e,theme:t,frontmatter:o}=w();return L(()=>{var b,P,h,g,V,M,C,x;const a=Te(t.value.sidebar,e.value.relativePath),n=ct(a),l=It(n,A=>A.link.replace(/[?#].*$/,"")),u=l.findIndex(A=>U(e.value.relativePath,A.link)),f=((b=t.value.docFooter)==null?void 0:b.prev)===!1&&!o.value.prev||o.value.prev===!1,v=((P=t.value.docFooter)==null?void 0:P.next)===!1&&!o.value.next||o.value.next===!1;return{prev:f?void 0:{text:(typeof o.value.prev=="string"?o.value.prev:typeof o.value.prev=="object"?o.value.prev.text:void 0)??((h=l[u-1])==null?void 0:h.docFooterText)??((g=l[u-1])==null?void 0:g.text),link:(typeof o.value.prev=="object"?o.value.prev.link:void 0)??((V=l[u-1])==null?void 0:V.link)},next:v?void 0:{text:(typeof o.value.next=="string"?o.value.next:typeof o.value.next=="object"?o.value.next.text:void 0)??((M=l[u+1])==null?void 0:M.docFooterText)??((C=l[u+1])==null?void 0:C.text),link:(typeof o.value.next=="object"?o.value.next.link:void 0)??((x=l[u+1])==null?void 0:x.link)}}})}function It(e,t){const o=new Set;return e.filter(a=>{const n=t(a);return o.has(n)?!1:o.add(n)})}const D=k({__name:"VPLink",props:{tag:{},href:{},noIcon:{type:Boolean},target:{},rel:{}},setup(e){const t=e,o=L(()=>t.tag??(t.href?"a":"span")),a=L(()=>t.href&&Pe.test(t.href)||t.target==="_blank");return(n,l)=>(s(),$(B(o.value),{class:I(["VPLink",{link:e.href,"vp-external-link-icon":a.value,"no-icon":e.noIcon}]),href:e.href?r(he)(e.href):void 0,target:e.target??(a.value?"_blank":void 0),rel:e.rel??(a.value?"noreferrer":void 0)},{default:m(()=>[d(n.$slots,"default")]),_:3},8,["class","href","target","rel"]))}}),Ct={class:"VPLastUpdated"},At=["datetime"],Ht=k({__name:"VPDocFooterLastUpdated",setup(e){const{theme:t,page:o,lang:a}=w(),n=L(()=>new Date(o.value.lastUpdated)),l=L(()=>n.value.toISOString()),u=T("");return F(()=>{X(()=>{var f,v,b;u.value=new Intl.DateTimeFormat((v=(f=t.value.lastUpdated)==null?void 0:f.formatOptions)!=null&&v.forceLocale?a.value:void 0,((b=t.value.lastUpdated)==null?void 0:b.formatOptions)??{dateStyle:"short",timeStyle:"short"}).format(n.value)})}),(f,v)=>{var b;return s(),c("p",Ct,[G(S(((b=r(t).lastUpdated)==null?void 0:b.text)||r(t).lastUpdatedText||"Last updated")+": ",1),i("time",{datetime:l.value},S(u.value),9,At)])}}}),Bt=y(Ht,[["__scopeId","data-v-e98dd255"]]),Dt={key:0,class:"VPDocFooter"},Et={key:0,class:"edit-info"},Ft={key:0,class:"edit-link"},Ot={key:1,class:"last-updated"},zt={key:1,class:"prev-next","aria-labelledby":"doc-footer-aria-label"},qt={class:"pager"},Gt=["innerHTML"],Ut=["innerHTML"],jt={class:"pager"},Wt=["innerHTML"],Rt=["innerHTML"],Kt=k({__name:"VPDocFooter",setup(e){const{theme:t,page:o,frontmatter:a}=w(),n=Nt(),l=Mt(),u=L(()=>t.value.editLink&&a.value.editLink!==!1),f=L(()=>o.value.lastUpdated),v=L(()=>u.value||f.value||l.value.prev||l.value.next);return(b,P)=>{var h,g,V,M;return v.value?(s(),c("footer",Dt,[d(b.$slots,"doc-footer-before",{},void 0,!0),u.value||f.value?(s(),c("div",Et,[u.value?(s(),c("div",Ft,[_(D,{class:"edit-link-button",href:r(n).url,"no-icon":!0},{default:m(()=>[P[0]||(P[0]=i("span",{class:"vpi-square-pen edit-link-icon"},null,-1)),G(" "+S(r(n).text),1)]),_:1},8,["href"])])):p("",!0),f.value?(s(),c("div",Ot,[_(Bt)])):p("",!0)])):p("",!0),(h=r(l).prev)!=null&&h.link||(g=r(l).next)!=null&&g.link?(s(),c("nav",zt,[P[1]||(P[1]=i("span",{class:"visually-hidden",id:"doc-footer-aria-label"},"Pager",-1)),i("div",qt,[(V=r(l).prev)!=null&&V.link?(s(),$(D,{key:0,class:"pager-link prev",href:r(l).prev.link},{default:m(()=>{var C;return[i("span",{class:"desc",innerHTML:((C=r(t).docFooter)==null?void 0:C.prev)||"Previous page"},null,8,Gt),i("span",{class:"title",innerHTML:r(l).prev.text},null,8,Ut)]}),_:1},8,["href"])):p("",!0)]),i("div",jt,[(M=r(l).next)!=null&&M.link?(s(),$(D,{key:0,class:"pager-link next",href:r(l).next.link},{default:m(()=>{var C;return[i("span",{class:"desc",innerHTML:((C=r(t).docFooter)==null?void 0:C.next)||"Next page"},null,8,Wt),i("span",{class:"title",innerHTML:r(l).next.text},null,8,Rt)]}),_:1},8,["href"])):p("",!0)])])):p("",!0)])):p("",!0)}}}),Jt=y(Kt,[["__scopeId","data-v-e257564d"]]),Yt={class:"container"},Xt={class:"aside-container"},Qt={class:"aside-content"},Zt={class:"content"},eo={class:"content-container"},to={class:"main"},oo=k({__name:"VPDoc",setup(e){const{theme:t}=w(),o=ee(),{hasSidebar:a,hasAside:n,leftAside:l}=O(),u=L(()=>o.path.replace(/[./]+/g,"_").replace(/_html$/,""));return(f,v)=>{const b=j("Content");return s(),c("div",{class:I(["VPDoc",{"has-sidebar":r(a),"has-aside":r(n)}])},[d(f.$slots,"doc-top",{},void 0,!0),i("div",Yt,[r(n)?(s(),c("div",{key:0,class:I(["aside",{"left-aside":r(l)}])},[v[0]||(v[0]=i("div",{class:"aside-curtain"},null,-1)),i("div",Xt,[i("div",Qt,[_(Tt,null,{"aside-top":m(()=>[d(f.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":m(()=>[d(f.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":m(()=>[d(f.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":m(()=>[d(f.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":m(()=>[d(f.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":m(()=>[d(f.$slots,"aside-ads-after",{},void 0,!0)]),_:3})])])],2)):p("",!0),i("div",Zt,[i("div",eo,[d(f.$slots,"doc-before",{},void 0,!0),i("main",to,[_(b,{class:I(["vp-doc",[u.value,r(t).externalLinkIcon&&"external-link-icon-enabled"]])},null,8,["class"])]),_(Jt,null,{"doc-footer-before":m(()=>[d(f.$slots,"doc-footer-before",{},void 0,!0)]),_:3}),d(f.$slots,"doc-after",{},void 0,!0)])])]),d(f.$slots,"doc-bottom",{},void 0,!0)],2)}}}),ao=y(oo,[["__scopeId","data-v-39a288b8"]]),no=k({__name:"VPButton",props:{tag:{},size:{default:"medium"},theme:{default:"brand"},text:{},href:{},target:{},rel:{}},setup(e){const t=e,o=L(()=>t.href&&Pe.test(t.href)),a=L(()=>t.tag||(t.href?"a":"button"));return(n,l)=>(s(),$(B(a.value),{class:I(["VPButton",[e.size,e.theme]]),href:e.href?r(he)(e.href):void 0,target:t.target??(o.value?"_blank":void 0),rel:t.rel??(o.value?"noreferrer":void 0)},{default:m(()=>[G(S(e.text),1)]),_:1},8,["class","href","target","rel"]))}}),so=y(no,[["__scopeId","data-v-fa7799d5"]]),ro=["src","alt"],io=k({inheritAttrs:!1,__name:"VPImage",props:{image:{},alt:{}},setup(e){return(t,o)=>{const a=j("VPImage",!0);return e.image?(s(),c(N,{key:0},[typeof e.image=="string"||"src"in e.image?(s(),c("img",q({key:0,class:"VPImage"},typeof e.image=="string"?t.$attrs:{...e.image,...t.$attrs},{src:r(Y)(typeof e.image=="string"?e.image:e.image.src),alt:e.alt??(typeof e.image=="string"?"":e.image.alt||"")}),null,16,ro)):(s(),c(N,{key:1},[_(a,q({class:"dark",image:e.image.dark,alt:e.image.alt},t.$attrs),null,16,["image","alt"]),_(a,q({class:"light",image:e.image.light,alt:e.image.alt},t.$attrs),null,16,["image","alt"])],64))],64)):p("",!0)}}}),J=y(io,[["__scopeId","data-v-8426fc1a"]]),lo={class:"container"},co={class:"main"},uo={class:"heading"},vo=["innerHTML"],fo=["innerHTML"],mo=["innerHTML"],ho={key:0,class:"actions"},po={key:0,class:"image"},bo={class:"image-container"},go=k({__name:"VPHero",props:{name:{},text:{},tagline:{},image:{},actions:{}},setup(e){const t=te("hero-image-slot-exists");return(o,a)=>(s(),c("div",{class:I(["VPHero",{"has-image":e.image||r(t)}])},[i("div",lo,[i("div",co,[d(o.$slots,"home-hero-info-before",{},void 0,!0),d(o.$slots,"home-hero-info",{},()=>[i("h1",uo,[e.name?(s(),c("span",{key:0,innerHTML:e.name,class:"name clip"},null,8,vo)):p("",!0),e.text?(s(),c("span",{key:1,innerHTML:e.text,class:"text"},null,8,fo)):p("",!0)]),e.tagline?(s(),c("p",{key:0,innerHTML:e.tagline,class:"tagline"},null,8,mo)):p("",!0)],!0),d(o.$slots,"home-hero-info-after",{},void 0,!0),e.actions?(s(),c("div",ho,[(s(!0),c(N,null,H(e.actions,n=>(s(),c("div",{key:n.link,class:"action"},[_(so,{tag:"a",size:"medium",theme:n.theme,text:n.text,href:n.link,target:n.target,rel:n.rel},null,8,["theme","text","href","target","rel"])]))),128))])):p("",!0),d(o.$slots,"home-hero-actions-after",{},void 0,!0)]),e.image||r(t)?(s(),c("div",po,[i("div",bo,[a[0]||(a[0]=i("div",{class:"image-bg"},null,-1)),d(o.$slots,"home-hero-image",{},()=>[e.image?(s(),$(J,{key:0,class:"image-src",image:e.image},null,8,["image"])):p("",!0)],!0)])])):p("",!0)])],2))}}),ko=y(go,[["__scopeId","data-v-4f9c455b"]]),_o=k({__name:"VPHomeHero",setup(e){const{frontmatter:t}=w();return(o,a)=>r(t).hero?(s(),$(ko,{key:0,class:"VPHomeHero",name:r(t).hero.name,text:r(t).hero.text,tagline:r(t).hero.tagline,image:r(t).hero.image,actions:r(t).hero.actions},{"home-hero-info-before":m(()=>[d(o.$slots,"home-hero-info-before")]),"home-hero-info":m(()=>[d(o.$slots,"home-hero-info")]),"home-hero-info-after":m(()=>[d(o.$slots,"home-hero-info-after")]),"home-hero-actions-after":m(()=>[d(o.$slots,"home-hero-actions-after")]),"home-hero-image":m(()=>[d(o.$slots,"home-hero-image")]),_:3},8,["name","text","tagline","image","actions"])):p("",!0)}}),$o={class:"box"},yo={key:0,class:"icon"},Po=["innerHTML"],Lo=["innerHTML"],Vo=["innerHTML"],So={key:4,class:"link-text"},wo={class:"link-text-value"},xo=k({__name:"VPFeature",props:{icon:{},title:{},details:{},link:{},linkText:{},rel:{},target:{}},setup(e){return(t,o)=>(s(),$(D,{class:"VPFeature",href:e.link,rel:e.rel,target:e.target,"no-icon":!0,tag:e.link?"a":"div"},{default:m(()=>[i("article",$o,[typeof e.icon=="object"&&e.icon.wrap?(s(),c("div",yo,[_(J,{image:e.icon,alt:e.icon.alt,height:e.icon.height||48,width:e.icon.width||48},null,8,["image","alt","height","width"])])):typeof e.icon=="object"?(s(),$(J,{key:1,image:e.icon,alt:e.icon.alt,height:e.icon.height||48,width:e.icon.width||48},null,8,["image","alt","height","width"])):e.icon?(s(),c("div",{key:2,class:"icon",innerHTML:e.icon},null,8,Po)):p("",!0),i("h2",{class:"title",innerHTML:e.title},null,8,Lo),e.details?(s(),c("p",{key:3,class:"details",innerHTML:e.details},null,8,Vo)):p("",!0),e.linkText?(s(),c("div",So,[i("p",wo,[G(S(e.linkText)+" ",1),o[0]||(o[0]=i("span",{class:"vpi-arrow-right link-text-icon"},null,-1))])])):p("",!0)])]),_:1},8,["href","rel","target","tag"]))}}),To=y(xo,[["__scopeId","data-v-a3976bdc"]]),No={key:0,class:"VPFeatures"},Mo={class:"container"},Io={class:"items"},Co=k({__name:"VPFeatures",props:{features:{}},setup(e){const t=e,o=L(()=>{const a=t.features.length;if(a){if(a===2)return"grid-2";if(a===3)return"grid-3";if(a%3===0)return"grid-6";if(a>3)return"grid-4"}else return});return(a,n)=>e.features?(s(),c("div",No,[i("div",Mo,[i("div",Io,[(s(!0),c(N,null,H(e.features,l=>(s(),c("div",{key:l.title,class:I(["item",[o.value]])},[_(To,{icon:l.icon,title:l.title,details:l.details,link:l.link,"link-text":l.linkText,rel:l.rel,target:l.target},null,8,["icon","title","details","link","link-text","rel","target"])],2))),128))])])])):p("",!0)}}),Ao=y(Co,[["__scopeId","data-v-a6181336"]]),Ho=k({__name:"VPHomeFeatures",setup(e){const{frontmatter:t}=w();return(o,a)=>r(t).features?(s(),$(Ao,{key:0,class:"VPHomeFeatures",features:r(t).features},null,8,["features"])):p("",!0)}}),Bo=k({__name:"VPHomeContent",setup(e){const{width:t}=Fe({initialWidth:0,includeScrollbar:!1});return(o,a)=>(s(),c("div",{class:"vp-doc container",style:Le(r(t)?{"--vp-offset":`calc(50% - ${r(t)/2}px)`}:{})},[d(o.$slots,"default",{},void 0,!0)],4))}}),Do=y(Bo,[["__scopeId","data-v-8e2d4988"]]),Eo=k({__name:"VPHome",setup(e){const{frontmatter:t,theme:o}=w();return(a,n)=>{const l=j("Content");return s(),c("div",{class:I(["VPHome",{"external-link-icon-enabled":r(o).externalLinkIcon}])},[d(a.$slots,"home-hero-before",{},void 0,!0),_(_o,null,{"home-hero-info-before":m(()=>[d(a.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":m(()=>[d(a.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":m(()=>[d(a.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":m(()=>[d(a.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":m(()=>[d(a.$slots,"home-hero-image",{},void 0,!0)]),_:3}),d(a.$slots,"home-hero-after",{},void 0,!0),d(a.$slots,"home-features-before",{},void 0,!0),_(Ho),d(a.$slots,"home-features-after",{},void 0,!0),r(t).markdownStyles!==!1?(s(),$(Do,{key:0},{default:m(()=>[_(l)]),_:1})):(s(),$(l,{key:1}))],2)}}}),Fo=y(Eo,[["__scopeId","data-v-8b561e3d"]]),Oo={},zo={class:"VPPage"};function qo(e,t){const o=j("Content");return s(),c("div",zo,[d(e.$slots,"page-top"),_(o),d(e.$slots,"page-bottom")])}const Go=y(Oo,[["render",qo]]),Uo=k({__name:"VPContent",setup(e){const{page:t,frontmatter:o}=w(),{hasSidebar:a}=O();return(n,l)=>(s(),c("div",{class:I(["VPContent",{"has-sidebar":r(a),"is-home":r(o).layout==="home"}]),id:"VPContent"},[r(t).isNotFound?d(n.$slots,"not-found",{key:0},()=>[_(it)],!0):r(o).layout==="page"?(s(),$(Go,{key:1},{"page-top":m(()=>[d(n.$slots,"page-top",{},void 0,!0)]),"page-bottom":m(()=>[d(n.$slots,"page-bottom",{},void 0,!0)]),_:3})):r(o).layout==="home"?(s(),$(Fo,{key:2},{"home-hero-before":m(()=>[d(n.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":m(()=>[d(n.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":m(()=>[d(n.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":m(()=>[d(n.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":m(()=>[d(n.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":m(()=>[d(n.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":m(()=>[d(n.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":m(()=>[d(n.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":m(()=>[d(n.$slots,"home-features-after",{},void 0,!0)]),_:3})):r(o).layout&&r(o).layout!=="doc"?(s(),$(B(r(o).layout),{key:3})):(s(),$(ao,{key:4},{"doc-top":m(()=>[d(n.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":m(()=>[d(n.$slots,"doc-bottom",{},void 0,!0)]),"doc-footer-before":m(()=>[d(n.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":m(()=>[d(n.$slots,"doc-before",{},void 0,!0)]),"doc-after":m(()=>[d(n.$slots,"doc-after",{},void 0,!0)]),"aside-top":m(()=>[d(n.$slots,"aside-top",{},void 0,!0)]),"aside-outline-before":m(()=>[d(n.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":m(()=>[d(n.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":m(()=>[d(n.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":m(()=>[d(n.$slots,"aside-ads-after",{},void 0,!0)]),"aside-bottom":m(()=>[d(n.$slots,"aside-bottom",{},void 0,!0)]),_:3}))],2))}}),jo=y(Uo,[["__scopeId","data-v-1428d186"]]),Wo={class:"container"},Ro=["innerHTML"],Ko=["innerHTML"],Jo=k({__name:"VPFooter",setup(e){const{theme:t,frontmatter:o}=w(),{hasSidebar:a}=O();return(n,l)=>r(t).footer&&r(o).footer!==!1?(s(),c("footer",{key:0,class:I(["VPFooter",{"has-sidebar":r(a)}])},[i("div",Wo,[r(t).footer.message?(s(),c("p",{key:0,class:"message",innerHTML:r(t).footer.message},null,8,Ro)):p("",!0),r(t).footer.copyright?(s(),c("p",{key:1,class:"copyright",innerHTML:r(t).footer.copyright},null,8,Ko)):p("",!0)])],2)):p("",!0)}}),Yo=y(Jo,[["__scopeId","data-v-e315a0ad"]]);function Xo(){const{theme:e,frontmatter:t}=w(),o=ye([]),a=L(()=>o.value.length>0);return Z(()=>{o.value=pe(t.value.outline??e.value.outline)}),{headers:o,hasLocalNav:a}}const Qo={class:"menu-text"},Zo={class:"header"},ea={class:"outline"},ta=k({__name:"VPLocalNavOutlineDropdown",props:{headers:{},navHeight:{}},setup(e){const t=e,{theme:o}=w(),a=T(!1),n=T(0),l=T(),u=T();function f(h){var g;(g=l.value)!=null&&g.contains(h.target)||(a.value=!1)}E(a,h=>{if(h){document.addEventListener("click",f);return}document.removeEventListener("click",f)}),le("Escape",()=>{a.value=!1}),Z(()=>{a.value=!1});function v(){a.value=!a.value,n.value=window.innerHeight+Math.min(window.scrollY-t.navHeight,0)}function b(h){h.target.classList.contains("outline-link")&&(u.value&&(u.value.style.transition="none"),Ve(()=>{a.value=!1}))}function P(){a.value=!1,window.scrollTo({top:0,left:0,behavior:"smooth"})}return(h,g)=>(s(),c("div",{class:"VPLocalNavOutlineDropdown",style:Le({"--vp-vh":n.value+"px"}),ref_key:"main",ref:l},[e.headers.length>0?(s(),c("button",{key:0,onClick:v,class:I({open:a.value})},[i("span",Qo,S(r(Ne)(r(o))),1),g[0]||(g[0]=i("span",{class:"vpi-chevron-right icon"},null,-1))],2)):(s(),c("button",{key:1,onClick:P},S(r(o).returnToTopLabel||"Return to top"),1)),_(ve,{name:"flyout"},{default:m(()=>[a.value?(s(),c("div",{key:0,ref_key:"items",ref:u,class:"items",onClick:b},[i("div",Zo,[i("a",{class:"top-link",href:"#",onClick:P},S(r(o).returnToTopLabel||"Return to top"),1)]),i("div",ea,[_(Me,{headers:e.headers},null,8,["headers"])])],512)):p("",!0)]),_:1})],4))}}),oa=y(ta,[["__scopeId","data-v-8a42e2b4"]]),aa={class:"container"},na=["aria-expanded"],sa={class:"menu-text"},ra=k({__name:"VPLocalNav",props:{open:{type:Boolean}},emits:["open-menu"],setup(e){const{theme:t,frontmatter:o}=w(),{hasSidebar:a}=O(),{headers:n}=Xo(),{y:l}=Se(),u=T(0);F(()=>{u.value=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--vp-nav-height"))}),Z(()=>{n.value=pe(o.value.outline??t.value.outline)});const f=L(()=>n.value.length===0),v=L(()=>f.value&&!a.value),b=L(()=>({VPLocalNav:!0,"has-sidebar":a.value,empty:f.value,fixed:v.value}));return(P,h)=>r(o).layout!=="home"&&(!v.value||r(l)>=u.value)?(s(),c("div",{key:0,class:I(b.value)},[i("div",aa,[r(a)?(s(),c("button",{key:0,class:"menu","aria-expanded":e.open,"aria-controls":"VPSidebarNav",onClick:h[0]||(h[0]=g=>P.$emit("open-menu"))},[h[1]||(h[1]=i("span",{class:"vpi-align-left menu-icon"},null,-1)),i("span",sa,S(r(t).sidebarMenuLabel||"Menu"),1)],8,na)):p("",!0),_(oa,{headers:r(n),navHeight:u.value},null,8,["headers","navHeight"])])],2)):p("",!0)}}),ia=y(ra,[["__scopeId","data-v-a6f0e41e"]]);function la(){const e=T(!1);function t(){e.value=!0,window.addEventListener("resize",n)}function o(){e.value=!1,window.removeEventListener("resize",n)}function a(){e.value?o():t()}function n(){window.outerWidth>=768&&o()}const l=ee();return E(()=>l.path,o),{isScreenOpen:e,openScreen:t,closeScreen:o,toggleScreen:a}}const ca={},ua={class:"VPSwitch",type:"button",role:"switch"},da={class:"check"},va={key:0,class:"icon"};function fa(e,t){return s(),c("button",ua,[i("span",da,[e.$slots.default?(s(),c("span",va,[d(e.$slots,"default",{},void 0,!0)])):p("",!0)])])}const ma=y(ca,[["render",fa],["__scopeId","data-v-1d5665e3"]]),ha=k({__name:"VPSwitchAppearance",setup(e){const{isDark:t,theme:o}=w(),a=te("toggle-appearance",()=>{t.value=!t.value}),n=T("");return me(()=>{n.value=t.value?o.value.lightModeSwitchTitle||"Switch to light theme":o.value.darkModeSwitchTitle||"Switch to dark theme"}),(l,u)=>(s(),$(ma,{title:n.value,class:"VPSwitchAppearance","aria-checked":r(t),onClick:r(a)},{default:m(()=>[...u[0]||(u[0]=[i("span",{class:"vpi-sun sun"},null,-1),i("span",{class:"vpi-moon moon"},null,-1)])]),_:1},8,["title","aria-checked","onClick"]))}}),be=y(ha,[["__scopeId","data-v-5337faa4"]]),pa={key:0,class:"VPNavBarAppearance"},ba=k({__name:"VPNavBarAppearance",setup(e){const{site:t}=w();return(o,a)=>r(t).appearance&&r(t).appearance!=="force-dark"&&r(t).appearance!=="force-auto"?(s(),c("div",pa,[_(be)])):p("",!0)}}),ga=y(ba,[["__scopeId","data-v-6c893767"]]),ge=T();let Ie=!1,re=0;function ka(e){const t=T(!1);if(oe){!Ie&&_a(),re++;const o=E(ge,a=>{var n,l,u;a===e.el.value||(n=e.el.value)!=null&&n.contains(a)?(t.value=!0,(l=e.onFocus)==null||l.call(e)):(t.value=!1,(u=e.onBlur)==null||u.call(e))});Q(()=>{o(),re--,re||$a()})}return Oe(t)}function _a(){document.addEventListener("focusin",Ce),Ie=!0,ge.value=document.activeElement}function $a(){document.removeEventListener("focusin",Ce)}function Ce(){ge.value=document.activeElement}const ya={class:"VPMenuLink"},Pa=["innerHTML"],La=k({__name:"VPMenuLink",props:{item:{}},setup(e){const{page:t}=w();return(o,a)=>(s(),c("div",ya,[_(D,{class:I({active:r(U)(r(t).relativePath,e.item.activeMatch||e.item.link,!!e.item.activeMatch)}),href:e.item.link,target:e.item.target,rel:e.item.rel,"no-icon":e.item.noIcon},{default:m(()=>[i("span",{innerHTML:e.item.text},null,8,Pa)]),_:1},8,["class","href","target","rel","no-icon"])]))}}),ae=y(La,[["__scopeId","data-v-35975db6"]]),Va={class:"VPMenuGroup"},Sa={key:0,class:"title"},wa=k({__name:"VPMenuGroup",props:{text:{},items:{}},setup(e){return(t,o)=>(s(),c("div",Va,[e.text?(s(),c("p",Sa,S(e.text),1)):p("",!0),(s(!0),c(N,null,H(e.items,a=>(s(),c(N,null,["link"in a?(s(),$(ae,{key:0,item:a},null,8,["item"])):p("",!0)],64))),256))]))}}),xa=y(wa,[["__scopeId","data-v-69e747b5"]]),Ta={class:"VPMenu"},Na={key:0,class:"items"},Ma=k({__name:"VPMenu",props:{items:{}},setup(e){return(t,o)=>(s(),c("div",Ta,[e.items?(s(),c("div",Na,[(s(!0),c(N,null,H(e.items,a=>(s(),c(N,{key:JSON.stringify(a)},["link"in a?(s(),$(ae,{key:0,item:a},null,8,["item"])):"component"in a?(s(),$(B(a.component),q({key:1,ref_for:!0},a.props),null,16)):(s(),$(xa,{key:2,text:a.text,items:a.items},null,8,["text","items"]))],64))),128))])):p("",!0),d(t.$slots,"default",{},void 0,!0)]))}}),Ia=y(Ma,[["__scopeId","data-v-b98bc113"]]),Ca=["aria-expanded","aria-label"],Aa={key:0,class:"text"},Ha=["innerHTML"],Ba={key:1,class:"vpi-more-horizontal icon"},Da={class:"menu"},Ea=k({__name:"VPFlyout",props:{icon:{},button:{},label:{},items:{}},setup(e){const t=T(!1),o=T();ka({el:o,onBlur:a});function a(){t.value=!1}return(n,l)=>(s(),c("div",{class:"VPFlyout",ref_key:"el",ref:o,onMouseenter:l[1]||(l[1]=u=>t.value=!0),onMouseleave:l[2]||(l[2]=u=>t.value=!1)},[i("button",{type:"button",class:"button","aria-haspopup":"true","aria-expanded":t.value,"aria-label":e.label,onClick:l[0]||(l[0]=u=>t.value=!t.value)},[e.button||e.icon?(s(),c("span",Aa,[e.icon?(s(),c("span",{key:0,class:I([e.icon,"option-icon"])},null,2)):p("",!0),e.button?(s(),c("span",{key:1,innerHTML:e.button},null,8,Ha)):p("",!0),l[3]||(l[3]=i("span",{class:"vpi-chevron-down text-icon"},null,-1))])):(s(),c("span",Ba))],8,Ca),i("div",Da,[_(Ia,{items:e.items},{default:m(()=>[d(n.$slots,"default",{},void 0,!0)]),_:3},8,["items"])])],544))}}),ke=y(Ea,[["__scopeId","data-v-cf11d7a2"]]),Fa=["href","aria-label","innerHTML"],Oa=k({__name:"VPSocialLink",props:{icon:{},link:{},ariaLabel:{}},setup(e){const t=e,o=T();F(async()=>{var l;await Ve();const n=(l=o.value)==null?void 0:l.children[0];n instanceof HTMLElement&&n.className.startsWith("vpi-social-")&&(getComputedStyle(n).maskImage||getComputedStyle(n).webkitMaskImage)==="none"&&n.style.setProperty("--icon",`url('https://api.iconify.design/simple-icons/${t.icon}.svg')`)});const a=L(()=>typeof t.icon=="object"?t.icon.svg:`<span class="vpi-social-${t.icon}"></span>`);return(n,l)=>(s(),c("a",{ref_key:"el",ref:o,class:"VPSocialLink no-icon",href:e.link,"aria-label":e.ariaLabel??(typeof e.icon=="string"?e.icon:""),target:"_blank",rel:"noopener",innerHTML:a.value},null,8,Fa))}}),za=y(Oa,[["__scopeId","data-v-bd121fe5"]]),qa={class:"VPSocialLinks"},Ga=k({__name:"VPSocialLinks",props:{links:{}},setup(e){return(t,o)=>(s(),c("div",qa,[(s(!0),c(N,null,H(e.links,({link:a,icon:n,ariaLabel:l})=>(s(),$(za,{key:a,icon:n,link:a,ariaLabel:l},null,8,["icon","link","ariaLabel"]))),128))]))}}),_e=y(Ga,[["__scopeId","data-v-7bc22406"]]),Ua={key:0,class:"group translations"},ja={class:"trans-title"},Wa={key:1,class:"group"},Ra={class:"item appearance"},Ka={class:"label"},Ja={class:"appearance-action"},Ya={key:2,class:"group"},Xa={class:"item social-links"},Qa=k({__name:"VPNavBarExtra",setup(e){const{site:t,theme:o}=w(),{localeLinks:a,currentLang:n}=R({correspondingLink:!0}),l=L(()=>a.value.length&&n.value.label||t.value.appearance||o.value.socialLinks);return(u,f)=>l.value?(s(),$(ke,{key:0,class:"VPNavBarExtra",label:"extra navigation"},{default:m(()=>[r(a).length&&r(n).label?(s(),c("div",Ua,[i("p",ja,S(r(n).label),1),(s(!0),c(N,null,H(r(a),v=>(s(),$(ae,{key:v.link,item:v},null,8,["item"]))),128))])):p("",!0),r(t).appearance&&r(t).appearance!=="force-dark"&&r(t).appearance!=="force-auto"?(s(),c("div",Wa,[i("div",Ra,[i("p",Ka,S(r(o).darkModeSwitchLabel||"Appearance"),1),i("div",Ja,[_(be)])])])):p("",!0),r(o).socialLinks?(s(),c("div",Ya,[i("div",Xa,[_(_e,{class:"social-links-list",links:r(o).socialLinks},null,8,["links"])])])):p("",!0)]),_:1})):p("",!0)}}),Za=y(Qa,[["__scopeId","data-v-bb2aa2f0"]]),en=["aria-expanded"],tn=k({__name:"VPNavBarHamburger",props:{active:{type:Boolean}},emits:["click"],setup(e){return(t,o)=>(s(),c("button",{type:"button",class:I(["VPNavBarHamburger",{active:e.active}]),"aria-label":"mobile navigation","aria-expanded":e.active,"aria-controls":"VPNavScreen",onClick:o[0]||(o[0]=a=>t.$emit("click"))},[...o[1]||(o[1]=[i("span",{class:"container"},[i("span",{class:"top"}),i("span",{class:"middle"}),i("span",{class:"bottom"})],-1)])],10,en))}}),on=y(tn,[["__scopeId","data-v-e5dd9c1c"]]),an=["innerHTML"],nn=k({__name:"VPNavBarMenuLink",props:{item:{}},setup(e){const{page:t}=w();return(o,a)=>(s(),$(D,{class:I({VPNavBarMenuLink:!0,active:r(U)(r(t).relativePath,e.item.activeMatch||e.item.link,!!e.item.activeMatch)}),href:e.item.link,target:e.item.target,rel:e.item.rel,"no-icon":e.item.noIcon,tabindex:"0"},{default:m(()=>[i("span",{innerHTML:e.item.text},null,8,an)]),_:1},8,["class","href","target","rel","no-icon"]))}}),sn=y(nn,[["__scopeId","data-v-e56f3d57"]]),rn=k({__name:"VPNavBarMenuGroup",props:{item:{}},setup(e){const t=e,{page:o}=w(),a=l=>"component"in l?!1:"link"in l?U(o.value.relativePath,l.link,!!t.item.activeMatch):l.items.some(a),n=L(()=>a(t.item));return(l,u)=>(s(),$(ke,{class:I({VPNavBarMenuGroup:!0,active:r(U)(r(o).relativePath,e.item.activeMatch,!!e.item.activeMatch)||n.value}),button:e.item.text,items:e.item.items},null,8,["class","button","items"]))}}),ln={key:0,"aria-labelledby":"main-nav-aria-label",class:"VPNavBarMenu"},cn=k({__name:"VPNavBarMenu",setup(e){const{theme:t}=w();return(o,a)=>r(t).nav?(s(),c("nav",ln,[a[0]||(a[0]=i("span",{id:"main-nav-aria-label",class:"visually-hidden"}," Main Navigation ",-1)),(s(!0),c(N,null,H(r(t).nav,n=>(s(),c(N,{key:JSON.stringify(n)},["link"in n?(s(),$(sn,{key:0,item:n},null,8,["item"])):"component"in n?(s(),$(B(n.component),q({key:1,ref_for:!0},n.props),null,16)):(s(),$(rn,{key:2,item:n},null,8,["item"]))],64))),128))])):p("",!0)}}),un=y(cn,[["__scopeId","data-v-dc692963"]]);function dn(e){const{localeIndex:t,theme:o}=w();function a(n){var M,C,x;const l=n.split("."),u=(M=o.value.search)==null?void 0:M.options,f=u&&typeof u=="object",v=f&&((x=(C=u.locales)==null?void 0:C[t.value])==null?void 0:x.translations)||null,b=f&&u.translations||null;let P=v,h=b,g=e;const V=l.pop();for(const A of l){let z=null;const W=g==null?void 0:g[A];W&&(z=g=W);const ne=h==null?void 0:h[A];ne&&(z=h=ne);const se=P==null?void 0:P[A];se&&(z=P=se),W||(g=z),ne||(h=z),se||(P=z)}return(P==null?void 0:P[V])??(h==null?void 0:h[V])??(g==null?void 0:g[V])??""}return a}const vn=["aria-label"],fn={class:"DocSearch-Button-Container"},mn={class:"DocSearch-Button-Placeholder"},$e=k({__name:"VPNavBarSearchButton",setup(e){const o=dn({button:{buttonText:"Search",buttonAriaLabel:"Search"}});return(a,n)=>(s(),c("button",{type:"button",class:"DocSearch DocSearch-Button","aria-label":r(o)("button.buttonAriaLabel")},[i("span",fn,[n[0]||(n[0]=i("span",{class:"vp-icon DocSearch-Search-Icon"},null,-1)),i("span",mn,S(r(o)("button.buttonText")),1)]),n[1]||(n[1]=i("span",{class:"DocSearch-Button-Keys"},[i("kbd",{class:"DocSearch-Button-Key"}),i("kbd",{class:"DocSearch-Button-Key"},"K")],-1))],8,vn))}}),hn={class:"VPNavBarSearch"},pn={id:"local-search"},bn={key:1,id:"docsearch"},gn=k({__name:"VPNavBarSearch",setup(e){const t=ze(()=>qe(()=>import("./VPLocalSearchBox.D-6g5hkc.js"),__vite__mapDeps([0,1]))),o=()=>null,{theme:a}=w(),n=T(!1),l=T(!1);F(()=>{});function u(){n.value||(n.value=!0,setTimeout(f,16))}function f(){const h=new Event("keydown");h.key="k",h.metaKey=!0,window.dispatchEvent(h),setTimeout(()=>{document.querySelector(".DocSearch-Modal")||f()},16)}function v(h){const g=h.target,V=g.tagName;return g.isContentEditable||V==="INPUT"||V==="SELECT"||V==="TEXTAREA"}const b=T(!1);le("k",h=>{(h.ctrlKey||h.metaKey)&&(h.preventDefault(),b.value=!0)}),le("/",h=>{v(h)||(h.preventDefault(),b.value=!0)});const P="local";return(h,g)=>{var V;return s(),c("div",hn,[r(P)==="local"?(s(),c(N,{key:0},[b.value?(s(),$(r(t),{key:0,onClose:g[0]||(g[0]=M=>b.value=!1)})):p("",!0),i("div",pn,[_($e,{onClick:g[1]||(g[1]=M=>b.value=!0)})])],64)):r(P)==="algolia"?(s(),c(N,{key:1},[n.value?(s(),$(r(o),{key:0,algolia:((V=r(a).search)==null?void 0:V.options)??r(a).algolia,onVnodeBeforeMount:g[2]||(g[2]=M=>l.value=!0)},null,8,["algolia"])):p("",!0),l.value?p("",!0):(s(),c("div",bn,[_($e,{onClick:u})]))],64)):p("",!0)])}}}),kn=k({__name:"VPNavBarSocialLinks",setup(e){const{theme:t}=w();return(o,a)=>r(t).socialLinks?(s(),$(_e,{key:0,class:"VPNavBarSocialLinks",links:r(t).socialLinks},null,8,["links"])):p("",!0)}}),_n=y(kn,[["__scopeId","data-v-0394ad82"]]),$n=["href","rel","target"],yn=["innerHTML"],Pn={key:2},Ln=k({__name:"VPNavBarTitle",setup(e){const{site:t,theme:o}=w(),{hasSidebar:a}=O(),{currentLang:n}=R(),l=L(()=>{var v;return typeof o.value.logoLink=="string"?o.value.logoLink:(v=o.value.logoLink)==null?void 0:v.link}),u=L(()=>{var v;return typeof o.value.logoLink=="string"||(v=o.value.logoLink)==null?void 0:v.rel}),f=L(()=>{var v;return typeof o.value.logoLink=="string"||(v=o.value.logoLink)==null?void 0:v.target});return(v,b)=>(s(),c("div",{class:I(["VPNavBarTitle",{"has-sidebar":r(a)}])},[i("a",{class:"title",href:l.value??r(he)(r(n).link),rel:u.value,target:f.value},[d(v.$slots,"nav-bar-title-before",{},void 0,!0),r(o).logo?(s(),$(J,{key:0,class:"logo",image:r(o).logo},null,8,["image"])):p("",!0),r(o).siteTitle?(s(),c("span",{key:1,innerHTML:r(o).siteTitle},null,8,yn)):r(o).siteTitle===void 0?(s(),c("span",Pn,S(r(t).title),1)):p("",!0),d(v.$slots,"nav-bar-title-after",{},void 0,!0)],8,$n)],2))}}),Vn=y(Ln,[["__scopeId","data-v-1168a8e4"]]),Sn={class:"items"},wn={class:"title"},xn=k({__name:"VPNavBarTranslations",setup(e){const{theme:t}=w(),{localeLinks:o,currentLang:a}=R({correspondingLink:!0});return(n,l)=>r(o).length&&r(a).label?(s(),$(ke,{key:0,class:"VPNavBarTranslations",icon:"vpi-languages",label:r(t).langMenuLabel||"Change language"},{default:m(()=>[i("div",Sn,[i("p",wn,S(r(a).label),1),(s(!0),c(N,null,H(r(o),u=>(s(),$(ae,{key:u.link,item:u},null,8,["item"]))),128))])]),_:1},8,["label"])):p("",!0)}}),Tn=y(xn,[["__scopeId","data-v-88af2de4"]]),Nn={class:"wrapper"},Mn={class:"container"},In={class:"title"},Cn={class:"content"},An={class:"content-body"},Hn=k({__name:"VPNavBar",props:{isScreenOpen:{type:Boolean}},emits:["toggle-screen"],setup(e){const t=e,{y:o}=Se(),{hasSidebar:a}=O(),{frontmatter:n}=w(),l=T({});return me(()=>{l.value={"has-sidebar":a.value,home:n.value.layout==="home",top:o.value===0,"screen-open":t.isScreenOpen}}),(u,f)=>(s(),c("div",{class:I(["VPNavBar",l.value])},[i("div",Nn,[i("div",Mn,[i("div",In,[_(Vn,null,{"nav-bar-title-before":m(()=>[d(u.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":m(()=>[d(u.$slots,"nav-bar-title-after",{},void 0,!0)]),_:3})]),i("div",Cn,[i("div",An,[d(u.$slots,"nav-bar-content-before",{},void 0,!0),_(gn,{class:"search"}),_(un,{class:"menu"}),_(Tn,{class:"translations"}),_(ga,{class:"appearance"}),_(_n,{class:"social-links"}),_(Za,{class:"extra"}),d(u.$slots,"nav-bar-content-after",{},void 0,!0),_(on,{class:"hamburger",active:e.isScreenOpen,onClick:f[0]||(f[0]=v=>u.$emit("toggle-screen"))},null,8,["active"])])])])]),f[1]||(f[1]=i("div",{class:"divider"},[i("div",{class:"divider-line"})],-1))],2))}}),Bn=y(Hn,[["__scopeId","data-v-6aa21345"]]),Dn={key:0,class:"VPNavScreenAppearance"},En={class:"text"},Fn=k({__name:"VPNavScreenAppearance",setup(e){const{site:t,theme:o}=w();return(a,n)=>r(t).appearance&&r(t).appearance!=="force-dark"&&r(t).appearance!=="force-auto"?(s(),c("div",Dn,[i("p",En,S(r(o).darkModeSwitchLabel||"Appearance"),1),_(be)])):p("",!0)}}),On=y(Fn,[["__scopeId","data-v-b44890b2"]]),zn=["innerHTML"],qn=k({__name:"VPNavScreenMenuLink",props:{item:{}},setup(e){const t=te("close-screen");return(o,a)=>(s(),$(D,{class:"VPNavScreenMenuLink",href:e.item.link,target:e.item.target,rel:e.item.rel,"no-icon":e.item.noIcon,onClick:r(t)},{default:m(()=>[i("span",{innerHTML:e.item.text},null,8,zn)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),Gn=y(qn,[["__scopeId","data-v-df37e6dd"]]),Un=["innerHTML"],jn=k({__name:"VPNavScreenMenuGroupLink",props:{item:{}},setup(e){const t=te("close-screen");return(o,a)=>(s(),$(D,{class:"VPNavScreenMenuGroupLink",href:e.item.link,target:e.item.target,rel:e.item.rel,"no-icon":e.item.noIcon,onClick:r(t)},{default:m(()=>[i("span",{innerHTML:e.item.text},null,8,Un)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),Ae=y(jn,[["__scopeId","data-v-3e9c20e4"]]),Wn={class:"VPNavScreenMenuGroupSection"},Rn={key:0,class:"title"},Kn=k({__name:"VPNavScreenMenuGroupSection",props:{text:{},items:{}},setup(e){return(t,o)=>(s(),c("div",Wn,[e.text?(s(),c("p",Rn,S(e.text),1)):p("",!0),(s(!0),c(N,null,H(e.items,a=>(s(),$(Ae,{key:a.text,item:a},null,8,["item"]))),128))]))}}),Jn=y(Kn,[["__scopeId","data-v-8133b170"]]),Yn=["aria-controls","aria-expanded"],Xn=["innerHTML"],Qn=["id"],Zn={key:0,class:"item"},es={key:1,class:"item"},ts={key:2,class:"group"},os=k({__name:"VPNavScreenMenuGroup",props:{text:{},items:{}},setup(e){const t=e,o=T(!1),a=L(()=>`NavScreenGroup-${t.text.replace(" ","-").toLowerCase()}`);function n(){o.value=!o.value}return(l,u)=>(s(),c("div",{class:I(["VPNavScreenMenuGroup",{open:o.value}])},[i("button",{class:"button","aria-controls":a.value,"aria-expanded":o.value,onClick:n},[i("span",{class:"button-text",innerHTML:e.text},null,8,Xn),u[0]||(u[0]=i("span",{class:"vpi-plus button-icon"},null,-1))],8,Yn),i("div",{id:a.value,class:"items"},[(s(!0),c(N,null,H(e.items,f=>(s(),c(N,{key:JSON.stringify(f)},["link"in f?(s(),c("div",Zn,[_(Ae,{item:f},null,8,["item"])])):"component"in f?(s(),c("div",es,[(s(),$(B(f.component),q({ref_for:!0},f.props,{"screen-menu":""}),null,16))])):(s(),c("div",ts,[_(Jn,{text:f.text,items:f.items},null,8,["text","items"])]))],64))),128))],8,Qn)],2))}}),as=y(os,[["__scopeId","data-v-b9ab8c58"]]),ns={key:0,class:"VPNavScreenMenu"},ss=k({__name:"VPNavScreenMenu",setup(e){const{theme:t}=w();return(o,a)=>r(t).nav?(s(),c("nav",ns,[(s(!0),c(N,null,H(r(t).nav,n=>(s(),c(N,{key:JSON.stringify(n)},["link"in n?(s(),$(Gn,{key:0,item:n},null,8,["item"])):"component"in n?(s(),$(B(n.component),q({key:1,ref_for:!0},n.props,{"screen-menu":""}),null,16)):(s(),$(as,{key:2,text:n.text||"",items:n.items},null,8,["text","items"]))],64))),128))])):p("",!0)}}),rs=k({__name:"VPNavScreenSocialLinks",setup(e){const{theme:t}=w();return(o,a)=>r(t).socialLinks?(s(),$(_e,{key:0,class:"VPNavScreenSocialLinks",links:r(t).socialLinks},null,8,["links"])):p("",!0)}}),is={class:"list"},ls=k({__name:"VPNavScreenTranslations",setup(e){const{localeLinks:t,currentLang:o}=R({correspondingLink:!0}),a=T(!1);function n(){a.value=!a.value}return(l,u)=>r(t).length&&r(o).label?(s(),c("div",{key:0,class:I(["VPNavScreenTranslations",{open:a.value}])},[i("button",{class:"title",onClick:n},[u[0]||(u[0]=i("span",{class:"vpi-languages icon lang"},null,-1)),G(" "+S(r(o).label)+" ",1),u[1]||(u[1]=i("span",{class:"vpi-chevron-down icon chevron"},null,-1))]),i("ul",is,[(s(!0),c(N,null,H(r(t),f=>(s(),c("li",{key:f.link,class:"item"},[_(D,{class:"link",href:f.link},{default:m(()=>[G(S(f.text),1)]),_:2},1032,["href"])]))),128))])],2)):p("",!0)}}),cs=y(ls,[["__scopeId","data-v-858fe1a4"]]),us={class:"container"},ds=k({__name:"VPNavScreen",props:{open:{type:Boolean}},setup(e){const t=T(null),o=we(oe?document.body:null);return(a,n)=>(s(),$(ve,{name:"fade",onEnter:n[0]||(n[0]=l=>o.value=!0),onAfterLeave:n[1]||(n[1]=l=>o.value=!1)},{default:m(()=>[e.open?(s(),c("div",{key:0,class:"VPNavScreen",ref_key:"screen",ref:t,id:"VPNavScreen"},[i("div",us,[d(a.$slots,"nav-screen-content-before",{},void 0,!0),_(ss,{class:"menu"}),_(cs,{class:"translations"}),_(On,{class:"appearance"}),_(rs,{class:"social-links"}),d(a.$slots,"nav-screen-content-after",{},void 0,!0)])],512)):p("",!0)]),_:3}))}}),vs=y(ds,[["__scopeId","data-v-f2779853"]]),fs={key:0,class:"VPNav"},ms=k({__name:"VPNav",setup(e){const{isScreenOpen:t,closeScreen:o,toggleScreen:a}=la(),{frontmatter:n}=w(),l=L(()=>n.value.navbar!==!1);return xe("close-screen",o),X(()=>{oe&&document.documentElement.classList.toggle("hide-nav",!l.value)}),(u,f)=>l.value?(s(),c("header",fs,[_(Bn,{"is-screen-open":r(t),onToggleScreen:r(a)},{"nav-bar-title-before":m(()=>[d(u.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":m(()=>[d(u.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":m(()=>[d(u.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":m(()=>[d(u.$slots,"nav-bar-content-after",{},void 0,!0)]),_:3},8,["is-screen-open","onToggleScreen"]),_(vs,{open:r(t)},{"nav-screen-content-before":m(()=>[d(u.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":m(()=>[d(u.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3},8,["open"])])):p("",!0)}}),hs=y(ms,[["__scopeId","data-v-ae24b3ad"]]),ps=["role","tabindex"],bs={key:1,class:"items"},gs=k({__name:"VPSidebarItem",props:{item:{},depth:{}},setup(e){const t=e,{collapsed:o,collapsible:a,isLink:n,isActiveLink:l,hasActiveLink:u,hasChildren:f,toggle:v}=dt(L(()=>t.item)),b=L(()=>f.value?"section":"div"),P=L(()=>n.value?"a":"div"),h=L(()=>f.value?t.depth+2===7?"p":`h${t.depth+2}`:"p"),g=L(()=>n.value?void 0:"button"),V=L(()=>[[`level-${t.depth}`],{collapsible:a.value},{collapsed:o.value},{"is-link":n.value},{"is-active":l.value},{"has-active":u.value}]);function M(x){"key"in x&&x.key!=="Enter"||!t.item.link&&v()}function C(){t.item.link&&v()}return(x,A)=>{const z=j("VPSidebarItem",!0);return s(),$(B(b.value),{class:I(["VPSidebarItem",V.value])},{default:m(()=>[e.item.text?(s(),c("div",q({key:0,class:"item",role:g.value},Ge(e.item.items?{click:M,keydown:M}:{},!0),{tabindex:e.item.items&&0}),[A[1]||(A[1]=i("div",{class:"indicator"},null,-1)),e.item.link?(s(),$(D,{key:0,tag:P.value,class:"link",href:e.item.link,rel:e.item.rel,target:e.item.target},{default:m(()=>[(s(),$(B(h.value),{class:"text",innerHTML:e.item.text},null,8,["innerHTML"]))]),_:1},8,["tag","href","rel","target"])):(s(),$(B(h.value),{key:1,class:"text",innerHTML:e.item.text},null,8,["innerHTML"])),e.item.collapsed!=null&&e.item.items&&e.item.items.length?(s(),c("div",{key:2,class:"caret",role:"button","aria-label":"toggle section",onClick:C,onKeydown:Ue(C,["enter"]),tabindex:"0"},[...A[0]||(A[0]=[i("span",{class:"vpi-chevron-right caret-icon"},null,-1)])],32)):p("",!0)],16,ps)):p("",!0),e.item.items&&e.item.items.length?(s(),c("div",bs,[e.depth<5?(s(!0),c(N,{key:0},H(e.item.items,W=>(s(),$(z,{key:W.text,item:W,depth:e.depth+1},null,8,["item","depth"]))),128)):p("",!0)])):p("",!0)]),_:1},8,["class"])}}}),ks=y(gs,[["__scopeId","data-v-b3fd67f8"]]),_s=k({__name:"VPSidebarGroup",props:{items:{}},setup(e){const t=T(!0);let o=null;return F(()=>{o=setTimeout(()=>{o=null,t.value=!1},300)}),je(()=>{o!=null&&(clearTimeout(o),o=null)}),(a,n)=>(s(!0),c(N,null,H(e.items,l=>(s(),c("div",{key:l.text,class:I(["group",{"no-transition":t.value}])},[_(ks,{item:l,depth:0},null,8,["item"])],2))),128))}}),$s=y(_s,[["__scopeId","data-v-c40bc020"]]),ys={class:"nav",id:"VPSidebarNav","aria-labelledby":"sidebar-aria-label",tabindex:"-1"},Ps=k({__name:"VPSidebar",props:{open:{type:Boolean}},setup(e){const{sidebarGroups:t,hasSidebar:o}=O(),a=e,n=T(null),l=we(oe?document.body:null);E([a,n],()=>{var f;a.open?(l.value=!0,(f=n.value)==null||f.focus()):l.value=!1},{immediate:!0,flush:"post"});const u=T(0);return E(t,()=>{u.value+=1},{deep:!0}),(f,v)=>r(o)?(s(),c("aside",{key:0,class:I(["VPSidebar",{open:e.open}]),ref_key:"navEl",ref:n,onClick:v[0]||(v[0]=We(()=>{},["stop"]))},[v[2]||(v[2]=i("div",{class:"curtain"},null,-1)),i("nav",ys,[v[1]||(v[1]=i("span",{class:"visually-hidden",id:"sidebar-aria-label"}," Sidebar Navigation ",-1)),d(f.$slots,"sidebar-nav-before",{},void 0,!0),(s(),$($s,{items:r(t),key:u.value},null,8,["items"])),d(f.$slots,"sidebar-nav-after",{},void 0,!0)])],2)):p("",!0)}}),Ls=y(Ps,[["__scopeId","data-v-319d5ca6"]]),Vs=k({__name:"VPSkipLink",setup(e){const{theme:t}=w(),o=ee(),a=T();E(()=>o.path,()=>a.value.focus());function n({target:l}){const u=document.getElementById(decodeURIComponent(l.hash).slice(1));if(u){const f=()=>{u.removeAttribute("tabindex"),u.removeEventListener("blur",f)};u.setAttribute("tabindex","-1"),u.addEventListener("blur",f),u.focus(),window.scrollTo(0,0)}}return(l,u)=>(s(),c(N,null,[i("span",{ref_key:"backToTop",ref:a,tabindex:"-1"},null,512),i("a",{href:"#VPContent",class:"VPSkipLink visually-hidden",onClick:n},S(r(t).skipToContentLabel||"Skip to content"),1)],64))}}),Ss=y(Vs,[["__scopeId","data-v-0b0ada53"]]),ws=k({__name:"Layout",setup(e){const{isOpen:t,open:o,close:a}=O(),n=ee();E(()=>n.path,a),ut(t,a);const{frontmatter:l}=w(),u=Re(),f=L(()=>!!u["home-hero-image"]);return xe("hero-image-slot-exists",f),(v,b)=>{const P=j("Content");return r(l).layout!==!1?(s(),c("div",{key:0,class:I(["Layout",r(l).pageClass])},[d(v.$slots,"layout-top",{},void 0,!0),_(Ss),_(Xe,{class:"backdrop",show:r(t),onClick:r(a)},null,8,["show","onClick"]),_(hs,null,{"nav-bar-title-before":m(()=>[d(v.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":m(()=>[d(v.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":m(()=>[d(v.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":m(()=>[d(v.$slots,"nav-bar-content-after",{},void 0,!0)]),"nav-screen-content-before":m(()=>[d(v.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":m(()=>[d(v.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3}),_(ia,{open:r(t),onOpenMenu:r(o)},null,8,["open","onOpenMenu"]),_(Ls,{open:r(t)},{"sidebar-nav-before":m(()=>[d(v.$slots,"sidebar-nav-before",{},void 0,!0)]),"sidebar-nav-after":m(()=>[d(v.$slots,"sidebar-nav-after",{},void 0,!0)]),_:3},8,["open"]),_(jo,null,{"page-top":m(()=>[d(v.$slots,"page-top",{},void 0,!0)]),"page-bottom":m(()=>[d(v.$slots,"page-bottom",{},void 0,!0)]),"not-found":m(()=>[d(v.$slots,"not-found",{},void 0,!0)]),"home-hero-before":m(()=>[d(v.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":m(()=>[d(v.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":m(()=>[d(v.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":m(()=>[d(v.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":m(()=>[d(v.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":m(()=>[d(v.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":m(()=>[d(v.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":m(()=>[d(v.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":m(()=>[d(v.$slots,"home-features-after",{},void 0,!0)]),"doc-footer-before":m(()=>[d(v.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":m(()=>[d(v.$slots,"doc-before",{},void 0,!0)]),"doc-after":m(()=>[d(v.$slots,"doc-after",{},void 0,!0)]),"doc-top":m(()=>[d(v.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":m(()=>[d(v.$slots,"doc-bottom",{},void 0,!0)]),"aside-top":m(()=>[d(v.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":m(()=>[d(v.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":m(()=>[d(v.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":m(()=>[d(v.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":m(()=>[d(v.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":m(()=>[d(v.$slots,"aside-ads-after",{},void 0,!0)]),_:3}),_(Yo),d(v.$slots,"layout-bottom",{},void 0,!0)],2)):(s(),$(P,{key:1}))}}}),xs=y(ws,[["__scopeId","data-v-5d98c3a5"]]),Ts={Layout:xs,enhanceApp:({app:e})=>{e.component("Badge",Ke)}},Ns={class:"home-table-wrapper"},Ms={class:"home-table"},Is=["href"],Cs={style:{"text-align":"center"}},As={style:{"text-align":"center"}},Hs={style:{"text-align":"center"}},Bs=["disabled","title","onClick"],Ds={key:0,class:"pdf-btn-loading"},Es={key:1},Fs=k({__name:"HomeTable",setup(e){const{site:t}=fe(),o=[{name:"Desbravador 4.1 / 3.1 / 3.0 Smart",primaryLink:"/desbravador-41/local/requisitos-hardware",docPages:["/desbravador-41/local/requisitos-hardware","/desbravador-41/cloud/requisitos-cloud"],hasLocal:!0,hasCloud:!0},{name:"POS Fast by Desbravador",primaryLink:"/desbravador-posfast/local/requisitos-hardware",docPages:["/desbravador-posfast/local/requisitos-hardware"],hasLocal:!0,hasCloud:!1},{name:"Light Web Plus / 3.0 Web Plus",primaryLink:"/light-web-plus/local/requisitos-hardware",docPages:["/light-web-plus/local/requisitos-hardware"],hasLocal:!0,hasCloud:!0},{name:"Gas Station / Liquor Store",primaryLink:"/gas-station/local/requisitos-hardware",docPages:["/gas-station/local/requisitos-hardware"],hasLocal:!0,hasCloud:!1},{name:"Easy Web / Light Web / 3.0 Web",primaryLink:"/light-web/local/requisitos-hardware",docPages:["/light-web/local/requisitos-hardware"],hasLocal:!1,hasCloud:!0},{name:"Desbravador Enterprise / 4.0",primaryLink:"/desbravador-enterprise/",docPages:["/desbravador-enterprise/","/desbravador-enterprise/local/requisitos-hardware","/desbravador-enterprise/hibrido/requisitos-hardware","/desbravador-enterprise/cloud/requisitos-hardware"],hasLocal:!0,hasCloud:!0}],a=[{title:"Fechaduras e Tarifadores Homologados",path:"/perifericos/fechaduras-homologadas"},{title:"Impressoras Homologadas",path:"/perifericos/impressoras-homologadas"},{title:"Pinpads Homologados",path:"/perifericos/pinpads-homologados"},{title:"Sistemas de TEF Homologados",path:"/perifericos/tef-homologados"},{title:"Dispositivos iPDV e PDV Homologados",path:"/perifericos/dispositivos-ipdv-pdv"},{title:"SAT / MFE Homologados",path:"/perifericos/sat-mfe-homologados"}],n=T(null);function l(v){const b=(t.value.base||"/").replace(/\/$/,"");return`${window.location.origin}${b}${v}`}async function u(v){try{const b=await fetch(l(v));if(!b.ok)return null;const P=await b.text(),V=new DOMParser().parseFromString(P,"text/html").querySelector(".vp-doc");if(!V)return null;V.querySelectorAll(".header-anchor").forEach(x=>x.remove()),V.querySelectorAll("[tabindex]").forEach(x=>x.removeAttribute("tabindex")),V.querySelectorAll("script").forEach(x=>x.remove());const M=window.location.origin,C=(t.value.base||"/").replace(/\/$/,"");return V.querySelectorAll("a[href]").forEach(x=>{const A=x.getAttribute("href");A&&A.startsWith("/")&&x.setAttribute("href",`${M}${A}`)}),V.querySelectorAll("img[src]").forEach(x=>{const A=x.getAttribute("src");A&&A.startsWith("/")&&x.setAttribute("src",`${M}${A}`)}),V.innerHTML}catch{return null}}async function f(v){n.value=v.name;try{const[b,P]=await Promise.all([Promise.all(v.docPages.map(x=>u(x))),Promise.all(a.map(x=>u(x.path)))]);let h="",g=!0;b.forEach(x=>{x&&(h+=`<section class="${g?"doc-section first-section":"doc-section"}">${x}</section>`,g=!1)}),P.some(x=>x!==null)&&(h+=`<section class="doc-section appendix-divider">
        <div class="appendix-divider-inner">
          <p class="appendix-label">Anexo</p>
          <h1>Periféricos Homologados</h1>
          <p>Relação de periféricos homologados para uso com os sistemas Desbravador.</p>
        </div>
      </section>`,P.forEach(x=>{x&&(h+=`<section class="doc-section">${x}</section>`)}));const M=window.open("","_blank","width=900,height=700");if(!M){alert("Permita pop-ups neste site para gerar o PDF.");return}const C=new Date().toLocaleDateString("pt-BR",{day:"2-digit",month:"long",year:"numeric"});M.document.write(`<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${v.name} — Documentação Técnica Desbravador</title>
  <style>
    @page {
      size: A4;
      margin: 2cm 2.5cm 2.5cm 2.5cm;
    }

    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      font-size: 10.5pt;
      line-height: 1.65;
      color: #1c1c1c;
      background: #fff;
    }

    /* ── Capa ── */
    .cover {
      padding: 6rem 0 4rem;
      border-bottom: 4px solid #1a5fa8;
      margin-bottom: 0;
      break-after: page;
      page-break-after: always;
    }
    .cover-eyebrow {
      font-size: 8.5pt;
      font-weight: 600;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #6b7280;
      margin-bottom: 2.5rem;
    }
    .cover-title {
      font-size: 26pt;
      font-weight: 700;
      color: #1a5fa8;
      line-height: 1.15;
      margin-bottom: 1rem;
    }
    .cover-subtitle {
      font-size: 11pt;
      color: #4b5563;
      margin-bottom: 0.4rem;
    }
    .cover-date {
      margin-top: 3rem;
      font-size: 8.5pt;
      color: #9ca3af;
    }

    /* ── Seções de conteúdo ── */
    .doc-section {
      break-before: page;
      page-break-before: always;
      padding-top: 0.5rem;
    }
    .first-section {
      break-before: auto;
      page-break-before: auto;
    }

    /* ── Divisor do Anexo ── */
    .appendix-divider {
      display: flex;
      align-items: center;
      min-height: 60mm;
    }
    .appendix-divider-inner {
      border-left: 5px solid #1a5fa8;
      padding: 1.5rem 2rem;
    }
    .appendix-label {
      font-size: 8pt;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: #1a5fa8;
      margin-bottom: 0.5rem;
    }
    .appendix-divider-inner h1 {
      font-size: 20pt;
      color: #111827;
      border: none;
      padding: 0;
      margin: 0 0 0.5rem;
    }
    .appendix-divider-inner p {
      color: #6b7280;
      font-size: 10pt;
      margin: 0;
    }

    /* ── Tipografia ── */
    h1 {
      font-size: 16pt;
      font-weight: 700;
      color: #111827;
      margin: 1.6rem 0 0.6rem;
      padding-bottom: 0.4rem;
      border-bottom: 1.5px solid #e5e7eb;
      break-after: avoid;
      page-break-after: avoid;
    }
    h2 {
      font-size: 13pt;
      font-weight: 700;
      color: #1f2937;
      margin: 1.3rem 0 0.5rem;
      break-after: avoid;
      page-break-after: avoid;
    }
    h3 {
      font-size: 11pt;
      font-weight: 700;
      color: #374151;
      margin: 1rem 0 0.35rem;
      break-after: avoid;
      page-break-after: avoid;
    }
    h4 {
      font-size: 10.5pt;
      font-weight: 600;
      color: #4b5563;
      margin: 0.8rem 0 0.3rem;
      break-after: avoid;
      page-break-after: avoid;
    }

    p { margin: 0.5rem 0; }

    ul, ol { padding-left: 1.4rem; margin: 0.4rem 0; }
    li { margin: 0.2rem 0; }
    li > ul, li > ol { margin: 0.2rem 0; }

    strong { font-weight: 700; }
    em { font-style: italic; }

    hr {
      border: none;
      border-top: 1px solid #e5e7eb;
      margin: 1.2rem 0;
    }

    /* ── Tabelas ── */
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 0.8rem 0 1rem;
      font-size: 9.5pt;
      break-inside: avoid;
      page-break-inside: avoid;
    }
    thead { break-inside: avoid; page-break-inside: avoid; }
    th {
      background: #1a5fa8;
      color: #fff;
      padding: 0.45rem 0.65rem;
      text-align: left;
      font-weight: 600;
      font-size: 9pt;
      border: 1px solid #1a5fa8;
    }
    td {
      padding: 0.4rem 0.65rem;
      border: 1px solid #d1d5db;
      vertical-align: top;
      line-height: 1.5;
    }
    tr { break-inside: avoid; page-break-inside: avoid; }
    tr:nth-child(even) td { background: #f9fafb; }
    tr:hover td { background: inherit; }

    /* ── Código ── */
    code {
      font-family: 'SFMono-Regular', 'Cascadia Code', Consolas, 'Liberation Mono', Menlo, monospace;
      font-size: 9pt;
      background: #f3f4f6;
      color: #1f2937;
      padding: 0.1em 0.35em;
      border-radius: 3px;
      border: 1px solid #e5e7eb;
    }
    pre {
      background: #f8f9fa;
      border: 1px solid #e5e7eb;
      border-radius: 5px;
      padding: 0.85rem 1rem;
      margin: 0.75rem 0;
      font-size: 9pt;
      white-space: pre-wrap;
      word-break: break-word;
      break-inside: avoid;
      page-break-inside: avoid;
    }
    pre code {
      background: none;
      border: none;
      padding: 0;
      font-size: inherit;
    }

    /* ── Blockquotes (⚠️ / ℹ️) ── */
    blockquote {
      border-left: 4px solid #f59e0b;
      background: #fffbeb;
      padding: 0.6rem 1rem;
      margin: 0.75rem 0;
      border-radius: 0 4px 4px 0;
      break-inside: avoid;
      page-break-inside: avoid;
    }
    blockquote p { margin: 0; color: #78350f; }

    /* ── Custom blocks VitePress ── */
    .custom-block {
      padding: 0.7rem 1rem;
      border-radius: 5px;
      margin: 0.75rem 0;
      border-left: 4px solid;
      break-inside: avoid;
      page-break-inside: avoid;
    }
    .custom-block-title {
      font-weight: 700;
      font-size: 9.5pt;
      margin-bottom: 0.3rem;
    }
    .custom-block.tip    { border-color: #10b981; background: #ecfdf5; }
    .custom-block.tip    .custom-block-title { color: #065f46; }
    .custom-block.info   { border-color: #3b82f6; background: #eff6ff; }
    .custom-block.info   .custom-block-title { color: #1e40af; }
    .custom-block.warning { border-color: #f59e0b; background: #fffbeb; }
    .custom-block.warning .custom-block-title { color: #92400e; }
    .custom-block.danger  { border-color: #ef4444; background: #fef2f2; }
    .custom-block.danger  .custom-block-title { color: #991b1b; }

    /* ── Links ── */
    a { color: #1a5fa8; text-decoration: none; }

    /* ── SVG / Mermaid ── */
    svg {
      max-width: 100%;
      height: auto;
      display: block;
      margin: 0.75rem auto;
    }
    .mermaid { text-align: center; }

    /* ── Ocultar no print: links de âncora, botão editar ── */
    @media print {
      .header-anchor { display: none; }
      a[href]::after { content: none !important; }
      .doc-section { break-before: page; page-break-before: always; }
      .first-section { break-before: auto; page-break-before: auto; }
      h1, h2, h3, h4 { break-after: avoid; page-break-after: avoid; }
      table, pre, blockquote, .custom-block {
        break-inside: avoid;
        page-break-inside: avoid;
      }
    }
  </style>
</head>
<body>
  <div class="cover">
    <p class="cover-eyebrow">Desbravador Software Ltda. — Documentação Técnica</p>
    <h1 class="cover-title">${v.name}</h1>
    <p class="cover-subtitle">Requisitos de hardware, software e configuração</p>
    <p class="cover-subtitle">Inclui periféricos homologados como anexo</p>
    <p class="cover-date">Gerado em ${C}</p>
  </div>
  ${h}
  <script>
    window.onload = function () {
      setTimeout(function () { window.print(); }, 500)
    }
  <\/script>
</body>
</html>`),M.document.close()}finally{n.value=null}}return(v,b)=>(s(),c("div",Ns,[i("table",Ms,[b[0]||(b[0]=i("thead",null,[i("tr",null,[i("th",null,"Sistema"),i("th",{style:{"text-align":"center"}},"Instalação Local"),i("th",{style:{"text-align":"center"}},"Instalação Cloud"),i("th",{style:{"text-align":"center"}},"PDF")])],-1)),i("tbody",null,[(s(),c(N,null,H(o,P=>i("tr",{key:P.name},[i("td",null,[i("a",{href:r(Y)(P.primaryLink)},S(P.name),9,Is)]),i("td",Cs,S(P.hasLocal?"✅":"—"),1),i("td",As,S(P.hasCloud?"✅":"—"),1),i("td",Hs,[i("button",{class:"pdf-btn",disabled:n.value===P.name,title:`Gerar PDF de ${P.name}`,onClick:h=>f(P)},[n.value===P.name?(s(),c("span",Ds,"⏳")):(s(),c("span",Es,"🖨️ PDF"))],8,Bs)])])),64))])])]))}}),Os=y(Fs,[["__scopeId","data-v-6c5ce909"]]),zs={class:"pl-root"},qs={key:0,class:"pl-controls no-print","aria-hidden":"true"},Gs={class:"pl-page-header"},Us={class:"pl-header-inner"},js={class:"pl-header-left"},Ws=["src","alt"],Rs={key:1,class:"pl-header-logo-text"},Ks={class:"pl-header-right"},Js={class:"pl-body"},Ys={class:"pl-title-block"},Xs={class:"pl-title"},Qs={key:0,class:"pl-subtitle"},Zs={key:1,class:"pl-meta"},er={class:"pl-content"},tr={class:"pl-page-footer"},or={class:"pl-footer-inner"},ar={class:"pl-footer-app"},nr={class:"pl-footer-date"},sr=k({__name:"PrintLayout",props:{title:{},subtitle:{},logo:{},printedBy:{},footerText:{},orientation:{default:"portrait"},paperSize:{default:"A4"},filters:{default:()=>[]},showDateTime:{type:Boolean,default:!0},appName:{default:"Desbravador Docs"},showPrintButton:{type:Boolean,default:!0}},setup(e){const t=e,{site:o}=fe(),n=new Date().toLocaleString("pt-BR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"}),l=L(()=>{var V;if(t.logo)return t.logo;const h=(V=o.value.themeConfig)==null?void 0:V.logo;if(!h)return null;const g=(o.value.base||"/").replace(/\/$/,"");return typeof h=="string"?`${g}${h}`:null}),u=L(()=>t.footerText||t.appName),f=L(()=>{var h;return t.showDateTime||!!t.printedBy||(((h=t.filters)==null?void 0:h.length)??0)>0});function v(h,g){return`
/* PrintLayout — estilos globais de impressão */

@page {
  size: ${g} ${h};
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
    font-size: 10.5pt !important;
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
`}let b=null;F(()=>{b=document.createElement("style"),b.id="pl-global-print-styles",b.textContent=v(t.orientation,t.paperSize),document.head.appendChild(b)}),Q(()=>{b==null||b.remove(),b=null});function P(){window.print()}return(h,g)=>(s(),c("div",zs,[e.showPrintButton?(s(),c("div",qs,[d(h.$slots,"controls",{},()=>[i("button",{class:"pl-print-btn",onClick:P},[...g[0]||(g[0]=[i("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[i("polyline",{points:"6 9 6 2 18 2 18 9"}),i("path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"}),i("rect",{x:"6",y:"14",width:"12",height:"8"})],-1),G(" Imprimir / Salvar PDF ",-1)])])],!0)])):p("",!0),i("div",{class:I(["pl-document",[`pl-paper-${e.paperSize.toLowerCase()}`,`pl-orient-${e.orientation}`]])},[i("header",Gs,[d(h.$slots,"header",{},()=>[i("div",Us,[i("div",js,[l.value?(s(),c("img",{key:0,src:l.value,class:"pl-header-logo",alt:e.appName},null,8,Ws)):(s(),c("span",Rs,S(e.appName),1))]),i("div",Ks,S(e.appName),1)]),g[1]||(g[1]=i("div",{class:"pl-header-rule"},null,-1))],!0)]),i("div",Js,[i("div",Ys,[i("h1",Xs,S(e.title),1),e.subtitle?(s(),c("p",Qs,S(e.subtitle),1)):p("",!0),f.value?(s(),c("dl",Zs,[e.showDateTime?(s(),c(N,{key:0},[g[2]||(g[2]=i("dt",null,"Data:",-1)),i("dd",null,S(r(n)),1)],64)):p("",!0),e.printedBy?(s(),c(N,{key:1},[g[3]||(g[3]=i("dt",null,"Usuário:",-1)),i("dd",null,S(e.printedBy),1)],64)):p("",!0),(s(!0),c(N,null,H(e.filters,V=>(s(),c(N,{key:V.label},[i("dt",null,S(V.label)+":",1),i("dd",null,S(V.value),1)],64))),128)),d(h.$slots,"meta",{},void 0,!0)])):p("",!0)]),g[4]||(g[4]=i("hr",{class:"pl-divider"},null,-1)),i("main",er,[d(h.$slots,"default",{},void 0,!0)])]),i("footer",tr,[d(h.$slots,"footer",{},()=>[i("div",or,[i("span",ar,S(u.value),1),g[5]||(g[5]=i("span",{class:"pl-footer-page"},null,-1)),i("span",nr,"Gerado em "+S(r(n)),1)]),g[6]||(g[6]=i("div",{class:"pl-footer-rule"},null,-1))],!0)])],2)]))}}),rr=y(sr,[["__scopeId","data-v-d4bc27c6"]]),lr={extends:Ts,enhanceApp({app:e}){e.component("HomeTable",Os),e.component("PrintLayout",rr)}};export{lr as R,dn as c,w as u};
