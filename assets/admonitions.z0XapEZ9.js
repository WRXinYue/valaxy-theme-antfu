import{u as m,_ as u}from"./ValaxyMain.vue_vue_type_script_setup_true_lang.RsSTNSj5.js";import{e as g,d as k,u as y}from"./chunks/vue-router.DEBVsQt2.js";import{E as f,W as t,u as v,G as b,V as n,P as s,Q as a,B as w}from"./framework.D8Dp9R1J.js";import"./app.C8ro9QE8.js";import"./chunks/dayjs.Byk5cVHE.js";import"./chunks/pinia.CoNHRQ6X.js";import"./chunks/nprogress.CRdjWq9Y.js";import"./chunks/vue-i18n.W5J9ufjA.js";const A=g("/posts/admonitions",async o=>JSON.parse('{"title":"Admonitions","description":"","frontmatter":{"title":"Admonitions","date":"2025-03-16","categories":"Documentation","tags":["valaxy","markdown","admonitions"],"duration":"1min","type":"docs","lang":"en","meta":[{"property":"og:title","content":"Admonitions"},{"name":"twitter:title","content":"Admonitions"}]},"headers":[{"level":2,"title":"Syntax","slug":"syntax","link":"#syntax","children":[{"level":3,"title":"Admonition Types","slug":"admonition-types","link":"#admonition-types","children":[]}]},{"level":2,"title":"Multi-line Content","slug":"multi-line-content","link":"#multi-line-content","children":[]},{"level":2,"title":"Using in Valaxy","slug":"using-in-valaxy","link":"#using-in-valaxy","children":[]},{"level":2,"title":"Best Practices","slug":"best-practices","link":"#best-practices","children":[]}],"relativePath":"pages/posts/admonitions.md","lastUpdated":1742142258000}'),{lazy:(o,i)=>o.name===i.name}),$={__name:"admonitions",setup(o){var d;const{data:i}=A(),c=y(),r=k(),l=Object.assign(r.meta.frontmatter||{},((d=i.value)==null?void 0:d.frontmatter)||{});return r.meta.frontmatter=l,c.currentRoute.value.data=i.value,w("valaxy:frontmatter",l),globalThis.$frontmatter=l,m({title:"Admonitions",meta:[{property:"og:title",content:"Admonitions"},{name:"twitter:title",content:"Admonitions"}]}),(e,h)=>{const p=u;return b(),f(p,{frontmatter:v(l)},{"main-content-md":t(()=>h[0]||(h[0]=[s("div",{class:"prose m-auto slide-enter-content"},[s("h1",{id:"markdown-admonitions",tabindex:"-1"},[a("Markdown Admonitions "),s("a",{class:"header-anchor",href:"#markdown-admonitions","aria-hidden":"true"},"#")]),s("p",null,"Valaxy supports GitHub-style admonition syntax, which can be used to highlight important information. These admonitions will have different colors and icons when rendered, making your documentation clearer and easier to read."),s("h2",{id:"syntax",tabindex:"-1"},[a("Syntax "),s("a",{class:"header-anchor",href:"#syntax","aria-hidden":"true"},"#")]),s("p",null,"The basic syntax for admonitions is:"),s("div",{class:"language-markdown vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"markdown"),s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light",style:{"--s-dark":"#dbd7caee","--s-light":"#393a34","--s-dark-bg":"#121212","--s-light-bg":"#ffffff"},tabindex:"0"},[s("code",{class:"language-markdown"},[s("span",{class:"line"},[s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},">"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}}," ["),s("span",{style:{"--s-dark":"#C98A7D","--s-light":"#B56959"}},"!TYPE"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"]")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},">"),s("span",{style:{"--s-dark":"#5D99A9","--s-light":"#2E808F"}}," Content")])])]),s("button",{class:"collapse"})]),s("p",null,[a("Where "),s("code",null,"TYPE"),a(" can be one of the following:")]),s("h3",{id:"admonition-types",tabindex:"-1"},[a("Admonition Types "),s("a",{class:"header-anchor",href:"#admonition-types","aria-hidden":"true"},"#")]),s("p",null,"Here are all the supported admonition types and their purposes:"),s("h4",{id:"note",tabindex:"-1"},[a("Note "),s("a",{class:"header-anchor",href:"#note","aria-hidden":"true"},"#")]),s("p",null,"Highlights information that users should take into account, even when skimming."),s("div",{class:"language-markdown vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"markdown"),s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light",style:{"--s-dark":"#dbd7caee","--s-light":"#393a34","--s-dark-bg":"#121212","--s-light-bg":"#ffffff"},tabindex:"0"},[s("code",{class:"language-markdown"},[s("span",{class:"line"},[s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},">"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}}," ["),s("span",{style:{"--s-dark":"#C98A7D","--s-light":"#B56959"}},"!NOTE"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"]")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},">"),s("span",{style:{"--s-dark":"#5D99A9","--s-light":"#2E808F"}}," This is a note highlighting important information.")])])]),s("button",{class:"collapse"})]),s("p",null,"Rendered result:"),s("div",{class:"markdown-alert markdown-alert-note"},[s("p",{class:"markdown-alert-title"},[s("svg",{class:"octicon octicon-info mr-2",viewBox:"0 0 16 16",version:"1.1",width:"16",height:"16","aria-hidden":"true"},[s("path",{d:"M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"})]),a("Note")]),s("p",null,"This is a note highlighting important information.")]),s("h4",{id:"tip",tabindex:"-1"},[a("Tip "),s("a",{class:"header-anchor",href:"#tip","aria-hidden":"true"},"#")]),s("p",null,"Optional information to help a user be more successful."),s("div",{class:"language-markdown vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"markdown"),s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light",style:{"--s-dark":"#dbd7caee","--s-light":"#393a34","--s-dark-bg":"#121212","--s-light-bg":"#ffffff"},tabindex:"0"},[s("code",{class:"language-markdown"},[s("span",{class:"line"},[s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},">"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}}," ["),s("span",{style:{"--s-dark":"#C98A7D","--s-light":"#B56959"}},"!TIP"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"]")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},">"),s("span",{style:{"--s-dark":"#5D99A9","--s-light":"#2E808F"}}," This is a tip providing optional information to help users be more successful.")])])]),s("button",{class:"collapse"})]),s("p",null,"Rendered result:"),s("div",{class:"markdown-alert markdown-alert-tip"},[s("p",{class:"markdown-alert-title"},[s("svg",{class:"octicon octicon-light-bulb mr-2",viewBox:"0 0 16 16",version:"1.1",width:"16",height:"16","aria-hidden":"true"},[s("path",{d:"M8 1.5c-2.363 0-4 1.69-4 3.75 0 .984.424 1.625.984 2.304l.214.253c.223.264.47.556.673.848.284.411.537.896.621 1.49a.75.75 0 0 1-1.484.211c-.04-.282-.163-.547-.37-.847a8.456 8.456 0 0 0-.542-.68c-.084-.1-.173-.205-.268-.32C3.201 7.75 2.5 6.766 2.5 5.25 2.5 2.31 4.863 0 8 0s5.5 2.31 5.5 5.25c0 1.516-.701 2.5-1.328 3.259-.095.115-.184.22-.268.319-.207.245-.383.453-.541.681-.208.3-.33.565-.37.847a.751.751 0 0 1-1.485-.212c.084-.593.337-1.078.621-1.489.203-.292.45-.584.673-.848.075-.088.147-.173.213-.253.561-.679.985-1.32.985-2.304 0-2.06-1.637-3.75-4-3.75ZM5.75 12h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5ZM6 15.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Z"})]),a("Tip")]),s("p",null,"This is a tip providing optional information to help users be more successful.")]),s("h4",{id:"important",tabindex:"-1"},[a("Important "),s("a",{class:"header-anchor",href:"#important","aria-hidden":"true"},"#")]),s("p",null,"Crucial information necessary for users to succeed."),s("div",{class:"language-markdown vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"markdown"),s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light",style:{"--s-dark":"#dbd7caee","--s-light":"#393a34","--s-dark-bg":"#121212","--s-light-bg":"#ffffff"},tabindex:"0"},[s("code",{class:"language-markdown"},[s("span",{class:"line"},[s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},">"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}}," ["),s("span",{style:{"--s-dark":"#C98A7D","--s-light":"#B56959"}},"!IMPORTANT"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"]")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},">"),s("span",{style:{"--s-dark":"#5D99A9","--s-light":"#2E808F"}}," This is important information that users must know to succeed.")])])]),s("button",{class:"collapse"})]),s("p",null,"Rendered result:"),s("div",{class:"markdown-alert markdown-alert-important"},[s("p",{class:"markdown-alert-title"},[s("svg",{class:"octicon octicon-report mr-2",viewBox:"0 0 16 16",version:"1.1",width:"16",height:"16","aria-hidden":"true"},[s("path",{d:"M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v9.5A1.75 1.75 0 0 1 14.25 13H8.06l-2.573 2.573A1.458 1.458 0 0 1 3 14.543V13H1.75A1.75 1.75 0 0 1 0 11.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.5c0 .138.112.25.25.25h2a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h6.5a.25.25 0 0 0 .25-.25v-9.5a.25.25 0 0 0-.25-.25Zm7 2.25v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"})]),a("Important")]),s("p",null,"This is important information that users must know to succeed.")]),s("h4",{id:"warning",tabindex:"-1"},[a("Warning "),s("a",{class:"header-anchor",href:"#warning","aria-hidden":"true"},"#")]),s("p",null,"Critical content demanding immediate user attention due to potential risks."),s("div",{class:"language-markdown vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"markdown"),s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light",style:{"--s-dark":"#dbd7caee","--s-light":"#393a34","--s-dark-bg":"#121212","--s-light-bg":"#ffffff"},tabindex:"0"},[s("code",{class:"language-markdown"},[s("span",{class:"line"},[s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},">"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}}," ["),s("span",{style:{"--s-dark":"#C98A7D","--s-light":"#B56959"}},"!WARNING"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"]")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},">"),s("span",{style:{"--s-dark":"#5D99A9","--s-light":"#2E808F"}}," This is a warning alerting users to potential risks.")])])]),s("button",{class:"collapse"})]),s("p",null,"Rendered result:"),s("div",{class:"markdown-alert markdown-alert-warning"},[s("p",{class:"markdown-alert-title"},[s("svg",{class:"octicon octicon-alert mr-2",viewBox:"0 0 16 16",version:"1.1",width:"16",height:"16","aria-hidden":"true"},[s("path",{d:"M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"})]),a("Warning")]),s("p",null,"This is a warning alerting users to potential risks.")]),s("h4",{id:"caution",tabindex:"-1"},[a("Caution "),s("a",{class:"header-anchor",href:"#caution","aria-hidden":"true"},"#")]),s("p",null,"Negative potential consequences of an action."),s("div",{class:"language-markdown vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"markdown"),s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light",style:{"--s-dark":"#dbd7caee","--s-light":"#393a34","--s-dark-bg":"#121212","--s-light-bg":"#ffffff"},tabindex:"0"},[s("code",{class:"language-markdown"},[s("span",{class:"line"},[s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},">"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}}," ["),s("span",{style:{"--s-dark":"#C98A7D","--s-light":"#B56959"}},"!CAUTION"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"]")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},">"),s("span",{style:{"--s-dark":"#5D99A9","--s-light":"#2E808F"}}," This is a caution advising about negative potential consequences of an action.")])])]),s("button",{class:"collapse"})]),s("p",null,"Rendered result:"),s("div",{class:"markdown-alert markdown-alert-caution"},[s("p",{class:"markdown-alert-title"},[s("svg",{class:"octicon octicon-stop mr-2",viewBox:"0 0 16 16",version:"1.1",width:"16",height:"16","aria-hidden":"true"},[s("path",{d:"M4.47.22A.749.749 0 0 1 5 0h6c.199 0 .389.079.53.22l4.25 4.25c.141.14.22.331.22.53v6a.749.749 0 0 1-.22.53l-4.25 4.25A.749.749 0 0 1 11 16H5a.749.749 0 0 1-.53-.22L.22 11.53A.749.749 0 0 1 0 11V5c0-.199.079-.389.22-.53Zm.84 1.28L1.5 5.31v5.38l3.81 3.81h5.38l3.81-3.81V5.31L10.69 1.5ZM8 4a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 8 4Zm0 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"})]),a("Caution")]),s("p",null,"This is a caution advising about negative potential consequences of an action.")]),s("h2",{id:"multi-line-content",tabindex:"-1"},[a("Multi-line Content "),s("a",{class:"header-anchor",href:"#multi-line-content","aria-hidden":"true"},"#")]),s("p",null,"Admonitions can contain multiple lines of content, just make sure each line has the proper indentation:"),s("div",{class:"language-markdown vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"markdown"),s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light",style:{"--s-dark":"#dbd7caee","--s-light":"#393a34","--s-dark-bg":"#121212","--s-light-bg":"#ffffff"},tabindex:"0"},[s("code",{class:"language-markdown"},[s("span",{class:"line"},[s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},">"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}}," ["),s("span",{style:{"--s-dark":"#C98A7D","--s-light":"#B56959"}},"!NOTE"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"]")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},">"),s("span",{style:{"--s-dark":"#5D99A9","--s-light":"#2E808F"}}," This is the first line")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},">")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},">"),s("span",{style:{"--s-dark":"#5D99A9","--s-light":"#2E808F"}}," This is the second line, with an empty line in between")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},">")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},">"),s("span",{style:{"--s-dark":"#D4976C","--s-light":"#A65E2B"}}," -"),s("span",{style:{"--s-dark":"#5D99A9","--s-light":"#2E808F"}}," You can even use lists in admonitions")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},">"),s("span",{style:{"--s-dark":"#D4976C","--s-light":"#A65E2B"}}," -"),s("span",{style:{"--s-dark":"#5D99A9","--s-light":"#2E808F"}}," Second list item")])])]),s("button",{class:"collapse"})]),s("p",null,"Rendered result:"),s("div",{class:"markdown-alert markdown-alert-note"},[s("p",{class:"markdown-alert-title"},[s("svg",{class:"octicon octicon-info mr-2",viewBox:"0 0 16 16",version:"1.1",width:"16",height:"16","aria-hidden":"true"},[s("path",{d:"M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"})]),a("Note")]),s("p",null,"This is the first line"),s("p",null,"This is the second line, with an empty line in between"),s("ul",null,[s("li",null,"You can even use lists in admonitions"),s("li",null,"Second list item")])]),s("h2",{id:"using-in-valaxy",tabindex:"-1"},[a("Using in Valaxy "),s("a",{class:"header-anchor",href:"#using-in-valaxy","aria-hidden":"true"},"#")]),s("p",null,"In Valaxy Markdown files, you can use these admonition syntaxes directly. They work in blog posts, documentation pages, or any other Markdown content."),s("p",null,"This syntax is compatible with GitHub’s admonition syntax, so your documentation will display correctly on GitHub as well."),s("h2",{id:"best-practices",tabindex:"-1"},[a("Best Practices "),s("a",{class:"header-anchor",href:"#best-practices","aria-hidden":"true"},"#")]),s("ul",null,[s("li",null,[s("strong",null,"NOTE"),a(": For general information that is not urgent but useful")]),s("li",null,[s("strong",null,"TIP"),a(": For providing extra help or suggestions")]),s("li",null,[s("strong",null,"IMPORTANT"),a(": For information that must be known")]),s("li",null,[s("strong",null,"WARNING"),a(": For situations that might cause problems")]),s("li",null,[s("strong",null,"CAUTION"),a(": For operations that need special care")])]),s("p",null,"Don’t overuse admonitions, as this will diminish their effect. Only use them when you really need to emphasize important information.")],-1)])),"main-header":t(()=>[n(e.$slots,"main-header")]),"main-header-after":t(()=>[n(e.$slots,"main-header-after")]),"main-nav":t(()=>[n(e.$slots,"main-nav")]),"main-content-before":t(()=>[n(e.$slots,"main-content-before")]),"main-content":t(()=>[n(e.$slots,"main-content")]),"main-content-after":t(()=>[n(e.$slots,"main-content-after")]),"main-nav-before":t(()=>[n(e.$slots,"main-nav-before")]),"main-nav-after":t(()=>[n(e.$slots,"main-nav-after")]),comment:t(()=>[n(e.$slots,"comment")]),footer:t(()=>[n(e.$slots,"footer")]),aside:t(()=>[n(e.$slots,"aside")]),"aside-custom":t(()=>[n(e.$slots,"aside-custom")]),default:t(()=>[n(e.$slots,"default")]),_:3},8,["frontmatter"])}}};export{$ as default,A as usePageData};
