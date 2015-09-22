import React from 'react';
import { jsdom } from 'jsdom';

import { equal, test } from './testUtils';

let passed = 0;
let failed = 0;

console.log('\n*** Section - React component tests ***\n');

test(() => {
    equal(
        1,
        1,
        'True assertion.'
    ) ? passed++ : failed++;
});

console.log('\n*** End section ***');
console.log('*** ' + passed + ' passed, ' + failed + ' failed ***');

if (failed) {
    console.error('Fatal error: some tests have failed');
}
