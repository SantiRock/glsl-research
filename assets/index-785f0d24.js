(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();let et=Le;const L=1,P=2,Fe={owned:null,cleanups:null,context:null,owner:null};var x=null;let Q=null,R=null,g=null,C=null,q=0;function tt(e,r){const t=R,o=x,i=e.length===0,s=i?Fe:{owned:null,cleanups:null,context:null,owner:r===void 0?o:r},a=i?e:()=>e(()=>V(()=>k(s)));x=s,R=null;try{return G(a,!0)}finally{R=t,x=o}}function B(e,r,t){const o=it(e,r,!1,L);Se(o)}function V(e){if(R===null)return e();const r=R;R=null;try{return e()}finally{R=r}}function rt(e,r,t){let o=e.value;return(!e.comparator||!e.comparator(o,r))&&(e.value=r,e.observers&&e.observers.length&&G(()=>{for(let i=0;i<e.observers.length;i+=1){const s=e.observers[i],a=Q&&Q.running;a&&Q.disposed.has(s),(a?!s.tState:!s.state)&&(s.pure?g.push(s):C.push(s),s.observers&&Ue(s)),a||(s.state=L)}if(g.length>1e6)throw g=[],new Error},!1)),r}function Se(e){if(!e.fn)return;k(e);const r=x,t=R,o=q;R=x=e,ot(e,e.value,o),R=t,x=r}function ot(e,r,t){let o;try{o=e.fn(r)}catch(i){return e.pure&&(e.state=L,e.owned&&e.owned.forEach(k),e.owned=null),e.updatedAt=t+1,Pe(i)}(!e.updatedAt||e.updatedAt<=t)&&(e.updatedAt!=null&&"observers"in e?rt(e,o):e.value=o,e.updatedAt=t)}function it(e,r,t,o=L,i){const s={fn:e,state:o,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:r,owner:x,context:null,pure:t};return x===null||x!==Fe&&(x.owned?x.owned.push(s):x.owned=[s]),s}function Be(e){if(e.state===0)return;if(e.state===P)return z(e);if(e.suspense&&V(e.suspense.inFallback))return e.suspense.effects.push(e);const r=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<q);)e.state&&r.push(e);for(let t=r.length-1;t>=0;t--)if(e=r[t],e.state===L)Se(e);else if(e.state===P){const o=g;g=null,G(()=>z(e,r[0]),!1),g=o}}function G(e,r){if(g)return e();let t=!1;r||(g=[]),C?t=!0:C=[],q++;try{const o=e();return st(t),o}catch(o){t||(C=null),g=null,Pe(o)}}function st(e){if(g&&(Le(g),g=null),e)return;const r=C;C=null,r.length&&G(()=>et(r),!1)}function Le(e){for(let r=0;r<e.length;r++)Be(e[r])}function z(e,r){e.state=0;for(let t=0;t<e.sources.length;t+=1){const o=e.sources[t];if(o.sources){const i=o.state;i===L?o!==r&&(!o.updatedAt||o.updatedAt<q)&&Be(o):i===P&&z(o,r)}}}function Ue(e){for(let r=0;r<e.observers.length;r+=1){const t=e.observers[r];t.state||(t.state=P,t.pure?g.push(t):C.push(t),t.observers&&Ue(t))}}function k(e){let r;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),o=e.sourceSlots.pop(),i=t.observers;if(i&&i.length){const s=i.pop(),a=t.observerSlots.pop();o<i.length&&(s.sourceSlots[a]=o,i[o]=s,t.observerSlots[o]=a)}}if(e.owned){for(r=e.owned.length-1;r>=0;r--)k(e.owned[r]);e.owned=null}if(e.cleanups){for(r=e.cleanups.length-1;r>=0;r--)e.cleanups[r]();e.cleanups=null}e.state=0,e.context=null}function Pe(e){throw e}function F(e,r){return V(()=>e(r||{}))}function ct(e,r,t){let o=t.length,i=r.length,s=o,a=0,c=0,p=r[i-1].nextSibling,y=null;for(;a<i||c<s;){if(r[a]===t[c]){a++,c++;continue}for(;r[i-1]===t[s-1];)i--,s--;if(i===a){const d=s<o?c?t[c-1].nextSibling:t[s-c]:p;for(;c<s;)e.insertBefore(t[c++],d)}else if(s===c)for(;a<i;)(!y||!y.has(r[a]))&&r[a].remove(),a++;else if(r[a]===t[s-1]&&t[c]===r[i-1]){const d=r[--i].nextSibling;e.insertBefore(t[c++],r[a++].nextSibling),e.insertBefore(t[--s],d),r[i]=t[s]}else{if(!y){y=new Map;let $=c;for(;$<s;)y.set(t[$],$++)}const d=y.get(r[a]);if(d!=null)if(c<d&&d<s){let $=a,K=1,be;for(;++$<i&&$<s&&!((be=y.get(r[$]))==null||be!==d+K);)K++;if(K>d-c){const ze=r[a];for(;c<d;)e.insertBefore(t[c++],ze)}else e.replaceChild(t[c++],r[a++])}else a++;else r[a++].remove()}}}function at(e,r,t,o={}){let i;return tt(s=>{i=s,r===document?e():S(r,e(),r.firstChild?null:void 0,t)},o.owner),()=>{i(),r.textContent=""}}function U(e,r,t){let o;const i=()=>{const a=document.createElement("template");return a.innerHTML=e,t?a.content.firstChild.firstChild:a.content.firstChild},s=r?()=>V(()=>document.importNode(o||(o=i()),!0)):()=>(o||(o=i())).cloneNode(!0);return s.cloneNode=s,s}function nt(e,r,t){t==null?e.removeAttribute(r):e.setAttribute(r,t)}function M(e,r){r==null?e.removeAttribute("class"):e.className=r}function S(e,r,t,o){if(t!==void 0&&!o&&(o=[]),typeof r!="function")return D(e,r,o,t);B(i=>D(e,r(),i,t),o)}function D(e,r,t,o,i){for(;typeof t=="function";)t=t();if(r===t)return t;const s=typeof r,a=o!==void 0;if(e=a&&t[0]&&t[0].parentNode||e,s==="string"||s==="number")if(s==="number"&&(r=r.toString()),a){let c=t[0];c&&c.nodeType===3?c.data=r:c=document.createTextNode(r),t=w(e,t,o,c)}else t!==""&&typeof t=="string"?t=e.firstChild.data=r:t=e.textContent=r;else if(r==null||s==="boolean")t=w(e,t,o);else{if(s==="function")return B(()=>{let c=r();for(;typeof c=="function";)c=c();t=D(e,c,t,o)}),()=>t;if(Array.isArray(r)){const c=[],p=t&&Array.isArray(t);if(ee(c,r,t,i))return B(()=>t=D(e,c,t,o,!0)),()=>t;if(c.length===0){if(t=w(e,t,o),a)return t}else p?t.length===0?Te(e,c,o):ct(e,t,c):(t&&w(e),Te(e,c));t=c}else if(r.nodeType){if(Array.isArray(t)){if(a)return t=w(e,t,o,r);w(e,t,null,r)}else t==null||t===""||!e.firstChild?e.appendChild(r):e.replaceChild(r,e.firstChild);t=r}else console.warn("Unrecognized value. Skipped inserting",r)}return t}function ee(e,r,t,o){let i=!1;for(let s=0,a=r.length;s<a;s++){let c=r[s],p=t&&t[s],y;if(!(c==null||c===!0||c===!1))if((y=typeof c)=="object"&&c.nodeType)e.push(c);else if(Array.isArray(c))i=ee(e,c,p)||i;else if(y==="function")if(o){for(;typeof c=="function";)c=c();i=ee(e,Array.isArray(c)?c:[c],Array.isArray(p)?p:[p])||i}else e.push(c),i=!0;else{const d=String(c);p&&p.nodeType===3&&p.data===d?e.push(p):e.push(document.createTextNode(d))}}return i}function Te(e,r,t=null){for(let o=0,i=r.length;o<i;o++)e.insertBefore(r[o],t)}function w(e,r,t,o){if(t===void 0)return e.textContent="";const i=o||document.createTextNode("");if(r.length){let s=!1;for(let a=r.length-1;a>=0;a--){const c=r[a];if(i!==c){const p=c.parentNode===e;!s&&!a?p?e.replaceChild(i,c):e.insertBefore(i,t):p&&c.remove()}else s=!0}}else e.insertBefore(i,t);return[i]}const lt="_container_14umt_1",ht={container:lt},ft="_gallery_10oll_1",vt="_canvas_container_10oll_7",ut="_canvas_10oll_7",te={gallery:ft,canvas_container:vt,canvas:ut},pt=U("<div><canvas>"),dt=U("<div>");function J({id:e}){return(()=>{const r=pt(),t=r.firstChild;return nt(t,"id",e),B(o=>{const i=te.canvas_container,s=te.canvas;return i!==o._v$&&M(r,o._v$=i),s!==o._v$2&&M(t,o._v$2=s),o},{_v$:void 0,_v$2:void 0}),r})()}function gt(){return(()=>{const e=dt();return S(e,F(J,{id:"chakana1"}),null),S(e,F(J,{id:"chakana2"}),null),S(e,F(J,{id:"chakana3"}),null),B(()=>M(e,te.gallery)),e})()}const xt=U("<p>Dale click a la imagen y, sosteniendo el click, mueve el mouse"),At=U("<p>Click on the image and, holding the click, move the mouse"),_t=U("<p>Cliquez sur l'image et, en le laissant appuyé, déplacez la souris");function Et(){return[xt(),At(),_t()]}const yt=U("<div>");function Rt(){return(()=>{const e=yt();return S(e,F(gt,{}),null),S(e,F(Et,{}),null),B(()=>M(e,ht.container)),e})()}const mt=document.getElementById("root");at(()=>F(Rt,{}),mt);const xe=`
    attribute vec3 coordinates;
    
    uniform mat4 Pmatrix;
    uniform mat4 Vmatrix;
    uniform mat4 Mmatrix;

    varying vec2 vTextureCoord;

    void main(void) {
        vTextureCoord = coordinates.xy;
    
        gl_Position = Pmatrix * Vmatrix * Mmatrix * vec4(coordinates, 1.);

    }`,bt=`
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
    }`,A=document.getElementById("chakana1"),n=A.getContext("experimental-webgl"),Tt=[-1,1,0,-1,-1,0,1,-1,0,1,1,0],Me=[3,2,1,3,1,0],De=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,De);n.bufferData(n.ARRAY_BUFFER,new Float32Array(Tt),n.STATIC_DRAW);n.bindBuffer(n.ARRAY_BUFFER,null);const Ie=n.createBuffer();n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,Ie);n.bufferData(n.ELEMENT_ARRAY_BUFFER,new Uint16Array(Me),n.STATIC_DRAW);n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,null);const $t=xe,Ae=n.createShader(n.VERTEX_SHADER);n.shaderSource(Ae,$t);n.compileShader(Ae);const Ct=bt,_e=n.createShader(n.FRAGMENT_SHADER);n.shaderSource(_e,Ct);n.compileShader(_e);const m=n.createProgram();n.attachShader(m,Ae);n.attachShader(m,_e);n.linkProgram(m);var wt=n.getUniformLocation(m,"Pmatrix"),Ft=n.getUniformLocation(m,"Vmatrix"),St=n.getUniformLocation(m,"Mmatrix");n.bindBuffer(n.ARRAY_BUFFER,De);var Ne=n.getAttribLocation(m,"coordinates");n.vertexAttribPointer(Ne,3,n.FLOAT,!1,0,0);n.enableVertexAttribArray(Ne);n.useProgram(m);function Bt(e,r,t,o){var i=Math.tan(e*.5*Math.PI/180);return[.5/i,0,0,0,0,.5*r/i,0,0,0,0,-(o+t)/(o-t),-1,0,0,-2*o*t/(o-t),0]}var Lt=Bt(22,A.width*.5/A.height,1,100),f=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],re=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];re[14]=re[14]-2.5;var $e=.95,j=!1,oe,ie,I=0,N=0,Ut=function(e){return j=!0,oe=e.pageX,ie=e.pageY,e.preventDefault(),!1},Ye=function(e){j=!1},Pt=function(e){if(!j)return!1;I=(e.pageX-oe)*2*Math.PI/A.width,N=(e.pageY-ie)*2*Math.PI/A.height,se+=I,ce+=N,oe=e.pageX,ie=e.pageY,e.preventDefault()};A.addEventListener("mousedown",Ut,!1);A.addEventListener("mouseup",Ye,!1);A.addEventListener("mouseout",Ye,!1);A.addEventListener("mousemove",Pt,!1);function Mt(e,r){var t=Math.cos(r),o=Math.sin(r),i=e[1],s=e[5],a=e[9];e[1]=e[1]*t-e[2]*o,e[5]=e[5]*t-e[6]*o,e[9]=e[9]*t-e[10]*o,e[2]=e[2]*t+i*o,e[6]=e[6]*t+s*o,e[10]=e[10]*t+a*o}function Dt(e,r){var t=Math.cos(r),o=Math.sin(r),i=e[0],s=e[4],a=e[8];e[0]=t*e[0]+o*e[2],e[4]=t*e[4]+o*e[6],e[8]=t*e[8]+o*e[10],e[2]=t*e[2]-o*i,e[6]=t*e[6]-o*s,e[10]=t*e[10]-o*a}var se=0,ce=0,Oe=function(e){j||(I*=$e,N*=$e,se+=I,ce+=N),f[0]=1,f[1]=0,f[2]=0,f[3]=0,f[4]=0,f[5]=1,f[6]=0,f[7]=0,f[8]=0,f[9]=0,f[10]=1,f[11]=0,f[12]=0,f[13]=0,f[14]=0,f[15]=1,Dt(f,se),Mt(f,ce),n.enable(n.DEPTH_TEST),n.clearColor(0,0,0,1),n.clearDepth(1),n.viewport(0,0,A.width,A.height),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),n.uniformMatrix4fv(wt,!1,Lt),n.uniformMatrix4fv(Ft,!1,re),n.uniformMatrix4fv(St,!1,f),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,Ie),n.drawElements(n.TRIANGLES,Me.length,n.UNSIGNED_SHORT,0),window.requestAnimationFrame(Oe)};Oe();const It=`
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
    }`,_=document.getElementById("chakana2"),l=_.getContext("experimental-webgl"),Nt=[-1,1,0,-1,-1,0,1,-1,0,1,1,0],He=[3,2,1,3,1,0],Xe=l.createBuffer();l.bindBuffer(l.ARRAY_BUFFER,Xe);l.bufferData(l.ARRAY_BUFFER,new Float32Array(Nt),l.STATIC_DRAW);l.bindBuffer(l.ARRAY_BUFFER,null);const qe=l.createBuffer();l.bindBuffer(l.ELEMENT_ARRAY_BUFFER,qe);l.bufferData(l.ELEMENT_ARRAY_BUFFER,new Uint16Array(He),l.STATIC_DRAW);l.bindBuffer(l.ELEMENT_ARRAY_BUFFER,null);const Yt=xe,Ee=l.createShader(l.VERTEX_SHADER);l.shaderSource(Ee,Yt);l.compileShader(Ee);const Ot=It,ye=l.createShader(l.FRAGMENT_SHADER);l.shaderSource(ye,Ot);l.compileShader(ye);const b=l.createProgram();l.attachShader(b,Ee);l.attachShader(b,ye);l.linkProgram(b);var Ht=l.getUniformLocation(b,"Pmatrix"),Xt=l.getUniformLocation(b,"Vmatrix"),qt=l.getUniformLocation(b,"Mmatrix");l.bindBuffer(l.ARRAY_BUFFER,Xe);var Ve=l.getAttribLocation(b,"coordinates");l.vertexAttribPointer(Ve,3,l.FLOAT,!1,0,0);l.enableVertexAttribArray(Ve);l.useProgram(b);function Vt(e,r,t,o){var i=Math.tan(e*.5*Math.PI/180);return[.5/i,0,0,0,0,.5*r/i,0,0,0,0,-(o+t)/(o-t),-1,0,0,-2*o*t/(o-t),0]}var Gt=Vt(22,_.width*.5/_.height,1,100),v=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],ae=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];ae[14]=ae[14]-2.5;var Ce=.95,W=!1,ne,le,Y=0,O=0,kt=function(e){return W=!0,ne=e.pageX,le=e.pageY,e.preventDefault(),!1},Ge=function(e){W=!1},jt=function(e){if(!W)return!1;Y=(e.pageX-ne)*2*Math.PI/_.width,O=(e.pageY-le)*2*Math.PI/_.height,he+=Y,fe+=O,ne=e.pageX,le=e.pageY,e.preventDefault()};_.addEventListener("mousedown",kt,!1);_.addEventListener("mouseup",Ge,!1);_.addEventListener("mouseout",Ge,!1);_.addEventListener("mousemove",jt,!1);function Wt(e,r){var t=Math.cos(r),o=Math.sin(r),i=e[1],s=e[5],a=e[9];e[1]=e[1]*t-e[2]*o,e[5]=e[5]*t-e[6]*o,e[9]=e[9]*t-e[10]*o,e[2]=e[2]*t+i*o,e[6]=e[6]*t+s*o,e[10]=e[10]*t+a*o}function Zt(e,r){var t=Math.cos(r),o=Math.sin(r),i=e[0],s=e[4],a=e[8];e[0]=t*e[0]+o*e[2],e[4]=t*e[4]+o*e[6],e[8]=t*e[8]+o*e[10],e[2]=t*e[2]-o*i,e[6]=t*e[6]-o*s,e[10]=t*e[10]-o*a}var he=0,fe=0,ke=function(e){W||(Y*=Ce,O*=Ce,he+=Y,fe+=O),v[0]=1,v[1]=0,v[2]=0,v[3]=0,v[4]=0,v[5]=1,v[6]=0,v[7]=0,v[8]=0,v[9]=0,v[10]=1,v[11]=0,v[12]=0,v[13]=0,v[14]=0,v[15]=1,Zt(v,he),Wt(v,fe),l.enable(l.DEPTH_TEST),l.clearColor(0,0,0,1),l.clearDepth(1),l.viewport(0,0,_.width,_.height),l.clear(l.COLOR_BUFFER_BIT|l.DEPTH_BUFFER_BIT),l.uniformMatrix4fv(Ht,!1,Gt),l.uniformMatrix4fv(Xt,!1,ae),l.uniformMatrix4fv(qt,!1,v),l.bindBuffer(l.ELEMENT_ARRAY_BUFFER,qe),l.drawElements(l.TRIANGLES,He.length,l.UNSIGNED_SHORT,0),window.requestAnimationFrame(ke)};ke();const Kt=`
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
    }`,E=document.getElementById("chakana3"),h=E.getContext("experimental-webgl"),Qt=[-1,1,0,-1,-1,0,1,-1,0,1,1,0],je=[3,2,1,3,1,0],We=h.createBuffer();h.bindBuffer(h.ARRAY_BUFFER,We);h.bufferData(h.ARRAY_BUFFER,new Float32Array(Qt),h.STATIC_DRAW);h.bindBuffer(h.ARRAY_BUFFER,null);const Ze=h.createBuffer();h.bindBuffer(h.ELEMENT_ARRAY_BUFFER,Ze);h.bufferData(h.ELEMENT_ARRAY_BUFFER,new Uint16Array(je),h.STATIC_DRAW);h.bindBuffer(h.ELEMENT_ARRAY_BUFFER,null);const Jt=xe,Re=h.createShader(h.VERTEX_SHADER);h.shaderSource(Re,Jt);h.compileShader(Re);const zt=Kt,me=h.createShader(h.FRAGMENT_SHADER);h.shaderSource(me,zt);h.compileShader(me);const T=h.createProgram();h.attachShader(T,Re);h.attachShader(T,me);h.linkProgram(T);var er=h.getUniformLocation(T,"Pmatrix"),tr=h.getUniformLocation(T,"Vmatrix"),rr=h.getUniformLocation(T,"Mmatrix");h.bindBuffer(h.ARRAY_BUFFER,We);var Ke=h.getAttribLocation(T,"coordinates");h.vertexAttribPointer(Ke,3,h.FLOAT,!1,0,0);h.enableVertexAttribArray(Ke);h.useProgram(T);function or(e,r,t,o){var i=Math.tan(e*.5*Math.PI/180);return[.5/i,0,0,0,0,.5*r/i,0,0,0,0,-(o+t)/(o-t),-1,0,0,-2*o*t/(o-t),0]}var ir=or(22,E.width*.5/E.height,1,100),u=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],ve=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];ve[14]=ve[14]-2.5;var we=.95,Z=!1,ue,pe,H=0,X=0,sr=function(e){return Z=!0,ue=e.pageX,pe=e.pageY,e.preventDefault(),!1},Qe=function(e){Z=!1},cr=function(e){if(!Z)return!1;H=(e.pageX-ue)*2*Math.PI/E.width,X=(e.pageY-pe)*2*Math.PI/E.height,de+=H,ge+=X,ue=e.pageX,pe=e.pageY,e.preventDefault()};E.addEventListener("mousedown",sr,!1);E.addEventListener("mouseup",Qe,!1);E.addEventListener("mouseout",Qe,!1);E.addEventListener("mousemove",cr,!1);function ar(e,r){var t=Math.cos(r),o=Math.sin(r),i=e[1],s=e[5],a=e[9];e[1]=e[1]*t-e[2]*o,e[5]=e[5]*t-e[6]*o,e[9]=e[9]*t-e[10]*o,e[2]=e[2]*t+i*o,e[6]=e[6]*t+s*o,e[10]=e[10]*t+a*o}function nr(e,r){var t=Math.cos(r),o=Math.sin(r),i=e[0],s=e[4],a=e[8];e[0]=t*e[0]+o*e[2],e[4]=t*e[4]+o*e[6],e[8]=t*e[8]+o*e[10],e[2]=t*e[2]-o*i,e[6]=t*e[6]-o*s,e[10]=t*e[10]-o*a}var de=0,ge=0,Je=function(e){Z||(H*=we,X*=we,de+=H,ge+=X),u[0]=1,u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=1,u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=1,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,nr(u,de),ar(u,ge),h.enable(h.DEPTH_TEST),h.clearColor(0,0,0,1),h.clearDepth(1),h.viewport(0,0,E.width,E.height),h.clear(h.COLOR_BUFFER_BIT|h.DEPTH_BUFFER_BIT),h.uniformMatrix4fv(er,!1,ir),h.uniformMatrix4fv(tr,!1,ve),h.uniformMatrix4fv(rr,!1,u),h.bindBuffer(h.ELEMENT_ARRAY_BUFFER,Ze),h.drawElements(h.TRIANGLES,je.length,h.UNSIGNED_SHORT,0),window.requestAnimationFrame(Je)};Je();
