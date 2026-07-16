const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/VPLocalSearchBox.Ds1-gQfj.js","assets/chunks/framework.Bj0Eefkv.js"])))=>i.map(i=>d[i]);
import{r as b,j as l,Y as u,H as C,Q as r,n as q,a3 as $,h as L,av as v,b as he,i as f,c as y,ac as ee,z as Oe,a6 as Re,au as te,d as S,g as s,a8 as c,y as K,af as ue,W as N,aq as j,as as ae,N as G,O as oe,at as be,P as qe,t as je,F as I,X as H,Z as J,L as ne,o as x,a0 as Se,$ as O,E as Ve,ah as re,D as W,x as se,ao as Ge,I as ge,M as me,G as Te,an as Ce,v as ie,V as Ue,q as We,_ as Ke,aj as Ie,U as Ne,a4 as Je,ax as Ye,K as Xe,ay as Qe,al as Ze}from"./framework.Bj0Eefkv.js";const et=b({__name:"VPBadge",props:{text:{},type:{default:"tip"}},setup(e){return(t,a)=>(r(),l("span",{class:C(["VPBadge",e.type])},[u(t.$slots,"default",{},()=>[q($(e.text),1)])],2))}}),tt={key:0,class:"VPBackdrop"},at=b({__name:"VPBackdrop",props:{show:{type:Boolean}},setup(e){return(t,a)=>(r(),L(he,{name:"fade"},{default:v(()=>[e.show?(r(),l("div",tt)):f("",!0)]),_:1}))}}),ot=y(at,[["__scopeId","data-v-c79a1216"]]),T=ee;function nt(e,t){let a,o=!1;return()=>{a&&clearTimeout(a),o?a=setTimeout(e,t):(e(),(o=!0)&&setTimeout(()=>o=!1,t))}}function pe(e){return e.startsWith("/")?e:`/${e}`}function ke(e){const{pathname:t,search:a,hash:o,protocol:n}=new URL(e,"http://a.com");if(Oe(e)||e.startsWith("#")||!n.startsWith("http")||!Re(t))return e;const{site:i}=T(),d=t.endsWith("/")||t.endsWith(".html")?e:e.replace(/(?:(^\.+)\/)?.*$/,`$1${t.replace(/(\.md)?$/,i.value.cleanUrls?"":".html")}${a}${o}`);return te(d)}function X({correspondingLink:e=!1}={}){const{site:t,localeIndex:a,page:o,theme:n,hash:i}=T(),d=S(()=>{var p,_;return{label:(p=t.value.locales[a.value])==null?void 0:p.label,link:((_=t.value.locales[a.value])==null?void 0:_.link)||(a.value==="root"?"/":`/${a.value}/`)}});return{localeLinks:S(()=>Object.entries(t.value.locales).flatMap(([p,_])=>d.value.label===_.label?[]:{text:_.label,link:rt(_.link||(p==="root"?"/":`/${p}/`),n.value.i18nRouting!==!1&&e,o.value.relativePath.slice(d.value.link.length-1),!t.value.cleanUrls)+i.value})),currentLang:d}}function rt(e,t,a,o){return t?e.replace(/\/$/,"")+pe(a.replace(/(^|\/)index\.md$/,"$1").replace(/\.md$/,o?".html":"")):e}const st={class:"NotFound"},it={class:"code"},lt={class:"title"},ct={class:"quote"},dt={class:"action"},ut=["href","aria-label"],mt=b({__name:"NotFound",setup(e){const{theme:t}=T(),{currentLang:a}=X();return(o,n)=>{var i,d,m,p,_;return r(),l("div",st,[s("p",it,$(((i=c(t).notFound)==null?void 0:i.code)??"404"),1),s("h1",lt,$(((d=c(t).notFound)==null?void 0:d.title)??"PAGE NOT FOUND"),1),n[0]||(n[0]=s("div",{class:"divider"},null,-1)),s("blockquote",ct,$(((m=c(t).notFound)==null?void 0:m.quote)??"But if you don't change your direction, and if you keep looking, you may end up where you are heading."),1),s("div",dt,[s("a",{class:"link",href:c(te)(c(a).link),"aria-label":((p=c(t).notFound)==null?void 0:p.linkLabel)??"go to home"},$(((_=c(t).notFound)==null?void 0:_.linkText)??"Take me home"),9,ut)])])}}}),pt=y(mt,[["__scopeId","data-v-d6be1790"]]);function Me(e,t){if(Array.isArray(e))return Q(e);if(e==null)return[];t=pe(t);const a=Object.keys(e).sort((n,i)=>i.split("/").length-n.split("/").length).find(n=>t.startsWith(pe(n))),o=a?e[a]:[];return Array.isArray(o)?Q(o):Q(o.items,o.base)}function vt(e){const t=[];let a=0;for(const o in e){const n=e[o];if(n.items){a=t.push(n);continue}t[a]||t.push({items:[]}),t[a].items.push(n)}return t}function ft(e){const t=[];function a(o){for(const n of o)n.text&&n.link&&t.push({text:n.text,link:n.link,docFooterText:n.docFooterText}),n.items&&a(n.items)}return a(e),t}function ve(e,t){return Array.isArray(t)?t.some(a=>ve(e,a)):K(e,t.link)?!0:t.items?ve(e,t.items):!1}function Q(e,t){return[...e].map(a=>{const o={...a},n=o.base||t;return n&&o.link&&(o.link=n+o.link),o.items&&(o.items=Q(o.items,n)),o})}function U(){const{frontmatter:e,page:t,theme:a}=T(),o=ue("(min-width: 960px)"),n=N(!1),i=S(()=>{const w=a.value.sidebar,M=t.value.relativePath;return w?Me(w,M):[]}),d=N(i.value);j(i,(w,M)=>{JSON.stringify(w)!==JSON.stringify(M)&&(d.value=i.value)});const m=S(()=>e.value.sidebar!==!1&&d.value.length>0&&e.value.layout!=="home"),p=S(()=>_?e.value.aside==null?a.value.aside==="left":e.value.aside==="left":!1),_=S(()=>e.value.layout==="home"?!1:e.value.aside!=null?!!e.value.aside:a.value.aside!==!1),V=S(()=>m.value&&o.value),h=S(()=>m.value?vt(d.value):[]);function g(){n.value=!0}function P(){n.value=!1}function k(){n.value?P():g()}return{isOpen:n,sidebar:d,sidebarGroups:h,hasSidebar:m,hasAside:_,leftAside:p,isSidebarEnabled:V,open:g,close:P,toggle:k}}function ht(e,t){let a;ae(()=>{a=e.value?document.activeElement:void 0}),G(()=>{window.addEventListener("keyup",o)}),oe(()=>{window.removeEventListener("keyup",o)});function o(n){n.key==="Escape"&&e.value&&(t(),a==null||a.focus())}}function bt(e){const{page:t,hash:a}=T(),o=N(!1),n=S(()=>e.value.collapsed!=null),i=S(()=>!!e.value.link),d=N(!1),m=()=>{d.value=K(t.value.relativePath,e.value.link)};j([t,e,a],m),G(m);const p=S(()=>d.value?!0:e.value.items?ve(t.value.relativePath,e.value.items):!1),_=S(()=>!!(e.value.items&&e.value.items.length));ae(()=>{o.value=!!(n.value&&e.value.collapsed)}),be(()=>{(d.value||p.value)&&(o.value=!1)});function V(){n.value&&(o.value=!o.value)}return{collapsed:o,collapsible:n,isLink:i,isActiveLink:d,hasActiveLink:p,hasChildren:_,toggle:V}}function gt(){const{hasSidebar:e}=U(),t=ue("(min-width: 960px)"),a=ue("(min-width: 1280px)");return{isAsideEnabled:S(()=>!a.value&&!t.value?!1:e.value?a.value:t.value)}}const kt=/\b(?:VPBadge|header-anchor|footnote-ref|ignore-header)\b/,fe=[];function De(e){return typeof e.outline=="object"&&!Array.isArray(e.outline)&&e.outline.label||e.outlineTitle||"On this page"}function ye(e){const t=[...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")].filter(a=>a.id&&a.hasChildNodes()).map(a=>{const o=Number(a.tagName[1]);return{element:a,title:yt(a),link:"#"+a.id,level:o}});return $t(t,e)}function yt(e){let t="";for(const a of e.childNodes)if(a.nodeType===1){if(kt.test(a.className))continue;t+=a.textContent}else a.nodeType===3&&(t+=a.textContent);return t.trim()}function $t(e,t){if(t===!1)return[];const a=(typeof t=="object"&&!Array.isArray(t)?t.level:t)||2,[o,n]=typeof a=="number"?[a,a]:a==="deep"?[2,6]:a;return wt(e,o,n)}function _t(e,t){const{isAsideEnabled:a}=gt(),o=nt(i,100);let n=null;G(()=>{requestAnimationFrame(i),window.addEventListener("scroll",o)}),qe(()=>{d(location.hash)}),oe(()=>{window.removeEventListener("scroll",o)});function i(){if(!a.value)return;const m=window.scrollY,p=window.innerHeight,_=document.body.offsetHeight,V=Math.abs(m+p-_)<1,h=fe.map(({element:P,link:k})=>({link:k,top:Pt(P)})).filter(({top:P})=>!Number.isNaN(P)).sort((P,k)=>P.top-k.top);if(!h.length){d(null);return}if(m<1){d(null);return}if(V){d(h[h.length-1].link);return}let g=null;for(const{link:P,top:k}of h){if(k>m+je()+4)break;g=P}d(g)}function d(m){n&&n.classList.remove("active"),m==null?n=null:n=e.value.querySelector(`a[href="${decodeURIComponent(m)}"]`);const p=n;p?(p.classList.add("active"),t.value.style.top=p.offsetTop+39+"px",t.value.style.opacity="1"):(t.value.style.top="33px",t.value.style.opacity="0")}}function Pt(e){let t=0;for(;e!==document.body;){if(e===null)return NaN;t+=e.offsetTop,e=e.offsetParent}return t}function wt(e,t,a){fe.length=0;const o=[],n=[];return e.forEach(i=>{const d={...i,children:[]};let m=n[n.length-1];for(;m&&m.level>=d.level;)n.pop(),m=n[n.length-1];if(d.element.classList.contains("ignore-header")||m&&"shouldIgnore"in m){n.push({level:d.level,shouldIgnore:!0});return}d.level>a||d.level<t||(fe.push({element:d.element,link:d.link}),m?m.children.push(d):o.push(d),n.push(d))}),o}const xt=["href","title"],Lt=b({__name:"VPDocOutlineItem",props:{headers:{},root:{type:Boolean}},setup(e){function t({target:a}){const o=a.href.split("#")[1],n=document.getElementById(decodeURIComponent(o));n==null||n.focus({preventScroll:!0})}return(a,o)=>{const n=J("VPDocOutlineItem",!0);return r(),l("ul",{class:C(["VPDocOutlineItem",e.root?"root":"nested"])},[(r(!0),l(I,null,H(e.headers,({children:i,link:d,title:m})=>(r(),l("li",null,[s("a",{class:"outline-link",href:d,onClick:t,title:m},$(m),9,xt),i!=null&&i.length?(r(),L(n,{key:0,headers:i},null,8,["headers"])):f("",!0)]))),256))],2)}}}),Ae=y(Lt,[["__scopeId","data-v-b933a997"]]),St={class:"content"},Vt={"aria-level":"2",class:"outline-title",id:"doc-outline-aria-label",role:"heading"},Tt=b({__name:"VPDocAsideOutline",setup(e){const{frontmatter:t,theme:a}=T(),o=Se([]);ne(()=>{o.value=ye(t.value.outline??a.value.outline)});const n=N(),i=N();return _t(n,i),(d,m)=>(r(),l("nav",{"aria-labelledby":"doc-outline-aria-label",class:C(["VPDocAsideOutline",{"has-outline":o.value.length>0}]),ref_key:"container",ref:n},[s("div",St,[s("div",{class:"outline-marker",ref_key:"marker",ref:i},null,512),s("div",Vt,$(c(De)(c(a))),1),x(Ae,{headers:o.value,root:!0},null,8,["headers"])])],2))}}),Ct=y(Tt,[["__scopeId","data-v-a5bbad30"]]),It={class:"VPDocAsideCarbonAds"},Nt=b({__name:"VPDocAsideCarbonAds",props:{carbonAds:{}},setup(e){const t=()=>null;return(a,o)=>(r(),l("div",It,[x(c(t),{"carbon-ads":e.carbonAds},null,8,["carbon-ads"])]))}}),Mt={class:"VPDocAside"},Dt=b({__name:"VPDocAside",setup(e){const{theme:t}=T();return(a,o)=>(r(),l("div",Mt,[u(a.$slots,"aside-top",{},void 0,!0),u(a.$slots,"aside-outline-before",{},void 0,!0),x(Ct),u(a.$slots,"aside-outline-after",{},void 0,!0),o[0]||(o[0]=s("div",{class:"spacer"},null,-1)),u(a.$slots,"aside-ads-before",{},void 0,!0),c(t).carbonAds?(r(),L(Nt,{key:0,"carbon-ads":c(t).carbonAds},null,8,["carbon-ads"])):f("",!0),u(a.$slots,"aside-ads-after",{},void 0,!0),u(a.$slots,"aside-bottom",{},void 0,!0)]))}}),At=y(Dt,[["__scopeId","data-v-3f215769"]]);function Bt(){const{theme:e,page:t}=T();return S(()=>{const{text:a="Edit this page",pattern:o=""}=e.value.editLink||{};let n;return typeof o=="function"?n=o(t.value):n=o.replace(/:path/g,t.value.filePath),{url:n,text:a}})}function Ht(){const{page:e,theme:t,frontmatter:a}=T();return S(()=>{var _,V,h,g,P,k,w,M;const o=Me(t.value.sidebar,e.value.relativePath),n=ft(o),i=Et(n,D=>D.link.replace(/[?#].*$/,"")),d=i.findIndex(D=>K(e.value.relativePath,D.link)),m=((_=t.value.docFooter)==null?void 0:_.prev)===!1&&!a.value.prev||a.value.prev===!1,p=((V=t.value.docFooter)==null?void 0:V.next)===!1&&!a.value.next||a.value.next===!1;return{prev:m?void 0:{text:(typeof a.value.prev=="string"?a.value.prev:typeof a.value.prev=="object"?a.value.prev.text:void 0)??((h=i[d-1])==null?void 0:h.docFooterText)??((g=i[d-1])==null?void 0:g.text),link:(typeof a.value.prev=="object"?a.value.prev.link:void 0)??((P=i[d-1])==null?void 0:P.link)},next:p?void 0:{text:(typeof a.value.next=="string"?a.value.next:typeof a.value.next=="object"?a.value.next.text:void 0)??((k=i[d+1])==null?void 0:k.docFooterText)??((w=i[d+1])==null?void 0:w.text),link:(typeof a.value.next=="object"?a.value.next.link:void 0)??((M=i[d+1])==null?void 0:M.link)}}})}function Et(e,t){const a=new Set;return e.filter(o=>{const n=t(o);return a.has(n)?!1:a.add(n)})}const R=b({__name:"VPLink",props:{tag:{},href:{},noIcon:{type:Boolean},target:{},rel:{}},setup(e){const t=e,a=S(()=>t.tag??(t.href?"a":"span")),o=S(()=>t.href&&Ve.test(t.href)||t.target==="_blank");return(n,i)=>(r(),L(O(a.value),{class:C(["VPLink",{link:e.href,"vp-external-link-icon":o.value,"no-icon":e.noIcon}]),href:e.href?c(ke)(e.href):void 0,target:e.target??(o.value?"_blank":void 0),rel:e.rel??(o.value?"noreferrer":void 0)},{default:v(()=>[u(n.$slots,"default")]),_:3},8,["class","href","target","rel"]))}}),zt={class:"VPLastUpdated"},Ft=["datetime"],Ot=b({__name:"VPDocFooterLastUpdated",setup(e){const{theme:t,page:a,lang:o}=T(),n=S(()=>new Date(a.value.lastUpdated)),i=S(()=>n.value.toISOString()),d=N("");return G(()=>{ae(()=>{var m,p,_;d.value=new Intl.DateTimeFormat((p=(m=t.value.lastUpdated)==null?void 0:m.formatOptions)!=null&&p.forceLocale?o.value:void 0,((_=t.value.lastUpdated)==null?void 0:_.formatOptions)??{dateStyle:"short",timeStyle:"short"}).format(n.value)})}),(m,p)=>{var _;return r(),l("p",zt,[q($(((_=c(t).lastUpdated)==null?void 0:_.text)||c(t).lastUpdatedText||"Last updated")+": ",1),s("time",{datetime:i.value},$(d.value),9,Ft)])}}}),Rt=y(Ot,[["__scopeId","data-v-e98dd255"]]),qt={key:0,class:"VPDocFooter"},jt={key:0,class:"edit-info"},Gt={key:0,class:"edit-link"},Ut={key:1,class:"last-updated"},Wt={key:1,class:"prev-next","aria-labelledby":"doc-footer-aria-label"},Kt={class:"pager"},Jt=["innerHTML"],Yt=["innerHTML"],Xt={class:"pager"},Qt=["innerHTML"],Zt=["innerHTML"],ea=b({__name:"VPDocFooter",setup(e){const{theme:t,page:a,frontmatter:o}=T(),n=Bt(),i=Ht(),d=S(()=>t.value.editLink&&o.value.editLink!==!1),m=S(()=>a.value.lastUpdated),p=S(()=>d.value||m.value||i.value.prev||i.value.next);return(_,V)=>{var h,g,P,k;return p.value?(r(),l("footer",qt,[u(_.$slots,"doc-footer-before",{},void 0,!0),d.value||m.value?(r(),l("div",jt,[d.value?(r(),l("div",Gt,[x(R,{class:"edit-link-button",href:c(n).url,"no-icon":!0},{default:v(()=>[V[0]||(V[0]=s("span",{class:"vpi-square-pen edit-link-icon"},null,-1)),q(" "+$(c(n).text),1)]),_:1},8,["href"])])):f("",!0),m.value?(r(),l("div",Ut,[x(Rt)])):f("",!0)])):f("",!0),(h=c(i).prev)!=null&&h.link||(g=c(i).next)!=null&&g.link?(r(),l("nav",Wt,[V[1]||(V[1]=s("span",{class:"visually-hidden",id:"doc-footer-aria-label"},"Pager",-1)),s("div",Kt,[(P=c(i).prev)!=null&&P.link?(r(),L(R,{key:0,class:"pager-link prev",href:c(i).prev.link},{default:v(()=>{var w;return[s("span",{class:"desc",innerHTML:((w=c(t).docFooter)==null?void 0:w.prev)||"Previous page"},null,8,Jt),s("span",{class:"title",innerHTML:c(i).prev.text},null,8,Yt)]}),_:1},8,["href"])):f("",!0)]),s("div",Xt,[(k=c(i).next)!=null&&k.link?(r(),L(R,{key:0,class:"pager-link next",href:c(i).next.link},{default:v(()=>{var w;return[s("span",{class:"desc",innerHTML:((w=c(t).docFooter)==null?void 0:w.next)||"Next page"},null,8,Qt),s("span",{class:"title",innerHTML:c(i).next.text},null,8,Zt)]}),_:1},8,["href"])):f("",!0)])])):f("",!0)])):f("",!0)}}}),ta=y(ea,[["__scopeId","data-v-e257564d"]]),aa={class:"container"},oa={class:"aside-container"},na={class:"aside-content"},ra={class:"content"},sa={class:"content-container"},ia={class:"main"},la=b({__name:"VPDoc",setup(e){const{theme:t}=T(),a=re(),{hasSidebar:o,hasAside:n,leftAside:i}=U(),d=S(()=>a.path.replace(/[./]+/g,"_").replace(/_html$/,""));return(m,p)=>{const _=J("Content");return r(),l("div",{class:C(["VPDoc",{"has-sidebar":c(o),"has-aside":c(n)}])},[u(m.$slots,"doc-top",{},void 0,!0),s("div",aa,[c(n)?(r(),l("div",{key:0,class:C(["aside",{"left-aside":c(i)}])},[p[0]||(p[0]=s("div",{class:"aside-curtain"},null,-1)),s("div",oa,[s("div",na,[x(At,null,{"aside-top":v(()=>[u(m.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":v(()=>[u(m.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":v(()=>[u(m.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":v(()=>[u(m.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":v(()=>[u(m.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":v(()=>[u(m.$slots,"aside-ads-after",{},void 0,!0)]),_:3})])])],2)):f("",!0),s("div",ra,[s("div",sa,[u(m.$slots,"doc-before",{},void 0,!0),s("main",ia,[x(_,{class:C(["vp-doc",[d.value,c(t).externalLinkIcon&&"external-link-icon-enabled"]])},null,8,["class"])]),x(ta,null,{"doc-footer-before":v(()=>[u(m.$slots,"doc-footer-before",{},void 0,!0)]),_:3}),u(m.$slots,"doc-after",{},void 0,!0)])])]),u(m.$slots,"doc-bottom",{},void 0,!0)],2)}}}),ca=y(la,[["__scopeId","data-v-39a288b8"]]),da=b({__name:"VPButton",props:{tag:{},size:{default:"medium"},theme:{default:"brand"},text:{},href:{},target:{},rel:{}},setup(e){const t=e,a=S(()=>t.href&&Ve.test(t.href)),o=S(()=>t.tag||(t.href?"a":"button"));return(n,i)=>(r(),L(O(o.value),{class:C(["VPButton",[e.size,e.theme]]),href:e.href?c(ke)(e.href):void 0,target:t.target??(a.value?"_blank":void 0),rel:t.rel??(a.value?"noreferrer":void 0)},{default:v(()=>[q($(e.text),1)]),_:1},8,["class","href","target","rel"]))}}),ua=y(da,[["__scopeId","data-v-fa7799d5"]]),ma=["src","alt"],pa=b({inheritAttrs:!1,__name:"VPImage",props:{image:{},alt:{}},setup(e){return(t,a)=>{const o=J("VPImage",!0);return e.image?(r(),l(I,{key:0},[typeof e.image=="string"||"src"in e.image?(r(),l("img",W({key:0,class:"VPImage"},typeof e.image=="string"?t.$attrs:{...e.image,...t.$attrs},{src:c(te)(typeof e.image=="string"?e.image:e.image.src),alt:e.alt??(typeof e.image=="string"?"":e.image.alt||"")}),null,16,ma)):(r(),l(I,{key:1},[x(o,W({class:"dark",image:e.image.dark,alt:e.image.alt},t.$attrs),null,16,["image","alt"]),x(o,W({class:"light",image:e.image.light,alt:e.image.alt},t.$attrs),null,16,["image","alt"])],64))],64)):f("",!0)}}}),Z=y(pa,[["__scopeId","data-v-8426fc1a"]]),va={class:"container"},fa={class:"main"},ha={class:"heading"},ba=["innerHTML"],ga=["innerHTML"],ka=["innerHTML"],ya={key:0,class:"actions"},$a={key:0,class:"image"},_a={class:"image-container"},Pa=b({__name:"VPHero",props:{name:{},text:{},tagline:{},image:{},actions:{}},setup(e){const t=se("hero-image-slot-exists");return(a,o)=>(r(),l("div",{class:C(["VPHero",{"has-image":e.image||c(t)}])},[s("div",va,[s("div",fa,[u(a.$slots,"home-hero-info-before",{},void 0,!0),u(a.$slots,"home-hero-info",{},()=>[s("h1",ha,[e.name?(r(),l("span",{key:0,innerHTML:e.name,class:"name clip"},null,8,ba)):f("",!0),e.text?(r(),l("span",{key:1,innerHTML:e.text,class:"text"},null,8,ga)):f("",!0)]),e.tagline?(r(),l("p",{key:0,innerHTML:e.tagline,class:"tagline"},null,8,ka)):f("",!0)],!0),u(a.$slots,"home-hero-info-after",{},void 0,!0),e.actions?(r(),l("div",ya,[(r(!0),l(I,null,H(e.actions,n=>(r(),l("div",{key:n.link,class:"action"},[x(ua,{tag:"a",size:"medium",theme:n.theme,text:n.text,href:n.link,target:n.target,rel:n.rel},null,8,["theme","text","href","target","rel"])]))),128))])):f("",!0),u(a.$slots,"home-hero-actions-after",{},void 0,!0)]),e.image||c(t)?(r(),l("div",$a,[s("div",_a,[o[0]||(o[0]=s("div",{class:"image-bg"},null,-1)),u(a.$slots,"home-hero-image",{},()=>[e.image?(r(),L(Z,{key:0,class:"image-src",image:e.image},null,8,["image"])):f("",!0)],!0)])])):f("",!0)])],2))}}),wa=y(Pa,[["__scopeId","data-v-4f9c455b"]]),xa=b({__name:"VPHomeHero",setup(e){const{frontmatter:t}=T();return(a,o)=>c(t).hero?(r(),L(wa,{key:0,class:"VPHomeHero",name:c(t).hero.name,text:c(t).hero.text,tagline:c(t).hero.tagline,image:c(t).hero.image,actions:c(t).hero.actions},{"home-hero-info-before":v(()=>[u(a.$slots,"home-hero-info-before")]),"home-hero-info":v(()=>[u(a.$slots,"home-hero-info")]),"home-hero-info-after":v(()=>[u(a.$slots,"home-hero-info-after")]),"home-hero-actions-after":v(()=>[u(a.$slots,"home-hero-actions-after")]),"home-hero-image":v(()=>[u(a.$slots,"home-hero-image")]),_:3},8,["name","text","tagline","image","actions"])):f("",!0)}}),La={class:"box"},Sa={key:0,class:"icon"},Va=["innerHTML"],Ta=["innerHTML"],Ca=["innerHTML"],Ia={key:4,class:"link-text"},Na={class:"link-text-value"},Ma=b({__name:"VPFeature",props:{icon:{},title:{},details:{},link:{},linkText:{},rel:{},target:{}},setup(e){return(t,a)=>(r(),L(R,{class:"VPFeature",href:e.link,rel:e.rel,target:e.target,"no-icon":!0,tag:e.link?"a":"div"},{default:v(()=>[s("article",La,[typeof e.icon=="object"&&e.icon.wrap?(r(),l("div",Sa,[x(Z,{image:e.icon,alt:e.icon.alt,height:e.icon.height||48,width:e.icon.width||48},null,8,["image","alt","height","width"])])):typeof e.icon=="object"?(r(),L(Z,{key:1,image:e.icon,alt:e.icon.alt,height:e.icon.height||48,width:e.icon.width||48},null,8,["image","alt","height","width"])):e.icon?(r(),l("div",{key:2,class:"icon",innerHTML:e.icon},null,8,Va)):f("",!0),s("h2",{class:"title",innerHTML:e.title},null,8,Ta),e.details?(r(),l("p",{key:3,class:"details",innerHTML:e.details},null,8,Ca)):f("",!0),e.linkText?(r(),l("div",Ia,[s("p",Na,[q($(e.linkText)+" ",1),a[0]||(a[0]=s("span",{class:"vpi-arrow-right link-text-icon"},null,-1))])])):f("",!0)])]),_:1},8,["href","rel","target","tag"]))}}),Da=y(Ma,[["__scopeId","data-v-a3976bdc"]]),Aa={key:0,class:"VPFeatures"},Ba={class:"container"},Ha={class:"items"},Ea=b({__name:"VPFeatures",props:{features:{}},setup(e){const t=e,a=S(()=>{const o=t.features.length;if(o){if(o===2)return"grid-2";if(o===3)return"grid-3";if(o%3===0)return"grid-6";if(o>3)return"grid-4"}else return});return(o,n)=>e.features?(r(),l("div",Aa,[s("div",Ba,[s("div",Ha,[(r(!0),l(I,null,H(e.features,i=>(r(),l("div",{key:i.title,class:C(["item",[a.value]])},[x(Da,{icon:i.icon,title:i.title,details:i.details,link:i.link,"link-text":i.linkText,rel:i.rel,target:i.target},null,8,["icon","title","details","link","link-text","rel","target"])],2))),128))])])])):f("",!0)}}),za=y(Ea,[["__scopeId","data-v-a6181336"]]),Fa=b({__name:"VPHomeFeatures",setup(e){const{frontmatter:t}=T();return(a,o)=>c(t).features?(r(),L(za,{key:0,class:"VPHomeFeatures",features:c(t).features},null,8,["features"])):f("",!0)}}),Oa=b({__name:"VPHomeContent",setup(e){const{width:t}=Ge({initialWidth:0,includeScrollbar:!1});return(a,o)=>(r(),l("div",{class:"vp-doc container",style:ge(c(t)?{"--vp-offset":`calc(50% - ${c(t)/2}px)`}:{})},[u(a.$slots,"default",{},void 0,!0)],4))}}),Ra=y(Oa,[["__scopeId","data-v-8e2d4988"]]),qa=b({__name:"VPHome",setup(e){const{frontmatter:t,theme:a}=T();return(o,n)=>{const i=J("Content");return r(),l("div",{class:C(["VPHome",{"external-link-icon-enabled":c(a).externalLinkIcon}])},[u(o.$slots,"home-hero-before",{},void 0,!0),x(xa,null,{"home-hero-info-before":v(()=>[u(o.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":v(()=>[u(o.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":v(()=>[u(o.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":v(()=>[u(o.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":v(()=>[u(o.$slots,"home-hero-image",{},void 0,!0)]),_:3}),u(o.$slots,"home-hero-after",{},void 0,!0),u(o.$slots,"home-features-before",{},void 0,!0),x(Fa),u(o.$slots,"home-features-after",{},void 0,!0),c(t).markdownStyles!==!1?(r(),L(Ra,{key:0},{default:v(()=>[x(i)]),_:1})):(r(),L(i,{key:1}))],2)}}}),ja=y(qa,[["__scopeId","data-v-8b561e3d"]]),Ga={},Ua={class:"VPPage"};function Wa(e,t){const a=J("Content");return r(),l("div",Ua,[u(e.$slots,"page-top"),x(a),u(e.$slots,"page-bottom")])}const Ka=y(Ga,[["render",Wa]]),Ja=b({__name:"VPContent",setup(e){const{page:t,frontmatter:a}=T(),{hasSidebar:o}=U();return(n,i)=>(r(),l("div",{class:C(["VPContent",{"has-sidebar":c(o),"is-home":c(a).layout==="home"}]),id:"VPContent"},[c(t).isNotFound?u(n.$slots,"not-found",{key:0},()=>[x(pt)],!0):c(a).layout==="page"?(r(),L(Ka,{key:1},{"page-top":v(()=>[u(n.$slots,"page-top",{},void 0,!0)]),"page-bottom":v(()=>[u(n.$slots,"page-bottom",{},void 0,!0)]),_:3})):c(a).layout==="home"?(r(),L(ja,{key:2},{"home-hero-before":v(()=>[u(n.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":v(()=>[u(n.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":v(()=>[u(n.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":v(()=>[u(n.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":v(()=>[u(n.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":v(()=>[u(n.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":v(()=>[u(n.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":v(()=>[u(n.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":v(()=>[u(n.$slots,"home-features-after",{},void 0,!0)]),_:3})):c(a).layout&&c(a).layout!=="doc"?(r(),L(O(c(a).layout),{key:3})):(r(),L(ca,{key:4},{"doc-top":v(()=>[u(n.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":v(()=>[u(n.$slots,"doc-bottom",{},void 0,!0)]),"doc-footer-before":v(()=>[u(n.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":v(()=>[u(n.$slots,"doc-before",{},void 0,!0)]),"doc-after":v(()=>[u(n.$slots,"doc-after",{},void 0,!0)]),"aside-top":v(()=>[u(n.$slots,"aside-top",{},void 0,!0)]),"aside-outline-before":v(()=>[u(n.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":v(()=>[u(n.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":v(()=>[u(n.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":v(()=>[u(n.$slots,"aside-ads-after",{},void 0,!0)]),"aside-bottom":v(()=>[u(n.$slots,"aside-bottom",{},void 0,!0)]),_:3}))],2))}}),Ya=y(Ja,[["__scopeId","data-v-1428d186"]]),Xa={class:"container"},Qa=["innerHTML"],Za=["innerHTML"],eo=b({__name:"VPFooter",setup(e){const{theme:t,frontmatter:a}=T(),{hasSidebar:o}=U();return(n,i)=>c(t).footer&&c(a).footer!==!1?(r(),l("footer",{key:0,class:C(["VPFooter",{"has-sidebar":c(o)}])},[s("div",Xa,[c(t).footer.message?(r(),l("p",{key:0,class:"message",innerHTML:c(t).footer.message},null,8,Qa)):f("",!0),c(t).footer.copyright?(r(),l("p",{key:1,class:"copyright",innerHTML:c(t).footer.copyright},null,8,Za)):f("",!0)])],2)):f("",!0)}}),to=y(eo,[["__scopeId","data-v-e315a0ad"]]);function ao(){const{theme:e,frontmatter:t}=T(),a=Se([]),o=S(()=>a.value.length>0);return ne(()=>{a.value=ye(t.value.outline??e.value.outline)}),{headers:a,hasLocalNav:o}}const oo={class:"menu-text"},no={class:"header"},ro={class:"outline"},so=b({__name:"VPLocalNavOutlineDropdown",props:{headers:{},navHeight:{}},setup(e){const t=e,{theme:a}=T(),o=N(!1),n=N(0),i=N(),d=N();function m(h){var g;(g=i.value)!=null&&g.contains(h.target)||(o.value=!1)}j(o,h=>{if(h){document.addEventListener("click",m);return}document.removeEventListener("click",m)}),me("Escape",()=>{o.value=!1}),ne(()=>{o.value=!1});function p(){o.value=!o.value,n.value=window.innerHeight+Math.min(window.scrollY-t.navHeight,0)}function _(h){h.target.classList.contains("outline-link")&&(d.value&&(d.value.style.transition="none"),Te(()=>{o.value=!1}))}function V(){o.value=!1,window.scrollTo({top:0,left:0,behavior:"smooth"})}return(h,g)=>(r(),l("div",{class:"VPLocalNavOutlineDropdown",style:ge({"--vp-vh":n.value+"px"}),ref_key:"main",ref:i},[e.headers.length>0?(r(),l("button",{key:0,onClick:p,class:C({open:o.value})},[s("span",oo,$(c(De)(c(a))),1),g[0]||(g[0]=s("span",{class:"vpi-chevron-right icon"},null,-1))],2)):(r(),l("button",{key:1,onClick:V},$(c(a).returnToTopLabel||"Return to top"),1)),x(he,{name:"flyout"},{default:v(()=>[o.value?(r(),l("div",{key:0,ref_key:"items",ref:d,class:"items",onClick:_},[s("div",no,[s("a",{class:"top-link",href:"#",onClick:V},$(c(a).returnToTopLabel||"Return to top"),1)]),s("div",ro,[x(Ae,{headers:e.headers},null,8,["headers"])])],512)):f("",!0)]),_:1})],4))}}),io=y(so,[["__scopeId","data-v-8a42e2b4"]]),lo={class:"container"},co=["aria-expanded"],uo={class:"menu-text"},mo=b({__name:"VPLocalNav",props:{open:{type:Boolean}},emits:["open-menu"],setup(e){const{theme:t,frontmatter:a}=T(),{hasSidebar:o}=U(),{headers:n}=ao(),{y:i}=Ce(),d=N(0);G(()=>{d.value=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--vp-nav-height"))}),ne(()=>{n.value=ye(a.value.outline??t.value.outline)});const m=S(()=>n.value.length===0),p=S(()=>m.value&&!o.value),_=S(()=>({VPLocalNav:!0,"has-sidebar":o.value,empty:m.value,fixed:p.value}));return(V,h)=>c(a).layout!=="home"&&(!p.value||c(i)>=d.value)?(r(),l("div",{key:0,class:C(_.value)},[s("div",lo,[c(o)?(r(),l("button",{key:0,class:"menu","aria-expanded":e.open,"aria-controls":"VPSidebarNav",onClick:h[0]||(h[0]=g=>V.$emit("open-menu"))},[h[1]||(h[1]=s("span",{class:"vpi-align-left menu-icon"},null,-1)),s("span",uo,$(c(t).sidebarMenuLabel||"Menu"),1)],8,co)):f("",!0),x(io,{headers:c(n),navHeight:d.value},null,8,["headers","navHeight"])])],2)):f("",!0)}}),po=y(mo,[["__scopeId","data-v-a6f0e41e"]]);function vo(){const e=N(!1);function t(){e.value=!0,window.addEventListener("resize",n)}function a(){e.value=!1,window.removeEventListener("resize",n)}function o(){e.value?a():t()}function n(){window.outerWidth>=768&&a()}const i=re();return j(()=>i.path,a),{isScreenOpen:e,openScreen:t,closeScreen:a,toggleScreen:o}}const fo={},ho={class:"VPSwitch",type:"button",role:"switch"},bo={class:"check"},go={key:0,class:"icon"};function ko(e,t){return r(),l("button",ho,[s("span",bo,[e.$slots.default?(r(),l("span",go,[u(e.$slots,"default",{},void 0,!0)])):f("",!0)])])}const yo=y(fo,[["render",ko],["__scopeId","data-v-1d5665e3"]]),$o=b({__name:"VPSwitchAppearance",setup(e){const{isDark:t,theme:a}=T(),o=se("toggle-appearance",()=>{t.value=!t.value}),n=N("");return be(()=>{n.value=t.value?a.value.lightModeSwitchTitle||"Switch to light theme":a.value.darkModeSwitchTitle||"Switch to dark theme"}),(i,d)=>(r(),L(yo,{title:n.value,class:"VPSwitchAppearance","aria-checked":c(t),onClick:c(o)},{default:v(()=>[...d[0]||(d[0]=[s("span",{class:"vpi-sun sun"},null,-1),s("span",{class:"vpi-moon moon"},null,-1)])]),_:1},8,["title","aria-checked","onClick"]))}}),$e=y($o,[["__scopeId","data-v-5337faa4"]]),_o={key:0,class:"VPNavBarAppearance"},Po=b({__name:"VPNavBarAppearance",setup(e){const{site:t}=T();return(a,o)=>c(t).appearance&&c(t).appearance!=="force-dark"&&c(t).appearance!=="force-auto"?(r(),l("div",_o,[x($e)])):f("",!0)}}),wo=y(Po,[["__scopeId","data-v-6c893767"]]),_e=N();let Be=!1,de=0;function xo(e){const t=N(!1);if(ie){!Be&&Lo(),de++;const a=j(_e,o=>{var n,i,d;o===e.el.value||(n=e.el.value)!=null&&n.contains(o)?(t.value=!0,(i=e.onFocus)==null||i.call(e)):(t.value=!1,(d=e.onBlur)==null||d.call(e))});oe(()=>{a(),de--,de||So()})}return Ue(t)}function Lo(){document.addEventListener("focusin",He),Be=!0,_e.value=document.activeElement}function So(){document.removeEventListener("focusin",He)}function He(){_e.value=document.activeElement}const Vo={class:"VPMenuLink"},To=["innerHTML"],Co=b({__name:"VPMenuLink",props:{item:{}},setup(e){const{page:t}=T();return(a,o)=>(r(),l("div",Vo,[x(R,{class:C({active:c(K)(c(t).relativePath,e.item.activeMatch||e.item.link,!!e.item.activeMatch)}),href:e.item.link,target:e.item.target,rel:e.item.rel,"no-icon":e.item.noIcon},{default:v(()=>[s("span",{innerHTML:e.item.text},null,8,To)]),_:1},8,["class","href","target","rel","no-icon"])]))}}),le=y(Co,[["__scopeId","data-v-35975db6"]]),Io={class:"VPMenuGroup"},No={key:0,class:"title"},Mo=b({__name:"VPMenuGroup",props:{text:{},items:{}},setup(e){return(t,a)=>(r(),l("div",Io,[e.text?(r(),l("p",No,$(e.text),1)):f("",!0),(r(!0),l(I,null,H(e.items,o=>(r(),l(I,null,["link"in o?(r(),L(le,{key:0,item:o},null,8,["item"])):f("",!0)],64))),256))]))}}),Do=y(Mo,[["__scopeId","data-v-69e747b5"]]),Ao={class:"VPMenu"},Bo={key:0,class:"items"},Ho=b({__name:"VPMenu",props:{items:{}},setup(e){return(t,a)=>(r(),l("div",Ao,[e.items?(r(),l("div",Bo,[(r(!0),l(I,null,H(e.items,o=>(r(),l(I,{key:JSON.stringify(o)},["link"in o?(r(),L(le,{key:0,item:o},null,8,["item"])):"component"in o?(r(),L(O(o.component),W({key:1,ref_for:!0},o.props),null,16)):(r(),L(Do,{key:2,text:o.text,items:o.items},null,8,["text","items"]))],64))),128))])):f("",!0),u(t.$slots,"default",{},void 0,!0)]))}}),Eo=y(Ho,[["__scopeId","data-v-b98bc113"]]),zo=["aria-expanded","aria-label"],Fo={key:0,class:"text"},Oo=["innerHTML"],Ro={key:1,class:"vpi-more-horizontal icon"},qo={class:"menu"},jo=b({__name:"VPFlyout",props:{icon:{},button:{},label:{},items:{}},setup(e){const t=N(!1),a=N();xo({el:a,onBlur:o});function o(){t.value=!1}return(n,i)=>(r(),l("div",{class:"VPFlyout",ref_key:"el",ref:a,onMouseenter:i[1]||(i[1]=d=>t.value=!0),onMouseleave:i[2]||(i[2]=d=>t.value=!1)},[s("button",{type:"button",class:"button","aria-haspopup":"true","aria-expanded":t.value,"aria-label":e.label,onClick:i[0]||(i[0]=d=>t.value=!t.value)},[e.button||e.icon?(r(),l("span",Fo,[e.icon?(r(),l("span",{key:0,class:C([e.icon,"option-icon"])},null,2)):f("",!0),e.button?(r(),l("span",{key:1,innerHTML:e.button},null,8,Oo)):f("",!0),i[3]||(i[3]=s("span",{class:"vpi-chevron-down text-icon"},null,-1))])):(r(),l("span",Ro))],8,zo),s("div",qo,[x(Eo,{items:e.items},{default:v(()=>[u(n.$slots,"default",{},void 0,!0)]),_:3},8,["items"])])],544))}}),Pe=y(jo,[["__scopeId","data-v-cf11d7a2"]]),Go=["href","aria-label","innerHTML"],Uo=b({__name:"VPSocialLink",props:{icon:{},link:{},ariaLabel:{}},setup(e){const t=e,a=N();G(async()=>{var i;await Te();const n=(i=a.value)==null?void 0:i.children[0];n instanceof HTMLElement&&n.className.startsWith("vpi-social-")&&(getComputedStyle(n).maskImage||getComputedStyle(n).webkitMaskImage)==="none"&&n.style.setProperty("--icon",`url('https://api.iconify.design/simple-icons/${t.icon}.svg')`)});const o=S(()=>typeof t.icon=="object"?t.icon.svg:`<span class="vpi-social-${t.icon}"></span>`);return(n,i)=>(r(),l("a",{ref_key:"el",ref:a,class:"VPSocialLink no-icon",href:e.link,"aria-label":e.ariaLabel??(typeof e.icon=="string"?e.icon:""),target:"_blank",rel:"noopener",innerHTML:o.value},null,8,Go))}}),Wo=y(Uo,[["__scopeId","data-v-bd121fe5"]]),Ko={class:"VPSocialLinks"},Jo=b({__name:"VPSocialLinks",props:{links:{}},setup(e){return(t,a)=>(r(),l("div",Ko,[(r(!0),l(I,null,H(e.links,({link:o,icon:n,ariaLabel:i})=>(r(),L(Wo,{key:o,icon:n,link:o,ariaLabel:i},null,8,["icon","link","ariaLabel"]))),128))]))}}),we=y(Jo,[["__scopeId","data-v-7bc22406"]]),Yo={key:0,class:"group translations"},Xo={class:"trans-title"},Qo={key:1,class:"group"},Zo={class:"item appearance"},en={class:"label"},tn={class:"appearance-action"},an={key:2,class:"group"},on={class:"item social-links"},nn=b({__name:"VPNavBarExtra",setup(e){const{site:t,theme:a}=T(),{localeLinks:o,currentLang:n}=X({correspondingLink:!0}),i=S(()=>o.value.length&&n.value.label||t.value.appearance||a.value.socialLinks);return(d,m)=>i.value?(r(),L(Pe,{key:0,class:"VPNavBarExtra",label:"extra navigation"},{default:v(()=>[c(o).length&&c(n).label?(r(),l("div",Yo,[s("p",Xo,$(c(n).label),1),(r(!0),l(I,null,H(c(o),p=>(r(),L(le,{key:p.link,item:p},null,8,["item"]))),128))])):f("",!0),c(t).appearance&&c(t).appearance!=="force-dark"&&c(t).appearance!=="force-auto"?(r(),l("div",Qo,[s("div",Zo,[s("p",en,$(c(a).darkModeSwitchLabel||"Appearance"),1),s("div",tn,[x($e)])])])):f("",!0),c(a).socialLinks?(r(),l("div",an,[s("div",on,[x(we,{class:"social-links-list",links:c(a).socialLinks},null,8,["links"])])])):f("",!0)]),_:1})):f("",!0)}}),rn=y(nn,[["__scopeId","data-v-bb2aa2f0"]]),sn=["aria-expanded"],ln=b({__name:"VPNavBarHamburger",props:{active:{type:Boolean}},emits:["click"],setup(e){return(t,a)=>(r(),l("button",{type:"button",class:C(["VPNavBarHamburger",{active:e.active}]),"aria-label":"mobile navigation","aria-expanded":e.active,"aria-controls":"VPNavScreen",onClick:a[0]||(a[0]=o=>t.$emit("click"))},[...a[1]||(a[1]=[s("span",{class:"container"},[s("span",{class:"top"}),s("span",{class:"middle"}),s("span",{class:"bottom"})],-1)])],10,sn))}}),cn=y(ln,[["__scopeId","data-v-e5dd9c1c"]]),dn=["innerHTML"],un=b({__name:"VPNavBarMenuLink",props:{item:{}},setup(e){const{page:t}=T();return(a,o)=>(r(),L(R,{class:C({VPNavBarMenuLink:!0,active:c(K)(c(t).relativePath,e.item.activeMatch||e.item.link,!!e.item.activeMatch)}),href:e.item.link,target:e.item.target,rel:e.item.rel,"no-icon":e.item.noIcon,tabindex:"0"},{default:v(()=>[s("span",{innerHTML:e.item.text},null,8,dn)]),_:1},8,["class","href","target","rel","no-icon"]))}}),mn=y(un,[["__scopeId","data-v-e56f3d57"]]),pn=b({__name:"VPNavBarMenuGroup",props:{item:{}},setup(e){const t=e,{page:a}=T(),o=i=>"component"in i?!1:"link"in i?K(a.value.relativePath,i.link,!!t.item.activeMatch):i.items.some(o),n=S(()=>o(t.item));return(i,d)=>(r(),L(Pe,{class:C({VPNavBarMenuGroup:!0,active:c(K)(c(a).relativePath,e.item.activeMatch,!!e.item.activeMatch)||n.value}),button:e.item.text,items:e.item.items},null,8,["class","button","items"]))}}),vn={key:0,"aria-labelledby":"main-nav-aria-label",class:"VPNavBarMenu"},fn=b({__name:"VPNavBarMenu",setup(e){const{theme:t}=T();return(a,o)=>c(t).nav?(r(),l("nav",vn,[o[0]||(o[0]=s("span",{id:"main-nav-aria-label",class:"visually-hidden"}," Main Navigation ",-1)),(r(!0),l(I,null,H(c(t).nav,n=>(r(),l(I,{key:JSON.stringify(n)},["link"in n?(r(),L(mn,{key:0,item:n},null,8,["item"])):"component"in n?(r(),L(O(n.component),W({key:1,ref_for:!0},n.props),null,16)):(r(),L(pn,{key:2,item:n},null,8,["item"]))],64))),128))])):f("",!0)}}),hn=y(fn,[["__scopeId","data-v-dc692963"]]);function bn(e){const{localeIndex:t,theme:a}=T();function o(n){var k,w,M;const i=n.split("."),d=(k=a.value.search)==null?void 0:k.options,m=d&&typeof d=="object",p=m&&((M=(w=d.locales)==null?void 0:w[t.value])==null?void 0:M.translations)||null,_=m&&d.translations||null;let V=p,h=_,g=e;const P=i.pop();for(const D of i){let A=null;const E=g==null?void 0:g[D];E&&(A=g=E);const B=h==null?void 0:h[D];B&&(A=h=B);const z=V==null?void 0:V[D];z&&(A=V=z),E||(g=A),B||(h=A),z||(V=A)}return(V==null?void 0:V[P])??(h==null?void 0:h[P])??(g==null?void 0:g[P])??""}return o}const gn=["aria-label"],kn={class:"DocSearch-Button-Container"},yn={class:"DocSearch-Button-Placeholder"},Le=b({__name:"VPNavBarSearchButton",setup(e){const a=bn({button:{buttonText:"Search",buttonAriaLabel:"Search"}});return(o,n)=>(r(),l("button",{type:"button",class:"DocSearch DocSearch-Button","aria-label":c(a)("button.buttonAriaLabel")},[s("span",kn,[n[0]||(n[0]=s("span",{class:"vp-icon DocSearch-Search-Icon"},null,-1)),s("span",yn,$(c(a)("button.buttonText")),1)]),n[1]||(n[1]=s("span",{class:"DocSearch-Button-Keys"},[s("kbd",{class:"DocSearch-Button-Key"}),s("kbd",{class:"DocSearch-Button-Key"},"K")],-1))],8,gn))}}),$n={class:"VPNavBarSearch"},_n={id:"local-search"},Pn={key:1,id:"docsearch"},wn=b({__name:"VPNavBarSearch",setup(e){const t=We(()=>Ke(()=>import("./VPLocalSearchBox.Ds1-gQfj.js"),__vite__mapDeps([0,1]))),a=()=>null,{theme:o}=T(),n=N(!1),i=N(!1);G(()=>{});function d(){n.value||(n.value=!0,setTimeout(m,16))}function m(){const h=new Event("keydown");h.key="k",h.metaKey=!0,window.dispatchEvent(h),setTimeout(()=>{document.querySelector(".DocSearch-Modal")||m()},16)}function p(h){const g=h.target,P=g.tagName;return g.isContentEditable||P==="INPUT"||P==="SELECT"||P==="TEXTAREA"}const _=N(!1);me("k",h=>{(h.ctrlKey||h.metaKey)&&(h.preventDefault(),_.value=!0)}),me("/",h=>{p(h)||(h.preventDefault(),_.value=!0)});const V="local";return(h,g)=>{var P;return r(),l("div",$n,[c(V)==="local"?(r(),l(I,{key:0},[_.value?(r(),L(c(t),{key:0,onClose:g[0]||(g[0]=k=>_.value=!1)})):f("",!0),s("div",_n,[x(Le,{onClick:g[1]||(g[1]=k=>_.value=!0)})])],64)):c(V)==="algolia"?(r(),l(I,{key:1},[n.value?(r(),L(c(a),{key:0,algolia:((P=c(o).search)==null?void 0:P.options)??c(o).algolia,onVnodeBeforeMount:g[2]||(g[2]=k=>i.value=!0)},null,8,["algolia"])):f("",!0),i.value?f("",!0):(r(),l("div",Pn,[x(Le,{onClick:d})]))],64)):f("",!0)])}}}),xn=b({__name:"VPNavBarSocialLinks",setup(e){const{theme:t}=T();return(a,o)=>c(t).socialLinks?(r(),L(we,{key:0,class:"VPNavBarSocialLinks",links:c(t).socialLinks},null,8,["links"])):f("",!0)}}),Ln=y(xn,[["__scopeId","data-v-0394ad82"]]),Sn=["href","rel","target"],Vn=["innerHTML"],Tn={key:2},Cn=b({__name:"VPNavBarTitle",setup(e){const{site:t,theme:a}=T(),{hasSidebar:o}=U(),{currentLang:n}=X(),i=S(()=>{var p;return typeof a.value.logoLink=="string"?a.value.logoLink:(p=a.value.logoLink)==null?void 0:p.link}),d=S(()=>{var p;return typeof a.value.logoLink=="string"||(p=a.value.logoLink)==null?void 0:p.rel}),m=S(()=>{var p;return typeof a.value.logoLink=="string"||(p=a.value.logoLink)==null?void 0:p.target});return(p,_)=>(r(),l("div",{class:C(["VPNavBarTitle",{"has-sidebar":c(o)}])},[s("a",{class:"title",href:i.value??c(ke)(c(n).link),rel:d.value,target:m.value},[u(p.$slots,"nav-bar-title-before",{},void 0,!0),c(a).logo?(r(),L(Z,{key:0,class:"logo",image:c(a).logo},null,8,["image"])):f("",!0),c(a).siteTitle?(r(),l("span",{key:1,innerHTML:c(a).siteTitle},null,8,Vn)):c(a).siteTitle===void 0?(r(),l("span",Tn,$(c(t).title),1)):f("",!0),u(p.$slots,"nav-bar-title-after",{},void 0,!0)],8,Sn)],2))}}),In=y(Cn,[["__scopeId","data-v-1168a8e4"]]),Nn={class:"items"},Mn={class:"title"},Dn=b({__name:"VPNavBarTranslations",setup(e){const{theme:t}=T(),{localeLinks:a,currentLang:o}=X({correspondingLink:!0});return(n,i)=>c(a).length&&c(o).label?(r(),L(Pe,{key:0,class:"VPNavBarTranslations",icon:"vpi-languages",label:c(t).langMenuLabel||"Change language"},{default:v(()=>[s("div",Nn,[s("p",Mn,$(c(o).label),1),(r(!0),l(I,null,H(c(a),d=>(r(),L(le,{key:d.link,item:d},null,8,["item"]))),128))])]),_:1},8,["label"])):f("",!0)}}),An=y(Dn,[["__scopeId","data-v-88af2de4"]]),Bn={class:"wrapper"},Hn={class:"container"},En={class:"title"},zn={class:"content"},Fn={class:"content-body"},On=b({__name:"VPNavBar",props:{isScreenOpen:{type:Boolean}},emits:["toggle-screen"],setup(e){const t=e,{y:a}=Ce(),{hasSidebar:o}=U(),{frontmatter:n}=T(),i=N({});return be(()=>{i.value={"has-sidebar":o.value,home:n.value.layout==="home",top:a.value===0,"screen-open":t.isScreenOpen}}),(d,m)=>(r(),l("div",{class:C(["VPNavBar",i.value])},[s("div",Bn,[s("div",Hn,[s("div",En,[x(In,null,{"nav-bar-title-before":v(()=>[u(d.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":v(()=>[u(d.$slots,"nav-bar-title-after",{},void 0,!0)]),_:3})]),s("div",zn,[s("div",Fn,[u(d.$slots,"nav-bar-content-before",{},void 0,!0),x(wn,{class:"search"}),x(hn,{class:"menu"}),x(An,{class:"translations"}),x(wo,{class:"appearance"}),x(Ln,{class:"social-links"}),x(rn,{class:"extra"}),u(d.$slots,"nav-bar-content-after",{},void 0,!0),x(cn,{class:"hamburger",active:e.isScreenOpen,onClick:m[0]||(m[0]=p=>d.$emit("toggle-screen"))},null,8,["active"])])])])]),m[1]||(m[1]=s("div",{class:"divider"},[s("div",{class:"divider-line"})],-1))],2))}}),Rn=y(On,[["__scopeId","data-v-6aa21345"]]),qn={key:0,class:"VPNavScreenAppearance"},jn={class:"text"},Gn=b({__name:"VPNavScreenAppearance",setup(e){const{site:t,theme:a}=T();return(o,n)=>c(t).appearance&&c(t).appearance!=="force-dark"&&c(t).appearance!=="force-auto"?(r(),l("div",qn,[s("p",jn,$(c(a).darkModeSwitchLabel||"Appearance"),1),x($e)])):f("",!0)}}),Un=y(Gn,[["__scopeId","data-v-b44890b2"]]),Wn=["innerHTML"],Kn=b({__name:"VPNavScreenMenuLink",props:{item:{}},setup(e){const t=se("close-screen");return(a,o)=>(r(),L(R,{class:"VPNavScreenMenuLink",href:e.item.link,target:e.item.target,rel:e.item.rel,"no-icon":e.item.noIcon,onClick:c(t)},{default:v(()=>[s("span",{innerHTML:e.item.text},null,8,Wn)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),Jn=y(Kn,[["__scopeId","data-v-df37e6dd"]]),Yn=["innerHTML"],Xn=b({__name:"VPNavScreenMenuGroupLink",props:{item:{}},setup(e){const t=se("close-screen");return(a,o)=>(r(),L(R,{class:"VPNavScreenMenuGroupLink",href:e.item.link,target:e.item.target,rel:e.item.rel,"no-icon":e.item.noIcon,onClick:c(t)},{default:v(()=>[s("span",{innerHTML:e.item.text},null,8,Yn)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),Ee=y(Xn,[["__scopeId","data-v-3e9c20e4"]]),Qn={class:"VPNavScreenMenuGroupSection"},Zn={key:0,class:"title"},er=b({__name:"VPNavScreenMenuGroupSection",props:{text:{},items:{}},setup(e){return(t,a)=>(r(),l("div",Qn,[e.text?(r(),l("p",Zn,$(e.text),1)):f("",!0),(r(!0),l(I,null,H(e.items,o=>(r(),L(Ee,{key:o.text,item:o},null,8,["item"]))),128))]))}}),tr=y(er,[["__scopeId","data-v-8133b170"]]),ar=["aria-controls","aria-expanded"],or=["innerHTML"],nr=["id"],rr={key:0,class:"item"},sr={key:1,class:"item"},ir={key:2,class:"group"},lr=b({__name:"VPNavScreenMenuGroup",props:{text:{},items:{}},setup(e){const t=e,a=N(!1),o=S(()=>`NavScreenGroup-${t.text.replace(" ","-").toLowerCase()}`);function n(){a.value=!a.value}return(i,d)=>(r(),l("div",{class:C(["VPNavScreenMenuGroup",{open:a.value}])},[s("button",{class:"button","aria-controls":o.value,"aria-expanded":a.value,onClick:n},[s("span",{class:"button-text",innerHTML:e.text},null,8,or),d[0]||(d[0]=s("span",{class:"vpi-plus button-icon"},null,-1))],8,ar),s("div",{id:o.value,class:"items"},[(r(!0),l(I,null,H(e.items,m=>(r(),l(I,{key:JSON.stringify(m)},["link"in m?(r(),l("div",rr,[x(Ee,{item:m},null,8,["item"])])):"component"in m?(r(),l("div",sr,[(r(),L(O(m.component),W({ref_for:!0},m.props,{"screen-menu":""}),null,16))])):(r(),l("div",ir,[x(tr,{text:m.text,items:m.items},null,8,["text","items"])]))],64))),128))],8,nr)],2))}}),cr=y(lr,[["__scopeId","data-v-b9ab8c58"]]),dr={key:0,class:"VPNavScreenMenu"},ur=b({__name:"VPNavScreenMenu",setup(e){const{theme:t}=T();return(a,o)=>c(t).nav?(r(),l("nav",dr,[(r(!0),l(I,null,H(c(t).nav,n=>(r(),l(I,{key:JSON.stringify(n)},["link"in n?(r(),L(Jn,{key:0,item:n},null,8,["item"])):"component"in n?(r(),L(O(n.component),W({key:1,ref_for:!0},n.props,{"screen-menu":""}),null,16)):(r(),L(cr,{key:2,text:n.text||"",items:n.items},null,8,["text","items"]))],64))),128))])):f("",!0)}}),mr=b({__name:"VPNavScreenSocialLinks",setup(e){const{theme:t}=T();return(a,o)=>c(t).socialLinks?(r(),L(we,{key:0,class:"VPNavScreenSocialLinks",links:c(t).socialLinks},null,8,["links"])):f("",!0)}}),pr={class:"list"},vr=b({__name:"VPNavScreenTranslations",setup(e){const{localeLinks:t,currentLang:a}=X({correspondingLink:!0}),o=N(!1);function n(){o.value=!o.value}return(i,d)=>c(t).length&&c(a).label?(r(),l("div",{key:0,class:C(["VPNavScreenTranslations",{open:o.value}])},[s("button",{class:"title",onClick:n},[d[0]||(d[0]=s("span",{class:"vpi-languages icon lang"},null,-1)),q(" "+$(c(a).label)+" ",1),d[1]||(d[1]=s("span",{class:"vpi-chevron-down icon chevron"},null,-1))]),s("ul",pr,[(r(!0),l(I,null,H(c(t),m=>(r(),l("li",{key:m.link,class:"item"},[x(R,{class:"link",href:m.link},{default:v(()=>[q($(m.text),1)]),_:2},1032,["href"])]))),128))])],2)):f("",!0)}}),fr=y(vr,[["__scopeId","data-v-858fe1a4"]]),hr={class:"container"},br=b({__name:"VPNavScreen",props:{open:{type:Boolean}},setup(e){const t=N(null),a=Ie(ie?document.body:null);return(o,n)=>(r(),L(he,{name:"fade",onEnter:n[0]||(n[0]=i=>a.value=!0),onAfterLeave:n[1]||(n[1]=i=>a.value=!1)},{default:v(()=>[e.open?(r(),l("div",{key:0,class:"VPNavScreen",ref_key:"screen",ref:t,id:"VPNavScreen"},[s("div",hr,[u(o.$slots,"nav-screen-content-before",{},void 0,!0),x(ur,{class:"menu"}),x(fr,{class:"translations"}),x(Un,{class:"appearance"}),x(mr,{class:"social-links"}),u(o.$slots,"nav-screen-content-after",{},void 0,!0)])],512)):f("",!0)]),_:3}))}}),gr=y(br,[["__scopeId","data-v-f2779853"]]),kr={key:0,class:"VPNav"},yr=b({__name:"VPNav",setup(e){const{isScreenOpen:t,closeScreen:a,toggleScreen:o}=vo(),{frontmatter:n}=T(),i=S(()=>n.value.navbar!==!1);return Ne("close-screen",a),ae(()=>{ie&&document.documentElement.classList.toggle("hide-nav",!i.value)}),(d,m)=>i.value?(r(),l("header",kr,[x(Rn,{"is-screen-open":c(t),onToggleScreen:c(o)},{"nav-bar-title-before":v(()=>[u(d.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":v(()=>[u(d.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":v(()=>[u(d.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":v(()=>[u(d.$slots,"nav-bar-content-after",{},void 0,!0)]),_:3},8,["is-screen-open","onToggleScreen"]),x(gr,{open:c(t)},{"nav-screen-content-before":v(()=>[u(d.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":v(()=>[u(d.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3},8,["open"])])):f("",!0)}}),$r=y(yr,[["__scopeId","data-v-ae24b3ad"]]),_r=["role","tabindex"],Pr={key:1,class:"items"},wr=b({__name:"VPSidebarItem",props:{item:{},depth:{}},setup(e){const t=e,{collapsed:a,collapsible:o,isLink:n,isActiveLink:i,hasActiveLink:d,hasChildren:m,toggle:p}=bt(S(()=>t.item)),_=S(()=>m.value?"section":"div"),V=S(()=>n.value?"a":"div"),h=S(()=>m.value?t.depth+2===7?"p":`h${t.depth+2}`:"p"),g=S(()=>n.value?void 0:"button"),P=S(()=>[[`level-${t.depth}`],{collapsible:o.value},{collapsed:a.value},{"is-link":n.value},{"is-active":i.value},{"has-active":d.value}]);function k(M){"key"in M&&M.key!=="Enter"||!t.item.link&&p()}function w(){t.item.link&&p()}return(M,D)=>{const A=J("VPSidebarItem",!0);return r(),L(O(_.value),{class:C(["VPSidebarItem",P.value])},{default:v(()=>[e.item.text?(r(),l("div",W({key:0,class:"item",role:g.value},Je(e.item.items?{click:k,keydown:k}:{},!0),{tabindex:e.item.items&&0}),[D[1]||(D[1]=s("div",{class:"indicator"},null,-1)),e.item.link?(r(),L(R,{key:0,tag:V.value,class:"link",href:e.item.link,rel:e.item.rel,target:e.item.target},{default:v(()=>[(r(),L(O(h.value),{class:"text",innerHTML:e.item.text},null,8,["innerHTML"]))]),_:1},8,["tag","href","rel","target"])):(r(),L(O(h.value),{key:1,class:"text",innerHTML:e.item.text},null,8,["innerHTML"])),e.item.collapsed!=null&&e.item.items&&e.item.items.length?(r(),l("div",{key:2,class:"caret",role:"button","aria-label":"toggle section",onClick:w,onKeydown:Ye(w,["enter"]),tabindex:"0"},[...D[0]||(D[0]=[s("span",{class:"vpi-chevron-right caret-icon"},null,-1)])],32)):f("",!0)],16,_r)):f("",!0),e.item.items&&e.item.items.length?(r(),l("div",Pr,[e.depth<5?(r(!0),l(I,{key:0},H(e.item.items,E=>(r(),L(A,{key:E.text,item:E,depth:e.depth+1},null,8,["item","depth"]))),128)):f("",!0)])):f("",!0)]),_:1},8,["class"])}}}),xr=y(wr,[["__scopeId","data-v-b3fd67f8"]]),Lr=b({__name:"VPSidebarGroup",props:{items:{}},setup(e){const t=N(!0);let a=null;return G(()=>{a=setTimeout(()=>{a=null,t.value=!1},300)}),Xe(()=>{a!=null&&(clearTimeout(a),a=null)}),(o,n)=>(r(!0),l(I,null,H(e.items,i=>(r(),l("div",{key:i.text,class:C(["group",{"no-transition":t.value}])},[x(xr,{item:i,depth:0},null,8,["item"])],2))),128))}}),Sr=y(Lr,[["__scopeId","data-v-c40bc020"]]),Vr={class:"nav",id:"VPSidebarNav","aria-labelledby":"sidebar-aria-label",tabindex:"-1"},Tr=b({__name:"VPSidebar",props:{open:{type:Boolean}},setup(e){const{sidebarGroups:t,hasSidebar:a}=U(),o=e,n=N(null),i=Ie(ie?document.body:null);j([o,n],()=>{var m;o.open?(i.value=!0,(m=n.value)==null||m.focus()):i.value=!1},{immediate:!0,flush:"post"});const d=N(0);return j(t,()=>{d.value+=1},{deep:!0}),(m,p)=>c(a)?(r(),l("aside",{key:0,class:C(["VPSidebar",{open:e.open}]),ref_key:"navEl",ref:n,onClick:p[0]||(p[0]=Qe(()=>{},["stop"]))},[p[2]||(p[2]=s("div",{class:"curtain"},null,-1)),s("nav",Vr,[p[1]||(p[1]=s("span",{class:"visually-hidden",id:"sidebar-aria-label"}," Sidebar Navigation ",-1)),u(m.$slots,"sidebar-nav-before",{},void 0,!0),(r(),L(Sr,{items:c(t),key:d.value},null,8,["items"])),u(m.$slots,"sidebar-nav-after",{},void 0,!0)])],2)):f("",!0)}}),Cr=y(Tr,[["__scopeId","data-v-319d5ca6"]]),Ir=b({__name:"VPSkipLink",setup(e){const{theme:t}=T(),a=re(),o=N();j(()=>a.path,()=>o.value.focus());function n({target:i}){const d=document.getElementById(decodeURIComponent(i.hash).slice(1));if(d){const m=()=>{d.removeAttribute("tabindex"),d.removeEventListener("blur",m)};d.setAttribute("tabindex","-1"),d.addEventListener("blur",m),d.focus(),window.scrollTo(0,0)}}return(i,d)=>(r(),l(I,null,[s("span",{ref_key:"backToTop",ref:o,tabindex:"-1"},null,512),s("a",{href:"#VPContent",class:"VPSkipLink visually-hidden",onClick:n},$(c(t).skipToContentLabel||"Skip to content"),1)],64))}}),Nr=y(Ir,[["__scopeId","data-v-0b0ada53"]]),Mr=b({__name:"Layout",setup(e){const{isOpen:t,open:a,close:o}=U(),n=re();j(()=>n.path,o),ht(t,o);const{frontmatter:i}=T(),d=Ze(),m=S(()=>!!d["home-hero-image"]);return Ne("hero-image-slot-exists",m),(p,_)=>{const V=J("Content");return c(i).layout!==!1?(r(),l("div",{key:0,class:C(["Layout",c(i).pageClass])},[u(p.$slots,"layout-top",{},void 0,!0),x(Nr),x(ot,{class:"backdrop",show:c(t),onClick:c(o)},null,8,["show","onClick"]),x($r,null,{"nav-bar-title-before":v(()=>[u(p.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":v(()=>[u(p.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":v(()=>[u(p.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":v(()=>[u(p.$slots,"nav-bar-content-after",{},void 0,!0)]),"nav-screen-content-before":v(()=>[u(p.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":v(()=>[u(p.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3}),x(po,{open:c(t),onOpenMenu:c(a)},null,8,["open","onOpenMenu"]),x(Cr,{open:c(t)},{"sidebar-nav-before":v(()=>[u(p.$slots,"sidebar-nav-before",{},void 0,!0)]),"sidebar-nav-after":v(()=>[u(p.$slots,"sidebar-nav-after",{},void 0,!0)]),_:3},8,["open"]),x(Ya,null,{"page-top":v(()=>[u(p.$slots,"page-top",{},void 0,!0)]),"page-bottom":v(()=>[u(p.$slots,"page-bottom",{},void 0,!0)]),"not-found":v(()=>[u(p.$slots,"not-found",{},void 0,!0)]),"home-hero-before":v(()=>[u(p.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":v(()=>[u(p.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":v(()=>[u(p.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":v(()=>[u(p.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":v(()=>[u(p.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":v(()=>[u(p.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":v(()=>[u(p.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":v(()=>[u(p.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":v(()=>[u(p.$slots,"home-features-after",{},void 0,!0)]),"doc-footer-before":v(()=>[u(p.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":v(()=>[u(p.$slots,"doc-before",{},void 0,!0)]),"doc-after":v(()=>[u(p.$slots,"doc-after",{},void 0,!0)]),"doc-top":v(()=>[u(p.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":v(()=>[u(p.$slots,"doc-bottom",{},void 0,!0)]),"aside-top":v(()=>[u(p.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":v(()=>[u(p.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":v(()=>[u(p.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":v(()=>[u(p.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":v(()=>[u(p.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":v(()=>[u(p.$slots,"aside-ads-after",{},void 0,!0)]),_:3}),x(to),u(p.$slots,"layout-bottom",{},void 0,!0)],2)):(r(),L(V,{key:1}))}}}),Dr=y(Mr,[["__scopeId","data-v-5d98c3a5"]]),Ar={Layout:Dr,enhanceApp:({app:e})=>{e.component("Badge",et)}};function ze(e="portrait",t="A4"){return`
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
`}const Br={class:"home-table-wrapper"},Hr={class:"home-table"},Er=["href"],zr={style:{"text-align":"center"}},Fr={style:{"text-align":"center"}},Or={style:{"text-align":"center"}},Rr=["disabled","title","onClick"],qr={key:0,class:"pdf-btn-loading"},jr={key:1},Gr=`
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
  break-inside: auto; page-break-inside: auto;
}
.doc-content table thead { display: table-header-group; }
.doc-content table thead th {
  background: #0b2545; color: #fff;
  font-weight: 600; font-size: 7.5pt;
  text-transform: uppercase; letter-spacing: 0.07em;
  padding: 3mm 4mm; text-align: left; border: none;
}
.doc-content table tbody tr { break-inside: avoid; page-break-inside: avoid; }
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
`,Ur=b({__name:"HomeTable",setup(e){const{site:t}=ee(),a=[{name:"Desbravador 4.1 / 3.1 / 3.0 Smart",primaryLink:"/desbravador-41/local/requisitos-hardware",docPages:[{path:"/desbravador-41/local/requisitos-hardware",label:"Instalação Local"},{path:"/desbravador-41/cloud/requisitos-cloud",label:"Cloud — AutoSky"}],hasLocal:!0,hasCloud:!0},{name:"POS Fast by Desbravador",primaryLink:"/desbravador-posfast/local/requisitos-hardware",docPages:[{path:"/desbravador-posfast/local/requisitos-hardware",label:"Instalação Local"}],hasLocal:!0,hasCloud:!1},{name:"Light Web Plus / 3.0 Web Plus",primaryLink:"/light-web-plus/local/requisitos-hardware",docPages:[{path:"/light-web-plus/local/requisitos-hardware",label:"Instalação Local"}],hasLocal:!0,hasCloud:!0},{name:"Gas Station / Liquor Store",primaryLink:"/gas-station/local/requisitos-hardware",docPages:[{path:"/gas-station/local/requisitos-hardware",label:"Instalação Local"}],hasLocal:!0,hasCloud:!1},{name:"Easy Web / Light Web / 3.0 Web",primaryLink:"/light-web/local/requisitos-hardware",docPages:[{path:"/light-web/local/requisitos-hardware",label:"Requisitos"}],hasLocal:!1,hasCloud:!0},{name:"Desbravador Enterprise / 4.0",primaryLink:"/desbravador-enterprise/",docPages:[{path:"/desbravador-enterprise/",label:"Visão Geral"},{path:"/desbravador-enterprise/local/requisitos-hardware",label:"On-Premise"},{path:"/desbravador-enterprise/hibrido/requisitos-hardware",label:"Híbrido"},{path:"/desbravador-enterprise/cloud/requisitos-hardware",label:"Cloud — AutoSky"}],hasLocal:!0,hasCloud:!0}],o=[{path:"/perifericos/fechaduras-homologadas",label:"Fechaduras e Tarifadores Homologados"},{path:"/perifericos/impressoras-homologadas",label:"Impressoras Homologadas"},{path:"/perifericos/pinpads-homologados",label:"Pinpads Homologados"},{path:"/perifericos/tef-homologados",label:"Sistemas de TEF Homologados"},{path:"/perifericos/dispositivos-ipdv-pdv",label:"Dispositivos iPDV e PDV Homologados"},{path:"/perifericos/sat-mfe-homologados",label:"SAT / MFE Homologados"},{path:"/perifericos/kds-desbravador",label:"Desbravador KDS"}],n=N(null);function i(P){const k=(t.value.base||"/").replace(/\/$/,"");return`${window.location.origin}${k}${P}`}async function d(P){try{const k=await fetch(i(P));if(!k.ok)return null;const w=await k.text(),A=new DOMParser().parseFromString(w,"text/html").querySelector(".vp-doc");if(!A)return null;A.querySelectorAll(".header-anchor, [tabindex], script").forEach(B=>{B.tagName==="A"&&B.classList.contains("header-anchor")||B.tagName==="SCRIPT"?B.remove():B.removeAttribute("tabindex")});const E=window.location.origin;return A.querySelectorAll("a[href]").forEach(B=>{const z=B.getAttribute("href");z!=null&&z.startsWith("/")&&B.setAttribute("href",`${E}${z}`)}),A.querySelectorAll("img[src]").forEach(B=>{const z=B.getAttribute("src");z!=null&&z.startsWith("/")&&B.setAttribute("src",`${E}${z}`)}),A.innerHTML}catch{return null}}function m(P,k,w){return`
<header class="pr-page-header">
  <div class="pr-hdr-left">
    ${k?`<img class="pr-hdr-logo" src="${k}" alt="Desbravador" /><div class="pr-hdr-sep"></div>`:""}
    <span class="pr-hdr-title">${P.name}</span>
    <span class="pr-hdr-period">Documentação Técnica</span>
  </div>
  <div class="pr-hdr-right">Desbravador Software Ltda.<br>${w}</div>
</header>`}function p(){return`
<footer class="pr-page-footer">
  <span class="pr-ftr-company">Desbravador Software Ltda.</span>
  <span class="pr-ftr-confidential">Uso Técnico</span>
  <span class="pr-ftr-page"></span>
</footer>`}function _(P,k,w){return`
<div class="pr-cover">
  <div class="pr-cover-top">
    <div class="pr-cover-logo-wrap">${k?`<img class="pr-cover-logo" src="${k}" alt="Desbravador" />`:'<span class="pr-cover-logo-name">Desbravador</span>'}</div>
  </div>
  <div class="pr-cover-body">
    <div class="pr-cover-label">Documentação Técnica</div>
    <h1 class="pr-cover-title">${P.name}</h1>
    <p class="pr-cover-subtitle">Requisitos de hardware, software e configuração.<br>
    Inclui periféricos homologados como anexo.</p>
    <div class="pr-cover-accent-bar"></div>
    <div class="pr-cover-meta">
      <div class="pr-cover-meta-item">
        <span class="pr-cover-meta-label">Modalidades</span>
        <span class="pr-cover-meta-value">${P.docPages.map(D=>D.label).join(" · ")}</span>
      </div>
      <div class="pr-cover-meta-item">
        <span class="pr-cover-meta-label">Data de Geração</span>
        <span class="pr-cover-meta-value">${w}</span>
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
</div>`}function h(P,k,w){return`
<div class="pr-section doc-section ${w?"":"pr-page-break"}">
  ${P?`<div class="pr-section-hdr"><span class="pr-section-eyebrow">Documentação</span><h2 class="pr-section-title">${P}</h2></div>`:""}
  <div class="pr-section-body doc-content">${k}</div>
</div>`}async function g(P){n.value=P.name;try{const[k,w]=await Promise.all([Promise.all(P.docPages.map(F=>d(F.path))),Promise.all(o.map(F=>d(F.path)))]),M=(()=>{var xe;const F=(xe=t.value.themeConfig)==null?void 0:xe.logo;if(!F)return null;const Y=(t.value.base||"/").replace(/\/$/,"");return typeof F=="string"?`${window.location.origin}${Y}${F}`:null})(),D=new Date().toLocaleDateString("pt-BR",{day:"2-digit",month:"long",year:"numeric"}),A=new Date().toLocaleString("pt-BR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"});let E="",B=!0;k.forEach((F,Y)=>{F&&(E+=h(P.docPages[Y].label,F,B),B=!1)}),w.some(Boolean)&&(E+=V(),w.forEach((F,Y)=>{F&&(E+=h(o[Y].label,F,!1))}));const ce=window.open("","_blank","width=960,height=720");if(!ce){alert("Permita pop-ups neste site para gerar o PDF.");return}const Fe=ze("portrait","A4")+Gr;ce.document.write(`<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>${P.name} — Documentação Técnica Desbravador</title>
  <style>${Fe}</style>
</head>
<body>
  ${m(P,M,A)}
  ${p()}
  ${_(P,M,D)}
  <div class="pr-body">
    ${E}
  </div>
  <script>
    window.addEventListener('load', function () {
      setTimeout(function () { window.print() }, 600)
    })
  <\/script>
</body>
</html>`),ce.document.close()}finally{n.value=null}}return(P,k)=>(r(),l("div",Br,[s("table",Hr,[k[0]||(k[0]=s("thead",null,[s("tr",null,[s("th",null,"Sistema"),s("th",{style:{"text-align":"center"}},"Instalação Local"),s("th",{style:{"text-align":"center"}},"Instalação Cloud"),s("th",{style:{"text-align":"center"}},"PDF")])],-1)),s("tbody",null,[(r(),l(I,null,H(a,w=>s("tr",{key:w.name},[s("td",null,[s("a",{href:c(te)(w.primaryLink)},$(w.name),9,Er)]),s("td",zr,$(w.hasLocal?"✅":"—"),1),s("td",Fr,$(w.hasCloud?"✅":"—"),1),s("td",Or,[s("button",{class:"pdf-btn",disabled:n.value===w.name,title:`Gerar PDF de ${w.name}`,onClick:M=>g(w)},[n.value===w.name?(r(),l("span",qr,"⏳")):(r(),l("span",jr,"🖨️ PDF"))],8,Rr)])])),64))])])]))}}),Wr=y(Ur,[["__scopeId","data-v-6834bcc9"]]),Kr={class:"pl-root"},Jr={key:0,class:"pl-controls no-print","aria-hidden":"true"},Yr={class:"pl-page-header"},Xr={class:"pl-header-inner"},Qr={class:"pl-header-left"},Zr=["src","alt"],es={key:1,class:"pl-header-logo-text"},ts={class:"pl-header-right"},as={class:"pl-body"},os={class:"pl-title-block"},ns={class:"pl-title"},rs={key:0,class:"pl-subtitle"},ss={key:1,class:"pl-meta"},is={class:"pl-content"},ls={class:"pl-page-footer"},cs={class:"pl-footer-inner"},ds={class:"pl-footer-app"},us={class:"pl-footer-date"},ms=b({__name:"PrintLayout",props:{title:{},subtitle:{},logo:{},printedBy:{},footerText:{},orientation:{default:"portrait"},paperSize:{default:"A4"},filters:{default:()=>[]},showDateTime:{type:Boolean,default:!0},appName:{default:"Desbravador Docs"},showPrintButton:{type:Boolean,default:!0}},setup(e){const t=e,{site:a}=ee(),n=new Date().toLocaleString("pt-BR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"}),i=S(()=>{var P;if(t.logo)return t.logo;const h=(P=a.value.themeConfig)==null?void 0:P.logo;if(!h)return null;const g=(a.value.base||"/").replace(/\/$/,"");return typeof h=="string"?`${g}${h}`:null}),d=S(()=>t.footerText||t.appName),m=S(()=>{var h;return t.showDateTime||!!t.printedBy||(((h=t.filters)==null?void 0:h.length)??0)>0});function p(h,g){return`
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
`}let _=null;G(()=>{_=document.createElement("style"),_.id="pl-global-print-styles",_.textContent=p(t.orientation,t.paperSize),document.head.appendChild(_)}),oe(()=>{_==null||_.remove(),_=null});function V(){window.print()}return(h,g)=>(r(),l("div",Kr,[e.showPrintButton?(r(),l("div",Jr,[u(h.$slots,"controls",{},()=>[s("button",{class:"pl-print-btn",onClick:V},[...g[0]||(g[0]=[s("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[s("polyline",{points:"6 9 6 2 18 2 18 9"}),s("path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"}),s("rect",{x:"6",y:"14",width:"12",height:"8"})],-1),q(" Imprimir / Salvar PDF ",-1)])])],!0)])):f("",!0),s("div",{class:C(["pl-document",[`pl-paper-${e.paperSize.toLowerCase()}`,`pl-orient-${e.orientation}`]])},[s("header",Yr,[u(h.$slots,"header",{},()=>[s("div",Xr,[s("div",Qr,[i.value?(r(),l("img",{key:0,src:i.value,class:"pl-header-logo",alt:e.appName},null,8,Zr)):(r(),l("span",es,$(e.appName),1))]),s("div",ts,$(e.appName),1)]),g[1]||(g[1]=s("div",{class:"pl-header-rule"},null,-1))],!0)]),s("div",as,[s("div",os,[s("h1",ns,$(e.title),1),e.subtitle?(r(),l("p",rs,$(e.subtitle),1)):f("",!0),m.value?(r(),l("dl",ss,[e.showDateTime?(r(),l(I,{key:0},[g[2]||(g[2]=s("dt",null,"Data:",-1)),s("dd",null,$(c(n)),1)],64)):f("",!0),e.printedBy?(r(),l(I,{key:1},[g[3]||(g[3]=s("dt",null,"Usuário:",-1)),s("dd",null,$(e.printedBy),1)],64)):f("",!0),(r(!0),l(I,null,H(e.filters,P=>(r(),l(I,{key:P.label},[s("dt",null,$(P.label)+":",1),s("dd",null,$(P.value),1)],64))),128)),u(h.$slots,"meta",{},void 0,!0)])):f("",!0)]),g[4]||(g[4]=s("hr",{class:"pl-divider"},null,-1)),s("main",is,[u(h.$slots,"default",{},void 0,!0)])]),s("footer",ls,[u(h.$slots,"footer",{},()=>[s("div",cs,[s("span",ds,$(d.value),1),g[5]||(g[5]=s("span",{class:"pl-footer-page"},null,-1)),s("span",us,"Gerado em "+$(c(n)),1)]),g[6]||(g[6]=s("div",{class:"pl-footer-rule"},null,-1))],!0)])],2)]))}}),ps=y(ms,[["__scopeId","data-v-7ee5de0b"]]),vs={class:"pr-root"},fs={class:"pr-controls no-print"},hs=["disabled"],bs={key:0,width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.2","stroke-linecap":"round","stroke-linejoin":"round"},gs={key:1,class:"pr-spinner"},ks=b({__name:"PrintReport",props:{title:{},subtitle:{},reportLabel:{},logo:{},company:{},printedBy:{},period:{},footerText:{},confidential:{},showCover:{type:Boolean,default:!1},coverNotes:{},orientation:{default:"portrait"},paperSize:{default:"A4"},appName:{default:"Desbravador Docs"}},setup(e){const t=e,{site:a}=ee(),o=N(null),n=N(!1),i=new Date,d=i.toLocaleString("pt-BR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"}),m=i.toLocaleDateString("pt-BR",{day:"2-digit",month:"long",year:"numeric"});function p(){var M;if(t.logo)return t.logo;const k=(M=a.value.themeConfig)==null?void 0:M.logo;if(!k)return null;const w=(a.value.base||"/").replace(/\/$/,"");return typeof k=="string"?`${w}${k}`:null}function _(k){const w=k.cloneNode(!0);k.querySelectorAll("canvas").forEach((D,A)=>{var B;const E=w.querySelectorAll("canvas")[A];if(E)try{const z=document.createElement("img");z.src=D.toDataURL("image/png",1),z.style.maxWidth="100%",z.style.height="auto",(B=E.parentNode)==null||B.replaceChild(z,E)}catch{}}),(a.value.base||"/").replace(/\/$/,""),w.querySelectorAll("img[src]").forEach(D=>{const A=D.getAttribute("src");A&&A.startsWith("/")&&D.setAttribute("src",`${window.location.origin}${A}`)});const M=["button","input","select","textarea",".no-print","[data-no-print]",".VPBadge",".header-anchor"];return w.querySelectorAll(M.join(",")).forEach(D=>D.remove()),w.querySelectorAll("*").forEach(D=>{Array.from(D.attributes).forEach(A=>{A.name.startsWith("data-v-")&&D.removeAttribute(A.name)})}),w}function V(k){if(!t.showCover)return"";const w=k?`<img class="pr-cover-logo" src="${k}" alt="${t.company??t.appName}" />`:`<span class="pr-cover-logo-name">${t.company??t.appName??""}</span>`,M=[t.period?`<div class="pr-cover-meta-item"><span class="pr-cover-meta-label">Período</span><span class="pr-cover-meta-value">${t.period}</span></div>`:"",t.printedBy?`<div class="pr-cover-meta-item"><span class="pr-cover-meta-label">Responsável</span><span class="pr-cover-meta-value">${t.printedBy}</span></div>`:"",`<div class="pr-cover-meta-item"><span class="pr-cover-meta-label">Data de Geração</span><span class="pr-cover-meta-value">${m}</span></div>`,t.company?`<div class="pr-cover-meta-item"><span class="pr-cover-meta-label">Empresa</span><span class="pr-cover-meta-value">${t.company}</span></div>`:""].filter(Boolean).join(""),D=t.coverNotes?`<div class="pr-cover-notes">${t.coverNotes}</div>`:"";return`
<div class="pr-cover">
  <div class="pr-cover-top">
    <div class="pr-cover-logo-wrap">${w}</div>
  </div>
  <div class="pr-cover-body">
    <div class="pr-cover-label">${t.reportLabel??"Relatório"}</div>
    <h1 class="pr-cover-title">${t.title}</h1>
    ${t.subtitle?`<p class="pr-cover-subtitle">${t.subtitle}</p>`:""}
    <div class="pr-cover-accent-bar"></div>
    <div class="pr-cover-meta">${M}</div>
    ${D}
  </div>
</div>`}function h(k){const w=k?`<img class="pr-hdr-logo" src="${k}" alt="" /><div class="pr-hdr-sep"></div>`:"",M=t.period?`<span class="pr-hdr-period">| ${t.period}</span>`:"";return`
<header class="pr-page-header">
  <div class="pr-hdr-left">
    ${w}
    <span class="pr-hdr-title">${t.title}</span>
    ${M}
  </div>
  <div class="pr-hdr-right">
    ${t.appName??""}<br>${d}
  </div>
</header>`}function g(){return`
<footer class="pr-page-footer">
  <span class="pr-ftr-company">${t.footerText??t.company??t.appName??""}</span>
  <span class="pr-ftr-confidential">${t.confidential??""}</span>
  <span class="pr-ftr-page"></span>
</footer>`}async function P(){if(!(!o.value||n.value)){n.value=!0,await new Promise(k=>setTimeout(k,50));try{const k=p(),w=_(o.value),M=V(k),D=h(k),A=g(),E=ze(t.orientation,t.paperSize),B=window.open("","_blank","width=960,height=720");if(!B){alert("Permita pop-ups neste site para gerar o PDF.");return}B.document.write(`<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>${t.title} — ${t.appName??"Relatório"}</title>
  <style>${E}</style>
</head>
<body>
  ${D}
  ${A}
  ${M}
  <div class="pr-body">
    ${w.innerHTML}
  </div>
  <script>
    window.addEventListener('load', function () {
      setTimeout(function () { window.print() }, 600)
    })
  <\/script>
</body>
</html>`),B.document.close()}finally{n.value=!1}}}return(k,w)=>(r(),l("div",vs,[s("div",fs,[u(k.$slots,"controls",{},()=>[s("button",{class:"pr-btn-print",onClick:P,disabled:n.value},[n.value?f("",!0):(r(),l("svg",bs,[...w[0]||(w[0]=[s("polyline",{points:"6 9 6 2 18 2 18 9"},null,-1),s("path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"},null,-1),s("rect",{x:"6",y:"14",width:"12",height:"8"},null,-1)])])),n.value?(r(),l("span",gs)):f("",!0),q(" "+$(n.value?"Preparando...":"Imprimir / Salvar PDF"),1)],8,hs)],!0)]),s("div",{ref_key:"contentRef",ref:o,class:"pr-screen-content"},[u(k.$slots,"default",{},void 0,!0)],512)]))}}),ys=y(ks,[["__scopeId","data-v-95c8d7e0"]]),$s={key:0,class:"pr-section-hdr"},_s={key:0,class:"pr-section-eyebrow"},Ps={class:"pr-section-title"},ws={key:1,class:"pr-section-desc"},xs={class:"pr-section-body"},Ls=b({__name:"PrintSection",props:{title:{},eyebrow:{},description:{},pageBreak:{type:Boolean}},setup(e){return(t,a)=>(r(),l("div",{class:C(["pr-section",{"pr-page-break":e.pageBreak}])},[e.title?(r(),l("div",$s,[e.eyebrow?(r(),l("span",_s,$(e.eyebrow),1)):f("",!0),s("h2",Ps,$(e.title),1)])):f("",!0),e.description?(r(),l("p",ws,$(e.description),1)):f("",!0),s("div",xs,[u(t.$slots,"default",{},void 0,!0)])],2))}}),Ss=y(Ls,[["__scopeId","data-v-3c1ebe34"]]),Vs=["data-cols"],Ts=b({__name:"PrintKPIGrid",props:{cols:{default:4}},setup(e){return(t,a)=>(r(),l("div",{class:"pr-kpi-grid","data-cols":e.cols},[u(t.$slots,"default",{},void 0,!0)],8,Vs))}}),Cs=y(Ts,[["__scopeId","data-v-0e7da588"]]),Is=["data-trend"],Ns={class:"pr-kpi-label"},Ms={class:"pr-kpi-value"},Ds=["data-dir"],As={key:1,class:"pr-kpi-note"},Bs=b({__name:"PrintKPICard",props:{label:{},value:{},change:{},changeDir:{},note:{},trend:{}},setup(e){return(t,a)=>(r(),l("div",{class:"pr-kpi-card","data-trend":e.trend},[s("div",Ns,$(e.label),1),s("div",Ms,$(e.value),1),e.change?(r(),l("div",{key:0,class:"pr-kpi-change","data-dir":e.changeDir},$(e.changeDir==="up"?"▲":e.changeDir==="down"?"▼":"")+" "+$(e.change),9,Ds)):f("",!0),e.note?(r(),l("div",As,$(e.note),1)):f("",!0)],8,Is))}}),Hs=y(Bs,[["__scopeId","data-v-e4f81f35"]]),Es={key:0,class:"pr-table-title"},zs={class:"pr-table"},Fs={key:0},Os=["colspan"],Rs=b({__name:"PrintDataTable",props:{title:{},columns:{},rows:{},compact:{type:Boolean,default:!1}},setup(e){function t(o){const n=o.align??(o.type==="currency"||o.type==="number"?"right":o.type==="date"?"center":"left");return n==="right"?"th-right":n==="center"?"th-center":""}function a(o,n){const i=[],d=o.align??(o.type==="currency"||o.type==="number"?"right":o.type==="date"?"center":"left");return d==="right"&&i.push("td-right"),d==="center"&&i.push("td-center"),(o.bold||n._total)&&i.push("td-bold"),o.muted&&i.push("td-muted"),o.type==="mono"&&i.push("td-mono"),i.join(" ")}return(o,n)=>(r(),l("div",{class:C(["pr-table-wrap",{"pr-table-compact":e.compact}])},[e.title?(r(),l("div",Es,$(e.title),1)):f("",!0),s("table",zs,[s("thead",null,[s("tr",null,[(r(!0),l(I,null,H(e.columns,i=>(r(),l("th",{key:i.key,class:C(t(i)),style:ge(i.width?`width:${i.width}`:"")},$(i.label),7))),128))])]),s("tbody",null,[(r(!0),l(I,null,H(e.rows,(i,d)=>(r(),l("tr",{key:d,class:C({"tr-total":i._total,"tr-subtotal":i._subtotal})},[(r(!0),l(I,null,H(e.columns,m=>(r(),l("td",{key:m.key,class:C(a(m,i))},[u(o.$slots,`cell-${m.key}`,{value:i[m.key],row:i},()=>[q($(i[m.key]??"—"),1)],!0)],2))),128))],2))),128)),e.rows.length===0?(r(),l("tr",Fs,[s("td",{colspan:e.columns.length,class:"td-center td-muted"}," Nenhum registro encontrado. ",8,Os)])):f("",!0)])])],2))}}),qs=y(Rs,[["__scopeId","data-v-885cefbd"]]),js={class:"pr-chart-block"},Gs={class:"pr-chart-hdr"},Us={class:"pr-chart-title"},Ws={key:0,class:"pr-chart-desc"},Ks={class:"pr-chart-canvas",ref:"canvasWrap"},Js={key:0,class:"pr-chart-footer"},Ys=b({__name:"PrintChartBlock",props:{title:{},description:{}},setup(e){return(t,a)=>(r(),l("div",js,[s("div",Gs,[s("div",null,[s("div",Us,$(e.title),1),e.description?(r(),l("div",Ws,$(e.description),1)):f("",!0)])]),s("div",Ks,[u(t.$slots,"default",{},void 0,!0)],512),t.$slots.footer?(r(),l("div",Js,[u(t.$slots,"footer",{},void 0,!0)])):f("",!0)]))}}),Xs=y(Ys,[["__scopeId","data-v-adcb00ad"]]),Qs={key:0,class:"pr-info-title"},Zs={class:"pr-info-body"},ei=b({__name:"PrintInfoBlock",props:{title:{},variant:{default:"default"}},setup(e){return(t,a)=>(r(),l("div",{class:C(["pr-info-block",`pr-info-${e.variant}`])},[e.title?(r(),l("div",Qs,$(e.title),1)):f("",!0),s("div",Zs,[u(t.$slots,"default",{},void 0,!0)])],2))}}),ti=y(ei,[["__scopeId","data-v-b200e9ee"]]),ai={class:"pr-summary"},oi={class:"pr-summary-label"},ni={class:"pr-summary-body"},ri=b({__name:"PrintSummary",props:{label:{}},setup(e){return(t,a)=>(r(),l("div",ai,[s("div",oi,$(e.label??"Resumo Executivo"),1),s("div",ni,[u(t.$slots,"default",{},void 0,!0)])]))}}),si=y(ri,[["__scopeId","data-v-fe604797"]]),ii={class:"pr-signature-block"},li={key:0,class:"pr-signature-place-date"},ci=["data-cols"],di={class:"pr-signature-name"},ui={key:0,class:"pr-signature-role"},mi=b({__name:"PrintSignatureBlock",props:{signatures:{},placeDate:{}},setup(e){return(t,a)=>(r(),l("div",ii,[e.placeDate?(r(),l("p",li,$(e.placeDate),1)):f("",!0),s("div",{class:"pr-signature-grid","data-cols":e.signatures.length<=2?e.signatures.length:3},[(r(!0),l(I,null,H(e.signatures,o=>(r(),l("div",{key:o.name,class:"pr-signature-item"},[a[0]||(a[0]=s("div",{class:"pr-signature-line"},null,-1)),s("div",di,$(o.name),1),o.role?(r(),l("div",ui,$(o.role),1)):f("",!0)]))),128))],8,ci)]))}}),pi=y(mi,[["__scopeId","data-v-df1318a4"]]),fi={extends:Ar,enhanceApp({app:e}){e.component("HomeTable",Wr),e.component("PrintLayout",ps),e.component("PrintReport",ys),e.component("PrintSection",Ss),e.component("PrintKPIGrid",Cs),e.component("PrintKPICard",Hs),e.component("PrintDataTable",qs),e.component("PrintChartBlock",Xs),e.component("PrintInfoBlock",ti),e.component("PrintSummary",si),e.component("PrintSignatureBlock",pi)}};export{fi as R,bn as c,T as u};
