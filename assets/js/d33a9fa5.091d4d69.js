"use strict";(self.webpackChunkspec_untp_website=self.webpackChunkspec_untp_website||[]).push([[895],{5318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var i=n(7378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,m=d["".concat(l,".").concat(u)]||d[u]||h[u]||s;return n?i.createElement(m,o(o({ref:t},p),{},{components:n})):i.createElement(m,o({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,o[1]=a;for(var c=2;c<s;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5611:(e,t,n)=>{n.d(t,{ZP:()=>o});var i=n(5773),r=(n(7378),n(5318));const s={toc:[]};function o(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Please note that this content is under development and is not ready for implementation. This status message will be updated as content development progresses.")))}o.isMDXComponent=!0},7802:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var i=n(5773),r=(n(7378),n(5318)),s=n(5611);const o={sidebar_position:15,title:"Test Services"},a=void 0,l={unversionedId:"tools-and-support/TestService",id:"tools-and-support/TestService",title:"Test Services",description:"There is a 3 tier testing architecture to help implementors ensure that they are issuing UNTP interoperable digital product passports.  This architecture also ensures that as implementors 'extend' the UN Transparecy Protocol they do that in a non-breaking fashion.",source:"@site/docs/tools-and-support/TestService.md",sourceDirName:"tools-and-support",slug:"/tools-and-support/TestService",permalink:"/spec-untp/docs/tools-and-support/TestService",draft:!1,editUrl:"https://github.com/uncefact/spec-untp/edit/main/website/docs/tools-and-support/TestService.md",tags:[],version:"current",sidebarPosition:15,frontMatter:{sidebar_position:15,title:"Test Services"},sidebar:"tutorialSidebar",previous:{title:"Implementation Plans",permalink:"/spec-untp/docs/tools-and-support/ImplementationPlans"},next:{title:"Help and support",permalink:"/spec-untp/docs/tools-and-support/HelpAndSupport"}},c={},p=[{value:"UNTP Testing (the blue sections in the diagram)",id:"untp-testing-the-blue-sections-in-the-diagram",level:2},{value:"Tier 1: UNTP Test: Technology Interoperability Testing",id:"tier-1-untp-test-technology-interoperability-testing",level:3},{value:"Tier 2: UNTP Test: UNTP Schema Testing",id:"tier-2-untp-test-untp-schema-testing",level:3},{value:"Tier 3: UNTP Test: Trust Graph Testing",id:"tier-3-untp-test-trust-graph-testing",level:3},{value:"Extension Testing (grey boxes)",id:"extension-testing-grey-boxes",level:2},{value:"Tier 1: Extension Test: Nothing?",id:"tier-1-extension-test-nothing",level:3},{value:"Tier 2: Extension Test:  Extension Schema Testing",id:"tier-2-extension-test--extension-schema-testing",level:3},{value:"Tier 3: Extension Test:  Choreography Testing (Trust Graph Validation)",id:"tier-3-extension-test--choreography-testing-trust-graph-validation",level:3}],h={toc:p};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,i.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(s.ZP,{mdxType:"Disclaimer"}),(0,r.kt)("h1",{id:"3-tier-test-architecture"},"3 Tier Test Architecture"),(0,r.kt)("p",null,"There is a 3 tier testing architecture to help implementors ensure that they are issuing UNTP interoperable digital product passports.  This architecture also ensures that as implementors 'extend' the UN Transparecy Protocol they do that in a non-breaking fashion."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Architecture for issuer",src:n(265).Z,width:"1424",height:"778"})),(0,r.kt)("p",null,"At each tier we articulate the specific testing for UNTP and for an extension."),(0,r.kt)("h2",{id:"untp-testing-the-blue-sections-in-the-diagram"},"UNTP Testing (the blue sections in the diagram)"),(0,r.kt)("p",null,"The UNTP testing is intended to provide implenentors the ability to validate that they have a complete valid reference implementation of UNTP.  This testing gives a starting point so that implenters know that their implemenation is starting as UNTP compliant and that any externsions that they make need to have validations added to ensure continued UNTP interoperability."),(0,r.kt)("h3",{id:"tier-1-untp-test-technology-interoperability-testing"},"Tier 1: UNTP Test: Technology Interoperability Testing"),(0,r.kt)("p",null,"This testing is intended to provide implementers confidence that the technical implementation is correct.  It is primarily focused on W3C verifiable credential compliance."),(0,r.kt)("h3",{id:"tier-2-untp-test-untp-schema-testing"},"Tier 2: UNTP Test: UNTP Schema Testing"),(0,r.kt)("p",null,"This tests that the schema that are being used to issue credentials are a valid UNTP schema.  This will enable an implementor to validate that they are starting with a valid UNTP set of schema."),(0,r.kt)("h3",{id:"tier-3-untp-test-trust-graph-testing"},"Tier 3: UNTP Test: Trust Graph Testing"),(0,r.kt)("p",null,"This validates that the links between the different components of the UNTP schema (DPP, DTE, DCC) are validated.  It is anticipated that this is relatively simple at generic UNTP level, but will get more involved for each extension."),(0,r.kt)("h2",{id:"extension-testing-grey-boxes"},"Extension Testing (grey boxes)"),(0,r.kt)("p",null,"UNTP has been designed so that each industry and jurisdicton can extend UNTP to meet their specific busines, governance and community needs.  In order to ensure that supply chain customers downstream can consume details from their upstream supply chain partners - it is important that extensions maintain UNTP compliance.  Extension testing is intended to provide that confidence to implementors."),(0,r.kt)("h3",{id:"tier-1-extension-test-nothing"},"Tier 1: Extension Test: Nothing?"),(0,r.kt)("p",null,"It is expected that there won't be changes at Tier 1 of the testing architecture for extensions.  This is because we are using W3C standards and if there are requirements for extenisons it is beyond the scope of UNTP to manage.  We are including it in the architecture to faciliate future unforeseen needs."),(0,r.kt)("h3",{id:"tier-2-extension-test--extension-schema-testing"},"Tier 2: Extension Test:  Extension Schema Testing"),(0,r.kt)("p",null,"This testing is designed to ensure that as implementors are extending UNTP schema (DPP, DTE, DCC) to meet their specific needs that they are not breaking compatibility with UNTP and that they are able to provide the implementors of their extensions with confidence that their extension is correct."),(0,r.kt)("h3",{id:"tier-3-extension-test--choreography-testing-trust-graph-validation"},"Tier 3: Extension Test:  Choreography Testing (Trust Graph Validation)"),(0,r.kt)("p",null,"This provides the ability for extendors to map the different credentials together to validate specific industry or regional scenarios.  In Australia NATA is the national accrecditor for laboratories - so the link from NATA to an accredited laboratory to a specific accreditation would be validated by a test in this component."))}d.isMDXComponent=!0},265:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/3tiertestarchitecture-4fba74a3d069bffdcbbca7dbd578a491.png"}}]);