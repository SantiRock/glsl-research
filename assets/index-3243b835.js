(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();let et=Le;const S=1,U=2,Fe={owned:null,cleanups:null,context:null,owner:null};var x=null;let K=null,R=null,g=null,$=null,X=0;function tt(e,r){const t=R,o=x,i=e.length===0,s=i?Fe:{owned:null,cleanups:null,context:null,owner:r===void 0?o:r},a=i?e:()=>e(()=>q(()=>G(s)));x=s,R=null;try{return V(a,!0)}finally{R=t,x=o}}function F(e,r,t){const o=it(e,r,!1,S);Se(o)}function q(e){if(R===null)return e();const r=R;R=null;try{return e()}finally{R=r}}function rt(e,r,t){let o=e.value;return(!e.comparator||!e.comparator(o,r))&&(e.value=r,e.observers&&e.observers.length&&V(()=>{for(let i=0;i<e.observers.length;i+=1){const s=e.observers[i],a=K&&K.running;a&&K.disposed.has(s),(a?!s.tState:!s.state)&&(s.pure?g.push(s):$.push(s),s.observers&&Ue(s)),a||(s.state=S)}if(g.length>1e6)throw g=[],new Error},!1)),r}function Se(e){if(!e.fn)return;G(e);const r=x,t=R,o=X;R=x=e,ot(e,e.value,o),R=t,x=r}function ot(e,r,t){let o;try{o=e.fn(r)}catch(i){return e.pure&&(e.state=S,e.owned&&e.owned.forEach(G),e.owned=null),e.updatedAt=t+1,Pe(i)}(!e.updatedAt||e.updatedAt<=t)&&(e.updatedAt!=null&&"observers"in e?rt(e,o):e.value=o,e.updatedAt=t)}function it(e,r,t,o=S,i){const s={fn:e,state:o,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:r,owner:x,context:null,pure:t};return x===null||x!==Fe&&(x.owned?x.owned.push(s):x.owned=[s]),s}function Be(e){if(e.state===0)return;if(e.state===U)return J(e);if(e.suspense&&q(e.suspense.inFallback))return e.suspense.effects.push(e);const r=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<X);)e.state&&r.push(e);for(let t=r.length-1;t>=0;t--)if(e=r[t],e.state===S)Se(e);else if(e.state===U){const o=g;g=null,V(()=>J(e,r[0]),!1),g=o}}function V(e,r){if(g)return e();let t=!1;r||(g=[]),$?t=!0:$=[],X++;try{const o=e();return st(t),o}catch(o){t||($=null),g=null,Pe(o)}}function st(e){if(g&&(Le(g),g=null),e)return;const r=$;$=null,r.length&&V(()=>et(r),!1)}function Le(e){for(let r=0;r<e.length;r++)Be(e[r])}function J(e,r){e.state=0;for(let t=0;t<e.sources.length;t+=1){const o=e.sources[t];if(o.sources){const i=o.state;i===S?o!==r&&(!o.updatedAt||o.updatedAt<X)&&Be(o):i===U&&J(o,r)}}}function Ue(e){for(let r=0;r<e.observers.length;r+=1){const t=e.observers[r];t.state||(t.state=U,t.pure?g.push(t):$.push(t),t.observers&&Ue(t))}}function G(e){let r;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),o=e.sourceSlots.pop(),i=t.observers;if(i&&i.length){const s=i.pop(),a=t.observerSlots.pop();o<i.length&&(s.sourceSlots[a]=o,i[o]=s,t.observerSlots[o]=a)}}if(e.owned){for(r=e.owned.length-1;r>=0;r--)G(e.owned[r]);e.owned=null}if(e.cleanups){for(r=e.cleanups.length-1;r>=0;r--)e.cleanups[r]();e.cleanups=null}e.state=0,e.context=null}function Pe(e){throw e}function B(e,r){return q(()=>e(r||{}))}function ct(e,r,t){let o=t.length,i=r.length,s=o,a=0,c=0,p=r[i-1].nextSibling,y=null;for(;a<i||c<s;){if(r[a]===t[c]){a++,c++;continue}for(;r[i-1]===t[s-1];)i--,s--;if(i===a){const d=s<o?c?t[c-1].nextSibling:t[s-c]:p;for(;c<s;)e.insertBefore(t[c++],d)}else if(s===c)for(;a<i;)(!y||!y.has(r[a]))&&r[a].remove(),a++;else if(r[a]===t[s-1]&&t[c]===r[i-1]){const d=r[--i].nextSibling;e.insertBefore(t[c++],r[a++].nextSibling),e.insertBefore(t[--s],d),r[i]=t[s]}else{if(!y){y=new Map;let C=c;for(;C<s;)y.set(t[C],C++)}const d=y.get(r[a]);if(d!=null)if(c<d&&d<s){let C=a,Z=1,me;for(;++C<i&&C<s&&!((me=y.get(r[C]))==null||me!==d+Z);)Z++;if(Z>d-c){const ze=r[a];for(;c<d;)e.insertBefore(t[c++],ze)}else e.replaceChild(t[c++],r[a++])}else a++;else r[a++].remove()}}}function at(e,r,t,o={}){let i;return tt(s=>{i=s,r===document?e():L(r,e(),r.firstChild?null:void 0,t)},o.owner),()=>{i(),r.textContent=""}}function ge(e,r,t){let o;const i=()=>{const a=document.createElement("template");return a.innerHTML=e,t?a.content.firstChild.firstChild:a.content.firstChild},s=r?()=>q(()=>document.importNode(o||(o=i()),!0)):()=>(o||(o=i())).cloneNode(!0);return s.cloneNode=s,s}function nt(e,r,t){t==null?e.removeAttribute(r):e.setAttribute(r,t)}function P(e,r){r==null?e.removeAttribute("class"):e.className=r}function L(e,r,t,o){if(t!==void 0&&!o&&(o=[]),typeof r!="function")return M(e,r,o,t);F(i=>M(e,r(),i,t),o)}function M(e,r,t,o,i){for(;typeof t=="function";)t=t();if(r===t)return t;const s=typeof r,a=o!==void 0;if(e=a&&t[0]&&t[0].parentNode||e,s==="string"||s==="number")if(s==="number"&&(r=r.toString()),a){let c=t[0];c&&c.nodeType===3?c.data=r:c=document.createTextNode(r),t=w(e,t,o,c)}else t!==""&&typeof t=="string"?t=e.firstChild.data=r:t=e.textContent=r;else if(r==null||s==="boolean")t=w(e,t,o);else{if(s==="function")return F(()=>{let c=r();for(;typeof c=="function";)c=c();t=M(e,c,t,o)}),()=>t;if(Array.isArray(r)){const c=[],p=t&&Array.isArray(t);if(z(c,r,t,i))return F(()=>t=M(e,c,t,o,!0)),()=>t;if(c.length===0){if(t=w(e,t,o),a)return t}else p?t.length===0?Te(e,c,o):ct(e,t,c):(t&&w(e),Te(e,c));t=c}else if(r.nodeType){if(Array.isArray(t)){if(a)return t=w(e,t,o,r);w(e,t,null,r)}else t==null||t===""||!e.firstChild?e.appendChild(r):e.replaceChild(r,e.firstChild);t=r}else console.warn("Unrecognized value. Skipped inserting",r)}return t}function z(e,r,t,o){let i=!1;for(let s=0,a=r.length;s<a;s++){let c=r[s],p=t&&t[s],y;if(!(c==null||c===!0||c===!1))if((y=typeof c)=="object"&&c.nodeType)e.push(c);else if(Array.isArray(c))i=z(e,c,p)||i;else if(y==="function")if(o){for(;typeof c=="function";)c=c();i=z(e,Array.isArray(c)?c:[c],Array.isArray(p)?p:[p])||i}else e.push(c),i=!0;else{const d=String(c);p&&p.nodeType===3&&p.data===d?e.push(p):e.push(document.createTextNode(d))}}return i}function Te(e,r,t=null){for(let o=0,i=r.length;o<i;o++)e.insertBefore(r[o],t)}function w(e,r,t,o){if(t===void 0)return e.textContent="";const i=o||document.createTextNode("");if(r.length){let s=!1;for(let a=r.length-1;a>=0;a--){const c=r[a];if(i!==c){const p=c.parentNode===e;!s&&!a?p?e.replaceChild(i,c):e.insertBefore(i,t):p&&c.remove()}else s=!0}}else e.insertBefore(i,t);return[i]}const lt="_container_14umt_1",ht={container:lt},ft="_gallery_10oll_1",vt="_canvas_container_10oll_7",ut="_canvas_10oll_7",ee={gallery:ft,canvas_container:vt,canvas:ut},pt=ge("<div><canvas>"),dt=ge("<div>");function Q({id:e}){return(()=>{const r=pt(),t=r.firstChild;return nt(t,"id",e),F(o=>{const i=ee.canvas_container,s=ee.canvas;return i!==o._v$&&P(r,o._v$=i),s!==o._v$2&&P(t,o._v$2=s),o},{_v$:void 0,_v$2:void 0}),r})()}function gt(){return(()=>{const e=dt();return L(e,B(Q,{id:"chakana1"}),null),L(e,B(Q,{id:"chakana2"}),null),L(e,B(Q,{id:"chakana3"}),null),F(()=>P(e,ee.gallery)),e})()}const xt=ge("<div>");function At(){return(()=>{const e=xt();return L(e,B(gt,{})),F(()=>P(e,ht.container)),e})()}const Et=document.getElementById("root");at(()=>B(At,{}),Et);const xe=`
    attribute vec3 coordinates;
    
    uniform mat4 Pmatrix;
    uniform mat4 Vmatrix;
    uniform mat4 Mmatrix;

    varying vec2 vTextureCoord;

    void main(void) {
        vTextureCoord = coordinates.xy;
    
        gl_Position = Pmatrix * Vmatrix * Mmatrix * vec4(coordinates, 1.);

    }`,_t=`
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
    }`,A=document.getElementById("chakana1"),n=A.getContext("experimental-webgl"),yt=[-1,1,0,-1,-1,0,1,-1,0,1,1,0],Me=[3,2,1,3,1,0],Ie=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,Ie);n.bufferData(n.ARRAY_BUFFER,new Float32Array(yt),n.STATIC_DRAW);n.bindBuffer(n.ARRAY_BUFFER,null);const De=n.createBuffer();n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,De);n.bufferData(n.ELEMENT_ARRAY_BUFFER,new Uint16Array(Me),n.STATIC_DRAW);n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,null);const Rt=xe,Ae=n.createShader(n.VERTEX_SHADER);n.shaderSource(Ae,Rt);n.compileShader(Ae);const bt=_t,Ee=n.createShader(n.FRAGMENT_SHADER);n.shaderSource(Ee,bt);n.compileShader(Ee);const b=n.createProgram();n.attachShader(b,Ae);n.attachShader(b,Ee);n.linkProgram(b);var mt=n.getUniformLocation(b,"Pmatrix"),Tt=n.getUniformLocation(b,"Vmatrix"),Ct=n.getUniformLocation(b,"Mmatrix");n.bindBuffer(n.ARRAY_BUFFER,Ie);var Ne=n.getAttribLocation(b,"coordinates");n.vertexAttribPointer(Ne,3,n.FLOAT,!1,0,0);n.enableVertexAttribArray(Ne);n.useProgram(b);function $t(e,r,t,o){var i=Math.tan(e*.5*Math.PI/180);return[.5/i,0,0,0,0,.5*r/i,0,0,0,0,-(o+t)/(o-t),-1,0,0,-2*o*t/(o-t),0]}var wt=$t(22,A.width*.5/A.height,1,100),f=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],te=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];te[14]=te[14]-2.5;var Ce=.95,j=!1,re,oe,I=0,D=0,Ft=function(e){return j=!0,re=e.pageX,oe=e.pageY,e.preventDefault(),!1},Ye=function(e){j=!1},St=function(e){if(!j)return!1;I=(e.pageX-re)*2*Math.PI/A.width,D=(e.pageY-oe)*2*Math.PI/A.height,ie+=I,se+=D,re=e.pageX,oe=e.pageY,e.preventDefault()};A.addEventListener("mousedown",Ft,!1);A.addEventListener("mouseup",Ye,!1);A.addEventListener("mouseout",Ye,!1);A.addEventListener("mousemove",St,!1);function Bt(e,r){var t=Math.cos(r),o=Math.sin(r),i=e[1],s=e[5],a=e[9];e[1]=e[1]*t-e[2]*o,e[5]=e[5]*t-e[6]*o,e[9]=e[9]*t-e[10]*o,e[2]=e[2]*t+i*o,e[6]=e[6]*t+s*o,e[10]=e[10]*t+a*o}function Lt(e,r){var t=Math.cos(r),o=Math.sin(r),i=e[0],s=e[4],a=e[8];e[0]=t*e[0]+o*e[2],e[4]=t*e[4]+o*e[6],e[8]=t*e[8]+o*e[10],e[2]=t*e[2]-o*i,e[6]=t*e[6]-o*s,e[10]=t*e[10]-o*a}var ie=0,se=0,Oe=function(e){j||(I*=Ce,D*=Ce,ie+=I,se+=D),f[0]=1,f[1]=0,f[2]=0,f[3]=0,f[4]=0,f[5]=1,f[6]=0,f[7]=0,f[8]=0,f[9]=0,f[10]=1,f[11]=0,f[12]=0,f[13]=0,f[14]=0,f[15]=1,Lt(f,ie),Bt(f,se),n.enable(n.DEPTH_TEST),n.clearColor(0,0,0,1),n.clearDepth(1),n.viewport(0,0,A.width,A.height),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),n.uniformMatrix4fv(mt,!1,wt),n.uniformMatrix4fv(Tt,!1,te),n.uniformMatrix4fv(Ct,!1,f),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,De),n.drawElements(n.TRIANGLES,Me.length,n.UNSIGNED_SHORT,0),window.requestAnimationFrame(Oe)};Oe();const Ut=`
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
    }`,E=document.getElementById("chakana2"),l=E.getContext("experimental-webgl"),Pt=[-1,1,0,-1,-1,0,1,-1,0,1,1,0],He=[3,2,1,3,1,0],Xe=l.createBuffer();l.bindBuffer(l.ARRAY_BUFFER,Xe);l.bufferData(l.ARRAY_BUFFER,new Float32Array(Pt),l.STATIC_DRAW);l.bindBuffer(l.ARRAY_BUFFER,null);const qe=l.createBuffer();l.bindBuffer(l.ELEMENT_ARRAY_BUFFER,qe);l.bufferData(l.ELEMENT_ARRAY_BUFFER,new Uint16Array(He),l.STATIC_DRAW);l.bindBuffer(l.ELEMENT_ARRAY_BUFFER,null);const Mt=xe,_e=l.createShader(l.VERTEX_SHADER);l.shaderSource(_e,Mt);l.compileShader(_e);const It=Ut,ye=l.createShader(l.FRAGMENT_SHADER);l.shaderSource(ye,It);l.compileShader(ye);const m=l.createProgram();l.attachShader(m,_e);l.attachShader(m,ye);l.linkProgram(m);var Dt=l.getUniformLocation(m,"Pmatrix"),Nt=l.getUniformLocation(m,"Vmatrix"),Yt=l.getUniformLocation(m,"Mmatrix");l.bindBuffer(l.ARRAY_BUFFER,Xe);var Ve=l.getAttribLocation(m,"coordinates");l.vertexAttribPointer(Ve,3,l.FLOAT,!1,0,0);l.enableVertexAttribArray(Ve);l.useProgram(m);function Ot(e,r,t,o){var i=Math.tan(e*.5*Math.PI/180);return[.5/i,0,0,0,0,.5*r/i,0,0,0,0,-(o+t)/(o-t),-1,0,0,-2*o*t/(o-t),0]}var Ht=Ot(22,E.width*.5/E.height,1,100),v=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],ce=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];ce[14]=ce[14]-2.5;var $e=.95,W=!1,ae,ne,N=0,Y=0,Xt=function(e){return W=!0,ae=e.pageX,ne=e.pageY,e.preventDefault(),!1},Ge=function(e){W=!1},qt=function(e){if(!W)return!1;N=(e.pageX-ae)*2*Math.PI/E.width,Y=(e.pageY-ne)*2*Math.PI/E.height,le+=N,he+=Y,ae=e.pageX,ne=e.pageY,e.preventDefault()};E.addEventListener("mousedown",Xt,!1);E.addEventListener("mouseup",Ge,!1);E.addEventListener("mouseout",Ge,!1);E.addEventListener("mousemove",qt,!1);function Vt(e,r){var t=Math.cos(r),o=Math.sin(r),i=e[1],s=e[5],a=e[9];e[1]=e[1]*t-e[2]*o,e[5]=e[5]*t-e[6]*o,e[9]=e[9]*t-e[10]*o,e[2]=e[2]*t+i*o,e[6]=e[6]*t+s*o,e[10]=e[10]*t+a*o}function Gt(e,r){var t=Math.cos(r),o=Math.sin(r),i=e[0],s=e[4],a=e[8];e[0]=t*e[0]+o*e[2],e[4]=t*e[4]+o*e[6],e[8]=t*e[8]+o*e[10],e[2]=t*e[2]-o*i,e[6]=t*e[6]-o*s,e[10]=t*e[10]-o*a}var le=0,he=0,je=function(e){W||(N*=$e,Y*=$e,le+=N,he+=Y),v[0]=1,v[1]=0,v[2]=0,v[3]=0,v[4]=0,v[5]=1,v[6]=0,v[7]=0,v[8]=0,v[9]=0,v[10]=1,v[11]=0,v[12]=0,v[13]=0,v[14]=0,v[15]=1,Gt(v,le),Vt(v,he),l.enable(l.DEPTH_TEST),l.clearColor(0,0,0,1),l.clearDepth(1),l.viewport(0,0,E.width,E.height),l.clear(l.COLOR_BUFFER_BIT|l.DEPTH_BUFFER_BIT),l.uniformMatrix4fv(Dt,!1,Ht),l.uniformMatrix4fv(Nt,!1,ce),l.uniformMatrix4fv(Yt,!1,v),l.bindBuffer(l.ELEMENT_ARRAY_BUFFER,qe),l.drawElements(l.TRIANGLES,He.length,l.UNSIGNED_SHORT,0),window.requestAnimationFrame(je)};je();const jt=`
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
    }`,_=document.getElementById("chakana3"),h=_.getContext("experimental-webgl"),Wt=[-1,1,0,-1,-1,0,1,-1,0,1,1,0],We=[3,2,1,3,1,0],ke=h.createBuffer();h.bindBuffer(h.ARRAY_BUFFER,ke);h.bufferData(h.ARRAY_BUFFER,new Float32Array(Wt),h.STATIC_DRAW);h.bindBuffer(h.ARRAY_BUFFER,null);const Ze=h.createBuffer();h.bindBuffer(h.ELEMENT_ARRAY_BUFFER,Ze);h.bufferData(h.ELEMENT_ARRAY_BUFFER,new Uint16Array(We),h.STATIC_DRAW);h.bindBuffer(h.ELEMENT_ARRAY_BUFFER,null);const kt=xe,Re=h.createShader(h.VERTEX_SHADER);h.shaderSource(Re,kt);h.compileShader(Re);const Zt=jt,be=h.createShader(h.FRAGMENT_SHADER);h.shaderSource(be,Zt);h.compileShader(be);const T=h.createProgram();h.attachShader(T,Re);h.attachShader(T,be);h.linkProgram(T);var Kt=h.getUniformLocation(T,"Pmatrix"),Qt=h.getUniformLocation(T,"Vmatrix"),Jt=h.getUniformLocation(T,"Mmatrix");h.bindBuffer(h.ARRAY_BUFFER,ke);var Ke=h.getAttribLocation(T,"coordinates");h.vertexAttribPointer(Ke,3,h.FLOAT,!1,0,0);h.enableVertexAttribArray(Ke);h.useProgram(T);function zt(e,r,t,o){var i=Math.tan(e*.5*Math.PI/180);return[.5/i,0,0,0,0,.5*r/i,0,0,0,0,-(o+t)/(o-t),-1,0,0,-2*o*t/(o-t),0]}var er=zt(22,_.width*.5/_.height,1,100),u=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],fe=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];fe[14]=fe[14]-2.5;var we=.95,k=!1,ve,ue,O=0,H=0,tr=function(e){return k=!0,ve=e.pageX,ue=e.pageY,e.preventDefault(),!1},Qe=function(e){k=!1},rr=function(e){if(!k)return!1;O=(e.pageX-ve)*2*Math.PI/_.width,H=(e.pageY-ue)*2*Math.PI/_.height,pe+=O,de+=H,ve=e.pageX,ue=e.pageY,e.preventDefault()};_.addEventListener("mousedown",tr,!1);_.addEventListener("mouseup",Qe,!1);_.addEventListener("mouseout",Qe,!1);_.addEventListener("mousemove",rr,!1);function or(e,r){var t=Math.cos(r),o=Math.sin(r),i=e[1],s=e[5],a=e[9];e[1]=e[1]*t-e[2]*o,e[5]=e[5]*t-e[6]*o,e[9]=e[9]*t-e[10]*o,e[2]=e[2]*t+i*o,e[6]=e[6]*t+s*o,e[10]=e[10]*t+a*o}function ir(e,r){var t=Math.cos(r),o=Math.sin(r),i=e[0],s=e[4],a=e[8];e[0]=t*e[0]+o*e[2],e[4]=t*e[4]+o*e[6],e[8]=t*e[8]+o*e[10],e[2]=t*e[2]-o*i,e[6]=t*e[6]-o*s,e[10]=t*e[10]-o*a}var pe=0,de=0,Je=function(e){k||(O*=we,H*=we,pe+=O,de+=H),u[0]=1,u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=1,u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=1,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,ir(u,pe),or(u,de),h.enable(h.DEPTH_TEST),h.clearColor(0,0,0,1),h.clearDepth(1),h.viewport(0,0,_.width,_.height),h.clear(h.COLOR_BUFFER_BIT|h.DEPTH_BUFFER_BIT),h.uniformMatrix4fv(Kt,!1,er),h.uniformMatrix4fv(Qt,!1,fe),h.uniformMatrix4fv(Jt,!1,u),h.bindBuffer(h.ELEMENT_ARRAY_BUFFER,Ze),h.drawElements(h.TRIANGLES,We.length,h.UNSIGNED_SHORT,0),window.requestAnimationFrame(Je)};Je();
