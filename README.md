# eslint-config-brinkbit

[![npm version](https://badge.fury.io/js/eslint-config-brinkbit.svg)](http://badge.fury.io/js/eslint-config-brinkbit)

This package provides Brinkbit's base JS .eslintrc as an extensible shared config.

## Usage

We export two ESLint configurations for your usage.

### eslint-config-brinkbit

Our default export contains Airbnb's ESLint rules with a few custom overrides. It requires
`eslint`,
`eslint-config-airbnb-base`,
`eslint-plugin-import`,
`eslint-plugin-jsx-a11y`, and
`eslint-plugin-react`.

1. Install the correct versions of each package, which are listed by the command:

  ```sh
  npm info "eslint-config-brinkbit@latest" peerDependencies
  ```

  Linux/OSX users can simply run
  ```sh
  (
    export PKG=eslint-config-brinkbit;
    npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs yarn add --dev "$PKG@latest"
  )
  ```

  Which produces and runs a command like:

  ```sh
    yarn add --dev eslint-config-brinkbit eslint@^#.#.# eslint-plugin-import@^#.#.#
  ```

2. Add `"extends": "brinkbit"` or `"extends": "brinkbit/test"` to your .eslintrc
