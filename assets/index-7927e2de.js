(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();let rt=Me;const I=1,Y=2,Be={owned:null,cleanups:null,context:null,owner:null};var _=null;let te=null,R=null,x=null,w=null,j=0;function ot(e,r){const t=R,o=_,i=e.length===0,s=i?Be:{owned:null,cleanups:null,context:null,owner:r===void 0?o:r},n=i?e:()=>e(()=>W(()=>K(s)));_=s,R=null;try{return Z(n,!0)}finally{R=t,_=o}}function C(e,r,t){const o=ct(e,r,!1,I);Le(o)}function W(e){if(R===null)return e();const r=R;R=null;try{return e()}finally{R=r}}function it(e,r,t){let o=e.value;return(!e.comparator||!e.comparator(o,r))&&(e.value=r,e.observers&&e.observers.length&&Z(()=>{for(let i=0;i<e.observers.length;i+=1){const s=e.observers[i],n=te&&te.running;n&&te.disposed.has(s),(n?!s.tState:!s.state)&&(s.pure?x.push(s):w.push(s),s.observers&&Pe(s)),n||(s.state=I)}if(x.length>1e6)throw x=[],new Error},!1)),r}function Le(e){if(!e.fn)return;K(e);const r=_,t=R,o=j;R=_=e,st(e,e.value,o),R=t,_=r}function st(e,r,t){let o;try{o=e.fn(r)}catch(i){return e.pure&&(e.state=I,e.owned&&e.owned.forEach(K),e.owned=null),e.updatedAt=t+1,De(i)}(!e.updatedAt||e.updatedAt<=t)&&(e.updatedAt!=null&&"observers"in e?it(e,o):e.value=o,e.updatedAt=t)}function ct(e,r,t,o=I,i){const s={fn:e,state:o,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:r,owner:_,context:null,pure:t};return _===null||_!==Be&&(_.owned?_.owned.push(s):_.owned=[s]),s}function Ue(e){if(e.state===0)return;if(e.state===Y)return oe(e);if(e.suspense&&W(e.suspense.inFallback))return e.suspense.effects.push(e);const r=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<j);)e.state&&r.push(e);for(let t=r.length-1;t>=0;t--)if(e=r[t],e.state===I)Le(e);else if(e.state===Y){const o=x;x=null,Z(()=>oe(e,r[0]),!1),x=o}}function Z(e,r){if(x)return e();let t=!1;r||(x=[]),w?t=!0:w=[],j++;try{const o=e();return nt(t),o}catch(o){t||(w=null),x=null,De(o)}}function nt(e){if(x&&(Me(x),x=null),e)return;const r=w;w=null,r.length&&Z(()=>rt(r),!1)}function Me(e){for(let r=0;r<e.length;r++)Ue(e[r])}function oe(e,r){e.state=0;for(let t=0;t<e.sources.length;t+=1){const o=e.sources[t];if(o.sources){const i=o.state;i===I?o!==r&&(!o.updatedAt||o.updatedAt<j)&&Ue(o):i===Y&&oe(o,r)}}}function Pe(e){for(let r=0;r<e.observers.length;r+=1){const t=e.observers[r];t.state||(t.state=Y,t.pure?x.push(t):w.push(t),t.observers&&Pe(t))}}function K(e){let r;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),o=e.sourceSlots.pop(),i=t.observers;if(i&&i.length){const s=i.pop(),n=t.observerSlots.pop();o<i.length&&(s.sourceSlots[n]=o,i[o]=s,t.observerSlots[o]=n)}}if(e.owned){for(r=e.owned.length-1;r>=0;r--)K(e.owned[r]);e.owned=null}if(e.cleanups){for(r=e.cleanups.length-1;r>=0;r--)e.cleanups[r]();e.cleanups=null}e.state=0,e.context=null}function De(e){throw e}function S(e,r){return W(()=>e(r||{}))}function at(e,r,t){let o=t.length,i=r.length,s=o,n=0,c=0,d=r[i-1].nextSibling,y=null;for(;n<i||c<s;){if(r[n]===t[c]){n++,c++;continue}for(;r[i-1]===t[s-1];)i--,s--;if(i===n){const g=s<o?c?t[c-1].nextSibling:t[s-c]:d;for(;c<s;)e.insertBefore(t[c++],g)}else if(s===c)for(;n<i;)(!y||!y.has(r[n]))&&r[n].remove(),n++;else if(r[n]===t[s-1]&&t[c]===r[i-1]){const g=r[--i].nextSibling;e.insertBefore(t[c++],r[n++].nextSibling),e.insertBefore(t[--s],g),r[i]=t[s]}else{if(!y){y=new Map;let $=c;for(;$<s;)y.set(t[$],$++)}const g=y.get(r[n]);if(g!=null)if(c<g&&g<s){let $=n,ee=1,Te;for(;++$<i&&$<s&&!((Te=y.get(r[$]))==null||Te!==g+ee);)ee++;if(ee>g-c){const tt=r[n];for(;c<g;)e.insertBefore(t[c++],tt)}else e.replaceChild(t[c++],r[n++])}else n++;else r[n++].remove()}}}function lt(e,r,t,o={}){let i;return ot(s=>{i=s,r===document?e():B(r,e(),r.firstChild?null:void 0,t)},o.owner),()=>{i(),r.textContent=""}}function Q(e,r,t){let o;const i=()=>{const n=document.createElement("template");return n.innerHTML=e,t?n.content.firstChild.firstChild:n.content.firstChild},s=r?()=>W(()=>document.importNode(o||(o=i()),!0)):()=>(o||(o=i())).cloneNode(!0);return s.cloneNode=s,s}function ht(e,r,t){t==null?e.removeAttribute(r):e.setAttribute(r,t)}function L(e,r){r==null?e.removeAttribute("class"):e.className=r}function B(e,r,t,o){if(t!==void 0&&!o&&(o=[]),typeof r!="function")return O(e,r,o,t);C(i=>O(e,r(),i,t),o)}function O(e,r,t,o,i){for(;typeof t=="function";)t=t();if(r===t)return t;const s=typeof r,n=o!==void 0;if(e=n&&t[0]&&t[0].parentNode||e,s==="string"||s==="number")if(s==="number"&&(r=r.toString()),n){let c=t[0];c&&c.nodeType===3?c.data=r:c=document.createTextNode(r),t=F(e,t,o,c)}else t!==""&&typeof t=="string"?t=e.firstChild.data=r:t=e.textContent=r;else if(r==null||s==="boolean")t=F(e,t,o);else{if(s==="function")return C(()=>{let c=r();for(;typeof c=="function";)c=c();t=O(e,c,t,o)}),()=>t;if(Array.isArray(r)){const c=[],d=t&&Array.isArray(t);if(ie(c,r,t,i))return C(()=>t=O(e,c,t,o,!0)),()=>t;if(c.length===0){if(t=F(e,t,o),n)return t}else d?t.length===0?$e(e,c,o):at(e,t,c):(t&&F(e),$e(e,c));t=c}else if(r.nodeType){if(Array.isArray(t)){if(n)return t=F(e,t,o,r);F(e,t,null,r)}else t==null||t===""||!e.firstChild?e.appendChild(r):e.replaceChild(r,e.firstChild);t=r}else console.warn("Unrecognized value. Skipped inserting",r)}return t}function ie(e,r,t,o){let i=!1;for(let s=0,n=r.length;s<n;s++){let c=r[s],d=t&&t[s],y;if(!(c==null||c===!0||c===!1))if((y=typeof c)=="object"&&c.nodeType)e.push(c);else if(Array.isArray(c))i=ie(e,c,d)||i;else if(y==="function")if(o){for(;typeof c=="function";)c=c();i=ie(e,Array.isArray(c)?c:[c],Array.isArray(d)?d:[d])||i}else e.push(c),i=!0;else{const g=String(c);d&&d.nodeType===3&&d.data===g?e.push(d):e.push(document.createTextNode(g))}}return i}function $e(e,r,t=null){for(let o=0,i=r.length;o<i;o++)e.insertBefore(r[o],t)}function F(e,r,t,o){if(t===void 0)return e.textContent="";const i=o||document.createTextNode("");if(r.length){let s=!1;for(let n=r.length-1;n>=0;n--){const c=r[n];if(i!==c){const d=c.parentNode===e;!s&&!n?d?e.replaceChild(i,c):e.insertBefore(i,t):d&&c.remove()}else s=!0}}else e.insertBefore(i,t);return[i]}const ft="_container_14umt_1",vt={container:ft},ut="_gallery_1elgd_1",pt="_canvas_container_1elgd_7",dt="_canvas_1elgd_7",se={gallery:ut,canvas_container:pt,canvas:dt},gt=Q("<div><canvas>"),xt=Q("<div>");function re({id:e}){return(()=>{const r=gt(),t=r.firstChild;return ht(t,"id",e),C(o=>{const i=se.canvas_container,s=se.canvas;return i!==o._v$&&L(r,o._v$=i),s!==o._v$2&&L(t,o._v$2=s),o},{_v$:void 0,_v$2:void 0}),r})()}function _t(){return(()=>{const e=xt();return B(e,S(re,{id:"chakana1"}),null),B(e,S(re,{id:"chakana2"}),null),B(e,S(re,{id:"chakana3"}),null),C(()=>L(e,se.gallery)),e})()}const At="_weigth_15un7_15",we={weigth:At},Et=Q("<div><p>Dale click a la imagen y, sosteniendo el click, mueve el mouse</p><p>Click on the image and, holding the click, move the mouse</p><p>Cliquez sur l'image et, en le laissant appuyé, déplacez la souris</p><p>This website is 51Ko");function yt(){return(()=>{const e=Et(),r=e.firstChild,t=r.nextSibling,o=t.nextSibling,i=o.nextSibling;return C(s=>{const n=we.container,c=we.weigth;return n!==s._v$&&L(e,s._v$=n),c!==s._v$2&&L(i,s._v$2=c),s},{_v$:void 0,_v$2:void 0}),e})()}const Rt=Q("<div>");function bt(){return(()=>{const e=Rt();return B(e,S(_t,{}),null),B(e,S(yt,{}),null),C(()=>L(e,vt.container)),e})()}const mt=document.getElementById("root");lt(()=>S(bt,{}),mt);const xe=`
    attribute vec3 coordinates;
    
    uniform mat4 Pmatrix;
    uniform mat4 Vmatrix;
    uniform mat4 Mmatrix;

    varying vec2 vTextureCoord;

    void main(void) {
        vTextureCoord = coordinates.xy;
    
        gl_Position = Pmatrix * Vmatrix * Mmatrix * vec4(coordinates, 1.);

    }`,Tt=`
    varying highp vec2 vTextureCoord;

    void main(void) {
        highp vec2 st = vTextureCoord;
        st.x = st.x * 0.5 + 0.5;
        st.y = st.y * 0.5 + 0.5;

        highp vec2 st1 = vTextureCoord;
        st1.x = st1.x * 0.5 + 0.5;
        st1.y = st1.y * 0.5 + 0.5;

        st1.x += 0.;

        // Formas ---------------------------------
        // Chakana 1
        // Cuadrado centro
        highp vec2 bl = step(vec2(0.3), st);
        highp vec2 tr = step(vec2(0.3), 1. - st);
        highp vec3 square = vec3(bl.x * bl.y * tr.x * tr.y);

        // Rectangulos
        highp float rectht = step(0.4, st.y);
        highp float recthb = step(0.4, 1. - st.y);
        highp float recthl = step(0.2, st.x);
        highp float recthr = step(0.2, 1. - st.x);
        highp vec3 recth = vec3(rectht * recthb * recthl * recthr);

        highp float rectvt = step(0.2, st.y);
        highp float rectvb = step(0.2, 1. - st.y);
        highp float rectvl = step(0.4, st.x);
        highp float rectvr = step(0.4, 1. - st.x);
        highp vec3 rectv = vec3(rectvt * rectvb * rectvl * rectvr);

        // Circle
        highp vec2 dist = st - vec2(0.5);
        highp float cr = 1. - smoothstep(0.1 - 0.02, 0.02 + 0.1, dot(dist, dist) * 10.);
        highp vec3 circle = vec3(cr);

        // Chakana 2 --------------
        // Cuadrado centro
        highp vec2 bl1 = step(vec2(0.31), st1);
        highp vec2 tr1 = step(vec2(0.31), 1. - st1);
        highp vec3 square1 = vec3(bl1.x * bl1.y * tr1.x * tr1.y);

        // Rectangulos
        highp float rectht1 = step(0.41, st1.y);
        highp float recthb1 = step(0.41, 1. - st1.y);
        highp float recthl1 = step(0.21, st1.x);
        highp float recthr1 = step(0.21, 1. - st1.x);
        highp vec3 recth1 = vec3(rectht1 * recthb1 * recthl1 * recthr1);

        highp float rectvt1 = step(0.21, st1.y);
        highp float rectvb1 = step(0.21, 1. - st1.y);
        highp float rectvl1 = step(0.41, st1.x);
        highp float rectvr1 = step(0.41, 1. - st1.x);
        highp vec3 rectv1 = vec3(rectvt1 * rectvb1 * rectvl1 * rectvr1);

        // Circle
        highp vec2 dist1 = st1 - vec2(0.5);
        highp float cr1 = 1. - smoothstep(0.08 - 0.005, 0.005 + 0.08, dot(dist1, dist1) * 10.);
        highp vec3 circle1 = vec3(cr1);


        // Color ------------------------------------

        highp vec3 color = mix(square, vec3(1.), recth);
        color = mix(color, vec3(1.), rectv);
        color += circle;

        highp vec3 color1 = mix(square1, vec3(1.), recth1);
        color1 = mix(color1, vec3(1.), rectv1);
        color1 += circle1;

        color -= color1;

        color *= vec3(0.9, 0.8, 0.9);

        gl_FragColor = vec4(color, 1.);
    }`,p=document.getElementById("chakana1"),a=p.getContext("experimental-webgl"),$t=[-1,1,0,-1,-1,0,1,-1,0,1,1,0],Ie=[3,2,1,3,1,0],Ne=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,Ne);a.bufferData(a.ARRAY_BUFFER,new Float32Array($t),a.STATIC_DRAW);a.bindBuffer(a.ARRAY_BUFFER,null);const Ye=a.createBuffer();a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,Ye);a.bufferData(a.ELEMENT_ARRAY_BUFFER,new Uint16Array(Ie),a.STATIC_DRAW);a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,null);const wt=xe,_e=a.createShader(a.VERTEX_SHADER);a.shaderSource(_e,wt);a.compileShader(_e);const Ct=Tt,Ae=a.createShader(a.FRAGMENT_SHADER);a.shaderSource(Ae,Ct);a.compileShader(Ae);const b=a.createProgram();a.attachShader(b,_e);a.attachShader(b,Ae);a.linkProgram(b);var Ft=a.getUniformLocation(b,"Pmatrix"),St=a.getUniformLocation(b,"Vmatrix"),Bt=a.getUniformLocation(b,"Mmatrix");a.bindBuffer(a.ARRAY_BUFFER,Ne);var Oe=a.getAttribLocation(b,"coordinates");a.vertexAttribPointer(Oe,3,a.FLOAT,!1,0,0);a.enableVertexAttribArray(Oe);a.useProgram(b);function Lt(e,r,t,o){var i=Math.tan(e*.5*Math.PI/180);return[.5/i,0,0,0,0,.5*r/i,0,0,0,0,-(o+t)/(o-t),-1,0,0,-2*o*t/(o-t),0]}var Ut=Lt(22,p.width*.5/p.height,1,100),f=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],ce=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];ce[14]=ce[14]-2.5;var Ce=.95,N=!1,U,M,P=0,D=0,Mt=function(e){return N=!0,U=e.pageX,M=e.pageY,e.preventDefault(),!1},Pt=function(e){N=!0;let r=e.touches[0];return U=r.pageX,M=r.pageY,e.preventDefault(),!1},Ee=function(e){N=!1},Dt=function(e){if(!N)return!1;P=(e.pageX-U)*2*Math.PI/p.width,D=(e.pageY-M)*2*Math.PI/p.height,H+=P,X+=D,U=e.pageX,M=e.pageY,e.preventDefault()},It=function(e){if(!N)return!1;let r=e.touches[0];P=(r.pageX-U)*2*Math.PI/p.width,D=(r.pageY-M)*2*Math.PI/p.height,H+=P,X+=D,U=r.pageX,M=r.pageY,e.preventDefault()};p.addEventListener("mousedown",Mt,!1);p.addEventListener("mouseup",Ee,!1);p.addEventListener("mouseout",Ee,!1);p.addEventListener("mousemove",Dt,!1);p.addEventListener("touchstart",Pt,!1);p.addEventListener("touchend",Ee,!1);p.addEventListener("touchmove",It,!1);function Nt(e,r){var t=Math.cos(r),o=Math.sin(r),i=e[1],s=e[5],n=e[9];e[1]=e[1]*t-e[2]*o,e[5]=e[5]*t-e[6]*o,e[9]=e[9]*t-e[10]*o,e[2]=e[2]*t+i*o,e[6]=e[6]*t+s*o,e[10]=e[10]*t+n*o}function Yt(e,r){var t=Math.cos(r),o=Math.sin(r),i=e[0],s=e[4],n=e[8];e[0]=t*e[0]+o*e[2],e[4]=t*e[4]+o*e[6],e[8]=t*e[8]+o*e[10],e[2]=t*e[2]-o*i,e[6]=t*e[6]-o*s,e[10]=t*e[10]-o*n}var H=0,X=0,He=function(e){N||(P*=Ce,D*=Ce,H+=P,X+=D),f[0]=1,f[1]=0,f[2]=0,f[3]=0,f[4]=0,f[5]=1,f[6]=0,f[7]=0,f[8]=0,f[9]=0,f[10]=1,f[11]=0,f[12]=0,f[13]=0,f[14]=0,f[15]=1,Yt(f,H),Nt(f,X),a.enable(a.DEPTH_TEST),a.clearColor(0,0,0,1),a.clearDepth(1),a.viewport(0,0,p.width,p.height),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT),a.uniformMatrix4fv(Ft,!1,Ut),a.uniformMatrix4fv(St,!1,ce),a.uniformMatrix4fv(Bt,!1,f),a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,Ye),a.drawElements(a.TRIANGLES,Ie.length,a.UNSIGNED_SHORT,0),window.requestAnimationFrame(He)};He();const Ot=`
    varying highp vec2 vTextureCoord;

    void main(void) {
        highp vec2 st = vTextureCoord;
        st.x = st.x * 0.5 + 0.5;
        st.y = st.y * 0.5 + 0.5;

        highp vec2 st1 = vTextureCoord;
        st1.x = st1.x * 0.5 + 0.5;
        st1.y = st1.y * 0.5 + 0.5;

        st1.x += 0.;

        // Formas ---------------------------------
        // Chakana 1
        // Cuadrado centro
        highp vec2 bl = step(vec2(0.3), st);
        highp vec2 tr = step(vec2(0.3), 1. - st);
        highp vec3 square = vec3(bl.x * bl.y * tr.x * tr.y);

        // Rectangulos
        highp float rectht = step(0.4, st.y);
        highp float recthb = step(0.4, 1. - st.y);
        highp float recthl = step(0.2, st.x);
        highp float recthr = step(0.2, 1. - st.x);
        highp vec3 recth = vec3(rectht * recthb * recthl * recthr);

        highp float rectvt = step(0.2, st.y);
        highp float rectvb = step(0.2, 1. - st.y);
        highp float rectvl = step(0.4, st.x);
        highp float rectvr = step(0.4, 1. - st.x);
        highp vec3 rectv = vec3(rectvt * rectvb * rectvl * rectvr);

        // Circle
        highp vec2 dist = st - vec2(0.5);
        highp float cr = 1. - smoothstep(0.1 - 0.02, 0.02 + 0.1, dot(dist, dist) * 10.);
        highp vec3 circle = vec3(cr);

        // Chakana 2 --------------
        // Cuadrado centro
        highp vec2 bl1 = step(vec2(0.31), st1);
        highp vec2 tr1 = step(vec2(0.31), 1. - st1);
        highp vec3 square1 = vec3(bl1.x * bl1.y * tr1.x * tr1.y);

        // Rectangulos
        highp float rectht1 = step(0.41, st1.y);
        highp float recthb1 = step(0.41, 1. - st1.y);
        highp float recthl1 = step(0.21, st1.x);
        highp float recthr1 = step(0.21, 1. - st1.x);
        highp vec3 recth1 = vec3(rectht1 * recthb1 * recthl1 * recthr1);

        highp float rectvt1 = step(0.21, st1.y);
        highp float rectvb1 = step(0.21, 1. - st1.y);
        highp float rectvl1 = step(0.41, st1.x);
        highp float rectvr1 = step(0.41, 1. - st1.x);
        highp vec3 rectv1 = vec3(rectvt1 * rectvb1 * rectvl1 * rectvr1);

        // Circle
        highp vec2 dist1 = st1 - vec2(0.5);
        highp float cr1 = 1. - smoothstep(0.08 - 0.005, 0.005 + 0.08, dot(dist1, dist1) * 10.);
        highp vec3 circle1 = vec3(cr1);


        // Color ------------------------------------

        highp vec3 color = mix(square, vec3(1.), recth);
        color = mix(color, vec3(1.), rectv);
        color += circle;

        highp vec3 color1 = mix(square1, vec3(1.), recth1);
        color1 = mix(color1, vec3(1.), rectv1);
        color1 += circle1;

        color -= color1;


        color *= vec3(0.9, 0.9, 0.8);

        gl_FragColor = vec4(color, 1.);
    }`,A=document.getElementById("chakana2"),l=A.getContext("experimental-webgl"),Ht=[-1,1,0,-1,-1,0,1,-1,0,1,1,0],Xe=[3,2,1,3,1,0],qe=l.createBuffer();l.bindBuffer(l.ARRAY_BUFFER,qe);l.bufferData(l.ARRAY_BUFFER,new Float32Array(Ht),l.STATIC_DRAW);l.bindBuffer(l.ARRAY_BUFFER,null);const Ve=l.createBuffer();l.bindBuffer(l.ELEMENT_ARRAY_BUFFER,Ve);l.bufferData(l.ELEMENT_ARRAY_BUFFER,new Uint16Array(Xe),l.STATIC_DRAW);l.bindBuffer(l.ELEMENT_ARRAY_BUFFER,null);const Xt=xe,ye=l.createShader(l.VERTEX_SHADER);l.shaderSource(ye,Xt);l.compileShader(ye);const qt=Ot,Re=l.createShader(l.FRAGMENT_SHADER);l.shaderSource(Re,qt);l.compileShader(Re);const m=l.createProgram();l.attachShader(m,ye);l.attachShader(m,Re);l.linkProgram(m);var Vt=l.getUniformLocation(m,"Pmatrix"),Gt=l.getUniformLocation(m,"Vmatrix"),kt=l.getUniformLocation(m,"Mmatrix");l.bindBuffer(l.ARRAY_BUFFER,qe);var Ge=l.getAttribLocation(m,"coordinates");l.vertexAttribPointer(Ge,3,l.FLOAT,!1,0,0);l.enableVertexAttribArray(Ge);l.useProgram(m);function jt(e,r,t,o){var i=Math.tan(e*.5*Math.PI/180);return[.5/i,0,0,0,0,.5*r/i,0,0,0,0,-(o+t)/(o-t),-1,0,0,-2*o*t/(o-t),0]}var Wt=jt(22,A.width*.5/A.height,1,100),v=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],ne=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];ne[14]=ne[14]-2.5;var Fe=.95,J=!1,ae,le,q=0,V=0,ke=function(e){return J=!0,ae=e.pageX,le=e.pageY,e.preventDefault(),!1},je=function(e){J=!1},Zt=function(e){if(!J)return!1;q=(e.pageX-ae)*2*Math.PI/A.width,V=(e.pageY-le)*2*Math.PI/A.height,he+=q,fe+=V,ae=e.pageX,le=e.pageY,e.preventDefault()};A.addEventListener("mouseover",ke,!1);A.addEventListener("mousedown",je,!1);A.addEventListener("mouseup",ke,!1);A.addEventListener("mouseout",je,!1);A.addEventListener("mousemove",Zt,!1);function Kt(e,r){var t=Math.cos(r),o=Math.sin(r),i=e[1],s=e[5],n=e[9];e[1]=e[1]*t-e[2]*o,e[5]=e[5]*t-e[6]*o,e[9]=e[9]*t-e[10]*o,e[2]=e[2]*t+i*o,e[6]=e[6]*t+s*o,e[10]=e[10]*t+n*o}function Qt(e,r){var t=Math.cos(r),o=Math.sin(r),i=e[0],s=e[4],n=e[8];e[0]=t*e[0]+o*e[2],e[4]=t*e[4]+o*e[6],e[8]=t*e[8]+o*e[10],e[2]=t*e[2]-o*i,e[6]=t*e[6]-o*s,e[10]=t*e[10]-o*n}var he=0,fe=0,We=function(e){J||(q*=Fe,V*=Fe,he+=q,fe+=V),v[0]=1,v[1]=0,v[2]=0,v[3]=0,v[4]=0,v[5]=1,v[6]=0,v[7]=0,v[8]=0,v[9]=0,v[10]=1,v[11]=0,v[12]=0,v[13]=0,v[14]=0,v[15]=1,Qt(v,he),Kt(v,fe),l.enable(l.DEPTH_TEST),l.clearColor(0,0,0,1),l.clearDepth(1),l.viewport(0,0,A.width,A.height),l.clear(l.COLOR_BUFFER_BIT|l.DEPTH_BUFFER_BIT),l.uniformMatrix4fv(Vt,!1,Wt),l.uniformMatrix4fv(Gt,!1,ne),l.uniformMatrix4fv(kt,!1,v),l.bindBuffer(l.ELEMENT_ARRAY_BUFFER,Ve),l.drawElements(l.TRIANGLES,Xe.length,l.UNSIGNED_SHORT,0),window.requestAnimationFrame(We)};We();const Jt=`
    varying highp vec2 vTextureCoord;

    void main(void) {
        highp vec2 st = vTextureCoord;
        st.x = st.x * 0.5 + 0.5;
        st.y = st.y * 0.5 + 0.5;

        highp vec2 st1 = vTextureCoord;
        st1.x = st1.x * 0.5 + 0.5;
        st1.y = st1.y * 0.5 + 0.5;

        st1.x += 0.;

        // Formas ---------------------------------
        // Chakana 1
        // Cuadrado centro
        highp vec2 bl = step(vec2(0.3), st);
        highp vec2 tr = step(vec2(0.3), 1. - st);
        highp vec3 square = vec3(bl.x * bl.y * tr.x * tr.y);

        // Rectangulos
        highp float rectht = step(0.4, st.y);
        highp float recthb = step(0.4, 1. - st.y);
        highp float recthl = step(0.2, st.x);
        highp float recthr = step(0.2, 1. - st.x);
        highp vec3 recth = vec3(rectht * recthb * recthl * recthr);

        highp float rectvt = step(0.2, st.y);
        highp float rectvb = step(0.2, 1. - st.y);
        highp float rectvl = step(0.4, st.x);
        highp float rectvr = step(0.4, 1. - st.x);
        highp vec3 rectv = vec3(rectvt * rectvb * rectvl * rectvr);

        // Circle
        highp vec2 dist = st - vec2(0.5);
        highp float cr = 1. - smoothstep(0.1 - 0.02, 0.02 + 0.1, dot(dist, dist) * 10.);
        highp vec3 circle = vec3(cr);

        // Chakana 2 --------------
        // Cuadrado centro
        highp vec2 bl1 = step(vec2(0.31), st1);
        highp vec2 tr1 = step(vec2(0.31), 1. - st1);
        highp vec3 square1 = vec3(bl1.x * bl1.y * tr1.x * tr1.y);

        // Rectangulos
        highp float rectht1 = step(0.41, st1.y);
        highp float recthb1 = step(0.41, 1. - st1.y);
        highp float recthl1 = step(0.21, st1.x);
        highp float recthr1 = step(0.21, 1. - st1.x);
        highp vec3 recth1 = vec3(rectht1 * recthb1 * recthl1 * recthr1);

        highp float rectvt1 = step(0.21, st1.y);
        highp float rectvb1 = step(0.21, 1. - st1.y);
        highp float rectvl1 = step(0.41, st1.x);
        highp float rectvr1 = step(0.41, 1. - st1.x);
        highp vec3 rectv1 = vec3(rectvt1 * rectvb1 * rectvl1 * rectvr1);

        // Circle
        highp vec2 dist1 = st1 - vec2(0.5);
        highp float cr1 = 1. - smoothstep(0.08 - 0.005, 0.005 + 0.08, dot(dist1, dist1) * 10.);
        highp vec3 circle1 = vec3(cr1);


        // Color ------------------------------------

        highp vec3 color = mix(square, vec3(1.), recth);
        color = mix(color, vec3(1.), rectv);
        color += circle;

        highp vec3 color1 = mix(square1, vec3(1.), recth1);
        color1 = mix(color1, vec3(1.), rectv1);
        color1 += circle1;

        color -= color1;


        color *= vec3(0.7, 0.9, 0.8);

        gl_FragColor = vec4(color, 1.);
    }`,E=document.getElementById("chakana3"),h=E.getContext("experimental-webgl"),zt=[-1,1,0,-1,-1,0,1,-1,0,1,1,0],Ze=[3,2,1,3,1,0],Ke=h.createBuffer();h.bindBuffer(h.ARRAY_BUFFER,Ke);h.bufferData(h.ARRAY_BUFFER,new Float32Array(zt),h.STATIC_DRAW);h.bindBuffer(h.ARRAY_BUFFER,null);const Qe=h.createBuffer();h.bindBuffer(h.ELEMENT_ARRAY_BUFFER,Qe);h.bufferData(h.ELEMENT_ARRAY_BUFFER,new Uint16Array(Ze),h.STATIC_DRAW);h.bindBuffer(h.ELEMENT_ARRAY_BUFFER,null);const er=xe,be=h.createShader(h.VERTEX_SHADER);h.shaderSource(be,er);h.compileShader(be);const tr=Jt,me=h.createShader(h.FRAGMENT_SHADER);h.shaderSource(me,tr);h.compileShader(me);const T=h.createProgram();h.attachShader(T,be);h.attachShader(T,me);h.linkProgram(T);var rr=h.getUniformLocation(T,"Pmatrix"),or=h.getUniformLocation(T,"Vmatrix"),ir=h.getUniformLocation(T,"Mmatrix");h.bindBuffer(h.ARRAY_BUFFER,Ke);var Je=h.getAttribLocation(T,"coordinates");h.vertexAttribPointer(Je,3,h.FLOAT,!1,0,0);h.enableVertexAttribArray(Je);h.useProgram(T);function sr(e,r,t,o){var i=Math.tan(e*.5*Math.PI/180);return[.5/i,0,0,0,0,.5*r/i,0,0,0,0,-(o+t)/(o-t),-1,0,0,-2*o*t/(o-t),0]}var cr=sr(22,E.width*.5/E.height,1,100),u=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],ve=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];ve[14]=ve[14]-2.5;var Se=.95,z=!1,ue,pe,G=0,k=0,nr=function(e){return z=!0,ue=e.pageX,pe=e.pageY,e.preventDefault(),!1},ze=function(e){z=!1},ar=function(e){if(!z)return!1;G=(e.pageX-ue)*2*Math.PI/E.width,k=(e.pageY-pe)*2*Math.PI/E.height,de+=G,ge+=k,ue=e.pageX,pe=e.pageY,e.preventDefault()};E.addEventListener("mousedown",nr,!1);E.addEventListener("mouseup",ze,!1);E.addEventListener("mouseout",ze,!1);E.addEventListener("mousemove",ar,!1);function lr(e,r){var t=Math.cos(r),o=Math.sin(r),i=e[1],s=e[5],n=e[9];e[1]=e[1]*t-e[2]*o,e[5]=e[5]*t-e[6]*o,e[9]=e[9]*t-e[10]*o,e[2]=e[2]*t+i*o,e[6]=e[6]*t+s*o,e[10]=e[10]*t+n*o}function hr(e,r){var t=Math.cos(r),o=Math.sin(r),i=e[0],s=e[4],n=e[8];e[0]=t*e[0]+o*e[2],e[4]=t*e[4]+o*e[6],e[8]=t*e[8]+o*e[10],e[2]=t*e[2]-o*i,e[6]=t*e[6]-o*s,e[10]=t*e[10]-o*n}var de=0,ge=0,et=function(e){z||(G*=Se,k*=Se,de+=G,ge+=k),u[0]=1,u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=1,u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=1,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,hr(u,de),lr(u,ge),h.enable(h.DEPTH_TEST),h.clearColor(0,0,0,1),h.clearDepth(1),h.viewport(0,0,E.width,E.height),h.clear(h.COLOR_BUFFER_BIT|h.DEPTH_BUFFER_BIT),h.uniformMatrix4fv(rr,!1,cr),h.uniformMatrix4fv(or,!1,ve),h.uniformMatrix4fv(ir,!1,u),h.bindBuffer(h.ELEMENT_ARRAY_BUFFER,Qe),h.drawElements(h.TRIANGLES,Ze.length,h.UNSIGNED_SHORT,0),window.requestAnimationFrame(et)};et();
