var fs=require("fs");
var list=fs.readFileSync("./data_list.txt","utf8").split(/\r?\n/);

var splitbySutra=function(m,fn){
	var content=m.replace(/<sutra id/g,"#<sutra id")
				.replace(/<pb id="1.1b"\/>\r?\n#<sutra/g,'#<pb id="1.1b"/>\r\n<sutra');
	fn=fn.replace(/.xml/g,"");
	var arr=content.split("#");
	arr.map(function(sutra){
		sutra.replace(/M\d+/,function(id){
			fs.writeFileSync("./splited/"+fn+"_sutra"+id+".xml",sutra,"utf8");
		});
	});
}

var readFile=function(fn){
	var content=fs.readFileSync("./data/"+fn,"utf8");
	splitbySutra(content,fn);
}
var t=new Date();
list.map(readFile);
console.log(new Date()-t);
//splitbySutra(fn);
//
