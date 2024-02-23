(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();const lt=(e,r)=>e===r,z={equals:lt};let ht=qe;const B=1,ee=2,De={owned:null,cleanups:null,context:null,owner:null};var b=null;let ve=null,f=null,g=null,F=null,le=0;function ft(e,r){const t=f,o=b,s=e.length===0,i=s?De:{owned:null,cleanups:null,context:null,owner:r===void 0?o:r},c=s?e:()=>e(()=>M(()=>fe(i)));b=i,f=null;try{return Q(c,!0)}finally{f=t,b=o}}function Ie(e,r){r=r?Object.assign({},z,r):z;const t={value:e,observers:null,observerSlots:null,comparator:r.equals||void 0},o=s=>(typeof s=="function"&&(s=s(t.value)),Ne(t,s));return[Ye.bind(t),o]}function w(e,r,t){const o=Oe(e,r,!1,B);he(o)}function Fe(e,r,t){t=t?Object.assign({},z,t):z;const o=Oe(e,r,!0,0);return o.observers=null,o.observerSlots=null,o.comparator=t.equals||void 0,he(o),Ye.bind(o)}function M(e){if(f===null)return e();const r=f;f=null;try{return e()}finally{f=r}}function Ye(){if(this.sources&&this.state)if(this.state===B)he(this);else{const e=g;g=null,Q(()=>te(this),!1),g=e}if(f){const e=this.observers?this.observers.length:0;f.sources?(f.sources.push(this),f.sourceSlots.push(e)):(f.sources=[this],f.sourceSlots=[e]),this.observers?(this.observers.push(f),this.observerSlots.push(f.sources.length-1)):(this.observers=[f],this.observerSlots=[f.sources.length-1])}return this.value}function Ne(e,r,t){let o=e.value;return(!e.comparator||!e.comparator(o,r))&&(e.value=r,e.observers&&e.observers.length&&Q(()=>{for(let s=0;s<e.observers.length;s+=1){const i=e.observers[s],c=ve&&ve.running;c&&ve.disposed.has(i),(c?!i.tState:!i.state)&&(i.pure?g.push(i):F.push(i),i.observers&&He(i)),c||(i.state=B)}if(g.length>1e6)throw g=[],new Error},!1)),r}function he(e){if(!e.fn)return;fe(e);const r=b,t=f,o=le;f=b=e,ut(e,e.value,o),f=t,b=r}function ut(e,r,t){let o;try{o=e.fn(r)}catch(s){return e.pure&&(e.state=B,e.owned&&e.owned.forEach(fe),e.owned=null),e.updatedAt=t+1,ke(s)}(!e.updatedAt||e.updatedAt<=t)&&(e.updatedAt!=null&&"observers"in e?Ne(e,o):e.value=o,e.updatedAt=t)}function Oe(e,r,t,o=B,s){const i={fn:e,state:o,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:r,owner:b,context:null,pure:t};return b===null||b!==De&&(b.owned?b.owned.push(i):b.owned=[i]),i}function Xe(e){if(e.state===0)return;if(e.state===ee)return te(e);if(e.suspense&&M(e.suspense.inFallback))return e.suspense.effects.push(e);const r=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<le);)e.state&&r.push(e);for(let t=r.length-1;t>=0;t--)if(e=r[t],e.state===B)he(e);else if(e.state===ee){const o=g;g=null,Q(()=>te(e,r[0]),!1),g=o}}function Q(e,r){if(g)return e();let t=!1;r||(g=[]),F?t=!0:F=[],le++;try{const o=e();return vt(t),o}catch(o){t||(F=null),g=null,ke(o)}}function vt(e){if(g&&(qe(g),g=null),e)return;const r=F;F=null,r.length&&Q(()=>ht(r),!1)}function qe(e){for(let r=0;r<e.length;r++)Xe(e[r])}function te(e,r){e.state=0;for(let t=0;t<e.sources.length;t+=1){const o=e.sources[t];if(o.sources){const s=o.state;s===B?o!==r&&(!o.updatedAt||o.updatedAt<le)&&Xe(o):s===ee&&te(o,r)}}}function He(e){for(let r=0;r<e.observers.length;r+=1){const t=e.observers[r];t.state||(t.state=ee,t.pure?g.push(t):F.push(t),t.observers&&He(t))}}function fe(e){let r;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),o=e.sourceSlots.pop(),s=t.observers;if(s&&s.length){const i=s.pop(),c=t.observerSlots.pop();o<s.length&&(i.sourceSlots[c]=o,s[o]=i,t.observerSlots[o]=c)}}if(e.owned){for(r=e.owned.length-1;r>=0;r--)fe(e.owned[r]);e.owned=null}if(e.cleanups){for(r=e.cleanups.length-1;r>=0;r--)e.cleanups[r]();e.cleanups=null}e.state=0,e.context=null}function ke(e){throw e}function y(e,r){return M(()=>e(r||{}))}const pt=e=>`Stale read from <${e}>.`;function Ve(e){const r=e.keyed,t=Fe(()=>e.when,void 0,{equals:(o,s)=>r?o===s:!o==!s});return Fe(()=>{const o=t();if(o){const s=e.children;return typeof s=="function"&&s.length>0?M(()=>s(r?o:()=>{if(!M(t))throw pt("Show");return e.when})):s}return e.fallback},void 0,void 0)}function dt(e,r,t){let o=t.length,s=r.length,i=o,c=0,n=0,E=r[s-1].nextSibling,m=null;for(;c<s||n<i;){if(r[c]===t[n]){c++,n++;continue}for(;r[s-1]===t[i-1];)s--,i--;if(s===c){const A=i<o?n?t[n-1].nextSibling:t[i-n]:E;for(;n<i;)e.insertBefore(t[n++],A)}else if(i===n)for(;c<s;)(!m||!m.has(r[c]))&&r[c].remove(),c++;else if(r[c]===t[i-1]&&t[n]===r[s-1]){const A=r[--s].nextSibling;e.insertBefore(t[n++],r[c++].nextSibling),e.insertBefore(t[--i],A),r[s]=t[i]}else{if(!m){m=new Map;let S=n;for(;S<i;)m.set(t[S],S++)}const A=m.get(r[c]);if(A!=null)if(n<A&&A<i){let S=c,ue=1,Se;for(;++S<s&&S<i&&!((Se=m.get(r[S]))==null||Se!==A+ue);)ue++;if(ue>A-n){const at=r[c];for(;n<A;)e.insertBefore(t[n++],at)}else e.replaceChild(t[n++],r[c++])}else c++;else r[c++].remove()}}}function gt(e,r,t,o={}){let s;return ft(i=>{s=i,r===document?e():K(r,e(),r.firstChild?null:void 0,t)},o.owner),()=>{s(),r.textContent=""}}function R(e,r,t){let o;const s=()=>{const c=document.createElement("template");return c.innerHTML=e,t?c.content.firstChild.firstChild:c.content.firstChild},i=r?()=>M(()=>document.importNode(o||(o=s()),!0)):()=>(o||(o=s())).cloneNode(!0);return i.cloneNode=i,i}function xt(e,r,t){t==null?e.removeAttribute(r):e.setAttribute(r,t)}function P(e,r){r==null?e.removeAttribute("class"):e.className=r}function K(e,r,t,o){if(t!==void 0&&!o&&(o=[]),typeof r!="function")return re(e,r,o,t);w(s=>re(e,r(),s,t),o)}function re(e,r,t,o,s){for(;typeof t=="function";)t=t();if(r===t)return t;const i=typeof r,c=o!==void 0;if(e=c&&t[0]&&t[0].parentNode||e,i==="string"||i==="number")if(i==="number"&&(r=r.toString()),c){let n=t[0];n&&n.nodeType===3?n.data=r:n=document.createTextNode(r),t=L(e,t,o,n)}else t!==""&&typeof t=="string"?t=e.firstChild.data=r:t=e.textContent=r;else if(r==null||i==="boolean")t=L(e,t,o);else{if(i==="function")return w(()=>{let n=r();for(;typeof n=="function";)n=n();t=re(e,n,t,o)}),()=>t;if(Array.isArray(r)){const n=[],E=t&&Array.isArray(t);if(pe(n,r,t,s))return w(()=>t=re(e,n,t,o,!0)),()=>t;if(n.length===0){if(t=L(e,t,o),c)return t}else E?t.length===0?Be(e,n,o):dt(e,t,n):(t&&L(e),Be(e,n));t=n}else if(r.nodeType){if(Array.isArray(t)){if(c)return t=L(e,t,o,r);L(e,t,null,r)}else t==null||t===""||!e.firstChild?e.appendChild(r):e.replaceChild(r,e.firstChild);t=r}else console.warn("Unrecognized value. Skipped inserting",r)}return t}function pe(e,r,t,o){let s=!1;for(let i=0,c=r.length;i<c;i++){let n=r[i],E=t&&t[i],m;if(!(n==null||n===!0||n===!1))if((m=typeof n)=="object"&&n.nodeType)e.push(n);else if(Array.isArray(n))s=pe(e,n,E)||s;else if(m==="function")if(o){for(;typeof n=="function";)n=n();s=pe(e,Array.isArray(n)?n:[n],Array.isArray(E)?E:[E])||s}else e.push(n),s=!0;else{const A=String(n);E&&E.nodeType===3&&E.data===A?e.push(E):e.push(document.createTextNode(A))}}return s}function Be(e,r,t=null){for(let o=0,s=r.length;o<s;o++)e.insertBefore(r[o],t)}function L(e,r,t,o){if(t===void 0)return e.textContent="";const s=o||document.createTextNode("");if(r.length){let i=!1;for(let c=r.length-1;c>=0;c--){const n=r[c];if(s!==n){const E=n.parentNode===e;!i&&!c?E?e.replaceChild(s,n):e.insertBefore(s,t):E&&n.remove()}else i=!0}}else e.insertBefore(s,t);return[s]}const _t="_container_14umt_1",Et={container:_t},At="_gallery_jq8m3_1",bt="_canvas_container_jq8m3_11",mt="_canvas_jq8m3_11",de={gallery:At,canvas_container:bt,canvas:mt},yt=R("<div><canvas>"),Rt=R("<div>");function J({id:e}){return(()=>{const r=yt(),t=r.firstChild;return xt(t,"id",e),w(o=>{const s=de.canvas_container,i=de.canvas;return s!==o._v$&&P(r,o._v$=s),i!==o._v$2&&P(t,o._v$2=i),o},{_v$:void 0,_v$2:void 0}),r})()}function wt(){const[e,r]=Ie(window.innerWidth<=640);return window.addEventListener("resize",()=>{r(window.innerWidth<=640)}),(()=>{const t=Rt();return K(t,y(Ve,{get when(){return!e()},get fallback(){return y(J,{id:"chakana1"})},get children(){return[y(J,{id:"chakana1"}),y(J,{id:"chakana2"}),y(J,{id:"chakana3"})]}})),w(()=>P(t,de.gallery)),t})()}const Tt="_container_92igg_1",$t="_weigth_92igg_21",Le={container:Tt,weigth:$t},Ct=R("<p>Dale click a la imagen y, sosteniendo el click, mueve el mouse"),St=R("<p>Click on the image and, holding the click, move the mouse"),Ft=R("<p>Cliquez sur l'image et, en le laissant appuyé, déplacez la souris"),Bt=R("<p>This website is 51Ko ❃ႣᄎႣ❃"),Lt=R("<div>"),Mt=R("<p>Touch the image");function Pt(){const[e,r]=Ie(window.innerWidth<=640);return window.addEventListener("resize",()=>{r(window.innerWidth<=640)}),(()=>{const t=Lt();return K(t,y(Ve,{get when(){return!e()},get fallback(){return Mt()},get children(){return[Ct(),St(),Ft(),(()=>{const o=Bt();return w(()=>P(o,Le.weigth)),o})()]}})),w(()=>P(t,Le.container)),t})()}const Ut=R("<div>");function Dt(){return(()=>{const e=Ut();return K(e,y(wt,{}),null),K(e,y(Pt,{}),null),w(()=>P(e,Et.container)),e})()}const It=document.getElementById("root");gt(()=>y(Dt,{}),It);const Ee=`
    attribute vec3 coordinates;
    
    uniform mat4 Pmatrix;
    uniform mat4 Vmatrix;
    uniform mat4 Mmatrix;

    varying vec2 vTextureCoord;

    void main(void) {
        vTextureCoord = coordinates.xy;
    
        gl_Position = Pmatrix * Vmatrix * Mmatrix * vec4(coordinates, 1.);

    }`,Yt=`
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
    }`,x=document.getElementById("chakana1"),a=x.getContext("experimental-webgl"),Nt=[-1,1,0,-1,-1,0,1,-1,0,1,1,0],je=[3,2,1,3,1,0],Ge=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,Ge);a.bufferData(a.ARRAY_BUFFER,new Float32Array(Nt),a.STATIC_DRAW);a.bindBuffer(a.ARRAY_BUFFER,null);const We=a.createBuffer();a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,We);a.bufferData(a.ELEMENT_ARRAY_BUFFER,new Uint16Array(je),a.STATIC_DRAW);a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,null);const Ot=Ee,Ae=a.createShader(a.VERTEX_SHADER);a.shaderSource(Ae,Ot);a.compileShader(Ae);const Xt=Yt,be=a.createShader(a.FRAGMENT_SHADER);a.shaderSource(be,Xt);a.compileShader(be);const T=a.createProgram();a.attachShader(T,Ae);a.attachShader(T,be);a.linkProgram(T);var qt=a.getUniformLocation(T,"Pmatrix"),Ht=a.getUniformLocation(T,"Vmatrix"),kt=a.getUniformLocation(T,"Mmatrix");a.bindBuffer(a.ARRAY_BUFFER,Ge);var Ze=a.getAttribLocation(T,"coordinates");a.vertexAttribPointer(Ze,3,a.FLOAT,!1,0,0);a.enableVertexAttribArray(Ze);a.useProgram(T);function Vt(e,r,t,o){var s=Math.tan(e*.5*Math.PI/180);return[.5/s,0,0,0,0,.5*r/s,0,0,0,0,-(o+t)/(o-t),-1,0,0,-2*o*t/(o-t),0]}var jt=Vt(22,x.width*.5/x.height,1,100),u=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],ge=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];ge[14]=ge[14]-2.5;var Me=.95,G=!1,U,D,I=0,Y=0,Gt=function(e){return G=!0,U=e.pageX,D=e.pageY,e.preventDefault(),!1},Wt=function(e){G=!0;let r=e.touches[0];return U=r.pageX,D=r.pageY,e.preventDefault(),!1},me=function(e){G=!1},Zt=function(e){if(!G)return!1;I=(e.pageX-U)*2*Math.PI/x.width,Y=(e.pageY-D)*2*Math.PI/x.height,oe+=I,se+=Y,U=e.pageX,D=e.pageY,e.preventDefault()},Kt=function(e){if(!G)return!1;let r=e.touches[0];I=(r.pageX-U)*2*Math.PI/x.width,Y=(r.pageY-D)*2*Math.PI/x.height,oe+=I,se+=Y,U=r.pageX,D=r.pageY,e.preventDefault()};x.addEventListener("mousedown",Gt,!1);x.addEventListener("mouseup",me,!1);x.addEventListener("mouseout",me,!1);x.addEventListener("mousemove",Zt,!1);x.addEventListener("touchstart",Wt,!1);x.addEventListener("touchend",me,!1);x.addEventListener("touchmove",Kt,!1);function Qt(e,r){var t=Math.cos(r),o=Math.sin(r),s=e[1],i=e[5],c=e[9];e[1]=e[1]*t-e[2]*o,e[5]=e[5]*t-e[6]*o,e[9]=e[9]*t-e[10]*o,e[2]=e[2]*t+s*o,e[6]=e[6]*t+i*o,e[10]=e[10]*t+c*o}function Jt(e,r){var t=Math.cos(r),o=Math.sin(r),s=e[0],i=e[4],c=e[8];e[0]=t*e[0]+o*e[2],e[4]=t*e[4]+o*e[6],e[8]=t*e[8]+o*e[10],e[2]=t*e[2]-o*s,e[6]=t*e[6]-o*i,e[10]=t*e[10]-o*c}var oe=0,se=0,Ke=function(e){G||(I*=Me,Y*=Me,oe+=I,se+=Y),u[0]=1,u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=1,u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=1,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,Jt(u,oe),Qt(u,se),a.enable(a.DEPTH_TEST),a.clearColor(0,0,0,1),a.clearDepth(1),a.viewport(0,0,x.width,x.height),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT),a.uniformMatrix4fv(qt,!1,jt),a.uniformMatrix4fv(Ht,!1,ge),a.uniformMatrix4fv(kt,!1,u),a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,We),a.drawElements(a.TRIANGLES,je.length,a.UNSIGNED_SHORT,0),window.requestAnimationFrame(Ke)};Ke();const zt=`
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
    }`,d=document.getElementById("chakana2"),l=d.getContext("experimental-webgl"),er=[-1,1,0,-1,-1,0,1,-1,0,1,1,0],Qe=[3,2,1,3,1,0],Je=l.createBuffer();l.bindBuffer(l.ARRAY_BUFFER,Je);l.bufferData(l.ARRAY_BUFFER,new Float32Array(er),l.STATIC_DRAW);l.bindBuffer(l.ARRAY_BUFFER,null);const ze=l.createBuffer();l.bindBuffer(l.ELEMENT_ARRAY_BUFFER,ze);l.bufferData(l.ELEMENT_ARRAY_BUFFER,new Uint16Array(Qe),l.STATIC_DRAW);l.bindBuffer(l.ELEMENT_ARRAY_BUFFER,null);const tr=Ee,ye=l.createShader(l.VERTEX_SHADER);l.shaderSource(ye,tr);l.compileShader(ye);const rr=zt,Re=l.createShader(l.FRAGMENT_SHADER);l.shaderSource(Re,rr);l.compileShader(Re);const $=l.createProgram();l.attachShader($,ye);l.attachShader($,Re);l.linkProgram($);var or=l.getUniformLocation($,"Pmatrix"),sr=l.getUniformLocation($,"Vmatrix"),ir=l.getUniformLocation($,"Mmatrix");l.bindBuffer(l.ARRAY_BUFFER,Je);var et=l.getAttribLocation($,"coordinates");l.vertexAttribPointer(et,3,l.FLOAT,!1,0,0);l.enableVertexAttribArray(et);l.useProgram($);function nr(e,r,t,o){var s=Math.tan(e*.5*Math.PI/180);return[.5/s,0,0,0,0,.5*r/s,0,0,0,0,-(o+t)/(o-t),-1,0,0,-2*o*t/(o-t),0]}var cr=nr(22,d.width*.5/d.height,1,100),v=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],xe=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];xe[14]=xe[14]-2.5;var Pe=.95,W=!1,N,O,X=0,q=0,tt=function(e){return W=!0,N=e.pageX,O=e.pageY,e.preventDefault(),!1},we=function(e){W=!1},ar=function(e){if(!W)return!1;X=(e.pageX-N)*2*Math.PI/d.width,q=(e.pageY-O)*2*Math.PI/d.height,ie+=X,ne+=q,N=e.pageX,O=e.pageY,e.preventDefault()},lr=function(e){W=!0;let r=e.touches[0];return N=r.pageX,O=r.pageY,e.preventDefault(),!1},hr=function(e){if(!W)return!1;let r=e.touches[0];X=(r.pageX-N)*2*Math.PI/d.width,q=(r.pageY-O)*2*Math.PI/d.height,ie+=X,ne+=q,N=r.pageX,O=r.pageY,e.preventDefault()};d.addEventListener("mouseover",tt,!1);d.addEventListener("mousedown",we,!1);d.addEventListener("mouseup",tt,!1);d.addEventListener("mouseout",we,!1);d.addEventListener("mousemove",ar,!1);d.addEventListener("touchstart",lr,!1);d.addEventListener("touchend",we,!1);d.addEventListener("touchmove",hr,!1);function fr(e,r){var t=Math.cos(r),o=Math.sin(r),s=e[1],i=e[5],c=e[9];e[1]=e[1]*t-e[2]*o,e[5]=e[5]*t-e[6]*o,e[9]=e[9]*t-e[10]*o,e[2]=e[2]*t+s*o,e[6]=e[6]*t+i*o,e[10]=e[10]*t+c*o}function ur(e,r){var t=Math.cos(r),o=Math.sin(r),s=e[0],i=e[4],c=e[8];e[0]=t*e[0]+o*e[2],e[4]=t*e[4]+o*e[6],e[8]=t*e[8]+o*e[10],e[2]=t*e[2]-o*s,e[6]=t*e[6]-o*i,e[10]=t*e[10]-o*c}var ie=0,ne=0,rt=function(e){W||(X*=Pe,q*=Pe,ie+=X,ne+=q),v[0]=1,v[1]=0,v[2]=0,v[3]=0,v[4]=0,v[5]=1,v[6]=0,v[7]=0,v[8]=0,v[9]=0,v[10]=1,v[11]=0,v[12]=0,v[13]=0,v[14]=0,v[15]=1,ur(v,ie),fr(v,ne),l.enable(l.DEPTH_TEST),l.clearColor(0,0,0,1),l.clearDepth(1),l.viewport(0,0,d.width,d.height),l.clear(l.COLOR_BUFFER_BIT|l.DEPTH_BUFFER_BIT),l.uniformMatrix4fv(or,!1,cr),l.uniformMatrix4fv(sr,!1,xe),l.uniformMatrix4fv(ir,!1,v),l.bindBuffer(l.ELEMENT_ARRAY_BUFFER,ze),l.drawElements(l.TRIANGLES,Qe.length,l.UNSIGNED_SHORT,0),window.requestAnimationFrame(rt)};rt();const vr=`
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
    }`,_=document.getElementById("chakana3"),h=_.getContext("experimental-webgl"),pr=[-1,1,0,-1,-1,0,1,-1,0,1,1,0],ot=[3,2,1,3,1,0],st=h.createBuffer();h.bindBuffer(h.ARRAY_BUFFER,st);h.bufferData(h.ARRAY_BUFFER,new Float32Array(pr),h.STATIC_DRAW);h.bindBuffer(h.ARRAY_BUFFER,null);const it=h.createBuffer();h.bindBuffer(h.ELEMENT_ARRAY_BUFFER,it);h.bufferData(h.ELEMENT_ARRAY_BUFFER,new Uint16Array(ot),h.STATIC_DRAW);h.bindBuffer(h.ELEMENT_ARRAY_BUFFER,null);const dr=Ee,Te=h.createShader(h.VERTEX_SHADER);h.shaderSource(Te,dr);h.compileShader(Te);const gr=vr,$e=h.createShader(h.FRAGMENT_SHADER);h.shaderSource($e,gr);h.compileShader($e);const C=h.createProgram();h.attachShader(C,Te);h.attachShader(C,$e);h.linkProgram(C);var xr=h.getUniformLocation(C,"Pmatrix"),_r=h.getUniformLocation(C,"Vmatrix"),Er=h.getUniformLocation(C,"Mmatrix");h.bindBuffer(h.ARRAY_BUFFER,st);var nt=h.getAttribLocation(C,"coordinates");h.vertexAttribPointer(nt,3,h.FLOAT,!1,0,0);h.enableVertexAttribArray(nt);h.useProgram(C);function Ar(e,r,t,o){var s=Math.tan(e*.5*Math.PI/180);return[.5/s,0,0,0,0,.5*r/s,0,0,0,0,-(o+t)/(o-t),-1,0,0,-2*o*t/(o-t),0]}var br=Ar(22,_.width*.5/_.height,1,100),p=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],_e=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];_e[14]=_e[14]-2.5;var Ue=.95,Z=!1,H,k,V=0,j=0,mr=function(e){return Z=!0,H=e.pageX,k=e.pageY,e.preventDefault(),!1},Ce=function(e){Z=!1},yr=function(e){if(!Z)return!1;V=(e.pageX-H)*2*Math.PI/_.width,j=(e.pageY-k)*2*Math.PI/_.height,ce+=V,ae+=j,H=e.pageX,k=e.pageY,e.preventDefault()},Rr=function(e){Z=!0;let r=e.touches[0];return H=r.pageX,k=r.pageY,e.preventDefault(),!1},wr=function(e){if(!Z)return!1;let r=e.touches[0];V=(r.pageX-H)*2*Math.PI/_.width,j=(r.pageY-k)*2*Math.PI/_.height,ce+=V,ae+=j,H=r.pageX,k=r.pageY,e.preventDefault()};_.addEventListener("mousedown",mr,!1);_.addEventListener("mouseup",Ce,!1);_.addEventListener("mouseout",Ce,!1);_.addEventListener("mousemove",yr,!1);_.addEventListener("touchstart",Rr,!1);_.addEventListener("touchend",Ce,!1);_.addEventListener("touchmove",wr,!1);function Tr(e,r){var t=Math.cos(r),o=Math.sin(r),s=e[1],i=e[5],c=e[9];e[1]=e[1]*t-e[2]*o,e[5]=e[5]*t-e[6]*o,e[9]=e[9]*t-e[10]*o,e[2]=e[2]*t+s*o,e[6]=e[6]*t+i*o,e[10]=e[10]*t+c*o}function $r(e,r){var t=Math.cos(r),o=Math.sin(r),s=e[0],i=e[4],c=e[8];e[0]=t*e[0]+o*e[2],e[4]=t*e[4]+o*e[6],e[8]=t*e[8]+o*e[10],e[2]=t*e[2]-o*s,e[6]=t*e[6]-o*i,e[10]=t*e[10]-o*c}var ce=0,ae=0,ct=function(e){Z||(V*=Ue,j*=Ue,ce+=V,ae+=j),p[0]=1,p[1]=0,p[2]=0,p[3]=0,p[4]=0,p[5]=1,p[6]=0,p[7]=0,p[8]=0,p[9]=0,p[10]=1,p[11]=0,p[12]=0,p[13]=0,p[14]=0,p[15]=1,$r(p,ce),Tr(p,ae),h.enable(h.DEPTH_TEST),h.clearColor(0,0,0,1),h.clearDepth(1),h.viewport(0,0,_.width,_.height),h.clear(h.COLOR_BUFFER_BIT|h.DEPTH_BUFFER_BIT),h.uniformMatrix4fv(xr,!1,br),h.uniformMatrix4fv(_r,!1,_e),h.uniformMatrix4fv(Er,!1,p),h.bindBuffer(h.ELEMENT_ARRAY_BUFFER,it),h.drawElements(h.TRIANGLES,ot.length,h.UNSIGNED_SHORT,0),window.requestAnimationFrame(ct)};ct();
