import Vue from 'vue'
import Vuex from 'vuex'
import {ArgdownApplication, ModelPlugin, TagPlugin, HtmlExport, JSONExport} from 'argdown-parser'
import {MapMaker, DotExport, ArgMLExport} from 'argdown-map-maker'

const app = new ArgdownApplication()
const modelPlugin = new ModelPlugin()
const tagPlugin = new TagPlugin()
const htmlExport = new HtmlExport({
  headless: true
})
const jsonExport = new JSONExport({removeEmbeddedRelations: true})
const mapMaker = new MapMaker()
const dotExport = new DotExport()
const argMLExport = new ArgMLExport()
const testInput = `# Welcome to Argdown!

[Intro]: Argdown is a simple syntax for defining argumentative 
structures, inspired by Markdown.
  + Writing a *pro & contra list* in Argdown is as 
    simple as writing a twitter message (actually we are 
    right in the middle of one).
  + But you can also 
    **logically reconstruct** more complex dialectical 
    relations between arguments or dive into 
    the details of their premise-conclusion structures.
  + Finally, you can export Argdown as a graph and create 
    **argument maps** of whole debates.

## Argdown Basics

This is a normal statement with __bold__ and _italic_ text 
and a [link](https://github.com/christianvoigt/argdown-parser).

[Statement 1]: Another statement (after a blank line), 
this time with a title defined in square brackets. 
We can use the title to refer to this statement later 
or mention it in other statements.

[Statement 2]: Let's do that now: The previous 
statement was @[Statement 1].
  + <Argument title>: Statements can be supported 
    by __arguments__. Arguments are defined by 
    using angle brackets.
  - <Another argument>: This arguments attacks @[Statement 2].
    - <Yet another argument>: Arguments can also 
      be supported or attacked.
      <!--
      By the way, 
      this is a multiline comment.
      -->

We can also do that the other way around:

[Intro]
  -> <Argument 1>
  
A blank line signals that the above "tree" of statements 
and arguments is finished and that we want to start 
with a new block (in this case a new statement).

Headings can be used to group arguments and statements together. 
In the map these groups are visualized as grey boxes.

### Argument reconstructions

So far, we have ignored the internal structure of arguments. Arguments 
consist of premises from which conclusions are inferred. We can precisely 
define this premise-conclusion structure with Argdown:

<Argument 1>

(1) First premise (this is is a normal statement 
    and you can do everything with it, we have done 
    with the statements above).
(2) [Statement 2]: We have already defined a statement 
    with this title. 
    Argdown allows you to add multiple statements 
    to the same "equivalence class" by giving them 
    the same title. The statements will then be treated 
    as logically equivalent.
--
Some inference rule (Some additional info: 1,2)
--
(3) And now the conclusion
  -> Outgoing relations of the conclusion, 
  are also interpreted as outgoing relations of 
  the whole argument.
  +> <Yet another argument>
  <!--
  The second relation is only "sketched", 
  because it does not declare which premise 
  of @<Argument 2> is supported. 
  (At this point this is not possible, 
  as we have not yet reconstructed @<Argument 2>)
  -->
  -> [Statement 1]
  
  We can also link to headings: 
  [Back to top](#heading-welcome-to-argdown) 
`

app.addPlugin(modelPlugin, 'build-model')
app.addPlugin(tagPlugin, 'build-model')
app.addPlugin(htmlExport, 'export-html')
app.addPlugin(mapMaker, 'export-dot')
app.addPlugin(dotExport, 'export-dot')
app.addPlugin(mapMaker, 'export-argml')
app.addPlugin(argMLExport, 'export-argml')
app.addPlugin(mapMaker, 'export-json')
app.addPlugin(jsonExport, 'export-json')
app.addPlugin(mapMaker, 'make-map')

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    argdownInput: testInput,
    config: {
      map: {
        excludeDisconnected: true,
        statementSelectionMode: 'statement-trees',
        statementLabelMode: 'hide-untitled',
        argumentLabelMode: 'hide-untitled',
        groupDepth: 2
      },
      dot: {
        graphVizSettings: {
          rankdir: 'BT',
          concentrate: 'true',
          ratio: 'auto',
          size: '10,10'
        }
      },
      dagre: {
        rankDir: 'BT',
        rankSep: 50,
        nodeSep: 70
      },
      model: {
        removeTagsFromText: false
      }
    },
    viewState: 'default',
    showSettings: false
  },
  mutations: {
    setArgdownInput (state, value) {
      state.argdownInput = value
    },
    setViewState (state, value) {
      state.viewState = value
    },
    toggleSettings (state) {
      state.showSettings = !state.showSettings
    }
  },
  getters: {
    argdownData: (state, getters) => {
      let config = state.config
      let data = app.parse(state.argdownInput, null, {config: config})
      data = app.run('build-model', data)
      return data
    },
    html: (state, getters) => {
      let data = app.run('export-html', getters.argdownData)
      return data.html
    },
    dot: (state, getters) => {
      let data = app.run('export-dot', getters.argdownData)
      return data.dot
    },
    argml: (state, getters) => {
      let data = app.run('export-argml', getters.argdownData)
      return data.argml
    },
    json: (state, getters) => {
      let data = app.run('export-json', getters.argdownData)
      return data.json
    },
    parserErrors: (state, getters) => {
      return getters.argdownData.parserErrors
    },
    lexerErrors: (state, getters) => {
      return getters.argdownData.lexerErrors
    },
    statements: (state, getters) => {
      return getters.argdownData.statements
    },
    arguments: (state, getters) => {
      return getters.argdownData.arguments
    },
    relations: (state, getters) => {
      return getters.argdownData.relations
    },
    ast: (state, getters) => {
      return getters.argdownData.ast
    },
    tokens: (state, getters) => {
      return getters.argdownData.tokens
    },
    map: (state, getters) => {
      let data = app.run('make-map', getters.argdownData)
      return data.map
    },
    tagsDictionary: (state, getters) => {
      return getters.argdownData.tagsDictionary
    }
  }
})
