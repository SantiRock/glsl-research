(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(o){if(o.ep)return;o.ep=!0;const i=t(o);fetch(o.href,i)}})();const lt=(e,r)=>e===r,z={equals:lt};let ht=qe;const B=1,ee=2,De={owned:null,cleanups:null,context:null,owner:null};var b=null;let ve=null,f=null,g=null,F=null,le=0;function ft(e,r){const t=f,s=b,o=e.length===0,i=o?De:{owned:null,cleanups:null,context:null,owner:r===void 0?s:r},c=o?e:()=>e(()=>M(()=>fe(i)));b=i,f=null;try{return Q(c,!0)}finally{f=t,b=s}}function Ie(e,r){r=r?Object.assign({},z,r):z;const t={value:e,observers:null,observerSlots:null,comparator:r.equals||void 0},s=o=>(typeof o=="function"&&(o=o(t.value)),Ne(t,o));return[Ye.bind(t),s]}function w(e,r,t){const s=Oe(e,r,!1,B);he(s)}function Fe(e,r,t){t=t?Object.assign({},z,t):z;const s=Oe(e,r,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=t.equals||void 0,he(s),Ye.bind(s)}function M(e){if(f===null)return e();const r=f;f=null;try{return e()}finally{f=r}}function Ye(){if(this.sources&&this.state)if(this.state===B)he(this);else{const e=g;g=null,Q(()=>te(this),!1),g=e}if(f){const e=this.observers?this.observers.length:0;f.sources?(f.sources.push(this),f.sourceSlots.push(e)):(f.sources=[this],f.sourceSlots=[e]),this.observers?(this.observers.push(f),this.observerSlots.push(f.sources.length-1)):(this.observers=[f],this.observerSlots=[f.sources.length-1])}return this.value}function Ne(e,r,t){let s=e.value;return(!e.comparator||!e.comparator(s,r))&&(e.value=r,e.observers&&e.observers.length&&Q(()=>{for(let o=0;o<e.observers.length;o+=1){const i=e.observers[o],c=ve&&ve.running;c&&ve.disposed.has(i),(c?!i.tState:!i.state)&&(i.pure?g.push(i):F.push(i),i.observers&&He(i)),c||(i.state=B)}if(g.length>1e6)throw g=[],new Error},!1)),r}function he(e){if(!e.fn)return;fe(e);const r=b,t=f,s=le;f=b=e,ut(e,e.value,s),f=t,b=r}function ut(e,r,t){let s;try{s=e.fn(r)}catch(o){return e.pure&&(e.state=B,e.owned&&e.owned.forEach(fe),e.owned=null),e.updatedAt=t+1,ke(o)}(!e.updatedAt||e.updatedAt<=t)&&(e.updatedAt!=null&&"observers"in e?Ne(e,s):e.value=s,e.updatedAt=t)}function Oe(e,r,t,s=B,o){const i={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:r,owner:b,context:null,pure:t};return b===null||b!==De&&(b.owned?b.owned.push(i):b.owned=[i]),i}function Xe(e){if(e.state===0)return;if(e.state===ee)return te(e);if(e.suspense&&M(e.suspense.inFallback))return e.suspense.effects.push(e);const r=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<le);)e.state&&r.push(e);for(let t=r.length-1;t>=0;t--)if(e=r[t],e.state===B)he(e);else if(e.state===ee){const s=g;g=null,Q(()=>te(e,r[0]),!1),g=s}}function Q(e,r){if(g)return e();let t=!1;r||(g=[]),F?t=!0:F=[],le++;try{const s=e();return vt(t),s}catch(s){t||(F=null),g=null,ke(s)}}function vt(e){if(g&&(qe(g),g=null),e)return;const r=F;F=null,r.length&&Q(()=>ht(r),!1)}function qe(e){for(let r=0;r<e.length;r++)Xe(e[r])}function te(e,r){e.state=0;for(let t=0;t<e.sources.length;t+=1){const s=e.sources[t];if(s.sources){const o=s.state;o===B?s!==r&&(!s.updatedAt||s.updatedAt<le)&&Xe(s):o===ee&&te(s,r)}}}function He(e){for(let r=0;r<e.observers.length;r+=1){const t=e.observers[r];t.state||(t.state=ee,t.pure?g.push(t):F.push(t),t.observers&&He(t))}}function fe(e){let r;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),s=e.sourceSlots.pop(),o=t.observers;if(o&&o.length){const i=o.pop(),c=t.observerSlots.pop();s<o.length&&(i.sourceSlots[c]=s,o[s]=i,t.observerSlots[s]=c)}}if(e.owned){for(r=e.owned.length-1;r>=0;r--)fe(e.owned[r]);e.owned=null}if(e.cleanups){for(r=e.cleanups.length-1;r>=0;r--)e.cleanups[r]();e.cleanups=null}e.state=0,e.context=null}function ke(e){throw e}function y(e,r){return M(()=>e(r||{}))}const pt=e=>`Stale read from <${e}>.`;function Ve(e){const r=e.keyed,t=Fe(()=>e.when,void 0,{equals:(s,o)=>r?s===o:!s==!o});return Fe(()=>{const s=t();if(s){const o=e.children;return typeof o=="function"&&o.length>0?M(()=>o(r?s:()=>{if(!M(t))throw pt("Show");return e.when})):o}return e.fallback},void 0,void 0)}function dt(e,r,t){let s=t.length,o=r.length,i=s,c=0,n=0,_=r[o-1].nextSibling,m=null;for(;c<o||n<i;){if(r[c]===t[n]){c++,n++;continue}for(;r[o-1]===t[i-1];)o--,i--;if(o===c){const A=i<s?n?t[n-1].nextSibling:t[i-n]:_;for(;n<i;)e.insertBefore(t[n++],A)}else if(i===n)for(;c<o;)(!m||!m.has(r[c]))&&r[c].remove(),c++;else if(r[c]===t[i-1]&&t[n]===r[o-1]){const A=r[--o].nextSibling;e.insertBefore(t[n++],r[c++].nextSibling),e.insertBefore(t[--i],A),r[o]=t[i]}else{if(!m){m=new Map;let S=n;for(;S<i;)m.set(t[S],S++)}const A=m.get(r[c]);if(A!=null)if(n<A&&A<i){let S=c,ue=1,Se;for(;++S<o&&S<i&&!((Se=m.get(r[S]))==null||Se!==A+ue);)ue++;if(ue>A-n){const at=r[c];for(;n<A;)e.insertBefore(t[n++],at)}else e.replaceChild(t[n++],r[c++])}else c++;else r[c++].remove()}}}function gt(e,r,t,s={}){let o;return ft(i=>{o=i,r===document?e():K(r,e(),r.firstChild?null:void 0,t)},s.owner),()=>{o(),r.textContent=""}}function R(e,r,t){let s;const o=()=>{const c=document.createElement("template");return c.innerHTML=e,t?c.content.firstChild.firstChild:c.content.firstChild},i=r?()=>M(()=>document.importNode(s||(s=o()),!0)):()=>(s||(s=o())).cloneNode(!0);return i.cloneNode=i,i}function xt(e,r,t){t==null?e.removeAttribute(r):e.setAttribute(r,t)}function P(e,r){r==null?e.removeAttribute("class"):e.className=r}function K(e,r,t,s){if(t!==void 0&&!s&&(s=[]),typeof r!="function")return re(e,r,s,t);w(o=>re(e,r(),o,t),s)}function re(e,r,t,s,o){for(;typeof t=="function";)t=t();if(r===t)return t;const i=typeof r,c=s!==void 0;if(e=c&&t[0]&&t[0].parentNode||e,i==="string"||i==="number")if(i==="number"&&(r=r.toString()),c){let n=t[0];n&&n.nodeType===3?n.data=r:n=document.createTextNode(r),t=L(e,t,s,n)}else t!==""&&typeof t=="string"?t=e.firstChild.data=r:t=e.textContent=r;else if(r==null||i==="boolean")t=L(e,t,s);else{if(i==="function")return w(()=>{let n=r();for(;typeof n=="function";)n=n();t=re(e,n,t,s)}),()=>t;if(Array.isArray(r)){const n=[],_=t&&Array.isArray(t);if(pe(n,r,t,o))return w(()=>t=re(e,n,t,s,!0)),()=>t;if(n.length===0){if(t=L(e,t,s),c)return t}else _?t.length===0?Be(e,n,s):dt(e,t,n):(t&&L(e),Be(e,n));t=n}else if(r.nodeType){if(Array.isArray(t)){if(c)return t=L(e,t,s,r);L(e,t,null,r)}else t==null||t===""||!e.firstChild?e.appendChild(r):e.replaceChild(r,e.firstChild);t=r}else console.warn("Unrecognized value. Skipped inserting",r)}return t}function pe(e,r,t,s){let o=!1;for(let i=0,c=r.length;i<c;i++){let n=r[i],_=t&&t[i],m;if(!(n==null||n===!0||n===!1))if((m=typeof n)=="object"&&n.nodeType)e.push(n);else if(Array.isArray(n))o=pe(e,n,_)||o;else if(m==="function")if(s){for(;typeof n=="function";)n=n();o=pe(e,Array.isArray(n)?n:[n],Array.isArray(_)?_:[_])||o}else e.push(n),o=!0;else{const A=String(n);_&&_.nodeType===3&&_.data===A?e.push(_):e.push(document.createTextNode(A))}}return o}function Be(e,r,t=null){for(let s=0,o=r.length;s<o;s++)e.insertBefore(r[s],t)}function L(e,r,t,s){if(t===void 0)return e.textContent="";const o=s||document.createTextNode("");if(r.length){let i=!1;for(let c=r.length-1;c>=0;c--){const n=r[c];if(o!==n){const _=n.parentNode===e;!i&&!c?_?e.replaceChild(o,n):e.insertBefore(o,t):_&&n.remove()}else i=!0}}else e.insertBefore(o,t);return[o]}const Et="_container_14umt_1",_t={container:Et},At="_gallery_1k2da_1",bt="_canvas_container_1k2da_9",mt="_canvas_1k2da_9",de={gallery:At,canvas_container:bt,canvas:mt},yt=R("<div><canvas>"),Rt=R("<div>");function J({id:e}){return(()=>{const r=yt(),t=r.firstChild;return xt(t,"id",e),w(s=>{const o=de.canvas_container,i=de.canvas;return o!==s._v$&&P(r,s._v$=o),i!==s._v$2&&P(t,s._v$2=i),s},{_v$:void 0,_v$2:void 0}),r})()}function wt(){const[e,r]=Ie(window.innerWidth<=640);return window.addEventListener("resize",()=>{r(window.innerWidth<=640)}),(()=>{const t=Rt();return K(t,y(Ve,{get when(){return!e()},get fallback(){return y(J,{id:"chakana1"})},get children(){return[y(J,{id:"chakana1"}),y(J,{id:"chakana2"}),y(J,{id:"chakana3"})]}})),w(()=>P(t,de.gallery)),t})()}const Tt="_weigth_15un7_15",Le={weigth:Tt},$t=R("<p>Dale click a la imagen y, sosteniendo el click, mueve el mouse"),Ct=R("<p>Click on the image and, holding the click, move the mouse"),St=R("<p>Cliquez sur l'image et, en le laissant appuyé, déplacez la souris"),Ft=R("<p>This website is 51Ko"),Bt=R("<div>"),Lt=R("<p>Touch the image");function Mt(){const[e,r]=Ie(window.innerWidth<=640);return window.addEventListener("resize",()=>{r(window.innerWidth<=640)}),(()=>{const t=Bt();return K(t,y(Ve,{get when(){return!e()},get fallback(){return Lt()},get children(){return[$t(),Ct(),St(),(()=>{const s=Ft();return w(()=>P(s,Le.weigth)),s})()]}})),w(()=>P(t,Le.container)),t})()}const Pt=R("<div>");function Ut(){return(()=>{const e=Pt();return K(e,y(wt,{}),null),K(e,y(Mt,{}),null),w(()=>P(e,_t.container)),e})()}const Dt=document.getElementById("root");gt(()=>y(Ut,{}),Dt);const _e=`
    attribute vec3 coordinates;
    
    uniform mat4 Pmatrix;
    uniform mat4 Vmatrix;
    uniform mat4 Mmatrix;

    varying vec2 vTextureCoord;

    void main(void) {
        vTextureCoord = coordinates.xy;
    
        gl_Position = Pmatrix * Vmatrix * Mmatrix * vec4(coordinates, 1.);

    }`,It=`
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
    }`,x=document.getElementById("chakana1"),a=x.getContext("experimental-webgl"),Yt=[-1,1,0,-1,-1,0,1,-1,0,1,1,0],Ge=[3,2,1,3,1,0],We=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,We);a.bufferData(a.ARRAY_BUFFER,new Float32Array(Yt),a.STATIC_DRAW);a.bindBuffer(a.ARRAY_BUFFER,null);const je=a.createBuffer();a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,je);a.bufferData(a.ELEMENT_ARRAY_BUFFER,new Uint16Array(Ge),a.STATIC_DRAW);a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,null);const Nt=_e,Ae=a.createShader(a.VERTEX_SHADER);a.shaderSource(Ae,Nt);a.compileShader(Ae);const Ot=It,be=a.createShader(a.FRAGMENT_SHADER);a.shaderSource(be,Ot);a.compileShader(be);const T=a.createProgram();a.attachShader(T,Ae);a.attachShader(T,be);a.linkProgram(T);var Xt=a.getUniformLocation(T,"Pmatrix"),qt=a.getUniformLocation(T,"Vmatrix"),Ht=a.getUniformLocation(T,"Mmatrix");a.bindBuffer(a.ARRAY_BUFFER,We);var Ze=a.getAttribLocation(T,"coordinates");a.vertexAttribPointer(Ze,3,a.FLOAT,!1,0,0);a.enableVertexAttribArray(Ze);a.useProgram(T);function kt(e,r,t,s){var o=Math.tan(e*.5*Math.PI/180);return[.5/o,0,0,0,0,.5*r/o,0,0,0,0,-(s+t)/(s-t),-1,0,0,-2*s*t/(s-t),0]}var Vt=kt(22,x.width*.5/x.height,1,100),u=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],ge=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];ge[14]=ge[14]-2.5;var Me=.95,W=!1,U,D,I=0,Y=0,Gt=function(e){return W=!0,U=e.pageX,D=e.pageY,e.preventDefault(),!1},Wt=function(e){W=!0;let r=e.touches[0];return U=r.pageX,D=r.pageY,e.preventDefault(),!1},me=function(e){W=!1},jt=function(e){if(!W)return!1;I=(e.pageX-U)*2*Math.PI/x.width,Y=(e.pageY-D)*2*Math.PI/x.height,se+=I,oe+=Y,U=e.pageX,D=e.pageY,e.preventDefault()},Zt=function(e){if(!W)return!1;let r=e.touches[0];I=(r.pageX-U)*2*Math.PI/x.width,Y=(r.pageY-D)*2*Math.PI/x.height,se+=I,oe+=Y,U=r.pageX,D=r.pageY,e.preventDefault()};x.addEventListener("mousedown",Gt,!1);x.addEventListener("mouseup",me,!1);x.addEventListener("mouseout",me,!1);x.addEventListener("mousemove",jt,!1);x.addEventListener("touchstart",Wt,!1);x.addEventListener("touchend",me,!1);x.addEventListener("touchmove",Zt,!1);function Kt(e,r){var t=Math.cos(r),s=Math.sin(r),o=e[1],i=e[5],c=e[9];e[1]=e[1]*t-e[2]*s,e[5]=e[5]*t-e[6]*s,e[9]=e[9]*t-e[10]*s,e[2]=e[2]*t+o*s,e[6]=e[6]*t+i*s,e[10]=e[10]*t+c*s}function Qt(e,r){var t=Math.cos(r),s=Math.sin(r),o=e[0],i=e[4],c=e[8];e[0]=t*e[0]+s*e[2],e[4]=t*e[4]+s*e[6],e[8]=t*e[8]+s*e[10],e[2]=t*e[2]-s*o,e[6]=t*e[6]-s*i,e[10]=t*e[10]-s*c}var se=0,oe=0,Ke=function(e){W||(I*=Me,Y*=Me,se+=I,oe+=Y),u[0]=1,u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=1,u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=1,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,Qt(u,se),Kt(u,oe),a.enable(a.DEPTH_TEST),a.clearColor(0,0,0,1),a.clearDepth(1),a.viewport(0,0,x.width,x.height),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT),a.uniformMatrix4fv(Xt,!1,Vt),a.uniformMatrix4fv(qt,!1,ge),a.uniformMatrix4fv(Ht,!1,u),a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,je),a.drawElements(a.TRIANGLES,Ge.length,a.UNSIGNED_SHORT,0),window.requestAnimationFrame(Ke)};Ke();const Jt=`
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
    }`,d=document.getElementById("chakana2"),l=d.getContext("experimental-webgl"),zt=[-1,1,0,-1,-1,0,1,-1,0,1,1,0],Qe=[3,2,1,3,1,0],Je=l.createBuffer();l.bindBuffer(l.ARRAY_BUFFER,Je);l.bufferData(l.ARRAY_BUFFER,new Float32Array(zt),l.STATIC_DRAW);l.bindBuffer(l.ARRAY_BUFFER,null);const ze=l.createBuffer();l.bindBuffer(l.ELEMENT_ARRAY_BUFFER,ze);l.bufferData(l.ELEMENT_ARRAY_BUFFER,new Uint16Array(Qe),l.STATIC_DRAW);l.bindBuffer(l.ELEMENT_ARRAY_BUFFER,null);const er=_e,ye=l.createShader(l.VERTEX_SHADER);l.shaderSource(ye,er);l.compileShader(ye);const tr=Jt,Re=l.createShader(l.FRAGMENT_SHADER);l.shaderSource(Re,tr);l.compileShader(Re);const $=l.createProgram();l.attachShader($,ye);l.attachShader($,Re);l.linkProgram($);var rr=l.getUniformLocation($,"Pmatrix"),sr=l.getUniformLocation($,"Vmatrix"),or=l.getUniformLocation($,"Mmatrix");l.bindBuffer(l.ARRAY_BUFFER,Je);var et=l.getAttribLocation($,"coordinates");l.vertexAttribPointer(et,3,l.FLOAT,!1,0,0);l.enableVertexAttribArray(et);l.useProgram($);function ir(e,r,t,s){var o=Math.tan(e*.5*Math.PI/180);return[.5/o,0,0,0,0,.5*r/o,0,0,0,0,-(s+t)/(s-t),-1,0,0,-2*s*t/(s-t),0]}var nr=ir(22,d.width*.5/d.height,1,100),v=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],xe=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];xe[14]=xe[14]-2.5;var Pe=.95,j=!1,N,O,X=0,q=0,tt=function(e){return j=!0,N=e.pageX,O=e.pageY,e.preventDefault(),!1},we=function(e){j=!1},cr=function(e){if(!j)return!1;X=(e.pageX-N)*2*Math.PI/d.width,q=(e.pageY-O)*2*Math.PI/d.height,ie+=X,ne+=q,N=e.pageX,O=e.pageY,e.preventDefault()},ar=function(e){j=!0;let r=e.touches[0];return N=r.pageX,O=r.pageY,e.preventDefault(),!1},lr=function(e){if(!j)return!1;let r=e.touches[0];X=(r.pageX-N)*2*Math.PI/d.width,q=(r.pageY-O)*2*Math.PI/d.height,ie+=X,ne+=q,N=r.pageX,O=r.pageY,e.preventDefault()};d.addEventListener("mouseover",tt,!1);d.addEventListener("mousedown",we,!1);d.addEventListener("mouseup",tt,!1);d.addEventListener("mouseout",we,!1);d.addEventListener("mousemove",cr,!1);d.addEventListener("touchstart",ar,!1);d.addEventListener("touchend",we,!1);d.addEventListener("touchmove",lr,!1);function hr(e,r){var t=Math.cos(r),s=Math.sin(r),o=e[1],i=e[5],c=e[9];e[1]=e[1]*t-e[2]*s,e[5]=e[5]*t-e[6]*s,e[9]=e[9]*t-e[10]*s,e[2]=e[2]*t+o*s,e[6]=e[6]*t+i*s,e[10]=e[10]*t+c*s}function fr(e,r){var t=Math.cos(r),s=Math.sin(r),o=e[0],i=e[4],c=e[8];e[0]=t*e[0]+s*e[2],e[4]=t*e[4]+s*e[6],e[8]=t*e[8]+s*e[10],e[2]=t*e[2]-s*o,e[6]=t*e[6]-s*i,e[10]=t*e[10]-s*c}var ie=0,ne=0,rt=function(e){j||(X*=Pe,q*=Pe,ie+=X,ne+=q),v[0]=1,v[1]=0,v[2]=0,v[3]=0,v[4]=0,v[5]=1,v[6]=0,v[7]=0,v[8]=0,v[9]=0,v[10]=1,v[11]=0,v[12]=0,v[13]=0,v[14]=0,v[15]=1,fr(v,ie),hr(v,ne),l.enable(l.DEPTH_TEST),l.clearColor(0,0,0,1),l.clearDepth(1),l.viewport(0,0,d.width,d.height),l.clear(l.COLOR_BUFFER_BIT|l.DEPTH_BUFFER_BIT),l.uniformMatrix4fv(rr,!1,nr),l.uniformMatrix4fv(sr,!1,xe),l.uniformMatrix4fv(or,!1,v),l.bindBuffer(l.ELEMENT_ARRAY_BUFFER,ze),l.drawElements(l.TRIANGLES,Qe.length,l.UNSIGNED_SHORT,0),window.requestAnimationFrame(rt)};rt();const ur=`
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
    }`,E=document.getElementById("chakana3"),h=E.getContext("experimental-webgl"),vr=[-1,1,0,-1,-1,0,1,-1,0,1,1,0],st=[3,2,1,3,1,0],ot=h.createBuffer();h.bindBuffer(h.ARRAY_BUFFER,ot);h.bufferData(h.ARRAY_BUFFER,new Float32Array(vr),h.STATIC_DRAW);h.bindBuffer(h.ARRAY_BUFFER,null);const it=h.createBuffer();h.bindBuffer(h.ELEMENT_ARRAY_BUFFER,it);h.bufferData(h.ELEMENT_ARRAY_BUFFER,new Uint16Array(st),h.STATIC_DRAW);h.bindBuffer(h.ELEMENT_ARRAY_BUFFER,null);const pr=_e,Te=h.createShader(h.VERTEX_SHADER);h.shaderSource(Te,pr);h.compileShader(Te);const dr=ur,$e=h.createShader(h.FRAGMENT_SHADER);h.shaderSource($e,dr);h.compileShader($e);const C=h.createProgram();h.attachShader(C,Te);h.attachShader(C,$e);h.linkProgram(C);var gr=h.getUniformLocation(C,"Pmatrix"),xr=h.getUniformLocation(C,"Vmatrix"),Er=h.getUniformLocation(C,"Mmatrix");h.bindBuffer(h.ARRAY_BUFFER,ot);var nt=h.getAttribLocation(C,"coordinates");h.vertexAttribPointer(nt,3,h.FLOAT,!1,0,0);h.enableVertexAttribArray(nt);h.useProgram(C);function _r(e,r,t,s){var o=Math.tan(e*.5*Math.PI/180);return[.5/o,0,0,0,0,.5*r/o,0,0,0,0,-(s+t)/(s-t),-1,0,0,-2*s*t/(s-t),0]}var Ar=_r(22,E.width*.5/E.height,1,100),p=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],Ee=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];Ee[14]=Ee[14]-2.5;var Ue=.95,Z=!1,H,k,V=0,G=0,br=function(e){return Z=!0,H=e.pageX,k=e.pageY,e.preventDefault(),!1},Ce=function(e){Z=!1},mr=function(e){if(!Z)return!1;V=(e.pageX-H)*2*Math.PI/E.width,G=(e.pageY-k)*2*Math.PI/E.height,ce+=V,ae+=G,H=e.pageX,k=e.pageY,e.preventDefault()},yr=function(e){Z=!0;let r=e.touches[0];return H=r.pageX,k=r.pageY,e.preventDefault(),!1},Rr=function(e){if(!Z)return!1;let r=e.touches[0];V=(r.pageX-H)*2*Math.PI/E.width,G=(r.pageY-k)*2*Math.PI/E.height,ce+=V,ae+=G,H=r.pageX,k=r.pageY,e.preventDefault()};E.addEventListener("mousedown",br,!1);E.addEventListener("mouseup",Ce,!1);E.addEventListener("mouseout",Ce,!1);E.addEventListener("mousemove",mr,!1);E.addEventListener("touchstart",yr,!1);E.addEventListener("touchend",Ce,!1);E.addEventListener("touchmove",Rr,!1);function wr(e,r){var t=Math.cos(r),s=Math.sin(r),o=e[1],i=e[5],c=e[9];e[1]=e[1]*t-e[2]*s,e[5]=e[5]*t-e[6]*s,e[9]=e[9]*t-e[10]*s,e[2]=e[2]*t+o*s,e[6]=e[6]*t+i*s,e[10]=e[10]*t+c*s}function Tr(e,r){var t=Math.cos(r),s=Math.sin(r),o=e[0],i=e[4],c=e[8];e[0]=t*e[0]+s*e[2],e[4]=t*e[4]+s*e[6],e[8]=t*e[8]+s*e[10],e[2]=t*e[2]-s*o,e[6]=t*e[6]-s*i,e[10]=t*e[10]-s*c}var ce=0,ae=0,ct=function(e){Z||(V*=Ue,G*=Ue,ce+=V,ae+=G),p[0]=1,p[1]=0,p[2]=0,p[3]=0,p[4]=0,p[5]=1,p[6]=0,p[7]=0,p[8]=0,p[9]=0,p[10]=1,p[11]=0,p[12]=0,p[13]=0,p[14]=0,p[15]=1,Tr(p,ce),wr(p,ae),h.enable(h.DEPTH_TEST),h.clearColor(0,0,0,1),h.clearDepth(1),h.viewport(0,0,E.width,E.height),h.clear(h.COLOR_BUFFER_BIT|h.DEPTH_BUFFER_BIT),h.uniformMatrix4fv(gr,!1,Ar),h.uniformMatrix4fv(xr,!1,Ee),h.uniformMatrix4fv(Er,!1,p),h.bindBuffer(h.ELEMENT_ARRAY_BUFFER,it),h.drawElements(h.TRIANGLES,st.length,h.UNSIGNED_SHORT,0),window.requestAnimationFrame(ct)};ct();
