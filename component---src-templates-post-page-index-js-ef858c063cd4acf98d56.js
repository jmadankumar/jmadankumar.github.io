(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{149:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return m}),a.d(t,"pageQuery",function(){return u});a(173);var r=a(7),n=a.n(r),o=a(0),i=a.n(o),s=a(162),c=a(161),l=a(186),m=(a(609),function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){var e=this.props.data.post,t=e.frontmatter.image?e.frontmatter.image.childImageSharp.fixed.src:"";return i.a.createElement(s.a,{name:e.frontmatter.title,showHeader:!0},i.a.createElement(c.a,{title:e.frontmatter.title,description:e.frontmatter.description,keywords:e.frontmatter.tags}),i.a.createElement("div",{className:"post-page"},i.a.createElement("nav",{"aria-label":"breadcrumb"},i.a.createElement("ol",{className:"breadcrumb"},i.a.createElement("li",{className:"breadcrumb-item"},i.a.createElement("a",{href:"/blog"},"Blog")),i.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},e.frontmatter.title))),i.a.createElement(l.a,{title:e.frontmatter.title,author:e.frontmatter.author,showImage:!!e.frontmatter.image,image:t,date:e.frontmatter.date,tags:e.frontmatter.tags,showIcon:!0,key:e.id,showContent:!0,content:e.html})))},t}(o.Component));m.propTypes={};var u="3208741790"},168:function(e,t,a){var r=a(11),n=a(26),o=a(18),i=/"/g,s=function(e,t,a,r){var n=String(o(e)),s="<"+t;return""!==a&&(s+=" "+a+'="'+String(r).replace(i,"&quot;")+'"'),s+">"+n+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(s),r(r.P+r.F*n(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},173:function(e,t,a){"use strict";a(168)("fixed",function(e){return function(){return e(this,"tt","","")}})},186:function(e,t,a){"use strict";var r=a(7),n=a.n(r),o=a(0),i=a.n(o),s=a(1),c=a.n(s),l={ICON_SIZE:16,NAV_ICON_SIZE:20},m=a(157),u=function(e){var t=e.author,a=e.showIcon;return i.a.createElement("span",{className:"author"},a&&i.a.createElement(m.User,{size:l.ICON_SIZE}),t)};u.propTypes={author:c.a.string.isRequired,showIcon:c.a.bool},u.defaultProps={showIcon:!1};var p=u,d=function(e){var t=e.date,a=e.showIcon;return i.a.createElement("span",{className:"date",style:{marginRight:"10px"}},a&&i.a.createElement(m.Clock,{size:l.ICON_SIZE}),t)};d.propTypes={date:c.a.string.isRequired,showIcon:c.a.bool},d.defaultProps={showIcon:!1};var g=d,h=["magenta","red","volcano","orange","gold","lime","green","cyan","blue","geekblue","purple"],f=function(e){var t=e.title,a=e.color,r=h[Math.floor(Math.random()*h.length)]||a;return i.a.createElement("span",{className:"badge badge-"+r+" tag"},"#",t)};f.propTypes={title:c.a.string.isRequired,color:c.a.string};var v=f,w=function(e){var t=e.tags;return i.a.createElement("div",{className:""},t.map(function(e){return i.a.createElement(v,{title:e,key:e})}))};w.propTypes={tags:c.a.array.isRequired};var E=w,I=function(e){function t(){return e.apply(this,arguments)||this}n()(t,e);var a=t.prototype;return a.navigate=function(e){window.location.href=e},a.render=function(){var e=this,t=this.props,a=t.showImage,r=t.image,n=t.author,o=t.date,s=t.tags,c=t.description,l=t.showIcon,m=t.title,u=t.to,d=t.showContent,h=t.content;return console.log(c),i.a.createElement("div",{className:"card post",onClick:function(){return e.navigate(u)}},a&&i.a.createElement("div",{className:"card-image-top image"},i.a.createElement("img",{src:r,alt:"post cover"})),i.a.createElement("div",{className:"card-body"},i.a.createElement("h4",{className:"card-title"},m),i.a.createElement("h6",{className:"card-subtitle mb-2 text-muted"},i.a.createElement(p,{author:n,showIcon:l}),i.a.createElement(g,{date:o,showIcon:l})),i.a.createElement(E,{tags:s}),d&&i.a.createElement("div",{dangerouslySetInnerHTML:{__html:h}})))},t}(o.Component);I.propTypes={showImage:c.a.bool,image:c.a.string,author:c.a.string.isRequired,date:c.a.string.isRequired,tags:c.a.array,showIcon:c.a.bool,description:c.a.string,title:c.a.string,to:c.a.string,showContent:c.a.bool,content:c.a.string},I.defaultProps={showImage:!1,image:"",showIcon:!1};t.a=I},609:function(e,t,a){}}]);
//# sourceMappingURL=component---src-templates-post-page-index-js-ef858c063cd4acf98d56.js.map