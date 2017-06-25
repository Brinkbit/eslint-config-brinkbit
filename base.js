module.exports = {
    extends: 'airbnb',
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    env: {
        'browser': true,
    },
    plugins: [
        'babel',
        'node',
        'react',
        'promise',
    ],
    rules: {
        indent: [ 2, 4, { SwitchCase: 1 }],
        'space-in-parens': [ 2, 'always', { exceptions: [ '{}', '[]', '()' ] }],
        strict: [ 2, 'global' ],
        'brace-style': [ 2, 'stroustrup' ],
        'array-bracket-spacing': [ 2, 'always', {
            singleValue: false,
            objectsInArrays: false,
            arraysInArrays: false,
        }],
        'comma-dangle': [ 2, {
            functions: 'never',
            arrays: 'always-multiline',
            objects: 'always-multiline',
            imports: 'always-multiline',
            exports: 'always-multiline',
        }],
        'no-param-reassign': 0,
        'no-underscore-dangle': 0,
        'jsx-quotes': [ 2, 'prefer-single' ],
        'react/jsx-indent': [ 2, 4 ],
        'react/jsx-uses-react': 2,
        'react/jsx-uses-vars': 2,
        'react/jsx-filename-extension': [ 1, { 'extensions': [ '.js', '.jsx' ] }],
    },
};
