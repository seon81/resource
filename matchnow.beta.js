!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.MatchNow=t():e.MatchNow=t()}(self,(()=>(()=>{"use strict";var e={d:(t,n)=>{for(var s in n)e.o(n,s)&&!e.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:n[s]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{Auth:()=>L,EventBanner:()=>n});const n=(e=>{const t="eventBannerSlider",n={arrows:!1,focusOnSelect:!0,variableWidth:!0,infinite:!0,speed:1e4,autoplay:!0,autoplaySpeed:0,slidesToScroll:1,slidesToShow:1,cssEase:"linear"};let s;return{start:function(e){s=$(e),this.render()},render:function(){if(!s)return;const e='<div class="event__banner"><div id="'+t+'" class="slick slick-slider"><div class="slick-slide"><div class="event__banner__text"><i></i>The first month, <em>50% discount for the first month</em></div></div><div class="slick-slide"><div class="event__banner__text"><i></i>The first month, <em>50% discount for the first month</em></div></div></div></div>';s.html(e),this.run()},run:function(){s.find("#"+t).slick(n)}}})(),s=class{static setItem(e,t){try{return localStorage.setItem(e,t),!0}catch(e){return!1}}static getItem(e){try{const t=localStorage.getItem(e);return null==t||void 0===t||""===t?null:t}catch(e){return null}}static removeItem(e){try{return localStorage.removeItem(e),!0}catch(e){return!1}}},i=()=>{const e=window.location.search;return 0===e.indexOf("?")?e.slice(1,e.length):null},r=e=>{if(null==e)return null;const t={};return e.split("&").map((e=>{let[n,s]=e.split("=");t[n]=s})),t},o=e=>{let t="";return Object.entries(e).map((([e,n])=>{a(n)&&(t+=""===t?"?":"&",t+=`${e}=${encodeURIComponent(n)}`)})),t},c=e=>null==e||(void 0===e||("string"==typeof e&&""===e.trim()||(!!(Array.isArray(e)&&e.length<1)||"object"==typeof e&&Object.keys(e).length<1))),a=e=>!c(e),l="page",h="web",u="OSC001",d="live",f="Invalid Type",T="Requried clientId",p="Requried redirectUri",y="Not found access token",m="Not found refresh token",I="Request failed verify token",_="Request failed refresh token",v="Request failed get user profile",E="Request failed sign out",O="token",w="accessToken",g="wematchnow_auth",k={LOCAL:"https://dev-member.wematchnow.com",DEV:"https://dev-member.wematchnow.com",LIVE:"https://member.wematchnow.com"},A="/earlybird/login",S="/login",N="/modify",C={LOCAL:"",DEV:"https://dev-api.wematchnow.com",LIVE:"https://api.wematchnow.com"},R="/ext/auth/v1/oauth/token/verify",b="/ext/auth/v1/oauth/token/refresh",P="/ext/member/v1/user",U="/ext/auth/v1/signout/account",j={GET:"GET",POST:"POST"},q={CONTENT_TYPE:"Content-Type",X_CLIENT_ID:"X-Client-Id",X_CLIENT_SECRET:"X-Client-Secret",AUTHORIZATION:"Authorization",X_OS_CODE:"X-Os-Code",X_OWNER_CONTENT:"X-Owner-Content"},x={CONTENT_TYPE_JSON:"application/json",AUTHORIZATION_TYPE:"bearer"},X={GRANT_TYPE:{REFRESH_TOKEN:"refresh_token"}},L=class{#e;#t;#n;constructor({clientId:e,clientSecret:t,redirectUri:n,displayType:s=l,osType:i=h,environment:r=d,autoRefreshToken:o=!1}){c(e)&&new Error(T),c(n)&&new Error(p),this.#e=e,this.#t=t,this.redirectUri=n,this.displayType=s,this.osType=i,this.environment=r.toUpperCase(),this.autoRefreshToken=o}init(){this.#n=this.#s()}#s(){const e=i();let t=null;if(a(e)&&e.includes(w))t=r(e);else try{t=JSON.parse(s.getItem(g))}catch(e){t=null}return t}#i(){const e=g,t=JSON.stringify(this.#n);s.setItem(e,t)}#r(){this.#n=null,s.removeItem(g)}openSignIn(){const e=i();let t,n,s;a(e)&&e.includes(O)&&(t=r(e).token),t?(n=A,s=o({clientId:this.#e,redirectUri:this.redirectUri,displayType:this.displayType,osType:this.osType,token:t})):(n=S,s=o({clientId:this.#e,redirectUri:this.redirectUri,displayType:this.displayType,osType:this.osType}));const c=k[this.environment]+n+s;this.displayType===l?window.location.href=c:window.open(c,"MEMBERSHIP","left=0, top=0, width=375, height=667")}openMyProfile(){const e=k[this.environment]+N+o({clientId:this.#e,redirectUri:this.redirectUri,displayType:this.displayType,osType:this.osType});window.location.href=e}async signIn(e){if("function"!=typeof e)throw new TypeError(f);let t=await this.#o();return this.autoRefreshToken&&t.code>0&&(t=await this.#c(),0===t.code&&(this.#n=t.value)),0===t.code?this.#i():this.#r(),e({code:t.code,message:t.message})}async#o(){const e=this.#n?.accessToken;if(c(e))return{code:-1,message:y};try{const t=await fetch(C[this.environment]+R,{headers:{[q.X_CLIENT_ID]:this.#e,[q.AUTHORIZATION]:`${x.AUTHORIZATION_TYPE} ${e}`}});return t.ok||200===t.status?await t.json():{code:-1,message:I}}catch(e){return{code:-1,message:I}}}async#c(){const e=this.#n?.refreshToken,t={grant_type:X.GRANT_TYPE.REFRESH_TOKEN,refresh_token:e};if(c(e))return{code:-1,message:m};try{const e=await fetch(C[this.environment]+b,{method:j.POST,body:JSON.stringify(t),headers:{[q.CONTENT_TYPE]:x.CONTENT_TYPE_JSON,[q.X_OS_CODE]:u,[q.X_CLIENT_ID]:this.#e,[q.X_CLIENT_SECRET]:this.#t}});if(!e.ok&&200!==e.status)return{code:-1,message:_};const n=await e.json();return{code:n.code,message:n.message,value:{accessToken:n.value.access_token,expiresIn:n.value.expires_in,refreshToken:n.value.refresh_token,refreshTokenExpiresIn:n.value.refresh_token_expires_in}}}catch(e){return{code:-1,message:_}}}async refreshToken(e){if("function"!=typeof e)throw new TypeError(f);return e(await this.#c())}async getUserProfile(e){if("function"!=typeof e)throw new TypeError(f);return e(await this.#a())}async#a(){const e=this.#n?.accessToken;if(c(e))return{code:-1,message:y};try{const t=await fetch(C[this.environment]+P,{headers:{[q.X_CLIENT_ID]:this.#e,[q.AUTHORIZATION]:e}});return t.ok||200===t.status?await t.json():{code:-1,message:v}}catch(e){return{code:-1,message:v}}}async signOut(e){if("function"!=typeof e)throw new TypeError(f);let t=await this.#l();return this.#r(),e(t)}async#l(){const e=this.#n?.accessToken;if(c(e))return{code:-1,message:y};try{const t=await fetch(C[this.environment]+U,{method:j.POST,headers:{[q.X_CLIENT_ID]:this.#e,[q.X_CLIENT_SECRET]:this.#t,[q.AUTHORIZATION]:`${x.AUTHORIZATION_TYPE} ${e}`}});return t.ok||200===t.status?await t.json():{code:-1,message:E}}catch(e){return{code:-1,message:E}}}getUserType(){return this.#n?.userType?this.#n.userType:null}};return t})()));