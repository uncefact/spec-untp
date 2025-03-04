These changes are the changes from v0.6.0-beta5 to v0.6.0-beta6.

There are two main changes and two smaller changes.


## Hidden redefinitions which were not being identified

The first is related to the discovery that [our generated contexts were hiding illegal redefinitions](https://github.com/uncefact/spec-untp/issues/316) by not always specifying that the terms should be protected. In particular, our credentials were redefining `credentialSubject` which is defined by the verified credential context. This has now been [updated in jargon](https://github.com/jargon-sh/issues/issues/34), so we need to re-save and deal with any redefinitions that we weren't aware of.


## `Product.characteristics`

The second is related specifically to `Product.characteristics`. In the 0.6.0-beta5 release, we'd removed `Product.characteristics` as I'd incorrectly understood it was a placeholder only, an extension point for extensions to use (and defining it in the core `Product` meant it could not be redefined validly by an extension).

But it's actually meant to be able to be used in a DPP credential as a free-form key-value dict. This is tricky for jsonld (there is no free-form, terms need to be defined and [values are limited to string, number, true or false or a typed value](https://www.w3.org/TR/json-ld11/#dfn-json-ld-value) to ensure that everything can be reduced to RDF triplets).

The best solution I can think of is that we add `Product.characteristics` back to identify the placeholder but ensure it is also omitted from the context (using the Jargon `[jsonld.contextOmit]=true`). This means that both extensions or users of the vanilla DPP who want to specify `characteristics` will need to add the relevant context for `characteristics` to do so explicitly, for which we'll need to provide documentation. For users of Jargon, this will simply be creating their own `Product` which inherits from the core or DPP `Product` and adds the `characteristics` property with whatever items they define.


## Defining the expected expanded URIs for template vocabulary

This release also updates the expected full URIs for `template` and `url` when seen in `WebRenderingTemplate2022` or `RenderTemplate2024` to match what VC-Kit expects, see [comment](https://github.com/uncefact/tests-untp/pull/221#discussion_r1978347001)


## Hiding the `Template` classes

We had added the two template classes to the vocabulary with the last release, with the `#hideClass` tag so that they would not be presented on the Jargon diagram, but after each save, they re-appeared. I created [Jargon Issue 33](https://github.com/jargon-sh/issues/issues/33) which was fixed, so we just need to re-add the `#hideClass` and re-save each.


# UNTP Core changes

- Re-added `#hideClass` to the two template classes
- Re-added `Product.characteristics` but with `[jsonld.contextOmit]=true` as discussed above, and the new `[...sampleOmit]=true` (see [Jargon issue 36](https://github.com/jargon-sh/issues/issues/36)).
- Added `[jsonld.contextURI]=https://www.w3.org/2018/credentials#renderMethod#` with prefix `renderMethod` to the `template` properties and similar for `url` (only) of the `RenderTemplate2024` and `WebRenderingTemplate2022` classes (see [Jargon issue 35](https://github.com/jargon-sh/issues/issues/35))
- Saved to ensure protected terms (see earlier).


# DigitalProductPassport changes

- Re-save after updating to core 0.6.0-working
- checked no other issues / redefinitions

When checking the result before releasing, the following was noticed additionally:
- some inherited terms are redefined differently to the originals causing a redefinition error (Updated [Jargon issue 28 with comment](https://github.com/jargon-sh/issues/issues/28#issuecomment-2695996220))

I'm currently waiting on a jargon update to fix the last point above before continuing.





