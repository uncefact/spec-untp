These changes are the changes from v0.6.0-beta1 to v0.6.0-beta4.

The only change is the addition of the `RenderTemplate2024` and
`WebRenderingTemplate2022` types and their inclusion in each of the VCs.

This is so that DPPs or other VCs which include a `renderMethod` property
containing an object with a `template` or `url` etc., won't be rejected as
invalid jsonld (due to the terms not being defined in the context).

Both the types have the `name` property set as an ID so that they will be blue classes and [included in the context](https://github.com/jargon-sh/issues/issues/30).

See https://github.com/uncefact/spec-untp/issues/309 for the issue details.

Each VC model had the following change:
- Update the import to core 0.6.0-beta4
- Added the following to the definition of the model so that the type is included in the model's context:
```
// The following two entities ensure that render templates
// won't leave the credential as invalid jsonld
RenderTemplate2024:untp.RenderTemplate2024
  #hideClass

WebRenderingTemplate2022:untp.WebRenderingTemplate2022
  #hideClass
```
- Saved the model
- Released 0.6.0-beta4 for the model
