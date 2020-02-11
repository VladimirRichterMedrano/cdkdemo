import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import TestVlady1 = require('../lib/test_vlady1-stack');

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new TestVlady1.TestVlady1Stack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
