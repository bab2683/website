module.exports = {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-prettier'],
  plugins: ['stylelint-order'],
  defaultSeverity: 'error',
  customSyntax: 'postcss-scss',

  rules: {
    'color-function-notation': null,
    'alpha-value-notation': null,
    'function-name-case': null,
    'selector-class-pattern': null,
    'keyframes-name-pattern': null,
    'selector-pseudo-class-no-unknown': null,
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['blockless-after-same-name-blockless', 'first-nested'],
        ignore: ['after-comment'],
        ignoreAtRules: ['else'],
      },
    ],
    'at-rule-name-case': 'lower',
    'block-closing-brace-newline-after': [
      'always',
      {
        ignoreAtRules: ['if', 'else'],
      },
    ],
    'color-hex-case': 'lower',
    'color-hex-length': 'short',

    'comment-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['stylelint-commands'],
        ignoreComments: [/^rtl/],
        severity: 'error',
      },
    ],
    'custom-property-empty-line-before': [
      'always',
      {
        except: ['after-custom-property', 'first-nested'],
        ignore: ['after-comment', 'inside-single-line-block'],
      },
    ],
    'declaration-block-single-line-max-declarations': 1,
    'length-zero-no-unit': true,
    'max-empty-lines': [1, { severity: 'error' }],
    'order/properties-alphabetical-order': true,
    'property-case': 'lower',
    'selector-max-empty-lines': 0,
    'selector-pseudo-class-case': 'lower',
    'selector-pseudo-element-case': 'lower',
    'selector-type-case': 'lower',
    'unit-case': 'lower',
    'value-keyword-case': ['lower', { camelCaseSvgKeywords: true, ignoreKeywords: ['dummyValue'] }],

    'scss/at-import-partial-extension': null,
    'scss/at-mixin-pattern': null,
    'scss/no-global-function-names': null,
    'scss/dollar-variable-pattern': null,
    'scss/at-function-pattern': null,
  },
};
