(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{150:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return p}),a.d(t,"pageQuery",function(){return d});a(173);var r=a(7),n=a.n(r),o=(a(610),a(0)),s=a.n(o),i=(a(36),a(162)),c=a(157),l=a(161),u=a(186),m=(a(611),function(e){var t=e.link;return s.a.createElement("a",{href:t,className:"new-post float-left"},s.a.createElement(c.ArrowLeft,{size:18}),"New Post")}),g=function(e){var t=e.link;return s.a.createElement("a",{href:t,className:"old-post float-right"},"Older Post",s.a.createElement(c.ArrowRight,{size:18}))},p=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){var e=this.props,t=e.data,a=e.pageContext,r=t.allMarkdownRemark.edges,n=a.oldPost,o=a.newPost;return s.a.createElement(i.a,{name:"Blog",showHeader:!0},s.a.createElement(l.a,{title:"Blog",keywords:["Blog","Madan Kumar","Javascript","gatsby"]}),s.a.createElement("div",{className:"blog-page"},s.a.createElement("h3",null,"Blog"),r.map(function(e){var t=e.node,a=t.frontmatter.image?t.frontmatter.image.childImageSharp.fixed.src:"";return s.a.createElement(u.a,{title:t.frontmatter.title,author:t.frontmatter.author,showImage:!!t.frontmatter.image,image:a,date:t.frontmatter.date,tags:t.frontmatter.tags,showIcon:!0,key:t.id,showContent:!1,to:t.frontmatter.path})}),s.a.createElement("div",{className:"clearfix"},o&&s.a.createElement(m,{link:o}),n&&s.a.createElement(g,{link:n}))))},t}(o.Component);p.propTypes={};var d="2518423974"},168:function(e,t,a){var r=a(11),n=a(26),o=a(18),s=/"/g,i=function(e,t,a,r){var n=String(o(e)),i="<"+t;return""!==a&&(i+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),i+">"+n+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(i),r(r.P+r.F*n(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},173:function(e,t,a){"use strict";a(168)("fixed",function(e){return function(){return e(this,"tt","","")}})},186:function(e,t,a){"use strict";var r=a(7),n=a.n(r),o=a(0),s=a.n(o),i=a(1),c=a.n(i),l={ICON_SIZE:16,NAV_ICON_SIZE:20},u=a(157),m=function(e){var t=e.author,a=e.showIcon;return s.a.createElement("span",{className:"author"},a&&s.a.createElement(u.User,{size:l.ICON_SIZE}),t)};m.propTypes={author:c.a.string.isRequired,showIcon:c.a.bool},m.defaultProps={showIcon:!1};var g=m,p=function(e){var t=e.date,a=e.showIcon;return s.a.createElement("span",{className:"date",style:{marginRight:"10px"}},a&&s.a.createElement(u.Clock,{size:l.ICON_SIZE}),t)};p.propTypes={date:c.a.string.isRequired,showIcon:c.a.bool},p.defaultProps={showIcon:!1};var d=p,h=["magenta","red","volcano","orange","gold","lime","green","cyan","blue","geekblue","purple"],f=function(e){var t=e.title,a=e.color,r=h[Math.floor(Math.random()*h.length)]||a;return s.a.createElement("span",{className:"badge badge-"+r+" tag"},"#",t)};f.propTypes={title:c.a.string.isRequired,color:c.a.string};var w=f,E=function(e){var t=e.tags;return s.a.createElement("div",{className:""},t.map(function(e){return s.a.createElement(w,{title:e,key:e})}))};E.propTypes={tags:c.a.array.isRequired};var v=E,I=function(e){function t(){return e.apply(this,arguments)||this}n()(t,e);var a=t.prototype;return a.navigate=function(e){window.location.href=e},a.render=function(){var e=this,t=this.props,a=t.showImage,r=t.image,n=t.author,o=t.date,i=t.tags,c=(t.description,t.showIcon),l=t.title,u=t.to,m=t.showContent,p=t.content;return s.a.createElement("div",{className:"card post",onClick:function(){return e.navigate(u)}},a&&s.a.createElement("div",{className:"card-image-top"},s.a.createElement("img",{src:r})),s.a.createElement("div",{className:"card-body"},s.a.createElement("h4",{className:"card-title"},l),s.a.createElement("h6",{className:"card-subtitle mb-2 text-muted"},s.a.createElement(g,{author:n,showIcon:c}),s.a.createElement(d,{date:o,showIcon:c})),s.a.createElement(v,{tags:i}),m&&s.a.createElement("div",{dangerouslySetInnerHTML:{__html:p}})))},t}(o.Component);I.propTypes={showImage:c.a.bool,image:c.a.string,author:c.a.string.isRequired,date:c.a.string.isRequired,tags:c.a.array,showIcon:c.a.bool,description:c.a.string,title:c.a.string,to:c.a.string.isRequired,showContent:c.a.bool,content:c.a.string},I.defaultProps={showImage:!1,image:"",showIcon:!1};t.a=I},610:function(e,t,a){"use strict";a(168)("link",function(e){return function(t){return e(this,"a","href",t)}})},611:function(e,t,a){}}]);
//# sourceMappingURL=component---src-templates-blog-page-index-js-dec03b9dec0e47aa6846.js.map