(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{154:function(e,t,a){"use strict";a.d(t,"b",function(){return c});var i=a(0),r=a.n(i),n=a(4),s=a.n(n),o=a(33),d=a.n(o);a.d(t,"a",function(){return d.a});a(156);var l=r.a.createContext({}),c=function(e){return r.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};c.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},155:function(e,t,a){"use strict";a.d(t,"a",function(){return d}),a.d(t,"b",function(){return l});var i=a(162),r=a.n(i),n=a(163),s=a.n(n);s.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete s.a.googleFonts;var o=new r.a(s.a);var d=o.rhythm,l=o.scale},156:function(e,t,a){var i;e.exports=(i=a(159))&&i.default||i},157:function(e,t,a){"use strict";a(34);var i=a(7),r=a.n(i),n=a(0),s=a.n(n),o=a(154),d=a(155),l=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t=this.props,a=t.location,i=t.title,r=t.children;return e="/"===a.pathname?s.a.createElement("h1",{style:Object.assign({},Object(d.b)(1.5),{marginBottom:Object(d.a)(1.5),marginTop:0})},s.a.createElement(o.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},i)):s.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},s.a.createElement(o.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},i)),s.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(d.a)(24),padding:Object(d.a)(1.5)+" "+Object(d.a)(.75)}},s.a.createElement("header",null,e),s.a.createElement("main",null,r),s.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",s.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))},t}(s.a.Component);t.a=l},158:function(e,t,a){"use strict";var i=a(160),r=a(0),n=a.n(r),s=a(4),o=a.n(s),d=a(164),l=a.n(d);function c(e){var t=e.description,a=e.lang,r=e.meta,s=e.title,o=i.data.site,d=t||o.siteMetadata.description;return n.a.createElement(l.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:s},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:d}].concat(r)})}c.defaultProps={lang:"en",meta:[],description:""},c.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),title:o.a.string.isRequired},t.a=c},159:function(e,t,a){"use strict";a.r(t);a(34);var i=a(0),r=a.n(i),n=a(4),s=a.n(n),o=a(56),d=a(2),l=function(e){var t=e.location,a=d.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null};l.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=l},160:function(e){e.exports={data:{site:{siteMetadata:{title:"micwrote",description:"A starter blog demonstrating what Gatsby can do.",author:"Jeremy Cantu"}}}}},161:function(e,t,a){"use strict";a(166);var i=a(168),r=a(0),n=a.n(r),s=a(154),o=a(169),d=a.n(o),l=a(155);var c="2452627939";t.a=function(){return n.a.createElement(s.b,{query:c,render:function(e){var t=e.site.siteMetadata,a=t.author,i=t.social;return n.a.createElement("div",{style:{display:"flex",marginBottom:Object(l.a)(2.5)}},n.a.createElement(d.a,{fixed:e.avatar.childImageSharp.fixed,alt:a,style:{marginRight:Object(l.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),n.a.createElement("p",null,"Written by ",n.a.createElement("strong",null,a)," who lives and works in Austin, Texas, building useful things."," ",n.a.createElement("a",{href:"https://github.com/"+i.github},"You should follow him on GitHub")))},data:i})}},166:function(e,t,a){"use strict";a(167)("fixed",function(e){return function(){return e(this,"tt","","")}})},167:function(e,t,a){var i=a(11),r=a(18),n=a(19),s=/"/g,o=function(e,t,a,i){var r=String(n(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(i).replace(s,"&quot;")+'"'),o+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),i(i.P+i.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},168:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAeABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAMEAQX/xAAWAQEBAQAAAAAAAAAAAAAAAAABAAL/2gAMAwEAAhADEAAAAbXcxgIMKZlSVvHmb//EAB8QAAEEAQUBAAAAAAAAAAAAAAIBAwQSABAREyEjM//aAAgBAQABBQL4MrQheFsnD6VutTpeSitJE9c4Uyam4QRrp//EABURAQEAAAAAAAAAAAAAAAAAABAR/9oACAEDAQE/ASn/xAAXEQEBAQEAAAAAAAAAAAAAAAAAESES/9oACAECAQE/Abipjl//xAAjEAACAAQFBQAAAAAAAAAAAAAAAQIREiIDECExYTJBUXGR/9oACAEBAAY/AkobmXpDkU67F3gZ1siq35O3whXJi+5Zf//EAB4QAQADAAICAwAAAAAAAAAAAAEAESExYUGhUXGB/9oACAEBAAE/IdCaU7KN07TF4gGZLsG2r5me4e04hD96lowTO2VoFjV8oCYVgfnKwl09Uv7n/9oADAMBAAIAAwAAABD7Ek//xAAWEQEBAQAAAAAAAAAAAAAAAAABABH/2gAIAQMBAT8QDSyUpbf/xAAYEQADAQEAAAAAAAAAAAAAAAAAEXEBIf/aAAgBAgEBPxBuiBcoQ//EACEQAQADAAEEAgMAAAAAAAAAAAEAESFBMVFhcYGRobHB/9oACAEBAAE/EBCBCzIvV9QOiEVLv9lK6+MUPEwmaaUK2mu5FYwirmtuuLiwBnQvDtkfgyb+j9fEamEDrFdbBgfgGIovY8lTdFCPekwD0/Kf/9k=",width:50,height:50,src:"/static/b97ff7113d88aef56de0dce7f067567b/c15d6/profile-pic.jpg",srcSet:"/static/b97ff7113d88aef56de0dce7f067567b/c15d6/profile-pic.jpg 1x,\n/static/b97ff7113d88aef56de0dce7f067567b/43c20/profile-pic.jpg 1.5x,\n/static/b97ff7113d88aef56de0dce7f067567b/da97e/profile-pic.jpg 2x"}}},site:{siteMetadata:{author:"Jeremy Cantu",social:{github:"Jac21"}}}}}},169:function(e,t,a){"use strict";var i=a(8);t.__esModule=!0,t.default=void 0;var r,n=i(a(7)),s=i(a(35)),o=i(a(75)),d=i(a(76)),l=i(a(0)),c=i(a(4)),u=function(e){var t=(0,d.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},A=Object.create({}),f=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return A[a]||!1},p=new WeakMap;var g=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){if(p.has(e.target)){var t=p.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),p.delete(e.target),t())}})},{rootMargin:"200px"})),r);return a&&(a.observe(e),p.set(e,t)),function(){a.unobserve(e),p.delete(e)}},h=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",d=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"";return"<picture>"+i+"<img "+(e.loading?'loading="'+e.loading+'" ':"")+o+d+a+r+t+s+n+l+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},m=l.default.forwardRef(function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.nativeLazyLoadSupported,A=e.loading,f=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","nativeLazyLoadSupported","loading"]),p={};return u&&(p.loading=A),l.default.createElement("img",(0,d.default)({sizes:a,srcSet:i,src:r},f,{onLoad:s,onError:c,ref:t},p,{style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});m.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var b=function(e){function t(t){var a;a=e.call(this,t)||this;var i=!0,r=!1,n=t.fadeIn,o=!1,d=f(t);!d&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=!1,r=!0),"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype&&(i=!0,o=!0),"undefined"==typeof window&&(i=!1),t.critical&&(i=!0,r=!1);var c=!(t.critical&&!t.fadeIn);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,IOSupported:r,fadeIn:n,hasNoScript:c,seenBefore:d,nativeLazyLoadSupported:o},a.imageRef=l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:f(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.state.nativeLazyLoadSupported||this.state.IOSupported&&e&&(this.cleanUpListeners=g(e,function(){var e=f(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,A[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,n=void 0===r?{}:r,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,A=void 0===c?{}:c,f=e.placeholderClassName,p=e.fluid,g=e.fixed,b=e.backgroundColor,E=e.durationFadeIn,y=e.Tag,S=e.itemProp,v=(e.critical,u(this.props).loading);var w=this.state.nativeLazyLoadSupported,L=this.state.imgLoaded||!1===this.state.fadeIn,j=!0===this.state.fadeIn&&!this.state.imgCached,B=(0,d.default)({opacity:L?1:0,transition:j?"opacity "+E+"ms":"none"},o),R="boolean"==typeof b?"lightgray":b,I={transitionDelay:E+"ms"},x=(0,d.default)({opacity:this.state.imgLoaded?0:1},j&&I,o,A),C={title:t,alt:this.state.isVisible?"":a,style:x,className:f};if(p){var Q=p;return l.default.createElement(y,{className:(i||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(Q.srcSet)},l.default.createElement(y,{style:{width:"100%",paddingBottom:100/Q.aspectRatio+"%"}}),R&&l.default.createElement(y,{title:t,style:(0,d.default)({backgroundColor:R,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},j&&I)}),Q.base64&&l.default.createElement(m,(0,d.default)({src:Q.base64},C)),Q.tracedSVG&&l.default.createElement(m,(0,d.default)({src:Q.tracedSVG},C)),this.state.isVisible&&l.default.createElement("picture",null,Q.srcSetWebp&&l.default.createElement("source",{type:"image/webp",srcSet:Q.srcSetWebp,sizes:Q.sizes}),l.default.createElement(m,{alt:a,title:t,sizes:Q.sizes,src:Q.src,crossOrigin:this.props.crossOrigin,srcSet:Q.srcSet,style:B,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,nativeLazyLoadSupported:w,loading:v})),this.state.hasNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:h((0,d.default)({alt:a,title:t,loading:v},Q))}}))}if(g){var O=g,z=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:O.width,height:O.height},n);return"inherit"===n.display&&delete z.display,l.default.createElement(y,{className:(i||"")+" gatsby-image-wrapper",style:z,ref:this.handleRef,key:"fixed-"+JSON.stringify(O.srcSet)},R&&l.default.createElement(y,{title:t,style:(0,d.default)({backgroundColor:R,width:O.width,opacity:this.state.imgLoaded?0:1,height:O.height},j&&I)}),O.base64&&l.default.createElement(m,(0,d.default)({src:O.base64},C)),O.tracedSVG&&l.default.createElement(m,(0,d.default)({src:O.tracedSVG},C)),this.state.isVisible&&l.default.createElement("picture",null,O.srcSetWebp&&l.default.createElement("source",{type:"image/webp",srcSet:O.srcSetWebp,sizes:O.sizes}),l.default.createElement(m,{alt:a,title:t,width:O.width,height:O.height,sizes:O.sizes,src:O.src,crossOrigin:this.props.crossOrigin,srcSet:O.srcSet,style:B,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,nativeLazyLoadSupported:w,loading:v})),this.state.hasNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:h((0,d.default)({alt:a,title:t,loading:v},O))}}))}return null},t}(l.default.Component);b.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var E=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),y=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});b.propTypes={resolutions:E,sizes:y,fixed:E,fluid:y,fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"])};var S=b;t.default=S}}]);
//# sourceMappingURL=1-0ac4a859f666085da258.js.map