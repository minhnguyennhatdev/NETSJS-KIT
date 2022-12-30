module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'build',
        'feat',
        'fix',
        'optimize',
        'refactor',
        'test',
        'debug',
        'update',
      ],
    ],
  }
};