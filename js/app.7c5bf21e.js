(function(){"use strict";var e={1460:function(e,t,n){var r=n(8935),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"p-5",attrs:{id:"app"}},[n("h2",{staticClass:"title is-2"},[e._v("Image test")]),n("ul",{staticClass:"columns is-multiline is-flex"},e._l(e.currentImages,(function(t,r){return n("PlaceholderImage",{key:r,attrs:{src:t.url,alt:t.title},on:{eventRemoveFromArray:e.removeFromArray}})})),1)])},i=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{staticClass:"column is-half is-one-quarter-desktop",on:{click:e.destroyImage}},[n("img",{attrs:{src:e.src,alt:e.alt,title:"Remove square!"}})])},a=[],c={props:{src:String,alt:String},methods:{destroyImage(){this.$emit("eventRemoveFromArray",this.$vnode.key)}}},l=c,u=n(1001),f=(0,u.Z)(l,s,a,!1,null,"6b5c4686",null),m=f.exports,d={components:{PlaceholderImage:m},data(){return{level:1,images:[]}},computed:{currentImages(){return this.images.slice(0,40*this.level)}},methods:{async addItems(){try{const e=await fetch("https://jsonplaceholder.typicode.com/photos"),t=await e.json();this.images=this.images.concat(t)}catch(e){console.error(e)}},removeFromArray(e){this.images.splice(e,1)}},created(){this.addItems()},mounted(){window.addEventListener("scroll",(()=>{document.documentElement.scrollTop+window.innerHeight+500>document.documentElement.offsetHeight&&this.level++,this.currentImages.length+960>this.images.length&&this.addItems()}))}},h=d,p=(0,u.Z)(h,o,i,!1,null,null,null),v=p.exports;r.Z.config.productionTip=!1,new r.Z({render:e=>e(v)}).$mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var s=1/0;for(u=0;u<e.length;u++){r=e[u][0],o=e[u][1],i=e[u][2];for(var a=!0,c=0;c<r.length;c++)(!1&i||s>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(a=!1,i<s&&(s=i));if(a){e.splice(u--,1);var l=o();void 0!==l&&(t=l)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[r,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,s=r[0],a=r[1],c=r[2],l=0;if(s.some((function(t){return 0!==e[t]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(c)var u=c(n)}for(t&&t(r);l<s.length;l++)i=s[l],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(u)},r=self["webpackChunkimages_app"]=self["webpackChunkimages_app"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(1460)}));r=n.O(r)})();
//# sourceMappingURL=app.7c5bf21e.js.map