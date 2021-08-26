#!/usr/bin/env node
import process from 'node:process';
import meow from 'meow';
import {findUpSync} from 'find-up';

const cli = meow(`
	Usage
	  $ find-up <filename>

	Options
	  --cwd=<directory>  Working directory

	Example
	  $ echo $PWD
	  /Users/sindresorhus/foo/bar
	  $ find-up unicorn.png
	  /Users/sindresorhus/unicorn.png
`, {
	importMeta: import.meta,
	flags: {
		cwd: {
			type: 'string',
		},
	},
});

if (cli.input.length === 0) {
	console.error('Specify a filename');
	process.exit(1);
}

const filePath = findUpSync(cli.input[0], cli.flags);

if (filePath) {
	console.log(filePath);
	process.exit(0);
} else {
	process.exit(1);
}
