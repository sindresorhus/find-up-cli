#!/usr/bin/env node
'use strict';
const meow = require('meow');
const findUp = require('find-up');

const cli = meow(`
	Usage
	  $ find-up <filename>

	Options
	  --cwd=<dir>  Working directory

	Example
	  $ echo $PWD
	  /Users/sindresorhus/foo/bar
	  $ find-up unicorn.png
	  /Users/sindresorhus/unicorn.png
`, {
	flags: {
		cwd: {
			type: 'string'
		}
	}
});

if (cli.input.length === 0) {
	console.error('Specify a filename');
	process.exit(1);
}

const filepath = findUp.sync(cli.input[0], cli.flags);

if (filepath) {
	console.log(filepath);
	process.exit();
} else {
	process.exit(1);
}
