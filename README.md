# qiao.plugin.zip
nodejs zip and unzip tool

# install
npm install qiao.plugin.zip

# dependencies
1. unzip by adm-zip
2. zip file by archiver
3. zip folder by archiver

# unzip
	'use strict';
	
	var qiaoPluginZip = require('qiao.plugin.zip');
	
	var test = function(){
		var zipFile 	= 'd:/test1.zip';
		var destFolder	= 'd:/test2/';
		
		qiaoPluginZip.unzip(zipFile, destFolder);
	};
	
	test();

# zip file sync
	'use strict';
	
	var qiaoPluginZip = require('qiao.plugin.zip');
	
	var test = async function(){
		var sourceFile	= 'd:/test.js';
		var destZip	= 'd:/test22.zip';
		
		try{
			var msg = await qiaoPluginZip.zipFileSync(sourceFile, destZip);
			console.log(msg);
		}catch(e){
			console.log(e);
		}
	};
	
	test();

# zip folder sync
	'use strict';
	
	var qiaoPluginZip = require('qiao.plugin.zip');
	
	var test = async function(){
		var sourceFolder	= 'd:/test/';
		var destZip		= 'd:/test24.zip';
		
		try{
			var msg = await qiaoPluginZip.zipFolderSync(sourceFolder, destZip);
			console.log(msg);
		}catch(e){
			console.log(e);
		}
	};
	
	test();

# zip file async
	'use strict';
	
	var qiaoPluginZip = require('qiao.plugin.zip');
	
	var test = function(){
		var sourceFile	= 'd:/test.js';
		var destZip	= 'd:/test22.zip';
		
		qiaoPluginZip.zipFile(sourceFile, destZip, function(err, msg){
			if(err) throw err;
			
			console.log(msg);
		});
	};
	
	test();

# zip folder async
	'use strict';
	
	var qiaoPluginZip = require('qiao.plugin.zip');
	
	var test = function(){
		var sourceFolder	= 'd:/test/';
		var destZip		= 'd:/test23.zip';
		
		qiaoPluginZip.zipFolder(sourceFolder, destZip, function(err, msg){
			if(err) throw err;
			
			console.log(msg);
		});
	};
	
	test();

# also in cli
	npm install -g qiao.plugin.zip

	qiao-plugin-zip unzip		d:/test.zip	d:/test
	qiao-plugin-zip zipfile		d:/test.js	d:/test1.zip
	qiao-plugin-zip zipfolder	d:/test/	d:/test2.zip

# version
### 0.0.5.20180117
1. add log
2. var test
3. wait...

### 0.0.4.20180113
1. 代码优化

### 0.0.3.20180112
1. add qiao-plugin-zip cli
2. npm publish 0.0.9
3. crlf --> lf

### 0.0.2.20171229
1. 修改readme.md的代码示例

### 0.0.1.20171228
1. 初始化项目
2. unzip by adm-zip
3. zip file by archiver
4. zip folder by archiver
5. zip file sync
6. zip folder sync
7. readme.md
8. add index.js