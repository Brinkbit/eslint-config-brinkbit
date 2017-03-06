module.exports = {
    extends: 'brinkbit/base',
    env: {
        mocha: true
    },
    rules: {
        'no-unused-expressions': 0,
        'prefer-arrow-callback': 0,
        'func-names': 0,
        'space-before-function-paren': [ 2, 'never' ],
        'max-nested-callbacks': 0,
        'import/no-extraneous-dependencies': 0,
    },
};
