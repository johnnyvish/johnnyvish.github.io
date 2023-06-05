(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Do="152",jh=0,ul=1,$h=2,su=1,Qh=2,Dn=3,$n=0,De=1,Nn=2,Jn=0,Ki=1,Fs=2,hl=3,fl=4,tf=5,Xi=100,ef=101,nf=102,dl=103,pl=104,rf=200,sf=201,af=202,of=203,au=204,ou=205,lf=206,cf=207,uf=208,hf=209,ff=210,df=0,pf=1,mf=2,no=3,_f=4,gf=5,vf=6,xf=7,Uo=0,Mf=1,yf=2,On=0,Sf=1,Ef=2,Tf=3,bf=4,wf=5,lu=300,ir=301,rr=302,io=303,ro=304,Zs=306,so=1e3,fn=1001,ao=1002,ge=1003,ml=1004,oa=1005,Qe=1006,Af=1007,Nr=1008,Ei=1009,Rf=1010,Cf=1011,cu=1012,Pf=1013,pi=1014,mi=1015,Fr=1016,Lf=1017,Df=1018,ji=1020,Uf=1021,We=1023,If=1024,Nf=1025,gi=1026,sr=1027,Ff=1028,Of=1029,zf=1030,Bf=1031,Gf=1033,la=33776,ca=33777,ua=33778,ha=33779,_l=35840,gl=35841,vl=35842,xl=35843,kf=36196,Ml=37492,yl=37496,Sl=37808,El=37809,Tl=37810,bl=37811,wl=37812,Al=37813,Rl=37814,Cl=37815,Pl=37816,Ll=37817,Dl=37818,Ul=37819,Il=37820,Nl=37821,fa=36492,Hf=36283,Fl=36284,Ol=36285,zl=36286,uu=3e3,vi=3001,Vf=3200,Wf=3201,hu=0,Xf=1,xi="",Dt="srgb",Sn="srgb-linear",fu="display-p3",da=7680,qf=519,oo=35044,Bl="300 es",lo=1035;class pr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,t);t.target=null}}}const Se=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Gl=1234567;const Ar=Math.PI/180,Or=180/Math.PI;function Mn(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Se[r&255]+Se[r>>8&255]+Se[r>>16&255]+Se[r>>24&255]+"-"+Se[t&255]+Se[t>>8&255]+"-"+Se[t>>16&15|64]+Se[t>>24&255]+"-"+Se[e&63|128]+Se[e>>8&255]+"-"+Se[e>>16&255]+Se[e>>24&255]+Se[n&255]+Se[n>>8&255]+Se[n>>16&255]+Se[n>>24&255]).toLowerCase()}function ve(r,t,e){return Math.max(t,Math.min(e,r))}function Io(r,t){return(r%t+t)%t}function Yf(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function Zf(r,t,e){return r!==t?(e-r)/(t-r):0}function Rr(r,t,e){return(1-e)*r+e*t}function Jf(r,t,e,n){return Rr(r,t,1-Math.exp(-e*n))}function Kf(r,t=1){return t-Math.abs(Io(r,t*2)-t)}function jf(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function $f(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function Qf(r,t){return r+Math.floor(Math.random()*(t-r+1))}function td(r,t){return r+Math.random()*(t-r)}function ed(r){return r*(.5-Math.random())}function nd(r){r!==void 0&&(Gl=r);let t=Gl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function id(r){return r*Ar}function rd(r){return r*Or}function co(r){return(r&r-1)===0&&r!==0}function sd(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function du(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function ad(r,t,e,n,i){const s=Math.cos,a=Math.sin,o=s(e/2),l=a(e/2),c=s((t+n)/2),u=a((t+n)/2),h=s((t-n)/2),f=a((t-n)/2),p=s((n-t)/2),g=a((n-t)/2);switch(i){case"XYX":r.set(o*u,l*h,l*f,o*c);break;case"YZY":r.set(l*f,o*u,l*h,o*c);break;case"ZXZ":r.set(l*h,l*f,o*u,o*c);break;case"XZX":r.set(o*u,l*g,l*p,o*c);break;case"YXY":r.set(l*p,o*u,l*g,o*c);break;case"ZYZ":r.set(l*g,l*p,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Fn(r,t){switch(t.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Kt(r,t){switch(t.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const pa={DEG2RAD:Ar,RAD2DEG:Or,generateUUID:Mn,clamp:ve,euclideanModulo:Io,mapLinear:Yf,inverseLerp:Zf,lerp:Rr,damp:Jf,pingpong:Kf,smoothstep:jf,smootherstep:$f,randInt:Qf,randFloat:td,randFloatSpread:ed,seededRandom:nd,degToRad:id,radToDeg:rd,isPowerOfTwo:co,ceilPowerOfTwo:sd,floorPowerOfTwo:du,setQuaternionFromProperEuler:ad,normalize:Kt,denormalize:Fn};class lt{constructor(t=0,e=0){lt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*i+t.x,this.y=s*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Gt{constructor(){Gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,n,i,s,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=o,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],p=n[5],g=n[8],_=i[0],m=i[3],d=i[6],y=i[1],x=i[4],M=i[7],S=i[2],T=i[5],A=i[8];return s[0]=a*_+o*y+l*S,s[3]=a*m+o*x+l*T,s[6]=a*d+o*M+l*A,s[1]=c*_+u*y+h*S,s[4]=c*m+u*x+h*T,s[7]=c*d+u*M+h*A,s[2]=f*_+p*y+g*S,s[5]=f*m+p*x+g*T,s[8]=f*d+p*M+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=u*a-o*c,f=o*l-u*s,p=c*s-a*l,g=e*h+n*f+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(i*c-u*n)*_,t[2]=(o*n-i*a)*_,t[3]=f*_,t[4]=(u*e-i*l)*_,t[5]=(i*s-o*e)*_,t[6]=p*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ma.makeScale(t,e)),this}rotate(t){return this.premultiply(ma.makeRotation(-t)),this}translate(t,e){return this.premultiply(ma.makeTranslation(t,e)),this}makeTranslation(t,e){return this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ma=new Gt;function pu(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function zr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}const kl={};function Cr(r){r in kl||(kl[r]=!0,console.warn(r))}function $i(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function _a(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const od=new Gt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),ld=new Gt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function cd(r){return r.convertSRGBToLinear().applyMatrix3(ld)}function ud(r){return r.applyMatrix3(od).convertLinearToSRGB()}const hd={[Sn]:r=>r,[Dt]:r=>r.convertSRGBToLinear(),[fu]:cd},fd={[Sn]:r=>r,[Dt]:r=>r.convertLinearToSRGB(),[fu]:ud},on={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return Sn},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;const n=hd[t],i=fd[e];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${t}" to "${e}".`);return i(n(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this.workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this.workingColorSpace)}};let Ri;class mu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ri===void 0&&(Ri=zr("canvas")),Ri.width=t.width,Ri.height=t.height;const n=Ri.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ri}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=zr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=$i(s[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor($i(e[n]/255)*255):e[n]=$i(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class _u{constructor(t=null){this.isSource=!0,this.uuid=Mn(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(ga(i[a].image)):s.push(ga(i[a]))}else s=ga(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function ga(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?mu.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let dd=0;class Ue extends pr{constructor(t=Ue.DEFAULT_IMAGE,e=Ue.DEFAULT_MAPPING,n=fn,i=fn,s=Qe,a=Nr,o=We,l=Ei,c=Ue.DEFAULT_ANISOTROPY,u=xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dd++}),this.uuid=Mn(),this.name="",this.source=new _u(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Cr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===vi?Dt:xi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==lu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case so:t.x=t.x-Math.floor(t.x);break;case fn:t.x=t.x<0?0:1;break;case ao:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case so:t.y=t.y-Math.floor(t.y);break;case fn:t.y=t.y<0?0:1;break;case ao:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Cr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Dt?vi:uu}set encoding(t){Cr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===vi?Dt:xi}}Ue.DEFAULT_IMAGE=null;Ue.DEFAULT_MAPPING=lu;Ue.DEFAULT_ANISOTROPY=1;class $t{constructor(t=0,e=0,n=0,i=1){$t.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],g=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,M=(p+1)/2,S=(d+1)/2,T=(u+f)/4,A=(h+_)/4,C=(g+m)/4;return x>M&&x>S?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=T/n,s=A/n):M>S?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=T/i,s=C/i):S<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(S),n=A/s,i=C/s),this.set(n,i,s,e),this}let y=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(h-_)/y,this.z=(f-u)/y,this.w=Math.acos((c+p+d-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ti extends pr{constructor(t=1,e=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new $t(0,0,t,e),this.scissorTest=!1,this.viewport=new $t(0,0,t,e);const i={width:t,height:e,depth:1};n.encoding!==void 0&&(Cr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===vi?Dt:xi),this.texture=new Ue(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Qe,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new _u(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gu extends Ue{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ge,this.minFilter=ge,this.wrapR=fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pd extends Ue{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ge,this.minFilter=ge,this.wrapR=fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $r{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=s[a+0],p=s[a+1],g=s[a+2],_=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(o===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(h!==_||l!==f||c!==p||u!==g){let m=1-o;const d=l*f+c*p+u*g+h*_,y=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){const S=Math.sqrt(x),T=Math.atan2(S,d*y);m=Math.sin(m*T)/S,o=Math.sin(o*T)/S}const M=o*y;if(l=l*m+f*M,c=c*m+p*M,u=u*m+g*M,h=h*m+_*M,m===1-o){const S=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=S,c*=S,u*=S,h*=S}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[a],f=s[a+1],p=s[a+2],g=s[a+3];return t[e]=o*g+u*h+l*p-c*f,t[e+1]=l*g+u*f+c*h-o*p,t[e+2]=c*g+u*p+o*f-l*h,t[e+3]=u*g-o*h-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,i=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(s/2),f=l(n/2),p=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"YZX":this._x=f*u*h+c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h-f*p*g;break;case"XZY":this._x=f*u*h-c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=n+o+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-i)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(s+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(s-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(a-i)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ve(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*s+e*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,n=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Hl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Hl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=l*e+a*i-o*n,u=l*n+o*e-s*i,h=l*i+s*n-a*e,f=-s*e-a*n-o*i;return this.x=c*l+f*-s+u*-o-h*-a,this.y=u*l+f*-a+h*-s-c*-o,this.z=h*l+f*-o+c*-a-u*-s,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return va.copy(this).projectOnVector(t),this.sub(va)}reflect(t){return this.sub(va.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const va=new P,Hl=new $r;class Qr{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(wn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(wn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=wn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){if(t.updateWorldMatrix(!1,!1),t.boundingBox!==void 0)t.boundingBox===null&&t.computeBoundingBox(),Ci.copy(t.boundingBox),Ci.applyMatrix4(t.matrixWorld),this.union(Ci);else{const i=t.geometry;if(i!==void 0)if(e&&i.attributes!==void 0&&i.attributes.position!==void 0){const s=i.attributes.position;for(let a=0,o=s.count;a<o;a++)wn.fromBufferAttribute(s,a).applyMatrix4(t.matrixWorld),this.expandByPoint(wn)}else i.boundingBox===null&&i.computeBoundingBox(),Ci.copy(i.boundingBox),Ci.applyMatrix4(t.matrixWorld),this.union(Ci)}const n=t.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,wn),wn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(vr),is.subVectors(this.max,vr),Pi.subVectors(t.a,vr),Li.subVectors(t.b,vr),Di.subVectors(t.c,vr),Hn.subVectors(Li,Pi),Vn.subVectors(Di,Li),si.subVectors(Pi,Di);let e=[0,-Hn.z,Hn.y,0,-Vn.z,Vn.y,0,-si.z,si.y,Hn.z,0,-Hn.x,Vn.z,0,-Vn.x,si.z,0,-si.x,-Hn.y,Hn.x,0,-Vn.y,Vn.x,0,-si.y,si.x,0];return!xa(e,Pi,Li,Di,is)||(e=[1,0,0,0,1,0,0,0,1],!xa(e,Pi,Li,Di,is))?!1:(rs.crossVectors(Hn,Vn),e=[rs.x,rs.y,rs.z],xa(e,Pi,Li,Di,is))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,wn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(wn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(bn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const bn=[new P,new P,new P,new P,new P,new P,new P,new P],wn=new P,Ci=new Qr,Pi=new P,Li=new P,Di=new P,Hn=new P,Vn=new P,si=new P,vr=new P,is=new P,rs=new P,ai=new P;function xa(r,t,e,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){ai.fromArray(r,s);const o=i.x*Math.abs(ai.x)+i.y*Math.abs(ai.y)+i.z*Math.abs(ai.z),l=t.dot(ai),c=e.dot(ai),u=n.dot(ai);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const md=new Qr,xr=new P,Ma=new P;class Js{constructor(t=new P,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):md.setFromPoints(t).getCenter(n);let i=0;for(let s=0,a=t.length;s<a;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;xr.subVectors(t,this.center);const e=xr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(xr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ma.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(xr.copy(t.center).add(Ma)),this.expandByPoint(xr.copy(t.center).sub(Ma))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const An=new P,ya=new P,ss=new P,Wn=new P,Sa=new P,as=new P,Ea=new P;class vu{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,An)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=An.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(An.copy(this.origin).addScaledVector(this.direction,e),An.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){ya.copy(t).add(e).multiplyScalar(.5),ss.copy(e).sub(t).normalize(),Wn.copy(this.origin).sub(ya);const s=t.distanceTo(e)*.5,a=-this.direction.dot(ss),o=Wn.dot(this.direction),l=-Wn.dot(ss),c=Wn.lengthSq(),u=Math.abs(1-a*a);let h,f,p,g;if(u>0)if(h=a*l-o,f=a*o-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,p=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(ya).addScaledVector(ss,f),p}intersectSphere(t,e){An.subVectors(t.center,this.origin);const n=An.dot(this.direction),i=An.dot(An)-n*n,s=t.radius*t.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),u>=0?(s=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(s=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),h>=0?(o=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(o=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,An)!==null}intersectTriangle(t,e,n,i,s){Sa.subVectors(e,t),as.subVectors(n,t),Ea.crossVectors(Sa,as);let a=this.direction.dot(Ea),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Wn.subVectors(this.origin,t);const l=o*this.direction.dot(as.crossVectors(Wn,as));if(l<0)return null;const c=o*this.direction.dot(Sa.cross(Wn));if(c<0||l+c>a)return null;const u=-o*Wn.dot(Ea);return u<0?null:this.at(u/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class re{constructor(){re.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,n,i,s,a,o,l,c,u,h,f,p,g,_,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=i,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new re().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Ui.setFromMatrixColumn(t,0).length(),s=1/Ui.setFromMatrixColumn(t,1).length(),a=1/Ui.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const f=a*u,p=a*h,g=o*u,_=o*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=p+g*c,e[5]=f-_*c,e[9]=-o*l,e[2]=_-f*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*u,p=l*h,g=c*u,_=c*h;e[0]=f+_*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=p*o-g,e[6]=_+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*u,p=l*h,g=c*u,_=c*h;e[0]=f-_*o,e[4]=-a*h,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*u,e[9]=_-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*u,p=a*h,g=o*u,_=o*h;e[0]=l*u,e[4]=g*c-p,e[8]=f*c+_,e[1]=l*h,e[5]=_*c+f,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,p=a*c,g=o*l,_=o*c;e[0]=l*u,e[4]=_-f*h,e[8]=g*h+p,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=p*h+g,e[10]=f-_*h}else if(t.order==="XZY"){const f=a*l,p=a*c,g=o*l,_=o*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+_,e[5]=a*u,e[9]=p*h-g,e[2]=g*h-p,e[6]=o*u,e[10]=_*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(_d,t,gd)}lookAt(t,e,n){const i=this.elements;return Ge.subVectors(t,e),Ge.lengthSq()===0&&(Ge.z=1),Ge.normalize(),Xn.crossVectors(n,Ge),Xn.lengthSq()===0&&(Math.abs(n.z)===1?Ge.x+=1e-4:Ge.z+=1e-4,Ge.normalize(),Xn.crossVectors(n,Ge)),Xn.normalize(),os.crossVectors(Ge,Xn),i[0]=Xn.x,i[4]=os.x,i[8]=Ge.x,i[1]=Xn.y,i[5]=os.y,i[9]=Ge.y,i[2]=Xn.z,i[6]=os.z,i[10]=Ge.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],p=n[13],g=n[2],_=n[6],m=n[10],d=n[14],y=n[3],x=n[7],M=n[11],S=n[15],T=i[0],A=i[4],C=i[8],v=i[12],w=i[1],z=i[5],H=i[9],U=i[13],I=i[2],F=i[6],q=i[10],G=i[14],V=i[3],tt=i[7],j=i[11],dt=i[15];return s[0]=a*T+o*w+l*I+c*V,s[4]=a*A+o*z+l*F+c*tt,s[8]=a*C+o*H+l*q+c*j,s[12]=a*v+o*U+l*G+c*dt,s[1]=u*T+h*w+f*I+p*V,s[5]=u*A+h*z+f*F+p*tt,s[9]=u*C+h*H+f*q+p*j,s[13]=u*v+h*U+f*G+p*dt,s[2]=g*T+_*w+m*I+d*V,s[6]=g*A+_*z+m*F+d*tt,s[10]=g*C+_*H+m*q+d*j,s[14]=g*v+_*U+m*G+d*dt,s[3]=y*T+x*w+M*I+S*V,s[7]=y*A+x*z+M*F+S*tt,s[11]=y*C+x*H+M*q+S*j,s[15]=y*v+x*U+M*G+S*dt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],p=t[14],g=t[3],_=t[7],m=t[11],d=t[15];return g*(+s*l*h-i*c*h-s*o*f+n*c*f+i*o*p-n*l*p)+_*(+e*l*p-e*c*f+s*a*f-i*a*p+i*c*u-s*l*u)+m*(+e*c*h-e*o*p-s*a*h+n*a*p+s*o*u-n*c*u)+d*(-i*o*u-e*l*h+e*o*f+i*a*h-n*a*f+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],p=t[11],g=t[12],_=t[13],m=t[14],d=t[15],y=h*m*c-_*f*c+_*l*p-o*m*p-h*l*d+o*f*d,x=g*f*c-u*m*c-g*l*p+a*m*p+u*l*d-a*f*d,M=u*_*c-g*h*c+g*o*p-a*_*p-u*o*d+a*h*d,S=g*h*l-u*_*l-g*o*f+a*_*f+u*o*m-a*h*m,T=e*y+n*x+i*M+s*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return t[0]=y*A,t[1]=(_*f*s-h*m*s-_*i*p+n*m*p+h*i*d-n*f*d)*A,t[2]=(o*m*s-_*l*s+_*i*c-n*m*c-o*i*d+n*l*d)*A,t[3]=(h*l*s-o*f*s-h*i*c+n*f*c+o*i*p-n*l*p)*A,t[4]=x*A,t[5]=(u*m*s-g*f*s+g*i*p-e*m*p-u*i*d+e*f*d)*A,t[6]=(g*l*s-a*m*s-g*i*c+e*m*c+a*i*d-e*l*d)*A,t[7]=(a*f*s-u*l*s+u*i*c-e*f*c-a*i*p+e*l*p)*A,t[8]=M*A,t[9]=(g*h*s-u*_*s-g*n*p+e*_*p+u*n*d-e*h*d)*A,t[10]=(a*_*s-g*o*s+g*n*c-e*_*c-a*n*d+e*o*d)*A,t[11]=(u*o*s-a*h*s-u*n*c+e*h*c+a*n*p-e*o*p)*A,t[12]=S*A,t[13]=(u*_*i-g*h*i+g*n*f-e*_*f-u*n*m+e*h*m)*A,t[14]=(g*o*i-a*_*i-g*n*l+e*_*l+a*n*m-e*o*m)*A,t[15]=(a*h*i-u*o*i+u*n*l-e*h*l-a*n*f+e*o*f)*A,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,a){return this.set(1,n,s,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,u=a+a,h=o+o,f=s*c,p=s*u,g=s*h,_=a*u,m=a*h,d=o*h,y=l*c,x=l*u,M=l*h,S=n.x,T=n.y,A=n.z;return i[0]=(1-(_+d))*S,i[1]=(p+M)*S,i[2]=(g-x)*S,i[3]=0,i[4]=(p-M)*T,i[5]=(1-(f+d))*T,i[6]=(m+y)*T,i[7]=0,i[8]=(g+x)*A,i[9]=(m-y)*A,i[10]=(1-(f+_))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=Ui.set(i[0],i[1],i[2]).length();const a=Ui.set(i[4],i[5],i[6]).length(),o=Ui.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],ln.copy(this);const c=1/s,u=1/a,h=1/o;return ln.elements[0]*=c,ln.elements[1]*=c,ln.elements[2]*=c,ln.elements[4]*=u,ln.elements[5]*=u,ln.elements[6]*=u,ln.elements[8]*=h,ln.elements[9]*=h,ln.elements[10]*=h,e.setFromRotationMatrix(ln),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,i,s,a){const o=this.elements,l=2*s/(e-t),c=2*s/(n-i),u=(e+t)/(e-t),h=(n+i)/(n-i),f=-(a+s)/(a-s),p=-2*a*s/(a-s);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=h,o[13]=0,o[2]=0,o[6]=0,o[10]=f,o[14]=p,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(t,e,n,i,s,a){const o=this.elements,l=1/(e-t),c=1/(n-i),u=1/(a-s),h=(e+t)*l,f=(n+i)*c,p=(a+s)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-h,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-f,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-p,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ui=new P,ln=new re,_d=new P(0,0,0),gd=new P(1,1,1),Xn=new P,os=new P,Ge=new P,Vl=new re,Wl=new $r;class Ks{constructor(t=0,e=0,n=0,i=Ks.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ve(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(ve(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ve(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ve(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Vl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Vl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Wl.setFromEuler(this),this.setFromQuaternion(Wl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ks.DEFAULT_ORDER="XYZ";class xu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let vd=0;const Xl=new P,Ii=new $r,Rn=new re,ls=new P,Mr=new P,xd=new P,Md=new $r,ql=new P(1,0,0),Yl=new P(0,1,0),Zl=new P(0,0,1),yd={type:"added"},Jl={type:"removed"};class Me extends pr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vd++}),this.uuid=Mn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Me.DEFAULT_UP.clone();const t=new P,e=new Ks,n=new $r,i=new P(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new re},normalMatrix:{value:new Gt}}),this.matrix=new re,this.matrixWorld=new re,this.matrixAutoUpdate=Me.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new xu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ii.setFromAxisAngle(t,e),this.quaternion.multiply(Ii),this}rotateOnWorldAxis(t,e){return Ii.setFromAxisAngle(t,e),this.quaternion.premultiply(Ii),this}rotateX(t){return this.rotateOnAxis(ql,t)}rotateY(t){return this.rotateOnAxis(Yl,t)}rotateZ(t){return this.rotateOnAxis(Zl,t)}translateOnAxis(t,e){return Xl.copy(t).applyQuaternion(this.quaternion),this.position.add(Xl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ql,t)}translateY(t){return this.translateOnAxis(Yl,t)}translateZ(t){return this.translateOnAxis(Zl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Rn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ls.copy(t):ls.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Rn.lookAt(Mr,ls,this.up):Rn.lookAt(ls,Mr,this.up),this.quaternion.setFromRotationMatrix(Rn),i&&(Rn.extractRotation(i.matrixWorld),Ii.setFromRotationMatrix(Rn),this.quaternion.premultiply(Ii.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(yd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Jl)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(Jl)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),Rn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Rn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Rn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectsByProperty(t,e);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,t,xd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,Md,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++){const o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),h=a(t.shapes),f=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Me.DEFAULT_UP=new P(0,1,0);Me.DEFAULT_MATRIX_AUTO_UPDATE=!0;Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const cn=new P,Cn=new P,Ta=new P,Pn=new P,Ni=new P,Fi=new P,Kl=new P,ba=new P,wa=new P,Aa=new P;let cs=!1;class hn{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),cn.subVectors(t,e),i.cross(cn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){cn.subVectors(i,e),Cn.subVectors(n,e),Ta.subVectors(t,e);const a=cn.dot(cn),o=cn.dot(Cn),l=cn.dot(Ta),c=Cn.dot(Cn),u=Cn.dot(Ta),h=a*c-o*o;if(h===0)return s.set(-2,-1,-1);const f=1/h,p=(c*l-o*u)*f,g=(a*u-o*l)*f;return s.set(1-p-g,g,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Pn),Pn.x>=0&&Pn.y>=0&&Pn.x+Pn.y<=1}static getUV(t,e,n,i,s,a,o,l){return cs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),cs=!0),this.getInterpolation(t,e,n,i,s,a,o,l)}static getInterpolation(t,e,n,i,s,a,o,l){return this.getBarycoord(t,e,n,i,Pn),l.setScalar(0),l.addScaledVector(s,Pn.x),l.addScaledVector(a,Pn.y),l.addScaledVector(o,Pn.z),l}static isFrontFacing(t,e,n,i){return cn.subVectors(n,e),Cn.subVectors(t,e),cn.cross(Cn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return cn.subVectors(this.c,this.b),Cn.subVectors(this.a,this.b),cn.cross(Cn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return hn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return hn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,s){return cs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),cs=!0),hn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}getInterpolation(t,e,n,i,s){return hn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return hn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return hn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let a,o;Ni.subVectors(i,n),Fi.subVectors(s,n),ba.subVectors(t,n);const l=Ni.dot(ba),c=Fi.dot(ba);if(l<=0&&c<=0)return e.copy(n);wa.subVectors(t,i);const u=Ni.dot(wa),h=Fi.dot(wa);if(u>=0&&h<=u)return e.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(Ni,a);Aa.subVectors(t,s);const p=Ni.dot(Aa),g=Fi.dot(Aa);if(g>=0&&p<=g)return e.copy(s);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Fi,o);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return Kl.subVectors(s,i),o=(h-u)/(h-u+(p-g)),e.copy(i).addScaledVector(Kl,o);const d=1/(m+_+f);return a=_*d,o=f*d,e.copy(n).addScaledVector(Ni,a).addScaledVector(Fi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let Sd=0;class mr extends pr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sd++}),this.uuid=Mn(),this.name="",this.type="Material",this.blending=Ki,this.side=$n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=au,this.blendDst=ou,this.blendEquation=Xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=no,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=da,this.stencilZFail=da,this.stencilZPass=da,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ki&&(n.blending=this.blending),this.side!==$n&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=i(t.textures),a=i(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Mu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},un={h:0,s:0,l:0},us={h:0,s:0,l:0};function Ra(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class Bt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Dt){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,on.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=on.workingColorSpace){return this.r=t,this.g=e,this.b=n,on.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=on.workingColorSpace){if(t=Io(t,1),e=ve(e,0,1),n=ve(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=Ra(a,s,t+1/3),this.g=Ra(a,s,t),this.b=Ra(a,s,t-1/3)}return on.toWorkingColorSpace(this,i),this}setStyle(t,e=Dt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Dt){const n=Mu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=$i(t.r),this.g=$i(t.g),this.b=$i(t.b),this}copyLinearToSRGB(t){return this.r=_a(t.r),this.g=_a(t.g),this.b=_a(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Dt){return on.fromWorkingColorSpace(Ee.copy(this),t),Math.round(ve(Ee.r*255,0,255))*65536+Math.round(ve(Ee.g*255,0,255))*256+Math.round(ve(Ee.b*255,0,255))}getHexString(t=Dt){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=on.workingColorSpace){on.fromWorkingColorSpace(Ee.copy(this),e);const n=Ee.r,i=Ee.g,s=Ee.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=on.workingColorSpace){return on.fromWorkingColorSpace(Ee.copy(this),e),t.r=Ee.r,t.g=Ee.g,t.b=Ee.b,t}getStyle(t=Dt){on.fromWorkingColorSpace(Ee.copy(this),t);const e=Ee.r,n=Ee.g,i=Ee.b;return t!==Dt?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(un),un.h+=t,un.s+=e,un.l+=n,this.setHSL(un.h,un.s,un.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(un),t.getHSL(us);const n=Rr(un.h,us.h,e),i=Rr(un.s,us.s,e),s=Rr(un.l,us.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ee=new Bt;Bt.NAMES=Mu;class Br extends mr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Uo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ce=new P,hs=new lt;class dn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=oo,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)hs.fromBufferAttribute(this,e),hs.applyMatrix3(t),this.setXY(e,hs.x,hs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.applyMatrix3(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.applyMatrix4(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.applyNormalMatrix(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.transformDirection(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Fn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Kt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Fn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Kt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Fn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Kt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Fn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Kt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Kt(e,this.array),n=Kt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Kt(e,this.array),n=Kt(n,this.array),i=Kt(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Kt(e,this.array),n=Kt(n,this.array),i=Kt(i,this.array),s=Kt(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==oo&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class yu extends dn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Su extends dn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class qe extends dn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Ed=0;const Ke=new re,Ca=new Me,Oi=new P,ke=new Qr,yr=new Qr,me=new P;class sn extends pr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ed++}),this.uuid=Mn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(pu(t)?Su:yu)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Gt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ke.makeRotationFromQuaternion(t),this.applyMatrix4(Ke),this}rotateX(t){return Ke.makeRotationX(t),this.applyMatrix4(Ke),this}rotateY(t){return Ke.makeRotationY(t),this.applyMatrix4(Ke),this}rotateZ(t){return Ke.makeRotationZ(t),this.applyMatrix4(Ke),this}translate(t,e,n){return Ke.makeTranslation(t,e,n),this.applyMatrix4(Ke),this}scale(t,e,n){return Ke.makeScale(t,e,n),this.applyMatrix4(Ke),this}lookAt(t){return Ca.lookAt(t),Ca.updateMatrix(),this.applyMatrix4(Ca.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Oi).negate(),this.translate(Oi.x,Oi.y,Oi.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new qe(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];ke.setFromBufferAttribute(s),this.morphTargetsRelative?(me.addVectors(this.boundingBox.min,ke.min),this.boundingBox.expandByPoint(me),me.addVectors(this.boundingBox.max,ke.max),this.boundingBox.expandByPoint(me)):(this.boundingBox.expandByPoint(ke.min),this.boundingBox.expandByPoint(ke.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Js);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(ke.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];yr.setFromBufferAttribute(o),this.morphTargetsRelative?(me.addVectors(ke.min,yr.min),ke.expandByPoint(me),me.addVectors(ke.max,yr.max),ke.expandByPoint(me)):(ke.expandByPoint(yr.min),ke.expandByPoint(yr.max))}ke.getCenter(n);let i=0;for(let s=0,a=t.count;s<a;s++)me.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(me));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)me.fromBufferAttribute(o,c),l&&(Oi.fromBufferAttribute(t,c),me.add(Oi)),i=Math.max(i,n.distanceToSquared(me))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,s=e.normal.array,a=e.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let w=0;w<o;w++)c[w]=new P,u[w]=new P;const h=new P,f=new P,p=new P,g=new lt,_=new lt,m=new lt,d=new P,y=new P;function x(w,z,H){h.fromArray(i,w*3),f.fromArray(i,z*3),p.fromArray(i,H*3),g.fromArray(a,w*2),_.fromArray(a,z*2),m.fromArray(a,H*2),f.sub(h),p.sub(h),_.sub(g),m.sub(g);const U=1/(_.x*m.y-m.x*_.y);isFinite(U)&&(d.copy(f).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(U),y.copy(p).multiplyScalar(_.x).addScaledVector(f,-m.x).multiplyScalar(U),c[w].add(d),c[z].add(d),c[H].add(d),u[w].add(y),u[z].add(y),u[H].add(y))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let w=0,z=M.length;w<z;++w){const H=M[w],U=H.start,I=H.count;for(let F=U,q=U+I;F<q;F+=3)x(n[F+0],n[F+1],n[F+2])}const S=new P,T=new P,A=new P,C=new P;function v(w){A.fromArray(s,w*3),C.copy(A);const z=c[w];S.copy(z),S.sub(A.multiplyScalar(A.dot(z))).normalize(),T.crossVectors(C,z);const U=T.dot(u[w])<0?-1:1;l[w*4]=S.x,l[w*4+1]=S.y,l[w*4+2]=S.z,l[w*4+3]=U}for(let w=0,z=M.length;w<z;++w){const H=M[w],U=H.start,I=H.count;for(let F=U,q=U+I;F<q;F+=3)v(n[F+0]),v(n[F+1]),v(n[F+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new dn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const i=new P,s=new P,a=new P,o=new P,l=new P,c=new P,u=new P,h=new P;if(t)for(let f=0,p=t.count;f<p;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)i.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)me.fromBufferAttribute(t,e),me.normalize(),t.setXYZ(e,me.x,me.y,me.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*u;for(let d=0;d<u;d++)f[g++]=c[p++]}return new dn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new sn,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=t(f,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(t.data))}u.length>0&&(i[l]=u,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const jl=new re,_n=new vu,fs=new Js,$l=new P,zi=new P,Bi=new P,Gi=new P,Pa=new P,ds=new P,ps=new lt,ms=new lt,_s=new lt,Ql=new P,tc=new P,ec=new P,gs=new P,vs=new P;class be extends Me{constructor(t=new sn,e=new Br){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(s&&o){ds.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(Pa.fromBufferAttribute(h,t),a?ds.addScaledVector(Pa,u):ds.addScaledVector(Pa.sub(e),u))}e.add(ds)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),fs.copy(n.boundingSphere),fs.applyMatrix4(s),_n.copy(t.ray).recast(t.near),!(fs.containsPoint(_n.origin)===!1&&(_n.intersectSphere(fs,$l)===null||_n.origin.distanceToSquared($l)>(t.far-t.near)**2))&&(jl.copy(s).invert(),_n.copy(t.ray).applyMatrix4(jl),!(n.boundingBox!==null&&_n.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e)))}_computeIntersections(t,e){let n;const i=this.geometry,s=this.material,a=i.index,o=i.attributes.position,l=i.attributes.uv,c=i.attributes.uv1,u=i.attributes.normal,h=i.groups,f=i.drawRange;if(a!==null)if(Array.isArray(s))for(let p=0,g=h.length;p<g;p++){const _=h[p],m=s[_.materialIndex],d=Math.max(_.start,f.start),y=Math.min(a.count,Math.min(_.start+_.count,f.start+f.count));for(let x=d,M=y;x<M;x+=3){const S=a.getX(x),T=a.getX(x+1),A=a.getX(x+2);n=xs(this,m,t,_n,l,c,u,S,T,A),n&&(n.faceIndex=Math.floor(x/3),n.face.materialIndex=_.materialIndex,e.push(n))}}else{const p=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let _=p,m=g;_<m;_+=3){const d=a.getX(_),y=a.getX(_+1),x=a.getX(_+2);n=xs(this,s,t,_n,l,c,u,d,y,x),n&&(n.faceIndex=Math.floor(_/3),e.push(n))}}else if(o!==void 0)if(Array.isArray(s))for(let p=0,g=h.length;p<g;p++){const _=h[p],m=s[_.materialIndex],d=Math.max(_.start,f.start),y=Math.min(o.count,Math.min(_.start+_.count,f.start+f.count));for(let x=d,M=y;x<M;x+=3){const S=x,T=x+1,A=x+2;n=xs(this,m,t,_n,l,c,u,S,T,A),n&&(n.faceIndex=Math.floor(x/3),n.face.materialIndex=_.materialIndex,e.push(n))}}else{const p=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let _=p,m=g;_<m;_+=3){const d=_,y=_+1,x=_+2;n=xs(this,s,t,_n,l,c,u,d,y,x),n&&(n.faceIndex=Math.floor(_/3),e.push(n))}}}}function Td(r,t,e,n,i,s,a,o){let l;if(t.side===De?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,t.side===$n,o),l===null)return null;vs.copy(o),vs.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(vs);return c<e.near||c>e.far?null:{distance:c,point:vs.clone(),object:r}}function xs(r,t,e,n,i,s,a,o,l,c){r.getVertexPosition(o,zi),r.getVertexPosition(l,Bi),r.getVertexPosition(c,Gi);const u=Td(r,t,e,n,zi,Bi,Gi,gs);if(u){i&&(ps.fromBufferAttribute(i,o),ms.fromBufferAttribute(i,l),_s.fromBufferAttribute(i,c),u.uv=hn.getInterpolation(gs,zi,Bi,Gi,ps,ms,_s,new lt)),s&&(ps.fromBufferAttribute(s,o),ms.fromBufferAttribute(s,l),_s.fromBufferAttribute(s,c),u.uv1=hn.getInterpolation(gs,zi,Bi,Gi,ps,ms,_s,new lt),u.uv2=u.uv1),a&&(Ql.fromBufferAttribute(a,o),tc.fromBufferAttribute(a,l),ec.fromBufferAttribute(a,c),u.normal=hn.getInterpolation(gs,zi,Bi,Gi,Ql,tc,ec,new P),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new P,materialIndex:0};hn.getNormal(zi,Bi,Gi,h.normal),u.face=h}return u}class ts extends sn{constructor(t=1,e=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,n,e,t,a,s,0),g("z","y","x",1,-1,n,e,-t,a,s,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new qe(c,3)),this.setAttribute("normal",new qe(u,3)),this.setAttribute("uv",new qe(h,2));function g(_,m,d,y,x,M,S,T,A,C,v){const w=M/A,z=S/C,H=M/2,U=S/2,I=T/2,F=A+1,q=C+1;let G=0,V=0;const tt=new P;for(let j=0;j<q;j++){const dt=j*z-U;for(let it=0;it<F;it++){const k=it*w-H;tt[_]=k*y,tt[m]=dt*x,tt[d]=I,c.push(tt.x,tt.y,tt.z),tt[_]=0,tt[m]=0,tt[d]=T>0?1:-1,u.push(tt.x,tt.y,tt.z),h.push(it/A),h.push(1-j/C),G+=1}}for(let j=0;j<C;j++)for(let dt=0;dt<A;dt++){const it=f+dt+F*j,k=f+dt+F*(j+1),K=f+(dt+1)+F*(j+1),at=f+(dt+1)+F*j;l.push(it,k,at),l.push(k,K,at),V+=6}o.addGroup(p,V,v),p+=V,f+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ts(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ar(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Le(r){const t={};for(let e=0;e<r.length;e++){const n=ar(r[e]);for(const i in n)t[i]=n[i]}return t}function bd(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Eu(r){return r.getRenderTarget()===null?r.outputColorSpace:Sn}const wd={clone:ar,merge:Le};var Ad=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zn extends mr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ad,this.fragmentShader=Rd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ar(t.uniforms),this.uniformsGroups=bd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Tu extends Me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new re,this.projectionMatrix=new re,this.projectionMatrixInverse=new re}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ve extends Tu{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Or*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ar*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Or*2*Math.atan(Math.tan(Ar*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ar*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ki=-90,Hi=1;class Cd extends Me{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Ve(ki,Hi,t,e);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new Ve(ki,Hi,t,e);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const a=new Ve(ki,Hi,t,e);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const o=new Ve(ki,Hi,t,e);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const l=new Ve(ki,Hi,t,e);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new Ve(ki,Hi,t,e);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,a,o,l,c]=this.children,u=t.getRenderTarget(),h=t.toneMapping,f=t.xr.enabled;t.toneMapping=On,t.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,s),t.setRenderTarget(n,2),t.render(e,a),t.setRenderTarget(n,3),t.render(e,o),t.setRenderTarget(n,4),t.render(e,l),n.texture.generateMipmaps=p,t.setRenderTarget(n,5),t.render(e,c),t.setRenderTarget(u),t.toneMapping=h,t.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class bu extends Ue{constructor(t,e,n,i,s,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:ir,super(t,e,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Pd extends Ti{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(Cr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===vi?Dt:xi),this.texture=new bu(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Qe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ts(5,5,5),s=new zn({name:"CubemapFromEquirect",uniforms:ar(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:De,blending:Jn});s.uniforms.tEquirect.value=e;const a=new be(i,s),o=e.minFilter;return e.minFilter===Nr&&(e.minFilter=Qe),new Cd(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(s)}}const La=new P,Ld=new P,Dd=new Gt;class ui{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=La.subVectors(n,e).cross(Ld.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(La),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Dd.getNormalMatrix(t),i=this.coplanarPoint(La).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const oi=new Js,Ms=new P;class No{constructor(t=new ui,e=new ui,n=new ui,i=new ui,s=new ui,a=new ui){this.planes=[t,e,n,i,s,a]}set(t,e,n,i,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t){const e=this.planes,n=t.elements,i=n[0],s=n[1],a=n[2],o=n[3],l=n[4],c=n[5],u=n[6],h=n[7],f=n[8],p=n[9],g=n[10],_=n[11],m=n[12],d=n[13],y=n[14],x=n[15];return e[0].setComponents(o-i,h-l,_-f,x-m).normalize(),e[1].setComponents(o+i,h+l,_+f,x+m).normalize(),e[2].setComponents(o+s,h+c,_+p,x+d).normalize(),e[3].setComponents(o-s,h-c,_-p,x-d).normalize(),e[4].setComponents(o-a,h-u,_-g,x-y).normalize(),e[5].setComponents(o+a,h+u,_+g,x+y).normalize(),this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),oi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),oi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(oi)}intersectsSprite(t){return oi.center.set(0,0,0),oi.radius=.7071067811865476,oi.applyMatrix4(t.matrixWorld),this.intersectsSphere(oi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Ms.x=i.normal.x>0?t.max.x:t.min.x,Ms.y=i.normal.y>0?t.max.y:t.min.y,Ms.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ms)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function wu(){let r=null,t=!1,e=null,n=null;function i(s,a){e(s,a),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Ud(r,t){const e=t.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,f=c.usage,p=r.createBuffer();r.bindBuffer(u,p),r.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=r.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)g=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)g=r.SHORT;else if(h instanceof Uint32Array)g=r.UNSIGNED_INT;else if(h instanceof Int32Array)g=r.INT;else if(h instanceof Int8Array)g=r.BYTE;else if(h instanceof Uint8Array)g=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)g=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,h){const f=u.array,p=u.updateRange;r.bindBuffer(h,c),p.count===-1?r.bufferSubData(h,0,f):(e?r.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):r.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(s(h.buffer,c,u),h.version=c.version)}return{get:a,remove:o,update:l}}class Fo extends sn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=t/o,f=e/l,p=[],g=[],_=[],m=[];for(let d=0;d<u;d++){const y=d*f-a;for(let x=0;x<c;x++){const M=x*h-s;g.push(M,-y,0),_.push(0,0,1),m.push(x/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let y=0;y<o;y++){const x=y+c*d,M=y+c*(d+1),S=y+1+c*(d+1),T=y+1+c*d;p.push(x,M,T),p.push(M,S,T)}this.setIndex(p),this.setAttribute("position",new qe(g,3)),this.setAttribute("normal",new qe(_,3)),this.setAttribute("uv",new qe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fo(t.width,t.height,t.widthSegments,t.heightSegments)}}var Id=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Nd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fd=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Od=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Bd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gd="vec3 transformed = vec3( position );",kd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Vd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Wd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Xd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,qd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Kd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,$d=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Qd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,tp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ep=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,np=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ip=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ap="gl_FragColor = linearToOutputTexel( gl_FragColor );",op=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,cp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,up=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,hp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,dp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_p=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,vp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,xp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Mp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ep=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Tp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ap=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Rp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif`,Cp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Pp=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Lp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Dp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Up=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ip=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Np=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Fp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Op=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,zp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Gp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Xp=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,qp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Yp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,Zp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Jp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$p=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Qp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,tm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,em=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,im=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,sm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,am=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,om=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,um=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,fm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,dm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,pm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,mm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_m=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,gm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,xm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Mm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ym=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Em=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Tm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,bm=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wm=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Am=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Rm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Cm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Lm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Im=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Nm=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Fm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Om=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,zm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Bm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,km=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Hm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vm=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Wm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ym=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Zm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Km=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,jm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$m=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,t_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,n_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,r_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,s_=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,a_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,o_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,l_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,It={alphamap_fragment:Id,alphamap_pars_fragment:Nd,alphatest_fragment:Fd,alphatest_pars_fragment:Od,aomap_fragment:zd,aomap_pars_fragment:Bd,begin_vertex:Gd,beginnormal_vertex:kd,bsdfs:Hd,iridescence_fragment:Vd,bumpmap_pars_fragment:Wd,clipping_planes_fragment:Xd,clipping_planes_pars_fragment:qd,clipping_planes_pars_vertex:Yd,clipping_planes_vertex:Zd,color_fragment:Jd,color_pars_fragment:Kd,color_pars_vertex:jd,color_vertex:$d,common:Qd,cube_uv_reflection_fragment:tp,defaultnormal_vertex:ep,displacementmap_pars_vertex:np,displacementmap_vertex:ip,emissivemap_fragment:rp,emissivemap_pars_fragment:sp,encodings_fragment:ap,encodings_pars_fragment:op,envmap_fragment:lp,envmap_common_pars_fragment:cp,envmap_pars_fragment:up,envmap_pars_vertex:hp,envmap_physical_pars_fragment:Ep,envmap_vertex:fp,fog_vertex:dp,fog_pars_vertex:pp,fog_fragment:mp,fog_pars_fragment:_p,gradientmap_pars_fragment:gp,lightmap_fragment:vp,lightmap_pars_fragment:xp,lights_lambert_fragment:Mp,lights_lambert_pars_fragment:yp,lights_pars_begin:Sp,lights_toon_fragment:Tp,lights_toon_pars_fragment:bp,lights_phong_fragment:wp,lights_phong_pars_fragment:Ap,lights_physical_fragment:Rp,lights_physical_pars_fragment:Cp,lights_fragment_begin:Pp,lights_fragment_maps:Lp,lights_fragment_end:Dp,logdepthbuf_fragment:Up,logdepthbuf_pars_fragment:Ip,logdepthbuf_pars_vertex:Np,logdepthbuf_vertex:Fp,map_fragment:Op,map_pars_fragment:zp,map_particle_fragment:Bp,map_particle_pars_fragment:Gp,metalnessmap_fragment:kp,metalnessmap_pars_fragment:Hp,morphcolor_vertex:Vp,morphnormal_vertex:Wp,morphtarget_pars_vertex:Xp,morphtarget_vertex:qp,normal_fragment_begin:Yp,normal_fragment_maps:Zp,normal_pars_fragment:Jp,normal_pars_vertex:Kp,normal_vertex:jp,normalmap_pars_fragment:$p,clearcoat_normal_fragment_begin:Qp,clearcoat_normal_fragment_maps:tm,clearcoat_pars_fragment:em,iridescence_pars_fragment:nm,output_fragment:im,packing:rm,premultiplied_alpha_fragment:sm,project_vertex:am,dithering_fragment:om,dithering_pars_fragment:lm,roughnessmap_fragment:cm,roughnessmap_pars_fragment:um,shadowmap_pars_fragment:hm,shadowmap_pars_vertex:fm,shadowmap_vertex:dm,shadowmask_pars_fragment:pm,skinbase_vertex:mm,skinning_pars_vertex:_m,skinning_vertex:gm,skinnormal_vertex:vm,specularmap_fragment:xm,specularmap_pars_fragment:Mm,tonemapping_fragment:ym,tonemapping_pars_fragment:Sm,transmission_fragment:Em,transmission_pars_fragment:Tm,uv_pars_fragment:bm,uv_pars_vertex:wm,uv_vertex:Am,worldpos_vertex:Rm,background_vert:Cm,background_frag:Pm,backgroundCube_vert:Lm,backgroundCube_frag:Dm,cube_vert:Um,cube_frag:Im,depth_vert:Nm,depth_frag:Fm,distanceRGBA_vert:Om,distanceRGBA_frag:zm,equirect_vert:Bm,equirect_frag:Gm,linedashed_vert:km,linedashed_frag:Hm,meshbasic_vert:Vm,meshbasic_frag:Wm,meshlambert_vert:Xm,meshlambert_frag:qm,meshmatcap_vert:Ym,meshmatcap_frag:Zm,meshnormal_vert:Jm,meshnormal_frag:Km,meshphong_vert:jm,meshphong_frag:$m,meshphysical_vert:Qm,meshphysical_frag:t_,meshtoon_vert:e_,meshtoon_frag:n_,points_vert:i_,points_frag:r_,shadow_vert:s_,shadow_frag:a_,sprite_vert:o_,sprite_frag:l_},ot={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaTest:{value:0}}},gn={basic:{uniforms:Le([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:It.meshbasic_vert,fragmentShader:It.meshbasic_frag},lambert:{uniforms:Le([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Bt(0)}}]),vertexShader:It.meshlambert_vert,fragmentShader:It.meshlambert_frag},phong:{uniforms:Le([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30}}]),vertexShader:It.meshphong_vert,fragmentShader:It.meshphong_frag},standard:{uniforms:Le([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:It.meshphysical_vert,fragmentShader:It.meshphysical_frag},toon:{uniforms:Le([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new Bt(0)}}]),vertexShader:It.meshtoon_vert,fragmentShader:It.meshtoon_frag},matcap:{uniforms:Le([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:It.meshmatcap_vert,fragmentShader:It.meshmatcap_frag},points:{uniforms:Le([ot.points,ot.fog]),vertexShader:It.points_vert,fragmentShader:It.points_frag},dashed:{uniforms:Le([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:It.linedashed_vert,fragmentShader:It.linedashed_frag},depth:{uniforms:Le([ot.common,ot.displacementmap]),vertexShader:It.depth_vert,fragmentShader:It.depth_frag},normal:{uniforms:Le([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:It.meshnormal_vert,fragmentShader:It.meshnormal_frag},sprite:{uniforms:Le([ot.sprite,ot.fog]),vertexShader:It.sprite_vert,fragmentShader:It.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:It.background_vert,fragmentShader:It.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:It.backgroundCube_vert,fragmentShader:It.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:It.cube_vert,fragmentShader:It.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:It.equirect_vert,fragmentShader:It.equirect_frag},distanceRGBA:{uniforms:Le([ot.common,ot.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:It.distanceRGBA_vert,fragmentShader:It.distanceRGBA_frag},shadow:{uniforms:Le([ot.lights,ot.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:It.shadow_vert,fragmentShader:It.shadow_frag}};gn.physical={uniforms:Le([gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt}}]),vertexShader:It.meshphysical_vert,fragmentShader:It.meshphysical_frag};const ys={r:0,b:0,g:0};function c_(r,t,e,n,i,s,a){const o=new Bt(0);let l=s===!0?0:1,c,u,h=null,f=0,p=null;function g(m,d){let y=!1,x=d.isScene===!0?d.background:null;switch(x&&x.isTexture&&(x=(d.backgroundBlurriness>0?e:t).get(x)),x===null?_(o,l):x&&x.isColor&&(_(x,1),y=!0),r.xr.getEnvironmentBlendMode()){case"opaque":y=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,a),y=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,a),y=!0;break}(r.autoClear||y)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Zs)?(u===void 0&&(u=new be(new ts(1,1,1),new zn({name:"BackgroundCubeMaterial",uniforms:ar(gn.backgroundCube.uniforms),vertexShader:gn.backgroundCube.vertexShader,fragmentShader:gn.backgroundCube.fragmentShader,side:De,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=x.colorSpace!==Dt,(h!==x||f!==x.version||p!==r.toneMapping)&&(u.material.needsUpdate=!0,h=x,f=x.version,p=r.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new be(new Fo(2,2),new zn({name:"BackgroundMaterial",uniforms:ar(gn.background.uniforms),vertexShader:gn.background.vertexShader,fragmentShader:gn.background.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=x.colorSpace!==Dt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||p!==r.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,p=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,d){m.getRGB(ys,Eu(r)),n.buffers.color.setClear(ys.r,ys.g,ys.b,d,a)}return{getClearColor:function(){return o},setClearColor:function(m,d=1){o.set(m),l=d,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(o,l)},render:g}}function u_(r,t,e,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=m(null);let c=l,u=!1;function h(I,F,q,G,V){let tt=!1;if(a){const j=_(G,q,F);c!==j&&(c=j,p(c.object)),tt=d(I,G,q,V),tt&&y(I,G,q,V)}else{const j=F.wireframe===!0;(c.geometry!==G.id||c.program!==q.id||c.wireframe!==j)&&(c.geometry=G.id,c.program=q.id,c.wireframe=j,tt=!0)}V!==null&&e.update(V,r.ELEMENT_ARRAY_BUFFER),(tt||u)&&(u=!1,C(I,F,q,G),V!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function f(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function p(I){return n.isWebGL2?r.bindVertexArray(I):s.bindVertexArrayOES(I)}function g(I){return n.isWebGL2?r.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function _(I,F,q){const G=q.wireframe===!0;let V=o[I.id];V===void 0&&(V={},o[I.id]=V);let tt=V[F.id];tt===void 0&&(tt={},V[F.id]=tt);let j=tt[G];return j===void 0&&(j=m(f()),tt[G]=j),j}function m(I){const F=[],q=[],G=[];for(let V=0;V<i;V++)F[V]=0,q[V]=0,G[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:q,attributeDivisors:G,object:I,attributes:{},index:null}}function d(I,F,q,G){const V=c.attributes,tt=F.attributes;let j=0;const dt=q.getAttributes();for(const it in dt)if(dt[it].location>=0){const K=V[it];let at=tt[it];if(at===void 0&&(it==="instanceMatrix"&&I.instanceMatrix&&(at=I.instanceMatrix),it==="instanceColor"&&I.instanceColor&&(at=I.instanceColor)),K===void 0||K.attribute!==at||at&&K.data!==at.data)return!0;j++}return c.attributesNum!==j||c.index!==G}function y(I,F,q,G){const V={},tt=F.attributes;let j=0;const dt=q.getAttributes();for(const it in dt)if(dt[it].location>=0){let K=tt[it];K===void 0&&(it==="instanceMatrix"&&I.instanceMatrix&&(K=I.instanceMatrix),it==="instanceColor"&&I.instanceColor&&(K=I.instanceColor));const at={};at.attribute=K,K&&K.data&&(at.data=K.data),V[it]=at,j++}c.attributes=V,c.attributesNum=j,c.index=G}function x(){const I=c.newAttributes;for(let F=0,q=I.length;F<q;F++)I[F]=0}function M(I){S(I,0)}function S(I,F){const q=c.newAttributes,G=c.enabledAttributes,V=c.attributeDivisors;q[I]=1,G[I]===0&&(r.enableVertexAttribArray(I),G[I]=1),V[I]!==F&&((n.isWebGL2?r:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,F),V[I]=F)}function T(){const I=c.newAttributes,F=c.enabledAttributes;for(let q=0,G=F.length;q<G;q++)F[q]!==I[q]&&(r.disableVertexAttribArray(q),F[q]=0)}function A(I,F,q,G,V,tt){n.isWebGL2===!0&&(q===r.INT||q===r.UNSIGNED_INT)?r.vertexAttribIPointer(I,F,q,V,tt):r.vertexAttribPointer(I,F,q,G,V,tt)}function C(I,F,q,G){if(n.isWebGL2===!1&&(I.isInstancedMesh||G.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();const V=G.attributes,tt=q.getAttributes(),j=F.defaultAttributeValues;for(const dt in tt){const it=tt[dt];if(it.location>=0){let k=V[dt];if(k===void 0&&(dt==="instanceMatrix"&&I.instanceMatrix&&(k=I.instanceMatrix),dt==="instanceColor"&&I.instanceColor&&(k=I.instanceColor)),k!==void 0){const K=k.normalized,at=k.itemSize,ht=e.get(k);if(ht===void 0)continue;const L=ht.buffer,Ct=ht.type,Pt=ht.bytesPerElement;if(k.isInterleavedBufferAttribute){const st=k.data,vt=st.stride,$=k.offset;if(st.isInstancedInterleavedBuffer){for(let Z=0;Z<it.locationSize;Z++)S(it.location+Z,st.meshPerAttribute);I.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Z=0;Z<it.locationSize;Z++)M(it.location+Z);r.bindBuffer(r.ARRAY_BUFFER,L);for(let Z=0;Z<it.locationSize;Z++)A(it.location+Z,at/it.locationSize,Ct,K,vt*Pt,($+at/it.locationSize*Z)*Pt)}else{if(k.isInstancedBufferAttribute){for(let st=0;st<it.locationSize;st++)S(it.location+st,k.meshPerAttribute);I.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let st=0;st<it.locationSize;st++)M(it.location+st);r.bindBuffer(r.ARRAY_BUFFER,L);for(let st=0;st<it.locationSize;st++)A(it.location+st,at/it.locationSize,Ct,K,at*Pt,at/it.locationSize*st*Pt)}}else if(j!==void 0){const K=j[dt];if(K!==void 0)switch(K.length){case 2:r.vertexAttrib2fv(it.location,K);break;case 3:r.vertexAttrib3fv(it.location,K);break;case 4:r.vertexAttrib4fv(it.location,K);break;default:r.vertexAttrib1fv(it.location,K)}}}}T()}function v(){H();for(const I in o){const F=o[I];for(const q in F){const G=F[q];for(const V in G)g(G[V].object),delete G[V];delete F[q]}delete o[I]}}function w(I){if(o[I.id]===void 0)return;const F=o[I.id];for(const q in F){const G=F[q];for(const V in G)g(G[V].object),delete G[V];delete F[q]}delete o[I.id]}function z(I){for(const F in o){const q=o[F];if(q[I.id]===void 0)continue;const G=q[I.id];for(const V in G)g(G[V].object),delete G[V];delete q[I.id]}}function H(){U(),u=!0,c!==l&&(c=l,p(c.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:H,resetDefaultState:U,dispose:v,releaseStatesOfGeometry:w,releaseStatesOfProgram:z,initAttributes:x,enableAttribute:M,disableUnusedAttributes:T}}function h_(r,t,e,n){const i=n.isWebGL2;let s;function a(c){s=c}function o(c,u){r.drawArrays(s,c,u),e.update(u,s,1)}function l(c,u,h){if(h===0)return;let f,p;if(i)f=r,p="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](s,c,u,h),e.update(u,s,h)}this.setMode=a,this.render=o,this.renderInstances=l}function f_(r,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let o=e.precision!==void 0?e.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),m=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),d=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,M=a||t.has("OES_texture_float"),S=x&&M,T=a?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:y,vertexTextures:x,floatFragmentTextures:M,floatVertexTextures:S,maxSamples:T}}function d_(r){const t=this;let e=null,n=0,i=!1,s=!1;const a=new ui,o=new Gt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||n!==0||i;return i=f,n=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,p){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,d=r.get(h);if(!i||g===null||g.length===0||s&&!m)s?u(null):c();else{const y=s?0:n,x=y*4;let M=d.clippingState||null;l.value=M,M=u(g,f,x,p);for(let S=0;S!==x;++S)M[S]=e[S];d.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,p,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const d=p+_*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<d)&&(m=new Float32Array(d));for(let x=0,M=p;x!==_;++x,M+=4)a.copy(h[x]).applyMatrix4(y,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function p_(r){let t=new WeakMap;function e(a,o){return o===io?a.mapping=ir:o===ro&&(a.mapping=rr),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===io||o===ro)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Pd(l.height/2);return c.fromEquirectangularTexture(r,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Au extends Tu{constructor(t=-1,e=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const qi=4,nc=[.125,.215,.35,.446,.526,.582],di=20,Da=new Au,ic=new Bt;let Ua=null;const hi=(1+Math.sqrt(5))/2,Vi=1/hi,rc=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,hi,Vi),new P(0,hi,-Vi),new P(Vi,0,hi),new P(-Vi,0,hi),new P(hi,Vi,0),new P(-hi,Vi,0)];class sc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Ua=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=oc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ua),t.scissorTest=!1,Ss(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ir||t.mapping===rr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ua=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Qe,minFilter:Qe,generateMipmaps:!1,type:Fr,format:We,colorSpace:Sn,depthBuffer:!1},i=ac(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ac(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=m_(s)),this._blurMaterial=__(s,t,e)}return i}_compileMaterial(t){const e=new be(this._lodPlanes[0],t);this._renderer.compile(e,Da)}_sceneToCubeUV(t,e,n,i){const o=new Ve(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(ic),u.toneMapping=On,u.autoClear=!1;const p=new Br({name:"PMREM.Background",side:De,depthWrite:!1,depthTest:!1}),g=new be(new ts,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(ic),_=!0);for(let d=0;d<6;d++){const y=d%3;y===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):y===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));const x=this._cubeSize;Ss(i,y*x,d>2?x:0,x,x),u.setRenderTarget(i),_&&u.render(g,o),u.render(t,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===ir||t.mapping===rr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=lc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=oc());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new be(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;Ss(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Da)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=rc[(i-1)%rc.length];this._blur(t,i-1,i,s,a)}e.autoClear=n}_blur(t,e,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",s),this._halfBlur(a,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new be(this._lodPlanes[i],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*di-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):di;m>di&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${di}`);const d=[];let y=0;for(let A=0;A<di;++A){const C=A/_,v=Math.exp(-C*C/2);d.push(v),A===0?y+=v:A<m&&(y+=2*v)}for(let A=0;A<d.length;A++)d[A]=d[A]/y;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;const M=this._sizeLods[i],S=3*M*(i>x-qi?i-x+qi:0),T=4*(this._cubeSize-M);Ss(e,S,T,3*M,2*M),l.setRenderTarget(e),l.render(h,Da)}}function m_(r){const t=[],e=[],n=[];let i=r;const s=r-qi+1+nc.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>r-qi?l=nc[a-r+qi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,_=3,m=2,d=1,y=new Float32Array(_*g*p),x=new Float32Array(m*g*p),M=new Float32Array(d*g*p);for(let T=0;T<p;T++){const A=T%3*2/3-1,C=T>2?0:-1,v=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];y.set(v,_*g*T),x.set(f,m*g*T);const w=[T,T,T,T,T,T];M.set(w,d*g*T)}const S=new sn;S.setAttribute("position",new dn(y,_)),S.setAttribute("uv",new dn(x,m)),S.setAttribute("faceIndex",new dn(M,d)),t.push(S),i>qi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ac(r,t,e){const n=new Ti(r,t,e);return n.texture.mapping=Zs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ss(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function __(r,t,e){const n=new Float32Array(di),i=new P(0,1,0);return new zn({name:"SphericalGaussianBlur",defines:{n:di,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Oo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function oc(){return new zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function lc(){return new zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Oo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function g_(r){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===io||l===ro,u=l===ir||l===rr;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=t.get(o);return e===null&&(e=new sc(r)),h=c?e.fromEquirectangular(o,h):e.fromCubemap(o,h),t.set(o,h),h.texture}else{if(t.has(o))return t.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||u&&h&&i(h)){e===null&&(e=new sc(r));const f=c?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,f),o.addEventListener("dispose",s),f.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function v_(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function x_(r,t,e,n){const i={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete i[f.id];const p=s.get(f);p&&(t.remove(p),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(h,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)t.update(f[g],r.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const _=p[g];for(let m=0,d=_.length;m<d;m++)t.update(_[m],r.ARRAY_BUFFER)}}function c(h){const f=[],p=h.index,g=h.attributes.position;let _=0;if(p!==null){const y=p.array;_=p.version;for(let x=0,M=y.length;x<M;x+=3){const S=y[x+0],T=y[x+1],A=y[x+2];f.push(S,T,T,A,A,S)}}else{const y=g.array;_=g.version;for(let x=0,M=y.length/3-1;x<M;x+=3){const S=x+0,T=x+1,A=x+2;f.push(S,T,T,A,A,S)}}const m=new(pu(f)?Su:yu)(f,1);m.version=_;const d=s.get(h);d&&t.remove(d),s.set(h,m)}function u(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function M_(r,t,e,n){const i=n.isWebGL2;let s;function a(f){s=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function u(f,p){r.drawElements(s,p,o,f*l),e.update(p,s,1)}function h(f,p,g){if(g===0)return;let _,m;if(i)_=r,m="drawElementsInstanced";else if(_=t.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[m](s,p,o,f*l,g),e.update(p,s,g)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=h}function y_(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function S_(r,t){return r[0]-t[0]}function E_(r,t){return Math.abs(t[1])-Math.abs(r[1])}function T_(r,t,e){const n={},i=new Float32Array(8),s=new WeakMap,a=new $t,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h){const f=c.morphTargetInfluences;if(t.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let m=s.get(u);if(m===void 0||m.count!==_){let F=function(){U.dispose(),s.delete(u),u.removeEventListener("dispose",F)};var p=F;m!==void 0&&m.texture.dispose();const x=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,T=u.morphAttributes.position||[],A=u.morphAttributes.normal||[],C=u.morphAttributes.color||[];let v=0;x===!0&&(v=1),M===!0&&(v=2),S===!0&&(v=3);let w=u.attributes.position.count*v,z=1;w>t.maxTextureSize&&(z=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const H=new Float32Array(w*z*4*_),U=new gu(H,w,z,_);U.type=mi,U.needsUpdate=!0;const I=v*4;for(let q=0;q<_;q++){const G=T[q],V=A[q],tt=C[q],j=w*z*4*q;for(let dt=0;dt<G.count;dt++){const it=dt*I;x===!0&&(a.fromBufferAttribute(G,dt),H[j+it+0]=a.x,H[j+it+1]=a.y,H[j+it+2]=a.z,H[j+it+3]=0),M===!0&&(a.fromBufferAttribute(V,dt),H[j+it+4]=a.x,H[j+it+5]=a.y,H[j+it+6]=a.z,H[j+it+7]=0),S===!0&&(a.fromBufferAttribute(tt,dt),H[j+it+8]=a.x,H[j+it+9]=a.y,H[j+it+10]=a.z,H[j+it+11]=tt.itemSize===4?a.w:1)}}m={count:_,texture:U,size:new lt(w,z)},s.set(u,m),u.addEventListener("dispose",F)}let d=0;for(let x=0;x<f.length;x++)d+=f[x];const y=u.morphTargetsRelative?1:1-d;h.getUniforms().setValue(r,"morphTargetBaseInfluence",y),h.getUniforms().setValue(r,"morphTargetInfluences",f),h.getUniforms().setValue(r,"morphTargetsTexture",m.texture,e),h.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}else{const g=f===void 0?0:f.length;let _=n[u.id];if(_===void 0||_.length!==g){_=[];for(let M=0;M<g;M++)_[M]=[M,0];n[u.id]=_}for(let M=0;M<g;M++){const S=_[M];S[0]=M,S[1]=f[M]}_.sort(E_);for(let M=0;M<8;M++)M<g&&_[M][1]?(o[M][0]=_[M][0],o[M][1]=_[M][1]):(o[M][0]=Number.MAX_SAFE_INTEGER,o[M][1]=0);o.sort(S_);const m=u.morphAttributes.position,d=u.morphAttributes.normal;let y=0;for(let M=0;M<8;M++){const S=o[M],T=S[0],A=S[1];T!==Number.MAX_SAFE_INTEGER&&A?(m&&u.getAttribute("morphTarget"+M)!==m[T]&&u.setAttribute("morphTarget"+M,m[T]),d&&u.getAttribute("morphNormal"+M)!==d[T]&&u.setAttribute("morphNormal"+M,d[T]),i[M]=A,y+=A):(m&&u.hasAttribute("morphTarget"+M)===!0&&u.deleteAttribute("morphTarget"+M),d&&u.hasAttribute("morphNormal"+M)===!0&&u.deleteAttribute("morphNormal"+M),i[M]=0)}const x=u.morphTargetsRelative?1:1-y;h.getUniforms().setValue(r,"morphTargetBaseInfluence",x),h.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function b_(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);return i.get(h)!==c&&(t.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER)),h}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}const Ru=new Ue,Cu=new gu,Pu=new pd,Lu=new bu,cc=[],uc=[],hc=new Float32Array(16),fc=new Float32Array(9),dc=new Float32Array(4);function _r(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=cc[i];if(s===void 0&&(s=new Float32Array(i),cc[i]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function fe(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function de(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function js(r,t){let e=uc[t];e===void 0&&(e=new Int32Array(t),uc[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function w_(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function A_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;r.uniform2fv(this.addr,t),de(e,t)}}function R_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(fe(e,t))return;r.uniform3fv(this.addr,t),de(e,t)}}function C_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;r.uniform4fv(this.addr,t),de(e,t)}}function P_(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(fe(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),de(e,t)}else{if(fe(e,n))return;dc.set(n),r.uniformMatrix2fv(this.addr,!1,dc),de(e,n)}}function L_(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(fe(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),de(e,t)}else{if(fe(e,n))return;fc.set(n),r.uniformMatrix3fv(this.addr,!1,fc),de(e,n)}}function D_(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(fe(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),de(e,t)}else{if(fe(e,n))return;hc.set(n),r.uniformMatrix4fv(this.addr,!1,hc),de(e,n)}}function U_(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function I_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;r.uniform2iv(this.addr,t),de(e,t)}}function N_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fe(e,t))return;r.uniform3iv(this.addr,t),de(e,t)}}function F_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;r.uniform4iv(this.addr,t),de(e,t)}}function O_(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function z_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;r.uniform2uiv(this.addr,t),de(e,t)}}function B_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fe(e,t))return;r.uniform3uiv(this.addr,t),de(e,t)}}function G_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;r.uniform4uiv(this.addr,t),de(e,t)}}function k_(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||Ru,i)}function H_(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Pu,i)}function V_(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Lu,i)}function W_(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Cu,i)}function X_(r){switch(r){case 5126:return w_;case 35664:return A_;case 35665:return R_;case 35666:return C_;case 35674:return P_;case 35675:return L_;case 35676:return D_;case 5124:case 35670:return U_;case 35667:case 35671:return I_;case 35668:case 35672:return N_;case 35669:case 35673:return F_;case 5125:return O_;case 36294:return z_;case 36295:return B_;case 36296:return G_;case 35678:case 36198:case 36298:case 36306:case 35682:return k_;case 35679:case 36299:case 36307:return H_;case 35680:case 36300:case 36308:case 36293:return V_;case 36289:case 36303:case 36311:case 36292:return W_}}function q_(r,t){r.uniform1fv(this.addr,t)}function Y_(r,t){const e=_r(t,this.size,2);r.uniform2fv(this.addr,e)}function Z_(r,t){const e=_r(t,this.size,3);r.uniform3fv(this.addr,e)}function J_(r,t){const e=_r(t,this.size,4);r.uniform4fv(this.addr,e)}function K_(r,t){const e=_r(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function j_(r,t){const e=_r(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function $_(r,t){const e=_r(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function Q_(r,t){r.uniform1iv(this.addr,t)}function tg(r,t){r.uniform2iv(this.addr,t)}function eg(r,t){r.uniform3iv(this.addr,t)}function ng(r,t){r.uniform4iv(this.addr,t)}function ig(r,t){r.uniform1uiv(this.addr,t)}function rg(r,t){r.uniform2uiv(this.addr,t)}function sg(r,t){r.uniform3uiv(this.addr,t)}function ag(r,t){r.uniform4uiv(this.addr,t)}function og(r,t,e){const n=this.cache,i=t.length,s=js(e,i);fe(n,s)||(r.uniform1iv(this.addr,s),de(n,s));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||Ru,s[a])}function lg(r,t,e){const n=this.cache,i=t.length,s=js(e,i);fe(n,s)||(r.uniform1iv(this.addr,s),de(n,s));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Pu,s[a])}function cg(r,t,e){const n=this.cache,i=t.length,s=js(e,i);fe(n,s)||(r.uniform1iv(this.addr,s),de(n,s));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Lu,s[a])}function ug(r,t,e){const n=this.cache,i=t.length,s=js(e,i);fe(n,s)||(r.uniform1iv(this.addr,s),de(n,s));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Cu,s[a])}function hg(r){switch(r){case 5126:return q_;case 35664:return Y_;case 35665:return Z_;case 35666:return J_;case 35674:return K_;case 35675:return j_;case 35676:return $_;case 5124:case 35670:return Q_;case 35667:case 35671:return tg;case 35668:case 35672:return eg;case 35669:case 35673:return ng;case 5125:return ig;case 36294:return rg;case 36295:return sg;case 36296:return ag;case 35678:case 36198:case 36298:case 36306:case 35682:return og;case 35679:case 36299:case 36307:return lg;case 35680:case 36300:case 36308:case 36293:return cg;case 36289:case 36303:case 36311:case 36292:return ug}}class fg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=X_(e.type)}}class dg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=hg(e.type)}}class pg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(t,e[o.id],n)}}}const Ia=/(\w+)(\])?(\[|\.)?/g;function pc(r,t){r.seq.push(t),r.map[t.id]=t}function mg(r,t,e){const n=r.name,i=n.length;for(Ia.lastIndex=0;;){const s=Ia.exec(n),a=Ia.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){pc(e,c===void 0?new fg(o,r,t):new dg(o,r,t));break}else{let h=e.map[o];h===void 0&&(h=new pg(o),pc(e,h)),e=h}}}class Ls{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),a=t.getUniformLocation(e,s.name);mg(s,a,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function mc(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}let _g=0;function gg(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function vg(r){switch(r){case Sn:return["Linear","( value )"];case Dt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),["Linear","( value )"]}}function _c(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+gg(r.getShaderSource(t),a)}else return i}function xg(r,t){const e=vg(t);return"vec4 "+r+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function Mg(r,t){let e;switch(t){case Sf:e="Linear";break;case Ef:e="Reinhard";break;case Tf:e="OptimizedCineon";break;case bf:e="ACESFilmic";break;case wf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function yg(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Tr).join(`
`)}function Sg(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Eg(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function Tr(r){return r!==""}function gc(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function vc(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Tg=/^[ \t]*#include +<([\w\d./]+)>/gm;function uo(r){return r.replace(Tg,bg)}function bg(r,t){const e=It[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return uo(e)}const wg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xc(r){return r.replace(wg,Ag)}function Ag(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Mc(r){let t="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Rg(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===su?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Qh?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Dn&&(t="SHADOWMAP_TYPE_VSM"),t}function Cg(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ir:case rr:t="ENVMAP_TYPE_CUBE";break;case Zs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Pg(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case rr:t="ENVMAP_MODE_REFRACTION";break}return t}function Lg(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Uo:t="ENVMAP_BLENDING_MULTIPLY";break;case Mf:t="ENVMAP_BLENDING_MIX";break;case yf:t="ENVMAP_BLENDING_ADD";break}return t}function Dg(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Ug(r,t,e,n){const i=r.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Rg(e),c=Cg(e),u=Pg(e),h=Lg(e),f=Dg(e),p=e.isWebGL2?"":yg(e),g=Sg(s),_=i.createProgram();let m,d,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=[g].filter(Tr).join(`
`),m.length>0&&(m+=`
`),d=[p,g].filter(Tr).join(`
`),d.length>0&&(d+=`
`)):(m=[Mc(e),"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Tr).join(`
`),d=[p,Mc(e),"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==On?"#define TONE_MAPPING":"",e.toneMapping!==On?It.tonemapping_pars_fragment:"",e.toneMapping!==On?Mg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",It.encodings_pars_fragment,xg("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Tr).join(`
`)),a=uo(a),a=gc(a,e),a=vc(a,e),o=uo(o),o=gc(o,e),o=vc(o,e),a=xc(a),o=xc(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===Bl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Bl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const x=y+m+a,M=y+d+o,S=mc(i,i.VERTEX_SHADER,x),T=mc(i,i.FRAGMENT_SHADER,M);if(i.attachShader(_,S),i.attachShader(_,T),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_),r.debug.checkShaderErrors){const v=i.getProgramInfoLog(_).trim(),w=i.getShaderInfoLog(S).trim(),z=i.getShaderInfoLog(T).trim();let H=!0,U=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(H=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,S,T);else{const I=_c(i,S,"vertex"),F=_c(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Program Info Log: `+v+`
`+I+`
`+F)}else v!==""?console.warn("THREE.WebGLProgram: Program Info Log:",v):(w===""||z==="")&&(U=!1);U&&(this.diagnostics={runnable:H,programLog:v,vertexShader:{log:w,prefix:m},fragmentShader:{log:z,prefix:d}})}i.deleteShader(S),i.deleteShader(T);let A;this.getUniforms=function(){return A===void 0&&(A=new Ls(i,_)),A};let C;return this.getAttributes=function(){return C===void 0&&(C=Eg(i,_)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.name=e.shaderName,this.id=_g++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=T,this}let Ig=0;class Ng{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Fg(t),e.set(t,n)),n}}class Fg{constructor(t){this.id=Ig++,this.code=t,this.usedTimes=0}}function Og(r,t,e,n,i,s,a){const o=new xu,l=new Ng,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return v===1?"uv1":v===2?"uv2":v===3?"uv3":"uv"}function m(v,w,z,H,U){const I=H.fog,F=U.geometry,q=v.isMeshStandardMaterial?H.environment:null,G=(v.isMeshStandardMaterial?e:t).get(v.envMap||q),V=G&&G.mapping===Zs?G.image.height:null,tt=g[v.type];v.precision!==null&&(p=i.getMaxPrecision(v.precision),p!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));const j=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,dt=j!==void 0?j.length:0;let it=0;F.morphAttributes.position!==void 0&&(it=1),F.morphAttributes.normal!==void 0&&(it=2),F.morphAttributes.color!==void 0&&(it=3);let k,K,at,ht;if(tt){const Yt=gn[tt];k=Yt.vertexShader,K=Yt.fragmentShader}else k=v.vertexShader,K=v.fragmentShader,l.update(v),at=l.getVertexShaderID(v),ht=l.getFragmentShaderID(v);const L=r.getRenderTarget(),Ct=U.isInstancedMesh===!0,Pt=!!v.map,st=!!v.matcap,vt=!!G,$=!!v.aoMap,Z=!!v.lightMap,Q=!!v.bumpMap,mt=!!v.normalMap,ct=!!v.displacementMap,Tt=!!v.emissiveMap,bt=!!v.metalnessMap,yt=!!v.roughnessMap,Nt=v.clearcoat>0,Wt=v.iridescence>0,R=v.sheen>0,E=v.transmission>0,B=Nt&&!!v.clearcoatMap,et=Nt&&!!v.clearcoatNormalMap,rt=Nt&&!!v.clearcoatRoughnessMap,ut=Wt&&!!v.iridescenceMap,Rt=Wt&&!!v.iridescenceThicknessMap,pt=R&&!!v.sheenColorMap,Y=R&&!!v.sheenRoughnessMap,gt=!!v.specularMap,St=!!v.specularColorMap,wt=!!v.specularIntensityMap,_t=E&&!!v.transmissionMap,Mt=E&&!!v.thicknessMap,Ht=!!v.gradientMap,Xt=!!v.alphaMap,se=v.alphaTest>0,D=!!v.extensions,W=!!F.attributes.uv1,nt=!!F.attributes.uv2,ft=!!F.attributes.uv3;return{isWebGL2:u,shaderID:tt,shaderName:v.type,vertexShader:k,fragmentShader:K,defines:v.defines,customVertexShaderID:at,customFragmentShaderID:ht,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,instancing:Ct,instancingColor:Ct&&U.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:L===null?r.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Sn,map:Pt,matcap:st,envMap:vt,envMapMode:vt&&G.mapping,envMapCubeUVHeight:V,aoMap:$,lightMap:Z,bumpMap:Q,normalMap:mt,displacementMap:f&&ct,emissiveMap:Tt,normalMapObjectSpace:mt&&v.normalMapType===Xf,normalMapTangentSpace:mt&&v.normalMapType===hu,metalnessMap:bt,roughnessMap:yt,clearcoat:Nt,clearcoatMap:B,clearcoatNormalMap:et,clearcoatRoughnessMap:rt,iridescence:Wt,iridescenceMap:ut,iridescenceThicknessMap:Rt,sheen:R,sheenColorMap:pt,sheenRoughnessMap:Y,specularMap:gt,specularColorMap:St,specularIntensityMap:wt,transmission:E,transmissionMap:_t,thicknessMap:Mt,gradientMap:Ht,opaque:v.transparent===!1&&v.blending===Ki,alphaMap:Xt,alphaTest:se,combine:v.combine,mapUv:Pt&&_(v.map.channel),aoMapUv:$&&_(v.aoMap.channel),lightMapUv:Z&&_(v.lightMap.channel),bumpMapUv:Q&&_(v.bumpMap.channel),normalMapUv:mt&&_(v.normalMap.channel),displacementMapUv:ct&&_(v.displacementMap.channel),emissiveMapUv:Tt&&_(v.emissiveMap.channel),metalnessMapUv:bt&&_(v.metalnessMap.channel),roughnessMapUv:yt&&_(v.roughnessMap.channel),clearcoatMapUv:B&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:et&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ut&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:Rt&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:pt&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:Y&&_(v.sheenRoughnessMap.channel),specularMapUv:gt&&_(v.specularMap.channel),specularColorMapUv:St&&_(v.specularColorMap.channel),specularIntensityMapUv:wt&&_(v.specularIntensityMap.channel),transmissionMapUv:_t&&_(v.transmissionMap.channel),thicknessMapUv:Mt&&_(v.thicknessMap.channel),alphaMapUv:Xt&&_(v.alphaMap.channel),vertexTangents:mt&&!!F.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:W,vertexUv2s:nt,vertexUv3s:ft,pointsUvs:U.isPoints===!0&&!!F.attributes.uv&&(Pt||Xt),fog:!!I,useFog:v.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:U.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:dt,morphTextureStride:it,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&z.length>0,shadowMapType:r.shadowMap.type,toneMapping:v.toneMapped?r.toneMapping:On,useLegacyLights:r.useLegacyLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Nn,flipSided:v.side===De,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:D&&v.extensions.derivatives===!0,extensionFragDepth:D&&v.extensions.fragDepth===!0,extensionDrawBuffers:D&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:D&&v.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function d(v){const w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(const z in v.defines)w.push(z),w.push(v.defines[z]);return v.isRawShaderMaterial===!1&&(y(w,v),x(w,v),w.push(r.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function y(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function x(v,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),v.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.useLegacyLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),v.push(o.mask)}function M(v){const w=g[v.type];let z;if(w){const H=gn[w];z=wd.clone(H.uniforms)}else z=v.uniforms;return z}function S(v,w){let z;for(let H=0,U=c.length;H<U;H++){const I=c[H];if(I.cacheKey===w){z=I,++z.usedTimes;break}}return z===void 0&&(z=new Ug(r,w,v,s),c.push(z)),z}function T(v){if(--v.usedTimes===0){const w=c.indexOf(v);c[w]=c[c.length-1],c.pop(),v.destroy()}}function A(v){l.remove(v)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:M,acquireProgram:S,releaseProgram:T,releaseShaderCache:A,programs:c,dispose:C}}function zg(){let r=new WeakMap;function t(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function e(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function Bg(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function yc(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Sc(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function a(h,f,p,g,_,m){let d=r[t];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},r[t]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=_,d.group=m),t++,d}function o(h,f,p,g,_,m){const d=a(h,f,p,g,_,m);p.transmission>0?n.push(d):p.transparent===!0?i.push(d):e.push(d)}function l(h,f,p,g,_,m){const d=a(h,f,p,g,_,m);p.transmission>0?n.unshift(d):p.transparent===!0?i.unshift(d):e.unshift(d)}function c(h,f){e.length>1&&e.sort(h||Bg),n.length>1&&n.sort(f||yc),i.length>1&&i.sort(f||yc)}function u(){for(let h=t,f=r.length;h<f;h++){const p=r[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:u,sort:c}}function Gg(){let r=new WeakMap;function t(n,i){const s=r.get(n);let a;return s===void 0?(a=new Sc,r.set(n,[a])):i>=s.length?(a=new Sc,s.push(a)):a=s[i],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function kg(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new Bt};break;case"SpotLight":e={position:new P,direction:new P,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":e={color:new Bt,position:new P,halfWidth:new P,halfHeight:new P};break}return r[t.id]=e,e}}}function Hg(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let Vg=0;function Wg(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Xg(r,t){const e=new kg,n=Hg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new P);const s=new P,a=new re,o=new re;function l(u,h){let f=0,p=0,g=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let _=0,m=0,d=0,y=0,x=0,M=0,S=0,T=0,A=0,C=0;u.sort(Wg);const v=h===!0?Math.PI:1;for(let z=0,H=u.length;z<H;z++){const U=u[z],I=U.color,F=U.intensity,q=U.distance,G=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)f+=I.r*F*v,p+=I.g*F*v,g+=I.b*F*v;else if(U.isLightProbe)for(let V=0;V<9;V++)i.probe[V].addScaledVector(U.sh.coefficients[V],F);else if(U.isDirectionalLight){const V=e.get(U);if(V.color.copy(U.color).multiplyScalar(U.intensity*v),U.castShadow){const tt=U.shadow,j=n.get(U);j.shadowBias=tt.bias,j.shadowNormalBias=tt.normalBias,j.shadowRadius=tt.radius,j.shadowMapSize=tt.mapSize,i.directionalShadow[_]=j,i.directionalShadowMap[_]=G,i.directionalShadowMatrix[_]=U.shadow.matrix,M++}i.directional[_]=V,_++}else if(U.isSpotLight){const V=e.get(U);V.position.setFromMatrixPosition(U.matrixWorld),V.color.copy(I).multiplyScalar(F*v),V.distance=q,V.coneCos=Math.cos(U.angle),V.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),V.decay=U.decay,i.spot[d]=V;const tt=U.shadow;if(U.map&&(i.spotLightMap[A]=U.map,A++,tt.updateMatrices(U),U.castShadow&&C++),i.spotLightMatrix[d]=tt.matrix,U.castShadow){const j=n.get(U);j.shadowBias=tt.bias,j.shadowNormalBias=tt.normalBias,j.shadowRadius=tt.radius,j.shadowMapSize=tt.mapSize,i.spotShadow[d]=j,i.spotShadowMap[d]=G,T++}d++}else if(U.isRectAreaLight){const V=e.get(U);V.color.copy(I).multiplyScalar(F),V.halfWidth.set(U.width*.5,0,0),V.halfHeight.set(0,U.height*.5,0),i.rectArea[y]=V,y++}else if(U.isPointLight){const V=e.get(U);if(V.color.copy(U.color).multiplyScalar(U.intensity*v),V.distance=U.distance,V.decay=U.decay,U.castShadow){const tt=U.shadow,j=n.get(U);j.shadowBias=tt.bias,j.shadowNormalBias=tt.normalBias,j.shadowRadius=tt.radius,j.shadowMapSize=tt.mapSize,j.shadowCameraNear=tt.camera.near,j.shadowCameraFar=tt.camera.far,i.pointShadow[m]=j,i.pointShadowMap[m]=G,i.pointShadowMatrix[m]=U.shadow.matrix,S++}i.point[m]=V,m++}else if(U.isHemisphereLight){const V=e.get(U);V.skyColor.copy(U.color).multiplyScalar(F*v),V.groundColor.copy(U.groundColor).multiplyScalar(F*v),i.hemi[x]=V,x++}}y>0&&(t.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ot.LTC_FLOAT_1,i.rectAreaLTC2=ot.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ot.LTC_HALF_1,i.rectAreaLTC2=ot.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=p,i.ambient[2]=g;const w=i.hash;(w.directionalLength!==_||w.pointLength!==m||w.spotLength!==d||w.rectAreaLength!==y||w.hemiLength!==x||w.numDirectionalShadows!==M||w.numPointShadows!==S||w.numSpotShadows!==T||w.numSpotMaps!==A)&&(i.directional.length=_,i.spot.length=d,i.rectArea.length=y,i.point.length=m,i.hemi.length=x,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=T+A-C,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=C,w.directionalLength=_,w.pointLength=m,w.spotLength=d,w.rectAreaLength=y,w.hemiLength=x,w.numDirectionalShadows=M,w.numPointShadows=S,w.numSpotShadows=T,w.numSpotMaps=A,i.version=Vg++)}function c(u,h){let f=0,p=0,g=0,_=0,m=0;const d=h.matrixWorldInverse;for(let y=0,x=u.length;y<x;y++){const M=u[y];if(M.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(d),f++}else if(M.isSpotLight){const S=i.spot[g];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(d),S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(d),g++}else if(M.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(d),o.identity(),a.copy(M.matrixWorld),a.premultiply(d),o.extractRotation(a),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(M.isPointLight){const S=i.point[p];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(d),p++}else if(M.isHemisphereLight){const S=i.hemi[m];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(d),m++}}}return{setup:l,setupView:c,state:i}}function Ec(r,t){const e=new Xg(r,t),n=[],i=[];function s(){n.length=0,i.length=0}function a(h){n.push(h)}function o(h){i.push(h)}function l(h){e.setup(n,h)}function c(h){e.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function qg(r,t){let e=new WeakMap;function n(s,a=0){const o=e.get(s);let l;return o===void 0?(l=new Ec(r,t),e.set(s,[l])):a>=o.length?(l=new Ec(r,t),o.push(l)):l=o[a],l}function i(){e=new WeakMap}return{get:n,dispose:i}}class Yg extends mr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Zg extends mr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Jg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Kg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function jg(r,t,e){let n=new No;const i=new lt,s=new lt,a=new $t,o=new Yg({depthPacking:Wf}),l=new Zg,c={},u=e.maxTextureSize,h={[$n]:De,[De]:$n,[Nn]:Nn},f=new zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:Jg,fragmentShader:Kg}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new sn;g.setAttribute("position",new dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new be(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=su;let d=this.type;this.render=function(S,T,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;const C=r.getRenderTarget(),v=r.getActiveCubeFace(),w=r.getActiveMipmapLevel(),z=r.state;z.setBlending(Jn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const H=d!==Dn&&this.type===Dn,U=d===Dn&&this.type!==Dn;for(let I=0,F=S.length;I<F;I++){const q=S[I],G=q.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);const V=G.getFrameExtents();if(i.multiply(V),s.copy(G.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/V.x),i.x=s.x*V.x,G.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/V.y),i.y=s.y*V.y,G.mapSize.y=s.y)),G.map===null||H===!0||U===!0){const j=this.type!==Dn?{minFilter:ge,magFilter:ge}:{};G.map!==null&&G.map.dispose(),G.map=new Ti(i.x,i.y,j),G.map.texture.name=q.name+".shadowMap",G.camera.updateProjectionMatrix()}r.setRenderTarget(G.map),r.clear();const tt=G.getViewportCount();for(let j=0;j<tt;j++){const dt=G.getViewport(j);a.set(s.x*dt.x,s.y*dt.y,s.x*dt.z,s.y*dt.w),z.viewport(a),G.updateMatrices(q,j),n=G.getFrustum(),M(T,A,G.camera,q,this.type)}G.isPointLightShadow!==!0&&this.type===Dn&&y(G,A),G.needsUpdate=!1}d=this.type,m.needsUpdate=!1,r.setRenderTarget(C,v,w)};function y(S,T){const A=t.update(_);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Ti(i.x,i.y)),f.uniforms.shadow_pass.value=S.map.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,r.setRenderTarget(S.mapPass),r.clear(),r.renderBufferDirect(T,null,A,f,_,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,r.setRenderTarget(S.map),r.clear(),r.renderBufferDirect(T,null,A,p,_,null)}function x(S,T,A,C){let v=null;const w=A.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(w!==void 0)v=w;else if(v=A.isPointLight===!0?l:o,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const z=v.uuid,H=T.uuid;let U=c[z];U===void 0&&(U={},c[z]=U);let I=U[H];I===void 0&&(I=v.clone(),U[H]=I),v=I}if(v.visible=T.visible,v.wireframe=T.wireframe,C===Dn?v.side=T.shadowSide!==null?T.shadowSide:T.side:v.side=T.shadowSide!==null?T.shadowSide:h[T.side],v.alphaMap=T.alphaMap,v.alphaTest=T.alphaTest,v.map=T.map,v.clipShadows=T.clipShadows,v.clippingPlanes=T.clippingPlanes,v.clipIntersection=T.clipIntersection,v.displacementMap=T.displacementMap,v.displacementScale=T.displacementScale,v.displacementBias=T.displacementBias,v.wireframeLinewidth=T.wireframeLinewidth,v.linewidth=T.linewidth,A.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const z=r.properties.get(v);z.light=A}return v}function M(S,T,A,C,v){if(S.visible===!1)return;if(S.layers.test(T.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&v===Dn)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,S.matrixWorld);const H=t.update(S),U=S.material;if(Array.isArray(U)){const I=H.groups;for(let F=0,q=I.length;F<q;F++){const G=I[F],V=U[G.materialIndex];if(V&&V.visible){const tt=x(S,V,C,v);r.renderBufferDirect(A,null,H,tt,S,G)}}}else if(U.visible){const I=x(S,U,C,v);r.renderBufferDirect(A,null,H,I,S,null)}}const z=S.children;for(let H=0,U=z.length;H<U;H++)M(z[H],T,A,C,v)}}function $g(r,t,e){const n=e.isWebGL2;function i(){let D=!1;const W=new $t;let nt=null;const ft=new $t(0,0,0,0);return{setMask:function(xt){nt!==xt&&!D&&(r.colorMask(xt,xt,xt,xt),nt=xt)},setLocked:function(xt){D=xt},setClear:function(xt,Yt,Zt,ye,kn){kn===!0&&(xt*=ye,Yt*=ye,Zt*=ye),W.set(xt,Yt,Zt,ye),ft.equals(W)===!1&&(r.clearColor(xt,Yt,Zt,ye),ft.copy(W))},reset:function(){D=!1,nt=null,ft.set(-1,0,0,0)}}}function s(){let D=!1,W=null,nt=null,ft=null;return{setTest:function(xt){xt?L(r.DEPTH_TEST):Ct(r.DEPTH_TEST)},setMask:function(xt){W!==xt&&!D&&(r.depthMask(xt),W=xt)},setFunc:function(xt){if(nt!==xt){switch(xt){case df:r.depthFunc(r.NEVER);break;case pf:r.depthFunc(r.ALWAYS);break;case mf:r.depthFunc(r.LESS);break;case no:r.depthFunc(r.LEQUAL);break;case _f:r.depthFunc(r.EQUAL);break;case gf:r.depthFunc(r.GEQUAL);break;case vf:r.depthFunc(r.GREATER);break;case xf:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}nt=xt}},setLocked:function(xt){D=xt},setClear:function(xt){ft!==xt&&(r.clearDepth(xt),ft=xt)},reset:function(){D=!1,W=null,nt=null,ft=null}}}function a(){let D=!1,W=null,nt=null,ft=null,xt=null,Yt=null,Zt=null,ye=null,kn=null;return{setTest:function(ae){D||(ae?L(r.STENCIL_TEST):Ct(r.STENCIL_TEST))},setMask:function(ae){W!==ae&&!D&&(r.stencilMask(ae),W=ae)},setFunc:function(ae,Je,mn){(nt!==ae||ft!==Je||xt!==mn)&&(r.stencilFunc(ae,Je,mn),nt=ae,ft=Je,xt=mn)},setOp:function(ae,Je,mn){(Yt!==ae||Zt!==Je||ye!==mn)&&(r.stencilOp(ae,Je,mn),Yt=ae,Zt=Je,ye=mn)},setLocked:function(ae){D=ae},setClear:function(ae){kn!==ae&&(r.clearStencil(ae),kn=ae)},reset:function(){D=!1,W=null,nt=null,ft=null,xt=null,Yt=null,Zt=null,ye=null,kn=null}}}const o=new i,l=new s,c=new a,u=new WeakMap,h=new WeakMap;let f={},p={},g=new WeakMap,_=[],m=null,d=!1,y=null,x=null,M=null,S=null,T=null,A=null,C=null,v=!1,w=null,z=null,H=null,U=null,I=null;const F=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,G=0;const V=r.getParameter(r.VERSION);V.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(V)[1]),q=G>=1):V.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),q=G>=2);let tt=null,j={};const dt=r.getParameter(r.SCISSOR_BOX),it=r.getParameter(r.VIEWPORT),k=new $t().fromArray(dt),K=new $t().fromArray(it);function at(D,W,nt,ft){const xt=new Uint8Array(4),Yt=r.createTexture();r.bindTexture(D,Yt),r.texParameteri(D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(D,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Zt=0;Zt<nt;Zt++)n&&(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)?r.texImage3D(W,0,r.RGBA,1,1,ft,0,r.RGBA,r.UNSIGNED_BYTE,xt):r.texImage2D(W+Zt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,xt);return Yt}const ht={};ht[r.TEXTURE_2D]=at(r.TEXTURE_2D,r.TEXTURE_2D,1),ht[r.TEXTURE_CUBE_MAP]=at(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ht[r.TEXTURE_2D_ARRAY]=at(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ht[r.TEXTURE_3D]=at(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),L(r.DEPTH_TEST),l.setFunc(no),ct(!1),Tt(ul),L(r.CULL_FACE),Q(Jn);function L(D){f[D]!==!0&&(r.enable(D),f[D]=!0)}function Ct(D){f[D]!==!1&&(r.disable(D),f[D]=!1)}function Pt(D,W){return p[D]!==W?(r.bindFramebuffer(D,W),p[D]=W,n&&(D===r.DRAW_FRAMEBUFFER&&(p[r.FRAMEBUFFER]=W),D===r.FRAMEBUFFER&&(p[r.DRAW_FRAMEBUFFER]=W)),!0):!1}function st(D,W){let nt=_,ft=!1;if(D)if(nt=g.get(W),nt===void 0&&(nt=[],g.set(W,nt)),D.isWebGLMultipleRenderTargets){const xt=D.texture;if(nt.length!==xt.length||nt[0]!==r.COLOR_ATTACHMENT0){for(let Yt=0,Zt=xt.length;Yt<Zt;Yt++)nt[Yt]=r.COLOR_ATTACHMENT0+Yt;nt.length=xt.length,ft=!0}}else nt[0]!==r.COLOR_ATTACHMENT0&&(nt[0]=r.COLOR_ATTACHMENT0,ft=!0);else nt[0]!==r.BACK&&(nt[0]=r.BACK,ft=!0);ft&&(e.isWebGL2?r.drawBuffers(nt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(nt))}function vt(D){return m!==D?(r.useProgram(D),m=D,!0):!1}const $={[Xi]:r.FUNC_ADD,[ef]:r.FUNC_SUBTRACT,[nf]:r.FUNC_REVERSE_SUBTRACT};if(n)$[dl]=r.MIN,$[pl]=r.MAX;else{const D=t.get("EXT_blend_minmax");D!==null&&($[dl]=D.MIN_EXT,$[pl]=D.MAX_EXT)}const Z={[rf]:r.ZERO,[sf]:r.ONE,[af]:r.SRC_COLOR,[au]:r.SRC_ALPHA,[ff]:r.SRC_ALPHA_SATURATE,[uf]:r.DST_COLOR,[lf]:r.DST_ALPHA,[of]:r.ONE_MINUS_SRC_COLOR,[ou]:r.ONE_MINUS_SRC_ALPHA,[hf]:r.ONE_MINUS_DST_COLOR,[cf]:r.ONE_MINUS_DST_ALPHA};function Q(D,W,nt,ft,xt,Yt,Zt,ye){if(D===Jn){d===!0&&(Ct(r.BLEND),d=!1);return}if(d===!1&&(L(r.BLEND),d=!0),D!==tf){if(D!==y||ye!==v){if((x!==Xi||T!==Xi)&&(r.blendEquation(r.FUNC_ADD),x=Xi,T=Xi),ye)switch(D){case Ki:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Fs:r.blendFunc(r.ONE,r.ONE);break;case hl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case fl:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Ki:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Fs:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case hl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case fl:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}M=null,S=null,A=null,C=null,y=D,v=ye}return}xt=xt||W,Yt=Yt||nt,Zt=Zt||ft,(W!==x||xt!==T)&&(r.blendEquationSeparate($[W],$[xt]),x=W,T=xt),(nt!==M||ft!==S||Yt!==A||Zt!==C)&&(r.blendFuncSeparate(Z[nt],Z[ft],Z[Yt],Z[Zt]),M=nt,S=ft,A=Yt,C=Zt),y=D,v=!1}function mt(D,W){D.side===Nn?Ct(r.CULL_FACE):L(r.CULL_FACE);let nt=D.side===De;W&&(nt=!nt),ct(nt),D.blending===Ki&&D.transparent===!1?Q(Jn):Q(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),o.setMask(D.colorWrite);const ft=D.stencilWrite;c.setTest(ft),ft&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),yt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?L(r.SAMPLE_ALPHA_TO_COVERAGE):Ct(r.SAMPLE_ALPHA_TO_COVERAGE)}function ct(D){w!==D&&(D?r.frontFace(r.CW):r.frontFace(r.CCW),w=D)}function Tt(D){D!==jh?(L(r.CULL_FACE),D!==z&&(D===ul?r.cullFace(r.BACK):D===$h?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ct(r.CULL_FACE),z=D}function bt(D){D!==H&&(q&&r.lineWidth(D),H=D)}function yt(D,W,nt){D?(L(r.POLYGON_OFFSET_FILL),(U!==W||I!==nt)&&(r.polygonOffset(W,nt),U=W,I=nt)):Ct(r.POLYGON_OFFSET_FILL)}function Nt(D){D?L(r.SCISSOR_TEST):Ct(r.SCISSOR_TEST)}function Wt(D){D===void 0&&(D=r.TEXTURE0+F-1),tt!==D&&(r.activeTexture(D),tt=D)}function R(D,W,nt){nt===void 0&&(tt===null?nt=r.TEXTURE0+F-1:nt=tt);let ft=j[nt];ft===void 0&&(ft={type:void 0,texture:void 0},j[nt]=ft),(ft.type!==D||ft.texture!==W)&&(tt!==nt&&(r.activeTexture(nt),tt=nt),r.bindTexture(D,W||ht[D]),ft.type=D,ft.texture=W)}function E(){const D=j[tt];D!==void 0&&D.type!==void 0&&(r.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function B(){try{r.compressedTexImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function et(){try{r.compressedTexImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function rt(){try{r.texSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ut(){try{r.texSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Rt(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(){try{r.texStorage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function gt(){try{r.texStorage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function St(){try{r.texImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function wt(){try{r.texImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _t(D){k.equals(D)===!1&&(r.scissor(D.x,D.y,D.z,D.w),k.copy(D))}function Mt(D){K.equals(D)===!1&&(r.viewport(D.x,D.y,D.z,D.w),K.copy(D))}function Ht(D,W){let nt=h.get(W);nt===void 0&&(nt=new WeakMap,h.set(W,nt));let ft=nt.get(D);ft===void 0&&(ft=r.getUniformBlockIndex(W,D.name),nt.set(D,ft))}function Xt(D,W){const ft=h.get(W).get(D);u.get(W)!==ft&&(r.uniformBlockBinding(W,ft,D.__bindingPointIndex),u.set(W,ft))}function se(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),f={},tt=null,j={},p={},g=new WeakMap,_=[],m=null,d=!1,y=null,x=null,M=null,S=null,T=null,A=null,C=null,v=!1,w=null,z=null,H=null,U=null,I=null,k.set(0,0,r.canvas.width,r.canvas.height),K.set(0,0,r.canvas.width,r.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:L,disable:Ct,bindFramebuffer:Pt,drawBuffers:st,useProgram:vt,setBlending:Q,setMaterial:mt,setFlipSided:ct,setCullFace:Tt,setLineWidth:bt,setPolygonOffset:yt,setScissorTest:Nt,activeTexture:Wt,bindTexture:R,unbindTexture:E,compressedTexImage2D:B,compressedTexImage3D:et,texImage2D:St,texImage3D:wt,updateUBOMapping:Ht,uniformBlockBinding:Xt,texStorage2D:Y,texStorage3D:gt,texSubImage2D:rt,texSubImage3D:ut,compressedTexSubImage2D:Rt,compressedTexSubImage3D:pt,scissor:_t,viewport:Mt,reset:se}}function Qg(r,t,e,n,i,s,a){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const m=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(R,E){return d?new OffscreenCanvas(R,E):zr("canvas")}function x(R,E,B,et){let rt=1;if((R.width>et||R.height>et)&&(rt=et/Math.max(R.width,R.height)),rt<1||E===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const ut=E?du:Math.floor,Rt=ut(rt*R.width),pt=ut(rt*R.height);_===void 0&&(_=y(Rt,pt));const Y=B?y(Rt,pt):_;return Y.width=Rt,Y.height=pt,Y.getContext("2d").drawImage(R,0,0,Rt,pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+Rt+"x"+pt+")."),Y}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function M(R){return co(R.width)&&co(R.height)}function S(R){return o?!1:R.wrapS!==fn||R.wrapT!==fn||R.minFilter!==ge&&R.minFilter!==Qe}function T(R,E){return R.generateMipmaps&&E&&R.minFilter!==ge&&R.minFilter!==Qe}function A(R){r.generateMipmap(R)}function C(R,E,B,et,rt=!1){if(o===!1)return E;if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ut=E;return E===r.RED&&(B===r.FLOAT&&(ut=r.R32F),B===r.HALF_FLOAT&&(ut=r.R16F),B===r.UNSIGNED_BYTE&&(ut=r.R8)),E===r.RG&&(B===r.FLOAT&&(ut=r.RG32F),B===r.HALF_FLOAT&&(ut=r.RG16F),B===r.UNSIGNED_BYTE&&(ut=r.RG8)),E===r.RGBA&&(B===r.FLOAT&&(ut=r.RGBA32F),B===r.HALF_FLOAT&&(ut=r.RGBA16F),B===r.UNSIGNED_BYTE&&(ut=et===Dt&&rt===!1?r.SRGB8_ALPHA8:r.RGBA8),B===r.UNSIGNED_SHORT_4_4_4_4&&(ut=r.RGBA4),B===r.UNSIGNED_SHORT_5_5_5_1&&(ut=r.RGB5_A1)),(ut===r.R16F||ut===r.R32F||ut===r.RG16F||ut===r.RG32F||ut===r.RGBA16F||ut===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function v(R,E,B){return T(R,B)===!0||R.isFramebufferTexture&&R.minFilter!==ge&&R.minFilter!==Qe?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function w(R){return R===ge||R===ml||R===oa?r.NEAREST:r.LINEAR}function z(R){const E=R.target;E.removeEventListener("dispose",z),U(E),E.isVideoTexture&&g.delete(E)}function H(R){const E=R.target;E.removeEventListener("dispose",H),F(E)}function U(R){const E=n.get(R);if(E.__webglInit===void 0)return;const B=R.source,et=m.get(B);if(et){const rt=et[E.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&I(R),Object.keys(et).length===0&&m.delete(B)}n.remove(R)}function I(R){const E=n.get(R);r.deleteTexture(E.__webglTexture);const B=R.source,et=m.get(B);delete et[E.__cacheKey],a.memory.textures--}function F(R){const E=R.texture,B=n.get(R),et=n.get(E);if(et.__webglTexture!==void 0&&(r.deleteTexture(et.__webglTexture),a.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++)r.deleteFramebuffer(B.__webglFramebuffer[rt]),B.__webglDepthbuffer&&r.deleteRenderbuffer(B.__webglDepthbuffer[rt]);else{if(r.deleteFramebuffer(B.__webglFramebuffer),B.__webglDepthbuffer&&r.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&r.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let rt=0;rt<B.__webglColorRenderbuffer.length;rt++)B.__webglColorRenderbuffer[rt]&&r.deleteRenderbuffer(B.__webglColorRenderbuffer[rt]);B.__webglDepthRenderbuffer&&r.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let rt=0,ut=E.length;rt<ut;rt++){const Rt=n.get(E[rt]);Rt.__webglTexture&&(r.deleteTexture(Rt.__webglTexture),a.memory.textures--),n.remove(E[rt])}n.remove(E),n.remove(R)}let q=0;function G(){q=0}function V(){const R=q;return R>=l&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+l),q+=1,R}function tt(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function j(R,E){const B=n.get(R);if(R.isVideoTexture&&Nt(R),R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){const et=R.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ct(B,R,E);return}}e.bindTexture(r.TEXTURE_2D,B.__webglTexture,r.TEXTURE0+E)}function dt(R,E){const B=n.get(R);if(R.version>0&&B.__version!==R.version){Ct(B,R,E);return}e.bindTexture(r.TEXTURE_2D_ARRAY,B.__webglTexture,r.TEXTURE0+E)}function it(R,E){const B=n.get(R);if(R.version>0&&B.__version!==R.version){Ct(B,R,E);return}e.bindTexture(r.TEXTURE_3D,B.__webglTexture,r.TEXTURE0+E)}function k(R,E){const B=n.get(R);if(R.version>0&&B.__version!==R.version){Pt(B,R,E);return}e.bindTexture(r.TEXTURE_CUBE_MAP,B.__webglTexture,r.TEXTURE0+E)}const K={[so]:r.REPEAT,[fn]:r.CLAMP_TO_EDGE,[ao]:r.MIRRORED_REPEAT},at={[ge]:r.NEAREST,[ml]:r.NEAREST_MIPMAP_NEAREST,[oa]:r.NEAREST_MIPMAP_LINEAR,[Qe]:r.LINEAR,[Af]:r.LINEAR_MIPMAP_NEAREST,[Nr]:r.LINEAR_MIPMAP_LINEAR};function ht(R,E,B){if(B?(r.texParameteri(R,r.TEXTURE_WRAP_S,K[E.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,K[E.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,K[E.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,at[E.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,at[E.minFilter])):(r.texParameteri(R,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(R,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(E.wrapS!==fn||E.wrapT!==fn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(R,r.TEXTURE_MAG_FILTER,w(E.magFilter)),r.texParameteri(R,r.TEXTURE_MIN_FILTER,w(E.minFilter)),E.minFilter!==ge&&E.minFilter!==Qe&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const et=t.get("EXT_texture_filter_anisotropic");if(E.magFilter===ge||E.minFilter!==oa&&E.minFilter!==Nr||E.type===mi&&t.has("OES_texture_float_linear")===!1||o===!1&&E.type===Fr&&t.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(r.texParameterf(R,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function L(R,E){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",z));const et=E.source;let rt=m.get(et);rt===void 0&&(rt={},m.set(et,rt));const ut=tt(E);if(ut!==R.__cacheKey){rt[ut]===void 0&&(rt[ut]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,B=!0),rt[ut].usedTimes++;const Rt=rt[R.__cacheKey];Rt!==void 0&&(rt[R.__cacheKey].usedTimes--,Rt.usedTimes===0&&I(E)),R.__cacheKey=ut,R.__webglTexture=rt[ut].texture}return B}function Ct(R,E,B){let et=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(et=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(et=r.TEXTURE_3D);const rt=L(R,E),ut=E.source;e.bindTexture(et,R.__webglTexture,r.TEXTURE0+B);const Rt=n.get(ut);if(ut.version!==Rt.__version||rt===!0){e.activeTexture(r.TEXTURE0+B),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.NONE);const pt=S(E)&&M(E.image)===!1;let Y=x(E.image,pt,!1,u);Y=Wt(E,Y);const gt=M(Y)||o,St=s.convert(E.format,E.colorSpace);let wt=s.convert(E.type),_t=C(E.internalFormat,St,wt,E.colorSpace);ht(et,E,gt);let Mt;const Ht=E.mipmaps,Xt=o&&E.isVideoTexture!==!0,se=Rt.__version===void 0||rt===!0,D=v(E,Y,gt);if(E.isDepthTexture)_t=r.DEPTH_COMPONENT,o?E.type===mi?_t=r.DEPTH_COMPONENT32F:E.type===pi?_t=r.DEPTH_COMPONENT24:E.type===ji?_t=r.DEPTH24_STENCIL8:_t=r.DEPTH_COMPONENT16:E.type===mi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===gi&&_t===r.DEPTH_COMPONENT&&E.type!==cu&&E.type!==pi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=pi,wt=s.convert(E.type)),E.format===sr&&_t===r.DEPTH_COMPONENT&&(_t=r.DEPTH_STENCIL,E.type!==ji&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=ji,wt=s.convert(E.type))),se&&(Xt?e.texStorage2D(r.TEXTURE_2D,1,_t,Y.width,Y.height):e.texImage2D(r.TEXTURE_2D,0,_t,Y.width,Y.height,0,St,wt,null));else if(E.isDataTexture)if(Ht.length>0&&gt){Xt&&se&&e.texStorage2D(r.TEXTURE_2D,D,_t,Ht[0].width,Ht[0].height);for(let W=0,nt=Ht.length;W<nt;W++)Mt=Ht[W],Xt?e.texSubImage2D(r.TEXTURE_2D,W,0,0,Mt.width,Mt.height,St,wt,Mt.data):e.texImage2D(r.TEXTURE_2D,W,_t,Mt.width,Mt.height,0,St,wt,Mt.data);E.generateMipmaps=!1}else Xt?(se&&e.texStorage2D(r.TEXTURE_2D,D,_t,Y.width,Y.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,Y.width,Y.height,St,wt,Y.data)):e.texImage2D(r.TEXTURE_2D,0,_t,Y.width,Y.height,0,St,wt,Y.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Xt&&se&&e.texStorage3D(r.TEXTURE_2D_ARRAY,D,_t,Ht[0].width,Ht[0].height,Y.depth);for(let W=0,nt=Ht.length;W<nt;W++)Mt=Ht[W],E.format!==We?St!==null?Xt?e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,W,0,0,0,Mt.width,Mt.height,Y.depth,St,Mt.data,0,0):e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,W,_t,Mt.width,Mt.height,Y.depth,0,Mt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?e.texSubImage3D(r.TEXTURE_2D_ARRAY,W,0,0,0,Mt.width,Mt.height,Y.depth,St,wt,Mt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,W,_t,Mt.width,Mt.height,Y.depth,0,St,wt,Mt.data)}else{Xt&&se&&e.texStorage2D(r.TEXTURE_2D,D,_t,Ht[0].width,Ht[0].height);for(let W=0,nt=Ht.length;W<nt;W++)Mt=Ht[W],E.format!==We?St!==null?Xt?e.compressedTexSubImage2D(r.TEXTURE_2D,W,0,0,Mt.width,Mt.height,St,Mt.data):e.compressedTexImage2D(r.TEXTURE_2D,W,_t,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?e.texSubImage2D(r.TEXTURE_2D,W,0,0,Mt.width,Mt.height,St,wt,Mt.data):e.texImage2D(r.TEXTURE_2D,W,_t,Mt.width,Mt.height,0,St,wt,Mt.data)}else if(E.isDataArrayTexture)Xt?(se&&e.texStorage3D(r.TEXTURE_2D_ARRAY,D,_t,Y.width,Y.height,Y.depth),e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,St,wt,Y.data)):e.texImage3D(r.TEXTURE_2D_ARRAY,0,_t,Y.width,Y.height,Y.depth,0,St,wt,Y.data);else if(E.isData3DTexture)Xt?(se&&e.texStorage3D(r.TEXTURE_3D,D,_t,Y.width,Y.height,Y.depth),e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,St,wt,Y.data)):e.texImage3D(r.TEXTURE_3D,0,_t,Y.width,Y.height,Y.depth,0,St,wt,Y.data);else if(E.isFramebufferTexture){if(se)if(Xt)e.texStorage2D(r.TEXTURE_2D,D,_t,Y.width,Y.height);else{let W=Y.width,nt=Y.height;for(let ft=0;ft<D;ft++)e.texImage2D(r.TEXTURE_2D,ft,_t,W,nt,0,St,wt,null),W>>=1,nt>>=1}}else if(Ht.length>0&&gt){Xt&&se&&e.texStorage2D(r.TEXTURE_2D,D,_t,Ht[0].width,Ht[0].height);for(let W=0,nt=Ht.length;W<nt;W++)Mt=Ht[W],Xt?e.texSubImage2D(r.TEXTURE_2D,W,0,0,St,wt,Mt):e.texImage2D(r.TEXTURE_2D,W,_t,St,wt,Mt);E.generateMipmaps=!1}else Xt?(se&&e.texStorage2D(r.TEXTURE_2D,D,_t,Y.width,Y.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,St,wt,Y)):e.texImage2D(r.TEXTURE_2D,0,_t,St,wt,Y);T(E,gt)&&A(et),Rt.__version=ut.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function Pt(R,E,B){if(E.image.length!==6)return;const et=L(R,E),rt=E.source;e.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+B);const ut=n.get(rt);if(rt.version!==ut.__version||et===!0){e.activeTexture(r.TEXTURE0+B),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.NONE);const Rt=E.isCompressedTexture||E.image[0].isCompressedTexture,pt=E.image[0]&&E.image[0].isDataTexture,Y=[];for(let W=0;W<6;W++)!Rt&&!pt?Y[W]=x(E.image[W],!1,!0,c):Y[W]=pt?E.image[W].image:E.image[W],Y[W]=Wt(E,Y[W]);const gt=Y[0],St=M(gt)||o,wt=s.convert(E.format,E.colorSpace),_t=s.convert(E.type),Mt=C(E.internalFormat,wt,_t,E.colorSpace),Ht=o&&E.isVideoTexture!==!0,Xt=ut.__version===void 0||et===!0;let se=v(E,gt,St);ht(r.TEXTURE_CUBE_MAP,E,St);let D;if(Rt){Ht&&Xt&&e.texStorage2D(r.TEXTURE_CUBE_MAP,se,Mt,gt.width,gt.height);for(let W=0;W<6;W++){D=Y[W].mipmaps;for(let nt=0;nt<D.length;nt++){const ft=D[nt];E.format!==We?wt!==null?Ht?e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+W,nt,0,0,ft.width,ft.height,wt,ft.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+W,nt,Mt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ht?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+W,nt,0,0,ft.width,ft.height,wt,_t,ft.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+W,nt,Mt,ft.width,ft.height,0,wt,_t,ft.data)}}}else{D=E.mipmaps,Ht&&Xt&&(D.length>0&&se++,e.texStorage2D(r.TEXTURE_CUBE_MAP,se,Mt,Y[0].width,Y[0].height));for(let W=0;W<6;W++)if(pt){Ht?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,Y[W].width,Y[W].height,wt,_t,Y[W].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,Mt,Y[W].width,Y[W].height,0,wt,_t,Y[W].data);for(let nt=0;nt<D.length;nt++){const xt=D[nt].image[W].image;Ht?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+W,nt+1,0,0,xt.width,xt.height,wt,_t,xt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+W,nt+1,Mt,xt.width,xt.height,0,wt,_t,xt.data)}}else{Ht?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,wt,_t,Y[W]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,Mt,wt,_t,Y[W]);for(let nt=0;nt<D.length;nt++){const ft=D[nt];Ht?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+W,nt+1,0,0,wt,_t,ft.image[W]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+W,nt+1,Mt,wt,_t,ft.image[W])}}}T(E,St)&&A(r.TEXTURE_CUBE_MAP),ut.__version=rt.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function st(R,E,B,et,rt){const ut=s.convert(B.format,B.colorSpace),Rt=s.convert(B.type),pt=C(B.internalFormat,ut,Rt,B.colorSpace);n.get(E).__hasExternalTextures||(rt===r.TEXTURE_3D||rt===r.TEXTURE_2D_ARRAY?e.texImage3D(rt,0,pt,E.width,E.height,E.depth,0,ut,Rt,null):e.texImage2D(rt,0,pt,E.width,E.height,0,ut,Rt,null)),e.bindFramebuffer(r.FRAMEBUFFER,R),yt(E)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,et,rt,n.get(B).__webglTexture,0,bt(E)):(rt===r.TEXTURE_2D||rt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,et,rt,n.get(B).__webglTexture,0),e.bindFramebuffer(r.FRAMEBUFFER,null)}function vt(R,E,B){if(r.bindRenderbuffer(r.RENDERBUFFER,R),E.depthBuffer&&!E.stencilBuffer){let et=r.DEPTH_COMPONENT16;if(B||yt(E)){const rt=E.depthTexture;rt&&rt.isDepthTexture&&(rt.type===mi?et=r.DEPTH_COMPONENT32F:rt.type===pi&&(et=r.DEPTH_COMPONENT24));const ut=bt(E);yt(E)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ut,et,E.width,E.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,ut,et,E.width,E.height)}else r.renderbufferStorage(r.RENDERBUFFER,et,E.width,E.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,R)}else if(E.depthBuffer&&E.stencilBuffer){const et=bt(E);B&&yt(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,et,r.DEPTH24_STENCIL8,E.width,E.height):yt(E)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,et,r.DEPTH24_STENCIL8,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,R)}else{const et=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let rt=0;rt<et.length;rt++){const ut=et[rt],Rt=s.convert(ut.format,ut.colorSpace),pt=s.convert(ut.type),Y=C(ut.internalFormat,Rt,pt,ut.colorSpace),gt=bt(E);B&&yt(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,gt,Y,E.width,E.height):yt(E)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,gt,Y,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Y,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function $(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),j(E.depthTexture,0);const et=n.get(E.depthTexture).__webglTexture,rt=bt(E);if(E.depthTexture.format===gi)yt(E)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,et,0,rt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,et,0);else if(E.depthTexture.format===sr)yt(E)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,et,0,rt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function Z(R){const E=n.get(R),B=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");$(E.__webglFramebuffer,R)}else if(B){E.__webglDepthbuffer=[];for(let et=0;et<6;et++)e.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[et]),E.__webglDepthbuffer[et]=r.createRenderbuffer(),vt(E.__webglDepthbuffer[et],R,!1)}else e.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=r.createRenderbuffer(),vt(E.__webglDepthbuffer,R,!1);e.bindFramebuffer(r.FRAMEBUFFER,null)}function Q(R,E,B){const et=n.get(R);E!==void 0&&st(et.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D),B!==void 0&&Z(R)}function mt(R){const E=R.texture,B=n.get(R),et=n.get(E);R.addEventListener("dispose",H),R.isWebGLMultipleRenderTargets!==!0&&(et.__webglTexture===void 0&&(et.__webglTexture=r.createTexture()),et.__version=E.version,a.memory.textures++);const rt=R.isWebGLCubeRenderTarget===!0,ut=R.isWebGLMultipleRenderTargets===!0,Rt=M(R)||o;if(rt){B.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)B.__webglFramebuffer[pt]=r.createFramebuffer()}else{if(B.__webglFramebuffer=r.createFramebuffer(),ut)if(i.drawBuffers){const pt=R.texture;for(let Y=0,gt=pt.length;Y<gt;Y++){const St=n.get(pt[Y]);St.__webglTexture===void 0&&(St.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&R.samples>0&&yt(R)===!1){const pt=ut?E:[E];B.__webglMultisampledFramebuffer=r.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Y=0;Y<pt.length;Y++){const gt=pt[Y];B.__webglColorRenderbuffer[Y]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,B.__webglColorRenderbuffer[Y]);const St=s.convert(gt.format,gt.colorSpace),wt=s.convert(gt.type),_t=C(gt.internalFormat,St,wt,gt.colorSpace,R.isXRRenderTarget===!0),Mt=bt(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,Mt,_t,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Y,r.RENDERBUFFER,B.__webglColorRenderbuffer[Y])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=r.createRenderbuffer(),vt(B.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(rt){e.bindTexture(r.TEXTURE_CUBE_MAP,et.__webglTexture),ht(r.TEXTURE_CUBE_MAP,E,Rt);for(let pt=0;pt<6;pt++)st(B.__webglFramebuffer[pt],R,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+pt);T(E,Rt)&&A(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ut){const pt=R.texture;for(let Y=0,gt=pt.length;Y<gt;Y++){const St=pt[Y],wt=n.get(St);e.bindTexture(r.TEXTURE_2D,wt.__webglTexture),ht(r.TEXTURE_2D,St,Rt),st(B.__webglFramebuffer,R,St,r.COLOR_ATTACHMENT0+Y,r.TEXTURE_2D),T(St,Rt)&&A(r.TEXTURE_2D)}e.unbindTexture()}else{let pt=r.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(o?pt=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(pt,et.__webglTexture),ht(pt,E,Rt),st(B.__webglFramebuffer,R,E,r.COLOR_ATTACHMENT0,pt),T(E,Rt)&&A(pt),e.unbindTexture()}R.depthBuffer&&Z(R)}function ct(R){const E=M(R)||o,B=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let et=0,rt=B.length;et<rt;et++){const ut=B[et];if(T(ut,E)){const Rt=R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,pt=n.get(ut).__webglTexture;e.bindTexture(Rt,pt),A(Rt),e.unbindTexture()}}}function Tt(R){if(o&&R.samples>0&&yt(R)===!1){const E=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],B=R.width,et=R.height;let rt=r.COLOR_BUFFER_BIT;const ut=[],Rt=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,pt=n.get(R),Y=R.isWebGLMultipleRenderTargets===!0;if(Y)for(let gt=0;gt<E.length;gt++)e.bindFramebuffer(r.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+gt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,pt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+gt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,pt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,pt.__webglFramebuffer);for(let gt=0;gt<E.length;gt++){ut.push(r.COLOR_ATTACHMENT0+gt),R.depthBuffer&&ut.push(Rt);const St=pt.__ignoreDepthValues!==void 0?pt.__ignoreDepthValues:!1;if(St===!1&&(R.depthBuffer&&(rt|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&(rt|=r.STENCIL_BUFFER_BIT)),Y&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,pt.__webglColorRenderbuffer[gt]),St===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[Rt]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[Rt])),Y){const wt=n.get(E[gt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,wt,0)}r.blitFramebuffer(0,0,B,et,0,0,B,et,rt,r.NEAREST),p&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ut)}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Y)for(let gt=0;gt<E.length;gt++){e.bindFramebuffer(r.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+gt,r.RENDERBUFFER,pt.__webglColorRenderbuffer[gt]);const St=n.get(E[gt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,pt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+gt,r.TEXTURE_2D,St,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,pt.__webglMultisampledFramebuffer)}}function bt(R){return Math.min(h,R.samples)}function yt(R){const E=n.get(R);return o&&R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Nt(R){const E=a.render.frame;g.get(R)!==E&&(g.set(R,E),R.update())}function Wt(R,E){const B=R.colorSpace,et=R.format,rt=R.type;return R.isCompressedTexture===!0||R.format===lo||B!==Sn&&B!==xi&&(B===Dt?o===!1?t.has("EXT_sRGB")===!0&&et===We?(R.format=lo,R.minFilter=Qe,R.generateMipmaps=!1):E=mu.sRGBToLinear(E):(et!==We||rt!==Ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),E}this.allocateTextureUnit=V,this.resetTextureUnits=G,this.setTexture2D=j,this.setTexture2DArray=dt,this.setTexture3D=it,this.setTextureCube=k,this.rebindTextures=Q,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=Tt,this.setupDepthRenderbuffer=Z,this.setupFrameBufferTexture=st,this.useMultisampledRTT=yt}function t0(r,t,e){const n=e.isWebGL2;function i(s,a=xi){let o;if(s===Ei)return r.UNSIGNED_BYTE;if(s===Lf)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Df)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Rf)return r.BYTE;if(s===Cf)return r.SHORT;if(s===cu)return r.UNSIGNED_SHORT;if(s===Pf)return r.INT;if(s===pi)return r.UNSIGNED_INT;if(s===mi)return r.FLOAT;if(s===Fr)return n?r.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Uf)return r.ALPHA;if(s===We)return r.RGBA;if(s===If)return r.LUMINANCE;if(s===Nf)return r.LUMINANCE_ALPHA;if(s===gi)return r.DEPTH_COMPONENT;if(s===sr)return r.DEPTH_STENCIL;if(s===lo)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Ff)return r.RED;if(s===Of)return r.RED_INTEGER;if(s===zf)return r.RG;if(s===Bf)return r.RG_INTEGER;if(s===Gf)return r.RGBA_INTEGER;if(s===la||s===ca||s===ua||s===ha)if(a===Dt)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===la)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ca)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ua)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ha)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===la)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ca)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ua)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ha)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===_l||s===gl||s===vl||s===xl)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===_l)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===gl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===vl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===xl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===kf)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Ml||s===yl)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Ml)return a===Dt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===yl)return a===Dt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Sl||s===El||s===Tl||s===bl||s===wl||s===Al||s===Rl||s===Cl||s===Pl||s===Ll||s===Dl||s===Ul||s===Il||s===Nl)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Sl)return a===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===El)return a===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Tl)return a===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===bl)return a===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===wl)return a===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Al)return a===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Rl)return a===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Cl)return a===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Pl)return a===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ll)return a===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Dl)return a===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ul)return a===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Il)return a===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Nl)return a===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===fa)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(s===fa)return a===Dt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===Hf||s===Fl||s===Ol||s===zl)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(s===fa)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Fl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ol)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===zl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ji?n?r.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class e0 extends Ve{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Es extends Me{constructor(){super(),this.isGroup=!0,this.type="Group"}}const n0={type:"move"};class Na{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Es,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Es,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Es,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),d=this._getHandJoint(c,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(n0)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Es;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class i0 extends Ue{constructor(t,e,n,i,s,a,o,l,c,u){if(u=u!==void 0?u:gi,u!==gi&&u!==sr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===gi&&(n=pi),n===void 0&&u===sr&&(n=ji),super(null,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:ge,this.minFilter=l!==void 0?l:ge,this.flipY=!1,this.generateMipmaps=!1}}class r0 extends pr{constructor(t,e){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,g=null;const _=e.getContextAttributes();let m=null,d=null;const y=[],x=[],M=new Set,S=new Map,T=new Ve;T.layers.enable(1),T.viewport=new $t;const A=new Ve;A.layers.enable(2),A.viewport=new $t;const C=[T,A],v=new e0;v.layers.enable(1),v.layers.enable(2);let w=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let K=y[k];return K===void 0&&(K=new Na,y[k]=K),K.getTargetRaySpace()},this.getControllerGrip=function(k){let K=y[k];return K===void 0&&(K=new Na,y[k]=K),K.getGripSpace()},this.getHand=function(k){let K=y[k];return K===void 0&&(K=new Na,y[k]=K),K.getHandSpace()};function H(k){const K=x.indexOf(k.inputSource);if(K===-1)return;const at=y[K];at!==void 0&&(at.update(k.inputSource,k.frame,c||a),at.dispatchEvent({type:k.type,data:k.inputSource}))}function U(){i.removeEventListener("select",H),i.removeEventListener("selectstart",H),i.removeEventListener("selectend",H),i.removeEventListener("squeeze",H),i.removeEventListener("squeezestart",H),i.removeEventListener("squeezeend",H),i.removeEventListener("end",U),i.removeEventListener("inputsourceschange",I);for(let k=0;k<y.length;k++){const K=x[k];K!==null&&(x[k]=null,y[k].disconnect(K))}w=null,z=null,t.setRenderTarget(m),p=null,f=null,h=null,i=null,d=null,it.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){s=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){o=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(k){if(i=k,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",U),i.addEventListener("inputsourceschange",I),_.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const K={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,e,K),i.updateRenderState({baseLayer:p}),d=new Ti(p.framebufferWidth,p.framebufferHeight,{format:We,type:Ei,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let K=null,at=null,ht=null;_.depth&&(ht=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,K=_.stencil?sr:gi,at=_.stencil?ji:pi);const L={colorFormat:e.RGBA8,depthFormat:ht,scaleFactor:s};h=new XRWebGLBinding(i,e),f=h.createProjectionLayer(L),i.updateRenderState({layers:[f]}),d=new Ti(f.textureWidth,f.textureHeight,{format:We,type:Ei,depthTexture:new i0(f.textureWidth,f.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});const Ct=t.properties.get(d);Ct.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),it.setContext(i),it.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function I(k){for(let K=0;K<k.removed.length;K++){const at=k.removed[K],ht=x.indexOf(at);ht>=0&&(x[ht]=null,y[ht].disconnect(at))}for(let K=0;K<k.added.length;K++){const at=k.added[K];let ht=x.indexOf(at);if(ht===-1){for(let Ct=0;Ct<y.length;Ct++)if(Ct>=x.length){x.push(at),ht=Ct;break}else if(x[Ct]===null){x[Ct]=at,ht=Ct;break}if(ht===-1)break}const L=y[ht];L&&L.connect(at)}}const F=new P,q=new P;function G(k,K,at){F.setFromMatrixPosition(K.matrixWorld),q.setFromMatrixPosition(at.matrixWorld);const ht=F.distanceTo(q),L=K.projectionMatrix.elements,Ct=at.projectionMatrix.elements,Pt=L[14]/(L[10]-1),st=L[14]/(L[10]+1),vt=(L[9]+1)/L[5],$=(L[9]-1)/L[5],Z=(L[8]-1)/L[0],Q=(Ct[8]+1)/Ct[0],mt=Pt*Z,ct=Pt*Q,Tt=ht/(-Z+Q),bt=Tt*-Z;K.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(bt),k.translateZ(Tt),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const yt=Pt+Tt,Nt=st+Tt,Wt=mt-bt,R=ct+(ht-bt),E=vt*st/Nt*yt,B=$*st/Nt*yt;k.projectionMatrix.makePerspective(Wt,R,E,B,yt,Nt),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}function V(k,K){K===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(K.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(i===null)return;v.near=A.near=T.near=k.near,v.far=A.far=T.far=k.far,(w!==v.near||z!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),w=v.near,z=v.far);const K=k.parent,at=v.cameras;V(v,K);for(let ht=0;ht<at.length;ht++)V(at[ht],K);at.length===2?G(v,T,A):v.projectionMatrix.copy(T.projectionMatrix),tt(k,v,K)};function tt(k,K,at){at===null?k.matrix.copy(K.matrixWorld):(k.matrix.copy(at.matrixWorld),k.matrix.invert(),k.matrix.multiply(K.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0);const ht=k.children;for(let L=0,Ct=ht.length;L<Ct;L++)ht[L].updateMatrixWorld(!0);k.projectionMatrix.copy(K.projectionMatrix),k.projectionMatrixInverse.copy(K.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Or*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(k){l=k,f!==null&&(f.fixedFoveation=k),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=k)},this.getPlanes=function(){return M};let j=null;function dt(k,K){if(u=K.getViewerPose(c||a),g=K,u!==null){const at=u.views;p!==null&&(t.setRenderTargetFramebuffer(d,p.framebuffer),t.setRenderTarget(d));let ht=!1;at.length!==v.cameras.length&&(v.cameras.length=0,ht=!0);for(let L=0;L<at.length;L++){const Ct=at[L];let Pt=null;if(p!==null)Pt=p.getViewport(Ct);else{const vt=h.getViewSubImage(f,Ct);Pt=vt.viewport,L===0&&(t.setRenderTargetTextures(d,vt.colorTexture,f.ignoreDepthValues?void 0:vt.depthStencilTexture),t.setRenderTarget(d))}let st=C[L];st===void 0&&(st=new Ve,st.layers.enable(L),st.viewport=new $t,C[L]=st),st.matrix.fromArray(Ct.transform.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale),st.projectionMatrix.fromArray(Ct.projectionMatrix),st.projectionMatrixInverse.copy(st.projectionMatrix).invert(),st.viewport.set(Pt.x,Pt.y,Pt.width,Pt.height),L===0&&(v.matrix.copy(st.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ht===!0&&v.cameras.push(st)}}for(let at=0;at<y.length;at++){const ht=x[at],L=y[at];ht!==null&&L!==void 0&&L.update(ht,K,c||a)}if(j&&j(k,K),K.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:K.detectedPlanes});let at=null;for(const ht of M)K.detectedPlanes.has(ht)||(at===null&&(at=[]),at.push(ht));if(at!==null)for(const ht of at)M.delete(ht),S.delete(ht),n.dispatchEvent({type:"planeremoved",data:ht});for(const ht of K.detectedPlanes)if(!M.has(ht))M.add(ht),S.set(ht,K.lastChangedTime),n.dispatchEvent({type:"planeadded",data:ht});else{const L=S.get(ht);ht.lastChangedTime>L&&(S.set(ht,ht.lastChangedTime),n.dispatchEvent({type:"planechanged",data:ht}))}}g=null}const it=new wu;it.setAnimationLoop(dt),this.setAnimationLoop=function(k){j=k},this.dispose=function(){}}}function s0(r,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Eu(r)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function i(m,d,y,x,M){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),h(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,M)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),_(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,y,x):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===De&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===De&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const y=t.get(d).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const x=r.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*x,e(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,y,x){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*y,m.scale.value=x*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),t.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,y){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===De&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const y=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function a0(r,t,e,n){let i={},s={},a=[];const o=e.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,x){const M=x.program;n.uniformBlockBinding(y,M)}function c(y,x){let M=i[y.id];M===void 0&&(g(y),M=u(y),i[y.id]=M,y.addEventListener("dispose",m));const S=x.program;n.updateUBOMapping(y,S);const T=t.render.frame;s[y.id]!==T&&(f(y),s[y.id]=T)}function u(y){const x=h();y.__bindingPointIndex=x;const M=r.createBuffer(),S=y.__size,T=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,S,T),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,M),M}function h(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const x=i[y.id],M=y.uniforms,S=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let T=0,A=M.length;T<A;T++){const C=M[T];if(p(C,T,S)===!0){const v=C.__offset,w=Array.isArray(C.value)?C.value:[C.value];let z=0;for(let H=0;H<w.length;H++){const U=w[H],I=_(U);typeof U=="number"?(C.__data[0]=U,r.bufferSubData(r.UNIFORM_BUFFER,v+z,C.__data)):U.isMatrix3?(C.__data[0]=U.elements[0],C.__data[1]=U.elements[1],C.__data[2]=U.elements[2],C.__data[3]=U.elements[0],C.__data[4]=U.elements[3],C.__data[5]=U.elements[4],C.__data[6]=U.elements[5],C.__data[7]=U.elements[0],C.__data[8]=U.elements[6],C.__data[9]=U.elements[7],C.__data[10]=U.elements[8],C.__data[11]=U.elements[0]):(U.toArray(C.__data,z),z+=I.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,v,C.__data)}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function p(y,x,M){const S=y.value;if(M[x]===void 0){if(typeof S=="number")M[x]=S;else{const T=Array.isArray(S)?S:[S],A=[];for(let C=0;C<T.length;C++)A.push(T[C].clone());M[x]=A}return!0}else if(typeof S=="number"){if(M[x]!==S)return M[x]=S,!0}else{const T=Array.isArray(M[x])?M[x]:[M[x]],A=Array.isArray(S)?S:[S];for(let C=0;C<T.length;C++){const v=T[C];if(v.equals(A[C])===!1)return v.copy(A[C]),!0}}return!1}function g(y){const x=y.uniforms;let M=0;const S=16;let T=0;for(let A=0,C=x.length;A<C;A++){const v=x[A],w={boundary:0,storage:0},z=Array.isArray(v.value)?v.value:[v.value];for(let H=0,U=z.length;H<U;H++){const I=z[H],F=_(I);w.boundary+=F.boundary,w.storage+=F.storage}if(v.__data=new Float32Array(w.storage/Float32Array.BYTES_PER_ELEMENT),v.__offset=M,A>0){T=M%S;const H=S-T;T!==0&&H-w.boundary<0&&(M+=S-T,v.__offset=M)}M+=w.storage}return T=M%S,T>0&&(M+=S-T),y.__size=M,y.__cache={},this}function _(y){const x={boundary:0,storage:0};return typeof y=="number"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function m(y){const x=y.target;x.removeEventListener("dispose",m);const M=a.indexOf(x.__bindingPointIndex);a.splice(M,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function d(){for(const y in i)r.deleteBuffer(i[y]);a=[],i={},s={}}return{bind:l,update:c,dispose:d}}function o0(){const r=zr("canvas");return r.style.display="block",r}class Du{constructor(t={}){const{canvas:e=o0(),context:n=null,depth:i=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=a;let p=null,g=null;const _=[],m=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Dt,this.useLegacyLights=!0,this.toneMapping=On,this.toneMappingExposure=1;const d=this;let y=!1,x=0,M=0,S=null,T=-1,A=null;const C=new $t,v=new $t;let w=null,z=e.width,H=e.height,U=1,I=null,F=null;const q=new $t(0,0,z,H),G=new $t(0,0,z,H);let V=!1;const tt=new No;let j=!1,dt=!1,it=null;const k=new re,K=new P,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ht(){return S===null?U:1}let L=n;function Ct(b,O){for(let X=0;X<b.length;X++){const N=b[X],J=e.getContext(N,O);if(J!==null)return J}return null}try{const b={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Do}`),e.addEventListener("webglcontextlost",Mt,!1),e.addEventListener("webglcontextrestored",Ht,!1),e.addEventListener("webglcontextcreationerror",Xt,!1),L===null){const O=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&O.shift(),L=Ct(O,b),L===null)throw Ct(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}L.getShaderPrecisionFormat===void 0&&(L.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Pt,st,vt,$,Z,Q,mt,ct,Tt,bt,yt,Nt,Wt,R,E,B,et,rt,ut,Rt,pt,Y,gt,St;function wt(){Pt=new v_(L),st=new f_(L,Pt,t),Pt.init(st),Y=new t0(L,Pt,st),vt=new $g(L,Pt,st),$=new y_(L),Z=new zg,Q=new Qg(L,Pt,vt,Z,st,Y,$),mt=new p_(d),ct=new g_(d),Tt=new Ud(L,st),gt=new u_(L,Pt,Tt,st),bt=new x_(L,Tt,$,gt),yt=new b_(L,bt,Tt,$),ut=new T_(L,st,Q),B=new d_(Z),Nt=new Og(d,mt,ct,Pt,st,gt,B),Wt=new s0(d,Z),R=new Gg,E=new qg(Pt,st),rt=new c_(d,mt,ct,vt,yt,f,l),et=new jg(d,yt,st),St=new a0(L,$,st,vt),Rt=new h_(L,Pt,$,st),pt=new M_(L,Pt,$,st),$.programs=Nt.programs,d.capabilities=st,d.extensions=Pt,d.properties=Z,d.renderLists=R,d.shadowMap=et,d.state=vt,d.info=$}wt();const _t=new r0(d,L);this.xr=_t,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const b=Pt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Pt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(b){b!==void 0&&(U=b,this.setSize(z,H,!1))},this.getSize=function(b){return b.set(z,H)},this.setSize=function(b,O,X=!0){if(_t.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=b,H=O,e.width=Math.floor(b*U),e.height=Math.floor(O*U),X===!0&&(e.style.width=b+"px",e.style.height=O+"px"),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set(z*U,H*U).floor()},this.setDrawingBufferSize=function(b,O,X){z=b,H=O,U=X,e.width=Math.floor(b*X),e.height=Math.floor(O*X),this.setViewport(0,0,b,O)},this.getCurrentViewport=function(b){return b.copy(C)},this.getViewport=function(b){return b.copy(q)},this.setViewport=function(b,O,X,N){b.isVector4?q.set(b.x,b.y,b.z,b.w):q.set(b,O,X,N),vt.viewport(C.copy(q).multiplyScalar(U).floor())},this.getScissor=function(b){return b.copy(G)},this.setScissor=function(b,O,X,N){b.isVector4?G.set(b.x,b.y,b.z,b.w):G.set(b,O,X,N),vt.scissor(v.copy(G).multiplyScalar(U).floor())},this.getScissorTest=function(){return V},this.setScissorTest=function(b){vt.setScissorTest(V=b)},this.setOpaqueSort=function(b){I=b},this.setTransparentSort=function(b){F=b},this.getClearColor=function(b){return b.copy(rt.getClearColor())},this.setClearColor=function(){rt.setClearColor.apply(rt,arguments)},this.getClearAlpha=function(){return rt.getClearAlpha()},this.setClearAlpha=function(){rt.setClearAlpha.apply(rt,arguments)},this.clear=function(b=!0,O=!0,X=!0){let N=0;b&&(N|=L.COLOR_BUFFER_BIT),O&&(N|=L.DEPTH_BUFFER_BIT),X&&(N|=L.STENCIL_BUFFER_BIT),L.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Mt,!1),e.removeEventListener("webglcontextrestored",Ht,!1),e.removeEventListener("webglcontextcreationerror",Xt,!1),R.dispose(),E.dispose(),Z.dispose(),mt.dispose(),ct.dispose(),yt.dispose(),gt.dispose(),St.dispose(),Nt.dispose(),_t.dispose(),_t.removeEventListener("sessionstart",xt),_t.removeEventListener("sessionend",Yt),it&&(it.dispose(),it=null),Zt.stop()};function Mt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function Ht(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const b=$.autoReset,O=et.enabled,X=et.autoUpdate,N=et.needsUpdate,J=et.type;wt(),$.autoReset=b,et.enabled=O,et.autoUpdate=X,et.needsUpdate=N,et.type=J}function Xt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function se(b){const O=b.target;O.removeEventListener("dispose",se),D(O)}function D(b){W(b),Z.remove(b)}function W(b){const O=Z.get(b).programs;O!==void 0&&(O.forEach(function(X){Nt.releaseProgram(X)}),b.isShaderMaterial&&Nt.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,X,N,J,Et){O===null&&(O=at);const At=J.isMesh&&J.matrixWorld.determinant()<0,Lt=Yh(b,O,X,N,J);vt.setMaterial(N,At);let Ut=X.index,Ft=1;N.wireframe===!0&&(Ut=bt.getWireframeAttribute(X),Ft=2);const Ot=X.drawRange,zt=X.attributes.position;let qt=Ot.start*Ft,Re=(Ot.start+Ot.count)*Ft;Et!==null&&(qt=Math.max(qt,Et.start*Ft),Re=Math.min(Re,(Et.start+Et.count)*Ft)),Ut!==null?(qt=Math.max(qt,0),Re=Math.min(Re,Ut.count)):zt!=null&&(qt=Math.max(qt,0),Re=Math.min(Re,zt.count));const an=Re-qt;if(an<0||an===1/0)return;gt.setup(J,N,Lt,X,Ut);let ni,le=Rt;if(Ut!==null&&(ni=Tt.get(Ut),le=pt,le.setIndex(ni)),J.isMesh)N.wireframe===!0?(vt.setLineWidth(N.wireframeLinewidth*ht()),le.setMode(L.LINES)):le.setMode(L.TRIANGLES);else if(J.isLine){let Vt=N.linewidth;Vt===void 0&&(Vt=1),vt.setLineWidth(Vt*ht()),J.isLineSegments?le.setMode(L.LINES):J.isLineLoop?le.setMode(L.LINE_LOOP):le.setMode(L.LINE_STRIP)}else J.isPoints?le.setMode(L.POINTS):J.isSprite&&le.setMode(L.TRIANGLES);if(J.isInstancedMesh)le.renderInstances(qt,an,J.count);else if(X.isInstancedBufferGeometry){const Vt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,ia=Math.min(X.instanceCount,Vt);le.renderInstances(qt,an,ia)}else le.render(qt,an)},this.compile=function(b,O){function X(N,J,Et){N.transparent===!0&&N.side===Nn&&N.forceSinglePass===!1?(N.side=De,N.needsUpdate=!0,ns(N,J,Et),N.side=$n,N.needsUpdate=!0,ns(N,J,Et),N.side=Nn):ns(N,J,Et)}g=E.get(b),g.init(),m.push(g),b.traverseVisible(function(N){N.isLight&&N.layers.test(O.layers)&&(g.pushLight(N),N.castShadow&&g.pushShadow(N))}),g.setupLights(d.useLegacyLights),b.traverse(function(N){const J=N.material;if(J)if(Array.isArray(J))for(let Et=0;Et<J.length;Et++){const At=J[Et];X(At,b,N)}else X(J,b,N)}),m.pop(),g=null};let nt=null;function ft(b){nt&&nt(b)}function xt(){Zt.stop()}function Yt(){Zt.start()}const Zt=new wu;Zt.setAnimationLoop(ft),typeof self<"u"&&Zt.setContext(self),this.setAnimationLoop=function(b){nt=b,_t.setAnimationLoop(b),b===null?Zt.stop():Zt.start()},_t.addEventListener("sessionstart",xt),_t.addEventListener("sessionend",Yt),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),_t.enabled===!0&&_t.isPresenting===!0&&(_t.cameraAutoUpdate===!0&&_t.updateCamera(O),O=_t.getCamera()),b.isScene===!0&&b.onBeforeRender(d,b,O,S),g=E.get(b,m.length),g.init(),m.push(g),k.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),tt.setFromProjectionMatrix(k),dt=this.localClippingEnabled,j=B.init(this.clippingPlanes,dt),p=R.get(b,_.length),p.init(),_.push(p),ye(b,O,0,d.sortObjects),p.finish(),d.sortObjects===!0&&p.sort(I,F),j===!0&&B.beginShadows();const X=g.state.shadowsArray;if(et.render(X,b,O),j===!0&&B.endShadows(),this.info.autoReset===!0&&this.info.reset(),rt.render(p,b),g.setupLights(d.useLegacyLights),O.isArrayCamera){const N=O.cameras;for(let J=0,Et=N.length;J<Et;J++){const At=N[J];kn(p,b,At,At.viewport)}}else kn(p,b,O);S!==null&&(Q.updateMultisampleRenderTarget(S),Q.updateRenderTargetMipmap(S)),b.isScene===!0&&b.onAfterRender(d,b,O),gt.resetDefaultState(),T=-1,A=null,m.pop(),m.length>0?g=m[m.length-1]:g=null,_.pop(),_.length>0?p=_[_.length-1]:p=null};function ye(b,O,X,N){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)X=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLight)g.pushLight(b),b.castShadow&&g.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||tt.intersectsSprite(b)){N&&K.setFromMatrixPosition(b.matrixWorld).applyMatrix4(k);const At=yt.update(b),Lt=b.material;Lt.visible&&p.push(b,At,Lt,X,K.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||tt.intersectsObject(b))){b.isSkinnedMesh&&b.skeleton.frame!==$.render.frame&&(b.skeleton.update(),b.skeleton.frame=$.render.frame);const At=yt.update(b),Lt=b.material;if(N&&(At.boundingSphere===null&&At.computeBoundingSphere(),K.copy(At.boundingSphere.center).applyMatrix4(b.matrixWorld).applyMatrix4(k)),Array.isArray(Lt)){const Ut=At.groups;for(let Ft=0,Ot=Ut.length;Ft<Ot;Ft++){const zt=Ut[Ft],qt=Lt[zt.materialIndex];qt&&qt.visible&&p.push(b,At,qt,X,K.z,zt)}}else Lt.visible&&p.push(b,At,Lt,X,K.z,null)}}const Et=b.children;for(let At=0,Lt=Et.length;At<Lt;At++)ye(Et[At],O,X,N)}function kn(b,O,X,N){const J=b.opaque,Et=b.transmissive,At=b.transparent;g.setupLightsView(X),j===!0&&B.setGlobalState(d.clippingPlanes,X),Et.length>0&&ae(J,Et,O,X),N&&vt.viewport(C.copy(N)),J.length>0&&Je(J,O,X),Et.length>0&&Je(Et,O,X),At.length>0&&Je(At,O,X),vt.buffers.depth.setTest(!0),vt.buffers.depth.setMask(!0),vt.buffers.color.setMask(!0),vt.setPolygonOffset(!1)}function ae(b,O,X,N){if(it===null){const Lt=st.isWebGL2;it=new Ti(1024,1024,{generateMipmaps:!0,type:Pt.has("EXT_color_buffer_half_float")?Fr:Ei,minFilter:Nr,samples:Lt&&o===!0?4:0})}const J=d.getRenderTarget();d.setRenderTarget(it),d.clear();const Et=d.toneMapping;d.toneMapping=On,Je(b,X,N),Q.updateMultisampleRenderTarget(it),Q.updateRenderTargetMipmap(it);let At=!1;for(let Lt=0,Ut=O.length;Lt<Ut;Lt++){const Ft=O[Lt],Ot=Ft.object,zt=Ft.geometry,qt=Ft.material,Re=Ft.group;if(qt.side===Nn&&Ot.layers.test(N.layers)){const an=qt.side;qt.side=De,qt.needsUpdate=!0,mn(Ot,X,N,zt,qt,Re),qt.side=an,qt.needsUpdate=!0,At=!0}}At===!0&&(Q.updateMultisampleRenderTarget(it),Q.updateRenderTargetMipmap(it)),d.setRenderTarget(J),d.toneMapping=Et}function Je(b,O,X){const N=O.isScene===!0?O.overrideMaterial:null;for(let J=0,Et=b.length;J<Et;J++){const At=b[J],Lt=At.object,Ut=At.geometry,Ft=N===null?At.material:N,Ot=At.group;Lt.layers.test(X.layers)&&mn(Lt,O,X,Ut,Ft,Ot)}}function mn(b,O,X,N,J,Et){b.onBeforeRender(d,O,X,N,J,Et),b.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),J.onBeforeRender(d,O,X,N,b,Et),J.transparent===!0&&J.side===Nn&&J.forceSinglePass===!1?(J.side=De,J.needsUpdate=!0,d.renderBufferDirect(X,O,N,J,b,Et),J.side=$n,J.needsUpdate=!0,d.renderBufferDirect(X,O,N,J,b,Et),J.side=Nn):d.renderBufferDirect(X,O,N,J,b,Et),b.onAfterRender(d,O,X,N,J,Et)}function ns(b,O,X){O.isScene!==!0&&(O=at);const N=Z.get(b),J=g.state.lights,Et=g.state.shadowsArray,At=J.state.version,Lt=Nt.getParameters(b,J.state,Et,O,X),Ut=Nt.getProgramCacheKey(Lt);let Ft=N.programs;N.environment=b.isMeshStandardMaterial?O.environment:null,N.fog=O.fog,N.envMap=(b.isMeshStandardMaterial?ct:mt).get(b.envMap||N.environment),Ft===void 0&&(b.addEventListener("dispose",se),Ft=new Map,N.programs=Ft);let Ot=Ft.get(Ut);if(Ot!==void 0){if(N.currentProgram===Ot&&N.lightsStateVersion===At)return ol(b,Lt),Ot}else Lt.uniforms=Nt.getUniforms(b),b.onBuild(X,Lt,d),b.onBeforeCompile(Lt,d),Ot=Nt.acquireProgram(Lt,Ut),Ft.set(Ut,Ot),N.uniforms=Lt.uniforms;const zt=N.uniforms;(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(zt.clippingPlanes=B.uniform),ol(b,Lt),N.needsLights=Jh(b),N.lightsStateVersion=At,N.needsLights&&(zt.ambientLightColor.value=J.state.ambient,zt.lightProbe.value=J.state.probe,zt.directionalLights.value=J.state.directional,zt.directionalLightShadows.value=J.state.directionalShadow,zt.spotLights.value=J.state.spot,zt.spotLightShadows.value=J.state.spotShadow,zt.rectAreaLights.value=J.state.rectArea,zt.ltc_1.value=J.state.rectAreaLTC1,zt.ltc_2.value=J.state.rectAreaLTC2,zt.pointLights.value=J.state.point,zt.pointLightShadows.value=J.state.pointShadow,zt.hemisphereLights.value=J.state.hemi,zt.directionalShadowMap.value=J.state.directionalShadowMap,zt.directionalShadowMatrix.value=J.state.directionalShadowMatrix,zt.spotShadowMap.value=J.state.spotShadowMap,zt.spotLightMatrix.value=J.state.spotLightMatrix,zt.spotLightMap.value=J.state.spotLightMap,zt.pointShadowMap.value=J.state.pointShadowMap,zt.pointShadowMatrix.value=J.state.pointShadowMatrix);const qt=Ot.getUniforms(),Re=Ls.seqWithValue(qt.seq,zt);return N.currentProgram=Ot,N.uniformsList=Re,Ot}function ol(b,O){const X=Z.get(b);X.outputColorSpace=O.outputColorSpace,X.instancing=O.instancing,X.skinning=O.skinning,X.morphTargets=O.morphTargets,X.morphNormals=O.morphNormals,X.morphColors=O.morphColors,X.morphTargetsCount=O.morphTargetsCount,X.numClippingPlanes=O.numClippingPlanes,X.numIntersection=O.numClipIntersection,X.vertexAlphas=O.vertexAlphas,X.vertexTangents=O.vertexTangents,X.toneMapping=O.toneMapping}function Yh(b,O,X,N,J){O.isScene!==!0&&(O=at),Q.resetTextureUnits();const Et=O.fog,At=N.isMeshStandardMaterial?O.environment:null,Lt=S===null?d.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:Sn,Ut=(N.isMeshStandardMaterial?ct:mt).get(N.envMap||At),Ft=N.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ot=!!N.normalMap&&!!X.attributes.tangent,zt=!!X.morphAttributes.position,qt=!!X.morphAttributes.normal,Re=!!X.morphAttributes.color,an=N.toneMapped?d.toneMapping:On,ni=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,le=ni!==void 0?ni.length:0,Vt=Z.get(N),ia=g.state.lights;if(j===!0&&(dt===!0||b!==A)){const Be=b===A&&N.id===T;B.setState(N,b,Be)}let pe=!1;N.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==ia.state.version||Vt.outputColorSpace!==Lt||J.isInstancedMesh&&Vt.instancing===!1||!J.isInstancedMesh&&Vt.instancing===!0||J.isSkinnedMesh&&Vt.skinning===!1||!J.isSkinnedMesh&&Vt.skinning===!0||Vt.envMap!==Ut||N.fog===!0&&Vt.fog!==Et||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==B.numPlanes||Vt.numIntersection!==B.numIntersection)||Vt.vertexAlphas!==Ft||Vt.vertexTangents!==Ot||Vt.morphTargets!==zt||Vt.morphNormals!==qt||Vt.morphColors!==Re||Vt.toneMapping!==an||st.isWebGL2===!0&&Vt.morphTargetsCount!==le)&&(pe=!0):(pe=!0,Vt.__version=N.version);let ii=Vt.currentProgram;pe===!0&&(ii=ns(N,O,J));let ll=!1,gr=!1,ra=!1;const Ce=ii.getUniforms(),ri=Vt.uniforms;if(vt.useProgram(ii.program)&&(ll=!0,gr=!0,ra=!0),N.id!==T&&(T=N.id,gr=!0),ll||A!==b){if(Ce.setValue(L,"projectionMatrix",b.projectionMatrix),st.logarithmicDepthBuffer&&Ce.setValue(L,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),A!==b&&(A=b,gr=!0,ra=!0),N.isShaderMaterial||N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshStandardMaterial||N.envMap){const Be=Ce.map.cameraPosition;Be!==void 0&&Be.setValue(L,K.setFromMatrixPosition(b.matrixWorld))}(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&Ce.setValue(L,"isOrthographic",b.isOrthographicCamera===!0),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial||N.isShadowMaterial||J.isSkinnedMesh)&&Ce.setValue(L,"viewMatrix",b.matrixWorldInverse)}if(J.isSkinnedMesh){Ce.setOptional(L,J,"bindMatrix"),Ce.setOptional(L,J,"bindMatrixInverse");const Be=J.skeleton;Be&&(st.floatVertexTextures?(Be.boneTexture===null&&Be.computeBoneTexture(),Ce.setValue(L,"boneTexture",Be.boneTexture,Q),Ce.setValue(L,"boneTextureSize",Be.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const sa=X.morphAttributes;if((sa.position!==void 0||sa.normal!==void 0||sa.color!==void 0&&st.isWebGL2===!0)&&ut.update(J,X,ii),(gr||Vt.receiveShadow!==J.receiveShadow)&&(Vt.receiveShadow=J.receiveShadow,Ce.setValue(L,"receiveShadow",J.receiveShadow)),N.isMeshGouraudMaterial&&N.envMap!==null&&(ri.envMap.value=Ut,ri.flipEnvMap.value=Ut.isCubeTexture&&Ut.isRenderTargetTexture===!1?-1:1),gr&&(Ce.setValue(L,"toneMappingExposure",d.toneMappingExposure),Vt.needsLights&&Zh(ri,ra),Et&&N.fog===!0&&Wt.refreshFogUniforms(ri,Et),Wt.refreshMaterialUniforms(ri,N,U,H,it),Ls.upload(L,Vt.uniformsList,ri,Q)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(Ls.upload(L,Vt.uniformsList,ri,Q),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&Ce.setValue(L,"center",J.center),Ce.setValue(L,"modelViewMatrix",J.modelViewMatrix),Ce.setValue(L,"normalMatrix",J.normalMatrix),Ce.setValue(L,"modelMatrix",J.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){const Be=N.uniformsGroups;for(let aa=0,Kh=Be.length;aa<Kh;aa++)if(st.isWebGL2){const cl=Be[aa];St.update(cl,ii),St.bind(cl,ii)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ii}function Zh(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function Jh(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(b,O,X){Z.get(b.texture).__webglTexture=O,Z.get(b.depthTexture).__webglTexture=X;const N=Z.get(b);N.__hasExternalTextures=!0,N.__hasExternalTextures&&(N.__autoAllocateDepthBuffer=X===void 0,N.__autoAllocateDepthBuffer||Pt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),N.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,O){const X=Z.get(b);X.__webglFramebuffer=O,X.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(b,O=0,X=0){S=b,x=O,M=X;let N=!0,J=null,Et=!1,At=!1;if(b){const Ut=Z.get(b);Ut.__useDefaultFramebuffer!==void 0?(vt.bindFramebuffer(L.FRAMEBUFFER,null),N=!1):Ut.__webglFramebuffer===void 0?Q.setupRenderTarget(b):Ut.__hasExternalTextures&&Q.rebindTextures(b,Z.get(b.texture).__webglTexture,Z.get(b.depthTexture).__webglTexture);const Ft=b.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(At=!0);const Ot=Z.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(J=Ot[O],Et=!0):st.isWebGL2&&b.samples>0&&Q.useMultisampledRTT(b)===!1?J=Z.get(b).__webglMultisampledFramebuffer:J=Ot,C.copy(b.viewport),v.copy(b.scissor),w=b.scissorTest}else C.copy(q).multiplyScalar(U).floor(),v.copy(G).multiplyScalar(U).floor(),w=V;if(vt.bindFramebuffer(L.FRAMEBUFFER,J)&&st.drawBuffers&&N&&vt.drawBuffers(b,J),vt.viewport(C),vt.scissor(v),vt.setScissorTest(w),Et){const Ut=Z.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ut.__webglTexture,X)}else if(At){const Ut=Z.get(b.texture),Ft=O||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ut.__webglTexture,X||0,Ft)}T=-1},this.readRenderTargetPixels=function(b,O,X,N,J,Et,At){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=Z.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&At!==void 0&&(Lt=Lt[At]),Lt){vt.bindFramebuffer(L.FRAMEBUFFER,Lt);try{const Ut=b.texture,Ft=Ut.format,Ot=Ut.type;if(Ft!==We&&Y.convert(Ft)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const zt=Ot===Fr&&(Pt.has("EXT_color_buffer_half_float")||st.isWebGL2&&Pt.has("EXT_color_buffer_float"));if(Ot!==Ei&&Y.convert(Ot)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ot===mi&&(st.isWebGL2||Pt.has("OES_texture_float")||Pt.has("WEBGL_color_buffer_float")))&&!zt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-N&&X>=0&&X<=b.height-J&&L.readPixels(O,X,N,J,Y.convert(Ft),Y.convert(Ot),Et)}finally{const Ut=S!==null?Z.get(S).__webglFramebuffer:null;vt.bindFramebuffer(L.FRAMEBUFFER,Ut)}}},this.copyFramebufferToTexture=function(b,O,X=0){const N=Math.pow(2,-X),J=Math.floor(O.image.width*N),Et=Math.floor(O.image.height*N);Q.setTexture2D(O,0),L.copyTexSubImage2D(L.TEXTURE_2D,X,0,0,b.x,b.y,J,Et),vt.unbindTexture()},this.copyTextureToTexture=function(b,O,X,N=0){const J=O.image.width,Et=O.image.height,At=Y.convert(X.format),Lt=Y.convert(X.type);Q.setTexture2D(X,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,X.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,X.unpackAlignment),O.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,N,b.x,b.y,J,Et,At,Lt,O.image.data):O.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,N,b.x,b.y,O.mipmaps[0].width,O.mipmaps[0].height,At,O.mipmaps[0].data):L.texSubImage2D(L.TEXTURE_2D,N,b.x,b.y,At,Lt,O.image),N===0&&X.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),vt.unbindTexture()},this.copyTextureToTexture3D=function(b,O,X,N,J=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Et=b.max.x-b.min.x+1,At=b.max.y-b.min.y+1,Lt=b.max.z-b.min.z+1,Ut=Y.convert(N.format),Ft=Y.convert(N.type);let Ot;if(N.isData3DTexture)Q.setTexture3D(N,0),Ot=L.TEXTURE_3D;else if(N.isDataArrayTexture)Q.setTexture2DArray(N,0),Ot=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);const zt=L.getParameter(L.UNPACK_ROW_LENGTH),qt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Re=L.getParameter(L.UNPACK_SKIP_PIXELS),an=L.getParameter(L.UNPACK_SKIP_ROWS),ni=L.getParameter(L.UNPACK_SKIP_IMAGES),le=X.isCompressedTexture?X.mipmaps[0]:X.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,le.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,le.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,b.min.x),L.pixelStorei(L.UNPACK_SKIP_ROWS,b.min.y),L.pixelStorei(L.UNPACK_SKIP_IMAGES,b.min.z),X.isDataTexture||X.isData3DTexture?L.texSubImage3D(Ot,J,O.x,O.y,O.z,Et,At,Lt,Ut,Ft,le.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),L.compressedTexSubImage3D(Ot,J,O.x,O.y,O.z,Et,At,Lt,Ut,le.data)):L.texSubImage3D(Ot,J,O.x,O.y,O.z,Et,At,Lt,Ut,Ft,le),L.pixelStorei(L.UNPACK_ROW_LENGTH,zt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,qt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Re),L.pixelStorei(L.UNPACK_SKIP_ROWS,an),L.pixelStorei(L.UNPACK_SKIP_IMAGES,ni),J===0&&N.generateMipmaps&&L.generateMipmap(Ot),vt.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?Q.setTextureCube(b,0):b.isData3DTexture?Q.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Q.setTexture2DArray(b,0):Q.setTexture2D(b,0),vt.unbindTexture()},this.resetState=function(){x=0,M=0,S=null,vt.reset(),gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(t){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!t}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Dt?vi:uu}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===vi?Dt:Sn}}class l0 extends Du{}l0.prototype.isWebGL1Renderer=!0;class c0 extends Me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class u0{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=oo,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Mn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Pe=new P;class Os{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}setX(t,e){return this.normalized&&(e=Kt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Kt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Kt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Kt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Fn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Fn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Fn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Fn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Kt(e,this.array),n=Kt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Kt(e,this.array),n=Kt(n,this.array),i=Kt(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Kt(e,this.array),n=Kt(n,this.array),i=Kt(i,this.array),s=Kt(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new dn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Os(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Uu extends mr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Tc=new re,ho=new vu,Ts=new Js,bs=new P;class h0 extends Me{constructor(t=new sn,e=new Uu){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ts.copy(n.boundingSphere),Ts.applyMatrix4(i),Ts.radius+=s,t.ray.intersectsSphere(Ts)===!1)return;Tc.copy(i).invert(),ho.copy(t.ray).applyMatrix4(Tc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=f,_=p;g<_;g++){const m=c.getX(g);bs.fromBufferAttribute(h,m),bc(bs,m,l,i,t,e,this)}}else{const f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let g=f,_=p;g<_;g++)bs.fromBufferAttribute(h,g),bc(bs,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function bc(r,t,e,n,i,s,a){const o=ho.distanceSqToPoint(r);if(o<e){const l=new P;ho.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,object:a})}}class wc extends Ue{constructor(t,e,n){super({width:t,height:e}),this.isFramebufferTexture=!0,this.format=n,this.magFilter=ge,this.minFilter=ge,this.generateMipmaps=!1,this.needsUpdate=!0}}class Tn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const s=n.length;let a;e?a=e:a=t*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(s-1);const u=n[i],f=n[i+1]-u,p=(a-u)/f;return(i+p)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const a=this.getPoint(i),o=this.getPoint(s),l=e||(a.isVector2?new lt:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new P,i=[],s=[],a=[],o=new P,l=new re;for(let p=0;p<=t;p++){const g=p/t;i[p]=this.getTangentAt(g,new P)}s[0]=new P,a[0]=new P;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let p=1;p<=t;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(i[p-1],i[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(ve(i[p-1].dot(i[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(i[p],s[p])}if(e===!0){let p=Math.acos(ve(s[0].dot(s[t]),-1,1));p/=t,i[0].dot(o.crossVectors(s[0],s[t]))>0&&(p=-p);for(let g=1;g<=t;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],p*g)),a[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class zo extends Tn{constructor(t=0,e=0,n=1,i=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e){const n=e||new lt,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);const o=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*u-p*h+this.aX,c=f*h+p*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class f0 extends zo{constructor(t,e,n,i,s,a){super(t,e,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Bo(){let r=0,t=0,e=0,n=0;function i(s,a,o,l){r=s,t=o,e=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,u,h){let f=(a-s)/c-(o-s)/(c+u)+(o-a)/u,p=(o-a)/u-(l-a)/(u+h)+(l-o)/h;f*=u,p*=u,i(a,o,f,p)},calc:function(s){const a=s*s,o=a*s;return r+t*s+e*a+n*o}}}const ws=new P,Fa=new Bo,Oa=new Bo,za=new Bo;class d0 extends Tn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new P){const n=e,i=this.points,s=i.length,a=(s-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=i[(o-1)%s]:(ws.subVectors(i[0],i[1]).add(i[0]),c=ws);const h=i[o%s],f=i[(o+1)%s];if(this.closed||o+2<s?u=i[(o+2)%s]:(ws.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=ws),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),p),_=Math.pow(h.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(u),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Fa.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,_,m),Oa.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,_,m),za.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(Fa.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),Oa.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),za.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(Fa.calc(l),Oa.calc(l),za.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new P().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Ac(r,t,e,n,i){const s=(n-t)*.5,a=(i-e)*.5,o=r*r,l=r*o;return(2*e-2*n+s+a)*l+(-3*e+3*n-2*s-a)*o+s*r+e}function p0(r,t){const e=1-r;return e*e*t}function m0(r,t){return 2*(1-r)*r*t}function _0(r,t){return r*r*t}function Pr(r,t,e,n){return p0(r,t)+m0(r,e)+_0(r,n)}function g0(r,t){const e=1-r;return e*e*e*t}function v0(r,t){const e=1-r;return 3*e*e*r*t}function x0(r,t){return 3*(1-r)*r*r*t}function M0(r,t){return r*r*r*t}function Lr(r,t,e,n,i){return g0(r,t)+v0(r,e)+x0(r,n)+M0(r,i)}class Iu extends Tn{constructor(t=new lt,e=new lt,n=new lt,i=new lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new lt){const n=e,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Lr(t,i.x,s.x,a.x,o.x),Lr(t,i.y,s.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class y0 extends Tn{constructor(t=new P,e=new P,n=new P,i=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new P){const n=e,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Lr(t,i.x,s.x,a.x,o.x),Lr(t,i.y,s.y,a.y,o.y),Lr(t,i.z,s.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Go extends Tn{constructor(t=new lt,e=new lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new lt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new lt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class S0 extends Tn{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Nu extends Tn{constructor(t=new lt,e=new lt,n=new lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new lt){const n=e,i=this.v0,s=this.v1,a=this.v2;return n.set(Pr(t,i.x,s.x,a.x),Pr(t,i.y,s.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class E0 extends Tn{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){const n=e,i=this.v0,s=this.v1,a=this.v2;return n.set(Pr(t,i.x,s.x,a.x),Pr(t,i.y,s.y,a.y),Pr(t,i.z,s.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Fu extends Tn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new lt){const n=e,i=this.points,s=(i.length-1)*t,a=Math.floor(s),o=s-a,l=i[a===0?a:a-1],c=i[a],u=i[a>i.length-2?i.length-1:a+1],h=i[a>i.length-3?i.length-1:a+2];return n.set(Ac(o,l.x,c.x,u.x,h.x),Ac(o,l.y,c.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new lt().fromArray(i))}return this}}var Ou=Object.freeze({__proto__:null,ArcCurve:f0,CatmullRomCurve3:d0,CubicBezierCurve:Iu,CubicBezierCurve3:y0,EllipseCurve:zo,LineCurve:Go,LineCurve3:S0,QuadraticBezierCurve:Nu,QuadraticBezierCurve3:E0,SplineCurve:Fu});class T0 extends Tn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);t.equals(e)||this.curves.push(new Go(e,t))}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const a=i[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const a=s[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Ou[i.type]().fromJSON(i))}return this}}class fo extends T0{constructor(t){super(),this.type="Path",this.currentPoint=new lt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Go(this.currentPoint.clone(),new lt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const s=new Nu(this.currentPoint.clone(),new lt(t,e),new lt(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,a){const o=new Iu(this.currentPoint.clone(),new lt(t,e),new lt(n,i),new lt(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Fu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,i,s,a),this}absarc(t,e,n,i,s,a){return this.absellipse(t,e,n,n,i,s,a),this}ellipse(t,e,n,i,s,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,i,s,a,o,l),this}absellipse(t,e,n,i,s,a,o,l){const c=new zo(t,e,n,i,s,a,o,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ds extends fo{constructor(t){super(t),this.uuid=Mn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new fo().fromJSON(i))}return this}}const b0={triangulate:function(r,t,e=2){const n=t&&t.length,i=n?t[0]*e:r.length;let s=zu(r,0,i,e,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c,u,h,f,p;if(n&&(s=P0(r,t,s,e)),r.length>80*e){o=c=r[0],l=u=r[1];for(let g=e;g<i;g+=e)h=r[g],f=r[g+1],h<o&&(o=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);p=Math.max(c-o,u-l),p=p!==0?32767/p:0}return Gr(s,a,e,o,l,p,0),a}};function zu(r,t,e,n,i){let s,a;if(i===k0(r,t,e,n)>0)for(s=t;s<e;s+=n)a=Rc(s,r[s],r[s+1],a);else for(s=e-n;s>=t;s-=n)a=Rc(s,r[s],r[s+1],a);return a&&$s(a,a.next)&&(Hr(a),a=a.next),a}function bi(r,t){if(!r)return r;t||(t=r);let e=r,n;do if(n=!1,!e.steiner&&($s(e,e.next)||ee(e.prev,e,e.next)===0)){if(Hr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Gr(r,t,e,n,i,s,a){if(!r)return;!a&&s&&N0(r,n,i,s);let o=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?A0(r,n,i,s):w0(r)){t.push(l.i/e|0),t.push(r.i/e|0),t.push(c.i/e|0),Hr(r),r=c.next,o=c.next;continue}if(r=c,r===o){a?a===1?(r=R0(bi(r),t,e),Gr(r,t,e,n,i,s,2)):a===2&&C0(r,t,e,n,i,s):Gr(bi(r),t,e,n,i,s,1);break}}}function w0(r){const t=r.prev,e=r,n=r.next;if(ee(t,e,n)>=0)return!1;const i=t.x,s=e.x,a=n.x,o=t.y,l=e.y,c=n.y,u=i<s?i<a?i:a:s<a?s:a,h=o<l?o<c?o:c:l<c?l:c,f=i>s?i>a?i:a:s>a?s:a,p=o>l?o>c?o:c:l>c?l:c;let g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=p&&Yi(i,o,s,l,a,c,g.x,g.y)&&ee(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function A0(r,t,e,n){const i=r.prev,s=r,a=r.next;if(ee(i,s,a)>=0)return!1;const o=i.x,l=s.x,c=a.x,u=i.y,h=s.y,f=a.y,p=o<l?o<c?o:c:l<c?l:c,g=u<h?u<f?u:f:h<f?h:f,_=o>l?o>c?o:c:l>c?l:c,m=u>h?u>f?u:f:h>f?h:f,d=po(p,g,t,e,n),y=po(_,m,t,e,n);let x=r.prevZ,M=r.nextZ;for(;x&&x.z>=d&&M&&M.z<=y;){if(x.x>=p&&x.x<=_&&x.y>=g&&x.y<=m&&x!==i&&x!==a&&Yi(o,u,l,h,c,f,x.x,x.y)&&ee(x.prev,x,x.next)>=0||(x=x.prevZ,M.x>=p&&M.x<=_&&M.y>=g&&M.y<=m&&M!==i&&M!==a&&Yi(o,u,l,h,c,f,M.x,M.y)&&ee(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;x&&x.z>=d;){if(x.x>=p&&x.x<=_&&x.y>=g&&x.y<=m&&x!==i&&x!==a&&Yi(o,u,l,h,c,f,x.x,x.y)&&ee(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;M&&M.z<=y;){if(M.x>=p&&M.x<=_&&M.y>=g&&M.y<=m&&M!==i&&M!==a&&Yi(o,u,l,h,c,f,M.x,M.y)&&ee(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function R0(r,t,e){let n=r;do{const i=n.prev,s=n.next.next;!$s(i,s)&&Bu(i,n,n.next,s)&&kr(i,s)&&kr(s,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),Hr(n),Hr(n.next),n=r=s),n=n.next}while(n!==r);return bi(n)}function C0(r,t,e,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&z0(a,o)){let l=Gu(a,o);a=bi(a,a.next),l=bi(l,l.next),Gr(a,t,e,n,i,s,0),Gr(l,t,e,n,i,s,0);return}o=o.next}a=a.next}while(a!==r)}function P0(r,t,e,n){const i=[];let s,a,o,l,c;for(s=0,a=t.length;s<a;s++)o=t[s]*n,l=s<a-1?t[s+1]*n:r.length,c=zu(r,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(O0(c));for(i.sort(L0),s=0;s<i.length;s++)e=D0(i[s],e);return e}function L0(r,t){return r.x-t.x}function D0(r,t){const e=U0(r,t);if(!e)return t;const n=Gu(e,r);return bi(n,n.next),bi(e,e.next)}function U0(r,t){let e=t,n=-1/0,i;const s=r.x,a=r.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const f=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=s&&f>n&&(n=f,i=e.x<e.next.x?e:e.next,f===s))return i}e=e.next}while(e!==t);if(!i)return null;const o=i,l=i.x,c=i.y;let u=1/0,h;e=i;do s>=e.x&&e.x>=l&&s!==e.x&&Yi(a<c?s:n,a,l,c,a<c?n:s,a,e.x,e.y)&&(h=Math.abs(a-e.y)/(s-e.x),kr(e,r)&&(h<u||h===u&&(e.x>i.x||e.x===i.x&&I0(i,e)))&&(i=e,u=h)),e=e.next;while(e!==o);return i}function I0(r,t){return ee(r.prev,r,t.prev)<0&&ee(t.next,r,r.next)<0}function N0(r,t,e,n){let i=r;do i.z===0&&(i.z=po(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,F0(i)}function F0(r){let t,e,n,i,s,a,o,l,c=1;do{for(e=r,r=null,s=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,o--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;e=n}s.nextZ=null,c*=2}while(a>1);return r}function po(r,t,e,n,i){return r=(r-e)*i|0,t=(t-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function O0(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function Yi(r,t,e,n,i,s,a,o){return(i-a)*(t-o)>=(r-a)*(s-o)&&(r-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(s-o)>=(i-a)*(n-o)}function z0(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!B0(r,t)&&(kr(r,t)&&kr(t,r)&&G0(r,t)&&(ee(r.prev,r,t.prev)||ee(r,t.prev,t))||$s(r,t)&&ee(r.prev,r,r.next)>0&&ee(t.prev,t,t.next)>0)}function ee(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function $s(r,t){return r.x===t.x&&r.y===t.y}function Bu(r,t,e,n){const i=Rs(ee(r,t,e)),s=Rs(ee(r,t,n)),a=Rs(ee(e,n,r)),o=Rs(ee(e,n,t));return!!(i!==s&&a!==o||i===0&&As(r,e,t)||s===0&&As(r,n,t)||a===0&&As(e,r,n)||o===0&&As(e,t,n))}function As(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function Rs(r){return r>0?1:r<0?-1:0}function B0(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&Bu(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function kr(r,t){return ee(r.prev,r,r.next)<0?ee(r,t,r.next)>=0&&ee(r,r.prev,t)>=0:ee(r,t,r.prev)<0||ee(r,r.next,t)<0}function G0(r,t){let e=r,n=!1;const i=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==r);return n}function Gu(r,t){const e=new mo(r.i,r.x,r.y),n=new mo(t.i,t.x,t.y),i=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function Rc(r,t,e,n){const i=new mo(r,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Hr(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function mo(r,t,e){this.i=r,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function k0(r,t,e,n){let i=0;for(let s=t,a=e-n;s<e;s+=n)i+=(r[a]-r[s])*(r[s+1]+r[a+1]),a=s;return i}class Qi{static area(t){const e=t.length;let n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return Qi.area(t)<0}static triangulateShape(t,e){const n=[],i=[],s=[];Cc(t),Pc(n,t);let a=t.length;e.forEach(Cc);for(let l=0;l<e.length;l++)i.push(a),a+=e[l].length,Pc(n,e[l]);const o=b0.triangulate(n,i);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function Cc(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function Pc(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}class ko extends sn{constructor(t=new Ds([new lt(.5,.5),new lt(-.5,.5),new lt(-.5,-.5),new lt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],s=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new qe(i,3)),this.setAttribute("uv",new qe(s,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const d=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:H0;let x,M=!1,S,T,A,C;d&&(x=d.getSpacedPoints(u),M=!0,f=!1,S=d.computeFrenetFrames(u,!1),T=new P,A=new P,C=new P),f||(m=0,p=0,g=0,_=0);const v=o.extractPoints(c);let w=v.shape;const z=v.holes;if(!Qi.isClockWise(w)){w=w.reverse();for(let $=0,Z=z.length;$<Z;$++){const Q=z[$];Qi.isClockWise(Q)&&(z[$]=Q.reverse())}}const U=Qi.triangulateShape(w,z),I=w;for(let $=0,Z=z.length;$<Z;$++){const Q=z[$];w=w.concat(Q)}function F($,Z,Q){return Z||console.error("THREE.ExtrudeGeometry: vec does not exist"),$.clone().addScaledVector(Z,Q)}const q=w.length,G=U.length;function V($,Z,Q){let mt,ct,Tt;const bt=$.x-Z.x,yt=$.y-Z.y,Nt=Q.x-$.x,Wt=Q.y-$.y,R=bt*bt+yt*yt,E=bt*Wt-yt*Nt;if(Math.abs(E)>Number.EPSILON){const B=Math.sqrt(R),et=Math.sqrt(Nt*Nt+Wt*Wt),rt=Z.x-yt/B,ut=Z.y+bt/B,Rt=Q.x-Wt/et,pt=Q.y+Nt/et,Y=((Rt-rt)*Wt-(pt-ut)*Nt)/(bt*Wt-yt*Nt);mt=rt+bt*Y-$.x,ct=ut+yt*Y-$.y;const gt=mt*mt+ct*ct;if(gt<=2)return new lt(mt,ct);Tt=Math.sqrt(gt/2)}else{let B=!1;bt>Number.EPSILON?Nt>Number.EPSILON&&(B=!0):bt<-Number.EPSILON?Nt<-Number.EPSILON&&(B=!0):Math.sign(yt)===Math.sign(Wt)&&(B=!0),B?(mt=-yt,ct=bt,Tt=Math.sqrt(R)):(mt=bt,ct=yt,Tt=Math.sqrt(R/2))}return new lt(mt/Tt,ct/Tt)}const tt=[];for(let $=0,Z=I.length,Q=Z-1,mt=$+1;$<Z;$++,Q++,mt++)Q===Z&&(Q=0),mt===Z&&(mt=0),tt[$]=V(I[$],I[Q],I[mt]);const j=[];let dt,it=tt.concat();for(let $=0,Z=z.length;$<Z;$++){const Q=z[$];dt=[];for(let mt=0,ct=Q.length,Tt=ct-1,bt=mt+1;mt<ct;mt++,Tt++,bt++)Tt===ct&&(Tt=0),bt===ct&&(bt=0),dt[mt]=V(Q[mt],Q[Tt],Q[bt]);j.push(dt),it=it.concat(dt)}for(let $=0;$<m;$++){const Z=$/m,Q=p*Math.cos(Z*Math.PI/2),mt=g*Math.sin(Z*Math.PI/2)+_;for(let ct=0,Tt=I.length;ct<Tt;ct++){const bt=F(I[ct],tt[ct],mt);L(bt.x,bt.y,-Q)}for(let ct=0,Tt=z.length;ct<Tt;ct++){const bt=z[ct];dt=j[ct];for(let yt=0,Nt=bt.length;yt<Nt;yt++){const Wt=F(bt[yt],dt[yt],mt);L(Wt.x,Wt.y,-Q)}}}const k=g+_;for(let $=0;$<q;$++){const Z=f?F(w[$],it[$],k):w[$];M?(A.copy(S.normals[0]).multiplyScalar(Z.x),T.copy(S.binormals[0]).multiplyScalar(Z.y),C.copy(x[0]).add(A).add(T),L(C.x,C.y,C.z)):L(Z.x,Z.y,0)}for(let $=1;$<=u;$++)for(let Z=0;Z<q;Z++){const Q=f?F(w[Z],it[Z],k):w[Z];M?(A.copy(S.normals[$]).multiplyScalar(Q.x),T.copy(S.binormals[$]).multiplyScalar(Q.y),C.copy(x[$]).add(A).add(T),L(C.x,C.y,C.z)):L(Q.x,Q.y,h/u*$)}for(let $=m-1;$>=0;$--){const Z=$/m,Q=p*Math.cos(Z*Math.PI/2),mt=g*Math.sin(Z*Math.PI/2)+_;for(let ct=0,Tt=I.length;ct<Tt;ct++){const bt=F(I[ct],tt[ct],mt);L(bt.x,bt.y,h+Q)}for(let ct=0,Tt=z.length;ct<Tt;ct++){const bt=z[ct];dt=j[ct];for(let yt=0,Nt=bt.length;yt<Nt;yt++){const Wt=F(bt[yt],dt[yt],mt);M?L(Wt.x,Wt.y+x[u-1].y,x[u-1].x+Q):L(Wt.x,Wt.y,h+Q)}}}K(),at();function K(){const $=i.length/3;if(f){let Z=0,Q=q*Z;for(let mt=0;mt<G;mt++){const ct=U[mt];Ct(ct[2]+Q,ct[1]+Q,ct[0]+Q)}Z=u+m*2,Q=q*Z;for(let mt=0;mt<G;mt++){const ct=U[mt];Ct(ct[0]+Q,ct[1]+Q,ct[2]+Q)}}else{for(let Z=0;Z<G;Z++){const Q=U[Z];Ct(Q[2],Q[1],Q[0])}for(let Z=0;Z<G;Z++){const Q=U[Z];Ct(Q[0]+q*u,Q[1]+q*u,Q[2]+q*u)}}n.addGroup($,i.length/3-$,0)}function at(){const $=i.length/3;let Z=0;ht(I,Z),Z+=I.length;for(let Q=0,mt=z.length;Q<mt;Q++){const ct=z[Q];ht(ct,Z),Z+=ct.length}n.addGroup($,i.length/3-$,1)}function ht($,Z){let Q=$.length;for(;--Q>=0;){const mt=Q;let ct=Q-1;ct<0&&(ct=$.length-1);for(let Tt=0,bt=u+m*2;Tt<bt;Tt++){const yt=q*Tt,Nt=q*(Tt+1),Wt=Z+mt+yt,R=Z+ct+yt,E=Z+ct+Nt,B=Z+mt+Nt;Pt(Wt,R,E,B)}}}function L($,Z,Q){l.push($),l.push(Z),l.push(Q)}function Ct($,Z,Q){st($),st(Z),st(Q);const mt=i.length/3,ct=y.generateTopUV(n,i,mt-3,mt-2,mt-1);vt(ct[0]),vt(ct[1]),vt(ct[2])}function Pt($,Z,Q,mt){st($),st(Z),st(mt),st(Z),st(Q),st(mt);const ct=i.length/3,Tt=y.generateSideWallUV(n,i,ct-6,ct-3,ct-2,ct-1);vt(Tt[0]),vt(Tt[1]),vt(Tt[3]),vt(Tt[1]),vt(Tt[2]),vt(Tt[3])}function st($){i.push(l[$*3+0]),i.push(l[$*3+1]),i.push(l[$*3+2])}function vt($){s.push($.x),s.push($.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return V0(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,a=t.shapes.length;s<a;s++){const o=e[t.shapes[s]];n.push(o)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Ou[i.type]().fromJSON(i)),new ko(n,t.options)}}const H0={generateTopUV:function(r,t,e,n,i){const s=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[i*3],u=t[i*3+1];return[new lt(s,a),new lt(o,l),new lt(c,u)]},generateSideWallUV:function(r,t,e,n,i,s){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],h=t[n*3+2],f=t[i*3],p=t[i*3+1],g=t[i*3+2],_=t[s*3],m=t[s*3+1],d=t[s*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new lt(a,1-l),new lt(c,1-h),new lt(f,1-g),new lt(_,1-d)]:[new lt(o,1-l),new lt(u,1-h),new lt(p,1-g),new lt(m,1-d)]}};function V0(r,t,e){if(e.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];e.shapes.push(s.uuid)}else e.shapes.push(r.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Vr extends sn{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new P,f=new P,p=[],g=[],_=[],m=[];for(let d=0;d<=n;d++){const y=[],x=d/n;let M=0;d===0&&a===0?M=.5/e:d===n&&l===Math.PI&&(M=-.5/e);for(let S=0;S<=e;S++){const T=S/e;h.x=-t*Math.cos(i+T*s)*Math.sin(a+x*o),h.y=t*Math.cos(a+x*o),h.z=t*Math.sin(i+T*s)*Math.sin(a+x*o),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),m.push(T+M,1-x),y.push(c++)}u.push(y)}for(let d=0;d<n;d++)for(let y=0;y<e;y++){const x=u[d][y+1],M=u[d][y],S=u[d+1][y],T=u[d+1][y+1];(d!==0||a>0)&&p.push(x,M,T),(d!==n-1||l<Math.PI)&&p.push(M,S,T)}this.setIndex(p),this.setAttribute("position",new qe(g,3)),this.setAttribute("normal",new qe(_,3)),this.setAttribute("uv",new qe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ba extends zn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ku extends mr{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Bt(16777215),this.specular=new Bt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hu,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Uo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const zs={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class W0{constructor(t,e,n){const i=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){o++,s===!1&&i.onStart!==void 0&&i.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const X0=new W0;class Qs{constructor(t){this.manager=t!==void 0?t:X0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}const Ln={};class q0 extends Error{constructor(t,e){super(t),this.response=e}}class Y0 extends Qs{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=zs.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(Ln[t]!==void 0){Ln[t].push({onLoad:e,onProgress:n,onError:i});return}Ln[t]=[],Ln[t].push({onLoad:e,onProgress:n,onError:i});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Ln[t],h=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),p=f?parseInt(f):0,g=p!==0;let _=0;const m=new ReadableStream({start(d){y();function y(){h.read().then(({done:x,value:M})=>{if(x)d.close();else{_+=M.byteLength;const S=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:p});for(let T=0,A=u.length;T<A;T++){const C=u[T];C.onProgress&&C.onProgress(S)}d.enqueue(M),y()}})}}});return new Response(m)}else throw new q0(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),f=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{zs.add(t,c);const u=Ln[t];delete Ln[t];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=Ln[t];if(u===void 0)throw this.manager.itemError(t),c;delete Ln[t];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onError&&p.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class Z0 extends Qs{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,a=zs.get(t);if(a!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0),a;const o=zr("img");function l(){u(),zs.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(h){u(),i&&i(h),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(t),o.src=t,o}}class Hu extends Qs{constructor(t){super(t)}load(t,e,n,i){const s=new Ue,a=new Z0(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){s.image=o,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}}class Vu extends Me{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Bt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const Ga=new re,Lc=new P,Dc=new P;class Wu{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.map=null,this.mapPass=null,this.matrix=new re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new No,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new $t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Lc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Lc),Dc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Dc),e.updateMatrixWorld(),Ga.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ga),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ga)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Uc=new re,Sr=new P,ka=new P;class J0 extends Wu{constructor(){super(new Ve(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new lt(4,2),this._viewportCount=6,this._viewports=[new $t(2,1,1,1),new $t(0,1,1,1),new $t(3,1,1,1),new $t(1,1,1,1),new $t(3,0,1,1),new $t(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Sr.setFromMatrixPosition(t.matrixWorld),n.position.copy(Sr),ka.copy(n.position),ka.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ka),n.updateMatrixWorld(),i.makeTranslation(-Sr.x,-Sr.y,-Sr.z),Uc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uc)}}class K0 extends Vu{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new J0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class j0 extends Wu{constructor(){super(new Au(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class $0 extends Vu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.target=new Me,this.shadow=new j0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Ic=new lt;class Q0{constructor(t=new lt(1/0,1/0),e=new lt(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ic.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y)}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ic).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}class tv{constructor(){this.type="ShapePath",this.color=new Bt,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new fo,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,i){return this.currentPath.quadraticCurveTo(t,e,n,i),this}bezierCurveTo(t,e,n,i,s,a){return this.currentPath.bezierCurveTo(t,e,n,i,s,a),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(d){const y=[];for(let x=0,M=d.length;x<M;x++){const S=d[x],T=new Ds;T.curves=S.curves,y.push(T)}return y}function n(d,y){const x=y.length;let M=!1;for(let S=x-1,T=0;T<x;S=T++){let A=y[S],C=y[T],v=C.x-A.x,w=C.y-A.y;if(Math.abs(w)>Number.EPSILON){if(w<0&&(A=y[T],v=-v,C=y[S],w=-w),d.y<A.y||d.y>C.y)continue;if(d.y===A.y){if(d.x===A.x)return!0}else{const z=w*(d.x-A.x)-v*(d.y-A.y);if(z===0)return!0;if(z<0)continue;M=!M}}else{if(d.y!==A.y)continue;if(C.x<=d.x&&d.x<=A.x||A.x<=d.x&&d.x<=C.x)return!0}}return M}const i=Qi.isClockWise,s=this.subPaths;if(s.length===0)return[];let a,o,l;const c=[];if(s.length===1)return o=s[0],l=new Ds,l.curves=o.curves,c.push(l),c;let u=!i(s[0].getPoints());u=t?!u:u;const h=[],f=[];let p=[],g=0,_;f[g]=void 0,p[g]=[];for(let d=0,y=s.length;d<y;d++)o=s[d],_=o.getPoints(),a=i(_),a=t?!a:a,a?(!u&&f[g]&&g++,f[g]={s:new Ds,p:_},f[g].s.curves=o.curves,u&&g++,p[g]=[]):p[g].push({h:o,p:_[0]});if(!f[0])return e(s);if(f.length>1){let d=!1,y=0;for(let x=0,M=f.length;x<M;x++)h[x]=[];for(let x=0,M=f.length;x<M;x++){const S=p[x];for(let T=0;T<S.length;T++){const A=S[T];let C=!0;for(let v=0;v<f.length;v++)n(A.p,f[v].p)&&(x!==v&&y++,C?(C=!1,h[v].push(A)):d=!0);C&&h[x].push(A)}}y>0&&d===!1&&(p=h)}let m;for(let d=0,y=f.length;d<y;d++){l=f[d].s,c.push(l),m=p[d];for(let x=0,M=m.length;x<M;x++)l.holes.push(m[x].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Do}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Do);class ev extends Qs{constructor(t){super(t)}load(t,e,n,i){const s=this,a=new Y0(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(o){const l=s.parse(JSON.parse(o));e&&e(l)},n,i)}parse(t){return new nv(t)}}class nv{constructor(t){this.isFont=!0,this.type="Font",this.data=t}generateShapes(t,e=100){const n=[],i=iv(t,e,this.data);for(let s=0,a=i.length;s<a;s++)n.push(...i[s].toShapes());return n}}function iv(r,t,e){const n=Array.from(r),i=t/e.resolution,s=(e.boundingBox.yMax-e.boundingBox.yMin+e.underlineThickness)*i,a=[];let o=0,l=0;for(let c=0;c<n.length;c++){const u=n[c];if(u===`
`)o=0,l-=s;else{const h=rv(u,i,o,l,e);o+=h.offsetX,a.push(h.path)}}return a}function rv(r,t,e,n,i){const s=i.glyphs[r]||i.glyphs["?"];if(!s){console.error('THREE.Font: character "'+r+'" does not exists in font family '+i.familyName+".");return}const a=new tv;let o,l,c,u,h,f,p,g;if(s.o){const _=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let m=0,d=_.length;m<d;)switch(_[m++]){case"m":o=_[m++]*t+e,l=_[m++]*t+n,a.moveTo(o,l);break;case"l":o=_[m++]*t+e,l=_[m++]*t+n,a.lineTo(o,l);break;case"q":c=_[m++]*t+e,u=_[m++]*t+n,h=_[m++]*t+e,f=_[m++]*t+n,a.quadraticCurveTo(h,f,c,u);break;case"b":c=_[m++]*t+e,u=_[m++]*t+n,h=_[m++]*t+e,f=_[m++]*t+n,p=_[m++]*t+e,g=_[m++]*t+n,a.bezierCurveTo(h,f,p,g,c,u);break}}return{offsetX:s.ha*t,path:a}}class Nc extends ko{constructor(t,e={}){const n=e.font;if(n===void 0)super();else{const i=n.generateShapes(t,e.size);e.depth=e.height!==void 0?e.height:50,e.bevelThickness===void 0&&(e.bevelThickness=10),e.bevelSize===void 0&&(e.bevelSize=8),e.bevelEnabled===void 0&&(e.bevelEnabled=!1),super(i,e)}this.type="TextGeometry"}}function Un(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Xu(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}/*!
 * GSAP 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ye={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},or={duration:.5,overwrite:!1,delay:0},Ho,we,ue,tn=1e8,jt=1/tn,_o=Math.PI*2,sv=_o/4,av=0,qu=Math.sqrt,ov=Math.cos,lv=Math.sin,_e=function(t){return typeof t=="string"},ie=function(t){return typeof t=="function"},Bn=function(t){return typeof t=="number"},Vo=function(t){return typeof t>"u"},En=function(t){return typeof t=="object"},Ne=function(t){return t!==!1},Wo=function(){return typeof window<"u"},Cs=function(t){return ie(t)||_e(t)},Yu=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ae=Array.isArray,go=/(?:-?\.?\d|\.)+/gi,Zu=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Zi=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ha=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Ju=/[+-]=-?[.\d]+/,Ku=/[^,'"\[\]\s]+/gi,cv=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,te,$e,vo,Xo,Ze={},Bs={},ju,$u=function(t){return(Bs=wi(t,Ze))&&ze},qo=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Gs=function(t,e){return!e&&console.warn(t)},Qu=function(t,e){return t&&(Ze[t]=e)&&Bs&&(Bs[t]=e)||Ze},Wr=function(){return 0},uv={suppressEvents:!0,isStart:!0,kill:!1},Us={suppressEvents:!0,kill:!1},hv={suppressEvents:!0},Yo={},Kn=[],xo={},th,He={},Va={},Fc=30,Is=[],Zo="",Jo=function(t){var e=t[0],n,i;if(En(e)||ie(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Is.length;i--&&!Is[i].targetTest(e););n=Is[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Th(t[i],n)))||t.splice(i,1);return t},Mi=function(t){return t._gsap||Jo(en(t))[0]._gsap},eh=function(t,e,n){return(n=t[e])&&ie(n)?t[e]():Vo(n)&&t.getAttribute&&t.getAttribute(e)||n},Fe=function(t,e){return(t=t.split(",")).forEach(e)||t},oe=function(t){return Math.round(t*1e5)/1e5||0},xe=function(t){return Math.round(t*1e7)/1e7||0},tr=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},fv=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},ks=function(){var t=Kn.length,e=Kn.slice(0),n,i;for(xo={},Kn.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},nh=function(t,e,n,i){Kn.length&&!we&&ks(),t.render(e,n,i||we&&e<0&&(t._initted||t._startAt)),Kn.length&&!we&&ks()},ih=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Ku).length<2?e:_e(t)?t.trim():t},rh=function(t){return t},rn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},dv=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},wi=function(t,e){for(var n in e)t[n]=e[n];return t},Oc=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=En(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},Hs=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Dr=function(t){var e=t.parent||te,n=t.keyframes?dv(Ae(t.keyframes)):rn;if(Ne(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},pv=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},sh=function(t,e,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=t[i],o;if(s)for(o=e[s];a&&a[s]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},ta=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,a=e._next;s?s._next=a:t[n]===e&&(t[n]=a),a?a._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},Qn=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove(t),t._act=0},yi=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},mv=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Mo=function(t,e,n,i){return t._startAt&&(we?t._startAt.revert(Us):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},_v=function r(t){return!t||t._ts&&r(t.parent)},zc=function(t){return t._repeat?lr(t._tTime,t=t.duration()+t._rDelay)*t:0},lr=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},Vs=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},ea=function(t){return t._end=xe(t._start+(t._tDur/Math.abs(t._ts||t._rts||jt)||0))},na=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=xe(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),ea(t),n._dirty||yi(n,t)),t},ah=function(t,e){var n;if((e._time||e._initted&&!e._dur)&&(n=Vs(t.rawTime(),e),(!e._dur||es(0,e.totalDuration(),n)-e._tTime>jt)&&e.render(n,!0)),yi(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-jt}},vn=function(t,e,n,i){return e.parent&&Qn(e),e._start=xe((Bn(n)?n:n||t!==te?je(t,n,e):t._time)+e._delay),e._end=xe(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),sh(t,e,"_first","_last",t._sort?"_start":0),yo(e)||(t._recent=e),i||ah(t,e),t._ts<0&&na(t,t._tTime),t},oh=function(t,e){return(Ze.ScrollTrigger||qo("scrollTrigger",e))&&Ze.ScrollTrigger.create(e,t)},lh=function(t,e,n,i,s){if(jo(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!we&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&th!==Xe.frame)return Kn.push(t),t._lazy=[s,i],1},gv=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},yo=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},vv=function(t,e,n,i){var s=t.ratio,a=e<0||!e&&(!t._start&&gv(t)&&!(!t._initted&&yo(t))||(t._ts<0||t._dp._ts<0)&&!yo(t))?0:1,o=t._rDelay,l=0,c,u,h;if(o&&t._repeat&&(l=es(0,t._tDur,e),u=lr(l,o),t._yoyo&&u&1&&(a=1-a),u!==lr(t._tTime,o)&&(s=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==s||we||i||t._zTime===jt||!e&&t._zTime){if(!t._initted&&lh(t,e,i,n,l))return;for(h=t._zTime,t._zTime=e||(n?jt:0),n||(n=e&&!h),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&Mo(t,e,n,!0),t._onUpdate&&!n&&nn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&nn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&Qn(t,1),!n&&!we&&(nn(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},xv=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},cr=function(t,e,n,i){var s=t._repeat,a=xe(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=s?s<0?1e10:xe(a*(s+1)+t._rDelay*s):a,o>0&&!i&&na(t,t._tTime=t._tDur*o),t.parent&&ea(t),n||yi(t.parent,t),t},Bc=function(t){return t instanceof Ie?yi(t):cr(t,t._dur)},Mv={_start:0,endTime:Wr,totalDuration:Wr},je=function r(t,e,n){var i=t.labels,s=t._recent||Mv,a=t.duration()>=tn?s.endTime(!1):t._dur,o,l,c;return _e(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(e in i||(i[e]=a),i[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&n&&(l=l/100*(Ae(n)?n[0]:n).totalDuration()),o>1?r(t,e.substr(0,o-1),n)+l:a+l)):e==null?a:+e},Ur=function(t,e,n){var i=Bn(e[1]),s=(i?2:1)+(t<2?0:1),a=e[s],o,l;if(i&&(a.duration=e[1]),a.parent=n,t){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Ne(l.vars.inherit)&&l.parent;a.immediateRender=Ne(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[s-1]}return new he(e[0],a,e[s+1])},ei=function(t,e){return t||t===0?e(t):e},es=function(t,e,n){return n<t?t:n>e?e:n},Te=function(t,e){return!_e(t)||!(e=cv.exec(t))?"":e[1]},yv=function(t,e,n){return ei(n,function(i){return es(t,e,i)})},So=[].slice,ch=function(t,e){return t&&En(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&En(t[0]))&&!t.nodeType&&t!==$e},Sv=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return _e(i)&&!e||ch(i,1)?(s=n).push.apply(s,en(i)):n.push(i)})||n},en=function(t,e,n){return ue&&!e&&ue.selector?ue.selector(t):_e(t)&&!n&&(vo||!ur())?So.call((e||Xo).querySelectorAll(t),0):Ae(t)?Sv(t,n):ch(t)?So.call(t,0):t?[t]:[]},Eo=function(t){return t=en(t)[0]||Gs("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return en(e,n.querySelectorAll?n:n===t?Gs("Invalid scope")||Xo.createElement("div"):t)}},uh=function(t){return t.sort(function(){return .5-Math.random()})},hh=function(t){if(ie(t))return t;var e=En(t)?t:{each:t},n=Si(e.ease),i=e.from||0,s=parseFloat(e.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=e.axis,u=i,h=i;return _e(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],h=i[1]),function(f,p,g){var _=(g||e).length,m=a[_],d,y,x,M,S,T,A,C,v;if(!m){if(v=e.grid==="auto"?0:(e.grid||[1,tn])[1],!v){for(A=-tn;A<(A=g[v++].getBoundingClientRect().left)&&v<_;);v--}for(m=a[_]=[],d=l?Math.min(v,_)*u-.5:i%v,y=v===tn?0:l?_*h/v-.5:i/v|0,A=0,C=tn,T=0;T<_;T++)x=T%v-d,M=y-(T/v|0),m[T]=S=c?Math.abs(c==="y"?M:x):qu(x*x+M*M),S>A&&(A=S),S<C&&(C=S);i==="random"&&uh(m),m.max=A-C,m.min=C,m.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(v>_?_-1:c?c==="y"?_/v:v:Math.max(v,_/v))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=Te(e.amount||e.each)||0,n=n&&_<0?yh(n):n}return _=(m[f]-m.min)/m.max||0,xe(m.b+(n?n(_):_)*m.v)+m.u}},To=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=xe(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Bn(n)?0:Te(n))}},fh=function(t,e){var n=Ae(t),i,s;return!n&&En(t)&&(i=n=t.radius||tn,t.values?(t=en(t.values),(s=!Bn(t[0]))&&(i*=i)):t=To(t.increment)),ei(e,n?ie(t)?function(a){return s=t(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=tn,u=0,h=t.length,f,p;h--;)s?(f=t[h].x-o,p=t[h].y-l,f=f*f+p*p):f=Math.abs(t[h]-o),f<c&&(c=f,u=h);return u=!i||c<=i?t[u]:a,s||u===a||Bn(a)?u:u+Te(a)}:To(t))},dh=function(t,e,n,i){return ei(Ae(t)?!e:n===!0?!!(n=0):!i,function(){return Ae(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},Ev=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,a){return a(s)},i)}},Tv=function(t,e){return function(n){return t(parseFloat(n))+(e||Te(n))}},bv=function(t,e,n){return mh(t,e,0,1,n)},ph=function(t,e,n){return ei(n,function(i){return t[~~e(i)]})},wv=function r(t,e,n){var i=e-t;return Ae(t)?ph(t,r(0,t.length),e):ei(n,function(s){return(i+(s-t)%i)%i+t})},Av=function r(t,e,n){var i=e-t,s=i*2;return Ae(t)?ph(t,r(0,t.length-1),e):ei(n,function(a){return a=(s+(a-t)%s)%s||0,t+(a>i?s-a:a)})},Xr=function(t){for(var e=0,n="",i,s,a,o;~(i=t.indexOf("random(",e));)a=t.indexOf(")",i),o=t.charAt(i+7)==="[",s=t.substr(i+7,a-i-7).match(o?Ku:go),n+=t.substr(e,i-e)+dh(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),e=a+1;return n+t.substr(e,t.length-e)},mh=function(t,e,n,i,s){var a=e-t,o=i-n;return ei(s,function(l){return n+((l-t)/a*o||0)})},Rv=function r(t,e,n,i){var s=isNaN(t+e)?0:function(p){return(1-p)*t+p*e};if(!s){var a=_e(t),o={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(Ae(t)&&!Ae(e)){for(u=[],h=t.length,f=h-2,c=1;c<h;c++)u.push(r(t[c-1],t[c]));h--,s=function(g){g*=h;var _=Math.min(f,~~g);return u[_](g-_)},n=e}else i||(t=wi(Ae(t)?[]:{},t));if(!u){for(l in e)Ko.call(o,t,l,"get",e[l]);s=function(g){return tl(g,o)||(a?t.p:t)}}}return ei(n,s)},Gc=function(t,e,n){var i=t.labels,s=tn,a,o,l;for(a in i)o=i[a]-e,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},nn=function(t,e,n){var i=t.vars,s=i[e],a=ue,o=t._ctx,l,c,u;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&Kn.length&&ks(),o&&(ue=o),u=l?s.apply(c,l):s.call(c),ue=a,u},br=function(t){return Qn(t),t.scrollTrigger&&t.scrollTrigger.kill(!!we),t.progress()<1&&nn(t,"onInterrupt"),t},Ji,_h=[],gh=function(t){if(!Wo()){_h.push(t);return}t=!t.name&&t.default||t;var e=t.name,n=ie(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:Wr,render:tl,add:Ko,kill:Wv,modifier:Vv,rawVars:0},a={targetTest:0,get:0,getSetter:Qo,aliases:{},register:0};if(ur(),t!==i){if(He[e])return;rn(i,rn(Hs(t,s),a)),wi(i.prototype,wi(s,Hs(t,a))),He[i.prop=e]=i,t.targetTest&&(Is.push(i),Yo[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Qu(e,i),t.register&&t.register(ze,i,Oe)},Jt=255,wr={aqua:[0,Jt,Jt],lime:[0,Jt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Jt],navy:[0,0,128],white:[Jt,Jt,Jt],olive:[128,128,0],yellow:[Jt,Jt,0],orange:[Jt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Jt,0,0],pink:[Jt,192,203],cyan:[0,Jt,Jt],transparent:[Jt,Jt,Jt,0]},Wa=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Jt+.5|0},vh=function(t,e,n){var i=t?Bn(t)?[t>>16,t>>8&Jt,t&Jt]:0:wr.black,s,a,o,l,c,u,h,f,p,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),wr[t])i=wr[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+s+s+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Jt,i&Jt,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Jt,t&Jt]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(go),!e)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=Wa(l+1/3,s,a),i[1]=Wa(l,s,a),i[2]=Wa(l-1/3,s,a);else if(~t.indexOf("="))return i=t.match(Zu),n&&i.length<4&&(i[3]=1),i}else i=t.match(go)||wr.transparent;i=i.map(Number)}return e&&!g&&(s=i[0]/Jt,a=i[1]/Jt,o=i[2]/Jt,h=Math.max(s,a,o),f=Math.min(s,a,o),u=(h+f)/2,h===f?l=c=0:(p=h-f,c=u>.5?p/(2-h-f):p/(h+f),l=h===s?(a-o)/p+(a<o?6:0):h===a?(o-s)/p+2:(s-a)/p+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},xh=function(t){var e=[],n=[],i=-1;return t.split(jn).forEach(function(s){var a=s.match(Zi)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},kc=function(t,e,n){var i="",s=(t+i).match(jn),a=e?"hsla(":"rgba(",o=0,l,c,u,h;if(!s)return t;if(s=s.map(function(f){return(f=vh(f,e,1))&&a+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=xh(t),l=n.c,l.join(i)!==u.c.join(i)))for(c=t.replace(jn,"1").split(Zi),h=c.length-1;o<h;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=t.split(jn),h=c.length-1;o<h;o++)i+=c[o]+s[o];return i+c[h]},jn=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in wr)r+="|"+t+"\\b";return new RegExp(r+")","gi")}(),Cv=/hsl[a]?\(/,Mh=function(t){var e=t.join(" "),n;if(jn.lastIndex=0,jn.test(e))return n=Cv.test(e),t[1]=kc(t[1],n),t[0]=kc(t[0],n,xh(t[1])),!0},qr,Xe=function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,h,f,p,g=function _(m){var d=r()-i,y=m===!0,x,M,S,T;if(d>t&&(n+=d-e),i+=d,S=i-n,x=S-a,(x>0||y)&&(T=++h.frame,f=S-h.time*1e3,h.time=S=S/1e3,a+=x+(x>=s?4:s-x),M=1),y||(l=c(_)),M)for(p=0;p<o.length;p++)o[p](S,f,T,m)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){ju&&(!vo&&Wo()&&($e=vo=window,Xo=$e.document||{},Ze.gsap=ze,($e.gsapVersions||($e.gsapVersions=[])).push(ze.version),$u(Bs||$e.GreenSockGlobals||!$e.gsap&&$e||{}),u=$e.requestAnimationFrame,_h.forEach(gh)),l&&h.sleep(),c=u||function(m){return setTimeout(m,a-h.time*1e3+1|0)},qr=1,g(2))},sleep:function(){(u?$e.cancelAnimationFrame:clearTimeout)(l),qr=0,c=Wr},lagSmoothing:function(m,d){t=m||1/0,e=Math.min(d||33,t)},fps:function(m){s=1e3/(m||240),a=h.time*1e3+s},add:function(m,d,y){var x=d?function(M,S,T,A){m(M,S,T,A),h.remove(x)}:m;return h.remove(m),o[y?"unshift":"push"](x),ur(),x},remove:function(m,d){~(d=o.indexOf(m))&&o.splice(d,1)&&p>=d&&p--},_listeners:o},h}(),ur=function(){return!qr&&Xe.wake()},kt={},Pv=/^[\d.\-M][\d.\-,\s]/,Lv=/["']/g,Dv=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[i]=isNaN(c)?c.replace(Lv,"").trim():+c,i=l.substr(o+1).trim();return e},Uv=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},Iv=function(t){var e=(t+"").split("("),n=kt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[Dv(e[1])]:Uv(t).split(",").map(ih)):kt._CE&&Pv.test(t)?kt._CE("",t):n},yh=function(t){return function(e){return 1-t(1-e)}},Sh=function r(t,e){for(var n=t._first,i;n;)n instanceof Ie?r(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?r(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},Si=function(t,e){return t&&(ie(t)?t:kt[t]||Iv(t))||e},Ai=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},a;return Fe(t,function(o){kt[o]=Ze[o]=s,kt[a=o.toLowerCase()]=n;for(var l in s)kt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=kt[o+"."+l]=s[l]}),s},Eh=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Xa=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),a=s/_o*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*lv((u-a)*s)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:Eh(o);return s=_o/s,l.config=function(c,u){return r(t,c,u)},l},qa=function r(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:Eh(n);return i.config=function(s){return r(t,s)},i};Fe("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;Ai(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});kt.Linear.easeNone=kt.none=kt.Linear.easeIn;Ai("Elastic",Xa("in"),Xa("out"),Xa());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(o){return o<e?r*o*o:o<n?r*Math.pow(o-1.5/t,2)+.75:o<i?r*(o-=2.25/t)*o+.9375:r*Math.pow(o-2.625/t,2)+.984375};Ai("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Ai("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});Ai("Circ",function(r){return-(qu(1-r*r)-1)});Ai("Sine",function(r){return r===1?1:-ov(r*sv)+1});Ai("Back",qa("in"),qa("out"),qa());kt.SteppedEase=kt.steps=Ze.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,a=1-jt;return function(o){return((i*es(0,a,o)|0)+s)*n}}};or.ease=kt["quad.out"];Fe("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Zo+=r+","+r+"Params,"});var Th=function(t,e){this.id=av++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:eh,this.set=e?e.getSetter:Qo},hr=function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,cr(this,+e.duration,1,1),this.data=e.data,ue&&(this._ctx=ue,ue.data.push(this)),qr||Xe.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,cr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(ur(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(na(this,n),!s._dp||s.parent||ah(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&vn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===jt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),nh(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+zc(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+zc(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?lr(this._tTime,s)+1:1},t.timeScale=function(n){if(!arguments.length)return this._rts===-jt?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?Vs(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-jt?0:this._rts,this.totalTime(es(-Math.abs(this._delay),this._tDur,i),!0),ea(this),mv(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ur(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==jt&&(this._tTime-=jt)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&vn(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Ne(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Vs(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=hv);var i=we;return we=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),we=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Bc(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Bc(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(je(this,n),Ne(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Ne(i))},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-jt:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-jt,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-jt)},t.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this;return new Promise(function(s){var a=ie(n)?n:rh,o=function(){var c=i.then;i.then=null,ie(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=c),s(a),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},t.kill=function(){br(this)},r}();rn(hr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-jt,_prom:0,_ps:!1,_rts:1});var Ie=function(r){Xu(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Ne(n.sortChildren),te&&vn(n.parent||te,Un(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&oh(Un(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,a){return Ur(0,arguments,this),this},e.from=function(i,s,a){return Ur(1,arguments,this),this},e.fromTo=function(i,s,a,o){return Ur(2,arguments,this),this},e.set=function(i,s,a){return s.duration=0,s.parent=this,Dr(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new he(i,s,je(this,a),1),this},e.call=function(i,s,a){return vn(this,he.delayedCall(0,i,s),a)},e.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new he(i,a,je(this,l)),this},e.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,Dr(a).immediateRender=Ne(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},e.staggerFromTo=function(i,s,a,o,l,c,u,h){return o.startAt=a,Dr(o).immediateRender=Ne(o.immediateRender),this.staggerTo(i,s,o,l,c,u,h)},e.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:xe(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,p,g,_,m,d,y,x,M,S,T,A;if(this!==te&&u>l&&i>=0&&(u=l),u!==this._tTime||a||h){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),f=u,M=this._start,x=this._ts,d=!x,h&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(T=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,a);if(f=xe(u%m),u===l?(_=this._repeat,f=c):(_=~~(u/m),_&&_===u/m&&(f=c,_--),f>c&&(f=c)),S=lr(this._tTime,m),!o&&this._tTime&&S!==_&&this._tTime-S*m-this._dur<=0&&(S=_),T&&_&1&&(f=c-f,A=1),_!==S&&!this._lock){var C=T&&S&1,v=C===(T&&_&1);if(_<S&&(C=!C),o=C?0:c,this._lock=1,this.render(o||(A?0:xe(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&nn(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1),o&&o!==this._time||d!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,v&&(this._lock=2,o=C?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!d)return this;Sh(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=xv(this,xe(o),xe(f)),y&&(u-=f-(f=y._start))),this._tTime=u,this._time=f,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&f&&!s&&!_&&(nn(this,"onStart"),this._tTime!==u))return this;if(f>=o&&i>=0)for(p=this._first;p;){if(g=p._next,(p._act||f>=p._start)&&p._ts&&y!==p){if(p.parent!==this)return this.render(i,s,a);if(p.render(p._ts>0?(f-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(f-p._start)*p._ts,s,a),f!==this._time||!this._ts&&!d){y=0,g&&(u+=this._zTime=-jt);break}}p=g}else{p=this._last;for(var w=i<0?i:f;p;){if(g=p._prev,(p._act||w<=p._end)&&p._ts&&y!==p){if(p.parent!==this)return this.render(i,s,a);if(p.render(p._ts>0?(w-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(w-p._start)*p._ts,s,a||we&&(p._initted||p._startAt)),f!==this._time||!this._ts&&!d){y=0,g&&(u+=this._zTime=w?-jt:jt);break}}p=g}}if(y&&!s&&(this.pause(),y.render(f>=o?0:-jt)._zTime=f>=o?1:-1,this._ts))return this._start=M,ea(this),this.render(i,s,a);this._onUpdate&&!s&&nn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(M===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Qn(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(nn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var a=this;if(Bn(s)||(s=je(this,s,i)),!(i instanceof hr)){if(Ae(i))return i.forEach(function(o){return a.add(o,s)}),this;if(_e(i))return this.addLabel(i,s);if(ie(i))i=he.delayedCall(0,i);else return this}return this!==i?vn(this,i,s):this},e.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-tn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof he?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},e.remove=function(i){return _e(i)?this.removeLabel(i):ie(i)?this.killTweensOf(i):(ta(this,i),i===this._recent&&(this._recent=this._last),yi(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=xe(Xe.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=je(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,a){var o=he.delayedCall(0,s||Wr,a);return o.data="isPause",this._hasPause=1,vn(this,o,je(this,i))},e.removePause=function(i){var s=this._first;for(i=je(this,i);s;)s._start===i&&s.data==="isPause"&&Qn(s),s=s._next},e.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)qn!==o[l]&&o[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var a=[],o=en(i),l=this._first,c=Bn(s),u;l;)l instanceof he?fv(l._targets,o)&&(c?(!qn||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},e.tweenTo=function(i,s){s=s||{};var a=this,o=je(a,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,p,g=he.to(a,rn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||jt,onStart:function(){if(a.pause(),!p){var m=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==m&&cr(g,m,0,1).render(g._time,!0,!0),p=1}u&&u.apply(g,h||[])}},s));return f?g.render(0):g},e.tweenFromTo=function(i,s,a){return this.tweenTo(s,rn({startAt:{time:je(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Gc(this,je(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Gc(this,je(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+jt)},e.shiftChildren=function(i,s,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return yi(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),yi(this)},e.totalDuration=function(i){var s=0,a=this,o=a._last,l=tn,c,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(h=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,vn(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;cr(a,a===te&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(te._ts&&(nh(te,Vs(i,te)),th=Xe.frame),Xe.frame>=Fc){Fc+=Ye.autoSleep||120;var s=te._first;if((!s||!s._ts)&&Ye.autoSleep&&Xe._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Xe.sleep()}}},t}(hr);rn(Ie.prototype,{_lock:0,_hasPause:0,_forcing:0});var Nv=function(t,e,n,i,s,a,o){var l=new Oe(this._pt,t,e,0,1,Ph,null,s),c=0,u=0,h,f,p,g,_,m,d,y;for(l.b=n,l.e=i,n+="",i+="",(d=~i.indexOf("random("))&&(i=Xr(i)),a&&(y=[n,i],a(y,t,e),n=y[0],i=y[1]),f=n.match(Ha)||[];h=Ha.exec(i);)g=h[0],_=i.substring(c,h.index),p?p=(p+1)%5:_.substr(-5)==="rgba("&&(p=1),g!==f[u++]&&(m=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?tr(m,g)-m:parseFloat(g)-m,m:p&&p<4?Math.round:0},c=Ha.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Ju.test(i)||d)&&(l.e=0),this._pt=l,l},Ko=function(t,e,n,i,s,a,o,l,c,u){ie(i)&&(i=i(s||0,t,a));var h=t[e],f=n!=="get"?n:ie(h)?c?t[e.indexOf("set")||!ie(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():h,p=ie(h)?c?Gv:Rh:$o,g;if(_e(i)&&(~i.indexOf("random(")&&(i=Xr(i)),i.charAt(1)==="="&&(g=tr(f,i)+(Te(f)||0),(g||g===0)&&(i=g))),!u||f!==i||bo)return!isNaN(f*i)&&i!==""?(g=new Oe(this._pt,t,e,+f||0,i-(f||0),typeof h=="boolean"?Hv:Ch,0,p),c&&(g.fp=c),o&&g.modifier(o,this,t),this._pt=g):(!h&&!(e in t)&&qo(e,i),Nv.call(this,t,e,f,i,p,l||Ye.stringFilter,c))},Fv=function(t,e,n,i,s){if(ie(t)&&(t=Ir(t,s,e,n,i)),!En(t)||t.style&&t.nodeType||Ae(t)||Yu(t))return _e(t)?Ir(t,s,e,n,i):t;var a={},o;for(o in t)a[o]=Ir(t[o],s,e,n,i);return a},bh=function(t,e,n,i,s,a){var o,l,c,u;if(He[t]&&(o=new He[t]).init(s,o.rawVars?e[t]:Fv(e[t],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new Oe(n._pt,s,t,0,1,o.render,o,0,o.priority),n!==Ji))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},qn,bo,jo=function r(t,e,n){var i=t.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.onUpdateParams,h=i.callbackScope,f=i.runBackwards,p=i.yoyoEase,g=i.keyframes,_=i.autoRevert,m=t._dur,d=t._startAt,y=t._targets,x=t.parent,M=x&&x.data==="nested"?x.vars.targets:y,S=t._overwrite==="auto"&&!Ho,T=t.timeline,A,C,v,w,z,H,U,I,F,q,G,V,tt;if(T&&(!g||!s)&&(s="none"),t._ease=Si(s,or.ease),t._yEase=p?yh(Si(p===!0?s:p,or.ease)):0,p&&t._yoyo&&!t._repeat&&(p=t._yEase,t._yEase=t._ease,t._ease=p),t._from=!T&&!!i.runBackwards,!T||g&&!i.stagger){if(I=y[0]?Mi(y[0]).harness:0,V=I&&i[I.prop],A=Hs(i,Yo),d&&(d._zTime<0&&d.progress(1),e<0&&f&&o&&!_?d.render(-1,!0):d.revert(f&&m?Us:uv),d._lazy=0),a){if(Qn(t._startAt=he.set(y,rn({data:"isStart",overwrite:!1,parent:x,immediateRender:!0,lazy:!d&&Ne(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:h,stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(we||!o&&!_)&&t._startAt.revert(Us),o&&m&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(f&&m&&!d){if(e&&(o=!1),v=rn({overwrite:!1,data:"isFromStart",lazy:o&&!d&&Ne(l),immediateRender:o,stagger:0,parent:x},A),V&&(v[I.prop]=V),Qn(t._startAt=he.set(y,v)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(we?t._startAt.revert(Us):t._startAt.render(-1,!0)),t._zTime=e,!o)r(t._startAt,jt,jt);else if(!e)return}for(t._pt=t._ptCache=0,l=m&&Ne(l)||l&&!m,C=0;C<y.length;C++){if(z=y[C],U=z._gsap||Jo(y)[C]._gsap,t._ptLookup[C]=q={},xo[U.id]&&Kn.length&&ks(),G=M===y?C:M.indexOf(z),I&&(F=new I).init(z,V||A,t,G,M)!==!1&&(t._pt=w=new Oe(t._pt,z,F.name,0,1,F.render,F,0,F.priority),F._props.forEach(function(j){q[j]=w}),F.priority&&(H=1)),!I||V)for(v in A)He[v]&&(F=bh(v,A,t,G,z,M))?F.priority&&(H=1):q[v]=w=Ko.call(t,z,v,"get",A[v],G,M,0,i.stringFilter);t._op&&t._op[C]&&t.kill(z,t._op[C]),S&&t._pt&&(qn=t,te.killTweensOf(z,q,t.globalTime(e)),tt=!t.parent,qn=0),t._pt&&l&&(xo[U.id]=1)}H&&Lh(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!tt,g&&e<=0&&T.render(tn,!0,!0)},Ov=function(t,e,n,i,s,a,o){var l=(t._pt&&t._ptCache||(t._ptCache={}))[e],c,u,h,f;if(!l)for(l=t._ptCache[e]=[],h=t._ptLookup,f=t._targets.length;f--;){if(c=h[f][e],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==e&&c.fp!==e;)c=c._next;if(!c)return bo=1,t.vars[e]="+=0",jo(t,o),bo=0,1;l.push(c)}for(f=l.length;f--;)u=l[f],c=u._pt||u,c.s=(i||i===0)&&!s?i:c.s+(i||0)+a*c.c,c.c=n-c.s,u.e&&(u.e=oe(n)+Te(u.e)),u.b&&(u.b=c.s+Te(u.b))},zv=function(t,e){var n=t[0]?Mi(t[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return e;s=wi({},e);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},Bv=function(t,e,n,i){var s=e.ease||i||"power1.inOut",a,o;if(Ae(e))o=n[t]||(n[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:s})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:s})},Ir=function(t,e,n,i,s){return ie(t)?t.call(e,n,i,s):_e(t)&&~t.indexOf("random(")?Xr(t):t},wh=Zo+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Ah={};Fe(wh+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Ah[r]=1});var he=function(r){Xu(t,r);function t(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:Dr(i))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,p=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,d=l.yoyoEase,y=i.parent||te,x=(Ae(n)||Yu(n)?Bn(n[0]):"length"in i)?[n]:en(n),M,S,T,A,C,v,w,z;if(o._targets=x.length?Jo(x):Gs("GSAP target "+n+" not found. https://greensock.com",!Ye.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=p,g||f||Cs(c)||Cs(u)){if(i=o.vars,M=o.timeline=new Ie({data:"nested",defaults:_||{},targets:y&&y.data==="nested"?y.vars.targets:x}),M.kill(),M.parent=M._dp=Un(o),M._start=0,f||Cs(c)||Cs(u)){if(A=x.length,w=f&&hh(f),En(f))for(C in f)~wh.indexOf(C)&&(z||(z={}),z[C]=f[C]);for(S=0;S<A;S++)T=Hs(i,Ah),T.stagger=0,d&&(T.yoyoEase=d),z&&wi(T,z),v=x[S],T.duration=+Ir(c,Un(o),S,v,x),T.delay=(+Ir(u,Un(o),S,v,x)||0)-o._delay,!f&&A===1&&T.delay&&(o._delay=u=T.delay,o._start+=u,T.delay=0),M.to(v,T,w?w(S,v,x):0),M._ease=kt.none;M.duration()?c=u=0:o.timeline=0}else if(g){Dr(rn(M.vars.defaults,{ease:"none"})),M._ease=Si(g.ease||i.ease||"none");var H=0,U,I,F;if(Ae(g))g.forEach(function(q){return M.to(x,q,">")}),M.duration();else{T={};for(C in g)C==="ease"||C==="easeEach"||Bv(C,g[C],T,g.easeEach);for(C in T)for(U=T[C].sort(function(q,G){return q.t-G.t}),H=0,S=0;S<U.length;S++)I=U[S],F={ease:I.e,duration:(I.t-(S?U[S-1].t:0))/100*c},F[C]=I.v,M.to(x,F,H),H+=F.duration;M.duration()<c&&M.to({},{duration:c-M.duration()})}}c||o.duration(c=M.duration())}else o.timeline=0;return p===!0&&!Ho&&(qn=Un(o),te.killTweensOf(x),qn=0),vn(y,Un(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(h||!c&&!g&&o._start===xe(y._time)&&Ne(h)&&_v(Un(o))&&y.data!=="nested")&&(o._tTime=-jt,o.render(Math.max(0,-u)||0)),m&&oh(Un(o),m),o}var e=t.prototype;return e.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-jt&&!u?l:i<jt?0:i,f,p,g,_,m,d,y,x,M;if(!c)vv(this,i,s,a);else if(h!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=h,x=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,a);if(f=xe(h%_),h===l?(g=this._repeat,f=c):(g=~~(h/_),g&&g===h/_&&(f=c,g--),f>c&&(f=c)),d=this._yoyo&&g&1,d&&(M=this._yEase,f=c-f),m=lr(this._tTime,_),f===o&&!a&&this._initted)return this._tTime=h,this;g!==m&&(x&&this._yEase&&Sh(x,d),this.vars.repeatRefresh&&!d&&!this._lock&&(this._lock=a=1,this.render(xe(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(lh(this,u?i:f,a,s,h))return this._tTime=0,this;if(o!==this._time)return this;if(c!==this._dur)return this.render(i,s,a)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(M||this._ease)(f/c),this._from&&(this.ratio=y=1-y),f&&!o&&!s&&!g&&(nn(this,"onStart"),this._tTime!==h))return this;for(p=this._pt;p;)p.r(y,p.d),p=p._next;x&&x.render(i<0?i:!f&&d?-jt:x._dur*x._ease(f/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Mo(this,i,s,a),nn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&nn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Mo(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Qn(this,1),!s&&!(u&&!o)&&(h||o||d)&&(nn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,a,o){qr||Xe.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||jo(this,l),c=this._ease(l/this._dur),Ov(this,i,s,a,o,c,l)?this.resetTo(i,s,a,o):(na(this,0),this.parent||sh(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?br(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,qn&&qn.vars.overwrite!==!0)._first||br(this),this.parent&&a!==this.timeline.totalDuration()&&cr(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?en(i):o,c=this._ptLookup,u=this._pt,h,f,p,g,_,m,d;if((!s||s==="all")&&pv(o,l))return s==="all"&&(this._pt=0),br(this);for(h=this._op=this._op||[],s!=="all"&&(_e(s)&&(_={},Fe(s,function(y){return _[y]=1}),s=_),s=zv(o,s)),d=o.length;d--;)if(~l.indexOf(o[d])){f=c[d],s==="all"?(h[d]=s,g=f,p={}):(p=h[d]=h[d]||{},g=s);for(_ in g)m=f&&f[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&ta(this,m,"_pt"),delete f[_]),p!=="all"&&(p[_]=1)}return this._initted&&!this._pt&&u&&br(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return Ur(1,arguments)},t.delayedCall=function(i,s,a,o){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(i,s,a){return Ur(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,a){return te.killTweensOf(i,s,a)},t}(hr);rn(he.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Fe("staggerTo,staggerFrom,staggerFromTo",function(r){he[r]=function(){var t=new Ie,e=So.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var $o=function(t,e,n){return t[e]=n},Rh=function(t,e,n){return t[e](n)},Gv=function(t,e,n,i){return t[e](i.fp,n)},kv=function(t,e,n){return t.setAttribute(e,n)},Qo=function(t,e){return ie(t[e])?Rh:Vo(t[e])&&t.setAttribute?kv:$o},Ch=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},Hv=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Ph=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},tl=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},Vv=function(t,e,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(t,e,n),s=a},Wv=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?ta(this,e,"_pt"):e.dep||(n=1),e=i;return!n},Xv=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Lh=function(t){for(var e=t._pt,n,i,s,a;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=s},Oe=function(){function r(e,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||Ch,this.d=l||this,this.set=c||$o,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=Xv,this.m=n,this.mt=s,this.tween=i},r}();Fe(Zo+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Yo[r]=1});Ze.TweenMax=Ze.TweenLite=he;Ze.TimelineLite=Ze.TimelineMax=Ie;te=new Ie({sortChildren:!1,defaults:or,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ye.stringFilter=Mh;var fr=[],Ns={},qv=[],Hc=0,Ya=function(t){return(Ns[t]||qv).map(function(e){return e()})},wo=function(){var t=Date.now(),e=[];t-Hc>2&&(Ya("matchMediaInit"),fr.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=$e.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&e.push(n))}),Ya("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n)}),Hc=t,Ya("matchMedia"))},Dh=function(){function r(e,n){this.selector=n&&Eo(n),this.data=[],this._r=[],this.isReverted=!1,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){ie(n)&&(s=i,i=n,n=ie);var a=this,o=function(){var c=ue,u=a.selector,h;return c&&c!==a&&c.data.push(a),s&&(a.selector=Eo(s)),ue=a,h=i.apply(a,arguments),ie(h)&&a._r.push(h),ue=c,a.selector=u,a.isReverted=!1,h};return a.last=o,n===ie?o(a):n?a[n]=o:o},t.ignore=function(n){var i=ue;ue=null,n(this),ue=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof he&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n){var a=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}))}),a.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof hr)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,s)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i){var o=fr.indexOf(this);~o&&fr.splice(o,1)}},t.revert=function(n){this.kill(n||{})},r}(),Yv=function(){function r(e){this.contexts=[],this.scope=e}var t=r.prototype;return t.add=function(n,i,s){En(n)||(n={matches:n});var a=new Dh(0,s||this.scope),o=a.conditions={},l,c,u;this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=$e.matchMedia(n[c]),l&&(fr.indexOf(a)<0&&fr.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(wo):l.addEventListener("change",wo)));return u&&i(a),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),Ws={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return gh(i)})},timeline:function(t){return new Ie(t)},getTweensOf:function(t,e){return te.getTweensOf(t,e)},getProperty:function(t,e,n,i){_e(t)&&(t=en(t)[0]);var s=Mi(t||{}).get,a=n?rh:ih;return n==="native"&&(n=""),t&&(e?a((He[e]&&He[e].get||s)(t,e,n,i)):function(o,l,c){return a((He[o]&&He[o].get||s)(t,o,l,c))})},quickSetter:function(t,e,n){if(t=en(t),t.length>1){var i=t.map(function(u){return ze.quickSetter(u,e,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}t=t[0]||{};var a=He[e],o=Mi(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=a?function(u){var h=new a;Ji._pt=0,h.init(t,n?u+n:u,Ji,0,[t]),h.render(1,h),Ji._pt&&tl(1,Ji)}:o.set(t,l);return a?c:function(u){return c(t,l,n?u+n:u,o,1)}},quickTo:function(t,e,n){var i,s=ze.to(t,wi((i={},i[e]="+=0.1",i.paused=!0,i),n||{})),a=function(l,c,u){return s.resetTo(e,l,c,u)};return a.tween=s,a},isTweening:function(t){return te.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Si(t.ease,or.ease)),Oc(or,t||{})},config:function(t){return Oc(Ye,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!He[o]&&!Ze[o]&&Gs(e+" effect requires "+o+" plugin.")}),Va[e]=function(o,l,c){return n(en(o),rn(l||{},s),c)},a&&(Ie.prototype[e]=function(o,l,c){return this.add(Va[e](o,En(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){kt[t]=Si(e)},parseEase:function(t,e){return arguments.length?Si(t,e):kt},getById:function(t){return te.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Ie(t),i,s;for(n.smoothChildTiming=Ne(t.smoothChildTiming),te.remove(n),n._dp=0,n._time=n._tTime=te._time,i=te._first;i;)s=i._next,(e||!(!i._dur&&i instanceof he&&i.vars.onComplete===i._targets[0]))&&vn(n,i,i._start-i._delay),i=s;return vn(te,n,0),n},context:function(t,e){return t?new Dh(t,e):ue},matchMedia:function(t){return new Yv(t)},matchMediaRefresh:function(){return fr.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||wo()},addEventListener:function(t,e){var n=Ns[t]||(Ns[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Ns[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:wv,wrapYoyo:Av,distribute:hh,random:dh,snap:fh,normalize:bv,getUnit:Te,clamp:yv,splitColor:vh,toArray:en,selector:Eo,mapRange:mh,pipe:Ev,unitize:Tv,interpolate:Rv,shuffle:uh},install:$u,effects:Va,ticker:Xe,updateRoot:Ie.updateRoot,plugins:He,globalTimeline:te,core:{PropTween:Oe,globals:Qu,Tween:he,Timeline:Ie,Animation:hr,getCache:Mi,_removeLinkedListItem:ta,reverting:function(){return we},context:function(t){return t&&ue&&(ue.data.push(t),t._ctx=ue),ue},suppressOverwrites:function(t){return Ho=t}}};Fe("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Ws[r]=he[r]});Xe.add(Ie.updateRoot);Ji=Ws.to({},{duration:0});var Zv=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},Jv=function(t,e){var n=t._targets,i,s,a;for(i in e)for(s=n.length;s--;)a=t._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=Zv(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[s],i))},Za=function(t,e){return{name:t,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(_e(s)&&(l={},Fe(s,function(u){return l[u]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}Jv(o,s)}}}},ze=Ws.registerPlugin({name:"attr",init:function(t,e,n,i,s){var a,o,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)we?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Za("roundProps",To),Za("modifiers"),Za("snap",fh))||Ws;he.version=Ie.version=ze.version="3.11.5";ju=1;Wo()&&ur();kt.Power0;kt.Power1;kt.Power2;kt.Power3;kt.Power4;kt.Linear;kt.Quad;kt.Cubic;kt.Quart;kt.Quint;kt.Strong;kt.Elastic;kt.Back;kt.SteppedEase;kt.Bounce;kt.Sine;kt.Expo;kt.Circ;/*!
 * CSSPlugin 3.11.5
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Vc,Yn,er,el,_i,Wc,nl,Kv=function(){return typeof window<"u"},Gn={},fi=180/Math.PI,nr=Math.PI/180,Wi=Math.atan2,Xc=1e8,il=/([A-Z])/g,jv=/(left|right|width|margin|padding|x)/i,$v=/[\s,\(]\S/,xn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ao=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Qv=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},tx=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},ex=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Uh=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Ih=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},nx=function(t,e,n){return t.style[e]=n},ix=function(t,e,n){return t.style.setProperty(e,n)},rx=function(t,e,n){return t._gsap[e]=n},sx=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},ax=function(t,e,n,i,s){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},ox=function(t,e,n,i,s){var a=t._gsap;a[e]=n,a.renderTransform(s,a)},ne="transform",pn=ne+"Origin",lx=function r(t,e){var n=this,i=this.target,s=i.style;if(t in Gn){if(this.tfm=this.tfm||{},t!=="transform")t=xn[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=In(i,a)}):this.tfm[t]=i._gsap.x?i._gsap[t]:In(i,t);else return xn.transform.split(",").forEach(function(a){return r.call(n,a,e)});if(this.props.indexOf(ne)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(pn,e,"")),t=ne}(s||e)&&this.props.push(t,e,s[t])},Nh=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},cx=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,a;for(s=0;s<t.length;s+=3)t[s+1]?e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(il,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=nl(),(!s||!s.isStart)&&!n[ne]&&(Nh(n),i.uncache=1)}},Fh=function(t,e){var n={target:t,props:[],revert:cx,save:lx};return t._gsap||ze.core.getCache(t),e&&e.split(",").forEach(function(i){return n.save(i)}),n},Oh,Ro=function(t,e){var n=Yn.createElementNS?Yn.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Yn.createElement(t);return n.style?n:Yn.createElement(t)},yn=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(il,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,dr(e)||e,1)||""},qc="O,Moz,ms,Ms,Webkit".split(","),dr=function(t,e,n){var i=e||_i,s=i.style,a=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(qc[a]+t in s););return a<0?null:(a===3?"ms":a>=0?qc[a]:"")+t},Co=function(){Kv()&&window.document&&(Vc=window,Yn=Vc.document,er=Yn.documentElement,_i=Ro("div")||{style:{}},Ro("div"),ne=dr(ne),pn=ne+"Origin",_i.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Oh=!!dr("perspective"),nl=ze.core.reverting,el=1)},Ja=function r(t){var e=Ro("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,a;if(er.appendChild(e),e.appendChild(this),this.style.display="block",t)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),er.removeChild(e),this.style.cssText=s,a},Yc=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},zh=function(t){var e;try{e=t.getBBox()}catch{e=Ja.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===Ja||(e=Ja.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+Yc(t,["x","cx","x1"])||0,y:+Yc(t,["y","cy","y1"])||0,width:0,height:0}:e},Bh=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&zh(t))},Yr=function(t,e){if(e){var n=t.style;e in Gn&&e!==pn&&(e=ne),n.removeProperty?((e.substr(0,2)==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(e.replace(il,"-$1").toLowerCase())):n.removeAttribute(e)}},Zn=function(t,e,n,i,s,a){var o=new Oe(t._pt,e,n,0,1,a?Ih:Uh);return t._pt=o,o.b=i,o.e=s,t._props.push(n),o},Zc={deg:1,rad:1,turn:1},ux={grid:1,flex:1},ti=function r(t,e,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=_i.style,l=jv.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",p=i==="%",g,_,m,d;return i===a||!s||Zc[i]||Zc[a]?s:(a!=="px"&&!f&&(s=r(t,e,n,"px")),d=t.getCTM&&Bh(t),(p||a==="%")&&(Gn[e]||~e.indexOf("adius"))?(g=d?t.getBBox()[l?"width":"height"]:t[u],oe(p?s/g*h:s/100*g)):(o[l?"width":"height"]=h+(f?a:i),_=~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,d&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===Yn||!_.appendChild)&&(_=Yn.body),m=_._gsap,m&&p&&m.width&&l&&m.time===Xe.time&&!m.uncache?oe(s/m.width*h):((p||a==="%")&&!ux[yn(_,"display")]&&(o.position=yn(t,"position")),_===t&&(o.position="static"),_.appendChild(_i),g=_i[u],_.removeChild(_i),o.position="absolute",l&&p&&(m=Mi(_),m.time=Xe.time,m.width=_[u]),oe(f?g*s/h:g&&s?h/g*s:0))))},In=function(t,e,n,i){var s;return el||Co(),e in xn&&e!=="transform"&&(e=xn[e],~e.indexOf(",")&&(e=e.split(",")[0])),Gn[e]&&e!=="transform"?(s=Jr(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:qs(yn(t,pn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Xs[e]&&Xs[e](t,e,n)||yn(t,e)||eh(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?ti(t,e,s,n)+n:s},hx=function(t,e,n,i){if(!n||n==="none"){var s=dr(e,t,1),a=s&&yn(t,s,1);a&&a!==n?(e=s,n=a):e==="borderColor"&&(n=yn(t,"borderTopColor"))}var o=new Oe(this._pt,t.style,e,0,1,Ph),l=0,c=0,u,h,f,p,g,_,m,d,y,x,M,S;if(o.b=n,o.e=i,n+="",i+="",i==="auto"&&(t.style[e]=i,i=yn(t,e)||i,t.style[e]=n),u=[n,i],Mh(u),n=u[0],i=u[1],f=n.match(Zi)||[],S=i.match(Zi)||[],S.length){for(;h=Zi.exec(i);)m=h[0],y=i.substring(l,h.index),g?g=(g+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(g=1),m!==(_=f[c++]||"")&&(p=parseFloat(_)||0,M=_.substr((p+"").length),m.charAt(1)==="="&&(m=tr(p,m)+M),d=parseFloat(m),x=m.substr((d+"").length),l=Zi.lastIndex-x.length,x||(x=x||Ye.units[e]||M,l===i.length&&(i+=x,o.e+=x)),M!==x&&(p=ti(t,e,_,x)||0),o._pt={_next:o._pt,p:y||c===1?y:",",s:p,c:d-p,m:g&&g<4||e==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=e==="display"&&i==="none"?Ih:Uh;return Ju.test(i)&&(o.e=0),this._pt=o,o},Jc={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},fx=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Jc[n]||n,e[1]=Jc[i]||i,e.join(" ")},dx=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],Gn[o]&&(l=1,o=o==="transformOrigin"?pn:ne),Yr(n,o);l&&(Yr(n,ne),a&&(a.svg&&n.removeAttribute("transform"),Jr(n,1),a.uncache=1,Nh(i)))}},Xs={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var a=t._pt=new Oe(t._pt,e,n,0,0,dx);return a.u=i,a.pr=-10,a.tween=s,t._props.push(n),1}}},Zr=[1,0,0,1,0,0],Gh={},kh=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Kc=function(t){var e=yn(t,ne);return kh(e)?Zr:e.substr(7).match(Zu).map(oe)},rl=function(t,e){var n=t._gsap||Mi(t),i=t.style,s=Kc(t),a,o,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Zr:s):(s===Zr&&!t.offsetParent&&t!==er&&!n.svg&&(l=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent)&&(c=1,o=t.nextElementSibling,er.appendChild(t)),s=Kc(t),l?i.display=l:Yr(t,"display"),c&&(o?a.insertBefore(t,o):a?a.appendChild(t):er.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Po=function(t,e,n,i,s,a){var o=t._gsap,l=s||rl(t,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,f=o.yOffset||0,p=l[0],g=l[1],_=l[2],m=l[3],d=l[4],y=l[5],x=e.split(" "),M=parseFloat(x[0])||0,S=parseFloat(x[1])||0,T,A,C,v;n?l!==Zr&&(A=p*m-g*_)&&(C=M*(m/A)+S*(-_/A)+(_*y-m*d)/A,v=M*(-g/A)+S*(p/A)-(p*y-g*d)/A,M=C,S=v):(T=zh(t),M=T.x+(~x[0].indexOf("%")?M/100*T.width:M),S=T.y+(~(x[1]||x[0]).indexOf("%")?S/100*T.height:S)),i||i!==!1&&o.smooth?(d=M-c,y=S-u,o.xOffset=h+(d*p+y*_)-d,o.yOffset=f+(d*g+y*m)-y):o.xOffset=o.yOffset=0,o.xOrigin=M,o.yOrigin=S,o.smooth=!!i,o.origin=e,o.originIsAbsolute=!!n,t.style[pn]="0px 0px",a&&(Zn(a,o,"xOrigin",c,M),Zn(a,o,"yOrigin",u,S),Zn(a,o,"xOffset",h,o.xOffset),Zn(a,o,"yOffset",f,o.yOffset)),t.setAttribute("data-svg-origin",M+" "+S)},Jr=function(t,e){var n=t._gsap||new Th(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(t),c=yn(t,pn)||"0",u,h,f,p,g,_,m,d,y,x,M,S,T,A,C,v,w,z,H,U,I,F,q,G,V,tt,j,dt,it,k,K,at;return u=h=f=_=m=d=y=x=M=0,p=g=1,n.svg=!!(t.getCTM&&Bh(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[ne]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[ne]!=="none"?l[ne]:"")),i.scale=i.rotate=i.translate="none"),A=rl(t,n.svg),n.svg&&(n.uncache?(V=t.getBBox(),c=n.xOrigin-V.x+"px "+(n.yOrigin-V.y)+"px",G=""):G=!e&&t.getAttribute("data-svg-origin"),Po(t,G||c,!!G||n.originIsAbsolute,n.smooth!==!1,A)),S=n.xOrigin||0,T=n.yOrigin||0,A!==Zr&&(z=A[0],H=A[1],U=A[2],I=A[3],u=F=A[4],h=q=A[5],A.length===6?(p=Math.sqrt(z*z+H*H),g=Math.sqrt(I*I+U*U),_=z||H?Wi(H,z)*fi:0,y=U||I?Wi(U,I)*fi+_:0,y&&(g*=Math.abs(Math.cos(y*nr))),n.svg&&(u-=S-(S*z+T*U),h-=T-(S*H+T*I))):(at=A[6],k=A[7],j=A[8],dt=A[9],it=A[10],K=A[11],u=A[12],h=A[13],f=A[14],C=Wi(at,it),m=C*fi,C&&(v=Math.cos(-C),w=Math.sin(-C),G=F*v+j*w,V=q*v+dt*w,tt=at*v+it*w,j=F*-w+j*v,dt=q*-w+dt*v,it=at*-w+it*v,K=k*-w+K*v,F=G,q=V,at=tt),C=Wi(-U,it),d=C*fi,C&&(v=Math.cos(-C),w=Math.sin(-C),G=z*v-j*w,V=H*v-dt*w,tt=U*v-it*w,K=I*w+K*v,z=G,H=V,U=tt),C=Wi(H,z),_=C*fi,C&&(v=Math.cos(C),w=Math.sin(C),G=z*v+H*w,V=F*v+q*w,H=H*v-z*w,q=q*v-F*w,z=G,F=V),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,d=180-d),p=oe(Math.sqrt(z*z+H*H+U*U)),g=oe(Math.sqrt(q*q+at*at)),C=Wi(F,q),y=Math.abs(C)>2e-4?C*fi:0,M=K?1/(K<0?-K:K):0),n.svg&&(G=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!kh(yn(t,ne)),G&&t.setAttribute("transform",G))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(p*=-1,y+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,y+=y<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-h)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=oe(p),n.scaleY=oe(g),n.rotation=oe(_)+o,n.rotationX=oe(m)+o,n.rotationY=oe(d)+o,n.skewX=y+o,n.skewY=x+o,n.transformPerspective=M+a,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[pn]=qs(c)),n.xOffset=n.yOffset=0,n.force3D=Ye.force3D,n.renderTransform=n.svg?mx:Oh?Hh:px,n.uncache=0,n},qs=function(t){return(t=t.split(" "))[0]+" "+t[1]},Ka=function(t,e,n){var i=Te(e);return oe(parseFloat(e)+parseFloat(ti(t,"x",n+"px",i)))+i},px=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Hh(t,e)},li="0deg",Er="0px",ci=") ",Hh=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,p=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,d=n.force3D,y=n.target,x=n.zOrigin,M="",S=d==="auto"&&t&&t!==1||d===!0;if(x&&(h!==li||u!==li)){var T=parseFloat(u)*nr,A=Math.sin(T),C=Math.cos(T),v;T=parseFloat(h)*nr,v=Math.cos(T),a=Ka(y,a,A*v*-x),o=Ka(y,o,-Math.sin(T)*-x),l=Ka(y,l,C*v*-x+x)}m!==Er&&(M+="perspective("+m+ci),(i||s)&&(M+="translate("+i+"%, "+s+"%) "),(S||a!==Er||o!==Er||l!==Er)&&(M+=l!==Er||S?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+ci),c!==li&&(M+="rotate("+c+ci),u!==li&&(M+="rotateY("+u+ci),h!==li&&(M+="rotateX("+h+ci),(f!==li||p!==li)&&(M+="skew("+f+", "+p+ci),(g!==1||_!==1)&&(M+="scale("+g+", "+_+ci),y.style[ne]=M||"translate(0, 0)"},mx=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,p=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,d=n.yOffset,y=n.forceCSS,x=parseFloat(a),M=parseFloat(o),S,T,A,C,v;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=nr,c*=nr,S=Math.cos(l)*h,T=Math.sin(l)*h,A=Math.sin(l-c)*-f,C=Math.cos(l-c)*f,c&&(u*=nr,v=Math.tan(c-u),v=Math.sqrt(1+v*v),A*=v,C*=v,u&&(v=Math.tan(u),v=Math.sqrt(1+v*v),S*=v,T*=v)),S=oe(S),T=oe(T),A=oe(A),C=oe(C)):(S=h,C=f,T=A=0),(x&&!~(a+"").indexOf("px")||M&&!~(o+"").indexOf("px"))&&(x=ti(p,"x",a,"px"),M=ti(p,"y",o,"px")),(g||_||m||d)&&(x=oe(x+g-(g*S+_*A)+m),M=oe(M+_-(g*T+_*C)+d)),(i||s)&&(v=p.getBBox(),x=oe(x+i/100*v.width),M=oe(M+s/100*v.height)),v="matrix("+S+","+T+","+A+","+C+","+x+","+M+")",p.setAttribute("transform",v),y&&(p.style[ne]=v)},_x=function(t,e,n,i,s){var a=360,o=_e(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?fi:1),c=l-i,u=i+c+"deg",h,f;return o&&(h=s.split("_")[1],h==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),h==="cw"&&c<0?c=(c+a*Xc)%a-~~(c/a)*a:h==="ccw"&&c>0&&(c=(c-a*Xc)%a-~~(c/a)*a)),t._pt=f=new Oe(t._pt,e,n,i,c,Qv),f.e=u,f.u="deg",t._props.push(n),f},jc=function(t,e){for(var n in e)t[n]=e[n];return t},gx=function(t,e,n){var i=jc({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,h,f,p,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[ne]=e,o=Jr(n,1),Yr(n,ne),n.setAttribute("transform",c)):(c=getComputedStyle(n)[ne],a[ne]=e,o=Jr(n,1),a[ne]=c);for(l in Gn)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(p=Te(c),g=Te(u),h=p!==g?ti(n,l,c,g):parseFloat(c),f=parseFloat(u),t._pt=new Oe(t._pt,o,l,h,f-h,Ao),t._pt.u=g||0,t._props.push(l));jc(o,i)};Fe("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",a=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(o){return t<2?r+o:"border"+o+r});Xs[t>1?"border"+r:r]=function(o,l,c,u,h){var f,p;if(arguments.length<4)return f=a.map(function(g){return In(o,g,c)}),p=f.join(" "),p.split(f[0]).length===5?f[0]:p;f=(u+"").split(" "),p={},a.forEach(function(g,_){return p[g]=f[_]=f[_]||f[(_-1)/2|0]}),o.init(l,p,h)}});var Vh={name:"css",register:Co,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var a=this._props,o=t.style,l=n.vars.startAt,c,u,h,f,p,g,_,m,d,y,x,M,S,T,A,C;el||Co(),this.styles=this.styles||Fh(t),C=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(u=e[_],!(He[_]&&bh(_,e,n,i,t,s)))){if(p=typeof u,g=Xs[_],p==="function"&&(u=u.call(n,i,t,s),p=typeof u),p==="string"&&~u.indexOf("random(")&&(u=Xr(u)),g)g(this,t,_,u,n)&&(A=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),u+="",jn.lastIndex=0,jn.test(c)||(m=Te(c),d=Te(u)),d?m!==d&&(c=ti(t,_,c,d)+d):m&&(u+=m),this.add(o,"setProperty",c,u,i,s,0,0,_),a.push(_),C.push(_,0,o[_]);else if(p!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,s):l[_],_e(c)&&~c.indexOf("random(")&&(c=Xr(c)),Te(c+"")||(c+=Ye.units[_]||Te(In(t,_))||""),(c+"").charAt(1)==="="&&(c=In(t,_))):c=In(t,_),f=parseFloat(c),y=p==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),h=parseFloat(u),_ in xn&&(_==="autoAlpha"&&(f===1&&In(t,"visibility")==="hidden"&&h&&(f=0),C.push("visibility",0,o.visibility),Zn(this,o,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=xn[_],~_.indexOf(",")&&(_=_.split(",")[0]))),x=_ in Gn,x){if(this.styles.save(_),M||(S=t._gsap,S.renderTransform&&!e.parseTransform||Jr(t,e.parseTransform),T=e.smoothOrigin!==!1&&S.smooth,M=this._pt=new Oe(this._pt,o,ne,0,1,S.renderTransform,S,0,-1),M.dep=1),_==="scale")this._pt=new Oe(this._pt,S,"scaleY",S.scaleY,(y?tr(S.scaleY,y+h):h)-S.scaleY||0,Ao),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){C.push(pn,0,o[pn]),u=fx(u),S.svg?Po(t,u,0,T,0,this):(d=parseFloat(u.split(" ")[2])||0,d!==S.zOrigin&&Zn(this,S,"zOrigin",S.zOrigin,d),Zn(this,o,_,qs(c),qs(u)));continue}else if(_==="svgOrigin"){Po(t,u,1,T,0,this);continue}else if(_ in Gh){_x(this,S,_,f,y?tr(f,y+u):u);continue}else if(_==="smoothOrigin"){Zn(this,S,"smooth",S.smooth,u);continue}else if(_==="force3D"){S[_]=u;continue}else if(_==="transform"){gx(this,u,t);continue}}else _ in o||(_=dr(_)||_);if(x||(h||h===0)&&(f||f===0)&&!$v.test(u)&&_ in o)m=(c+"").substr((f+"").length),h||(h=0),d=Te(u)||(_ in Ye.units?Ye.units[_]:m),m!==d&&(f=ti(t,_,c,d)),this._pt=new Oe(this._pt,x?S:o,_,f,(y?tr(f,y+h):h)-f,!x&&(d==="px"||_==="zIndex")&&e.autoRound!==!1?ex:Ao),this._pt.u=d||0,m!==d&&d!=="%"&&(this._pt.b=c,this._pt.r=tx);else if(_ in o)hx.call(this,t,_,c,y?y+u:u);else if(_ in t)this.add(t,_,c||t[_],y?y+u:u,i,s);else if(_!=="parseTransform"){qo(_,u);continue}x||(_ in o?C.push(_,0,o[_]):C.push(_,1,c||t[_])),a.push(_)}}A&&Lh(this)},render:function(t,e){if(e.tween._time||!nl())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:In,aliases:xn,getSetter:function(t,e,n){var i=xn[e];return i&&i.indexOf(",")<0&&(e=i),e in Gn&&e!==pn&&(t._gsap.x||In(t,"x"))?n&&Wc===n?e==="scale"?sx:rx:(Wc=n||{})&&(e==="scale"?ax:ox):t.style&&!Vo(t.style[e])?nx:~e.indexOf("-")?ix:Qo(t,e)},core:{_removeProperty:Yr,_getMatrix:rl}};ze.utils.checkPrefix=dr;ze.core.getStyleSaver=Fh;(function(r,t,e,n){var i=Fe(r+","+t+","+e,function(s){Gn[s]=1});Fe(t,function(s){Ye.units[s]="deg",Gh[s]=1}),xn[i[13]]=r+","+t,Fe(n,function(s){var a=s.split(":");xn[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Fe("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Ye.units[r]="px"});ze.registerPlugin(Vh);var Qt=ze.registerPlugin(Vh)||ze;Qt.core.Tween;class Kr extends be{constructor(){super(Kr.Geometry,new Br({opacity:0,transparent:!0})),this.isLensflare=!0,this.type="Lensflare",this.frustumCulled=!1,this.renderOrder=1/0;const t=new P,e=new P,n=new wc(16,16,We),i=new wc(16,16,We),s=Kr.Geometry,a=new Ba({uniforms:{scale:{value:null},screenPosition:{value:null}},vertexShader:`

				precision highp float;

				uniform vec3 screenPosition;
				uniform vec2 scale;

				attribute vec3 position;

				void main() {

					gl_Position = vec4( position.xy * scale + screenPosition.xy, screenPosition.z, 1.0 );

				}`,fragmentShader:`

				precision highp float;

				void main() {

					gl_FragColor = vec4( 1.0, 0.0, 1.0, 1.0 );

				}`,depthTest:!0,depthWrite:!1,transparent:!1}),o=new Ba({uniforms:{map:{value:n},scale:{value:null},screenPosition:{value:null}},vertexShader:`

				precision highp float;

				uniform vec3 screenPosition;
				uniform vec2 scale;

				attribute vec3 position;
				attribute vec2 uv;

				varying vec2 vUV;

				void main() {

					vUV = uv;

					gl_Position = vec4( position.xy * scale + screenPosition.xy, screenPosition.z, 1.0 );

				}`,fragmentShader:`

				precision highp float;

				uniform sampler2D map;

				varying vec2 vUV;

				void main() {

					gl_FragColor = texture2D( map, vUV );

				}`,depthTest:!1,depthWrite:!1,transparent:!1}),l=new be(s,a),c=[],u=sl.Shader,h=new Ba({uniforms:{map:{value:null},occlusionMap:{value:i},color:{value:new Bt(16777215)},scale:{value:new lt},screenPosition:{value:new P}},vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Fs,transparent:!0,depthWrite:!1}),f=new be(s,h);this.addElement=function(d){c.push(d)};const p=new lt,g=new lt,_=new Q0,m=new $t;this.onBeforeRender=function(d,y,x){d.getCurrentViewport(m);const M=m.w/m.z,S=m.z/2,T=m.w/2;let A=16/m.w;if(p.set(A*M,A),_.min.set(m.x,m.y),_.max.set(m.x+(m.z-16),m.y+(m.w-16)),e.setFromMatrixPosition(this.matrixWorld),e.applyMatrix4(x.matrixWorldInverse),!(e.z>0)&&(t.copy(e).applyMatrix4(x.projectionMatrix),g.x=m.x+t.x*S+S-8,g.y=m.y+t.y*T+T-8,_.containsPoint(g))){d.copyFramebufferToTexture(g,n);let C=a.uniforms;C.scale.value=p,C.screenPosition.value=t,d.renderBufferDirect(x,null,s,a,l,null),d.copyFramebufferToTexture(g,i),C=o.uniforms,C.scale.value=p,C.screenPosition.value=t,d.renderBufferDirect(x,null,s,o,l,null);const v=-t.x*2,w=-t.y*2;for(let z=0,H=c.length;z<H;z++){const U=c[z],I=h.uniforms;I.color.value.copy(U.color),I.map.value=U.texture,I.screenPosition.value.x=t.x+v*U.distance,I.screenPosition.value.y=t.y+w*U.distance,A=U.size/m.w;const F=m.w/m.z;I.scale.value.set(A*F,A),h.uniformsNeedUpdate=!0,d.renderBufferDirect(x,null,s,h,f,null)}}},this.dispose=function(){a.dispose(),o.dispose(),h.dispose(),n.dispose(),i.dispose();for(let d=0,y=c.length;d<y;d++)c[d].texture.dispose()}}}class sl{constructor(t,e=1,n=0,i=new Bt(16777215)){this.texture=t,this.size=e,this.distance=n,this.color=i}}sl.Shader={uniforms:{map:{value:null},occlusionMap:{value:null},color:{value:null},scale:{value:null},screenPosition:{value:null}},vertexShader:`

		precision highp float;

		uniform vec3 screenPosition;
		uniform vec2 scale;

		uniform sampler2D occlusionMap;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUV;
		varying float vVisibility;

		void main() {

			vUV = uv;

			vec2 pos = position.xy;

			vec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );

			vVisibility =        visibility.r / 9.0;
			vVisibility *= 1.0 - visibility.g / 9.0;
			vVisibility *=       visibility.b / 9.0;

			gl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D map;
		uniform vec3 color;

		varying vec2 vUV;
		varying float vVisibility;

		void main() {

			vec4 texture = texture2D( map, vUV );
			texture.a *= vVisibility;
			gl_FragColor = texture;
			gl_FragColor.rgb *= color;

		}`};Kr.Geometry=function(){const r=new sn,t=new Float32Array([-1,-1,0,0,0,1,-1,0,1,0,1,1,0,1,1,-1,1,0,0,1]),e=new u0(t,5);return r.setIndex([0,1,2,0,2,3]),r.setAttribute("position",new Os(e,3,0,!1)),r.setAttribute("uv",new Os(e,2,3,!1)),r}();const vx=5e3,xx=5e3,Mx=7e3,yx=5e3,Sx=1e3,Ex=2,jr=-100,Ys=3100,$c=80,Ps=100,Lo={y:0},Qc=.1,tu=10,ja={factor:0},eu=5,Tx=.98,nu=200,al={showing:!0},$a={fov:45,near:.1,far:2e3},Qa={x:0,y:50,z:2900},Wh=10,bx=20,iu={color:4210752,intensity:10},to={x:420,y:-10,z:-500},eo={x:1e3,y:50,z:-4e3},Xh=[{year:1950,info:`Industrialization begins
to increase carbon dioxide levels.`,position:new P(-5,1,0),rotation:Math.PI*-1.1},{year:1960,info:`Deforestation increases
at an alarming rate.`,position:new P(-5,1,500),rotation:Math.PI*-1.1},{year:1970,info:`The Clean Air Act is
passed, addressing environmental concerns.`,position:new P(-5,1,1e3),rotation:Math.PI*-1.1},{year:1980,info:`Climate change science
becomes more prominent.`,position:new P(15,1,1500),rotation:Math.PI*1.1},{year:1990,info:`The Intergovernmental Panel
on Climate Change (IPCC) is formed.`,position:new P(15,1,2e3),rotation:Math.PI*1.1},{year:2e3,info:`Record high temperatures
are recorded across the globe.`,position:new P(15,1,2500),rotation:Math.PI*1.1},{year:2010,info:`Countries around the world
agree to combat climate change in the Paris Agreement.`,position:new P(-5,1,2600),rotation:Math.PI*-1.1},{year:2023,info:`Major climate-related disasters
occur around the world.`,position:new P(15,1,2700),rotation:Math.PI*1.1},{year:2024,info:`Progress is made in reducing
carbon emissions, but challenges remain.`,position:new P(-5,1,2800),rotation:Math.PI*-1.1},{year:2025,info:`Renewable energy becomes
the primary energy source worldwide.`,position:new P(15,1,2900),rotation:Math.PI*1.1},{year:2026,info:`The world aims to be carbon-neutral
to limit global warming to 1.5 degrees Celsius.`,position:new P(4,1,2950),rotation:Math.PI}],ru=[{distance:-1e3,positionOffset:new lt(0,0),lookAt:new P(-5,1,0)}],wx=`
  varying vec3 vNormal;
  void main() {
    vNormal = normalize( normalMatrix * normal );
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
  }
  `,Ax=`
  varying vec3 vNormal;
  uniform float opacity;
  uniform vec3 color;
  void main() {
    float intensity = pow( 0.7 - dot( vNormal, vec3( 0.0, 0.0, 1.0 ) ), 2.0 );
    gl_FragColor = vec4( color, opacity ) * intensity;
  }
`;function Rx(r,t){return new Promise((e,n)=>{const i=new Vr($c,32,32),s=new ku,a=new Vr($c*1.13,32,32),o=new zn({vertexShader:wx,fragmentShader:Ax,side:De,blending:Fs,transparent:!0,uniforms:{opacity:{value:.1},color:{value:new Bt(2113791)}}}),l=c=>new Promise((u,h)=>{t.load(c,u,void 0,h)});Promise.all([l("/images/earth.jpg"),l("/images/earth-normal.png"),l("/images/earth-spec.png")]).then(([c,u,h])=>{s.map=c,s.normalMap=u,s.specularMap=h;const f=new be(i,s);f.userData={earthTexture:c,normalMap:u,specularMap:h},f.position.set(0,0,Ys),r.add(f);const p=new be(a,o);r.add(p),p.position.set(f.position.x,f.position.y,f.position.z),e({earth:f,atmosphere:p})}).catch(n)})}function Cx(r,t){return new Promise((e,n)=>{const i=new Vr(1,8,16);t.load("/images/asteroid.jpeg",function(s){const a=new ku({map:s}),o=new be(i,a);o.position.set(0,0,jr),r.add(o),e(o)},void 0,function(s){n(s)})})}function Px(r){return new Promise((t,e)=>{try{const n=new K0(65280,.5,.5),s=new Hu().load("images/lensflare/flare1.png"),a=new Kr;a.addElement(new sl(s,100,0)),n.add(a),n.position.x=eo.x,n.position.y=eo.y,n.position.z=eo.z,r.add(n);const o=new $0(iu.color,iu.intensity);o.position.set(to.x,to.y,to.z),r.add(o),t({sun:n,sunlight:o})}catch(n){e(n)}})}function Lx(r){return new Promise((t,e)=>{try{const n=new sn,i=new Uu({color:16777215,size:Ex}),s=50,a=[];for(let l=0;l<yx;l++){let c,u,h;do c=pa.randFloatSpread(vx),u=pa.randFloatSpread(xx),h=pa.randFloatSpread(Mx)+Sx;while(Math.sqrt(c*c+u*u)<s);a.push(c,u,h)}n.setAttribute("position",new qe(a,3));const o=new h0(n,i);r.add(o),t(o)}catch(n){e(n)}})}function Dx(r){const t=new ev,e=Xh.map(({year:n,info:i,position:s,rotation:a})=>new Promise(o=>{t.load("/fonts/Bebas.json",function(l){const c=new Nc(String(n),{font:l,size:3,height:.1,curveSegments:10,bevelEnabled:!0,bevelThickness:.3,bevelSize:.01,bevelOffset:0,bevelSegments:5}),u=new Br({color:"orange",transparent:!0,opacity:1}),h=new be(c,u);h.position.x=s.x+.5,h.position.y=s.y+2,h.position.z=s.z,h.rotation.y=a,r.add(h);const f=new Nc(i,{font:l,size:1,height:0,curveSegments:10,bevelEnabled:!1}),p=new Br({color:"white",transparent:!0,opacity:1}),g=new be(f,p);g.position.x=s.x,g.position.y=s.y,g.position.z=s.z,g.rotation.y=a,r.add(g),o({yearText:h,infoText:g})})}));return Promise.all(e)}function Ux(r){r.rotation.y-=.001}function Ix(r){const t=kx();let e=1/0;for(const n of Xh){const i=Math.abs(r.position.z-n.position.z+25);i<e&&(e=i)}if(e<=nu){const n=tu-Qc,i=e/nu;ja.factor=Qc+n*i}else ja.factor=tu;r.position.z+=ja.factor*t,r.position.z<jr&&(r.position.z=jr),r.position.z>Ys-100&&(r.position.z=Ys-100)}function Nx(r){r.rotation.x+=.01}function Fx(r,t){t.forEach(e=>{const n=r.position.distanceTo(e.yearText.position),i=r.position.distanceTo(e.infoText.position);n<Ps?e.yearText.material.opacity=1-n/Ps:e.yearText.material.opacity=0,e.yearText.material.needsUpdate=!0,i<Ps?e.infoText.material.opacity=1-i/Ps:e.infoText.material.opacity=0,e.infoText.material.needsUpdate=!0})}function Ox(r,t,e){if(!al.showing){e.position.z=r.position.z-Wh,e.position.y=r.position.y+2;let n={x:r.position.x,y:r.position.y},i=new P(t.position.x,t.position.y,t.position.z);for(let s=0;s<ru.length;s++){const a=ru[s];if(Math.abs(r.position.z-a.distance)<=20){n.x+=a.positionOffset.x,n.y+=a.positionOffset.y,a.lookAt&&(i=a.lookAt);break}}Qt.to(e.position,{duration:5,x:n.x,y:n.y,ease:"power1",onUpdate:function(){e.lookAt(i.x,i.y,i.z)}})}}function zx(r,t,e,n){const i=t.position.distanceTo(e.position),s=500;let a=0;i<s?a=.1:a=0;const o=new Bt(a,0,0),l=new Bt(4210752);r.color=a>0?o:l,a>0?n.material.uniforms.color.value=o:n.material.uniforms.color.value=new Bt(2113791),n.material.needsUpdate=!0}function Bx(r,t,e){r.far=6e3;const n={x:t.position.x,y:t.position.y+2,z:t.position.z-Wh};Qt.to(r.position,{duration:3,x:n.x,y:n.y,z:n.z,ease:"power3",onUpdate:function(){r.updateProjectionMatrix(),r.lookAt(e.position.x,e.position.y,e.position.z)},onComplete:function(){al.showing=!1}})}function Gx(r,t,e,n,i){const s=t.position.distanceTo(e.position);if(s>n)return;const a=(1-s/n)*i,o=(Math.random()-.5)*a,l=(Math.random()-.5)*a,c=(Math.random()-.5)*a;Qt.to(r.position,{duration:.1,x:`+=${o}`,y:`+=${l}`,z:`+=${c}`,onComplete:()=>{Qt.to(r.position,{duration:.1,x:`-=${o}`,y:`-=${l}`,z:`-=${c}`})}})}function kx(){Lo.y*=Tx;let r=Lo.y/1e3;return Math.abs(r)>eu&&(r=Math.sign(r)*eu),r}function Hx(r,t){r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),t.setSize(window.innerWidth,window.innerHeight)}function Vx(r){const t=document.querySelector("#scrollbar-handle"),e=0,n=100-2*e,i=e+n*((r.position.z-jr)/(Ys+50-jr));t.style.top=`${i}%`}function Wx(){Qt.to(".title div",{y:"-50%",ease:"power2",duration:1,stagger:.1,delay:.5}),Qt.to(".title",{autoAlpha:1,ease:"power2",duration:1,delay:.5})}function Xx(){Qt.to(".explore-button",{y:"-120%",autoAlpha:1,ease:"power2",duration:1,delay:.5})}function qx(){Qt.to(".yellow-dot-logo",{autoAlpha:1,ease:"power2",duration:2,delay:.5})}function Yx(){Qt.to("#about-button",{autoAlpha:1,ease:"power2",duration:1,delay:.5})}function Zx(){Qt.to("#scrollbar-handle",{autoAlpha:1,ease:"power2",duration:1,delay:.5})}function Jx(){jx(),Wx(),Xx()}function Kx(){Qt.from("#svg-logo",{autoAlpha:0,ease:"power2",duration:1}),Qt.from("#loading-bar-foreground",{autoAlpha:0,duration:1,ease:"power1"}),Qt.from("#loading-bar-background",{autoAlpha:0,duration:1,ease:"power1"}),Qt.to("#loading-bar-foreground",{width:"100%",duration:10,ease:"power1"})}function jx(){Qt.to("#svg-logo",{autoAlpha:0,ease:"power2",duration:.5}),Qt.to("#loading-bar-foreground",{autoAlpha:0,duration:.5,ease:"power1"}),Qt.to("#loading-bar-background",{autoAlpha:0,duration:.5,ease:"power1"})}function $x(){const r=Qt.to("#scroll-indicator",{opacity:1,duration:1.5,yoyo:!0,repeat:-1,ease:"power1.inOut"});window.addEventListener("wheel",function t(){r.kill(),document.getElementById("scroll-indicator").style.display="none",window.removeEventListener("wheel",t)},{once:!0})}function Qx(r){const t=new Ve($a.fov,window.innerWidth/window.innerHeight,$a.near,$a.far);return t.position.set(Qa.x,Qa.y,Qa.z),t.setFocalLength(bx),t.lookAt(r.position.x,r.position.y,r.position.z),t}function tM(){const r=document.querySelector(".webgl"),t=new Du({canvas:r,antialias:!0});return t.setSize(window.innerWidth,window.innerHeight),t.setPixelRatio(window.devicePixelRatio),t}function eM(r,t){window.addEventListener("mousemove",function(e){e.clientX/window.innerWidth*2-1,-(e.clientY/window.innerHeight)*2+1}),window.addEventListener("resize",()=>Hx(r,t),!1),window.addEventListener("wheel",function(e){al.showing||(Lo.y+=e.deltaY)})}function nM(r,t,e){document.querySelector(".explore-button").addEventListener("click",()=>{$x(),Qt.to(".title",{duration:1,fontSize:"4rem",top:"7%",ease:"power2.out"}),document.querySelector(".explore-button").style.display="none",qx(),Yx(),Zx(),Bx(r,t,e)});const n=document.getElementById("about-button"),i=document.getElementById("close-button");let s=!1;n.addEventListener("click",()=>{s||(s=!0,Qt.to(n,{opacity:0,duration:.5,onComplete:()=>{n.style.display="none",s=!1}}),i.style.display="block",Qt.fromTo(i,{opacity:0},{opacity:1,duration:.5}))}),i.addEventListener("click",()=>{s||(s=!0,n.style.display="block",Qt.fromTo(n,{opacity:0},{opacity:1,duration:.5,onComplete:()=>{s=!1}}),Qt.to(i,{opacity:0,duration:.5,onComplete:()=>{i.style.display="none"}}))})}function qh(r,t,e,n,i,s,a,o,l,c){requestAnimationFrame(()=>qh(r,t,e,n,i,s,a,o,l,c)),Ix(n),Ox(n,i,e),Vx(n),Fx(n,s),Ux(i),Nx(n),zx(l,n,i,c),Gx(e,n,i,500,.3),r.render(t,e)}async function iM(){const r=new c0,t=new Hu,{earth:e,atmosphere:n}=await Rx(r,t),i=await Cx(r,t),{sun:s,sunlight:a}=await Px(r),o=await Lx(r),l=await Dx(r);if(s&&o&&l&&i&&e){const c=Qx(e),u=tM();eM(c,u),nM(c,i,e),Kx(),setTimeout(Jx,1e4),qh(u,r,c,i,e,l,o,s,a,n)}}iM();
