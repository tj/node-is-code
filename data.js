module.exports = [ { names: [ 'Clipper', 'XBase' ],
    matches: [ /^.+\.PRG$/, /^.+\.prg$/ ] },
  { names: [ 'Cucumber', 'cucumber', 'Gherkin', 'gherkin' ],
    matches: [ /^.+\.feature$/ ] },
  { names: [ 'RobotFramework', 'robotframework' ],
    matches: [ /^.+\.txt$/ ] },
  { names: [ 'abap' ], matches: [ /^.+\.abap$/ ] },
  { names: [ 'ada', 'ada95ada2005' ],
    matches: [ /^.+\.adb$/, /^.+\.ads$/, /^.+\.ada$/ ] },
  { names: [ 'ahk' ], matches: [ /^.+\.ahk$/, /^.+\.ahkl$/ ] },
  { names: [ 'antlr-as', 'antlr-actionscript' ],
    matches: [ /^.+\.G$/, /^.+\.g$/ ] },
  { names: [ 'antlr-cpp' ], matches: [ /^.+\.G$/, /^.+\.g$/ ] },
  { names: [ 'antlr-csharp', 'antlr-c#' ],
    matches: [ /^.+\.G$/, /^.+\.g$/ ] },
  { names: [ 'antlr-java' ], matches: [ /^.+\.G$/, /^.+\.g$/ ] },
  { names: [ 'antlr-objc' ], matches: [ /^.+\.G$/, /^.+\.g$/ ] },
  { names: [ 'antlr-perl' ], matches: [ /^.+\.G$/, /^.+\.g$/ ] },
  { names: [ 'antlr-python' ], matches: [ /^.+\.G$/, /^.+\.g$/ ] },
  { names: [ 'antlr-ruby', 'antlr-rb' ],
    matches: [ /^.+\.G$/, /^.+\.g$/ ] },
  { names: [ 'apacheconf', 'aconf', 'apache' ],
    matches: [ /^\.htaccess$/, /^apache\.conf$/, /^apache2\.conf$/ ] },
  { names: [ 'applescript' ], matches: [ /^.+\.applescript$/ ] },
  { names: [ 'as', 'actionscript' ], matches: [ /^.+\.as$/ ] },
  { names: [ 'as3', 'actionscript3' ], matches: [ /^.+\.as$/ ] },
  { names: [ 'aspectj' ], matches: [ /^.+\.aj$/ ] },
  { names: [ 'aspx-cs' ],
    matches:
     [ /^.+\.aspx$/,
       /^.+\.asax$/,
       /^.+\.ascx$/,
       /^.+\.ashx$/,
       /^.+\.asmx$/,
       /^.+\.axd$/ ] },
  { names: [ 'aspx-vb' ],
    matches:
     [ /^.+\.aspx$/,
       /^.+\.asax$/,
       /^.+\.ascx$/,
       /^.+\.ashx$/,
       /^.+\.asmx$/,
       /^.+\.axd$/ ] },
  { names: [ 'asy', 'asymptote' ], matches: [ /^.+\.asy$/ ] },
  { names: [ 'autoit', 'Autoit' ], matches: [ /^.+\.au3$/ ] },
  { names: [ 'awk', 'gawk', 'mawk', 'nawk' ],
    matches: [ /^.+\.awk$/ ] },
  { names: [ 'bash', 'sh', 'ksh' ],
    matches:
     [ /^.+\.sh$/,
       /^.+\.ksh$/,
       /^.+\.bash$/,
       /^.+\.ebuild$/,
       /^.+\.eclass$/,
       /^\.bashrc$/,
       /^bashrc$/,
       /^\.bash_.+$/,
       /^bash_.+$/ ] },
  { names: [ 'bat' ], matches: [ /^.+\.bat$/, /^.+\.cmd$/ ] },
  { names: [ 'befunge' ], matches: [ /^.+\.befunge$/ ] },
  { names: [ 'blitzmax', 'bmax' ], matches: [ /^.+\.bmx$/ ] },
  { names: [ 'boo' ], matches: [ /^.+\.boo$/ ] },
  { names: [ 'brainfuck', 'bf' ],
    matches: [ /^.+\.bf$/, /^.+\.b$/ ] },
  { names: [ 'bro' ], matches: [ /^.+\.bro$/ ] },
  { names: [ 'bugs', 'winbugs', 'openbugs' ],
    matches: [ /^.+\.bug$/ ] },
  { names: [ 'c-objdump' ], matches: [ /^.+\.c-objdump$/ ] },
  { names: [ 'c' ],
    matches: [ /^.+\.c$/, /^.+\.h$/, /^.+\.idc$/ ] },
  { names: [ 'ca65' ], matches: [ /^.+\.s$/ ] },
  { names: [ 'cbmbas' ], matches: [ /^.+\.bas$/ ] },
  { names: [ 'ceylon' ], matches: [ /^.+\.ceylon$/ ] },
  { names: [ 'cfengine3', 'cf3' ], matches: [ /^.+\.cf$/ ] },
  { names: [ 'cfm' ],
    matches: [ /^.+\.cfm$/, /^.+\.cfml$/, /^.+\.cfc$/ ] },
  { names: [ 'cheetah', 'spitfire' ],
    matches: [ /^.+\.tmpl$/, /^.+\.spt$/ ] },
  { names: [ 'clojure', 'clj' ], matches: [ /^.+\.clj$/ ] },
  { names: [ 'cmake' ],
    matches: [ /^.+\.cmake$/, /^CMakeLists\.txt$/ ] },
  { names: [ 'cobol' ],
    matches: [ /^.+\.cob$/, /^.+\.COB$/, /^.+\.cpy$/, /^.+\.CPY$/ ] },
  { names: [ 'cobolfree' ],
    matches: [ /^.+\.cbl$/, /^.+\.CBL$/ ] },
  { names: [ 'coffee-script', 'coffeescript' ],
    matches: [ /^.+\.coffee$/ ] },
  { names: [ 'common-lisp', 'cl' ],
    matches: [ /^.+\.cl$/, /^.+\.lisp$/, /^.+\.el$/ ] },
  { names: [ 'console' ], matches: [ /^.+\.sh-session$/ ] },
  { names: [ 'control' ], matches: [ /^control$/ ] },
  { names: [ 'coq' ], matches: [ /^.+\.v$/ ] },
  { names: [ 'cpp', 'c++' ],
    matches:
     [ /^.+\.cpp$/,
       /^.+\.hpp$/,
       /^.+\.c\+\+$/,
       /^.+\.h\+\+$/,
       /^.+\.cc$/,
       /^.+\.hh$/,
       /^.+\.cxx$/,
       /^.+\.hxx$/,
       /^.+\.C$/,
       /^.+\.H$/,
       /^.+\.cp$/,
       /^.+\.CPP$/ ] },
  { names: [ 'cpp-objdump', 'c++-objdumb', 'cxx-objdump' ],
    matches:
     [ /^.+\.cpp-objdump$/,
       /^.+\.c\+\+-objdump$/,
       /^.+\.cxx-objdump$/ ] },
  { names: [ 'croc' ], matches: [ /^.+\.croc$/ ] },
  { names: [ 'csharp', 'c#' ], matches: [ /^.+\.cs$/ ] },
  { names: [ 'css' ], matches: [ /^.+\.css$/ ] },
  { names: [ 'cuda', 'cu' ],
    matches: [ /^.+\.cu$/, /^.+\.cuh$/ ] },
  { names: [ 'cython', 'pyx' ],
    matches: [ /^.+\.pyx$/, /^.+\.pxd$/, /^.+\.pxi$/ ] },
  { names: [ 'd-objdump' ], matches: [ /^.+\.d-objdump$/ ] },
  { names: [ 'd' ], matches: [ /^.+\.d$/, /^.+\.di$/ ] },
  { names: [ 'dart' ], matches: [ /^.+\.dart$/ ] },
  { names: [ 'delphi', 'pas', 'pascal', 'objectpascal' ],
    matches: [ /^.+\.pas$/ ] },
  { names: [ 'dg' ], matches: [ /^.+\.dg$/ ] },
  { names: [ 'diff', 'udiff' ],
    matches: [ /^.+\.diff$/, /^.+\.patch$/ ] },
  { names: [ 'dpatch' ],
    matches: [ /^.+\.dpatch$/, /^.+\.darcspatch$/ ] },
  { names: [ 'dtd' ], matches: [ /^.+\.dtd$/ ] },
  { names: [ 'duel', 'Duel Engine', 'Duel View', 'JBST', 'jbst', 'JsonML+BST' ],
    matches: [ /^.+\.duel$/, /^.+\.jbst$/ ] },
  { names: [ 'dylan-lid', 'lid' ],
    matches: [ /^.+\.lid$/, /^.+\.hdp$/ ] },
  { names: [ 'dylan' ],
    matches: [ /^.+\.dylan$/, /^.+\.dyl$/, /^.+\.intr$/ ] },
  { names: [ 'ec' ], matches: [ /^.+\.ec$/, /^.+\.eh$/ ] },
  { names: [ 'ecl' ], matches: [ /^.+\.ecl$/ ] },
  { names: [ 'elixir', 'ex', 'exs' ],
    matches: [ /^.+\.ex$/, /^.+\.exs$/ ] },
  { names: [ 'erl' ], matches: [ /^.+\.erl-sh$/ ] },
  { names: [ 'erlang' ],
    matches: [ /^.+\.erl$/, /^.+\.hrl$/, /^.+\.es$/, /^.+\.escript$/ ] },
  { names: [ 'evoque' ], matches: [ /^.+\.evoque$/ ] },
  { names: [ 'factor' ], matches: [ /^.+\.factor$/ ] },
  { names: [ 'fan' ], matches: [ /^.+\.fan$/ ] },
  { names: [ 'fancy', 'fy' ],
    matches: [ /^.+\.fy$/, /^.+\.fancypack$/ ] },
  { names: [ 'felix', 'flx' ],
    matches: [ /^.+\.flx$/, /^.+\.flxh$/ ] },
  { names: [ 'fortran' ],
    matches: [ /^.+\.f$/, /^.+\.f90$/, /^.+\.F$/, /^.+\.F90$/ ] },
  { names: [ 'fsharp' ], matches: [ /^.+\.fs$/, /^.+\.fsi$/ ] },
  { names: [ 'gas' ], matches: [ /^.+\.s$/, /^.+\.S$/ ] },
  { names: [ 'genshi', 'kid', 'xml+genshi', 'xml+kid' ],
    matches: [ /^.+\.kid$/ ] },
  { names: [ 'glsl' ],
    matches: [ /^.+\.vert$/, /^.+\.frag$/, /^.+\.geo$/ ] },
  { names: [ 'gnuplot' ], matches: [ /^.+\.plot$/, /^.+\.plt$/ ] },
  { names: [ 'go' ], matches: [ /^.+\.go$/ ] },
  { names: [ 'gooddata-cl' ], matches: [ /^.+\.gdc$/ ] },
  { names: [ 'gosu' ],
    matches: [ /^.+\.gs$/, /^.+\.gsx$/, /^.+\.gsp$/, /^.+\.vark$/ ] },
  { names: [ 'groff', 'nroff', 'man' ],
    matches: [ /^.+\.[1234567]$/, /^.+\.man$/ ] },
  { names: [ 'groovy' ], matches: [ /^.+\.groovy$/ ] },
  { names: [ 'gst' ], matches: [ /^.+\.gst$/ ] },
  { names: [ 'haml', 'HAML' ], matches: [ /^.+\.haml$/ ] },
  { names: [ 'haskell', 'hs' ], matches: [ /^.+\.hs$/ ] },
  { names: [ 'haxeml', 'hxml' ], matches: [ /^.+\.hxml$/ ] },
  { names: [ 'html+evoque' ], matches: [ /^.+\.html$/ ] },
  { names: [ 'html+php' ], matches: [ /^.+\.phtml$/ ] },
  { names: [ 'html' ],
    matches: [ /^.+\.html$/, /^.+\.htm$/, /^.+\.xhtml$/, /^.+\.xslt$/ ] },
  { names: [ 'hx', 'haXe' ], matches: [ /^.+\.hx$/ ] },
  { names: [ 'hybris', 'hy' ],
    matches: [ /^.+\.hy$/, /^.+\.hyb$/ ] },
  { names: [ 'idl' ], matches: [ /^.+\.pro$/ ] },
  { names: [ 'ini', 'cfg' ],
    matches: [ /^.+\.ini$/, /^.+\.cfg$/ ] },
  { names: [ 'io' ], matches: [ /^.+\.io$/ ] },
  { names: [ 'ioke', 'ik' ], matches: [ /^.+\.ik$/ ] },
  { names: [ 'irc' ], matches: [ /^.+\.weechatlog$/ ] },
  { names: [ 'jade', 'JADE' ], matches: [ /^.+\.jade$/ ] },
  { names: [ 'jags' ], matches: [ /^.+\.jag$/, /^.+\.bug$/ ] },
  { names: [ 'java' ], matches: [ /^.+\.java$/ ] },
  { names: [ 'js', 'javascript' ], matches: [ /^.+\.js$/ ] },
  { names: [ 'json' ], matches: [ /^.+\.json$/ ] },
  { names: [ 'jsp' ], matches: [ /^.+\.jsp$/ ] },
  { names: [ 'julia', 'jl' ], matches: [ /^.+\.jl$/ ] },
  { names: [ 'kconfig', 'menuconfig', 'linux-config', 'kernel-config' ],
    matches:
     [ /^Kconfig$/,
       /^.+Config\.in.+$/,
       /^external\.in.+$/,
       /^standard-modules\.in$/ ] },
  { names: [ 'koka' ], matches: [ /^.+\.kk$/, /^.+\.kki$/ ] },
  { names: [ 'kotlin' ], matches: [ /^.+\.kt$/ ] },
  { names: [ 'lasso', 'lassoscript' ],
    matches: [ /^.+\.lasso$/, /^.+\.lasso[89]$/ ] },
  { names: [ 'lhs', 'literate-haskell' ],
    matches: [ /^.+\.lhs$/ ] },
  { names: [ 'live-script', 'livescript' ],
    matches: [ /^.+\.ls$/ ] },
  { names: [ 'llvm' ], matches: [ /^.+\.ll$/ ] },
  { names: [ 'logtalk' ], matches: [ /^.+\.lgt$/ ] },
  { names: [ 'lua' ], matches: [ /^.+\.lua$/, /^.+\.wlua$/ ] },
  { names: [ 'make', 'makefile', 'mf', 'bsdmake' ],
    matches:
     [ /^.+\.mak$/,
       /^Makefile$/,
       /^makefile$/,
       /^Makefile\..+$/,
       /^GNUmakefile$/ ] },
  { names: [ 'mako' ], matches: [ /^.+\.mao$/ ] },
  { names: [ 'maql' ], matches: [ /^.+\.maql$/ ] },
  { names: [ 'mason' ],
    matches:
     [ /^.+\.m$/,
       /^.+\.mhtml$/,
       /^.+\.mc$/,
       /^.+\.mi$/,
       /^autohandler$/,
       /^dhandler$/ ] },
  { names: [ 'matlab' ], matches: [ /^.+\.m$/ ] },
  { names: [ 'minid' ], matches: [ /^.+\.md$/ ] },
  { names: [ 'modelica' ], matches: [ /^.+\.mo$/ ] },
  { names: [ 'modula2', 'm2' ],
    matches: [ /^.+\.def$/, /^.+\.mod$/ ] },
  { names: [ 'monkey' ], matches: [ /^.+\.monkey$/ ] },
  { names: [ 'moocode' ], matches: [ /^.+\.moo$/ ] },
  { names: [ 'moon', 'moonscript' ], matches: [ /^.+\.moon$/ ] },
  { names: [ 'mscgen', 'msc' ], matches: [ /^.+\.msc$/ ] },
  { names: [ 'mupad' ], matches: [ /^.+\.mu$/ ] },
  { names: [ 'mxml' ], matches: [ /^.+\.mxml$/ ] },
  { names: [ 'myghty' ],
    matches: [ /^.+\.myt$/, /^autodelegate$/ ] },
  { names: [ 'nasm' ], matches: [ /^.+\.asm$/, /^.+\.ASM$/ ] },
  { names: [ 'nemerle' ], matches: [ /^.+\.n$/ ] },
  { names: [ 'newlisp' ], matches: [ /^.+\.lsp$/, /^.+\.nl$/ ] },
  { names: [ 'newspeak' ], matches: [ /^.+\.ns2$/ ] },
  { names: [ 'nimrod', 'nim' ],
    matches: [ /^.+\.nim$/, /^.+\.nimrod$/ ] },
  { names: [ 'nsis', 'nsi', 'nsh' ],
    matches: [ /^.+\.nsi$/, /^.+\.nsh$/ ] },
  { names: [ 'objdump' ], matches: [ /^.+\.objdump$/ ] },
  { names: [ 'objective-c++', 'objectivec++', 'obj-c++', 'objc++' ],
    matches: [ /^.+\.mm$/, /^.+\.hh$/ ] },
  { names: [ 'objective-c', 'objectivec', 'obj-c', 'objc' ],
    matches: [ /^.+\.m$/, /^.+\.h$/ ] },
  { names: [ 'objective-j', 'objectivej', 'obj-j', 'objj' ],
    matches: [ /^.+\.j$/ ] },
  { names: [ 'ocaml' ],
    matches: [ /^.+\.ml$/, /^.+\.mli$/, /^.+\.mll$/, /^.+\.mly$/ ] },
  { names: [ 'octave' ], matches: [ /^.+\.m$/ ] },
  { names: [ 'ooc' ], matches: [ /^.+\.ooc$/ ] },
  { names: [ 'opa' ], matches: [ /^.+\.opa$/ ] },
  { names: [ 'openedge', 'abl', 'progress' ],
    matches: [ /^.+\.p$/, /^.+\.cls$/ ] },
  { names: [ 'perl', 'pl' ], matches: [ /^.+\.pl$/, /^.+\.pm$/ ] },
  { names: [ 'php', 'php3', 'php4', 'php5' ],
    matches: [ /^.+\.php$/, /^.+\.php[345]$/ ] },
  { names: [ 'postscript' ],
    matches: [ /^.+\.ps$/, /^.+\.eps$/ ] },
  { names: [ 'pot', 'po' ], matches: [ /^.+\.pot$/, /^.+\.po$/ ] },
  { names: [ 'pov' ], matches: [ /^.+\.pov$/, /^.+\.inc$/ ] },
  { names: [ 'powershell', 'posh', 'ps1' ],
    matches: [ /^.+\.ps1$/ ] },
  { names: [ 'prolog' ],
    matches: [ /^.+\.prolog$/, /^.+\.pro$/, /^.+\.pl$/ ] },
  { names: [ 'properties' ], matches: [ /^.+\.properties$/ ] },
  { names: [ 'protobuf' ], matches: [ /^.+\.proto$/ ] },
  { names: [ 'puppet' ], matches: [ /^.+\.pp$/ ] },
  { names: [ 'py3tb' ], matches: [ /^.+\.py3tb$/ ] },
  { names: [ 'pypylog', 'pypy' ], matches: [ /^.+\.pypylog$/ ] },
  { names: [ 'pytb' ], matches: [ /^.+\.pytb$/ ] },
  { names: [ 'python', 'py', 'sage' ],
    matches:
     [ /^.+\.py$/,
       /^.+\.pyw$/,
       /^.+\.sc$/,
       /^SConstruct$/,
       /^SConscript$/,
       /^.+\.tac$/,
       /^.+\.sage$/ ] },
  { names: [ 'qml', 'Qt Meta Language', 'Qt modeling Language' ],
    matches: [ /^.+\.qml$/ ] },
  { names: [ 'racket', 'rkt' ],
    matches: [ /^.+\.rkt$/, /^.+\.rktl$/ ] },
  { names: [ 'ragel-c' ], matches: [ /^.+\.rl$/ ] },
  { names: [ 'ragel-cpp' ], matches: [ /^.+\.rl$/ ] },
  { names: [ 'ragel-d' ], matches: [ /^.+\.rl$/ ] },
  { names: [ 'ragel-em' ], matches: [ /^.+\.rl$/ ] },
  { names: [ 'ragel-java' ], matches: [ /^.+\.rl$/ ] },
  { names: [ 'ragel-objc' ], matches: [ /^.+\.rl$/ ] },
  { names: [ 'ragel-ruby', 'ragel-rb' ], matches: [ /^.+\.rl$/ ] },
  { names: [ 'rb', 'ruby', 'duby' ],
    matches:
     [ /^.+\.rb$/,
       /^.+\.rbw$/,
       /^Rakefile$/,
       /^.+\.rake$/,
       /^.+\.gemspec$/,
       /^.+\.rbx$/,
       /^.+\.duby$/ ] },
  { names: [ 'rconsole', 'rout' ], matches: [ /^.+\.Rout$/ ] },
  { names: [ 'rd' ], matches: [ /^.+\.Rd$/ ] },
  { names: [ 'rebol' ], matches: [ /^.+\.r$/, /^.+\.r3$/ ] },
  { names: [ 'redcode' ], matches: [ /^.+\.cw$/ ] },
  { names: [ 'rhtml', 'html+erb', 'html+ruby' ],
    matches: [ /^.+\.rhtml$/ ] },
  { names: [ 'rst', 'rest', 'restructuredtext' ],
    matches: [ /^.+\.rst$/, /^.+\.rest$/ ] },
  { names: [ 'rust' ], matches: [ /^.+\.rs$/, /^.+\.rc$/ ] },
  { names: [ 'sass', 'SASS' ], matches: [ /^.+\.sass$/ ] },
  { names: [ 'scala' ], matches: [ /^.+\.scala$/ ] },
  { names: [ 'scaml', 'SCAML' ], matches: [ /^.+\.scaml$/ ] },
  { names: [ 'scheme', 'scm' ],
    matches: [ /^.+\.scm$/, /^.+\.ss$/ ] },
  { names: [ 'scilab' ],
    matches: [ /^.+\.sci$/, /^.+\.sce$/, /^.+\.tst$/ ] },
  { names: [ 'scss' ], matches: [ /^.+\.scss$/ ] },
  { names: [ 'smali' ], matches: [ /^.+\.smali$/ ] },
  { names: [ 'smalltalk', 'squeak' ], matches: [ /^.+\.st$/ ] },
  { names: [ 'smarty' ], matches: [ /^.+\.tpl$/ ] },
  { names: [ 'sml' ],
    matches: [ /^.+\.sml$/, /^.+\.sig$/, /^.+\.fun$/ ] },
  { names: [ 'snobol' ], matches: [ /^.+\.snobol$/ ] },
  { names: [ 'sourceslist', 'sources.list' ],
    matches: [ /^sources\.list$/ ] },
  { names: [ 'sp' ], matches: [ /^.+\.sp$/ ] },
  { names: [ 'spec' ], matches: [ /^.+\.spec$/ ] },
  { names: [ 'splus', 's', 'r' ],
    matches: [ /^.+\.S$/, /^.+\.R$/, /^\.Rhistory$/, /^\.Rprofile$/ ] },
  { names: [ 'sql' ], matches: [ /^.+\.sql$/ ] },
  { names: [ 'sqlite3' ], matches: [ /^.+\.sqlite3-console$/ ] },
  { names: [ 'squidconf', 'squid.conf', 'squid' ],
    matches: [ /^squid\.conf$/ ] },
  { names: [ 'ssp' ], matches: [ /^.+\.ssp$/ ] },
  { names: [ 'stan' ], matches: [ /^.+\.stan$/ ] },
  { names: [ 'sv' ], matches: [ /^.+\.sv$/, /^.+\.svh$/ ] },
  { names: [ 'tcl' ], matches: [ /^.+\.tcl$/ ] },
  { names: [ 'tcsh', 'csh' ],
    matches: [ /^.+\.tcsh$/, /^.+\.csh$/ ] },
  { names: [ 'tea' ], matches: [ /^.+\.tea$/ ] },
  { names: [ 'tex', 'latex' ],
    matches: [ /^.+\.tex$/, /^.+\.aux$/, /^.+\.toc$/ ] },
  { names: [ 'text' ], matches: [ /^.+\.txt$/ ] },
  { names: [ 'treetop' ],
    matches: [ /^.+\.treetop$/, /^.+\.tt$/ ] },
  { names: [ 'ts' ], matches: [ /^.+\.ts$/ ] },
  { names: [ 'urbiscript' ], matches: [ /^.+\.u$/ ] },
  { names: [ 'v' ], matches: [ /^.+\.v$/ ] },
  { names: [ 'vala', 'vapi' ],
    matches: [ /^.+\.vala$/, /^.+\.vapi$/ ] },
  { names: [ 'vb.net', 'vbnet' ],
    matches: [ /^.+\.vb$/, /^.+\.bas$/ ] },
  { names: [ 'velocity' ],
    matches: [ /^.+\.vm$/, /^.+\.fhtml$/ ] },
  { names: [ 'vgl' ], matches: [ /^.+\.rpf$/ ] },
  { names: [ 'vhdl' ], matches: [ /^.+\.vhdl$/, /^.+\.vhd$/ ] },
  { names: [ 'vim' ],
    matches:
     [ /^.+\.vim$/,
       /^\.vimrc$/,
       /^\.exrc$/,
       /^\.gvimrc$/,
       /^_vimrc$/,
       /^_exrc$/,
       /^_gvimrc$/,
       /^vimrc$/,
       /^gvimrc$/ ] },
  { names: [ 'xml+evoque' ], matches: [ /^.+\.xml$/ ] },
  { names: [ 'xml' ],
    matches:
     [ /^.+\.xml$/,
       /^.+\.xsl$/,
       /^.+\.rss$/,
       /^.+\.xslt$/,
       /^.+\.xsd$/,
       /^.+\.wsdl$/ ] },
  { names: [ 'xquery', 'xqy', 'xq', 'xql', 'xqm' ],
    matches:
     [ /^.+\.xqy$/,
       /^.+\.xquery$/,
       /^.+\.xq$/,
       /^.+\.xql$/,
       /^.+\.xqm$/ ] },
  { names: [ 'xslt' ],
    matches: [ /^.+\.xsl$/, /^.+\.xslt$/, /^.+\.xpl$/ ] },
  { names: [ 'xtend' ], matches: [ /^.+\.xtend$/ ] },
  { names: [ 'yaml' ], matches: [ /^.+\.yaml$/, /^.+\.yml$/ ] } ]
