import {fileURLToPath} from 'node:url';
import test from 'ava';
import {execa} from 'execa';

const __filename = fileURLToPath(import.meta.url);

test('main', async t => {
	const {stdout} = await execa('./cli.js', ['test.js', '--cwd=fixture']);
	t.is(stdout, __filename);
});

test('--all', async t => {
	const {stdout} = await execa('./cli.js', ['test.js', '--cwd=fixture2/x', '--all']);
	t.is(stdout.split('\n').length, 2);
});
