
# is-code

  Check if a given path looks like code (that can be parsed by pygments).

## API

### isCode(path)

```js
var isCode = require('is-code');

var lang = isCode('path/to/Makefile');

{ names: [ 'make', 'makefile', 'mf', 'bsdmake' ],
  regexps:
   [ /^.+\.mak$/,
     /^Makefile$/,
     /^makefile$/,
     /^Makefile\..+$/,
     /^GNUmakefile$/ ] }
```

## License

  MIT
