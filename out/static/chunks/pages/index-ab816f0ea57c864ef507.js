(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405,179],{9113:function(e,s,n){"use strict";var i=n(5893),a=(n(7294),n(5675)),t=n(1163),r=n(2951),l=n(2062),c=n.n(l);s.Z=function(e){(0,t.useRouter)();return(0,i.jsx)("div",{className:[c().card,e.detailed&&c().detailed].filter(Boolean).join(" "),children:(0,i.jsx)("div",{className:c().box,"data-category":e.category,children:(0,i.jsxs)("div",{className:c().content,children:[(0,i.jsx)("div",{className:c().image,children:(0,i.jsx)(a.default,{src:e.thumbnail,alt:"target",height:60,width:60})}),(0,i.jsxs)("div",{className:c().info,children:[(0,i.jsx)("h3",{className:c()["info-heading"],children:e.name}),e.detailed&&(0,i.jsx)("p",{className:c()["info-description"],children:e.description})]}),(0,i.jsx)(r.Z,{url:e.url})]})})})}},5474:function(e,s,n){"use strict";var i=n(5893),a=(n(7294),n(4227)),t=n(2951),r=n(5159),l=n.n(r);s.Z=function(e){var s=e.article;return(0,i.jsxs)("div",{className:l().blogcard,children:[(0,i.jsx)("div",{className:l().image,children:(0,i.jsx)(a.Z,{image:s.image,style:{width:"100%",height:"100%"}})}),(0,i.jsxs)("div",{className:l().content,children:[(0,i.jsx)("p",{id:"title",className:l().title,children:s.title}),(0,i.jsx)(t.Z,{url:"/resources/".concat(s.slug),children:"Read"})]})]})}},8073:function(e,s,n){"use strict";var i=n(6156),a=n(5893),t=n(7294),r=n(9416),l=n.n(r);function c(e,s){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);s&&(i=i.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var s=1;s<arguments.length;s++){var n=null!=arguments[s]?arguments[s]:{};s%2?c(Object(n),!0).forEach((function(s){(0,i.Z)(e,s,n[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(n,s))}))}return e}s.Z=function(e){return(0,a.jsx)(t.Fragment,{children:(0,a.jsx)("div",o(o({className:[l().button,e.white&&l()["button-white"],e.stretch&&l().stretch].filter(Boolean).join(" ")},e),{},{children:(0,a.jsx)("span",{children:e.children})}))})}},2951:function(e,s,n){"use strict";var i=n(5893),a=(n(7294),n(1664)),t=n(9945),r=n.n(t);s.Z=function(e){return(0,i.jsx)("div",{className:r().cta,children:(0,i.jsx)(a.default,{href:e.url,children:(0,i.jsxs)("a",{className:r()["animated-arrow"],children:[(0,i.jsx)("span",{className:[r()["the-arrow"],r()["the-arrow--left"]].join(" "),children:(0,i.jsx)("span",{className:r().shaft})}),(0,i.jsxs)("span",{className:r().main,children:[(0,i.jsx)("span",{className:r().text,children:e.children||"Details"}),(0,i.jsx)("span",{className:[r()["the-arrow"],r()["the-arrow--right"]].join(" "),children:(0,i.jsx)("span",{className:r().shaft})})]})]})})})}},4227:function(e,s,n){"use strict";var i=n(5893),a=n(2017);s.Z=function(e){var s=e.image,n=e.style,t=(0,a.$)(s);return(0,i.jsx)("img",{src:t,alt:s.alternativeText||s.name,style:n})}},5622:function(e,s,n){"use strict";n.d(s,{Z:function(){return x}});var i=n(5893),a=n(3391),t=n(6814),r=n(7294),l=n(1664),c=n(5675),o=n(1163),d=n(8073),u=n(8540),h=n.n(u),_=function(e){(0,t.Z)(e);var s=(0,o.useRouter)(),n=r.useState(!1),u=(0,a.Z)(n,2),_=u[0],p=u[1],m=r.useCallback((function(){return p((function(e){return!e}))}),[]);return(0,i.jsxs)("nav",{className:h().navbar,role:"navigation","aria-label":"main navigation",children:[(0,i.jsxs)("div",{className:h()["navbar-brand"],children:[(0,i.jsx)("div",{onClick:function(){return s.push("/")},children:(0,i.jsx)(c.default,{className:h()["navbar-logo"],src:"/images/apphublogo.png",alt:"Logo",width:160,height:45,priority:!0})}),(0,i.jsx)("button",{className:[h().burger,_&&h()["burger-active"]].filter(Boolean).join(" "),onClick:m})]}),(0,i.jsxs)("div",{className:[h()["navbar-menu"],_&&h()["menu-active"]].filter(Boolean).join(" "),children:[(0,i.jsx)("div",{className:h()["navbar-menu--item"],children:(0,i.jsx)(l.default,{href:"/apps",children:(0,i.jsx)("a",{className:h()["navbar-menu--link"],children:"Apps"})})}),(0,i.jsx)("div",{className:h()["navbar-menu--item"],children:(0,i.jsx)(l.default,{href:"/resources",children:(0,i.jsx)("a",{className:h()["navbar-menu--link"],children:"Resources"})})}),(0,i.jsx)("div",{className:h()["navbar-menu--item"],children:(0,i.jsx)(l.default,{href:"/about",children:(0,i.jsx)("a",{className:h()["navbar-menu--link"],children:"About"})})}),(0,i.jsx)("div",{className:h()["navbar-menu--item"],children:(0,i.jsx)("div",{onClick:function(){return s.push("/apps")},children:(0,i.jsx)(d.Z,{children:"Find Your App"})})})]})]})},p=n(6315),m=n.n(p),j=function(e){return(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:m().footer,children:(0,i.jsxs)("div",{className:"columns",children:[(0,i.jsx)("div",{className:"column is-3",children:(0,i.jsx)(c.default,{alt:"Logo",src:"/images/apphublogomain.png",width:60,height:60})}),(0,i.jsxs)("div",{className:"column is-3",children:[(0,i.jsx)("h4",{className:m().heading,children:"Company"}),(0,i.jsxs)("ul",{className:m().section,children:[(0,i.jsx)("li",{className:m()["footer-link"],children:"About"}),(0,i.jsx)("li",{className:m()["footer-link"],children:"Team"}),(0,i.jsx)("li",{className:m()["footer-link"],children:"Join"}),(0,i.jsx)("li",{className:m()["footer-link"],children:"Newsroom"}),(0,i.jsx)("li",{className:m()["footer-link"],children:"Contact"})]})]}),(0,i.jsxs)("div",{className:"column is-3",children:[(0,i.jsx)("h4",{className:m().heading,children:"Solutions"}),(0,i.jsx)("ul",{className:m().section,children:(e.categories||[]).map((function(e){return(0,i.jsx)("li",{className:m()["footer-link"],children:e.name},e.key)}))})]}),(0,i.jsxs)("div",{className:"column is-3",children:[(0,i.jsx)("h4",{className:m().heading,children:"Resources"}),(0,i.jsxs)("ul",{className:m().section,children:[(0,i.jsx)("li",{className:m()["footer-link"],children:"Resources"}),(0,i.jsx)("li",{className:m()["footer-link"],children:"Support"}),(0,i.jsx)("li",{className:m()["footer-link"],children:"Documentation"}),(0,i.jsx)("li",{className:m()["footer-link"],children:"Subscribe"})]})]})]})}),(0,i.jsx)("div",{className:m()["footer-below"],children:"Copyright \xa9 2021 Appfire | All rights reserved."})]})},x=function(e){var s=e.children,n=e.categories;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(_,{}),s,(0,i.jsx)(j,{categories:n})]})}},2017:function(e,s,n){"use strict";n.d(s,{$:function(){return a}});n(7757);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return"".concat("https://backend-apphub.herokuapp.com").concat(e)}function a(e){return e.url.startsWith("/")?i(e.url):e.url}},9494:function(e,s,n){"use strict";n.r(s),n.d(s,{__N_SSG:function(){return v},default:function(){return b}});var i=n(5893),a=n(9008),t=n(5675),r=n(1163),l=n(5622),c=n(8073),o=n(5474),d=n(6156),u=n(3391),h=n(7294),_=n(9113),p=n(1876),m=n.n(p);function j(e,s){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);s&&(i=i.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),n.push.apply(n,i)}return n}function x(e){for(var s=1;s<arguments.length;s++){var n=null!=arguments[s]?arguments[s]:{};s%2?j(Object(n),!0).forEach((function(s){(0,d.Z)(e,s,n[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(n,s))}))}return e}var f=function(e){var s=e.categories||[],n=e.appsListing||{},a=(0,r.useRouter)(),t=h.useState(s[0].key),l=(0,u.Z)(t,2),o=l[0],d=l[1];return(0,i.jsxs)("div",{className:m().apps,children:[(0,i.jsxs)("div",{className:m()["content-info"],children:[(0,i.jsx)("h2",{className:m().heading,children:"We have an app for your need"}),(0,i.jsx)("p",{className:m().subheading,children:"With 120+ apps to choose from, over a dozen brilliant software company founders, and a global company full of people on your side, rest assured: we\u2019ve got you covered."})]}),(0,i.jsxs)("div",{className:m()["apps-display"],children:[(0,i.jsxs)("div",{className:["columns is-desktop"].join(" "),children:[(0,i.jsx)("div",{className:["column is-one-thirds",m()["apps-display--left"]].join(" "),children:(0,i.jsx)("ul",{className:m()["apps-display-menu"],children:s.map((function(e){return(0,i.jsx)("li",{className:[m()["apps-display-menu--item"],e.key===o?m().active:""].join(" "),"data-category":e.key,onClick:function(){d(e.key)},children:e.name},e.key)}))})}),(0,i.jsx)("div",{className:["column is-two-thirds",m()["apps-display-listing"]].join(" "),children:(0,i.jsx)("div",{className:"columns is-multiline is-gapless is-mobile",children:n[o]&&n[o].slice(0,4).map((function(e){return(0,i.jsx)("div",{className:"column is-half",children:(0,i.jsx)(_.Z,x(x({},e),{},{category:o}))},e.name)}))})})]}),(0,i.jsx)("div",{children:(0,i.jsx)(c.Z,{onClick:function(){return a.push("/apps")},children:"More Apps"})})]})]})},g=n(7286),y=n.n(g),v=!0;function b(e){var s=(0,r.useRouter)();return(0,i.jsxs)("div",{className:y().container,children:[(0,i.jsxs)(a.default,{children:[(0,i.jsx)("title",{children:"Home | AppHub"}),(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,i.jsxs)(l.Z,{categories:e.categories,children:[(0,i.jsx)("header",{children:(0,i.jsxs)("div",{className:y().hero,children:[(0,i.jsx)("div",{className:y()["hero-background"],children:(0,i.jsx)(t.default,{alt:"Hero",src:"/images/hero.jpg",layout:"fill",objectFit:"cover",quality:100})}),(0,i.jsxs)("div",{className:y()["hero-content"],children:[(0,i.jsx)("div",{className:y()["hero-heading"],children:"Shopify apps to serve your big needs."}),(0,i.jsx)("button",{className:y()["glow-on-hover"],type:"button",onClick:function(){return s.push("/apps")},children:"Find Your App"})]})]})}),(0,i.jsxs)("main",{className:y().main,children:[(0,i.jsxs)("div",{className:y().speciality,children:[(0,i.jsx)("div",{className:y()["speciality-background"],children:(0,i.jsx)(t.default,{alt:"Speciality",src:"/images/speciality.jpg",layout:"fill",objectFit:"cover",quality:100})}),(0,i.jsxs)("div",{className:y()["speciality-content"],children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:y().heading,children:"Our Speciality"}),(0,i.jsx)("p",{children:"At AppHub, we use a simple recipe. We look for the best product builders out there, figure out their needs, take away their annoyances, and encourage them to solve important customer challenges in Shopify."})]}),(0,i.jsx)(c.Z,{onClick:function(){return s.push("/about")},children:"Learn About Us"})]})]}),(0,i.jsx)(f,{categories:e.categories,appsListing:e.appsListing}),(0,i.jsxs)("div",{className:y()["blogs-display"],children:[(0,i.jsx)("h3",{className:y()["blogs-display__heading"],children:"Latest News"}),(0,i.jsx)("div",{className:["columns"].join(" "),children:e.articles.slice(0,4).map((function(e){return(0,i.jsx)("div",{className:"column is-3",children:(0,i.jsx)(o.Z,{article:e})},e.slug)}))}),(0,i.jsx)(c.Z,{onClick:function(){return s.push("/resources")},children:"Read More"})]})]})]})]})}},8581:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(9494)}])},2062:function(e){e.exports={card:"styles_card__1E4dM",detailed:"styles_detailed__1Lixv",box:"styles_box__DxfyX",content:"styles_content__3cL2T",info:"styles_info__KjvTv",image:"styles_image__3jYrO","info-heading":"styles_info-heading__3aAkc","info-description":"styles_info-description__2nURL"}},1876:function(e){e.exports={apps:"styles_apps__1sPKq","content-info":"styles_content-info__3uBaY",heading:"styles_heading__3yQEg",subheading:"styles_subheading__opWgU","apps-display":"styles_apps-display__28GsZ","apps-display-menu":"styles_apps-display-menu__2uGdE","apps-display-menu--item":"styles_apps-display-menu--item__3tsrg",active:"styles_active__3ZSP_","apps-display-listing":"styles_apps-display-listing__235Yj"}},5159:function(e){e.exports={blogcard:"styles_blogcard__lOM6e",image:"styles_image__3i6AU",content:"styles_content__xV-ka",title:"styles_title__1ejwW"}},9416:function(e){e.exports={button:"styles_button__2gKf6","button-white":"styles_button-white__U27I7",stretch:"styles_stretch__eUmgP"}},9945:function(e){e.exports={cta:"styles_cta__3jVu6","the-arrow":"styles_the-arrow__1Vxu8","the-arrow--left":"styles_the-arrow--left__3Q4jg",shaft:"styles_shaft__2d3RT","the-arrow--right":"styles_the-arrow--right__1vv_u","animated-arrow":"styles_animated-arrow__9X4wF",main:"styles_main__2Slwk",text:"styles_text__3-Jpo"}},6315:function(e){e.exports={footer:"styles_footer__3DOeq",heading:"styles_heading___V0_u",section:"styles_section__3Hmxc","footer-link":"styles_footer-link__x7Kax","footer-below":"styles_footer-below__qrZVD"}},8540:function(e){e.exports={navbar:"styles_navbar__3rhud","navbar-brand":"styles_navbar-brand__2Nc_y","navbar-logo":"styles_navbar-logo__DIVMf","navbar-menu":"styles_navbar-menu__3rCao","menu-active":"styles_menu-active__1bDWb","navbar-menu--item":"styles_navbar-menu--item__h77M6","navbar-menu--link":"styles_navbar-menu--link__Ksymf",burger:"styles_burger__2ZND6","burger-active":"styles_burger-active__31ws5"}},7286:function(e){e.exports={container:"index_container__3Or0C",hero:"index_hero__1xRhG","hero-background":"index_hero-background__1sVbt","hero-content":"index_hero-content__3gEeo","hero-heading":"index_hero-heading__2c1JL",main:"index_main__3P-zj",speciality:"index_speciality__2hq1y","speciality-background":"index_speciality-background__1o2jv","speciality-content":"index_speciality-content__t4gpH",heading:"index_heading__2HQwg","blogs-display":"index_blogs-display__1REb1","blogs-display__heading":"index_blogs-display__heading__3BiLi","glow-on-hover":"index_glow-on-hover__giRDb",glowing:"index_glowing__2K7hs"}},4453:function(){}},function(e){e.O(0,[774,282,414],(function(){return s=8581,e(e.s=s);var s}));var s=e.O();_N_E=s}]);