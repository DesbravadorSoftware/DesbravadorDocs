const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/VPLocalSearchBox.DlQLm2wP.js","assets/chunks/framework.CPTW7DhK.js"])))=>i.map(i=>d[i]);
import{r as b,j as l,Z as u,H as C,Q as r,n as O,a4 as _,h as w,ax as f,b as pe,i as v,c as y,ae as Q,z as Be,a8 as De,aw as Z,d as S,g as s,aa as c,y as W,ah as le,X as A,as as q,au as ee,N as R,O as te,av as fe,P as Ee,t as He,F as M,Y as B,$ as K,L as oe,o as $,a1 as Pe,a0 as z,E as we,aj as ae,D as U,x as ne,aq as ze,I as ve,M as ce,G as xe,ap as Le,v as re,W as Fe,q as Oe,_ as qe,al as Se,V as Ve,a5 as Re,az as je,K as Ge,aA as Ue,an as We}from"./framework.CPTW7DhK.js";const Ke=b({__name:"VPBadge",props:{text:{},type:{default:"tip"}},setup(e){return(t,o)=>(r(),l("span",{class:C(["VPBadge",e.type])},[u(t.$slots,"default",{},()=>[O(_(e.text),1)])],2))}}),Je={key:0,class:"VPBackdrop"},Ye=b({__name:"VPBackdrop",props:{show:{type:Boolean}},setup(e){return(t,o)=>(r(),w(pe,{name:"fade"},{default:f(()=>[e.show?(r(),l("div",Je)):v("",!0)]),_:1}))}}),Xe=y(Ye,[["__scopeId","data-v-c79a1216"]]),I=Q;function Qe(e,t){let o,a=!1;return()=>{o&&clearTimeout(o),a?o=setTimeout(e,t):(e(),(a=!0)&&setTimeout(()=>a=!1,t))}}function de(e){return e.startsWith("/")?e:`/${e}`}function he(e){const{pathname:t,search:o,hash:a,protocol:n}=new URL(e,"http://a.com");if(Be(e)||e.startsWith("#")||!n.startsWith("http")||!De(t))return e;const{site:i}=I(),d=t.endsWith("/")||t.endsWith(".html")?e:e.replace(/(?:(^\.+)\/)?.*$/,`$1${t.replace(/(\.md)?$/,i.value.cleanUrls?"":".html")}${o}${a}`);return Z(d)}function J({correspondingLink:e=!1}={}){const{site:t,localeIndex:o,page:a,theme:n,hash:i}=I(),d=S(()=>{var m,g;return{label:(m=t.value.locales[o.value])==null?void 0:m.label,link:((g=t.value.locales[o.value])==null?void 0:g.link)||(o.value==="root"?"/":`/${o.value}/`)}});return{localeLinks:S(()=>Object.entries(t.value.locales).flatMap(([m,g])=>d.value.label===g.label?[]:{text:g.label,link:Ze(g.link||(m==="root"?"/":`/${m}/`),n.value.i18nRouting!==!1&&e,a.value.relativePath.slice(d.value.link.length-1),!t.value.cleanUrls)+i.value})),currentLang:d}}function Ze(e,t,o,a){return t?e.replace(/\/$/,"")+de(o.replace(/(^|\/)index\.md$/,"$1").replace(/\.md$/,a?".html":"")):e}const et={class:"NotFound"},tt={class:"code"},ot={class:"title"},at={class:"quote"},nt={class:"action"},rt=["href","aria-label"],st=b({__name:"NotFound",setup(e){const{theme:t}=I(),{currentLang:o}=J();return(a,n)=>{var i,d,p,m,g;return r(),l("div",et,[s("p",tt,_(((i=c(t).notFound)==null?void 0:i.code)??"404"),1),s("h1",ot,_(((d=c(t).notFound)==null?void 0:d.title)??"PAGE NOT FOUND"),1),n[0]||(n[0]=s("div",{class:"divider"},null,-1)),s("blockquote",at,_(((p=c(t).notFound)==null?void 0:p.quote)??"But if you don't change your direction, and if you keep looking, you may end up where you are heading."),1),s("div",nt,[s("a",{class:"link",href:c(Z)(c(o).link),"aria-label":((m=c(t).notFound)==null?void 0:m.linkLabel)??"go to home"},_(((g=c(t).notFound)==null?void 0:g.linkText)??"Take me home"),9,rt)])])}}}),it=y(st,[["__scopeId","data-v-d6be1790"]]);function Te(e,t){if(Array.isArray(e))return Y(e);if(e==null)return[];t=de(t);const o=Object.keys(e).sort((n,i)=>i.split("/").length-n.split("/").length).find(n=>t.startsWith(de(n))),a=o?e[o]:[];return Array.isArray(a)?Y(a):Y(a.items,a.base)}function lt(e){const t=[];let o=0;for(const a in e){const n=e[a];if(n.items){o=t.push(n);continue}t[o]||t.push({items:[]}),t[o].items.push(n)}return t}function ct(e){const t=[];function o(a){for(const n of a)n.text&&n.link&&t.push({text:n.text,link:n.link,docFooterText:n.docFooterText}),n.items&&o(n.items)}return o(e),t}function ue(e,t){return Array.isArray(t)?t.some(o=>ue(e,o)):W(e,t.link)?!0:t.items?ue(e,t.items):!1}function Y(e,t){return[...e].map(o=>{const a={...o},n=a.base||t;return n&&a.link&&(a.link=n+a.link),a.items&&(a.items=Y(a.items,n)),a})}function j(){const{frontmatter:e,page:t,theme:o}=I(),a=le("(min-width: 960px)"),n=A(!1),i=S(()=>{const T=o.value.sidebar,L=t.value.relativePath;return T?Te(T,L):[]}),d=A(i.value);q(i,(T,L)=>{JSON.stringify(T)!==JSON.stringify(L)&&(d.value=i.value)});const p=S(()=>e.value.sidebar!==!1&&d.value.length>0&&e.value.layout!=="home"),m=S(()=>g?e.value.aside==null?o.value.aside==="left":e.value.aside==="left":!1),g=S(()=>e.value.layout==="home"?!1:e.value.aside!=null?!!e.value.aside:o.value.aside!==!1),P=S(()=>p.value&&a.value),h=S(()=>p.value?lt(d.value):[]);function k(){n.value=!0}function V(){n.value=!1}function x(){n.value?V():k()}return{isOpen:n,sidebar:d,sidebarGroups:h,hasSidebar:p,hasAside:g,leftAside:m,isSidebarEnabled:P,open:k,close:V,toggle:x}}function dt(e,t){let o;ee(()=>{o=e.value?document.activeElement:void 0}),R(()=>{window.addEventListener("keyup",a)}),te(()=>{window.removeEventListener("keyup",a)});function a(n){n.key==="Escape"&&e.value&&(t(),o==null||o.focus())}}function ut(e){const{page:t,hash:o}=I(),a=A(!1),n=S(()=>e.value.collapsed!=null),i=S(()=>!!e.value.link),d=A(!1),p=()=>{d.value=W(t.value.relativePath,e.value.link)};q([t,e,o],p),R(p);const m=S(()=>d.value?!0:e.value.items?ue(t.value.relativePath,e.value.items):!1),g=S(()=>!!(e.value.items&&e.value.items.length));ee(()=>{a.value=!!(n.value&&e.value.collapsed)}),fe(()=>{(d.value||m.value)&&(a.value=!1)});function P(){n.value&&(a.value=!a.value)}return{collapsed:a,collapsible:n,isLink:i,isActiveLink:d,hasActiveLink:m,hasChildren:g,toggle:P}}function mt(){const{hasSidebar:e}=j(),t=le("(min-width: 960px)"),o=le("(min-width: 1280px)");return{isAsideEnabled:S(()=>!o.value&&!t.value?!1:e.value?o.value:t.value)}}const pt=/\b(?:VPBadge|header-anchor|footnote-ref|ignore-header)\b/,me=[];function Ie(e){return typeof e.outline=="object"&&!Array.isArray(e.outline)&&e.outline.label||e.outlineTitle||"On this page"}function be(e){const t=[...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")].filter(o=>o.id&&o.hasChildNodes()).map(o=>{const a=Number(o.tagName[1]);return{element:o,title:ft(o),link:"#"+o.id,level:a}});return vt(t,e)}function ft(e){let t="";for(const o of e.childNodes)if(o.nodeType===1){if(pt.test(o.className))continue;t+=o.textContent}else o.nodeType===3&&(t+=o.textContent);return t.trim()}function vt(e,t){if(t===!1)return[];const o=(typeof t=="object"&&!Array.isArray(t)?t.level:t)||2,[a,n]=typeof o=="number"?[o,o]:o==="deep"?[2,6]:o;return gt(e,a,n)}function ht(e,t){const{isAsideEnabled:o}=mt(),a=Qe(i,100);let n=null;R(()=>{requestAnimationFrame(i),window.addEventListener("scroll",a)}),Ee(()=>{d(location.hash)}),te(()=>{window.removeEventListener("scroll",a)});function i(){if(!o.value)return;const p=window.scrollY,m=window.innerHeight,g=document.body.offsetHeight,P=Math.abs(p+m-g)<1,h=me.map(({element:V,link:x})=>({link:x,top:bt(V)})).filter(({top:V})=>!Number.isNaN(V)).sort((V,x)=>V.top-x.top);if(!h.length){d(null);return}if(p<1){d(null);return}if(P){d(h[h.length-1].link);return}let k=null;for(const{link:V,top:x}of h){if(x>p+He()+4)break;k=V}d(k)}function d(p){n&&n.classList.remove("active"),p==null?n=null:n=e.value.querySelector(`a[href="${decodeURIComponent(p)}"]`);const m=n;m?(m.classList.add("active"),t.value.style.top=m.offsetTop+39+"px",t.value.style.opacity="1"):(t.value.style.top="33px",t.value.style.opacity="0")}}function bt(e){let t=0;for(;e!==document.body;){if(e===null)return NaN;t+=e.offsetTop,e=e.offsetParent}return t}function gt(e,t,o){me.length=0;const a=[],n=[];return e.forEach(i=>{const d={...i,children:[]};let p=n[n.length-1];for(;p&&p.level>=d.level;)n.pop(),p=n[n.length-1];if(d.element.classList.contains("ignore-header")||p&&"shouldIgnore"in p){n.push({level:d.level,shouldIgnore:!0});return}d.level>o||d.level<t||(me.push({element:d.element,link:d.link}),p?p.children.push(d):a.push(d),n.push(d))}),a}const kt=["href","title"],yt=b({__name:"VPDocOutlineItem",props:{headers:{},root:{type:Boolean}},setup(e){function t({target:o}){const a=o.href.split("#")[1],n=document.getElementById(decodeURIComponent(a));n==null||n.focus({preventScroll:!0})}return(o,a)=>{const n=K("VPDocOutlineItem",!0);return r(),l("ul",{class:C(["VPDocOutlineItem",e.root?"root":"nested"])},[(r(!0),l(M,null,B(e.headers,({children:i,link:d,title:p})=>(r(),l("li",null,[s("a",{class:"outline-link",href:d,onClick:t,title:p},_(p),9,kt),i!=null&&i.length?(r(),w(n,{key:0,headers:i},null,8,["headers"])):v("",!0)]))),256))],2)}}}),Ne=y(yt,[["__scopeId","data-v-b933a997"]]),_t={class:"content"},$t={"aria-level":"2",class:"outline-title",id:"doc-outline-aria-label",role:"heading"},Pt=b({__name:"VPDocAsideOutline",setup(e){const{frontmatter:t,theme:o}=I(),a=Pe([]);oe(()=>{a.value=be(t.value.outline??o.value.outline)});const n=A(),i=A();return ht(n,i),(d,p)=>(r(),l("nav",{"aria-labelledby":"doc-outline-aria-label",class:C(["VPDocAsideOutline",{"has-outline":a.value.length>0}]),ref_key:"container",ref:n},[s("div",_t,[s("div",{class:"outline-marker",ref_key:"marker",ref:i},null,512),s("div",$t,_(c(Ie)(c(o))),1),$(Ne,{headers:a.value,root:!0},null,8,["headers"])])],2))}}),wt=y(Pt,[["__scopeId","data-v-a5bbad30"]]),xt={class:"VPDocAsideCarbonAds"},Lt=b({__name:"VPDocAsideCarbonAds",props:{carbonAds:{}},setup(e){const t=()=>null;return(o,a)=>(r(),l("div",xt,[$(c(t),{"carbon-ads":e.carbonAds},null,8,["carbon-ads"])]))}}),St={class:"VPDocAside"},Vt=b({__name:"VPDocAside",setup(e){const{theme:t}=I();return(o,a)=>(r(),l("div",St,[u(o.$slots,"aside-top",{},void 0,!0),u(o.$slots,"aside-outline-before",{},void 0,!0),$(wt),u(o.$slots,"aside-outline-after",{},void 0,!0),a[0]||(a[0]=s("div",{class:"spacer"},null,-1)),u(o.$slots,"aside-ads-before",{},void 0,!0),c(t).carbonAds?(r(),w(Lt,{key:0,"carbon-ads":c(t).carbonAds},null,8,["carbon-ads"])):v("",!0),u(o.$slots,"aside-ads-after",{},void 0,!0),u(o.$slots,"aside-bottom",{},void 0,!0)]))}}),Tt=y(Vt,[["__scopeId","data-v-3f215769"]]);function It(){const{theme:e,page:t}=I();return S(()=>{const{text:o="Edit this page",pattern:a=""}=e.value.editLink||{};let n;return typeof a=="function"?n=a(t.value):n=a.replace(/:path/g,t.value.filePath),{url:n,text:o}})}function Nt(){const{page:e,theme:t,frontmatter:o}=I();return S(()=>{var g,P,h,k,V,x,T,L;const a=Te(t.value.sidebar,e.value.relativePath),n=ct(a),i=Ct(n,N=>N.link.replace(/[?#].*$/,"")),d=i.findIndex(N=>W(e.value.relativePath,N.link)),p=((g=t.value.docFooter)==null?void 0:g.prev)===!1&&!o.value.prev||o.value.prev===!1,m=((P=t.value.docFooter)==null?void 0:P.next)===!1&&!o.value.next||o.value.next===!1;return{prev:p?void 0:{text:(typeof o.value.prev=="string"?o.value.prev:typeof o.value.prev=="object"?o.value.prev.text:void 0)??((h=i[d-1])==null?void 0:h.docFooterText)??((k=i[d-1])==null?void 0:k.text),link:(typeof o.value.prev=="object"?o.value.prev.link:void 0)??((V=i[d-1])==null?void 0:V.link)},next:m?void 0:{text:(typeof o.value.next=="string"?o.value.next:typeof o.value.next=="object"?o.value.next.text:void 0)??((x=i[d+1])==null?void 0:x.docFooterText)??((T=i[d+1])==null?void 0:T.text),link:(typeof o.value.next=="object"?o.value.next.link:void 0)??((L=i[d+1])==null?void 0:L.link)}}})}function Ct(e,t){const o=new Set;return e.filter(a=>{const n=t(a);return o.has(n)?!1:o.add(n)})}const F=b({__name:"VPLink",props:{tag:{},href:{},noIcon:{type:Boolean},target:{},rel:{}},setup(e){const t=e,o=S(()=>t.tag??(t.href?"a":"span")),a=S(()=>t.href&&we.test(t.href)||t.target==="_blank");return(n,i)=>(r(),w(z(o.value),{class:C(["VPLink",{link:e.href,"vp-external-link-icon":a.value,"no-icon":e.noIcon}]),href:e.href?c(he)(e.href):void 0,target:e.target??(a.value?"_blank":void 0),rel:e.rel??(a.value?"noreferrer":void 0)},{default:f(()=>[u(n.$slots,"default")]),_:3},8,["class","href","target","rel"]))}}),Mt={class:"VPLastUpdated"},At=["datetime"],Bt=b({__name:"VPDocFooterLastUpdated",setup(e){const{theme:t,page:o,lang:a}=I(),n=S(()=>new Date(o.value.lastUpdated)),i=S(()=>n.value.toISOString()),d=A("");return R(()=>{ee(()=>{var p,m,g;d.value=new Intl.DateTimeFormat((m=(p=t.value.lastUpdated)==null?void 0:p.formatOptions)!=null&&m.forceLocale?a.value:void 0,((g=t.value.lastUpdated)==null?void 0:g.formatOptions)??{dateStyle:"short",timeStyle:"short"}).format(n.value)})}),(p,m)=>{var g;return r(),l("p",Mt,[O(_(((g=c(t).lastUpdated)==null?void 0:g.text)||c(t).lastUpdatedText||"Last updated")+": ",1),s("time",{datetime:i.value},_(d.value),9,At)])}}}),Dt=y(Bt,[["__scopeId","data-v-e98dd255"]]),Et={key:0,class:"VPDocFooter"},Ht={key:0,class:"edit-info"},zt={key:0,class:"edit-link"},Ft={key:1,class:"last-updated"},Ot={key:1,class:"prev-next","aria-labelledby":"doc-footer-aria-label"},qt={class:"pager"},Rt=["innerHTML"],jt=["innerHTML"],Gt={class:"pager"},Ut=["innerHTML"],Wt=["innerHTML"],Kt=b({__name:"VPDocFooter",setup(e){const{theme:t,page:o,frontmatter:a}=I(),n=It(),i=Nt(),d=S(()=>t.value.editLink&&a.value.editLink!==!1),p=S(()=>o.value.lastUpdated),m=S(()=>d.value||p.value||i.value.prev||i.value.next);return(g,P)=>{var h,k,V,x;return m.value?(r(),l("footer",Et,[u(g.$slots,"doc-footer-before",{},void 0,!0),d.value||p.value?(r(),l("div",Ht,[d.value?(r(),l("div",zt,[$(F,{class:"edit-link-button",href:c(n).url,"no-icon":!0},{default:f(()=>[P[0]||(P[0]=s("span",{class:"vpi-square-pen edit-link-icon"},null,-1)),O(" "+_(c(n).text),1)]),_:1},8,["href"])])):v("",!0),p.value?(r(),l("div",Ft,[$(Dt)])):v("",!0)])):v("",!0),(h=c(i).prev)!=null&&h.link||(k=c(i).next)!=null&&k.link?(r(),l("nav",Ot,[P[1]||(P[1]=s("span",{class:"visually-hidden",id:"doc-footer-aria-label"},"Pager",-1)),s("div",qt,[(V=c(i).prev)!=null&&V.link?(r(),w(F,{key:0,class:"pager-link prev",href:c(i).prev.link},{default:f(()=>{var T;return[s("span",{class:"desc",innerHTML:((T=c(t).docFooter)==null?void 0:T.prev)||"Previous page"},null,8,Rt),s("span",{class:"title",innerHTML:c(i).prev.text},null,8,jt)]}),_:1},8,["href"])):v("",!0)]),s("div",Gt,[(x=c(i).next)!=null&&x.link?(r(),w(F,{key:0,class:"pager-link next",href:c(i).next.link},{default:f(()=>{var T;return[s("span",{class:"desc",innerHTML:((T=c(t).docFooter)==null?void 0:T.next)||"Next page"},null,8,Ut),s("span",{class:"title",innerHTML:c(i).next.text},null,8,Wt)]}),_:1},8,["href"])):v("",!0)])])):v("",!0)])):v("",!0)}}}),Jt=y(Kt,[["__scopeId","data-v-e257564d"]]),Yt={class:"container"},Xt={class:"aside-container"},Qt={class:"aside-content"},Zt={class:"content"},eo={class:"content-container"},to={class:"main"},oo=b({__name:"VPDoc",setup(e){const{theme:t}=I(),o=ae(),{hasSidebar:a,hasAside:n,leftAside:i}=j(),d=S(()=>o.path.replace(/[./]+/g,"_").replace(/_html$/,""));return(p,m)=>{const g=K("Content");return r(),l("div",{class:C(["VPDoc",{"has-sidebar":c(a),"has-aside":c(n)}])},[u(p.$slots,"doc-top",{},void 0,!0),s("div",Yt,[c(n)?(r(),l("div",{key:0,class:C(["aside",{"left-aside":c(i)}])},[m[0]||(m[0]=s("div",{class:"aside-curtain"},null,-1)),s("div",Xt,[s("div",Qt,[$(Tt,null,{"aside-top":f(()=>[u(p.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":f(()=>[u(p.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":f(()=>[u(p.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":f(()=>[u(p.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":f(()=>[u(p.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":f(()=>[u(p.$slots,"aside-ads-after",{},void 0,!0)]),_:3})])])],2)):v("",!0),s("div",Zt,[s("div",eo,[u(p.$slots,"doc-before",{},void 0,!0),s("main",to,[$(g,{class:C(["vp-doc",[d.value,c(t).externalLinkIcon&&"external-link-icon-enabled"]])},null,8,["class"])]),$(Jt,null,{"doc-footer-before":f(()=>[u(p.$slots,"doc-footer-before",{},void 0,!0)]),_:3}),u(p.$slots,"doc-after",{},void 0,!0)])])]),u(p.$slots,"doc-bottom",{},void 0,!0)],2)}}}),ao=y(oo,[["__scopeId","data-v-39a288b8"]]),no=b({__name:"VPButton",props:{tag:{},size:{default:"medium"},theme:{default:"brand"},text:{},href:{},target:{},rel:{}},setup(e){const t=e,o=S(()=>t.href&&we.test(t.href)),a=S(()=>t.tag||(t.href?"a":"button"));return(n,i)=>(r(),w(z(a.value),{class:C(["VPButton",[e.size,e.theme]]),href:e.href?c(he)(e.href):void 0,target:t.target??(o.value?"_blank":void 0),rel:t.rel??(o.value?"noreferrer":void 0)},{default:f(()=>[O(_(e.text),1)]),_:1},8,["class","href","target","rel"]))}}),ro=y(no,[["__scopeId","data-v-fa7799d5"]]),so=["src","alt"],io=b({inheritAttrs:!1,__name:"VPImage",props:{image:{},alt:{}},setup(e){return(t,o)=>{const a=K("VPImage",!0);return e.image?(r(),l(M,{key:0},[typeof e.image=="string"||"src"in e.image?(r(),l("img",U({key:0,class:"VPImage"},typeof e.image=="string"?t.$attrs:{...e.image,...t.$attrs},{src:c(Z)(typeof e.image=="string"?e.image:e.image.src),alt:e.alt??(typeof e.image=="string"?"":e.image.alt||"")}),null,16,so)):(r(),l(M,{key:1},[$(a,U({class:"dark",image:e.image.dark,alt:e.image.alt},t.$attrs),null,16,["image","alt"]),$(a,U({class:"light",image:e.image.light,alt:e.image.alt},t.$attrs),null,16,["image","alt"])],64))],64)):v("",!0)}}}),X=y(io,[["__scopeId","data-v-8426fc1a"]]),lo={class:"container"},co={class:"main"},uo={class:"heading"},mo=["innerHTML"],po=["innerHTML"],fo=["innerHTML"],vo={key:0,class:"actions"},ho={key:0,class:"image"},bo={class:"image-container"},go=b({__name:"VPHero",props:{name:{},text:{},tagline:{},image:{},actions:{}},setup(e){const t=ne("hero-image-slot-exists");return(o,a)=>(r(),l("div",{class:C(["VPHero",{"has-image":e.image||c(t)}])},[s("div",lo,[s("div",co,[u(o.$slots,"home-hero-info-before",{},void 0,!0),u(o.$slots,"home-hero-info",{},()=>[s("h1",uo,[e.name?(r(),l("span",{key:0,innerHTML:e.name,class:"name clip"},null,8,mo)):v("",!0),e.text?(r(),l("span",{key:1,innerHTML:e.text,class:"text"},null,8,po)):v("",!0)]),e.tagline?(r(),l("p",{key:0,innerHTML:e.tagline,class:"tagline"},null,8,fo)):v("",!0)],!0),u(o.$slots,"home-hero-info-after",{},void 0,!0),e.actions?(r(),l("div",vo,[(r(!0),l(M,null,B(e.actions,n=>(r(),l("div",{key:n.link,class:"action"},[$(ro,{tag:"a",size:"medium",theme:n.theme,text:n.text,href:n.link,target:n.target,rel:n.rel},null,8,["theme","text","href","target","rel"])]))),128))])):v("",!0),u(o.$slots,"home-hero-actions-after",{},void 0,!0)]),e.image||c(t)?(r(),l("div",ho,[s("div",bo,[a[0]||(a[0]=s("div",{class:"image-bg"},null,-1)),u(o.$slots,"home-hero-image",{},()=>[e.image?(r(),w(X,{key:0,class:"image-src",image:e.image},null,8,["image"])):v("",!0)],!0)])])):v("",!0)])],2))}}),ko=y(go,[["__scopeId","data-v-4f9c455b"]]),yo=b({__name:"VPHomeHero",setup(e){const{frontmatter:t}=I();return(o,a)=>c(t).hero?(r(),w(ko,{key:0,class:"VPHomeHero",name:c(t).hero.name,text:c(t).hero.text,tagline:c(t).hero.tagline,image:c(t).hero.image,actions:c(t).hero.actions},{"home-hero-info-before":f(()=>[u(o.$slots,"home-hero-info-before")]),"home-hero-info":f(()=>[u(o.$slots,"home-hero-info")]),"home-hero-info-after":f(()=>[u(o.$slots,"home-hero-info-after")]),"home-hero-actions-after":f(()=>[u(o.$slots,"home-hero-actions-after")]),"home-hero-image":f(()=>[u(o.$slots,"home-hero-image")]),_:3},8,["name","text","tagline","image","actions"])):v("",!0)}}),_o={class:"box"},$o={key:0,class:"icon"},Po=["innerHTML"],wo=["innerHTML"],xo=["innerHTML"],Lo={key:4,class:"link-text"},So={class:"link-text-value"},Vo=b({__name:"VPFeature",props:{icon:{},title:{},details:{},link:{},linkText:{},rel:{},target:{}},setup(e){return(t,o)=>(r(),w(F,{class:"VPFeature",href:e.link,rel:e.rel,target:e.target,"no-icon":!0,tag:e.link?"a":"div"},{default:f(()=>[s("article",_o,[typeof e.icon=="object"&&e.icon.wrap?(r(),l("div",$o,[$(X,{image:e.icon,alt:e.icon.alt,height:e.icon.height||48,width:e.icon.width||48},null,8,["image","alt","height","width"])])):typeof e.icon=="object"?(r(),w(X,{key:1,image:e.icon,alt:e.icon.alt,height:e.icon.height||48,width:e.icon.width||48},null,8,["image","alt","height","width"])):e.icon?(r(),l("div",{key:2,class:"icon",innerHTML:e.icon},null,8,Po)):v("",!0),s("h2",{class:"title",innerHTML:e.title},null,8,wo),e.details?(r(),l("p",{key:3,class:"details",innerHTML:e.details},null,8,xo)):v("",!0),e.linkText?(r(),l("div",Lo,[s("p",So,[O(_(e.linkText)+" ",1),o[0]||(o[0]=s("span",{class:"vpi-arrow-right link-text-icon"},null,-1))])])):v("",!0)])]),_:1},8,["href","rel","target","tag"]))}}),To=y(Vo,[["__scopeId","data-v-a3976bdc"]]),Io={key:0,class:"VPFeatures"},No={class:"container"},Co={class:"items"},Mo=b({__name:"VPFeatures",props:{features:{}},setup(e){const t=e,o=S(()=>{const a=t.features.length;if(a){if(a===2)return"grid-2";if(a===3)return"grid-3";if(a%3===0)return"grid-6";if(a>3)return"grid-4"}else return});return(a,n)=>e.features?(r(),l("div",Io,[s("div",No,[s("div",Co,[(r(!0),l(M,null,B(e.features,i=>(r(),l("div",{key:i.title,class:C(["item",[o.value]])},[$(To,{icon:i.icon,title:i.title,details:i.details,link:i.link,"link-text":i.linkText,rel:i.rel,target:i.target},null,8,["icon","title","details","link","link-text","rel","target"])],2))),128))])])])):v("",!0)}}),Ao=y(Mo,[["__scopeId","data-v-a6181336"]]),Bo=b({__name:"VPHomeFeatures",setup(e){const{frontmatter:t}=I();return(o,a)=>c(t).features?(r(),w(Ao,{key:0,class:"VPHomeFeatures",features:c(t).features},null,8,["features"])):v("",!0)}}),Do=b({__name:"VPHomeContent",setup(e){const{width:t}=ze({initialWidth:0,includeScrollbar:!1});return(o,a)=>(r(),l("div",{class:"vp-doc container",style:ve(c(t)?{"--vp-offset":`calc(50% - ${c(t)/2}px)`}:{})},[u(o.$slots,"default",{},void 0,!0)],4))}}),Eo=y(Do,[["__scopeId","data-v-8e2d4988"]]),Ho=b({__name:"VPHome",setup(e){const{frontmatter:t,theme:o}=I();return(a,n)=>{const i=K("Content");return r(),l("div",{class:C(["VPHome",{"external-link-icon-enabled":c(o).externalLinkIcon}])},[u(a.$slots,"home-hero-before",{},void 0,!0),$(yo,null,{"home-hero-info-before":f(()=>[u(a.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":f(()=>[u(a.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":f(()=>[u(a.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":f(()=>[u(a.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":f(()=>[u(a.$slots,"home-hero-image",{},void 0,!0)]),_:3}),u(a.$slots,"home-hero-after",{},void 0,!0),u(a.$slots,"home-features-before",{},void 0,!0),$(Bo),u(a.$slots,"home-features-after",{},void 0,!0),c(t).markdownStyles!==!1?(r(),w(Eo,{key:0},{default:f(()=>[$(i)]),_:1})):(r(),w(i,{key:1}))],2)}}}),zo=y(Ho,[["__scopeId","data-v-8b561e3d"]]),Fo={},Oo={class:"VPPage"};function qo(e,t){const o=K("Content");return r(),l("div",Oo,[u(e.$slots,"page-top"),$(o),u(e.$slots,"page-bottom")])}const Ro=y(Fo,[["render",qo]]),jo=b({__name:"VPContent",setup(e){const{page:t,frontmatter:o}=I(),{hasSidebar:a}=j();return(n,i)=>(r(),l("div",{class:C(["VPContent",{"has-sidebar":c(a),"is-home":c(o).layout==="home"}]),id:"VPContent"},[c(t).isNotFound?u(n.$slots,"not-found",{key:0},()=>[$(it)],!0):c(o).layout==="page"?(r(),w(Ro,{key:1},{"page-top":f(()=>[u(n.$slots,"page-top",{},void 0,!0)]),"page-bottom":f(()=>[u(n.$slots,"page-bottom",{},void 0,!0)]),_:3})):c(o).layout==="home"?(r(),w(zo,{key:2},{"home-hero-before":f(()=>[u(n.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":f(()=>[u(n.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":f(()=>[u(n.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":f(()=>[u(n.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":f(()=>[u(n.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":f(()=>[u(n.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":f(()=>[u(n.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":f(()=>[u(n.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":f(()=>[u(n.$slots,"home-features-after",{},void 0,!0)]),_:3})):c(o).layout&&c(o).layout!=="doc"?(r(),w(z(c(o).layout),{key:3})):(r(),w(ao,{key:4},{"doc-top":f(()=>[u(n.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":f(()=>[u(n.$slots,"doc-bottom",{},void 0,!0)]),"doc-footer-before":f(()=>[u(n.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":f(()=>[u(n.$slots,"doc-before",{},void 0,!0)]),"doc-after":f(()=>[u(n.$slots,"doc-after",{},void 0,!0)]),"aside-top":f(()=>[u(n.$slots,"aside-top",{},void 0,!0)]),"aside-outline-before":f(()=>[u(n.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":f(()=>[u(n.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":f(()=>[u(n.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":f(()=>[u(n.$slots,"aside-ads-after",{},void 0,!0)]),"aside-bottom":f(()=>[u(n.$slots,"aside-bottom",{},void 0,!0)]),_:3}))],2))}}),Go=y(jo,[["__scopeId","data-v-1428d186"]]),Uo={class:"container"},Wo=["innerHTML"],Ko=["innerHTML"],Jo=b({__name:"VPFooter",setup(e){const{theme:t,frontmatter:o}=I(),{hasSidebar:a}=j();return(n,i)=>c(t).footer&&c(o).footer!==!1?(r(),l("footer",{key:0,class:C(["VPFooter",{"has-sidebar":c(a)}])},[s("div",Uo,[c(t).footer.message?(r(),l("p",{key:0,class:"message",innerHTML:c(t).footer.message},null,8,Wo)):v("",!0),c(t).footer.copyright?(r(),l("p",{key:1,class:"copyright",innerHTML:c(t).footer.copyright},null,8,Ko)):v("",!0)])],2)):v("",!0)}}),Yo=y(Jo,[["__scopeId","data-v-e315a0ad"]]);function Xo(){const{theme:e,frontmatter:t}=I(),o=Pe([]),a=S(()=>o.value.length>0);return oe(()=>{o.value=be(t.value.outline??e.value.outline)}),{headers:o,hasLocalNav:a}}const Qo={class:"menu-text"},Zo={class:"header"},ea={class:"outline"},ta=b({__name:"VPLocalNavOutlineDropdown",props:{headers:{},navHeight:{}},setup(e){const t=e,{theme:o}=I(),a=A(!1),n=A(0),i=A(),d=A();function p(h){var k;(k=i.value)!=null&&k.contains(h.target)||(a.value=!1)}q(a,h=>{if(h){document.addEventListener("click",p);return}document.removeEventListener("click",p)}),ce("Escape",()=>{a.value=!1}),oe(()=>{a.value=!1});function m(){a.value=!a.value,n.value=window.innerHeight+Math.min(window.scrollY-t.navHeight,0)}function g(h){h.target.classList.contains("outline-link")&&(d.value&&(d.value.style.transition="none"),xe(()=>{a.value=!1}))}function P(){a.value=!1,window.scrollTo({top:0,left:0,behavior:"smooth"})}return(h,k)=>(r(),l("div",{class:"VPLocalNavOutlineDropdown",style:ve({"--vp-vh":n.value+"px"}),ref_key:"main",ref:i},[e.headers.length>0?(r(),l("button",{key:0,onClick:m,class:C({open:a.value})},[s("span",Qo,_(c(Ie)(c(o))),1),k[0]||(k[0]=s("span",{class:"vpi-chevron-right icon"},null,-1))],2)):(r(),l("button",{key:1,onClick:P},_(c(o).returnToTopLabel||"Return to top"),1)),$(pe,{name:"flyout"},{default:f(()=>[a.value?(r(),l("div",{key:0,ref_key:"items",ref:d,class:"items",onClick:g},[s("div",Zo,[s("a",{class:"top-link",href:"#",onClick:P},_(c(o).returnToTopLabel||"Return to top"),1)]),s("div",ea,[$(Ne,{headers:e.headers},null,8,["headers"])])],512)):v("",!0)]),_:1})],4))}}),oa=y(ta,[["__scopeId","data-v-8a42e2b4"]]),aa={class:"container"},na=["aria-expanded"],ra={class:"menu-text"},sa=b({__name:"VPLocalNav",props:{open:{type:Boolean}},emits:["open-menu"],setup(e){const{theme:t,frontmatter:o}=I(),{hasSidebar:a}=j(),{headers:n}=Xo(),{y:i}=Le(),d=A(0);R(()=>{d.value=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--vp-nav-height"))}),oe(()=>{n.value=be(o.value.outline??t.value.outline)});const p=S(()=>n.value.length===0),m=S(()=>p.value&&!a.value),g=S(()=>({VPLocalNav:!0,"has-sidebar":a.value,empty:p.value,fixed:m.value}));return(P,h)=>c(o).layout!=="home"&&(!m.value||c(i)>=d.value)?(r(),l("div",{key:0,class:C(g.value)},[s("div",aa,[c(a)?(r(),l("button",{key:0,class:"menu","aria-expanded":e.open,"aria-controls":"VPSidebarNav",onClick:h[0]||(h[0]=k=>P.$emit("open-menu"))},[h[1]||(h[1]=s("span",{class:"vpi-align-left menu-icon"},null,-1)),s("span",ra,_(c(t).sidebarMenuLabel||"Menu"),1)],8,na)):v("",!0),$(oa,{headers:c(n),navHeight:d.value},null,8,["headers","navHeight"])])],2)):v("",!0)}}),ia=y(sa,[["__scopeId","data-v-a6f0e41e"]]);function la(){const e=A(!1);function t(){e.value=!0,window.addEventListener("resize",n)}function o(){e.value=!1,window.removeEventListener("resize",n)}function a(){e.value?o():t()}function n(){window.outerWidth>=768&&o()}const i=ae();return q(()=>i.path,o),{isScreenOpen:e,openScreen:t,closeScreen:o,toggleScreen:a}}const ca={},da={class:"VPSwitch",type:"button",role:"switch"},ua={class:"check"},ma={key:0,class:"icon"};function pa(e,t){return r(),l("button",da,[s("span",ua,[e.$slots.default?(r(),l("span",ma,[u(e.$slots,"default",{},void 0,!0)])):v("",!0)])])}const fa=y(ca,[["render",pa],["__scopeId","data-v-1d5665e3"]]),va=b({__name:"VPSwitchAppearance",setup(e){const{isDark:t,theme:o}=I(),a=ne("toggle-appearance",()=>{t.value=!t.value}),n=A("");return fe(()=>{n.value=t.value?o.value.lightModeSwitchTitle||"Switch to light theme":o.value.darkModeSwitchTitle||"Switch to dark theme"}),(i,d)=>(r(),w(fa,{title:n.value,class:"VPSwitchAppearance","aria-checked":c(t),onClick:c(a)},{default:f(()=>[...d[0]||(d[0]=[s("span",{class:"vpi-sun sun"},null,-1),s("span",{class:"vpi-moon moon"},null,-1)])]),_:1},8,["title","aria-checked","onClick"]))}}),ge=y(va,[["__scopeId","data-v-5337faa4"]]),ha={key:0,class:"VPNavBarAppearance"},ba=b({__name:"VPNavBarAppearance",setup(e){const{site:t}=I();return(o,a)=>c(t).appearance&&c(t).appearance!=="force-dark"&&c(t).appearance!=="force-auto"?(r(),l("div",ha,[$(ge)])):v("",!0)}}),ga=y(ba,[["__scopeId","data-v-6c893767"]]),ke=A();let Ce=!1,ie=0;function ka(e){const t=A(!1);if(re){!Ce&&ya(),ie++;const o=q(ke,a=>{var n,i,d;a===e.el.value||(n=e.el.value)!=null&&n.contains(a)?(t.value=!0,(i=e.onFocus)==null||i.call(e)):(t.value=!1,(d=e.onBlur)==null||d.call(e))});te(()=>{o(),ie--,ie||_a()})}return Fe(t)}function ya(){document.addEventListener("focusin",Me),Ce=!0,ke.value=document.activeElement}function _a(){document.removeEventListener("focusin",Me)}function Me(){ke.value=document.activeElement}const $a={class:"VPMenuLink"},Pa=["innerHTML"],wa=b({__name:"VPMenuLink",props:{item:{}},setup(e){const{page:t}=I();return(o,a)=>(r(),l("div",$a,[$(F,{class:C({active:c(W)(c(t).relativePath,e.item.activeMatch||e.item.link,!!e.item.activeMatch)}),href:e.item.link,target:e.item.target,rel:e.item.rel,"no-icon":e.item.noIcon},{default:f(()=>[s("span",{innerHTML:e.item.text},null,8,Pa)]),_:1},8,["class","href","target","rel","no-icon"])]))}}),se=y(wa,[["__scopeId","data-v-35975db6"]]),xa={class:"VPMenuGroup"},La={key:0,class:"title"},Sa=b({__name:"VPMenuGroup",props:{text:{},items:{}},setup(e){return(t,o)=>(r(),l("div",xa,[e.text?(r(),l("p",La,_(e.text),1)):v("",!0),(r(!0),l(M,null,B(e.items,a=>(r(),l(M,null,["link"in a?(r(),w(se,{key:0,item:a},null,8,["item"])):v("",!0)],64))),256))]))}}),Va=y(Sa,[["__scopeId","data-v-69e747b5"]]),Ta={class:"VPMenu"},Ia={key:0,class:"items"},Na=b({__name:"VPMenu",props:{items:{}},setup(e){return(t,o)=>(r(),l("div",Ta,[e.items?(r(),l("div",Ia,[(r(!0),l(M,null,B(e.items,a=>(r(),l(M,{key:JSON.stringify(a)},["link"in a?(r(),w(se,{key:0,item:a},null,8,["item"])):"component"in a?(r(),w(z(a.component),U({key:1,ref_for:!0},a.props),null,16)):(r(),w(Va,{key:2,text:a.text,items:a.items},null,8,["text","items"]))],64))),128))])):v("",!0),u(t.$slots,"default",{},void 0,!0)]))}}),Ca=y(Na,[["__scopeId","data-v-b98bc113"]]),Ma=["aria-expanded","aria-label"],Aa={key:0,class:"text"},Ba=["innerHTML"],Da={key:1,class:"vpi-more-horizontal icon"},Ea={class:"menu"},Ha=b({__name:"VPFlyout",props:{icon:{},button:{},label:{},items:{}},setup(e){const t=A(!1),o=A();ka({el:o,onBlur:a});function a(){t.value=!1}return(n,i)=>(r(),l("div",{class:"VPFlyout",ref_key:"el",ref:o,onMouseenter:i[1]||(i[1]=d=>t.value=!0),onMouseleave:i[2]||(i[2]=d=>t.value=!1)},[s("button",{type:"button",class:"button","aria-haspopup":"true","aria-expanded":t.value,"aria-label":e.label,onClick:i[0]||(i[0]=d=>t.value=!t.value)},[e.button||e.icon?(r(),l("span",Aa,[e.icon?(r(),l("span",{key:0,class:C([e.icon,"option-icon"])},null,2)):v("",!0),e.button?(r(),l("span",{key:1,innerHTML:e.button},null,8,Ba)):v("",!0),i[3]||(i[3]=s("span",{class:"vpi-chevron-down text-icon"},null,-1))])):(r(),l("span",Da))],8,Ma),s("div",Ea,[$(Ca,{items:e.items},{default:f(()=>[u(n.$slots,"default",{},void 0,!0)]),_:3},8,["items"])])],544))}}),ye=y(Ha,[["__scopeId","data-v-cf11d7a2"]]),za=["href","aria-label","innerHTML"],Fa=b({__name:"VPSocialLink",props:{icon:{},link:{},ariaLabel:{}},setup(e){const t=e,o=A();R(async()=>{var i;await xe();const n=(i=o.value)==null?void 0:i.children[0];n instanceof HTMLElement&&n.className.startsWith("vpi-social-")&&(getComputedStyle(n).maskImage||getComputedStyle(n).webkitMaskImage)==="none"&&n.style.setProperty("--icon",`url('https://api.iconify.design/simple-icons/${t.icon}.svg')`)});const a=S(()=>typeof t.icon=="object"?t.icon.svg:`<span class="vpi-social-${t.icon}"></span>`);return(n,i)=>(r(),l("a",{ref_key:"el",ref:o,class:"VPSocialLink no-icon",href:e.link,"aria-label":e.ariaLabel??(typeof e.icon=="string"?e.icon:""),target:"_blank",rel:"noopener",innerHTML:a.value},null,8,za))}}),Oa=y(Fa,[["__scopeId","data-v-bd121fe5"]]),qa={class:"VPSocialLinks"},Ra=b({__name:"VPSocialLinks",props:{links:{}},setup(e){return(t,o)=>(r(),l("div",qa,[(r(!0),l(M,null,B(e.links,({link:a,icon:n,ariaLabel:i})=>(r(),w(Oa,{key:a,icon:n,link:a,ariaLabel:i},null,8,["icon","link","ariaLabel"]))),128))]))}}),_e=y(Ra,[["__scopeId","data-v-7bc22406"]]),ja={key:0,class:"group translations"},Ga={class:"trans-title"},Ua={key:1,class:"group"},Wa={class:"item appearance"},Ka={class:"label"},Ja={class:"appearance-action"},Ya={key:2,class:"group"},Xa={class:"item social-links"},Qa=b({__name:"VPNavBarExtra",setup(e){const{site:t,theme:o}=I(),{localeLinks:a,currentLang:n}=J({correspondingLink:!0}),i=S(()=>a.value.length&&n.value.label||t.value.appearance||o.value.socialLinks);return(d,p)=>i.value?(r(),w(ye,{key:0,class:"VPNavBarExtra",label:"extra navigation"},{default:f(()=>[c(a).length&&c(n).label?(r(),l("div",ja,[s("p",Ga,_(c(n).label),1),(r(!0),l(M,null,B(c(a),m=>(r(),w(se,{key:m.link,item:m},null,8,["item"]))),128))])):v("",!0),c(t).appearance&&c(t).appearance!=="force-dark"&&c(t).appearance!=="force-auto"?(r(),l("div",Ua,[s("div",Wa,[s("p",Ka,_(c(o).darkModeSwitchLabel||"Appearance"),1),s("div",Ja,[$(ge)])])])):v("",!0),c(o).socialLinks?(r(),l("div",Ya,[s("div",Xa,[$(_e,{class:"social-links-list",links:c(o).socialLinks},null,8,["links"])])])):v("",!0)]),_:1})):v("",!0)}}),Za=y(Qa,[["__scopeId","data-v-bb2aa2f0"]]),en=["aria-expanded"],tn=b({__name:"VPNavBarHamburger",props:{active:{type:Boolean}},emits:["click"],setup(e){return(t,o)=>(r(),l("button",{type:"button",class:C(["VPNavBarHamburger",{active:e.active}]),"aria-label":"mobile navigation","aria-expanded":e.active,"aria-controls":"VPNavScreen",onClick:o[0]||(o[0]=a=>t.$emit("click"))},[...o[1]||(o[1]=[s("span",{class:"container"},[s("span",{class:"top"}),s("span",{class:"middle"}),s("span",{class:"bottom"})],-1)])],10,en))}}),on=y(tn,[["__scopeId","data-v-e5dd9c1c"]]),an=["innerHTML"],nn=b({__name:"VPNavBarMenuLink",props:{item:{}},setup(e){const{page:t}=I();return(o,a)=>(r(),w(F,{class:C({VPNavBarMenuLink:!0,active:c(W)(c(t).relativePath,e.item.activeMatch||e.item.link,!!e.item.activeMatch)}),href:e.item.link,target:e.item.target,rel:e.item.rel,"no-icon":e.item.noIcon,tabindex:"0"},{default:f(()=>[s("span",{innerHTML:e.item.text},null,8,an)]),_:1},8,["class","href","target","rel","no-icon"]))}}),rn=y(nn,[["__scopeId","data-v-e56f3d57"]]),sn=b({__name:"VPNavBarMenuGroup",props:{item:{}},setup(e){const t=e,{page:o}=I(),a=i=>"component"in i?!1:"link"in i?W(o.value.relativePath,i.link,!!t.item.activeMatch):i.items.some(a),n=S(()=>a(t.item));return(i,d)=>(r(),w(ye,{class:C({VPNavBarMenuGroup:!0,active:c(W)(c(o).relativePath,e.item.activeMatch,!!e.item.activeMatch)||n.value}),button:e.item.text,items:e.item.items},null,8,["class","button","items"]))}}),ln={key:0,"aria-labelledby":"main-nav-aria-label",class:"VPNavBarMenu"},cn=b({__name:"VPNavBarMenu",setup(e){const{theme:t}=I();return(o,a)=>c(t).nav?(r(),l("nav",ln,[a[0]||(a[0]=s("span",{id:"main-nav-aria-label",class:"visually-hidden"}," Main Navigation ",-1)),(r(!0),l(M,null,B(c(t).nav,n=>(r(),l(M,{key:JSON.stringify(n)},["link"in n?(r(),w(rn,{key:0,item:n},null,8,["item"])):"component"in n?(r(),w(z(n.component),U({key:1,ref_for:!0},n.props),null,16)):(r(),w(sn,{key:2,item:n},null,8,["item"]))],64))),128))])):v("",!0)}}),dn=y(cn,[["__scopeId","data-v-dc692963"]]);function un(e){const{localeIndex:t,theme:o}=I();function a(n){var x,T,L;const i=n.split("."),d=(x=o.value.search)==null?void 0:x.options,p=d&&typeof d=="object",m=p&&((L=(T=d.locales)==null?void 0:T[t.value])==null?void 0:L.translations)||null,g=p&&d.translations||null;let P=m,h=g,k=e;const V=i.pop();for(const N of i){let D=null;const E=k==null?void 0:k[N];E&&(D=k=E);const H=h==null?void 0:h[N];H&&(D=h=H);const G=P==null?void 0:P[N];G&&(D=P=G),E||(k=D),H||(h=D),G||(P=D)}return(P==null?void 0:P[V])??(h==null?void 0:h[V])??(k==null?void 0:k[V])??""}return a}const mn=["aria-label"],pn={class:"DocSearch-Button-Container"},fn={class:"DocSearch-Button-Placeholder"},$e=b({__name:"VPNavBarSearchButton",setup(e){const o=un({button:{buttonText:"Search",buttonAriaLabel:"Search"}});return(a,n)=>(r(),l("button",{type:"button",class:"DocSearch DocSearch-Button","aria-label":c(o)("button.buttonAriaLabel")},[s("span",pn,[n[0]||(n[0]=s("span",{class:"vp-icon DocSearch-Search-Icon"},null,-1)),s("span",fn,_(c(o)("button.buttonText")),1)]),n[1]||(n[1]=s("span",{class:"DocSearch-Button-Keys"},[s("kbd",{class:"DocSearch-Button-Key"}),s("kbd",{class:"DocSearch-Button-Key"},"K")],-1))],8,mn))}}),vn={class:"VPNavBarSearch"},hn={id:"local-search"},bn={key:1,id:"docsearch"},gn=b({__name:"VPNavBarSearch",setup(e){const t=Oe(()=>qe(()=>import("./VPLocalSearchBox.DlQLm2wP.js"),__vite__mapDeps([0,1]))),o=()=>null,{theme:a}=I(),n=A(!1),i=A(!1);R(()=>{});function d(){n.value||(n.value=!0,setTimeout(p,16))}function p(){const h=new Event("keydown");h.key="k",h.metaKey=!0,window.dispatchEvent(h),setTimeout(()=>{document.querySelector(".DocSearch-Modal")||p()},16)}function m(h){const k=h.target,V=k.tagName;return k.isContentEditable||V==="INPUT"||V==="SELECT"||V==="TEXTAREA"}const g=A(!1);ce("k",h=>{(h.ctrlKey||h.metaKey)&&(h.preventDefault(),g.value=!0)}),ce("/",h=>{m(h)||(h.preventDefault(),g.value=!0)});const P="local";return(h,k)=>{var V;return r(),l("div",vn,[c(P)==="local"?(r(),l(M,{key:0},[g.value?(r(),w(c(t),{key:0,onClose:k[0]||(k[0]=x=>g.value=!1)})):v("",!0),s("div",hn,[$($e,{onClick:k[1]||(k[1]=x=>g.value=!0)})])],64)):c(P)==="algolia"?(r(),l(M,{key:1},[n.value?(r(),w(c(o),{key:0,algolia:((V=c(a).search)==null?void 0:V.options)??c(a).algolia,onVnodeBeforeMount:k[2]||(k[2]=x=>i.value=!0)},null,8,["algolia"])):v("",!0),i.value?v("",!0):(r(),l("div",bn,[$($e,{onClick:d})]))],64)):v("",!0)])}}}),kn=b({__name:"VPNavBarSocialLinks",setup(e){const{theme:t}=I();return(o,a)=>c(t).socialLinks?(r(),w(_e,{key:0,class:"VPNavBarSocialLinks",links:c(t).socialLinks},null,8,["links"])):v("",!0)}}),yn=y(kn,[["__scopeId","data-v-0394ad82"]]),_n=["href","rel","target"],$n=["innerHTML"],Pn={key:2},wn=b({__name:"VPNavBarTitle",setup(e){const{site:t,theme:o}=I(),{hasSidebar:a}=j(),{currentLang:n}=J(),i=S(()=>{var m;return typeof o.value.logoLink=="string"?o.value.logoLink:(m=o.value.logoLink)==null?void 0:m.link}),d=S(()=>{var m;return typeof o.value.logoLink=="string"||(m=o.value.logoLink)==null?void 0:m.rel}),p=S(()=>{var m;return typeof o.value.logoLink=="string"||(m=o.value.logoLink)==null?void 0:m.target});return(m,g)=>(r(),l("div",{class:C(["VPNavBarTitle",{"has-sidebar":c(a)}])},[s("a",{class:"title",href:i.value??c(he)(c(n).link),rel:d.value,target:p.value},[u(m.$slots,"nav-bar-title-before",{},void 0,!0),c(o).logo?(r(),w(X,{key:0,class:"logo",image:c(o).logo},null,8,["image"])):v("",!0),c(o).siteTitle?(r(),l("span",{key:1,innerHTML:c(o).siteTitle},null,8,$n)):c(o).siteTitle===void 0?(r(),l("span",Pn,_(c(t).title),1)):v("",!0),u(m.$slots,"nav-bar-title-after",{},void 0,!0)],8,_n)],2))}}),xn=y(wn,[["__scopeId","data-v-1168a8e4"]]),Ln={class:"items"},Sn={class:"title"},Vn=b({__name:"VPNavBarTranslations",setup(e){const{theme:t}=I(),{localeLinks:o,currentLang:a}=J({correspondingLink:!0});return(n,i)=>c(o).length&&c(a).label?(r(),w(ye,{key:0,class:"VPNavBarTranslations",icon:"vpi-languages",label:c(t).langMenuLabel||"Change language"},{default:f(()=>[s("div",Ln,[s("p",Sn,_(c(a).label),1),(r(!0),l(M,null,B(c(o),d=>(r(),w(se,{key:d.link,item:d},null,8,["item"]))),128))])]),_:1},8,["label"])):v("",!0)}}),Tn=y(Vn,[["__scopeId","data-v-88af2de4"]]),In={class:"wrapper"},Nn={class:"container"},Cn={class:"title"},Mn={class:"content"},An={class:"content-body"},Bn=b({__name:"VPNavBar",props:{isScreenOpen:{type:Boolean}},emits:["toggle-screen"],setup(e){const t=e,{y:o}=Le(),{hasSidebar:a}=j(),{frontmatter:n}=I(),i=A({});return fe(()=>{i.value={"has-sidebar":a.value,home:n.value.layout==="home",top:o.value===0,"screen-open":t.isScreenOpen}}),(d,p)=>(r(),l("div",{class:C(["VPNavBar",i.value])},[s("div",In,[s("div",Nn,[s("div",Cn,[$(xn,null,{"nav-bar-title-before":f(()=>[u(d.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":f(()=>[u(d.$slots,"nav-bar-title-after",{},void 0,!0)]),_:3})]),s("div",Mn,[s("div",An,[u(d.$slots,"nav-bar-content-before",{},void 0,!0),$(gn,{class:"search"}),$(dn,{class:"menu"}),$(Tn,{class:"translations"}),$(ga,{class:"appearance"}),$(yn,{class:"social-links"}),$(Za,{class:"extra"}),u(d.$slots,"nav-bar-content-after",{},void 0,!0),$(on,{class:"hamburger",active:e.isScreenOpen,onClick:p[0]||(p[0]=m=>d.$emit("toggle-screen"))},null,8,["active"])])])])]),p[1]||(p[1]=s("div",{class:"divider"},[s("div",{class:"divider-line"})],-1))],2))}}),Dn=y(Bn,[["__scopeId","data-v-6aa21345"]]),En={key:0,class:"VPNavScreenAppearance"},Hn={class:"text"},zn=b({__name:"VPNavScreenAppearance",setup(e){const{site:t,theme:o}=I();return(a,n)=>c(t).appearance&&c(t).appearance!=="force-dark"&&c(t).appearance!=="force-auto"?(r(),l("div",En,[s("p",Hn,_(c(o).darkModeSwitchLabel||"Appearance"),1),$(ge)])):v("",!0)}}),Fn=y(zn,[["__scopeId","data-v-b44890b2"]]),On=["innerHTML"],qn=b({__name:"VPNavScreenMenuLink",props:{item:{}},setup(e){const t=ne("close-screen");return(o,a)=>(r(),w(F,{class:"VPNavScreenMenuLink",href:e.item.link,target:e.item.target,rel:e.item.rel,"no-icon":e.item.noIcon,onClick:c(t)},{default:f(()=>[s("span",{innerHTML:e.item.text},null,8,On)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),Rn=y(qn,[["__scopeId","data-v-df37e6dd"]]),jn=["innerHTML"],Gn=b({__name:"VPNavScreenMenuGroupLink",props:{item:{}},setup(e){const t=ne("close-screen");return(o,a)=>(r(),w(F,{class:"VPNavScreenMenuGroupLink",href:e.item.link,target:e.item.target,rel:e.item.rel,"no-icon":e.item.noIcon,onClick:c(t)},{default:f(()=>[s("span",{innerHTML:e.item.text},null,8,jn)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),Ae=y(Gn,[["__scopeId","data-v-3e9c20e4"]]),Un={class:"VPNavScreenMenuGroupSection"},Wn={key:0,class:"title"},Kn=b({__name:"VPNavScreenMenuGroupSection",props:{text:{},items:{}},setup(e){return(t,o)=>(r(),l("div",Un,[e.text?(r(),l("p",Wn,_(e.text),1)):v("",!0),(r(!0),l(M,null,B(e.items,a=>(r(),w(Ae,{key:a.text,item:a},null,8,["item"]))),128))]))}}),Jn=y(Kn,[["__scopeId","data-v-8133b170"]]),Yn=["aria-controls","aria-expanded"],Xn=["innerHTML"],Qn=["id"],Zn={key:0,class:"item"},er={key:1,class:"item"},tr={key:2,class:"group"},or=b({__name:"VPNavScreenMenuGroup",props:{text:{},items:{}},setup(e){const t=e,o=A(!1),a=S(()=>`NavScreenGroup-${t.text.replace(" ","-").toLowerCase()}`);function n(){o.value=!o.value}return(i,d)=>(r(),l("div",{class:C(["VPNavScreenMenuGroup",{open:o.value}])},[s("button",{class:"button","aria-controls":a.value,"aria-expanded":o.value,onClick:n},[s("span",{class:"button-text",innerHTML:e.text},null,8,Xn),d[0]||(d[0]=s("span",{class:"vpi-plus button-icon"},null,-1))],8,Yn),s("div",{id:a.value,class:"items"},[(r(!0),l(M,null,B(e.items,p=>(r(),l(M,{key:JSON.stringify(p)},["link"in p?(r(),l("div",Zn,[$(Ae,{item:p},null,8,["item"])])):"component"in p?(r(),l("div",er,[(r(),w(z(p.component),U({ref_for:!0},p.props,{"screen-menu":""}),null,16))])):(r(),l("div",tr,[$(Jn,{text:p.text,items:p.items},null,8,["text","items"])]))],64))),128))],8,Qn)],2))}}),ar=y(or,[["__scopeId","data-v-b9ab8c58"]]),nr={key:0,class:"VPNavScreenMenu"},rr=b({__name:"VPNavScreenMenu",setup(e){const{theme:t}=I();return(o,a)=>c(t).nav?(r(),l("nav",nr,[(r(!0),l(M,null,B(c(t).nav,n=>(r(),l(M,{key:JSON.stringify(n)},["link"in n?(r(),w(Rn,{key:0,item:n},null,8,["item"])):"component"in n?(r(),w(z(n.component),U({key:1,ref_for:!0},n.props,{"screen-menu":""}),null,16)):(r(),w(ar,{key:2,text:n.text||"",items:n.items},null,8,["text","items"]))],64))),128))])):v("",!0)}}),sr=b({__name:"VPNavScreenSocialLinks",setup(e){const{theme:t}=I();return(o,a)=>c(t).socialLinks?(r(),w(_e,{key:0,class:"VPNavScreenSocialLinks",links:c(t).socialLinks},null,8,["links"])):v("",!0)}}),ir={class:"list"},lr=b({__name:"VPNavScreenTranslations",setup(e){const{localeLinks:t,currentLang:o}=J({correspondingLink:!0}),a=A(!1);function n(){a.value=!a.value}return(i,d)=>c(t).length&&c(o).label?(r(),l("div",{key:0,class:C(["VPNavScreenTranslations",{open:a.value}])},[s("button",{class:"title",onClick:n},[d[0]||(d[0]=s("span",{class:"vpi-languages icon lang"},null,-1)),O(" "+_(c(o).label)+" ",1),d[1]||(d[1]=s("span",{class:"vpi-chevron-down icon chevron"},null,-1))]),s("ul",ir,[(r(!0),l(M,null,B(c(t),p=>(r(),l("li",{key:p.link,class:"item"},[$(F,{class:"link",href:p.link},{default:f(()=>[O(_(p.text),1)]),_:2},1032,["href"])]))),128))])],2)):v("",!0)}}),cr=y(lr,[["__scopeId","data-v-858fe1a4"]]),dr={class:"container"},ur=b({__name:"VPNavScreen",props:{open:{type:Boolean}},setup(e){const t=A(null),o=Se(re?document.body:null);return(a,n)=>(r(),w(pe,{name:"fade",onEnter:n[0]||(n[0]=i=>o.value=!0),onAfterLeave:n[1]||(n[1]=i=>o.value=!1)},{default:f(()=>[e.open?(r(),l("div",{key:0,class:"VPNavScreen",ref_key:"screen",ref:t,id:"VPNavScreen"},[s("div",dr,[u(a.$slots,"nav-screen-content-before",{},void 0,!0),$(rr,{class:"menu"}),$(cr,{class:"translations"}),$(Fn,{class:"appearance"}),$(sr,{class:"social-links"}),u(a.$slots,"nav-screen-content-after",{},void 0,!0)])],512)):v("",!0)]),_:3}))}}),mr=y(ur,[["__scopeId","data-v-f2779853"]]),pr={key:0,class:"VPNav"},fr=b({__name:"VPNav",setup(e){const{isScreenOpen:t,closeScreen:o,toggleScreen:a}=la(),{frontmatter:n}=I(),i=S(()=>n.value.navbar!==!1);return Ve("close-screen",o),ee(()=>{re&&document.documentElement.classList.toggle("hide-nav",!i.value)}),(d,p)=>i.value?(r(),l("header",pr,[$(Dn,{"is-screen-open":c(t),onToggleScreen:c(a)},{"nav-bar-title-before":f(()=>[u(d.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":f(()=>[u(d.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":f(()=>[u(d.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":f(()=>[u(d.$slots,"nav-bar-content-after",{},void 0,!0)]),_:3},8,["is-screen-open","onToggleScreen"]),$(mr,{open:c(t)},{"nav-screen-content-before":f(()=>[u(d.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":f(()=>[u(d.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3},8,["open"])])):v("",!0)}}),vr=y(fr,[["__scopeId","data-v-ae24b3ad"]]),hr=["role","tabindex"],br={key:1,class:"items"},gr=b({__name:"VPSidebarItem",props:{item:{},depth:{}},setup(e){const t=e,{collapsed:o,collapsible:a,isLink:n,isActiveLink:i,hasActiveLink:d,hasChildren:p,toggle:m}=ut(S(()=>t.item)),g=S(()=>p.value?"section":"div"),P=S(()=>n.value?"a":"div"),h=S(()=>p.value?t.depth+2===7?"p":`h${t.depth+2}`:"p"),k=S(()=>n.value?void 0:"button"),V=S(()=>[[`level-${t.depth}`],{collapsible:a.value},{collapsed:o.value},{"is-link":n.value},{"is-active":i.value},{"has-active":d.value}]);function x(L){"key"in L&&L.key!=="Enter"||!t.item.link&&m()}function T(){t.item.link&&m()}return(L,N)=>{const D=K("VPSidebarItem",!0);return r(),w(z(g.value),{class:C(["VPSidebarItem",V.value])},{default:f(()=>[e.item.text?(r(),l("div",U({key:0,class:"item",role:k.value},Re(e.item.items?{click:x,keydown:x}:{},!0),{tabindex:e.item.items&&0}),[N[1]||(N[1]=s("div",{class:"indicator"},null,-1)),e.item.link?(r(),w(F,{key:0,tag:P.value,class:"link",href:e.item.link,rel:e.item.rel,target:e.item.target},{default:f(()=>[(r(),w(z(h.value),{class:"text",innerHTML:e.item.text},null,8,["innerHTML"]))]),_:1},8,["tag","href","rel","target"])):(r(),w(z(h.value),{key:1,class:"text",innerHTML:e.item.text},null,8,["innerHTML"])),e.item.collapsed!=null&&e.item.items&&e.item.items.length?(r(),l("div",{key:2,class:"caret",role:"button","aria-label":"toggle section",onClick:T,onKeydown:je(T,["enter"]),tabindex:"0"},[...N[0]||(N[0]=[s("span",{class:"vpi-chevron-right caret-icon"},null,-1)])],32)):v("",!0)],16,hr)):v("",!0),e.item.items&&e.item.items.length?(r(),l("div",br,[e.depth<5?(r(!0),l(M,{key:0},B(e.item.items,E=>(r(),w(D,{key:E.text,item:E,depth:e.depth+1},null,8,["item","depth"]))),128)):v("",!0)])):v("",!0)]),_:1},8,["class"])}}}),kr=y(gr,[["__scopeId","data-v-b3fd67f8"]]),yr=b({__name:"VPSidebarGroup",props:{items:{}},setup(e){const t=A(!0);let o=null;return R(()=>{o=setTimeout(()=>{o=null,t.value=!1},300)}),Ge(()=>{o!=null&&(clearTimeout(o),o=null)}),(a,n)=>(r(!0),l(M,null,B(e.items,i=>(r(),l("div",{key:i.text,class:C(["group",{"no-transition":t.value}])},[$(kr,{item:i,depth:0},null,8,["item"])],2))),128))}}),_r=y(yr,[["__scopeId","data-v-c40bc020"]]),$r={class:"nav",id:"VPSidebarNav","aria-labelledby":"sidebar-aria-label",tabindex:"-1"},Pr=b({__name:"VPSidebar",props:{open:{type:Boolean}},setup(e){const{sidebarGroups:t,hasSidebar:o}=j(),a=e,n=A(null),i=Se(re?document.body:null);q([a,n],()=>{var p;a.open?(i.value=!0,(p=n.value)==null||p.focus()):i.value=!1},{immediate:!0,flush:"post"});const d=A(0);return q(t,()=>{d.value+=1},{deep:!0}),(p,m)=>c(o)?(r(),l("aside",{key:0,class:C(["VPSidebar",{open:e.open}]),ref_key:"navEl",ref:n,onClick:m[0]||(m[0]=Ue(()=>{},["stop"]))},[m[2]||(m[2]=s("div",{class:"curtain"},null,-1)),s("nav",$r,[m[1]||(m[1]=s("span",{class:"visually-hidden",id:"sidebar-aria-label"}," Sidebar Navigation ",-1)),u(p.$slots,"sidebar-nav-before",{},void 0,!0),(r(),w(_r,{items:c(t),key:d.value},null,8,["items"])),u(p.$slots,"sidebar-nav-after",{},void 0,!0)])],2)):v("",!0)}}),wr=y(Pr,[["__scopeId","data-v-319d5ca6"]]),xr=b({__name:"VPSkipLink",setup(e){const{theme:t}=I(),o=ae(),a=A();q(()=>o.path,()=>a.value.focus());function n({target:i}){const d=document.getElementById(decodeURIComponent(i.hash).slice(1));if(d){const p=()=>{d.removeAttribute("tabindex"),d.removeEventListener("blur",p)};d.setAttribute("tabindex","-1"),d.addEventListener("blur",p),d.focus(),window.scrollTo(0,0)}}return(i,d)=>(r(),l(M,null,[s("span",{ref_key:"backToTop",ref:a,tabindex:"-1"},null,512),s("a",{href:"#VPContent",class:"VPSkipLink visually-hidden",onClick:n},_(c(t).skipToContentLabel||"Skip to content"),1)],64))}}),Lr=y(xr,[["__scopeId","data-v-0b0ada53"]]),Sr=b({__name:"Layout",setup(e){const{isOpen:t,open:o,close:a}=j(),n=ae();q(()=>n.path,a),dt(t,a);const{frontmatter:i}=I(),d=We(),p=S(()=>!!d["home-hero-image"]);return Ve("hero-image-slot-exists",p),(m,g)=>{const P=K("Content");return c(i).layout!==!1?(r(),l("div",{key:0,class:C(["Layout",c(i).pageClass])},[u(m.$slots,"layout-top",{},void 0,!0),$(Lr),$(Xe,{class:"backdrop",show:c(t),onClick:c(a)},null,8,["show","onClick"]),$(vr,null,{"nav-bar-title-before":f(()=>[u(m.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":f(()=>[u(m.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":f(()=>[u(m.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":f(()=>[u(m.$slots,"nav-bar-content-after",{},void 0,!0)]),"nav-screen-content-before":f(()=>[u(m.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":f(()=>[u(m.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3}),$(ia,{open:c(t),onOpenMenu:c(o)},null,8,["open","onOpenMenu"]),$(wr,{open:c(t)},{"sidebar-nav-before":f(()=>[u(m.$slots,"sidebar-nav-before",{},void 0,!0)]),"sidebar-nav-after":f(()=>[u(m.$slots,"sidebar-nav-after",{},void 0,!0)]),_:3},8,["open"]),$(Go,null,{"page-top":f(()=>[u(m.$slots,"page-top",{},void 0,!0)]),"page-bottom":f(()=>[u(m.$slots,"page-bottom",{},void 0,!0)]),"not-found":f(()=>[u(m.$slots,"not-found",{},void 0,!0)]),"home-hero-before":f(()=>[u(m.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":f(()=>[u(m.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":f(()=>[u(m.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":f(()=>[u(m.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":f(()=>[u(m.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":f(()=>[u(m.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":f(()=>[u(m.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":f(()=>[u(m.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":f(()=>[u(m.$slots,"home-features-after",{},void 0,!0)]),"doc-footer-before":f(()=>[u(m.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":f(()=>[u(m.$slots,"doc-before",{},void 0,!0)]),"doc-after":f(()=>[u(m.$slots,"doc-after",{},void 0,!0)]),"doc-top":f(()=>[u(m.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":f(()=>[u(m.$slots,"doc-bottom",{},void 0,!0)]),"aside-top":f(()=>[u(m.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":f(()=>[u(m.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":f(()=>[u(m.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":f(()=>[u(m.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":f(()=>[u(m.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":f(()=>[u(m.$slots,"aside-ads-after",{},void 0,!0)]),_:3}),$(Yo),u(m.$slots,"layout-bottom",{},void 0,!0)],2)):(r(),w(P,{key:1}))}}}),Vr=y(Sr,[["__scopeId","data-v-5d98c3a5"]]),Tr={Layout:Vr,enhanceApp:({app:e})=>{e.component("Badge",Ke)}},Ir={class:"home-table-wrapper"},Nr={class:"home-table"},Cr=["href"],Mr={style:{"text-align":"center"}},Ar={style:{"text-align":"center"}},Br={style:{"text-align":"center"}},Dr=["disabled","title","onClick"],Er={key:0,class:"pdf-btn-loading"},Hr={key:1},zr=b({__name:"HomeTable",setup(e){const{site:t}=Q(),o=[{name:"Desbravador 4.1 / 3.1 / 3.0 Smart",primaryLink:"/desbravador-41/local/requisitos-hardware",docPages:["/desbravador-41/local/requisitos-hardware","/desbravador-41/cloud/requisitos-cloud"],hasLocal:!0,hasCloud:!0},{name:"POS Fast by Desbravador",primaryLink:"/desbravador-posfast/local/requisitos-hardware",docPages:["/desbravador-posfast/local/requisitos-hardware"],hasLocal:!0,hasCloud:!1},{name:"Light Web Plus / 3.0 Web Plus",primaryLink:"/light-web-plus/local/requisitos-hardware",docPages:["/light-web-plus/local/requisitos-hardware"],hasLocal:!0,hasCloud:!0},{name:"Gas Station / Liquor Store",primaryLink:"/gas-station/local/requisitos-hardware",docPages:["/gas-station/local/requisitos-hardware"],hasLocal:!0,hasCloud:!1},{name:"Easy Web / Light Web / 3.0 Web",primaryLink:"/light-web/local/requisitos-hardware",docPages:["/light-web/local/requisitos-hardware"],hasLocal:!1,hasCloud:!0},{name:"Desbravador Enterprise / 4.0",primaryLink:"/desbravador-enterprise/",docPages:["/desbravador-enterprise/","/desbravador-enterprise/local/requisitos-hardware","/desbravador-enterprise/hibrido/requisitos-hardware","/desbravador-enterprise/cloud/requisitos-hardware"],hasLocal:!0,hasCloud:!0}],a=[{title:"Fechaduras e Tarifadores Homologados",path:"/perifericos/fechaduras-homologadas"},{title:"Impressoras Homologadas",path:"/perifericos/impressoras-homologadas"},{title:"Pinpads Homologados",path:"/perifericos/pinpads-homologados"},{title:"Sistemas de TEF Homologados",path:"/perifericos/tef-homologados"},{title:"Dispositivos iPDV e PDV Homologados",path:"/perifericos/dispositivos-ipdv-pdv"},{title:"SAT / MFE Homologados",path:"/perifericos/sat-mfe-homologados"}],n=A(null);function i(m){const g=(t.value.base||"/").replace(/\/$/,"");return`${window.location.origin}${g}${m}`}async function d(m){try{const g=await fetch(i(m));if(!g.ok)return null;const P=await g.text(),V=new DOMParser().parseFromString(P,"text/html").querySelector(".vp-doc");if(!V)return null;V.querySelectorAll(".header-anchor").forEach(L=>L.remove()),V.querySelectorAll("[tabindex]").forEach(L=>L.removeAttribute("tabindex")),V.querySelectorAll("script").forEach(L=>L.remove());const x=window.location.origin,T=(t.value.base||"/").replace(/\/$/,"");return V.querySelectorAll("a[href]").forEach(L=>{const N=L.getAttribute("href");N&&N.startsWith("/")&&L.setAttribute("href",`${x}${N}`)}),V.querySelectorAll("img[src]").forEach(L=>{const N=L.getAttribute("src");N&&N.startsWith("/")&&L.setAttribute("src",`${x}${N}`)}),V.innerHTML}catch{return null}}async function p(m){n.value=m.name;try{const[g,P]=await Promise.all([Promise.all(m.docPages.map(L=>d(L))),Promise.all(a.map(L=>d(L.path)))]);let h="",k=!0;g.forEach(L=>{L&&(h+=`<section class="${k?"doc-section first-section":"doc-section"}">${L}</section>`,k=!1)}),P.some(L=>L!==null)&&(h+=`<section class="doc-section appendix-divider">
        <div class="appendix-divider-inner">
          <p class="appendix-label">Anexo</p>
          <h1>Periféricos Homologados</h1>
          <p>Relação de periféricos homologados para uso com os sistemas Desbravador.</p>
        </div>
      </section>`,P.forEach(L=>{L&&(h+=`<section class="doc-section">${L}</section>`)}));const x=window.open("","_blank","width=900,height=700");if(!x){alert("Permita pop-ups neste site para gerar o PDF.");return}const T=new Date().toLocaleDateString("pt-BR",{day:"2-digit",month:"long",year:"numeric"});x.document.write(`<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${m.name} — Documentação Técnica Desbravador</title>
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
    <h1 class="cover-title">${m.name}</h1>
    <p class="cover-subtitle">Requisitos de hardware, software e configuração</p>
    <p class="cover-subtitle">Inclui periféricos homologados como anexo</p>
    <p class="cover-date">Gerado em ${T}</p>
  </div>
  ${h}
  <script>
    window.onload = function () {
      setTimeout(function () { window.print(); }, 500)
    }
  <\/script>
</body>
</html>`),x.document.close()}finally{n.value=null}}return(m,g)=>(r(),l("div",Ir,[s("table",Nr,[g[0]||(g[0]=s("thead",null,[s("tr",null,[s("th",null,"Sistema"),s("th",{style:{"text-align":"center"}},"Instalação Local"),s("th",{style:{"text-align":"center"}},"Instalação Cloud"),s("th",{style:{"text-align":"center"}},"PDF")])],-1)),s("tbody",null,[(r(),l(M,null,B(o,P=>s("tr",{key:P.name},[s("td",null,[s("a",{href:c(Z)(P.primaryLink)},_(P.name),9,Cr)]),s("td",Mr,_(P.hasLocal?"✅":"—"),1),s("td",Ar,_(P.hasCloud?"✅":"—"),1),s("td",Br,[s("button",{class:"pdf-btn",disabled:n.value===P.name,title:`Gerar PDF de ${P.name}`,onClick:h=>p(P)},[n.value===P.name?(r(),l("span",Er,"⏳")):(r(),l("span",Hr,"🖨️ PDF"))],8,Dr)])])),64))])])]))}}),Fr=y(zr,[["__scopeId","data-v-6c5ce909"]]),Or={class:"pl-root"},qr={key:0,class:"pl-controls no-print","aria-hidden":"true"},Rr={class:"pl-page-header"},jr={class:"pl-header-inner"},Gr={class:"pl-header-left"},Ur=["src","alt"],Wr={key:1,class:"pl-header-logo-text"},Kr={class:"pl-header-right"},Jr={class:"pl-body"},Yr={class:"pl-title-block"},Xr={class:"pl-title"},Qr={key:0,class:"pl-subtitle"},Zr={key:1,class:"pl-meta"},es={class:"pl-content"},ts={class:"pl-page-footer"},os={class:"pl-footer-inner"},as={class:"pl-footer-app"},ns={class:"pl-footer-date"},rs=b({__name:"PrintLayout",props:{title:{},subtitle:{},logo:{},printedBy:{},footerText:{},orientation:{default:"portrait"},paperSize:{default:"A4"},filters:{default:()=>[]},showDateTime:{type:Boolean,default:!0},appName:{default:"Desbravador Docs"},showPrintButton:{type:Boolean,default:!0}},setup(e){const t=e,{site:o}=Q(),n=new Date().toLocaleString("pt-BR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"}),i=S(()=>{var V;if(t.logo)return t.logo;const h=(V=o.value.themeConfig)==null?void 0:V.logo;if(!h)return null;const k=(o.value.base||"/").replace(/\/$/,"");return typeof h=="string"?`${k}${h}`:null}),d=S(()=>t.footerText||t.appName),p=S(()=>{var h;return t.showDateTime||!!t.printedBy||(((h=t.filters)==null?void 0:h.length)??0)>0});function m(h,k){return`
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
`}let g=null;R(()=>{g=document.createElement("style"),g.id="pl-global-print-styles",g.textContent=m(t.orientation,t.paperSize),document.head.appendChild(g)}),te(()=>{g==null||g.remove(),g=null});function P(){window.print()}return(h,k)=>(r(),l("div",Or,[e.showPrintButton?(r(),l("div",qr,[u(h.$slots,"controls",{},()=>[s("button",{class:"pl-print-btn",onClick:P},[...k[0]||(k[0]=[s("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[s("polyline",{points:"6 9 6 2 18 2 18 9"}),s("path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"}),s("rect",{x:"6",y:"14",width:"12",height:"8"})],-1),O(" Imprimir / Salvar PDF ",-1)])])],!0)])):v("",!0),s("div",{class:C(["pl-document",[`pl-paper-${e.paperSize.toLowerCase()}`,`pl-orient-${e.orientation}`]])},[s("header",Rr,[u(h.$slots,"header",{},()=>[s("div",jr,[s("div",Gr,[i.value?(r(),l("img",{key:0,src:i.value,class:"pl-header-logo",alt:e.appName},null,8,Ur)):(r(),l("span",Wr,_(e.appName),1))]),s("div",Kr,_(e.appName),1)]),k[1]||(k[1]=s("div",{class:"pl-header-rule"},null,-1))],!0)]),s("div",Jr,[s("div",Yr,[s("h1",Xr,_(e.title),1),e.subtitle?(r(),l("p",Qr,_(e.subtitle),1)):v("",!0),p.value?(r(),l("dl",Zr,[e.showDateTime?(r(),l(M,{key:0},[k[2]||(k[2]=s("dt",null,"Data:",-1)),s("dd",null,_(c(n)),1)],64)):v("",!0),e.printedBy?(r(),l(M,{key:1},[k[3]||(k[3]=s("dt",null,"Usuário:",-1)),s("dd",null,_(e.printedBy),1)],64)):v("",!0),(r(!0),l(M,null,B(e.filters,V=>(r(),l(M,{key:V.label},[s("dt",null,_(V.label)+":",1),s("dd",null,_(V.value),1)],64))),128)),u(h.$slots,"meta",{},void 0,!0)])):v("",!0)]),k[4]||(k[4]=s("hr",{class:"pl-divider"},null,-1)),s("main",es,[u(h.$slots,"default",{},void 0,!0)])]),s("footer",ts,[u(h.$slots,"footer",{},()=>[s("div",os,[s("span",as,_(d.value),1),k[5]||(k[5]=s("span",{class:"pl-footer-page"},null,-1)),s("span",ns,"Gerado em "+_(c(n)),1)]),k[6]||(k[6]=s("div",{class:"pl-footer-rule"},null,-1))],!0)])],2)]))}}),ss=y(rs,[["__scopeId","data-v-7ee5de0b"]]);function is(e="portrait",t="A4"){return`
/* ================================================================
   PRINT REPORT — Professional Corporate PDF
   Renderizado em janela própria. Não herda estilos do navegador.
   ================================================================ */

@page {
  size: ${t} ${e};
  margin: 0;
}

@page :first {
  margin: 0;
}

/* Numeração de página via Chromium margin boxes */
@page {
  @bottom-right-corner {
    content: "";
  }
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
  /* Espaço para header fixo (16mm) + footer fixo (12mm) */
  padding: 22mm 20mm 18mm;
}

/* ── Cabeçalho fixo (repete em todas as páginas) ─────────────── */
.pr-page-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 16mm;
  padding: 4mm 20mm 0;
  background: #fff;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.pr-page-header::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 20mm;
  right: 20mm;
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

/* ── Rodapé fixo ─────────────────────────────────────────────── */
.pr-page-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 12mm;
  padding: 0 20mm;
  background: #fff;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.pr-page-footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 20mm;
  right: 20mm;
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
  min-height: calc(297mm - 40mm); /* descontando padding do body */
  display: flex;
  flex-direction: column;
  page-break-after: always;
  break-after: page;
  overflow: hidden;
  margin: -22mm -20mm 0; /* neutraliza padding do body só na capa */
  width: calc(100% + 40mm);
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

@media print {
  body { padding: 22mm 20mm 18mm; }

  .pr-page-header,
  .pr-page-footer { display: flex; }

  table.pr-table thead { display: table-header-group; }

  .pr-kpi-card,
  .pr-chart-block,
  .pr-info-block,
  .pr-summary,
  .pr-signature-block {
    break-inside: avoid;
    page-break-inside: avoid;
  }

  h1, h2, h3, h4 {
    break-after: avoid;
    page-break-after: avoid;
  }
}
`}const ls={class:"pr-root"},cs={class:"pr-controls no-print"},ds=["disabled"],us={key:0,width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.2","stroke-linecap":"round","stroke-linejoin":"round"},ms={key:1,class:"pr-spinner"},ps=b({__name:"PrintReport",props:{title:{},subtitle:{},reportLabel:{},logo:{},company:{},printedBy:{},period:{},footerText:{},confidential:{},showCover:{type:Boolean,default:!1},coverNotes:{},orientation:{default:"portrait"},paperSize:{default:"A4"},appName:{default:"Desbravador Docs"}},setup(e){const t=e,{site:o}=Q(),a=A(null),n=A(!1),i=new Date,d=i.toLocaleString("pt-BR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"}),p=i.toLocaleDateString("pt-BR",{day:"2-digit",month:"long",year:"numeric"});function m(){var L;if(t.logo)return t.logo;const x=(L=o.value.themeConfig)==null?void 0:L.logo;if(!x)return null;const T=(o.value.base||"/").replace(/\/$/,"");return typeof x=="string"?`${T}${x}`:null}function g(x){const T=x.cloneNode(!0);x.querySelectorAll("canvas").forEach((N,D)=>{var H;const E=T.querySelectorAll("canvas")[D];if(E)try{const G=document.createElement("img");G.src=N.toDataURL("image/png",1),G.style.maxWidth="100%",G.style.height="auto",(H=E.parentNode)==null||H.replaceChild(G,E)}catch{}}),(o.value.base||"/").replace(/\/$/,""),T.querySelectorAll("img[src]").forEach(N=>{const D=N.getAttribute("src");D&&D.startsWith("/")&&N.setAttribute("src",`${window.location.origin}${D}`)});const L=["button","input","select","textarea",".no-print","[data-no-print]",".VPBadge",".header-anchor"];return T.querySelectorAll(L.join(",")).forEach(N=>N.remove()),T.querySelectorAll("*").forEach(N=>{Array.from(N.attributes).forEach(D=>{D.name.startsWith("data-v-")&&N.removeAttribute(D.name)})}),T}function P(x){if(!t.showCover)return"";const T=x?`<img class="pr-cover-logo" src="${x}" alt="${t.company??t.appName}" />`:`<span class="pr-cover-logo-name">${t.company??t.appName??""}</span>`,L=[t.period?`<div class="pr-cover-meta-item"><span class="pr-cover-meta-label">Período</span><span class="pr-cover-meta-value">${t.period}</span></div>`:"",t.printedBy?`<div class="pr-cover-meta-item"><span class="pr-cover-meta-label">Responsável</span><span class="pr-cover-meta-value">${t.printedBy}</span></div>`:"",`<div class="pr-cover-meta-item"><span class="pr-cover-meta-label">Data de Geração</span><span class="pr-cover-meta-value">${p}</span></div>`,t.company?`<div class="pr-cover-meta-item"><span class="pr-cover-meta-label">Empresa</span><span class="pr-cover-meta-value">${t.company}</span></div>`:""].filter(Boolean).join(""),N=t.coverNotes?`<div class="pr-cover-notes">${t.coverNotes}</div>`:"";return`
<div class="pr-cover">
  <div class="pr-cover-top">
    <div class="pr-cover-logo-wrap">${T}</div>
  </div>
  <div class="pr-cover-body">
    <div class="pr-cover-label">${t.reportLabel??"Relatório"}</div>
    <h1 class="pr-cover-title">${t.title}</h1>
    ${t.subtitle?`<p class="pr-cover-subtitle">${t.subtitle}</p>`:""}
    <div class="pr-cover-accent-bar"></div>
    <div class="pr-cover-meta">${L}</div>
    ${N}
  </div>
</div>`}function h(x){const T=x?`<img class="pr-hdr-logo" src="${x}" alt="" /><div class="pr-hdr-sep"></div>`:"",L=t.period?`<span class="pr-hdr-period">| ${t.period}</span>`:"";return`
<header class="pr-page-header">
  <div class="pr-hdr-left">
    ${T}
    <span class="pr-hdr-title">${t.title}</span>
    ${L}
  </div>
  <div class="pr-hdr-right">
    ${t.appName??""}<br>${d}
  </div>
</header>`}function k(){return`
<footer class="pr-page-footer">
  <span class="pr-ftr-company">${t.footerText??t.company??t.appName??""}</span>
  <span class="pr-ftr-confidential">${t.confidential??""}</span>
  <span class="pr-ftr-page"></span>
</footer>`}async function V(){if(!(!a.value||n.value)){n.value=!0,await new Promise(x=>setTimeout(x,50));try{const x=m(),T=g(a.value),L=P(x),N=h(x),D=k(),E=is(t.orientation,t.paperSize),H=window.open("","_blank","width=960,height=720");if(!H){alert("Permita pop-ups neste site para gerar o PDF.");return}H.document.write(`<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>${t.title} — ${t.appName??"Relatório"}</title>
  <style>${E}</style>
</head>
<body>
  ${N}
  ${D}
  ${L}
  <div class="pr-body">
    ${T.innerHTML}
  </div>
  <script>
    window.addEventListener('load', function () {
      setTimeout(function () { window.print() }, 600)
    })
  <\/script>
</body>
</html>`),H.document.close()}finally{n.value=!1}}}return(x,T)=>(r(),l("div",ls,[s("div",cs,[u(x.$slots,"controls",{},()=>[s("button",{class:"pr-btn-print",onClick:V,disabled:n.value},[n.value?v("",!0):(r(),l("svg",us,[...T[0]||(T[0]=[s("polyline",{points:"6 9 6 2 18 2 18 9"},null,-1),s("path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"},null,-1),s("rect",{x:"6",y:"14",width:"12",height:"8"},null,-1)])])),n.value?(r(),l("span",ms)):v("",!0),O(" "+_(n.value?"Preparando...":"Imprimir / Salvar PDF"),1)],8,ds)],!0)]),s("div",{ref_key:"contentRef",ref:a,class:"pr-screen-content"},[u(x.$slots,"default",{},void 0,!0)],512)]))}}),fs=y(ps,[["__scopeId","data-v-95c8d7e0"]]),vs={key:0,class:"pr-section-hdr"},hs={key:0,class:"pr-section-eyebrow"},bs={class:"pr-section-title"},gs={key:1,class:"pr-section-desc"},ks={class:"pr-section-body"},ys=b({__name:"PrintSection",props:{title:{},eyebrow:{},description:{},pageBreak:{type:Boolean}},setup(e){return(t,o)=>(r(),l("div",{class:C(["pr-section",{"pr-page-break":e.pageBreak}])},[e.title?(r(),l("div",vs,[e.eyebrow?(r(),l("span",hs,_(e.eyebrow),1)):v("",!0),s("h2",bs,_(e.title),1)])):v("",!0),e.description?(r(),l("p",gs,_(e.description),1)):v("",!0),s("div",ks,[u(t.$slots,"default",{},void 0,!0)])],2))}}),_s=y(ys,[["__scopeId","data-v-3c1ebe34"]]),$s=["data-cols"],Ps=b({__name:"PrintKPIGrid",props:{cols:{default:4}},setup(e){return(t,o)=>(r(),l("div",{class:"pr-kpi-grid","data-cols":e.cols},[u(t.$slots,"default",{},void 0,!0)],8,$s))}}),ws=y(Ps,[["__scopeId","data-v-0e7da588"]]),xs=["data-trend"],Ls={class:"pr-kpi-label"},Ss={class:"pr-kpi-value"},Vs=["data-dir"],Ts={key:1,class:"pr-kpi-note"},Is=b({__name:"PrintKPICard",props:{label:{},value:{},change:{},changeDir:{},note:{},trend:{}},setup(e){return(t,o)=>(r(),l("div",{class:"pr-kpi-card","data-trend":e.trend},[s("div",Ls,_(e.label),1),s("div",Ss,_(e.value),1),e.change?(r(),l("div",{key:0,class:"pr-kpi-change","data-dir":e.changeDir},_(e.changeDir==="up"?"▲":e.changeDir==="down"?"▼":"")+" "+_(e.change),9,Vs)):v("",!0),e.note?(r(),l("div",Ts,_(e.note),1)):v("",!0)],8,xs))}}),Ns=y(Is,[["__scopeId","data-v-e4f81f35"]]),Cs={key:0,class:"pr-table-title"},Ms={class:"pr-table"},As={key:0},Bs=["colspan"],Ds=b({__name:"PrintDataTable",props:{title:{},columns:{},rows:{},compact:{type:Boolean,default:!1}},setup(e){function t(a){const n=a.align??(a.type==="currency"||a.type==="number"?"right":a.type==="date"?"center":"left");return n==="right"?"th-right":n==="center"?"th-center":""}function o(a,n){const i=[],d=a.align??(a.type==="currency"||a.type==="number"?"right":a.type==="date"?"center":"left");return d==="right"&&i.push("td-right"),d==="center"&&i.push("td-center"),(a.bold||n._total)&&i.push("td-bold"),a.muted&&i.push("td-muted"),a.type==="mono"&&i.push("td-mono"),i.join(" ")}return(a,n)=>(r(),l("div",{class:C(["pr-table-wrap",{"pr-table-compact":e.compact}])},[e.title?(r(),l("div",Cs,_(e.title),1)):v("",!0),s("table",Ms,[s("thead",null,[s("tr",null,[(r(!0),l(M,null,B(e.columns,i=>(r(),l("th",{key:i.key,class:C(t(i)),style:ve(i.width?`width:${i.width}`:"")},_(i.label),7))),128))])]),s("tbody",null,[(r(!0),l(M,null,B(e.rows,(i,d)=>(r(),l("tr",{key:d,class:C({"tr-total":i._total,"tr-subtotal":i._subtotal})},[(r(!0),l(M,null,B(e.columns,p=>(r(),l("td",{key:p.key,class:C(o(p,i))},[u(a.$slots,`cell-${p.key}`,{value:i[p.key],row:i},()=>[O(_(i[p.key]??"—"),1)],!0)],2))),128))],2))),128)),e.rows.length===0?(r(),l("tr",As,[s("td",{colspan:e.columns.length,class:"td-center td-muted"}," Nenhum registro encontrado. ",8,Bs)])):v("",!0)])])],2))}}),Es=y(Ds,[["__scopeId","data-v-885cefbd"]]),Hs={class:"pr-chart-block"},zs={class:"pr-chart-hdr"},Fs={class:"pr-chart-title"},Os={key:0,class:"pr-chart-desc"},qs={class:"pr-chart-canvas",ref:"canvasWrap"},Rs={key:0,class:"pr-chart-footer"},js=b({__name:"PrintChartBlock",props:{title:{},description:{}},setup(e){return(t,o)=>(r(),l("div",Hs,[s("div",zs,[s("div",null,[s("div",Fs,_(e.title),1),e.description?(r(),l("div",Os,_(e.description),1)):v("",!0)])]),s("div",qs,[u(t.$slots,"default",{},void 0,!0)],512),t.$slots.footer?(r(),l("div",Rs,[u(t.$slots,"footer",{},void 0,!0)])):v("",!0)]))}}),Gs=y(js,[["__scopeId","data-v-adcb00ad"]]),Us={key:0,class:"pr-info-title"},Ws={class:"pr-info-body"},Ks=b({__name:"PrintInfoBlock",props:{title:{},variant:{default:"default"}},setup(e){return(t,o)=>(r(),l("div",{class:C(["pr-info-block",`pr-info-${e.variant}`])},[e.title?(r(),l("div",Us,_(e.title),1)):v("",!0),s("div",Ws,[u(t.$slots,"default",{},void 0,!0)])],2))}}),Js=y(Ks,[["__scopeId","data-v-b200e9ee"]]),Ys={class:"pr-summary"},Xs={class:"pr-summary-label"},Qs={class:"pr-summary-body"},Zs=b({__name:"PrintSummary",props:{label:{}},setup(e){return(t,o)=>(r(),l("div",Ys,[s("div",Xs,_(e.label??"Resumo Executivo"),1),s("div",Qs,[u(t.$slots,"default",{},void 0,!0)])]))}}),ei=y(Zs,[["__scopeId","data-v-fe604797"]]),ti={class:"pr-signature-block"},oi={key:0,class:"pr-signature-place-date"},ai=["data-cols"],ni={class:"pr-signature-name"},ri={key:0,class:"pr-signature-role"},si=b({__name:"PrintSignatureBlock",props:{signatures:{},placeDate:{}},setup(e){return(t,o)=>(r(),l("div",ti,[e.placeDate?(r(),l("p",oi,_(e.placeDate),1)):v("",!0),s("div",{class:"pr-signature-grid","data-cols":e.signatures.length<=2?e.signatures.length:3},[(r(!0),l(M,null,B(e.signatures,a=>(r(),l("div",{key:a.name,class:"pr-signature-item"},[o[0]||(o[0]=s("div",{class:"pr-signature-line"},null,-1)),s("div",ni,_(a.name),1),a.role?(r(),l("div",ri,_(a.role),1)):v("",!0)]))),128))],8,ai)]))}}),ii=y(si,[["__scopeId","data-v-df1318a4"]]),ci={extends:Tr,enhanceApp({app:e}){e.component("HomeTable",Fr),e.component("PrintLayout",ss),e.component("PrintReport",fs),e.component("PrintSection",_s),e.component("PrintKPIGrid",ws),e.component("PrintKPICard",Ns),e.component("PrintDataTable",Es),e.component("PrintChartBlock",Gs),e.component("PrintInfoBlock",Js),e.component("PrintSummary",ei),e.component("PrintSignatureBlock",ii)}};export{ci as R,un as c,I as u};
