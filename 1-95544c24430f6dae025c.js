(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{145:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(4),c=a.n(i),o=a(146),s=a.n(o);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var u=a(176),l=a.n(u);a.d(t,"PageRenderer",function(){return l.a});var m=a(48);a.d(t,"parsePath",function(){return m.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},150:function(e,t,a){"use strict";var n=a(590),r=a(0),i=a.n(r),c=a(4),o=a.n(c),s=a(591),u=a.n(s),l=a(145);function m(e){var t=e.description,a=e.lang,r=e.meta,c=e.keywords,o=e.title;return i.a.createElement(l.StaticQuery,{query:d,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(u.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:o},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:n}].concat(c.length>0?{name:"keywords",content:c.join(", ")}:[]).concat(r)})},data:n})}m.defaultProps={lang:"en",meta:[],keywords:[]},m.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=m;var d="1025518380"},151:function(e,t,a){"use strict";a(152);var n=a(214),r=a(0),i=a.n(r),c=a(4),o=a.n(c),s=a(145),u=a(162),l=a.n(u),m=function(e){e.siteTitle;return i.a.createElement("div",{className:"header-bar"},i.a.createElement("div",{className:"header-container"},i.a.createElement("div",{className:"brand"},i.a.createElement("img",{src:l.a,className:"brand-image rounded-circle"}),i.a.createElement("span",{className:"brand-name"},"Madan Kumar"))))};m.propTypes={siteTitle:o.a.string},m.defaultProps={siteTitle:""};var d=m,p=a(7),f=a.n(p),h=a(163),y=a(177),g=(a(586),Date.now()),v=[{name:"Email",href:"mailto:kumarmadan.j@gmail.com",icon:h.Mail},{name:"Github",href:"https://github.com/jmadankumar",icon:h.GitHub},{name:"Twitter",href:"https://twitter.com/madan1994",icon:h.Twitter},{name:"LinkedIn",href:"https://www.linkedin.com/in/madan-kumar-16469997/",icon:h.Linkedin},{name:"Facebook",href:"https://www.facebook.com/madan.madans.kumar",icon:h.Facebook}],w=function(e){function t(){return e.apply(this,arguments)||this}return f()(t,e),t.prototype.render=function(){return i.a.createElement("footer",null,i.a.createElement("div",{className:"copy-right"},"© Copy right ",Object(y.format)(g,"YYYY")),i.a.createElement("div",{className:"made-with"},i.a.createElement("span",null,"Made with "),i.a.createElement(h.Heart,{size:20,color:"red"}),i.a.createElement("span",{className:"author"},"by Madan Kumar")),i.a.createElement("div",{className:"social-links"},v.map(function(e){return i.a.createElement("a",{target:"_blank",className:"social-media",href:e.href,key:e.name},i.a.createElement(e.icon,{size:20}))})))},t}(r.Component),E=(a(587),[{name:"Porfolio",icon:h.User,href:"/"},{name:"Experience",icon:h.Layers,href:"/experience"},{name:"Work",icon:h.Grid,href:"/work"},{name:"Blog",icon:h.Feather,href:"/blog"}]),b=function(e){function t(){return e.apply(this,arguments)||this}return f()(t,e),t.prototype.render=function(){var e=this.props,t=e.name,a=e.icon,n=e.href,r=e.isActive;return i.a.createElement("li",{className:"nav-item "+(r?"active":"")},i.a.createElement("a",{className:"nav-link",href:n},i.a.createElement(a,{size:20}),t))},t}(r.Component),k=function(e){function t(){return e.apply(this,arguments)||this}f()(t,e);var a=t.prototype;return a.checkLink=function(e,t){return e===t},a.render=function(){var e=this,t=this.props.currentLinkName;return i.a.createElement("div",{className:"mk-navbar"},i.a.createElement("div",{className:"nav-container"},i.a.createElement("div",{className:"brand"},i.a.createElement("img",{src:l.a,className:"brand-image rounded-circle"}),i.a.createElement("span",{className:"brand-name"},"Madan Kumar")),i.a.createElement("ul",{className:"nav"},E.map(function(a){return i.a.createElement(b,{name:a.name,href:a.href,icon:a.icon,key:a.name,isActive:e.checkLink(a.name,t)})}))))},t}(r.Component),N=(a(588),a(589),function(e){var t=e.children,a=e.name,r=e.showHeader;return i.a.createElement(s.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,r&&i.a.createElement(d,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{className:"main-content"},t),i.a.createElement(w,null),i.a.createElement(k,{currentLinkName:a}))},data:n})});N.propTypes={children:o.a.node.isRequired};t.a=N},162:function(e,t,a){e.exports=a.p+"static/new_profile-23029b8bcbaeda2512fe09c04c8af8b7.jpg"},176:function(e,t,a){var n;e.exports=(n=a(215))&&n.default||n},214:function(e){e.exports={data:{site:{siteMetadata:{title:"Madan Kumar"}}}}},215:function(e,t,a){"use strict";a.r(t);a(32);var n=a(0),r=a.n(n),i=a(4),c=a.n(i),o=a(68),s=a(2),u=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};u.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=u},586:function(e,t,a){},587:function(e,t,a){},588:function(e,t,a){},589:function(e,t,a){},590:function(e){e.exports={data:{site:{siteMetadata:{title:"Madan Kumar",description:"Peronal Portfolio and Blog of Madan Kumar.",author:"@madan"}}}}}}]);
//# sourceMappingURL=1-95544c24430f6dae025c.js.map