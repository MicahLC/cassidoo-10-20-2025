import test from 'node:test';
import assert from 'node:assert';
import splitByWidths from './index.ts';

test('splitByWidths', async t => {
    await t.test('trivial example', (t) => {
        assert.deepStrictEqual(
            splitByWidths('short', [10]),
            ['short']
        )
    });

    await t.test('single width', (t) => {
        assert.deepStrictEqual(
            splitByWidths('short', [1]),
            ['s', 'h', 'o', 'r', 't']
        )
    });

    await t.test('example from email', (t) => {
        const result = splitByWidths('Supercalifragilisticexpialidocious', [5, 9, 4]);
        assert.deepStrictEqual(result, ['Super', 'califragi', 'list', 'icex', 'pial', 'idoc', 'ious']);
    });

    await t.test('widths is longer', (t) => {
        assert.deepStrictEqual(
            splitByWidths('short', [1, 2, 3, 4, 5]),
            ['s', 'ho', 'rt']
        )
    });
});