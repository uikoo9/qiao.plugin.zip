'use strict';

var qiaoPluginZip = require('../../lib/qiao.plugin.zip.js');

var test = async function(){
	try{
		var sourceFolder	= 'd:/test';// 该路径下多文件夹，多文件等
		var destZip			= 'd:/qiao.plugin.zip/demo97/test.zip';// demo97不存在

		await qiaoPluginZip.zipFolderSync(sourceFolder, destZip, 'test');
	}catch(e){
		console.log(e);
	}
};

test();