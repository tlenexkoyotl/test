const assert = require('chai').assert;
const StringBalancer = require('../../src/stringBalancer');
const balancer = new StringBalancer();

suite('String balancer tests', () => {
    test('Case 1', () => {
        assert.isTrue(balancer.__isBalanced('<>'));
        assert.isTrue(balancer.__isBalanced('sdfghf<dffgfhh>fdggfhhgj'));
    });

    test('Case 2', () => {
        assert.isTrue(balancer.__isBalanced('<<>>'));
        assert.isTrue(balancer.__isBalanced('sdfgdh<fdfgghfghf<dffgfghghh>gfgfhghf>hgfgfhhgf'));
    });

    test('Case 3', () => {
        assert.isTrue(balancer.__isBalanced('<><>'));
        assert.isTrue(balancer.__isBalanced('ffdggfhhgf<gfhhgghghghf>ghfghfgfhhgf<ghghfhgfghf>ghfhgfhgf'));
    });

    test('Case 4', () => {
        assert.isFalse(balancer.__isBalanced('>>'));
        assert.isFalse(balancer.__isBalanced('sdfdgfg>gfgfhghfghfghjkljuu>uooliiu'));
    });

    test('Case 5', () => {
        assert.isFalse(balancer.__isBalanced('ghyyu6676546y<6uj78yhthy<y6786y>yjujyujyujyuj'));
    });

    test('Case 6', () => {
        assert.isFalse(balancer.__isBalanced('ghghjj>ghghghjg<hjjhjhgghj>hjghjgjh<hjgjhg'));
    });

    test('Case 7', () => {
        assert.isTrue(balancer.__isBalanced('gfhghjjh<gfhh5r654>32334535'));
    });
});

