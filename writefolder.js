var mkdirp = require("mkdirp")
var fs = require("fs")
var getDirName = require("path").dirname
var writeFile=function(path, contents, cb) {
  mkdirp(getDirName(path), function (err) {
    if (err) return cb(err)
    fs.writeFile(path, contents, cb)
  })
}
var a="folder/hi";
var out="asdasfgagqwgreagrafvasvergeafsrfgasfsfwdfwefwef";
writeFile(a,out);