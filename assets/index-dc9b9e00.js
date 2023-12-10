(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();const ft=(e,r)=>e===r,ee={equals:ft};let Ye=ke;const $=1,te=2,Ne={owned:null,cleanups:null,context:null,owner:null};var b=null;let pe=null,f=null,g=null,R=null,fe=0;function ut(e,r){const t=f,o=b,s=e.length===0,i=s?Ne:{owned:null,cleanups:null,context:null,owner:r===void 0?o:r},c=s?e:()=>e(()=>L(()=>ue(i)));b=i,f=null;try{return J(c,!0)}finally{f=t,b=o}}function Oe(e,r){r=r?Object.assign({},ee,r):ee;const t={value:e,observers:null,observerSlots:null,comparator:r.equals||void 0},o=s=>(typeof s=="function"&&(s=s(t.value)),qe(t,s));return[He.bind(t),o]}function T(e,r,t){const o=Ae(e,r,!1,$);Q(o)}function vt(e,r,t){Ye=gt;const o=Ae(e,r,!1,$);(!t||!t.render)&&(o.user=!0),R?R.push(o):Q(o)}function Le(e,r,t){t=t?Object.assign({},ee,t):ee;const o=Ae(e,r,!0,0);return o.observers=null,o.observerSlots=null,o.comparator=t.equals||void 0,Q(o),He.bind(o)}function L(e){if(f===null)return e();const r=f;f=null;try{return e()}finally{f=r}}function Xe(e){vt(()=>L(e))}function He(){if(this.sources&&this.state)if(this.state===$)Q(this);else{const e=g;g=null,J(()=>oe(this),!1),g=e}if(f){const e=this.observers?this.observers.length:0;f.sources?(f.sources.push(this),f.sourceSlots.push(e)):(f.sources=[this],f.sourceSlots=[e]),this.observers?(this.observers.push(f),this.observerSlots.push(f.sources.length-1)):(this.observers=[f],this.observerSlots=[f.sources.length-1])}return this.value}function qe(e,r,t){let o=e.value;return(!e.comparator||!e.comparator(o,r))&&(e.value=r,e.observers&&e.observers.length&&J(()=>{for(let s=0;s<e.observers.length;s+=1){const i=e.observers[s],c=pe&&pe.running;c&&pe.disposed.has(i),(c?!i.tState:!i.state)&&(i.pure?g.push(i):R.push(i),i.observers&&Ve(i)),c||(i.state=$)}if(g.length>1e6)throw g=[],new Error},!1)),r}function Q(e){if(!e.fn)return;ue(e);const r=b,t=f,o=fe;f=b=e,pt(e,e.value,o),f=t,b=r}function pt(e,r,t){let o;try{o=e.fn(r)}catch(s){return e.pure&&(e.state=$,e.owned&&e.owned.forEach(ue),e.owned=null),e.updatedAt=t+1,We(s)}(!e.updatedAt||e.updatedAt<=t)&&(e.updatedAt!=null&&"observers"in e?qe(e,o):e.value=o,e.updatedAt=t)}function Ae(e,r,t,o=$,s){const i={fn:e,state:o,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:r,owner:b,context:null,pure:t};return b===null||b!==Ne&&(b.owned?b.owned.push(i):b.owned=[i]),i}function re(e){if(e.state===0)return;if(e.state===te)return oe(e);if(e.suspense&&L(e.suspense.inFallback))return e.suspense.effects.push(e);const r=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<fe);)e.state&&r.push(e);for(let t=r.length-1;t>=0;t--)if(e=r[t],e.state===$)Q(e);else if(e.state===te){const o=g;g=null,J(()=>oe(e,r[0]),!1),g=o}}function J(e,r){if(g)return e();let t=!1;r||(g=[]),R?t=!0:R=[],fe++;try{const o=e();return dt(t),o}catch(o){t||(R=null),g=null,We(o)}}function dt(e){if(g&&(ke(g),g=null),e)return;const r=R;R=null,r.length&&J(()=>Ye(r),!1)}function ke(e){for(let r=0;r<e.length;r++)re(e[r])}function gt(e){let r,t=0;for(r=0;r<e.length;r++){const o=e[r];o.user?e[t++]=o:re(o)}for(r=0;r<t;r++)re(e[r])}function oe(e,r){e.state=0;for(let t=0;t<e.sources.length;t+=1){const o=e.sources[t];if(o.sources){const s=o.state;s===$?o!==r&&(!o.updatedAt||o.updatedAt<fe)&&re(o):s===te&&oe(o,r)}}}function Ve(e){for(let r=0;r<e.observers.length;r+=1){const t=e.observers[r];t.state||(t.state=te,t.pure?g.push(t):R.push(t),t.observers&&Ve(t))}}function ue(e){let r;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),o=e.sourceSlots.pop(),s=t.observers;if(s&&s.length){const i=s.pop(),c=t.observerSlots.pop();o<s.length&&(i.sourceSlots[c]=o,s[o]=i,t.observerSlots[o]=c)}}if(e.owned){for(r=e.owned.length-1;r>=0;r--)ue(e.owned[r]);e.owned=null}if(e.cleanups){for(r=e.cleanups.length-1;r>=0;r--)e.cleanups[r]();e.cleanups=null}e.state=0,e.context=null}function We(e){throw e}function y(e,r){return L(()=>e(r||{}))}const xt=e=>`Stale read from <${e}>.`;function Ge(e){const r=e.keyed,t=Le(()=>e.when,void 0,{equals:(o,s)=>r?o===s:!o==!s});return Le(()=>{const o=t();if(o){const s=e.children;return typeof s=="function"&&s.length>0?L(()=>s(r?o:()=>{if(!L(t))throw xt("Show");return e.when})):s}return e.fallback},void 0,void 0)}function Et(e,r,t){let o=t.length,s=r.length,i=o,c=0,n=0,_=r[s-1].nextSibling,m=null;for(;c<s||n<i;){if(r[c]===t[n]){c++,n++;continue}for(;r[s-1]===t[i-1];)s--,i--;if(s===c){const A=i<o?n?t[n-1].nextSibling:t[i-n]:_;for(;n<i;)e.insertBefore(t[n++],A)}else if(i===n)for(;c<s;)(!m||!m.has(r[c]))&&r[c].remove(),c++;else if(r[c]===t[i-1]&&t[n]===r[s-1]){const A=r[--s].nextSibling;e.insertBefore(t[n++],r[c++].nextSibling),e.insertBefore(t[--i],A),r[s]=t[i]}else{if(!m){m=new Map;let B=n;for(;B<i;)m.set(t[B],B++)}const A=m.get(r[c]);if(A!=null)if(n<A&&A<i){let B=c,ve=1,Be;for(;++B<s&&B<i&&!((Be=m.get(r[B]))==null||Be!==A+ve);)ve++;if(ve>A-n){const ht=r[c];for(;n<A;)e.insertBefore(t[n++],ht)}else e.replaceChild(t[n++],r[c++])}else c++;else r[c++].remove()}}}function _t(e,r,t,o={}){let s;return ut(i=>{s=i,r===document?e():K(r,e(),r.firstChild?null:void 0,t)},o.owner),()=>{s(),r.textContent=""}}function w(e,r,t){let o;const s=()=>{const c=document.createElement("template");return c.innerHTML=e,t?c.content.firstChild.firstChild:c.content.firstChild},i=r?()=>L(()=>document.importNode(o||(o=s()),!0)):()=>(o||(o=s())).cloneNode(!0);return i.cloneNode=i,i}function At(e,r,t){t==null?e.removeAttribute(r):e.setAttribute(r,t)}function U(e,r){r==null?e.removeAttribute("class"):e.className=r}function K(e,r,t,o){if(t!==void 0&&!o&&(o=[]),typeof r!="function")return se(e,r,o,t);T(s=>se(e,r(),s,t),o)}function se(e,r,t,o,s){for(;typeof t=="function";)t=t();if(r===t)return t;const i=typeof r,c=o!==void 0;if(e=c&&t[0]&&t[0].parentNode||e,i==="string"||i==="number")if(i==="number"&&(r=r.toString()),c){let n=t[0];n&&n.nodeType===3?n.data=r:n=document.createTextNode(r),t=M(e,t,o,n)}else t!==""&&typeof t=="string"?t=e.firstChild.data=r:t=e.textContent=r;else if(r==null||i==="boolean")t=M(e,t,o);else{if(i==="function")return T(()=>{let n=r();for(;typeof n=="function";)n=n();t=se(e,n,t,o)}),()=>t;if(Array.isArray(r)){const n=[],_=t&&Array.isArray(t);if(de(n,r,t,s))return T(()=>t=se(e,n,t,o,!0)),()=>t;if(n.length===0){if(t=M(e,t,o),c)return t}else _?t.length===0?Me(e,n,o):Et(e,t,n):(t&&M(e),Me(e,n));t=n}else if(r.nodeType){if(Array.isArray(t)){if(c)return t=M(e,t,o,r);M(e,t,null,r)}else t==null||t===""||!e.firstChild?e.appendChild(r):e.replaceChild(r,e.firstChild);t=r}else console.warn("Unrecognized value. Skipped inserting",r)}return t}function de(e,r,t,o){let s=!1;for(let i=0,c=r.length;i<c;i++){let n=r[i],_=t&&t[i],m;if(!(n==null||n===!0||n===!1))if((m=typeof n)=="object"&&n.nodeType)e.push(n);else if(Array.isArray(n))s=de(e,n,_)||s;else if(m==="function")if(o){for(;typeof n=="function";)n=n();s=de(e,Array.isArray(n)?n:[n],Array.isArray(_)?_:[_])||s}else e.push(n),s=!0;else{const A=String(n);_&&_.nodeType===3&&_.data===A?e.push(_):e.push(document.createTextNode(A))}}return s}function Me(e,r,t=null){for(let o=0,s=r.length;o<s;o++)e.insertBefore(r[o],t)}function M(e,r,t,o){if(t===void 0)return e.textContent="";const s=o||document.createTextNode("");if(r.length){let i=!1;for(let c=r.length-1;c>=0;c--){const n=r[c];if(s!==n){const _=n.parentNode===e;!i&&!c?_?e.replaceChild(s,n):e.insertBefore(s,t):_&&n.remove()}else i=!0}}else e.insertBefore(s,t);return[s]}const bt="_container_14umt_1",mt={container:bt},yt="_gallery_1k2da_1",Rt="_canvas_container_1k2da_9",wt="_canvas_1k2da_9",ge={gallery:yt,canvas_container:Rt,canvas:wt},Tt=w("<div><canvas>"),$t=w("<div>");function z({id:e}){return(()=>{const r=Tt(),t=r.firstChild;return At(t,"id",e),T(o=>{const s=ge.canvas_container,i=ge.canvas;return s!==o._v$&&U(r,o._v$=s),i!==o._v$2&&U(t,o._v$2=i),o},{_v$:void 0,_v$2:void 0}),r})()}function Ct(){const[e,r]=Oe(!1);return window.addEventListener("resize",()=>{r(window.innerWidth<=640)}),Xe(()=>{console.log(window.innerWidth),r(window.innerWidth<=640)}),(()=>{const t=$t();return K(t,y(Ge,{get when(){return!e()},get fallback(){return y(z,{id:"chakana1"})},get children(){return[y(z,{id:"chakana1"}),y(z,{id:"chakana2"}),y(z,{id:"chakana3"})]}})),T(()=>U(t,ge.gallery)),t})()}const St="_weigth_15un7_15",Ue={weigth:St},Ft=w("<p>Dale click a la imagen y, sosteniendo el click, mueve el mouse"),Bt=w("<p>Click on the image and, holding the click, move the mouse"),Lt=w("<p>Cliquez sur l'image et, en le laissant appuyé, déplacez la souris"),Mt=w("<p>This website is 51Ko"),Ut=w("<div>"),Pt=w("<p>Touch the image");function Dt(){const[e,r]=Oe(!1);return window.addEventListener("resize",()=>{r(window.innerWidth<=640)}),Xe(()=>{console.log(window.innerWidth),r(window.innerWidth<=640)}),(()=>{const t=Ut();return K(t,y(Ge,{get when(){return!e()},get fallback(){return Pt()},get children(){return[Ft(),Bt(),Lt(),(()=>{const o=Mt();return T(()=>U(o,Ue.weigth)),o})()]}})),T(()=>U(t,Ue.container)),t})()}const It=w("<div>");function Yt(){return(()=>{const e=It();return K(e,y(Ct,{}),null),K(e,y(Dt,{}),null),T(()=>U(e,mt.container)),e})()}const Nt=document.getElementById("root");_t(()=>y(Yt,{}),Nt);const be=`
    attribute vec3 coordinates;
    
    uniform mat4 Pmatrix;
    uniform mat4 Vmatrix;
    uniform mat4 Mmatrix;

    varying vec2 vTextureCoord;

    void main(void) {
        vTextureCoord = coordinates.xy;
    
        gl_Position = Pmatrix * Vmatrix * Mmatrix * vec4(coordinates, 1.);

    }`,Ot=`
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
    }`,x=document.getElementById("chakana1"),a=x.getContext("experimental-webgl"),Xt=[-1,1,0,-1,-1,0,1,-1,0,1,1,0],je=[3,2,1,3,1,0],Ze=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,Ze);a.bufferData(a.ARRAY_BUFFER,new Float32Array(Xt),a.STATIC_DRAW);a.bindBuffer(a.ARRAY_BUFFER,null);const Ke=a.createBuffer();a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,Ke);a.bufferData(a.ELEMENT_ARRAY_BUFFER,new Uint16Array(je),a.STATIC_DRAW);a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,null);const Ht=be,me=a.createShader(a.VERTEX_SHADER);a.shaderSource(me,Ht);a.compileShader(me);const qt=Ot,ye=a.createShader(a.FRAGMENT_SHADER);a.shaderSource(ye,qt);a.compileShader(ye);const C=a.createProgram();a.attachShader(C,me);a.attachShader(C,ye);a.linkProgram(C);var kt=a.getUniformLocation(C,"Pmatrix"),Vt=a.getUniformLocation(C,"Vmatrix"),Wt=a.getUniformLocation(C,"Mmatrix");a.bindBuffer(a.ARRAY_BUFFER,Ze);var Qe=a.getAttribLocation(C,"coordinates");a.vertexAttribPointer(Qe,3,a.FLOAT,!1,0,0);a.enableVertexAttribArray(Qe);a.useProgram(C);function Gt(e,r,t,o){var s=Math.tan(e*.5*Math.PI/180);return[.5/s,0,0,0,0,.5*r/s,0,0,0,0,-(o+t)/(o-t),-1,0,0,-2*o*t/(o-t),0]}var jt=Gt(22,x.width*.5/x.height,1,100),u=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],xe=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];xe[14]=xe[14]-2.5;var Pe=.95,G=!1,P,D,I=0,Y=0,Zt=function(e){return G=!0,P=e.pageX,D=e.pageY,e.preventDefault(),!1},Kt=function(e){G=!0;let r=e.touches[0];return P=r.pageX,D=r.pageY,e.preventDefault(),!1},Re=function(e){G=!1},Qt=function(e){if(!G)return!1;I=(e.pageX-P)*2*Math.PI/x.width,Y=(e.pageY-D)*2*Math.PI/x.height,ie+=I,ne+=Y,P=e.pageX,D=e.pageY,e.preventDefault()},Jt=function(e){if(!G)return!1;let r=e.touches[0];I=(r.pageX-P)*2*Math.PI/x.width,Y=(r.pageY-D)*2*Math.PI/x.height,ie+=I,ne+=Y,P=r.pageX,D=r.pageY,e.preventDefault()};x.addEventListener("mousedown",Zt,!1);x.addEventListener("mouseup",Re,!1);x.addEventListener("mouseout",Re,!1);x.addEventListener("mousemove",Qt,!1);x.addEventListener("touchstart",Kt,!1);x.addEventListener("touchend",Re,!1);x.addEventListener("touchmove",Jt,!1);function zt(e,r){var t=Math.cos(r),o=Math.sin(r),s=e[1],i=e[5],c=e[9];e[1]=e[1]*t-e[2]*o,e[5]=e[5]*t-e[6]*o,e[9]=e[9]*t-e[10]*o,e[2]=e[2]*t+s*o,e[6]=e[6]*t+i*o,e[10]=e[10]*t+c*o}function er(e,r){var t=Math.cos(r),o=Math.sin(r),s=e[0],i=e[4],c=e[8];e[0]=t*e[0]+o*e[2],e[4]=t*e[4]+o*e[6],e[8]=t*e[8]+o*e[10],e[2]=t*e[2]-o*s,e[6]=t*e[6]-o*i,e[10]=t*e[10]-o*c}var ie=0,ne=0,Je=function(e){G||(I*=Pe,Y*=Pe,ie+=I,ne+=Y),u[0]=1,u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=1,u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=1,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,er(u,ie),zt(u,ne),a.enable(a.DEPTH_TEST),a.clearColor(0,0,0,1),a.clearDepth(1),a.viewport(0,0,x.width,x.height),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT),a.uniformMatrix4fv(kt,!1,jt),a.uniformMatrix4fv(Vt,!1,xe),a.uniformMatrix4fv(Wt,!1,u),a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,Ke),a.drawElements(a.TRIANGLES,je.length,a.UNSIGNED_SHORT,0),window.requestAnimationFrame(Je)};Je();const tr=`
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
    }`,d=document.getElementById("chakana2"),l=d.getContext("experimental-webgl"),rr=[-1,1,0,-1,-1,0,1,-1,0,1,1,0],ze=[3,2,1,3,1,0],et=l.createBuffer();l.bindBuffer(l.ARRAY_BUFFER,et);l.bufferData(l.ARRAY_BUFFER,new Float32Array(rr),l.STATIC_DRAW);l.bindBuffer(l.ARRAY_BUFFER,null);const tt=l.createBuffer();l.bindBuffer(l.ELEMENT_ARRAY_BUFFER,tt);l.bufferData(l.ELEMENT_ARRAY_BUFFER,new Uint16Array(ze),l.STATIC_DRAW);l.bindBuffer(l.ELEMENT_ARRAY_BUFFER,null);const or=be,we=l.createShader(l.VERTEX_SHADER);l.shaderSource(we,or);l.compileShader(we);const sr=tr,Te=l.createShader(l.FRAGMENT_SHADER);l.shaderSource(Te,sr);l.compileShader(Te);const S=l.createProgram();l.attachShader(S,we);l.attachShader(S,Te);l.linkProgram(S);var ir=l.getUniformLocation(S,"Pmatrix"),nr=l.getUniformLocation(S,"Vmatrix"),cr=l.getUniformLocation(S,"Mmatrix");l.bindBuffer(l.ARRAY_BUFFER,et);var rt=l.getAttribLocation(S,"coordinates");l.vertexAttribPointer(rt,3,l.FLOAT,!1,0,0);l.enableVertexAttribArray(rt);l.useProgram(S);function ar(e,r,t,o){var s=Math.tan(e*.5*Math.PI/180);return[.5/s,0,0,0,0,.5*r/s,0,0,0,0,-(o+t)/(o-t),-1,0,0,-2*o*t/(o-t),0]}var lr=ar(22,d.width*.5/d.height,1,100),v=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],Ee=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];Ee[14]=Ee[14]-2.5;var De=.95,j=!1,N,O,X=0,H=0,ot=function(e){return j=!0,N=e.pageX,O=e.pageY,e.preventDefault(),!1},$e=function(e){j=!1},hr=function(e){if(!j)return!1;X=(e.pageX-N)*2*Math.PI/d.width,H=(e.pageY-O)*2*Math.PI/d.height,ce+=X,ae+=H,N=e.pageX,O=e.pageY,e.preventDefault()},fr=function(e){j=!0;let r=e.touches[0];return N=r.pageX,O=r.pageY,e.preventDefault(),!1},ur=function(e){if(!j)return!1;let r=e.touches[0];X=(r.pageX-N)*2*Math.PI/d.width,H=(r.pageY-O)*2*Math.PI/d.height,ce+=X,ae+=H,N=r.pageX,O=r.pageY,e.preventDefault()};d.addEventListener("mouseover",ot,!1);d.addEventListener("mousedown",$e,!1);d.addEventListener("mouseup",ot,!1);d.addEventListener("mouseout",$e,!1);d.addEventListener("mousemove",hr,!1);d.addEventListener("touchstart",fr,!1);d.addEventListener("touchend",$e,!1);d.addEventListener("touchmove",ur,!1);function vr(e,r){var t=Math.cos(r),o=Math.sin(r),s=e[1],i=e[5],c=e[9];e[1]=e[1]*t-e[2]*o,e[5]=e[5]*t-e[6]*o,e[9]=e[9]*t-e[10]*o,e[2]=e[2]*t+s*o,e[6]=e[6]*t+i*o,e[10]=e[10]*t+c*o}function pr(e,r){var t=Math.cos(r),o=Math.sin(r),s=e[0],i=e[4],c=e[8];e[0]=t*e[0]+o*e[2],e[4]=t*e[4]+o*e[6],e[8]=t*e[8]+o*e[10],e[2]=t*e[2]-o*s,e[6]=t*e[6]-o*i,e[10]=t*e[10]-o*c}var ce=0,ae=0,st=function(e){j||(X*=De,H*=De,ce+=X,ae+=H),v[0]=1,v[1]=0,v[2]=0,v[3]=0,v[4]=0,v[5]=1,v[6]=0,v[7]=0,v[8]=0,v[9]=0,v[10]=1,v[11]=0,v[12]=0,v[13]=0,v[14]=0,v[15]=1,pr(v,ce),vr(v,ae),l.enable(l.DEPTH_TEST),l.clearColor(0,0,0,1),l.clearDepth(1),l.viewport(0,0,d.width,d.height),l.clear(l.COLOR_BUFFER_BIT|l.DEPTH_BUFFER_BIT),l.uniformMatrix4fv(ir,!1,lr),l.uniformMatrix4fv(nr,!1,Ee),l.uniformMatrix4fv(cr,!1,v),l.bindBuffer(l.ELEMENT_ARRAY_BUFFER,tt),l.drawElements(l.TRIANGLES,ze.length,l.UNSIGNED_SHORT,0),window.requestAnimationFrame(st)};st();const dr=`
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
    }`,E=document.getElementById("chakana3"),h=E.getContext("experimental-webgl"),gr=[-1,1,0,-1,-1,0,1,-1,0,1,1,0],it=[3,2,1,3,1,0],nt=h.createBuffer();h.bindBuffer(h.ARRAY_BUFFER,nt);h.bufferData(h.ARRAY_BUFFER,new Float32Array(gr),h.STATIC_DRAW);h.bindBuffer(h.ARRAY_BUFFER,null);const ct=h.createBuffer();h.bindBuffer(h.ELEMENT_ARRAY_BUFFER,ct);h.bufferData(h.ELEMENT_ARRAY_BUFFER,new Uint16Array(it),h.STATIC_DRAW);h.bindBuffer(h.ELEMENT_ARRAY_BUFFER,null);const xr=be,Ce=h.createShader(h.VERTEX_SHADER);h.shaderSource(Ce,xr);h.compileShader(Ce);const Er=dr,Se=h.createShader(h.FRAGMENT_SHADER);h.shaderSource(Se,Er);h.compileShader(Se);const F=h.createProgram();h.attachShader(F,Ce);h.attachShader(F,Se);h.linkProgram(F);var _r=h.getUniformLocation(F,"Pmatrix"),Ar=h.getUniformLocation(F,"Vmatrix"),br=h.getUniformLocation(F,"Mmatrix");h.bindBuffer(h.ARRAY_BUFFER,nt);var at=h.getAttribLocation(F,"coordinates");h.vertexAttribPointer(at,3,h.FLOAT,!1,0,0);h.enableVertexAttribArray(at);h.useProgram(F);function mr(e,r,t,o){var s=Math.tan(e*.5*Math.PI/180);return[.5/s,0,0,0,0,.5*r/s,0,0,0,0,-(o+t)/(o-t),-1,0,0,-2*o*t/(o-t),0]}var yr=mr(22,E.width*.5/E.height,1,100),p=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],_e=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];_e[14]=_e[14]-2.5;var Ie=.95,Z=!1,q,k,V=0,W=0,Rr=function(e){return Z=!0,q=e.pageX,k=e.pageY,e.preventDefault(),!1},Fe=function(e){Z=!1},wr=function(e){if(!Z)return!1;V=(e.pageX-q)*2*Math.PI/E.width,W=(e.pageY-k)*2*Math.PI/E.height,le+=V,he+=W,q=e.pageX,k=e.pageY,e.preventDefault()},Tr=function(e){Z=!0;let r=e.touches[0];return q=r.pageX,k=r.pageY,e.preventDefault(),!1},$r=function(e){if(!Z)return!1;let r=e.touches[0];V=(r.pageX-q)*2*Math.PI/E.width,W=(r.pageY-k)*2*Math.PI/E.height,le+=V,he+=W,q=r.pageX,k=r.pageY,e.preventDefault()};E.addEventListener("mousedown",Rr,!1);E.addEventListener("mouseup",Fe,!1);E.addEventListener("mouseout",Fe,!1);E.addEventListener("mousemove",wr,!1);E.addEventListener("touchstart",Tr,!1);E.addEventListener("touchend",Fe,!1);E.addEventListener("touchmove",$r,!1);function Cr(e,r){var t=Math.cos(r),o=Math.sin(r),s=e[1],i=e[5],c=e[9];e[1]=e[1]*t-e[2]*o,e[5]=e[5]*t-e[6]*o,e[9]=e[9]*t-e[10]*o,e[2]=e[2]*t+s*o,e[6]=e[6]*t+i*o,e[10]=e[10]*t+c*o}function Sr(e,r){var t=Math.cos(r),o=Math.sin(r),s=e[0],i=e[4],c=e[8];e[0]=t*e[0]+o*e[2],e[4]=t*e[4]+o*e[6],e[8]=t*e[8]+o*e[10],e[2]=t*e[2]-o*s,e[6]=t*e[6]-o*i,e[10]=t*e[10]-o*c}var le=0,he=0,lt=function(e){Z||(V*=Ie,W*=Ie,le+=V,he+=W),p[0]=1,p[1]=0,p[2]=0,p[3]=0,p[4]=0,p[5]=1,p[6]=0,p[7]=0,p[8]=0,p[9]=0,p[10]=1,p[11]=0,p[12]=0,p[13]=0,p[14]=0,p[15]=1,Sr(p,le),Cr(p,he),h.enable(h.DEPTH_TEST),h.clearColor(0,0,0,1),h.clearDepth(1),h.viewport(0,0,E.width,E.height),h.clear(h.COLOR_BUFFER_BIT|h.DEPTH_BUFFER_BIT),h.uniformMatrix4fv(_r,!1,yr),h.uniformMatrix4fv(Ar,!1,_e),h.uniformMatrix4fv(br,!1,p),h.bindBuffer(h.ELEMENT_ARRAY_BUFFER,ct),h.drawElements(h.TRIANGLES,it.length,h.UNSIGNED_SHORT,0),window.requestAnimationFrame(lt)};lt();
