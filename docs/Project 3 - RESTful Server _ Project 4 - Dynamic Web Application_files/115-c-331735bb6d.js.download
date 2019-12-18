(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[115],{"+Gzo":function(e,t,n){"use strict"
n.d(t,"a",(function(){return p}))
var a=n("VTBJ")
var i=n("1OyB")
var r=n("vuIU")
var o=n("md7G")
var c=n("foSv")
var s=n("Ji7U")
var l=n("q1tI")
var d=n.n(l)
var f=n("hPGw")
var u=d.a.createElement("path",{d:"M1706.235 1807.059H350.941V112.94h903.53v451.765h451.764v1242.353zm-338.823-1670.74l315.443 315.447h-315.443V136.32zm402.182 242.487L1440.372 49.58C1408.296 17.62 1365.717 0 1320.542 0H238v1920h1581.175V498.635c0-45.176-17.618-87.755-49.58-119.83zM576.823 1242.353h790.589v-112.94H576.823v112.94zm0-451.765h903.53V677.647h-903.53v112.941zm0 677.647h451.765v-112.941H576.823v112.941zm0-451.764h677.648V903.53H576.823v112.941zm0-451.765h451.765V451.765H576.823v112.941z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var p=function(e){Object(s["a"])(t,e)
function t(){Object(i["a"])(this,t)
return Object(o["a"])(this,Object(c["a"])(t).apply(this,arguments))}Object(r["a"])(t,[{key:"render",value:function(){return d.a.createElement(f["a"],Object.assign({},this.props,{name:"IconDocument",viewBox:"0 0 1920 1920",bidirectional:true}),u)}}])
t.displayName="IconDocumentLine"
return t}(l["Component"])
p.glyphName="document"
p.variant="Line"
p.propTypes=Object(a["a"])({},f["a"].propTypes)},"+Pml":function(e,t,n){"use strict"
n.d(t,"a",(function(){return p}))
var a=n("VTBJ")
var i=n("1OyB")
var r=n("vuIU")
var o=n("md7G")
var c=n("foSv")
var s=n("Ji7U")
var l=n("q1tI")
var d=n.n(l)
var f=n("hPGw")
var u=d.a.createElement("path",{d:"M1807.059 1637.706c0 31.172-25.412 56.47-56.47 56.47H169.411c-31.06 0-56.47-25.298-56.47-56.47V225.94h590.907L854.4 451.824H225.882v112.94H1807.06v1072.942zM990.269 451.824L764.385 113H0v1524.706c0 93.402 76.01 169.412 169.412 169.412h1581.176c93.403 0 169.412-76.01 169.412-169.412V451.824H990.268z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var p=function(e){Object(s["a"])(t,e)
function t(){Object(i["a"])(this,t)
return Object(o["a"])(this,Object(c["a"])(t).apply(this,arguments))}Object(r["a"])(t,[{key:"render",value:function(){return d.a.createElement(f["a"],Object.assign({},this.props,{name:"IconFolder",viewBox:"0 0 1920 1920",bidirectional:true}),u)}}])
t.displayName="IconFolderLine"
return t}(l["Component"])
p.glyphName="folder"
p.variant="Line"
p.propTypes=Object(a["a"])({},f["a"].propTypes)},"2LKJ":function(e,t,n){e.exports=m
m.Minimatch=g
var a={sep:"/"}
try{a=n("33yf")}catch(e){}var i=m.GLOBSTAR=g.GLOBSTAR={}
var r=n("TuBq")
var o={"!":{open:"(?:(?!(?:",close:"))[^/]*?)"},"?":{open:"(?:",close:")?"},"+":{open:"(?:",close:")+"},"*":{open:"(?:",close:")*"},"@":{open:"(?:",close:")"}}
var c="[^/]"
var s=c+"*?"
var l="(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?"
var d="(?:(?!(?:\\/|^)\\.).)*?"
var f=u("().*{}+?[]^$\\!")
function u(e){return e.split("").reduce((function(e,t){e[t]=true
return e}),{})}var p=/\/+/
m.filter=h
function h(e,t){t=t||{}
return function(n,a,i){return m(n,e,t)}}function b(e,t){e=e||{}
t=t||{}
var n={}
Object.keys(t).forEach((function(e){n[e]=t[e]}))
Object.keys(e).forEach((function(t){n[t]=e[t]}))
return n}m.defaults=function(e){if(!e||!Object.keys(e).length)return m
var t=m
var n=function(n,a,i){return t.minimatch(n,a,b(e,i))}
n.Minimatch=function(n,a){return new t.Minimatch(n,b(e,a))}
return n}
g.defaults=function(e){if(!e||!Object.keys(e).length)return g
return m.defaults(e).Minimatch}
function m(e,t,n){if("string"!==typeof t)throw new TypeError("glob pattern string required")
n||(n={})
if(!n.nocomment&&"#"===t.charAt(0))return false
if(""===t.trim())return""===e
return new g(t,n).match(e)}function g(e,t){if(!(this instanceof g))return new g(e,t)
if("string"!==typeof e)throw new TypeError("glob pattern string required")
t||(t={})
e=e.trim()
"/"!==a.sep&&(e=e.split(a.sep).join("/"))
this.options=t
this.set=[]
this.pattern=e
this.regexp=null
this.negate=false
this.comment=false
this.empty=false
this.make()}g.prototype.debug=function(){}
g.prototype.make=v
function v(){if(this._made)return
var e=this.pattern
var t=this.options
if(!t.nocomment&&"#"===e.charAt(0)){this.comment=true
return}if(!e){this.empty=true
return}this.parseNegate()
var n=this.globSet=this.braceExpand()
t.debug&&(this.debug=console.error)
this.debug(this.pattern,n)
n=this.globParts=n.map((function(e){return e.split(p)}))
this.debug(this.pattern,n)
n=n.map((function(e,t,n){return e.map(this.parse,this)}),this)
this.debug(this.pattern,n)
n=n.filter((function(e){return-1===e.indexOf(false)}))
this.debug(this.pattern,n)
this.set=n}g.prototype.parseNegate=O
function O(){var e=this.pattern
var t=false
var n=this.options
var a=0
if(n.nonegate)return
for(var i=0,r=e.length;i<r&&"!"===e.charAt(i);i++){t=!t
a++}a&&(this.pattern=e.substr(a))
this.negate=t}m.braceExpand=function(e,t){return _(e,t)}
g.prototype.braceExpand=_
function _(e,t){t||(t=this instanceof g?this.options:{})
e="undefined"===typeof e?this.pattern:e
if("undefined"===typeof e)throw new TypeError("undefined pattern")
if(t.nobrace||!e.match(/\{.*\}/))return[e]
return r(e)}g.prototype.parse=T
var y={}
function T(e,t){if(e.length>65536)throw new TypeError("pattern is too long")
var n=this.options
if(!n.noglobstar&&"**"===e)return i
if(""===e)return""
var a=""
var r=!!n.nocase
var l=false
var d=[]
var u=[]
var p
var h=false
var b=-1
var m=-1
var g="."===e.charAt(0)?"":n.dot?"(?!(?:^|\\/)\\.{1,2}(?:$|\\/))":"(?!\\.)"
var v=this
function O(){if(p){switch(p){case"*":a+=s
r=true
break
case"?":a+=c
r=true
break
default:a+="\\"+p}v.debug("clearStateChar %j %j",p,a)
p=false}}for(var _,T=0,B=e.length;T<B&&(_=e.charAt(T));T++){this.debug("%s\t%s %s %j",e,T,a,_)
if(l&&f[_]){a+="\\"+_
l=false
continue}switch(_){case"/":return false
case"\\":O()
l=true
continue
case"?":case"*":case"+":case"@":case"!":this.debug("%s\t%s %s %j <-- stateChar",e,T,a,_)
if(h){this.debug("  in class")
"!"===_&&T===m+1&&(_="^")
a+=_
continue}v.debug("call clearStateChar %j",p)
O()
p=_
n.noext&&O()
continue
case"(":if(h){a+="("
continue}if(!p){a+="\\("
continue}d.push({type:p,start:T-1,reStart:a.length,open:o[p].open,close:o[p].close})
a+="!"===p?"(?:(?!(?:":"(?:"
this.debug("plType %j %j",p,a)
p=false
continue
case")":if(h||!d.length){a+="\\)"
continue}O()
r=true
var C=d.pop()
a+=C.close
"!"===C.type&&u.push(C)
C.reEnd=a.length
continue
case"|":if(h||!d.length||l){a+="\\|"
l=false
continue}O()
a+="|"
continue
case"[":O()
if(h){a+="\\"+_
continue}h=true
m=T
b=a.length
a+=_
continue
case"]":if(T===m+1||!h){a+="\\"+_
l=false
continue}if(h){var w=e.substring(m+1,T)
try{RegExp("["+w+"]")}catch(e){var I=this.parse(w,y)
a=a.substr(0,b)+"\\["+I[0]+"\\]"
r=r||I[1]
h=false
continue}}r=true
h=false
a+=_
continue
default:O()
l?l=false:!f[_]||"^"===_&&h||(a+="\\")
a+=_}}if(h){w=e.substr(m+1)
I=this.parse(w,y)
a=a.substr(0,b)+"\\["+I[0]
r=r||I[1]}for(C=d.pop();C;C=d.pop()){var S=a.slice(C.reStart+C.open.length)
this.debug("setting tail",a,C)
S=S.replace(/((?:\\{2}){0,64})(\\?)\|/g,(function(e,t,n){n||(n="\\")
return t+t+n+"|"}))
this.debug("tail=%j\n   %s",S,S,C,a)
var j="*"===C.type?s:"?"===C.type?c:"\\"+C.type
r=true
a=a.slice(0,C.reStart)+j+"\\("+S}O()
l&&(a+="\\\\")
var x=false
switch(a.charAt(0)){case".":case"[":case"(":x=true}for(var M=u.length-1;M>-1;M--){var z=u[M]
var E=a.slice(0,z.reStart)
var W=a.slice(z.reStart,z.reEnd-8)
var F=a.slice(z.reEnd-8,z.reEnd)
var X=a.slice(z.reEnd)
F+=X
var L=E.split("(").length-1
var R=X
for(T=0;T<L;T++)R=R.replace(/\)[+*?]?/,"")
X=R
var D=""
""===X&&t!==y&&(D="$")
var N=E+W+X+D+F
a=N}""!==a&&r&&(a="(?=.)"+a)
x&&(a=g+a)
if(t===y)return[a,r]
if(!r)return k(e)
var H=n.nocase?"i":""
try{var A=new RegExp("^"+a+"$",H)}catch(e){return new RegExp("$.")}A._glob=e
A._src=a
return A}m.makeRe=function(e,t){return new g(e,t||{}).makeRe()}
g.prototype.makeRe=B
function B(){if(this.regexp||false===this.regexp)return this.regexp
var e=this.set
if(!e.length){this.regexp=false
return this.regexp}var t=this.options
var n=t.noglobstar?s:t.dot?l:d
var a=t.nocase?"i":""
var r=e.map((function(e){return e.map((function(e){return e===i?n:"string"===typeof e?w(e):e._src})).join("\\/")})).join("|")
r="^(?:"+r+")$"
this.negate&&(r="^(?!"+r+").*$")
try{this.regexp=new RegExp(r,a)}catch(e){this.regexp=false}return this.regexp}m.match=function(e,t,n){n=n||{}
var a=new g(t,n)
e=e.filter((function(e){return a.match(e)}))
a.options.nonull&&!e.length&&e.push(t)
return e}
g.prototype.match=C
function C(e,t){this.debug("match",e,this.pattern)
if(this.comment)return false
if(this.empty)return""===e
if("/"===e&&t)return true
var n=this.options
"/"!==a.sep&&(e=e.split(a.sep).join("/"))
e=e.split(p)
this.debug(this.pattern,"split",e)
var i=this.set
this.debug(this.pattern,"set",i)
var r
var o
for(o=e.length-1;o>=0;o--){r=e[o]
if(r)break}for(o=0;o<i.length;o++){var c=i[o]
var s=e
n.matchBase&&1===c.length&&(s=[r])
var l=this.matchOne(s,c,t)
if(l){if(n.flipNegate)return true
return!this.negate}}if(n.flipNegate)return false
return this.negate}g.prototype.matchOne=function(e,t,n){var a=this.options
this.debug("matchOne",{this:this,file:e,pattern:t})
this.debug("matchOne",e.length,t.length)
for(var r=0,o=0,c=e.length,s=t.length;r<c&&o<s;r++,o++){this.debug("matchOne loop")
var l=t[o]
var d=e[r]
this.debug(t,l,d)
if(false===l)return false
if(l===i){this.debug("GLOBSTAR",[t,l,d])
var f=r
var u=o+1
if(u===s){this.debug("** at the end")
for(;r<c;r++)if("."===e[r]||".."===e[r]||!a.dot&&"."===e[r].charAt(0))return false
return true}while(f<c){var p=e[f]
this.debug("\nglobstar while",e,f,t,u,p)
if(this.matchOne(e.slice(f),t.slice(u),n)){this.debug("globstar found match!",f,c,p)
return true}if("."===p||".."===p||!a.dot&&"."===p.charAt(0)){this.debug("dot detected!",e,f,t,u)
break}this.debug("globstar swallow a segment, and continue")
f++}if(n){this.debug("\n>>> no match, partial?",e,f,t,u)
if(f===c)return true}return false}var h
if("string"===typeof l){h=a.nocase?d.toLowerCase()===l.toLowerCase():d===l
this.debug("string match",l,d,h)}else{h=d.match(l)
this.debug("pattern match",l,d,h)}if(!h)return false}if(r===c&&o===s)return true
if(r===c)return n
if(o===s){var b=r===c-1&&""===e[r]
return b}throw new Error("wtf?")}
function k(e){return e.replace(/\\(.)/g,"$1")}function w(e){return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")}},"33yf":function(e,t,n){(function(e){function n(e,t){var n=0
for(var a=e.length-1;a>=0;a--){var i=e[a]
if("."===i)e.splice(a,1)
else if(".."===i){e.splice(a,1)
n++}else if(n){e.splice(a,1)
n--}}if(t)for(;n--;n)e.unshift("..")
return e}t.resolve=function(){var t="",a=false
for(var r=arguments.length-1;r>=-1&&!a;r--){var o=r>=0?arguments[r]:e.cwd()
if("string"!==typeof o)throw new TypeError("Arguments to path.resolve must be strings")
if(!o)continue
t=o+"/"+t
a="/"===o.charAt(0)}t=n(i(t.split("/"),(function(e){return!!e})),!a).join("/")
return(a?"/":"")+t||"."}
t.normalize=function(e){var a=t.isAbsolute(e),o="/"===r(e,-1)
e=n(i(e.split("/"),(function(e){return!!e})),!a).join("/")
e||a||(e=".")
e&&o&&(e+="/")
return(a?"/":"")+e}
t.isAbsolute=function(e){return"/"===e.charAt(0)}
t.join=function(){var e=Array.prototype.slice.call(arguments,0)
return t.normalize(i(e,(function(e,t){if("string"!==typeof e)throw new TypeError("Arguments to path.join must be strings")
return e})).join("/"))}
t.relative=function(e,n){e=t.resolve(e).substr(1)
n=t.resolve(n).substr(1)
function a(e){var t=0
for(;t<e.length;t++)if(""!==e[t])break
var n=e.length-1
for(;n>=0;n--)if(""!==e[n])break
if(t>n)return[]
return e.slice(t,n-t+1)}var i=a(e.split("/"))
var r=a(n.split("/"))
var o=Math.min(i.length,r.length)
var c=o
for(var s=0;s<o;s++)if(i[s]!==r[s]){c=s
break}var l=[]
for(s=c;s<i.length;s++)l.push("..")
l=l.concat(r.slice(c))
return l.join("/")}
t.sep="/"
t.delimiter=":"
t.dirname=function(e){"string"!==typeof e&&(e+="")
if(0===e.length)return"."
var t=e.charCodeAt(0)
var n=47===t
var a=-1
var i=true
for(var r=e.length-1;r>=1;--r){t=e.charCodeAt(r)
if(47===t){if(!i){a=r
break}}else i=false}if(-1===a)return n?"/":"."
if(n&&1===a)return"/"
return e.slice(0,a)}
function a(e){"string"!==typeof e&&(e+="")
var t=0
var n=-1
var a=true
var i
for(i=e.length-1;i>=0;--i)if(47===e.charCodeAt(i)){if(!a){t=i+1
break}}else if(-1===n){a=false
n=i+1}if(-1===n)return""
return e.slice(t,n)}t.basename=function(e,t){var n=a(e)
t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length))
return n}
t.extname=function(e){"string"!==typeof e&&(e+="")
var t=-1
var n=0
var a=-1
var i=true
var r=0
for(var o=e.length-1;o>=0;--o){var c=e.charCodeAt(o)
if(47===c){if(!i){n=o+1
break}continue}if(-1===a){i=false
a=o+1}46===c?-1===t?t=o:1!==r&&(r=1):-1!==t&&(r=-1)}if(-1===t||-1===a||0===r||1===r&&t===a-1&&t===n+1)return""
return e.slice(t,a)}
function i(e,t){if(e.filter)return e.filter(t)
var n=[]
for(var a=0;a<e.length;a++)t(e[a],a,e)&&n.push(e[a])
return n}var r="b"==="ab".substr(-1)?function(e,t,n){return e.substr(t,n)}:function(e,t,n){t<0&&(t=e.length+t)
return e.substr(t,n)}}).call(this,n("8oxB"))},"55KM":function(e,t,n){"use strict"
var a=n("VTBJ")
var i=n("rePB")
var r=n("1OyB")
var o=n("vuIU")
var c=n("md7G")
var s=n("foSv")
var l=n("Ji7U")
var d=n("q1tI")
var f=n.n(d)
var u=n("17x9")
var p=n.n(u)
var h=n("TSYQ")
var b=n.n(h)
var m=n("n12J")
var g=n("J2CL")
var v=n("nAyT")
var O=n("jtGx")
var _=n("i/8D")
function y(){return!!_["a"]&&"objectFit"in document.documentElement.style!==false}var T=n("oXx0")
function B(){return{effectTransitionDuration:"1s",imageBlurAmount:"0.25em"}}n.d(t,"a",(function(){return M}))
var C,k,w,I,S,j
var x={componentId:"IIMRk",template:function(e){return"\n\n.IIMRk_EtBB{bottom:auto;float:none;left:auto;line-height:normal;margin:0;max-height:none;max-width:100%;min-height:0;min-width:0;padding:0;position:static;right:auto;top:auto;transform:none}\n\n[dir=ltr] .IIMRk_EtBB,[dir=rtl] .IIMRk_EtBB{float:none}\n\n.IIMRk_fJwG{display:inline-block;vertical-align:middle}\n\n.IIMRk_cYkL{height:100%;left:0;position:absolute;top:0;transition:all ".concat(e.overlayTransitionDuration||"inherit",";width:100%}\n\n.IIMRk_fqss{display:block}\n\n.IIMRk_dIXK,.IIMRk_cYkL{transition:all ").concat(e.effectTransitionDuration||"inherit","}\n\n.IIMRk_fZcw,.IIMRk_dETD,.IIMRk_bPct,.IIMRk_eJVL{height:100%;width:100%}\n\n.IIMRk_eJVL{object-fit:cover}\n\n.IIMRk_fZcw{object-fit:contain}\n\n.IIMRk_fZcw.IIMRk_fqss{height:auto;max-height:100%;max-width:100%;width:auto}\n\n.IIMRk_baUy{height:inherit}\n\n.IIMRk_dETD{background-position:50%;background-repeat:no-repeat}\n\n.IIMRk_dETD.IIMRk_baUy{background-size:contain}\n\n.IIMRk_dETD.IIMRk_bPct{background-size:cover}\n\n.IIMRk_rUUn{overflow:hidden;position:relative}")},image:"IIMRk_EtBB",overlayLayout:"IIMRk_fJwG",overlay:"IIMRk_cYkL","has-overlay":"IIMRk_fqss","has-filter":"IIMRk_dIXK",contain:"IIMRk_fZcw","container--has-background":"IIMRk_dETD","container--has-cover":"IIMRk_bPct",cover:"IIMRk_eJVL","container--has-contain":"IIMRk_baUy","container--has-overlay":"IIMRk_rUUn"}
var M=(C=Object(T["a"])(),k=Object(v["a"])("7.0.0",{cover:"constrain"}),w=Object(g["i"])(B,x),C(I=k(I=w(I=(j=S=function(e){Object(l["a"])(t,e)
function t(){Object(r["a"])(this,t)
return Object(c["a"])(this,Object(s["a"])(t).apply(this,arguments))}Object(o["a"])(t,[{key:"renderFilter",value:function(){var e="blur(".concat(this.theme.imageBlurAmount,")")
var t="grayscale(1)"
return this.props.grayscale&&this.props.blur?"".concat(e," ").concat(t):this.props.grayscale?t:this.props.blur?e:null}},{key:"render",value:function(){var e
var n=this.props,r=n.src,o=n.alt,c=n.margin,s=n.inline,l=n.overlay,d=n.grayscale,u=n.blur,p=n.cover,h=n.constrain,g=n.width,v=n.height,_=n.elementRef
var y={alt:o||""}
var T={className:b()((e={},Object(i["a"])(e,x.image,true),Object(i["a"])(e,x["has-overlay"],l),Object(i["a"])(e,x["has-filter"],u||d),Object(i["a"])(e,x.cover,this.supportsObjectFit&&(p||"cover"===h)),Object(i["a"])(e,x.contain,this.supportsObjectFit&&"contain"===h),e)),style:{filter:u||d?this.renderFilter():"none"},src:r}
var B=Object(a["a"])({},m["a"].omitViewProps(Object(O["a"])(this.props,t.propTypes),t),{width:g,height:v,margin:c,display:s?"inline-block":"block",elementRef:_})
var C=!this.supportsObjectFit&&(p||h)
if(l||C){var k
var w=C?Object(a["a"])({},y,{},B):B
return f.a.createElement(m["a"],Object.assign({},w,{as:"span",className:b()((k={},Object(i["a"])(k,x["container--has-overlay"],l),Object(i["a"])(k,x["container--has-cover"],p||"cover"===h),Object(i["a"])(k,x["container--has-contain"],"contain"===h),Object(i["a"])(k,x["container--has-background"],C),k)),style:{backgroundImage:C?"url(".concat(r,")"):void 0},__dangerouslyIgnoreExperimentalWarnings:true}),!C&&f.a.createElement("img",Object.assign({},T,y)),l&&f.a.createElement("span",{className:x.overlay,style:{backgroundColor:l.color,opacity:.1*l.opacity,mixBlendMode:l.blend?l.blend:null}}))}return f.a.createElement(m["a"],Object.assign({},B,T,y,{as:"img",__dangerouslyIgnoreExperimentalWarnings:true}))}},{key:"supportsObjectFit",get:function(){return y()}}])
t.displayName="Img"
return t}(d["Component"]),S.propTypes={src:p.a.string.isRequired,alt:p.a.string,inline:p.a.bool,margin:g["c"].spacing,overlay:p.a.shape({color:p.a.string.isRequired,opacity:p.a.oneOf([0,1,2,3,4,5,6,7,8,9,10]).isRequired,blend:p.a.oneOf(["normal","multiply","screen","overlay","color-burn"])}),grayscale:p.a.bool,blur:p.a.bool,cover:p.a.bool,constrain:p.a.oneOf(["cover","contain"]),elementRef:p.a.func,height:p.a.oneOfType([p.a.string,p.a.number]),width:p.a.oneOfType([p.a.string,p.a.number])},S.defaultProps={margin:void 0,overlay:void 0,constrain:void 0,elementRef:void 0,height:void 0,width:void 0,alt:"",inline:true,grayscale:false,blur:false},j))||I)||I)||I)},IqBw:function(e,t,n){"use strict"
n.d(t,"a",(function(){return p}))
var a=n("VTBJ")
var i=n("1OyB")
var r=n("vuIU")
var o=n("md7G")
var c=n("foSv")
var s=n("Ji7U")
var l=n("q1tI")
var d=n.n(l)
var f=n("hPGw")
var u=d.a.createElement("path",{d:"M1493.602 1468.294H225.837C523.211 387.9 755.305 1443.9 983.898 1115.918c284.612-408.283 590.57-405.685 710.174 352.376h-200.47zm-816-1129.412c124.8 0 225.882 101.196 225.882 225.883 0 124.687-101.082 225.882-225.882 225.882-124.687 0-225.882-101.195-225.882-225.882 0-124.687 101.195-225.883 225.882-225.883zM-.045 1807.118h1920V113h-1920v1694.118z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var p=function(e){Object(s["a"])(t,e)
function t(){Object(i["a"])(this,t)
return Object(o["a"])(this,Object(c["a"])(t).apply(this,arguments))}Object(r["a"])(t,[{key:"render",value:function(){return d.a.createElement(f["a"],Object.assign({},this.props,{name:"IconImage",viewBox:"0 0 1920 1920"}),u)}}])
t.displayName="IconImageSolid"
return t}(l["Component"])
p.glyphName="image"
p.variant="Solid"
p.propTypes=Object(a["a"])({},f["a"].propTypes)},"Op/J":function(e,t,n){"use strict"
var a=n("An8g")
var i=n("VTBJ")
var r=n("M1Vv")
var o=n("q1tI")
var c=n.n(o)
var s=n("LvDl")
var l=n.n(s)
var d=n("ouhR")
var f=n.n(d)
var u=n("x1Tw")
var p=n("2LKJ")
var h=n.n(p)
var b=n("1OyB")
var m=n("vuIU")
var g=n("md7G")
var v=n("foSv")
var O=n("Ji7U")
var _=n("17x9")
var y=n.n(_)
var T=n("3zPy")
var B=n.n(T)
var C=n("+Pml")
var k=n("+Gzo")
var w=n("J2CL")
var I=n("jtGx")
var S=n("cClk")
var j=n("oXx0")
var x=n("rePB")
var M=n("TSYQ")
var z=n.n(M)
var E=n("8S//")
var W=n("M4Ft")
var F=n("55KM")
function X(e){var t=e.colors,n=e.spacing,a=e.typography,i=e.borders
return{hoverBackgroundColor:t.backgroundBrand,hoverTextColor:t.textLightest,focusOutlineWidth:i.widthMedium,focusOutlineColor:t.borderBrand,focusOutlineStyle:i.style,iconColor:t.textDarkest,iconsMarginRight:n.xSmall,descriptorMarginTop:n.xxxSmall,descriptorTextColor:t.textDarkest,descriptorFontSizeSmall:a.fontSizeXSmall,descriptorFontSizeMedium:a.fontSizeXSmall,descriptorFontSizeLarge:a.fontSizeSmall,nameTextColor:t.textBrand,nameFontSizeSmall:a.fontSizeXSmall,nameFontSizeMedium:a.fontSizeSmall,nameFontSizeLarge:a.fontSizeMedium,baseSpacingSmall:n.xSmall,baseSpacingMedium:n.small,baseSpacingLarge:"1rem",borderWidth:i.widthSmall,borderRadius:i.radiusMedium,borderColor:t.borderDark,textLineHeight:a.lineHeightCondensed,selectedTextColor:t.textLightest,selectedBackgroundColor:t.backgroundDark,selectedOutlineWidth:i.widthLarge}}X["canvas"]=function(e){return{iconColor:e["ic-brand-font-color-dark"],hoverBackgroundColor:e["ic-brand-primary"],focusOutlineColor:e["ic-brand-primary"],nameTextColor:e["ic-brand-primary"],descriptorTextColor:e["ic-brand-font-color-dark"]}}
var L,R,D,N,H
var A={componentId:"bfBOT",template:function(e){return"\n\n@keyframes bfBOT_EwaR{50%{opacity:0.5;transform:translate3d(2%,0,0)}to{opacity:1;transform:translateZ(0)}}\n\n.bfBOT_bGBk{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;animation-delay:0.2s;animation-duration:0.2s;animation-fill-mode:forwards;animation-name:bfBOT_EwaR;animation-timing-function:ease-out;background-color:transparent;border:none;border-radius:".concat(e.borderRadius||"inherit",";box-sizing:border-box;cursor:pointer;display:block;font-family:inherit;margin:0;opacity:0.01;outline:0;position:relative;text-align:start;transform:translate3d(-2%,0,0);transform-origin:left center;user-select:none;width:100%;z-index:1}\n\n[dir=ltr] .bfBOT_bGBk{text-align:left}\n\n[dir=rtl] .bfBOT_bGBk{text-align:right}\n\n.bfBOT_bGBk:not(.bfBOT_eoSs):after{border:").concat(e.focusOutlineWidth||"inherit"," ").concat(e.focusOutlineStyle||"inherit"," ").concat(e.focusOutlineColor||"inherit",";border-radius:calc(").concat(e.borderRadius||"inherit",'*1.5);bottom:-0.25rem;box-sizing:border-box;content:"";display:block;left:-0.25rem;opacity:0;pointer-events:none;position:absolute;right:-0.25rem;top:-0.25rem;transform:scale(0.95);transition:all 0.2s}\n\n.bfBOT_bGBk:hover{background-color:').concat(e.hoverBackgroundColor||"inherit","}\n\n.bfBOT_bGBk:hover.bfBOT_fGhm{background-color:").concat(e.selectedBackgroundColor||"inherit","}\n\n.bfBOT_bGBk:hover.bfBOT_ewdC:before{visibility:hidden}\n\n.bfBOT_bGBk:hover .bfBOT_dnnz,.bfBOT_bGBk:hover .bfBOT_biFO,.bfBOT_bGBk:hover .bfBOT_sTpL{color:").concat(e.hoverTextColor||"inherit","}\n\n.bfBOT_bGBk.bfBOT_cVYB:not(.bfBOT_eoSs):after{opacity:1;transform:scale(1)}\n\n.bfBOT_bGBk.bfBOT_cVYB.bfBOT_eoSs{outline:").concat(e.focusOutlineWidth||"inherit"," ").concat(e.focusOutlineStyle||"inherit"," ").concat(e.focusOutlineColor||"inherit","}\n\n.bfBOT_byIz{align-items:center;display:flex;line-height:1;min-height:2rem}\n\n.bfBOT_dnnz,.bfBOT_eWKC{min-width:0.0625rem}\n\n.bfBOT_dnnz{color:").concat(e.iconColor||"inherit",";position:relative;z-index:1}\n\n.bfBOT_eWKC{flex:1;line-height:").concat(e.textLineHeight||"inherit","}\n\n.bfBOT_biFO,.bfBOT_sTpL{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n\n.bfBOT_sTpL{color:").concat(e.nameTextColor||"inherit","}\n\n.bfBOT_biFO{color:").concat(e.descriptorTextColor||"inherit",";margin-top:").concat(e.descriptorMarginTop||"inherit","}\n\n.bfBOT_ewdC:before{background:").concat(e.borderColor||"inherit",';content:"";height:').concat(e.borderWidth||"inherit",";inset-inline-end:auto;inset-inline-start:0;pointer-events:none;position:absolute;top:50%}\n\n[dir=ltr] .bfBOT_ewdC:before{left:0;right:auto}\n\n[dir=rtl] .bfBOT_ewdC:before{left:auto;right:0}\n\n.bfBOT_doqw.bfBOT_ewdC{padding:calc(").concat(e.baseSpacingSmall||"inherit","/3) ").concat(e.baseSpacingSmall||"inherit","}\n\n.bfBOT_doqw.bfBOT_ewdC:before{width:calc(").concat(e.baseSpacingSmall||"inherit"," - 0.0625rem)}\n\n.bfBOT_doqw.bfBOT_ewdC .bfBOT_dnnz,.bfBOT_doqw.bfBOT_ewdC .bfBOT_dXYn{-webkit-margin-end:").concat(e.baseSpacingSmall||"inherit",";-webkit-margin-start:0;margin-inline-end:").concat(e.baseSpacingSmall||"inherit",";margin-inline-start:0}\n\n[dir=ltr] .bfBOT_doqw.bfBOT_ewdC .bfBOT_dnnz,[dir=ltr] .bfBOT_doqw.bfBOT_ewdC .bfBOT_dXYn{margin-left:0;margin-right:").concat(e.baseSpacingSmall||"inherit","}\n\n[dir=rtl] .bfBOT_doqw.bfBOT_ewdC .bfBOT_dnnz,[dir=rtl] .bfBOT_doqw.bfBOT_ewdC .bfBOT_dXYn{margin-left:").concat(e.baseSpacingSmall||"inherit",";margin-right:0}\n\n.bfBOT_doqw.bfBOT_ewdC .bfBOT_dnnz{font-size:calc(").concat(e.baseSpacingSmall||"inherit","*2)}\n\n.bfBOT_doqw.bfBOT_ewdC .bfBOT_dXYn{height:calc(").concat(e.baseSpacingSmall||"inherit","*2);width:calc(").concat(e.baseSpacingSmall||"inherit","*2)}\n\n.bfBOT_doqw.bfBOT_cIHp{padding:calc(").concat(e.baseSpacingSmall||"inherit","/3) calc(").concat(e.baseSpacingSmall||"inherit","/2)}\n\n.bfBOT_doqw.bfBOT_cIHp .bfBOT_dnnz,.bfBOT_doqw.bfBOT_cIHp .bfBOT_dXYn{-webkit-margin-end:calc(").concat(e.baseSpacingSmall||"inherit","/2);-webkit-margin-start:0;margin-inline-end:calc(").concat(e.baseSpacingSmall||"inherit","/2);margin-inline-start:0}\n\n[dir=ltr] .bfBOT_doqw.bfBOT_cIHp .bfBOT_dnnz,[dir=ltr] .bfBOT_doqw.bfBOT_cIHp .bfBOT_dXYn{margin-left:0;margin-right:calc(").concat(e.baseSpacingSmall||"inherit","/2)}\n\n[dir=rtl] .bfBOT_doqw.bfBOT_cIHp .bfBOT_dnnz,[dir=rtl] .bfBOT_doqw.bfBOT_cIHp .bfBOT_dXYn{margin-left:calc(").concat(e.baseSpacingSmall||"inherit","/2);margin-right:0}\n\n.bfBOT_doqw.bfBOT_cIHp .bfBOT_dnnz{font-size:calc(").concat(e.baseSpacingSmall||"inherit","*2)}\n\n.bfBOT_doqw.bfBOT_cIHp .bfBOT_dXYn{height:calc(").concat(e.baseSpacingSmall||"inherit","*2);width:calc(").concat(e.baseSpacingSmall||"inherit","*2)}\n\n.bfBOT_doqw .bfBOT_sTpL{font-size:").concat(e.nameFontSizeSmall||"inherit","}\n\n.bfBOT_doqw .bfBOT_biFO{font-size:").concat(e.descriptorFontSizeSmall||"inherit","}\n\n.bfBOT_ycrn.bfBOT_ewdC{padding:calc(").concat(e.baseSpacingMedium||"inherit","/3) ").concat(e.baseSpacingMedium||"inherit","}\n\n.bfBOT_ycrn.bfBOT_ewdC:before{width:calc(").concat(e.baseSpacingMedium||"inherit"," - 0.0625rem)}\n\n.bfBOT_ycrn.bfBOT_ewdC .bfBOT_dnnz,.bfBOT_ycrn.bfBOT_ewdC .bfBOT_dXYn{-webkit-margin-end:").concat(e.baseSpacingMedium||"inherit",";-webkit-margin-start:0;margin-inline-end:").concat(e.baseSpacingMedium||"inherit",";margin-inline-start:0}\n\n[dir=ltr] .bfBOT_ycrn.bfBOT_ewdC .bfBOT_dnnz,[dir=ltr] .bfBOT_ycrn.bfBOT_ewdC .bfBOT_dXYn{margin-left:0;margin-right:").concat(e.baseSpacingMedium||"inherit","}\n\n[dir=rtl] .bfBOT_ycrn.bfBOT_ewdC .bfBOT_dnnz,[dir=rtl] .bfBOT_ycrn.bfBOT_ewdC .bfBOT_dXYn{margin-left:").concat(e.baseSpacingMedium||"inherit",";margin-right:0}\n\n.bfBOT_ycrn.bfBOT_ewdC .bfBOT_dnnz{font-size:calc(").concat(e.baseSpacingMedium||"inherit","*2)}\n\n.bfBOT_ycrn.bfBOT_ewdC .bfBOT_dXYn{height:calc(").concat(e.baseSpacingMedium||"inherit","*2);width:calc(").concat(e.baseSpacingMedium||"inherit","*2)}\n\n.bfBOT_ycrn.bfBOT_cIHp{padding:calc(").concat(e.baseSpacingMedium||"inherit","/3) calc(").concat(e.baseSpacingMedium||"inherit","/2)}\n\n.bfBOT_ycrn.bfBOT_cIHp .bfBOT_dnnz,.bfBOT_ycrn.bfBOT_cIHp .bfBOT_dXYn{-webkit-margin-end:calc(").concat(e.baseSpacingMedium||"inherit","/2);-webkit-margin-start:0;margin-inline-end:calc(").concat(e.baseSpacingMedium||"inherit","/2);margin-inline-start:0}\n\n[dir=ltr] .bfBOT_ycrn.bfBOT_cIHp .bfBOT_dnnz,[dir=ltr] .bfBOT_ycrn.bfBOT_cIHp .bfBOT_dXYn{margin-left:0;margin-right:calc(").concat(e.baseSpacingMedium||"inherit","/2)}\n\n[dir=rtl] .bfBOT_ycrn.bfBOT_cIHp .bfBOT_dnnz,[dir=rtl] .bfBOT_ycrn.bfBOT_cIHp .bfBOT_dXYn{margin-left:calc(").concat(e.baseSpacingMedium||"inherit","/2);margin-right:0}\n\n.bfBOT_ycrn.bfBOT_cIHp .bfBOT_dnnz{font-size:calc(").concat(e.baseSpacingMedium||"inherit","*2)}\n\n.bfBOT_ycrn.bfBOT_cIHp .bfBOT_dXYn{height:calc(").concat(e.baseSpacingMedium||"inherit","*2);width:calc(").concat(e.baseSpacingMedium||"inherit","*2)}\n\n.bfBOT_ycrn .bfBOT_sTpL{font-size:").concat(e.nameFontSizeMedium||"inherit","}\n\n.bfBOT_ycrn .bfBOT_biFO{font-size:").concat(e.descriptorFontSizeMedium||"inherit","}\n\n.bfBOT_cMDj.bfBOT_ewdC{padding:calc(").concat(e.baseSpacingLarge||"inherit","/3) ").concat(e.baseSpacingLarge||"inherit","}\n\n.bfBOT_cMDj.bfBOT_ewdC:before{width:calc(").concat(e.baseSpacingLarge||"inherit"," - 0.0625rem)}\n\n.bfBOT_cMDj.bfBOT_ewdC .bfBOT_dnnz,.bfBOT_cMDj.bfBOT_ewdC .bfBOT_dXYn{-webkit-margin-end:").concat(e.baseSpacingLarge||"inherit",";-webkit-margin-start:0;margin-inline-end:").concat(e.baseSpacingLarge||"inherit",";margin-inline-start:0}\n\n[dir=ltr] .bfBOT_cMDj.bfBOT_ewdC .bfBOT_dnnz,[dir=ltr] .bfBOT_cMDj.bfBOT_ewdC .bfBOT_dXYn{margin-left:0;margin-right:").concat(e.baseSpacingLarge||"inherit","}\n\n[dir=rtl] .bfBOT_cMDj.bfBOT_ewdC .bfBOT_dnnz,[dir=rtl] .bfBOT_cMDj.bfBOT_ewdC .bfBOT_dXYn{margin-left:").concat(e.baseSpacingLarge||"inherit",";margin-right:0}\n\n.bfBOT_cMDj.bfBOT_ewdC .bfBOT_dnnz{font-size:calc(").concat(e.baseSpacingLarge||"inherit","*2)}\n\n.bfBOT_cMDj.bfBOT_ewdC .bfBOT_dXYn{height:calc(").concat(e.baseSpacingLarge||"inherit","*2);width:calc(").concat(e.baseSpacingLarge||"inherit","*2)}\n\n.bfBOT_cMDj.bfBOT_cIHp{padding:calc(").concat(e.baseSpacingLarge||"inherit","/3) calc(").concat(e.baseSpacingLarge||"inherit","/2)}\n\n.bfBOT_cMDj.bfBOT_cIHp .bfBOT_dnnz,.bfBOT_cMDj.bfBOT_cIHp .bfBOT_dXYn{-webkit-margin-end:calc(").concat(e.baseSpacingLarge||"inherit","/2);-webkit-margin-start:0;margin-inline-end:calc(").concat(e.baseSpacingLarge||"inherit","/2);margin-inline-start:0}\n\n[dir=ltr] .bfBOT_cMDj.bfBOT_cIHp .bfBOT_dnnz,[dir=ltr] .bfBOT_cMDj.bfBOT_cIHp .bfBOT_dXYn{margin-left:0;margin-right:calc(").concat(e.baseSpacingLarge||"inherit","/2)}\n\n[dir=rtl] .bfBOT_cMDj.bfBOT_cIHp .bfBOT_dnnz,[dir=rtl] .bfBOT_cMDj.bfBOT_cIHp .bfBOT_dXYn{margin-left:calc(").concat(e.baseSpacingLarge||"inherit","/2);margin-right:0}\n\n.bfBOT_cMDj.bfBOT_cIHp .bfBOT_dnnz{font-size:calc(").concat(e.baseSpacingLarge||"inherit","*2)}\n\n.bfBOT_cMDj.bfBOT_cIHp .bfBOT_dXYn{height:calc(").concat(e.baseSpacingLarge||"inherit","*2);width:calc(").concat(e.baseSpacingLarge||"inherit","*2)}\n\n.bfBOT_cMDj .bfBOT_sTpL{font-size:").concat(e.nameFontSizeLarge||"inherit","}\n\n.bfBOT_cMDj .bfBOT_biFO{font-size:").concat(e.descriptorFontSizeLarge||"inherit","}\n\n.bfBOT_fGhm{background-color:").concat(e.selectedBackgroundColor||"inherit","}\n\n.bfBOT_fGhm.bfBOT_ewdC:before{visibility:hidden}\n\n.bfBOT_fGhm .bfBOT_dnnz,.bfBOT_fGhm .bfBOT_biFO,.bfBOT_fGhm .bfBOT_sTpL{color:").concat(e.selectedTextColor||"inherit","}")},root:"bfBOT_bGBk",button:"bfBOT_EwaR",ie11:"bfBOT_eoSs",selected:"bfBOT_fGhm",folderTree:"bfBOT_ewdC",icon:"bfBOT_dnnz",textDescriptor:"bfBOT_biFO",textName:"bfBOT_sTpL",focused:"bfBOT_cVYB",layout:"bfBOT_byIz",text:"bfBOT_eWKC",small:"bfBOT_doqw",thumbnail:"bfBOT_dXYn",indent:"bfBOT_cIHp",medium:"bfBOT_ycrn",large:"bfBOT_cMDj"}
var G=(L=Object(j["a"])(),R=Object(w["i"])(X,A),L(D=R(D=(H=N=function(e){Object(O["a"])(t,e)
function t(){Object(b["a"])(this,t)
return Object(g["a"])(this,Object(v["a"])(t).apply(this,arguments))}Object(m["a"])(t,[{key:"renderImage",value:function(){var e=this.props.type
switch(e){case"collection":return this.renderCollectionIcon()
case"item":return this.renderItemImage()}}},{key:"renderCollectionIcon",value:function(){var e=this.props.expanded?this.props.collectionIconExpanded:this.props.collectionIcon
if(e)return c.a.createElement(e,{className:A.icon})}},{key:"renderItemImage",value:function(){var e=this.props.thumbnail
var t=this.props.itemIcon
if(e)return c.a.createElement("div",{className:A.thumbnail},c.a.createElement(F["a"],{src:e,constrain:"cover",alt:""}))
if(t)return c.a.createElement(t,{className:A.icon})}},{key:"render",value:function(){var e
var t=this.props,n=t.name,a=t.descriptor,i=t.expanded,r=t.selected,o=t.focused,s=t.variant,l=t.size
var d=(e={},Object(x["a"])(e,A.root,true),Object(x["a"])(e,A[l],true),Object(x["a"])(e,A[s],true),Object(x["a"])(e,A.expanded,i),Object(x["a"])(e,A.selected,r),Object(x["a"])(e,A.focused,o),Object(x["a"])(e,A.ie11,W["a"]),e)
return c.a.createElement("button",{tabIndex:-1,type:"button",className:z()(d)},c.a.createElement("span",{className:A.layout},this.renderImage(),c.a.createElement("span",{className:A.text},c.a.createElement("span",{className:A.textName},n),a?c.a.createElement("span",{className:A.textDescriptor,title:a},a):null)))}}])
t.displayName="TreeButton"
return t}(o["Component"]),N.propTypes={id:y.a.oneOfType([y.a.string,y.a.number]),name:y.a.string,descriptor:y.a.string,type:y.a.string,size:y.a.oneOf(["small","medium","large"]),variant:y.a.oneOf(["folderTree","indent"]),collectionIcon:y.a.func,collectionIconExpanded:y.a.func,itemIcon:y.a.func,thumbnail:y.a.string,onClick:y.a.func,expanded:y.a.bool,selected:y.a.bool,focused:y.a.bool},N.defaultProps={type:"treeButton",size:"medium",variant:"folderTree",selected:false,focused:false,onClick:function(){},id:void 0,name:void 0,collectionIcon:void 0,collectionIconExpanded:void 0,itemIcon:void 0,thumbnail:void 0,expanded:false,descriptor:void 0},H))||D)||D)
var q=function(e){var t=e.colors,n=e.spacing,a=e.typography,i=e.borders
return{fontFamily:a.fontFamily,baseSpacingSmall:n.xSmall,baseSpacingMedium:n.small,baseSpacingLarge:"1rem",borderWidth:i.widthSmall,borderColor:t.borderDark}}
var U,P,Y,V,J
var K={componentId:"fXaWe",template:function(e){return"\n\n@keyframes fXaWe_cpmC{to{transform:scaleY(1)}}\n\n.fXaWe_cpmC{box-sizing:border-box;font-family:".concat(e.fontFamily||"inherit",';list-style-type:none;position:relative}\n\n.fXaWe_cpmC,.fXaWe_fjNS{margin:0;padding:0}\n\n.fXaWe_ewEu:focus,.fXaWe_fjNS:focus{outline:0}\n\n.fXaWe_ewdC .fXaWe_cpmC:before{animation-duration:0.2s;animation-fill-mode:forwards;animation-name:fXaWe_cpmC;animation-timing-function:ease-out;bottom:1.1875rem;content:"";inset-inline-end:auto;inset-inline-start:0;pointer-events:none;position:absolute;top:0.25rem;transform:scaleY(0.01);transform-origin:center top}\n\n[dir=ltr] .fXaWe_ewdC .fXaWe_cpmC:before{left:0;right:auto}\n\n[dir=rtl] .fXaWe_ewdC .fXaWe_cpmC:before{left:auto;right:0}\n\n.fXaWe_ewdC:not(.fXaWe_bUWG) .fXaWe_cpmC:before{background:').concat(e.borderColor||"inherit",";width:").concat(e.borderWidth||"inherit","}\n\n.fXaWe_ewdC.fXaWe_bUWG .fXaWe_cpmC:before{background:#73818c;width:0.0625rem}\n\n.fXaWe_doqw.fXaWe_cIHp .fXaWe_cpmC{-webkit-margin-end:0;-webkit-margin-start:calc(").concat(e.baseSpacingSmall||"inherit","*3);margin-inline-end:0;margin-inline-start:calc(").concat(e.baseSpacingSmall||"inherit","*3)}\n\n[dir=ltr] .fXaWe_doqw.fXaWe_cIHp .fXaWe_cpmC{margin-left:calc(").concat(e.baseSpacingSmall||"inherit","*3);margin-right:0}\n\n[dir=rtl] .fXaWe_doqw.fXaWe_cIHp .fXaWe_cpmC{margin-left:0;margin-right:calc(").concat(e.baseSpacingSmall||"inherit","*3)}\n\n.fXaWe_doqw.fXaWe_ewdC .fXaWe_cpmC{-webkit-margin-end:0;-webkit-margin-start:calc(").concat(e.baseSpacingSmall||"inherit","*2);margin-inline-end:0;margin-inline-start:calc(").concat(e.baseSpacingSmall||"inherit","*2);margin-top:calc(-1*").concat(e.baseSpacingSmall||"inherit",");padding-top:").concat(e.baseSpacingSmall||"inherit","}\n\n[dir=ltr] .fXaWe_doqw.fXaWe_ewdC .fXaWe_cpmC{margin-left:calc(").concat(e.baseSpacingSmall||"inherit","*2);margin-right:0}\n\n[dir=rtl] .fXaWe_doqw.fXaWe_ewdC .fXaWe_cpmC{margin-left:0;margin-right:calc(").concat(e.baseSpacingSmall||"inherit","*2)}\n\n.fXaWe_ycrn.fXaWe_cIHp .fXaWe_cpmC{-webkit-margin-end:0;-webkit-margin-start:calc(").concat(e.baseSpacingMedium||"inherit","*3);margin-inline-end:0;margin-inline-start:calc(").concat(e.baseSpacingMedium||"inherit","*3)}\n\n[dir=ltr] .fXaWe_ycrn.fXaWe_cIHp .fXaWe_cpmC{margin-left:calc(").concat(e.baseSpacingMedium||"inherit","*3);margin-right:0}\n\n[dir=rtl] .fXaWe_ycrn.fXaWe_cIHp .fXaWe_cpmC{margin-left:0;margin-right:calc(").concat(e.baseSpacingMedium||"inherit","*3)}\n\n.fXaWe_ycrn.fXaWe_ewdC .fXaWe_cpmC{-webkit-margin-end:0;-webkit-margin-start:calc(").concat(e.baseSpacingMedium||"inherit","*2);margin-inline-end:0;margin-inline-start:calc(").concat(e.baseSpacingMedium||"inherit","*2);margin-top:calc(-1*").concat(e.baseSpacingMedium||"inherit",");padding-top:").concat(e.baseSpacingMedium||"inherit","}\n\n[dir=ltr] .fXaWe_ycrn.fXaWe_ewdC .fXaWe_cpmC{margin-left:calc(").concat(e.baseSpacingMedium||"inherit","*2);margin-right:0}\n\n[dir=rtl] .fXaWe_ycrn.fXaWe_ewdC .fXaWe_cpmC{margin-left:0;margin-right:calc(").concat(e.baseSpacingMedium||"inherit","*2)}\n\n.fXaWe_cMDj.fXaWe_cIHp .fXaWe_cpmC{-webkit-margin-end:0;-webkit-margin-start:calc(").concat(e.baseSpacingLarge||"inherit","*3);margin-inline-end:0;margin-inline-start:calc(").concat(e.baseSpacingLarge||"inherit","*3)}\n\n[dir=ltr] .fXaWe_cMDj.fXaWe_cIHp .fXaWe_cpmC{margin-left:calc(").concat(e.baseSpacingLarge||"inherit","*3);margin-right:0}\n\n[dir=rtl] .fXaWe_cMDj.fXaWe_cIHp .fXaWe_cpmC{margin-left:0;margin-right:calc(").concat(e.baseSpacingLarge||"inherit","*3)}\n\n.fXaWe_cMDj.fXaWe_ewdC .fXaWe_cpmC{-webkit-margin-end:0;-webkit-margin-start:calc(").concat(e.baseSpacingLarge||"inherit","*2);margin-inline-end:0;margin-inline-start:calc(").concat(e.baseSpacingLarge||"inherit","*2);margin-top:calc(-1*").concat(e.baseSpacingLarge||"inherit",");padding-top:").concat(e.baseSpacingLarge||"inherit","}\n\n[dir=ltr] .fXaWe_cMDj.fXaWe_ewdC .fXaWe_cpmC{margin-left:calc(").concat(e.baseSpacingLarge||"inherit","*2);margin-right:0}\n\n[dir=rtl] .fXaWe_cMDj.fXaWe_ewdC .fXaWe_cpmC{margin-left:0;margin-right:calc(").concat(e.baseSpacingLarge||"inherit","*2)}")},list:"fXaWe_cpmC",node:"fXaWe_fjNS",item:"fXaWe_ewEu",folderTree:"fXaWe_ewdC",edge:"fXaWe_bUWG",small:"fXaWe_doqw",indent:"fXaWe_cIHp",medium:"fXaWe_ycrn",large:"fXaWe_cMDj"}
var Q=(U=Object(j["a"])(),P=Object(w["i"])(q,K),U(Y=P(Y=(J=V=function(e){Object(O["a"])(t,e)
function t(e){var n
Object(b["a"])(this,t)
n=Object(g["a"])(this,Object(v["a"])(t).call(this,e))
n.handleFocus=function(e,t){e.stopPropagation()
n.setState({focused:"".concat(t.type,"_").concat(t.id)})}
n.handleBlur=function(e,t){e.stopPropagation()
n.setState({focused:""})}
n.handleCollectionClick=function(e){var t=n.props,a=t.id,i=t.onCollectionClick,r=t.expanded
var o={id:a,expanded:!r,type:"collection"}
i&&"function"===typeof i&&i(e,o)}
n.handleCollectionKeyDown=function(e){var t=n.props,a=t.id,i=t.onKeyDown,r=t.expanded
var o={id:a,expanded:!r,type:"collection"}
i&&"function"===typeof i&&i(e,o)}
n.state={focused:""}
return n}Object(m["a"])(t,[{key:"renderChildren",value:function(){var e=this
var t=this.props,n=t.expanded,a=t.collections,i=t.items,r=t.name
return n&&this.childCount>0&&c.a.createElement("ul",{"aria-label":r,className:K.list,role:"group"},a.map((function(t,n){return e.renderCollectionNode(t,n,e.childCount)})),i.map((function(t,n){return e.renderItemNode(t,n,e.childCount,e.collectionsCount)})))}},{key:"renderCollectionNode",value:function(e,n,a){return c.a.createElement(t,Object.assign({},this.props,{key:"c".concat(n),id:e.id,name:e.name,descriptor:e.descriptor,expanded:e.expanded,items:e.items,collections:e.collections,numChildren:a,level:this.props.level+1,position:n+1}))}},{key:"renderItemNode",value:function(e,t,n,a){var i=this
var r={}
this.props.selection&&(r["aria-selected"]=this.props.selection==="item_".concat(e.id))
var o={id:e.id,type:"item"}
return c.a.createElement("li",Object.assign({key:"i".concat(t),tabIndex:"-1",role:"treeitem","aria-label":e.name,className:K.item,"aria-level":this.props.level+1,"aria-posinset":t+1+a,"aria-setsize":n,onClick:function(e,t){return i.props.onItemClick(e,o)},onKeyDown:function(e,t){return i.props.onKeyDown(e,o)},onFocus:function(e,t){return i.handleFocus(e,o)},onBlur:function(e,t){return i.handleBlur(e,o)}},r),c.a.createElement(G,Object.assign({},this.getCommonButtonProps(),{id:e.id,name:e.name,descriptor:e.descriptor,thumbnail:e.thumbnail,selected:this.props.selection==="item_".concat(e.id),focused:this.state.focused==="item_".concat(e.id),type:"item"})))}},{key:"getCommonButtonProps",value:function(){return{id:this.props.id,name:this.props.name,descriptor:this.props.descriptor,size:this.props.size,variant:this.props.variant,itemIcon:this.props.itemIcon}}},{key:"render",value:function(){var e,t=this
var n=this.props,a=n.id,i=n.size,r=n.variant,o=n.expanded,s=n.collectionIcon,l=n.collectionIconExpanded,d=n.level,f=n.position
var u=(e={},Object(x["a"])(e,K.root,true),Object(x["a"])(e,K.edge,E["a"]),Object(x["a"])(e,K[i],true),Object(x["a"])(e,K[r],true),Object(x["a"])(e,K.expanded,o),Object(x["a"])(e,K.node,true),e)
var p={}
this.props.selection&&(p["aria-selected"]=this.props.selection==="collection_".concat(a))
return c.a.createElement("li",Object.assign({className:z()(u),tabIndex:"-1",role:"treeitem","aria-label":this.props.name,"aria-level":d,"aria-posinset":f,"aria-setsize":this.props.numChildren,"aria-expanded":o,onClick:this.handleCollectionClick,onKeyDown:this.handleCollectionKeyDown,onFocus:function(e,n){return t.handleFocus(e,{id:a,type:"collection"})},onBlur:function(e,n){return t.handleBlur(e,{id:a,type:"collection"})}},p),c.a.createElement(G,Object.assign({},this.getCommonButtonProps(),{expanded:o,collectionIcon:s,collectionIconExpanded:l,type:"collection",selected:this.props.selection==="collection_".concat(a),focused:this.state.focused==="collection_".concat(a)})),this.renderChildren())}},{key:"collectionsCount",get:function(){var e=this.props.collections
return e&&e.length>0?e.length:0}},{key:"itemsCount",get:function(){var e=this.props.items
return e&&e.length>0?e.length:0}},{key:"childCount",get:function(){return this.collectionsCount+this.itemsCount}}])
t.displayName="TreeCollection"
return t}(o["Component"]),V.propTypes={id:y.a.oneOfType([y.a.string,y.a.number]),name:y.a.string,descriptor:y.a.string,items:y.a.array,collections:y.a.array,expanded:y.a.bool,selection:y.a.string,size:y.a.oneOf(["small","medium","large"]),variant:y.a.oneOf(["folderTree","indent"]),collectionIcon:y.a.func,collectionIconExpanded:y.a.func,itemIcon:y.a.func,onItemClick:y.a.func,onCollectionClick:y.a.func,onKeyDown:y.a.func,numChildren:y.a.number,level:y.a.number,position:y.a.number},V.defaultProps={collections:[],items:[],expanded:false,selection:"",size:"medium",variant:"folderTree",onItemClick:function(){},onCollectionClick:function(){},onKeyDown:function(){},id:void 0,name:void 0,descriptor:void 0,collectionIconExpanded:void 0,collectionIcon:void 0,itemIcon:void 0,numChildren:void 0,level:void 0,position:void 0},J))||Y)||Y)
var $=function(e){var t=e.colors,n=e.spacing,a=e.typography,i=e.borders
return{fontFamily:a.fontFamily,fontWeight:a.fontWeightNormal,fontSize:a.fontSizeSmall,controlsTopMargin:n.small,borderRadius:i.radiusMedium,focusOutlineWidth:i.widthMedium,focusOutlineColor:t.borderBrand,focusOutlineStyle:i.style}}
var Z,ee,te,ne,ae
var ie={componentId:"DBzxS",template:function(e){return"\n\n.DBzxS_cBsQ{margin-top:".concat(e.controlsTopMargin||"inherit","}\n\n.DBzxS_cpmC{list-style-type:none;margin:0;outline:none;padding:0;position:relative}\n\n.DBzxS_cpmC,.DBzxS_cpmC:before{box-sizing:border-box}\n\n.DBzxS_cpmC:before{border:").concat(e.focusOutlineWidth||"inherit"," ").concat(e.focusOutlineStyle||"inherit"," ").concat(e.focusOutlineColor||"inherit",";border-radius:calc(").concat(e.borderRadius||"inherit",'*1.5);bottom:-0.25rem;content:"";display:block;left:-0.25rem;opacity:0;pointer-events:none;position:absolute;right:-0.25rem;top:-0.25rem;transform:scale(0.95);transition:all 0.2s}\n\n.DBzxS_cpmC:focus:before{opacity:1;transform:scale(1)}')},controls:"DBzxS_cBsQ",list:"DBzxS_cpmC"}
var re=(Z=Object(j["a"])(),ee=Object(w["i"])($,ie),Z(te=ee(te=(ae=ne=function(e){Object(O["a"])(t,e)
function t(e){var n
Object(b["a"])(this,t)
n=Object(g["a"])(this,Object(v["a"])(t).call(this,e))
n.handleCollectionClick=function(e,t){var a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2]
e.stopPropagation()
var i=n.props.onCollectionClick
a&&n.expandOrCollapseNode(t)
i(t.id,t)
n.handleSelection(t.id,"collection")}
n.handleItemClick=function(e,t){e.stopPropagation()
var a=n.props.onItemClick
a(t)
n.handleSelection(t.id,"item")}
n.handleKeyDown=function(e,t){e.stopPropagation()
switch(e.keyCode){case B.a.codes.down:case B.a.codes.j:n.moveFocus(1)
break
case B.a.codes.up:case B.a.codes.k:n.moveFocus(-1)
break
case B.a.codes.home:case B.a.codes.end:n.homeOrEnd(e.keyCode)
break
case B.a.codes.left:case B.a.codes.right:n.handleLeftOrRightArrow(e.keyCode,t)
break
case B.a.codes.enter:case B.a.codes.space:n.handleActivation(e,t)
break
default:return}e.preventDefault()}
n.state={selection:""}
"undefined"===typeof n.props.expanded&&(n.state.expanded=e.defaultExpanded)
return n}Object(m["a"])(t,[{key:"getExpanded",value:function(e,t){return"undefined"===typeof t.expanded?e.expanded:t.expanded}},{key:"expandOrCollapseNode",value:function(e){var t=this
this.props.onCollectionToggle(e)
"undefined"===typeof this.props.expanded&&this.setState((function(n,a){var i=[].concat(t.getExpanded(n,a))
var r=t.getExpandedIndex(i,e.id)
e.expanded&&r<0?i.push(e.id):r>=0&&i.splice(r,1)
return{expanded:i}}))}},{key:"handleSelection",value:function(e,t){var n=this.props.selectionType
"single"===n&&this.setState((function(n){var a="".concat(t,"_").concat(e)
return n.selection!==a?{selection:a}:n}))}},{key:"getNavigableNodes",value:function(){return Array.from(this._root.querySelectorAll('[role="treeitem"]'))}},{key:"moveFocus",value:function(e){var t=this.getNavigableNodes()
var n=t.indexOf(window.document.activeElement)
var a=n+e
a<0?a=0:a>=t.length&&(a=t.length-1)
t.forEach((function(e){e.setAttribute("tabindex","-1")}))
t[a].setAttribute("tabindex","0")
t[a].focus()}},{key:"homeOrEnd",value:function(e){var t=this.getNavigableNodes().length
e===B.a.codes.home?this.moveFocus(1-t):this.moveFocus(t-1)}},{key:"handleLeftOrRightArrow",value:function(e,t){var n=!("rtl"===this._root.parentElement.dir||"rtl"===document.dir)
n&&e===B.a.codes.left||!n&&e==B.a.codes.right?this.handleCloseOrPrevious(t):this.handleOpenOrNext(t)}},{key:"handleOpenOrNext",value:function(e){e&&!this.expanded.includes(e.id)&&"collection"===e.type?this.expandOrCollapseNode(e):this.moveFocus(1)}},{key:"handleCloseOrPrevious",value:function(e){e&&this.expanded.includes(e.id)&&"collection"===e.type?this.expandOrCollapseNode(e):this.moveFocus(-1)}},{key:"handleActivation",value:function(e,t){if(null==t)return
"collection"===t.type?this.handleCollectionClick(e,t,"none"===this.props.selectionType):this.handleItemClick(e,t)}},{key:"getSubCollections",value:function(e){var t=this
var n=[].concat(e.collections||[])
return n.map((function(e){return t.getCollectionProps(t.props.collections[e])})).filter((function(e){return null!=e}))}},{key:"getItems",value:function(e){var t=this
if(e.items){var n=[].concat(e.items)
return n.map((function(e){return Object(i["a"])({},t.props.items[e])})).filter((function(e){return null!=e}))}return[]}},{key:"getCollectionProps",value:function(e){var t={id:e.id,name:e.name,descriptor:e.descriptor,expanded:this.getExpandedIndex(this.expanded,e.id)>=0,items:this.getItems(e),collections:this.getSubCollections(e)}
return t}},{key:"getExpandedIndex",value:function(e,t){return e.findIndex((function(e){return String(e)===String(t)}))}},{key:"renderRoot",value:function(){var e=this
return this.collections.map((function(t,n){return c.a.createElement(Q,Object.assign({key:n},Object(I["c"])(e.props,Q.propTypes),e.getCollectionProps(t),{selection:e.state.selection,onItemClick:e.handleItemClick,onCollectionClick:e.handleCollectionClick,onKeyDown:e.handleKeyDown,numChildren:e.collections.length,level:1,position:1}))}))}},{key:"render",value:function(){var e=this
return c.a.createElement("ul",{className:ie.list,tabIndex:0,role:"tree",onKeyDown:this.handleKeyDown,ref:function(t){e._root=t},"aria-label":this.props.treeLabel},this.renderRoot())}},{key:"collections",get:function(){var e=this.props,t=e.collections,n=e.rootId,a=e.showRootCollection
return"undefined"!==typeof n&&a?[t[n]]:"undefined"!==typeof n?t[n].collections.map((function(e){return t[e]})).filter((function(e){return null!=e})):Object.keys(t).map((function(e){return t[e]})).filter((function(e){return null!=e}))}},{key:"expanded",get:function(){return this.getExpanded(this.state,this.props)}}])
t.displayName="TreeBrowser"
return t}(o["Component"]),ne.propTypes={collections:y.a.object.isRequired,items:y.a.object.isRequired,rootId:y.a.number,expanded:Object(S["a"])(y.a.arrayOf(y.a.oneOfType([y.a.string,y.a.number])),"onCollectionToggle"),defaultExpanded:y.a.arrayOf(y.a.oneOfType([y.a.string,y.a.number])),selectionType:y.a.oneOf(["none","single"]),size:y.a.oneOf(["small","medium","large"]),variant:y.a.oneOf(["folderTree","indent"]),collectionIcon:y.a.func,collectionIconExpanded:y.a.func,itemIcon:y.a.func,showRootCollection:y.a.bool,onCollectionClick:y.a.func,onCollectionToggle:y.a.func,onItemClick:y.a.func,treeLabel:y.a.string},ne.defaultProps={size:"medium",variant:"folderTree",showRootCollection:true,collectionIcon:C["a"],collectionIconExpanded:C["a"],itemIcon:k["a"],defaultExpanded:[],selectionType:"none",onItemClick:function(e){},onCollectionClick:function(e,t){},onCollectionToggle:function(e){},rootId:void 0,expanded:void 0,treeLabel:void 0},ae))||te)||te)
var oe=n("VTJ5")
var ce=n("5JRF")
var se=n("Xx/m")
var le=n("ysUD")
var de=n("WfMV")
var fe=n("Cf7h")
var ue=n("hPGw")
var pe=c.a.createElement("path",{d:"M1467.552 1700.252l297.428-297.428 155.362 155.362L1558.527 1920H368.814L7 1558.186l155.361-155.362 297.429 297.428h1007.762zM965.902 0l517.175 517.176-155.361 155.361-251.941-251.94v1002.708H856.028V420.597l-251.941 251.94-155.362-155.361L965.901 0z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var he=function(e){Object(O["a"])(t,e)
function t(){Object(b["a"])(this,t)
return Object(g["a"])(this,Object(v["a"])(t).apply(this,arguments))}Object(m["a"])(t,[{key:"render",value:function(){return c.a.createElement(ue["a"],Object.assign({},this.props,{name:"IconUpload",viewBox:"0 0 1920 1920"}),pe)}}])
t.displayName="IconUploadSolid"
return t}(o["Component"])
he.glyphName="upload"
he.variant="Solid"
he.propTypes=Object(i["a"])({},ue["a"].propTypes)
var be=c.a.createElement("path",{d:"M572.501 747l-254.933 815.893-101.867-31.786 278.507-890.774h1105.813v-320H783.808L612.181 107H.021v1546.667c0 88.213 71.787 160 160 160h1388.054c75.946 0 141.973-54.08 156.906-128.64L1892.608 747H572.501z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var me=function(e){Object(O["a"])(t,e)
function t(){Object(b["a"])(this,t)
return Object(g["a"])(this,Object(v["a"])(t).apply(this,arguments))}Object(m["a"])(t,[{key:"render",value:function(){return c.a.createElement(ue["a"],Object.assign({},this.props,{name:"IconOpenFolder",viewBox:"0 0 1920 1920",bidirectional:true}),be)}}])
t.displayName="IconOpenFolderSolid"
return t}(o["Component"])
me.glyphName="open-folder"
me.variant="Solid"
me.propTypes=Object(i["a"])({},ue["a"].propTypes)
var ge=c.a.createElement("path",{d:"M225.882 564.765V451.824h764.386L764.386 113H0v1524.706c0 93.402 76.01 169.412 169.412 169.412h1581.176c93.403 0 169.412-76.01 169.412-169.412V564.765H225.882z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var ve=function(e){Object(O["a"])(t,e)
function t(){Object(b["a"])(this,t)
return Object(g["a"])(this,Object(v["a"])(t).apply(this,arguments))}Object(m["a"])(t,[{key:"render",value:function(){return c.a.createElement(ue["a"],Object.assign({},this.props,{name:"IconFolder",viewBox:"0 0 1920 1920",bidirectional:true}),ge)}}])
t.displayName="IconFolderSolid"
return t}(o["Component"])
ve.glyphName="folder"
ve.variant="Solid"
ve.propTypes=Object(i["a"])({},ue["a"].propTypes)
var Oe=n("IqBw")
const _e={Accept:"application/json+canvas-string-ids"}
function ye(e,t){return u["a"].get("/api/v1/".concat(e,"/").concat(t,"/folders/root"),_e)}function Te(e){const t=new FormData
Object.keys(e).forEach(n=>t.append(n,e[n]))
return t}function Be(e,t,n,a){const r=Te(Object(i["a"])({},t.upload_params,{file:e}))
const o=Object(i["a"])({"Content-Type":"multipart/form-data"},_e)
u["a"].post(t.upload_url,r,o).then(e=>n(e.data)).catch(e=>a(e))}function Ce(e,t,n,a){u["a"].post("/api/v1/folders/".concat(t,"/files"),{name:e.name,size:e.size,parent_folder_id:t,on_duplicate:"rename"},_e).then(t=>Be(e,t.data,n,a)).catch(e=>a(e))}var ke=n("XGn+")
var we=n("dqQ7")
var Ie=n("yE80")
class Se extends c.a.Component{constructor(e){var t
super(e)
t=this
this.populateCollectionsList=function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const a=l.a.cloneDeep(t.state.collections)
e.forEach(e=>{const i=t.formatFolderInfo(e,n)
a[i.id]=i
const r=e.parent_folder_id||0
const o=a[r].collections
if(!o.includes(i.id)){o.push(i.id)
a[r].collections=t.orderedIdsFromList(a,o)}})
t.setState({collections:a})
e.forEach(e=>{t.state.openFolders.includes(e.parent_folder_id)&&t.getFolderData(e.id)})}
this.populateItemsList=e=>{const t=l.a.cloneDeep(this.state.items)
const n=l.a.cloneDeep(this.state.collections)
e.forEach(e=>{if(this.contentTypeIsAllowed(e["content-type"])){const a=this.formatFileInfo(e)
t[a.id]=a
const i=e.folder_id
const r=n[i].items
if(!r.includes(a.id)){r.push(a.id)
n[i].items=this.orderedIdsFromList(t,r)}}})
this.setState({items:t,collections:n})}
this.onFolderToggle=e=>this.onFolderClick(e.id,e)
this.onFolderClick=(e,t)=>{const n=this.state.collections[e]
let a=[]
const i=this.state.openFolders
if(!n.locked&&i.includes(e))a=a.concat(i.filter(t=>t!==e))
else if(!n.locked){a=a.concat(i)
a.push(e)
n.collections.forEach(e=>this.getFolderData(e))}return this.setState({openFolders:a,uploadFolder:e})}
this.onFileClick=e=>{const t=this.findFolderForFile(e)
this.setState({uploadFolder:t&&t.id})
this.props.selectFile(this.state.items[e.id])}
this.onInputChange=e=>{e&&this.submitFile(e[0])}
this.submitFile=e=>{this.setState({uploading:true})
Ce(e,this.state.uploadFolder,this.onUploadSucceed,this.onUploadFail)}
this.onUploadSucceed=e=>{this.populateItemsList([e])
this.clearUploadInfo()
const t=this.state.collections[e.folder_id]
this.setSuccessMessage(r["a"].t("Success: File uploaded"))
0===f()("button:contains('".concat(e.display_name,"')")).length&&f()("button:contains('".concat(t&&t.name,"')")).click()
const n=f()("button:contains('".concat(e.display_name,"')"))
f()(".file-browser__tree").scrollTo(n)
n.click()}
this.onUploadFail=()=>{this.clearUploadInfo()
this.setFailureMessage(r["a"].t("File upload failed"))}
this.setSuccessMessage=e=>{Object(we["c"])(e)()}
this.setFailureMessage=e=>{Object(we["b"])(e)()}
this.selectLocalFile=()=>{this.uploadInput.click()}
this.state={collections:{0:{collections:[]}},items:{},openFolders:[],uploadFolder:null,uploading:false,loadingCount:0}}componentDidMount(){this.getRootFolders()}getContextName(e){return"courses"===e?r["a"].t("Course files"):r["a"].t("Group files")}getContextInfo(e){const t=Object(fe["a"])(e)
if(t&&t[0]&&t[1]){const e=this.getContextName(t[0])
return{name:e,type:t[0],id:t[1]}}}getRootFolders(){this.props.useContextAssets&&this.getContextFolders()
this.getUserFolders()}getUserFolders(){this.getRootFolderData("users","self",{name:r["a"].t("My files")})}getContextFolders(){if(!ENV.context_asset_string)return
const e=this.getContextInfo(ENV.context_asset_string)
e&&e.type&&e.id&&this.getRootFolderData(e.type,e.id,{name:e.name})}increaseLoadingCount(){let e=this.state.loadingCount
e+=1
this.setState({loadingCount:e})}decreaseLoadingCount(){let e=this.state.loadingCount
e-=1
this.setState({loadingCount:e})}getRootFolderData(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
this.increaseLoadingCount()
ye(e,t).then(e=>this.populateRootFolder(e.data,n)).catch(e=>{this.decreaseLoadingCount()
e.response&&401!==e.response.status&&this.setFailureMessage(r["a"].t("Something went wrong"))})}populateRootFolder(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
this.decreaseLoadingCount()
this.populateCollectionsList([e],t)
this.getFolderData(e.id)}getFolderData(e){const t=this.state.collections
if(!t[e].locked){this.getPaginatedData(this.folderFileApiUrl(e,"folders"),this.populateCollectionsList)
this.getPaginatedData(this.folderFileApiUrl(e),this.populateItemsList)}}getPaginatedData(e,t){u["a"].get(e).then(e=>{t(e.data)
const n=Object(ke["a"])(e.headers.link).next
n&&this.getPaginatedData(n,t)})}folderFileApiUrl(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"files"
return"/api/v1/folders/".concat(e,"/").concat(t)}contentTypeIsAllowed(e){for(const t of this.props.contentTypes)if(h()(e,t))return true
return false}formatFolderInfo(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const n=e.locked_for_user?r["a"].t("Locked"):null
const a=Object(i["a"])({id:e.id,collections:[],items:[],name:e.name,context:"/".concat(e.context_type.toLowerCase(),"s/").concat(e.context_id),canUpload:e.can_upload,locked:e.locked_for_user,descriptor:n},t)
const o=this.state.collections[e.id]
Object.assign(a,o&&{collections:o.collections,items:o.items})
return a}formatFileInfo(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const n=this.state.collections
const a=n[e.folder_id].context
const r=Object(i["a"])({id:e.id,name:e.display_name,thumbnail:e.thumbnail_url,src:"".concat(a,"/files/").concat(e.id,"/preview").concat(a.includes("user")?"?verifier=".concat(e.uuid):""),alt:e.display_name},t)
return r}orderedIdsFromList(e,t){try{const n=t.sort((t,n)=>Ie["a"].strings(e[t].name,e[n].name))
return n}catch(e){console.error(e)
return t}}findFolderForFile(e){const t=this.state.collections
const n=Object.keys(t).find(n=>{const a=t[n].items
if(a&&a.includes(e.id))return n})
return t[n]}clearUploadInfo(){this.setState({uploading:false})
this.uploadInput.value=""}renderUploadDialog(){if(!this.props.allowUpload)return null
const e=this.state.collections[this.state.uploadFolder]
const t=!e||e.locked||!e.canUpload
const n=t?Object(a["a"])(de["a"],{},void 0,r["a"].t("Upload not available for this folder")):""
const i=this.props.contentTypes.join(",")
return Object(a["a"])("div",{className:"image-upload__form"},void 0,c.a.createElement("input",{onChange:e=>this.onInputChange(e.target.files),ref:e=>{this.uploadInput=e},type:"file",accept:i,className:"hidden"}),Object(a["a"])(se["a"],{id:"image-upload__upload",onClick:this.selectLocalFile,disabled:t,variant:"ghost",icon:he},void 0,r["a"].t("Upload File")," ",n))}renderMask(){return this.state.uploading?Object(a["a"])(le["a"],{},void 0,Object(a["a"])(oe["a"],{className:"file-browser__uploading",renderTitle:r["a"].t("File uploading")})):null}renderLoading(){return this.state.loadingCount>0?Object(a["a"])(oe["a"],{className:"file-browser__loading",renderTitle:r["a"].t("Loading folders"),size:"small"}):null}render(){const e=Object(a["a"])("div",{className:"file-browser__container"},void 0,Object(a["a"])(ce["a"],{},void 0,r["a"].t("Available folders")),Object(a["a"])("div",{className:"file-browser__tree"},void 0,Object(a["a"])(re,{collections:this.state.collections,items:this.state.items,size:"medium",onCollectionToggle:this.onFolderToggle,onCollectionClick:this.onFolderClick,onItemClick:this.onFileClick,treeLabel:r["a"].t("Folder tree"),rootId:0,showRootCollection:false,defaultExpanded:this.state.openFolders,collectionIconExpanded:me,collectionIcon:ve,itemIcon:Oe["a"],selectionType:"single"}),this.renderMask(),this.renderLoading()),this.renderUploadDialog())
return e}}Se.defaultProps={allowUpload:true,contentTypes:["*/*"],useContextAssets:true}
t["a"]=Se},TuBq:function(e,t,n){var a=n("icBU")
var i=n("kbA8")
e.exports=h
var r="\0SLASH"+Math.random()+"\0"
var o="\0OPEN"+Math.random()+"\0"
var c="\0CLOSE"+Math.random()+"\0"
var s="\0COMMA"+Math.random()+"\0"
var l="\0PERIOD"+Math.random()+"\0"
function d(e){return parseInt(e,10)==e?parseInt(e,10):e.charCodeAt(0)}function f(e){return e.split("\\\\").join(r).split("\\{").join(o).split("\\}").join(c).split("\\,").join(s).split("\\.").join(l)}function u(e){return e.split(r).join("\\").split(o).join("{").split(c).join("}").split(s).join(",").split(l).join(".")}function p(e){if(!e)return[""]
var t=[]
var n=i("{","}",e)
if(!n)return e.split(",")
var a=n.pre
var r=n.body
var o=n.post
var c=a.split(",")
c[c.length-1]+="{"+r+"}"
var s=p(o)
if(o.length){c[c.length-1]+=s.shift()
c.push.apply(c,s)}t.push.apply(t,c)
return t}function h(e){if(!e)return[]
"{}"===e.substr(0,2)&&(e="\\{\\}"+e.substr(2))
return O(f(e),true).map(u)}function b(e){return"{"+e+"}"}function m(e){return/^-?0\d/.test(e)}function g(e,t){return e<=t}function v(e,t){return e>=t}function O(e,t){var n=[]
var r=i("{","}",e)
if(!r||/\$$/.test(r.pre))return[e]
var o=/^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(r.body)
var s=/^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(r.body)
var l=o||s
var f=r.body.indexOf(",")>=0
if(!l&&!f){if(r.post.match(/,.*\}/)){e=r.pre+"{"+r.body+c+r.post
return O(e)}return[e]}var u
if(l)u=r.body.split(/\.\./)
else{u=p(r.body)
if(1===u.length){u=O(u[0],false).map(b)
if(1===u.length){var h=r.post.length?O(r.post,false):[""]
return h.map((function(e){return r.pre+u[0]+e}))}}}var _=r.pre
h=r.post.length?O(r.post,false):[""]
var y
if(l){var T=d(u[0])
var B=d(u[1])
var C=Math.max(u[0].length,u[1].length)
var k=3==u.length?Math.abs(d(u[2])):1
var w=g
var I=B<T
if(I){k*=-1
w=v}var S=u.some(m)
y=[]
for(var j=T;w(j,B);j+=k){var x
if(s){x=String.fromCharCode(j)
"\\"===x&&(x="")}else{x=String(j)
if(S){var M=C-x.length
if(M>0){var z=new Array(M+1).join("0")
x=j<0?"-"+z+x.slice(1):z+x}}}y.push(x)}}else y=a(u,(function(e){return O(e,false)}))
for(var E=0;E<y.length;E++)for(var W=0;W<h.length;W++){var F=_+y[E]+h[W];(!t||l||F)&&n.push(F)}return n}},"XGn+":function(e,t,n){"use strict"
t["a"]=function(e){if(!e)return[]
const t={}
e.split(",").map(e=>e.split("; ")).forEach(e=>{const n=e[0].substring(1,e[0].length-1)
let a=e[1].split("=")
a=a[1]
a=a.substring(1,a.length-1)
t[a]=n})
return t}},cClk:function(e,t,n){"use strict"
n.d(t,"a",(function(){return a}))
function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"onChange"
var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"defaultValue"
return function(a,i,r){var o=e.apply(null,arguments)
if(o)return o
if(a[i]&&"function"!==typeof a[t])return new Error(["You provided a '".concat(i,"' prop without an '").concat(t,"' handler on '").concat(r,"'. This will render a controlled component. If the component should be uncontrolled and manage its own state, use '").concat(n,"'. Otherwise, set '").concat(t,"'.")].join(""))}}},eAd9:function(e,t,n){(function(t){var n=false
var a
var i
function r(){if("undefined"!==typeof a)return a
var e=document.documentElement
var t=document.createElement("div")
t.setAttribute("style","width:99px;height:99px;position:absolute;top:-9999px;overflow:scroll;")
e.appendChild(t)
a=t.offsetWidth-t.clientWidth
e.removeChild(t)
return a}function o(){return document.documentElement.scrollHeight>window.innerHeight}function c(e){if("undefined"===typeof document||n)return
var t=document.documentElement
i=window.pageYOffset
o()?t.style.width="calc(100% - "+r()+"px)":t.style.width="100%"
t.style.position="fixed"
t.style.top=-i+"px"
t.style.overflow="hidden"
n=true}function s(){if("undefined"===typeof document||!n)return
var e=document.documentElement
e.style.width=""
e.style.position=""
e.style.top=""
e.style.overflow=""
window.scroll(0,i)
n=false}function l(){if(n){s()
return}c()}var d={on:c,off:s,toggle:l}
"undefined"!==typeof e.exports?e.exports=d:t.noScroll=d})(this)},icBU:function(e,t){e.exports=function(e,t){var a=[]
for(var i=0;i<e.length;i++){var r=t(e[i],i)
n(r)?a.push.apply(a,r):a.push(r)}return a}
var n=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},kbA8:function(e,t,n){"use strict"
e.exports=a
function a(e,t,n){e instanceof RegExp&&(e=i(e,n))
t instanceof RegExp&&(t=i(t,n))
var a=r(e,t,n)
return a&&{start:a[0],end:a[1],pre:n.slice(0,a[0]),body:n.slice(a[0]+e.length,a[1]),post:n.slice(a[1]+t.length)}}function i(e,t){var n=t.match(e)
return n?n[0]:null}a.range=r
function r(e,t,n){var a,i,r,o,c
var s=n.indexOf(e)
var l=n.indexOf(t,s+1)
var d=s
if(s>=0&&l>0){a=[]
r=n.length
while(d>=0&&!c){if(d==s){a.push(d)
s=n.indexOf(e,d+1)}else if(1==a.length)c=[a.pop(),l]
else{i=a.pop()
if(i<r){r=i
o=l}l=n.indexOf(t,d+1)}d=s<l&&s>=0?s:l}a.length&&(c=[r,o])}return c}},yE80:function(e,t,n){"use strict"
var a=n("pQTu")
t["a"]={strings(e,t){let n=a["default"].locale||"en-US"
const i={zh_Hant:"zh-Hant"}
n=i[n]||n
return e.localeCompare(t,n,{sensitivity:"variant",ignorePunctuation:false,numeric:true})},by(e){return(t,n)=>this.strings(e(t),e(n))},byKey(e){return this.by(t=>t[e])},byGet(e){return this.by(t=>t.get(e))}}},ysUD:function(e,t,n){"use strict"
var a=n("VTBJ")
var i=n("rePB")
var r=n("1OyB")
var o=n("vuIU")
var c=n("md7G")
var s=n("foSv")
var l=n("Ji7U")
var d=n("q1tI")
var f=n.n(d)
var u=n("17x9")
var p=n.n(u)
var h=n("TSYQ")
var b=n.n(h)
var m=n("eAd9")
var g=n.n(m)
var v=n("J2CL")
var O=n("sQ3t")
var _=n("jtGx")
function y(e){var t=e.colors,n=e.borders,a=e.stacking
return{zIndex:a.topmost,background:"rgba(255, 255, 255, 0.75)",borderColor:"transparent",focusBorderColor:t.borderBrand,borderRadius:n.radiusMedium,borderWidth:n.widthSmall}}y.canvas=function(e){return{focusBorderColor:e["ic-brand-primary"]}}
n.d(t,"a",(function(){return I}))
var T,B,C,k
var w={componentId:"fvvQs",template:function(e){return"\n\n.fvvQs_bGBk{background:".concat(e.background||"inherit",";border:").concat(e.borderWidth||"inherit"," solid ").concat(e.borderColor||"inherit",";border-radius:").concat(e.borderRadius||"inherit",";bottom:0;box-sizing:border-box;display:flex;justify-content:center;left:0;outline:none;overflow:auto;position:absolute;right:0;top:0;z-index:").concat(e.zIndex||"inherit","}\n\n.fvvQs_bGBk:focus{border-color:").concat(e.focusBorderColor||"inherit","}\n\n.fvvQs_cMOR{position:fixed}\n\n.fvvQs_dacV{align-items:flex-start}\n\n.fvvQs_cwzs{align-items:center}\n\n.fvvQs_cGWj{align-items:flex-end}\n\n.fvvQs_eFiI{align-items:stretch}")},root:"fvvQs_bGBk",fullscreen:"fvvQs_cMOR",top:"fvvQs_dacV",center:"fvvQs_cwzs",bottom:"fvvQs_cGWj",stretch:"fvvQs_eFiI"}
var I=(T=Object(v["i"])(y,w),T(B=(k=C=function(e){Object(l["a"])(t,e)
function t(){var e
var n
Object(r["a"])(this,t)
for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o]
n=Object(c["a"])(this,(e=Object(s["a"])(t)).call.apply(e,[this].concat(i)))
n.handleElementRef=function(e){n.props.elementRef(e)}
n.contentRef=function(e){n._content=e}
return n}Object(o["a"])(t,[{key:"componentDidMount",value:function(){this.props.fullscreen&&g.a.on()}},{key:"componentWillUnmount",value:function(){this.props.fullscreen&&g.a.off()}},{key:"render",value:function(){var e
var n=Object(O["a"])(this.props.children,{ref:this.contentRef})
var r=b()((e={},Object(i["a"])(e,w.root,true),Object(i["a"])(e,w[this.props.placement],true),Object(i["a"])(e,w.fullscreen,this.props.fullscreen),e))
var o=Object(a["a"])({},Object(_["a"])(this.props,t.propTypes),{className:r,ref:this.handleElementRef})
if("function"===typeof this.props.onClick){o.onClick=this.props.onClick
o.tabIndex=-1}return f.a.createElement("span",o,n)}}])
t.displayName="Mask"
return t}(d["Component"]),C.propTypes={onDismiss:p.a.func,placement:p.a.oneOf(["top","center","bottom","stretch"]),fullscreen:p.a.bool,children:p.a.node,onClick:p.a.func,elementRef:p.a.func},C.defaultProps={placement:"center",fullscreen:false,onDismiss:void 0,children:null,onClick:void 0,elementRef:function(e){}},k))||B)}}])

//# sourceMappingURL=115-c-331735bb6d.js.map