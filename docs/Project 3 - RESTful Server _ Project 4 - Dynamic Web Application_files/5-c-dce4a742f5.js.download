(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[5],{AXvA:function(t,e,n){"use strict"
n.d(e,"a",(function(){return r}))
var o=n("HMVb")
function r(t,e){var n=Object.keys(t)
if(1!==n.length)throw new Error("Expected exactly one key in query object.")
var r=n[0]
var i=["minHeight","maxHeight","minWidth","maxWidth"]
if(-1===i.indexOf(r))throw new Error("Invalid key `".concat(r,"` in query object. Valid keys should consist of one of the following: ")+"".concat(i.join(", ")," (case sensitive)"))
var s=t[r]
if("string"!==typeof s&&"number"!==typeof s)throw new Error("The value of the query object must be a string or number.")
if(!s)throw new Error("No value supplied for query object")
return"(".concat(a(r.toLowerCase()),": ").concat(Object(o["a"])(s,e),"px)")}function a(t){return t.slice(0,3)+"-"+t.slice(3)}},IIOE:function(t,e,n){"use strict"
n.d(e,"a",(function(){return m}))
n.d(e,"b",(function(){return j}))
var o=n("ODXe")
var r=n("1OyB")
var a=n("vuIU")
var i=n("QF4Q")
var s=n("gCYW")
var c=n("DUTp")
var l=n("PJr3")
var h=n("jqAw")
var f=n("gpCx")
var u=n("i/8D")
var p=n("k72m")
function m(t,e,n){if(!t||"offscreen"===n.placement){var o=!n.container&&t
return{placement:n.placement,style:{left:"-9999em",overflow:"hidden",position:"absolute",top:"0",display:o?"none":null}}}var r=new v(t,e,n)
return{placement:r.placement,style:r.style}}var d=function(){function t(e,n){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{top:0,left:0}
Object(r["a"])(this,t)
this.node=Object(i["a"])(e)
"string"===typeof n?this.placement=j(n):Array.isArray(n)?this.placement=n:this.placement=["bottom","center"]
this.rect=Object(s["a"])(this.node)
this._offset=O(o,this.size)}Object(a["a"])(t,[{key:"calculateOffset",value:function(t){var e={top:0,start:0,center:"50%",bottom:"100%",end:"100%",stretch:0}
var n=Object(o["a"])(t,2),r=n[0],a=n[1]
if(["start","end"].indexOf(r)>=0){var i=[a,r]
r=i[0]
a=i[1]}var s=0
var c=0
"undefined"!==typeof e[r]&&(s=e[r])
"undefined"!==typeof e[a]&&(c=e[a])
return b([O({top:s,left:c},this.size),g(this._offset,this.placement)])}},{key:"normalizeScrollTop",value:function(t){return Object(c["a"])(this.node).body===t?0:t.scrollTop}},{key:"width",get:function(){return this.rect.width}},{key:"height",get:function(){return this.rect.height}},{key:"size",get:function(){return{width:this.width,height:this.height}}},{key:"position",get:function(){return{top:this.rect.top,left:this.rect.left}}},{key:"hasVerticalPlacement",get:function(){return["top","bottom"].indexOf(this.placement[0])>=0}},{key:"hasHorizontalPlacement",get:function(){return["start","end"].indexOf(this.placement[0])>=0}},{key:"shouldStretchVertically",get:function(){return"stretch"===this.placement[1]&&this.hasVerticalPlacement}},{key:"shouldStretchHorizontally",get:function(){return"stretch"===this.placement[1]&&this.hasHorizontalPlacement}},{key:"mirroredPlacement",get:function(){return Object(p["b"])(this.placement)}},{key:"scrollParentsOffset",get:function(){var t=Object(l["a"])(this.node)
var e=0
var n=0
for(var o=1;o<t.length;o++){var r=t[o]
var a=t[o-1]
e+=this.normalizeScrollTop(r)-this.normalizeScrollTop(a)
n+=r.scrollLeft-a.scrollLeft}return{top:e,left:n}}},{key:"positionedParentsOffset",get:function(){var t=Object(h["a"])(this.node)
var e=Object(c["a"])(this.node)
var n=t.length>1?0:e.documentElement.offsetTop
var o=0
var r=0
for(var a=1;a<t.length;a++){var i=Object(s["a"])(t[a])
var l=Object(s["a"])(t[a-1])
n+=l.top-i.top
o+=l.left-i.left
if(t[a]===e.body){n+=i.top
o+=i.left}r+=this.normalizeScrollTop(t[a])}n+=r
return{top:n,left:o}}}])
return t}()
var v=function(){function t(e,n,o){Object(r["a"])(this,t)
this.options=o||{}
var a=this.options,s=a.container,h=a.constrain,u=a.placement,p=a.over
if(!e||"offscreen"===u)return
this.container=s||Object(c["a"])(e).body
this.element=new d(e,u,{top:this.options.offsetY,left:this.options.offsetX})
this.target=new d(n||this.container,p?this.element.placement:this.element.mirroredPlacement)
"window"===h?this.constrainTo(Object(f["a"])(e)):"scroll-parent"===h?this.constrainTo(Object(l["a"])(this.target.node)[0]):"parent"===h?this.constrainTo(this.container):"function"===typeof h?this.constrainTo(Object(i["a"])(h.call(null))):"object"===typeof h&&this.constrainTo(Object(i["a"])(h))}Object(a["a"])(t,[{key:"overflow",value:function(t){var e=Object(f["a"])(t)
var n=Object(s["a"])(t)
var o=Object(s["a"])(e)
var r=b([this.target.position,this.offset])
var a={top:this.element.positionedParentsOffset.top+this.element.scrollParentsOffset.top,left:this.element.positionedParentsOffset.left+this.element.scrollParentsOffset.left}
var i=r.left+a.left
var c=r.left+this.element.width+a.left
var l=r.top+a.top
var h=r.top+this.element.height+a.top
"bottom"===this.element.placement[0]?l-=this.element.height+this.target.height:"top"===this.element.placement[0]&&(h+=this.element.height+this.target.height)
"start"===this.element.placement[1]?i-=this.element.width-this.target.width:"end"===this.element.placement[1]&&(c+=this.element.width-this.target.width)
"top"===this.element.placement[1]?l-=this.element.height-this.target.height:"bottom"===this.element.placement[1]&&(h+=this.element.height-this.target.height)
"end"===this.element.placement[0]?i-=this.element.width+this.target.width:"start"===this.element.placement[0]&&(c+=this.element.width+this.target.width)
var u=t===e?n:{top:o.top+n.top,bottom:n.top+n.height,left:o.left+n.left,right:n.left+n.width}
return{top:l<u.top?u.top-l:0,bottom:h>u.bottom?h-u.bottom:0,left:i<u.left?u.left-i:0,right:c>u.right?c-u.right:0}}},{key:"constrainTo",value:function(t){if(!t)return
var e=this.overflow(t)
var n={top:e.top>0,bottom:e.bottom>0,left:e.left>0,right:e.right>0}
if(this.element.hasVerticalPlacement){if("stretch"!==this.element.placement[1])if(n.left&&n.right){this.element.placement[1]="center"
this.target.placement[1]="center"}else if(n.left){this.element.placement[1]="start"
this.target.placement[1]="start"}else if(n.right){this.element.placement[1]="end"
this.target.placement[1]="end"}if(n.top&&n.bottom){if(e.bottom<e.top){this.element.placement[0]="bottom"
this.target.placement[0]="top"}else if(e.bottom>e.top){this.element.placement[0]="top"
this.target.placement[0]="bottom"}}else if(n.top){this.element.placement[0]="bottom"
this.target.placement[0]="top"}else if(n.bottom){this.element.placement[0]="top"
this.target.placement[0]="bottom"}}else if(this.element.hasHorizontalPlacement){if(n.top&&n.bottom){this.element.placement[1]="center"
this.target.placement[1]="center"}else if(n.top){this.element.placement[1]="top"
this.target.placement[1]="top"}else if(n.bottom){this.element.placement[1]="bottom"
this.target.placement[1]="bottom"}if(n.left&&n.right){if(e.left>e.right){this.element.placement[0]="end"
this.target.placement[0]="start"}else if(e.left<e.right){this.element.placement[0]="start"
this.target.placement[0]="end"}}else if(n.left){this.element.placement[0]="end"
this.target.placement[0]="start"}else if(n.right){this.element.placement[0]="start"
this.target.placement[0]="end"}}}},{key:"offset",get:function(){var t=this.target.calculateOffset(this.element.placement),e=t.top,n=t.left
var o=b([this.element.calculateOffset(this.target.placement),this.element.scrollParentsOffset,this.element.positionedParentsOffset])
return{top:e-o.top,left:n-o.left}}},{key:"placement",get:function(){return w(this.element.placement)}},{key:"minWidth",get:function(){return this.element.shouldStretchVertically?this.target.width:null}},{key:"minHeight",get:function(){return this.element.shouldStretchHorizontally?this.target.height:null}},{key:"position",get:function(){var t=Object(f["a"])(this.target.node)
var e=b([this.target.position,this.offset]),n=e.left,o=e.top
if(u["a"]&&t.matchMedia){var r=t.matchMedia("only screen and (min-resolution: 1.3dppx)").matches||t.matchMedia("only screen and (-webkit-min-device-pixel-ratio: 1.3)").matches
if(!r){n=Math.round(n)
o=Math.round(o)}}return{left:n,top:o}}},{key:"style",get:function(){return{top:0,left:0,minWidth:this.minWidth,minHeight:this.minHeight,position:"absolute",transform:"translateX(".concat(this.position.left,"px) translateY(").concat(this.position.top,"px) translateZ(0)")}}}])
return t}()
function b(t){return t.reduce((function(t,e){return{top:t.top+e.top,left:t.left+e.left}}),{top:0,left:0})}function g(t,e){var n=t.top,o=t.left
"bottom"===e[0]&&(n=0-parseFloat(n,10))
"end"===e[0]&&(o=0-parseFloat(o,10))
return{top:n,left:o}}function O(t,e){var n=t.left,o=t.top
n="string"===typeof n&&-1!==n.indexOf("%")?parseFloat(n,10)/100*e.width:parseFloat(n,10)
o="string"===typeof o&&-1!==o.indexOf("%")?parseFloat(o,10)/100*e.height:parseFloat(o,10)
return{top:o,left:n}}function y(t){var e=Object(o["a"])(t,2),n=e[0],r=e[1]
if("center"===n||"stretch"===n){var a=[r,n]
n=a[0]
r=a[1]}return[n,r]}function j(t){var e=t.split(" ")
1===e.length&&(e=[t,"center"])
return y(e)}function w(t){return t.join(" ")}},PJr3:function(t,e,n){"use strict"
n.d(e,"a",(function(){return i}))
var o=n("QF4Q")
var r=n("i/8D")
var a=n("IPIv")
function i(t){var e=[]
if(!r["a"])return e
var n=Object(o["a"])(t)
if(n){var i=Object(a["a"])(n)||{}
var s=i.position
if("fixed"===s)return[n.ownerDocument]
var c=n
while(c&&1===c.nodeType&&(c=c.parentNode)){var l=void 0
try{l=Object(a["a"])(c)}catch(t){}if("undefined"===typeof l||null===l){e.push(c)
return e}var h=l,f=h.overflow,u=h.overflowX,p=h.overflowY;/(auto|scroll|overlay)/.test(f+p+u)&&("absolute"!==s||["relative","absolute","fixed"].indexOf(l.position)>=0)&&e.push(c)}e.push(n.ownerDocument.body)
n.ownerDocument!==document&&e.push(n.ownerDocument.defaultView)}return e}},UCAh:function(t,e,n){"use strict"
n.d(e,"a",(function(){return i}))
var o=n("17x9")
var r=n.n(o)
var a=n("AdN2")
var i={placement:r.a.oneOf(["top","end","bottom","start","top start","start top","start center","start bottom","bottom start","bottom center","bottom end","end bottom","end center","end top","top end","top center","center end","center start","top stretch","bottom stretch","end stretch","start stretch","offscreen"]),mountNode:r.a.oneOfType([a["a"],r.a.func]),constrain:r.a.oneOfType([a["a"],r.a.func,r.a.oneOf(["window","scroll-parent","parent","none"])])}},jqAw:function(t,e,n){"use strict"
n.d(e,"a",(function(){return s}))
var o=n("QF4Q")
var r=n("i/8D")
var a=n("IPIv")
var i=n("DUTp")
function s(t){var e=[]
if(!r["a"])return e
var n=Object(o["a"])(t)
if(n){var s=n
while((s=s.parentNode)&&s&&1===s.nodeType&&"BODY"!==s.tagName){var c=Object(a["a"])(s)
var l=c.getPropertyValue("-webkit-transform")||c.getPropertyValue("-moz-transform")||c.getPropertyValue("-ms-transform")||c.getPropertyValue("-o-transform")||c.getPropertyValue("transform")||"none"
var h="none"===l||"matrix(1, 0, 0, 1, 0, 0)"===l
"static"===c.position&&h||e.push(s)}e.push(Object(i["a"])(n).body)}return e}},k72m:function(t,e,n){"use strict"
n.d(e,"b",(function(){return a}))
n.d(e,"a",(function(){return i}))
var o=n("ODXe")
var r={center:"center",start:"end",end:"start",top:"bottom",bottom:"top",stretch:"stretch",offscreen:"offscreen"}
function a(t,e){return s(t,(function(t,e){return[r[t],e]}),e)}function i(t,e){return s(t,(function(t,e){return[t,e].map((function(t){return"start"===t||"end"===t?r[t]:t}))}),e)}function s(t,e,n){var r=Array.isArray(t)?t:t.split(" "),a=Object(o["a"])(r,2),i=a[0],s=a[1]
var c=e(i,s).filter((function(t){return t}))
return n?c.join(n):c}},tbLP:function(t,e,n){"use strict"
var o=n("rePB")
var r=n("VTBJ")
var a=n("1OyB")
var i=n("vuIU")
var s=n("md7G")
var c=n("foSv")
var l=n("Ji7U")
var h=n("q1tI")
var f=n.n(h)
var u=n("17x9")
var p=n.n(u)
var m=n("TSYQ")
var d=n.n(m)
var v=n("J2CL")
var b=n("AdN2")
var g=n("vwVh")
var O=n("sQ3t")
var y=n("II2N")
var j=n("E+IV")
var w=n("QF4Q")
var k=n("gCYW")
var P=n("ISHz")
function T(t,e){var n=Object(w["a"])(t)
var o=[]
var r=Object(k["a"])(n)||{}
var a=false
function i(){if(false===a){var t=Object(k["a"])(n)||{}
var s=t.top!==r.top||t.left!==r.left||t.right!==r.right||t.bottom!==r.bottom||t.width!==r.width||t.height!==r.height
s&&"function"===typeof e&&e(t)
r=t
o.push(Object(P["a"])(i))}}i()
return{remove:function(){a=true
o.forEach((function(t){return t.cancel()}))}}}var A=n("BTe1")
var x=n("IE60")
var _=n("0mOT")
var I=n("eGSd")
var N=n("oXx0")
var z=n("3Zzb")
var L=n("IIOE")
var V=n("UCAh")
var E=function(t){var e=t.stacking
return{zIndex:e.topmost}}
n.d(e,"a",(function(){return F}))
var C,D,S,H,X,Q
var Y={componentId:"eGKPI",template:function(t){return"\n\n.eGKPI_bGBk{box-sizing:border-box;z-index:".concat(t.zIndex||"inherit","}")},root:"eGKPI_bGBk"}
var F=(C=Object(N["a"])(),D=Object(g["a"])(),S=Object(v["i"])(E,Y),C(H=D(H=S(H=(Q=X=function(t){Object(l["a"])(e,t)
function e(t){var n
Object(a["a"])(this,e)
n=Object(s["a"])(this,Object(c["a"])(e).call(this,t))
n._timeouts=[]
n.handlePortalOpen=function(){n.position()
n.props.shouldTrackPosition&&n.startTracking()
n._timeouts.push(setTimeout((function(){n.state.positioned&&"function"===typeof n.props.onPositioned&&n.props.onPositioned({top:n.state.style.top,left:n.state.style.left,placement:n.state.placement})}),0))}
n.position=function(){n.setState(Object(r["a"])({positioned:true},n.calculatePosition(n.props)))}
n.state=Object(r["a"])({positioned:false},n.calculatePosition(t))
n.position=Object(I["a"])(n.position,0,{leading:false,trailing:true})
n._id=n.props.id||Object(A["a"])("Position")
return n}Object(i["a"])(e,[{key:"shouldComponentUpdate",value:function(t,e,n){return!Object(x["a"])(this.state,e)||!Object(_["a"])(this.props,t)||!Object(_["a"])(this.context,n)}},{key:"componentDidMount",value:function(){this.toggleLocatorAttributes(true)}},{key:"componentDidUpdate",value:function(t,e){this.position()
this.toggleLocatorAttributes(true)
this.props.shouldTrackPosition!==t.shouldTrackPosition&&(this.props.shouldTrackPosition?this.startTracking():this.stopTracking())
var n=this.state,o=n.style,r=n.placement
o&&e.style&&(r!==e.placement||o.top!==e.style.top||o.left!==e.style.left)&&this.props.onPositionChanged({top:o.top,left:o.left,placement:r})}},{key:"componentWillUnmount",value:function(){this.position.cancel()
this.stopTracking()
this._timeouts.forEach((function(t){return clearTimeout(t)}))
this.toggleLocatorAttributes(false)}},{key:"toggleLocatorAttributes",value:function(t){this.toggleLocatorAttribute(Object(w["a"])(this._content),e.contentLocatorAttribute,t)
this.toggleLocatorAttribute(Object(w["a"])(this._target),e.targetLocatorAttribute,t)}},{key:"toggleLocatorAttribute",value:function(t,e,n){if(t&&t.hasAttribute){n&&!t.hasAttribute(e)&&t.setAttribute(e,this._id)
!n&&t.hasAttribute(e)&&t.removeAttribute(e)}}},{key:"calculatePosition",value:function(t){return Object(L["a"])(this._content,this._target,{placement:t.placement,offsetX:t.offsetX,offsetY:t.offsetY,constrain:t.constrain,container:t.mountNode,over:t.shouldPositionOverTarget})}},{key:"startTracking",value:function(){this._listener=this._listener||T(this._target,this.position)}},{key:"stopTracking",value:function(){if(this._listener){this._listener.remove()
this._listener=null}}},{key:"renderContent",value:function(){var t=this
var n=Object(O["a"])(this.props.children)
if(n){var a
n=Object(y["a"])(n,Object(o["a"])({ref:function(e){t._content=e},style:Object(r["a"])({},n.props.style,{},this.state.style),className:d()((a={},Object(o["a"])(a,Y.root,true),Object(o["a"])(a,n.props.className,n.props.className),a))},e.contentLocatorAttribute,this._id))
n=f.a.createElement(z["a"],{open:true,onOpen:this.handlePortalOpen,mountNode:this.props.mountNode,insertAt:this.props.insertAt},n)}return n}},{key:"renderTarget",value:function(){var t=this
var n=Object(j["a"])(this.props.renderTarget)
if(n)return Object(y["a"])(n,Object(o["a"])({ref:function(e){t._target=e}},e.targetLocatorAttribute,this._id))
if(!this.props.target)return null
this._target=Object(j["a"])(this.props.target)}},{key:"render",value:function(){var t=Object(o["a"])({},e.locatorAttribute,this._id)
return f.a.createElement("span",t,this.renderTarget(),this.renderContent())}}])
e.displayName="Position"
return e}(h["Component"]),X.locatorAttribute="data-position",X.targetLocatorAttribute="data-position-target",X.contentLocatorAttribute="data-position-content",X.propTypes={renderTarget:p.a.oneOfType([p.a.node,p.a.func]),target:p.a.oneOfType([b["a"],p.a.func]),placement:V["a"].placement,mountNode:V["a"].mountNode,insertAt:p.a.oneOf(["bottom","top"]),constrain:V["a"].constrain,offsetX:p.a.oneOfType([p.a.string,p.a.number]),offsetY:p.a.oneOfType([p.a.string,p.a.number]),id:p.a.string,shouldTrackPosition:p.a.bool,shouldPositionOverTarget:p.a.bool,onPositionChanged:p.a.func,onPositioned:p.a.func,children:p.a.node},X.defaultProps={renderTarget:void 0,target:void 0,placement:"bottom center",mountNode:null,insertAt:"bottom",constrain:"window",offsetX:0,offsetY:0,id:void 0,shouldTrackPosition:true,shouldPositionOverTarget:false,onPositioned:function(t){},onPositionChanged:function(t){},children:null},Q))||H)||H)||H)},u9uf:function(t,e,n){"use strict"
n.d(e,"a",(function(){return s}))
var o=n("17x9")
var r=n.n(o)
var a=n("AdN2")
var i=n("AXvA")
var s={validQuery:function(t,e,n){try{Object(i["a"])(t[e])}catch(t){return new Error("Invalid query prop supplied to `".concat(n,"`. ").concat(t.message))}},placement:r.a.oneOf(["top","end","bottom","start","top start","start top","start center","start bottom","bottom start","bottom center","bottom end","end bottom","end center","end top","top end","top center","center end","center start","top stretch","bottom stretch","end stretch","start stretch","offscreen"]),mountNode:r.a.oneOfType([a["a"],r.a.func]),constrain:r.a.oneOfType([a["a"],r.a.func,r.a.oneOf(["window","scroll-parent","parent","none"])])}}}])

//# sourceMappingURL=5-c-dce4a742f5.js.map