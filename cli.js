#!/usr/bin/env node
import process from 'node:process';
import meow from 'meow';
import {findUpSync, findUpMultipleSync} from 'find-up';

const cli = meow(`
	Usage
	  $ find-up <filename>

	Options
	  --cwd=<directory>  Working directory
	  --all              Output all matching files, not just the first

	Example
	  $ echo $PWD
	  /Users/sindresorhus/foo/bar
	  $ find-up unicorn.png
	  /Users/sindresorhus/unicorn.png
	  $ find-up unicorn.png --all
	  /Users/sindresorhus/foo/unicorn.png
	  /Users/sindresorhus/unicorn.png
`, {
	importMeta: import.meta,
	flags: {
		cwd: {
			type: 'string',
		},
		all: {
			type: 'boolean',
		},
	},
});

if (cli.input.length === 0) {
	console.error('Specify a filename');
	process.exit(1);
}

const findUp = cli.flags.all ? findUpMultipleSync : findUpSync;

let filePath = findUp(cli.input[0], cli.flags);

if (cli.flags.all) {
	filePath = filePath.join('\n');
}

if (filePath) {
	console.log(filePath);
} else {
	process.exitCode = 1;
}
