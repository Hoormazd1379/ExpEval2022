//EJS Compiled Views - This file was automatically generated on Fri Dec 23 2022 13:18:53 GMT+0100 (Central European Standard Time)
 ejs.views_include = function(locals) {
     
     return function(path, d) {
         console.log("ejs.views_include",path,d);
         return ejs["views_"+path.replace(/\//g,"_").replace(/-/g,"_")]({...d,...locals}, null, ejs.views_include(locals));
     }
 };
 ejs.views_csv = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<!DOCTYPE html>\n<html lang=\"en\">\n    <head>\n        <meta charset=\"UTF-8\"/>\n        <meta name=\"author\" content=\"Hoormazd Pirayeshfar\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n        <link rel=\"stylesheet\" href=\"/css/style.css\">\n        <title>CamelCase vs kebab-case</title>\n    </head>\n    <body>\n        <section class=\"container\">\n            \n        </section>\n        \n        <script class=\"std\" src=\"/js/ejs.min.js\"></script>\n        <script class=\"std\" src=\"/js/api-client.js\"></script>\n        <script class=\"std\" src=\"/js/csv.js\"></script>\n        <script>\n            var headers = <%-JSON.stringify(headers)%>\n            var output = <%-JSON.stringify(output)%>\n            exportCSVFile(headers,output,'export');\n        </script>\n        <script class=\"std\" src=\"/js/views.js\"></script>\n      </body>\n</html>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<!DOCTYPE html>\n<html lang=\"en\">\n    <head>\n        <meta charset=\"UTF-8\"/>\n        <meta name=\"author\" content=\"Hoormazd Pirayeshfar\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n        <link rel=\"stylesheet\" href=\"/css/style.css\">\n        <title>CamelCase vs kebab-case</title>\n    </head>\n    <body>\n        <section class=\"container\">\n            \n        </section>\n        \n        <script class=\"std\" src=\"/js/ejs.min.js\"></script>\n        <script class=\"std\" src=\"/js/api-client.js\"></script>\n        <script class=\"std\" src=\"/js/csv.js\"></script>\n        <script>\n            var headers = ")
    ; __line = 19
    ; __append(JSON.stringify(headers))
    ; __append("\n            var output = ")
    ; __line = 20
    ; __append(JSON.stringify(output))
    ; __append("\n            exportCSVFile(headers,output,'export');\n        </script>\n        <script class=\"std\" src=\"/js/views.js\"></script>\n      </body>\n</html>")
    ; __line = 25
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_q1 = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<div class=\"question\">\n    <form>\n        <h3 id=\"timer\"></h3>\n        <label>Dynamic Programming</label>\n        <input id=\"questionnumber\" type=\"hidden\" value=\"1\">\n        <input id=\"correct\" type=\"hidden\" value=\"c\">\n        <br>\n        <br>\n        <button type=\"button\" onclick=\"ans('a');\"> DynamiteProgramming </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('b');\"> DynamicPrognosing </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('c');\"> DynamicProgramming </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('d');\"> DynamicPrograming </button>\n    </form>\n</div>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<div class=\"question\">\n    <form>\n        <h3 id=\"timer\"></h3>\n        <label>Dynamic Programming</label>\n        <input id=\"questionnumber\" type=\"hidden\" value=\"1\">\n        <input id=\"correct\" type=\"hidden\" value=\"c\">\n        <br>\n        <br>\n        <button type=\"button\" onclick=\"ans('a');\"> DynamiteProgramming </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('b');\"> DynamicPrognosing </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('c');\"> DynamicProgramming </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('d');\"> DynamicPrograming </button>\n    </form>\n</div>")
    ; __line = 17
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_q10 = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<div class=\"question\">\n    <form>\n        <h3 id=\"timer\"></h3>\n        <label>Schrödinger's cat</label>\n        <input id=\"questionnumber\" type=\"hidden\" value=\"10\">\n        <input id=\"correct\" type=\"hidden\" value=\"b\">\n        <br>\n        <br>\n        <button type=\"button\" onclick=\"ans('b');\"> SchrödingersCat </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('a');\"> SchrödingerCat </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('d');\"> SchrödingersCar </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('c');\"> SchrödingersCap </button>\n        \n    </form>\n</div>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<div class=\"question\">\n    <form>\n        <h3 id=\"timer\"></h3>\n        <label>Schrödinger's cat</label>\n        <input id=\"questionnumber\" type=\"hidden\" value=\"10\">\n        <input id=\"correct\" type=\"hidden\" value=\"b\">\n        <br>\n        <br>\n        <button type=\"button\" onclick=\"ans('b');\"> SchrödingersCat </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('a');\"> SchrödingerCat </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('d');\"> SchrödingersCar </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('c');\"> SchrödingersCap </button>\n        \n    </form>\n</div>")
    ; __line = 18
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_q11 = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<div class=\"question\">\n    <form>\n        <h3 id=\"timer\"></h3>\n        <label>Leaning Tower of Pisa</label>\n        <input id=\"questionnumber\" type=\"hidden\" value=\"11\">\n        <input id=\"correct\" type=\"hidden\" value=\"a\">\n        <br>\n        <br>\n        <button type=\"button\" onclick=\"ans('a');\"> LeaningTowerOfPisa </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('d');\"> LeaningTowerOffPisa </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('c');\"> LeadingTowerOfPisa </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('b');\"> LeamingTowerOfPisa </button>\n    </form>\n</div>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<div class=\"question\">\n    <form>\n        <h3 id=\"timer\"></h3>\n        <label>Leaning Tower of Pisa</label>\n        <input id=\"questionnumber\" type=\"hidden\" value=\"11\">\n        <input id=\"correct\" type=\"hidden\" value=\"a\">\n        <br>\n        <br>\n        <button type=\"button\" onclick=\"ans('a');\"> LeaningTowerOfPisa </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('d');\"> LeaningTowerOffPisa </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('c');\"> LeadingTowerOfPisa </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('b');\"> LeamingTowerOfPisa </button>\n    </form>\n</div>")
    ; __line = 17
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_q12 = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<div class=\"question\">\n    <form>\n        <h3 id=\"timer\"></h3>\n        <label>World Cup Final</label>\n        <input id=\"questionnumber\" type=\"hidden\" value=\"12\">\n        <input id=\"correct\" type=\"hidden\" value=\"d\">\n        <br>\n        <br>\n        <button type=\"button\" onclick=\"ans('d');\"> WorldCupFinal </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('a');\"> wordCupFinal </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('c');\"> WorldSupFinal </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('b');\"> WorstCupFinal </button>\n    </form>\n</div>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<div class=\"question\">\n    <form>\n        <h3 id=\"timer\"></h3>\n        <label>World Cup Final</label>\n        <input id=\"questionnumber\" type=\"hidden\" value=\"12\">\n        <input id=\"correct\" type=\"hidden\" value=\"d\">\n        <br>\n        <br>\n        <button type=\"button\" onclick=\"ans('d');\"> WorldCupFinal </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('a');\"> wordCupFinal </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('c');\"> WorldSupFinal </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('b');\"> WorstCupFinal </button>\n    </form>\n</div>")
    ; __line = 17
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_q2 = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<div class=\"question\">\n    <form>\n        <h3 id=\"timer\"></h3>\n        <label>Empire State Building</label>\n        <input id=\"questionnumber\" type=\"hidden\" value=\"2\">\n        <input id=\"correct\" type=\"hidden\" value=\"b\">\n        <br>\n        <br>\n        <button type=\"button\" onclick=\"ans('a');\"> EmpireStakeBuilding </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('b');\"> EmpireStateBuilding </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('c');\"> EmpireStatteBuilding </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('d');\"> EmpireStatesBuilding </button>\n    </form>\n</div>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<div class=\"question\">\n    <form>\n        <h3 id=\"timer\"></h3>\n        <label>Empire State Building</label>\n        <input id=\"questionnumber\" type=\"hidden\" value=\"2\">\n        <input id=\"correct\" type=\"hidden\" value=\"b\">\n        <br>\n        <br>\n        <button type=\"button\" onclick=\"ans('a');\"> EmpireStakeBuilding </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('b');\"> EmpireStateBuilding </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('c');\"> EmpireStatteBuilding </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('d');\"> EmpireStatesBuilding </button>\n    </form>\n</div>")
    ; __line = 17
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_q3 = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<div class=\"question\">\n    <form>\n        <h3 id=\"timer\"></h3>\n        <label>Red and Black Trees</label>\n        <input id=\"questionnumber\" type=\"hidden\" value=\"3\">\n        <input id=\"correct\" type=\"hidden\" value=\"a\">\n        <br>\n        <br>\n        <button type=\"button\" onclick=\"ans('a');\"> RedAndBlackTrees </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('b');\"> RedAndBlackTreas </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('c');\"> RedAndBlankTrees </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('d');\"> RedAndBlakeTrees </button>\n    </form>\n</div>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<div class=\"question\">\n    <form>\n        <h3 id=\"timer\"></h3>\n        <label>Red and Black Trees</label>\n        <input id=\"questionnumber\" type=\"hidden\" value=\"3\">\n        <input id=\"correct\" type=\"hidden\" value=\"a\">\n        <br>\n        <br>\n        <button type=\"button\" onclick=\"ans('a');\"> RedAndBlackTrees </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('b');\"> RedAndBlackTreas </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('c');\"> RedAndBlankTrees </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('d');\"> RedAndBlakeTrees </button>\n    </form>\n</div>")
    ; __line = 17
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_q4 = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<div class=\"question\">\n    <form>\n        <h3 id=\"timer\"></h3>\n        <label>Dynamic Programming</label>\n        <input id=\"questionnumber\" type=\"hidden\" value=\"4\">\n        <input id=\"correct\" type=\"hidden\" value=\"c\">\n        <br>\n        <br>\n        <button type=\"button\" onclick=\"ans('c');\"> dynamic-programming </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('b');\"> dynamic-prognosing </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('a');\"> dynamite-programming </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('d');\"> dynamic-programing </button>\n    </form>\n</div>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<div class=\"question\">\n    <form>\n        <h3 id=\"timer\"></h3>\n        <label>Dynamic Programming</label>\n        <input id=\"questionnumber\" type=\"hidden\" value=\"4\">\n        <input id=\"correct\" type=\"hidden\" value=\"c\">\n        <br>\n        <br>\n        <button type=\"button\" onclick=\"ans('c');\"> dynamic-programming </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('b');\"> dynamic-prognosing </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('a');\"> dynamite-programming </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('d');\"> dynamic-programing </button>\n    </form>\n</div>")
    ; __line = 17
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_q5 = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<div class=\"question\">\n    <form>\n        <h3 id=\"timer\"></h3>\n        <label>Empire State Building</label>\n        <input id=\"questionnumber\" type=\"hidden\" value=\"5\">\n        <input id=\"correct\" type=\"hidden\" value=\"b\">\n        <br>\n        <br>\n        <button type=\"button\" onclick=\"ans('c');\"> empire-statte-building </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('d');\"> empire-states-building </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('a');\"> empire-stake-building </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('b');\"> empire-state-building </button>\n    </form>\n</div>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<div class=\"question\">\n    <form>\n        <h3 id=\"timer\"></h3>\n        <label>Empire State Building</label>\n        <input id=\"questionnumber\" type=\"hidden\" value=\"5\">\n        <input id=\"correct\" type=\"hidden\" value=\"b\">\n        <br>\n        <br>\n        <button type=\"button\" onclick=\"ans('c');\"> empire-statte-building </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('d');\"> empire-states-building </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('a');\"> empire-stake-building </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('b');\"> empire-state-building </button>\n    </form>\n</div>")
    ; __line = 17
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_q6 = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<div class=\"question\">\n    <form>\n        <h3 id=\"timer\"></h3>\n        <label>Red and Black Trees</label>\n        <input id=\"questionnumber\" type=\"hidden\" value=\"6\">\n        <input id=\"correct\" type=\"hidden\" value=\"a\">\n        <br>\n        <br>\n        <button type=\"button\" onclick=\"ans('d');\"> red-and-blake-trees </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('a');\"> red-and-black-trees </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('c');\"> red-and-blank-trees </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('b');\"> red-and-black-treas </button>\n    </form>\n</div>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<div class=\"question\">\n    <form>\n        <h3 id=\"timer\"></h3>\n        <label>Red and Black Trees</label>\n        <input id=\"questionnumber\" type=\"hidden\" value=\"6\">\n        <input id=\"correct\" type=\"hidden\" value=\"a\">\n        <br>\n        <br>\n        <button type=\"button\" onclick=\"ans('d');\"> red-and-blake-trees </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('a');\"> red-and-black-trees </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('c');\"> red-and-blank-trees </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('b');\"> red-and-black-treas </button>\n    </form>\n</div>")
    ; __line = 17
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_q7 = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<div class=\"question\">\n    <form>\n        <h3 id=\"timer\"></h3>\n        <label>Schrödinger's cat</label>\n        <input id=\"questionnumber\" type=\"hidden\" value=\"7\">\n        <input id=\"correct\" type=\"hidden\" value=\"b\">\n        <br>\n        <br>\n        <button type=\"button\" onclick=\"ans('a');\"> schrödinger-cat </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('b');\"> schrödingers-cat </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('c');\"> schrödingers-cap </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('d');\"> schrödingers-car </button>\n    </form>\n</div>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<div class=\"question\">\n    <form>\n        <h3 id=\"timer\"></h3>\n        <label>Schrödinger's cat</label>\n        <input id=\"questionnumber\" type=\"hidden\" value=\"7\">\n        <input id=\"correct\" type=\"hidden\" value=\"b\">\n        <br>\n        <br>\n        <button type=\"button\" onclick=\"ans('a');\"> schrödinger-cat </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('b');\"> schrödingers-cat </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('c');\"> schrödingers-cap </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('d');\"> schrödingers-car </button>\n    </form>\n</div>")
    ; __line = 17
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_q8 = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<div class=\"question\">\n    <form>\n        <h3 id=\"timer\"></h3>\n        <label>Leaning Tower of Pisa</label>\n        <input id=\"questionnumber\" type=\"hidden\" value=\"8\">\n        <input id=\"correct\" type=\"hidden\" value=\"a\">\n        <br>\n        <br>\n        <button type=\"button\" onclick=\"ans('a');\"> leaning-tower-of-pisa </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('b');\"> leaming-tower-of-pisa </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('c');\"> leading-tower-of-pisa </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('d');\"> leaning-tower-off-pisa </button>\n    </form>\n</div>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<div class=\"question\">\n    <form>\n        <h3 id=\"timer\"></h3>\n        <label>Leaning Tower of Pisa</label>\n        <input id=\"questionnumber\" type=\"hidden\" value=\"8\">\n        <input id=\"correct\" type=\"hidden\" value=\"a\">\n        <br>\n        <br>\n        <button type=\"button\" onclick=\"ans('a');\"> leaning-tower-of-pisa </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('b');\"> leaming-tower-of-pisa </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('c');\"> leading-tower-of-pisa </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('d');\"> leaning-tower-off-pisa </button>\n    </form>\n</div>")
    ; __line = 17
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_q9 = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<div class=\"question\">\n    <form>\n        <h3 id=\"timer\"></h3>\n        <label>World Cup Final</label>\n        <input id=\"questionnumber\" type=\"hidden\" value=\"9\">\n        <input id=\"correct\" type=\"hidden\" value=\"d\">\n        <br>\n        <br>\n        <button type=\"button\" onclick=\"ans('a');\"> word-cup-final </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('b');\"> worst-cup-final </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('c');\"> world-sup-final </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('d');\"> world-cup-final </button>\n    </form>\n</div>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<div class=\"question\">\n    <form>\n        <h3 id=\"timer\"></h3>\n        <label>World Cup Final</label>\n        <input id=\"questionnumber\" type=\"hidden\" value=\"9\">\n        <input id=\"correct\" type=\"hidden\" value=\"d\">\n        <br>\n        <br>\n        <button type=\"button\" onclick=\"ans('a');\"> word-cup-final </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('b');\"> worst-cup-final </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('c');\"> world-sup-final </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('d');\"> world-cup-final </button>\n    </form>\n</div>")
    ; __line = 17
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_results = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<!DOCTYPE html>\n<html lang=\"en\">\n    <head>\n        <meta charset=\"UTF-8\"/>\n        <meta name=\"author\" content=\"Hoormazd Pirayeshfar\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n        <script src='https://cdn.plot.ly/plotly-2.16.1.min.js'></script>\n        <title>Results</title>\n    </head>\n    <body onload=\"init();\">\n        <section class=\"container\">\n            <a href=\"/results/download\">Download JSON</a>\n            <a href=\"/results/csv\">Download CSV</a>\n            <% \n            var camelScore = 0;\n            var camelCount = 0;\n            var camelTime = 0;\n\n            var kebab_score = 0;\n            var kebab_count = 0;\n            var kebab_time = 0;\n            \n            var total = 0;\n            var surveysanswered = 0;\n\n            results.forEach(result => {\n                surveysanswered++;\n                result.answers.forEach(answer => {\n                    if (\n                        answer.question == \"1\" || \n                        answer.question == \"2\" || \n                        answer.question == \"3\" ||\n                        answer.question == \"10\" ||\n                        answer.question == \"11\" ||\n                        answer.question == \"12\"\n                        ) {\n                        total += 1;\n                        var time = +answer.time;\n                        camelTime += time;\n                        var score = 1/time;\n                        if (answer.entered == answer.correct) {\n                            camelScore += score;\n                            camelCount += 1;\n                            \n                        }\n                        else {\n                            camelScore -= time/5;\n                        }\n                    }\n                    if (\n                        answer.question == \"4\" || \n                        answer.question == \"5\" || \n                        answer.question == \"6\" ||\n                        answer.question == \"7\" || \n                        answer.question == \"8\" || \n                        answer.question == \"9\") {\n                        var time = +answer.time;\n                        kebab_time += time;\n                        var score = 1/time;\n                        if (answer.entered == answer.correct) {\n                            kebab_score += score;\n                            kebab_count += 1;\n                        }\n                        else {\n                            kebab_score -= time/5;\n                        }\n                    }\n                });\n            }); \n            var data = [\n                {\n                    x: ['camelCase', 'kebab-case'],\n                    y: [camelScore, kebab_score],\n                    type: 'bar'\n                }\n                ];\n            var count = [\n                {\n                    x: ['camelCase', 'kebab-case'],\n                    y: [camelCount, kebab_count],\n                    type: 'bar'\n                }\n                ];\n            var time = [\n                {\n                    x: ['camelCase', 'kebab-case'],\n                    y: [camelTime/total, kebab_time/total],\n                    type: 'bar'\n                }\n                ];\n            %>\n            <h1>Over all score from <%-surveysanswered%> surveys answered:</h1>\n            <div id=\"graph1\"></div>\n            <br>\n\n            <h1>Correct answer count out of <%- total%> questions:</h1>\n            <div id=\"graph2\"></div>\n            <br>\n\n            <h1>Average answering times (s)</h1>\n            <div id=\"graph3\"></div>\n            <br>\n            <script>\n                Plotly.newPlot('graph1', <%-JSON.stringify(data)%>);\n                Plotly.newPlot('graph2', <%-JSON.stringify(count)%>);\n                Plotly.newPlot('graph3', <%-JSON.stringify(time)%>);\n            </script>\n            <div>\n                <%-JSON.stringify(results)%>\n            </div>\n        </section>\n      </body>\n</html>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<!DOCTYPE html>\n<html lang=\"en\">\n    <head>\n        <meta charset=\"UTF-8\"/>\n        <meta name=\"author\" content=\"Hoormazd Pirayeshfar\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n        <script src='https://cdn.plot.ly/plotly-2.16.1.min.js'></script>\n        <title>Results</title>\n    </head>\n    <body onload=\"init();\">\n        <section class=\"container\">\n            <a href=\"/results/download\">Download JSON</a>\n            <a href=\"/results/csv\">Download CSV</a>\n            ")
    ; __line = 14
    ;  
            var camelScore = 0;
            var camelCount = 0;
            var camelTime = 0;

            var kebab_score = 0;
            var kebab_count = 0;
            var kebab_time = 0;
            
            var total = 0;
            var surveysanswered = 0;

            results.forEach(result => {
                surveysanswered++;
                result.answers.forEach(answer => {
                    if (
                        answer.question == "1" || 
                        answer.question == "2" || 
                        answer.question == "3" ||
                        answer.question == "10" ||
                        answer.question == "11" ||
                        answer.question == "12"
                        ) {
                        total += 1;
                        var time = +answer.time;
                        camelTime += time;
                        var score = 1/time;
                        if (answer.entered == answer.correct) {
                            camelScore += score;
                            camelCount += 1;
                            
                        }
                        else {
                            camelScore -= time/5;
                        }
                    }
                    if (
                        answer.question == "4" || 
                        answer.question == "5" || 
                        answer.question == "6" ||
                        answer.question == "7" || 
                        answer.question == "8" || 
                        answer.question == "9") {
                        var time = +answer.time;
                        kebab_time += time;
                        var score = 1/time;
                        if (answer.entered == answer.correct) {
                            kebab_score += score;
                            kebab_count += 1;
                        }
                        else {
                            kebab_score -= time/5;
                        }
                    }
                });
            }); 
            var data = [
                {
                    x: ['camelCase', 'kebab-case'],
                    y: [camelScore, kebab_score],
                    type: 'bar'
                }
                ];
            var count = [
                {
                    x: ['camelCase', 'kebab-case'],
                    y: [camelCount, kebab_count],
                    type: 'bar'
                }
                ];
            var time = [
                {
                    x: ['camelCase', 'kebab-case'],
                    y: [camelTime/total, kebab_time/total],
                    type: 'bar'
                }
                ];
            
    ; __line = 91
    ; __append("\n            <h1>Over all score from ")
    ; __line = 92
    ; __append(surveysanswered)
    ; __append(" surveys answered:</h1>\n            <div id=\"graph1\"></div>\n            <br>\n\n            <h1>Correct answer count out of ")
    ; __line = 96
    ; __append( total)
    ; __append(" questions:</h1>\n            <div id=\"graph2\"></div>\n            <br>\n\n            <h1>Average answering times (s)</h1>\n            <div id=\"graph3\"></div>\n            <br>\n            <script>\n                Plotly.newPlot('graph1', ")
    ; __line = 104
    ; __append(JSON.stringify(data))
    ; __append(");\n                Plotly.newPlot('graph2', ")
    ; __line = 105
    ; __append(JSON.stringify(count))
    ; __append(");\n                Plotly.newPlot('graph3', ")
    ; __line = 106
    ; __append(JSON.stringify(time))
    ; __append(");\n            </script>\n            <div>\n                ")
    ; __line = 109
    ; __append(JSON.stringify(results))
    ; __append("\n            </div>\n        </section>\n      </body>\n</html>")
    ; __line = 113
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_tq1 = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<div class=\"question\">\n    <form>\n        <h3 id=\"timer\"></h3>\n        <label>Test Question</label>\n        <input id=\"questionnumber\" type=\"hidden\" value=\"1\">\n        <input id=\"correct\" type=\"hidden\" value=\"c\">\n        <br>\n        <br>\n        <button type=\"button\" onclick=\"tans();\"> TestQeustion </button>\n        <br>\n        <button type=\"button\" onclick=\"tans();\"> TesQuestion </button>\n        <br>\n        <button type=\"button\" onclick=\"tans();\"> TestQuestion </button>\n        <br>\n        <button type=\"button\" onclick=\"tans();\"> TestQuestoin </button>\n    </form>\n</div>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<div class=\"question\">\n    <form>\n        <h3 id=\"timer\"></h3>\n        <label>Test Question</label>\n        <input id=\"questionnumber\" type=\"hidden\" value=\"1\">\n        <input id=\"correct\" type=\"hidden\" value=\"c\">\n        <br>\n        <br>\n        <button type=\"button\" onclick=\"tans();\"> TestQeustion </button>\n        <br>\n        <button type=\"button\" onclick=\"tans();\"> TesQuestion </button>\n        <br>\n        <button type=\"button\" onclick=\"tans();\"> TestQuestion </button>\n        <br>\n        <button type=\"button\" onclick=\"tans();\"> TestQuestoin </button>\n    </form>\n</div>")
    ; __line = 17
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_csv = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<!DOCTYPE html>\n<html lang=\"en\">\n    <head>\n        <meta charset=\"UTF-8\"/>\n        <meta name=\"author\" content=\"Hoormazd Pirayeshfar\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n        <link rel=\"stylesheet\" href=\"/css/style.css\">\n        <title>CamelCase vs kebab-case</title>\n    </head>\n    <body>\n        <section class=\"container\">\n            \n        </section>\n        \n        <script class=\"std\" src=\"/js/ejs.min.js\"></script>\n        <script class=\"std\" src=\"/js/api-client.js\"></script>\n        <script class=\"std\" src=\"/js/csv.js\"></script>\n        <script>\n            var headers = <%-JSON.stringify(headers)%>\n            var output = <%-JSON.stringify(output)%>\n            exportCSVFile(headers,output,'export');\n        </script>\n        <script class=\"std\" src=\"/js/views.js\"></script>\n      </body>\n</html>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<!DOCTYPE html>\n<html lang=\"en\">\n    <head>\n        <meta charset=\"UTF-8\"/>\n        <meta name=\"author\" content=\"Hoormazd Pirayeshfar\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n        <link rel=\"stylesheet\" href=\"/css/style.css\">\n        <title>CamelCase vs kebab-case</title>\n    </head>\n    <body>\n        <section class=\"container\">\n            \n        </section>\n        \n        <script class=\"std\" src=\"/js/ejs.min.js\"></script>\n        <script class=\"std\" src=\"/js/api-client.js\"></script>\n        <script class=\"std\" src=\"/js/csv.js\"></script>\n        <script>\n            var headers = ")
    ; __line = 19
    ; __append(JSON.stringify(headers))
    ; __append("\n            var output = ")
    ; __line = 20
    ; __append(JSON.stringify(output))
    ; __append("\n            exportCSVFile(headers,output,'export');\n        </script>\n        <script class=\"std\" src=\"/js/views.js\"></script>\n      </body>\n</html>")
    ; __line = 25
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_q1 = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<div class=\"question\">\n    <form>\n        <h3 id=\"timer\"></h3>\n        <label>Dynamic Programming</label>\n        <input id=\"questionnumber\" type=\"hidden\" value=\"1\">\n        <input id=\"correct\" type=\"hidden\" value=\"c\">\n        <br>\n        <br>\n        <button type=\"button\" onclick=\"ans('a');\"> DynamiteProgramming </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('b');\"> DynamicPrognosing </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('c');\"> DynamicProgramming </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('d');\"> DynamicPrograming </button>\n    </form>\n</div>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<div class=\"question\">\n    <form>\n        <h3 id=\"timer\"></h3>\n        <label>Dynamic Programming</label>\n        <input id=\"questionnumber\" type=\"hidden\" value=\"1\">\n        <input id=\"correct\" type=\"hidden\" value=\"c\">\n        <br>\n        <br>\n        <button type=\"button\" onclick=\"ans('a');\"> DynamiteProgramming </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('b');\"> DynamicPrognosing </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('c');\"> DynamicProgramming </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('d');\"> DynamicPrograming </button>\n    </form>\n</div>")
    ; __line = 17
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_q10 = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<div class=\"question\">\n    <form>\n        <h3 id=\"timer\"></h3>\n        <label>Schrödinger's cat</label>\n        <input id=\"questionnumber\" type=\"hidden\" value=\"10\">\n        <input id=\"correct\" type=\"hidden\" value=\"b\">\n        <br>\n        <br>\n        <button type=\"button\" onclick=\"ans('b');\"> SchrödingersCat </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('a');\"> SchrödingerCat </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('d');\"> SchrödingersCar </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('c');\"> SchrödingersCap </button>\n        \n    </form>\n</div>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<div class=\"question\">\n    <form>\n        <h3 id=\"timer\"></h3>\n        <label>Schrödinger's cat</label>\n        <input id=\"questionnumber\" type=\"hidden\" value=\"10\">\n        <input id=\"correct\" type=\"hidden\" value=\"b\">\n        <br>\n        <br>\n        <button type=\"button\" onclick=\"ans('b');\"> SchrödingersCat </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('a');\"> SchrödingerCat </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('d');\"> SchrödingersCar </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('c');\"> SchrödingersCap </button>\n        \n    </form>\n</div>")
    ; __line = 18
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_q11 = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<div class=\"question\">\n    <form>\n        <h3 id=\"timer\"></h3>\n        <label>Leaning Tower of Pisa</label>\n        <input id=\"questionnumber\" type=\"hidden\" value=\"11\">\n        <input id=\"correct\" type=\"hidden\" value=\"a\">\n        <br>\n        <br>\n        <button type=\"button\" onclick=\"ans('a');\"> LeaningTowerOfPisa </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('d');\"> LeaningTowerOffPisa </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('c');\"> LeadingTowerOfPisa </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('b');\"> LeamingTowerOfPisa </button>\n    </form>\n</div>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<div class=\"question\">\n    <form>\n        <h3 id=\"timer\"></h3>\n        <label>Leaning Tower of Pisa</label>\n        <input id=\"questionnumber\" type=\"hidden\" value=\"11\">\n        <input id=\"correct\" type=\"hidden\" value=\"a\">\n        <br>\n        <br>\n        <button type=\"button\" onclick=\"ans('a');\"> LeaningTowerOfPisa </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('d');\"> LeaningTowerOffPisa </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('c');\"> LeadingTowerOfPisa </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('b');\"> LeamingTowerOfPisa </button>\n    </form>\n</div>")
    ; __line = 17
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_q12 = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<div class=\"question\">\n    <form>\n        <h3 id=\"timer\"></h3>\n        <label>World Cup Final</label>\n        <input id=\"questionnumber\" type=\"hidden\" value=\"12\">\n        <input id=\"correct\" type=\"hidden\" value=\"d\">\n        <br>\n        <br>\n        <button type=\"button\" onclick=\"ans('d');\"> WorldCupFinal </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('a');\"> wordCupFinal </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('c');\"> WorldSupFinal </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('b');\"> WorstCupFinal </button>\n    </form>\n</div>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<div class=\"question\">\n    <form>\n        <h3 id=\"timer\"></h3>\n        <label>World Cup Final</label>\n        <input id=\"questionnumber\" type=\"hidden\" value=\"12\">\n        <input id=\"correct\" type=\"hidden\" value=\"d\">\n        <br>\n        <br>\n        <button type=\"button\" onclick=\"ans('d');\"> WorldCupFinal </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('a');\"> wordCupFinal </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('c');\"> WorldSupFinal </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('b');\"> WorstCupFinal </button>\n    </form>\n</div>")
    ; __line = 17
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_q2 = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<div class=\"question\">\n    <form>\n        <h3 id=\"timer\"></h3>\n        <label>Empire State Building</label>\n        <input id=\"questionnumber\" type=\"hidden\" value=\"2\">\n        <input id=\"correct\" type=\"hidden\" value=\"b\">\n        <br>\n        <br>\n        <button type=\"button\" onclick=\"ans('a');\"> EmpireStakeBuilding </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('b');\"> EmpireStateBuilding </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('c');\"> EmpireStatteBuilding </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('d');\"> EmpireStatesBuilding </button>\n    </form>\n</div>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<div class=\"question\">\n    <form>\n        <h3 id=\"timer\"></h3>\n        <label>Empire State Building</label>\n        <input id=\"questionnumber\" type=\"hidden\" value=\"2\">\n        <input id=\"correct\" type=\"hidden\" value=\"b\">\n        <br>\n        <br>\n        <button type=\"button\" onclick=\"ans('a');\"> EmpireStakeBuilding </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('b');\"> EmpireStateBuilding </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('c');\"> EmpireStatteBuilding </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('d');\"> EmpireStatesBuilding </button>\n    </form>\n</div>")
    ; __line = 17
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_q3 = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<div class=\"question\">\n    <form>\n        <h3 id=\"timer\"></h3>\n        <label>Red and Black Trees</label>\n        <input id=\"questionnumber\" type=\"hidden\" value=\"3\">\n        <input id=\"correct\" type=\"hidden\" value=\"a\">\n        <br>\n        <br>\n        <button type=\"button\" onclick=\"ans('a');\"> RedAndBlackTrees </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('b');\"> RedAndBlackTreas </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('c');\"> RedAndBlankTrees </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('d');\"> RedAndBlakeTrees </button>\n    </form>\n</div>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<div class=\"question\">\n    <form>\n        <h3 id=\"timer\"></h3>\n        <label>Red and Black Trees</label>\n        <input id=\"questionnumber\" type=\"hidden\" value=\"3\">\n        <input id=\"correct\" type=\"hidden\" value=\"a\">\n        <br>\n        <br>\n        <button type=\"button\" onclick=\"ans('a');\"> RedAndBlackTrees </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('b');\"> RedAndBlackTreas </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('c');\"> RedAndBlankTrees </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('d');\"> RedAndBlakeTrees </button>\n    </form>\n</div>")
    ; __line = 17
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_q4 = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<div class=\"question\">\n    <form>\n        <h3 id=\"timer\"></h3>\n        <label>Dynamic Programming</label>\n        <input id=\"questionnumber\" type=\"hidden\" value=\"4\">\n        <input id=\"correct\" type=\"hidden\" value=\"c\">\n        <br>\n        <br>\n        <button type=\"button\" onclick=\"ans('c');\"> dynamic-programming </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('b');\"> dynamic-prognosing </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('a');\"> dynamite-programming </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('d');\"> dynamic-programing </button>\n    </form>\n</div>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<div class=\"question\">\n    <form>\n        <h3 id=\"timer\"></h3>\n        <label>Dynamic Programming</label>\n        <input id=\"questionnumber\" type=\"hidden\" value=\"4\">\n        <input id=\"correct\" type=\"hidden\" value=\"c\">\n        <br>\n        <br>\n        <button type=\"button\" onclick=\"ans('c');\"> dynamic-programming </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('b');\"> dynamic-prognosing </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('a');\"> dynamite-programming </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('d');\"> dynamic-programing </button>\n    </form>\n</div>")
    ; __line = 17
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_q5 = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<div class=\"question\">\n    <form>\n        <h3 id=\"timer\"></h3>\n        <label>Empire State Building</label>\n        <input id=\"questionnumber\" type=\"hidden\" value=\"5\">\n        <input id=\"correct\" type=\"hidden\" value=\"b\">\n        <br>\n        <br>\n        <button type=\"button\" onclick=\"ans('c');\"> empire-statte-building </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('d');\"> empire-states-building </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('a');\"> empire-stake-building </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('b');\"> empire-state-building </button>\n    </form>\n</div>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<div class=\"question\">\n    <form>\n        <h3 id=\"timer\"></h3>\n        <label>Empire State Building</label>\n        <input id=\"questionnumber\" type=\"hidden\" value=\"5\">\n        <input id=\"correct\" type=\"hidden\" value=\"b\">\n        <br>\n        <br>\n        <button type=\"button\" onclick=\"ans('c');\"> empire-statte-building </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('d');\"> empire-states-building </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('a');\"> empire-stake-building </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('b');\"> empire-state-building </button>\n    </form>\n</div>")
    ; __line = 17
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_q6 = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<div class=\"question\">\n    <form>\n        <h3 id=\"timer\"></h3>\n        <label>Red and Black Trees</label>\n        <input id=\"questionnumber\" type=\"hidden\" value=\"6\">\n        <input id=\"correct\" type=\"hidden\" value=\"a\">\n        <br>\n        <br>\n        <button type=\"button\" onclick=\"ans('d');\"> red-and-blake-trees </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('a');\"> red-and-black-trees </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('c');\"> red-and-blank-trees </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('b');\"> red-and-black-treas </button>\n    </form>\n</div>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<div class=\"question\">\n    <form>\n        <h3 id=\"timer\"></h3>\n        <label>Red and Black Trees</label>\n        <input id=\"questionnumber\" type=\"hidden\" value=\"6\">\n        <input id=\"correct\" type=\"hidden\" value=\"a\">\n        <br>\n        <br>\n        <button type=\"button\" onclick=\"ans('d');\"> red-and-blake-trees </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('a');\"> red-and-black-trees </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('c');\"> red-and-blank-trees </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('b');\"> red-and-black-treas </button>\n    </form>\n</div>")
    ; __line = 17
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_q7 = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<div class=\"question\">\n    <form>\n        <h3 id=\"timer\"></h3>\n        <label>Schrödinger's cat</label>\n        <input id=\"questionnumber\" type=\"hidden\" value=\"7\">\n        <input id=\"correct\" type=\"hidden\" value=\"b\">\n        <br>\n        <br>\n        <button type=\"button\" onclick=\"ans('a');\"> schrödinger-cat </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('b');\"> schrödingers-cat </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('c');\"> schrödingers-cap </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('d');\"> schrödingers-car </button>\n    </form>\n</div>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<div class=\"question\">\n    <form>\n        <h3 id=\"timer\"></h3>\n        <label>Schrödinger's cat</label>\n        <input id=\"questionnumber\" type=\"hidden\" value=\"7\">\n        <input id=\"correct\" type=\"hidden\" value=\"b\">\n        <br>\n        <br>\n        <button type=\"button\" onclick=\"ans('a');\"> schrödinger-cat </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('b');\"> schrödingers-cat </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('c');\"> schrödingers-cap </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('d');\"> schrödingers-car </button>\n    </form>\n</div>")
    ; __line = 17
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_q8 = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<div class=\"question\">\n    <form>\n        <h3 id=\"timer\"></h3>\n        <label>Leaning Tower of Pisa</label>\n        <input id=\"questionnumber\" type=\"hidden\" value=\"8\">\n        <input id=\"correct\" type=\"hidden\" value=\"a\">\n        <br>\n        <br>\n        <button type=\"button\" onclick=\"ans('a');\"> leaning-tower-of-pisa </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('b');\"> leaming-tower-of-pisa </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('c');\"> leading-tower-of-pisa </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('d');\"> leaning-tower-off-pisa </button>\n    </form>\n</div>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<div class=\"question\">\n    <form>\n        <h3 id=\"timer\"></h3>\n        <label>Leaning Tower of Pisa</label>\n        <input id=\"questionnumber\" type=\"hidden\" value=\"8\">\n        <input id=\"correct\" type=\"hidden\" value=\"a\">\n        <br>\n        <br>\n        <button type=\"button\" onclick=\"ans('a');\"> leaning-tower-of-pisa </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('b');\"> leaming-tower-of-pisa </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('c');\"> leading-tower-of-pisa </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('d');\"> leaning-tower-off-pisa </button>\n    </form>\n</div>")
    ; __line = 17
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_q9 = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<div class=\"question\">\n    <form>\n        <h3 id=\"timer\"></h3>\n        <label>World Cup Final</label>\n        <input id=\"questionnumber\" type=\"hidden\" value=\"9\">\n        <input id=\"correct\" type=\"hidden\" value=\"d\">\n        <br>\n        <br>\n        <button type=\"button\" onclick=\"ans('a');\"> word-cup-final </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('b');\"> worst-cup-final </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('c');\"> world-sup-final </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('d');\"> world-cup-final </button>\n    </form>\n</div>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<div class=\"question\">\n    <form>\n        <h3 id=\"timer\"></h3>\n        <label>World Cup Final</label>\n        <input id=\"questionnumber\" type=\"hidden\" value=\"9\">\n        <input id=\"correct\" type=\"hidden\" value=\"d\">\n        <br>\n        <br>\n        <button type=\"button\" onclick=\"ans('a');\"> word-cup-final </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('b');\"> worst-cup-final </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('c');\"> world-sup-final </button>\n        <br>\n        <button type=\"button\" onclick=\"ans('d');\"> world-cup-final </button>\n    </form>\n</div>")
    ; __line = 17
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_results = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<!DOCTYPE html>\n<html lang=\"en\">\n    <head>\n        <meta charset=\"UTF-8\"/>\n        <meta name=\"author\" content=\"Hoormazd Pirayeshfar\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n        <script src='https://cdn.plot.ly/plotly-2.16.1.min.js'></script>\n        <title>Results</title>\n    </head>\n    <body onload=\"init();\">\n        <section class=\"container\">\n            <a href=\"/results/download\">Download JSON</a>\n            <a href=\"/results/csv\">Download CSV</a>\n            <% \n            var camelScore = 0;\n            var camelCount = 0;\n            var camelTime = 0;\n\n            var kebab_score = 0;\n            var kebab_count = 0;\n            var kebab_time = 0;\n            \n            var total = 0;\n            var surveysanswered = 0;\n\n            results.forEach(result => {\n                surveysanswered++;\n                result.answers.forEach(answer => {\n                    if (\n                        answer.question == \"1\" || \n                        answer.question == \"2\" || \n                        answer.question == \"3\" ||\n                        answer.question == \"10\" ||\n                        answer.question == \"11\" ||\n                        answer.question == \"12\"\n                        ) {\n                        total += 1;\n                        var time = +answer.time;\n                        camelTime += time;\n                        var score = 1/time;\n                        if (answer.entered == answer.correct) {\n                            camelScore += score;\n                            camelCount += 1;\n                            \n                        }\n                        else {\n                            camelScore -= time/5;\n                        }\n                    }\n                    if (\n                        answer.question == \"4\" || \n                        answer.question == \"5\" || \n                        answer.question == \"6\" ||\n                        answer.question == \"7\" || \n                        answer.question == \"8\" || \n                        answer.question == \"9\") {\n                        var time = +answer.time;\n                        kebab_time += time;\n                        var score = 1/time;\n                        if (answer.entered == answer.correct) {\n                            kebab_score += score;\n                            kebab_count += 1;\n                        }\n                        else {\n                            kebab_score -= time/5;\n                        }\n                    }\n                });\n            }); \n            var data = [\n                {\n                    x: ['camelCase', 'kebab-case'],\n                    y: [camelScore, kebab_score],\n                    type: 'bar'\n                }\n                ];\n            var count = [\n                {\n                    x: ['camelCase', 'kebab-case'],\n                    y: [camelCount, kebab_count],\n                    type: 'bar'\n                }\n                ];\n            var time = [\n                {\n                    x: ['camelCase', 'kebab-case'],\n                    y: [camelTime/total, kebab_time/total],\n                    type: 'bar'\n                }\n                ];\n            %>\n            <h1>Over all score from <%-surveysanswered%> surveys answered:</h1>\n            <div id=\"graph1\"></div>\n            <br>\n\n            <h1>Correct answer count out of <%- total%> questions:</h1>\n            <div id=\"graph2\"></div>\n            <br>\n\n            <h1>Average answering times (s)</h1>\n            <div id=\"graph3\"></div>\n            <br>\n            <script>\n                Plotly.newPlot('graph1', <%-JSON.stringify(data)%>);\n                Plotly.newPlot('graph2', <%-JSON.stringify(count)%>);\n                Plotly.newPlot('graph3', <%-JSON.stringify(time)%>);\n            </script>\n            <div>\n                <%-JSON.stringify(results)%>\n            </div>\n        </section>\n      </body>\n</html>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<!DOCTYPE html>\n<html lang=\"en\">\n    <head>\n        <meta charset=\"UTF-8\"/>\n        <meta name=\"author\" content=\"Hoormazd Pirayeshfar\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n        <script src='https://cdn.plot.ly/plotly-2.16.1.min.js'></script>\n        <title>Results</title>\n    </head>\n    <body onload=\"init();\">\n        <section class=\"container\">\n            <a href=\"/results/download\">Download JSON</a>\n            <a href=\"/results/csv\">Download CSV</a>\n            ")
    ; __line = 14
    ;  
            var camelScore = 0;
            var camelCount = 0;
            var camelTime = 0;

            var kebab_score = 0;
            var kebab_count = 0;
            var kebab_time = 0;
            
            var total = 0;
            var surveysanswered = 0;

            results.forEach(result => {
                surveysanswered++;
                result.answers.forEach(answer => {
                    if (
                        answer.question == "1" || 
                        answer.question == "2" || 
                        answer.question == "3" ||
                        answer.question == "10" ||
                        answer.question == "11" ||
                        answer.question == "12"
                        ) {
                        total += 1;
                        var time = +answer.time;
                        camelTime += time;
                        var score = 1/time;
                        if (answer.entered == answer.correct) {
                            camelScore += score;
                            camelCount += 1;
                            
                        }
                        else {
                            camelScore -= time/5;
                        }
                    }
                    if (
                        answer.question == "4" || 
                        answer.question == "5" || 
                        answer.question == "6" ||
                        answer.question == "7" || 
                        answer.question == "8" || 
                        answer.question == "9") {
                        var time = +answer.time;
                        kebab_time += time;
                        var score = 1/time;
                        if (answer.entered == answer.correct) {
                            kebab_score += score;
                            kebab_count += 1;
                        }
                        else {
                            kebab_score -= time/5;
                        }
                    }
                });
            }); 
            var data = [
                {
                    x: ['camelCase', 'kebab-case'],
                    y: [camelScore, kebab_score],
                    type: 'bar'
                }
                ];
            var count = [
                {
                    x: ['camelCase', 'kebab-case'],
                    y: [camelCount, kebab_count],
                    type: 'bar'
                }
                ];
            var time = [
                {
                    x: ['camelCase', 'kebab-case'],
                    y: [camelTime/total, kebab_time/total],
                    type: 'bar'
                }
                ];
            
    ; __line = 91
    ; __append("\n            <h1>Over all score from ")
    ; __line = 92
    ; __append(surveysanswered)
    ; __append(" surveys answered:</h1>\n            <div id=\"graph1\"></div>\n            <br>\n\n            <h1>Correct answer count out of ")
    ; __line = 96
    ; __append( total)
    ; __append(" questions:</h1>\n            <div id=\"graph2\"></div>\n            <br>\n\n            <h1>Average answering times (s)</h1>\n            <div id=\"graph3\"></div>\n            <br>\n            <script>\n                Plotly.newPlot('graph1', ")
    ; __line = 104
    ; __append(JSON.stringify(data))
    ; __append(");\n                Plotly.newPlot('graph2', ")
    ; __line = 105
    ; __append(JSON.stringify(count))
    ; __append(");\n                Plotly.newPlot('graph3', ")
    ; __line = 106
    ; __append(JSON.stringify(time))
    ; __append(");\n            </script>\n            <div>\n                ")
    ; __line = 109
    ; __append(JSON.stringify(results))
    ; __append("\n            </div>\n        </section>\n      </body>\n</html>")
    ; __line = 113
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_tq1 = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<div class=\"question\">\n    <form>\n        <h3 id=\"timer\"></h3>\n        <label>Test Question</label>\n        <input id=\"questionnumber\" type=\"hidden\" value=\"1\">\n        <input id=\"correct\" type=\"hidden\" value=\"c\">\n        <br>\n        <br>\n        <button type=\"button\" onclick=\"tans();\"> TestQeustion </button>\n        <br>\n        <button type=\"button\" onclick=\"tans();\"> TesQuestion </button>\n        <br>\n        <button type=\"button\" onclick=\"tans();\"> TestQuestion </button>\n        <br>\n        <button type=\"button\" onclick=\"tans();\"> TestQuestoin </button>\n    </form>\n</div>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<div class=\"question\">\n    <form>\n        <h3 id=\"timer\"></h3>\n        <label>Test Question</label>\n        <input id=\"questionnumber\" type=\"hidden\" value=\"1\">\n        <input id=\"correct\" type=\"hidden\" value=\"c\">\n        <br>\n        <br>\n        <button type=\"button\" onclick=\"tans();\"> TestQeustion </button>\n        <br>\n        <button type=\"button\" onclick=\"tans();\"> TesQuestion </button>\n        <br>\n        <button type=\"button\" onclick=\"tans();\"> TestQuestion </button>\n        <br>\n        <button type=\"button\" onclick=\"tans();\"> TestQuestoin </button>\n    </form>\n</div>")
    ; __line = 17
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}