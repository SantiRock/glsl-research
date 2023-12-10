(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();let rt=De;const G=1,Z=2,Me={owned:null,cleanups:null,context:null,owner:null};var A=null;let le=null,y=null,E=null,w=null,oe=0;function ot(e,r){const t=y,o=A,i=e.length===0,s=i?Me:{owned:null,cleanups:null,context:null,owner:r===void 0?o:r},n=i?e:()=>e(()=>ie(()=>ce(s)));A=s,y=null;try{return se(n,!0)}finally{y=t,A=o}}function C(e,r,t){const o=ct(e,r,!1,G);Pe(o)}function ie(e){if(y===null)return e();const r=y;y=null;try{return e()}finally{y=r}}function it(e,r,t){let o=e.value;return(!e.comparator||!e.comparator(o,r))&&(e.value=r,e.observers&&e.observers.length&&se(()=>{for(let i=0;i<e.observers.length;i+=1){const s=e.observers[i],n=le&&le.running;n&&le.disposed.has(s),(n?!s.tState:!s.state)&&(s.pure?E.push(s):w.push(s),s.observers&&Ie(s)),n||(s.state=G)}if(E.length>1e6)throw E=[],new Error},!1)),r}function Pe(e){if(!e.fn)return;ce(e);const r=A,t=y,o=oe;y=A=e,st(e,e.value,o),y=t,A=r}function st(e,r,t){let o;try{o=e.fn(r)}catch(i){return e.pure&&(e.state=G,e.owned&&e.owned.forEach(ce),e.owned=null),e.updatedAt=t+1,Ye(i)}(!e.updatedAt||e.updatedAt<=t)&&(e.updatedAt!=null&&"observers"in e?it(e,o):e.value=o,e.updatedAt=t)}function ct(e,r,t,o=G,i){const s={fn:e,state:o,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:r,owner:A,context:null,pure:t};return A===null||A!==Me&&(A.owned?A.owned.push(s):A.owned=[s]),s}function Ue(e){if(e.state===0)return;if(e.state===Z)return fe(e);if(e.suspense&&ie(e.suspense.inFallback))return e.suspense.effects.push(e);const r=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<oe);)e.state&&r.push(e);for(let t=r.length-1;t>=0;t--)if(e=r[t],e.state===G)Pe(e);else if(e.state===Z){const o=E;E=null,se(()=>fe(e,r[0]),!1),E=o}}function se(e,r){if(E)return e();let t=!1;r||(E=[]),w?t=!0:w=[],oe++;try{const o=e();return nt(t),o}catch(o){t||(w=null),E=null,Ye(o)}}function nt(e){if(E&&(De(E),E=null),e)return;const r=w;w=null,r.length&&se(()=>rt(r),!1)}function De(e){for(let r=0;r<e.length;r++)Ue(e[r])}function fe(e,r){e.state=0;for(let t=0;t<e.sources.length;t+=1){const o=e.sources[t];if(o.sources){const i=o.state;i===G?o!==r&&(!o.updatedAt||o.updatedAt<oe)&&Ue(o):i===Z&&fe(o,r)}}}function Ie(e){for(let r=0;r<e.observers.length;r+=1){const t=e.observers[r];t.state||(t.state=Z,t.pure?E.push(t):w.push(t),t.observers&&Ie(t))}}function ce(e){let r;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),o=e.sourceSlots.pop(),i=t.observers;if(i&&i.length){const s=i.pop(),n=t.observerSlots.pop();o<i.length&&(s.sourceSlots[n]=o,i[o]=s,t.observerSlots[o]=n)}}if(e.owned){for(r=e.owned.length-1;r>=0;r--)ce(e.owned[r]);e.owned=null}if(e.cleanups){for(r=e.cleanups.length-1;r>=0;r--)e.cleanups[r]();e.cleanups=null}e.state=0,e.context=null}function Ye(e){throw e}function S(e,r){return ie(()=>e(r||{}))}function at(e,r,t){let o=t.length,i=r.length,s=o,n=0,c=0,x=r[i-1].nextSibling,m=null;for(;n<i||c<s;){if(r[n]===t[c]){n++,c++;continue}for(;r[i-1]===t[s-1];)i--,s--;if(i===n){const _=s<o?c?t[c-1].nextSibling:t[s-c]:x;for(;c<s;)e.insertBefore(t[c++],_)}else if(s===c)for(;n<i;)(!m||!m.has(r[n]))&&r[n].remove(),n++;else if(r[n]===t[s-1]&&t[c]===r[i-1]){const _=r[--i].nextSibling;e.insertBefore(t[c++],r[n++].nextSibling),e.insertBefore(t[--s],_),r[i]=t[s]}else{if(!m){m=new Map;let $=c;for(;$<s;)m.set(t[$],$++)}const _=m.get(r[n]);if(_!=null)if(c<_&&_<s){let $=n,ae=1,we;for(;++$<i&&$<s&&!((we=m.get(r[$]))==null||we!==_+ae);)ae++;if(ae>_-c){const tt=r[n];for(;c<_;)e.insertBefore(t[c++],tt)}else e.replaceChild(t[c++],r[n++])}else n++;else r[n++].remove()}}}function lt(e,r,t,o={}){let i;return ot(s=>{i=s,r===document?e():B(r,e(),r.firstChild?null:void 0,t)},o.owner),()=>{i(),r.textContent=""}}function ne(e,r,t){let o;const i=()=>{const n=document.createElement("template");return n.innerHTML=e,t?n.content.firstChild.firstChild:n.content.firstChild},s=r?()=>ie(()=>document.importNode(o||(o=i()),!0)):()=>(o||(o=i())).cloneNode(!0);return s.cloneNode=s,s}function ht(e,r,t){t==null?e.removeAttribute(r):e.setAttribute(r,t)}function L(e,r){r==null?e.removeAttribute("class"):e.className=r}function B(e,r,t,o){if(t!==void 0&&!o&&(o=[]),typeof r!="function")return K(e,r,o,t);C(i=>K(e,r(),i,t),o)}function K(e,r,t,o,i){for(;typeof t=="function";)t=t();if(r===t)return t;const s=typeof r,n=o!==void 0;if(e=n&&t[0]&&t[0].parentNode||e,s==="string"||s==="number")if(s==="number"&&(r=r.toString()),n){let c=t[0];c&&c.nodeType===3?c.data=r:c=document.createTextNode(r),t=F(e,t,o,c)}else t!==""&&typeof t=="string"?t=e.firstChild.data=r:t=e.textContent=r;else if(r==null||s==="boolean")t=F(e,t,o);else{if(s==="function")return C(()=>{let c=r();for(;typeof c=="function";)c=c();t=K(e,c,t,o)}),()=>t;if(Array.isArray(r)){const c=[],x=t&&Array.isArray(t);if(ue(c,r,t,i))return C(()=>t=K(e,c,t,o,!0)),()=>t;if(c.length===0){if(t=F(e,t,o),n)return t}else x?t.length===0?Ce(e,c,o):at(e,t,c):(t&&F(e),Ce(e,c));t=c}else if(r.nodeType){if(Array.isArray(t)){if(n)return t=F(e,t,o,r);F(e,t,null,r)}else t==null||t===""||!e.firstChild?e.appendChild(r):e.replaceChild(r,e.firstChild);t=r}else console.warn("Unrecognized value. Skipped inserting",r)}return t}function ue(e,r,t,o){let i=!1;for(let s=0,n=r.length;s<n;s++){let c=r[s],x=t&&t[s],m;if(!(c==null||c===!0||c===!1))if((m=typeof c)=="object"&&c.nodeType)e.push(c);else if(Array.isArray(c))i=ue(e,c,x)||i;else if(m==="function")if(o){for(;typeof c=="function";)c=c();i=ue(e,Array.isArray(c)?c:[c],Array.isArray(x)?x:[x])||i}else e.push(c),i=!0;else{const _=String(c);x&&x.nodeType===3&&x.data===_?e.push(x):e.push(document.createTextNode(_))}}return i}function Ce(e,r,t=null){for(let o=0,i=r.length;o<i;o++)e.insertBefore(r[o],t)}function F(e,r,t,o){if(t===void 0)return e.textContent="";const i=o||document.createTextNode("");if(r.length){let s=!1;for(let n=r.length-1;n>=0;n--){const c=r[n];if(i!==c){const x=c.parentNode===e;!s&&!n?x?e.replaceChild(i,c):e.insertBefore(i,t):x&&c.remove()}else s=!0}}else e.insertBefore(i,t);return[i]}const ft="_container_14umt_1",ut={container:ft},vt="_gallery_1elgd_1",pt="_canvas_container_1elgd_7",dt="_canvas_1elgd_7",ve={gallery:vt,canvas_container:pt,canvas:dt},gt=ne("<div><canvas>"),xt=ne("<div>");function he({id:e}){return(()=>{const r=gt(),t=r.firstChild;return ht(t,"id",e),C(o=>{const i=ve.canvas_container,s=ve.canvas;return i!==o._v$&&L(r,o._v$=i),s!==o._v$2&&L(t,o._v$2=s),o},{_v$:void 0,_v$2:void 0}),r})()}function _t(){return(()=>{const e=xt();return B(e,S(he,{id:"chakana1"}),null),B(e,S(he,{id:"chakana2"}),null),B(e,S(he,{id:"chakana3"}),null),C(()=>L(e,ve.gallery)),e})()}const Et="_weigth_15un7_15",Fe={weigth:Et},At=ne("<div><p>Dale click a la imagen y, sosteniendo el click, mueve el mouse</p><p>Click on the image and, holding the click, move the mouse</p><p>Cliquez sur l'image et, en le laissant appuyé, déplacez la souris</p><p>This website is 51Ko");function mt(){return(()=>{const e=At(),r=e.firstChild,t=r.nextSibling,o=t.nextSibling,i=o.nextSibling;return C(s=>{const n=Fe.container,c=Fe.weigth;return n!==s._v$&&L(e,s._v$=n),c!==s._v$2&&L(i,s._v$2=c),s},{_v$:void 0,_v$2:void 0}),e})()}const yt=ne("<div>");function Rt(){return(()=>{const e=yt();return B(e,S(_t,{}),null),B(e,S(mt,{}),null),C(()=>L(e,ut.container)),e})()}const bt=document.getElementById("root");lt(()=>S(Rt,{}),bt);const xe=`
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
    }`,d=document.getElementById("chakana1"),a=d.getContext("experimental-webgl"),$t=[-1,1,0,-1,-1,0,1,-1,0,1,1,0],Ne=[3,2,1,3,1,0],Xe=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,Xe);a.bufferData(a.ARRAY_BUFFER,new Float32Array($t),a.STATIC_DRAW);a.bindBuffer(a.ARRAY_BUFFER,null);const Oe=a.createBuffer();a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,Oe);a.bufferData(a.ELEMENT_ARRAY_BUFFER,new Uint16Array(Ne),a.STATIC_DRAW);a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,null);const wt=xe,_e=a.createShader(a.VERTEX_SHADER);a.shaderSource(_e,wt);a.compileShader(_e);const Ct=Tt,Ee=a.createShader(a.FRAGMENT_SHADER);a.shaderSource(Ee,Ct);a.compileShader(Ee);const R=a.createProgram();a.attachShader(R,_e);a.attachShader(R,Ee);a.linkProgram(R);var Ft=a.getUniformLocation(R,"Pmatrix"),St=a.getUniformLocation(R,"Vmatrix"),Bt=a.getUniformLocation(R,"Mmatrix");a.bindBuffer(a.ARRAY_BUFFER,Xe);var He=a.getAttribLocation(R,"coordinates");a.vertexAttribPointer(He,3,a.FLOAT,!1,0,0);a.enableVertexAttribArray(He);a.useProgram(R);function Lt(e,r,t,o){var i=Math.tan(e*.5*Math.PI/180);return[.5/i,0,0,0,0,.5*r/i,0,0,0,0,-(o+t)/(o-t),-1,0,0,-2*o*t/(o-t),0]}var Mt=Lt(22,d.width*.5/d.height,1,100),f=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],pe=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];pe[14]=pe[14]-2.5;var Se=.95,k=!1,M,P,U=0,D=0,Pt=function(e){return k=!0,M=e.pageX,P=e.pageY,e.preventDefault(),!1},Ut=function(e){k=!0;let r=e.touches[0];return M=r.pageX,P=r.pageY,e.preventDefault(),!1},Ae=function(e){k=!1},Dt=function(e){if(!k)return!1;U=(e.pageX-M)*2*Math.PI/d.width,D=(e.pageY-P)*2*Math.PI/d.height,Q+=U,J+=D,M=e.pageX,P=e.pageY,e.preventDefault()},It=function(e){if(!k)return!1;let r=e.touches[0];U=(r.pageX-M)*2*Math.PI/d.width,D=(r.pageY-P)*2*Math.PI/d.height,Q+=U,J+=D,M=r.pageX,P=r.pageY,e.preventDefault()};d.addEventListener("mousedown",Pt,!1);d.addEventListener("mouseup",Ae,!1);d.addEventListener("mouseout",Ae,!1);d.addEventListener("mousemove",Dt,!1);d.addEventListener("touchstart",Ut,!1);d.addEventListener("touchend",Ae,!1);d.addEventListener("touchmove",It,!1);function Yt(e,r){var t=Math.cos(r),o=Math.sin(r),i=e[1],s=e[5],n=e[9];e[1]=e[1]*t-e[2]*o,e[5]=e[5]*t-e[6]*o,e[9]=e[9]*t-e[10]*o,e[2]=e[2]*t+i*o,e[6]=e[6]*t+s*o,e[10]=e[10]*t+n*o}function Nt(e,r){var t=Math.cos(r),o=Math.sin(r),i=e[0],s=e[4],n=e[8];e[0]=t*e[0]+o*e[2],e[4]=t*e[4]+o*e[6],e[8]=t*e[8]+o*e[10],e[2]=t*e[2]-o*i,e[6]=t*e[6]-o*s,e[10]=t*e[10]-o*n}var Q=0,J=0,qe=function(e){k||(U*=Se,D*=Se,Q+=U,J+=D),f[0]=1,f[1]=0,f[2]=0,f[3]=0,f[4]=0,f[5]=1,f[6]=0,f[7]=0,f[8]=0,f[9]=0,f[10]=1,f[11]=0,f[12]=0,f[13]=0,f[14]=0,f[15]=1,Nt(f,Q),Yt(f,J),a.enable(a.DEPTH_TEST),a.clearColor(0,0,0,1),a.clearDepth(1),a.viewport(0,0,d.width,d.height),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT),a.uniformMatrix4fv(Ft,!1,Mt),a.uniformMatrix4fv(St,!1,pe),a.uniformMatrix4fv(Bt,!1,f),a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,Oe),a.drawElements(a.TRIANGLES,Ne.length,a.UNSIGNED_SHORT,0),window.requestAnimationFrame(qe)};qe();const Xt=`
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
    }`,p=document.getElementById("chakana2"),l=p.getContext("experimental-webgl"),Ot=[-1,1,0,-1,-1,0,1,-1,0,1,1,0],Ve=[3,2,1,3,1,0],Ge=l.createBuffer();l.bindBuffer(l.ARRAY_BUFFER,Ge);l.bufferData(l.ARRAY_BUFFER,new Float32Array(Ot),l.STATIC_DRAW);l.bindBuffer(l.ARRAY_BUFFER,null);const ke=l.createBuffer();l.bindBuffer(l.ELEMENT_ARRAY_BUFFER,ke);l.bufferData(l.ELEMENT_ARRAY_BUFFER,new Uint16Array(Ve),l.STATIC_DRAW);l.bindBuffer(l.ELEMENT_ARRAY_BUFFER,null);const Ht=xe,me=l.createShader(l.VERTEX_SHADER);l.shaderSource(me,Ht);l.compileShader(me);const qt=Xt,ye=l.createShader(l.FRAGMENT_SHADER);l.shaderSource(ye,qt);l.compileShader(ye);const b=l.createProgram();l.attachShader(b,me);l.attachShader(b,ye);l.linkProgram(b);var Vt=l.getUniformLocation(b,"Pmatrix"),Gt=l.getUniformLocation(b,"Vmatrix"),kt=l.getUniformLocation(b,"Mmatrix");l.bindBuffer(l.ARRAY_BUFFER,Ge);var je=l.getAttribLocation(b,"coordinates");l.vertexAttribPointer(je,3,l.FLOAT,!1,0,0);l.enableVertexAttribArray(je);l.useProgram(b);function jt(e,r,t,o){var i=Math.tan(e*.5*Math.PI/180);return[.5/i,0,0,0,0,.5*r/i,0,0,0,0,-(o+t)/(o-t),-1,0,0,-2*o*t/(o-t),0]}var Wt=jt(22,p.width*.5/p.height,1,100),u=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],de=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];de[14]=de[14]-2.5;var Be=.95,j=!1,I,Y,N=0,X=0,We=function(e){return j=!0,I=e.pageX,Y=e.pageY,e.preventDefault(),!1},Re=function(e){j=!1},Zt=function(e){if(!j)return!1;N=(e.pageX-I)*2*Math.PI/p.width,X=(e.pageY-Y)*2*Math.PI/p.height,z+=N,ee+=X,I=e.pageX,Y=e.pageY,e.preventDefault()},Kt=function(e){j=!0;let r=e.touches[0];return I=r.pageX,Y=r.pageY,e.preventDefault(),!1},Qt=function(e){if(!j)return!1;let r=e.touches[0];N=(r.pageX-I)*2*Math.PI/p.width,X=(r.pageY-Y)*2*Math.PI/p.height,z+=N,ee+=X,I=r.pageX,Y=r.pageY,e.preventDefault()};p.addEventListener("mouseover",We,!1);p.addEventListener("mousedown",Re,!1);p.addEventListener("mouseup",We,!1);p.addEventListener("mouseout",Re,!1);p.addEventListener("mousemove",Zt,!1);p.addEventListener("touchstart",Kt,!1);p.addEventListener("touchend",Re,!1);p.addEventListener("touchmove",Qt,!1);function Jt(e,r){var t=Math.cos(r),o=Math.sin(r),i=e[1],s=e[5],n=e[9];e[1]=e[1]*t-e[2]*o,e[5]=e[5]*t-e[6]*o,e[9]=e[9]*t-e[10]*o,e[2]=e[2]*t+i*o,e[6]=e[6]*t+s*o,e[10]=e[10]*t+n*o}function zt(e,r){var t=Math.cos(r),o=Math.sin(r),i=e[0],s=e[4],n=e[8];e[0]=t*e[0]+o*e[2],e[4]=t*e[4]+o*e[6],e[8]=t*e[8]+o*e[10],e[2]=t*e[2]-o*i,e[6]=t*e[6]-o*s,e[10]=t*e[10]-o*n}var z=0,ee=0,Ze=function(e){j||(N*=Be,X*=Be,z+=N,ee+=X),u[0]=1,u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=1,u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=1,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,zt(u,z),Jt(u,ee),l.enable(l.DEPTH_TEST),l.clearColor(0,0,0,1),l.clearDepth(1),l.viewport(0,0,p.width,p.height),l.clear(l.COLOR_BUFFER_BIT|l.DEPTH_BUFFER_BIT),l.uniformMatrix4fv(Vt,!1,Wt),l.uniformMatrix4fv(Gt,!1,de),l.uniformMatrix4fv(kt,!1,u),l.bindBuffer(l.ELEMENT_ARRAY_BUFFER,ke),l.drawElements(l.TRIANGLES,Ve.length,l.UNSIGNED_SHORT,0),window.requestAnimationFrame(Ze)};Ze();const er=`
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
    }`,g=document.getElementById("chakana3"),h=g.getContext("experimental-webgl"),tr=[-1,1,0,-1,-1,0,1,-1,0,1,1,0],Ke=[3,2,1,3,1,0],Qe=h.createBuffer();h.bindBuffer(h.ARRAY_BUFFER,Qe);h.bufferData(h.ARRAY_BUFFER,new Float32Array(tr),h.STATIC_DRAW);h.bindBuffer(h.ARRAY_BUFFER,null);const Je=h.createBuffer();h.bindBuffer(h.ELEMENT_ARRAY_BUFFER,Je);h.bufferData(h.ELEMENT_ARRAY_BUFFER,new Uint16Array(Ke),h.STATIC_DRAW);h.bindBuffer(h.ELEMENT_ARRAY_BUFFER,null);const rr=xe,be=h.createShader(h.VERTEX_SHADER);h.shaderSource(be,rr);h.compileShader(be);const or=er,Te=h.createShader(h.FRAGMENT_SHADER);h.shaderSource(Te,or);h.compileShader(Te);const T=h.createProgram();h.attachShader(T,be);h.attachShader(T,Te);h.linkProgram(T);var ir=h.getUniformLocation(T,"Pmatrix"),sr=h.getUniformLocation(T,"Vmatrix"),cr=h.getUniformLocation(T,"Mmatrix");h.bindBuffer(h.ARRAY_BUFFER,Qe);var ze=h.getAttribLocation(T,"coordinates");h.vertexAttribPointer(ze,3,h.FLOAT,!1,0,0);h.enableVertexAttribArray(ze);h.useProgram(T);function nr(e,r,t,o){var i=Math.tan(e*.5*Math.PI/180);return[.5/i,0,0,0,0,.5*r/i,0,0,0,0,-(o+t)/(o-t),-1,0,0,-2*o*t/(o-t),0]}var ar=nr(22,g.width*.5/g.height,1,100),v=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],ge=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];ge[14]=ge[14]-2.5;var Le=.95,W=!1,O,H,q=0,V=0,lr=function(e){return W=!0,O=e.pageX,H=e.pageY,e.preventDefault(),!1},$e=function(e){W=!1},hr=function(e){if(!W)return!1;q=(e.pageX-O)*2*Math.PI/g.width,V=(e.pageY-H)*2*Math.PI/g.height,te+=q,re+=V,O=e.pageX,H=e.pageY,e.preventDefault()},fr=function(e){W=!0;let r=e.touches[0];return O=r.pageX,H=r.pageY,e.preventDefault(),!1},ur=function(e){if(!W)return!1;let r=e.touches[0];q=(r.pageX-O)*2*Math.PI/g.width,V=(r.pageY-H)*2*Math.PI/g.height,te+=q,re+=V,O=r.pageX,H=r.pageY,e.preventDefault()};g.addEventListener("mousedown",lr,!1);g.addEventListener("mouseup",$e,!1);g.addEventListener("mouseout",$e,!1);g.addEventListener("mousemove",hr,!1);g.addEventListener("touchstart",fr,!1);g.addEventListener("touchend",$e,!1);g.addEventListener("touchmove",ur,!1);function vr(e,r){var t=Math.cos(r),o=Math.sin(r),i=e[1],s=e[5],n=e[9];e[1]=e[1]*t-e[2]*o,e[5]=e[5]*t-e[6]*o,e[9]=e[9]*t-e[10]*o,e[2]=e[2]*t+i*o,e[6]=e[6]*t+s*o,e[10]=e[10]*t+n*o}function pr(e,r){var t=Math.cos(r),o=Math.sin(r),i=e[0],s=e[4],n=e[8];e[0]=t*e[0]+o*e[2],e[4]=t*e[4]+o*e[6],e[8]=t*e[8]+o*e[10],e[2]=t*e[2]-o*i,e[6]=t*e[6]-o*s,e[10]=t*e[10]-o*n}var te=0,re=0,et=function(e){W||(q*=Le,V*=Le,te+=q,re+=V),v[0]=1,v[1]=0,v[2]=0,v[3]=0,v[4]=0,v[5]=1,v[6]=0,v[7]=0,v[8]=0,v[9]=0,v[10]=1,v[11]=0,v[12]=0,v[13]=0,v[14]=0,v[15]=1,pr(v,te),vr(v,re),h.enable(h.DEPTH_TEST),h.clearColor(0,0,0,1),h.clearDepth(1),h.viewport(0,0,g.width,g.height),h.clear(h.COLOR_BUFFER_BIT|h.DEPTH_BUFFER_BIT),h.uniformMatrix4fv(ir,!1,ar),h.uniformMatrix4fv(sr,!1,ge),h.uniformMatrix4fv(cr,!1,v),h.bindBuffer(h.ELEMENT_ARRAY_BUFFER,Je),h.drawElements(h.TRIANGLES,Ke.length,h.UNSIGNED_SHORT,0),window.requestAnimationFrame(et)};et();
