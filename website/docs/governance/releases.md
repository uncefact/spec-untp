---
sidebar_position: 10
title: Release Management
---

import Disclaimer from '../\_disclaimer.mdx';

<Disclaimer />

## UNTP Version and Release Management

Within the UNTP business governance framework, there also needs to be some technical governance to ensure quality and stability of UNTP technical deliverables.

### Version Management

All UNTP artifacts are rigorously versioned following [semver](https://semver.org/) best practices. 

* Version numbers are indicated as a dot-separated triple `{major}.{minor}.{patch}`.  For example version 2.3.4.
* `{patch}` version number increments indicate non-breaking bug fixes that do not add new capabilities of features. For example, implementers should see no difference between version 1.4.5 and version 1.4.6.
* `{minor}` version number increments indicate non-breaking enhancements. For example, implementations of version 1.4.5 are still compatible with version 1.5.0 but may not take advantage of new features.
* `{major}` version number increments indicate significant and breaking releases. For example implementations of version 1.5.0 will be incompatible with version 2.0.0 and may fail in unpredictable ways.

Note that 0.x.y versions do not strictly follow semver and may include breaking changes in minor versions. However all versions after 1.0.0 first formal release will strictly observe this versioning process. 

### Release Management

Every version change is automatically published to the UNTP `test.uncefact.org/vocabulary` end point following a defined URL structure

**Linked data vocabulary (test)**

* Pattern:  `https://test.uncefact.org/vocabulary/untp/{vocab-name}/{major-version}/{artefact}`
* Example: `https://test.uncefact.org/vocabulary/untp/dpp/0/Product`

**Schema and context files (test)**

* Pattern: `https://test.uncefact.org/vocabulary/untp/{credential-type}/{versioned-file-name}`
* Example: https://test.uncefact.org/vocabulary/untp/dpp/untp-dpp-schema-0.5.0.json

When a given version meets criteria to justify a production release then the governance process will approve a release that will publish the artefacts to the UNTP `vocabulary.uncefact.org` end point. 

**Linked data vocabulary (production)**

* Pattern : `https://vocabulary.uncefact.org/untp/{vocab-name}/{major-version}/{artefact}`
* Example : `https://vocabulary.uncefact.org/untp/dpp/1/Product`

**Schema and context files (production)**

* Pattern: `https://vocabulary.uncefact.org/untp/{credential-type}/{versioned-file-name}`
* Example: `https://vocabulary.uncefact.org//untp/dpp/untp-dpp-schema-1.1.0.json`




