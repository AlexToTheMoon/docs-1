"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[307],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1858:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return a},default:function(){return u},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});var r=n(3117),o=(n(7294),n(3905));const i={sidebar_label:"Node Metrics"},a="Celestia Node Metrics",s={unversionedId:"nodes/celestia-node-metrics",id:"nodes/celestia-node-metrics",title:"Celestia Node Metrics",description:"This tutorial is for running metrics for your celestia-node Data",source:"@site/docs/nodes/celestia-node-metrics.md",sourceDirName:"nodes",slug:"/nodes/celestia-node-metrics",permalink:"/pr-preview/pr-473/fr/nodes/celestia-node-metrics",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/celestia-node-metrics.md",tags:[],version:"current",frontMatter:{sidebar_label:"Node Metrics"},sidebar:"nodes",previous:{title:"Celestia Node",permalink:"/pr-preview/pr-473/fr/category/celestia-node"},next:{title:"Celestia App",permalink:"/pr-preview/pr-473/fr/category/celestia-app"}},l={},c=[{value:"Running metrics flags",id:"running-metrics-flags",level:2},{value:"Metrics endpoint design considerations",id:"metrics-endpoint-design-considerations",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"celestia-node-metrics"},"Celestia Node Metrics"),(0,o.kt)("p",null,"This tutorial is for running metrics for your celestia-node Data\nAvailability instance."),(0,o.kt)("p",null,"This tutorial will focus on running metrics for a light-node."),(0,o.kt)("p",null,"This tutorial assumes you have already setup your light node\nby following the tutorial in the ",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-473/fr/developers/node-tutorial"},"Node API tutorial"),"."),(0,o.kt)("h2",{id:"running-metrics-flags"},"Running metrics flags"),(0,o.kt)("p",null,"You can enable the celestia-node metric flags with the following\ncommand:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"celestia light start --core.ip <ip-address> --metrics --metrics.endpoint <ip-address:port> --gateway --gateway.addr <ip-address> --gateway.port <port> --p2p.network <network>\n")),(0,o.kt)("p",null,"Note that the ",(0,o.kt)("inlineCode",{parentName:"p"},"--metrics")," flags enables metrics and expects\nan input into ",(0,o.kt)("inlineCode",{parentName:"p"},"--metrics.endpoint"),"."),(0,o.kt)("p",null,"We will go over what the endpoint will need to be in the following section."),(0,o.kt)("h2",{id:"metrics-endpoint-design-considerations"},"Metrics endpoint design considerations"),(0,o.kt)("p",null,"At the moment, the architecture of celestia-node metrics\nworks as specified in the following ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/celestia-node/blob/main/docs/adr/adr-010-incentivized-testnet-monitoring.md"},"ADR"),"."),(0,o.kt)("p",null,"Essentially, the design considerations here will necessitate\nrunning an OpenTelemetry (OTEL) collector that connects to Celestia\nLight Node."),(0,o.kt)("p",null,"For an overview of OTEL, check out the guide ",(0,o.kt)("a",{parentName:"p",href:"https://opentelemetry.io/docs/collector"},"here"),"."),(0,o.kt)("p",null,"The ADR and the OTEL docs will help you run your collector on the metrics endpoint.\nThis will then allow you to process the data in the collector on a\nPrometheus server which can then be viewed on a Grafana dashboard."),(0,o.kt)("p",null,"In the future, we do want to open-source some developer toolings around\nthis infrastructure to allow for node operators to be able to monitor\ntheir Data Availability nodes."))}u.isMDXComponent=!0}}]);