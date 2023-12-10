(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(o){if(o.ep)return;o.ep=!0;const i=t(o);fetch(o.href,i)}})();const at=(e,r)=>e===r,J={equals:at};let Ye=He;const w=1,z=2,Ne={owned:null,cleanups:null,context:null,owner:null};var b=null;let pe=null,f=null,g=null,y=null,he=0;function lt(e,r){const t=f,s=b,o=e.length===0,i=o?Ne:{owned:null,cleanups:null,context:null,owner:r===void 0?s:r},c=o?e:()=>e(()=>B(()=>fe(i)));b=i,f=null;try{return K(c,!0)}finally{f=t,b=s}}function ht(e,r){r=r?Object.assign({},J,r):J;const t={value:e,observers:null,observerSlots:null,comparator:r.equals||void 0},s=o=>(typeof o=="function"&&(o=o(t.value)),Xe(t,o));return[Oe.bind(t),s]}function F(e,r,t){const s=Ae(e,r,!1,w);Z(s)}function ft(e,r,t){Ye=dt;const s=Ae(e,r,!1,w);(!t||!t.render)&&(s.user=!0),y?y.push(s):Z(s)}function Le(e,r,t){t=t?Object.assign({},J,t):J;const s=Ae(e,r,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=t.equals||void 0,Z(s),Oe.bind(s)}function B(e){if(f===null)return e();const r=f;f=null;try{return e()}finally{f=r}}function ut(e){ft(()=>B(e))}function Oe(){if(this.sources&&this.state)if(this.state===w)Z(this);else{const e=g;g=null,K(()=>te(this),!1),g=e}if(f){const e=this.observers?this.observers.length:0;f.sources?(f.sources.push(this),f.sourceSlots.push(e)):(f.sources=[this],f.sourceSlots=[e]),this.observers?(this.observers.push(f),this.observerSlots.push(f.sources.length-1)):(this.observers=[f],this.observerSlots=[f.sources.length-1])}return this.value}function Xe(e,r,t){let s=e.value;return(!e.comparator||!e.comparator(s,r))&&(e.value=r,e.observers&&e.observers.length&&K(()=>{for(let o=0;o<e.observers.length;o+=1){const i=e.observers[o],c=pe&&pe.running;c&&pe.disposed.has(i),(c?!i.tState:!i.state)&&(i.pure?g.push(i):y.push(i),i.observers&&qe(i)),c||(i.state=w)}if(g.length>1e6)throw g=[],new Error},!1)),r}function Z(e){if(!e.fn)return;fe(e);const r=b,t=f,s=he;f=b=e,vt(e,e.value,s),f=t,b=r}function vt(e,r,t){let s;try{s=e.fn(r)}catch(o){return e.pure&&(e.state=w,e.owned&&e.owned.forEach(fe),e.owned=null),e.updatedAt=t+1,Ve(o)}(!e.updatedAt||e.updatedAt<=t)&&(e.updatedAt!=null&&"observers"in e?Xe(e,s):e.value=s,e.updatedAt=t)}function Ae(e,r,t,s=w,o){const i={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:r,owner:b,context:null,pure:t};return b===null||b!==Ne&&(b.owned?b.owned.push(i):b.owned=[i]),i}function ee(e){if(e.state===0)return;if(e.state===z)return te(e);if(e.suspense&&B(e.suspense.inFallback))return e.suspense.effects.push(e);const r=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<he);)e.state&&r.push(e);for(let t=r.length-1;t>=0;t--)if(e=r[t],e.state===w)Z(e);else if(e.state===z){const s=g;g=null,K(()=>te(e,r[0]),!1),g=s}}function K(e,r){if(g)return e();let t=!1;r||(g=[]),y?t=!0:y=[],he++;try{const s=e();return pt(t),s}catch(s){t||(y=null),g=null,Ve(s)}}function pt(e){if(g&&(He(g),g=null),e)return;const r=y;y=null,r.length&&K(()=>Ye(r),!1)}function He(e){for(let r=0;r<e.length;r++)ee(e[r])}function dt(e){let r,t=0;for(r=0;r<e.length;r++){const s=e[r];s.user?e[t++]=s:ee(s)}for(r=0;r<t;r++)ee(e[r])}function te(e,r){e.state=0;for(let t=0;t<e.sources.length;t+=1){const s=e.sources[t];if(s.sources){const o=s.state;o===w?s!==r&&(!s.updatedAt||s.updatedAt<he)&&ee(s):o===z&&te(s,r)}}}function qe(e){for(let r=0;r<e.observers.length;r+=1){const t=e.observers[r];t.state||(t.state=z,t.pure?g.push(t):y.push(t),t.observers&&qe(t))}}function fe(e){let r;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),s=e.sourceSlots.pop(),o=t.observers;if(o&&o.length){const i=o.pop(),c=t.observerSlots.pop();s<o.length&&(i.sourceSlots[c]=s,o[s]=i,t.observerSlots[s]=c)}}if(e.owned){for(r=e.owned.length-1;r>=0;r--)fe(e.owned[r]);e.owned=null}if(e.cleanups){for(r=e.cleanups.length-1;r>=0;r--)e.cleanups[r]();e.cleanups=null}e.state=0,e.context=null}function Ve(e){throw e}function R(e,r){return B(()=>e(r||{}))}const gt=e=>`Stale read from <${e}>.`;function xt(e){const r=e.keyed,t=Le(()=>e.when,void 0,{equals:(s,o)=>r?s===o:!s==!o});return Le(()=>{const s=t();if(s){const o=e.children;return typeof o=="function"&&o.length>0?B(()=>o(r?s:()=>{if(!B(t))throw gt("Show");return e.when})):o}return e.fallback},void 0,void 0)}function Et(e,r,t){let s=t.length,o=r.length,i=s,c=0,n=0,_=r[o-1].nextSibling,m=null;for(;c<o||n<i;){if(r[c]===t[n]){c++,n++;continue}for(;r[o-1]===t[i-1];)o--,i--;if(o===c){const A=i<s?n?t[n-1].nextSibling:t[i-n]:_;for(;n<i;)e.insertBefore(t[n++],A)}else if(i===n)for(;c<o;)(!m||!m.has(r[c]))&&r[c].remove(),c++;else if(r[c]===t[i-1]&&t[n]===r[o-1]){const A=r[--o].nextSibling;e.insertBefore(t[n++],r[c++].nextSibling),e.insertBefore(t[--i],A),r[o]=t[i]}else{if(!m){m=new Map;let C=n;for(;C<i;)m.set(t[C],C++)}const A=m.get(r[c]);if(A!=null)if(n<A&&A<i){let C=c,ve=1,Be;for(;++C<o&&C<i&&!((Be=m.get(r[C]))==null||Be!==A+ve);)ve++;if(ve>A-n){const ct=r[c];for(;n<A;)e.insertBefore(t[n++],ct)}else e.replaceChild(t[n++],r[c++])}else c++;else r[c++].remove()}}}function _t(e,r,t,s={}){let o;return lt(i=>{o=i,r===document?e():re(r,e(),r.firstChild?null:void 0,t)},s.owner),()=>{o(),r.textContent=""}}function ue(e,r,t){let s;const o=()=>{const c=document.createElement("template");return c.innerHTML=e,t?c.content.firstChild.firstChild:c.content.firstChild},i=r?()=>B(()=>document.importNode(s||(s=o()),!0)):()=>(s||(s=o())).cloneNode(!0);return i.cloneNode=i,i}function At(e,r,t){t==null?e.removeAttribute(r):e.setAttribute(r,t)}function M(e,r){r==null?e.removeAttribute("class"):e.className=r}function re(e,r,t,s){if(t!==void 0&&!s&&(s=[]),typeof r!="function")return se(e,r,s,t);F(o=>se(e,r(),o,t),s)}function se(e,r,t,s,o){for(;typeof t=="function";)t=t();if(r===t)return t;const i=typeof r,c=s!==void 0;if(e=c&&t[0]&&t[0].parentNode||e,i==="string"||i==="number")if(i==="number"&&(r=r.toString()),c){let n=t[0];n&&n.nodeType===3?n.data=r:n=document.createTextNode(r),t=L(e,t,s,n)}else t!==""&&typeof t=="string"?t=e.firstChild.data=r:t=e.textContent=r;else if(r==null||i==="boolean")t=L(e,t,s);else{if(i==="function")return F(()=>{let n=r();for(;typeof n=="function";)n=n();t=se(e,n,t,s)}),()=>t;if(Array.isArray(r)){const n=[],_=t&&Array.isArray(t);if(de(n,r,t,o))return F(()=>t=se(e,n,t,s,!0)),()=>t;if(n.length===0){if(t=L(e,t,s),c)return t}else _?t.length===0?Me(e,n,s):Et(e,t,n):(t&&L(e),Me(e,n));t=n}else if(r.nodeType){if(Array.isArray(t)){if(c)return t=L(e,t,s,r);L(e,t,null,r)}else t==null||t===""||!e.firstChild?e.appendChild(r):e.replaceChild(r,e.firstChild);t=r}else console.warn("Unrecognized value. Skipped inserting",r)}return t}function de(e,r,t,s){let o=!1;for(let i=0,c=r.length;i<c;i++){let n=r[i],_=t&&t[i],m;if(!(n==null||n===!0||n===!1))if((m=typeof n)=="object"&&n.nodeType)e.push(n);else if(Array.isArray(n))o=de(e,n,_)||o;else if(m==="function")if(s){for(;typeof n=="function";)n=n();o=de(e,Array.isArray(n)?n:[n],Array.isArray(_)?_:[_])||o}else e.push(n),o=!0;else{const A=String(n);_&&_.nodeType===3&&_.data===A?e.push(_):e.push(document.createTextNode(A))}}return o}function Me(e,r,t=null){for(let s=0,o=r.length;s<o;s++)e.insertBefore(r[s],t)}function L(e,r,t,s){if(t===void 0)return e.textContent="";const o=s||document.createTextNode("");if(r.length){let i=!1;for(let c=r.length-1;c>=0;c--){const n=r[c];if(o!==n){const _=n.parentNode===e;!i&&!c?_?e.replaceChild(o,n):e.insertBefore(o,t):_&&n.remove()}else i=!0}}else e.insertBefore(o,t);return[o]}const bt="_container_14umt_1",mt={container:bt},yt="_gallery_1elgd_1",Rt="_canvas_container_1elgd_7",wt="_canvas_1elgd_7",ge={gallery:yt,canvas_container:Rt,canvas:wt},Tt=ue("<div><canvas>"),$t=ue("<div>");function Q({id:e}){return(()=>{const r=Tt(),t=r.firstChild;return At(t,"id",e),F(s=>{const o=ge.canvas_container,i=ge.canvas;return o!==s._v$&&M(r,s._v$=o),i!==s._v$2&&M(t,s._v$2=i),s},{_v$:void 0,_v$2:void 0}),r})()}function St(){const[e,r]=ht(!1);return window.addEventListener("resize",()=>{r(window.innerWidth<=640)}),ut(()=>{console.log(window.innerWidth),r(window.innerWidth<=640)}),(()=>{const t=$t();return re(t,R(xt,{get when(){return e()},get fallback(){return R(Q,{id:"chakana1"})},get children(){return[R(Q,{id:"chakana1"}),R(Q,{id:"chakana2"}),R(Q,{id:"chakana3"})]}})),F(()=>M(t,ge.gallery)),t})()}const Ct="_weigth_15un7_15",Ue={weigth:Ct},Ft=ue("<div><p>Dale click a la imagen y, sosteniendo el click, mueve el mouse</p><p>Click on the image and, holding the click, move the mouse</p><p>Cliquez sur l'image et, en le laissant appuyé, déplacez la souris</p><p>This website is 51Ko");function Bt(){return(()=>{const e=Ft(),r=e.firstChild,t=r.nextSibling,s=t.nextSibling,o=s.nextSibling;return F(i=>{const c=Ue.container,n=Ue.weigth;return c!==i._v$&&M(e,i._v$=c),n!==i._v$2&&M(o,i._v$2=n),i},{_v$:void 0,_v$2:void 0}),e})()}const Lt=ue("<div>");function Mt(){return(()=>{const e=Lt();return re(e,R(St,{}),null),re(e,R(Bt,{}),null),F(()=>M(e,mt.container)),e})()}const Ut=document.getElementById("root");_t(()=>R(Mt,{}),Ut);const be=`
    attribute vec3 coordinates;
    
    uniform mat4 Pmatrix;
    uniform mat4 Vmatrix;
    uniform mat4 Mmatrix;

    varying vec2 vTextureCoord;

    void main(void) {
        vTextureCoord = coordinates.xy;
    
        gl_Position = Pmatrix * Vmatrix * Mmatrix * vec4(coordinates, 1.);

    }`,Pt=`
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
    }`,x=document.getElementById("chakana1"),a=x.getContext("experimental-webgl"),Dt=[-1,1,0,-1,-1,0,1,-1,0,1,1,0],ke=[3,2,1,3,1,0],Ge=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,Ge);a.bufferData(a.ARRAY_BUFFER,new Float32Array(Dt),a.STATIC_DRAW);a.bindBuffer(a.ARRAY_BUFFER,null);const We=a.createBuffer();a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,We);a.bufferData(a.ELEMENT_ARRAY_BUFFER,new Uint16Array(ke),a.STATIC_DRAW);a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,null);const It=be,me=a.createShader(a.VERTEX_SHADER);a.shaderSource(me,It);a.compileShader(me);const Yt=Pt,ye=a.createShader(a.FRAGMENT_SHADER);a.shaderSource(ye,Yt);a.compileShader(ye);const T=a.createProgram();a.attachShader(T,me);a.attachShader(T,ye);a.linkProgram(T);var Nt=a.getUniformLocation(T,"Pmatrix"),Ot=a.getUniformLocation(T,"Vmatrix"),Xt=a.getUniformLocation(T,"Mmatrix");a.bindBuffer(a.ARRAY_BUFFER,Ge);var je=a.getAttribLocation(T,"coordinates");a.vertexAttribPointer(je,3,a.FLOAT,!1,0,0);a.enableVertexAttribArray(je);a.useProgram(T);function Ht(e,r,t,s){var o=Math.tan(e*.5*Math.PI/180);return[.5/o,0,0,0,0,.5*r/o,0,0,0,0,-(s+t)/(s-t),-1,0,0,-2*s*t/(s-t),0]}var qt=Ht(22,x.width*.5/x.height,1,100),u=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],xe=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];xe[14]=xe[14]-2.5;var Pe=.95,G=!1,U,P,D=0,I=0,Vt=function(e){return G=!0,U=e.pageX,P=e.pageY,e.preventDefault(),!1},kt=function(e){G=!0;let r=e.touches[0];return U=r.pageX,P=r.pageY,e.preventDefault(),!1},Re=function(e){G=!1},Gt=function(e){if(!G)return!1;D=(e.pageX-U)*2*Math.PI/x.width,I=(e.pageY-P)*2*Math.PI/x.height,oe+=D,ie+=I,U=e.pageX,P=e.pageY,e.preventDefault()},Wt=function(e){if(!G)return!1;let r=e.touches[0];D=(r.pageX-U)*2*Math.PI/x.width,I=(r.pageY-P)*2*Math.PI/x.height,oe+=D,ie+=I,U=r.pageX,P=r.pageY,e.preventDefault()};x.addEventListener("mousedown",Vt,!1);x.addEventListener("mouseup",Re,!1);x.addEventListener("mouseout",Re,!1);x.addEventListener("mousemove",Gt,!1);x.addEventListener("touchstart",kt,!1);x.addEventListener("touchend",Re,!1);x.addEventListener("touchmove",Wt,!1);function jt(e,r){var t=Math.cos(r),s=Math.sin(r),o=e[1],i=e[5],c=e[9];e[1]=e[1]*t-e[2]*s,e[5]=e[5]*t-e[6]*s,e[9]=e[9]*t-e[10]*s,e[2]=e[2]*t+o*s,e[6]=e[6]*t+i*s,e[10]=e[10]*t+c*s}function Zt(e,r){var t=Math.cos(r),s=Math.sin(r),o=e[0],i=e[4],c=e[8];e[0]=t*e[0]+s*e[2],e[4]=t*e[4]+s*e[6],e[8]=t*e[8]+s*e[10],e[2]=t*e[2]-s*o,e[6]=t*e[6]-s*i,e[10]=t*e[10]-s*c}var oe=0,ie=0,Ze=function(e){G||(D*=Pe,I*=Pe,oe+=D,ie+=I),u[0]=1,u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=1,u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=1,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,Zt(u,oe),jt(u,ie),a.enable(a.DEPTH_TEST),a.clearColor(0,0,0,1),a.clearDepth(1),a.viewport(0,0,x.width,x.height),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT),a.uniformMatrix4fv(Nt,!1,qt),a.uniformMatrix4fv(Ot,!1,xe),a.uniformMatrix4fv(Xt,!1,u),a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,We),a.drawElements(a.TRIANGLES,ke.length,a.UNSIGNED_SHORT,0),window.requestAnimationFrame(Ze)};Ze();const Kt=`
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
    }`,d=document.getElementById("chakana2"),l=d.getContext("experimental-webgl"),Qt=[-1,1,0,-1,-1,0,1,-1,0,1,1,0],Ke=[3,2,1,3,1,0],Qe=l.createBuffer();l.bindBuffer(l.ARRAY_BUFFER,Qe);l.bufferData(l.ARRAY_BUFFER,new Float32Array(Qt),l.STATIC_DRAW);l.bindBuffer(l.ARRAY_BUFFER,null);const Je=l.createBuffer();l.bindBuffer(l.ELEMENT_ARRAY_BUFFER,Je);l.bufferData(l.ELEMENT_ARRAY_BUFFER,new Uint16Array(Ke),l.STATIC_DRAW);l.bindBuffer(l.ELEMENT_ARRAY_BUFFER,null);const Jt=be,we=l.createShader(l.VERTEX_SHADER);l.shaderSource(we,Jt);l.compileShader(we);const zt=Kt,Te=l.createShader(l.FRAGMENT_SHADER);l.shaderSource(Te,zt);l.compileShader(Te);const $=l.createProgram();l.attachShader($,we);l.attachShader($,Te);l.linkProgram($);var er=l.getUniformLocation($,"Pmatrix"),tr=l.getUniformLocation($,"Vmatrix"),rr=l.getUniformLocation($,"Mmatrix");l.bindBuffer(l.ARRAY_BUFFER,Qe);var ze=l.getAttribLocation($,"coordinates");l.vertexAttribPointer(ze,3,l.FLOAT,!1,0,0);l.enableVertexAttribArray(ze);l.useProgram($);function sr(e,r,t,s){var o=Math.tan(e*.5*Math.PI/180);return[.5/o,0,0,0,0,.5*r/o,0,0,0,0,-(s+t)/(s-t),-1,0,0,-2*s*t/(s-t),0]}var or=sr(22,d.width*.5/d.height,1,100),v=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],Ee=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];Ee[14]=Ee[14]-2.5;var De=.95,W=!1,Y,N,O=0,X=0,et=function(e){return W=!0,Y=e.pageX,N=e.pageY,e.preventDefault(),!1},$e=function(e){W=!1},ir=function(e){if(!W)return!1;O=(e.pageX-Y)*2*Math.PI/d.width,X=(e.pageY-N)*2*Math.PI/d.height,ne+=O,ce+=X,Y=e.pageX,N=e.pageY,e.preventDefault()},nr=function(e){W=!0;let r=e.touches[0];return Y=r.pageX,N=r.pageY,e.preventDefault(),!1},cr=function(e){if(!W)return!1;let r=e.touches[0];O=(r.pageX-Y)*2*Math.PI/d.width,X=(r.pageY-N)*2*Math.PI/d.height,ne+=O,ce+=X,Y=r.pageX,N=r.pageY,e.preventDefault()};d.addEventListener("mouseover",et,!1);d.addEventListener("mousedown",$e,!1);d.addEventListener("mouseup",et,!1);d.addEventListener("mouseout",$e,!1);d.addEventListener("mousemove",ir,!1);d.addEventListener("touchstart",nr,!1);d.addEventListener("touchend",$e,!1);d.addEventListener("touchmove",cr,!1);function ar(e,r){var t=Math.cos(r),s=Math.sin(r),o=e[1],i=e[5],c=e[9];e[1]=e[1]*t-e[2]*s,e[5]=e[5]*t-e[6]*s,e[9]=e[9]*t-e[10]*s,e[2]=e[2]*t+o*s,e[6]=e[6]*t+i*s,e[10]=e[10]*t+c*s}function lr(e,r){var t=Math.cos(r),s=Math.sin(r),o=e[0],i=e[4],c=e[8];e[0]=t*e[0]+s*e[2],e[4]=t*e[4]+s*e[6],e[8]=t*e[8]+s*e[10],e[2]=t*e[2]-s*o,e[6]=t*e[6]-s*i,e[10]=t*e[10]-s*c}var ne=0,ce=0,tt=function(e){W||(O*=De,X*=De,ne+=O,ce+=X),v[0]=1,v[1]=0,v[2]=0,v[3]=0,v[4]=0,v[5]=1,v[6]=0,v[7]=0,v[8]=0,v[9]=0,v[10]=1,v[11]=0,v[12]=0,v[13]=0,v[14]=0,v[15]=1,lr(v,ne),ar(v,ce),l.enable(l.DEPTH_TEST),l.clearColor(0,0,0,1),l.clearDepth(1),l.viewport(0,0,d.width,d.height),l.clear(l.COLOR_BUFFER_BIT|l.DEPTH_BUFFER_BIT),l.uniformMatrix4fv(er,!1,or),l.uniformMatrix4fv(tr,!1,Ee),l.uniformMatrix4fv(rr,!1,v),l.bindBuffer(l.ELEMENT_ARRAY_BUFFER,Je),l.drawElements(l.TRIANGLES,Ke.length,l.UNSIGNED_SHORT,0),window.requestAnimationFrame(tt)};tt();const hr=`
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
    }`,E=document.getElementById("chakana3"),h=E.getContext("experimental-webgl"),fr=[-1,1,0,-1,-1,0,1,-1,0,1,1,0],rt=[3,2,1,3,1,0],st=h.createBuffer();h.bindBuffer(h.ARRAY_BUFFER,st);h.bufferData(h.ARRAY_BUFFER,new Float32Array(fr),h.STATIC_DRAW);h.bindBuffer(h.ARRAY_BUFFER,null);const ot=h.createBuffer();h.bindBuffer(h.ELEMENT_ARRAY_BUFFER,ot);h.bufferData(h.ELEMENT_ARRAY_BUFFER,new Uint16Array(rt),h.STATIC_DRAW);h.bindBuffer(h.ELEMENT_ARRAY_BUFFER,null);const ur=be,Se=h.createShader(h.VERTEX_SHADER);h.shaderSource(Se,ur);h.compileShader(Se);const vr=hr,Ce=h.createShader(h.FRAGMENT_SHADER);h.shaderSource(Ce,vr);h.compileShader(Ce);const S=h.createProgram();h.attachShader(S,Se);h.attachShader(S,Ce);h.linkProgram(S);var pr=h.getUniformLocation(S,"Pmatrix"),dr=h.getUniformLocation(S,"Vmatrix"),gr=h.getUniformLocation(S,"Mmatrix");h.bindBuffer(h.ARRAY_BUFFER,st);var it=h.getAttribLocation(S,"coordinates");h.vertexAttribPointer(it,3,h.FLOAT,!1,0,0);h.enableVertexAttribArray(it);h.useProgram(S);function xr(e,r,t,s){var o=Math.tan(e*.5*Math.PI/180);return[.5/o,0,0,0,0,.5*r/o,0,0,0,0,-(s+t)/(s-t),-1,0,0,-2*s*t/(s-t),0]}var Er=xr(22,E.width*.5/E.height,1,100),p=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],_e=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];_e[14]=_e[14]-2.5;var Ie=.95,j=!1,H,q,V=0,k=0,_r=function(e){return j=!0,H=e.pageX,q=e.pageY,e.preventDefault(),!1},Fe=function(e){j=!1},Ar=function(e){if(!j)return!1;V=(e.pageX-H)*2*Math.PI/E.width,k=(e.pageY-q)*2*Math.PI/E.height,ae+=V,le+=k,H=e.pageX,q=e.pageY,e.preventDefault()},br=function(e){j=!0;let r=e.touches[0];return H=r.pageX,q=r.pageY,e.preventDefault(),!1},mr=function(e){if(!j)return!1;let r=e.touches[0];V=(r.pageX-H)*2*Math.PI/E.width,k=(r.pageY-q)*2*Math.PI/E.height,ae+=V,le+=k,H=r.pageX,q=r.pageY,e.preventDefault()};E.addEventListener("mousedown",_r,!1);E.addEventListener("mouseup",Fe,!1);E.addEventListener("mouseout",Fe,!1);E.addEventListener("mousemove",Ar,!1);E.addEventListener("touchstart",br,!1);E.addEventListener("touchend",Fe,!1);E.addEventListener("touchmove",mr,!1);function yr(e,r){var t=Math.cos(r),s=Math.sin(r),o=e[1],i=e[5],c=e[9];e[1]=e[1]*t-e[2]*s,e[5]=e[5]*t-e[6]*s,e[9]=e[9]*t-e[10]*s,e[2]=e[2]*t+o*s,e[6]=e[6]*t+i*s,e[10]=e[10]*t+c*s}function Rr(e,r){var t=Math.cos(r),s=Math.sin(r),o=e[0],i=e[4],c=e[8];e[0]=t*e[0]+s*e[2],e[4]=t*e[4]+s*e[6],e[8]=t*e[8]+s*e[10],e[2]=t*e[2]-s*o,e[6]=t*e[6]-s*i,e[10]=t*e[10]-s*c}var ae=0,le=0,nt=function(e){j||(V*=Ie,k*=Ie,ae+=V,le+=k),p[0]=1,p[1]=0,p[2]=0,p[3]=0,p[4]=0,p[5]=1,p[6]=0,p[7]=0,p[8]=0,p[9]=0,p[10]=1,p[11]=0,p[12]=0,p[13]=0,p[14]=0,p[15]=1,Rr(p,ae),yr(p,le),h.enable(h.DEPTH_TEST),h.clearColor(0,0,0,1),h.clearDepth(1),h.viewport(0,0,E.width,E.height),h.clear(h.COLOR_BUFFER_BIT|h.DEPTH_BUFFER_BIT),h.uniformMatrix4fv(pr,!1,Er),h.uniformMatrix4fv(dr,!1,_e),h.uniformMatrix4fv(gr,!1,p),h.bindBuffer(h.ELEMENT_ARRAY_BUFFER,ot),h.drawElements(h.TRIANGLES,rt.length,h.UNSIGNED_SHORT,0),window.requestAnimationFrame(nt)};nt();
