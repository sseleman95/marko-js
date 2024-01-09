var ok = require("assert").ok;
var cache = require("./cache");
var jsonFileReader = require("./json-file-reader");
var loaders = require("./loaders");
var types = require("./types");

function loadFromFile(filePath, isFromPackageJson) {
  ok(filePath, '"filePath" is required');

  var taglib = cache.get(filePath);

  // Only load a taglib once by caching the loaded taglibs using the file
  // system file path as the key
  if (!taglib) {
    taglib = new types.Taglib(filePath, isFromPackageJson);
    cache.put(filePath, taglib);

    var taglibProps = jsonFileReader.readFileSync(filePath);
    loaders.loadTaglibFromProps(taglib, taglibProps);
  }

  return taglib;
}

module.exports = loadFromFile;
