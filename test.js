'use strict';
var test = require('ava');
var childProcess = require('child_process');

test(function (t) {
	t.plan(2);

	childProcess.execFile('./cli.js', ['test.js', '--cwd=fixture'], {
		cwd: __dirname
	}, function (err, stdout) {
		t.error(err);
		t.is(stdout.trim(), __filename);
	});
});
