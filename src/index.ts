import * as showdown from 'showdown'
import * as highlightjs from 'highlightjs'

showdown.extension('highlightjs', function () {
  function htmlunencode(text) {
    return (
      text
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
    );
  }
  // use new shodown's regexp engine to conditionally parse codeblocks
  const left = '<pre><code\\b[^>]*>'
  const right = '</code></pre>'
  const flags = 'g'
  function replacement(wholeMatch, match, left, right) {
    // unescape match to prevent double escaping
    match = htmlunencode(match);
    return left + highlightjs.highlightAuto(match).value + right;
  };

  return [
    {
      type: 'output',
      filter: function (text, converter, options) {
        return showdown.helper.replaceRecursiveRegExp(text, replacement, left, right, flags);
      }
    }
  ];
});
