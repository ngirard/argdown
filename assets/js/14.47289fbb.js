(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{193:function(e,a,t){"use strict";t.r(a);var r=t(0),i=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"argdown-core"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#argdown-core","aria-hidden":"true"}},[e._v("#")]),e._v(" @argdown/core")]),e._v(" "),t("h2",{attrs:{id:"_1-0-0-10-16-2018"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-0-0-10-16-2018","aria-hidden":"true"}},[e._v("#")]),e._v(" 1.0.0 (10-16-2018)")]),e._v(" "),t("h3",{attrs:{id:"major-changes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#major-changes","aria-hidden":"true"}},[e._v("#")]),e._v(" Major changes")]),e._v(" "),t("ul",[t("li",[e._v("moved to Monorepo, renamed to @argdown/core")]),e._v(" "),t("li",[e._v("switched to Typescript.")]),e._v(" "),t("li",[e._v("Rewrote MapPlugin")]),e._v(" "),t("li",[e._v("Split off StatementSelectionPlugin, ArgumentSelectionPlugin, PreselectionPlugin, RegroupPlugin, GroupPlugin, ColorPlugin")]),e._v(" "),t("li",[e._v("YAML frontmatter and metadata")]),e._v(" "),t("li",[e._v("Added a lot of configuration options (selection, grouping, colorizing, customizing nodes)")]),e._v(" "),t("li",[e._v("Added loose and strict mode for switching between attack/support contrary/entails for s2s relations (#69 Strict mode for entailment and contrary relations)")])]),e._v(" "),t("h3",{attrs:{id:"minor-changes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#minor-changes","aria-hidden":"true"}},[e._v("#")]),e._v(" Minor changes")]),e._v(" "),t("ul",[t("li",[e._v("upgraded Chevrotain, made parser compatible with new version")])]),e._v(" "),t("h3",{attrs:{id:"bug-fixes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bug-fixes","aria-hidden":"true"}},[e._v("#")]),e._v(" Bug fixes")]),e._v(" "),t("ul",[t("li",[e._v("#71 Arg disappears if contradictory instead of contrary relation")]),e._v(" "),t("li",[e._v("#59 Linter: Argument Syntax")]),e._v(" "),t("li",[e._v("#64 Syntax error for Argument conclusion produces unhelpful error message.")])]),e._v(" "),t("h2",{attrs:{id:"_0-8-7-02-06-2018"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-8-7-02-06-2018","aria-hidden":"true"}},[e._v("#")]),e._v(" 0.8.7 (02-06-2018)")]),e._v(" "),t("h3",{attrs:{id:"minor-changes-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#minor-changes-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Minor changes")]),e._v(" "),t("ul",[t("li",[e._v("added location information to argument descriptions")])]),e._v(" "),t("h2",{attrs:{id:"_0-8-6-01-06-2018"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-8-6-01-06-2018","aria-hidden":"true"}},[e._v("#")]),e._v(" 0.8.6 (01-06-2018)")]),e._v(" "),t("h3",{attrs:{id:"minor-changes-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#minor-changes-3","aria-hidden":"true"}},[e._v("#")]),e._v(" Minor Changes")]),e._v(" "),t("ul",[t("li",[e._v("added location information to all rule nodes")]),e._v(" "),t("li",[e._v("added location information to statements and arguments")]),e._v(" "),t("li",[e._v("added location information and heading reference to sections (only startLine and startColumn)")]),e._v(" "),t("li",[e._v("added title for definition and reference nodes")])]),e._v(" "),t("h2",{attrs:{id:"_0-8-5-05-28-2018"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-8-5-05-28-2018","aria-hidden":"true"}},[e._v("#")]),e._v(" 0.8.5 (05-28-2018)")]),e._v(" "),t("h3",{attrs:{id:"minor-changes-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#minor-changes-4","aria-hidden":"true"}},[e._v("#")]),e._v(" Minor Changes")]),e._v(" "),t("ul",[t("li",[e._v("lexer performance optimization: added custom token start char hints (see http://sap.github.io/chevrotain/docs/guide/resolving_lexer_errors.html#CUSTOM_OPTIMIZE)")]),e._v(" "),t("li",[e._v("parser performance optimization: OR caching, see point 3 at http://sap.github.io/chevrotain/docs/FAQ.html#major-performance-benefits")]),e._v(" "),t("li",[e._v("added tagsDictionary to JSON export.")])]),e._v(" "),t("h3",{attrs:{id:"bug-fixes-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bug-fixes-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Bug fixes")]),e._v(" "),t("ul",[t("li",[e._v("JSON export includes labelTitle and labelText for map nodes")])]),e._v(" "),t("h2",{attrs:{id:"_0-8-4-05-24-2018"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-8-4-05-24-2018","aria-hidden":"true"}},[e._v("#")]),e._v(" 0.8.4 (05-24-2018)")]),e._v(" "),t("h3",{attrs:{id:"bug-fixes-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bug-fixes-3","aria-hidden":"true"}},[e._v("#")]),e._v(" Bug fixes")]),e._v(" "),t("ul",[t("li",[e._v("Removed data-line attribute from argument html elements")]),e._v(" "),t("li",[e._v("fixed line numbers for inferences")])]),e._v(" "),t("h3",{attrs:{id:"minor-changes-5"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#minor-changes-5","aria-hidden":"true"}},[e._v("#")]),e._v(" Minor changes")]),e._v(" "),t("ul",[t("li",[e._v("added has-line class to all html elements with line numbers.")])]),e._v(" "),t("h2",{attrs:{id:"_0-8-3-05-16-2018"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-8-3-05-16-2018","aria-hidden":"true"}},[e._v("#")]),e._v(" 0.8.3 (05-16-2018)")]),e._v(" "),t("h3",{attrs:{id:"minor-changes-6"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#minor-changes-6","aria-hidden":"true"}},[e._v("#")]),e._v(" Minor changes")]),e._v(" "),t("ul",[t("li",[e._v("Parser: Added startLine information for block elements (statements, arguments, relations, list items).")]),e._v(" "),t("li",[e._v("HTML export: Added data-line attributes for block elements. This will make it possible to sync scrolling in VS Code preview.")]),e._v(" "),t("li",[e._v("HTML export: added configuration options (will be used in VS Code preview) to change validateLink and normalizeLink behaviour.")])]),e._v(" "),t("h3",{attrs:{id:"bug-fixes-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bug-fixes-4","aria-hidden":"true"}},[e._v("#")]),e._v(" Bug fixes")]),e._v(" "),t("ul",[t("li",[e._v("Fixed line numbers for relations, argument statements, inferences and list items. The lexer now puts all single line breaks in a special group, instead of skipping them completely. This makes it possible to ignore single line breaks in the parser, but still check the lexing context for line breaks.")])]),e._v(" "),t("h2",{attrs:{id:"_0-8-2-05-15-2018"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-8-2-05-15-2018","aria-hidden":"true"}},[e._v("#")]),e._v(" 0.8.2 (05-15-2018)")]),e._v(" "),t("h3",{attrs:{id:"minor-changes-7"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#minor-changes-7","aria-hidden":"true"}},[e._v("#")]),e._v(" Minor changes")]),e._v(" "),t("ul",[t("li",[e._v("Improved security of HTML Export: link validation")]),e._v(" "),t("li",[e._v("Added utils for link validation/normalization (copied from Markdown-It)")])]),e._v(" "),t("h2",{attrs:{id:"_0-8-1-04-10-2018"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-8-1-04-10-2018","aria-hidden":"true"}},[e._v("#")]),e._v(" 0.8.1 (04-10-2018)")]),e._v(" "),t("h3",{attrs:{id:"minor-changes-8"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#minor-changes-8","aria-hidden":"true"}},[e._v("#")]),e._v(" Minor changes")]),e._v(" "),t("ul",[t("li",[e._v("Plugins can now use the prepare method to add default settings to the request object before argdownListeners and the run method are called. Plugins no longer have to keep any kind of state (see Readme for details).")])]),e._v(" "),t("h3",{attrs:{id:"bug-fixes-5"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bug-fixes-5","aria-hidden":"true"}},[e._v("#")]),e._v(" Bug fixes")]),e._v(" "),t("ul",[t("li",[e._v("Windows line endings in argument reconstructions and list items no longer produce lexer errors.")])]),e._v(" "),t("h2",{attrs:{id:"_0-8-0-03-22-2018"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-8-0-03-22-2018","aria-hidden":"true"}},[e._v("#")]),e._v(" 0.8.0 (03-22-2018)")]),e._v(" "),t("h3",{attrs:{id:"breaking-changes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#breaking-changes","aria-hidden":"true"}},[e._v("#")]),e._v(" Breaking Changes")]),e._v(" "),t("ul",[t("li",[e._v("changed application and plugin structure: app.run(request) expects a request object with an input field, a process array, containing the processors to be run, and configuration options. Plugins now get passed a request and a response object and are expected to add their data to the response and return it.")])]),e._v(" "),t("h2",{attrs:{id:"_0-7-2-02-21-2018"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-7-2-02-21-2018","aria-hidden":"true"}},[e._v("#")]),e._v(" 0.7.2 (02-21-2018)")]),e._v(" "),t("h4",{attrs:{id:"bug-fixes-6"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bug-fixes-6","aria-hidden":"true"}},[e._v("#")]),e._v(" Bug fixes")]),e._v(" "),t("ul",[t("li",[e._v("fixed typo in logAstRecursively")])]),e._v(" "),t("h2",{attrs:{id:"_0-7-1-02-21-2018"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-7-1-02-21-2018","aria-hidden":"true"}},[e._v("#")]),e._v(" 0.7.1 (02-21-2018)")]),e._v(" "),t("h4",{attrs:{id:"bug-fixes-7"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bug-fixes-7","aria-hidden":"true"}},[e._v("#")]),e._v(" Bug fixes")]),e._v(" "),t("ul",[t("li",[e._v("removed occurences of chevrotain.getTokenConstructor")])]),e._v(" "),t("h2",{attrs:{id:"_0-7-0-02-21-2018"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-7-0-02-21-2018","aria-hidden":"true"}},[e._v("#")]),e._v(" 0.7.0 (02-21-2018)")]),e._v(" "),t("h4",{attrs:{id:"major-changes-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#major-changes-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Major Changes")]),e._v(" "),t("ul",[t("li",[e._v("Error recovery")])]),e._v(" "),t("h4",{attrs:{id:"minor-changes-9"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#minor-changes-9","aria-hidden":"true"}},[e._v("#")]),e._v(" Minor Changes")]),e._v(" "),t("ul",[t("li",[e._v("Upgrade to Chevrotain 2.0.2")]),e._v(" "),t("li",[e._v("Made chevrotain.EOF accessible as ArgdownLexer.EOF")]),e._v(" "),t("li",[e._v("Added CHANGELOG.md")])])])}],!1,null,null,null);i.options.__file="argdown-core.md";a.default=i.exports}}]);