---
sidebar_position: 10
title: Governance
---

import Disclaimer from '../\_disclaimer.mdx';

<Disclaimer />

## Management process

The UNTP development follows the same **[standard governance rules](https://github.com/uncefact/governance?tab=readme-ov-file#governance)** as any UN/CEFACT project. 

* Free to use, 
* Open source licensed, 
* Maintained via an open process
* Version controlled
* Lifecycle managed


## Releases 

As per [docusaurus version management practices](https://docusaurus.io/docs/versioning), the latest stable version of UNTP will always be shown be default at /docs (this site). In-progress future version will be hosted at /docs/next and previous versions at /versioned-docs/version-x.y. The version history includes major versions (breaking) and minor versions (non-breaking but with functional change) but not patch versions (bug fixes and typos) which overwrite the relevant minor version.

The UNTP includes a number of distinct and separately versioned components such as passport schema, traceability event schema and so on. To simplify implementaiton management, all seaprate component versions are grouped together and listed under each aggregated UNTP version.

|UNTP Version| Status| Date| Componenets | Comment|
|------|---|---|---|---|
|0.0.0|Raw| 2024-01-01| TBA |Empty framework|
| | | | | |

## Contribution Process
In general we follow the standard GIT Pull Request process.

1. Make your changes in the markdown file, then commit:
![image](https://github.com/uncefact/spec-untp/assets/1311010/2ff55bd0-1e68-406b-a9b3-3f229d9921fb)

2. Just click okay on this (we don’t have a commit message policy):
![image](https://github.com/uncefact/spec-untp/assets/1311010/4fec84b8-1d1a-4a2a-a523-023d84940691)

3. Then create a pull request for your change request. Here we do prefer a suitable title and a brief description of the change you are suggesting:
![image](https://github.com/uncefact/spec-untp/assets/1311010/c88cbf4a-57d9-42e6-86cf-ad6b1c9bb200)

4. We will process your PR in the next meeting. Note that you will not see your change on the website before that happens, and we have agreed to merge your PR.
![image](https://github.com/uncefact/spec-untp/assets/1311010/feaa69f7-8bad-45a0-aa3e-e678f74edb94)


## Meetings

UNTP development [team meetings](https://us02web.zoom.us/j/85091806131) are held every fortnight from thursday 18 Jan at 7:00am UTC. Each meeting will generally work through open [issues](https://github.com/uncefact/spec-untp/issues) and [pull requests](https://github.com/uncefact/spec-untp/pulls). 

|Meeting|Agenda|Summary|Recording|
|---|---|---|---|
|2024-01-11|kick-off| walked through this site and agreed to split into two groups (technical / policy) | [Zoom Recording](https://us02web.zoom.us/rec/share/jX87C2PZ55iY3hFW-5L2rroXL7HoGY20Qg_m2h0B6a92_u6nk7tKkvfUKfIW6HLp.c_0QNnRPl6anrzyW?startTime=1704956458000)|
|2024-01-18|Work through [issues list](https://github.com/uncefact/spec-untp/issues) | |[Zoom Recording](https://us02web.zoom.us/rec/share/oPEDPSpZGLBBP5qykEBDaG5NxxMrQu_snm3NmiqZQuGhBVxlWv5bf-70jeuqMvd5.S_8jH8Vk8IW57B0X)|
|2024-03-14|Review PRs |merged PRs to reference W3C VC interop. Provided training for non-technical people on how to propose changes|[Zoom Recording](https://us02web.zoom.us/rec/share/fdrIhDXrEvwLcB5v08kdraTfC_7ywRWeYFa-J-LTpGxnCDdxVM6iwyQze_P2BX_z.c7dLspw0q6KCGQ0e?startTime=1710399547000)|
|2024-03-28|Discuss DPP|see [DDP Model Discussion](https://github.com/uncefact/spec-untp/issues/38)| [zoom recording](https://us02web.zoom.us/rec/share/HrpLjWU_cLtjo-gHIAs9xjSRIm_NzfVhxzld18XPPYMQKSpwcWo_b_H_7RRrwiwD.QqsvfDxuKkcwmxZD?startTime=1711569572000)|
|2024-04-04|Work through PRs and Issues|Review of DPP changes|[zoom recording](https://us02web.zoom.us/rec/share/zVeXVEPoDTQ47d6_rczVyrNDGiD6Vc21fy64MkDh2a4165B59cZ4ZIqCA1oF2gMX.htabo2zwpxjDMvmI)
|2024-04-11|Work through PRs and Issues|Verifiable credential requirements & technology patterns|[zoom recording](https://us02web.zoom.us/rec/share/RaLiDGP2pyCmOAPFqpJRcEnF9ojg8WabMv1L2xuKSHoKlAJCyCW3F_AZcvyVPptx.N2Z6iGWG3RjymbqN)|









