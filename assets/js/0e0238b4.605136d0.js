"use strict";(self.webpackChunkspec_untp_website=self.webpackChunkspec_untp_website||[]).push([[9447],{5245:(e,t,a)=>{a.d(t,{Ay:()=>o,RM:()=>n});var i=a(2540),s=a(3023);const n=[];function r(e){const t={admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsx)(t.p,{children:"Please note that this content is under development and is not ready for implementation. This status message will be updated as content development progresses."})})}function o(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},1537:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"design-patterns/TrustGraphs","title":"Transparency Graphs","description":"Overview","source":"@site/docs/design-patterns/TrustGraphs.md","sourceDirName":"design-patterns","slug":"/design-patterns/TrustGraphs","permalink":"/spec-untp/docs/design-patterns/TrustGraphs","draft":false,"unlisted":false,"editUrl":"https://github.com/uncefact/spec-untp/edit/main/website/docs/design-patterns/TrustGraphs.md","tags":[],"version":"current","sidebarPosition":35,"frontMatter":{"sidebar_position":35,"title":"Transparency Graphs"},"sidebar":"tutorialSidebar","previous":{"title":"Data Carriers","permalink":"/spec-untp/docs/design-patterns/DataCarriers"},"next":{"title":"Anti-Counterfeiting","permalink":"/spec-untp/docs/design-patterns/Counterfeiting"}}');var s=a(2540),n=a(3023),r=a(5245);const o={sidebar_position:35,title:"Transparency Graphs"},c=void 0,d={},l=[...r.RM,{value:"Overview",id:"overview",level:2},{value:"Trust Chains",id:"trust-chains",level:2},{value:"Transparency Graphs",id:"transparency-graphs",level:2},{value:"JSON-LD Representation",id:"json-ld-representation",level:2},{value:"SCHACL Graph verification",id:"schacl-graph-verification",level:2}];function h(e){const t={a:"a",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.Ay,{}),"\n",(0,s.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(t.p,{children:"The sustainability footprint of a finished product is the aggregation of it's components and processes through the value chain. Verification of sustainability claims therefore involves assessing a bundle of linked credentials (aka a \"transparency graph\") drawn from all or part of a value chain. Whilst each credential may be valid in it's own right, one challenge is verifying the context of related credentials. For example, a conformity assessment body that is accredited to test strength of structured steel might not be accredited to issue emissions intensity certificates. A technically valid emissions certificate linked to a technically valid accreditation certificate that has a different scope would be fraudulent. To address this problem, the UNTP defines a simple method to verify the contextual scope of linked credentials. Essentially this provides a mechanism to verify a linked graph of data at a layer above individual credential verification."}),"\n",(0,s.jsx)(t.h2,{id:"trust-chains",children:"Trust Chains"}),"\n",(0,s.jsx)(t.p,{children:"In the world of verifiable credentials, it is crucial that such credentials are issued by trusted and accredited entities. Consider the scenario where GHG emissions of a product result in a GHG emissions tax that must be paid. In such cases, the potential for fraud is significant, as some manufacturers might falsely claim zero GHG emissions in their digital product passport or in a separate GHG emissions credential. To combat this, verifiers must be able to construct a chain of trust.  For example"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"A manufacturer issues a declaration in a UNTP Digital Product passport (DPP) that states an emissions footprint for a given product ID. If the verifier trusts the manufacturer then this may be sufficient. But often a third party attestation is needed."}),"\n",(0,s.jsx)(t.li,{children:"A third party Conformity Assessment Body (CAB) issues an attestation as a UNTP Digital Conformity Credential (DCC) about the same product ID that confirms the emissions footprint. If the verifier knows and trusts the CAB then this pay be sufficient. But there are thousands of CABs and so it is very possible that the verifier does not know the specific CAB."}),"\n",(0,s.jsxs)(t.li,{children:["A national accreditation authority issues an endorsement as a UNTP Digital Identity Anchor (DIA) which states that the CAB is accredited to issue certifications under a recognised scheme such as the ",(0,s.jsx)(t.a,{href:"https://ghgprotocol.org/",children:"GHG Protocol"}),'. The number of accreditation authorities only a little large than the number of countries. So verifiers only need a short list of accreditation authorites ("trust anchors") in order to trust the chain from product manufacturer -> CAB -> national authority. But the list could be even shorter.']}),"\n",(0,s.jsxs)(t.li,{children:["Most national acreditation authorites are members of a global association such as ",(0,s.jsx)(t.a,{href:"https://ilac.org/",children:"ILAC"}),". If ILAC were to issue a credential attesting that national authority is a member then there is a chain of trust from manufacturer -> CAB -> national authority -> ILAC."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["There are other trust chains that can be followed to anchor trust to a national or global authority that follows rigorous processes to manage it's accreditations and memberships. For example a battery passport may link to a certifier who is, in turn, accredited by the ",(0,s.jsx)(t.a,{href:"https://www.globalbattery.org/",children:"global battery alliance"}),". Verifiers of credentials should follow these linked credential chains until a trusted entity is reached. That could be at the first step or after several steps."]}),"\n",(0,s.jsx)(t.h2,{id:"transparency-graphs",children:"Transparency Graphs"}),"\n",(0,s.jsx)(t.p,{children:'A transparency graph is a linked set of identified nodes such as Product, Location, Facility, Party, Standard, Regulation, Criteria, Declaration, Attestation, or Endorsement. The data to construct a transparency graph comes from multiple individual credentials. When multiple credentials identify the same entity (eg a business, a facility, a product) then the graph will draw meaningful connections that can be used to make valuable verifications such as "product XYZ has a GHG assessment from CAB ABC". UNTP is designed to simplify the task of creating linked data graphs because UNTP credentials are represented as a collection of uniquely identified entities that are ready to be added to a graph.'}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"A Digital Product Passport is a set of declarations (claims) against sustainability criteria defined in regulations or standards - made by a manufacturer party about a given product that is manufactured at a facility in a defined location."}),"\n",(0,s.jsx)(t.li,{children:"A Digital Conformity Credential is an attestation made by an endorsed confomrity assessment body - which includes one or more assesments of a list of identified products or facilities against specific criteria."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Although these two credential types have different structures, they are assembled from the same core vocabulary building blocks. This allows a supply chain transparency system to easily construct a transparency graph from a stream of DPPs and DCCs. Claims about a product found in a DPP can be linked to assessment of the same product in DCC when both credentials have matching product and criteria identifiers."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Transparency graphs",src:a(6756).A+"",width:"828",height:"361"})}),"\n",(0,s.jsx)(t.h2,{id:"json-ld-representation",children:"JSON-LD Representation"}),"\n",(0,s.jsx)(t.p,{children:"TBA"}),"\n",(0,s.jsx)(t.h2,{id:"schacl-graph-verification",children:"SCHACL Graph verification"}),"\n",(0,s.jsx)(t.p,{children:"TBA"})]})}function u(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},6756:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/TransparencyGraphs-241f7c9236483dfdfe5ee184d4782e7c.png"},3023:(e,t,a)=>{a.d(t,{R:()=>r,x:()=>o});var i=a(3696);const s={},n=i.createContext(s);function r(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);