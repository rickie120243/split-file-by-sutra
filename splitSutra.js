var fs=require("fs");
var mkdirp = require("mkdirp")
var getDirName = require("path").dirname
var list=fs.readFileSync("./data/data_list.txt","utf8").split(/\r?\n/);

var writeFile=function(path, contents, cb) {
  mkdirp(getDirName(path), function (err) {
    if (err) return cb(err)
    fs.writeFileSync(path,contents,"utf8");
  });
} 

var splitbySutra=function(m,fn){
	var content=m.replace(/<sutra id/g,"#<sutra id")
				.replace(/<pb id="1.1[ab]"\/>\r?\n#<sutra/g,'#<pb id="1.1b"/>\r\n<sutra'); //
	var name=fn.split(".");
	var arr=content.split("#");
	arr.map(function(sutra){
		sutra.replace(/M\d+/,function(id){   //M
			writeFile("./splited/"+name[0]+"/"+name[0]+"_sutra"+id+"."+name[1],sutra);
		});
	});
}

var readFile=function(fn){
	if(fn==="") return;
	var content=fs.readFileSync("./data/"+fn,"utf8");
	splitbySutra(content,fn);
}

list.map(readFile);