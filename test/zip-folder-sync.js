'use strict';

var qiaoPluginZip = require('../lib/qiao.plugin.zip');

var test = async function(){
	try{
		var sourceFolder= 'd:/test/';
		var destZip		= 'd:/test04.zip';

		console.log('zip folder ' + sourceFolder);
		console.log('in ' + destZip);
		
		console.log();
		console.log('please wait a moment~');
		
		var msg = await qiaoPluginZip.zipFolderSync(sourceFolder, destZip);

		console.log();
		console.log(msg);
	}catch(e){
		console.log(e);
	}
};

test();