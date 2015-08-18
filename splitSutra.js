var fs=require("fs");
var filename="phyagchen001(with pb)";
var fn=fs.readFileSync("./"+filename+".xml","utf8");

var splitbySutra=function(m){
	var content=m.replace(/<sutra id/g,"#<sutra id")
				.replace(/<pb id="1.1b"\/>\r?\n#<sutra/g,'#<pb id="1.1b"/>\r\n<sutra');
	var arr=content.split("#");
	arr.map(function(sutra){
		sutra.replace(/M\d+/,function(id){
			fs.writeFileSync("./splited/"+filename+"_sutra"+id+".xml",sutra,"utf8");
		});
	});
}
var t=new Date();
splitbySutra(fn);
console.log(new Date()-t);