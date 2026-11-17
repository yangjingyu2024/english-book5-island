var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t,t.exports),e=null),t.exports),s=(e,n)=>{let r={};for(var i in e)t(r,i,{get:e[i],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:`Module`}),r},c=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},l=(n,r,o)=>(o=n==null?{}:e(i(n)),c(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var u,d,f,p,m,h,g,_,v,y={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},b={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},x=1e3,S=1001,C=1002,w=1003,T=1004,E=1005,D=1006,O=1007,ee=1008,k=1009,A=1010,j=1011,te=1012,ne=1013,re=1014,ie=1015,ae=1016,oe=1017,se=1018,ce=1020,M=35902,le=35899,ue=1021,N=1022,de=1023,fe=1026,pe=1027,me=1028,he=1029,ge=1030,_e=1031,ve=1033,ye=33776,be=33777,xe=33778,Se=33779,Ce=35840,we=35841,Te=35842,Ee=35843,De=36196,Oe=37492,ke=37496,Ae=37488,je=37489,Me=37490,Ne=37491,Pe=37808,Fe=37809,P=37810,Ie=37811,Le=37812,Re=37813,F=37814,ze=37815,I=37816,L=37817,Be=37818,Ve=37819,He=37820,Ue=37821,We=36492,Ge=36494,Ke=36495,qe=36283,Je=36284,Ye=36285,Xe=36286,Ze=2300,Qe=2301,$e=2302,et=2303,tt=2400,nt=2401,rt=2402,it=3200,at=`srgb`,ot=`srgb-linear`,st=`linear`,ct=`srgb`,lt=7680,ut=35044,dt=2e3;function ft(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function pt(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function mt(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function ht(){let e=mt(`canvas`);return e.style.display=`block`,e}var gt={};function _t(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function vt(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function R(...e){e=vt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function z(...e){e=vt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function yt(...e){let t=e.join(` `);t in gt||(gt[t]=!0,R(...e))}function bt(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var xt={0:0,2:6,4:4,3:5,1:1,6:2,7:7,5:3},St=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},Ct=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),wt=1234567,Tt=Math.PI/180,Et=180/Math.PI;function Dt(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Ct[e&255]+Ct[e>>8&255]+Ct[e>>16&255]+Ct[e>>24&255]+`-`+Ct[t&255]+Ct[t>>8&255]+`-`+Ct[t>>16&15|64]+Ct[t>>24&255]+`-`+Ct[n&63|128]+Ct[n>>8&255]+`-`+Ct[n>>16&255]+Ct[n>>24&255]+Ct[r&255]+Ct[r>>8&255]+Ct[r>>16&255]+Ct[r>>24&255]).toLowerCase()}function B(e,t,n){return Math.max(t,Math.min(n,e))}function Ot(e,t){return(e%t+t)%t}function kt(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function At(e,t,n){return e===t?0:(n-e)/(t-e)}function jt(e,t,n){return(1-n)*e+n*t}function Mt(e,t,n,r){return jt(e,t,1-Math.exp(-n*r))}function Nt(e,t=1){return t-Math.abs(Ot(e,t*2)-t)}function Pt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function Ft(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function It(e,t){return e+Math.floor(Math.random()*(t-e+1))}function Lt(e,t){return e+Math.random()*(t-e)}function Rt(e){return e*(.5-Math.random())}function zt(e){e!==void 0&&(wt=e);let t=wt+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Bt(e){return e*Tt}function Vt(e){return e*Et}function Ht(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function Ut(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function Wt(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function Gt(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:R(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function Kt(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function qt(e,t){if(t.constructor===Float32Array)return e;let n=Kt(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.max(e/n,-1)}function Jt(e,t){if(t.constructor===Float32Array)return e;let n=Kt(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.round(e*n)}var Yt={DEG2RAD:Tt,RAD2DEG:Et,generateUUID:Dt,clamp:B,euclideanModulo:Ot,mapLinear:kt,inverseLerp:At,lerp:jt,damp:Mt,pingpong:Nt,smoothstep:Pt,smootherstep:Ft,randInt:It,randFloat:Lt,randFloatSpread:Rt,seededRandom:zt,degToRad:Bt,radToDeg:Vt,isPowerOfTwo:Ht,ceilPowerOfTwo:Ut,floorPowerOfTwo:Wt,setQuaternionFromProperEuler:Gt,normalize:Jt,denormalize:qt};g=Symbol.iterator;var V=class{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=B(this.x,e.x,t.x),this.y=B(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=B(this.x,e,t),this.y=B(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(B(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(B(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[g](){yield this.x,yield this.y}};u=V,u.prototype.isVector2=!0;var Xt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:R(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(B(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};_=Symbol.iterator;var H=class{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Qt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Qt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=B(this.x,e.x,t.x),this.y=B(this.y,e.y,t.y),this.z=B(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=B(this.x,e,t),this.y=B(this.y,e,t),this.z=B(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(B(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Zt.copy(this).projectOnVector(e),this.sub(Zt)}reflect(e){return this.sub(Zt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(B(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[_](){yield this.x,yield this.y,yield this.z}};d=H,d.prototype.isVector3=!0;var Zt=new H,Qt=new Xt,U=class{constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return yt(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply($t.makeScale(e,t)),this}rotate(e){return yt(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply($t.makeRotation(-e)),this}translate(e,t){return yt(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply($t.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};f=U,f.prototype.isMatrix3=!0;var $t=new U,en=new U().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),tn=new U().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function nn(){let e={enabled:!0,workingColorSpace:ot,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=an(e.r),e.g=an(e.g),e.b=an(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=on(e.r),e.g=on(e.g),e.b=on(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?st:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[n].fromXYZ).multiply(this.spaces[t].toXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[ot]:{primaries:t,whitePoint:r,transfer:st,toXYZ:en,fromXYZ:tn,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:at},outputColorSpaceConfig:{drawingBufferColorSpace:at}},[at]:{primaries:t,whitePoint:r,transfer:ct,toXYZ:en,fromXYZ:tn,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:at}}}),e}var rn=nn();function an(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function on(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var sn,cn=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{sn===void 0&&(sn=mt(`canvas`)),sn.width=e.width,sn.height=e.height;let t=sn.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=sn}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=mt(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=an(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(an(t[e]/255)*255):t[e]=an(t[e]);return{data:t,width:e.width,height:e.height}}return R(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},ln=0,un=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ln++}),this.uuid=Dt(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width||0,t.height||0,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(dn(r[t].image)):e.push(dn(r[t]))}else e=dn(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function dn(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?cn.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(R(`Texture: Unable to serialize Texture.`),{})}var fn=0,pn=new H,mn=class e extends St{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=S,i=S,a=D,o=ee,s=de,c=k,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fn++}),this.uuid=Dt(),this.name=``,this.source=new un(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new V(0,0),this.repeat=new V(1,1),this.center=new V(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new U,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(pn).x}get height(){return this.source.getSize(pn).y}get depth(){return this.source.getSize(pn).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){R(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?R(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case x:e.x-=Math.floor(e.x);break;case S:e.x=e.x<0?0:1;break;case C:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case x:e.y-=Math.floor(e.y);break;case S:e.y=e.y<0?0:1;break;case C:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};mn.DEFAULT_IMAGE=null,mn.DEFAULT_MAPPING=300,mn.DEFAULT_ANISOTROPY=1,v=Symbol.iterator;var hn=class{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=B(this.x,e.x,t.x),this.y=B(this.y,e.y,t.y),this.z=B(this.z,e.z,t.z),this.w=B(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=B(this.x,e,t),this.y=B(this.y,e,t),this.z=B(this.z,e,t),this.w=B(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(B(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[v](){yield this.x,yield this.y,yield this.z,yield this.w}};p=hn,p.prototype.isVector4=!0;var gn=class extends St{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:D,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new hn(0,0,e,t),this.scissorTest=!1,this.viewport=new hn(0,0,e,t),this.textures=[];let r=n.count;for(let i=0;i<r;i++)this.textures[i]=new mn({width:e,height:t,depth:n.depth}),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:D,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new un(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},_n=class extends gn{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},vn=class extends mn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=w,this.minFilter=w,this.wrapR=S,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},yn=class extends mn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=w,this.minFilter=w,this.wrapR=S,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},bn=class e{constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/xn.setFromMatrixColumn(e,0).length(),i=1/xn.setFromMatrixColumn(e,1).length(),a=1/xn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Cn,e,wn)}lookAt(e,t,n){let r=this.elements;return Dn.subVectors(e,t),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),Tn.crossVectors(n,Dn),Tn.lengthSq()===0&&(Math.abs(n.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),Tn.crossVectors(n,Dn)),Tn.normalize(),En.crossVectors(Dn,Tn),r[0]=Tn.x,r[4]=En.x,r[8]=Dn.x,r[1]=Tn.y,r[5]=En.y,r[9]=Dn.y,r[2]=Tn.z,r[6]=En.z,r[10]=Dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],ee=r[2],k=r[6],A=r[10],j=r[14],te=r[3],ne=r[7],re=r[11],ie=r[15];return i[0]=a*x+o*T+s*ee+c*te,i[4]=a*S+o*E+s*k+c*ne,i[8]=a*C+o*D+s*A+c*re,i[12]=a*w+o*O+s*j+c*ie,i[1]=l*x+u*T+d*ee+f*te,i[5]=l*S+u*E+d*k+f*ne,i[9]=l*C+u*D+d*A+f*re,i[13]=l*w+u*O+d*j+f*ie,i[2]=p*x+m*T+h*ee+g*te,i[6]=p*S+m*E+h*k+g*ne,i[10]=p*C+m*D+h*A+g*re,i[14]=p*w+m*O+h*j+g*ie,i[3]=_*x+v*T+y*ee+b*te,i[7]=_*S+v*E+y*k+b*ne,i[11]=_*C+v*D+y*A+b*re,i[15]=_*w+v*O+y*j+b*ie,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,ee=_*O-v*D+y*E+b*T-x*w+S*C;if(ee===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/ee;return e[0]=(o*O-s*D+c*E)*k,e[1]=(r*D-n*O-i*E)*k,e[2]=(m*S-h*x+g*b)*k,e[3]=(d*x-u*S-f*b)*k,e[4]=(s*T-a*O-c*w)*k,e[5]=(t*O-r*T+i*w)*k,e[6]=(h*y-p*S-g*v)*k,e[7]=(l*S-d*y+f*v)*k,e[8]=(a*D-o*T+c*C)*k,e[9]=(n*T-t*D-i*C)*k,e[10]=(p*x-m*y+g*_)*k,e[11]=(u*y-l*x-f*_)*k,e[12]=(o*w-a*E-s*C)*k,e[13]=(t*E-n*w+r*C)*k,e[14]=(m*v-p*b-h*_)*k,e[15]=(l*b-u*v+d*_)*k,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=xn.set(r[0],r[1],r[2]).length(),o=xn.set(r[4],r[5],r[6]).length(),s=xn.set(r[8],r[9],r[10]).length();i<0&&(a=-a),Sn.copy(this);let c=1/a,l=1/o,u=1/s;return Sn.elements[0]*=c,Sn.elements[1]*=c,Sn.elements[2]*=c,Sn.elements[4]*=l,Sn.elements[5]*=l,Sn.elements[6]*=l,Sn.elements[8]*=u,Sn.elements[9]*=u,Sn.elements[10]*=u,t.setFromRotationMatrix(Sn),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=dt,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=dt,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};m=bn,m.prototype.isMatrix4=!0;var xn=new H,Sn=new bn,Cn=new H(0,0,0),wn=new H(1,1,1),Tn=new H,En=new H,Dn=new H,On=new bn,kn=new Xt,An=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(B(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-B(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(B(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-B(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(B(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-B(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:R(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return On.makeRotationFromQuaternion(e),this.setFromRotationMatrix(On,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return kn.setFromEuler(this),this.setFromQuaternion(kn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};An.DEFAULT_ORDER=`XYZ`;var jn=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},Mn=0,Nn=new H,Pn=new Xt,Fn=new bn,In=new H,Ln=new H,Rn=new H,zn=new Xt,Bn=new H(1,0,0),Vn=new H(0,1,0),Hn=new H(0,0,1),Un={type:`added`},Wn={type:`removed`},Gn={type:`childadded`,child:null},Kn={type:`childremoved`,child:null},qn=class e extends St{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mn++}),this.uuid=Dt(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new H,n=new An,r=new Xt,i=new H(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new bn},normalMatrix:{value:new U}}),this.matrix=new bn,this.matrixWorld=new bn,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Pn.setFromAxisAngle(e,t),this.quaternion.multiply(Pn),this}rotateOnWorldAxis(e,t){return Pn.setFromAxisAngle(e,t),this.quaternion.premultiply(Pn),this}rotateX(e){return this.rotateOnAxis(Bn,e)}rotateY(e){return this.rotateOnAxis(Vn,e)}rotateZ(e){return this.rotateOnAxis(Hn,e)}translateOnAxis(e,t){return Nn.copy(e).applyQuaternion(this.quaternion),this.position.add(Nn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Bn,e)}translateY(e){return this.translateOnAxis(Vn,e)}translateZ(e){return this.translateOnAxis(Hn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?In.copy(e):In.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Ln.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(Ln,In,this.up):Fn.lookAt(In,Ln,this.up),this.quaternion.setFromRotationMatrix(Fn),r&&(Fn.extractRotation(r.matrixWorld),Pn.setFromRotationMatrix(Fn),this.quaternion.premultiply(Pn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(z(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Un),Gn.child=e,this.dispatchEvent(Gn),Gn.child=null):z(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Wn),Kn.child=e,this.dispatchEvent(Kn),Kn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Un),Gn.child=e,this.dispatchEvent(Gn),Gn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ln,e,Rn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ln,zn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};qn.DEFAULT_UP=new H(0,1,0),qn.DEFAULT_MATRIX_AUTO_UPDATE=!0,qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Jn=class extends qn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},Yn={type:`move`},Xn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.quaternion,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.quaternion,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Yn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Jn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Zn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qn={h:0,s:0,l:0},$n={h:0,s:0,l:0};function er(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var W=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=at){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rn.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=rn.workingColorSpace){return this.r=e,this.g=t,this.b=n,rn.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=rn.workingColorSpace){if(e=Ot(e,1),t=B(t,0,1),n=B(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=er(i,r,e+1/3),this.g=er(i,r,e),this.b=er(i,r,e-1/3)}return rn.colorSpaceToWorking(this,r),this}setStyle(e,t=at){function n(t){t!==void 0&&parseFloat(t)<1&&R(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseFloat(i[1]))/100,Math.min(100,parseFloat(i[2]))/100,Math.min(100,parseFloat(i[3]))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:R(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);R(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=at){let n=Zn[e.toLowerCase()];return n===void 0?R(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=an(e.r),this.g=an(e.g),this.b=an(e.b),this}copyLinearToSRGB(e){return this.r=on(e.r),this.g=on(e.g),this.b=on(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=at){return rn.workingToColorSpace(tr.copy(this),e),Math.round(B(tr.r*255,0,255))*65536+Math.round(B(tr.g*255,0,255))*256+Math.round(B(tr.b*255,0,255))}getHexString(e=at){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rn.workingColorSpace){rn.workingToColorSpace(tr.copy(this),t);let n=tr.r,r=tr.g,i=tr.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=rn.workingColorSpace){return rn.workingToColorSpace(tr.copy(this),t),e.r=tr.r,e.g=tr.g,e.b=tr.b,e}getStyle(e=at){rn.workingToColorSpace(tr.copy(this),e);let t=tr.r,n=tr.g,r=tr.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Qn),this.setHSL(Qn.h+e,Qn.s+t,Qn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Qn),e.getHSL($n);let n=jt(Qn.h,$n.h,t),r=jt(Qn.s,$n.s,t),i=jt(Qn.l,$n.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},tr=new W;W.NAMES=Zn;var nr=class e{constructor(e,t=1,n=1e3){this.isFog=!0,this.name=``,this.color=new W(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},rr=class extends qn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new An,this.environmentIntensity=1,this.environmentRotation=new An,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background===null?null:e.background.clone(),this.environment=e.environment===null?null:e.environment.clone(),this.fog=e.fog===null?null:e.fog.clone(),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial===null?null:e.overrideMaterial.clone(),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},ir=new H,ar=new H,or=new H,sr=new H,cr=new H,lr=new H,ur=new H,dr=new H,fr=new H,pr=new H,mr=new hn,hr=new hn,gr=new hn,_r=class e{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),ir.subVectors(e,t),r.cross(ir);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){ir.subVectors(r,t),ar.subVectors(n,t),or.subVectors(e,t);let a=ir.dot(ir),o=ir.dot(ar),s=ir.dot(or),c=ar.dot(ar),l=ar.dot(or),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,sr)!==null&&sr.x>=0&&sr.y>=0&&sr.x+sr.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,sr)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,sr.x),s.addScaledVector(a,sr.y),s.addScaledVector(o,sr.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return mr.setScalar(0),hr.setScalar(0),gr.setScalar(0),mr.fromBufferAttribute(e,t),hr.fromBufferAttribute(e,n),gr.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(mr,i.x),a.addScaledVector(hr,i.y),a.addScaledVector(gr,i.z),a}static isFrontFacing(e,t,n,r){return ir.subVectors(n,t),ar.subVectors(e,t),ir.cross(ar).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ir.subVectors(this.c,this.b),ar.subVectors(this.a,this.b),ir.cross(ar).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;cr.subVectors(r,n),lr.subVectors(i,n),dr.subVectors(e,n);let s=cr.dot(dr),c=lr.dot(dr);if(s<=0&&c<=0)return t.copy(n);fr.subVectors(e,r);let l=cr.dot(fr),u=lr.dot(fr);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0&&s-l>0)return a=s/(s-l),t.copy(n).addScaledVector(cr,a);pr.subVectors(e,i);let f=cr.dot(pr),p=lr.dot(pr);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(lr,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return ur.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(ur,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(cr,a).addScaledVector(lr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},vr=class{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(br.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(br.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=br.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,br):br.fromBufferAttribute(r,t),br.applyMatrix4(e.matrixWorld),this.expandByPoint(br);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),xr.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),xr.copy(e.boundingBox)),xr.applyMatrix4(e.matrixWorld),this.union(xr)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,br),br.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Or),kr.subVectors(this.max,Or),Sr.subVectors(e.a,Or),Cr.subVectors(e.b,Or),wr.subVectors(e.c,Or),Tr.subVectors(Cr,Sr),Er.subVectors(wr,Cr),Dr.subVectors(Sr,wr);let t=[0,-Tr.z,Tr.y,0,-Er.z,Er.y,0,-Dr.z,Dr.y,Tr.z,0,-Tr.x,Er.z,0,-Er.x,Dr.z,0,-Dr.x,-Tr.y,Tr.x,0,-Er.y,Er.x,0,-Dr.y,Dr.x,0];return!Mr(t,Sr,Cr,wr,kr)||(t=[1,0,0,0,1,0,0,0,1],!Mr(t,Sr,Cr,wr,kr))?!1:(Ar.crossVectors(Tr,Er),t=[Ar.x,Ar.y,Ar.z],Mr(t,Sr,Cr,wr,kr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,br).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(br).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(yr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yr)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},yr=[new H,new H,new H,new H,new H,new H,new H,new H],br=new H,xr=new vr,Sr=new H,Cr=new H,wr=new H,Tr=new H,Er=new H,Dr=new H,Or=new H,kr=new H,Ar=new H,jr=new H;function Mr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){jr.fromArray(e,a);let o=i.x*Math.abs(jr.x)+i.y*Math.abs(jr.y)+i.z*Math.abs(jr.z),s=t.dot(jr),c=n.dot(jr),l=r.dot(jr);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var Nr=new H,Pr=new V,Fr=0,Ir=class extends St{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Fr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=ut,this.updateRanges=[],this.gpuType=ie,this.version=0,this._normalizationScale=e===void 0?void 0:Kt(e)}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Pr.fromBufferAttribute(this,t),Pr.applyMatrix3(e),this.setXY(t,Pr.x,Pr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Nr.fromBufferAttribute(this,t),Nr.applyMatrix3(e),this.setXYZ(t,Nr.x,Nr.y,Nr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Nr.fromBufferAttribute(this,t),Nr.applyMatrix4(e),this.setXYZ(t,Nr.x,Nr.y,Nr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Nr.fromBufferAttribute(this,t),Nr.applyNormalMatrix(e),this.setXYZ(t,Nr.x,Nr.y,Nr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Nr.fromBufferAttribute(this,t),Nr.transformDirection(e),this.setXYZ(t,Nr.x,Nr.y,Nr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}_denormalize(e){let t=this._normalizationScale;return t===void 0?qt(e,this.array):Math.max(e/t,-1)}_normalize(e){let t=this._normalizationScale;return t===void 0?Jt(e,this.array):Math.round(e*t)}},Lr=class extends Ir{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Rr=class extends Ir{constructor(e,t,n){super(new Uint32Array(e),t,n)}},G=class extends Ir{constructor(e,t,n){super(new Float32Array(e),t,n)}},zr=new vr,Br=new H,Vr=new H,Hr=class{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?zr.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Br.subVectors(e,this.center);let t=Br.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Br,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Vr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Br.copy(e.center).add(Vr)),this.expandByPoint(Br.copy(e.center).sub(Vr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Ur=0,Wr=new bn,Gr=new qn,Kr=new H,qr=new vr,Jr=new vr,Yr=new H,Xr=class e extends St{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ur++}),this.uuid=Dt(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(ft(e)?Rr:Lr)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new U().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Wr.makeRotationFromQuaternion(e),this.applyMatrix4(Wr),this}rotateX(e){return Wr.makeRotationX(e),this.applyMatrix4(Wr),this}rotateY(e){return Wr.makeRotationY(e),this.applyMatrix4(Wr),this}rotateZ(e){return Wr.makeRotationZ(e),this.applyMatrix4(Wr),this}translate(e,t,n){return Wr.makeTranslation(e,t,n),this.applyMatrix4(Wr),this}scale(e,t,n){return Wr.makeScale(e,t,n),this.applyMatrix4(Wr),this}lookAt(e){return Gr.lookAt(e),Gr.updateMatrix(),this.applyMatrix4(Gr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Kr).negate(),this.translate(Kr.x,Kr.y,Kr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new G(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&R(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)z(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];qr.setFromBufferAttribute(n),this.morphTargetsRelative?(Yr.addVectors(this.boundingBox.min,qr.min),this.boundingBox.expandByPoint(Yr),Yr.addVectors(this.boundingBox.max,qr.max),this.boundingBox.expandByPoint(Yr)):(this.boundingBox.expandByPoint(qr.min),this.boundingBox.expandByPoint(qr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&z(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)z(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new H,1/0);else if(e){let n=this.boundingSphere.center;if(qr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Jr.setFromBufferAttribute(n),this.morphTargetsRelative?(Yr.addVectors(qr.min,Jr.min),qr.expandByPoint(Yr),Yr.addVectors(qr.max,Jr.max),qr.expandByPoint(Yr)):(qr.expandByPoint(Jr.min),qr.expandByPoint(Jr.max))}qr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Yr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Yr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Yr.fromBufferAttribute(a,t),o&&(Kr.fromBufferAttribute(e,t),Yr.add(Kr)),r=Math.max(r,n.distanceToSquared(Yr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&z(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){z(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new Ir(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[],c=new Uint8Array(n.count);for(let e=0;e<n.count;e++)o[e]=new H,s[e]=new H;let l=new H,u=new H,d=new H,f=new V,p=new V,m=new V,h=new H,g=new H;function _(e,t,r){c[e]=c[t]=c[r]=1,l.fromBufferAttribute(n,e),u.fromBufferAttribute(n,t),d.fromBufferAttribute(n,r),f.fromBufferAttribute(i,e),p.fromBufferAttribute(i,t),m.fromBufferAttribute(i,r),u.sub(l),d.sub(l),p.sub(f),m.sub(f);let a=1/(p.x*m.y-m.x*p.y);isFinite(a)&&(h.copy(u).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(a),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(a),o[e].add(h),o[t].add(h),o[r].add(h),s[e].add(g),s[t].add(g),s[r].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let t=0,n=v.length;t<n;++t){let n=v[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)_(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let y=new H,b=new H,x=new H,S=new H;function C(e){x.fromBufferAttribute(r,e),S.copy(x);let t=o[e];y.copy(t),y.sub(x.multiplyScalar(x.dot(t))).normalize(),b.crossVectors(S,t);let n=b.dot(s[e])<0?-1:1;a.setXYZW(e,y.x,y.y,y.z,n)}for(let e=0,t=n.count;e<t;++e)c[e]&&C(e);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new Ir(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new H,i=new H,a=new H,o=new H,s=new H,c=new H,l=new H,u=new H;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Yr.fromBufferAttribute(e,t),Yr.normalize(),e.setXYZ(t,Yr.x,Yr.y,Yr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new Ir(a,r,i)}if(this.index===null)return R(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Zr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=ut,this.updateRanges=[],this.version=0,this.uuid=Dt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Qr(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),r=new this.constructor(n,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Qr(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function Qr(e){return e.buffer._uuid===void 0&&(e.buffer._uuid=Dt()),e.byteOffset===0&&e.byteLength===e.buffer.byteLength?e.buffer._uuid:e.buffer._uuid+`:`+e.byteOffset+`:`+e.byteLength}var $r=new H,ei=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r,this._normalizationScale=e===void 0?void 0:Kt(e.array)}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)$r.fromBufferAttribute(this,t),$r.applyMatrix4(e),this.setXYZ(t,$r.x,$r.y,$r.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$r.fromBufferAttribute(this,t),$r.applyNormalMatrix(e),this.setXYZ(t,$r.x,$r.y,$r.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$r.fromBufferAttribute(this,t),$r.transformDirection(e),this.setXYZ(t,$r.x,$r.y,$r.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){_t(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new Ir(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){_t(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t===void 0?qt(e,this.data.array):Math.max(e/t,-1)}_normalize(e){let t=this._normalizationScale;return t===void 0?Jt(e,this.data.array):Math.round(e*t)}},ti=new H,ni=new H,ri=new U,ii=class{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=ti.subVectors(n,t).cross(ni.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(ti),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||ri.getNormalMatrix(e),r=this.coplanarPoint(ti).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},ai=0,oi=class extends St{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ai++}),this.uuid=Dt(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new W(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=lt,this.stencilZFail=lt,this.stencilZPass=lt,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){R(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?R(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new W().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new ii().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new V().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new V().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},si=class extends oi{constructor(e){super(),this.isSpriteMaterial=!0,this.type=`SpriteMaterial`,this.color=new W(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ci,li=new H,ui=new H,di=new H,fi=new V,pi=new V,mi=new bn,hi=new H,gi=new H,_i=new H,vi=new V,yi=new V,bi=new V,xi=class extends qn{constructor(e=new si){if(super(),this.isSprite=!0,this.type=`Sprite`,ci===void 0){ci=new Xr;let e=new Zr(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);ci.setIndex([0,1,2,0,2,3]),ci.setAttribute(`position`,new ei(e,3,0,!1)),ci.setAttribute(`uv`,new ei(e,2,3,!1))}this.geometry=ci,this.material=e,this.center=new V(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&z(`Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`),ui.setFromMatrixScale(this.matrixWorld),mi.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),di.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ui.multiplyScalar(-di.z);let n=this.material.rotation,r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));let a=this.center;Si(hi.set(-.5,-.5,0),di,a,ui,r,i),Si(gi.set(.5,-.5,0),di,a,ui,r,i),Si(_i.set(.5,.5,0),di,a,ui,r,i),vi.set(0,0),yi.set(1,0),bi.set(1,1);let o=e.ray.intersectTriangle(hi,gi,_i,!1,li);if(o===null&&(Si(gi.set(-.5,.5,0),di,a,ui,r,i),yi.set(0,1),o=e.ray.intersectTriangle(hi,_i,gi,!1,li),o===null))return;let s=e.ray.origin.distanceTo(li);s<e.near||s>e.far||t.push({distance:s,point:li.clone(),uv:_r.getInterpolation(li,hi,gi,_i,vi,yi,bi,new V),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function Si(e,t,n,r,i,a){fi.subVectors(e,n).addScalar(.5).multiply(r),i===void 0?pi.copy(fi):(pi.x=a*fi.x-i*fi.y,pi.y=i*fi.x+a*fi.y),e.copy(t),e.x+=pi.x,e.y+=pi.y,e.applyMatrix4(mi)}var Ci=new H,wi=new H,Ti=new H,Ei=new H,Di=class{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ci.copy(this.origin).addScaledVector(this.direction,t),Ci.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){wi.copy(e).add(t).multiplyScalar(.5),Ti.copy(t).sub(e).normalize(),Ei.copy(this.origin).sub(wi);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Ti),o=Ei.dot(this.direction),s=-Ei.dot(Ti),c=Ei.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(wi).addScaledVector(Ti,d),f}intersectSphere(e,t){if(e.radius<0)return null;Ci.subVectors(e.center,this.origin);let n=Ci.dot(this.direction),r=Ci.dot(Ci)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Ci)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,ee,k,A,j,te;if(y>=b&&y>=x?(w=s,D=u,k=p,te=g,s>=0?(S=c,C=l,T=d,E=f,O=m,ee=h,A=_,j=v):(S=l,C=c,T=f,E=d,O=h,ee=m,A=v,j=_)):b>=x?(w=c,D=d,k=m,te=_,c>=0?(S=l,C=s,T=f,E=u,O=h,ee=p,A=v,j=g):(S=s,C=l,T=u,E=f,O=p,ee=h,A=g,j=v)):(w=l,D=f,k=h,te=v,l>=0?(S=s,C=c,T=u,E=d,O=p,ee=m,A=g,j=_):(S=c,C=s,T=d,E=u,O=m,ee=p,A=_,j=g)),w===0)return null;let ne=S/w,re=C/w,ie=1/w,ae=T-ne*D,oe=E-re*D,se=O-ne*k,ce=ee-re*k,M=A-ne*te,le=j-re*te,ue=M*ce-le*se,N=ae*le-oe*M,de=se*oe-ce*ae;if(r){if(ue<0||N<0||de<0)return null}else if((ue<0||N<0||de<0)&&(ue>0||N>0||de>0))return null;let fe=ue+N+de;if(fe===0)return null;let pe=ie*(ue*D+N*k+de*te);return(fe>0?pe<0:pe>0)?null:this.at(pe/fe,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Oi=class extends oi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new W(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},ki=new bn,Ai=new Di,ji=new Hr,Mi=new H,Ni=new H,Pi=new H,Fi=new H,Ii=new H,Li=new H,Ri=new H,zi=new H,Bi=class extends qn{constructor(e=new Xr,t=new Oi){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Li.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Ii.fromBufferAttribute(s,e),a?Li.addScaledVector(Ii,r):Li.addScaledVector(Ii.sub(t),r))}t.add(Li)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ji.copy(n.boundingSphere),ji.applyMatrix4(i),Ai.copy(e.ray).recast(e.near),ji.containsPoint(Ai.origin)===!1&&(Ai.intersectSphere(ji,Mi)===null||Ai.origin.distanceToSquared(Mi)>(e.far-e.near)**2)||(ki.copy(i).invert(),Ai.copy(e.ray).applyMatrix4(ki),(n.boundingBox===null||Ai.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Ai)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Hi(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Hi(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Hi(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Hi(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function Vi(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;zi.copy(s),zi.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(zi);return l<n.near||l>n.far?null:{distance:l,point:zi.clone(),object:e}}function Hi(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Ni),e.getVertexPosition(c,Pi),e.getVertexPosition(l,Fi);let u=Vi(e,t,n,r,Ni,Pi,Fi,Ri);if(u){let e=new H;_r.getBarycoord(Ri,Ni,Pi,Fi,e),i&&(u.uv=_r.getInterpolatedAttribute(i,s,c,l,e,new V)),a&&(u.uv1=_r.getInterpolatedAttribute(a,s,c,l,e,new V)),o&&(u.normal=_r.getInterpolatedAttribute(o,s,c,l,e,new H),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new H,materialIndex:0};_r.getNormal(Ni,Pi,Fi,t.normal),u.face=t,u.barycoord=e}return u}var Ui=class extends mn{constructor(e=null,t=1,n=1,r,i,a,o,s,c=w,l=w,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Wi=class extends Ir{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Gi=new bn,Ki=new bn,qi=[],Ji=new vr,Yi=new bn,Xi=new Bi,Zi=new Hr,Qi=class extends Bi{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Wi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,Yi)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new vr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Gi),Ji.copy(e.boundingBox).applyMatrix4(Gi),this.boundingBox.union(Ji)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Hr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Gi),Zi.copy(e.boundingSphere).applyMatrix4(Gi),this.boundingSphere.union(Zi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture===null?null:e.morphTexture.clone(),this.instanceColor=e.instanceColor===null?null:e.instanceColor.clone(),this.count=e.count,this.boundingBox=e.boundingBox===null?null:e.boundingBox.clone(),this.boundingSphere=e.boundingSphere===null?null:e.boundingSphere.clone(),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Xi.geometry=this.geometry,Xi.material=this.material,Xi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Zi.copy(this.boundingSphere),Zi.applyMatrix4(n),e.ray.intersectsSphere(Zi)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,Gi),Ki.multiplyMatrices(n,Gi),Xi.matrixWorld=Ki,Xi.raycast(e,qi);for(let e=0,n=qi.length;e<n;e++){let n=qi[e];n.instanceId=i,n.object=this,t.push(n)}qi.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Wi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ui(new Float32Array(r*this.count),r,this.count,me,ie));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},$i=new Hr,ea=new V(.5,.5),ta=new H,na=class{constructor(e=new ii,t=new ii,n=new ii,r=new ii,i=new ii,a=new ii){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=dt,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$i.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),$i.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($i)}intersectsSprite(e){return $i.center.set(0,0,0),$i.radius=.7071067811865476+ea.distanceTo(e.center),$i.applyMatrix4(e.matrixWorld),this.intersectsSphere($i)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(ta.x=r.normal.x>0?e.max.x:e.min.x,ta.y=r.normal.y>0?e.max.y:e.min.y,ta.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ta)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},ra=new bn,ia=class e{constructor(){this.coordinateSystem=dt,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let e=0;e<t.length;e++){let r=t[e];ra.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[e]===void 0&&(n[e]=new na),n[e].setFromProjectionMatrix(ra,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new na),t[r].copy(n[r]);return this._count=e._count,this}clone(){return new e().copy(this)}},aa=class extends oi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new W(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},oa=new H,sa=new H,ca=new bn,la=new Di,ua=new Hr,da=new H,fa=new H,pa=class extends qn{constructor(e=new Xr,t=new aa){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)oa.fromBufferAttribute(t,e-1),sa.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=oa.distanceTo(sa);e.setAttribute(`lineDistance`,new G(n,1))}else R(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ua.copy(n.boundingSphere),ua.applyMatrix4(r),ua.radius+=i,e.ray.intersectsSphere(ua)===!1)return;ca.copy(r).invert(),la.copy(e.ray).applyMatrix4(ca);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=ma(this,e,la,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=ma(this,e,la,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=ma(this,e,la,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=ma(this,e,la,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function ma(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(oa.fromBufferAttribute(s,i),sa.fromBufferAttribute(s,a),n.distanceSqToSegment(oa,sa,da,fa)>r)return;da.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(da);if(!(c<t.near||c>t.far))return{distance:c,point:fa.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var ha=new H,ga=new H,_a=class extends pa{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)ha.fromBufferAttribute(t,e),ga.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+ha.distanceTo(ga);e.setAttribute(`lineDistance`,new G(n,1))}else R(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},va=class extends oi{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new W(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ya=new bn,ba=new Di,xa=new Hr,Sa=new H,Ca=class extends qn{constructor(e=new Xr,t=new va){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xa.copy(n.boundingSphere),xa.applyMatrix4(r),xa.radius+=i,e.ray.intersectsSphere(xa)===!1)return;ya.copy(r).invert(),ba.copy(e.ray).applyMatrix4(ya);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);Sa.fromBufferAttribute(l,n),wa(Sa,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)Sa.fromBufferAttribute(l,a),wa(Sa,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function wa(e,t,n,r,i,a,o){let s=ba.distanceSqToPoint(e);if(s<n){let n=new H;ba.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Ta=class extends mn{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ea=class extends mn{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Da=class extends mn{constructor(e,t,n=re,r,i,a,o=w,s=w,c,l=fe,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new un(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Oa=class extends Da{constructor(e,t=re,n=301,r,i,a=w,o=w,s,c=fe){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ka=class extends mn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Aa=class e extends Xr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new G(c,3)),this.setAttribute(`normal`,new G(l,3)),this.setAttribute(`uv`,new G(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new H;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},ja=class e extends Xr{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new H,l=new V;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new G(a,3)),this.setAttribute(`normal`,new G(o,3)),this.setAttribute(`uv`,new G(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ma=class e extends Xr{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new G(u,3)),this.setAttribute(`normal`,new G(d,3)),this.setAttribute(`uv`,new G(f,2));function _(){let a=new H,_=new H,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new V,m=new H,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Na=class e extends Ma{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Pa=class e extends Xr{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new G(i,3)),this.setAttribute(`normal`,new G(i.slice(),3)),this.setAttribute(`uv`,new G(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new H,r=new H,i=new H;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new H;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new H;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new H,t=new H,n=new H,r=new H,o=new V,s=new V,c=new V;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},Fa=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){R(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new V:new H);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new H,r=[],i=[],a=[],o=new H,s=new bn;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new H)}i[0]=new H,a[0]=new H;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(B(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(B(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},Ia=class extends Fa{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new V){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},La=class extends Ia{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function Ra(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var za=new H,Ba=new H,Va=new Ra,Ha=new Ra,Ua=new Ra,Wa=class extends Fa{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new H){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(Ba.subVectors(r[0],r[1]).add(r[0]),c=Ba);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(za.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=za),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),Va.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),Ha.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),Ua.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(Va.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),Ha.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),Ua.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(Va.calc(s),Ha.calc(s),Ua.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new H().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Ga(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function Ka(e,t){let n=1-e;return n*n*t}function qa(e,t){return 2*(1-e)*e*t}function Ja(e,t){return e*e*t}function Ya(e,t,n,r){return Ka(e,t)+qa(e,n)+Ja(e,r)}function Xa(e,t){let n=1-e;return n*n*n*t}function Za(e,t){let n=1-e;return 3*n*n*e*t}function Qa(e,t){return 3*(1-e)*e*e*t}function $a(e,t){return e*e*e*t}function eo(e,t,n,r,i){return Xa(e,t)+Za(e,n)+Qa(e,r)+$a(e,i)}var to=class extends Fa{constructor(e=new V,t=new V,n=new V,r=new V){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new V){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(eo(e,r.x,i.x,a.x,o.x),eo(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},no=class extends Fa{constructor(e=new H,t=new H,n=new H,r=new H){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new H){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(eo(e,r.x,i.x,a.x,o.x),eo(e,r.y,i.y,a.y,o.y),eo(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ro=class extends Fa{constructor(e=new V,t=new V){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new V){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new V){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},io=class extends Fa{constructor(e=new H,t=new H){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new H){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new H){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ao=class extends Fa{constructor(e=new V,t=new V,n=new V){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new V){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Ya(e,r.x,i.x,a.x),Ya(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},oo=class extends Fa{constructor(e=new H,t=new H,n=new H){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new H){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Ya(e,r.x,i.x,a.x),Ya(e,r.y,i.y,a.y),Ya(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},so=class extends Fa{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new V){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(Ga(o,s.x,c.x,l.x,u.x),Ga(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new V().fromArray(n))}return this}},co=Object.freeze({__proto__:null,ArcCurve:La,CatmullRomCurve3:Wa,CubicBezierCurve:to,CubicBezierCurve3:no,EllipseCurve:Ia,LineCurve:ro,LineCurve3:io,QuadraticBezierCurve:ao,QuadraticBezierCurve3:oo,SplineCurve:so}),lo=class extends Fa{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new co[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new co[n.type]().fromJSON(n))}return this.cacheLengths=null,this}},uo=class extends lo{constructor(e){super(),this.type=`Path`,this.currentPoint=new V,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ro(this.currentPoint.clone(),new V(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new ao(this.currentPoint.clone(),new V(e,t),new V(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new to(this.currentPoint.clone(),new V(e,t),new V(n,r),new V(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new so([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new Ia(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},fo=class extends uo{constructor(e){super(e),this.uuid=Dt(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new uo().fromJSON(n))}return this}};function po(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=mo(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l;if(r&&(a=xo(e,t,a,n)),e.length>80*n){s=e[0],c=e[1];let t=s,r=c;for(let a=n;a<i;a+=n){let n=e[a],i=e[a+1];n<s&&(s=n),i<c&&(c=i),n>t&&(t=n),i>r&&(r=i)}l=Math.max(t-s,r-c),l=l===0?0:32767/l}return go(a,o,n,s,c,l,0),o}function mo(e,t,n,r,i){let a;if(i===Go(e,t,n,r)>0)for(let i=t;i<n;i+=r)a=Ho(i/r|0,e[i],e[i+1],a);else for(let i=n-r;i>=t;i-=r)a=Ho(i/r|0,e[i],e[i+1],a);return a&&Po(a,a.next)&&(Uo(a),a=a.next),a}function ho(e,t){if(!e)return e;t||(t=e);let n=e,r;do if(r=!1,!n.steiner&&(Po(n,n.next)||No(n.prev,n,n.next)===0)){if(Uo(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function go(e,t,n,r,i,a,o){if(!e)return;!o&&a&&Eo(e,r,i,a);let s=e;for(;e.prev!==e.next;){let c=e.prev,l=e.next;if(a?vo(e,r,i,a):_o(e))t.push(c.i,e.i,l.i),Uo(e),e=l.next,s=l.next;else if(e=l,e===s){o?o===1?(e=yo(ho(e),t),go(e,t,n,r,i,a,2)):o===2&&bo(e,t,n,r,i,a):go(ho(e),t,n,r,i,a,1);break}}}function _o(e){let t=e.prev,n=e,r=e.next;if(No(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=Math.min(i,a,o),d=Math.min(s,c,l),f=Math.max(i,a,o),p=Math.max(s,c,l),m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&jo(i,s,a,c,o,l,m.x,m.y)&&No(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function vo(e,t,n,r){let i=e.prev,a=e,o=e.next;if(No(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=Math.min(s,c,l),m=Math.min(u,d,f),h=Math.max(s,c,l),g=Math.max(u,d,f),_=Oo(p,m,t,n,r),v=Oo(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&jo(s,u,c,d,l,f,y.x,y.y)&&No(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&jo(s,u,c,d,l,f,b.x,b.y)&&No(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&jo(s,u,c,d,l,f,y.x,y.y)&&No(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&jo(s,u,c,d,l,f,b.x,b.y)&&No(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function yo(e,t){let n=e;do{let r=n.prev,i=n.next.next;!Po(r,i)&&Fo(r,n,n.next,i)&&zo(r,i)&&zo(i,r)&&(t.push(r.i,n.i,i.i),Uo(n),Uo(n.next),n=e=i),n=n.next}while(n!==e);return ho(n)}function bo(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&Mo(o,e)){let s=Vo(o,e);o=ho(o,o.next),s=ho(s,s.next),go(o,t,n,r,i,a,0),go(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function xo(e,t,n,r){let i=[];for(let n=0,a=t.length;n<a;n++){let o=mo(e,t[n]*r,n<a-1?t[n+1]*r:e.length,r,!1);o===o.next&&(o.steiner=!0),i.push(ko(o))}i.sort(So);for(let e=0;e<i.length;e++)n=Co(i[e],n);return n}function So(e,t){let n=e.x-t.x;return n===0&&(n=e.y-t.y,n===0&&(n=(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x))),n}function Co(e,t){let n=wo(e,t);if(!n)return t;let r=Vo(n,e);return ho(r,r.next),ho(n,n.next)}function wo(e,t){let n=t,r=e.x,i=e.y,a=-1/0,o;if(Po(e,n))return n;do{if(Po(e,n.next))return n.next;if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){let e=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=r&&e>a&&(a=e,o=n.x<n.next.x?n:n.next,e===r))return o}n=n.next}while(n!==t);if(!o)return null;let s=o,c=o.x,l=o.y,u=1/0;n=o;do{if(r>=n.x&&n.x>=c&&r!==n.x&&Ao(i<l?r:a,i,c,l,i<l?a:r,i,n.x,n.y)){let t=Math.abs(i-n.y)/(r-n.x);zo(n,e)&&(t<u||t===u&&(n.x>o.x||n.x===o.x&&To(o,n)))&&(o=n,u=t)}n=n.next}while(n!==s);return o}function To(e,t){return No(e.prev,e,t.prev)<0&&No(t.next,e,e.next)<0}function Eo(e,t,n,r){let i=e;do i.z===0&&(i.z=Oo(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,Do(i)}function Do(e){let t,n=1;do{let r=e,i;e=null;let a=null;for(t=0;r;){t++;let o=r,s=0;for(let e=0;e<n&&(s++,o=o.nextZ,o);e++);let c=n;for(;s>0||c>0&&o;)s!==0&&(c===0||!o||r.z<=o.z)?(i=r,r=r.nextZ,s--):(i=o,o=o.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;r=o}a.nextZ=null,n*=2}while(t>1);return e}function Oo(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function ko(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function Ao(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function jo(e,t,n,r,i,a,o,s){return(e!==o||t!==s)&&Ao(e,t,n,r,i,a,o,s)}function Mo(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!Ro(e,t)&&(zo(e,t)&&zo(t,e)&&Bo(e,t)&&(No(e.prev,e,t.prev)||No(e,t.prev,t))||Po(e,t)&&No(e.prev,e,e.next)>0&&No(t.prev,t,t.next)>0)}function No(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function Po(e,t){return e.x===t.x&&e.y===t.y}function Fo(e,t,n,r){let i=Lo(No(e,t,n)),a=Lo(No(e,t,r)),o=Lo(No(n,r,e)),s=Lo(No(n,r,t));return!!(i!==a&&o!==s||i===0&&Io(e,n,t)||a===0&&Io(e,r,t)||o===0&&Io(n,e,r)||s===0&&Io(n,t,r))}function Io(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function Lo(e){return e>0?1:e<0?-1:0}function Ro(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&Fo(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function zo(e,t){return No(e.prev,e,e.next)<0?No(e,t,e.next)>=0&&No(e,e.prev,t)>=0:No(e,t,e.prev)<0||No(e,e.next,t)<0}function Bo(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function Vo(e,t){let n=Wo(e.i,e.x,e.y),r=Wo(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function Ho(e,t,n,r){let i=Wo(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function Uo(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Wo(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Go(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var Ko=class{static triangulate(e,t,n=2){return po(e,t,n)}},qo=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];Jo(e),Yo(n,e);let a=e.length;t.forEach(Jo);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,Yo(n,t[e]);let o=Ko.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function Jo(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function Yo(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var Xo=class e extends Xr{constructor(e=new fo([new V(.5,.5),new V(-.5,.5),new V(-.5,-.5),new V(.5,-.5)]),t={}){super(),this.type=`ExtrudeGeometry`,this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],i=[];for(let t=0,n=e.length;t<n;t++){let n=e[t];a(n)}this.setAttribute(`position`,new G(r,3)),this.setAttribute(`uv`,new G(i,2)),this.computeVertexNormals();function a(e){let a=[],o=t.curveSegments===void 0?12:t.curveSegments,s=t.steps===void 0?1:t.steps,c=t.depth===void 0?1:t.depth,l=t.bevelEnabled===void 0||t.bevelEnabled,u=t.bevelThickness===void 0?.2:t.bevelThickness,d=t.bevelSize===void 0?u-.1:t.bevelSize,f=t.bevelOffset===void 0?0:t.bevelOffset,p=t.bevelSegments===void 0?3:t.bevelSegments,m=t.extrudePath,h=t.UVGenerator===void 0?Zo:t.UVGenerator,g,_=!1,v,y,b,x;if(m){g=m.getSpacedPoints(s),_=!0,l=!1;let e=m.isCatmullRomCurve3?m.closed:!1;v=m.computeFrenetFrames(s,e),y=new H,b=new H,x=new H}l||(p=0,u=0,d=0,f=0);let S=e.extractPoints(o),C=S.shape,w=S.holes;if(!qo.isClockWise(C)){C=C.reverse();for(let e=0,t=w.length;e<t;e++){let t=w[e];qo.isClockWise(t)&&(w[e]=t.reverse())}}function T(e){let t=e[0];for(let n=1;n<=e.length;n++){let r=n%e.length,i=e[r],a=i.x-t.x,o=i.y-t.y,s=a*a+o*o,c=Math.max(Math.abs(i.x),Math.abs(i.y),Math.abs(t.x),Math.abs(t.y));s<=10000000000000001e-36*c*c?(e.splice(r,1),n--):t=i}}T(C),w.forEach(T);let E=w.length,D=C;for(let e=0;e<E;e++){let t=w[e];C=C.concat(t)}function O(e,t,n){return t||z(`ExtrudeGeometry: vec does not exist`),e.clone().addScaledVector(t,n)}let ee=C.length;function k(e,t,n){let r,i,a,o=e.x-t.x,s=e.y-t.y,c=n.x-e.x,l=n.y-e.y,u=o*o+s*s,d=o*l-s*c;if(Math.abs(d)>2**-52){let d=Math.sqrt(u),f=Math.sqrt(c*c+l*l),p=t.x-s/d,m=t.y+o/d,h=n.x-l/f,g=n.y+c/f,_=((h-p)*l-(g-m)*c)/(o*l-s*c);r=p+o*_-e.x,i=m+s*_-e.y;let v=r*r+i*i;if(v<=2)return new V(r,i);a=Math.sqrt(v/2)}else{let e=!1;o>2**-52?c>2**-52&&(e=!0):o<-(2**-52)?c<-(2**-52)&&(e=!0):Math.sign(s)===Math.sign(l)&&(e=!0),e?(r=-s,i=o,a=Math.sqrt(u)):(r=o,i=s,a=Math.sqrt(u/2))}return new V(r/a,i/a)}let A=[];for(let e=0,t=D.length,n=t-1,r=e+1;e<t;e++,n++,r++)n===t&&(n=0),r===t&&(r=0),A[e]=k(D[e],D[n],D[r]);let j=[],te,ne=A.concat();for(let e=0,t=E;e<t;e++){let t=w[e];te=[];for(let e=0,n=t.length,r=n-1,i=e+1;e<n;e++,r++,i++)r===n&&(r=0),i===n&&(i=0),te[e]=k(t[e],t[r],t[i]);j.push(te),ne=ne.concat(te)}let re;if(p===0)re=qo.triangulateShape(D,w);else{let e=[],t=[];for(let n=0;n<p;n++){let r=n/p,i=u*Math.cos(r*Math.PI/2),a=d*Math.sin(r*Math.PI/2)+f;for(let t=0,n=D.length;t<n;t++){let n=O(D[t],A[t],a);M(n.x,n.y,-i),r===0&&e.push(n)}for(let e=0,n=E;e<n;e++){let n=w[e];te=j[e];let o=[];for(let e=0,t=n.length;e<t;e++){let t=O(n[e],te[e],a);M(t.x,t.y,-i),r===0&&o.push(t)}r===0&&t.push(o)}}re=qo.triangulateShape(e,t)}let ie=re.length,ae=d+f;for(let e=0;e<ee;e++){let t=l?O(C[e],ne[e],ae):C[e];_?(b.copy(v.normals[0]).multiplyScalar(t.x),y.copy(v.binormals[0]).multiplyScalar(t.y),x.copy(g[0]).add(b).add(y),M(x.x,x.y,x.z)):M(t.x,t.y,0)}for(let e=1;e<=s;e++)for(let t=0;t<ee;t++){let n=l?O(C[t],ne[t],ae):C[t];_?(b.copy(v.normals[e]).multiplyScalar(n.x),y.copy(v.binormals[e]).multiplyScalar(n.y),x.copy(g[e]).add(b).add(y),M(x.x,x.y,x.z)):M(n.x,n.y,c/s*e)}for(let e=p-1;e>=0;e--){let t=e/p,n=u*Math.cos(t*Math.PI/2),r=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=D.length;e<t;e++){let t=O(D[e],A[e],r);M(t.x,t.y,c+n)}for(let e=0,t=w.length;e<t;e++){let t=w[e];te=j[e];for(let e=0,i=t.length;e<i;e++){let i=O(t[e],te[e],r);_?M(i.x,i.y+g[s-1].y,g[s-1].x+n):M(i.x,i.y,c+n)}}}oe(),se();function oe(){let e=r.length/3;if(l){let e=0,t=ee*e;for(let e=0;e<ie;e++){let n=re[e];le(n[2]+t,n[1]+t,n[0]+t)}e=s+p*2,t=ee*e;for(let e=0;e<ie;e++){let n=re[e];le(n[0]+t,n[1]+t,n[2]+t)}}else{for(let e=0;e<ie;e++){let t=re[e];le(t[2],t[1],t[0])}for(let e=0;e<ie;e++){let t=re[e];le(t[0]+ee*s,t[1]+ee*s,t[2]+ee*s)}}n.addGroup(e,r.length/3-e,0)}function se(){let e=r.length/3,t=0;ce(D,t),t+=D.length;for(let e=0,n=w.length;e<n;e++){let n=w[e];ce(n,t),t+=n.length}n.addGroup(e,r.length/3-e,1)}function ce(e,t){let n=e.length;for(;--n>=0;){let r=n,i=n-1;i<0&&(i=e.length-1);for(let e=0,n=s+p*2;e<n;e++){let n=ee*e,a=ee*(e+1);ue(t+r+n,t+i+n,t+i+a,t+r+a)}}}function M(e,t,n){a.push(e),a.push(t),a.push(n)}function le(e,t,i){N(e),N(t),N(i);let a=r.length/3,o=h.generateTopUV(n,r,a-3,a-2,a-1);de(o[0]),de(o[1]),de(o[2])}function ue(e,t,i,a){N(e),N(t),N(a),N(t),N(i),N(a);let o=r.length/3,s=h.generateSideWallUV(n,r,o-6,o-3,o-2,o-1);de(s[0]),de(s[1]),de(s[3]),de(s[1]),de(s[2]),de(s[3])}function N(e){r.push(a[e*3+0]),r.push(a[e*3+1]),r.push(a[e*3+2])}function de(e){i.push(e.x),i.push(e.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Qo(t,n,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new co[i.type]().fromJSON(i)),new e(r,t.options)}},Zo={generateTopUV:function(e,t,n,r,i){let a=t[n*3],o=t[n*3+1],s=t[r*3],c=t[r*3+1],l=t[i*3],u=t[i*3+1];return[new V(a,o),new V(s,c),new V(l,u)]},generateSideWallUV:function(e,t,n,r,i,a){let o=t[n*3],s=t[n*3+1],c=t[n*3+2],l=t[r*3],u=t[r*3+1],d=t[r*3+2],f=t[i*3],p=t[i*3+1],m=t[i*3+2],h=t[a*3],g=t[a*3+1],_=t[a*3+2];return Math.abs(s-u)<Math.abs(o-l)?[new V(o,1-c),new V(l,1-d),new V(f,1-m),new V(h,1-_)]:[new V(s,1-c),new V(u,1-d),new V(p,1-m),new V(g,1-_)]}};function Qo(e,t,n){if(n.shapes=[],Array.isArray(e))for(let t=0,r=e.length;t<r;t++){let r=e[t];n.shapes.push(r.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}var $o=class e extends Pa{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},es=class e extends Xr{constructor(e=[new V(0,-.5),new V(.5,0),new V(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type=`LatheGeometry`,this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=B(r,0,Math.PI*2);let i=[],a=[],o=[],s=[],c=[],l=1/t,u=new H,d=new V,f=new H,p=new H,m=new H,h=0,g=0;for(let t=0;t<=e.length-1;t++)switch(t){case 0:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,m.copy(f),f.normalize(),s.push(f.x,f.y,f.z);break;case e.length-1:m.normalize(),s.push(m.x,m.y,m.z);break;default:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,p.copy(f),f.x+=m.x,f.y+=m.y,f.z+=m.z,f.normalize(),s.push(f.x,f.y,f.z),m.copy(p)}for(let i=0;i<=t;i++){let f=n+i*l*r,p=Math.sin(f),m=Math.cos(f);for(let n=0;n<=e.length-1;n++){u.x=e[n].x*p,u.y=e[n].y,u.z=e[n].x*m,a.push(u.x,u.y,u.z),d.x=i/t,d.y=n/(e.length-1),o.push(d.x,d.y);let r=s[3*n+0]*p,l=s[3*n+1],f=s[3*n+0]*m;c.push(r,l,f)}}for(let n=0;n<t;n++)for(let t=0;t<e.length-1;t++){let r=t+n*e.length,a=r,o=r+e.length,s=r+e.length+1,c=r+1;i.push(a,o,c),i.push(s,c,o)}this.setIndex(i),this.setAttribute(`position`,new G(a,3)),this.setAttribute(`uv`,new G(o,2)),this.setAttribute(`normal`,new G(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.points,t.segments,t.phiStart,t.phiLength)}},ts=class e extends Pa{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type=`OctahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},ns=class e extends Xr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new G(p,3)),this.setAttribute(`normal`,new G(m,3)),this.setAttribute(`uv`,new G(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},rs=class e extends Xr{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new H,p=new V;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new G(s,3)),this.setAttribute(`normal`,new G(c,3)),this.setAttribute(`uv`,new G(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},is=class e extends Xr{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new H,d=new H,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new G(p,3)),this.setAttribute(`normal`,new G(m,3)),this.setAttribute(`uv`,new G(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},as=class e extends Xr{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new H,f=new H,p=new H;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new G(c,3)),this.setAttribute(`normal`,new G(l,3)),this.setAttribute(`uv`,new G(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}},os=class e extends Xr{constructor(e=new oo(new H(-1,-1,0),new H(-1,1,0),new H(1,1,0)),t=64,n=1,r=8,i=!1){super(),this.type=`TubeGeometry`,this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:i};let a=e.computeFrenetFrames(t,i);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new H,s=new H,c=new V,l=new H,u=[],d=[],f=[],p=[];m(),this.setIndex(p),this.setAttribute(`position`,new G(u,3)),this.setAttribute(`normal`,new G(d,3)),this.setAttribute(`uv`,new G(f,2));function m(){for(let e=0;e<t;e++)h(e);h(i===!1?t:0),_(),g()}function h(i){l=e.getPointAt(i/t,l);let c=a.normals[i],f=a.binormals[i];for(let e=0;e<=r;e++){let t=e/r*Math.PI*2,i=Math.sin(t),a=-Math.cos(t);s.x=a*c.x+i*f.x,s.y=a*c.y+i*f.y,s.z=a*c.z+i*f.z,s.normalize(),d.push(s.x,s.y,s.z),o.x=l.x+n*s.x,o.y=l.y+n*s.y,o.z=l.z+n*s.z,u.push(o.x,o.y,o.z)}}function g(){for(let e=1;e<=t;e++)for(let t=1;t<=r;t++){let n=(r+1)*(e-1)+(t-1),i=(r+1)*e+(t-1),a=(r+1)*e+t,o=(r+1)*(e-1)+t;p.push(n,i,o),p.push(i,a,o)}}function _(){for(let e=0;e<=t;e++)for(let n=0;n<=r;n++)c.x=e/t,c.y=n/r,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(t){return new e(new co[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function ss(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(ls(i))i.isRenderTargetTexture?(R(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(ls(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function cs(e){let t={};for(let n=0;n<e.length;n++){let r=ss(e[n]);for(let e in r)t[e]=r[e]}return t}function ls(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function us(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function ds(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:rn.workingColorSpace}var fs={clone:ss,merge:cs},ps=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ms=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,hs=class extends oi{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ps,this.fragmentShader=ms,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ss(e.uniforms),this.uniformsGroups=us(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new W().setHex(r.value);break;case`v2`:this.uniforms[n].value=new V().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new H().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new hn().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new U().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new bn().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},gs=class extends hs{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},_s=class extends oi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new W(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new W(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new V(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},vs=class extends oi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type=`MeshLambertMaterial`,this.color=new W(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new W(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new V(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ys=class extends oi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=it,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},bs=class extends oi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function xs(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function Ss(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Cs=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},ws=class extends Cs{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:tt,endingEnd:tt}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case nt:i=e,o=2*t-n;break;case rt:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case nt:a=e,s=2*n-t;break;case rt:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Ts=class extends Cs{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Es=class extends Cs{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Ds=class extends Cs{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=As(n,t,g,y,r);i[p]=Os(x,o,_,b,m)}return i}};function Os(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function ks(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function As(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=Os(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=ks(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var js=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=xs(t,this.TimeBufferType),this.values=xs(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:xs(e.times,Array),values:xs(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),Ss(e.settings)&&(n.settings={inTangents:xs(e.settings.inTangents,Array),outTangents:xs(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Es(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ts(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ws(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ds(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ze:t=this.InterpolantFactoryMethodDiscrete;break;case Qe:t=this.InterpolantFactoryMethodLinear;break;case $e:t=this.InterpolantFactoryMethodSmooth;break;case et:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return R(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ze;case this.InterpolantFactoryMethodLinear:return Qe;case this.InterpolantFactoryMethodSmooth:return $e;case this.InterpolantFactoryMethodBezier:return et}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e;Ss(this.settings)&&(Ms(this.settings.inTangents,e),Ms(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Ss(this.settings)&&(Ns(this.settings.inTangents,e),Ns(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(z(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(z(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){z(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){z(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&pt(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){z(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===$e,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Ss(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Ms(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]+=t}function Ns(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}js.prototype.ValueTypeName=``,js.prototype.TimeBufferType=Float32Array,js.prototype.ValueBufferType=Float32Array,js.prototype.DefaultInterpolation=Qe;var Ps=class extends js{constructor(e,t,n){super(e,t,n)}};Ps.prototype.ValueTypeName=`bool`,Ps.prototype.ValueBufferType=Array,Ps.prototype.DefaultInterpolation=Ze,Ps.prototype.InterpolantFactoryMethodLinear=void 0,Ps.prototype.InterpolantFactoryMethodSmooth=void 0;var Fs=class extends js{constructor(e,t,n,r){super(e,t,n,r)}};Fs.prototype.ValueTypeName=`color`;var Is=class extends js{constructor(e,t,n,r){super(e,t,n,r)}};Is.prototype.ValueTypeName=`number`;var Ls=class extends Cs{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Xt.slerpFlat(i,0,a,c-o,a,c,s);return i}},Rs=class extends js{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Ls(this.times,this.values,this.getValueSize(),e)}};Rs.prototype.ValueTypeName=`quaternion`,Rs.prototype.InterpolantFactoryMethodSmooth=void 0;var zs=class extends js{constructor(e,t,n){super(e,t,n)}};zs.prototype.ValueTypeName=`string`,zs.prototype.ValueBufferType=Array,zs.prototype.DefaultInterpolation=Ze,zs.prototype.InterpolantFactoryMethodLinear=void 0,zs.prototype.InterpolantFactoryMethodSmooth=void 0;var Bs=class extends js{constructor(e,t,n,r){super(e,t,n,r)}};Bs.prototype.ValueTypeName=`vector`;var Vs=class extends qn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new W(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Hs=class extends Vs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(qn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new W(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Us=new bn,Ws=new H,Gs=new H,Ks=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new V(512,512),this.mapType=k,this.map=null,this.mapPass=null,this.matrix=new bn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new na,this._frameExtents=new V(1,1),this._viewportCount=1,this._viewports=[new hn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Ws.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ws),Gs.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Gs),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){Us.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Us,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Us)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},qs=new H,Js=new Xt,Ys=new H,Xs=class extends qn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new bn,this.projectionMatrix=new bn,this.projectionMatrixInverse=new bn,this.coordinateSystem=dt,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(qs,Js,Ys),Ys.x===1&&Ys.y===1&&Ys.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qs,Js,Ys.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(qs,Js,Ys),Ys.x===1&&Ys.y===1&&Ys.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qs,Js,Ys.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Zs=new H,Qs=new V,$s=new V,ec=class extends Xs{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Et*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Tt*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Et*2*Math.atan(Math.tan(Tt*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Zs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Zs.x,Zs.y).multiplyScalar(-e/Zs.z),Zs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zs.x,Zs.y).multiplyScalar(-e/Zs.z)}getViewSize(e,t){return this.getViewBounds(e,Qs,$s),t.subVectors($s,Qs)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Tt*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},tc=class extends Xs{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},nc=class extends Ks{constructor(){super(new tc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},rc=class extends Vs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(qn.DEFAULT_UP),this.updateMatrix(),this.target=new qn,this.shadow=new nc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},ic=-90,ac=1,oc=class extends qn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new ec(ic,ac,e,t);r.layers=this.layers,this.add(r);let i=new ec(ic,ac,e,t);i.layers=this.layers,this.add(i);let a=new ec(ic,ac,e,t);a.layers=this.layers,this.add(a);let o=new ec(ic,ac,e,t);o.layers=this.layers,this.add(o);let s=new ec(ic,ac,e,t);s.layers=this.layers,this.add(s);let c=new ec(ic,ac,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},sc=class extends ec{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},cc=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=lc.bind(this),e.addEventListener(`visibilitychange`,this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener(`visibilitychange`,this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e===void 0?performance.now():e)-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function lc(){this._document.hidden===!1&&this.reset()}var uc=`\\[\\]\\.:\\/`,dc=RegExp(`[\\[\\]\\.:\\/]`,`g`),fc=`[^\\[\\]\\.:\\/]`,pc=`[^`+uc.replace(`\\.`,``)+`]`,mc=`((?:WC+[\\/:])*)`.replace(`WC`,fc),hc=`(WCOD+)?`.replace(`WCOD`,pc),gc=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,fc),_c=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,fc),vc=RegExp(`^`+mc+hc+gc+_c+`$`),yc=[`material`,`materials`,`bones`,`map`],bc=class{constructor(e,t,n){let r=n||xc.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},xc=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(dc,``)}static parseTrackName(e){let t=vc.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);yc.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){R(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){z(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){z(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){z(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){z(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){z(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){z(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){z(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;z(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){z(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){z(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};xc.Composite=bc,xc.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},xc.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},xc.prototype.GetterByBindingType=[xc.prototype._getValue_direct,xc.prototype._getValue_array,xc.prototype._getValue_arrayElement,xc.prototype._getValue_toArray],xc.prototype.SetterByBindingTypeAndVersioning=[[xc.prototype._setValue_direct,xc.prototype._setValue_direct_setNeedsUpdate,xc.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xc.prototype._setValue_array,xc.prototype._setValue_array_setNeedsUpdate,xc.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xc.prototype._setValue_arrayElement,xc.prototype._setValue_arrayElement_setNeedsUpdate,xc.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xc.prototype._setValue_fromArray,xc.prototype._setValue_fromArray_setNeedsUpdate,xc.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Sc=new bn,Cc=class{constructor(e,t,n=0,r=1/0){this.ray=new Di(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new jn,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):z(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return Sc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Sc),this}intersectObject(e,t=!0,n=[]){return Tc(e,this,n,t),n.sort(wc),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)Tc(e[r],this,n,t);return n.sort(wc),n}};function wc(e,t){return e.distance-t.distance}function Tc(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)Tc(r[e],t,n,!0)}}var Ec=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){let e=1e-6;return this.phi=B(this.phi,e,Math.PI-e),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(B(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};h=class{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}},h.prototype.isMatrix2=!0;var Dc=class extends St{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Oc(e,t,n,r){let i=kc(r);switch(n){case ue:return e*t;case me:return e*t/i.components*i.byteLength;case he:return e*t/i.components*i.byteLength;case ge:return e*t*2/i.components*i.byteLength;case _e:return e*t*2/i.components*i.byteLength;case N:return e*t*3/i.components*i.byteLength;case de:return e*t*4/i.components*i.byteLength;case ve:return e*t*4/i.components*i.byteLength;case ye:case be:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case xe:case Se:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case we:case Ee:return Math.max(e,16)*Math.max(t,8)/4;case Ce:case Te:return Math.max(e,8)*Math.max(t,8)/2;case De:case Oe:case Ae:case je:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ke:case Me:case Ne:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Pe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Fe:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case P:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Ie:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Le:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Re:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case F:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case ze:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case I:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case L:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Be:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Ve:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case He:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Ue:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case We:case Ge:case Ke:return Math.ceil(e/4)*Math.ceil(t/4)*16;case qe:case Je:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Ye:case Xe:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function kc(e){switch(e){case k:case A:return{byteLength:1,components:1};case te:case j:case ae:return{byteLength:2,components:1};case oe:case se:return{byteLength:2,components:4};case re:case ne:case ie:return{byteLength:4,components:1};case M:case le:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`187`}})),typeof window<`u`&&(window.__THREE__?R(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`187`);function Ac(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function jc(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Mc={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
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
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,meshmatcap_frag:`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,meshphysical_frag:`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},K={common:{diffuse:{value:new W(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new U},alphaMap:{value:null},alphaMapTransform:{value:new U},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new U}},envmap:{envMap:{value:null},envMapRotation:{value:new U},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new U}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new U}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new U},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new U},normalScale:{value:new V(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new U},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new U}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new U}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new U}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new W(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new W(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new U},alphaTest:{value:0},uvTransform:{value:new U}},sprite:{diffuse:{value:new W(16777215)},opacity:{value:1},center:{value:new V(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new U},alphaMap:{value:null},alphaMapTransform:{value:new U},alphaTest:{value:0}}},Nc={basic:{uniforms:cs([K.common,K.specularmap,K.envmap,K.aomap,K.lightmap,K.fog]),vertexShader:Mc.meshbasic_vert,fragmentShader:Mc.meshbasic_frag},lambert:{uniforms:cs([K.common,K.specularmap,K.envmap,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.fog,K.lights,{emissive:{value:new W(0)},envMapIntensity:{value:1}}]),vertexShader:Mc.meshlambert_vert,fragmentShader:Mc.meshlambert_frag},phong:{uniforms:cs([K.common,K.specularmap,K.envmap,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.fog,K.lights,{emissive:{value:new W(0)},specular:{value:new W(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Mc.meshphong_vert,fragmentShader:Mc.meshphong_frag},standard:{uniforms:cs([K.common,K.envmap,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.roughnessmap,K.metalnessmap,K.fog,K.lights,{emissive:{value:new W(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Mc.meshphysical_vert,fragmentShader:Mc.meshphysical_frag},toon:{uniforms:cs([K.common,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.gradientmap,K.fog,K.lights,{emissive:{value:new W(0)}}]),vertexShader:Mc.meshtoon_vert,fragmentShader:Mc.meshtoon_frag},matcap:{uniforms:cs([K.common,K.bumpmap,K.normalmap,K.displacementmap,K.fog,{matcap:{value:null}}]),vertexShader:Mc.meshmatcap_vert,fragmentShader:Mc.meshmatcap_frag},points:{uniforms:cs([K.points,K.fog]),vertexShader:Mc.points_vert,fragmentShader:Mc.points_frag},dashed:{uniforms:cs([K.common,K.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Mc.linedashed_vert,fragmentShader:Mc.linedashed_frag},depth:{uniforms:cs([K.common,K.displacementmap]),vertexShader:Mc.depth_vert,fragmentShader:Mc.depth_frag},normal:{uniforms:cs([K.common,K.bumpmap,K.normalmap,K.displacementmap,{opacity:{value:1}}]),vertexShader:Mc.meshnormal_vert,fragmentShader:Mc.meshnormal_frag},sprite:{uniforms:cs([K.sprite,K.fog]),vertexShader:Mc.sprite_vert,fragmentShader:Mc.sprite_frag},background:{uniforms:{uvTransform:{value:new U},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Mc.background_vert,fragmentShader:Mc.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new U}},vertexShader:Mc.backgroundCube_vert,fragmentShader:Mc.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Mc.cube_vert,fragmentShader:Mc.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Mc.equirect_vert,fragmentShader:Mc.equirect_frag},distance:{uniforms:cs([K.common,K.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Mc.distance_vert,fragmentShader:Mc.distance_frag},shadow:{uniforms:cs([K.lights,K.fog,{color:{value:new W(0)},opacity:{value:1}}]),vertexShader:Mc.shadow_vert,fragmentShader:Mc.shadow_frag}};Nc.physical={uniforms:cs([Nc.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new U},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new U},clearcoatNormalScale:{value:new V(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new U},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new U},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new U},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new U},sheen:{value:0},sheenColor:{value:new W(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new U},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new U},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new U},transmissionSamplerSize:{value:new V},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new U},attenuationDistance:{value:0},attenuationColor:{value:new W(0)},specularColor:{value:new W(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new U},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new U},anisotropyVector:{value:new V},anisotropyMap:{value:null},anisotropyMapTransform:{value:new U}}]),vertexShader:Mc.meshphysical_vert,fragmentShader:Mc.meshphysical_frag};var Pc={r:0,b:0,g:0},Fc=new bn,Ic=new U;Ic.set(-1,0,0,0,1,0,0,0,1);function Lc(e,t,n,r,i,a){let o=new W(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&i.isCubeTexture?(l===void 0&&(l=new Bi(new Aa(1,1,1),new hs({name:`BackgroundCubeMaterial`,uniforms:ss(Nc.backgroundCube.uniforms),vertexShader:Nc.backgroundCube.vertexShader,fragmentShader:Nc.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Fc.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Ic),l.material.toneMapped=rn.getTransfer(i.colorSpace)!==ct,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new Bi(new ns(2,2),new hs({name:`BackgroundMaterial`,uniforms:ss(Nc.background.uniforms),vertexShader:Nc.background.vertexShader,fragmentShader:Nc.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=rn.getTransfer(i.colorSpace)!==ct,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Pc,ds(e)),n.buffers.color.setClear(Pc.r,Pc.g,Pc.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Rc(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.isInterleavedBuffer===!0?t.stride:t.itemSize,p=s.offset;if(t.isInstancedInterleavedBuffer||t.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function zc(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function Bc(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(R(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`),f=n.logarithmicDepthBuffer===!0&&d===!1;n.reversedDepthBuffer===!0&&d===!1&&R(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`),n.logarithmicDepthBuffer===!0&&d===!0&&R(`WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Vc(e){let t=this,n=null,r=0,i=!1,a=!1,o=new ii,s=new U,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Hc=class extends _n{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Ta(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Aa(5,5,5),i=new hs({name:`CubemapFromEquirect`,uniforms:ss(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new Bi(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=D),new oc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},Uc=256,Wc=3,Gc=20,Kc=256,qc=16,Jc=3,Yc=new H,Xc=new W,Zc=class e{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new oc(1,10,null),this._boxMesh=new Bi(new Aa(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Yc}=i,s=this._renderer;this._setSize(a);let c=this._allocateTarget(),l=this._getSourceTarget(!0);t>0&&(l.texture.mipmapsAutoUpdate=!1);let u=s.autoClear,d=s.autoClearColor,f=s.autoClearDepth,p=s.autoClearStencil,m=e.background;s.autoClear=!0,s.autoClearColor=!0,s.autoClearDepth=!0,s.autoClearStencil=!0,m===null&&(e.background=s.getClearColor(Xc));let h=new oc(n,r,l);return h.position.copy(o),h.update(s,e),s.autoClear=u,s.autoClearColor=d,s.autoClearDepth=f,s.autoClearStencil=p,e.background=m,t>0&&(l.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=il(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Uc,Wt(e))}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?Uc:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Qc(e,!1,!1),n=Math.log2(e)-Wc;for(let r=0;r<=n;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name=`PMREM`,t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Qc(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let r=this._boxMesh,i=this._cubeCamera;r.material=n,i.renderTarget=e,i.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),i.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===301||e.mapping===302?(this._cubemapMaterial===null&&(this._cubemapMaterial=il()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=rl()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=el(),this._integrationMaterial=tl());let n=this._cubeSize,r=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(n/qc);for(let o=0;o<=r;o++){let s=e.lodToRoughness(o,r);if(o>r-Jc)a.roughness.value=s,this._renderCube(t,o,this._integrationMaterial);else{let e=s>0?Math.log2(n)+.5*Math.log2(6/(Kc*s**4))+.5:0;i.roughness.value=s,i.lodBias.value=e,this._renderCube(t,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=nl());let n=this._blurMaterial,r=n.uniforms,i=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=i.texture,this._renderCube(e,0,n),r.envMap.value=e.texture,this._renderCube(i,0,n)}};function Qc(e,t,n){return new Hc(e,{minFilter:ee,generateMipmaps:t,type:ae,colorSpace:ot,depthBuffer:n})}function $c(e,t,n){return new hs({name:e,uniforms:t,vertexShader:Mc.cube_vert,fragmentShader:n,side:1,blending:0,depthTest:!1,depthWrite:!1})}function el(){return $c(`PMREMGGXConvolution`,{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Kc}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function tl(){return $c(`PMREMGGXIntegration`,{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:qc}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function nl(){return $c(`PMREMSphericalGaussianBlur`,{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Gc}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function rl(){return $c(`PMREMEquirectangularToCubemap`,{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function il(){return $c(`PMREMCubemapToCubemap`,{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function al(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new Hc(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture&&t.isPMREMTexture!==!0){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Zc(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Zc(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function ol(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&yt(`WebGLRenderer: `+e+` extension not supported.`),t}}}function sl(e,t,n,r){let i={},a=new WeakMap,o=new FinalizationRegistry(e=>delete i[e]);function s(e){c(e.target)}function c(e){e.index!==null&&t.remove(e.index);for(let n in e.attributes)t.remove(e.attributes[n]);e.removeEventListener(`dispose`,s),delete i[e.id],o.unregister(e);let c=a.get(e);c&&(t.remove(c),a.delete(e)),r.releaseStatesOfGeometry(e),e.isInstancedBufferGeometry===!0&&delete e._maxInstanceCount,n.memory.geometries--}function l(e,t){return i[t.id]===void 0&&(t.addEventListener(`dispose`,s),i[t.id]=new WeakRef(t),o.register(t,t.id,t),n.memory.geometries++),t}function u(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function d(e){let n=e.index,r=e.attributes.position,i=0;if(r===void 0)return;let o=n===null?r.array.length/3-1:n.array.length,s=new(r.count>=65535?Rr:Lr)(Math.ceil(o/3)*6,1),c=s.array;if(n!==null){let e=n.array;i=n.version;for(let t=0,n=0;t<o;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];c[n++]=r,c[n++]=i,c[n++]=i,c[n++]=a,c[n++]=a,c[n++]=r}}else{i=r.version;for(let e=0,t=0;e<o;e+=3){let n=e+0,r=e+1,i=e+2;c[t++]=n,c[t++]=r,c[t++]=r,c[t++]=i,c[t++]=i,c[t++]=n}}s.version=i;let l=a.get(e);l&&t.remove(l),a.set(e,s)}function f(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&d(e)}else d(e);return a.get(e)}function p(){for(let e in i){let t=i[e].deref();t!==void 0&&c(t)}}return{get:l,update:u,getWireframeAttribute:f,dispose:p}}function cl(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function ll(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:z(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function ul(e,t,n){let r=new WeakMap,i=new hn;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new vn(h,p,m,u);g.type=ie,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new V(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function dl(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var fl={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function pl(e,t,n,r,i,a){let o=new _n(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=null,u=new Xr;u.setAttribute(`position`,new G([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute(`uv`,new G([0,2,0,0,2,0],2));let d=new gs({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new Bi(u,d),p=new tc(-1,1,1,-1,0,1),m=null,h=null,g=!1,_,v=null,y=[],b=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<y.length;n++){let r=y[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){y=e,b=y.length>0&&y[0].isRenderPass===!0;let t=o.width,n=o.height;y.length>0&&s===null&&(s=new _n(t,n,{type:ae,depthBuffer:!1,stencilBuffer:!1}),c=new _n(t,n,{type:ae,depthBuffer:!1,stencilBuffer:!1}));let r=i===!0&&y.some(e=>e.needsDepthTexture===!0);r!==(o.depthTexture!==null)&&(r===!0&&l===null&&(l=new Da(t,n),a===!0&&(l.format=pe,l.type=ce)),o.dispose(),o.depthTexture=r?l:null,o.resolveDepthBuffer=r,o.storeMultisampledDepthBuffer=r);for(let e=0;e<y.length;e++){let i=y[e];i.setSize&&i.setSize(t,n),r&&i.needsDepthTexture===!0&&i.setDepthTexture&&i.setDepthTexture(l)}},this.begin=function(e,t){if(g||e.toneMapping===0&&y.length===0)return!1;if(v=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return b===!1&&e.setRenderTarget(o),_=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return b},this.end=function(e,t){e.toneMapping=_,g=!0;let n=o,r=s;for(let i=0;i<y.length;i++){let a=y[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(m!==e.outputColorSpace||h!==e.toneMapping){m=e.outputColorSpace,h=e.toneMapping,d.defines={},rn.getTransfer(m)===`srgb`&&(d.defines.SRGB_TRANSFER=``);let t=fl[h];t&&(d.defines[t]=``),d.needsUpdate=!0}d.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(v),e.render(f,p),v=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),u.dispose(),d.dispose()}}var ml=new mn,hl=new Da(1,1),gl=new Oa(1),_l=new vn,vl=new yn,yl=new Ta,bl=[],xl=[],Sl=new Float32Array(16),Cl=new Float32Array(9),wl=new Float32Array(4);function Tl(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=bl[i];if(a===void 0&&(a=new Float32Array(i),bl[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function El(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Dl(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Ol(e,t){let n=xl[t];n===void 0&&(n=new Int32Array(t),xl[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function kl(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Al(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(El(n,t))return;e.uniform2fv(this.addr,t),Dl(n,t)}}function jl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(El(n,t))return;e.uniform3fv(this.addr,t),Dl(n,t)}}function Ml(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(El(n,t))return;e.uniform4fv(this.addr,t),Dl(n,t)}}function Nl(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(El(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Dl(n,t)}else{if(El(n,r))return;wl.set(r),e.uniformMatrix2fv(this.addr,!1,wl),Dl(n,r)}}function Pl(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(El(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Dl(n,t)}else{if(El(n,r))return;Cl.set(r),e.uniformMatrix3fv(this.addr,!1,Cl),Dl(n,r)}}function Fl(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(El(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Dl(n,t)}else{if(El(n,r))return;Sl.set(r),e.uniformMatrix4fv(this.addr,!1,Sl),Dl(n,r)}}function Il(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Ll(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(El(n,t))return;e.uniform2iv(this.addr,t),Dl(n,t)}}function Rl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(El(n,t))return;e.uniform3iv(this.addr,t),Dl(n,t)}}function zl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(El(n,t))return;e.uniform4iv(this.addr,t),Dl(n,t)}}function Bl(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Vl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(El(n,t))return;e.uniform2uiv(this.addr,t),Dl(n,t)}}function Hl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(El(n,t))return;e.uniform3uiv(this.addr,t),Dl(n,t)}}function Ul(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(El(n,t))return;e.uniform4uiv(this.addr,t),Dl(n,t)}}function Wl(e){return e.version===0&&(e.compareFunction=519,e.needsUpdate=!0),e}function Gl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_2D_SHADOW?Wl(hl):ml,n.setTexture2D(t||a,i)}function Kl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||vl,i)}function ql(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_CUBE_SHADOW?Wl(gl):yl,n.setTextureCube(t||a,i)}function Jl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||_l,i)}function Yl(e){switch(e){case 5126:return kl;case 35664:return Al;case 35665:return jl;case 35666:return Ml;case 35674:return Nl;case 35675:return Pl;case 35676:return Fl;case 5124:case 35670:return Il;case 35667:case 35671:return Ll;case 35668:case 35672:return Rl;case 35669:case 35673:return zl;case 5125:return Bl;case 36294:return Vl;case 36295:return Hl;case 36296:return Ul;case 35678:case 36198:case 36298:case 36306:case 35682:return Gl;case 35679:case 36299:case 36307:return Kl;case 35680:case 36300:case 36308:case 36293:return ql;case 36289:case 36303:case 36311:case 36292:return Jl}}function Xl(e,t){e.uniform1fv(this.addr,t)}function Zl(e,t){let n=Tl(t,this.size,2);e.uniform2fv(this.addr,n)}function Ql(e,t){let n=Tl(t,this.size,3);e.uniform3fv(this.addr,n)}function $l(e,t){let n=Tl(t,this.size,4);e.uniform4fv(this.addr,n)}function eu(e,t){let n=Tl(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function tu(e,t){let n=Tl(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function nu(e,t){let n=Tl(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function ru(e,t){e.uniform1iv(this.addr,t)}function iu(e,t){e.uniform2iv(this.addr,t)}function au(e,t){e.uniform3iv(this.addr,t)}function ou(e,t){e.uniform4iv(this.addr,t)}function su(e,t){e.uniform1uiv(this.addr,t)}function cu(e,t){e.uniform2uiv(this.addr,t)}function lu(e,t){e.uniform3uiv(this.addr,t)}function uu(e,t){e.uniform4uiv(this.addr,t)}function du(e,t,n){let r=this.cache,i=t.length,a=Ol(n,i);El(r,a)||(e.uniform1iv(this.addr,a),Dl(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Wl(hl):ml;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function fu(e,t,n){let r=this.cache,i=t.length,a=Ol(n,i);El(r,a)||(e.uniform1iv(this.addr,a),Dl(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||vl,a[e])}function pu(e,t,n){let r=this.cache,i=t.length,a=Ol(n,i);El(r,a)||(e.uniform1iv(this.addr,a),Dl(r,a));let o;o=this.type===e.SAMPLER_CUBE_SHADOW?Wl(gl):yl;for(let e=0;e!==i;++e)n.setTextureCube(t[e]||o,a[e])}function mu(e,t,n){let r=this.cache,i=t.length,a=Ol(n,i);El(r,a)||(e.uniform1iv(this.addr,a),Dl(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||_l,a[e])}function hu(e){switch(e){case 5126:return Xl;case 35664:return Zl;case 35665:return Ql;case 35666:return $l;case 35674:return eu;case 35675:return tu;case 35676:return nu;case 5124:case 35670:return ru;case 35667:case 35671:return iu;case 35668:case 35672:return au;case 35669:case 35673:return ou;case 5125:return su;case 36294:return cu;case 36295:return lu;case 36296:return uu;case 35678:case 36198:case 36298:case 36306:case 35682:return du;case 35679:case 36299:case 36307:return fu;case 35680:case 36300:case 36308:case 36293:return pu;case 36289:case 36303:case 36311:case 36292:return mu}}var gu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Yl(t.type)}},_u=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=hu(t.type)}},vu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},yu=/(\w+)(\])?(\[|\.)?/g;function bu(e,t){e.seq.push(t),e.map[t.id]=t}function xu(e,t,n){let r=e.name,i=r.length;for(yu.lastIndex=0;;){let a=yu.exec(r),o=yu.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){bu(n,l===void 0?new gu(s,e,t):new _u(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new vu(s),bu(n,e)),n=e}}}var Su=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);xu(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Cu(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var wu=37297,Tu=0;function Eu(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Du=new U;function Ou(e){rn._getMatrix(Du,rn.workingColorSpace,e);let t=`mat3( ${Du.elements.map(e=>e.toFixed(4))} )`;switch(rn.getTransfer(e)){case st:return[t,`LinearTransferOETF`];case ct:return[t,`sRGBTransferOETF`];default:return R(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function ku(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Eu(e.getShaderSource(t),r)}return i}function Au(e,t){let n=Ou(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,`}`].join(`
`)}var ju={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Mu(e,t){let n=ju[t];return n===void 0?(R(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Nu=new H;function Pu(){return rn.getLuminanceCoefficients(Nu),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Nu.x.toFixed(4)}, ${Nu.y.toFixed(4)}, ${Nu.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Fu(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Ru).join(`
`)}function Iu(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Lu(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Ru(e){return e!==``}function zu(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Bu(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Vu=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hu(e){return e.replace(Vu,Uu)}function Uu(e,t){let n=Mc[t];if(n===void 0)throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`);return Hu(n)}var Wu=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gu(e){return e.replace(Wu,Ku)}function Ku(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function qu(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var Ju={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Yu(e){return Ju[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Xu={302:`ENVMAP_MODE_REFRACTION`};function Zu(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Xu[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Qu={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function $u(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Qu[e.combine]||`ENVMAP_BLENDING_NONE`}function ed(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Yu(n),l=n.envMapPMREM===!0?`ENVMAP_TYPE_PMREM`:`ENVMAP_TYPE_CUBE`,u=Zu(n),d=$u(n),f=Fu(n),p=Iu(a),m=i.createProgram(),h,g,_=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(h=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(Ru).join(`
`),h.length>0&&(h+=`
`),g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(Ru).join(`
`),g.length>0&&(g+=`
`)):(h=[qu(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.diffuseRoughnessMapUv?`#define DIFFUSE_ROUGHNESSMAP_UV `+n.diffuseRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Ru).join(`
`),g=[qu(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,n.envMapPMREM?`#define ENVMAP_MAX_LOD `+n.envMapMaxLod+`.0`:``,n.envMapPMREM?`#define ENVMAP_SIZE `+n.envMapSize+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughness?`#define USE_DIFFUSE_ROUGHNESS`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Mc.tonemapping_pars_fragment,n.toneMapping===0?``:Mu(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Mc.colorspace_pars_fragment,Au(`linearToOutputTexel`,n.outputColorSpace),Pu(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Ru).join(`
`)),o=Hu(o),o=zu(o,n),o=Bu(o,n),s=Hu(s),s=zu(s,n),s=Bu(s,n),o=Gu(o),s=Gu(s),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,h=[f,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+h,g=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+g);let v=_+h+o,y=_+g+s,b=Cu(i,i.VERTEX_SHADER,v),x=Cu(i,i.FRAGMENT_SHADER,y);i.attachShader(m,b),i.attachShader(m,x),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,`position`):i.bindAttribLocation(m,0,n.index0AttributeName),i.linkProgram(m);function S(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(m)||``,r=i.getShaderInfoLog(b)||``,a=i.getShaderInfoLog(x)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,m,b,x);else{let e=ku(i,b,`vertex`),n=ku(i,x,`fragment`);z(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):R(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:h},fragmentShader:{log:c,prefix:g}})}i.deleteShader(b),i.deleteShader(x),C=new Su(i,m),w=Lu(i,m)}let C;this.getUniforms=function(){return C===void 0&&S(this),C};let w;this.getAttributes=function(){return w===void 0&&S(this),w};let T=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(m,wu)),T},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Tu++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=x,this}var td=0,nd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new rd(e),t.set(e,n)),n}},rd=class{constructor(e){this.id=td++,this.code=e,this.usedTimes=0}};function id(e){return e===1030||e===37490||e===36285}function ad(e,t,n,r,i,a){let o=new jn,s=new nd,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function p(e){return c.add(e),e===0?`uv`:`uv${e}`}function m(i,o,l,u,m,h){let g=u.fog,_=m.geometry,v=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,b=t.get(i.envMap||v,y),x=f[i.type],S=r.precision;i.precision!==null&&(S=r.getMaxPrecision(i.precision),S!==i.precision&&R(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,S,`instead.`));let C=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,w=C===void 0?0:C.length,T=0;_.morphAttributes.position!==void 0&&(T=1),_.morphAttributes.normal!==void 0&&(T=2),_.morphAttributes.color!==void 0&&(T=3);let E,D,O,ee;if(x){let e=Nc[x];E=e.vertexShader,D=e.fragmentShader}else{E=i.vertexShader,D=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),O=e.id,ee=t.id}let k=e.getRenderTarget(),A=e.state.buffers.depth.getReversed(),j=m.isInstancedMesh===!0,te=m.isBatchedMesh===!0,ne=!!i.map,re=!!i.matcap,ie=!!b,ae=ie&&b.isPMREMTexture===!0,oe=!!i.aoMap,se=!!i.lightMap,ce=!!i.bumpMap&&i.wireframe===!1,M=!!i.normalMap,le=!!i.displacementMap,ue=!!i.emissiveMap,N=!!i.metalnessMap,de=!!i.roughnessMap,fe=i.anisotropy>0,pe=i.clearcoat>0,me=i.diffuseRoughness>0,he=i.dispersion>0,ge=i.retroreflectivity>0,_e=i.iridescence>0,ve=i.sheen>0,ye=i.transmission>0,be=fe&&!!i.anisotropyMap,xe=pe&&!!i.clearcoatMap,Se=pe&&!!i.clearcoatNormalMap,Ce=pe&&!!i.clearcoatRoughnessMap,we=me&&!!i.diffuseRoughnessMap,Te=_e&&!!i.iridescenceMap,Ee=_e&&!!i.iridescenceThicknessMap,De=ve&&!!i.sheenColorMap,Oe=ve&&!!i.sheenRoughnessMap,ke=!!i.specularMap,Ae=!!i.specularColorMap,je=!!i.specularIntensityMap,Me=ye&&!!i.transmissionMap,Ne=ye&&!!i.thicknessMap,Pe=!!i.gradientMap,Fe=!!i.alphaMap,P=i.alphaTest>0,Ie=!!i.alphaHash,Le=!!i.extensions,Re=0;i.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Re=e.toneMapping);let F=ae?b.isCompressedCubeTexture?b.image[0].mipmaps:b.mipmaps:null,ze={shaderID:x,shaderType:i.type,shaderName:i.name,vertexShader:E,fragmentShader:D,defines:i.defines,customVertexShaderID:O,customFragmentShaderID:ee,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:S,batching:te,batchingColor:te&&m._colorsTexture!==null,instancing:j,instancingColor:j&&m.instanceColor!==null,instancingMorph:j&&m.morphTexture!==null,outputColorSpace:k===null?e.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:rn.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:ne,matcap:re,envMap:ie,envMapMode:ie&&b.mapping,envMapPMREM:ae,envMapMaxLod:ae?F.length-1:null,envMapSize:ae?F[0].width:null,aoMap:oe,lightMap:se,bumpMap:ce,normalMap:M,displacementMap:le,emissiveMap:ue,normalMapObjectSpace:M&&i.normalMapType===1,normalMapTangentSpace:M&&i.normalMapType===0,packedNormalMap:M&&i.normalMapType===0&&id(i.normalMap.format),metalnessMap:N,roughnessMap:de,anisotropy:fe,anisotropyMap:be,clearcoat:pe,clearcoatMap:xe,clearcoatNormalMap:Se,clearcoatRoughnessMap:Ce,diffuseRoughness:me,diffuseRoughnessMap:we,dispersion:he,retroreflection:ge,iridescence:_e,iridescenceMap:Te,iridescenceThicknessMap:Ee,sheen:ve,sheenColorMap:De,sheenRoughnessMap:Oe,specularMap:ke,specularColorMap:Ae,specularIntensityMap:je,transmission:ye,transmissionMap:Me,thicknessMap:Ne,gradientMap:Pe,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Fe,alphaTest:P,alphaHash:Ie,combine:i.combine,mapUv:ne&&p(i.map.channel),aoMapUv:oe&&p(i.aoMap.channel),lightMapUv:se&&p(i.lightMap.channel),bumpMapUv:ce&&p(i.bumpMap.channel),normalMapUv:M&&p(i.normalMap.channel),displacementMapUv:le&&p(i.displacementMap.channel),emissiveMapUv:ue&&p(i.emissiveMap.channel),metalnessMapUv:N&&p(i.metalnessMap.channel),roughnessMapUv:de&&p(i.roughnessMap.channel),anisotropyMapUv:be&&p(i.anisotropyMap.channel),clearcoatMapUv:xe&&p(i.clearcoatMap.channel),clearcoatNormalMapUv:Se&&p(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&p(i.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:we&&p(i.diffuseRoughnessMap.channel),iridescenceMapUv:Te&&p(i.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&p(i.iridescenceThicknessMap.channel),sheenColorMapUv:De&&p(i.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&p(i.sheenRoughnessMap.channel),specularMapUv:ke&&p(i.specularMap.channel),specularColorMapUv:Ae&&p(i.specularColorMap.channel),specularIntensityMapUv:je&&p(i.specularIntensityMap.channel),transmissionMapUv:Me&&p(i.transmissionMap.channel),thicknessMapUv:Ne&&p(i.thicknessMap.channel),alphaMapUv:Fe&&p(i.alphaMap.channel),vertexTangents:!!_.attributes.tangent&&(M||fe),vertexNormals:!!_.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,pointsUvs:m.isPoints===!0&&!!_.attributes.uv&&(ne||Fe),fog:!!g,useFog:i.fog===!0,fogExp2:!!g&&g.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||_.attributes.normal===void 0&&M===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:A,skinning:m.isSkinnedMesh===!0,hasPositionAttribute:_.attributes.position!==void 0,morphTargets:_.morphAttributes.position!==void 0,morphNormals:_.morphAttributes.normal!==void 0,morphColors:_.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:T,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:h.filter(e=>e.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Re,decodeVideoTexture:ne&&i.map.isVideoTexture===!0&&rn.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:ue&&i.emissiveMap.isVideoTexture===!0&&rn.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Le&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Le&&i.extensions.multiDraw===!0||te)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return ze.vertexUv1s=c.has(1),ze.vertexUv2s=c.has(2),ze.vertexUv3s=c.has(3),c.clear(),ze}function h(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(g(n,t),_(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function g(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapPMREM),e.push(t.envMapMaxLod),e.push(t.envMapSize),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.diffuseRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.numLightProbeGrids),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function _(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.diffuseRoughness&&o.enable(25),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function v(e){let t=f[e.type],n;if(t){let e=Nc[t];n=fs.clone(e.uniforms)}else n=e.uniforms;return n}function y(t,n){let r=u.get(n);return r===void 0?(r=new ed(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function b(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function x(e){s.remove(e)}function S(){s.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:v,acquireProgram:y,releaseProgram:b,releaseShaderCache:x,programs:l,dispose:S}}function od(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function sd(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function cd(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function ld(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||sd),r.length>1&&r.sort(t||cd),i.length>1&&i.sort(t||cd)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function ud(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new ld,e.set(t,[i])):n>=r.length?(i=new ld,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function dd(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new H,color:new W};break;case`SpotLight`:n={position:new H,direction:new H,color:new W,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new H,color:new W,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new H,skyColor:new W,groundColor:new W};break;case`RectAreaLight`:n={color:new W,position:new H,halfWidth:new H,halfHeight:new H}}return e[t.id]=n,n}}}function fd(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new V};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new V};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new V,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var pd=0;function md(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function hd(e){let t=new dd,n=fd(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new H);let i=new H,a=new bn,o=new bn;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(md);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=K.LTC_FLOAT_1,r.rectAreaLTC2=K.LTC_FLOAT_2):(r.rectAreaLTC1=K.LTC_HALF_1,r.rectAreaLTC2=K.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=pd++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function gd(e){let t=new hd(e),n=[],r=[],i=[];function a(e){u.camera=e,n.length=0,r.length=0,i.length=0}function o(e){e.isLightProbeGrid?i.push(e):n.push(e)}function s(e){r.push(e)}function c(){t.setup(n),i.sort((e,t)=>e.priority-t.priority||e.id-t.id)}function l(e){t.setupView(n,e)}let u={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:u,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:s}}function _d(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new gd(e),t.set(n,[a])):r>=i.length?(a=new gd(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var vd=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yd=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,bd=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],xd=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],Sd=new bn,Cd=new H,wd=new H;function Td(e,t,n){let r=new na,i=new V,a=new V,o=new hn,s=new ys,c=new bs,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new hs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new V},radius:{value:4}},vertexShader:vd,fragmentShader:yd}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new Xr;m.setAttribute(`position`,new Ir(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new Bi(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;this.type===2&&(R(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==this.type;p&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){R(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let m=d.getFrameExtents();i.multiply(m),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/m.x),i.x=a.x*m.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/m.y),i.y=a.y*m.y,d.mapSize.y=a.y));let h=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=h,d.map===null||p===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){R(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new _n(i.x,i.y,{format:ge,type:ae,minFilter:D,magFilter:D,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new Da(i.x,i.y,ie),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=fe,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=w,d.map.depthTexture.magFilter=w}else l.isPointLight?(d.map=new Hc(i.x),d.map.depthTexture=new Oa(i.x,re)):(d.map=new _n(i.x,i.y),d.map.depthTexture=new Da(i.x,i.y,re)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=fe,this.type===1?(d.map.depthTexture.compareFunction=h?518:515,d.map.depthTexture.minFilter=D,d.map.depthTexture.magFilter=D):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=w,d.map.depthTexture.magFilter=w);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let g=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);let _=d.camera.layers.mask&4294967294?d.camera.layers:s.layers;for(let t=0;t<g;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Cd.setFromMatrixPosition(l.matrixWorld),e.position.copy(Cd),wd.copy(e.position),wd.add(bd[t]),e.up.copy(xd[t]),e.lookAt(wd),e.updateMatrixWorld(),n.makeTranslation(-Cd.x,-Cd.y,-Cd.z),Sd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(Sd,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}r=d.getFrustum(t),b(n,s,i,l,_,this.type)}d.isPointLightShadow!==!0&&this.type===3&&v(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function v(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null?n.mapPass=new _n(i.x,i.y,{format:ge,type:ae}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value.set(n.map.width,n.map.height),f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function y(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,x)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function b(n,i,a,o,s,c){if(n.visible===!1)return;if(n.layers.test(s)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&c===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),s=n.material;if(Array.isArray(s)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=s[u.materialIndex];if(d&&d.visible){let t=y(n,d,o,c);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(s.visible){let t=y(n,s,o,c);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let l=n.children;for(let e=0,t=l.length;e<t;e++)b(l[e],i,a,o,s,c)}function x(e){e.target.removeEventListener(`dispose`,x);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Ed(e,t){function n(){let t=!1,n=new hn,r=null,i=new hn(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?N(e.DEPTH_TEST):de(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=xt[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?N(e.STENCIL_TEST):de(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c={},l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new W(0,0,0),T=0,E=!1,D=null,O=null,ee=null,k=null,A=null,j=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),te=!1,ne=0,re=e.getParameter(e.VERSION);re.indexOf(`WebGL`)===-1?re.indexOf(`OpenGL ES`)!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),te=ne>=2):(ne=parseFloat(/^WebGL (\d)/.exec(re)[1]),te=ne>=1);let ie=null,ae={},oe=e.getParameter(e.SCISSOR_BOX),se=e.getParameter(e.VIEWPORT),ce=new hn().fromArray(oe),M=new hn().fromArray(se);function le(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let ue={};ue[e.TEXTURE_2D]=le(e.TEXTURE_2D,e.TEXTURE_2D,1),ue[e.TEXTURE_CUBE_MAP]=le(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[e.TEXTURE_2D_ARRAY]=le(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ue[e.TEXTURE_3D]=le(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),N(e.DEPTH_TEST),o.setFunc(3),ye(!1),be(1),N(e.CULL_FACE),_e(0);function N(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function de(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function fe(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function pe(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function me(t){return h!==t&&(e.useProgram(t),h=t,!0)}let he={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};he[103]=e.MIN,he[104]=e.MAX;let ge={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function _e(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(de(e.BLEND),g=!1);else if(g===!1&&(N(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:z(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:z(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:z(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:z(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a=a||n,o=o||r,s=s||i,(n!==v||a!==x)&&(e.blendEquationSeparate(he[n],he[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(ge[r],ge[i],ge[o],ge[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function ve(t,n){t.side===2?de(e.CULL_FACE):N(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ye(r),t.blending===1&&t.transparent===!1?_e(0):_e(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),Se(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?N(e.SAMPLE_ALPHA_TO_COVERAGE):de(e.SAMPLE_ALPHA_TO_COVERAGE)}function ye(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function be(t){t===0?de(e.CULL_FACE):(N(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function xe(t){t!==ee&&(te&&e.lineWidth(t),ee=t)}function Se(t,n,r){t?(N(e.POLYGON_OFFSET_FILL),(k!==n||A!==r)&&(k=n,A=r,o.getReversed()&&(n=-n,r=-r),e.polygonOffset(n,r))):de(e.POLYGON_OFFSET_FILL)}function Ce(t){t?N(e.SCISSOR_TEST):de(e.SCISSOR_TEST)}function we(t){t===void 0&&(t=e.TEXTURE0+j-1),ie!==t&&(e.activeTexture(t),ie=t)}function Te(t,n,r){r===void 0&&(r=ie===null?e.TEXTURE0+j-1:ie);let i=ae[r];i===void 0&&(i={type:void 0,texture:void 0},ae[r]=i),(i.type!==t||i.texture!==n)&&(ie!==r&&(e.activeTexture(r),ie=r),e.bindTexture(t,n||ue[t]),i.type=t,i.texture=n)}function Ee(){let t=ae[ie];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function De(){try{e.compressedTexImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Oe(){try{e.compressedTexImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function ke(){try{e.texSubImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Ae(){try{e.texSubImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function je(){try{e.compressedTexSubImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Me(){try{e.compressedTexSubImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Ne(){try{e.texStorage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Pe(){try{e.texStorage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Fe(){try{e.texImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function P(){try{e.texImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Ie(t){return d[t]===void 0?e.getParameter(t):d[t]}function Le(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Re(t){ce.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ce.copy(t))}function F(t){M.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),M.copy(t))}function ze(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),e.uniformBlockBinding(n,i,i),r.set(t,i))}function I(t,n,r){let i=l.get(n).get(t);c[i]!==r&&(e.bindBufferBase(e.UNIFORM_BUFFER,i,r),c[i]=r)}function L(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},ie=null,ae={},f={},c={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new W(0,0,0),T=0,E=!1,D=null,O=null,ee=null,k=null,A=null,ce.set(0,0,e.canvas.width,e.canvas.height),M.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:N,disable:de,bindFramebuffer:fe,drawBuffers:pe,useProgram:me,setBlending:_e,setMaterial:ve,setFlipSided:ye,setCullFace:be,setLineWidth:xe,setPolygonOffset:Se,setScissorTest:Ce,activeTexture:we,bindTexture:Te,unbindTexture:Ee,compressedTexImage2D:De,compressedTexImage3D:Oe,texImage2D:Fe,texImage3D:P,pixelStorei:Le,getParameter:Ie,updateUBOMapping:ze,uniformBlockBinding:I,texStorage2D:Ne,texStorage3D:Pe,texSubImage2D:ke,texSubImage3D:Ae,compressedTexSubImage2D:je,compressedTexSubImage3D:Me,scissor:Re,viewport:F,reset:L}}function Dd(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new V,u=new WeakMap,d=new Set,f,p=new WeakMap,m=new Set,h=new FinalizationRegistry(e=>m.delete(e)),g=!1;try{g=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function _(e,t){return g?new OffscreenCanvas(e,t):mt(`canvas`)}function v(e,t,n){let r=1,i=L(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);f===void 0&&(f=_(n,a));let o=t?_(n,a):f;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),R(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&R(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function y(e){return e.generateMipmaps}function b(t){e.generateMipmap(t)}function k(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function A(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];R(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||R(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?st:rn.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function j(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,R(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function te(e,t){return y(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function ne(e){let t=new WeakRef(e);r.get(e).__ref=t,m.add(t),h.register(e,t,t)}function re(e){let t=r.get(e).__ref;t!==void 0&&(m.delete(t),h.unregister(t))}function ie(e){oe(e.target)}function ae(e){se(e.target)}function oe(e){e.removeEventListener(`dispose`,ie),re(e),M(e),e.isVideoTexture&&u.delete(e),e.isHTMLTexture&&d.delete(e)}function se(e){e.removeEventListener(`dispose`,ae),re(e),ue(e)}function ce(){for(let e of m){let t=e.deref();t!==void 0&&(t.isRenderTarget===!0?se(t):oe(t))}m.clear(),d.clear()}function M(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=p.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&le(e),Object.keys(i).length===0&&p.delete(n)}r.remove(e)}function le(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=p.get(i);delete a[n.__cacheKey],o.memory.textures--}function ue(t){let n=r.get(t);n.__depthDisposeCallback&&n.__depthDisposeCallback();let i=t.depthTexture;if(i&&i.renderTarget===t&&oe(i),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let a=t.textures;for(let t=0,n=a.length;t<n;t++){let n=r.get(a[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(a[t])}r.remove(t)}let N=0;function de(){N=0}function fe(){return N}function me(e){N=e}function he(){let e=N;return e>=i.maxTextures&&R(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),N+=1,e}function ge(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.mipmapsAutoUpdate),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function _e(t,i){let a=r.get(t);if(t.isVideoTexture&&ze(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)R(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)R(`WebGLRenderer: Texture marked for update but image is incomplete`);else{Oe(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function ve(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?Oe(a,t,i):(t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i))}function ye(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?Oe(a,t,i):n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function be(t,i){let a=r.get(t);t.version>0&&a.__version!==t.version?ke(a,t,i):n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let xe={[x]:e.REPEAT,[S]:e.CLAMP_TO_EDGE,[C]:e.MIRRORED_REPEAT},Se={[w]:e.NEAREST,[T]:e.NEAREST_MIPMAP_NEAREST,[E]:e.NEAREST_MIPMAP_LINEAR,[D]:e.LINEAR,[O]:e.LINEAR_MIPMAP_NEAREST,[ee]:e.LINEAR_MIPMAP_LINEAR},Ce={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function we(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&R(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,xe[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,xe[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,xe[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,Se[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,Se[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,Ce[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function Te(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,ie),ne(n));let i=n.source,a=p.get(i);a===void 0&&(a={},p.set(i,a));let s=ge(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&le(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function Ee(e,t,n){return Math.floor(Math.floor(e/n)/t)}function De(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=Ee(n.start,r.width,4),c=Ee(t.start,r.width,4);n.start<=i+1&&a===c&&Ee(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function Oe(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=Te(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let f=r.get(u);if(u.version!==f.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=rn.getPrimaries(rn.workingColorSpace),r=o.colorSpace===``?null:rn.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=v(o.image,!1,i.maxTextureSize);t=I(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),m=A(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);we(c,o);let h,g=o.mipmaps,_=o.isVideoTexture!==!0,x=f.__version===void 0||l===!0,S=u.dataReady,C=te(o,t);if(o.isDepthTexture)m=j(o.format===pe,o.type),x&&(_?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(o.isDataTexture){if(g.length>0){_&&x&&n.texStorage2D(e.TEXTURE_2D,C,m,g[0].width,g[0].height);for(let t=0,i=g.length;t<i;t++)h=g[t],_?S&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data);o.generateMipmaps=!1}else _?(x&&n.texStorage2D(e.TEXTURE_2D,C,m,t.width,t.height),S&&De(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){_&&x&&n.texStorage3D(e.TEXTURE_2D_ARRAY,C,m,g[0].width,g[0].height,t.depth);for(let i=0,a=g.length;i<a;i++)if(h=g[i],o.format!==1023){if(r!==null){if(_){if(S){if(o.layerUpdates.size>0){let t=Oc(h.width,h.height,o.format,o.type);for(let a of o.layerUpdates){let o=h.data.subarray(a*t/h.data.BYTES_PER_ELEMENT,(a+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,h.width,h.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,h.data,0,0)}else R(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else _?S&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,r,p,h.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{_&&x&&n.texStorage2D(e.TEXTURE_2D,C,m,g[0].width,g[0].height);for(let t=0,i=g.length;t<i;t++)h=g[t],o.format===1023?_?S&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data):r===null?R(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):_?S&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}}else if(o.isDataArrayTexture){if(_){if(x&&n.texStorage3D(e.TEXTURE_2D_ARRAY,C,m,t.width,t.height,t.depth),S){if(o.layerUpdates.size>0){let i=Oc(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data)}else if(o.isData3DTexture)_?(x&&n.texStorage3D(e.TEXTURE_3D,C,m,t.width,t.height,t.depth),S&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(x){if(_)n.texStorage2D(e.TEXTURE_2D,C,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<C;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),d.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of d)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(g.length>0){if(_&&x){let t=L(g[0]);n.texStorage2D(e.TEXTURE_2D,C,m,t.width,t.height)}for(let t=0,i=g.length;t<i;t++)h=g[t],_?S&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,h):n.texImage2D(e.TEXTURE_2D,t,m,r,p,h);o.generateMipmaps=!1}else if(_){if(x){let r=L(t);n.texStorage2D(e.TEXTURE_2D,C,m,r.width,r.height)}S&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);y(o)&&o.mipmapsAutoUpdate===!0&&b(c),f.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function ke(t,o,s){if(o.image.length!==6)return;let c=Te(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=rn.getPrimaries(rn.workingColorSpace),r=o.colorSpace===``?null:rn.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=v(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=I(o,m[e]);let h=m[0],g=a.convert(o.format,o.colorSpace),_=a.convert(o.type),x=A(o.internalFormat,g,_,o.normalized,o.colorSpace),S=o.isVideoTexture!==!0,C=u.__version===void 0||c===!0,w=l.dataReady,T=te(o,h);we(e.TEXTURE_CUBE_MAP,o);let E;if(o.isDepthTexture){if(x=j(o.format===pe,o.type),C){if(S)n.texStorage2D(e.TEXTURE_CUBE_MAP,1,x,h.width,h.height);else for(let t=0;t<6;t++)n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,x,h.width,h.height,0,g,_,null)}}else if(f){S&&C&&n.texStorage2D(e.TEXTURE_CUBE_MAP,T,x,h.width,h.height);for(let t=0;t<6;t++){E=m[t].mipmaps;for(let r=0;r<E.length;r++){let i=E[r];o.format===1023?S?w&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,x,i.width,i.height,0,g,_,i.data):g===null?R(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):S?w&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,x,i.width,i.height,0,i.data)}}}else{if(E=o.mipmaps,S&&C){E.length>0&&T++;let t=L(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,T,x,t.width,t.height)}for(let t=0;t<6;t++)if(p){S?w&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,g,_,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,x,m[t].width,m[t].height,0,g,_,m[t].data);for(let r=0;r<E.length;r++){let i=E[r].image[t].image;S?w&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,x,i.width,i.height,0,g,_,i.data)}}else{S?w&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,x,g,_,m[t]);for(let r=0;r<E.length;r++){let i=E[r];S?w&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,g,_,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,x,g,_,i.image[t])}}}y(o)&&o.mipmapsAutoUpdate===!0&&b(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function Ae(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=A(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),F(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,Re(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function je(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=j(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;F(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Re(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Re(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=A(o.internalFormat,c,l,o.normalized,o.colorSpace);F(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Re(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Re(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Me(t,i,a){let o=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let c=r.get(i.depthTexture);c.__renderTarget=i;let l=o?i.depthTexture.image[0]:i.depthTexture.image;c.__webglTexture&&l.width===i.width&&l.height===i.height||(l.width=i.width,l.height=i.height,i.depthTexture.needsUpdate=!0),o?be(i.depthTexture,0):_e(i.depthTexture,0);let u=c.__webglTexture,d=Re(i),f=o?e.TEXTURE_CUBE_MAP_POSITIVE_X+a:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)F(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)F(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Ne(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)Me(i.__webglFramebuffer[e],t,e);else t.texture.mipmaps.length>0?Me(i.__webglFramebuffer[0],t,0):Me(i.__webglFramebuffer,t,0)}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),je(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else if(t.texture.mipmaps.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),je(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Pe(t,n,i){let a=r.get(t);n!==void 0&&Ae(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&Ne(t)}function Fe(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,ae),ne(t);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&F(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=A(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=Re(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),je(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),we(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)Ae(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else Ae(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);y(i)?b(e.TEXTURE_CUBE_MAP):i.mipmaps.length>0&&e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAX_LEVEL,i.mipmaps.length-1),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),we(c,a),Ae(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),y(a)&&b(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),we(r,i),i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)Ae(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else Ae(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);y(i)?b(r):i.mipmaps.length>0&&e.texParameteri(r,e.TEXTURE_MAX_LEVEL,i.mipmaps.length-1),n.unbindTexture()}t.depthBuffer&&Ne(t)}function P(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(y(a)&&a.mipmapsAutoUpdate===!0){let t=k(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),b(t),n.unbindTexture()}}}let Ie=[];function Le(t){if(t.samples>0){if(F(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer),t.texture.mipmaps.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(Ie.length=0,Ie.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&Ie.push(l),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Ie))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Re(e){return Math.min(i.maxSamples,e.samples)}function F(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function ze(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function I(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(rn.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&R(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):z(`WebGLTextures: Unsupported texture color space:`,n)),t}function L(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=he,this.resetTextureUnits=de,this.getTextureUnits=fe,this.setTextureUnits=me,this.setTexture2D=_e,this.setTexture2DArray=ve,this.setTexture3D=ye,this.setTextureCube=be,this.rebindTextures=Pe,this.setupRenderTarget=Fe,this.updateRenderTargetMipmap=P,this.updateMultisampleRenderTarget=Le,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=F,this.dispose=ce}function Od(e,t){function n(n,r=``){let i,a=rn.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var kd=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ad=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,jd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ka(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new hs({vertexShader:kd,fragmentShader:Ad,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Bi(new ns(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Md=class extends St{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new jd,g={},_=t.getContextAttributes(),v=null,y=null,b=[],x=[],S=new V,C=null,w=null,T=new ec;T.viewport=new hn;let E=new ec;E.viewport=new hn;let D=[T,E],O=new sc,ee=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=b[e];return t===void 0&&(t=new Xn,b[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=b[e];return t===void 0&&(t=new Xn,b[e]=t),t.getGripSpace()},this.getHand=function(e){let t=b[e];return t===void 0&&(t=new Xn,b[e]=t),t.getHandSpace()};function j(e){let t=x.indexOf(e.inputSource);if(t===-1)return;let n=b[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function te(){r.removeEventListener(`select`,j),r.removeEventListener(`selectstart`,j),r.removeEventListener(`selectend`,j),r.removeEventListener(`squeeze`,j),r.removeEventListener(`squeezestart`,j),r.removeEventListener(`squeezeend`,j),r.removeEventListener(`end`,te),r.removeEventListener(`inputsourceschange`,ne);for(let e=0;e<b.length;e++){let t=x[e];t!==null&&(x[e]=null,b[e].disconnect(t))}ee=null,A=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(v),f=null,d=null,u=null,r=null,y=null,M.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),w!==null){let e=w.camera;e.fov=w.fov,e.zoom=w.zoom,e.updateProjectionMatrix(),w=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&R(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&R(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,j),r.addEventListener(`selectstart`,j),r.addEventListener(`selectend`,j),r.addEventListener(`squeeze`,j),r.addEventListener(`squeezestart`,j),r.addEventListener(`squeezeend`,j),r.addEventListener(`end`,te),r.addEventListener(`inputsourceschange`,ne),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?pe:fe,a=_.stencil?ce:re);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new _n(d.textureWidth,d.textureHeight,{format:de,type:k,depthTexture:new Da(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new _n(f.framebufferWidth,f.framebufferHeight,{format:de,type:k,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),M.setContext(r),M.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function ne(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=x.indexOf(n);r>=0&&(x[r]=null,b[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=x.indexOf(n);if(r===-1){for(let e=0;e<b.length;e++)if(e>=x.length){x.push(n),r=e;break}else if(x[e]===null){x[e]=n,r=e;break}if(r===-1)break}let i=b[r];i&&i.connect(n)}}function ie(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),O.near=E.near=T.near=t,O.far=E.far=T.far=n,(ee!==O.near||A!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),ee=O.near,A=O.far),O.layers.mask=e.layers.mask|6,T.layers.mask=O.layers.mask&-5,E.layers.mask=O.layers.mask&-3;let i=e.parent,a=O.cameras;ie(O,i);for(let e=0;e<a.length;e++)ie(a[e],i);O.projectionMatrix.copy(T.projectionMatrix),O.projectionMatrixInverse.copy(T.projectionMatrixInverse),w===null&&e.isPerspectiveCamera&&(w={camera:e,fov:e.fov,zoom:e.zoom}),ae(e,O,i)};function ae(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=Et*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(O)},this.getCameraTexture=function(e){return g[e]};let oe=null;function se(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let i=!1;t.length!==O.cameras.length&&(O.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(y,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(y))}let o=D[n];o===void 0&&(o=new ec,o.layers.enable(n),o.viewport=new hn,D[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(O.matrix.copy(o.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),i===!0&&O.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new ka,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<b.length;e++){let t=x[e],n=b[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}oe&&oe(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let M=new Ac;M.setAnimationLoop(se),this.setAnimationLoop=function(e){oe=e},this.dispose=function(){}}},Nd=new bn,Pd=new U;Pd.set(-1,0,0,0,1,0,0,0,1);function Fd(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,ds(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Nd.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Pd),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.diffuseRoughness>0&&(e.diffuseRoughness.value=t.diffuseRoughness,t.diffuseRoughnessMap&&(e.diffuseRoughnessMap.value=t.diffuseRoughnessMap,n(t.diffuseRoughnessMap,e.diffuseRoughnessMapTransform))),t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessMinimum,e.iridescenceThicknessMaximum.value=t.iridescenceThicknessMaximum,t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Id(e,t,n,r){let i={},a={};function o(e,t){let n=t.program;r.uniformBlockBinding(e,n,i[e.id])}function s(e,n){let o=i[e.id];o===void 0&&(m(e),o=c(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let u=t.render.frame;a[e.id]!==u&&(l(e),a[e.id]=u)}function c(t){let n=e.createBuffer(),r=t.__size,i=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,n),e.bufferData(e.UNIFORM_BUFFER,r,i),e.bindBuffer(e.UNIFORM_BUFFER,null),n}function l(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)u(t[n],e,n,a);else u(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function u(t,n,r,i){if(f(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=h(i,!0);d(i,t.__data,e),e+=a.storage/Float32Array.BYTES_PER_ELEMENT}}else d(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function d(e,t,n){typeof e==`number`||typeof e==`boolean`?t[n]=e:e.isMatrix3?(t[n]=e.elements[0],t[n+1]=e.elements[1],t[n+2]=e.elements[2],t[n+3]=0,t[n+4]=e.elements[3],t[n+5]=e.elements[4],t[n+6]=e.elements[5],t[n+7]=0,t[n+8]=e.elements[6],t[n+9]=e.elements[7],t[n+10]=e.elements[8],t[n+11]=0):ArrayBuffer.isView(e)?t.set(e.subarray(0,t.length-n),n):e.toArray(t,n)}function f(e,t,n,r){let i=e.value,a=t+`_`+n;if(Array.isArray(i)){r[a]===void 0&&(r[a]=[]);let e=r[a],t=!1;for(let n=0;n<i.length;n++)p(i[n],e,n)===!0&&(t=!0);return t}return p(i,r,a)}function p(e,t,n){if(t[n]===void 0)return t[n]=typeof e==`number`||typeof e==`boolean`?e:ArrayBuffer.isView(e)?e.slice():e.clone(),!0;{let r=t[n];if(typeof e==`number`||typeof e==`boolean`){if(r!==e)return t[n]=e,!0}else if(ArrayBuffer.isView(e))return!0;else if(r.equals(e)===!1)return r.copy(e),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let i=0,a=r.length;i<a;i++){let a=r[i],o=Array.isArray(a.value)?a.value:[a.value],s=Array.isArray(t[e])||Array.isArray(a.value),c=n;for(let e=0,t=o.length;e<t;e++){let t=o[e],r=h(t,s),i=n%16,a=i%r.boundary,l=i+a;n+=a,l!==0&&16-l<r.storage&&(n+=16-l),e===0&&(c=n),n+=r.storage}a.__data=new(a.type===`int`?Int32Array:a.type===`uint`?Uint32Array:Float32Array)((n-c)/Float32Array.BYTES_PER_ELEMENT),a.__offset=c}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e,t){let n={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(n.boundary=4,n.storage=4):e.isVector2?(n.boundary=8,n.storage=8):e.isVector3||e.isColor?(n.boundary=16,n.storage=12):e.isVector4?(n.boundary=16,n.storage=16):e.isMatrix3?(n.boundary=16,n.storage=48):e.isMatrix4?(n.boundary=16,n.storage=64):e.isTexture?R(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(n.boundary=16,n.storage=e.byteLength):R(`WebGLRenderer: Unsupported uniform value type.`,e),t===!0&&(n.boundary=16,n.storage=Math.ceil(n.storage/16)*16),n}function g(t){let n=t.target;n.removeEventListener(`dispose`,g),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);i={},a={}}return{bind:o,update:s,dispose:_}}var Ld=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Rd=null;function zd(){return Rd===null&&(Rd=new Ui(Ld,16,16,ge,ae),Rd.name=`DFG_LUT`,Rd.minFilter=D,Rd.magFilter=D,Rd.wrapS=S,Rd.wrapT=S,Rd.generateMipmaps=!1,Rd.needsUpdate=!0),Rd}var Bd=class{constructor(e={}){let{canvas:t=ht(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=k}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([ve,_e,he]),g=new Set([k,re,te,ce,oe,se]),_=new Uint32Array(4),v=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},b=null,x=null,S=[],C=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,E=!1,D=null,O=null,A=null,j=null;this._outputColorSpace=at;let ne=0,ie=0,M=null,le=-1,ue=null,N=new hn,de=new hn,fe=null,pe=new W(0),me=0,ge=t.width,ye=t.height,be=1,xe=null,Se=null,Ce=new hn(0,0,ge,ye),we=new hn(0,0,ge,ye),Te=!1,Ee=new na,De=new ia,Oe=!1,ke=!1,Ae=new bn,je=new H,Me=new hn,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Pe=!1;function Fe(){return M===null?be:1}let P=n;function Ie(e,n){return t.getContext(e,n)}let Le,Re,F,ze,I,L,Be,Ve,He,Ue,We,Ge,Ke,qe,Je,Ye,Xe,Ze,Qe,$e,et,tt,nt;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r187`),t.addEventListener(`webglcontextlost`,ot,!1),t.addEventListener(`webglcontextrestored`,st,!1),t.addEventListener(`webglcontextcreationerror`,ct,!1),P===null){let t=`webgl2`;if(P=Ie(t,e),P===null)throw Ie(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}rt()}catch(e){throw t.removeEventListener(`webglcontextlost`,ot,!1),t.removeEventListener(`webglcontextrestored`,st,!1),t.removeEventListener(`webglcontextcreationerror`,ct,!1),z(`WebGLRenderer: `+e.message),e}function rt(){Le=new ol(P),Le.init(),et=new Od(P,Le),Re=new Bc(P,Le,e,et),F=new Ed(P,Le),Re.reversedDepthBuffer&&d&&F.buffers.depth.setReversed(!0),O=P.createFramebuffer(),A=P.createFramebuffer(),j=P.createFramebuffer(),ze=new ll(P),I=new od,L=new Dd(P,Le,F,I,Re,et,ze),Be=new al(T),Ve=new jc(P),tt=new Rc(P,Ve),He=new sl(P,Ve,ze,tt),Ue=new dl(P,He,Ve,tt,ze),Ze=new ul(P,Re,L),Je=new Vc(I),We=new ad(T,Be,Le,Re,tt,Je),Ge=new Fd(T,I),Ke=new ud,qe=new _d(Le),Xe=new Lc(T,Be,F,Ue,p,s),Ye=new Td(T,Ue,Re),nt=new Id(P,ze,Re,F),Qe=new zc(P,Le,ze),$e=new cl(P,Le,ze),ze.programs=We.programs,T.capabilities=Re,T.extensions=Le,T.properties=I,T.renderLists=Ke,T.shadowMap=Ye,T.state=F,T.info=ze}m!==1009&&(w=new pl(m,t.width,t.height,o,r,i));let it=new Md(T,P);this.xr=it,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let e=Le.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Le.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return be},this.setPixelRatio=function(e){e!==void 0&&(be=e,this.setSize(ge,ye,!1))},this.getSize=function(e){return e.set(ge,ye)},this.setSize=function(e,n,r=!0){it.isPresenting?R(`WebGLRenderer: Can't change size while VR device is presenting.`):(ge=e,ye=n,t.width=Math.floor(e*be),t.height=Math.floor(n*be),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(ge*be,ye*be).floor()},this.setDrawingBufferSize=function(e,n,r){ge=e,ye=n,be=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009)z(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){R(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}w.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(N)},this.getViewport=function(e){return e.copy(Ce)},this.setViewport=function(e,t,n,r){e.isVector4?Ce.set(e.x,e.y,e.z,e.w):Ce.set(e,t,n,r),F.viewport(N.copy(Ce).multiplyScalar(Fe()).round())},this.getScissor=function(e){return e.copy(we)},this.setScissor=function(e,t,n,r){e.isVector4?we.set(e.x,e.y,e.z,e.w):we.set(e,t,n,r),F.scissor(de.copy(we).multiplyScalar(Fe()).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(e){F.setScissorTest(Te=e)},this.setOpaqueSort=function(e){xe=e},this.setTransparentSort=function(e){Se=e},this.getClearColor=function(e){return e.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor(...arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(M!==null){let t=M.texture.format;e=h.has(t)}if(e){let e=M.texture.type,t=g.has(e),n=Xe.getClearColor(),r=Xe.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,P.clearBufferuiv(P.COLOR,0,_)):(v[0]=i,v[1]=a,v[2]=o,v[3]=r,P.clearBufferiv(P.COLOR,0,v))}else r|=P.COLOR_BUFFER_BIT}t&&(r|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&P.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),D=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,ot,!1),t.removeEventListener(`webglcontextrestored`,st,!1),t.removeEventListener(`webglcontextcreationerror`,ct,!1),Xe.dispose(),Ke.dispose(),qe.dispose(),L.dispose(),I.dispose(),Be.dispose(),Ue.dispose(),He.dispose(),tt.dispose(),nt.dispose(),We.dispose(),it.dispose(),it.removeEventListener(`sessionstart`,vt),it.removeEventListener(`sessionend`,yt),xt.stop()};function ot(e){e.preventDefault(),_t(`WebGLRenderer: Context Lost.`),E=!0}function st(){_t(`WebGLRenderer: Context Restored.`),E=!1;let e=ze.autoReset,t=Ye.enabled,n=Ye.autoUpdate,r=Ye.needsUpdate,i=Ye.type;rt(),ze.autoReset=e,Ye.enabled=t,Ye.autoUpdate=n,Ye.needsUpdate=r,Ye.type=i}function ct(e){z(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function lt(e){let t=e.target;t.removeEventListener(`dispose`,lt),ut(t)}function ut(e){ft(e),I.remove(e)}function ft(e){let t=I.get(e).programs;t!==void 0&&(t.forEach(function(e){We.releaseProgram(e)}),e.isShaderMaterial&&We.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Ne);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=jt(e,t,n,r,i);F.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=He.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;tt.setup(i,r,s,n,c);let h,g=Qe;if(c!==null&&(h=Ve.get(c),g=$e,g.setIndex(h)),i.isMesh)r.wireframe===!0?(F.setLineWidth(r.wireframeLinewidth*Fe()),g.setMode(P.LINES)):g.setMode(P.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),F.setLineWidth(e*Fe()),i.isLineSegments?g.setMode(P.LINES):i.isLineLoop?g.setMode(P.LINE_LOOP):g.setMode(P.LINE_STRIP)}else i.isPoints?g.setMode(P.POINTS):i.isSprite&&g.setMode(P.TRIANGLES);if(i.isBatchedMesh){if(Le.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Ve.get(c).bytesPerElement:1,o=I.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(P,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function pt(e,t,n,r){D!==null&&e.isNodeMaterial&&D.setObject(r,e),Oe===!0&&Je.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,B(e,t,r),e.side=0,e.needsUpdate=!0,B(e,t,r),e.side=2):B(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),D!==null&&D.renderStart(e,t,n),x=qe.get(n),x.init(t),C.push(x),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),x.setupLights(),D!==null&&D.updateLights(x.state.lightsArray),ke=this.localClippingEnabled,Oe=Je.init(this.clippingPlanes,ke),Oe===!0&&Je.setGlobalState(this.clippingPlanes,t),D!==null&&Ye.render(x.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];pt(o,n,t,e),r.add(o)}else pt(i,n,t,e),r.add(i)}}),x=C.pop(),D!==null&&D.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=I.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Le.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let mt=null;function gt(e){mt&&mt(e)}function vt(){xt.stop()}function yt(){xt.start()}let xt=new Ac;xt.setAnimationLoop(gt),typeof self<`u`&&xt.setContext(self),this.setAnimationLoop=function(e){mt=e,it.setAnimationLoop(e),e===null?xt.stop():xt.start()},it.addEventListener(`sessionstart`,vt),it.addEventListener(`sessionend`,yt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){z(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(E===!0)return;D!==null&&D.renderStart(e,t);let n=it.enabled===!0&&it.isPresenting===!0,r=w!==null&&(M===null||n)&&w.begin(T,M);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(it.cameraAutoUpdate===!0&&it.updateCamera(t),t=it.getCamera()),e.isScene===!0&&e.onBeforeRender(T,e,t,M),x=qe.get(e,C.length),x.init(t),x.state.textureUnits=L.getTextureUnits(),C.push(x),Ae.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),t.isArrayCamera?De.setFromArrayCamera(t):Ee.setFromProjectionMatrix(Ae,dt,t.reversedDepth),ke=this.localClippingEnabled,Oe=Je.init(this.clippingPlanes,ke),b=Ke.get(e,S.length),b.init(),S.push(b),this.info.render.frame++,it.enabled===!0&&it.isPresenting===!0){let e=T.xr.getDepthSensingMesh();e!==null&&St(e,t,-1/0,T.sortObjects)}St(e,t,0,T.sortObjects),b.finish(),D!==null&&D.updateLights(x.state.lightsArray),T.sortObjects===!0&&b.sort(xe,Se),Pe=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,Pe&&Xe.addToRenderList(b,e),this.info.autoReset===!0&&this.info.reset(),Oe===!0&&Je.beginShadows();let i=x.state.shadowsArray;if(Ye.render(i,e,t),Oe===!0&&Je.endShadows(),(r&&w.hasRenderPass())===!1){let n=b.opaque,r=b.transmissive;if(x.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];wt(n,r,e,a)}Pe&&Xe.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];Ct(b,e,n,n.viewport)}}else r.length>0&&wt(n,r,e,t),Pe&&Xe.render(e),Ct(b,e,t)}M!==null&&ie===0&&(L.updateMultisampleRenderTarget(M),L.updateRenderTargetMipmap(M)),r&&w.end(T),e.isScene===!0&&e.onAfterRender(T,e,t),tt.resetDefaultState(),le=-1,ue=null,C.pop(),C.length>0?(x=C[C.length-1],L.setTextureUnits(x.state.textureUnits),Oe===!0&&Je.setGlobalState(T.clippingPlanes,x.state.camera)):x=null,S.pop(),b=S.length>0?S[S.length-1]:null,D!==null&&D.renderEnd()};function St(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)x.pushLight(e),e.castShadow&&x.pushShadow(e);else if(e.isSprite){let i=t.isArrayCamera?De:Ee;if(!e.frustumCulled||e.intersectsFrustum(i)){r&&Me.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Ae);let i=Ue.update(e),a=e.material;a.visible&&b.push(e,i,a,n,Me.z,null,t)}}else if(e.isMesh||e.isLine||e.isPoints){let i=t.isArrayCamera?De:Ee;if(!e.frustumCulled||e.intersectsFrustum(i)){let i=Ue.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),Me.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Me.copy(e.boundingSphere.center)),Me.applyMatrix4(e.matrixWorld).applyMatrix4(Ae)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&b.push(e,i,c,n,Me.z,s,t)}}else a.visible&&b.push(e,i,a,n,Me.z,null,t)}}}let i=e.children;for(let e=0,a=i.length;e<a;e++)St(i[e],t,n,r)}function Ct(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;x.setupLightsView(n),Oe===!0&&Je.setGlobalState(T.clippingPlanes,n),r&&F.viewport(N.copy(r)),i.length>0&&Tt(i,t,n),a.length>0&&Tt(a,t,n),o.length>0&&Tt(o,t,n),F.buffers.depth.setTest(!0),F.buffers.depth.setMask(!0),F.buffers.color.setMask(!0),F.setPolygonOffset(!1)}function wt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[r.id]===void 0){let e=Le.has(`EXT_color_buffer_half_float`)||Le.has(`EXT_color_buffer_float`);x.state.transmissionRenderTarget[r.id]=new _n(1,1,{generateMipmaps:!0,type:e?ae:k,minFilter:ee,samples:Math.max(4,Re.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:rn.workingColorSpace})}let a=x.state.transmissionRenderTarget[r.id],o=r.viewport||N;a.setSize(o.z*T.transmissionResolutionScale,o.w*T.transmissionResolutionScale);let s=T.getRenderTarget(),c=T.getActiveCubeFace(),l=T.getActiveMipmapLevel();T.setRenderTarget(a),T.getClearColor(pe),me=T.getClearAlpha(),me<1&&T.setClearColor(16777215,.5),T.clear(),Pe&&Xe.render(n);let u=T.toneMapping;T.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),x.setupLightsView(r),Oe===!0&&Je.setGlobalState(T.clippingPlanes,r),Tt(e,n,r),L.updateMultisampleRenderTarget(a),L.updateRenderTargetMipmap(a),Le.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,Et(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(L.updateMultisampleRenderTarget(a),L.updateRenderTargetMipmap(a))}T.setRenderTarget(s,c,l),T.setClearColor(pe,me),d!==void 0&&(r.viewport=d),T.toneMapping=u}function Tt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&Et(o,t,n,s,l,c)}}function Et(e,t,n,r,i,a){D!==null&&i.isNodeMaterial&&D.setObject(e,i),e.onBeforeRender(T,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(T,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=2):T.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(T,t,n,r,i,a)}function Dt(e){let t=0;for(let n of e)n.texture!==null&&t++;return t}function B(e,t,n){t.isScene!==!0&&(t=Ne);let r=I.get(e),i=x.state.lights,a=x.state.shadowsArray,o=i.state.version,s=We.getParameters(e,i.state,a,t,n,x.state.lightProbeGridArray),c=We.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Be.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,lt),l=new Map,r.programs=l,r.programVariants=new Map);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return At(e,s),d}else s.uniforms=We.getUniforms(e),D!==null&&e.isNodeMaterial&&D.build(e,n,s),e.onBeforeCompile(s,T),d=We.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Je.uniform),At(e,s),r.needsLights=Nt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.numLightProbeGrids=Dt(x.state.lightProbeGridArray),r.currentProgram=d,r.uniformsList=null,d}function Ot(e,t,n,r,i){let a=I.get(e),o=a.currentProgram.id+`,`+r+`,`+i,s=a.programVariants.get(o);return s===void 0?(s=B(e,t,n),a.programVariants.set(o,s)):(a.currentProgram=s,a.uniformsList=null,a.outputColorSpace=r,a.toneMapping=i),s}function kt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Su.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function At(e,t){let n=I.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function jt(e,t,n,r,i){t.isScene!==!0&&(t=Ne),L.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=M===null?T.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:rn.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Be.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(h=T.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=I.get(r),b=x.state.lights;if(Oe===!0&&(ke===!0||e!==ue)){let t=e===ue&&r.id===le;Je.setState(r,e,t)}let S=!1,C=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==b.state.version||i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?S=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Je.numPlanes||v.numIntersection!==Je.numIntersection)?S=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.morphTargetsCount===_&&v.numLightProbeGrids===Dt(x.state.lightProbeGridArray)?(v.outputColorSpace!==s||v.toneMapping!==h)&&(C=!0):S=!0:S=!0:(S=!0,v.__version=r.version);let w=v.currentProgram;(S===!0||C===!0)&&(w=C===!0?Ot(r,t,i,s,h):B(r,t,i),D&&r.isNodeMaterial&&D.onUpdateProgram(r,w,v));let E=!1,O=!1,ee=!1,k=w.getUniforms(),A=v.uniforms;if(F.useProgram(w.program)&&(E=!0,O=!0,ee=!0),r.id!==le&&(le=r.id,O=!0),E||ue!==e){F.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),k.setValue(P,`projectionMatrix`,e.projectionMatrix),k.setValue(P,`viewMatrix`,e.matrixWorldInverse);let t=k.map.cameraPosition;t!==void 0&&t.setValue(P,je.setFromMatrixPosition(e.matrixWorld)),Re.logarithmicDepthBuffer&&k.setValue(P,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&k.setValue(P,`isOrthographic`,e.isOrthographicCamera===!0),ue!==e&&(ue=e,O=!0,ee=!0)}if(v.needsLights&&(b.state.sunShadowMap.length>0&&k.setValue(P,`sunShadowMap`,b.state.sunShadowMap,L),b.state.directionalShadowMap.length>0&&k.setValue(P,`directionalShadowMap`,b.state.directionalShadowMap,L),b.state.spotShadowMap.length>0&&k.setValue(P,`spotShadowMap`,b.state.spotShadowMap,L),b.state.pointShadowMap.length>0&&k.setValue(P,`pointShadowMap`,b.state.pointShadowMap,L)),i.isSkinnedMesh){k.setOptional(P,i,`bindMatrix`),k.setOptional(P,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),k.setValue(P,`boneTexture`,e.boneTexture,L))}i.isBatchedMesh&&(k.setOptional(P,i,`batchingTexture`),k.setValue(P,`batchingTexture`,i._matricesTexture,L),k.setOptional(P,i,`batchingIdTexture`),k.setValue(P,`batchingIdTexture`,i._indirectTexture,L),k.setOptional(P,i,`batchingColorTexture`),i._colorsTexture!==null&&k.setValue(P,`batchingColorTexture`,i._colorsTexture,L));let j=n.morphAttributes;if((j.position!==void 0||j.normal!==void 0||j.color!==void 0)&&Ze.update(i,n,w),(O||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,k.setValue(P,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(A.envMapIntensity.value=t.environmentIntensity),A.dfgLUT!==void 0&&(A.dfgLUT.value=zd()),O){if(k.setValue(P,`toneMappingExposure`,T.toneMappingExposure),v.needsLights&&Mt(A,ee),a&&r.fog===!0&&Ge.refreshFogUniforms(A,a),Ge.refreshMaterialUniforms(A,r,be,ye,x.state.transmissionRenderTarget[e.id]),v.needsLights&&v.numLightProbeGrids>0){let e=y,t=0;for(let n of x.state.lightProbeGridArray)n.texture!==null&&(e.textures[t]=n.texture,e.min[t]=n.boundingBox.min,e.max[t]=n.boundingBox.max,e.resolution[t]=n.resolution,t++);for(let n in e)e[n].length=t;A.probesSH.value=e.textures,A.probesMin.value=e.min,A.probesMax.value=e.max,A.probesResolution.value=e.resolution}Su.upload(P,kt(v),A,L)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Su.upload(P,kt(v),A,L),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&k.setValue(P,`center`,i.center),k.setValue(P,`modelViewMatrix`,i.modelViewMatrix),k.setValue(P,`normalMatrix`,i.normalMatrix),k.setValue(P,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];nt.update(n,w),nt.bind(n,w)}}return w}function Mt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Nt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return ne},this.getActiveMipmapLevel=function(){return ie},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(e,t,n){let r=I.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),I.get(e.texture).__webglTexture=t,I.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=I.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){M=e,ne=t,ie=n;let r=null,i=!1,a=!1;if(e){let o=I.get(e);if(o.__useDefaultFramebuffer!==void 0){F.bindFramebuffer(P.FRAMEBUFFER,o.__webglFramebuffer),N.copy(e.viewport),de.copy(e.scissor),fe=e.scissorTest,F.viewport(N),F.scissor(de),F.setScissorTest(fe),le=-1;return}if(o.__webglFramebuffer===void 0)L.setupRenderTarget(e);else if(o.__hasExternalTextures)L.rebindTextures(e,I.get(e.texture).__webglTexture,I.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&I.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);L.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=I.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&L.useMultisampledRTT(e)===!1?I.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,N.copy(e.viewport),de.copy(e.scissor),fe=e.scissorTest}else N.copy(Ce).multiplyScalar(be).floor(),de.copy(we).multiplyScalar(be).floor(),fe=Te;if(n!==0&&(r=O),F.bindFramebuffer(P.FRAMEBUFFER,r)&&F.drawBuffers(e,r),F.viewport(N),F.scissor(de),F.setScissorTest(fe),i){let r=I.get(e.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=I.get(e.textures[t]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=I.get(e.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,t.__webglTexture,n)}le=-1};function Pt(e){let t=I.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Re.textureFormatReadable(e.format),t.__typeReadable=Re.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){z(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=I.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){F.bindFramebuffer(P.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+s);let u=Pt(o);if(u.__formatReadable===!1){z(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){z(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&P.readPixels(t,n,r,i,et.convert(c),et.convert(l),a)}finally{let e=M===null?null:I.get(M).__webglFramebuffer;F.bindFramebuffer(P.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=I.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){F.bindFramebuffer(P.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+s);let d=Pt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,f),P.bufferData(P.PIXEL_PACK_BUFFER,a.byteLength,P.STREAM_READ),P.readPixels(t,n,r,i,et.convert(l),et.convert(u),0),P.bindBuffer(P.PIXEL_PACK_BUFFER,null);let p=M===null?null:I.get(M).__webglFramebuffer;F.bindFramebuffer(P.FRAMEBUFFER,p);let m=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await bt(P,m,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,f),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,a),P.bindBuffer(P.PIXEL_PACK_BUFFER,null),P.deleteBuffer(f),P.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;L.setTexture2D(e,0),P.copyTexSubImage2D(P.TEXTURE_2D,n,0,0,o,s,i,a),F.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=et.convert(t.format),_=et.convert(t.type),v;t.isData3DTexture?(L.setTexture3D(t,0),v=P.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(L.setTexture2DArray(t,0),v=P.TEXTURE_2D_ARRAY):(L.setTexture2D(t,0),v=P.TEXTURE_2D),F.activeTexture(P.TEXTURE0),F.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,t.flipY),F.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),F.pixelStorei(P.UNPACK_ALIGNMENT,t.unpackAlignment);let y=F.getParameter(P.UNPACK_ROW_LENGTH),b=F.getParameter(P.UNPACK_IMAGE_HEIGHT),x=F.getParameter(P.UNPACK_SKIP_PIXELS),S=F.getParameter(P.UNPACK_SKIP_ROWS),C=F.getParameter(P.UNPACK_SKIP_IMAGES);F.pixelStorei(P.UNPACK_ROW_LENGTH,h.width),F.pixelStorei(P.UNPACK_IMAGE_HEIGHT,h.height),F.pixelStorei(P.UNPACK_SKIP_PIXELS,l),F.pixelStorei(P.UNPACK_SKIP_ROWS,u),F.pixelStorei(P.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=I.get(e),r=I.get(t),h=I.get(n.__renderTarget),g=I.get(r.__renderTarget);F.bindFramebuffer(P.READ_FRAMEBUFFER,h.__webglFramebuffer),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,I.get(e).__webglTexture,i,d+n),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,I.get(t).__webglTexture,a,m+n)),P.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,P.DEPTH_BUFFER_BIT,P.NEAREST);F.bindFramebuffer(P.READ_FRAMEBUFFER,null),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||I.has(e)){let n=I.get(e),r=I.get(t);F.bindFramebuffer(P.READ_FRAMEBUFFER,A),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,j);for(let e=0;e<c;e++)w?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,n.__webglTexture,i),T?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,r.__webglTexture,a),i===0?T?P.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):P.copyTexSubImage2D(v,a,f,p,l,u,o,s):P.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,P.COLOR_BUFFER_BIT,P.NEAREST);F.bindFramebuffer(P.READ_FRAMEBUFFER,null),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?P.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?P.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):P.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):P.texSubImage2D(P.TEXTURE_2D,a,f,p,o,s,g,_,h);F.pixelStorei(P.UNPACK_ROW_LENGTH,y),F.pixelStorei(P.UNPACK_IMAGE_HEIGHT,b),F.pixelStorei(P.UNPACK_SKIP_PIXELS,x),F.pixelStorei(P.UNPACK_SKIP_ROWS,S),F.pixelStorei(P.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps===!0&&t.mipmapsAutoUpdate===!0&&P.generateMipmap(v),F.unbindTexture()},this.initRenderTarget=function(e){I.get(e).__webglFramebuffer===void 0&&L.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?L.setTextureCube(e,0):e.isData3DTexture?L.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?L.setTexture2DArray(e,0):L.setTexture2D(e,0),F.unbindTexture()},this.resetState=function(){ne=0,ie=0,M=null,F.reset(),tt.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return dt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=rn._getDrawingBufferColorSpace(e),t.unpackColorSpace=rn._getUnpackColorSpace()}},Vd=o(((e,t)=>{t.exports=function(){return typeof Promise==`function`&&Promise.prototype&&Promise.prototype.then}})),Hd=o((e=>{var t,n=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];e.getSymbolSize=function(e){if(!e)throw Error(`"version" cannot be null or undefined`);if(e<1||e>40)throw Error(`"version" should be in range from 1 to 40`);return e*4+17},e.getSymbolTotalCodewords=function(e){return n[e]},e.getBCHDigit=function(e){let t=0;for(;e!==0;)t++,e>>>=1;return t},e.setToSJISFunction=function(e){if(typeof e!=`function`)throw Error(`"toSJISFunc" is not a valid function.`);t=e},e.isKanjiModeEnabled=function(){return t!==void 0},e.toSJIS=function(e){return t(e)}})),Ud=o((e=>{e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2};function t(t){if(typeof t!=`string`)throw Error(`Param is not a string`);switch(t.toLowerCase()){case`l`:case`low`:return e.L;case`m`:case`medium`:return e.M;case`q`:case`quartile`:return e.Q;case`h`:case`high`:return e.H;default:throw Error(`Unknown EC Level: `+t)}}e.isValid=function(e){return e&&e.bit!==void 0&&e.bit>=0&&e.bit<4},e.from=function(n,r){if(e.isValid(n))return n;try{return t(n)}catch{return r}}})),Wd=o(((e,t)=>{function n(){this.buffer=[],this.length=0}n.prototype={get:function(e){let t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)==1},put:function(e,t){for(let n=0;n<t;n++)this.putBit((e>>>t-n-1&1)==1)},getLengthInBits:function(){return this.length},putBit:function(e){let t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}},t.exports=n})),Gd=o(((e,t)=>{function n(e){if(!e||e<1)throw Error(`BitMatrix size must be defined and greater than 0`);this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}n.prototype.set=function(e,t,n,r){let i=e*this.size+t;this.data[i]=n,r&&(this.reservedBit[i]=!0)},n.prototype.get=function(e,t){return this.data[e*this.size+t]},n.prototype.xor=function(e,t,n){this.data[e*this.size+t]^=n},n.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]},t.exports=n})),Kd=o((e=>{var t=Hd().getSymbolSize;e.getRowColCoords=function(e){if(e===1)return[];let n=Math.floor(e/7)+2,r=t(e),i=r===145?26:Math.ceil((r-13)/(2*n-2))*2,a=[r-7];for(let e=1;e<n-1;e++)a[e]=a[e-1]-i;return a.push(6),a.reverse()},e.getPositions=function(t){let n=[],r=e.getRowColCoords(t),i=r.length;for(let e=0;e<i;e++)for(let t=0;t<i;t++)e===0&&t===0||e===0&&t===i-1||e===i-1&&t===0||n.push([r[e],r[t]]);return n}})),qd=o((e=>{var t=Hd().getSymbolSize,n=7;e.getPositions=function(e){let r=t(e);return[[0,0],[r-n,0],[0,r-n]]}})),Jd=o((e=>{e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};var t={N1:3,N2:3,N3:40,N4:10};e.isValid=function(e){return e!=null&&e!==``&&!isNaN(e)&&e>=0&&e<=7},e.from=function(t){return e.isValid(t)?parseInt(t,10):void 0},e.getPenaltyN1=function(e){let n=e.size,r=0,i=0,a=0,o=null,s=null;for(let c=0;c<n;c++){i=a=0,o=s=null;for(let l=0;l<n;l++){let n=e.get(c,l);n===o?i++:(i>=5&&(r+=t.N1+(i-5)),o=n,i=1),n=e.get(l,c),n===s?a++:(a>=5&&(r+=t.N1+(a-5)),s=n,a=1)}i>=5&&(r+=t.N1+(i-5)),a>=5&&(r+=t.N1+(a-5))}return r},e.getPenaltyN2=function(e){let n=e.size,r=0;for(let t=0;t<n-1;t++)for(let i=0;i<n-1;i++){let n=e.get(t,i)+e.get(t,i+1)+e.get(t+1,i)+e.get(t+1,i+1);(n===4||n===0)&&r++}return r*t.N2},e.getPenaltyN3=function(e){let n=e.size,r=0,i=0,a=0;for(let t=0;t<n;t++){i=a=0;for(let o=0;o<n;o++)i=i<<1&2047|e.get(t,o),o>=10&&(i===1488||i===93)&&r++,a=a<<1&2047|e.get(o,t),o>=10&&(a===1488||a===93)&&r++}return r*t.N3},e.getPenaltyN4=function(e){let n=0,r=e.data.length;for(let t=0;t<r;t++)n+=e.data[t];return Math.abs(Math.ceil(n*100/r/5)-10)*t.N4};function n(t,n,r){switch(t){case e.Patterns.PATTERN000:return(n+r)%2==0;case e.Patterns.PATTERN001:return n%2==0;case e.Patterns.PATTERN010:return r%3==0;case e.Patterns.PATTERN011:return(n+r)%3==0;case e.Patterns.PATTERN100:return(Math.floor(n/2)+Math.floor(r/3))%2==0;case e.Patterns.PATTERN101:return n*r%2+n*r%3==0;case e.Patterns.PATTERN110:return(n*r%2+n*r%3)%2==0;case e.Patterns.PATTERN111:return(n*r%3+(n+r)%2)%2==0;default:throw Error(`bad maskPattern:`+t)}}e.applyMask=function(e,t){let r=t.size;for(let i=0;i<r;i++)for(let a=0;a<r;a++)t.isReserved(a,i)||t.xor(a,i,n(e,a,i))},e.getBestMask=function(t,n){let r=Object.keys(e.Patterns).length,i=0,a=1/0;for(let o=0;o<r;o++){n(o),e.applyMask(o,t);let r=e.getPenaltyN1(t)+e.getPenaltyN2(t)+e.getPenaltyN3(t)+e.getPenaltyN4(t);e.applyMask(o,t),r<a&&(a=r,i=o)}return i}})),Yd=o((e=>{var t=Ud(),n=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],r=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];e.getBlocksCount=function(e,r){switch(r){case t.L:return n[(e-1)*4+0];case t.M:return n[(e-1)*4+1];case t.Q:return n[(e-1)*4+2];case t.H:return n[(e-1)*4+3];default:return}},e.getTotalCodewordsCount=function(e,n){switch(n){case t.L:return r[(e-1)*4+0];case t.M:return r[(e-1)*4+1];case t.Q:return r[(e-1)*4+2];case t.H:return r[(e-1)*4+3];default:return}}})),Xd=o((e=>{var t=new Uint8Array(512),n=new Uint8Array(256);(function(){let e=1;for(let r=0;r<255;r++)t[r]=e,n[e]=r,e<<=1,e&256&&(e^=285);for(let e=255;e<512;e++)t[e]=t[e-255]})(),e.log=function(e){if(e<1)throw Error(`log(`+e+`)`);return n[e]},e.exp=function(e){return t[e]},e.mul=function(e,r){return e===0||r===0?0:t[n[e]+n[r]]}})),Zd=o((e=>{var t=Xd();e.mul=function(e,n){let r=new Uint8Array(e.length+n.length-1);for(let i=0;i<e.length;i++)for(let a=0;a<n.length;a++)r[i+a]^=t.mul(e[i],n[a]);return r},e.mod=function(e,n){let r=new Uint8Array(e);for(;r.length-n.length>=0;){let e=r[0];for(let i=0;i<n.length;i++)r[i]^=t.mul(n[i],e);let i=0;for(;i<r.length&&r[i]===0;)i++;r=r.slice(i)}return r},e.generateECPolynomial=function(n){let r=new Uint8Array([1]);for(let i=0;i<n;i++)r=e.mul(r,new Uint8Array([1,t.exp(i)]));return r}})),Qd=o(((e,t)=>{var n=Zd();function r(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}r.prototype.initialize=function(e){this.degree=e,this.genPoly=n.generateECPolynomial(this.degree)},r.prototype.encode=function(e){if(!this.genPoly)throw Error(`Encoder not initialized`);let t=new Uint8Array(e.length+this.degree);t.set(e);let r=n.mod(t,this.genPoly),i=this.degree-r.length;if(i>0){let e=new Uint8Array(this.degree);return e.set(r,i),e}return r},t.exports=r})),$d=o((e=>{e.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40}})),ef=o((e=>{var t=`[0-9]+`,n=`[A-Z $%*+\\-./:]+`,r=`(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+`;r=r.replace(/u/g,`\\u`);var i=`(?:(?![A-Z0-9 $%*+\\-./:]|`+r+`)(?:.|[\r
]))+`;e.KANJI=new RegExp(r,`g`),e.BYTE_KANJI=RegExp(`[^A-Z0-9 $%*+\\-./:]+`,`g`),e.BYTE=new RegExp(i,`g`),e.NUMERIC=new RegExp(t,`g`),e.ALPHANUMERIC=new RegExp(n,`g`);var a=RegExp(`^`+r+`$`),o=RegExp(`^[0-9]+$`),s=RegExp(`^[A-Z0-9 $%*+\\-./:]+$`);e.testKanji=function(e){return a.test(e)},e.testNumeric=function(e){return o.test(e)},e.testAlphanumeric=function(e){return s.test(e)}})),tf=o((e=>{var t=$d(),n=ef();e.NUMERIC={id:`Numeric`,bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:`Alphanumeric`,bit:2,ccBits:[9,11,13]},e.BYTE={id:`Byte`,bit:4,ccBits:[8,16,16]},e.KANJI={id:`Kanji`,bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(e,n){if(!e.ccBits)throw Error(`Invalid mode: `+e);if(!t.isValid(n))throw Error(`Invalid version: `+n);return n>=1&&n<10?e.ccBits[0]:n<27?e.ccBits[1]:e.ccBits[2]},e.getBestModeForData=function(t){return n.testNumeric(t)?e.NUMERIC:n.testAlphanumeric(t)?e.ALPHANUMERIC:n.testKanji(t)?e.KANJI:e.BYTE},e.toString=function(e){if(e&&e.id)return e.id;throw Error(`Invalid mode`)},e.isValid=function(e){return e&&e.bit&&e.ccBits};function r(t){if(typeof t!=`string`)throw Error(`Param is not a string`);switch(t.toLowerCase()){case`numeric`:return e.NUMERIC;case`alphanumeric`:return e.ALPHANUMERIC;case`kanji`:return e.KANJI;case`byte`:return e.BYTE;default:throw Error(`Unknown mode: `+t)}}e.from=function(t,n){if(e.isValid(t))return t;try{return r(t)}catch{return n}}})),nf=o((e=>{var t=Hd(),n=Yd(),r=Ud(),i=tf(),a=$d(),o=7973,s=t.getBCHDigit(o);function c(t,n,r){for(let i=1;i<=40;i++)if(n<=e.getCapacity(i,r,t))return i}function l(e,t){return i.getCharCountIndicator(e,t)+4}function u(e,t){let n=0;return e.forEach(function(e){let r=l(e.mode,t);n+=r+e.getBitsLength()}),n}function d(t,n){for(let r=1;r<=40;r++)if(u(t,r)<=e.getCapacity(r,n,i.MIXED))return r}e.from=function(e,t){return a.isValid(e)?parseInt(e,10):t},e.getCapacity=function(e,r,o){if(!a.isValid(e))throw Error(`Invalid QR Code version`);o===void 0&&(o=i.BYTE);let s=(t.getSymbolTotalCodewords(e)-n.getTotalCodewordsCount(e,r))*8;if(o===i.MIXED)return s;let c=s-l(o,e);switch(o){case i.NUMERIC:return Math.floor(c/10*3);case i.ALPHANUMERIC:return Math.floor(c/11*2);case i.KANJI:return Math.floor(c/13);case i.BYTE:default:return Math.floor(c/8)}},e.getBestVersionForData=function(e,t){let n,i=r.from(t,r.M);if(Array.isArray(e)){if(e.length>1)return d(e,i);if(e.length===0)return 1;n=e[0]}else n=e;return c(n.mode,n.getLength(),i)},e.getEncodedBits=function(e){if(!a.isValid(e)||e<7)throw Error(`Invalid QR Code version`);let n=e<<12;for(;t.getBCHDigit(n)-s>=0;)n^=o<<t.getBCHDigit(n)-s;return e<<12|n}})),rf=o((e=>{var t=Hd(),n=1335,r=21522,i=t.getBCHDigit(n);e.getEncodedBits=function(e,a){let o=e.bit<<3|a,s=o<<10;for(;t.getBCHDigit(s)-i>=0;)s^=n<<t.getBCHDigit(s)-i;return(o<<10|s)^r}})),af=o(((e,t)=>{var n=tf();function r(e){this.mode=n.NUMERIC,this.data=e.toString()}r.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)},r.prototype.getLength=function(){return this.data.length},r.prototype.getBitsLength=function(){return r.getBitsLength(this.data.length)},r.prototype.write=function(e){let t,n,r;for(t=0;t+3<=this.data.length;t+=3)n=this.data.substr(t,3),r=parseInt(n,10),e.put(r,10);let i=this.data.length-t;i>0&&(n=this.data.substr(t),r=parseInt(n,10),e.put(r,i*3+1))},t.exports=r})),of=o(((e,t)=>{var n=tf(),r=`0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:`.split(``);function i(e){this.mode=n.ALPHANUMERIC,this.data=e}i.getBitsLength=function(e){return 11*Math.floor(e/2)+e%2*6},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(e){let t=0;for(;t+2<=this.data.length;t+=2){let n=r.indexOf(this.data[t])*45;n+=r.indexOf(this.data[t+1]),e.put(n,11)}this.data.length%2&&e.put(r.indexOf(this.data[t]),6)},t.exports=i})),sf=o(((e,t)=>{var n=tf();function r(e){this.mode=n.BYTE,this.data=typeof e==`string`?new TextEncoder().encode(e):new Uint8Array(e)}r.getBitsLength=function(e){return e*8},r.prototype.getLength=function(){return this.data.length},r.prototype.getBitsLength=function(){return r.getBitsLength(this.data.length)},r.prototype.write=function(e){for(let t=0,n=this.data.length;t<n;t++)e.put(this.data[t],8)},t.exports=r})),cf=o(((e,t)=>{var n=tf(),r=Hd();function i(e){this.mode=n.KANJI,this.data=e}i.getBitsLength=function(e){return e*13},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(e){let t=0;for(;t<this.data.length;t++){let n=r.toSJIS(this.data[t]);if(n>=33088&&n<=40956)n-=33088;else if(n>=57408&&n<=60351)n-=49472;else throw Error(`Invalid SJIS character: `+this.data[t]+`
Make sure your charset is UTF-8`);n=(n>>>8&255)*192+(n&255),e.put(n,13)}},t.exports=i})),lf=o(((e,t)=>{var n={single_source_shortest_paths:function(e,t,r){var i={},a={};a[t]=0;var o=n.PriorityQueue.make();o.push(t,0);for(var s,c,l,u,d,f,p,m,h;!o.empty();)for(l in s=o.pop(),c=s.value,u=s.cost,d=e[c]||{},d)d.hasOwnProperty(l)&&(f=d[l],p=u+f,m=a[l],h=a[l]===void 0,(h||m>p)&&(a[l]=p,o.push(l,p),i[l]=c));if(r!==void 0&&a[r]===void 0){var g=[`Could not find a path from `,t,` to `,r,`.`].join(``);throw Error(g)}return i},extract_shortest_path_from_predecessor_list:function(e,t){for(var n=[],r=t;r;)n.push(r),e[r],r=e[r];return n.reverse(),n},find_path:function(e,t,r){var i=n.single_source_shortest_paths(e,t,r);return n.extract_shortest_path_from_predecessor_list(i,r)},PriorityQueue:{make:function(e){var t=n.PriorityQueue,r={},i;for(i in e=e||{},t)t.hasOwnProperty(i)&&(r[i]=t[i]);return r.queue=[],r.sorter=e.sorter||t.default_sorter,r},default_sorter:function(e,t){return e.cost-t.cost},push:function(e,t){var n={value:e,cost:t};this.queue.push(n),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};t!==void 0&&(t.exports=n)})),uf=o((e=>{var t=tf(),n=af(),r=of(),i=sf(),a=cf(),o=ef(),s=Hd(),c=lf();function l(e){return unescape(encodeURIComponent(e)).length}function u(e,t,n){let r=[],i;for(;(i=e.exec(n))!==null;)r.push({data:i[0],index:i.index,mode:t,length:i[0].length});return r}function d(e){let n=u(o.NUMERIC,t.NUMERIC,e),r=u(o.ALPHANUMERIC,t.ALPHANUMERIC,e),i,a;return s.isKanjiModeEnabled()?(i=u(o.BYTE,t.BYTE,e),a=u(o.KANJI,t.KANJI,e)):(i=u(o.BYTE_KANJI,t.BYTE,e),a=[]),n.concat(r,i,a).sort(function(e,t){return e.index-t.index}).map(function(e){return{data:e.data,mode:e.mode,length:e.length}})}function f(e,o){switch(o){case t.NUMERIC:return n.getBitsLength(e);case t.ALPHANUMERIC:return r.getBitsLength(e);case t.KANJI:return a.getBitsLength(e);case t.BYTE:return i.getBitsLength(e)}}function p(e){return e.reduce(function(e,t){let n=e.length-1>=0?e[e.length-1]:null;return n&&n.mode===t.mode?(e[e.length-1].data+=t.data,e):(e.push(t),e)},[])}function m(e){let n=[];for(let r=0;r<e.length;r++){let i=e[r];switch(i.mode){case t.NUMERIC:n.push([i,{data:i.data,mode:t.ALPHANUMERIC,length:i.length},{data:i.data,mode:t.BYTE,length:i.length}]);break;case t.ALPHANUMERIC:n.push([i,{data:i.data,mode:t.BYTE,length:i.length}]);break;case t.KANJI:n.push([i,{data:i.data,mode:t.BYTE,length:l(i.data)}]);break;case t.BYTE:n.push([{data:i.data,mode:t.BYTE,length:l(i.data)}])}}return n}function h(e,n){let r={},i={start:{}},a=[`start`];for(let o=0;o<e.length;o++){let s=e[o],c=[];for(let e=0;e<s.length;e++){let l=s[e],u=``+o+e;c.push(u),r[u]={node:l,lastCount:0},i[u]={};for(let e=0;e<a.length;e++){let o=a[e];r[o]&&r[o].node.mode===l.mode?(i[o][u]=f(r[o].lastCount+l.length,l.mode)-f(r[o].lastCount,l.mode),r[o].lastCount+=l.length):(r[o]&&(r[o].lastCount=l.length),i[o][u]=f(l.length,l.mode)+4+t.getCharCountIndicator(l.mode,n))}}a=c}for(let e=0;e<a.length;e++)i[a[e]].end=0;return{map:i,table:r}}function g(e,o){let c,l=t.getBestModeForData(e);if(c=t.from(o,l),c!==t.BYTE&&c.bit<l.bit)throw Error(`"`+e+`" cannot be encoded with mode `+t.toString(c)+`.
 Suggested mode is: `+t.toString(l));switch(c===t.KANJI&&!s.isKanjiModeEnabled()&&(c=t.BYTE),c){case t.NUMERIC:return new n(e);case t.ALPHANUMERIC:return new r(e);case t.KANJI:return new a(e);case t.BYTE:return new i(e)}}e.fromArray=function(e){return e.reduce(function(e,t){return typeof t==`string`?e.push(g(t,null)):t.data&&e.push(g(t.data,t.mode)),e},[])},e.fromString=function(t,n){let r=h(m(d(t,s.isKanjiModeEnabled())),n),i=c.find_path(r.map,`start`,`end`),a=[];for(let e=1;e<i.length-1;e++)a.push(r.table[i[e]].node);return e.fromArray(p(a))},e.rawSplit=function(t){return e.fromArray(d(t,s.isKanjiModeEnabled()))}})),df=o((e=>{var t=Hd(),n=Ud(),r=Wd(),i=Gd(),a=Kd(),o=qd(),s=Jd(),c=Yd(),l=Qd(),u=nf(),d=rf(),f=tf(),p=uf();function m(e,t){let n=e.size,r=o.getPositions(t);for(let t=0;t<r.length;t++){let i=r[t][0],a=r[t][1];for(let t=-1;t<=7;t++)if(!(i+t<=-1||n<=i+t))for(let r=-1;r<=7;r++)a+r<=-1||n<=a+r||(t>=0&&t<=6&&(r===0||r===6)||r>=0&&r<=6&&(t===0||t===6)||t>=2&&t<=4&&r>=2&&r<=4?e.set(i+t,a+r,!0,!0):e.set(i+t,a+r,!1,!0))}}function h(e){let t=e.size;for(let n=8;n<t-8;n++){let t=n%2==0;e.set(n,6,t,!0),e.set(6,n,t,!0)}}function g(e,t){let n=a.getPositions(t);for(let t=0;t<n.length;t++){let r=n[t][0],i=n[t][1];for(let t=-2;t<=2;t++)for(let n=-2;n<=2;n++)t===-2||t===2||n===-2||n===2||t===0&&n===0?e.set(r+t,i+n,!0,!0):e.set(r+t,i+n,!1,!0)}}function _(e,t){let n=e.size,r=u.getEncodedBits(t),i,a,o;for(let t=0;t<18;t++)i=Math.floor(t/3),a=t%3+n-8-3,o=(r>>t&1)==1,e.set(i,a,o,!0),e.set(a,i,o,!0)}function v(e,t,n){let r=e.size,i=d.getEncodedBits(t,n),a,o;for(a=0;a<15;a++)o=(i>>a&1)==1,a<6?e.set(a,8,o,!0):a<8?e.set(a+1,8,o,!0):e.set(r-15+a,8,o,!0),a<8?e.set(8,r-a-1,o,!0):a<9?e.set(8,15-a-1+1,o,!0):e.set(8,15-a-1,o,!0);e.set(r-8,8,1,!0)}function y(e,t){let n=e.size,r=-1,i=n-1,a=7,o=0;for(let s=n-1;s>0;s-=2)for(s===6&&s--;;){for(let n=0;n<2;n++)if(!e.isReserved(i,s-n)){let r=!1;o<t.length&&(r=(t[o]>>>a&1)==1),e.set(i,s-n,r),a--,a===-1&&(o++,a=7)}if(i+=r,i<0||n<=i){i-=r,r=-r;break}}}function b(e,n,i){let a=new r;i.forEach(function(t){a.put(t.mode.bit,4),a.put(t.getLength(),f.getCharCountIndicator(t.mode,e)),t.write(a)});let o=(t.getSymbolTotalCodewords(e)-c.getTotalCodewordsCount(e,n))*8;for(a.getLengthInBits()+4<=o&&a.put(0,4);a.getLengthInBits()%8!=0;)a.putBit(0);let s=(o-a.getLengthInBits())/8;for(let e=0;e<s;e++)a.put(e%2?17:236,8);return x(a,e,n)}function x(e,n,r){let i=t.getSymbolTotalCodewords(n),a=i-c.getTotalCodewordsCount(n,r),o=c.getBlocksCount(n,r),s=o-i%o,u=Math.floor(i/o),d=Math.floor(a/o),f=d+1,p=u-d,m=new l(p),h=0,g=Array(o),_=Array(o),v=0,y=new Uint8Array(e.buffer);for(let e=0;e<o;e++){let t=e<s?d:f;g[e]=y.slice(h,h+t),_[e]=m.encode(g[e]),h+=t,v=Math.max(v,t)}let b=new Uint8Array(i),x=0,S,C;for(S=0;S<v;S++)for(C=0;C<o;C++)S<g[C].length&&(b[x++]=g[C][S]);for(S=0;S<p;S++)for(C=0;C<o;C++)b[x++]=_[C][S];return b}function S(e,n,r,a){let o;if(Array.isArray(e))o=p.fromArray(e);else if(typeof e==`string`){let t=n;if(!t){let n=p.rawSplit(e);t=u.getBestVersionForData(n,r)}o=p.fromString(e,t||40)}else throw Error(`Invalid data`);let c=u.getBestVersionForData(o,r);if(!c)throw Error(`The amount of data is too big to be stored in a QR Code`);if(!n)n=c;else if(n<c)throw Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+c+`.
`);let l=b(n,r,o),d=new i(t.getSymbolSize(n));return m(d,n),h(d),g(d,n),v(d,r,0),n>=7&&_(d,n),y(d,l),isNaN(a)&&(a=s.getBestMask(d,v.bind(null,d,r))),s.applyMask(a,d),v(d,r,a),{modules:d,version:n,errorCorrectionLevel:r,maskPattern:a,segments:o}}e.create=function(e,r){if(e===void 0||e===``)throw Error(`No input text`);let i=n.M,a,o;return r!==void 0&&(i=n.from(r.errorCorrectionLevel,n.M),a=u.from(r.version),o=s.from(r.maskPattern),r.toSJISFunc&&t.setToSJISFunction(r.toSJISFunc)),S(e,a,i,o)}})),ff=o((e=>{function t(e){if(typeof e==`number`&&(e=e.toString()),typeof e!=`string`)throw Error(`Color should be defined as hex string`);let t=e.slice().replace(`#`,``).split(``);if(t.length<3||t.length===5||t.length>8)throw Error(`Invalid hex color: `+e);(t.length===3||t.length===4)&&(t=Array.prototype.concat.apply([],t.map(function(e){return[e,e]}))),t.length===6&&t.push(`F`,`F`);let n=parseInt(t.join(``),16);return{r:n>>24&255,g:n>>16&255,b:n>>8&255,a:n&255,hex:`#`+t.slice(0,6).join(``)}}e.getOptions=function(e){e||(e={}),e.color||(e.color={});let n=e.margin===void 0||e.margin===null||e.margin<0?4:e.margin,r=e.width&&e.width>=21?e.width:void 0,i=e.scale||4;return{width:r,scale:r?4:i,margin:n,color:{dark:t(e.color.dark||`#000000ff`),light:t(e.color.light||`#ffffffff`)},type:e.type,rendererOpts:e.rendererOpts||{}}},e.getScale=function(e,t){return t.width&&t.width>=e+t.margin*2?t.width/(e+t.margin*2):t.scale},e.getImageWidth=function(t,n){let r=e.getScale(t,n);return Math.floor((t+n.margin*2)*r)},e.qrToImageData=function(t,n,r){let i=n.modules.size,a=n.modules.data,o=e.getScale(i,r),s=Math.floor((i+r.margin*2)*o),c=r.margin*o,l=[r.color.light,r.color.dark];for(let e=0;e<s;e++)for(let n=0;n<s;n++){let u=(e*s+n)*4,d=r.color.light;if(e>=c&&n>=c&&e<s-c&&n<s-c){let t=Math.floor((e-c)/o),r=Math.floor((n-c)/o);d=l[+!!a[t*i+r]]}t[u++]=d.r,t[u++]=d.g,t[u++]=d.b,t[u]=d.a}}})),pf=o((e=>{var t=ff();function n(e,t,n){e.clearRect(0,0,t.width,t.height),t.style||(t.style={}),t.height=n,t.width=n,t.style.height=n+`px`,t.style.width=n+`px`}function r(){try{return document.createElement(`canvas`)}catch{throw Error(`You need to specify a canvas element`)}}e.render=function(e,i,a){let o=a,s=i;o!==void 0||i&&i.getContext||(o=i,i=void 0),i||(s=r()),o=t.getOptions(o);let c=t.getImageWidth(e.modules.size,o),l=s.getContext(`2d`),u=l.createImageData(c,c);return t.qrToImageData(u.data,e,o),n(l,s,c),l.putImageData(u,0,0),s},e.renderToDataURL=function(t,n,r){let i=r;i!==void 0||n&&n.getContext||(i=n,n=void 0),i||(i={});let a=e.render(t,n,i),o=i.type||`image/png`,s=i.rendererOpts||{};return a.toDataURL(o,s.quality)}})),mf=o((e=>{var t=ff();function n(e,t){let n=e.a/255,r=t+`="`+e.hex+`"`;return n<1?r+` `+t+`-opacity="`+n.toFixed(2).slice(1)+`"`:r}function r(e,t,n){let r=e+t;return n!==void 0&&(r+=` `+n),r}function i(e,t,n){let i=``,a=0,o=!1,s=0;for(let c=0;c<e.length;c++){let l=Math.floor(c%t),u=Math.floor(c/t);!l&&!o&&(o=!0),e[c]?(s++,c>0&&l>0&&e[c-1]||(i+=o?r(`M`,l+n,.5+u+n):r(`m`,a,0),a=0,o=!1),l+1<t&&e[c+1]||(i+=r(`h`,s),s=0)):a++}return i}e.render=function(e,r,a){let o=t.getOptions(r),s=e.modules.size,c=e.modules.data,l=s+o.margin*2,u=o.color.light.a?`<path `+n(o.color.light,`fill`)+` d="M0 0h`+l+`v`+l+`H0z"/>`:``,d=`<path `+n(o.color.dark,`stroke`)+` d="`+i(c,s,o.margin)+`"/>`,f=`viewBox="0 0 `+l+` `+l+`"`,p=`<svg xmlns="http://www.w3.org/2000/svg" `+(o.width?`width="`+o.width+`" height="`+o.width+`" `:``)+f+` shape-rendering="crispEdges">`+u+d+`</svg>
`;return typeof a==`function`&&a(null,p),p}})),hf=l(o((e=>{var t=Vd(),n=df(),r=pf(),i=mf();function a(e,r,i,a,o){let s=[].slice.call(arguments,1),c=s.length,l=typeof s[c-1]==`function`;if(!l&&!t())throw Error(`Callback required as last argument`);if(l){if(c<2)throw Error(`Too few arguments provided`);c===2?(o=i,i=r,r=a=void 0):c===3&&(r.getContext&&o===void 0?(o=a,a=void 0):(o=a,a=i,i=r,r=void 0))}else{if(c<1)throw Error(`Too few arguments provided`);return c===1?(i=r,r=a=void 0):c===2&&!r.getContext&&(a=i,i=r,r=void 0),new Promise(function(t,o){try{t(e(n.create(i,a),r,a))}catch(e){o(e)}})}try{let t=n.create(i,a);o(null,e(t,r,a))}catch(e){o(e)}}e.create=n.create,e.toCanvas=a.bind(null,r.render),e.toDataURL=a.bind(null,r.renderToDataURL),e.toString=a.bind(null,function(e,t,n){return i.render(e,n)})}))(),1),gf={type:`change`},_f={type:`start`},vf={type:`end`},yf=new Di,bf=new ii,xf=Math.cos(70*Yt.DEG2RAD),Sf=new H,Cf=2*Math.PI,wf={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Tf=1e-6,Ef=class extends Dc{constructor(e,t=null){super(e,t),this.state=wf.NONE,this.target=new H,this.cursor=new H,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:`ArrowLeft`,UP:`ArrowUp`,RIGHT:`ArrowRight`,BOTTOM:`ArrowDown`},this.mouseButtons={LEFT:y.ROTATE,MIDDLE:y.DOLLY,RIGHT:y.PAN},this.touches={ONE:b.ROTATE,TWO:b.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle=`auto`,this._domElementKeyEvents=null,this._lastPosition=new H,this._lastQuaternion=new Xt,this._lastTargetPosition=new H,this._quat=new Xt().setFromUnitVectors(e.up,new H(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ec,this._sphericalDelta=new Ec,this._scale=1,this._panOffset=new H,this._rotateStart=new V,this._rotateEnd=new V,this._rotateDelta=new V,this._panStart=new V,this._panEnd=new V,this._panDelta=new V,this._dollyStart=new V,this._dollyEnd=new V,this._dollyDelta=new V,this._dollyDirection=new H,this._mouse=new V,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Of.bind(this),this._onPointerDown=Df.bind(this),this._onPointerUp=kf.bind(this),this._onContextMenu=If.bind(this),this._onMouseWheel=Mf.bind(this),this._onKeyDown=Nf.bind(this),this._onTouchStart=Pf.bind(this),this._onTouchMove=Ff.bind(this),this._onMouseDown=Af.bind(this),this._onMouseMove=jf.bind(this),this._interceptControlDown=Lf.bind(this),this._interceptControlUp=Rf.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e===`grab`?this.domElement.style.cursor=`grab`:this.domElement.style.cursor=`auto`}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener(`pointerdown`,this._onPointerDown),this.domElement.addEventListener(`pointercancel`,this._onPointerUp),this.domElement.addEventListener(`contextmenu`,this._onContextMenu),this.domElement.addEventListener(`wheel`,this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener(`keydown`,this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction=`none`}disconnect(){this.state=wf.NONE,this.domElement.removeEventListener(`pointerdown`,this._onPointerDown),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.domElement.removeEventListener(`pointercancel`,this._onPointerUp),this.domElement.removeEventListener(`wheel`,this._onMouseWheel),this.domElement.removeEventListener(`contextmenu`,this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener(`keydown`,this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener(`keyup`,this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction=``,this.domElement.style.cursor=`auto`}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(gf),this.update(),this.state=wf.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Sf.copy(t).sub(this.target),Sf.applyQuaternion(this._quat),this._spherical.setFromVector3(Sf),this.autoRotate&&this.state===wf.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=Cf:n>Math.PI&&(n-=Cf),r<-Math.PI?r+=Cf:r>Math.PI&&(r-=Cf),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let i=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let e=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),i=e!=this._spherical.radius}if(Sf.setFromSpherical(this._spherical),Sf.applyQuaternion(this._quatInverse),t.copy(this.target).add(Sf),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let e=null;if(this.object.isPerspectiveCamera){let t=Sf.length();e=this._clampDistance(t*this._scale);let n=t-e;this.object.position.addScaledVector(this._dollyDirection,n),this.object.updateMatrixWorld(),i=!!n}else if(this.object.isOrthographicCamera){let t=new H(this._mouse.x,this._mouse.y,0);t.unproject(this.object);let n=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),i=n!==this.object.zoom;let r=new H(this._mouse.x,this._mouse.y,0);r.unproject(this.object),this.object.position.sub(r).add(t),this.object.updateMatrixWorld(),e=Sf.length()}else console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.`),this.zoomToCursor=!1;e!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(e).add(this.object.position):(yf.origin.copy(this.object.position),yf.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(yf.direction))<xf?this.object.lookAt(this.target):(bf.setFromNormalAndCoplanarPoint(this.object.up,this.target),yf.intersectPlane(bf,this.target))))}else if(this.object.isOrthographicCamera){let e=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),e!==this.object.zoom&&(this.object.updateProjectionMatrix(),i=!0)}return this._scale=1,this._performCursorZoom=!1,i||this._lastPosition.distanceToSquared(this.object.position)>Tf||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Tf||this._lastTargetPosition.distanceToSquared(this.target)>Tf?(this.dispatchEvent(gf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e===null?Cf/60/60*this.autoRotateSpeed:Cf/60*this.autoRotateSpeed*e}_getZoomScale(e){let t=Math.abs(e*.01);return .95**(this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Sf.setFromMatrixColumn(t,0),Sf.multiplyScalar(-e),this._panOffset.add(Sf)}_panUp(e,t){this.screenSpacePanning===!0?Sf.setFromMatrixColumn(t,1):(Sf.setFromMatrixColumn(t,0),Sf.crossVectors(this.object.up,Sf)),Sf.multiplyScalar(e),this._panOffset.add(Sf)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;Sf.copy(r).sub(this.target);let i=Sf.length();i*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*i/n.clientHeight,this.object.matrix),this._panUp(2*t*i/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.`),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),r=e-n.left,i=t-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(i/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Cf*this._rotateDelta.x/t.clientHeight),this._rotateUp(Cf*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Cf*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Cf*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Cf*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Cf*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyStart.set(0,i)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateEnd.set(n,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Cf*this._rotateDelta.x/t.clientHeight),this._rotateUp(Cf*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,i),this._dollyDelta.set(0,(this._dollyEnd.y/this._dollyStart.y)**+this.zoomSpeed),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new V,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Df(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.ownerDocument.addEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.addEventListener(`pointerup`,this._onPointerUp)),this._isTrackingPointer(e)||(this._addPointer(e),e.pointerType===`touch`?this._onTouchStart(e):this._onMouseDown(e),this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grabbing`)))}function Of(e){this.enabled!==!1&&(e.pointerType===`touch`?this._onTouchMove(e):this._onMouseMove(e))}function kf(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.dispatchEvent(vf),this.state=wf.NONE,this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grab`);break;case 1:let t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y})}}function Af(e){let t;switch(e.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case y.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(e),this.state=wf.DOLLY;break;case y.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=wf.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=wf.ROTATE}break;case y.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=wf.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=wf.PAN}break;default:this.state=wf.NONE}this.state!==wf.NONE&&this.dispatchEvent(_f)}function jf(e){switch(this.state){case wf.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case wf.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case wf.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e)}}function Mf(e){this.enabled!==!1&&this.enableZoom!==!1&&this.state===wf.NONE&&(e.preventDefault(),this.dispatchEvent(_f),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(vf))}function Nf(e){this.enabled!==!1&&this._handleKeyDown(e)}function Pf(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case b.ROTATE:if(this.enableRotate===!1){this.state=wf.NONE;break}this._handleTouchStartRotate(e),this.state=wf.TOUCH_ROTATE;break;case b.PAN:if(this.enablePan===!1){this.state=wf.NONE;break}this._handleTouchStartPan(e),this.state=wf.TOUCH_PAN;break;default:this.state=wf.NONE}break;case 2:switch(this.touches.TWO){case b.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=wf.TOUCH_DOLLY_PAN;break;case b.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=wf.TOUCH_DOLLY_ROTATE;break;default:this.state=wf.NONE}break;default:this.state=wf.NONE}this.state!==wf.NONE&&this.dispatchEvent(_f)}function Ff(e){switch(this._trackPointer(e),this.state){case wf.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case wf.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case wf.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case wf.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=wf.NONE}}function If(e){this.enabled!==!1&&e.preventDefault()}function Lf(e){e.key===`Control`&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}function Rf(e){e.key===`Control`&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}var zf={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`},Bf=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},Vf=new tc(-1,1,1,-1,0,1),Hf=new class extends Xr{constructor(){super(),this.setAttribute(`position`,new G([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new G([0,2,0,0,2,0],2))}},Uf=class{constructor(e){this._mesh=new Bi(Hf,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Vf)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},Wf=class extends Bf{constructor(e,t=`tDiffuse`){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof hs?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=fs.clone(e.uniforms),this.material=new hs({name:e.name===void 0?`unspecified`:e.name,defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Uf(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},Gf=class extends Bf{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},Kf=class extends Bf{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},qf=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new V);this._width=n.width,this._height=n.height,t=new _n(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ae}),t.texture.name=`EffectComposer.rt1`}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Wf(zf),this.copyPass.material.blending=0,this.timer=new cc}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}Gf!==void 0&&(r instanceof Gf?n=!0:r instanceof Kf&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new V);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},Jf=class extends Bf{constructor(e,t,n=null,r=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new W}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==1&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}},Yf={name:`OutputShader`,uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`},Xf=class extends Bf{constructor(){super(),this.isOutputPass=!0,this.uniforms=fs.clone(Yf.uniforms),this.material=new gs({name:Yf.name,uniforms:this.uniforms,vertexShader:Yf.vertexShader,fragmentShader:Yf.fragmentShader}),this._fsQuad=new Uf(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},rn.getTransfer(this._outputColorSpace)===`srgb`&&(this.material.defines.SRGB_TRANSFER=``),this._toneMapping===1?this.material.defines.LINEAR_TONE_MAPPING=``:this._toneMapping===2?this.material.defines.REINHARD_TONE_MAPPING=``:this._toneMapping===3?this.material.defines.CINEON_TONE_MAPPING=``:this._toneMapping===4?this.material.defines.ACES_FILMIC_TONE_MAPPING=``:this._toneMapping===6?this.material.defines.AGX_TONE_MAPPING=``:this._toneMapping===7?this.material.defines.NEUTRAL_TONE_MAPPING=``:this._toneMapping===5&&(this.material.defines.CUSTOM_TONE_MAPPING=``),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},Zf={name:`HorizontalTiltShiftShader`,uniforms:{tDiffuse:{value:null},h:{value:1/512},r:{value:.35}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform float h;
		uniform float r;

		varying vec2 vUv;

		void main() {

			vec4 sum = vec4( 0.0 );

			float hh = h * abs( r - vUv.y );

			sum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * hh, vUv.y ) ) * 0.051;
			sum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * hh, vUv.y ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * hh, vUv.y ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * hh, vUv.y ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
			sum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * hh, vUv.y ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * hh, vUv.y ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * hh, vUv.y ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * hh, vUv.y ) ) * 0.051;

			gl_FragColor = sum;

		}`},Qf={name:`VerticalTiltShiftShader`,uniforms:{tDiffuse:{value:null},v:{value:1/512},r:{value:.35}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform float v;
		uniform float r;

		varying vec2 vUv;

		void main() {

			vec4 sum = vec4( 0.0 );

			float vv = v * abs( r - vUv.y );

			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * vv ) ) * 0.051;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * vv ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * vv ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * vv ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * vv ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * vv ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * vv ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * vv ) ) * 0.051;

			gl_FragColor = sum;

		}`};function $f(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new Xr;c.morphTargetsRelative=s;let l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0,p=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let t in d.morphAttributes){if(!i.has(t))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;if(d.morphAttributes[t].length!==e[0].morphAttributes[t].length)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have the same number of morph targets for the "`+t+`" morph attribute.`),null;o[t]===void 0&&(o[t]=[]),o[t].push(d.morphAttributes[t]),p++}if(p!==i.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of morph attributes.`),null;if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=ep(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=ep(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function ep(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new Ir(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}var tp={uTime:{value:0},uGlow:{value:0},uWind:{value:1}},np=`
  float hash31(vec3 p){ p = fract(p * .1031); p += dot(p, p.yzx + 33.33); return fract((p.x + p.y) * p.z); }
  float vnoise(vec3 p){
    vec3 i = floor(p), f = fract(p);
    f = f * f * (3. - 2. * f);
    return mix(mix(mix(hash31(i), hash31(i + vec3(1,0,0)), f.x), mix(hash31(i + vec3(0,1,0)), hash31(i + vec3(1,1,0)), f.x), f.y),
               mix(mix(hash31(i + vec3(0,0,1)), hash31(i + vec3(1,0,1)), f.x), mix(hash31(i + vec3(0,1,1)), hash31(i + vec3(1,1,1)), f.x), f.y), f.z);
  }
`;function rp(e){return e.onBeforeCompile=e=>{e.uniforms.uTime=tp.uTime,e.uniforms.uWind=tp.uWind,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
        attribute float aSway; uniform float uTime; uniform float uWind; varying vec3 vWPos;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
        vec4 wp0 = modelMatrix * vec4(position, 1.);
        float swayK = aSway * uWind;
        transformed.x += swayK * sin(uTime * 1.7 + wp0.x * .55 + wp0.y * .9) * .09;
        transformed.z += swayK * cos(uTime * 1.3 + wp0.z * .6) * .07;
        vWPos = wp0.xyz;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
        varying vec3 vWPos; ${np}`).replace(`#include <color_fragment>`,`#include <color_fragment>
        float grain = vnoise(vWPos * 9.) * .55 + vnoise(vWPos * 2.3) * .45;
        diffuseColor.rgb *= .925 + grain * .15;`)},e}var ip=rp(new _s({vertexColors:!0,roughness:.88,metalness:0})),ap=new _s({vertexColors:!0,roughness:.4,metalness:0});ap.onBeforeCompile=e=>{e.uniforms.uGlow=tp.uGlow,e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
uniform float uGlow;`).replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>
      totalEmissiveRadiance += diffuseColor.rgb * uGlow * 2.4;`)};var op=new _s({vertexColors:!0,roughness:.22,metalness:.08,transparent:!0,opacity:.92});op.onBeforeCompile=e=>{e.uniforms.uTime=tp.uTime,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
varying vec3 vWPos;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
      vWPos = (modelMatrix * vec4(position, 1.)).xyz;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
      uniform float uTime; varying vec3 vWPos; ${np}`).replace(`#include <color_fragment>`,`#include <color_fragment>
      float r = vnoise(vec3(vWPos.xz * 1.6, uTime * .35));
      float r2 = vnoise(vec3(vWPos.xz * 3.8 + 7., uTime * .5));
      float crest = smoothstep(.62, .72, r * .6 + r2 * .4);
      diffuseColor.rgb = mix(diffuseColor.rgb * (.86 + r * .28), vec3(.93, .98, 1.), crest * .55);`)};var sp={solid:ip,glow:ap,water:op},cp=new hs({transparent:!0,depthWrite:!1,side:2,uniforms:{uTime:tp.uTime,uTint:{value:new W(`#ffffff`)}},vertexShader:`
    varying vec2 vUv;
    void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }`,fragmentShader:`
    uniform float uTime; uniform vec3 uTint; varying vec2 vUv;
    ${np}
    void main(){
      float streak = vnoise(vec3(vUv.x * 9., vUv.y * 5. - uTime * 1.9, uTime * .2));
      float streak2 = vnoise(vec3(vUv.x * 21., vUv.y * 12. - uTime * 2.8, 3.));
      float a = smoothstep(.22, .72, streak * .7 + streak2 * .4);
      float edge = smoothstep(0., .16, vUv.x) * smoothstep(1., .84, vUv.x);
      float fade = smoothstep(0., .05, vUv.y) * smoothstep(1., .55, vUv.y);
      vec3 col = mix(vec3(.62, .84, .95), vec3(1.), a);
      gl_FragColor = vec4(col * uTint, (.3 + a * .65) * edge * fade);
      #include <colorspace_fragment>
    }`});function lp(e){let t=e>>>0;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var up=(e,t,n)=>{let r=Math.sin(e*127.1+t*311.7+n*74.7)*43758.5453;return r-Math.floor(r)},dp=new W,fp=new W,pp=new Map;function mp(e,t){return pp.has(e)||pp.set(e,t().toNonIndexed()),pp.get(e)}var q={box:()=>mp(`box`,()=>new Aa(1,1,1)),cyl:(e=8,t=1)=>mp(`cyl${e}_${t}`,()=>new Ma(t,1,1,e,1)),cone:(e=6)=>mp(`cone${e}`,()=>new Na(1,1,e,1)),ico:(e=0)=>mp(`ico${e}`,()=>new $o(1,e)),sphere:(e=8,t=6)=>mp(`sph${e}${t}`,()=>new is(1,e,t)),torus:(e=16,t=.12,n=1)=>mp(`tor${e}_${t}_${n}`,()=>new as(1,t,6,e,Math.PI*2*n)),prism:()=>mp(`prism`,()=>{let e=new fo;e.moveTo(-.5,0),e.lineTo(.5,0),e.lineTo(0,1),e.closePath();let t=new Xo(e,{depth:1,bevelEnabled:!1,steps:1});return t.translate(0,0,-.5),t})},hp=class{constructor(e=1){this.r=lp(e),this.layers={solid:[],glow:[],water:[]},this.stack=[new bn],this.anchors=[],this.doors=[]}rand(e=1,t){return t===void 0&&(t=e,e=0),e+(t-e)*this.r()}pick(e){return e[Math.floor(this.r()*e.length)]}at(e,t,n,r,i,a){typeof r==`function`&&(a=r,r=0,i=1),typeof i==`function`&&(a=i,i=1);let o=new bn().compose(new H(e,t,n),new Xt().setFromEuler(new An(0,r,0)),new H(i,i,i));return this.stack.push(this.stack[this.stack.length-1].clone().multiply(o)),a(),this.stack.pop(),this}add(e,t,n={}){let{x:r=0,y:i=0,z:a=0,rx:o=0,ry:s=0,rz:c=0,sx:l=1,sy:u=1,sz:d=1,sway:f=0,layer:p=`solid`,ao:m=.8,wonk:h=.012,jitter:g=.035}=n,_=e.clone(),v=new bn().compose(new H(r,i,a),new Xt().setFromEuler(new An(o,s,c)),new H(l,u,d));_.applyMatrix4(v),_.applyMatrix4(this.stack[this.stack.length-1]);let y=_.attributes.position,b=1/0,x=-1/0;for(let e=0;e<y.count;e++){let t=y.getY(e);b=Math.min(b,t),x=Math.max(x,t)}let S=Math.max(x-b,1e-4);if(h)for(let e=0;e<y.count;e++){let t=y.getX(e),n=y.getY(e),r=y.getZ(e),i=e=>(up(t*3.1+e,n*3.3,r*3.7)-.5)*h*2;y.setXYZ(e,t+i(1)*3,n+i(2)*3,r+i(3)*3)}_.deleteAttribute(`uv`),_.attributes.uv1&&_.deleteAttribute(`uv1`),_.computeVertexNormals();let C=new Float32Array(y.count*3),w=new Float32Array(y.count);fp.set(t);for(let e=0;e<y.count;e+=3){let t=1+(this.r()-.5)*g*2;for(let n=0;n<3;n++){let r=(y.getY(e+n)-b)/S,i=m+(1-m)*Math.min(1,r*1.6);dp.copy(fp).multiplyScalar(t*i),C.set([dp.r,dp.g,dp.b],(e+n)*3),w[e+n]=f*r}}return _.setAttribute(`color`,new Ir(C,3)),_.setAttribute(`aSway`,new Ir(w,1)),this.layers[p].push(_),this}box(e,t,n,r,i=0,a=0,o=0,s={}){return this.add(q.box(),r,{x:i,y:a+t/2,z:o,sx:e,sy:t,sz:n,...s})}cyl(e,t,n,r=0,i=0,a=0,o={}){let{rt:s=e,seg:c=8,...l}=o,u=Math.round(s/e*100)/100;return this.add(q.cyl(c,u),n,{x:r,y:i+t/2,z:a,sx:e,sy:t,sz:e,...l})}cone(e,t,n,r=0,i=0,a=0,o={}){let{seg:s=6,...c}=o;return this.add(q.cone(s),n,{x:r,y:i+t/2,z:a,sx:e,sy:t,sz:e,...c})}ball(e,t,n=0,r=0,i=0,a={}){let{detail:o=0,sy:s=1,sx:c=1,sz:l=1,...u}=a;return this.add(q.ico(o),t,{x:n,y:r,z:i,sx:e*c,sy:e*s,sz:e*l,wonk:.03,...u})}roof(e,t,n,r,i=0,a=0,o=0,s={}){return this.add(q.prism(),r,{x:i,y:a,z:o,sx:e,sy:t,sz:n,ao:.92,...s})}glow(e,t,n,r,i=0,a=0,o=0,s={}){return this.box(e,t,n,r,i,a,o,{layer:`glow`,wonk:0,ao:1,jitter:.02,...s})}raw(e,t,n={}){return this.add(e.index?e.toNonIndexed():e,t,n)}spot(e,t,n){let r=new H(e,t,n).applyMatrix4(this.stack[this.stack.length-1]);return this.anchors.push(r),this}door(e,t,n){return this.doors.push(new H(e,t,n).applyMatrix4(this.stack[this.stack.length-1])),this}point(e,t,n){return new H(e,t,n).applyMatrix4(this.stack[this.stack.length-1])}build(){let e=new Jn;for(let[t,n]of Object.entries(this.layers)){if(!n.length)continue;let r=$f(n,!1);n.forEach(e=>e.dispose());let i=new Bi(r,sp[t]);i.castShadow=t===`solid`,i.receiveShadow=t!==`glow`,e.add(i)}return e}},gp=(e,t)=>Math.sin(e*3+t)*.055+Math.sin(e*5+t*1.7)*.04+Math.sin(e*9+t*2.3)*.02;function _p(e,t,n){return e*(1+gp(n,t))}function vp(e,t,n,r){e.push(...t,...n,...r)}function yp(e,t,n,r){let i=[0,.36,.68,.9,1],a=i.map(r=>{let i=[];for(let a=0;a<40;a++){let o=a/40*Math.PI*2,s=_p(t,n,o)*r,c=r>=1?0:(e.r()-.5)*.06;i.push([Math.cos(o)*s,c,Math.sin(o)*s])}return i});for(let t=0;t<i.length-1;t++){let n=[];for(let e=0;e<40;e++){let r=(e+1)%40,i=a[t][e],o=a[t][r],s=a[t+1][r],c=a[t+1][e];t===0?vp(n,[0,0,0],s,c):(vp(n,i,s,c),vp(n,i,o,s))}for(let t=0;t<n.length;t+=9){let i=new Xr;i.setAttribute(`position`,new G(n.slice(t,t+9),3)),e.add(i,e.pick(r),{wonk:0,ao:1,jitter:.012})}}let o=[],s=[];for(let r=0;r<80;r++){let i=r/80*Math.PI*2,a=_p(t,n,i);o.push([Math.cos(i)*a,0,Math.sin(i)*a]);let c=r%2?.38+e.r()*.22:.9+e.r()*.75;s.push([Math.cos(i)*a*1.012,-c,Math.sin(i)*a*1.012])}let c=[];for(let e=0;e<o.length;e++){let t=(e+1)%o.length;vp(c,o[e],o[t],s[e]),vp(c,o[t],s[t],s[e])}let l=new Xr;l.setAttribute(`position`,new G(c,3)),e.add(l,r[0],{wonk:0,ao:.62})}function bp(e,t,n,r,i){let a=Math.max(2,Math.round(r/.72)),o=r/a;for(let r=0;r<a;r++){let a=-.28-o*(r+1),s=1-r*.012,c=Math.round(Math.PI*2*t/1.55);for(let l=0;l<c;l++){let u=(l+r%2*.5)/c*Math.PI*2,d=_p(t,n,u)*s*.985,f=Math.PI*2*d/c*.96;e.add(q.box(),e.pick(i),{x:Math.cos(u)*d,y:a+o/2,z:Math.sin(u)*d,ry:-u+Math.PI/2,sx:f,sy:o*.93,sz:.62+e.r()*.3,wonk:.02,ao:.86})}}return e.cyl(t*.94,r+.18,i[i.length-1],0,-r-.28,0,{seg:24,wonk:0}),r+.28}function xp(e,t,n,r,i,a){let o=[];for(let a=0;a<=7;a++){let s=a/7,c=[],l=(1-s)**.72*.94+.012,u=-r-i*s**.9;for(let r=0;r<22;r++){let o=r/22*Math.PI*2+a*.17,d=_p(t,n,o)*l*(1+(e.r()-.5)*.22*(.4+s));c.push([Math.cos(o)*d,u+(e.r()-.5)*(i/7)*.4,Math.sin(o)*d])}o.push(c)}for(let t=0;t<7;t++){let n=[];for(let e=0;e<22;e++){let r=(e+1)%22;vp(n,o[t][e],o[t][r],o[t+1][r]),vp(n,o[t][e],o[t+1][r],o[t+1][e])}let r=new Xr;r.setAttribute(`position`,new G(n,3)),e.add(r,a[t%a.length],{wonk:0,ao:.72,jitter:.05})}let s=Math.round(t*1.2);for(let n=0;n<s;n++){let n=e.rand(Math.PI*2),o=t*e.rand(.15,.72),s=e.rand(i*.25,i*.62);e.add(q.cone(5),e.pick(a),{x:Math.cos(n)*o,y:-r-i*(1-o/t)*.72-s/2,z:Math.sin(n)*o,rx:Math.PI,sx:e.rand(.5,1.2),sy:s,sz:e.rand(.5,1.2),wonk:.04,ao:.74})}}function Sp(e,t,n,r,i){let a=Math.round(t*1.1);for(let o=0;o<a;o++){let a=e.rand(Math.PI*2),o=_p(t,n,a)*.98,s=e.rand(3,9.5),c=new H(Math.cos(a)*o,-.4,Math.sin(a)*o),l=new H(Math.cos(a),0,Math.sin(a)),u=new Wa([c,c.clone().addScaledVector(l,.5).add(new H(0,-r*.7,0)),c.clone().addScaledVector(l,e.rand(-.4,.7)).add(new H(e.rand(-.5,.5),-s*.65,e.rand(-.5,.5))),c.clone().addScaledVector(l,e.rand(-1.2,.3)).add(new H(e.rand(-.8,.8),-s,e.rand(-.8,.8)))]),d=new os(u,7,e.rand(.07,.17),4,!1).toNonIndexed();if(e.add(d,e.pick(i),{wonk:0,sway:-.5,ao:1}),e.r()>.45){let t=u.getPoint(.72);e.ball(e.rand(.2,.36),`#5f8f3e`,t.x,t.y,t.z,{sway:-.5})}}}function Cp(e,t,n,r,i,a,o){e.at(t,n,r,e.rand(6),i,()=>{e.cyl(1.1,.26,a,0,-.26,0,{seg:7}),e.cone(1.05,1.9,o,0,-.26,0,{seg:7,rx:Math.PI,y:-1.21,ao:.74})})}function wp(e,t,n,r,i,a){let o=[],s=[],c=[],l=new H(Math.cos(r),0,Math.sin(r)),u=new H(-l.z,0,l.x);for(let r=0;r<=18;r++){let d=r/18,f=Math.min(d*5,1)**.6*1.15+d*1.2,p=d*d*.25*a+d*a*.75,m=i*(1+d*.55),h=new H(e,t-p,n).addScaledVector(l,f),g=h.clone().addScaledVector(u,-m/2),_=h.clone().addScaledVector(u,m/2);if(o.push(g.x,g.y,g.z,_.x,_.y,_.z),s.push(0,d*3,1,d*3),r<18){let e=r*2;c.push(e,e+1,e+2,e+1,e+3,e+2)}}let d=new Xr;d.setAttribute(`position`,new G(o,3)),d.setAttribute(`uv`,new G(s,2)),d.setIndex(c);let f=d.attributes.uv;for(let e=0;e<f.count;e++)f.setY(e,f.getY(e)/3);let p=new Bi(d,cp);return p.renderOrder=2,p}var Tp={green:{grass:[`#93b553`,`#97b956`,`#90b250`,`#9abc59`],stone:[`#b9a98f`,`#a99a82`,`#c4b59b`,`#9b8c76`,`#756a5a`],strata:[`#a5805a`,`#8d6a49`,`#b2906a`,`#7a5b42`]},moss:{grass:[`#82a954`,`#86ad57`,`#7fa652`,`#8ab05a`],stone:[`#a7a692`,`#979884`,`#b6b49f`,`#8a8a78`,`#68685a`],strata:[`#8e7a62`,`#796752`,`#a08a70`,`#6a5a48`]},amber:{grass:[`#adb45c`,`#b1b85f`,`#a9b05a`,`#b5bb62`],stone:[`#c9b08a`,`#b89f7a`,`#d4bd97`,`#a78f6c`,`#83704f`],strata:[`#b98a58`,`#a27548`,`#c79a68`,`#8c6240`]},teal:{grass:[`#83b079`,`#87b47c`,`#7fac76`,`#8bb87f`],stone:[`#a9b0a4`,`#99a195`,`#b8bfb2`,`#8a9186`,`#646b60`],strata:[`#8b8676`,`#777365`,`#9c9786`,`#666254`]}};function Ep(e,{r:t,seed:n,palette:r=`green`,wall:i=2,depth:a=12}){let o=Tp[r];yp(e,t,n,o.grass);let s=bp(e,t,n,i,o.stone);return xp(e,t,n,s,a,o.strata),Sp(e,t,n,s,[`#5b4330`,`#6a4f38`,`#4c3829`]),o}var Dp=s({C:()=>J,HIPPO_LILAC:()=>Yp,HIPPO_PINK:()=>Jp,arch:()=>Kp,banyan:()=>jp,bench:()=>Ip,book:()=>Vp,bookStack:()=>Hp,brokenColumn:()=>qp,bush:()=>Mp,fence:()=>Lp,figure:()=>Bp,flag:()=>zp,flowers:()=>Np,hippo:()=>Zp,hippoFigure:()=>Xp,house:()=>Gp,kite:()=>tm,koi:()=>nm,koiStatue:()=>Qp,lamp:()=>Fp,maple:()=>Ap,openBook:()=>Up,pavers:()=>Rp,pine:()=>kp,pond:()=>em,rock:()=>Pp,schoolBuilding:()=>Wp,signBoard:()=>$p,tree:()=>Op}),J={trunk:`#6d4c33`,trunk2:`#5a3f2b`,leaf:[`#5e9440`,`#6fa548`,`#4f8539`,`#7fb04f`],pine:[`#3f7a4e`,`#4a8757`,`#356c45`],maple:[`#d9622b`,`#e58a2f`,`#c94c2a`],paper:`#f5ecd8`,cream:`#efe2c7`,wood:`#a9794f`,wood2:`#8a6040`,wood3:`#c39a6b`,brick:`#b5563c`,brick2:`#a44a33`,roof:`#a2412f`,roof2:`#46657f`,tile:`#6f6a64`,white:`#f4efe4`,stone:`#b7ab96`,stone2:`#9c917e`,red:`#d9432f`,orange:`#ea8a2d`,gold:`#e3a73b`,blue:`#3d86c6`,sky:`#74bbe0`,teal:`#2f8f92`,green:`#5a9b4e`,pink:`#ee9fb0`,purple:`#8a6bb8`,ink:`#3a2c1e`,skin:`#f0c9a0`,water:`#58b4dd`,metal:`#8d97a0`,dark:`#3d4148`,win:`#ffd98a`,screen:`#8fe0f0`};function Op(e,t,n,r=1,i=0){e.at(t,i,n,e.rand(6),r,()=>{let t=e.rand(1.3,1.9);e.cyl(.2,t,J.trunk,0,0,0,{rt:.13,seg:6,sway:.1});let n=e.pick(J.leaf);e.ball(1.02,n,0,t+.42,0,{detail:1,sway:.5,sy:.92}),e.ball(.72,e.pick(J.leaf),.55,t+.02,.2,{detail:0,sway:.5}),e.ball(.66,n,-.48,t+.12,-.26,{detail:0,sway:.5})})}function kp(e,t,n,r=1,i=0){e.at(t,i,n,e.rand(6),r,()=>{e.cyl(.17,.75,J.trunk2,0,0,0,{seg:5});let t=e.pick(J.pine);e.cone(1.08,1.45,t,0,.55,0,{sway:.32}),e.cone(.84,1.25,e.pick(J.pine),0,1.3,0,{sway:.42}),e.cone(.56,1.05,t,0,2.05,0,{sway:.52})})}function Ap(e,t,n,r=1,i=0){e.at(t,i,n,e.rand(6),r,()=>{e.cyl(.18,1.5,J.trunk,0,0,0,{rt:.11,seg:6}),e.ball(.96,e.pick(J.maple),0,1.92,0,{detail:1,sway:.5}),e.ball(.62,e.pick(J.maple),.5,1.52,.2,{sway:.5}),e.ball(.58,e.pick(J.maple),-.44,1.6,-.3,{sway:.5})})}function jp(e,t,n,r=1,i=0){e.at(t,i,n,0,r,()=>{e.cyl(.62,2.4,J.trunk,0,0,0,{rt:.4,seg:7});for(let t=0;t<6;t++){let n=t/6*6.28;e.cyl(.07,2.2,J.trunk2,Math.cos(n)*1.25,0,Math.sin(n)*1.25,{seg:4})}e.ball(2.1,`#5b8f3d`,0,3.3,0,{detail:1,sy:.62,sway:.25}),e.ball(1.4,`#6ea146`,1.2,2.95,.5,{sy:.62,sway:.3}),e.ball(1.3,`#4f8539`,-1.2,3,-.6,{sy:.62,sway:.3})})}function Mp(e,t,n,r=1,i=0){e.ball(.42*r,e.pick(J.leaf),t,i+.26*r,n,{sy:.74,sway:.2})}function Np(e,t,n,r=6,i=.8,a=[J.pink,`#f4d35e`,`#f6f1e6`,J.red]){for(let o=0;o<r;o++){let r=t+e.rand(-i,i),o=n+e.rand(-i,i);e.cyl(.018,.18,`#5a8c3c`,r,0,o,{seg:3,wonk:0}),e.ball(.07,e.pick(a),r,.2,o,{})}}function Pp(e,t,n,r=1){e.ball(.5*r,e.pick([J.stone,J.stone2,`#8f8778`]),t,.2*r,n,{sy:.66})}function Fp(e,t,n,r=1){e.at(t,0,n,0,r,()=>{e.cyl(.05,1.5,J.dark,0,0,0,{seg:5}),e.glow(.2,.26,.2,J.win,0,1.5,0),e.cone(.2,.14,J.dark,0,1.76,0,{seg:4})})}function Ip(e,t,n,r=0){e.at(t,0,n,r,1,()=>{e.box(1,.07,.34,J.wood,0,.28,0),e.box(1,.26,.05,J.wood2,0,.36,-.15),e.box(.06,.28,.28,J.wood2,-.42,0,0),e.box(.06,.28,.28,J.wood2,.42,0,0)})}function Lp(e,t,n,r,i,a=J.wood3){let o=Math.hypot(r-t,i-n),s=Math.round(o/.55),c=-Math.atan2(i-n,r-t);for(let o=0;o<=s;o++){let c=o/s;e.box(.08,.5,.08,a,t+(r-t)*c,0,n+(i-n)*c)}e.box(o,.05,.05,a,(t+r)/2,.36,(n+i)/2,{ry:c}),e.box(o,.05,.05,a,(t+r)/2,.18,(n+i)/2,{ry:c})}function Rp(e,t,n=.46){for(let r=0;r<t.length-1;r++){let[i,a]=t[r],[o,s]=t[r+1],c=Math.hypot(o-i,s-a),l=Math.max(1,Math.round(c/(n*1.5)));for(let t=0;t<l;t++){let r=(t+.5)/l;e.add(q.cyl(7),e.pick([J.stone,`#c7bca6`,J.stone2]),{x:i+(o-i)*r+e.rand(-.05,.05),y:.02,z:a+(s-a)*r+e.rand(-.05,.05),sx:n*e.rand(.8,1.05),sy:.08,sz:n*e.rand(.7,1),ry:e.rand(3)})}}}function zp(e,t,n,r=3,i=J.red){e.cyl(.05,r,J.metal,t,0,n,{seg:5}),e.ball(.08,J.gold,t,r+.02,n),e.add(q.box(),i,{x:t+.42,y:r-.32,z:n,sx:.8,sy:.5,sz:.02,sway:.9,wonk:0})}function Bp(e,t,n,r=0,{shirt:i=`#f2c230`,sit:a=!1,s:o=1}={}){e.at(t,0,n,r,o,()=>{a?(e.cyl(.13,.26,i,0,.02,0,{seg:6}),e.box(.2,.08,.3,`#2f6f53`,0,.02,.14),e.ball(.13,J.skin,0,.42,0,{}),e.ball(.14,J.ink,0,.47,-.03,{sy:.7})):(e.box(.09,.26,.09,`#2f6f53`,-.07,0,0),e.box(.09,.26,.09,`#2f6f53`,.07,0,0),e.cyl(.14,.34,i,0,.26,0,{seg:6}),e.ball(.14,J.skin,0,.74,0,{}),e.ball(.15,J.ink,0,.79,-.03,{sy:.7}))})}function Vp(e,t,n,r,i,a,o,s,c=0){e.at(t,n,r,c,1,()=>{e.box(i,a,o,s,0,0,0,{ao:.9}),e.box(i*.92,a*.76,o*1.01-.02,J.paper,.03*i,a*.12,0,{wonk:0}),e.box(i*.08,a,o,s,-i*.46,0,0)})}function Hp(e,t,n,r=4,i=1,a=0,o=0){let s=[J.red,J.blue,J.gold,J.teal,J.purple,J.green,J.orange],c=o;for(let o=0;o<r;o++){let r=e.rand(.14,.26)*i;Vp(e,t+e.rand(-.06,.06)*i,c,n+e.rand(-.06,.06)*i,e.rand(.8,1.05)*i,r,e.rand(.58,.74)*i,e.pick(s),a+e.rand(-.3,.3)),c+=r}return c}function Up(e,t,n,r,i,a,o=0,s=J.red){e.at(t,n,r,o,1,()=>{for(let t of[-1,1]){let n=[],r=e=>.32*Math.sin(e*Math.PI*.5+.35)*(1-e*.55)+.1;for(let e=0;e<10;e++){let o=e/10,s=(e+1)/10,c=t*o*i/2,l=t*s*i/2,u=r(o)*i*.32,d=r(s)*i*.32,f=[[c,u,-a/2],[l,d,-a/2],[l,d,a/2],[c,u,a/2]];(t>0?[0,2,1,0,3,2]:[0,1,2,0,2,3]).forEach(e=>n.push(...f[e]))}let o=new Xr;o.setAttribute(`position`,new G(n,3)),e.add(o,J.paper,{wonk:0,ao:1,jitter:.012}),e.box(i/2,i*.05,a*.985,`#e6dac0`,t*i/4,0,0,{wonk:0,ao:.82});for(let n=0;n<7;n++){let o=.16+n*.11;e.box(i*.32,.018,.05*a,`#a79b86`,t*i*.26,r(o*.75+.2)*i*.32+.012,-a*.36+n*a*.12,{wonk:0,ao:1})}}e.box(i*1.05,.14,a*1.05,s,0,-.14,0,{ao:.88})})}function Wp(e,t,n,r,{w:i=7,d:a=2.4,floors:o=3,wall:s=J.white,trim:c=J.brick,roof:l=J.roof,tower:u=!0}={}){e.at(t,0,n,r,1,()=>{e.door(0,0,a/2+1.1);let t=1.06,n=o*t;e.box(i+.3,.14,a+.5,J.stone2,0,0,.1),e.box(i,n,a,s,0,.14,0,{ao:.9});for(let n=0;n<o;n++){let r=.14+n*t;e.box(i+.16,.08,.5,c,0,r+t-.08,a/2+.22),e.box(i+.05,.28,.05,J.cream,0,r+0+0+0,a/2+.44,{sy:n?.28:.001});let o=Math.floor(i/1.02);for(let t=0;t<o;t++){let n=-i/2+.55+t*(i-1.1)/(o-1);e.glow(.58,.46,.05,J.win,n,r+.3,a/2+.01),e.box(.08,.5,.06,J.cream,n,r+.28,a/2+.03)}for(let t=0;t<=4;t++)e.box(.12,.9800000000000001,.12,c,-i/2+t*i/4,r,a/2+.38)}e.roof(i+.5,.86,a+.9,l,0,n+.14,.1,{ry:0}),u&&(e.box(1.4,n+1.1,1.4,c,0,.14,a/2+.12,{ao:.86}),e.box(1.5,.12,1.5,J.cream,0,n+1.2,a/2+.12),e.cone(1.14,.9,l,0,n+1.32,a/2+.12,{seg:4,ry:Math.PI/4}),e.glow(.72,.72,.05,J.paper,0,n+.2,a/2+.84),e.cyl(.42,.04,J.ink,0,n+.56,a/2+.87,{seg:12,rx:Math.PI/2,wonk:0}),e.box(.9,1.06,.06,J.wood2,0,.14,a/2+.84))})}function Gp(e,t,n,r,{w:i=2.2,d:a=1.6,h:o=1.05,wall:s=J.cream,roof:c=J.tile,door:l=J.wood2,win:u=!0}={}){e.at(t,0,n,r,1,()=>{e.box(i,o,a,s,0,0,0,{ao:.86}),e.roof(a+.5,.72,i+.42,c,0,o,0,{ry:Math.PI/2}),e.box(.42,.72,.05,l,0,0,a/2+.01),e.door(0,0,a/2+.5),u&&(e.glow(.36,.34,.05,J.win,-i*.3,.42,a/2+.01),e.glow(.36,.34,.05,J.win,i*.3,.42,a/2+.01))})}function Kp(e,t,n,r,i=1,a=J.stone){e.at(t,0,n,r,i,()=>{e.box(.5,1.9,.5,a,-1,0,0),e.box(.5,1.9,.5,a,1,0,0),e.box(.68,.16,.68,J.stone2,-1,1.9,0),e.box(.68,.16,.68,J.stone2,1,1.9,0);for(let t=0;t<=6;t++){let n=t/6*Math.PI;e.box(.34,.26,.5,a,Math.cos(n)*1,2.1+Math.sin(n)*.86,0,{rz:n-Math.PI/2})}e.ball(.28,`#6f9a48`,.8,2.72,.1,{sy:.5})})}function qp(e,t,n,r=1.4,i=J.stone){e.cyl(.32,r,i,t,0,n,{seg:8}),e.cyl(.42,.14,J.stone2,t,0,n,{seg:8})}var Jp=`#f09ab0`,Yp=`#b8a6d2`;function Xp(e,t=Jp){let n={detail:2,wonk:0,jitter:.012},r={detail:1,wonk:0,jitter:0,ao:1},i=t===`#f09ab0`?`#ff7c98`:`#f39ab2`,a=t===`#f09ab0`?`#d9788f`:`#9a86b8`;e.ball(.27,t,0,.27,-.06,{...n,sx:1.05,sy:.88,sz:1.18}),e.ball(.21,t,0,.36,.24,n),e.ball(.16,t,0,.28,.42,{...n,sx:1.15,sy:.8,sz:.9}),e.ball(.035,t,0,.3,-.37,{...r,ao:.9});for(let n of[-1,1])e.ball(.065,`#ffffff`,n*.085,.5,.34,r),e.ball(.038,J.ink,n*.09,.515,.385,r),e.ball(.013,`#ffffff`,n*.09-.012,.535,.418,r),e.ball(.022,`#6b3a48`,n*.05,.36,.525,r),e.ball(.042,i,n*.15,.32,.37,{...r,sy:.7}),e.ball(.055,t,n*.13,.56,.18,{...r,sy:1.1,sz:.6}),e.ball(.03,a,n*.13,.565,.205,{...r,sy:1.05,sz:.4}),e.cyl(.075,.16,t,n*.15,0,.12,{seg:10,wonk:0,jitter:0}),e.cyl(.075,.16,t,n*.15,0,-.22,{seg:10,wonk:0,jitter:0})}function Zp(e,t,n,r,i=0,a=1,o=Jp){e.at(t,n,r,i,a*2.25,()=>Xp(e,o))}function Qp(e,t,n,r,i=1,a=0){e.at(t,n,r,a,i,()=>{e.cyl(.62,.36,J.stone,0,0,0,{seg:10}),e.ball(.44,J.red,0,1.1,0,{detail:1,sx:.72,sy:1.25}),e.ball(.3,`#fff4e3`,.02,.6,.02,{detail:1,sx:.72}),e.cone(.34,.5,J.orange,0,1.7,0,{seg:4,sz:.1}),e.cone(.3,.42,J.red,0,.84,.3,{seg:3,sz:.2,rx:1}),e.ball(.06,J.ink,.22,.86,.26,{}),e.ball(.06,J.ink,-.22,.86,.26,{})})}function $p(e,t,n,r=0,i=J.wood){e.at(t,0,n,r,1,()=>{e.box(.1,1,.1,J.wood2,-.5,0,0),e.box(.1,1,.1,J.wood2,.5,0,0),e.box(1.3,.56,.08,i,0,.7,0)})}function em(e,t,n,r,i,a=.1){e.add(q.cyl(16),J.stone2,{x:t,y:.03,z:n,sx:r+.2,sy:.1,sz:i+.2}),e.add(q.cyl(16),J.water,{x:t,y:.09,z:n,sx:r,sy:a,sz:i,layer:`water`,wonk:0,ao:1})}function tm(e,t,n,r,i=J.red){e.add(q.ico(0),i,{x:t,y:n,z:r,sx:.5,sy:.7,sz:.04,sway:.8})}function nm(e,t,n,r,i=1,a=0,o=J.red){e.at(t,n,r,a,i,()=>{e.ball(.3,`#fff2e2`,0,0,0,{sx:.5,sy:.6,sz:1.2}),e.ball(.17,o,0,.1,.1,{sx:.8,sy:.6,sz:1.2}),e.cone(.16,.3,o,0,-.14,-.46,{seg:3,sz:.2,rx:-1.57})})}var{C:Y}=Dp,rm=(e,t,n)=>e.gates.some(([e,r])=>Math.hypot(t-e,n-r)<3);function im(e,t,n,r=[],i=[Op,kp]){let a=0,o=0;for(;a<n&&o<n*30;){o++;let n=e.rand(6.283),s=t*e.rand(.42,.9),c=Math.cos(n)*s,l=Math.sin(n)*s;rm(e,c,l)||r.some(([e,t,n])=>Math.hypot(c-e,l-t)<n)||(e.pick(i)(e,c,l,e.rand(.55,.9)),a++)}}function am(e,t,n,r){for(let i=0;i<r;i++){let r=e.rand(6.283),i=_p(t,n,r)*e.rand(.8,.93),a=Math.cos(r)*i,o=Math.sin(r)*i,s=e.r();rm(e,a,o)||(s<.4?Pp(e,a,o,e.rand(.5,1)):s<.75?Mp(e,a,o,e.rand(.8,1.2)):Np(e,a,o,4,.4))}}function om(e,t,n,r,i=`y`,a=1){let o=new hp(5);e(o);let s=o.build();return s.position.set(t,n,r),{obj:s,update:e=>{s.rotation[i]=e*a}}}function sm(e,t){let n=t.r,r=Ep(e,{r:n,seed:t.seed,palette:`green`,wall:3.4,depth:22}),i=[];e.cyl(11.2,2.6,Y.stone,0,0,-3,{rt:10.8,seg:22,ao:.74});for(let t=0;t<18;t++){let n=t/18*6.283;Math.sin(n)>.72||e.at(Math.cos(n)*11,2.6,-3+Math.sin(n)*11,-n+Math.PI/2,.86,()=>{e.box(.46,1.8,.46,Y.stone,-.94,-0,0),e.box(.46,1.8,.46,Y.stone,.94,0,0),e.box(2.6,.32,.56,`#c4b59b`,0,1.8,0)})}e.cyl(10.4,.14,`#8fb24f`,0,2.6,-3,{seg:22,wonk:0,ao:1});for(let t=0;t<9;t++)e.box(3.2,.3+t*.29,.26,Y.stone,0,0,9.5-t*.23,{ao:.9});e.cyl(5.6,2,`#c4b59b`,0,2.7,-5,{rt:5.2,seg:18,ao:.76}),e.cyl(5.1,.12,`#9dbd58`,0,4.7,-5,{seg:18,wonk:0,ao:1}),e.at(0,4.7,-5,0,1,()=>{e.cyl(1.5,5.6,Y.trunk,0,0,0,{rt:.85,seg:9,ao:.68});for(let t=0;t<9;t++){let n=t/9*6.283,r=new Wa([new H(Math.cos(n)*1.1,1.8,Math.sin(n)*1.1),new H(Math.cos(n)*2.8,.15,Math.sin(n)*2.8),new H(Math.cos(n)*5.2,-.2,Math.sin(n)*5.2),new H(Math.cos(n)*5.9,-2.6,Math.sin(n)*5.9)]);e.raw(new os(r,8,.32,5,!1),Y.trunk2,{wonk:0,ao:1})}[[0,8.3,0,5.3],[3.6,7,1.2,3.5],[-3.7,7.2,.8,3.6],[1.2,7,-3.5,3.4],[-1.6,7.2,3.3,3.3],[0,10.5,0,3.4],[2.6,9.4,-1.4,2.6],[-2.6,9.6,1,2.6]].forEach(([t,n,r,i],a)=>e.ball(i,Y.leaf[a%4],t,n,r,{detail:1,sy:.74,sway:.16}))}),e.at(0,2.7,0,0,1,()=>{Wp(e,-6.2,.2,.62,{w:5.2,d:2.2,floors:3,tower:!0}),Wp(e,6.2,.2,-.62,{w:5.2,d:2.2,floors:2,tower:!1,trim:Y.brick2})}),Rp(e,[[0,16.5],[0,8.6]],.7),Qp(e,0,0,12.3,1.5),em(e,0,12.3,2,1.5),Qp(e,0,.1,12.3,1.3),zp(e,-5.5,12,4.4,Y.blue),zp(e,5.5,12,4.4,Y.red),Kp(e,-10.2,8.8,.9,1),Kp(e,10.2,8.8,-.9,1),[[-4,14],[4,14.2],[-13,4],[13,4.6],[-12.5,-5],[12.5,-5.5],[-9.5,-11],[9,-11.4]].forEach(([t,n])=>Op(e,t,n,e.rand(.8,1.1))),[[-7,13],[7,13],[-14.4,.4],[14.5,-.6]].forEach(([t,n])=>Fp(e,t,n)),am(e,n,t.seed,22),Ip(e,-3.4,11.4,.5),Ip(e,3.4,11.4,-.5);for(let[t,n]of[[-2.6,15],[2.4,15.3],[-5.6,9.8]])Bp(e,t,n,e.rand(6));e.spot(0,3.2,12.3).spot(-6.2,8.6,.2).spot(0,4,4.6).spot(0,17,-5).spot(6.2,7,.2);let a=(e,t)=>Math.abs(e)<1.7&&t>7.3&&t<9.75;return{dyn:i,palette:r,walk:{floor:(e,t)=>a(e,t)?2.74*Math.min(1,Math.max(0,(9.7-t)/2.1)):Math.hypot(e,t+3)<10.3?2.74:0,clear:a}}}function cm(e,t){let n=t.r;return Ep(e,{r:n,seed:t.seed,palette:`teal`,wall:2.2,depth:13}),em(e,0,1.6,8.2,5.4,.1),Up(e,0,.5,.4,9,5.4,.12,Y.red),[[-2.6,-.2],[-1.4,1.4],[1.7,-.6],[2.8,1.2],[.8,1.8]].forEach(([t,n],r)=>e.at(t,1,n,0,1,()=>Bp(e,0,0,.3+r,{sit:!0}))),e.at(-8.4,0,-4.2,.7,1,()=>{e.box(2.6,1.5,.22,Y.wood2,0,.2,0);for(let t=0;t<3;t++)e.box(.68,1,.04,Y.paper,-.84+t*.84,.46,.13,{wonk:.006});for(let t=0;t<3;t++)for(let n=0;n<4;n++)e.box(.5,.05,.03,n?`#a79b86`:Y.red,-.84+t*.84,1.26-n*.2,.16,{wonk:0});e.roof(.9,.42,3,Y.roof2,0,1.7,0,{ry:Math.PI/2}),e.door(0,0,.9),e.box(.1,.2,.1,Y.wood2,-1.1,0,0),e.box(.1,.2,.1,Y.wood2,1.1,0,0)}),e.at(8.4,0,-3.8,-.7,1,()=>{Op(e,0,-1.7,1.15),e.box(.5,.42,.5,Y.wood,0,0,-.6),Bp(e,0,-.6,0,{shirt:Y.blue,s:1.2}),e.at(0,.42,-.6,0,1,()=>{});for(let t=0;t<6;t++){let n=.7+t/5*1.75;Bp(e,Math.cos(n)*1.5,-.6+Math.sin(n)*1.5,-n-1.57,{sit:!0,s:.92})}}),e.at(-9.6,0,3.2,1.1,1,()=>{Hp(e,0,0,7,1.3),Hp(e,1.1,.4,4,1),Hp(e,-1,.3,5,1.05),e.box(.5,.5,.05,Y.gold,0,1.8,0,{rz:.78})}),e.at(9.8,0,3,-1.15,1,()=>{e.box(2.2,2,.2,Y.cream,0,0,0);for(let t=0;t<4;t++)for(let n=0;n<4;n++)e.box(.42,.38,.04,[Y.red,Y.gold,Y.teal,Y.blue][(t+n)%4],-.72+t*.48,.3+n*.42,.12,{wonk:0});e.roof(.6,.3,2.5,Y.roof,0,2,0,{ry:Math.PI/2})}),im(e,n,7,[[0,1.6,9],[-8.4,-4.2,2.4],[8.4,-3.8,3]],[Op]),am(e,n,t.seed,14),e.spot(0,2,.8).spot(-8.4,2.6,-4.2).spot(8.4,2.8,-3.8).spot(-9.6,3,3.2).spot(9.8,3,3),{dyn:[]}}function lm(e,t){let n=t.r;Ep(e,{r:n,seed:t.seed,palette:`moss`,wall:2.2,depth:14});let r=[];return e.at(0,0,-5,0,1,()=>{e.cyl(2.6,2.4,Y.white,0,0,0,{seg:12,ao:.82}),e.add(q.sphere(12,6),`#7fa8c0`,{y:2.4,sx:2.5,sy:2.1,sz:2.5}),e.box(1,.2,2.6,Y.dark,0,3.8,.8,{rx:.6}),e.box(.7,1.3,.06,Y.wood2,0,0,2.55),e.door(0,0,3.1);for(let t of[-1,1])e.glow(.5,.5,.05,Y.win,t*1.4,1,2.2,{ry:t*-.6})}),e.at(7.4,0,-3.6,-.75,1,()=>{e.box(4,.5,2.4,Y.wood2,0,0,0),e.box(4,2.8,.2,Y.ink,0,.5,-1.1),e.box(.42,2.8,.4,Y.wood,-1.95,.5,.4),e.box(.42,2.8,.4,Y.wood,1.95,.5,.4),e.box(4.4,.5,.5,Y.red,0,3.1,.4),e.box(.9,2.2,.08,Y.red,-1.5,1.05,.5),e.box(.9,2.2,.08,Y.red,1.5,1.05,.5),e.at(0,.5,0,0,1,()=>{Bp(e,-.5,0,0,{shirt:Y.pink}),Bp(e,.5,0,0,{shirt:Y.gold})})}),e.at(-7.8,0,-2.2,.8,1,()=>{e.box(2.6,.08,1.2,Y.wood3,0,.7,0);for(let[t,n]of[[-1.1,-.45],[1.1,-.45],[-1.1,.45],[1.1,.45]])e.box(.1,.7,.1,Y.wood2,t,0,n);e.box(.72,.6,.54,Y.metal,0,.78,0),e.box(.5,.36,.42,`#b6c2cc`,0,1.38,0),e.glow(.1,.1,.05,Y.screen,-.12,1.5,.22),e.glow(.1,.1,.05,Y.screen,.12,1.5,.22),e.cyl(.02,.3,Y.dark,0,1.74,0,{seg:4}),e.ball(.06,Y.red,0,2.06,0),e.box(.32,.22,.32,Y.orange,-.9,.78,.1),e.box(.26,.3,.26,Y.teal,.9,.78,-.1)}),e.at(-4.8,0,5.2,.3,1,()=>{[[`#d9432f`,-.7,0],[`#3d86c6`,.15,.1],[`#e3a73b`,.95,-.05]].forEach(([t,n,r],i)=>e.box(.74,.74,.74,t,n,0,0,{ry:i*.3})),e.box(.74,.74,.74,`#5a9b4e`,.1,.74,0,{ry:.5}),e.add(q.sphere(12,8),Y.sky,{x:-2.1,y:1.1,sx:.56,sy:.56,sz:.56}),e.cyl(.36,.1,Y.wood2,-2.1,0,0,{}),e.cyl(.05,.56,Y.wood2,-2.1,.08,0,{seg:4})}),e.at(5.2,0,5.2,-.4,1,()=>{e.cone(1.25,1.5,Y.orange,-.9,0,0,{seg:4}),e.cone(1.15,1.35,Y.teal,1.25,0,-.5,{seg:4}),e.door(-.9,0,1.6),e.cyl(.32,.1,Y.stone2,.1,0,1.2),e.ball(.14,Y.orange,.1,.2,1.2)}),e.at(-1.2,0,7.8,0,1,()=>{for(let t=0;t<9;t++){let n=t/8*Math.PI,r=1.36;e.add(q.box(),[Y.red,Y.gold,Y.teal,Y.blue,Y.purple][t%5],{x:Math.cos(n)*r,y:Math.sin(n)*r+.16,sx:.5,sy:.3,sz:.5,rz:n+Math.PI/2})}}),e.at(-9.4,0,3.4,0,1,()=>{e.cyl(.62,.5,Y.stone,0,0,0,{seg:8}),e.glow(.34,.5,.34,Y.gold,0,.5,0,{ry:.78}),e.ball(.62,Y.gold,0,1.46,0,{detail:1,layer:`glow`})}),e.at(9.4,0,2.8,0,1,()=>{e.cyl(.05,1.1,Y.dark,0,0,0,{seg:5}),e.ball(.5,`#f4a0a8`,0,1.4,0,{detail:1,sy:1.08}),e.ball(.22,`#5a9b4e`,.26,1.86,0,{sy:.46,sz:.7})}),e.at(3.8,0,-8.4,.2,1,()=>{e.box(2.8,1.8,1.8,Y.cream,0,0,0),e.glow(1.5,.85,.05,Y.screen,0,.6,.91),e.roof(2.3,.6,3.2,Y.roof2,0,1.8,0,{ry:Math.PI/2});let t=om(e=>{e.box(.06,.06,1,Y.metal,0,0,0),e.add(q.cone(8),Y.white,{y:.15,sx:.5,sy:.3,sz:.5,rx:Math.PI})},0,0,0);r.push(t),t.obj.position.copy(e.point(.9,2.9,0)),e.cyl(.04,.9,Y.metal,.9,2,0,{seg:4})}),e.at(8.2,0,-7,-.5,1,()=>{e.cyl(.36,3,Y.gold,0,0,0,{seg:6}),e.cone(.36,.72,Y.wood3,0,3,0,{seg:6}),e.cone(.12,.24,Y.ink,0,3.5,0,{seg:6}),e.cyl(.38,.32,Y.pink,0,0,0,{seg:6}),Ip(e,-1.2,.8,.6)}),im(e,n,5,[[0,-5,4],[7.4,-3.6,3.4],[-7.8,-2.2,2.2],[-4.8,5.2,2.6],[5.2,5.2,2.6],[-1.2,7.8,2],[3.8,-8.4,2.4],[8.2,-7,2],[-9.4,3.4,1.4],[9.4,2.8,1.4]]),am(e,n,t.seed,12),Rp(e,[[0,10],[0,2],[-2,-1.5]],.6),e.spot(-4.8,2.4,5.2).spot(5.2,2.4,5.2).spot(-7.8,3,-2.2).spot(-1.2,2.6,7.8).spot(0,6,-5).spot(-9.4,3,3.4).spot(7.4,4.6,-3.6).spot(9.4,3,2.8).spot(3.8,3.6,-8.4).spot(8.2,5,-7),{dyn:r}}function um(e,t){let n=t.r;Ep(e,{r:n,seed:t.seed,palette:`green`,wall:2.6,depth:15});let r=[];e.ball(4.2,`#7fa84d`,-2.8,0,-9.6,{detail:1,sy:.8}),e.ball(5.6,`#6f9a48`,2.6,0,-9.6,{detail:1,sy:.82}),e.ball(5,`#86ad52`,8.8,0,-7.6,{detail:1,sy:.66}),[[-7.6,-6.4],[-5.2,-5.6],[-3.6,-6.2],[6.2,-6.4],[9.6,-5.2],[11,-3.4]].forEach(([t,n])=>Ap(e,t,n,.72)),[[-5.2,-10.2],[-3.4,-7.4],[-1.2,-8],[3.6,-8.3],[7,-8.2],[9.4,-7.3]].forEach(([t,n])=>kp(e,t,n,.72,2.1));let i=new ja(1,26);i.rotateX(-Math.PI/2);let a=new hp(3);a.add(i.toNonIndexed(),`#4fa9d6`,{sx:7.2,sz:3.6,layer:`water`,wonk:0,ao:1});let o=a.build();o.position.set(.8,1.05,-3.4),r.push({obj:o,lake:!0}),e.cyl(7.6,.2,`#6c8f4b`,.8,.02,-3.4,{seg:24,sz:4.05,wonk:0}),e.at(.8,0,-.2,0,1,()=>{e.box(11.4,1.5,1.4,`#a79f8a`,0,0,0,{ao:.78}),e.box(11.4,.1,.8,`#d5ccb7`,0,1.5,0);for(let t=0;t<6;t++)e.box(1.3,1.5,.1,`#928a77`,-4.6+t*1.84,0,.72,{wonk:.01});e.box(1.6,1.46,.3,Y.water,3.8,.02,.78,{layer:`water`,wonk:0,ao:1}),e.box(1.4,.34,.5,Y.dark,-4.4,1.5,0)}),Rp(e,[[3.8,1.4],[4.6,3],[5.6,5],[7.8,6.8]],.3),e.at(-9,0,2.8,.7,1,()=>{Gp(e,0,0,0,{w:2.5,d:1.7,wall:`#cdbfa0`,roof:`#5e6a70`}),Gp(e,1.9,1.6,.2,{w:1.9,d:1.4,wall:`#d7c9a8`,roof:`#5e6a70`})}),jp(e,-11,-2,.92),e.at(-3.8,0,3.8,.12,1,()=>{e.cyl(2,1.3,`#e7dbc2`,0,0,0,{seg:12,ao:.84}),e.cyl(2.25,.5,Y.tile,0,1.3,0,{rt:1.5,seg:12}),e.cyl(1.4,.5,Y.roof,0,1.8,0,{rt:.5,seg:12}),e.glow(.8,.5,.05,Y.win,0,.3,1.97),e.door(0,0,2.6)}),e.at(3.6,0,7.2,-.2,1,()=>{for(let t=0;t<4;t++)Gp(e,-3.4+t*2,0,0,{w:1.8,d:1.5,wall:[`#e5d4b3`,`#d7bd96`,`#ead9bb`,`#ccae85`][t],roof:Y.brick2,win:t%2==0});e.box(8.2,.05,1,`#c7bca6`,-.4,0,1.4,{wonk:.02}),e.at(4.5,0,.4,-.5,1,()=>{e.box(1.5,.9,1.2,`#c9553b`,0,0,0),e.door(0,0,1.1),e.roof(1.7,.5,2,`#d3a03c`,0,.9,0,{ry:Math.PI/2}),e.glow(.4,.5,.05,`#ff9a54`,0,.2,.62)})}),e.at(-2.8,1.07,-3.6,.3,1,()=>{e.box(1.3,.22,.5,Y.white,0,0,0),e.box(.5,.26,.36,Y.teal,-.1,.22,0),e.box(.9,.06,.12,Y.wood2,1.5,-.06,.2)}),e.at(9.8,0,3.2,-.9,1,()=>{e.box(5,.05,.86,Y.water,0,.02,0,{layer:`water`,wonk:0,ao:1});for(let t=0;t<=6;t++){let n=t/6*Math.PI;e.box(.42,.14,1.1,Y.stone,Math.cos(n)*.95,Math.sin(n)*.56+.05,0,{rz:n-1.57})}e.at(-2.6,0,1.4,.5,1,()=>{e.box(.84,.72,.62,Y.stone,0,0,0),e.roof(.92,.34,1.16,Y.roof,0,.72,0,{ry:Math.PI/2}),e.glow(.28,.3,.05,`#ff9a54`,0,.16,.32)})});for(let[t,n]of[[-6.4,6.6],[-7.2,7.4],[-5.5,7.3]])Bp(e,t,n,2.4,{shirt:Y.gold});return zp(e,-6.4,8.4,1.6,Y.orange),am(e,n,t.seed,12),e.spot(-9,3,2.8).spot(-3.8,3.4,3.8).spot(.8,3,-.2).spot(-2.8,2.6,-3.6).spot(3.6,3,7.2).spot(9.8,2.2,3.2),{dyn:r,walk:{keepOut:[[.8,-3.4,8,4.5]]}}}function dm(e,t){let n=t.r;Ep(e,{r:n,seed:t.seed,palette:`teal`,wall:2.2,depth:13});let r=[];e.at(0,0,-1.6,0,1,()=>{e.cyl(2.2,.5,Y.stone,0,0,0,{seg:10});for(let t=0;t<4;t++){let n=.785+t*1.57;e.add(q.box(),Y.metal,{x:Math.cos(n)*.6,y:3.6,z:Math.sin(n)*.6,sx:.12,sy:6.4,sz:.12,rx:Math.sin(n)*.14,rz:-Math.cos(n)*.14})}for(let t=1;t<6;t++)e.box(1.5-t*.2,.08,1.5-t*.2,`#6f7a84`,0,.5+t*1.08,0);e.ball(.32,Y.screen,0,7,0,{detail:1,layer:`glow`});for(let t=0;t<3;t++)e.add(q.torus(24,.04),Y.screen,{y:7,sx:.9+t*.6,sy:.9+t*.6,sz:.9+t*.6,rx:1.57,layer:`glow`,wonk:0})}),e.at(-5.4,0,-5,.5,1,()=>{e.box(4,2.8,.2,Y.dark,0,.5,0,{ao:1}),e.glow(3.6,2.4,.06,Y.screen,0,.7,.11),e.box(.5,.5,.4,Y.metal,0,0,-.1);for(let t=0;t<4;t++)e.box(.8,.8,.02,[`#ffd166`,`#ef6f6c`,`#7bd389`,`#ffffff`][t],-1.1+t%2*1.2+.5,1+Math.floor(t/2)*1,.15,{layer:`glow`,wonk:0})});let i=new hp(9);i.add(q.sphere(12,5),`#e9edf0`,{sx:1.5,sy:.54,sz:1.5,ry:0,rx:Math.PI}),i.cyl(.05,1,Y.metal,0,0,0,{seg:4});let a=i.build();a.position.set(6.4,2.5,-6),a.rotation.x=.7,r.push({obj:a,update:e=>{a.rotation.y=Math.sin(e*.3)*1.4}}),e.cyl(.3,2.4,Y.metal,6.4,0,-6,{seg:6}),e.at(-8.6,0,1,1,.8,()=>{e.box(2,1.2,1.6,`#7b5a3e`,0,0,0),e.roof(1.9,.8,2.4,`#3f7a4e`,0,1.2,0,{ry:Math.PI/2}),e.door(0,0,1.4),e.ball(.2,Y.red,-.72,.42,.84),e.ball(.14,Y.gold,.7,.6,.84)}),e.at(-4.6,0,5.8,.3,1,()=>{for(let t=0;t<3;t++){e.box(2.2,.3,.5,`#6b4a31`,0,0,-.74+t*.74);for(let n=0;n<5;n++)e.ball(.13,`#6fa548`,-.88+n*.44,.42,-.74+t*.74,{sway:.4})}}),e.at(.4,0,6.8,0,1,()=>{e.box(.12,1.1,.12,Y.wood2,0,0,0),e.box(1,1,.08,Y.cream,0,.9,0);for(let t=0;t<25;t++)t*7%3!=0&&e.box(.14,.14,.02,Y.ink,-.3+t%5*.15,1.1+Math.floor(t/5)*.15,.05,{wonk:0})}),e.at(5,0,5.6,-.3,1,()=>{for(let t=0;t<3;t++)e.box(.9,.7,.06,Y.wood,-1+t,.6+t%2*.16,0,{rz:(t-1)*.06}),e.box(.72,.52,.02,[`#9b8e7c`,`#b6a990`,`#807465`][t],-1+t,.69+t%2*.16,.04,{wonk:0});e.box(3,.08,.1,Y.wood2,0,1.5,0),e.box(.08,1.5,.08,Y.wood2,-1.45,0,0),e.box(.08,1.5,.08,Y.wood2,1.45,0,0)}),Hp(e,8.8,2,5,.9,.4),e.at(8.8,1.1,2,.4,1,()=>e.glow(.8,.05,.56,Y.screen,0,0,0)),e.at(-9.8,0,-3.4,1.1,1,()=>{e.box(1.7,1.4,.14,Y.dark,0,.5,0),e.glow(1.5,1.2,.05,`#ffe9a8`,0,.6,.08),e.box(.2,.5,.2,Y.metal,0,0,0)}),e.at(9.8,0,-2.2,-1.1,1,()=>{e.cyl(.6,.3,Y.stone,0,0,0),e.add(q.sphere(14,8),Y.teal,{y:1.05,sx:.8,sy:.8,sz:.8}),e.add(q.torus(24,.05),Y.gold,{y:1.05,sx:1,sy:1,sz:1,rx:1.3})}),e.at(3.6,0,2.6,-.2,1,()=>{e.ball(.8,Y.white,0,.6,0,{detail:1}),e.add(q.torus(14,.28),Y.red,{y:1.05,sx:.5,sy:.5,sz:.5,rx:1.57})}),e.at(3.2,0,-7.8,0,1,()=>{for(let t=0;t<3;t++){e.box(.8,2,.7,Y.dark,-.9+t*.9,0,0,{ao:1});for(let n=0;n<5;n++)e.glow(.56,.08,.04,n%2?Y.screen:`#7bd389`,-.9+t*.9,.3+n*.32,.37)}}),e.at(-1.6,0,3,.2,1,()=>{e.box(.5,.74,.32,`#dfe6ea`,0,.3,0),e.box(.1,.3,.1,Y.metal,-.14,0,0),e.box(.1,.3,.1,Y.metal,.14,0,0),e.ball(.27,`#dfe6ea`,0,1.26,0,{detail:1}),e.glow(.32,.1,.04,Y.screen,0,1.26,.25)}),e.at(-1.4,0,-7.4,.1,1,()=>{e.box(2.4,1.7,.14,`#c08a55`,0,.4,0);for(let t=0;t<6;t++)e.box(.5,.46,.03,[`#ffd166`,`#ef9fb0`,`#9bd7f0`,`#b6e3a6`][t%4],-.72+t%3*.72,.6+Math.floor(t/3)*.7,.09,{wonk:.01,rz:(t%2?1:-1)*.06});e.box(.1,.4,.1,Y.wood2,-1,0,0),e.box(.1,.4,.1,Y.wood2,1,0,0)});for(let t=0;t<16;t++){let t=e.rand(6.283),r=e.rand(2,n*.72);e.glow(.2,.2,.2,e.pick([Y.screen,`#ffd166`,`#ef6f6c`,`#7bd389`]),Math.cos(t)*r,e.rand(3,7),Math.sin(t)*r,{sway:.8})}return am(e,n,t.seed,10),e.spot(-8.6,2.2,1).spot(-4.6,1.6,5.8).spot(.4,2.6,6.8).spot(5,2.6,5.6).spot(8.8,2,2).spot(-9.8,2.8,-3.4).spot(9.8,2.6,-2.2).spot(3.6,2.2,2.6).spot(3.2,3,-7.8).spot(-1.6,2.4,3).spot(-1.4,3,-7.4),{dyn:r}}function fm(e,t){let n=t.r;return Ep(e,{r:n,seed:t.seed,palette:`amber`,wall:2.2,depth:12}),e.at(0,0,-3.2,0,1,()=>{e.box(9,3.2,3.8,Y.cream,0,0,0,{ao:.84}),e.roof(4.3,1.5,9.6,Y.roof2,0,3.2,0,{ry:Math.PI/2}),e.door(0,0,2.7);for(let t=0;t<7;t++){let n=[Y.red,Y.blue,Y.gold,Y.teal,Y.purple,Y.green,Y.orange][t];e.box(.86,2.5,.2,n,-3.4+t*1.14,.2,2),e.box(.86,.14,.22,Y.paper,-3.4+t*1.14,1.9,2.02)}e.box(1.2,1.6,.26,Y.wood2,0,0,2.04),e.glow(.9,.5,.05,Y.win,0,1.7,2.18)}),Zp(e,-5.2,0,3.6,.5,1.5,Jp),Zp(e,4.6,.1,3.4,-.6,1.25,Yp),em(e,.4,4,3.3,2.1),Zp(e,.3,0,4.1,.1,.8,Jp),[[-7.5,4.6,-6,.6],[7.6,5,-5.6,-.6]].forEach(([t,n,r,i])=>e.at(t,n,r,i,1,()=>{e.box(2.2,2.4,.5,Y.wood2,0,0,0);for(let t=0;t<3;t++)for(let n=0;n<6;n++)e.box(.26,.56,.3,e.pick([Y.red,Y.blue,Y.gold,Y.teal,Y.green]),-.8+n*.32,.14+t*.74,.12)})),Hp(e,-7.8,.6,6,1.2),Hp(e,8,.2,5,1.1),e.at(7.4,0,3.6,-.6,1,()=>$p(e,0,0,0,Y.wood3)),Fp(e,-3,6.6),Fp(e,3.4,6.8),im(e,n,6,[[0,-3.2,6],[.4,4,4],[-5.2,3.6,2],[4.6,3.4,2]],[Op]),am(e,n,t.seed,12),e.spot(0,5.4,-3.2).spot(-7.8,2.4,.6).spot(8,2.2,.2).spot(.4,2.2,4),{dyn:[]}}function pm(e,t){let n=t.r;Ep(e,{r:n,seed:t.seed,palette:`moss`,wall:2.6,depth:13});let r=[];e.at(1.4,0,-2.6,0,1,()=>{e.cyl(2.6,.7,Y.stone,0,0,0,{seg:10}),e.door(0,0,3.1);for(let t=0;t<6;t++)e.cyl(1.7-t*.14,1.34,t%2?Y.white:Y.red,0,.7+t*1.34,0,{rt:1.56-t*.14,seg:10,ao:.92});e.cyl(1.2,.14,Y.dark,0,8.74,0,{seg:10}),e.glow(.86,1,.86,`#ffe7a3`,0,8.88,0,{ry:.4}),e.cone(1.14,.9,Y.red,0,9.88,0,{seg:10}),e.ball(.14,Y.gold,0,10.86,0);for(let t=0;t<3;t++)e.glow(.3,.42,.05,Y.win,Math.sin(t*2.1)*1.5,1.2+t*2.5,Math.cos(t*2.1)*1.5,{ry:t*2.1})});let i=new Na(2.6,26,12,1,!0);i.rotateZ(Math.PI/2),i.translate(13,0,0);let a=new Bi(i,new Oi({color:`#ffeeb0`,transparent:!0,opacity:0,depthWrite:!1,side:2})),o=new Jn;o.add(a),o.position.set(1.4,9.3,-2.6);let s=0;r.push({obj:o,quest:e=>{s=e===`done`?1:e===`stuck`?-1:0},update:(e,t)=>{o.rotation.y=e*.5,a.material.opacity=s>0?Math.max(.5,t.night*.2):t.night*.2,o.visible=s>0||s===0&&t.night>.05}});let c=new hp(4);c.add(q.torus(20,.1),Y.wood2,{wonk:0});for(let e=0;e<8;e++)c.add(q.box(),Y.wood3,{rz:e*.785,sx:2.1,sy:.08,sz:.08,wonk:0});c.add(q.cyl(10),Y.gold,{rx:1.57,sx:.22,sy:.2,sz:.22});let l=c.build();l.position.set(-6,1.9,2.6),l.rotation.y=.5,r.push({obj:l,update:e=>{l.children.forEach(t=>{t.rotation.z=Math.sin(e*.5)*.6})}}),e.box(.3,1.2,.3,Y.wood2,-6,0,2.6),e.at(-6.8,0,-3.8,.6,1,()=>{Gp(e,0,0,0,{w:3,d:2,h:1.5,wall:Y.white,roof:Y.roof2})}),e.at(7.2,0,2.6,-.8,1,()=>{Gp(e,0,0,0,{w:2.5,d:1.8,wall:Y.cream,roof:Y.roof})}),e.at(5.4,0,6.6,-.4,1,()=>{e.box(2.4,.5,.86,Y.wood2,0,.1,0),e.cone(.43,.6,Y.wood2,1.5,.3,0,{seg:4,rz:-1.57,sy:.6}),e.cyl(.04,2.4,Y.wood,0,.5,0,{seg:4}),e.add(q.prism(),Y.paper,{x:.05,y:.8,sx:1.5,sy:1.8,sz:.04,sway:.3})}),e.at(-3.6,0,7,.3,1,()=>{e.box(2,1.1,1,Y.teal,0,.34,0),e.box(1.8,.8,.04,Y.paper,0,.48,.52);for(let t=0;t<8;t++)e.box(.16,.58,.05,e.pick([Y.red,Y.gold,Y.blue]),-.76+t*.22,.54,.55);e.cyl(.2,.08,Y.dark,-.7,.14,.52,{rx:1.57}),e.cyl(.2,.08,Y.dark,.7,.14,.52,{rx:1.57})});for(let t=0;t<5;t++)Bp(e,-1+t*.6,4.2+t%2*.4,3.2,{shirt:[Y.blue,Y.gold,Y.teal,Y.orange,Y.pink][t]});return im(e,n,6,[[1.4,-2.6,3.6],[-6.8,-3.8,2.8],[7.2,2.6,2.6],[5.4,6.6,2],[-3.6,7,2],[-6,2.6,1.4],[0,4.4,2.4]],[kp,Op]),am(e,n,t.seed,10),e.spot(1.4,11.6,-2.6).spot(-3.6,2.6,7).spot(-6.8,3.6,-3.8).spot(7.2,3.4,2.6).spot(-6,3.4,2.6),{dyn:r}}function mm(e,t){let n=t.r;Ep(e,{r:n,seed:t.seed,palette:`amber`,wall:2.2,depth:12});let r=[];e.at(0,0,-3,0,1,()=>{e.box(7,2.6,3.6,`#d9b98a`,0,0,0,{ao:.84}),e.roof(4.2,1.3,7.6,`#9c5b3b`,0,2.6,0,{ry:Math.PI/2}),e.cyl(.42,2,Y.brick2,2.4,2.8,-.6,{seg:6});for(let t=0;t<4;t++)e.glow(.86,.9,.05,Y.win,-2.5+t*1.66,.74,1.81);e.box(1,1.5,.06,Y.wood2,0,0,1.82),e.door(0,0,2.3)});let i=(e,t,n,i,a,o)=>{let s=new hp(2);s.add(q.cyl(14),t,{rx:1.57,sx:e,sy:.2,sz:e,wonk:0});for(let n=0;n<10;n++)s.add(q.box(),t,{x:Math.cos(n*.628)*e,y:Math.sin(n*.628)*e,rz:n*.628,sx:.34*e,sy:.3*e,sz:.2,wonk:0});s.add(q.cyl(8),Y.ink,{rx:1.57,sx:e*.3,sy:.26,sz:e*.3,wonk:0});let c=s.build();c.position.set(i,a,o),r.push({obj:c,update:e=>{c.children.forEach(t=>{t.rotation.z=e*n})}})};i(1.5,`#c9a15b`,.5,-5.2,2.7,-1.6),i(1,`#a2692f`,-.75,-3.5,3.5,-1.5),i(.8,`#8d97a0`,.94,5.2,3,-1.3),e.at(-5,0,3.8,.5,1,()=>{e.box(3.4,.08,1.3,Y.wood3,0,.62,0),e.box(.14,.62,1,Y.wood2,-1.3,0,0),e.box(.14,.62,1,Y.wood2,1.3,0,0),Hp(e,-.8,0,3,.6,0,.7),e.box(.7,.03,.5,Y.paper,.6,.7,0);for(let[t,n]of[[-1,.94],[0,1],[1,.94],[-.6,-.94],[.6,-.94]])Bp(e,t,n,n>0?3.14:0,{shirt:e.pick([Y.blue,Y.pink,Y.teal,Y.white,Y.orange]),s:1.25})}),e.at(5.2,0,3.6,-.6,1,()=>{e.box(3.4,2.2,.16,Y.wood2,0,.3,0),e.box(3.1,1.9,.05,`#2f4a3d`,0,.45,.08,{wonk:.004});for(let t=0;t<4;t++)e.box(1.8-t*.26,.05,.02,Y.paper,-.4,1.8-t*.34,.11,{wonk:0});Bp(e,1.9,.8,-.8,{shirt:Y.teal,s:1.3})}),e.at(.4,0,7.4,0,1,()=>{for(let t=0;t<7;t++){let n=t/6*6.283,r=t===6?0:Math.cos(n)*.74,i=t===6?0:Math.sin(n)*.74;e.cyl(.42,.4+t%3*.3,Y.gold,r,0,i,{seg:6})}});for(let[t,n,r]of[[-1.6,2.6,Y.blue],[-.6,3.1,Y.red],[.6,2.7,Y.gold],[1.6,3.2,Y.green]])e.box(.9,.1,.9,r,t,0,n,{ry:.2});return im(e,n,6,[[0,-3,5],[-5,3.8,3],[5.2,3.6,3],[.4,7.4,1.6]],[Op]),am(e,n,t.seed,10),e.spot(-5,2.6,3.8).spot(0,5.2,-3).spot(.4,2.2,7.4).spot(5.2,3.2,3.6).spot(-5.2,4.6,-1.6),{dyn:r}}function hm(e,t){let n=t.r;Ep(e,{r:n,seed:t.seed,palette:`green`,wall:2.2,depth:12});let r=[];e.at(0,0,0,0,1,()=>{e.box(2.4,2,2.4,Y.gold,0,0,0),e.door(0,0,1.9),e.box(2.4,1.3,2.4,`#b8c0c8`,-2.4,0,.1),e.box(2.4,.86,2.4,`#cd8a4f`,2.4,0,.1),e.box(.9,.4,.06,Y.white,0,.9,1.21),e.at(0,2,0,0,1.7,()=>{e.cyl(.42,.2,Y.ink,0,0,0,{seg:8}),e.cyl(.1,.5,Y.gold,0,.2,0,{seg:6}),e.cyl(.26,.7,Y.gold,0,.7,0,{rt:.56,seg:10}),e.add(q.torus(12,.14),Y.gold,{x:-.56,y:1.1,sx:.28,sy:.28,sz:.28}),e.add(q.torus(12,.14),Y.gold,{x:.56,y:1.1,sx:.28,sy:.28,sz:.28})}),Bp(e,-2.4,.1,0,{shirt:Y.gold,s:1}),e.at(-2.4,1.3,.1,0,1,()=>Bp(e,0,0,0,{shirt:Y.blue,s:1.1})),e.at(2.4,.86,.1,0,1,()=>Bp(e,0,0,0,{shirt:Y.red,s:1.1}))});let i=new hp(6),a=new fo;for(let e=0;e<10;e++){let t=e/10*6.283+1.57,n=e%2?.45:1;e?a.lineTo(Math.cos(t)*n,Math.sin(t)*n):a.moveTo(Math.cos(t)*n,Math.sin(t)*n)}let o=new Xo(a,{depth:.26,bevelEnabled:!1});i.add(o.toNonIndexed(),Y.gold,{layer:`glow`,wonk:0,ao:1});let s=i.build();s.position.set(0,7,0);let c=1,l=1;r.push({obj:s,quest:e=>{l=e===`stuck`?0:1,e===`done`&&(c=.05)},update:e=>{c+=(l-c)*.08,s.visible=c>.03,s.scale.setScalar(c),s.rotation.y=e*.8,s.position.y=7+Math.sin(e)*.3}});for(let t=0;t<7;t++)Vp(e,-8+t*.1,t*.42,-4+t*.84,2.6,.42,1.2,[Y.red,Y.blue,Y.gold,Y.teal,Y.purple,Y.green,Y.orange][t],.22);e.at(7.4,0,-3.6,-.7,1,()=>{e.box(3,4,.34,Y.teal,0,.2,0,{rx:-.08}),e.box(2.7,3.7,.06,Y.paper,0,.35,.2,{rx:-.08});for(let t=0;t<6;t++)e.cyl(.36,.05,[Y.red,Y.gold,Y.blue,Y.green,Y.orange,Y.purple][t],-.6+t%2*1.2,1.2+Math.floor(t/2)*.95,.3,{seg:12,rx:1.5})}),zp(e,-3,6.4,3,Y.blue),zp(e,0,7,3.6,Y.gold),zp(e,3,6.4,3,Y.red),e.at(8.4,0,3.8,-1,1,()=>{e.cyl(.8,.8,Y.blue,0,0,0,{seg:10}),e.box(1.8,1.5,.1,Y.wood3,0,.3,.86)});let u=new hp(8);for(let e=0;e<8;e++)u.add(q.box(),Y.wood2,{rz:e*.785,sx:1.7,sy:.12,sz:.3,wonk:0});let d=u.build();return d.position.set(7.6,1.6,4.6),d.rotation.y=-1,r.push({obj:d,update:e=>{d.children.forEach(t=>{t.rotation.z=-e*1.3})}}),e.at(-7.2,0,3.8,.8,1,()=>{e.box(1.8,.05,1,Y.wood3,0,.48,0),e.box(.1,.48,.8,Y.wood2,-.7,0,0),e.box(.1,.48,.8,Y.wood2,.7,0,0),Bp(e,-.34,.74,3.14,{shirt:Y.blue,s:1.3}),Bp(e,.42,.74,3.14,{shirt:Y.gold,s:.95})}),im(e,n,5,[[0,0,6],[-8,0,4.6],[7.4,-3.6,3],[8.4,3.8,2.6],[-7.2,3.8,2.2],[0,6.8,3.6]],[Op]),am(e,n,t.seed,12),e.spot(-7.6,3.6,-1.4).spot(0,6,0).spot(7.4,5,-3.6).spot(-7.2,2.4,3.8).spot(8.4,3.2,3.8),{dyn:r}}function gm(e,t){let n=t.r;Ep(e,{r:n,seed:t.seed,palette:`green`,wall:2.2,depth:13}),e.at(-1.4,0,-1.6,.18,1,()=>{e.box(5.4,2.1,3.3,`#7b5a3e`,0,.2,0,{ao:.82});for(let t=0;t<6;t++)e.box(5.46,.05,3.36,`#684a31`,0,.45+t*.34,0,{wonk:0});e.roof(4.3,1.5,6.4,`#3f7a4e`,0,2.3,0,{ry:Math.PI/2}),e.box(5.6,.2,3.8,Y.wood2,0,0,.26),e.box(1,1.5,.1,Y.wood3,0,.2,1.68),e.door(0,0,2.5),e.glow(.8,.8,.05,Y.win,-1.7,.9,1.68),e.glow(.8,.8,.05,Y.win,1.7,.9,1.68),[Y.red,Y.orange,Y.gold,Y.green,Y.blue].forEach((t,n)=>e.add(q.torus(16,.06,.5),t,{x:-1.7,y:.3,z:1.7,sx:.78-n*.1,sy:.78-n*.1,sz:.3,wonk:0})),e.ball(.24,Y.red,1.7,.56,1.72,{sz:.4})});let r=(t,n,r,i=Y.red)=>e.at(t,0,n,0,r,()=>{e.cyl(.24,.7,Y.paper,0,0,0,{rt:.17,seg:7}),e.add(q.sphere(9,4),i,{y:.7,sx:.66,sy:.5,sz:.66});for(let t=0;t<4;t++)e.ball(.09,Y.white,Math.cos(t*1.57)*.34,1,Math.sin(t*1.57)*.34)});r(-7.4,3.2,2.1),r(-5.8,4.4,1.3,Y.orange),r(-8.6,1,1.5,Y.gold),r(5.6,6.2,1.2),r(-3,6.6,1),[Y.red,Y.orange,Y.gold,Y.green,Y.blue,Y.purple].forEach((t,n)=>e.add(q.torus(32,.11/(7-n)*3.6,.5),t,{x:6.8,y:.1,z:-5,ry:-.5,sx:6.2-n*.42,sy:6.2-n*.42,sz:.74-n*.06,wonk:0,ao:1})),e.at(-3.2,.1,4.4,.4,1.3,()=>{e.ball(.62,Y.red,0,.34,0,{detail:1,sy:.62}),e.ball(.28,Y.ink,0,.3,.56);for(let[t,n]of[[.3,.1],[-.3,.1],[.24,-.3],[-.24,-.3]])e.ball(.09,Y.ink,t,.68,n)}),e.at(6.8,0,3.2,-.3,1,()=>{for(let t=0;t<4;t++){e.box(4,.26,.74,`#6b4a31`,0,0,-1.5+t);for(let n=0;n<8;n++)t===1?(e.cone(.14,.3,Y.orange,-1.6+n*.46,.2,-.5,{seg:5,rx:Math.PI,y:.3}),e.ball(.13,`#7fb04f`,-1.6+n*.46,.5,-.5,{sway:.4})):e.ball(.18,t%2?`#8cbf55`:`#6fa548`,-1.6+n*.46,.38,-1.5+t,{sway:.4})}Lp(e,-2.2,-2.1,2.2,-2.1),Lp(e,2.3,-2.1,2.3,2),e.box(.1,1.5,.1,Y.wood2,-2.8,0,.6),e.box(.8,.09,.09,Y.wood2,-2.8,1.1,.6),e.cone(.34,.3,`#d8bc6e`,-2.8,1.5,.6,{seg:8}),e.ball(.17,Y.paper,-2.8,1.4,.6)}),e.at(1.6,0,7,-.1,1,()=>{e.box(2.2,1.7,.56,Y.wood,0,0,0);for(let t=0;t<3;t++)for(let n=0;n<6;n++)e.box(.26,.38,.1,e.pick([Y.red,Y.blue,Y.gold,Y.teal,Y.green]),-.8+n*.32,.16+t*.5,.28);e.roof(.9,.34,2.5,Y.roof,0,1.7,0,{ry:Math.PI/2})});for(let[t,n,r]of[[-.8,3.8,1.2],[-.2,4.1,.86],[2.6,2.8,1.2],[3.2,3.1,.86]])Bp(e,t,n,.4,{sit:r<1,shirt:r<1?Y.gold:Y.teal,s:r});return[[-10,-3,1],[-8.5,-6.4,1.3],[-4.8,-8.6,1.2],[-.8,-9.8,1.3],[3,-9.2,1],[10,-1.6,1]].forEach(([t,n,r])=>{rm(e,t,n)||Op(e,t,n,r)}),[[-11.2,0,1],[-6.4,-8.4,1.2],[1,-8,1.1],[-3.5,-7,1],[-9.8,-5,1.1]].forEach(([t,n,r])=>{rm(e,t,n)||kp(e,t,n,r)}),Np(e,-4,7.6,12,1.4),Np(e,5.6,8,10,1.2),Np(e,-8.6,6.4,10,1.2),am(e,n,t.seed,8),e.spot(-1.4,5,-1.6).spot(1.6,3,7).spot(-7.4,3.2,3.2).spot(6.8,2.4,3.2),{dyn:[]}}function _m(e,t){let n=t.r;Ep(e,{r:n,seed:t.seed,palette:`teal`,wall:2.4,depth:11});let r=[];e.at(-1,0,-2,0,1,()=>{e.cyl(1.6,.4,Y.stone,0,0,0,{seg:8}),e.door(0,0,2.1);for(let t=0;t<4;t++){let n=.785+t*1.57;e.box(.16,5.6,.16,Y.wood2,Math.cos(n)*.72,.3,Math.sin(n)*.72)}for(let t=1;t<5;t++)e.box(1.7,.1,1.7,Y.wood,0,.4+t*1.1,0);e.box(2.2,.16,2.2,Y.wood3,0,5.9,0)}),e.at(6.6,0,-2.4,-.4,1,()=>{e.cyl(1.2,3.4,Y.cream,0,0,0,{rt:.8,seg:8,ao:.84}),e.cone(1,.9,Y.roof,0,3.4,0,{seg:8}),e.box(.5,.86,.05,Y.wood2,0,0,1.17)});let i=new hp(7);for(let e=0;e<4;e++)i.add(q.box(),Y.paper,{x:Math.cos(e*1.57)*1.5,y:Math.sin(e*1.57)*1.5,rz:e*1.57,sx:2.4,sy:.5,sz:.04,wonk:0}),i.add(q.box(),Y.wood2,{x:Math.cos(e*1.57)*1.5,y:Math.sin(e*1.57)*1.5,rz:e*1.57,sx:2.8,sy:.07,sz:.08,wonk:0});let a=i.build();a.position.copy(new H(6.1,3.5,-1.1)),a.rotation.y=-.4,r.push({obj:a,update:(e,t)=>{a.children.forEach(n=>{n.rotation.z=e*(.5+t.wind*.08)})}}),e.at(-5.4,0,3.4,.5,1,()=>{e.cyl(.42,1.2,Y.red,0,0,0,{seg:10}),e.add(q.sphere(10,4),Y.red,{y:1.2,sx:.42,sy:.3,sz:.42}),e.box(.4,.05,.03,Y.ink,0,.86,.42),e.at(1.9,0,.2,0,1,()=>{e.box(.14,1.4,.14,Y.wood2,0,0,0),e.cone(.6,1.1,Y.gold,0,1.6,.3,{seg:10,rx:-1.57,y:1.7})})}),e.at(3.4,0,3.6,-.3,1,()=>{e.box(3.2,1.8,.14,Y.wood3,0,.5,0),e.box(1.3,1.5,.03,Y.paper,-.74,.64,.08,{wonk:.008}),e.box(1.3,.7,.03,Y.sky,.74,1.44,.08,{wonk:.008}),e.box(1.3,.7,.03,Y.gold,.74,.64,.08,{wonk:.008}),e.box(.14,.5,.14,Y.wood2,-1.4,0,0),e.box(.14,.5,.14,Y.wood2,1.4,0,0)});for(let t=0;t<6;t++){let n=t*1.047;Bp(e,-1+Math.cos(n)*1.1,5.4+Math.sin(n)*1.1,-n-1.57,{sit:!0,shirt:e.pick([Y.teal,Y.pink,Y.white,Y.gold])})}return e.cyl(.42,.28,Y.wood,-1,0,5.4,{}),im(e,n,5,[[-1,-2,3],[6.6,-2.4,3],[3.4,3.6,2.6],[-5.4,3.4,3],[-1,5.4,2.2]],[Op]),am(e,n,t.seed,10),e.spot(-5.4,2.8,3.4).spot(-1,3,5.4).spot(6.6,5.4,-2.4),{dyn:r,moor:new H(-1,8.3,-2)}}function vm(e,t){let n=t.r;Ep(e,{r:n,seed:t.seed,palette:`amber`,wall:2,depth:16});let r=[];e.at(0,0,-2.4,0,1,()=>{e.cyl(4,.5,Y.stone,0,0,0,{seg:14}),e.door(0,0,4.5);for(let t of[-1,1])e.add(q.box(),`#b8c9d6`,{x:t*2,y:3.5,sx:1.5,sy:6.4,sz:1.1,rz:t*.1,ao:.82}),e.add(q.box(),`#a3b6c4`,{x:t*2.28,y:7.1,sx:1,sy:1,sz:1,rz:t*.1});e.cyl(.14,1.9,Y.orange,0,.5,0,{seg:6}),e.ball(.74,Y.orange,-.62,2.72,0,{detail:1,sx:1,sy:.5,sz:.56,rz:.6}),e.ball(.74,Y.orange,.62,2.72,0,{detail:1,sx:1,sy:.5,sz:.56,rz:-.6})}),e.at(-6.4,0,2.6,.5,1,()=>{for(let t=0;t<3;t++)e.add(q.box(),Y.wood2,{x:Math.cos(t*2.09)*.3,y:.6,z:Math.sin(t*2.09)*.3,sx:.08,sy:1.25,sz:.08,rx:Math.sin(t*2.09)*.38,rz:-Math.cos(t*2.09)*.38});e.add(q.cyl(10,.7),Y.gold,{y:1.5,sx:.28,sy:1.8,sz:.28,rx:1,rz:.3})});for(let t=0;t<8;t++){let n=2.6+t%4*1.4,r=3+Math.floor(t/4)*1.7;e.at(n,0,r,0,.4+t*.09,()=>{Op(e,0,0,1)})}return Hp(e,-2.4,5.4,6,1.2),Fp(e,-4.4,6),Fp(e,.4,6.8),am(e,n,t.seed,12),e.spot(0,9.6,-2.4).spot(-6.4,3.4,2.6).spot(5,3.4,4),{dyn:r}}var ym={core:sm,course:cm,inquiry:lm,walk:um,digital:dm,library:fm,admin:pm,teacher:mm,results:hm,forest:gm,brand:_m,future:vm};function bm(e,t=[]){let n=new hp(e.seed*97+13);n.gates=t;let r=ym[e.id](n,e),i=new Jn,a=n.build();i.add(a),(r.dyn||[]).forEach(e=>i.add(e.obj));let o=new hp(e.seed+200),s=Math.round(e.r/3),c=[`#8fb24f`,`#7ea650`];for(let t=0;t<s;t++){let t=o.rand(6.283),n=e.r*o.rand(1.16,1.42);Cp(o,Math.cos(t)*n,o.rand(-7,1.5),Math.sin(t)*n,o.rand(.55,1.2),o.pick(c),`#94795a`)}let l=o.build();return i.add(l),{group:i,terrain:a,rocks:l,anchors:n.anchors,doors:n.doors,dyn:r.dyn||[],walk:r.walk,moor:r.moor}}var xm=(e,t,n)=>e+(t-e)*n,Sm=(e,t=0,n=1)=>Math.min(n,Math.max(t,e)),Cm=(e,t,n)=>{let r=Sm((n-e)/(t-e));return r*r*(3-2*r)},wm={night:{top:`#12274f`,mid:`#27406f`,hor:`#4a6090`,sun:`#c2d3f5`,hemiS:`#6f8cc8`,hemiG:`#3a4260`,dir:1.7,hemi:1.9,cloud:`#aebfe0`,under:`#55689e`,exp:.95},dawn:{top:`#3f6db4`,mid:`#8fa9d4`,hor:`#f6b98b`,sun:`#ffb678`,hemiS:`#a9bde0`,hemiG:`#8a6a58`,dir:2.2,hemi:.95,cloud:`#ffe2cf`,under:`#c98f95`,exp:1},day:{top:`#2f8fd8`,mid:`#7cc0ea`,hor:`#d9eff5`,sun:`#fff1d2`,hemiS:`#cfe7ff`,hemiG:`#a58f6b`,dir:3.1,hemi:1.25,cloud:`#ffffff`,under:`#b9d2e6`,exp:1},storm:{top:`#5d6f82`,mid:`#8293a3`,hor:`#b4bfc6`,sun:`#dfe4ea`,hemiS:`#b3bfca`,hemiG:`#6f6a60`,dir:.9,hemi:1.15,cloud:`#c6ced6`,under:`#7e8b99`,exp:.96}},Tm={};for(let[e,t]of Object.entries(wm)){Tm[e]={};for(let[n,r]of Object.entries(t))Tm[e][n]=typeof r==`string`?new W(r):r}var Em=class{constructor(e){this.scene=e,this.uniforms={uTop:{value:new W},uMid:{value:new W},uHor:{value:new W},uSunDir:{value:new H(.5,.5,-.6)},uSunCol:{value:new W},uSunVis:{value:1},uStars:{value:0}};let t=new Bi(new is(900,32,20),new hs({side:1,depthWrite:!1,fog:!1,uniforms:this.uniforms,vertexShader:`
          varying vec3 vDir;
          void main(){ vDir = normalize(position); vec4 p = modelViewMatrix * vec4(position, 1.); gl_Position = projectionMatrix * p; }`,fragmentShader:`
          uniform vec3 uTop, uMid, uHor, uSunCol, uSunDir; uniform float uSunVis; varying vec3 vDir;
          void main(){
            vec3 d = normalize(vDir);
            float h = clamp(d.y * .5 + .5, 0., 1.);
            vec3 col = mix(uHor, uMid, smoothstep(.46, .6, h));
            col = mix(col, uTop, smoothstep(.56, .86, h));
            float s = max(dot(d, normalize(uSunDir)), 0.);
            col += uSunCol * (pow(s, 900.) * 3. + pow(s, 60.) * .32 + pow(s, 6.) * .12) * uSunVis;
            gl_FragColor = vec4(col, 1.);
            #include <colorspace_fragment>
          }`}));t.renderOrder=-10,e.add(t),this.dome=t;let n=new Float32Array(2700),r=new Float32Array(900);for(let e=0;e<900;e++){let t=Math.random(),i=Math.random()*.46+.5,a=t*Math.PI*2,o=Math.acos(2*i-1);n.set([Math.sin(o)*Math.cos(a)*860,Math.cos(o)*860,Math.sin(o)*Math.sin(a)*860],e*3),r[e]=Math.random()}let i=new Xr;i.setAttribute(`position`,new Ir(n,3)),i.setAttribute(`aS`,new Ir(r,1)),this.starMat=new hs({transparent:!0,depthWrite:!1,fog:!1,uniforms:{uStars:this.uniforms.uStars,uTime:tp.uTime,uPx:{value:1}},vertexShader:`
        attribute float aS; uniform float uTime, uPx; varying float vA;
        void main(){ vA = .35 + .65 * abs(sin(uTime * (.4 + aS) + aS * 40.)); gl_PointSize = (1.2 + aS * 2.2) * uPx; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }`,fragmentShader:`
        uniform float uStars; varying float vA;
        void main(){ float d = length(gl_PointCoord - .5); gl_FragColor = vec4(1., .97, .9, smoothstep(.5, .1, d) * vA * uStars); }`}),this.stars=new Ca(i,this.starMat),this.stars.frustumCulled=!1,this.stars.renderOrder=-9,e.add(this.stars),this.moon=new Bi(new is(16,20,14),new Oi({color:`#fdf3d0`,fog:!1,transparent:!0})),e.add(this.moon),this.dir=new rc(`#ffffff`,2),this.dir.castShadow=!0,this.dir.shadow.bias=-6e-4,this.dir.shadow.normalBias=.05;let a=this.dir.shadow.camera;a.left=-120,a.right=120,a.top=100,a.bottom=-100,a.near=40,a.far=460,e.add(this.dir,this.dir.target),this.hemi=new Hs(`#ffffff`,`#887766`,1),e.add(this.hemi),e.fog=new nr(`#ffffff`,460,1300),this.state={hour:12,sunrise:6,sunset:17.5,cloud:.2},this.env={night:0,wind:8,rain:0,fog:0,thunder:!1},this.cloudCol=new W,this.underCol=new W}setShadowSize(e){this.dir.shadow.mapSize.set(e,e),this.dir.shadow.map&&(this.dir.shadow.map.dispose(),this.dir.shadow.map=null)}update({hour:e,sunrise:t,sunset:n,cloud:r,storm:i=!1}){let a=i?.4:1,o=e>t-1&&e<n+1,s=n-t,c=(e-t)/s,l=Math.sin(Sm(c,-.12,1.12)*Math.PI),u=Cm(-.14,.34,o?l:-.3),d=o?Math.max(0,1-Math.abs(l-.08)/.34):0,f=1-Cm(-.2,.08,o?l:-.4),p=e=>new W().copy(Tm.night[e]).lerp(Tm.day[e],u).lerp(Tm.dawn[e],d*.86).lerp(Tm.storm[e],r*.8*(1-f*.7)).multiplyScalar(a),m=e=>xm(xm(xm(wm.night[e],wm.day[e],u),wm.dawn[e],d*.86),wm.storm[e],r*.8*(1-f*.7));this.uniforms.uTop.value.copy(p(`top`)),this.uniforms.uMid.value.copy(p(`mid`)),this.uniforms.uHor.value.copy(p(`hor`)),this.uniforms.uSunCol.value.copy(Tm.dawn.sun).lerp(Tm.day.sun,Cm(.1,.5,l)),this.uniforms.uStars.value=f*(1-r*.8),this.uniforms.uSunVis.value=(1-r*.92)*(1-f);let h=Sm(c,-.1,1.1)*Math.PI,g=new H(Math.cos(h)*.9,Math.max(l,-.25)*.72,-.46).normalize();this.uniforms.uSunDir.value.copy(g),this.moon.position.set(-340,300,-520),this.moon.material.opacity=f*(1-r*.7),this.moon.visible=this.moon.material.opacity>.02;let _=f>.5?new H(-.55,.72,.42):new H(g.x*.9,Math.max(g.y,.46),.48);this.dir.position.copy(_.normalize().multiplyScalar(230)),this.dir.color.copy(p(`sun`)),this.dir.intensity=m(`dir`)*(i?.8:1),this.hemi.color.copy(p(`hemiS`)),this.hemi.groundColor.copy(p(`hemiG`)),this.hemi.intensity=m(`hemi`)*(i?1.5:1),this.scene.fog.color.copy(this.uniforms.uHor.value),this.cloudCol.copy(p(`cloud`)),this.underCol.copy(p(`under`)),tp.uGlow.value=Cm(.2,.85,f+r*.25),this.env.night=f,this.state={hour:e,sunrise:t,sunset:n,cloud:r}}};function Dm(){let e=new $o(1,2),t=e.attributes.position,n=new H;for(let e=0;e<t.count;e++){n.fromBufferAttribute(t,e);let r=Math.sin(n.x*4.1+1)*Math.cos(n.y*3.7)*Math.sin(n.z*4.3+2)*.13+Math.sin(n.x*9+n.z*8)*.03;n.multiplyScalar(1+r),t.setXYZ(e,n.x,n.y,n.z)}return e.computeVertexNormals(),e}var Om={uCloud:{value:new W(`#ffffff`)},uUnder:{value:new W(`#b9d2e6`)}};function km(){let e=new _s({color:`#ffffff`,roughness:1,metalness:0});return e.onBeforeCompile=e=>{e.uniforms.uCloud=Om.uCloud,e.uniforms.uUnder=Om.uUnder,e.uniforms.uTime=tp.uTime,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
varying float vUp;
uniform float uTime;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
        vUp = normal.y;
        transformed += normal * sin(uTime * .25 + position.x * 3. + position.z * 2.) * .025;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying float vUp;
uniform vec3 uCloud, uUnder;`).replace(`#include <color_fragment>`,`#include <color_fragment>
        diffuseColor.rgb = mix(uUnder, uCloud, smoothstep(-.7, .62, vUp));`).replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>
        totalEmissiveRadiance += diffuseColor.rgb * .2;`)},e}var Am=class{constructor(e,t=1){this.group=new Jn,e.add(this.group);let n=lp(77),r=Dm(),i=km(),a=new qn;this.floorUni={uIn:{value:new W(`#3f9be0`)},uOut:{value:new W(`#d9eff5`)}},this.floor=new Bi(new ja(1500,48).rotateX(-Math.PI/2),new hs({uniforms:this.floorUni,depthWrite:!1,vertexShader:`varying vec2 vP; void main(){ vP = position.xz; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }`,fragmentShader:`
          uniform vec3 uIn, uOut; varying vec2 vP;
          void main(){
            float d = length(vP);
            vec3 c = mix(uIn, uOut, smoothstep(130., 1150., d));
            gl_FragColor = vec4(c, 1.);
            #include <colorspace_fragment>
          }`})),this.floor.position.y=-130,this.floor.renderOrder=-8,e.add(this.floor);let o=[],s=(e,t,r,i,a,s)=>{for(let c=0;c<i;c++){let i=n()*Math.PI*2,c=Math.sqrt(n())*a;o.push([e+Math.cos(i)*c,t+(n()-.3)*s*.36,r+Math.sin(i)*c*.72,s*(.5+n()*.75)])}},c=Math.round(92*t);for(let e=0;e<c;e++){let t=n()*Math.PI*2,r=e<c*.3,i=r?60+n()*170:240+n()*640,a=r?8+n()*8:16+n()*18;s(Math.cos(t)*i,-92-n()*24,Math.sin(t)*i,r?5+Math.floor(n()*4):6+Math.floor(n()*7),r?12+n()*16:20+n()*36,a)}this.sea=new Qi(r,i,o.length),o.forEach(([e,t,r,i],o)=>{a.position.set(e,t,r),a.scale.set(i*1.25,i*.68,i),a.rotation.y=n()*6.28,a.updateMatrix(),this.sea.setMatrixAt(o,a.matrix)}),this.sea.frustumCulled=!1,this.group.add(this.sea);let l=[],u=(e,t,r,i,a,o,s)=>{for(let c=0;c<o;c++){let o=n()*Math.PI*2,c=Math.sqrt(n())*i,u=n();l.push({p:[e+Math.cos(o)*c,t+u*a*(1-c/i*.72),r+Math.sin(o)*c*.72],s:s*(.55+n()*.9)*(1-u*.42)})}};u(-320,-90,-520,190,380,48,70),u(360,-90,-470,150,280,36,60),u(40,-90,-680,280,230,40,72),u(-560,-90,40,170,230,26,56),u(580,-90,120,170,250,28,58);for(let e=0;e<10;e++){let t=e/10*Math.PI*2+n(),r=150+n()*120;u(Math.cos(t)*r,-26+n()*40,Math.sin(t)*r,24,12,7,11)}this.mid=new Qi(r,i,l.length),l.forEach((e,t)=>{a.position.set(...e.p),a.scale.set(e.s*1.15,e.s*.84,e.s),a.rotation.set(n(),n()*6,n()),a.updateMatrix(),this.mid.setMatrixAt(t,a.matrix)}),this.mid.frustumCulled=!1,this.group2=new Jn,this.group2.add(this.mid),e.add(this.group2)}update(e,t){this.group.rotation.y+=e*.0035,this.group2.rotation.y-=e*.0016,Om.uCloud.value.copy(t.cloudCol),Om.uUnder.value.copy(t.underCol),this.floorUni.uIn.value.copy(t.uniforms.uTop.value).lerp(t.uniforms.uMid.value,.25),this.floorUni.uOut.value.copy(t.uniforms.uHor.value)}},jm=3,Mm=90,Nm=190,Pm=[`#7fa23f`,`#a7b84a`,`#c79a3a`,`#8a6a35`],Fm=new qn;function Im(){let e=1024,t=document.createElement(`canvas`);t.width=t.height=e;let n=t.getContext(`2d`);for(let e=0;e<jm;e++){let t=e/jm*Math.PI*2;for(let e=0;e<900;e++){let r=e/900,i=t+r*Math.PI*3.4,a=62+r*r*430,o=16+r*60,s=512+Math.cos(i)*a+(Math.random()-.5)*o,c=512+Math.sin(i)*a+(Math.random()-.5)*o,l=16+r*46,u=n.createRadialGradient(s,c,0,s,c,l);u.addColorStop(0,`rgba(226, 234, 244, ${.34*(1-r*.5)})`),u.addColorStop(1,`rgba(226, 234, 244, 0)`),n.fillStyle=u,n.beginPath(),n.arc(s,c,l,0,Math.PI*2),n.fill()}}let r=n.createRadialGradient(512,512,0,512,512,118);r.addColorStop(0,`rgba(0, 0, 0, 1)`),r.addColorStop(.55,`rgba(0, 0, 0, 0.9)`),r.addColorStop(1,`rgba(0, 0, 0, 0)`),n.globalCompositeOperation=`destination-out`,n.fillStyle=r,n.fillRect(0,0,e,e);let i=new Ea(t);return i.colorSpace=at,i}var Lm=class{constructor(e,t){this.calm=t,this.level=0,this.flash=0,this.nextFlash=6,this.spin=new Bi(new ja(520,48).rotateX(-Math.PI/2),new Oi({map:Im(),transparent:!0,opacity:0,depthWrite:!1,fog:!1})),this.spin.position.y=-96,this.spin.visible=!1,e.add(this.spin),this.leaves=new Qi(new ns(.6,.32),new vs({side:2}),Mm),this.leaves.frustumCulled=!1,this.leaves.visible=!1,this.seeds=Array.from({length:Mm},(e,t)=>({x:Math.random(),y:-12+Math.random()*62,z:(Math.random()-.5)*Nm*1.6,speed:.16+Math.random()*.18,spin:2+Math.random()*5,phase:Math.random()*6.28,i:t}));let n=new W;this.seeds.forEach(e=>this.leaves.setColorAt(e.i,n.set(Pm[e.i%Pm.length]))),e.add(this.leaves)}update(e,t,n){this.level+=(+!!n-this.level)*Math.min(1,t*1.6);let r=this.level>.02;if(this.spin.visible=r,this.leaves.visible=r&&!this.calm,!r)this.flash=0;else{if(this.spin.material.opacity=this.level,this.spin.rotation.y=e*.07,this.leaves.visible){for(let t of this.seeds){let n=(t.x+e*t.speed)%1*Nm*2-Nm;Fm.position.set(n,t.y+Math.sin(e*2+t.phase)*2.4,t.z+Math.cos(e*1.3+t.phase)*3),Fm.rotation.set(e*t.spin,e*t.spin*.7,t.phase),Fm.updateMatrix(),this.leaves.setMatrixAt(t.i,Fm.matrix)}this.leaves.instanceMatrix.needsUpdate=!0}this.flash*=Math.exp(-t*7),this.nextFlash-=t,this.nextFlash<=0&&!this.calm&&n&&(this.flash=.42,this.nextFlash=7+Math.random()*11)}}},Rm=15,zm=3.4,Bm=new H,Vm=new H;function Hm(e){let t=new hp(11),n=[];[[.02,3.2],[.34,2.9],[.62,2.1],[.8,1.1],[.84,0],[.72,-1.2],[.5,-2.3],[.24,-3.2],[.08,-3.7]].forEach(([e,t])=>n.push(new V(e,t)));let r=new es(n,14).rotateX(Math.PI/2).toNonIndexed(),i=r.attributes.position,a=new Float32Array(i.count*3),o=new W,s=new W(e[0]),c=new W(e[1]),l=new W(e[2]);for(let e=0;e<i.count;e+=3){let t=i.getZ(e),n=i.getX(e),r=i.getY(e),u=Math.sin(t*1.7+.6)+Math.sin(n*2.3+t*.8);o.copy(r<-.25?c:u>.3?s:u<-.9?l:c);for(let t=0;t<3;t++)a.set([o.r,o.g,o.b],(e+t)*3)}r.deleteAttribute(`uv`),r.computeVertexNormals(),r.setAttribute(`color`,new Ir(a,3)),r.setAttribute(`aSway`,new Ir(new Float32Array(i.count),1)),t.layers.solid.push(r);let u=(e,n,r,i,a,o,s,c,l,u)=>t.add(q.cone(3),u,{x:e,y:n,z:r,sx:i,sy:a,sz:o,rx:s,ry:c,rz:l,wonk:.02,ao:1});u(0,-.02,-4.1,1.05,1.5,.08,-1.57,0,0,e[0]),u(0,1.05,.1,.1,1.2,1.3,.2,0,0,e[0]),u(1.05,-.3,1.1,.7,.9,.06,.2,0,-1.2,e[2]),u(-1.05,-.3,1.1,.7,.9,.06,.2,0,1.2,e[2]);for(let e of[-1,1])t.ball(.15,`#ffffff`,e*.5,.26,2.3,{detail:1}),t.ball(.09,J.ink,e*.58,.28,2.38,{detail:1}),t.add(q.cyl(4,.3),`#e8c27a`,{x:e*.2,y:-.2,z:3.1,sx:.04,sy:.6,sz:.04,rx:1.3,rz:e*.6});return t}var Um={uTime:tp.uTime};function Wm(){let e=new _s({vertexColors:!0,roughness:.55,metalness:.05});return e.onBeforeCompile=t=>{t.uniforms.uTime=Um.uTime,t.uniforms.uPhase=e.userData.phase,t.vertexShader=t.vertexShader.replace(`#include <common>`,`#include <common>
uniform float uTime; uniform float uPhase;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
        float w = clamp((3.4 - position.z) / 7.4, 0., 1.);
        transformed.x += sin(position.z * .95 - uTime * 2.3 + uPhase) * w * w * 1.25;`)},e.customProgramCacheKey=()=>`koi`,e}var Gm=class{constructor(e,t,n){this.scene=e,this.calm=n,this.fish=[];let r=[[`#e23f2a`,`#fff3e4`,`#ef8a32`],[`#ffffff`,`#fff3e4`,`#e8452f`],[`#2f83c8`,`#dff0fa`,`#7cc0e8`],[`#e8a22f`,`#fff0d0`,`#d9622b`]];[{rx:118,rz:86,y:26,sp:.075,ph:0,s:1.25},{rx:96,rz:112,y:40,sp:-.06,ph:2,s:1.6},{rx:140,rz:104,y:12,sp:.05,ph:4,s:1},{rx:66,rz:58,y:44,sp:.09,ph:1,s:.72}].forEach((t,n)=>{let i=Hm(r[n]).build().children[0].geometry,a=Wm();a.userData.phase={value:n*1.7};let o=new Bi(i,a);o.castShadow=!0,o.scale.setScalar(t.s),e.add(o),this.fish.push({mesh:o,...t,a:t.ph,b:t.ph,u:-1,wait:3+n*3.5,spit:0})}),this.w=0,this.spray=null,this.buildSchool(e),this.buildPlanes(e),this.buildAirship(e,t),this.buildHippos(e,t)}buildSchool(e){let t=new hp(21);t.ball(.5,`#ffffff`,0,0,0,{sx:.34,sy:.5,sz:1.1}),t.add(q.cone(3),`#ffffff`,{z:-.72,rx:-1.57,sx:.32,sy:.5,sz:.04,wonk:0});let n=t.build().children[0].geometry;this.school=new Qi(n,new _s({vertexColors:!0,roughness:.5}),46);let r=[`#e8452f`,`#ef8a32`,`#ffffff`,`#2f9fc8`],i=lp(5);this.schoolData=[];for(let e=0;e<46;e++)this.school.setColorAt(e,new W(r[e%4])),this.schoolData.push({a:i()*6.28,rad:30+i()*10,y:22+i()*8,sp:.2+i()*.08,ph:i()*6.28});this.school.frustumCulled=!1,e.add(this.school),this.dummy=new qn}buildPlanes(e){this.planes=[];for(let t=0;t<4;t++){let n=new hp(30+t),r=[0,.07,.8,-.5,.14,-.54,0,-.07,-.34,0,.07,.8,0,-.07,-.34,.5,.14,-.54],i=new Xr;i.setAttribute(`position`,new G(r,3)),n.add(i,`#fbf6ea`,{wonk:0,ao:1,jitter:0});let a=n.build();a.children[0].material=a.children[0].material.clone(),a.children[0].material.side=2,a.children[0].castShadow=!1,e.add(a),this.planes.push({m:a,sp:.16+t*.03,ph:t*1.6,rx:60+t*18,rz:46+t*12,y:18+t*6})}}buildAirship(e,t){let n=new hp(41);n.add(q.sphere(14,9),`#e9503a`,{sx:2.3,sy:2.3,sz:5.4}),n.add(q.sphere(14,9),`#fff0dc`,{y:-.5,sx:2.1,sy:1.9,sz:5.2});for(let e of[-1,1])n.add(q.cone(3),J.gold,{x:e*2.2,z:-3.6,sx:1.5,sy:2,sz:.1,rz:-e*1.2,rx:-.8}),n.ball(.32,`#ffffff`,e*1.5,.74,4.3,{detail:1}),n.ball(.17,J.ink,e*1.66,.76,4.5,{detail:1});n.add(q.cone(3),J.gold,{z:-6.2,rx:-1.57,sx:2,sy:2.4,sz:.1}),n.box(1.8,.8,3,J.wood,0,-3.1,.3),n.box(2,.1,3.3,J.wood2,0,-2.36,.3);for(let[e,t]of[[-.8,-1],[.8,-1],[-.8,1.6],[.8,1.6]])n.box(.05,.9,.05,J.ink,e,-2.3,t);for(let e=0;e<4;e++)n.glow(.34,.26,.05,J.win,-.62+e*.4+.02,-2.76,1.81);this.airship=n.build(),this.airship.scale.setScalar(.74);let r=t.brand;this.airshipHome=r.group.position.clone().add(new H(-1,12.6,-2)),e.add(this.airship)}buildHippos(e,t){this.hippos=[];let n=lp(33),r={core:[2,2.76,-10.9],course:[2.6,-.14,-3.1,0],inquiry:[.8,.05,-8.3],walk:[-3.8,.05,1.2,Math.PI],digital:[3.4,.05,-9],library:[3,.05,-6.2],admin:[1.4,8.89,-3.55,Math.PI/2],teacher:[-2.2,.05,-5.8],results:[7.85,.05,-4.14],forest:[-1.04,.05,-4.1],brand:[-.5,6.07,-2.5],future:[2,.55,-4.3]};for(let[e,[i,a,o,s]]of Object.entries(r)){let r=t[e],c=new hp(60+this.hippos.length);Xp(c,n()>.5?Jp:Yp);let l=c.build();l.position.set(i,a,o);let u=n()*6.28;l.rotation.y=s??u,l.scale.setScalar(1.15),l.userData.hippo=e,r.group.add(l),this.hippos.push({id:e,mesh:l})}}koiAt(e,t,n,r,i){let a=r>=0?Math.sin(Math.min(1,r)*Math.PI)*Rm*e.s:0,o=1-this.w*.42;return i.set(Math.cos(t)*e.rx*o,e.y+Math.sin(n)*(4+this.w*7)+a,Math.sin(t)*e.rz*o)}updateKoi(e,t,n){let r=this.w;e.a+=e.sp*t*(1+r*.9),e.b+=t*(.3+r*.5),e.mesh.material.userData.phase.value+=t*r*5,e.u>=0?(e.u+=t/zm,e.spit-=t,e.spit<=0&&e.u<1&&(e.spit=.09,this.spray?.(e.mesh.position.x,e.mesh.position.y,e.mesh.position.z,3,3.4,.2)),e.u>=1&&(e.u=-1,e.wait=7+Math.random()*9)):n&&!this.calm&&(e.wait-=t,e.wait<=0&&(e.u=0))}schoolAt(e,t,n,r){let i=this.w,a=e.a+n*e.sp,o=e.rad+Math.sin(n*.6+e.ph)*2.4,s=e.y+Math.sin(n*1.1+e.ph)*1.2;if(e.fade=1,i<.01)return r.set(Math.cos(a)*o,s,Math.sin(a)*o-3);let c,l,u;if(t%3==0){let t=(n*.07+e.ph/6.283)%1;c=e.a+n*.85,l=12+(1-t)*24,u=8+t*36,e.fade=Math.min(1,Math.sin(t*Math.PI)*4)}else t%3==1?(c=a,l=o+Math.sin(a*2)*6,u=e.y+Math.sin(a*4+n*1.6)*9):(c=e.a+n*e.sp*2.6,l=e.rad+12,u=e.y-4+Math.abs(Math.sin(c*3+e.ph))*15);let d=Math.cos(a)*o+(Math.cos(c)*l-Math.cos(a)*o)*i,f=Math.sin(a)*o+(Math.sin(c)*l-Math.sin(a)*o)*i;return r.set(d,s+(u-s)*i,f-3)}update(e,t,n){this.w+=(+!!n-this.w)*(1-Math.exp(-t*.9));for(let e of this.fish)this.updateKoi(e,t,n),this.koiAt(e,e.a,e.b,e.u,Bm),this.koiAt(e,e.a+.02*Math.sign(e.sp),e.b+.03,e.u>=0?e.u+.02:-1,Vm),e.mesh.position.copy(Bm),e.mesh.lookAt(Vm),e.u>=0&&e.mesh.rotateZ(e.u*6.283);let r=this.dummy;this.schoolData.forEach((t,n)=>{this.schoolAt(t,n,e,Bm),this.schoolAt(t,n,e+.06,Vm),r.position.copy(Bm),r.lookAt(Vm),r.rotateZ(Math.sin(e*3+t.ph)*.2),r.scale.setScalar((1.2+this.w*.9)*(1-this.w+this.w*t.fade)),r.updateMatrix(),this.school.setMatrixAt(n,r.matrix)}),this.school.instanceMatrix.needsUpdate=!0;for(let t of this.planes){let n=e*t.sp+t.ph,r=new H(Math.cos(n)*t.rx,t.y+Math.sin(n*2)*5,Math.sin(n)*t.rz);t.m.position.copy(r),t.m.lookAt(Math.cos(n+.03)*t.rx,t.y+Math.sin((n+.03)*2)*5,Math.sin(n+.03)*t.rz),t.m.rotateZ(Math.sin(n*2)*.4)}this.airship.position.copy(this.airshipHome).add(new H(Math.sin(e*.28)*1.2,Math.sin(e*.6)*.6,0)),this.airship.rotation.y=-.6+Math.sin(e*.2)*.16,this.airship.rotation.z=Math.sin(e*.4)*.03}},Km=.4,qm=.3,Jm=1.9,Ym=.6,Xm=[[1,0,1],[-1,0,1],[0,1,1],[0,-1,1],[1,1,1.414],[1,-1,1.414],[-1,1,1.414],[-1,-1,1.414]];function Zm(e,t,n,r,i,a){let o=i-n,s=a-r,c=Math.max(0,Math.min(1,((e-n)*o+(t-r)*s)/(o*o+s*s||1))),l=n+o*c-e,u=r+s*c-t;return l*l+u*u}function Qm(e,t,n,r,i,a,o,s,c){let l=(e-i)*(r-a)-(n-i)*(t-a),u=(e-o)*(a-s)-(i-o)*(t-s),d=(e-n)*(s-r)-(o-n)*(t-r);return(l<0||u<0||d<0)&&(l>0||u>0||d>0)?Zm(e,t,n,r,i,a)<c||Zm(e,t,i,a,o,s)<c||Zm(e,t,o,s,n,r)<c:!0}var $m=class{constructor(e,t,n,{floor:r=null,clear:i=null,keepOut:a=[]}={}){this.half=Math.ceil(e.r*1.1/Km),this.n=this.half*2+1;let o=this.n*this.n;this.floor=r,this.height=new Float32Array(o),this.main=new Uint8Array(o),this.clr=new Uint8Array(o),this.cost=new Float32Array(o),this.from=new Int32Array(o),this.seen=new Uint32Array(o),this.run=0;let s=new Uint8Array(o),c=new Uint8Array(o);for(let t=0;t<o;t++){let n=this.cx(t),o=this.cz(t);this.height[t]=r?r(n,o):0,i?.(n,o)&&(c[t]=1);let l=_p(e.r,e.seed,Math.atan2(o,n))*.93;(Math.hypot(n,o)>l||a.some(([e,t,r,i])=>((n-e)/r)**2+((o-t)/i)**2<1))&&(s[t]=1)}this.stamp(t,s,c),this.finish(s),this.spots=[];for(let e=2;e<this.n;e+=5)for(let t=2;t<this.n;t+=5){let n=e*this.n+t;this.main[n]&&this.clr[n]>=3&&this.spots.push({x:this.cx(n),z:this.cz(n),clr:this.clr[n],look:null,taken:null})}for(let e of n){let t=this.nearest(e.x,e.z);t>=0&&this.spots.push({x:this.cx(t),z:this.cz(t),clr:this.clr[t],look:[e.x,e.z],taken:null})}}cx(e){return(e%this.n-this.half)*Km}cz(e){return(Math.floor(e/this.n)-this.half)*Km}cell(e,t){let n=Math.round(e/Km)+this.half,r=Math.round(t/Km)+this.half;return n<0||r<0||n>=this.n||r>=this.n?-1:r*this.n+n}y(e,t){return this.floor?this.floor(e,t):0}free(e,t){let n=this.cell(e,t);return n>=0&&this.main[n]===1}stamp(e,t,n){let{n:r,half:i}=this,a=(Km*.6)**2;for(let o of e.children){let e=o.material===sp.water,s=o.geometry.attributes.position.array;for(let o=0;o<s.length;o+=9){let c=Math.max(s[o+1],s[o+4],s[o+7]),l=Math.min(s[o+1],s[o+4],s[o+7]);if(!e&&c<qm)continue;let u=s[o],d=s[o+2],f=s[o+3],p=s[o+5],m=s[o+6],h=s[o+8],g=Math.max(0,Math.floor(Math.min(u,f,m)/Km)+i),_=Math.min(r-1,Math.ceil(Math.max(u,f,m)/Km)+i),v=Math.max(0,Math.floor(Math.min(d,p,h)/Km)+i),y=Math.min(r-1,Math.ceil(Math.max(d,p,h)/Km)+i);for(let o=v;o<=y;o++)for(let s=g;s<=_;s++){let g=o*r+s;if(t[g]||n[g])continue;let _=this.height[g];!e&&(c<_+qm||l>_+Jm)||Qm((s-i)*Km,(o-i)*Km,u,d,f,p,m,h,a)&&(t[g]=1)}}}}finish(e){let{n:t}=this,n=t*t,r=new Int32Array(n),i=0,a=0,o=0,s=[];for(let t=0;t<n;t++){if(e[t]||r[t])continue;o++;let n=0;for(r[t]=o,s.push(t);s.length;){let t=s.pop();n++;for(let n of this.around(t,4))!e[n]&&!r[n]&&Math.abs(this.height[t]-this.height[n])<=Ym&&(r[n]=o,s.push(n))}n>a&&(a=n,i=o)}let c=[];for(let e=0;e<n;e++)r[e]===i?this.main[e]=1:c.push(e);let l=new Int16Array(n).fill(-1);c.forEach(e=>{l[e]=0});for(let e=0;e<c.length;e++)for(let t of this.around(c[e],4))l[t]<0&&(l[t]=l[c[e]]+1,c.push(t));for(let e=0;e<n;e++)this.clr[e]=Math.min(255,Math.max(0,l[e]));this.walkable=a}around(e,t){let{n}=this,r=[],i=e%n,a=Math.floor(e/n);for(let e=0;e<t;e++){let t=i+Xm[e][0],o=a+Xm[e][1];t>=0&&o>=0&&t<n&&o<n&&r.push(o*n+t)}return r}nearest(e,t){let{n,half:r}=this,i=this.cell(e,t);if(i>=0&&this.main[i])return i;let a=Math.max(0,Math.min(n-1,Math.round(e/Km)+r)),o=Math.max(0,Math.min(n-1,Math.round(t/Km)+r));for(let e=1;e<n;e++){let t=-1,r=1/0;for(let i=-e;i<=e;i++)for(let s=-e;s<=e;s++){if(Math.max(Math.abs(s),Math.abs(i))!==e)continue;let c=a+s,l=o+i;if(c<0||l<0||c>=n||l>=n||!this.main[l*n+c])continue;let u=s*s+i*i;u<r&&(r=u,t=l*n+c)}if(t>=0)return t}return-1}find(e,t,n,r){let i=this.nearest(e,t),a=this.nearest(n,r);if(i<0||a<0)return[[n,r]];let{n:o,cost:s,from:c,seen:l,clr:u,height:d,main:f}=this,p=++this.run,m=a%o,h=Math.floor(a/o),g=e=>Math.hypot(e%o-m,Math.floor(e/o)-h),_=[],v=(e,t)=>{let n=_.length;for(_.push([t,e]);n>0;){let e=n-1>>1;if(_[e][0]<=t)break;[_[e],_[n]]=[_[n],_[e]],n=e}},y=()=>{let e=_[0],t=_.pop();if(_.length){_[0]=t;let e=0;for(;;){let t=e*2+1,n=t+1,r=e;if(t<_.length&&_[t][0]<_[r][0]&&(r=t),n<_.length&&_[n][0]<_[r][0]&&(r=n),r===e)break;[_[r],_[e]]=[_[e],_[r]],e=r}}return e};for(s[i]=0,l[i]=p,c[i]=-1,v(i,g(i));_.length;){let[e,t]=y();if(t===a)break;if(e-g(t)>s[t]+.001)continue;let n=t%o,r=Math.floor(t/o);for(let[e,i,a]of Xm){let m=n+e,h=r+i;if(m<0||h<0||m>=o||h>=o)continue;let _=h*o+m;if(!f[_]||Math.abs(d[_]-d[t])>Ym||e&&i&&(!f[r*o+m]||!f[h*o+n]))continue;let y=s[t]+a+(u[_]<2?2:u[_]<3?.5:0);l[_]===p&&y>=s[_]||(l[_]=p,s[_]=y,c[_]=t,v(_,y+g(_)))}}if(l[a]!==p)return[[n,r]];let b=[];for(let e=a;e>=0;e=c[e])b.push([this.cx(e),this.cz(e)]);return b.reverse(),this.smooth(b)}sight(e,t){let n=Math.hypot(t[0]-e[0],t[1]-e[1]),r=Math.ceil(n/.2),i=this.y(e[0],e[1]);for(let n=1;n<=r;n++){let a=e[0]+(t[0]-e[0])*n/r,o=e[1]+(t[1]-e[1])*n/r,s=this.cell(a,o);if(s<0||!this.main[s]||this.clr[s]<2)return!1;let c=this.y(a,o);if(Math.abs(c-i)>Ym*.6)return!1;i=c}return!0}smooth(e){let t=[e[0]],n=0;for(;n<e.length-1;){let r=n+1;for(;r+1<e.length&&this.sight(e[n],e[r+1]);)r++;t.push(e[r]),n=r}return t}},eh=class{constructor(){this.reset()}reset(){this.pts=[],this.len=0,this.marks=[]}add(e,t,n,r,i=r,a=0){let o=this.pts[this.pts.length-1],s=o?o.s+Math.hypot(e-o.x,t-o.y,n-o.z):0;this.pts.push({x:e,y:t,z:n,a:r,b:i,w:a,s}),this.len=s}at(e,t,n){let{pts:r}=this,i=0,a=r.length-1,o=Math.max(0,Math.min(this.len,e));for(;a-i>1;){let e=i+a>>1;r[e].s<=o?i=e:a=e}let s=r[i],c=r[a],l=c.s>s.s?(o-s.s)/(c.s-s.s):0,u=n[s.a]*(1-s.w)+n[s.b]*s.w,d=n[c.a]*(1-c.w)+n[c.b]*c.w;return t.x=s.x+(c.x-s.x)*l,t.y=s.y+(c.y-s.y)*l+u+(d-u)*l,t.z=s.z+(c.z-s.z)*l,t}},th={name:`國中英語第五冊 3D 浮空群島`,short:`英語第五冊群島`,en:`Junior High English Book 5 Sky Archipelago`,site:`https://github.com/cagoooo/smes-island`,address:`九年級上冊會考核心衝刺站（L1～L6）`,phone:`小羊兒老師（英語科教學團隊）編製`,lat:24.8506,lon:121.2245,teacherUrl:`https://github.com/cagoooo/smes-island`},nh=(e,t,n)=>[Math.cos(e*Math.PI/180)*t,Math.sin(e*Math.PI/180)*n],rh=(e,t,n,r)=>{let[i,a]=nh(e,t,n);return{x:i,y:r,z:a}},ih=[{id:`core`,name:`第五冊文法總島`,tag:`全冊總覽`,color:`#d9432f`,seed:3,r:18,pos:{x:0,y:7,z:0},zoom:58,kicker:`核心領航・小羊兒老師備課室`,motto:`完成式、被動語態與關係子句三大支柱，稱霸國中會考英語`,tour:`歡迎登陸「國中英語第五冊 3D 浮空群島」！本網站由小羊兒老師改編自阿凱老師（石門國小 cagoooo/smes-island）開源 3D 浮空島架構，並致謝黃泓諺（紅焰／焰兒）老師線上焰兒研習啟發。從世界樹主島出發，一次征服九上英語六大單元！`},{id:`course`,name:`完成式時光島`,tag:`L1 完成式基礎`,color:`#2f8fb0`,seed:11,r:13.5,pos:rh(205,41,37,2),zoom:46,kicker:`Unit 1・現在完成式基本句型`,motto:`have / has + p.p.：連結過去起點與現在狀態的時光之橋`,tour:`攤開時光之書，掌握「have/has + 過去分詞 (p.p.)」，徹底分清 since（＋過去時間點或過去式子句）與 for（＋一段時間），並熟記 already、yet、ever、never、so far 的精準位置。`},{id:`inquiry`,name:`經驗足跡島`,tag:`L1 完成式辨析`,color:`#6a7fb8`,seed:23,r:13.5,pos:rh(-25,41,37,5),zoom:46,kicker:`Unit 1・去過・去了・待在辨析`,motto:`have been to（已回）vs. have gone to（未回）vs. have been in（持續）`,tour:`在天文科學村精準區分三大完成式動詞：have been to 表去過經驗、have gone to 表去了還沒回來（主詞絕不可用 I 或 you），以及 have been in + 地點 + for/since 表居住持續至今。`},{id:`walk`,name:`情緒分詞島`,tag:`L2 情緒分詞`,color:`#4f9a54`,seed:31,r:14.5,pos:rh(35,41,38,-1),zoom:48,kicker:`Unit 2・情緒動詞與分詞形容詞`,motto:`事物主動「令人 V-ing」，人被動「感到 p.p.（-ed）」`,tour:`走過水庫大壩與吊橋，征服 interest、excite、bore、tire、surprise、scare、worry 等情緒家族，並把 interested in、excited about、tired of / from、surprised at 介系詞一次背熟！`},{id:`digital`,name:`結果連線島`,tag:`L2 程度結果句`,color:`#3aa3a8`,seed:41,r:13.5,pos:rh(145,41,38,-2),zoom:46,kicker:`Unit 2・too...to / enough to / so...that`,motto:`太…不能（too...to）、夠…可以（enough to）、如此…以致於（so...that）`,tour:`訊號塔幫你轉換三大結果句型：記住 enough 放「形容詞後、名詞前」，且 too + adj. + to VR 改為 so + adj. + that 時必須寫出主詞與情態否定助動詞（can’t / couldn’t）與受格代名詞！`},{id:`library`,name:`被動語態島`,tag:`L3 被動語態`,color:`#d98a2b`,seed:53,r:12.5,pos:rh(92,66,62,-7),zoom:44,kicker:`Unit 3・五大時態被動語態公式`,motto:`主詞 + be 動詞 + p.p. (+ by + 行為者)：先判主詞是動作發出還是接受`,tour:`大河馬書房系統整理五大被動時態：現在 am/is/are + p.p.、過去 was/were + p.p.、未來 will be + p.p.、助動詞 can/should be + p.p.、以及現在完成被動 have/has been + p.p.。`},{id:`admin`,name:`特殊被動島`,tag:`L3 進階被動`,color:`#b5563c`,seed:61,r:11.5,pos:rh(250,72,58,10),zoom:42,kicker:`Unit 3・使役感官被動與特定介系詞`,motto:`主動省 to 的使役／感官動詞，改成被動語態一律還原「to VR」`,tour:`領航燈塔照亮會考大魔王陷阱：make + O + VR 改被動須寫為 be made to VR！同步掌握不用 by 的被動搭配：be known to（為…所知）/ for（以…聞名）/ as（以…身分知名），及 be interested in 等。`},{id:`teacher`,name:`間接問句島`,tag:`L4 名詞子句`,color:`#a2692f`,seed:71,r:11.5,pos:rh(288,74,60,14),zoom:42,kicker:`Unit 4・wh- 間接問句語序鐵律`,motto:`疑問詞 + 主詞 + 動詞（wh- + S + V）：取消倒裝與助動詞 do / does / did`,tour:`共備工坊的精密齒輪教你把直接問句變間接問句：放進 I don’t know / Do you know / Tell me 後方時，絕對不可寫出 is he / do they / did she，助動詞 do 家族須拿掉並還原動詞時態與三單變化！`},{id:`results`,name:`是否子句島`,tag:`L4 whether/if`,color:`#d9a21f`,seed:83,r:12,pos:rh(-8,78,56,12),zoom:42,kicker:`Unit 4・whether / if 是否子句與 that 子句`,motto:`名詞子句表「是否」保留未來式 will；副詞子句表「如果」現在代未來`,tour:`星光島點亮雙重焦點：當 if / whether 譯為「是否」放在 ask / wonder / be not sure 後當受詞時，該用未來式就保留 will；同時記熟只能用 whether（介系詞後、句首主詞、接 or not）的三種黃金場合！`},{id:`forest`,name:`介片後位島`,tag:`L5 後位修飾`,color:`#5a9b4e`,seed:97,r:12.5,pos:rh(36,78,60,-4),zoom:44,kicker:`Unit 5・介系詞片語後位修飾與主詞一致`,motto:`the girl in pink / the boy with glasses：核心名詞永遠在最前面`,tour:`走入童書之森，練習用「in + 穿著/顏色」與「with + 身上配件/五官特徵」做後位修飾形容詞片語，並克服長主詞干擾（The students in the library ARE...）精准找出真正動詞單複數！`},{id:`brand`,name:`關代主格島`,tag:`L5~L6 關代主格`,color:`#c8553d`,seed:103,r:11,pos:rh(150,78,56,8),zoom:42,kicker:`Unit 5～6・關係代名詞主格 who / which / that / whose`,motto:`主格關代代替名詞後接動詞，不可省略！子句動詞單複看先行詞`,tour:`從飛艇鳥瞰形容詞子句世界：先行詞是人用 who / that、非人用 which / that，所有格「的」用 whose；同時精熟「人與物並存、最高級、序數、the only / all / any / no」必用 that 之鐵則！`},{id:`future`,name:`關代受格島`,tag:`L6 關代受格`,color:`#e0812a`,seed:113,r:10.5,pos:rh(192,80,56,22),zoom:42,kicker:`Unit 6・受格關代省略、介系詞前移與非限定`,motto:`受格關代後接「S + V」常可省略；逗號後與介系詞後絕對禁用 that`,tour:`登上最高處的曙光未來島，攻克第六課大魔王：受格關代（who / whom / which / that）可省略，但介系詞前置後只能寫「介系詞 + whom（人）/ which（物）」，逗號隔開的非限定用法也絕不可出現 that！`}],ah={admin:[-26,-108],teacher:[26,-108],future:[-38,-72],results:[38,-72],course:[-26,-36],inquiry:[26,-36],core:[0,0],digital:[-26,36],walk:[26,36],brand:[-38,72],forest:[38,72],library:[0,108]},oh=[[`core`,`course`],[`core`,`inquiry`],[`core`,`walk`],[`core`,`digital`],[`walk`,`library`],[`walk`,`forest`],[`inquiry`,`results`],[`inquiry`,`teacher`],[`course`,`admin`],[`admin`,`teacher`],[`digital`,`brand`],[`digital`,`library`]],sh=[[`course`,`future`]],ch=[{a:`course`,b:`inquiry`,text:`完成式連線：since/for 時間搭配（時光島）↔ been to / gone to 狀態辨析（足跡島）`},{a:`walk`,b:`library`,text:`被動觀念互通：人「感到」p.p.（情緒分詞）正是被動語態（be + p.p.）的延伸應用`},{a:`walk`,b:`digital`,text:`情緒與程度：so excited that... 與 too excited to... 寫作高頻互轉句型`},{a:`library`,b:`admin`,text:`被動全面進化：一般五大時態被動式 ↔ make 使役還原 to 與特殊介系詞被動`},{a:`teacher`,b:`results`,text:`名詞子句雙子星：wh- 間接問句直線語序 ↔ whether/if 表「是否」保留未來式`},{a:`forest`,b:`brand`,text:`後位修飾進化史：介系詞短片語（with glasses）↔ 關係子句長修飾（who wears glasses）`},{a:`brand`,b:`future`,text:`關代完整拼圖：主格關代（不可省 + V）↔ 受格關代（可省略 + S + V）與禁 that 陷阱`},{a:`core`,b:`course`,text:`由總島起飛進入第一單元：先穩住不規則動詞三態，完成式與被動式全部通暢`},{a:`core`,b:`digital`,text:`小羊兒老師建議：配合右上天氣與日夜切換記憶情緒形容詞與完成式例句超有效！`},{a:`inquiry`,b:`future`,text:`直登曙光最高島：把完成式、被動式與關代寫進同一個會考綜合閱讀長句中`}],lh={core:{name:`羊兒小河馬`,line:`歡迎來到英語第五冊小宇宙！三態表背熟了嗎？`},course:{name:`時光小河馬`,line:`since 加過去時間點，for 加一段時間，千萬別弄反！`},inquiry:{name:`足跡小河馬`,line:`I / you 絕對不能接 have gone to，因為人都在這裡說話啦！`},walk:{name:`情緒小河馬`,line:`物用 V-ing、人用 p.p.，interested 永遠要牽手 in！`},digital:{name:`連線小河馬`,line:`enough 記得站在形容詞後面（old enough），但名詞前面（enough money）！`},library:{name:`被動小河馬`,line:`主詞不會自己「製造」或「打掃」時，快派 be + p.p. 上場！`},admin:{name:`燈塔小河馬`,line:`make 在主動躲掉 to，變成 be made 時要把 to 還給人家！`},teacher:{name:`問句小河馬`,line:`Do you know where he lives? 千萬別寫 does he live！`},results:{name:`星光小河馬`,line:`問「是否」用 if/whether 要留 will，講「如果」才用現在代未來！`},forest:{name:`眼鏡小河馬`,line:`穿衣服顏色用 in，帶眼鏡或長頭髮特徵用 with 喔！`},brand:{name:`飛艇小河馬`,line:`先行詞有人又有動物，關係代名詞唯一指定用 that！`},future:{name:`曙光小河馬`,line:`逗號和介系詞後面絕對禁用 that！加油，會考 A++ 就在眼前！`}},uh={act:{teach:[`大家筆記拿出來！完成式的核心就是 have / has + p.p. 喔！`,`看到物就想 V-ing，看到人感到怎樣就想 p.p.，超好記吧！`,`改被動語態最重要的一步：先把受詞請到句首當新主詞！`,`間接問句口訣再唸一遍：疑問詞 ＋ 主詞 ＋ 動詞，不准倒裝！`],listen:[`原來 I have been to Taipei 跟 gone to 差這麼多！`,`老師！be made to VR 的 to 真的不能省對不對？`,`這句有逗號，所以關代絕對不能填 that！`,`小羊兒老師整理的考前口訣超好背！`],read:[`我正在對照不規則動詞三態表，go - went - gone！`,`噓～這篇三明治由來的會考閱讀超有趣的！`,`看完這段間接問句筆記，我就不怕段考了！`,`原來 with 還可以放在名詞後面修飾人！`],ball:[`Have you caught the ball yet? 接好囉！`,`Look how high the ball was thrown!（被動式！）`,`I am so excited about the game!`,`小心，球不要丟到雲裡去啦！`],tag:[`You’re so fast that nobody can catch you!`,`換你用被動語態造句才能當鬼！`,`追不到追不到！I have run for ten minutes!`,`跑慢一點，Look at the boy with blue shoes!`],jump:[`今天背完五組三態超開心！`,`The jump is so exciting!`,`看我跳得是不是跟關代分數一樣高！`],wave:[`嗨！歡迎來到國中英語第五冊浮空群島！`,`找到幾隻小河馬文法守護員啦？`,`記得開音樂，一起搭飛艇複習九年級英文！`],rainteach:[`下雨了正好複習天氣與情緒分詞：The rainy day is boring, isn’t it?`,`撐好傘！這把雨傘是由台灣師傅製作的：was made in Taiwan！`,`雨中也能討論 if（是否）it will stop raining soon!`],rainlisten:[`老師，我記得 I wonder whether it will rain tomorrow 要用 will！`,`下雨聲真讓人覺得 sleepy（或是 relaxing）！`,`我的新外套把雨水擋在外面了，So cool!`],puddle:[`啪嗒！水花好大，I am surprised at the splash!`,`我的鞋子已經濕透了（have gotten wet）！`,`水窪裡照出來的雲好美！`],huddle:[`大家靠過來一點，The umbrella is large enough for us to share!`,`這把傘大到夠三個人一起撐（so big that...）！`,`撐一把傘也能練英文造句！`],catch:[`我剛剛接到好多滴雨（have caught so many raindrops）！`,`雨滴已經停得差不多了嗎？Has the rain stopped yet?`,`太棒了，出太陽就有彩虹了！`],stars:[`這顆星星比剛剛那顆還亮，It shines the brightest!`,`你猜哪個星座是剛剛那條線連出來的（which was pointed at）？`,`好想搭星際飛艇飛去關代受格島看日出！`,`星星一閃一閃的，The night sky is amazing!`],starteach:[`Look at the bright stars which shine above the world tree!`,`抬頭看看，我們剛複習完關代和後位修飾喔！`,`夜晚觀星最能感受第五冊形容詞子句的優美節奏。`],camp:[`營火晚會要開始了，Tell us a story that makes us laugh!`,`營火暖烘烘的，I’ve never had such a fun night!`,`聽完這則故事我們就再去衝 12 關文法挑戰！`,`這首詩好感人，We are all moved by the ending!`],patrol:[`晚安！記得把今天錯過的完成式題目再看一遍喔！`,`燈塔亮著，Don’t forget make 被動要還原 to！`,`早點休息，明天繼續挑戰第五冊閱讀達人！`],nightread:[`趁營火還在亮，再複習兩組被動片語：be known for / as / to！`,`用手電筒看第五冊筆記更有探險基地的感覺！`,`唸完間接問句再睡覺，記憶會超級深刻！`],flash:[`看我用手電筒照亮那隻躲起來的守護小河馬！`,`我找到了三隻了，Have you found yours yet?`,`把光束打在世界樹上，The tree is lit up!`]},travel:{teacher:[`跟緊小羊兒老師，下一站要飛去征服被動語態與關代囉！`,`過吊橋要扶好欄杆，就像寫對關代前要先找準先行詞！`,`大家走整齊，等一下每個人都能拿到第五冊達人證書！`],student:[`我想先去完成式時光島收集第一枚印章！`,`吊橋晃晃的好刺激，但為了達人證書我完全不怕！`,`聽說最高的那座關代受格島風景最壯觀！`,`等等我，我還要記一組不規則動詞 p.p.！`]},weather:{day:{teacher:[`天氣晴朗，It’s an exciting day to master Book 5 English!`,`陽光這麼暖，我們到大書島複習現在完成式吧！`,`多喝水，保持專注力迎戰九年級大考！`],student:[`晴天光線剛剛好，找小河馬最清楚！`,`Such a relaxing morning! 逛島的心情好好！`,`快看！那朵雲像不像一個大問號，提醒我們檢查間接問句？`]},cloudy:{teacher:[`雲變厚了，Remember: I don’t know if it will rain（是否要留 will）!`,`陰天光線柔和，最適合安靜坐在書房島讀閱讀題組。`],student:[`天空陰陰的，正好考一題：The weather makes us feel sleepy!`,`陰天逛十二座島涼涼的好舒服！`]},rain:{teacher:[`地板有點滑，大家小心走（Walk carefully so you won’t fall）!`,`雨天最容易練習被動語態：The playground was washed clean by the rain.`],student:[`下雨了！快看大家撐起彩色的傘囉！`,`The rain has lasted for two hours!（for ＋ 一段時間！）`,`等雨停看彩虹：The rainbow was painted by the sun and rain!`]},storm:{teacher:[`颱風警報中，大家先躲進安全室內複習第五冊筆記最安心！`,`颱風天待在家做線上文法 12 關挑戰剛剛好！`],student:[`風好大，還好門都有關好（The doors have been locked）！`,`進屋吹乾順便打開第五冊隨堂閱讀護照！`]},dusk:{teacher:[`黃昏色溫好美！大家看這句子：We are amazed at the sunset!`,`黃昏了，檢查一下還有哪幾座島還沒蓋閱讀護照章吧。`],student:[`天空被夕陽染紅了（has been painted orange）！`,`夕陽西下的天空浮空島超級夢幻的！`]},night:{teacher:[`夜幕降臨！抬頭看星空與營火，一起挑戰最後三座邏輯與關代島吧！`,`夜晚燈塔會點亮道路，就像好文法帶你看懂整篇會考閱讀！`],student:[`夜晚的浮空島閃閃發亮好漂亮！`,`點開世界樹旁的燈籠再找最後一隻小河馬！`]}},cheer:[`太強啦！恭喜榮獲「第五冊文法達人」！`,`十二座浮空島文法關卡全部破關囉！`,`小羊兒老師為你掌聲鼓勵，好棒棒！`,`完成式、被動式、關代通通難不倒你了！`,`記得繼續挑戰第四階段「第五冊閱讀達人」拿滿大滿貫！`,`立刻下載專屬高解析榮譽證書收藏紀念吧！`,`會考英語 A++ 已經向你招手囉！`],tips:[`【完成式金律】since ＋ 過去時間點／過去式子句；for ＋ 一段時間；already 用肯定，yet 用疑問／否定句尾！`,`【經驗 vs. 未回】I / you 不可寫 have gone to；去過已回來選 been to，去了還沒回來選 gone to！`,`【情緒分詞】事物用 -ing，人用 -ed (p.p.)；常見介系詞 interested in / excited about / tired of / surprised at！`,`【結果互換】enough 放形容詞後（tall enough）、名詞前（enough time）；too...to 換 so...that 須補主詞與否定！`,`【被動核心】看到主詞不能自己做動作就選 be + p.p.；make 主動 VR 改被動務必還原 to VR！`,`【名詞子句】Do you know 接間接問句要用「wh- + S + V」，不可倒裝！whether / if 表是否須留 will！`,`【關係子句】人與物並存、最高級、序數用 that；介系詞與逗號後面絕對不可用 that！`],indoor:{teacher:[`躲進教室正好！把第五冊被動語態五種時態整理一次。`,`趁外面大風大雨，把間接問句語序口訣唸十遍吧！`,`等颱風模式結束，我們再一起到戶外找小河馬！`],student:[`室內好溫暖！順便把第五冊不會的題目寫進筆記本！`,`外面風聲聽起來好震撼，還好這裡可以邊躲雨邊刷題！`]},shelter:{teacher:[`大家跟著小羊兒老師進屋避雨！動作快一點！`,`先找最近的屋子進去，記得點建築物打開文法筆記！`],student:[`風好大，傘快翻過去了！`,`快進屋子裡繼續解開關代受格的謎題！`]},island:{core:[`世界樹下是第五冊六大單元總指揮中心，點我看全景架構！`,`本作品特別感謝石門國小阿凱老師開源架構與黃泓諺（紅焰）老師研習指導！`,`先背熟常考不規則動詞過去分詞，L1 到 L3 立刻順暢一半！`],course:[`攤開這本大書！Have you finished your homework yet?`,`How long have you lived in Taiwan? 答句配 for 或 since！`,`注意 so far、recently、these days 都是現在完成式的超級大暗號！`],inquiry:[`天文台觀測中：Where has Tom gone? He has gone to Japan.（人還在國外！）`,`I have been to Japan twice.（去過兩次，人已回台灣！）`,`It has been five years since Tom left Taipei.`],walk:[`大壩上的考題陷阱：The movie was boring, so we felt bored.`,`be tired from（因工作／運動疲累）vs. be tired of（對某事厭煩）要看清楚！`,`be scared of（害怕）、be pleased with（滿意），介系詞別用錯囉！`],digital:[`The box is too heavy for me to carry = so heavy that I can’t carry it.（別漏了 it！）`,`Is the soup warm enough to drink? enough 乖乖排在 warm 後面！`,`Such + (a/an) + adj. + N + that 與 so + adj. + that 別混在一起喔！`],library:[`書房寶典：English is spoken in many countries.（現在簡單被動）`,`The bridge was built ten years ago.（看到 ago 立即選過去被動 was built）`,`All the windows have been cleaned.（已經被擦乾淨＝完成被動 have been p.p.）`],admin:[`燈塔大考點：We were made to clean the classroom by Mom.（還原 to！）`,`Hualien is famous/known for its beautiful mountains.（以…特色著名用 for）`,`She is known as a great writer.（以…身分著名用 as）`],teacher:[`齒輪秘密：Where does he live? → Tell me where he lives.（去掉 does、live 加 s！）`,`What happened to Tim? 當疑問詞本身就是主詞，間接問句語序完全不變！`,`Do you think / believe / guess 開頭時，疑問詞記得擺到句首！`],results:[`星光辨析：I’m not sure if he will come tomorrow.（是否→要留 will！）`,`If he comes tomorrow, I will tell him.（如果→現在代未來！）`,`介系詞之後（about whether...）或接 or not（whether...or not）不可換成 if！`],forest:[`看那邊：Who is the boy in a green jacket / with big eyes?`,`主詞一致檢查：The books on the desk were written by a famous writer.（主詞是複數 books！）`,`用介系詞片語當後位修飾，簡潔又道地！`],brand:[`飛艇大挑戰：The girl who sits next to me is my best friend.`,`I lost the watch which/that my father gave me.（受格其實可以省略喔！）`,`This is the best movie that I have ever seen.（最高級只用 that！）`],future:[`登上最高峰：The house in which they live is very old.（介系詞前移只可用 which / whom！）`,`My uncle, who lives in Tainan, is a doctor.（有逗號不准填 that！）`,`恭喜抵達終點！把三階段證書與閱讀達人全部收入囊中吧！`]}},dh=[{k:`超高頻`,title:`現在完成式（have/has + p.p. 與 since/for）`,sub:`會考幾乎年年必出 1～2 題，時光島與足跡島雙星必攻`,island:`course`},{k:`必考點`,title:`被動語態與 make 使役還原 to VR`,sub:`結合時態判斷與及物/不及物辨析，書房島與燈塔島核心`,island:`library`},{k:`易錯區`,title:`been to / gone to / been in 混淆題`,sub:`特別留心主詞不可為 I/you，以及人不在現場的判斷線索`,island:`inquiry`},{k:`閱讀魂`,title:`關係代名詞主格・受格與省略判讀`,sub:`決定會考長篇閱讀能否一眼抓到主詞動詞的關鍵語法`,island:`brand`},{k:`語意王`,title:`間接問句語序與 if「是否 vs. 如果」`,sub:`Do you know + wh- + S + V？與名詞子句時態一致性`,island:`teacher`},{k:`陷阱多`,title:`情緒分詞 V-ing / p.p. 與固定介系詞`,sub:`interest / excite / bore / tire / surprise 介系詞必背清單`,island:`walk`},{k:`防呆區`,title:`too...to / enough to / so...that 三句互轉`,sub:`常出現于改寫與單題文法，注意 it 代名詞不可漏！`,island:`digital`},{k:`細節王`,title:`介系詞片語後位修飾與真實主詞單複數`,sub:`跨過 with / in / on 找到真正的單複數動詞`,island:`forest`},{k:`滿分關`,title:`介系詞＋whom/which 與逗號禁 that 鐵則`,sub:`衝刺會考英語 A++ 進階題必備知識點`,island:`future`}],fh=[{text:`Practice makes perfect. Practice every unit carefully!`,by:`小羊兒老師｜英語備考叮嚀`},{text:`Since ＋ 過去時間點；For ＋ 一段時間，完成式時態不走歪！`,by:`完成式時光島・口訣`},{text:`事物令人 V-ing，人心感到 p.p.（-ed），看清主詞立刻秒殺！`,by:`情緒分詞島・口訣`},{text:`主動 make + O + VR；被動一定要把 to 還回來（be made to VR）！`,by:`特殊被動島・鐵律`},{text:`間接問句絕不倒裝：疑問詞後面永遠先找主詞，再寫動詞！`,by:`間接問句島・鐵律`},{text:`If 當「如果」現在代未來；If 當「是否」未來就留 will！`,by:`是否子句島・雙關必背`},{text:`The only / 最高級 / 序數 / 人＋物並存，關代優先選 that！`,by:`關代主格島・黃金原則`},{text:`逗號後面與介系詞後面，絕對禁用關係代名詞 that！`,by:`關代受格島・防錯鎖定`},{text:`He is too young to drive. = He is not old enough to drive.`,by:`結果連線島・經典互換`},{text:`Do you know where the library is?（請把 is 放在最後面！）`,by:`小羊兒老師｜會考高頻範例`},{text:`Have you ever been to Taipei?（去過＝been；去了沒回＝gone）`,by:`經驗足跡島・經典範例`},{text:`The girl with glasses and a pink shirt is our teacher!`,by:`介片後位島・小羊兒老師範例`},{text:`Where there is a will, there is a way.（有志者事竟成）`,by:`九年級會考衝刺金句`},{text:`Step by step, you will reach the top of Book 5 Sky Islands!`,by:`小羊兒老師 × 線上焰兒研習精神`}],ph=[{q:`考英語單題時，你最常在下列哪種題目猶豫好幾秒？`,a:[[`for / since 還是已經／還沒（yet）`,`course`],[`到底要填 V-ing 還是 p.p. (-ed)`,`walk`],[`主詞到底是用主動還是 be + p.p. 被動`,`library`],[`who / which / that 與介系詞怎麼選`,`brand`]]},{q:`寫句子或中翻英時，哪個錯誤最常讓你後悔沒檢查出來？`,a:[[`been to 跟 gone to 又選反了`,`inquiry`],[`enough 放到形容詞前面去`,`digital`],[`間接問句不小心又寫成 do/does 倒裝`,`teacher`],[`逗號或介系詞後面不小心選了 that`,`future`]]},{q:`遇見長長的會考閱讀句子時，你最想學會哪項超能力？`,a:[[`一眼看出修飾人的 with / in 介系詞片語`,`forest`],[`精準分辨 if 是「如果」還是「是否」`,`results`],[`看懂 make 被動還原 to 的進階架構`,`admin`],[`通盤掌握六大單元的會考整體藍圖`,`core`]]},{q:`你今天希望在哪一種天空下展開你的第五冊複習？`,a:[[`有時間線索與太陽變化的清晰航道`,`course`],[`有雨水與水花陪伴思考的抒情氛圍`,`walk`],[`像書房一樣安靜整齊的歸納架構`,`library`],[`直上雲霄挑戰高難度閱讀與文法`,`future`]]}],mh={core:{title:`全域建築師`,text:`你適合先從「第五冊文法總島」看清六單元全貌，再各個擊破！`},course:{title:`時空探險家`,text:`從「完成式時光島」出發！搞定三態與 since/for，基礎立刻固若金湯！`},inquiry:{title:`路線觀測員`,text:`去「經驗足跡島」把 been to 與 gone to 的視角盲點徹底掃描一遍！`},walk:{title:`共感解析師`,text:`走上「情緒分詞島」搭配生活場景，秒懂 -ing 與 -ed 的主動被動魔法！`},digital:{title:`句型轉換工程師`,text:`鎖定「結果連線島」，把 too...to、enough to、so...that 練成肌肉記憶！`},library:{title:`語態整理大師`,text:`前往「被動語態島」系統化收編五大時態 be + p.p. 公式！`},admin:{title:`燈塔除錯達人`,text:`來「特殊被動島」破解 make 還原 to 與不用 by 的介系詞魔王陷阱！`},teacher:{title:`語序糾察隊長`,text:`「間接問句島」最適合你！把疑問詞後的 S+V 直述秩序牢牢盯緊！`},results:{title:`邏輯雙星偵探`,text:`登陸「是否子句島」，再也不怕考卷拿「如果 vs. 是否」的時態考倒你！`},forest:{title:`火眼金睛畫家`,text:`到「介片後位島」練習切分修飾片語與核心主詞，閱讀長句迎刃而解！`},brand:{title:`關代領航艦長`,text:`搭上「關代主格島」飛艇，精準連接人物先行詞與形容詞子句！`},future:{title:`曙光衝刺冠軍`,text:`直取最高島「關代受格島」，攻克介系詞＋whom/which 與非限定逗號禁區！`}},hh={student:{hip:.34,leg:1,tor:1,head:1,arm:1},teacher:{hip:.476,leg:1.4,tor:1.25,head:.85,arm:1.25}},gh=[`#f2c230`,`#fbf6ea`,`#5ea85a`,`#e8743b`,`#4fa3d1`,`#ef8fa3`,`#f2c230`,`#5ea85a`],_h=[`#2f6f8f`,`#9c4f3a`,`#4a6b4f`,`#7a5a9c`,`#b5563c`],vh=[`#2f4a6b`,`#3f5a4a`,`#4a4560`,`#2f6f53`],yh=[`#2a2118`,`#3b2a1c`,`#1f1a16`,`#4a3524`],bh=[`#d9432f`,`#3d86c6`,`#e3a73b`,`#5a9b4e`,`#a23f8f`],xh=[`#ffffff`,`#fff3ea`,`#f4e2d0`],Sh=[`#d9432f`,`#f2c230`,`#3d86c6`,`#5ea85a`,`#ef8fa3`,`#7a5a9c`,`#2f9c95`,`#e8743b`],Ch=.15,wh=.5,Th=-9999,Eh=Object.fromEntries(ih.map(e=>[e.id,e.name])),Dh=new bn,Oh=new bn,kh=new bn,Ah=new An(0,0,0,`YXZ`),jh=new H,Mh=new bn().makeScale(0,0,0),Nh={x:0,y:0,z:0},Ph={x:0,y:0,z:0};function Fh(e,t,n,r,i=1,a=1,o=1){return Oh.makeRotationX(r),Oh.scale(jh.set(i,a,o)),Oh.setPosition(e,t,n),kh.multiplyMatrices(Dh,Oh)}var Ih=(e,t,n)=>e+((t-e+Math.PI*3)%(Math.PI*2)-Math.PI)*n,Lh=class{constructor(e,t,n,{classes:r,groups:i,solos:a}){this.islands=t,this.ids=Object.keys(t),this.index=Object.fromEntries(this.ids.map((e,t)=>[e,t])),this.bobs=new Float32Array(this.ids.length),this.r=lp(2026),this.adj=Object.fromEntries(this.ids.map(e=>[e,[]]));for(let e of n)this.adj[e.a].push({to:e.b,pts:e.pts}),this.adj[e.b].push({to:e.a,pts:[...e.pts].reverse()});this.queue=[],this.list=[],this.crews=[],this.followed=null,this.wet=!1,this.dark=!1,this.pace=1,this.spawn(r,i,a),this.buildMeshes(e)}pick(e){return e[Math.floor(this.r()*e.length)]}spawn(e,t,n){let r=[`core`,`library`,`course`,`forest`,`inquiry`,`walk`,`digital`,`results`,`brand`,`teacher`,`admin`,`future`],i=0,a=()=>r[i++%r.length];for(let t=0;t<e;t++)this.addCrew(a(),[`teacher`,`student`,`student`,`student`,`student`,`student`],1);for(let e=0;e<t;e++)this.addCrew(a(),this.r()>.5?[`student`,`student`,`student`]:[`student`,`student`],1.25);for(let e=0;e<n;e++)this.addCrew(a(),[e%3==2?`student`:`teacher`],1.1);let o=this.crews.map((e,t)=>t).sort(()=>this.r()-.5);o.forEach((e,t)=>{this.crews[e].rank=(t+.5)/o.length})}addCrew(e,t,n){let r=this.r,i=this.islands[e].nav,a=this.pick(i.spots.filter(e=>!e.taken)),o=this.islands[e].group.position,s={id:this.crews.length,here:e,to:e,spot:a,speed:n,trail:new eh,s:0,state:`wait`,timer:r()*7,act:null,members:[],ball:null,rank:1,on:!0,teacher:t[0]===`teacher`,at:{x:a.x,z:a.z,id:e},pud:0,fire:0};a.taken=s,t.forEach((t,n)=>{let c=r()*6.28,l=i.nearest(a.x+Math.cos(c)*.8,a.z+Math.sin(c)*.8),u=i.cx(l),d=i.cz(l),f=o.x+u,p=o.z+d,m=this.islands[e].base+i.y(u,d),h={idx:this.list.length,kind:t,crew:s,slot:n,body:hh[t],s:t===`teacher`?1.22:.92+r()*.18,x:f,y:m,z:p,tx:f,ty:m,tz:p,lx:u,lz:d,yaw:r()*6.28,spd:0,phase:r()*6.28,ph:r()*6.28,aL:0,aR:0,lL:0,lR:0,lift:0,lean:0,mode:`idle`,goal:`idle`,face:null,book:!1,vis:1,hidden:!1,umb:0,lamp:0,look:0,aim:1.95,sweep:0,reach:1,bare:t===`student`&&r()<.2,lit:t===`teacher`||r()<.8};s.members.push(h),this.list.push(h)}),this.crews.push(s)}setStorm(e){if(e!==!!this.storm){if(this.storm=e,e){this.queue.length=0;for(let e of this.crews)this.shelter(e)}else for(let e of this.crews){if(e.state!==`shelter`&&e.state!==`inside`)continue;let t=this.islands[e.here].group.position;e.state=`wait`,e.timer=1.5+this.r()*5,e.members.forEach(e=>{e.inside=!1,e.goal=`idle`,e.lx=e.x-t.x,e.lz=e.z-t.z})}}}shelter(e){let t=this.islands[e.here],n=e.members[0],r=t.group.position,i=n.x-r.x,a=n.z-r.z,o=null,s=1/0;for(let e of t.shelters){let t=(e.x-i)**2+(e.z-a)**2;t<s&&(s=t,o=e)}o||(o={x:i,z:a}),e.door=o,e.ball=null,this.ballMesh.setMatrixAt(e.id,Mh),e.act=null;let c=e.trail;c.reset(),c.add(n.x,t.base+t.nav.y(i,a),n.z,this.index[e.here]),this.walkOn(c,e.here,i,a,o.x,o.z),e.s=0,e.state=`shelter`,e.timer=11,e.members.forEach(e=>{e.goal=`walk`,e.face=null,e.book=!1,e.inside=!1})}buildMeshes(e){this.meshes=[];let t=this.r,n=e=>{let t=new hp(77);return e(t),t.build().children[0].geometry},r=(t,n,r,i)=>{let a=new Qi(t,i||new _s({vertexColors:!0,roughness:.8}),Math.max(1,n));a.frustumCulled=!1,a.castShadow=r;for(let e=0;e<a.count;e++)a.setMatrixAt(e,Mh);return e.add(a),this.meshes.push(a),a},i=this.list.length;this.torso=r(n(e=>e.cyl(.19,.38,`#ffffff`,0,0,0,{rt:.15,seg:7,ao:1,jitter:0,wonk:0})),i,!0),this.head=r(n(e=>{e.ball(.23,J.skin,0,.2,0,{detail:1,jitter:0,wonk:0});for(let t of[-1,1])e.ball(.034,J.ink,t*.085,.21,.205,{wonk:0,jitter:0}),e.ball(.04,`#f0a58e`,t*.135,.135,.17,{sy:.6,wonk:0,jitter:0})}),i,!1);let a=e=>e.ball(.245,`#ffffff`,0,.285,-.045,{detail:1,sy:.78,jitter:0,wonk:0,ao:1});this.hairA=r(n(a),i,!1),this.hairB=r(n(e=>{a(e),e.ball(.11,`#ffffff`,0,.3,-.27,{sy:1.4,jitter:0,wonk:0,ao:1}),e.ball(.05,`#ffffff`,0,.42,-.26,{jitter:0,wonk:0,ao:1})}),i,!1),this.arms=r(n(e=>{e.cyl(.058,.32,`#ffffff`,0,-.32,0,{seg:5,ao:1,jitter:0,wonk:0}),e.ball(.066,`#ffffff`,0,-.33,0,{jitter:0,wonk:0,ao:1})}),i*2,!1),this.legs=r(n(e=>{e.cyl(.078,.3,`#ffffff`,0,-.3,0,{seg:5,ao:1,jitter:0,wonk:0}),e.box(.14,.07,.22,`#3b2c1d`,0,-.34,.035,{jitter:0,wonk:0,ao:1})}),i*2,!0),this.pack=r(n(e=>e.box(.27,.31,.13,`#ffffff`,0,.05,-.2,{ao:.85,jitter:0})),i,!1),this.bookMesh=r(n(e=>{e.box(.3,.035,.22,`#c0392b`,0,0,0,{jitter:0,wonk:0,ao:1}),e.box(.27,.03,.2,J.paper,0,.03,0,{jitter:0,wonk:0,ao:1})}),i,!1),this.flagMesh=r(n(e=>{e.cyl(.016,.62,`#6a5541`,0,-.92,0,{seg:4,jitter:0,wonk:0,ao:1}),e.box(.03,.2,.32,`#d9432f`,0,-.92,.17,{jitter:0,wonk:0,ao:1})}),i,!1),this.ballMesh=r(n(e=>e.ball(.13,`#e8743b`,0,0,0,{detail:1,jitter:.1,wonk:0,ao:1})),this.crews.length,!0);let o={jitter:0,wonk:0,ao:1},s=()=>new Oi({vertexColors:!0}),c=this.crews.length;this.umbrella=r(n(e=>{e.cyl(.022,.8,`#6a5541`,0,0,0,{seg:4,...o}),e.cone(.74,.3,`#ffffff`,0,.62,0,{seg:8,...o}),e.ball(.035,`#ffffff`,0,.93,0,o)}),i,!0),this.torch=r(n(e=>{e.cyl(.036,.2,`#3b3f46`,0,0,0,{seg:6,...o}),e.cyl(.058,.07,`#fff2c4`,0,.2,0,{seg:6,...o})}),i,!1,s());let l={color:`#ffe9a8`,transparent:!0,blending:2,depthWrite:!1};this.beam=r(new Na(.8,3.4,12,1,!0).rotateX(Math.PI).translate(0,1.7,0),i,!1,new Oi({...l,alphaMap:Rh(),opacity:.34,side:2})),this.spot=r(new ja(1,16).rotateX(-Math.PI/2),i,!1,new Oi({...l,opacity:.3})),this.logs=r(n(e=>{e.box(.62,.09,.12,`#5a3a22`,0,0,0,o),e.box(.12,.09,.62,`#4a3019`,0,.06,0,o)}),c,!0),this.flame=r(n(e=>{e.cone(.2,.52,`#ff9a2e`,0,0,0,{seg:6,...o}),e.cone(.11,.34,`#ffe68a`,0,.02,0,{seg:6,...o})}),c,!1,s()),this.puddle=r(new ja(1,18).rotateX(-Math.PI/2),c,!1,new Oi({color:`#a9d6ee`,transparent:!0,opacity:.62,depthWrite:!1})),this.ring=r(new rs(.91,1,18).rotateX(-Math.PI/2),i,!1,new Oi({color:`#f2fbff`,transparent:!0,opacity:.6,depthWrite:!1})),this.glowAt=new Float32Array(c*3).fill(Th);let u=new Xr;u.setAttribute(`position`,new Ir(this.glowAt,3)),this.glow=new Ca(u,new va({size:5,map:zh(),color:`#ffc06a`,transparent:!0,opacity:0,blending:2,depthWrite:!1,depthTest:!1})),this.glow.frustumCulled=!1,e.add(this.glow);let d=new W;this.list.forEach((e,n)=>{let r=e.kind===`teacher`,i=r?this.pick(_h):gh[n%gh.length],a=this.pick(xh),o=d.set(r?`#4a4038`:this.pick(vh)).clone();this.torso.setColorAt(n,d.set(i)),this.head.setColorAt(n,d.set(a));let s=d.set(this.pick(yh)).clone();this.hairA.setColorAt(n,s),this.hairB.setColorAt(n,s),e.hair=t()>.5?this.hairA:this.hairB,e.other=e.hair===this.hairA?this.hairB:this.hairA;let c=d.set(r?i:J.skin).clone();this.arms.setColorAt(n*2,c),this.arms.setColorAt(n*2+1,c),this.legs.setColorAt(n*2,o),this.legs.setColorAt(n*2+1,o),this.pack.setColorAt(n,d.set(this.pick(bh))),this.bookMesh.setColorAt(n,d.set(this.pick([`#ffffff`,`#ffd9a0`,`#bfe3ff`,`#c9efc4`]))),this.flagMesh.setColorAt(n,d.set(`#ffffff`)),this.umbrella.setColorAt(n,d.set(Sh[Math.floor(t()*Sh.length)]))});for(let e=0;e<this.crews.length;e++)this.ballMesh.setColorAt(e,d.set(`#ffffff`))}hops(e,t){if(e===t)return[];let n={[e]:null},r=[e];for(;r.length;){let e=r.shift();if(e===t)break;for(let t of this.adj[e])n[t.to]===void 0&&(n[t.to]={id:e,e:t},r.push(t.to))}let i=[];for(let e=t;n[e];e=n[e].id)i.unshift(n[e].e);return i}walkOn(e,t,n,r,i,a){let o=this.islands[t],s=this.index[t],c=o.group.position,l=n,u=r;for(let[t,d]of[...o.nav.find(n,r,i,a),[i,a]]){let n=o.nav.floor?Math.ceil(Math.hypot(t-l,d-u)/.4):1;for(let r=1;r<=n;r++){let i=l+(t-l)*r/n,a=u+(d-u)*r/n;e.add(c.x+i,o.base+o.nav.y(i,a),c.z+a,s)}l=t,u=d}}plan(e,t,n){let r=e.trail,i=e.members[0],a=e.here,o=this.islands[a].group.position,s=i.x-o.x,c=i.z-o.z;r.reset(),r.add(i.x,this.islands[a].base+this.islands[a].nav.y(s,c),i.z,this.index[a]);for(let n of this.hops(e.here,t)){let e=n.pts,t=this.index[a],i=this.index[n.to];this.walkOn(r,a,s,c,e[0][0]-o.x,e[0][2]-o.z),e.forEach((n,a)=>r.add(n[0],n[1],n[2],t,i,a/(e.length-1))),r.marks.push({s:r.len,id:n.to});let l=e[e.length-1];a=n.to,o=this.islands[a].group.position,s=l[0]-o.x,c=l[2]-o.z}this.walkOn(r,a,s,c,n.x,n.z)}destination(e){let t=this.r,n=e.here,r=t();r>.35&&(n=this.pick(this.adj[e.here]).to,r>.82&&(n=this.pick(this.adj[n]).to));let i=this.islands[n].nav,a=e.members.length,o=a>=4||a>1?4:2,s=i.spots.filter(t=>(!t.taken||t.taken===e)&&t.clr>=o);if(e.teacher&&a>1){let e=s.filter(e=>e.look);e.length&&(s=e)}return s.length||(s=i.spots),{to:n,spot:this.pick(s)}}depart(e){let{to:t,spot:n}=this.destination(e);e.spot&&(e.spot.taken=null),this.plan(e,t,n),n.taken=e,e.spot=n,e.to=t,e.s=0,e.state=`travel`,e.act=null,e.ball=null,this.ballMesh.setMatrixAt(e.id,Mh),e.members.forEach(e=>{e.goal=`walk`,e.face=null,e.book=!1})}seat(e,t,n,r,i,a,o=!1){let s=this.islands[e.here].nav,c=s.free(n,r)?-1:s.nearest(n,r);t.lx=c<0?n:s.cx(c),t.lz=c<0?r:s.cz(c),t.goal=i,t.face=a,t.book=o}arrive(e){let t=this.r,{x:n,z:r,clr:i,look:a}=e.spot,o=e.members.length;if(e.state=`play`,e.at={x:n,z:r,id:e.here},e.teacher&&o>1){e.act=this.wet?`rainclass`:this.dark?`stars`:`lesson`,e.timer=15+t()*10;let i=e.act===`stars`?`point`:`talk`,s={lesson:`sit`,rainclass:`idle`,stars:`gaze`}[e.act],c=a?Math.atan2(a[1]-r,a[0]-n)+Math.PI:t()*6.28;e.members.forEach((t,a)=>{if(a===0){this.seat(e,t,n,r,i,Math.atan2(Math.cos(c),Math.sin(c)));return}let l=c+(a-o/2)*.44,u=1.9,d=n+Math.cos(l)*u,f=r+Math.sin(l)*u;this.seat(e,t,d,f,s,Math.atan2(n-d,r-f))});return}if(o===1){let i=e.teacher;e.act=this.wet?`catch`:this.dark?i?`patrol`:`nightread`:i?`wave`:`read`,e.timer=6+t()*7;let a={wave:`wave`,patrol:`wave`,catch:`catch`}[e.act]||`sit`;this.seat(e,e.members[0],n,r,a,t()*6.28,!i&&a===`sit`);return}let s=i>=5?[`tag`,`ball`,`ball`,`read`,`jump`]:i>=4?[`ball`,`read`,`jump`]:[`read`,`jump`],c=this.wet?[`puddle`,`puddle`,`huddle`,`catch`]:this.dark?i>=4?[`camp`,`flash`,`flash`,`stars`]:[`flash`,`stars`]:s;e.act=this.pick(c),e.timer={tag:10,ball:12,read:14,jump:6,puddle:11,huddle:12,catch:9,camp:18,stars:15,flash:12}[e.act]+t()*7,e.orbit=t()*6.28;let l={read:.75,huddle:.3,puddle:1,catch:.9,camp:1.15,stars:.95,flash:1.3}[e.act]??1.5,u={jump:`jump`,puddle:`splash`,catch:`catch`,camp:`warm`,stars:`gaze`,flash:`flash`}[e.act]||`idle`,d=e.act===`read`||e.act===`stars`||e.act===`catch`||e.act===`flash`;e.members.forEach((t,i)=>{let a=i/o*6.283,s=n+Math.cos(a)*l,c=r+Math.sin(a)*l,f=Math.atan2(n-s,r-c);e.act===`tag`?(t.goal=`run`,t.face=null,t.book=!1):e.act===`read`?this.seat(e,t,s,c,`sit`,f+Math.PI,!0):this.seat(e,t,s,c,u,d?f+Math.PI:f)}),e.act===`ball`&&(e.ball={from:0,to:1,u:0})}tick(e,t,n){if(e.state!==`inside`){if(e.state===`shelter`){let t=e.trail;e.timer-=n,e.s=Math.min(t.len+4,e.s+e.speed*2.3*n);let r=!0;e.members.forEach((n,i)=>{let a=Math.ceil(i/2),o=i===0?0:i%2?.24:-.24,s=e.s-a*.72;t.at(s,Nh,this.bobs),t.at(s+.15,Ph,this.bobs);let c=Ph.x-Nh.x,l=Ph.z-Nh.z,u=Math.hypot(c,l)||1;n.tx=Nh.x-l/u*o*+(s<t.len),n.tz=Nh.z+c/u*o*+(s<t.len),n.ty=Nh.y,s>=t.len&&Math.hypot(n.x-n.tx,n.z-n.tz)<.35&&(n.inside=!0),e.timer<=0&&(n.inside=!0),n.inside||(r=!1)}),r&&(e.state=`inside`)}else if(e.state===`wait`)e.timer-=n,e.timer<=0&&!this.queue.includes(e)&&this.queue.push(e),this.hold(e);else if(e.state===`travel`){for(e.s=Math.min(e.trail.len,e.s+e.speed*this.pace*n);e.trail.marks.length&&e.trail.marks[0].s<=e.s;)e.here=e.trail.marks.shift().id;let t=e.trail;e.members.forEach((n,r)=>{let i=Math.ceil(r/2),a=r===0?0:r%2?.24:-.24,o=e.s-i*.72;t.at(o,Nh,this.bobs),t.at(o+.15,Ph,this.bobs);let s=Ph.x-Nh.x,c=Ph.z-Nh.z,l=Math.hypot(s,c)||1;n.tx=Nh.x-c/l*a,n.tz=Nh.z+s/l*a,n.ty=Nh.y}),e.s>=t.len&&(e.here=e.to,this.arrive(e))}else{if(e.timer-=n,e.act===`tag`){let t=1.7;e.orbit+=2.7/t*n,e.members.forEach((n,r)=>{let i=e.orbit+r/e.members.length*6.283*.8;n.lx=e.spot.x+Math.cos(i)*t,n.lz=e.spot.z+Math.sin(i)*t*.86})}e.ball&&this.throwBall(e,n),this.hold(e),e.timer<=0&&(e.state=`wait`,e.timer=.8+this.r()*2.4,e.members.forEach(e=>{e.goal=`idle`,e.book=!1}),e.ball=null,this.ballMesh.setMatrixAt(e.id,Mh))}}}hold(e){let t=this.islands[e.here],n=t.group.position;for(let r of e.members)r.tx=n.x+r.lx,r.tz=n.z+r.lz,r.ty=t.group.position.y+t.nav.y(r.lx,r.lz)}throwBall(e,t){let n=e.ball,r=e.members.length,i=e.members[n.from],a=e.members[n.to];if(i.goal===`idle`&&Math.hypot(i.x-i.tx,i.z-i.tz)>.1)return;if(n.u+=t/1.05,n.u>=1){n.u=0,n.from=n.to,n.to=(n.to+1+Math.floor(this.r()*(r-1)))%r,n.to===n.from&&(n.to=(n.from+1)%r);return}let o=i.x+(a.x-i.x)*n.u,s=i.z+(a.z-i.z)*n.u,c=i.y+.72+Math.sin(n.u*Math.PI)*1.05;Oh.makeTranslation(o,c,s),this.ballMesh.setMatrixAt(e.id,Oh)}move(e,t){let n=e.crew,r=e.tx-e.x,i=e.tz-e.z,a=Math.hypot(r,i);if(!t)return;let o=n.act===`tag`,s=n.speed*this.pace*(1+Math.min(1.1,Math.max(0,a-.3)*.6))*(o?2.8:1);if(a>.03){let n=Math.min(a,s*t);e.x+=r/a*n,e.z+=i/a*n,e.spd=n/t,e.yaw=Ih(e.yaw,Math.atan2(r,i),1-Math.exp(-t*10))}else{e.spd=0;let n=e.greet>0?e.greetYaw:e.face;n!=null&&(e.yaw=Ih(e.yaw,n,1-Math.exp(-t*(e.greet>0?9:6))))}e.y+=(e.ty-e.y)*(1-Math.exp(-t*14)),e.mode=e.spd>.2?`walk`:e.goal===`run`||e.goal===`walk`?`idle`:e.goal}pose(e,t,n){let r=1-Math.exp(-n*12),i=e.body,a=0,o=0,s=.06,c=.06,l=0,u=0,d=0,f=e.crew;if(e.mode===`walk`){let t=e.spd>2;e.phase+=e.spd*n*(e.kind===`teacher`?4.6:6.4);let r=t?.95:.55;a=Math.sin(e.phase)*r,o=-a,s=-a*.85,c=a*.85,l=Math.abs(Math.cos(e.phase))*(t?.08:.04),u=t?.22:.05}else e.mode===`sit`||e.mode===`gaze`||e.mode===`warm`?(l=.1-i.hip,a=o=-1.45,s=c=e.book?-1:-.5,e.mode===`warm`&&(s=c=-1.25+Math.sin(t*2+e.ph)*.08),e.mode===`gaze`&&(d=.85,e.slot%2==0&&(c=-2.45+Math.sin(t*1.6+e.ph)*.2))):e.mode===`splash`?(l=Math.abs(Math.sin(t*5.2+e.ph))*.4,s=-.7+Math.sin(t*5.2+e.ph)*.4,a=o=-.3):e.mode===`catch`?(d=.7,s=-1.6+Math.sin(t*3+e.ph)*.14):e.mode===`point`?(d=.6,c=-2.55+Math.sin(t*1.5+e.ph)*.18,s=-.4):e.mode===`talk`?(c=-1.15+Math.sin(t*2.3+e.ph)*.4,s=-.35+Math.sin(t*1.4+e.ph)*.15):e.mode===`wave`?c=-2.7+Math.sin(t*9+e.ph)*.34:e.mode===`jump`?(l=Math.abs(Math.sin(t*4.6+e.ph))*.36,s=c=-2.6,a=o=-.2):f.ball&&f.ball.to===e.slot?s=c=-1.2:f.ball&&f.ball.from===e.slot&&f.ball.u<.22&&(c=-2.4);let p=e.slot===0&&f.teacher&&f.members.length>1&&f.state===`travel`&&!this.wet;p&&(c=-2.65),e.flag=p;let m=f.act===`huddle`&&f.state===`play`,h=this.wet&&(m?e.slot===0:!e.bare);if(h?c=-2.1:m?s=c=-.9:this.wet&&(s=c=-2.85,u=Math.max(u,.16)),e.greet>0){e.greet-=n;let r=-2.7+Math.sin(t*10+e.ph)*.34;h?s=r:c=r;let i=(1.6-e.greet)*7;e.kind===`student`&&e.mode!==`walk`&&e.mode!==`sit`&&i<Math.PI*2&&(l=Math.max(l,Math.abs(Math.sin(i))*.26))}f.state===`shelter`&&e.mode===`walk`&&(u=Math.max(u,.3));let g=this.dark&&e.lit&&e.mode!==`warm`;g&&(s=e.mode===`gaze`?-2.4:e.mode===`sit`?-1:-1.35);let _=e.mode===`flash`?1.05:e.mode===`wave`?.9:.4,v=e.mode===`flash`?3.2:e.mode===`wave`?.9:1.2,y=e.mode===`gaze`?.5:e.mode===`sit`?2.6:e.mode===`flash`?1.3:1.95;e.sweep=Math.sin(t*v+e.ph)*_,e.aim+=(y-e.aim)*r,e.reach+=((e.mode===`gaze`?1.5:e.mode===`sit`?.3:1)-e.reach)*r;let b=1-Math.exp(-n*7);e.umb+=((h?m?1.8:1:0)-e.umb)*b,e.lamp+=(+!!g-e.lamp)*b,e.look+=(d-e.look)*r,e.lL+=(a-e.lL)*r,e.lR+=(o-e.lR)*r,e.aL+=(s-e.aL)*r,e.aR+=(c-e.aR)*r,e.lift+=(l-e.lift)*r,e.lean+=(u-e.lean)*r}draw(e,t){let n=e.idx;if(e.vis<.02){if(e.hidden)return;e.hidden=!0;for(let t of[this.torso,this.head,e.hair,this.pack,this.bookMesh,this.flagMesh,this.umbrella,this.torch,this.beam,this.spot,this.ring])t.setMatrixAt(n,Mh);for(let e of[0,1])this.arms.setMatrixAt(n*2+e,Mh),this.legs.setMatrixAt(n*2+e,Mh);return}e.hidden=!1;let r=e.body,i=e.s*e.vis;Dh.makeRotationFromEuler(Ah.set(e.lean,e.yaw,0)),Dh.scale(jh.set(i,i,i)),Dh.setPosition(e.x,e.y+e.lift*i,e.z),this.torso.setMatrixAt(n,Fh(0,r.hip,0,0,1,r.tor,1)),this.pack.setMatrixAt(n,e.kind===`student`?Fh(0,r.hip,0,0,1,r.tor,1):Mh),this.bookMesh.setMatrixAt(n,e.book&&e.spd<.2?Fh(0,r.hip+.2*r.tor,.27,-.75):Mh),Fh(0,r.hip+.38*r.tor,0,-e.look,r.head,r.head,r.head),this.head.setMatrixAt(n,kh),e.hair.setMatrixAt(n,kh),e.other.setMatrixAt(n,Mh);let a=r.hip+.33*r.tor;this.arms.setMatrixAt(n*2,Fh(-.205,a,0,e.aL,1,r.arm,1)),this.arms.setMatrixAt(n*2+1,Fh(.205,a,0,e.aR,1,r.arm,1)),this.flagMesh.setMatrixAt(n,e.flag?kh:Mh);let o=e.umb;this.umbrella.setMatrixAt(n,o>.03?Fh(.17,a,.06,0,o,.5+.5*Math.min(1,o),o):Mh);let s=e.lamp;if(s>.03)Oh.makeRotationFromEuler(Ah.set(e.aim,e.sweep,0)),Oh.setPosition(-.205,a-.06,.3),kh.multiplyMatrices(Dh,Oh),this.torch.setMatrixAt(n,kh),Oh.makeScale(s,s*e.reach,s),Oh.setPosition(0,.27,0),this.beam.setMatrixAt(n,kh.multiply(Oh)),this.drawSpot(e,a*i,s);else for(let e of[this.torch,this.beam,this.spot])e.setMatrixAt(n,Mh);if(e.mode===`splash`&&e.spd<.2){let r=.25+(t*.83+e.ph)%1*.75;Oh.makeScale(r,1,r),Oh.setPosition(e.x,e.y+.06,e.z),this.ring.setMatrixAt(n,Oh)}else this.ring.setMatrixAt(n,Mh);this.legs.setMatrixAt(n*2,Fh(-.088,r.hip,0,e.lL,1,r.leg,1)),this.legs.setMatrixAt(n*2+1,Fh(.088,r.hip,0,e.lR,1,r.leg,1))}drawSpot(e,t,n){let r=-Math.cos(e.aim),i=this.islands[e.crew.here],a=i.group.position,o=t*Math.sin(e.aim)/Math.max(r,.01),s=e.yaw+e.sweep,c=e.x+Math.sin(s)*o-a.x,l=e.z+Math.cos(s)*o-a.z;if(r<.2||o>3.2||!i.nav.free(c,l)){this.spot.setMatrixAt(e.idx,Mh);return}let u=.62*n;Oh.makeScale(u,1,u*1.3),Oh.setPosition(a.x+c,a.y+i.nav.y(c,l)+.06,a.z+l),this.spot.setMatrixAt(e.idx,Oh)}props(e,t,n){let r=1-Math.exp(-n*4);e.pud+=((e.on&&e.act===`puddle`?1:0)-e.pud)*r,e.fire+=((e.on&&e.act===`camp`?1:0)-e.fire)*r;let i=this.islands[e.at.id].group.position,a=i.x+e.at.x,o=i.z+e.at.z,s=i.y+this.islands[e.at.id].nav.y(e.at.x,e.at.z);e.pud>.02?(Oh.makeScale(1.75*e.pud,1,1.45*e.pud),Oh.setPosition(a,s+.04,o),this.puddle.setMatrixAt(e.id,Oh)):this.puddle.setMatrixAt(e.id,Mh);let c=e.id*3;if(e.fire>.02){Oh.makeScale(e.fire,e.fire,e.fire),Oh.setPosition(a,s+.04,o),this.logs.setMatrixAt(e.id,Oh);let n=e.fire*(1+Math.sin(t*13+e.id)*.13);Oh.makeScale(n,n*(1+Math.sin(t*17+e.id)*.1),n),Oh.setPosition(a,s+.12,o),this.flame.setMatrixAt(e.id,Oh),this.glowAt[c]=a,this.glowAt[c+1]=s+.45,this.glowAt[c+2]=o}else this.logs.setMatrixAt(e.id,Mh),this.flame.setMatrixAt(e.id,Mh),this.glowAt[c+1]=Th}react(e){let t=(e.rain||0)>Ch,n=e.night>wh;if(t!==this.wet||n!==this.dark){this.wet=t,this.dark=n,this.pace=t?1.3:n?.85:1;for(let e of this.crews)e.state===`play`&&(e.timer=Math.min(e.timer,this.r()*1.8))}}update(e,t,n,r){this.ids.forEach((e,t)=>{this.bobs[t]=r[e].group.position.y-r[e].base}),this.env=n,this.react(n);let i={all:1,few:.45,none:.3}[n.kidsVisible]??1;t&&this.queue.length&&!this.storm&&this.depart(this.queue.shift());for(let n of this.crews)n.on=n.rank<i||n===this.followed,t&&(this.tick(n,e,t),this.props(n,e,t));let a=1-Math.exp(-t*3.2);for(let n of this.list)this.move(n,t),t&&this.pose(n,e,t),n.vis+=((n.crew.on&&!n.inside?1:0)-n.vis)*a,this.draw(n,e);for(let e of[this.torso,this.head,this.hairA,this.hairB,this.arms,this.legs,this.pack,this.bookMesh,this.flagMesh,this.ballMesh,this.umbrella,this.torch,this.beam,this.spot,this.logs,this.flame,this.puddle,this.ring])e.instanceMatrix.needsUpdate=!0;let o=this.glow.material;t&&(o.opacity+=((this.dark?.5:0)-o.opacity)*(1-Math.exp(-t*2))),this.glow.visible=o.opacity>.01,this.beam.visible=this.spot.visible=this.torch.visible=this.dark||this.list.some(e=>e.lamp>.03),this.glow.geometry.attributes.position.needsUpdate=!0}near(e,t,n){return this.crews.some(r=>r.on&&r.state===`play`&&r.act===e&&Math.hypot(r.members[0].x-t.x,r.members[0].y-t.y,r.members[0].z-t.z)<n)}pickAt(e,t,n,r){let i=null,a=1/0,o=r/(2*Math.tan(n.fov*Math.PI/360));for(let s of this.list){if(s.vis<.5)continue;let c=jh.set(s.x,s.y+.6*s.s,s.z),l=c.distanceTo(n.position),u=1.15*s.s*o/l;if(u<16||(c.project(n),c.z>1))continue;let d=Math.hypot((c.x-e)*n.aspect*r/2,(c.y-t)*r/2);d<Math.max(20,u*.7)&&d<a&&(a=d,i=s)}return i}headOf(e,t){return t.set(e.x,e.y+e.lift*e.s+1.32*e.s*(e.kind===`teacher`?1.18:1),e.z)}tipOf(e){let t=[...uh.tips,...uh.shelter[e.kind]].filter(t=>t!==e.last);return e.last=this.pick(t),e.last}indoor(){let e=new Map;for(let t of this.crews){if(t.state!==`inside`||!t.door||!t.on)continue;let n=`${t.here}:${t.door.x.toFixed(1)}:${t.door.z.toFixed(1)}`,r=e.get(n);r||e.set(n,r={key:n,id:t.here,door:t.door,n:0,teacher:!1}),r.n+=t.members.length,t.teacher&&(r.teacher=!0)}return[...e.values()]}indoorLine(e){e.turn=(e.turn||0)+1;let t=e.teacher&&e.turn%2?`teacher`:`student`,n=uh.indoor[t].filter(t=>t!==e.last);return e.last=this.pick(n),e.last}greet(e,t){e.greet=1.6,e.greetYaw=Math.atan2(t.position.x-e.x,t.position.z-e.z)}sky(){let e=this.env||{};return this.storm?`storm`:this.wet?`rain`:this.dark?`night`:e.dusk?`dusk`:e.cloud>=.6?`cloudy`:`day`}lineOf(e){let t=e.crew,n=(e.talks=(e.talks||0)+1)%3,r=t=>{let n=t?.length>1?t.filter(t=>t!==e.last):t;return n?.length?(e.last=this.pick(n),e.last):null};if(t.state===`shelter`)return r([...uh.shelter[e.kind],...uh.tips]);let i=uh.weather[this.sky()]?.[e.kind];return n===2?r(i)||this.actLine(e):n===0?r(uh.island[t.here])||r(i):this.actLine(e,r)||r(i)}actLine(e,t=e=>this.pick(e)){let n=e.crew;if(n.state===`travel`||n.state===`wait`)return t(uh.travel[e.kind]);if(n.state===`play`){let r=e.slot===0,i={lesson:r?`teach`:`listen`,rainclass:r?`rainteach`:`rainlisten`,stars:n.teacher&&r?`starteach`:`stars`}[n.act]||n.act,a=uh.act[i];if(a)return t(a)}return null}guide(){let e=this.crews.filter(e=>e.on&&e.teacher&&e.members.length>1&&e!==this.followed),t=e.filter(e=>e.state===`travel`);return this.pick(t.length?t:e.length?e:this.crews.filter(e=>e.on))}status(e){let t=Eh[e.here];return e.state===`travel`?e.here===e.to?`正在${t}逛逛`:`正從${t}走向${Eh[e.to]}`:e.state===`wait`?`在${t}準備出發`:e.state===`shelter`?`颱風來了，正趕快跑進屋裡（${t}）`:e.state===`inside`?`在屋裡躲颱風（${t}）`:`${{lesson:`老師正在講解`,read:`大家坐下來看書`,ball:`大家在傳球`,tag:`大家在玩鬼抓人`,jump:`大家開心跳起來`,wave:`正在和大家揮手`,rainclass:`老師撐著傘繼續上課`,puddle:`大家在踩水窪`,huddle:`大家擠在同一把大傘下`,catch:`正在伸手接雨滴`,stars:`大家抬頭看星星`,camp:`大家圍著營火聊天`,flash:`大家拿手電筒玩光束遊戲`,patrol:`老師拿手電筒巡視`,nightread:`打開手電筒安靜看書`}[e.act]??`正在休息`}（${t}）`}};function Rh(){let e=document.createElement(`canvas`);e.width=4,e.height=64;let t=e.getContext(`2d`),n=t.createLinearGradient(0,0,0,64);return n.addColorStop(0,`#ffffff`),n.addColorStop(.55,`#666666`),n.addColorStop(1,`#000000`),t.fillStyle=n,t.fillRect(0,0,4,64),new Ea(e)}function zh(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(32,32,1,32,32,32);return n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.28,`rgba(255,255,255,.42)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64),new Ea(e)}function Bh(e,t){for(let[n,r]of Object.entries(e))r.nav=new $m(t[n],r.terrain,r.anchors,r.walk),r.shelters=(r.doors||[]).map(e=>r.nav.nearest(e.x,e.z)).filter(e=>e>=0).map(e=>({x:r.nav.cx(e),z:r.nav.cz(e)}))}var Vh=340,Hh=[`#d9432f`,`#f2c230`,`#3d86c6`,`#5ea85a`,`#ef8fa3`,`#7a5a9c`,`#fff4d2`],Uh=6.5,Wh=1.7,Gh=1.15,Kh=1.02,qh=new qn,Jh=new H,Yh=new W;function Xh(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(32,32,2,32,32,32);return n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.3,`rgba(255,255,255,.5)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64),new Ea(e)}var Zh=class{constructor(e,t,n){this.hippos=t,this.calm=n,this.byId=Object.fromEntries(t.map(e=>[e.id,e])),this.queue=[],this.clock=0,this.next=0,this.alive=0,this.pos=new Float32Array(Vh*3),this.vel=new Float32Array(Vh*3),this.rot=new Float32Array(Vh*3),this.spin=new Float32Array(Vh*3),this.life=new Float32Array(Vh),this.size=new Float32Array(Vh),this.paper=new Qi(new ns(1,.62),new Oi({side:2}),Vh),this.paper.frustumCulled=!1,this.paper.visible=!1;for(let e=0;e<Vh;e++)this.paper.setColorAt(e,Yh.set(Hh[e%Hh.length]));e.add(this.paper);let r=Xh();this.flash=new xi(new si({map:r,color:`#ffd76a`,transparent:!0,opacity:0,blending:2,depthWrite:!1,depthTest:!1})),this.flash.visible=!1,this.flashLife=0,this.flashSize=1,e.add(this.flash),this.glintAt=new Float32Array(t.length*3);let i=new Xr;i.setAttribute(`position`,new Ir(this.glintAt,3)),this.glint=new Ca(i,new va({size:1.8,map:r,color:`#fff3b8`,transparent:!0,opacity:0,blending:2,depthWrite:!1})),this.glint.frustumCulled=!1,e.add(this.glint);let a=new ts(.17,0),o=new _s({color:`#ffc93c`,emissive:`#ff9d00`,emissiveIntensity:.7,flatShading:!0});for(let e of t)e.star=new Bi(a,o),e.star.position.y=Kh,e.star.scale.setScalar(0),e.star.scale.y=0,e.mesh.add(e.star),e.found=!1,e.hop=null}restore(e){for(let t of e){let e=this.byId[t];e&&(e.found=!0,e.star.scale.set(1,1.5,1))}}hop(e,t=1){let n=this.byId[e];if(!n||this.calm)return;let r=n.hop;n.hop={u:0,y:r?r.y:n.mesh.position.y,ry:r?r.ry:n.mesh.rotation.y,power:t}}burst(e,t,n,r){for(let i=0;i<t;i++){let t=this.next;this.next=(t+1)%Vh;let i=Math.random()*6.283,a=.45+Math.random()*.55,o=n*(.45+Math.random()*.75),s=Math.sqrt(1-a*a)*o;this.pos.set([e.x,e.y+.6,e.z],t*3),this.vel.set([Math.cos(i)*s,a*o,Math.sin(i)*s],t*3),this.rot.set([Math.random()*6,Math.random()*6,Math.random()*6],t*3),this.spin.set([4+Math.random()*8,3+Math.random()*7,2+Math.random()*5],t*3),this.life[t]=1.5+Math.random()*1,this.size[t]=r*(.7+Math.random()*.6)}this.alive=3,this.paper.visible=!0}pop(e,t,n){this.calm||(e.mesh.getWorldPosition(Jh),this.burst(Jh,n,7*t,.16*t),this.flash.position.set(Jh.x,Jh.y+.7,Jh.z),this.flashSize=5.5*t,this.flashLife=1,this.flash.visible=!0)}found(e,t){let n=this.byId[e];if(!n)return;n.found=!0,n.mesh.getWorldPosition(Jh);let r=Math.max(1,Math.min(3.5,t.position.distanceTo(Jh)/55));this.hop(e),this.pop(n,r,70)}celebrate(){this.clock=0,this.queue=[],this.calm||[0,1.1,2.2].forEach(e=>this.hippos.forEach((t,n)=>this.queue.push({at:e+n*.07,h:t})))}updateHop(e,t){let n=e.hop,r=e.mesh,i=n.power<1?1:3;n.u=Math.min(1,n.u+t/(Wh*(n.power<1?.45:1)));let a=Math.abs(Math.sin(n.u*Math.PI*i)),o=1-a;r.position.y=n.y+a*1.5*n.power*(1-n.u*.35);let s=1+o*.16*(1-n.u)-a*.08;r.scale.set(Gh*s,Gh*(1+a*.2-o*.14*(1-n.u)),Gh*s),r.rotation.y=n.ry+(1-(1-n.u)**3)*6.283*(n.power<1?0:1),n.u>=1&&(r.position.y=n.y,r.rotation.y=n.ry,r.scale.setScalar(Gh),e.hop=null)}updatePaper(e){let{pos:t,vel:n,rot:r,spin:i,life:a,size:o}=this,s=Math.exp(-1.1*e);for(let c=0;c<Vh;c++){if(a[c]<=0){a[c]>-1&&(a[c]=-2,this.paper.setMatrixAt(c,qh.matrix.makeScale(0,0,0)));continue}a[c]-=e;let l=c*3;n[l]*=s,n[l+2]*=s,n[l+1]=n[l+1]*s-Uh*e;for(let a=0;a<3;a++)t[l+a]+=n[l+a]*e,r[l+a]+=i[l+a]*e;qh.position.set(t[l],t[l+1],t[l+2]),qh.rotation.set(r[l],r[l+1],r[l+2]),qh.scale.setScalar(o[c]*Math.min(1,a[c]*2.5)),qh.updateMatrix(),this.paper.setMatrixAt(c,qh.matrix)}this.paper.instanceMatrix.needsUpdate=!0,this.alive-=e,this.alive<=0&&(this.paper.visible=!1)}update(e,t){for(this.clock+=t;this.queue.length&&this.queue[0].at<=this.clock;){let{h:e}=this.queue.shift();this.hop(e.id),this.pop(e,2.6,22)}let n=0;if(this.hippos.forEach((r,i)=>{if(r.hop&&this.updateHop(r,t),r.found){let n=r.star.scale,a=1+Math.sin(e*2.4+i)*.08;n.x+=(a-n.x)*Math.min(1,t*6),n.z=n.x,n.y=n.x*1.5,r.star.rotation.y+=t*1.8,r.star.position.y=Kh+Math.sin(e*1.9+i)*.06}else r.mesh.getWorldPosition(Jh),this.glintAt.set([Jh.x,Jh.y+.75,Jh.z],n*3),n+=1}),this.glint.geometry.setDrawRange(0,n),this.glint.geometry.attributes.position.needsUpdate=!0,this.glint.visible=n>0&&!this.calm,this.glint.material.opacity=Math.max(0,Math.sin(e*1.7))**4*.9,this.paper.visible&&this.updatePaper(t),this.flash.visible){this.flashLife-=t*2.2;let e=Math.max(0,this.flashLife);this.flash.material.opacity=e*.85,this.flash.scale.setScalar(this.flashSize*(1.3-e*.7)),e<=0&&(this.flash.visible=!1)}}},Qh=48,$h=160,eg=11,tg=.78,ng=16,rg=[`#e8452f`,`#ef8a32`,`#fff3e4`,`#e8452f`,`#f2c230`],ig=new qn,ag=new H,og=new W,sg=new bn().makeScale(0,0,0),cg=class{constructor(e,t,n){this.calm=n,this.onLand=null,this.w=0;let r=t.walk.dyn.find(e=>e.lake);this.ponds=[{group:t.course.group,x:0,z:1.6,rx:8.2,rz:5.4,y:.24,n:6,s:1.1},{group:t.walk.group,x:.8,z:-3.4,rx:7.2,rz:3.6,lake:r.obj,n:4,s:.9},{group:t.library.group,x:.4,z:4,rx:3.3,rz:2.1,y:.2,n:3,s:.8},{group:t.core.group,x:0,z:12.3,rx:2,rz:1.5,y:.2,n:2,s:.7}];let i=lp(77);this.fish=[];for(let e of this.ponds)for(let t=0;t<e.n;t++)this.fish.push({pond:e,a:t/e.n*6.283+i(),dir:i()>.3?1:-1,sp:.22+i()*.16,ph:i()*6.28,u:-1,wait:i()*4,h:1+i()*.9,dur:.85+i()*.4});let a=new hp(55);a.ball(.3,`#ffffff`,0,0,0,{sx:.5,sy:.6,sz:1.2,jitter:0,wonk:0}),a.ball(.17,`#ffe2c6`,0,.1,.1,{sx:.8,sy:.6,sz:1.2,jitter:0,wonk:0}),a.cone(.16,.3,`#d8c4b0`,0,-.14,-.46,{seg:3,sz:.2,rx:-1.57,jitter:0,wonk:0}),this.mesh=new Qi(a.build().children[0].geometry,new _s({vertexColors:!0,roughness:.5}),this.fish.length),this.mesh.frustumCulled=!1,this.mesh.castShadow=!0,this.fish.forEach((e,t)=>this.mesh.setColorAt(t,og.set(rg[t%rg.length]))),e.add(this.mesh),this.rings=new Qi(new rs(.86,1,20).rotateX(-Math.PI/2),new Oi({color:`#ffffff`,transparent:!0,blending:2,depthWrite:!1}),Qh),this.rings.frustumCulled=!1,this.ringLife=new Float32Array(Qh),this.ringSize=new Float32Array(Qh),this.ringAt=new Float32Array(144),this.ringPond=Array(Qh).fill(null),this.ringNext=0,this.ripple=0;for(let e=0;e<Qh;e++)this.rings.setMatrixAt(e,sg),this.rings.setColorAt(e,og.setScalar(0));e.add(this.rings),this.drops=new Qi(new $o(1,0),new Oi({color:`#d6efff`}),$h),this.drops.frustumCulled=!1,this.dropAt=new Float32Array(480),this.dropVel=new Float32Array(480),this.dropLife=new Float32Array($h),this.dropSize=new Float32Array($h),this.dropNext=0,this.dropLive=0;for(let e=0;e<$h;e++)this.drops.setMatrixAt(e,sg);this.drops.visible=!1,e.add(this.drops)}surface(e){return e.lake?e.lake.position.y+.12:e.y}ring(e,t,n,r){let i=this.ringNext;this.ringNext=(i+1)%Qh,this.ringLife[i]=1,this.ringSize[i]=r,this.ringPond[i]=e,this.ringAt.set([t,this.surface(e)+.03,n],i*3)}spray(e,t,n,r,i,a=.09){for(let o=0;o<r;o++){let r=this.dropNext;this.dropNext=(r+1)%$h;let o=Math.random()*6.283,s=Math.random()*i;this.dropAt.set([e,t,n],r*3),this.dropVel.set([Math.cos(o)*s,i*(.5+Math.random()*.8),Math.sin(o)*s],r*3),this.dropLife[r]=.6+Math.random()*.7,this.dropSize[r]=a*(.6+Math.random()*.8)}this.dropLive=1.4,this.drops.visible=!0}splash(e,t,n,r){let i=e.pond.group.position;this.ring(e.pond,t,n,r?1.1:.7),this.spray(i.x+t,i.y+this.surface(e.pond)+.1,i.z+n,r?12:7,r?2.6:1.8),r&&this.onLand?.(ag.set(i.x+t,i.y,i.z+n))}swim(e,t,n){let r=e.sp*(1+this.w*1.6);if(e.u>=0){if(e.u+=t/e.dur,e.a+=e.dir*r*t*2.2,e.u>=1){e.u=-1,e.wait=.8+Math.random()*3.2;let{rx:t,rz:n}=e.pond;this.splash(e,Math.cos(e.a)*t*tg,Math.sin(e.a)*n*tg,!0)}}else if(e.a+=e.dir*r*t,n&&!this.calm&&(e.wait-=t,e.wait<=0)){e.u=0;let{rx:t,rz:n}=e.pond;this.splash(e,Math.cos(e.a)*t*tg,Math.sin(e.a)*n*tg,!1)}}drawFish(e,t,n){let{pond:r}=e,i=r.group.position,a=r.x+Math.cos(e.a)*r.rx*tg,o=r.z+Math.sin(e.a)*r.rz*tg,s=-Math.sin(e.a)*r.rx*e.dir,c=Math.cos(e.a)*r.rz*e.dir,l=e.u>=0?Math.sin(e.u*Math.PI):0;ig.position.set(i.x+a,i.y+this.surface(r)+l*e.h*r.s*1.4,i.z+o),ig.rotation.order=`YXZ`,ig.rotation.set(e.u>=0?(e.u-.5)*2.2:0,Math.atan2(s,c)+Math.sin(n*7+e.ph)*(e.u>=0?.28:.14),e.u>=0?Math.sin(e.u*9)*.3:0),ig.scale.setScalar(r.s*(1+l*.15)),ig.updateMatrix(),this.mesh.setMatrixAt(t,ig.matrix)}updateRings(e,t){if(t&&!this.calm)for(this.ripple+=e*ng*this.w;this.ripple>=1;){--this.ripple;let e=this.ponds[Math.floor(Math.random()**1.4*this.ponds.length)],t=Math.random()*6.283,n=Math.sqrt(Math.random())*.92,r=e===this.ponds[0]?.6+n*.4:n;this.ring(e,e.x+Math.cos(t)*e.rx*r,e.z+Math.sin(t)*e.rz*r,.28+Math.random()*.26)}for(let t=0;t<Qh;t++){if(this.ringLife[t]<=0)continue;this.ringLife[t]-=e*1.5;let n=Math.max(0,this.ringLife[t]),r=this.ringPond[t].group.position,i=this.ringSize[t]*(1.7-n*1.3);ig.position.set(r.x+this.ringAt[t*3],r.y+this.ringAt[t*3+1],r.z+this.ringAt[t*3+2]),ig.rotation.set(0,0,0),ig.scale.set(i,1,i),ig.updateMatrix(),this.rings.setMatrixAt(t,n>0?ig.matrix:sg),this.rings.setColorAt(t,og.setScalar(n*.8))}this.rings.instanceMatrix.needsUpdate=!0,this.rings.instanceColor.needsUpdate=!0}updateDrops(e){let{dropAt:t,dropVel:n,dropLife:r,dropSize:i}=this;for(let a=0;a<$h;a++){if(r[a]<=0)continue;if(r[a]-=e,r[a]<=0){this.drops.setMatrixAt(a,sg);continue}let o=a*3;n[o+1]-=eg*e;for(let r=0;r<3;r++)t[o+r]+=n[o+r]*e;ig.position.set(t[o],t[o+1],t[o+2]),ig.rotation.set(0,0,0),ig.scale.setScalar(i[a]),ig.updateMatrix(),this.drops.setMatrixAt(a,ig.matrix)}this.drops.instanceMatrix.needsUpdate=!0,this.dropLive-=e,this.dropLive<=0&&(this.drops.visible=!1)}update(e,t,n){this.w+=(+!!n-this.w)*(1-Math.exp(-t*1.2)),this.fish.forEach((r,i)=>{this.swim(r,t,n),this.drawFish(r,i,e)}),this.mesh.instanceMatrix.needsUpdate=!0,this.updateRings(t,n),this.drops.visible&&this.updateDrops(t)}};function lg(e,t,n){let r=n.clone().sub(t.position).setY(0).normalize(),i=Math.atan2(r.z,r.x),a=_p(e.r,e.seed,i)*.96;return t.position.clone().add(new H(r.x*a,.02,r.z*a))}function ug(e,t,n){let r=new hp(404),i=[];for(let[a,o]of e){let e=lg(t[a],n[a].group,n[o].group.position),s=lg(t[o],n[o].group,n[a].group.position),c=e.distanceTo(s),l=Math.round(c/.72),u=s.clone().sub(e).normalize(),d=new H(-u.z,0,u.x),f=Math.atan2(u.x,u.z),p=Math.min(2.6,c*.075),m=t=>e.clone().lerp(s,t).add(new H(0,-Math.sin(t*Math.PI)*p,0)),h=Math.ceil(c/.6);i.push({a,b:o,pts:Array.from({length:h+1},(e,t)=>{let n=m(t/h);return[n.x,n.y+.05,n.z]})});for(let e=1;e<l;e++){let t=e/l,n=m(t),i=m(t+.01),a=Math.atan2(i.y-n.y,.01*c),o=Math.sin(t*Math.PI)*.6;r.add(q.box(),r.pick([J.wood,J.wood3,J.wood2]),{x:n.x,y:n.y,z:n.z,ry:f,rx:-a,sx:1.34,sy:.08,sz:.46,sway:o})}for(let e of[-1,1]){let t=new os(new Wa(Array.from({length:9},(t,n)=>m(n/8).addScaledVector(d,e*.68).add(new H(0,.62,0)))),22,.035,4,!1);r.raw(t,`#c9b083`,{wonk:0,ao:1});let n=Math.round(l/3);for(let t=0;t<=n;t++){let i=m(t/n).addScaledVector(d,e*.66);r.box(.07,.66,.07,J.wood2,i.x,i.y,i.z,{wonk:0})}}for(let t of[e,s])for(let e of[-1,1]){let n=t.clone().addScaledVector(d,e*.86);r.box(.22,1.3,.22,J.wood2,n.x,n.y,n.z),r.glow(.16,.2,.16,J.win,n.x,n.y+1.3,n.z)}}return{mesh:r.build(),routes:i}}function dg(e,t,n,r){let i=new hp(405),a=lg(n[e],r[e].group,r[t].group.position),o=lg(n[t],r[t].group,r[e].group.position),s=Math.round(a.distanceTo(o)/2.2),c=[[a.x,a.y,a.z]];for(let e=1;e<s;e++){let t=a.clone().lerp(o,e/s);t.y+=Math.sin(e/s*Math.PI)*.8;let n=t.x+i.rand(-.3,.3),r=t.z+i.rand(-.3,.3);c.push([n,t.y+.12,r]),i.at(n,t.y,r,i.rand(6),1,()=>{i.cyl(1,.3,`#c9bb9f`,0,-.3,0,{seg:7}),i.cone(.9,1,`#94795a`,0,-1.3,0,{seg:6,rx:Math.PI,y:-.82}),i.cyl(.92,.1,`#9dbd58`,0,0,0,{seg:7,wonk:0})})}c.push([o.x,o.y,o.z]);let l=[c[0]];for(let e=0;e+1<c.length;e++){let[t,n,r]=c[e],[i,a,o]=c[e+1];for(let e=1;e<=6;e++){let s=e/6;l.push([t+(i-t)*s,n+(a-n)*s+Math.sin(s*Math.PI)*.62,r+(o-r)*s])}}return{mesh:i.build(),route:{a:e,b:t,pts:l}}}var fg=new hs({transparent:!0,depthWrite:!1,depthTest:!1,uniforms:{uTime:tp.uTime,uA:{value:0}},vertexShader:`varying float vU; void main(){ vU = uv.x; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }`,fragmentShader:`
    uniform float uTime, uA; varying float vU;
    void main(){
      float dash = step(.5, fract(vU * 18. - uTime * .7));
      vec3 c = mix(vec3(1., .86, .42), vec3(1., .5, .3), vU);
      gl_FragColor = vec4(c, dash * uA);
    }`});function pg(e,t){let n=new Jn;return n.renderOrder=9,e.forEach(([e,r])=>{let i=t[e].group.position.clone().add(new H(0,4,0)),a=t[r].group.position.clone().add(new H(0,4,0)),o=new Bi(new os(new oo(i,i.clone().lerp(a,.5).add(new H(0,i.distanceTo(a)*.3+6,0)),a),48,.32,6,!1),fg);o.renderOrder=9,n.add(o)}),n.visible=!1,{group:n,mat:fg}}var mg=class{constructor(e){let t=1400;this.area=150;let n=new Float32Array(t*6);this.seeds=[];for(let e=0;e<t;e++){let t=(Math.random()-.5)*this.area*2,r=Math.random()*120-30,i=(Math.random()-.5)*this.area*2;n.set([t,r,i,t+.1,r-2.8,i],e*6)}let r=new Xr;r.setAttribute(`position`,new Ir(n,3)),this.mat=new hs({transparent:!0,depthWrite:!1,uniforms:{uTime:tp.uTime,uA:{value:0},uDrift:{value:0},uShear:{value:0}},vertexShader:`uniform float uTime; uniform float uDrift; uniform float uShear; void main(){ vec3 p = position; p.y = mod(p.y - uTime * 62. + 30., 120.) - 30.; p.x = mod(p.x + uTime * uDrift + 150., 300.) - 150. + position.y * uShear; gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.); }`,fragmentShader:`uniform float uA; void main(){ gl_FragColor = vec4(.82, .9, 1., .36 * uA); }`}),this.mesh=new _a(r,this.mat),this.mesh.frustumCulled=!1,this.mesh.visible=!1,e.add(this.mesh)}set(e,t=!1){this.mat.uniforms.uA.value=e,this.mat.uniforms.uDrift.value=t?70:0,this.mat.uniforms.uShear.value=t?-.9:0,this.mesh.visible=e>.02}},hg=e=>e<.5?4*e*e*e:1-(-2*e+2)**3/2,gg={core:[[2.6,6],[.6,4.6]],course:[[1.5,3.2]],walk:[[1,4]],inquiry:[[-.5,2.4]],forest:[[-2.2,3]],future:[[.9,2.6]],library:[[2.2,2.6]]},_g=class{constructor(e,t={}){this.canvas=e,this.hooks=t,this.tier=this.detectTier(),this.renderer=new Bd({canvas:e,antialias:!0,powerPreference:`high-performance`}),this.renderer.toneMapping=4,this.renderer.toneMappingExposure=1,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=2,this.dpr=Math.min(window.devicePixelRatio||1,this.tier===`low`?1.25:1.75),this.renderer.setPixelRatio(this.dpr),this.scene=new rr,this.camera=new ec(30,1,2,2400),this.controls=new Ef(this.camera,e),Object.assign(this.controls,{enableDamping:!0,dampingFactor:.07,minDistance:16,maxDistance:950,maxPolarAngle:Math.PI*.53,minPolarAngle:.02,rotateSpeed:.55,zoomSpeed:.8,panSpeed:.8}),this.controls.screenSpacePanning=!0,this.controls.touches={ONE:b.ROTATE,TWO:b.DOLLY_PAN},this.sky=new Em(this.scene),this.sky.setShadowSize(this.tier===`high`?2048:1024),this.clouds=new Am(this.scene,this.tier===`low`?.55:1),this.rain=new mg(this.scene),this.storm=new Lm(this.scene,matchMedia(`(prefers-reduced-motion: reduce)`).matches),this.exposure=1,this.env={night:0,wind:8,rain:0,kidsVisible:`all`},this.timeMode=`live`,this.weather={cloud:.15,rain:0,wind:8,thunder:!1,storm:!1},this.sun={sunrise:6.1,sunset:17.4},this.defs=Object.fromEntries(ih.map(e=>[e.id,e])),this.islands={},this.setupFrame=0,this.pointer=new V,this.ray=new Cc,this.flight=null,this.paused=!1,this.tilt=this.tier===`high`,this.target=new H,this.hovered=null,this.frames=[],this.lastT=performance.now(),this.time=0,this.reservoirLevel=.9,this.inset={x:0,y:0},this.insetTarget={x:0,y:0}}detectTier(){let e=/Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&window.innerWidth<1e3,t=navigator.deviceMemory||8,n=navigator.hardwareConcurrency||8;return t<=3||n<=3?`low`:e?`mid`:`high`}async build(e){let t=async(t,n,r)=>{e(n,t),await new Promise(e=>setTimeout(e,0)),r()},n=[`堆起古老石牆…`,`垂下樹根與藤蔓…`,`攤開那本大書…`,`放滿水庫的水…`,`升起訊號塔…`,`請大河馬就位…`,`點亮燈塔…`,`轉動工坊齒輪…`,`掛上星星…`,`搭起森林小屋…`,`繫好鯉魚飛艇…`,`迎接第一道曙光…`],r=window.innerWidth/window.innerHeight<.8,i=e=>r?{x:ah[e][0],z:ah[e][1]}:this.defs[e].pos,a=Object.fromEntries(ih.map(e=>[e.id,[]]));for(let[e,t]of[...oh,...sh])for(let[n,r]of[[e,t],[t,e]]){let e=Math.atan2(i(r).z-i(n).z,i(r).x-i(n).x);a[n].push([Math.cos(e)*this.defs[n].r*.92,Math.sin(e)*this.defs[n].r*.92])}for(let e=0;e<ih.length;e++){let r=ih[e];await t(n[e],(e+1)/(ih.length+2),()=>{let t=bm(r,a[r.id]);t.group.position.set(i(r.id).x,r.pos.y,i(r.id).z),this.scene.add(t.group),t.base=r.pos.y,t.phase=e*1.3,this.islands[r.id]=t;for(let[e,n]of gg[r.id]||[]){let i=Math.hypot(r.r)*.96,a=wp(Math.cos(e)*i,.1,Math.sin(e)*i,e,n,54+r.pos.y);t.group.add(a)}})}await t(`架起吊橋…`,.93,()=>{let e=ug(oh,this.defs,this.islands);this.scene.add(e.mesh),this.routes=e.routes;for(let[e,t]of sh){let n=dg(e,t,this.defs,this.islands);this.scene.add(n.mesh),this.routes.push(n.route)}this.arcs=pg(ch.map(e=>[e.a,e.b]),this.islands),this.scene.add(this.arcs.group)}),await t(`放出鱻鯉雲魚…`,.97,()=>{let e=window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;this.life=new Gm(this.scene,this.islands,e),this.rainFish=new cg(this.scene,this.islands,e),this.life.spray=(...e)=>this.rainFish.spray(...e),this.rainFish.onLand=e=>{e.distanceTo(this.camera.position)<60&&this.hooks.onSplash?.()},this.addHighlights(),this.setupComposer()}),await t(`請老師和同學出發…`,.99,()=>{Bh(this.islands,this.defs);let e=this.tier===`low`;this.people=new Lh(this.scene,this.islands,this.routes,{classes:e?3:6,groups:e?7:14,solos:e?3:5})}),this.resize(),this.setView(`home`,!0),this.bind(),e(1,`完成！`)}addHighlights(){for(let e of ih){let t=new Bi(new rs(e.r*1.03,e.r*1.14,48).rotateX(-Math.PI/2),new Oi({color:e.color,transparent:!0,opacity:0,depthWrite:!1,side:2}));t.position.y=-.2,t.renderOrder=3,this.islands[e.id].group.add(t),this.islands[e.id].ring=t;let n=new Bi(new Ma(e.r,e.r*.5,14+(e.id===`core`?8:0),12),new Oi({visible:!1}));n.position.y=-3,n.userData.island=e.id,this.islands[e.id].group.add(n),this.islands[e.id].collider=n}this.colliders=Object.values(this.islands).map(e=>e.collider),this.hippoMeshes=this.life.hippos.map(e=>e.mesh),this.hippoFx=new Zh(this.scene,this.life.hippos,window.matchMedia(`(prefers-reduced-motion: reduce)`).matches)}setupComposer(){let e=new _n(1,1,{type:ae,samples:4});this.composer=new qf(this.renderer,e),this.composer.addPass(new Jf(this.scene,this.camera)),this.hTilt=new Wf(Zf),this.vTilt=new Wf(Qf),this.hTilt.uniforms.r.value=.5,this.vTilt.uniforms.r.value=.5,this.composer.addPass(this.hTilt),this.composer.addPass(this.vTilt),this.composer.addPass(new Xf)}resize(){let e=window.innerWidth,t=window.innerHeight;if(!e||!t){this.width=this.width||1280,this.height=this.height||800,this.camera.aspect=this.width/this.height,this.camera.updateProjectionMatrix(),this.sizePending=!0;return}let n=this.width<this.height*.8,r=!this.width;this.width=e,this.height=t,this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t,!1),this.renderer.setPixelRatio(this.dpr),this.sky.starMat.uniforms.uPx.value=this.dpr,this.composer&&(this.composer.setPixelRatio(this.dpr),this.composer.setSize(e,t),this.hTilt.uniforms.h.value=2.2/(e*this.dpr),this.vTilt.uniforms.v.value=2.2/(t*this.dpr)),this.insetDirty=!0;let i=e<t*.8;!r&&this.viewName&&!this.focused&&(this.sizePending||i!==n)&&this.setView(this.viewName,!0),this.sizePending=!1}overviewDistance(){let e=this.width/this.height;return e<.8?205/e:208*Math.max(1,1.5/e)**.98}setView(e,t=!1){this.viewName=e;let n=this.overviewDistance(),r=this.width/this.height<.8,i={home:r?{pos:new H(0,n*.86,n*.5),tgt:new H(0,2,4)}:{pos:new H(0,n*.56,n*.84),tgt:new H(0,4,2)},top:r?{pos:new H(.5,n*1.02,0),tgt:new H(0,0,0)}:{pos:new H(0,n*1.18,.5),tgt:new H(0,0,0)}},a=i[e]||i.home;this.controls.minDistance=16,t?(this.camera.position.copy(a.pos),this.controls.target.copy(a.tgt),this.controls.update()):this.flyTo(a.pos,a.tgt,1.5)}flyTo(e,t,n=1.5,r){this.flight={t:0,dur:n,fromPos:this.camera.position.clone(),fromTgt:this.controls.target.clone(),pos:e,tgt:t,done:r},this.controls.enabled=!1}wholeDistance(e){let t=Math.atan(Math.tan(Yt.degToRad(this.camera.fov/2))*this.camera.aspect);return e*1.2/Math.sin(t)}focusIsland(e,t=!1){let n=this.defs[e],r=this.islands[e].group.position,i=n.zoom*(this.width<this.height?1.45:1)*(n.id===`core`?1.06:1),a=t?Math.max(i,this.wholeDistance(n.r)):i,o=new H(r.x,0,r.z),s=o.lengthSq()<1?0:Math.atan2(o.x,o.z)*.16,c=new H(Math.sin(s),.56,Math.cos(s)).normalize(),l=e===`core`?6:2,u=new H(r.x,r.y+l,r.z),d=u.clone().addScaledVector(c,a);this.focused=e,this.flyTo(d,u,1.6)}setInset(e,t){this.insetTarget={x:e,y:t}}clearFocus(){this.focused=null}screenOf(e){let t=e.getWorldPosition(new H).project(this.camera);return{x:(t.x+1)/2*this.width,y:(1-t.y)/2*this.height}}setHoverRing(e){for(let[t,n]of Object.entries(this.islands))n.ringTarget=t===e?.78:0}bind(){let e=this.canvas,t=null,n=t=>{let n=e.getBoundingClientRect();this.pointer.set((t.clientX-n.left)/n.width*2-1,-((t.clientY-n.top)/n.height)*2+1)};e.addEventListener(`pointerdown`,e=>{t=[e.clientX,e.clientY,e.timeStamp],this.hooks.onInteract?.()}),e.addEventListener(`pointermove`,e=>{n(e),e.pointerType===`mouse`&&!this.flight&&(this.hoverDirty=!0)}),e.addEventListener(`pointerleave`,()=>{this.setHover(null)}),e.addEventListener(`pointerup`,e=>{if(!t)return;let r=Math.hypot(e.clientX-t[0],e.clientY-t[1]),i=e.timeStamp-t[2]<500;t=null,r>7||!i||(n(e),this.pick())}),window.addEventListener(`resize`,()=>this.resize()),window.addEventListener(`keydown`,e=>{if(e.target.matches(`input,textarea,select`))return;let t={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1]}[e.key];if(!t||this.flight||this.hooks.onArrow?.(e.key))return;let n=new H;this.camera.getWorldDirection(n).setY(0).normalize();let r=new H(-n.z,0,n.x).multiplyScalar(t[0]*7).addScaledVector(n,-t[1]*7);this.camera.position.add(r),this.controls.target.add(r)})}rayHit(e){return this.ray.setFromCamera(this.pointer,this.camera),this.ray.intersectObjects(e,!0)[0]}personAt(){return this.env.storm?null:this.people.pickAt(this.pointer.x,this.pointer.y,this.camera,this.height)}setHover(e){e!==this.hovered&&(this.hovered=e,this.canvas.style.cursor=e?`pointer`:``,this.setHoverRing(e),this.hooks.onHover?.(e))}pick(){let e=this.rayHit(this.hippoMeshes);if(e){let t=e.object;for(;t&&!t.userData.hippo;)t=t.parent;if(t){this.hooks.onHippo?.(t.userData.hippo,t);return}}let t=this.personAt();if(t){this.hooks.onPerson?.(t);return}let n=this.rayHit(this.colliders);n&&this.hooks.onPick?.(n.object.userData.island)}follow(e){this.people.followed=e,this.focused=null,this.viewName=`home`,this.controls.minDistance=16;let t=e.members[0],n=new H(t.x,t.y+1,t.z),r=this.camera.position.clone().sub(this.controls.target).setY(0).normalize();r.lengthSq()<.5&&r.set(0,0,1),r.y=.62,r.normalize(),this.flyTo(n.clone().addScaledVector(r,this.width<this.height?40:30),n,1.6)}unfollow(){this.people.followed=null}setTimeMode(e){this.timeMode=e,this.applySky()}setWeather(e){Object.assign(this.weather,e),this.applySky()}setSun(e){this.sun=e,this.applySky()}setReservoir(e){this.reservoirLevel=e;let t=this.islands.walk?.dyn.find(e=>e.lake);t&&(t.obj.position.y=.3+1.02*e)}setQuest(e,t=`stuck`){let n=this.quest;if(n&&n.id!==e&&this.islands[n.id]?.dyn.forEach(e=>e.quest?.(null)),this.quest=e?{id:e,mode:t,at:this.now||0}:null,!e)return;let r=this.islands[e];if(r.dyn.forEach(e=>e.quest?.(t)),t===`done`){let e=r.group.position;this.hippoFx.burst({x:e.x,y:e.y+4,z:e.z},60,7,.32)}}party(e=9){this.partyUntil=(this.now||0)+e,this.partyNext=this.now||0;for(let e in this.islands)this.islands[e].dyn.forEach(e=>e.quest?.(`done`));let t=this.camera.position;for(let e of this.people.list)e.vis>.5&&(e.greet=1.6,e.greetYaw=Math.atan2(t.x-e.x,t.z-e.z));this.hippoFx.celebrate()}partyTick(e){if(e>=this.partyUntil){this.partyUntil=0;for(let e in this.islands)this.islands[e].dyn.forEach(e=>e.quest?.(null));return}if(e<this.partyNext||this.hippoFx.calm)return;this.partyNext=e+.26;let t=Object.keys(this.islands),n=this.islands[t[Math.floor(Math.random()*t.length)]].group.position;if(this.hippoFx.burst({x:n.x+(Math.random()-.5)*9,y:n.y+7+Math.random()*7,z:n.z+(Math.random()-.5)*9},34,8.5,.36),Math.random()<.18){let e=this.camera.position;for(let t of this.people.list)t.vis>.5&&!(t.greet>0)&&(t.greet=1.6,t.greetYaw=Math.atan2(e.x-t.x,e.z-t.z))}}setPaused(e){this.paused=e}setTilt(e){this.tilt=e}showArcs(e){this.arcs&&(this.arcs.group.visible=e),this.arcTarget=+!!e}applySky(){let e=new Date(new Date().toLocaleString(`en-US`,{timeZone:`Asia/Taipei`})),t=e.getHours()+e.getMinutes()/60,{sunrise:n,sunset:r}=this.sun,i={live:t,day:11,dusk:r-.1,night:22}[this.timeMode]??t,a=!!this.weather.storm;this.sky.update({hour:i,sunrise:n,sunset:r,cloud:a?1:this.weather.cloud,storm:a}),this.env.night=this.sky.env.night,this.env.dusk=i>=r-1&&i<=r+.5,this.exposure=1+this.env.night*.32,cp.uniforms.uTint.value.copy(this.sky.cloudCol),this.env.wind=this.weather.wind,this.env.storm=a,this.env.rain=a?1:this.weather.rain,this.env.cloud=a?1:this.weather.cloud,this.env.thunder=a||this.weather.thunder,this.rain.set(a?1.5:this.weather.rain,a),tp.uWind.value=a?3.8:.6+Math.min(this.weather.wind,30)/18,this.people?.setStorm(a);let o=![0,6].includes(e.getDay()),s=i>=7.5&&i<=16.5,c=this.timeMode===`day`;this.env.kidsVisible=this.env.night>.5?`none`:o&&s||c?`all`:`few`;let l=this.weather.rain>.15;this.env.schoolState=this.env.night>.5?l?`夜雨中，還有幾個人撐著傘拿手電筒回家`:`校園休息中，還有幾個人拿手電筒看星星`:l?`下雨了，孩子們踩水窪，魚兒跳出水面`:this.env.kidsVisible===`all`?`孩子們正在校園裡`:`假日親子共讀時光`,a&&(this.env.schoolState=`風強雨大，大家都躲進屋裡，只剩風雨和燈塔還在外面`),this.hooks.onEnv?.(this.env,i)}step(e){let t=(e-this.lastT)/1e3,n=Math.min(t,.1);this.lastT=e,this.paused||(this.time+=n);let r=this.time;if(tp.uTime.value=r,this.flight){let e=this.flight;e.t=Math.min(1,e.t+Math.min(t,.4)/e.dur);let n=hg(e.t);this.camera.position.lerpVectors(e.fromPos,e.pos,n),this.camera.position.y+=Math.sin(n*Math.PI)*e.fromPos.distanceTo(e.pos)*.06,this.controls.target.lerpVectors(e.fromTgt,e.tgt,n),this.camera.lookAt(this.controls.target),e.t>=1&&(this.flight=null,this.controls.enabled=!0,e.done?.())}Number.isFinite(this.camera.position.x+this.camera.position.y+this.camera.position.z)||(this.flight=null,this.controls.enabled=!0,this.setView(`home`,!0)),this.controls.update();let i=this.inset,a=this.insetTarget,o=Math.min(1,n*4.5);(Math.abs(i.x-a.x)+Math.abs(i.y-a.y)>.4||this.insetDirty)&&(i.x+=(a.x-i.x)*o,i.y+=(a.y-i.y)*o,this.insetDirty=!1,this.camera.setViewOffset(this.width,this.height,i.x,i.y,this.width,this.height)),this.storm.update(r,this.paused?0:n,this.env.storm);let s=this.storm.level;this.renderer.toneMappingExposure=this.exposure*(1-s*.1)+this.storm.flash,this.now=r,this.partyUntil&&this.partyTick(r);for(let e in this.islands){let t=this.islands[e];if(t.group.position.y=t.base+Math.sin(r*(.42+s*.9)+t.phase)*(.16+s*.5),t.rocks.position.y=Math.sin(r*.6+t.phase)*.36,t.rocks.rotation.y=r*.012,t.ring){let e=t.ring.material;e.opacity+=((t.ringTarget||0)-e.opacity)*Math.min(1,n*9),t.ring.visible=e.opacity>.01}let i=this.quest?.id===e?this.quest:null,a=i?.mode===`stuck`?0:i?.mode===`done`&&r-i.at<2.5||r<this.partyUntil?3.2:1;t.clock=(t.clock??r)+(this.paused?0:n)*a;for(let e of t.dyn)e.update?.(t.clock,this.env)}let c=this.paused?0:n,l=this.env.rain>.15;this.life.update(r,c,l),this.rainFish.update(r,c,l),this.hippoFx.update(r,n),this.people.update(r,this.paused?0:n,this.env,this.islands),this.earClock=(this.earClock||0)-n,this.earClock<=0&&(this.earClock=1.3,this.people.near(`puddle`,this.camera.position,34)&&this.hooks.onSplash?.());let u=this.people.followed;if(u&&!this.flight){let e=u.members[0],t=1-Math.exp(-n*2.6),r=(e.x-this.controls.target.x)*t,i=(e.y+1-this.controls.target.y)*t,a=(e.z-this.controls.target.z)*t;this.controls.target.x+=r,this.controls.target.y+=i,this.controls.target.z+=a,this.camera.position.x+=r,this.camera.position.y+=i,this.camera.position.z+=a}if(this.clouds.update((this.paused?0:n)*(1+s*4),this.sky),this.arcs&&(this.arcs.mat.uniforms.uA.value+=((this.arcTarget||0)-this.arcs.mat.uniforms.uA.value)*Math.min(1,n*5)),this.hoverDirty){this.hoverDirty=!1;let e=this.rayHit(this.colliders);this.setHover(e?e.object.userData.island:null),this.personAt()&&(this.canvas.style.cursor=`pointer`)}this.renderer.shadowMap.autoUpdate=this.setupFrame++%(this.tier===`high`?2:4)==0,this.tilt&&this.composer?this.composer.render(n):this.renderer.render(this.scene,this.camera),this.hooks.onFrame?.(this.camera,r),this.watchPerformance(n)}watchPerformance(e){if(this.frames.push(e),this.frames.length<90)return;let t=this.frames.reduce((e,t)=>e+t,0)/this.frames.length;this.frames.length=0;let n=1/t;this.fps=n,document.hidden||n<28&&(this.tilt?(this.tilt=!1,this.hooks.onQuality?.(`tilt-off`)):this.dpr>1?(this.dpr=Math.max(1,this.dpr-.3),this.resize()):this.tier!==`low`&&(this.tier=`low`,this.sky.setShadowSize(1024)))}start(){this.applySky();let e=t=>{this.raf=requestAnimationFrame(e),this.step(t)};this.raf=requestAnimationFrame(e),setInterval(()=>this.applySky(),6e4)}},vg=window.matchMedia?.(`(pointer: coarse)`).matches,yg=vg?.62:.34,bg=vg?.42:.24,xg=vg?1:.8,Sg=1.1,Cg=`./audio/`,wg=`${Cg}silence.mp3`,Tg={day:{bgm:`bgm-day`,amb:`amb-birds`},cloudy:{bgm:`bgm-cloudy`,amb:null},dusk:{bgm:`bgm-dusk`,amb:`amb-night`},storm:{bgm:`bgm-rain`,amb:`amb-storm`},rain:{bgm:`bgm-rain`,amb:`amb-rain`},night:{bgm:`bgm-night`,amb:`amb-night`}},Eg={tap:.3,pop:.5,whoosh:.35,page:.5,stamp:.6,found:.7,horn:.5,boing:.6,cheer:.5,chime:.6,correct:.55,splash:.3,thunder:.55},Dg=18e3,Og=26e3,kg=new class{constructor(){this.want=!0,this.sfxOn=!0,this.started=!1,this.mood=`day`,this.thunder=!1,this.thunderTimer=0,this.buffers={},this.onChange=null,this.onStart=null,this.onSfx=null}deck(){let e=new Audio;e.loop=!0,e.preload=`none`;let t=this.ctx.createGain();return t.gain.value=0,this.ctx.createMediaElementSource(e).connect(t).connect(this.ctx.destination),{el:e,gain:t,file:null,stop:0}}begin(){if(this.started)return;let e=window.AudioContext||window.webkitAudioContext;if(e){this.started=!0,navigator.audioSession&&(navigator.audioSession.type=`playback`),this.ctx=new e,this.bgm={decks:[this.deck(),this.deck()],on:0},this.amb={decks:[this.deck(),this.deck()],on:0},this.ctx.resume();for(let e of[this.bgm,this.amb])for(let t of e.decks)t.el.addEventListener(`playing`,()=>{t.file&&e===this.bgm&&this.announce()}),t.el.src=wg,t.el.play().then(()=>{t.file||t.el.pause()}).catch(()=>{});this.apply(),this.loadSfx()}}announce(){this.announced||(this.announced=!0,this.onStart?.())}async loadSfx(){this.sfxOn&&!this.loading&&(this.loading=!0,await Promise.all(Object.keys(Eg).map(async e=>{try{let t=await fetch(`${Cg}sfx/${e}.mp3`);this.buffers[e]=await this.ctx.decodeAudioData(await t.arrayBuffer())}catch{}})))}get blocked(){return this.ctx.state!==`running`||this.want&&this.bgm.decks[this.bgm.on].el.paused}wake(){(this.want||this.sfxOn)&&(this.started?this.blocked&&(this.ctx.resume(),this.apply()):this.begin())}fade(e,t){let n=this.ctx.currentTime;clearTimeout(e.stop),e.gain.gain.cancelScheduledValues(n),e.gain.gain.setTargetAtTime(t,n,Sg),t?e.el.play().catch(()=>{}):e.stop=setTimeout(()=>e.el.pause(),Sg*4e3)}route(e,t,n){let r=e.decks[e.on],i=t?`${Cg}${t}.mp3`:null,a=this.want?n:0;if(r.file===i){i&&this.fade(r,a);return}if(r.file&&this.fade(r,0),!i){r.file=null;return}e.on=1-e.on;let o=e.decks[e.on];clearTimeout(o.stop),o.file=i,o.el.src=i,this.fade(o,a)}apply(){if(!this.started)return;let e=Tg[this.mood];this.route(this.bgm,e.bgm,yg),this.route(this.amb,e.amb,bg)}setMood({storm:e,night:t,dusk:n,rain:r,cloud:i,thunder:a}){let o=e?`storm`:r?`rain`:n?`dusk`:t?`night`:i?`cloudy`:`day`;this.thunder=!!a,this.thunder&&!this.thunderTimer&&this.roll(),o!==this.mood&&(this.mood=o,this.apply())}roll(){this.thunderTimer=setTimeout(()=>{this.thunderTimer=0,this.thunder&&(this.want&&!document.hidden&&this.sfx(`thunder`),this.roll())},Dg+Math.random()*Og)}sfx(e){if(!this.started||!this.sfxOn||!this.buffers[e]||this.ctx.state!==`running`)return;let t=this.ctx.createBufferSource(),n=this.ctx.createGain();t.buffer=this.buffers[e],n.gain.value=Eg[e]*xg,t.connect(n).connect(this.ctx.destination),t.start()}toggle(){return!this.started||this.want&&this.blocked?(this.want=!0,this.wake()):(this.want=!this.want,this.apply()),this.want&&this.ctx?.resume(),this.onChange?.(this.want),this.want}toggleSfx(){this.sfxOn=!this.sfxOn,this.sfxOn&&(this.started?(this.ctx.resume(),this.loadSfx(),this.sfx(`tap`)):this.begin()),this.onSfx?.(this.sfxOn)}init({want:e,sfx:t,onChange:n,onStart:r,onSfx:i}){this.want=e,this.sfxOn=t,this.onChange=n,this.onStart=r,this.onSfx=i;let a=e=>{e.target.closest?.(`#musicBtn, #sfxBtn`)||this.wake()};for(let e of[`pointerup`,`touchend`,`click`,`keydown`])window.addEventListener(e,a,{capture:!0,passive:!0});document.addEventListener(`visibilitychange`,()=>{this.ctx&&(document.hidden?this.ctx.suspend():(this.want||this.sfxOn)&&(this.ctx.resume(),this.apply()))})}},Ag=`dev`,jg=18e4,Mg=3e4,Ng=`smes-island-update-skip`,Pg={get(){try{return sessionStorage.getItem(Ng)}catch{return null}},set(e){try{sessionStorage.setItem(Ng,e)}catch{}}},Fg=e=>String(e).replace(/-[0-9a-f]+$/i,``);function Ig(e,t){if(e===t)return!1;let n=Fg(e),r=Fg(t);return n===r||n>r}function Lg(e){return new Promise(t=>{try{let n=new MessageChannel,r=setTimeout(()=>t(null),1500);n.port1.onmessage=e=>{clearTimeout(r),t(e.data||null)},e.postMessage({type:`GET_VERSION`},[n.port2])}catch{t(null)}})}var Rg=null,zg=null,Bg=!1;function Vg(e){document.querySelector(`#updateCard`)?.remove();let t=document.createElement(`aside`);t.id=`updateCard`,t.className=`update-card card`,t.setAttribute(`role`,`alert`),t.innerHTML=`<img src="./brand/fish-mascot.webp" alt="" width="46" height="46" /><div class="update-text"><strong>島上有新版本了</strong><p></p></div><div class="update-ctl"><button class="cta koi" data-update="go">立刻更新</button><button data-update="later">稍後再說</button></div>`;let n=e?.notes&&e.version!==`1.0.0`;t.querySelector(`p`).textContent=n?e.notes:`更新後就能看到最新內容，只要幾秒鐘。`,t.addEventListener(`click`,e=>{let n=e.target.closest(`[data-update]`)?.dataset.update;if(n===`later`&&(Pg.set(zg),t.remove()),n===`go`){let t=e.target.closest(`button`);t.disabled=!0,t.textContent=`更新中…`,Hg()}}),document.body.append(t)}function Hg(){let e=Rg?.waiting;e?(Bg=!0,e.postMessage({type:`SKIP_WAITING`}),setTimeout(()=>location.reload(),8e3)):location.reload()}async function Ug(e){let t=await Lg(e);if(t&&!Ig(t.build,Ag))return;let n=t?.build||`unknown`;n!==zg&&n!==Pg.get()&&(zg=n,Vg(t))}function Wg(e){e?.addEventListener(`statechange`,()=>{e.state===`installed`&&navigator.serviceWorker.controller&&Ug(e)})}function Gg(){let e=0,t=()=>{document.hidden||Date.now()-e<Mg||(e=Date.now(),Rg.update().catch(()=>{}))};setTimeout(t,5e3),setInterval(t,jg),document.addEventListener(`visibilitychange`,t),window.addEventListener(`focus`,t),window.addEventListener(`online`,t),window.addEventListener(`pageshow`,e=>{e.persisted&&t()})}async function Kg(){if(!(`serviceWorker`in navigator))return;let e=navigator.serviceWorker,t=!!e.controller;try{Rg=await e.register(`./sw.js`,{updateViaCache:`none`})}catch(e){console.warn(`Service Worker 註冊失敗`,e.message);return}e.addEventListener(`controllerchange`,()=>{Bg?(Bg=!1,location.reload()):(t&&e.controller&&Ug(e.controller),t=!0)}),Rg.waiting&&e.controller&&Ug(Rg.waiting),Wg(Rg.installing),Rg.addEventListener(`updatefound`,()=>Wg(Rg.installing)),Gg()}var qg=74,Jg=.6,Yg=.91,Xg=220,Zg=8,Qg=48,$g=()=>({peek:qg,half:innerHeight*Jg,full:innerHeight*Yg}),e_=new class{constructor(){this.state=`half`,this.onChange=null}get height(){return $g()[this.state]}paint(){this.panel.classList.toggle(`peek`,this.state===`peek`),this.panel.classList.toggle(`tall`,this.state===`full`),this.handle.setAttribute(`aria-expanded`,this.state!==`peek`)}set(e){let t=this.state;this.state=e,this.paint(),e!==t&&this.onChange?.(e,t)}reset(){this.state=`half`,this.paint()}toggle(){this.set(this.state===`half`?`peek`:`half`)}snap(e,t,n){let r=e-t*Xg,i=Object.entries($g()),a=()=>[...i].sort((e,t)=>Math.abs(e[1]-r)-Math.abs(t[1]-r))[0],o=r-n,[s]=Math.abs(o)<Qg?a():o>0?i.find(([,t])=>t>=e):i.reverse().find(([,t])=>t<=e);this.panel.style.height=``,this.panel.classList.remove(`dragging`),this.set(s)}init(e,t,n){this.panel=e,this.handle=e.querySelector(`.handle`),this.onChange=n;let r=e.querySelector(`.panel-body`),i=null;e.addEventListener(`touchstart`,n=>{if(!t()||n.touches.length>1){i=null;return}let r=n.touches[0];i={x:r.clientX,y:r.clientY,h:e.offsetHeight,inBody:!!n.target.closest(`.panel-body`),drag:!1,lastY:r.clientY,lastT:n.timeStamp,speed:0}},{passive:!0}),e.addEventListener(`touchmove`,t=>{if(!i)return;if(t.touches.length>1){i=null;return}let n=t.touches[0];if(!i.drag){let t=n.clientX-i.x,a=n.clientY-i.y;if(i.inBody){if(!a)return;if(a<0||r.scrollTop>0||Math.abs(t)>Math.abs(a)){i=null;return}}else{if(Math.hypot(t,a)<Zg)return;if(Math.abs(t)>Math.abs(a)){i=null;return}}i.drag=!0,i.y=n.clientY,e.classList.add(`dragging`)}t.cancelable&&t.preventDefault();let a=t.timeStamp-i.lastT;a>0&&(i.speed=(n.clientY-i.lastY)/a),i.lastY=n.clientY,i.lastT=t.timeStamp;let{peek:o,full:s}=$g();e.style.height=`${Math.max(o,Math.min(s,i.h-(n.clientY-i.y)))}px`},{passive:!1});let a=t=>{if(!i)return;let{drag:n,speed:r,lastT:a,h:o}=i;i=null,n&&this.snap(e.offsetHeight,t.timeStamp-a>120?0:r,o)};e.addEventListener(`touchend`,a),e.addEventListener(`touchcancel`,a),e.querySelector(`.panel-head`).addEventListener(`click`,e=>{t()&&this.state===`peek`&&!e.target.closest(`button`)&&this.set(`half`)})}},t_=`book5-visits-total`,n_=`book5-visits-day`,r_=`book5-visits-seen`,i_=900,a_=()=>new Intl.DateTimeFormat(`en-CA`,{timeZone:`Asia/Taipei`}).format(new Date);async function o_(){try{let e=a_(),t=localStorage.getItem(r_),n=Number(localStorage.getItem(t_)||128),r=JSON.parse(localStorage.getItem(n_)||`{}`),i=r.date===e?Number(r.count||1):0;return t!==e&&(n+=1,i+=1,localStorage.setItem(t_,String(n)),localStorage.setItem(n_,JSON.stringify({date:e,count:i})),localStorage.setItem(r_,e)),{total:n,today:Math.max(1,i),fresh:!0}}catch{return null}}function s_(e,t,n){if(n){e.textContent=t.toLocaleString();return}let r=performance.now(),i=n=>{let a=Math.min(1,(n-r)/i_);e.textContent=Math.round(t*(1-(1-a)**3)).toLocaleString(),a<1&&requestAnimationFrame(i)};requestAnimationFrame(i),setTimeout(()=>{e.textContent=t.toLocaleString()},1150)}var c_={低:`基礎核心（L1～L3 基礎辨析）`,中:`進階運用（L4～L6 句構轉折）`,高:`會考實戰（全冊綜合誘答模擬）`},l_={core:[`🔒 世界樹文法總覽寶箱上鎖了`,`🔓 世界樹文法寶典打開了！`],course:[`⏳ 時光齒輪卡在過去與現在之間`,`⚡ 時光之橋順利接通了！`],inquiry:[`🧭 航向羅盤分不清去過還是沒回來`,`✈️ 航線校準完成，出發！`],walk:[`🎭 情緒噴泉分不清主動還是被動`,`🎉 情緒水波閃耀彩虹光輝！`],digital:[`📡 句型訊號塔輸出格式錯誤`,`📶 三大結果句型成功同步！`],library:[`📚 書房的被動大門鎖住了`,`🚪 大門打開，歡迎走進語態世界！`],admin:[`🚨 燈塔警戒！有人忘記還原 to VR`,`💡 燈塔光芒重新照亮全島！`],teacher:[`⚙️ 工坊的間接問句語序倒裝卡死了`,`⚙️ 直述語序齒輪順暢轉起來了！`],results:[`☁️ 天空搞混了「是否」和「如果」`,`⭐ 雙星閃耀，時態判定大成功！`],forest:[`🌿 森林修飾藤蔓遮住了真正主詞`,`🌳 修飾片語退開，主詞看清了！`],brand:[`🎈 飛艇登船口要求填入正確關代`,`🎈 關代護照通過，飛艇起飛！`],future:[`🌅 曙光大門還有最後一道禁區鎖`,`☀️ 會考 A++ 曙光完全點亮！`]},u_={core:`小羊兒老師把第五冊六單元總鑰匙放進世界樹下，答對這題就能啟動！`,course:`時光小河馬問你現在完成式的時間密碼，選對才能接通時光之橋！`,inquiry:`足跡小河馬搞混了 been to 與 gone to，快幫它判斷人物究竟在哪裡！`,walk:`情緒小河馬被 -ing 和 -ed 繞暈了，幫它挑出正確的分詞形容詞與介系詞！`,digital:`連線小河馬要測試你會不會轉換 too...to、enough to 與 so...that！`,library:`被動小河馬擋在書櫃前：先看主詞是自己動手還是「被」處理！`,admin:`燈塔警報響起！請用使役還原 to 或特殊介系詞被動解除危機！`,teacher:`問句小河馬的齒輪卡住了，記住間接問句絕不可把助動詞放回主詞前！`,results:`星光小河馬要考驗你：這句到底是用「如果」還是「是否」？`,forest:`眼鏡小河馬想請你找出穿過介系詞片語後，真正的動詞單複數！`,brand:`飛艇小河馬檢查你的先行詞清單：什麼時候「唯一指定」只能用 that？`,future:`最後的曙光測試！檢查逗號與介系詞後面有沒有誤放禁用字！`},d_=[[`低`,`core`,`Which sentence uses the Present Perfect tense correctly?`,[`She has already finished her math homework.`,`She has finished her homework yesterday.`,`Did she has finished her homework yet?`,`She is finished her homework for two hours.`],`現在完成式構成為 have/has + p.p.；yesterday 須配過去簡單式，不可與完成式連用。`],[`低`,`core`,`In Book 5, which verb NEVER has a passive voice (be + p.p.) form?`,[`happen`,`build`,`invent`,`write`],`happen（發生）為不及物動詞，沒有受詞因此絕不可改為被動語態（不可寫 was happened）。`],[`中`,`core`,`How do we change a direct question "Where does Tom live?" into an indirect question after "Do you know..."?`,[`Do you know where Tom lives?`,`Do you know where does Tom live?`,`Do you know where is Tom living?`,`Do you know does Tom live where?`],`間接問句採用「疑問詞 ＋ 主詞 ＋ 動詞」直述語序，須消去助動詞 does 並把第三人稱單數 s 還原到動詞 live 上。`],[`中`,`core`,`Look at the girl ________ a pink sweater and glasses; she is our English teacher.`,[`with; wearing / in`,`in; wearing / with`,`in`,`by`],`Wait：正確單選表達穿著「in + 衣物顏色」或「with + 眼鏡配件」，完整句型 The girl in pink / with glasses。`],[`高`,`core`,`Which sentence is completely grammatically RIGHT?`,[`I don’t know if it will rain tomorrow.`,`My sister was made clean the kitchen yesterday.`,`This is the best book which I have ever read.`,`My grandpa, that lives in Tainan, grows rice.`],`A 表「是否」保留 will 正確；B 被動須還原 to clean；C 最高級應用 that；D 非限定逗號後不可用 that。`],[`高`,`core`,`Choose the right sentence with a relative pronoun.`,[`The man and his dog that are walking in the park look happy.`,`The house in that I live was built in 1990.`,`This is the movie who touched everyone.`,`The girl was excited to the news.`],`先行詞為「人＋動物（The man and his dog）」並存時，關係代名詞唯一指定使用 that；B 介系詞後禁用 that；C movie 是物不可用 who；D excited 配 about/at。`],[`低`,`course`,`Mr. Wu ________ English in our junior high school for fifteen years.`,[`has taught`,`taught`,`teaches`,`is teaching`],`時間副詞為「for + 一段時間（for fifteen years）」，表從過去持續到現在，使用現在完成式 has taught。`],[`低`,`course`,`Have you packed your schoolbag for the field trip ________?`,[`yet`,`already`,`never`,`since`],`yet 放在疑問句或否定句的句尾，表示「已經…了嗎？」或「尚未…」。`],[`中`,`course`,`Mia hasn’t seen her elementary school classmates ________ she graduated in 2024.`,[`since`,`for`,`until`,`during`],`since 後面可接「過去時間點或過去簡單式子句」，代表「自從…以來（至今）」。`],[`中`,`course`,`It ________ three months since we last practiced badminton together.`,[`has been`,`was`,`is being`,`will be`],`句型「It has been + 一段時間 + since + 過去式」或「It is + 時間 + since...」，完成式標準搭配 has been。`],[`高`,`course`,`Kevin: How long have you had this smartphone? Amy: For about two years. I ________ it when I entered Grade 7.`,[`bought`,`have bought`,`buy`,`had bought`],`第二句有明確過去時間點「when I entered Grade 7」，表示購買當下的過去動作，須用過去簡單式 bought，不可寫 have bought。`],[`高`,`course`,`So far, our team ________ three robots for the science fair, and we are building a fourth one.`,[`has made`,`makes`,`made`,`will make`],`So far（到目前為止）是現在完成式的標準時間提示詞，搭配單數隊伍主詞 our team 選 has made。`],[`低`,`inquiry`,`Excuse me, where is Ms. Lin? — Oh, she isn’t here. She has ________ to Taipei for a meeting.`,[`gone`,`been`,`went`,`being`],`人不在現場（「she isn’t here」），表示已經去了還沒回來，須選 has gone to。`],[`低`,`inquiry`,`I have ________ to Kenting three times. The beaches there are really beautiful!`,[`been`,`gone`,`went`,`go`],`主詞為 I（絕對不可接 gone to），且表示「曾經去過某地並已回來」的三次經驗，須選 been to。`],[`中`,`inquiry`,`My uncle ________ in Hualien for more than ten years, so he knows every trail there.`,[`has been`,`has gone`,`has went`,`was`],`表達「待在／居住在某地持續一段時間（for ten years）」，須使用 have / has been in + 地點。`],[`中`,`inquiry`,`Have you ________ to the new night market yet? — No, never. How about going there tonight?`,[`been`,`gone`,`went`,`visited`],`與聽者對話中詢問「曾經去過某地嗎」，使用 Have you been to + 地點（注意 visit 是及物動詞，不可加 to）。`],[`高`,`inquiry`,`Sam left his hometown five years ago, and he ________ away from home since then.`,[`has been`,`has left`,`has gone`,`left`],`leave 為瞬間動詞不可與一段時間（since then）連用表持續狀態，須改用持續動詞片語 be away → has been away。`],[`高`,`inquiry`,`Nobody answers the phone at Jerry’s house. His family must have ________ on vacation.`,[`gone`,`been`,`went`,`stayed`],`家裡沒人接電話表示全家「已經出發去了（人不在家）」，故選 gone；been to 則代表已回家。`],[`低`,`walk`,`The basketball game on TV last night was so ________ that we shouted loudly.`,[`exciting`,`excited`,`excite`,`to excite`],`主詞是事物（The basketball game），表達「這場球賽令人興奮」，主動引發情緒使用 V-ing：exciting。`],[`低`,`walk`,`Tina is very ________ in English songs and practices singing every day.`,[`interested`,`interesting`,`interest`,`interests`],`主詞是人（Tina），且後方搭配固定介系詞 in（be interested in 對…感興趣），應選過去分詞形容詞 interested。`],[`中`,`walk`,`Everyone was ________ at the ending of the movie because nobody expected it.`,[`surprised`,`surprising`,`surprise`,`surprisingly`],`主詞是人（Everyone）加上介系詞 at（be surprised at 對…感到驚訝），選過去分詞 surprised。`],[`中`,`walk`,`After running for two hours in the PE class, all the boys were very ________.`,[`tired`,`tiring`,`bore`,`bored to`],`人因運動而感到疲累（be tired from...），選過去分詞 tired。`],[`高`,`walk`,`Mr. Chen’s history class is never ________; his funny stories always make students laugh.`,[`boring`,`bored`,`tired`,`scared`],`主詞是「陳老師的歷史課（事物）」，表達「課程一點也不令人無聊」須選 V-ing 形容詞 boring。`],[`高`,`walk`,`Gary is tired ________ eating the same fast food every day; he wants a homemade dinner tonight.`,[`of`,`from`,`in`,`about`],`be tired of ＋ N / V-ing 表示「對…感到厭煩」；be tired from 才表示「因為勞動而身體疲累」。`],[`低`,`digital`,`This green box is too heavy for the little boy ________.`,[`to carry`,`carry`,`carrying`,`to carry it`],`句型「too + adj. + (for 人) + to VR」，不定詞後面不可重複前面已經作為主詞的受詞（不可加 it）。`],[`低`,`digital`,`Wait until you are ________ to ride a motorcycle legally in Taiwan.`,[`old enough`,`enough old`,`too old`,`very old enough`],`enough 修飾形容詞時，規定必須放在形容詞「後面」：adj. + enough + to VR。`],[`中`,`digital`,`The math question was so difficult that nobody in our class could answer ________.`,[`it`,`to answer`,`that`,`nothing`],`在「so + adj. + that + 完整子句」結構中，that 引導完整句子，及物動詞 answer 後必須補上受詞 it！`],[`中`,`digital`,`Does Kevin have ________ to finish all eight English islands tonight?`,[`enough time`,`time enough`,`many time`,`so time`],`enough 修飾「名詞（time）」時，擺在名詞「前面」：enough time；修飾形容詞才放後面。`],[`高`,`digital`,`The bag was ________ expensive ________ I decided not to buy it.`,[`so; that`,`too; to`,`such; that`,`enough; to`],`that 後面跟著完整子句（I decided...），且空格後為單純形容詞 expensive（無名詞），故使用 so + adj. + that。`],[`高`,`digital`,`It was ________ an exciting baseball game that the fans cheered for five minutes.`,[`such`,`so`,`very`,`too`],`空格後是「a/an + 形容詞 + 名詞（an exciting baseball game）」整個名詞詞組，連接 that 子句必須選用 such！`],[`低`,`library`,`French and English ________ in Canada by millions of people every day.`,[`are spoken`,`speak`,`is spoken`,`were speaking`],`語言（複數：French and English）是被說的受詞角色，時間為現在習慣（every day），選複數現在被動 are spoken。`],[`低`,`library`,`The old stone bridge over the river ________ by local workers fifty years ago.`,[`was built`,`built`,`is built`,`has built`],`主詞「古老石橋」為被動建造，加上過去時間「fifty years ago」，使用過去簡單被動 was built。`],[`中`,`library`,`All the broken chairs in Classroom 902 ________ repaired by the janitor already.`,[`have been`,`have`,`are being`,`were been`],`主詞 chairs 被修理，加上 already 表示已經完成，應使用現在完成式被動「have been + p.p.」。`],[`中`,`library`,`Garbage must ________ before you throw it into different recycling bins.`,[`be sorted`,`sort`,`sorted`,`be sorting`],`情態助動詞 must 後面接原形 be + p.p.，表「垃圾必須被分類（must be sorted）」。`],[`高`,`library`,`A new high school ________ in this town next year, so more students can study nearby.`,[`will be built`,`will build`,`is built`,`has been built`],`「next year」指未來時間，一所新高中將「被興建」，使用未來式被動 will be built。`],[`高`,`library`,`Good news! All the science reports ________ on time before Friday.`,[`have been handed in`,`have handed in`,`hand in`,`were hand in`],`報告（All the science reports）是「被繳交」的對象，現在完成式被動搭配複數主詞選 have been handed in。`],[`低`,`admin`,`Because of the typo, Tom was made ________ the whole paragraph twice by the teacher.`,[`to copy`,`copy`,`copying`,`copied`],`make 為使役動詞，主動雖省 to（made Tom copy），但改成被動語態時必須還原不定詞 to：was made to copy！`],[`低`,`admin`,`Taiwan is very famous and well known ________ its delicious bubble tea and night markets.`,[`for`,`to`,`as`,`with`],`be known / famous for ＋ 事物特色，表示「以某項特色或名產而聞名」。`],[`中`,`admin`,`J. K. Rowling is best known ________ a world-famous writer of the Harry Potter series.`,[`as`,`for`,`to`,`by`],`be known as ＋ 職業或身分，表示「以某種身分而廣為人知」。`],[`中`,`admin`,`That magic paper plane is made ________ thin plastic, while regular paper is made ________ wood.`,[`of; from`,`from; of`,`by; with`,`in; on`],`材質變化肉眼可見（塑膠做成飛機）用 be made of；經過化學／物理大幅改變看不出原物料（木頭變紙張）用 be made from。`],[`高`,`admin`,`Yesterday afternoon, a man in a black jacket was seen ________ away from the jewelry shop.`,[`to run`,`ran`,`runs`,`was running`],`感官動詞 see 在被動語態中不可直接接原形 VR，必須還原 to VR（was seen to run）或保留進行 V-ing（running）。`],[`高`,`admin`,`In winter, the high mountain is often covered ________ thick white snow.`,[`with`,`by`,`of`,`from`],`固定被動搭配「be covered with...（被…所覆蓋）」，屬於不以 by 引導行為者的常見狀態被動片語。`],[`低`,`teacher`,`Excuse me, could you tell me where ________?`,[`the train station is`,`is the train station`,`the train station was been`,`does the train station is`],`間接問句須採直述句語序「疑問詞 ＋ 主詞（the train station）＋ be 動詞（is）」。`],[`低`,`teacher`,`Do you know what time ________ this morning?`,[`the movie started`,`did the movie start`,`started the movie`,`was the movie start`],`消滅疑問句借來的助動詞 did，並把過去式標記還原在動詞上（start → started），維持「what time + 主詞 + 動詞」。`],[`中`,`teacher`,`Nobody knows how ________ her science project in just two days.`,[`Lucy finished`,`did Lucy finish`,`Lucy finishes did`,`was Lucy finished`],`原句為過去完成的一件事（finished），放進間接問句不留助動詞 did，維持 how + S (Lucy) + V (finished)。`],[`中`,`teacher`,`________ do you think is the best way to review Grade 9 English?`,[`What`,`Who does`,`How did`,`When are`],`當主要子句出現 Do you think / guess / believe 表推測時，疑問詞 What 必須移到整個句子的「最開頭」，後面接 is...。`],[`高`,`teacher`,`Could you ask Mia why ________ come to the party yesterday?`,[`she didn’t`,`didn’t she`,`not she did`,`she doesn’t`],`否定間接問句不可把 don’t / doesn’t / didn’t 刪掉，只需將主詞 she 移回否定助動詞 didn’t 之前！`],[`高`,`teacher`,`Tell me who ________ the window in the lab! Everyone looks nervous.`,[`broke`,`did break`,`breaking`,`was break`],`疑問詞 Who 在此同時擔任子句的「主詞」，因此原本就已是「主詞＋動詞」順序，直接保持 who broke the window 即可！`],[`低`,`results`,`I am not sure ________ Andy will join our basketball practice tomorrow or not.`,[`whether`,`that`,`what`,`which`],`句尾有 or not（且表達是否的疑問未定態度），只能用 whether（或 if，選項中無 if 時唯一選 whether）。`],[`低`,`results`,`Jenny wants to know if the museum ________ open next Monday.`,[`will be`,`is`,`was`,`being`],`這裡的 if 放在 know 後方表「是否（名詞子句）」，遇到 next Monday 必須保留未來式 will be！`],[`中`,`results`,`It depends on ________ the weather is warm enough for us to go camping.`,[`whether`,`if`,`what`,`that`],`緊接在介系詞（on）後方引導「是否」名詞子句時，英文規定只可用 whether，不可使用 if！`],[`中`,`results`,`________ we can reach the peak of the mountain depends on our teamwork.`,[`Whether`,`If`,`What`,`How much`],`放在整個句子的句首當主詞表「是否…這件事」時，規定僅能使用 Whether，絕不可以用 If！`],[`高`,`results`,`I don’t know if Ben ________ here tomorrow. If he ________, I will give him the English notes.`,[`will come; comes`,`comes; will come`,`will come; will come`,`comes; comes`],`第一句 if 接在 don’t know 後表「是否」→ 留未來式 will come；第二句 If 在副詞子句表「如果」→ 用現在式 comes 代替未來式！`],[`高`,`results`,`The teacher asked us to decide whether ________ to the science museum this weekend.`,[`to go`,`going`,`we going`,`should go`],`不定詞之前表「是否要做某事」（whether to VR）也是只可用 whether 而不可換為 if 的專屬結構！`],[`低`,`forest`,`Look at the tall girl ________ a blue dress! She plays the violin very well.`,[`in`,`with`,`on`,`for`],`表達穿著服飾或衣著顏色（a blue dress）作名詞後位修飾，介系詞固定使用 in。`],[`低`,`forest`,`Who is that friendly boy ________ round glasses and short dark hair?`,[`with`,`in`,`by`,`under`],`表達隨身攜帶物件或五官外貌特徵（眼鏡、長髮、鬍子），介系詞固定使用 with。`],[`中`,`forest`,`The students in the school library ________ preparing carefully for their English contest.`,[`are`,`is`,`was`,`has`],`跨越介系詞片語「in the school library」，真正主詞是複數 The students，故動詞選用複數 are！`],[`中`,`forest`,`The price of these winter jackets ________ dropped a lot since last week.`,[`has`,`have`,`are`,`were`],`「The price（價格）」為不可數／單數主詞核心，介系詞 of these winter jackets 只是後位修飾，動詞須配單數 has！`],[`高`,`forest`,`All the cookies on the wooden plate ________ made by Grandma this morning.`,[`were`,`was`,`is`,`has been`],`主詞核心為複數的 All the cookies（on the plate 是後位修飾），搭配 this morning 過去被動選用複數 were。`],[`高`,`forest`,`A basket of fresh apples and bananas ________ on the kitchen table.`,[`is sitting`,`are sitting`,`were sitting`,`have sat`],`中心名詞是單數的「A basket（一籃）」，of fresh apples and bananas 為修飾成分，須使用單數動詞 is sitting。`],[`低`,`brand`,`The boy ________ is helping the old lady cross the street is my cousin.`,[`who`,`which`,`whom`,`whose`],`先行詞為人（The boy），且關代後方緊接著動詞 is helping 擔任主格，選用主格關代 who（或 that）。`],[`低`,`brand`,`I have a smart watch ________ can remind me to drink water every hour.`,[`which`,`who`,`whom`,`what`],`先行詞為事物（a smart watch），後方直接接動詞 can remind，選用事物主格關代 which（或 that）。`],[`中`,`brand`,`Do you know the girl ________ bicycle was stolen in front of the bookstore?`,[`whose`,`who`,`which`,`that`],`先行詞 the girl 後接名詞 bicycle，語意為「她的腳踏車（的）」，所有格關代一律選用 whose。`],[`中`,`brand`,`This is the most exciting comic book ________ I have ever read in my life.`,[`that`,`which`,`who`,`what`],`先行詞前方出現形容詞最高級（the most exciting），關係代名詞規定優先使用 that！`],[`高`,`brand`,`Look! The girl and her cute puppy ________ are running on the grass look so joyful.`,[`that`,`who`,`which`,`whom`],`當先行詞同時包含「人與動物（The girl and her cute puppy）」時，關係代名詞唯一指定選用 that。`],[`高`,`brand`,`People who ________ enough sleep every night usually concentrate better in class.`,[`get`,`gets`,`getting`,`is getting`],`主格關係代名詞 who 的動詞單複數取決於前面先行詞 People（集合複數名詞），故現在簡單式選複數原型 get！`],[`低`,`future`,`The birthday card ________ Tina made for her mom looks warm and special.`,[`(that / which / 可省略)`,`what`,`who`,`where`],`先行詞 card 是物，關代後面接著主詞＋動詞（Tina made），代表受格關代可寫 which / that 或省略；選項無誤者為此架構。`],[`低`,`future`,`Who is the singer ________ you just talked about after the music class?`,[`whom`,`which`,`whose`,`what`],`先行詞是人（the singer），在受詞位置（talked about ___）可使用受格關代 whom（或 who / that / 省略）。`],[`中`,`future`,`The small town in ________ my grandparents lived has changed into a busy city.`,[`which`,`that`,`where`,`whom`],`介系詞（in）緊接在關係代名詞之前且先行詞為地點名詞 town 時，絕不可填 that 或 where，只能選 which！`],[`中`,`future`,`Mr. Lin, ________ has taught English for twenty years, is very popular at school.`,[`who`,`that`,`whom`,`which`],`先行詞 Mr. Lin 後有逗號（非限定用法），而且關代後方接動詞 has taught（主格），逗號後面絕對禁止用 that，選 who！`],[`高`,`future`,`Is this the museum ________ you visited with your classmates last Saturday?`,[`which`,`where`,`in which`,`who`],`先看子句裡少了什麼：visited 是及物動詞直接缺「受詞」，不是缺地方副詞！因此受格關代應選 which（不可寫 where 或 in which）。`],[`高`,`future`,`The kind teacher with ________ our class took a photo yesterday is moving to Tainan.`,[`whom`,`who`,`that`,`whose`],`當介系詞（with）被移到關係代名詞正前方且先行詞是人時，英文嚴格規定只能用受格 whom，絕不可用 who 或 that！`]];d_[3][3]=[`in; with`,`with; in`,`on; by`,`by; for`],d_[3][2]=`Look at the girl ________ a pink sweater and the boy ________ round glasses.`,d_[3][4]=`穿著顏色衣服「in + 衣服（in a pink sweater）」，身上配戴眼鏡或特徵「with + 配件（with round glasses）」。`,d_[42][3]=[`that`,`what`,`who`,`where`],d_[42][2]=`The birthday card ________ Tina made for her mom looks very warm and special.`;var f_=[{k:`01. 三明治的由來（The Story of Sandwich）`,b:`低`,q:`【閱讀選文】John Montagu, the 4th Earl of Sandwich, loved playing card games so much that he refused to stop for dinner. One day, he asked his cook to put some meat between two pieces of bread.
問題：Why did the Earl ask for meat between two pieces of bread?`,o:[`So he could eat with one hand while playing cards.`,`Because he didn’t have any plates at home.`,`Because bread was much cheaper than rice.`,`So he could share the food with his dog.`],a:0,x:`選文指出他太熱衷玩牌而不願停下來吃晚餐，把肉夾在麵包裡就可以單手邊玩邊吃。`},{k:`01. 三明治的由來（The Story of Sandwich）`,b:`低`,q:`【閱讀選文】Soon, his friends began asking for "the same as Sandwich!" Later, this kind of quick meal was called a "sandwich" all over the world.
問題：How did the food get its name "sandwich"?`,o:[`It was named after the Earl of Sandwich.`,`The cook’s last name was Sandwich.`,`It was invented in a town called Bread.`,`Cards were shaped like a triangle back then.`],a:0,x:`他的朋友紛紛點「跟三明治伯爵一樣的餐點」，後來這種食物就以伯爵的封號（Sandwich）被動命名為 was called。`},{k:`01. 三明治的由來（The Story of Sandwich）`,b:`低`,q:`【文法理解】The snack which was invented by the cook quickly became popular across Europe.
問題：Which word can replace "which" in this sentence?`,o:[`that`,`who`,`whom`,`whose`],a:0,x:`先行詞為事物（The snack），句中無逗號與前置介系詞，主格關代可用 which 或 that。`},{k:`01. 三明治的由來（The Story of Sandwich）`,b:`中`,q:`【閱讀選文】Many people believe that sandwiches became common because busy workers needed a lunch they could easily carry to factories without needing forks or knives.
問題：What does "they could easily carry" describe?`,o:[`The lunch (sandwiches).`,`The busy factories.`,`The forks and knives.`,`The Earl’s card games.`],a:0,x:`這裡省略了受格關係代名詞（which / that），用來後位修飾前面的名詞 a lunch。`},{k:`01. 三明治的由來（The Story of Sandwich）`,b:`中`,q:`【閱讀選文】Since the 18th century, the sandwich has changed into hundreds of styles in different countries—from baguettes in France to pork buns in Taiwan.
問題：What can we learn from this sentence?`,o:[`Sandwiches have been adapted differently around the world.`,`Only France and Taiwan eat sandwiches today.`,`Nobody eats sandwiches anymore since the 18th century.`,`Baguettes were invented by the Earl of Sandwich.`],a:0,x:`「has changed into hundreds of styles in different countries」顯示各地發展出不同特色的夾心麵包料理。`},{k:`01. 三明治的由來（The Story of Sandwich）`,b:`中`,q:`【語態辨析】Today, billions of sandwiches ________ around the globe every single year.`,o:[`are eaten`,`eat`,`were eating`,`have eaten`],a:0,x:`主詞 billions of sandwiches 為食物受詞概念，搭配時間 every single year 使用現在簡單式被動 are eaten。`},{k:`01. 三明治的由來（The Story of Sandwich）`,b:`高`,q:`【會考推論】"I have never seen a meal that is so simple yet so helpful," wrote a historian.
問題：Why did the historian praise the sandwich?`,o:[`It saves time while still providing balanced food.`,`It requires thirty minutes of cooking at a table.`,`It can only be eaten by rich lords.`,`It was created to replace water.`],a:0,x:`結合「simple（簡單方便）」與「helpful（實用省時）」推論出其便利兼具飽足的優勢。`},{k:`01. 三明治的由來（The Story of Sandwich）`,b:`高`,q:`【高階句構】John Montagu, ________ friends loved his quick dinner idea, never guessed his name would stay in every dictionary.
問題：Which relative pronoun fits the blank?`,o:[`whose`,`who`,`that`,`whom`],a:0,x:`空格後面直接接複數名詞 friends，代表「他的朋友們」，非限定逗號後只可用所有格關代 whose！`},{k:`01. 三明治的由來（The Story of Sandwich）`,b:`高`,q:`【詞義理解】In the line "It turned out to be a hit that lasted for centuries," what does "a hit" mean?`,o:[`Something very popular and successful.`,`An accident in the kitchen.`,`A hard strike on the table.`,`A problem for workers.`],a:0,x:`a hit 在英文習語中表示「風靡一時、大受歡迎的事物」。`},{k:`02. 藥品說明書與安全劑量（Medicine Label & Safety）`,b:`低`,q:`【生活圖表】ColdCare Syrup Label — Take 10 ml every 6 hours for adults. Children aged 6–12: Take 5 ml every 6 hours. Do NOT give to children under 6.
問題：How much medicine should a 10-year-old boy take at one time?`,o:[`5 ml.`,`10 ml.`,`15 ml.`,`None, it is not safe.`],a:0,x:`10 歲兒童屬於「aged 6–12」區間，每次劑量為 5 ml。`},{k:`02. 藥品說明書與安全劑量（Medicine Label & Safety）`,b:`低`,q:`【生活圖表】Warning: This medicine may make you feel sleepy. Do NOT drive a car or ride a scooter after taking it.
問題：What should people NOT do after taking ColdCare Syrup?`,o:[`Drive a car.`,`Drink warm water.`,`Go to sleep early.`,`Rest in bed.`],a:0,x:`警語明確指出服藥後會想睡覺（make you feel sleepy），切勿開車或騎機車。`},{k:`02. 藥品說明書與安全劑量（Medicine Label & Safety）`,b:`低`,q:`【文法理解】Little Timmy is 4 years old. He is ________ to take this medicine.`,o:[`too young`,`young enough`,`so young`,`old enough`],a:0,x:`4 歲小於 6 歲禁用標準，「年紀太小而不能服用」使用「too + adj. + to VR」。`},{k:`02. 藥品說明書與安全劑量（Medicine Label & Safety）`,b:`中`,q:`【生活推論】Ms. Wu took 10 ml of ColdCare at 8:00 a.m. If she follows the instructions ("every 6 hours"), when is the earliest time she can take the next dosage?`,o:[`2:00 p.m.`,`12:00 p.m.`,`10:00 a.m.`,`8:00 p.m.`],a:0,x:`早上 8:00 加上 6 小時為下午 2:00（2:00 p.m.）。`},{k:`02. 藥品說明書與安全劑量（Medicine Label & Safety）`,b:`中`,q:`【句型理解】"Store in a cool, dry place away from sunlight." What does "Store" mean here?`,o:[`Keep safely for future use.`,`A shop that sells clothes.`,`Throw away quickly.`,`Mix with cold water.`],a:0,x:`在藥品說明書祈使句句首，store 當動詞意為「儲存、存放」。`},{k:`02. 藥品說明書與安全劑量（Medicine Label & Safety）`,b:`中`,q:`【結果換算】A 60 ml bottle of ColdCare is ________ for an adult to take 6 times (10 ml each time).`,o:[`enough`,`too full`,`very much`,`scared`],a:0,x:`60 ml ÷ 10 ml = 6 次，剛好足夠成人服用六次（enough for 人 to VR）。`},{k:`02. 藥品說明書與安全劑量（Medicine Label & Safety）`,b:`高`,q:`【閱讀理解】"If your fever lasts more than three days or gets worse, stop taking this medicine and ask a doctor right away."
問題：When MUST a patient see a doctor?`,o:[`If the fever continues for four days.`,`Right after taking the very first spoon.`,`When they sleep for eight hours.`,`Before opening a brand-new bottle at all.`],a:0,x:`「more than three days」代表發燒超過三天（例如四天）未退時必須停藥並立即就醫。`},{k:`02. 藥品說明書與安全劑量（Medicine Label & Safety）`,b:`高`,q:`【被動句構】Make sure all medicine bottles ________ out of children’s reach so no accidents happen.`,o:[`are kept`,`keep`,`kept`,`have kept`],a:0,x:`藥瓶應「被放置（are kept）」在孩童拿不到的安全高處。`},{k:`02. 藥品說明書與安全劑量（Medicine Label & Safety）`,b:`高`,q:`【字義辨析】In the warning "Do not exceed the daily dosage," "dosage" is closest in meaning to ________.`,o:[`the safe amount of medicine to take`,`the price printed on the box`,`the flavor of the syrup`,`the hospital phone number`],a:0,x:`dosage 指規定一次或一日的「安全用藥劑量」。`},{k:`03. 高鐵時刻表與綠色旅行（Timetable & Smart Travel）`,b:`低`,q:`【時刻資訊】Train #108 leaves Taipei at 09:00 and arrives in Zuoying at 10:36. Train #612 leaves Taipei at 09:20 and stops at every station, arriving at 11:25.
問題：How long does Train #108 take from Taipei to Zuoying?`,o:[`96 minutes (1 hour and 36 minutes).`,`2 hours and 5 minutes.`,`60 minutes.`,`125 minutes.`],a:0,x:`從 09:00 到 10:36 共經過 1 小時 36 分鐘（96 分鐘）。`},{k:`03. 高鐵時刻表與綠色旅行（Timetable & Smart Travel）`,b:`低`,q:`【問句轉換】Kevin asks the clerk: "When does Train #108 arrive in Taichung?"
Which indirect question is correct?`,o:[`Can you tell me when Train #108 arrives in Taichung?`,`Can you tell me when does Train #108 arrive?`,`Can you tell me when is Train #108 arriving?`,`Can you tell me when did Train #108 arrived?`],a:0,x:`間接問句須拿掉助動詞 does 並保留第三人稱單數 arrives，選 A。`},{k:`03. 高鐵時刻表與綠色旅行（Timetable & Smart Travel）`,b:`低`,q:`【完成式應用】Since the high-speed rail opened in 2007, millions of passengers ________ traveled across Taiwan quickly.`,o:[`have`,`did`,`will`,`had been`],a:0,x:`句中有 Since 2007 且後接過去分詞 traveled，選現在完成式助動詞 have。`},{k:`03. 高鐵時刻表與綠色旅行（Timetable & Smart Travel）`,b:`中`,q:`【邏輯比對】It is 09:10 a.m. at Taipei Station now. Emily wants to reach Zuoying BEFORE 11:30 a.m. Which train should she take?`,o:[`Train #612 at 09:20 a.m.`,`Train #108 at 09:00 a.m.`,`Wait for tomorrow’s morning train.`,`Both Train #108 and #612 are impossible.`],a:0,x:`現在已經 09:10，09:00 的 #108 已經開走（has left）；#612 於 09:20 出發、11:25 抵達（早於 11:30），故選 Train #612。`},{k:`03. 高鐵時刻表與綠色旅行（Timetable & Smart Travel）`,b:`中`,q:`【間接問句】The passenger wondered ________ the weather in Kaohsiung would be sunny or rainy.`,o:[`whether`,`that`,`what`,`which`],a:0,x:`wondered 後表「是否…（搭配 or）」引導疑問名詞子句，選 whether。`},{k:`03. 高鐵時刻表與綠色旅行（Timetable & Smart Travel）`,b:`中`,q:`【情緒與經驗】Emily has ________ to Kaohsiung three times, and every trip was exciting for her.`,o:[`been`,`gone`,`went`,`went to`],a:0,x:`去過三次（經驗）使用 have / has been to。`},{k:`03. 高鐵時刻表與綠色旅行（Timetable & Smart Travel）`,b:`高`,q:`【情境閱讀】Taking the train produces much less carbon pollution than driving a car alone. Moreover, travelers can enjoy the dreamy scenery along the coast.
問題：What is the main purpose of this paragraph?`,o:[`To show why taking trains is both eco-friendly and enjoyable.`,`To warn travelers never to look out the window.`,`To sell cheap cars in Taipei.`,`To complain about rainy weather on the train.`],a:0,x:`提及低碳減排（eco-friendly）與欣賞海岸風光（enjoyable），主旨為推廣火車綠色旅行的雙重優點。`},{k:`03. 高鐵時刻表與綠色旅行（Timetable & Smart Travel）`,b:`高`,q:`【綜合語法】Wait! Nobody remembers where ________ before getting off the train!`,o:[`we put the tickets`,`did we put the tickets`,`put we the tickets`,`have we put the tickets`],a:0,x:`間接問句直述語序：where + 主詞 we + 過去式動詞 put（不可放 did 或 have 倒裝）。`},{k:`03. 高鐵時刻表與綠色旅行（Timetable & Smart Travel）`,b:`高`,q:`【推論判斷】"The ticket machine by the south gate has been fixed since noon." What does this mean at 2:00 p.m.?`,o:[`Passengers can use that machine to buy tickets again.`,`The machine is still broken right now.`,`Nobody can find the south gate.`,`You must go to another city to pay.`],a:0,x:`has been fixed（完成式被動「已經被修好」）表示從中午至今可正常購票使用。`},{k:`04. 消費心理與行動呼籲（Smart Buyers & Call to Action）`,b:`低`,q:`【商業常識】When a store writes "Only 3 left! Buy yours before midnight!", it wants shoppers to make a fast decision. This skill is called a "Call to Action."
問題：Why does a shop say "Only 3 left"?`,o:[`To push customers to buy the item right away.`,`To tell people the shop is closed forever.`,`Because three workers went home early.`,`To help customers save all their money.`],a:0,x:`製造稀缺感（「只剩三個！」）屬於促銷中的行動呼籲（Call to Action），促使顧客立即下單。`},{k:`04. 消費心理與行動呼籲（Smart Buyers & Call to Action）`,b:`低`,q:`【詞義選擇】A smart buyer always asks ________ he truly needs the product before paying.`,o:[`whether`,`what`,`whom`,`unless`],a:0,x:`ask 後接名詞子句表示「問自己是否真的需要」，選 whether（或 if）。`},{k:`04. 消費心理與行動呼籲（Smart Buyers & Call to Action）`,b:`低`,q:`【情緒形容詞】Many shoppers feel ________ when they see a big "50% OFF!" sign.`,o:[`excited`,`exciting`,`boring`,`tiring`],a:0,x:`人（shoppers）看見折扣感到興奮，使用過去分詞形容詞 excited。`},{k:`04. 消費心理與行動呼籲（Smart Buyers & Call to Action）`,b:`中`,q:`【段落理解】"Free shipping for orders over NT$1,000!" Often a shopper spends NT$800 first, and then adds an extra NT$250 snack just to skip the NT$60 shipping fee.
問題：How much MORE does the shopper spend in total to avoid the NT$60 fee?`,o:[`NT$190 more than paying NT$800 + NT$60.`,`Only NT$60 more.`,`The shopper saves NT$250.`,`No extra money is spent at all.`],a:0,x:`原本只需 NT$800 + NT$60 = NT$860；為了湊免運買到 NT$1,050，反而多花了 NT$1,050 - NT$860 = NT$190！`},{k:`04. 消費心理與行動呼籲（Smart Buyers & Call to Action）`,b:`中`,q:`【閱讀理解】"Let’s take red price tags, for example. Warm colors make people notice discounts faster."
問題：Why does the writer mention "Let’s take... for example"?`,o:[`To give a real example of how stores attract buyers’ eyes.`,`To teach students how to paint a bedroom.`,`To explain why red cars are slow.`,`To show that gray signs cost more money.`],a:0,x:`「Let’s take..., for example」用以舉出具體商店促銷例證來支持論點。`},{k:`04. 消費心理與行動呼籲（Smart Buyers & Call to Action）`,b:`中`,q:`【條件辨析】Before clicking "Buy Now," pause for ten minutes. If you ________ wait, you will often find you don’t really want it.`,o:[`wait`,`will wait`,`waited`,`have waiting`],a:0,x:`此句 If 表示「如果（條件）」，條件副詞子句須使用現在簡單式 wait 代替未來式！`},{k:`04. 消費心理與行動呼籲（Smart Buyers & Call to Action）`,b:`高`,q:`【字義推論】"Those flashy pop-up ads on phone screens can be quite disturbing when you are reading news." What does "disturbing" mean?`,o:[`Annoying and interrupting your focus.`,`Quiet and helpful.`,`Sweet and comfortable.`,`Slow and silent.`],a:0,x:`disturbing（令人打擾不安、干擾專注的），由閱讀新聞被彈窗廣告打斷語境可推知選 A。`},{k:`04. 消費心理與行動呼籲（Smart Buyers & Call to Action）`,b:`高`,q:`【被動理解】Thousands of fake reviews ________ online every month to trick careless shoppers.`,o:[`are posted`,`post`,`are posting`,`were posting`],a:0,x:`虛假評論（fake reviews）是被發布張貼於網路上的，故選現在簡單式被動 are posted。`},{k:`04. 消費心理與行動呼籲（Smart Buyers & Call to Action）`,b:`高`,q:`【綜合結論】What is the best advice given by this article about "Smart Shopping"?`,o:[`Think carefully about real needs instead of following sudden urges.`,`Always buy three items whenever a sign says "Sale."`,`Never read price tags inside supermarkets.`,`Spend as fast as possible before midnight.`],a:0,x:`精明消費的核心是看穿促銷心理、區分「需要 vs. 想要」、避免衝動購買。`},{k:`05. 詩歌修辭與生活意象（Poetry & Warm Images）`,b:`低`,q:`【詩歌理解】"The winter wind brushed the trees / Leaving silver frost on every leaf / Then came the morning sun / Turning cold glass into shining diamonds."
問題：What are the "shining diamonds" in the poem?`,o:[`The frost shining in the morning sunlight.`,`Real rings hidden under the grass.`,`Heavy stones thrown from a window.`,`Dark clouds at midnight.`],a:0,x:`清晨陽光照在葉片上的白霜（silver frost）上，閃閃發光如閃耀的鑽石！`},{k:`05. 詩歌修辭與生活意象（Poetry & Warm Images）`,b:`低`,q:`【介片修飾】The poem paints a gentle picture of a village ________ tall pine trees and blue lakes.`,o:[`with`,`in`,`under`,`for`],a:0,x:`表示某地方「擁有／帶有」高松與藍湖的景緻特色，後位修飾用 with。`},{k:`05. 詩歌修辭與生活意象（Poetry & Warm Images）`,b:`低`,q:`【情緒感受】Reading quiet nature poems at dusk makes many students feel ________.`,o:[`relaxed`,`relaxing`,`scary`,`tiring`],a:0,x:`人感到放鬆，用過去分詞形容詞 relaxed（不可寫 relaxing）。`},{k:`05. 詩歌修辭與生活意象（Poetry & Warm Images）`,b:`中`,q:`【修辭推測】"When the young speaker stepped onto the stage, her face turned red like a ripe tomato." Why did her face turn red?`,o:[`She felt shy and nervous in front of the crowd.`,`She painted her face for Halloween.`,`She ate ten tomatoes backstage.`,`It was snowing inside the theater.`],a:0,x:`「臉紅得像熟番茄」是在描述上台面對人群時的害羞與緊張情緒。`},{k:`05. 詩歌修辭與生活意象（Poetry & Warm Images）`,b:`中`,q:`【關係代名詞】The small notebook ________ I write down my favorite poems has been with me since Grade 7.`,o:[`in which`,`which`,`that`,`whom`],a:0,x:`句尾 write down poems（沒有寫出 in）在筆記本「裡面」寫下詩，先行詞 notebook 配合介系詞 in → in which！`},{k:`05. 詩歌修辭與生活意象（Poetry & Warm Images）`,b:`中`,q:`【詩旨判斷】"A poem is a bridge / Built with soft words / Carrying tired hearts / Over storms of noise."
問題：What does the poet compare a poem to?`,o:[`A gentle bridge helping people find peace.`,`A loud train running through a market.`,`A broken wall in the rain.`,`A clock ticking too fast.`],a:0,x:`詩中把詩比喻成用溫柔話語建造的橋樑，帶領疲憊心靈跨越喧囂風暴獲得平靜。`},{k:`05. 詩歌修辭與生活意象（Poetry & Warm Images）`,b:`高`,q:`【非限定子句】Emily Dickinson, ________ wrote hundreds of short poems in her quiet room, is loved by readers worldwide.`,o:[`who`,`that`,`whom`,`which`],a:0,x:`人名後方有逗號（非限定用法），且關代當主格接動詞 wrote，逗號後嚴禁填 that，必須選 who！`},{k:`05. 詩歌修辭與生活意象（Poetry & Warm Images）`,b:`高`,q:`【使役與被動】Good poems often make readers think deeply; in class today, we ________ to read two poems aloud and share our feelings.`,o:[`were asked`,`made`,`were making`,`asking`],a:0,x:`我們「被要求（were asked）」帶 to VR 朗讀兩首詩（注意 make 被動也要加 to，選項中無 were made，選 were asked）。`},{k:`05. 詩歌修辭與生活意象（Poetry & Warm Images）`,b:`高`,q:`【鑑賞總結】Why do poets use "winter winds" or "shining diamonds" instead of just writing "it is cold"?`,o:[`To create vivid images so readers can feel the scene.`,`Because they forgot the word "cold."`,`To make poems harder for students to pronounce.`,`Because diamonds are sold in winter.`],a:0,x:`運用具體鮮明的自然意象（imagery），能讓讀者身歷其境感受到詩歌傳達的畫面與情感。`}],p_=12,m_=5200,h_=window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,g_=`<svg class="hippo-icon" viewBox="0 0 64 64" aria-hidden="true">
  <circle cx="15" cy="17" r="8" fill="#e27f99"/><circle cx="49" cy="17" r="8" fill="#e27f99"/>
  <circle cx="15" cy="17" r="4" fill="#f9c4d0"/><circle cx="49" cy="17" r="4" fill="#f9c4d0"/>
  <ellipse cx="32" cy="29" rx="21" ry="19" fill="#f09ab0"/>
  <ellipse cx="32" cy="43" rx="24" ry="16" fill="#f4adc0"/>
  <circle cx="23" cy="25" r="4.2" fill="#fff"/><circle cx="41" cy="25" r="4.2" fill="#fff"/>
  <circle cx="24" cy="26" r="2.2" fill="#3b2c1d"/><circle cx="40" cy="26" r="2.2" fill="#3b2c1d"/>
  <ellipse cx="24" cy="40" rx="2.4" ry="3" fill="#b95b76"/><ellipse cx="40" cy="40" rx="2.4" ry="3" fill="#b95b76"/>
  <path d="M22 50 Q32 56 42 50" fill="none" stroke="#b95b76" stroke-width="2.4" stroke-linecap="round"/>
</svg>`,__=Object.fromEntries(ih.map(e=>[e.id,e.name]));function v_(e){return e===1?`第一隻！還有 11 隻在等你`:e===p_/2?`找到一半了，可以領證書囉！`:e===11?`只剩最後一隻了！`:`還有 ${p_-e} 隻躲在雲端`}var y_=0;function b_(e,t){let n=lh[e];document.querySelector(`#hippoCard`)?.remove();let r=document.createElement(`aside`);r.id=`hippoCard`,r.className=`hippo-card card`,r.setAttribute(`role`,`status`),r.innerHTML=`${g_}<div class="hippo-text"><small>找到第 ${t} 隻小河馬！</small><strong></strong><p></p><div class="pips">${Array.from({length:p_},(e,n)=>`<i class="${n<t?`on`:``}${n===t-1?` new`:``}"></i>`).join(``)}</div><span>${v_(t)}</span></div>`,r.querySelector(`strong`).textContent=n.name,r.querySelector(`p`).textContent=`「${n.line}」`,r.addEventListener(`click`,()=>r.remove()),document.body.append(r),clearTimeout(y_),y_=setTimeout(()=>r.remove(),m_)}function x_(e){let t=document.querySelector(`#hint`),n=t&&!t.hidden?t.getBoundingClientRect():null,r=n&&n.width>0&&getComputedStyle(t).display!==`none`;if(h_)return;let i=document.createElement(`b`);i.className=`hippo-fly`,i.textContent=`+1`,document.body.append(i);let a=r?n.left+34:e.x,o=r?n.top+26:e.y-120;i.animate([{transform:`translate(${e.x}px, ${e.y}px) translate(-50%, -50%) scale(.4)`,opacity:0},{transform:`translate(${e.x}px, ${e.y-46}px) translate(-50%, -50%) scale(1.5)`,opacity:1,offset:.3},{transform:`translate(${a}px, ${o}px) translate(-50%, -50%) scale(.7)`,opacity:+!!r}],{duration:1e3,easing:`cubic-bezier(.4, 0, .3, 1)`}).onfinish=()=>{i.remove(),r&&(t.classList.remove(`bump`),t.offsetWidth,t.classList.add(`bump`))}}var S_={6:{badge:`探險家`,title:`找到 6 隻守護小河馬了！`,text:`你是英語尋寶探險家，可以領取第一張榮譽證書囉！<br>再找 6 隻，還有金色小達人證書等著你`,later:`繼續找小河馬`},12:{badge:`小達人`,title:`十二隻守護小河馬全部找到了！`,text:`你走遍第五冊十二座島，是英語尋寶小達人！<br>快領金色證書，下一步挑戰「第五冊文法達人」`,later:`看第三段挑戰`},M:{badge:`文法達人`,title:`通過十二座島的第五冊文法挑戰！`,text:`太優秀了，你已征服九上英語核心考點！<br>領取紫色證書後，可繼續挑戰第四階段「第五冊閱讀達人」`,later:`看閱讀護照`}};function C_(e=p_,t=0){let n=S_[e],r=e===`M`?p_:e;document.querySelector(`#hippoFinale`)?.remove();let i=document.createElement(`div`);i.id=`hippoFinale`,i.className=`hippo-finale`,i.setAttribute(`role`,`dialog`),i.setAttribute(`aria-label`,n.title);let a=Array.from({length:r},(e,t)=>`<span style="--i:${t*p_/r}">${g_}</span>`).join(``),o=e===`M`,s=[`#e0452f`,`#f5c542`,`#2f8fb0`,`#4f9a54`,`#a46bc0`,`#ef8fa3`,`#e0812a`],c=o?`<div class="confetti" aria-hidden="true">${Array.from({length:70},(e,t)=>`<i style="--x:${t*37%100}vw;--d:${(t*.13%2.6).toFixed(2)}s;--t:${(2.6+t%7*.35).toFixed(2)}s;--c:${s[t%s.length]};--r:${t*47%360}deg;--w:${6+t%4*3}px"></i>`).join(``)}</div>`:``;o&&i.classList.add(`grand`),i.innerHTML=`${c}<div class="finale-card card">
    <div class="finale-rays"></div>${o?`<div class="finale-stars" aria-hidden="true">`+`<b>★</b>`.repeat(8)+`</div>`:``}
    <div class="finale-ring">${a}<div class="finale-badge${e===`M`?` m`:``}">${n.badge}</div></div>
    <h2>${n.title}</h2>
    <p>${t?`12 題答對 <b class="finale-score" data-to="${t}">${o?0:t}</b> 題，`:``}${n.text}</p>
    <div class="btn-row"><button class="cta koi" data-act="finaleCert" data-level="${e}">領取證書</button><button class="cta lake" data-act="${e===6?`finaleClose`:e===12?`challenge`:`finalePassport`}">${n.later}</button></div>
  </div>`,document.body.append(i);let l=i.querySelector(`.finale-score`);if(o&&l){let e=0,t=+l.dataset.to,n=setInterval(()=>{e+=1,l.textContent=e,l.classList.remove(`bump`),l.offsetWidth,l.classList.add(`bump`),e>=t&&clearInterval(n)},110)}}var w_=()=>document.querySelector(`#hippoFinale`)?.remove();function T_(e){return`<div class="hippo-grid">${Object.entries(lh).map(([t,n])=>e.has(t)?`<button class="hippo-chip on" data-goto="${t}" title="${n.line}">${g_}<strong>${n.name}</strong></button>`:`<button class="hippo-chip" data-goto="${t}"><i>?</i><strong>躲在${__[t]}</strong></button>`).join(``)}</div>`}var E_={islands:JSON.parse(`{"core":{"tabs":[{"label":"總島導覽與致謝","blocks":[{"t":"lead","text":"歡迎來到「國中英語第五冊 3D 浮空群島」！這裡收錄九年級上學期（L1～L6）最核心的三大文法支柱：現在完成式、被動語態、與關係代名詞，搭配名詞子句、情緒分詞與程度結果句，幫你穩穩拿下會考高分！"},{"t":"stats","items":[{"n":"12","u":"座","label":"天空探索浮空島"},{"n":"72+","u":"題","label":"三階分級文法挑戰"},{"n":"5","u":"篇","label":"會考素養閱讀挑戰"},{"n":"4","u":"階","label":"高解析紀念榮譽證書"}]},{"t":"h","text":"專案師承與特別致謝"},{"t":"cards","items":[{"k":"主編與領航教師｜小羊兒老師","text":"將國中英語第五冊 L1～L6 核心文法與明霖複習重點系統化重編為 3D 探索島嶼與分級挑戰題庫，陪九年級同學一步步衝刺 A++！"},{"k":"3D 架構原作致謝｜桃園市石門國小 阿凱老師","text":"本網站 3D 天空之城浮空群島、人物系統、即時天氣與多段闖關護照，改編自阿凱老師開源專案 https://github.com/cagoooo/smes-island，特此致上最深敬意！"},{"k":"教學設計啟發｜黃泓諺（紅焰／焰兒）老師","text":"承蒙黃泓諺（紅焰／焰兒）老師線上焰兒研習指導與 AI 數位備課心法，促成第三、四、五冊互動教學宇宙的全面實現。"}]},{"t":"photos","items":[{"id":"teacher-avatar.jpg","cap":"島主小羊兒老師（Hi!）"},{"id":"teacher-praise.jpg","cap":"小羊兒老師（好棒棒）"},{"id":"teacher-super.jpg","cap":"教師節快樂・忙碌教學的超人老師"},{"id":"char-pink-idol.jpg","cap":"星光粉髮應援學長"},{"id":"char-class-pet.jpg","cap":"舉重應援班寵・臭臭"},{"id":"char-bow-girl.png","cap":"勤學筆記・粉蝶女孩"}]}]},{"label":"六大單元藍圖","blocks":[{"t":"lead","text":"十二座島嶼依據第五冊六大單元設計為兩條相連航道：內環突破 L1～L2，外環征服 L3～L6！"},{"t":"themes","items":[{"id":"course","k":"L1 完成式基礎","name":"完成式時光島","text":"have/has + p.p. 與 since / for 時間軸"},{"id":"inquiry","k":"L1 動向辨析","name":"經驗足跡島","text":"been to / gone to / been in 黃金辨析"},{"id":"walk","k":"L2 情緒形容詞","name":"情緒分詞島","text":"V-ing 主動令人 vs. p.p. 被動感到"},{"id":"digital","k":"L2 結果句型","name":"結果連線島","text":"too...to / enough to / so...that 轉換"}]},{"t":"chart","data":{"title":"國中英語第五冊 各核心文法近年會考出現比重指標","unit":"權重指數","labels":["現在完成式","被動語態","間接問句","情緒分詞","關係代名詞"],"values":[95,92,84,78,96],"head":["核心文法主題","對應島嶼","近年會考權重","必考題型"],"rows":[["現在完成式","時光島・足跡島","95","單題時態・對話推理"],["被動語態","書房島・燈塔島","92","時態被動・make 還原 to"],["名詞子句／間接問句","工坊島・星光島","84","不倒裝語序・if 是否 vs 如果"],["情緒分詞與結果句","情緒島・連線島","78","介系詞搭配・句型改寫"],["介片與關係代名詞","森林島・飛艇島・未來島","96","長難句主詞判斷・閱讀題組"]]}}]},{"label":"闖關玩法與證書","blocks":[{"t":"lead","text":"點開每一座島、尋找 12 隻守護小河馬、收集 12 枚護照印章，即可挑戰第五冊文法與閱讀達人！"},{"t":"steps","items":[{"k":"第一段・尋找 6 隻小河馬","text":"放大旋轉各浮空島找尋閃閃發光的小河馬，集滿 6 隻可領取「英語尋寶探險家」證書。"},{"k":"第二段・找齊 12 隻小河馬","text":"找齊全部 12 隻文法守護小河馬，立即解鎖金色「英語尋寶小達人」證書。"},{"k":"第三段・第五冊文法達人","text":"集滿 12 隻小河馬＋12 座島嶼護照章，即可挑戰 12 關文法闖關（答對 10 題即過關，過程中還可翻書查資料！），過關領取紫色「第五冊文法達人」證書。"},{"k":"第四段・第五冊閱讀達人","text":"通過第三段後，進入第五冊會考閱讀挑戰區，全部答對 3 篇選文即可獲得翠綠「第五冊閱讀達人」證書！"}]},{"t":"activities","labels":["重點區塊","解鎖方式"],"items":[{"title":"島主小羊兒老師備課中心","meaning":"檢視全部十二座島嶼與文法比重圖表","how":"點擊任意周邊浮空島，或由下方工具列啟動「島嶼導覽」","photos":[{"id":"teacher-avatar.jpg","cap":"小羊兒老師領航"}]},{"title":"會考高頻陷阱總覽","meaning":"一眼辨識第五冊五大必考失分陷阱","how":"請記得在每座島尋找躲藏的小河馬守護員！","photos":[{"id":"char-book-boy.png","cap":"綠帽少年認真複習"}]}]}]}]},"course":{"tabs":[{"label":"完成式核心公式","blocks":[{"t":"lead","text":"現在完成式（Present Perfect）用來表示「從過去一直持續到現在的動作或狀態」，或是「過去發生的經驗到現在為止的累積」，公式永遠離不開 have / has + p.p.！"},{"t":"cards","items":[{"k":"肯定與否定結構","text":"主詞 + have / has (+ not / never) + 過去分詞 (p.p.)。第三人稱單數主詞配 has / hasn’t。"},{"k":"疑問與簡答","text":"Have / Has + 主詞 + p.p....? 簡答用 Yes, S + have / has. 或 No, S + haven’t / hasn’t.。"}]},{"t":"activities","labels":["關鍵副詞","位置與語意陷阱"],"items":[{"title":"already / just / never / ever","meaning":"already（已經，肯定句）、just（剛剛）、ever（曾經，疑問句）、never（從未，否定，不與 not 連用）皆常放在 have/has 與 p.p. 中間。","how":"例：Have you ever seen snow? / Yes, I have already finished the work.","photos":[{"id":"char-bow-girl.png","cap":"粉蝶女孩筆記"}]},{"title":"yet（已經嗎？／尚未）","meaning":"用於疑問句尾（…了嗎？）與否定句尾（還沒有…），絕不放在肯定句中。","how":"例：Has the train arrived yet? No, it hasn’t arrived yet.","photos":[{"id":"teacher-praise.jpg","cap":"好棒棒集氣"}]}]}]},{"label":"since 與 for 辨析","blocks":[{"t":"lead","text":"問完成式動作持續多久用「How long...?」，回答時必須精準挑選 since 或 for！"},{"t":"table","head":["介系／連接詞","後方接續內容","代表概念","經典正確例句"],"rows":[["since","過去時間點 / 過去簡單式子句","自從…（起點）以來","She has lived here since 2018. / since she moved here."],["for","一段時間長度（two hours / ten years）","持續了…之久","We have studied English for three years."],["It has been...","一段時間 + since + 過去式","距離某事已經過了…","It has been five days since Tom left Taiwan."]],"total":false},{"t":"chips","label":"不規則三態高頻必背組","items":["do-did-done","go-went-gone","see-saw-seen","write-wrote-written","give-gave-given","eat-ate-eaten","take-took-taken","break-broke-broken","know-knew-known","forget-forgot-forgotten"]}]}]},"inquiry":{"tabs":[{"label":"been to / gone to / in","blocks":[{"t":"lead","text":"這三個片語只差中間一個過去分詞或介系詞，卻是九年級每一次段考、會考最愛測驗的邏輯陷阱題！"},{"t":"table","head":["完成式片語","中文核心語意","人物現在位置","主詞限制與時間副詞"],"rows":[["have been to + 地點","曾經去過某地（經驗）","人已經回來，不在當地","可搭配 once / twice / never / ever"],["have gone to + 地點","已經去了某地（進行中結果）","人還在當地或路上，不在說話現場","主詞「絕對不可」用 I 或 you！"],["have been in + 地點","待在／住在某地（持續）","從過去至今一直在該地","常搭配 for ＋一段時間 / since ＋ 時間點"]],"total":false},{"t":"activities","labels":["現場演練","看上下文找線索"],"items":[{"title":"線索一：說話者不在現場（不在這裡）","meaning":"如果對話寫「Where is Amy? Is she at home? — No, she isn’t here.」，表示人不在現場，立刻選 has gone to！","how":"例：Amy isn’t in the office. She has gone to Tainan.","photos":[{"id":"char-book-boy.png","cap":"抓出線索關鍵字"}]},{"title":"線索二：主詞出現 I 或 You","meaning":"因為我（I）跟你（you）正在對話中，人不可能去了還沒回來，因此「我去過日本」一定要寫 I have been to Japan!","how":"切記：I have gone to 是文法大忌！","photos":[]}]}]},{"label":"完成式 vs 過去式","blocks":[{"t":"lead","text":"看到明確過去時間點（yesterday, last week, two days ago, in 2010）一定要用過去簡單式；沒有明確點狀過去時間，只強調「到目前為止（so far）」或「for/since」才用現在完成式！"},{"t":"list","items":["正確過去式：He left Taipei two hours ago.（有 ago 明確過去時間，絕不可寫 has left！）","正確完成式：He has been away for two hours.（強調離開狀態持續兩小時至今，配 for！）","注意 since 子句本身必須用過去簡單式：since I was a child（主要子句才用 has/have + p.p.）。"]}]}]},"walk":{"tabs":[{"label":"V-ing 與 p.p. 核心原則","blocks":[{"t":"lead","text":"英文裡有一群動詞叫做「情緒動詞（使某人產生某種情緒）」，例如 excite, interest, bore, surprise, tire, worry, scare, touch。當它們加 -ing 或變 p.p. (-ed) 當形容詞時，用法截然不同！"},{"t":"cards","items":[{"k":"現在分詞 V-ing（主動令人…）","text":"用來修飾「引發情緒的事物或人」，翻譯成「令人感到…的」。例：The magic show is exciting.（這場魔術秀令人興奮。）"},{"k":"過去分詞 p.p. / -ed（被動感到…）","text":"用來描述「心裡接收並感到某種情緒的人」，翻譯成「感到…的」。例：We are all excited about the trip!（我們都很興奮！）"}]},{"t":"activities","labels":["破除最大迷思","人是物還是人？"],"items":[{"title":"陷阱：人也可以使別人覺得有趣或無聊！","meaning":"不要看到主詞是人就反射選 -ed！如果翻譯是「Tom 是個有趣／令人感興趣的人」一樣用 interesting：Tom is an interesting teacher!","how":"判斷基準永遠是「令人（-ing）」還是「自己心裡感到（-ed）」。","photos":[{"id":"char-class-pet.jpg","cap":"班寵舉重提示"}]}]}]},{"label":"介系詞搭配總表","blocks":[{"t":"lead","text":"過去分詞表達情緒時，後面搭配的介系詞幾乎不共用 by！以下七組是會考單題秒殺必背組合："},{"t":"table","head":["情緒形容詞片語","正確介系詞","核心意義","必考辨析"],"rows":[["be interested in","in","對…感興趣","The book is interesting to me."],["be excited about","about","對…感到興奮","後面可接名詞或 V-ing"],["be surprised at","at","對…感到驚訝","有時也接 by"],["be bored with","with","對…感到無聊","不可寫 bored of"],["be tired of vs. from","of / from","對…厭煩 vs. 因…累了","tired of 壞習慣；tired from 跑操場"],["be scared of","of","害怕…","等同 be afraid of"],["be worried about","about","擔心…","比照 worry about + N"]],"total":false}]}]},"digital":{"tabs":[{"label":"三大程度結果句型","blocks":[{"t":"lead","text":"在第二單元裡，我們經常用三種句型互轉表達「太…而不能…」或「夠…足以…」的因果關係！"},{"t":"table","head":["句型公式","肯定 / 否定語意","位置關鍵重點","標準例句"],"rows":[["too + adj./adv. + (for 人) + to VR","表否定（太…以致於不能）","句尾不可多餘重複前面的受詞！","The tea is too hot for me to drink.（不可加 it）"],["adj./adv. + enough + (for 人) + to VR","表肯定（夠…足以做某事）","enough 在形容詞後；名詞前（enough time）","He is old enough to ride a scooter."],["so + adj./adv. + that + S + V","太…以致於…（完整子句）","that 後是完整子句，需補上受詞 it/them！","The box is so heavy that I can’t move it."]],"total":false},{"t":"activities","labels":["轉換三大地雷","段考改寫題零失分關鍵"],"items":[{"title":"地雷一：too...to 與 so...that 受詞 it 保留與否","meaning":"too...to 是不定詞片語，受詞與主詞相同時不可重複：The box is too heavy to carry（✓）/ to carry it（✕）。但改為 that 完整子句時必須補回受詞：so heavy that nobody can carry it（✓）！","how":"記得確認句子主詞是誰！","photos":[{"id":"char-pink-idol.jpg","cap":"粉髮學長提醒"}]},{"title":"地雷二：such vs. so 差別","meaning":"so 後面直接接形容詞／副詞（so cold that...）；但如果要強調後面有一個「名詞詞組」，必須改用 such：「such + (a/an) + 形容詞 + 名詞 + that...」！（例如 It was such a rainy day that we stayed home.）","how":"名詞詞組看有沒有名詞本體（含 a/an）。","photos":[]}]}]}]},"library":{"tabs":[{"label":"五大時態被動公式","blocks":[{"t":"lead","text":"當主詞是「動作的承受者」（例如橋被建造、英文被說、窗戶被擦亮）時，必須使用被動語態：「be 動詞 + p.p. (+ by + 動作執行者)」。"},{"t":"table","head":["時態類別","被動語態公式","常見時間提示詞","經典例句"],"rows":[["現在簡單式被動","am / is / are + p.p.","every day / usually / facts","English is spoken in many countries."],["過去簡單式被動","was / were + p.p.","yesterday / last night / in 1998","This temple was built 200 years ago."],["未來式被動","will be + p.p. / is going to be + p.p.","tomorrow / next week / soon","The new museum will be opened next month."],["情態助動詞被動","can / must / should / may + be + p.p.","規則・義務・可能性","The homework must be finished on time."],["現在完成式被動","have / has + been + p.p.","already / yet / since / for","All the cookies have been eaten!"]],"total":false},{"t":"activities","labels":["三個永遠沒有被動的禁忌","看到這些字絕對別選 be + p.p."],"items":[{"title":"不及物動詞與連綴動詞禁被動！","meaning":"happen（發生）、die（死亡）、arrive（抵達）、appear（出現）、become（變成）、belong to（屬於）以及感官連綴 look/sound/smell/taste/feel 都沒有被動語態！","how":"錯誤例：The accident was happened last night（✕）→ 正確：happened（✓）！","photos":[{"id":"char-book-boy.png","cap":"不及物動詞無被動"}]}]}]}]},"admin":{"tabs":[{"label":"使役與感官動詞被動","blocks":[{"t":"lead","text":"第三單元進階被動的最大魔王！主動句裡為了簡潔而「省略 to」的動詞，一旦改寫為被動語態，就必須把「to」乖乖還回來！"},{"t":"cards","items":[{"k":"使役動詞 make 改被動（必還原 to）","text":"主動：Mom made me clean my room.（沒 to）→ 被動：I was made to clean my room by Mom.（必有 to！注意不可選 cleaning 或只選 clean）"},{"k":"感官動詞 see / hear 改被動","text":"主動省略 to 接原形 VR → 被動須還原 to VR（He was seen to enter the store）；若主動原為進行中 V-ing → 被動直接保留 V-ing（He was heard singing in class）！"}]},{"t":"activities","labels":["不靠 by 的特殊被動片語","會考選擇題高頻必背"],"items":[{"title":"known 家族三分天下：to / for / as","meaning":"be known to（為某人所知）；be known for（以某種特色或產品聞名，= be famous for）；be known as（以某種身分/稱號知名）。","how":"例：Taiwan is known for its tea and snacks. / She is known as a smart teacher.","photos":[{"id":"teacher-super.jpg","cap":"超人老師必背表"}]},{"title":"其他不用 by 改配特殊介系詞的被動","meaning":"be covered with（被…覆蓋）、be filled with（裝滿…）、be made of / from（由…材料製成，看得見原材質用 of / 化學變化看不出用 from）、be made in（在某地製造）。","how":"例：Paper is made from wood.（紙看不出木頭原形用 from）","photos":[]}]}]}]},"teacher":{"tabs":[{"label":"wh- 間接問句規則","blocks":[{"t":"lead","text":"把一個獨立問句，放進 I don’t know / Do you know / Tell me / Could you tell me 後面當成「名詞子句受詞」時，稱為「間接問句」，核心鐵律只有六個字：疑問詞 + 主詞 + 動詞！"},{"t":"steps","items":[{"k":"1. 取消疑問詞後的倒裝","text":"有 be 動詞或助動詞 can / will 時，移回主詞後方！如：Where is he? → Do you know where he is?"},{"k":"2. 消滅助動詞 do / does / did","text":"原直接問句借用的助動詞 do / does / did 必須拿掉，且要把人稱變化或過去時態還回原本的動詞上！如：Where did she go? → Tell me where she went."},{"k":"3. 否定疑問與疑問詞本身當主詞","text":"若原句帶有 don’t / doesn’t / didn’t（表否定的助動詞）不可省略！而像 Who broke the cup? 疑問詞本身就是主詞，語序直接照抄：I know who broke the cup."}]},{"t":"activities","labels":["超級大陷阱","Do you think... 與標點符號"],"items":[{"title":"陷阱一：句尾標點符號看「主要子句」","meaning":"I don’t know where he lives.（陳述句開頭用句點 .）；Do you know where he lives?（問句開頭才用問號 ?）。","how":"別看有 where 就亂加問號或倒裝！","photos":[{"id":"teacher-avatar.jpg","cap":"小羊兒老師叮嚀"}]},{"title":"陷阱二：Do you think / guess / believe 移問詞","meaning":"當主要子句動詞為 think, believe, guess, suppose, imagine 表思考推測時，疑問詞必須「飛到最句首」：What do you think he wants?（絕不寫 Do you think what he wants?）","how":"口訣：think 家族，問詞飛句首！","photos":[]}]}]}]},"results":{"tabs":[{"label":"whether 與 if 大辨析","blocks":[{"t":"lead","text":"第五冊 L4 將 whether 與 if 翻譯為「是否」，引導名詞子句放在 ask, wonder, don’t know, be not sure 等詞後方。請務必同時釐清兩種重大區別！"},{"t":"table","head":["考點比較","whether / if（表「是否」名詞子句）","if（表「如果」條件副詞子句）"],"rows":[["主要功能","接在不知道/詢問後面當受詞（或主詞）","表達條件假設，「如果…」"],["未來時間 tomorrow","必須照實使用未來式「will + VR」","嚴格規定「現在簡單式代替未來式」"],["經典例句","I don’t know whether/if he will come tomorrow.","If he comes tomorrow, I will tell him."],["限定規則","「是否」後面遇 or not 緊鄰時僅可用 whether","不可換成 whether！"]],"total":false},{"t":"activities","labels":["只准用 whether 不可用 if 的三個時機","會考選填極高頻"],"items":[{"title":"三大禁區口訣：首・介・or not + to VR","meaning":"1. 放在句首當主詞（Whether he wins is not important.）；2. 放在介系詞之後（We talked about whether we should go.）；3. 直接連著 or not（whether or not...）以及接不定詞（whether to go）皆只可用 whether，不可用 if！","how":"遇到 if 與 whether 同時在選項，先檢查這三點與逗號位置！","photos":[{"id":"teacher-stickers.jpg","cap":"貼圖口訣表"}]}]}]}]},"forest":{"tabs":[{"label":"介系詞片語後位修飾","blocks":[{"t":"lead","text":"中文說「戴眼鏡的男孩」，會把形容詞放在名詞前；但英文只要修飾語變成兩個字以上的「介系詞片語（Prep + N）」，就必須放在名詞的「後面」作後位修飾！"},{"t":"table","head":["介系詞","修飾類型","英文公式","中英例句"],"rows":[["in","穿著衣物・配件顏色","名詞 + in + 衣物／顏色","The girl in a pink dress / in red is my sister."],["with","隨身攜帶物・五官髮型特徵","名詞 + with + 特徵／物品","Who is the boy with big eyes and short hair?"],["on / at / under","位置所在（桌上的、門口的、樹下的）","名詞 + 地方介系詞片語","The cat under the chair is sleeping."]],"total":false},{"t":"activities","labels":["大考必殺：跨過修飾語找主詞","單複數動詞一致性"],"items":[{"title":"陷阱句：The books on the desk ___ expensive.","meaning":"考題常在主要名詞後方加上含單數名詞的介片（如 on the desk, with a red pen），誘使你寫單數動詞 is！記住真正主詞永遠是介系詞最前面的 The books（複數）→ 用 are / were！","how":"解題神技：把介系詞片語用括號 ( ) 括起來遮掉再選動詞！","photos":[{"id":"char-bow-girl.png","cap":"遮掉修飾語神技"}]}]}]}]},"brand":{"tabs":[{"label":"關代主格與所有格","blocks":[{"t":"lead","text":"當想用「一整句含動詞的子句」來修飾前面的名詞（先行詞）時，就要派出「關係代名詞（Relative Pronouns）」！這也是會考長篇閱讀最核心的句子拆解利器。"},{"t":"table","head":["先行詞類型","主格（關代＋動詞）","受格（關代＋S＋V）","所有格（的＋名詞）"],"rows":[["人","who / that","whom / who / that / (省略)","whose"],["非人（動物／事物）","which / that","which / that / (省略)","whose"],["人＋動物/事物並存","只能用 that","只能用 that / (省略)","whose"]],"total":false},{"t":"activities","labels":["只能用 that 不能用 who / which 的五大場合","口訣：人加物・最序唯一・不定定"],"items":[{"title":"會考單題必出選項辨析","meaning":"當先行詞出現以下特徵時，關係代名詞必須使用 that：1. 人與物／動物並存（The boy and his dog that...）；2. 前有形容詞最高級（the best book that...）；3. 序數（the first student that...）；4. the only / the very / the same；5. all, every, no, any 等不定限定詞。","how":"另外誰開頭問句（Who is the boy...）為避免重複也習慣用 that！","photos":[{"id":"char-pink-idol.jpg","cap":"飛艇領航清單"}]}]}]}]},"future":{"tabs":[{"label":"受格省略・禁 that 與介系詞前移","blocks":[{"t":"lead","text":"登上最後最高島！把關係子句最細膩的三個魔王法則（省略條件、介系詞＋whom/which、非限定逗號用法）一次完全打通，從此閱讀測驗長句一眼秒看穿！"},{"t":"cards","items":[{"k":"受格關代可省略（主格絕不可單獨省！）","text":"判斷只要看關代後面的字：若關代後面緊跟著「動詞 V」，代表關代當主格，絕對不可省略！若關代後面跟著「另一個主詞 S + 動詞 V」，代表關代當受格，可以整個省略！例：The cake (which/that) Mom made is yummy."},{"k":"絕對不可用 that 的兩大禁區","text":"1. 介系詞之後：The city in which I grew up...（✓）／in that（✕）；2. 非限定「逗號 , 」之後：My father, who loves fishing, got up early.（✓）／, that（✕）。"}]},{"t":"activities","labels":["第五冊閱讀突破實戰心法","如何拆解 30 字以上的會考閱讀句子"],"items":[{"title":"兩把大剪刀快速抓主骨幹","meaning":"看見「先行詞 ＋ who/which/that ...」或「先行詞 ＋ S + V（被省略的受格）」，先用括號把整段形容詞子句框起來暫時跳過，前後一併讀出真正的主詞與主要動詞，99% 的長難句瞬間迎刃而解！","how":"例：The umbrella [that Sam left on the bus] was found by the driver.","photos":[{"id":"teacher-praise.jpg","cap":"滿分過關達陣！"}]}]}]}]}}`),sizes:{"teacher-avatar.jpg":[159,167,1],"teacher-praise.jpg":[175,172,1],"teacher-super.jpg":[951,1024,1],"teacher-stickers.jpg":[686,1024,1],"char-bow-girl.png":[151,178,1],"char-book-boy.png":[124,127,1],"char-pink-idol.jpg":[550,656,1],"char-class-pet.jpg":[195,195,1]}},D_=E_.sizes,O_=e=>{let[t,,n=1]=D_[e]||[];return n>1?Math.round(t/n):0},k_=E_.islands,X=(e=``)=>String(e).replace(/[&<>"]/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`})[e]),A_=(e=``)=>e.includes(`/`)||/\.(webp|png|jpe?g|svg)$/i.test(e),j_=e=>A_(e)?e.startsWith(`./`)?e:`./brand/${e}`:`./images/t/${e}.webp`,M_=e=>A_(e)?e.startsWith(`./`)?e:`./brand/${e}`:`./images/${e}.webp`,N_=[],P_=e=>(N_.push(e),N_.length-1),F_=()=>N_,I_=()=>{N_=[]};function L_(e){return`<button class="ph" data-lb="${P_(e)}"><img loading="lazy" decoding="async" src="${j_(e.id)}" alt="${X(e.cap)}"><span>${X(e.cap)}</span></button>`}function R_(e){let t=P_(e),[n,r]=D_[e.id]||[4,3],i=O_(e.id);return`<button class="fig" data-lb="${t}"><img loading="lazy" decoding="async" src="${M_(e.id)}" width="${n}" height="${r}"${i?` style="max-width:${i}px"`:``} alt="${X(e.cap)}"><span>${X(e.cap)}</span></button>`}function z_(e){let t=Math.max(...e.values)*1.12,n=368/e.labels.length,r=Math.min(46,n*.5),i=e.values.map((i,a)=>{let o=i/t*130,s=26+n*a+n/2-r/2,c=144-o,l=/月/.test(e.labels[a]),u=`M${s},144 V${c+4} Q${s},${c} ${s+4},${c} H${s+r-4} Q${s+r},${c} ${s+r},${c+4} V144 Z`;return`<g class="bar-group"><title>${X(e.labels[a])}：${i.toLocaleString()} ${e.unit}</title>
      <rect class="bar-hit" x="${26+n*a}" y="0" width="${n}" height="170" fill="transparent"/>
      <path d="${u}" fill="#2a7f9f" ${l?`fill-opacity=".5" stroke="#2a7f9f" stroke-dasharray="4 3"`:``}/>
      <text class="bar-val" x="${s+r/2}" y="${c-5}" text-anchor="middle" font-size="12.5" fill="#3b2c1d">${i.toLocaleString()}</text>
      <text x="${s+r/2}" y="161" text-anchor="middle" font-size="12" fill="#6a5541">${X(e.labels[a])}</text></g>`}).join(``),a=e.labels.some(e=>/月/.test(e));return`<figure class="chart" style="margin:0"><h4>${X(e.title)}（${e.unit}）</h4>
    <svg viewBox="0 0 420 170" role="img" aria-label="${X(e.title)}長條圖"><line x1="26" x2="394" y1="144" y2="144" stroke="#c9b48c"/>${i}</svg>
    ${a?`<p class="note">虛線長條只統計到 10 月，不是全年數字。</p>`:``}
    ${B_({head:e.head,rows:e.rows})}</figure>`}function B_({head:e,rows:t,total:n}){let r=e=>/^[\d,.]+$/.test(String(e)),i=t.map((e,i)=>`<tr class="${n&&i===t.length-1?`total`:``}">${e.map(e=>`<td class="${r(e)?`num`:``}">${X(e)}</td>`).join(``)}</tr>`).join(``);return`<div class="tbl-wrap"><table class="t"><thead><tr>${e.map((e,n)=>`<th class="${t.every(e=>r(e[n]))?`num`:``}">${X(e)}</th>`).join(``)}</tr></thead><tbody>${i}</tbody></table></div>`}function V_(e,t){return`<div class="acts">${e.items.map((t,n)=>`
    <article class="act ${n===0?`open`:``}" data-act="${n}">
      <button data-toggle aria-expanded="${n===0}"><b>${n+1}</b><span>${X(t.title)}</span><i>›</i></button>
      <div class="act-body"><dl>
        <dt>${X(e.labels[0])}</dt><dd>${X(t.meaning)}</dd>
        <dt>${X(e.labels[1])}</dt><dd>${X(t.how)}</dd></dl>
        ${t.photos.length?`<div class="act-photos">${t.photos.map(L_).join(``)}</div>`:``}
      </div></article>`).join(``)}</div>`}function H_(e){return`<div class="routes">${e.items.map((e,t)=>`
    <article class="act route ${t===0?`open`:``}" data-act="${t}">
      <button data-toggle aria-expanded="${t===0}"><em class="grade" style="font-style:normal">${X(e.grade)}</em><span>${X(e.title)}<small class="face">${X(e.face)}</small></span><i>›</i></button>
      <div class="act-body"><dl>
        <dt>地方特色</dt><dd>${X(e.feature)}</dd>
        <dt>閱讀文本</dt><dd>${X(e.texts)}</dd>
        <dt>教學活動</dt><dd>${X(e.how)}</dd>
        <dt>閱讀理解與策略</dt><dd class="strat">${e.strategy.map(e=>`<span class="chip">${X(e.replace(/^\d\./,``))}</span>`).join(``)}</dd>
        <dt>成果檢核</dt><dd>${X(e.check)}</dd></dl>
        <div class="act-photos">${e.photos.map(L_).join(``)}</div>
      </div></article>`).join(``)}</div>`}function U_(e){return`<div class="ilr" data-ilr>
    <div class="ilr-grades" role="tablist">${e.grades.map((e,t)=>`<button class="${t===0?`on`:``}" data-grade="${t}">${X(e)}</button>`).join(``)}</div>
    <div class="ilr-list">${(t=>e.rows.map(e=>`<div class="ilr-row"><b>${X(e.topic)}<small>${X(e.facet)}</small></b><span>${X(e.cells[t])}</span></div>`).join(``))(0)}</div></div>`}function W_(e,t,n){return k_[e].tabs[t].blocks.find(e=>e.t===`ilr`).rows.map(e=>`<div class="ilr-row"><b>${X(e.topic)}<small>${X(e.facet)}</small></b><span>${X(e.cells[n])}</span></div>`).join(``)}var G_=()=>`<div class="live-res" data-live-res><div class="big"><div class="gauge"><i data-res-fill style="height:0"></i></div>
  <div class="res-num"><strong data-res-level>第五冊會考必考比重</strong><p data-res-note>即時文法熱度指標</p></div></div>
  <dl data-res-more></dl></div>`;function K_(e,t){switch(e.t){case`lead`:return`<p class="lead">${X(e.text)}</p>`;case`p`:return`<p>${X(e.text)}</p>`;case`h`:return`<h3 class="block-h">${X(e.text)}</h3>`;case`list`:return`<ul class="bullets">${e.items.map(e=>`<li>${X(e)}</li>`).join(``)}</ul>`;case`stats`:return`<div class="stats">${e.items.map(e=>`<div class="stat"><b>${X(e.n)}<small>${X(e.u)}</small></b><span>${X(e.label)}</span></div>`).join(``)}</div>`;case`timeline`:return`<div class="timeline">${e.items.map(e=>`<div class="tl" style="--k:${e.color}"><h4>${X(e.stage)}<small>民國 ${X(e.years)} 年</small></h4><div class="goal">${X(e.goal)}</div><ul>${e.items.map(e=>`<li>${X(e)}</li>`).join(``)}</ul></div>`).join(``)}</div>`;case`goals`:return`<div class="goals">${e.items.map(e=>`<div class="goal-card" style="--k:${e.c}"><b>${X(e.k)}</b><small>${X(e.sub)}</small><p>${X(e.text)}</p></div>`).join(``)}</div>`;case`themes`:return`<div class="themes">${e.items.map(e=>`<button class="theme" data-goto="${e.id}" style="--k:${t.color(e.id)}"><em>${X(e.k)}</em><b>${X(e.name)}</b><span>${X(e.text)}</span></button>`).join(``)}</div>`;case`activities`:return V_(e);case`routes`:return H_(e);case`photos`:return`<div class="grid-photos">${e.items.map(L_).join(``)}</div>`;case`fig`:return R_(e.item);case`steps`:return`<div class="steps">${e.items.map(e=>`<div><b>${X(e.k)}</b>${X(e.text)}</div>`).join(``)}</div>`;case`table`:return B_(e);case`chart`:return z_(e.data);case`ilr`:return U_(e);case`chips`:return`<div><div class="chips-label">${X(e.label)}</div><div class="chips">${e.items.map(e=>`<span class="chip">${X(e)}</span>`).join(``)}</div></div>`;case`domains`:case`cards`:return`<div class="cards">${e.items.map(e=>`<div class="cardlet"><b>${X(e.k)}</b>${X(e.text)}</div>`).join(``)}</div>`;case`columns`:return`<div class="cols">${e.items.map(e=>`<div class="cardlet"><b>${X(e.k)}</b><ul class="bullets">${e.items.map(e=>`<li>${X(e)}</li>`).join(``)}</ul></div>`).join(``)}</div>`;case`badges`:return`<div class="badges">${e.items.map(e=>{let t=`./images/badge/${e.id}.webp`;return`<button data-lb="${P_({...e,src:t})}"><img loading="lazy" src="${t}" alt="${X(e.cap)}"><span>${X(e.cap)}</span></button>`}).join(``)}</div>`;case`live-reservoir`:return G_();default:return``}}function q_(e){let t=[],n=(e,n)=>{n&&t.push({tab:e,text:n})};return k_[e].tabs.forEach((e,t)=>{e.blocks.forEach(e=>{e.text&&n(t,e.text),e.t===`list`&&e.items.forEach(e=>n(t,e)),(e.t===`cards`||e.t===`domains`)&&e.items.forEach(e=>n(t,`${e.k}：${e.text}`)),e.t===`activities`&&e.items.forEach(e=>n(t,`${e.title}：${e.meaning} ${e.how}`)),e.t===`routes`&&e.items.forEach(e=>n(t,`${e.title}（${e.grade}）：${e.feature}`)),e.t===`photos`&&e.items.forEach(e=>n(t,e.cap)),e.t===`ilr`&&e.rows.forEach(e=>n(t,`${e.topic}：${e.cells.join(`、`)}`)),e.t===`table`&&e.rows.forEach(e=>n(t,e.join(`　`))),e.t===`timeline`&&e.items.forEach(e=>n(t,`${e.stage}（${e.years}）：${e.items.join(`、`)}`)),e.t===`goals`&&e.items.forEach(e=>n(t,`${e.k}：${e.text}`)),e.t===`columns`&&e.items.forEach(e=>n(t,`${e.k}：${e.items.join(`、`)}`))})}),t}var J_=`book5-read`,Y_=()=>({done:{},tried:{},run:null}),X_={get(){try{return{...Y_(),...JSON.parse(localStorage.getItem(J_))}}catch{return Y_()}},set(e){try{localStorage.setItem(J_,JSON.stringify(e))}catch{}},clear(){try{localStorage.removeItem(J_)}catch{}}},Z_=()=>new Intl.DateTimeFormat(`en-CA`,{timeZone:`Asia/Taipei`}).format(new Date),Q_=(e=X_.get())=>Object.keys(e.done).length,$_=e=>e.replace(/\s*[.．]\s*/g,`・`);function ev(e,t){let n={};return e.filter(e=>e.b===t).forEach(e=>{n[e.k]=(n[e.k]||0)+1}),Object.keys(n).sort((e,t)=>e.localeCompare(t,`zh-Hant`)).map(e=>({k:e,n:n[e]}))}function tv(e,t){return e.done[t]?`done`:`open`}function nv(e){for(let t=e.length-1;t>0;t--){let n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e}function rv(e,t,n,r){let i=nv(t.filter(e=>e.k===n&&e.b===r).slice());return e.tried[n]=Z_(),e.run={k:n,band:r,state:`play`,picks:[],levels:i.map(e=>{let t=nv(e.o.map((e,t)=>t));return{q:e.q,o:t.map(t=>e.o[t]),a:t.indexOf(e.a),x:e.x||``}})},e.run}function iv(e,t){let n=e.run;n&&n.state===`play`&&(n.picks.push(t),n.picks.length<n.levels.length||(n.score=n.levels.filter((e,t)=>n.picks[t]===e.a).length,n.state=n.score===n.levels.length?`pass`:`fail`,n.state===`pass`&&(e.done[n.k]={date:Z_(),n:n.levels.length})))}var av=`<ul class="ch-rules">
  <li>挑選一篇第五冊會考精選閱讀選文，完成全部題目</li>
  <li>作答中暫時不公布對錯，挑戰真正讀懂整篇文章與上下文推理！</li>
  <li>全部答對才算通過該篇選文；若未全對可隨時再重新挑戰同一篇</li>
  <li>通過 3 篇選文，即可領取翠綠「第五冊閱讀達人」紀念證書</li>
</ul>`;function ov(e=X_.get()){let t=Object.keys(e.done),n=Math.max(3,t.length);return`<div class="rd-shelf" aria-label="第五冊閱讀書架：完成 ${t.length} 篇">${Array.from({length:n},(e,n)=>{let r=t[n];return r?`<span class="rd-spine on" title="${X($_(r))}">${X($_(r))}</span>`:`<span class="rd-spine"></span>`}).join(``)}</div>`}function sv(e,t){return e.length?`<div class="rd-books">${e.map(({k:e,n},r)=>{let i=tv(t,e),a=i===`done`?`✔ 已過關`:t.run?.k===e&&t.run.state===`play`?`繼續作答`:`${n} 題`;return`<button class="rd-book ${i}" ${i===`open`?`data-act="rdStart" data-book="${r}"`:`disabled`}><strong>${X($_(e))}</strong><span>${a}</span></button>`}).join(``)}</div>`:`<p class="note">小羊兒老師正在編修閱讀題組！</p>`}function cv(e){let t=e.picks.length,n=e.levels[t],r=e.levels.length,i=n.o.map((e,t)=>`<button class="quiz-opt ch-opt" data-rd="${t}">${X(e)}</button>`).join(``);return`<div class="ch-top"><span class="ch-lv" style="--c:#2f8f7a">第 ${t+1} 題／${r}</span><span class="rd-hint">挑戰結束一次揭曉正解與解析</span></div>
    <p class="ch-ctx">📚 ${X($_(e.k))}</p>
    <p class="quiz-q" style="white-space:pre-line">${X(n.q)}</p>${i}
    <div class="ch-pips">${e.levels.map((e,n)=>`<i class="${n<t?`ok`:``}" style="--c:#2f8f7a"></i>`).join(``)}</div>`}function lv(e){return`<ol class="rd-review">${e.levels.map(e=>`<li><strong>${X(e.q)}</strong><span>答案：${X(e.o[e.a])}</span>${e.x?`<small>${X(e.x)}</small>`:``}</li>`).join(``)}</ol>`}var uv=`book5-hippo-cert`,dv=2e3,fv=1414,pv=`"LXGW WenKai TC", "Noto Sans TC", "PingFang TC", "Microsoft JhengHei", serif`,mv=`#3b2c1d`,hv={6:{title:`英語尋寶探險家`,color:`#1f7a9c`,box:[360,240,1680,1090]},12:{title:`英語尋寶小達人`,color:`#b5571a`,box:[390,275,1640,1125]},M:{title:`第五冊文法達人`,color:`#7a3f8f`,box:[360,290,1650,1110]},R:{title:`第五冊閱讀達人`,color:`#24705f`,box:[350,285,1650,1025]}},gv={get(){try{return JSON.parse(localStorage.getItem(uv))}catch{return null}},set(e){try{localStorage.setItem(uv,JSON.stringify(e))}catch{}},clear(){try{localStorage.removeItem(uv)}catch{}}},_v=()=>new Intl.DateTimeFormat(`en-CA`,{timeZone:`Asia/Taipei`}).format(new Date);function vv(e,t,n,r){var i;let a=gv.get()||{cls:t,name:n,dates:{}};if((i=a.dates)[e]||(i[e]=_v()),r){var o;a.scores||(a.scores={}),(o=a.scores)[e]||(o[e]=r)}return gv.set(a),a}var yv=e=>/^[\p{L}\p{M}·‧．]{1,12}$/u.test(e);async function bv(){return[]}function xv(e,t){let n=t.dates[e],[r,i,a]=n.split(`-`),o=2166136261;for(let r of`${e}|${t.cls}|${t.name}|${n}`)o=Math.imul(o^r.codePointAt(0),16777619);return`${r-1911}${i}${a}-${e}-${(o>>>0).toString(16).slice(-4).toUpperCase().padStart(4,`0`)}`}var Sv=e=>new Promise((t,n)=>{let r=new Image;r.onload=()=>t(r),r.onerror=n,r.src=e});function Cv(e,t,n,r,i,a={}){let{weight:o=700,color:s=mv,max:c=1100,align:l=`center`}=a;e.textAlign=l,e.fillStyle=s,e.font=`${o} ${i}px ${pv}`;let u=e.measureText(t).width;u>c&&(e.font=`${o} ${Math.floor(i*c/u)}px ${pv}`),e.fillText(t,n,r)}function wv(e,t){let n=hv[e];return e===`R`?[`完成 ${t.scores?.R||3} 篇第五冊會考閱讀選文並全數答對`,`榮獲「${n.title}」`,`會考閱讀精準掌握・自信迎向滿分 A++！`]:e===`M`?[`完成第五冊十二座文法島闖關挑戰，12 題答對 ${t.scores?.M||10} 題`,`榮獲「${n.title}」`,`完成式・被動式・關代全制霸・繼續挑戰第四階段閱讀達人！`]:[`走遍國中英語第五冊 3D 浮空群島，尋獲 ${e} 隻小河馬`,`榮獲「${n.title}」`,`集滿 12 隻與全島印章，即可挑戰第五冊文法達人！`]}async function Tv(e,t){let n=hv[e],[r,i,a,o]=n.box,s=(r+a)/2,[c,l,u]=t.dates[e].split(`-`).map(Number),d=`${t.cls}　${t.name}　同學`,[f,p,m]=wv(e,t),h=`國中英語第五冊 3D 浮空群島　小羊兒老師`,g=`中華民國 ${c-1911} 年 ${l} 月 ${u} 日　第 ${xv(e,t)} 號`,_=`榮譽證書${d}${f}${p}${m}${h}${g}`;await Promise.all([700,400].map(e=>document.fonts.load(`${e} 60px "LXGW WenKai TC"`,_).catch(()=>null)));let[v,y]=await Promise.all([Sv(`./cert/bg${e}.webp`),Sv(`./brand/school-logo-512.png`)]),b=document.createElement(`canvas`);b.width=dv,b.height=fv;let x=b.getContext(`2d`);x.drawImage(v,0,0,dv,fv);let S=Math.min(1,(o-i)/820),C=e=>i+e*S,w=e=>Math.round(e*S);return x.drawImage(y,s-62*S,C(30),124*S,124*S*y.height/y.width),Cv(x,`榮譽證書`,s,C(262),w(98),{color:n.color}),Cv(x,d,s,C(380),w(66)),Cv(x,f,s,C(472),w(46),{weight:400}),Cv(x,p,s,C(572),w(66),{color:n.color}),Cv(x,m,s,C(652),w(40),{weight:400}),Cv(x,h,s,o-92*S,w(38),{max:840}),Cv(x,g,s,o-44*S,w(30),{weight:400,max:840}),new Promise(e=>b.toBlob(e,`image/jpeg`,.92))}function Ev(e){document.querySelector(`#certPrint`)?.remove();let t=document.createElement(`img`);t.id=`certPrint`,t.alt=`國中英語第五冊 3D 浮空群島榮譽證書`,t.onload=()=>{window.addEventListener(`afterprint`,()=>t.remove(),{once:!0}),window.print()},t.src=e,document.body.append(t)}function Dv({hippos:e,stamps:t,passed:n,playing:r}){let i=[6,12].map(t=>{let n=hv[t],r=e>=t;return`<button class="cert-tier ${r?`on`:``}" style="--c:${n.color}" ${r?`data-act="certOpen" data-level="${t}"`:`disabled`}><small>第${t===6?`一`:`二`}段</small><strong>${n.title}</strong><span>找到 ${t} 隻</span><b>${r?`領取證書`:`還差 ${t-e} 隻`}</b></button>`}),a=hv.M,o=e>=12&&t>=12,s=[e<12?`${12-e} 隻`:``,t<12?`${12-t} 枚章`:``].filter(Boolean).join(`、`),c=n?`<button class="cert-tier on" style="--c:${a.color}" data-act="certOpen" data-level="M"><small>第三段</small><strong>${a.title}</strong><span>通過 12 島文法挑戰</span><b>領取證書</b></button>`:`<button class="cert-tier ${o?`on go`:`lock`}" style="--c:${a.color}" data-act="challenge"><small>第三段</small><strong>${a.title}</strong><span>12 隻＋12 枚章＋文法挑戰</span><b>${o?r?`繼續挑戰`:`開始挑戰`:`還差 ${s}`}</b></button>`,l=hv.R,u=Q_(),d=n?u>=3?`<button class="cert-tier on" style="--c:${l.color}" data-act="certOpen" data-level="R"><small>第四段</small><strong>${l.title}</strong><span>精熟 ${u} 篇閱讀</span><b>領取證書</b></button>`:`<button class="cert-tier on go" style="--c:${l.color}" data-act="read"><small>第四段</small><strong>${l.title}</strong><span>精熟 ${u} / 3 篇</span><b>${u?`繼續閱讀挑戰`:`開始閱讀挑戰`}</b></button>`:`<button class="cert-tier lock" style="--c:${l.color}" data-act="read"><small>第四段</small><strong>${l.title}</strong><span>通過 3 篇第五冊選文</span><b>先成為文法達人</b></button>`;return`<div class="cert-tiers">${i.join(``)}${c}${d}<div class="cert-tier soon"><small>第五段</small><strong>會考總模擬</strong><span>跨冊模擬與第六冊預告</span><b>敬請期待</b></div></div>`}var Ov=`book5-challenge`,kv=ih.map(e=>e.id),Av=Object.fromEntries(ih.map(e=>[e.id,e])),jv=d_.map(([e,t,n,r,i])=>({b:e,i:t,q:n,o:r,a:0,x:i,c:``})),Mv={get(){try{return JSON.parse(localStorage.getItem(Ov))}catch{return null}},set(e){try{localStorage.setItem(Ov,JSON.stringify(e))}catch{}},clear(){try{localStorage.removeItem(Ov)}catch{}}};async function Nv(){return{items:jv,books:f_}}function Pv(e){for(let t=e.length-1;t>0;t--){let n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e}var Fv=e=>e.length===2&&/^[對是○◯Oo]$/.test(e[0].trim());function Iv(e,t,n=[]){let r=new Set,i=e=>{let t=e.filter(e=>!r.has(e.q)),i=t.filter(e=>!n.includes(e.q)),a=i.length?i:t;return a.length?a[Math.floor(Math.random()*a.length)]:null},a=t.filter(t=>t.b===e);return{band:e,levels:kv.map(t=>{let n=i(a.filter(e=>e.i===t))||i(jv.filter(n=>n.b===e&&n.i===t))||i(jv.filter(e=>e.i===t))||jv.find(e=>e.i===t);r.add(n.q);let o=n.o.map((e,t)=>t);return Fv(n.o)||Pv(o),{i:t,q:n.q,c:n.c||``,o:o.map(e=>n.o[e]),a:o.indexOf(n.a),x:n.x||``}}),picks:[],wrong:0,state:`play`}}function Lv(e,t){let n=e.levels[e.picks.length];return e.picks.push(t),t!==n.a&&(e.wrong+=1),e.wrong>2?e.state=`fail`:e.picks.length===kv.length&&(e.state=`pass`,e.score=kv.length-e.wrong),t===n.a}var Rv=e=>`<span class="ch-life" aria-label="還可以答錯 ${2-e.wrong} 題">${Array.from({length:2},(t,n)=>`<i class="${n<2-e.wrong?`on`:``}">♥</i>`).join(``)}</span>`,zv=(e,t)=>`<div class="ch-pips">${e.levels.map((n,r)=>`<i class="${r<t?e.picks[r]===n.a?`ok`:`no`:``}" style="--c:${Av[n.i].color}"></i>`).join(``)}</div>`;function Bv(e,t,n){let r=e.levels[t],i=Av[r.i],a=lh[r.i],o=e.picks[t],s=r.o.map((e,t)=>`<button class="quiz-opt ch-opt ${n?t===r.a?`right`:t===o?`wrong`:`dim`:``}" data-ch="${t}"${n?` disabled`:``}>${X(e)}</button>`).join(``),c=o===r.a,l=e.state!==`play`,u=e.state===`fail`?`看挑戰結果`:e.state===`pass`?`完成挑戰！`:`下一關 ›`,d=n?`<div class="ch-fb ${c?`ok`:`no`}" role="status"><strong>${c?`答對了！`:`答錯了，正確答案是「${X(r.o[r.a])}」`}</strong>${r.x?`<p>${X(r.x)}</p>`:``}
    <button class="cta ${l?`koi`:`lake`}" data-act="${l?`chEnd`:`chNext`}">${u}</button></div>`:``;return`<div class="ch-top"><span class="ch-lv" style="--c:${i.color}">第 ${t+1} 關／12｜${X(i.name)}</span>${Rv(e)}</div>
    <div class="ch-hippo">${g_}<p><b>${X(a.name)}</b>${X(u_[r.i])}</p></div>
    <p class="ch-state${n&&c?` done`:``}">島上狀況：${X(l_[r.i][n&&c?1:0])}${n&&!c?`（還沒解開）`:``}</p>
    ${r.c?`<p class="ch-ctx">${X(r.c)}</p>`:``}
    <p class="quiz-q">${X(r.q)}</p>
    <button class="ch-book" data-act="chBook">📖 ${n?`到${X(i.name)}看更多`:`翻開${X(i.name)}的文法筆記找答案`}</button>${s}${d}${zv(e,n?t+1:t)}`}var Vv=`<ul class="ch-rules">
  <li>十二座浮空島各出一關第五冊精選文法題，由守護小河馬把關</li>
  <li>12 題須答對 10 題，最多僅能失誤 2 題</li>
  <li>不確定答案時，可隨時按下「翻開文法筆記找答案」飛去看教學重點再作答</li>
  <li>挑戰失手可立即重新挑戰，題庫會自動輪換新題目！</li>
</ul>`,Hv={0:[`晴天`,`☀️`,.02],1:[`晴時多雲`,`🌤️`,.12],2:[`多雲`,`⛅`,.3],3:[`陰天`,`☁️`,.72],45:[`起霧`,`🌫️`,.7],48:[`起霧`,`🌫️`,.7],51:[`毛毛雨`,`🌦️`,.7],53:[`毛毛雨`,`🌦️`,.75],55:[`毛毛雨`,`🌦️`,.8],61:[`下雨`,`🌧️`,.85],63:[`下雨`,`🌧️`,.9],65:[`大雨`,`🌧️`,1],80:[`陣雨`,`🌦️`,.8],81:[`陣雨`,`🌧️`,.88],82:[`強陣雨`,`⛈️`,1],95:[`雷雨`,`⛈️`,1],96:[`雷雨`,`⛈️`,1],99:[`雷雨`,`⛈️`,1]},Uv={51:.3,53:.4,55:.5,61:.6,63:.8,65:1,80:.6,81:.8,82:1,95:1,96:1,99:1},Wv=e=>{let t=e.slice(11,16).split(`:`);return+t[0]+t[1]/60};async function Gv(e,t=12e3){let n=new AbortController,r=setTimeout(()=>n.abort(),t);try{let t=await fetch(e,{signal:n.signal,cache:`no-cache`});if(!t.ok)throw Error(t.status);return await t.json()}finally{clearTimeout(r)}}async function Kv(){let e=await Gv(`https://api.open-meteo.com/v1/forecast?latitude=${th.lat}&longitude=${th.lon}&current=temperature_2m,apparent_temperature,relative_humidity_2m,weather_code,wind_speed_10m,wind_gusts_10m&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max,sunrise,sunset&timezone=Asia%2FTaipei&forecast_days=1`),t=e.current,n=t.weather_code,[r,i,a]=Hv[n]||[`多雲`,`⛅`,.3];return{label:r,icon:i,cloud:a,rain:Uv[n]||0,thunder:n>=95,wind:t.wind_speed_10m,gust:t.wind_gusts_10m,temp:Math.round(t.temperature_2m),feels:Math.round(t.apparent_temperature),humidity:t.relative_humidity_2m,max:Math.round(e.daily.temperature_2m_max[0]),min:Math.round(e.daily.temperature_2m_min[0]),pop:e.daily.precipitation_probability_max[0],sunrise:Wv(e.daily.sunrise[0]),sunset:Wv(e.daily.sunset[0])}}async function qv(){return null}var Jv=62,Yv=.5;function Xv(e,t){return t?.closed||t?.tomorrow?{kind:t.typhoon||t.warning?`typhoon`:`closure`,info:t.info,scene:!0}:t?.warning===`land`?{kind:`land`,info:t.headline,name:t.name,scene:!0}:e&&e.gust>=Jv&&e.rain>=Yv?{kind:`gale`,gust:e.gust,scene:!0}:t?.warning===`sea`?{kind:`sea`,info:t.headline,name:t.name,scene:!1}:null}async function Zv(){let e=await Gv(`https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${th.lat}&longitude=${th.lon}&current=us_aqi,pm2_5&timezone=Asia%2FTaipei`),t=Math.round(e.current.us_aqi),n=t<=50?`良好`:t<=100?`普通`:t<=150?`對敏感族群不佳`:`不佳`;return{aqi:t,pm25:e.current.pm2_5,level:n}}async function Qv(){let e=[],t=[];try{e=JSON.parse(localStorage.getItem(`smes-stamps`)||`[]`),t=JSON.parse(localStorage.getItem(`smes-hippos`)||`[]`)}catch{}let n=Math.max(.25,Math.min(1,(e.length+t.length)/24));return{level:200+n*45,stamps:e.length,hippos:t.length,ratio:n,time:new Date().toISOString()}}async function $v(){let e=new Intl.DateTimeFormat(`en-CA`,{timeZone:`Asia/Taipei`}).format(new Date);return{updated:Date.now(),items:[{title:`【L1 核心必讀】have/has + p.p. 與 since / for 時間軸總整理`,url:`#/course`,tag:`公告`,by:`教務・小羊兒老師`,date:e},{title:`【L1 易混淆區】been to / gone to / been in 現場實境演練`,url:`#/inquiry`,tag:`活動`,by:`英語社群`,date:e},{title:`【L2～L3 雙星】情緒分詞（-ing/-ed）與 make 被動必還原 to VR`,url:`#/admin`,tag:`資源`,by:`教學研究組`,date:e},{title:`【L4 名詞子句】間接問句絕不倒裝 & if「是否」必須保留 will`,url:`#/results`,tag:`研習`,by:`九年級備課群`,date:e},{title:`【L5～L6 終極關卡】關代主受格省略規則＆介系詞＋whom/which`,url:`#/future`,tag:`公告`,by:`教務・會考專區`,date:e},{title:`【架構致謝】感謝阿凱老師 smes-island 與黃泓諺老師線上焰兒研習`,url:`#/core`,tag:`資源`,by:`小羊兒老師`,date:e}]}}var ey=(e=new Date)=>{let t=Object.fromEntries(new Intl.DateTimeFormat(`zh-TW`,{timeZone:`Asia/Taipei`,month:`numeric`,day:`numeric`,weekday:`long`,hour:`2-digit`,minute:`2-digit`,hourCycle:`h23`}).formatToParts(e).map(e=>[e.type,e.value]));return{date:`${t.month} 月 ${t.day} 日`,week:t.weekday,time:`${t.hour}:${t.minute}`}},ty=`v1.0.0`,Z=(e,t=document)=>t.querySelector(e),ny=(e,t=document)=>[...t.querySelectorAll(e)],ry=Object.fromEntries(ih.map(e=>[e.id,e])),iy=ih.map(e=>e.id),ay=()=>window.innerWidth<=860,oy=window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,sy={get(e,t){try{let n=localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}},set(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch{}}},Q={island:null,tab:0,listing:!1,touring:!1,walking:!1,tourPaused:!1,tourIdx:0,labels:!0,arcs:!1,paused:!1,time:`live`,stamps:new Set(sy.get(`smes-stamps`,[])),hippos:new Set(sy.get(`smes-hippos`,[])),res:null,weather:null,air:null,news:[]},$=null,cy=0;Z(`#app`).innerHTML=`
<header class="topbar">
  <button class="brand card" data-act="home" aria-label="回到群島全景">
    <img src="./brand/school-logo.png" alt="小羊兒老師" width="50" height="50" style="border-radius:50%;object-fit:cover">
    <span><h1>國中英語第五冊 3D 浮空群島</h1><p>小羊兒老師領航｜完成式・被動式・情緒分詞・間接問句・關係代名詞</p></span>
  </button>
  <div class="quote card"><span class="tagline">今日英語口訣</span><blockquote id="quote"></blockquote><button class="again" data-act="quote" aria-label="換一句" title="換一句">↻</button></div>
  <div class="liveinfo card" id="liveinfo">
    <div class="date"><strong id="dDate"></strong><span id="dWeek"></span></div><span class="sep"></span>
    <div class="wx" id="wx"><i>⛅</i><div><strong>讀取天氣中…</strong><span>天象觀測站</span></div></div>
    <button class="wx-magic" id="wxMagic" data-act="wxMenu" aria-haspopup="dialog" aria-expanded="false" title="換個天氣看看群島的變化"><b aria-hidden="true">🪄</b><span>變天氣</span></button>
  </div>
</header>
<div class="wx-pop card" id="wxPop" role="dialog" aria-label="換個天氣看看" hidden>
  <div class="wx-pop-head"><strong>換個天氣看看</strong><button class="round" data-act="wxMenu" aria-label="關閉">×</button></div>
  <div class="wx-grid" id="wxGrid"></div>
  <p class="wx-note">每種天氣的畫面、人物對話、配樂和環境音都不一樣，記得打開音樂邊逛邊背英文喔！</p>
</div>

<aside class="watch card" id="watch" aria-label="第五冊瞭望台">
  <div class="watch-head"><span class="pulse"></span><h2>第五冊瞭望台</h2><button class="round" data-act="watch" aria-label="收起瞭望台" title="收起瞭望台，群島畫面更乾淨">×</button></div>
  <div class="watch-body">
    <p class="status-line" id="schoolState"></p>
    <div class="tile quote-tile"><h3>今日英語口訣</h3><blockquote id="quoteTile"></blockquote><button class="watch-link" data-act="quote">換一句 ›</button></div>
    <button class="tile" data-act="res"><h3>文法探索進度</h3><div class="res-row"><div class="gauge"><i data-res-fill style="height:0"></i></div><div class="res-num"><strong data-res-level>讀取中…</strong><p data-res-note></p></div></div></button>
    <div class="tile"><h3>單元捷徑看板</h3><div class="ticker" id="newsTicker"><span class="tick"><span>載入複習焦點中…</span></span></div><button class="watch-link" data-act="log">看全部單元導覽 ›</button></div>
    <div class="tile"><h3>會考高頻考點</h3><div class="ticker" id="honorTicker"></div><button class="watch-link" data-act="honors">看完整考點排行 ›</button></div>
  </div>
</aside>

<section class="panel" id="panel" aria-label="島嶼內容" aria-hidden="true">
  <div class="panel-head">
    <button class="handle" data-act="tall" aria-label="展開或收合內容" aria-expanded="true"></button>
    <div class="ph-row"><button class="round" data-act="prev" aria-label="上一座島">‹</button><span class="kicker" id="pKicker"></span><strong class="peek-name" id="pPeek"></strong><button class="round" data-act="next" aria-label="下一座島">›</button><button class="round" data-act="close" aria-label="關閉">×</button></div>
    <h2 id="pTitle"></h2><p class="motto" id="pMotto"></p>
    <div class="tabs" id="pTabs" role="tablist"></div>
  </div>
  <div class="panel-body" id="pBody"></div>
  <div class="panel-foot"><button data-act="prev" id="footPrev"></button><button data-act="next" id="footNext"></button></div>
</section>

<div class="tourbar card" id="tourbar" hidden><div class="inner">
  <div class="tt"><h3 id="tTitle"></h3><span class="prog" id="tProg"></span></div><p id="tText"></p><p class="t-hippo" id="tHippo" hidden></p>
  <div class="ctl"><button data-act="tourPrev">‹ 上一座</button><button class="main" data-act="tourPause" id="tPause">暫停</button><button data-act="tourNext">下一座 ›</button><button data-act="tourMore" id="tMore">看完整介紹</button><button data-act="tourEnd">結束導覽</button></div>
  <div class="bar"><i id="tBar"></i></div>
</div></div>

<div class="walkbar card" id="walkbar" hidden>
  <div class="txt"><strong id="wTitle"></strong><span id="wText"></span></div>
  <div class="ctl"><button data-act="strollNext">換一隊</button><button data-act="strollIsland">看這座島</button><button class="main" data-act="strollEnd">結束逛島</button></div>
</div>

<button class="book-chip" id="bookChip" data-act="chBack" hidden></button>
<p class="ch-tip" id="chTip" aria-hidden="true" hidden><b>📝 題目在這裡</b><span>讀完題目，點選答案</span></p>
<button class="book-chip stamp-chip" id="stampChip" hidden></button>
<button class="storm-chip" id="stormChip" data-act="storm" hidden><b id="stormTitle"></b><span>點我看防颱小叮嚀</span></button>
<button class="hintcard card" id="hint" data-act="hint">
  <img src="./brand/teacher-praise.jpg" alt="小羊兒老師" width="44" height="44" style="border-radius:50%;object-fit:cover"><span><strong>點一座島，開始探索！</strong><span id="hintText"></span><span class="visit-line" id="visitLine" hidden>累計 <b id="visitTotal">0</b> 人次登島・今日 <b id="visitToday">0</b> 人</span></span>
</button>
<p class="credit">小羊兒老師製作｜致謝 <a class="site-credit__author" href="${th.teacherUrl}" target="_blank" rel="noopener noreferrer">阿凱老師 smes-island</a>・黃泓諺老師研習啟發</p>

<nav class="dock" aria-label="工具列">
  <button class="cta koi" data-act="mission">小河馬尋寶</button>
  <button class="cta lake" data-act="qr">掃碼登島</button>
  <button class="cta koi" data-act="quiz">找複習島</button>
  <button class="cta lake" data-act="tour" id="tourBtn">島嶼導覽</button>
  <button class="cta sun" data-act="stroll" id="strollBtn">跟著逛島</button>
  <button class="cta moss" data-act="passport">文法護照</button>
  <button class="cta koi" id="nextBtn" data-act="certReset" hidden>換下一位</button>
  <div class="seg" role="group" aria-label="檢視模式">
    <button class="on" data-view="home">全景</button><button data-view="top">鳥瞰</button><button data-view="list">清單</button>
  </div>
  <div class="seg" role="group" aria-label="場景工具">
    <button class="on" data-act="labels">島名</button>
    <button data-act="arcs">跨域串聯</button>
    <button data-act="pause" id="pauseBtn">暫停</button>
    <button data-act="music" id="musicBtn" aria-pressed="true">音樂</button>
    <button data-act="sfx" id="sfxBtn" aria-pressed="true">音效</button>
    <button data-act="time" id="timeBtn" title="換天氣、換時間">天氣・即時</button>
    <button class="on desk-only" data-act="tilt" id="tiltBtn" aria-pressed="true" title="模型感：畫面上下變模糊，讓群島看起來像桌上的小模型（攝影的移軸效果）">模型感</button>
    <button data-act="log">日誌</button>
    <button data-act="watch" id="watchBtn" aria-pressed="true" title="顯示或收起雲端瞭望台">瞭望台</button>
  </div>
</nav>
<button class="dock-nav prev" id="dockPrev" data-act="dockPrev" aria-label="往前看工具列" hidden>‹</button>
<button class="dock-nav next" id="dockNext" data-act="dockNext" aria-label="往後看更多工具" hidden>›</button>

<section class="listview" id="listview" aria-label="文字清單">
  <div class="wrap">
    <div class="list-head"><h2>全部文法島嶼</h2><div class="search"><input id="search" type="search" placeholder="搜尋第五冊文法，例如：完成式、been to、被動、間接問句、關代" aria-label="搜尋文法內容"></div></div>
    <div id="listBody"></div>
  </div>
  <footer class="site-footer">
    <div class="wrap">
      <div class="footer-inner">
        <div class="footer-brand"><img src="./brand/school-logo.png" alt="小羊兒老師" width="56" height="56" style="border-radius:50%;object-fit:cover"><div><strong>國中英語第五冊 3D 浮空群島</strong><span>小羊兒老師編製｜完成式・被動語態・情緒分詞・名詞子句・關係代名詞全覽</span></div></div>
        <ul class="footer-points">
          <li><span class="fp">英</span><div><strong>核心六大單元</strong><small>精編對照表與會考秒殺口訣</small></div></li>
          <li><span class="fp">闖</span><div><strong>十二關文法大冒險</strong><small>72+ 分級文法題與 5 篇素養閱讀</small></div></li>
          <li><span class="fp">謝</span><div><strong>開源架構傳承</strong><small>改編阿凱老師 smes-island & 黃泓諺老師研習</small></div></li>
        </ul>
        <nav class="footer-links" aria-label="快速連結">
          <a href="${th.site}" target="_blank" rel="noopener noreferrer">原架構 smes-island</a>
          <button data-act="log">單元捷徑</button>
          <button data-act="honors">高頻考點</button>
        </nav>
      </div>
      <div class="footer-bottom">
        <p class="site-credit">小羊兒老師編製｜改編自 <a href="${th.teacherUrl}" target="_blank" rel="noopener noreferrer" class="site-credit__author">阿凱老師 (cagoooo/smes-island)</a><span class="footer-school"><span class="footer-dot" aria-hidden="true">・</span>感謝黃泓諺老師線上焰兒研習指導</span></p>
        <p>${th.address}｜${th.phone}</p>
        <p class="version-tag" title="dev">${ty}</p>
      </div>
    </div>
  </footer>
</section>

<div class="modal" id="modal" role="dialog" aria-modal="true"><div class="dialog" id="dialog"></div></div>
<div class="lb" id="lb" role="dialog" aria-modal="true"><figure><div class="lb-view" id="lbView"><img id="lbImg" alt=""></div><figcaption><span id="lbCap"></span><a id="lbLink" target="_blank" rel="noopener" hidden>看原始報導 ↗</a><small>點圖片可放大</small></figcaption></figure>
  <button class="round x" data-act="lbClose" aria-label="關閉">×</button><button class="round p" data-act="lbPrev" aria-label="上一張">‹</button><button class="round n" data-act="lbNext" aria-label="下一張">›</button></div>
<div class="toast" id="toast" role="status"></div>`;var ly;function uy(e){let t=Z(`#toast`);t.textContent=e,t.classList.add(`on`),clearTimeout(ly),ly=setTimeout(()=>t.classList.remove(`on`),3200)}function dy(e,t=!1,n=!1){let r=Z(`#dialog`),i=Z(`#modal`).classList.contains(`peek`);Z(`#chTip`).hidden=!0,r.className=`dialog${t?` wide`:``}`,r.innerHTML=e,delete r.dataset.lock,Z(`#modal`).classList.toggle(`peek`,n),(n||i)&&(Z(`#watch`).classList.toggle(`away`,n||!!Q.island),rb()),Z(`#modal`).classList.add(`open`),Z(`.round[data-act="modalClose"]`,r)?.focus(),n?requestAnimationFrame(()=>$?.setInset(ay()?0:(r.offsetWidth+14)/2,ay()?r.offsetHeight/2-10:0)):i&&eb()}function fy(){let e=Z(`#modal`).classList.contains(`peek`);Z(`#chTip`).hidden=!0,Z(`#modal`).classList.remove(`open`,`peek`),e&&(Z(`#watch`).classList.toggle(`away`,!!Q.island),rb(),eb())}var py=e=>`<div class="dialog-head"><h2>${X(e)}</h2><button class="round" data-act="modalClose" aria-label="關閉">×</button></div>`,my=()=>Q.hippos.size>0||Q.stamps.size>0||!!gv.get()||!!Mv.get()||Q_()>0,hy=()=>Mv.get()?.state===`pass`,gy=()=>Q.hippos.size===12&&Q.stamps.size===12,_y=()=>({hippos:Q.hippos.size,stamps:Q.stamps.size,passed:hy(),playing:Mv.get()?.state===`play`}),vy=e=>e===`M`||e===`R`?e:+e,yy=e=>e===`M`?Mv.get()?.score:e===`R`?Q_():0,by=(e,t=!1)=>`<div class="handover${t?` quiet`:``}"><p>${e}</p><button class="cta ${t?`plain`:`koi`}" data-act="certReset">換下一位同學</button></div>`,xy=()=>{Z(`#nextBtn`).hidden=!my()};function Sy(){xy();let e=Q.hippos.size;Z(`#hintText`).textContent=e<12?`找到 6 隻、12 隻都能領證書，已找到 ${e} 隻`:hy()?Q_()>=3?`太棒了！你已獲得第五冊閱讀達人認證！`:`你是第五冊文法達人！還能挑戰第四段閱讀達人（${Q_()} / 3 篇）`:Q.stamps.size<12?`12 隻都找到了！再集滿 12 枚章，就能挑戰第五冊文法達人（${Q.stamps.size} / 12）`:`12 隻與 12 枚章全數集滿！快來挑戰「第五冊文法達人」！`}var Cy={core:25,admin:13.5,digital:10,future:11,inquiry:8.5,walk:7,library:8,results:9,teacher:7.5,brand:11,forest:7.5,course:5.5},wy={},Ty=new H,Ey=[];function Dy(){let e=Z(`#labels`);for(let t of ih){let n=document.createElement(`button`);n.className=`plate`,n.style.setProperty(`--c`,t.color),n.innerHTML=`<span class="dot"></span>${X(t.name)}<em>${X(t.tag)}</em><span class="quest-tag" hidden></span>`,n.addEventListener(`click`,()=>$y(t.id)),n.addEventListener(`pointerenter`,()=>$.setHover(t.id)),n.addEventListener(`pointerleave`,()=>$.setHover(null)),e.appendChild(n),wy[t.id]=n}}function Oy(e){let t=k_[e].tabs;for(let e=0;e<t.length;e++){let n=t[e].blocks.find(e=>e.t===`activities`||e.t===`routes`);if(n)return n.items.map((t,r)=>({label:(n.t===`routes`?t.title.replace(/^.*?-/,``):t.title.split(/-+/)[0]).split(` `)[0].replace(`石門國小`,``),tab:e,item:r}))}return t.map((e,t)=>({label:e.label,tab:t}))}function ky(e){Ay();let t=ry[e],n=$.islands[e].anchors,r=Oy(e).slice(0,n.length),i=Z(`#labels`);Ey=r.map((e,r)=>{let a=document.createElement(`button`);return a.className=`pin`,a.style.setProperty(`--c`,t.color),a.innerHTML=`<b>${r+1}</b>${ay()?``:X(e.label)}`,ay()&&a.setAttribute(`aria-label`,e.label),a.title=e.label,a.addEventListener(`click`,()=>{e_.state===`peek`&&e_.set(`half`),lb(e.tab),e.item!==void 0&&ub(e.item)}),i.appendChild(a),{el:a,anchor:n[r],spot:e}})}function Ay(){Ey.forEach(e=>e.el.remove()),Ey=[]}function jy(e,t,n,r){if(Ty.project(t),Ty.z>1){e.style.visibility=`hidden`;return}e.style.visibility=``;let i=(Ty.x*.5+.5)*n,a=(-Ty.y*.5+.5)*r;e.style.transform=`translate3d(${i.toFixed(1)}px,${a.toFixed(1)}px,0) translate(-50%,-50%)`}var My=null,Ny=null,Py;function Fy(){clearTimeout(Py),My?.remove(),My=Ny=Hy=null}var Iy={day:`☀️`,cloudy:`☁️`,rain:`🌧️`,storm:`🌀`,dusk:`🌇`,night:`🌙`};function Ly(e){let t=e.kind===`teacher`?`老師`:`小朋友`;return`<div class="say-box"><strong>${Iy[$.people.sky()]||``} ${t}・${X($.people.status(e.crew))}</strong><p>${X($.people.lineOf(e))}</p><div class="say-btns"><button data-act="sayMore">再聊一句</button><button data-act="sayFollow">跟著走</button></div></div>`}function Ry(e){kg.sfx(`pop`),Fy(),Ny=e,$.people.greet(e,$.camera),My=document.createElement(`div`),My.className=`say`,My.innerHTML=Ly(e),Z(`#labels`).appendChild(My),Py=setTimeout(Fy,9e3)}var zy=[],By=new Map,Vy=0,Hy=null,Uy=0;function Wy(e,t){return $.people.headOf(e,Ty),Ty.project(t),Ty.z<1&&Math.abs(Ty.x)<.85&&Ty.y<.7&&Ty.y>-.8}function Gy(e){let t=$.islands[e.id],n=t.group.position;return Ty.set(n.x+e.door.x,n.y+t.nav.y(e.door.x,e.door.z)+1.5,n.z+e.door.z)}function Ky(e,t,n){let r=$.people,i=performance.now();for(let a=zy.length-1;a>=0;a--){let o=zy[a];i>o.until||o.p.vis<.3||!r.storm&&!o.cheer?(o.el.remove(),zy.splice(a,1)):(r.headOf(o.p,Ty),jy(o.el,e,t,n))}let a=i<Uy;if((r.storm||a)&&i>Vy&&zy.length<(a?5:3)){Vy=i+(a?500+Math.random()*500:1600+Math.random()*1400);let t=new Set(zy.map(e=>e.p));Ny&&t.add(Ny);let n=r.list.filter(n=>(a||n.crew.state===`shelter`)&&n.crew.on&&n.vis>.8&&!t.has(n)&&Wy(n,e));if(n.length){let e=n[Math.floor(Math.random()*n.length)],t=document.createElement(`div`);t.className=`say auto${a?` cheer`:``}`,t.innerHTML=`<div class="say-box"><p>${X(a?r.pick(uh.cheer):r.tipOf(e))}</p></div>`,Z(`#labels`).appendChild(t),zy.push({p:e,el:t,until:i+3400,cheer:a})}}let o=new Set;if(r.storm)for(let i of r.indoor()){o.add(i.key);let r=By.get(i.key);if(!r){let e=document.createElement(`button`);e.className=`door-chat`,e.dataset.act=`doorTalk`,e.dataset.key=i.key,e.setAttribute(`aria-label`,`聽聽屋裡在聊什麼`),Z(`#labels`).appendChild(e),By.set(i.key,r={el:e,g:i,n:-1})}r.g=i,r.n!==i.n&&(r.n=i.n,r.el.innerHTML=`💬<b>${i.n}</b>`),Gy(i),jy(r.el,e,t,n)}for(let[e,t]of By)o.has(e)||(t.el.remove(),By.delete(e));Hy&&!o.has(Hy.key)&&Fy()}function qy(e){return`<div class="say-box"><strong>🌀 ${X(ry[e.id].name)}・屋裡有 ${e.n} 人在躲颱風</strong><p>${X($.people.indoorLine(e))}</p><div class="say-btns"><button data-act="doorMore">再聽一句</button></div></div>`}function Jy(e){kg.sfx(`pop`),Fy(),Hy=e,My=document.createElement(`div`),My.className=`say`,My.innerHTML=qy(e),Z(`#labels`).appendChild(My),Py=setTimeout(Fy,9e3)}function Yy(e){Fy(),Q.island&&sb(),Q.touring&&Sb(),Q.listing&&pb(!1),Q.walking=!0,document.body.classList.add(`walking`),document.body.classList.remove(`watch-force`),rb(),Z(`#walkbar`).hidden=!1,Z(`#strollBtn`).textContent=`結束逛島`,fb(``),$.follow(e),eb()}function Xy(e=!1){Q.walking&&(Q.walking=!1,document.body.classList.remove(`walking`),rb(),Z(`#walkbar`).hidden=!0,Z(`#strollBtn`).textContent=`跟著逛島`,$.unfollow(),eb(),e&&($.clearFocus(),$.setView(`home`),fb(`home`)))}function Zy(){let e=$.people.followed;if(!e)return;let t=e.teacher&&e.members.length>1?`跟著老師帶的隊伍`:e.teacher?`跟著老師`:`跟著小朋友`,n=$.people.status(e);Z(`#wTitle`).textContent!==t&&(Z(`#wTitle`).textContent=t),Z(`#wText`).textContent!==n&&(Z(`#wText`).textContent=n)}function Qy(e){let t=$.width,n=$.height;for(let r of ih){let i=$.islands[r.id].group.position;Ty.set(i.x,i.y+Cy[r.id],i.z),jy(wy[r.id],e,t,n)}let r=Q.island&&$.islands[Q.island].group;if(r)for(let i of Ey)Ty.copy(i.anchor).add(r.position),jy(i.el,e,t,n);My&&Ny&&($.people.headOf(Ny,Ty),jy(My,e,t,n)),My&&Hy&&(Gy(Hy),jy(My,e,t,n)),Ky(e,t,n),Q.walking&&Zy()}function $y(e,{tab:t=0,fly:n=!0,push:r=!0,keepSheet:i=!1}={}){Q.listing&&pb(!1,!1),Q.touring&&Sb(),Q.walking&&Xy(),Fy();let a=ry[e];Q.island=e,Q.tab=t;let o=Z(`#panel`),s=i&&e_.state===`peek`;o.style.setProperty(`--c`,a.color),Z(`#pKicker`).textContent=a.kicker,Z(`#pTitle`).textContent=a.name,Z(`#pPeek`).textContent=a.name,Z(`#pMotto`).textContent=a.motto,Z(`#pTabs`).innerHTML=k_[e].tabs.map((e,n)=>`<button role="tab" data-tab="${n}" class="${n===t?`on`:``}">${X(e.label)}</button>`).join(``);let c=iy.indexOf(e);Z(`#footPrev`).textContent=`‹ ${ry[iy[(c+iy.length-1)%iy.length]].name}`,Z(`#footNext`).textContent=`${ry[iy[(c+1)%iy.length]].name} ›`,cb(),o.classList.add(`open`),document.body.classList.add(`reading`),o.setAttribute(`aria-hidden`,`false`),Z(`#watch`).classList.add(`away`),rb(),Z(`#hint`).hidden=!0,Object.entries(wy).forEach(([t,n])=>n.classList.toggle(`off`,t!==e||ay())),$&&(n&&$.focusIsland(e,s),ky(e),$.setHoverRing(null)),r&&location.hash!==`#/${e}`&&history.pushState(null,``,`#/${e}`),kg.sfx(`whoosh`),Q.stamps.has(e)||(kg.sfx(`stamp`),Q.stamps.add(e),sy.set(`smes-stamps`,[...Q.stamps]),Sy(),Q.stampRun&&Q.hippos.size===12?Q.justStamped=a.name:Q.stamps.size===iy.length?uy(Q.hippos.size===12&&!hy()?`閱讀護照集滿了！到閱讀護照挑戰「尋河馬達人」吧`:`恭喜！閱讀護照十二枚印章全部集滿了`):uy(`閱讀護照蓋章：${a.name}（${Q.stamps.size} / 12）`)),Vb(),s||e_.reset(),fb(``),eb(),ob()}function eb(){$&&(Q.touring||Q.listing||Q.walking?$.setInset(0,0):Q.island?ay()?$.setInset(0,Math.min(e_.height,innerHeight*.6)/2-10):$.setInset((Z(`#panel`).offsetWidth+14)/2,0):$.setInset(ay()||Z(`#watch`).classList.contains(`shut`)?0:(Z(`#watch`).offsetWidth+14)/2,0))}function tb(e,t=!1){Z(`#watch`).classList.toggle(`shut`,!e),sy.set(`smes-watch`,e),rb(),eb(),!e&&!t&&uy(`瞭望台收起來了，下方工具列「瞭望台」可以再打開`)}var nb=()=>{let e=Z(`#watch`),t=ay()?e.classList.contains(`opened`):!e.classList.contains(`shut`);return e.classList.contains(`away`)||Q.listing?!1:t&&(!(Q.walking||Q.touring)||document.body.classList.contains(`watch-force`))};function rb(){let e=nb(),t=Z(`#watchBtn`);t.classList.toggle(`on`,e),t.setAttribute(`aria-pressed`,e)}window.addEventListener(`resize`,rb),window.addEventListener(`resize`,eb);function ib(){let e=Z(`#watch`);if(ay()){e.style.top=``,e.style.maxHeight=``;return}let t=Math.round(Z(`.topbar`).getBoundingClientRect().bottom+8);e.style.top=`${t}px`,e.style.maxHeight=`calc(100dvh - ${t+84}px)`}new ResizeObserver(ib).observe(Z(`.topbar`)),window.addEventListener(`resize`,ib);function ab(e,t){eb(),$&&Q.island&&(e===`peek`?$.focusIsland(Q.island,!0):t===`peek`&&$.focusIsland(Q.island))}function ob(){ay()&&!sy.get(`smes-sheet-tip`,!1)&&(sy.set(`smes-sheet-tip`,!0),setTimeout(()=>{Q.island&&uy(`內容往下滑可以收起來，看見整座島`)},3400))}function sb(e=!0){Q.island&&(Q.island=null,Z(`#panel`).classList.remove(`open`),e_.reset(),document.body.classList.remove(`reading`),Z(`#panel`).setAttribute(`aria-hidden`,`true`),Z(`#watch`).classList.remove(`away`),rb(),Z(`#hint`).hidden=!1,Object.values(wy).forEach(e=>e.classList.remove(`off`)),Ay(),$?.clearFocus(),$?.setView(`home`),fb(`home`),eb(),e&&history.pushState(null,``,location.pathname+location.search))}function cb(){let e=k_[Q.island].tabs[Q.tab];I_();let t={color:e=>ry[e].color},n=Z(`#pBody`);n.innerHTML=e.blocks.map(e=>K_(e,t)).join(``),n.scrollTop=0,ny(`#pTabs button`).forEach(e=>e.classList.toggle(`on`,+e.dataset.tab===Q.tab)),Z(`#pTabs .on`)?.scrollIntoView({inline:`center`,block:`nearest`}),Mx()}function lb(e){kg.sfx(`page`),Q.tab=e,cb()}function ub(e){let t=Z(`#pBody [data-act="${e}"]`);t&&(ny(`#pBody .act`).forEach(e=>{e.classList.toggle(`open`,e===t)}),t.classList.add(`flash`),setTimeout(()=>t.classList.remove(`flash`),1200),t.scrollIntoView({block:`start`,behavior:oy?`auto`:`smooth`}),Ey.forEach(t=>t.el.classList.toggle(`on`,t.spot.item===e)))}function db(e){$y(iy[(iy.indexOf(Q.island)+e+iy.length)%iy.length],{keepSheet:!0})}function fb(e){ny(`[data-view]`).forEach(t=>t.classList.toggle(`on`,t.dataset.view===e))}function pb(e,t=!0){Q.listing=e,document.body.classList.toggle(`listing`,e),Z(`#listview`).classList.toggle(`open`,e),e?(Q.island&&sb(!1),Q.touring&&Sb(),mb(``),fb(`list`),t&&history.pushState(null,``,`#/list`)):t&&history.pushState(null,``,location.pathname+location.search),$?.setPaused(e||Q.paused),eb()}function mb(e){let t=Z(`#listBody`),n=e.trim();if(!n){t.innerHTML=`<div class="island-grid">${ih.map(e=>`
      <button class="icard" data-open="${e.id}" style="--c:${e.color}"><small>${X(e.kicker)}</small><h3>${X(e.name)}</h3><p>${X(e.motto)}</p>
      <div class="sect">${k_[e.id].tabs.map(e=>`<span class="chip">${X(e.label)}</span>`).join(``)}</div></button>`).join(``)}</div>`;return}let r=[];for(let e of ih)for(let t of q_(e.id)){let i=t.text.indexOf(n);if(i<0)continue;let a=Math.max(0,i-26),o=(a?`…`:``)+t.text.slice(a,i+n.length+54);r.push({d:e,tab:t.tab,html:X(o).replace(X(n),`<mark>${X(n)}</mark>`)})}t.innerHTML=`<div class="results"><p class="note">找到 ${r.length} 筆與「${X(n)}」有關的內容</p>${r.slice(0,60).map(e=>`
    <button class="result" data-open="${e.d.id}" data-open-tab="${e.tab}"><b>${X(e.d.name)}</b> <small>${X(k_[e.d.id].tabs[e.tab].label)}</small><p>${e.html}</p></button>`).join(``)}</div>`}var hb=0,gb=9e3,_b=14e3,vb=ih.length+1,yb=()=>Q.tourIdx?gb:_b;function bb(){kg.sfx(`whoosh`);let e=ih[Q.tourIdx-1];Z(`#tProg`).textContent=`${Q.tourIdx+1} / ${vb}`,Z(`#tMore`).textContent=e?`看完整介紹`:`看尋寶任務`,Z(`#tHippo`).hidden=!e,hb=0,e?(Z(`#tTitle`).textContent=e.name,Z(`#tText`).textContent=e.tour,Z(`#tHippo`).textContent=Q.hippos.has(e.id)?`這座島的${lh[e.id].name}，你已經找到了！`:`這座島也躲著一隻小河馬！牠很會躲：轉一轉畫面，看看建築後面、高高的地方，找找閃閃發光的地方！`,$.focusIsland(e.id)):(Z(`#tTitle`).textContent=`小羊兒老師與小河馬尋寶任務`,Z(`#tText`).textContent=`每座島都躲著一隻守護小河馬！找到 6 隻、12 隻可領取紀念證書；集滿 12 枚護照印章再通過 12 島文法闖關，即可榮獲「第五冊文法達人」與「第五冊閱讀達人」證書！`,$.clearFocus(),$.setView(`home`),fb(`home`))}function xb(){Q.walking&&Xy(),Q.island&&sb(!1),Q.listing&&pb(!1,!1),Q.touring=!0,Q.tourPaused=!1,Q.tourIdx=0,document.body.classList.add(`touring`),document.body.classList.remove(`watch-force`),rb(),Z(`#tourbar`).hidden=!1,Z(`#tPause`).textContent=`暫停`,Z(`#tourBtn`).textContent=`結束導覽`,eb(),bb()}function Sb(e=!1){Q.touring=!1,document.body.classList.remove(`touring`),rb(),Z(`#tourbar`).hidden=!0,Z(`#tourBtn`).textContent=`島嶼導覽`,eb(),e&&($.clearFocus(),$.setView(`home`),fb(`home`))}function Cb(e){if(Q.touring&&!Q.tourPaused&&(hb+=e,Z(`#tBar`).style.width=`${Math.min(100,hb/yb()*100)}%`,hb>yb())){if(Q.tourIdx+1>=vb){Sb(!0),Ab();return}Q.tourIdx+=1,bb()}}function wb(e=0,t={}){if(e>=ph.length){let e=Object.entries(t).sort((e,t)=>t[1]-e[1])[0][0],n=mh[e];dy(`${py(`學習航線推薦`)}<div class="dialog-body quiz-result"><p>最適合你先攻克的第五冊浮空島是……</p><h3>${X(n.title)}</h3><p>${X(n.text)}</p><p style="margin-top:6px"><b>${X(ry[e].name)}</b>｜${X(ry[e].motto)}</p>
      <div class="btn-row"><button class="btn main" data-goto="${e}">飛去看看 ›</button><button class="btn" data-act="quiz">重新診斷</button></div><p class="note" style="margin-top:12px">這只是幫你快速挑出今日復習重點的小測驗，歡迎逛遍十二座島！</p></div>`);return}let n=ph[e];dy(`${py(`找尋專屬複習島`)}<div class="dialog-body"><p class="quiz-progress">第 ${e+1} 題 / 共 ${ph.length} 題</p><p class="quiz-q">${X(n.q)}</p>
    ${n.a.map(([t,n])=>`<button class="quiz-opt" data-quiz="${e}" data-k="${n}">${X(t)}</button>`).join(``)}</div>`),Z(`#dialog`).dataset.tally=JSON.stringify(t)}var Tb={typhoon:`颱風來襲中`,land:`陸上颱風警報`,sea:`颱風警報發布中`,closure:`桃園市停班停課`,gale:`強風豪雨警戒`,preview:`颱風模式預覽`},Eb=()=>Q.weather?Xv(Q.weather,Q.alert):null;function Db(){let e=Q.time===`typhoon`?{kind:`preview`,scene:!0}:Q.time===`live`?Eb():null;Z(`#stormChip`).hidden=!e,e&&(Z(`#stormTitle`).textContent=`🌀 ${Tb[e.kind]}`),Q.time===`live`&&Q.weather&&$?.setWeather({storm:!!e?.scene}),e?.scene&&Q.walking&&(Xy(!0),uy(`風雨太大，大家都進屋了，等天氣好再來逛島吧`))}function Ob(){let e=Q.time===`typhoon`?{kind:`preview`}:Eb();if(!e)return;let t={preview:`這是預覽畫面，不是真的有颱風。`,gale:`學校附近陣風每小時約 ${Math.round(e.gust)} 公里，正在下雨，外出要小心。`,typhoon:`桃園市：${e.info}`,closure:`桃園市：${e.info}`,land:`中央氣象署：${e.info}${e.name?`（${e.name}）`:``}`,sea:`中央氣象署：${e.info}${e.name?`（${e.name}）`:``}。學校附近目前不一定有風雨，請留意最新消息。`}[e.kind];dy(`${py(`防颱小叮嚀`)}<div class="dialog-body">
    <p class="storm-now">${X(t)}</p>
    <ul class="storm-tips">
      <li>待在室內，不要到河邊、水庫或山坡看風雨</li>
      <li>遠離窗戶、招牌和大樹，小心掉落物</li>
      <li>準備手電筒和飲用水，幫家人一起檢查門窗</li>
      <li>有沒有停班停課，以官方公告為準，不要聽信傳言</li>
      <li>待在家的時間，正好讀一本喜歡的書</li>
    </ul>
    <div class="btn-row"><a class="cta lake" href="https://www.cwa.gov.tw/V8/C/P/Typhoon/TY_NEWS.html" target="_blank" rel="noopener">氣象署颱風消息</a><a class="cta moss" href="https://www.dgpa.gov.tw/typh/daily/nds.html" target="_blank" rel="noopener">停班停課查詢</a></div>
    <p class="note" style="margin-top:10px">颱風警報來自中央氣象署開放資料，風雨資料來自 Open-Meteo，是依學校位置估算；停班停課資料來自行政院人事行政總處。更新可能有延遲，請以官方公告為準。</p></div>`)}async function kb(e=`site`){let t=e===`site`?`國中英語第五冊 3D 浮空群島（全部）`:ih.find(t=>t.id===e).name,n=window.location.href.split(`#`)[0],r=e===`site`?n:`${n}#/${e}`,i=`<p>QR Code 產生中…</p>`;try{i=await hf.toString(r,{type:`svg`,margin:2,width:320,color:{dark:`#3b2c1d`,light:`#fff9ed`}})}catch{i=`<p class="note">${X(r)}</p>`}dy(`${py(`掃碼登島`)}<div class="dialog-body qr-box">
    <div style="width:280px;max-width:100%;margin:0 auto">${i}</div>
    <p class="qr-name">${X(t)}</p>
    <p class="qr-tip">手機或平板打開相機掃描上方 QR Code，即可直接進入該座浮空文法島</p>
    <label class="qr-pick">要去哪一座文法島？<select id="qrPick"><option value="site">全部群島</option>${ih.map(t=>`<option value="${t.id}"${t.id===e?` selected`:``}>${X(t.name)}</option>`).join(``)}</select></label>
    <div class="btn-row"><button class="cta koi" data-act="qrBig">全班投影放大</button></div></div>`)}function Ab(){let e=Q.hippos.size,t=e<6?`再找 ${6-e} 隻，就能領「英語尋寶探險家」證書`:e<12?`再找 ${12-e} 隻，就能領金色的「英語尋寶小達人」證書`:hy()?`你已經通過第五冊 12 島文法大挑戰啦！`:Q.stamps.size<12?`全部找到了！再集滿 ${12-Q.stamps.size} 枚護照章，就能挑戰「第五冊文法達人」`:`全部集滿了！快點擊出發挑戰「第五冊文法達人」！`;sy.set(`smes-mission-seen`,!0),dy(`${py(`第五冊小河馬尋寶與闖關任務`)}<div class="dialog-body">
    <p>12 座浮空文法島上，各守護著一隻小河馬。收集牠們、開啟每一島複習並累積印章，就能一路勇奪四大高解析榮譽證書！</p>
    <ol class="mission">
      <li><strong>逛島點讀</strong><span>點一座島，或用「島嶼導覽」「跟著逛島」邊逛邊讀第五冊重點。</span></li>
      <li><strong>找守護小河馬</strong><span>放大畫面尋找閃閃發亮的小河馬，點一下即可聽口訣並收集圖鑑。</span></li>
      <li><strong>領尋寶證書</strong><span>找到 6 隻領「英語尋寶探險家」，12 隻領「英語尋寶小達人」。可在「文法護照」選擇班級姓名製作下載。</span></li>
      <li><strong>衝刺雙達人稱號</strong><span>集滿 12 隻小河馬與 12 枚護照章，依序解鎖紫色「第五冊文法達人」與翠綠「第五冊閱讀達人」！</span></li>
    </ol>
    <div class="stage3"><div><strong>第三段・第五冊文法達人</strong><span>集滿 12 隻＋12 枚印章，通過 12 島文法闖關（12 題答對 10 題，還可隨時翻書看筆記！），即可下載紫色「第五冊文法達人」證書！</span></div><button class="cta koi" data-act="challenge">看挑戰</button></div>
    <div class="stage3 stage-read"><div><strong>第四段・第五冊閱讀達人</strong><span>成為文法達人後，挑選 3 篇會考精選英文選文並全部答對，再拿翠綠「第五冊閱讀達人」證書！</span></div><button class="cta moss" data-act="read">看閱讀挑戰</button></div>
    <p class="mission-now">目前找到 <b>${e}</b> / 12 隻小河馬，${t}</p>
    ${my()?by(`需要清除進度重新體驗嗎？按這裡歸零紀錄。`):``}
    <div class="btn-row"><button class="cta koi" data-act="modalClose">開始尋寶</button><button class="cta moss" data-act="passport">看文法護照</button></div></div>`)}function jb(){dy(`${py(`第五冊文法探索護照`)}<div class="dialog-body">
    <p>點進並瀏覽一座島就會蓋一枚學習章。目前收集 <b>${Q.stamps.size}</b> / 12 枚印章、找到 <b>${Q.hippos.size}</b> / 12 隻小河馬。小河馬常躲在建築後面、樹叢旁或水池邊：試著旋轉放大尋找發光線索！</p>
    <div class="stamps">${ih.map(e=>`<button class="stamp ${Q.stamps.has(e.id)?`on`:``}" style="--c:${e.color}" data-goto="${e.id}">${X(e.name)}</button>`).join(``)}</div>
    <h3 class="hippo-title">榮譽證書里程碑</h3>
    <p>收集小河馬並完成每座島文法複習，就能依序解鎖四張高解析榮譽證書存檔紀念！</p>
    ${Dv(_y())}
    ${hy()?`<h3 class="hippo-title">第五冊閱讀書架（過關 ${Q_()} / 3 篇）</h3>${ov()}`:``}
    ${my()?by(`需要換另一位同學使用嗎？按這裡清除本機紀錄。`):``}
    <h3 class="hippo-title">守護小河馬文法圖鑑</h3>
    ${T_(Q.hippos)}
    ${Q.hippos.size===12?`<div class="btn-row"><button class="cta koi" data-act="finaleAgain">再慶祝一次</button></div>`:``}
    <p class="note" style="margin-top:10px">印章、小河馬與證書姓名僅儲存在你目前瀏覽器的本機儲存空間中，不會上傳外部伺服器。</p>
    </div>`)}function Mb(e){dy(`${py(`領取「${hv[e].title}」證書`)}<div class="dialog-body cert-form">
    <p>請填寫年級、班級與姓名，將直接繪製為你的高解析紀念證書！</p>
    <div class="cert-row"><label>年級<input id="certGrade" maxlength="10" autocomplete="off" placeholder="例：九 或 9"></label>
    <label>班級<input id="certRoom" maxlength="12" autocomplete="off" placeholder="例：15 或 十五"></label></div>
    <label>姓名<input id="certName" maxlength="12" autocomplete="off" placeholder="請輸入你的姓名"></label>
    <p class="cert-err" id="certErr" role="alert" hidden></p>
    <div class="btn-row"><button class="cta koi" data-act="certCheck" data-level="${e}">下一步</button></div>
    <p class="note" style="margin-top:10px">所有證書於本機瀏覽器即時繪製產生，可直接下載 JPG 或列印保存。</p></div>`),Z(`#certGrade`).focus()}var Nb=9e5;function Pb(){w_(),Ix.lbClose(),dy(`${py(`這台平板有上一位的紀錄`)}<div class="dialog-body">
    <p>這裡已經找到 <b>${Q.hippos.size}</b> 隻小河馬、蓋了 <b>${Q.stamps.size}</b> 枚章${gv.get()?`，也領過證書了`:``}。</p>
    <p>如果你是新來的同學，請按「我是新同學」重新開始，才能自己尋寶哦！</p>
    <div class="btn-row"><button class="cta koi" data-act="certResetGo">我是新同學，重新開始</button><button class="cta lake" data-act="modalClose">是我的，繼續尋寶</button></div></div>`),Z(`#dialog`).dataset.lock=`1`}function Fb(){let e=sy.get(`smes-last-active`,0);sy.set(`smes-last-active`,Date.now()),e&&Date.now()-e>Nb&&my()&&Pb()}var Ib=``;async function Lb(e){if(e===`M`&&!hy()){Rb();return}if(e===`R`&&(!hy()||Q_()<3)){ax();return}if(!gv.get()){Mb(e);return}let t=vv(e,``,``,yy(e)),n=bv();dy(`${py(`「${hv[e].title}」證書`)}<div class="dialog-body">
    <div class="cert-view" id="certView"><p>證書製作中…</p></div>
    <p class="cert-tip">${e===`M`?`恭喜成為第五冊文法達人！歡迎下載圖片保存紀念，並繼續挑戰第四段「第五冊閱讀達人」！`:e===`R`?`恭喜成為第五冊閱讀達人！你已經具備迎戰會考英文的滿滿自信！`:`這是專屬紀念證書，存起來或列印留念！集滿 12 隻小河馬與 12 枚護照印章，就能開啟「第五冊文法達人」大挑戰！`} 手機可長按圖片儲存。</p>
    <div class="btn-row"><a class="cta koi" id="certSave" download="英語第五冊-${hv[e].title}.jpg" hidden>下載證書</a><button class="cta lake" data-act="certPrint">列印證書</button>
    <button class="cta moss go-on" data-act="certClose" data-level="${e}">${e===`M`?`前往第四段：第五冊閱讀達人`:e===`R`||e===12&&hy()?`關閉證書，繼續逛島`:e===12?`前往第三段：第五冊文法達人`:`關閉證書，繼續闖關`} ›</button></div>
    ${by(`要換下一位同學重新闖關時再按這裡，記得先把證書存好或印好喔。`,!0)}</div>`,!0);try{let n=await Tv(e,t);Ib&&URL.revokeObjectURL(Ib),Ib=URL.createObjectURL(n),Z(`#certView`).innerHTML=`<img src="${Ib}" alt="${X(`${t.cls} ${t.name} 的${hv[e].title}證書`)}">`,Z(`#certSave`).href=Ib,Z(`#certSave`).hidden=!1}catch{Z(`#certView`).innerHTML=`<p>證書製作失敗，請檢查網路後再試一次。</p>`}if(!(await n).includes(String(e))||!Z(`#certSave`)?.download.includes(hv[e].title))return;let r=gv.get(),[,i,a]=r.dates[e].split(`-`);try{let t=await Tv(e,r);Ib&&URL.revokeObjectURL(Ib),Ib=URL.createObjectURL(t),Z(`#certView`).innerHTML=`<img src="${Ib}" alt="${X(`${r.cls} ${r.name} 的${hv[e].title}證書`)}">`,Z(`#certSave`).href=Ib,Z(`#certSave`).hidden=!1}catch{}Z(`.cert-tip`).innerHTML=`你在 <b>${+i} 月 ${+a} 日</b>就領過這張證書了，證書改用第一次領取的日期和編號，隨時都可以重新下載留念哦！`}function Rb(){let e=Mv.get();e?.state===`pass`?ex(e):gy()?e?.state===`play`?Ub():e?.state===`fail`?$b(e):Hb():zb()}function zb(){let e=(e,t,n)=>`<li class="${e?`ok`:``}"><strong>${t}</strong><span>${n}</span></li>`;dy(`${py(`第三段：第五冊文法達人`)}<div class="dialog-body">
    <p>完成下面三項任務，即可頒發「第五冊文法達人」榮譽證書！</p>
    <ol class="ch-need">${e(Q.hippos.size===12,`找齊 12 隻守護小河馬`,`${Q.hippos.size} / 12`)}${e(Q.stamps.size===12,`集滿 12 枚文法護照印章`,`${Q.stamps.size} / 12`)}${e(!1,`通過 12 島文法闖關`,`12 題答對 10 題`)}</ol>
    <p class="note">點開每一座浮空島的文法介紹就會蓋一枚章；還沒蓋的島都在「文法護照」裡找得到。</p>
    ${Bb()?`<button class="cta koi go-stamp" data-act="goStamp">📍 帶我去還沒蓋章的島：${X(ry[Bb()].name)} ›</button>`:``}
    <div class="btn-row"><button class="cta moss" data-act="passport">看文法護照</button><button class="cta lake" data-act="modalClose">繼續尋寶</button></div></div>`)}var Bb=()=>iy.find(e=>!Q.stamps.has(e));function Vb(){let e=Z(`#stampChip`),t=Q.stampRun&&Q.hippos.size===12&&!hy();if(e.hidden=!t,!t)return;let n=Bb();e.dataset.act=n?`goStamp`:`stampDone`;let r=Q.justStamped?`✅ ${Q.justStamped}蓋好章了！`:``;Q.justStamped=``,e.textContent=n?`${r}📍 下一座：${ry[n].name}（還差 ${iy.length-Q.stamps.size} 枚）›`:`${r}🦛 12 枚章集滿了！開始第三段挑戰 ›`}function Hb(){let e=`<p class="ch-band">請選擇本次要挑戰的第五冊文法題庫難度：</p><div class="ch-grades">${[[`低`,`基礎核心（L1～L3）`],[`中`,`進階運用（L4～L6）`],[`高`,`會考實戰（全冊）`]].map(([e,t])=>`<button class="cta lake" data-act="chStart" data-band="${e}">${t}</button>`).join(``)}</div>`;dy(`${py(`第五冊 12 島文法挑戰`)}<div class="dialog-body">
    <p>守護小河馬在十二座島上等你！12 題答對 10 題即可榮獲「第五冊文法達人」榮譽證書！</p>${Vv}${e}</div>`)}function Ub(e=!1){let t=Mv.get(),n=e?t.picks.length-1:t.picks.length;Q.touring&&Sb(),Q.walking&&Xy(),Q.listing&&pb(!1),Q.island&&sb(),e||$?.focusIsland(t.levels[n].i,!0),Q.chShown=e,e||qb(t.levels[n].i,`stuck`),dy(`${py(`📝 島嶼閱讀挑戰`)}<div class="dialog-body ch">${Bv(t,n,e)}</div>`,!1,!0),Wb(!e),e&&Z(`.ch-fb`)?.scrollIntoView({block:`nearest`,behavior:oy?`auto`:`smooth`})}function Wb(e){let t=Z(`#dialog`);t.classList.add(`ch-spot`),t.classList.toggle(`ch-new`,e),Z(`#chTip`).hidden=!e,e&&requestAnimationFrame(Gb)}function Gb(){let e=Z(`#chTip`);if(e.hidden)return;let t=Z(`#dialog`).getBoundingClientRect(),n=ay();e.classList.toggle(`down`,n),e.style.top=`${n?t.top-10:t.top+16}px`,e.style.right=n?``:`${window.innerWidth-t.left+16}px`}window.addEventListener(`resize`,Gb);var Kb=0;function qb(e,t){clearTimeout(Kb);for(let[n,r]of Object.entries(wy)){let i=Z(`.quest-tag`,r),a=n===e&&!!t;i.hidden=!a,r.classList.toggle(`quest`,a),a&&(i.textContent=l_[e][+(t===`done`)],i.classList.toggle(`done`,t===`done`))}$?.setQuest(t?e:null,t)}var Jb=()=>qb(null,null);function Yb(e){let t=(e=>{let t=e.replace(/[^一-鿿0-9A-Za-z]/g,``);return new Set(Array.from({length:Math.max(0,t.length-1)},(e,n)=>t.slice(n,n+2)))})(`${e.q}${e.o[e.a]}`),n=0,r=0;return k_[e.i].tabs.forEach((e,i)=>{let a=JSON.stringify(e),o=0;for(let e of t)a.includes(e)&&(o+=1);o>r&&(r=o,n=i)}),n}function Xb(){let e=Mv.get();if(e?.state!==`play`&&!Q.chShown)return;let t=Q.chShown?e.picks.length-1:e.picks.length,n=e.levels[t];Q.book={k:t,shown:Q.chShown},fy(),$y(n.i,{tab:Yb(n)});let r=Z(`#bookChip`);r.innerHTML=Q.chShown?`📝 看完了，回到第 ${t+1} 關`:`📝 找到答案了？回到第 ${t+1} 關題目`,r.classList.toggle(`low`,!Z(`#stormChip`).hidden),r.hidden=!1}function Zb(){let e=Q.book;Z(`#bookChip`).hidden=!0,Q.book=null,Q.island&&sb();let t=Mv.get();!e||!t||t.state!==`play`&&!e.shown?Rb():($?.focusIsland(t.levels[e.k].i,!0),Ub(e.shown))}function Qb(e){let t=Mv.get();if(t?.state!==`play`)return;let n=Lv(t,e);Mv.set(t),kg.sfx(n?`correct`:`boing`);let r=t.levels[t.picks.length-1].i;n&&($?.hippoFx.hop(r,.55),qb(r,`done`)),Ub(!0)}function $b(e){Jb(),$?.clearFocus(),dy(`${py(`差一點點！`)}<div class="dialog-body ch-end">
    <p>這次闖了 <b>${e.picks.length}</b> 關，答對 <b>${e.picks.length-e.wrong}</b> 題。小河馬們幫你換了新題目，再挑戰一次吧！</p>
    <div class="btn-row"><button class="cta koi" data-act="chStart" data-band="${e.band}">再挑戰一次</button><button class="cta lake" data-act="modalClose">先休息一下</button></div></div>`)}function ex(e){Jb(),dy(`${py(`第五冊文法達人`)}<div class="dialog-body ch-end">
    <p>恭喜通過十二座文法浮空島的挑戰，12 題答對 <b>${e.score}</b> 題！</p>
    <p>立即領取專屬高解析「第五冊文法達人」證書，也可接續挑戰第四階段「第五冊閱讀達人」！</p>
    <div class="btn-row"><button class="cta koi" data-act="certOpen" data-level="M">領取證書</button><button class="cta moss" data-act="read">第四段：第五冊閱讀達人</button></div></div>`)}var tx=[],nx=[],rx=``,ix=()=>Mv.get()?.band||`中`;async function ax(){if(!hy()){ox();return}let e=X_.get();if(e.run?.state===`play`){sx();return}dy(`${py(`第四段：第五冊閱讀達人`)}<div class="dialog-body"><p>閱讀選文題庫載入中…</p></div>`),{books:tx}=await Nv(),nx=ev(tx,ix());let t=Q_(e);dy(`${py(`第四段：第五冊閱讀達人`)}<div class="dialog-body">
    <p>精熟並全對通過 3 篇第五冊會考閱讀選文，即可領取「第五冊閱讀達人」證書！目前題組難度：<b>${c_[ix()]}</b>。</p>${av}
    <h3 class="hippo-title">第五冊閱讀書架（過關 ${t} / 3 篇）</h3>${ov(e)}
    ${t>=3?`<div class="btn-row"><button class="cta koi" data-act="certOpen" data-level="R">領取閱讀達人證書</button></div>`:``}
    <h3 class="hippo-title">選擇一篇英文閱讀選文挑戰</h3>${sv(nx,e)}
    <div class="btn-row"><button class="cta lake" data-act="modalClose">返回群島複習</button></div></div>`)}function ox(){dy(`${py(`第四段：第五冊閱讀達人`)}<div class="dialog-body">
    <p>請先通過第三段「第五冊文法達人」，就能解鎖第四段閱讀挑戰！</p>${av}
    <div class="btn-row"><button class="cta koi" data-act="challenge">看第三段：第五冊文法達人</button><button class="cta lake" data-act="modalClose">繼續尋寶</button></div></div>`)}function sx(){let e=X_.get();e.run?.state===`play`?dy(`${py(`📚 第五冊閱讀理解挑戰`)}<div class="dialog-body ch">${cv(e.run)}</div>`):ax()}function cx(e){let t=X_.get();if(t.run?.state!==`play`)return;iv(t,e);let n=t.run;if(n.state===`play`){X_.set(t),sx();return}t.run=null,X_.set(t),Sy();let r=n.levels.length,i=Q_(t);n.state===`pass`?(kg.sfx(`chime`),dy(`${py(`完全讀懂啦！`)}<div class="dialog-body ch-end">
      <p>《${X($_(n.k))}》${r} 題全部答對，選文獎章已收進書架！</p>
      ${ov(t)}
      <p>${i>=3?`已過關 ${i} 篇了，快來領取「第五冊閱讀達人」證書！`:`再過關 ${3-i} 篇，就能領取「第五冊閱讀達人」證書！`}</p>
      <details class="rd-more"><summary>看每一題的解答與詳細解析</summary>${lv(n)}</details>
      <div class="btn-row">${i>=3?`<button class="cta koi" data-act="certOpen" data-level="R">領取證書</button>`:``}<button class="cta moss" data-act="read">回到選文列表</button></div></div>`)):(kg.sfx(`boing`),dy(`${py(`差一點就滿分！`)}<div class="dialog-body ch-end">
    <p>《${X($_(n.k))}》${r} 題答對 <b>${n.score}</b> 題，需全部答對才算完全過關！</p>
    <p>你可以立刻重新挑戰再讀一次選文，或換一篇選文試試看。</p>
    <div class="btn-row"><button class="cta moss" data-act="read">回到選文列表</button><button class="cta lake" data-act="modalClose">先回群島看筆記</button></div></div>`))}var lx=[{k:`edu`,n:`教務處`,c:`#2f8fb0`,by:[`教務`,`教學`,`設備`,`註冊`,`資訊`,`圖書`]},{k:`stu`,n:`學務處`,c:`#d9432f`,by:[`學務`,`訓育`,`生教`,`體衛`,`衛生`,`體育`]},{k:`gui`,n:`輔導室`,c:`#4f9a54`,by:[`輔導`,`特教`,`資料`]},{k:`gen`,n:`總務處`,c:`#c8861f`,by:[`總務`,`文書`,`事務`,`出納`]},{k:`etc`,n:`其他`,c:`#7a6f8f`,by:[]}],ux=(e=``)=>lx.find(t=>t.by.some(t=>e.includes(t)))||lx[lx.length-1],dx={研習:`#7a3f8f`,公告:`#b5563c`,活動:`#e0812a`,資源:`#2f9c95`},fx={dept:`all`,q:``},px=(e=new Date)=>new Intl.DateTimeFormat(`en-CA`,{timeZone:`Asia/Taipei`}).format(e),mx=e=>Math.round((Date.parse(`${px()}T00:00:00+08:00`)-Date.parse(`${e}T00:00:00+08:00`))/864e5),hx=`日一二三四五六`,gx=e=>{let[,t,n]=e.split(`-`);return`${+t} 月 ${+n} 日（${hx[new Date(`${e}T12:00:00+08:00`).getDay()]}）`};function _x(){let e=fx.q.trim();return Q.news.filter(t=>(fx.dept===`all`||ux(t.by).k===fx.dept)&&(!e||`${t.title}${t.by}${t.tag}`.includes(e)))}function vx(){let e=_x(),t=[];for(let n of e){let e=mx(n.date),r=e<=0?`今天`:e===1?`昨天`:e<7?`這幾天`:`更早的公告`,i=t.find(e=>e.name===r);i||t.push(i={name:r,items:[]}),i.items.push(n)}let n=e=>{let t=ux(e.by),n=e.url?.startsWith(`#/`)?e.url.slice(2):``;return n?`<button class="log-card" style="--c:${t.c};width:100%;text-align:left" data-goto="${X(n)}">
        <span class="log-meta"><b class="log-dept">${t.n}</b>${e.by?`<span>${X(e.by)}</span>`:``}${e.tag?`<i style="--t:${dx[e.tag]||`#6c6f7a`}">${X(e.tag)}</i>`:``}<em>NEW</em></span>
        <strong>${X(e.title)}</strong>
        <span class="log-foot">${gx(e.date)}<span>前往複習 ›</span></span></button>`:`<a class="log-card" style="--c:${t.c}" href="${X(e.url)}" target="_blank" rel="noopener noreferrer">
        <span class="log-meta"><b class="log-dept">${t.n}</b>${e.by?`<span>${X(e.by)}</span>`:``}${e.tag?`<i style="--t:${dx[e.tag]||`#6c6f7a`}">${X(e.tag)}</i>`:``}<em>NEW</em></span>
        <strong>${X(e.title)}</strong>
        <span class="log-foot">${gx(e.date)}<span>查看 ›</span></span></a>`};Z(`#logBody`).innerHTML=e.length?t.map(e=>`<section class="log-group"><h3>${e.name}<small>${e.items.length} 則</small></h3><div class="log-grid">${e.items.map(n).join(``)}</div></section>`).join(``):`<p class="log-empty">${Q.news.length?`找不到符合的公告，換個關鍵字或處室試試看。`:`公告暫時無法載入，請到學校官網查看。`}</p>`,ny(`#logDepts button`).forEach(e=>e.classList.toggle(`on`,e.dataset.dept===fx.dept))}function yx(){let e=Q.news;e.filter(e=>mx(e.date)<=0).length,e.filter(e=>mx(e.date)<7).length;let t=t=>e.filter(e=>ux(e.by).k===t).length;Q.newsAt&&new Intl.DateTimeFormat(`zh-TW`,{timeZone:`Asia/Taipei`,month:`numeric`,day:`numeric`,hour:`2-digit`,minute:`2-digit`,hourCycle:`h23`}).format(new Date(Q.newsAt));let n=[{k:`all`,n:`全部`,c:`#3b2c1d`,num:e.length},...lx.map(e=>({...e,num:t(e.k)})).filter(e=>e.num)];dy(`${py(`第五冊重點單元導覽`)}<div class="dialog-body log">
    <div class="log-top">
      <div class="log-stats"><span><b>12</b>座文法島</span><span><b>72+</b>分級挑戰題</span><span><b>${e.length}</b>精選捷徑</span></div>
      <p class="note">點擊下方卡片可立即飛往對應第五冊複習浮空島！</p>
    </div>
    <div class="log-tools">
      <div class="log-depts" id="logDepts" role="group" aria-label="依類別篩選">${n.map(e=>`<button data-act="logDept" data-dept="${e.k}" style="--c:${e.c}">${e.n}<small>${e.num}</small></button>`).join(``)}</div>
      <input id="logSearch" type="search" placeholder="搜尋複習主題，例如：完成式、被動、關代" aria-label="搜尋主題" value="${X(fx.q)}">
    </div>
    <div id="logBody"></div>
    </div>`,!0),vx()}function bx(){dy(`${py(`第五冊會考高頻考點榜`)}<div class="dialog-body">${dh.map(e=>`<button class="news-item" style="width:100%;text-align:left" data-goto="${e.island}"><span class="tag" style="background:${ry[e.island].color}">${X(e.k)}</span><strong>${X(e.title)}</strong><small>${X(e.sub)}</small></button>`).join(``)}
    <p class="note" style="margin-top:10px">依據國中英語第五冊（L1～L6）近年會考出現頻率整理，點選項目直接飛往該島複習！</p></div>`,!0)}function xx(){let e=$?.viewName===`top`?`top`:`home`;Q.touring&&Sb(),Q.walking&&Xy(),Q.listing&&pb(!1),Q.island&&sb(),$?.clearFocus(),$?.setView(e),fb(e)}function Sx(){dy(`${py(`跨域串聯`)}<div class="dialog-body"><p>金色虛線把彼此合作、能互相延伸的島嶼連起來。</p>
    ${ch.map(e=>`<div class="news-item"><small>${X(ry[e.a].name)} ↔ ${X(ry[e.b].name)}</small><strong>${X(e.text)}</strong></div>`).join(``)}
    <div class="btn-row"><button class="btn main" data-act="modalClose">回到群島看連線</button></div></div>`)}var Cx=Math.floor(Date.now()/864e5)%fh.length;function wx(){let e=fh[Cx];Z(`#quote`).innerHTML=Z(`#quoteTile`).innerHTML=`${X(e.text)}<cite>${X(e.by)}</cite>`}function Tx(){let e=ey();Z(`#dDate`).textContent=e.date,Z(`#dWeek`).textContent=`${e.week}・${e.time}`}var Ex=[{k:`live`,n:`即時`,i:`📡`,d:`跟著現在的真實天氣與時間自動變化`},{k:`day`,n:`白天`,i:`☀️`,d:`陽光灑在十二座浮空島上`},{k:`cloudy`,n:`陰天`,i:`☁️`,d:`雲層變厚，配樂換成陰天的曲子`},{k:`rain`,n:`雨天`,i:`🌧️`,d:`孩子撐傘踩水窪，魚兒開心跳出水面`},{k:`typhoon`,n:`颱風`,i:`🌀`,d:`雲海下的颱風在旋轉，大家都躲進屋裡`},{k:`dusk`,n:`黃昏`,i:`🌇`,d:`天空換上黃昏的顏色和配樂`},{k:`night`,n:`夜晚`,i:`🌙`,d:`拿著手電筒看星星，圍著營火聽故事`}],Dx=e=>Ex.find(t=>t.k===e)||Ex[0];function Ox(){let e=Dx(Q.time);Z(`#timeBtn`).textContent=`天氣・${e.n}`,Z(`#wxMagic span`).textContent=Q.time===`live`?`變天氣`:`${e.n}預覽`,Z(`#wxMagic`).classList.toggle(`preview`,Q.time!==`live`),Z(`#wxGrid`).innerHTML=Ex.map(e=>`<button class="wx-opt${e.k===Q.time?` on`:``}" data-act="wxSet" data-time="${e.k}" aria-pressed="${e.k===Q.time}"><i aria-hidden="true">${e.i}</i><strong>${e.n}</strong><span>${e.k===`live`&&Q.weather?`現在${X(Q.weather.label)} ${Q.weather.temp}°C，`:``}${e.d}</span></button>`).join(``)}function kx(e){Q.time=e,$?.setTimeMode([`rain`,`cloudy`,`typhoon`].includes(e)?`day`:e),e===`typhoon`?$?.setWeather({storm:!0}):e===`rain`?$?.setWeather({cloud:.85,rain:.8,storm:!1}):e===`cloudy`?$?.setWeather({cloud:.9,rain:0,storm:!1}):e===`live`?Q.weather&&$?.setWeather({cloud:Q.weather.cloud,rain:Q.weather.rain,storm:!!Eb()?.scene}):$?.setWeather({cloud:.1,rain:0,storm:!1}),Db(),Ox(),uy(e===`typhoon`?`颱風來了！雲海下的颱風正在旋轉，大家都躲進屋裡了`:e===`rain`?`下雨了！孩子們撐傘踩水窪，魚兒開心得跳出水面`:e===`night`?`夜深了，留下來的孩子拿著手電筒看星星、圍著營火聽故事`:e===`live`?`回到即時天氣，群島跟著現在的真實天氣變化`:`換成${Dx(e).n}囉！${Dx(e).d}`)}function Ax(e){let t=Z(`#wxPop`);if(t.hidden=!e,Z(`#wxMagic`).setAttribute(`aria-expanded`,e),!e)return;if(Ox(),sy.set(`smes-wx-seen`,!0),Z(`#wxMagic`).classList.remove(`hint`),ay()){t.style.top=``,t.style.right=``;return}let n=Z(`#liveinfo`).getBoundingClientRect();t.style.top=`${Math.round(n.bottom+8)}px`,t.style.right=`${Math.max(10,Math.round(window.innerWidth-n.right))}px`}function jx(){let e=Q.weather;if(!e)return;let t=Q.air?`・空品${Q.air.level}`:``;Z(`#wx`).innerHTML=`<i>${e.icon}</i><div><strong>${X(e.label)} ${e.temp}°C</strong><span>${e.min}°～${e.max}°・降雨 ${e.pop}%${t}</span></div>`,Z(`#wxPop`).hidden||Ox(),Z(`#liveinfo`).title=`體感 ${e.feels}°C・濕度 ${e.humidity}%・風速 ${Math.round(e.wind)} km/h${Q.air?`・AQI ${Q.air.aqi}（美國標準）・PM2.5 ${Q.air.pm25}`:``}｜複習天象觀測站`}function Mx(){let e=Q.res,t=Math.round((Q.stamps.size+Q.hippos.size)/24*100);ny(`[data-res-level]`).forEach(e=>{e.innerHTML=`${t}<small> %</small>`}),ny(`[data-res-fill]`).forEach(e=>{e.style.height=`${Math.max(12,t)}%`}),ny(`[data-res-note]`).forEach(e=>{e.textContent=`印章 ${Q.stamps.size}/12 ・ 小河馬 ${Q.hippos.size}/12`}),$?.setReservoir(e?e.ratio:Math.max(.25,t/100))}function Nx(e,t,n,r){let i=0,a=()=>{t().length&&(e.innerHTML=n(t()[i%t().length]),i+=1)};return a(),setInterval(a,r)}async function Px(){let e=async(e,t,n)=>{try{t(await e())}catch(e){console.warn(`即時資料失敗`,e.message),n?.()}};await Promise.all([e(Kv,e=>{Q.weather=e,jx(),$?.setSun({sunrise:e.sunrise,sunset:e.sunset}),Q.time===`live`&&$?.setWeather({cloud:e.cloud,rain:e.rain,wind:e.wind,thunder:e.thunder,storm:!!Eb()?.scene}),Db()},()=>{Q.weather||(Z(`#wx`).innerHTML=`<i>⛅</i><div><strong>天氣暫時無法取得</strong><span>天象觀測站</span></div>`)}),e(Zv,e=>{Q.air=e,jx()}),e(qv,e=>{Q.alert=e,Db()}),e(Qv,e=>{Q.res=e,Mx()},()=>{Q.resFail=!0,Mx()}),e($v,e=>{Q.news=e.items||[],Q.newsAt=e.updated,Q.news.length||(Z(`#newsTicker`).innerHTML=`<span class="tick"><span>公告暫時無法載入</span></span>`)})])}function Fx(){Nx(Z(`#newsTicker`),()=>Q.news,e=>`<button class="tick" style="background:none;border:0;text-align:left;cursor:pointer;width:100%;font:inherit;color:inherit"${e.url?.startsWith(`#/`)?` data-goto="${X(e.url.slice(2))}"`:``}>${e.tag?`<b style="background:var(--moss)">${X(e.tag)}</b>`:``}<strong>${X(e.title)}</strong><span>${X(e.date)}</span></button>`,6500),Nx(Z(`#honorTicker`),()=>dh,e=>`<button class="tick" style="background:none;border:0;text-align:left;cursor:pointer;width:100%;font:inherit;color:inherit" data-goto="${e.island}"><b>${X(e.k)}</b><strong>${X(e.title)}</strong><span>${X(e.sub)}</span></button>`,5200)}var Ix={home(){Q.island?sb():Q.listing&&pb(!1),$?.clearFocus(),$?.setView(`home`),fb(`home`)},quote(){Cx=(Cx+1)%fh.length,wx()},close(){sb()},prev(){db(-1)},next(){db(1)},tall(){e_.toggle()},dockPrev(){qx(-1)},dockNext(){qx(1)},quiz(){wb()},passport(){jb()},mission(){Ab()},hint(){Q.hippos.size===12&&!hy()?Rb():Ab()},goStamp(){let e=Bb();Q.stampRun=!0,fy(),e?$y(e):Vb()},stampDone(){Q.stampRun=!1,Vb(),Q.island&&sb(),Rb()},qr(){kb()},qrBig(){Z(`#dialog`).classList.toggle(`qr-big`)},log(){yx()},honors(){bx()},watch(){let e=Z(`#watch`),t=!nb();document.body.classList.toggle(`watch-force`,t&&(Q.walking||Q.touring)),ay()?(e.classList.toggle(`opened`,t),Q.island||(Z(`#hint`).hidden=t),rb()):tb(t,!0);let n=t?Q.listing?`清單`:Q.island?`島嶼介紹`:Z(`#modal`).classList.contains(`peek`)?`文法闖關`:``:``;uy(n?`${n}開著時，瞭望台會先讓位，關掉${n}就看得到`:t?`瞭望台打開了：探索進度、單元捷徑、今日英語口訣都在這裡`:`瞭望台收起來了，再按一次「瞭望台」就能打開`)},res(){$y(`core`,{tab:1})},tour(){Q.touring?Sb(!0):xb()},tourPause(e){Q.tourPaused=!Q.tourPaused,e.textContent=Q.tourPaused?`繼續`:`暫停`},tourPrev(){Q.tourIdx=(Q.tourIdx+vb-1)%vb,bb()},tourNext(){Q.tourIdx=(Q.tourIdx+1)%vb,bb()},tourMore(){let e=ih[Q.tourIdx-1];Sb(!e),e?$y(e.id):Ab()},tourEnd(){Sb(!0)},stroll(){Q.walking?Xy(!0):$.env.storm?uy(`風雨太大，大家都進屋了，等天氣好再來逛島吧`):Yy($.people.guide())},storm(){Ob()},strollNext(){Yy($.people.guide())},strollIsland(){$y($.people.followed.here)},strollEnd(){Xy(!0)},sayFollow(){Ny&&Yy(Ny.crew)},doorTalk(e){let t=By.get(e.dataset.key)?.g;t&&Jy(t)},doorMore(){Hy&&My&&(kg.sfx(`pop`),My.innerHTML=qy(Hy),clearTimeout(Py),Py=setTimeout(Fy,9e3))},sayMore(){Ny&&My&&(kg.sfx(`pop`),$.people.greet(Ny,$.camera),My.innerHTML=Ly(Ny),clearTimeout(Py),Py=setTimeout(Fy,9e3))},music(){kg.toggle()},sfx(){kg.toggleSfx()},labels(e){Q.labels=!Q.labels,e.classList.toggle(`on`,Q.labels),Z(`#labels`).classList.toggle(`hidden`,!Q.labels)},arcs(e){Q.arcs=!Q.arcs,e.classList.toggle(`on`,Q.arcs),Q.arcs&&xx(),$?.showArcs(Q.arcs),Q.arcs&&Sx()},pause(e){Q.paused=!Q.paused,e.textContent=Q.paused?`播放`:`暫停`,$?.setPaused(Q.paused)},time(){Ax(Z(`#wxPop`).hidden)},wxMenu(){Ax(Z(`#wxPop`).hidden)},wxSet(e){kx(e.dataset.time),Ax(!1)},tilt(e){let t=!$.tilt;$.setTilt(t),e.classList.toggle(`on`,t),e.setAttribute(`aria-pressed`,t),uy(t?`開啟模型感：畫面上下變模糊，群島看起來像桌上的小模型`:`關閉模型感：整個畫面都清楚，電腦跑起來也比較順`)},modalClose(){fy(),Q.book||Jb()},finaleClose(){w_()},finalePassport(){w_(),jb()},finaleAgain(){fy(),Gx()},finaleCert(e){w_(),Lb(vy(e.dataset.level))},certOpen(e){Lb(vy(e.dataset.level))},challenge(){w_(),Rb()},read(){w_(),ax()},rdStart(e){let t=nx[+e.dataset.book];if(!t)return;let n=X_.get();n.run?.state===`play`&&n.run.k===t.k?sx():(rx=t.k,dy(`${py(`確定要挑戰這本書嗎？`)}<div class="dialog-body cert-form">
      <p class="cert-who">📚 ${X($_(t.k))}</p>
      <p>共 <b>${t.n}</b> 題，作答時不公布對錯，要全部答對才算讀懂。沒過的話，今天就不能再挑戰這本書了。</p>
      <div class="btn-row"><button class="cta koi" data-act="rdGo">我讀完了，開始作答</button><button class="cta lake" data-act="read">再想想</button></div></div>`))},rdGo(){let e=X_.get();!rx||e.done[rx]||e.run?.state===`play`?sx():(rv(e,tx,rx,ix()),e.run.levels.length?(X_.set(e),sx()):(e.run=null,X_.set(e),ax()))},async chStart(e){Q.stampRun=!1,Vb();let t=Mv.get();e.disabled=!0,e.textContent=`小河馬準備題目中…`;let{items:n}=await Nv();Mv.set(Iv(e.dataset.band,n,t?.levels?.map(e=>e.q)||[])),Ub()},logDept(e){fx.dept=e.dataset.dept,vx()},chBook(){Xb()},chBack(){Zb()},chNext(){Ub()},chEnd(){Jb();let e=Mv.get();e.state===`pass`?(fy(),Sy(),$?.clearFocus(),Gx(`M`,e.score)):$b(e)},certCheck(e){let t=Z(`#certGrade`).value.trim().replace(/年級?$/,``),n=Z(`#certRoom`).value.trim().replace(/班$/,``),r=Z(`#certName`).value.trim(),i=!t||!n||!r?`年級、班級和姓名都要填哦`:yv(r)?``:`姓名只能填文字，不能有空格、數字或符號哦`;if(i){Z(`#certErr`).textContent=i,Z(`#certErr`).hidden=!1;return}let a=`${t}年${n}班`,{level:o}=e.dataset;dy(`${py(`確認證書上的名字`)}<div class="dialog-body cert-form">
      <p class="cert-who">${X(a)}　${X(r)}</p>
      <p>確定後就不能修改了，請再看一次有沒有寫對。</p>
      <div class="btn-row"><button class="cta koi" data-act="certIssue" data-level="${o}" data-cls="${X(a)}" data-name="${X(r)}">確定，領取證書</button><button class="cta lake" data-act="certOpen" data-level="${o}">回去修改</button></div></div>`)},certIssue(e){let t=vy(e.dataset.level);vv(t,e.dataset.cls,e.dataset.name,yy(t)),xy(),Lb(t)},certPrint(){Ib&&Ev(Ib)},certClose(e){let t=vy(e.dataset.level);fy(),Sy(),t===12&&!hy()?Rb():t===`M`?(uy(`太厲害了！繼續挑戰第四段「第五冊閱讀達人」吧！`),ax()):uy(t===`R`?`恭喜完成第五冊閱讀達人！你已經準備好迎戰會考啦！`:t===6?`繼續找守護小河馬，找齊 12 隻還有金色證書！`:Q.stamps.size<12?`再集滿 12 枚章，就能挑戰「第五冊文法達人」（${Q.stamps.size} / 12）`:hy()?`你已經是第五冊文法達人了，繼續逛島吧！`:`12 枚章都集滿了，打開文法護照挑戰第五冊文法達人！`)},certReset(){dy(`${py(`換下一位同學`)}<div class="dialog-body">
      <p>這台裝置的小河馬、蓋章和證書紀錄都會清除，下一位同學要重新尋找。已經存下來或印出來的證書不受影響。</p>
      <div class="btn-row"><button class="cta koi" data-act="certResetGo">確定清除</button><button class="cta lake" data-act="modalClose">先不要</button></div></div>`)},async certResetGo(){await Promise.race([bv(),new Promise(e=>{setTimeout(e,3e3)})]),sy.set(`smes-hippos`,[]),sy.set(`smes-stamps`,[]),sy.set(`smes-mission-seen`,!1),sy.set(`smes-last-active`,0),gv.clear(),Mv.clear(),X_.clear(),location.reload()},lbClose(){Rx(!1),Z(`#lb`).classList.remove(`open`)},lbPrev(){Lx(cy-1)},lbNext(){Lx(cy+1)}};function Lx(e){let t=F_();if(!t.length)return;cy=(e+t.length)%t.length;let n=t[cy],r=Z(`#lbImg`),i=n.src||M_(n.id);Rx(!1),r.src.endsWith(i.slice(1))||(r.classList.add(`wait`),r.src=i);let a=O_(n.id);r.style.setProperty(`--lb-max`,a?`${a}px`:`100%`),Z(`#lb`).classList.toggle(`native`,!!a),r.alt=n.cap,Z(`#lbCap`).textContent=n.cap,Z(`#lbLink`).hidden=!n.link,n.link&&(Z(`#lbLink`).href=n.link),Z(`#lb`).classList.add(`open`)}function Rx(e,t){let n=Z(`#lbImg`),r=Z(`#lbView`);if(!e){Z(`#lb`).classList.remove(`zoom`),n.style.width=``;return}let i=n.getBoundingClientRect(),a=Math.max(i.width*2.5,Math.min(n.naturalWidth,innerWidth*2));Z(`#lb`).classList.add(`zoom`),n.style.width=`${a}px`,r.scrollLeft=a*(t.clientX-i.left)/i.width-r.clientWidth/2,r.scrollTop=n.offsetHeight*(t.clientY-i.top)/i.height-r.clientHeight/2}var zx=null;Z(`#lbImg`).addEventListener(`load`,e=>e.target.classList.remove(`wait`)),Z(`#lbImg`).addEventListener(`click`,e=>{zx?.moved||Z(`#lb`).classList.contains(`native`)||Rx(!Z(`#lb`).classList.contains(`zoom`),e)}),Z(`#lbView`).addEventListener(`pointerdown`,e=>{if(zx=null,e.pointerType!==`mouse`||!Z(`#lb`).classList.contains(`zoom`))return;let t=e.currentTarget;zx={x:e.clientX,y:e.clientY,l:t.scrollLeft,t:t.scrollTop,on:!0,moved:!1},e.preventDefault()}),window.addEventListener(`pointermove`,e=>{if(!zx?.on)return;let t=e.clientX-zx.x,n=e.clientY-zx.y;Math.hypot(t,n)>4&&(zx.moved=!0),Z(`#lbView`).scrollLeft=zx.l-t,Z(`#lbView`).scrollTop=zx.t-n}),window.addEventListener(`pointerup`,()=>{zx&&(zx.on=!1)}),document.addEventListener(`click`,e=>{!Z(`#wxPop`).hidden&&!e.target.closest(`#wxPop,#wxMagic,#timeBtn`)&&Ax(!1);let t=e.target.closest(`button,a`);if(!t){e.target.id===`modal`&&!Z(`#dialog`).dataset.lock&&fy(),e.target.id===`lb`&&Ix.lbClose();return}let n=t.dataset;if(n.tab===void 0&&n.quiz===void 0&&n.ch===void 0&&kg.sfx(`tap`),n.act!==void 0&&n.act!==``&&Ix[n.act])Ix[n.act](t);else if(n.tab!==void 0)lb(+n.tab);else if(n.view){if(n.view===`list`){pb(!Q.listing||!0);return}Q.listing&&pb(!1),Q.island&&sb(),$?.clearFocus(),$?.setView(n.view),fb(n.view)}else if(n.goto)fy(),$y(n.goto);else if(n.open)$y(n.open,{tab:+(n.openTab||0)});else if(n.lb!==void 0)Lx(+n.lb);else if(n.toggle!==void 0){let e=t.closest(`.act`);e.classList.toggle(`open`),t.setAttribute(`aria-expanded`,e.classList.contains(`open`))}else if(n.grade!==void 0)ny(`[data-grade]`).forEach(e=>e.classList.toggle(`on`,e===t)),Z(`.ilr-list`).innerHTML=W_(Q.island,Q.tab,+n.grade);else if(n.ch!==void 0)Qb(+n.ch);else if(n.rd!==void 0)cx(+n.rd);else if(n.quiz!==void 0){kg.sfx(+n.quiz+1>=ph.length?`chime`:`correct`);let e=JSON.parse(Z(`#dialog`).dataset.tally||`{}`);e[n.k]=(e[n.k]||0)+1,wb(+n.quiz+1,e)}}),Z(`#search`).addEventListener(`input`,e=>mb(e.target.value)),document.addEventListener(`input`,e=>{e.target.id===`logSearch`&&(fx.q=e.target.value,vx())}),document.addEventListener(`change`,e=>{e.target.id===`qrPick`&&kb(e.target.value)}),window.addEventListener(`keydown`,e=>{e.target.matches(`input,textarea`)||(e.key===`Escape`&&(Z(`#wxPop`).hidden?Z(`#lb`).classList.contains(`open`)?Ix.lbClose():Z(`#modal`).classList.contains(`open`)?fy():Q.touring?Sb(!0):Q.walking?Xy(!0):Q.island&&sb():Ax(!1)),Z(`#lb`).classList.contains(`open`)?(e.key===`ArrowLeft`&&Ix.lbPrev(),e.key===`ArrowRight`&&Ix.lbNext()):e.key===` `&&Q.touring&&(e.preventDefault(),Ix.tourPause(Z(`#tPause`))))});function Bx(){let e=location.hash.replace(/^#\/?/,``);e===`list`?Q.listing||pb(!0,!1):(Q.listing&&pb(!1,!1),ry[e]?Q.island!==e&&$y(e,{push:!1}):Q.island&&sb(!1))}window.addEventListener(`popstate`,Bx);function Vx(){Z(`#loader`).classList.add(`done`),setTimeout(()=>Z(`#loader`).remove(),900)}function Hx(e){let t=Z(`#musicBtn`);t.classList.toggle(`on`,e),t.setAttribute(`aria-pressed`,e),sy.set(`smes-music`,e)}async function Ux(){try{let e=await o_();if(!e)return;Z(`#visitLine`).hidden=!1,s_(Z(`#visitTotal`),e.total,oy),s_(Z(`#visitToday`),e.today,oy),e.fresh&&uy(`歡迎登島！您是今天第 ${e.today.toLocaleString()} 位旅人`)}catch(e){console.warn(`登島人次讀取失敗`,e.message)}}function Wx(e){let t=Z(`#sfxBtn`);t.classList.toggle(`on`,e),t.setAttribute(`aria-pressed`,e),sy.set(`smes-sfx`,e)}function Gx(e=12,t=0){e===`M`?($.party(9),Uy=performance.now()+7e3,[0,900,1800].forEach(e=>setTimeout(()=>kg.sfx(e===900?`horn`:`cheer`),e)),setTimeout(()=>kg.sfx(`found`),1500)):$.hippoFx.celebrate(),kg.sfx(`cheer`),kg.sfx(`chime`),Q.island||($.setView(`home`),fb(`home`)),setTimeout(()=>C_(e,t),oy?0:1500)}function Kx(e,t){let n=lh[e];Q.hippos.has(e)?($.hippoFx.hop(e,.55),kg.sfx(`boing`),uy(`${n.name}：「${n.line}」`)):(Q.hippos.add(e),sy.set(`smes-hippos`,[...Q.hippos]),$.hippoFx.found(e,$.camera),kg.sfx(`found`),kg.sfx(`horn`),x_($.screenOf(t)),setTimeout(Sy,oy?0:1e3),b_(e,Q.hippos.size),Q.hippos.size===12&&setTimeout(Gx,2600),Q.hippos.size===6&&setTimeout(()=>{kg.sfx(`cheer`),C_(6)},2600))}function qx(e){let t=Z(`.dock`);t.scrollBy({left:e*t.clientWidth*.7,behavior:oy?`auto`:`smooth`})}function Jx(){let e=Z(`.dock`),t=()=>{Z(`#dockPrev`).hidden=e.scrollLeft<4,Z(`#dockNext`).hidden=e.scrollLeft>e.scrollWidth-e.clientWidth-4},n=()=>e.scrollWidth>e.clientWidth+4;e.addEventListener(`scroll`,t,{passive:!0}),window.addEventListener(`resize`,t);let r=new ResizeObserver(()=>{t(),e.classList.toggle(`can-drag`,n())});r.observe(e),[...e.children].forEach(e=>r.observe(e)),e.addEventListener(`wheel`,t=>{!n()||Math.abs(t.deltaX)>Math.abs(t.deltaY)||(t.preventDefault(),e.scrollLeft+=t.deltaY)},{passive:!1});let i=null;e.addEventListener(`pointerdown`,t=>{t.pointerType===`mouse`&&t.button===0&&n()&&(i={x:t.clientX,left:e.scrollLeft,moved:!1})}),window.addEventListener(`pointermove`,t=>{if(!i)return;let n=t.clientX-i.x;!i.moved&&Math.abs(n)<6||(i.moved=!0,e.classList.add(`dragging`),e.scrollLeft=i.left-n)}),window.addEventListener(`pointerup`,()=>{if(i){if(i.moved){let t=e=>{e.stopPropagation(),e.preventDefault()};e.addEventListener(`click`,t,{capture:!0,once:!0}),setTimeout(()=>e.removeEventListener(`click`,t,!0),0)}e.classList.remove(`dragging`),i=null}}),t()}function Yx(){matchMedia(`(pointer: coarse)`).matches&&!sy.get(`smes-music-tip`,!1)&&(sy.set(`smes-music-tip`,!0),uy(`背景音樂開始了，下方工具列可以關閉音樂和音效`))}async function Xx(){Kg(),e_.init(Z(`#panel`),ay,ab),Jx(),wx(),Tx(),Sy(),Ox(),sy.get(`smes-wx-seen`,!1)||Z(`#wxMagic`).classList.add(`hint`),tb(sy.get(`smes-watch`,!0),!0),kg.init({want:sy.get(`smes-music`,!0),sfx:sy.get(`smes-sfx`,!0),onChange:Hx,onStart:Yx,onSfx:Wx}),Hx(kg.want),Wx(kg.sfxOn),setInterval(Tx,15e3),setInterval(Px,9e5),Fx();let e=Z(`#loaderBar`),t=Z(`#loaderText`),n=()=>{pb(!0,!1),Z(`#world`).style.display=`none`,document.querySelector(`.dock`).hidden=!1,Vx(),uy(`這台裝置無法顯示 3D 畫面，已改用文字清單`)};Z(`#loaderSkip`).addEventListener(`click`,n),setTimeout(()=>{Z(`#loader`)&&(Z(`#loaderSkip`).hidden=!1)},9e3);try{$=new _g(Z(`#world`),{onPick:e=>$y(e),onPerson:Ry,onHover:e=>Object.entries(wy).forEach(([t,n])=>n.classList.toggle(`hot`,t===e)),onFrame:Qy,onHippo:Kx,onArrow:e=>Q.island&&(e===`ArrowLeft`||e===`ArrowRight`)?(db(e===`ArrowLeft`?-1:1),!0):Q.touring&&(e===`ArrowLeft`||e===`ArrowRight`)?(Ix[e===`ArrowLeft`?`tourPrev`:`tourNext`](),!0):!1,onEnv:e=>{Z(`#schoolState`).textContent=e.schoolState||``,kg.setMood({storm:e.storm,night:e.night>.5,dusk:e.dusk,rain:e.rain>.15,cloud:e.cloud>=.6,thunder:e.thunder})},onSplash:()=>kg.sfx(`splash`),onQuality:()=>{Z(`#tiltBtn`).classList.remove(`on`),Z(`#tiltBtn`).setAttribute(`aria-pressed`,!1)},onInteract:()=>{Q.touring&&!Q.tourPaused&&Ix.tourPause(Z(`#tPause`))}}),await $.build((n,r)=>{e.style.width=`${Math.round(n*100)}%`,t.textContent=r}),$.hippoFx.restore(Q.hippos)}catch(e){console.error(e),n(),Px();return}window.__world=$,Dy(),Z(`#tiltBtn`).classList.toggle(`on`,$.tilt),Z(`#tiltBtn`).setAttribute(`aria-pressed`,$.tilt);let r=performance.now(),i=e=>{Cb(e-r),r=e,requestAnimationFrame(i)};if(requestAnimationFrame(i),await Px(),Ux(),bv(),$.start(),eb(),Vx(),!oy){let e=$.camera.position.clone(),t=$.controls.target.clone();$.camera.position.copy(e).multiplyScalar(1.5).add(new H(0,60,0)),$.flyTo(e,t,2.6)}Bx(),Fb(),window.addEventListener(`pointerdown`,Fb,!0),window.addEventListener(`keydown`,Fb,!0),document.addEventListener(`visibilitychange`,()=>{document.hidden||Fb()}),sy.get(`smes-mission-seen`,!1)||setTimeout(()=>{Q.island||Q.touring||Q.walking||Z(`#modal`).classList.contains(`open`)||Ab()},oy?600:2900)}Xx();