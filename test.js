import test from 'ava';
import execa from 'execa';

test('main', async t => {
	const {stdout} = await execa('./cli.js', ['test.js', '--cwd=fixture']);
	t.is(stdout, __filename);
});
