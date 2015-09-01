#!/usr/bin/env node
'use strict';
var meow = require('meow');
var findUp = require('find-up');

var cli = meow({
	help: [
		'Usage',
		'  $ find-up <filename>',
		'',
		'Options',
		'  --cwd=<dir>  Working directory',
		'',
		'Examples',
		'  $ echo $PWD',
		'  /Users/sindresorhus/foo/bar',
		'  $ find-up unicorn.png',
		'  /Users/sindresorhus/unicorn.png'
	]
});

if (cli.input.length === 0) {
	console.error('Please specify a filename');
	process.exit(1);
}

var filepath = findUp.sync(cli.input[0], cli.flags);

if (filepath) {
	console.log(filepath);
	process.exit();
} else {
	process.exit(1);
}
