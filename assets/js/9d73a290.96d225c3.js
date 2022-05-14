"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[7371],{3905:function(e,t,o){o.d(t,{Zo:function(){return d},kt:function(){return m}});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=p(o),m=a,c=h["".concat(l,".").concat(m)]||h[m]||u[m]||i;return o?n.createElement(c,r(r({ref:t},d),{},{components:o})):n.createElement(c,r({ref:t},d))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,r=new Array(i);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var p=2;p<i;p++)r[p]=o[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},542:function(e,t,o){o.r(t),o.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var n=o(7462),a=o(3366),i=(o(7294),o(3905)),r=["components"],s={sidebar_position:1},l="Freenom DNS",p={unversionedId:"build-a-website/publishing/dns",id:"build-a-website/publishing/dns",title:"Freenom DNS",description:"What is DNS",source:"@site/docs/build-a-website/publishing/dns.md",sourceDirName:"build-a-website/publishing",slug:"/build-a-website/publishing/dns",permalink:"/docs/build-a-website/publishing/dns",draft:!1,editUrl:"https://github.com/hfesatuva/resources/tree/master/docs/build-a-website/publishing/dns.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Publishing",permalink:"/docs/category/publishing"},next:{title:"Deployment",permalink:"/docs/build-a-website/publishing/deploy"}},d={},u=[{value:"What is DNS",id:"what-is-dns",level:2},{value:"Why Freenom?",id:"why-freenom",level:2},{value:"Setup",id:"setup",level:2},{value:"Video Walkthrough",id:"video-walkthrough",level:3},{value:"Text Walkthrough",id:"text-walkthrough",level:3},{value:"Optional Postfix",id:"optional-postfix",level:2},{value:"IP Addresses and DNS",id:"ip-addresses-and-dns",level:3},{value:"Domains and Subdomains",id:"domains-and-subdomains",level:3},{value:"WWW and Ports",id:"www-and-ports",level:3}],h={toc:u};function m(e){var t=e.components,o=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"freenom-dns"},"Freenom DNS"),(0,i.kt)("h2",{id:"what-is-dns"},"What is DNS"),(0,i.kt)("p",null,"Domain Name System (DNS) is like a online phonebook for IP (Internet Protocol Addresses). In short, it lets you give a shorthand for where to access things you provide over the internet, no matter where you might move them. Wherever Google puts its servers, you can always find the search engine at ",(0,i.kt)("a",{parentName:"p",href:"https://www.google.com:443"},"https://www.google.com:443"),". If you want to learn more about DNS, skip to the ",(0,i.kt)("a",{parentName:"p",href:"#optional-postfix"},"Optional Postfix"),"."),(0,i.kt)("h2",{id:"why-freenom"},"Why Freenom?"),(0,i.kt)("p",null,"In my experience trying to register any Apex domains (see ",(0,i.kt)("a",{parentName:"p",href:"#domains-and-subdomains"},"Domains and Subdomains"),"), it is very hard to do so without providing payment informaiton, or pament upfront. Freenom allows use of certain domains for one year without any payment or payment info. You can see their price chart for free and paid domains ",(0,i.kt)("a",{parentName:"p",href:"https://www.freenom.com/en/pricechart.html"},"here"),". The free TLDs include ",(0,i.kt)("inlineCode",{parentName:"p"},".tk"),", ",(0,i.kt)("inlineCode",{parentName:"p"},".ml"),", ",(0,i.kt)("inlineCode",{parentName:"p"},".cf"),", ",(0,i.kt)("inlineCode",{parentName:"p"},".gq"),", and my personal favorite: ",(0,i.kt)("inlineCode",{parentName:"p"},".ga"),". Some of their cheapest paid domains include ",(0,i.kt)("inlineCode",{parentName:"p"},".eu"),", ",(0,i.kt)("inlineCode",{parentName:"p"},".net"),", ",(0,i.kt)("inlineCode",{parentName:"p"},".work"),". I have not yet attempted a renewal on Freenom, so it may be difficult to renew for free, but at the least, you can get a full year for free."),(0,i.kt)("h2",{id:"setup"},"Setup"),(0,i.kt)("p",null,"The website is a little bit glitchy, but setup is fast. You can even register a domain with an alias identity to protect your privacy. Note that this may make it difficult to claim ownership of the domain legally, but for most people this should not matter. You can see how to sign up for Freenom and GitHub in the video below. You will also see how to make the DNS records that you will need to direct to a GitHub pages site with the name docs.workshop.ga. "),(0,i.kt)("h3",{id:"video-walkthrough"},"Video Walkthrough"),(0,i.kt)("div",{class:"video-container"},(0,i.kt)("iframe",{class:"video",src:"https://www.youtube.com/embed/smpT0CxXHOE",allowfullscreen:""})),(0,i.kt)("h3",{id:"text-walkthrough"},"Text Walkthrough"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Choose an email address, physical address, and name to use."),(0,i.kt)("li",{parentName:"ol"},"Sign up for a Freenom account. You can use Google authentication if you choose."),(0,i.kt)("li",{parentName:"ol"},"Sign up for a GitHub account."),(0,i.kt)("li",{parentName:"ol"},'Add DNS "A" (address) records that point from your Apex domain to GitHub\'s servers. '),(0,i.kt)("li",{parentName:"ol"},'I believe best practce is also to add "AAAA" records to point to the IPv6 addresses of GitHub\'s servers- there are complicated reasons for this which you can begin to understand ',(0,i.kt)("a",{parentName:"li",href:"https://www.expressvpn.com/blog/run-out-of-ip-address-exhaustion/"},"here"),"."),(0,i.kt)("li",{parentName:"ol"},'Make a DNS "CNAME" (canonical name) record that points to (your-github-username).github.io')),(0,i.kt)("h2",{id:"optional-postfix"},"Optional Postfix"),(0,i.kt)("h3",{id:"ip-addresses-and-dns"},"IP Addresses and DNS"),(0,i.kt)("p",null,"IP addresses either version 4 (IPv4) or version 6 (IPv6), are numbers that computers use to call eachother, so that they can communicate. When you go to a website, like ",(0,i.kt)("a",{parentName:"p",href:"https://www.google.com"},"google.com"),', a DNS "nameserver" (a phonebook) is changing translating ',(0,i.kt)("inlineCode",{parentName:"p"},"google.com")," into a number like ",(0,i.kt)("a",{parentName:"p",href:"https://142.250.81.206"},"142.250.81.206"),". You can use a tool like ",(0,i.kt)("a",{parentName:"p",href:"https://mxtoolbox.com/"},"MX Toolbox")," to look up DNS records. There are often many for one domain name that do different things. "),(0,i.kt)("h3",{id:"domains-and-subdomains"},"Domains and Subdomains"),(0,i.kt)("p",null,"Domains can have arbitrarily many sub domains. Domains are more specific on the left and more broad on the right. Consider the domain ",(0,i.kt)("inlineCode",{parentName:"p"},"docs.google.com"),". The last part, the ",(0,i.kt)("inlineCode",{parentName:"p"},"com")," is called the top level domain. You are probably familiar with others such as ",(0,i.kt)("inlineCode",{parentName:"p"},"net")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"org"),". There are all kinds of others like ",(0,i.kt)("inlineCode",{parentName:"p"},"site"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"io"),", and various country specific designations like ",(0,i.kt)("inlineCode",{parentName:"p"},"us"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"cn"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"ga"),". The second to the left, the ",(0,i.kt)("inlineCode",{parentName:"p"},"google")," is the apex domain. That is the part you have to reserve from a domain registrar, and usually pay for rights to use. The rest of the domains to the left of the apex domains are then yours that you are free to designate as you wish. This site is ",(0,i.kt)("inlineCode",{parentName:"p"},"learn.hfes.atuva.ga"),". The following would also be a valid domain: ",(0,i.kt)("inlineCode",{parentName:"p"},"morning.monday.racecarteam.atuva.ga"),". When you see ",(0,i.kt)("inlineCode",{parentName:"p"},"http://")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"https://"),", that is designating that you want to use the HyperText Transfer Protocol with or without encryption Security. This is usually the implied protocol for web browsing, but others exist. For example the web socket protocol (",(0,i.kt)("inlineCode",{parentName:"p"},"ws://"),') is used for things like video conferencing "under the hood".'),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Apex domains are much harder to secure than subdomains. Many website building tools like Wix, Weebly, or even GitHub will give you a subdomain under their Apex domain. However, you are then stuck with a name like ",(0,i.kt)("inlineCode",{parentName:"p"},"yoursite.weebly.com"),". Personally, I would rather have ",(0,i.kt)("inlineCode",{parentName:"p"},"yoursite.ga"),", even if I can't have ",(0,i.kt)("inlineCode",{parentName:"p"},"yoursite.com"),"."))),(0,i.kt)("h3",{id:"www-and-ports"},"WWW and Ports"),(0,i.kt)("p",null,"If you are wondering about the ",(0,i.kt)("inlineCode",{parentName:"p"},"www")," prefix, that is actually also a subdomain. TYou can read about the purpose for it ",(0,i.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/35350663/why-was-www-ever-prefixed-to-websites-purpose-of-www-prefix"},"here"),". Note that you don't need to use this prefix if you don't want to. Further, there is actually more to a domain you may not have seen: the port number. The default for ",(0,i.kt)("inlineCode",{parentName:"p"},"http")," is 80 and for ",(0,i.kt)("inlineCode",{parentName:"p"},"https")," is 443, so those are implied. If you want to test this, go to ",(0,i.kt)("a",{parentName:"p",href:"https://www.google.com:443"},"https://www.google.com:443")," and ",(0,i.kt)("a",{parentName:"p",href:"https://www.google.com:441"},"https://www.google.com:441"),". The second one won't work, but the first will!"))}m.isMDXComponent=!0}}]);