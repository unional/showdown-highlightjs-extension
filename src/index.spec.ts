import test from 'ava'
import * as showdown from 'showdown'
import fixture from 'ava-fixture'
import { resolve } from 'path'
import { readFileSync } from 'fs'

import './index'

const ftest = fixture(test, 'src/fixtures')

ftest('ts', 'typescript', (t, cwd) => {
  const converter = new showdown.Converter({ extensions: [ 'highlightjs' ]})
  const text = readFileSync(resolve(cwd, 'ts.md')).toString()
  const html = converter.makeHtml(text)
  t.is(html, `<h1 id="typescriptexample">Typescript example</h1>
<pre><code class="ts language-ts"><span class="hljs-keyword">let</span> <span class="hljs-attr">x</span> = <span class="hljs-number">1</span>
</code></pre>`)
})
